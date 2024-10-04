"use strict";
(self["webpackChunkpjcan"] = self["webpackChunkpjcan"] || []).push([[165],{

/***/ 6391:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  q: function() { return /* binding */ VKbd; }
});

;// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VKbd/VKbd.css
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/createSimpleFunctional.mjs
var createSimpleFunctional = __webpack_require__(72586);
;// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VKbd/index.mjs
// Styles


// Utilities

const VKbd = (0,createSimpleFunctional/* createSimpleFunctional */.G)('v-kbd');

/***/ }),

/***/ 28903:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  N: function() { return /* binding */ VLabel; }
});

// UNUSED EXPORTS: makeVLabelProps

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(56768);
;// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VLabel/VLabel.css
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/component.mjs
var component = __webpack_require__(19262);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/theme.mjs
var theme = __webpack_require__(47664);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/propsFactory.mjs
var propsFactory = __webpack_require__(14587);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.mjs
var helpers = __webpack_require__(29094);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/defineComponent.mjs
var defineComponent = __webpack_require__(51247);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/useRender.mjs
var useRender = __webpack_require__(74600);
;// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VLabel/VLabel.mjs

// Styles


// Composables

 // Utilities

const makeVLabelProps = (0,propsFactory/* propsFactory */.j)({
  text: String,
  onClick: (0,helpers/* EventProp */.uR)(),
  ...(0,component/* makeComponentProps */.u)(),
  ...(0,theme/* makeThemeProps */.yx)()
}, 'VLabel');
const VLabel = (0,defineComponent/* genericComponent */.RW)()({
  name: 'VLabel',
  props: makeVLabelProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    (0,useRender/* useRender */.C)(() => (0,runtime_core_esm_bundler/* createVNode */.bF)("label", {
      "class": ['v-label', {
        'v-label--clickable': !!props.onClick
      }, props.class],
      "style": props.style,
      "onClick": props.onClick
    }, [props.text, slots.default?.()]));
    return {};
  }
});

/***/ }),

/***/ 80094:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: function() { return /* reexport safe */ _VLabel_mjs__WEBPACK_IMPORTED_MODULE_0__.N; }
/* harmony export */ });
/* harmony import */ var _VLabel_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28903);


/***/ }),

/***/ 25739:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  L: function() { return /* reexport */ VLayout; },
  g: function() { return /* reexport */ VLayoutItem; }
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(56768);
;// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VLayout/VLayout.css
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/component.mjs
var component = __webpack_require__(19262);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/dimensions.mjs
var dimensions = __webpack_require__(62542);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/layout.mjs
var layout = __webpack_require__(34603);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/propsFactory.mjs
var propsFactory = __webpack_require__(14587);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/defineComponent.mjs
var defineComponent = __webpack_require__(51247);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/useRender.mjs
var useRender = __webpack_require__(74600);
;// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VLayout/VLayout.mjs

// Styles


// Composables


 // Utilities

const makeVLayoutProps = (0,propsFactory/* propsFactory */.j)({
  ...(0,component/* makeComponentProps */.u)(),
  ...(0,dimensions/* makeDimensionProps */.X)(),
  ...(0,layout/* makeLayoutProps */.N6)()
}, 'VLayout');
const VLayout = (0,defineComponent/* genericComponent */.RW)()({
  name: 'VLayout',
  props: makeVLayoutProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      layoutClasses,
      layoutStyles,
      getLayoutItem,
      items,
      layoutRef
    } = (0,layout/* createLayout */.Vz)(props);
    const {
      dimensionStyles
    } = (0,dimensions/* useDimension */.S)(props);
    (0,useRender/* useRender */.C)(() => (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
      "ref": layoutRef,
      "class": [layoutClasses.value, props.class],
      "style": [dimensionStyles.value, layoutStyles.value, props.style]
    }, [slots.default?.()]));
    return {
      getLayoutItem,
      items
    };
  }
});
;// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VLayout/VLayoutItem.css
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(90144);
;// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VLayout/VLayoutItem.mjs

// Styles


// Composables

 // Utilities

 // Types
const makeVLayoutItemProps = (0,propsFactory/* propsFactory */.j)({
  position: {
    type: String,
    required: true
  },
  size: {
    type: [Number, String],
    default: 300
  },
  modelValue: Boolean,
  ...(0,component/* makeComponentProps */.u)(),
  ...(0,layout/* makeLayoutItemProps */.CK)()
}, 'VLayoutItem');
const VLayoutItem = (0,defineComponent/* genericComponent */.RW)()({
  name: 'VLayoutItem',
  props: makeVLayoutItemProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      layoutItemStyles
    } = (0,layout/* useLayoutItem */.hc)({
      id: props.name,
      order: (0,runtime_core_esm_bundler/* computed */.EW)(() => parseInt(props.order, 10)),
      position: (0,reactivity_esm_bundler/* toRef */.lW)(props, 'position'),
      elementSize: (0,reactivity_esm_bundler/* toRef */.lW)(props, 'size'),
      layoutSize: (0,reactivity_esm_bundler/* toRef */.lW)(props, 'size'),
      active: (0,reactivity_esm_bundler/* toRef */.lW)(props, 'modelValue'),
      absolute: (0,reactivity_esm_bundler/* toRef */.lW)(props, 'absolute')
    });
    return () => (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
      "class": ['v-layout-item', props.class],
      "style": [layoutItemStyles.value, props.style]
    }, [slots.default?.()]);
  }
});
;// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VLayout/index.mjs



/***/ }),

/***/ 74429:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J: function() { return /* reexport */ VLazy; }
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(56768);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/component.mjs
var component = __webpack_require__(19262);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/dimensions.mjs
var dimensions = __webpack_require__(62542);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/proxiedModel.mjs
var proxiedModel = __webpack_require__(82067);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/tag.mjs
var tag = __webpack_require__(54663);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/transition.mjs
var transition = __webpack_require__(34464);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/intersect/index.mjs
var intersect = __webpack_require__(19629);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/propsFactory.mjs
var propsFactory = __webpack_require__(14587);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/defineComponent.mjs
var defineComponent = __webpack_require__(51247);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/useRender.mjs
var useRender = __webpack_require__(74600);
;// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VLazy/VLazy.mjs

// Composables




 // Directives
 // Utilities
 // Types
const makeVLazyProps = (0,propsFactory/* propsFactory */.j)({
  modelValue: Boolean,
  options: {
    type: Object,
    // For more information on types, navigate to:
    // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    default: () => ({
      root: undefined,
      rootMargin: undefined,
      threshold: undefined
    })
  },
  ...(0,component/* makeComponentProps */.u)(),
  ...(0,dimensions/* makeDimensionProps */.X)(),
  ...(0,tag/* makeTagProps */.X)(),
  ...(0,transition/* makeTransitionProps */.m)({
    transition: 'fade-transition'
  })
}, 'VLazy');
const VLazy = (0,defineComponent/* genericComponent */.RW)()({
  name: 'VLazy',
  directives: {
    intersect: intersect/* default */.A
  },
  props: makeVLazyProps(),
  emits: {
    'update:modelValue': value => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      dimensionStyles
    } = (0,dimensions/* useDimension */.S)(props);
    const isActive = (0,proxiedModel/* useProxiedModel */.q)(props, 'modelValue');
    function onIntersect(isIntersecting) {
      if (isActive.value) return;
      isActive.value = isIntersecting;
    }
    (0,useRender/* useRender */.C)(() => (0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createVNode */.bF)(props.tag, {
      "class": ['v-lazy', props.class],
      "style": [dimensionStyles.value, props.style]
    }, {
      default: () => [isActive.value && (0,runtime_core_esm_bundler/* createVNode */.bF)(transition/* MaybeTransition */.M, {
        "transition": props.transition,
        "appear": true
      }, {
        default: () => [slots.default?.()]
      })]
    }), [[(0,runtime_core_esm_bundler/* resolveDirective */.gN)("intersect"), {
      handler: onIntersect,
      options: props.options
    }, null]]));
    return {};
  }
});
;// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VLazy/index.mjs


/***/ }),

/***/ 69915:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  x8: function() { return /* binding */ VList; }
});

// UNUSED EXPORTS: makeVListProps, useListItems

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(44114);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(56768);
;// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VList/VList.css
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListGroup.mjs
var VListGroup = __webpack_require__(4529);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.mjs + 1 modules
var VListItem = __webpack_require__(57254);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListSubheader.mjs
var VListSubheader = __webpack_require__(86449);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.mjs + 1 modules
var VDivider = __webpack_require__(7511);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/list.mjs
var list = __webpack_require__(44146);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/propsFactory.mjs
var propsFactory = __webpack_require__(14587);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/defineComponent.mjs
var defineComponent = __webpack_require__(51247);
;// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VList/VListChildren.mjs

// Components



 // Utilities

 // Types
const makeVListChildrenProps = (0,propsFactory/* propsFactory */.j)({
  items: Array,
  returnObject: Boolean
}, 'VListChildren');
const VListChildren = (0,defineComponent/* genericComponent */.RW)()({
  name: 'VListChildren',
  props: makeVListChildrenProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    (0,list/* createList */.D1)();
    return () => slots.default?.() ?? props.items?.map(_ref2 => {
      let {
        children,
        props: itemProps,
        type,
        raw: item
      } = _ref2;
      if (type === 'divider') {
        return slots.divider?.({
          props: itemProps
        }) ?? (0,runtime_core_esm_bundler/* createVNode */.bF)(VDivider/* VDivider */.G, itemProps, null);
      }
      if (type === 'subheader') {
        return slots.subheader?.({
          props: itemProps
        }) ?? (0,runtime_core_esm_bundler/* createVNode */.bF)(VListSubheader/* VListSubheader */.w, itemProps, null);
      }
      const slotsWithItem = {
        subtitle: slots.subtitle ? slotProps => slots.subtitle?.({
          ...slotProps,
          item
        }) : undefined,
        prepend: slots.prepend ? slotProps => slots.prepend?.({
          ...slotProps,
          item
        }) : undefined,
        append: slots.append ? slotProps => slots.append?.({
          ...slotProps,
          item
        }) : undefined,
        title: slots.title ? slotProps => slots.title?.({
          ...slotProps,
          item
        }) : undefined
      };
      const listGroupProps = VListGroup/* VListGroup */.K.filterProps(itemProps);
      return children ? (0,runtime_core_esm_bundler/* createVNode */.bF)(VListGroup/* VListGroup */.K, (0,runtime_core_esm_bundler/* mergeProps */.v6)({
        "value": itemProps?.value
      }, listGroupProps), {
        activator: _ref3 => {
          let {
            props: activatorProps
          } = _ref3;
          const listItemProps = {
            ...itemProps,
            ...activatorProps,
            value: props.returnObject ? item : itemProps.value
          };
          return slots.header ? slots.header({
            props: listItemProps
          }) : (0,runtime_core_esm_bundler/* createVNode */.bF)(VListItem/* VListItem */.g, listItemProps, slotsWithItem);
        },
        default: () => (0,runtime_core_esm_bundler/* createVNode */.bF)(VListChildren, {
          "items": children,
          "returnObject": props.returnObject
        }, slots)
      }) : slots.item ? slots.item({
        props: itemProps
      }) : (0,runtime_core_esm_bundler/* createVNode */.bF)(VListItem/* VListItem */.g, (0,runtime_core_esm_bundler/* mergeProps */.v6)(itemProps, {
        "value": props.returnObject ? item : itemProps.value
      }), slotsWithItem);
    });
  }
});
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/border.mjs
var border = __webpack_require__(89923);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/color.mjs
var composables_color = __webpack_require__(32886);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/component.mjs
var component = __webpack_require__(19262);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/defaults.mjs
var defaults = __webpack_require__(74979);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/density.mjs
var density = __webpack_require__(62191);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/dimensions.mjs
var dimensions = __webpack_require__(62542);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/elevation.mjs
var elevation = __webpack_require__(17018);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/list-items.mjs
var list_items = __webpack_require__(55574);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/nested/nested.mjs + 3 modules
var nested = __webpack_require__(81346);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/rounded.mjs
var rounded = __webpack_require__(73240);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/tag.mjs
var tag = __webpack_require__(54663);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/theme.mjs
var theme = __webpack_require__(47664);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/variant.mjs
var variant = __webpack_require__(72428);
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(90144);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.mjs
var helpers = __webpack_require__(29094);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/useRender.mjs
var useRender = __webpack_require__(74600);
;// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VList/VList.mjs


