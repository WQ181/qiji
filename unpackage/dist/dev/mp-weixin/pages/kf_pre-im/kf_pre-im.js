(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/kf_pre-im/kf_pre-im"],{

/***/ 100:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/Ten/WeGame/Document download/WeChat Files/WXID_99Ake/FileStorage/File/2019-08/qj_consult/qj_consult/pages/kf_pre-im/kf_pre-im.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 30));











































var _global = _interopRequireDefault(__webpack_require__(/*! ../../common/global.js */ 19));
var _pako = _interopRequireDefault(__webpack_require__(/*! ../../common/pako.js */ 36));
var _encoding = _interopRequireDefault(__webpack_require__(/*! ../../utils/encoding.js */ 37));
var _kf = _interopRequireDefault(__webpack_require__(/*! ../../common/kf.js */ 35));
var _util = _interopRequireDefault(__webpack_require__(/*! ../../utils/util.js */ 40));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var _default =

{
  data: function data() {
    return {
      name: '孙楚栋',
      members: [] };

  },
  onLoad: function () {var _onLoad = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var ck, sessionName, sessionValue, queryString, connection, value, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, v;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
              //身份为顾问
              //判断是否登陆过
              console.log(_global.default.globalData.user_id);if (
              _global.default.globalData.user_id) {_context.next = 13;break;}
              _global.default.globalData.user_id = _global.default.globalData.user.id;_context.next = 5;return (
                _kf.default.init_im());case 5:ck = _context.sent;
              console.log('ck:', ck);
              sessionName = ck.split('=')[0],
              sessionValue = ck.split('=')[1];
              queryString = '?' + sessionName + '=' + sessionValue;
              _global.default.globalData.url = 'wss://mpv2.csqiji.com:9325' + queryString;
              //all.globalData.url = 'wss://local.t-io.org:9325' + queryString;
              _context.next = 12;return _kf.default.connection();case 12:connection = _context.sent;case 13:


              _global.default.globalData.kf_local_id = _global.default.globalData.user_id + 'kf';
              try {
                console.log('kf_local_id', _global.default.globalData.kf_local_id);
                value = uni.getStorageSync(_global.default.globalData.kf_local_id);
                if (value) {
                  _global.default.globalData.kf_msg = value;
                  console.log('获取本地数据', value);
                }
              } catch (e) {
                // error
              }
              this.members = _global.default.globalData.kf_msg;
              console.log('所有聊天记录', this.members);_iteratorNormalCompletion = true;_didIteratorError = false;_iteratorError = undefined;_context.prev = 20;_iterator =
              this.members[Symbol.iterator]();case 22:if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {_context.next = 31;break;}v = _step.value;_context.next = 26;return (
                _util.default.timeago(v.user_content.time));case 26:v.user_content.range_time = _context.sent;
              console.log('近期时间', v.user_content.range_time);case 28:_iteratorNormalCompletion = true;_context.next = 22;break;case 31:_context.next = 37;break;case 33:_context.prev = 33;_context.t0 = _context["catch"](20);_didIteratorError = true;_iteratorError = _context.t0;case 37:_context.prev = 37;_context.prev = 38;if (!_iteratorNormalCompletion && _iterator.return != null) {_iterator.return();}case 40:_context.prev = 40;if (!_didIteratorError) {_context.next = 43;break;}throw _iteratorError;case 43:return _context.finish(40);case 44:return _context.finish(37);case 45:


              this.members = this.members.sort(this.compare('user_content'));case 46:case "end":return _context.stop();}}}, _callee, this, [[20, 33, 37, 45], [38,, 40, 44]]);}));function onLoad() {return _onLoad.apply(this, arguments);}return onLoad;}(),

  onShow: function onShow() {
    console.log("存储kf_id", _global.default.globalData.kf_local_id);
    if (_global.default.globalData.kf_chat_id) {
      _global.default.globalData.kf_msg.some(function (item) {
        if (item.user_id == _global.default.globalData.kf_chat_id) {
          item.user_content.unread = 0;
        }
      });
      uni.setStorage({
        key: _global.default.globalData.kf_local_id,
        data: _global.default.globalData.kf_msg });

    }
    if (_global.default.globalData.reconnect) {
      _kf.default.re_send();
    }
  },
  onTabItemTap: function onTabItemTap() {
    uni.hideTabBarRedDot({
      index: 2 });

  },

  methods: {
    //比较时间戳，把消息记录排序
    compare: function compare(property) {
      return function (a, b) {
        var value1 = b[property].time;
        var value2 = a[property].time;
        return value1 - value2;
      };
    },

    jump: function jump(e) {
      console.log('对方id', e.currentTarget.dataset.id);
      var id = e.currentTarget.dataset.id;
      _global.default.globalData.kf_chat_id = id;
      //将未读消息置零
      _global.default.globalData.kf_msg.some(function (item) {
        if (item.user_id == id) {
          item.user_content.unread = 0;
        }
      });
      uni.setStorage({
        key: _global.default.globalData.kf_local_id,
        data: _global.default.globalData.kf_msg });


      uni.navigateTo({
        url: '../kf_im/kf_im?kf_chat_id=' + id //对方的id
      });
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 17)["default"]))

