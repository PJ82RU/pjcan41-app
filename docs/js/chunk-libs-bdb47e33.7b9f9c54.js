"use strict";
(self["webpackChunkpjcan"] = self["webpackChunkpjcan"] || []).push([[210],{

/***/ 32759:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C8: function() { return /* binding */ isMessageFunction; },
/* harmony export */   E6: function() { return /* binding */ MISSING_RESOLVE_VALUE; },
/* harmony export */   FA: function() { return /* binding */ registerMessageResolver; },
/* harmony export */   Lf: function() { return /* binding */ createCoreContext; },
/* harmony export */   Tl: function() { return /* binding */ translate; },
/* harmony export */   UW: function() { return /* binding */ CORE_WARN_CODES_EXTEND_POINT; },
/* harmony export */   Up: function() { return /* binding */ NUMBER_FORMAT_OPTIONS_KEYS; },
/* harmony export */   XI: function() { return /* binding */ registerLocaleFallbacker; },
/* harmony export */   XS: function() { return /* binding */ parseTranslateArgs; },
/* harmony export */   Xn: function() { return /* binding */ DEFAULT_LOCALE; },
/* harmony export */   YL: function() { return /* binding */ parseDateTimeArgs; },
/* harmony export */   ai: function() { return /* binding */ number; },
/* harmony export */   cX: function() { return /* binding */ clearNumberFormat; },
/* harmony export */   cz: function() { return /* binding */ clearDateTimeFormat; },
/* harmony export */   fS: function() { return /* binding */ NOT_REOSLVED; },
/* harmony export */   g$: function() { return /* binding */ resolveValue; },
/* harmony export */   gS: function() { return /* binding */ registerMessageCompiler; },
/* harmony export */   i8: function() { return /* binding */ isMessageAST; },
/* harmony export */   k3: function() { return /* binding */ getFallbackContext; },
/* harmony export */   kK: function() { return /* binding */ fallbackWithLocaleChain; },
/* harmony export */   o8: function() { return /* binding */ CORE_ERROR_CODES_EXTEND_POINT; },
/* harmony export */   q: function() { return /* binding */ setFallbackContext; },
/* harmony export */   qY: function() { return /* binding */ updateFallbackLocale; },
/* harmony export */   sx: function() { return /* binding */ parseNumberArgs; },
/* harmony export */   w$: function() { return /* binding */ datetime; },
/* harmony export */   w7: function() { return /* binding */ DATETIME_FORMAT_OPTIONS_KEYS; },
/* harmony export */   wE: function() { return /* binding */ compile; }
/* harmony export */ });
/* unused harmony exports CoreErrorCodes, CoreWarnCodes, DEFAULT_MESSAGE_DATA_TYPE, VERSION, clearCompileCache, createCoreError, createMessageContext, fallbackWithSimple, getAdditionalMeta, getDevToolsHook, getLocale, getWarnMessage, handleMissing, initI18nDevTools, isAlmostSameLocale, isImplicitFallback, isTranslateFallbackWarn, isTranslateMissingWarn, parse, resolveLocale, resolveWithKeyValue, setAdditionalMeta, setDevToolsHook, translateDevTools */
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44114);
/* harmony import */ var core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17642);
/* harmony import */ var core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58004);
/* harmony import */ var core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33853);
/* harmony import */ var core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45876);
/* harmony import */ var core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32475);
/* harmony import */ var core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15024);
/* harmony import */ var core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31698);
/* harmony import */ var _intlify_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(27641);
/* harmony import */ var _intlify_message_compiler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(25825);








/*!
  * core-base v10.0.5
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */




/**
 * This is only called in esm-bundler builds.
 * istanbul-ignore-next
 */
function initFeatureFlags() {
  if (false) {}
  if (typeof __INTLIFY_DROP_MESSAGE_COMPILER__ !== 'boolean') {
    (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .getGlobalThis */ .We)().__INTLIFY_DROP_MESSAGE_COMPILER__ = false;
  }
}
function format(ast) {
  const msg = ctx => formatParts(ctx, ast);
  return msg;
}
function formatParts(ctx, ast) {
  const body = resolveBody(ast);
  if (body == null) {
    throw createUnhandleNodeError(0 /* NodeTypes.Resource */);
  }
  const type = resolveType(body);
  if (type === 1 /* NodeTypes.Plural */) {
    const plural = body;
    const cases = resolveCases(plural);
    return ctx.plural(cases.reduce((messages, c) => [...messages, formatMessageParts(ctx, c)], []));
  } else {
    return formatMessageParts(ctx, body);
  }
}
const PROPS_BODY = ['b', 'body'];
function resolveBody(node) {
  return resolveProps(node, PROPS_BODY);
}
const PROPS_CASES = ['c', 'cases'];
function resolveCases(node) {
  return resolveProps(node, PROPS_CASES, []);
}
function formatMessageParts(ctx, node) {
  const static_ = resolveStatic(node);
  if (static_ != null) {
    return ctx.type === 'text' ? static_ : ctx.normalize([static_]);
  } else {
    const messages = resolveItems(node).reduce((acm, c) => [...acm, formatMessagePart(ctx, c)], []);
    return ctx.normalize(messages);
  }
}
const PROPS_STATIC = ['s', 'static'];
function resolveStatic(node) {
  return resolveProps(node, PROPS_STATIC);
}
const PROPS_ITEMS = ['i', 'items'];
function resolveItems(node) {
  return resolveProps(node, PROPS_ITEMS, []);
}
function formatMessagePart(ctx, node) {
  const type = resolveType(node);
  switch (type) {
    case 3 /* NodeTypes.Text */:
      {
        return resolveValue$1(node, type);
      }
    case 9 /* NodeTypes.Literal */:
      {
        return resolveValue$1(node, type);
      }
    case 4 /* NodeTypes.Named */:
      {
        const named = node;
        if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .hasOwn */ .$3)(named, 'k') && named.k) {
          return ctx.interpolate(ctx.named(named.k));
        }
        if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .hasOwn */ .$3)(named, 'key') && named.key) {
          return ctx.interpolate(ctx.named(named.key));
        }
        throw createUnhandleNodeError(type);
      }
    case 5 /* NodeTypes.List */:
      {
        const list = node;
        if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .hasOwn */ .$3)(list, 'i') && (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isNumber */ .Et)(list.i)) {
          return ctx.interpolate(ctx.list(list.i));
        }
        if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .hasOwn */ .$3)(list, 'index') && (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isNumber */ .Et)(list.index)) {
          return ctx.interpolate(ctx.list(list.index));
        }
        throw createUnhandleNodeError(type);
      }
    case 6 /* NodeTypes.Linked */:
      {
        const linked = node;
        const modifier = resolveLinkedModifier(linked);
        const key = resolveLinkedKey(linked);
        return ctx.linked(formatMessagePart(ctx, key), modifier ? formatMessagePart(ctx, modifier) : undefined, ctx.type);
      }
    case 7 /* NodeTypes.LinkedKey */:
      {
        return resolveValue$1(node, type);
      }
    case 8 /* NodeTypes.LinkedModifier */:
      {
        return resolveValue$1(node, type);
      }
    default:
      throw new Error(`unhandled node on format message part: ${type}`);
  }
}
const PROPS_TYPE = ['t', 'type'];
function resolveType(node) {
  return resolveProps(node, PROPS_TYPE);
}
const PROPS_VALUE = ['v', 'value'];
function resolveValue$1(node, type) {
  const resolved = resolveProps(node, PROPS_VALUE);
  if (resolved) {
    return resolved;
  } else {
    throw createUnhandleNodeError(type);
  }
}
const PROPS_MODIFIER = ['m', 'modifier'];
function resolveLinkedModifier(node) {
  return resolveProps(node, PROPS_MODIFIER);
}
const PROPS_KEY = ['k', 'key'];
function resolveLinkedKey(node) {
  const resolved = resolveProps(node, PROPS_KEY);
  if (resolved) {
    return resolved;
  } else {
    throw createUnhandleNodeError(6 /* NodeTypes.Linked */);
  }
}
function resolveProps(node, props, defaultValue) {
  for (let i = 0; i < props.length; i++) {
    const prop = props[i];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .hasOwn */ .$3)(node, prop) && node[prop] != null) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return node[prop];
    }
  }
  return defaultValue;
}
function createUnhandleNodeError(type) {
  return new Error(`unhandled node type: ${type}`);
}
const WARN_MESSAGE = (/* unused pure expression or super */ null && (`Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.`));
function checkHtmlMessage(source, warnHtmlMessage) {
  if (warnHtmlMessage && detectHtmlTag(source)) {
    warn(format$1(WARN_MESSAGE, {
      source
    }));
  }
}
const defaultOnCacheKey = message => message;
let compileCache = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .create */ .vt)();
function clearCompileCache() {
  compileCache = create();
}
function isMessageAST(val) {
  return (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isObject */ .Gv)(val) && resolveType(val) === 0 && ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .hasOwn */ .$3)(val, 'b') || (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .hasOwn */ .$3)(val, 'body'));
}
function baseCompile(message, options = {}) {
  // error detecting on compile
  let detectError = false;
  const onError = options.onError || _intlify_message_compiler__WEBPACK_IMPORTED_MODULE_9__/* .defaultOnError */ .f4;
  options.onError = err => {
    detectError = true;
    onError(err);
  };
  // compile with mesasge-compiler
  return {
    ...(0,_intlify_message_compiler__WEBPACK_IMPORTED_MODULE_9__/* .baseCompile */ .h)(message, options),
    detectError
  };
}
/* #__NO_SIDE_EFFECTS__ */
function compile(message, context) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isString */ .Kg)(message)) {
    // check HTML message
    const warnHtmlMessage = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isBoolean */ .Lm)(context.warnHtmlMessage) ? context.warnHtmlMessage : true;
     false && 0;
    // check caches
    const onCacheKey = context.onCacheKey || defaultOnCacheKey;
    const cacheKey = onCacheKey(message);
    const cached = compileCache[cacheKey];
    if (cached) {
      return cached;
    }
    // compile with JIT mode
    const {
      ast,
      detectError
    } = baseCompile(message, {
      ...context,
      location: "production" !== 'production',
      jit: true
    });
    // compose message function from AST
    const msg = format(ast);
    // if occurred compile error, don't cache
    return !detectError ? compileCache[cacheKey] = msg : msg;
  } else {
    if (false) {}
    // AST case (passed from bundler)
    const cacheKey = message.cacheKey;
    if (cacheKey) {
      const cached = compileCache[cacheKey];
      if (cached) {
        return cached;
      }
      // compose message function from message (AST)
      return compileCache[cacheKey] = format(message);
    } else {
      return format(message);
    }
  }
}
let devtools = null;
function setDevToolsHook(hook) {
  devtools = hook;
}
function getDevToolsHook() {
  return devtools;
}
function initI18nDevTools(i18n, version, meta) {
  // TODO: queue if devtools is undefined
  devtools && devtools.emit('i18n:init', {
    timestamp: Date.now(),
    i18n,
    version,
    meta
  });
}
const translateDevTools = /* #__PURE__*/(/* unused pure expression or super */ null && (createDevToolsHook('function:translate')));
function createDevToolsHook(hook) {
  return payloads => devtools && devtools.emit(hook, payloads);
}
const CoreErrorCodes = {
  INVALID_ARGUMENT: _intlify_message_compiler__WEBPACK_IMPORTED_MODULE_9__/* .COMPILE_ERROR_CODES_EXTEND_POINT */ .ab,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_NON_STRING_MESSAGE: 20,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
};
const CORE_ERROR_CODES_EXTEND_POINT = 24;
function createCoreError(code) {
  return (0,_intlify_message_compiler__WEBPACK_IMPORTED_MODULE_9__/* .createCompileError */ .gN)(code, null,  false ? 0 : undefined);
}
/** @internal */
const errorMessages = {
  [CoreErrorCodes.INVALID_ARGUMENT]: 'Invalid arguments',
  [CoreErrorCodes.INVALID_DATE_ARGUMENT]: 'The date provided is an invalid Date object.' + 'Make sure your Date represents a valid date.',
  [CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT]: 'The argument provided is not a valid ISO date string',
  [CoreErrorCodes.NOT_SUPPORT_NON_STRING_MESSAGE]: 'Not support non-string message',
  [CoreErrorCodes.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: 'cannot support promise value',
  [CoreErrorCodes.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: 'cannot support async function',
  [CoreErrorCodes.NOT_SUPPORT_LOCALE_TYPE]: 'cannot support locale type'
};

/** @internal */
function getLocale(context, options) {
  return options.locale != null ? resolveLocale(options.locale) : resolveLocale(context.locale);
}
let _resolveLocale;
/** @internal */
function resolveLocale(locale) {
  if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isString */ .Kg)(locale)) {
    return locale;
  } else {
    if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isFunction */ .Tn)(locale)) {
      if (locale.resolvedOnce && _resolveLocale != null) {
        return _resolveLocale;
      } else if (locale.constructor.name === 'Function') {
        const resolve = locale();
        if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isPromise */ .yL)(resolve)) {
          throw createCoreError(CoreErrorCodes.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
        }
        return _resolveLocale = resolve;
      } else {
        throw createCoreError(CoreErrorCodes.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
      }
    } else {
      throw createCoreError(CoreErrorCodes.NOT_SUPPORT_LOCALE_TYPE);
    }
  }
}
/**
 * Fallback with simple implemenation
 *
 * @remarks
 * A fallback locale function implemented with a simple fallback algorithm.
 *
 * Basically, it returns the value as specified in the `fallbackLocale` props, and is processed with the fallback inside intlify.
 *
 * @param ctx - A {@link CoreContext | context}
 * @param fallback - A {@link FallbackLocale | fallback locale}
 * @param start - A starting {@link Locale | locale}
 *
 * @returns Fallback locales
 *
 * @VueI18nGeneral
 */
function fallbackWithSimple(ctx, fallback, start) {
  // prettier-ignore
  return [...new Set([start, ...((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isArray */ .cy)(fallback) ? fallback : (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isObject */ .Gv)(fallback) ? Object.keys(fallback) : (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isString */ .Kg)(fallback) ? [fallback] : [start])])];
}
/**
 * Fallback with locale chain
 *
 * @remarks
 * A fallback locale function implemented with a fallback chain algorithm. It's used in VueI18n as default.
 *
 * @param ctx - A {@link CoreContext | context}
 * @param fallback - A {@link FallbackLocale | fallback locale}
 * @param start - A starting {@link Locale | locale}
 *
 * @returns Fallback locales
 *
 * @VueI18nSee [Fallbacking](../guide/essentials/fallback)
 *
 * @VueI18nGeneral
 */