// Styles


// Components
 // Composables













 // Utilities

 // Types
function isPrimitive(value) {
  return typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean';
}
function transformItem(props, item) {
  const type = (0,helpers/* getPropertyFromItem */.TD)(item, props.itemType, 'item');
  const title = isPrimitive(item) ? item : (0,helpers/* getPropertyFromItem */.TD)(item, props.itemTitle);
  const value = (0,helpers/* getPropertyFromItem */.TD)(item, props.itemValue, undefined);
  const children = (0,helpers/* getPropertyFromItem */.TD)(item, props.itemChildren);
  const itemProps = props.itemProps === true ? (0,helpers/* omit */.cJ)(item, ['children']) : (0,helpers/* getPropertyFromItem */.TD)(item, props.itemProps);
  const _props = {
    title,
    value,
    ...itemProps
  };
  return {
    type,
    title: _props.title,
    value: _props.value,
    props: _props,
    children: type === 'item' && children ? transformItems(props, children) : undefined,
    raw: item
  };
}
function transformItems(props, items) {
  const array = [];
  for (const item of items) {
    array.push(transformItem(props, item));
  }
  return array;
}
function useListItems(props) {
  const items = (0,runtime_core_esm_bundler/* computed */.EW)(() => transformItems(props, props.items));
  return {
    items
  };
}
const makeVListProps = (0,propsFactory/* propsFactory */.j)({
  baseColor: String,
  /* @deprecated */
  activeColor: String,
  activeClass: String,
  bgColor: String,
  disabled: Boolean,
  expandIcon: String,
  collapseIcon: String,
  lines: {
    type: [Boolean, String],
    default: 'one'
  },
  slim: Boolean,
  nav: Boolean,
  'onClick:open': (0,helpers/* EventProp */.uR)(),
  'onClick:select': (0,helpers/* EventProp */.uR)(),
  'onUpdate:opened': (0,helpers/* EventProp */.uR)(),
  ...(0,nested/* makeNestedProps */.i1)({
    selectStrategy: 'single-leaf',
    openStrategy: 'list'
  }),
  ...(0,border/* makeBorderProps */.r)(),
  ...(0,component/* makeComponentProps */.u)(),
  ...(0,density/* makeDensityProps */.r)(),
  ...(0,dimensions/* makeDimensionProps */.X)(),
  ...(0,elevation/* makeElevationProps */.s)(),
  itemType: {
    type: String,
    default: 'type'
  },
  ...(0,list_items/* makeItemsProps */.d_)(),
  ...(0,rounded/* makeRoundedProps */.S)(),
  ...(0,tag/* makeTagProps */.X)(),
  ...(0,theme/* makeThemeProps */.yx)(),
  ...(0,variant/* makeVariantProps */.gI)({
    variant: 'text'
  })
}, 'VList');
const VList = (0,defineComponent/* genericComponent */.RW)()({
  name: 'VList',
  props: makeVListProps(),
  emits: {
    'update:selected': value => true,
    'update:activated': value => true,
    'update:opened': value => true,
    'click:open': value => true,
    'click:activate': value => true,
    'click:select': value => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      items
    } = useListItems(props);
    const {
      themeClasses
    } = (0,theme/* provideTheme */.NX)(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = (0,composables_color/* useBackgroundColor */.z6)((0,reactivity_esm_bundler/* toRef */.lW)(props, 'bgColor'));
    const {
      borderClasses
    } = (0,border/* useBorder */.M)(props);
    const {
      densityClasses
    } = (0,density/* useDensity */.Q)(props);
    const {
      dimensionStyles
    } = (0,dimensions/* useDimension */.S)(props);
    const {
      elevationClasses
    } = (0,elevation/* useElevation */.j)(props);
    const {
      roundedClasses
    } = (0,rounded/* useRounded */.v)(props);
    const {
      children,
      open,
      parents,
      select,
      getPath
    } = (0,nested/* useNested */.$O)(props);
    const lineClasses = (0,runtime_core_esm_bundler/* computed */.EW)(() => props.lines ? `v-list--${props.lines}-line` : undefined);
    const activeColor = (0,reactivity_esm_bundler/* toRef */.lW)(props, 'activeColor');
    const baseColor = (0,reactivity_esm_bundler/* toRef */.lW)(props, 'baseColor');
    const color = (0,reactivity_esm_bundler/* toRef */.lW)(props, 'color');
    (0,list/* createList */.D1)();
    (0,defaults/* provideDefaults */.Uh)({
      VListGroup: {
        activeColor,
        baseColor,
        color,
        expandIcon: (0,reactivity_esm_bundler/* toRef */.lW)(props, 'expandIcon'),
        collapseIcon: (0,reactivity_esm_bundler/* toRef */.lW)(props, 'collapseIcon')
      },
      VListItem: {
        activeClass: (0,reactivity_esm_bundler/* toRef */.lW)(props, 'activeClass'),
        activeColor,
        baseColor,
        color,
        density: (0,reactivity_esm_bundler/* toRef */.lW)(props, 'density'),
        disabled: (0,reactivity_esm_bundler/* toRef */.lW)(props, 'disabled'),
        lines: (0,reactivity_esm_bundler/* toRef */.lW)(props, 'lines'),
        nav: (0,reactivity_esm_bundler/* toRef */.lW)(props, 'nav'),
        slim: (0,reactivity_esm_bundler/* toRef */.lW)(props, 'slim'),
        variant: (0,reactivity_esm_bundler/* toRef */.lW)(props, 'variant')
      }
    });
    const isFocused = (0,reactivity_esm_bundler/* shallowRef */.IJ)(false);
    const contentRef = (0,reactivity_esm_bundler/* ref */.KR)();
    function onFocusin(e) {
      isFocused.value = true;
    }
    function onFocusout(e) {
      isFocused.value = false;
    }
    function onFocus(e) {
      if (!isFocused.value && !(e.relatedTarget && contentRef.value?.contains(e.relatedTarget))) focus();
    }
    function onKeydown(e) {
      const target = e.target;
      if (!contentRef.value || ['INPUT', 'TEXTAREA'].includes(target.tagName)) return;
      if (e.key === 'ArrowDown') {
        focus('next');
      } else if (e.key === 'ArrowUp') {
        focus('prev');
      } else if (e.key === 'Home') {
        focus('first');
      } else if (e.key === 'End') {
        focus('last');
      } else {
        return;
      }
      e.preventDefault();
    }
    function onMousedown(e) {
      isFocused.value = true;
    }
    function focus(location) {
      if (contentRef.value) {
        return (0,helpers/* focusChild */.bq)(contentRef.value, location);
      }
    }
    (0,useRender/* useRender */.C)(() => {
      return (0,runtime_core_esm_bundler/* createVNode */.bF)(props.tag, {
        "ref": contentRef,
        "class": ['v-list', {
          'v-list--disabled': props.disabled,
          'v-list--nav': props.nav,
          'v-list--slim': props.slim
        }, themeClasses.value, backgroundColorClasses.value, borderClasses.value, densityClasses.value, elevationClasses.value, lineClasses.value, roundedClasses.value, props.class],
        "style": [backgroundColorStyles.value, dimensionStyles.value, props.style],
        "tabindex": props.disabled || isFocused.value ? -1 : 0,
        "role": "listbox",
        "aria-activedescendant": undefined,
        "onFocusin": onFocusin,
        "onFocusout": onFocusout,
        "onFocus": onFocus,
        "onKeydown": onKeydown,
        "onMousedown": onMousedown
      }, {
        default: () => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VListChildren, {
          "items": items.value,
          "returnObject": props.returnObject
        }, slots)]
      });
    });
    return {
      open,
      select,
      focus,
      children,
      parents,
      getPath
    };
  }
});

/***/ }),

/***/ 4529:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: function() { return /* binding */ VListGroup; }
/* harmony export */ });
/* unused harmony export makeVListGroupProps */
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(56768);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(45130);
/* harmony import */ var _transitions_index_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(59562);
/* harmony import */ var _VDefaultsProvider_index_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(37852);
/* harmony import */ var _list_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(44146);
/* harmony import */ var _composables_component_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19262);
/* harmony import */ var _composables_icons_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24581);
/* harmony import */ var _composables_nested_nested_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81346);
/* harmony import */ var _composables_ssrBoot_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(86747);
/* harmony import */ var _composables_tag_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54663);
/* harmony import */ var _composables_transition_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(34464);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90144);
/* harmony import */ var _util_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51247);
/* harmony import */ var _util_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14587);
/* harmony import */ var _util_index_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(74600);

// Components

 // Composables






 // Utilities


