"use strict";
(self["webpackChunkpjcan"] = self["webpackChunkpjcan"] || []).push([[990],{

/***/ 19566:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ BaseLayout; }
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(56768);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(24232);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VApp/VApp.mjs + 1 modules
var VApp = __webpack_require__(96450);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAppBar/VAppBar.mjs + 1 modules
var VAppBar = __webpack_require__(31414);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.mjs + 1 modules
var VBtn = __webpack_require__(91696);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.mjs
var VSpacer = __webpack_require__(41720);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMain/VMain.mjs + 1 modules
var VMain = __webpack_require__(98477);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/VToolbarTitle.mjs
var VToolbarTitle = __webpack_require__(88050);
;// CONCATENATED MODULE: ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.cjs??ruleSet[1].rules[0].use!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/layout/BaseLayout.vue?vue&type=template&id=4a3f909a&scoped=true&ts=true

const _hoisted_1 = {
  class: "text-h4"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
                                                                          
                                                            
  const _component_icon_custom = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("icon-custom");
                                                      
  const _component_bluetooth_btn = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("bluetooth-btn");
  const _component_update_firmware_dialog = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("update-firmware-dialog");
  const _component_menu_dots = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("menu-dots");
  const _component_about_dialog = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("about-dialog");
  const _component_onboard_buttons_dialog = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("onboard-buttons-dialog");
  const _component_locale_dialog = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("locale-dialog");
  const _component_choosing_car_model_dialog = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("choosing-car-model-dialog");
                                                              
  const _component_router_view = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("router-view");
  const _component_message_dialog = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("message-dialog");
                                                        
                                                      
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(VApp/* VApp */.E, {
    class: "base-layout"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VAppBar/* VAppBar */.z, {
      flat: "",
      class: "base-layout__toolbar",
      color: "primary",
      height: 50
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VToolbarTitle/* VToolbarTitle */.s, null, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", _hoisted_1, (0,shared_esm_bundler/* toDisplayString */.v_)($setup.title), 1)]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VSpacer/* VSpacer */.h), $setup.visibleOnBoard ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, {
        key: 0
      }, [_ctx.$vuetify.display.mdAndUp ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(VBtn/* VBtn */.D, {
        key: 0,
        class: "base-layout__onboard-buttons",
        rounded: "",
        onClick: _cache[0] || (_cache[0] = $event => $setup.visibleOnboardButtons = true)
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_icon_custom, {
          name: "steering-wheel",
          colors: {
            primary: 'white',
            secondary: 'white'
          }
        }), _cache[7] || (_cache[7] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", {
          class: "pl-2"
        }, "ONBOARD", -1))]),
        _: 1
      })) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), _ctx.$vuetify.display.smAndUp ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(VBtn/* VBtn */.D, {
        key: 1,
        icon: ""
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_icon_custom, {
          name: "save",
          color: $setup.colorConfigSave
        }, null, 8, ["color"])]),
        _: 1
      })) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)], 64)) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), (0,runtime_core_esm_bundler/* createVNode */.bF)(VBtn/* VBtn */.D, {
        icon: "mdi-fit-to-screen-outline",
        onClick: $setup.toggleFullscreen
      }, null, 8, ["onClick"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_bluetooth_btn), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_update_firmware_dialog, {
        modelValue: $setup.visibleUpdate,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $setup.visibleUpdate = $event),
        version: !$setup.rollback ? $setup.newVersionFirmware : $setup.rollbackFirmware,
        rollback: $setup.rollback
      }, null, 8, ["modelValue", "version", "rollback"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_menu_dots, {
        menu: $setup.menu,
        "onClick:item": $setup.onMenuClick
      }, null, 8, ["menu", "onClick:item"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_about_dialog, {
        modelValue: $setup.visibleAbout,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $setup.visibleAbout = $event)
      }, null, 8, ["modelValue"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_onboard_buttons_dialog, {
        modelValue: $setup.visibleOnboardButtons,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => $setup.visibleOnboardButtons = $event)
      }, null, 8, ["modelValue"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_locale_dialog, {
        modelValue: $setup.visibleLocale,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => $setup.visibleLocale = $event)
      }, null, 8, ["modelValue"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_choosing_car_model_dialog, {
        modelValue: $setup.visibleCarModel,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => $setup.visibleCarModel = $event),
        "car-model": $setup.carModel,
        "no-closed": "",
        "onClick:apply": $setup.onCarModelApplyClick
      }, null, 8, ["modelValue", "car-model", "onClick:apply"])]),
      _: 1
    }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VMain/* VMain */.Y, null, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [_cache[8] || (_cache[8] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
        class: "base-layout__bg"
      }, null, -1)), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
        class: "base-layout__main",
        style: (0,shared_esm_bundler/* normalizeStyle */.Tr)({
          width: `${$setup.pageWidth}px`,
          height: `${$setup.pageHeight - 50}px`
        })
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_router_view)], 4), $setup.message ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_message_dialog, {
        key: 0,
        modelValue: $setup.messageVisible,
        "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => $setup.messageVisible = $event),
        title: $setup.message.title,
        icon: $setup.message?.icon,
        text: $setup.message.text,
        btns: $setup.message?.btns,
        width: $setup.message?.width
      }, null, 8, ["modelValue", "title", "icon", "text", "btns", "width"])) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)]),
      _: 1
    })]),
    _: 1
  });
}