function fallbackWithLocaleChain(ctx, fallback, start) {
  const startLocale = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isString */ .Kg)(start) ? start : DEFAULT_LOCALE;
  const context = ctx;
  if (!context.__localeChainCache) {
    context.__localeChainCache = new Map();
  }
  let chain = context.__localeChainCache.get(startLocale);
  if (!chain) {
    chain = [];
    // first block defined by start
    let block = [start];
    // while any intervening block found
    while ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isArray */ .cy)(block)) {
      block = appendBlockToChain(chain, block, fallback);
    }
    // prettier-ignore
    // last block defined by default
    const defaults = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isArray */ .cy)(fallback) || !(0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isPlainObject */ .Qd)(fallback) ? fallback : fallback['default'] ? fallback['default'] : null;
    // convert defaults to array
    block = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isString */ .Kg)(defaults) ? [defaults] : defaults;
    if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isArray */ .cy)(block)) {
      appendBlockToChain(chain, block, false);
    }
    context.__localeChainCache.set(startLocale, chain);
  }
  return chain;
}
function appendBlockToChain(chain, block, blocks) {
  let follow = true;
  for (let i = 0; i < block.length && (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isBoolean */ .Lm)(follow); i++) {
    const locale = block[i];
    if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isString */ .Kg)(locale)) {
      follow = appendLocaleToChain(chain, block[i], blocks);
    }
  }
  return follow;
}
function appendLocaleToChain(chain, locale, blocks) {
  let follow;
  const tokens = locale.split('-');
  do {
    const target = tokens.join('-');
    follow = appendItemToChain(chain, target, blocks);
    tokens.splice(-1, 1);
  } while (tokens.length && follow === true);
  return follow;
}
function appendItemToChain(chain, target, blocks) {
  let follow = false;
  if (!chain.includes(target)) {
    follow = true;
    if (target) {
      follow = target[target.length - 1] !== '!';
      const locale = target.replace(/!/g, '');
      chain.push(locale);
      if (((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isArray */ .cy)(blocks) || (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isPlainObject */ .Qd)(blocks)) && blocks[locale] // eslint-disable-line @typescript-eslint/no-explicit-any
      ) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        follow = blocks[locale];
      }
    }
  }
  return follow;
}
const pathStateMachine = [];
pathStateMachine[0 /* States.BEFORE_PATH */] = {
  ["w" /* PathCharTypes.WORKSPACE */]: [0 /* States.BEFORE_PATH */],
  ["i" /* PathCharTypes.IDENT */]: [3 /* States.IN_IDENT */, 0 /* Actions.APPEND */],
  ["[" /* PathCharTypes.LEFT_BRACKET */]: [4 /* States.IN_SUB_PATH */],
  ["o" /* PathCharTypes.END_OF_FAIL */]: [7 /* States.AFTER_PATH */]
};
pathStateMachine[1 /* States.IN_PATH */] = {
  ["w" /* PathCharTypes.WORKSPACE */]: [1 /* States.IN_PATH */],
  ["." /* PathCharTypes.DOT */]: [2 /* States.BEFORE_IDENT */],
  ["[" /* PathCharTypes.LEFT_BRACKET */]: [4 /* States.IN_SUB_PATH */],
  ["o" /* PathCharTypes.END_OF_FAIL */]: [7 /* States.AFTER_PATH */]
};
pathStateMachine[2 /* States.BEFORE_IDENT */] = {
  ["w" /* PathCharTypes.WORKSPACE */]: [2 /* States.BEFORE_IDENT */],
  ["i" /* PathCharTypes.IDENT */]: [3 /* States.IN_IDENT */, 0 /* Actions.APPEND */],
  ["0" /* PathCharTypes.ZERO */]: [3 /* States.IN_IDENT */, 0 /* Actions.APPEND */]
};
pathStateMachine[3 /* States.IN_IDENT */] = {
  ["i" /* PathCharTypes.IDENT */]: [3 /* States.IN_IDENT */, 0 /* Actions.APPEND */],
  ["0" /* PathCharTypes.ZERO */]: [3 /* States.IN_IDENT */, 0 /* Actions.APPEND */],
  ["w" /* PathCharTypes.WORKSPACE */]: [1 /* States.IN_PATH */, 1 /* Actions.PUSH */],
  ["." /* PathCharTypes.DOT */]: [2 /* States.BEFORE_IDENT */, 1 /* Actions.PUSH */],
  ["[" /* PathCharTypes.LEFT_BRACKET */]: [4 /* States.IN_SUB_PATH */, 1 /* Actions.PUSH */],
  ["o" /* PathCharTypes.END_OF_FAIL */]: [7 /* States.AFTER_PATH */, 1 /* Actions.PUSH */]
};
pathStateMachine[4 /* States.IN_SUB_PATH */] = {
  ["'" /* PathCharTypes.SINGLE_QUOTE */]: [5 /* States.IN_SINGLE_QUOTE */, 0 /* Actions.APPEND */],
  ["\"" /* PathCharTypes.DOUBLE_QUOTE */]: [6 /* States.IN_DOUBLE_QUOTE */, 0 /* Actions.APPEND */],
  ["[" /* PathCharTypes.LEFT_BRACKET */]: [4 /* States.IN_SUB_PATH */, 2 /* Actions.INC_SUB_PATH_DEPTH */],
  ["]" /* PathCharTypes.RIGHT_BRACKET */]: [1 /* States.IN_PATH */, 3 /* Actions.PUSH_SUB_PATH */],
  ["o" /* PathCharTypes.END_OF_FAIL */]: 8 /* States.ERROR */,
  ["l" /* PathCharTypes.ELSE */]: [4 /* States.IN_SUB_PATH */, 0 /* Actions.APPEND */]
};
pathStateMachine[5 /* States.IN_SINGLE_QUOTE */] = {
  ["'" /* PathCharTypes.SINGLE_QUOTE */]: [4 /* States.IN_SUB_PATH */, 0 /* Actions.APPEND */],
  ["o" /* PathCharTypes.END_OF_FAIL */]: 8 /* States.ERROR */,
  ["l" /* PathCharTypes.ELSE */]: [5 /* States.IN_SINGLE_QUOTE */, 0 /* Actions.APPEND */]
};
pathStateMachine[6 /* States.IN_DOUBLE_QUOTE */] = {
  ["\"" /* PathCharTypes.DOUBLE_QUOTE */]: [4 /* States.IN_SUB_PATH */, 0 /* Actions.APPEND */],
  ["o" /* PathCharTypes.END_OF_FAIL */]: 8 /* States.ERROR */,
  ["l" /* PathCharTypes.ELSE */]: [6 /* States.IN_DOUBLE_QUOTE */, 0 /* Actions.APPEND */]
};
/**
 * Check if an expression is a literal value.
 */
const literalValueRE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function isLiteral(exp) {
  return literalValueRE.test(exp);
}
/**
 * Strip quotes from a string
 */
function stripQuotes(str) {
  const a = str.charCodeAt(0);
  const b = str.charCodeAt(str.length - 1);
  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
}
/**
 * Determine the type of a character in a keypath.
 */
function getPathCharType(ch) {
  if (ch === undefined || ch === null) {
    return "o" /* PathCharTypes.END_OF_FAIL */;
  }
  const code = ch.charCodeAt(0);
  switch (code) {
    case 0x5b: // [
    case 0x5d: // ]
    case 0x2e: // .
    case 0x22: // "
    case 0x27:
      // '
      return ch;
    case 0x5f: // _
    case 0x24: // $
    case 0x2d:
      // -
      return "i" /* PathCharTypes.IDENT */;
    case 0x09: // Tab (HT)
    case 0x0a: // Newline (LF)
    case 0x0d: // Return (CR)
    case 0xa0: // No-break space (NBSP)
    case 0xfeff: // Byte Order Mark (BOM)
    case 0x2028: // Line Separator (LS)
    case 0x2029:
      // Paragraph Separator (PS)
      return "w" /* PathCharTypes.WORKSPACE */;
  }
  return "i" /* PathCharTypes.IDENT */;
}
/**
 * Format a subPath, return its plain form if it is
 * a literal string or number. Otherwise prepend the
 * dynamic indicator (*).
 */
function formatSubPath(path) {
  const trimmed = path.trim();
  // invalid leading 0
  if (path.charAt(0) === '0' && isNaN(parseInt(path))) {
    return false;
  }
  return isLiteral(trimmed) ? stripQuotes(trimmed) : "*" /* PathCharTypes.ASTARISK */ + trimmed;
}
/**
 * Parse a string path into an array of segments
 */
function parse(path) {
  const keys = [];
  let index = -1;
  let mode = 0 /* States.BEFORE_PATH */;
  let subPathDepth = 0;
  let c;
  let key; // eslint-disable-line
  let newChar;
  let type;
  let transition;
  let action;
  let typeMap;
  const actions = [];
  actions[0 /* Actions.APPEND */] = () => {
    if (key === undefined) {
      key = newChar;
    } else {
      key += newChar;
    }
  };
  actions[1 /* Actions.PUSH */] = () => {
    if (key !== undefined) {
      keys.push(key);
      key = undefined;
    }
  };
  actions[2 /* Actions.INC_SUB_PATH_DEPTH */] = () => {
    actions[0 /* Actions.APPEND */]();
    subPathDepth++;
  };
  actions[3 /* Actions.PUSH_SUB_PATH */] = () => {
    if (subPathDepth > 0) {
      subPathDepth--;
      mode = 4 /* States.IN_SUB_PATH */;
      actions[0 /* Actions.APPEND */]();
    } else {
      subPathDepth = 0;
      if (key === undefined) {
        return false;
      }
      key = formatSubPath(key);
      if (key === false) {
        return false;
      } else {
        actions[1 /* Actions.PUSH */]();
      }
    }
  };
  function maybeUnescapeQuote() {
    const nextChar = path[index + 1];
    if (mode === 5 /* States.IN_SINGLE_QUOTE */ && nextChar === "'" /* PathCharTypes.SINGLE_QUOTE */ || mode === 6 /* States.IN_DOUBLE_QUOTE */ && nextChar === "\"" /* PathCharTypes.DOUBLE_QUOTE */) {
      index++;
      newChar = '\\' + nextChar;
      actions[0 /* Actions.APPEND */]();
      return true;
    }
  }
  while (mode !== null) {
    index++;
    c = path[index];
    if (c === '\\' && maybeUnescapeQuote()) {
      continue;
    }
    type = getPathCharType(c);
    typeMap = pathStateMachine[mode];
    transition = typeMap[type] || typeMap["l" /* PathCharTypes.ELSE */] || 8 /* States.ERROR */;
    // check parse error
    if (transition === 8 /* States.ERROR */) {
      return;
    }
    mode = transition[0];
    if (transition[1] !== undefined) {
      action = actions[transition[1]];
      if (action) {
        newChar = c;
        if (action() === false) {
          return;
        }
      }
    }
    // check parse finish
    if (mode === 7 /* States.AFTER_PATH */) {
      return keys;
    }
  }
}
// path token cache
const cache = new Map();
/**
 * key-value message resolver
 *
 * @remarks
 * Resolves messages with the key-value structure. Note that messages with a hierarchical structure such as objects cannot be resolved
 *
 * @param obj - A target object to be resolved with path
 * @param path - A {@link Path | path} to resolve the value of message
 *
 * @returns A resolved {@link PathValue | path value}
 *
 * @VueI18nGeneral
 */
function resolveWithKeyValue(obj, path) {
  return (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isObject */ .Gv)(obj) ? obj[path] : null;
}
/**
 * message resolver
 *
 * @remarks
 * Resolves messages. messages with a hierarchical structure such as objects can be resolved. This resolver is used in VueI18n as default.
 *
 * @param obj - A target object to be resolved with path
 * @param path - A {@link Path | path} to resolve the value of message
 *
 * @returns A resolved {@link PathValue | path value}
 *
 * @VueI18nGeneral
 */