const VListGroupActivator = (0,_util_index_mjs__WEBPACK_IMPORTED_MODULE_0__/* .defineComponent */ .pM)({
  name: 'VListGroupActivator',
  setup(_, _ref) {
    let {
      slots
    } = _ref;
    (0,_composables_nested_nested_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useNestedGroupActivator */ .H5)();
    return () => slots.default?.();
  }
});
const makeVListGroupProps = (0,_util_index_mjs__WEBPACK_IMPORTED_MODULE_2__/* .propsFactory */ .j)({
  /* @deprecated */
  activeColor: String,
  baseColor: String,
  color: String,
  collapseIcon: {
    type: _composables_icons_mjs__WEBPACK_IMPORTED_MODULE_3__/* .IconValue */ .TX,
    default: '$collapse'
  },
  expandIcon: {
    type: _composables_icons_mjs__WEBPACK_IMPORTED_MODULE_3__/* .IconValue */ .TX,
    default: '$expand'
  },
  prependIcon: _composables_icons_mjs__WEBPACK_IMPORTED_MODULE_3__/* .IconValue */ .TX,
  appendIcon: _composables_icons_mjs__WEBPACK_IMPORTED_MODULE_3__/* .IconValue */ .TX,
  fluid: Boolean,
  subgroup: Boolean,
  title: String,
  value: null,
  ...(0,_composables_component_mjs__WEBPACK_IMPORTED_MODULE_4__/* .makeComponentProps */ .u)(),
  ...(0,_composables_tag_mjs__WEBPACK_IMPORTED_MODULE_5__/* .makeTagProps */ .X)()
}, 'VListGroup');
const VListGroup = (0,_util_index_mjs__WEBPACK_IMPORTED_MODULE_0__/* .genericComponent */ .RW)()({
  name: 'VListGroup',
  props: makeVListGroupProps(),
  setup(props, _ref2) {
    let {
      slots
    } = _ref2;
    const {
      isOpen,
      open,
      id: _id
    } = (0,_composables_nested_nested_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useNestedItem */ .mo)((0,vue__WEBPACK_IMPORTED_MODULE_6__/* .toRef */ .lW)(props, 'value'), true);
    const id = (0,vue__WEBPACK_IMPORTED_MODULE_7__/* .computed */ .EW)(() => `v-list-group--id-${String(_id.value)}`);
    const list = (0,_list_mjs__WEBPACK_IMPORTED_MODULE_8__/* .useList */ .UH)();
    const {
      isBooted
    } = (0,_composables_ssrBoot_mjs__WEBPACK_IMPORTED_MODULE_9__/* .useSsrBoot */ .K)();
    function onClick(e) {
      e.stopPropagation();
      open(!isOpen.value, e);
    }
    const activatorProps = (0,vue__WEBPACK_IMPORTED_MODULE_7__/* .computed */ .EW)(() => ({
      onClick,
      class: 'v-list-group__header',
      id: id.value
    }));
    const toggleIcon = (0,vue__WEBPACK_IMPORTED_MODULE_7__/* .computed */ .EW)(() => isOpen.value ? props.collapseIcon : props.expandIcon);
    const activatorDefaults = (0,vue__WEBPACK_IMPORTED_MODULE_7__/* .computed */ .EW)(() => ({
      VListItem: {
        active: isOpen.value,
        activeColor: props.activeColor,
        baseColor: props.baseColor,
        color: props.color,
        prependIcon: props.prependIcon || props.subgroup && toggleIcon.value,
        appendIcon: props.appendIcon || !props.subgroup && toggleIcon.value,
        title: props.title,
        value: props.value
      }
    }));
    (0,_util_index_mjs__WEBPACK_IMPORTED_MODULE_10__/* .useRender */ .C)(() => (0,vue__WEBPACK_IMPORTED_MODULE_7__/* .createVNode */ .bF)(props.tag, {
      "class": ['v-list-group', {
        'v-list-group--prepend': list?.hasPrepend.value,
        'v-list-group--fluid': props.fluid,
        'v-list-group--subgroup': props.subgroup,
        'v-list-group--open': isOpen.value
      }, props.class],
      "style": props.style
    }, {
      default: () => [slots.activator && (0,vue__WEBPACK_IMPORTED_MODULE_7__/* .createVNode */ .bF)(_VDefaultsProvider_index_mjs__WEBPACK_IMPORTED_MODULE_11__/* .VDefaultsProvider */ .K, {
        "defaults": activatorDefaults.value
      }, {
        default: () => [(0,vue__WEBPACK_IMPORTED_MODULE_7__/* .createVNode */ .bF)(VListGroupActivator, null, {
          default: () => [slots.activator({
            props: activatorProps.value,
            isOpen: isOpen.value
          })]
        })]
      }), (0,vue__WEBPACK_IMPORTED_MODULE_7__/* .createVNode */ .bF)(_composables_transition_mjs__WEBPACK_IMPORTED_MODULE_12__/* .MaybeTransition */ .M, {
        "transition": {
          component: _transitions_index_mjs__WEBPACK_IMPORTED_MODULE_13__/* .VExpandTransition */ .Qo
        },
        "disabled": !isBooted.value
      }, {
        default: () => [(0,vue__WEBPACK_IMPORTED_MODULE_7__/* .withDirectives */ .bo)((0,vue__WEBPACK_IMPORTED_MODULE_7__/* .createVNode */ .bF)("div", {
          "class": "v-list-group__items",
          "role": "group",
          "aria-labelledby": id.value
        }, [slots.default?.()]), [[vue__WEBPACK_IMPORTED_MODULE_14__/* .vShow */ .aG, isOpen.value]])]
      })]
    }));
    return {
      isOpen
    };
  }
});

/***/ }),

/***/ 57254:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  g: function() { return /* binding */ VListItem; }
});

// UNUSED EXPORTS: makeVListItemProps

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(56768);
;// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.css
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemSubtitle.mjs
var VListItemSubtitle = __webpack_require__(97505);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemTitle.mjs
var VListItemTitle = __webpack_require__(4913);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/VAvatar.mjs + 1 modules
var VAvatar = __webpack_require__(73416);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDefaultsProvider/VDefaultsProvider.mjs
var VDefaultsProvider = __webpack_require__(37852);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.mjs + 1 modules
var VIcon = __webpack_require__(79669);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/list.mjs
var VList_list = __webpack_require__(44146);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/border.mjs
var border = __webpack_require__(89923);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/component.mjs
var component = __webpack_require__(19262);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/density.mjs
var density = __webpack_require__(62191);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/dimensions.mjs
var dimensions = __webpack_require__(62542);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/elevation.mjs
var elevation = __webpack_require__(17018);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/icons.mjs + 1 modules
var icons = __webpack_require__(24581);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/nested/nested.mjs + 3 modules
var nested = __webpack_require__(81346);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/rounded.mjs
var rounded = __webpack_require__(73240);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/router.mjs
var router = __webpack_require__(16314);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/tag.mjs
var tag = __webpack_require__(54663);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/theme.mjs
var theme = __webpack_require__(47664);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/variant.mjs
var variant = __webpack_require__(72428);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/ripple/index.mjs + 1 modules
var ripple = __webpack_require__(759);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/propsFactory.mjs
var propsFactory = __webpack_require__(14587);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.mjs
var helpers = __webpack_require__(29094);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/defineComponent.mjs
var defineComponent = __webpack_require__(51247);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/useRender.mjs
var useRender = __webpack_require__(74600);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/console.mjs
var console = __webpack_require__(17354);
;// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.mjs

// Styles


// Components




 // Composables












 // Directives
 // Utilities

 // Types