/***/ }),

/***/ 101:
/*!*****************************************************************************************************************************************************************************!*\
  !*** F:/Ten/WeGame/Document download/WeChat Files/WXID_99Ake/FileStorage/File/2019-08/qj_consult/qj_consult/pages/kf_pre-im/kf_pre-im.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_kf_pre_im_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./kf_pre-im.vue?vue&type=style&index=0&lang=css& */ 102);
/* harmony import */ var _E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_kf_pre_im_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_kf_pre_im_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_kf_pre_im_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_kf_pre_im_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_kf_pre_im_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 102:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/Ten/WeGame/Document download/WeChat Files/WXID_99Ake/FileStorage/File/2019-08/qj_consult/qj_consult/pages/kf_pre-im/kf_pre-im.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 95:
/*!***************************************************************************************************************************************************************!*\
  !*** F:/Ten/WeGame/Document download/WeChat Files/WXID_99Ake/FileStorage/File/2019-08/qj_consult/qj_consult/main.js?{"page":"pages%2Fkf_pre-im%2Fkf_pre-im"} ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ 1);
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ 11));
var _kf_preIm = _interopRequireDefault(__webpack_require__(/*! ./pages/kf_pre-im/kf_pre-im.vue */ 96));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_kf_preIm.default));

/***/ }),

/***/ 96:
/*!********************************************************************************************************************************************!*\
  !*** F:/Ten/WeGame/Document download/WeChat Files/WXID_99Ake/FileStorage/File/2019-08/qj_consult/qj_consult/pages/kf_pre-im/kf_pre-im.vue ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kf_pre_im_vue_vue_type_template_id_b88a89c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kf_pre-im.vue?vue&type=template&id=b88a89c4& */ 97);
/* harmony import */ var _kf_pre_im_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kf_pre-im.vue?vue&type=script&lang=js& */ 99);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _kf_pre_im_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _kf_pre_im_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _kf_pre_im_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kf_pre-im.vue?vue&type=style&index=0&lang=css& */ 101);
/* harmony import */ var _E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 9);






/* normalize component */