function resolveValue(obj, path) {
  // check object
  if (!(0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isObject */ .Gv)(obj)) {
    return null;
  }
  // parse path
  let hit = cache.get(path);
  if (!hit) {
    hit = parse(path);
    if (hit) {
      cache.set(path, hit);
    }
  }
  // check hit
  if (!hit) {
    return null;
  }
  // resolve path value
  const len = hit.length;
  let last = obj;
  let i = 0;
  while (i < len) {
    const val = last[hit[i]];
    if (val === undefined) {
      return null;
    }
    if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isFunction */ .Tn)(last)) {
      return null;
    }
    last = val;
    i++;
  }
  return last;
}
const CoreWarnCodes = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7
};
const CORE_WARN_CODES_EXTEND_POINT = 8;
/** @internal */
const warnMessages = {
  [CoreWarnCodes.NOT_FOUND_KEY]: `Not found '{key}' key in '{locale}' locale messages.`,
  [CoreWarnCodes.FALLBACK_TO_TRANSLATE]: `Fall back to translate '{key}' key with '{target}' locale.`,
  [CoreWarnCodes.CANNOT_FORMAT_NUMBER]: `Cannot format a number value due to not supported Intl.NumberFormat.`,
  [CoreWarnCodes.FALLBACK_TO_NUMBER_FORMAT]: `Fall back to number format '{key}' key with '{target}' locale.`,
  [CoreWarnCodes.CANNOT_FORMAT_DATE]: `Cannot format a date value due to not supported Intl.DateTimeFormat.`,
  [CoreWarnCodes.FALLBACK_TO_DATE_FORMAT]: `Fall back to datetime format '{key}' key with '{target}' locale.`,
  [CoreWarnCodes.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: `This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future.`
};
function getWarnMessage(code, ...args) {
  return format$1(warnMessages[code], ...args);
}

/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Intlify core-base version
 * @internal
 */
const VERSION = '10.0.5';
const NOT_REOSLVED = -1;
const DEFAULT_LOCALE = 'en-US';
const MISSING_RESOLVE_VALUE = '';
const capitalize = str => `${str.charAt(0).toLocaleUpperCase()}${str.substr(1)}`;
function getDefaultLinkedModifiers() {
  return {
    upper: (val, type) => {
      // prettier-ignore
      return type === 'text' && (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isString */ .Kg)(val) ? val.toUpperCase() : type === 'vnode' && (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isObject */ .Gv)(val) && '__v_isVNode' in val ? val.children.toUpperCase() : val;
    },
    lower: (val, type) => {
      // prettier-ignore
      return type === 'text' && (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isString */ .Kg)(val) ? val.toLowerCase() : type === 'vnode' && (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isObject */ .Gv)(val) && '__v_isVNode' in val ? val.children.toLowerCase() : val;
    },
    capitalize: (val, type) => {
      // prettier-ignore
      return type === 'text' && (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isString */ .Kg)(val) ? capitalize(val) : type === 'vnode' && (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isObject */ .Gv)(val) && '__v_isVNode' in val ? capitalize(val.children) : val;
    }
  };
}
let _compiler;
function registerMessageCompiler(compiler) {
  _compiler = compiler;
}
let _resolver;
/**
 * Register the message resolver
 *
 * @param resolver - A {@link MessageResolver} function
 *
 * @VueI18nGeneral
 */
function registerMessageResolver(resolver) {
  _resolver = resolver;
}
let _fallbacker;
/**
 * Register the locale fallbacker
 *
 * @param fallbacker - A {@link LocaleFallbacker} function
 *
 * @VueI18nGeneral
 */
function registerLocaleFallbacker(fallbacker) {
  _fallbacker = fallbacker;
}
// Additional Meta for Intlify DevTools
let _additionalMeta = null;
/* #__NO_SIDE_EFFECTS__ */
const setAdditionalMeta = meta => {
  _additionalMeta = meta;
};
/* #__NO_SIDE_EFFECTS__ */
const getAdditionalMeta = () => _additionalMeta;
let _fallbackContext = null;
const setFallbackContext = context => {
  _fallbackContext = context;
};
const getFallbackContext = () => _fallbackContext;
// ID for CoreContext
let _cid = 0;
function createCoreContext(options = {}) {
  // setup options
  const onWarn = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isFunction */ .Tn)(options.onWarn) ? options.onWarn : _intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .warn */ .R8;
  const version = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isString */ .Kg)(options.version) ? options.version : VERSION;
  const locale = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isString */ .Kg)(options.locale) || (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isFunction */ .Tn)(options.locale) ? options.locale : DEFAULT_LOCALE;
  const _locale = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isFunction */ .Tn)(locale) ? DEFAULT_LOCALE : locale;
  const fallbackLocale = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isArray */ .cy)(options.fallbackLocale) || (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isPlainObject */ .Qd)(options.fallbackLocale) || (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isString */ .Kg)(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale;
  const messages = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isPlainObject */ .Qd)(options.messages) ? options.messages : createResources(_locale);
  const datetimeFormats = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isPlainObject */ .Qd)(options.datetimeFormats) ? options.datetimeFormats : createResources(_locale);
  const numberFormats = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isPlainObject */ .Qd)(options.numberFormats) ? options.numberFormats : createResources(_locale);
  const modifiers = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .assign */ .kp)((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .create */ .vt)(), options.modifiers, getDefaultLinkedModifiers());
  const pluralRules = options.pluralRules || (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .create */ .vt)();
  const missing = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isFunction */ .Tn)(options.missing) ? options.missing : null;
  const missingWarn = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isBoolean */ .Lm)(options.missingWarn) || (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isRegExp */ .gd)(options.missingWarn) ? options.missingWarn : true;
  const fallbackWarn = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isBoolean */ .Lm)(options.fallbackWarn) || (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isRegExp */ .gd)(options.fallbackWarn) ? options.fallbackWarn : true;
  const fallbackFormat = !!options.fallbackFormat;
  const unresolving = !!options.unresolving;
  const postTranslation = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isFunction */ .Tn)(options.postTranslation) ? options.postTranslation : null;
  const processor = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isPlainObject */ .Qd)(options.processor) ? options.processor : null;
  const warnHtmlMessage = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isBoolean */ .Lm)(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
  const escapeParameter = !!options.escapeParameter;
  const messageCompiler = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isFunction */ .Tn)(options.messageCompiler) ? options.messageCompiler : _compiler;
  if (false) {}
  const messageResolver = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isFunction */ .Tn)(options.messageResolver) ? options.messageResolver : _resolver || resolveWithKeyValue;
  const localeFallbacker = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isFunction */ .Tn)(options.localeFallbacker) ? options.localeFallbacker : _fallbacker || fallbackWithSimple;
  const fallbackContext = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isObject */ .Gv)(options.fallbackContext) ? options.fallbackContext : undefined;
  // setup internal options
  const internalOptions = options;
  const __datetimeFormatters = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isObject */ .Gv)(internalOptions.__datetimeFormatters) ? internalOptions.__datetimeFormatters : new Map();
  const __numberFormatters = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isObject */ .Gv)(internalOptions.__numberFormatters) ? internalOptions.__numberFormatters : new Map();
  const __meta = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isObject */ .Gv)(internalOptions.__meta) ? internalOptions.__meta : {};
  _cid++;
  const context = {
    version,
    cid: _cid,
    locale,
    fallbackLocale,
    messages,
    modifiers,
    pluralRules,
    missing,
    missingWarn,
    fallbackWarn,
    fallbackFormat,
    unresolving,
    postTranslation,
    processor,
    warnHtmlMessage,
    escapeParameter,
    messageCompiler,
    messageResolver,
    localeFallbacker,
    fallbackContext,
    onWarn,
    __meta
  };
  {
    context.datetimeFormats = datetimeFormats;
    context.numberFormats = numberFormats;
    context.__datetimeFormatters = __datetimeFormatters;
    context.__numberFormatters = __numberFormatters;
  }
  // for vue-devtools timeline event
  if (false) {}
  // NOTE: experimental !!
  if (false) {}
  return context;
}
const createResources = locale => ({
  [locale]: (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .create */ .vt)()
});
/** @internal */
function isTranslateFallbackWarn(fallback, key) {
  return fallback instanceof RegExp ? fallback.test(key) : fallback;
}
/** @internal */
function isTranslateMissingWarn(missing, key) {
  return missing instanceof RegExp ? missing.test(key) : missing;
}
/** @internal */
function handleMissing(context, key, locale, missingWarn, type) {
  const {
    missing,
    onWarn
  } = context;
  // for vue-devtools timeline event
  if (false) {}
  if (missing !== null) {
    const ret = missing(context, locale, key, type);
    return (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isString */ .Kg)(ret) ? ret : key;
  } else {
    if (false) {}
    return key;
  }
}
/** @internal */
function updateFallbackLocale(ctx, locale, fallback) {
  const context = ctx;
  context.__localeChainCache = new Map();
  ctx.localeFallbacker(ctx, fallback, locale);
}
/** @internal */
function isAlmostSameLocale(locale, compareLocale) {
  if (locale === compareLocale) return false;
  return locale.split('-')[0] === compareLocale.split('-')[0];
}
/** @internal */
function isImplicitFallback(targetLocale, locales) {
  const index = locales.indexOf(targetLocale);
  if (index === -1) {
    return false;
  }
  for (let i = index + 1; i < locales.length; i++) {
    if (isAlmostSameLocale(targetLocale, locales[i])) {
      return true;
    }
  }
  return false;
}
/* eslint-enable @typescript-eslint/no-explicit-any */

const intlDefined = typeof Intl !== 'undefined';
const Availabilities = {
  dateTimeFormat: intlDefined && typeof Intl.DateTimeFormat !== 'undefined',
  numberFormat: intlDefined && typeof Intl.NumberFormat !== 'undefined'
};

// implementation of `datetime` function
function datetime(context, ...args) {
  const {
    datetimeFormats,
    unresolving,
    fallbackLocale,
    onWarn,
    localeFallbacker
  } = context;
  const {
    __datetimeFormatters
  } = context;
  if (false) {}
  const [key, value, options, overrides] = parseDateTimeArgs(...args);
  const missingWarn = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isBoolean */ .Lm)(options.missingWarn) ? options.missingWarn : context.missingWarn;
  const fallbackWarn = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isBoolean */ .Lm)(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const part = !!options.part;
  const locale = getLocale(context, options);
  const locales = localeFallbacker(context,
  // eslint-disable-line @typescript-eslint/no-explicit-any
  fallbackLocale, locale);
  if (!(0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isString */ .Kg)(key) || key === '') {
    return new Intl.DateTimeFormat(locale, overrides).format(value);
  }
  // resolve format
  let datetimeFormat = {};
  let targetLocale;
  let format = null;
  let from = locale;
  let to = null;
  const type = 'datetime format';
  for (let i = 0; i < locales.length; i++) {
    targetLocale = to = locales[i];
    if (false) {}
    // for vue-devtools timeline event
    if (false) {}
    datetimeFormat = datetimeFormats[targetLocale] || {};
    format = datetimeFormat[key];
    if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isPlainObject */ .Qd)(format)) break;
    handleMissing(context, key, targetLocale, missingWarn, type); // eslint-disable-line @typescript-eslint/no-explicit-any
    from = to;
  }
  // checking format and target locale
  if (!(0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isPlainObject */ .Qd)(format) || !(0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isString */ .Kg)(targetLocale)) {
    return unresolving ? NOT_REOSLVED : key;
  }
  let id = `${targetLocale}__${key}`;
  if (!(0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isEmptyObject */ .RI)(overrides)) {
    id = `${id}__${JSON.stringify(overrides)}`;
  }
  let formatter = __datetimeFormatters.get(id);
  if (!formatter) {
    formatter = new Intl.DateTimeFormat(targetLocale, (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .assign */ .kp)({}, format, overrides));
    __datetimeFormatters.set(id, formatter);
  }
  return !part ? formatter.format(value) : formatter.formatToParts(value);
}
/** @internal */
const DATETIME_FORMAT_OPTIONS_KEYS = ['localeMatcher', 'weekday', 'era', 'year', 'month', 'day', 'hour', 'minute', 'second', 'timeZoneName', 'formatMatcher', 'hour12', 'timeZone', 'dateStyle', 'timeStyle', 'calendar', 'dayPeriod', 'numberingSystem', 'hourCycle', 'fractionalSecondDigits'];
/** @internal */
function parseDateTimeArgs(...args) {
  const [arg1, arg2, arg3, arg4] = args;
  const options = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .create */ .vt)();
  let overrides = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .create */ .vt)();
  let value;
  if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isString */ .Kg)(arg1)) {
    // Only allow ISO strings - other date formats are often supported,
    // but may cause different results in different browsers.
    const matches = arg1.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!matches) {
      throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
    }
    // Some browsers can not parse the iso datetime separated by space,
    // this is a compromise solution by replace the 'T'/' ' with 'T'
    const dateTime = matches[3] ? matches[3].trim().startsWith('T') ? `${matches[1].trim()}${matches[3].trim()}` : `${matches[1].trim()}T${matches[3].trim()}` : matches[1].trim();
    value = new Date(dateTime);
    try {
      // This will fail if the date is not valid
      value.toISOString();
    } catch {
      throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isDate */ .$P)(arg1)) {
    if (isNaN(arg1.getTime())) {
      throw createCoreError(CoreErrorCodes.INVALID_DATE_ARGUMENT);
    }
    value = arg1;
  } else if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isNumber */ .Et)(arg1)) {
    value = arg1;
  } else {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isString */ .Kg)(arg2)) {
    options.key = arg2;
  } else if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isPlainObject */ .Qd)(arg2)) {
    Object.keys(arg2).forEach(key => {
      if (DATETIME_FORMAT_OPTIONS_KEYS.includes(key)) {
        overrides[key] = arg2[key];
      } else {
        options[key] = arg2[key];
      }
    });
  }
  if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isString */ .Kg)(arg3)) {
    options.locale = arg3;
  } else if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isPlainObject */ .Qd)(arg3)) {
    overrides = arg3;
  }
  if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isPlainObject */ .Qd)(arg4)) {
    overrides = arg4;
  }
  return [options.key || '', value, options, overrides];
}
/** @internal */
function clearDateTimeFormat(ctx, locale, format) {
  const context = ctx;
  for (const key in format) {
    const id = `${locale}__${key}`;
    if (!context.__datetimeFormatters.has(id)) {
      continue;
    }
    context.__datetimeFormatters.delete(id);
  }
}