/* Vuetify */








;// CONCATENATED MODULE: ./src/layout/BaseLayout.vue?vue&type=template&id=4a3f909a&scoped=true&ts=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(44114);
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(90144);
// EXTERNAL MODULE: ./src/router/index.ts + 99 modules
var router = __webpack_require__(30859);
// EXTERNAL MODULE: ./src/store/index.ts + 20 modules
var store = __webpack_require__(35679);
// EXTERNAL MODULE: ./node_modules/vue-i18n/dist/vue-i18n.mjs
var vue_i18n = __webpack_require__(85851);
// EXTERNAL MODULE: ./node_modules/vue3-toastify/dist/index.mjs
var dist = __webpack_require__(14084);
// EXTERNAL MODULE: ./node_modules/screenfull/index.js
var screenfull = __webpack_require__(49020);
// EXTERNAL MODULE: ./src/api/canbus.ts + 2 modules
var canbus = __webpack_require__(62774);
// EXTERNAL MODULE: ./src/components/BluetoothBtn.vue + 5 modules
var BluetoothBtn = __webpack_require__(59895);
// EXTERNAL MODULE: ./src/components/dialogs/UpdateFirmwareDialog.vue + 4 modules
var UpdateFirmwareDialog = __webpack_require__(66422);
// EXTERNAL MODULE: ./src/components/MenuDots.vue + 3 modules
var MenuDots = __webpack_require__(69815);
// EXTERNAL MODULE: ./src/components/dialogs/AboutDialog.vue + 29 modules
var AboutDialog = __webpack_require__(91801);
// EXTERNAL MODULE: ./src/components/dialogs/OnboardButtonsDialog.vue + 5 modules
var OnboardButtonsDialog = __webpack_require__(38862);
// EXTERNAL MODULE: ./src/components/dialogs/MessageDialog.vue + 3 modules
var MessageDialog = __webpack_require__(22885);
// EXTERNAL MODULE: ./src/components/common/icon-custom/IconCustom.vue + 5 modules
var IconCustom = __webpack_require__(19011);
// EXTERNAL MODULE: ./src/components/dialogs/LocaleDialog.vue + 3 modules
var LocaleDialog = __webpack_require__(51977);
// EXTERNAL MODULE: ./src/components/dialogs/ChoosingCarModelDialog.vue + 3 modules
var ChoosingCarModelDialog = __webpack_require__(89813);
// EXTERNAL MODULE: ./src/models/pjcan/version/index.ts + 1 modules
var version = __webpack_require__(55800);
// EXTERNAL MODULE: ./src/models/pjcan/device/index.ts + 8 modules
var device = __webpack_require__(29801);
// EXTERNAL MODULE: ./src/models/pjcan/onboard/index.ts + 3 modules
var onboard = __webpack_require__(32280);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/layout/BaseLayout.vue?vue&type=script&lang=ts




