const makeVListItemProps = (0,propsFactory/* propsFactory */.j)({
  active: {
    type: Boolean,
    default: undefined
  },
  activeClass: String,
  /* @deprecated */
  activeColor: String,
  appendAvatar: String,
  appendIcon: icons/* IconValue */.TX,
  baseColor: String,
  disabled: Boolean,
  lines: [Boolean, String],
  link: {
    type: Boolean,
    default: undefined
  },
  nav: Boolean,
  prependAvatar: String,
  prependIcon: icons/* IconValue */.TX,
  ripple: {
    type: [Boolean, Object],
    default: true
  },
  slim: Boolean,
  subtitle: [String, Number],
  title: [String, Number],
  value: null,
  onClick: (0,helpers/* EventProp */.uR)(),
  onClickOnce: (0,helpers/* EventProp */.uR)(),
  ...(0,border/* makeBorderProps */.r)(),
  ...(0,component/* makeComponentProps */.u)(),
  ...(0,density/* makeDensityProps */.r)(),
  ...(0,dimensions/* makeDimensionProps */.X)(),
  ...(0,elevation/* makeElevationProps */.s)(),
  ...(0,rounded/* makeRoundedProps */.S)(),
  ...(0,router/* makeRouterProps */.WC)(),
  ...(0,tag/* makeTagProps */.X)(),
  ...(0,theme/* makeThemeProps */.yx)(),
  ...(0,variant/* makeVariantProps */.gI)({
    variant: 'text'
  })
}, 'VListItem');
const VListItem = (0,defineComponent/* genericComponent */.RW)()({
  name: 'VListItem',
  directives: {
    Ripple: ripple/* Ripple */.n
  },
  props: makeVListItemProps(),
  emits: {
    click: e => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots,
      emit
    } = _ref;
    const link = (0,router/* useLink */.iE)(props, attrs);
    const id = (0,runtime_core_esm_bundler/* computed */.EW)(() => props.value === undefined ? link.href.value : props.value);
    const {
      activate,
      isActivated,
      select,
      isOpen,
      isSelected,
      isIndeterminate,
      isGroupActivator,
      root,
      parent,
      openOnSelect,
      id: uid
    } = (0,nested/* useNestedItem */.mo)(id, false);
    const list = (0,VList_list/* useList */.UH)();
    const isActive = (0,runtime_core_esm_bundler/* computed */.EW)(() => props.active !== false && (props.active || link.isActive?.value || (root.activatable.value ? isActivated.value : isSelected.value)));
    const isLink = (0,runtime_core_esm_bundler/* computed */.EW)(() => props.link !== false && link.isLink.value);
    const isClickable = (0,runtime_core_esm_bundler/* computed */.EW)(() => !props.disabled && props.link !== false && (props.link || link.isClickable.value || !!list && (root.selectable.value || root.activatable.value || props.value != null)));
    const roundedProps = (0,runtime_core_esm_bundler/* computed */.EW)(() => props.rounded || props.nav);
    const color = (0,runtime_core_esm_bundler/* computed */.EW)(() => props.color ?? props.activeColor);
    const variantProps = (0,runtime_core_esm_bundler/* computed */.EW)(() => ({
      color: isActive.value ? color.value ?? props.baseColor : props.baseColor,
      variant: props.variant
    }));
    (0,runtime_core_esm_bundler/* watch */.wB)(() => link.isActive?.value, val => {
      if (val && parent.value != null) {
        root.open(parent.value, true);
      }
      if (val) {
        openOnSelect(val);
      }
    }, {
      immediate: true
    });
    const {
      themeClasses
    } = (0,theme/* provideTheme */.NX)(props);
    const {
      borderClasses
    } = (0,border/* useBorder */.M)(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = (0,variant/* useVariant */.rn)(variantProps);
    const {
      densityClasses
    } = (0,density/* useDensity */.Q)(props);
    const {
      dimensionStyles
    } = (0,dimensions/* useDimension */.S)(props);
    const {
      elevationClasses
    } = (0,elevation/* useElevation */.j)(props);
    const {
      roundedClasses
    } = (0,rounded/* useRounded */.v)(roundedProps);
    const lineClasses = (0,runtime_core_esm_bundler/* computed */.EW)(() => props.lines ? `v-list-item--${props.lines}-line` : undefined);
    const slotProps = (0,runtime_core_esm_bundler/* computed */.EW)(() => ({
      isActive: isActive.value,
      select,
      isOpen: isOpen.value,
      isSelected: isSelected.value,
      isIndeterminate: isIndeterminate.value
    }));
    function onClick(e) {
      emit('click', e);
      if (!isClickable.value) return;
      link.navigate?.(e);
      if (isGroupActivator) return;
      if (root.activatable.value) {
        activate(!isActivated.value, e);
      } else if (root.selectable.value) {
        select(!isSelected.value, e);
      } else if (props.value != null) {
        select(!isSelected.value, e);
      }
    }
    function onKeyDown(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        e.target.dispatchEvent(new MouseEvent('click', e));
      }
    }
    (0,useRender/* useRender */.C)(() => {
      const Tag = isLink.value ? 'a' : props.tag;
      const hasTitle = slots.title || props.title != null;
      const hasSubtitle = slots.subtitle || props.subtitle != null;
      const hasAppendMedia = !!(props.appendAvatar || props.appendIcon);
      const hasAppend = !!(hasAppendMedia || slots.append);
      const hasPrependMedia = !!(props.prependAvatar || props.prependIcon);
      const hasPrepend = !!(hasPrependMedia || slots.prepend);
      list?.updateHasPrepend(hasPrepend);
      if (props.activeColor) {
        (0,console/* deprecate */.CI)('active-color', ['color', 'base-color']);
      }
      return (0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createVNode */.bF)(Tag, (0,runtime_core_esm_bundler/* mergeProps */.v6)({
        "class": ['v-list-item', {
          'v-list-item--active': isActive.value,
          'v-list-item--disabled': props.disabled,
          'v-list-item--link': isClickable.value,
          'v-list-item--nav': props.nav,
          'v-list-item--prepend': !hasPrepend && list?.hasPrepend.value,
          'v-list-item--slim': props.slim,
          [`${props.activeClass}`]: props.activeClass && isActive.value
        }, themeClasses.value, borderClasses.value, colorClasses.value, densityClasses.value, elevationClasses.value, lineClasses.value, roundedClasses.value, variantClasses.value, props.class],
        "style": [colorStyles.value, dimensionStyles.value, props.style],
        "tabindex": isClickable.value ? list ? -2 : 0 : undefined,
        "onClick": onClick,
        "onKeydown": isClickable.value && !isLink.value && onKeyDown
      }, link.linkProps), {
        default: () => [(0,variant/* genOverlays */.wN)(isClickable.value || isActive.value, 'v-list-item'), hasPrepend && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "key": "prepend",
          "class": "v-list-item__prepend"
        }, [!slots.prepend ? (0,runtime_core_esm_bundler/* createVNode */.bF)(runtime_core_esm_bundler/* Fragment */.FK, null, [props.prependAvatar && (0,runtime_core_esm_bundler/* createVNode */.bF)(VAvatar/* VAvatar */.y, {
          "key": "prepend-avatar",
          "density": props.density,
          "image": props.prependAvatar
        }, null), props.prependIcon && (0,runtime_core_esm_bundler/* createVNode */.bF)(VIcon/* VIcon */.w, {
          "key": "prepend-icon",
          "density": props.density,
          "icon": props.prependIcon
        }, null)]) : (0,runtime_core_esm_bundler/* createVNode */.bF)(VDefaultsProvider/* VDefaultsProvider */.K, {
          "key": "prepend-defaults",
          "disabled": !hasPrependMedia,
          "defaults": {
            VAvatar: {
              density: props.density,
              image: props.prependAvatar
            },
            VIcon: {
              density: props.density,
              icon: props.prependIcon
            },
            VListItemAction: {
              start: true
            }
          }
        }, {
          default: () => [slots.prepend?.(slotProps.value)]
        }), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "v-list-item__spacer"
        }, null)]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "v-list-item__content",
          "data-no-activator": ""
        }, [hasTitle && (0,runtime_core_esm_bundler/* createVNode */.bF)(VListItemTitle/* VListItemTitle */.U, {
          "key": "title"
        }, {
          default: () => [slots.title?.({
            title: props.title
          }) ?? props.title]
        }), hasSubtitle && (0,runtime_core_esm_bundler/* createVNode */.bF)(VListItemSubtitle/* VListItemSubtitle */.w, {
          "key": "subtitle"
        }, {
          default: () => [slots.subtitle?.({
            subtitle: props.subtitle
          }) ?? props.subtitle]
        }), slots.default?.(slotProps.value)]), hasAppend && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "key": "append",
          "class": "v-list-item__append"
        }, [!slots.append ? (0,runtime_core_esm_bundler/* createVNode */.bF)(runtime_core_esm_bundler/* Fragment */.FK, null, [props.appendIcon && (0,runtime_core_esm_bundler/* createVNode */.bF)(VIcon/* VIcon */.w, {
          "key": "append-icon",
          "density": props.density,
          "icon": props.appendIcon
        }, null), props.appendAvatar && (0,runtime_core_esm_bundler/* createVNode */.bF)(VAvatar/* VAvatar */.y, {
          "key": "append-avatar",
          "density": props.density,
          "image": props.appendAvatar
        }, null)]) : (0,runtime_core_esm_bundler/* createVNode */.bF)(VDefaultsProvider/* VDefaultsProvider */.K, {
          "key": "append-defaults",
          "disabled": !hasAppendMedia,
          "defaults": {
            VAvatar: {
              density: props.density,
              image: props.appendAvatar
            },
            VIcon: {
              density: props.density,
              icon: props.appendIcon
            },
            VListItemAction: {
              end: true
            }
          }
        }, {
          default: () => [slots.append?.(slotProps.value)]
        }), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "v-list-item__spacer"
        }, null)])]
      }), [[(0,runtime_core_esm_bundler/* resolveDirective */.gN)("ripple"), isClickable.value && props.ripple]]);
    });
    return {
      activate,
      isActivated,
      isGroupActivator,
      isSelected,
      list,
      select,
      root,
      id: uid
    };
  }
});

/***/ }),

/***/ 97505:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: function() { return /* binding */ VListItemSubtitle; }
/* harmony export */ });
/* unused harmony export makeVListItemSubtitleProps */
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56768);
/* harmony import */ var _composables_component_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19262);
/* harmony import */ var _composables_tag_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54663);
/* harmony import */ var _util_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14587);
/* harmony import */ var _util_index_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51247);
/* harmony import */ var _util_index_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74600);

// Composables

 // Utilities

const makeVListItemSubtitleProps = (0,_util_index_mjs__WEBPACK_IMPORTED_MODULE_0__/* .propsFactory */ .j)({
  opacity: [Number, String],
  ...(0,_composables_component_mjs__WEBPACK_IMPORTED_MODULE_1__/* .makeComponentProps */ .u)(),
  ...(0,_composables_tag_mjs__WEBPACK_IMPORTED_MODULE_2__/* .makeTagProps */ .X)()
}, 'VListItemSubtitle');
const VListItemSubtitle = (0,_util_index_mjs__WEBPACK_IMPORTED_MODULE_3__/* .genericComponent */ .RW)()({
  name: 'VListItemSubtitle',
  props: makeVListItemSubtitleProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    (0,_util_index_mjs__WEBPACK_IMPORTED_MODULE_4__/* .useRender */ .C)(() => (0,vue__WEBPACK_IMPORTED_MODULE_5__/* .createVNode */ .bF)(props.tag, {
      "class": ['v-list-item-subtitle', props.class],
      "style": [{
        '--v-list-item-subtitle-opacity': props.opacity
      }, props.style]
    }, slots));
    return {};
  }
});

/***/ }),

/***/ 4913:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: function() { return /* binding */ VListItemTitle; }
/* harmony export */ });
/* harmony import */ var _util_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72586);
// Utilities

const VListItemTitle = (0,_util_index_mjs__WEBPACK_IMPORTED_MODULE_0__/* .createSimpleFunctional */ .G)('v-list-item-title');

/***/ }),

/***/ 86449:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: function() { return /* binding */ VListSubheader; }
/* harmony export */ });
/* unused harmony export makeVListSubheaderProps */
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(56768);
/* harmony import */ var _composables_color_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32886);
/* harmony import */ var _composables_component_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19262);
/* harmony import */ var _composables_tag_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54663);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90144);
/* harmony import */ var _util_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14587);
/* harmony import */ var _util_index_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51247);
/* harmony import */ var _util_index_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74600);

// Composables


 // Utilities


const makeVListSubheaderProps = (0,_util_index_mjs__WEBPACK_IMPORTED_MODULE_0__/* .propsFactory */ .j)({
  color: String,
  inset: Boolean,
  sticky: Boolean,
  title: String,
  ...(0,_composables_component_mjs__WEBPACK_IMPORTED_MODULE_1__/* .makeComponentProps */ .u)(),
  ...(0,_composables_tag_mjs__WEBPACK_IMPORTED_MODULE_2__/* .makeTagProps */ .X)()
}, 'VListSubheader');
const VListSubheader = (0,_util_index_mjs__WEBPACK_IMPORTED_MODULE_3__/* .genericComponent */ .RW)()({
  name: 'VListSubheader',
  props: makeVListSubheaderProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      textColorClasses,
      textColorStyles
    } = (0,_composables_color_mjs__WEBPACK_IMPORTED_MODULE_4__/* .useTextColor */ .aH)((0,vue__WEBPACK_IMPORTED_MODULE_5__/* .toRef */ .lW)(props, 'color'));
    (0,_util_index_mjs__WEBPACK_IMPORTED_MODULE_6__/* .useRender */ .C)(() => {
      const hasText = !!(slots.default || props.title);
      return (0,vue__WEBPACK_IMPORTED_MODULE_7__/* .createVNode */ .bF)(props.tag, {
        "class": ['v-list-subheader', {
          'v-list-subheader--inset': props.inset,
          'v-list-subheader--sticky': props.sticky
        }, textColorClasses.value, props.class],
        "style": [{
          textColorStyles
        }, props.style]
      }, {
        default: () => [hasText && (0,vue__WEBPACK_IMPORTED_MODULE_7__/* .createVNode */ .bF)("div", {
          "class": "v-list-subheader__text"
        }, [slots.default?.() ?? props.title])]
      });
    });
    return {};
  }
});