var component = Object(_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _kf_pre_im_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _kf_pre_im_vue_vue_type_template_id_b88a89c4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _kf_pre_im_vue_vue_type_template_id_b88a89c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "F:/Ten/WeGame/Document download/WeChat Files/WXID_99Ake/FileStorage/File/2019-08/qj_consult/qj_consult/pages/kf_pre-im/kf_pre-im.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 97:
/*!***************************************************************************************************************************************************************************!*\
  !*** F:/Ten/WeGame/Document download/WeChat Files/WXID_99Ake/FileStorage/File/2019-08/qj_consult/qj_consult/pages/kf_pre-im/kf_pre-im.vue?vue&type=template&id=b88a89c4& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_kf_pre_im_vue_vue_type_template_id_b88a89c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./kf_pre-im.vue?vue&type=template&id=b88a89c4& */ 98);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_kf_pre_im_vue_vue_type_template_id_b88a89c4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_kf_pre_im_vue_vue_type_template_id_b88a89c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 98:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/Ten/WeGame/Document download/WeChat Files/WXID_99Ake/FileStorage/File/2019-08/qj_consult/qj_consult/pages/kf_pre-im/kf_pre-im.vue?vue&type=template&id=b88a89c4& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    [
      _c("view", { staticClass: "head" }, [_vm._v("消息列表")]),
      _vm.members == 0
        ? _c("view", { staticStyle: { "margin-left": "30rpx" } }, [
            _vm._v("暂无用户咨询客服")
          ])
        : _vm._e(),
      _vm._l(_vm.members, function(item, index) {
        return _c("view", { key: index, staticClass: "padding-wrap" }, [
          _c(
            "view",
            {
              class:
                item.user_content.unread == 0 ? "comment" : "unread_comment",
              attrs: {
                "data-id": item.user_id,
                eventid: "18e5f6fc-0-" + index
              },
              on: { tap: _vm.jump }
            },
            [
              _c("view", { staticClass: "comment-list" }, [
                _c("view", { staticClass: "comment-face" }, [
                  _c("image", {
                    attrs: {
                      src: item.user_content.avatar,
                      mode: "scaleToFill"
                    }
                  }),
                  _c("view", { staticClass: "comment-top" }, [
                    _c("text", [_vm._v(_vm._s(item.user_content.name))]),
                    _c("view", { staticClass: "comment-content" }, [
                      item.user_content.contents[
                        item.user_content.contents.length - 1
                      ].type == "text"
                        ? _c("view", [
                            item.user_content.contents[
                              item.user_content.contents.length - 1
                            ].content.length > 15
                              ? _c("view", { staticClass: "text" }, [
                                  _vm._v(
                                    _vm._s(
                                      item.user_content.contents[
                                        item.user_content.contents.length - 1
                                      ].content
                                    )
                                  )
                                ])
                              : _c("view", [
                                  _vm._v(
                                    _vm._s(
                                      item.user_content.contents[
                                        item.user_content.contents.length - 1
                                      ].content
                                    )
                                  )
                                ])
                          ])
                        : item.user_content.contents[
                            item.user_content.contents.length - 1
                          ].type == "picture"
                        ? _c("view", [_vm._v("[图片]")])
                        : item.user_content.contents[
                            item.user_content.contents.length - 1
                          ].type == "voice"
                        ? _c("view", [_vm._v("[语音]")])
                        : _c("view", [_vm._v("[视频]")]),
                      item.user_content.unread
                        ? _c("view", { staticClass: "comment-msg" }, [
                            _c("view", { staticClass: "comment-unread" }, [
                              _vm._v(_vm._s(item.user_content.unread))
                            ])
                          ])
                        : _vm._e(),
                      _c("view", { staticClass: "comment-time" }, [
                        _vm._v(_vm._s(item.user_content.range_time))
                      ])
                    ])
                  ])
                ])
              ])
            ]
          ),
          _vm._m(0, true)
        ])
      })
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "comment-foot" }, [
      _c("view", { staticClass: "line" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ 99:
/*!*********************************************************************************************************************************************************************!*\
  !*** F:/Ten/WeGame/Document download/WeChat Files/WXID_99Ake/FileStorage/File/2019-08/qj_consult/qj_consult/pages/kf_pre-im/kf_pre-im.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_kf_pre_im_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./kf_pre-im.vue?vue&type=script&lang=js& */ 100);
/* harmony import */ var _E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_kf_pre_im_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_kf_pre_im_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_kf_pre_im_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_kf_pre_im_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_kf_pre_im_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

},[[95,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/kf_pre-im/kf_pre-im.js.map