/* harmony default export */ var BaseLayoutvue_type_script_lang_ts = ({
  name: "BaseLayout",
  components: {
    BluetoothBtn: BluetoothBtn/* default */.A,
    UpdateFirmwareDialog: UpdateFirmwareDialog/* default */.A,
    MenuDots: MenuDots/* default */.A,
    AboutDialog: AboutDialog/* default */.A,
    OnboardButtonsDialog: OnboardButtonsDialog/* default */.A,
    MessageDialog: MessageDialog/* default */.A,
    IconCustom: IconCustom/* default */.A,
    LocaleDialog: LocaleDialog/* default */.A,
    ChoosingCarModelDialog: ChoosingCarModelDialog/* default */.A
  },
  setup() {
    const {
      t
    } = (0,vue_i18n/* useI18n */.s9)();
    const installPrompt = (0,reactivity_esm_bundler/* ref */.KR)(undefined);
    const visibleAbout = (0,reactivity_esm_bundler/* ref */.KR)(false);
    const visibleOnboardButtons = (0,reactivity_esm_bundler/* ref */.KR)(false);
    const visibleUpdate = (0,reactivity_esm_bundler/* ref */.KR)(false);
    const visibleLocale = (0,reactivity_esm_bundler/* ref */.KR)(false);
    const visibleCarModel = (0,reactivity_esm_bundler/* ref */.KR)(false);
    const pageWidth = (0,reactivity_esm_bundler/* ref */.KR)(0);
    const pageHeight = (0,reactivity_esm_bundler/* ref */.KR)(0);
    const carModel = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["config/carModel"]);
    const visibleOnBoard = (0,runtime_core_esm_bundler/* computed */.EW)(() => carModel.value !== onboard/* TCarModel */.oB.CAR_MODEL_UNKNOWN);
    const title = (0,runtime_core_esm_bundler/* computed */.EW)(() => {
      const result = router/* default */.A.currentRoute.value.meta?.title;
      return "PJCAN: " + (result?.length > 0 ? t(result) : "");
    });
    const colorConfigSave = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["value/device"].configSave ? "success" : "error");
    const newVersionFirmware = (0,reactivity_esm_bundler/* ref */.KR)("");
    const rollbackFirmware = (0,reactivity_esm_bundler/* ref */.KR)("");
    const rollback = (0,reactivity_esm_bundler/* ref */.KR)(false);
    const menu = (0,runtime_core_esm_bundler/* computed */.EW)(() => {
      const result = [];
      const {
        name,
        query
      } = router/* default */.A.currentRoute.value;
      result.push({
        id: 0,
        title: t("menu.onboard"),
        disabled: name === "Onboard"
      }, {
        id: 40,
        title: t("menu.onboardButtons")
      }, {}, {
        id: 60,
        title: t("menu.settings.options"),
        disabled: name === "Options"
      }, {
        id: 10,
        title: t("menu.settings.buttonsSW1"),
        disabled: name === "Buttons" && query?.type === "sw1"
      }, {
        id: 20,
        title: t("menu.language")
      }, {});
      if (newVersionFirmware.value.length) {
        result.push({
          id: 70,
          title: t("menu.update", {
            version: newVersionFirmware.value
          })
        });
      }
      if (rollbackFirmware.value.length) {
        result.push({
          id: 71,
          title: t("menu.rollback", {
            version: rollbackFirmware.value
          })
        });
      }
      if (installPrompt.value) {
        result.push({
          id: 72,
          title: t("menu.install")
        });
      }
      result.push({
        id: 30,
        title: t("menu.about")
      });
      return result;
    });
    /** Событие выбора пункта меню */
    const onMenuClick = data => {
      switch (data.id) {
        case 0:
          router/* default */.A.push({
            name: "Onboard"
          });
          break;
        case 10:
          router/* default */.A.push({
            name: "Buttons",
            query: {
              type: "sw1"
            }
          });
          break;
        case 20:
          visibleLocale.value = true;
          break;
        case 30:
          visibleAbout.value = true;
          break;
        case 40:
          visibleOnboardButtons.value = true;
          break;
        case 60:
          router/* default */.A.push({
            name: "Options"
          });
          break;
        case 70:
          rollback.value = false;
          visibleUpdate.value = true;
          break;
        case 71:
          rollback.value = true;
          visibleUpdate.value = true;
          break;
        case 72:
          if (installPrompt.value) {
            // @ts-ignore
            installPrompt.value.prompt();
            installPrompt.value = undefined;
          }
          break;
      }
    };
    /** Переключение полноэкранного режима */
    const toggleFullscreen = () => {
      if (screenfull/* default */.A.isEnabled) screenfull/* default */.A.toggle();
    };
    // Вывод сообщений
    const messageVisible = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => store/* default */.A.getters["app/messageVisible"],
      set: val => store/* default */.A.commit("app/setMessageVisible", val)
    });
    const message = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["app/message"]);
    let timer;
    (0,runtime_core_esm_bundler/* watch */.wB)(message, msg => {
      if (timer) clearTimeout(timer);
      if (msg?.timeout) {
        timer = setTimeout(() => {
          store/* default */.A.commit("app/messageFree");
          timer = undefined;
        }, msg.timeout);
      }
    });
    // ---
    /** Проверяем модель автомобиля */
    const onChoosingCarModel = () => {
      visibleCarModel.value = store/* default */.A.getters["config/carModel"] === onboard/* TCarModel */.oB.CAR_MODEL_UNKNOWN;
      // toast.warning(t("help.onboard.noModelSelected"), { autoClose: false });
    };
    /**
     * Применить выбранную модель автомобиля
     * @param {number} id ID модели
     */
    const onCarModelApplyClick = id => {
      visibleCarModel.value = false;
      if (store/* default */.A.getters["config/carModel"] !== id) {
        store/* default */.A.commit("config/setOnboardCarModel", id);
      }
    };
    /** Доступна новая версия прошивки */
    const onNewVersion = newVersion => {
      newVersionFirmware.value = newVersion.toString;
      const version = store/* default */.A.getters["config/version"];
      if (version.supported) {
        setTimeout(() => {
          dist/* toast */.oR.warning(t("update.notify.newVersion", {
            version: newVersionFirmware.value
          }));
        }, 5000);
      } else visibleUpdate.value = true;
    };
    /** Доступна версия прошивки отката */
    const onRollback = rollback => {
      if (rollback.current?.length) rollbackFirmware.value = rollback.current;
    };
    /** Изменение размеров страницы */
    const windowSize = () => {
      pageWidth.value = document.documentElement.clientWidth;
      pageHeight.value = document.documentElement.clientHeight;
    };
    (0,runtime_core_esm_bundler/* onBeforeMount */.KC)(() => {
      window.addEventListener("beforeinstallprompt", e => {
        e.preventDefault();
        installPrompt.value = e;
      });
    });
    (0,runtime_core_esm_bundler/* onMounted */.sV)(() => {
      canbus/* default */.A.addListener(onboard/* API_ONBOARD_CONFIG_EVENT */.Vw, onChoosingCarModel);
      canbus/* default */.A.addListener(version/* API_NEW_VERSION_EVENT */.QM, onNewVersion);
      canbus/* default */.A.addListener(device/* API_DEVICE_ROLLBACK_EVENT */.GE, onRollback);
      window.addEventListener("resize", windowSize);
      windowSize();
    });
    (0,runtime_core_esm_bundler/* onUnmounted */.hi)(() => {
      canbus/* default */.A.removeListener(onboard/* API_ONBOARD_CONFIG_EVENT */.Vw, onChoosingCarModel);
      canbus/* default */.A.removeListener(version/* API_NEW_VERSION_EVENT */.QM, onNewVersion);
      canbus/* default */.A.removeListener(device/* API_DEVICE_ROLLBACK_EVENT */.GE, onRollback);
      window.removeEventListener("resize", windowSize);
    });
    return {
      carModel,
      title,
      menu,
      newVersionFirmware,
      rollbackFirmware,
      visibleOnBoard,
      visibleAbout,
      visibleOnboardButtons,
      visibleUpdate,
      visibleLocale,
      visibleCarModel,
      pageWidth,
      pageHeight,
      messageVisible,
      message,
      colorConfigSave,
      rollback,
      onMenuClick,
      toggleFullscreen,
      onCarModelApplyClick
    };
  }
});
;// CONCATENATED MODULE: ./src/layout/BaseLayout.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/layout/BaseLayout.vue?vue&type=style&index=0&id=4a3f909a&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/layout/BaseLayout.vue?vue&type=style&index=0&id=4a3f909a&lang=scss&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(71241);
;// CONCATENATED MODULE: ./src/layout/BaseLayout.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(BaseLayoutvue_type_script_lang_ts, [['render',render],['__scopeId',"data-v-4a3f909a"]])

