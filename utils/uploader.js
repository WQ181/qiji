// created by gpake


var config = {
    qiniuRegion: '',
    qiniuImageURLPrefix: '',
    qiniuUploadToken: '',
    qiniuUploadTokenURL: '',
    qiniuUploadTokenFunction: null,
    qiniuShouldUseQiniuFileName: false,
    key: null
}
// 在整个程序生命周期中，只需要 init 一次即可
// 如果需要变更参数，再调用 init 即可
function init(options) {
    config = {
        qiniuRegion: '',
        qiniuImageURLPrefix: '',
        qiniuUploadToken: '',
        qiniuUploadTokenURL: '',
        qiniuUploadTokenFunction: null,
        qiniuShouldUseQiniuFileName: false
    };
    console.log("init config...");
    // updateConfigWithOptions(options);
}

function updateConfigWithOptions(options) {
    if (options.region) {
        config.qiniuRegion = options.region;
    } else {
        console.error('qiniu uploader need your bucket region');
    }
    if (options.uptoken) {
        config.qiniuUploadToken = options.uptoken;
    } else if (options.uptokenURL) {
        config.qiniuUploadTokenURL = options.uptokenURL;
    } else if(options.uptokenFunc) {
        config.qiniuUploadTokenFunction = options.uptokenFunc;
    }
    if (options.domain) {
        config.qiniuImageURLPrefix = options.domain;
    }
    config.qiniuShouldUseQiniuFileName = options.shouldUseQiniuFileName
}

function upload(filePath, success, fail, options, progress) {
    if (null == filePath) {
        console.error('qiniu uploader need filePath to upload');
        return;
    }
    if (options) {
      updateConfigWithOptions(options);
    }
    if (config.qiniuUploadToken) {
        doUpload(filePath, success, fail, options, progress);
    } else if (config.qiniuUploadTokenURL) {
        getQiniuToken(function() {
            doUpload(filePath, success, fail, options, progress);
        });
    } else if (config.qiniuUploadTokenFunction) {
        config.qiniuUploadToken = config.qiniuUploadTokenFunction();
        if (null == config.qiniuUploadToken && config.qiniuUploadToken.length > 0) {
            console.error('qiniu UploadTokenFunction result is null, please check the return value');
            return
        }
        doUpload(filePath, success, fail, options, progress);
    } else {
        console.error('qiniu uploader need one of [uptoken, uptokenURL, uptokenFunc]');
        return;
    }
}

function doUpload(filePath, success, fail, options, progress) {
    if (null == config.qiniuUploadToken && config.qiniuUploadToken.length > 0) {
        console.error('qiniu UploadToken is null, please check the init config or networking');
        return
    }
    var url = uploadURLFromRegionCode(config.qiniuRegion);
    var fileName = filePath.split('//')[1];
    var s = filePath.split('.');
    var fileExten = s[s.length-1];
    if (options && options.key) {
        fileName = options.key;
    }else if(config && config.key){
        fileName = config.key+'.'+fileExten;
    }
    var formData = {
        'token': config.qiniuUploadToken
    };
    if (!config.qiniuShouldUseQiniuFileName) {
      formData['key'] = fileName
    }
    var uploadTask = uni.uploadFile({
        url,
        filePath,
        name: 'file',
        formData,
        success: function (res) {
          var dataString = res.data
		  console.log("dataString",dataString)
          if(res.data.hasOwnProperty('type') && res.data.type === 'Buffer'){
            dataString = String.fromCharCode.apply(null, res.data.data)
			console.log("dataString",dataString)
          }          
          try {
            var dataObject = JSON.parse(dataString);
            //do something
            var imageUrl = config.qiniuImageURLPrefix + '/' + dataObject.key;
            dataObject.imageURL = imageUrl;
            console.log("dataObject",dataObject);
            if (success) {
				console.log("succcess")
              success(dataObject);
            }
          } catch(e) {
            console.log('parse JSON failed, origin String is: ' + dataString)
            if (fail) {
				console.log("fail",e)
              fail(e);
            }
          }
        },
        fail: function (error) {
            console.error(error);
            if (fail) {
                fail(error);
            }
        }
    })

    uploadTask.onProgressUpdate((res) => {
        progress && progress(res)
    })
}

function getQiniuToken(callback) {
  uni.request({
    url: config.qiniuUploadTokenURL,
    success: function (res) {
      console.log(res)
      var token = res.data.token;
      var fileid = res.data.fileid;
      console.log("fileid",fileid,res.data.fileid)
      if (token && token.length > 0 ) {
        config.qiniuUploadToken = token;
        if (fileid){
            config.key = fileid;
            if (callback) {
                callback();
            }
        }else{
            console.error('qiniuUploader cannot get your fileid, please check the uptokenURL or server')
        }
      } else {
        console.error('qiniuUploader cannot get your token, please check the uptokenURL or server')
      }
    },
    fail: function (error) {
      console.error('qiniu UploadToken is null, please check the init config or networking: ' + error);
    }
  })
}

function uploadURLFromRegionCode(code) {
    var uploadURL = null;
    switch(code) {
        case 'ECN': uploadURL = 'https://up.qbox.me'; break;
        case 'NCN': uploadURL = 'https://up-z1.qbox.me'; break;
        case 'SCN': uploadURL = 'https://up-z2.qiniup.com'; break;
        case 'NA': uploadURL = 'https://up-na0.qbox.me'; break;
        case 'ASG': uploadURL = 'https://up-as0.qbox.me'; break;
        default: console.error('please make the region is with one of [ECN, SCN, NCN, NA, ASG]');
    }
    return uploadURL;
}
export default{
	init,
	upload
}