/***/ }),

/***/ 27622:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  x8: function() { return /* reexport */ VList/* VList */.x8; },
  KG: function() { return /* reexport */ VListGroup/* VListGroup */.K; },
  SG: function() { return /* reexport */ VListImg; },
  gc: function() { return /* reexport */ VListItem/* VListItem */.g; },
  k3: function() { return /* reexport */ VListItemAction; },
  A8: function() { return /* reexport */ VListItemMedia; },
  w: function() { return /* reexport */ VListItemSubtitle/* VListItemSubtitle */.w; },
  UZ: function() { return /* reexport */ VListItemTitle/* VListItemTitle */.U; },
  wh: function() { return /* reexport */ VListSubheader/* VListSubheader */.w; }
});

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.mjs + 2 modules
var VList = __webpack_require__(69915);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListGroup.mjs
var VListGroup = __webpack_require__(4529);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/createSimpleFunctional.mjs
var createSimpleFunctional = __webpack_require__(72586);
;// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VList/VListImg.mjs
// Utilities

const VListImg = (0,createSimpleFunctional/* createSimpleFunctional */.G)('v-list-img');
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.mjs + 1 modules
var VListItem = __webpack_require__(57254);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(56768);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/component.mjs
var component = __webpack_require__(19262);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/tag.mjs
var tag = __webpack_require__(54663);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/propsFactory.mjs
var propsFactory = __webpack_require__(14587);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/defineComponent.mjs
var defineComponent = __webpack_require__(51247);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/useRender.mjs
var useRender = __webpack_require__(74600);
;// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VList/VListItemAction.mjs

// Composables

 // Utilities

const makeVListItemActionProps = (0,propsFactory/* propsFactory */.j)({
  start: Boolean,
  end: Boolean,
  ...(0,component/* makeComponentProps */.u)(),
  ...(0,tag/* makeTagProps */.X)()
}, 'VListItemAction');
const VListItemAction = (0,defineComponent/* genericComponent */.RW)()({
  name: 'VListItemAction',
  props: makeVListItemActionProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    (0,useRender/* useRender */.C)(() => (0,runtime_core_esm_bundler/* createVNode */.bF)(props.tag, {
      "class": ['v-list-item-action', {
        'v-list-item-action--start': props.start,
        'v-list-item-action--end': props.end
      }, props.class],
      "style": props.style
    }, slots));
    return {};
  }
});
;// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VList/VListItemMedia.mjs

// Composables

 // Utilities

const makeVListItemMediaProps = (0,propsFactory/* propsFactory */.j)({
  start: Boolean,
  end: Boolean,
  ...(0,component/* makeComponentProps */.u)(),
  ...(0,tag/* makeTagProps */.X)()
}, 'VListItemMedia');
const VListItemMedia = (0,defineComponent/* genericComponent */.RW)()({
  name: 'VListItemMedia',
  props: makeVListItemMediaProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    (0,useRender/* useRender */.C)(() => {
      return (0,runtime_core_esm_bundler/* createVNode */.bF)(props.tag, {
        "class": ['v-list-item-media', {
          'v-list-item-media--start': props.start,
          'v-list-item-media--end': props.end
        }, props.class],
        "style": props.style
      }, slots);
    });
    return {};
  }
});
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemSubtitle.mjs
var VListItemSubtitle = __webpack_require__(97505);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemTitle.mjs
var VListItemTitle = __webpack_require__(4913);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListSubheader.mjs
var VListSubheader = __webpack_require__(86449);
;// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VList/index.mjs










/***/ }),

/***/ 44146:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D1: function() { return /* binding */ createList; },
/* harmony export */   UH: function() { return /* binding */ useList; }
/* harmony export */ });
/* unused harmony exports DepthKey, useDepth, ListKey */
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56768);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90144);
// Utilities


// Types

// Depth
const DepthKey = Symbol.for('vuetify:depth');
function useDepth(hasPrepend) {
  const parent = inject(DepthKey, shallowRef(-1));
  const depth = computed(() => parent.value + 1 + (hasPrepend?.value ? 1 : 0));
  provide(DepthKey, depth);
  return depth;
}

// List
const ListKey = Symbol.for('vuetify:list');
function createList() {
  const parent = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQ)(ListKey, {
    hasPrepend: (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .shallowRef */ .IJ)(false),
    updateHasPrepend: () => null
  });
  const data = {
    hasPrepend: (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .shallowRef */ .IJ)(false),
    updateHasPrepend: value => {
      if (value) data.hasPrepend.value = value;
    }
  };
  (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .provide */ .Gt)(ListKey, data);
  return parent;
}
function useList() {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQ)(ListKey, null);
}

/***/ }),

/***/ 74176:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  i: function() { return /* reexport */ VLocaleProvider; }
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(56768);
;// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VLocaleProvider/VLocaleProvider.css
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/component.mjs
var component = __webpack_require__(19262);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/locale.mjs + 2 modules
var locale = __webpack_require__(95296);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/propsFactory.mjs
var propsFactory = __webpack_require__(14587);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/defineComponent.mjs
var defineComponent = __webpack_require__(51247);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/useRender.mjs
var useRender = __webpack_require__(74600);
;// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VLocaleProvider/VLocaleProvider.mjs

// Styles


// Composables

 // Utilities

const makeVLocaleProviderProps = (0,propsFactory/* propsFactory */.j)({
  locale: String,
  fallbackLocale: String,
  messages: Object,
  rtl: {
    type: Boolean,
    default: undefined
  },
  ...(0,component/* makeComponentProps */.u)()
}, 'VLocaleProvider');
const VLocaleProvider = (0,defineComponent/* genericComponent */.RW)()({
  name: 'VLocaleProvider',
  props: makeVLocaleProviderProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      rtlClasses
    } = (0,locale/* provideLocale */.Q1)(props);
    (0,useRender/* useRender */.C)(() => (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
      "class": ['v-locale-provider', rtlClasses.value, props.class],
      "style": props.style
    }, [slots.default?.()]));
    return {};
  }
});
;// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VLocaleProvider/index.mjs


/***/ }),

/***/ 98477:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Y: function() { return /* binding */ VMain; }
});

// UNUSED EXPORTS: makeVMainProps

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(56768);
;// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VMain/VMain.css
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/component.mjs
var component = __webpack_require__(19262);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/dimensions.mjs
var dimensions = __webpack_require__(62542);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/layout.mjs
var layout = __webpack_require__(34603);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/ssrBoot.mjs
var ssrBoot = __webpack_require__(86747);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/tag.mjs
var tag = __webpack_require__(54663);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/propsFactory.mjs
var propsFactory = __webpack_require__(14587);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/defineComponent.mjs
var defineComponent = __webpack_require__(51247);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/useRender.mjs
var useRender = __webpack_require__(74600);
;// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VMain/VMain.mjs

// Styles


// Composables




 // Utilities

const makeVMainProps = (0,propsFactory/* propsFactory */.j)({
  scrollable: Boolean,
  ...(0,component/* makeComponentProps */.u)(),
  ...(0,dimensions/* makeDimensionProps */.X)(),
  ...(0,tag/* makeTagProps */.X)({
    tag: 'main'
  })
}, 'VMain');
const VMain = (0,defineComponent/* genericComponent */.RW)()({
  name: 'VMain',
  props: makeVMainProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      dimensionStyles
    } = (0,dimensions/* useDimension */.S)(props);
    const {
      mainStyles
    } = (0,layout/* useLayout */.gK)();
    const {
      ssrBootStyles
    } = (0,ssrBoot/* useSsrBoot */.K)();
    (0,useRender/* useRender */.C)(() => (0,runtime_core_esm_bundler/* createVNode */.bF)(props.tag, {
      "class": ['v-main', {
        'v-main--scrollable': props.scrollable
      }, props.class],
      "style": [mainStyles.value, ssrBootStyles.value, dimensionStyles.value, props.style]
    }, {
      default: () => [props.scrollable ? (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "v-main__scroller"
      }, [slots.default?.()]) : slots.default?.()]
    }));
    return {};
  }
});

/***/ }),

/***/ 42097:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: function() { return /* reexport safe */ _VMain_mjs__WEBPACK_IMPORTED_MODULE_0__.Y; }
/* harmony export */ });
/* harmony import */ var _VMain_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98477);


/***/ }),

/***/ 88249:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  q: function() { return /* binding */ VMenu; },
  k: function() { return /* binding */ makeVMenuProps; }
});

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.difference.v2.js
var es_set_difference_v2 = __webpack_require__(17642);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.intersection.v2.js
var es_set_intersection_v2 = __webpack_require__(58004);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.is-disjoint-from.v2.js
var es_set_is_disjoint_from_v2 = __webpack_require__(33853);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.is-subset-of.v2.js
var es_set_is_subset_of_v2 = __webpack_require__(45876);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.is-superset-of.v2.js
var es_set_is_superset_of_v2 = __webpack_require__(32475);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.symmetric-difference.v2.js
var es_set_symmetric_difference_v2 = __webpack_require__(15024);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.union.v2.js
var es_set_union_v2 = __webpack_require__(31698);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(56768);
;// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VMenu/VMenu.css
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/transitions/dialog-transition.mjs
var dialog_transition = __webpack_require__(6856);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDefaultsProvider/VDefaultsProvider.mjs
var VDefaultsProvider = __webpack_require__(37852);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VOverlay/VOverlay.mjs + 6 modules
var VOverlay = __webpack_require__(95332);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/forwardRefs.mjs
var forwardRefs = __webpack_require__(61950);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/locale.mjs + 2 modules
var locale = __webpack_require__(95296);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/proxiedModel.mjs
var proxiedModel = __webpack_require__(82067);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/scopeId.mjs
var composables_scopeId = __webpack_require__(32876);
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(90144);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMenu/shared.mjs
var shared = __webpack_require__(76118);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/propsFactory.mjs
var propsFactory = __webpack_require__(14587);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.mjs
var helpers = __webpack_require__(29094);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/defineComponent.mjs
var defineComponent = __webpack_require__(51247);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/getCurrentInstance.mjs
var getCurrentInstance = __webpack_require__(37861);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/useRender.mjs
var useRender = __webpack_require__(74600);
;// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VMenu/VMenu.mjs