/* harmony default export */ var BaseLayout = (__exports__);

/***/ }),

/***/ 92089:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ DialogTemplate; }
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(56768);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(24232);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtnGroup/VBtnGroup.mjs + 1 modules
var VBtnGroup = __webpack_require__(8321);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.mjs + 1 modules
var VCard = __webpack_require__(4189);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCardTitle.mjs
var VCardTitle = __webpack_require__(91606);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCardText.mjs
var VCardText = __webpack_require__(30697);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCardActions.mjs
var VCardActions = __webpack_require__(93745);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.mjs + 1 modules
var VDialog = __webpack_require__(91772);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.mjs + 1 modules
var VDivider = __webpack_require__(7511);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.mjs
var VSpacer = __webpack_require__(41720);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.mjs
var VRow = __webpack_require__(56756);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.mjs
var VCol = __webpack_require__(35526);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.mjs + 1 modules
var VIcon = __webpack_require__(79669);
;// CONCATENATED MODULE: ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.cjs??ruleSet[1].rules[0].use!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/layout/components/DialogTemplate.vue?vue&type=template&id=bb466d3c&scoped=true&ts=true

const _hoisted_1 = {
  class: "ml-2 text-h4 dialog__title"
};
const _hoisted_2 = ["innerHTML"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_icon_custom = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("icon-custom");
                                                            
                                                                    
                                                                  
                                                              
                                                      
                                                        
                                                      
                                                                  
                                                                        
                                                        
                                                            
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(VDialog/* VDialog */.p, {
    modelValue: $setup.visible,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.visible = $event),
    "content-class": $props.contentClass,
    transition: "dialog-bottom-transition",
    width: $setup.widthModel,
    persistent: !$props.actions || $props.persistent
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VCard/* VCard */.J, null, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [$props.title?.length > 0 ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(VCardTitle/* VCardTitle */.r, {
        key: 0,
        class: "d-flex align-center"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_icon_custom, {
          class: "dialog__icon",
          name: $props.icon
        }, null, 8, ["name"]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", _hoisted_1, (0,shared_esm_bundler/* toDisplayString */.v_)($props.title), 1), $props.close ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, {
          key: 0
        }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(VSpacer/* VSpacer */.h), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_icon_custom, {
          name: "mdi-close"
        })], 64)) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)]),
        _: 1
      })) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), $props.text ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(VCardText/* VCardText */.O, {
        key: 1,
        class: "dialog__text"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* renderSlot */.RG)(_ctx.$slots, "body", {}, undefined, true)]),
        _: 3
      })) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), $props.info?.length > 0 ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(VCardText/* VCardText */.O, {
        key: 2,
        class: "dialog__info"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VRow/* VRow */.L, null, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
            cols: "12",
            class: "pt-0 pb-0"
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VDivider/* VDivider */.G)]),
            _: 1
          }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
            cols: "12"
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VIcon/* VIcon */.w, {
              icon: "mdi-information-outline",
              class: "mr-1"
            }), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", {
              innerHTML: $props.info
            }, null, 8, _hoisted_2)]),
            _: 1
          })]),
          _: 1
        })]),
        _: 1
      })) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), $props.actions ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(VCardActions/* VCardActions */.S, {
        key: 3,
        class: "justify-end align-end"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VBtnGroup/* VBtnGroup */._, {
          class: "border-dialog-btns dialog__btns"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* renderSlot */.RG)(_ctx.$slots, "btns", {}, undefined, true)]),
          _: 3
        })]),
        _: 3
      })) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)]),
      _: 3
    })]),
    _: 3
  }, 8, ["modelValue", "content-class", "width", "persistent"]);
}

