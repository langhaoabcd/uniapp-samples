(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/my/my"],{

/***/ 115:
/*!*****************************************************************!*\
  !*** D:/code/[daqi]/云开发项目框架/main.js?{"page":"pages%2Fmy%2Fmy"} ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _my = _interopRequireDefault(__webpack_require__(/*! ./pages/my/my.vue */ 116));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_my.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 116:
/*!**********************************************!*\
  !*** D:/code/[daqi]/云开发项目框架/pages/my/my.vue ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _my_vue_vue_type_template_id_0be17cc6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my.vue?vue&type=template&id=0be17cc6& */ 117);
/* harmony import */ var _my_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my.vue?vue&type=script&lang=js& */ 119);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _my_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _my_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _my_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my.vue?vue&type=style&index=0&lang=css& */ 121);
/* harmony import */ var _soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../soft/HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _my_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _my_vue_vue_type_template_id_0be17cc6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _my_vue_vue_type_template_id_0be17cc6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _my_vue_vue_type_template_id_0be17cc6___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/my/my.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 117:
/*!*****************************************************************************!*\
  !*** D:/code/[daqi]/云开发项目框架/pages/my/my.vue?vue&type=template&id=0be17cc6& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_vue_vue_type_template_id_0be17cc6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../soft/HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../soft/HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../soft/HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../soft/HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../soft/HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../soft/HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./my.vue?vue&type=template&id=0be17cc6& */ 118);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_vue_vue_type_template_id_0be17cc6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_vue_vue_type_template_id_0be17cc6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_vue_vue_type_template_id_0be17cc6___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_vue_vue_type_template_id_0be17cc6___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 118:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/code/[daqi]/云开发项目框架/pages/my/my.vue?vue&type=template&id=0be17cc6& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uAvatar: function() {
      return __webpack_require__.e(/*! import() | uview-ui/components/u-avatar/u-avatar */ "uview-ui/components/u-avatar/u-avatar").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-avatar/u-avatar.vue */ 244))
    },
    uCellGroup: function() {
      return __webpack_require__.e(/*! import() | uview-ui/components/u-cell-group/u-cell-group */ "uview-ui/components/u-cell-group/u-cell-group").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-cell-group/u-cell-group.vue */ 251))
    },
    uCellItem: function() {
      return __webpack_require__.e(/*! import() | uview-ui/components/u-cell-item/u-cell-item */ "uview-ui/components/u-cell-item/u-cell-item").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-cell-item/u-cell-item.vue */ 258))
    },
    uButton: function() {
      return __webpack_require__.e(/*! import() | uview-ui/components/u-button/u-button */ "uview-ui/components/u-button/u-button").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-button/u-button.vue */ 199))
    },
    uModal: function() {
      return __webpack_require__.e(/*! import() | uview-ui/components/u-modal/u-modal */ "uview-ui/components/u-modal/u-modal").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-modal/u-modal.vue */ 265))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  if (!_vm._isMounted) {
    _vm.e0 = function($event) {
      return _vm.$u.route("/pages/my/project")
    }

    _vm.e1 = function($event) {
      return _vm.$u.route("/pages/order/addorder")
    }

    _vm.e2 = function($event) {
      return _vm.$u.route("/pages/my/log/log")
    }

    _vm.e3 = function($event) {
      _vm.show_w = true
    }
  }
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 119:
/*!***********************************************************************!*\
  !*** D:/code/[daqi]/云开发项目框架/pages/my/my.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../soft/HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../soft/HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../soft/HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../soft/HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../soft/HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./my.vue?vue&type=script&lang=js& */ 120);
/* harmony import */ var _soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 120:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/code/[daqi]/云开发项目框架/pages/my/my.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uniCloud, uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      content: '是否退出登录？',
      show_w: false,
      src: '../../static/img/tx.jpg',

      phone: '13045678902',
      pwd: '123456' };

  },
  methods: {
    //注册
    reg: function reg() {
      return;
      uniCloud.callFunction({
        name: 'user',
        data: {
          action: 'user/register',
          username: this.phone,
          password: this.pwd },

        success: function success(res) {
          console.log(111, res);
          if (res.result.code === 0) {
            // 2.8.0版本起调整为蛇形uni_id_token（调整后在一段时间内兼容驼峰uniIdToken）
            uni.setStorageSync('uni_id_token', res.result.token);
            uni.setStorageSync('uni_id_token_expired', res.result.tokenExpired);
            // 其他业务代码，如跳转到首页等
            uni.showToast({
              title: '注册成功',
              icon: 'none' });

          } else {
            uni.showModal({
              content: res.result.message,
              showCancel: false });

          }
        },
        fail: function fail() {
          uni.showModal({
            content: '注册失败，请稍后再试',
            showCancel: false });

        } });

    },
    logout: function logout() {
      this.$u.route('/pages/login/login');
      // uniCloud.callFunction({
      // 	name: 'user',
      // 	data: {
      // 		action: 'user/logout',
      // 		uniIdToken: uni.getStorageSync('uni_id_token')
      // 	},
      // 	success: (res) => {
      // 		if (res.result.code === 0) {
      // 			// 2.8.0版本起调整为蛇形uni_id_token（调整后在一段时间内兼容驼峰uniIdToken）
      // 			uni.removeStorageSync('uni_id_token')
      // 			uni.removeStorageSync('uni_id_token_expired')
      // 			// 其他业务代码，如跳转到首页等
      // 			uni.showToast({
      // 				title: '退出成功',
      // 				icon: 'none'
      // 			})
      // 		} else {
      // 			uni.showModal({
      // 				content: res.result.message,
      // 				showCancel: false
      // 			})
      // 		}
      // 		this.$u.route('/pages/login/login')
      // 	},
      // 	fail() {
      // 		uni.showModal({
      // 			content: '退出失败，请稍后再试',
      // 			showCancel: false
      // 		})
      // 	}
      // })

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 43)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 121:
/*!*******************************************************************************!*\
  !*** D:/code/[daqi]/云开发项目框架/pages/my/my.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../soft/HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../soft/HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../soft/HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../soft/HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../soft/HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../soft/HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../soft/HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./my.vue?vue&type=style&index=0&lang=css& */ 122);
/* harmony import */ var _soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 122:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/code/[daqi]/云开发项目框架/pages/my/my.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[115,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/my/my.js.map