// implementation of `number` function
function number(context, ...args) {
  const {
    numberFormats,
    unresolving,
    fallbackLocale,
    onWarn,
    localeFallbacker
  } = context;
  const {
    __numberFormatters
  } = context;
  if (false) {}
  const [key, value, options, overrides] = parseNumberArgs(...args);
  const missingWarn = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isBoolean */ .Lm)(options.missingWarn) ? options.missingWarn : context.missingWarn;
  const fallbackWarn = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isBoolean */ .Lm)(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const part = !!options.part;
  const locale = getLocale(context, options);
  const locales = localeFallbacker(context,
  // eslint-disable-line @typescript-eslint/no-explicit-any
  fallbackLocale, locale);
  if (!(0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isString */ .Kg)(key) || key === '') {
    return new Intl.NumberFormat(locale, overrides).format(value);
  }
  // resolve format
  let numberFormat = {};
  let targetLocale;
  let format = null;
  let from = locale;
  let to = null;
  const type = 'number format';
  for (let i = 0; i < locales.length; i++) {
    targetLocale = to = locales[i];
    if (false) {}
    // for vue-devtools timeline event
    if (false) {}
    numberFormat = numberFormats[targetLocale] || {};
    format = numberFormat[key];
    if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isPlainObject */ .Qd)(format)) break;
    handleMissing(context, key, targetLocale, missingWarn, type); // eslint-disable-line @typescript-eslint/no-explicit-any
    from = to;
  }
  // checking format and target locale
  if (!(0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isPlainObject */ .Qd)(format) || !(0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isString */ .Kg)(targetLocale)) {
    return unresolving ? NOT_REOSLVED : key;
  }
  let id = `${targetLocale}__${key}`;
  if (!(0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isEmptyObject */ .RI)(overrides)) {
    id = `${id}__${JSON.stringify(overrides)}`;
  }
  let formatter = __numberFormatters.get(id);
  if (!formatter) {
    formatter = new Intl.NumberFormat(targetLocale, (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .assign */ .kp)({}, format, overrides));
    __numberFormatters.set(id, formatter);
  }
  return !part ? formatter.format(value) : formatter.formatToParts(value);
}
/** @internal */
const NUMBER_FORMAT_OPTIONS_KEYS = ['localeMatcher', 'style', 'currency', 'currencyDisplay', 'currencySign', 'useGrouping', 'minimumIntegerDigits', 'minimumFractionDigits', 'maximumFractionDigits', 'minimumSignificantDigits', 'maximumSignificantDigits', 'compactDisplay', 'notation', 'signDisplay', 'unit', 'unitDisplay', 'roundingMode', 'roundingPriority', 'roundingIncrement', 'trailingZeroDisplay'];
/** @internal */
function parseNumberArgs(...args) {
  const [arg1, arg2, arg3, arg4] = args;
  const options = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .create */ .vt)();
  let overrides = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .create */ .vt)();
  if (!(0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isNumber */ .Et)(arg1)) {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  const value = arg1;
  if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isString */ .Kg)(arg2)) {
    options.key = arg2;
  } else if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isPlainObject */ .Qd)(arg2)) {
    Object.keys(arg2).forEach(key => {
      if (NUMBER_FORMAT_OPTIONS_KEYS.includes(key)) {
        overrides[key] = arg2[key];
      } else {
        options[key] = arg2[key];
      }
    });
  }
  if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isString */ .Kg)(arg3)) {
    options.locale = arg3;
  } else if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isPlainObject */ .Qd)(arg3)) {
    overrides = arg3;
  }
  if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isPlainObject */ .Qd)(arg4)) {
    overrides = arg4;
  }
  return [options.key || '', value, options, overrides];
}
/** @internal */
function clearNumberFormat(ctx, locale, format) {
  const context = ctx;
  for (const key in format) {
    const id = `${locale}__${key}`;
    if (!context.__numberFormatters.has(id)) {
      continue;
    }
    context.__numberFormatters.delete(id);
  }
}
const DEFAULT_MODIFIER = str => str;
const DEFAULT_MESSAGE = ctx => ''; // eslint-disable-line
const DEFAULT_MESSAGE_DATA_TYPE = 'text';
const DEFAULT_NORMALIZE = values => values.length === 0 ? '' : (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .join */ .fj)(values);
const DEFAULT_INTERPOLATE = _intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .toDisplayString */ .v_;
function pluralDefault(choice, choicesLength) {
  choice = Math.abs(choice);
  if (choicesLength === 2) {
    // prettier-ignore
    return choice ? choice > 1 ? 1 : 0 : 1;
  }
  return choice ? Math.min(choice, 2) : 0;
}
function getPluralIndex(options) {
  // prettier-ignore
  const index = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isNumber */ .Et)(options.pluralIndex) ? options.pluralIndex : -1;
  // prettier-ignore
  return options.named && ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isNumber */ .Et)(options.named.count) || (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isNumber */ .Et)(options.named.n)) ? (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isNumber */ .Et)(options.named.count) ? options.named.count : (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isNumber */ .Et)(options.named.n) ? options.named.n : index : index;
}
function normalizeNamed(pluralIndex, props) {
  if (!props.count) {
    props.count = pluralIndex;
  }
  if (!props.n) {
    props.n = pluralIndex;
  }
}
function createMessageContext(options = {}) {
  const locale = options.locale;
  const pluralIndex = getPluralIndex(options);
  const pluralRule = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isObject */ .Gv)(options.pluralRules) && (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isString */ .Kg)(locale) && (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isFunction */ .Tn)(options.pluralRules[locale]) ? options.pluralRules[locale] : pluralDefault;
  const orgPluralRule = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isObject */ .Gv)(options.pluralRules) && (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isString */ .Kg)(locale) && (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isFunction */ .Tn)(options.pluralRules[locale]) ? pluralDefault : undefined;
  const plural = messages => {
    return messages[pluralRule(pluralIndex, messages.length, orgPluralRule)];
  };
  const _list = options.list || [];
  const list = index => _list[index];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const _named = options.named || (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .create */ .vt)();
  (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isNumber */ .Et)(options.pluralIndex) && normalizeNamed(pluralIndex, _named);
  const named = key => _named[key];
  function message(key, useLinked) {
    // prettier-ignore
    const msg = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isFunction */ .Tn)(options.messages) ? options.messages(key, !!useLinked) : (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isObject */ .Gv)(options.messages) ? options.messages[key] : false;
    return !msg ? options.parent ? options.parent.message(key) // resolve from parent messages
    : DEFAULT_MESSAGE : msg;
  }
  const _modifier = name => options.modifiers ? options.modifiers[name] : DEFAULT_MODIFIER;
  const normalize = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isPlainObject */ .Qd)(options.processor) && (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isFunction */ .Tn)(options.processor.normalize) ? options.processor.normalize : DEFAULT_NORMALIZE;
  const interpolate = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isPlainObject */ .Qd)(options.processor) && (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isFunction */ .Tn)(options.processor.interpolate) ? options.processor.interpolate : DEFAULT_INTERPOLATE;
  const type = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isPlainObject */ .Qd)(options.processor) && (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isString */ .Kg)(options.processor.type) ? options.processor.type : DEFAULT_MESSAGE_DATA_TYPE;
  const linked = (key, ...args) => {
    const [arg1, arg2] = args;
    let type = 'text';
    let modifier = '';
    if (args.length === 1) {
      if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isObject */ .Gv)(arg1)) {
        modifier = arg1.modifier || modifier;
        type = arg1.type || type;
      } else if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isString */ .Kg)(arg1)) {
        modifier = arg1 || modifier;
      }
    } else if (args.length === 2) {
      if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isString */ .Kg)(arg1)) {
        modifier = arg1 || modifier;
      }
      if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isString */ .Kg)(arg2)) {
        type = arg2 || type;
      }
    }
    const ret = message(key, true)(ctx);
    const msg =
    // The message in vnode resolved with linked are returned as an array by processor.nomalize
    type === 'vnode' && (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isArray */ .cy)(ret) && modifier ? ret[0] : ret;
    return modifier ? _modifier(modifier)(msg, type) : msg;
  };
  const ctx = {
    ["list" /* HelperNameMap.LIST */]: list,
    ["named" /* HelperNameMap.NAMED */]: named,
    ["plural" /* HelperNameMap.PLURAL */]: plural,
    ["linked" /* HelperNameMap.LINKED */]: linked,
    ["message" /* HelperNameMap.MESSAGE */]: message,
    ["type" /* HelperNameMap.TYPE */]: type,
    ["interpolate" /* HelperNameMap.INTERPOLATE */]: interpolate,
    ["normalize" /* HelperNameMap.NORMALIZE */]: normalize,
    ["values" /* HelperNameMap.VALUES */]: (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .assign */ .kp)((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .create */ .vt)(), _list, _named)
  };
  return ctx;
}
const NOOP_MESSAGE_FUNCTION = () => '';
const isMessageFunction = val => (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isFunction */ .Tn)(val);
// implementation of `translate` function
function translate(context, ...args) {
  const {
    fallbackFormat,
    postTranslation,
    unresolving,
    messageCompiler,
    fallbackLocale,
    messages
  } = context;
  const [key, options] = parseTranslateArgs(...args);
  const missingWarn = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isBoolean */ .Lm)(options.missingWarn) ? options.missingWarn : context.missingWarn;
  const fallbackWarn = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isBoolean */ .Lm)(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const escapeParameter = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isBoolean */ .Lm)(options.escapeParameter) ? options.escapeParameter : context.escapeParameter;
  const resolvedMessage = !!options.resolvedMessage;
  // prettier-ignore
  const defaultMsgOrKey = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isString */ .Kg)(options.default) || (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isBoolean */ .Lm)(options.default) // default by function option
  ? !(0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isBoolean */ .Lm)(options.default) ? options.default : !messageCompiler ? () => key : key : fallbackFormat // default by `fallbackFormat` option
  ? !messageCompiler ? () => key : key : null;
  const enableDefaultMsg = fallbackFormat || defaultMsgOrKey != null && ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isString */ .Kg)(defaultMsgOrKey) || (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isFunction */ .Tn)(defaultMsgOrKey));
  const locale = getLocale(context, options);
  // escape params
  escapeParameter && escapeParams(options);
  // resolve message format
  // eslint-disable-next-line prefer-const
  let [formatScope, targetLocale, message] = !resolvedMessage ? resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) : [key, locale, messages[locale] || (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .create */ .vt)()];
  // NOTE:
  //  Fix to work around `ssrTransfrom` bug in Vite.
  //  https://github.com/vitejs/vite/issues/4306
  //  To get around this, use temporary variables.
  //  https://github.com/nuxt/framework/issues/1461#issuecomment-954606243
  let format = formatScope;
  // if you use default message, set it as message format!
  let cacheBaseKey = key;
  if (!resolvedMessage && !((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isString */ .Kg)(format) || isMessageAST(format) || isMessageFunction(format))) {
    if (enableDefaultMsg) {
      format = defaultMsgOrKey;
      cacheBaseKey = format;
    }
  }
  // checking message format and target locale
  if (!resolvedMessage && (!((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isString */ .Kg)(format) || isMessageAST(format) || isMessageFunction(format)) || !(0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isString */ .Kg)(targetLocale))) {
    return unresolving ? NOT_REOSLVED : key;
  }
  // TODO: refactor
  if (false) {}
  // setup compile error detecting
  let occurred = false;
  const onError = () => {
    occurred = true;
  };
  // compile message format
  const msg = !isMessageFunction(format) ? compileMessageFormat(context, key, targetLocale, format, cacheBaseKey, onError) : format;
  // if occurred compile error, return the message format
  if (occurred) {
    return format;
  }
  // evaluate message with context
  const ctxOptions = getMessageContextOptions(context, targetLocale, message, options);
  const msgContext = createMessageContext(ctxOptions);
  const messaged = evaluateMessage(context, msg, msgContext);
  // if use post translation option, proceed it with handler
  const ret = postTranslation ? postTranslation(messaged, key) : messaged;
  // NOTE: experimental !!
  if (false) {}
  return ret;
}
function escapeParams(options) {
  if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isArray */ .cy)(options.list)) {
    options.list = options.list.map(item => (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isString */ .Kg)(item) ? (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .escapeHtml */ .ZD)(item) : item);
  } else if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isObject */ .Gv)(options.named)) {
    Object.keys(options.named).forEach(key => {
      if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isString */ .Kg)(options.named[key])) {
        options.named[key] = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .escapeHtml */ .ZD)(options.named[key]);
      }
    });
  }
}
function resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) {
  const {
    messages,
    onWarn,
    messageResolver: resolveValue,
    localeFallbacker
  } = context;
  const locales = localeFallbacker(context, fallbackLocale, locale); // eslint-disable-line @typescript-eslint/no-explicit-any
  let message = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .create */ .vt)();
  let targetLocale;
  let format = null;
  let from = locale;
  let to = null;
  const type = 'translate';
  for (let i = 0; i < locales.length; i++) {
    targetLocale = to = locales[i];
    if (false) {}
    // for vue-devtools timeline event
    if (false) {}
    message = messages[targetLocale] || (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .create */ .vt)();
    // for vue-devtools timeline event
    let start = null;
    let startTag;
    let endTag;
    if (false) {}
    if ((format = resolveValue(message, key)) === null) {
      // if null, resolve with object key path
      format = message[key]; // eslint-disable-line @typescript-eslint/no-explicit-any
    }
    // for vue-devtools timeline event
    if (false) {}
    if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isString */ .Kg)(format) || isMessageAST(format) || isMessageFunction(format)) {
      break;
    }
    if (!isImplicitFallback(targetLocale, locales)) {
      const missingRet = handleMissing(context,
      // eslint-disable-line @typescript-eslint/no-explicit-any
      key, targetLocale, missingWarn, type);
      if (missingRet !== key) {
        format = missingRet;
      }
    }
    from = to;
  }
  return [format, targetLocale, message];
}
function compileMessageFormat(context, key, targetLocale, format, cacheBaseKey, onError) {
  const {
    messageCompiler,
    warnHtmlMessage
  } = context;
  if (isMessageFunction(format)) {
    const msg = format;
    msg.locale = msg.locale || targetLocale;
    msg.key = msg.key || key;
    return msg;
  }
  if (messageCompiler == null) {
    const msg = () => format;
    msg.locale = targetLocale;
    msg.key = key;
    return msg;
  }
  // for vue-devtools timeline event
  let start = null;
  let startTag;
  let endTag;
  if (false) {}
  const msg = messageCompiler(format, getCompileContext(context, targetLocale, cacheBaseKey, format, warnHtmlMessage, onError));
  // for vue-devtools timeline event
  if (false) {}
  msg.locale = targetLocale;
  msg.key = key;
  msg.source = format;
  return msg;
}
function evaluateMessage(context, msg, msgCtx) {
  // for vue-devtools timeline event
  let start = null;
  let startTag;
  let endTag;
  if (false) {}
  const messaged = msg(msgCtx);
  // for vue-devtools timeline event
  if (false) {}
  return messaged;
}
/** @internal */
function parseTranslateArgs(...args) {
  const [arg1, arg2, arg3] = args;
  const options = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .create */ .vt)();
  if (!(0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isString */ .Kg)(arg1) && !(0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isNumber */ .Et)(arg1) && !isMessageFunction(arg1) && !isMessageAST(arg1)) {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  // prettier-ignore
  const key = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isNumber */ .Et)(arg1) ? String(arg1) : isMessageFunction(arg1) ? arg1 : arg1;
  if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isNumber */ .Et)(arg2)) {
    options.plural = arg2;
  } else if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isString */ .Kg)(arg2)) {
    options.default = arg2;
  } else if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isPlainObject */ .Qd)(arg2) && !(0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isEmptyObject */ .RI)(arg2)) {
    options.named = arg2;
  } else if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isArray */ .cy)(arg2)) {
    options.list = arg2;
  }
  if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isNumber */ .Et)(arg3)) {
    options.plural = arg3;
  } else if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isString */ .Kg)(arg3)) {
    options.default = arg3;
  } else if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isPlainObject */ .Qd)(arg3)) {
    (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .assign */ .kp)(options, arg3);
  }
  return [key, options];
}
function getCompileContext(context, locale, key, source, warnHtmlMessage, onError) {
  return {
    locale,
    key,
    warnHtmlMessage,
    onError: err => {
      onError && onError(err);
      if (false) {} else {
        throw err;
      }
    },
    onCacheKey: source => (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .generateFormatCacheKey */ .YH)(locale, key, source)
  };
}
function getSourceForCodeFrame(source) {
  if (isString(source)) {
    return source;
  } else {
    if (source.loc && source.loc.source) {
      return source.loc.source;
    }
  }
}
function getMessageContextOptions(context, locale, message, options) {
  const {
    modifiers,
    pluralRules,
    messageResolver: resolveValue,
    fallbackLocale,
    fallbackWarn,
    missingWarn,
    fallbackContext
  } = context;
  const resolveMessage = (key, useLinked) => {
    let val = resolveValue(message, key);
    // fallback
    if (val == null && (fallbackContext || useLinked)) {
      const [,, message] = resolveMessageFormat(fallbackContext || context,
      // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
      key, locale, fallbackLocale, fallbackWarn, missingWarn);
      val = resolveValue(message, key);
    }
    if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isString */ .Kg)(val) || isMessageAST(val)) {
      let occurred = false;
      const onError = () => {
        occurred = true;
      };
      const msg = compileMessageFormat(context, key, locale, val, key, onError);
      return !occurred ? msg : NOOP_MESSAGE_FUNCTION;
    } else if (isMessageFunction(val)) {
      return val;
    } else {
      // TODO: should be implemented warning message
      return NOOP_MESSAGE_FUNCTION;
    }
  };
  const ctxOptions = {
    locale,
    modifiers,
    pluralRules,
    messages: resolveMessage
  };
  if (context.processor) {
    ctxOptions.processor = context.processor;
  }
  if (options.list) {
    ctxOptions.list = options.list;
  }
  if (options.named) {
    ctxOptions.named = options.named;
  }
  if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isNumber */ .Et)(options.plural)) {
    ctxOptions.pluralIndex = options.plural;
  }
  return ctxOptions;
}
{
  initFeatureFlags();
}