/* Vuetify */








;// CONCATENATED MODULE: ./src/layout/components/DialogTemplate.vue?vue&type=template&id=bb466d3c&scoped=true&ts=true

// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(90144);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/display.mjs
var display = __webpack_require__(68353);
// EXTERNAL MODULE: ./src/components/common/icon-custom/IconCustom.vue + 5 modules
var IconCustom = __webpack_require__(19011);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/layout/components/DialogTemplate.vue?vue&type=script&lang=ts



/* harmony default export */ var DialogTemplatevue_type_script_lang_ts = ({
  name: "DialogTemplate",
  components: {
    IconCustom: IconCustom/* default */.A
  },
  props: {
    modelValue: Boolean,
    contentClass: String,
    icon: String,
    title: String,
    info: String,
    text: Boolean,
    actions: Boolean,
    close: Boolean,
    width: [String, Number],
    persistent: Boolean
  },
  emits: ["update:modelValue"],
  setup(props, {
    emit
  }) {
    const {
      modelValue,
      width
    } = (0,reactivity_esm_bundler/* toRefs */.QW)(props);
    const {
      mobile
    } = (0,display/* useDisplay */._F)();
    const visible = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => modelValue.value,
      set: val => emit("update:modelValue", val)
    });
    const widthModel = (0,runtime_core_esm_bundler/* computed */.EW)(() => typeof width.value === "number" && width.value > 0 ? `${width.value}px` : typeof width.value === "string" && width.value.length > 0 ? width.value : `${mobile.value ? 90 : 50}%`);
    return {
      visible,
      widthModel
    };
  }
});
;// CONCATENATED MODULE: ./src/layout/components/DialogTemplate.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/layout/components/DialogTemplate.vue?vue&type=style&index=0&id=bb466d3c&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/layout/components/DialogTemplate.vue?vue&type=style&index=0&id=bb466d3c&lang=scss&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(71241);
;// CONCATENATED MODULE: ./src/layout/components/DialogTemplate.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(DialogTemplatevue_type_script_lang_ts, [['render',render],['__scopeId',"data-v-bb466d3c"]])

/* harmony default export */ var DialogTemplate = (__exports__);

/***/ })

}]);