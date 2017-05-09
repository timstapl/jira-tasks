module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var bind = __webpack_require__(12);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is a Node Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Node Buffer, otherwise false
 */
function isBuffer(val) {
  return typeof Buffer !== 'undefined' && Buffer.isBuffer && Buffer.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return typeof FormData !== 'undefined' && val instanceof FormData;
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge() /* obj1, obj2, obj3, ... */{
  var result = {};
  function assignValue(val, key) {
    if (_typeof(result[key]) === 'object' && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(60)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(10);

/**
 * Create an Error with the specified message, config, error code, and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, response);
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(49);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(37);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(36);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) {/* Ignore */}
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */

function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The error.
 */

module.exports = function enhanceError(error, config, code, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.response = response;
  return error;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(6);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError('Request failed with status code ' + response.status, response.config, null, response));
  }
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(52);

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0,
      i;

  for (i in namespace) {
    hash = (hash << 5) - hash + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var url = __webpack_require__(19);
var assert = __webpack_require__(80);
var http = __webpack_require__(17);
var https = __webpack_require__(18);
var Writable = __webpack_require__(85).Writable;
var debug = __webpack_require__(54)('follow-redirects');

var nativeProtocols = { 'http:': http, 'https:': https };
var schemes = {};
var _exports = module.exports = {
	maxRedirects: 21
};
// RFC7231§4.2.1: Of the request methods defined by this specification,
// the GET, HEAD, OPTIONS, and TRACE methods are defined to be safe.
var safeMethods = { GET: true, HEAD: true, OPTIONS: true, TRACE: true };

// Create handlers that pass events from native requests
var eventHandlers = Object.create(null);
['abort', 'aborted', 'error', 'socket'].forEach(function (event) {
	eventHandlers[event] = function (arg) {
		this._redirectable.emit(event, arg);
	};
});

// An HTTP(S) request that can be redirected
function RedirectableRequest(options, responseCallback) {
	// Initialize the request
	Writable.call(this);
	this._options = options;
	this._redirectCount = 0;
	this._bufferedWrites = [];

	// Attach a callback if passed
	if (responseCallback) {
		this.on('response', responseCallback);
	}

	// React to responses of native requests
	var self = this;
	this._onNativeResponse = function (response) {
		self._processResponse(response);
	};

	// Perform the first request
	this._performRequest();
}
RedirectableRequest.prototype = Object.create(Writable.prototype);

// Executes the next native request (initial or redirect)
RedirectableRequest.prototype._performRequest = function () {
	// If specified, use the agent corresponding to the protocol
	// (HTTP and HTTPS use different types of agents)
	var protocol = this._options.protocol;
	if (this._options.agents) {
		this._options.agent = this._options.agents[schemes[protocol]];
	}

	// Create the native request
	var nativeProtocol = nativeProtocols[this._options.protocol];
	var request = this._currentRequest = nativeProtocol.request(this._options, this._onNativeResponse);
	this._currentUrl = url.format(this._options);

	// Set up event handlers
	request._redirectable = this;
	for (var event in eventHandlers) {
		/* istanbul ignore else */
		if (event) {
			request.on(event, eventHandlers[event]);
		}
	}

	// End a redirected request
	// (The first request must be ended explicitly with RedirectableRequest#end)
	if (this._isRedirect) {
		// If the request doesn't have en entity, end directly.
		var bufferedWrites = this._bufferedWrites;
		if (bufferedWrites.length === 0) {
			request.end();
			// Otherwise, write the request entity and end afterwards.
		} else {
			var i = 0;
			(function writeNext() {
				if (i < bufferedWrites.length) {
					var bufferedWrite = bufferedWrites[i++];
					request.write(bufferedWrite.data, bufferedWrite.encoding, writeNext);
				} else {
					request.end();
				}
			})();
		}
	}
};

// Processes a response from the current native request
RedirectableRequest.prototype._processResponse = function (response) {
	// RFC7231§6.4: The 3xx (Redirection) class of status code indicates
	// that further action needs to be taken by the user agent in order to
	// fulfill the request. If a Location header field is provided,
	// the user agent MAY automatically redirect its request to the URI
	// referenced by the Location field value,
	// even if the specific status code is not understood.
	var location = response.headers.location;
	if (location && this._options.followRedirects !== false && response.statusCode >= 300 && response.statusCode < 400) {
		// RFC7231§6.4: A client SHOULD detect and intervene
		// in cyclical redirections (i.e., "infinite" redirection loops).
		if (++this._redirectCount > this._options.maxRedirects) {
			return this.emit('error', new Error('Max redirects exceeded.'));
		}

		// RFC7231§6.4: Automatic redirection needs to done with
		// care for methods not known to be safe […],
		// since the user might not wish to redirect an unsafe request.
		// RFC7231§6.4.7: The 307 (Temporary Redirect) status code indicates
		// that the target resource resides temporarily under a different URI
		// and the user agent MUST NOT change the request method
		// if it performs an automatic redirection to that URI.
		var header;
		var headers = this._options.headers;
		if (response.statusCode !== 307 && !(this._options.method in safeMethods)) {
			this._options.method = 'GET';
			// Drop a possible entity and headers related to it
			this._bufferedWrites = [];
			for (header in headers) {
				if (/^content-/i.test(header)) {
					delete headers[header];
				}
			}
		}

		// Drop the Host header, as the redirect might lead to a different host
		if (!this._isRedirect) {
			for (header in headers) {
				if (/^host$/i.test(header)) {
					delete headers[header];
				}
			}
		}

		// Perform the redirected request
		var redirectUrl = url.resolve(this._currentUrl, location);
		debug('redirecting to', redirectUrl);
		Object.assign(this._options, url.parse(redirectUrl));
		this._isRedirect = true;
		this._performRequest();
	} else {
		// The response is not a redirect; return it as-is
		response.responseUrl = this._currentUrl;
		this.emit('response', response);

		// Clean up
		delete this._options;
		delete this._bufferedWrites;
	}
};

// Aborts the current native request
RedirectableRequest.prototype.abort = function () {
	this._currentRequest.abort();
};

// Flushes the headers of the current native request
RedirectableRequest.prototype.flushHeaders = function () {
	this._currentRequest.flushHeaders();
};

// Sets the noDelay option of the current native request
RedirectableRequest.prototype.setNoDelay = function (noDelay) {
	this._currentRequest.setNoDelay(noDelay);
};

// Sets the socketKeepAlive option of the current native request
RedirectableRequest.prototype.setSocketKeepAlive = function (enable, initialDelay) {
	this._currentRequest.setSocketKeepAlive(enable, initialDelay);
};

// Sets the timeout option of the current native request
RedirectableRequest.prototype.setTimeout = function (timeout, callback) {
	this._currentRequest.setTimeout(timeout, callback);
};

// Writes buffered data to the current native request
RedirectableRequest.prototype._write = function (data, encoding, callback) {
	this._currentRequest.write(data, encoding, callback);
	this._bufferedWrites.push({ data: data, encoding: encoding });
};

// Ends the current native request
RedirectableRequest.prototype.end = function (data, encoding, callback) {
	this._currentRequest.end(data, encoding, callback);
	if (data) {
		this._bufferedWrites.push({ data: data, encoding: encoding });
	}
};

// Export a redirecting wrapper for each native protocol
Object.keys(nativeProtocols).forEach(function (protocol) {
	var scheme = schemes[protocol] = protocol.substr(0, protocol.length - 1);
	var nativeProtocol = nativeProtocols[protocol];
	var wrappedProtocol = _exports[scheme] = Object.create(nativeProtocol);

	// Executes an HTTP request, following redirects
	wrappedProtocol.request = function (options, callback) {
		if (typeof options === 'string') {
			options = url.parse(options);
			options.maxRedirects = _exports.maxRedirects;
		} else {
			options = Object.assign({
				maxRedirects: _exports.maxRedirects,
				protocol: protocol
			}, options);
		}
		assert.equal(options.protocol, protocol, 'protocol mismatch');
		debug('options', options);

		return new RedirectableRequest(options, callback);
	};

	// Executes a GET request, following redirects
	wrappedProtocol.get = function (options, callback) {
		var request = wrappedProtocol.request(options, callback);
		request.end();
		return request;
	};
});

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
  * vue-router v2.5.3
  * (c) 2017 Evan You
  * @license MIT
  */
/*  */

function assert(condition, message) {
  if (!condition) {
    throw new Error("[vue-router] " + message);
  }
}

function warn(condition, message) {
  if (false) {
    typeof console !== 'undefined' && console.warn("[vue-router] " + message);
  }
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render(_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children);
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h();
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (val && current !== vm || !val && current === vm) {
        matched.instances[name] = val;
      }
    }

    // also regiseter instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    data.props = resolveProps(route, matched.props && matched.props[name]);

    return h(component, data, children);
  }
};

function resolveProps(route, config) {
  switch (typeof config === 'undefined' ? 'undefined' : _typeof(config)) {
    case 'undefined':
      return;
    case 'object':
      return config;
    case 'function':
      return config(route);
    case 'boolean':
      return config ? route.params : undefined;
    default:
      if (false) {
        warn(false, "props in \"" + route.path + "\" is a " + (typeof config === 'undefined' ? 'undefined' : _typeof(config)) + ", " + "expecting an object, function or boolean.");
      }
  }
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {
  return '%' + c.charCodeAt(0).toString(16);
};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {
  return encodeURIComponent(str).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ',');
};

var decode = decodeURIComponent;

function resolveQuery(query, extraQuery, _parseQuery) {
  if (extraQuery === void 0) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    "production" !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    var val = extraQuery[key];
    parsedQuery[key] = Array.isArray(val) ? val.slice() : val;
  }
  return parsedQuery;
}

function parseQuery(query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res;
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0 ? decode(parts.join('=')) : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res;
}

function stringifyQuery(obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encode(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.slice().forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&');
    }

    return encode(key) + '=' + encode(val);
  }).filter(function (x) {
    return x.length > 0;
  }).join('&') : null;
  return res ? "?" + res : '';
}

/*  */

var trailingSlashRE = /\/?$/;

function createRoute(record, location, redirectedFrom, router) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;
  var route = {
    name: location.name || record && record.name,
    meta: record && record.meta || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: location.query || {},
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route);
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch(record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res;
}

function getFullPath(ref, _stringifyQuery) {
  var path = ref.path;
  var query = ref.query;if (query === void 0) query = {};
  var hash = ref.hash;if (hash === void 0) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash;
}

function isSameRoute(a, b) {
  if (b === START) {
    return a === b;
  } else if (!b) {
    return false;
  } else if (a.path && b.path) {
    return a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') && a.hash === b.hash && isObjectEqual(a.query, b.query);
  } else if (a.name && b.name) {
    return a.name === b.name && a.hash === b.hash && isObjectEqual(a.query, b.query) && isObjectEqual(a.params, b.params);
  } else {
    return false;
  }
}

function isObjectEqual(a, b) {
  if (a === void 0) a = {};
  if (b === void 0) b = {};

  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false;
  }
  return aKeys.every(function (key) {
    return String(a[key]) === String(b[key]);
  });
}

function isIncludedRoute(current, target) {
  return current.path.replace(trailingSlashRE, '/').indexOf(target.path.replace(trailingSlashRE, '/')) === 0 && (!target.hash || current.hash === target.hash) && queryIncludes(current.query, target.query);
}

function queryIncludes(current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false;
    }
  }
  return true;
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render(h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null ? 'router-link-active' : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null ? 'router-link-exact-active' : globalExactActiveClass;
    var activeClass = this.activeClass == null ? activeClassFallback : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null ? exactActiveClassFallback : this.exactActiveClass;
    var compareTarget = location.path ? createRoute(null, location, null, router) : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact ? classes[exactActiveClass] : isIncludedRoute(current, compareTarget);

    var handler = function handler(e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) {
        on[e] = handler;
      });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default);
  }
};

function guardEvent(e) {
  // don't redirect with control keys
  if (e.metaKey || e.ctrlKey || e.shiftKey) {
    return;
  }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) {
    return;
  }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) {
    return;
  }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) {
      return;
    }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true;
}

function findAnchor(children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child;
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child;
      }
    }
  }
}

var _Vue;

function install(Vue) {
  if (install.installed) {
    return;
  }
  install.installed = true;

  _Vue = Vue;

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get() {
      return this.$root._router;
    }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get() {
      return this.$root._route;
    }
  });

  var isDef = function isDef(v) {
    return v !== undefined;
  };

  var registerInstance = function registerInstance(vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate() {
      if (isDef(this.$options.router)) {
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed() {
      registerInstance(this);
    }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath(relative, base, append) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative;
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative;
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/');
}

function parsePath(path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  };
}

function cleanPath(path) {
  return path.replace(/\/\//g, '/');
}

var index$1 = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var index = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',
// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse(str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue;
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens;
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile(str, options) {
  return tokensToFunction(parse(str, options));
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty(str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk(str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (_typeof(tokens[i]) === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue;
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (index$1(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup(group) {
  return group.replace(/([=!:$\/()])/g, '\\$1');
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys(re, keys) {
  re.keys = keys;
  return re;
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags(options) {
  return options.sensitive ? '' : 'i';
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp(path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys);
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp(path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys);
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp(path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options);
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp(tokens, keys, options) {
  if (!index$1(keys)) {
    options = /** @type {!Object} */keys || options;
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys);
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp(path, keys, options) {
  if (!index$1(keys)) {
    options = /** @type {!Object} */keys || options;
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */keys);
  }

  if (index$1(path)) {
    return arrayToRegexp( /** @type {!Array} */path, /** @type {!Array} */keys, options);
  }

  return stringToRegexp( /** @type {string} */path, /** @type {!Array} */keys, options);
}

index.parse = parse_1;
index.compile = compile_1;
index.tokensToFunction = tokensToFunction_1;
index.tokensToRegExp = tokensToRegExp_1;

/*  */

var regexpCompileCache = Object.create(null);

function fillParams(path, params, routeMsg) {
  try {
    var filler = regexpCompileCache[path] || (regexpCompileCache[path] = index.compile(path));
    return filler(params || {}, { pretty: true });
  } catch (e) {
    if (false) {
      warn(false, "missing param for " + routeMsg + ": " + e.message);
    }
    return '';
  }
}

/*  */

function createRouteMap(routes, oldPathList, oldPathMap, oldNameMap) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  var pathMap = oldPathMap || Object.create(null);
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  };
}

function addRouteRecord(pathList, pathMap, nameMap, route, parent, matchAs) {
  var path = route.path;
  var name = route.name;
  if (false) {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(typeof route.component !== 'string', "route config \"component\" for path: " + String(path || name) + " cannot be a " + "string id. Use an actual component instead.");
  }

  var normalizedPath = normalizePath(path, parent);
  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null ? {} : route.components ? route.props : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (false) {
      if (route.name && route.children.some(function (child) {
        return (/^\/?$/.test(child.path)
        );
      })) {
        warn(false, "Named Route '" + route.name + "' has a default child route. " + "When navigating to this named route (:to=\"{name: '" + route.name + "'\"), " + "the default child route will not be rendered. Remove the name from " + "this route and use the name of the default child route for named " + "links instead.");
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs ? cleanPath(matchAs + "/" + child.path) : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    if (Array.isArray(route.alias)) {
      route.alias.forEach(function (alias) {
        var aliasRoute = {
          path: alias,
          children: route.children
        };
        addRouteRecord(pathList, pathMap, nameMap, aliasRoute, parent, record.path);
      });
    } else {
      var aliasRoute = {
        path: route.alias,
        children: route.children
      };
      addRouteRecord(pathList, pathMap, nameMap, aliasRoute, parent, record.path);
    }
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if (false) {
      warn(false, "Duplicate named routes definition: " + "{ name: \"" + name + "\", path: \"" + record.path + "\" }");
    }
  }
}

function compileRouteRegex(path) {
  var regex = index(path);
  if (false) {
    var keys = {};
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], "Duplicate param keys in route with path: \"" + path + "\"");
      keys[key.name] = true;
    });
  }
  return regex;
}

function normalizePath(path, parent) {
  path = path.replace(/\/$/, '');
  if (path[0] === '/') {
    return path;
  }
  if (parent == null) {
    return path;
  }
  return cleanPath(parent.path + "/" + path);
}

/*  */

function normalizeLocation(raw, current, append, router) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next;
  }

  // relative params
  if (!next.path && next.params && current) {
    next = assign({}, next);
    next._normalized = true;
    var params = assign(assign({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, "path " + current.path);
    } else if (false) {
      warn(false, "relative params navigation requires a current route.");
    }
    return next;
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = current && current.path || '/';
  var path = parsedPath.path ? resolvePath(parsedPath.path, basePath, append || next.append) : basePath;

  var query = resolveQuery(parsedPath.query, next.query, router && router.options.parseQuery);

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  };
}

function assign(a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a;
}

/*  */

function createMatcher(routes, router) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes(routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match(raw, currentRoute, redirectedFrom) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (false) {
        warn(record, "Route with name '" + name + "' does not exist");
      }
      var paramNames = record.regex.keys.filter(function (key) {
        return !key.optional;
      }).map(function (key) {
        return key.name;
      });

      if (_typeof(location.params) !== 'object') {
        location.params = {};
      }

      if (currentRoute && _typeof(currentRoute.params) === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, "named route \"" + name + "\"");
        return _createRoute(record, location, redirectedFrom);
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom);
        }
      }
    }
    // no match
    return _createRoute(null, location);
  }

  function redirect(record, location) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function' ? originalRedirect(createRoute(record, location, null, router)) : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || (typeof redirect === 'undefined' ? 'undefined' : _typeof(redirect)) !== 'object') {
      if (false) {
        warn(false, "invalid redirect option: " + JSON.stringify(redirect));
      }
      return _createRoute(null, location);
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (false) {
        assert(targetRecord, "redirect failed: named route \"" + name + "\" not found.");
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location);
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, "redirect route with path \"" + rawPath + "\"");
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location);
    } else {
      if (false) {
        warn(false, "invalid redirect option: " + JSON.stringify(redirect));
      }
      return _createRoute(null, location);
    }
  }

  function alias(record, location, matchAs) {
    var aliasedPath = fillParams(matchAs, location.params, "aliased route with path \"" + matchAs + "\"");
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location);
    }
    return _createRoute(null, location);
  }

  function _createRoute(record, location, redirectedFrom) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location);
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs);
    }
    return createRoute(record, location, redirectedFrom, router);
  }

  return {
    match: match,
    addRoutes: addRoutes
  };
}

function matchRoute(regex, path, params) {
  var m = path.match(regex);

  if (!m) {
    return false;
  } else if (!params) {
    return true;
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      params[key.name] = val;
    }
  }

  return true;
}

function resolveRecordPath(path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true);
}

/*  */

var positionStore = Object.create(null);

function setupScroll() {
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll(router, to, from, isPop) {
  if (!router.app) {
    return;
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return;
  }

  if (false) {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);
    if (!shouldScroll) {
      return;
    }
    var isObject = (typeof shouldScroll === 'undefined' ? 'undefined' : _typeof(shouldScroll)) === 'object';
    if (isObject && typeof shouldScroll.selector === 'string') {
      var el = document.querySelector(shouldScroll.selector);
      if (el) {
        position = getElementPosition(el);
      } else if (isValidPosition(shouldScroll)) {
        position = normalizePosition(shouldScroll);
      }
    } else if (isObject && isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }

    if (position) {
      window.scrollTo(position.x, position.y);
    }
  });
}

function saveScrollPosition() {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition() {
  var key = getStateKey();
  if (key) {
    return positionStore[key];
  }
}

function getElementPosition(el) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left,
    y: elRect.top - docRect.top
  };
}

function isValidPosition(obj) {
  return isNumber(obj.x) || isNumber(obj.y);
}

function normalizePosition(obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  };
}

function isNumber(v) {
  return typeof v === 'number';
}

/*  */

var supportsPushState = inBrowser && function () {
  var ua = window.navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
    return false;
  }

  return window.history && 'pushState' in window.history;
}();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now ? window.performance : Date;

var _key = genKey();

function genKey() {
  return Time.now().toFixed(3);
}

function getStateKey() {
  return _key;
}

function setStateKey(key) {
  _key = key;
}

function pushState(url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState(url) {
  pushState(url, true);
}

/*  */

function runQueue(queue, fn, cb) {
  var step = function step(index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

var History = function History(router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen(cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady(cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError(errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo(location, onComplete, onAbort) {
  var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) {
        cb(route);
      });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) {
        cb(err);
      });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition(route, onComplete, onAbort) {
  var this$1 = this;

  var current = this.current;
  var abort = function abort(err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) {
          cb(err);
        });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (isSameRoute(route, current) &&
  // in the case the route map has been dynamically appended to
  route.matched.length === current.matched.length) {
    this.ensureURL();
    return abort();
  }

  var ref = resolveQueue(this.current.matched, route.matched);
  var updated = ref.updated;
  var deactivated = ref.deactivated;
  var activated = ref.activated;

  var queue = [].concat(
  // in-component leave guards
  extractLeaveGuards(deactivated),
  // global before hooks
  this.router.beforeHooks,
  // in-component update hooks
  extractUpdateHooks(updated),
  // in-config enter guards
  activated.map(function (m) {
    return m.beforeEnter;
  }),
  // async components
  resolveAsyncComponents(activated));

  this.pending = route;
  var iterator = function iterator(hook, next) {
    if (this$1.pending !== route) {
      return abort();
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (typeof to === 'string' || (typeof to === 'undefined' ? 'undefined' : _typeof(to)) === 'object' && (typeof to.path === 'string' || typeof to.name === 'string')) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if ((typeof to === 'undefined' ? 'undefined' : _typeof(to)) === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function isValid() {
      return this$1.current === route;
    };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort();
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) {
            cb();
          });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute(route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase(base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = baseEl && baseEl.getAttribute('href') || '/';
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '');
}

function resolveQueue(current, next) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break;
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  };
}

function extractGuards(records, name, bind, reverse) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard) ? guard.map(function (guard) {
        return bind(guard, instance, match, key);
      }) : bind(guard, instance, match, key);
    }
  });
  return flatten(reverse ? guards.reverse() : guards);
}

function extractGuard(def, key) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key];
}

function extractLeaveGuards(deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true);
}

function extractUpdateHooks(updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard);
}

function bindGuard(guard, instance) {
  if (instance) {
    return function boundRouteGuard() {
      return guard.apply(instance, arguments);
    };
  }
}

function extractEnterGuards(activated, cbs, isValid) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid);
  });
}

function bindEnterGuard(guard, match, key, cbs, isValid) {
  return function routeEnterGuard(to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    });
  };
}

function poll(cb, // somehow flow cannot infer this is a function
instances, key, isValid) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

function resolveAsyncComponents(matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function' ? resolvedDef : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          "production" !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason) ? reason : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) {
      next();
    }
  };
}

function flatMapComponents(matched, fn) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return fn(m.components[key], m.instances[key], m, key);
    });
  }));
}

function flatten(arr) {
  return Array.prototype.concat.apply([], arr);
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    return fn.apply(this, arguments);
  };
}

function isError(err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1;
}

/*  */

var HTML5History = function (History$$1) {
  function HTML5History(router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    window.addEventListener('popstate', function (e) {
      this$1.transitionTo(getLocation(this$1.base), function (route) {
        if (expectScroll) {
          handleScroll(router, route, this$1.current, true);
        }
      });
    });
  }

  if (History$$1) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create(History$$1 && History$$1.prototype);
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go(n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push(location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace(location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL(push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation() {
    return getLocation(this.base);
  };

  return HTML5History;
}(History);

function getLocation(base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash;
}

/*  */

var HashHistory = function (History$$1) {
  function HashHistory(router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return;
    }
    ensureSlash();
  }

  if (History$$1) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create(History$$1 && History$$1.prototype);
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners() {
    var this$1 = this;

    window.addEventListener('hashchange', function () {
      if (!ensureSlash()) {
        return;
      }
      this$1.transitionTo(getHash(), function (route) {
        replaceHash(route.fullPath);
      });
    });
  };

  HashHistory.prototype.push = function push(location, onComplete, onAbort) {
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace(location, onComplete, onAbort) {
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go(n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL(push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation() {
    return getHash();
  };

  return HashHistory;
}(History);

function checkFallback(base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(cleanPath(base + '/#' + location));
    return true;
  }
}

function ensureSlash() {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true;
  }
  replaceHash('/' + path);
  return false;
}

function getHash() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1);
}

function pushHash(path) {
  window.location.hash = path;
}

function replaceHash(path) {
  var i = window.location.href.indexOf('#');
  window.location.replace(window.location.href.slice(0, i >= 0 ? i : 0) + '#' + path);
}

/*  */

var AbstractHistory = function (History$$1) {
  function AbstractHistory(router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if (History$$1) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create(History$$1 && History$$1.prototype);
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push(location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace(location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go(n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return;
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation() {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/';
  };

  AbstractHistory.prototype.ensureURL = function ensureURL() {
    // noop
  };

  return AbstractHistory;
}(History);

/*  */

var VueRouter = function VueRouter(options) {
  if (options === void 0) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break;
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break;
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break;
    default:
      if (false) {
        assert(false, "invalid mode: " + mode);
      }
  }
};

var prototypeAccessors = { currentRoute: {} };

VueRouter.prototype.match = function match(raw, current, redirectedFrom) {
  return this.matcher.match(raw, current, redirectedFrom);
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current;
};

VueRouter.prototype.init = function init(app /* Vue component instance */) {
  var this$1 = this;

  "production" !== 'production' && assert(install.installed, "not installed. Make sure to call `Vue.use(VueRouter)` " + "before creating root instance.");

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return;
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function setupHashListener() {
      history.setupListeners();
    };
    history.transitionTo(history.getCurrentLocation(), setupHashListener, setupHashListener);
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach(fn) {
  return registerHook(this.beforeHooks, fn);
};

VueRouter.prototype.beforeResolve = function beforeResolve(fn) {
  return registerHook(this.resolveHooks, fn);
};

VueRouter.prototype.afterEach = function afterEach(fn) {
  return registerHook(this.afterHooks, fn);
};

VueRouter.prototype.onReady = function onReady(cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError(errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push(location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace(location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go(n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back() {
  this.go(-1);
};

VueRouter.prototype.forward = function forward() {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents(to) {
  var route = to ? to.matched ? to : this.resolve(to).route : this.currentRoute;
  if (!route) {
    return [];
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key];
    });
  }));
};

VueRouter.prototype.resolve = function resolve(to, current, append) {
  var location = normalizeLocation(to, current || this.history.current, append, this);
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  };
};

VueRouter.prototype.addRoutes = function addRoutes(routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties(VueRouter.prototype, prototypeAccessors);

function registerHook(list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) {
      list.splice(i, 1);
    }
  };
}

function createHref(base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path;
}

VueRouter.install = install;
VueRouter.version = '2.5.3';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

exports.default = VueRouter;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(78)
__webpack_require__(79)

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(59),
  /* template */
  __webpack_require__(74),
  /* scopeId */
  "data-v-7b818124",
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\retro\\Projects\\jira-tasks\\lib\\root.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] root.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7b818124", Component.options)
  } else {
    hotAPI.reload("data-v-7b818124", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(4);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
// Plugins
//
__webpack_require__(23);
__webpack_require__(22);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(4);

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = __webpack_require__(16);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(4);

var _vue2 = _interopRequireDefault(_vue);

var _vuex = __webpack_require__(3);

var _vuex2 = _interopRequireDefault(_vuex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vuex2.default);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _tasks = __webpack_require__(70);

var _tasks2 = _interopRequireDefault(_tasks);

var _settings = __webpack_require__(68);

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    //
    // Routes
    //
    routes: [
    //
    // Default redirect
    //
    {
        path: '/',
        redirect: '/tasks'
    },
    //
    // Home
    //
    {
        path: '/tasks',
        component: _tasks2.default
    },
    //
    // About
    //
    {
        path: '/settings',
        component: _settings2.default
    }]
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vuex = __webpack_require__(3);

var _vuex2 = _interopRequireDefault(_vuex);

var _settings = __webpack_require__(26);

var _settings2 = _interopRequireDefault(_settings);

var _tasks = __webpack_require__(29);

var _tasks2 = _interopRequireDefault(_tasks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = atom.inDevMode();

var store = new _vuex2.default.Store({
    modules: {
        settings: _settings2.default,
        tasks: _tasks2.default
    },
    strict: debug
});

module.exports = store;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    namespaced: true,
    state: {
        url: '',
        username: '',
        password: ''
    },
    mutations: {
        setUrl: function setUrl(state, url) {
            state.url = url;
        },
        setUsername: function setUsername(state, username) {
            state.username = username;
        },
        setPassword: function setPassword(state, password) {
            state.password = password;
        }
    },
    actions: {
        initialize: function initialize(_ref) {
            var commit = _ref.commit;

            commit('setUrl', atom.config.get("jira-tasks.jiraUrl"));
            commit('setUsername', atom.config.get("jira-tasks.username"));
            commit('setPassword', atom.config.get("jira-tasks.password"));
        }
    }
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _repository = __webpack_require__(31);

var Repository = _interopRequireWildcard(_repository);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {
    initialize: function initialize(_ref) {
        var commit = _ref.commit,
            rootState = _ref.rootState;

        Repository.fetchAllTasksForUser(rootState.settings.username, rootState.settings.password, rootState.settings.url).then(function (response) {
            commit('setTasks', response.data.issues);
        });
    },
    getTaskTransitions: function getTaskTransitions(_ref2, task) {
        var commit = _ref2.commit,
            rootState = _ref2.rootState;

        return new Promise(function (resolve, reject) {
            Repository.fetchTaskTransitions(rootState.settings.username, rootState.settings.password, rootState.settings.url, task.key).then(function (response) {
                var transitions = response.data.transitions;
                commit('setTaskTransitions', { task: task, transitions: transitions });
                resolve();
            });
        });
    },
    transitionTask: function transitionTask(_ref3, _ref4) {
        var commit = _ref3.commit,
            dispatch = _ref3.dispatch,
            rootState = _ref3.rootState;
        var task = _ref4.task,
            transition = _ref4.transition;

        Repository.executeTaskTransisiton(rootState.settings.username, rootState.settings.password, rootState.settings.url, task.key, transition).then(function (response) {
            dispatch('updateTask', task);
        });
    },
    updateTask: function updateTask(_ref5, task) {
        var commit = _ref5.commit,
            rootState = _ref5.rootState;

        Repository.fetchTask(rootState.settings.username, rootState.settings.password, rootState.settings.url, task.key).then(function (response) {
            commit('updateTask', response.data);
        });
    }
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _state = __webpack_require__(32);

var _state2 = _interopRequireDefault(_state);

var _mutations = __webpack_require__(30);

var _mutations2 = _interopRequireDefault(_mutations);

var _actions = __webpack_require__(27);

var _actions2 = _interopRequireDefault(_actions);

var _getters = __webpack_require__(28);

var _getters2 = _interopRequireDefault(_getters);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    namespaced: true,
    state: _state2.default,
    mutations: _mutations2.default,
    actions: _actions2.default,
    getters: _getters2.default
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    setTasks: function setTasks(state, tasks) {
        state.tasks = tasks.map(function (task) {
            return {
                id: task.id,
                key: task.key,
                self: task.self,
                description: task.fields.description,
                summary: task.fields.summary,
                icon: task.fields.issuetype.iconUrl,
                isExpanded: false,
                status: task.fields.status
            };
        });
    },
    updateTask: function updateTask(state, freshTask) {
        var index = void 0;
        state.tasks.forEach(function (task, i) {
            if (task.id === freshTask.id) {
                index = i;
            }
        });

        if (typeof index != 'undefined') {
            // Reset all initial properties of the task.
            // I know most of these are unlikely to change, but seems better safe
            // than sorry sense we already refetched all of it.
            state.tasks[index].id = freshTask.id;
            state.tasks[index].key = freshTask.key;
            state.tasks[index].self = freshTask.self;
            state.tasks[index].description = freshTask.fields.description;
            state.tasks[index].summary = freshTask.fields.summary;
            state.tasks[index].status = freshTask.fields.status;
            state.tasks[index].icon = freshTask.fields.issuetype.iconUrl;
        }
    },
    setTaskTransitions: function setTaskTransitions(state, _ref) {
        var target = _ref.task,
            transitions = _ref.transitions;

        state.tasks.forEach(function (task) {
            if (task.id === target.id) {
                task.transitions = transitions;
            }
        });
    },
    toggleExpanded: function toggleExpanded(state, _ref2) {
        var id = _ref2.id;

        state.tasks.forEach(function (task) {
            if (task.id === id) {
                task.isExpanded = !task.isExpanded;
            }
        });
    }
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.executeTaskTransisiton = exports.fetchTaskTransitions = exports.fetchTask = exports.fetchAllTasksForUser = undefined;

var _axios = __webpack_require__(35);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var remote = __webpack_require__(82).remote;
var request = remote.require('request');

var fetchAllTasksForUser = exports.fetchAllTasksForUser = function fetchAllTasksForUser(username, password, url) {
    return _axios2.default.get('https://' + url + '/rest/api/2/search', {
        params: {
            jql: "assignee=currentUser() AND statusCategory not in (Done)",
            startAt: 0,
            maxResults: 10000,
            fields: '*all',
            fieldsByKeys: true
        },
        auth: { username: username, password: password }
    });
};

var fetchTask = exports.fetchTask = function fetchTask(username, password, url, key) {
    return _axios2.default.get('https://' + url + '/rest/api/2/issue/' + key, {
        auth: { username: username, password: password }
    });
};

var fetchTaskTransitions = exports.fetchTaskTransitions = function fetchTaskTransitions(username, password, url, key) {
    return _axios2.default.get('https://' + url + '/rest/api/2/issue/' + key + '/transitions', {
        auth: { username: username, password: password }
    });
};

var executeTaskTransisiton = exports.executeTaskTransisiton = function executeTaskTransisiton(username, password, url, key, transition) {
    return new Promise(function (resolve, reject) {
        var requestOptions = {
            url: 'https://' + url + '/rest/api/latest/issue/' + key + '/transitions',
            method: "POST",
            auth: { username: username, password: password },
            body: {
                transition: {
                    id: transition.id
                }
            },
            json: true
        };

        request(requestOptions, function (error, response, body) {
            resolve(response);
        });
    });
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    tasks: []
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(4);

var _vue2 = _interopRequireDefault(_vue);

var _root = __webpack_require__(20);

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Disable the production warning
//
// Vue deps
//
if (atom.inDevMode()) {
    _vue2.default.config.productionTip = false;
}

module.exports = {
    app: null,
    jiraTasksView: null,

    activate: function activate(state) {
        var _this = this;

        this.app = new _vue2.default(_root2.default);

        atom.commands.add("atom-workspace", {
            "jira-tasks:toggle-view": function jiraTasksToggleView() {
                _this.app.toggle();
            }
        });
    },
    deactivate: function deactivate() {
        this.app.$destroy();
    },
    serialize: function serialize() {
        return {
            isVisible: this.app.$data.isVisible
        };
    },


    config: {
        username: { default: 'username', type: 'string' },
        password: { default: 'guest', type: 'string' },
        jiraUrl: { default: 'jirainstance.atlassian.net', type: 'string' }
    }
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


;(function () {

  var object =  true ? exports : typeof self != 'undefined' ? self : // #8: web workers
  $.global; // #31: ExtendScript

  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

  function InvalidCharacterError(message) {
    this.message = message;
  }
  InvalidCharacterError.prototype = new Error();
  InvalidCharacterError.prototype.name = 'InvalidCharacterError';

  // encoder
  // [https://gist.github.com/999166] by [https://github.com/nignag]
  object.btoa || (object.btoa = function (input) {
    var str = String(input);
    for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars, output = '';
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
      charCode = str.charCodeAt(idx += 3 / 4);
      if (charCode > 0xFF) {
        throw new InvalidCharacterError("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
      }
      block = block << 8 | charCode;
    }
    return output;
  });

  // decoder
  // [https://gist.github.com/1020396] by [https://github.com/atk]
  object.atob || (object.atob = function (input) {
    var str = String(input).replace(/[=]+$/, ''); // #31: ExtendScript bad parse of /=
    if (str.length % 4 == 1) {
      throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.");
    }
    for (
    // initialize result and counters
    var bc = 0, bs, buffer, idx = 0, output = '';
    // get next character
    buffer = str.charAt(idx++);
    // character found in table? initialize bit storage and add its ascii value;
    ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
    // and if not first of each 4 characters,
    // convert the first 8 bits to one ascii character
    bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0) {
      // try to find character in table (0-63, not found => -1)
      buffer = chars.indexOf(buffer);
    }
    return output;
  });
})();

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(38);

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var settle = __webpack_require__(11);
var buildURL = __webpack_require__(13);
var http = __webpack_require__(17);
var https = __webpack_require__(18);
var httpFollow = __webpack_require__(15).http;
var httpsFollow = __webpack_require__(15).https;
var url = __webpack_require__(19);
var zlib = __webpack_require__(88);
var pkg = __webpack_require__(67);
var Buffer = __webpack_require__(81).Buffer;
var createError = __webpack_require__(6);
var enhanceError = __webpack_require__(10);

/*eslint consistent-return:0*/
module.exports = function httpAdapter(config) {
  return new Promise(function dispatchHttpRequest(resolve, reject) {
    var data = config.data;
    var headers = config.headers;
    var timer;
    var aborted = false;

    // Set User-Agent (required by some servers)
    // Only set header if it hasn't been set in config
    // See https://github.com/mzabriskie/axios/issues/69
    if (!headers['User-Agent'] && !headers['user-agent']) {
      headers['User-Agent'] = 'axios/' + pkg.version;
    }

    if (data && !utils.isStream(data)) {
      if (utils.isBuffer(data)) {
        // Nothing to do...
      } else if (utils.isArrayBuffer(data)) {
        data = new Buffer(new Uint8Array(data));
      } else if (utils.isString(data)) {
        data = new Buffer(data, 'utf-8');
      } else {
        return reject(createError('Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream', config));
      }

      // Add Content-Length header if data exists
      headers['Content-Length'] = data.length;
    }

    // HTTP basic authentication
    var auth = undefined;
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      auth = username + ':' + password;
    }

    // Parse url
    var parsed = url.parse(config.url);
    var protocol = parsed.protocol || 'http:';

    if (!auth && parsed.auth) {
      var urlAuth = parsed.auth.split(':');
      var urlUsername = urlAuth[0] || '';
      var urlPassword = urlAuth[1] || '';
      auth = urlUsername + ':' + urlPassword;
    }

    if (auth) {
      delete headers.Authorization;
    }

    var isHttps = protocol === 'https:';
    var agent = isHttps ? config.httpsAgent : config.httpAgent;

    var options = {
      hostname: parsed.hostname,
      port: parsed.port,
      path: buildURL(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, ''),
      method: config.method,
      headers: headers,
      agent: agent,
      auth: auth
    };

    var proxy = config.proxy;
    if (!proxy) {
      var proxyEnv = protocol.slice(0, -1) + '_proxy';
      var proxyUrl = process.env[proxyEnv] || process.env[proxyEnv.toUpperCase()];
      if (proxyUrl) {
        var parsedProxyUrl = url.parse(proxyUrl);
        proxy = {
          host: parsedProxyUrl.hostname,
          port: parsedProxyUrl.port
        };

        if (parsedProxyUrl.auth) {
          var proxyUrlAuth = parsedProxyUrl.auth.split(':');
          proxy.auth = {
            username: proxyUrlAuth[0],
            password: proxyUrlAuth[1]
          };
        }
      }
    }

    if (proxy) {
      options.hostname = proxy.host;
      options.host = proxy.host;
      options.headers.host = parsed.hostname + (parsed.port ? ':' + parsed.port : '');
      options.port = proxy.port;
      options.path = protocol + '//' + parsed.hostname + (parsed.port ? ':' + parsed.port : '') + options.path;

      // Basic proxy authorization
      if (proxy.auth) {
        var base64 = new Buffer(proxy.auth.username + ':' + proxy.auth.password, 'utf8').toString('base64');
        options.headers['Proxy-Authorization'] = 'Basic ' + base64;
      }
    }

    var transport;
    if (config.maxRedirects === 0) {
      transport = isHttps ? https : http;
    } else {
      if (config.maxRedirects) {
        options.maxRedirects = config.maxRedirects;
      }
      transport = isHttps ? httpsFollow : httpFollow;
    }

    // Create the request
    var req = transport.request(options, function handleResponse(res) {
      if (aborted) return;

      // Response has been received so kill timer that handles request timeout
      clearTimeout(timer);
      timer = null;

      // uncompress the response body transparently if required
      var stream = res;
      switch (res.headers['content-encoding']) {
        /*eslint default-case:0*/
        case 'gzip':
        case 'compress':
        case 'deflate':
          // add the unzipper to the body stream processing pipeline
          stream = stream.pipe(zlib.createUnzip());

          // remove the content-encoding in order to not confuse downstream operations
          delete res.headers['content-encoding'];
          break;
      }

      // return the last request in case of redirects
      var lastRequest = res.req || req;

      var response = {
        status: res.statusCode,
        statusText: res.statusMessage,
        headers: res.headers,
        config: config,
        request: lastRequest
      };

      if (config.responseType === 'stream') {
        response.data = stream;
        settle(resolve, reject, response);
      } else {
        var responseBuffer = [];
        stream.on('data', function handleStreamData(chunk) {
          responseBuffer.push(chunk);

          // make sure the content length is not over the maxContentLength if specified
          if (config.maxContentLength > -1 && Buffer.concat(responseBuffer).length > config.maxContentLength) {
            reject(createError('maxContentLength size of ' + config.maxContentLength + ' exceeded', config));
          }
        });

        stream.on('error', function handleStreamError(err) {
          if (aborted) return;
          reject(enhanceError(err, config));
        });

        stream.on('end', function handleStreamEnd() {
          var responseData = Buffer.concat(responseBuffer);
          if (config.responseType !== 'arraybuffer') {
            responseData = responseData.toString('utf8');
          }

          response.data = responseData;
          settle(resolve, reject, response);
        });
      }
    });

    // Handle errors
    req.on('error', function handleRequestError(err) {
      if (aborted) return;
      reject(enhanceError(err, config));
    });

    // Handle request timeout
    if (config.timeout && !timer) {
      timer = setTimeout(function handleRequestTimeout() {
        req.abort();
        reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED'));
        aborted = true;
      }, config.timeout);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (aborted) {
          return;
        }

        req.abort();
        reject(cancel);
        aborted = true;
      });
    }

    // Send the request
    if (utils.isStream(data)) {
      data.pipe(req);
    } else {
      req.end(data);
    }
  });
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var settle = __webpack_require__(11);
var buildURL = __webpack_require__(13);
var parseHeaders = __webpack_require__(50);
var isURLSameOrigin = __webpack_require__(48);
var createError = __webpack_require__(6);
var btoa = typeof window !== 'undefined' && window.btoa && window.btoa.bind(window) || __webpack_require__(44);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ("production" !== 'test' && typeof window !== 'undefined' && window.XDomainRequest && !('withCredentials' in request) && !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || request.readyState !== 4 && !xDomain) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED'));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(46);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(12);
var Axios = __webpack_require__(40);
var defaults = __webpack_require__(7);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(8);
axios.CancelToken = __webpack_require__(39);
axios.isCancel = __webpack_require__(9);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(51);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(8);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(7);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(41);
var dispatchRequest = __webpack_require__(42);
var isAbsoluteURL = __webpack_require__(47);
var combineURLs = __webpack_require__(45);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(43);
var isCancel = __webpack_require__(9);
var defaults = __webpack_require__(7);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(config.data, config.headers, config.transformRequest);

  // Flatten headers
  config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers || {});

  utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
    delete config.headers[method];
  });

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(response.data, response.headers, config.transformResponse);

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
      }
    }

    return Promise.reject(reason);
  });
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error();
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
  // initialize result and counter
  var block, charCode, idx = 0, map = chars;
  // if the next str index does not exist:
  //   change the mapping table to "="
  //   check if d has no fractional digits
  str.charAt(idx | 0) || (map = '=', idx % 1);
  // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
  output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */

module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = utils.isStandardBrowserEnv() ?

// Standard browser envs support document.cookie
function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + '=' + encodeURIComponent(value));

      if (utils.isNumber(expires)) {
        cookie.push('expires=' + new Date(expires).toGMTString());
      }

      if (utils.isString(path)) {
        cookie.push('path=' + path);
      }

      if (utils.isString(domain)) {
        cookie.push('domain=' + domain);
      }

      if (secure === true) {
        cookie.push('secure');
      }

      document.cookie = cookie.join('; ');
    },

    read: function read(name) {
      var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return match ? decodeURIComponent(match[3]) : null;
    },

    remove: function remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  };
}() :

// Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return {
    write: function write() {},
    read: function read() {
      return null;
    },
    remove: function remove() {}
  };
}();

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */

module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return (/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url)
  );
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = utils.isStandardBrowserEnv() ?

// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement('a');
  var originURL;

  /**
  * Parse a URL to discover it's components
  *
  * @param {String} url The URL to be parsed
  * @returns {Object}
  */
  function resolveURL(url) {
    var href = url;

    if (msie) {
      // IE needs attribute set twice to normalize properties
      urlParsingNode.setAttribute('href', href);
      href = urlParsingNode.href;
    }

    urlParsingNode.setAttribute('href', href);

    // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
    };
  }

  originURL = resolveURL(window.location.href);

  /**
  * Determine if a URL shares the same origin as the current location
  *
  * @param {String} requestURL The URL to test
  * @returns {boolean} True if URL shares the same origin, otherwise false
  */
  return function isURLSameOrigin(requestURL) {
    var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() :

// Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return function isURLSameOrigin() {
    return true;
  };
}();

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) {
    return parsed;
  }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */

module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function (val, options) {
  options = options || {};
  var type = typeof val === 'undefined' ? 'undefined' : _typeof(val);
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 10000) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') || plural(ms, h, 'hour') || plural(ms, m, 'minute') || plural(ms, s, 'second') || ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(14);
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();

/**
 * Colors.
 */

exports.colors = ['lightseagreen', 'forestgreen', 'goldenrod', 'dodgerblue', 'darkorchid', 'crimson'];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return typeof document !== 'undefined' && document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance ||
  // is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window && window.console && (window.console.firebug || window.console.exception && window.console.table) ||
  // is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 ||
  // double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit');

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function (match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === (typeof console === 'undefined' ? 'undefined' : _typeof(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch (e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch (e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Detect Electron renderer process, which is node, but we should
 * treat as a browser.
 */

if (typeof process !== 'undefined' && process.type === 'renderer') {
  module.exports = __webpack_require__(53);
} else {
  module.exports = __webpack_require__(55);
}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies.
 */

var tty = __webpack_require__(86);
var util = __webpack_require__(87);

/**
 * This is the Node.js implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(14);
exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;

/**
 * Colors.
 */

exports.colors = [6, 2, 3, 4, 5, 1];

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(function (key) {
  return (/^debug_/i.test(key)
  );
}).reduce(function (obj, key) {
  // camel-case
  var prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, function (_, k) {
    return k.toUpperCase();
  });

  // coerce string value into JS value
  var val = process.env[key];
  if (/^(yes|on|true|enabled)$/i.test(val)) val = true;else if (/^(no|off|false|disabled)$/i.test(val)) val = false;else if (val === 'null') val = null;else val = Number(val);

  obj[prop] = val;
  return obj;
}, {});

/**
 * The file descriptor to write the `debug()` calls to.
 * Set the `DEBUG_FD` env variable to override with another value. i.e.:
 *
 *   $ DEBUG_FD=3 node script.js 3>debug.log
 */

var fd = parseInt(process.env.DEBUG_FD, 10) || 2;

if (1 !== fd && 2 !== fd) {
  util.deprecate(function () {}, 'except for stderr(2) and stdout(1), any other usage of DEBUG_FD is deprecated. Override debug.log if you want to use a different log function (https://git.io/debug_fd)')();
}

var stream = 1 === fd ? process.stdout : 2 === fd ? process.stderr : createWritableStdioStream(fd);

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
  return 'colors' in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(fd);
}

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

exports.formatters.o = function (v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts).replace(/\s*\n\s*/g, ' ');
};

/**
 * Map %o to `util.inspect()`, allowing multiple lines if needed.
 */

exports.formatters.O = function (v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts);
};

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var name = this.namespace;
  var useColors = this.useColors;

  if (useColors) {
    var c = this.color;
    var prefix = '  \x1B[3' + c + ';1m' + name + ' ' + '\x1B[0m';

    args[0] = prefix + args[0].split('\n').join('\n' + prefix);
    args.push('\x1B[3' + c + 'm+' + exports.humanize(this.diff) + '\x1B[0m');
  } else {
    args[0] = new Date().toUTCString() + ' ' + name + ' ' + args[0];
  }
}

/**
 * Invokes `util.format()` with the specified arguments and writes to `stream`.
 */

function log() {
  return stream.write(util.format.apply(util, arguments) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  if (null == namespaces) {
    // If you set a process.env field to null or undefined, it gets cast to the
    // string 'null' or 'undefined'. Just delete instead.
    delete process.env.DEBUG;
  } else {
    process.env.DEBUG = namespaces;
  }
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  return process.env.DEBUG;
}

/**
 * Copied from `node/src/node.js`.
 *
 * XXX: It's lame that node doesn't expose this API out-of-the-box. It also
 * relies on the undocumented `tty_wrap.guessHandleType()` which is also lame.
 */

function createWritableStdioStream(fd) {
  var stream;
  var tty_wrap = process.binding('tty_wrap');

  // Note stream._type is used for test-module-load-list.js

  switch (tty_wrap.guessHandleType(fd)) {
    case 'TTY':
      stream = new tty.WriteStream(fd);
      stream._type = 'tty';

      // Hack to have stream not keep the event loop alive.
      // See https://github.com/joyent/node/issues/1726
      if (stream._handle && stream._handle.unref) {
        stream._handle.unref();
      }
      break;

    case 'FILE':
      var fs = __webpack_require__(83);
      stream = new fs.SyncWriteStream(fd, { autoClose: false });
      stream._type = 'fs';
      break;

    case 'PIPE':
    case 'TCP':
      var net = __webpack_require__(84);
      stream = new net.Socket({
        fd: fd,
        readable: false,
        writable: true
      });

      // FIXME Should probably have an option in net.Socket to create a
      // stream from an existing fd which is writable only. But for now
      // we'll just add this hack and set the `readable` member to false.
      // Test: ./node test/fixtures/echo.js < /etc/passwd
      stream.readable = false;
      stream.read = null;
      stream._type = 'pipe';

      // FIXME Hack to have stream not keep the event loop alive.
      // See https://github.com/joyent/node/issues/1726
      if (stream._handle && stream._handle.unref) {
        stream._handle.unref();
      }
      break;

    default:
      // Probably an error on in uv_guess_handle()
      throw new Error('Implement me. Unknown stream file type!');
  }

  // For supporting legacy API we put the FD here.
  stream.fd = fd;

  stream._isStdio = true;

  return stream;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init(debug) {
  debug.inspectOpts = util._extend({}, exports.inspectOpts);
}

/**
 * Enable namespaces listed in `process.env.DEBUG` initially.
 */

exports.enable(load());

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
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

var _vuex = __webpack_require__(3);

var _Base = __webpack_require__(34);

var _Base2 = _interopRequireDefault(_Base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    computed: _extends({}, (0, _vuex.mapState)('settings', {
        url: function url(state) {
            return state.url;
        },
        username: function username(state) {
            return state.username;
        },
        password: function password(state) {
            return state.password;
        }
    }), {
        authString: function authString() {
            return 'Authorization: Basic ' + _Base2.default.btoa(this.username + ':' + this.password);
        }
    })
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vuex = __webpack_require__(3);

exports.default = {
    data: function data() {
        return {
            chevron_down_icon: '&#xf13a;',
            chevron_up_icon: '&#xf139;',
            showingTransitions: false
        };
    },

    props: {
        task: { required: true }
    },
    computed: {
        truncatedSummary: function truncatedSummary() {
            var newSummary = this.task.summary;
            if (newSummary.length > 65) {
                newSummary = this.task.summary.substring(0, 62) + '...';
            }
            return newSummary;
        }
    },
    methods: {
        toggleExpand: function toggleExpand(task) {
            var _this = this;

            this.$store.dispatch('tasks/getTaskTransitions', task).then(function () {
                _this.$store.commit('tasks/toggleExpanded', task);
            });
        },
        executeTransition: function executeTransition(transition, task) {
            this.$store.dispatch('tasks/transitionTask', { task: task, transition: transition });
        },
        toggleTransitions: function toggleTransitions(task) {
            var _this2 = this;

            if (!task.transitions) {
                this.$store.dispatch('tasks/getTaskTransitions', task).then(function () {
                    _this2.showingTransitions = !_this2.showingTransitions;
                });
            } else {
                this.showingTransitions = !this.showingTransitions;
            }
        }
    }
}; //
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

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
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

var _vuex = __webpack_require__(3);

exports.default = {
    created: function created() {
        this.$store.dispatch('tasks/initialize');
    },

    components: {
        'v-task': __webpack_require__(69)
    },
    data: function data() {
        return {
            refresh_icon: '&#xf021;'
        };
    },

    computed: _extends({}, (0, _vuex.mapState)('tasks', {
        tasks: function tasks(state) {
            return state.tasks;
        }
    }), {
        count: function count() {
            return this.tasks.length;
        }
    }),
    methods: {
        reloadTasks: function reloadTasks() {
            this.$store.dispatch('tasks/initialize');
        }
    }
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vueRouter = __webpack_require__(16);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _routes = __webpack_require__(24);

var _routes2 = _interopRequireDefault(_routes);

var _vuexRouterSync = __webpack_require__(61);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
// Boot up global utils
//
__webpack_require__(21);

//
// Configure router and store
//

var router = new _vueRouter2.default({
    mode: 'history',
    routes: _routes2.default.routes
});

var store = __webpack_require__(25);
(0, _vuexRouterSync.sync)(store, router);

exports.default = {
    router: router,
    store: store,
    created: function created() {
        var element = document.createElement('div');
        element.className += 'jira-tasks-panel';
        this.panel = atom.workspace.addModalPanel({
            item: element,
            visible: this.isVisible
        });
        this.$mount(element);
    },
    mounted: function mounted() {
        var _this = this;

        // pull initial settings
        this.$store.dispatch('settings/initialize');

        // setup watchers on settings in case config changes
        atom.config.observe('jira-tasks.username', function (username) {
            _this.$store.commit('settings/setUsername', username);
        });
        atom.config.observe('jira-tasks.password', function (password) {
            _this.$store.commit('settings/setPassword', password);
        });
        atom.config.observe('jira-tasks.jiraUrl', function (url) {
            _this.$store.commit('settings/setUrl', url);
        });
    },
    data: function data() {
        return {
            isVisible: false,
            close_icon: '&#xf00d;'
        };
    },

    methods: {
        toggle: function toggle() {
            this.isVisible = !this.isVisible;
        }
    },
    watch: {
        isVisible: function isVisible() {
            this.isVisible ? this.panel.show() : this.panel.hide();
        }
    }
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles(parentId, list) {
  var styles = [];
  var newStyles = {};
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    };
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] });
    } else {
      newStyles[id].parts.push(part);
    }
  }
  return styles;
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.sync = function (store, router, options) {
  var moduleName = (options || {}).moduleName || 'route';

  store.registerModule(moduleName, {
    state: cloneRoute(router.currentRoute),
    mutations: {
      'router/ROUTE_CHANGED': function routerROUTE_CHANGED(state, transition) {
        store.state[moduleName] = cloneRoute(transition.to, transition.from);
      }
    }
  });

  var isTimeTraveling = false;
  var currentPath;

  // sync router on store change
  store.watch(function (state) {
    return state[moduleName];
  }, function (route) {
    if (route.fullPath === currentPath) {
      return;
    }
    isTimeTraveling = true;
    currentPath = route.fullPath;
    router.push(route);
  }, { sync: true });

  // sync store on router navigation
  router.afterEach(function (to, from) {
    if (isTimeTraveling) {
      isTimeTraveling = false;
      return;
    }
    currentPath = to.fullPath;
    store.commit('router/ROUTE_CHANGED', { to: to, from: from });
  });
};

function cloneRoute(to, from) {
  var clone = {
    name: to.name,
    path: to.path,
    hash: to.hash,
    query: to.query,
    params: to.params,
    fullPath: to.fullPath,
    meta: to.meta
  };
  if (from) {
    clone.from = cloneRoute(from);
  }
  return Object.freeze(clone);
}

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "\n.slide-enter-active[data-v-393bd8e7],\n.slide-leave-active[data-v-393bd8e7] {\n  transition: all 250ms;\n}\n.slide-enter[data-v-393bd8e7],\n.slide-leave-to[data-v-393bd8e7] {\n  opacity: 0;\n  height: 0px;\n}\n.slide-enter-to[data-v-393bd8e7],\n.slide-leave[data-v-393bd8e7] {\n  height: 200px;\n  opacity: 100;\n}\n.task[data-v-393bd8e7] {\n  display: block;\n  width: 100%;\n  border-width: 2px;\n  border-style: solid;\n  border-radius: 3px;\n  margin-bottom: 15px;\n}\n.task-header[data-v-393bd8e7] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  height: 25px;\n  margin-top: 10px;\n}\n.task-header .icon[data-v-393bd8e7] {\n    margin-left: 15px;\n    min-width: 15px;\n    max-width: 15px;\n}\n.task-header .key[data-v-393bd8e7] {\n    margin-left: 15px;\n    min-width: 75px;\n    max-width: 75px;\n}\n.task-header .summary[data-v-393bd8e7] {\n    margin-left: 15px;\n    min-width: 400px;\n    max-width: 400px;\n    text-overflow: ellipsis;\n}\n.task-header .expand[data-v-393bd8e7] {\n    margin-right: 15px;\n    cursor: pointer;\n    align-self: flex-end;\n    min-width: 15px;\n    max-width: 15px;\n}\n.task-meta[data-v-393bd8e7] {\n  display: flex;\n  height: 25px;\n  margin-bottom: 10px;\n}\n.task-meta .task-status[data-v-393bd8e7] {\n    min-width: 100px;\n    max-width: 100px;\n    margin-left: 15px;\n    border-width: 2px;\n    border-style: solid;\n    border-radius: 10px;\n    cursor: pointer;\n}\n.task-meta .task-status .status-name[data-v-393bd8e7] {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      width: 100%;\n}\n.task-meta .task-transition.yellow[data-v-393bd8e7],\n  .task-meta .task-status.yellow[data-v-393bd8e7] {\n    background-color: #FFD351;\n    border-color: #FFD351;\n    color: #594300;\n}\n.task-meta .task-transition.blue-gray[data-v-393bd8e7],\n  .task-meta .task-status.blue-gray[data-v-393bd8e7] {\n    background-color: #4A6785;\n    border-color: #4A6785;\n    color: #FFF;\n}\n.task-meta .task-transition.green[data-v-393bd8e7],\n  .task-meta .task-status.green[data-v-393bd8e7] {\n    background-color: #14892C;\n    border-color: #14892C;\n    color: #FFF;\n}\n.task-meta .task-transitions[data-v-393bd8e7] {\n    position: relative;\n    display: absolute;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    border-width: 1px;\n    margin: 0px;\n    padding: 0px;\n    z-index: 256;\n}\n.task-meta .task-transition[data-v-393bd8e7] {\n    width: 100%;\n    margin-left: 2px;\n    margin-right: 2px;\n    margin-top: 5px;\n    margin-bottom: 5px;\n    border-width: 2px;\n    border-style: solid;\n    border-radius: 10px;\n    cursor: pointer;\n}\n.task-meta .task-transition .transition-name[data-v-393bd8e7] {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      width: 100%;\n}\n.task-expanded[data-v-393bd8e7] {\n  height: 200px;\n}\n", ""]);

// exports


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "\n.tasks-view[data-v-79396126] {\n  width: 100%;\n  height: 450px;\n  min-height: 450px;\n  max-height: 240px;\n}\n.task-header[data-v-79396126] {\n  width: 100%;\n  height: 50px;\n  min-height: 50px;\n  max-height: 50px;\n}\n.task-list[data-v-79396126] {\n  width: 100%;\n  height: 400px;\n  max-height: 400px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.refresh[data-v-79396126] {\n  cursor: pointer;\n}\n", ""]);

// exports


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "\n.fade-enter-active, .fade-leave-active {\n  transition: opacity .5s ease;\n}\n.fade-enter, .fade-leave-active {\n  opacity: 0;\n}\n", ""]);

// exports


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "\n.jira-tasks-panel[data-v-7b818124] {\n  width: 500px;\n  height: 500px;\n  max-height: 500px;\n  overflow: scroll;\n}\n.close[data-v-7b818124] {\n  cursor: pointer;\n  align-self: flex-end;\n}\n", ""]);

// exports


/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = {
	"name": "axios",
	"version": "0.16.1",
	"description": "Promise based HTTP client for the browser and node.js",
	"main": "index.js",
	"scripts": {
		"test": "grunt test",
		"start": "node ./sandbox/server.js",
		"build": "NODE_ENV=production grunt build",
		"preversion": "npm test",
		"version": "npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",
		"postversion": "git push && git push --tags",
		"examples": "node ./examples/server.js",
		"coveralls": "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js"
	},
	"repository": {
		"type": "git",
		"url": "https://github.com/mzabriskie/axios.git"
	},
	"keywords": [
		"xhr",
		"http",
		"ajax",
		"promise",
		"node"
	],
	"author": "Matt Zabriskie",
	"license": "MIT",
	"bugs": {
		"url": "https://github.com/mzabriskie/axios/issues"
	},
	"homepage": "https://github.com/mzabriskie/axios",
	"devDependencies": {
		"coveralls": "^2.11.9",
		"es6-promise": "^4.0.5",
		"grunt": "^1.0.1",
		"grunt-banner": "^0.6.0",
		"grunt-cli": "^1.2.0",
		"grunt-contrib-clean": "^1.0.0",
		"grunt-contrib-nodeunit": "^1.0.0",
		"grunt-contrib-watch": "^1.0.0",
		"grunt-eslint": "^19.0.0",
		"grunt-karma": "^2.0.0",
		"grunt-ts": "^6.0.0-beta.3",
		"grunt-webpack": "^1.0.18",
		"istanbul-instrumenter-loader": "^1.0.0",
		"jasmine-core": "^2.4.1",
		"karma": "^1.3.0",
		"karma-chrome-launcher": "^2.0.0",
		"karma-coverage": "^1.0.0",
		"karma-firefox-launcher": "^1.0.0",
		"karma-jasmine": "^1.0.2",
		"karma-jasmine-ajax": "^0.1.13",
		"karma-opera-launcher": "^1.0.0",
		"karma-phantomjs-launcher": "^1.0.0",
		"karma-safari-launcher": "^1.0.0",
		"karma-sauce-launcher": "^1.1.0",
		"karma-sinon": "^1.0.5",
		"karma-sourcemap-loader": "^0.3.7",
		"karma-webpack": "^1.7.0",
		"load-grunt-tasks": "^3.5.2",
		"minimist": "^1.2.0",
		"phantomjs-prebuilt": "^2.1.7",
		"sinon": "^1.17.4",
		"webpack": "^1.13.1",
		"webpack-dev-server": "^1.14.1",
		"url-search-params": "^0.6.1",
		"typescript": "^2.0.3"
	},
	"browser": {
		"./lib/adapters/http.js": "./lib/adapters/xhr.js"
	},
	"typings": "./index.d.ts",
	"dependencies": {
		"follow-redirects": "^1.2.3"
	}
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(75)

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(56),
  /* template */
  __webpack_require__(71),
  /* scopeId */
  "data-v-0d0bfa28",
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\retro\\Projects\\jira-tasks\\lib\\pages\\settings\\settings.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] settings.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0d0bfa28", Component.options)
  } else {
    hotAPI.reload("data-v-0d0bfa28", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(76)

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(57),
  /* template */
  __webpack_require__(72),
  /* scopeId */
  "data-v-393bd8e7",
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\retro\\Projects\\jira-tasks\\lib\\pages\\tasks\\task\\task.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] task.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-393bd8e7", Component.options)
  } else {
    hotAPI.reload("data-v-393bd8e7", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(77)

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(58),
  /* template */
  __webpack_require__(73),
  /* scopeId */
  "data-v-79396126",
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\retro\\Projects\\jira-tasks\\lib\\pages\\tasks\\tasks.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] tasks.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-79396126", Component.options)
  } else {
    hotAPI.reload("data-v-79396126", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h1', [_vm._v("Current Settings:")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v(_vm._s(_vm.url))]), _vm._v(" "), _c('li', [_vm._v(_vm._s(_vm.username))]), _vm._v(" "), _c('li', [_vm._v(_vm._s(_vm.password))]), _vm._v(" "), _c('li', [_vm._v(_vm._s(_vm.authString))])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0d0bfa28", module.exports)
  }
}

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "task"
  }, [_c('div', {
    staticClass: "task-header"
  }, [_c('img', {
    staticClass: "icon",
    attrs: {
      "src": _vm.task.icon
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "key"
  }, [_vm._v(_vm._s(_vm.task.key))]), _vm._v(" "), (_vm.task.isExpanded) ? _c('div', {
    staticClass: "summary"
  }, [_vm._v(_vm._s(_vm.task.summary))]) : _c('div', {
    staticClass: "summary"
  }, [_vm._v(_vm._s(_vm.truncatedSummary))]), _vm._v(" "), (_vm.task.isExpanded) ? _c('i', {
    staticClass: "fa expand",
    domProps: {
      "innerHTML": _vm._s(_vm.chevron_up_icon)
    },
    on: {
      "click": function($event) {
        _vm.toggleExpand(_vm.task)
      }
    }
  }) : _c('i', {
    staticClass: "fa expand",
    domProps: {
      "innerHTML": _vm._s(_vm.chevron_down_icon)
    },
    on: {
      "click": function($event) {
        _vm.toggleExpand(_vm.task)
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "task-meta"
  }, [_c('div', {
    staticClass: "task-status",
    class: _vm.task.status.statusCategory.colorName,
    on: {
      "mouseenter": function($event) {
        _vm.toggleTransitions(_vm.task)
      },
      "mouseleave": function($event) {
        _vm.toggleTransitions(_vm.task)
      }
    }
  }, [_c('div', {
    staticClass: "status-name"
  }, [_vm._v(_vm._s(_vm.task.status.name))]), _vm._v(" "), (_vm.showingTransitions) ? _c('div', {
    staticClass: "task-transitions"
  }, [_c('div', {
    staticClass: "transitions"
  }, _vm._l((_vm.task.transitions), function(transition) {
    return _c('div', {
      key: "transition.id",
      staticClass: "task-transition",
      class: transition.to.statusCategory.colorName,
      on: {
        "click": function($event) {
          _vm.executeTransition(transition, _vm.task)
        }
      }
    }, [_c('div', {
      staticClass: "transition-name"
    }, [_vm._v(_vm._s(transition.name))])])
  }))]) : _vm._e()])]), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "slide",
      "mode": "out-in"
    }
  }, [(_vm.task.isExpanded) ? _c('div', {
    staticClass: "task-expanded"
  }, [_c('hr'), _vm._v(" "), _c('div', {
    staticClass: "description"
  }, [_vm._v("\n                " + _vm._s(_vm.task.description) + "\n            ")])]) : _vm._e()])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-393bd8e7", module.exports)
  }
}

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tasks-view"
  }, [_c('div', {
    staticClass: "task-header"
  }, [_c('span', {
    staticClass: "fa refresh",
    domProps: {
      "innerHTML": _vm._s(_vm.refresh_icon)
    },
    on: {
      "click": _vm.reloadTasks
    }
  }), _vm._v("\n        " + _vm._s(_vm.count) + " tasks\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "task-list"
  }, _vm._l((_vm.tasks), function(task) {
    return _c('v-task', {
      key: "task.id",
      attrs: {
        "task": task
      }
    })
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-79396126", module.exports)
  }
}

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "v-root"
  }, [_c('div', {
    staticClass: "nav"
  }, [_c('router-link', {
    attrs: {
      "to": "/tasks"
    }
  }, [_vm._v("Tasks")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/settings"
    }
  }, [_vm._v("Settings")]), _vm._v(" "), _c('i', {
    staticClass: "fa close",
    domProps: {
      "innerHTML": _vm._s(_vm.close_icon)
    },
    on: {
      "click": _vm.toggle
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "v-router"
  }, [_c('transition', {
    attrs: {
      "name": "fade",
      "mode": "out-in"
    }
  }, [_c('router-view')], 1)], 1)])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7b818124", module.exports)
  }
}

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(62);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("618c8a62", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-0d0bfa28\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./settings.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-0d0bfa28\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./settings.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(63);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("4623e6cd", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-393bd8e7\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./task.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-393bd8e7\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./task.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(64);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("02702058", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-79396126\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tasks.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-79396126\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tasks.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(65);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("72d4b43d", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7b818124\",\"scoped\":false,\"hasInlineConfig\":false}!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./root.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7b818124\",\"scoped\":false,\"hasInlineConfig\":false}!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./root.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(66);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("290f4e89", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7b818124\",\"scoped\":true,\"hasInlineConfig\":false}!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./root.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7b818124\",\"scoped\":true,\"hasInlineConfig\":false}!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./root.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("buffer");

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("net");

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = require("tty");

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = require("zlib");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2M3ZTM2MGE0YjA0NWVlZTE1MmUiLCJ3ZWJwYWNrOi8vLy4vfi9heGlvcy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ2dWV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidnVlXCIiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qcyIsIndlYnBhY2s6Ly8vLi9+L2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzIiwid2VicGFjazovLy8uL34vYXhpb3MvbGliL2RlZmF1bHRzLmpzIiwid2VicGFjazovLy8uL34vYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzIiwid2VicGFjazovLy8uL34vYXhpb3MvbGliL2NvcmUvZW5oYW5jZUVycm9yLmpzIiwid2VicGFjazovLy8uL34vYXhpb3MvbGliL2NvcmUvc2V0dGxlLmpzIiwid2VicGFjazovLy8uL34vYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzIiwid2VicGFjazovLy8uL34vZGVidWcvc3JjL2RlYnVnLmpzIiwid2VicGFjazovLy8uL34vZm9sbG93LXJlZGlyZWN0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1yb3V0ZXIvZGlzdC92dWUtcm91dGVyLmVzbS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaHR0cHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiIsIndlYnBhY2s6Ly8vLi9saWIvcm9vdC52dWUiLCJ3ZWJwYWNrOi8vLy4vbGliL2FwcC9ib290LmpzIiwid2VicGFjazovLy8uL2xpYi9hcHAvcGx1Z2lucy9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2FwcC9wbHVnaW5zL3Z1ZXguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2FwcC9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2FwcC9zdG9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvYXBwL3N0b3JlL21vZHVsZXMvc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2FwcC9zdG9yZS9tb2R1bGVzL3Rhc2tzL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2FwcC9zdG9yZS9tb2R1bGVzL3Rhc2tzL2dldHRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2FwcC9zdG9yZS9tb2R1bGVzL3Rhc2tzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2xpYi9hcHAvc3RvcmUvbW9kdWxlcy90YXNrcy9tdXRhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2FwcC9zdG9yZS9tb2R1bGVzL3Rhc2tzL3JlcG9zaXRvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2FwcC9zdG9yZS9tb2R1bGVzL3Rhc2tzL3N0YXRlLmpzIiwid2VicGFjazovLy8uL2xpYi9tYWluLmpzIiwid2VicGFjazovLy8uL34vQmFzZTY0L2Jhc2U2NC5qcyIsIndlYnBhY2s6Ly8vLi9+L2F4aW9zL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYXhpb3MvbGliL2FkYXB0ZXJzL2h0dHAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzIiwid2VicGFjazovLy8uL34vYXhpb3MvbGliL2F4aW9zLmpzIiwid2VicGFjazovLy8uL34vYXhpb3MvbGliL2NhbmNlbC9DYW5jZWxUb2tlbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwid2VicGFjazovLy8uL34vYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL34vYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL34vYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2F4aW9zL2xpYi9oZWxwZXJzL2J0b2EuanMiLCJ3ZWJwYWNrOi8vLy4vfi9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzIiwid2VicGFjazovLy8uL34vYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzIiwid2VicGFjazovLy8uL34vYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RlYnVnL34vbXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9kZWJ1Zy9zcmMvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2RlYnVnL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RlYnVnL3NyYy9ub2RlLmpzIiwid2VicGFjazovLy9zZXR0aW5ncy52dWUiLCJ3ZWJwYWNrOi8vL3Rhc2sudnVlIiwid2VicGFjazovLy90YXNrcy52dWUiLCJ3ZWJwYWNrOi8vL3Jvb3QudnVlIiwid2VicGFjazovLy8uL34vdnVlLXN0eWxlLWxvYWRlci9saWIvbGlzdFRvU3R5bGVzLmpzIiwid2VicGFjazovLy8uL34vdnVleC1yb3V0ZXItc3luYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvcGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3MudnVlPzJlOTYiLCJ3ZWJwYWNrOi8vLy4vbGliL3BhZ2VzL3Rhc2tzL3Rhc2svdGFzay52dWU/YmE2YyIsIndlYnBhY2s6Ly8vLi9saWIvcGFnZXMvdGFza3MvdGFza3MudnVlP2I5NzAiLCJ3ZWJwYWNrOi8vLy4vbGliL3Jvb3QudnVlPzI5MmMiLCJ3ZWJwYWNrOi8vLy4vbGliL3Jvb3QudnVlPzAzZTEiLCJ3ZWJwYWNrOi8vLy4vfi9heGlvcy9wYWNrYWdlLmpzb24iLCJ3ZWJwYWNrOi8vLy4vbGliL3BhZ2VzL3NldHRpbmdzL3NldHRpbmdzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9saWIvcGFnZXMvdGFza3MvdGFzay90YXNrLnZ1ZSIsIndlYnBhY2s6Ly8vLi9saWIvcGFnZXMvdGFza3MvdGFza3MudnVlIiwid2VicGFjazovLy8uL2xpYi9wYWdlcy9zZXR0aW5ncy9zZXR0aW5ncy52dWU/YzAyOSIsIndlYnBhY2s6Ly8vLi9saWIvcGFnZXMvdGFza3MvdGFzay90YXNrLnZ1ZT9lNWY3Iiwid2VicGFjazovLy8uL2xpYi9wYWdlcy90YXNrcy90YXNrcy52dWU/MTA2YyIsIndlYnBhY2s6Ly8vLi9saWIvcm9vdC52dWU/NGQ1ZCIsIndlYnBhY2s6Ly8vLi9saWIvcGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3MudnVlP2M0ZDYiLCJ3ZWJwYWNrOi8vLy4vbGliL3BhZ2VzL3Rhc2tzL3Rhc2svdGFzay52dWU/MzEyZSIsIndlYnBhY2s6Ly8vLi9saWIvcGFnZXMvdGFza3MvdGFza3MudnVlP2M1OGIiLCJ3ZWJwYWNrOi8vLy4vbGliL3Jvb3QudnVlP2QyNjkiLCJ3ZWJwYWNrOi8vLy4vbGliL3Jvb3QudnVlP2ZhZDkiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXNzZXJ0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYnVmZmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZWxlY3Ryb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5ldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0cmVhbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInR0eVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInV0aWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6bGliXCIiXSwibmFtZXMiOlsiYmluZCIsInJlcXVpcmUiLCJ0b1N0cmluZyIsIk9iamVjdCIsInByb3RvdHlwZSIsImlzQXJyYXkiLCJ2YWwiLCJjYWxsIiwiaXNCdWZmZXIiLCJCdWZmZXIiLCJpc0FycmF5QnVmZmVyIiwiaXNGb3JtRGF0YSIsIkZvcm1EYXRhIiwiaXNBcnJheUJ1ZmZlclZpZXciLCJyZXN1bHQiLCJBcnJheUJ1ZmZlciIsImlzVmlldyIsImJ1ZmZlciIsImlzU3RyaW5nIiwiaXNOdW1iZXIiLCJpc1VuZGVmaW5lZCIsImlzT2JqZWN0IiwiaXNEYXRlIiwiaXNGaWxlIiwiaXNCbG9iIiwiaXNGdW5jdGlvbiIsImlzU3RyZWFtIiwicGlwZSIsImlzVVJMU2VhcmNoUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwidHJpbSIsInN0ciIsInJlcGxhY2UiLCJpc1N0YW5kYXJkQnJvd3NlckVudiIsIm5hdmlnYXRvciIsInByb2R1Y3QiLCJ3aW5kb3ciLCJkb2N1bWVudCIsImZvckVhY2giLCJvYmoiLCJmbiIsImkiLCJsIiwibGVuZ3RoIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJtZXJnZSIsImFzc2lnblZhbHVlIiwiYXJndW1lbnRzIiwiZXh0ZW5kIiwiYSIsImIiLCJ0aGlzQXJnIiwibW9kdWxlIiwiZXhwb3J0cyIsInVzZVNvdXJjZU1hcCIsImxpc3QiLCJtYXAiLCJpdGVtIiwiY29udGVudCIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJqb2luIiwibW9kdWxlcyIsIm1lZGlhUXVlcnkiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwiaWQiLCJwdXNoIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJzb3VyY2VNYXBwaW5nIiwidG9Db21tZW50Iiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2UiLCJzb3VyY2VSb290IiwiY29uY2F0Iiwic291cmNlTWFwIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImVuaGFuY2VFcnJvciIsImNyZWF0ZUVycm9yIiwibWVzc2FnZSIsImNvbmZpZyIsImNvZGUiLCJyZXNwb25zZSIsImVycm9yIiwiRXJyb3IiLCJ1dGlscyIsIm5vcm1hbGl6ZUhlYWRlck5hbWUiLCJERUZBVUxUX0NPTlRFTlRfVFlQRSIsInNldENvbnRlbnRUeXBlSWZVbnNldCIsImhlYWRlcnMiLCJ2YWx1ZSIsImdldERlZmF1bHRBZGFwdGVyIiwiYWRhcHRlciIsIlhNTEh0dHBSZXF1ZXN0IiwicHJvY2VzcyIsImRlZmF1bHRzIiwidHJhbnNmb3JtUmVxdWVzdCIsInRyYW5zZm9ybVJlc3BvbnNlIiwicGFyc2UiLCJlIiwidGltZW91dCIsInhzcmZDb29raWVOYW1lIiwieHNyZkhlYWRlck5hbWUiLCJtYXhDb250ZW50TGVuZ3RoIiwidmFsaWRhdGVTdGF0dXMiLCJzdGF0dXMiLCJjb21tb24iLCJmb3JFYWNoTWV0aG9kTm9EYXRhIiwibWV0aG9kIiwiZm9yRWFjaE1ldGhvZFdpdGhEYXRhIiwiQ2FuY2VsIiwiX19DQU5DRUxfXyIsImlzQ2FuY2VsIiwic2V0dGxlIiwicmVzb2x2ZSIsInJlamVjdCIsIndyYXAiLCJhcmdzIiwiQXJyYXkiLCJhcHBseSIsImVuY29kZSIsImJ1aWxkVVJMIiwidXJsIiwicGFyYW1zIiwicGFyYW1zU2VyaWFsaXplciIsInNlcmlhbGl6ZWRQYXJhbXMiLCJwYXJ0cyIsInNlcmlhbGl6ZSIsInBhcnNlVmFsdWUiLCJ2IiwidG9JU09TdHJpbmciLCJpbmRleE9mIiwiY3JlYXRlRGVidWciLCJkZWJ1ZyIsImNvZXJjZSIsImRpc2FibGUiLCJlbmFibGUiLCJlbmFibGVkIiwiaHVtYW5pemUiLCJuYW1lcyIsInNraXBzIiwiZm9ybWF0dGVycyIsInByZXZUaW1lIiwic2VsZWN0Q29sb3IiLCJuYW1lc3BhY2UiLCJoYXNoIiwiY2hhckNvZGVBdCIsImNvbG9ycyIsIk1hdGgiLCJhYnMiLCJzZWxmIiwiY3VyciIsIkRhdGUiLCJtcyIsImRpZmYiLCJwcmV2IiwidW5zaGlmdCIsImluZGV4IiwibWF0Y2giLCJmb3JtYXQiLCJmb3JtYXR0ZXIiLCJzcGxpY2UiLCJmb3JtYXRBcmdzIiwibG9nRm4iLCJsb2ciLCJjb25zb2xlIiwidXNlQ29sb3JzIiwiY29sb3IiLCJpbml0IiwibmFtZXNwYWNlcyIsInNhdmUiLCJzcGxpdCIsImxlbiIsIlJlZ0V4cCIsInN1YnN0ciIsIm5hbWUiLCJ0ZXN0Iiwic3RhY2siLCJhc3NlcnQiLCJodHRwIiwiaHR0cHMiLCJXcml0YWJsZSIsIm5hdGl2ZVByb3RvY29scyIsInNjaGVtZXMiLCJtYXhSZWRpcmVjdHMiLCJzYWZlTWV0aG9kcyIsIkdFVCIsIkhFQUQiLCJPUFRJT05TIiwiVFJBQ0UiLCJldmVudEhhbmRsZXJzIiwiY3JlYXRlIiwiZXZlbnQiLCJhcmciLCJfcmVkaXJlY3RhYmxlIiwiZW1pdCIsIlJlZGlyZWN0YWJsZVJlcXVlc3QiLCJvcHRpb25zIiwicmVzcG9uc2VDYWxsYmFjayIsIl9vcHRpb25zIiwiX3JlZGlyZWN0Q291bnQiLCJfYnVmZmVyZWRXcml0ZXMiLCJvbiIsIl9vbk5hdGl2ZVJlc3BvbnNlIiwiX3Byb2Nlc3NSZXNwb25zZSIsIl9wZXJmb3JtUmVxdWVzdCIsInByb3RvY29sIiwiYWdlbnRzIiwiYWdlbnQiLCJuYXRpdmVQcm90b2NvbCIsInJlcXVlc3QiLCJfY3VycmVudFJlcXVlc3QiLCJfY3VycmVudFVybCIsIl9pc1JlZGlyZWN0IiwiYnVmZmVyZWRXcml0ZXMiLCJlbmQiLCJ3cml0ZU5leHQiLCJidWZmZXJlZFdyaXRlIiwid3JpdGUiLCJlbmNvZGluZyIsImxvY2F0aW9uIiwiZm9sbG93UmVkaXJlY3RzIiwic3RhdHVzQ29kZSIsImhlYWRlciIsInJlZGlyZWN0VXJsIiwiYXNzaWduIiwicmVzcG9uc2VVcmwiLCJhYm9ydCIsImZsdXNoSGVhZGVycyIsInNldE5vRGVsYXkiLCJub0RlbGF5Iiwic2V0U29ja2V0S2VlcEFsaXZlIiwiaW5pdGlhbERlbGF5Iiwic2V0VGltZW91dCIsImNhbGxiYWNrIiwiX3dyaXRlIiwia2V5cyIsInNjaGVtZSIsIndyYXBwZWRQcm90b2NvbCIsImVxdWFsIiwiZ2V0IiwiY29uZGl0aW9uIiwid2FybiIsIlZpZXciLCJmdW5jdGlvbmFsIiwicHJvcHMiLCJ0eXBlIiwiU3RyaW5nIiwiZGVmYXVsdCIsInJlbmRlciIsIl8iLCJyZWYiLCJjaGlsZHJlbiIsInBhcmVudCIsInJvdXRlclZpZXciLCJoIiwiJGNyZWF0ZUVsZW1lbnQiLCJyb3V0ZSIsIiRyb3V0ZSIsImNhY2hlIiwiX3JvdXRlclZpZXdDYWNoZSIsImRlcHRoIiwiaW5hY3RpdmUiLCIkdm5vZGUiLCJfaW5hY3RpdmUiLCIkcGFyZW50Iiwicm91dGVyVmlld0RlcHRoIiwibWF0Y2hlZCIsImNvbXBvbmVudCIsImNvbXBvbmVudHMiLCJyZWdpc3RlclJvdXRlSW5zdGFuY2UiLCJ2bSIsImN1cnJlbnQiLCJpbnN0YW5jZXMiLCJob29rIiwicHJlcGF0Y2giLCJ2bm9kZSIsImNvbXBvbmVudEluc3RhbmNlIiwicmVzb2x2ZVByb3BzIiwidW5kZWZpbmVkIiwicGF0aCIsImVuY29kZVJlc2VydmVSRSIsImVuY29kZVJlc2VydmVSZXBsYWNlciIsImMiLCJjb21tYVJFIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicmVzb2x2ZVF1ZXJ5IiwicXVlcnkiLCJleHRyYVF1ZXJ5IiwiX3BhcnNlUXVlcnkiLCJwYXJzZVF1ZXJ5IiwicGFyc2VkUXVlcnkiLCJzbGljZSIsInJlcyIsInBhcmFtIiwic2hpZnQiLCJzdHJpbmdpZnlRdWVyeSIsInZhbDIiLCJmaWx0ZXIiLCJ4IiwidHJhaWxpbmdTbGFzaFJFIiwiY3JlYXRlUm91dGUiLCJyZWNvcmQiLCJyZWRpcmVjdGVkRnJvbSIsInJvdXRlciIsInN0cmluZ2lmeVF1ZXJ5JCQxIiwibWV0YSIsImZ1bGxQYXRoIiwiZ2V0RnVsbFBhdGgiLCJmb3JtYXRNYXRjaCIsImZyZWV6ZSIsIlNUQVJUIiwiX3N0cmluZ2lmeVF1ZXJ5IiwiaXNTYW1lUm91dGUiLCJpc09iamVjdEVxdWFsIiwiYUtleXMiLCJiS2V5cyIsImV2ZXJ5IiwiaXNJbmNsdWRlZFJvdXRlIiwidGFyZ2V0IiwicXVlcnlJbmNsdWRlcyIsInRvVHlwZXMiLCJldmVudFR5cGVzIiwiTGluayIsInRvIiwicmVxdWlyZWQiLCJ0YWciLCJleGFjdCIsIkJvb2xlYW4iLCJhcHBlbmQiLCJhY3RpdmVDbGFzcyIsImV4YWN0QWN0aXZlQ2xhc3MiLCJ0aGlzJDEiLCIkcm91dGVyIiwiaHJlZiIsImNsYXNzZXMiLCJnbG9iYWxBY3RpdmVDbGFzcyIsImxpbmtBY3RpdmVDbGFzcyIsImdsb2JhbEV4YWN0QWN0aXZlQ2xhc3MiLCJsaW5rRXhhY3RBY3RpdmVDbGFzcyIsImFjdGl2ZUNsYXNzRmFsbGJhY2siLCJleGFjdEFjdGl2ZUNsYXNzRmFsbGJhY2siLCJjb21wYXJlVGFyZ2V0IiwiaGFuZGxlciIsImd1YXJkRXZlbnQiLCJjbGljayIsImNsYXNzIiwiYXR0cnMiLCJmaW5kQW5jaG9yIiwiJHNsb3RzIiwiaXNTdGF0aWMiLCJfVnVlIiwidXRpbCIsImFEYXRhIiwiYUF0dHJzIiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImRlZmF1bHRQcmV2ZW50ZWQiLCJidXR0b24iLCJjdXJyZW50VGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwicHJldmVudERlZmF1bHQiLCJjaGlsZCIsImluc3RhbGwiLCJWdWUiLCJpbnN0YWxsZWQiLCJkZWZpbmVQcm9wZXJ0eSIsIiRyb290IiwiX3JvdXRlciIsIl9yb3V0ZSIsImlzRGVmIiwicmVnaXN0ZXJJbnN0YW5jZSIsImNhbGxWYWwiLCIkb3B0aW9ucyIsIl9wYXJlbnRWbm9kZSIsIm1peGluIiwiYmVmb3JlQ3JlYXRlIiwiZGVmaW5lUmVhY3RpdmUiLCJoaXN0b3J5IiwiZGVzdHJveWVkIiwic3RyYXRzIiwib3B0aW9uTWVyZ2VTdHJhdGVnaWVzIiwiYmVmb3JlUm91dGVFbnRlciIsImJlZm9yZVJvdXRlTGVhdmUiLCJjcmVhdGVkIiwiaW5Ccm93c2VyIiwicmVzb2x2ZVBhdGgiLCJyZWxhdGl2ZSIsImJhc2UiLCJmaXJzdENoYXIiLCJjaGFyQXQiLCJwb3AiLCJzZWdtZW50cyIsInNlZ21lbnQiLCJwYXJzZVBhdGgiLCJoYXNoSW5kZXgiLCJxdWVyeUluZGV4IiwiY2xlYW5QYXRoIiwiaW5kZXgkMSIsImFyciIsInBhdGhUb1JlZ2V4cCIsInBhcnNlXzEiLCJjb21waWxlXzEiLCJjb21waWxlIiwidG9rZW5zVG9GdW5jdGlvbl8xIiwidG9rZW5zVG9GdW5jdGlvbiIsInRva2Vuc1RvUmVnRXhwXzEiLCJ0b2tlbnNUb1JlZ0V4cCIsIlBBVEhfUkVHRVhQIiwidG9rZW5zIiwiZGVmYXVsdERlbGltaXRlciIsImRlbGltaXRlciIsImV4ZWMiLCJtIiwiZXNjYXBlZCIsIm9mZnNldCIsIm5leHQiLCJwcmVmaXgiLCJjYXB0dXJlIiwiZ3JvdXAiLCJtb2RpZmllciIsImFzdGVyaXNrIiwicGFydGlhbCIsInJlcGVhdCIsIm9wdGlvbmFsIiwicGF0dGVybiIsImVzY2FwZUdyb3VwIiwiZXNjYXBlU3RyaW5nIiwiZW5jb2RlVVJJQ29tcG9uZW50UHJldHR5IiwiZW5jb2RlVVJJIiwidG9VcHBlckNhc2UiLCJlbmNvZGVBc3RlcmlzayIsIm1hdGNoZXMiLCJvcHRzIiwicHJldHR5IiwidG9rZW4iLCJUeXBlRXJyb3IiLCJqIiwiYXR0YWNoS2V5cyIsInJlIiwiZmxhZ3MiLCJzZW5zaXRpdmUiLCJyZWdleHBUb1JlZ2V4cCIsImdyb3VwcyIsImFycmF5VG9SZWdleHAiLCJyZWdleHAiLCJzdHJpbmdUb1JlZ2V4cCIsInN0cmljdCIsImVuZHNXaXRoRGVsaW1pdGVyIiwicmVnZXhwQ29tcGlsZUNhY2hlIiwiZmlsbFBhcmFtcyIsInJvdXRlTXNnIiwiZmlsbGVyIiwiY3JlYXRlUm91dGVNYXAiLCJyb3V0ZXMiLCJvbGRQYXRoTGlzdCIsIm9sZFBhdGhNYXAiLCJvbGROYW1lTWFwIiwicGF0aExpc3QiLCJwYXRoTWFwIiwibmFtZU1hcCIsImFkZFJvdXRlUmVjb3JkIiwibWF0Y2hBcyIsIm5vcm1hbGl6ZWRQYXRoIiwibm9ybWFsaXplUGF0aCIsInJlZ2V4IiwiY29tcGlsZVJvdXRlUmVnZXgiLCJyZWRpcmVjdCIsImJlZm9yZUVudGVyIiwic29tZSIsImNoaWxkTWF0Y2hBcyIsImFsaWFzIiwiYWxpYXNSb3V0ZSIsIm5vcm1hbGl6ZUxvY2F0aW9uIiwicmF3IiwiX25vcm1hbGl6ZWQiLCJyYXdQYXRoIiwicGFyc2VkUGF0aCIsImJhc2VQYXRoIiwiY3JlYXRlTWF0Y2hlciIsImFkZFJvdXRlcyIsImN1cnJlbnRSb3V0ZSIsInBhcmFtTmFtZXMiLCJfY3JlYXRlUm91dGUiLCJyZWNvcmQkMSIsIm1hdGNoUm91dGUiLCJvcmlnaW5hbFJlZGlyZWN0IiwidGFyZ2V0UmVjb3JkIiwicmVzb2x2ZVJlY29yZFBhdGgiLCJyZXNvbHZlZFBhdGgiLCJhbGlhc2VkUGF0aCIsImFsaWFzZWRNYXRjaCIsImFsaWFzZWRSZWNvcmQiLCJwb3NpdGlvblN0b3JlIiwic2V0dXBTY3JvbGwiLCJhZGRFdmVudExpc3RlbmVyIiwic2F2ZVNjcm9sbFBvc2l0aW9uIiwic3RhdGUiLCJzZXRTdGF0ZUtleSIsImhhbmRsZVNjcm9sbCIsImZyb20iLCJpc1BvcCIsImFwcCIsImJlaGF2aW9yIiwic2Nyb2xsQmVoYXZpb3IiLCIkbmV4dFRpY2siLCJwb3NpdGlvbiIsImdldFNjcm9sbFBvc2l0aW9uIiwic2hvdWxkU2Nyb2xsIiwic2VsZWN0b3IiLCJlbCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRFbGVtZW50UG9zaXRpb24iLCJpc1ZhbGlkUG9zaXRpb24iLCJub3JtYWxpemVQb3NpdGlvbiIsInNjcm9sbFRvIiwieSIsImdldFN0YXRlS2V5IiwicGFnZVhPZmZzZXQiLCJwYWdlWU9mZnNldCIsImRvY0VsIiwiZG9jdW1lbnRFbGVtZW50IiwiZG9jUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImVsUmVjdCIsImxlZnQiLCJ0b3AiLCJzdXBwb3J0c1B1c2hTdGF0ZSIsInVhIiwidXNlckFnZW50IiwiVGltZSIsInBlcmZvcm1hbmNlIiwibm93IiwiX2tleSIsImdlbktleSIsInRvRml4ZWQiLCJwdXNoU3RhdGUiLCJyZXBsYWNlU3RhdGUiLCJydW5RdWV1ZSIsInF1ZXVlIiwiY2IiLCJzdGVwIiwiSGlzdG9yeSIsIm5vcm1hbGl6ZUJhc2UiLCJwZW5kaW5nIiwicmVhZHkiLCJyZWFkeUNicyIsInJlYWR5RXJyb3JDYnMiLCJlcnJvckNicyIsImxpc3RlbiIsIm9uUmVhZHkiLCJlcnJvckNiIiwib25FcnJvciIsInRyYW5zaXRpb25UbyIsIm9uQ29tcGxldGUiLCJvbkFib3J0IiwiY29uZmlybVRyYW5zaXRpb24iLCJ1cGRhdGVSb3V0ZSIsImVuc3VyZVVSTCIsImVyciIsImlzRXJyb3IiLCJyZXNvbHZlUXVldWUiLCJ1cGRhdGVkIiwiZGVhY3RpdmF0ZWQiLCJhY3RpdmF0ZWQiLCJleHRyYWN0TGVhdmVHdWFyZHMiLCJiZWZvcmVIb29rcyIsImV4dHJhY3RVcGRhdGVIb29rcyIsInJlc29sdmVBc3luY0NvbXBvbmVudHMiLCJpdGVyYXRvciIsInBvc3RFbnRlckNicyIsImlzVmFsaWQiLCJlbnRlckd1YXJkcyIsImV4dHJhY3RFbnRlckd1YXJkcyIsInJlc29sdmVIb29rcyIsImFmdGVySG9va3MiLCJiYXNlRWwiLCJtYXgiLCJleHRyYWN0R3VhcmRzIiwicmVjb3JkcyIsInJldmVyc2UiLCJndWFyZHMiLCJmbGF0TWFwQ29tcG9uZW50cyIsImRlZiIsImluc3RhbmNlIiwiZ3VhcmQiLCJleHRyYWN0R3VhcmQiLCJmbGF0dGVuIiwiYmluZEd1YXJkIiwiYm91bmRSb3V0ZUd1YXJkIiwiY2JzIiwiYmluZEVudGVyR3VhcmQiLCJyb3V0ZUVudGVyR3VhcmQiLCJwb2xsIiwiaGFzQXN5bmMiLCJjaWQiLCJvbmNlIiwicmVzb2x2ZWREZWYiLCJyZXNvbHZlZCIsInJlYXNvbiIsIm1zZyIsInRoZW4iLCJjb21wIiwiY2FsbGVkIiwiSFRNTDVIaXN0b3J5IiwiSGlzdG9yeSQkMSIsImV4cGVjdFNjcm9sbCIsImdldExvY2F0aW9uIiwiX19wcm90b19fIiwiY29uc3RydWN0b3IiLCJnbyIsIm4iLCJmcm9tUm91dGUiLCJnZXRDdXJyZW50TG9jYXRpb24iLCJwYXRobmFtZSIsInNlYXJjaCIsIkhhc2hIaXN0b3J5IiwiZmFsbGJhY2siLCJjaGVja0ZhbGxiYWNrIiwiZW5zdXJlU2xhc2giLCJzZXR1cExpc3RlbmVycyIsImdldEhhc2giLCJyZXBsYWNlSGFzaCIsInB1c2hIYXNoIiwiQWJzdHJhY3RIaXN0b3J5IiwidGFyZ2V0SW5kZXgiLCJWdWVSb3V0ZXIiLCJhcHBzIiwibWF0Y2hlciIsIm1vZGUiLCJwcm90b3R5cGVBY2Nlc3NvcnMiLCJzZXR1cEhhc2hMaXN0ZW5lciIsImJlZm9yZUVhY2giLCJyZWdpc3Rlckhvb2siLCJiZWZvcmVSZXNvbHZlIiwiYWZ0ZXJFYWNoIiwiYmFjayIsImZvcndhcmQiLCJnZXRNYXRjaGVkQ29tcG9uZW50cyIsImNyZWF0ZUhyZWYiLCJub3JtYWxpemVkVG8iLCJkZWZpbmVQcm9wZXJ0aWVzIiwidmVyc2lvbiIsInVzZSIsImF0b20iLCJpbkRldk1vZGUiLCJzdG9yZSIsIlN0b3JlIiwic2V0dGluZ3MiLCJ0YXNrcyIsIm5hbWVzcGFjZWQiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwibXV0YXRpb25zIiwic2V0VXJsIiwic2V0VXNlcm5hbWUiLCJzZXRQYXNzd29yZCIsImFjdGlvbnMiLCJpbml0aWFsaXplIiwiY29tbWl0IiwiUmVwb3NpdG9yeSIsInJvb3RTdGF0ZSIsImZldGNoQWxsVGFza3NGb3JVc2VyIiwiaXNzdWVzIiwiZ2V0VGFza1RyYW5zaXRpb25zIiwidGFzayIsIlByb21pc2UiLCJmZXRjaFRhc2tUcmFuc2l0aW9ucyIsInRyYW5zaXRpb25zIiwidHJhbnNpdGlvblRhc2siLCJkaXNwYXRjaCIsInRyYW5zaXRpb24iLCJleGVjdXRlVGFza1RyYW5zaXNpdG9uIiwidXBkYXRlVGFzayIsImZldGNoVGFzayIsImdldHRlcnMiLCJzZXRUYXNrcyIsImRlc2NyaXB0aW9uIiwiZmllbGRzIiwic3VtbWFyeSIsImljb24iLCJpc3N1ZXR5cGUiLCJpY29uVXJsIiwiaXNFeHBhbmRlZCIsImZyZXNoVGFzayIsInNldFRhc2tUcmFuc2l0aW9ucyIsInRvZ2dsZUV4cGFuZGVkIiwicmVtb3RlIiwianFsIiwic3RhcnRBdCIsIm1heFJlc3VsdHMiLCJmaWVsZHNCeUtleXMiLCJhdXRoIiwicmVxdWVzdE9wdGlvbnMiLCJib2R5IiwianNvbiIsInByb2R1Y3Rpb25UaXAiLCJqaXJhVGFza3NWaWV3IiwiYWN0aXZhdGUiLCJjb21tYW5kcyIsImFkZCIsInRvZ2dsZSIsImRlYWN0aXZhdGUiLCIkZGVzdHJveSIsImlzVmlzaWJsZSIsIiRkYXRhIiwiamlyYVVybCIsIm9iamVjdCIsIiQiLCJnbG9iYWwiLCJjaGFycyIsIkludmFsaWRDaGFyYWN0ZXJFcnJvciIsImlucHV0IiwiYmxvY2siLCJjaGFyQ29kZSIsImlkeCIsIm91dHB1dCIsImF0b2IiLCJiYyIsImJzIiwiZnJvbUNoYXJDb2RlIiwiaHR0cEZvbGxvdyIsImh0dHBzRm9sbG93IiwiemxpYiIsInBrZyIsImh0dHBBZGFwdGVyIiwiZGlzcGF0Y2hIdHRwUmVxdWVzdCIsInRpbWVyIiwiYWJvcnRlZCIsIlVpbnQ4QXJyYXkiLCJwYXJzZWQiLCJ1cmxBdXRoIiwidXJsVXNlcm5hbWUiLCJ1cmxQYXNzd29yZCIsIkF1dGhvcml6YXRpb24iLCJpc0h0dHBzIiwiaHR0cHNBZ2VudCIsImh0dHBBZ2VudCIsImhvc3RuYW1lIiwicG9ydCIsInByb3h5IiwicHJveHlFbnYiLCJwcm94eVVybCIsImVudiIsInBhcnNlZFByb3h5VXJsIiwiaG9zdCIsInByb3h5VXJsQXV0aCIsInRyYW5zcG9ydCIsInJlcSIsImhhbmRsZVJlc3BvbnNlIiwiY2xlYXJUaW1lb3V0Iiwic3RyZWFtIiwiY3JlYXRlVW56aXAiLCJsYXN0UmVxdWVzdCIsInN0YXR1c1RleHQiLCJzdGF0dXNNZXNzYWdlIiwicmVzcG9uc2VUeXBlIiwicmVzcG9uc2VCdWZmZXIiLCJoYW5kbGVTdHJlYW1EYXRhIiwiY2h1bmsiLCJoYW5kbGVTdHJlYW1FcnJvciIsImhhbmRsZVN0cmVhbUVuZCIsInJlc3BvbnNlRGF0YSIsImhhbmRsZVJlcXVlc3RFcnJvciIsImhhbmRsZVJlcXVlc3RUaW1lb3V0IiwiY2FuY2VsVG9rZW4iLCJwcm9taXNlIiwib25DYW5jZWxlZCIsImNhbmNlbCIsInBhcnNlSGVhZGVycyIsImlzVVJMU2FtZU9yaWdpbiIsInhockFkYXB0ZXIiLCJkaXNwYXRjaFhoclJlcXVlc3QiLCJyZXF1ZXN0RGF0YSIsInJlcXVlc3RIZWFkZXJzIiwibG9hZEV2ZW50IiwieERvbWFpbiIsIlhEb21haW5SZXF1ZXN0Iiwib25wcm9ncmVzcyIsImhhbmRsZVByb2dyZXNzIiwib250aW1lb3V0IiwiaGFuZGxlVGltZW91dCIsIm9wZW4iLCJoYW5kbGVMb2FkIiwicmVhZHlTdGF0ZSIsInJlc3BvbnNlVVJMIiwicmVzcG9uc2VIZWFkZXJzIiwiZ2V0QWxsUmVzcG9uc2VIZWFkZXJzIiwicmVzcG9uc2VUZXh0Iiwib25lcnJvciIsImhhbmRsZUVycm9yIiwiY29va2llcyIsInhzcmZWYWx1ZSIsIndpdGhDcmVkZW50aWFscyIsInJlYWQiLCJzZXRSZXF1ZXN0SGVhZGVyIiwidG9Mb3dlckNhc2UiLCJvbkRvd25sb2FkUHJvZ3Jlc3MiLCJvblVwbG9hZFByb2dyZXNzIiwidXBsb2FkIiwic2VuZCIsIkF4aW9zIiwiY3JlYXRlSW5zdGFuY2UiLCJkZWZhdWx0Q29uZmlnIiwiY29udGV4dCIsImF4aW9zIiwiaW5zdGFuY2VDb25maWciLCJDYW5jZWxUb2tlbiIsImFsbCIsInByb21pc2VzIiwic3ByZWFkIiwiZXhlY3V0b3IiLCJyZXNvbHZlUHJvbWlzZSIsInByb21pc2VFeGVjdXRvciIsInRocm93SWZSZXF1ZXN0ZWQiLCJJbnRlcmNlcHRvck1hbmFnZXIiLCJkaXNwYXRjaFJlcXVlc3QiLCJpc0Fic29sdXRlVVJMIiwiY29tYmluZVVSTHMiLCJpbnRlcmNlcHRvcnMiLCJiYXNlVVJMIiwiY2hhaW4iLCJ1bnNoaWZ0UmVxdWVzdEludGVyY2VwdG9ycyIsImludGVyY2VwdG9yIiwiZnVsZmlsbGVkIiwicmVqZWN0ZWQiLCJwdXNoUmVzcG9uc2VJbnRlcmNlcHRvcnMiLCJoYW5kbGVycyIsImVqZWN0IiwiZm9yRWFjaEhhbmRsZXIiLCJ0cmFuc2Zvcm1EYXRhIiwidGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZCIsImNsZWFuSGVhZGVyQ29uZmlnIiwib25BZGFwdGVyUmVzb2x1dGlvbiIsIm9uQWRhcHRlclJlamVjdGlvbiIsImZucyIsInRyYW5zZm9ybSIsIkUiLCJyZWxhdGl2ZVVSTCIsInN0YW5kYXJkQnJvd3NlckVudiIsImV4cGlyZXMiLCJkb21haW4iLCJzZWN1cmUiLCJjb29raWUiLCJ0b0dNVFN0cmluZyIsInJlbW92ZSIsIm5vblN0YW5kYXJkQnJvd3NlckVudiIsIm1zaWUiLCJ1cmxQYXJzaW5nTm9kZSIsImNyZWF0ZUVsZW1lbnQiLCJvcmlnaW5VUkwiLCJyZXNvbHZlVVJMIiwic2V0QXR0cmlidXRlIiwicmVxdWVzdFVSTCIsIm5vcm1hbGl6ZWROYW1lIiwicHJvY2Vzc0hlYWRlciIsInBhcnNlciIsImxpbmUiLCJzIiwiZCIsImlzTmFOIiwibG9uZyIsImZtdExvbmciLCJmbXRTaG9ydCIsInBhcnNlRmxvYXQiLCJyb3VuZCIsInBsdXJhbCIsImZsb29yIiwiY2VpbCIsImxvYWQiLCJzdG9yYWdlIiwiY2hyb21lIiwibG9jYWwiLCJsb2NhbHN0b3JhZ2UiLCJzdHlsZSIsIldlYmtpdEFwcGVhcmFuY2UiLCJmaXJlYnVnIiwiZXhjZXB0aW9uIiwidGFibGUiLCJwYXJzZUludCIsIiQxIiwibGFzdEMiLCJGdW5jdGlvbiIsInJlbW92ZUl0ZW0iLCJyIiwiREVCVUciLCJsb2NhbFN0b3JhZ2UiLCJ0dHkiLCJpbnNwZWN0T3B0cyIsInJlZHVjZSIsInByb3AiLCJzdWJzdHJpbmciLCJrIiwiTnVtYmVyIiwiZmQiLCJERUJVR19GRCIsImRlcHJlY2F0ZSIsInN0ZG91dCIsInN0ZGVyciIsImNyZWF0ZVdyaXRhYmxlU3RkaW9TdHJlYW0iLCJpc2F0dHkiLCJvIiwiaW5zcGVjdCIsIk8iLCJ0b1VUQ1N0cmluZyIsInR0eV93cmFwIiwiYmluZGluZyIsImd1ZXNzSGFuZGxlVHlwZSIsIldyaXRlU3RyZWFtIiwiX3R5cGUiLCJfaGFuZGxlIiwidW5yZWYiLCJmcyIsIlN5bmNXcml0ZVN0cmVhbSIsImF1dG9DbG9zZSIsIm5ldCIsIlNvY2tldCIsInJlYWRhYmxlIiwid3JpdGFibGUiLCJfaXNTdGRpbyIsIl9leHRlbmQiLCJsaXN0VG9TdHlsZXMiLCJwYXJlbnRJZCIsInN0eWxlcyIsIm5ld1N0eWxlcyIsImNzcyIsIm1lZGlhIiwicGFydCIsInN5bmMiLCJtb2R1bGVOYW1lIiwicmVnaXN0ZXJNb2R1bGUiLCJjbG9uZVJvdXRlIiwiaXNUaW1lVHJhdmVsaW5nIiwiY3VycmVudFBhdGgiLCJ3YXRjaCIsImNsb25lIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFF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O0FBQzNNLCtJQUErSSxxRUFBcUU7QUFDcE47QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7QUNwQkE7O0FBRUE7QUFDQSxvQ0FBc007QUFDdE07QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdJQUFnSSxxRUFBcUU7QUFDck0seUlBQXlJLHFFQUFxRTtBQUM5TTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7OztBQ3BCQTs7QUFFQTtBQUNBLG9DQUEyTDtBQUMzTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0hBQW9ILHNFQUFzRTtBQUMxTCw2SEFBNkgsc0VBQXNFO0FBQ25NO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7O0FDcEJBOztBQUVBO0FBQ0Esb0NBQTBMO0FBQzFMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvSEFBb0gscUVBQXFFO0FBQ3pMLDZIQUE2SCxxRUFBcUU7QUFDbE07QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7QUNwQkEsbUM7Ozs7OztBQ0FBLG1DOzs7Ozs7QUNBQSxxQzs7Ozs7O0FDQUEsK0I7Ozs7OztBQ0FBLGdDOzs7Ozs7QUNBQSxtQzs7Ozs7O0FDQUEsZ0M7Ozs7OztBQ0FBLGlDOzs7Ozs7QUNBQSxpQyIsImZpbGUiOiJwYWNrYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgN2M3ZTM2MGE0YjA0NWVlZTE1MmUiLCIndXNlIHN0cmljdCc7XG5cbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcblxuLypnbG9iYWwgdG9TdHJpbmc6dHJ1ZSovXG5cbi8vIHV0aWxzIGlzIGEgbGlicmFyeSBvZiBnZW5lcmljIGhlbHBlciBmdW5jdGlvbnMgbm9uLXNwZWNpZmljIHRvIGF4aW9zXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXkodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBOb2RlIEJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTm9kZSBCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0J1ZmZlcih2YWwpIHtcbiAgcmV0dXJuICgodHlwZW9mIEJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcpICYmIChCdWZmZXIuaXNCdWZmZXIpICYmIChCdWZmZXIuaXNCdWZmZXIodmFsKSkpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRm9ybURhdGFcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBGb3JtRGF0YSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRm9ybURhdGEodmFsKSB7XG4gIHJldHVybiAodHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJykgJiYgKHZhbCBpbnN0YW5jZW9mIEZvcm1EYXRhKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyVmlldyh2YWwpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnKSAmJiAoQXJyYXlCdWZmZXIuaXNWaWV3KSkge1xuICAgIHJlc3VsdCA9IEFycmF5QnVmZmVyLmlzVmlldyh2YWwpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9ICh2YWwpICYmICh2YWwuYnVmZmVyKSAmJiAodmFsLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyaW5nXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJpbmcsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgTnVtYmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBOdW1iZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc051bWJlcih2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIHVuZGVmaW5lZFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRGF0ZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRGF0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRGF0ZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRmlsZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRmlsZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRmlsZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRmlsZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQmxvYlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQmxvYiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQmxvYih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQmxvYl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZ1bmN0aW9uLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmVhbVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyZWFtLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJlYW0odmFsKSB7XG4gIHJldHVybiBpc09iamVjdCh2YWwpICYmIGlzRnVuY3Rpb24odmFsLnBpcGUpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVVJMU2VhcmNoUGFyYW1zKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIFVSTFNlYXJjaFBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsIGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zO1xufVxuXG4vKipcbiAqIFRyaW0gZXhjZXNzIHdoaXRlc3BhY2Ugb2ZmIHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIFN0cmluZyB0byB0cmltXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgU3RyaW5nIGZyZWVkIG9mIGV4Y2VzcyB3aGl0ZXNwYWNlXG4gKi9cbmZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyovLCAnJykucmVwbGFjZSgvXFxzKiQvLCAnJyk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHdlJ3JlIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50XG4gKlxuICogVGhpcyBhbGxvd3MgYXhpb3MgdG8gcnVuIGluIGEgd2ViIHdvcmtlciwgYW5kIHJlYWN0LW5hdGl2ZS5cbiAqIEJvdGggZW52aXJvbm1lbnRzIHN1cHBvcnQgWE1MSHR0cFJlcXVlc3QsIGJ1dCBub3QgZnVsbHkgc3RhbmRhcmQgZ2xvYmFscy5cbiAqXG4gKiB3ZWIgd29ya2VyczpcbiAqICB0eXBlb2Ygd2luZG93IC0+IHVuZGVmaW5lZFxuICogIHR5cGVvZiBkb2N1bWVudCAtPiB1bmRlZmluZWRcbiAqXG4gKiByZWFjdC1uYXRpdmU6XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ1JlYWN0TmF0aXZlJ1xuICovXG5mdW5jdGlvbiBpc1N0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG4gICk7XG59XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuKSB7XG4gIC8vIERvbid0IGJvdGhlciBpZiBubyB2YWx1ZSBwcm92aWRlZFxuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRm9yY2UgYW4gYXJyYXkgaWYgbm90IGFscmVhZHkgc29tZXRoaW5nIGl0ZXJhYmxlXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyAmJiAhaXNBcnJheShvYmopKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgb2JqID0gW29ial07XG4gIH1cblxuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFycmF5IHZhbHVlc1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBY2NlcHRzIHZhcmFyZ3MgZXhwZWN0aW5nIGVhY2ggYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0LCB0aGVuXG4gKiBpbW11dGFibHkgbWVyZ2VzIHRoZSBwcm9wZXJ0aWVzIG9mIGVhY2ggb2JqZWN0IGFuZCByZXR1cm5zIHJlc3VsdC5cbiAqXG4gKiBXaGVuIG11bHRpcGxlIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBrZXkgdGhlIGxhdGVyIG9iamVjdCBpblxuICogdGhlIGFyZ3VtZW50cyBsaXN0IHdpbGwgdGFrZSBwcmVjZWRlbmNlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIHZhciByZXN1bHQgPSBtZXJnZSh7Zm9vOiAxMjN9LCB7Zm9vOiA0NTZ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5mb28pOyAvLyBvdXRwdXRzIDQ1NlxuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gbWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEV4dGVuZHMgb2JqZWN0IGEgYnkgbXV0YWJseSBhZGRpbmcgdG8gaXQgdGhlIHByb3BlcnRpZXMgb2Ygb2JqZWN0IGIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGEgVGhlIG9iamVjdCB0byBiZSBleHRlbmRlZFxuICogQHBhcmFtIHtPYmplY3R9IGIgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHBhcmFtIHtPYmplY3R9IHRoaXNBcmcgVGhlIG9iamVjdCB0byBiaW5kIGZ1bmN0aW9uIHRvXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSByZXN1bHRpbmcgdmFsdWUgb2Ygb2JqZWN0IGFcbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKGEsIGIsIHRoaXNBcmcpIHtcbiAgZm9yRWFjaChiLCBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0aGlzQXJnICYmIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFba2V5XSA9IGJpbmQodmFsLCB0aGlzQXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYVtrZXldID0gdmFsO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBhO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNBcnJheTogaXNBcnJheSxcbiAgaXNBcnJheUJ1ZmZlcjogaXNBcnJheUJ1ZmZlcixcbiAgaXNCdWZmZXI6IGlzQnVmZmVyLFxuICBpc0Zvcm1EYXRhOiBpc0Zvcm1EYXRhLFxuICBpc0FycmF5QnVmZmVyVmlldzogaXNBcnJheUJ1ZmZlclZpZXcsXG4gIGlzU3RyaW5nOiBpc1N0cmluZyxcbiAgaXNOdW1iZXI6IGlzTnVtYmVyLFxuICBpc09iamVjdDogaXNPYmplY3QsXG4gIGlzVW5kZWZpbmVkOiBpc1VuZGVmaW5lZCxcbiAgaXNEYXRlOiBpc0RhdGUsXG4gIGlzRmlsZTogaXNGaWxlLFxuICBpc0Jsb2I6IGlzQmxvYixcbiAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcbiAgaXNTdHJlYW06IGlzU3RyZWFtLFxuICBpc1VSTFNlYXJjaFBhcmFtczogaXNVUkxTZWFyY2hQYXJhbXMsXG4gIGlzU3RhbmRhcmRCcm93c2VyRW52OiBpc1N0YW5kYXJkQnJvd3NlckVudixcbiAgZm9yRWFjaDogZm9yRWFjaCxcbiAgbWVyZ2U6IG1lcmdlLFxuICBleHRlbmQ6IGV4dGVuZCxcbiAgdHJpbTogdHJpbVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYXhpb3MvbGliL3V0aWxzLmpzIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiAgTW9kaWZpZWQgYnkgRXZhbiBZb3UgQHl5eDk5MDgwM1xuKi9cblxudmFyIGhhc0RvY3VtZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuXG5pZiAodHlwZW9mIERFQlVHICE9PSAndW5kZWZpbmVkJyAmJiBERUJVRykge1xuICBpZiAoIWhhc0RvY3VtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2dWUtc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQuICcgK1xuICAgIFwiVXNlIHsgdGFyZ2V0OiAnbm9kZScgfSBpbiB5b3VyIFdlYnBhY2sgY29uZmlnIHRvIGluZGljYXRlIGEgc2VydmVyLXJlbmRlcmluZyBlbnZpcm9ubWVudC5cIlxuICApIH1cbn1cblxudmFyIGxpc3RUb1N0eWxlcyA9IHJlcXVpcmUoJy4vbGlzdFRvU3R5bGVzJylcblxuLypcbnR5cGUgU3R5bGVPYmplY3QgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHBhcnRzOiBBcnJheTxTdHlsZU9iamVjdFBhcnQ+XG59XG5cbnR5cGUgU3R5bGVPYmplY3RQYXJ0ID0ge1xuICBjc3M6IHN0cmluZztcbiAgbWVkaWE6IHN0cmluZztcbiAgc291cmNlTWFwOiA/c3RyaW5nXG59XG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7LypcbiAgW2lkOiBudW1iZXJdOiB7XG4gICAgaWQ6IG51bWJlcixcbiAgICByZWZzOiBudW1iZXIsXG4gICAgcGFydHM6IEFycmF5PChvYmo/OiBTdHlsZU9iamVjdFBhcnQpID0+IHZvaWQ+XG4gIH1cbiovfVxuXG52YXIgaGVhZCA9IGhhc0RvY3VtZW50ICYmIChkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0pXG52YXIgc2luZ2xldG9uRWxlbWVudCA9IG51bGxcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMFxudmFyIGlzUHJvZHVjdGlvbiA9IGZhbHNlXG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHt9XG5cbi8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxudmFyIGlzT2xkSUUgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAvbXNpZSBbNi05XVxcYi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHBhcmVudElkLCBsaXN0LCBfaXNQcm9kdWN0aW9uKSB7XG4gIGlzUHJvZHVjdGlvbiA9IF9pc1Byb2R1Y3Rpb25cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBsaXN0KVxuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICAgIGRvbVN0eWxlLnJlZnMtLVxuICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpXG4gICAgfVxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIG5ld0xpc3QpXG4gICAgICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlcyA9IFtdXG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV1cbiAgICAgIGlmIChkb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXSgpXG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzIC8qIEFycmF5PFN0eWxlT2JqZWN0PiAqLykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrK1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKVxuICAgICAgfVxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBpZiAoZG9tU3R5bGUucGFydHMubGVuZ3RoID4gaXRlbS5wYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMubGVuZ3RoID0gaXRlbS5wYXJ0cy5sZW5ndGhcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW11cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7IGlkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHMgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKCkge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICBzdHlsZUVsZW1lbnQudHlwZSA9ICd0ZXh0L2NzcydcbiAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpXG4gIHJldHVybiBzdHlsZUVsZW1lbnRcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgdmFyIHVwZGF0ZSwgcmVtb3ZlXG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdHlsZVtkYXRhLXZ1ZS1zc3ItaWR+PVwiJyArIG9iai5pZCArICdcIl0nKVxuXG4gIGlmIChzdHlsZUVsZW1lbnQpIHtcbiAgICBpZiAoaXNQcm9kdWN0aW9uKSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBhbmQgaW4gcHJvZHVjdGlvbiBtb2RlLlxuICAgICAgLy8gc2ltcGx5IGRvIG5vdGhpbmcuXG4gICAgICByZXR1cm4gbm9vcFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBidXQgaW4gZGV2IG1vZGUuXG4gICAgICAvLyBmb3Igc29tZSByZWFzb24gQ2hyb21lIGNhbid0IGhhbmRsZSBzb3VyY2UgbWFwIGluIHNlcnZlci1yZW5kZXJlZFxuICAgICAgLy8gc3R5bGUgdGFncyAtIHNvdXJjZSBtYXBzIGluIDxzdHlsZT4gb25seSB3b3JrcyBpZiB0aGUgc3R5bGUgdGFnIGlzXG4gICAgICAvLyBjcmVhdGVkIGFuZCBpbnNlcnRlZCBkeW5hbWljYWxseS4gU28gd2UgcmVtb3ZlIHRoZSBzZXJ2ZXIgcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlcyBhbmQgaW5qZWN0IG5ldyBvbmVzLlxuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIGlmIChpc09sZElFKSB7XG4gICAgLy8gdXNlIHNpbmdsZXRvbiBtb2RlIGZvciBJRTkuXG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKytcbiAgICBzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KCkpXG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpXG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSlcbiAgfSBlbHNlIHtcbiAgICAvLyB1c2UgbXVsdGktc3R5bGUtdGFnIG1vZGUgaW4gYWxsIG90aGVyIGNhc2VzXG4gICAgc3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KClcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KVxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICB1cGRhdGUob2JqKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG4gICAgICAgICAgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcbiAgICAgICAgICBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iailcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKClcbiAgICB9XG4gIH1cbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnRcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKVxuICB9XG59KSgpXG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3NcblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcylcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcylcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGVFbGVtZW50LCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3NcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwXG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSlcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXApIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RldnRvb2xzL2RvY3MvamF2YXNjcmlwdC1kZWJ1Z2dpbmdcbiAgICAvLyB0aGlzIG1ha2VzIHNvdXJjZSBtYXBzIGluc2lkZSBzdHlsZSB0YWdzIHdvcmsgcHJvcGVybHkgaW4gQ2hyb21lXG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlVVJMPScgKyBzb3VyY2VNYXAuc291cmNlc1swXSArICcgKi8nXG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJyArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyAnICovJ1xuICB9XG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzc1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKVxuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSlcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ2dWV4XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidnVleFwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInZ1ZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInZ1ZVwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHJhd1NjcmlwdEV4cG9ydHMsXG4gIGNvbXBpbGVkVGVtcGxhdGUsXG4gIHNjb3BlSWQsXG4gIGNzc01vZHVsZXNcbikge1xuICB2YXIgZXNNb2R1bGVcbiAgdmFyIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyB8fCB7fVxuXG4gIC8vIEVTNiBtb2R1bGVzIGludGVyb3BcbiAgdmFyIHR5cGUgPSB0eXBlb2YgcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIGlmICh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXNNb2R1bGUgPSByYXdTY3JpcHRFeHBvcnRzXG4gICAgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICB9XG5cbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChjb21waWxlZFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSBjb21waWxlZFRlbXBsYXRlLnJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gY29tcGlsZWRUZW1wbGF0ZS5zdGF0aWNSZW5kZXJGbnNcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9IHNjb3BlSWRcbiAgfVxuXG4gIC8vIGluamVjdCBjc3NNb2R1bGVzXG4gIGlmIChjc3NNb2R1bGVzKSB7XG4gICAgdmFyIGNvbXB1dGVkID0gT2JqZWN0LmNyZWF0ZShvcHRpb25zLmNvbXB1dGVkIHx8IG51bGwpXG4gICAgT2JqZWN0LmtleXMoY3NzTW9kdWxlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgbW9kdWxlID0gY3NzTW9kdWxlc1trZXldXG4gICAgICBjb21wdXRlZFtrZXldID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbW9kdWxlIH1cbiAgICB9KVxuICAgIG9wdGlvbnMuY29tcHV0ZWQgPSBjb21wdXRlZFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBlc01vZHVsZTogZXNNb2R1bGUsXG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBlbmhhbmNlRXJyb3IgPSByZXF1aXJlKCcuL2VuaGFuY2VFcnJvcicpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSwgY29uZmlnLCBlcnJvciBjb2RlLCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuIEAgQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVFcnJvcihtZXNzYWdlLCBjb25maWcsIGNvZGUsIHJlc3BvbnNlKSB7XG4gIHZhciBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgcmV0dXJuIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXNwb25zZSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIG5vcm1hbGl6ZUhlYWRlck5hbWUgPSByZXF1aXJlKCcuL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZScpO1xuXG52YXIgREVGQVVMVF9DT05URU5UX1RZUEUgPSB7XG4gICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xufTtcblxuZnVuY3Rpb24gc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsIHZhbHVlKSB7XG4gIGlmICghdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVycykgJiYgdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVyc1snQ29udGVudC1UeXBlJ10pKSB7XG4gICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSB2YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWZhdWx0QWRhcHRlcigpIHtcbiAgdmFyIGFkYXB0ZXI7XG4gIGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gRm9yIGJyb3dzZXJzIHVzZSBYSFIgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL3hocicpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBub2RlIHVzZSBIVFRQIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy9odHRwJyk7XG4gIH1cbiAgcmV0dXJuIGFkYXB0ZXI7XG59XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgYWRhcHRlcjogZ2V0RGVmYXVsdEFkYXB0ZXIoKSxcblxuICB0cmFuc2Zvcm1SZXF1ZXN0OiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVxdWVzdChkYXRhLCBoZWFkZXJzKSB7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQ29udGVudC1UeXBlJyk7XG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQXJyYXlCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc1N0cmVhbShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNGaWxlKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0Jsb2IoZGF0YSlcbiAgICApIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlclZpZXcoZGF0YSkpIHtcbiAgICAgIHJldHVybiBkYXRhLmJ1ZmZlcjtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gZGF0YS50b1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNPYmplY3QoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICB0cmFuc2Zvcm1SZXNwb25zZTogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKGRhdGEpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgLyogSWdub3JlICovIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRpbWVvdXQ6IDAsXG5cbiAgeHNyZkNvb2tpZU5hbWU6ICdYU1JGLVRPS0VOJyxcbiAgeHNyZkhlYWRlck5hbWU6ICdYLVhTUkYtVE9LRU4nLFxuXG4gIG1heENvbnRlbnRMZW5ndGg6IC0xLFxuXG4gIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiB2YWxpZGF0ZVN0YXR1cyhzdGF0dXMpIHtcbiAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XG4gIH1cbn07XG5cbmRlZmF1bHRzLmhlYWRlcnMgPSB7XG4gIGNvbW1vbjoge1xuICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICB9XG59O1xuXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHt9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHV0aWxzLm1lcmdlKERFRkFVTFRfQ09OVEVOVF9UWVBFKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHRzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9heGlvcy9saWIvZGVmYXVsdHMuanMiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQSBgQ2FuY2VsYCBpcyBhbiBvYmplY3QgdGhhdCBpcyB0aHJvd24gd2hlbiBhbiBvcGVyYXRpb24gaXMgY2FuY2VsZWQuXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZz19IG1lc3NhZ2UgVGhlIG1lc3NhZ2UuXG4gKi9cbmZ1bmN0aW9uIENhbmNlbChtZXNzYWdlKSB7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG59XG5cbkNhbmNlbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuICdDYW5jZWwnICsgKHRoaXMubWVzc2FnZSA/ICc6ICcgKyB0aGlzLm1lc3NhZ2UgOiAnJyk7XG59O1xuXG5DYW5jZWwucHJvdG90eXBlLl9fQ0FOQ0VMX18gPSB0cnVlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanMiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNDYW5jZWwodmFsdWUpIHtcbiAgcmV0dXJuICEhKHZhbHVlICYmIHZhbHVlLl9fQ0FOQ0VMX18pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qcyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVcGRhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIGNvbmZpZywgZXJyb3IgY29kZSwgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVycm9yIFRoZSBlcnJvciB0byB1cGRhdGUuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuIEAgQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlc3BvbnNlKSB7XG4gIGVycm9yLmNvbmZpZyA9IGNvbmZpZztcbiAgaWYgKGNvZGUpIHtcbiAgICBlcnJvci5jb2RlID0gY29kZTtcbiAgfVxuICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICByZXR1cm4gZXJyb3I7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4vY3JlYXRlRXJyb3InKTtcblxuLyoqXG4gKiBSZXNvbHZlIG9yIHJlamVjdCBhIFByb21pc2UgYmFzZWQgb24gcmVzcG9uc2Ugc3RhdHVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IEEgZnVuY3Rpb24gdGhhdCByZWplY3RzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xuICB2YXIgdmFsaWRhdGVTdGF0dXMgPSByZXNwb25zZS5jb25maWcudmFsaWRhdGVTdGF0dXM7XG4gIC8vIE5vdGU6IHN0YXR1cyBpcyBub3QgZXhwb3NlZCBieSBYRG9tYWluUmVxdWVzdFxuICBpZiAoIXJlc3BvbnNlLnN0YXR1cyB8fCAhdmFsaWRhdGVTdGF0dXMgfHwgdmFsaWRhdGVTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKSkge1xuICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICB9IGVsc2Uge1xuICAgIHJlamVjdChjcmVhdGVFcnJvcihcbiAgICAgICdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsXG4gICAgICByZXNwb25zZS5jb25maWcsXG4gICAgICBudWxsLFxuICAgICAgcmVzcG9uc2VcbiAgICApKTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYXhpb3MvbGliL2NvcmUvc2V0dGxlLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpc0FyZywgYXJncyk7XG4gIH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWwpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpLlxuICAgIHJlcGxhY2UoLyU0MC9naSwgJ0AnKS5cbiAgICByZXBsYWNlKC8lM0EvZ2ksICc6JykuXG4gICAgcmVwbGFjZSgvJTI0L2csICckJykuXG4gICAgcmVwbGFjZSgvJTJDL2dpLCAnLCcpLlxuICAgIHJlcGxhY2UoLyUyMC9nLCAnKycpLlxuICAgIHJlcGxhY2UoLyU1Qi9naSwgJ1snKS5cbiAgICByZXBsYWNlKC8lNUQvZ2ksICddJyk7XG59XG5cbi8qKlxuICogQnVpbGQgYSBVUkwgYnkgYXBwZW5kaW5nIHBhcmFtcyB0byB0aGUgZW5kXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgYmFzZSBvZiB0aGUgdXJsIChlLmcuLCBodHRwOi8vd3d3Lmdvb2dsZS5jb20pXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gVGhlIHBhcmFtcyB0byBiZSBhcHBlbmRlZFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCB1cmxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZFVSTCh1cmwsIHBhcmFtcywgcGFyYW1zU2VyaWFsaXplcikge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgaWYgKCFwYXJhbXMpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdmFyIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIGlmIChwYXJhbXNTZXJpYWxpemVyKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtc1NlcmlhbGl6ZXIocGFyYW1zKTtcbiAgfSBlbHNlIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhwYXJhbXMpKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtcy50b1N0cmluZygpO1xuICB9IGVsc2Uge1xuICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgdXRpbHMuZm9yRWFjaChwYXJhbXMsIGZ1bmN0aW9uIHNlcmlhbGl6ZSh2YWwsIGtleSkge1xuICAgICAgaWYgKHZhbCA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh1dGlscy5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAga2V5ID0ga2V5ICsgJ1tdJztcbiAgICAgIH1cblxuICAgICAgaWYgKCF1dGlscy5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAgdmFsID0gW3ZhbF07XG4gICAgICB9XG5cbiAgICAgIHV0aWxzLmZvckVhY2godmFsLCBmdW5jdGlvbiBwYXJzZVZhbHVlKHYpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRGF0ZSh2KSkge1xuICAgICAgICAgIHYgPSB2LnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QodikpIHtcbiAgICAgICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodik7XG4gICAgICAgIH1cbiAgICAgICAgcGFydHMucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2KSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJ0cy5qb2luKCcmJyk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgc2VyaWFsaXplZFBhcmFtcztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIlxuLyoqXG4gKiBUaGlzIGlzIHRoZSBjb21tb24gbG9naWMgZm9yIGJvdGggdGhlIE5vZGUuanMgYW5kIHdlYiBicm93c2VyXG4gKiBpbXBsZW1lbnRhdGlvbnMgb2YgYGRlYnVnKClgLlxuICpcbiAqIEV4cG9zZSBgZGVidWcoKWAgYXMgdGhlIG1vZHVsZS5cbiAqL1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVEZWJ1Zy5kZWJ1ZyA9IGNyZWF0ZURlYnVnWydkZWZhdWx0J10gPSBjcmVhdGVEZWJ1ZztcbmV4cG9ydHMuY29lcmNlID0gY29lcmNlO1xuZXhwb3J0cy5kaXNhYmxlID0gZGlzYWJsZTtcbmV4cG9ydHMuZW5hYmxlID0gZW5hYmxlO1xuZXhwb3J0cy5lbmFibGVkID0gZW5hYmxlZDtcbmV4cG9ydHMuaHVtYW5pemUgPSByZXF1aXJlKCdtcycpO1xuXG4vKipcbiAqIFRoZSBjdXJyZW50bHkgYWN0aXZlIGRlYnVnIG1vZGUgbmFtZXMsIGFuZCBuYW1lcyB0byBza2lwLlxuICovXG5cbmV4cG9ydHMubmFtZXMgPSBbXTtcbmV4cG9ydHMuc2tpcHMgPSBbXTtcblxuLyoqXG4gKiBNYXAgb2Ygc3BlY2lhbCBcIiVuXCIgaGFuZGxpbmcgZnVuY3Rpb25zLCBmb3IgdGhlIGRlYnVnIFwiZm9ybWF0XCIgYXJndW1lbnQuXG4gKlxuICogVmFsaWQga2V5IG5hbWVzIGFyZSBhIHNpbmdsZSwgbG93ZXIgb3IgdXBwZXItY2FzZSBsZXR0ZXIsIGkuZS4gXCJuXCIgYW5kIFwiTlwiLlxuICovXG5cbmV4cG9ydHMuZm9ybWF0dGVycyA9IHt9O1xuXG4vKipcbiAqIFByZXZpb3VzIGxvZyB0aW1lc3RhbXAuXG4gKi9cblxudmFyIHByZXZUaW1lO1xuXG4vKipcbiAqIFNlbGVjdCBhIGNvbG9yLlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZVxuICogQHJldHVybiB7TnVtYmVyfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gc2VsZWN0Q29sb3IobmFtZXNwYWNlKSB7XG4gIHZhciBoYXNoID0gMCwgaTtcblxuICBmb3IgKGkgaW4gbmFtZXNwYWNlKSB7XG4gICAgaGFzaCAgPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIG5hbWVzcGFjZS5jaGFyQ29kZUF0KGkpO1xuICAgIGhhc2ggfD0gMDsgLy8gQ29udmVydCB0byAzMmJpdCBpbnRlZ2VyXG4gIH1cblxuICByZXR1cm4gZXhwb3J0cy5jb2xvcnNbTWF0aC5hYnMoaGFzaCkgJSBleHBvcnRzLmNvbG9ycy5sZW5ndGhdO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIGRlYnVnZ2VyIHdpdGggdGhlIGdpdmVuIGBuYW1lc3BhY2VgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVEZWJ1ZyhuYW1lc3BhY2UpIHtcblxuICBmdW5jdGlvbiBkZWJ1ZygpIHtcbiAgICAvLyBkaXNhYmxlZD9cbiAgICBpZiAoIWRlYnVnLmVuYWJsZWQpIHJldHVybjtcblxuICAgIHZhciBzZWxmID0gZGVidWc7XG5cbiAgICAvLyBzZXQgYGRpZmZgIHRpbWVzdGFtcFxuICAgIHZhciBjdXJyID0gK25ldyBEYXRlKCk7XG4gICAgdmFyIG1zID0gY3VyciAtIChwcmV2VGltZSB8fCBjdXJyKTtcbiAgICBzZWxmLmRpZmYgPSBtcztcbiAgICBzZWxmLnByZXYgPSBwcmV2VGltZTtcbiAgICBzZWxmLmN1cnIgPSBjdXJyO1xuICAgIHByZXZUaW1lID0gY3VycjtcblxuICAgIC8vIHR1cm4gdGhlIGBhcmd1bWVudHNgIGludG8gYSBwcm9wZXIgQXJyYXlcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuXG4gICAgYXJnc1swXSA9IGV4cG9ydHMuY29lcmNlKGFyZ3NbMF0pO1xuXG4gICAgaWYgKCdzdHJpbmcnICE9PSB0eXBlb2YgYXJnc1swXSkge1xuICAgICAgLy8gYW55dGhpbmcgZWxzZSBsZXQncyBpbnNwZWN0IHdpdGggJU9cbiAgICAgIGFyZ3MudW5zaGlmdCgnJU8nKTtcbiAgICB9XG5cbiAgICAvLyBhcHBseSBhbnkgYGZvcm1hdHRlcnNgIHRyYW5zZm9ybWF0aW9uc1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgYXJnc1swXSA9IGFyZ3NbMF0ucmVwbGFjZSgvJShbYS16QS1aJV0pL2csIGZ1bmN0aW9uKG1hdGNoLCBmb3JtYXQpIHtcbiAgICAgIC8vIGlmIHdlIGVuY291bnRlciBhbiBlc2NhcGVkICUgdGhlbiBkb24ndCBpbmNyZWFzZSB0aGUgYXJyYXkgaW5kZXhcbiAgICAgIGlmIChtYXRjaCA9PT0gJyUlJykgcmV0dXJuIG1hdGNoO1xuICAgICAgaW5kZXgrKztcbiAgICAgIHZhciBmb3JtYXR0ZXIgPSBleHBvcnRzLmZvcm1hdHRlcnNbZm9ybWF0XTtcbiAgICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgZm9ybWF0dGVyKSB7XG4gICAgICAgIHZhciB2YWwgPSBhcmdzW2luZGV4XTtcbiAgICAgICAgbWF0Y2ggPSBmb3JtYXR0ZXIuY2FsbChzZWxmLCB2YWwpO1xuXG4gICAgICAgIC8vIG5vdyB3ZSBuZWVkIHRvIHJlbW92ZSBgYXJnc1tpbmRleF1gIHNpbmNlIGl0J3MgaW5saW5lZCBpbiB0aGUgYGZvcm1hdGBcbiAgICAgICAgYXJncy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBpbmRleC0tO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1hdGNoO1xuICAgIH0pO1xuXG4gICAgLy8gYXBwbHkgZW52LXNwZWNpZmljIGZvcm1hdHRpbmcgKGNvbG9ycywgZXRjLilcbiAgICBleHBvcnRzLmZvcm1hdEFyZ3MuY2FsbChzZWxmLCBhcmdzKTtcblxuICAgIHZhciBsb2dGbiA9IGRlYnVnLmxvZyB8fCBleHBvcnRzLmxvZyB8fCBjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUpO1xuICAgIGxvZ0ZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICB9XG5cbiAgZGVidWcubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuICBkZWJ1Zy5lbmFibGVkID0gZXhwb3J0cy5lbmFibGVkKG5hbWVzcGFjZSk7XG4gIGRlYnVnLnVzZUNvbG9ycyA9IGV4cG9ydHMudXNlQ29sb3JzKCk7XG4gIGRlYnVnLmNvbG9yID0gc2VsZWN0Q29sb3IobmFtZXNwYWNlKTtcblxuICAvLyBlbnYtc3BlY2lmaWMgaW5pdGlhbGl6YXRpb24gbG9naWMgZm9yIGRlYnVnIGluc3RhbmNlc1xuICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGV4cG9ydHMuaW5pdCkge1xuICAgIGV4cG9ydHMuaW5pdChkZWJ1Zyk7XG4gIH1cblxuICByZXR1cm4gZGVidWc7XG59XG5cbi8qKlxuICogRW5hYmxlcyBhIGRlYnVnIG1vZGUgYnkgbmFtZXNwYWNlcy4gVGhpcyBjYW4gaW5jbHVkZSBtb2Rlc1xuICogc2VwYXJhdGVkIGJ5IGEgY29sb24gYW5kIHdpbGRjYXJkcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBlbmFibGUobmFtZXNwYWNlcykge1xuICBleHBvcnRzLnNhdmUobmFtZXNwYWNlcyk7XG5cbiAgZXhwb3J0cy5uYW1lcyA9IFtdO1xuICBleHBvcnRzLnNraXBzID0gW107XG5cbiAgdmFyIHNwbGl0ID0gKHR5cGVvZiBuYW1lc3BhY2VzID09PSAnc3RyaW5nJyA/IG5hbWVzcGFjZXMgOiAnJykuc3BsaXQoL1tcXHMsXSsvKTtcbiAgdmFyIGxlbiA9IHNwbGl0Lmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKCFzcGxpdFtpXSkgY29udGludWU7IC8vIGlnbm9yZSBlbXB0eSBzdHJpbmdzXG4gICAgbmFtZXNwYWNlcyA9IHNwbGl0W2ldLnJlcGxhY2UoL1xcKi9nLCAnLio/Jyk7XG4gICAgaWYgKG5hbWVzcGFjZXNbMF0gPT09ICctJykge1xuICAgICAgZXhwb3J0cy5za2lwcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcy5zdWJzdHIoMSkgKyAnJCcpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhwb3J0cy5uYW1lcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcyArICckJykpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIERpc2FibGUgZGVidWcgb3V0cHV0LlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZGlzYWJsZSgpIHtcbiAgZXhwb3J0cy5lbmFibGUoJycpO1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gbW9kZSBuYW1lIGlzIGVuYWJsZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZW5hYmxlZChuYW1lKSB7XG4gIHZhciBpLCBsZW47XG4gIGZvciAoaSA9IDAsIGxlbiA9IGV4cG9ydHMuc2tpcHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoZXhwb3J0cy5za2lwc1tpXS50ZXN0KG5hbWUpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAoaSA9IDAsIGxlbiA9IGV4cG9ydHMubmFtZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoZXhwb3J0cy5uYW1lc1tpXS50ZXN0KG5hbWUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIENvZXJjZSBgdmFsYC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWxcbiAqIEByZXR1cm4ge01peGVkfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gY29lcmNlKHZhbCkge1xuICBpZiAodmFsIGluc3RhbmNlb2YgRXJyb3IpIHJldHVybiB2YWwuc3RhY2sgfHwgdmFsLm1lc3NhZ2U7XG4gIHJldHVybiB2YWw7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2RlYnVnL3NyYy9kZWJ1Zy5qcyIsIid1c2Ugc3RyaWN0JztcbnZhciB1cmwgPSByZXF1aXJlKCd1cmwnKTtcbnZhciBhc3NlcnQgPSByZXF1aXJlKCdhc3NlcnQnKTtcbnZhciBodHRwID0gcmVxdWlyZSgnaHR0cCcpO1xudmFyIGh0dHBzID0gcmVxdWlyZSgnaHR0cHMnKTtcbnZhciBXcml0YWJsZSA9IHJlcXVpcmUoJ3N0cmVhbScpLldyaXRhYmxlO1xudmFyIGRlYnVnID0gcmVxdWlyZSgnZGVidWcnKSgnZm9sbG93LXJlZGlyZWN0cycpO1xuXG52YXIgbmF0aXZlUHJvdG9jb2xzID0geydodHRwOic6IGh0dHAsICdodHRwczonOiBodHRwc307XG52YXIgc2NoZW1lcyA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHtcblx0bWF4UmVkaXJlY3RzOiAyMVxufTtcbi8vIFJGQzcyMzHCpzQuMi4xOiBPZiB0aGUgcmVxdWVzdCBtZXRob2RzIGRlZmluZWQgYnkgdGhpcyBzcGVjaWZpY2F0aW9uLFxuLy8gdGhlIEdFVCwgSEVBRCwgT1BUSU9OUywgYW5kIFRSQUNFIG1ldGhvZHMgYXJlIGRlZmluZWQgdG8gYmUgc2FmZS5cbnZhciBzYWZlTWV0aG9kcyA9IHtHRVQ6IHRydWUsIEhFQUQ6IHRydWUsIE9QVElPTlM6IHRydWUsIFRSQUNFOiB0cnVlfTtcblxuLy8gQ3JlYXRlIGhhbmRsZXJzIHRoYXQgcGFzcyBldmVudHMgZnJvbSBuYXRpdmUgcmVxdWVzdHNcbnZhciBldmVudEhhbmRsZXJzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblsnYWJvcnQnLCAnYWJvcnRlZCcsICdlcnJvcicsICdzb2NrZXQnXS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuXHRldmVudEhhbmRsZXJzW2V2ZW50XSA9IGZ1bmN0aW9uIChhcmcpIHtcblx0XHR0aGlzLl9yZWRpcmVjdGFibGUuZW1pdChldmVudCwgYXJnKTtcblx0fTtcbn0pO1xuXG4vLyBBbiBIVFRQKFMpIHJlcXVlc3QgdGhhdCBjYW4gYmUgcmVkaXJlY3RlZFxuZnVuY3Rpb24gUmVkaXJlY3RhYmxlUmVxdWVzdChvcHRpb25zLCByZXNwb25zZUNhbGxiYWNrKSB7XG5cdC8vIEluaXRpYWxpemUgdGhlIHJlcXVlc3Rcblx0V3JpdGFibGUuY2FsbCh0aGlzKTtcblx0dGhpcy5fb3B0aW9ucyA9IG9wdGlvbnM7XG5cdHRoaXMuX3JlZGlyZWN0Q291bnQgPSAwO1xuXHR0aGlzLl9idWZmZXJlZFdyaXRlcyA9IFtdO1xuXG5cdC8vIEF0dGFjaCBhIGNhbGxiYWNrIGlmIHBhc3NlZFxuXHRpZiAocmVzcG9uc2VDYWxsYmFjaykge1xuXHRcdHRoaXMub24oJ3Jlc3BvbnNlJywgcmVzcG9uc2VDYWxsYmFjayk7XG5cdH1cblxuXHQvLyBSZWFjdCB0byByZXNwb25zZXMgb2YgbmF0aXZlIHJlcXVlc3RzXG5cdHZhciBzZWxmID0gdGhpcztcblx0dGhpcy5fb25OYXRpdmVSZXNwb25zZSA9IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdHNlbGYuX3Byb2Nlc3NSZXNwb25zZShyZXNwb25zZSk7XG5cdH07XG5cblx0Ly8gUGVyZm9ybSB0aGUgZmlyc3QgcmVxdWVzdFxuXHR0aGlzLl9wZXJmb3JtUmVxdWVzdCgpO1xufVxuUmVkaXJlY3RhYmxlUmVxdWVzdC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFdyaXRhYmxlLnByb3RvdHlwZSk7XG5cbi8vIEV4ZWN1dGVzIHRoZSBuZXh0IG5hdGl2ZSByZXF1ZXN0IChpbml0aWFsIG9yIHJlZGlyZWN0KVxuUmVkaXJlY3RhYmxlUmVxdWVzdC5wcm90b3R5cGUuX3BlcmZvcm1SZXF1ZXN0ID0gZnVuY3Rpb24gKCkge1xuXHQvLyBJZiBzcGVjaWZpZWQsIHVzZSB0aGUgYWdlbnQgY29ycmVzcG9uZGluZyB0byB0aGUgcHJvdG9jb2xcblx0Ly8gKEhUVFAgYW5kIEhUVFBTIHVzZSBkaWZmZXJlbnQgdHlwZXMgb2YgYWdlbnRzKVxuXHR2YXIgcHJvdG9jb2wgPSB0aGlzLl9vcHRpb25zLnByb3RvY29sO1xuXHRpZiAodGhpcy5fb3B0aW9ucy5hZ2VudHMpIHtcblx0XHR0aGlzLl9vcHRpb25zLmFnZW50ID0gdGhpcy5fb3B0aW9ucy5hZ2VudHNbc2NoZW1lc1twcm90b2NvbF1dO1xuXHR9XG5cblx0Ly8gQ3JlYXRlIHRoZSBuYXRpdmUgcmVxdWVzdFxuXHR2YXIgbmF0aXZlUHJvdG9jb2wgPSBuYXRpdmVQcm90b2NvbHNbdGhpcy5fb3B0aW9ucy5wcm90b2NvbF07XG5cdHZhciByZXF1ZXN0ID0gdGhpcy5fY3VycmVudFJlcXVlc3QgPVxuXHRcdFx0XHRuYXRpdmVQcm90b2NvbC5yZXF1ZXN0KHRoaXMuX29wdGlvbnMsIHRoaXMuX29uTmF0aXZlUmVzcG9uc2UpO1xuXHR0aGlzLl9jdXJyZW50VXJsID0gdXJsLmZvcm1hdCh0aGlzLl9vcHRpb25zKTtcblxuXHQvLyBTZXQgdXAgZXZlbnQgaGFuZGxlcnNcblx0cmVxdWVzdC5fcmVkaXJlY3RhYmxlID0gdGhpcztcblx0Zm9yICh2YXIgZXZlbnQgaW4gZXZlbnRIYW5kbGVycykge1xuXHRcdC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG5cdFx0aWYgKGV2ZW50KSB7XG5cdFx0XHRyZXF1ZXN0Lm9uKGV2ZW50LCBldmVudEhhbmRsZXJzW2V2ZW50XSk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gRW5kIGEgcmVkaXJlY3RlZCByZXF1ZXN0XG5cdC8vIChUaGUgZmlyc3QgcmVxdWVzdCBtdXN0IGJlIGVuZGVkIGV4cGxpY2l0bHkgd2l0aCBSZWRpcmVjdGFibGVSZXF1ZXN0I2VuZClcblx0aWYgKHRoaXMuX2lzUmVkaXJlY3QpIHtcblx0XHQvLyBJZiB0aGUgcmVxdWVzdCBkb2Vzbid0IGhhdmUgZW4gZW50aXR5LCBlbmQgZGlyZWN0bHkuXG5cdFx0dmFyIGJ1ZmZlcmVkV3JpdGVzID0gdGhpcy5fYnVmZmVyZWRXcml0ZXM7XG5cdFx0aWYgKGJ1ZmZlcmVkV3JpdGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmVxdWVzdC5lbmQoKTtcblx0XHQvLyBPdGhlcndpc2UsIHdyaXRlIHRoZSByZXF1ZXN0IGVudGl0eSBhbmQgZW5kIGFmdGVyd2FyZHMuXG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBpID0gMDtcblx0XHRcdChmdW5jdGlvbiB3cml0ZU5leHQoKSB7XG5cdFx0XHRcdGlmIChpIDwgYnVmZmVyZWRXcml0ZXMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0dmFyIGJ1ZmZlcmVkV3JpdGUgPSBidWZmZXJlZFdyaXRlc1tpKytdO1xuXHRcdFx0XHRcdHJlcXVlc3Qud3JpdGUoYnVmZmVyZWRXcml0ZS5kYXRhLCBidWZmZXJlZFdyaXRlLmVuY29kaW5nLCB3cml0ZU5leHQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJlcXVlc3QuZW5kKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pKCk7XG5cdFx0fVxuXHR9XG59O1xuXG4vLyBQcm9jZXNzZXMgYSByZXNwb25zZSBmcm9tIHRoZSBjdXJyZW50IG5hdGl2ZSByZXF1ZXN0XG5SZWRpcmVjdGFibGVSZXF1ZXN0LnByb3RvdHlwZS5fcHJvY2Vzc1Jlc3BvbnNlID0gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdC8vIFJGQzcyMzHCpzYuNDogVGhlIDN4eCAoUmVkaXJlY3Rpb24pIGNsYXNzIG9mIHN0YXR1cyBjb2RlIGluZGljYXRlc1xuXHQvLyB0aGF0IGZ1cnRoZXIgYWN0aW9uIG5lZWRzIHRvIGJlIHRha2VuIGJ5IHRoZSB1c2VyIGFnZW50IGluIG9yZGVyIHRvXG5cdC8vIGZ1bGZpbGwgdGhlIHJlcXVlc3QuIElmIGEgTG9jYXRpb24gaGVhZGVyIGZpZWxkIGlzIHByb3ZpZGVkLFxuXHQvLyB0aGUgdXNlciBhZ2VudCBNQVkgYXV0b21hdGljYWxseSByZWRpcmVjdCBpdHMgcmVxdWVzdCB0byB0aGUgVVJJXG5cdC8vIHJlZmVyZW5jZWQgYnkgdGhlIExvY2F0aW9uIGZpZWxkIHZhbHVlLFxuXHQvLyBldmVuIGlmIHRoZSBzcGVjaWZpYyBzdGF0dXMgY29kZSBpcyBub3QgdW5kZXJzdG9vZC5cblx0dmFyIGxvY2F0aW9uID0gcmVzcG9uc2UuaGVhZGVycy5sb2NhdGlvbjtcblx0aWYgKGxvY2F0aW9uICYmIHRoaXMuX29wdGlvbnMuZm9sbG93UmVkaXJlY3RzICE9PSBmYWxzZSAmJlxuXHRcdFx0cmVzcG9uc2Uuc3RhdHVzQ29kZSA+PSAzMDAgJiYgcmVzcG9uc2Uuc3RhdHVzQ29kZSA8IDQwMCkge1xuXHRcdC8vIFJGQzcyMzHCpzYuNDogQSBjbGllbnQgU0hPVUxEIGRldGVjdCBhbmQgaW50ZXJ2ZW5lXG5cdFx0Ly8gaW4gY3ljbGljYWwgcmVkaXJlY3Rpb25zIChpLmUuLCBcImluZmluaXRlXCIgcmVkaXJlY3Rpb24gbG9vcHMpLlxuXHRcdGlmICgrK3RoaXMuX3JlZGlyZWN0Q291bnQgPiB0aGlzLl9vcHRpb25zLm1heFJlZGlyZWN0cykge1xuXHRcdFx0cmV0dXJuIHRoaXMuZW1pdCgnZXJyb3InLCBuZXcgRXJyb3IoJ01heCByZWRpcmVjdHMgZXhjZWVkZWQuJykpO1xuXHRcdH1cblxuXHRcdC8vIFJGQzcyMzHCpzYuNDogQXV0b21hdGljIHJlZGlyZWN0aW9uIG5lZWRzIHRvIGRvbmUgd2l0aFxuXHRcdC8vIGNhcmUgZm9yIG1ldGhvZHMgbm90IGtub3duIHRvIGJlIHNhZmUgW+KApl0sXG5cdFx0Ly8gc2luY2UgdGhlIHVzZXIgbWlnaHQgbm90IHdpc2ggdG8gcmVkaXJlY3QgYW4gdW5zYWZlIHJlcXVlc3QuXG5cdFx0Ly8gUkZDNzIzMcKnNi40Ljc6IFRoZSAzMDcgKFRlbXBvcmFyeSBSZWRpcmVjdCkgc3RhdHVzIGNvZGUgaW5kaWNhdGVzXG5cdFx0Ly8gdGhhdCB0aGUgdGFyZ2V0IHJlc291cmNlIHJlc2lkZXMgdGVtcG9yYXJpbHkgdW5kZXIgYSBkaWZmZXJlbnQgVVJJXG5cdFx0Ly8gYW5kIHRoZSB1c2VyIGFnZW50IE1VU1QgTk9UIGNoYW5nZSB0aGUgcmVxdWVzdCBtZXRob2Rcblx0XHQvLyBpZiBpdCBwZXJmb3JtcyBhbiBhdXRvbWF0aWMgcmVkaXJlY3Rpb24gdG8gdGhhdCBVUkkuXG5cdFx0dmFyIGhlYWRlcjtcblx0XHR2YXIgaGVhZGVycyA9IHRoaXMuX29wdGlvbnMuaGVhZGVycztcblx0XHRpZiAocmVzcG9uc2Uuc3RhdHVzQ29kZSAhPT0gMzA3ICYmICEodGhpcy5fb3B0aW9ucy5tZXRob2QgaW4gc2FmZU1ldGhvZHMpKSB7XG5cdFx0XHR0aGlzLl9vcHRpb25zLm1ldGhvZCA9ICdHRVQnO1xuXHRcdFx0Ly8gRHJvcCBhIHBvc3NpYmxlIGVudGl0eSBhbmQgaGVhZGVycyByZWxhdGVkIHRvIGl0XG5cdFx0XHR0aGlzLl9idWZmZXJlZFdyaXRlcyA9IFtdO1xuXHRcdFx0Zm9yIChoZWFkZXIgaW4gaGVhZGVycykge1xuXHRcdFx0XHRpZiAoL15jb250ZW50LS9pLnRlc3QoaGVhZGVyKSkge1xuXHRcdFx0XHRcdGRlbGV0ZSBoZWFkZXJzW2hlYWRlcl07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBEcm9wIHRoZSBIb3N0IGhlYWRlciwgYXMgdGhlIHJlZGlyZWN0IG1pZ2h0IGxlYWQgdG8gYSBkaWZmZXJlbnQgaG9zdFxuXHRcdGlmICghdGhpcy5faXNSZWRpcmVjdCkge1xuXHRcdFx0Zm9yIChoZWFkZXIgaW4gaGVhZGVycykge1xuXHRcdFx0XHRpZiAoL15ob3N0JC9pLnRlc3QoaGVhZGVyKSkge1xuXHRcdFx0XHRcdGRlbGV0ZSBoZWFkZXJzW2hlYWRlcl07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBQZXJmb3JtIHRoZSByZWRpcmVjdGVkIHJlcXVlc3Rcblx0XHR2YXIgcmVkaXJlY3RVcmwgPSB1cmwucmVzb2x2ZSh0aGlzLl9jdXJyZW50VXJsLCBsb2NhdGlvbik7XG5cdFx0ZGVidWcoJ3JlZGlyZWN0aW5nIHRvJywgcmVkaXJlY3RVcmwpO1xuXHRcdE9iamVjdC5hc3NpZ24odGhpcy5fb3B0aW9ucywgdXJsLnBhcnNlKHJlZGlyZWN0VXJsKSk7XG5cdFx0dGhpcy5faXNSZWRpcmVjdCA9IHRydWU7XG5cdFx0dGhpcy5fcGVyZm9ybVJlcXVlc3QoKTtcblx0fSBlbHNlIHtcblx0XHQvLyBUaGUgcmVzcG9uc2UgaXMgbm90IGEgcmVkaXJlY3Q7IHJldHVybiBpdCBhcy1pc1xuXHRcdHJlc3BvbnNlLnJlc3BvbnNlVXJsID0gdGhpcy5fY3VycmVudFVybDtcblx0XHR0aGlzLmVtaXQoJ3Jlc3BvbnNlJywgcmVzcG9uc2UpO1xuXG5cdFx0Ly8gQ2xlYW4gdXBcblx0XHRkZWxldGUgdGhpcy5fb3B0aW9ucztcblx0XHRkZWxldGUgdGhpcy5fYnVmZmVyZWRXcml0ZXM7XG5cdH1cbn07XG5cbi8vIEFib3J0cyB0aGUgY3VycmVudCBuYXRpdmUgcmVxdWVzdFxuUmVkaXJlY3RhYmxlUmVxdWVzdC5wcm90b3R5cGUuYWJvcnQgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMuX2N1cnJlbnRSZXF1ZXN0LmFib3J0KCk7XG59O1xuXG4vLyBGbHVzaGVzIHRoZSBoZWFkZXJzIG9mIHRoZSBjdXJyZW50IG5hdGl2ZSByZXF1ZXN0XG5SZWRpcmVjdGFibGVSZXF1ZXN0LnByb3RvdHlwZS5mbHVzaEhlYWRlcnMgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMuX2N1cnJlbnRSZXF1ZXN0LmZsdXNoSGVhZGVycygpO1xufTtcblxuLy8gU2V0cyB0aGUgbm9EZWxheSBvcHRpb24gb2YgdGhlIGN1cnJlbnQgbmF0aXZlIHJlcXVlc3RcblJlZGlyZWN0YWJsZVJlcXVlc3QucHJvdG90eXBlLnNldE5vRGVsYXkgPSBmdW5jdGlvbiAobm9EZWxheSkge1xuXHR0aGlzLl9jdXJyZW50UmVxdWVzdC5zZXROb0RlbGF5KG5vRGVsYXkpO1xufTtcblxuLy8gU2V0cyB0aGUgc29ja2V0S2VlcEFsaXZlIG9wdGlvbiBvZiB0aGUgY3VycmVudCBuYXRpdmUgcmVxdWVzdFxuUmVkaXJlY3RhYmxlUmVxdWVzdC5wcm90b3R5cGUuc2V0U29ja2V0S2VlcEFsaXZlID0gZnVuY3Rpb24gKGVuYWJsZSwgaW5pdGlhbERlbGF5KSB7XG5cdHRoaXMuX2N1cnJlbnRSZXF1ZXN0LnNldFNvY2tldEtlZXBBbGl2ZShlbmFibGUsIGluaXRpYWxEZWxheSk7XG59O1xuXG4vLyBTZXRzIHRoZSB0aW1lb3V0IG9wdGlvbiBvZiB0aGUgY3VycmVudCBuYXRpdmUgcmVxdWVzdFxuUmVkaXJlY3RhYmxlUmVxdWVzdC5wcm90b3R5cGUuc2V0VGltZW91dCA9IGZ1bmN0aW9uICh0aW1lb3V0LCBjYWxsYmFjaykge1xuXHR0aGlzLl9jdXJyZW50UmVxdWVzdC5zZXRUaW1lb3V0KHRpbWVvdXQsIGNhbGxiYWNrKTtcbn07XG5cbi8vIFdyaXRlcyBidWZmZXJlZCBkYXRhIHRvIHRoZSBjdXJyZW50IG5hdGl2ZSByZXF1ZXN0XG5SZWRpcmVjdGFibGVSZXF1ZXN0LnByb3RvdHlwZS5fd3JpdGUgPSBmdW5jdGlvbiAoZGF0YSwgZW5jb2RpbmcsIGNhbGxiYWNrKSB7XG5cdHRoaXMuX2N1cnJlbnRSZXF1ZXN0LndyaXRlKGRhdGEsIGVuY29kaW5nLCBjYWxsYmFjayk7XG5cdHRoaXMuX2J1ZmZlcmVkV3JpdGVzLnB1c2goe2RhdGE6IGRhdGEsIGVuY29kaW5nOiBlbmNvZGluZ30pO1xufTtcblxuLy8gRW5kcyB0aGUgY3VycmVudCBuYXRpdmUgcmVxdWVzdFxuUmVkaXJlY3RhYmxlUmVxdWVzdC5wcm90b3R5cGUuZW5kID0gZnVuY3Rpb24gKGRhdGEsIGVuY29kaW5nLCBjYWxsYmFjaykge1xuXHR0aGlzLl9jdXJyZW50UmVxdWVzdC5lbmQoZGF0YSwgZW5jb2RpbmcsIGNhbGxiYWNrKTtcblx0aWYgKGRhdGEpIHtcblx0XHR0aGlzLl9idWZmZXJlZFdyaXRlcy5wdXNoKHtkYXRhOiBkYXRhLCBlbmNvZGluZzogZW5jb2Rpbmd9KTtcblx0fVxufTtcblxuLy8gRXhwb3J0IGEgcmVkaXJlY3Rpbmcgd3JhcHBlciBmb3IgZWFjaCBuYXRpdmUgcHJvdG9jb2xcbk9iamVjdC5rZXlzKG5hdGl2ZVByb3RvY29scykuZm9yRWFjaChmdW5jdGlvbiAocHJvdG9jb2wpIHtcblx0dmFyIHNjaGVtZSA9IHNjaGVtZXNbcHJvdG9jb2xdID0gcHJvdG9jb2wuc3Vic3RyKDAsIHByb3RvY29sLmxlbmd0aCAtIDEpO1xuXHR2YXIgbmF0aXZlUHJvdG9jb2wgPSBuYXRpdmVQcm90b2NvbHNbcHJvdG9jb2xdO1xuXHR2YXIgd3JhcHBlZFByb3RvY29sID0gZXhwb3J0c1tzY2hlbWVdID0gT2JqZWN0LmNyZWF0ZShuYXRpdmVQcm90b2NvbCk7XG5cblx0Ly8gRXhlY3V0ZXMgYW4gSFRUUCByZXF1ZXN0LCBmb2xsb3dpbmcgcmVkaXJlY3RzXG5cdHdyYXBwZWRQcm90b2NvbC5yZXF1ZXN0ID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG5cdFx0aWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJykge1xuXHRcdFx0b3B0aW9ucyA9IHVybC5wYXJzZShvcHRpb25zKTtcblx0XHRcdG9wdGlvbnMubWF4UmVkaXJlY3RzID0gZXhwb3J0cy5tYXhSZWRpcmVjdHM7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcblx0XHRcdFx0bWF4UmVkaXJlY3RzOiBleHBvcnRzLm1heFJlZGlyZWN0cyxcblx0XHRcdFx0cHJvdG9jb2w6IHByb3RvY29sXG5cdFx0XHR9LCBvcHRpb25zKTtcblx0XHR9XG5cdFx0YXNzZXJ0LmVxdWFsKG9wdGlvbnMucHJvdG9jb2wsIHByb3RvY29sLCAncHJvdG9jb2wgbWlzbWF0Y2gnKTtcblx0XHRkZWJ1Zygnb3B0aW9ucycsIG9wdGlvbnMpO1xuXG5cdFx0cmV0dXJuIG5ldyBSZWRpcmVjdGFibGVSZXF1ZXN0KG9wdGlvbnMsIGNhbGxiYWNrKTtcblx0fTtcblxuXHQvLyBFeGVjdXRlcyBhIEdFVCByZXF1ZXN0LCBmb2xsb3dpbmcgcmVkaXJlY3RzXG5cdHdyYXBwZWRQcm90b2NvbC5nZXQgPSBmdW5jdGlvbiAob3B0aW9ucywgY2FsbGJhY2spIHtcblx0XHR2YXIgcmVxdWVzdCA9IHdyYXBwZWRQcm90b2NvbC5yZXF1ZXN0KG9wdGlvbnMsIGNhbGxiYWNrKTtcblx0XHRyZXF1ZXN0LmVuZCgpO1xuXHRcdHJldHVybiByZXF1ZXN0O1xuXHR9O1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2ZvbGxvdy1yZWRpcmVjdHMvaW5kZXguanMiLCIvKipcbiAgKiB2dWUtcm91dGVyIHYyLjUuM1xuICAqIChjKSAyMDE3IEV2YW4gWW91XG4gICogQGxpY2Vuc2UgTUlUXG4gICovXG4vKiAgKi9cblxuZnVuY3Rpb24gYXNzZXJ0IChjb25kaXRpb24sIG1lc3NhZ2UpIHtcbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoKFwiW3Z1ZS1yb3V0ZXJdIFwiICsgbWVzc2FnZSkpXG4gIH1cbn1cblxuZnVuY3Rpb24gd2FybiAoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICFjb25kaXRpb24pIHtcbiAgICB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgY29uc29sZS53YXJuKChcIlt2dWUtcm91dGVyXSBcIiArIG1lc3NhZ2UpKTtcbiAgfVxufVxuXG52YXIgVmlldyA9IHtcbiAgbmFtZTogJ3JvdXRlci12aWV3JyxcbiAgZnVuY3Rpb25hbDogdHJ1ZSxcbiAgcHJvcHM6IHtcbiAgICBuYW1lOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnZGVmYXVsdCdcbiAgICB9XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyIChfLCByZWYpIHtcbiAgICB2YXIgcHJvcHMgPSByZWYucHJvcHM7XG4gICAgdmFyIGNoaWxkcmVuID0gcmVmLmNoaWxkcmVuO1xuICAgIHZhciBwYXJlbnQgPSByZWYucGFyZW50O1xuICAgIHZhciBkYXRhID0gcmVmLmRhdGE7XG5cbiAgICBkYXRhLnJvdXRlclZpZXcgPSB0cnVlO1xuXG4gICAgLy8gZGlyZWN0bHkgdXNlIHBhcmVudCBjb250ZXh0J3MgY3JlYXRlRWxlbWVudCgpIGZ1bmN0aW9uXG4gICAgLy8gc28gdGhhdCBjb21wb25lbnRzIHJlbmRlcmVkIGJ5IHJvdXRlci12aWV3IGNhbiByZXNvbHZlIG5hbWVkIHNsb3RzXG4gICAgdmFyIGggPSBwYXJlbnQuJGNyZWF0ZUVsZW1lbnQ7XG4gICAgdmFyIG5hbWUgPSBwcm9wcy5uYW1lO1xuICAgIHZhciByb3V0ZSA9IHBhcmVudC4kcm91dGU7XG4gICAgdmFyIGNhY2hlID0gcGFyZW50Ll9yb3V0ZXJWaWV3Q2FjaGUgfHwgKHBhcmVudC5fcm91dGVyVmlld0NhY2hlID0ge30pO1xuXG4gICAgLy8gZGV0ZXJtaW5lIGN1cnJlbnQgdmlldyBkZXB0aCwgYWxzbyBjaGVjayB0byBzZWUgaWYgdGhlIHRyZWVcbiAgICAvLyBoYXMgYmVlbiB0b2dnbGVkIGluYWN0aXZlIGJ1dCBrZXB0LWFsaXZlLlxuICAgIHZhciBkZXB0aCA9IDA7XG4gICAgdmFyIGluYWN0aXZlID0gZmFsc2U7XG4gICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgaWYgKHBhcmVudC4kdm5vZGUgJiYgcGFyZW50LiR2bm9kZS5kYXRhLnJvdXRlclZpZXcpIHtcbiAgICAgICAgZGVwdGgrKztcbiAgICAgIH1cbiAgICAgIGlmIChwYXJlbnQuX2luYWN0aXZlKSB7XG4gICAgICAgIGluYWN0aXZlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHBhcmVudCA9IHBhcmVudC4kcGFyZW50O1xuICAgIH1cbiAgICBkYXRhLnJvdXRlclZpZXdEZXB0aCA9IGRlcHRoO1xuXG4gICAgLy8gcmVuZGVyIHByZXZpb3VzIHZpZXcgaWYgdGhlIHRyZWUgaXMgaW5hY3RpdmUgYW5kIGtlcHQtYWxpdmVcbiAgICBpZiAoaW5hY3RpdmUpIHtcbiAgICAgIHJldHVybiBoKGNhY2hlW25hbWVdLCBkYXRhLCBjaGlsZHJlbilcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hlZCA9IHJvdXRlLm1hdGNoZWRbZGVwdGhdO1xuICAgIC8vIHJlbmRlciBlbXB0eSBub2RlIGlmIG5vIG1hdGNoZWQgcm91dGVcbiAgICBpZiAoIW1hdGNoZWQpIHtcbiAgICAgIGNhY2hlW25hbWVdID0gbnVsbDtcbiAgICAgIHJldHVybiBoKClcbiAgICB9XG5cbiAgICB2YXIgY29tcG9uZW50ID0gY2FjaGVbbmFtZV0gPSBtYXRjaGVkLmNvbXBvbmVudHNbbmFtZV07XG5cbiAgICAvLyBhdHRhY2ggaW5zdGFuY2UgcmVnaXN0cmF0aW9uIGhvb2tcbiAgICAvLyB0aGlzIHdpbGwgYmUgY2FsbGVkIGluIHRoZSBpbnN0YW5jZSdzIGluamVjdGVkIGxpZmVjeWNsZSBob29rc1xuICAgIGRhdGEucmVnaXN0ZXJSb3V0ZUluc3RhbmNlID0gZnVuY3Rpb24gKHZtLCB2YWwpIHtcbiAgICAgIC8vIHZhbCBjb3VsZCBiZSB1bmRlZmluZWQgZm9yIHVucmVnaXN0cmF0aW9uXG4gICAgICB2YXIgY3VycmVudCA9IG1hdGNoZWQuaW5zdGFuY2VzW25hbWVdO1xuICAgICAgaWYgKFxuICAgICAgICAodmFsICYmIGN1cnJlbnQgIT09IHZtKSB8fFxuICAgICAgICAoIXZhbCAmJiBjdXJyZW50ID09PSB2bSlcbiAgICAgICkge1xuICAgICAgICBtYXRjaGVkLmluc3RhbmNlc1tuYW1lXSA9IHZhbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhbHNvIHJlZ2lzZXRlciBpbnN0YW5jZSBpbiBwcmVwYXRjaCBob29rXG4gICAgLy8gaW4gY2FzZSB0aGUgc2FtZSBjb21wb25lbnQgaW5zdGFuY2UgaXMgcmV1c2VkIGFjcm9zcyBkaWZmZXJlbnQgcm91dGVzXG4gICAgOyhkYXRhLmhvb2sgfHwgKGRhdGEuaG9vayA9IHt9KSkucHJlcGF0Y2ggPSBmdW5jdGlvbiAoXywgdm5vZGUpIHtcbiAgICAgIG1hdGNoZWQuaW5zdGFuY2VzW25hbWVdID0gdm5vZGUuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgfTtcblxuICAgIC8vIHJlc29sdmUgcHJvcHNcbiAgICBkYXRhLnByb3BzID0gcmVzb2x2ZVByb3BzKHJvdXRlLCBtYXRjaGVkLnByb3BzICYmIG1hdGNoZWQucHJvcHNbbmFtZV0pO1xuXG4gICAgcmV0dXJuIGgoY29tcG9uZW50LCBkYXRhLCBjaGlsZHJlbilcbiAgfVxufTtcblxuZnVuY3Rpb24gcmVzb2x2ZVByb3BzIChyb3V0ZSwgY29uZmlnKSB7XG4gIHN3aXRjaCAodHlwZW9mIGNvbmZpZykge1xuICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICByZXR1cm5cbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAgcmV0dXJuIGNvbmZpZ1xuICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgIHJldHVybiBjb25maWcocm91dGUpXG4gICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICByZXR1cm4gY29uZmlnID8gcm91dGUucGFyYW1zIDogdW5kZWZpbmVkXG4gICAgZGVmYXVsdDpcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgXCJwcm9wcyBpbiBcXFwiXCIgKyAocm91dGUucGF0aCkgKyBcIlxcXCIgaXMgYSBcIiArICh0eXBlb2YgY29uZmlnKSArIFwiLCBcIiArXG4gICAgICAgICAgXCJleHBlY3RpbmcgYW4gb2JqZWN0LCBmdW5jdGlvbiBvciBib29sZWFuLlwiXG4gICAgICAgICk7XG4gICAgICB9XG4gIH1cbn1cblxuLyogICovXG5cbnZhciBlbmNvZGVSZXNlcnZlUkUgPSAvWyEnKCkqXS9nO1xudmFyIGVuY29kZVJlc2VydmVSZXBsYWNlciA9IGZ1bmN0aW9uIChjKSB7IHJldHVybiAnJScgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpOyB9O1xudmFyIGNvbW1hUkUgPSAvJTJDL2c7XG5cbi8vIGZpeGVkIGVuY29kZVVSSUNvbXBvbmVudCB3aGljaCBpcyBtb3JlIGNvbmZvcm1hbnQgdG8gUkZDMzk4Njpcbi8vIC0gZXNjYXBlcyBbIScoKSpdXG4vLyAtIHByZXNlcnZlIGNvbW1hc1xudmFyIGVuY29kZSA9IGZ1bmN0aW9uIChzdHIpIHsgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHIpXG4gIC5yZXBsYWNlKGVuY29kZVJlc2VydmVSRSwgZW5jb2RlUmVzZXJ2ZVJlcGxhY2VyKVxuICAucmVwbGFjZShjb21tYVJFLCAnLCcpOyB9O1xuXG52YXIgZGVjb2RlID0gZGVjb2RlVVJJQ29tcG9uZW50O1xuXG5mdW5jdGlvbiByZXNvbHZlUXVlcnkgKFxuICBxdWVyeSxcbiAgZXh0cmFRdWVyeSxcbiAgX3BhcnNlUXVlcnlcbikge1xuICBpZiAoIGV4dHJhUXVlcnkgPT09IHZvaWQgMCApIGV4dHJhUXVlcnkgPSB7fTtcblxuICB2YXIgcGFyc2UgPSBfcGFyc2VRdWVyeSB8fCBwYXJzZVF1ZXJ5O1xuICB2YXIgcGFyc2VkUXVlcnk7XG4gIHRyeSB7XG4gICAgcGFyc2VkUXVlcnkgPSBwYXJzZShxdWVyeSB8fCAnJyk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oZmFsc2UsIGUubWVzc2FnZSk7XG4gICAgcGFyc2VkUXVlcnkgPSB7fTtcbiAgfVxuICBmb3IgKHZhciBrZXkgaW4gZXh0cmFRdWVyeSkge1xuICAgIHZhciB2YWwgPSBleHRyYVF1ZXJ5W2tleV07XG4gICAgcGFyc2VkUXVlcnlba2V5XSA9IEFycmF5LmlzQXJyYXkodmFsKSA/IHZhbC5zbGljZSgpIDogdmFsO1xuICB9XG4gIHJldHVybiBwYXJzZWRRdWVyeVxufVxuXG5mdW5jdGlvbiBwYXJzZVF1ZXJ5IChxdWVyeSkge1xuICB2YXIgcmVzID0ge307XG5cbiAgcXVlcnkgPSBxdWVyeS50cmltKCkucmVwbGFjZSgvXihcXD98I3wmKS8sICcnKTtcblxuICBpZiAoIXF1ZXJ5KSB7XG4gICAgcmV0dXJuIHJlc1xuICB9XG5cbiAgcXVlcnkuc3BsaXQoJyYnKS5mb3JFYWNoKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgIHZhciBwYXJ0cyA9IHBhcmFtLnJlcGxhY2UoL1xcKy9nLCAnICcpLnNwbGl0KCc9Jyk7XG4gICAgdmFyIGtleSA9IGRlY29kZShwYXJ0cy5zaGlmdCgpKTtcbiAgICB2YXIgdmFsID0gcGFydHMubGVuZ3RoID4gMFxuICAgICAgPyBkZWNvZGUocGFydHMuam9pbignPScpKVxuICAgICAgOiBudWxsO1xuXG4gICAgaWYgKHJlc1trZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlc1trZXldID0gdmFsO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShyZXNba2V5XSkpIHtcbiAgICAgIHJlc1trZXldLnB1c2godmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzW2tleV0gPSBbcmVzW2tleV0sIHZhbF07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVF1ZXJ5IChvYmopIHtcbiAgdmFyIHJlcyA9IG9iaiA/IE9iamVjdC5rZXlzKG9iaikubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgdmFsID0gb2JqW2tleV07XG5cbiAgICBpZiAodmFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAnJ1xuICAgIH1cblxuICAgIGlmICh2YWwgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBlbmNvZGUoa2V5KVxuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgIHZhbC5zbGljZSgpLmZvckVhY2goZnVuY3Rpb24gKHZhbDIpIHtcbiAgICAgICAgaWYgKHZhbDIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmICh2YWwyID09PSBudWxsKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goZW5jb2RlKGtleSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKHZhbDIpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzdWx0LmpvaW4oJyYnKVxuICAgIH1cblxuICAgIHJldHVybiBlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2YWwpXG4gIH0pLmZpbHRlcihmdW5jdGlvbiAoeCkgeyByZXR1cm4geC5sZW5ndGggPiAwOyB9KS5qb2luKCcmJykgOiBudWxsO1xuICByZXR1cm4gcmVzID8gKFwiP1wiICsgcmVzKSA6ICcnXG59XG5cbi8qICAqL1xuXG5cbnZhciB0cmFpbGluZ1NsYXNoUkUgPSAvXFwvPyQvO1xuXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZSAoXG4gIHJlY29yZCxcbiAgbG9jYXRpb24sXG4gIHJlZGlyZWN0ZWRGcm9tLFxuICByb3V0ZXJcbikge1xuICB2YXIgc3RyaW5naWZ5UXVlcnkkJDEgPSByb3V0ZXIgJiYgcm91dGVyLm9wdGlvbnMuc3RyaW5naWZ5UXVlcnk7XG4gIHZhciByb3V0ZSA9IHtcbiAgICBuYW1lOiBsb2NhdGlvbi5uYW1lIHx8IChyZWNvcmQgJiYgcmVjb3JkLm5hbWUpLFxuICAgIG1ldGE6IChyZWNvcmQgJiYgcmVjb3JkLm1ldGEpIHx8IHt9LFxuICAgIHBhdGg6IGxvY2F0aW9uLnBhdGggfHwgJy8nLFxuICAgIGhhc2g6IGxvY2F0aW9uLmhhc2ggfHwgJycsXG4gICAgcXVlcnk6IGxvY2F0aW9uLnF1ZXJ5IHx8IHt9LFxuICAgIHBhcmFtczogbG9jYXRpb24ucGFyYW1zIHx8IHt9LFxuICAgIGZ1bGxQYXRoOiBnZXRGdWxsUGF0aChsb2NhdGlvbiwgc3RyaW5naWZ5UXVlcnkkJDEpLFxuICAgIG1hdGNoZWQ6IHJlY29yZCA/IGZvcm1hdE1hdGNoKHJlY29yZCkgOiBbXVxuICB9O1xuICBpZiAocmVkaXJlY3RlZEZyb20pIHtcbiAgICByb3V0ZS5yZWRpcmVjdGVkRnJvbSA9IGdldEZ1bGxQYXRoKHJlZGlyZWN0ZWRGcm9tLCBzdHJpbmdpZnlRdWVyeSQkMSk7XG4gIH1cbiAgcmV0dXJuIE9iamVjdC5mcmVlemUocm91dGUpXG59XG5cbi8vIHRoZSBzdGFydGluZyByb3V0ZSB0aGF0IHJlcHJlc2VudHMgdGhlIGluaXRpYWwgc3RhdGVcbnZhciBTVEFSVCA9IGNyZWF0ZVJvdXRlKG51bGwsIHtcbiAgcGF0aDogJy8nXG59KTtcblxuZnVuY3Rpb24gZm9ybWF0TWF0Y2ggKHJlY29yZCkge1xuICB2YXIgcmVzID0gW107XG4gIHdoaWxlIChyZWNvcmQpIHtcbiAgICByZXMudW5zaGlmdChyZWNvcmQpO1xuICAgIHJlY29yZCA9IHJlY29yZC5wYXJlbnQ7XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBnZXRGdWxsUGF0aCAoXG4gIHJlZixcbiAgX3N0cmluZ2lmeVF1ZXJ5XG4pIHtcbiAgdmFyIHBhdGggPSByZWYucGF0aDtcbiAgdmFyIHF1ZXJ5ID0gcmVmLnF1ZXJ5OyBpZiAoIHF1ZXJ5ID09PSB2b2lkIDAgKSBxdWVyeSA9IHt9O1xuICB2YXIgaGFzaCA9IHJlZi5oYXNoOyBpZiAoIGhhc2ggPT09IHZvaWQgMCApIGhhc2ggPSAnJztcblxuICB2YXIgc3RyaW5naWZ5ID0gX3N0cmluZ2lmeVF1ZXJ5IHx8IHN0cmluZ2lmeVF1ZXJ5O1xuICByZXR1cm4gKHBhdGggfHwgJy8nKSArIHN0cmluZ2lmeShxdWVyeSkgKyBoYXNoXG59XG5cbmZ1bmN0aW9uIGlzU2FtZVJvdXRlIChhLCBiKSB7XG4gIGlmIChiID09PSBTVEFSVCkge1xuICAgIHJldHVybiBhID09PSBiXG4gIH0gZWxzZSBpZiAoIWIpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfSBlbHNlIGlmIChhLnBhdGggJiYgYi5wYXRoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGEucGF0aC5yZXBsYWNlKHRyYWlsaW5nU2xhc2hSRSwgJycpID09PSBiLnBhdGgucmVwbGFjZSh0cmFpbGluZ1NsYXNoUkUsICcnKSAmJlxuICAgICAgYS5oYXNoID09PSBiLmhhc2ggJiZcbiAgICAgIGlzT2JqZWN0RXF1YWwoYS5xdWVyeSwgYi5xdWVyeSlcbiAgICApXG4gIH0gZWxzZSBpZiAoYS5uYW1lICYmIGIubmFtZSkge1xuICAgIHJldHVybiAoXG4gICAgICBhLm5hbWUgPT09IGIubmFtZSAmJlxuICAgICAgYS5oYXNoID09PSBiLmhhc2ggJiZcbiAgICAgIGlzT2JqZWN0RXF1YWwoYS5xdWVyeSwgYi5xdWVyeSkgJiZcbiAgICAgIGlzT2JqZWN0RXF1YWwoYS5wYXJhbXMsIGIucGFyYW1zKVxuICAgIClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5mdW5jdGlvbiBpc09iamVjdEVxdWFsIChhLCBiKSB7XG4gIGlmICggYSA9PT0gdm9pZCAwICkgYSA9IHt9O1xuICBpZiAoIGIgPT09IHZvaWQgMCApIGIgPSB7fTtcblxuICB2YXIgYUtleXMgPSBPYmplY3Qua2V5cyhhKTtcbiAgdmFyIGJLZXlzID0gT2JqZWN0LmtleXMoYik7XG4gIGlmIChhS2V5cy5sZW5ndGggIT09IGJLZXlzLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIHJldHVybiBhS2V5cy5ldmVyeShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBTdHJpbmcoYVtrZXldKSA9PT0gU3RyaW5nKGJba2V5XSk7IH0pXG59XG5cbmZ1bmN0aW9uIGlzSW5jbHVkZWRSb3V0ZSAoY3VycmVudCwgdGFyZ2V0KSB7XG4gIHJldHVybiAoXG4gICAgY3VycmVudC5wYXRoLnJlcGxhY2UodHJhaWxpbmdTbGFzaFJFLCAnLycpLmluZGV4T2YoXG4gICAgICB0YXJnZXQucGF0aC5yZXBsYWNlKHRyYWlsaW5nU2xhc2hSRSwgJy8nKVxuICAgICkgPT09IDAgJiZcbiAgICAoIXRhcmdldC5oYXNoIHx8IGN1cnJlbnQuaGFzaCA9PT0gdGFyZ2V0Lmhhc2gpICYmXG4gICAgcXVlcnlJbmNsdWRlcyhjdXJyZW50LnF1ZXJ5LCB0YXJnZXQucXVlcnkpXG4gIClcbn1cblxuZnVuY3Rpb24gcXVlcnlJbmNsdWRlcyAoY3VycmVudCwgdGFyZ2V0KSB7XG4gIGZvciAodmFyIGtleSBpbiB0YXJnZXQpIHtcbiAgICBpZiAoIShrZXkgaW4gY3VycmVudCkpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuXG4vKiAgKi9cblxuLy8gd29yayBhcm91bmQgd2VpcmQgZmxvdyBidWdcbnZhciB0b1R5cGVzID0gW1N0cmluZywgT2JqZWN0XTtcbnZhciBldmVudFR5cGVzID0gW1N0cmluZywgQXJyYXldO1xuXG52YXIgTGluayA9IHtcbiAgbmFtZTogJ3JvdXRlci1saW5rJyxcbiAgcHJvcHM6IHtcbiAgICB0bzoge1xuICAgICAgdHlwZTogdG9UeXBlcyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICB0YWc6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdhJ1xuICAgIH0sXG4gICAgZXhhY3Q6IEJvb2xlYW4sXG4gICAgYXBwZW5kOiBCb29sZWFuLFxuICAgIHJlcGxhY2U6IEJvb2xlYW4sXG4gICAgYWN0aXZlQ2xhc3M6IFN0cmluZyxcbiAgICBleGFjdEFjdGl2ZUNsYXNzOiBTdHJpbmcsXG4gICAgZXZlbnQ6IHtcbiAgICAgIHR5cGU6IGV2ZW50VHlwZXMsXG4gICAgICBkZWZhdWx0OiAnY2xpY2snXG4gICAgfVxuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlciAoaCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdmFyIHJvdXRlciA9IHRoaXMuJHJvdXRlcjtcbiAgICB2YXIgY3VycmVudCA9IHRoaXMuJHJvdXRlO1xuICAgIHZhciByZWYgPSByb3V0ZXIucmVzb2x2ZSh0aGlzLnRvLCBjdXJyZW50LCB0aGlzLmFwcGVuZCk7XG4gICAgdmFyIGxvY2F0aW9uID0gcmVmLmxvY2F0aW9uO1xuICAgIHZhciByb3V0ZSA9IHJlZi5yb3V0ZTtcbiAgICB2YXIgaHJlZiA9IHJlZi5ocmVmO1xuXG4gICAgdmFyIGNsYXNzZXMgPSB7fTtcbiAgICB2YXIgZ2xvYmFsQWN0aXZlQ2xhc3MgPSByb3V0ZXIub3B0aW9ucy5saW5rQWN0aXZlQ2xhc3M7XG4gICAgdmFyIGdsb2JhbEV4YWN0QWN0aXZlQ2xhc3MgPSByb3V0ZXIub3B0aW9ucy5saW5rRXhhY3RBY3RpdmVDbGFzcztcbiAgICAvLyBTdXBwb3J0IGdsb2JhbCBlbXB0eSBhY3RpdmUgY2xhc3NcbiAgICB2YXIgYWN0aXZlQ2xhc3NGYWxsYmFjayA9IGdsb2JhbEFjdGl2ZUNsYXNzID09IG51bGxcbiAgICAgICAgICAgID8gJ3JvdXRlci1saW5rLWFjdGl2ZSdcbiAgICAgICAgICAgIDogZ2xvYmFsQWN0aXZlQ2xhc3M7XG4gICAgdmFyIGV4YWN0QWN0aXZlQ2xhc3NGYWxsYmFjayA9IGdsb2JhbEV4YWN0QWN0aXZlQ2xhc3MgPT0gbnVsbFxuICAgICAgICAgICAgPyAncm91dGVyLWxpbmstZXhhY3QtYWN0aXZlJ1xuICAgICAgICAgICAgOiBnbG9iYWxFeGFjdEFjdGl2ZUNsYXNzO1xuICAgIHZhciBhY3RpdmVDbGFzcyA9IHRoaXMuYWN0aXZlQ2xhc3MgPT0gbnVsbFxuICAgICAgICAgICAgPyBhY3RpdmVDbGFzc0ZhbGxiYWNrXG4gICAgICAgICAgICA6IHRoaXMuYWN0aXZlQ2xhc3M7XG4gICAgdmFyIGV4YWN0QWN0aXZlQ2xhc3MgPSB0aGlzLmV4YWN0QWN0aXZlQ2xhc3MgPT0gbnVsbFxuICAgICAgICAgICAgPyBleGFjdEFjdGl2ZUNsYXNzRmFsbGJhY2tcbiAgICAgICAgICAgIDogdGhpcy5leGFjdEFjdGl2ZUNsYXNzO1xuICAgIHZhciBjb21wYXJlVGFyZ2V0ID0gbG9jYXRpb24ucGF0aFxuICAgICAgPyBjcmVhdGVSb3V0ZShudWxsLCBsb2NhdGlvbiwgbnVsbCwgcm91dGVyKVxuICAgICAgOiByb3V0ZTtcblxuICAgIGNsYXNzZXNbZXhhY3RBY3RpdmVDbGFzc10gPSBpc1NhbWVSb3V0ZShjdXJyZW50LCBjb21wYXJlVGFyZ2V0KTtcbiAgICBjbGFzc2VzW2FjdGl2ZUNsYXNzXSA9IHRoaXMuZXhhY3RcbiAgICAgID8gY2xhc3Nlc1tleGFjdEFjdGl2ZUNsYXNzXVxuICAgICAgOiBpc0luY2x1ZGVkUm91dGUoY3VycmVudCwgY29tcGFyZVRhcmdldCk7XG5cbiAgICB2YXIgaGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoZ3VhcmRFdmVudChlKSkge1xuICAgICAgICBpZiAodGhpcyQxLnJlcGxhY2UpIHtcbiAgICAgICAgICByb3V0ZXIucmVwbGFjZShsb2NhdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcm91dGVyLnB1c2gobG9jYXRpb24pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBvbiA9IHsgY2xpY2s6IGd1YXJkRXZlbnQgfTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLmV2ZW50KSkge1xuICAgICAgdGhpcy5ldmVudC5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7IG9uW2VdID0gaGFuZGxlcjsgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9uW3RoaXMuZXZlbnRdID0gaGFuZGxlcjtcbiAgICB9XG5cbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgIGNsYXNzOiBjbGFzc2VzXG4gICAgfTtcblxuICAgIGlmICh0aGlzLnRhZyA9PT0gJ2EnKSB7XG4gICAgICBkYXRhLm9uID0gb247XG4gICAgICBkYXRhLmF0dHJzID0geyBocmVmOiBocmVmIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGZpbmQgdGhlIGZpcnN0IDxhPiBjaGlsZCBhbmQgYXBwbHkgbGlzdGVuZXIgYW5kIGhyZWZcbiAgICAgIHZhciBhID0gZmluZEFuY2hvcih0aGlzLiRzbG90cy5kZWZhdWx0KTtcbiAgICAgIGlmIChhKSB7XG4gICAgICAgIC8vIGluIGNhc2UgdGhlIDxhPiBpcyBhIHN0YXRpYyBub2RlXG4gICAgICAgIGEuaXNTdGF0aWMgPSBmYWxzZTtcbiAgICAgICAgdmFyIGV4dGVuZCA9IF9WdWUudXRpbC5leHRlbmQ7XG4gICAgICAgIHZhciBhRGF0YSA9IGEuZGF0YSA9IGV4dGVuZCh7fSwgYS5kYXRhKTtcbiAgICAgICAgYURhdGEub24gPSBvbjtcbiAgICAgICAgdmFyIGFBdHRycyA9IGEuZGF0YS5hdHRycyA9IGV4dGVuZCh7fSwgYS5kYXRhLmF0dHJzKTtcbiAgICAgICAgYUF0dHJzLmhyZWYgPSBocmVmO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZG9lc24ndCBoYXZlIDxhPiBjaGlsZCwgYXBwbHkgbGlzdGVuZXIgdG8gc2VsZlxuICAgICAgICBkYXRhLm9uID0gb247XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGgodGhpcy50YWcsIGRhdGEsIHRoaXMuJHNsb3RzLmRlZmF1bHQpXG4gIH1cbn07XG5cbmZ1bmN0aW9uIGd1YXJkRXZlbnQgKGUpIHtcbiAgLy8gZG9uJ3QgcmVkaXJlY3Qgd2l0aCBjb250cm9sIGtleXNcbiAgaWYgKGUubWV0YUtleSB8fCBlLmN0cmxLZXkgfHwgZS5zaGlmdEtleSkgeyByZXR1cm4gfVxuICAvLyBkb24ndCByZWRpcmVjdCB3aGVuIHByZXZlbnREZWZhdWx0IGNhbGxlZFxuICBpZiAoZS5kZWZhdWx0UHJldmVudGVkKSB7IHJldHVybiB9XG4gIC8vIGRvbid0IHJlZGlyZWN0IG9uIHJpZ2h0IGNsaWNrXG4gIGlmIChlLmJ1dHRvbiAhPT0gdW5kZWZpbmVkICYmIGUuYnV0dG9uICE9PSAwKSB7IHJldHVybiB9XG4gIC8vIGRvbid0IHJlZGlyZWN0IGlmIGB0YXJnZXQ9XCJfYmxhbmtcImBcbiAgaWYgKGUuY3VycmVudFRhcmdldCAmJiBlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKSB7XG4gICAgdmFyIHRhcmdldCA9IGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3RhcmdldCcpO1xuICAgIGlmICgvXFxiX2JsYW5rXFxiL2kudGVzdCh0YXJnZXQpKSB7IHJldHVybiB9XG4gIH1cbiAgLy8gdGhpcyBtYXkgYmUgYSBXZWV4IGV2ZW50IHdoaWNoIGRvZXNuJ3QgaGF2ZSB0aGlzIG1ldGhvZFxuICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuXG5mdW5jdGlvbiBmaW5kQW5jaG9yIChjaGlsZHJlbikge1xuICBpZiAoY2hpbGRyZW4pIHtcbiAgICB2YXIgY2hpbGQ7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIGlmIChjaGlsZC50YWcgPT09ICdhJykge1xuICAgICAgICByZXR1cm4gY2hpbGRcbiAgICAgIH1cbiAgICAgIGlmIChjaGlsZC5jaGlsZHJlbiAmJiAoY2hpbGQgPSBmaW5kQW5jaG9yKGNoaWxkLmNoaWxkcmVuKSkpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnZhciBfVnVlO1xuXG5mdW5jdGlvbiBpbnN0YWxsIChWdWUpIHtcbiAgaWYgKGluc3RhbGwuaW5zdGFsbGVkKSB7IHJldHVybiB9XG4gIGluc3RhbGwuaW5zdGFsbGVkID0gdHJ1ZTtcblxuICBfVnVlID0gVnVlO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUucHJvdG90eXBlLCAnJHJvdXRlcicsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCAoKSB7IHJldHVybiB0aGlzLiRyb290Ll9yb3V0ZXIgfVxuICB9KTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLnByb3RvdHlwZSwgJyRyb3V0ZScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCAoKSB7IHJldHVybiB0aGlzLiRyb290Ll9yb3V0ZSB9XG4gIH0pO1xuXG4gIHZhciBpc0RlZiA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiB2ICE9PSB1bmRlZmluZWQ7IH07XG5cbiAgdmFyIHJlZ2lzdGVySW5zdGFuY2UgPSBmdW5jdGlvbiAodm0sIGNhbGxWYWwpIHtcbiAgICB2YXIgaSA9IHZtLiRvcHRpb25zLl9wYXJlbnRWbm9kZTtcbiAgICBpZiAoaXNEZWYoaSkgJiYgaXNEZWYoaSA9IGkuZGF0YSkgJiYgaXNEZWYoaSA9IGkucmVnaXN0ZXJSb3V0ZUluc3RhbmNlKSkge1xuICAgICAgaSh2bSwgY2FsbFZhbCk7XG4gICAgfVxuICB9O1xuXG4gIFZ1ZS5taXhpbih7XG4gICAgYmVmb3JlQ3JlYXRlOiBmdW5jdGlvbiBiZWZvcmVDcmVhdGUgKCkge1xuICAgICAgaWYgKGlzRGVmKHRoaXMuJG9wdGlvbnMucm91dGVyKSkge1xuICAgICAgICB0aGlzLl9yb3V0ZXIgPSB0aGlzLiRvcHRpb25zLnJvdXRlcjtcbiAgICAgICAgdGhpcy5fcm91dGVyLmluaXQodGhpcyk7XG4gICAgICAgIFZ1ZS51dGlsLmRlZmluZVJlYWN0aXZlKHRoaXMsICdfcm91dGUnLCB0aGlzLl9yb3V0ZXIuaGlzdG9yeS5jdXJyZW50KTtcbiAgICAgIH1cbiAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgdGhpcyk7XG4gICAgfSxcbiAgICBkZXN0cm95ZWQ6IGZ1bmN0aW9uIGRlc3Ryb3llZCAoKSB7XG4gICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMpO1xuICAgIH1cbiAgfSk7XG5cbiAgVnVlLmNvbXBvbmVudCgncm91dGVyLXZpZXcnLCBWaWV3KTtcbiAgVnVlLmNvbXBvbmVudCgncm91dGVyLWxpbmsnLCBMaW5rKTtcblxuICB2YXIgc3RyYXRzID0gVnVlLmNvbmZpZy5vcHRpb25NZXJnZVN0cmF0ZWdpZXM7XG4gIC8vIHVzZSB0aGUgc2FtZSBob29rIG1lcmdpbmcgc3RyYXRlZ3kgZm9yIHJvdXRlIGhvb2tzXG4gIHN0cmF0cy5iZWZvcmVSb3V0ZUVudGVyID0gc3RyYXRzLmJlZm9yZVJvdXRlTGVhdmUgPSBzdHJhdHMuY3JlYXRlZDtcbn1cblxuLyogICovXG5cbnZhciBpbkJyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcblxuLyogICovXG5cbmZ1bmN0aW9uIHJlc29sdmVQYXRoIChcbiAgcmVsYXRpdmUsXG4gIGJhc2UsXG4gIGFwcGVuZFxuKSB7XG4gIHZhciBmaXJzdENoYXIgPSByZWxhdGl2ZS5jaGFyQXQoMCk7XG4gIGlmIChmaXJzdENoYXIgPT09ICcvJykge1xuICAgIHJldHVybiByZWxhdGl2ZVxuICB9XG5cbiAgaWYgKGZpcnN0Q2hhciA9PT0gJz8nIHx8IGZpcnN0Q2hhciA9PT0gJyMnKSB7XG4gICAgcmV0dXJuIGJhc2UgKyByZWxhdGl2ZVxuICB9XG5cbiAgdmFyIHN0YWNrID0gYmFzZS5zcGxpdCgnLycpO1xuXG4gIC8vIHJlbW92ZSB0cmFpbGluZyBzZWdtZW50IGlmOlxuICAvLyAtIG5vdCBhcHBlbmRpbmdcbiAgLy8gLSBhcHBlbmRpbmcgdG8gdHJhaWxpbmcgc2xhc2ggKGxhc3Qgc2VnbWVudCBpcyBlbXB0eSlcbiAgaWYgKCFhcHBlbmQgfHwgIXN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdKSB7XG4gICAgc3RhY2sucG9wKCk7XG4gIH1cblxuICAvLyByZXNvbHZlIHJlbGF0aXZlIHBhdGhcbiAgdmFyIHNlZ21lbnRzID0gcmVsYXRpdmUucmVwbGFjZSgvXlxcLy8sICcnKS5zcGxpdCgnLycpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHNlZ21lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNlZ21lbnQgPSBzZWdtZW50c1tpXTtcbiAgICBpZiAoc2VnbWVudCA9PT0gJy4uJykge1xuICAgICAgc3RhY2sucG9wKCk7XG4gICAgfSBlbHNlIGlmIChzZWdtZW50ICE9PSAnLicpIHtcbiAgICAgIHN0YWNrLnB1c2goc2VnbWVudCk7XG4gICAgfVxuICB9XG5cbiAgLy8gZW5zdXJlIGxlYWRpbmcgc2xhc2hcbiAgaWYgKHN0YWNrWzBdICE9PSAnJykge1xuICAgIHN0YWNrLnVuc2hpZnQoJycpO1xuICB9XG5cbiAgcmV0dXJuIHN0YWNrLmpvaW4oJy8nKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhdGggKHBhdGgpIHtcbiAgdmFyIGhhc2ggPSAnJztcbiAgdmFyIHF1ZXJ5ID0gJyc7XG5cbiAgdmFyIGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpO1xuICBpZiAoaGFzaEluZGV4ID49IDApIHtcbiAgICBoYXNoID0gcGF0aC5zbGljZShoYXNoSW5kZXgpO1xuICAgIHBhdGggPSBwYXRoLnNsaWNlKDAsIGhhc2hJbmRleCk7XG4gIH1cblxuICB2YXIgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpO1xuICBpZiAocXVlcnlJbmRleCA+PSAwKSB7XG4gICAgcXVlcnkgPSBwYXRoLnNsaWNlKHF1ZXJ5SW5kZXggKyAxKTtcbiAgICBwYXRoID0gcGF0aC5zbGljZSgwLCBxdWVyeUluZGV4KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcGF0aDogcGF0aCxcbiAgICBxdWVyeTogcXVlcnksXG4gICAgaGFzaDogaGFzaFxuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFuUGF0aCAocGF0aCkge1xuICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC9cXC8vZywgJy8nKVxufVxuXG52YXIgaW5kZXgkMSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKGFycikge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFycikgPT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cbi8qKlxuICogRXhwb3NlIGBwYXRoVG9SZWdleHBgLlxuICovXG52YXIgaW5kZXggPSBwYXRoVG9SZWdleHA7XG52YXIgcGFyc2VfMSA9IHBhcnNlO1xudmFyIGNvbXBpbGVfMSA9IGNvbXBpbGU7XG52YXIgdG9rZW5zVG9GdW5jdGlvbl8xID0gdG9rZW5zVG9GdW5jdGlvbjtcbnZhciB0b2tlbnNUb1JlZ0V4cF8xID0gdG9rZW5zVG9SZWdFeHA7XG5cbi8qKlxuICogVGhlIG1haW4gcGF0aCBtYXRjaGluZyByZWdleHAgdXRpbGl0eS5cbiAqXG4gKiBAdHlwZSB7UmVnRXhwfVxuICovXG52YXIgUEFUSF9SRUdFWFAgPSBuZXcgUmVnRXhwKFtcbiAgLy8gTWF0Y2ggZXNjYXBlZCBjaGFyYWN0ZXJzIHRoYXQgd291bGQgb3RoZXJ3aXNlIGFwcGVhciBpbiBmdXR1cmUgbWF0Y2hlcy5cbiAgLy8gVGhpcyBhbGxvd3MgdGhlIHVzZXIgdG8gZXNjYXBlIHNwZWNpYWwgY2hhcmFjdGVycyB0aGF0IHdvbid0IHRyYW5zZm9ybS5cbiAgJyhcXFxcXFxcXC4pJyxcbiAgLy8gTWF0Y2ggRXhwcmVzcy1zdHlsZSBwYXJhbWV0ZXJzIGFuZCB1bi1uYW1lZCBwYXJhbWV0ZXJzIHdpdGggYSBwcmVmaXhcbiAgLy8gYW5kIG9wdGlvbmFsIHN1ZmZpeGVzLiBNYXRjaGVzIGFwcGVhciBhczpcbiAgLy9cbiAgLy8gXCIvOnRlc3QoXFxcXGQrKT9cIiA9PiBbXCIvXCIsIFwidGVzdFwiLCBcIlxcZCtcIiwgdW5kZWZpbmVkLCBcIj9cIiwgdW5kZWZpbmVkXVxuICAvLyBcIi9yb3V0ZShcXFxcZCspXCIgID0+IFt1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIlxcZCtcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWRdXG4gIC8vIFwiLypcIiAgICAgICAgICAgID0+IFtcIi9cIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIipcIl1cbiAgJyhbXFxcXC8uXSk/KD86KD86XFxcXDooXFxcXHcrKSg/OlxcXFwoKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcKCldKSspXFxcXCkpP3xcXFxcKCgoPzpcXFxcXFxcXC58W15cXFxcXFxcXCgpXSkrKVxcXFwpKShbKyo/XSk/fChcXFxcKikpJ1xuXS5qb2luKCd8JyksICdnJyk7XG5cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gIHN0clxuICogQHBhcmFtICB7T2JqZWN0PX0gb3B0aW9uc1xuICogQHJldHVybiB7IUFycmF5fVxuICovXG5mdW5jdGlvbiBwYXJzZSAoc3RyLCBvcHRpb25zKSB7XG4gIHZhciB0b2tlbnMgPSBbXTtcbiAgdmFyIGtleSA9IDA7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBwYXRoID0gJyc7XG4gIHZhciBkZWZhdWx0RGVsaW1pdGVyID0gb3B0aW9ucyAmJiBvcHRpb25zLmRlbGltaXRlciB8fCAnLyc7XG4gIHZhciByZXM7XG5cbiAgd2hpbGUgKChyZXMgPSBQQVRIX1JFR0VYUC5leGVjKHN0cikpICE9IG51bGwpIHtcbiAgICB2YXIgbSA9IHJlc1swXTtcbiAgICB2YXIgZXNjYXBlZCA9IHJlc1sxXTtcbiAgICB2YXIgb2Zmc2V0ID0gcmVzLmluZGV4O1xuICAgIHBhdGggKz0gc3RyLnNsaWNlKGluZGV4LCBvZmZzZXQpO1xuICAgIGluZGV4ID0gb2Zmc2V0ICsgbS5sZW5ndGg7XG5cbiAgICAvLyBJZ25vcmUgYWxyZWFkeSBlc2NhcGVkIHNlcXVlbmNlcy5cbiAgICBpZiAoZXNjYXBlZCkge1xuICAgICAgcGF0aCArPSBlc2NhcGVkWzFdO1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICB2YXIgbmV4dCA9IHN0cltpbmRleF07XG4gICAgdmFyIHByZWZpeCA9IHJlc1syXTtcbiAgICB2YXIgbmFtZSA9IHJlc1szXTtcbiAgICB2YXIgY2FwdHVyZSA9IHJlc1s0XTtcbiAgICB2YXIgZ3JvdXAgPSByZXNbNV07XG4gICAgdmFyIG1vZGlmaWVyID0gcmVzWzZdO1xuICAgIHZhciBhc3RlcmlzayA9IHJlc1s3XTtcblxuICAgIC8vIFB1c2ggdGhlIGN1cnJlbnQgcGF0aCBvbnRvIHRoZSB0b2tlbnMuXG4gICAgaWYgKHBhdGgpIHtcbiAgICAgIHRva2Vucy5wdXNoKHBhdGgpO1xuICAgICAgcGF0aCA9ICcnO1xuICAgIH1cblxuICAgIHZhciBwYXJ0aWFsID0gcHJlZml4ICE9IG51bGwgJiYgbmV4dCAhPSBudWxsICYmIG5leHQgIT09IHByZWZpeDtcbiAgICB2YXIgcmVwZWF0ID0gbW9kaWZpZXIgPT09ICcrJyB8fCBtb2RpZmllciA9PT0gJyonO1xuICAgIHZhciBvcHRpb25hbCA9IG1vZGlmaWVyID09PSAnPycgfHwgbW9kaWZpZXIgPT09ICcqJztcbiAgICB2YXIgZGVsaW1pdGVyID0gcmVzWzJdIHx8IGRlZmF1bHREZWxpbWl0ZXI7XG4gICAgdmFyIHBhdHRlcm4gPSBjYXB0dXJlIHx8IGdyb3VwO1xuXG4gICAgdG9rZW5zLnB1c2goe1xuICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgIHByZWZpeDogcHJlZml4IHx8ICcnLFxuICAgICAgZGVsaW1pdGVyOiBkZWxpbWl0ZXIsXG4gICAgICBvcHRpb25hbDogb3B0aW9uYWwsXG4gICAgICByZXBlYXQ6IHJlcGVhdCxcbiAgICAgIHBhcnRpYWw6IHBhcnRpYWwsXG4gICAgICBhc3RlcmlzazogISFhc3RlcmlzayxcbiAgICAgIHBhdHRlcm46IHBhdHRlcm4gPyBlc2NhcGVHcm91cChwYXR0ZXJuKSA6IChhc3RlcmlzayA/ICcuKicgOiAnW14nICsgZXNjYXBlU3RyaW5nKGRlbGltaXRlcikgKyAnXSs/JylcbiAgICB9KTtcbiAgfVxuXG4gIC8vIE1hdGNoIGFueSBjaGFyYWN0ZXJzIHN0aWxsIHJlbWFpbmluZy5cbiAgaWYgKGluZGV4IDwgc3RyLmxlbmd0aCkge1xuICAgIHBhdGggKz0gc3RyLnN1YnN0cihpbmRleCk7XG4gIH1cblxuICAvLyBJZiB0aGUgcGF0aCBleGlzdHMsIHB1c2ggaXQgb250byB0aGUgZW5kLlxuICBpZiAocGF0aCkge1xuICAgIHRva2Vucy5wdXNoKHBhdGgpO1xuICB9XG5cbiAgcmV0dXJuIHRva2Vuc1xufVxuXG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgICAgICBzdHJcbiAqIEBwYXJhbSAge09iamVjdD19ICAgICAgICAgICAgb3B0aW9uc1xuICogQHJldHVybiB7IWZ1bmN0aW9uKE9iamVjdD0sIE9iamVjdD0pfVxuICovXG5mdW5jdGlvbiBjb21waWxlIChzdHIsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSlcbn1cblxuLyoqXG4gKiBQcmV0dGllciBlbmNvZGluZyBvZiBVUkkgcGF0aCBzZWdtZW50cy5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGVuY29kZVVSSUNvbXBvbmVudFByZXR0eSAoc3RyKSB7XG4gIHJldHVybiBlbmNvZGVVUkkoc3RyKS5yZXBsYWNlKC9bXFwvPyNdL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuICclJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKVxuICB9KVxufVxuXG4vKipcbiAqIEVuY29kZSB0aGUgYXN0ZXJpc2sgcGFyYW1ldGVyLiBTaW1pbGFyIHRvIGBwcmV0dHlgLCBidXQgYWxsb3dzIHNsYXNoZXMuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBlbmNvZGVBc3RlcmlzayAoc3RyKSB7XG4gIHJldHVybiBlbmNvZGVVUkkoc3RyKS5yZXBsYWNlKC9bPyNdL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuICclJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKVxuICB9KVxufVxuXG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uICh0b2tlbnMpIHtcbiAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gIHZhciBtYXRjaGVzID0gbmV3IEFycmF5KHRva2Vucy5sZW5ndGgpO1xuXG4gIC8vIENvbXBpbGUgYWxsIHRoZSBwYXR0ZXJucyBiZWZvcmUgY29tcGlsYXRpb24uXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHR5cGVvZiB0b2tlbnNbaV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBtYXRjaGVzW2ldID0gbmV3IFJlZ0V4cCgnXig/OicgKyB0b2tlbnNbaV0ucGF0dGVybiArICcpJCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAob2JqLCBvcHRzKSB7XG4gICAgdmFyIHBhdGggPSAnJztcbiAgICB2YXIgZGF0YSA9IG9iaiB8fCB7fTtcbiAgICB2YXIgb3B0aW9ucyA9IG9wdHMgfHwge307XG4gICAgdmFyIGVuY29kZSA9IG9wdGlvbnMucHJldHR5ID8gZW5jb2RlVVJJQ29tcG9uZW50UHJldHR5IDogZW5jb2RlVVJJQ29tcG9uZW50O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcblxuICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcGF0aCArPSB0b2tlbjtcblxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWUgPSBkYXRhW3Rva2VuLm5hbWVdO1xuICAgICAgdmFyIHNlZ21lbnQ7XG5cbiAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgIGlmICh0b2tlbi5vcHRpb25hbCkge1xuICAgICAgICAgIC8vIFByZXBlbmQgcGFydGlhbCBzZWdtZW50IHByZWZpeGVzLlxuICAgICAgICAgIGlmICh0b2tlbi5wYXJ0aWFsKSB7XG4gICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIFwiJyArIHRva2VuLm5hbWUgKyAnXCIgdG8gYmUgZGVmaW5lZCcpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGluZGV4JDEodmFsdWUpKSB7XG4gICAgICAgIGlmICghdG9rZW4ucmVwZWF0KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgXCInICsgdG9rZW4ubmFtZSArICdcIiB0byBub3QgcmVwZWF0LCBidXQgcmVjZWl2ZWQgYCcgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgKyAnYCcpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgaWYgKHRva2VuLm9wdGlvbmFsKSB7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIG5vdCBiZSBlbXB0eScpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0pO1xuXG4gICAgICAgICAgaWYgKCFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGFsbCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIG1hdGNoIFwiJyArIHRva2VuLnBhdHRlcm4gKyAnXCIsIGJ1dCByZWNlaXZlZCBgJyArIEpTT04uc3RyaW5naWZ5KHNlZ21lbnQpICsgJ2AnKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHBhdGggKz0gKGogPT09IDAgPyB0b2tlbi5wcmVmaXggOiB0b2tlbi5kZWxpbWl0ZXIpICsgc2VnbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIHNlZ21lbnQgPSB0b2tlbi5hc3RlcmlzayA/IGVuY29kZUFzdGVyaXNrKHZhbHVlKSA6IGVuY29kZSh2YWx1ZSk7XG5cbiAgICAgIGlmICghbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIFwiJyArIHRva2VuLm5hbWUgKyAnXCIgdG8gbWF0Y2ggXCInICsgdG9rZW4ucGF0dGVybiArICdcIiwgYnV0IHJlY2VpdmVkIFwiJyArIHNlZ21lbnQgKyAnXCInKVxuICAgICAgfVxuXG4gICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhdGhcbiAgfVxufVxuXG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nIChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfFxcL1xcXFxdKS9nLCAnXFxcXCQxJylcbn1cblxuLyoqXG4gKiBFc2NhcGUgdGhlIGNhcHR1cmluZyBncm91cCBieSBlc2NhcGluZyBzcGVjaWFsIGNoYXJhY3RlcnMgYW5kIG1lYW5pbmcuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBncm91cFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBlc2NhcGVHcm91cCAoZ3JvdXApIHtcbiAgcmV0dXJuIGdyb3VwLnJlcGxhY2UoLyhbPSE6JFxcLygpXSkvZywgJ1xcXFwkMScpXG59XG5cbi8qKlxuICogQXR0YWNoIHRoZSBrZXlzIGFzIGEgcHJvcGVydHkgb2YgdGhlIHJlZ2V4cC5cbiAqXG4gKiBAcGFyYW0gIHshUmVnRXhwfSByZVxuICogQHBhcmFtICB7QXJyYXl9ICAga2V5c1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gYXR0YWNoS2V5cyAocmUsIGtleXMpIHtcbiAgcmUua2V5cyA9IGtleXM7XG4gIHJldHVybiByZVxufVxuXG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGZsYWdzIChvcHRpb25zKSB7XG4gIHJldHVybiBvcHRpb25zLnNlbnNpdGl2ZSA/ICcnIDogJ2knXG59XG5cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICpcbiAqIEBwYXJhbSAgeyFSZWdFeHB9IHBhdGhcbiAqIEBwYXJhbSAgeyFBcnJheX0gIGtleXNcbiAqIEByZXR1cm4geyFSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwIChwYXRoLCBrZXlzKSB7XG4gIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKTtcblxuICBpZiAoZ3JvdXBzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleXMucHVzaCh7XG4gICAgICAgIG5hbWU6IGksXG4gICAgICAgIHByZWZpeDogbnVsbCxcbiAgICAgICAgZGVsaW1pdGVyOiBudWxsLFxuICAgICAgICBvcHRpb25hbDogZmFsc2UsXG4gICAgICAgIHJlcGVhdDogZmFsc2UsXG4gICAgICAgIHBhcnRpYWw6IGZhbHNlLFxuICAgICAgICBhc3RlcmlzazogZmFsc2UsXG4gICAgICAgIHBhdHRlcm46IG51bGxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhdHRhY2hLZXlzKHBhdGgsIGtleXMpXG59XG5cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKlxuICogQHBhcmFtICB7IUFycmF5fSAgcGF0aFxuICogQHBhcmFtICB7QXJyYXl9ICAga2V5c1xuICogQHBhcmFtICB7IU9iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cCAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICB2YXIgcGFydHMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcbiAgICBwYXJ0cy5wdXNoKHBhdGhUb1JlZ2V4cChwYXRoW2ldLCBrZXlzLCBvcHRpb25zKS5zb3VyY2UpO1xuICB9XG5cbiAgdmFyIHJlZ2V4cCA9IG5ldyBSZWdFeHAoJyg/OicgKyBwYXJ0cy5qb2luKCd8JykgKyAnKScsIGZsYWdzKG9wdGlvbnMpKTtcblxuICByZXR1cm4gYXR0YWNoS2V5cyhyZWdleHAsIGtleXMpXG59XG5cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSAgcGF0aFxuICogQHBhcmFtICB7IUFycmF5fSAga2V5c1xuICogQHBhcmFtICB7IU9iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAgKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHRva2Vuc1RvUmVnRXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKVxufVxuXG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKlxuICogQHBhcmFtICB7IUFycmF5fSAgICAgICAgICB0b2tlbnNcbiAqIEBwYXJhbSAgeyhBcnJheXxPYmplY3QpPX0ga2V5c1xuICogQHBhcmFtICB7T2JqZWN0PX0gICAgICAgICBvcHRpb25zXG4gKiBAcmV0dXJuIHshUmVnRXhwfVxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ0V4cCAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gIGlmICghaW5kZXgkMShrZXlzKSkge1xuICAgIG9wdGlvbnMgPSAvKiogQHR5cGUgeyFPYmplY3R9ICovIChrZXlzIHx8IG9wdGlvbnMpO1xuICAgIGtleXMgPSBbXTtcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIHZhciBzdHJpY3QgPSBvcHRpb25zLnN0cmljdDtcbiAgdmFyIGVuZCA9IG9wdGlvbnMuZW5kICE9PSBmYWxzZTtcbiAgdmFyIHJvdXRlID0gJyc7XG5cbiAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG5cbiAgICBpZiAodHlwZW9mIHRva2VuID09PSAnc3RyaW5nJykge1xuICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKHRva2VuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyh0b2tlbi5wcmVmaXgpO1xuICAgICAgdmFyIGNhcHR1cmUgPSAnKD86JyArIHRva2VuLnBhdHRlcm4gKyAnKSc7XG5cbiAgICAgIGtleXMucHVzaCh0b2tlbik7XG5cbiAgICAgIGlmICh0b2tlbi5yZXBlYXQpIHtcbiAgICAgICAgY2FwdHVyZSArPSAnKD86JyArIHByZWZpeCArIGNhcHR1cmUgKyAnKSonO1xuICAgICAgfVxuXG4gICAgICBpZiAodG9rZW4ub3B0aW9uYWwpIHtcbiAgICAgICAgaWYgKCF0b2tlbi5wYXJ0aWFsKSB7XG4gICAgICAgICAgY2FwdHVyZSA9ICcoPzonICsgcHJlZml4ICsgJygnICsgY2FwdHVyZSArICcpKT8nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhcHR1cmUgPSBwcmVmaXggKyAnKCcgKyBjYXB0dXJlICsgJyk/JztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FwdHVyZSA9IHByZWZpeCArICcoJyArIGNhcHR1cmUgKyAnKSc7XG4gICAgICB9XG5cbiAgICAgIHJvdXRlICs9IGNhcHR1cmU7XG4gICAgfVxuICB9XG5cbiAgdmFyIGRlbGltaXRlciA9IGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCAnLycpO1xuICB2YXIgZW5kc1dpdGhEZWxpbWl0ZXIgPSByb3V0ZS5zbGljZSgtZGVsaW1pdGVyLmxlbmd0aCkgPT09IGRlbGltaXRlcjtcblxuICAvLyBJbiBub24tc3RyaWN0IG1vZGUgd2UgYWxsb3cgYSBzbGFzaCBhdCB0aGUgZW5kIG9mIG1hdGNoLiBJZiB0aGUgcGF0aCB0b1xuICAvLyBtYXRjaCBhbHJlYWR5IGVuZHMgd2l0aCBhIHNsYXNoLCB3ZSByZW1vdmUgaXQgZm9yIGNvbnNpc3RlbmN5LiBUaGUgc2xhc2hcbiAgLy8gaXMgdmFsaWQgYXQgdGhlIGVuZCBvZiBhIHBhdGggbWF0Y2gsIG5vdCBpbiB0aGUgbWlkZGxlLiBUaGlzIGlzIGltcG9ydGFudFxuICAvLyBpbiBub24tZW5kaW5nIG1vZGUsIHdoZXJlIFwiL3Rlc3QvXCIgc2hvdWxkbid0IG1hdGNoIFwiL3Rlc3QvL3JvdXRlXCIuXG4gIGlmICghc3RyaWN0KSB7XG4gICAgcm91dGUgPSAoZW5kc1dpdGhEZWxpbWl0ZXIgPyByb3V0ZS5zbGljZSgwLCAtZGVsaW1pdGVyLmxlbmd0aCkgOiByb3V0ZSkgKyAnKD86JyArIGRlbGltaXRlciArICcoPz0kKSk/JztcbiAgfVxuXG4gIGlmIChlbmQpIHtcbiAgICByb3V0ZSArPSAnJCc7XG4gIH0gZWxzZSB7XG4gICAgLy8gSW4gbm9uLWVuZGluZyBtb2RlLCB3ZSBuZWVkIHRoZSBjYXB0dXJpbmcgZ3JvdXBzIHRvIG1hdGNoIGFzIG11Y2ggYXNcbiAgICAvLyBwb3NzaWJsZSBieSB1c2luZyBhIHBvc2l0aXZlIGxvb2thaGVhZCB0byB0aGUgZW5kIG9yIG5leHQgcGF0aCBzZWdtZW50LlxuICAgIHJvdXRlICs9IHN0cmljdCAmJiBlbmRzV2l0aERlbGltaXRlciA/ICcnIDogJyg/PScgKyBkZWxpbWl0ZXIgKyAnfCQpJztcbiAgfVxuXG4gIHJldHVybiBhdHRhY2hLZXlzKG5ldyBSZWdFeHAoJ14nICsgcm91dGUsIGZsYWdzKG9wdGlvbnMpKSwga2V5cylcbn1cblxuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICpcbiAqIEBwYXJhbSAgeyhzdHJpbmd8UmVnRXhwfEFycmF5KX0gcGF0aFxuICogQHBhcmFtICB7KEFycmF5fE9iamVjdCk9fSAgICAgICBrZXlzXG4gKiBAcGFyYW0gIHtPYmplY3Q9fSAgICAgICAgICAgICAgIG9wdGlvbnNcbiAqIEByZXR1cm4geyFSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cCAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICBpZiAoIWluZGV4JDEoa2V5cykpIHtcbiAgICBvcHRpb25zID0gLyoqIEB0eXBlIHshT2JqZWN0fSAqLyAoa2V5cyB8fCBvcHRpb25zKTtcbiAgICBrZXlzID0gW107XG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCAvKiogQHR5cGUgeyFBcnJheX0gKi8gKGtleXMpKVxuICB9XG5cbiAgaWYgKGluZGV4JDEocGF0aCkpIHtcbiAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cCgvKiogQHR5cGUgeyFBcnJheX0gKi8gKHBhdGgpLCAvKiogQHR5cGUgeyFBcnJheX0gKi8gKGtleXMpLCBvcHRpb25zKVxuICB9XG5cbiAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAocGF0aCksIC8qKiBAdHlwZSB7IUFycmF5fSAqLyAoa2V5cyksIG9wdGlvbnMpXG59XG5cbmluZGV4LnBhcnNlID0gcGFyc2VfMTtcbmluZGV4LmNvbXBpbGUgPSBjb21waWxlXzE7XG5pbmRleC50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbl8xO1xuaW5kZXgudG9rZW5zVG9SZWdFeHAgPSB0b2tlbnNUb1JlZ0V4cF8xO1xuXG4vKiAgKi9cblxudmFyIHJlZ2V4cENvbXBpbGVDYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbmZ1bmN0aW9uIGZpbGxQYXJhbXMgKFxuICBwYXRoLFxuICBwYXJhbXMsXG4gIHJvdXRlTXNnXG4pIHtcbiAgdHJ5IHtcbiAgICB2YXIgZmlsbGVyID1cbiAgICAgIHJlZ2V4cENvbXBpbGVDYWNoZVtwYXRoXSB8fFxuICAgICAgKHJlZ2V4cENvbXBpbGVDYWNoZVtwYXRoXSA9IGluZGV4LmNvbXBpbGUocGF0aCkpO1xuICAgIHJldHVybiBmaWxsZXIocGFyYW1zIHx8IHt9LCB7IHByZXR0eTogdHJ1ZSB9KVxuICB9IGNhdGNoIChlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHdhcm4oZmFsc2UsIChcIm1pc3NpbmcgcGFyYW0gZm9yIFwiICsgcm91dGVNc2cgKyBcIjogXCIgKyAoZS5tZXNzYWdlKSkpO1xuICAgIH1cbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVNYXAgKFxuICByb3V0ZXMsXG4gIG9sZFBhdGhMaXN0LFxuICBvbGRQYXRoTWFwLFxuICBvbGROYW1lTWFwXG4pIHtcbiAgLy8gdGhlIHBhdGggbGlzdCBpcyB1c2VkIHRvIGNvbnRyb2wgcGF0aCBtYXRjaGluZyBwcmlvcml0eVxuICB2YXIgcGF0aExpc3QgPSBvbGRQYXRoTGlzdCB8fCBbXTtcbiAgdmFyIHBhdGhNYXAgPSBvbGRQYXRoTWFwIHx8IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHZhciBuYW1lTWFwID0gb2xkTmFtZU1hcCB8fCBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gIHJvdXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgIGFkZFJvdXRlUmVjb3JkKHBhdGhMaXN0LCBwYXRoTWFwLCBuYW1lTWFwLCByb3V0ZSk7XG4gIH0pO1xuXG4gIC8vIGVuc3VyZSB3aWxkY2FyZCByb3V0ZXMgYXJlIGFsd2F5cyBhdCB0aGUgZW5kXG4gIGZvciAodmFyIGkgPSAwLCBsID0gcGF0aExpc3QubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKHBhdGhMaXN0W2ldID09PSAnKicpIHtcbiAgICAgIHBhdGhMaXN0LnB1c2gocGF0aExpc3Quc3BsaWNlKGksIDEpWzBdKTtcbiAgICAgIGwtLTtcbiAgICAgIGktLTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBhdGhMaXN0OiBwYXRoTGlzdCxcbiAgICBwYXRoTWFwOiBwYXRoTWFwLFxuICAgIG5hbWVNYXA6IG5hbWVNYXBcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRSb3V0ZVJlY29yZCAoXG4gIHBhdGhMaXN0LFxuICBwYXRoTWFwLFxuICBuYW1lTWFwLFxuICByb3V0ZSxcbiAgcGFyZW50LFxuICBtYXRjaEFzXG4pIHtcbiAgdmFyIHBhdGggPSByb3V0ZS5wYXRoO1xuICB2YXIgbmFtZSA9IHJvdXRlLm5hbWU7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgYXNzZXJ0KHBhdGggIT0gbnVsbCwgXCJcXFwicGF0aFxcXCIgaXMgcmVxdWlyZWQgaW4gYSByb3V0ZSBjb25maWd1cmF0aW9uLlwiKTtcbiAgICBhc3NlcnQoXG4gICAgICB0eXBlb2Ygcm91dGUuY29tcG9uZW50ICE9PSAnc3RyaW5nJyxcbiAgICAgIFwicm91dGUgY29uZmlnIFxcXCJjb21wb25lbnRcXFwiIGZvciBwYXRoOiBcIiArIChTdHJpbmcocGF0aCB8fCBuYW1lKSkgKyBcIiBjYW5ub3QgYmUgYSBcIiArXG4gICAgICBcInN0cmluZyBpZC4gVXNlIGFuIGFjdHVhbCBjb21wb25lbnQgaW5zdGVhZC5cIlxuICAgICk7XG4gIH1cblxuICB2YXIgbm9ybWFsaXplZFBhdGggPSBub3JtYWxpemVQYXRoKHBhdGgsIHBhcmVudCk7XG4gIHZhciByZWNvcmQgPSB7XG4gICAgcGF0aDogbm9ybWFsaXplZFBhdGgsXG4gICAgcmVnZXg6IGNvbXBpbGVSb3V0ZVJlZ2V4KG5vcm1hbGl6ZWRQYXRoKSxcbiAgICBjb21wb25lbnRzOiByb3V0ZS5jb21wb25lbnRzIHx8IHsgZGVmYXVsdDogcm91dGUuY29tcG9uZW50IH0sXG4gICAgaW5zdGFuY2VzOiB7fSxcbiAgICBuYW1lOiBuYW1lLFxuICAgIHBhcmVudDogcGFyZW50LFxuICAgIG1hdGNoQXM6IG1hdGNoQXMsXG4gICAgcmVkaXJlY3Q6IHJvdXRlLnJlZGlyZWN0LFxuICAgIGJlZm9yZUVudGVyOiByb3V0ZS5iZWZvcmVFbnRlcixcbiAgICBtZXRhOiByb3V0ZS5tZXRhIHx8IHt9LFxuICAgIHByb3BzOiByb3V0ZS5wcm9wcyA9PSBudWxsXG4gICAgICA/IHt9XG4gICAgICA6IHJvdXRlLmNvbXBvbmVudHNcbiAgICAgICAgPyByb3V0ZS5wcm9wc1xuICAgICAgICA6IHsgZGVmYXVsdDogcm91dGUucHJvcHMgfVxuICB9O1xuXG4gIGlmIChyb3V0ZS5jaGlsZHJlbikge1xuICAgIC8vIFdhcm4gaWYgcm91dGUgaXMgbmFtZWQgYW5kIGhhcyBhIGRlZmF1bHQgY2hpbGQgcm91dGUuXG4gICAgLy8gSWYgdXNlcnMgbmF2aWdhdGUgdG8gdGhpcyByb3V0ZSBieSBuYW1lLCB0aGUgZGVmYXVsdCBjaGlsZCB3aWxsXG4gICAgLy8gbm90IGJlIHJlbmRlcmVkIChHSCBJc3N1ZSAjNjI5KVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAocm91dGUubmFtZSAmJiByb3V0ZS5jaGlsZHJlbi5zb21lKGZ1bmN0aW9uIChjaGlsZCkgeyByZXR1cm4gL15cXC8/JC8udGVzdChjaGlsZC5wYXRoKTsgfSkpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICBcIk5hbWVkIFJvdXRlICdcIiArIChyb3V0ZS5uYW1lKSArIFwiJyBoYXMgYSBkZWZhdWx0IGNoaWxkIHJvdXRlLiBcIiArXG4gICAgICAgICAgXCJXaGVuIG5hdmlnYXRpbmcgdG8gdGhpcyBuYW1lZCByb3V0ZSAoOnRvPVxcXCJ7bmFtZTogJ1wiICsgKHJvdXRlLm5hbWUpICsgXCInXFxcIiksIFwiICtcbiAgICAgICAgICBcInRoZSBkZWZhdWx0IGNoaWxkIHJvdXRlIHdpbGwgbm90IGJlIHJlbmRlcmVkLiBSZW1vdmUgdGhlIG5hbWUgZnJvbSBcIiArXG4gICAgICAgICAgXCJ0aGlzIHJvdXRlIGFuZCB1c2UgdGhlIG5hbWUgb2YgdGhlIGRlZmF1bHQgY2hpbGQgcm91dGUgZm9yIG5hbWVkIFwiICtcbiAgICAgICAgICBcImxpbmtzIGluc3RlYWQuXCJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcm91dGUuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIHZhciBjaGlsZE1hdGNoQXMgPSBtYXRjaEFzXG4gICAgICAgID8gY2xlYW5QYXRoKChtYXRjaEFzICsgXCIvXCIgKyAoY2hpbGQucGF0aCkpKVxuICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICAgIGFkZFJvdXRlUmVjb3JkKHBhdGhMaXN0LCBwYXRoTWFwLCBuYW1lTWFwLCBjaGlsZCwgcmVjb3JkLCBjaGlsZE1hdGNoQXMpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKHJvdXRlLmFsaWFzICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShyb3V0ZS5hbGlhcykpIHtcbiAgICAgIHJvdXRlLmFsaWFzLmZvckVhY2goZnVuY3Rpb24gKGFsaWFzKSB7XG4gICAgICAgIHZhciBhbGlhc1JvdXRlID0ge1xuICAgICAgICAgIHBhdGg6IGFsaWFzLFxuICAgICAgICAgIGNoaWxkcmVuOiByb3V0ZS5jaGlsZHJlblxuICAgICAgICB9O1xuICAgICAgICBhZGRSb3V0ZVJlY29yZChwYXRoTGlzdCwgcGF0aE1hcCwgbmFtZU1hcCwgYWxpYXNSb3V0ZSwgcGFyZW50LCByZWNvcmQucGF0aCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFsaWFzUm91dGUgPSB7XG4gICAgICAgIHBhdGg6IHJvdXRlLmFsaWFzLFxuICAgICAgICBjaGlsZHJlbjogcm91dGUuY2hpbGRyZW5cbiAgICAgIH07XG4gICAgICBhZGRSb3V0ZVJlY29yZChwYXRoTGlzdCwgcGF0aE1hcCwgbmFtZU1hcCwgYWxpYXNSb3V0ZSwgcGFyZW50LCByZWNvcmQucGF0aCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFwYXRoTWFwW3JlY29yZC5wYXRoXSkge1xuICAgIHBhdGhMaXN0LnB1c2gocmVjb3JkLnBhdGgpO1xuICAgIHBhdGhNYXBbcmVjb3JkLnBhdGhdID0gcmVjb3JkO1xuICB9XG5cbiAgaWYgKG5hbWUpIHtcbiAgICBpZiAoIW5hbWVNYXBbbmFtZV0pIHtcbiAgICAgIG5hbWVNYXBbbmFtZV0gPSByZWNvcmQ7XG4gICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICFtYXRjaEFzKSB7XG4gICAgICB3YXJuKFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgXCJEdXBsaWNhdGUgbmFtZWQgcm91dGVzIGRlZmluaXRpb246IFwiICtcbiAgICAgICAgXCJ7IG5hbWU6IFxcXCJcIiArIG5hbWUgKyBcIlxcXCIsIHBhdGg6IFxcXCJcIiArIChyZWNvcmQucGF0aCkgKyBcIlxcXCIgfVwiXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjb21waWxlUm91dGVSZWdleCAocGF0aCkge1xuICB2YXIgcmVnZXggPSBpbmRleChwYXRoKTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB2YXIga2V5cyA9IHt9O1xuICAgIHJlZ2V4LmtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB3YXJuKCFrZXlzW2tleS5uYW1lXSwgKFwiRHVwbGljYXRlIHBhcmFtIGtleXMgaW4gcm91dGUgd2l0aCBwYXRoOiBcXFwiXCIgKyBwYXRoICsgXCJcXFwiXCIpKTtcbiAgICAgIGtleXNba2V5Lm5hbWVdID0gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcmVnZXhcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplUGF0aCAocGF0aCwgcGFyZW50KSB7XG4gIHBhdGggPSBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJyk7XG4gIGlmIChwYXRoWzBdID09PSAnLycpIHsgcmV0dXJuIHBhdGggfVxuICBpZiAocGFyZW50ID09IG51bGwpIHsgcmV0dXJuIHBhdGggfVxuICByZXR1cm4gY2xlYW5QYXRoKCgocGFyZW50LnBhdGgpICsgXCIvXCIgKyBwYXRoKSlcbn1cblxuLyogICovXG5cblxuZnVuY3Rpb24gbm9ybWFsaXplTG9jYXRpb24gKFxuICByYXcsXG4gIGN1cnJlbnQsXG4gIGFwcGVuZCxcbiAgcm91dGVyXG4pIHtcbiAgdmFyIG5leHQgPSB0eXBlb2YgcmF3ID09PSAnc3RyaW5nJyA/IHsgcGF0aDogcmF3IH0gOiByYXc7XG4gIC8vIG5hbWVkIHRhcmdldFxuICBpZiAobmV4dC5uYW1lIHx8IG5leHQuX25vcm1hbGl6ZWQpIHtcbiAgICByZXR1cm4gbmV4dFxuICB9XG5cbiAgLy8gcmVsYXRpdmUgcGFyYW1zXG4gIGlmICghbmV4dC5wYXRoICYmIG5leHQucGFyYW1zICYmIGN1cnJlbnQpIHtcbiAgICBuZXh0ID0gYXNzaWduKHt9LCBuZXh0KTtcbiAgICBuZXh0Ll9ub3JtYWxpemVkID0gdHJ1ZTtcbiAgICB2YXIgcGFyYW1zID0gYXNzaWduKGFzc2lnbih7fSwgY3VycmVudC5wYXJhbXMpLCBuZXh0LnBhcmFtcyk7XG4gICAgaWYgKGN1cnJlbnQubmFtZSkge1xuICAgICAgbmV4dC5uYW1lID0gY3VycmVudC5uYW1lO1xuICAgICAgbmV4dC5wYXJhbXMgPSBwYXJhbXM7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50Lm1hdGNoZWQpIHtcbiAgICAgIHZhciByYXdQYXRoID0gY3VycmVudC5tYXRjaGVkW2N1cnJlbnQubWF0Y2hlZC5sZW5ndGggLSAxXS5wYXRoO1xuICAgICAgbmV4dC5wYXRoID0gZmlsbFBhcmFtcyhyYXdQYXRoLCBwYXJhbXMsIChcInBhdGggXCIgKyAoY3VycmVudC5wYXRoKSkpO1xuICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgd2FybihmYWxzZSwgXCJyZWxhdGl2ZSBwYXJhbXMgbmF2aWdhdGlvbiByZXF1aXJlcyBhIGN1cnJlbnQgcm91dGUuXCIpO1xuICAgIH1cbiAgICByZXR1cm4gbmV4dFxuICB9XG5cbiAgdmFyIHBhcnNlZFBhdGggPSBwYXJzZVBhdGgobmV4dC5wYXRoIHx8ICcnKTtcbiAgdmFyIGJhc2VQYXRoID0gKGN1cnJlbnQgJiYgY3VycmVudC5wYXRoKSB8fCAnLyc7XG4gIHZhciBwYXRoID0gcGFyc2VkUGF0aC5wYXRoXG4gICAgPyByZXNvbHZlUGF0aChwYXJzZWRQYXRoLnBhdGgsIGJhc2VQYXRoLCBhcHBlbmQgfHwgbmV4dC5hcHBlbmQpXG4gICAgOiBiYXNlUGF0aDtcblxuICB2YXIgcXVlcnkgPSByZXNvbHZlUXVlcnkoXG4gICAgcGFyc2VkUGF0aC5xdWVyeSxcbiAgICBuZXh0LnF1ZXJ5LFxuICAgIHJvdXRlciAmJiByb3V0ZXIub3B0aW9ucy5wYXJzZVF1ZXJ5XG4gICk7XG5cbiAgdmFyIGhhc2ggPSBuZXh0Lmhhc2ggfHwgcGFyc2VkUGF0aC5oYXNoO1xuICBpZiAoaGFzaCAmJiBoYXNoLmNoYXJBdCgwKSAhPT0gJyMnKSB7XG4gICAgaGFzaCA9IFwiI1wiICsgaGFzaDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgX25vcm1hbGl6ZWQ6IHRydWUsXG4gICAgcGF0aDogcGF0aCxcbiAgICBxdWVyeTogcXVlcnksXG4gICAgaGFzaDogaGFzaFxuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2lnbiAoYSwgYikge1xuICBmb3IgKHZhciBrZXkgaW4gYikge1xuICAgIGFba2V5XSA9IGJba2V5XTtcbiAgfVxuICByZXR1cm4gYVxufVxuXG4vKiAgKi9cblxuXG5mdW5jdGlvbiBjcmVhdGVNYXRjaGVyIChcbiAgcm91dGVzLFxuICByb3V0ZXJcbikge1xuICB2YXIgcmVmID0gY3JlYXRlUm91dGVNYXAocm91dGVzKTtcbiAgdmFyIHBhdGhMaXN0ID0gcmVmLnBhdGhMaXN0O1xuICB2YXIgcGF0aE1hcCA9IHJlZi5wYXRoTWFwO1xuICB2YXIgbmFtZU1hcCA9IHJlZi5uYW1lTWFwO1xuXG4gIGZ1bmN0aW9uIGFkZFJvdXRlcyAocm91dGVzKSB7XG4gICAgY3JlYXRlUm91dGVNYXAocm91dGVzLCBwYXRoTGlzdCwgcGF0aE1hcCwgbmFtZU1hcCk7XG4gIH1cblxuICBmdW5jdGlvbiBtYXRjaCAoXG4gICAgcmF3LFxuICAgIGN1cnJlbnRSb3V0ZSxcbiAgICByZWRpcmVjdGVkRnJvbVxuICApIHtcbiAgICB2YXIgbG9jYXRpb24gPSBub3JtYWxpemVMb2NhdGlvbihyYXcsIGN1cnJlbnRSb3V0ZSwgZmFsc2UsIHJvdXRlcik7XG4gICAgdmFyIG5hbWUgPSBsb2NhdGlvbi5uYW1lO1xuXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIHZhciByZWNvcmQgPSBuYW1lTWFwW25hbWVdO1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgd2FybihyZWNvcmQsIChcIlJvdXRlIHdpdGggbmFtZSAnXCIgKyBuYW1lICsgXCInIGRvZXMgbm90IGV4aXN0XCIpKTtcbiAgICAgIH1cbiAgICAgIHZhciBwYXJhbU5hbWVzID0gcmVjb3JkLnJlZ2V4LmtleXNcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7IHJldHVybiAha2V5Lm9wdGlvbmFsOyB9KVxuICAgICAgICAubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleS5uYW1lOyB9KTtcblxuICAgICAgaWYgKHR5cGVvZiBsb2NhdGlvbi5wYXJhbXMgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGxvY2F0aW9uLnBhcmFtcyA9IHt9O1xuICAgICAgfVxuXG4gICAgICBpZiAoY3VycmVudFJvdXRlICYmIHR5cGVvZiBjdXJyZW50Um91dGUucGFyYW1zID09PSAnb2JqZWN0Jykge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gY3VycmVudFJvdXRlLnBhcmFtcykge1xuICAgICAgICAgIGlmICghKGtleSBpbiBsb2NhdGlvbi5wYXJhbXMpICYmIHBhcmFtTmFtZXMuaW5kZXhPZihrZXkpID4gLTEpIHtcbiAgICAgICAgICAgIGxvY2F0aW9uLnBhcmFtc1trZXldID0gY3VycmVudFJvdXRlLnBhcmFtc1trZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkKSB7XG4gICAgICAgIGxvY2F0aW9uLnBhdGggPSBmaWxsUGFyYW1zKHJlY29yZC5wYXRoLCBsb2NhdGlvbi5wYXJhbXMsIChcIm5hbWVkIHJvdXRlIFxcXCJcIiArIG5hbWUgKyBcIlxcXCJcIikpO1xuICAgICAgICByZXR1cm4gX2NyZWF0ZVJvdXRlKHJlY29yZCwgbG9jYXRpb24sIHJlZGlyZWN0ZWRGcm9tKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobG9jYXRpb24ucGF0aCkge1xuICAgICAgbG9jYXRpb24ucGFyYW1zID0ge307XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGhMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBwYXRoID0gcGF0aExpc3RbaV07XG4gICAgICAgIHZhciByZWNvcmQkMSA9IHBhdGhNYXBbcGF0aF07XG4gICAgICAgIGlmIChtYXRjaFJvdXRlKHJlY29yZCQxLnJlZ2V4LCBsb2NhdGlvbi5wYXRoLCBsb2NhdGlvbi5wYXJhbXMpKSB7XG4gICAgICAgICAgcmV0dXJuIF9jcmVhdGVSb3V0ZShyZWNvcmQkMSwgbG9jYXRpb24sIHJlZGlyZWN0ZWRGcm9tKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIG5vIG1hdGNoXG4gICAgcmV0dXJuIF9jcmVhdGVSb3V0ZShudWxsLCBsb2NhdGlvbilcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZGlyZWN0IChcbiAgICByZWNvcmQsXG4gICAgbG9jYXRpb25cbiAgKSB7XG4gICAgdmFyIG9yaWdpbmFsUmVkaXJlY3QgPSByZWNvcmQucmVkaXJlY3Q7XG4gICAgdmFyIHJlZGlyZWN0ID0gdHlwZW9mIG9yaWdpbmFsUmVkaXJlY3QgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBvcmlnaW5hbFJlZGlyZWN0KGNyZWF0ZVJvdXRlKHJlY29yZCwgbG9jYXRpb24sIG51bGwsIHJvdXRlcikpXG4gICAgICAgIDogb3JpZ2luYWxSZWRpcmVjdDtcblxuICAgIGlmICh0eXBlb2YgcmVkaXJlY3QgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZWRpcmVjdCA9IHsgcGF0aDogcmVkaXJlY3QgfTtcbiAgICB9XG5cbiAgICBpZiAoIXJlZGlyZWN0IHx8IHR5cGVvZiByZWRpcmVjdCAhPT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgZmFsc2UsIChcImludmFsaWQgcmVkaXJlY3Qgb3B0aW9uOiBcIiArIChKU09OLnN0cmluZ2lmeShyZWRpcmVjdCkpKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF9jcmVhdGVSb3V0ZShudWxsLCBsb2NhdGlvbilcbiAgICB9XG5cbiAgICB2YXIgcmUgPSByZWRpcmVjdDtcbiAgICB2YXIgbmFtZSA9IHJlLm5hbWU7XG4gICAgdmFyIHBhdGggPSByZS5wYXRoO1xuICAgIHZhciBxdWVyeSA9IGxvY2F0aW9uLnF1ZXJ5O1xuICAgIHZhciBoYXNoID0gbG9jYXRpb24uaGFzaDtcbiAgICB2YXIgcGFyYW1zID0gbG9jYXRpb24ucGFyYW1zO1xuICAgIHF1ZXJ5ID0gcmUuaGFzT3duUHJvcGVydHkoJ3F1ZXJ5JykgPyByZS5xdWVyeSA6IHF1ZXJ5O1xuICAgIGhhc2ggPSByZS5oYXNPd25Qcm9wZXJ0eSgnaGFzaCcpID8gcmUuaGFzaCA6IGhhc2g7XG4gICAgcGFyYW1zID0gcmUuaGFzT3duUHJvcGVydHkoJ3BhcmFtcycpID8gcmUucGFyYW1zIDogcGFyYW1zO1xuXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIC8vIHJlc29sdmVkIG5hbWVkIGRpcmVjdFxuICAgICAgdmFyIHRhcmdldFJlY29yZCA9IG5hbWVNYXBbbmFtZV07XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBhc3NlcnQodGFyZ2V0UmVjb3JkLCAoXCJyZWRpcmVjdCBmYWlsZWQ6IG5hbWVkIHJvdXRlIFxcXCJcIiArIG5hbWUgKyBcIlxcXCIgbm90IGZvdW5kLlwiKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbWF0Y2goe1xuICAgICAgICBfbm9ybWFsaXplZDogdHJ1ZSxcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgcXVlcnk6IHF1ZXJ5LFxuICAgICAgICBoYXNoOiBoYXNoLFxuICAgICAgICBwYXJhbXM6IHBhcmFtc1xuICAgICAgfSwgdW5kZWZpbmVkLCBsb2NhdGlvbilcbiAgICB9IGVsc2UgaWYgKHBhdGgpIHtcbiAgICAgIC8vIDEuIHJlc29sdmUgcmVsYXRpdmUgcmVkaXJlY3RcbiAgICAgIHZhciByYXdQYXRoID0gcmVzb2x2ZVJlY29yZFBhdGgocGF0aCwgcmVjb3JkKTtcbiAgICAgIC8vIDIuIHJlc29sdmUgcGFyYW1zXG4gICAgICB2YXIgcmVzb2x2ZWRQYXRoID0gZmlsbFBhcmFtcyhyYXdQYXRoLCBwYXJhbXMsIChcInJlZGlyZWN0IHJvdXRlIHdpdGggcGF0aCBcXFwiXCIgKyByYXdQYXRoICsgXCJcXFwiXCIpKTtcbiAgICAgIC8vIDMuIHJlbWF0Y2ggd2l0aCBleGlzdGluZyBxdWVyeSBhbmQgaGFzaFxuICAgICAgcmV0dXJuIG1hdGNoKHtcbiAgICAgICAgX25vcm1hbGl6ZWQ6IHRydWUsXG4gICAgICAgIHBhdGg6IHJlc29sdmVkUGF0aCxcbiAgICAgICAgcXVlcnk6IHF1ZXJ5LFxuICAgICAgICBoYXNoOiBoYXNoXG4gICAgICB9LCB1bmRlZmluZWQsIGxvY2F0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB3YXJuKGZhbHNlLCAoXCJpbnZhbGlkIHJlZGlyZWN0IG9wdGlvbjogXCIgKyAoSlNPTi5zdHJpbmdpZnkocmVkaXJlY3QpKSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF9jcmVhdGVSb3V0ZShudWxsLCBsb2NhdGlvbilcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhbGlhcyAoXG4gICAgcmVjb3JkLFxuICAgIGxvY2F0aW9uLFxuICAgIG1hdGNoQXNcbiAgKSB7XG4gICAgdmFyIGFsaWFzZWRQYXRoID0gZmlsbFBhcmFtcyhtYXRjaEFzLCBsb2NhdGlvbi5wYXJhbXMsIChcImFsaWFzZWQgcm91dGUgd2l0aCBwYXRoIFxcXCJcIiArIG1hdGNoQXMgKyBcIlxcXCJcIikpO1xuICAgIHZhciBhbGlhc2VkTWF0Y2ggPSBtYXRjaCh7XG4gICAgICBfbm9ybWFsaXplZDogdHJ1ZSxcbiAgICAgIHBhdGg6IGFsaWFzZWRQYXRoXG4gICAgfSk7XG4gICAgaWYgKGFsaWFzZWRNYXRjaCkge1xuICAgICAgdmFyIG1hdGNoZWQgPSBhbGlhc2VkTWF0Y2gubWF0Y2hlZDtcbiAgICAgIHZhciBhbGlhc2VkUmVjb3JkID0gbWF0Y2hlZFttYXRjaGVkLmxlbmd0aCAtIDFdO1xuICAgICAgbG9jYXRpb24ucGFyYW1zID0gYWxpYXNlZE1hdGNoLnBhcmFtcztcbiAgICAgIHJldHVybiBfY3JlYXRlUm91dGUoYWxpYXNlZFJlY29yZCwgbG9jYXRpb24pXG4gICAgfVxuICAgIHJldHVybiBfY3JlYXRlUm91dGUobnVsbCwgbG9jYXRpb24pXG4gIH1cblxuICBmdW5jdGlvbiBfY3JlYXRlUm91dGUgKFxuICAgIHJlY29yZCxcbiAgICBsb2NhdGlvbixcbiAgICByZWRpcmVjdGVkRnJvbVxuICApIHtcbiAgICBpZiAocmVjb3JkICYmIHJlY29yZC5yZWRpcmVjdCkge1xuICAgICAgcmV0dXJuIHJlZGlyZWN0KHJlY29yZCwgcmVkaXJlY3RlZEZyb20gfHwgbG9jYXRpb24pXG4gICAgfVxuICAgIGlmIChyZWNvcmQgJiYgcmVjb3JkLm1hdGNoQXMpIHtcbiAgICAgIHJldHVybiBhbGlhcyhyZWNvcmQsIGxvY2F0aW9uLCByZWNvcmQubWF0Y2hBcylcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZVJvdXRlKHJlY29yZCwgbG9jYXRpb24sIHJlZGlyZWN0ZWRGcm9tLCByb3V0ZXIpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1hdGNoOiBtYXRjaCxcbiAgICBhZGRSb3V0ZXM6IGFkZFJvdXRlc1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hdGNoUm91dGUgKFxuICByZWdleCxcbiAgcGF0aCxcbiAgcGFyYW1zXG4pIHtcbiAgdmFyIG0gPSBwYXRoLm1hdGNoKHJlZ2V4KTtcblxuICBpZiAoIW0pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfSBlbHNlIGlmICghcGFyYW1zKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAxLCBsZW4gPSBtLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgdmFyIGtleSA9IHJlZ2V4LmtleXNbaSAtIDFdO1xuICAgIHZhciB2YWwgPSB0eXBlb2YgbVtpXSA9PT0gJ3N0cmluZycgPyBkZWNvZGVVUklDb21wb25lbnQobVtpXSkgOiBtW2ldO1xuICAgIGlmIChrZXkpIHtcbiAgICAgIHBhcmFtc1trZXkubmFtZV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWVcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVJlY29yZFBhdGggKHBhdGgsIHJlY29yZCkge1xuICByZXR1cm4gcmVzb2x2ZVBhdGgocGF0aCwgcmVjb3JkLnBhcmVudCA/IHJlY29yZC5wYXJlbnQucGF0aCA6ICcvJywgdHJ1ZSlcbn1cblxuLyogICovXG5cblxudmFyIHBvc2l0aW9uU3RvcmUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG5mdW5jdGlvbiBzZXR1cFNjcm9sbCAoKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgc2F2ZVNjcm9sbFBvc2l0aW9uKCk7XG4gICAgaWYgKGUuc3RhdGUgJiYgZS5zdGF0ZS5rZXkpIHtcbiAgICAgIHNldFN0YXRlS2V5KGUuc3RhdGUua2V5KTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVTY3JvbGwgKFxuICByb3V0ZXIsXG4gIHRvLFxuICBmcm9tLFxuICBpc1BvcFxuKSB7XG4gIGlmICghcm91dGVyLmFwcCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIGJlaGF2aW9yID0gcm91dGVyLm9wdGlvbnMuc2Nyb2xsQmVoYXZpb3I7XG4gIGlmICghYmVoYXZpb3IpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBiZWhhdmlvciA9PT0gJ2Z1bmN0aW9uJywgXCJzY3JvbGxCZWhhdmlvciBtdXN0IGJlIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICAvLyB3YWl0IHVudGlsIHJlLXJlbmRlciBmaW5pc2hlcyBiZWZvcmUgc2Nyb2xsaW5nXG4gIHJvdXRlci5hcHAuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcG9zaXRpb24gPSBnZXRTY3JvbGxQb3NpdGlvbigpO1xuICAgIHZhciBzaG91bGRTY3JvbGwgPSBiZWhhdmlvcih0bywgZnJvbSwgaXNQb3AgPyBwb3NpdGlvbiA6IG51bGwpO1xuICAgIGlmICghc2hvdWxkU2Nyb2xsKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdmFyIGlzT2JqZWN0ID0gdHlwZW9mIHNob3VsZFNjcm9sbCA9PT0gJ29iamVjdCc7XG4gICAgaWYgKGlzT2JqZWN0ICYmIHR5cGVvZiBzaG91bGRTY3JvbGwuc2VsZWN0b3IgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNob3VsZFNjcm9sbC5zZWxlY3Rvcik7XG4gICAgICBpZiAoZWwpIHtcbiAgICAgICAgcG9zaXRpb24gPSBnZXRFbGVtZW50UG9zaXRpb24oZWwpO1xuICAgICAgfSBlbHNlIGlmIChpc1ZhbGlkUG9zaXRpb24oc2hvdWxkU2Nyb2xsKSkge1xuICAgICAgICBwb3NpdGlvbiA9IG5vcm1hbGl6ZVBvc2l0aW9uKHNob3VsZFNjcm9sbCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc09iamVjdCAmJiBpc1ZhbGlkUG9zaXRpb24oc2hvdWxkU2Nyb2xsKSkge1xuICAgICAgcG9zaXRpb24gPSBub3JtYWxpemVQb3NpdGlvbihzaG91bGRTY3JvbGwpO1xuICAgIH1cblxuICAgIGlmIChwb3NpdGlvbikge1xuICAgICAgd2luZG93LnNjcm9sbFRvKHBvc2l0aW9uLngsIHBvc2l0aW9uLnkpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNhdmVTY3JvbGxQb3NpdGlvbiAoKSB7XG4gIHZhciBrZXkgPSBnZXRTdGF0ZUtleSgpO1xuICBpZiAoa2V5KSB7XG4gICAgcG9zaXRpb25TdG9yZVtrZXldID0ge1xuICAgICAgeDogd2luZG93LnBhZ2VYT2Zmc2V0LFxuICAgICAgeTogd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxQb3NpdGlvbiAoKSB7XG4gIHZhciBrZXkgPSBnZXRTdGF0ZUtleSgpO1xuICBpZiAoa2V5KSB7XG4gICAgcmV0dXJuIHBvc2l0aW9uU3RvcmVba2V5XVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRQb3NpdGlvbiAoZWwpIHtcbiAgdmFyIGRvY0VsID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB2YXIgZG9jUmVjdCA9IGRvY0VsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB2YXIgZWxSZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiB7XG4gICAgeDogZWxSZWN0LmxlZnQgLSBkb2NSZWN0LmxlZnQsXG4gICAgeTogZWxSZWN0LnRvcCAtIGRvY1JlY3QudG9wXG4gIH1cbn1cblxuZnVuY3Rpb24gaXNWYWxpZFBvc2l0aW9uIChvYmopIHtcbiAgcmV0dXJuIGlzTnVtYmVyKG9iai54KSB8fCBpc051bWJlcihvYmoueSlcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplUG9zaXRpb24gKG9iaikge1xuICByZXR1cm4ge1xuICAgIHg6IGlzTnVtYmVyKG9iai54KSA/IG9iai54IDogd2luZG93LnBhZ2VYT2Zmc2V0LFxuICAgIHk6IGlzTnVtYmVyKG9iai55KSA/IG9iai55IDogd2luZG93LnBhZ2VZT2Zmc2V0XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNOdW1iZXIgKHYpIHtcbiAgcmV0dXJuIHR5cGVvZiB2ID09PSAnbnVtYmVyJ1xufVxuXG4vKiAgKi9cblxudmFyIHN1cHBvcnRzUHVzaFN0YXRlID0gaW5Ccm93c2VyICYmIChmdW5jdGlvbiAoKSB7XG4gIHZhciB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xuXG4gIGlmIChcbiAgICAodWEuaW5kZXhPZignQW5kcm9pZCAyLicpICE9PSAtMSB8fCB1YS5pbmRleE9mKCdBbmRyb2lkIDQuMCcpICE9PSAtMSkgJiZcbiAgICB1YS5pbmRleE9mKCdNb2JpbGUgU2FmYXJpJykgIT09IC0xICYmXG4gICAgdWEuaW5kZXhPZignQ2hyb21lJykgPT09IC0xICYmXG4gICAgdWEuaW5kZXhPZignV2luZG93cyBQaG9uZScpID09PSAtMVxuICApIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiB3aW5kb3cuaGlzdG9yeSAmJiAncHVzaFN0YXRlJyBpbiB3aW5kb3cuaGlzdG9yeVxufSkoKTtcblxuLy8gdXNlIFVzZXIgVGltaW5nIGFwaSAoaWYgcHJlc2VudCkgZm9yIG1vcmUgYWNjdXJhdGUga2V5IHByZWNpc2lvblxudmFyIFRpbWUgPSBpbkJyb3dzZXIgJiYgd2luZG93LnBlcmZvcm1hbmNlICYmIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3dcbiAgPyB3aW5kb3cucGVyZm9ybWFuY2VcbiAgOiBEYXRlO1xuXG52YXIgX2tleSA9IGdlbktleSgpO1xuXG5mdW5jdGlvbiBnZW5LZXkgKCkge1xuICByZXR1cm4gVGltZS5ub3coKS50b0ZpeGVkKDMpXG59XG5cbmZ1bmN0aW9uIGdldFN0YXRlS2V5ICgpIHtcbiAgcmV0dXJuIF9rZXlcbn1cblxuZnVuY3Rpb24gc2V0U3RhdGVLZXkgKGtleSkge1xuICBfa2V5ID0ga2V5O1xufVxuXG5mdW5jdGlvbiBwdXNoU3RhdGUgKHVybCwgcmVwbGFjZSkge1xuICBzYXZlU2Nyb2xsUG9zaXRpb24oKTtcbiAgLy8gdHJ5Li4uY2F0Y2ggdGhlIHB1c2hTdGF0ZSBjYWxsIHRvIGdldCBhcm91bmQgU2FmYXJpXG4gIC8vIERPTSBFeGNlcHRpb24gMTggd2hlcmUgaXQgbGltaXRzIHRvIDEwMCBwdXNoU3RhdGUgY2FsbHNcbiAgdmFyIGhpc3RvcnkgPSB3aW5kb3cuaGlzdG9yeTtcbiAgdHJ5IHtcbiAgICBpZiAocmVwbGFjZSkge1xuICAgICAgaGlzdG9yeS5yZXBsYWNlU3RhdGUoeyBrZXk6IF9rZXkgfSwgJycsIHVybCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIF9rZXkgPSBnZW5LZXkoKTtcbiAgICAgIGhpc3RvcnkucHVzaFN0YXRlKHsga2V5OiBfa2V5IH0sICcnLCB1cmwpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIHdpbmRvdy5sb2NhdGlvbltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ2Fzc2lnbiddKHVybCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVwbGFjZVN0YXRlICh1cmwpIHtcbiAgcHVzaFN0YXRlKHVybCwgdHJ1ZSk7XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBydW5RdWV1ZSAocXVldWUsIGZuLCBjYikge1xuICB2YXIgc3RlcCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgIGlmIChpbmRleCA+PSBxdWV1ZS5sZW5ndGgpIHtcbiAgICAgIGNiKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChxdWV1ZVtpbmRleF0pIHtcbiAgICAgICAgZm4ocXVldWVbaW5kZXhdLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc3RlcChpbmRleCArIDEpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0ZXAoaW5kZXggKyAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHN0ZXAoMCk7XG59XG5cbi8qICAqL1xuXG52YXIgSGlzdG9yeSA9IGZ1bmN0aW9uIEhpc3RvcnkgKHJvdXRlciwgYmFzZSkge1xuICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgdGhpcy5iYXNlID0gbm9ybWFsaXplQmFzZShiYXNlKTtcbiAgLy8gc3RhcnQgd2l0aCBhIHJvdXRlIG9iamVjdCB0aGF0IHN0YW5kcyBmb3IgXCJub3doZXJlXCJcbiAgdGhpcy5jdXJyZW50ID0gU1RBUlQ7XG4gIHRoaXMucGVuZGluZyA9IG51bGw7XG4gIHRoaXMucmVhZHkgPSBmYWxzZTtcbiAgdGhpcy5yZWFkeUNicyA9IFtdO1xuICB0aGlzLnJlYWR5RXJyb3JDYnMgPSBbXTtcbiAgdGhpcy5lcnJvckNicyA9IFtdO1xufTtcblxuSGlzdG9yeS5wcm90b3R5cGUubGlzdGVuID0gZnVuY3Rpb24gbGlzdGVuIChjYikge1xuICB0aGlzLmNiID0gY2I7XG59O1xuXG5IaXN0b3J5LnByb3RvdHlwZS5vblJlYWR5ID0gZnVuY3Rpb24gb25SZWFkeSAoY2IsIGVycm9yQ2IpIHtcbiAgaWYgKHRoaXMucmVhZHkpIHtcbiAgICBjYigpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMucmVhZHlDYnMucHVzaChjYik7XG4gICAgaWYgKGVycm9yQ2IpIHtcbiAgICAgIHRoaXMucmVhZHlFcnJvckNicy5wdXNoKGVycm9yQ2IpO1xuICAgIH1cbiAgfVxufTtcblxuSGlzdG9yeS5wcm90b3R5cGUub25FcnJvciA9IGZ1bmN0aW9uIG9uRXJyb3IgKGVycm9yQ2IpIHtcbiAgdGhpcy5lcnJvckNicy5wdXNoKGVycm9yQ2IpO1xufTtcblxuSGlzdG9yeS5wcm90b3R5cGUudHJhbnNpdGlvblRvID0gZnVuY3Rpb24gdHJhbnNpdGlvblRvIChsb2NhdGlvbiwgb25Db21wbGV0ZSwgb25BYm9ydCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIHZhciByb3V0ZSA9IHRoaXMucm91dGVyLm1hdGNoKGxvY2F0aW9uLCB0aGlzLmN1cnJlbnQpO1xuICB0aGlzLmNvbmZpcm1UcmFuc2l0aW9uKHJvdXRlLCBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcyQxLnVwZGF0ZVJvdXRlKHJvdXRlKTtcbiAgICBvbkNvbXBsZXRlICYmIG9uQ29tcGxldGUocm91dGUpO1xuICAgIHRoaXMkMS5lbnN1cmVVUkwoKTtcblxuICAgIC8vIGZpcmUgcmVhZHkgY2JzIG9uY2VcbiAgICBpZiAoIXRoaXMkMS5yZWFkeSkge1xuICAgICAgdGhpcyQxLnJlYWR5ID0gdHJ1ZTtcbiAgICAgIHRoaXMkMS5yZWFkeUNicy5mb3JFYWNoKGZ1bmN0aW9uIChjYikgeyBjYihyb3V0ZSk7IH0pO1xuICAgIH1cbiAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgIGlmIChvbkFib3J0KSB7XG4gICAgICBvbkFib3J0KGVycik7XG4gICAgfVxuICAgIGlmIChlcnIgJiYgIXRoaXMkMS5yZWFkeSkge1xuICAgICAgdGhpcyQxLnJlYWR5ID0gdHJ1ZTtcbiAgICAgIHRoaXMkMS5yZWFkeUVycm9yQ2JzLmZvckVhY2goZnVuY3Rpb24gKGNiKSB7IGNiKGVycik7IH0pO1xuICAgIH1cbiAgfSk7XG59O1xuXG5IaXN0b3J5LnByb3RvdHlwZS5jb25maXJtVHJhbnNpdGlvbiA9IGZ1bmN0aW9uIGNvbmZpcm1UcmFuc2l0aW9uIChyb3V0ZSwgb25Db21wbGV0ZSwgb25BYm9ydCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIHZhciBjdXJyZW50ID0gdGhpcy5jdXJyZW50O1xuICB2YXIgYWJvcnQgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgaWYgKGlzRXJyb3IoZXJyKSkge1xuICAgICAgaWYgKHRoaXMkMS5lcnJvckNicy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcyQxLmVycm9yQ2JzLmZvckVhY2goZnVuY3Rpb24gKGNiKSB7IGNiKGVycik7IH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2FybihmYWxzZSwgJ3VuY2F1Z2h0IGVycm9yIGR1cmluZyByb3V0ZSBuYXZpZ2F0aW9uOicpO1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9XG4gICAgfVxuICAgIG9uQWJvcnQgJiYgb25BYm9ydChlcnIpO1xuICB9O1xuICBpZiAoXG4gICAgaXNTYW1lUm91dGUocm91dGUsIGN1cnJlbnQpICYmXG4gICAgLy8gaW4gdGhlIGNhc2UgdGhlIHJvdXRlIG1hcCBoYXMgYmVlbiBkeW5hbWljYWxseSBhcHBlbmRlZCB0b1xuICAgIHJvdXRlLm1hdGNoZWQubGVuZ3RoID09PSBjdXJyZW50Lm1hdGNoZWQubGVuZ3RoXG4gICkge1xuICAgIHRoaXMuZW5zdXJlVVJMKCk7XG4gICAgcmV0dXJuIGFib3J0KClcbiAgfVxuXG4gIHZhciByZWYgPSByZXNvbHZlUXVldWUodGhpcy5jdXJyZW50Lm1hdGNoZWQsIHJvdXRlLm1hdGNoZWQpO1xuICAgIHZhciB1cGRhdGVkID0gcmVmLnVwZGF0ZWQ7XG4gICAgdmFyIGRlYWN0aXZhdGVkID0gcmVmLmRlYWN0aXZhdGVkO1xuICAgIHZhciBhY3RpdmF0ZWQgPSByZWYuYWN0aXZhdGVkO1xuXG4gIHZhciBxdWV1ZSA9IFtdLmNvbmNhdChcbiAgICAvLyBpbi1jb21wb25lbnQgbGVhdmUgZ3VhcmRzXG4gICAgZXh0cmFjdExlYXZlR3VhcmRzKGRlYWN0aXZhdGVkKSxcbiAgICAvLyBnbG9iYWwgYmVmb3JlIGhvb2tzXG4gICAgdGhpcy5yb3V0ZXIuYmVmb3JlSG9va3MsXG4gICAgLy8gaW4tY29tcG9uZW50IHVwZGF0ZSBob29rc1xuICAgIGV4dHJhY3RVcGRhdGVIb29rcyh1cGRhdGVkKSxcbiAgICAvLyBpbi1jb25maWcgZW50ZXIgZ3VhcmRzXG4gICAgYWN0aXZhdGVkLm1hcChmdW5jdGlvbiAobSkgeyByZXR1cm4gbS5iZWZvcmVFbnRlcjsgfSksXG4gICAgLy8gYXN5bmMgY29tcG9uZW50c1xuICAgIHJlc29sdmVBc3luY0NvbXBvbmVudHMoYWN0aXZhdGVkKVxuICApO1xuXG4gIHRoaXMucGVuZGluZyA9IHJvdXRlO1xuICB2YXIgaXRlcmF0b3IgPSBmdW5jdGlvbiAoaG9vaywgbmV4dCkge1xuICAgIGlmICh0aGlzJDEucGVuZGluZyAhPT0gcm91dGUpIHtcbiAgICAgIHJldHVybiBhYm9ydCgpXG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBob29rKHJvdXRlLCBjdXJyZW50LCBmdW5jdGlvbiAodG8pIHtcbiAgICAgICAgaWYgKHRvID09PSBmYWxzZSB8fCBpc0Vycm9yKHRvKSkge1xuICAgICAgICAgIC8vIG5leHQoZmFsc2UpIC0+IGFib3J0IG5hdmlnYXRpb24sIGVuc3VyZSBjdXJyZW50IFVSTFxuICAgICAgICAgIHRoaXMkMS5lbnN1cmVVUkwodHJ1ZSk7XG4gICAgICAgICAgYWJvcnQodG8pO1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIHR5cGVvZiB0byA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgICAodHlwZW9mIHRvID09PSAnb2JqZWN0JyAmJiAoXG4gICAgICAgICAgICB0eXBlb2YgdG8ucGF0aCA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgICAgIHR5cGVvZiB0by5uYW1lID09PSAnc3RyaW5nJ1xuICAgICAgICAgICkpXG4gICAgICAgICkge1xuICAgICAgICAgIC8vIG5leHQoJy8nKSBvciBuZXh0KHsgcGF0aDogJy8nIH0pIC0+IHJlZGlyZWN0XG4gICAgICAgICAgYWJvcnQoKTtcbiAgICAgICAgICBpZiAodHlwZW9mIHRvID09PSAnb2JqZWN0JyAmJiB0by5yZXBsYWNlKSB7XG4gICAgICAgICAgICB0aGlzJDEucmVwbGFjZSh0byk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMkMS5wdXNoKHRvKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gY29uZmlybSB0cmFuc2l0aW9uIGFuZCBwYXNzIG9uIHRoZSB2YWx1ZVxuICAgICAgICAgIG5leHQodG8pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBhYm9ydChlKTtcbiAgICB9XG4gIH07XG5cbiAgcnVuUXVldWUocXVldWUsIGl0ZXJhdG9yLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBvc3RFbnRlckNicyA9IFtdO1xuICAgIHZhciBpc1ZhbGlkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcyQxLmN1cnJlbnQgPT09IHJvdXRlOyB9O1xuICAgIC8vIHdhaXQgdW50aWwgYXN5bmMgY29tcG9uZW50cyBhcmUgcmVzb2x2ZWQgYmVmb3JlXG4gICAgLy8gZXh0cmFjdGluZyBpbi1jb21wb25lbnQgZW50ZXIgZ3VhcmRzXG4gICAgdmFyIGVudGVyR3VhcmRzID0gZXh0cmFjdEVudGVyR3VhcmRzKGFjdGl2YXRlZCwgcG9zdEVudGVyQ2JzLCBpc1ZhbGlkKTtcbiAgICB2YXIgcXVldWUgPSBlbnRlckd1YXJkcy5jb25jYXQodGhpcyQxLnJvdXRlci5yZXNvbHZlSG9va3MpO1xuICAgIHJ1blF1ZXVlKHF1ZXVlLCBpdGVyYXRvciwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXMkMS5wZW5kaW5nICE9PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gYWJvcnQoKVxuICAgICAgfVxuICAgICAgdGhpcyQxLnBlbmRpbmcgPSBudWxsO1xuICAgICAgb25Db21wbGV0ZShyb3V0ZSk7XG4gICAgICBpZiAodGhpcyQxLnJvdXRlci5hcHApIHtcbiAgICAgICAgdGhpcyQxLnJvdXRlci5hcHAuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBwb3N0RW50ZXJDYnMuZm9yRWFjaChmdW5jdGlvbiAoY2IpIHsgY2IoKTsgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbkhpc3RvcnkucHJvdG90eXBlLnVwZGF0ZVJvdXRlID0gZnVuY3Rpb24gdXBkYXRlUm91dGUgKHJvdXRlKSB7XG4gIHZhciBwcmV2ID0gdGhpcy5jdXJyZW50O1xuICB0aGlzLmN1cnJlbnQgPSByb3V0ZTtcbiAgdGhpcy5jYiAmJiB0aGlzLmNiKHJvdXRlKTtcbiAgdGhpcy5yb3V0ZXIuYWZ0ZXJIb29rcy5mb3JFYWNoKGZ1bmN0aW9uIChob29rKSB7XG4gICAgaG9vayAmJiBob29rKHJvdXRlLCBwcmV2KTtcbiAgfSk7XG59O1xuXG5mdW5jdGlvbiBub3JtYWxpemVCYXNlIChiYXNlKSB7XG4gIGlmICghYmFzZSkge1xuICAgIGlmIChpbkJyb3dzZXIpIHtcbiAgICAgIC8vIHJlc3BlY3QgPGJhc2U+IHRhZ1xuICAgICAgdmFyIGJhc2VFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Jhc2UnKTtcbiAgICAgIGJhc2UgPSAoYmFzZUVsICYmIGJhc2VFbC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSkgfHwgJy8nO1xuICAgIH0gZWxzZSB7XG4gICAgICBiYXNlID0gJy8nO1xuICAgIH1cbiAgfVxuICAvLyBtYWtlIHN1cmUgdGhlcmUncyB0aGUgc3RhcnRpbmcgc2xhc2hcbiAgaWYgKGJhc2UuY2hhckF0KDApICE9PSAnLycpIHtcbiAgICBiYXNlID0gJy8nICsgYmFzZTtcbiAgfVxuICAvLyByZW1vdmUgdHJhaWxpbmcgc2xhc2hcbiAgcmV0dXJuIGJhc2UucmVwbGFjZSgvXFwvJC8sICcnKVxufVxuXG5mdW5jdGlvbiByZXNvbHZlUXVldWUgKFxuICBjdXJyZW50LFxuICBuZXh0XG4pIHtcbiAgdmFyIGk7XG4gIHZhciBtYXggPSBNYXRoLm1heChjdXJyZW50Lmxlbmd0aCwgbmV4dC5sZW5ndGgpO1xuICBmb3IgKGkgPSAwOyBpIDwgbWF4OyBpKyspIHtcbiAgICBpZiAoY3VycmVudFtpXSAhPT0gbmV4dFtpXSkge1xuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB1cGRhdGVkOiBuZXh0LnNsaWNlKDAsIGkpLFxuICAgIGFjdGl2YXRlZDogbmV4dC5zbGljZShpKSxcbiAgICBkZWFjdGl2YXRlZDogY3VycmVudC5zbGljZShpKVxuICB9XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RHdWFyZHMgKFxuICByZWNvcmRzLFxuICBuYW1lLFxuICBiaW5kLFxuICByZXZlcnNlXG4pIHtcbiAgdmFyIGd1YXJkcyA9IGZsYXRNYXBDb21wb25lbnRzKHJlY29yZHMsIGZ1bmN0aW9uIChkZWYsIGluc3RhbmNlLCBtYXRjaCwga2V5KSB7XG4gICAgdmFyIGd1YXJkID0gZXh0cmFjdEd1YXJkKGRlZiwgbmFtZSk7XG4gICAgaWYgKGd1YXJkKSB7XG4gICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShndWFyZClcbiAgICAgICAgPyBndWFyZC5tYXAoZnVuY3Rpb24gKGd1YXJkKSB7IHJldHVybiBiaW5kKGd1YXJkLCBpbnN0YW5jZSwgbWF0Y2gsIGtleSk7IH0pXG4gICAgICAgIDogYmluZChndWFyZCwgaW5zdGFuY2UsIG1hdGNoLCBrZXkpXG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGZsYXR0ZW4ocmV2ZXJzZSA/IGd1YXJkcy5yZXZlcnNlKCkgOiBndWFyZHMpXG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RHdWFyZCAoXG4gIGRlZixcbiAga2V5XG4pIHtcbiAgaWYgKHR5cGVvZiBkZWYgIT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBleHRlbmQgbm93IHNvIHRoYXQgZ2xvYmFsIG1peGlucyBhcmUgYXBwbGllZC5cbiAgICBkZWYgPSBfVnVlLmV4dGVuZChkZWYpO1xuICB9XG4gIHJldHVybiBkZWYub3B0aW9uc1trZXldXG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RMZWF2ZUd1YXJkcyAoZGVhY3RpdmF0ZWQpIHtcbiAgcmV0dXJuIGV4dHJhY3RHdWFyZHMoZGVhY3RpdmF0ZWQsICdiZWZvcmVSb3V0ZUxlYXZlJywgYmluZEd1YXJkLCB0cnVlKVxufVxuXG5mdW5jdGlvbiBleHRyYWN0VXBkYXRlSG9va3MgKHVwZGF0ZWQpIHtcbiAgcmV0dXJuIGV4dHJhY3RHdWFyZHModXBkYXRlZCwgJ2JlZm9yZVJvdXRlVXBkYXRlJywgYmluZEd1YXJkKVxufVxuXG5mdW5jdGlvbiBiaW5kR3VhcmQgKGd1YXJkLCBpbnN0YW5jZSkge1xuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gYm91bmRSb3V0ZUd1YXJkICgpIHtcbiAgICAgIHJldHVybiBndWFyZC5hcHBseShpbnN0YW5jZSwgYXJndW1lbnRzKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBleHRyYWN0RW50ZXJHdWFyZHMgKFxuICBhY3RpdmF0ZWQsXG4gIGNicyxcbiAgaXNWYWxpZFxuKSB7XG4gIHJldHVybiBleHRyYWN0R3VhcmRzKGFjdGl2YXRlZCwgJ2JlZm9yZVJvdXRlRW50ZXInLCBmdW5jdGlvbiAoZ3VhcmQsIF8sIG1hdGNoLCBrZXkpIHtcbiAgICByZXR1cm4gYmluZEVudGVyR3VhcmQoZ3VhcmQsIG1hdGNoLCBrZXksIGNicywgaXNWYWxpZClcbiAgfSlcbn1cblxuZnVuY3Rpb24gYmluZEVudGVyR3VhcmQgKFxuICBndWFyZCxcbiAgbWF0Y2gsXG4gIGtleSxcbiAgY2JzLFxuICBpc1ZhbGlkXG4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJvdXRlRW50ZXJHdWFyZCAodG8sIGZyb20sIG5leHQpIHtcbiAgICByZXR1cm4gZ3VhcmQodG8sIGZyb20sIGZ1bmN0aW9uIChjYikge1xuICAgICAgbmV4dChjYik7XG4gICAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNicy5wdXNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyAjNzUwXG4gICAgICAgICAgLy8gaWYgYSByb3V0ZXItdmlldyBpcyB3cmFwcGVkIHdpdGggYW4gb3V0LWluIHRyYW5zaXRpb24sXG4gICAgICAgICAgLy8gdGhlIGluc3RhbmNlIG1heSBub3QgaGF2ZSBiZWVuIHJlZ2lzdGVyZWQgYXQgdGhpcyB0aW1lLlxuICAgICAgICAgIC8vIHdlIHdpbGwgbmVlZCB0byBwb2xsIGZvciByZWdpc3RyYXRpb24gdW50aWwgY3VycmVudCByb3V0ZVxuICAgICAgICAgIC8vIGlzIG5vIGxvbmdlciB2YWxpZC5cbiAgICAgICAgICBwb2xsKGNiLCBtYXRjaC5pbnN0YW5jZXMsIGtleSwgaXNWYWxpZCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZnVuY3Rpb24gcG9sbCAoXG4gIGNiLCAvLyBzb21laG93IGZsb3cgY2Fubm90IGluZmVyIHRoaXMgaXMgYSBmdW5jdGlvblxuICBpbnN0YW5jZXMsXG4gIGtleSxcbiAgaXNWYWxpZFxuKSB7XG4gIGlmIChpbnN0YW5jZXNba2V5XSkge1xuICAgIGNiKGluc3RhbmNlc1trZXldKTtcbiAgfSBlbHNlIGlmIChpc1ZhbGlkKCkpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHBvbGwoY2IsIGluc3RhbmNlcywga2V5LCBpc1ZhbGlkKTtcbiAgICB9LCAxNik7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUFzeW5jQ29tcG9uZW50cyAobWF0Y2hlZCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHRvLCBmcm9tLCBuZXh0KSB7XG4gICAgdmFyIGhhc0FzeW5jID0gZmFsc2U7XG4gICAgdmFyIHBlbmRpbmcgPSAwO1xuICAgIHZhciBlcnJvciA9IG51bGw7XG5cbiAgICBmbGF0TWFwQ29tcG9uZW50cyhtYXRjaGVkLCBmdW5jdGlvbiAoZGVmLCBfLCBtYXRjaCwga2V5KSB7XG4gICAgICAvLyBpZiBpdCdzIGEgZnVuY3Rpb24gYW5kIGRvZXNuJ3QgaGF2ZSBjaWQgYXR0YWNoZWQsXG4gICAgICAvLyBhc3N1bWUgaXQncyBhbiBhc3luYyBjb21wb25lbnQgcmVzb2x2ZSBmdW5jdGlvbi5cbiAgICAgIC8vIHdlIGFyZSBub3QgdXNpbmcgVnVlJ3MgZGVmYXVsdCBhc3luYyByZXNvbHZpbmcgbWVjaGFuaXNtIGJlY2F1c2VcbiAgICAgIC8vIHdlIHdhbnQgdG8gaGFsdCB0aGUgbmF2aWdhdGlvbiB1bnRpbCB0aGUgaW5jb21pbmcgY29tcG9uZW50IGhhcyBiZWVuXG4gICAgICAvLyByZXNvbHZlZC5cbiAgICAgIGlmICh0eXBlb2YgZGVmID09PSAnZnVuY3Rpb24nICYmIGRlZi5jaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBoYXNBc3luYyA9IHRydWU7XG4gICAgICAgIHBlbmRpbmcrKztcblxuICAgICAgICB2YXIgcmVzb2x2ZSA9IG9uY2UoZnVuY3Rpb24gKHJlc29sdmVkRGVmKSB7XG4gICAgICAgICAgLy8gc2F2ZSByZXNvbHZlZCBvbiBhc3luYyBmYWN0b3J5IGluIGNhc2UgaXQncyB1c2VkIGVsc2V3aGVyZVxuICAgICAgICAgIGRlZi5yZXNvbHZlZCA9IHR5cGVvZiByZXNvbHZlZERlZiA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgPyByZXNvbHZlZERlZlxuICAgICAgICAgICAgOiBfVnVlLmV4dGVuZChyZXNvbHZlZERlZik7XG4gICAgICAgICAgbWF0Y2guY29tcG9uZW50c1trZXldID0gcmVzb2x2ZWREZWY7XG4gICAgICAgICAgcGVuZGluZy0tO1xuICAgICAgICAgIGlmIChwZW5kaW5nIDw9IDApIHtcbiAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciByZWplY3QgPSBvbmNlKGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgICB2YXIgbXNnID0gXCJGYWlsZWQgdG8gcmVzb2x2ZSBhc3luYyBjb21wb25lbnQgXCIgKyBrZXkgKyBcIjogXCIgKyByZWFzb247XG4gICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKGZhbHNlLCBtc2cpO1xuICAgICAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgICAgIGVycm9yID0gaXNFcnJvcihyZWFzb24pXG4gICAgICAgICAgICAgID8gcmVhc29uXG4gICAgICAgICAgICAgIDogbmV3IEVycm9yKG1zZyk7XG4gICAgICAgICAgICBuZXh0KGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciByZXM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzID0gZGVmKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgIGlmICh0eXBlb2YgcmVzLnRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJlcy50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG5ldyBzeW50YXggaW4gVnVlIDIuM1xuICAgICAgICAgICAgdmFyIGNvbXAgPSByZXMuY29tcG9uZW50O1xuICAgICAgICAgICAgaWYgKGNvbXAgJiYgdHlwZW9mIGNvbXAudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICBjb21wLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghaGFzQXN5bmMpIHsgbmV4dCgpOyB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZmxhdE1hcENvbXBvbmVudHMgKFxuICBtYXRjaGVkLFxuICBmblxuKSB7XG4gIHJldHVybiBmbGF0dGVuKG1hdGNoZWQubWFwKGZ1bmN0aW9uIChtKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG0uY29tcG9uZW50cykubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGZuKFxuICAgICAgbS5jb21wb25lbnRzW2tleV0sXG4gICAgICBtLmluc3RhbmNlc1trZXldLFxuICAgICAgbSwga2V5XG4gICAgKTsgfSlcbiAgfSkpXG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW4gKGFycikge1xuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgYXJyKVxufVxuXG4vLyBpbiBXZWJwYWNrIDIsIHJlcXVpcmUuZW5zdXJlIG5vdyBhbHNvIHJldHVybnMgYSBQcm9taXNlXG4vLyBzbyB0aGUgcmVzb2x2ZS9yZWplY3QgZnVuY3Rpb25zIG1heSBnZXQgY2FsbGVkIGFuIGV4dHJhIHRpbWVcbi8vIGlmIHRoZSB1c2VyIHVzZXMgYW4gYXJyb3cgZnVuY3Rpb24gc2hvcnRoYW5kIHRoYXQgaGFwcGVucyB0b1xuLy8gcmV0dXJuIHRoYXQgUHJvbWlzZS5cbmZ1bmN0aW9uIG9uY2UgKGZuKSB7XG4gIHZhciBjYWxsZWQgPSBmYWxzZTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoY2FsbGVkKSB7IHJldHVybiB9XG4gICAgY2FsbGVkID0gdHJ1ZTtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICB9XG59XG5cbmZ1bmN0aW9uIGlzRXJyb3IgKGVycikge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGVycikuaW5kZXhPZignRXJyb3InKSA+IC0xXG59XG5cbi8qICAqL1xuXG5cbnZhciBIVE1MNUhpc3RvcnkgPSAoZnVuY3Rpb24gKEhpc3RvcnkkJDEpIHtcbiAgZnVuY3Rpb24gSFRNTDVIaXN0b3J5IChyb3V0ZXIsIGJhc2UpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIEhpc3RvcnkkJDEuY2FsbCh0aGlzLCByb3V0ZXIsIGJhc2UpO1xuXG4gICAgdmFyIGV4cGVjdFNjcm9sbCA9IHJvdXRlci5vcHRpb25zLnNjcm9sbEJlaGF2aW9yO1xuXG4gICAgaWYgKGV4cGVjdFNjcm9sbCkge1xuICAgICAgc2V0dXBTY3JvbGwoKTtcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgdGhpcyQxLnRyYW5zaXRpb25UbyhnZXRMb2NhdGlvbih0aGlzJDEuYmFzZSksIGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgICAgICBpZiAoZXhwZWN0U2Nyb2xsKSB7XG4gICAgICAgICAgaGFuZGxlU2Nyb2xsKHJvdXRlciwgcm91dGUsIHRoaXMkMS5jdXJyZW50LCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAoIEhpc3RvcnkkJDEgKSBIVE1MNUhpc3RvcnkuX19wcm90b19fID0gSGlzdG9yeSQkMTtcbiAgSFRNTDVIaXN0b3J5LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEhpc3RvcnkkJDEgJiYgSGlzdG9yeSQkMS5wcm90b3R5cGUgKTtcbiAgSFRNTDVIaXN0b3J5LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEhUTUw1SGlzdG9yeTtcblxuICBIVE1MNUhpc3RvcnkucHJvdG90eXBlLmdvID0gZnVuY3Rpb24gZ28gKG4pIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5nbyhuKTtcbiAgfTtcblxuICBIVE1MNUhpc3RvcnkucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiBwdXNoIChsb2NhdGlvbiwgb25Db21wbGV0ZSwgb25BYm9ydCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdmFyIHJlZiA9IHRoaXM7XG4gICAgdmFyIGZyb21Sb3V0ZSA9IHJlZi5jdXJyZW50O1xuICAgIHRoaXMudHJhbnNpdGlvblRvKGxvY2F0aW9uLCBmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgIHB1c2hTdGF0ZShjbGVhblBhdGgodGhpcyQxLmJhc2UgKyByb3V0ZS5mdWxsUGF0aCkpO1xuICAgICAgaGFuZGxlU2Nyb2xsKHRoaXMkMS5yb3V0ZXIsIHJvdXRlLCBmcm9tUm91dGUsIGZhbHNlKTtcbiAgICAgIG9uQ29tcGxldGUgJiYgb25Db21wbGV0ZShyb3V0ZSk7XG4gICAgfSwgb25BYm9ydCk7XG4gIH07XG5cbiAgSFRNTDVIaXN0b3J5LnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24gcmVwbGFjZSAobG9jYXRpb24sIG9uQ29tcGxldGUsIG9uQWJvcnQpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIHZhciByZWYgPSB0aGlzO1xuICAgIHZhciBmcm9tUm91dGUgPSByZWYuY3VycmVudDtcbiAgICB0aGlzLnRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICByZXBsYWNlU3RhdGUoY2xlYW5QYXRoKHRoaXMkMS5iYXNlICsgcm91dGUuZnVsbFBhdGgpKTtcbiAgICAgIGhhbmRsZVNjcm9sbCh0aGlzJDEucm91dGVyLCByb3V0ZSwgZnJvbVJvdXRlLCBmYWxzZSk7XG4gICAgICBvbkNvbXBsZXRlICYmIG9uQ29tcGxldGUocm91dGUpO1xuICAgIH0sIG9uQWJvcnQpO1xuICB9O1xuXG4gIEhUTUw1SGlzdG9yeS5wcm90b3R5cGUuZW5zdXJlVVJMID0gZnVuY3Rpb24gZW5zdXJlVVJMIChwdXNoKSB7XG4gICAgaWYgKGdldExvY2F0aW9uKHRoaXMuYmFzZSkgIT09IHRoaXMuY3VycmVudC5mdWxsUGF0aCkge1xuICAgICAgdmFyIGN1cnJlbnQgPSBjbGVhblBhdGgodGhpcy5iYXNlICsgdGhpcy5jdXJyZW50LmZ1bGxQYXRoKTtcbiAgICAgIHB1c2ggPyBwdXNoU3RhdGUoY3VycmVudCkgOiByZXBsYWNlU3RhdGUoY3VycmVudCk7XG4gICAgfVxuICB9O1xuXG4gIEhUTUw1SGlzdG9yeS5wcm90b3R5cGUuZ2V0Q3VycmVudExvY2F0aW9uID0gZnVuY3Rpb24gZ2V0Q3VycmVudExvY2F0aW9uICgpIHtcbiAgICByZXR1cm4gZ2V0TG9jYXRpb24odGhpcy5iYXNlKVxuICB9O1xuXG4gIHJldHVybiBIVE1MNUhpc3Rvcnk7XG59KEhpc3RvcnkpKTtcblxuZnVuY3Rpb24gZ2V0TG9jYXRpb24gKGJhc2UpIHtcbiAgdmFyIHBhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gIGlmIChiYXNlICYmIHBhdGguaW5kZXhPZihiYXNlKSA9PT0gMCkge1xuICAgIHBhdGggPSBwYXRoLnNsaWNlKGJhc2UubGVuZ3RoKTtcbiAgfVxuICByZXR1cm4gKHBhdGggfHwgJy8nKSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggKyB3aW5kb3cubG9jYXRpb24uaGFzaFxufVxuXG4vKiAgKi9cblxuXG52YXIgSGFzaEhpc3RvcnkgPSAoZnVuY3Rpb24gKEhpc3RvcnkkJDEpIHtcbiAgZnVuY3Rpb24gSGFzaEhpc3RvcnkgKHJvdXRlciwgYmFzZSwgZmFsbGJhY2spIHtcbiAgICBIaXN0b3J5JCQxLmNhbGwodGhpcywgcm91dGVyLCBiYXNlKTtcbiAgICAvLyBjaGVjayBoaXN0b3J5IGZhbGxiYWNrIGRlZXBsaW5raW5nXG4gICAgaWYgKGZhbGxiYWNrICYmIGNoZWNrRmFsbGJhY2sodGhpcy5iYXNlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGVuc3VyZVNsYXNoKCk7XG4gIH1cblxuICBpZiAoIEhpc3RvcnkkJDEgKSBIYXNoSGlzdG9yeS5fX3Byb3RvX18gPSBIaXN0b3J5JCQxO1xuICBIYXNoSGlzdG9yeS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBIaXN0b3J5JCQxICYmIEhpc3RvcnkkJDEucHJvdG90eXBlICk7XG4gIEhhc2hIaXN0b3J5LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEhhc2hIaXN0b3J5O1xuXG4gIC8vIHRoaXMgaXMgZGVsYXllZCB1bnRpbCB0aGUgYXBwIG1vdW50c1xuICAvLyB0byBhdm9pZCB0aGUgaGFzaGNoYW5nZSBsaXN0ZW5lciBiZWluZyBmaXJlZCB0b28gZWFybHlcbiAgSGFzaEhpc3RvcnkucHJvdG90eXBlLnNldHVwTGlzdGVuZXJzID0gZnVuY3Rpb24gc2V0dXBMaXN0ZW5lcnMgKCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIWVuc3VyZVNsYXNoKCkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB0aGlzJDEudHJhbnNpdGlvblRvKGdldEhhc2goKSwgZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICAgIHJlcGxhY2VIYXNoKHJvdXRlLmZ1bGxQYXRoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIEhhc2hIaXN0b3J5LnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gcHVzaCAobG9jYXRpb24sIG9uQ29tcGxldGUsIG9uQWJvcnQpIHtcbiAgICB0aGlzLnRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICBwdXNoSGFzaChyb3V0ZS5mdWxsUGF0aCk7XG4gICAgICBvbkNvbXBsZXRlICYmIG9uQ29tcGxldGUocm91dGUpO1xuICAgIH0sIG9uQWJvcnQpO1xuICB9O1xuXG4gIEhhc2hIaXN0b3J5LnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24gcmVwbGFjZSAobG9jYXRpb24sIG9uQ29tcGxldGUsIG9uQWJvcnQpIHtcbiAgICB0aGlzLnRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICByZXBsYWNlSGFzaChyb3V0ZS5mdWxsUGF0aCk7XG4gICAgICBvbkNvbXBsZXRlICYmIG9uQ29tcGxldGUocm91dGUpO1xuICAgIH0sIG9uQWJvcnQpO1xuICB9O1xuXG4gIEhhc2hIaXN0b3J5LnByb3RvdHlwZS5nbyA9IGZ1bmN0aW9uIGdvIChuKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuZ28obik7XG4gIH07XG5cbiAgSGFzaEhpc3RvcnkucHJvdG90eXBlLmVuc3VyZVVSTCA9IGZ1bmN0aW9uIGVuc3VyZVVSTCAocHVzaCkge1xuICAgIHZhciBjdXJyZW50ID0gdGhpcy5jdXJyZW50LmZ1bGxQYXRoO1xuICAgIGlmIChnZXRIYXNoKCkgIT09IGN1cnJlbnQpIHtcbiAgICAgIHB1c2ggPyBwdXNoSGFzaChjdXJyZW50KSA6IHJlcGxhY2VIYXNoKGN1cnJlbnQpO1xuICAgIH1cbiAgfTtcblxuICBIYXNoSGlzdG9yeS5wcm90b3R5cGUuZ2V0Q3VycmVudExvY2F0aW9uID0gZnVuY3Rpb24gZ2V0Q3VycmVudExvY2F0aW9uICgpIHtcbiAgICByZXR1cm4gZ2V0SGFzaCgpXG4gIH07XG5cbiAgcmV0dXJuIEhhc2hIaXN0b3J5O1xufShIaXN0b3J5KSk7XG5cbmZ1bmN0aW9uIGNoZWNrRmFsbGJhY2sgKGJhc2UpIHtcbiAgdmFyIGxvY2F0aW9uID0gZ2V0TG9jYXRpb24oYmFzZSk7XG4gIGlmICghL15cXC8jLy50ZXN0KGxvY2F0aW9uKSkge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFxuICAgICAgY2xlYW5QYXRoKGJhc2UgKyAnLyMnICsgbG9jYXRpb24pXG4gICAgKTtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG59XG5cbmZ1bmN0aW9uIGVuc3VyZVNsYXNoICgpIHtcbiAgdmFyIHBhdGggPSBnZXRIYXNoKCk7XG4gIGlmIChwYXRoLmNoYXJBdCgwKSA9PT0gJy8nKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICByZXBsYWNlSGFzaCgnLycgKyBwYXRoKTtcbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIGdldEhhc2ggKCkge1xuICAvLyBXZSBjYW4ndCB1c2Ugd2luZG93LmxvY2F0aW9uLmhhc2ggaGVyZSBiZWNhdXNlIGl0J3Mgbm90XG4gIC8vIGNvbnNpc3RlbnQgYWNyb3NzIGJyb3dzZXJzIC0gRmlyZWZveCB3aWxsIHByZS1kZWNvZGUgaXQhXG4gIHZhciBocmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gIHZhciBpbmRleCA9IGhyZWYuaW5kZXhPZignIycpO1xuICByZXR1cm4gaW5kZXggPT09IC0xID8gJycgOiBocmVmLnNsaWNlKGluZGV4ICsgMSlcbn1cblxuZnVuY3Rpb24gcHVzaEhhc2ggKHBhdGgpIHtcbiAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBwYXRoO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlSGFzaCAocGF0aCkge1xuICB2YXIgaSA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJyMnKTtcbiAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYuc2xpY2UoMCwgaSA+PSAwID8gaSA6IDApICsgJyMnICsgcGF0aFxuICApO1xufVxuXG4vKiAgKi9cblxuXG52YXIgQWJzdHJhY3RIaXN0b3J5ID0gKGZ1bmN0aW9uIChIaXN0b3J5JCQxKSB7XG4gIGZ1bmN0aW9uIEFic3RyYWN0SGlzdG9yeSAocm91dGVyLCBiYXNlKSB7XG4gICAgSGlzdG9yeSQkMS5jYWxsKHRoaXMsIHJvdXRlciwgYmFzZSk7XG4gICAgdGhpcy5zdGFjayA9IFtdO1xuICAgIHRoaXMuaW5kZXggPSAtMTtcbiAgfVxuXG4gIGlmICggSGlzdG9yeSQkMSApIEFic3RyYWN0SGlzdG9yeS5fX3Byb3RvX18gPSBIaXN0b3J5JCQxO1xuICBBYnN0cmFjdEhpc3RvcnkucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggSGlzdG9yeSQkMSAmJiBIaXN0b3J5JCQxLnByb3RvdHlwZSApO1xuICBBYnN0cmFjdEhpc3RvcnkucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQWJzdHJhY3RIaXN0b3J5O1xuXG4gIEFic3RyYWN0SGlzdG9yeS5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIHB1c2ggKGxvY2F0aW9uLCBvbkNvbXBsZXRlLCBvbkFib3J0KSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB0aGlzLnRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICB0aGlzJDEuc3RhY2sgPSB0aGlzJDEuc3RhY2suc2xpY2UoMCwgdGhpcyQxLmluZGV4ICsgMSkuY29uY2F0KHJvdXRlKTtcbiAgICAgIHRoaXMkMS5pbmRleCsrO1xuICAgICAgb25Db21wbGV0ZSAmJiBvbkNvbXBsZXRlKHJvdXRlKTtcbiAgICB9LCBvbkFib3J0KTtcbiAgfTtcblxuICBBYnN0cmFjdEhpc3RvcnkucHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbiByZXBsYWNlIChsb2NhdGlvbiwgb25Db21wbGV0ZSwgb25BYm9ydCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdGhpcy50cmFuc2l0aW9uVG8obG9jYXRpb24sIGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgICAgdGhpcyQxLnN0YWNrID0gdGhpcyQxLnN0YWNrLnNsaWNlKDAsIHRoaXMkMS5pbmRleCkuY29uY2F0KHJvdXRlKTtcbiAgICAgIG9uQ29tcGxldGUgJiYgb25Db21wbGV0ZShyb3V0ZSk7XG4gICAgfSwgb25BYm9ydCk7XG4gIH07XG5cbiAgQWJzdHJhY3RIaXN0b3J5LnByb3RvdHlwZS5nbyA9IGZ1bmN0aW9uIGdvIChuKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB2YXIgdGFyZ2V0SW5kZXggPSB0aGlzLmluZGV4ICsgbjtcbiAgICBpZiAodGFyZ2V0SW5kZXggPCAwIHx8IHRhcmdldEluZGV4ID49IHRoaXMuc3RhY2subGVuZ3RoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdmFyIHJvdXRlID0gdGhpcy5zdGFja1t0YXJnZXRJbmRleF07XG4gICAgdGhpcy5jb25maXJtVHJhbnNpdGlvbihyb3V0ZSwgZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcyQxLmluZGV4ID0gdGFyZ2V0SW5kZXg7XG4gICAgICB0aGlzJDEudXBkYXRlUm91dGUocm91dGUpO1xuICAgIH0pO1xuICB9O1xuXG4gIEFic3RyYWN0SGlzdG9yeS5wcm90b3R5cGUuZ2V0Q3VycmVudExvY2F0aW9uID0gZnVuY3Rpb24gZ2V0Q3VycmVudExvY2F0aW9uICgpIHtcbiAgICB2YXIgY3VycmVudCA9IHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXTtcbiAgICByZXR1cm4gY3VycmVudCA/IGN1cnJlbnQuZnVsbFBhdGggOiAnLydcbiAgfTtcblxuICBBYnN0cmFjdEhpc3RvcnkucHJvdG90eXBlLmVuc3VyZVVSTCA9IGZ1bmN0aW9uIGVuc3VyZVVSTCAoKSB7XG4gICAgLy8gbm9vcFxuICB9O1xuXG4gIHJldHVybiBBYnN0cmFjdEhpc3Rvcnk7XG59KEhpc3RvcnkpKTtcblxuLyogICovXG5cbnZhciBWdWVSb3V0ZXIgPSBmdW5jdGlvbiBWdWVSb3V0ZXIgKG9wdGlvbnMpIHtcbiAgaWYgKCBvcHRpb25zID09PSB2b2lkIDAgKSBvcHRpb25zID0ge307XG5cbiAgdGhpcy5hcHAgPSBudWxsO1xuICB0aGlzLmFwcHMgPSBbXTtcbiAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgdGhpcy5iZWZvcmVIb29rcyA9IFtdO1xuICB0aGlzLnJlc29sdmVIb29rcyA9IFtdO1xuICB0aGlzLmFmdGVySG9va3MgPSBbXTtcbiAgdGhpcy5tYXRjaGVyID0gY3JlYXRlTWF0Y2hlcihvcHRpb25zLnJvdXRlcyB8fCBbXSwgdGhpcyk7XG5cbiAgdmFyIG1vZGUgPSBvcHRpb25zLm1vZGUgfHwgJ2hhc2gnO1xuICB0aGlzLmZhbGxiYWNrID0gbW9kZSA9PT0gJ2hpc3RvcnknICYmICFzdXBwb3J0c1B1c2hTdGF0ZTtcbiAgaWYgKHRoaXMuZmFsbGJhY2spIHtcbiAgICBtb2RlID0gJ2hhc2gnO1xuICB9XG4gIGlmICghaW5Ccm93c2VyKSB7XG4gICAgbW9kZSA9ICdhYnN0cmFjdCc7XG4gIH1cbiAgdGhpcy5tb2RlID0gbW9kZTtcblxuICBzd2l0Y2ggKG1vZGUpIHtcbiAgICBjYXNlICdoaXN0b3J5JzpcbiAgICAgIHRoaXMuaGlzdG9yeSA9IG5ldyBIVE1MNUhpc3RvcnkodGhpcywgb3B0aW9ucy5iYXNlKTtcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnaGFzaCc6XG4gICAgICB0aGlzLmhpc3RvcnkgPSBuZXcgSGFzaEhpc3RvcnkodGhpcywgb3B0aW9ucy5iYXNlLCB0aGlzLmZhbGxiYWNrKTtcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYWJzdHJhY3QnOlxuICAgICAgdGhpcy5oaXN0b3J5ID0gbmV3IEFic3RyYWN0SGlzdG9yeSh0aGlzLCBvcHRpb25zLmJhc2UpO1xuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgYXNzZXJ0KGZhbHNlLCAoXCJpbnZhbGlkIG1vZGU6IFwiICsgbW9kZSkpO1xuICAgICAgfVxuICB9XG59O1xuXG52YXIgcHJvdG90eXBlQWNjZXNzb3JzID0geyBjdXJyZW50Um91dGU6IHt9IH07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUubWF0Y2ggPSBmdW5jdGlvbiBtYXRjaCAoXG4gIHJhdyxcbiAgY3VycmVudCxcbiAgcmVkaXJlY3RlZEZyb21cbikge1xuICByZXR1cm4gdGhpcy5tYXRjaGVyLm1hdGNoKHJhdywgY3VycmVudCwgcmVkaXJlY3RlZEZyb20pXG59O1xuXG5wcm90b3R5cGVBY2Nlc3NvcnMuY3VycmVudFJvdXRlLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuaGlzdG9yeSAmJiB0aGlzLmhpc3RvcnkuY3VycmVudFxufTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gaW5pdCAoYXBwIC8qIFZ1ZSBjb21wb25lbnQgaW5zdGFuY2UgKi8pIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGFzc2VydChcbiAgICBpbnN0YWxsLmluc3RhbGxlZCxcbiAgICBcIm5vdCBpbnN0YWxsZWQuIE1ha2Ugc3VyZSB0byBjYWxsIGBWdWUudXNlKFZ1ZVJvdXRlcilgIFwiICtcbiAgICBcImJlZm9yZSBjcmVhdGluZyByb290IGluc3RhbmNlLlwiXG4gICk7XG5cbiAgdGhpcy5hcHBzLnB1c2goYXBwKTtcblxuICAvLyBtYWluIGFwcCBhbHJlYWR5IGluaXRpYWxpemVkLlxuICBpZiAodGhpcy5hcHApIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHRoaXMuYXBwID0gYXBwO1xuXG4gIHZhciBoaXN0b3J5ID0gdGhpcy5oaXN0b3J5O1xuXG4gIGlmIChoaXN0b3J5IGluc3RhbmNlb2YgSFRNTDVIaXN0b3J5KSB7XG4gICAgaGlzdG9yeS50cmFuc2l0aW9uVG8oaGlzdG9yeS5nZXRDdXJyZW50TG9jYXRpb24oKSk7XG4gIH0gZWxzZSBpZiAoaGlzdG9yeSBpbnN0YW5jZW9mIEhhc2hIaXN0b3J5KSB7XG4gICAgdmFyIHNldHVwSGFzaExpc3RlbmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgaGlzdG9yeS5zZXR1cExpc3RlbmVycygpO1xuICAgIH07XG4gICAgaGlzdG9yeS50cmFuc2l0aW9uVG8oXG4gICAgICBoaXN0b3J5LmdldEN1cnJlbnRMb2NhdGlvbigpLFxuICAgICAgc2V0dXBIYXNoTGlzdGVuZXIsXG4gICAgICBzZXR1cEhhc2hMaXN0ZW5lclxuICAgICk7XG4gIH1cblxuICBoaXN0b3J5Lmxpc3RlbihmdW5jdGlvbiAocm91dGUpIHtcbiAgICB0aGlzJDEuYXBwcy5mb3JFYWNoKGZ1bmN0aW9uIChhcHApIHtcbiAgICAgIGFwcC5fcm91dGUgPSByb3V0ZTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLmJlZm9yZUVhY2ggPSBmdW5jdGlvbiBiZWZvcmVFYWNoIChmbikge1xuICByZXR1cm4gcmVnaXN0ZXJIb29rKHRoaXMuYmVmb3JlSG9va3MsIGZuKVxufTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5iZWZvcmVSZXNvbHZlID0gZnVuY3Rpb24gYmVmb3JlUmVzb2x2ZSAoZm4pIHtcbiAgcmV0dXJuIHJlZ2lzdGVySG9vayh0aGlzLnJlc29sdmVIb29rcywgZm4pXG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLmFmdGVyRWFjaCA9IGZ1bmN0aW9uIGFmdGVyRWFjaCAoZm4pIHtcbiAgcmV0dXJuIHJlZ2lzdGVySG9vayh0aGlzLmFmdGVySG9va3MsIGZuKVxufTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5vblJlYWR5ID0gZnVuY3Rpb24gb25SZWFkeSAoY2IsIGVycm9yQ2IpIHtcbiAgdGhpcy5oaXN0b3J5Lm9uUmVhZHkoY2IsIGVycm9yQ2IpO1xufTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5vbkVycm9yID0gZnVuY3Rpb24gb25FcnJvciAoZXJyb3JDYikge1xuICB0aGlzLmhpc3Rvcnkub25FcnJvcihlcnJvckNiKTtcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIHB1c2ggKGxvY2F0aW9uLCBvbkNvbXBsZXRlLCBvbkFib3J0KSB7XG4gIHRoaXMuaGlzdG9yeS5wdXNoKGxvY2F0aW9uLCBvbkNvbXBsZXRlLCBvbkFib3J0KTtcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUucmVwbGFjZSA9IGZ1bmN0aW9uIHJlcGxhY2UgKGxvY2F0aW9uLCBvbkNvbXBsZXRlLCBvbkFib3J0KSB7XG4gIHRoaXMuaGlzdG9yeS5yZXBsYWNlKGxvY2F0aW9uLCBvbkNvbXBsZXRlLCBvbkFib3J0KTtcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUuZ28gPSBmdW5jdGlvbiBnbyAobikge1xuICB0aGlzLmhpc3RvcnkuZ28obik7XG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLmJhY2sgPSBmdW5jdGlvbiBiYWNrICgpIHtcbiAgdGhpcy5nbygtMSk7XG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLmZvcndhcmQgPSBmdW5jdGlvbiBmb3J3YXJkICgpIHtcbiAgdGhpcy5nbygxKTtcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUuZ2V0TWF0Y2hlZENvbXBvbmVudHMgPSBmdW5jdGlvbiBnZXRNYXRjaGVkQ29tcG9uZW50cyAodG8pIHtcbiAgdmFyIHJvdXRlID0gdG9cbiAgICA/IHRvLm1hdGNoZWRcbiAgICAgID8gdG9cbiAgICAgIDogdGhpcy5yZXNvbHZlKHRvKS5yb3V0ZVxuICAgIDogdGhpcy5jdXJyZW50Um91dGU7XG4gIGlmICghcm91dGUpIHtcbiAgICByZXR1cm4gW11cbiAgfVxuICByZXR1cm4gW10uY29uY2F0LmFwcGx5KFtdLCByb3V0ZS5tYXRjaGVkLm1hcChmdW5jdGlvbiAobSkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhtLmNvbXBvbmVudHMpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gbS5jb21wb25lbnRzW2tleV1cbiAgICB9KVxuICB9KSlcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUucmVzb2x2ZSA9IGZ1bmN0aW9uIHJlc29sdmUgKFxuICB0byxcbiAgY3VycmVudCxcbiAgYXBwZW5kXG4pIHtcbiAgdmFyIGxvY2F0aW9uID0gbm9ybWFsaXplTG9jYXRpb24oXG4gICAgdG8sXG4gICAgY3VycmVudCB8fCB0aGlzLmhpc3RvcnkuY3VycmVudCxcbiAgICBhcHBlbmQsXG4gICAgdGhpc1xuICApO1xuICB2YXIgcm91dGUgPSB0aGlzLm1hdGNoKGxvY2F0aW9uLCBjdXJyZW50KTtcbiAgdmFyIGZ1bGxQYXRoID0gcm91dGUucmVkaXJlY3RlZEZyb20gfHwgcm91dGUuZnVsbFBhdGg7XG4gIHZhciBiYXNlID0gdGhpcy5oaXN0b3J5LmJhc2U7XG4gIHZhciBocmVmID0gY3JlYXRlSHJlZihiYXNlLCBmdWxsUGF0aCwgdGhpcy5tb2RlKTtcbiAgcmV0dXJuIHtcbiAgICBsb2NhdGlvbjogbG9jYXRpb24sXG4gICAgcm91dGU6IHJvdXRlLFxuICAgIGhyZWY6IGhyZWYsXG4gICAgLy8gZm9yIGJhY2t3YXJkcyBjb21wYXRcbiAgICBub3JtYWxpemVkVG86IGxvY2F0aW9uLFxuICAgIHJlc29sdmVkOiByb3V0ZVxuICB9XG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLmFkZFJvdXRlcyA9IGZ1bmN0aW9uIGFkZFJvdXRlcyAocm91dGVzKSB7XG4gIHRoaXMubWF0Y2hlci5hZGRSb3V0ZXMocm91dGVzKTtcbiAgaWYgKHRoaXMuaGlzdG9yeS5jdXJyZW50ICE9PSBTVEFSVCkge1xuICAgIHRoaXMuaGlzdG9yeS50cmFuc2l0aW9uVG8odGhpcy5oaXN0b3J5LmdldEN1cnJlbnRMb2NhdGlvbigpKTtcbiAgfVxufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIFZ1ZVJvdXRlci5wcm90b3R5cGUsIHByb3RvdHlwZUFjY2Vzc29ycyApO1xuXG5mdW5jdGlvbiByZWdpc3Rlckhvb2sgKGxpc3QsIGZuKSB7XG4gIGxpc3QucHVzaChmbik7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGkgPSBsaXN0LmluZGV4T2YoZm4pO1xuICAgIGlmIChpID4gLTEpIHsgbGlzdC5zcGxpY2UoaSwgMSk7IH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVIcmVmIChiYXNlLCBmdWxsUGF0aCwgbW9kZSkge1xuICB2YXIgcGF0aCA9IG1vZGUgPT09ICdoYXNoJyA/ICcjJyArIGZ1bGxQYXRoIDogZnVsbFBhdGg7XG4gIHJldHVybiBiYXNlID8gY2xlYW5QYXRoKGJhc2UgKyAnLycgKyBwYXRoKSA6IHBhdGhcbn1cblxuVnVlUm91dGVyLmluc3RhbGwgPSBpbnN0YWxsO1xuVnVlUm91dGVyLnZlcnNpb24gPSAnMi41LjMnO1xuXG5pZiAoaW5Ccm93c2VyICYmIHdpbmRvdy5WdWUpIHtcbiAgd2luZG93LlZ1ZS51c2UoVnVlUm91dGVyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVnVlUm91dGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi92dWUtcm91dGVyL2Rpc3QvdnVlLXJvdXRlci5lc20uanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaHR0cFwiXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImh0dHBzXCJcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInVybFwiXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTdiODE4MTI0XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjpmYWxzZX0hc2Fzcy1sb2FkZXIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yb290LnZ1ZVwiKVxucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTdiODE4MTI0XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOmZhbHNlfSFzYXNzLWxvYWRlciEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MSEuL3Jvb3QudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3Jvb3QudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi03YjgxODEyNFxcXCJ9IS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yb290LnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBcImRhdGEtdi03YjgxODEyNFwiLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQzpcXFxcVXNlcnNcXFxccmV0cm9cXFxcUHJvamVjdHNcXFxcamlyYS10YXNrc1xcXFxsaWJcXFxccm9vdC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSByb290LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi03YjgxODEyNFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTdiODE4MTI0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xpYi9yb290LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xyXG5cclxuLy9cclxuLy8gUGx1Z2luc1xyXG4vL1xyXG5yZXF1aXJlKCcuL3BsdWdpbnMvdnVleCcpO1xyXG5yZXF1aXJlKCcuL3BsdWdpbnMvcm91dGVyJyk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9hcHAvYm9vdC5qcyIsImltcG9ydCBWdWUgZnJvbSAndnVlJztcclxuaW1wb3J0IFZ1ZVJvdXRlciBmcm9tICd2dWUtcm91dGVyJztcclxuXHJcblZ1ZS51c2UoVnVlUm91dGVyKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2FwcC9wbHVnaW5zL3JvdXRlci5qcyIsImltcG9ydCBWdWUgZnJvbSAndnVlJztcclxuaW1wb3J0IFZ1ZXggZnJvbSAndnVleCc7XHJcblxyXG5WdWUudXNlKFZ1ZXgpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvYXBwL3BsdWdpbnMvdnVleC5qcyIsImltcG9ydCBUYXNrQ29tcG9uZW50IGZyb20gJ3BhZ2VzL3Rhc2tzL3Rhc2tzJztcclxuaW1wb3J0IFNldHRpbmdzQ29tcG9uZW50IGZyb20gJ3BhZ2VzL3NldHRpbmdzL3NldHRpbmdzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIC8vXHJcbiAgICAvLyBSb3V0ZXNcclxuICAgIC8vXHJcbiAgICByb3V0ZXM6IFtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIERlZmF1bHQgcmVkaXJlY3RcclxuICAgICAgICAvL1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICAgICAgICByZWRpcmVjdDogJy90YXNrcycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIEhvbWVcclxuICAgICAgICAvL1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGF0aDogJy90YXNrcycsXHJcbiAgICAgICAgICAgIGNvbXBvbmVudDogVGFza0NvbXBvbmVudCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gQWJvdXRcclxuICAgICAgICAvL1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGF0aDogJy9zZXR0aW5ncycsXHJcbiAgICAgICAgICAgIGNvbXBvbmVudDogU2V0dGluZ3NDb21wb25lbnQsXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9hcHAvcm91dGVzLmpzIiwiaW1wb3J0IFZ1ZXggZnJvbSAndnVleCc7XHJcbmltcG9ydCBzZXR0aW5ncyBmcm9tICcuL21vZHVsZXMvc2V0dGluZ3MnO1xyXG5pbXBvcnQgdGFza3MgZnJvbSAnLi9tb2R1bGVzL3Rhc2tzJztcclxuXHJcbmNvbnN0IGRlYnVnID0gYXRvbS5pbkRldk1vZGUoKTtcclxuXHJcbmNvbnN0IHN0b3JlID0gbmV3IFZ1ZXguU3RvcmUoe1xyXG4gICAgbW9kdWxlczoge1xyXG4gICAgICAgIHNldHRpbmdzLFxyXG4gICAgICAgIHRhc2tzLFxyXG4gICAgfSxcclxuICAgIHN0cmljdDogZGVidWcsXHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBzdG9yZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2FwcC9zdG9yZS9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWVzcGFjZWQ6IHRydWUsXHJcbiAgICBzdGF0ZToge1xyXG4gICAgICAgIHVybDogJycsXHJcbiAgICAgICAgdXNlcm5hbWU6ICcnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgIH0sXHJcbiAgICBtdXRhdGlvbnM6IHtcclxuICAgICAgICBzZXRVcmwoc3RhdGUsIHVybCkge1xyXG4gICAgICAgICAgICBzdGF0ZS51cmwgPSB1cmw7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRVc2VybmFtZShzdGF0ZSwgdXNlcm5hbWUpIHtcclxuICAgICAgICAgICAgc3RhdGUudXNlcm5hbWUgPSB1c2VybmFtZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldFBhc3N3b3JkKHN0YXRlLCBwYXNzd29yZCkge1xyXG4gICAgICAgICAgICBzdGF0ZS5wYXNzd29yZCA9IHBhc3N3b3JkO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgYWN0aW9uczoge1xyXG4gICAgICAgIGluaXRpYWxpemUoeyBjb21taXQgfSkge1xyXG4gICAgICAgICAgICBjb21taXQoJ3NldFVybCcsIGF0b20uY29uZmlnLmdldChcImppcmEtdGFza3MuamlyYVVybFwiKSk7XHJcbiAgICAgICAgICAgIGNvbW1pdCgnc2V0VXNlcm5hbWUnLCBhdG9tLmNvbmZpZy5nZXQoXCJqaXJhLXRhc2tzLnVzZXJuYW1lXCIpKTtcclxuICAgICAgICAgICAgY29tbWl0KCdzZXRQYXNzd29yZCcsIGF0b20uY29uZmlnLmdldChcImppcmEtdGFza3MucGFzc3dvcmRcIikpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvYXBwL3N0b3JlL21vZHVsZXMvc2V0dGluZ3MuanMiLCJpbXBvcnQgKiBhcyBSZXBvc2l0b3J5IGZyb20gJy4vcmVwb3NpdG9yeSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBpbml0aWFsaXplKHsgY29tbWl0LCByb290U3RhdGUgfSkge1xyXG4gICAgICAgIFJlcG9zaXRvcnkuZmV0Y2hBbGxUYXNrc0ZvclVzZXIocm9vdFN0YXRlLnNldHRpbmdzLnVzZXJuYW1lLCByb290U3RhdGUuc2V0dGluZ3MucGFzc3dvcmQsIHJvb3RTdGF0ZS5zZXR0aW5ncy51cmwpXHJcbiAgICAgICAgLnRoZW4oIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgY29tbWl0KCdzZXRUYXNrcycsIHJlc3BvbnNlLmRhdGEuaXNzdWVzKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0VGFza1RyYW5zaXRpb25zKHsgY29tbWl0LCByb290U3RhdGUgfSwgdGFzaykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgUmVwb3NpdG9yeS5mZXRjaFRhc2tUcmFuc2l0aW9ucyhyb290U3RhdGUuc2V0dGluZ3MudXNlcm5hbWUsIHJvb3RTdGF0ZS5zZXR0aW5ncy5wYXNzd29yZCwgcm9vdFN0YXRlLnNldHRpbmdzLnVybCwgdGFzay5rZXkpXHJcbiAgICAgICAgICAgIC50aGVuKCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2l0aW9ucyA9IHJlc3BvbnNlLmRhdGEudHJhbnNpdGlvbnM7XHJcbiAgICAgICAgICAgICAgICBjb21taXQoJ3NldFRhc2tUcmFuc2l0aW9ucycsIHsgdGFzaywgdHJhbnNpdGlvbnMgfSk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgdHJhbnNpdGlvblRhc2soeyBjb21taXQsIGRpc3BhdGNoLCByb290U3RhdGUgfSwgeyB0YXNrLCB0cmFuc2l0aW9uIH0pIHtcclxuICAgICAgICBSZXBvc2l0b3J5LmV4ZWN1dGVUYXNrVHJhbnNpc2l0b24ocm9vdFN0YXRlLnNldHRpbmdzLnVzZXJuYW1lLCByb290U3RhdGUuc2V0dGluZ3MucGFzc3dvcmQsIHJvb3RTdGF0ZS5zZXR0aW5ncy51cmwsIHRhc2sua2V5LCB0cmFuc2l0aW9uKVxyXG4gICAgICAgIC50aGVuKCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKCd1cGRhdGVUYXNrJywgdGFzayk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZVRhc2soeyBjb21taXQsIHJvb3RTdGF0ZSB9LCB0YXNrKSB7XHJcbiAgICAgICAgUmVwb3NpdG9yeS5mZXRjaFRhc2socm9vdFN0YXRlLnNldHRpbmdzLnVzZXJuYW1lLCByb290U3RhdGUuc2V0dGluZ3MucGFzc3dvcmQsIHJvb3RTdGF0ZS5zZXR0aW5ncy51cmwsIHRhc2sua2V5KVxyXG4gICAgICAgIC50aGVuKCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbW1pdCgndXBkYXRlVGFzaycsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2FwcC9zdG9yZS9tb2R1bGVzL3Rhc2tzL2FjdGlvbnMuanMiLCJleHBvcnQgZGVmYXVsdCB7XHJcblxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvYXBwL3N0b3JlL21vZHVsZXMvdGFza3MvZ2V0dGVycy5qcyIsImltcG9ydCBzdGF0ZSBmcm9tICcuL3N0YXRlJztcclxuaW1wb3J0IG11dGF0aW9ucyBmcm9tICcuL211dGF0aW9ucyc7XHJcbmltcG9ydCBhY3Rpb25zIGZyb20gJy4vYWN0aW9ucyc7XHJcbmltcG9ydCBnZXR0ZXJzIGZyb20gJy4vZ2V0dGVycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lc3BhY2VkOiB0cnVlLFxyXG4gICAgc3RhdGUsXHJcbiAgICBtdXRhdGlvbnMsXHJcbiAgICBhY3Rpb25zLFxyXG4gICAgZ2V0dGVycyxcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2FwcC9zdG9yZS9tb2R1bGVzL3Rhc2tzL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgc2V0VGFza3Moc3RhdGUsIHRhc2tzKSB7XHJcbiAgICAgICAgc3RhdGUudGFza3MgPSB0YXNrcy5tYXAoIHRhc2sgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaWQ6IHRhc2suaWQsXHJcbiAgICAgICAgICAgICAgICBrZXk6IHRhc2sua2V5LFxyXG4gICAgICAgICAgICAgICAgc2VsZjogdGFzay5zZWxmLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHRhc2suZmllbGRzLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgc3VtbWFyeTogdGFzay5maWVsZHMuc3VtbWFyeSxcclxuICAgICAgICAgICAgICAgIGljb246IHRhc2suZmllbGRzLmlzc3VldHlwZS5pY29uVXJsLFxyXG4gICAgICAgICAgICAgICAgaXNFeHBhbmRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHRhc2suZmllbGRzLnN0YXR1cyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGVUYXNrKHN0YXRlLCBmcmVzaFRhc2spIHtcclxuICAgICAgICBsZXQgaW5kZXg7XHJcbiAgICAgICAgc3RhdGUudGFza3MuZm9yRWFjaCgodGFzaywgaSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGFzay5pZCA9PT0gZnJlc2hUYXNrLmlkKSB7XHJcbiAgICAgICAgICAgICAgICBpbmRleCA9IGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBpbmRleCAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAvLyBSZXNldCBhbGwgaW5pdGlhbCBwcm9wZXJ0aWVzIG9mIHRoZSB0YXNrLlxyXG4gICAgICAgICAgICAvLyBJIGtub3cgbW9zdCBvZiB0aGVzZSBhcmUgdW5saWtlbHkgdG8gY2hhbmdlLCBidXQgc2VlbXMgYmV0dGVyIHNhZmVcclxuICAgICAgICAgICAgLy8gdGhhbiBzb3JyeSBzZW5zZSB3ZSBhbHJlYWR5IHJlZmV0Y2hlZCBhbGwgb2YgaXQuXHJcbiAgICAgICAgICAgIHN0YXRlLnRhc2tzW2luZGV4XS5pZCA9IGZyZXNoVGFzay5pZDtcclxuICAgICAgICAgICAgc3RhdGUudGFza3NbaW5kZXhdLmtleSA9IGZyZXNoVGFzay5rZXk7XHJcbiAgICAgICAgICAgIHN0YXRlLnRhc2tzW2luZGV4XS5zZWxmID0gZnJlc2hUYXNrLnNlbGY7XHJcbiAgICAgICAgICAgIHN0YXRlLnRhc2tzW2luZGV4XS5kZXNjcmlwdGlvbiA9IGZyZXNoVGFzay5maWVsZHMuZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgIHN0YXRlLnRhc2tzW2luZGV4XS5zdW1tYXJ5ID0gZnJlc2hUYXNrLmZpZWxkcy5zdW1tYXJ5O1xyXG4gICAgICAgICAgICBzdGF0ZS50YXNrc1tpbmRleF0uc3RhdHVzID0gZnJlc2hUYXNrLmZpZWxkcy5zdGF0dXM7XHJcbiAgICAgICAgICAgIHN0YXRlLnRhc2tzW2luZGV4XS5pY29uID0gZnJlc2hUYXNrLmZpZWxkcy5pc3N1ZXR5cGUuaWNvblVybDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHNldFRhc2tUcmFuc2l0aW9ucyhzdGF0ZSwgeyB0YXNrOiB0YXJnZXQsIHRyYW5zaXRpb25zIH0pIHtcclxuICAgICAgICBzdGF0ZS50YXNrcy5mb3JFYWNoKCB0YXNrID0+IHtcclxuICAgICAgICAgICAgaWYgKHRhc2suaWQgPT09IHRhcmdldC5pZCkge1xyXG4gICAgICAgICAgICAgICAgdGFzay50cmFuc2l0aW9ucyA9IHRyYW5zaXRpb25zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHRvZ2dsZUV4cGFuZGVkKHN0YXRlLCB7IGlkIH0pIHtcclxuICAgICAgICBzdGF0ZS50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xyXG4gICAgICAgICAgICBpZih0YXNrLmlkID09PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgdGFzay5pc0V4cGFuZGVkID0gIXRhc2suaXNFeHBhbmRlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2FwcC9zdG9yZS9tb2R1bGVzL3Rhc2tzL211dGF0aW9ucy5qcyIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmNvbnN0IHJlbW90ZSA9IHJlcXVpcmUoJ2VsZWN0cm9uJykucmVtb3RlO1xyXG5jb25zdCByZXF1ZXN0ID0gcmVtb3RlLnJlcXVpcmUoJ3JlcXVlc3QnKTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaEFsbFRhc2tzRm9yVXNlciA9ICBmdW5jdGlvbih1c2VybmFtZSwgcGFzc3dvcmQsIHVybCkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgaHR0cHM6Ly8ke3VybH0vcmVzdC9hcGkvMi9zZWFyY2hgLCB7XHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgIGpxbDogXCJhc3NpZ25lZT1jdXJyZW50VXNlcigpIEFORCBzdGF0dXNDYXRlZ29yeSBub3QgaW4gKERvbmUpXCIsXHJcbiAgICAgICAgICAgIHN0YXJ0QXQ6IDAsXHJcbiAgICAgICAgICAgIG1heFJlc3VsdHM6IDEwMDAwLFxyXG4gICAgICAgICAgICBmaWVsZHM6ICcqYWxsJyxcclxuICAgICAgICAgICAgZmllbGRzQnlLZXlzOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXV0aDogeyB1c2VybmFtZSwgcGFzc3dvcmQgfSxcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoVGFzayA9IGZ1bmN0aW9uKHVzZXJuYW1lLCBwYXNzd29yZCwgdXJsLCBrZXkpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYGh0dHBzOi8vJHt1cmx9L3Jlc3QvYXBpLzIvaXNzdWUvJHtrZXl9YCwge1xyXG4gICAgICAgIGF1dGg6IHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0sXHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFRhc2tUcmFuc2l0aW9ucyA9IGZ1bmN0aW9uKHVzZXJuYW1lLCBwYXNzd29yZCwgdXJsLCBrZXkpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYGh0dHBzOi8vJHt1cmx9L3Jlc3QvYXBpLzIvaXNzdWUvJHtrZXl9L3RyYW5zaXRpb25zYCwge1xyXG4gICAgICAgIGF1dGg6IHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0sXHJcbiAgICB9KTtcclxufTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgZXhlY3V0ZVRhc2tUcmFuc2lzaXRvbiA9IGZ1bmN0aW9uKHVzZXJuYW1lLCBwYXNzd29yZCwgdXJsLCBrZXksIHRyYW5zaXRpb24pIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgbGV0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgICAgICAgICB1cmw6IGBodHRwczovLyR7dXJsfS9yZXN0L2FwaS9sYXRlc3QvaXNzdWUvJHtrZXl9L3RyYW5zaXRpb25zYCxcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgYXV0aDogeyB1c2VybmFtZSwgcGFzc3dvcmQgfSxcclxuICAgICAgICAgICAgYm9keToge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB0cmFuc2l0aW9uLmlkLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXF1ZXN0KHJlcXVlc3RPcHRpb25zLCAoZXJyb3IsIHJlc3BvbnNlLCBib2R5KSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9hcHAvc3RvcmUvbW9kdWxlcy90YXNrcy9yZXBvc2l0b3J5LmpzIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgdGFza3M6IFtdLFxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvYXBwL3N0b3JlL21vZHVsZXMvdGFza3Mvc3RhdGUuanMiLCIvL1xyXG4vLyBWdWUgZGVwc1xyXG4vL1xyXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XHJcbmltcG9ydCBSb290Q29tcG9uZW50IGZyb20gJy4vcm9vdCc7XHJcblxyXG4vLyBEaXNhYmxlIHRoZSBwcm9kdWN0aW9uIHdhcm5pbmdcclxuaWYgKGF0b20uaW5EZXZNb2RlKCkpIHtcclxuICAgIFZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGFwcDogbnVsbCxcclxuICAgIGppcmFUYXNrc1ZpZXc6IG51bGwsXHJcblxyXG4gICAgYWN0aXZhdGUoc3RhdGUpIHtcclxuICAgICAgICB0aGlzLmFwcCA9IG5ldyBWdWUoUm9vdENvbXBvbmVudCk7XHJcblxyXG4gICAgICAgIGF0b20uY29tbWFuZHMuYWRkKFwiYXRvbS13b3Jrc3BhY2VcIiwge1xyXG4gICAgICAgICAgICBcImppcmEtdGFza3M6dG9nZ2xlLXZpZXdcIjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHAudG9nZ2xlKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGRlYWN0aXZhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5hcHAuJGRlc3Ryb3koKTtcclxuICAgIH0sXHJcblxyXG4gICAgc2VyaWFsaXplKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlzVmlzaWJsZTogdGhpcy5hcHAuJGRhdGEuaXNWaXNpYmxlLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG5cclxuICAgIGNvbmZpZzoge1xyXG4gICAgICAgIHVzZXJuYW1lOiB7IGRlZmF1bHQ6ICd1c2VybmFtZScsIHR5cGU6ICdzdHJpbmcnIH0sXHJcbiAgICAgICAgcGFzc3dvcmQ6IHsgZGVmYXVsdDogJ2d1ZXN0JywgdHlwZTogJ3N0cmluZycgfSxcclxuICAgICAgICBqaXJhVXJsOiB7IGRlZmF1bHQ6ICdqaXJhaW5zdGFuY2UuYXRsYXNzaWFuLm5ldCcsIHR5cGU6ICdzdHJpbmcnIH0sXHJcbiAgICB9LFxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvbWFpbi5qcyIsIjsoZnVuY3Rpb24gKCkge1xuXG4gIHZhciBvYmplY3QgPVxuICAgIHR5cGVvZiBleHBvcnRzICE9ICd1bmRlZmluZWQnID8gZXhwb3J0cyA6XG4gICAgdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogLy8gIzg6IHdlYiB3b3JrZXJzXG4gICAgJC5nbG9iYWw7IC8vICMzMTogRXh0ZW5kU2NyaXB0XG5cbiAgdmFyIGNoYXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89JztcblxuICBmdW5jdGlvbiBJbnZhbGlkQ2hhcmFjdGVyRXJyb3IobWVzc2FnZSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gIH1cbiAgSW52YWxpZENoYXJhY3RlckVycm9yLnByb3RvdHlwZSA9IG5ldyBFcnJvcjtcbiAgSW52YWxpZENoYXJhY3RlckVycm9yLnByb3RvdHlwZS5uYW1lID0gJ0ludmFsaWRDaGFyYWN0ZXJFcnJvcic7XG5cbiAgLy8gZW5jb2RlclxuICAvLyBbaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vOTk5MTY2XSBieSBbaHR0cHM6Ly9naXRodWIuY29tL25pZ25hZ11cbiAgb2JqZWN0LmJ0b2EgfHwgKFxuICBvYmplY3QuYnRvYSA9IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgIHZhciBzdHIgPSBTdHJpbmcoaW5wdXQpO1xuICAgIGZvciAoXG4gICAgICAvLyBpbml0aWFsaXplIHJlc3VsdCBhbmQgY291bnRlclxuICAgICAgdmFyIGJsb2NrLCBjaGFyQ29kZSwgaWR4ID0gMCwgbWFwID0gY2hhcnMsIG91dHB1dCA9ICcnO1xuICAgICAgLy8gaWYgdGhlIG5leHQgc3RyIGluZGV4IGRvZXMgbm90IGV4aXN0OlxuICAgICAgLy8gICBjaGFuZ2UgdGhlIG1hcHBpbmcgdGFibGUgdG8gXCI9XCJcbiAgICAgIC8vICAgY2hlY2sgaWYgZCBoYXMgbm8gZnJhY3Rpb25hbCBkaWdpdHNcbiAgICAgIHN0ci5jaGFyQXQoaWR4IHwgMCkgfHwgKG1hcCA9ICc9JywgaWR4ICUgMSk7XG4gICAgICAvLyBcIjggLSBpZHggJSAxICogOFwiIGdlbmVyYXRlcyB0aGUgc2VxdWVuY2UgMiwgNCwgNiwgOFxuICAgICAgb3V0cHV0ICs9IG1hcC5jaGFyQXQoNjMgJiBibG9jayA+PiA4IC0gaWR4ICUgMSAqIDgpXG4gICAgKSB7XG4gICAgICBjaGFyQ29kZSA9IHN0ci5jaGFyQ29kZUF0KGlkeCArPSAzLzQpO1xuICAgICAgaWYgKGNoYXJDb2RlID4gMHhGRikge1xuICAgICAgICB0aHJvdyBuZXcgSW52YWxpZENoYXJhY3RlckVycm9yKFwiJ2J0b2EnIGZhaWxlZDogVGhlIHN0cmluZyB0byBiZSBlbmNvZGVkIGNvbnRhaW5zIGNoYXJhY3RlcnMgb3V0c2lkZSBvZiB0aGUgTGF0aW4xIHJhbmdlLlwiKTtcbiAgICAgIH1cbiAgICAgIGJsb2NrID0gYmxvY2sgPDwgOCB8IGNoYXJDb2RlO1xuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0O1xuICB9KTtcblxuICAvLyBkZWNvZGVyXG4gIC8vIFtodHRwczovL2dpc3QuZ2l0aHViLmNvbS8xMDIwMzk2XSBieSBbaHR0cHM6Ly9naXRodWIuY29tL2F0a11cbiAgb2JqZWN0LmF0b2IgfHwgKFxuICBvYmplY3QuYXRvYiA9IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgIHZhciBzdHIgPSBTdHJpbmcoaW5wdXQpLnJlcGxhY2UoL1s9XSskLywgJycpOyAvLyAjMzE6IEV4dGVuZFNjcmlwdCBiYWQgcGFyc2Ugb2YgLz1cbiAgICBpZiAoc3RyLmxlbmd0aCAlIDQgPT0gMSkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRDaGFyYWN0ZXJFcnJvcihcIidhdG9iJyBmYWlsZWQ6IFRoZSBzdHJpbmcgdG8gYmUgZGVjb2RlZCBpcyBub3QgY29ycmVjdGx5IGVuY29kZWQuXCIpO1xuICAgIH1cbiAgICBmb3IgKFxuICAgICAgLy8gaW5pdGlhbGl6ZSByZXN1bHQgYW5kIGNvdW50ZXJzXG4gICAgICB2YXIgYmMgPSAwLCBicywgYnVmZmVyLCBpZHggPSAwLCBvdXRwdXQgPSAnJztcbiAgICAgIC8vIGdldCBuZXh0IGNoYXJhY3RlclxuICAgICAgYnVmZmVyID0gc3RyLmNoYXJBdChpZHgrKyk7XG4gICAgICAvLyBjaGFyYWN0ZXIgZm91bmQgaW4gdGFibGU/IGluaXRpYWxpemUgYml0IHN0b3JhZ2UgYW5kIGFkZCBpdHMgYXNjaWkgdmFsdWU7XG4gICAgICB+YnVmZmVyICYmIChicyA9IGJjICUgNCA/IGJzICogNjQgKyBidWZmZXIgOiBidWZmZXIsXG4gICAgICAgIC8vIGFuZCBpZiBub3QgZmlyc3Qgb2YgZWFjaCA0IGNoYXJhY3RlcnMsXG4gICAgICAgIC8vIGNvbnZlcnQgdGhlIGZpcnN0IDggYml0cyB0byBvbmUgYXNjaWkgY2hhcmFjdGVyXG4gICAgICAgIGJjKysgJSA0KSA/IG91dHB1dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDI1NSAmIGJzID4+ICgtMiAqIGJjICYgNikpIDogMFxuICAgICkge1xuICAgICAgLy8gdHJ5IHRvIGZpbmQgY2hhcmFjdGVyIGluIHRhYmxlICgwLTYzLCBub3QgZm91bmQgPT4gLTEpXG4gICAgICBidWZmZXIgPSBjaGFycy5pbmRleE9mKGJ1ZmZlcik7XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXQ7XG4gIH0pO1xuXG59KCkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9CYXNlNjQvYmFzZTY0LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9heGlvcycpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYXhpb3MvaW5kZXguanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBzZXR0bGUgPSByZXF1aXJlKCcuLy4uL2NvcmUvc2V0dGxlJyk7XG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBodHRwID0gcmVxdWlyZSgnaHR0cCcpO1xudmFyIGh0dHBzID0gcmVxdWlyZSgnaHR0cHMnKTtcbnZhciBodHRwRm9sbG93ID0gcmVxdWlyZSgnZm9sbG93LXJlZGlyZWN0cycpLmh0dHA7XG52YXIgaHR0cHNGb2xsb3cgPSByZXF1aXJlKCdmb2xsb3ctcmVkaXJlY3RzJykuaHR0cHM7XG52YXIgdXJsID0gcmVxdWlyZSgndXJsJyk7XG52YXIgemxpYiA9IHJlcXVpcmUoJ3psaWInKTtcbnZhciBwa2cgPSByZXF1aXJlKCcuLy4uLy4uL3BhY2thZ2UuanNvbicpO1xudmFyIEJ1ZmZlciA9IHJlcXVpcmUoJ2J1ZmZlcicpLkJ1ZmZlcjtcbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4uL2NvcmUvY3JlYXRlRXJyb3InKTtcbnZhciBlbmhhbmNlRXJyb3IgPSByZXF1aXJlKCcuLi9jb3JlL2VuaGFuY2VFcnJvcicpO1xuXG4vKmVzbGludCBjb25zaXN0ZW50LXJldHVybjowKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaHR0cEFkYXB0ZXIoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBkaXNwYXRjaEh0dHBSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciBkYXRhID0gY29uZmlnLmRhdGE7XG4gICAgdmFyIGhlYWRlcnMgPSBjb25maWcuaGVhZGVycztcbiAgICB2YXIgdGltZXI7XG4gICAgdmFyIGFib3J0ZWQgPSBmYWxzZTtcblxuICAgIC8vIFNldCBVc2VyLUFnZW50IChyZXF1aXJlZCBieSBzb21lIHNlcnZlcnMpXG4gICAgLy8gT25seSBzZXQgaGVhZGVyIGlmIGl0IGhhc24ndCBiZWVuIHNldCBpbiBjb25maWdcbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL216YWJyaXNraWUvYXhpb3MvaXNzdWVzLzY5XG4gICAgaWYgKCFoZWFkZXJzWydVc2VyLUFnZW50J10gJiYgIWhlYWRlcnNbJ3VzZXItYWdlbnQnXSkge1xuICAgICAgaGVhZGVyc1snVXNlci1BZ2VudCddID0gJ2F4aW9zLycgKyBwa2cudmVyc2lvbjtcbiAgICB9XG5cbiAgICBpZiAoZGF0YSAmJiAhdXRpbHMuaXNTdHJlYW0oZGF0YSkpIHtcbiAgICAgIGlmICh1dGlscy5pc0J1ZmZlcihkYXRhKSkge1xuICAgICAgICAvLyBOb3RoaW5nIHRvIGRvLi4uXG4gICAgICB9IGVsc2UgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXIoZGF0YSkpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBCdWZmZXIobmV3IFVpbnQ4QXJyYXkoZGF0YSkpO1xuICAgICAgfSBlbHNlIGlmICh1dGlscy5pc1N0cmluZyhkYXRhKSkge1xuICAgICAgICBkYXRhID0gbmV3IEJ1ZmZlcihkYXRhLCAndXRmLTgnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZWplY3QoY3JlYXRlRXJyb3IoXG4gICAgICAgICAgJ0RhdGEgYWZ0ZXIgdHJhbnNmb3JtYXRpb24gbXVzdCBiZSBhIHN0cmluZywgYW4gQXJyYXlCdWZmZXIsIGEgQnVmZmVyLCBvciBhIFN0cmVhbScsXG4gICAgICAgICAgY29uZmlnXG4gICAgICAgICkpO1xuICAgICAgfVxuXG4gICAgICAvLyBBZGQgQ29udGVudC1MZW5ndGggaGVhZGVyIGlmIGRhdGEgZXhpc3RzXG4gICAgICBoZWFkZXJzWydDb250ZW50LUxlbmd0aCddID0gZGF0YS5sZW5ndGg7XG4gICAgfVxuXG4gICAgLy8gSFRUUCBiYXNpYyBhdXRoZW50aWNhdGlvblxuICAgIHZhciBhdXRoID0gdW5kZWZpbmVkO1xuICAgIGlmIChjb25maWcuYXV0aCkge1xuICAgICAgdmFyIHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XG4gICAgICB2YXIgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCB8fCAnJztcbiAgICAgIGF1dGggPSB1c2VybmFtZSArICc6JyArIHBhc3N3b3JkO1xuICAgIH1cblxuICAgIC8vIFBhcnNlIHVybFxuICAgIHZhciBwYXJzZWQgPSB1cmwucGFyc2UoY29uZmlnLnVybCk7XG4gICAgdmFyIHByb3RvY29sID0gcGFyc2VkLnByb3RvY29sIHx8ICdodHRwOic7XG5cbiAgICBpZiAoIWF1dGggJiYgcGFyc2VkLmF1dGgpIHtcbiAgICAgIHZhciB1cmxBdXRoID0gcGFyc2VkLmF1dGguc3BsaXQoJzonKTtcbiAgICAgIHZhciB1cmxVc2VybmFtZSA9IHVybEF1dGhbMF0gfHwgJyc7XG4gICAgICB2YXIgdXJsUGFzc3dvcmQgPSB1cmxBdXRoWzFdIHx8ICcnO1xuICAgICAgYXV0aCA9IHVybFVzZXJuYW1lICsgJzonICsgdXJsUGFzc3dvcmQ7XG4gICAgfVxuXG4gICAgaWYgKGF1dGgpIHtcbiAgICAgIGRlbGV0ZSBoZWFkZXJzLkF1dGhvcml6YXRpb247XG4gICAgfVxuXG4gICAgdmFyIGlzSHR0cHMgPSBwcm90b2NvbCA9PT0gJ2h0dHBzOic7XG4gICAgdmFyIGFnZW50ID0gaXNIdHRwcyA/IGNvbmZpZy5odHRwc0FnZW50IDogY29uZmlnLmh0dHBBZ2VudDtcblxuICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgaG9zdG5hbWU6IHBhcnNlZC5ob3N0bmFtZSxcbiAgICAgIHBvcnQ6IHBhcnNlZC5wb3J0LFxuICAgICAgcGF0aDogYnVpbGRVUkwocGFyc2VkLnBhdGgsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKS5yZXBsYWNlKC9eXFw/LywgJycpLFxuICAgICAgbWV0aG9kOiBjb25maWcubWV0aG9kLFxuICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgIGFnZW50OiBhZ2VudCxcbiAgICAgIGF1dGg6IGF1dGhcbiAgICB9O1xuXG4gICAgdmFyIHByb3h5ID0gY29uZmlnLnByb3h5O1xuICAgIGlmICghcHJveHkpIHtcbiAgICAgIHZhciBwcm94eUVudiA9IHByb3RvY29sLnNsaWNlKDAsIC0xKSArICdfcHJveHknO1xuICAgICAgdmFyIHByb3h5VXJsID0gcHJvY2Vzcy5lbnZbcHJveHlFbnZdIHx8IHByb2Nlc3MuZW52W3Byb3h5RW52LnRvVXBwZXJDYXNlKCldO1xuICAgICAgaWYgKHByb3h5VXJsKSB7XG4gICAgICAgIHZhciBwYXJzZWRQcm94eVVybCA9IHVybC5wYXJzZShwcm94eVVybCk7XG4gICAgICAgIHByb3h5ID0ge1xuICAgICAgICAgIGhvc3Q6IHBhcnNlZFByb3h5VXJsLmhvc3RuYW1lLFxuICAgICAgICAgIHBvcnQ6IHBhcnNlZFByb3h5VXJsLnBvcnRcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAocGFyc2VkUHJveHlVcmwuYXV0aCkge1xuICAgICAgICAgIHZhciBwcm94eVVybEF1dGggPSBwYXJzZWRQcm94eVVybC5hdXRoLnNwbGl0KCc6Jyk7XG4gICAgICAgICAgcHJveHkuYXV0aCA9IHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiBwcm94eVVybEF1dGhbMF0sXG4gICAgICAgICAgICBwYXNzd29yZDogcHJveHlVcmxBdXRoWzFdXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm94eSkge1xuICAgICAgb3B0aW9ucy5ob3N0bmFtZSA9IHByb3h5Lmhvc3Q7XG4gICAgICBvcHRpb25zLmhvc3QgPSBwcm94eS5ob3N0O1xuICAgICAgb3B0aW9ucy5oZWFkZXJzLmhvc3QgPSBwYXJzZWQuaG9zdG5hbWUgKyAocGFyc2VkLnBvcnQgPyAnOicgKyBwYXJzZWQucG9ydCA6ICcnKTtcbiAgICAgIG9wdGlvbnMucG9ydCA9IHByb3h5LnBvcnQ7XG4gICAgICBvcHRpb25zLnBhdGggPSBwcm90b2NvbCArICcvLycgKyBwYXJzZWQuaG9zdG5hbWUgKyAocGFyc2VkLnBvcnQgPyAnOicgKyBwYXJzZWQucG9ydCA6ICcnKSArIG9wdGlvbnMucGF0aDtcblxuICAgICAgLy8gQmFzaWMgcHJveHkgYXV0aG9yaXphdGlvblxuICAgICAgaWYgKHByb3h5LmF1dGgpIHtcbiAgICAgICAgdmFyIGJhc2U2NCA9IG5ldyBCdWZmZXIocHJveHkuYXV0aC51c2VybmFtZSArICc6JyArIHByb3h5LmF1dGgucGFzc3dvcmQsICd1dGY4JykudG9TdHJpbmcoJ2Jhc2U2NCcpO1xuICAgICAgICBvcHRpb25zLmhlYWRlcnNbJ1Byb3h5LUF1dGhvcml6YXRpb24nXSA9ICdCYXNpYyAnICsgYmFzZTY0O1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciB0cmFuc3BvcnQ7XG4gICAgaWYgKGNvbmZpZy5tYXhSZWRpcmVjdHMgPT09IDApIHtcbiAgICAgIHRyYW5zcG9ydCA9IGlzSHR0cHMgPyBodHRwcyA6IGh0dHA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjb25maWcubWF4UmVkaXJlY3RzKSB7XG4gICAgICAgIG9wdGlvbnMubWF4UmVkaXJlY3RzID0gY29uZmlnLm1heFJlZGlyZWN0cztcbiAgICAgIH1cbiAgICAgIHRyYW5zcG9ydCA9IGlzSHR0cHMgPyBodHRwc0ZvbGxvdyA6IGh0dHBGb2xsb3c7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIHRoZSByZXF1ZXN0XG4gICAgdmFyIHJlcSA9IHRyYW5zcG9ydC5yZXF1ZXN0KG9wdGlvbnMsIGZ1bmN0aW9uIGhhbmRsZVJlc3BvbnNlKHJlcykge1xuICAgICAgaWYgKGFib3J0ZWQpIHJldHVybjtcblxuICAgICAgLy8gUmVzcG9uc2UgaGFzIGJlZW4gcmVjZWl2ZWQgc28ga2lsbCB0aW1lciB0aGF0IGhhbmRsZXMgcmVxdWVzdCB0aW1lb3V0XG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgdGltZXIgPSBudWxsO1xuXG4gICAgICAvLyB1bmNvbXByZXNzIHRoZSByZXNwb25zZSBib2R5IHRyYW5zcGFyZW50bHkgaWYgcmVxdWlyZWRcbiAgICAgIHZhciBzdHJlYW0gPSByZXM7XG4gICAgICBzd2l0Y2ggKHJlcy5oZWFkZXJzWydjb250ZW50LWVuY29kaW5nJ10pIHtcbiAgICAgIC8qZXNsaW50IGRlZmF1bHQtY2FzZTowKi9cbiAgICAgIGNhc2UgJ2d6aXAnOlxuICAgICAgY2FzZSAnY29tcHJlc3MnOlxuICAgICAgY2FzZSAnZGVmbGF0ZSc6XG4gICAgICAgIC8vIGFkZCB0aGUgdW56aXBwZXIgdG8gdGhlIGJvZHkgc3RyZWFtIHByb2Nlc3NpbmcgcGlwZWxpbmVcbiAgICAgICAgc3RyZWFtID0gc3RyZWFtLnBpcGUoemxpYi5jcmVhdGVVbnppcCgpKTtcblxuICAgICAgICAvLyByZW1vdmUgdGhlIGNvbnRlbnQtZW5jb2RpbmcgaW4gb3JkZXIgdG8gbm90IGNvbmZ1c2UgZG93bnN0cmVhbSBvcGVyYXRpb25zXG4gICAgICAgIGRlbGV0ZSByZXMuaGVhZGVyc1snY29udGVudC1lbmNvZGluZyddO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgLy8gcmV0dXJuIHRoZSBsYXN0IHJlcXVlc3QgaW4gY2FzZSBvZiByZWRpcmVjdHNcbiAgICAgIHZhciBsYXN0UmVxdWVzdCA9IHJlcy5yZXEgfHwgcmVxO1xuXG4gICAgICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgICAgIHN0YXR1czogcmVzLnN0YXR1c0NvZGUsXG4gICAgICAgIHN0YXR1c1RleHQ6IHJlcy5zdGF0dXNNZXNzYWdlLFxuICAgICAgICBoZWFkZXJzOiByZXMuaGVhZGVycyxcbiAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgIHJlcXVlc3Q6IGxhc3RSZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSA9PT0gJ3N0cmVhbScpIHtcbiAgICAgICAgcmVzcG9uc2UuZGF0YSA9IHN0cmVhbTtcbiAgICAgICAgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3BvbnNlQnVmZmVyID0gW107XG4gICAgICAgIHN0cmVhbS5vbignZGF0YScsIGZ1bmN0aW9uIGhhbmRsZVN0cmVhbURhdGEoY2h1bmspIHtcbiAgICAgICAgICByZXNwb25zZUJ1ZmZlci5wdXNoKGNodW5rKTtcblxuICAgICAgICAgIC8vIG1ha2Ugc3VyZSB0aGUgY29udGVudCBsZW5ndGggaXMgbm90IG92ZXIgdGhlIG1heENvbnRlbnRMZW5ndGggaWYgc3BlY2lmaWVkXG4gICAgICAgICAgaWYgKGNvbmZpZy5tYXhDb250ZW50TGVuZ3RoID4gLTEgJiYgQnVmZmVyLmNvbmNhdChyZXNwb25zZUJ1ZmZlcikubGVuZ3RoID4gY29uZmlnLm1heENvbnRlbnRMZW5ndGgpIHtcbiAgICAgICAgICAgIHJlamVjdChjcmVhdGVFcnJvcignbWF4Q29udGVudExlbmd0aCBzaXplIG9mICcgKyBjb25maWcubWF4Q29udGVudExlbmd0aCArICcgZXhjZWVkZWQnLCBjb25maWcpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHN0cmVhbS5vbignZXJyb3InLCBmdW5jdGlvbiBoYW5kbGVTdHJlYW1FcnJvcihlcnIpIHtcbiAgICAgICAgICBpZiAoYWJvcnRlZCkgcmV0dXJuO1xuICAgICAgICAgIHJlamVjdChlbmhhbmNlRXJyb3IoZXJyLCBjb25maWcpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3RyZWFtLm9uKCdlbmQnLCBmdW5jdGlvbiBoYW5kbGVTdHJlYW1FbmQoKSB7XG4gICAgICAgICAgdmFyIHJlc3BvbnNlRGF0YSA9IEJ1ZmZlci5jb25jYXQocmVzcG9uc2VCdWZmZXIpO1xuICAgICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlICE9PSAnYXJyYXlidWZmZXInKSB7XG4gICAgICAgICAgICByZXNwb25zZURhdGEgPSByZXNwb25zZURhdGEudG9TdHJpbmcoJ3V0ZjgnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXNwb25zZS5kYXRhID0gcmVzcG9uc2VEYXRhO1xuICAgICAgICAgIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBIYW5kbGUgZXJyb3JzXG4gICAgcmVxLm9uKCdlcnJvcicsIGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3RFcnJvcihlcnIpIHtcbiAgICAgIGlmIChhYm9ydGVkKSByZXR1cm47XG4gICAgICByZWplY3QoZW5oYW5jZUVycm9yKGVyciwgY29uZmlnKSk7XG4gICAgfSk7XG5cbiAgICAvLyBIYW5kbGUgcmVxdWVzdCB0aW1lb3V0XG4gICAgaWYgKGNvbmZpZy50aW1lb3V0ICYmICF0aW1lcikge1xuICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3RUaW1lb3V0KCkge1xuICAgICAgICByZXEuYWJvcnQoKTtcbiAgICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcpKTtcbiAgICAgICAgYWJvcnRlZCA9IHRydWU7XG4gICAgICB9LCBjb25maWcudGltZW91dCk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xuICAgICAgICBpZiAoYWJvcnRlZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcS5hYm9ydCgpO1xuICAgICAgICByZWplY3QoY2FuY2VsKTtcbiAgICAgICAgYWJvcnRlZCA9IHRydWU7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgaWYgKHV0aWxzLmlzU3RyZWFtKGRhdGEpKSB7XG4gICAgICBkYXRhLnBpcGUocmVxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVxLmVuZChkYXRhKTtcbiAgICB9XG4gIH0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYXhpb3MvbGliL2FkYXB0ZXJzL2h0dHAuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBzZXR0bGUgPSByZXF1aXJlKCcuLy4uL2NvcmUvc2V0dGxlJyk7XG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBwYXJzZUhlYWRlcnMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvcGFyc2VIZWFkZXJzJyk7XG52YXIgaXNVUkxTYW1lT3JpZ2luID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbicpO1xudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi4vY29yZS9jcmVhdGVFcnJvcicpO1xudmFyIGJ0b2EgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmJ0b2EgJiYgd2luZG93LmJ0b2EuYmluZCh3aW5kb3cpKSB8fCByZXF1aXJlKCcuLy4uL2hlbHBlcnMvYnRvYScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHhockFkYXB0ZXIoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBkaXNwYXRjaFhoclJlcXVlc3QocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0gY29uZmlnLmRhdGE7XG4gICAgdmFyIHJlcXVlc3RIZWFkZXJzID0gY29uZmlnLmhlYWRlcnM7XG5cbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShyZXF1ZXN0RGF0YSkpIHtcbiAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1snQ29udGVudC1UeXBlJ107IC8vIExldCB0aGUgYnJvd3NlciBzZXQgaXRcbiAgICB9XG5cbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHZhciBsb2FkRXZlbnQgPSAnb25yZWFkeXN0YXRlY2hhbmdlJztcbiAgICB2YXIgeERvbWFpbiA9IGZhbHNlO1xuXG4gICAgLy8gRm9yIElFIDgvOSBDT1JTIHN1cHBvcnRcbiAgICAvLyBPbmx5IHN1cHBvcnRzIFBPU1QgYW5kIEdFVCBjYWxscyBhbmQgZG9lc24ndCByZXR1cm5zIHRoZSByZXNwb25zZSBoZWFkZXJzLlxuICAgIC8vIERPTidUIGRvIHRoaXMgZm9yIHRlc3RpbmcgYi9jIFhNTEh0dHBSZXF1ZXN0IGlzIG1vY2tlZCwgbm90IFhEb21haW5SZXF1ZXN0LlxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnICYmXG4gICAgICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIHdpbmRvdy5YRG9tYWluUmVxdWVzdCAmJiAhKCd3aXRoQ3JlZGVudGlhbHMnIGluIHJlcXVlc3QpICYmXG4gICAgICAgICFpc1VSTFNhbWVPcmlnaW4oY29uZmlnLnVybCkpIHtcbiAgICAgIHJlcXVlc3QgPSBuZXcgd2luZG93LlhEb21haW5SZXF1ZXN0KCk7XG4gICAgICBsb2FkRXZlbnQgPSAnb25sb2FkJztcbiAgICAgIHhEb21haW4gPSB0cnVlO1xuICAgICAgcmVxdWVzdC5vbnByb2dyZXNzID0gZnVuY3Rpb24gaGFuZGxlUHJvZ3Jlc3MoKSB7fTtcbiAgICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHt9O1xuICAgIH1cblxuICAgIC8vIEhUVFAgYmFzaWMgYXV0aGVudGljYXRpb25cbiAgICBpZiAoY29uZmlnLmF1dGgpIHtcbiAgICAgIHZhciB1c2VybmFtZSA9IGNvbmZpZy5hdXRoLnVzZXJuYW1lIHx8ICcnO1xuICAgICAgdmFyIHBhc3N3b3JkID0gY29uZmlnLmF1dGgucGFzc3dvcmQgfHwgJyc7XG4gICAgICByZXF1ZXN0SGVhZGVycy5BdXRob3JpemF0aW9uID0gJ0Jhc2ljICcgKyBidG9hKHVzZXJuYW1lICsgJzonICsgcGFzc3dvcmQpO1xuICAgIH1cblxuICAgIHJlcXVlc3Qub3Blbihjb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCksIGJ1aWxkVVJMKGNvbmZpZy51cmwsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKSwgdHJ1ZSk7XG5cbiAgICAvLyBTZXQgdGhlIHJlcXVlc3QgdGltZW91dCBpbiBNU1xuICAgIHJlcXVlc3QudGltZW91dCA9IGNvbmZpZy50aW1lb3V0O1xuXG4gICAgLy8gTGlzdGVuIGZvciByZWFkeSBzdGF0ZVxuICAgIHJlcXVlc3RbbG9hZEV2ZW50XSA9IGZ1bmN0aW9uIGhhbmRsZUxvYWQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QgfHwgKHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCAmJiAheERvbWFpbikpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGUgcmVxdWVzdCBlcnJvcmVkIG91dCBhbmQgd2UgZGlkbid0IGdldCBhIHJlc3BvbnNlLCB0aGlzIHdpbGwgYmVcbiAgICAgIC8vIGhhbmRsZWQgYnkgb25lcnJvciBpbnN0ZWFkXG4gICAgICAvLyBXaXRoIG9uZSBleGNlcHRpb246IHJlcXVlc3QgdGhhdCB1c2luZyBmaWxlOiBwcm90b2NvbCwgbW9zdCBicm93c2Vyc1xuICAgICAgLy8gd2lsbCByZXR1cm4gc3RhdHVzIGFzIDAgZXZlbiB0aG91Z2ggaXQncyBhIHN1Y2Nlc3NmdWwgcmVxdWVzdFxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAwICYmICEocmVxdWVzdC5yZXNwb25zZVVSTCAmJiByZXF1ZXN0LnJlc3BvbnNlVVJMLmluZGV4T2YoJ2ZpbGU6JykgPT09IDApKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gUHJlcGFyZSB0aGUgcmVzcG9uc2VcbiAgICAgIHZhciByZXNwb25zZUhlYWRlcnMgPSAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBpbiByZXF1ZXN0ID8gcGFyc2VIZWFkZXJzKHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpIDogbnVsbDtcbiAgICAgIHZhciByZXNwb25zZURhdGEgPSAhY29uZmlnLnJlc3BvbnNlVHlwZSB8fCBjb25maWcucmVzcG9uc2VUeXBlID09PSAndGV4dCcgPyByZXF1ZXN0LnJlc3BvbnNlVGV4dCA6IHJlcXVlc3QucmVzcG9uc2U7XG4gICAgICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YSxcbiAgICAgICAgLy8gSUUgc2VuZHMgMTIyMyBpbnN0ZWFkIG9mIDIwNCAoaHR0cHM6Ly9naXRodWIuY29tL216YWJyaXNraWUvYXhpb3MvaXNzdWVzLzIwMSlcbiAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyA9PT0gMTIyMyA/IDIwNCA6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1cyA9PT0gMTIyMyA/ICdObyBDb250ZW50JyA6IHJlcXVlc3Quc3RhdHVzVGV4dCxcbiAgICAgICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdFxuICAgICAgfTtcblxuICAgICAgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGxvdyBsZXZlbCBuZXR3b3JrIGVycm9yc1xuICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uIGhhbmRsZUVycm9yKCkge1xuICAgICAgLy8gUmVhbCBlcnJvcnMgYXJlIGhpZGRlbiBmcm9tIHVzIGJ5IHRoZSBicm93c2VyXG4gICAgICAvLyBvbmVycm9yIHNob3VsZCBvbmx5IGZpcmUgaWYgaXQncyBhIG5ldHdvcmsgZXJyb3JcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignTmV0d29yayBFcnJvcicsIGNvbmZpZykpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIHRpbWVvdXRcbiAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7XG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ3RpbWVvdXQgb2YgJyArIGNvbmZpZy50aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJykpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgLy8gVGhpcyBpcyBvbmx5IGRvbmUgaWYgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnQuXG4gICAgLy8gU3BlY2lmaWNhbGx5IG5vdCBpZiB3ZSdyZSBpbiBhIHdlYiB3b3JrZXIsIG9yIHJlYWN0LW5hdGl2ZS5cbiAgICBpZiAodXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSkge1xuICAgICAgdmFyIGNvb2tpZXMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29va2llcycpO1xuXG4gICAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAgIHZhciB4c3JmVmFsdWUgPSAoY29uZmlnLndpdGhDcmVkZW50aWFscyB8fCBpc1VSTFNhbWVPcmlnaW4oY29uZmlnLnVybCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/XG4gICAgICAgICAgY29va2llcy5yZWFkKGNvbmZpZy54c3JmQ29va2llTmFtZSkgOlxuICAgICAgICAgIHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHhzcmZWYWx1ZSkge1xuICAgICAgICByZXF1ZXN0SGVhZGVyc1tjb25maWcueHNyZkhlYWRlck5hbWVdID0geHNyZlZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBoZWFkZXJzIHRvIHRoZSByZXF1ZXN0XG4gICAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiByZXF1ZXN0KSB7XG4gICAgICB1dGlscy5mb3JFYWNoKHJlcXVlc3RIZWFkZXJzLCBmdW5jdGlvbiBzZXRSZXF1ZXN0SGVhZGVyKHZhbCwga2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVxdWVzdERhdGEgPT09ICd1bmRlZmluZWQnICYmIGtleS50b0xvd2VyQ2FzZSgpID09PSAnY29udGVudC10eXBlJykge1xuICAgICAgICAgIC8vIFJlbW92ZSBDb250ZW50LVR5cGUgaWYgZGF0YSBpcyB1bmRlZmluZWRcbiAgICAgICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBPdGhlcndpc2UgYWRkIGhlYWRlciB0byB0aGUgcmVxdWVzdFxuICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZCB3aXRoQ3JlZGVudGlhbHMgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLndpdGhDcmVkZW50aWFscykge1xuICAgICAgcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBFeHBlY3RlZCBET01FeGNlcHRpb24gdGhyb3duIGJ5IGJyb3dzZXJzIG5vdCBjb21wYXRpYmxlIFhNTEh0dHBSZXF1ZXN0IExldmVsIDIuXG4gICAgICAgIC8vIEJ1dCwgdGhpcyBjYW4gYmUgc3VwcHJlc3NlZCBmb3IgJ2pzb24nIHR5cGUgYXMgaXQgY2FuIGJlIHBhcnNlZCBieSBkZWZhdWx0ICd0cmFuc2Zvcm1SZXNwb25zZScgZnVuY3Rpb24uXG4gICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpO1xuICAgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlcXVlc3REYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlcXVlc3REYXRhID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgcmVxdWVzdC5zZW5kKHJlcXVlc3REYXRhKTtcbiAgfSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG52YXIgQXhpb3MgPSByZXF1aXJlKCcuL2NvcmUvQXhpb3MnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICogQHJldHVybiB7QXhpb3N9IEEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRDb25maWcpIHtcbiAgdmFyIGNvbnRleHQgPSBuZXcgQXhpb3MoZGVmYXVsdENvbmZpZyk7XG4gIHZhciBpbnN0YW5jZSA9IGJpbmQoQXhpb3MucHJvdG90eXBlLnJlcXVlc3QsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgYXhpb3MucHJvdG90eXBlIHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgQXhpb3MucHJvdG90eXBlLCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGNvbnRleHQgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBjb250ZXh0KTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIENyZWF0ZSB0aGUgZGVmYXVsdCBpbnN0YW5jZSB0byBiZSBleHBvcnRlZFxudmFyIGF4aW9zID0gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdHMpO1xuXG4vLyBFeHBvc2UgQXhpb3MgY2xhc3MgdG8gYWxsb3cgY2xhc3MgaW5oZXJpdGFuY2VcbmF4aW9zLkF4aW9zID0gQXhpb3M7XG5cbi8vIEZhY3RvcnkgZm9yIGNyZWF0aW5nIG5ldyBpbnN0YW5jZXNcbmF4aW9zLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpbnN0YW5jZUNvbmZpZykge1xuICByZXR1cm4gY3JlYXRlSW5zdGFuY2UodXRpbHMubWVyZ2UoZGVmYXVsdHMsIGluc3RhbmNlQ29uZmlnKSk7XG59O1xuXG4vLyBFeHBvc2UgQ2FuY2VsICYgQ2FuY2VsVG9rZW5cbmF4aW9zLkNhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbCcpO1xuYXhpb3MuQ2FuY2VsVG9rZW4gPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWxUb2tlbicpO1xuYXhpb3MuaXNDYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9pc0NhbmNlbCcpO1xuXG4vLyBFeHBvc2UgYWxsL3NwcmVhZFxuYXhpb3MuYWxsID0gZnVuY3Rpb24gYWxsKHByb21pc2VzKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG59O1xuYXhpb3Muc3ByZWFkID0gcmVxdWlyZSgnLi9oZWxwZXJzL3NwcmVhZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGF4aW9zO1xuXG4vLyBBbGxvdyB1c2Ugb2YgZGVmYXVsdCBpbXBvcnQgc3ludGF4IGluIFR5cGVTY3JpcHRcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBheGlvcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYXhpb3MvbGliL2F4aW9zLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ2FuY2VsID0gcmVxdWlyZSgnLi9DYW5jZWwnKTtcblxuLyoqXG4gKiBBIGBDYW5jZWxUb2tlbmAgaXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVxdWVzdCBjYW5jZWxsYXRpb24gb2YgYW4gb3BlcmF0aW9uLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZXhlY3V0b3IgVGhlIGV4ZWN1dG9yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBDYW5jZWxUb2tlbihleGVjdXRvcikge1xuICBpZiAodHlwZW9mIGV4ZWN1dG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhlY3V0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdmFyIHJlc29sdmVQcm9taXNlO1xuICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiBwcm9taXNlRXhlY3V0b3IocmVzb2x2ZSkge1xuICAgIHJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTtcbiAgfSk7XG5cbiAgdmFyIHRva2VuID0gdGhpcztcbiAgZXhlY3V0b3IoZnVuY3Rpb24gY2FuY2VsKG1lc3NhZ2UpIHtcbiAgICBpZiAodG9rZW4ucmVhc29uKSB7XG4gICAgICAvLyBDYW5jZWxsYXRpb24gaGFzIGFscmVhZHkgYmVlbiByZXF1ZXN0ZWRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0b2tlbi5yZWFzb24gPSBuZXcgQ2FuY2VsKG1lc3NhZ2UpO1xuICAgIHJlc29sdmVQcm9taXNlKHRva2VuLnJlYXNvbik7XG4gIH0pO1xufVxuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbkNhbmNlbFRva2VuLnByb3RvdHlwZS50aHJvd0lmUmVxdWVzdGVkID0gZnVuY3Rpb24gdGhyb3dJZlJlcXVlc3RlZCgpIHtcbiAgaWYgKHRoaXMucmVhc29uKSB7XG4gICAgdGhyb3cgdGhpcy5yZWFzb247XG4gIH1cbn07XG5cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhIG5ldyBgQ2FuY2VsVG9rZW5gIGFuZCBhIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLFxuICogY2FuY2VscyB0aGUgYENhbmNlbFRva2VuYC5cbiAqL1xuQ2FuY2VsVG9rZW4uc291cmNlID0gZnVuY3Rpb24gc291cmNlKCkge1xuICB2YXIgY2FuY2VsO1xuICB2YXIgdG9rZW4gPSBuZXcgQ2FuY2VsVG9rZW4oZnVuY3Rpb24gZXhlY3V0b3IoYykge1xuICAgIGNhbmNlbCA9IGM7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHRva2VuOiB0b2tlbixcbiAgICBjYW5jZWw6IGNhbmNlbFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWxUb2tlbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYXhpb3MvbGliL2NhbmNlbC9DYW5jZWxUb2tlbi5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi8uLi9kZWZhdWx0cycpO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIEludGVyY2VwdG9yTWFuYWdlciA9IHJlcXVpcmUoJy4vSW50ZXJjZXB0b3JNYW5hZ2VyJyk7XG52YXIgZGlzcGF0Y2hSZXF1ZXN0ID0gcmVxdWlyZSgnLi9kaXNwYXRjaFJlcXVlc3QnKTtcbnZhciBpc0Fic29sdXRlVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwnKTtcbnZhciBjb21iaW5lVVJMcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb21iaW5lVVJMcycpO1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZUNvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBBeGlvcyhpbnN0YW5jZUNvbmZpZykge1xuICB0aGlzLmRlZmF1bHRzID0gaW5zdGFuY2VDb25maWc7XG4gIHRoaXMuaW50ZXJjZXB0b3JzID0ge1xuICAgIHJlcXVlc3Q6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKSxcbiAgICByZXNwb25zZTogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpXG4gIH07XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHNwZWNpZmljIGZvciB0aGlzIHJlcXVlc3QgKG1lcmdlZCB3aXRoIHRoaXMuZGVmYXVsdHMpXG4gKi9cbkF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gcmVxdWVzdChjb25maWcpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIC8vIEFsbG93IGZvciBheGlvcygnZXhhbXBsZS91cmwnWywgY29uZmlnXSkgYSBsYSBmZXRjaCBBUElcbiAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uZmlnID0gdXRpbHMubWVyZ2Uoe1xuICAgICAgdXJsOiBhcmd1bWVudHNbMF1cbiAgICB9LCBhcmd1bWVudHNbMV0pO1xuICB9XG5cbiAgY29uZmlnID0gdXRpbHMubWVyZ2UoZGVmYXVsdHMsIHRoaXMuZGVmYXVsdHMsIHsgbWV0aG9kOiAnZ2V0JyB9LCBjb25maWcpO1xuXG4gIC8vIFN1cHBvcnQgYmFzZVVSTCBjb25maWdcbiAgaWYgKGNvbmZpZy5iYXNlVVJMICYmICFpc0Fic29sdXRlVVJMKGNvbmZpZy51cmwpKSB7XG4gICAgY29uZmlnLnVybCA9IGNvbWJpbmVVUkxzKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcbiAgfVxuXG4gIC8vIEhvb2sgdXAgaW50ZXJjZXB0b3JzIG1pZGRsZXdhcmVcbiAgdmFyIGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdCwgdW5kZWZpbmVkXTtcbiAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uIHB1c2hSZXNwb25zZUludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcbiAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluLnNoaWZ0KCksIGNoYWluLnNoaWZ0KCkpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuXG4vLyBQcm92aWRlIGFsaWFzZXMgZm9yIHN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmxcbiAgICB9KSk7XG4gIH07XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF4aW9zO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9heGlvcy9saWIvY29yZS9BeGlvcy5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBJbnRlcmNlcHRvck1hbmFnZXIoKSB7XG4gIHRoaXMuaGFuZGxlcnMgPSBbXTtcbn1cblxuLyoqXG4gKiBBZGQgYSBuZXcgaW50ZXJjZXB0b3IgdG8gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVsZmlsbGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHRoZW5gIGZvciBhIGBQcm9taXNlYFxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0ZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgcmVqZWN0YCBmb3IgYSBgUHJvbWlzZWBcbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IEFuIElEIHVzZWQgdG8gcmVtb3ZlIGludGVyY2VwdG9yIGxhdGVyXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gdXNlKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpIHtcbiAgdGhpcy5oYW5kbGVycy5wdXNoKHtcbiAgICBmdWxmaWxsZWQ6IGZ1bGZpbGxlZCxcbiAgICByZWplY3RlZDogcmVqZWN0ZWRcbiAgfSk7XG4gIHJldHVybiB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbiBpbnRlcmNlcHRvciBmcm9tIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpZCBUaGUgSUQgdGhhdCB3YXMgcmV0dXJuZWQgYnkgYHVzZWBcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5lamVjdCA9IGZ1bmN0aW9uIGVqZWN0KGlkKSB7XG4gIGlmICh0aGlzLmhhbmRsZXJzW2lkXSkge1xuICAgIHRoaXMuaGFuZGxlcnNbaWRdID0gbnVsbDtcbiAgfVxufTtcblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYWxsIHRoZSByZWdpc3RlcmVkIGludGVyY2VwdG9yc1xuICpcbiAqIFRoaXMgbWV0aG9kIGlzIHBhcnRpY3VsYXJseSB1c2VmdWwgZm9yIHNraXBwaW5nIG92ZXIgYW55XG4gKiBpbnRlcmNlcHRvcnMgdGhhdCBtYXkgaGF2ZSBiZWNvbWUgYG51bGxgIGNhbGxpbmcgYGVqZWN0YC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCBpbnRlcmNlcHRvclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiBmb3JFYWNoKGZuKSB7XG4gIHV0aWxzLmZvckVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24gZm9yRWFjaEhhbmRsZXIoaCkge1xuICAgIGlmIChoICE9PSBudWxsKSB7XG4gICAgICBmbihoKTtcbiAgICB9XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnRlcmNlcHRvck1hbmFnZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2F4aW9zL2xpYi9jb3JlL0ludGVyY2VwdG9yTWFuYWdlci5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHRyYW5zZm9ybURhdGEgPSByZXF1aXJlKCcuL3RyYW5zZm9ybURhdGEnKTtcbnZhciBpc0NhbmNlbCA9IHJlcXVpcmUoJy4uL2NhbmNlbC9pc0NhbmNlbCcpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5mdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xuICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgY29uZmlnLmNhbmNlbFRva2VuLnRocm93SWZSZXF1ZXN0ZWQoKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmVkIGFkYXB0ZXIuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkaXNwYXRjaFJlcXVlc3QoY29uZmlnKSB7XG4gIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuICBjb25maWcuaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9O1xuXG4gIC8vIFRyYW5zZm9ybSByZXF1ZXN0IGRhdGFcbiAgY29uZmlnLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgIGNvbmZpZy5kYXRhLFxuICAgIGNvbmZpZy5oZWFkZXJzLFxuICAgIGNvbmZpZy50cmFuc2Zvcm1SZXF1ZXN0XG4gICk7XG5cbiAgLy8gRmxhdHRlbiBoZWFkZXJzXG4gIGNvbmZpZy5oZWFkZXJzID0gdXRpbHMubWVyZ2UoXG4gICAgY29uZmlnLmhlYWRlcnMuY29tbW9uIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzW2NvbmZpZy5tZXRob2RdIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzIHx8IHt9XG4gICk7XG5cbiAgdXRpbHMuZm9yRWFjaChcbiAgICBbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb21tb24nXSxcbiAgICBmdW5jdGlvbiBjbGVhbkhlYWRlckNvbmZpZyhtZXRob2QpIHtcbiAgICAgIGRlbGV0ZSBjb25maWcuaGVhZGVyc1ttZXRob2RdO1xuICAgIH1cbiAgKTtcblxuICB2YXIgYWRhcHRlciA9IGNvbmZpZy5hZGFwdGVyIHx8IGRlZmF1bHRzLmFkYXB0ZXI7XG5cbiAgcmV0dXJuIGFkYXB0ZXIoY29uZmlnKS50aGVuKGZ1bmN0aW9uIG9uQWRhcHRlclJlc29sdXRpb24ocmVzcG9uc2UpIHtcbiAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgIHJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgcmVzcG9uc2UuZGF0YSxcbiAgICAgIHJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9LCBmdW5jdGlvbiBvbkFkYXB0ZXJSZWplY3Rpb24ocmVhc29uKSB7XG4gICAgaWYgKCFpc0NhbmNlbChyZWFzb24pKSB7XG4gICAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5yZXNwb25zZSkge1xuICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBiZSB0cmFuc2Zvcm1lZFxuICogQHBhcmFtIHtBcnJheX0gaGVhZGVycyBUaGUgaGVhZGVycyBmb3IgdGhlIHJlcXVlc3Qgb3IgcmVzcG9uc2VcbiAqIEBwYXJhbSB7QXJyYXl8RnVuY3Rpb259IGZucyBBIHNpbmdsZSBmdW5jdGlvbiBvciBBcnJheSBvZiBmdW5jdGlvbnNcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHRyYW5zZm9ybWVkIGRhdGFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGRhdGEsIGhlYWRlcnMsIGZucykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuICAgIGRhdGEgPSBmbihkYXRhLCBoZWFkZXJzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9heGlvcy9saWIvY29yZS90cmFuc2Zvcm1EYXRhLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBidG9hIHBvbHlmaWxsIGZvciBJRTwxMCBjb3VydGVzeSBodHRwczovL2dpdGh1Yi5jb20vZGF2aWRjaGFtYmVycy9CYXNlNjQuanNcblxudmFyIGNoYXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89JztcblxuZnVuY3Rpb24gRSgpIHtcbiAgdGhpcy5tZXNzYWdlID0gJ1N0cmluZyBjb250YWlucyBhbiBpbnZhbGlkIGNoYXJhY3Rlcic7XG59XG5FLnByb3RvdHlwZSA9IG5ldyBFcnJvcjtcbkUucHJvdG90eXBlLmNvZGUgPSA1O1xuRS5wcm90b3R5cGUubmFtZSA9ICdJbnZhbGlkQ2hhcmFjdGVyRXJyb3InO1xuXG5mdW5jdGlvbiBidG9hKGlucHV0KSB7XG4gIHZhciBzdHIgPSBTdHJpbmcoaW5wdXQpO1xuICB2YXIgb3V0cHV0ID0gJyc7XG4gIGZvciAoXG4gICAgLy8gaW5pdGlhbGl6ZSByZXN1bHQgYW5kIGNvdW50ZXJcbiAgICB2YXIgYmxvY2ssIGNoYXJDb2RlLCBpZHggPSAwLCBtYXAgPSBjaGFycztcbiAgICAvLyBpZiB0aGUgbmV4dCBzdHIgaW5kZXggZG9lcyBub3QgZXhpc3Q6XG4gICAgLy8gICBjaGFuZ2UgdGhlIG1hcHBpbmcgdGFibGUgdG8gXCI9XCJcbiAgICAvLyAgIGNoZWNrIGlmIGQgaGFzIG5vIGZyYWN0aW9uYWwgZGlnaXRzXG4gICAgc3RyLmNoYXJBdChpZHggfCAwKSB8fCAobWFwID0gJz0nLCBpZHggJSAxKTtcbiAgICAvLyBcIjggLSBpZHggJSAxICogOFwiIGdlbmVyYXRlcyB0aGUgc2VxdWVuY2UgMiwgNCwgNiwgOFxuICAgIG91dHB1dCArPSBtYXAuY2hhckF0KDYzICYgYmxvY2sgPj4gOCAtIGlkeCAlIDEgKiA4KVxuICApIHtcbiAgICBjaGFyQ29kZSA9IHN0ci5jaGFyQ29kZUF0KGlkeCArPSAzIC8gNCk7XG4gICAgaWYgKGNoYXJDb2RlID4gMHhGRikge1xuICAgICAgdGhyb3cgbmV3IEUoKTtcbiAgICB9XG4gICAgYmxvY2sgPSBibG9jayA8PCA4IHwgY2hhckNvZGU7XG4gIH1cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBidG9hO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9heGlvcy9saWIvaGVscGVycy9idG9hLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgc3BlY2lmaWVkIFVSTHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTCBUaGUgcmVsYXRpdmUgVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgVVJMXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVsYXRpdmVVUkwpIHtcbiAgcmV0dXJuIHJlbGF0aXZlVVJMXG4gICAgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLyskLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJylcbiAgICA6IGJhc2VVUkw7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIHN1cHBvcnQgZG9jdW1lbnQuY29va2llXG4gIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpIHtcbiAgICAgICAgdmFyIGNvb2tpZSA9IFtdO1xuICAgICAgICBjb29raWUucHVzaChuYW1lICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzTnVtYmVyKGV4cGlyZXMpKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ2V4cGlyZXM9JyArIG5ldyBEYXRlKGV4cGlyZXMpLnRvR01UU3RyaW5nKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ3BhdGg9JyArIHBhdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRvbWFpbikpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnZG9tYWluPScgKyBkb21haW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlY3VyZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdzZWN1cmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5qb2luKCc7ICcpO1xuICAgICAgfSxcblxuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChuYW1lKSB7XG4gICAgICAgIHZhciBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICAgIHJldHVybiAobWF0Y2ggPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbM10pIDogbnVsbCk7XG4gICAgICB9LFxuXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgICAgIHRoaXMud3JpdGUobmFtZSwgJycsIERhdGUubm93KCkgLSA4NjQwMDAwMCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52ICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHJldHVybiB7XG4gICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUoKSB7fSxcbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQoKSB7IHJldHVybiBudWxsOyB9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH0pKClcbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanMiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0Fic29sdXRlVVJMKHVybCkge1xuICAvLyBBIFVSTCBpcyBjb25zaWRlcmVkIGFic29sdXRlIGlmIGl0IGJlZ2lucyB3aXRoIFwiPHNjaGVtZT46Ly9cIiBvciBcIi8vXCIgKHByb3RvY29sLXJlbGF0aXZlIFVSTCkuXG4gIC8vIFJGQyAzOTg2IGRlZmluZXMgc2NoZW1lIG5hbWUgYXMgYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIGJlZ2lubmluZyB3aXRoIGEgbGV0dGVyIGFuZCBmb2xsb3dlZFxuICAvLyBieSBhbnkgY29tYmluYXRpb24gb2YgbGV0dGVycywgZGlnaXRzLCBwbHVzLCBwZXJpb2QsIG9yIGh5cGhlbi5cbiAgcmV0dXJuIC9eKFthLXpdW2EtelxcZFxcK1xcLVxcLl0qOik/XFwvXFwvL2kudGVzdCh1cmwpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIGhhdmUgZnVsbCBzdXBwb3J0IG9mIHRoZSBBUElzIG5lZWRlZCB0byB0ZXN0XG4gIC8vIHdoZXRoZXIgdGhlIHJlcXVlc3QgVVJMIGlzIG9mIHRoZSBzYW1lIG9yaWdpbiBhcyBjdXJyZW50IGxvY2F0aW9uLlxuICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHZhciBtc2llID0gLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICB2YXIgdXJsUGFyc2luZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgdmFyIG9yaWdpblVSTDtcblxuICAgIC8qKlxuICAgICogUGFyc2UgYSBVUkwgdG8gZGlzY292ZXIgaXQncyBjb21wb25lbnRzXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIHBhcnNlZFxuICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAqL1xuICAgIGZ1bmN0aW9uIHJlc29sdmVVUkwodXJsKSB7XG4gICAgICB2YXIgaHJlZiA9IHVybDtcblxuICAgICAgaWYgKG1zaWUpIHtcbiAgICAgICAgLy8gSUUgbmVlZHMgYXR0cmlidXRlIHNldCB0d2ljZSB0byBub3JtYWxpemUgcHJvcGVydGllc1xuICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcbiAgICAgICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gICAgICB9XG5cbiAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuXG4gICAgICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gICAgICByZXR1cm4ge1xuICAgICAgICBocmVmOiB1cmxQYXJzaW5nTm9kZS5ocmVmLFxuICAgICAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgICAgICBob3N0OiB1cmxQYXJzaW5nTm9kZS5ob3N0LFxuICAgICAgICBzZWFyY2g6IHVybFBhcnNpbmdOb2RlLnNlYXJjaCA/IHVybFBhcnNpbmdOb2RlLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpIDogJycsXG4gICAgICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgICAgIGhvc3RuYW1lOiB1cmxQYXJzaW5nTm9kZS5ob3N0bmFtZSxcbiAgICAgICAgcG9ydDogdXJsUGFyc2luZ05vZGUucG9ydCxcbiAgICAgICAgcGF0aG5hbWU6ICh1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJykgP1xuICAgICAgICAgICAgICAgICAgdXJsUGFyc2luZ05vZGUucGF0aG5hbWUgOlxuICAgICAgICAgICAgICAgICAgJy8nICsgdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcbiAgICAgIH07XG4gICAgfVxuXG4gICAgb3JpZ2luVVJMID0gcmVzb2x2ZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cbiAgICAvKipcbiAgICAqIERldGVybWluZSBpZiBhIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luIGFzIHRoZSBjdXJyZW50IGxvY2F0aW9uXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RVUkwgVGhlIFVSTCB0byB0ZXN0XG4gICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgKi9cbiAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKHJlcXVlc3RVUkwpIHtcbiAgICAgIHZhciBwYXJzZWQgPSAodXRpbHMuaXNTdHJpbmcocmVxdWVzdFVSTCkpID8gcmVzb2x2ZVVSTChyZXF1ZXN0VVJMKSA6IHJlcXVlc3RVUkw7XG4gICAgICByZXR1cm4gKHBhcnNlZC5wcm90b2NvbCA9PT0gb3JpZ2luVVJMLnByb3RvY29sICYmXG4gICAgICAgICAgICBwYXJzZWQuaG9zdCA9PT0gb3JpZ2luVVJMLmhvc3QpO1xuICAgIH07XG4gIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudnMgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbigpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gIH0pKClcbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsIG5vcm1hbGl6ZWROYW1lKSB7XG4gIHV0aWxzLmZvckVhY2goaGVhZGVycywgZnVuY3Rpb24gcHJvY2Vzc0hlYWRlcih2YWx1ZSwgbmFtZSkge1xuICAgIGlmIChuYW1lICE9PSBub3JtYWxpemVkTmFtZSAmJiBuYW1lLnRvVXBwZXJDYXNlKCkgPT09IG5vcm1hbGl6ZWROYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICBkZWxldGUgaGVhZGVyc1tuYW1lXTtcbiAgICB9XG4gIH0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vKipcbiAqIFBhcnNlIGhlYWRlcnMgaW50byBhbiBvYmplY3RcbiAqXG4gKiBgYGBcbiAqIERhdGU6IFdlZCwgMjcgQXVnIDIwMTQgMDg6NTg6NDkgR01UXG4gKiBDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cbiAqIENvbm5lY3Rpb246IGtlZXAtYWxpdmVcbiAqIFRyYW5zZmVyLUVuY29kaW5nOiBjaHVua2VkXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaGVhZGVycyBIZWFkZXJzIG5lZWRpbmcgdG8gYmUgcGFyc2VkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBIZWFkZXJzIHBhcnNlZCBpbnRvIGFuIG9iamVjdFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhoZWFkZXJzKSB7XG4gIHZhciBwYXJzZWQgPSB7fTtcbiAgdmFyIGtleTtcbiAgdmFyIHZhbDtcbiAgdmFyIGk7XG5cbiAgaWYgKCFoZWFkZXJzKSB7IHJldHVybiBwYXJzZWQ7IH1cblxuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMuc3BsaXQoJ1xcbicpLCBmdW5jdGlvbiBwYXJzZXIobGluZSkge1xuICAgIGkgPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBrZXkgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKDAsIGkpKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhbCA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoaSArIDEpKTtcblxuICAgIGlmIChrZXkpIHtcbiAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFyc2VkO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFN5bnRhY3RpYyBzdWdhciBmb3IgaW52b2tpbmcgYSBmdW5jdGlvbiBhbmQgZXhwYW5kaW5nIGFuIGFycmF5IGZvciBhcmd1bWVudHMuXG4gKlxuICogQ29tbW9uIHVzZSBjYXNlIHdvdWxkIGJlIHRvIHVzZSBgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5YC5cbiAqXG4gKiAgYGBganNcbiAqICBmdW5jdGlvbiBmKHgsIHksIHopIHt9XG4gKiAgdmFyIGFyZ3MgPSBbMSwgMiwgM107XG4gKiAgZi5hcHBseShudWxsLCBhcmdzKTtcbiAqICBgYGBcbiAqXG4gKiBXaXRoIGBzcHJlYWRgIHRoaXMgZXhhbXBsZSBjYW4gYmUgcmUtd3JpdHRlbi5cbiAqXG4gKiAgYGBganNcbiAqICBzcHJlYWQoZnVuY3Rpb24oeCwgeSwgeikge30pKFsxLCAyLCAzXSk7XG4gKiAgYGBgXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzcHJlYWQoY2FsbGJhY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoYXJyKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFycik7XG4gIH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMiLCIvKipcbiAqIEhlbHBlcnMuXG4gKi9cblxudmFyIHMgPSAxMDAwXG52YXIgbSA9IHMgKiA2MFxudmFyIGggPSBtICogNjBcbnZhciBkID0gaCAqIDI0XG52YXIgeSA9IGQgKiAzNjUuMjVcblxuLyoqXG4gKiBQYXJzZSBvciBmb3JtYXQgdGhlIGdpdmVuIGB2YWxgLlxuICpcbiAqIE9wdGlvbnM6XG4gKlxuICogIC0gYGxvbmdgIHZlcmJvc2UgZm9ybWF0dGluZyBbZmFsc2VdXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSB2YWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEB0aHJvd3Mge0Vycm9yfSB0aHJvdyBhbiBlcnJvciBpZiB2YWwgaXMgbm90IGEgbm9uLWVtcHR5IHN0cmluZyBvciBhIG51bWJlclxuICogQHJldHVybiB7U3RyaW5nfE51bWJlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbFxuICBpZiAodHlwZSA9PT0gJ3N0cmluZycgJiYgdmFsLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gcGFyc2UodmFsKVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInICYmIGlzTmFOKHZhbCkgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMubG9uZyA/XG5cdFx0XHRmbXRMb25nKHZhbCkgOlxuXHRcdFx0Zm10U2hvcnQodmFsKVxuICB9XG4gIHRocm93IG5ldyBFcnJvcigndmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSB2YWxpZCBudW1iZXIuIHZhbD0nICsgSlNPTi5zdHJpbmdpZnkodmFsKSlcbn1cblxuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gYHN0cmAgYW5kIHJldHVybiBtaWxsaXNlY29uZHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7TnVtYmVyfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcGFyc2Uoc3RyKSB7XG4gIHN0ciA9IFN0cmluZyhzdHIpXG4gIGlmIChzdHIubGVuZ3RoID4gMTAwMDApIHtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgbWF0Y2ggPSAvXigoPzpcXGQrKT9cXC4/XFxkKykgKihtaWxsaXNlY29uZHM/fG1zZWNzP3xtc3xzZWNvbmRzP3xzZWNzP3xzfG1pbnV0ZXM/fG1pbnM/fG18aG91cnM/fGhycz98aHxkYXlzP3xkfHllYXJzP3x5cnM/fHkpPyQvaS5leGVjKHN0cilcbiAgaWYgKCFtYXRjaCkge1xuICAgIHJldHVyblxuICB9XG4gIHZhciBuID0gcGFyc2VGbG9hdChtYXRjaFsxXSlcbiAgdmFyIHR5cGUgPSAobWF0Y2hbMl0gfHwgJ21zJykudG9Mb3dlckNhc2UoKVxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICd5ZWFycyc6XG4gICAgY2FzZSAneWVhcic6XG4gICAgY2FzZSAneXJzJzpcbiAgICBjYXNlICd5cic6XG4gICAgY2FzZSAneSc6XG4gICAgICByZXR1cm4gbiAqIHlcbiAgICBjYXNlICdkYXlzJzpcbiAgICBjYXNlICdkYXknOlxuICAgIGNhc2UgJ2QnOlxuICAgICAgcmV0dXJuIG4gKiBkXG4gICAgY2FzZSAnaG91cnMnOlxuICAgIGNhc2UgJ2hvdXInOlxuICAgIGNhc2UgJ2hycyc6XG4gICAgY2FzZSAnaHInOlxuICAgIGNhc2UgJ2gnOlxuICAgICAgcmV0dXJuIG4gKiBoXG4gICAgY2FzZSAnbWludXRlcyc6XG4gICAgY2FzZSAnbWludXRlJzpcbiAgICBjYXNlICdtaW5zJzpcbiAgICBjYXNlICdtaW4nOlxuICAgIGNhc2UgJ20nOlxuICAgICAgcmV0dXJuIG4gKiBtXG4gICAgY2FzZSAnc2Vjb25kcyc6XG4gICAgY2FzZSAnc2Vjb25kJzpcbiAgICBjYXNlICdzZWNzJzpcbiAgICBjYXNlICdzZWMnOlxuICAgIGNhc2UgJ3MnOlxuICAgICAgcmV0dXJuIG4gKiBzXG4gICAgY2FzZSAnbWlsbGlzZWNvbmRzJzpcbiAgICBjYXNlICdtaWxsaXNlY29uZCc6XG4gICAgY2FzZSAnbXNlY3MnOlxuICAgIGNhc2UgJ21zZWMnOlxuICAgIGNhc2UgJ21zJzpcbiAgICAgIHJldHVybiBuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxufVxuXG4vKipcbiAqIFNob3J0IGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdFNob3J0KG1zKSB7XG4gIGlmIChtcyA+PSBkKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBkKSArICdkJ1xuICB9XG4gIGlmIChtcyA+PSBoKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBoKSArICdoJ1xuICB9XG4gIGlmIChtcyA+PSBtKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBtKSArICdtJ1xuICB9XG4gIGlmIChtcyA+PSBzKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBzKSArICdzJ1xuICB9XG4gIHJldHVybiBtcyArICdtcydcbn1cblxuLyoqXG4gKiBMb25nIGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdExvbmcobXMpIHtcbiAgcmV0dXJuIHBsdXJhbChtcywgZCwgJ2RheScpIHx8XG4gICAgcGx1cmFsKG1zLCBoLCAnaG91cicpIHx8XG4gICAgcGx1cmFsKG1zLCBtLCAnbWludXRlJykgfHxcbiAgICBwbHVyYWwobXMsIHMsICdzZWNvbmQnKSB8fFxuICAgIG1zICsgJyBtcydcbn1cblxuLyoqXG4gKiBQbHVyYWxpemF0aW9uIGhlbHBlci5cbiAqL1xuXG5mdW5jdGlvbiBwbHVyYWwobXMsIG4sIG5hbWUpIHtcbiAgaWYgKG1zIDwgbikge1xuICAgIHJldHVyblxuICB9XG4gIGlmIChtcyA8IG4gKiAxLjUpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihtcyAvIG4pICsgJyAnICsgbmFtZVxuICB9XG4gIHJldHVybiBNYXRoLmNlaWwobXMgLyBuKSArICcgJyArIG5hbWUgKyAncydcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vZGVidWcvfi9tcy9pbmRleC5qcyIsIi8qKlxuICogVGhpcyBpcyB0aGUgd2ViIGJyb3dzZXIgaW1wbGVtZW50YXRpb24gb2YgYGRlYnVnKClgLlxuICpcbiAqIEV4cG9zZSBgZGVidWcoKWAgYXMgdGhlIG1vZHVsZS5cbiAqL1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2RlYnVnJyk7XG5leHBvcnRzLmxvZyA9IGxvZztcbmV4cG9ydHMuZm9ybWF0QXJncyA9IGZvcm1hdEFyZ3M7XG5leHBvcnRzLnNhdmUgPSBzYXZlO1xuZXhwb3J0cy5sb2FkID0gbG9hZDtcbmV4cG9ydHMudXNlQ29sb3JzID0gdXNlQ29sb3JzO1xuZXhwb3J0cy5zdG9yYWdlID0gJ3VuZGVmaW5lZCcgIT0gdHlwZW9mIGNocm9tZVxuICAgICAgICAgICAgICAgJiYgJ3VuZGVmaW5lZCcgIT0gdHlwZW9mIGNocm9tZS5zdG9yYWdlXG4gICAgICAgICAgICAgICAgICA/IGNocm9tZS5zdG9yYWdlLmxvY2FsXG4gICAgICAgICAgICAgICAgICA6IGxvY2Fsc3RvcmFnZSgpO1xuXG4vKipcbiAqIENvbG9ycy5cbiAqL1xuXG5leHBvcnRzLmNvbG9ycyA9IFtcbiAgJ2xpZ2h0c2VhZ3JlZW4nLFxuICAnZm9yZXN0Z3JlZW4nLFxuICAnZ29sZGVucm9kJyxcbiAgJ2RvZGdlcmJsdWUnLFxuICAnZGFya29yY2hpZCcsXG4gICdjcmltc29uJ1xuXTtcblxuLyoqXG4gKiBDdXJyZW50bHkgb25seSBXZWJLaXQtYmFzZWQgV2ViIEluc3BlY3RvcnMsIEZpcmVmb3ggPj0gdjMxLFxuICogYW5kIHRoZSBGaXJlYnVnIGV4dGVuc2lvbiAoYW55IEZpcmVmb3ggdmVyc2lvbikgYXJlIGtub3duXG4gKiB0byBzdXBwb3J0IFwiJWNcIiBDU1MgY3VzdG9taXphdGlvbnMuXG4gKlxuICogVE9ETzogYWRkIGEgYGxvY2FsU3RvcmFnZWAgdmFyaWFibGUgdG8gZXhwbGljaXRseSBlbmFibGUvZGlzYWJsZSBjb2xvcnNcbiAqL1xuXG5mdW5jdGlvbiB1c2VDb2xvcnMoKSB7XG4gIC8vIE5COiBJbiBhbiBFbGVjdHJvbiBwcmVsb2FkIHNjcmlwdCwgZG9jdW1lbnQgd2lsbCBiZSBkZWZpbmVkIGJ1dCBub3QgZnVsbHlcbiAgLy8gaW5pdGlhbGl6ZWQuIFNpbmNlIHdlIGtub3cgd2UncmUgaW4gQ2hyb21lLCB3ZSdsbCBqdXN0IGRldGVjdCB0aGlzIGNhc2VcbiAgLy8gZXhwbGljaXRseVxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnByb2Nlc3MgJiYgd2luZG93LnByb2Nlc3MudHlwZSA9PT0gJ3JlbmRlcmVyJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gaXMgd2Via2l0PyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNjQ1OTYwNi8zNzY3NzNcbiAgLy8gZG9jdW1lbnQgaXMgdW5kZWZpbmVkIGluIHJlYWN0LW5hdGl2ZTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0LW5hdGl2ZS9wdWxsLzE2MzJcbiAgcmV0dXJuICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLldlYmtpdEFwcGVhcmFuY2UpIHx8XG4gICAgLy8gaXMgZmlyZWJ1Zz8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzk4MTIwLzM3Njc3M1xuICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cgJiYgd2luZG93LmNvbnNvbGUgJiYgKHdpbmRvdy5jb25zb2xlLmZpcmVidWcgfHwgKHdpbmRvdy5jb25zb2xlLmV4Y2VwdGlvbiAmJiB3aW5kb3cuY29uc29sZS50YWJsZSkpKSB8fFxuICAgIC8vIGlzIGZpcmVmb3ggPj0gdjMxP1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvVG9vbHMvV2ViX0NvbnNvbGUjU3R5bGluZ19tZXNzYWdlc1xuICAgICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2ZpcmVmb3hcXC8oXFxkKykvKSAmJiBwYXJzZUludChSZWdFeHAuJDEsIDEwKSA+PSAzMSkgfHxcbiAgICAvLyBkb3VibGUgY2hlY2sgd2Via2l0IGluIHVzZXJBZ2VudCBqdXN0IGluIGNhc2Ugd2UgYXJlIGluIGEgd29ya2VyXG4gICAgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvYXBwbGV3ZWJraXRcXC8oXFxkKykvKSk7XG59XG5cbi8qKlxuICogTWFwICVqIHRvIGBKU09OLnN0cmluZ2lmeSgpYCwgc2luY2Ugbm8gV2ViIEluc3BlY3RvcnMgZG8gdGhhdCBieSBkZWZhdWx0LlxuICovXG5cbmV4cG9ydHMuZm9ybWF0dGVycy5qID0gZnVuY3Rpb24odikge1xuICB0cnkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuICdbVW5leHBlY3RlZEpTT05QYXJzZUVycm9yXTogJyArIGVyci5tZXNzYWdlO1xuICB9XG59O1xuXG5cbi8qKlxuICogQ29sb3JpemUgbG9nIGFyZ3VtZW50cyBpZiBlbmFibGVkLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0QXJncyhhcmdzKSB7XG4gIHZhciB1c2VDb2xvcnMgPSB0aGlzLnVzZUNvbG9ycztcblxuICBhcmdzWzBdID0gKHVzZUNvbG9ycyA/ICclYycgOiAnJylcbiAgICArIHRoaXMubmFtZXNwYWNlXG4gICAgKyAodXNlQ29sb3JzID8gJyAlYycgOiAnICcpXG4gICAgKyBhcmdzWzBdXG4gICAgKyAodXNlQ29sb3JzID8gJyVjICcgOiAnICcpXG4gICAgKyAnKycgKyBleHBvcnRzLmh1bWFuaXplKHRoaXMuZGlmZik7XG5cbiAgaWYgKCF1c2VDb2xvcnMpIHJldHVybjtcblxuICB2YXIgYyA9ICdjb2xvcjogJyArIHRoaXMuY29sb3I7XG4gIGFyZ3Muc3BsaWNlKDEsIDAsIGMsICdjb2xvcjogaW5oZXJpdCcpXG5cbiAgLy8gdGhlIGZpbmFsIFwiJWNcIiBpcyBzb21ld2hhdCB0cmlja3ksIGJlY2F1c2UgdGhlcmUgY291bGQgYmUgb3RoZXJcbiAgLy8gYXJndW1lbnRzIHBhc3NlZCBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIHRoZSAlYywgc28gd2UgbmVlZCB0b1xuICAvLyBmaWd1cmUgb3V0IHRoZSBjb3JyZWN0IGluZGV4IHRvIGluc2VydCB0aGUgQ1NTIGludG9cbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxhc3RDID0gMDtcbiAgYXJnc1swXS5yZXBsYWNlKC8lW2EtekEtWiVdL2csIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgaWYgKCclJScgPT09IG1hdGNoKSByZXR1cm47XG4gICAgaW5kZXgrKztcbiAgICBpZiAoJyVjJyA9PT0gbWF0Y2gpIHtcbiAgICAgIC8vIHdlIG9ubHkgYXJlIGludGVyZXN0ZWQgaW4gdGhlICpsYXN0KiAlY1xuICAgICAgLy8gKHRoZSB1c2VyIG1heSBoYXZlIHByb3ZpZGVkIHRoZWlyIG93bilcbiAgICAgIGxhc3RDID0gaW5kZXg7XG4gICAgfVxuICB9KTtcblxuICBhcmdzLnNwbGljZShsYXN0QywgMCwgYyk7XG59XG5cbi8qKlxuICogSW52b2tlcyBgY29uc29sZS5sb2coKWAgd2hlbiBhdmFpbGFibGUuXG4gKiBOby1vcCB3aGVuIGBjb25zb2xlLmxvZ2AgaXMgbm90IGEgXCJmdW5jdGlvblwiLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gbG9nKCkge1xuICAvLyB0aGlzIGhhY2tlcnkgaXMgcmVxdWlyZWQgZm9yIElFOC85LCB3aGVyZVxuICAvLyB0aGUgYGNvbnNvbGUubG9nYCBmdW5jdGlvbiBkb2Vzbid0IGhhdmUgJ2FwcGx5J1xuICByZXR1cm4gJ29iamVjdCcgPT09IHR5cGVvZiBjb25zb2xlXG4gICAgJiYgY29uc29sZS5sb2dcbiAgICAmJiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlLmxvZywgY29uc29sZSwgYXJndW1lbnRzKTtcbn1cblxuLyoqXG4gKiBTYXZlIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gc2F2ZShuYW1lc3BhY2VzKSB7XG4gIHRyeSB7XG4gICAgaWYgKG51bGwgPT0gbmFtZXNwYWNlcykge1xuICAgICAgZXhwb3J0cy5zdG9yYWdlLnJlbW92ZUl0ZW0oJ2RlYnVnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4cG9ydHMuc3RvcmFnZS5kZWJ1ZyA9IG5hbWVzcGFjZXM7XG4gICAgfVxuICB9IGNhdGNoKGUpIHt9XG59XG5cbi8qKlxuICogTG9hZCBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHJldHVybiB7U3RyaW5nfSByZXR1cm5zIHRoZSBwcmV2aW91c2x5IHBlcnNpc3RlZCBkZWJ1ZyBtb2Rlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbG9hZCgpIHtcbiAgdmFyIHI7XG4gIHRyeSB7XG4gICAgciA9IGV4cG9ydHMuc3RvcmFnZS5kZWJ1ZztcbiAgfSBjYXRjaChlKSB7fVxuXG4gIC8vIElmIGRlYnVnIGlzbid0IHNldCBpbiBMUywgYW5kIHdlJ3JlIGluIEVsZWN0cm9uLCB0cnkgdG8gbG9hZCAkREVCVUdcbiAgaWYgKCFyICYmIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiAnZW52JyBpbiBwcm9jZXNzKSB7XG4gICAgciA9IHByb2Nlc3MuZW52LkRFQlVHO1xuICB9XG5cbiAgcmV0dXJuIHI7XG59XG5cbi8qKlxuICogRW5hYmxlIG5hbWVzcGFjZXMgbGlzdGVkIGluIGBsb2NhbFN0b3JhZ2UuZGVidWdgIGluaXRpYWxseS5cbiAqL1xuXG5leHBvcnRzLmVuYWJsZShsb2FkKCkpO1xuXG4vKipcbiAqIExvY2Fsc3RvcmFnZSBhdHRlbXB0cyB0byByZXR1cm4gdGhlIGxvY2Fsc3RvcmFnZS5cbiAqXG4gKiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHNhZmFyaSB0aHJvd3NcbiAqIHdoZW4gYSB1c2VyIGRpc2FibGVzIGNvb2tpZXMvbG9jYWxzdG9yYWdlXG4gKiBhbmQgeW91IGF0dGVtcHQgdG8gYWNjZXNzIGl0LlxuICpcbiAqIEByZXR1cm4ge0xvY2FsU3RvcmFnZX1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGxvY2Fsc3RvcmFnZSgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZTtcbiAgfSBjYXRjaCAoZSkge31cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vZGVidWcvc3JjL2Jyb3dzZXIuanMiLCIvKipcbiAqIERldGVjdCBFbGVjdHJvbiByZW5kZXJlciBwcm9jZXNzLCB3aGljaCBpcyBub2RlLCBidXQgd2Ugc2hvdWxkXG4gKiB0cmVhdCBhcyBhIGJyb3dzZXIuXG4gKi9cblxuaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBwcm9jZXNzLnR5cGUgPT09ICdyZW5kZXJlcicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Jyb3dzZXIuanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9ub2RlLmpzJyk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2RlYnVnL3NyYy9pbmRleC5qcyIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgdHR5ID0gcmVxdWlyZSgndHR5Jyk7XG52YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcblxuLyoqXG4gKiBUaGlzIGlzIHRoZSBOb2RlLmpzIGltcGxlbWVudGF0aW9uIG9mIGBkZWJ1ZygpYC5cbiAqXG4gKiBFeHBvc2UgYGRlYnVnKClgIGFzIHRoZSBtb2R1bGUuXG4gKi9cblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kZWJ1ZycpO1xuZXhwb3J0cy5pbml0ID0gaW5pdDtcbmV4cG9ydHMubG9nID0gbG9nO1xuZXhwb3J0cy5mb3JtYXRBcmdzID0gZm9ybWF0QXJncztcbmV4cG9ydHMuc2F2ZSA9IHNhdmU7XG5leHBvcnRzLmxvYWQgPSBsb2FkO1xuZXhwb3J0cy51c2VDb2xvcnMgPSB1c2VDb2xvcnM7XG5cbi8qKlxuICogQ29sb3JzLlxuICovXG5cbmV4cG9ydHMuY29sb3JzID0gWzYsIDIsIDMsIDQsIDUsIDFdO1xuXG4vKipcbiAqIEJ1aWxkIHVwIHRoZSBkZWZhdWx0IGBpbnNwZWN0T3B0c2Agb2JqZWN0IGZyb20gdGhlIGVudmlyb25tZW50IHZhcmlhYmxlcy5cbiAqXG4gKiAgICQgREVCVUdfQ09MT1JTPW5vIERFQlVHX0RFUFRIPTEwIERFQlVHX1NIT1dfSElEREVOPWVuYWJsZWQgbm9kZSBzY3JpcHQuanNcbiAqL1xuXG5leHBvcnRzLmluc3BlY3RPcHRzID0gT2JqZWN0LmtleXMocHJvY2Vzcy5lbnYpLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAvXmRlYnVnXy9pLnRlc3Qoa2V5KTtcbn0pLnJlZHVjZShmdW5jdGlvbiAob2JqLCBrZXkpIHtcbiAgLy8gY2FtZWwtY2FzZVxuICB2YXIgcHJvcCA9IGtleVxuICAgIC5zdWJzdHJpbmcoNilcbiAgICAudG9Mb3dlckNhc2UoKVxuICAgIC5yZXBsYWNlKC9fKFthLXpdKS9nLCBmdW5jdGlvbiAoXywgaykgeyByZXR1cm4gay50b1VwcGVyQ2FzZSgpIH0pO1xuXG4gIC8vIGNvZXJjZSBzdHJpbmcgdmFsdWUgaW50byBKUyB2YWx1ZVxuICB2YXIgdmFsID0gcHJvY2Vzcy5lbnZba2V5XTtcbiAgaWYgKC9eKHllc3xvbnx0cnVlfGVuYWJsZWQpJC9pLnRlc3QodmFsKSkgdmFsID0gdHJ1ZTtcbiAgZWxzZSBpZiAoL14obm98b2ZmfGZhbHNlfGRpc2FibGVkKSQvaS50ZXN0KHZhbCkpIHZhbCA9IGZhbHNlO1xuICBlbHNlIGlmICh2YWwgPT09ICdudWxsJykgdmFsID0gbnVsbDtcbiAgZWxzZSB2YWwgPSBOdW1iZXIodmFsKTtcblxuICBvYmpbcHJvcF0gPSB2YWw7XG4gIHJldHVybiBvYmo7XG59LCB7fSk7XG5cbi8qKlxuICogVGhlIGZpbGUgZGVzY3JpcHRvciB0byB3cml0ZSB0aGUgYGRlYnVnKClgIGNhbGxzIHRvLlxuICogU2V0IHRoZSBgREVCVUdfRkRgIGVudiB2YXJpYWJsZSB0byBvdmVycmlkZSB3aXRoIGFub3RoZXIgdmFsdWUuIGkuZS46XG4gKlxuICogICAkIERFQlVHX0ZEPTMgbm9kZSBzY3JpcHQuanMgMz5kZWJ1Zy5sb2dcbiAqL1xuXG52YXIgZmQgPSBwYXJzZUludChwcm9jZXNzLmVudi5ERUJVR19GRCwgMTApIHx8IDI7XG5cbmlmICgxICE9PSBmZCAmJiAyICE9PSBmZCkge1xuICB1dGlsLmRlcHJlY2F0ZShmdW5jdGlvbigpe30sICdleGNlcHQgZm9yIHN0ZGVycigyKSBhbmQgc3Rkb3V0KDEpLCBhbnkgb3RoZXIgdXNhZ2Ugb2YgREVCVUdfRkQgaXMgZGVwcmVjYXRlZC4gT3ZlcnJpZGUgZGVidWcubG9nIGlmIHlvdSB3YW50IHRvIHVzZSBhIGRpZmZlcmVudCBsb2cgZnVuY3Rpb24gKGh0dHBzOi8vZ2l0LmlvL2RlYnVnX2ZkKScpKClcbn1cblxudmFyIHN0cmVhbSA9IDEgPT09IGZkID8gcHJvY2Vzcy5zdGRvdXQgOlxuICAgICAgICAgICAgIDIgPT09IGZkID8gcHJvY2Vzcy5zdGRlcnIgOlxuICAgICAgICAgICAgIGNyZWF0ZVdyaXRhYmxlU3RkaW9TdHJlYW0oZmQpO1xuXG4vKipcbiAqIElzIHN0ZG91dCBhIFRUWT8gQ29sb3JlZCBvdXRwdXQgaXMgZW5hYmxlZCB3aGVuIGB0cnVlYC5cbiAqL1xuXG5mdW5jdGlvbiB1c2VDb2xvcnMoKSB7XG4gIHJldHVybiAnY29sb3JzJyBpbiBleHBvcnRzLmluc3BlY3RPcHRzXG4gICAgPyBCb29sZWFuKGV4cG9ydHMuaW5zcGVjdE9wdHMuY29sb3JzKVxuICAgIDogdHR5LmlzYXR0eShmZCk7XG59XG5cbi8qKlxuICogTWFwICVvIHRvIGB1dGlsLmluc3BlY3QoKWAsIGFsbCBvbiBhIHNpbmdsZSBsaW5lLlxuICovXG5cbmV4cG9ydHMuZm9ybWF0dGVycy5vID0gZnVuY3Rpb24odikge1xuICB0aGlzLmluc3BlY3RPcHRzLmNvbG9ycyA9IHRoaXMudXNlQ29sb3JzO1xuICByZXR1cm4gdXRpbC5pbnNwZWN0KHYsIHRoaXMuaW5zcGVjdE9wdHMpXG4gICAgLnJlcGxhY2UoL1xccypcXG5cXHMqL2csICcgJyk7XG59O1xuXG4vKipcbiAqIE1hcCAlbyB0byBgdXRpbC5pbnNwZWN0KClgLCBhbGxvd2luZyBtdWx0aXBsZSBsaW5lcyBpZiBuZWVkZWQuXG4gKi9cblxuZXhwb3J0cy5mb3JtYXR0ZXJzLk8gPSBmdW5jdGlvbih2KSB7XG4gIHRoaXMuaW5zcGVjdE9wdHMuY29sb3JzID0gdGhpcy51c2VDb2xvcnM7XG4gIHJldHVybiB1dGlsLmluc3BlY3QodiwgdGhpcy5pbnNwZWN0T3B0cyk7XG59O1xuXG4vKipcbiAqIEFkZHMgQU5TSSBjb2xvciBlc2NhcGUgY29kZXMgaWYgZW5hYmxlZC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGZvcm1hdEFyZ3MoYXJncykge1xuICB2YXIgbmFtZSA9IHRoaXMubmFtZXNwYWNlO1xuICB2YXIgdXNlQ29sb3JzID0gdGhpcy51c2VDb2xvcnM7XG5cbiAgaWYgKHVzZUNvbG9ycykge1xuICAgIHZhciBjID0gdGhpcy5jb2xvcjtcbiAgICB2YXIgcHJlZml4ID0gJyAgXFx1MDAxYlszJyArIGMgKyAnOzFtJyArIG5hbWUgKyAnICcgKyAnXFx1MDAxYlswbSc7XG5cbiAgICBhcmdzWzBdID0gcHJlZml4ICsgYXJnc1swXS5zcGxpdCgnXFxuJykuam9pbignXFxuJyArIHByZWZpeCk7XG4gICAgYXJncy5wdXNoKCdcXHUwMDFiWzMnICsgYyArICdtKycgKyBleHBvcnRzLmh1bWFuaXplKHRoaXMuZGlmZikgKyAnXFx1MDAxYlswbScpO1xuICB9IGVsc2Uge1xuICAgIGFyZ3NbMF0gPSBuZXcgRGF0ZSgpLnRvVVRDU3RyaW5nKClcbiAgICAgICsgJyAnICsgbmFtZSArICcgJyArIGFyZ3NbMF07XG4gIH1cbn1cblxuLyoqXG4gKiBJbnZva2VzIGB1dGlsLmZvcm1hdCgpYCB3aXRoIHRoZSBzcGVjaWZpZWQgYXJndW1lbnRzIGFuZCB3cml0ZXMgdG8gYHN0cmVhbWAuXG4gKi9cblxuZnVuY3Rpb24gbG9nKCkge1xuICByZXR1cm4gc3RyZWFtLndyaXRlKHV0aWwuZm9ybWF0LmFwcGx5KHV0aWwsIGFyZ3VtZW50cykgKyAnXFxuJyk7XG59XG5cbi8qKlxuICogU2F2ZSBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHNhdmUobmFtZXNwYWNlcykge1xuICBpZiAobnVsbCA9PSBuYW1lc3BhY2VzKSB7XG4gICAgLy8gSWYgeW91IHNldCBhIHByb2Nlc3MuZW52IGZpZWxkIHRvIG51bGwgb3IgdW5kZWZpbmVkLCBpdCBnZXRzIGNhc3QgdG8gdGhlXG4gICAgLy8gc3RyaW5nICdudWxsJyBvciAndW5kZWZpbmVkJy4gSnVzdCBkZWxldGUgaW5zdGVhZC5cbiAgICBkZWxldGUgcHJvY2Vzcy5lbnYuREVCVUc7XG4gIH0gZWxzZSB7XG4gICAgcHJvY2Vzcy5lbnYuREVCVUcgPSBuYW1lc3BhY2VzO1xuICB9XG59XG5cbi8qKlxuICogTG9hZCBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHJldHVybiB7U3RyaW5nfSByZXR1cm5zIHRoZSBwcmV2aW91c2x5IHBlcnNpc3RlZCBkZWJ1ZyBtb2Rlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbG9hZCgpIHtcbiAgcmV0dXJuIHByb2Nlc3MuZW52LkRFQlVHO1xufVxuXG4vKipcbiAqIENvcGllZCBmcm9tIGBub2RlL3NyYy9ub2RlLmpzYC5cbiAqXG4gKiBYWFg6IEl0J3MgbGFtZSB0aGF0IG5vZGUgZG9lc24ndCBleHBvc2UgdGhpcyBBUEkgb3V0LW9mLXRoZS1ib3guIEl0IGFsc29cbiAqIHJlbGllcyBvbiB0aGUgdW5kb2N1bWVudGVkIGB0dHlfd3JhcC5ndWVzc0hhbmRsZVR5cGUoKWAgd2hpY2ggaXMgYWxzbyBsYW1lLlxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZVdyaXRhYmxlU3RkaW9TdHJlYW0gKGZkKSB7XG4gIHZhciBzdHJlYW07XG4gIHZhciB0dHlfd3JhcCA9IHByb2Nlc3MuYmluZGluZygndHR5X3dyYXAnKTtcblxuICAvLyBOb3RlIHN0cmVhbS5fdHlwZSBpcyB1c2VkIGZvciB0ZXN0LW1vZHVsZS1sb2FkLWxpc3QuanNcblxuICBzd2l0Y2ggKHR0eV93cmFwLmd1ZXNzSGFuZGxlVHlwZShmZCkpIHtcbiAgICBjYXNlICdUVFknOlxuICAgICAgc3RyZWFtID0gbmV3IHR0eS5Xcml0ZVN0cmVhbShmZCk7XG4gICAgICBzdHJlYW0uX3R5cGUgPSAndHR5JztcblxuICAgICAgLy8gSGFjayB0byBoYXZlIHN0cmVhbSBub3Qga2VlcCB0aGUgZXZlbnQgbG9vcCBhbGl2ZS5cbiAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vam95ZW50L25vZGUvaXNzdWVzLzE3MjZcbiAgICAgIGlmIChzdHJlYW0uX2hhbmRsZSAmJiBzdHJlYW0uX2hhbmRsZS51bnJlZikge1xuICAgICAgICBzdHJlYW0uX2hhbmRsZS51bnJlZigpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdGSUxFJzpcbiAgICAgIHZhciBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG4gICAgICBzdHJlYW0gPSBuZXcgZnMuU3luY1dyaXRlU3RyZWFtKGZkLCB7IGF1dG9DbG9zZTogZmFsc2UgfSk7XG4gICAgICBzdHJlYW0uX3R5cGUgPSAnZnMnO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQSVBFJzpcbiAgICBjYXNlICdUQ1AnOlxuICAgICAgdmFyIG5ldCA9IHJlcXVpcmUoJ25ldCcpO1xuICAgICAgc3RyZWFtID0gbmV3IG5ldC5Tb2NrZXQoe1xuICAgICAgICBmZDogZmQsXG4gICAgICAgIHJlYWRhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgICAvLyBGSVhNRSBTaG91bGQgcHJvYmFibHkgaGF2ZSBhbiBvcHRpb24gaW4gbmV0LlNvY2tldCB0byBjcmVhdGUgYVxuICAgICAgLy8gc3RyZWFtIGZyb20gYW4gZXhpc3RpbmcgZmQgd2hpY2ggaXMgd3JpdGFibGUgb25seS4gQnV0IGZvciBub3dcbiAgICAgIC8vIHdlJ2xsIGp1c3QgYWRkIHRoaXMgaGFjayBhbmQgc2V0IHRoZSBgcmVhZGFibGVgIG1lbWJlciB0byBmYWxzZS5cbiAgICAgIC8vIFRlc3Q6IC4vbm9kZSB0ZXN0L2ZpeHR1cmVzL2VjaG8uanMgPCAvZXRjL3Bhc3N3ZFxuICAgICAgc3RyZWFtLnJlYWRhYmxlID0gZmFsc2U7XG4gICAgICBzdHJlYW0ucmVhZCA9IG51bGw7XG4gICAgICBzdHJlYW0uX3R5cGUgPSAncGlwZSc7XG5cbiAgICAgIC8vIEZJWE1FIEhhY2sgdG8gaGF2ZSBzdHJlYW0gbm90IGtlZXAgdGhlIGV2ZW50IGxvb3AgYWxpdmUuXG4gICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2pveWVudC9ub2RlL2lzc3Vlcy8xNzI2XG4gICAgICBpZiAoc3RyZWFtLl9oYW5kbGUgJiYgc3RyZWFtLl9oYW5kbGUudW5yZWYpIHtcbiAgICAgICAgc3RyZWFtLl9oYW5kbGUudW5yZWYoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIC8vIFByb2JhYmx5IGFuIGVycm9yIG9uIGluIHV2X2d1ZXNzX2hhbmRsZSgpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ltcGxlbWVudCBtZS4gVW5rbm93biBzdHJlYW0gZmlsZSB0eXBlIScpO1xuICB9XG5cbiAgLy8gRm9yIHN1cHBvcnRpbmcgbGVnYWN5IEFQSSB3ZSBwdXQgdGhlIEZEIGhlcmUuXG4gIHN0cmVhbS5mZCA9IGZkO1xuXG4gIHN0cmVhbS5faXNTdGRpbyA9IHRydWU7XG5cbiAgcmV0dXJuIHN0cmVhbTtcbn1cblxuLyoqXG4gKiBJbml0IGxvZ2ljIGZvciBgZGVidWdgIGluc3RhbmNlcy5cbiAqXG4gKiBDcmVhdGUgYSBuZXcgYGluc3BlY3RPcHRzYCBvYmplY3QgaW4gY2FzZSBgdXNlQ29sb3JzYCBpcyBzZXRcbiAqIGRpZmZlcmVudGx5IGZvciBhIHBhcnRpY3VsYXIgYGRlYnVnYCBpbnN0YW5jZS5cbiAqL1xuXG5mdW5jdGlvbiBpbml0IChkZWJ1Zykge1xuICBkZWJ1Zy5pbnNwZWN0T3B0cyA9IHV0aWwuX2V4dGVuZCh7fSwgZXhwb3J0cy5pbnNwZWN0T3B0cyk7XG59XG5cbi8qKlxuICogRW5hYmxlIG5hbWVzcGFjZXMgbGlzdGVkIGluIGBwcm9jZXNzLmVudi5ERUJVR2AgaW5pdGlhbGx5LlxuICovXG5cbmV4cG9ydHMuZW5hYmxlKGxvYWQoKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2RlYnVnL3NyYy9ub2RlLmpzIiwiPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG5cclxuPC9zdHlsZT5cclxuXHJcbjx0ZW1wbGF0ZT5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPkN1cnJlbnQgU2V0dGluZ3M6PC9oMT5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaT57eyB1cmwgfX08L2xpPlxyXG4gICAgICAgICAgICA8bGk+e3sgdXNlcm5hbWUgfX08L2xpPlxyXG4gICAgICAgICAgICA8bGk+e3sgcGFzc3dvcmQgfX08L2xpPlxyXG4gICAgICAgICAgICA8bGk+e3sgYXV0aFN0cmluZyB9fTwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHsgbWFwU3RhdGUgfSBmcm9tICd2dWV4JztcclxuaW1wb3J0IEJhc2U2NCBmcm9tICdCYXNlNjQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICAuLi5tYXBTdGF0ZSgnc2V0dGluZ3MnLCB7XHJcbiAgICAgICAgICAgIHVybDogc3RhdGUgPT4gc3RhdGUudXJsLFxyXG4gICAgICAgICAgICB1c2VybmFtZTogc3RhdGUgPT4gc3RhdGUudXNlcm5hbWUsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBzdGF0ZSA9PiBzdGF0ZS5wYXNzd29yZCxcclxuICAgICAgICB9KSxcclxuICAgICAgICBhdXRoU3RyaW5nKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ0F1dGhvcml6YXRpb246IEJhc2ljICcgKyBCYXNlNjQuYnRvYSh0aGlzLnVzZXJuYW1lICsgJzonICsgdGhpcy5wYXNzd29yZCk7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc2V0dGluZ3MudnVlPzI4NmIxNjg2IiwiPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4uc2xpZGUtZW50ZXItYWN0aXZlLFxyXG4uc2xpZGUtbGVhdmUtYWN0aXZlIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAyNTBtcztcclxufVxyXG5cclxuLnNsaWRlLWVudGVyLFxyXG4uc2xpZGUtbGVhdmUtdG8ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGhlaWdodDogMHB4O1xyXG59XHJcblxyXG4uc2xpZGUtZW50ZXItdG8sXHJcbi5zbGlkZS1sZWF2ZSB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgb3BhY2l0eTogMTAwO1xyXG59XHJcblxyXG4udGFzayB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLnRhc2staGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5cclxuICAgIC5pY29uIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICBtaW4td2lkdGg6IDE1cHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5rZXkge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogNzVweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDc1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnN1bW1hcnkge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICBtaW4td2lkdGg6IDQwMHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLmV4cGFuZCB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgICBtaW4td2lkdGg6IDE1cHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4udGFzay1tZXRhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICAgIC50YXNrLXN0YXR1cyB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgIC5zdGF0dXMtbmFtZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC50YXNrLXRyYW5zaXRpb24ueWVsbG93LFxyXG4gICAgLnRhc2stc3RhdHVzLnllbGxvdyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRDM1MTtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNGRkQzNTE7XHJcbiAgICAgICAgY29sb3I6ICM1OTQzMDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnRhc2stdHJhbnNpdGlvbi5ibHVlLWdyYXksXHJcbiAgICAudGFzay1zdGF0dXMuYmx1ZS1ncmF5IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEE2Nzg1O1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzRBNjc4NTtcclxuICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgIH1cclxuXHJcbiAgICAudGFzay10cmFuc2l0aW9uLmdyZWVuLFxyXG4gICAgLnRhc2stc3RhdHVzLmdyZWVuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQ4OTJDO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzE0ODkyQztcclxuICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgIH1cclxuXHJcbiAgICAudGFzay10cmFuc2l0aW9ucyB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGRpc3BsYXk6IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjUpO1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICB6LWluZGV4OiAyNTY7XHJcbiAgICB9XHJcblxyXG4gICAgLnRhc2stdHJhbnNpdGlvbiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDJweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgIC50cmFuc2l0aW9uLW5hbWUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4udGFzay1leHBhbmRlZCB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcbjwvc3R5bGU+XHJcblxyXG48dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwidGFza1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWhlYWRlclwiPlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwiaWNvblwiIDpzcmM9XCJ0YXNrLmljb25cIiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwia2V5XCI+e3sgdGFzay5rZXkgfX08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1bW1hcnlcIiB2LWlmPVwidGFzay5pc0V4cGFuZGVkXCI+e3sgdGFzay5zdW1tYXJ5IH19PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdW1tYXJ5XCIgdi1lbHNlPnt7IHRydW5jYXRlZFN1bW1hcnkgfX08L2Rpdj5cclxuICAgICAgICAgICAgPGkgdi1pZj1cInRhc2suaXNFeHBhbmRlZFwiIGNsYXNzPVwiZmEgZXhwYW5kXCIgdi1odG1sPVwiY2hldnJvbl91cF9pY29uXCIgQGNsaWNrPVwidG9nZ2xlRXhwYW5kKHRhc2spXCI+PC9pPlxyXG4gICAgICAgICAgICA8aSB2LWVsc2UgY2xhc3M9XCJmYSBleHBhbmRcIiB2LWh0bWw9XCJjaGV2cm9uX2Rvd25faWNvblwiIEBjbGljaz1cInRvZ2dsZUV4cGFuZCh0YXNrKVwiPjwvaT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1tZXRhXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLXN0YXR1c1wiIEBtb3VzZWVudGVyPVwidG9nZ2xlVHJhbnNpdGlvbnModGFzaylcIiBAbW91c2VsZWF2ZT1cInRvZ2dsZVRyYW5zaXRpb25zKHRhc2spXCIgOmNsYXNzPVwidGFzay5zdGF0dXMuc3RhdHVzQ2F0ZWdvcnkuY29sb3JOYW1lXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHVzLW5hbWVcIj57eyB0YXNrLnN0YXR1cy5uYW1lIH19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay10cmFuc2l0aW9uc1wiIHYtaWY9XCJzaG93aW5nVHJhbnNpdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidHJhbnNpdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRhc2stdHJhbnNpdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInRyYW5zaXRpb24udG8uc3RhdHVzQ2F0ZWdvcnkuY29sb3JOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZXhlY3V0ZVRyYW5zaXRpb24odHJhbnNpdGlvbiwgdGFzaylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cInRyYW5zaXRpb24gaW4gdGFzay50cmFuc2l0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cInRyYW5zaXRpb24uaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRyYW5zaXRpb24tbmFtZVwiPnt7IHRyYW5zaXRpb24ubmFtZX19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx0cmFuc2l0aW9uIG5hbWU9XCJzbGlkZVwiIG1vZGU9XCJvdXQtaW5cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZXhwYW5kZWRcIiB2LWlmPVwidGFzay5pc0V4cGFuZGVkXCI+XHJcbiAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7IHRhc2suZGVzY3JpcHRpb24gfX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3RyYW5zaXRpb24+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCB7IG1hcE11dGF0aW9ucyB9IGZyb20gJ3Z1ZXgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjaGV2cm9uX2Rvd25faWNvbjogJyYjeGYxM2E7JyxcclxuICAgICAgICAgICAgY2hldnJvbl91cF9pY29uOiAnJiN4ZjEzOTsnLFxyXG4gICAgICAgICAgICBzaG93aW5nVHJhbnNpdGlvbnM6IGZhbHNlLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICB0YXNrOiB7IHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICB0cnVuY2F0ZWRTdW1tYXJ5KCkge1xyXG4gICAgICAgICAgICBsZXQgbmV3U3VtbWFyeSA9IHRoaXMudGFzay5zdW1tYXJ5O1xyXG4gICAgICAgICAgICBpZiAobmV3U3VtbWFyeS5sZW5ndGggPiA2NSkge1xyXG4gICAgICAgICAgICAgICAgbmV3U3VtbWFyeSA9IHRoaXMudGFzay5zdW1tYXJ5LnN1YnN0cmluZygwLCA2MikgKyAnLi4uJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3U3VtbWFyeVxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHRvZ2dsZUV4cGFuZCh0YXNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCd0YXNrcy9nZXRUYXNrVHJhbnNpdGlvbnMnLCB0YXNrKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3Rhc2tzL3RvZ2dsZUV4cGFuZGVkJywgdGFzayk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXhlY3V0ZVRyYW5zaXRpb24odHJhbnNpdGlvbiwgdGFzaykge1xyXG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgndGFza3MvdHJhbnNpdGlvblRhc2snLCB7IHRhc2ssIHRyYW5zaXRpb259KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRvZ2dsZVRyYW5zaXRpb25zKHRhc2spIHtcclxuICAgICAgICAgICAgaWYgKCF0YXNrLnRyYW5zaXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgndGFza3MvZ2V0VGFza1RyYW5zaXRpb25zJywgdGFzaykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93aW5nVHJhbnNpdGlvbnMgPSAhdGhpcy5zaG93aW5nVHJhbnNpdGlvbnM7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd2luZ1RyYW5zaXRpb25zID0gIXRoaXMuc2hvd2luZ1RyYW5zaXRpb25zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufVxyXG48L3NjcmlwdD5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHRhc2sudnVlPzI0MDc4MmJmIiwiPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gICAgLnRhc2tzLXZpZXcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNDUwcHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogNDUwcHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMjQwcHg7XHJcbiAgICB9XHJcbiAgICAudGFzay1oZWFkZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDUwcHg7XHJcbiAgICB9XHJcbiAgICAudGFzay1saXN0IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICB9XHJcbiAgICAucmVmcmVzaCB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG48L3N0eWxlPlxyXG5cclxuPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cInRhc2tzLXZpZXdcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1oZWFkZXJcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSByZWZyZXNoXCIgQGNsaWNrPVwicmVsb2FkVGFza3NcIiB2LWh0bWw9XCJyZWZyZXNoX2ljb25cIj48L3NwYW4+XHJcbiAgICAgICAgICAgIHt7IGNvdW50IH19IHRhc2tzXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stbGlzdFwiPlxyXG4gICAgICAgICAgICA8di10YXNrIHYtZm9yPVwidGFzayBpbiB0YXNrc1wiIGtleT1cInRhc2suaWRcIiA6dGFzaz1cInRhc2tcIj48L3YtdGFzaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHsgbWFwU3RhdGUgfSBmcm9tICd2dWV4JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ3Rhc2tzL2luaXRpYWxpemUnKTtcclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgJ3YtdGFzayc6IHJlcXVpcmUoJy4vdGFzay90YXNrJyksXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVmcmVzaF9pY29uOiAnJiN4ZjAyMTsnLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICAuLi5tYXBTdGF0ZSgndGFza3MnLCB7XHJcbiAgICAgICAgICAgIHRhc2tzOiBzdGF0ZSA9PiBzdGF0ZS50YXNrcyxcclxuICAgICAgICB9KSxcclxuXHJcbiAgICAgICAgY291bnQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRhc2tzLmxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHJlbG9hZFRhc2tzKCkge1xyXG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgndGFza3MvaW5pdGlhbGl6ZScpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59XHJcbjwvc2NyaXB0PlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gdGFza3MudnVlP2Y1MGMzMTFhIiwiPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcbi5mYWRlLWVudGVyLWFjdGl2ZSwgLmZhZGUtbGVhdmUtYWN0aXZlIHtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjVzIGVhc2U7XHJcbn1cclxuXHJcbi5mYWRlLWVudGVyLCAuZmFkZS1sZWF2ZS1hY3RpdmUge1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG48L3N0eWxlPlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4uamlyYS10YXNrcy1wYW5lbCB7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG59XHJcblxyXG4uY2xvc2Uge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbn1cclxuPC9zdHlsZT5cclxuXHJcbjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJ2LXJvb3RcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibmF2XCI+XHJcbiAgICAgICAgICAgIDxyb3V0ZXItbGluayB0bz1cIi90YXNrc1wiPlRhc2tzPC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgICAgPHJvdXRlci1saW5rIHRvPVwiL3NldHRpbmdzXCI+U2V0dGluZ3M8L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGNsb3NlXCIgdi1odG1sPVwiY2xvc2VfaWNvblwiIEBjbGljaz1cInRvZ2dsZVwiPjwvaT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidi1yb3V0ZXJcIj5cclxuICAgICAgICAgICAgICAgIDx0cmFuc2l0aW9uIG5hbWU9XCJmYWRlXCIgbW9kZT1cIm91dC1pblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItdmlldz48L3JvdXRlci12aWV3PlxyXG4gICAgICAgICAgICAgICAgPC90cmFuc2l0aW9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuLy9cclxuLy8gQm9vdCB1cCBnbG9iYWwgdXRpbHNcclxuLy9cclxucmVxdWlyZSgnbGliL2FwcC9ib290Jyk7XHJcblxyXG4vL1xyXG4vLyBDb25maWd1cmUgcm91dGVyIGFuZCBzdG9yZVxyXG4vL1xyXG5pbXBvcnQgVnVlUm91dGVyIGZyb20gJ3Z1ZS1yb3V0ZXInO1xyXG5pbXBvcnQgQXBwUm91dGVyIGZyb20gJ2xpYi9hcHAvcm91dGVzJztcclxuaW1wb3J0IHsgc3luYyB9IGZyb20gJ3Z1ZXgtcm91dGVyLXN5bmMnO1xyXG5jb25zdCByb3V0ZXIgPSBuZXcgVnVlUm91dGVyKHtcclxuICAgIG1vZGU6ICdoaXN0b3J5JyxcclxuICAgIHJvdXRlczogQXBwUm91dGVyLnJvdXRlcyxcclxufSk7XHJcblxyXG5jb25zdCBzdG9yZSA9IHJlcXVpcmUoJ2xpYi9hcHAvc3RvcmUnKTtcclxuc3luYyhzdG9yZSwgcm91dGVyKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHJvdXRlcixcclxuICAgIHN0b3JlLFxyXG4gICAgY3JlYXRlZCgpIHtcclxuICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9ICdqaXJhLXRhc2tzLXBhbmVsJztcclxuICAgICAgICB0aGlzLnBhbmVsID0gYXRvbS53b3Jrc3BhY2UuYWRkTW9kYWxQYW5lbCh7XHJcbiAgICAgICAgICAgIGl0ZW06IGVsZW1lbnQsXHJcbiAgICAgICAgICAgIHZpc2libGU6IHRoaXMuaXNWaXNpYmxlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuJG1vdW50KGVsZW1lbnQpO1xyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgLy8gcHVsbCBpbml0aWFsIHNldHRpbmdzXHJcbiAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ3NldHRpbmdzL2luaXRpYWxpemUnKTtcclxuXHJcbiAgICAgICAgLy8gc2V0dXAgd2F0Y2hlcnMgb24gc2V0dGluZ3MgaW4gY2FzZSBjb25maWcgY2hhbmdlc1xyXG4gICAgICAgIGF0b20uY29uZmlnLm9ic2VydmUoJ2ppcmEtdGFza3MudXNlcm5hbWUnLCB1c2VybmFtZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnc2V0dGluZ3Mvc2V0VXNlcm5hbWUnLCB1c2VybmFtZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXRvbS5jb25maWcub2JzZXJ2ZSgnamlyYS10YXNrcy5wYXNzd29yZCcsIHBhc3N3b3JkID0+IHtcclxuICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdzZXR0aW5ncy9zZXRQYXNzd29yZCcsIHBhc3N3b3JkKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBhdG9tLmNvbmZpZy5vYnNlcnZlKCdqaXJhLXRhc2tzLmppcmFVcmwnLCB1cmwgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3NldHRpbmdzL3NldFVybCcsIHVybCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpc1Zpc2libGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBjbG9zZV9pY29uOiAnJiN4ZjAwZDsnLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHRvZ2dsZSgpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1Zpc2libGUgPSAhdGhpcy5pc1Zpc2libGU7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB3YXRjaDoge1xyXG4gICAgICAgIGlzVmlzaWJsZSgpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1Zpc2libGUgP1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYW5lbC5zaG93KCkgOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wYW5lbC5oaWRlKCkgO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJvb3QudnVlPzMyNjRhZDE2IiwiLyoqXG4gKiBUcmFuc2xhdGVzIHRoZSBsaXN0IGZvcm1hdCBwcm9kdWNlZCBieSBjc3MtbG9hZGVyIGludG8gc29tZXRoaW5nXG4gKiBlYXNpZXIgdG8gbWFuaXB1bGF0ZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBsaXN0VG9TdHlsZXMgKHBhcmVudElkLCBsaXN0KSB7XG4gIHZhciBzdHlsZXMgPSBbXVxuICB2YXIgbmV3U3R5bGVzID0ge31cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldXG4gICAgdmFyIGlkID0gaXRlbVswXVxuICAgIHZhciBjc3MgPSBpdGVtWzFdXG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXVxuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdXG4gICAgdmFyIHBhcnQgPSB7XG4gICAgICBpZDogcGFyZW50SWQgKyAnOicgKyBpLFxuICAgICAgY3NzOiBjc3MsXG4gICAgICBtZWRpYTogbWVkaWEsXG4gICAgICBzb3VyY2VNYXA6IHNvdXJjZU1hcFxuICAgIH1cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7IGlkOiBpZCwgcGFydHM6IFtwYXJ0XSB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0eWxlc1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanMiLCJleHBvcnRzLnN5bmMgPSBmdW5jdGlvbiAoc3RvcmUsIHJvdXRlciwgb3B0aW9ucykge1xuICB2YXIgbW9kdWxlTmFtZSA9IChvcHRpb25zIHx8IHt9KS5tb2R1bGVOYW1lIHx8ICdyb3V0ZSdcblxuICBzdG9yZS5yZWdpc3Rlck1vZHVsZShtb2R1bGVOYW1lLCB7XG4gICAgc3RhdGU6IGNsb25lUm91dGUocm91dGVyLmN1cnJlbnRSb3V0ZSksXG4gICAgbXV0YXRpb25zOiB7XG4gICAgICAncm91dGVyL1JPVVRFX0NIQU5HRUQnOiBmdW5jdGlvbiAoc3RhdGUsIHRyYW5zaXRpb24pIHtcbiAgICAgICAgc3RvcmUuc3RhdGVbbW9kdWxlTmFtZV0gPSBjbG9uZVJvdXRlKHRyYW5zaXRpb24udG8sIHRyYW5zaXRpb24uZnJvbSlcbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgdmFyIGlzVGltZVRyYXZlbGluZyA9IGZhbHNlXG4gIHZhciBjdXJyZW50UGF0aFxuXG4gIC8vIHN5bmMgcm91dGVyIG9uIHN0b3JlIGNoYW5nZVxuICBzdG9yZS53YXRjaChcbiAgICBmdW5jdGlvbiAoc3RhdGUpIHsgcmV0dXJuIHN0YXRlW21vZHVsZU5hbWVdIH0sXG4gICAgZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICBpZiAocm91dGUuZnVsbFBhdGggPT09IGN1cnJlbnRQYXRoKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaXNUaW1lVHJhdmVsaW5nID0gdHJ1ZVxuICAgICAgY3VycmVudFBhdGggPSByb3V0ZS5mdWxsUGF0aFxuICAgICAgcm91dGVyLnB1c2gocm91dGUpXG4gICAgfSxcbiAgICB7IHN5bmM6IHRydWUgfVxuICApXG5cbiAgLy8gc3luYyBzdG9yZSBvbiByb3V0ZXIgbmF2aWdhdGlvblxuICByb3V0ZXIuYWZ0ZXJFYWNoKGZ1bmN0aW9uICh0bywgZnJvbSkge1xuICAgIGlmIChpc1RpbWVUcmF2ZWxpbmcpIHtcbiAgICAgIGlzVGltZVRyYXZlbGluZyA9IGZhbHNlXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY3VycmVudFBhdGggPSB0by5mdWxsUGF0aFxuICAgIHN0b3JlLmNvbW1pdCgncm91dGVyL1JPVVRFX0NIQU5HRUQnLCB7IHRvOiB0bywgZnJvbTogZnJvbSB9KVxuICB9KVxufVxuXG5mdW5jdGlvbiBjbG9uZVJvdXRlICh0bywgZnJvbSkge1xuICB2YXIgY2xvbmUgPSB7XG4gICAgbmFtZTogdG8ubmFtZSxcbiAgICBwYXRoOiB0by5wYXRoLFxuICAgIGhhc2g6IHRvLmhhc2gsXG4gICAgcXVlcnk6IHRvLnF1ZXJ5LFxuICAgIHBhcmFtczogdG8ucGFyYW1zLFxuICAgIGZ1bGxQYXRoOiB0by5mdWxsUGF0aCxcbiAgICBtZXRhOiB0by5tZXRhXG4gIH1cbiAgaWYgKGZyb20pIHtcbiAgICBjbG9uZS5mcm9tID0gY2xvbmVSb3V0ZShmcm9tKVxuICB9XG4gIHJldHVybiBPYmplY3QuZnJlZXplKGNsb25lKVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi92dWV4LXJvdXRlci1zeW5jL2luZGV4LmpzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMGQwYmZhMjhcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjpmYWxzZX0hLi9+L3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9saWIvcGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3MudnVlXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uc2xpZGUtZW50ZXItYWN0aXZlW2RhdGEtdi0zOTNiZDhlN10sXFxuLnNsaWRlLWxlYXZlLWFjdGl2ZVtkYXRhLXYtMzkzYmQ4ZTddIHtcXG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcztcXG59XFxuLnNsaWRlLWVudGVyW2RhdGEtdi0zOTNiZDhlN10sXFxuLnNsaWRlLWxlYXZlLXRvW2RhdGEtdi0zOTNiZDhlN10ge1xcbiAgb3BhY2l0eTogMDtcXG4gIGhlaWdodDogMHB4O1xcbn1cXG4uc2xpZGUtZW50ZXItdG9bZGF0YS12LTM5M2JkOGU3XSxcXG4uc2xpZGUtbGVhdmVbZGF0YS12LTM5M2JkOGU3XSB7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgb3BhY2l0eTogMTAwO1xcbn1cXG4udGFza1tkYXRhLXYtMzkzYmQ4ZTddIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItd2lkdGg6IDJweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG4udGFzay1oZWFkZXJbZGF0YS12LTM5M2JkOGU3XSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuLnRhc2staGVhZGVyIC5pY29uW2RhdGEtdi0zOTNiZDhlN10ge1xcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcXG4gICAgbWluLXdpZHRoOiAxNXB4O1xcbiAgICBtYXgtd2lkdGg6IDE1cHg7XFxufVxcbi50YXNrLWhlYWRlciAua2V5W2RhdGEtdi0zOTNiZDhlN10ge1xcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcXG4gICAgbWluLXdpZHRoOiA3NXB4O1xcbiAgICBtYXgtd2lkdGg6IDc1cHg7XFxufVxcbi50YXNrLWhlYWRlciAuc3VtbWFyeVtkYXRhLXYtMzkzYmQ4ZTddIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxuICAgIG1pbi13aWR0aDogNDAwcHg7XFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG4udGFzay1oZWFkZXIgLmV4cGFuZFtkYXRhLXYtMzkzYmQ4ZTddIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICBtaW4td2lkdGg6IDE1cHg7XFxuICAgIG1heC13aWR0aDogMTVweDtcXG59XFxuLnRhc2stbWV0YVtkYXRhLXYtMzkzYmQ4ZTddIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4udGFzay1tZXRhIC50YXNrLXN0YXR1c1tkYXRhLXYtMzkzYmQ4ZTddIHtcXG4gICAgbWluLXdpZHRoOiAxMDBweDtcXG4gICAgbWF4LXdpZHRoOiAxMDBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50YXNrLW1ldGEgLnRhc2stc3RhdHVzIC5zdGF0dXMtbmFtZVtkYXRhLXYtMzkzYmQ4ZTddIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxufVxcbi50YXNrLW1ldGEgLnRhc2stdHJhbnNpdGlvbi55ZWxsb3dbZGF0YS12LTM5M2JkOGU3XSxcXG4gIC50YXNrLW1ldGEgLnRhc2stc3RhdHVzLnllbGxvd1tkYXRhLXYtMzkzYmQ4ZTddIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRDM1MTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjRkZEMzUxO1xcbiAgICBjb2xvcjogIzU5NDMwMDtcXG59XFxuLnRhc2stbWV0YSAudGFzay10cmFuc2l0aW9uLmJsdWUtZ3JheVtkYXRhLXYtMzkzYmQ4ZTddLFxcbiAgLnRhc2stbWV0YSAudGFzay1zdGF0dXMuYmx1ZS1ncmF5W2RhdGEtdi0zOTNiZDhlN10ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEE2Nzg1O1xcbiAgICBib3JkZXItY29sb3I6ICM0QTY3ODU7XFxuICAgIGNvbG9yOiAjRkZGO1xcbn1cXG4udGFzay1tZXRhIC50YXNrLXRyYW5zaXRpb24uZ3JlZW5bZGF0YS12LTM5M2JkOGU3XSxcXG4gIC50YXNrLW1ldGEgLnRhc2stc3RhdHVzLmdyZWVuW2RhdGEtdi0zOTNiZDhlN10ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQ4OTJDO1xcbiAgICBib3JkZXItY29sb3I6ICMxNDg5MkM7XFxuICAgIGNvbG9yOiAjRkZGO1xcbn1cXG4udGFzay1tZXRhIC50YXNrLXRyYW5zaXRpb25zW2RhdGEtdi0zOTNiZDhlN10ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICBib3JkZXItd2lkdGg6IDFweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgei1pbmRleDogMjU2O1xcbn1cXG4udGFzay1tZXRhIC50YXNrLXRyYW5zaXRpb25bZGF0YS12LTM5M2JkOGU3XSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50YXNrLW1ldGEgLnRhc2stdHJhbnNpdGlvbiAudHJhbnNpdGlvbi1uYW1lW2RhdGEtdi0zOTNiZDhlN10ge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICB3aWR0aDogMTAwJTtcXG59XFxuLnRhc2stZXhwYW5kZWRbZGF0YS12LTM5M2JkOGU3XSB7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0zOTNiZDhlN1wiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOmZhbHNlfSEuL34vc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2xpYi9wYWdlcy90YXNrcy90YXNrL3Rhc2sudnVlXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udGFza3Mtdmlld1tkYXRhLXYtNzkzOTYxMjZdIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0NTBweDtcXG4gIG1pbi1oZWlnaHQ6IDQ1MHB4O1xcbiAgbWF4LWhlaWdodDogMjQwcHg7XFxufVxcbi50YXNrLWhlYWRlcltkYXRhLXYtNzkzOTYxMjZdIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgbWluLWhlaWdodDogNTBweDtcXG4gIG1heC1oZWlnaHQ6IDUwcHg7XFxufVxcbi50YXNrLWxpc3RbZGF0YS12LTc5Mzk2MTI2XSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBtYXgtaGVpZ2h0OiA0MDBweDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuLnJlZnJlc2hbZGF0YS12LTc5Mzk2MTI2XSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTc5Mzk2MTI2XCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vfi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vbGliL3BhZ2VzL3Rhc2tzL3Rhc2tzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmZhZGUtZW50ZXItYWN0aXZlLCAuZmFkZS1sZWF2ZS1hY3RpdmUge1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNXMgZWFzZTtcXG59XFxuLmZhZGUtZW50ZXIsIC5mYWRlLWxlYXZlLWFjdGl2ZSB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi03YjgxODEyNFwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjpmYWxzZX0hLi9+L3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9saWIvcm9vdC52dWVcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5qaXJhLXRhc2tzLXBhbmVsW2RhdGEtdi03YjgxODEyNF0ge1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuLmNsb3NlW2RhdGEtdi03YjgxODEyNF0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTdiODE4MTI0XCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vfi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0xIS4vbGliL3Jvb3QudnVlXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJuYW1lXCI6IFwiYXhpb3NcIixcblx0XCJ2ZXJzaW9uXCI6IFwiMC4xNi4xXCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJQcm9taXNlIGJhc2VkIEhUVFAgY2xpZW50IGZvciB0aGUgYnJvd3NlciBhbmQgbm9kZS5qc1wiLFxuXHRcIm1haW5cIjogXCJpbmRleC5qc1wiLFxuXHRcInNjcmlwdHNcIjoge1xuXHRcdFwidGVzdFwiOiBcImdydW50IHRlc3RcIixcblx0XHRcInN0YXJ0XCI6IFwibm9kZSAuL3NhbmRib3gvc2VydmVyLmpzXCIsXG5cdFx0XCJidWlsZFwiOiBcIk5PREVfRU5WPXByb2R1Y3Rpb24gZ3J1bnQgYnVpbGRcIixcblx0XHRcInByZXZlcnNpb25cIjogXCJucG0gdGVzdFwiLFxuXHRcdFwidmVyc2lvblwiOiBcIm5wbSBydW4gYnVpbGQgJiYgZ3J1bnQgdmVyc2lvbiAmJiBnaXQgYWRkIC1BIGRpc3QgJiYgZ2l0IGFkZCBDSEFOR0VMT0cubWQgYm93ZXIuanNvbiBwYWNrYWdlLmpzb25cIixcblx0XHRcInBvc3R2ZXJzaW9uXCI6IFwiZ2l0IHB1c2ggJiYgZ2l0IHB1c2ggLS10YWdzXCIsXG5cdFx0XCJleGFtcGxlc1wiOiBcIm5vZGUgLi9leGFtcGxlcy9zZXJ2ZXIuanNcIixcblx0XHRcImNvdmVyYWxsc1wiOiBcImNhdCBjb3ZlcmFnZS9sY292LmluZm8gfCAuL25vZGVfbW9kdWxlcy9jb3ZlcmFsbHMvYmluL2NvdmVyYWxscy5qc1wiXG5cdH0sXG5cdFwicmVwb3NpdG9yeVwiOiB7XG5cdFx0XCJ0eXBlXCI6IFwiZ2l0XCIsXG5cdFx0XCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vbXphYnJpc2tpZS9heGlvcy5naXRcIlxuXHR9LFxuXHRcImtleXdvcmRzXCI6IFtcblx0XHRcInhoclwiLFxuXHRcdFwiaHR0cFwiLFxuXHRcdFwiYWpheFwiLFxuXHRcdFwicHJvbWlzZVwiLFxuXHRcdFwibm9kZVwiXG5cdF0sXG5cdFwiYXV0aG9yXCI6IFwiTWF0dCBaYWJyaXNraWVcIixcblx0XCJsaWNlbnNlXCI6IFwiTUlUXCIsXG5cdFwiYnVnc1wiOiB7XG5cdFx0XCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vbXphYnJpc2tpZS9heGlvcy9pc3N1ZXNcIlxuXHR9LFxuXHRcImhvbWVwYWdlXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL216YWJyaXNraWUvYXhpb3NcIixcblx0XCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuXHRcdFwiY292ZXJhbGxzXCI6IFwiXjIuMTEuOVwiLFxuXHRcdFwiZXM2LXByb21pc2VcIjogXCJeNC4wLjVcIixcblx0XHRcImdydW50XCI6IFwiXjEuMC4xXCIsXG5cdFx0XCJncnVudC1iYW5uZXJcIjogXCJeMC42LjBcIixcblx0XHRcImdydW50LWNsaVwiOiBcIl4xLjIuMFwiLFxuXHRcdFwiZ3J1bnQtY29udHJpYi1jbGVhblwiOiBcIl4xLjAuMFwiLFxuXHRcdFwiZ3J1bnQtY29udHJpYi1ub2RldW5pdFwiOiBcIl4xLjAuMFwiLFxuXHRcdFwiZ3J1bnQtY29udHJpYi13YXRjaFwiOiBcIl4xLjAuMFwiLFxuXHRcdFwiZ3J1bnQtZXNsaW50XCI6IFwiXjE5LjAuMFwiLFxuXHRcdFwiZ3J1bnQta2FybWFcIjogXCJeMi4wLjBcIixcblx0XHRcImdydW50LXRzXCI6IFwiXjYuMC4wLWJldGEuM1wiLFxuXHRcdFwiZ3J1bnQtd2VicGFja1wiOiBcIl4xLjAuMThcIixcblx0XHRcImlzdGFuYnVsLWluc3RydW1lbnRlci1sb2FkZXJcIjogXCJeMS4wLjBcIixcblx0XHRcImphc21pbmUtY29yZVwiOiBcIl4yLjQuMVwiLFxuXHRcdFwia2FybWFcIjogXCJeMS4zLjBcIixcblx0XHRcImthcm1hLWNocm9tZS1sYXVuY2hlclwiOiBcIl4yLjAuMFwiLFxuXHRcdFwia2FybWEtY292ZXJhZ2VcIjogXCJeMS4wLjBcIixcblx0XHRcImthcm1hLWZpcmVmb3gtbGF1bmNoZXJcIjogXCJeMS4wLjBcIixcblx0XHRcImthcm1hLWphc21pbmVcIjogXCJeMS4wLjJcIixcblx0XHRcImthcm1hLWphc21pbmUtYWpheFwiOiBcIl4wLjEuMTNcIixcblx0XHRcImthcm1hLW9wZXJhLWxhdW5jaGVyXCI6IFwiXjEuMC4wXCIsXG5cdFx0XCJrYXJtYS1waGFudG9tanMtbGF1bmNoZXJcIjogXCJeMS4wLjBcIixcblx0XHRcImthcm1hLXNhZmFyaS1sYXVuY2hlclwiOiBcIl4xLjAuMFwiLFxuXHRcdFwia2FybWEtc2F1Y2UtbGF1bmNoZXJcIjogXCJeMS4xLjBcIixcblx0XHRcImthcm1hLXNpbm9uXCI6IFwiXjEuMC41XCIsXG5cdFx0XCJrYXJtYS1zb3VyY2VtYXAtbG9hZGVyXCI6IFwiXjAuMy43XCIsXG5cdFx0XCJrYXJtYS13ZWJwYWNrXCI6IFwiXjEuNy4wXCIsXG5cdFx0XCJsb2FkLWdydW50LXRhc2tzXCI6IFwiXjMuNS4yXCIsXG5cdFx0XCJtaW5pbWlzdFwiOiBcIl4xLjIuMFwiLFxuXHRcdFwicGhhbnRvbWpzLXByZWJ1aWx0XCI6IFwiXjIuMS43XCIsXG5cdFx0XCJzaW5vblwiOiBcIl4xLjE3LjRcIixcblx0XHRcIndlYnBhY2tcIjogXCJeMS4xMy4xXCIsXG5cdFx0XCJ3ZWJwYWNrLWRldi1zZXJ2ZXJcIjogXCJeMS4xNC4xXCIsXG5cdFx0XCJ1cmwtc2VhcmNoLXBhcmFtc1wiOiBcIl4wLjYuMVwiLFxuXHRcdFwidHlwZXNjcmlwdFwiOiBcIl4yLjAuM1wiXG5cdH0sXG5cdFwiYnJvd3NlclwiOiB7XG5cdFx0XCIuL2xpYi9hZGFwdGVycy9odHRwLmpzXCI6IFwiLi9saWIvYWRhcHRlcnMveGhyLmpzXCJcblx0fSxcblx0XCJ0eXBpbmdzXCI6IFwiLi9pbmRleC5kLnRzXCIsXG5cdFwiZGVwZW5kZW5jaWVzXCI6IHtcblx0XHRcImZvbGxvdy1yZWRpcmVjdHNcIjogXCJeMS4yLjNcIlxuXHR9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9heGlvcy9wYWNrYWdlLmpzb25cbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMGQwYmZhMjhcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6ZmFsc2V9IXNhc3MtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vc2V0dGluZ3MudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3NldHRpbmdzLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMGQwYmZhMjhcXFwifSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc2V0dGluZ3MudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIFwiZGF0YS12LTBkMGJmYTI4XCIsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJDOlxcXFxVc2Vyc1xcXFxyZXRyb1xcXFxQcm9qZWN0c1xcXFxqaXJhLXRhc2tzXFxcXGxpYlxcXFxwYWdlc1xcXFxzZXR0aW5nc1xcXFxzZXR0aW5ncy52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBzZXR0aW5ncy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMGQwYmZhMjhcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0wZDBiZmEyOFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvcGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3MudnVlXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTM5M2JkOGU3XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOmZhbHNlfSFzYXNzLWxvYWRlciEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Rhc2sudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3Rhc2sudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0zOTNiZDhlN1xcXCJ9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi90YXNrLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBcImRhdGEtdi0zOTNiZDhlN1wiLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQzpcXFxcVXNlcnNcXFxccmV0cm9cXFxcUHJvamVjdHNcXFxcamlyYS10YXNrc1xcXFxsaWJcXFxccGFnZXNcXFxcdGFza3NcXFxcdGFza1xcXFx0YXNrLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHRhc2sudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTM5M2JkOGU3XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMzkzYmQ4ZTdcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbGliL3BhZ2VzL3Rhc2tzL3Rhc2svdGFzay52dWVcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzkzOTYxMjZcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6ZmFsc2V9IXNhc3MtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vdGFza3MudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3Rhc2tzLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzkzOTYxMjZcXFwifSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vdGFza3MudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIFwiZGF0YS12LTc5Mzk2MTI2XCIsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJDOlxcXFxVc2Vyc1xcXFxyZXRyb1xcXFxQcm9qZWN0c1xcXFxqaXJhLXRhc2tzXFxcXGxpYlxcXFxwYWdlc1xcXFx0YXNrc1xcXFx0YXNrcy52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSB0YXNrcy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNzkzOTYxMjZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03OTM5NjEyNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvcGFnZXMvdGFza3MvdGFza3MudnVlXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnaDEnLCBbX3ZtLl92KFwiQ3VycmVudCBTZXR0aW5nczpcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3VsJywgW19jKCdsaScsIFtfdm0uX3YoX3ZtLl9zKF92bS51cmwpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbGknLCBbX3ZtLl92KF92bS5fcyhfdm0udXNlcm5hbWUpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbGknLCBbX3ZtLl92KF92bS5fcyhfdm0ucGFzc3dvcmQpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbGknLCBbX3ZtLl92KF92bS5fcyhfdm0uYXV0aFN0cmluZykpXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTBkMGJmYTI4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMGQwYmZhMjhcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2xpYi9wYWdlcy9zZXR0aW5ncy9zZXR0aW5ncy52dWVcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRhc2tcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0YXNrLWhlYWRlclwiXG4gIH0sIFtfYygnaW1nJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImljb25cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcmNcIjogX3ZtLnRhc2suaWNvblxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwia2V5XCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnRhc2sua2V5KSldKSwgX3ZtLl92KFwiIFwiKSwgKF92bS50YXNrLmlzRXhwYW5kZWQpID8gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzdW1tYXJ5XCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnRhc2suc3VtbWFyeSkpXSkgOiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInN1bW1hcnlcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0udHJ1bmNhdGVkU3VtbWFyeSkpXSksIF92bS5fdihcIiBcIiksIChfdm0udGFzay5pc0V4cGFuZGVkKSA/IF9jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGV4cGFuZFwiLFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcImlubmVySFRNTFwiOiBfdm0uX3MoX3ZtLmNoZXZyb25fdXBfaWNvbilcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0udG9nZ2xlRXhwYW5kKF92bS50YXNrKVxuICAgICAgfVxuICAgIH1cbiAgfSkgOiBfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBleHBhbmRcIixcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJpbm5lckhUTUxcIjogX3ZtLl9zKF92bS5jaGV2cm9uX2Rvd25faWNvbilcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0udG9nZ2xlRXhwYW5kKF92bS50YXNrKVxuICAgICAgfVxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0YXNrLW1ldGFcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0YXNrLXN0YXR1c1wiLFxuICAgIGNsYXNzOiBfdm0udGFzay5zdGF0dXMuc3RhdHVzQ2F0ZWdvcnkuY29sb3JOYW1lLFxuICAgIG9uOiB7XG4gICAgICBcIm1vdXNlZW50ZXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS50b2dnbGVUcmFuc2l0aW9ucyhfdm0udGFzaylcbiAgICAgIH0sXG4gICAgICBcIm1vdXNlbGVhdmVcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS50b2dnbGVUcmFuc2l0aW9ucyhfdm0udGFzaylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInN0YXR1cy1uYW1lXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnRhc2suc3RhdHVzLm5hbWUpKV0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLnNob3dpbmdUcmFuc2l0aW9ucykgPyBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRhc2stdHJhbnNpdGlvbnNcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0cmFuc2l0aW9uc1wiXG4gIH0sIF92bS5fbCgoX3ZtLnRhc2sudHJhbnNpdGlvbnMpLCBmdW5jdGlvbih0cmFuc2l0aW9uKSB7XG4gICAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgICBrZXk6IFwidHJhbnNpdGlvbi5pZFwiLFxuICAgICAgc3RhdGljQ2xhc3M6IFwidGFzay10cmFuc2l0aW9uXCIsXG4gICAgICBjbGFzczogdHJhbnNpdGlvbi50by5zdGF0dXNDYXRlZ29yeS5jb2xvck5hbWUsXG4gICAgICBvbjoge1xuICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS5leGVjdXRlVHJhbnNpdGlvbih0cmFuc2l0aW9uLCBfdm0udGFzaylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwidHJhbnNpdGlvbi1uYW1lXCJcbiAgICB9LCBbX3ZtLl92KF92bS5fcyh0cmFuc2l0aW9uLm5hbWUpKV0pXSlcbiAgfSkpXSkgOiBfdm0uX2UoKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCd0cmFuc2l0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogXCJzbGlkZVwiLFxuICAgICAgXCJtb2RlXCI6IFwib3V0LWluXCJcbiAgICB9XG4gIH0sIFsoX3ZtLnRhc2suaXNFeHBhbmRlZCkgPyBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRhc2stZXhwYW5kZWRcIlxuICB9LCBbX2MoJ2hyJyksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb25cIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS50YXNrLmRlc2NyaXB0aW9uKSArIFwiXFxuICAgICAgICAgICAgXCIpXSldKSA6IF92bS5fZSgpXSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0zOTNiZDhlN1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTM5M2JkOGU3XCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9saWIvcGFnZXMvdGFza3MvdGFzay90YXNrLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGFza3Mtdmlld1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRhc2staGVhZGVyXCJcbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIHJlZnJlc2hcIixcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJpbm5lckhUTUxcIjogX3ZtLl9zKF92bS5yZWZyZXNoX2ljb24pXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0ucmVsb2FkVGFza3NcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKF92bS5jb3VudCkgKyBcIiB0YXNrc1xcbiAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0YXNrLWxpc3RcIlxuICB9LCBfdm0uX2woKF92bS50YXNrcyksIGZ1bmN0aW9uKHRhc2spIHtcbiAgICByZXR1cm4gX2MoJ3YtdGFzaycsIHtcbiAgICAgIGtleTogXCJ0YXNrLmlkXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcInRhc2tcIjogdGFza1xuICAgICAgfVxuICAgIH0pXG4gIH0pKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTc5Mzk2MTI2XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNzkzOTYxMjZcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2xpYi9wYWdlcy90YXNrcy90YXNrcy52dWVcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInYtcm9vdFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm5hdlwiXG4gIH0sIFtfYygncm91dGVyLWxpbmsnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidG9cIjogXCIvdGFza3NcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlRhc2tzXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdyb3V0ZXItbGluaycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0b1wiOiBcIi9zZXR0aW5nc1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiU2V0dGluZ3NcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgY2xvc2VcIixcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJpbm5lckhUTUxcIjogX3ZtLl9zKF92bS5jbG9zZV9pY29uKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLnRvZ2dsZVxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250ZW50XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidi1yb3V0ZXJcIlxuICB9LCBbX2MoJ3RyYW5zaXRpb24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBcImZhZGVcIixcbiAgICAgIFwibW9kZVwiOiBcIm91dC1pblwiXG4gICAgfVxuICB9LCBbX2MoJ3JvdXRlci12aWV3JyldLCAxKV0sIDEpXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi03YjgxODEyNFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTdiODE4MTI0XCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9saWIvcm9vdC52dWVcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0wZDBiZmEyOFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjpmYWxzZX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zZXR0aW5ncy52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjYxOGM4YTYyXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcImlkXFxcIjpcXFwiZGF0YS12LTBkMGJmYTI4XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOmZhbHNlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NldHRpbmdzLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0wZDBiZmEyOFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjpmYWxzZX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zZXR0aW5ncy52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTBkMGJmYTI4XCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vfi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vbGliL3BhZ2VzL3NldHRpbmdzL3NldHRpbmdzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcImlkXFxcIjpcXFwiZGF0YS12LTM5M2JkOGU3XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Rhc2sudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI0NjIzZTZjZFwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0zOTNiZDhlN1xcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi90YXNrLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0zOTNiZDhlN1xcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi90YXNrLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMzkzYmQ4ZTdcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjpmYWxzZX0hLi9+L3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9saWIvcGFnZXMvdGFza3MvdGFzay90YXNrLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcImlkXFxcIjpcXFwiZGF0YS12LTc5Mzk2MTI2XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOmZhbHNlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Rhc2tzLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiMDI3MDIwNThcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzkzOTYxMjZcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6ZmFsc2V9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vdGFza3MudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcImlkXFxcIjpcXFwiZGF0YS12LTc5Mzk2MTI2XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOmZhbHNlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Rhc2tzLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNzkzOTYxMjZcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjpmYWxzZX0hLi9+L3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9saWIvcGFnZXMvdGFza3MvdGFza3MudnVlXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2I4MTgxMjRcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOmZhbHNlfSEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jvb3QudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI3MmQ0YjQzZFwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi03YjgxODEyNFxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6ZmFsc2V9IS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcm9vdC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2I4MTgxMjRcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOmZhbHNlfSEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jvb3QudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi03YjgxODEyNFwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjpmYWxzZX0hLi9+L3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9saWIvcm9vdC52dWVcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi03YjgxODEyNFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjpmYWxzZX0hLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTEhLi9yb290LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiMjkwZjRlODlcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2I4MTgxMjRcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6ZmFsc2V9IS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0xIS4vcm9vdC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2I4MTgxMjRcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6ZmFsc2V9IS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0xIS4vcm9vdC52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTdiODE4MTI0XCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vfi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0xIS4vbGliL3Jvb3QudnVlXG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhc3NlcnRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhc3NlcnRcIlxuLy8gbW9kdWxlIGlkID0gODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYnVmZmVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYnVmZmVyXCJcbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVsZWN0cm9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZWxlY3Ryb25cIlxuLy8gbW9kdWxlIGlkID0gODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJmc1wiXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJuZXRcIlxuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3RyZWFtXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwic3RyZWFtXCJcbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInR0eVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInR0eVwiXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dGlsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidXRpbFwiXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ6bGliXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiemxpYlwiXG4vLyBtb2R1bGUgaWQgPSA4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9