/***/ }),

/***/ 25825:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ab: function() { return /* binding */ COMPILE_ERROR_CODES_EXTEND_POINT; },
/* harmony export */   f4: function() { return /* binding */ defaultOnError; },
/* harmony export */   gN: function() { return /* binding */ createCompileError; },
/* harmony export */   h: function() { return /* binding */ baseCompile; }
/* harmony export */ });
/* unused harmony exports CompileErrorCodes, ERROR_DOMAIN, LOCATION_STUB, createLocation, createParser, createPosition, detectHtmlTag, errorMessages */
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44114);
/* harmony import */ var core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17642);
/* harmony import */ var core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58004);
/* harmony import */ var core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33853);
/* harmony import */ var core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45876);
/* harmony import */ var core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32475);
/* harmony import */ var core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15024);
/* harmony import */ var core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31698);
/* harmony import */ var _intlify_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(27641);








/*!
  * message-compiler v10.0.5
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */

const LOCATION_STUB = {
  start: {
    line: 1,
    column: 1,
    offset: 0
  },
  end: {
    line: 1,
    column: 1,
    offset: 0
  }
};
function createPosition(line, column, offset) {
  return {
    line,
    column,
    offset
  };
}
function createLocation(start, end, source) {
  const loc = {
    start,
    end
  };
  if (source != null) {
    loc.source = source;
  }
  return loc;
}
const CompileErrorCodes = {
  // tokenizer error codes
  EXPECTED_TOKEN: 1,
  INVALID_TOKEN_IN_PLACEHOLDER: 2,
  UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
  UNKNOWN_ESCAPE_SEQUENCE: 4,
  INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
  UNBALANCED_CLOSING_BRACE: 6,
  UNTERMINATED_CLOSING_BRACE: 7,
  EMPTY_PLACEHOLDER: 8,
  NOT_ALLOW_NEST_PLACEHOLDER: 9,
  INVALID_LINKED_FORMAT: 10,
  // parser error codes
  MUST_HAVE_MESSAGES_IN_PLURAL: 11,
  UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
  UNEXPECTED_EMPTY_LINKED_KEY: 13,
  UNEXPECTED_LEXICAL_ANALYSIS: 14,
  // generator error codes
  UNHANDLED_CODEGEN_NODE_TYPE: 15,
  // minifier error codes
  UNHANDLED_MINIFIER_NODE_TYPE: 16
};
// Special value for higher-order compilers to pick up the last code
// to avoid collision of error codes.
// This should always be kept as the last item.
const COMPILE_ERROR_CODES_EXTEND_POINT = 17;
/** @internal */
const errorMessages = {
  // tokenizer error messages
  [CompileErrorCodes.EXPECTED_TOKEN]: `Expected token: '{0}'`,
  [CompileErrorCodes.INVALID_TOKEN_IN_PLACEHOLDER]: `Invalid token in placeholder: '{0}'`,
  [CompileErrorCodes.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: `Unterminated single quote in placeholder`,
  [CompileErrorCodes.UNKNOWN_ESCAPE_SEQUENCE]: `Unknown escape sequence: \\{0}`,
  [CompileErrorCodes.INVALID_UNICODE_ESCAPE_SEQUENCE]: `Invalid unicode escape sequence: {0}`,
  [CompileErrorCodes.UNBALANCED_CLOSING_BRACE]: `Unbalanced closing brace`,
  [CompileErrorCodes.UNTERMINATED_CLOSING_BRACE]: `Unterminated closing brace`,
  [CompileErrorCodes.EMPTY_PLACEHOLDER]: `Empty placeholder`,
  [CompileErrorCodes.NOT_ALLOW_NEST_PLACEHOLDER]: `Not allowed nest placeholder`,
  [CompileErrorCodes.INVALID_LINKED_FORMAT]: `Invalid linked format`,
  // parser error messages
  [CompileErrorCodes.MUST_HAVE_MESSAGES_IN_PLURAL]: `Plural must have messages`,
  [CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_MODIFIER]: `Unexpected empty linked modifier`,
  [CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_KEY]: `Unexpected empty linked key`,
  [CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS]: `Unexpected lexical analysis in token: '{0}'`,
  // generator error messages
  [CompileErrorCodes.UNHANDLED_CODEGEN_NODE_TYPE]: `unhandled codegen node type: '{0}'`,
  // minimizer error messages
  [CompileErrorCodes.UNHANDLED_MINIFIER_NODE_TYPE]: `unhandled mimifier node type: '{0}'`
};
function createCompileError(code, loc, options = {}) {
  const {
    domain,
    messages,
    args
  } = options;
  const msg =  false ? 0 : code;
  const error = new SyntaxError(String(msg));
  error.code = code;
  if (loc) {
    error.location = loc;
  }
  error.domain = domain;
  return error;
}
/** @internal */
function defaultOnError(error) {
  throw error;
}

// eslint-disable-next-line no-useless-escape
const RE_HTML_TAG = /<\/?[\w\s="/.':;#-\/]+>/;
const detectHtmlTag = source => RE_HTML_TAG.test(source);
const CHAR_SP = ' ';
const CHAR_CR = '\r';
const CHAR_LF = '\n';
const CHAR_LS = String.fromCharCode(0x2028);
const CHAR_PS = String.fromCharCode(0x2029);
function createScanner(str) {
  const _buf = str;
  let _index = 0;
  let _line = 1;
  let _column = 1;
  let _peekOffset = 0;
  const isCRLF = index => _buf[index] === CHAR_CR && _buf[index + 1] === CHAR_LF;
  const isLF = index => _buf[index] === CHAR_LF;
  const isPS = index => _buf[index] === CHAR_PS;
  const isLS = index => _buf[index] === CHAR_LS;
  const isLineEnd = index => isCRLF(index) || isLF(index) || isPS(index) || isLS(index);
  const index = () => _index;
  const line = () => _line;
  const column = () => _column;
  const peekOffset = () => _peekOffset;
  const charAt = offset => isCRLF(offset) || isPS(offset) || isLS(offset) ? CHAR_LF : _buf[offset];
  const currentChar = () => charAt(_index);
  const currentPeek = () => charAt(_index + _peekOffset);
  function next() {
    _peekOffset = 0;
    if (isLineEnd(_index)) {
      _line++;
      _column = 0;
    }
    if (isCRLF(_index)) {
      _index++;
    }
    _index++;
    _column++;
    return _buf[_index];
  }
  function peek() {
    if (isCRLF(_index + _peekOffset)) {
      _peekOffset++;
    }
    _peekOffset++;
    return _buf[_index + _peekOffset];
  }
  function reset() {
    _index = 0;
    _line = 1;
    _column = 1;
    _peekOffset = 0;
  }
  function resetPeek(offset = 0) {
    _peekOffset = offset;
  }
  function skipToPeek() {
    const target = _index + _peekOffset;
    while (target !== _index) {
      next();
    }
    _peekOffset = 0;
  }
  return {
    index,
    line,
    column,
    peekOffset,
    charAt,
    currentChar,
    currentPeek,
    next,
    peek,
    reset,
    resetPeek,
    skipToPeek
  };
}
const EOF = undefined;
const DOT = '.';
const LITERAL_DELIMITER = "'";
const ERROR_DOMAIN$3 = 'tokenizer';
function createTokenizer(source, options = {}) {
  const location = options.location !== false;
  const _scnr = createScanner(source);
  const currentOffset = () => _scnr.index();
  const currentPosition = () => createPosition(_scnr.line(), _scnr.column(), _scnr.index());
  const _initLoc = currentPosition();
  const _initOffset = currentOffset();
  const _context = {
    currentType: 13 /* TokenTypes.EOF */,
    offset: _initOffset,
    startLoc: _initLoc,
    endLoc: _initLoc,
    lastType: 13 /* TokenTypes.EOF */,
    lastOffset: _initOffset,
    lastStartLoc: _initLoc,
    lastEndLoc: _initLoc,
    braceNest: 0,
    inLinked: false,
    text: ''
  };
  const context = () => _context;
  const {
    onError
  } = options;
  function emitError(code, pos, offset, ...args) {
    const ctx = context();
    pos.column += offset;
    pos.offset += offset;
    if (onError) {
      const loc = location ? createLocation(ctx.startLoc, pos) : null;
      const err = createCompileError(code, loc, {
        domain: ERROR_DOMAIN$3,
        args
      });
      onError(err);
    }
  }
  function getToken(context, type, value) {
    context.endLoc = currentPosition();
    context.currentType = type;
    const token = {
      type
    };
    if (location) {
      token.loc = createLocation(context.startLoc, context.endLoc);
    }
    if (value != null) {
      token.value = value;
    }
    return token;
  }
  const getEndToken = context => getToken(context, 13 /* TokenTypes.EOF */);
  function eat(scnr, ch) {
    if (scnr.currentChar() === ch) {
      scnr.next();
      return ch;
    } else {
      emitError(CompileErrorCodes.EXPECTED_TOKEN, currentPosition(), 0, ch);
      return '';
    }
  }
  function peekSpaces(scnr) {
    let buf = '';
    while (scnr.currentPeek() === CHAR_SP || scnr.currentPeek() === CHAR_LF) {
      buf += scnr.currentPeek();
      scnr.peek();
    }
    return buf;
  }
  function skipSpaces(scnr) {
    const buf = peekSpaces(scnr);
    scnr.skipToPeek();
    return buf;
  }
  function isIdentifierStart(ch) {
    if (ch === EOF) {
      return false;
    }
    const cc = ch.charCodeAt(0);
    return cc >= 97 && cc <= 122 ||
    // a-z
    cc >= 65 && cc <= 90 ||
    // A-Z
    cc === 95 // _
    ;
  }
  function isNumberStart(ch) {
    if (ch === EOF) {
      return false;
    }
    const cc = ch.charCodeAt(0);
    return cc >= 48 && cc <= 57; // 0-9
  }
  function isNamedIdentifierStart(scnr, context) {
    const {
      currentType
    } = context;
    if (currentType !== 2 /* TokenTypes.BraceLeft */) {
      return false;
    }
    peekSpaces(scnr);
    const ret = isIdentifierStart(scnr.currentPeek());
    scnr.resetPeek();
    return ret;
  }
  function isListIdentifierStart(scnr, context) {
    const {
      currentType
    } = context;
    if (currentType !== 2 /* TokenTypes.BraceLeft */) {
      return false;
    }
    peekSpaces(scnr);
    const ch = scnr.currentPeek() === '-' ? scnr.peek() : scnr.currentPeek();
    const ret = isNumberStart(ch);
    scnr.resetPeek();
    return ret;
  }
  function isLiteralStart(scnr, context) {
    const {
      currentType
    } = context;
    if (currentType !== 2 /* TokenTypes.BraceLeft */) {
      return false;
    }
    peekSpaces(scnr);
    const ret = scnr.currentPeek() === LITERAL_DELIMITER;
    scnr.resetPeek();
    return ret;
  }
  function isLinkedDotStart(scnr, context) {
    const {
      currentType
    } = context;
    if (currentType !== 7 /* TokenTypes.LinkedAlias */) {
      return false;
    }
    peekSpaces(scnr);
    const ret = scnr.currentPeek() === "." /* TokenChars.LinkedDot */;
    scnr.resetPeek();
    return ret;
  }
  function isLinkedModifierStart(scnr, context) {
    const {
      currentType
    } = context;
    if (currentType !== 8 /* TokenTypes.LinkedDot */) {
      return false;
    }
    peekSpaces(scnr);
    const ret = isIdentifierStart(scnr.currentPeek());
    scnr.resetPeek();
    return ret;
  }
  function isLinkedDelimiterStart(scnr, context) {
    const {
      currentType
    } = context;
    if (!(currentType === 7 /* TokenTypes.LinkedAlias */ || currentType === 11 /* TokenTypes.LinkedModifier */)) {
      return false;
    }
    peekSpaces(scnr);
    const ret = scnr.currentPeek() === ":" /* TokenChars.LinkedDelimiter */;
    scnr.resetPeek();
    return ret;
  }
  function isLinkedReferStart(scnr, context) {
    const {
      currentType
    } = context;
    if (currentType !== 9 /* TokenTypes.LinkedDelimiter */) {
      return false;
    }
    const fn = () => {
      const ch = scnr.currentPeek();
      if (ch === "{" /* TokenChars.BraceLeft */) {
        return isIdentifierStart(scnr.peek());
      } else if (ch === "@" /* TokenChars.LinkedAlias */ || ch === "|" /* TokenChars.Pipe */ || ch === ":" /* TokenChars.LinkedDelimiter */ || ch === "." /* TokenChars.LinkedDot */ || ch === CHAR_SP || !ch) {
        return false;
      } else if (ch === CHAR_LF) {
        scnr.peek();
        return fn();
      } else {
        // other characters
        return isTextStart(scnr, false);
      }
    };
    const ret = fn();
    scnr.resetPeek();
    return ret;
  }
  function isPluralStart(scnr) {
    peekSpaces(scnr);
    const ret = scnr.currentPeek() === "|" /* TokenChars.Pipe */;
    scnr.resetPeek();
    return ret;
  }
  function isTextStart(scnr, reset = true) {
    const fn = (hasSpace = false, prev = '') => {
      const ch = scnr.currentPeek();
      if (ch === "{" /* TokenChars.BraceLeft */) {
        return hasSpace;
      } else if (ch === "@" /* TokenChars.LinkedAlias */ || !ch) {
        return hasSpace;
      } else if (ch === "|" /* TokenChars.Pipe */) {
        return !(prev === CHAR_SP || prev === CHAR_LF);
      } else if (ch === CHAR_SP) {
        scnr.peek();
        return fn(true, CHAR_SP);
      } else if (ch === CHAR_LF) {
        scnr.peek();
        return fn(true, CHAR_LF);
      } else {
        return true;
      }
    };
    const ret = fn();
    reset && scnr.resetPeek();
    return ret;
  }
  function takeChar(scnr, fn) {
    const ch = scnr.currentChar();
    if (ch === EOF) {
      return EOF;
    }
    if (fn(ch)) {
      scnr.next();
      return ch;
    }
    return null;
  }
  function isIdentifier(ch) {
    const cc = ch.charCodeAt(0);
    return cc >= 97 && cc <= 122 ||
    // a-z
    cc >= 65 && cc <= 90 ||
    // A-Z
    cc >= 48 && cc <= 57 ||
    // 0-9
    cc === 95 ||
    // _
    cc === 36 // $
    ;
  }
  function takeIdentifierChar(scnr) {
    return takeChar(scnr, isIdentifier);
  }
  function isNamedIdentifier(ch) {
    const cc = ch.charCodeAt(0);
    return cc >= 97 && cc <= 122 ||
    // a-z
    cc >= 65 && cc <= 90 ||
    // A-Z
    cc >= 48 && cc <= 57 ||
    // 0-9
    cc === 95 ||
    // _
    cc === 36 ||
    // $
    cc === 45 // -
    ;
  }
  function takeNamedIdentifierChar(scnr) {
    return takeChar(scnr, isNamedIdentifier);
  }
  function isDigit(ch) {
    const cc = ch.charCodeAt(0);
    return cc >= 48 && cc <= 57; // 0-9
  }
  function takeDigit(scnr) {
    return takeChar(scnr, isDigit);
  }
  function isHexDigit(ch) {
    const cc = ch.charCodeAt(0);
    return cc >= 48 && cc <= 57 ||
    // 0-9
    cc >= 65 && cc <= 70 ||
    // A-F
    cc >= 97 && cc <= 102; // a-f
  }
  function takeHexDigit(scnr) {
    return takeChar(scnr, isHexDigit);
  }
  function getDigits(scnr) {
    let ch = '';
    let num = '';
    while (ch = takeDigit(scnr)) {
      num += ch;
    }
    return num;
  }
  function readText(scnr) {
    let buf = '';
    while (true) {
      const ch = scnr.currentChar();
      if (ch === "{" /* TokenChars.BraceLeft */ || ch === "}" /* TokenChars.BraceRight */ || ch === "@" /* TokenChars.LinkedAlias */ || ch === "|" /* TokenChars.Pipe */ || !ch) {
        break;
      } else if (ch === CHAR_SP || ch === CHAR_LF) {
        if (isTextStart(scnr)) {
          buf += ch;
          scnr.next();
        } else if (isPluralStart(scnr)) {
          break;
        } else {
          buf += ch;
          scnr.next();
        }
      } else {
        buf += ch;
        scnr.next();
      }
    }
    return buf;
  }
  function readNamedIdentifier(scnr) {
    skipSpaces(scnr);
    let ch = '';
    let name = '';
    while (ch = takeNamedIdentifierChar(scnr)) {
      name += ch;
    }
    if (scnr.currentChar() === EOF) {
      emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
    }
    return name;
  }
  function readListIdentifier(scnr) {
    skipSpaces(scnr);
    let value = '';
    if (scnr.currentChar() === '-') {
      scnr.next();
      value += `-${getDigits(scnr)}`;
    } else {
      value += getDigits(scnr);
    }
    if (scnr.currentChar() === EOF) {
      emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
    }
    return value;
  }
  function isLiteral(ch) {
    return ch !== LITERAL_DELIMITER && ch !== CHAR_LF;
  }
  function readLiteral(scnr) {
    skipSpaces(scnr);
    // eslint-disable-next-line no-useless-escape
    eat(scnr, `\'`);
    let ch = '';
    let literal = '';
    while (ch = takeChar(scnr, isLiteral)) {
      if (ch === '\\') {
        literal += readEscapeSequence(scnr);
      } else {
        literal += ch;
      }
    }
    const current = scnr.currentChar();
    if (current === CHAR_LF || current === EOF) {
      emitError(CompileErrorCodes.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, currentPosition(), 0);
      // TODO: Is it correct really?
      if (current === CHAR_LF) {
        scnr.next();
        // eslint-disable-next-line no-useless-escape
        eat(scnr, `\'`);
      }
      return literal;
    }
    // eslint-disable-next-line no-useless-escape
    eat(scnr, `\'`);
    return literal;
  }
  function readEscapeSequence(scnr) {
    const ch = scnr.currentChar();
    switch (ch) {
      case '\\':
      case `\'`:
        // eslint-disable-line no-useless-escape
        scnr.next();
        return `\\${ch}`;
      case 'u':
        return readUnicodeEscapeSequence(scnr, ch, 4);
      case 'U':
        return readUnicodeEscapeSequence(scnr, ch, 6);
      default:
        emitError(CompileErrorCodes.UNKNOWN_ESCAPE_SEQUENCE, currentPosition(), 0, ch);
        return '';
    }
  }
  function readUnicodeEscapeSequence(scnr, unicode, digits) {
    eat(scnr, unicode);
    let sequence = '';
    for (let i = 0; i < digits; i++) {
      const ch = takeHexDigit(scnr);
      if (!ch) {
        emitError(CompileErrorCodes.INVALID_UNICODE_ESCAPE_SEQUENCE, currentPosition(), 0, `\\${unicode}${sequence}${scnr.currentChar()}`);
        break;
      }
      sequence += ch;
    }
    return `\\${unicode}${sequence}`;
  }
  function isInvalidIdentifier(ch) {
    return ch !== "{" /* TokenChars.BraceLeft */ && ch !== "}" /* TokenChars.BraceRight */ && ch !== CHAR_SP && ch !== CHAR_LF;
  }
  function readInvalidIdentifier(scnr) {
    skipSpaces(scnr);
    let ch = '';
    let identifiers = '';
    while (ch = takeChar(scnr, isInvalidIdentifier)) {
      identifiers += ch;
    }
    return identifiers;
  }
  function readLinkedModifier(scnr) {
    let ch = '';
    let name = '';
    while (ch = takeIdentifierChar(scnr)) {
      name += ch;
    }
    return name;
  }
  function readLinkedRefer(scnr) {
    const fn = buf => {
      const ch = scnr.currentChar();
      if (ch === "{" /* TokenChars.BraceLeft */ || ch === "@" /* TokenChars.LinkedAlias */ || ch === "|" /* TokenChars.Pipe */ || ch === "(" /* TokenChars.ParenLeft */ || ch === ")" /* TokenChars.ParenRight */ || !ch) {
        return buf;
      } else if (ch === CHAR_SP) {
        return buf;
      } else if (ch === CHAR_LF || ch === DOT) {
        buf += ch;
        scnr.next();
        return fn(buf);
      } else {
        buf += ch;
        scnr.next();
        return fn(buf);
      }
    };
    return fn('');
  }
  function readPlural(scnr) {
    skipSpaces(scnr);
    const plural = eat(scnr, "|" /* TokenChars.Pipe */);
    skipSpaces(scnr);
    return plural;
  }
  // TODO: We need refactoring of token parsing ...
  function readTokenInPlaceholder(scnr, context) {
    let token = null;
    const ch = scnr.currentChar();
    switch (ch) {
      case "{" /* TokenChars.BraceLeft */:
        if (context.braceNest >= 1) {
          emitError(CompileErrorCodes.NOT_ALLOW_NEST_PLACEHOLDER, currentPosition(), 0);
        }
        scnr.next();
        token = getToken(context, 2 /* TokenTypes.BraceLeft */, "{" /* TokenChars.BraceLeft */);
        skipSpaces(scnr);
        context.braceNest++;
        return token;
      case "}" /* TokenChars.BraceRight */:
        if (context.braceNest > 0 && context.currentType === 2 /* TokenTypes.BraceLeft */) {
          emitError(CompileErrorCodes.EMPTY_PLACEHOLDER, currentPosition(), 0);
        }
        scnr.next();
        token = getToken(context, 3 /* TokenTypes.BraceRight */, "}" /* TokenChars.BraceRight */);
        context.braceNest--;
        context.braceNest > 0 && skipSpaces(scnr);
        if (context.inLinked && context.braceNest === 0) {
          context.inLinked = false;
        }
        return token;
      case "@" /* TokenChars.LinkedAlias */:
        if (context.braceNest > 0) {
          emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
        }
        token = readTokenInLinked(scnr, context) || getEndToken(context);
        context.braceNest = 0;
        return token;
      default:
        {
          let validNamedIdentifier = true;
          let validListIdentifier = true;
          let validLiteral = true;
          if (isPluralStart(scnr)) {
            if (context.braceNest > 0) {
              emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
            }
            token = getToken(context, 1 /* TokenTypes.Pipe */, readPlural(scnr));
            // reset
            context.braceNest = 0;
            context.inLinked = false;
            return token;
          }
          if (context.braceNest > 0 && (context.currentType === 4 /* TokenTypes.Named */ || context.currentType === 5 /* TokenTypes.List */ || context.currentType === 6 /* TokenTypes.Literal */)) {
            emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
            context.braceNest = 0;
            return readToken(scnr, context);
          }
          if (validNamedIdentifier = isNamedIdentifierStart(scnr, context)) {
            token = getToken(context, 4 /* TokenTypes.Named */, readNamedIdentifier(scnr));
            skipSpaces(scnr);
            return token;
          }
          if (validListIdentifier = isListIdentifierStart(scnr, context)) {
            token = getToken(context, 5 /* TokenTypes.List */, readListIdentifier(scnr));
            skipSpaces(scnr);
            return token;
          }
          if (validLiteral = isLiteralStart(scnr, context)) {
            token = getToken(context, 6 /* TokenTypes.Literal */, readLiteral(scnr));
            skipSpaces(scnr);
            return token;
          }
          if (!validNamedIdentifier && !validListIdentifier && !validLiteral) {
            // TODO: we should be re-designed invalid cases, when we will extend message syntax near the future ...
            token = getToken(context, 12 /* TokenTypes.InvalidPlace */, readInvalidIdentifier(scnr));
            emitError(CompileErrorCodes.INVALID_TOKEN_IN_PLACEHOLDER, currentPosition(), 0, token.value);
            skipSpaces(scnr);
            return token;
          }
          break;
        }
    }
    return token;
  }
  // TODO: We need refactoring of token parsing ...
  function readTokenInLinked(scnr, context) {
    const {
      currentType
    } = context;
    let token = null;
    const ch = scnr.currentChar();
    if ((currentType === 7 /* TokenTypes.LinkedAlias */ || currentType === 8 /* TokenTypes.LinkedDot */ || currentType === 11 /* TokenTypes.LinkedModifier */ || currentType === 9 /* TokenTypes.LinkedDelimiter */) && (ch === CHAR_LF || ch === CHAR_SP)) {
      emitError(CompileErrorCodes.INVALID_LINKED_FORMAT, currentPosition(), 0);
    }
    switch (ch) {
      case "@" /* TokenChars.LinkedAlias */:
        scnr.next();
        token = getToken(context, 7 /* TokenTypes.LinkedAlias */, "@" /* TokenChars.LinkedAlias */);
        context.inLinked = true;
        return token;
      case "." /* TokenChars.LinkedDot */:
        skipSpaces(scnr);
        scnr.next();
        return getToken(context, 8 /* TokenTypes.LinkedDot */, "." /* TokenChars.LinkedDot */);
      case ":" /* TokenChars.LinkedDelimiter */:
        skipSpaces(scnr);
        scnr.next();
        return getToken(context, 9 /* TokenTypes.LinkedDelimiter */, ":" /* TokenChars.LinkedDelimiter */);
      default:
        if (isPluralStart(scnr)) {
          token = getToken(context, 1 /* TokenTypes.Pipe */, readPlural(scnr));
          // reset
          context.braceNest = 0;
          context.inLinked = false;
          return token;
        }
        if (isLinkedDotStart(scnr, context) || isLinkedDelimiterStart(scnr, context)) {
          skipSpaces(scnr);
          return readTokenInLinked(scnr, context);
        }
        if (isLinkedModifierStart(scnr, context)) {
          skipSpaces(scnr);
          return getToken(context, 11 /* TokenTypes.LinkedModifier */, readLinkedModifier(scnr));
        }
        if (isLinkedReferStart(scnr, context)) {
          skipSpaces(scnr);
          if (ch === "{" /* TokenChars.BraceLeft */) {
            // scan the placeholder
            return readTokenInPlaceholder(scnr, context) || token;
          } else {
            return getToken(context, 10 /* TokenTypes.LinkedKey */, readLinkedRefer(scnr));
          }
        }
        if (currentType === 7 /* TokenTypes.LinkedAlias */) {
          emitError(CompileErrorCodes.INVALID_LINKED_FORMAT, currentPosition(), 0);
        }
        context.braceNest = 0;
        context.inLinked = false;
        return readToken(scnr, context);
    }
  }
  // TODO: We need refactoring of token parsing ...
  function readToken(scnr, context) {
    let token = {
      type: 13 /* TokenTypes.EOF */
    };
    if (context.braceNest > 0) {
      return readTokenInPlaceholder(scnr, context) || getEndToken(context);
    }
    if (context.inLinked) {
      return readTokenInLinked(scnr, context) || getEndToken(context);
    }
    const ch = scnr.currentChar();
    switch (ch) {
      case "{" /* TokenChars.BraceLeft */:
        return readTokenInPlaceholder(scnr, context) || getEndToken(context);
      case "}" /* TokenChars.BraceRight */:
        emitError(CompileErrorCodes.UNBALANCED_CLOSING_BRACE, currentPosition(), 0);
        scnr.next();
        return getToken(context, 3 /* TokenTypes.BraceRight */, "}" /* TokenChars.BraceRight */);
      case "@" /* TokenChars.LinkedAlias */:
        return readTokenInLinked(scnr, context) || getEndToken(context);
      default:
        {
          if (isPluralStart(scnr)) {
            token = getToken(context, 1 /* TokenTypes.Pipe */, readPlural(scnr));
            // reset
            context.braceNest = 0;
            context.inLinked = false;
            return token;
          }
          if (isTextStart(scnr)) {
            return getToken(context, 0 /* TokenTypes.Text */, readText(scnr));
          }
          break;
        }
    }
    return token;
  }
  function nextToken() {
    const {
      currentType,
      offset,
      startLoc,
      endLoc
    } = _context;
    _context.lastType = currentType;
    _context.lastOffset = offset;
    _context.lastStartLoc = startLoc;
    _context.lastEndLoc = endLoc;
    _context.offset = currentOffset();
    _context.startLoc = currentPosition();
    if (_scnr.currentChar() === EOF) {
      return getToken(_context, 13 /* TokenTypes.EOF */);
    }
    return readToken(_scnr, _context);
  }
  return {
    nextToken,
    currentOffset,
    currentPosition,
    context
  };
}
const ERROR_DOMAIN$2 = 'parser';
// Backslash backslash, backslash quote, uHHHH, UHHHHHH.
const KNOWN_ESCAPES = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function fromEscapeSequence(match, codePoint4, codePoint6) {
  switch (match) {
    case `\\\\`:
      return `\\`;
    // eslint-disable-next-line no-useless-escape
    case `\\\'`:
      // eslint-disable-next-line no-useless-escape
      return `\'`;
    default:
      {
        const codePoint = parseInt(codePoint4 || codePoint6, 16);
        if (codePoint <= 0xd7ff || codePoint >= 0xe000) {
          return String.fromCodePoint(codePoint);
        }
        // invalid ...
        // Replace them with U+FFFD REPLACEMENT CHARACTER.
        return '�';
      }
  }
}
function createParser(options = {}) {
  const location = options.location !== false;
  const {
    onError
  } = options;
  function emitError(tokenzer, code, start, offset, ...args) {
    const end = tokenzer.currentPosition();
    end.offset += offset;
    end.column += offset;
    if (onError) {
      const loc = location ? createLocation(start, end) : null;
      const err = createCompileError(code, loc, {
        domain: ERROR_DOMAIN$2,
        args
      });
      onError(err);
    }
  }
  function startNode(type, offset, loc) {
    const node = {
      type
    };
    if (location) {
      node.start = offset;
      node.end = offset;
      node.loc = {
        start: loc,
        end: loc
      };
    }
    return node;
  }
  function endNode(node, offset, pos, type) {
    if (location) {
      node.end = offset;
      if (node.loc) {
        node.loc.end = pos;
      }
    }
  }
  function parseText(tokenizer, value) {
    const context = tokenizer.context();
    const node = startNode(3 /* NodeTypes.Text */, context.offset, context.startLoc);
    node.value = value;
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseList(tokenizer, index) {
    const context = tokenizer.context();
    const {
      lastOffset: offset,
      lastStartLoc: loc
    } = context; // get brace left loc
    const node = startNode(5 /* NodeTypes.List */, offset, loc);
    node.index = parseInt(index, 10);
    tokenizer.nextToken(); // skip brach right
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseNamed(tokenizer, key) {
    const context = tokenizer.context();
    const {
      lastOffset: offset,
      lastStartLoc: loc
    } = context; // get brace left loc
    const node = startNode(4 /* NodeTypes.Named */, offset, loc);
    node.key = key;
    tokenizer.nextToken(); // skip brach right
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseLiteral(tokenizer, value) {
    const context = tokenizer.context();
    const {
      lastOffset: offset,
      lastStartLoc: loc
    } = context; // get brace left loc
    const node = startNode(9 /* NodeTypes.Literal */, offset, loc);
    node.value = value.replace(KNOWN_ESCAPES, fromEscapeSequence);
    tokenizer.nextToken(); // skip brach right
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseLinkedModifier(tokenizer) {
    const token = tokenizer.nextToken();
    const context = tokenizer.context();
    const {
      lastOffset: offset,
      lastStartLoc: loc
    } = context; // get linked dot loc
    const node = startNode(8 /* NodeTypes.LinkedModifier */, offset, loc);
    if (token.type !== 11 /* TokenTypes.LinkedModifier */) {
      // empty modifier
      emitError(tokenizer, CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_MODIFIER, context.lastStartLoc, 0);
      node.value = '';
      endNode(node, offset, loc);
      return {
        nextConsumeToken: token,
        node
      };
    }
    // check token
    if (token.value == null) {
      emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
    }
    node.value = token.value || '';
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return {
      node
    };
  }
  function parseLinkedKey(tokenizer, value) {
    const context = tokenizer.context();
    const node = startNode(7 /* NodeTypes.LinkedKey */, context.offset, context.startLoc);
    node.value = value;
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseLinked(tokenizer) {
    const context = tokenizer.context();
    const linkedNode = startNode(6 /* NodeTypes.Linked */, context.offset, context.startLoc);
    let token = tokenizer.nextToken();
    if (token.type === 8 /* TokenTypes.LinkedDot */) {
      const parsed = parseLinkedModifier(tokenizer);
      linkedNode.modifier = parsed.node;
      token = parsed.nextConsumeToken || tokenizer.nextToken();
    }
    // asset check token
    if (token.type !== 9 /* TokenTypes.LinkedDelimiter */) {
      emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
    }
    token = tokenizer.nextToken();
    // skip brace left
    if (token.type === 2 /* TokenTypes.BraceLeft */) {
      token = tokenizer.nextToken();
    }
    switch (token.type) {
      case 10 /* TokenTypes.LinkedKey */:
        if (token.value == null) {
          emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
        }
        linkedNode.key = parseLinkedKey(tokenizer, token.value || '');
        break;
      case 4 /* TokenTypes.Named */:
        if (token.value == null) {
          emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
        }
        linkedNode.key = parseNamed(tokenizer, token.value || '');
        break;
      case 5 /* TokenTypes.List */:
        if (token.value == null) {
          emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
        }
        linkedNode.key = parseList(tokenizer, token.value || '');
        break;
      case 6 /* TokenTypes.Literal */:
        if (token.value == null) {
          emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
        }
        linkedNode.key = parseLiteral(tokenizer, token.value || '');
        break;
      default:
        {
          // empty key
          emitError(tokenizer, CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_KEY, context.lastStartLoc, 0);
          const nextContext = tokenizer.context();
          const emptyLinkedKeyNode = startNode(7 /* NodeTypes.LinkedKey */, nextContext.offset, nextContext.startLoc);
          emptyLinkedKeyNode.value = '';
          endNode(emptyLinkedKeyNode, nextContext.offset, nextContext.startLoc);
          linkedNode.key = emptyLinkedKeyNode;
          endNode(linkedNode, nextContext.offset, nextContext.startLoc);
          return {
            nextConsumeToken: token,
            node: linkedNode
          };
        }
    }
    endNode(linkedNode, tokenizer.currentOffset(), tokenizer.currentPosition());
    return {
      node: linkedNode
    };
  }
  function parseMessage(tokenizer) {
    const context = tokenizer.context();
    const startOffset = context.currentType === 1 /* TokenTypes.Pipe */ ? tokenizer.currentOffset() : context.offset;
    const startLoc = context.currentType === 1 /* TokenTypes.Pipe */ ? context.endLoc : context.startLoc;
    const node = startNode(2 /* NodeTypes.Message */, startOffset, startLoc);
    node.items = [];
    let nextToken = null;
    do {
      const token = nextToken || tokenizer.nextToken();
      nextToken = null;
      switch (token.type) {
        case 0 /* TokenTypes.Text */:
          if (token.value == null) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
          }
          node.items.push(parseText(tokenizer, token.value || ''));
          break;
        case 5 /* TokenTypes.List */:
          if (token.value == null) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
          }
          node.items.push(parseList(tokenizer, token.value || ''));
          break;
        case 4 /* TokenTypes.Named */:
          if (token.value == null) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
          }
          node.items.push(parseNamed(tokenizer, token.value || ''));
          break;
        case 6 /* TokenTypes.Literal */:
          if (token.value == null) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
          }
          node.items.push(parseLiteral(tokenizer, token.value || ''));
          break;
        case 7 /* TokenTypes.LinkedAlias */:
          {
            const parsed = parseLinked(tokenizer);
            node.items.push(parsed.node);
            nextToken = parsed.nextConsumeToken || null;
            break;
          }
      }
    } while (context.currentType !== 13 /* TokenTypes.EOF */ && context.currentType !== 1 /* TokenTypes.Pipe */);
    // adjust message node loc
    const endOffset = context.currentType === 1 /* TokenTypes.Pipe */ ? context.lastOffset : tokenizer.currentOffset();
    const endLoc = context.currentType === 1 /* TokenTypes.Pipe */ ? context.lastEndLoc : tokenizer.currentPosition();
    endNode(node, endOffset, endLoc);
    return node;
  }
  function parsePlural(tokenizer, offset, loc, msgNode) {
    const context = tokenizer.context();
    let hasEmptyMessage = msgNode.items.length === 0;
    const node = startNode(1 /* NodeTypes.Plural */, offset, loc);
    node.cases = [];
    node.cases.push(msgNode);
    do {
      const msg = parseMessage(tokenizer);
      if (!hasEmptyMessage) {
        hasEmptyMessage = msg.items.length === 0;
      }
      node.cases.push(msg);
    } while (context.currentType !== 13 /* TokenTypes.EOF */);
    if (hasEmptyMessage) {
      emitError(tokenizer, CompileErrorCodes.MUST_HAVE_MESSAGES_IN_PLURAL, loc, 0);
    }
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseResource(tokenizer) {
    const context = tokenizer.context();
    const {
      offset,
      startLoc
    } = context;
    const msgNode = parseMessage(tokenizer);
    if (context.currentType === 13 /* TokenTypes.EOF */) {
      return msgNode;
    } else {
      return parsePlural(tokenizer, offset, startLoc, msgNode);
    }
  }
  function parse(source) {
    const tokenizer = createTokenizer(source, (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .assign */ .kp)({}, options));
    const context = tokenizer.context();
    const node = startNode(0 /* NodeTypes.Resource */, context.offset, context.startLoc);
    if (location && node.loc) {
      node.loc.source = source;
    }
    node.body = parseResource(tokenizer);
    if (options.onCacheKey) {
      node.cacheKey = options.onCacheKey(source);
    }
    // assert whether achieved to EOF
    if (context.currentType !== 13 /* TokenTypes.EOF */) {
      emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, source[context.offset] || '');
    }
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  return {
    parse
  };
}
function getTokenCaption(token) {
  if (token.type === 13 /* TokenTypes.EOF */) {
    return 'EOF';
  }
  const name = (token.value || '').replace(/\r?\n/gu, '\\n');
  return name.length > 10 ? name.slice(0, 9) + '…' : name;
}
function createTransformer(ast, options = {} // eslint-disable-line
) {
  const _context = {
    ast,
    helpers: new Set()
  };
  const context = () => _context;
  const helper = name => {
    _context.helpers.add(name);
    return name;
  };
  return {
    context,
    helper
  };
}
function traverseNodes(nodes, transformer) {
  for (let i = 0; i < nodes.length; i++) {
    traverseNode(nodes[i], transformer);
  }
}
function traverseNode(node, transformer) {
  // TODO: if we need pre-hook of transform, should be implemented to here
  switch (node.type) {
    case 1 /* NodeTypes.Plural */:
      traverseNodes(node.cases, transformer);
      transformer.helper("plural" /* HelperNameMap.PLURAL */);
      break;
    case 2 /* NodeTypes.Message */:
      traverseNodes(node.items, transformer);
      break;
    case 6 /* NodeTypes.Linked */:
      {
        const linked = node;
        traverseNode(linked.key, transformer);
        transformer.helper("linked" /* HelperNameMap.LINKED */);
        transformer.helper("type" /* HelperNameMap.TYPE */);
        break;
      }
    case 5 /* NodeTypes.List */:
      transformer.helper("interpolate" /* HelperNameMap.INTERPOLATE */);
      transformer.helper("list" /* HelperNameMap.LIST */);
      break;
    case 4 /* NodeTypes.Named */:
      transformer.helper("interpolate" /* HelperNameMap.INTERPOLATE */);
      transformer.helper("named" /* HelperNameMap.NAMED */);
      break;
  }
  // TODO: if we need post-hook of transform, should be implemented to here
}
// transform AST
function transform(ast, options = {} // eslint-disable-line
) {
  const transformer = createTransformer(ast);
  transformer.helper("normalize" /* HelperNameMap.NORMALIZE */);
  // traverse
  ast.body && traverseNode(ast.body, transformer);
  // set meta information
  const context = transformer.context();
  ast.helpers = Array.from(context.helpers);
}
function optimize(ast) {
  const body = ast.body;
  if (body.type === 2 /* NodeTypes.Message */) {
    optimizeMessageNode(body);
  } else {
    body.cases.forEach(c => optimizeMessageNode(c));
  }
  return ast;
}
function optimizeMessageNode(message) {
  if (message.items.length === 1) {
    const item = message.items[0];
    if (item.type === 3 /* NodeTypes.Text */ || item.type === 9 /* NodeTypes.Literal */) {
      message.static = item.value;
      delete item.value; // optimization for size
    }
  } else {
    const values = [];
    for (let i = 0; i < message.items.length; i++) {
      const item = message.items[i];
      if (!(item.type === 3 /* NodeTypes.Text */ || item.type === 9 /* NodeTypes.Literal */)) {
        break;
      }
      if (item.value == null) {
        break;
      }
      values.push(item.value);
    }
    if (values.length === message.items.length) {
      message.static = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .join */ .fj)(values);
      for (let i = 0; i < message.items.length; i++) {
        const item = message.items[i];
        if (item.type === 3 /* NodeTypes.Text */ || item.type === 9 /* NodeTypes.Literal */) {
          delete item.value; // optimization for size
        }
      }
    }
  }
}
const ERROR_DOMAIN$1 = 'minifier';
/* eslint-disable @typescript-eslint/no-explicit-any */
function minify(node) {
  node.t = node.type;
  switch (node.type) {
    case 0 /* NodeTypes.Resource */:
      {
        const resource = node;
        minify(resource.body);
        resource.b = resource.body;
        delete resource.body;
        break;
      }
    case 1 /* NodeTypes.Plural */:
      {
        const plural = node;
        const cases = plural.cases;
        for (let i = 0; i < cases.length; i++) {
          minify(cases[i]);
        }
        plural.c = cases;
        delete plural.cases;
        break;
      }
    case 2 /* NodeTypes.Message */:
      {
        const message = node;
        const items = message.items;
        for (let i = 0; i < items.length; i++) {
          minify(items[i]);
        }
        message.i = items;
        delete message.items;
        if (message.static) {
          message.s = message.static;
          delete message.static;
        }
        break;
      }
    case 3 /* NodeTypes.Text */:
    case 9 /* NodeTypes.Literal */:
    case 8 /* NodeTypes.LinkedModifier */:
    case 7 /* NodeTypes.LinkedKey */:
      {
        const valueNode = node;
        if (valueNode.value) {
          valueNode.v = valueNode.value;
          delete valueNode.value;
        }
        break;
      }
    case 6 /* NodeTypes.Linked */:
      {
        const linked = node;
        minify(linked.key);
        linked.k = linked.key;
        delete linked.key;
        if (linked.modifier) {
          minify(linked.modifier);
          linked.m = linked.modifier;
          delete linked.modifier;
        }
        break;
      }
    case 5 /* NodeTypes.List */:
      {
        const list = node;
        list.i = list.index;
        delete list.index;
        break;
      }
    case 4 /* NodeTypes.Named */:
      {
        const named = node;
        named.k = named.key;
        delete named.key;
        break;
      }
    default:
      if (false) {}
  }
  delete node.type;
}
/* eslint-enable @typescript-eslint/no-explicit-any */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="source-map-js" />
const ERROR_DOMAIN = 'parser';
function createCodeGenerator(ast, options) {
  const {
    sourceMap,
    filename,
    breakLineCode,
    needIndent: _needIndent
  } = options;
  const location = options.location !== false;
  const _context = {
    filename,
    code: '',
    column: 1,
    line: 1,
    offset: 0,
    map: undefined,
    breakLineCode,
    needIndent: _needIndent,
    indentLevel: 0
  };
  if (location && ast.loc) {
    _context.source = ast.loc.source;
  }
  const context = () => _context;
  function push(code, node) {
    _context.code += code;
  }
  function _newline(n, withBreakLine = true) {
    const _breakLineCode = withBreakLine ? breakLineCode : '';
    push(_needIndent ? _breakLineCode + `  `.repeat(n) : _breakLineCode);
  }
  function indent(withNewLine = true) {
    const level = ++_context.indentLevel;
    withNewLine && _newline(level);
  }
  function deindent(withNewLine = true) {
    const level = --_context.indentLevel;
    withNewLine && _newline(level);
  }
  function newline() {
    _newline(_context.indentLevel);
  }
  const helper = key => `_${key}`;
  const needIndent = () => _context.needIndent;
  return {
    context,
    push,
    indent,
    deindent,
    newline,
    helper,
    needIndent
  };
}
function generateLinkedNode(generator, node) {
  const {
    helper
  } = generator;
  generator.push(`${helper("linked" /* HelperNameMap.LINKED */)}(`);
  generateNode(generator, node.key);
  if (node.modifier) {
    generator.push(`, `);
    generateNode(generator, node.modifier);
    generator.push(`, _type`);
  } else {
    generator.push(`, undefined, _type`);
  }
  generator.push(`)`);
}
function generateMessageNode(generator, node) {
  const {
    helper,
    needIndent
  } = generator;
  generator.push(`${helper("normalize" /* HelperNameMap.NORMALIZE */)}([`);
  generator.indent(needIndent());
  const length = node.items.length;
  for (let i = 0; i < length; i++) {
    generateNode(generator, node.items[i]);
    if (i === length - 1) {
      break;
    }
    generator.push(', ');
  }
  generator.deindent(needIndent());
  generator.push('])');
}
function generatePluralNode(generator, node) {
  const {
    helper,
    needIndent
  } = generator;
  if (node.cases.length > 1) {
    generator.push(`${helper("plural" /* HelperNameMap.PLURAL */)}([`);
    generator.indent(needIndent());
    const length = node.cases.length;
    for (let i = 0; i < length; i++) {
      generateNode(generator, node.cases[i]);
      if (i === length - 1) {
        break;
      }
      generator.push(', ');
    }
    generator.deindent(needIndent());
    generator.push(`])`);
  }
}
function generateResource(generator, node) {
  if (node.body) {
    generateNode(generator, node.body);
  } else {
    generator.push('null');
  }
}
function generateNode(generator, node) {
  const {
    helper
  } = generator;
  switch (node.type) {
    case 0 /* NodeTypes.Resource */:
      generateResource(generator, node);
      break;
    case 1 /* NodeTypes.Plural */:
      generatePluralNode(generator, node);
      break;
    case 2 /* NodeTypes.Message */:
      generateMessageNode(generator, node);
      break;
    case 6 /* NodeTypes.Linked */:
      generateLinkedNode(generator, node);
      break;
    case 8 /* NodeTypes.LinkedModifier */:
      generator.push(JSON.stringify(node.value), node);
      break;
    case 7 /* NodeTypes.LinkedKey */:
      generator.push(JSON.stringify(node.value), node);
      break;
    case 5 /* NodeTypes.List */:
      generator.push(`${helper("interpolate" /* HelperNameMap.INTERPOLATE */)}(${helper("list" /* HelperNameMap.LIST */)}(${node.index}))`, node);
      break;
    case 4 /* NodeTypes.Named */:
      generator.push(`${helper("interpolate" /* HelperNameMap.INTERPOLATE */)}(${helper("named" /* HelperNameMap.NAMED */)}(${JSON.stringify(node.key)}))`, node);
      break;
    case 9 /* NodeTypes.Literal */:
      generator.push(JSON.stringify(node.value), node);
      break;
    case 3 /* NodeTypes.Text */:
      generator.push(JSON.stringify(node.value), node);
      break;
    default:
      if (false) {}
  }
}
// generate code from AST
const generate = (ast, options = {}) => {
  const mode = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isString */ .Kg)(options.mode) ? options.mode : 'normal';
  const filename = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .isString */ .Kg)(options.filename) ? options.filename : 'message.intl';
  const sourceMap = !!options.sourceMap;
  // prettier-ignore
  const breakLineCode = options.breakLineCode != null ? options.breakLineCode : mode === 'arrow' ? ';' : '\n';
  const needIndent = options.needIndent ? options.needIndent : mode !== 'arrow';
  const helpers = ast.helpers || [];
  const generator = createCodeGenerator(ast, {
    mode,
    filename,
    sourceMap,
    breakLineCode,
    needIndent
  });
  generator.push(mode === 'normal' ? `function __msg__ (ctx) {` : `(ctx) => {`);
  generator.indent(needIndent);
  if (helpers.length > 0) {
    generator.push(`const { ${(0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .join */ .fj)(helpers.map(s => `${s}: _${s}`), ', ')} } = ctx`);
    generator.newline();
  }
  generator.push(`return `);
  generateNode(generator, ast);
  generator.deindent(needIndent);
  generator.push(`}`);
  delete ast.helpers;
  const {
    code,
    map
  } = generator.context();
  return {
    ast,
    code,
    map: map ? map.toJSON() : undefined // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function baseCompile(source, options = {}) {
  const assignedOptions = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_8__/* .assign */ .kp)({}, options);
  const jit = !!assignedOptions.jit;
  const enalbeMinify = !!assignedOptions.minify;
  const enambeOptimize = assignedOptions.optimize == null ? true : assignedOptions.optimize;
  // parse source codes
  const parser = createParser(assignedOptions);
  const ast = parser.parse(source);
  if (!jit) {
    // transform ASTs
    transform(ast, assignedOptions);
    // generate javascript codes
    return generate(ast, assignedOptions);
  } else {
    // optimize ASTs
    enambeOptimize && optimize(ast);
    // minimize ASTs
    enalbeMinify && minify(ast);
    // In JIT mode, no ast transform, no code generation.
    return {
      ast,
      code: ''
    };
  }
}


/***/ }),