// Styles


// Components



 // Composables



 // Utilities


 // Types
const makeVMenuProps = (0,propsFactory/* propsFactory */.j)({
  // TODO
  // disableKeys: Boolean,
  id: String,
  submenu: Boolean,
  ...(0,helpers/* omit */.cJ)((0,VOverlay/* makeVOverlayProps */.D)({
    closeDelay: 250,
    closeOnContentClick: true,
    locationStrategy: 'connected',
    location: undefined,
    openDelay: 300,
    scrim: false,
    scrollStrategy: 'reposition',
    transition: {
      component: dialog_transition/* VDialogTransition */._
    }
  }), ['absolute'])
}, 'VMenu');
const VMenu = (0,defineComponent/* genericComponent */.RW)()({
  name: 'VMenu',
  props: makeVMenuProps(),
  emits: {
    'update:modelValue': value => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const isActive = (0,proxiedModel/* useProxiedModel */.q)(props, 'modelValue');
    const {
      scopeId
    } = (0,composables_scopeId/* useScopeId */.b)();
    const {
      isRtl
    } = (0,locale/* useRtl */.IA)();
    const uid = (0,getCurrentInstance/* getUid */.v6)();
    const id = (0,runtime_core_esm_bundler/* computed */.EW)(() => props.id || `v-menu-${uid}`);
    const overlay = (0,reactivity_esm_bundler/* ref */.KR)();
    const parent = (0,runtime_core_esm_bundler/* inject */.WQ)(shared/* VMenuSymbol */.S, null);
    const openChildren = (0,reactivity_esm_bundler/* shallowRef */.IJ)(new Set());
    (0,runtime_core_esm_bundler/* provide */.Gt)(shared/* VMenuSymbol */.S, {
      register() {
        openChildren.value.add(uid);
      },
      unregister() {
        openChildren.value.delete(uid);
      },
      closeParents(e) {
        setTimeout(() => {
          if (!openChildren.value.size && !props.persistent && (e == null || overlay.value?.contentEl && !(0,helpers/* isClickInsideElement */.jF)(e, overlay.value.contentEl))) {
            isActive.value = false;
            parent?.closeParents();
          }
        }, 40);
      }
    });
    (0,runtime_core_esm_bundler/* onBeforeUnmount */.xo)(() => parent?.unregister());
    (0,runtime_core_esm_bundler/* onDeactivated */.Y4)(() => isActive.value = false);
    async function onFocusIn(e) {
      const before = e.relatedTarget;
      const after = e.target;
      await (0,runtime_core_esm_bundler/* nextTick */.dY)();
      if (isActive.value && before !== after && overlay.value?.contentEl &&
      // We're the topmost menu
      overlay.value?.globalTop &&
      // It isn't the document or the menu body
      ![document, overlay.value.contentEl].includes(after) &&
      // It isn't inside the menu body
      !overlay.value.contentEl.contains(after)) {
        const focusable = (0,helpers/* focusableChildren */.OW)(overlay.value.contentEl);
        focusable[0]?.focus();
      }
    }
    (0,runtime_core_esm_bundler/* watch */.wB)(isActive, val => {
      if (val) {
        parent?.register();
        document.addEventListener('focusin', onFocusIn, {
          once: true
        });
      } else {
        parent?.unregister();
        document.removeEventListener('focusin', onFocusIn);
      }
    });
    function onClickOutside(e) {
      parent?.closeParents(e);
    }
    function onKeydown(e) {
      if (props.disabled) return;
      if (e.key === 'Tab' || e.key === 'Enter' && !props.closeOnContentClick) {
        if (e.key === 'Enter' && (e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLInputElement && !!e.target.closest('form'))) return;
        if (e.key === 'Enter') e.preventDefault();
        const nextElement = (0,helpers/* getNextElement */.eX)((0,helpers/* focusableChildren */.OW)(overlay.value?.contentEl, false), e.shiftKey ? 'prev' : 'next', el => el.tabIndex >= 0);
        if (!nextElement) {
          isActive.value = false;
          overlay.value?.activatorEl?.focus();
        }
      } else if (props.submenu && e.key === (isRtl.value ? 'ArrowRight' : 'ArrowLeft')) {
        isActive.value = false;
        overlay.value?.activatorEl?.focus();
      }
    }
    function onActivatorKeydown(e) {
      if (props.disabled) return;
      const el = overlay.value?.contentEl;
      if (el && isActive.value) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          e.stopImmediatePropagation();
          (0,helpers/* focusChild */.bq)(el, 'next');
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          e.stopImmediatePropagation();
          (0,helpers/* focusChild */.bq)(el, 'prev');
        } else if (props.submenu) {
          if (e.key === (isRtl.value ? 'ArrowRight' : 'ArrowLeft')) {
            isActive.value = false;
          } else if (e.key === (isRtl.value ? 'ArrowLeft' : 'ArrowRight')) {
            e.preventDefault();
            (0,helpers/* focusChild */.bq)(el, 'first');
          }
        }
      } else if (props.submenu ? e.key === (isRtl.value ? 'ArrowLeft' : 'ArrowRight') : ['ArrowDown', 'ArrowUp'].includes(e.key)) {
        isActive.value = true;
        e.preventDefault();
        setTimeout(() => setTimeout(() => onActivatorKeydown(e)));
      }
    }
    const activatorProps = (0,runtime_core_esm_bundler/* computed */.EW)(() => (0,runtime_core_esm_bundler/* mergeProps */.v6)({
      'aria-haspopup': 'menu',
      'aria-expanded': String(isActive.value),
      'aria-owns': id.value,
      onKeydown: onActivatorKeydown
    }, props.activatorProps));
    (0,useRender/* useRender */.C)(() => {
      const overlayProps = VOverlay/* VOverlay */.L.filterProps(props);
      return (0,runtime_core_esm_bundler/* createVNode */.bF)(VOverlay/* VOverlay */.L, (0,runtime_core_esm_bundler/* mergeProps */.v6)({
        "ref": overlay,
        "id": id.value,
        "class": ['v-menu', props.class],
        "style": props.style
      }, overlayProps, {
        "modelValue": isActive.value,
        "onUpdate:modelValue": $event => isActive.value = $event,
        "absolute": true,
        "activatorProps": activatorProps.value,
        "location": props.location ?? (props.submenu ? 'end' : 'bottom'),
        "onClick:outside": onClickOutside,
        "onKeydown": onKeydown
      }, scopeId), {
        activator: slots.activator,
        default: function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return (0,runtime_core_esm_bundler/* createVNode */.bF)(VDefaultsProvider/* VDefaultsProvider */.K, {
            "root": "VMenu"
          }, {
            default: () => [slots.default?.(...args)]
          });
        }
      });
    });
    return (0,forwardRefs/* forwardRefs */.O)({
      id,
      ΨopenChildren: openChildren
    }, overlay);
  }
});

/***/ }),

/***/ 96715:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: function() { return /* reexport safe */ _VMenu_mjs__WEBPACK_IMPORTED_MODULE_0__.q; }
/* harmony export */ });
/* harmony import */ var _VMenu_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88249);


/***/ }),

/***/ 76118:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: function() { return /* binding */ VMenuSymbol; }
/* harmony export */ });
// Types

const VMenuSymbol = Symbol.for('vuetify:v-menu');

/***/ }),

/***/ 58226:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  d: function() { return /* binding */ VMessages; }
});

// UNUSED EXPORTS: makeVMessagesProps

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(56768);
;// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VMessages/VMessages.css
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/transitions/index.mjs + 2 modules
var transitions = __webpack_require__(59562);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/color.mjs
var color = __webpack_require__(32886);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/component.mjs
var component = __webpack_require__(19262);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/transition.mjs
var transition = __webpack_require__(34464);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/propsFactory.mjs
var propsFactory = __webpack_require__(14587);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/defineComponent.mjs
var defineComponent = __webpack_require__(51247);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.mjs
var helpers = __webpack_require__(29094);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/useRender.mjs
var useRender = __webpack_require__(74600);
;// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VMessages/VMessages.mjs

// Styles


// Components
 // Composables


 // Utilities

 // Types
const makeVMessagesProps = (0,propsFactory/* propsFactory */.j)({
  active: Boolean,
  color: String,
  messages: {
    type: [Array, String],
    default: () => []
  },
  ...(0,component/* makeComponentProps */.u)(),
  ...(0,transition/* makeTransitionProps */.m)({
    transition: {
      component: transitions/* VSlideYTransition */.QG,
      leaveAbsolute: true,
      group: true
    }
  })
}, 'VMessages');
const VMessages = (0,defineComponent/* genericComponent */.RW)()({
  name: 'VMessages',
  props: makeVMessagesProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const messages = (0,runtime_core_esm_bundler/* computed */.EW)(() => (0,helpers/* wrapInArray */.BN)(props.messages));
    const {
      textColorClasses,
      textColorStyles
    } = (0,color/* useTextColor */.aH)((0,runtime_core_esm_bundler/* computed */.EW)(() => props.color));
    (0,useRender/* useRender */.C)(() => (0,runtime_core_esm_bundler/* createVNode */.bF)(transition/* MaybeTransition */.M, {
      "transition": props.transition,
      "tag": "div",
      "class": ['v-messages', textColorClasses.value, props.class],
      "style": [textColorStyles.value, props.style],
      "role": "alert",
      "aria-live": "polite"
    }, {
      default: () => [props.active && messages.value.map((message, i) => (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "v-messages__message",
        "key": `${i}-${messages.value}`
      }, [slots.message ? slots.message({
        message
      }) : message]))]
    }));
    return {};
  }
});

/***/ }),

/***/ 78542:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: function() { return /* reexport safe */ _VMessages_mjs__WEBPACK_IMPORTED_MODULE_0__.d; }
/* harmony export */ });
/* harmony import */ var _VMessages_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58226);


/***/ }),

/***/ 96445:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  e: function() { return /* reexport */ VNavigationDrawer; }
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(56768);
;// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VNavigationDrawer/VNavigationDrawer.css
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDefaultsProvider/VDefaultsProvider.mjs
var VDefaultsProvider = __webpack_require__(37852);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.mjs + 1 modules
var VImg = __webpack_require__(67020);
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(90144);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.mjs
var helpers = __webpack_require__(29094);
;// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VNavigationDrawer/sticky.mjs
// Utilities

 // Types
