const globalData = {
	wardrobe_list:[],
	question_data:[],
	member_list: [],
	consult_list: [],
	isMember: '',
	listReview: '',
	kf_Review: '',
	user: '',
	openid: '',
	isTested: '',
	isLogin: '',
	userInfo: '',

	level: '',
	url: '',
	user_id: '',
	chat_id: '',
	kf_chat_id: '',
	local_id: '', //存储消息记录id
	kf_locai_id:'',//客服存储消息id
	reconnect: '', //判断是否需要重连

	question: [],
	answered: [],
	unanswered: [],
	member_an: [],//会员已回答列表
	member_unan: [],//会员未回答问题列表
	consult_an:[],//顾问已回答列表
	msg: [],
	kf_msg: [],
	kf_Msg_type: {
		command: {
			/**
			 * 心跳请求
			 */
			HEARTBEAT_REQ: 1,

			/**
			 * 握手请求
			 */
			HANDSHAKE_REQ: 2,
			/**
			 * 握手响应
			 */
			HANDSHAKE_RESP: 3,
			/**
			 * 将消息置为已读
			 */
			KF_P2P_READ_REQ: 31,
			/**
			 * 进群（扫描个人消息）
			 */
			KF_JOIN_P2P_REQ: 33,
			/**
			 * p2p text
			 */
			KF_P2P_REQ: 50,
			KF_P2P_NTY: 51,
			/**
			 * p2p voice
			 */
			KF_VOICE_REQ: 52,
			KF_VOICE_NTY: 53,
			/**
			 * p2p picture
			 */
			KF_PICTURE_REQ: 54,
			KF_PICTURE_NTY: 55,
			/**
			 * p2p视频
			 */
			KF_VIDEO_REQ: 56,
			KF_VIDEO_NTY: 57,
			/**
			 * p2p close
			 */
			KF_CLOSE_REQ: 40,
			KF_CLOSE_NTY: 41,
		},
		text: function(content) {
			console.log("//ToDo and display:", content);
		},
		picture: function(url) {
			console.log("//ToDo and display:", url);
		},
		voice: function(url) {
			console.log("//ToDo and display:", url);
		},
		video: function(url) {
			console.log("//ToDo and display:", url);
		},
		close: function(url) {
			console.log("//ToDo and display:", content);
		},
		SiteImCommandReverse: function(command_str) { //指令转相应的函数名

			var command = this.command;
			for (var index in command) {
				if ("000" + command[index] == command_str) {
					console.log("指令名：", "000" + command[index], "是否相等", "000" + command[index] == command_str);
					if (command_str == "00051") return "text";
					else if (command_str == "00055") return "picture";
					else if (command_str == "00057") return "video";
					else if (command_str == "00053") return "voice";
					else if (command_str == "00041") return "text";
				}
				continue;
			}
			return null;
		}
	},
	Msg_type: {
		command: {
			/**
			 * 心跳请求
			 */
			HEARTBEAT_REQ: 1,

			/**
			 * 握手请求
			 */
			HANDSHAKE_REQ: 2,
			/**
			 * 握手响应
			 */
			HANDSHAKE_RESP: 3,
			/**
			 * 将消息置为已读
			 */
			KF_P2P_READ_REQ: 31,
			/**
			 * 进群（扫描个人消息）
			 */
			KF_JOIN_P2P_REQ: 33,
			/**
			 * p2p
			 */
			KF_P2P_REQ: 29,
			/**
			 * p2p close
			 */
			KF_CLOSE_REQ: 40,
			KF_CLOSE_NTY: 41,
			/**
			 * p2p picture
			 */
			KF_PICTURE_REQ: 63,
			KF_PICTURE_NTY: 66,

			/**
			 * p2p voice
			 */
			KF_VOICE_REQ: 64,
			KF_VOICE_NTY: 68,
			/**
			 * p2p视频
			 */
			KF_VIDEO_REQ: 70,
			KF_VIDEO_NTY: 74,
			/**
			 * p2p接收
			 */
			KF_P2P_NTY: 30,
		},
		text: function(content) {
			console.log("//ToDo and display:", content);
		},
		picture: function(url) {
			console.log("//ToDo and display:", url);
		},
		voice: function(url) {
			console.log("//ToDo and display:", url);
		},
		video: function(url) {
			console.log("//ToDo and display:", url);
		},
		close: function(url) {
			console.log("//ToDo and display:", content);
		},
		SiteImCommandReverse: function(command_str) { //指令转相应的函数名
			/* 00029=="text  00063==picture  00064==voice 00070==video  00040==close"*/
			var command = this.command;
			for (var index in command) {
				if ("000" + command[index] == command_str) {
					console.log("指令名：", "000" + command[index], "是否相等", "000" + command[index] == command_str);
					if (command_str == "00030") return "text";
					else if (command_str == "00066") return "picture";
					else if (command_str == "00074") return "video";
					else if (command_str == "00068") return "voice";
					else if (command_str == "00041") return "text";
				}
				continue;
			}
			return null;
		}
	},
	test_data: [{
		question_type: '选择文件',
		question_number: '1',
		question_value: ' 请按照测试告知(图一)的图片实例上传素颜无美颜无饰品的头部正面照 [上传文件题]',
		question_model: '',
		answered: false
	}, {
		question_type: '选择文件',
		question_number: '2',
		question_value: ' 请按照测试告知(图二)的图片实例上传素颜无美颜无饰品的头部侧面照 [上传文件题]',
		question_model: '',
		answered: false
	}, {
		question_type: '选择文件',
		question_number: '3',
		question_value: ' 请按照测试告知(图三)的图片实例上传身体正面照 [上传文件题]',
		question_model: '',
		answered: false
	}, {
		question_type: '选择文件',
		question_number: '4',
		question_value: ' 请按照测试告知(图四)的图片实例上传身体侧面照 [上传文件题]',
		question_model: '',
		answered: false
	}, {
		//填空题
		//姓名
		question_type: '填空',
		question_number: '5',
		question_value: '您的姓名: [填空题]',
		question_model: '',
		answered: false
	}, {
		//电话号码
		question_type: '填空',
		question_number: '6',
		question_value: '您的电话号码: [填空题]',
		question_model: '',
		answered: false
	}, {
		//单选题目
		question_type: '单选',
		question_number: '7',
		question_value: '您的年龄是在哪个区间? [单选题]',
		question_model: '',
		question_options: [{
			id: 'radio_8_id_' + Math.random(),
			value: '18~25岁',
			src: ''
		}, {
			id: 'radio_8_id_' + Math.random(),
			value: '26~30岁',
			src: ''
		}, {
			id: 'radio_8_id_' + Math.random(),
			value: '31~35岁',
			src: ''
		}, {
			id: 'radio_8_id_' + Math.random(),
			value: '36~40岁',
			src: ''
		}, {
			id: 'radio_8_id_' + Math.random(),
			value: '41~45岁',
			src: ''
		}, {
			id: 'radio_8_id_' + Math.random(),
			value: '46~50岁',
			src: ''
		}],
		answered: false
	}, {
		question_type: '单选',
		question_number: '8',
		question_value: '您从事何种职业? [单选题]',
		question_model: '',
		question_options: [{
			id: 'radio_9_id_' + Math.random(),
			value: '政府官员/企业高管',
			src: ''
		}, {
			id: 'radio_9_id_' + Math.random(),
			value: '公司白领',
			src: ''
		}, {
			id: 'radio_9_id_' + Math.random(),
			value: '商业服务人员',
			src: ''
		}, {
			id: 'radio_9_id_' + Math.random(),
			value: '学生/军人',
			src: ''
		}, {
			id: 'radio_9_id_' + Math.random(),
			value: '教师',
			src: ''
		}, {
			id: 'radio_9_id_' + Math.random(),
			value: '自由职业',
			src: ''
		}, {
			id: 'radio_9_id_' + Math.random(),
			value: '其他',
			src: ''
		}],
		answered: false
	}, {
		question_type: '单选',
		question_number: '9',
		question_value: '您的身高是多少? [单选题]',
		question_model: '',
		question_options: [{
			id: 'radio_10_id_' + Math.random(),
			value: '145—150CM',
			src: ''
		}, {
			id: 'radio_10_id_' + Math.random(),
			value: '151—155CM',
			src: ''
		}, {
			id: 'radio_10_id_' + Math.random(),
			value: '156—160CM',
			src: ''
		}, {
			id: 'radio_10_id_' + Math.random(),
			value: '161—165CM',
			src: ''
		}, {
			id: 'radio_10_id_' + Math.random(),
			value: '166—170CM',
			src: ''
		}, {
			id: 'radio_10_id_' + Math.random(),
			value: '171CM以上',
			src: ''
		}],
		answered: false
	}, {
		question_type: '单选',
		question_number: '10',
		question_value: '您的体重是多少? [单选题] ',
		question_model: '',
		question_options: [{
			id: 'radio_11_id_' + Math.random(),
			value: '40—45KG',
			src: ''
		}, {
			id: 'radio_11_id_' + Math.random(),
			value: '46—50KG',
			src: ''
		}, {
			id: 'radio_11_id_' + Math.random(),
			value: '51—55KG',
			src: ''
		}, {
			id: 'radio_11_id_' + Math.random(),
			value: '56—60KG',
			src: ''
		}, {
			id: 'radio_11_id_' + Math.random(),
			value: '61—65KG',
			src: ''
		}, {
			id: 'radio_11_id_' + Math.random(),
			value: '65KG以上',
			src: ''
		}],
		answered: false
	}, {
		question_type: '单选',
		question_number: '11',
		question_value: '您日常穿着什么尺码的服装? [单选题]',
		question_model: '', //单选的model
		question_options: [{
			id: 'radio_12_id_' + Math.random(),
			value: 'XS码',
			src: ''
		}, {
			id: 'radio_12_id_' + Math.random(),
			value: 'S码',
			src: ''
		}, {
			id: 'radio_12_id_' + Math.random(),
			value: 'M码',
			src: ''
		}, {
			id: 'radio_12_id_' + Math.random(),
			value: 'L码',
			src: ''
		}, {
			id: 'radio_12_id_' + Math.random(),
			value: 'XL码',
			src: ''
		}, {
			id: 'radio_12_id_' + Math.random(),
			value: 'XXL码及以上',
			src: ''
		}],
		answered: false
	}, {
		question_type: '单选',
		question_number: '12',
		question_value: '您有日常化妆的习惯吗? [单选题] ',
		question_model: '',
		question_options: [{
			id: 'radio_13_id_' + Math.random(),
			value: '每天都化妆',
			src: ''
		}, {
			id: 'radio_13_id_' + Math.random(),
			value: '偶然会化妆',
			src: ''
		}, {
			id: 'radio_13_id_' + Math.random(),
			value: '极少或素颜',
			src: ''
		}],
		answered: false
	}, {
		question_type: '复选',
		question_number: '13',
		question_value: '您日常多用哪类妆面? [多选题]',
		question_model: [],
		question_options: [{
			id: 'radio_14_id_' + Math.random(),
			value: '裸妆',
			src: ''
		}, {
			id: 'radio_14_id_' + Math.random(),
			value: '较艳丽的妆面',
			src: ''
		}, {
			id: 'radio_14_id_' + Math.random(),
			value: '只化眉毛或嘴唇局部',
			src: ''
		}, {
			id: 'radio_14_id_' + Math.random(),
			value: '只涂BB霜等基础粉底',
			src: ''
		}],
		answered: false
	}, {
		question_type: '单选',
		question_number: '14',
		question_value: ' 您习惯穿多高的高跟鞋？[单选题]',
		question_model: '',
		question_options: [{
			id: 'radio_15_id_' + Math.random(),
			value: '3厘米以下',
			src: ''
		}, {
			id: 'radio_15_id_' + Math.random(),
			value: '3-5厘米',
			src: ''
		}, {
			id: 'radio_15_id_' + Math.random(),
			value: '5-8厘米',
			src: ''
		}, {
			id: 'radio_15_id_' + Math.random(),
			value: '8厘米以上',
			src: ''
		}],
		answered: false
	}, {
		question_type: '单选',
		question_number: '15',
		question_value: ' 您是否有耳洞？[单选题]',
		question_model: '',
		question_options: [{
			id: 'radio_16_id_' + Math.random(),
			value: '有耳洞',
			src: ''
		}, {
			id: 'radio_16_id_' + Math.random(),
			value: '没有耳洞',
			src: ''
		}],
		answered: false
	}, {
		question_type: '复选',
		question_number: '16',
		question_value: '您日常的偏好色是？[多选题]',
		question_model: [], //复选的model
		question_options: [{
			id: 'radio_17_id_' + Math.random(),
			value: '红',
			src: ''
		}, {
			id: 'radio_17_id_' + Math.random(),
			value: '橙',
			src: ''
		}, {
			id: 'radio_17_id_' + Math.random(),
			value: '黄',
			src: ''
		}, {
			id: 'radio_17_id_' + Math.random(),
			value: '绿',
			src: ''
		}, {
			id: 'radio_17_id_' + Math.random(),
			value: '蓝',
			src: ''
		}, {
			id: 'radio_17_id_' + Math.random(),
			value: '紫',
			src: ''
		}, {
			id: 'radio_17_id_' + Math.random(),
			value: '黑',
			src: ''
		}, {
			id: 'radio_17_id_' + Math.random(),
			value: '白',
			src: ''
		}, {
			id: 'radio_17_id_' + Math.random(),
			value: '灰',
			src: ''
		}, {
			id: 'radio_17_id_' + Math.random(),
			value: '裸色',
			src: ''
		}],
		answered: false
	}, {
		//十八题
		question_type: '复选',
		question_number: '17',
		question_value: '您日常穿着较多的服装款式有：[多选题]',
		question_model: [],
		question_options: [{
				id: 'radio_18_id_' + Math.random(),
				value: '裙装',
				src: ''
			}, {
				id: 'radio_18_id_' + Math.random(),
				value: '裤装',
				src: ''
			}, {
				id: 'radio_18_id_' + Math.random(),
				value: '宽松款',
				src: ''
			}, {
				id: 'radio_18_id_' + Math.random(),
				value: '紧身款',
				src: ''
			}, {
				id: 'radio_18_id_' + Math.random(),
				value: '长款',
				src: ''
			},
			{
				id: 'radio_18_id_' + Math.random(),
				value: '中款',
				src: ''
			},
			{
				id: 'radio_18_id_' + Math.random(),
				value: '短款',
				src: ''
			}, {
				id: 'radio_18_id_' + Math.random(),
				value: '时尚款',
				src: ''
			}, {
				id: 'radio_18_id_' + Math.random(),
				value: '大众款',
				src: ''
			}, {
				id: 'radio_18_id_' + Math.random(),
				value: '单件款',
				src: ''
			}, {
				id: 'radio_18_id_' + Math.random(),
				value: '混搭款',
				src: ''
			}
		],
		answered: false
	}, {
		//十九题
		question_type: '复选',
		question_number: '18',
		question_value: '您有哪些日常形象场合的需要? [多选题]',
		question_model: [],
		question_options: [{
			id: 'radio_19_id_' + Math.random(),
			value: '严肃职场(召开会议/商务谈判/作报告等)',
			src: 'img/19-1.png'
		}, {
			id: 'radio_19_id_' + Math.random(),
			value: '时尚职场(日常上班/拜访客户等)',
			src: 'img/19-2.png'
		}, {
			id: 'radio_19_id_' + Math.random(),
			value: '时尚休闲(朋友逛街/闺蜜聚会/旅游休闲等)',
			src: 'img/19-3.png'
		}, {
			id: 'radio_19_id_' + Math.random(),
			value: '私密约会(结婚纪念/情人节庆祝/二人世界等)',
			src: 'img/19-4.png'
		}, {
			id: 'radio_19_id_' + Math.random(),
			value: '日宴社交(参加婚礼/小型酒会/生日聚会等)',
			src: 'img/19-5.png'
		}, {
			id: 'radio_19_id_' + Math.random(),
			value: '晚宴社交(走红毯/公司年庆/大型晚会/庆功表彰等)',
			src: 'img/19-6.png'
		}],
		answered: false
	}, {
		question_type: '复选',
		question_number: '19',
		question_value: '您喜欢或心仪的形象有哪些?/你有什么样的理想形象? [多选题]',
		question_model: [],
		question_options: [{
			id: 'radio_20_id_' + Math.random(),
			value: '乖巧、可爱、甜美、活泼的少女形象',
			src: 'img/20-1.png'
		}, {
			id: 'radio_20_id_' + Math.random(),
			value: '帅气十足、中性、直率、利落的少年形象',
			src: 'img/20-2.png'
		}, {
			id: 'radio_20_id_' + Math.random(),
			value: '精致、怡静、温柔、细致、素雅的优雅形象',
			src: 'img/20-3.png'
		}, {
			id: 'radio_20_id_' + Math.random(),
			value: '迷人、性感、妖媚、艳丽、女人味十足的浪漫形象',
			src: 'img/20-4.png'
		}, {
			id: 'radio_20_id_' + Math.random(),
			value: '放松、随意、朴素、亲切的自然形象',
			src: 'img/20-5.png'
		}, {
			id: 'radio_20_id_' + Math.random(),
			value: '端庄、严谨、上品、精致、有学识感的古典形象',
			src: 'img/20-6.png'
		}, {
			id: 'radio_20_id_' + Math.random(),
			value: '个性、时尚、另类,与众不同的前卫形象',
			src: 'img/20-7.png'
		}, {
			id: 'radio_20_id_' + Math.random(),
			value: '少数民族风情、异国风情的异域形象',
			src: 'img/20-8.png'
		}, {
			id: 'radio_20_id_' + Math.random(),
			value: '有存在感、大气、夸张、引人注目的戏剧形象',
			src: 'img/20-9.png'
		}],
		answered: false
	}, {
		question_type: '单选',
		question_number: '20',
		question_value: ' 您自我评价日常气质是趋向哪个方向? [单选题] ',
		question_model: '',
		question_options: [{
			id: 'radio_21_id_' + Math.random(),
			value: '端庄雅致的气质',
			src: 'img/21-1.png'
		}, {
			id: 'radio_21_id_' + Math.random(),
			value: '个性另类的气质',
			src: 'img/21-2.png'
		}, {
			id: 'radio_21_id_' + Math.random(),
			value: '居于两者之间',
			src: 'img/21-3.png'
		}, {
			id: 'radio_21_id_' + Math.random(),
			value: '我不清楚',
			src: 'img/21-4.png'
		}],
		answered: false
	}, {
		question_type: '单选',
		question_number: '21',
		question_value: ' 您日常的动作偏多或偏少? [单选题]',
		question_model: '',
		question_options: [{
			id: 'radio_22_id_' + Math.random(),
			value: '动作偏多',
			src: ''
		}, {
			id: 'radio_22_id_' + Math.random(),
			value: '动作偏少',
			src: ''
		}, {
			id: 'radio_22_id_' + Math.random(),
			value: '不多不少,居中',
			src: ''
		}, {
			id: 'radio_22_id_' + Math.random(),
			value: '我不清楚',
			src: ''
		}],
		answered: false
	}, {
		question_type: '单选',
		question_number: '22',
		question_value: ' 您日常的动作幅度偏大或偏小? [单选题] ',
		question_model: '',
		question_options: [{
			id: 'radio_23_id_' + Math.random(),
			value: '动作幅度较大',
			src: ''
		}, {
			id: 'radio_23_id_' + Math.random(),
			value: '动作幅度较小',
			src: ''
		}, {
			id: 'radio_23_id_' + Math.random(),
			value: '不大不小,居中',
			src: ''
		}, {
			id: 'radio_23_id_' + Math.random(),
			value: '我不清楚',
			src: ''
		}],
		answered: false
	}, {
		question_type: '单选',
		question_number: '23',
		question_value: '您日常说话偏多或偏少? [单选题]',
		question_model: '',
		question_options: [{
			id: 'radio_24_id_' + Math.random(),
			value: '说话偏多',
			src: ''
		}, {
			id: 'radio_24_id_' + Math.random(),
			value: '说话偏少',
			src: ''
		}, {
			id: 'radio_24_id_' + Math.random(),
			value: '不多不少,居中',
			src: ''
		}, {
			id: 'radio_24_id_' + Math.random(),
			value: '我不清楚',
			src: ''
		}],
		answered: false
	}, {
		question_type: '单选',
		question_number: '24',
		question_value: '您日常说话音量偏大或偏小? [单选题] ',
		question_model: '',
		question_options: [{
			id: 'radio_25_id_' + Math.random(),
			value: '音量偏大',
			src: ''
		}, {
			id: 'radio_25_id_' + Math.random(),
			value: '音量偏小',
			src: ''
		}, {
			id: 'radio_25_id_' + Math.random(),
			value: '不大不小,居中',
			src: ''
		}, {
			id: 'radio_25_id_' + Math.random(),
			value: '我不清楚',
			src: ''
		}],
		answered: false
	}, {
		question_type: '单选',
		question_number: '25',
		question_value: '您在公众场合（朋友聚会等）属于什么样的角色？ [单选题] ',
		question_model: [],
		question_options: [{
			id: 'radio_26_id_' + Math.random(),
			value: '属于人气王的角色',
			src: ''
		}, {
			id: 'radio_26_id_' + Math.random(),
			value: '属于安静无存在感的角色',
			src: ''
		}, {
			id: 'radio_26_id_' + Math.random(),
			value: '居于两者之间',
			src: ''
		}, {
			id: 'radio_26_id_' + Math.random(),
			value: '我不清楚',
			src: ''
		}],
		answered: false
	}, {
		question_type: '单选',
		question_number: '26',
		question_value: '你自我感觉气场是偏大还是偏小？ [单选题] ',
		question_model: '',
		question_options: [{
			id: 'radio_27_id_' + Math.random(),
			value: '偏大',
			src: ''
		}, {
			id: 'radio_27_id_' + Math.random(),
			value: '偏小',
			src: ''
		}, {
			id: 'radio_27_id_' + Math.random(),
			value: '居于两者之间',
			src: ''
		}, {
			id: 'radio_27_id_' + Math.random(),
			value: '我不清楚',
			src: ''
		}],
		answered: false
	}, {
		question_type: '单选',
		question_number: '27',
		question_value: '您的日常言行举止偏优雅有礼或偏随意天性? [单选题] ',
		question_model: '',
		question_options: [{
			id: 'radio_28_id_' + Math.random(),
			value: '言行举止偏优雅有礼',
			src: ''
		}, {
			id: 'radio_28_id_' + Math.random(),
			value: '言行举止偏随意天性',
			src: ''
		}, {
			id: 'radio_28_id_' + Math.random(),
			value: '居于两者之间',
			src: ''
		}, {
			id: 'radio_28_id_' + Math.random(),
			value: '我不清楚',
			src: ''
		}],
		answered: false
	}, {
		question_type: '单选',
		question_number: '28',
		question_value: '您的个性和言行举止偏男性或偏女性化? [单选题]',
		question_model: '',
		question_options: [{
			id: 'radio_29_id_' + Math.random(),
			value: '偏女汉子',
			src: ''
		}, {
			id: 'radio_29_id_' + Math.random(),
			value: '偏女性化',
			src: ''
		}, {
			id: 'radio_29_id_' + Math.random(),
			value: '居中',
			src: ''
		}, {
			id: 'radio_29_id_' + Math.random(),
			value: '我不清楚',
			src: ''
		}],
		answered: false
	}, {
		question_type: '单选',
		question_number: '29',
		question_value: '你的谈吐趋于偏文雅或偏白话? [单选题]',
		question_model: '',
		question_options: [{
			id: 'radio_30_id_' + Math.random(),
			value: '谈吐偏文雅,有学识',
			src: ''
		}, {
			id: 'radio_30_id_' + Math.random(),
			value: '谈吐偏白话,接地气',
			src: ''
		}, {
			id: 'radio_30_id_' + Math.random(),
			value: '居中',
			src: ''
		}, {
			id: 'radio_30_id_' + Math.random(),
			value: '我不清楚',
			src: ''
		}],
		answered: false
	}],
}


module.exports = {
	globalData
}
export default {
	globalData
}