/***/ 27641:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $3: function() { return /* binding */ hasOwn; },
/* harmony export */   $P: function() { return /* binding */ isDate; },
/* harmony export */   A4: function() { return /* binding */ deepCopy; },
/* harmony export */   Et: function() { return /* binding */ isNumber; },
/* harmony export */   Gv: function() { return /* binding */ isObject; },
/* harmony export */   Kg: function() { return /* binding */ isString; },
/* harmony export */   Lm: function() { return /* binding */ isBoolean; },
/* harmony export */   M: function() { return /* binding */ inBrowser; },
/* harmony export */   Qd: function() { return /* binding */ isPlainObject; },
/* harmony export */   R8: function() { return /* binding */ warn; },
/* harmony export */   RI: function() { return /* binding */ isEmptyObject; },
/* harmony export */   Tn: function() { return /* binding */ isFunction; },
/* harmony export */   We: function() { return /* binding */ getGlobalThis; },
/* harmony export */   YH: function() { return /* binding */ generateFormatCacheKey; },
/* harmony export */   ZD: function() { return /* binding */ escapeHtml; },
/* harmony export */   cy: function() { return /* binding */ isArray; },
/* harmony export */   f4: function() { return /* binding */ makeSymbol; },
/* harmony export */   fj: function() { return /* binding */ join; },
/* harmony export */   gd: function() { return /* binding */ isRegExp; },
/* harmony export */   kp: function() { return /* binding */ assign; },
/* harmony export */   v_: function() { return /* binding */ toDisplayString; },
/* harmony export */   vt: function() { return /* binding */ create; },
/* harmony export */   yL: function() { return /* binding */ isPromise; }
/* harmony export */ });
/* unused harmony exports createEmitter, format, friendlyJSONstringify, generateCodeFrame, isSymbol, mark, measure, objectToString, toTypeString, warnOnce */
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44114);