function useSticky(_ref) {
  let {
    rootEl,
    isSticky,
    layoutItemStyles
  } = _ref;
  const isStuck = (0,reactivity_esm_bundler/* shallowRef */.IJ)(false);
  const stuckPosition = (0,reactivity_esm_bundler/* shallowRef */.IJ)(0);
  const stickyStyles = (0,runtime_core_esm_bundler/* computed */.EW)(() => {
    const side = typeof isStuck.value === 'boolean' ? 'top' : isStuck.value;
    return [isSticky.value ? {
      top: 'auto',
      bottom: 'auto',
      height: undefined
    } : undefined, isStuck.value ? {
      [side]: (0,helpers/* convertToUnit */.Dg)(stuckPosition.value)
    } : {
      top: layoutItemStyles.value.top
    }];
  });
  (0,runtime_core_esm_bundler/* onMounted */.sV)(() => {
    (0,runtime_core_esm_bundler/* watch */.wB)(isSticky, val => {
      if (val) {
        window.addEventListener('scroll', onScroll, {
          passive: true
        });
      } else {
        window.removeEventListener('scroll', onScroll);
      }
    }, {
      immediate: true
    });
  });
  (0,runtime_core_esm_bundler/* onBeforeUnmount */.xo)(() => {
    window.removeEventListener('scroll', onScroll);
  });
  let lastScrollTop = 0;
  function onScroll() {
    const direction = lastScrollTop > window.scrollY ? 'up' : 'down';
    const rect = rootEl.value.getBoundingClientRect();
    const layoutTop = parseFloat(layoutItemStyles.value.top ?? 0);
    const top = window.scrollY - Math.max(0, stuckPosition.value - layoutTop);
    const bottom = rect.height + Math.max(stuckPosition.value, layoutTop) - window.scrollY - window.innerHeight;
    const bodyScroll = parseFloat(getComputedStyle(rootEl.value).getPropertyValue('--v-body-scroll-y')) || 0;
    if (rect.height < window.innerHeight - layoutTop) {
      isStuck.value = 'top';
      stuckPosition.value = layoutTop;
    } else if (direction === 'up' && isStuck.value === 'bottom' || direction === 'down' && isStuck.value === 'top') {
      stuckPosition.value = window.scrollY + rect.top - bodyScroll;
      isStuck.value = true;
    } else if (direction === 'down' && bottom <= 0) {
      stuckPosition.value = 0;
      isStuck.value = 'bottom';
    } else if (direction === 'up' && top <= 0) {
      if (!bodyScroll) {
        stuckPosition.value = rect.top + top;
        isStuck.value = 'top';
      } else if (isStuck.value !== 'top') {
        stuckPosition.value = -top + bodyScroll + layoutTop;
        isStuck.value = 'top';
      }
    }
    lastScrollTop = window.scrollY;
  }
  return {
    isStuck,
    stickyStyles
  };
}
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/toggleScope.mjs
var toggleScope = __webpack_require__(91743);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/touch.mjs
var touch = __webpack_require__(26902);
;// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VNavigationDrawer/touch.mjs
// Composables

 // Utilities


// Types

function useTouch(_ref) {
  let {
    el,
    isActive,
    isTemporary,
    width,
    touchless,
    position
  } = _ref;
  (0,runtime_core_esm_bundler/* onMounted */.sV)(() => {
    window.addEventListener('touchstart', onTouchstart, {
      passive: true
    });
    window.addEventListener('touchmove', onTouchmove, {
      passive: false
    });
    window.addEventListener('touchend', onTouchend, {
      passive: true
    });
  });
  (0,runtime_core_esm_bundler/* onBeforeUnmount */.xo)(() => {
    window.removeEventListener('touchstart', onTouchstart);
    window.removeEventListener('touchmove', onTouchmove);
    window.removeEventListener('touchend', onTouchend);
  });
  const isHorizontal = (0,runtime_core_esm_bundler/* computed */.EW)(() => ['left', 'right'].includes(position.value));
  const {
    addMovement,
    endTouch,
    getVelocity
  } = (0,touch/* useVelocity */.V)();
  let maybeDragging = false;
  const isDragging = (0,reactivity_esm_bundler/* shallowRef */.IJ)(false);
  const dragProgress = (0,reactivity_esm_bundler/* shallowRef */.IJ)(0);
  const offset = (0,reactivity_esm_bundler/* shallowRef */.IJ)(0);
  let start;
  function getOffset(pos, active) {
    return (position.value === 'left' ? pos : position.value === 'right' ? document.documentElement.clientWidth - pos : position.value === 'top' ? pos : position.value === 'bottom' ? document.documentElement.clientHeight - pos : oops()) - (active ? width.value : 0);
  }
  function getProgress(pos) {
    let limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    const progress = position.value === 'left' ? (pos - offset.value) / width.value : position.value === 'right' ? (document.documentElement.clientWidth - pos - offset.value) / width.value : position.value === 'top' ? (pos - offset.value) / width.value : position.value === 'bottom' ? (document.documentElement.clientHeight - pos - offset.value) / width.value : oops();
    return limit ? Math.max(0, Math.min(1, progress)) : progress;
  }
  function onTouchstart(e) {
    if (touchless.value) return;
    const touchX = e.changedTouches[0].clientX;
    const touchY = e.changedTouches[0].clientY;
    const touchZone = 25;
    const inTouchZone = position.value === 'left' ? touchX < touchZone : position.value === 'right' ? touchX > document.documentElement.clientWidth - touchZone : position.value === 'top' ? touchY < touchZone : position.value === 'bottom' ? touchY > document.documentElement.clientHeight - touchZone : oops();
    const inElement = isActive.value && (position.value === 'left' ? touchX < width.value : position.value === 'right' ? touchX > document.documentElement.clientWidth - width.value : position.value === 'top' ? touchY < width.value : position.value === 'bottom' ? touchY > document.documentElement.clientHeight - width.value : oops());
    if (inTouchZone || inElement || isActive.value && isTemporary.value) {
      start = [touchX, touchY];
      offset.value = getOffset(isHorizontal.value ? touchX : touchY, isActive.value);
      dragProgress.value = getProgress(isHorizontal.value ? touchX : touchY);
      maybeDragging = offset.value > -20 && offset.value < 80;
      endTouch(e);
      addMovement(e);
    }
  }
  function onTouchmove(e) {
    const touchX = e.changedTouches[0].clientX;
    const touchY = e.changedTouches[0].clientY;
    if (maybeDragging) {
      if (!e.cancelable) {
        maybeDragging = false;
        return;
      }
      const dx = Math.abs(touchX - start[0]);
      const dy = Math.abs(touchY - start[1]);
      const thresholdMet = isHorizontal.value ? dx > dy && dx > 3 : dy > dx && dy > 3;
      if (thresholdMet) {
        isDragging.value = true;
        maybeDragging = false;
      } else if ((isHorizontal.value ? dy : dx) > 3) {
        maybeDragging = false;
      }
    }
    if (!isDragging.value) return;
    e.preventDefault();
    addMovement(e);
    const progress = getProgress(isHorizontal.value ? touchX : touchY, false);
    dragProgress.value = Math.max(0, Math.min(1, progress));
    if (progress > 1) {
      offset.value = getOffset(isHorizontal.value ? touchX : touchY, true);
    } else if (progress < 0) {
      offset.value = getOffset(isHorizontal.value ? touchX : touchY, false);
    }
  }
  function onTouchend(e) {
    maybeDragging = false;
    if (!isDragging.value) return;
    addMovement(e);
    isDragging.value = false;
    const velocity = getVelocity(e.changedTouches[0].identifier);
    const vx = Math.abs(velocity.x);
    const vy = Math.abs(velocity.y);
    const thresholdMet = isHorizontal.value ? vx > vy && vx > 400 : vy > vx && vy > 3;
    if (thresholdMet) {
      isActive.value = velocity.direction === ({
        left: 'right',
        right: 'left',
        top: 'down',
        bottom: 'up'
      }[position.value] || oops());
    } else {
      isActive.value = dragProgress.value > 0.5;
    }
  }
  const dragStyles = (0,runtime_core_esm_bundler/* computed */.EW)(() => {
    return isDragging.value ? {
      transform: position.value === 'left' ? `translateX(calc(-100% + ${dragProgress.value * width.value}px))` : position.value === 'right' ? `translateX(calc(100% - ${dragProgress.value * width.value}px))` : position.value === 'top' ? `translateY(calc(-100% + ${dragProgress.value * width.value}px))` : position.value === 'bottom' ? `translateY(calc(100% - ${dragProgress.value * width.value}px))` : oops(),
      transition: 'none'
    } : undefined;
  });
  (0,toggleScope/* useToggleScope */.Y)(isDragging, () => {
    const transform = el.value?.style.transform ?? null;
    const transition = el.value?.style.transition ?? null;
    (0,runtime_core_esm_bundler/* watchEffect */.nT)(() => {
      el.value?.style.setProperty('transform', dragStyles.value?.transform || 'none');
      el.value?.style.setProperty('transition', dragStyles.value?.transition || null);
    });
    (0,reactivity_esm_bundler/* onScopeDispose */.jr)(() => {
      el.value?.style.setProperty('transform', transform);
      el.value?.style.setProperty('transition', transition);
    });
  });
  return {
    isDragging,
    dragProgress,
    dragStyles
  };
}
function oops() {
  throw new Error();
}
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/locale.mjs + 2 modules
var locale = __webpack_require__(95296);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/border.mjs
var border = __webpack_require__(89923);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/color.mjs
var color = __webpack_require__(32886);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/component.mjs
var component = __webpack_require__(19262);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/defaults.mjs
var defaults = __webpack_require__(74979);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/delay.mjs
var delay = __webpack_require__(86);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/display.mjs
var display = __webpack_require__(68353);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/elevation.mjs
var elevation = __webpack_require__(17018);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/layout.mjs
var layout = __webpack_require__(34603);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/proxiedModel.mjs
var proxiedModel = __webpack_require__(82067);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/rounded.mjs
var rounded = __webpack_require__(73240);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/router.mjs
var composables_router = __webpack_require__(16314);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/scopeId.mjs
var composables_scopeId = __webpack_require__(32876);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/ssrBoot.mjs
var ssrBoot = __webpack_require__(86747);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/tag.mjs
var tag = __webpack_require__(54663);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/theme.mjs
var theme = __webpack_require__(47664);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var runtime_dom_esm_bundler = __webpack_require__(45130);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/propsFactory.mjs
var propsFactory = __webpack_require__(14587);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/defineComponent.mjs
var defineComponent = __webpack_require__(51247);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/anchor.mjs
var util_anchor = __webpack_require__(96892);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/useRender.mjs
var useRender = __webpack_require__(74600);
;// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VNavigationDrawer/VNavigationDrawer.mjs

// Styles


// Components

 // Composables


















 // Utilities

 // Types
const locations = ['start', 'end', 'left', 'right', 'top', 'bottom'];
const makeVNavigationDrawerProps = (0,propsFactory/* propsFactory */.j)({
  color: String,
  disableResizeWatcher: Boolean,
  disableRouteWatcher: Boolean,
  expandOnHover: Boolean,
  floating: Boolean,
  modelValue: {
    type: Boolean,
    default: null
  },
  permanent: Boolean,
  rail: {
    type: Boolean,
    default: null
  },
  railWidth: {
    type: [Number, String],
    default: 56
  },
  scrim: {
    type: [Boolean, String],
    default: true
  },
  image: String,
  temporary: Boolean,
  persistent: Boolean,
  touchless: Boolean,
  width: {
    type: [Number, String],
    default: 256
  },
  location: {
    type: String,
    default: 'start',
    validator: value => locations.includes(value)
  },
  sticky: Boolean,
  ...(0,border/* makeBorderProps */.r)(),
  ...(0,component/* makeComponentProps */.u)(),
  ...(0,delay/* makeDelayProps */.e)(),
  ...(0,display/* makeDisplayProps */.hx)({
    mobile: null
  }),
  ...(0,elevation/* makeElevationProps */.s)(),
  ...(0,layout/* makeLayoutItemProps */.CK)(),
  ...(0,rounded/* makeRoundedProps */.S)(),
  ...(0,tag/* makeTagProps */.X)({
    tag: 'nav'
  }),
  ...(0,theme/* makeThemeProps */.yx)()
}, 'VNavigationDrawer');
const VNavigationDrawer = (0,defineComponent/* genericComponent */.RW)()({
  name: 'VNavigationDrawer',
  props: makeVNavigationDrawerProps(),
  emits: {
    'update:modelValue': val => true,
    'update:rail': val => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const {
      isRtl
    } = (0,locale/* useRtl */.IA)();
    const {
      themeClasses
    } = (0,theme/* provideTheme */.NX)(props);
    const {
      borderClasses
    } = (0,border/* useBorder */.M)(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = (0,color/* useBackgroundColor */.z6)((0,reactivity_esm_bundler/* toRef */.lW)(props, 'color'));
    const {
      elevationClasses
    } = (0,elevation/* useElevation */.j)(props);
    const {
      displayClasses,
      mobile
    } = (0,display/* useDisplay */._F)(props);
    const {
      roundedClasses
    } = (0,rounded/* useRounded */.v)(props);
    const router = (0,composables_router/* useRouter */.rd)();
    const isActive = (0,proxiedModel/* useProxiedModel */.q)(props, 'modelValue', null, v => !!v);
    const {
      ssrBootStyles
    } = (0,ssrBoot/* useSsrBoot */.K)();
    const {
      scopeId
    } = (0,composables_scopeId/* useScopeId */.b)();
    const rootEl = (0,reactivity_esm_bundler/* ref */.KR)();
    const isHovering = (0,reactivity_esm_bundler/* shallowRef */.IJ)(false);
    const {
      runOpenDelay,
      runCloseDelay
    } = (0,delay/* useDelay */.Z)(props, value => {
      isHovering.value = value;
    });
    const width = (0,runtime_core_esm_bundler/* computed */.EW)(() => {
      return props.rail && props.expandOnHover && isHovering.value ? Number(props.width) : Number(props.rail ? props.railWidth : props.width);
    });
    const location = (0,runtime_core_esm_bundler/* computed */.EW)(() => {
      return (0,util_anchor/* toPhysical */.dO)(props.location, isRtl.value);
    });
    const isPersistent = (0,runtime_core_esm_bundler/* computed */.EW)(() => props.persistent);
    const isTemporary = (0,runtime_core_esm_bundler/* computed */.EW)(() => !props.permanent && (mobile.value || props.temporary));
    const isSticky = (0,runtime_core_esm_bundler/* computed */.EW)(() => props.sticky && !isTemporary.value && location.value !== 'bottom');
    (0,toggleScope/* useToggleScope */.Y)(() => props.expandOnHover && props.rail != null, () => {
      (0,runtime_core_esm_bundler/* watch */.wB)(isHovering, val => emit('update:rail', !val));
    });
    (0,toggleScope/* useToggleScope */.Y)(() => !props.disableResizeWatcher, () => {
      (0,runtime_core_esm_bundler/* watch */.wB)(isTemporary, val => !props.permanent && (0,runtime_core_esm_bundler/* nextTick */.dY)(() => isActive.value = !val));
    });
    (0,toggleScope/* useToggleScope */.Y)(() => !props.disableRouteWatcher && !!router, () => {
      (0,runtime_core_esm_bundler/* watch */.wB)(router.currentRoute, () => isTemporary.value && (isActive.value = false));
    });
    (0,runtime_core_esm_bundler/* watch */.wB)(() => props.permanent, val => {
      if (val) isActive.value = true;
    });
    if (props.modelValue == null && !isTemporary.value) {
      isActive.value = props.permanent || !mobile.value;
    }
    const {
      isDragging,
      dragProgress
    } = useTouch({
      el: rootEl,
      isActive,
      isTemporary,
      width,
      touchless: (0,reactivity_esm_bundler/* toRef */.lW)(props, 'touchless'),
      position: location
    });
    const layoutSize = (0,runtime_core_esm_bundler/* computed */.EW)(() => {
      const size = isTemporary.value ? 0 : props.rail && props.expandOnHover ? Number(props.railWidth) : width.value;
      return isDragging.value ? size * dragProgress.value : size;
    });
    const elementSize = (0,runtime_core_esm_bundler/* computed */.EW)(() => ['top', 'bottom'].includes(props.location) ? 0 : width.value);
    const {
      layoutItemStyles,
      layoutItemScrimStyles
    } = (0,layout/* useLayoutItem */.hc)({
      id: props.name,
      order: (0,runtime_core_esm_bundler/* computed */.EW)(() => parseInt(props.order, 10)),
      position: location,
      layoutSize,
      elementSize,
      active: (0,runtime_core_esm_bundler/* computed */.EW)(() => isActive.value || isDragging.value),
      disableTransitions: (0,runtime_core_esm_bundler/* computed */.EW)(() => isDragging.value),
      absolute: (0,runtime_core_esm_bundler/* computed */.EW)(() =>
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      props.absolute || isSticky.value && typeof isStuck.value !== 'string')
    });
    const {
      isStuck,
      stickyStyles
    } = useSticky({
      rootEl,
      isSticky,
      layoutItemStyles
    });
    const scrimColor = (0,color/* useBackgroundColor */.z6)((0,runtime_core_esm_bundler/* computed */.EW)(() => {
      return typeof props.scrim === 'string' ? props.scrim : null;
    }));
    const scrimStyles = (0,runtime_core_esm_bundler/* computed */.EW)(() => ({
      ...(isDragging.value ? {
        opacity: dragProgress.value * 0.2,
        transition: 'none'
      } : undefined),
      ...layoutItemScrimStyles.value
    }));
    (0,defaults/* provideDefaults */.Uh)({
      VList: {
        bgColor: 'transparent'
      }
    });
    (0,useRender/* useRender */.C)(() => {
      const hasImage = slots.image || props.image;
      return (0,runtime_core_esm_bundler/* createVNode */.bF)(runtime_core_esm_bundler/* Fragment */.FK, null, [(0,runtime_core_esm_bundler/* createVNode */.bF)(props.tag, (0,runtime_core_esm_bundler/* mergeProps */.v6)({
        "ref": rootEl,
        "onMouseenter": runOpenDelay,
        "onMouseleave": runCloseDelay,
        "class": ['v-navigation-drawer', `v-navigation-drawer--${location.value}`, {
          'v-navigation-drawer--expand-on-hover': props.expandOnHover,
          'v-navigation-drawer--floating': props.floating,
          'v-navigation-drawer--is-hovering': isHovering.value,
          'v-navigation-drawer--rail': props.rail,
          'v-navigation-drawer--temporary': isTemporary.value,
          'v-navigation-drawer--persistent': isPersistent.value,
          'v-navigation-drawer--active': isActive.value,
          'v-navigation-drawer--sticky': isSticky.value
        }, themeClasses.value, backgroundColorClasses.value, borderClasses.value, displayClasses.value, elevationClasses.value, roundedClasses.value, props.class],
        "style": [backgroundColorStyles.value, layoutItemStyles.value, ssrBootStyles.value, stickyStyles.value, props.style, ['top', 'bottom'].includes(location.value) ? {
          height: 'auto'
        } : {}]
      }, scopeId, attrs), {
        default: () => [hasImage && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "key": "image",
          "class": "v-navigation-drawer__img"
        }, [!slots.image ? (0,runtime_core_esm_bundler/* createVNode */.bF)(VImg/* VImg */.y, {
          "key": "image-img",
          "alt": "",
          "cover": true,
          "height": "inherit",
          "src": props.image
        }, null) : (0,runtime_core_esm_bundler/* createVNode */.bF)(VDefaultsProvider/* VDefaultsProvider */.K, {
          "key": "image-defaults",
          "disabled": !props.image,
          "defaults": {
            VImg: {
              alt: '',
              cover: true,
              height: 'inherit',
              src: props.image
            }
          }
        }, slots.image)]), slots.prepend && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "v-navigation-drawer__prepend"
        }, [slots.prepend?.()]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "v-navigation-drawer__content"
        }, [slots.default?.()]), slots.append && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "v-navigation-drawer__append"
        }, [slots.append?.()])]
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(runtime_dom_esm_bundler/* Transition */.eB, {
        "name": "fade-transition"
      }, {
        default: () => [isTemporary.value && (isDragging.value || isActive.value) && !!props.scrim && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", (0,runtime_core_esm_bundler/* mergeProps */.v6)({
          "class": ['v-navigation-drawer__scrim', scrimColor.backgroundColorClasses.value],
          "style": [scrimStyles.value, scrimColor.backgroundColorStyles.value],
          "onClick": () => {
            if (isPersistent.value) return;
            isActive.value = false;
          }
        }, scopeId), null)]
      })]);
    });
    return {
      isStuck
    };
  }
});
;// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VNavigationDrawer/index.mjs


/***/ }),

/***/ 23073:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  G: function() { return /* reexport */ VNoSsr; }
});

// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/hydration.mjs
var hydration = __webpack_require__(69601);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/defineComponent.mjs
var defineComponent = __webpack_require__(51247);
;// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VNoSsr/VNoSsr.mjs
// Composables
 // Utilities

const VNoSsr = (0,defineComponent/* defineComponent */.pM)({
  name: 'VNoSsr',
  setup(_, _ref) {
    let {
      slots
    } = _ref;
    const show = (0,hydration/* useHydration */.S)();
    return () => show.value && slots.default?.();
  }
});
;// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VNoSsr/index.mjs


/***/ })

}]);