/*!
  * shared v10.0.5
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
/**
 * Original Utilities
 * written by kazuya kawaguchi
 */
const inBrowser = typeof window !== 'undefined';
let mark;
let measure;
if (false) {}
const RE_ARGS = /\{([0-9a-zA-Z]+)\}/g;
/* eslint-disable */
function format(message, ...args) {
  if (args.length === 1 && isObject(args[0])) {
    args = args[0];
  }
  if (!args || !args.hasOwnProperty) {
    args = {};
  }
  return message.replace(RE_ARGS, (match, identifier) => {
    return args.hasOwnProperty(identifier) ? args[identifier] : '';
  });
}
const makeSymbol = (name, shareable = false) => !shareable ? Symbol(name) : Symbol.for(name);
const generateFormatCacheKey = (locale, key, source) => friendlyJSONstringify({
  l: locale,
  k: key,
  s: source
});
const friendlyJSONstringify = json => JSON.stringify(json).replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029').replace(/\u0027/g, '\\u0027');
const isNumber = val => typeof val === 'number' && isFinite(val);
const isDate = val => toTypeString(val) === '[object Date]';
const isRegExp = val => toTypeString(val) === '[object RegExp]';
const isEmptyObject = val => isPlainObject(val) && Object.keys(val).length === 0;
const assign = Object.assign;
const _create = Object.create;
const create = (obj = null) => _create(obj);
let _globalThis;
const getGlobalThis = () => {
  // prettier-ignore
  return _globalThis || (_globalThis = typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : create());
};
function escapeHtml(rawText) {
  return rawText.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}
const hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
/* eslint-enable */
/**
 * Useful Utilities By Evan you
 * Modified by kazuya kawaguchi
 * MIT License
 * https://github.com/vuejs/vue-next/blob/master/packages/shared/src/index.ts
 * https://github.com/vuejs/vue-next/blob/master/packages/shared/src/codeframe.ts
 */
const isArray = Array.isArray;
const isFunction = val => typeof val === 'function';
const isString = val => typeof val === 'string';
const isBoolean = val => typeof val === 'boolean';
const isSymbol = val => typeof val === 'symbol';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isObject = val => val !== null && typeof val === 'object';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isPromise = val => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = value => objectToString.call(value);
const isPlainObject = val => toTypeString(val) === '[object Object]';
// for converting list and named values to displayed strings.
const toDisplayString = val => {
  return val == null ? '' : isArray(val) || isPlainObject(val) && val.toString === objectToString ? JSON.stringify(val, null, 2) : String(val);
};
function join(items, separator = '') {
  return items.reduce((str, item, index) => index === 0 ? str + item : str + separator + item, '');
}
const RANGE = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
  const lines = source.split(/\r?\n/);
  let count = 0;
  const res = [];
  for (let i = 0; i < lines.length; i++) {
    count += lines[i].length + 1;
    if (count >= start) {
      for (let j = i - RANGE; j <= i + RANGE || end > count; j++) {
        if (j < 0 || j >= lines.length) continue;
        const line = j + 1;
        res.push(`${line}${' '.repeat(3 - String(line).length)}|  ${lines[j]}`);
        const lineLength = lines[j].length;
        if (j === i) {
          // push underline
          const pad = start - (count - lineLength) + 1;
          const length = Math.max(1, end > count ? lineLength - pad : end - start);
          res.push(`   |  ` + ' '.repeat(pad) + '^'.repeat(length));
        } else if (j > i) {
          if (end > count) {
            const length = Math.max(Math.min(end - count, lineLength), 1);
            res.push(`   |  ` + '^'.repeat(length));
          }
          count += lineLength + 1;
        }
      }
      break;
    }
  }
  return res.join('\n');
}
function warn(msg, err) {
  if (typeof console !== 'undefined') {
    console.warn(`[intlify] ` + msg);
    /* istanbul ignore if */
    if (err) {
      console.warn(err.stack);
    }
  }
}
const hasWarned = {};
function warnOnce(msg) {
  if (!hasWarned[msg]) {
    hasWarned[msg] = true;
    warn(msg);
  }
}

/**
 * Event emitter, forked from the below:
 * - original repository url: https://github.com/developit/mitt
 * - code url: https://github.com/developit/mitt/blob/master/src/index.ts
 * - author: Jason Miller (https://github.com/developit)
 * - license: MIT
 */
/**
 * Create a event emitter
 *
 * @returns An event emitter
 */
function createEmitter() {
  const events = new Map();
  const emitter = {
    events,
    on(event, handler) {
      const handlers = events.get(event);
      const added = handlers && handlers.push(handler);
      if (!added) {
        events.set(event, [handler]);
      }
    },
    off(event, handler) {
      const handlers = events.get(event);
      if (handlers) {
        handlers.splice(handlers.indexOf(handler) >>> 0, 1);
      }
    },
    emit(event, payload) {
      (events.get(event) || []).slice().map(handler => handler(payload));
      (events.get('*') || []).slice().map(handler => handler(event, payload));
    }
  };
  return emitter;
}
const isNotObjectOrIsArray = val => !isObject(val) || isArray(val);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function deepCopy(src, des) {
  // src and des should both be objects, and none of them can be a array
  if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) {
    throw new Error('Invalid value');
  }
  const stack = [{
    src,
    des
  }];
  while (stack.length) {
    const {
      src,
      des
    } = stack.pop();
    // using `Object.keys` which skips prototype properties
    Object.keys(src).forEach(key => {
      if (key === '__proto__') {
        return;
      }
      // if src[key] is an object/array, set des[key]
      // to empty object/array to prevent setting by reference
      if (isObject(src[key]) && !isObject(des[key])) {
        des[key] = Array.isArray(src[key]) ? [] : create();
      }
      if (isNotObjectOrIsArray(des[key]) || isNotObjectOrIsArray(src[key])) {
        // replace with src[key] when:
        // src[key] or des[key] is not an object, or
        // src[key] or des[key] is an array
        des[key] = src[key];
      } else {
        // src[key] and des[key] are both objects, merge them
        stack.push({
          src: src[key],
          des: des[key]
        });
      }
    });
  }
}


/***/ })

}]);