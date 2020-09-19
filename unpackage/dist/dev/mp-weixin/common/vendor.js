(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],[
/* 0 */,
/* 1 */
/*!*************************************************************************************************************************!*\
  !*** F:/Ten/WeGame/Document download/WeChat Files/WXID_99Ake/FileStorage/File/2019-08/qj_consult/qj_consult/pages.json ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 2 */
/*!***************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// fix env
try {
    if (!global) global = {}
    global.process = global.process || {}
    global.process.env = global.process.env || {}
    global.App = global.App || App
    global.Page = global.Page || Page
    global.Component = global.Component || Component
    global.getApp = global.getApp || getApp
} catch (e) {}

;(function(global, factory) {
     true
        ? (module.exports = factory())
        : undefined
})(this, function() {
    "use strict"

    //fixed by xxxxxx
    function calcDiff(holder, key, newObj, oldObj) {
        if (newObj === oldObj || newObj === undefined) {
            return
        }

        if (newObj == null || oldObj == null || typeof newObj !== typeof oldObj) {
            holder[key] = newObj
        } else if (Array.isArray(newObj) && Array.isArray(oldObj)) {
            if (newObj.length === oldObj.length) {
                for (var i = 0, len = newObj.length; i < len; ++i) {
                    calcDiff(holder, key + "[" + i + "]", newObj[i], oldObj[i])
                }
            } else {
                holder[key] = newObj
            }
        } else if (typeof newObj === "object" && typeof oldObj === "object") {
            var newKeys = Object.keys(newObj)
            var oldKeys = Object.keys(oldObj)

            if (newKeys.length !== oldKeys.length) {
                holder[key] = newObj
            } else {
                var allKeysSet = Object.create(null)
                for (var i = 0, len = newKeys.length; i < len; ++i) {
                    allKeysSet[newKeys[i]] = true
                    allKeysSet[oldKeys[i]] = true
                }
                if (Object.keys(allKeysSet).length !== newKeys.length) {
                    holder[key] = newObj
                } else {
                    for (var i = 0, len = newKeys.length; i < len; ++i) {
                        var k = newKeys[i]
                        calcDiff(holder, key + "." + k, newObj[k], oldObj[k])
                    }
                }
            }
        } else if (newObj !== oldObj) {
            holder[key] = newObj
        }
    }

    function diff(newObj, oldObj) {
        var keys = Object.keys(newObj)
        var diffResult = {}
        for (var i = 0, len = keys.length; i < len; ++i) {
            var k = keys[i]
            var oldKeyPath = k.split(".")
            var oldValue = oldObj[oldKeyPath[0]]
            for (var j = 1, jlen = oldKeyPath.length; j < jlen && oldValue !== undefined; ++j) {
                oldValue = oldValue[oldKeyPath[j]]
            }
            calcDiff(diffResult, k, newObj[k], oldValue)
        }
        return diffResult
    }

    /*  */

    // these helpers produces better vm code in JS engines due to their
    // explicitness and function inlining
    function isUndef(v) {
        return v === undefined || v === null
    }

    function isDef(v) {
        return v !== undefined && v !== null
    }

    function isTrue(v) {
        return v === true
    }

    function isFalse(v) {
        return v === false
    }

    /**
     * Check if value is primitive
     */
    function isPrimitive(value) {
        return typeof value === "string" || typeof value === "number"
    }

    /**
     * Quick object check - this is primarily used to tell
     * Objects from primitive values when we know the value
     * is a JSON-compliant type.
     */
    function isObject(obj) {
        return obj !== null && typeof obj === "object"
    }

    var _toString = Object.prototype.toString

    /**
     * Strict object type check. Only returns true
     * for plain JavaScript objects.
     */
    function isPlainObject(obj) {
        return _toString.call(obj) === "[object Object]"
    }

    function isRegExp(v) {
        return _toString.call(v) === "[object RegExp]"
    }

    /**
     * Check if val is a valid array index.
     */
    function isValidArrayIndex(val) {
        var n = parseFloat(val)
        return n >= 0 && Math.floor(n) === n && isFinite(val)
    }

    /**
     * Convert a value to a string that is actually rendered.
     */
    function toString(val) {
        return val == null
            ? ""
            : typeof val === "object"
                ? JSON.stringify(val, null, 2)
                : String(val)
    }

    /**
     * Convert a input value to a number for persistence.
     * If the conversion fails, return original string.
     */
    function toNumber(val) {
        var n = parseFloat(val)
        return isNaN(n) ? val : n
    }

    /**
     * Make a map and return a function for checking if a key
     * is in that map.
     */
    function makeMap(str, expectsLowerCase) {
        var map = Object.create(null)
        var list = str.split(",")
        for (var i = 0; i < list.length; i++) {
            map[list[i]] = true
        }
        return expectsLowerCase
            ? function(val) {
                  return map[val.toLowerCase()]
              }
            : function(val) {
                  return map[val]
              }
    }

    /**
     * Check if a tag is a built-in tag.
     */
    var isBuiltInTag = makeMap("slot,component", true)

    /**
     * Check if a attribute is a reserved attribute.
     */
    var isReservedAttribute = makeMap("key,ref,slot,is")

    /**
     * Remove an item from an array
     */
    function remove(arr, item) {
        if (arr.length) {
            var index = arr.indexOf(item)
            if (index > -1) {
                return arr.splice(index, 1)
            }
        }
    }

    /**
     * Check whether the object has the property.
     */
    var hasOwnProperty = Object.prototype.hasOwnProperty

    function hasOwn(obj, key) {
        return hasOwnProperty.call(obj, key)
    }

    /**
     * Create a cached version of a pure function.
     */
    function cached(fn) {
        var cache = Object.create(null)
        return function cachedFn(str) {
            var hit = cache[str]
            return hit || (cache[str] = fn(str))
        }
    }

    /**
     * Camelize a hyphen-delimited string.
     */
    var camelizeRE = /-(\w)/g
    var camelize = cached(function(str) {
        return str.replace(camelizeRE, function(_, c) {
            return c ? c.toUpperCase() : ""
        })
    })

    /**
     * Capitalize a string.
     */
    var capitalize = cached(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
    })

    /**
     * Hyphenate a camelCase string.
     */
    var hyphenateRE = /([^-])([A-Z])/g
    var hyphenate = cached(function(str) {
        return str
            .replace(hyphenateRE, "$1-$2")
            .replace(hyphenateRE, "$1-$2")
            .toLowerCase()
    })

    /**
     * Simple bind, faster than native
     */
    function bind(fn, ctx) {
        function boundFn(a) {
            var l = arguments.length
            return l ? (l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a)) : fn.call(ctx)
        }
        // record original fn length
        boundFn._length = fn.length
        return boundFn
    }

    /**
     * Convert an Array-like object to a real Array.
     */
    function toArray(list, start) {
        start = start || 0
        var i = list.length - start
        var ret = new Array(i)
        while (i--) {
            ret[i] = list[i + start]
        }
        return ret
    }

    /**
     * Mix properties into target object.
     */
    function extend(to, _from) {
        for (var key in _from) {
            to[key] = _from[key]
        }
        return to
    }

    /**
     * Merge an Array of Objects into a single Object.
     */
    function toObject(arr) {
        var res = {}
        for (var i = 0; i < arr.length; i++) {
            if (arr[i]) {
                extend(res, arr[i])
            }
        }
        return res
    }

    /**
     * Perform no operation.
     * Stubbing args to make Flow happy without leaving useless transpiled code
     * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
     */
    function noop(a, b, c) {}

    /**
     * Always return false.
     */
    var no = function(a, b, c) {
        return false
    }

    /**
     * Return same value
     */
    var identity = function(_) {
        return _
    }

    /**
     * Generate a static keys string from compiler modules.
     */

    /**
     * Check if two values are loosely equal - that is,
     * if they are plain objects, do they have the same shape?
     */
    function looseEqual(a, b) {
        var isObjectA = isObject(a)
        var isObjectB = isObject(b)
        if (isObjectA && isObjectB) {
            try {
                return JSON.stringify(a) === JSON.stringify(b)
            } catch (e) {
                // possible circular reference
                return a === b
            }
        } else if (!isObjectA && !isObjectB) {
            return String(a) === String(b)
        } else {
            return false
        }
    }

    function looseIndexOf(arr, val) {
        for (var i = 0; i < arr.length; i++) {
            if (looseEqual(arr[i], val)) {
                return i
            }
        }
        return -1
    }

    /**
     * Ensure a function is called only once.
     */
    function once(fn) {
        var called = false
        return function() {
            if (!called) {
                called = true
                fn.apply(this, arguments)
            }
        }
    }

    var SSR_ATTR = "data-server-rendered"

    var ASSET_TYPES = ["component", "directive", "filter"]

    var LIFECYCLE_HOOKS = [
        "beforeCreate",
        "created",
        "beforeMount",
        "mounted",
        "beforeUpdate",
        "updated",
        "beforeDestroy",
        "destroyed",
        "activated",
        "deactivated",
        "onLaunch",
        "onLoad",
        "onShow",
        "onReady",
        "onHide",
        "onUnload",
        "onPullDownRefresh",
        "onReachBottom",
        "onShareAppMessage",
        "onPageScroll",
        "onTabItemTap",
        "attached",
        "ready",
        "moved",
        "detached",
        "onUniNViewMessage", //fixed by xxxxxx
        "onNavigationBarButtonTap", //fixed by xxxxxx
        "onBackPress",//fixed by xxxxxx
    ]

    /*  */

    var config = {
        /**
         * Option merge strategies (used in core/util/options)
         */
        optionMergeStrategies: Object.create(null),

        /**
         * Whether to suppress warnings.
         */
        silent: false,

        /**
         * Show production mode tip message on boot?
         */
        productionTip: "production" !== "production",

        /**
         * Whether to enable devtools
         */
        devtools: "production" !== "production",

        /**
         * Whether to record perf
         */
        performance: false,

        /**
         * Error handler for watcher errors
         */
        errorHandler: null,

        /**
         * Warn handler for watcher warns
         */
        warnHandler: null,

        /**
         * Ignore certain custom elements
         */
        ignoredElements: [],

        /**
         * Custom user key aliases for v-on
         */
        keyCodes: Object.create(null),

        /**
         * Check if a tag is reserved so that it cannot be registered as a
         * component. This is platform-dependent and may be overwritten.
         */
        isReservedTag: no,

        /**
         * Check if an attribute is reserved so that it cannot be used as a component
         * prop. This is platform-dependent and may be overwritten.
         */
        isReservedAttr: no,

        /**
         * Check if a tag is an unknown element.
         * Platform-dependent.
         */
        isUnknownElement: no,

        /**
         * Get the namespace of an element
         */
        getTagNamespace: noop,

        /**
         * Parse the real tag name for the specific platform.
         */
        parsePlatformTagName: identity,

        /**
         * Check if an attribute must be bound using property, e.g. value
         * Platform-dependent.
         */
        mustUseProp: no,

        /**
         * Exposed for legacy reasons
         */
        _lifecycleHooks: LIFECYCLE_HOOKS
    }

    /*  */

    var emptyObject = Object.freeze({})

    /**
     * Check if a string starts with $ or _
     */
    function isReserved(str) {
        var c = (str + "").charCodeAt(0)
        return c === 0x24 || c === 0x5f
    }

    /**
     * Define a property.
     */
    function def(obj, key, val, enumerable) {
        Object.defineProperty(obj, key, {
            value: val,
            enumerable: !!enumerable,
            writable: true,
            configurable: true
        })
    }

    /**
     * Parse simple path.
     */
    var bailRE = /[^\w.$]/

    function parsePath(path) {
        if (bailRE.test(path)) {
            return
        }
        var segments = path.split(".")
        return function(obj) {
            for (var i = 0; i < segments.length; i++) {
                if (!obj) {
                    return
                }
                obj = obj[segments[i]]
            }
            return obj
        }
    }

    /*  */

    var warn = noop

    var formatComponentName = null // work around flow check

    /*  */

    function handleError(err, vm, info) {
        if (config.errorHandler) {
            config.errorHandler.call(null, err, vm, info)
        } else {
            if (inBrowser && typeof console !== "undefined") {
                console.error(err)
            } else {
                throw err
            }
        }
    }

    /*  */

    // can we use __proto__?
    var hasProto = "__proto__" in {}

    // Browser environment sniffing
    var inBrowser = typeof window !== "undefined"
    var UA = ["mpvue-runtime"].join()
    var isIE = UA && /msie|trident/.test(UA)
    var isIE9 = UA && UA.indexOf("msie 9.0") > 0
    var isEdge = UA && UA.indexOf("edge/") > 0
    var isAndroid = UA && UA.indexOf("android") > 0
    var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA)
    var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge

    // Firefix has a "watch" function on Object.prototype...
    var nativeWatch = {}.watch

    var supportsPassive = false
    if (inBrowser) {
        try {
            var opts = {}
            Object.defineProperty(opts, "passive", {
                get: function get() {
                    /* istanbul ignore next */
                    supportsPassive = true
                }
            }) // https://github.com/facebook/flow/issues/285
            window.addEventListener("test-passive", null, opts)
        } catch (e) {}
    }

    // this needs to be lazy-evaled because vue may be required before
    // vue-server-renderer can set VUE_ENV
    var _isServer
    var isServerRendering = function() {
        if (_isServer === undefined) {
            /* istanbul ignore if */
            if (!inBrowser && typeof global !== "undefined") {
                // detect presence of vue-server-renderer and avoid
                // Webpack shimming the process
                _isServer = global["process"].env.VUE_ENV === "server"
            } else {
                _isServer = false
            }
        }
        return _isServer
    }

    // detect devtools
    var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__

    /* istanbul ignore next */
    function isNative(Ctor) {
        return typeof Ctor === "function" && /native code/.test(Ctor.toString())
    }

    var hasSymbol =
        typeof Symbol !== "undefined" &&
        isNative(Symbol) &&
        typeof Reflect !== "undefined" &&
        isNative(Reflect.ownKeys)

    /**
     * Defer a task to execute it asynchronously.
     */
    var nextTick = (function() {
        var callbacks = []
        var pending = false
        var timerFunc

        function nextTickHandler() {
            pending = false
            var copies = callbacks.slice(0)
            callbacks.length = 0
            for (var i = 0; i < copies.length; i++) {
                copies[i]()
            }
        }

        // the nextTick behavior leverages the microtask queue, which can be accessed
        // via either native Promise.then or MutationObserver.
        // MutationObserver has wider support, however it is seriously bugged in
        // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
        // completely stops working after triggering a few times... so, if native
        // Promise is available, we will use it:
        /* istanbul ignore if */
        if (typeof Promise !== "undefined" && isNative(Promise)) {
            var p = Promise.resolve()
            var logError = function(err) {
                console.error(err)
            }
            timerFunc = function() {
                p.then(nextTickHandler).catch(logError)
                // in problematic UIWebViews, Promise.then doesn't completely break, but
                // it can get stuck in a weird state where callbacks are pushed into the
                // microtask queue but the queue isn't being flushed, until the browser
                // needs to do some other work, e.g. handle a timer. Therefore we can
                // "force" the microtask queue to be flushed by adding an empty timer.
                if (isIOS) {
                    setTimeout(noop)
                }
            }
            // } else if (typeof MutationObserver !== 'undefined' && (
            //   isNative(MutationObserver) ||
            //   // PhantomJS and iOS 7.x
            //   MutationObserver.toString() === '[object MutationObserverConstructor]'
            // )) {
            //   // use MutationObserver where native Promise is not available,
            //   // e.g. PhantomJS IE11, iOS7, Android 4.4
            //   var counter = 1
            //   var observer = new MutationObserver(nextTickHandler)
            //   var textNode = document.createTextNode(String(counter))
            //   observer.observe(textNode, {
            //     characterData: true
            //   })
            //   timerFunc = () => {
            //     counter = (counter + 1) % 2
            //     textNode.data = String(counter)
            //   }
        } else {
            // fallback to setTimeout
            /* istanbul ignore next */
            timerFunc = function() {
                setTimeout(nextTickHandler, 0)
            }
        }

        return function queueNextTick(cb, ctx) {
            var _resolve
            callbacks.push(function() {
                if (cb) {
                    try {
                        cb.call(ctx)
                    } catch (e) {
                        handleError(e, ctx, "nextTick")
                    }
                } else if (_resolve) {
                    _resolve(ctx)
                }
            })
            if (!pending) {
                pending = true
                timerFunc()
            }
            if (!cb && typeof Promise !== "undefined") {
                return new Promise(function(resolve, reject) {
                    _resolve = resolve
                })
            }
        }
    })()

    var _Set
    /* istanbul ignore if */
    if (typeof Set !== "undefined" && isNative(Set)) {
        // use native Set when available.
        _Set = Set
    } else {
        // a non-standard Set polyfill that only works with primitive keys.
        _Set = (function() {
            function Set() {
                this.set = Object.create(null)
            }
            Set.prototype.has = function has(key) {
                return this.set[key] === true
            }
            Set.prototype.add = function add(key) {
                this.set[key] = true
            }
            Set.prototype.clear = function clear() {
                this.set = Object.create(null)
            }

            return Set
        })()
    }

    /*  */

    var uid$1 = 0

    /**
     * A dep is an observable that can have multiple
     * directives subscribing to it.
     */
    var Dep = function Dep() {
        this.id = uid$1++
        this.subs = []
    }

    Dep.prototype.addSub = function addSub(sub) {
        this.subs.push(sub)
    }

    Dep.prototype.removeSub = function removeSub(sub) {
        remove(this.subs, sub)
    }

    Dep.prototype.depend = function depend() {
        if (Dep.target) {
            Dep.target.addDep(this)
        }
    }

    Dep.prototype.notify = function notify() {
        // stabilize the subscriber list first
        var subs = this.subs.slice()
        for (var i = 0, l = subs.length; i < l; i++) {
            subs[i].update()
        }
    }

    // the current target watcher being evaluated.
    // this is globally unique because there could be only one
    // watcher being evaluated at any time.
    Dep.target = null
    var targetStack = []

    function pushTarget(_target) {
        if (Dep.target) {
            targetStack.push(Dep.target)
        }
        Dep.target = _target
    }

    function popTarget() {
        Dep.target = targetStack.pop()
    }

    /*
     * not type checking this file because flow doesn't play well with
     * dynamically accessing methods on Array prototype
     */

    var arrayProto = Array.prototype
    var arrayMethods = Object.create(arrayProto)
    ;["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function(method) {
        // cache original method
        var original = arrayProto[method]
        def(arrayMethods, method, function mutator() {
            var args = [],
                len = arguments.length
            while (len--) args[len] = arguments[len]

            var result = original.apply(this, args)
            var ob = this.__ob__
            var inserted
            switch (method) {
                case "push":
                case "unshift":
                    inserted = args
                    break
                case "splice":
                    inserted = args.slice(2)
                    break
            }
            if (inserted) {
                ob.observeArray(inserted)
            }
            // notify change
            ob.dep.notify()
            return result
        })
    })

    /*  */

    var arrayKeys = Object.getOwnPropertyNames(arrayMethods)

    /**
     * By default, when a reactive property is set, the new value is
     * also converted to become reactive. However when passing down props,
     * we don't want to force conversion because the value may be a nested value
     * under a frozen data structure. Converting it would defeat the optimization.
     */
    var observerState = {
        shouldConvert: true
    }

    /**
     * Observer class that are attached to each observed
     * object. Once attached, the observer converts target
     * object's property keys into getter/setters that
     * collect dependencies and dispatches updates.
     */
    var Observer = function Observer(value) {
        this.value = value
        this.dep = new Dep()
        this.vmCount = 0
        def(value, "__ob__", this)
        if (Array.isArray(value)) {
            var augment = hasProto ? protoAugment : copyAugment
            augment(value, arrayMethods, arrayKeys)
            this.observeArray(value)
        } else {
            this.walk(value)
        }
    }

    /**
     * Walk through each property and convert them into
     * getter/setters. This method should only be called when
     * value type is Object.
     */
    Observer.prototype.walk = function walk(obj) {
        var keys = Object.keys(obj)
        for (var i = 0; i < keys.length; i++) {
            defineReactive$$1(obj, keys[i], obj[keys[i]])
        }
    }

    /**
     * Observe a list of Array items.
     */
    Observer.prototype.observeArray = function observeArray(items) {
        for (var i = 0, l = items.length; i < l; i++) {
            observe(items[i])
        }
    }

    // helpers

    /**
     * Augment an target Object or Array by intercepting
     * the prototype chain using __proto__
     */
    function protoAugment(target, src, keys) {
        /* eslint-disable no-proto */
        target.__proto__ = src
        /* eslint-enable no-proto */
    }

    /**
     * Augment an target Object or Array by defining
     * hidden properties.
     */
    /* istanbul ignore next */
    function copyAugment(target, src, keys) {
        for (var i = 0, l = keys.length; i < l; i++) {
            var key = keys[i]
            def(target, key, src[key])
        }
    }

    /**
     * Attempt to create an observer instance for a value,
     * returns the new observer if successfully observed,
     * or the existing observer if the value already has one.
     */
    function observe(value, asRootData) {
        if (!isObject(value)) {
            return
        }
        var ob
        if (hasOwn(value, "__ob__") && value.__ob__ instanceof Observer) {
            ob = value.__ob__
        } else if (
            observerState.shouldConvert &&
            !isServerRendering() &&
            (Array.isArray(value) || isPlainObject(value)) &&
            Object.isExtensible(value) &&
            !value._isVue
        ) {
            ob = new Observer(value)
        }
        if (asRootData && ob) {
            ob.vmCount++
        }
        return ob
    }

    /**
     * Define a reactive property on an Object.
     */
    function defineReactive$$1(obj, key, val, customSetter, shallow) {
        var dep = new Dep()

        var property = Object.getOwnPropertyDescriptor(obj, key)
        if (property && property.configurable === false) {
            return
        }

        // cater for pre-defined getter/setters
        var getter = property && property.get
        var setter = property && property.set

        var childOb = !shallow && observe(val)
        Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: true,
            get: function reactiveGetter() {
                var value = getter ? getter.call(obj) : val
                if (Dep.target) {
                    dep.depend()
                    if (childOb) {
                        childOb.dep.depend()
                    }
                    if (Array.isArray(value)) {
                        dependArray(value)
                    }
                }
                return value
            },
            set: function reactiveSetter(newVal) {
                var value = getter ? getter.call(obj) : val
                /* eslint-disable no-self-compare */
                if (newVal === value || (newVal !== newVal && value !== value)) {
                    return
                }
                /* eslint-enable no-self-compare */
                if (false) {}
                if (setter) {
                    setter.call(obj, newVal)
                } else {
                    val = newVal
                }
                childOb = !shallow && observe(newVal)
                dep.notify()
            }
        })
    }

    /**
     * Set a property on an object. Adds the new property and
     * triggers change notification if the property doesn't
     * already exist.
     */
    function set(target, key, val) {
        if (Array.isArray(target) && isValidArrayIndex(key)) {
            target.length = Math.max(target.length, key)
            target.splice(key, 1, val)
            return val
        }
        if (hasOwn(target, key)) {
            target[key] = val
            return val
        }
        var ob = target.__ob__
        if (target._isVue || (ob && ob.vmCount)) {
             false &&
                false
            return val
        }
        if (!ob) {
            target[key] = val
            return val
        }
        defineReactive$$1(ob.value, key, val)
        ob.dep.notify()
        return val
    }

    /**
     * Delete a property and trigger change if necessary.
     */
    function del(target, key) {
        if (Array.isArray(target) && isValidArrayIndex(key)) {
            target.splice(key, 1)
            return
        }
        var ob = target.__ob__
        if (target._isVue || (ob && ob.vmCount)) {
             false &&
                false
            return
        }
        if (!hasOwn(target, key)) {
            return
        }
        delete target[key]
        if (!ob) {
            return
        }
        ob.dep.notify()
    }

    /**
     * Collect dependencies on array elements when the array is touched, since
     * we cannot intercept array element access like property getters.
     */
    function dependArray(value) {
        for (var e = void 0, i = 0, l = value.length; i < l; i++) {
            e = value[i]
            e && e.__ob__ && e.__ob__.dep.depend()
            if (Array.isArray(e)) {
                dependArray(e)
            }
        }
    }

    /*  */

    /**
     * Option overwriting strategies are functions that handle
     * how to merge a parent option value and a child option
     * value into the final value.
     */
    var strats = config.optionMergeStrategies

    /**
     * Options with restrictions
     */
    /**
     * Helper that recursively merges two data objects together.
     */
    function mergeData(to, from) {
        if (!from) {
            return to
        }
        var key, toVal, fromVal
        var keys = Object.keys(from)
        for (var i = 0; i < keys.length; i++) {
            key = keys[i]
            toVal = to[key]
            fromVal = from[key]
            if (!hasOwn(to, key)) {
                set(to, key, fromVal)
            } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
                mergeData(toVal, fromVal)
            }
        }
        return to
    }

    /**
     * Data
     */
    function mergeDataOrFn(parentVal, childVal, vm) {
        if (!vm) {
            // in a Vue.extend merge, both should be functions
            if (!childVal) {
                return parentVal
            }
            if (!parentVal) {
                return childVal
            }
            // when parentVal & childVal are both present,
            // we need to return a function that returns the
            // merged result of both functions... no need to
            // check if parentVal is a function here because
            // it has to be a function to pass previous merges.
            return function mergedDataFn() {
                return mergeData(
                    typeof childVal === "function" ? childVal.call(this) : childVal,
                    parentVal.call(this)
                )
            }
        } else if (parentVal || childVal) {
            return function mergedInstanceDataFn() {
                // instance merge
                var instanceData = typeof childVal === "function" ? childVal.call(vm) : childVal
                var defaultData = typeof parentVal === "function" ? parentVal.call(vm) : undefined
                if (instanceData) {
                    return mergeData(instanceData, defaultData)
                } else {
                    return defaultData
                }
            }
        }
    }

    strats.data = function(parentVal, childVal, vm) {
        if (!vm) {
            if (childVal && typeof childVal !== "function") {
                 false &&
                    false

                return parentVal
            }
            return mergeDataOrFn.call(this, parentVal, childVal)
        }

        return mergeDataOrFn(parentVal, childVal, vm)
    }

    /**
     * Hooks and props are merged as arrays.
     */
    function mergeHook(parentVal, childVal) {
        return childVal
            ? parentVal
                ? parentVal.concat(childVal)
                : Array.isArray(childVal)
                    ? childVal
                    : [childVal]
            : parentVal
    }

    LIFECYCLE_HOOKS.forEach(function(hook) {
        strats[hook] = mergeHook
    })

    /**
     * Assets
     *
     * When a vm is present (instance creation), we need to do
     * a three-way merge between constructor options, instance
     * options and parent options.
     */
    function mergeAssets(parentVal, childVal) {
        var res = Object.create(parentVal || null)
        return childVal ? extend(res, childVal) : res
    }

    ASSET_TYPES.forEach(function(type) {
        strats[type + "s"] = mergeAssets
    })

    /**
     * Watchers.
     *
     * Watchers hashes should not overwrite one
     * another, so we merge them as arrays.
     */
    strats.watch = function(parentVal, childVal) {
        // work around Firefox's Object.prototype.watch...
        if (parentVal === nativeWatch) {
            parentVal = undefined
        }
        if (childVal === nativeWatch) {
            childVal = undefined
        }
        /* istanbul ignore if */
        if (!childVal) {
            return Object.create(parentVal || null)
        }
        if (!parentVal) {
            return childVal
        }
        var ret = {}
        extend(ret, parentVal)
        for (var key in childVal) {
            var parent = ret[key]
            var child = childVal[key]
            if (parent && !Array.isArray(parent)) {
                parent = [parent]
            }
            ret[key] = parent ? parent.concat(child) : Array.isArray(child) ? child : [child]
        }
        return ret
    }

    /**
     * Other object hashes.
     */
    strats.props = strats.methods = strats.inject = strats.computed = function(
        parentVal,
        childVal
    ) {
        if (!childVal) {
            return Object.create(parentVal || null)
        }
        if (!parentVal) {
            return childVal
        }
        var ret = Object.create(null)
        extend(ret, parentVal)
        extend(ret, childVal)
        return ret
    }
    strats.provide = mergeDataOrFn

    /**
     * Default strategy.
     */
    var defaultStrat = function(parentVal, childVal) {
        return childVal === undefined ? parentVal : childVal
    }

    /**
     * Ensure all props option syntax are normalized into the
     * Object-based format.
     */
    function normalizeProps(options) {
        var props = options.props
        if (!props) {
            return
        }
        var res = {}
        var i, val, name
        if (Array.isArray(props)) {
            i = props.length
            while (i--) {
                val = props[i]
                if (typeof val === "string") {
                    name = camelize(val)
                    res[name] = {
                        type: null
                    }
                } else {
                }
            }
        } else if (isPlainObject(props)) {
            for (var key in props) {
                val = props[key]
                name = camelize(key)
                res[name] = isPlainObject(val)
                    ? val
                    : {
                          type: val
                      }
            }
        }
        options.props = res
    }

    /**
     * Normalize all injections into Object-based format
     */
    function normalizeInject(options) {
        var inject = options.inject
        if (Array.isArray(inject)) {
            var normalized = (options.inject = {})
            for (var i = 0; i < inject.length; i++) {
                normalized[inject[i]] = inject[i]
            }
        }
    }

    /**
     * Normalize raw function directives into object format.
     */
    function normalizeDirectives(options) {
        var dirs = options.directives
        if (dirs) {
            for (var key in dirs) {
                var def = dirs[key]
                if (typeof def === "function") {
                    dirs[key] = {
                        bind: def,
                        update: def
                    }
                }
            }
        }
    }

    /**
     * Merge two option objects into a new one.
     * Core utility used in both instantiation and inheritance.
     */
    function mergeOptions(parent, child, vm) {
        if (typeof child === "function") {
            child = child.options
        }

        normalizeProps(child)
        normalizeInject(child)
        normalizeDirectives(child)
        var extendsFrom = child.extends
        if (extendsFrom) {
            parent = mergeOptions(parent, extendsFrom, vm)
        }
        if (child.mixins) {
            for (var i = 0, l = child.mixins.length; i < l; i++) {
                parent = mergeOptions(parent, child.mixins[i], vm)
            }
        }
        var options = {}
        var key
        for (key in parent) {
            mergeField(key)
        }
        for (key in child) {
            if (!hasOwn(parent, key)) {
                mergeField(key)
            }
        }

        function mergeField(key) {
            var strat = strats[key] || defaultStrat
            options[key] = strat(parent[key], child[key], vm, key)
        }
        return options
    }

    /**
     * Resolve an asset.
     * This function is used because child instances need access
     * to assets defined in its ancestor chain.
     */
    function resolveAsset(options, type, id, warnMissing) {
        /* istanbul ignore if */
        if (typeof id !== "string") {
            return
        }
        var assets = options[type]
        // check local registration variations first
        if (hasOwn(assets, id)) {
            return assets[id]
        }
        var camelizedId = camelize(id)
        if (hasOwn(assets, camelizedId)) {
            return assets[camelizedId]
        }
        var PascalCaseId = capitalize(camelizedId)
        if (hasOwn(assets, PascalCaseId)) {
            return assets[PascalCaseId]
        }
        // fallback to prototype chain
        var res = assets[id] || assets[camelizedId] || assets[PascalCaseId]
        if (false) {}
        return res
    }

    /*  */

    function validateProp(key, propOptions, propsData, vm) {
        var prop = propOptions[key]
        var absent = !hasOwn(propsData, key)
        var value = propsData[key]
        // handle boolean props
        if (isType(Boolean, prop.type)) {
            if (absent && !hasOwn(prop, "default")) {
                value = false
            } else if (!isType(String, prop.type) && (value === "" || value === hyphenate(key))) {
                value = true
            }
        }
        // check default value
        if (value === undefined) {
            value = getPropDefaultValue(vm, prop, key)
            // since the default value is a fresh copy,
            // make sure to observe it.
            var prevShouldConvert = observerState.shouldConvert
            observerState.shouldConvert = true
            observe(value)
            observerState.shouldConvert = prevShouldConvert
        }
        return value
    }

    /**
     * Get the default value of a prop.
     */
    function getPropDefaultValue(vm, prop, key) {
        // no default, return undefined
        if (!hasOwn(prop, "default")) {
            return undefined
        }
        var def = prop.default
        // warn against non-factory defaults for Object & Array
        if (false) {}
        // the raw prop value was also undefined from previous render,
        // return previous default value to avoid unnecessary watcher trigger
        if (
            vm &&
            vm.$options.propsData &&
            vm.$options.propsData[key] === undefined &&
            vm._props[key] !== undefined
        ) {
            return vm._props[key]
        }
        // call factory function for non-Function types
        // a value is Function if its prototype is function even across different execution context
        return typeof def === "function" && getType(prop.type) !== "Function" ? def.call(vm) : def
    }

    /**
     * Use function string name to check built-in types,
     * because a simple equality check will fail when running
     * across different vms / iframes.
     */
    function getType(fn) {
        var match = fn && fn.toString().match(/^\s*function (\w+)/)
        return match ? match[1] : ""
    }

    function isType(type, fn) {
        if (!Array.isArray(fn)) {
            return getType(fn) === getType(type)
        }
        for (var i = 0, len = fn.length; i < len; i++) {
            if (getType(fn[i]) === getType(type)) {
                return true
            }
        }
        /* istanbul ignore next */
        return false
    }

    /*  */

    /* not type checking this file because flow doesn't play well with Proxy */

    var mark
    var measure

    /*  */

    var VNode = function VNode(
        tag,
        data,
        children,
        text,
        elm,
        context,
        componentOptions,
        asyncFactory
    ) {
        this.tag = tag
        this.data = data
        this.children = children
        this.text = text
        this.elm = elm
        this.ns = undefined
        this.context = context
        this.functionalContext = undefined
        this.key = data && data.key
        this.componentOptions = componentOptions
        this.componentInstance = undefined
        this.parent = undefined
        this.raw = false
        this.isStatic = false
        this.isRootInsert = true
        this.isComment = false
        this.isCloned = false
        this.isOnce = false
        this.asyncFactory = asyncFactory
        this.asyncMeta = undefined
        this.isAsyncPlaceholder = false
    }

    var prototypeAccessors = {
        child: {}
    }

    // DEPRECATED: alias for componentInstance for backwards compat.
    /* istanbul ignore next */
    prototypeAccessors.child.get = function() {
        return this.componentInstance
    }

    Object.defineProperties(VNode.prototype, prototypeAccessors)

    var createEmptyVNode = function(text) {
        if (text === void 0) text = ""

        var node = new VNode()
        node.text = text
        node.isComment = true
        return node
    }

    function createTextVNode(val) {
        return new VNode(undefined, undefined, undefined, String(val))
    }

    // optimized shallow clone
    // used for static nodes and slot nodes because they may be reused across
    // multiple renders, cloning them avoids errors when DOM manipulations rely
    // on their elm reference.
    function cloneVNode(vnode) {
        var cloned = new VNode(
            vnode.tag,
            vnode.data,
            vnode.children,
            vnode.text,
            vnode.elm,
            vnode.context,
            vnode.componentOptions,
            vnode.asyncFactory
        )
        cloned.ns = vnode.ns
        cloned.isStatic = vnode.isStatic
        cloned.key = vnode.key
        cloned.isComment = vnode.isComment
        cloned.isCloned = true
        return cloned
    }

    function cloneVNodes(vnodes) {
        var len = vnodes.length
        var res = new Array(len)
        for (var i = 0; i < len; i++) {
            res[i] = cloneVNode(vnodes[i])
        }
        return res
    }

    /*  */

    var normalizeEvent = cached(function(name) {
        var passive = name.charAt(0) === "&"
        name = passive ? name.slice(1) : name
        var once$$1 = name.charAt(0) === "~" // Prefixed last, checked first
        name = once$$1 ? name.slice(1) : name
        var capture = name.charAt(0) === "!"
        name = capture ? name.slice(1) : name
        return {
            name: name,
            once: once$$1,
            capture: capture,
            passive: passive
        }
    })

    function createFnInvoker(fns) {
        function invoker() {
            var arguments$1 = arguments

            var fns = invoker.fns
            if (Array.isArray(fns)) {
                var cloned = fns.slice()
                for (var i = 0; i < cloned.length; i++) {
                    cloned[i].apply(null, arguments$1)
                }
            } else {
                // return handler return value for single handlers
                return fns.apply(null, arguments)
            }
        }
        invoker.fns = fns
        return invoker
    }

    function updateListeners(on, oldOn, add, remove$$1, vm) {
        var name, cur, old, event
        for (name in on) {
            cur = on[name]
            old = oldOn[name]
            event = normalizeEvent(name)
            if (isUndef(cur)) {
                 false &&
                    false
            } else if (isUndef(old)) {
                if (isUndef(cur.fns)) {
                    cur = on[name] = createFnInvoker(cur)
                }
                add(event.name, cur, event.once, event.capture, event.passive)
            } else if (cur !== old) {
                old.fns = cur
                on[name] = old
            }
        }
        for (name in oldOn) {
            if (isUndef(on[name])) {
                event = normalizeEvent(name)
                remove$$1(event.name, oldOn[name], event.capture)
            }
        }
    }

    /*  */

    /*  */

    function extractPropsFromVNodeData(data, Ctor, tag) {
        // we are only extracting raw values here.
        // validation and default values are handled in the child
        // component itself.
        var propOptions = Ctor.options.props
        if (isUndef(propOptions)) {
            return
        }
        var res = {}
        var attrs = data.attrs
        var props = data.props
        if (isDef(attrs) || isDef(props)) {
            for (var key in propOptions) {
                var altKey = hyphenate(key)
                checkProp(res, props, key, altKey, true) ||
                    checkProp(res, attrs, key, altKey, false)
            }
        }
        return res
    }

    function checkProp(res, hash, key, altKey, preserve) {
        if (isDef(hash)) {
            if (hasOwn(hash, key)) {
                res[key] = hash[key]
                if (!preserve) {
                    delete hash[key]
                }
                return true
            } else if (hasOwn(hash, altKey)) {
                res[key] = hash[altKey]
                if (!preserve) {
                    delete hash[altKey]
                }
                return true
            }
        }
        return false
    }

    /*  */

    // The template compiler attempts to minimize the need for normalization by
    // statically analyzing the template at compile time.
    //
    // For plain HTML markup, normalization can be completely skipped because the
    // generated render function is guaranteed to return Array<VNode>. There are
    // two cases where extra normalization is needed:

    // 1. When the children contains components - because a functional component
    // may return an Array instead of a single root. In this case, just a simple
    // normalization is needed - if any child is an Array, we flatten the whole
    // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
    // because functional components already normalize their own children.
    function simpleNormalizeChildren(children) {
        for (var i = 0; i < children.length; i++) {
            if (Array.isArray(children[i])) {
                return Array.prototype.concat.apply([], children)
            }
        }
        return children
    }

    // 2. When the children contains constructs that always generated nested Arrays,
    // e.g. <template>, <slot>, v-for, or when the children is provided by user
    // with hand-written render functions / JSX. In such cases a full normalization
    // is needed to cater to all possible types of children values.
    function normalizeChildren(children) {
        return isPrimitive(children)
            ? [createTextVNode(children)]
            : Array.isArray(children)
                ? normalizeArrayChildren(children)
                : undefined
    }

    function isTextNode(node) {
        return isDef(node) && isDef(node.text) && isFalse(node.isComment)
    }

    function normalizeArrayChildren(children, nestedIndex) {
        var res = []
        var i, c, last
        for (i = 0; i < children.length; i++) {
            c = children[i]
            if (isUndef(c) || typeof c === "boolean") {
                continue
            }
            last = res[res.length - 1]
            //  nested
            if (Array.isArray(c)) {
                res.push.apply(res, normalizeArrayChildren(c, (nestedIndex || "") + "_" + i))
            } else if (isPrimitive(c)) {
                if (isTextNode(last)) {
                    // merge adjacent text nodes
                    // this is necessary for SSR hydration because text nodes are
                    // essentially merged when rendered to HTML strings
                    last.text += String(c)
                } else if (c !== "") {
                    // convert primitive to vnode
                    res.push(createTextVNode(c))
                }
            } else {
                if (isTextNode(c) && isTextNode(last)) {
                    // merge adjacent text nodes
                    res[res.length - 1] = createTextVNode(last.text + c.text)
                } else {
                    // default key for nested array children (likely generated by v-for)
                    if (
                        isTrue(children._isVList) &&
                        isDef(c.tag) &&
                        isUndef(c.key) &&
                        isDef(nestedIndex)
                    ) {
                        c.key = "__vlist" + nestedIndex + "_" + i + "__"
                    }
                    res.push(c)
                }
            }
        }
        return res
    }

    /*  */

    function ensureCtor(comp, base) {
        if (comp.__esModule && comp.default) {
            comp = comp.default
        }
        return isObject(comp) ? base.extend(comp) : comp
    }

    function createAsyncPlaceholder(factory, data, context, children, tag) {
        var node = createEmptyVNode()
        node.asyncFactory = factory
        node.asyncMeta = {
            data: data,
            context: context,
            children: children,
            tag: tag
        }
        return node
    }

    function resolveAsyncComponent(factory, baseCtor, context) {
        if (isTrue(factory.error) && isDef(factory.errorComp)) {
            return factory.errorComp
        }

        if (isDef(factory.resolved)) {
            return factory.resolved
        }

        if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
            return factory.loadingComp
        }

        if (isDef(factory.contexts)) {
            // already pending
            factory.contexts.push(context)
        } else {
            var contexts = (factory.contexts = [context])
            var sync = true

            var forceRender = function() {
                for (var i = 0, l = contexts.length; i < l; i++) {
                    contexts[i].$forceUpdate()
                }
            }

            var resolve = once(function(res) {
                // cache resolved
                factory.resolved = ensureCtor(res, baseCtor)
                // invoke callbacks only if this is not a synchronous resolve
                // (async resolves are shimmed as synchronous during SSR)
                if (!sync) {
                    forceRender()
                }
            })

            var reject = once(function(reason) {
                 false &&
                    false
                if (isDef(factory.errorComp)) {
                    factory.error = true
                    forceRender()
                }
            })

            var res = factory(resolve, reject)

            if (isObject(res)) {
                if (typeof res.then === "function") {
                    // () => Promise
                    if (isUndef(factory.resolved)) {
                        res.then(resolve, reject)
                    }
                } else if (isDef(res.component) && typeof res.component.then === "function") {
                    res.component.then(resolve, reject)

                    if (isDef(res.error)) {
                        factory.errorComp = ensureCtor(res.error, baseCtor)
                    }

                    if (isDef(res.loading)) {
                        factory.loadingComp = ensureCtor(res.loading, baseCtor)
                        if (res.delay === 0) {
                            factory.loading = true
                        } else {
                            setTimeout(function() {
                                if (isUndef(factory.resolved) && isUndef(factory.error)) {
                                    factory.loading = true
                                    forceRender()
                                }
                            }, res.delay || 200)
                        }
                    }

                    if (isDef(res.timeout)) {
                        setTimeout(function() {
                            if (isUndef(factory.resolved)) {
                                reject(null)
                            }
                        }, res.timeout)
                    }
                }
            }

            sync = false
            // return in case resolved synchronously
            return factory.loading ? factory.loadingComp : factory.resolved
        }
    }

    /*  */

    function getFirstComponentChild(children) {
        if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
                var c = children[i]
                if (isDef(c) && isDef(c.componentOptions)) {
                    return c
                }
            }
        }
    }

    /*  */

    /*  */

    function initEvents(vm) {
        vm._events = Object.create(null)
        vm._hasHookEvent = false
        // init parent attached events
        var listeners = vm.$options._parentListeners
        if (listeners) {
            updateComponentListeners(vm, listeners)
        }
    }

    var target

    function add(event, fn, once$$1) {
        if (once$$1) {
            target.$once(event, fn)
        } else {
            target.$on(event, fn)
        }
    }

    function remove$1(event, fn) {
        target.$off(event, fn)
    }

    function updateComponentListeners(vm, listeners, oldListeners) {
        target = vm
        updateListeners(listeners, oldListeners || {}, add, remove$1, vm)
    }

    function eventsMixin(Vue) {
        var hookRE = /^hook:/
        Vue.prototype.$on = function(event, fn) {
            var this$1 = this

            var vm = this
            if (Array.isArray(event)) {
                for (var i = 0, l = event.length; i < l; i++) {
                    this$1.$on(event[i], fn)
                }
            } else {
                ;(vm._events[event] || (vm._events[event] = [])).push(fn)
                // optimize hook:event cost by using a boolean flag marked at registration
                // instead of a hash lookup
                if (hookRE.test(event)) {
                    vm._hasHookEvent = true
                }
            }
            return vm
        }

        Vue.prototype.$once = function(event, fn) {
            var vm = this

            function on() {
                vm.$off(event, on)
                fn.apply(vm, arguments)
            }
            on.fn = fn
            vm.$on(event, on)
            return vm
        }

        Vue.prototype.$off = function(event, fn) {
            var this$1 = this

            var vm = this
            // all
            if (!arguments.length) {
                vm._events = Object.create(null)
                return vm
            }
            // array of events
            if (Array.isArray(event)) {
                for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
                    this$1.$off(event[i$1], fn)
                }
                return vm
            }
            // specific event
            var cbs = vm._events[event]
            if (!cbs) {
                return vm
            }
            if (arguments.length === 1) {
                vm._events[event] = null
                return vm
            }
            // specific handler
            var cb
            var i = cbs.length
            while (i--) {
                cb = cbs[i]
                if (cb === fn || cb.fn === fn) {
                    cbs.splice(i, 1)
                    break
                }
            }
            return vm
        }

        Vue.prototype.$emit = function(event) {
            var vm = this
            var cbs = vm._events[event]
            if (cbs) {
                cbs = cbs.length > 1 ? toArray(cbs) : cbs
                var args = toArray(arguments, 1)
                for (var i = 0, l = cbs.length; i < l; i++) {
                    try {
                        cbs[i].apply(vm, args)
                    } catch (e) {
                        handleError(e, vm, 'event handler for "' + event + '"')
                    }
                }
            }
            return vm
        }
    }

    /*  */

    /**
     * Runtime helper for resolving raw children VNodes into a slot object.
     */
    function resolveSlots(children, context) {
        var slots = {}
        if (!children) {
            return slots
        }
        var defaultSlot = []
        for (var i = 0, l = children.length; i < l; i++) {
            var child = children[i]
            // named slots should only be respected if the vnode was rendered in the
            // same context.
            if (
                (child.context === context || child.functionalContext === context) &&
                child.data &&
                child.data.slot != null
            ) {
                var name = child.data.slot
                var slot = slots[name] || (slots[name] = [])
                if (child.tag === "template") {
                    slot.push.apply(slot, child.children)
                } else {
                    slot.push(child)
                }
            } else {
                defaultSlot.push(child)
            }
        }
        // ignore whitespace
        if (!defaultSlot.every(isWhitespace)) {
            slots.default = defaultSlot
        }
        return slots
    }

    function isWhitespace(node) {
        return node.isComment || node.text === " "
    }

    function resolveScopedSlots(
        fns, // see flow/vnode
        res
    ) {
        res = res || {}
        for (var i = 0; i < fns.length; i++) {
            if (Array.isArray(fns[i])) {
                resolveScopedSlots(fns[i], res)
            } else {
                res[fns[i].key] = fns[i].fn
            }
        }
        return res
    }

    /*  */

    var activeInstance = null

    function initLifecycle(vm) {
        var options = vm.$options

        // locate first non-abstract parent
        var parent = options.parent
        if (parent && !options.abstract) {
            while (parent.$options.abstract && parent.$parent) {
                parent = parent.$parent
            }
            parent.$children.push(vm)
        }

        vm.$parent = parent
        vm.$root = parent ? parent.$root : vm

        vm.$children = []
        vm.$refs = {}

        vm._watcher = null
        vm._inactive = null
        vm._directInactive = false
        vm._isMounted = false
        vm._isDestroyed = false
        vm._isBeingDestroyed = false
    }

    function lifecycleMixin(Vue) {
        Vue.prototype._update = function(vnode, hydrating) {
            var vm = this
            if (vm._isMounted) {
                callHook(vm, "beforeUpdate")
            }
            var prevEl = vm.$el
            var prevVnode = vm._vnode
            var prevActiveInstance = activeInstance
            activeInstance = vm
            vm._vnode = vnode
            // Vue.prototype.__patch__ is injected in entry points
            // based on the rendering backend used.
            if (!prevVnode) {
                // initial render
                vm.$el = vm.__patch__(
                    vm.$el,
                    vnode,
                    hydrating,
                    false /* removeOnly */,
                    vm.$options._parentElm,
                    vm.$options._refElm
                )
                // no need for the ref nodes after initial patch
                // this prevents keeping a detached DOM tree in memory (#5851)
                vm.$options._parentElm = vm.$options._refElm = null
            } else {
                // updates
                vm.$el = vm.__patch__(prevVnode, vnode)
            }
            activeInstance = prevActiveInstance
            // update __vue__ reference
            if (prevEl) {
                prevEl.__vue__ = null
            }
            if (vm.$el) {
                vm.$el.__vue__ = vm
            }
            // if parent is an HOC, update its $el as well
            if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
                vm.$parent.$el = vm.$el
            }
            // updated hook is called by the scheduler to ensure that children are
            // updated in a parent's updated hook.
        }

        Vue.prototype.$forceUpdate = function() {
            var vm = this
            if (vm._watcher) {
                vm._watcher.update()
            }
        }

        Vue.prototype.$destroy = function() {
            var vm = this
            if (vm._isBeingDestroyed) {
                return
            }
            callHook(vm, "beforeDestroy")
            vm._isBeingDestroyed = true
            // remove self from parent
            var parent = vm.$parent
            if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
                remove(parent.$children, vm)
            }
            // teardown watchers
            if (vm._watcher) {
                vm._watcher.teardown()
            }
            var i = vm._watchers.length
            while (i--) {
                vm._watchers[i].teardown()
            }
            // remove reference from data ob
            // frozen object may not have observer.
            if (vm._data.__ob__) {
                vm._data.__ob__.vmCount--
            }
            // call the last hook...
            vm._isDestroyed = true
            // invoke destroy hooks on current rendered tree
            vm.__patch__(vm._vnode, null)
            // fire destroyed hook
            callHook(vm, "destroyed")
            // turn off all instance listeners.
            vm.$off()
            // remove __vue__ reference
            if (vm.$el) {
                vm.$el.__vue__ = null
            }
        }
    }

    function mountComponent(vm, el, hydrating) {
        vm.$el = el
        if (!vm.$options.render) {
            vm.$options.render = createEmptyVNode
        }
        callHook(vm, "beforeMount")

        var updateComponent
        /* istanbul ignore if */
        if (false) {} else {
            updateComponent = function() {
                vm._update(vm._render(), hydrating)
            }
        }

        vm._watcher = new Watcher(vm, updateComponent, noop)
        hydrating = false

        // manually mounted instance, call mounted on self
        // mounted is called for render-created child components in its inserted hook
        if (vm.$vnode == null) {
            vm._isMounted = true
            callHook(vm, "mounted")
        }
        return vm
    }

    function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
        var hasChildren = !!(
            renderChildren || // has new static slots
            vm.$options._renderChildren || // has old static slots
            parentVnode.data.scopedSlots || // has new scoped slots
            vm.$scopedSlots !== emptyObject
        ) // has old scoped slots

        vm.$options._parentVnode = parentVnode
        vm.$vnode = parentVnode // update vm's placeholder node without re-render

        if (vm._vnode) {
            // update child tree's parent
            vm._vnode.parent = parentVnode
        }
        vm.$options._renderChildren = renderChildren

        // update $attrs and $listensers hash
        // these are also reactive so they may trigger child update if the child
        // used them during render
        vm.$attrs = parentVnode.data && parentVnode.data.attrs
        vm.$listeners = listeners

        // update props
        if (propsData && vm.$options.props) {
            observerState.shouldConvert = false
            var props = vm._props
            var propKeys = vm.$options._propKeys || []
            for (var i = 0; i < propKeys.length; i++) {
                var key = propKeys[i]
                props[key] = validateProp(key, vm.$options.props, propsData, vm)
            }
            observerState.shouldConvert = true
            // keep a copy of raw propsData
            vm.$options.propsData = propsData
        }

        // update listeners
        if (listeners) {
            var oldListeners = vm.$options._parentListeners
            vm.$options._parentListeners = listeners
            updateComponentListeners(vm, listeners, oldListeners)
        }
        // resolve slots + force update if has children
        if (hasChildren) {
            vm.$slots = resolveSlots(renderChildren, parentVnode.context)
            vm.$forceUpdate()
        }
    }

    function isInInactiveTree(vm) {
        while (vm && (vm = vm.$parent)) {
            if (vm._inactive) {
                return true
            }
        }
        return false
    }

    function activateChildComponent(vm, direct) {
        if (direct) {
            vm._directInactive = false
            if (isInInactiveTree(vm)) {
                return
            }
        } else if (vm._directInactive) {
            return
        }
        if (vm._inactive || vm._inactive === null) {
            vm._inactive = false
            for (var i = 0; i < vm.$children.length; i++) {
                activateChildComponent(vm.$children[i])
            }
            callHook(vm, "activated")
        }
    }

    function deactivateChildComponent(vm, direct) {
        if (direct) {
            vm._directInactive = true
            if (isInInactiveTree(vm)) {
                return
            }
        }
        if (!vm._inactive) {
            vm._inactive = true
            for (var i = 0; i < vm.$children.length; i++) {
                deactivateChildComponent(vm.$children[i])
            }
            callHook(vm, "deactivated")
        }
    }

    function callHook(vm, hook) {
        var handlers = vm.$options[hook]
        if (handlers) {
            for (var i = 0, j = handlers.length; i < j; i++) {
                try {
                    handlers[i].call(vm)
                } catch (e) {
                    handleError(e, vm, hook + " hook")
                }
            }
        }
        if (vm._hasHookEvent) {
            vm.$emit("hook:" + hook)
        }
    }

    /*  */

    var MAX_UPDATE_COUNT = 100

    var queue = []
    var activatedChildren = []
    var has = {}
    var circular = {}
    var waiting = false
    var flushing = false
    var index = 0

    /**
     * Reset the scheduler's state.
     */
    function resetSchedulerState() {
        index = queue.length = activatedChildren.length = 0
        has = {}
        waiting = flushing = false
    }

    /**
     * Flush both queues and run the watchers.
     */
    function flushSchedulerQueue() {
        flushing = true
        var watcher, id

        // Sort queue before flush.
        // This ensures that:
        // 1. Components are updated from parent to child. (because parent is always
        //    created before the child)
        // 2. A component's user watchers are run before its render watcher (because
        //    user watchers are created before the render watcher)
        // 3. If a component is destroyed during a parent component's watcher run,
        //    its watchers can be skipped.
        queue.sort(function(a, b) {
            return a.id - b.id
        })

        // do not cache length because more watchers might be pushed
        // as we run existing watchers
        for (index = 0; index < queue.length; index++) {
            watcher = queue[index]
            id = watcher.id
            has[id] = null
            watcher.run()
            // in dev build, check and stop circular updates.
            if (false) {}
        }

        // keep copies of post queues before resetting state
        var activatedQueue = activatedChildren.slice()
        var updatedQueue = queue.slice()

        resetSchedulerState()

        // call component updated and activated hooks
        callActivatedHooks(activatedQueue)
        callUpdatedHooks(updatedQueue)

        // devtool hook
        /* istanbul ignore if */
        if (devtools && config.devtools) {
            devtools.emit("flush")
        }
    }

    function callUpdatedHooks(queue) {
        var i = queue.length
        while (i--) {
            var watcher = queue[i]
            var vm = watcher.vm
            if (vm._watcher === watcher && vm._isMounted) {
                callHook(vm, "updated")
            }
        }
    }

    /**
     * Queue a kept-alive component that was activated during patch.
     * The queue will be processed after the entire tree has been patched.
     */
    function queueActivatedComponent(vm) {
        // setting _inactive to false here so that a render function can
        // rely on checking whether it's in an inactive tree (e.g. router-view)
        vm._inactive = false
        activatedChildren.push(vm)
    }

    function callActivatedHooks(queue) {
        for (var i = 0; i < queue.length; i++) {
            queue[i]._inactive = true
            activateChildComponent(queue[i], true /* true */)
        }
    }

    /**
     * Push a watcher into the watcher queue.
     * Jobs with duplicate IDs will be skipped unless it's
     * pushed when the queue is being flushed.
     */
    function queueWatcher(watcher) {
        var id = watcher.id
        if (has[id] == null) {
            has[id] = true
            if (!flushing) {
                queue.push(watcher)
            } else {
                // if already flushing, splice the watcher based on its id
                // if already past its id, it will be run next immediately.
                var i = queue.length - 1
                while (i > index && queue[i].id > watcher.id) {
                    i--
                }
                queue.splice(i + 1, 0, watcher)
            }
            // queue the flush
            if (!waiting) {
                waiting = true
                nextTick(flushSchedulerQueue)
            }
        }
    }

    /*  */

    var uid$2 = 0

    /**
     * A watcher parses an expression, collects dependencies,
     * and fires callback when the expression value changes.
     * This is used for both the $watch() api and directives.
     */
    var Watcher = function Watcher(vm, expOrFn, cb, options) {
        this.vm = vm
        vm._watchers.push(this)
        // options
        if (options) {
            this.deep = !!options.deep
            this.user = !!options.user
            this.lazy = !!options.lazy
            this.sync = !!options.sync
        } else {
            this.deep = this.user = this.lazy = this.sync = false
        }
        this.cb = cb
        this.id = ++uid$2 // uid for batching
        this.active = true
        this.dirty = this.lazy // for lazy watchers
        this.deps = []
        this.newDeps = []
        this.depIds = new _Set()
        this.newDepIds = new _Set()
        this.expression = ""
        // parse expression for getter
        if (typeof expOrFn === "function") {
            this.getter = expOrFn
        } else {
            this.getter = parsePath(expOrFn)
            if (!this.getter) {
                this.getter = function() {}
                 false &&
                    false
            }
        }
        this.value = this.lazy ? undefined : this.get()
    }

    /**
     * Evaluate the getter, and re-collect dependencies.
     */
    Watcher.prototype.get = function get() {
        pushTarget(this)
        var value
        var vm = this.vm
        try {
            value = this.getter.call(vm, vm)
        } catch (e) {
            if (this.user) {
                handleError(e, vm, 'getter for watcher "' + this.expression + '"')
            } else {
                throw e
            }
        } finally {
            // "touch" every property so they are all tracked as
            // dependencies for deep watching
            if (this.deep) {
                traverse(value)
            }
            popTarget()
            this.cleanupDeps()
        }
        return value
    }

    /**
     * Add a dependency to this directive.
     */
    Watcher.prototype.addDep = function addDep(dep) {
        var id = dep.id
        if (!this.newDepIds.has(id)) {
            this.newDepIds.add(id)
            this.newDeps.push(dep)
            if (!this.depIds.has(id)) {
                dep.addSub(this)
            }
        }
    }

    /**
     * Clean up for dependency collection.
     */
    Watcher.prototype.cleanupDeps = function cleanupDeps() {
        var this$1 = this

        var i = this.deps.length
        while (i--) {
            var dep = this$1.deps[i]
            if (!this$1.newDepIds.has(dep.id)) {
                dep.removeSub(this$1)
            }
        }
        var tmp = this.depIds
        this.depIds = this.newDepIds
        this.newDepIds = tmp
        this.newDepIds.clear()
        tmp = this.deps
        this.deps = this.newDeps
        this.newDeps = tmp
        this.newDeps.length = 0
    }

    /**
     * Subscriber interface.
     * Will be called when a dependency changes.
     */
    Watcher.prototype.update = function update() {
        /* istanbul ignore else */
        if (this.lazy) {
            this.dirty = true
        } else if (this.sync) {
            this.run()
        } else {
            queueWatcher(this)
        }
    }

    /**
     * Scheduler job interface.
     * Will be called by the scheduler.
     */
    Watcher.prototype.run = function run() {
        if (this.active) {
            var value = this.get()
            if (
                value !== this.value ||
                // Deep watchers and watchers on Object/Arrays should fire even
                // when the value is the same, because the value may
                // have mutated.
                isObject(value) ||
                this.deep
            ) {
                // set new value
                var oldValue = this.value
                this.value = value
                if (this.user) {
                    try {
                        this.cb.call(this.vm, value, oldValue)
                    } catch (e) {
                        handleError(e, this.vm, 'callback for watcher "' + this.expression + '"')
                    }
                } else {
                    this.cb.call(this.vm, value, oldValue)
                }
            }
        }
    }

    /**
     * Evaluate the value of the watcher.
     * This only gets called for lazy watchers.
     */
    Watcher.prototype.evaluate = function evaluate() {
        this.value = this.get()
        this.dirty = false
    }

    /**
     * Depend on all deps collected by this watcher.
     */
    Watcher.prototype.depend = function depend() {
        var this$1 = this

        var i = this.deps.length
        while (i--) {
            this$1.deps[i].depend()
        }
    }

    /**
     * Remove self from all dependencies' subscriber list.
     */
    Watcher.prototype.teardown = function teardown() {
        var this$1 = this

        if (this.active) {
            // remove self from vm's watcher list
            // this is a somewhat expensive operation so we skip it
            // if the vm is being destroyed.
            if (!this.vm._isBeingDestroyed) {
                remove(this.vm._watchers, this)
            }
            var i = this.deps.length
            while (i--) {
                this$1.deps[i].removeSub(this$1)
            }
            this.active = false
        }
    }

    /**
     * Recursively traverse an object to evoke all converted
     * getters, so that every nested property inside the object
     * is collected as a "deep" dependency.
     */
    var seenObjects = new _Set()

    function traverse(val) {
        seenObjects.clear()
        _traverse(val, seenObjects)
    }

    function _traverse(val, seen) {
        var i, keys
        var isA = Array.isArray(val)
        if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {
            return
        }
        if (val.__ob__) {
            var depId = val.__ob__.dep.id
            if (seen.has(depId)) {
                return
            }
            seen.add(depId)
        }
        if (isA) {
            i = val.length
            while (i--) {
                _traverse(val[i], seen)
            }
        } else {
            keys = Object.keys(val)
            i = keys.length
            while (i--) {
                _traverse(val[keys[i]], seen)
            }
        }
    }

    /*  */

    var sharedPropertyDefinition = {
        enumerable: true,
        configurable: true,
        get: noop,
        set: noop
    }

    function proxy(target, sourceKey, key) {
        sharedPropertyDefinition.get = function proxyGetter() {
            return this[sourceKey][key]
        }
        sharedPropertyDefinition.set = function proxySetter(val) {
            this[sourceKey][key] = val
        }
        Object.defineProperty(target, key, sharedPropertyDefinition)
    }

    function initState(vm) {
        vm._watchers = []
        var opts = vm.$options
        if (opts.props) {
            initProps(vm, opts.props)
        }
        if (opts.methods) {
            initMethods(vm, opts.methods)
        }
        if (opts.data) {
            initData(vm)
        } else {
            observe((vm._data = {}), true /* asRootData */)
        }
        if (opts.computed) {
            initComputed(vm, opts.computed)
        }
        if (opts.watch && opts.watch !== nativeWatch) {
            initWatch(vm, opts.watch)
        }
    }

    function checkOptionType(vm, name) {
        var option = vm.$options[name]
        if (!isPlainObject(option)) {
            warn('component option "' + name + '" should be an object.', vm)
        }
    }

    function initProps(vm, propsOptions) {
        var propsData = vm.$options.propsData || {}
        var props = (vm._props = {})
        // cache prop keys so that future props updates can iterate using Array
        // instead of dynamic object key enumeration.
        var keys = (vm.$options._propKeys = [])
        var isRoot = !vm.$parent
        // root instance props should be converted
        observerState.shouldConvert = isRoot
        var loop = function(key) {
            keys.push(key)
            var value = validateProp(key, propsOptions, propsData, vm)
            /* istanbul ignore else */
            {
                defineReactive$$1(props, key, value)
            }
            // static props are already proxied on the component's prototype
            // during Vue.extend(). We only need to proxy props defined at
            // instantiation here.
            if (!(key in vm)) {
                proxy(vm, "_props", key)
            }
        }

        for (var key in propsOptions) loop(key)
        observerState.shouldConvert = true
    }

    function initData(vm) {
        var data = vm.$options.data
        data = vm._data = typeof data === "function" ? getData(data, vm) : data || {}
        if (!isPlainObject(data)) {
            data = {}
             false &&
                false
        }
        // proxy data on instance
        var keys = Object.keys(data)
        var props = vm.$options.props
        var methods = vm.$options.methods
        var i = keys.length
        while (i--) {
            var key = keys[i]
            if (props && hasOwn(props, key)) {
                 false &&
                    false
            } else if (!isReserved(key)) {
                proxy(vm, "_data", key)
            }
        }
        // observe data
        observe(data, true /* asRootData */)
    }

    function getData(data, vm) {
        try {
            return data.call(vm)
        } catch (e) {
            handleError(e, vm, "data()")
            return {}
        }
    }

    var computedWatcherOptions = {
        lazy: true
    }

    function initComputed(vm, computed) {
         false && false
        var watchers = (vm._computedWatchers = Object.create(null))

        for (var key in computed) {
            var userDef = computed[key]
            var getter = typeof userDef === "function" ? userDef : userDef.get
            watchers[key] = new Watcher(vm, getter, noop, computedWatcherOptions)

            // component-defined computed properties are already defined on the
            // component prototype. We only need to define computed properties defined
            // at instantiation here.
            if (!(key in vm)) {
                defineComputed(vm, key, userDef)
            } else {
            }
        }
    }

    function defineComputed(target, key, userDef) {
        if (typeof userDef === "function") {
            sharedPropertyDefinition.get = createComputedGetter(key)
            sharedPropertyDefinition.set = noop
        } else {
            sharedPropertyDefinition.get = userDef.get
                ? userDef.cache !== false
                    ? createComputedGetter(key)
                    : userDef.get
                : noop
            sharedPropertyDefinition.set = userDef.set ? userDef.set : noop
        }
        Object.defineProperty(target, key, sharedPropertyDefinition)
    }

    function createComputedGetter(key) {
        return function computedGetter() {
            var watcher = this._computedWatchers && this._computedWatchers[key]
            if (watcher) {
                if (watcher.dirty) {
                    watcher.evaluate()
                }
                if (Dep.target) {
                    watcher.depend()
                }
                return watcher.value
            }
        }
    }

    function initMethods(vm, methods) {
         false && false
        var props = vm.$options.props
        for (var key in methods) {
            vm[key] = methods[key] == null ? noop : bind(methods[key], vm)
        }
    }

    function initWatch(vm, watch) {
         false && false
        for (var key in watch) {
            var handler = watch[key]
            if (Array.isArray(handler)) {
                for (var i = 0; i < handler.length; i++) {
                    createWatcher(vm, key, handler[i])
                }
            } else {
                createWatcher(vm, key, handler)
            }
        }
    }

    function createWatcher(vm, keyOrFn, handler, options) {
        if (isPlainObject(handler)) {
            options = handler
            handler = handler.handler
        }
        if (typeof handler === "string") {
            handler = vm[handler]
        }
        return vm.$watch(keyOrFn, handler, options)
    }

    function stateMixin(Vue) {
        // flow somehow has problems with directly declared definition object
        // when using Object.defineProperty, so we have to procedurally build up
        // the object here.
        var dataDef = {}
        dataDef.get = function() {
            return this._data
        }
        var propsDef = {}
        propsDef.get = function() {
            return this._props
        }
        Object.defineProperty(Vue.prototype, "$data", dataDef)
        Object.defineProperty(Vue.prototype, "$props", propsDef)

        Vue.prototype.$set = set
        Vue.prototype.$delete = del

        Vue.prototype.$watch = function(expOrFn, cb, options) {
            var vm = this
            if (isPlainObject(cb)) {
                return createWatcher(vm, expOrFn, cb, options)
            }
            options = options || {}
            options.user = true
            var watcher = new Watcher(vm, expOrFn, cb, options)
            if (options.immediate) {
                cb.call(vm, watcher.value)
            }
            return function unwatchFn() {
                watcher.teardown()
            }
        }
    }

    /*  */

    function initProvide(vm) {
        var provide = vm.$options.provide
        if (provide) {
            vm._provided = typeof provide === "function" ? provide.call(vm) : provide
        }
    }

    function initInjections(vm) {
        var result = resolveInject(vm.$options.inject, vm)
        if (result) {
            observerState.shouldConvert = false
            Object.keys(result).forEach(function(key) {
                /* istanbul ignore else */
                {
                    defineReactive$$1(vm, key, result[key])
                }
            })
            observerState.shouldConvert = true
        }
    }

    function resolveInject(inject, vm) {
        if (inject) {
            // inject is :any because flow is not smart enough to figure out cached
            var result = Object.create(null)
            var keys = hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject)

            for (var i = 0; i < keys.length; i++) {
                var key = keys[i]
                var provideKey = inject[key]
                var source = vm
                while (source) {
                    if (source._provided && provideKey in source._provided) {
                        result[key] = source._provided[provideKey]
                        break
                    }
                    source = source.$parent
                }
                if (false) {}
            }
            return result
        }
    }

    /*  */

    function createFunctionalComponent(Ctor, propsData, data, context, children) {
        var props = {}
        var propOptions = Ctor.options.props
        if (isDef(propOptions)) {
            for (var key in propOptions) {
                props[key] = validateProp(key, propOptions, propsData || {})
            }
        } else {
            if (isDef(data.attrs)) {
                mergeProps(props, data.attrs)
            }
            if (isDef(data.props)) {
                mergeProps(props, data.props)
            }
        }
        // ensure the createElement function in functional components
        // gets a unique context - this is necessary for correct named slot check
        var _context = Object.create(context)
        var h = function(a, b, c, d) {
            return createElement(_context, a, b, c, d, true)
        }
        var vnode = Ctor.options.render.call(null, h, {
            data: data,
            props: props,
            children: children,
            parent: context,
            listeners: data.on || {},
            injections: resolveInject(Ctor.options.inject, context),
            slots: function() {
                return resolveSlots(children, context)
            }
        })
        if (vnode instanceof VNode) {
            vnode.functionalContext = context
            vnode.functionalOptions = Ctor.options
            if (data.slot) {
                ;(vnode.data || (vnode.data = {})).slot = data.slot
            }
        }
        return vnode
    }

    function mergeProps(to, from) {
        for (var key in from) {
            to[camelize(key)] = from[key]
        }
    }

    /*  */

    // hooks to be invoked on component VNodes during patch
    var componentVNodeHooks = {
        init: function init(vnode, hydrating, parentElm, refElm) {
            if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
                var child = (vnode.componentInstance = createComponentInstanceForVnode(
                    vnode,
                    activeInstance,
                    parentElm,
                    refElm
                ))
                child.$mount(hydrating ? vnode.elm : undefined, hydrating)
            } else if (vnode.data.keepAlive) {
                // kept-alive components, treat as a patch
                var mountedNode = vnode // work around flow
                componentVNodeHooks.prepatch(mountedNode, mountedNode)
            }
        },

        prepatch: function prepatch(oldVnode, vnode) {
            var options = vnode.componentOptions
            var child = (vnode.componentInstance = oldVnode.componentInstance)
            updateChildComponent(
                child,
                options.propsData, // updated props
                options.listeners, // updated listeners
                vnode, // new parent vnode
                options.children // new children
            )
        },

        insert: function insert(vnode) {
            var context = vnode.context
            var componentInstance = vnode.componentInstance

            if (!componentInstance._isMounted) {
                componentInstance._isMounted = true
                callHook(componentInstance, "mounted")
            }
            if (vnode.data.keepAlive) {
                if (context._isMounted) {
                    // vue-router#1212
                    // During updates, a kept-alive component's child components may
                    // change, so directly walking the tree here may call activated hooks
                    // on incorrect children. Instead we push them into a queue which will
                    // be processed after the whole patch process ended.
                    queueActivatedComponent(componentInstance)
                } else {
                    activateChildComponent(componentInstance, true /* direct */)
                }
            }
        },

        destroy: function destroy(vnode) {
            var componentInstance = vnode.componentInstance
            if (!componentInstance._isDestroyed) {
                if (!vnode.data.keepAlive) {
                    componentInstance.$destroy()
                } else {
                    deactivateChildComponent(componentInstance, true /* direct */)
                }
            }
        }
    }

    var hooksToMerge = Object.keys(componentVNodeHooks)

    function createComponent(Ctor, data, context, children, tag) {
        if (isUndef(Ctor)) {
            return
        }

        var baseCtor = context.$options._base

        // plain options object: turn it into a constructor
        if (isObject(Ctor)) {
            Ctor = baseCtor.extend(Ctor)
        }

        // if at this stage it's not a constructor or an async component factory,
        // reject.
        if (typeof Ctor !== "function") {
            return
        }

        // async component
        var asyncFactory
        if (isUndef(Ctor.cid)) {
            asyncFactory = Ctor
            Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context)
            if (Ctor === undefined) {
                // return a placeholder node for async component, which is rendered
                // as a comment node but preserves all the raw information for the node.
                // the information will be used for async server-rendering and hydration.
                return createAsyncPlaceholder(asyncFactory, data, context, children, tag)
            }
        }

        data = data || {}

        // resolve constructor options in case global mixins are applied after
        // component constructor creation
        resolveConstructorOptions(Ctor)

        // transform component v-model data into props & events
        if (isDef(data.model)) {
            transformModel(Ctor.options, data)
        }

        // extract props
        var propsData = extractPropsFromVNodeData(data, Ctor, tag)

        // functional component
        if (isTrue(Ctor.options.functional)) {
            return createFunctionalComponent(Ctor, propsData, data, context, children)
        }

        // keep listeners
        var listeners = data.on

        if (isTrue(Ctor.options.abstract)) {
            // abstract components do not keep anything
            // other than props & listeners & slot

            // work around flow
            var slot = data.slot
            data = {}
            if (slot) {
                data.slot = slot
            }
        }

        // merge component management hooks onto the placeholder node
        mergeHooks(data)

        // return a placeholder vnode
        var name = Ctor.options.name || tag
        var vnode = new VNode(
            "vue-component-" + Ctor.cid + (name ? "-" + name : ""),
            data,
            undefined,
            undefined,
            undefined,
            context,
            {
                Ctor: Ctor,
                propsData: propsData,
                listeners: listeners,
                tag: tag,
                children: children
            },
            asyncFactory
        )
        return vnode
    }

    function createComponentInstanceForVnode(
        vnode, // we know it's MountedComponentVNode but flow doesn't
        parent, // activeInstance in lifecycle state
        parentElm,
        refElm
    ) {
        var vnodeComponentOptions = vnode.componentOptions
        var options = {
            _isComponent: true,
            parent: parent,
            propsData: vnodeComponentOptions.propsData,
            _componentTag: vnodeComponentOptions.tag,
            _parentVnode: vnode,
            _parentListeners: vnodeComponentOptions.listeners,
            _renderChildren: vnodeComponentOptions.children,
            _parentElm: parentElm || null,
            _refElm: refElm || null
        }
        // check inline-template render functions
        var inlineTemplate = vnode.data.inlineTemplate
        if (isDef(inlineTemplate)) {
            options.render = inlineTemplate.render
            options.staticRenderFns = inlineTemplate.staticRenderFns
        }
        return new vnodeComponentOptions.Ctor(options)
    }

    function mergeHooks(data) {
        if (!data.hook) {
            data.hook = {}
        }
        for (var i = 0; i < hooksToMerge.length; i++) {
            var key = hooksToMerge[i]
            var fromParent = data.hook[key]
            var ours = componentVNodeHooks[key]
            data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours
        }
    }

    function mergeHook$1(one, two) {
        return function(a, b, c, d) {
            one(a, b, c, d)
            two(a, b, c, d)
        }
    }

    // transform component v-model info (value and callback) into
    // prop and event handler respectively.
    function transformModel(options, data) {
        var prop = (options.model && options.model.prop) || "value"
        var event = (options.model && options.model.event) || "input"
        ;(data.props || (data.props = {}))[prop] = data.model.value
        var on = data.on || (data.on = {})
        if (isDef(on[event])) {
            on[event] = [data.model.callback].concat(on[event])
        } else {
            on[event] = data.model.callback
        }
    }

    /*  */

    var SIMPLE_NORMALIZE = 1
    var ALWAYS_NORMALIZE = 2

    // wrapper function for providing a more flexible interface
    // without getting yelled at by flow
    function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
        if (Array.isArray(data) || isPrimitive(data)) {
            normalizationType = children
            children = data
            data = undefined
        }
        if (isTrue(alwaysNormalize)) {
            normalizationType = ALWAYS_NORMALIZE
        }
        return _createElement(context, tag, data, children, normalizationType)
    }

    function _createElement(context, tag, data, children, normalizationType) {
        if (isDef(data) && isDef(data.__ob__)) {
             false &&
                false
            return createEmptyVNode()
        }
        // object syntax in v-bind
        if (isDef(data) && isDef(data.is)) {
            tag = data.is
        }
        if (!tag) {
            // in case of component :is set to falsy value
            return createEmptyVNode()
        }
        // warn against non-primitive key
        if (
            false
        ) {}
        // support single function children as default scoped slot
        if (Array.isArray(children) && typeof children[0] === "function") {
            data = data || {}
            data.scopedSlots = {
                default: children[0]
            }
            children.length = 0
        }
        if (normalizationType === ALWAYS_NORMALIZE) {
            children = normalizeChildren(children)
        } else if (normalizationType === SIMPLE_NORMALIZE) {
            children = simpleNormalizeChildren(children)
        }
        var vnode, ns
        if (typeof tag === "string") {
            var Ctor
            ns = config.getTagNamespace(tag)
            if (config.isReservedTag(tag)) {
                // platform built-in elements
                vnode = new VNode(
                    config.parsePlatformTagName(tag),
                    data,
                    children,
                    undefined,
                    undefined,
                    context
                )
            } else if (isDef((Ctor = resolveAsset(context.$options, "components", tag)))) {
                // component
                vnode = createComponent(Ctor, data, context, children, tag)
            } else {
                // unknown or unlisted namespaced elements
                // check at runtime because it may get assigned a namespace when its
                // parent normalizes children
                vnode = new VNode(tag, data, children, undefined, undefined, context)
            }
        } else {
            // direct component options / constructor
            vnode = createComponent(tag, data, context, children)
        }
        if (isDef(vnode)) {
            if (ns) {
                applyNS(vnode, ns)
            }
            return vnode
        } else {
            return createEmptyVNode()
        }
    }

    function applyNS(vnode, ns) {
        vnode.ns = ns
        if (vnode.tag === "foreignObject") {
            // use default namespace inside foreignObject
            return
        }
        if (isDef(vnode.children)) {
            for (var i = 0, l = vnode.children.length; i < l; i++) {
                var child = vnode.children[i]
                if (isDef(child.tag) && isUndef(child.ns)) {
                    applyNS(child, ns)
                }
            }
        }
    }

    /*  */

    /**
     * Runtime helper for rendering v-for lists.
     */
    function renderList(val, render) {
        var ret, i, l, keys, key
        if (Array.isArray(val) || typeof val === "string") {
            ret = new Array(val.length)
            for (i = 0, l = val.length; i < l; i++) {
                ret[i] = render(val[i], i)
            }
        } else if (typeof val === "number") {
            ret = new Array(val)
            for (i = 0; i < val; i++) {
                ret[i] = render(i + 1, i)
            }
        } else if (isObject(val)) {
            keys = Object.keys(val)
            ret = new Array(keys.length)
            for (i = 0, l = keys.length; i < l; i++) {
                key = keys[i]
                ret[i] = render(val[key], key, i)
            }
        }
        if (isDef(ret)) {
            ret._isVList = true
        }
        return ret
    }

    /*  */

    /**
     * Runtime helper for rendering <slot>
     */
    function renderSlot(name, fallback, props, bindObject) {
        var scopedSlotFn = this.$scopedSlots[name]
        if (scopedSlotFn) {
            // scoped slot
            props = props || {}
            if (bindObject) {
                props = extend(extend({}, bindObject), props)
            }
            return scopedSlotFn(props) || fallback
        } else {
            var slotNodes = this.$slots[name]
            // warn duplicate slot usage
            if (slotNodes && "production" !== "production") {
                slotNodes._rendered &&
                    warn(
                        'Duplicate presence of slot "' +
                            name +
                            '" found in the same render tree ' +
                            "- this will likely cause render errors.",
                        this
                    )
                slotNodes._rendered = true
            }
            return slotNodes || fallback
        }
    }

    /*  */

    /**
     * Runtime helper for resolving filters
     */
    function resolveFilter(id) {
        return resolveAsset(this.$options, "filters", id, true) || identity
    }

    /*  */

    /**
     * Runtime helper for checking keyCodes from config.
     */
    function checkKeyCodes(eventKeyCode, key, builtInAlias) {
        var keyCodes = config.keyCodes[key] || builtInAlias
        if (Array.isArray(keyCodes)) {
            return keyCodes.indexOf(eventKeyCode) === -1
        } else {
            return keyCodes !== eventKeyCode
        }
    }

    /*  */

    /**
     * Runtime helper for merging v-bind="object" into a VNode's data.
     */
    function bindObjectProps(data, tag, value, asProp, isSync) {
        if (value) {
            if (!isObject(value)) {
                 false &&
                    false
            } else {
                if (Array.isArray(value)) {
                    value = toObject(value)
                }
                var hash
                var loop = function(key) {
                    if (key === "class" || key === "style" || isReservedAttribute(key)) {
                        hash = data
                    } else {
                        var type = data.attrs && data.attrs.type
                        hash =
                            asProp || config.mustUseProp(tag, type, key)
                                ? data.domProps || (data.domProps = {})
                                : data.attrs || (data.attrs = {})
                    }
                    if (!(key in hash)) {
                        hash[key] = value[key]

                        if (isSync) {
                            var on = data.on || (data.on = {})
                            on["update:" + key] = function($event) {
                                value[key] = $event
                            }
                        }
                    }
                }

                for (var key in value) loop(key)
            }
        }
        return data
    }

    /*  */

    /**
     * Runtime helper for rendering static trees.
     */
    function renderStatic(index, isInFor) {
        var tree = this._staticTrees[index]
        // if has already-rendered static tree and not inside v-for,
        // we can reuse the same tree by doing a shallow clone.
        if (tree && !isInFor) {
            return Array.isArray(tree) ? cloneVNodes(tree) : cloneVNode(tree)
        }
        // otherwise, render a fresh tree.
        tree = this._staticTrees[index] = this.$options.staticRenderFns[index].call(
            this._renderProxy
        )
        markStatic(tree, "__static__" + index, false)
        return tree
    }

    /**
     * Runtime helper for v-once.
     * Effectively it means marking the node as static with a unique key.
     */
    function markOnce(tree, index, key) {
        markStatic(tree, "__once__" + index + (key ? "_" + key : ""), true)
        return tree
    }

    function markStatic(tree, key, isOnce) {
        if (Array.isArray(tree)) {
            for (var i = 0; i < tree.length; i++) {
                if (tree[i] && typeof tree[i] !== "string") {
                    markStaticNode(tree[i], key + "_" + i, isOnce)
                }
            }
        } else {
            markStaticNode(tree, key, isOnce)
        }
    }

    function markStaticNode(node, key, isOnce) {
        node.isStatic = true
        node.key = key
        node.isOnce = isOnce
    }

    /*  */

    function bindObjectListeners(data, value) {
        if (value) {
            if (!isPlainObject(value)) {
                 false &&
                    false
            } else {
                var on = (data.on = data.on ? extend({}, data.on) : {})
                for (var key in value) {
                    var existing = on[key]
                    var ours = value[key]
                    on[key] = existing ? [].concat(ours, existing) : ours
                }
            }
        }
        return data
    }

    /*  */

    function initRender(vm) {
        vm._vnode = null // the root of the child tree
        vm._staticTrees = null
        var parentVnode = (vm.$vnode = vm.$options._parentVnode) // the placeholder node in parent tree
        var renderContext = parentVnode && parentVnode.context
        vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext)
        vm.$scopedSlots = emptyObject
        // bind the createElement fn to this instance
        // so that we get proper render context inside it.
        // args order: tag, data, children, normalizationType, alwaysNormalize
        // internal version is used by render functions compiled from templates
        vm._c = function(a, b, c, d) {
            return createElement(vm, a, b, c, d, false)
        }
        // normalization is always applied for the public version, used in
        // user-written render functions.
        vm.$createElement = function(a, b, c, d) {
            return createElement(vm, a, b, c, d, true)
        }

        // $attrs & $listeners are exposed for easier HOC creation.
        // they need to be reactive so that HOCs using them are always updated
        var parentData = parentVnode && parentVnode.data
        /* istanbul ignore else */
        {
            defineReactive$$1(vm, "$attrs", parentData && parentData.attrs, null, true)
            defineReactive$$1(vm, "$listeners", parentData && parentData.on, null, true)
        }
    }

    function renderMixin(Vue) {
        Vue.prototype.$nextTick = function(fn) {
            return nextTick(fn, this)
        }

        Vue.prototype._render = function() {
            var vm = this
            var ref = vm.$options
            var render = ref.render
            var staticRenderFns = ref.staticRenderFns
            var _parentVnode = ref._parentVnode

            if (vm._isMounted) {
                // clone slot nodes on re-renders
                for (var key in vm.$slots) {
                    vm.$slots[key] = cloneVNodes(vm.$slots[key])
                }
            }

            vm.$scopedSlots = (_parentVnode && _parentVnode.data.scopedSlots) || emptyObject

            if (staticRenderFns && !vm._staticTrees) {
                vm._staticTrees = []
            }
            // set parent vnode. this allows render functions to have access
            // to the data on the placeholder node.
            vm.$vnode = _parentVnode
            // render self
            var vnode
            try {
                vnode = render.call(vm._renderProxy, vm.$createElement)
            } catch (e) {
                handleError(e, vm, "render function")
                // return error render result,
                // or previous vnode to prevent render error causing blank component
                /* istanbul ignore else */
                {
                    vnode = vm._vnode
                }
            }
            // return empty vnode in case the render function errored out
            if (!(vnode instanceof VNode)) {
                if (false) {}
                vnode = createEmptyVNode()
            }
            // set parent
            vnode.parent = _parentVnode
            return vnode
        }

        // internal render helpers.
        // these are exposed on the instance prototype to reduce generated render
        // code size.
        Vue.prototype._o = markOnce
        Vue.prototype._n = toNumber
        Vue.prototype._s = toString
        Vue.prototype._l = renderList
        Vue.prototype._t = renderSlot
        Vue.prototype._q = looseEqual
        Vue.prototype._i = looseIndexOf
        Vue.prototype._m = renderStatic
        Vue.prototype._f = resolveFilter
        Vue.prototype._k = checkKeyCodes
        Vue.prototype._b = bindObjectProps
        Vue.prototype._v = createTextVNode
        Vue.prototype._e = createEmptyVNode
        Vue.prototype._u = resolveScopedSlots
        Vue.prototype._g = bindObjectListeners
    }

    /*  */

    var uid = 0

    function initMixin(Vue) {
        Vue.prototype._init = function(options) {
            var vm = this
            // a uid
            vm._uid = uid++

            var startTag, endTag
            /* istanbul ignore if */
            if (false) {}

            // a flag to avoid this being observed
            vm._isVue = true
            // merge options
            if (options && options._isComponent) {
                // optimize internal component instantiation
                // since dynamic options merging is pretty slow, and none of the
                // internal component options needs special treatment.
                initInternalComponent(vm, options)
            } else {
                vm.$options = mergeOptions(
                    resolveConstructorOptions(vm.constructor),
                    options || {},
                    vm
                )
            }
            /* istanbul ignore else */
            {
                vm._renderProxy = vm
            }
            // expose real self
            vm._self = vm
            initLifecycle(vm)
            initEvents(vm)
            initRender(vm)
            callHook(vm, "beforeCreate")
            initInjections(vm) // resolve injections before data/props
            initState(vm)
            initProvide(vm) // resolve provide after data/props
            callHook(vm, "created")

            /* istanbul ignore if */
            if (false) {}

            if (vm.$options.el) {
                vm.$mount(vm.$options.el)
            }
        }
    }

    function initInternalComponent(vm, options) {
        var opts = (vm.$options = Object.create(vm.constructor.options))
        // doing this because it's faster than dynamic enumeration.
        opts.parent = options.parent
        opts.propsData = options.propsData
        opts._parentVnode = options._parentVnode
        opts._parentListeners = options._parentListeners
        opts._renderChildren = options._renderChildren
        opts._componentTag = options._componentTag
        opts._parentElm = options._parentElm
        opts._refElm = options._refElm
        if (options.render) {
            opts.render = options.render
            opts.staticRenderFns = options.staticRenderFns
        }
    }

    function resolveConstructorOptions(Ctor) {
        var options = Ctor.options
        if (Ctor.super) {
            var superOptions = resolveConstructorOptions(Ctor.super)
            var cachedSuperOptions = Ctor.superOptions
            if (superOptions !== cachedSuperOptions) {
                // super option changed,
                // need to resolve new options.
                Ctor.superOptions = superOptions
                // check if there are any late-modified/attached options (#4976)
                var modifiedOptions = resolveModifiedOptions(Ctor)
                // update base extend options
                if (modifiedOptions) {
                    extend(Ctor.extendOptions, modifiedOptions)
                }
                options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions)
                if (options.name) {
                    options.components[options.name] = Ctor
                }
            }
        }
        return options
    }

    function resolveModifiedOptions(Ctor) {
        var modified
        var latest = Ctor.options
        var extended = Ctor.extendOptions
        var sealed = Ctor.sealedOptions
        for (var key in latest) {
            if (latest[key] !== sealed[key]) {
                if (!modified) {
                    modified = {}
                }
                modified[key] = dedupe(latest[key], extended[key], sealed[key])
            }
        }
        return modified
    }

    function dedupe(latest, extended, sealed) {
        // compare latest and sealed to ensure lifecycle hooks won't be duplicated
        // between merges
        if (Array.isArray(latest)) {
            var res = []
            sealed = Array.isArray(sealed) ? sealed : [sealed]
            extended = Array.isArray(extended) ? extended : [extended]
            for (var i = 0; i < latest.length; i++) {
                // push original options and not sealed options to exclude duplicated options
                if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
                    res.push(latest[i])
                }
            }
            return res
        } else {
            return latest
        }
    }

    function Vue$3(options) {
        if (false) {}
        this._init(options)
    }

    initMixin(Vue$3)
    stateMixin(Vue$3)
    eventsMixin(Vue$3)
    lifecycleMixin(Vue$3)
    renderMixin(Vue$3)

    /*  */

    function initUse(Vue) {
        Vue.use = function(plugin) {
            var installedPlugins = this._installedPlugins || (this._installedPlugins = [])
            if (installedPlugins.indexOf(plugin) > -1) {
                return this
            }

            // additional parameters
            var args = toArray(arguments, 1)
            args.unshift(this)
            if (typeof plugin.install === "function") {
                plugin.install.apply(plugin, args)
            } else if (typeof plugin === "function") {
                plugin.apply(null, args)
            }
            installedPlugins.push(plugin)
            return this
        }
    }

    /*  */

    function initMixin$1(Vue) {
        Vue.mixin = function(mixin) {
            this.options = mergeOptions(this.options, mixin)
            return this
        }
    }

    /*  */

    function initExtend(Vue) {
        /**
         * Each instance constructor, including Vue, has a unique
         * cid. This enables us to create wrapped "child
         * constructors" for prototypal inheritance and cache them.
         */
        Vue.cid = 0
        var cid = 1

        /**
         * Class inheritance
         */
        Vue.extend = function(extendOptions) {
            extendOptions = extendOptions || {}
            var Super = this
            var SuperId = Super.cid
            var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {})
            if (cachedCtors[SuperId]) {
                return cachedCtors[SuperId]
            }

            var name = extendOptions.name || Super.options.name
            var Sub = function VueComponent(options) {
                this._init(options)
            }
            Sub.prototype = Object.create(Super.prototype)
            Sub.prototype.constructor = Sub
            Sub.cid = cid++
            Sub.options = mergeOptions(Super.options, extendOptions)
            Sub["super"] = Super

            // For props and computed properties, we define the proxy getters on
            // the Vue instances at extension time, on the extended prototype. This
            // avoids Object.defineProperty calls for each instance created.
            if (Sub.options.props) {
                initProps$1(Sub)
            }
            if (Sub.options.computed) {
                initComputed$1(Sub)
            }

            // allow further extension/mixin/plugin usage
            Sub.extend = Super.extend
            Sub.mixin = Super.mixin
            Sub.use = Super.use

            // create asset registers, so extended classes
            // can have their private assets too.
            ASSET_TYPES.forEach(function(type) {
                Sub[type] = Super[type]
            })
            // enable recursive self-lookup
            if (name) {
                Sub.options.components[name] = Sub
            }

            // keep a reference to the super options at extension time.
            // later at instantiation we can check if Super's options have
            // been updated.
            Sub.superOptions = Super.options
            Sub.extendOptions = extendOptions
            Sub.sealedOptions = extend({}, Sub.options)

            // cache constructor
            cachedCtors[SuperId] = Sub
            return Sub
        }
    }

    function initProps$1(Comp) {
        var props = Comp.options.props
        for (var key in props) {
            proxy(Comp.prototype, "_props", key)
        }
    }

    function initComputed$1(Comp) {
        var computed = Comp.options.computed
        for (var key in computed) {
            defineComputed(Comp.prototype, key, computed[key])
        }
    }

    /*  */

    function initAssetRegisters(Vue) {
        /**
         * Create asset registration methods.
         */
        ASSET_TYPES.forEach(function(type) {
            Vue[type] = function(id, definition) {
                if (!definition) {
                    return this.options[type + "s"][id]
                } else {
                    /* istanbul ignore if */
                    if (type === "component" && isPlainObject(definition)) {
                        definition.name = definition.name || id
                        definition = this.options._base.extend(definition)
                    }
                    if (type === "directive" && typeof definition === "function") {
                        definition = {
                            bind: definition,
                            update: definition
                        }
                    }
                    this.options[type + "s"][id] = definition
                    return definition
                }
            }
        })
    }

    /*  */

    var patternTypes = [String, RegExp, Array]

    function getComponentName(opts) {
        return opts && (opts.Ctor.options.name || opts.tag)
    }

    function matches(pattern, name) {
        if (Array.isArray(pattern)) {
            return pattern.indexOf(name) > -1
        } else if (typeof pattern === "string") {
            return pattern.split(",").indexOf(name) > -1
        } else if (isRegExp(pattern)) {
            return pattern.test(name)
        }
        /* istanbul ignore next */
        return false
    }

    function pruneCache(cache, current, filter) {
        for (var key in cache) {
            var cachedNode = cache[key]
            if (cachedNode) {
                var name = getComponentName(cachedNode.componentOptions)
                if (name && !filter(name)) {
                    if (cachedNode !== current) {
                        pruneCacheEntry(cachedNode)
                    }
                    cache[key] = null
                }
            }
        }
    }

    function pruneCacheEntry(vnode) {
        if (vnode) {
            vnode.componentInstance.$destroy()
        }
    }

    var KeepAlive = {
        name: "keep-alive",
        abstract: true,

        props: {
            include: patternTypes,
            exclude: patternTypes
        },

        created: function created() {
            this.cache = Object.create(null)
        },

        destroyed: function destroyed() {
            var this$1 = this

            for (var key in this$1.cache) {
                pruneCacheEntry(this$1.cache[key])
            }
        },

        watch: {
            include: function include(val) {
                pruneCache(this.cache, this._vnode, function(name) {
                    return matches(val, name)
                })
            },
            exclude: function exclude(val) {
                pruneCache(this.cache, this._vnode, function(name) {
                    return !matches(val, name)
                })
            }
        },

        render: function render() {
            var vnode = getFirstComponentChild(this.$slots.default)
            var componentOptions = vnode && vnode.componentOptions
            if (componentOptions) {
                // check pattern
                var name = getComponentName(componentOptions)
                if (
                    name &&
                    ((this.include && !matches(this.include, name)) ||
                        (this.exclude && matches(this.exclude, name)))
                ) {
                    return vnode
                }
                var key =
                    vnode.key == null
                        ? // same constructor may get registered as different local components
                          // so cid alone is not enough (#3269)
                          componentOptions.Ctor.cid +
                          (componentOptions.tag ? "::" + componentOptions.tag : "")
                        : vnode.key
                if (this.cache[key]) {
                    vnode.componentInstance = this.cache[key].componentInstance
                } else {
                    this.cache[key] = vnode
                }
                vnode.data.keepAlive = true
            }
            return vnode
        }
    }

    var builtInComponents = {
        KeepAlive: KeepAlive
    }

    /*  */

    function initGlobalAPI(Vue) {
        // config
        var configDef = {}
        configDef.get = function() {
            return config
        }
        Object.defineProperty(Vue, "config", configDef)

        // exposed util methods.
        // NOTE: these are not considered part of the public API - avoid relying on
        // them unless you are aware of the risk.
        Vue.util = {
            warn: warn,
            extend: extend,
            mergeOptions: mergeOptions,
            defineReactive: defineReactive$$1
        }

        Vue.set = set
        Vue.delete = del
        Vue.nextTick = nextTick

        Vue.options = Object.create(null)
        ASSET_TYPES.forEach(function(type) {
            Vue.options[type + "s"] = Object.create(null)
        })

        // this is used to identify the "base" constructor to extend all plain-object
        // components with in Weex's multi-instance scenarios.
        Vue.options._base = Vue

        extend(Vue.options.components, builtInComponents)

        initUse(Vue)
        initMixin$1(Vue)
        initExtend(Vue)
        initAssetRegisters(Vue)
    }

    initGlobalAPI(Vue$3)

    Object.defineProperty(Vue$3.prototype, "$isServer", {
        get: isServerRendering
    })

    Object.defineProperty(Vue$3.prototype, "$ssrContext", {
        get: function get() {
            /* istanbul ignore next */
            return this.$vnode && this.$vnode.ssrContext
        }
    })

    Vue$3.version = "2.4.1"
    Vue$3.mpvueVersion = "1.0.12"

    /* globals renderer */

    var isReservedTag = makeMap(
        "template,script,style,element,content,slot,link,meta,svg,view," +
            "a,div,img,image,text,span,richtext,input,switch,textarea,spinner,select," +
            "slider,slider-neighbor,indicator,trisition,trisition-group,canvas," +
            "list,cell,header,loading,loading-indicator,refresh,scrollable,scroller," +
            "video,web,embed,tabbar,tabheader,datepicker,timepicker,marquee,countdown",
        true
    )

    // these are reserved for web because they are directly compiled away
    // during template compilation
    var isReservedAttr = makeMap("style,class")

    // Elements that you can, intentionally, leave open (and which close themselves)
    // more flexable than web
    var canBeLeftOpenTag = makeMap(
        "web,spinner,switch,video,textarea,canvas," + "indicator,marquee,countdown",
        true
    )

    var isUnaryTag = makeMap("embed,img,image,input,link,meta", true)

    function mustUseProp() {
        /* console.log('mustUseProp') */
    }

    function getTagNamespace() {
        /* console.log('getTagNamespace') */
    }

    function isUnknownElement() {
        /* console.log('isUnknownElement') */
    }

    function getComKey(vm) {
        return vm && vm.$attrs ? vm.$attrs["mpcomid"] : "0"
    }

    // 用于小程序的 event type 到 web 的 event
    var eventTypeMap = {
        tap: ["tap", "click"],
        touchstart: ["touchstart"],
        touchmove: ["touchmove"],
        touchcancel: ["touchcancel"],
        touchend: ["touchend"],
        longtap: ["longtap"],
        input: ["input"],
        blur: ["change", "blur"],
        submit: ["submit"],
        focus: ["focus"],
        scrolltoupper: ["scrolltoupper"],
        scrolltolower: ["scrolltolower"],
        scroll: ["scroll"]
    }

    /*  */

    // import { namespaceMap } from 'mp/util/index'

    var obj = {}

    function createElement$1(tagName, vnode) {
        return obj
    }

    function createElementNS(namespace, tagName) {
        return obj
    }

    function createTextNode(text) {
        return obj
    }

    function createComment(text) {
        return obj
    }

    function insertBefore(parentNode, newNode, referenceNode) {}

    function removeChild(node, child) {}

    function appendChild(node, child) {}

    function parentNode(node) {
        return obj
    }

    function nextSibling(node) {
        return obj
    }

    function tagName(node) {
        return "div"
    }

    function setTextContent(node, text) {
        return obj
    }

    function setAttribute(node, key, val) {
        return obj
    }

    var nodeOps = Object.freeze({
        createElement: createElement$1,
        createElementNS: createElementNS,
        createTextNode: createTextNode,
        createComment: createComment,
        insertBefore: insertBefore,
        removeChild: removeChild,
        appendChild: appendChild,
        parentNode: parentNode,
        nextSibling: nextSibling,
        tagName: tagName,
        setTextContent: setTextContent,
        setAttribute: setAttribute
    })

    /*  */

    var ref = {
        create: function create(_, vnode) {
            registerRef(vnode)
        },
        update: function update(oldVnode, vnode) {
            if (oldVnode.data.ref !== vnode.data.ref) {
                registerRef(oldVnode, true)
                registerRef(vnode)
            }
        },
        destroy: function destroy(vnode) {
            registerRef(vnode, true)
        }
    }

    function registerRef(vnode, isRemoval) {
        var key = vnode.data.ref
        if (!key) {
            return
        }

        var vm = vnode.context
        var ref = vnode.componentInstance || vnode.elm
        var refs = vm.$refs
        if (isRemoval) {
            if (Array.isArray(refs[key])) {
                remove(refs[key], ref)
            } else if (refs[key] === ref) {
                refs[key] = undefined
            }
        } else {
            if (vnode.data.refInFor) {
                if (!Array.isArray(refs[key])) {
                    refs[key] = [ref]
                } else if (refs[key].indexOf(ref) < 0) {
                    // $flow-disable-line
                    refs[key].push(ref)
                }
            } else {
                refs[key] = ref
            }
        }
    }

    /**
     * Virtual DOM patching algorithm based on Snabbdom by
     * Simon Friis Vindum (@paldepind)
     * Licensed under the MIT License
     * https://github.com/paldepind/snabbdom/blob/master/LICENSE
     *
     * modified by Evan You (@yyx990803)
     *

    /*
     * Not type-checking this because this file is perf-critical and the cost
     * of making flow understand it is not worth it.
     */

    var emptyNode = new VNode("", {}, [])

    var hooks = ["create", "activate", "update", "remove", "destroy"]

    function sameVnode(a, b) {
        return (
            a.key === b.key &&
            ((a.tag === b.tag &&
                a.isComment === b.isComment &&
                isDef(a.data) === isDef(b.data) &&
                sameInputType(a, b)) ||
                (isTrue(a.isAsyncPlaceholder) &&
                    a.asyncFactory === b.asyncFactory &&
                    isUndef(b.asyncFactory.error)))
        )
    }

    // Some browsers do not support dynamically changing type for <input>
    // so they need to be treated as different nodes
    function sameInputType(a, b) {
        if (a.tag !== "input") {
            return true
        }
        var i
        var typeA = isDef((i = a.data)) && isDef((i = i.attrs)) && i.type
        var typeB = isDef((i = b.data)) && isDef((i = i.attrs)) && i.type
        return typeA === typeB
    }

    function createKeyToOldIdx(children, beginIdx, endIdx) {
        var i, key
        var map = {}
        for (i = beginIdx; i <= endIdx; ++i) {
            key = children[i].key
            if (isDef(key)) {
                map[key] = i
            }
        }
        return map
    }

    function createPatchFunction(backend) {
        var i, j
        var cbs = {}

        var modules = backend.modules
        var nodeOps = backend.nodeOps

        for (i = 0; i < hooks.length; ++i) {
            cbs[hooks[i]] = []
            for (j = 0; j < modules.length; ++j) {
                if (isDef(modules[j][hooks[i]])) {
                    cbs[hooks[i]].push(modules[j][hooks[i]])
                }
            }
        }

        function emptyNodeAt(elm) {
            return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
        }

        function createRmCb(childElm, listeners) {
            function remove$$1() {
                if (--remove$$1.listeners === 0) {
                    removeNode(childElm)
                }
            }
            remove$$1.listeners = listeners
            return remove$$1
        }

        function removeNode(el) {
            var parent = nodeOps.parentNode(el)
            // element may have already been removed due to v-html / v-text
            if (isDef(parent)) {
                nodeOps.removeChild(parent, el)
            }
        }

        var inPre = 0

        function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested) {
            vnode.isRootInsert = !nested // for transition enter check
            if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
                return
            }

            var data = vnode.data
            var children = vnode.children
            var tag = vnode.tag
            if (isDef(tag)) {
                vnode.elm = vnode.ns
                    ? nodeOps.createElementNS(vnode.ns, tag)
                    : nodeOps.createElement(tag, vnode)
                setScope(vnode)

                /* istanbul ignore if */
                {
                    createChildren(vnode, children, insertedVnodeQueue)
                    if (isDef(data)) {
                        invokeCreateHooks(vnode, insertedVnodeQueue)
                    }
                    insert(parentElm, vnode.elm, refElm)
                }

                if (false) {}
            } else if (isTrue(vnode.isComment)) {
                vnode.elm = nodeOps.createComment(vnode.text)
                insert(parentElm, vnode.elm, refElm)
            } else {
                vnode.elm = nodeOps.createTextNode(vnode.text)
                insert(parentElm, vnode.elm, refElm)
            }
        }

        function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
            var i = vnode.data
            if (isDef(i)) {
                var isReactivated = isDef(vnode.componentInstance) && i.keepAlive
                if (isDef((i = i.hook)) && isDef((i = i.init))) {
                    i(vnode, false /* hydrating */, parentElm, refElm)
                }
                // after calling the init hook, if the vnode is a child component
                // it should've created a child instance and mounted it. the child
                // component also has set the placeholder vnode's elm.
                // in that case we can just return the element and be done.
                if (isDef(vnode.componentInstance)) {
                    initComponent(vnode, insertedVnodeQueue)
                    if (isTrue(isReactivated)) {
                        reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm)
                    }
                    return true
                }
            }
        }

        function initComponent(vnode, insertedVnodeQueue) {
            if (isDef(vnode.data.pendingInsert)) {
                insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert)
                vnode.data.pendingInsert = null
            }
            vnode.elm = vnode.componentInstance.$el
            if (isPatchable(vnode)) {
                invokeCreateHooks(vnode, insertedVnodeQueue)
                setScope(vnode)
            } else {
                // empty component root.
                // skip all element-related modules except for ref (#3455)
                registerRef(vnode)
                // make sure to invoke the insert hook
                insertedVnodeQueue.push(vnode)
            }
        }

        function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
            var i
            // hack for #4339: a reactivated component with inner transition
            // does not trigger because the inner node's created hooks are not called
            // again. It's not ideal to involve module-specific logic in here but
            // there doesn't seem to be a better way to do it.
            var innerNode = vnode
            while (innerNode.componentInstance) {
                innerNode = innerNode.componentInstance._vnode
                if (isDef((i = innerNode.data)) && isDef((i = i.transition))) {
                    for (i = 0; i < cbs.activate.length; ++i) {
                        cbs.activate[i](emptyNode, innerNode)
                    }
                    insertedVnodeQueue.push(innerNode)
                    break
                }
            }
            // unlike a newly created component,
            // a reactivated keep-alive component doesn't insert itself
            insert(parentElm, vnode.elm, refElm)
        }

        function insert(parent, elm, ref$$1) {
            if (isDef(parent)) {
                if (isDef(ref$$1)) {
                    if (ref$$1.parentNode === parent) {
                        nodeOps.insertBefore(parent, elm, ref$$1)
                    }
                } else {
                    nodeOps.appendChild(parent, elm)
                }
            }
        }

        function createChildren(vnode, children, insertedVnodeQueue) {
            if (Array.isArray(children)) {
                for (var i = 0; i < children.length; ++i) {
                    createElm(children[i], insertedVnodeQueue, vnode.elm, null, true)
                }
            } else if (isPrimitive(vnode.text)) {
                nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text))
            }
        }

        function isPatchable(vnode) {
            while (vnode.componentInstance) {
                vnode = vnode.componentInstance._vnode
            }
            return isDef(vnode.tag)
        }

        function invokeCreateHooks(vnode, insertedVnodeQueue) {
            for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, vnode)
            }
            i = vnode.data.hook // Reuse variable
            if (isDef(i)) {
                if (isDef(i.create)) {
                    i.create(emptyNode, vnode)
                }
                if (isDef(i.insert)) {
                    insertedVnodeQueue.push(vnode)
                }
            }
        }

        // set scope id attribute for scoped CSS.
        // this is implemented as a special case to avoid the overhead
        // of going through the normal attribute patching process.
        function setScope(vnode) {
            var i
            var ancestor = vnode
            while (ancestor) {
                if (isDef((i = ancestor.context)) && isDef((i = i.$options._scopeId))) {
                    nodeOps.setAttribute(vnode.elm, i, "")
                }
                ancestor = ancestor.parent
            }
            // for slot content they should also get the scopeId from the host instance.
            if (
                isDef((i = activeInstance)) &&
                i !== vnode.context &&
                isDef((i = i.$options._scopeId))
            ) {
                nodeOps.setAttribute(vnode.elm, i, "")
            }
        }

        function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
            for (; startIdx <= endIdx; ++startIdx) {
                createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm)
            }
        }

        function invokeDestroyHook(vnode) {
            var i, j
            var data = vnode.data
            if (isDef(data)) {
                if (isDef((i = data.hook)) && isDef((i = i.destroy))) {
                    i(vnode)
                }
                for (i = 0; i < cbs.destroy.length; ++i) {
                    cbs.destroy[i](vnode)
                }
            }
            if (isDef((i = vnode.children))) {
                for (j = 0; j < vnode.children.length; ++j) {
                    invokeDestroyHook(vnode.children[j])
                }
            }
        }

        function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
            for (; startIdx <= endIdx; ++startIdx) {
                var ch = vnodes[startIdx]
                if (isDef(ch)) {
                    if (isDef(ch.tag)) {
                        removeAndInvokeRemoveHook(ch)
                        invokeDestroyHook(ch)
                    } else {
                        // Text node
                        removeNode(ch.elm)
                    }
                }
            }
        }

        function removeAndInvokeRemoveHook(vnode, rm) {
            if (isDef(rm) || isDef(vnode.data)) {
                var i
                var listeners = cbs.remove.length + 1
                if (isDef(rm)) {
                    // we have a recursively passed down rm callback
                    // increase the listeners count
                    rm.listeners += listeners
                } else {
                    // directly removing
                    rm = createRmCb(vnode.elm, listeners)
                }
                // recursively invoke hooks on child component root node
                if (
                    isDef((i = vnode.componentInstance)) &&
                    isDef((i = i._vnode)) &&
                    isDef(i.data)
                ) {
                    removeAndInvokeRemoveHook(i, rm)
                }
                for (i = 0; i < cbs.remove.length; ++i) {
                    cbs.remove[i](vnode, rm)
                }
                if (isDef((i = vnode.data.hook)) && isDef((i = i.remove))) {
                    i(vnode, rm)
                } else {
                    rm()
                }
            } else {
                removeNode(vnode.elm)
            }
        }

        function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
            var oldStartIdx = 0
            var newStartIdx = 0
            var oldEndIdx = oldCh.length - 1
            var oldStartVnode = oldCh[0]
            var oldEndVnode = oldCh[oldEndIdx]
            var newEndIdx = newCh.length - 1
            var newStartVnode = newCh[0]
            var newEndVnode = newCh[newEndIdx]
            var oldKeyToIdx, idxInOld, elmToMove, refElm

            // removeOnly is a special flag used only by <transition-group>
            // to ensure removed elements stay in correct relative positions
            // during leaving transitions
            var canMove = !removeOnly

            while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
                if (isUndef(oldStartVnode)) {
                    oldStartVnode = oldCh[++oldStartIdx] // Vnode has been moved left
                } else if (isUndef(oldEndVnode)) {
                    oldEndVnode = oldCh[--oldEndIdx]
                } else if (sameVnode(oldStartVnode, newStartVnode)) {
                    patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue)
                    oldStartVnode = oldCh[++oldStartIdx]
                    newStartVnode = newCh[++newStartIdx]
                } else if (sameVnode(oldEndVnode, newEndVnode)) {
                    patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue)
                    oldEndVnode = oldCh[--oldEndIdx]
                    newEndVnode = newCh[--newEndIdx]
                } else if (sameVnode(oldStartVnode, newEndVnode)) {
                    // Vnode moved right
                    patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue)
                    canMove &&
                        nodeOps.insertBefore(
                            parentElm,
                            oldStartVnode.elm,
                            nodeOps.nextSibling(oldEndVnode.elm)
                        )
                    oldStartVnode = oldCh[++oldStartIdx]
                    newEndVnode = newCh[--newEndIdx]
                } else if (sameVnode(oldEndVnode, newStartVnode)) {
                    // Vnode moved left
                    patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue)
                    canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm)
                    oldEndVnode = oldCh[--oldEndIdx]
                    newStartVnode = newCh[++newStartIdx]
                } else {
                    if (isUndef(oldKeyToIdx)) {
                        oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx)
                    }
                    idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null
                    if (isUndef(idxInOld)) {
                        // New element
                        createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm)
                        newStartVnode = newCh[++newStartIdx]
                    } else {
                        elmToMove = oldCh[idxInOld]
                        /* istanbul ignore if */
                        if (false) {}
                        if (sameVnode(elmToMove, newStartVnode)) {
                            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue)
                            oldCh[idxInOld] = undefined
                            canMove &&
                                nodeOps.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm)
                            newStartVnode = newCh[++newStartIdx]
                        } else {
                            // same key but different element. treat as new element
                            createElm(
                                newStartVnode,
                                insertedVnodeQueue,
                                parentElm,
                                oldStartVnode.elm
                            )
                            newStartVnode = newCh[++newStartIdx]
                        }
                    }
                }
            }
            if (oldStartIdx > oldEndIdx) {
                refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm
                addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue)
            } else if (newStartIdx > newEndIdx) {
                removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx)
            }
        }

        function patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly) {
            if (oldVnode === vnode) {
                return
            }

            var elm = (vnode.elm = oldVnode.elm)

            if (isTrue(oldVnode.isAsyncPlaceholder)) {
                if (isDef(vnode.asyncFactory.resolved)) {
                    hydrate(oldVnode.elm, vnode, insertedVnodeQueue)
                } else {
                    vnode.isAsyncPlaceholder = true
                }
                return
            }

            // reuse element for static trees.
            // note we only do this if the vnode is cloned -
            // if the new node is not cloned it means the render functions have been
            // reset by the hot-reload-api and we need to do a proper re-render.
            if (
                isTrue(vnode.isStatic) &&
                isTrue(oldVnode.isStatic) &&
                vnode.key === oldVnode.key &&
                (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
            ) {
                vnode.componentInstance = oldVnode.componentInstance
                return
            }

            var i
            var data = vnode.data
            if (isDef(data) && isDef((i = data.hook)) && isDef((i = i.prepatch))) {
                i(oldVnode, vnode)
            }

            var oldCh = oldVnode.children
            var ch = vnode.children
            if (isDef(data) && isPatchable(vnode)) {
                for (i = 0; i < cbs.update.length; ++i) {
                    cbs.update[i](oldVnode, vnode)
                }
                if (isDef((i = data.hook)) && isDef((i = i.update))) {
                    i(oldVnode, vnode)
                }
            }
            if (isUndef(vnode.text)) {
                if (isDef(oldCh) && isDef(ch)) {
                    if (oldCh !== ch) {
                        updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly)
                    }
                } else if (isDef(ch)) {
                    if (isDef(oldVnode.text)) {
                        nodeOps.setTextContent(elm, "")
                    }
                    addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue)
                } else if (isDef(oldCh)) {
                    removeVnodes(elm, oldCh, 0, oldCh.length - 1)
                } else if (isDef(oldVnode.text)) {
                    nodeOps.setTextContent(elm, "")
                }
            } else if (oldVnode.text !== vnode.text) {
                nodeOps.setTextContent(elm, vnode.text)
            }
            if (isDef(data)) {
                if (isDef((i = data.hook)) && isDef((i = i.postpatch))) {
                    i(oldVnode, vnode)
                }
            }
        }

        function invokeInsertHook(vnode, queue, initial) {
            // delay insert hooks for component root nodes, invoke them after the
            // element is really inserted
            if (isTrue(initial) && isDef(vnode.parent)) {
                vnode.parent.data.pendingInsert = queue
            } else {
                for (var i = 0; i < queue.length; ++i) {
                    queue[i].data.hook.insert(queue[i])
                }
            }
        }

        var bailed = false
        // list of modules that can skip create hook during hydration because they
        // are already rendered on the client or has no need for initialization
        var isRenderedModule = makeMap("attrs,style,class,staticClass,staticStyle,key")

        // Note: this is a browser-only function so we can assume elms are DOM nodes.
        function hydrate(elm, vnode, insertedVnodeQueue) {
            if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
                vnode.elm = elm
                vnode.isAsyncPlaceholder = true
                return true
            }
            vnode.elm = elm
            var tag = vnode.tag
            var data = vnode.data
            var children = vnode.children
            if (isDef(data)) {
                if (isDef((i = data.hook)) && isDef((i = i.init))) {
                    i(vnode, true /* hydrating */)
                }
                if (isDef((i = vnode.componentInstance))) {
                    // child component. it should have hydrated its own tree.
                    initComponent(vnode, insertedVnodeQueue)
                    return true
                }
            }
            if (isDef(tag)) {
                if (isDef(children)) {
                    // empty element, allow client to pick up and populate children
                    if (!elm.hasChildNodes()) {
                        createChildren(vnode, children, insertedVnodeQueue)
                    } else {
                        var childrenMatch = true
                        var childNode = elm.firstChild
                        for (var i$1 = 0; i$1 < children.length; i$1++) {
                            if (
                                !childNode ||
                                !hydrate(childNode, children[i$1], insertedVnodeQueue)
                            ) {
                                childrenMatch = false
                                break
                            }
                            childNode = childNode.nextSibling
                        }
                        // if childNode is not null, it means the actual childNodes list is
                        // longer than the virtual children list.
                        if (!childrenMatch || childNode) {
                            if (
                                false
                            ) {}
                            return false
                        }
                    }
                }
                if (isDef(data)) {
                    for (var key in data) {
                        if (!isRenderedModule(key)) {
                            invokeCreateHooks(vnode, insertedVnodeQueue)
                            break
                        }
                    }
                }
            } else if (elm.data !== vnode.text) {
                elm.data = vnode.text
            }
            return true
        }

        return function patch(oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
            if (isUndef(vnode)) {
                if (isDef(oldVnode)) {
                    invokeDestroyHook(oldVnode)
                }
                return
            }

            var isInitialPatch = false
            var insertedVnodeQueue = []

            if (isUndef(oldVnode)) {
                // empty mount (likely as component), create new root element
                isInitialPatch = true
                createElm(vnode, insertedVnodeQueue, parentElm, refElm)
            } else {
                var isRealElement = isDef(oldVnode.nodeType)
                if (!isRealElement && sameVnode(oldVnode, vnode)) {
                    // patch existing root node
                    patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly)
                } else {
                    if (isRealElement) {
                        // mounting to a real element
                        // check if this is server-rendered content and if we can perform
                        // a successful hydration.
                        if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
                            oldVnode.removeAttribute(SSR_ATTR)
                            hydrating = true
                        }
                        if (isTrue(hydrating)) {
                            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                                invokeInsertHook(vnode, insertedVnodeQueue, true)
                                return oldVnode
                            } else {
                            }
                        }
                        // either not server-rendered, or hydration failed.
                        // create an empty node and replace it
                        oldVnode = emptyNodeAt(oldVnode)
                    }
                    // replacing existing element
                    var oldElm = oldVnode.elm
                    var parentElm$1 = nodeOps.parentNode(oldElm)
                    createElm(
                        vnode,
                        insertedVnodeQueue,
                        // extremely rare edge case: do not insert if old element is in a
                        // leaving transition. Only happens when combining transition +
                        // keep-alive + HOCs. (#4590)
                        oldElm._leaveCb ? null : parentElm$1,
                        nodeOps.nextSibling(oldElm)
                    )

                    if (isDef(vnode.parent)) {
                        // component root element replaced.
                        // update parent placeholder node element, recursively
                        var ancestor = vnode.parent
                        while (ancestor) {
                            ancestor.elm = vnode.elm
                            ancestor = ancestor.parent
                        }
                        if (isPatchable(vnode)) {
                            for (var i = 0; i < cbs.create.length; ++i) {
                                cbs.create[i](emptyNode, vnode.parent)
                            }
                        }
                    }

                    if (isDef(parentElm$1)) {
                        removeVnodes(parentElm$1, [oldVnode], 0, 0)
                    } else if (isDef(oldVnode.tag)) {
                        invokeDestroyHook(oldVnode)
                    }
                }
            }

            invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch)
            return vnode.elm
        }
    }

    /*  */

    // import baseModules from 'core/vdom/modules/index'
    // const platformModules = []
    // import platformModules from 'web/runtime/modules/index'

    // the directive module should be applied last, after all
    // built-in modules have been applied.
    // const modules = platformModules.concat(baseModules)
    var modules = [ref]

    var corePatch = createPatchFunction({
        nodeOps: nodeOps,
        modules: modules
    })

    function patch() {
        corePatch.apply(this, arguments)
        this.$updateDataToMP()
    }

    function callHook$1(vm, hook, params) {
        var handlers = vm.$options[hook]
        if (hook === "onError" && handlers) {
            handlers = [handlers]
        }

        var ret
        if (handlers) {
            for (var i = 0, j = handlers.length; i < j; i++) {
                try {
                    ret = handlers[i].call(vm, params)
                } catch (e) {
                    handleError(e, vm, hook + " hook")
                }
            }
        }
        if (vm._hasHookEvent) {
            vm.$emit("hook:" + hook)
        }

        // for child
        if (vm.$children.length) {
            vm.$children.forEach(function(v) {
                return callHook$1(v, hook, params)
            })
        }

        return ret
    }

    // mpType 小程序实例的类型，可能的值是 'app', 'page'
    // rootVueVM 是 vue 的根组件实例，子组件中访问 this.$root 可得
    function getGlobalData(app, rootVueVM) {
        var mp = rootVueVM.$mp
        if (app && app.globalData) {
            mp.appOptions = app.globalData.appOptions
        }
    }

    // 格式化 properties 属性，并给每个属性加上 observer 方法

    // properties 的 一些类型 https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/component.html
    // properties: {
    //   paramA: Number,
    //   myProperty: { // 属性名
    //     type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
    //     value: '', // 属性初始值（可选），如果未指定则会根据类型选择一个
    //     observer: function(newVal, oldVal, changedPath) {
    //        // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
    //        // 通常 newVal 就是新设置的数据， oldVal 是旧数据
    //     }
    //   },
    // }

    // props 的一些类型 https://cn.vuejs.org/v2/guide/components-props.html#ad
    // props: {
    //   // 基础的类型检查 (`null` 匹配任何类型)
    //   propA: Number,
    //   // 多个可能的类型
    //   propB: [String, Number],
    //   // 必填的字符串
    //   propC: {
    //     type: String,
    //     required: true
    //   },
    //   // 带有默认值的数字
    //   propD: {
    //     type: Number,
    //     default: 100
    //   },
    //   // 带有默认值的对象
    //   propE: {
    //     type: Object,
    //     // 对象或数组且一定会从一个工厂函数返回默认值
    //     default: function () {
    //       return { message: 'hello' }
    //     }
    //   },
    //   // 自定义验证函数
    //   propF: {
    //     validator: function (value) {
    //       // 这个值必须匹配下列字符串中的一个
    //       return ['success', 'warning', 'danger'].indexOf(value) !== -1
    //     }
    //   }
    // }

    // core/util/options
    function normalizeProps$1(props, res, vm) {
        if (!props) {
            return
        }
        var i, val, name
        if (Array.isArray(props)) {
            i = props.length
            while (i--) {
                val = props[i]
                if (typeof val === "string") {
                    name = camelize(val)
                    res[name] = {
                        type: null
                    }
                } else {
                }
            }
        } else if (isPlainObject(props)) {
            for (var key in props) {
                val = props[key]
                name = camelize(key)
                res[name] = isPlainObject(val)
                    ? val
                    : {
                          type: val
                      }
            }
        }

        // fix vueProps to properties
        for (var key$1 in res) {
            if (res.hasOwnProperty(key$1)) {
                var item = res[key$1]
                if (item.default) {
                    item.value = item.default
                }
                var oldObserver = item.observer
                item.observer = function(newVal, oldVal) {
                    vm[name] = newVal
                    // 先修改值再触发原始的 observer，跟 watch 行为保持一致
                    if (typeof oldObserver === "function") {
                        oldObserver.call(vm, newVal, oldVal)
                    }
                }
            }
        }

        return res
    }

    function normalizeProperties(vm) {
        var properties = vm.$options.properties
        var vueProps = vm.$options.props
        var res = {}

        normalizeProps$1(properties, res, vm)
        normalizeProps$1(vueProps, res, vm)

        return res
    }

    /**
     * 把 properties 中的属性 proxy 到 vm 上
     */
    function initMpProps(vm) {
        var mpProps = (vm._mpProps = {})
        var keys = Object.keys(vm.$options.properties || {})
        keys.forEach(function(key) {
            if (!(key in vm)) {
                proxy(vm, "_mpProps", key)
                mpProps[key] = undefined // for observe
            }
        })
        observe(mpProps, true)
    }

    function initMP(mpType, next) {
        var rootVueVM = this.$root
        if (!rootVueVM.$mp) {
            rootVueVM.$mp = {}
        }

        var mp = rootVueVM.$mp

        // Please do not register multiple Pages
        // if (mp.registered) {
        if (mp.status) {
            // 处理子组件的小程序生命周期
            if (mpType === "app") {
                callHook$1(this, "onLaunch", mp.appOptions)
            } else {
                this.__wxWebviewId__ = rootVueVM.__wxWebviewId__
                this.__wxExparserNodeId__ = rootVueVM.__wxExparserNodeId__
                callHook$1(this, "onLoad", mp.query)
                // callHook$1(this, "onReady") // 避免 onReady触发两次
            }
            return next()
        }
        // mp.registered = true

        mp.mpType = mpType
        mp.status = "register"

        if (mpType === "app") {
            global.App({
                // 页面的初始数据
                globalData: {
                    appOptions: {}
                },

                handleProxy: function handleProxy(e) {
                    return rootVueVM.$handleProxyWithVue(e)
                },

                // Do something initial when launch.
                onLaunch: function onLaunch(options) {
                    if (options === void 0) options = {}

                    mp.app = this
                    mp.status = "launch"
                    this.globalData.appOptions = mp.appOptions = options
                    callHook$1(rootVueVM, "onLaunch", options)
                    next()
                },

                // Do something when app show.
                onShow: function onShow(options) {
                    if (options === void 0) options = {}

                    mp.status = "show"
                    this.globalData.appOptions = mp.appOptions = options
                    callHook$1(rootVueVM, "onShow", options)
                },

                // Do something when app hide.
                onHide: function onHide() {
                    mp.status = "hide"
                    callHook$1(rootVueVM, "onHide")
                },

                onError: function onError(err) {
                    callHook$1(rootVueVM, "onError", err)
                },
                //fixed by xxxxxx
                onUniNViewMessage: function onUniNViewMessage(e) {
                    callHook$1(rootVueVM, "onUniNViewMessage", e)
                }
            })
        } else if (mpType === "component") {
            initMpProps(rootVueVM)

            global.Component({
                // 小程序原生的组件属性
                properties: normalizeProperties(rootVueVM),
                // 页面的初始数据
                data: {
                    $root: {}
                },
                methods: {
                    handleProxy: function handleProxy(e) {
                        return rootVueVM.$handleProxyWithVue(e)
                    }
                },
                // mp lifecycle for vue
                // 组件生命周期函数，在组件实例进入页面节点树时执行，注意此时不能调用 setData
                created: function created() {
                    mp.status = "created"
                    mp.page = this
                },
                // 组件生命周期函数，在组件实例进入页面节点树时执行
                attached: function attached() {
                    mp.status = "attached"
                    callHook$1(rootVueVM, "attached")
                },
                // 组件生命周期函数，在组件布局完成后执行，此时可以获取节点信息（使用 SelectorQuery ）
                ready: function ready() {
                    mp.status = "ready"

                    callHook$1(rootVueVM, "ready")
                    next()

                    // 只有页面需要 setData
                    rootVueVM.$nextTick(function() {
                        rootVueVM._initDataToMP()
                    })
                },
                // 组件生命周期函数，在组件实例被移动到节点树另一个位置时执行
                moved: function moved() {
                    callHook$1(rootVueVM, "moved")
                },
                // 组件生命周期函数，在组件实例被从页面节点树移除时执行
                detached: function detached() {
                    mp.status = "detached"
                    callHook$1(rootVueVM, "detached")
                }
            })
        } else {
            var app = global.getApp()
    
            
            global.Page({
                // 页面的初始数据
                data: {
                    $root: {}
                },

                handleProxy: function handleProxy(e) {
                    return rootVueVM.$handleProxyWithVue(e)
                },

                // mp lifecycle for vue
                // 生命周期函数--监听页面加载
                onLoad: function onLoad(query) {
                    rootVueVM.__wxWebviewId__ = this.__wxWebviewId__//fixed by xxxxxx(createIntersectionObserver)
                    rootVueVM.__wxExparserNodeId__ = this.__wxExparserNodeId__
                    mp.page = this
                    mp.query = query
                    mp.status = "load"
                    getGlobalData(app, rootVueVM)
                    //仅load时重置数据
                    if (rootVueVM.$options && typeof rootVueVM.$options.data === "function") {
                    		Object.assign(rootVueVM.$data, rootVueVM.$options.data())
                    }
                    callHook$1(rootVueVM, "onLoad", query)
                },

                // 生命周期函数--监听页面显示
                onShow: function onShow() {
                    rootVueVM.__wxWebviewId__ = this.__wxWebviewId__//fixed by xxxxxx(createIntersectionObserver)
                    rootVueVM.__wxExparserNodeId__ = this.__wxExparserNodeId__
                    mp.page = this
                    mp.status = "show"
                
                    callHook$1(rootVueVM, "onShow")
                    
                    //   // 只有页面需要 setData
                    rootVueVM.$nextTick(function () {
                    	rootVueVM._initDataToMP();
                    });
                },

                // 生命周期函数--监听页面初次渲染完成
                onReady: function onReady() {
                    mp.status = "ready"

                    callHook$1(rootVueVM, "onReady")
                    next()
                },

                // 生命周期函数--监听页面隐藏
                onHide: function onHide() {
                    mp.status = "hide"
                    callHook$1(rootVueVM, "onHide")
                },

                // 生命周期函数--监听页面卸载
                onUnload: function onUnload() {
                    mp.status = "unload"
                    callHook$1(rootVueVM, "onUnload")
                    mp.page = null
                },

                // 页面相关事件处理函数--监听用户下拉动作
                onPullDownRefresh: function onPullDownRefresh() {
                    callHook$1(rootVueVM, "onPullDownRefresh")
                },

                // 页面上拉触底事件的处理函数
                onReachBottom: function onReachBottom() {
                    callHook$1(rootVueVM, "onReachBottom")
                },

                // 用户点击右上角分享
                onShareAppMessage: rootVueVM.$options.onShareAppMessage
                    ? function(options) {
                          return callHook$1(rootVueVM, "onShareAppMessage", options)
                      }
                    : null,

                // Do something when page scroll
                onPageScroll: function onPageScroll(options) {
                    callHook$1(rootVueVM, "onPageScroll", options)
                },

                // 当前是 tab 页时，点击 tab 时触发
                onTabItemTap: function onTabItemTap(options) {
                    callHook$1(rootVueVM, "onTabItemTap", options)
                }
            })
        }
    }

    // 节流方法，性能优化
    // 全局的命名约定，为了节省编译的包大小一律采取形象的缩写，说明如下。
    // $c === $child
    // $k === $comKey

    // 新型的被拍平的数据结构
    // {
    //   $root: {
    //     '1-1'{
    //       // ... data
    //     },
    //     '1.2-1': {
    //       // ... data1
    //     },
    //     '1.2-2': {
    //       // ... data2
    //     }
    //   }
    // }

    function getVmData(vm) {
        // 确保当前 vm 所有数据被同步
        var dataKeys = [].concat(
            Object.keys(vm._data || {}),
            Object.keys(vm._props || {}),
            Object.keys(vm._mpProps || {}),
            Object.keys(vm._computedWatchers || {})
        )
        return dataKeys.reduce(function(res, key) {
            res[key] = vm[key]
            return res
        }, {})
    }

    function getParentComKey(vm, res) {
        if (res === void 0) res = []

        var ref = vm || {}
        var $parent = ref.$parent
        if (!$parent) {
            return res
        }
        res.unshift(getComKey($parent))
        if ($parent.$parent) {
            return getParentComKey($parent, res)
        }
        return res
    }

    function formatVmData(vm) {
        var $p = getParentComKey(vm).join(",")
        var $k = $p + ($p ? "," : "") + getComKey(vm)

        // getVmData 这儿获取当前组件内的所有数据，包含 props、computed 的数据
        // 改动 vue.runtime 所获的的核心能力
        var data = Object.assign(getVmData(vm), {
            $k: $k,
            $kk: $k + ",",
            $p: $p
        })
        var key = "$root." + $k
        var res = {}
        res[key] = data
        return res
    }

    function collectVmData(vm, res) {
        if (res === void 0) res = {}

        var vms = vm.$children
        if (vms && vms.length) {
            vms.forEach(function(v) {
                return collectVmData(v, res)
            })
        }
        return Object.assign(res, formatVmData(vm))
    }

    /**
     * 频率控制 返回函数连续调用时，func 执行频率限定为 次 / wait
     * 自动合并 data
     *
     * @param  {function}   func      传入函数
     * @param  {number}     wait      表示时间窗口的间隔
     * @param  {object}     options   如果想忽略开始边界上的调用，传入{leading: false}。
     *                                如果想忽略结尾边界上的调用，传入{trailing: false}
     * @return {function}             返回客户调用函数
     */
    function throttle(func, wait, options) {
        var context, args, result
        var timeout = null
        // 上次执行时间点
        var previous = 0
        if (!options) {
            options = {}
        }
        // 延迟执行函数
        function later() {
            // 若设定了开始边界不执行选项，上次执行时间始终为0
            previous = options.leading === false ? 0 : Date.now()
            timeout = null
            result = func.apply(context, args)
            if (!timeout) {
                context = args = null
            }
        }
        return function(handle, data) {
            var now = Date.now()
            // 首次执行时，如果设定了开始边界不执行选项，将上次执行时间设定为当前时间。
            if (!previous && options.leading === false) {
                previous = now
            }
            // 延迟执行时间间隔
            var remaining = wait - (now - previous)
            context = this
            args = args ? [handle, Object.assign(args[1], data)] : [handle, data]
            // 延迟时间间隔remaining小于等于0，表示上次执行至此所间隔时间已经超过一个时间窗口
            // remaining大于时间窗口wait，表示客户端系统时间被调整过
            if (remaining <= 0 || remaining > wait) {
                clearTimeout(timeout)
                timeout = null
                previous = now
                result = func.apply(context, args)
                if (!timeout) {
                    context = args = null
                }
                // 如果延迟执行不存在，且没有设定结尾边界不执行选项
            } else if (!timeout && options.trailing !== false) {
                timeout = setTimeout(later, remaining)
            }
            return result
        }
    }

    // 优化频繁的 setData: https://mp.weixin.qq.com/debug/wxadoc/dev/framework/performance/tips.html
    var throttleSetData = throttle(function(handle, data) {
        handle && handle(data)
    }, 50)

    function getPage(vm) {
        var rootVueVM = vm.$root
        var ref = rootVueVM.$mp || {}
        var mpType = ref.mpType
        if (mpType === void 0) mpType = ""
        var page = ref.page

        // 优化后台态页面进行 setData: https://mp.weixin.qq.com/debug/wxadoc/dev/framework/performance/tips.html
        if (mpType === "app" || !page || typeof page.setData !== "function") {
            return
        }
        return page
    }

    // 优化每次 setData 都传递大量新数据
    function updateDataToMP() {
        var page = getPage(this)
        if (!page) {
            return
        }

        var data = JSON.parse(JSON.stringify(formatVmData(this)))
        //fixed by xxxxxx
        throttleSetData(page.setData.bind(page), diff(data, page.data))
    }

    function initDataToMP() {
        var page = getPage(this)
        if (!page) {
            return
        }

        var data = collectVmData(this.$root)
        //fixed by xxxxxx
        page.setData(JSON.parse(JSON.stringify(data)))
    }

    function getVM(vm, comkeys) {
        if (comkeys === void 0) comkeys = []

        var keys = comkeys.slice(1)
        if (!keys.length) {
            return vm
        }

        return keys.reduce(function(res, key) {
            var len = res.$children.length
            for (var i = 0; i < len; i++) {
                var v = res.$children[i]
                var k = getComKey(v)
                if (k === key) {
                    res = v
                    return res
                }
            }
            return res
        }, vm)
    }

    function getHandle(vnode, eventid, eventTypes) {
        if (eventTypes === void 0) eventTypes = []

        var res = []
        if (!vnode || !vnode.tag) {
            return res
        }

        var ref = vnode || {}
        var data = ref.data
        if (data === void 0) data = {}
        var children = ref.children
        if (children === void 0) children = []
        var componentInstance = ref.componentInstance
        if (componentInstance) {
            // 增加 slot 情况的处理
            // Object.values 会多增加几行编译后的代码
            Object.keys(componentInstance.$slots).forEach(function(slotKey) {
                var slot = componentInstance.$slots[slotKey]
                var slots = Array.isArray(slot) ? slot : [slot]
                slots.forEach(function(node) {
                    res = res.concat(getHandle(node, eventid, eventTypes))
                })
            })
        } else {
            // 避免遍历超出当前组件的 vm
            children.forEach(function(node) {
                res = res.concat(getHandle(node, eventid, eventTypes))
            })
        }

        var attrs = data.attrs
        var on = data.on
        if (attrs && on && attrs["eventid"] === eventid) {
            eventTypes.forEach(function(et) {
                var h = on[et]
                if (typeof h === "function") {
                    res.push(h)
                } else if (Array.isArray(h)) {
                    res = res.concat(h)
                }
            })
            return res
        }

        return res
    }

    function getWebEventByMP(e) {
        var type = e.type
        var timeStamp = e.timeStamp
        var touches = e.touches
        var detail = e.detail
        if (detail === void 0) detail = {}
        var target = e.target
        if (target === void 0) target = {}
        var currentTarget = e.currentTarget
        if (currentTarget === void 0) currentTarget = {}
        var x = detail.x
        var y = detail.y
        var event = {
            mp: e,
            type: type,
            timeStamp: timeStamp,
            x: x,
            y: y,
            target: Object.assign({}, target, detail),
            detail: detail, //fixed by xxxxxx
            currentTarget: currentTarget,
            stopPropagation: noop,
            preventDefault: noop
        }

        if (touches && touches.length) {
            Object.assign(event, touches[0])
            event.touches = touches
        }
        return event
    }

    function handleProxyWithVue(e) {
        var rootVueVM = this.$root
        var type = e.type
        var target = e.target
        if (target === void 0) target = {}
        var currentTarget = e.currentTarget
        var ref = currentTarget || target
        var dataset = ref.dataset
        if (dataset === void 0) dataset = {}
        var comkey = dataset.comkey
        if (comkey === void 0) comkey = ""
        var eventid = dataset.eventid
        var vm = getVM(rootVueVM, comkey.split(","))

        if (!vm) {
            return
        }

        var webEventTypes = eventTypeMap[type] || [type]
        var handles = getHandle(vm._vnode, eventid, webEventTypes)

        // TODO, enevt 还需要处理更多
        // https://developer.mozilla.org/zh-CN/docs/Web/API/Event
        if (handles.length) {
            var event = getWebEventByMP(e)
            if (handles.length === 1) {
                var result = handles[0](event)
                return result
            }
            handles.forEach(function(h) {
                return h(event)
            })
        }
    }

    // for platforms
    // import config from 'core/config'
    // install platform specific utils
    Vue$3.config.mustUseProp = mustUseProp
    Vue$3.config.isReservedTag = isReservedTag
    Vue$3.config.isReservedAttr = isReservedAttr
    Vue$3.config.getTagNamespace = getTagNamespace
    Vue$3.config.isUnknownElement = isUnknownElement

    // install platform patch function
    Vue$3.prototype.__patch__ = patch

    // public mount method
    Vue$3.prototype.$mount = function(el, hydrating) {
        var this$1 = this

        // el = el && inBrowser ? query(el) : undefined
        // return mountComponent(this, el, hydrating)

        // 初始化小程序生命周期相关
        var options = this.$options

        if (options && (options.render || options.mpType)) {
            var mpType = options.mpType
            if (mpType === void 0) mpType = "page"
            return this._initMP(mpType, function() {
                return mountComponent(this$1, undefined, undefined)
            })
        } else {
            return mountComponent(this, undefined, undefined)
        }
    }

    // for mp
    Vue$3.prototype._initMP = initMP

    Vue$3.prototype.$updateDataToMP = updateDataToMP
    Vue$3.prototype._initDataToMP = initDataToMP

    Vue$3.prototype.$handleProxyWithVue = handleProxyWithVue

    /*  */

    return Vue$3
})

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/global.js */ 3)))

/***/ }),
/* 3 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 10 */,
/* 11 */
/*!****************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ 2);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


function callHook$1(vm, hook, params) {
  var handlers = vm.$options[hook];
  if (hook === 'onError' && handlers) {
    handlers = [handlers];
  }
  if(typeof handlers === 'function'){
    handlers = [handlers]
  }

  var ret;
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
//      try {
        ret = handlers[i].call(vm, params);
//       } catch (e) {//fixed by xxxxxx
//         handleError(e, vm, (hook + " hook"));
//       }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }

  // for child
  if (vm.$children.length) {
    vm.$children.forEach(function (v) {
      return callHook$1(v, hook, params);
    });
  }

  return ret
}

function getRootVueVm(page) {
  return page.$vm.$root;
}

/* harmony default export */ __webpack_exports__["default"] = (function (App) {
  return {
    // 页面的初始数据
    data: {
      $root: {}
    },

    // mp lifecycle for vue
    // 生命周期函数--监听页面加载
    onLoad:function onLoad(query) {
      //页面加载的时候
      var app = new vue__WEBPACK_IMPORTED_MODULE_0___default.a(App);
      // 挂载Vue对象到page上
      this.$vm = app;
      var rootVueVM = app.$root;
      rootVueVM.__wxExparserNodeId__ = this.__wxExparserNodeId__//fixed by xxxxxx(createIntersectionObserver)
      rootVueVM.__wxWebviewId__ = this.__wxWebviewId__//fixed by xxxxxx(createIntersectionObserver)
      
      //初始化mp对象
      if (!rootVueVM.$mp) {
        rootVueVM.$mp = {};
      }
      var mp = rootVueVM.$mp;
      mp.mpType = 'page';
      mp.page = this;
      mp.query = query;
      mp.status = 'load';
      //mount 要在 mp.status = 'load';赋值之后，不然mount方法会重复添加微信Page
      //具体原因参考mpvue核心库源码，_initMP方法
      app.$mount();
    },

    handleProxy: function handleProxy(e) {
      var rootVueVM = getRootVueVm(this);
      return rootVueVM.$handleProxyWithVue(e)
    },

    // 生命周期函数--监听页面显示
    onShow:function onShow() {
      var rootVueVM = getRootVueVm(this);
      var mp = rootVueVM.$mp;
      mp.status = 'show';
      callHook$1(rootVueVM, 'onShow');
      //   // 只有页面需要 setData
      rootVueVM.$nextTick(function () {
        rootVueVM._initDataToMP();
      });
    },

    // 生命周期函数--监听页面初次渲染完成
    onReady:function onReady() {
      var rootVueVM = getRootVueVm(this);
      var mp = rootVueVM.$mp;
      mp.status = 'ready';
      callHook$1(rootVueVM, 'onReady');
    },

    // 生命周期函数--监听页面隐藏
    onHide: function onHide() {
      var rootVueVM = getRootVueVm(this);
      var mp = rootVueVM.$mp;
      mp.status = 'hide';
      callHook$1(rootVueVM, 'onHide');
    },

    // 生命周期函数--监听页面卸载
    onUnload: function onUnload() {
      var rootVueVM = getRootVueVm(this);
      callHook$1(rootVueVM, 'onUnload');
      rootVueVM.$destroy();
    },

    // 页面相关事件处理函数--监听用户下拉动作
    onPullDownRefresh: function onPullDownRefresh() {
      var rootVueVM = getRootVueVm(this);
      callHook$1(rootVueVM, 'onPullDownRefresh');
    },

    // 页面上拉触底事件的处理函数
    onReachBottom: function onReachBottom() {
      var rootVueVM = getRootVueVm(this);
      callHook$1(rootVueVM, 'onReachBottom');
    },

    // Do something when page scroll
    onPageScroll: function onPageScroll(options) {
      var rootVueVM = getRootVueVm(this);
      callHook$1(rootVueVM, 'onPageScroll', options);
    },

    // 当前是 tab 页时，点击 tab 时触发
    onTabItemTap: function onTabItemTap(options) {
      var rootVueVM = getRootVueVm(this);
      callHook$1(rootVueVM, 'onTabItemTap', options);
    },
		
    // // 用户点击右上角分享
    onShareAppMessage: App.onShareAppMessage ?
      function (options) {
        var rootVueVM = getRootVueVm(this);
        return callHook$1(rootVueVM, 'onShareAppMessage', options);
      } : null,

    //fixed by xxxxxx
    onNavigationBarButtonTap: function onNavigationBarButtonTap(options) {
        var rootVueVM = getRootVueVm(this);
    		callHook$1(rootVueVM, "onNavigationBarButtonTap", options)
    },
    onNavigationBarSearchInputChanged: function onNavigationBarSearchInputChanged(options) {
        var rootVueVM = getRootVueVm(this);
    		callHook$1(rootVueVM, "onNavigationBarSearchInputChanged", options)
    },
    onNavigationBarSearchInputConfirmed: function onNavigationBarSearchInputConfirmed(options) {
        var rootVueVM = getRootVueVm(this);
    		callHook$1(rootVueVM, "onNavigationBarSearchInputConfirmed", options)
    },
    onNavigationBarSearchInputClicked: function onNavigationBarSearchInputClicked(options) {
        var rootVueVM = getRootVueVm(this);
    		callHook$1(rootVueVM, "onNavigationBarSearchInputClicked", options)
    },
    onBackPress: function onBackPress(options) {
        var rootVueVM = getRootVueVm(this);
    		return callHook$1(rootVueVM, "onBackPress",options)
    },
		$getAppWebview:function (e) {
				return plus.webview.getWebviewById('' + this.__wxWebviewId__)
		}
  };
});


/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createPage = createPage;exports.createComponent = createComponent;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter) {if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;}}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.then(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return res.then(function (res) {
      return res[1];
    }).catch(function (res) {
      return res[0];
    });
  } };


var SYNC_API_RE =
/^\$|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

var CALLBACK_API_RE = /^on/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name);
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name);
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name);
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
      /* eslint-disable no-extend-native */
      if (!Promise.prototype.finally) {
        Promise.prototype.finally = function (callback) {
          var promise = this.constructor;
          return this.then(
          function (value) {return promise.resolve(callback()).then(function () {return value;});},
          function (reason) {return promise.resolve(callback()).then(function () {
              throw reason;
            });});

        };
      }
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      return 1;
    } else {
      return 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };




var baseApi = /*#__PURE__*/Object.freeze({
  upx2px: upx2px,
  interceptors: interceptors,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor });


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var protocols = {
  previewImage: previewImage };

var todos = [];
var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F \u6682\u4E0D\u652F\u6301".concat(methodName));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      var returnValue = wx[options.name || methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail:服务[' + service + ']不存在' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  getProvider: getProvider });


var getEmitter = function () {
  if (typeof getUniEmitter === 'function') {
    /* eslint-disable no-undef */
    return getUniEmitter;
  }
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}



var eventApi = /*#__PURE__*/Object.freeze({
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });




var api = /*#__PURE__*/Object.freeze({});



var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}

Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('onLoad', options);
  return MPPage(options);
};

Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('created', options);
  return MPComponent(options);
};

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue$$1, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
    vueOptions = VueComponent.extendOptions;
  } else {
    VueComponent = Vue$$1.extend(vueOptions);
  }
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions['behaviors'];
  var vueExtends = vueOptions['extends'];
  var vueMixins = vueOptions['mixins'];

  var vueProps = vueOptions['props'];

  if (!vueProps) {
    vueOptions['props'] = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps['name'] = {
            type: String,
            default: '' };

          vueProps['value'] = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts['default'];
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type, value, file);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts, null, file);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor = dataPath ? vm.__get_value(dataPath, context) : context;

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                                  *[
                                                  *    ['data.items', 'data.id', item.data.id],
                                                  *    ['metas', 'id', meta.id]
                                                  *],
                                                  *[
                                                  *    ['data.items', 'data.id', item.data.id],
                                                  *    ['metas', 'id', meta.id]
                                                  *],
                                                  *'test'
                                                  */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn("\u4E8B\u4EF6\u4FE1\u606F\u4E0D\u5B58\u5728");
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn("\u4E8B\u4EF6\u4FE1\u606F\u4E0D\u5B58\u5728");
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;
  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this.$vm;
          if (
          handlerCtx.$options.generic &&
          handlerCtx.$parent &&
          handlerCtx.$parent.$parent)
          {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = handlerCtx.$parent.$parent;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          handler.apply(handlerCtx, processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName));

        }
      });
    }
  });
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound'];


function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;

      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (!wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属
  var parentVm = $children.find(function (childVm) {return childVm.$scope._$vueId === vuePid;});
  if (parentVm) {
    return parentVm;
  }
  // 反向递归查找
  for (var i = $children.length - 1; i >= 0; i--) {
    parentVm = findVmByVueId($children[i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      var components = mpInstance.selectAllComponents('.vue-ref');
      components.forEach(function (component) {
        var ref = component.dataset.ref;
        $refs[ref] = component.$vm || component;
      });
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage$$1 = _ref5.isPage,initRelation$$1 = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var componentOptions = {
    options: {
      multipleSlots: true,
      addGlobalClass: true },

    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage$$1.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation$$1.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };



  if (isPage$$1) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });


  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (args) {
    this.$vm.$mp.query = args; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', args);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),
/* 18 */
/*!*********************************************************************************************************************!*\
  !*** F:/Ten/WeGame/Document download/WeChat Files/WXID_99Ake/FileStorage/File/2019-08/qj_consult/qj_consult/cfg.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
module.exports = {

  // loginUrl: 'https://qj.ngrok.xiaomiqiu.cn/mytio/users/consultant/mplogin.tio_x',
  //   	qjUrl: 'https://qj.ngrok.xiaomiqiu.cn/mytio/',

  // loginUrl: 'https://local.t-io.org/mytio/users/consultant/mplogin.tio_x',
  // qjUrl: 'https://local.t-io.org/mytio/',

  loginUrl: 'https://mpv2.csqiji.com/mytio/users/consultant/mplogin.tio_x',
  qjUrl: 'https://mpv2.csqiji.com/mytio/',
  imageBasicUrl: 'https://minip.csqiji.com/',
  qiniuDomain: 'http://qjqn.foxcodes.cn',
  payUrl: 'https://minip.csqiji.com/question/pay/init',
  imageTestUrl: 'https://minip.csqiji.com/imageTest/',
  gameUrl: 'http://localhost:8080/user',
  qiniuDomain2: 'http://qjqn.foxcodes.cn/' };

/***/ }),
/* 19 */
/*!*******************************************************************************************************************************!*\
  !*** F:/Ten/WeGame/Document download/WeChat Files/WXID_99Ake/FileStorage/File/2019-08/qj_consult/qj_consult/common/global.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var globalData = {
  wardrobe_list: [],
  question_data: [],
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
  kf_locai_id: '', //客服存储消息id
  reconnect: '', //判断是否需要重连

  question: [],
  answered: [],
  unanswered: [],
  member_an: [], //会员已回答列表
  member_unan: [], //会员未回答问题列表
  consult_an: [], //顾问已回答列表
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
      KF_CLOSE_NTY: 41 },

    text: function text(content) {
      console.log("//ToDo and display:", content);
    },
    picture: function picture(url) {
      console.log("//ToDo and display:", url);
    },
    voice: function voice(url) {
      console.log("//ToDo and display:", url);
    },
    video: function video(url) {
      console.log("//ToDo and display:", url);
    },
    close: function close(url) {
      console.log("//ToDo and display:", content);
    },
    SiteImCommandReverse: function SiteImCommandReverse(command_str) {//指令转相应的函数名

      var command = this.command;
      for (var index in command) {
        if ("000" + command[index] == command_str) {
          console.log("指令名：", "000" + command[index], "是否相等", "000" + command[index] == command_str);
          if (command_str == "00051") return "text";else
          if (command_str == "00055") return "picture";else
          if (command_str == "00057") return "video";else
          if (command_str == "00053") return "voice";else
          if (command_str == "00041") return "text";
        }
        continue;
      }
      return null;
    } },

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
      KF_P2P_NTY: 30 },

    text: function text(content) {
      console.log("//ToDo and display:", content);
    },
    picture: function picture(url) {
      console.log("//ToDo and display:", url);
    },
    voice: function voice(url) {
      console.log("//ToDo and display:", url);
    },
    video: function video(url) {
      console.log("//ToDo and display:", url);
    },
    close: function close(url) {
      console.log("//ToDo and display:", content);
    },
    SiteImCommandReverse: function SiteImCommandReverse(command_str) {//指令转相应的函数名
      /* 00029=="text  00063==picture  00064==voice 00070==video  00040==close"*/
      var command = this.command;
      for (var index in command) {
        if ("000" + command[index] == command_str) {
          console.log("指令名：", "000" + command[index], "是否相等", "000" + command[index] == command_str);
          if (command_str == "00030") return "text";else
          if (command_str == "00066") return "picture";else
          if (command_str == "00074") return "video";else
          if (command_str == "00068") return "voice";else
          if (command_str == "00041") return "text";
        }
        continue;
      }
      return null;
    } },

  test_data: [{
    question_type: '选择文件',
    question_number: '1',
    question_value: ' 请按照测试告知(图一)的图片实例上传素颜无美颜无饰品的头部正面照 [上传文件题]',
    question_model: '',
    answered: false },
  {
    question_type: '选择文件',
    question_number: '2',
    question_value: ' 请按照测试告知(图二)的图片实例上传素颜无美颜无饰品的头部侧面照 [上传文件题]',
    question_model: '',
    answered: false },
  {
    question_type: '选择文件',
    question_number: '3',
    question_value: ' 请按照测试告知(图三)的图片实例上传身体正面照 [上传文件题]',
    question_model: '',
    answered: false },
  {
    question_type: '选择文件',
    question_number: '4',
    question_value: ' 请按照测试告知(图四)的图片实例上传身体侧面照 [上传文件题]',
    question_model: '',
    answered: false },
  {
    //填空题
    //姓名
    question_type: '填空',
    question_number: '5',
    question_value: '您的姓名: [填空题]',
    question_model: '',
    answered: false },
  {
    //电话号码
    question_type: '填空',
    question_number: '6',
    question_value: '您的电话号码: [填空题]',
    question_model: '',
    answered: false },
  {
    //单选题目
    question_type: '单选',
    question_number: '7',
    question_value: '您的年龄是在哪个区间? [单选题]',
    question_model: '',
    question_options: [{
      id: 'radio_8_id_' + Math.random(),
      value: '18~25岁',
      src: '' },
    {
      id: 'radio_8_id_' + Math.random(),
      value: '26~30岁',
      src: '' },
    {
      id: 'radio_8_id_' + Math.random(),
      value: '31~35岁',
      src: '' },
    {
      id: 'radio_8_id_' + Math.random(),
      value: '36~40岁',
      src: '' },
    {
      id: 'radio_8_id_' + Math.random(),
      value: '41~45岁',
      src: '' },
    {
      id: 'radio_8_id_' + Math.random(),
      value: '46~50岁',
      src: '' }],

    answered: false },
  {
    question_type: '单选',
    question_number: '8',
    question_value: '您从事何种职业? [单选题]',
    question_model: '',
    question_options: [{
      id: 'radio_9_id_' + Math.random(),
      value: '政府官员/企业高管',
      src: '' },
    {
      id: 'radio_9_id_' + Math.random(),
      value: '公司白领',
      src: '' },
    {
      id: 'radio_9_id_' + Math.random(),
      value: '商业服务人员',
      src: '' },
    {
      id: 'radio_9_id_' + Math.random(),
      value: '学生/军人',
      src: '' },
    {
      id: 'radio_9_id_' + Math.random(),
      value: '教师',
      src: '' },
    {
      id: 'radio_9_id_' + Math.random(),
      value: '自由职业',
      src: '' },
    {
      id: 'radio_9_id_' + Math.random(),
      value: '其他',
      src: '' }],

    answered: false },
  {
    question_type: '单选',
    question_number: '9',
    question_value: '您的身高是多少? [单选题]',
    question_model: '',
    question_options: [{
      id: 'radio_10_id_' + Math.random(),
      value: '145—150CM',
      src: '' },
    {
      id: 'radio_10_id_' + Math.random(),
      value: '151—155CM',
      src: '' },
    {
      id: 'radio_10_id_' + Math.random(),
      value: '156—160CM',
      src: '' },
    {
      id: 'radio_10_id_' + Math.random(),
      value: '161—165CM',
      src: '' },
    {
      id: 'radio_10_id_' + Math.random(),
      value: '166—170CM',
      src: '' },
    {
      id: 'radio_10_id_' + Math.random(),
      value: '171CM以上',
      src: '' }],

    answered: false },
  {
    question_type: '单选',
    question_number: '10',
    question_value: '您的体重是多少? [单选题] ',
    question_model: '',
    question_options: [{
      id: 'radio_11_id_' + Math.random(),
      value: '40—45KG',
      src: '' },
    {
      id: 'radio_11_id_' + Math.random(),
      value: '46—50KG',
      src: '' },
    {
      id: 'radio_11_id_' + Math.random(),
      value: '51—55KG',
      src: '' },
    {
      id: 'radio_11_id_' + Math.random(),
      value: '56—60KG',
      src: '' },
    {
      id: 'radio_11_id_' + Math.random(),
      value: '61—65KG',
      src: '' },
    {
      id: 'radio_11_id_' + Math.random(),
      value: '65KG以上',
      src: '' }],

    answered: false },
  {
    question_type: '单选',
    question_number: '11',
    question_value: '您日常穿着什么尺码的服装? [单选题]',
    question_model: '', //单选的model
    question_options: [{
      id: 'radio_12_id_' + Math.random(),
      value: 'XS码',
      src: '' },
    {
      id: 'radio_12_id_' + Math.random(),
      value: 'S码',
      src: '' },
    {
      id: 'radio_12_id_' + Math.random(),
      value: 'M码',
      src: '' },
    {
      id: 'radio_12_id_' + Math.random(),
      value: 'L码',
      src: '' },
    {
      id: 'radio_12_id_' + Math.random(),
      value: 'XL码',
      src: '' },
    {
      id: 'radio_12_id_' + Math.random(),
      value: 'XXL码及以上',
      src: '' }],

    answered: false },
  {
    question_type: '单选',
    question_number: '12',
    question_value: '您有日常化妆的习惯吗? [单选题] ',
    question_model: '',
    question_options: [{
      id: 'radio_13_id_' + Math.random(),
      value: '每天都化妆',
      src: '' },
    {
      id: 'radio_13_id_' + Math.random(),
      value: '偶然会化妆',
      src: '' },
    {
      id: 'radio_13_id_' + Math.random(),
      value: '极少或素颜',
      src: '' }],

    answered: false },
  {
    question_type: '复选',
    question_number: '13',
    question_value: '您日常多用哪类妆面? [多选题]',
    question_model: [],
    question_options: [{
      id: 'radio_14_id_' + Math.random(),
      value: '裸妆',
      src: '' },
    {
      id: 'radio_14_id_' + Math.random(),
      value: '较艳丽的妆面',
      src: '' },
    {
      id: 'radio_14_id_' + Math.random(),
      value: '只化眉毛或嘴唇局部',
      src: '' },
    {
      id: 'radio_14_id_' + Math.random(),
      value: '只涂BB霜等基础粉底',
      src: '' }],

    answered: false },
  {
    question_type: '单选',
    question_number: '14',
    question_value: ' 您习惯穿多高的高跟鞋？[单选题]',
    question_model: '',
    question_options: [{
      id: 'radio_15_id_' + Math.random(),
      value: '3厘米以下',
      src: '' },
    {
      id: 'radio_15_id_' + Math.random(),
      value: '3-5厘米',
      src: '' },
    {
      id: 'radio_15_id_' + Math.random(),
      value: '5-8厘米',
      src: '' },
    {
      id: 'radio_15_id_' + Math.random(),
      value: '8厘米以上',
      src: '' }],

    answered: false },
  {
    question_type: '单选',
    question_number: '15',
    question_value: ' 您是否有耳洞？[单选题]',
    question_model: '',
    question_options: [{
      id: 'radio_16_id_' + Math.random(),
      value: '有耳洞',
      src: '' },
    {
      id: 'radio_16_id_' + Math.random(),
      value: '没有耳洞',
      src: '' }],

    answered: false },
  {
    question_type: '复选',
    question_number: '16',
    question_value: '您日常的偏好色是？[多选题]',
    question_model: [], //复选的model
    question_options: [{
      id: 'radio_17_id_' + Math.random(),
      value: '红',
      src: '' },
    {
      id: 'radio_17_id_' + Math.random(),
      value: '橙',
      src: '' },
    {
      id: 'radio_17_id_' + Math.random(),
      value: '黄',
      src: '' },
    {
      id: 'radio_17_id_' + Math.random(),
      value: '绿',
      src: '' },
    {
      id: 'radio_17_id_' + Math.random(),
      value: '蓝',
      src: '' },
    {
      id: 'radio_17_id_' + Math.random(),
      value: '紫',
      src: '' },
    {
      id: 'radio_17_id_' + Math.random(),
      value: '黑',
      src: '' },
    {
      id: 'radio_17_id_' + Math.random(),
      value: '白',
      src: '' },
    {
      id: 'radio_17_id_' + Math.random(),
      value: '灰',
      src: '' },
    {
      id: 'radio_17_id_' + Math.random(),
      value: '裸色',
      src: '' }],

    answered: false },
  {
    //十八题
    question_type: '复选',
    question_number: '17',
    question_value: '您日常穿着较多的服装款式有：[多选题]',
    question_model: [],
    question_options: [{
      id: 'radio_18_id_' + Math.random(),
      value: '裙装',
      src: '' },
    {
      id: 'radio_18_id_' + Math.random(),
      value: '裤装',
      src: '' },
    {
      id: 'radio_18_id_' + Math.random(),
      value: '宽松款',
      src: '' },
    {
      id: 'radio_18_id_' + Math.random(),
      value: '紧身款',
      src: '' },
    {
      id: 'radio_18_id_' + Math.random(),
      value: '长款',
      src: '' },

    {
      id: 'radio_18_id_' + Math.random(),
      value: '中款',
      src: '' },

    {
      id: 'radio_18_id_' + Math.random(),
      value: '短款',
      src: '' },
    {
      id: 'radio_18_id_' + Math.random(),
      value: '时尚款',
      src: '' },
    {
      id: 'radio_18_id_' + Math.random(),
      value: '大众款',
      src: '' },
    {
      id: 'radio_18_id_' + Math.random(),
      value: '单件款',
      src: '' },
    {
      id: 'radio_18_id_' + Math.random(),
      value: '混搭款',
      src: '' }],


    answered: false },
  {
    //十九题
    question_type: '复选',
    question_number: '18',
    question_value: '您有哪些日常形象场合的需要? [多选题]',
    question_model: [],
    question_options: [{
      id: 'radio_19_id_' + Math.random(),
      value: '严肃职场(召开会议/商务谈判/作报告等)',
      src: 'img/19-1.png' },
    {
      id: 'radio_19_id_' + Math.random(),
      value: '时尚职场(日常上班/拜访客户等)',
      src: 'img/19-2.png' },
    {
      id: 'radio_19_id_' + Math.random(),
      value: '时尚休闲(朋友逛街/闺蜜聚会/旅游休闲等)',
      src: 'img/19-3.png' },
    {
      id: 'radio_19_id_' + Math.random(),
      value: '私密约会(结婚纪念/情人节庆祝/二人世界等)',
      src: 'img/19-4.png' },
    {
      id: 'radio_19_id_' + Math.random(),
      value: '日宴社交(参加婚礼/小型酒会/生日聚会等)',
      src: 'img/19-5.png' },
    {
      id: 'radio_19_id_' + Math.random(),
      value: '晚宴社交(走红毯/公司年庆/大型晚会/庆功表彰等)',
      src: 'img/19-6.png' }],

    answered: false },
  {
    question_type: '复选',
    question_number: '19',
    question_value: '您喜欢或心仪的形象有哪些?/你有什么样的理想形象? [多选题]',
    question_model: [],
    question_options: [{
      id: 'radio_20_id_' + Math.random(),
      value: '乖巧、可爱、甜美、活泼的少女形象',
      src: 'img/20-1.png' },
    {
      id: 'radio_20_id_' + Math.random(),
      value: '帅气十足、中性、直率、利落的少年形象',
      src: 'img/20-2.png' },
    {
      id: 'radio_20_id_' + Math.random(),
      value: '精致、怡静、温柔、细致、素雅的优雅形象',
      src: 'img/20-3.png' },
    {
      id: 'radio_20_id_' + Math.random(),
      value: '迷人、性感、妖媚、艳丽、女人味十足的浪漫形象',
      src: 'img/20-4.png' },
    {
      id: 'radio_20_id_' + Math.random(),
      value: '放松、随意、朴素、亲切的自然形象',
      src: 'img/20-5.png' },
    {
      id: 'radio_20_id_' + Math.random(),
      value: '端庄、严谨、上品、精致、有学识感的古典形象',
      src: 'img/20-6.png' },
    {
      id: 'radio_20_id_' + Math.random(),
      value: '个性、时尚、另类,与众不同的前卫形象',
      src: 'img/20-7.png' },
    {
      id: 'radio_20_id_' + Math.random(),
      value: '少数民族风情、异国风情的异域形象',
      src: 'img/20-8.png' },
    {
      id: 'radio_20_id_' + Math.random(),
      value: '有存在感、大气、夸张、引人注目的戏剧形象',
      src: 'img/20-9.png' }],

    answered: false },
  {
    question_type: '单选',
    question_number: '20',
    question_value: ' 您自我评价日常气质是趋向哪个方向? [单选题] ',
    question_model: '',
    question_options: [{
      id: 'radio_21_id_' + Math.random(),
      value: '端庄雅致的气质',
      src: 'img/21-1.png' },
    {
      id: 'radio_21_id_' + Math.random(),
      value: '个性另类的气质',
      src: 'img/21-2.png' },
    {
      id: 'radio_21_id_' + Math.random(),
      value: '居于两者之间',
      src: 'img/21-3.png' },
    {
      id: 'radio_21_id_' + Math.random(),
      value: '我不清楚',
      src: 'img/21-4.png' }],

    answered: false },
  {
    question_type: '单选',
    question_number: '21',
    question_value: ' 您日常的动作偏多或偏少? [单选题]',
    question_model: '',
    question_options: [{
      id: 'radio_22_id_' + Math.random(),
      value: '动作偏多',
      src: '' },
    {
      id: 'radio_22_id_' + Math.random(),
      value: '动作偏少',
      src: '' },
    {
      id: 'radio_22_id_' + Math.random(),
      value: '不多不少,居中',
      src: '' },
    {
      id: 'radio_22_id_' + Math.random(),
      value: '我不清楚',
      src: '' }],

    answered: false },
  {
    question_type: '单选',
    question_number: '22',
    question_value: ' 您日常的动作幅度偏大或偏小? [单选题] ',
    question_model: '',
    question_options: [{
      id: 'radio_23_id_' + Math.random(),
      value: '动作幅度较大',
      src: '' },
    {
      id: 'radio_23_id_' + Math.random(),
      value: '动作幅度较小',
      src: '' },
    {
      id: 'radio_23_id_' + Math.random(),
      value: '不大不小,居中',
      src: '' },
    {
      id: 'radio_23_id_' + Math.random(),
      value: '我不清楚',
      src: '' }],

    answered: false },
  {
    question_type: '单选',
    question_number: '23',
    question_value: '您日常说话偏多或偏少? [单选题]',
    question_model: '',
    question_options: [{
      id: 'radio_24_id_' + Math.random(),
      value: '说话偏多',
      src: '' },
    {
      id: 'radio_24_id_' + Math.random(),
      value: '说话偏少',
      src: '' },
    {
      id: 'radio_24_id_' + Math.random(),
      value: '不多不少,居中',
      src: '' },
    {
      id: 'radio_24_id_' + Math.random(),
      value: '我不清楚',
      src: '' }],

    answered: false },
  {
    question_type: '单选',
    question_number: '24',
    question_value: '您日常说话音量偏大或偏小? [单选题] ',
    question_model: '',
    question_options: [{
      id: 'radio_25_id_' + Math.random(),
      value: '音量偏大',
      src: '' },
    {
      id: 'radio_25_id_' + Math.random(),
      value: '音量偏小',
      src: '' },
    {
      id: 'radio_25_id_' + Math.random(),
      value: '不大不小,居中',
      src: '' },
    {
      id: 'radio_25_id_' + Math.random(),
      value: '我不清楚',
      src: '' }],

    answered: false },
  {
    question_type: '单选',
    question_number: '25',
    question_value: '您在公众场合（朋友聚会等）属于什么样的角色？ [单选题] ',
    question_model: [],
    question_options: [{
      id: 'radio_26_id_' + Math.random(),
      value: '属于人气王的角色',
      src: '' },
    {
      id: 'radio_26_id_' + Math.random(),
      value: '属于安静无存在感的角色',
      src: '' },
    {
      id: 'radio_26_id_' + Math.random(),
      value: '居于两者之间',
      src: '' },
    {
      id: 'radio_26_id_' + Math.random(),
      value: '我不清楚',
      src: '' }],

    answered: false },
  {
    question_type: '单选',
    question_number: '26',
    question_value: '你自我感觉气场是偏大还是偏小？ [单选题] ',
    question_model: '',
    question_options: [{
      id: 'radio_27_id_' + Math.random(),
      value: '偏大',
      src: '' },
    {
      id: 'radio_27_id_' + Math.random(),
      value: '偏小',
      src: '' },
    {
      id: 'radio_27_id_' + Math.random(),
      value: '居于两者之间',
      src: '' },
    {
      id: 'radio_27_id_' + Math.random(),
      value: '我不清楚',
      src: '' }],

    answered: false },
  {
    question_type: '单选',
    question_number: '27',
    question_value: '您的日常言行举止偏优雅有礼或偏随意天性? [单选题] ',
    question_model: '',
    question_options: [{
      id: 'radio_28_id_' + Math.random(),
      value: '言行举止偏优雅有礼',
      src: '' },
    {
      id: 'radio_28_id_' + Math.random(),
      value: '言行举止偏随意天性',
      src: '' },
    {
      id: 'radio_28_id_' + Math.random(),
      value: '居于两者之间',
      src: '' },
    {
      id: 'radio_28_id_' + Math.random(),
      value: '我不清楚',
      src: '' }],

    answered: false },
  {
    question_type: '单选',
    question_number: '28',
    question_value: '您的个性和言行举止偏男性或偏女性化? [单选题]',
    question_model: '',
    question_options: [{
      id: 'radio_29_id_' + Math.random(),
      value: '偏女汉子',
      src: '' },
    {
      id: 'radio_29_id_' + Math.random(),
      value: '偏女性化',
      src: '' },
    {
      id: 'radio_29_id_' + Math.random(),
      value: '居中',
      src: '' },
    {
      id: 'radio_29_id_' + Math.random(),
      value: '我不清楚',
      src: '' }],

    answered: false },
  {
    question_type: '单选',
    question_number: '29',
    question_value: '你的谈吐趋于偏文雅或偏白话? [单选题]',
    question_model: '',
    question_options: [{
      id: 'radio_30_id_' + Math.random(),
      value: '谈吐偏文雅,有学识',
      src: '' },
    {
      id: 'radio_30_id_' + Math.random(),
      value: '谈吐偏白话,接地气',
      src: '' },
    {
      id: 'radio_30_id_' + Math.random(),
      value: '居中',
      src: '' },
    {
      id: 'radio_30_id_' + Math.random(),
      value: '我不清楚',
      src: '' }],

    answered: false }] };




module.exports = {
  globalData: globalData };var _default =

{
  globalData: globalData };exports.default = _default;

/***/ }),
/* 20 */
/*!***************************************************************************************************************************!*\
  !*** F:/Ten/WeGame/Document download/WeChat Files/WXID_99Ake/FileStorage/File/2019-08/qj_consult/qj_consult/utils/req.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _global = _interopRequireDefault(__webpack_require__(/*! ../common/global.js */ 19));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
//openId封装化
var req = function req(opt) {
  if (!opt.data) opt.data = {};

  opt.data.openid = _global.default.globalData.openid;

  uni.request({
    url: opt.url,
    data: opt.data,
    method: opt.method,
    success: function success(res) {
      opt.success(res);
    },
    fail: function fail(res) {
      opt.fail(res);
    } });


};var _default =

{
  req: req };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 17)["default"]))

/***/ }),
/* 21 */
/*!****************************************************************************************************************************!*\
  !*** F:/Ten/WeGame/Document download/WeChat Files/WXID_99Ake/FileStorage/File/2019-08/qj_consult/qj_consult/user/basic.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.login = login;exports.isLogin = isLogin;
var _cfg = _interopRequireDefault(__webpack_require__(/*! ../cfg.js */ 18));
var _global = _interopRequireDefault(__webpack_require__(/*! ../common/global.js */ 19));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //获取cfg.js中的url配置信息

// 获取用户登录信息
function getLoginData(code, rawData, signature, encryptedData, iv, scene, callback) {
  console.log("getLoginData Begin ... ");
  uni.request({
    url: _cfg.default.loginUrl, //接口地址。
    method: 'POST',
    data: {
      code: code,
      iv: iv,
      scene: scene,
      rawData: rawData,
      encryptedData: encryptedData,
      signature: signature },


    success: function success(r) {
      console.log("需要用到的openid", r);

      if (r.data.openid) {
        console.log("openid", r);
        // 获取openid成功
        uni.setStorageSync('openId', r.data.openid);
        _global.default.globalData.openid = r.data.openid;

        callback(r);
      } else {
        uni.showToast({
          title: "服务器开了小差，请联系客服。",
          icon: "none",
          duration: 3000 });

      }
    },
    fail: function fail(err) {
      console.log("getLoginData网络请求失败！");
      // 网络请求失败处理
      console.log(err);
    } });

}

function login(z, y, scene) {// 用户登录并取得openid等用户信息
  var that = this;
  var _success = arguments[0] ? arguments[0] : function () {}; //登录成功的回调
  var _fail = arguments[1] ? arguments[1] : function () {}; //登录失败的回调
  var content = arguments[2] ? arguments[2] : '授权登录失败，部分功能将不能使用，是否重新登录？'; //当用户取消授权登录时，弹出的确认框文字

  uni.login({
    provider: 'weixin',
    success: function success(res1) {
      //login成功，获得code
      var code = res1.code;
      console.log("login成功，获得code", res1);
      uni.getUserInfo({
        provider: 'weixin',
        success: function success(res2) {
          console.log("getUserInfo成功", res2);
          _global.default.globalData.userInfo = res2.userInfo;
          uni.setStorageSync('userInfo', res2.userInfo);
          var rawData = encodeURIComponent(res2.rawData); // 不包括敏感信息的原始数据字符串，用于计算签名
          var signature = res2.signature || ''; // 使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息
          var encryptedData = res2.encryptedData; // 包括敏感数据在内的完整用户信息的加密数据
          var iv = res2.iv; // 加密算法的初始向量
          // 调用服务器端登录，获得详细用户资料，比如openid(支付用)，保存用户数据到服务器  
          getLoginData(code, rawData, signature, encryptedData, iv, scene, function (res3) {
            // if (res3.data.IsAudit == 0) {
            // 	uni.setStorageSync("user", res3.data) // 本地缓存user数据，下次打开不需要登录
            // 	console.log("user", res3.data)
            // }

            // let app = getApp()
            _global.default.globalData.user = res3.data; // 在当前的app对象中缓存user数据
            _global.default.globalData.isTested = _global.default.globalData.user.tested ? _global.default.globalData.user.tested : false;
            _global.default.globalData.isLogin = true;
            _success(res3);
          });
        },
        fail: function fail(res1) {//用户点了“拒绝”
          uni.showModal({
            title: '提示',
            content: content,
            showCancel: true,
            cancelText: "否",
            confirmText: "是",
            success: function success(res2) {
              if (res2.confirm) {
                if (uni.openSetting) {//当前微信的版本 ，是否支持openSetting
                  uni.openSetting({
                    success: function success(res3) {
                      if (res3.authSetting["scope.userInfo"]) {//如果用户重新同意了授权登录
                        uni.getUserInfo({ //跟上面的uni.getUserInfo  sucess处理逻辑一样
                          success: function success(res4) {
                            // let app = getApp()
                            _global.default.globalData.userInfo = res4.userInfo;
                            uni.setStorageSync("userInfo", res4.userInfo);
                            var rawData = encodeURIComponent(res4.rawData);
                            var signature = res4.signature || '';
                            var encryptedData = res4.encryptedData;
                            var iv = res4.iv;
                            getLoginData(code, rawData, signature, encryptedData, iv, function (res5) {
                              // uni.setStorageSync("user", res5.data)
                              _global.default.globalData.user = res5.data;
                              _global.default.globalData.isTested = _global.default.globalData.user.tested ? _global.default.globalData.user.tested :
                              false;
                              _global.default.globalData.isLogin = true;
                              _success(res5);
                            });
                          } });

                      } else {//用户还是拒绝
                        _fail();
                      }
                    },
                    fail: function fail() {//调用失败，授权登录不成功
                      _fail();
                    } });

                } else {
                  _fail();
                }
              }
            } });

        } });

    },
    fail: function fail(res) {
      _fail();
    } });

}

function isLogin() {//判断用户是否登录过，如未曾登录，则调用login方法
  var success = arguments[0] ? arguments[0] : function () {}; //登录成功的回调

  var user = _global.default.globalData.user;

  if (!user.openid || user.openid.length < 10) {// if(app.globalData.isLogin)
    console.log("用户暂未登陆");
  } else {// 如果缓存中已经存在user.openId  那就是已经登录过
    _global.default.globalData.user = user;
    _global.default.globalData.isTested = user.tested ? user.tested : false;
    _global.default.globalData.isLogin = true;
    success(user);
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 17)["default"]))

/***/ }),
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 31);


/***/ }),
/* 31 */
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 32);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 32 */
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),
/* 33 */,
/* 34 */,
/* 35 */
/*!***************************************************************************************************************************!*\
  !*** F:/Ten/WeGame/Document download/WeChat Files/WXID_99Ake/FileStorage/File/2019-08/qj_consult/qj_consult/common/kf.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 30));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}(function () {

  var pako = __webpack_require__(/*! ./pako */ 36);
  var encoding = __webpack_require__(/*! ../utils/encoding */ 37);
  var all = __webpack_require__(/*! ./global */ 19);
  var helper = __webpack_require__(/*! ./help */ 38);
  var util = __webpack_require__(/*! ../utils/util */ 40);
  var cfg = __webpack_require__(/*! ../cfg */ 18);

  module.exports = {
    connection: connection,
    init_im: init_im,
    sendmsg: sendmsg,
    qi_niu_video: qi_niu_video,
    qi_niu_image: qi_niu_image,
    qi_niu_voice: qi_niu_voice,
    auto: auto,
    re_send: re_send };


  function qiniu_up(filePath, key) {
    return new Promise(function (r, f) {
      // 交给七牛上传
      helper.default.qiniuUploader.upload(filePath, function (res) {
        console.log('file url is: ' + res.fileUrl);
        r(res);
        uni.hideToast();
      }, function (error) {
        console.log(error);
      }, {
        region: 'SCN', // 华北区
        uptokenURL: cfg.qjUrl + 'cloud/qn/uptoken.tio_x',
        domain: cfg.qiniuDomain,
        shouldUseQiniuFileName: false,
        key: key },

      // null,// 可以使用上述参数，或者使用 null 作为参数占位符
      function (progress) {
        console.log('上传进度', progress.progress);
        console.log('已经上传的数据长度', progress.totalBytesSent);
        console.log('预期需要上传的数据总长度', progress.totalBytesExpectedToSend);
      },
      function () {
        // 取消上传
      },
      function () {
        // `before` 上传前执行的操作
      },
      function (err) {
        console.log("complete:", err);
        // `complete` 上传接受后执行的操作(无论成功还是失败都执行)
      });
    });

  }

  function qi_niu_voice(voicePath) {
    uni.showToast({
      title: '正在发送',
      icon: "none",
      duration: 90000 });

    return new Promise(function (r, f) {
      uni.request({
        url: cfg.qjUrl + 'cloud/qn/get/key.tio_x',
        data: {
          type: 'voice' },

        success: function success(res) {
          console.log("key", res[0]);
          var key = res.data[0];
          console.log("voicePath", voicePath);
          helper.default.qiniuUploader.upload(voicePath, function (res) {
            console.log('file url is: ' + res.fileUrl);
            r(res.fileUrl);

          }, function (error) {
            console.log(error);
          }, {
            region: 'SCN', // 华北区
            uptokenURL: cfg.qjUrl + 'cloud/qn/uptoken.tio_x',
            domain: cfg.qiniuDomain,
            shouldUseQiniuFileName: false,
            key: key },

          // null,// 可以使用上述参数，或者使用 null 作为参数占位符
          function (progress) {
            console.log('上传进度', progress.progress);
            console.log('已经上传的数据长度', progress.totalBytesSent);
            console.log('预期需要上传的数据总长度', progress.totalBytesExpectedToSend);
          },
          function () {
            // 取消上传
          },
          function () {
            // `before` 上传前执行的操作
          },
          function (err) {
            console.log("complete:", err);
            // `complete` 上传接受后执行的操作(无论成功还是失败都执行)
          });

        } });

    });
  }


  function qi_niu_image(count) {
    return new Promise(function (r, f) {
      uni.chooseImage({
        count: count,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'], //从相册选择
        success: function success(res) {
          var images = res;
          uni.showToast({
            title: '正在发送',
            icon: "none",
            duration: 90000 });

          uni.request({
            url: cfg.qjUrl + 'cloud/qn/get/key.tio_x',
            data: {
              type: 'image',
              counts: res.tempFilePaths.length },

            success: function () {var _success = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(res) {var key, images_url, i, filePath, url;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                        key = res.data;
                        console.log("key", key);
                        console.log("准备上传图片", images.tempFilePaths);

                        images_url = [];
                        i = 0;case 5:if (!(i < images.tempFilePaths.length)) {_context.next = 15;break;}
                        filePath = images.tempFilePaths[i];
                        console.log("图片信息", filePath);_context.next = 10;return (
                          qiniu_up(filePath, key[i]));case 10:url = _context.sent;
                        images_url.push(url);case 12:i++;_context.next = 5;break;case 15:

                        r(images_url);case 16:case "end":return _context.stop();}}}, _callee, this);}));function success(_x) {return _success.apply(this, arguments);}return success;}() });








        } });





    });
  }

  function qi_niu_video() {
    return new Promise(function (r, f) {
      uni.request({
        url: cfg.qjUrl + 'cloud/qn/get/key.tio_x',
        data: {
          type: 'video' },

        success: function success(res) {
          console.log(res);
          var key = res.data[0];
          uni.chooseVideo({
            count: 1,
            sourceType: ['camera', 'album'],
            maxDuration: 10,
            success: function success(res) {
              console.log("视频长度", res.duration);

              uni.showToast({
                title: '正在发送',
                icon: "none",
                duration: 90000 });

              var filePath = res.tempFilePath;
              // 交给七牛上传
              helper.default.qiniuUploader.upload(filePath, function (res) {
                console.log('file url is: ' + res.fileUrl);
                r(res.fileUrl);
              }, function (error) {
                console.log(error);
              }, {
                region: 'SCN', // 华北区
                uptokenURL: cfg.qjUrl + 'cloud/qn/uptoken.tio_x',
                domain: cfg.qiniuDomain,
                shouldUseQiniuFileName: false,
                key: key },

              // null,// 可以使用上述参数，或者使用 null 作为参数占位符
              function (progress) {
                console.log('上传进度', progress.progress);
                console.log('已经上传的数据长度', progress.totalBytesSent);
                console.log('预期需要上传的数据总长度', progress.totalBytesExpectedToSend);
              },
              function () {
                // 取消上传
              },
              function () {
                // `before` 上传前执行的操作
              },
              function (err) {
                console.log("complete:", err);
                // `complete` 上传接受后执行的操作(无论成功还是失败都执行)
              });


            } });

        } });

    });

  }

  function connection() {
    var url = all.globalData.url;
    uni.connectSocket({
      url: url,
      success: function success() {
        console.log("连接成功");
      } });

    socket_init();
  }

  function re_connection() {
    clearInterval(timer);
    all.globalData.reconnect = true;
    var url = all.globalData.url + "&tiows_reconnection=ture";
    all.globalData.url = url;
    console.log("reconnection:", all.globalData.url);
    uni.connectSocket({
      url: url,
      fail: function fail() {
        console.log("socket连接失败");
      } });

    socket_init();
  }

  function init_im() {
    return new Promise(function (r, f) {
      uni.request({
        url: cfg.qjUrl + 'login.tio_x',
        data: {
          loginname: all.globalData.openid },

        success: function success(ck) {
          console.log("login", ck);
          uni.request({
            data: {
              groupid: 'qj_im' },

            url: cfg.qjUrl + 'im/imserver.tio_x',
            success: function success(res2) {
              console.log("res2", res2);
            } });

          //根据手机型号获取cookie
          uni.getSystemInfo({
            success: function success(res) {
              console.log("手机型号", res.brand);
              if (res.brand == 'iPhone')
              r(ck.header["Set-Cookie"].split(";")[0]);else

              r(ck.header["set-cookie"].split(";")[0]);
            } });


        } });

    });
  }

  var timer = '';
  var uint8array;

  function socket_init() {
    console.log("init");
    var url = all.globalData.url;
    uni.onSocketOpen(function () {
      all.globalData.reconnect = false;
      console.log("WebSocket连接已打开！");
      var req = {
        uid: all.globalData.user_id };

      var commandstr = "00033" + JSON.stringify(req);
      console.log("str", commandstr);
      var uint8array_join = new encoding.TextEncoder().encode(commandstr);
      uni.sendSocketMessage({
        data: uint8array_join.buffer });

      var kf_commandstr = "00034" + JSON.stringify(req);
      console.log("str", kf_commandstr);
      var kf_uint8array_join = new encoding.TextEncoder().encode(kf_commandstr);
      uni.sendSocketMessage({
        data: kf_uint8array_join.buffer });

      console.log("准备发送");
      uint8array = new encoding.TextEncoder().encode("00001");
      timer = setInterval(function () {

        uni.sendSocketMessage({
          data: uint8array.buffer,
          success: function success() {
            console.log("send heart");
          },
          fail: function fail() {
            re_connection();
          } });

      }, 3000);
      console.log("发送心跳...");
    });
    uni.onSocketMessage(function (event) {
      var arrayBuffer = event.data;
      var uint8array = null;
      var firstbyte = new Uint8Array(arrayBuffer, 0, 2);
      var firstchar = new encoding.TextDecoder('utf-8').decode(firstbyte);
      var isZipped = false;
      var isZippedStr = '';
      if (firstchar.indexOf('x') != -1) {
        // 压缩过的
        isZipped = true;
        isZippedStr = '(zipped)';
        var zipedUint8array = new Uint8Array(arrayBuffer, 2);
        console.log("is zip");
        uint8array = pako.ungzip(zipedUint8array);
      } else {
        uint8array = new Uint8Array(arrayBuffer);
      }

      var data = new encoding.TextDecoder('utf-8').decode(uint8array);

      if (!data || data.length < 5) {
        console.error('data wrong' + isZippedStr + ', the data length must be >= ' + 5, data);
        return;
      }

      var commandstr = data.substr(0, 5);
      console.log("commandstr---------->" + commandstr);
      var type = all.globalData.Msg_type.SiteImCommandReverse(commandstr);
      var kf_type = all.globalData.kf_Msg_type.SiteImCommandReverse(commandstr);

      console.log("消息的类型:", type);

      var strbody = JSON.parse(data.substr(5)); //信息
      console.log("收到的消息", strbody);
      if (strbody.level == 1) all.globalData.level = 1; //掉线之后无法发送消息


      // 客服未读消息
      if (kf_type != null) {
        var new_msg;
        var time = strbody.time;

        var result;
        var minute = 1000 * 60;
        var hour = minute * 60;
        var day = hour * 24;
        var halfamonth = day * 15;
        var month = day * 30;
        var now = new Date();
        var curTime = new Date(time); //后端返回的是秒数
        var diffValue = now - curTime;

        var monthC = diffValue / month;
        var weekC = diffValue / (7 * day);
        var dayC = diffValue / day;
        var hourC = diffValue / hour;
        var minC = diffValue / minute;
        if (monthC >= 1) {
          if (monthC <= 12)
          result = "" + parseInt(monthC) + "月前";else
          {
            result = now.toLocaleString();
            console.log('年');
          }
        } else if (weekC >= 1) {
          result = "" + parseInt(weekC) + "周前";
        } else if (dayC >= 1) {
          result = "" + parseInt(dayC) + "天前";
        } else if (hourC >= 1) {
          result = "" + parseInt(hourC) + "小时前";
        } else if (minC >= 1) {
          result = "" + parseInt(minC) + "分钟前";
        } else {
          result = "（刚刚）";
        }

        var range_time = result;
        time = time / 1000;
        console.log("时间间隔", range_time);

        var date = new Date(time * 1000);

        //月  
        var M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
        //日  
        var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        //时 
        var h = date.getHours();
        //分  
        var m = date.getMinutes();
        var now_time = "".concat(M, "\u6708").concat(D, "\u65E5 ").concat(h, ":").concat(m);
        console.log("时间", now_time);
        //对语音的处理
        if (kf_type == 'voice') {
          var num = strbody.content.indexOf("http");
          var duration = strbody.content.substr(0, num);
          strbody.content = strbody.content.substr(num, strbody.content.length);
        }
        //是否有该联系人的聊天记录
        var res = all.globalData.kf_msg.some(function (item) {
          if (item.user_id == strbody.fromId) {
            return true;
          }
        });
        if (res) {
          all.globalData.kf_msg.some(function (item) {
            var type = kf_type;
            if (item.user_id == strbody.fromId) {
              console.log("新消息", item);
              item.user_content.unread++;
              item.user_content.time = time;
              item.user_content.range_time = range_time;
              console.log("未读消息", item.user_content.unread);
              //本地只保存最近20条消息，剩余通过请求获得
              while (item.user_content.contents.length > 19) {
                item.user_content.contents.shift();
              }
              item.user_content.contents.push({
                user: 'home',
                type: type,
                content: strbody.content,
                duration: duration,
                now_time: now_time });

            }
          });

          console.log("所有对话人", all.globalData.kf_msg);
        } else {
          console.log("nowtime".concat(now_time, "   \u65F6\u95F4\u6233").concat(time));
          if (strbody.fromUser) {
            kf_add(strbody.fromId, strbody.fromUser.ln, strbody.fromUser.n, strbody.fromUser.a, time, range_time, now_time,
            kf_type,
            strbody.content, duration);
          } else {
            kf_add(strbody.fromId, strbody.fromUser_offline.ln, strbody.fromUser_offline.n, strbody.fromUser_offline.a,
            time, range_time, now_time,
            kf_type, strbody.content, duration);
          }
        }

        var req = {
          cid: strbody.mid, //消息id
          toId: strbody.fromId //消息接收者的id
        };
        var commandStr1 = "00031" + JSON.stringify(req);
        var uint8array1 = new encoding.TextEncoder().encode(commandStr1);

        uni.sendSocketMessage({ //通知服务器消息已读
          data: uint8array1.buffer });

        //播放提示音
        auto();
        //手机震动
        uni.vibrateLong({
          success: function success() {
            console.log('震动');
          } });

        //显示消息列表上的红点

        uni.showTabBarRedDot({
          index: 2 });



        var local_id = all.globalData.user_id + "kf";
        try {
          uni.setStorageSync(local_id, all.globalData.kf_msg);
          console.log("数据存到本地");
        } catch (e) {
          // error
        }
      }


      //顾问未读消息
      if (type != null) {
        var _new_msg;
        var _time = strbody.time;

        var result;
        var minute = 1000 * 60;
        var hour = minute * 60;
        var day = hour * 24;
        var halfamonth = day * 15;
        var month = day * 30;
        var now = new Date();
        var curTime = new Date(_time); //后端返回的是秒数
        var diffValue = now - curTime;

        var monthC = diffValue / month;
        var weekC = diffValue / (7 * day);
        var dayC = diffValue / day;
        var hourC = diffValue / hour;
        var minC = diffValue / minute;
        if (monthC >= 1) {
          if (monthC <= 12)
          result = "" + parseInt(monthC) + "月前";else
          {
            result = now.toLocaleString();
            console.log('年');
          }
        } else if (weekC >= 1) {
          result = "" + parseInt(weekC) + "周前";
        } else if (dayC >= 1) {
          result = "" + parseInt(dayC) + "天前";
        } else if (hourC >= 1) {
          result = "" + parseInt(hourC) + "小时前";
        } else if (minC >= 1) {
          result = "" + parseInt(minC) + "分钟前";
        } else {
          result = "（刚刚）";
        }

        var _range_time = result;
        _time = _time / 1000;
        console.log("时间间隔", _range_time);

        var date = new Date(_time * 1000);

        //月  
        var M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
        //日  
        var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        //时 
        var h = date.getHours();
        //分  
        var m = date.getMinutes();
        var _now_time = "".concat(M, "\u6708").concat(D, "\u65E5 ").concat(h, ":").concat(m);
        console.log("时间", _now_time);
        //对语音的处理
        if (type == 'voice') {
          var _num = strbody.content.indexOf("http");
          var duration = strbody.content.substr(0, _num);
          strbody.content = strbody.content.substr(_num, strbody.content.length);
        }
        //是否有该联系人的聊天记录
        var _res = all.globalData.msg.some(function (item) {
          if (item.user_id == strbody.fromId) {
            return true;
          }
        });
        if (_res) {
          all.globalData.msg.some(function (item) {
            if (item.user_id == strbody.fromId) {
              console.log("新消息", item);
              item.user_content.unread++;
              item.user_content.time = _time;
              item.user_content.range_time = _range_time;
              console.log("未读消息", item.user_content.unread);
              //本地只保存最近20条消息，剩余通过请求获得
              while (item.user_content.contents.length > 19) {
                item.user_content.contents.shift();
              }
              item.user_content.contents.push({
                user: 'home',
                type: type,
                content: strbody.content,
                duration: duration,
                now_time: _now_time });

            }
          });

          console.log("所有对话人", all.globalData.msg);
        } else {
          if (strbody.fromUser) {
            add(strbody.fromId, strbody.fromUser.ln, strbody.fromUser.n, strbody.fromUser.a, _time, _range_time, _now_time,
            type,
            strbody.content, duration);
          } else {
            add(strbody.fromId, strbody.fromUser_offline.ln, strbody.fromUser_offline.n, strbody.fromUser_offline.a, _time,
            _range_time, _now_time,
            type, strbody.content, duration);
          }
        }

        var req = {
          cid: strbody.mid, //消息id
          toId: strbody.fromId //消息接收者的id
        };
        var commandStr1 = "00031" + JSON.stringify(req);
        var uint8array1 = new encoding.TextEncoder().encode(commandStr1);

        uni.sendSocketMessage({ //通知服务器消息已读
          data: uint8array1.buffer });

        //播放提示音
        auto();
        //手机震动
        uni.vibrateLong({
          success: function success() {
            console.log('震动');
          } });

        //显示消息列表上的红点

        uni.showTabBarRedDot({
          index: 0 });


        var _local_id = all.globalData.user_id + "a";
        try {
          uni.setStorageSync(_local_id, all.globalData.msg);
          console.log("数据存到本地");
        } catch (e) {
          // error
        }
      }
    });
    uni.onSocketClose(function (res) {
      re_connection();
    });
    uni.onSocketError(function (res) {
      console.log("socket linked error:", res);
      handlerError(res);
    });
  }

  //消息提醒
  function auto() {
    var bgAudioMannager = uni.getBackgroundAudioManager();
    bgAudioMannager.title = '语音';
    bgAudioMannager.src = 'https://qjqn.foxcodes.cn/a1557228738030-13.mp3';
  }

  //添加新的联系人
  function kf_add(id, openid, name, avatar, time, range_time, now_time, type, content, duration) {
    console.log("时间戳", time);
    console.log("nowtime", now_time);
    all.globalData.kf_msg.push({
      user_id: id,
      openid: openid,
      user_content: {
        name: name,
        avatar: avatar,
        unread: 1, //未读消息
        time: time, //时间戳
        range_time: range_time,
        contents: [{
          user: 'home',
          now_time: now_time,
          type: type,
          content: content,
          duration: duration }] } });



    console.log("添加新的对话人", all.globalData.kf_msg);
  }

  //添加新的联系人
  function add(id, openid, name, avatar, time, range_time, now_time, type, content, duration) {
    all.globalData.msg.push({
      user_id: id,
      openid: openid,
      user_content: {
        name: name,
        avatar: avatar,
        unread: 1, //未读消息
        time: time, //时间戳
        range_time: range_time,
        contents: [{
          user: 'home',
          now_time: now_time,
          type: type,
          content: content,
          duration: duration }] } });



    console.log("添加新的对话人", all.globalData.msg);
  }

  function re_send() {
    var uint8array = new encoding.TextEncoder().encode("00001");


    uni.sendSocketMessage({
      data: uint8array.buffer, //发送心跳
      success: function success() {
        console.log("send heart");
      },
      fail: function fail() {
        re_connection();
      } });

    console.log("发送心跳...");
  }

  function sendmsg(req, str) {
    console.log(req);
    console.log("str", str);
    var commandstr = str + JSON.stringify(req);
    console.log("添加的消息" + commandstr);
    var uint8array = new encoding.TextEncoder().encode(commandstr);
    uni.sendSocketMessage({
      data: uint8array.buffer,
      fail: function fail() {
        re_connection();
      } });

  }

})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 17)["default"]))

/***/ }),
/* 36 */
/*!*****************************************************************************************************************************!*\
  !*** F:/Ten/WeGame/Document download/WeChat Files/WXID_99Ake/FileStorage/File/2019-08/qj_consult/qj_consult/common/pako.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var require;var require; /* pako 1.0.6 nodeca/pako */(function (f) {if (true) {module.exports = f();} else { var g; }})(function () {var define, module, exports;return function e(t, n, r) {function s(o, u) {if (!n[o]) {if (!t[o]) {var a = typeof require == "function" && require;if (!u && a) return require(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;}var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {var n = t[o][1][e];return s(n ? n : e);}, l, l.exports, e, t, n, r);}return n[o].exports;}var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {s(r[o]);}return s;}({ 1: [function (require, module, exports) {
      'use strict';


      var zlib_deflate = require('./zlib/deflate');
      var utils = require('./utils/common');
      var strings = require('./utils/strings');
      var msg = require('./zlib/messages');
      var ZStream = require('./zlib/zstream');

      var toString = Object.prototype.toString;

      /* Public constants ==========================================================*/
      /* ===========================================================================*/

      var Z_NO_FLUSH = 0;
      var Z_FINISH = 4;

      var Z_OK = 0;
      var Z_STREAM_END = 1;
      var Z_SYNC_FLUSH = 2;

      var Z_DEFAULT_COMPRESSION = -1;

      var Z_DEFAULT_STRATEGY = 0;

      var Z_DEFLATED = 8;

      /* ===========================================================================*/


      /**
                                                                                        * class Deflate
                                                                                        *
                                                                                        * Generic JS-style wrapper for zlib calls. If you don't need
                                                                                        * streaming behaviour - use more simple functions: [[deflate]],
                                                                                        * [[deflateRaw]] and [[gzip]].
                                                                                        **/

      /* internal
                                                                                             * Deflate.chunks -> Array
                                                                                             *
                                                                                             * Chunks of output data, if [[Deflate#onData]] not overridden.
                                                                                             **/

      /**
                                                                                                  * Deflate.result -> Uint8Array|Array
                                                                                                  *
                                                                                                  * Compressed result, generated by default [[Deflate#onData]]
                                                                                                  * and [[Deflate#onEnd]] handlers. Filled after you push last chunk
                                                                                                  * (call [[Deflate#push]] with `Z_FINISH` / `true` param)  or if you
                                                                                                  * push a chunk with explicit flush (call [[Deflate#push]] with
                                                                                                  * `Z_SYNC_FLUSH` param).
                                                                                                  **/

      /**
                                                                                                       * Deflate.err -> Number
                                                                                                       *
                                                                                                       * Error code after deflate finished. 0 (Z_OK) on success.
                                                                                                       * You will not need it in real life, because deflate errors
                                                                                                       * are possible only on wrong options or bad `onData` / `onEnd`
                                                                                                       * custom handlers.
                                                                                                       **/

      /**
                                                                                                            * Deflate.msg -> String
                                                                                                            *
                                                                                                            * Error message, if [[Deflate.err]] != 0
                                                                                                            **/


      /**
                                                                                                                 * new Deflate(options)
                                                                                                                 * - options (Object): zlib deflate options.
                                                                                                                 *
                                                                                                                 * Creates new deflator instance with specified params. Throws exception
                                                                                                                 * on bad params. Supported options:
                                                                                                                 *
                                                                                                                 * - `level`
                                                                                                                 * - `windowBits`
                                                                                                                 * - `memLevel`
                                                                                                                 * - `strategy`
                                                                                                                 * - `dictionary`
                                                                                                                 *
                                                                                                                 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
                                                                                                                 * for more information on these.
                                                                                                                 *
                                                                                                                 * Additional options, for internal needs:
                                                                                                                 *
                                                                                                                 * - `chunkSize` - size of generated data chunks (16K by default)
                                                                                                                 * - `raw` (Boolean) - do raw deflate
                                                                                                                 * - `gzip` (Boolean) - create gzip wrapper
                                                                                                                 * - `to` (String) - if equal to 'string', then result will be "binary string"
                                                                                                                 *    (each char code [0..255])
                                                                                                                 * - `header` (Object) - custom header for gzip
                                                                                                                 *   - `text` (Boolean) - true if compressed data believed to be text
                                                                                                                 *   - `time` (Number) - modification time, unix timestamp
                                                                                                                 *   - `os` (Number) - operation system code
                                                                                                                 *   - `extra` (Array) - array of bytes with extra data (max 65536)
                                                                                                                 *   - `name` (String) - file name (binary string)
                                                                                                                 *   - `comment` (String) - comment (binary string)
                                                                                                                 *   - `hcrc` (Boolean) - true if header crc should be added
                                                                                                                 *
                                                                                                                 * ##### Example:
                                                                                                                 *
                                                                                                                 * ```javascript
                                                                                                                 * var pako = require('pako')
                                                                                                                 *   , chunk1 = Uint8Array([1,2,3,4,5,6,7,8,9])
                                                                                                                 *   , chunk2 = Uint8Array([10,11,12,13,14,15,16,17,18,19]);
                                                                                                                 *
                                                                                                                 * var deflate = new pako.Deflate({ level: 3});
                                                                                                                 *
                                                                                                                 * deflate.push(chunk1, false);
                                                                                                                 * deflate.push(chunk2, true);  // true -> last chunk
                                                                                                                 *
                                                                                                                 * if (deflate.err) { throw new Error(deflate.err); }
                                                                                                                 *
                                                                                                                 * console.log(deflate.result);
                                                                                                                 * ```
                                                                                                                 **/
      function Deflate(options) {
        if (!(this instanceof Deflate)) return new Deflate(options);

        this.options = utils.assign({
          level: Z_DEFAULT_COMPRESSION,
          method: Z_DEFLATED,
          chunkSize: 16384,
          windowBits: 15,
          memLevel: 8,
          strategy: Z_DEFAULT_STRATEGY,
          to: '' },
        options || {});

        var opt = this.options;

        if (opt.raw && opt.windowBits > 0) {
          opt.windowBits = -opt.windowBits;
        } else

        if (opt.gzip && opt.windowBits > 0 && opt.windowBits < 16) {
          opt.windowBits += 16;
        }

        this.err = 0; // error code, if happens (0 = Z_OK)
        this.msg = ''; // error message
        this.ended = false; // used to avoid multiple onEnd() calls
        this.chunks = []; // chunks of compressed data

        this.strm = new ZStream();
        this.strm.avail_out = 0;

        var status = zlib_deflate.deflateInit2(
        this.strm,
        opt.level,
        opt.method,
        opt.windowBits,
        opt.memLevel,
        opt.strategy);


        if (status !== Z_OK) {
          throw new Error(msg[status]);
        }

        if (opt.header) {
          zlib_deflate.deflateSetHeader(this.strm, opt.header);
        }

        if (opt.dictionary) {
          var dict;
          // Convert data if needed
          if (typeof opt.dictionary === 'string') {
            // If we need to compress text, change encoding to utf8.
            dict = strings.string2buf(opt.dictionary);
          } else if (toString.call(opt.dictionary) === '[object ArrayBuffer]') {
            dict = new Uint8Array(opt.dictionary);
          } else {
            dict = opt.dictionary;
          }

          status = zlib_deflate.deflateSetDictionary(this.strm, dict);

          if (status !== Z_OK) {
            throw new Error(msg[status]);
          }

          this._dict_set = true;
        }
      }

      /**
         * Deflate#push(data[, mode]) -> Boolean
         * - data (Uint8Array|Array|ArrayBuffer|String): input data. Strings will be
         *   converterd to utf8 byte sequence.
         * - mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
         *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` means Z_FINISH.
         *
         * Sends input data to deflate pipe, generating [[Deflate#onData]] calls with
         * new compressed chunks. Returns `true` on success. The last data block must have
         * mode Z_FINISH (or `true`). That will flush internal pending buffers and call
         * [[Deflate#onEnd]]. For interim explicit flushes (without ending the stream) you
         * can use mode Z_SYNC_FLUSH, keeping the compression context.
         *
         * On fail call [[Deflate#onEnd]] with error code and return false.
         *
         * We strongly recommend to use `Uint8Array` on input for best speed (output
         * array format is detected automatically). Also, don't skip last param and always
         * use the same type in your code (boolean or number). That will improve JS speed.
         *
         * For regular `Array`-s make sure all elements are [0..255].
         *
         * ##### Example
         *
         * ```javascript
         * push(chunk, false); // push one of data chunks
         * ...
         * push(chunk, true);  // push last chunk
         * ```
         **/
      Deflate.prototype.push = function (data, mode) {
        var strm = this.strm;
        var chunkSize = this.options.chunkSize;
        var status, _mode;

        if (this.ended) {return false;}

        _mode = mode === ~~mode ? mode : mode === true ? Z_FINISH : Z_NO_FLUSH;

        // Convert data if needed
        if (typeof data === 'string') {
          // If we need to compress text, change encoding to utf8.
          strm.input = strings.string2buf(data);
        } else if (toString.call(data) === '[object ArrayBuffer]') {
          strm.input = new Uint8Array(data);
        } else {
          strm.input = data;
        }

        strm.next_in = 0;
        strm.avail_in = strm.input.length;

        do {
          if (strm.avail_out === 0) {
            strm.output = new utils.Buf8(chunkSize);
            strm.next_out = 0;
            strm.avail_out = chunkSize;
          }
          status = zlib_deflate.deflate(strm, _mode); /* no bad return value */

          if (status !== Z_STREAM_END && status !== Z_OK) {
            this.onEnd(status);
            this.ended = true;
            return false;
          }
          if (strm.avail_out === 0 || strm.avail_in === 0 && (_mode === Z_FINISH || _mode === Z_SYNC_FLUSH)) {
            if (this.options.to === 'string') {
              this.onData(strings.buf2binstring(utils.shrinkBuf(strm.output, strm.next_out)));
            } else {
              this.onData(utils.shrinkBuf(strm.output, strm.next_out));
            }
          }
        } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== Z_STREAM_END);

        // Finalize on the last chunk.
        if (_mode === Z_FINISH) {
          status = zlib_deflate.deflateEnd(this.strm);
          this.onEnd(status);
          this.ended = true;
          return status === Z_OK;
        }

        // callback interim results if Z_SYNC_FLUSH.
        if (_mode === Z_SYNC_FLUSH) {
          this.onEnd(Z_OK);
          strm.avail_out = 0;
          return true;
        }

        return true;
      };


      /**
          * Deflate#onData(chunk) -> Void
          * - chunk (Uint8Array|Array|String): output data. Type of array depends
          *   on js engine support. When string output requested, each chunk
          *   will be string.
          *
          * By default, stores data blocks in `chunks[]` property and glue
          * those in `onEnd`. Override this handler, if you need another behaviour.
          **/
      Deflate.prototype.onData = function (chunk) {
        this.chunks.push(chunk);
      };


      /**
          * Deflate#onEnd(status) -> Void
          * - status (Number): deflate status. 0 (Z_OK) on success,
          *   other if not.
          *
          * Called once after you tell deflate that the input stream is
          * complete (Z_FINISH) or should be flushed (Z_SYNC_FLUSH)
          * or if an error happened. By default - join collected chunks,
          * free memory and fill `results` / `err` properties.
          **/
      Deflate.prototype.onEnd = function (status) {
        // On success - join
        if (status === Z_OK) {
          if (this.options.to === 'string') {
            this.result = this.chunks.join('');
          } else {
            this.result = utils.flattenChunks(this.chunks);
          }
        }
        this.chunks = [];
        this.err = status;
        this.msg = this.strm.msg;
      };


      /**
          * deflate(data[, options]) -> Uint8Array|Array|String
          * - data (Uint8Array|Array|String): input data to compress.
          * - options (Object): zlib deflate options.
          *
          * Compress `data` with deflate algorithm and `options`.
          *
          * Supported options are:
          *
          * - level
          * - windowBits
          * - memLevel
          * - strategy
          * - dictionary
          *
          * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
          * for more information on these.
          *
          * Sugar (options):
          *
          * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
          *   negative windowBits implicitly.
          * - `to` (String) - if equal to 'string', then result will be "binary string"
          *    (each char code [0..255])
          *
          * ##### Example:
          *
          * ```javascript
          * var pako = require('pako')
          *   , data = Uint8Array([1,2,3,4,5,6,7,8,9]);
          *
          * console.log(pako.deflate(data));
          * ```
          **/
      function deflate(input, options) {
        var deflator = new Deflate(options);

        deflator.push(input, true);

        // That will never happens, if you don't cheat with options :)
        if (deflator.err) {throw deflator.msg || msg[deflator.err];}

        return deflator.result;
      }


      /**
         * deflateRaw(data[, options]) -> Uint8Array|Array|String
         * - data (Uint8Array|Array|String): input data to compress.
         * - options (Object): zlib deflate options.
         *
         * The same as [[deflate]], but creates raw data, without wrapper
         * (header and adler32 crc).
         **/
      function deflateRaw(input, options) {
        options = options || {};
        options.raw = true;
        return deflate(input, options);
      }


      /**
         * gzip(data[, options]) -> Uint8Array|Array|String
         * - data (Uint8Array|Array|String): input data to compress.
         * - options (Object): zlib deflate options.
         *
         * The same as [[deflate]], but create gzip wrapper instead of
         * deflate one.
         **/
      function gzip(input, options) {
        options = options || {};
        options.gzip = true;
        return deflate(input, options);
      }


      exports.Deflate = Deflate;
      exports.deflate = deflate;
      exports.deflateRaw = deflateRaw;
      exports.gzip = gzip;

    }, { "./utils/common": 3, "./utils/strings": 4, "./zlib/deflate": 8, "./zlib/messages": 13, "./zlib/zstream": 15 }], 2: [function (require, module, exports) {
      'use strict';


      var zlib_inflate = require('./zlib/inflate');
      var utils = require('./utils/common');
      var strings = require('./utils/strings');
      var c = require('./zlib/constants');
      var msg = require('./zlib/messages');
      var ZStream = require('./zlib/zstream');
      var GZheader = require('./zlib/gzheader');

      var toString = Object.prototype.toString;

      /**
                                                 * class Inflate
                                                 *
                                                 * Generic JS-style wrapper for zlib calls. If you don't need
                                                 * streaming behaviour - use more simple functions: [[inflate]]
                                                 * and [[inflateRaw]].
                                                 **/

      /* internal
                                                      * inflate.chunks -> Array
                                                      *
                                                      * Chunks of output data, if [[Inflate#onData]] not overridden.
                                                      **/

      /**
                                                           * Inflate.result -> Uint8Array|Array|String
                                                           *
                                                           * Uncompressed result, generated by default [[Inflate#onData]]
                                                           * and [[Inflate#onEnd]] handlers. Filled after you push last chunk
                                                           * (call [[Inflate#push]] with `Z_FINISH` / `true` param) or if you
                                                           * push a chunk with explicit flush (call [[Inflate#push]] with
                                                           * `Z_SYNC_FLUSH` param).
                                                           **/

      /**
                                                                * Inflate.err -> Number
                                                                *
                                                                * Error code after inflate finished. 0 (Z_OK) on success.
                                                                * Should be checked if broken data possible.
                                                                **/

      /**
                                                                     * Inflate.msg -> String
                                                                     *
                                                                     * Error message, if [[Inflate.err]] != 0
                                                                     **/


      /**
                                                                          * new Inflate(options)
                                                                          * - options (Object): zlib inflate options.
                                                                          *
                                                                          * Creates new inflator instance with specified params. Throws exception
                                                                          * on bad params. Supported options:
                                                                          *
                                                                          * - `windowBits`
                                                                          * - `dictionary`
                                                                          *
                                                                          * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
                                                                          * for more information on these.
                                                                          *
                                                                          * Additional options, for internal needs:
                                                                          *
                                                                          * - `chunkSize` - size of generated data chunks (16K by default)
                                                                          * - `raw` (Boolean) - do raw inflate
                                                                          * - `to` (String) - if equal to 'string', then result will be converterd
                                                                          *   from utf8 to utf16 (javascript) string. When string output requested,
                                                                          *   chunk length can differ from `chunkSize`, depending on content.
                                                                          *
                                                                          * By default, when no options set, autodetect deflate/gzip data format via
                                                                          * wrapper header.
                                                                          *
                                                                          * ##### Example:
                                                                          *
                                                                          * ```javascript
                                                                          * var pako = require('pako')
                                                                          *   , chunk1 = Uint8Array([1,2,3,4,5,6,7,8,9])
                                                                          *   , chunk2 = Uint8Array([10,11,12,13,14,15,16,17,18,19]);
                                                                          *
                                                                          * var inflate = new pako.Inflate({ level: 3});
                                                                          *
                                                                          * inflate.push(chunk1, false);
                                                                          * inflate.push(chunk2, true);  // true -> last chunk
                                                                          *
                                                                          * if (inflate.err) { throw new Error(inflate.err); }
                                                                          *
                                                                          * console.log(inflate.result);
                                                                          * ```
                                                                          **/
      function Inflate(options) {
        if (!(this instanceof Inflate)) return new Inflate(options);

        this.options = utils.assign({
          chunkSize: 16384,
          windowBits: 0,
          to: '' },
        options || {});

        var opt = this.options;

        // Force window size for `raw` data, if not set directly,
        // because we have no header for autodetect.
        if (opt.raw && opt.windowBits >= 0 && opt.windowBits < 16) {
          opt.windowBits = -opt.windowBits;
          if (opt.windowBits === 0) {opt.windowBits = -15;}
        }

        // If `windowBits` not defined (and mode not raw) - set autodetect flag for gzip/deflate
        if (opt.windowBits >= 0 && opt.windowBits < 16 &&
        !(options && options.windowBits)) {
          opt.windowBits += 32;
        }

        // Gzip header has no info about windows size, we can do autodetect only
        // for deflate. So, if window size not set, force it to max when gzip possible
        if (opt.windowBits > 15 && opt.windowBits < 48) {
          // bit 3 (16) -> gzipped data
          // bit 4 (32) -> autodetect gzip/deflate
          if ((opt.windowBits & 15) === 0) {
            opt.windowBits |= 15;
          }
        }

        this.err = 0; // error code, if happens (0 = Z_OK)
        this.msg = ''; // error message
        this.ended = false; // used to avoid multiple onEnd() calls
        this.chunks = []; // chunks of compressed data

        this.strm = new ZStream();
        this.strm.avail_out = 0;

        var status = zlib_inflate.inflateInit2(
        this.strm,
        opt.windowBits);


        if (status !== c.Z_OK) {
          throw new Error(msg[status]);
        }

        this.header = new GZheader();

        zlib_inflate.inflateGetHeader(this.strm, this.header);
      }

      /**
         * Inflate#push(data[, mode]) -> Boolean
         * - data (Uint8Array|Array|ArrayBuffer|String): input data
         * - mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
         *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` means Z_FINISH.
         *
         * Sends input data to inflate pipe, generating [[Inflate#onData]] calls with
         * new output chunks. Returns `true` on success. The last data block must have
         * mode Z_FINISH (or `true`). That will flush internal pending buffers and call
         * [[Inflate#onEnd]]. For interim explicit flushes (without ending the stream) you
         * can use mode Z_SYNC_FLUSH, keeping the decompression context.
         *
         * On fail call [[Inflate#onEnd]] with error code and return false.
         *
         * We strongly recommend to use `Uint8Array` on input for best speed (output
         * format is detected automatically). Also, don't skip last param and always
         * use the same type in your code (boolean or number). That will improve JS speed.
         *
         * For regular `Array`-s make sure all elements are [0..255].
         *
         * ##### Example
         *
         * ```javascript
         * push(chunk, false); // push one of data chunks
         * ...
         * push(chunk, true);  // push last chunk
         * ```
         **/
      Inflate.prototype.push = function (data, mode) {
        var strm = this.strm;
        var chunkSize = this.options.chunkSize;
        var dictionary = this.options.dictionary;
        var status, _mode;
        var next_out_utf8, tail, utf8str;
        var dict;

        // Flag to properly process Z_BUF_ERROR on testing inflate call
        // when we check that all output data was flushed.
        var allowBufError = false;

        if (this.ended) {return false;}
        _mode = mode === ~~mode ? mode : mode === true ? c.Z_FINISH : c.Z_NO_FLUSH;

        // Convert data if needed
        if (typeof data === 'string') {
          // Only binary strings can be decompressed on practice
          strm.input = strings.binstring2buf(data);
        } else if (toString.call(data) === '[object ArrayBuffer]') {
          strm.input = new Uint8Array(data);
        } else {
          strm.input = data;
        }

        strm.next_in = 0;
        strm.avail_in = strm.input.length;

        do {
          if (strm.avail_out === 0) {
            strm.output = new utils.Buf8(chunkSize);
            strm.next_out = 0;
            strm.avail_out = chunkSize;
          }

          status = zlib_inflate.inflate(strm, c.Z_NO_FLUSH); /* no bad return value */

          if (status === c.Z_NEED_DICT && dictionary) {
            // Convert data if needed
            if (typeof dictionary === 'string') {
              dict = strings.string2buf(dictionary);
            } else if (toString.call(dictionary) === '[object ArrayBuffer]') {
              dict = new Uint8Array(dictionary);
            } else {
              dict = dictionary;
            }

            status = zlib_inflate.inflateSetDictionary(this.strm, dict);

          }

          if (status === c.Z_BUF_ERROR && allowBufError === true) {
            status = c.Z_OK;
            allowBufError = false;
          }

          if (status !== c.Z_STREAM_END && status !== c.Z_OK) {
            this.onEnd(status);
            this.ended = true;
            return false;
          }

          if (strm.next_out) {
            if (strm.avail_out === 0 || status === c.Z_STREAM_END || strm.avail_in === 0 && (_mode === c.Z_FINISH || _mode === c.Z_SYNC_FLUSH)) {

              if (this.options.to === 'string') {

                next_out_utf8 = strings.utf8border(strm.output, strm.next_out);

                tail = strm.next_out - next_out_utf8;
                utf8str = strings.buf2string(strm.output, next_out_utf8);

                // move tail
                strm.next_out = tail;
                strm.avail_out = chunkSize - tail;
                if (tail) {utils.arraySet(strm.output, strm.output, next_out_utf8, tail, 0);}

                this.onData(utf8str);

              } else {
                this.onData(utils.shrinkBuf(strm.output, strm.next_out));
              }
            }
          }

          // When no more input data, we should check that internal inflate buffers
          // are flushed. The only way to do it when avail_out = 0 - run one more
          // inflate pass. But if output data not exists, inflate return Z_BUF_ERROR.
          // Here we set flag to process this error properly.
          //
          // NOTE. Deflate does not return error in this case and does not needs such
          // logic.
          if (strm.avail_in === 0 && strm.avail_out === 0) {
            allowBufError = true;
          }

        } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== c.Z_STREAM_END);

        if (status === c.Z_STREAM_END) {
          _mode = c.Z_FINISH;
        }

        // Finalize on the last chunk.
        if (_mode === c.Z_FINISH) {
          status = zlib_inflate.inflateEnd(this.strm);
          this.onEnd(status);
          this.ended = true;
          return status === c.Z_OK;
        }

        // callback interim results if Z_SYNC_FLUSH.
        if (_mode === c.Z_SYNC_FLUSH) {
          this.onEnd(c.Z_OK);
          strm.avail_out = 0;
          return true;
        }

        return true;
      };


      /**
          * Inflate#onData(chunk) -> Void
          * - chunk (Uint8Array|Array|String): output data. Type of array depends
          *   on js engine support. When string output requested, each chunk
          *   will be string.
          *
          * By default, stores data blocks in `chunks[]` property and glue
          * those in `onEnd`. Override this handler, if you need another behaviour.
          **/
      Inflate.prototype.onData = function (chunk) {
        this.chunks.push(chunk);
      };


      /**
          * Inflate#onEnd(status) -> Void
          * - status (Number): inflate status. 0 (Z_OK) on success,
          *   other if not.
          *
          * Called either after you tell inflate that the input stream is
          * complete (Z_FINISH) or should be flushed (Z_SYNC_FLUSH)
          * or if an error happened. By default - join collected chunks,
          * free memory and fill `results` / `err` properties.
          **/
      Inflate.prototype.onEnd = function (status) {
        // On success - join
        if (status === c.Z_OK) {
          if (this.options.to === 'string') {
            // Glue & convert here, until we teach pako to send
            // utf8 aligned strings to onData
            this.result = this.chunks.join('');
          } else {
            this.result = utils.flattenChunks(this.chunks);
          }
        }
        this.chunks = [];
        this.err = status;
        this.msg = this.strm.msg;
      };


      /**
          * inflate(data[, options]) -> Uint8Array|Array|String
          * - data (Uint8Array|Array|String): input data to decompress.
          * - options (Object): zlib inflate options.
          *
          * Decompress `data` with inflate/ungzip and `options`. Autodetect
          * format via wrapper header by default. That's why we don't provide
          * separate `ungzip` method.
          *
          * Supported options are:
          *
          * - windowBits
          *
          * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
          * for more information.
          *
          * Sugar (options):
          *
          * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
          *   negative windowBits implicitly.
          * - `to` (String) - if equal to 'string', then result will be converterd
          *   from utf8 to utf16 (javascript) string. When string output requested,
          *   chunk length can differ from `chunkSize`, depending on content.
          *
          *
          * ##### Example:
          *
          * ```javascript
          * var pako = require('pako')
          *   , input = pako.deflate([1,2,3,4,5,6,7,8,9])
          *   , output;
          *
          * try {
          *   output = pako.inflate(input);
          * } catch (err)
          *   console.log(err);
          * }
          * ```
          **/
      function inflate(input, options) {
        var inflator = new Inflate(options);

        inflator.push(input, true);

        // That will never happens, if you don't cheat with options :)
        if (inflator.err) {throw inflator.msg || msg[inflator.err];}

        return inflator.result;
      }


      /**
         * inflateRaw(data[, options]) -> Uint8Array|Array|String
         * - data (Uint8Array|Array|String): input data to decompress.
         * - options (Object): zlib inflate options.
         *
         * The same as [[inflate]], but creates raw data, without wrapper
         * (header and adler32 crc).
         **/
      function inflateRaw(input, options) {
        options = options || {};
        options.raw = true;
        return inflate(input, options);
      }


      /**
         * ungzip(data[, options]) -> Uint8Array|Array|String
         * - data (Uint8Array|Array|String): input data to decompress.
         * - options (Object): zlib inflate options.
         *
         * Just shortcut to [[inflate]], because it autodetects format
         * by header.content. Done for convenience.
         **/


      exports.Inflate = Inflate;
      exports.inflate = inflate;
      exports.inflateRaw = inflateRaw;
      exports.ungzip = inflate;

    }, { "./utils/common": 3, "./utils/strings": 4, "./zlib/constants": 6, "./zlib/gzheader": 9, "./zlib/inflate": 11, "./zlib/messages": 13, "./zlib/zstream": 15 }], 3: [function (require, module, exports) {
      'use strict';


      var TYPED_OK = typeof Uint8Array !== 'undefined' &&
      typeof Uint16Array !== 'undefined' &&
      typeof Int32Array !== 'undefined';

      function _has(obj, key) {
        return Object.prototype.hasOwnProperty.call(obj, key);
      }

      exports.assign = function (obj /*from1, from2, from3, ...*/) {
        var sources = Array.prototype.slice.call(arguments, 1);
        while (sources.length) {
          var source = sources.shift();
          if (!source) {continue;}

          if (typeof source !== 'object') {
            throw new TypeError(source + 'must be non-object');
          }

          for (var p in source) {
            if (_has(source, p)) {
              obj[p] = source[p];
            }
          }
        }

        return obj;
      };


      // reduce buffer size, avoiding mem copy
      exports.shrinkBuf = function (buf, size) {
        if (buf.length === size) {return buf;}
        if (buf.subarray) {return buf.subarray(0, size);}
        buf.length = size;
        return buf;
      };


      var fnTyped = {
        arraySet: function arraySet(dest, src, src_offs, len, dest_offs) {
          if (src.subarray && dest.subarray) {
            dest.set(src.subarray(src_offs, src_offs + len), dest_offs);
            return;
          }
          // Fallback to ordinary array
          for (var i = 0; i < len; i++) {
            dest[dest_offs + i] = src[src_offs + i];
          }
        },
        // Join array of chunks to single array.
        flattenChunks: function flattenChunks(chunks) {
          var i, l, len, pos, chunk, result;

          // calculate data length
          len = 0;
          for (i = 0, l = chunks.length; i < l; i++) {
            len += chunks[i].length;
          }

          // join chunks
          result = new Uint8Array(len);
          pos = 0;
          for (i = 0, l = chunks.length; i < l; i++) {
            chunk = chunks[i];
            result.set(chunk, pos);
            pos += chunk.length;
          }

          return result;
        } };


      var fnUntyped = {
        arraySet: function arraySet(dest, src, src_offs, len, dest_offs) {
          for (var i = 0; i < len; i++) {
            dest[dest_offs + i] = src[src_offs + i];
          }
        },
        // Join array of chunks to single array.
        flattenChunks: function flattenChunks(chunks) {
          return [].concat.apply([], chunks);
        } };



      // Enable/Disable typed arrays use, for testing
      //
      exports.setTyped = function (on) {
        if (on) {
          exports.Buf8 = Uint8Array;
          exports.Buf16 = Uint16Array;
          exports.Buf32 = Int32Array;
          exports.assign(exports, fnTyped);
        } else {
          exports.Buf8 = Array;
          exports.Buf16 = Array;
          exports.Buf32 = Array;
          exports.assign(exports, fnUntyped);
        }
      };

      exports.setTyped(TYPED_OK);

    }, {}], 4: [function (require, module, exports) {
      // String encode/decode helpers
      'use strict';


      var utils = require('./common');


      // Quick check if we can use fast array to bin string conversion
      //
      // - apply(Array) can fail on Android 2.2
      // - apply(Uint8Array) can fail on iOS 5.1 Safari
      //
      var STR_APPLY_OK = true;
      var STR_APPLY_UIA_OK = true;

      try {String.fromCharCode.apply(null, [0]);} catch (__) {STR_APPLY_OK = false;}
      try {String.fromCharCode.apply(null, new Uint8Array(1));} catch (__) {STR_APPLY_UIA_OK = false;}


      // Table with utf8 lengths (calculated by first byte of sequence)
      // Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
      // because max possible codepoint is 0x10ffff
      var _utf8len = new utils.Buf8(256);
      for (var q = 0; q < 256; q++) {
        _utf8len[q] = q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1;
      }
      _utf8len[254] = _utf8len[254] = 1; // Invalid sequence start


      // convert string to array (typed, when possible)
      exports.string2buf = function (str) {
        var buf,c,c2,m_pos,i,str_len = str.length,buf_len = 0;

        // count binary size
        for (m_pos = 0; m_pos < str_len; m_pos++) {
          c = str.charCodeAt(m_pos);
          if ((c & 0xfc00) === 0xd800 && m_pos + 1 < str_len) {
            c2 = str.charCodeAt(m_pos + 1);
            if ((c2 & 0xfc00) === 0xdc00) {
              c = 0x10000 + (c - 0xd800 << 10) + (c2 - 0xdc00);
              m_pos++;
            }
          }
          buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
        }

        // allocate buffer
        buf = new utils.Buf8(buf_len);

        // convert
        for (i = 0, m_pos = 0; i < buf_len; m_pos++) {
          c = str.charCodeAt(m_pos);
          if ((c & 0xfc00) === 0xd800 && m_pos + 1 < str_len) {
            c2 = str.charCodeAt(m_pos + 1);
            if ((c2 & 0xfc00) === 0xdc00) {
              c = 0x10000 + (c - 0xd800 << 10) + (c2 - 0xdc00);
              m_pos++;
            }
          }
          if (c < 0x80) {
            /* one byte */
            buf[i++] = c;
          } else if (c < 0x800) {
            /* two bytes */
            buf[i++] = 0xC0 | c >>> 6;
            buf[i++] = 0x80 | c & 0x3f;
          } else if (c < 0x10000) {
            /* three bytes */
            buf[i++] = 0xE0 | c >>> 12;
            buf[i++] = 0x80 | c >>> 6 & 0x3f;
            buf[i++] = 0x80 | c & 0x3f;
          } else {
            /* four bytes */
            buf[i++] = 0xf0 | c >>> 18;
            buf[i++] = 0x80 | c >>> 12 & 0x3f;
            buf[i++] = 0x80 | c >>> 6 & 0x3f;
            buf[i++] = 0x80 | c & 0x3f;
          }
        }

        return buf;
      };

      // Helper (used in 2 places)
      function buf2binstring(buf, len) {
        // use fallback for big arrays to avoid stack overflow
        if (len < 65537) {
          if (buf.subarray && STR_APPLY_UIA_OK || !buf.subarray && STR_APPLY_OK) {
            return String.fromCharCode.apply(null, utils.shrinkBuf(buf, len));
          }
        }

        var result = '';
        for (var i = 0; i < len; i++) {
          result += String.fromCharCode(buf[i]);
        }
        return result;
      }


      // Convert byte array to binary string
      exports.buf2binstring = function (buf) {
        return buf2binstring(buf, buf.length);
      };


      // Convert binary string (typed, when possible)
      exports.binstring2buf = function (str) {
        var buf = new utils.Buf8(str.length);
        for (var i = 0, len = buf.length; i < len; i++) {
          buf[i] = str.charCodeAt(i);
        }
        return buf;
      };


      // convert array to string
      exports.buf2string = function (buf, max) {
        var i, out, c, c_len;
        var len = max || buf.length;

        // Reserve max possible length (2 words per char)
        // NB: by unknown reasons, Array is significantly faster for
        //     String.fromCharCode.apply than Uint16Array.
        var utf16buf = new Array(len * 2);

        for (out = 0, i = 0; i < len;) {
          c = buf[i++];
          // quick process ascii
          if (c < 0x80) {utf16buf[out++] = c;continue;}

          c_len = _utf8len[c];
          // skip 5 & 6 byte codes
          if (c_len > 4) {utf16buf[out++] = 0xfffd;i += c_len - 1;continue;}

          // apply mask on first byte
          c &= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07;
          // join the rest
          while (c_len > 1 && i < len) {
            c = c << 6 | buf[i++] & 0x3f;
            c_len--;
          }

          // terminated by end of string?
          if (c_len > 1) {utf16buf[out++] = 0xfffd;continue;}

          if (c < 0x10000) {
            utf16buf[out++] = c;
          } else {
            c -= 0x10000;
            utf16buf[out++] = 0xd800 | c >> 10 & 0x3ff;
            utf16buf[out++] = 0xdc00 | c & 0x3ff;
          }
        }

        return buf2binstring(utf16buf, out);
      };


      // Calculate max possible position in utf8 buffer,
      // that will not break sequence. If that's not possible
      // - (very small limits) return max size as is.
      //
      // buf[] - utf8 bytes array
      // max   - length limit (mandatory);
      exports.utf8border = function (buf, max) {
        var pos;

        max = max || buf.length;
        if (max > buf.length) {max = buf.length;}

        // go back from last position, until start of sequence found
        pos = max - 1;
        while (pos >= 0 && (buf[pos] & 0xC0) === 0x80) {pos--;}

        // Very small and broken sequence,
        // return max, because we should return something anyway.
        if (pos < 0) {return max;}

        // If we came to start of buffer - that means buffer is too small,
        // return max too.
        if (pos === 0) {return max;}

        return pos + _utf8len[buf[pos]] > max ? pos : max;
      };

    }, { "./common": 3 }], 5: [function (require, module, exports) {
      'use strict';

      // Note: adler32 takes 12% for level 0 and 2% for level 6.
      // It isn't worth it to make additional optimizations as in original.
      // Small size is preferable.

      // (C) 1995-2013 Jean-loup Gailly and Mark Adler
      // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
      //
      // This software is provided 'as-is', without any express or implied
      // warranty. In no event will the authors be held liable for any damages
      // arising from the use of this software.
      //
      // Permission is granted to anyone to use this software for any purpose,
      // including commercial applications, and to alter it and redistribute it
      // freely, subject to the following restrictions:
      //
      // 1. The origin of this software must not be misrepresented; you must not
      //   claim that you wrote the original software. If you use this software
      //   in a product, an acknowledgment in the product documentation would be
      //   appreciated but is not required.
      // 2. Altered source versions must be plainly marked as such, and must not be
      //   misrepresented as being the original software.
      // 3. This notice may not be removed or altered from any source distribution.

      function adler32(adler, buf, len, pos) {
        var s1 = adler & 0xffff | 0,
        s2 = adler >>> 16 & 0xffff | 0,
        n = 0;

        while (len !== 0) {
          // Set limit ~ twice less than 5552, to keep
          // s2 in 31-bits, because we force signed ints.
          // in other case %= will fail.
          n = len > 2000 ? 2000 : len;
          len -= n;

          do {
            s1 = s1 + buf[pos++] | 0;
            s2 = s2 + s1 | 0;
          } while (--n);

          s1 %= 65521;
          s2 %= 65521;
        }

        return s1 | s2 << 16 | 0;
      }


      module.exports = adler32;

    }, {}], 6: [function (require, module, exports) {
      'use strict';

      // (C) 1995-2013 Jean-loup Gailly and Mark Adler
      // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
      //
      // This software is provided 'as-is', without any express or implied
      // warranty. In no event will the authors be held liable for any damages
      // arising from the use of this software.
      //
      // Permission is granted to anyone to use this software for any purpose,
      // including commercial applications, and to alter it and redistribute it
      // freely, subject to the following restrictions:
      //
      // 1. The origin of this software must not be misrepresented; you must not
      //   claim that you wrote the original software. If you use this software
      //   in a product, an acknowledgment in the product documentation would be
      //   appreciated but is not required.
      // 2. Altered source versions must be plainly marked as such, and must not be
      //   misrepresented as being the original software.
      // 3. This notice may not be removed or altered from any source distribution.

      module.exports = {

        /* Allowed flush values; see deflate() and inflate() below for details */
        Z_NO_FLUSH: 0,
        Z_PARTIAL_FLUSH: 1,
        Z_SYNC_FLUSH: 2,
        Z_FULL_FLUSH: 3,
        Z_FINISH: 4,
        Z_BLOCK: 5,
        Z_TREES: 6,

        /* Return codes for the compression/decompression functions. Negative values
                    * are errors, positive values are used for special but normal events.
                    */
        Z_OK: 0,
        Z_STREAM_END: 1,
        Z_NEED_DICT: 2,
        Z_ERRNO: -1,
        Z_STREAM_ERROR: -2,
        Z_DATA_ERROR: -3,
        //Z_MEM_ERROR:     -4,
        Z_BUF_ERROR: -5,
        //Z_VERSION_ERROR: -6,

        /* compression levels */
        Z_NO_COMPRESSION: 0,
        Z_BEST_SPEED: 1,
        Z_BEST_COMPRESSION: 9,
        Z_DEFAULT_COMPRESSION: -1,


        Z_FILTERED: 1,
        Z_HUFFMAN_ONLY: 2,
        Z_RLE: 3,
        Z_FIXED: 4,
        Z_DEFAULT_STRATEGY: 0,

        /* Possible values of the data_type field (though see inflate()) */
        Z_BINARY: 0,
        Z_TEXT: 1,
        //Z_ASCII:                1, // = Z_TEXT (deprecated)
        Z_UNKNOWN: 2,

        /* The deflate compression method */
        Z_DEFLATED: 8
        //Z_NULL:                 null // Use -1 or null inline, depending on var type
      };

    }, {}], 7: [function (require, module, exports) {
      'use strict';

      // Note: we can't get significant speed boost here.
      // So write code to minimize size - no pregenerated tables
      // and array tools dependencies.

      // (C) 1995-2013 Jean-loup Gailly and Mark Adler
      // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
      //
      // This software is provided 'as-is', without any express or implied
      // warranty. In no event will the authors be held liable for any damages
      // arising from the use of this software.
      //
      // Permission is granted to anyone to use this software for any purpose,
      // including commercial applications, and to alter it and redistribute it
      // freely, subject to the following restrictions:
      //
      // 1. The origin of this software must not be misrepresented; you must not
      //   claim that you wrote the original software. If you use this software
      //   in a product, an acknowledgment in the product documentation would be
      //   appreciated but is not required.
      // 2. Altered source versions must be plainly marked as such, and must not be
      //   misrepresented as being the original software.
      // 3. This notice may not be removed or altered from any source distribution.

      // Use ordinary array, since untyped makes no boost here
      function makeTable() {
        var c,table = [];

        for (var n = 0; n < 256; n++) {
          c = n;
          for (var k = 0; k < 8; k++) {
            c = c & 1 ? 0xEDB88320 ^ c >>> 1 : c >>> 1;
          }
          table[n] = c;
        }

        return table;
      }

      // Create table on load. Just 255 signed longs. Not a problem.
      var crcTable = makeTable();


      function crc32(crc, buf, len, pos) {
        var t = crcTable,
        end = pos + len;

        crc ^= -1;

        for (var i = pos; i < end; i++) {
          crc = crc >>> 8 ^ t[(crc ^ buf[i]) & 0xFF];
        }

        return crc ^ -1; // >>> 0;
      }


      module.exports = crc32;

    }, {}], 8: [function (require, module, exports) {
      'use strict';

      // (C) 1995-2013 Jean-loup Gailly and Mark Adler
      // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
      //
      // This software is provided 'as-is', without any express or implied
      // warranty. In no event will the authors be held liable for any damages
      // arising from the use of this software.
      //
      // Permission is granted to anyone to use this software for any purpose,
      // including commercial applications, and to alter it and redistribute it
      // freely, subject to the following restrictions:
      //
      // 1. The origin of this software must not be misrepresented; you must not
      //   claim that you wrote the original software. If you use this software
      //   in a product, an acknowledgment in the product documentation would be
      //   appreciated but is not required.
      // 2. Altered source versions must be plainly marked as such, and must not be
      //   misrepresented as being the original software.
      // 3. This notice may not be removed or altered from any source distribution.

      var utils = require('../utils/common');
      var trees = require('./trees');
      var adler32 = require('./adler32');
      var crc32 = require('./crc32');
      var msg = require('./messages');

      /* Public constants ==========================================================*/
      /* ===========================================================================*/


      /* Allowed flush values; see deflate() and inflate() below for details */
      var Z_NO_FLUSH = 0;
      var Z_PARTIAL_FLUSH = 1;
      //var Z_SYNC_FLUSH    = 2;
      var Z_FULL_FLUSH = 3;
      var Z_FINISH = 4;
      var Z_BLOCK = 5;
      //var Z_TREES         = 6;


      /* Return codes for the compression/decompression functions. Negative values
       * are errors, positive values are used for special but normal events.
       */
      var Z_OK = 0;
      var Z_STREAM_END = 1;
      //var Z_NEED_DICT     = 2;
      //var Z_ERRNO         = -1;
      var Z_STREAM_ERROR = -2;
      var Z_DATA_ERROR = -3;
      //var Z_MEM_ERROR     = -4;
      var Z_BUF_ERROR = -5;
      //var Z_VERSION_ERROR = -6;


      /* compression levels */
      //var Z_NO_COMPRESSION      = 0;
      //var Z_BEST_SPEED          = 1;
      //var Z_BEST_COMPRESSION    = 9;
      var Z_DEFAULT_COMPRESSION = -1;


      var Z_FILTERED = 1;
      var Z_HUFFMAN_ONLY = 2;
      var Z_RLE = 3;
      var Z_FIXED = 4;
      var Z_DEFAULT_STRATEGY = 0;

      /* Possible values of the data_type field (though see inflate()) */
      //var Z_BINARY              = 0;
      //var Z_TEXT                = 1;
      //var Z_ASCII               = 1; // = Z_TEXT
      var Z_UNKNOWN = 2;


      /* The deflate compression method */
      var Z_DEFLATED = 8;

      /*============================================================================*/


      var MAX_MEM_LEVEL = 9;
      /* Maximum value for memLevel in deflateInit2 */
      var MAX_WBITS = 15;
      /* 32K LZ77 window */
      var DEF_MEM_LEVEL = 8;


      var LENGTH_CODES = 29;
      /* number of length codes, not counting the special END_BLOCK code */
      var LITERALS = 256;
      /* number of literal bytes 0..255 */
      var L_CODES = LITERALS + 1 + LENGTH_CODES;
      /* number of Literal or Length codes, including the END_BLOCK code */
      var D_CODES = 30;
      /* number of distance codes */
      var BL_CODES = 19;
      /* number of codes used to transfer the bit lengths */
      var HEAP_SIZE = 2 * L_CODES + 1;
      /* maximum heap size */
      var MAX_BITS = 15;
      /* All codes must not exceed MAX_BITS bits */

      var MIN_MATCH = 3;
      var MAX_MATCH = 258;
      var MIN_LOOKAHEAD = MAX_MATCH + MIN_MATCH + 1;

      var PRESET_DICT = 0x20;

      var INIT_STATE = 42;
      var EXTRA_STATE = 69;
      var NAME_STATE = 73;
      var COMMENT_STATE = 91;
      var HCRC_STATE = 103;
      var BUSY_STATE = 113;
      var FINISH_STATE = 666;

      var BS_NEED_MORE = 1; /* block not completed, need more input or more output */
      var BS_BLOCK_DONE = 2; /* block flush performed */
      var BS_FINISH_STARTED = 3; /* finish started, need only more output at next deflate */
      var BS_FINISH_DONE = 4; /* finish done, accept no more input or output */

      var OS_CODE = 0x03; // Unix :) . Don't detect, use this default.

      function err(strm, errorCode) {
        strm.msg = msg[errorCode];
        return errorCode;
      }

      function rank(f) {
        return (f << 1) - (f > 4 ? 9 : 0);
      }

      function zero(buf) {var len = buf.length;while (--len >= 0) {buf[len] = 0;}}


      /* =========================================================================
                                                                                    * Flush as much pending output as possible. All deflate() output goes
                                                                                    * through this function so some applications may wish to modify it
                                                                                    * to avoid allocating a large strm->output buffer and copying into it.
                                                                                    * (See also read_buf()).
                                                                                    */
      function flush_pending(strm) {
        var s = strm.state;

        //_tr_flush_bits(s);
        var len = s.pending;
        if (len > strm.avail_out) {
          len = strm.avail_out;
        }
        if (len === 0) {return;}

        utils.arraySet(strm.output, s.pending_buf, s.pending_out, len, strm.next_out);
        strm.next_out += len;
        s.pending_out += len;
        strm.total_out += len;
        strm.avail_out -= len;
        s.pending -= len;
        if (s.pending === 0) {
          s.pending_out = 0;
        }
      }


      function flush_block_only(s, last) {
        trees._tr_flush_block(s, s.block_start >= 0 ? s.block_start : -1, s.strstart - s.block_start, last);
        s.block_start = s.strstart;
        flush_pending(s.strm);
      }


      function put_byte(s, b) {
        s.pending_buf[s.pending++] = b;
      }


      /* =========================================================================
         * Put a short in the pending buffer. The 16-bit value is put in MSB order.
         * IN assertion: the stream state is correct and there is enough room in
         * pending_buf.
         */
      function putShortMSB(s, b) {
        //  put_byte(s, (Byte)(b >> 8));
        //  put_byte(s, (Byte)(b & 0xff));
        s.pending_buf[s.pending++] = b >>> 8 & 0xff;
        s.pending_buf[s.pending++] = b & 0xff;
      }


      /* ===========================================================================
         * Read a new buffer from the current input stream, update the adler32
         * and total number of bytes read.  All deflate() input goes through
         * this function so some applications may wish to modify it to avoid
         * allocating a large strm->input buffer and copying from it.
         * (See also flush_pending()).
         */
      function read_buf(strm, buf, start, size) {
        var len = strm.avail_in;

        if (len > size) {len = size;}
        if (len === 0) {return 0;}

        strm.avail_in -= len;

        // zmemcpy(buf, strm->next_in, len);
        utils.arraySet(buf, strm.input, strm.next_in, len, start);
        if (strm.state.wrap === 1) {
          strm.adler = adler32(strm.adler, buf, len, start);
        } else

        if (strm.state.wrap === 2) {
          strm.adler = crc32(strm.adler, buf, len, start);
        }

        strm.next_in += len;
        strm.total_in += len;

        return len;
      }


      /* ===========================================================================
         * Set match_start to the longest match starting at the given string and
         * return its length. Matches shorter or equal to prev_length are discarded,
         * in which case the result is equal to prev_length and match_start is
         * garbage.
         * IN assertions: cur_match is the head of the hash chain for the current
         *   string (strstart) and its distance is <= MAX_DIST, and prev_length >= 1
         * OUT assertion: the match length is not greater than s->lookahead.
         */
      function longest_match(s, cur_match) {
        var chain_length = s.max_chain_length; /* max hash chain length */
        var scan = s.strstart; /* current string */
        var match; /* matched string */
        var len; /* length of current match */
        var best_len = s.prev_length; /* best match length so far */
        var nice_match = s.nice_match; /* stop if match long enough */
        var limit = s.strstart > s.w_size - MIN_LOOKAHEAD ?
        s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0 /*NIL*/;

        var _win = s.window; // shortcut

        var wmask = s.w_mask;
        var prev = s.prev;

        /* Stop when cur_match becomes <= limit. To simplify the code,
                            * we prevent matches with the string of window index 0.
                            */

        var strend = s.strstart + MAX_MATCH;
        var scan_end1 = _win[scan + best_len - 1];
        var scan_end = _win[scan + best_len];

        /* The code is optimized for HASH_BITS >= 8 and MAX_MATCH-2 multiple of 16.
                                               * It is easy to get rid of this optimization if necessary.
                                               */
        // Assert(s->hash_bits >= 8 && MAX_MATCH == 258, "Code too clever");

        /* Do not waste too much time if we already have a good match: */
        if (s.prev_length >= s.good_match) {
          chain_length >>= 2;
        }
        /* Do not look for matches beyond the end of the input. This is necessary
           * to make deflate deterministic.
           */
        if (nice_match > s.lookahead) {nice_match = s.lookahead;}

        // Assert((ulg)s->strstart <= s->window_size-MIN_LOOKAHEAD, "need lookahead");

        do {
          // Assert(cur_match < s->strstart, "no future");
          match = cur_match;

          /* Skip to next match if the match length cannot increase
                              * or if the match length is less than 2.  Note that the checks below
                              * for insufficient lookahead only occur occasionally for performance
                              * reasons.  Therefore uninitialized memory will be accessed, and
                              * conditional jumps will be made that depend on those values.
                              * However the length of the match is limited to the lookahead, so
                              * the output of deflate is not affected by the uninitialized values.
                              */

          if (_win[match + best_len] !== scan_end ||
          _win[match + best_len - 1] !== scan_end1 ||
          _win[match] !== _win[scan] ||
          _win[++match] !== _win[scan + 1]) {
            continue;
          }

          /* The check at best_len-1 can be removed because it will be made
             * again later. (This heuristic is not always a win.)
             * It is not necessary to compare scan[2] and match[2] since they
             * are always equal when the other bytes match, given that
             * the hash keys are equal and that HASH_BITS >= 8.
             */
          scan += 2;
          match++;
          // Assert(*scan == *match, "match[2]?");

          /* We check for insufficient lookahead only every 8th comparison;
           * the 256th check will be made at strstart+258.
           */
          do {
            /*jshint noempty:false*/
          } while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
          _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
          _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
          _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
          scan < strend);

          // Assert(scan <= s->window+(unsigned)(s->window_size-1), "wild scan");

          len = MAX_MATCH - (strend - scan);
          scan = strend - MAX_MATCH;

          if (len > best_len) {
            s.match_start = cur_match;
            best_len = len;
            if (len >= nice_match) {
              break;
            }
            scan_end1 = _win[scan + best_len - 1];
            scan_end = _win[scan + best_len];
          }
        } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);

        if (best_len <= s.lookahead) {
          return best_len;
        }
        return s.lookahead;
      }


      /* ===========================================================================
         * Fill the window when the lookahead becomes insufficient.
         * Updates strstart and lookahead.
         *
         * IN assertion: lookahead < MIN_LOOKAHEAD
         * OUT assertions: strstart <= window_size-MIN_LOOKAHEAD
         *    At least one byte has been read, or avail_in == 0; reads are
         *    performed for at least two bytes (required for the zip translate_eol
         *    option -- not supported here).
         */
      function fill_window(s) {
        var _w_size = s.w_size;
        var p, n, m, more, str;

        //Assert(s->lookahead < MIN_LOOKAHEAD, "already enough lookahead");

        do {
          more = s.window_size - s.lookahead - s.strstart;

          // JS ints have 32 bit, block below not needed
          /* Deal with !@#$% 64K limit: */
          //if (sizeof(int) <= 2) {
          //    if (more == 0 && s->strstart == 0 && s->lookahead == 0) {
          //        more = wsize;
          //
          //  } else if (more == (unsigned)(-1)) {
          //        /* Very unlikely, but possible on 16 bit machine if
          //         * strstart == 0 && lookahead == 1 (input done a byte at time)
          //         */
          //        more--;
          //    }
          //}


          /* If the window is almost full and there is insufficient lookahead,
           * move the upper half to the lower one to make room in the upper half.
           */
          if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {

            utils.arraySet(s.window, s.window, _w_size, _w_size, 0);
            s.match_start -= _w_size;
            s.strstart -= _w_size;
            /* we now have strstart >= MAX_DIST */
            s.block_start -= _w_size;

            /* Slide the hash table (could be avoided with 32 bit values
                                       at the expense of memory usage). We slide even when level == 0
                                       to keep the hash table consistent if we switch back to level > 0
                                       later. (Using level 0 permanently is not an optimal usage of
                                       zlib, so we don't care about this pathological case.)
                                       */

            n = s.hash_size;
            p = n;
            do {
              m = s.head[--p];
              s.head[p] = m >= _w_size ? m - _w_size : 0;
            } while (--n);

            n = _w_size;
            p = n;
            do {
              m = s.prev[--p];
              s.prev[p] = m >= _w_size ? m - _w_size : 0;
              /* If n is not on any hash chain, prev[n] is garbage but
                                                           * its value will never be used.
                                                           */
            } while (--n);

            more += _w_size;
          }
          if (s.strm.avail_in === 0) {
            break;
          }

          /* If there was no sliding:
             *    strstart <= WSIZE+MAX_DIST-1 && lookahead <= MIN_LOOKAHEAD - 1 &&
             *    more == window_size - lookahead - strstart
             * => more >= window_size - (MIN_LOOKAHEAD-1 + WSIZE + MAX_DIST-1)
             * => more >= window_size - 2*WSIZE + 2
             * In the BIG_MEM or MMAP case (not yet supported),
             *   window_size == input_size + MIN_LOOKAHEAD  &&
             *   strstart + s->lookahead <= input_size => more >= MIN_LOOKAHEAD.
             * Otherwise, window_size == 2*WSIZE so more >= 2.
             * If there was sliding, more >= WSIZE. So in all cases, more >= 2.
             */
          //Assert(more >= 2, "more < 2");
          n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
          s.lookahead += n;

          /* Initialize the hash value now that we have some input: */
          if (s.lookahead + s.insert >= MIN_MATCH) {
            str = s.strstart - s.insert;
            s.ins_h = s.window[str];

            /* UPDATE_HASH(s, s->ins_h, s->window[str + 1]); */
            s.ins_h = (s.ins_h << s.hash_shift ^ s.window[str + 1]) & s.hash_mask;
            //#if MIN_MATCH != 3
            //        Call update_hash() MIN_MATCH-3 more times
            //#endif
            while (s.insert) {
              /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
              s.ins_h = (s.ins_h << s.hash_shift ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;

              s.prev[str & s.w_mask] = s.head[s.ins_h];
              s.head[s.ins_h] = str;
              str++;
              s.insert--;
              if (s.lookahead + s.insert < MIN_MATCH) {
                break;
              }
            }
          }
          /* If the whole input has less than MIN_MATCH bytes, ins_h is garbage,
             * but this is not important since only literal bytes will be emitted.
             */

        } while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);

        /* If the WIN_INIT bytes after the end of the current data have never been
                                                                         * written, then zero those bytes in order to avoid memory check reports of
                                                                         * the use of uninitialized (or uninitialised as Julian writes) bytes by
                                                                         * the longest match routines.  Update the high water mark for the next
                                                                         * time through here.  WIN_INIT is set to MAX_MATCH since the longest match
                                                                         * routines allow scanning to strstart + MAX_MATCH, ignoring lookahead.
                                                                         */
        //  if (s.high_water < s.window_size) {
        //    var curr = s.strstart + s.lookahead;
        //    var init = 0;
        //
        //    if (s.high_water < curr) {
        //      /* Previous high water mark below current data -- zero WIN_INIT
        //       * bytes or up to end of window, whichever is less.
        //       */
        //      init = s.window_size - curr;
        //      if (init > WIN_INIT)
        //        init = WIN_INIT;
        //      zmemzero(s->window + curr, (unsigned)init);
        //      s->high_water = curr + init;
        //    }
        //    else if (s->high_water < (ulg)curr + WIN_INIT) {
        //      /* High water mark at or above current data, but below current data
        //       * plus WIN_INIT -- zero out to current data plus WIN_INIT, or up
        //       * to end of window, whichever is less.
        //       */
        //      init = (ulg)curr + WIN_INIT - s->high_water;
        //      if (init > s->window_size - s->high_water)
        //        init = s->window_size - s->high_water;
        //      zmemzero(s->window + s->high_water, (unsigned)init);
        //      s->high_water += init;
        //    }
        //  }
        //
        //  Assert((ulg)s->strstart <= s->window_size - MIN_LOOKAHEAD,
        //    "not enough room for search");
      }

      /* ===========================================================================
         * Copy without compression as much as possible from the input stream, return
         * the current block state.
         * This function does not insert new strings in the dictionary since
         * uncompressible data is probably not useful. This function is used
         * only for the level=0 compression option.
         * NOTE: this function should be optimized to avoid extra copying from
         * window to pending_buf.
         */
      function deflate_stored(s, flush) {
        /* Stored blocks are limited to 0xffff bytes, pending_buf is limited
                                          * to pending_buf_size, and each stored block has a 5 byte header:
                                          */
        var max_block_size = 0xffff;

        if (max_block_size > s.pending_buf_size - 5) {
          max_block_size = s.pending_buf_size - 5;
        }

        /* Copy as much as possible from input to output: */
        for (;;) {
          /* Fill the window as much as possible: */
          if (s.lookahead <= 1) {

            //Assert(s->strstart < s->w_size+MAX_DIST(s) ||
            //  s->block_start >= (long)s->w_size, "slide too late");
            //      if (!(s.strstart < s.w_size + (s.w_size - MIN_LOOKAHEAD) ||
            //        s.block_start >= s.w_size)) {
            //        throw  new Error("slide too late");
            //      }

            fill_window(s);
            if (s.lookahead === 0 && flush === Z_NO_FLUSH) {
              return BS_NEED_MORE;
            }

            if (s.lookahead === 0) {
              break;
            }
            /* flush the current block */
          }
          //Assert(s->block_start >= 0L, "block gone");
          //    if (s.block_start < 0) throw new Error("block gone");

          s.strstart += s.lookahead;
          s.lookahead = 0;

          /* Emit a stored block if pending_buf will be full: */
          var max_start = s.block_start + max_block_size;

          if (s.strstart === 0 || s.strstart >= max_start) {
            /* strstart == 0 is possible when wraparound on 16-bit machine */
            s.lookahead = s.strstart - max_start;
            s.strstart = max_start;
            /*** FLUSH_BLOCK(s, 0); ***/
            flush_block_only(s, false);
            if (s.strm.avail_out === 0) {
              return BS_NEED_MORE;
            }
            /***/


          }
          /* Flush if we may have to slide, otherwise block_start may become
             * negative and the data will be gone:
             */
          if (s.strstart - s.block_start >= s.w_size - MIN_LOOKAHEAD) {
            /*** FLUSH_BLOCK(s, 0); ***/
            flush_block_only(s, false);
            if (s.strm.avail_out === 0) {
              return BS_NEED_MORE;
            }
            /***/
          }
        }

        s.insert = 0;

        if (flush === Z_FINISH) {
          /*** FLUSH_BLOCK(s, 1); ***/
          flush_block_only(s, true);
          if (s.strm.avail_out === 0) {
            return BS_FINISH_STARTED;
          }
          /***/
          return BS_FINISH_DONE;
        }

        if (s.strstart > s.block_start) {
          /*** FLUSH_BLOCK(s, 0); ***/
          flush_block_only(s, false);
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
          /***/
        }

        return BS_NEED_MORE;
      }

      /* ===========================================================================
         * Compress as much as possible from the input stream, return the current
         * block state.
         * This function does not perform lazy evaluation of matches and inserts
         * new strings in the dictionary only for unmatched strings or for short
         * matches. It is used only for the fast compression options.
         */
      function deflate_fast(s, flush) {
        var hash_head; /* head of the hash chain */
        var bflush; /* set if current block must be flushed */

        for (;;) {
          /* Make sure that we always have enough lookahead, except
                   * at the end of the input file. We need MAX_MATCH bytes
                   * for the next match, plus MIN_MATCH bytes to insert the
                   * string following the next match.
                   */
          if (s.lookahead < MIN_LOOKAHEAD) {
            fill_window(s);
            if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
              return BS_NEED_MORE;
            }
            if (s.lookahead === 0) {
              break; /* flush the current block */
            }
          }

          /* Insert the string window[strstart .. strstart+2] in the
             * dictionary, and set hash_head to the head of the hash chain:
             */
          hash_head = 0 /*NIL*/;
          if (s.lookahead >= MIN_MATCH) {
            /*** INSERT_STRING(s, s.strstart, hash_head); ***/
            s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
            hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
            s.head[s.ins_h] = s.strstart;
            /***/
          }

          /* Find the longest match, discarding those <= prev_length.
             * At this point we have always match_length < MIN_MATCH
             */
          if (hash_head !== 0 /*NIL*/ && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD) {
            /* To simplify the code, we prevent matches with the string
                                                                                               * of window index 0 (in particular we have to avoid a match
                                                                                               * of the string with itself at the start of the input file).
                                                                                               */
            s.match_length = longest_match(s, hash_head);
            /* longest_match() sets match_start */
          }
          if (s.match_length >= MIN_MATCH) {
            // check_match(s, s.strstart, s.match_start, s.match_length); // for debug only

            /*** _tr_tally_dist(s, s.strstart - s.match_start,
                           s.match_length - MIN_MATCH, bflush); ***/
            bflush = trees._tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH);

            s.lookahead -= s.match_length;

            /* Insert new strings in the hash table only if the match length
                                            * is not too large. This saves time but degrades compression.
                                            */
            if (s.match_length <= s.max_lazy_match /*max_insert_length*/ && s.lookahead >= MIN_MATCH) {
              s.match_length--; /* string at strstart already in table */
              do {
                s.strstart++;
                /*** INSERT_STRING(s, s.strstart, hash_head); ***/
                s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
                hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
                s.head[s.ins_h] = s.strstart;
                /***/
                /* strstart never exceeds WSIZE-MAX_MATCH, so there are
                       * always MIN_MATCH bytes ahead.
                       */
              } while (--s.match_length !== 0);
              s.strstart++;
            } else
            {
              s.strstart += s.match_length;
              s.match_length = 0;
              s.ins_h = s.window[s.strstart];
              /* UPDATE_HASH(s, s.ins_h, s.window[s.strstart+1]); */
              s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + 1]) & s.hash_mask;

              //#if MIN_MATCH != 3
              //                Call UPDATE_HASH() MIN_MATCH-3 more times
              //#endif
              /* If lookahead < MIN_MATCH, ins_h is garbage, but it does not
               * matter since it will be recomputed at next deflate call.
               */
            }
          } else {
            /* No match, output a literal byte */
            //Tracevv((stderr,"%c", s.window[s.strstart]));
            /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
            bflush = trees._tr_tally(s, 0, s.window[s.strstart]);

            s.lookahead--;
            s.strstart++;
          }
          if (bflush) {
            /*** FLUSH_BLOCK(s, 0); ***/
            flush_block_only(s, false);
            if (s.strm.avail_out === 0) {
              return BS_NEED_MORE;
            }
            /***/
          }
        }
        s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
        if (flush === Z_FINISH) {
          /*** FLUSH_BLOCK(s, 1); ***/
          flush_block_only(s, true);
          if (s.strm.avail_out === 0) {
            return BS_FINISH_STARTED;
          }
          /***/
          return BS_FINISH_DONE;
        }
        if (s.last_lit) {
          /*** FLUSH_BLOCK(s, 0); ***/
          flush_block_only(s, false);
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
          /***/
        }
        return BS_BLOCK_DONE;
      }

      /* ===========================================================================
         * Same as above, but achieves better compression. We use a lazy
         * evaluation for matches: a match is finally adopted only if there is
         * no better match at the next window position.
         */
      function deflate_slow(s, flush) {
        var hash_head; /* head of hash chain */
        var bflush; /* set if current block must be flushed */

        var max_insert;

        /* Process the input block. */
        for (;;) {
          /* Make sure that we always have enough lookahead, except
                   * at the end of the input file. We need MAX_MATCH bytes
                   * for the next match, plus MIN_MATCH bytes to insert the
                   * string following the next match.
                   */
          if (s.lookahead < MIN_LOOKAHEAD) {
            fill_window(s);
            if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
              return BS_NEED_MORE;
            }
            if (s.lookahead === 0) {break;} /* flush the current block */
          }

          /* Insert the string window[strstart .. strstart+2] in the
             * dictionary, and set hash_head to the head of the hash chain:
             */
          hash_head = 0 /*NIL*/;
          if (s.lookahead >= MIN_MATCH) {
            /*** INSERT_STRING(s, s.strstart, hash_head); ***/
            s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
            hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
            s.head[s.ins_h] = s.strstart;
            /***/
          }

          /* Find the longest match, discarding those <= prev_length.
             */
          s.prev_length = s.match_length;
          s.prev_match = s.match_start;
          s.match_length = MIN_MATCH - 1;

          if (hash_head !== 0 /*NIL*/ && s.prev_length < s.max_lazy_match &&
          s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD /*MAX_DIST(s)*/) {
              /* To simplify the code, we prevent matches with the string
                                                                                * of window index 0 (in particular we have to avoid a match
                                                                                * of the string with itself at the start of the input file).
                                                                                */
              s.match_length = longest_match(s, hash_head);
              /* longest_match() sets match_start */

              if (s.match_length <= 5 && (
              s.strategy === Z_FILTERED || s.match_length === MIN_MATCH && s.strstart - s.match_start > 4096 /*TOO_FAR*/)) {

                /* If prev_match is also MIN_MATCH, match_start is garbage
                                                                                                                             * but we will ignore the current match anyway.
                                                                                                                             */
                s.match_length = MIN_MATCH - 1;
              }
            }
          /* If there was a match at the previous step and the current
               * match is not better, output the previous match:
               */
          if (s.prev_length >= MIN_MATCH && s.match_length <= s.prev_length) {
            max_insert = s.strstart + s.lookahead - MIN_MATCH;
            /* Do not insert strings in hash table beyond this. */

            //check_match(s, s.strstart-1, s.prev_match, s.prev_length);

            /***_tr_tally_dist(s, s.strstart - 1 - s.prev_match,
                           s.prev_length - MIN_MATCH, bflush);***/
            bflush = trees._tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH);
            /* Insert in hash table all strings up to the end of the match.
                                                                                                    * strstart-1 and strstart are already inserted. If there is not
                                                                                                    * enough lookahead, the last two strings are not inserted in
                                                                                                    * the hash table.
                                                                                                    */
            s.lookahead -= s.prev_length - 1;
            s.prev_length -= 2;
            do {
              if (++s.strstart <= max_insert) {
                /*** INSERT_STRING(s, s.strstart, hash_head); ***/
                s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
                hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
                s.head[s.ins_h] = s.strstart;
                /***/
              }
            } while (--s.prev_length !== 0);
            s.match_available = 0;
            s.match_length = MIN_MATCH - 1;
            s.strstart++;

            if (bflush) {
              /*** FLUSH_BLOCK(s, 0); ***/
              flush_block_only(s, false);
              if (s.strm.avail_out === 0) {
                return BS_NEED_MORE;
              }
              /***/
            }

          } else if (s.match_available) {
            /* If there was no match at the previous position, output a
                                          * single literal. If there was a match but the current match
                                          * is longer, truncate the previous match to a single literal.
                                          */
            //Tracevv((stderr,"%c", s->window[s->strstart-1]));
            /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
            bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);

            if (bflush) {
              /*** FLUSH_BLOCK_ONLY(s, 0) ***/
              flush_block_only(s, false);
              /***/
            }
            s.strstart++;
            s.lookahead--;
            if (s.strm.avail_out === 0) {
              return BS_NEED_MORE;
            }
          } else {
            /* There is no previous match to compare with, wait for
                   * the next step to decide.
                   */
            s.match_available = 1;
            s.strstart++;
            s.lookahead--;
          }
        }
        //Assert (flush != Z_NO_FLUSH, "no flush?");
        if (s.match_available) {
          //Tracevv((stderr,"%c", s->window[s->strstart-1]));
          /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
          bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);

          s.match_available = 0;
        }
        s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
        if (flush === Z_FINISH) {
          /*** FLUSH_BLOCK(s, 1); ***/
          flush_block_only(s, true);
          if (s.strm.avail_out === 0) {
            return BS_FINISH_STARTED;
          }
          /***/
          return BS_FINISH_DONE;
        }
        if (s.last_lit) {
          /*** FLUSH_BLOCK(s, 0); ***/
          flush_block_only(s, false);
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
          /***/
        }

        return BS_BLOCK_DONE;
      }


      /* ===========================================================================
         * For Z_RLE, simply look for runs of bytes, generate matches only of distance
         * one.  Do not maintain a hash table.  (It will be regenerated if this run of
         * deflate switches away from Z_RLE.)
         */
      function deflate_rle(s, flush) {
        var bflush; /* set if current block must be flushed */
        var prev; /* byte at distance one to match */
        var scan, strend; /* scan goes up to strend for length of run */

        var _win = s.window;

        for (;;) {
          /* Make sure that we always have enough lookahead, except
                   * at the end of the input file. We need MAX_MATCH bytes
                   * for the longest run, plus one for the unrolled loop.
                   */
          if (s.lookahead <= MAX_MATCH) {
            fill_window(s);
            if (s.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH) {
              return BS_NEED_MORE;
            }
            if (s.lookahead === 0) {break;} /* flush the current block */
          }

          /* See how many times the previous byte repeats */
          s.match_length = 0;
          if (s.lookahead >= MIN_MATCH && s.strstart > 0) {
            scan = s.strstart - 1;
            prev = _win[scan];
            if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
              strend = s.strstart + MAX_MATCH;
              do {
                /*jshint noempty:false*/
              } while (prev === _win[++scan] && prev === _win[++scan] &&
              prev === _win[++scan] && prev === _win[++scan] &&
              prev === _win[++scan] && prev === _win[++scan] &&
              prev === _win[++scan] && prev === _win[++scan] &&
              scan < strend);
              s.match_length = MAX_MATCH - (strend - scan);
              if (s.match_length > s.lookahead) {
                s.match_length = s.lookahead;
              }
            }
            //Assert(scan <= s->window+(uInt)(s->window_size-1), "wild scan");
          }

          /* Emit match if have run of MIN_MATCH or longer, else emit literal */
          if (s.match_length >= MIN_MATCH) {
            //check_match(s, s.strstart, s.strstart - 1, s.match_length);

            /*** _tr_tally_dist(s, 1, s.match_length - MIN_MATCH, bflush); ***/
            bflush = trees._tr_tally(s, 1, s.match_length - MIN_MATCH);

            s.lookahead -= s.match_length;
            s.strstart += s.match_length;
            s.match_length = 0;
          } else {
            /* No match, output a literal byte */
            //Tracevv((stderr,"%c", s->window[s->strstart]));
            /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
            bflush = trees._tr_tally(s, 0, s.window[s.strstart]);

            s.lookahead--;
            s.strstart++;
          }
          if (bflush) {
            /*** FLUSH_BLOCK(s, 0); ***/
            flush_block_only(s, false);
            if (s.strm.avail_out === 0) {
              return BS_NEED_MORE;
            }
            /***/
          }
        }
        s.insert = 0;
        if (flush === Z_FINISH) {
          /*** FLUSH_BLOCK(s, 1); ***/
          flush_block_only(s, true);
          if (s.strm.avail_out === 0) {
            return BS_FINISH_STARTED;
          }
          /***/
          return BS_FINISH_DONE;
        }
        if (s.last_lit) {
          /*** FLUSH_BLOCK(s, 0); ***/
          flush_block_only(s, false);
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
          /***/
        }
        return BS_BLOCK_DONE;
      }

      /* ===========================================================================
         * For Z_HUFFMAN_ONLY, do not look for matches.  Do not maintain a hash table.
         * (It will be regenerated if this run of deflate switches away from Huffman.)
         */
      function deflate_huff(s, flush) {
        var bflush; /* set if current block must be flushed */

        for (;;) {
          /* Make sure that we have a literal to write. */
          if (s.lookahead === 0) {
            fill_window(s);
            if (s.lookahead === 0) {
              if (flush === Z_NO_FLUSH) {
                return BS_NEED_MORE;
              }
              break; /* flush the current block */
            }
          }

          /* Output a literal byte */
          s.match_length = 0;
          //Tracevv((stderr,"%c", s->window[s->strstart]));
          /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
          bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
          s.lookahead--;
          s.strstart++;
          if (bflush) {
            /*** FLUSH_BLOCK(s, 0); ***/
            flush_block_only(s, false);
            if (s.strm.avail_out === 0) {
              return BS_NEED_MORE;
            }
            /***/
          }
        }
        s.insert = 0;
        if (flush === Z_FINISH) {
          /*** FLUSH_BLOCK(s, 1); ***/
          flush_block_only(s, true);
          if (s.strm.avail_out === 0) {
            return BS_FINISH_STARTED;
          }
          /***/
          return BS_FINISH_DONE;
        }
        if (s.last_lit) {
          /*** FLUSH_BLOCK(s, 0); ***/
          flush_block_only(s, false);
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
          /***/
        }
        return BS_BLOCK_DONE;
      }

      /* Values for max_lazy_match, good_match and max_chain_length, depending on
         * the desired pack level (0..9). The values given below have been tuned to
         * exclude worst case performance for pathological files. Better values may be
         * found for specific files.
         */
      function Config(good_length, max_lazy, nice_length, max_chain, func) {
        this.good_length = good_length;
        this.max_lazy = max_lazy;
        this.nice_length = nice_length;
        this.max_chain = max_chain;
        this.func = func;
      }

      var configuration_table;

      configuration_table = [
      /*      good lazy nice chain */
      new Config(0, 0, 0, 0, deflate_stored), /* 0 store only */
      new Config(4, 4, 8, 4, deflate_fast), /* 1 max speed, no lazy matches */
      new Config(4, 5, 16, 8, deflate_fast), /* 2 */
      new Config(4, 6, 32, 32, deflate_fast), /* 3 */

      new Config(4, 4, 16, 16, deflate_slow), /* 4 lazy matches */
      new Config(8, 16, 32, 32, deflate_slow), /* 5 */
      new Config(8, 16, 128, 128, deflate_slow), /* 6 */
      new Config(8, 32, 128, 256, deflate_slow), /* 7 */
      new Config(32, 128, 258, 1024, deflate_slow), /* 8 */
      new Config(32, 258, 258, 4096, deflate_slow) /* 9 max compression */];



      /* ===========================================================================
                                                                              * Initialize the "longest match" routines for a new zlib stream
                                                                              */
      function lm_init(s) {
        s.window_size = 2 * s.w_size;

        /*** CLEAR_HASH(s); ***/
        zero(s.head); // Fill with NIL (= 0);

        /* Set the default configuration parameters:
         */
        s.max_lazy_match = configuration_table[s.level].max_lazy;
        s.good_match = configuration_table[s.level].good_length;
        s.nice_match = configuration_table[s.level].nice_length;
        s.max_chain_length = configuration_table[s.level].max_chain;

        s.strstart = 0;
        s.block_start = 0;
        s.lookahead = 0;
        s.insert = 0;
        s.match_length = s.prev_length = MIN_MATCH - 1;
        s.match_available = 0;
        s.ins_h = 0;
      }


      function DeflateState() {
        this.strm = null; /* pointer back to this zlib stream */
        this.status = 0; /* as the name implies */
        this.pending_buf = null; /* output still pending */
        this.pending_buf_size = 0; /* size of pending_buf */
        this.pending_out = 0; /* next pending byte to output to the stream */
        this.pending = 0; /* nb of bytes in the pending buffer */
        this.wrap = 0; /* bit 0 true for zlib, bit 1 true for gzip */
        this.gzhead = null; /* gzip header information to write */
        this.gzindex = 0; /* where in extra, name, or comment */
        this.method = Z_DEFLATED; /* can only be DEFLATED */
        this.last_flush = -1; /* value of flush param for previous deflate call */

        this.w_size = 0; /* LZ77 window size (32K by default) */
        this.w_bits = 0; /* log2(w_size)  (8..16) */
        this.w_mask = 0; /* w_size - 1 */

        this.window = null;
        /* Sliding window. Input bytes are read into the second half of the window,
                             * and move to the first half later to keep a dictionary of at least wSize
                             * bytes. With this organization, matches are limited to a distance of
                             * wSize-MAX_MATCH bytes, but this ensures that IO is always
                             * performed with a length multiple of the block size.
                             */

        this.window_size = 0;
        /* Actual size of window: 2*wSize, except when the user input buffer
                               * is directly used as sliding window.
                               */

        this.prev = null;
        /* Link to older string with same hash index. To limit the size of this
                           * array to 64K, this link is maintained only for the last 32K strings.
                           * An index in this array is thus a window index modulo 32K.
                           */

        this.head = null; /* Heads of the hash chains or NIL. */

        this.ins_h = 0; /* hash index of string to be inserted */
        this.hash_size = 0; /* number of elements in hash table */
        this.hash_bits = 0; /* log2(hash_size) */
        this.hash_mask = 0; /* hash_size-1 */

        this.hash_shift = 0;
        /* Number of bits by which ins_h must be shifted at each input
                              * step. It must be such that after MIN_MATCH steps, the oldest
                              * byte no longer takes part in the hash key, that is:
                              *   hash_shift * MIN_MATCH >= hash_bits
                              */

        this.block_start = 0;
        /* Window position at the beginning of the current output block. Gets
                               * negative when the window is moved backwards.
                               */

        this.match_length = 0; /* length of best match */
        this.prev_match = 0; /* previous match */
        this.match_available = 0; /* set if previous match exists */
        this.strstart = 0; /* start of string to insert */
        this.match_start = 0; /* start of matching string */
        this.lookahead = 0; /* number of valid bytes ahead in window */

        this.prev_length = 0;
        /* Length of the best match at previous step. Matches not greater than this
                               * are discarded. This is used in the lazy match evaluation.
                               */

        this.max_chain_length = 0;
        /* To speed up deflation, hash chains are never searched beyond this
                                    * length.  A higher limit improves compression ratio but degrades the
                                    * speed.
                                    */

        this.max_lazy_match = 0;
        /* Attempt to find a better match only when the current match is strictly
                                  * smaller than this value. This mechanism is used only for compression
                                  * levels >= 4.
                                  */
        // That's alias to max_lazy_match, don't use directly
        //this.max_insert_length = 0;
        /* Insert new strings in the hash table only if the match length is not
         * greater than this length. This saves time but degrades compression.
         * max_insert_length is used only for compression levels <= 3.
         */

        this.level = 0; /* compression level (1..9) */
        this.strategy = 0; /* favor or force Huffman coding*/

        this.good_match = 0;
        /* Use a faster search when the previous match is longer than this */

        this.nice_match = 0; /* Stop searching when current match exceeds this */

        /* used by trees.c: */

        /* Didn't use ct_data typedef below to suppress compiler warning */

        // struct ct_data_s dyn_ltree[HEAP_SIZE];   /* literal and length tree */
        // struct ct_data_s dyn_dtree[2*D_CODES+1]; /* distance tree */
        // struct ct_data_s bl_tree[2*BL_CODES+1];  /* Huffman tree for bit lengths */

        // Use flat array of DOUBLE size, with interleaved fata,
        // because JS does not support effective
        this.dyn_ltree = new utils.Buf16(HEAP_SIZE * 2);
        this.dyn_dtree = new utils.Buf16((2 * D_CODES + 1) * 2);
        this.bl_tree = new utils.Buf16((2 * BL_CODES + 1) * 2);
        zero(this.dyn_ltree);
        zero(this.dyn_dtree);
        zero(this.bl_tree);

        this.l_desc = null; /* desc. for literal tree */
        this.d_desc = null; /* desc. for distance tree */
        this.bl_desc = null; /* desc. for bit length tree */

        //ush bl_count[MAX_BITS+1];
        this.bl_count = new utils.Buf16(MAX_BITS + 1);
        /* number of codes at each bit length for an optimal tree */

        //int heap[2*L_CODES+1];      /* heap used to build the Huffman trees */
        this.heap = new utils.Buf16(2 * L_CODES + 1); /* heap used to build the Huffman trees */
        zero(this.heap);

        this.heap_len = 0; /* number of elements in the heap */
        this.heap_max = 0; /* element of largest frequency */
        /* The sons of heap[n] are heap[2*n] and heap[2*n+1]. heap[0] is not used.
                                                               * The same heap array is used to build all trees.
                                                               */

        this.depth = new utils.Buf16(2 * L_CODES + 1); //uch depth[2*L_CODES+1];
        zero(this.depth);
        /* Depth of each subtree used as tie breaker for trees of equal frequency
                           */

        this.l_buf = 0; /* buffer index for literals or lengths */

        this.lit_bufsize = 0;
        /* Size of match buffer for literals/lengths.  There are 4 reasons for
                               * limiting lit_bufsize to 64K:
                               *   - frequencies can be kept in 16 bit counters
                               *   - if compression is not successful for the first block, all input
                               *     data is still in the window so we can still emit a stored block even
                               *     when input comes from standard input.  (This can also be done for
                               *     all blocks if lit_bufsize is not greater than 32K.)
                               *   - if compression is not successful for a file smaller than 64K, we can
                               *     even emit a stored file instead of a stored block (saving 5 bytes).
                               *     This is applicable only for zip (not gzip or zlib).
                               *   - creating new Huffman trees less frequently may not provide fast
                               *     adaptation to changes in the input data statistics. (Take for
                               *     example a binary file with poorly compressible code followed by
                               *     a highly compressible string table.) Smaller buffer sizes give
                               *     fast adaptation but have of course the overhead of transmitting
                               *     trees more frequently.
                               *   - I can't count above 4
                               */

        this.last_lit = 0; /* running index in l_buf */

        this.d_buf = 0;
        /* Buffer index for distances. To simplify the code, d_buf and l_buf have
                         * the same number of elements. To use different lengths, an extra flag
                         * array would be necessary.
                         */

        this.opt_len = 0; /* bit length of current block with optimal trees */
        this.static_len = 0; /* bit length of current block with static trees */
        this.matches = 0; /* number of string matches in current block */
        this.insert = 0; /* bytes at end of window left to insert */


        this.bi_buf = 0;
        /* Output buffer. bits are inserted starting at the bottom (least
                          * significant bits).
                          */
        this.bi_valid = 0;
        /* Number of valid bits in bi_buf.  All bits above the last valid bit
                            * are always zero.
                            */

        // Used for window memory init. We safely ignore it for JS. That makes
        // sense only for pointers and memory check tools.
        //this.high_water = 0;
        /* High water mark offset in window for initialized bytes -- bytes above
         * this are set to zero in order to avoid memory check warnings when
         * longest match routines access bytes past the input.  This is then
         * updated to the new high water mark.
         */
      }


      function deflateResetKeep(strm) {
        var s;

        if (!strm || !strm.state) {
          return err(strm, Z_STREAM_ERROR);
        }

        strm.total_in = strm.total_out = 0;
        strm.data_type = Z_UNKNOWN;

        s = strm.state;
        s.pending = 0;
        s.pending_out = 0;

        if (s.wrap < 0) {
          s.wrap = -s.wrap;
          /* was made negative by deflate(..., Z_FINISH); */
        }
        s.status = s.wrap ? INIT_STATE : BUSY_STATE;
        strm.adler = s.wrap === 2 ?
        0 // crc32(0, Z_NULL, 0)
        :
        1; // adler32(0, Z_NULL, 0)
        s.last_flush = Z_NO_FLUSH;
        trees._tr_init(s);
        return Z_OK;
      }


      function deflateReset(strm) {
        var ret = deflateResetKeep(strm);
        if (ret === Z_OK) {
          lm_init(strm.state);
        }
        return ret;
      }


      function deflateSetHeader(strm, head) {
        if (!strm || !strm.state) {return Z_STREAM_ERROR;}
        if (strm.state.wrap !== 2) {return Z_STREAM_ERROR;}
        strm.state.gzhead = head;
        return Z_OK;
      }


      function deflateInit2(strm, level, method, windowBits, memLevel, strategy) {
        if (!strm) {// === Z_NULL
          return Z_STREAM_ERROR;
        }
        var wrap = 1;

        if (level === Z_DEFAULT_COMPRESSION) {
          level = 6;
        }

        if (windowBits < 0) {/* suppress zlib wrapper */
          wrap = 0;
          windowBits = -windowBits;
        } else

        if (windowBits > 15) {
          wrap = 2; /* write gzip wrapper instead */
          windowBits -= 16;
        }


        if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED ||
        windowBits < 8 || windowBits > 15 || level < 0 || level > 9 ||
        strategy < 0 || strategy > Z_FIXED) {
          return err(strm, Z_STREAM_ERROR);
        }


        if (windowBits === 8) {
          windowBits = 9;
        }
        /* until 256-byte window bug fixed */

        var s = new DeflateState();

        strm.state = s;
        s.strm = strm;

        s.wrap = wrap;
        s.gzhead = null;
        s.w_bits = windowBits;
        s.w_size = 1 << s.w_bits;
        s.w_mask = s.w_size - 1;

        s.hash_bits = memLevel + 7;
        s.hash_size = 1 << s.hash_bits;
        s.hash_mask = s.hash_size - 1;
        s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH);

        s.window = new utils.Buf8(s.w_size * 2);
        s.head = new utils.Buf16(s.hash_size);
        s.prev = new utils.Buf16(s.w_size);

        // Don't need mem init magic for JS.
        //s.high_water = 0;  /* nothing written to s->window yet */

        s.lit_bufsize = 1 << memLevel + 6; /* 16K elements by default */

        s.pending_buf_size = s.lit_bufsize * 4;

        //overlay = (ushf *) ZALLOC(strm, s->lit_bufsize, sizeof(ush)+2);
        //s->pending_buf = (uchf *) overlay;
        s.pending_buf = new utils.Buf8(s.pending_buf_size);

        // It is offset from `s.pending_buf` (size is `s.lit_bufsize * 2`)
        //s->d_buf = overlay + s->lit_bufsize/sizeof(ush);
        s.d_buf = 1 * s.lit_bufsize;

        //s->l_buf = s->pending_buf + (1+sizeof(ush))*s->lit_bufsize;
        s.l_buf = (1 + 2) * s.lit_bufsize;

        s.level = level;
        s.strategy = strategy;
        s.method = method;

        return deflateReset(strm);
      }

      function deflateInit(strm, level) {
        return deflateInit2(strm, level, Z_DEFLATED, MAX_WBITS, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY);
      }


      function deflate(strm, flush) {
        var old_flush, s;
        var beg, val; // for gzip header write only

        if (!strm || !strm.state ||
        flush > Z_BLOCK || flush < 0) {
          return strm ? err(strm, Z_STREAM_ERROR) : Z_STREAM_ERROR;
        }

        s = strm.state;

        if (!strm.output ||
        !strm.input && strm.avail_in !== 0 ||
        s.status === FINISH_STATE && flush !== Z_FINISH) {
          return err(strm, strm.avail_out === 0 ? Z_BUF_ERROR : Z_STREAM_ERROR);
        }

        s.strm = strm; /* just in case */
        old_flush = s.last_flush;
        s.last_flush = flush;

        /* Write the header */
        if (s.status === INIT_STATE) {

          if (s.wrap === 2) {// GZIP header
            strm.adler = 0; //crc32(0L, Z_NULL, 0);
            put_byte(s, 31);
            put_byte(s, 139);
            put_byte(s, 8);
            if (!s.gzhead) {// s->gzhead == Z_NULL
              put_byte(s, 0);
              put_byte(s, 0);
              put_byte(s, 0);
              put_byte(s, 0);
              put_byte(s, 0);
              put_byte(s, s.level === 9 ? 2 :
              s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ?
              4 : 0);
              put_byte(s, OS_CODE);
              s.status = BUSY_STATE;
            } else
            {
              put_byte(s, (s.gzhead.text ? 1 : 0) + (
              s.gzhead.hcrc ? 2 : 0) + (
              !s.gzhead.extra ? 0 : 4) + (
              !s.gzhead.name ? 0 : 8) + (
              !s.gzhead.comment ? 0 : 16));

              put_byte(s, s.gzhead.time & 0xff);
              put_byte(s, s.gzhead.time >> 8 & 0xff);
              put_byte(s, s.gzhead.time >> 16 & 0xff);
              put_byte(s, s.gzhead.time >> 24 & 0xff);
              put_byte(s, s.level === 9 ? 2 :
              s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ?
              4 : 0);
              put_byte(s, s.gzhead.os & 0xff);
              if (s.gzhead.extra && s.gzhead.extra.length) {
                put_byte(s, s.gzhead.extra.length & 0xff);
                put_byte(s, s.gzhead.extra.length >> 8 & 0xff);
              }
              if (s.gzhead.hcrc) {
                strm.adler = crc32(strm.adler, s.pending_buf, s.pending, 0);
              }
              s.gzindex = 0;
              s.status = EXTRA_STATE;
            }
          } else
            // DEFLATE header
            {
              var header = Z_DEFLATED + (s.w_bits - 8 << 4) << 8;
              var level_flags = -1;

              if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) {
                level_flags = 0;
              } else if (s.level < 6) {
                level_flags = 1;
              } else if (s.level === 6) {
                level_flags = 2;
              } else {
                level_flags = 3;
              }
              header |= level_flags << 6;
              if (s.strstart !== 0) {header |= PRESET_DICT;}
              header += 31 - header % 31;

              s.status = BUSY_STATE;
              putShortMSB(s, header);

              /* Save the adler32 of the preset dictionary: */
              if (s.strstart !== 0) {
                putShortMSB(s, strm.adler >>> 16);
                putShortMSB(s, strm.adler & 0xffff);
              }
              strm.adler = 1; // adler32(0L, Z_NULL, 0);
            }
        }

        //#ifdef GZIP
        if (s.status === EXTRA_STATE) {
          if (s.gzhead.extra /* != Z_NULL*/) {
              beg = s.pending; /* start of bytes to update crc */

              while (s.gzindex < (s.gzhead.extra.length & 0xffff)) {
                if (s.pending === s.pending_buf_size) {
                  if (s.gzhead.hcrc && s.pending > beg) {
                    strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
                  }
                  flush_pending(strm);
                  beg = s.pending;
                  if (s.pending === s.pending_buf_size) {
                    break;
                  }
                }
                put_byte(s, s.gzhead.extra[s.gzindex] & 0xff);
                s.gzindex++;
              }
              if (s.gzhead.hcrc && s.pending > beg) {
                strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
              }
              if (s.gzindex === s.gzhead.extra.length) {
                s.gzindex = 0;
                s.status = NAME_STATE;
              }
            } else
          {
            s.status = NAME_STATE;
          }
        }
        if (s.status === NAME_STATE) {
          if (s.gzhead.name /* != Z_NULL*/) {
              beg = s.pending; /* start of bytes to update crc */
              //int val;

              do {
                if (s.pending === s.pending_buf_size) {
                  if (s.gzhead.hcrc && s.pending > beg) {
                    strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
                  }
                  flush_pending(strm);
                  beg = s.pending;
                  if (s.pending === s.pending_buf_size) {
                    val = 1;
                    break;
                  }
                }
                // JS specific: little magic to add zero terminator to end of string
                if (s.gzindex < s.gzhead.name.length) {
                  val = s.gzhead.name.charCodeAt(s.gzindex++) & 0xff;
                } else {
                  val = 0;
                }
                put_byte(s, val);
              } while (val !== 0);

              if (s.gzhead.hcrc && s.pending > beg) {
                strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
              }
              if (val === 0) {
                s.gzindex = 0;
                s.status = COMMENT_STATE;
              }
            } else
          {
            s.status = COMMENT_STATE;
          }
        }
        if (s.status === COMMENT_STATE) {
          if (s.gzhead.comment /* != Z_NULL*/) {
              beg = s.pending; /* start of bytes to update crc */
              //int val;

              do {
                if (s.pending === s.pending_buf_size) {
                  if (s.gzhead.hcrc && s.pending > beg) {
                    strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
                  }
                  flush_pending(strm);
                  beg = s.pending;
                  if (s.pending === s.pending_buf_size) {
                    val = 1;
                    break;
                  }
                }
                // JS specific: little magic to add zero terminator to end of string
                if (s.gzindex < s.gzhead.comment.length) {
                  val = s.gzhead.comment.charCodeAt(s.gzindex++) & 0xff;
                } else {
                  val = 0;
                }
                put_byte(s, val);
              } while (val !== 0);

              if (s.gzhead.hcrc && s.pending > beg) {
                strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
              }
              if (val === 0) {
                s.status = HCRC_STATE;
              }
            } else
          {
            s.status = HCRC_STATE;
          }
        }
        if (s.status === HCRC_STATE) {
          if (s.gzhead.hcrc) {
            if (s.pending + 2 > s.pending_buf_size) {
              flush_pending(strm);
            }
            if (s.pending + 2 <= s.pending_buf_size) {
              put_byte(s, strm.adler & 0xff);
              put_byte(s, strm.adler >> 8 & 0xff);
              strm.adler = 0; //crc32(0L, Z_NULL, 0);
              s.status = BUSY_STATE;
            }
          } else
          {
            s.status = BUSY_STATE;
          }
        }
        //#endif

        /* Flush as much pending output as possible */
        if (s.pending !== 0) {
          flush_pending(strm);
          if (strm.avail_out === 0) {
            /* Since avail_out is 0, deflate will be called again with
                                      * more output space, but possibly with both pending and
                                      * avail_in equal to zero. There won't be anything to do,
                                      * but this is not an error situation so make sure we
                                      * return OK instead of BUF_ERROR at next call of deflate:
                                      */
            s.last_flush = -1;
            return Z_OK;
          }

          /* Make sure there is something to do and avoid duplicate consecutive
             * flushes. For repeated and useless calls with Z_FINISH, we keep
             * returning Z_STREAM_END instead of Z_BUF_ERROR.
             */
        } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) &&
        flush !== Z_FINISH) {
          return err(strm, Z_BUF_ERROR);
        }

        /* User must not provide more input after the first FINISH: */
        if (s.status === FINISH_STATE && strm.avail_in !== 0) {
          return err(strm, Z_BUF_ERROR);
        }

        /* Start a new block or continue the current one.
           */
        if (strm.avail_in !== 0 || s.lookahead !== 0 ||
        flush !== Z_NO_FLUSH && s.status !== FINISH_STATE) {
          var bstate = s.strategy === Z_HUFFMAN_ONLY ? deflate_huff(s, flush) :
          s.strategy === Z_RLE ? deflate_rle(s, flush) :
          configuration_table[s.level].func(s, flush);

          if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
            s.status = FINISH_STATE;
          }
          if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
            if (strm.avail_out === 0) {
              s.last_flush = -1;
              /* avoid BUF_ERROR next call, see above */
            }
            return Z_OK;
            /* If flush != Z_NO_FLUSH && avail_out == 0, the next call
                          * of deflate should use the same flush parameter to make sure
                          * that the flush is complete. So we don't have to output an
                          * empty block here, this will be done at next call. This also
                          * ensures that for a very small output buffer, we emit at most
                          * one empty block.
                          */
          }
          if (bstate === BS_BLOCK_DONE) {
            if (flush === Z_PARTIAL_FLUSH) {
              trees._tr_align(s);
            } else
            if (flush !== Z_BLOCK) {/* FULL_FLUSH or SYNC_FLUSH */

              trees._tr_stored_block(s, 0, 0, false);
              /* For a full flush, this empty block will be recognized
                                                       * as a special marker by inflate_sync().
                                                       */
              if (flush === Z_FULL_FLUSH) {
                /*** CLEAR_HASH(s); ***/ /* forget history */
                zero(s.head); // Fill with NIL (= 0);

                if (s.lookahead === 0) {
                  s.strstart = 0;
                  s.block_start = 0;
                  s.insert = 0;
                }
              }
            }
            flush_pending(strm);
            if (strm.avail_out === 0) {
              s.last_flush = -1; /* avoid BUF_ERROR at next call, see above */
              return Z_OK;
            }
          }
        }
        //Assert(strm->avail_out > 0, "bug2");
        //if (strm.avail_out <= 0) { throw new Error("bug2");}

        if (flush !== Z_FINISH) {return Z_OK;}
        if (s.wrap <= 0) {return Z_STREAM_END;}

        /* Write the trailer */
        if (s.wrap === 2) {
          put_byte(s, strm.adler & 0xff);
          put_byte(s, strm.adler >> 8 & 0xff);
          put_byte(s, strm.adler >> 16 & 0xff);
          put_byte(s, strm.adler >> 24 & 0xff);
          put_byte(s, strm.total_in & 0xff);
          put_byte(s, strm.total_in >> 8 & 0xff);
          put_byte(s, strm.total_in >> 16 & 0xff);
          put_byte(s, strm.total_in >> 24 & 0xff);
        } else

        {
          putShortMSB(s, strm.adler >>> 16);
          putShortMSB(s, strm.adler & 0xffff);
        }

        flush_pending(strm);
        /* If avail_out is zero, the application will call deflate again
                              * to flush the rest.
                              */
        if (s.wrap > 0) {s.wrap = -s.wrap;}
        /* write the trailer only once! */
        return s.pending !== 0 ? Z_OK : Z_STREAM_END;
      }

      function deflateEnd(strm) {
        var status;

        if (!strm /*== Z_NULL*/ || !strm.state /*== Z_NULL*/) {
            return Z_STREAM_ERROR;
          }

        status = strm.state.status;
        if (status !== INIT_STATE &&
        status !== EXTRA_STATE &&
        status !== NAME_STATE &&
        status !== COMMENT_STATE &&
        status !== HCRC_STATE &&
        status !== BUSY_STATE &&
        status !== FINISH_STATE)
        {
          return err(strm, Z_STREAM_ERROR);
        }

        strm.state = null;

        return status === BUSY_STATE ? err(strm, Z_DATA_ERROR) : Z_OK;
      }


      /* =========================================================================
         * Initializes the compression dictionary from the given byte
         * sequence without producing any compressed output.
         */
      function deflateSetDictionary(strm, dictionary) {
        var dictLength = dictionary.length;

        var s;
        var str, n;
        var wrap;
        var avail;
        var next;
        var input;
        var tmpDict;

        if (!strm /*== Z_NULL*/ || !strm.state /*== Z_NULL*/) {
            return Z_STREAM_ERROR;
          }

        s = strm.state;
        wrap = s.wrap;

        if (wrap === 2 || wrap === 1 && s.status !== INIT_STATE || s.lookahead) {
          return Z_STREAM_ERROR;
        }

        /* when using zlib wrappers, compute Adler-32 for provided dictionary */
        if (wrap === 1) {
          /* adler32(strm->adler, dictionary, dictLength); */
          strm.adler = adler32(strm.adler, dictionary, dictLength, 0);
        }

        s.wrap = 0; /* avoid computing Adler-32 in read_buf */

        /* if dictionary would fill window, just replace the history */
        if (dictLength >= s.w_size) {
          if (wrap === 0) {/* already empty otherwise */
            /*** CLEAR_HASH(s); ***/
            zero(s.head); // Fill with NIL (= 0);
            s.strstart = 0;
            s.block_start = 0;
            s.insert = 0;
          }
          /* use the tail */
          // dictionary = dictionary.slice(dictLength - s.w_size);
          tmpDict = new utils.Buf8(s.w_size);
          utils.arraySet(tmpDict, dictionary, dictLength - s.w_size, s.w_size, 0);
          dictionary = tmpDict;
          dictLength = s.w_size;
        }
        /* insert dictionary into window and hash */
        avail = strm.avail_in;
        next = strm.next_in;
        input = strm.input;
        strm.avail_in = dictLength;
        strm.next_in = 0;
        strm.input = dictionary;
        fill_window(s);
        while (s.lookahead >= MIN_MATCH) {
          str = s.strstart;
          n = s.lookahead - (MIN_MATCH - 1);
          do {
            /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
            s.ins_h = (s.ins_h << s.hash_shift ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;

            s.prev[str & s.w_mask] = s.head[s.ins_h];

            s.head[s.ins_h] = str;
            str++;
          } while (--n);
          s.strstart = str;
          s.lookahead = MIN_MATCH - 1;
          fill_window(s);
        }
        s.strstart += s.lookahead;
        s.block_start = s.strstart;
        s.insert = s.lookahead;
        s.lookahead = 0;
        s.match_length = s.prev_length = MIN_MATCH - 1;
        s.match_available = 0;
        strm.next_in = next;
        strm.input = input;
        strm.avail_in = avail;
        s.wrap = wrap;
        return Z_OK;
      }


      exports.deflateInit = deflateInit;
      exports.deflateInit2 = deflateInit2;
      exports.deflateReset = deflateReset;
      exports.deflateResetKeep = deflateResetKeep;
      exports.deflateSetHeader = deflateSetHeader;
      exports.deflate = deflate;
      exports.deflateEnd = deflateEnd;
      exports.deflateSetDictionary = deflateSetDictionary;
      exports.deflateInfo = 'pako deflate (from Nodeca project)';

      /* Not implemented
                                                                  exports.deflateBound = deflateBound;
                                                                  exports.deflateCopy = deflateCopy;
                                                                  exports.deflateParams = deflateParams;
                                                                  exports.deflatePending = deflatePending;
                                                                  exports.deflatePrime = deflatePrime;
                                                                  exports.deflateTune = deflateTune;
                                                                  */

    }, { "../utils/common": 3, "./adler32": 5, "./crc32": 7, "./messages": 13, "./trees": 14 }], 9: [function (require, module, exports) {
      'use strict';

      // (C) 1995-2013 Jean-loup Gailly and Mark Adler
      // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
      //
      // This software is provided 'as-is', without any express or implied
      // warranty. In no event will the authors be held liable for any damages
      // arising from the use of this software.
      //
      // Permission is granted to anyone to use this software for any purpose,
      // including commercial applications, and to alter it and redistribute it
      // freely, subject to the following restrictions:
      //
      // 1. The origin of this software must not be misrepresented; you must not
      //   claim that you wrote the original software. If you use this software
      //   in a product, an acknowledgment in the product documentation would be
      //   appreciated but is not required.
      // 2. Altered source versions must be plainly marked as such, and must not be
      //   misrepresented as being the original software.
      // 3. This notice may not be removed or altered from any source distribution.

      function GZheader() {
        /* true if compressed data believed to be text */
        this.text = 0;
        /* modification time */
        this.time = 0;
        /* extra flags (not used when writing a gzip file) */
        this.xflags = 0;
        /* operating system */
        this.os = 0;
        /* pointer to extra field or Z_NULL if none */
        this.extra = null;
        /* extra field length (valid if extra != Z_NULL) */
        this.extra_len = 0; // Actually, we don't need it in JS,
        // but leave for few code modifications

        //
        // Setup limits is not necessary because in js we should not preallocate memory
        // for inflate use constant limit in 65536 bytes
        //

        /* space at extra (only when reading header) */
        // this.extra_max  = 0;
        /* pointer to zero-terminated file name or Z_NULL */
        this.name = '';
        /* space at name (only when reading header) */
        // this.name_max   = 0;
        /* pointer to zero-terminated comment or Z_NULL */
        this.comment = '';
        /* space at comment (only when reading header) */
        // this.comm_max   = 0;
        /* true if there was or will be a header crc */
        this.hcrc = 0;
        /* true when done reading gzip header (not used when writing a gzip file) */
        this.done = false;
      }

      module.exports = GZheader;

    }, {}], 10: [function (require, module, exports) {
      'use strict';

      // (C) 1995-2013 Jean-loup Gailly and Mark Adler
      // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
      //
      // This software is provided 'as-is', without any express or implied
      // warranty. In no event will the authors be held liable for any damages
      // arising from the use of this software.
      //
      // Permission is granted to anyone to use this software for any purpose,
      // including commercial applications, and to alter it and redistribute it
      // freely, subject to the following restrictions:
      //
      // 1. The origin of this software must not be misrepresented; you must not
      //   claim that you wrote the original software. If you use this software
      //   in a product, an acknowledgment in the product documentation would be
      //   appreciated but is not required.
      // 2. Altered source versions must be plainly marked as such, and must not be
      //   misrepresented as being the original software.
      // 3. This notice may not be removed or altered from any source distribution.

      // See state defs from inflate.js
      var BAD = 30; /* got a data error -- remain here until reset */
      var TYPE = 12; /* i: waiting for type bits, including last-flag bit */

      /*
                                                                                Decode literal, length, and distance codes and write out the resulting
                                                                                literal and match bytes until either not enough input or output is
                                                                                available, an end-of-block is encountered, or a data error is encountered.
                                                                                When large enough input and output buffers are supplied to inflate(), for
                                                                                example, a 16K input buffer and a 64K output buffer, more than 95% of the
                                                                                inflate execution time is spent in this routine.
                                                                             
                                                                                Entry assumptions:
                                                                             
                                                                                     state.mode === LEN
                                                                                     strm.avail_in >= 6
                                                                                     strm.avail_out >= 258
                                                                                     start >= strm.avail_out
                                                                                     state.bits < 8
                                                                             
                                                                                On return, state.mode is one of:
                                                                             
                                                                                     LEN -- ran out of enough output space or enough available input
                                                                                     TYPE -- reached end of block code, inflate() to interpret next block
                                                                                     BAD -- error in block data
                                                                             
                                                                                Notes:
                                                                             
                                                                                 - The maximum input bits used by a length/distance pair is 15 bits for the
                                                                                   length code, 5 bits for the length extra, 15 bits for the distance code,
                                                                                   and 13 bits for the distance extra.  This totals 48 bits, or six bytes.
                                                                                   Therefore if strm.avail_in >= 6, then there is enough input to avoid
                                                                                   checking for available input while decoding.
                                                                             
                                                                                 - The maximum bytes that a single length/distance pair can output is 258
                                                                                   bytes, which is the maximum length that can be coded.  inflate_fast()
                                                                                   requires strm.avail_out >= 258 for each loop to avoid checking for
                                                                                   output space.
                                                                              */
      module.exports = function inflate_fast(strm, start) {
        var state;
        var _in; /* local strm.input */
        var last; /* have enough input while in < last */
        var _out; /* local strm.output */
        var beg; /* inflate()'s initial strm.output */
        var end; /* while out < end, enough space available */
        //#ifdef INFLATE_STRICT
        var dmax; /* maximum distance from zlib header */
        //#endif
        var wsize; /* window size or zero if not using window */
        var whave; /* valid bytes in the window */
        var wnext; /* window write index */
        // Use `s_window` instead `window`, avoid conflict with instrumentation tools
        var s_window; /* allocated sliding window, if wsize != 0 */
        var hold; /* local strm.hold */
        var bits; /* local strm.bits */
        var lcode; /* local strm.lencode */
        var dcode; /* local strm.distcode */
        var lmask; /* mask for first level of length codes */
        var dmask; /* mask for first level of distance codes */
        var here; /* retrieved table entry */
        var op; /* code bits, operation, extra bits, or */
        /*  window position, window bytes to copy */
        var len; /* match length, unused bytes */
        var dist; /* match distance */
        var from; /* where to copy match from */
        var from_source;


        var input, output; // JS specific, because we have no pointers

        /* copy state to local variables */
        state = strm.state;
        //here = state.here;
        _in = strm.next_in;
        input = strm.input;
        last = _in + (strm.avail_in - 5);
        _out = strm.next_out;
        output = strm.output;
        beg = _out - (start - strm.avail_out);
        end = _out + (strm.avail_out - 257);
        //#ifdef INFLATE_STRICT
        dmax = state.dmax;
        //#endif
        wsize = state.wsize;
        whave = state.whave;
        wnext = state.wnext;
        s_window = state.window;
        hold = state.hold;
        bits = state.bits;
        lcode = state.lencode;
        dcode = state.distcode;
        lmask = (1 << state.lenbits) - 1;
        dmask = (1 << state.distbits) - 1;


        /* decode literals and length/distances until end-of-block or not enough
                                              input data or output space */

        top:
        do {
          if (bits < 15) {
            hold += input[_in++] << bits;
            bits += 8;
            hold += input[_in++] << bits;
            bits += 8;
          }

          here = lcode[hold & lmask];

          dolen:
          for (;;) {// Goto emulation
            op = here >>> 24 /*here.bits*/;
            hold >>>= op;
            bits -= op;
            op = here >>> 16 & 0xff /*here.op*/;
            if (op === 0) {/* literal */
              //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
              //        "inflate:         literal '%c'\n" :
              //        "inflate:         literal 0x%02x\n", here.val));
              output[_out++] = here & 0xffff /*here.val*/;
            } else
            if (op & 16) {/* length base */
              len = here & 0xffff /*here.val*/;
              op &= 15; /* number of extra bits */
              if (op) {
                if (bits < op) {
                  hold += input[_in++] << bits;
                  bits += 8;
                }
                len += hold & (1 << op) - 1;
                hold >>>= op;
                bits -= op;
              }
              //Tracevv((stderr, "inflate:         length %u\n", len));
              if (bits < 15) {
                hold += input[_in++] << bits;
                bits += 8;
                hold += input[_in++] << bits;
                bits += 8;
              }
              here = dcode[hold & dmask];

              dodist:
              for (;;) {// goto emulation
                op = here >>> 24 /*here.bits*/;
                hold >>>= op;
                bits -= op;
                op = here >>> 16 & 0xff /*here.op*/;

                if (op & 16) {/* distance base */
                  dist = here & 0xffff /*here.val*/;
                  op &= 15; /* number of extra bits */
                  if (bits < op) {
                    hold += input[_in++] << bits;
                    bits += 8;
                    if (bits < op) {
                      hold += input[_in++] << bits;
                      bits += 8;
                    }
                  }
                  dist += hold & (1 << op) - 1;
                  //#ifdef INFLATE_STRICT
                  if (dist > dmax) {
                    strm.msg = 'invalid distance too far back';
                    state.mode = BAD;
                    break top;
                  }
                  //#endif
                  hold >>>= op;
                  bits -= op;
                  //Tracevv((stderr, "inflate:         distance %u\n", dist));
                  op = _out - beg; /* max distance in output */
                  if (dist > op) {/* see if copy from window */
                    op = dist - op; /* distance back in window */
                    if (op > whave) {
                      if (state.sane) {
                        strm.msg = 'invalid distance too far back';
                        state.mode = BAD;
                        break top;
                      }

                      // (!) This block is disabled in zlib defaults,
                      // don't enable it for binary compatibility
                      //#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
                      //                if (len <= op - whave) {
                      //                  do {
                      //                    output[_out++] = 0;
                      //                  } while (--len);
                      //                  continue top;
                      //                }
                      //                len -= op - whave;
                      //                do {
                      //                  output[_out++] = 0;
                      //                } while (--op > whave);
                      //                if (op === 0) {
                      //                  from = _out - dist;
                      //                  do {
                      //                    output[_out++] = output[from++];
                      //                  } while (--len);
                      //                  continue top;
                      //                }
                      //#endif
                    }
                    from = 0; // window index
                    from_source = s_window;
                    if (wnext === 0) {/* very common case */
                      from += wsize - op;
                      if (op < len) {/* some from window */
                        len -= op;
                        do {
                          output[_out++] = s_window[from++];
                        } while (--op);
                        from = _out - dist; /* rest from output */
                        from_source = output;
                      }
                    } else
                    if (wnext < op) {/* wrap around window */
                      from += wsize + wnext - op;
                      op -= wnext;
                      if (op < len) {/* some from end of window */
                        len -= op;
                        do {
                          output[_out++] = s_window[from++];
                        } while (--op);
                        from = 0;
                        if (wnext < len) {/* some from start of window */
                          op = wnext;
                          len -= op;
                          do {
                            output[_out++] = s_window[from++];
                          } while (--op);
                          from = _out - dist; /* rest from output */
                          from_source = output;
                        }
                      }
                    } else
                    {/* contiguous in window */
                      from += wnext - op;
                      if (op < len) {/* some from window */
                        len -= op;
                        do {
                          output[_out++] = s_window[from++];
                        } while (--op);
                        from = _out - dist; /* rest from output */
                        from_source = output;
                      }
                    }
                    while (len > 2) {
                      output[_out++] = from_source[from++];
                      output[_out++] = from_source[from++];
                      output[_out++] = from_source[from++];
                      len -= 3;
                    }
                    if (len) {
                      output[_out++] = from_source[from++];
                      if (len > 1) {
                        output[_out++] = from_source[from++];
                      }
                    }
                  } else
                  {
                    from = _out - dist; /* copy direct from output */
                    do {/* minimum length is three */
                      output[_out++] = output[from++];
                      output[_out++] = output[from++];
                      output[_out++] = output[from++];
                      len -= 3;
                    } while (len > 2);
                    if (len) {
                      output[_out++] = output[from++];
                      if (len > 1) {
                        output[_out++] = output[from++];
                      }
                    }
                  }
                } else
                if ((op & 64) === 0) {/* 2nd level distance code */
                  here = dcode[(here & 0xffff) + ( /*here.val*/hold & (1 << op) - 1)];
                  continue dodist;
                } else
                {
                  strm.msg = 'invalid distance code';
                  state.mode = BAD;
                  break top;
                }

                break; // need to emulate goto via "continue"
              }
            } else
            if ((op & 64) === 0) {/* 2nd level length code */
              here = lcode[(here & 0xffff) + ( /*here.val*/hold & (1 << op) - 1)];
              continue dolen;
            } else
            if (op & 32) {/* end-of-block */
              //Tracevv((stderr, "inflate:         end of block\n"));
              state.mode = TYPE;
              break top;
            } else
            {
              strm.msg = 'invalid literal/length code';
              state.mode = BAD;
              break top;
            }

            break; // need to emulate goto via "continue"
          }
        } while (_in < last && _out < end);

        /* return unused bytes (on entry, bits < 8, so in won't go too far back) */
        len = bits >> 3;
        _in -= len;
        bits -= len << 3;
        hold &= (1 << bits) - 1;

        /* update state and return */
        strm.next_in = _in;
        strm.next_out = _out;
        strm.avail_in = _in < last ? 5 + (last - _in) : 5 - (_in - last);
        strm.avail_out = _out < end ? 257 + (end - _out) : 257 - (_out - end);
        state.hold = hold;
        state.bits = bits;
        return;
      };

    }, {}], 11: [function (require, module, exports) {
      'use strict';

      // (C) 1995-2013 Jean-loup Gailly and Mark Adler
      // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
      //
      // This software is provided 'as-is', without any express or implied
      // warranty. In no event will the authors be held liable for any damages
      // arising from the use of this software.
      //
      // Permission is granted to anyone to use this software for any purpose,
      // including commercial applications, and to alter it and redistribute it
      // freely, subject to the following restrictions:
      //
      // 1. The origin of this software must not be misrepresented; you must not
      //   claim that you wrote the original software. If you use this software
      //   in a product, an acknowledgment in the product documentation would be
      //   appreciated but is not required.
      // 2. Altered source versions must be plainly marked as such, and must not be
      //   misrepresented as being the original software.
      // 3. This notice may not be removed or altered from any source distribution.

      var utils = require('../utils/common');
      var adler32 = require('./adler32');
      var crc32 = require('./crc32');
      var inflate_fast = require('./inffast');
      var inflate_table = require('./inftrees');

      var CODES = 0;
      var LENS = 1;
      var DISTS = 2;

      /* Public constants ==========================================================*/
      /* ===========================================================================*/


      /* Allowed flush values; see deflate() and inflate() below for details */
      //var Z_NO_FLUSH      = 0;
      //var Z_PARTIAL_FLUSH = 1;
      //var Z_SYNC_FLUSH    = 2;
      //var Z_FULL_FLUSH    = 3;
      var Z_FINISH = 4;
      var Z_BLOCK = 5;
      var Z_TREES = 6;


      /* Return codes for the compression/decompression functions. Negative values
                        * are errors, positive values are used for special but normal events.
                        */
      var Z_OK = 0;
      var Z_STREAM_END = 1;
      var Z_NEED_DICT = 2;
      //var Z_ERRNO         = -1;
      var Z_STREAM_ERROR = -2;
      var Z_DATA_ERROR = -3;
      var Z_MEM_ERROR = -4;
      var Z_BUF_ERROR = -5;
      //var Z_VERSION_ERROR = -6;

      /* The deflate compression method */
      var Z_DEFLATED = 8;


      /* STATES ====================================================================*/
      /* ===========================================================================*/


      var HEAD = 1; /* i: waiting for magic header */
      var FLAGS = 2; /* i: waiting for method and flags (gzip) */
      var TIME = 3; /* i: waiting for modification time (gzip) */
      var OS = 4; /* i: waiting for extra flags and operating system (gzip) */
      var EXLEN = 5; /* i: waiting for extra length (gzip) */
      var EXTRA = 6; /* i: waiting for extra bytes (gzip) */
      var NAME = 7; /* i: waiting for end of file name (gzip) */
      var COMMENT = 8; /* i: waiting for end of comment (gzip) */
      var HCRC = 9; /* i: waiting for header crc (gzip) */
      var DICTID = 10; /* i: waiting for dictionary check value */
      var DICT = 11; /* waiting for inflateSetDictionary() call */
      var TYPE = 12; /* i: waiting for type bits, including last-flag bit */
      var TYPEDO = 13; /* i: same, but skip check to exit inflate on new block */
      var STORED = 14; /* i: waiting for stored size (length and complement) */
      var COPY_ = 15; /* i/o: same as COPY below, but only first time in */
      var COPY = 16; /* i/o: waiting for input or output to copy stored block */
      var TABLE = 17; /* i: waiting for dynamic block table lengths */
      var LENLENS = 18; /* i: waiting for code length code lengths */
      var CODELENS = 19; /* i: waiting for length/lit and distance code lengths */
      var LEN_ = 20; /* i: same as LEN below, but only first time in */
      var LEN = 21; /* i: waiting for length/lit/eob code */
      var LENEXT = 22; /* i: waiting for length extra bits */
      var DIST = 23; /* i: waiting for distance code */
      var DISTEXT = 24; /* i: waiting for distance extra bits */
      var MATCH = 25; /* o: waiting for output space to copy string */
      var LIT = 26; /* o: waiting for output space to write literal */
      var CHECK = 27; /* i: waiting for 32-bit check value */
      var LENGTH = 28; /* i: waiting for 32-bit length (gzip) */
      var DONE = 29; /* finished check, done -- remain here until reset */
      var BAD = 30; /* got a data error -- remain here until reset */
      var MEM = 31; /* got an inflate() memory error -- remain here until reset */
      var SYNC = 32; /* looking for synchronization bytes to restart inflate() */

      /* ===========================================================================*/



      var ENOUGH_LENS = 852;
      var ENOUGH_DISTS = 592;
      //var ENOUGH =  (ENOUGH_LENS+ENOUGH_DISTS);

      var MAX_WBITS = 15;
      /* 32K LZ77 window */
      var DEF_WBITS = MAX_WBITS;


      function zswap32(q) {
        return (q >>> 24 & 0xff) + (
        q >>> 8 & 0xff00) + (
        (q & 0xff00) << 8) + (
        (q & 0xff) << 24);
      }


      function InflateState() {
        this.mode = 0; /* current inflate mode */
        this.last = false; /* true if processing last block */
        this.wrap = 0; /* bit 0 true for zlib, bit 1 true for gzip */
        this.havedict = false; /* true if dictionary provided */
        this.flags = 0; /* gzip header method and flags (0 if zlib) */
        this.dmax = 0; /* zlib header max distance (INFLATE_STRICT) */
        this.check = 0; /* protected copy of check value */
        this.total = 0; /* protected copy of output count */
        // TODO: may be {}
        this.head = null; /* where to save gzip header information */

        /* sliding window */
        this.wbits = 0; /* log base 2 of requested window size */
        this.wsize = 0; /* window size or zero if not using window */
        this.whave = 0; /* valid bytes in the window */
        this.wnext = 0; /* window write index */
        this.window = null; /* allocated sliding window, if needed */

        /* bit accumulator */
        this.hold = 0; /* input bit accumulator */
        this.bits = 0; /* number of bits in "in" */

        /* for string and stored block copying */
        this.length = 0; /* literal or length of data to copy */
        this.offset = 0; /* distance back to copy string from */

        /* for table and code decoding */
        this.extra = 0; /* extra bits needed */

        /* fixed and dynamic code tables */
        this.lencode = null; /* starting table for length/literal codes */
        this.distcode = null; /* starting table for distance codes */
        this.lenbits = 0; /* index bits for lencode */
        this.distbits = 0; /* index bits for distcode */

        /* dynamic table building */
        this.ncode = 0; /* number of code length code lengths */
        this.nlen = 0; /* number of length code lengths */
        this.ndist = 0; /* number of distance code lengths */
        this.have = 0; /* number of code lengths in lens[] */
        this.next = null; /* next available space in codes[] */

        this.lens = new utils.Buf16(320); /* temporary storage for code lengths */
        this.work = new utils.Buf16(288); /* work area for code table building */

        /*
                                                                                   because we don't have pointers in js, we use lencode and distcode directly
                                                                                   as buffers so we don't need codes
                                                                                  */
        //this.codes = new utils.Buf32(ENOUGH);       /* space for code tables */
        this.lendyn = null; /* dynamic table for length/literal codes (JS specific) */
        this.distdyn = null; /* dynamic table for distance codes (JS specific) */
        this.sane = 0; /* if false, allow invalid distance too far */
        this.back = 0; /* bits back of last unprocessed length/lit */
        this.was = 0; /* initial length of match */
      }

      function inflateResetKeep(strm) {
        var state;

        if (!strm || !strm.state) {return Z_STREAM_ERROR;}
        state = strm.state;
        strm.total_in = strm.total_out = state.total = 0;
        strm.msg = ''; /*Z_NULL*/
        if (state.wrap) {/* to support ill-conceived Java test suite */
          strm.adler = state.wrap & 1;
        }
        state.mode = HEAD;
        state.last = 0;
        state.havedict = 0;
        state.dmax = 32768;
        state.head = null /*Z_NULL*/;
        state.hold = 0;
        state.bits = 0;
        //state.lencode = state.distcode = state.next = state.codes;
        state.lencode = state.lendyn = new utils.Buf32(ENOUGH_LENS);
        state.distcode = state.distdyn = new utils.Buf32(ENOUGH_DISTS);

        state.sane = 1;
        state.back = -1;
        //Tracev((stderr, "inflate: reset\n"));
        return Z_OK;
      }

      function inflateReset(strm) {
        var state;

        if (!strm || !strm.state) {return Z_STREAM_ERROR;}
        state = strm.state;
        state.wsize = 0;
        state.whave = 0;
        state.wnext = 0;
        return inflateResetKeep(strm);

      }

      function inflateReset2(strm, windowBits) {
        var wrap;
        var state;

        /* get the state */
        if (!strm || !strm.state) {return Z_STREAM_ERROR;}
        state = strm.state;

        /* extract wrap request from windowBits parameter */
        if (windowBits < 0) {
          wrap = 0;
          windowBits = -windowBits;
        } else
        {
          wrap = (windowBits >> 4) + 1;
          if (windowBits < 48) {
            windowBits &= 15;
          }
        }

        /* set number of window bits, free window if different */
        if (windowBits && (windowBits < 8 || windowBits > 15)) {
          return Z_STREAM_ERROR;
        }
        if (state.window !== null && state.wbits !== windowBits) {
          state.window = null;
        }

        /* update state and reset the rest of it */
        state.wrap = wrap;
        state.wbits = windowBits;
        return inflateReset(strm);
      }

      function inflateInit2(strm, windowBits) {
        var ret;
        var state;

        if (!strm) {return Z_STREAM_ERROR;}
        //strm.msg = Z_NULL;                 /* in case we return an error */

        state = new InflateState();

        //if (state === Z_NULL) return Z_MEM_ERROR;
        //Tracev((stderr, "inflate: allocated\n"));
        strm.state = state;
        state.window = null /*Z_NULL*/;
        ret = inflateReset2(strm, windowBits);
        if (ret !== Z_OK) {
          strm.state = null /*Z_NULL*/;
        }
        return ret;
      }

      function inflateInit(strm) {
        return inflateInit2(strm, DEF_WBITS);
      }


      /*
         Return state with length and distance decoding tables and index sizes set to
         fixed code decoding.  Normally this returns fixed tables from inffixed.h.
         If BUILDFIXED is defined, then instead this routine builds the tables the
         first time it's called, and returns those tables the first time and
         thereafter.  This reduces the size of the code by about 2K bytes, in
         exchange for a little execution time.  However, BUILDFIXED should not be
         used for threaded applications, since the rewriting of the tables and virgin
         may not be thread-safe.
         */
      var virgin = true;

      var lenfix, distfix; // We have no pointers in JS, so keep tables separate

      function fixedtables(state) {
        /* build fixed huffman tables if first call (may not be thread safe) */
        if (virgin) {
          var sym;

          lenfix = new utils.Buf32(512);
          distfix = new utils.Buf32(32);

          /* literal/length table */
          sym = 0;
          while (sym < 144) {state.lens[sym++] = 8;}
          while (sym < 256) {state.lens[sym++] = 9;}
          while (sym < 280) {state.lens[sym++] = 7;}
          while (sym < 288) {state.lens[sym++] = 8;}

          inflate_table(LENS, state.lens, 0, 288, lenfix, 0, state.work, { bits: 9 });

          /* distance table */
          sym = 0;
          while (sym < 32) {state.lens[sym++] = 5;}

          inflate_table(DISTS, state.lens, 0, 32, distfix, 0, state.work, { bits: 5 });

          /* do this just once */
          virgin = false;
        }

        state.lencode = lenfix;
        state.lenbits = 9;
        state.distcode = distfix;
        state.distbits = 5;
      }


      /*
         Update the window with the last wsize (normally 32K) bytes written before
         returning.  If window does not exist yet, create it.  This is only called
         when a window is already in use, or when output has been written during this
         inflate call, but the end of the deflate stream has not been reached yet.
         It is also called to create a window for dictionary data when a dictionary
         is loaded.
        
         Providing output buffers larger than 32K to inflate() should provide a speed
         advantage, since only the last 32K of output is copied to the sliding window
         upon return from inflate(), and since all distances after the first 32K of
         output will fall in the output data, making match copies simpler and faster.
         The advantage may be dependent on the size of the processor's data caches.
         */
      function updatewindow(strm, src, end, copy) {
        var dist;
        var state = strm.state;

        /* if it hasn't been done already, allocate space for the window */
        if (state.window === null) {
          state.wsize = 1 << state.wbits;
          state.wnext = 0;
          state.whave = 0;

          state.window = new utils.Buf8(state.wsize);
        }

        /* copy state->wsize or less output bytes into the circular window */
        if (copy >= state.wsize) {
          utils.arraySet(state.window, src, end - state.wsize, state.wsize, 0);
          state.wnext = 0;
          state.whave = state.wsize;
        } else
        {
          dist = state.wsize - state.wnext;
          if (dist > copy) {
            dist = copy;
          }
          //zmemcpy(state->window + state->wnext, end - copy, dist);
          utils.arraySet(state.window, src, end - copy, dist, state.wnext);
          copy -= dist;
          if (copy) {
            //zmemcpy(state->window, end - copy, copy);
            utils.arraySet(state.window, src, end - copy, copy, 0);
            state.wnext = copy;
            state.whave = state.wsize;
          } else
          {
            state.wnext += dist;
            if (state.wnext === state.wsize) {state.wnext = 0;}
            if (state.whave < state.wsize) {state.whave += dist;}
          }
        }
        return 0;
      }

      function inflate(strm, flush) {
        var state;
        var input, output; // input/output buffers
        var next; /* next input INDEX */
        var put; /* next output INDEX */
        var have, left; /* available input and output */
        var hold; /* bit buffer */
        var bits; /* bits in bit buffer */
        var _in, _out; /* save starting available input and output */
        var copy; /* number of stored or match bytes to copy */
        var from; /* where to copy match bytes from */
        var from_source;
        var here = 0; /* current decoding table entry */
        var here_bits, here_op, here_val; // paked "here" denormalized (JS specific)
        //var last;                   /* parent table entry */
        var last_bits, last_op, last_val; // paked "last" denormalized (JS specific)
        var len; /* length to copy for repeats, bits to drop */
        var ret; /* return code */
        var hbuf = new utils.Buf8(4); /* buffer for gzip header crc calculation */
        var opts;

        var n; // temporary var for NEED_BITS

        var order = /* permutation of code lengths */
        [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];


        if (!strm || !strm.state || !strm.output ||
        !strm.input && strm.avail_in !== 0) {
          return Z_STREAM_ERROR;
        }

        state = strm.state;
        if (state.mode === TYPE) {state.mode = TYPEDO;} /* skip check */


        //--- LOAD() ---
        put = strm.next_out;
        output = strm.output;
        left = strm.avail_out;
        next = strm.next_in;
        input = strm.input;
        have = strm.avail_in;
        hold = state.hold;
        bits = state.bits;
        //---

        _in = have;
        _out = left;
        ret = Z_OK;

        inf_leave: // goto emulation
        for (;;) {
          switch (state.mode) {
            case HEAD:
              if (state.wrap === 0) {
                state.mode = TYPEDO;
                break;
              }
              //=== NEEDBITS(16);
              while (bits < 16) {
                if (have === 0) {break inf_leave;}
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              if (state.wrap & 2 && hold === 0x8b1f) {/* gzip header */
                state.check = 0 /*crc32(0L, Z_NULL, 0)*/;
                //=== CRC2(state.check, hold);
                hbuf[0] = hold & 0xff;
                hbuf[1] = hold >>> 8 & 0xff;
                state.check = crc32(state.check, hbuf, 2, 0);
                //===//

                //=== INITBITS();
                hold = 0;
                bits = 0;
                //===//
                state.mode = FLAGS;
                break;
              }
              state.flags = 0; /* expect zlib header */
              if (state.head) {
                state.head.done = false;
              }
              if (!(state.wrap & 1) || /* check if zlib header allowed */
              (((hold & 0xff) << /*BITS(8)*/8) + (hold >> 8)) % 31) {
                strm.msg = 'incorrect header check';
                state.mode = BAD;
                break;
              }
              if ((hold & 0x0f) !== /*BITS(4)*/Z_DEFLATED) {
                strm.msg = 'unknown compression method';
                state.mode = BAD;
                break;
              }
              //--- DROPBITS(4) ---//
              hold >>>= 4;
              bits -= 4;
              //---//
              len = (hold & 0x0f) + /*BITS(4)*/8;
              if (state.wbits === 0) {
                state.wbits = len;
              } else
              if (len > state.wbits) {
                strm.msg = 'invalid window size';
                state.mode = BAD;
                break;
              }
              state.dmax = 1 << len;
              //Tracev((stderr, "inflate:   zlib header ok\n"));
              strm.adler = state.check = 1 /*adler32(0L, Z_NULL, 0)*/;
              state.mode = hold & 0x200 ? DICTID : TYPE;
              //=== INITBITS();
              hold = 0;
              bits = 0;
              //===//
              break;
            case FLAGS:
              //=== NEEDBITS(16); */
              while (bits < 16) {
                if (have === 0) {break inf_leave;}
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              state.flags = hold;
              if ((state.flags & 0xff) !== Z_DEFLATED) {
                strm.msg = 'unknown compression method';
                state.mode = BAD;
                break;
              }
              if (state.flags & 0xe000) {
                strm.msg = 'unknown header flags set';
                state.mode = BAD;
                break;
              }
              if (state.head) {
                state.head.text = hold >> 8 & 1;
              }
              if (state.flags & 0x0200) {
                //=== CRC2(state.check, hold);
                hbuf[0] = hold & 0xff;
                hbuf[1] = hold >>> 8 & 0xff;
                state.check = crc32(state.check, hbuf, 2, 0);
                //===//
              }
              //=== INITBITS();
              hold = 0;
              bits = 0;
              //===//
              state.mode = TIME;
            /* falls through */
            case TIME:
              //=== NEEDBITS(32); */
              while (bits < 32) {
                if (have === 0) {break inf_leave;}
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              if (state.head) {
                state.head.time = hold;
              }
              if (state.flags & 0x0200) {
                //=== CRC4(state.check, hold)
                hbuf[0] = hold & 0xff;
                hbuf[1] = hold >>> 8 & 0xff;
                hbuf[2] = hold >>> 16 & 0xff;
                hbuf[3] = hold >>> 24 & 0xff;
                state.check = crc32(state.check, hbuf, 4, 0);
                //===
              }
              //=== INITBITS();
              hold = 0;
              bits = 0;
              //===//
              state.mode = OS;
            /* falls through */
            case OS:
              //=== NEEDBITS(16); */
              while (bits < 16) {
                if (have === 0) {break inf_leave;}
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              if (state.head) {
                state.head.xflags = hold & 0xff;
                state.head.os = hold >> 8;
              }
              if (state.flags & 0x0200) {
                //=== CRC2(state.check, hold);
                hbuf[0] = hold & 0xff;
                hbuf[1] = hold >>> 8 & 0xff;
                state.check = crc32(state.check, hbuf, 2, 0);
                //===//
              }
              //=== INITBITS();
              hold = 0;
              bits = 0;
              //===//
              state.mode = EXLEN;
            /* falls through */
            case EXLEN:
              if (state.flags & 0x0400) {
                //=== NEEDBITS(16); */
                while (bits < 16) {
                  if (have === 0) {break inf_leave;}
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                //===//
                state.length = hold;
                if (state.head) {
                  state.head.extra_len = hold;
                }
                if (state.flags & 0x0200) {
                  //=== CRC2(state.check, hold);
                  hbuf[0] = hold & 0xff;
                  hbuf[1] = hold >>> 8 & 0xff;
                  state.check = crc32(state.check, hbuf, 2, 0);
                  //===//
                }
                //=== INITBITS();
                hold = 0;
                bits = 0;
                //===//
              } else
              if (state.head) {
                state.head.extra = null /*Z_NULL*/;
              }
              state.mode = EXTRA;
            /* falls through */
            case EXTRA:
              if (state.flags & 0x0400) {
                copy = state.length;
                if (copy > have) {copy = have;}
                if (copy) {
                  if (state.head) {
                    len = state.head.extra_len - state.length;
                    if (!state.head.extra) {
                      // Use untyped array for more convenient processing later
                      state.head.extra = new Array(state.head.extra_len);
                    }
                    utils.arraySet(
                    state.head.extra,
                    input,
                    next,
                    // extra field is limited to 65536 bytes
                    // - no need for additional size check
                    copy,
                    /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
                    len);

                    //zmemcpy(state.head.extra + len, next,
                    //        len + copy > state.head.extra_max ?
                    //        state.head.extra_max - len : copy);
                  }
                  if (state.flags & 0x0200) {
                    state.check = crc32(state.check, input, copy, next);
                  }
                  have -= copy;
                  next += copy;
                  state.length -= copy;
                }
                if (state.length) {break inf_leave;}
              }
              state.length = 0;
              state.mode = NAME;
            /* falls through */
            case NAME:
              if (state.flags & 0x0800) {
                if (have === 0) {break inf_leave;}
                copy = 0;
                do {
                  // TODO: 2 or 1 bytes?
                  len = input[next + copy++];
                  /* use constant limit because in js we should not preallocate memory */
                  if (state.head && len &&
                  state.length < 65536 /*state.head.name_max*/) {
                    state.head.name += String.fromCharCode(len);
                  }
                } while (len && copy < have);

                if (state.flags & 0x0200) {
                  state.check = crc32(state.check, input, copy, next);
                }
                have -= copy;
                next += copy;
                if (len) {break inf_leave;}
              } else
              if (state.head) {
                state.head.name = null;
              }
              state.length = 0;
              state.mode = COMMENT;
            /* falls through */
            case COMMENT:
              if (state.flags & 0x1000) {
                if (have === 0) {break inf_leave;}
                copy = 0;
                do {
                  len = input[next + copy++];
                  /* use constant limit because in js we should not preallocate memory */
                  if (state.head && len &&
                  state.length < 65536 /*state.head.comm_max*/) {
                    state.head.comment += String.fromCharCode(len);
                  }
                } while (len && copy < have);
                if (state.flags & 0x0200) {
                  state.check = crc32(state.check, input, copy, next);
                }
                have -= copy;
                next += copy;
                if (len) {break inf_leave;}
              } else
              if (state.head) {
                state.head.comment = null;
              }
              state.mode = HCRC;
            /* falls through */
            case HCRC:
              if (state.flags & 0x0200) {
                //=== NEEDBITS(16); */
                while (bits < 16) {
                  if (have === 0) {break inf_leave;}
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                //===//
                if (hold !== (state.check & 0xffff)) {
                  strm.msg = 'header crc mismatch';
                  state.mode = BAD;
                  break;
                }
                //=== INITBITS();
                hold = 0;
                bits = 0;
                //===//
              }
              if (state.head) {
                state.head.hcrc = state.flags >> 9 & 1;
                state.head.done = true;
              }
              strm.adler = state.check = 0;
              state.mode = TYPE;
              break;
            case DICTID:
              //=== NEEDBITS(32); */
              while (bits < 32) {
                if (have === 0) {break inf_leave;}
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              strm.adler = state.check = zswap32(hold);
              //=== INITBITS();
              hold = 0;
              bits = 0;
              //===//
              state.mode = DICT;
            /* falls through */
            case DICT:
              if (state.havedict === 0) {
                //--- RESTORE() ---
                strm.next_out = put;
                strm.avail_out = left;
                strm.next_in = next;
                strm.avail_in = have;
                state.hold = hold;
                state.bits = bits;
                //---
                return Z_NEED_DICT;
              }
              strm.adler = state.check = 1 /*adler32(0L, Z_NULL, 0)*/;
              state.mode = TYPE;
            /* falls through */
            case TYPE:
              if (flush === Z_BLOCK || flush === Z_TREES) {break inf_leave;}
            /* falls through */
            case TYPEDO:
              if (state.last) {
                //--- BYTEBITS() ---//
                hold >>>= bits & 7;
                bits -= bits & 7;
                //---//
                state.mode = CHECK;
                break;
              }
              //=== NEEDBITS(3); */
              while (bits < 3) {
                if (have === 0) {break inf_leave;}
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              state.last = hold & 0x01 /*BITS(1)*/;
              //--- DROPBITS(1) ---//
              hold >>>= 1;
              bits -= 1;
              //---//

              switch (hold & 0x03) {/*BITS(2)*/
                case 0: /* stored block */
                  //Tracev((stderr, "inflate:     stored block%s\n",
                  //        state.last ? " (last)" : ""));
                  state.mode = STORED;
                  break;
                case 1: /* fixed block */
                  fixedtables(state);
                  //Tracev((stderr, "inflate:     fixed codes block%s\n",
                  //        state.last ? " (last)" : ""));
                  state.mode = LEN_; /* decode codes */
                  if (flush === Z_TREES) {
                    //--- DROPBITS(2) ---//
                    hold >>>= 2;
                    bits -= 2;
                    //---//
                    break inf_leave;
                  }
                  break;
                case 2: /* dynamic block */
                  //Tracev((stderr, "inflate:     dynamic codes block%s\n",
                  //        state.last ? " (last)" : ""));
                  state.mode = TABLE;
                  break;
                case 3:
                  strm.msg = 'invalid block type';
                  state.mode = BAD;}

              //--- DROPBITS(2) ---//
              hold >>>= 2;
              bits -= 2;
              //---//
              break;
            case STORED:
              //--- BYTEBITS() ---// /* go to byte boundary */
              hold >>>= bits & 7;
              bits -= bits & 7;
              //---//
              //=== NEEDBITS(32); */
              while (bits < 32) {
                if (have === 0) {break inf_leave;}
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              if ((hold & 0xffff) !== (hold >>> 16 ^ 0xffff)) {
                strm.msg = 'invalid stored block lengths';
                state.mode = BAD;
                break;
              }
              state.length = hold & 0xffff;
              //Tracev((stderr, "inflate:       stored length %u\n",
              //        state.length));
              //=== INITBITS();
              hold = 0;
              bits = 0;
              //===//
              state.mode = COPY_;
              if (flush === Z_TREES) {break inf_leave;}
            /* falls through */
            case COPY_:
              state.mode = COPY;
            /* falls through */
            case COPY:
              copy = state.length;
              if (copy) {
                if (copy > have) {copy = have;}
                if (copy > left) {copy = left;}
                if (copy === 0) {break inf_leave;}
                //--- zmemcpy(put, next, copy); ---
                utils.arraySet(output, input, next, copy, put);
                //---//
                have -= copy;
                next += copy;
                left -= copy;
                put += copy;
                state.length -= copy;
                break;
              }
              //Tracev((stderr, "inflate:       stored end\n"));
              state.mode = TYPE;
              break;
            case TABLE:
              //=== NEEDBITS(14); */
              while (bits < 14) {
                if (have === 0) {break inf_leave;}
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              state.nlen = (hold & 0x1f) + /*BITS(5)*/257;
              //--- DROPBITS(5) ---//
              hold >>>= 5;
              bits -= 5;
              //---//
              state.ndist = (hold & 0x1f) + /*BITS(5)*/1;
              //--- DROPBITS(5) ---//
              hold >>>= 5;
              bits -= 5;
              //---//
              state.ncode = (hold & 0x0f) + /*BITS(4)*/4;
              //--- DROPBITS(4) ---//
              hold >>>= 4;
              bits -= 4;
              //---//
              //#ifndef PKZIP_BUG_WORKAROUND
              if (state.nlen > 286 || state.ndist > 30) {
                strm.msg = 'too many length or distance symbols';
                state.mode = BAD;
                break;
              }
              //#endif
              //Tracev((stderr, "inflate:       table sizes ok\n"));
              state.have = 0;
              state.mode = LENLENS;
            /* falls through */
            case LENLENS:
              while (state.have < state.ncode) {
                //=== NEEDBITS(3);
                while (bits < 3) {
                  if (have === 0) {break inf_leave;}
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                //===//
                state.lens[order[state.have++]] = hold & 0x07; //BITS(3);
                //--- DROPBITS(3) ---//
                hold >>>= 3;
                bits -= 3;
                //---//
              }
              while (state.have < 19) {
                state.lens[order[state.have++]] = 0;
              }
              // We have separate tables & no pointers. 2 commented lines below not needed.
              //state.next = state.codes;
              //state.lencode = state.next;
              // Switch to use dynamic table
              state.lencode = state.lendyn;
              state.lenbits = 7;

              opts = { bits: state.lenbits };
              ret = inflate_table(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
              state.lenbits = opts.bits;

              if (ret) {
                strm.msg = 'invalid code lengths set';
                state.mode = BAD;
                break;
              }
              //Tracev((stderr, "inflate:       code lengths ok\n"));
              state.have = 0;
              state.mode = CODELENS;
            /* falls through */
            case CODELENS:
              while (state.have < state.nlen + state.ndist) {
                for (;;) {
                  here = state.lencode[hold & (1 << state.lenbits) - 1]; /*BITS(state.lenbits)*/
                  here_bits = here >>> 24;
                  here_op = here >>> 16 & 0xff;
                  here_val = here & 0xffff;

                  if (here_bits <= bits) {break;}
                  //--- PULLBYTE() ---//
                  if (have === 0) {break inf_leave;}
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                  //---//
                }
                if (here_val < 16) {
                  //--- DROPBITS(here.bits) ---//
                  hold >>>= here_bits;
                  bits -= here_bits;
                  //---//
                  state.lens[state.have++] = here_val;
                } else
                {
                  if (here_val === 16) {
                    //=== NEEDBITS(here.bits + 2);
                    n = here_bits + 2;
                    while (bits < n) {
                      if (have === 0) {break inf_leave;}
                      have--;
                      hold += input[next++] << bits;
                      bits += 8;
                    }
                    //===//
                    //--- DROPBITS(here.bits) ---//
                    hold >>>= here_bits;
                    bits -= here_bits;
                    //---//
                    if (state.have === 0) {
                      strm.msg = 'invalid bit length repeat';
                      state.mode = BAD;
                      break;
                    }
                    len = state.lens[state.have - 1];
                    copy = 3 + (hold & 0x03); //BITS(2);
                    //--- DROPBITS(2) ---//
                    hold >>>= 2;
                    bits -= 2;
                    //---//
                  } else
                  if (here_val === 17) {
                    //=== NEEDBITS(here.bits + 3);
                    n = here_bits + 3;
                    while (bits < n) {
                      if (have === 0) {break inf_leave;}
                      have--;
                      hold += input[next++] << bits;
                      bits += 8;
                    }
                    //===//
                    //--- DROPBITS(here.bits) ---//
                    hold >>>= here_bits;
                    bits -= here_bits;
                    //---//
                    len = 0;
                    copy = 3 + (hold & 0x07); //BITS(3);
                    //--- DROPBITS(3) ---//
                    hold >>>= 3;
                    bits -= 3;
                    //---//
                  } else
                  {
                    //=== NEEDBITS(here.bits + 7);
                    n = here_bits + 7;
                    while (bits < n) {
                      if (have === 0) {break inf_leave;}
                      have--;
                      hold += input[next++] << bits;
                      bits += 8;
                    }
                    //===//
                    //--- DROPBITS(here.bits) ---//
                    hold >>>= here_bits;
                    bits -= here_bits;
                    //---//
                    len = 0;
                    copy = 11 + (hold & 0x7f); //BITS(7);
                    //--- DROPBITS(7) ---//
                    hold >>>= 7;
                    bits -= 7;
                    //---//
                  }
                  if (state.have + copy > state.nlen + state.ndist) {
                    strm.msg = 'invalid bit length repeat';
                    state.mode = BAD;
                    break;
                  }
                  while (copy--) {
                    state.lens[state.have++] = len;
                  }
                }
              }

              /* handle error breaks in while */
              if (state.mode === BAD) {break;}

              /* check for end-of-block code (better have one) */
              if (state.lens[256] === 0) {
                strm.msg = 'invalid code -- missing end-of-block';
                state.mode = BAD;
                break;
              }

              /* build code tables -- note: do not change the lenbits or distbits
                   values here (9 and 6) without reading the comments in inftrees.h
                   concerning the ENOUGH constants, which depend on those values */
              state.lenbits = 9;

              opts = { bits: state.lenbits };
              ret = inflate_table(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
              // We have separate tables & no pointers. 2 commented lines below not needed.
              // state.next_index = opts.table_index;
              state.lenbits = opts.bits;
              // state.lencode = state.next;

              if (ret) {
                strm.msg = 'invalid literal/lengths set';
                state.mode = BAD;
                break;
              }

              state.distbits = 6;
              //state.distcode.copy(state.codes);
              // Switch to use dynamic table
              state.distcode = state.distdyn;
              opts = { bits: state.distbits };
              ret = inflate_table(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
              // We have separate tables & no pointers. 2 commented lines below not needed.
              // state.next_index = opts.table_index;
              state.distbits = opts.bits;
              // state.distcode = state.next;

              if (ret) {
                strm.msg = 'invalid distances set';
                state.mode = BAD;
                break;
              }
              //Tracev((stderr, 'inflate:       codes ok\n'));
              state.mode = LEN_;
              if (flush === Z_TREES) {break inf_leave;}
            /* falls through */
            case LEN_:
              state.mode = LEN;
            /* falls through */
            case LEN:
              if (have >= 6 && left >= 258) {
                //--- RESTORE() ---
                strm.next_out = put;
                strm.avail_out = left;
                strm.next_in = next;
                strm.avail_in = have;
                state.hold = hold;
                state.bits = bits;
                //---
                inflate_fast(strm, _out);
                //--- LOAD() ---
                put = strm.next_out;
                output = strm.output;
                left = strm.avail_out;
                next = strm.next_in;
                input = strm.input;
                have = strm.avail_in;
                hold = state.hold;
                bits = state.bits;
                //---

                if (state.mode === TYPE) {
                  state.back = -1;
                }
                break;
              }
              state.back = 0;
              for (;;) {
                here = state.lencode[hold & (1 << state.lenbits) - 1]; /*BITS(state.lenbits)*/
                here_bits = here >>> 24;
                here_op = here >>> 16 & 0xff;
                here_val = here & 0xffff;

                if (here_bits <= bits) {break;}
                //--- PULLBYTE() ---//
                if (have === 0) {break inf_leave;}
                have--;
                hold += input[next++] << bits;
                bits += 8;
                //---//
              }
              if (here_op && (here_op & 0xf0) === 0) {
                last_bits = here_bits;
                last_op = here_op;
                last_val = here_val;
                for (;;) {
                  here = state.lencode[last_val + (
                  (hold & (1 << last_bits + last_op) - 1) >> /*BITS(last.bits + last.op)*/last_bits)];
                  here_bits = here >>> 24;
                  here_op = here >>> 16 & 0xff;
                  here_val = here & 0xffff;

                  if (last_bits + here_bits <= bits) {break;}
                  //--- PULLBYTE() ---//
                  if (have === 0) {break inf_leave;}
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                  //---//
                }
                //--- DROPBITS(last.bits) ---//
                hold >>>= last_bits;
                bits -= last_bits;
                //---//
                state.back += last_bits;
              }
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              state.back += here_bits;
              state.length = here_val;
              if (here_op === 0) {
                //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
                //        "inflate:         literal '%c'\n" :
                //        "inflate:         literal 0x%02x\n", here.val));
                state.mode = LIT;
                break;
              }
              if (here_op & 32) {
                //Tracevv((stderr, "inflate:         end of block\n"));
                state.back = -1;
                state.mode = TYPE;
                break;
              }
              if (here_op & 64) {
                strm.msg = 'invalid literal/length code';
                state.mode = BAD;
                break;
              }
              state.extra = here_op & 15;
              state.mode = LENEXT;
            /* falls through */
            case LENEXT:
              if (state.extra) {
                //=== NEEDBITS(state.extra);
                n = state.extra;
                while (bits < n) {
                  if (have === 0) {break inf_leave;}
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                //===//
                state.length += hold & (1 << state.extra) - 1 /*BITS(state.extra)*/;
                //--- DROPBITS(state.extra) ---//
                hold >>>= state.extra;
                bits -= state.extra;
                //---//
                state.back += state.extra;
              }
              //Tracevv((stderr, "inflate:         length %u\n", state.length));
              state.was = state.length;
              state.mode = DIST;
            /* falls through */
            case DIST:
              for (;;) {
                here = state.distcode[hold & (1 << state.distbits) - 1]; /*BITS(state.distbits)*/
                here_bits = here >>> 24;
                here_op = here >>> 16 & 0xff;
                here_val = here & 0xffff;

                if (here_bits <= bits) {break;}
                //--- PULLBYTE() ---//
                if (have === 0) {break inf_leave;}
                have--;
                hold += input[next++] << bits;
                bits += 8;
                //---//
              }
              if ((here_op & 0xf0) === 0) {
                last_bits = here_bits;
                last_op = here_op;
                last_val = here_val;
                for (;;) {
                  here = state.distcode[last_val + (
                  (hold & (1 << last_bits + last_op) - 1) >> /*BITS(last.bits + last.op)*/last_bits)];
                  here_bits = here >>> 24;
                  here_op = here >>> 16 & 0xff;
                  here_val = here & 0xffff;

                  if (last_bits + here_bits <= bits) {break;}
                  //--- PULLBYTE() ---//
                  if (have === 0) {break inf_leave;}
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                  //---//
                }
                //--- DROPBITS(last.bits) ---//
                hold >>>= last_bits;
                bits -= last_bits;
                //---//
                state.back += last_bits;
              }
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              state.back += here_bits;
              if (here_op & 64) {
                strm.msg = 'invalid distance code';
                state.mode = BAD;
                break;
              }
              state.offset = here_val;
              state.extra = here_op & 15;
              state.mode = DISTEXT;
            /* falls through */
            case DISTEXT:
              if (state.extra) {
                //=== NEEDBITS(state.extra);
                n = state.extra;
                while (bits < n) {
                  if (have === 0) {break inf_leave;}
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                //===//
                state.offset += hold & (1 << state.extra) - 1 /*BITS(state.extra)*/;
                //--- DROPBITS(state.extra) ---//
                hold >>>= state.extra;
                bits -= state.extra;
                //---//
                state.back += state.extra;
              }
              //#ifdef INFLATE_STRICT
              if (state.offset > state.dmax) {
                strm.msg = 'invalid distance too far back';
                state.mode = BAD;
                break;
              }
              //#endif
              //Tracevv((stderr, "inflate:         distance %u\n", state.offset));
              state.mode = MATCH;
            /* falls through */
            case MATCH:
              if (left === 0) {break inf_leave;}
              copy = _out - left;
              if (state.offset > copy) {/* copy from window */
                copy = state.offset - copy;
                if (copy > state.whave) {
                  if (state.sane) {
                    strm.msg = 'invalid distance too far back';
                    state.mode = BAD;
                    break;
                  }
                  // (!) This block is disabled in zlib defaults,
                  // don't enable it for binary compatibility
                  //#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
                  //          Trace((stderr, "inflate.c too far\n"));
                  //          copy -= state.whave;
                  //          if (copy > state.length) { copy = state.length; }
                  //          if (copy > left) { copy = left; }
                  //          left -= copy;
                  //          state.length -= copy;
                  //          do {
                  //            output[put++] = 0;
                  //          } while (--copy);
                  //          if (state.length === 0) { state.mode = LEN; }
                  //          break;
                  //#endif
                }
                if (copy > state.wnext) {
                  copy -= state.wnext;
                  from = state.wsize - copy;
                } else
                {
                  from = state.wnext - copy;
                }
                if (copy > state.length) {copy = state.length;}
                from_source = state.window;
              } else
              {/* copy from output */
                from_source = output;
                from = put - state.offset;
                copy = state.length;
              }
              if (copy > left) {copy = left;}
              left -= copy;
              state.length -= copy;
              do {
                output[put++] = from_source[from++];
              } while (--copy);
              if (state.length === 0) {state.mode = LEN;}
              break;
            case LIT:
              if (left === 0) {break inf_leave;}
              output[put++] = state.length;
              left--;
              state.mode = LEN;
              break;
            case CHECK:
              if (state.wrap) {
                //=== NEEDBITS(32);
                while (bits < 32) {
                  if (have === 0) {break inf_leave;}
                  have--;
                  // Use '|' instead of '+' to make sure that result is signed
                  hold |= input[next++] << bits;
                  bits += 8;
                }
                //===//
                _out -= left;
                strm.total_out += _out;
                state.total += _out;
                if (_out) {
                  strm.adler = state.check =
                  /*UPDATE(state.check, put - _out, _out);*/
                  state.flags ? crc32(state.check, output, _out, put - _out) : adler32(state.check, output, _out, put - _out);

                }
                _out = left;
                // NB: crc32 stored as signed 32-bit int, zswap32 returns signed too
                if ((state.flags ? hold : zswap32(hold)) !== state.check) {
                  strm.msg = 'incorrect data check';
                  state.mode = BAD;
                  break;
                }
                //=== INITBITS();
                hold = 0;
                bits = 0;
                //===//
                //Tracev((stderr, "inflate:   check matches trailer\n"));
              }
              state.mode = LENGTH;
            /* falls through */
            case LENGTH:
              if (state.wrap && state.flags) {
                //=== NEEDBITS(32);
                while (bits < 32) {
                  if (have === 0) {break inf_leave;}
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                //===//
                if (hold !== (state.total & 0xffffffff)) {
                  strm.msg = 'incorrect length check';
                  state.mode = BAD;
                  break;
                }
                //=== INITBITS();
                hold = 0;
                bits = 0;
                //===//
                //Tracev((stderr, "inflate:   length matches trailer\n"));
              }
              state.mode = DONE;
            /* falls through */
            case DONE:
              ret = Z_STREAM_END;
              break inf_leave;
            case BAD:
              ret = Z_DATA_ERROR;
              break inf_leave;
            case MEM:
              return Z_MEM_ERROR;
            case SYNC:
            /* falls through */
            default:
              return Z_STREAM_ERROR;}

        }

        // inf_leave <- here is real place for "goto inf_leave", emulated via "break inf_leave"

        /*
           Return from inflate(), updating the total counts and the check value.
           If there was no progress during the inflate() call, return a buffer
           error.  Call updatewindow() to create and/or update the window state.
           Note: a memory error from inflate() is non-recoverable.
         */

        //--- RESTORE() ---
        strm.next_out = put;
        strm.avail_out = left;
        strm.next_in = next;
        strm.avail_in = have;
        state.hold = hold;
        state.bits = bits;
        //---

        if (state.wsize || _out !== strm.avail_out && state.mode < BAD && (
        state.mode < CHECK || flush !== Z_FINISH)) {
          if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) {
            state.mode = MEM;
            return Z_MEM_ERROR;
          }
        }
        _in -= strm.avail_in;
        _out -= strm.avail_out;
        strm.total_in += _in;
        strm.total_out += _out;
        state.total += _out;
        if (state.wrap && _out) {
          strm.adler = state.check = /*UPDATE(state.check, strm.next_out - _out, _out);*/
          state.flags ? crc32(state.check, output, _out, strm.next_out - _out) : adler32(state.check, output, _out, strm.next_out - _out);
        }
        strm.data_type = state.bits + (state.last ? 64 : 0) + (
        state.mode === TYPE ? 128 : 0) + (
        state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
        if ((_in === 0 && _out === 0 || flush === Z_FINISH) && ret === Z_OK) {
          ret = Z_BUF_ERROR;
        }
        return ret;
      }

      function inflateEnd(strm) {

        if (!strm || !strm.state /*|| strm->zfree == (free_func)0*/) {
            return Z_STREAM_ERROR;
          }

        var state = strm.state;
        if (state.window) {
          state.window = null;
        }
        strm.state = null;
        return Z_OK;
      }

      function inflateGetHeader(strm, head) {
        var state;

        /* check state */
        if (!strm || !strm.state) {return Z_STREAM_ERROR;}
        state = strm.state;
        if ((state.wrap & 2) === 0) {return Z_STREAM_ERROR;}

        /* save header structure */
        state.head = head;
        head.done = false;
        return Z_OK;
      }

      function inflateSetDictionary(strm, dictionary) {
        var dictLength = dictionary.length;

        var state;
        var dictid;
        var ret;

        /* check state */
        if (!strm /* == Z_NULL */ || !strm.state /* == Z_NULL */) {return Z_STREAM_ERROR;}
        state = strm.state;

        if (state.wrap !== 0 && state.mode !== DICT) {
          return Z_STREAM_ERROR;
        }

        /* check for correct dictionary identifier */
        if (state.mode === DICT) {
          dictid = 1; /* adler32(0, null, 0)*/
          /* dictid = adler32(dictid, dictionary, dictLength); */
          dictid = adler32(dictid, dictionary, dictLength, 0);
          if (dictid !== state.check) {
            return Z_DATA_ERROR;
          }
        }
        /* copy dictionary to window using updatewindow(), which will amend the
           existing dictionary if appropriate */
        ret = updatewindow(strm, dictionary, dictLength, dictLength);
        if (ret) {
          state.mode = MEM;
          return Z_MEM_ERROR;
        }
        state.havedict = 1;
        // Tracev((stderr, "inflate:   dictionary set\n"));
        return Z_OK;
      }

      exports.inflateReset = inflateReset;
      exports.inflateReset2 = inflateReset2;
      exports.inflateResetKeep = inflateResetKeep;
      exports.inflateInit = inflateInit;
      exports.inflateInit2 = inflateInit2;
      exports.inflate = inflate;
      exports.inflateEnd = inflateEnd;
      exports.inflateGetHeader = inflateGetHeader;
      exports.inflateSetDictionary = inflateSetDictionary;
      exports.inflateInfo = 'pako inflate (from Nodeca project)';

      /* Not implemented
                                                                  exports.inflateCopy = inflateCopy;
                                                                  exports.inflateGetDictionary = inflateGetDictionary;
                                                                  exports.inflateMark = inflateMark;
                                                                  exports.inflatePrime = inflatePrime;
                                                                  exports.inflateSync = inflateSync;
                                                                  exports.inflateSyncPoint = inflateSyncPoint;
                                                                  exports.inflateUndermine = inflateUndermine;
                                                                  */

    }, { "../utils/common": 3, "./adler32": 5, "./crc32": 7, "./inffast": 10, "./inftrees": 12 }], 12: [function (require, module, exports) {
      'use strict';

      // (C) 1995-2013 Jean-loup Gailly and Mark Adler
      // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
      //
      // This software is provided 'as-is', without any express or implied
      // warranty. In no event will the authors be held liable for any damages
      // arising from the use of this software.
      //
      // Permission is granted to anyone to use this software for any purpose,
      // including commercial applications, and to alter it and redistribute it
      // freely, subject to the following restrictions:
      //
      // 1. The origin of this software must not be misrepresented; you must not
      //   claim that you wrote the original software. If you use this software
      //   in a product, an acknowledgment in the product documentation would be
      //   appreciated but is not required.
      // 2. Altered source versions must be plainly marked as such, and must not be
      //   misrepresented as being the original software.
      // 3. This notice may not be removed or altered from any source distribution.

      var utils = require('../utils/common');

      var MAXBITS = 15;
      var ENOUGH_LENS = 852;
      var ENOUGH_DISTS = 592;
      //var ENOUGH = (ENOUGH_LENS+ENOUGH_DISTS);

      var CODES = 0;
      var LENS = 1;
      var DISTS = 2;

      var lbase = [/* Length codes 257..285 base */
      3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31,
      35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0];


      var lext = [/* Length codes 257..285 extra */
      16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18,
      19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78];


      var dbase = [/* Distance codes 0..29 base */
      1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193,
      257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145,
      8193, 12289, 16385, 24577, 0, 0];


      var dext = [/* Distance codes 0..29 extra */
      16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22,
      23, 23, 24, 24, 25, 25, 26, 26, 27, 27,
      28, 28, 29, 29, 64, 64];


      module.exports = function inflate_table(type, lens, lens_index, codes, table, table_index, work, opts)
      {
        var bits = opts.bits;
        //here = opts.here; /* table entry for duplication */

        var len = 0; /* a code's length in bits */
        var sym = 0; /* index of code symbols */
        var min = 0,max = 0; /* minimum and maximum code lengths */
        var root = 0; /* number of index bits for root table */
        var curr = 0; /* number of index bits for current table */
        var drop = 0; /* code bits to drop for sub-table */
        var left = 0; /* number of prefix codes available */
        var used = 0; /* code entries in table used */
        var huff = 0; /* Huffman code */
        var incr; /* for incrementing code, index */
        var fill; /* index for replicating entries */
        var low; /* low bits for current root entry */
        var mask; /* mask for low root bits */
        var next; /* next available space in table */
        var base = null; /* base value table to use */
        var base_index = 0;
        //  var shoextra;    /* extra bits table to use */
        var end; /* use base and extra for symbol > end */
        var count = new utils.Buf16(MAXBITS + 1); //[MAXBITS+1];    /* number of codes of each length */
        var offs = new utils.Buf16(MAXBITS + 1); //[MAXBITS+1];     /* offsets in table for each length */
        var extra = null;
        var extra_index = 0;

        var here_bits, here_op, here_val;

        /*
                                           Process a set of code lengths to create a canonical Huffman code.  The
                                           code lengths are lens[0..codes-1].  Each length corresponds to the
                                           symbols 0..codes-1.  The Huffman code is generated by first sorting the
                                           symbols by length from short to long, and retaining the symbol order
                                           for codes with equal lengths.  Then the code starts with all zero bits
                                           for the first code of the shortest length, and the codes are integer
                                           increments for the same length, and zeros are appended as the length
                                           increases.  For the deflate format, these bits are stored backwards
                                           from their more natural integer increment ordering, and so when the
                                           decoding tables are built in the large loop below, the integer codes
                                           are incremented backwards.
                                            This routine assumes, but does not check, that all of the entries in
                                           lens[] are in the range 0..MAXBITS.  The caller must assure this.
                                           1..MAXBITS is interpreted as that code length.  zero means that that
                                           symbol does not occur in this code.
                                            The codes are sorted by computing a count of codes for each length,
                                           creating from that a table of starting indices for each length in the
                                           sorted table, and then entering the symbols in order in the sorted
                                           table.  The sorted table is work[], with that space being provided by
                                           the caller.
                                            The length counts are used for other purposes as well, i.e. finding
                                           the minimum and maximum length codes, determining if there are any
                                           codes at all, checking for a valid set of lengths, and looking ahead
                                           at length counts to determine sub-table sizes when building the
                                           decoding tables.
                                           */




        /* accumulate lengths for codes (assumes lens[] all in 0..MAXBITS) */
        for (len = 0; len <= MAXBITS; len++) {
          count[len] = 0;
        }
        for (sym = 0; sym < codes; sym++) {
          count[lens[lens_index + sym]]++;
        }

        /* bound code lengths, force root to be within code lengths */
        root = bits;
        for (max = MAXBITS; max >= 1; max--) {
          if (count[max] !== 0) {break;}
        }
        if (root > max) {
          root = max;
        }
        if (max === 0) {/* no symbols to code at all */
          //table.op[opts.table_index] = 64;  //here.op = (var char)64;    /* invalid code marker */
          //table.bits[opts.table_index] = 1;   //here.bits = (var char)1;
          //table.val[opts.table_index++] = 0;   //here.val = (var short)0;
          table[table_index++] = 1 << 24 | 64 << 16 | 0;


          //table.op[opts.table_index] = 64;
          //table.bits[opts.table_index] = 1;
          //table.val[opts.table_index++] = 0;
          table[table_index++] = 1 << 24 | 64 << 16 | 0;

          opts.bits = 1;
          return 0; /* no symbols, but wait for decoding to report error */
        }
        for (min = 1; min < max; min++) {
          if (count[min] !== 0) {break;}
        }
        if (root < min) {
          root = min;
        }

        /* check for an over-subscribed or incomplete set of lengths */
        left = 1;
        for (len = 1; len <= MAXBITS; len++) {
          left <<= 1;
          left -= count[len];
          if (left < 0) {
            return -1;
          } /* over-subscribed */
        }
        if (left > 0 && (type === CODES || max !== 1)) {
          return -1; /* incomplete set */
        }

        /* generate offsets into symbol table for each length for sorting */
        offs[1] = 0;
        for (len = 1; len < MAXBITS; len++) {
          offs[len + 1] = offs[len] + count[len];
        }

        /* sort symbols by length, by symbol order within each length */
        for (sym = 0; sym < codes; sym++) {
          if (lens[lens_index + sym] !== 0) {
            work[offs[lens[lens_index + sym]]++] = sym;
          }
        }

        /*
           Create and fill in decoding tables.  In this loop, the table being
           filled is at next and has curr index bits.  The code being used is huff
           with length len.  That code is converterd to an index by dropping drop
           bits off of the bottom.  For codes where len is less than drop + curr,
           those top drop + curr - len bits are incremented through all values to
           fill the table with replicated entries.
            root is the number of index bits for the root table.  When len exceeds
           root, sub-tables are created pointed to by the root entry with an index
           of the low root bits of huff.  This is saved in low to check for when a
           new sub-table should be started.  drop is zero when the root table is
           being filled, and drop is root when sub-tables are being filled.
            When a new sub-table is needed, it is necessary to look ahead in the
           code lengths to determine what size sub-table is needed.  The length
           counts are used for this, and so count[] is decremented as codes are
           entered in the tables.
            used keeps track of how many table entries have been allocated from the
           provided *table space.  It is checked for LENS and DIST tables against
           the constants ENOUGH_LENS and ENOUGH_DISTS to guard against changes in
           the initial root table size constants.  See the comments in inftrees.h
           for more information.
            sym increments through all symbols, and the loop terminates when
           all codes of length max, i.e. all codes, have been processed.  This
           routine permits incomplete codes, so another loop after this one fills
           in the rest of the decoding tables with invalid code markers.
           */





        /* set up for code type */
        // poor man optimization - use if-else instead of switch,
        // to avoid deopts in old v8
        if (type === CODES) {
          base = extra = work; /* dummy value--not used */
          end = 19;

        } else if (type === LENS) {
          base = lbase;
          base_index -= 257;
          extra = lext;
          extra_index -= 257;
          end = 256;

        } else {/* DISTS */
          base = dbase;
          extra = dext;
          end = -1;
        }

        /* initialize opts for loop */
        huff = 0; /* starting code */
        sym = 0; /* starting code symbol */
        len = min; /* starting code length */
        next = table_index; /* current table to fill in */
        curr = root; /* current table index bits */
        drop = 0; /* current bits to drop from code for index */
        low = -1; /* trigger new sub-table when len > root */
        used = 1 << root; /* use root table entries */
        mask = used - 1; /* mask for comparing low */

        /* check available table space */
        if (type === LENS && used > ENOUGH_LENS ||
        type === DISTS && used > ENOUGH_DISTS) {
          return 1;
        }

        /* process all codes and make table entries */
        for (;;) {
          /* create table entry */
          here_bits = len - drop;
          if (work[sym] < end) {
            here_op = 0;
            here_val = work[sym];
          } else
          if (work[sym] > end) {
            here_op = extra[extra_index + work[sym]];
            here_val = base[base_index + work[sym]];
          } else
          {
            here_op = 32 + 64; /* end of block */
            here_val = 0;
          }

          /* replicate for those indices with low len bits equal to huff */
          incr = 1 << len - drop;
          fill = 1 << curr;
          min = fill; /* save offset to next table */
          do {
            fill -= incr;
            table[next + (huff >> drop) + fill] = here_bits << 24 | here_op << 16 | here_val | 0;
          } while (fill !== 0);

          /* backwards increment the len-bit code huff */
          incr = 1 << len - 1;
          while (huff & incr) {
            incr >>= 1;
          }
          if (incr !== 0) {
            huff &= incr - 1;
            huff += incr;
          } else {
            huff = 0;
          }

          /* go to next symbol, update count, len */
          sym++;
          if (--count[len] === 0) {
            if (len === max) {break;}
            len = lens[lens_index + work[sym]];
          }

          /* create new sub-table if needed */
          if (len > root && (huff & mask) !== low) {
            /* if first time, transition to sub-tables */
            if (drop === 0) {
              drop = root;
            }

            /* increment past last table */
            next += min; /* here min is 1 << curr */

            /* determine length of next table */
            curr = len - drop;
            left = 1 << curr;
            while (curr + drop < max) {
              left -= count[curr + drop];
              if (left <= 0) {break;}
              curr++;
              left <<= 1;
            }

            /* check for enough space */
            used += 1 << curr;
            if (type === LENS && used > ENOUGH_LENS ||
            type === DISTS && used > ENOUGH_DISTS) {
              return 1;
            }

            /* point entry in root table to sub-table */
            low = huff & mask;
            /*table.op[low] = curr;
                               table.bits[low] = root;
                               table.val[low] = next - opts.table_index;*/
            table[low] = root << 24 | curr << 16 | next - table_index | 0;
          }
        }

        /* fill in remaining table entry if code is incomplete (guaranteed to have
           at most one remaining entry, since if the code is incomplete, the
           maximum code length that was allowed to get this far is one bit) */
        if (huff !== 0) {
          //table.op[next + huff] = 64;            /* invalid code marker */
          //table.bits[next + huff] = len - drop;
          //table.val[next + huff] = 0;
          table[next + huff] = len - drop << 24 | 64 << 16 | 0;
        }

        /* set return parameters */
        //opts.table_index += used;
        opts.bits = root;
        return 0;
      };

    }, { "../utils/common": 3 }], 13: [function (require, module, exports) {
      'use strict';

      // (C) 1995-2013 Jean-loup Gailly and Mark Adler
      // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
      //
      // This software is provided 'as-is', without any express or implied
      // warranty. In no event will the authors be held liable for any damages
      // arising from the use of this software.
      //
      // Permission is granted to anyone to use this software for any purpose,
      // including commercial applications, and to alter it and redistribute it
      // freely, subject to the following restrictions:
      //
      // 1. The origin of this software must not be misrepresented; you must not
      //   claim that you wrote the original software. If you use this software
      //   in a product, an acknowledgment in the product documentation would be
      //   appreciated but is not required.
      // 2. Altered source versions must be plainly marked as such, and must not be
      //   misrepresented as being the original software.
      // 3. This notice may not be removed or altered from any source distribution.

      module.exports = {
        2: 'need dictionary', /* Z_NEED_DICT       2  */
        1: 'stream end', /* Z_STREAM_END      1  */
        0: '', /* Z_OK              0  */
        '-1': 'file error', /* Z_ERRNO         (-1) */
        '-2': 'stream error', /* Z_STREAM_ERROR  (-2) */
        '-3': 'data error', /* Z_DATA_ERROR    (-3) */
        '-4': 'insufficient memory', /* Z_MEM_ERROR     (-4) */
        '-5': 'buffer error', /* Z_BUF_ERROR     (-5) */
        '-6': 'incompatible version' /* Z_VERSION_ERROR (-6) */ };


    }, {}], 14: [function (require, module, exports) {
      'use strict';

      // (C) 1995-2013 Jean-loup Gailly and Mark Adler
      // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
      //
      // This software is provided 'as-is', without any express or implied
      // warranty. In no event will the authors be held liable for any damages
      // arising from the use of this software.
      //
      // Permission is granted to anyone to use this software for any purpose,
      // including commercial applications, and to alter it and redistribute it
      // freely, subject to the following restrictions:
      //
      // 1. The origin of this software must not be misrepresented; you must not
      //   claim that you wrote the original software. If you use this software
      //   in a product, an acknowledgment in the product documentation would be
      //   appreciated but is not required.
      // 2. Altered source versions must be plainly marked as such, and must not be
      //   misrepresented as being the original software.
      // 3. This notice may not be removed or altered from any source distribution.

      var utils = require('../utils/common');

      /* Public constants ==========================================================*/
      /* ===========================================================================*/


      //var Z_FILTERED          = 1;
      //var Z_HUFFMAN_ONLY      = 2;
      //var Z_RLE               = 3;
      var Z_FIXED = 4;
      //var Z_DEFAULT_STRATEGY  = 0;

      /* Possible values of the data_type field (though see inflate()) */
      var Z_BINARY = 0;
      var Z_TEXT = 1;
      //var Z_ASCII             = 1; // = Z_TEXT
      var Z_UNKNOWN = 2;

      /*============================================================================*/


      function zero(buf) {var len = buf.length;while (--len >= 0) {buf[len] = 0;}}

      // From zutil.h

      var STORED_BLOCK = 0;
      var STATIC_TREES = 1;
      var DYN_TREES = 2;
      /* The three kinds of block type */

      var MIN_MATCH = 3;
      var MAX_MATCH = 258;
      /* The minimum and maximum match lengths */

      // From deflate.h
      /* ===========================================================================
       * Internal compression state.
       */

      var LENGTH_CODES = 29;
      /* number of length codes, not counting the special END_BLOCK code */

      var LITERALS = 256;
      /* number of literal bytes 0..255 */

      var L_CODES = LITERALS + 1 + LENGTH_CODES;
      /* number of Literal or Length codes, including the END_BLOCK code */

      var D_CODES = 30;
      /* number of distance codes */

      var BL_CODES = 19;
      /* number of codes used to transfer the bit lengths */

      var HEAP_SIZE = 2 * L_CODES + 1;
      /* maximum heap size */

      var MAX_BITS = 15;
      /* All codes must not exceed MAX_BITS bits */

      var Buf_size = 16;
      /* size of bit buffer in bi_buf */


      /* ===========================================================================
                                          * Constants
                                          */

      var MAX_BL_BITS = 7;
      /* Bit length codes must not exceed MAX_BL_BITS bits */

      var END_BLOCK = 256;
      /* end of block literal code */

      var REP_3_6 = 16;
      /* repeat previous bit length 3-6 times (2 bits of repeat count) */

      var REPZ_3_10 = 17;
      /* repeat a zero length 3-10 times  (3 bits of repeat count) */

      var REPZ_11_138 = 18;
      /* repeat a zero length 11-138 times  (7 bits of repeat count) */

      /* eslint-disable comma-spacing,array-bracket-spacing */
      var extra_lbits = /* extra bits for each length code */
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0];

      var extra_dbits = /* extra bits for each distance code */
      [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];

      var extra_blbits = /* extra bits for each bit length code */
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7];

      var bl_order =
      [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
      /* eslint-enable comma-spacing,array-bracket-spacing */

      /* The lengths of the bit length codes are sent in order of decreasing
                                                               * probability, to avoid transmitting the lengths for unused bit length codes.
                                                               */

      /* ===========================================================================
                                                                   * Local data. These are initialized only once.
                                                                   */

      // We pre-fill arrays with 0 to avoid uninitialized gaps

      var DIST_CODE_LEN = 512; /* see definition of array dist_code below */

      // !!!! Use flat array instead of structure, Freq = i*2, Len = i*2+1
      var static_ltree = new Array((L_CODES + 2) * 2);
      zero(static_ltree);
      /* The static literal tree. Since the bit lengths are imposed, there is no
                           * need for the L_CODES extra codes used during heap construction. However
                           * The codes 286 and 287 are needed to build a canonical tree (see _tr_init
                           * below).
                           */

      var static_dtree = new Array(D_CODES * 2);
      zero(static_dtree);
      /* The static distance tree. (Actually a trivial tree since all codes use
                           * 5 bits.)
                           */

      var _dist_code = new Array(DIST_CODE_LEN);
      zero(_dist_code);
      /* Distance codes. The first 256 values correspond to the distances
                         * 3 .. 258, the last 256 values correspond to the top 8 bits of
                         * the 15 bit distances.
                         */

      var _length_code = new Array(MAX_MATCH - MIN_MATCH + 1);
      zero(_length_code);
      /* length code for each normalized match length (0 == MIN_MATCH) */

      var base_length = new Array(LENGTH_CODES);
      zero(base_length);
      /* First normalized length for each code (0 = MIN_MATCH) */

      var base_dist = new Array(D_CODES);
      zero(base_dist);
      /* First normalized distance for each code (0 = distance of 1) */


      function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {

        this.static_tree = static_tree; /* static tree or NULL */
        this.extra_bits = extra_bits; /* extra bits for each code or NULL */
        this.extra_base = extra_base; /* base index for extra_bits */
        this.elems = elems; /* max number of elements in the tree */
        this.max_length = max_length; /* max bit length for the codes */

        // show if `static_tree` has data or dummy - needed for monomorphic objects
        this.has_stree = static_tree && static_tree.length;
      }


      var static_l_desc;
      var static_d_desc;
      var static_bl_desc;


      function TreeDesc(dyn_tree, stat_desc) {
        this.dyn_tree = dyn_tree; /* the dynamic tree */
        this.max_code = 0; /* largest code with non zero frequency */
        this.stat_desc = stat_desc; /* the corresponding static tree */
      }



      function d_code(dist) {
        return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
      }


      /* ===========================================================================
         * Output a short LSB first on the stream.
         * IN assertion: there is enough room in pendingBuf.
         */
      function put_short(s, w) {
        //    put_byte(s, (uch)((w) & 0xff));
        //    put_byte(s, (uch)((ush)(w) >> 8));
        s.pending_buf[s.pending++] = w & 0xff;
        s.pending_buf[s.pending++] = w >>> 8 & 0xff;
      }


      /* ===========================================================================
         * Send a value on a given number of bits.
         * IN assertion: length <= 16 and value fits in length bits.
         */
      function send_bits(s, value, length) {
        if (s.bi_valid > Buf_size - length) {
          s.bi_buf |= value << s.bi_valid & 0xffff;
          put_short(s, s.bi_buf);
          s.bi_buf = value >> Buf_size - s.bi_valid;
          s.bi_valid += length - Buf_size;
        } else {
          s.bi_buf |= value << s.bi_valid & 0xffff;
          s.bi_valid += length;
        }
      }


      function send_code(s, c, tree) {
        send_bits(s, tree[c * 2] /*.Code*/, tree[c * 2 + 1] /*.Len*/);
      }


      /* ===========================================================================
         * Reverse the first len bits of a code, using straightforward code (a faster
         * method would use a table)
         * IN assertion: 1 <= len <= 15
         */
      function bi_reverse(code, len) {
        var res = 0;
        do {
          res |= code & 1;
          code >>>= 1;
          res <<= 1;
        } while (--len > 0);
        return res >>> 1;
      }


      /* ===========================================================================
         * Flush the bit buffer, keeping at most 7 bits in it.
         */
      function bi_flush(s) {
        if (s.bi_valid === 16) {
          put_short(s, s.bi_buf);
          s.bi_buf = 0;
          s.bi_valid = 0;

        } else if (s.bi_valid >= 8) {
          s.pending_buf[s.pending++] = s.bi_buf & 0xff;
          s.bi_buf >>= 8;
          s.bi_valid -= 8;
        }
      }


      /* ===========================================================================
         * Compute the optimal bit lengths for a tree and update the total bit length
         * for the current block.
         * IN assertion: the fields freq and dad are set, heap[heap_max] and
         *    above are the tree nodes sorted by increasing frequency.
         * OUT assertions: the field len is set to the optimal bit length, the
         *     array bl_count contains the frequencies for each bit length.
         *     The length opt_len is updated; static_len is also updated if stree is
         *     not null.
         */
      function gen_bitlen(s, desc)
      //    deflate_state *s;
      //    tree_desc *desc;    /* the tree descriptor */
      {
        var tree = desc.dyn_tree;
        var max_code = desc.max_code;
        var stree = desc.stat_desc.static_tree;
        var has_stree = desc.stat_desc.has_stree;
        var extra = desc.stat_desc.extra_bits;
        var base = desc.stat_desc.extra_base;
        var max_length = desc.stat_desc.max_length;
        var h; /* heap index */
        var n, m; /* iterate over the tree elements */
        var bits; /* bit length */
        var xbits; /* extra bits */
        var f; /* frequency */
        var overflow = 0; /* number of elements with bit length too large */

        for (bits = 0; bits <= MAX_BITS; bits++) {
          s.bl_count[bits] = 0;
        }

        /* In a first pass, compute the optimal bit lengths (which may
           * overflow in the case of the bit length tree).
           */
        tree[s.heap[s.heap_max] * 2 + 1] /*.Len*/ = 0; /* root of the heap */

        for (h = s.heap_max + 1; h < HEAP_SIZE; h++) {
          n = s.heap[h];
          bits = tree[tree[n * 2 + 1] /*.Dad*/ * 2 + 1] /*.Len*/ + 1;
          if (bits > max_length) {
            bits = max_length;
            overflow++;
          }
          tree[n * 2 + 1] /*.Len*/ = bits;
          /* We overwrite tree[n].Dad which is no longer needed */

          if (n > max_code) {continue;} /* not a leaf node */

          s.bl_count[bits]++;
          xbits = 0;
          if (n >= base) {
            xbits = extra[n - base];
          }
          f = tree[n * 2] /*.Freq*/;
          s.opt_len += f * (bits + xbits);
          if (has_stree) {
            s.static_len += f * (stree[n * 2 + 1] /*.Len*/ + xbits);
          }
        }
        if (overflow === 0) {return;}

        // Trace((stderr,"\nbit length overflow\n"));
        /* This happens for example on obj2 and pic of the Calgary corpus */

        /* Find the first bit length which could increase: */
        do {
          bits = max_length - 1;
          while (s.bl_count[bits] === 0) {bits--;}
          s.bl_count[bits]--; /* move one leaf down the tree */
          s.bl_count[bits + 1] += 2; /* move one overflow item as its brother */
          s.bl_count[max_length]--;
          /* The brother of the overflow item also moves one step up,
                                     * but this does not affect bl_count[max_length]
                                     */
          overflow -= 2;
        } while (overflow > 0);

        /* Now recompute all bit lengths, scanning in increasing frequency.
                                 * h is still equal to HEAP_SIZE. (It is simpler to reconstruct all
                                 * lengths instead of fixing only the wrong ones. This idea is taken
                                 * from 'ar' written by Haruhiko Okumura.)
                                 */
        for (bits = max_length; bits !== 0; bits--) {
          n = s.bl_count[bits];
          while (n !== 0) {
            m = s.heap[--h];
            if (m > max_code) {continue;}
            if (tree[m * 2 + 1] /*.Len*/ !== bits) {
              // Trace((stderr,"code %d bits %d->%d\n", m, tree[m].Len, bits));
              s.opt_len += (bits - tree[m * 2 + 1] /*.Len*/) * tree[m * 2] /*.Freq*/;
              tree[m * 2 + 1] /*.Len*/ = bits;
            }
            n--;
          }
        }
      }


      /* ===========================================================================
         * Generate the codes for a given tree and bit counts (which need not be
         * optimal).
         * IN assertion: the array bl_count contains the bit length statistics for
         * the given tree and the field len is set for all tree elements.
         * OUT assertion: the field code is set for all tree elements of non
         *     zero code length.
         */
      function gen_codes(tree, max_code, bl_count)
      //    ct_data *tree;             /* the tree to decorate */
      //    int max_code;              /* largest code with non zero frequency */
      //    ushf *bl_count;            /* number of codes at each bit length */
      {
        var next_code = new Array(MAX_BITS + 1); /* next code value for each bit length */
        var code = 0; /* running code value */
        var bits; /* bit index */
        var n; /* code index */

        /* The distribution counts are first used to generate the code values
                                 * without bit reversal.
                                 */
        for (bits = 1; bits <= MAX_BITS; bits++) {
          next_code[bits] = code = code + bl_count[bits - 1] << 1;
        }
        /* Check that the bit counts in bl_count are consistent. The last code
           * must be all ones.
           */
        //Assert (code + bl_count[MAX_BITS]-1 == (1<<MAX_BITS)-1,
        //        "inconsistent bit counts");
        //Tracev((stderr,"\ngen_codes: max_code %d ", max_code));

        for (n = 0; n <= max_code; n++) {
          var len = tree[n * 2 + 1] /*.Len*/;
          if (len === 0) {continue;}
          /* Now reverse the bits */
          tree[n * 2] /*.Code*/ = bi_reverse(next_code[len]++, len);

          //Tracecv(tree != static_ltree, (stderr,"\nn %3d %c l %2d c %4x (%x) ",
          //     n, (isgraph(n) ? n : ' '), len, tree[n].Code, next_code[len]-1));
        }
      }


      /* ===========================================================================
         * Initialize the various 'constant' tables.
         */
      function tr_static_init() {
        var n; /* iterates over tree elements */
        var bits; /* bit counter */
        var length; /* length value */
        var code; /* code value */
        var dist; /* distance index */
        var bl_count = new Array(MAX_BITS + 1);
        /* number of codes at each bit length for an optimal tree */

        // do check in _tr_init()
        //if (static_init_done) return;

        /* For some embedded targets, global variables are not initialized: */
        /*#ifdef NO_INIT_GLOBAL_POINTERS
                                                                                 static_l_desc.static_tree = static_ltree;
                                                                                 static_l_desc.extra_bits = extra_lbits;
                                                                                 static_d_desc.static_tree = static_dtree;
                                                                                 static_d_desc.extra_bits = extra_dbits;
                                                                                 static_bl_desc.extra_bits = extra_blbits;
                                                                               #endif*/

        /* Initialize the mapping length (0..255) -> length code (0..28) */
        length = 0;
        for (code = 0; code < LENGTH_CODES - 1; code++) {
          base_length[code] = length;
          for (n = 0; n < 1 << extra_lbits[code]; n++) {
            _length_code[length++] = code;
          }
        }
        //Assert (length == 256, "tr_static_init: length != 256");
        /* Note that the length 255 (match length 258) can be represented
         * in two different ways: code 284 + 5 bits or code 285, so we
         * overwrite length_code[255] to use the best encoding:
         */
        _length_code[length - 1] = code;

        /* Initialize the mapping dist (0..32K) -> dist code (0..29) */
        dist = 0;
        for (code = 0; code < 16; code++) {
          base_dist[code] = dist;
          for (n = 0; n < 1 << extra_dbits[code]; n++) {
            _dist_code[dist++] = code;
          }
        }
        //Assert (dist == 256, "tr_static_init: dist != 256");
        dist >>= 7; /* from now on, all distances are divided by 128 */
        for (; code < D_CODES; code++) {
          base_dist[code] = dist << 7;
          for (n = 0; n < 1 << extra_dbits[code] - 7; n++) {
            _dist_code[256 + dist++] = code;
          }
        }
        //Assert (dist == 256, "tr_static_init: 256+dist != 512");

        /* Construct the codes of the static literal tree */
        for (bits = 0; bits <= MAX_BITS; bits++) {
          bl_count[bits] = 0;
        }

        n = 0;
        while (n <= 143) {
          static_ltree[n * 2 + 1] /*.Len*/ = 8;
          n++;
          bl_count[8]++;
        }
        while (n <= 255) {
          static_ltree[n * 2 + 1] /*.Len*/ = 9;
          n++;
          bl_count[9]++;
        }
        while (n <= 279) {
          static_ltree[n * 2 + 1] /*.Len*/ = 7;
          n++;
          bl_count[7]++;
        }
        while (n <= 287) {
          static_ltree[n * 2 + 1] /*.Len*/ = 8;
          n++;
          bl_count[8]++;
        }
        /* Codes 286 and 287 do not exist, but we must include them in the
           * tree construction to get a canonical Huffman tree (longest code
           * all ones)
           */
        gen_codes(static_ltree, L_CODES + 1, bl_count);

        /* The static distance tree is trivial: */
        for (n = 0; n < D_CODES; n++) {
          static_dtree[n * 2 + 1] /*.Len*/ = 5;
          static_dtree[n * 2] /*.Code*/ = bi_reverse(n, 5);
        }

        // Now data ready and we can init static trees
        static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS + 1, L_CODES, MAX_BITS);
        static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0, D_CODES, MAX_BITS);
        static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0, BL_CODES, MAX_BL_BITS);

        //static_init_done = true;
      }


      /* ===========================================================================
         * Initialize a new block.
         */
      function init_block(s) {
        var n; /* iterates over tree elements */

        /* Initialize the trees. */
        for (n = 0; n < L_CODES; n++) {s.dyn_ltree[n * 2] /*.Freq*/ = 0;}
        for (n = 0; n < D_CODES; n++) {s.dyn_dtree[n * 2] /*.Freq*/ = 0;}
        for (n = 0; n < BL_CODES; n++) {s.bl_tree[n * 2] /*.Freq*/ = 0;}

        s.dyn_ltree[END_BLOCK * 2] /*.Freq*/ = 1;
        s.opt_len = s.static_len = 0;
        s.last_lit = s.matches = 0;
      }


      /* ===========================================================================
         * Flush the bit buffer and align the output on a byte boundary
         */
      function bi_windup(s)
      {
        if (s.bi_valid > 8) {
          put_short(s, s.bi_buf);
        } else if (s.bi_valid > 0) {
          //put_byte(s, (Byte)s->bi_buf);
          s.pending_buf[s.pending++] = s.bi_buf;
        }
        s.bi_buf = 0;
        s.bi_valid = 0;
      }

      /* ===========================================================================
         * Copy a stored block, storing first the length and its
         * one's complement if requested.
         */
      function copy_block(s, buf, len, header)
      //DeflateState *s;
      //charf    *buf;    /* the input data */
      //unsigned len;     /* its length */
      //int      header;  /* true if block header must be written */
      {
        bi_windup(s); /* align on byte boundary */

        if (header) {
          put_short(s, len);
          put_short(s, ~len);
        }
        //  while (len--) {
        //    put_byte(s, *buf++);
        //  }
        utils.arraySet(s.pending_buf, s.window, buf, len, s.pending);
        s.pending += len;
      }

      /* ===========================================================================
         * Compares to subtrees, using the tree depth as tie breaker when
         * the subtrees have equal frequency. This minimizes the worst case length.
         */
      function smaller(tree, n, m, depth) {
        var _n2 = n * 2;
        var _m2 = m * 2;
        return tree[_n2] /*.Freq*/ < tree[_m2] /*.Freq*/ ||
        tree[_n2] /*.Freq*/ === tree[_m2] /*.Freq*/ && depth[n] <= depth[m];
      }

      /* ===========================================================================
         * Restore the heap property by moving down the tree starting at node k,
         * exchanging a node with the smallest of its two sons if necessary, stopping
         * when the heap property is re-established (each father smaller than its
         * two sons).
         */
      function pqdownheap(s, tree, k)
      //    deflate_state *s;
      //    ct_data *tree;  /* the tree to restore */
      //    int k;               /* node to move down */
      {
        var v = s.heap[k];
        var j = k << 1; /* left son of k */
        while (j <= s.heap_len) {
          /* Set j to the smallest of the two sons: */
          if (j < s.heap_len &&
          smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) {
            j++;
          }
          /* Exit if v is smaller than both sons */
          if (smaller(tree, v, s.heap[j], s.depth)) {break;}

          /* Exchange v with the smallest son */
          s.heap[k] = s.heap[j];
          k = j;

          /* And continue down the tree, setting j to the left son of k */
          j <<= 1;
        }
        s.heap[k] = v;
      }


      // inlined manually
      // var SMALLEST = 1;

      /* ===========================================================================
       * Send the block data compressed using the given Huffman trees
       */
      function compress_block(s, ltree, dtree)
      //    deflate_state *s;
      //    const ct_data *ltree; /* literal tree */
      //    const ct_data *dtree; /* distance tree */
      {
        var dist; /* distance of matched string */
        var lc; /* match length or unmatched char (if dist == 0) */
        var lx = 0; /* running index in l_buf */
        var code; /* the code to send */
        var extra; /* number of extra bits to send */

        if (s.last_lit !== 0) {
          do {
            dist = s.pending_buf[s.d_buf + lx * 2] << 8 | s.pending_buf[s.d_buf + lx * 2 + 1];
            lc = s.pending_buf[s.l_buf + lx];
            lx++;

            if (dist === 0) {
              send_code(s, lc, ltree); /* send a literal byte */
              //Tracecv(isgraph(lc), (stderr," '%c' ", lc));
            } else {
              /* Here, lc is the match length - MIN_MATCH */
              code = _length_code[lc];
              send_code(s, code + LITERALS + 1, ltree); /* send the length code */
              extra = extra_lbits[code];
              if (extra !== 0) {
                lc -= base_length[code];
                send_bits(s, lc, extra); /* send the extra length bits */
              }
              dist--; /* dist is now the match distance - 1 */
              code = d_code(dist);
              //Assert (code < D_CODES, "bad d_code");

              send_code(s, code, dtree); /* send the distance code */
              extra = extra_dbits[code];
              if (extra !== 0) {
                dist -= base_dist[code];
                send_bits(s, dist, extra); /* send the extra distance bits */
              }
            } /* literal or match pair ? */

            /* Check that the overlay between pending_buf and d_buf+l_buf is ok: */
            //Assert((uInt)(s->pending) < s->lit_bufsize + 2*lx,
            //       "pendingBuf overflow");

          } while (lx < s.last_lit);
        }

        send_code(s, END_BLOCK, ltree);
      }


      /* ===========================================================================
         * Construct one Huffman tree and assigns the code bit strings and lengths.
         * Update the total bit length for the current block.
         * IN assertion: the field freq is set for all tree elements.
         * OUT assertions: the fields len and code are set to the optimal bit length
         *     and corresponding code. The length opt_len is updated; static_len is
         *     also updated if stree is not null. The field max_code is set.
         */
      function build_tree(s, desc)
      //    deflate_state *s;
      //    tree_desc *desc; /* the tree descriptor */
      {
        var tree = desc.dyn_tree;
        var stree = desc.stat_desc.static_tree;
        var has_stree = desc.stat_desc.has_stree;
        var elems = desc.stat_desc.elems;
        var n, m; /* iterate over heap elements */
        var max_code = -1; /* largest code with non zero frequency */
        var node; /* new node being created */

        /* Construct the initial heap, with least frequent element in
                                                * heap[SMALLEST]. The sons of heap[n] are heap[2*n] and heap[2*n+1].
                                                * heap[0] is not used.
                                                */
        s.heap_len = 0;
        s.heap_max = HEAP_SIZE;

        for (n = 0; n < elems; n++) {
          if (tree[n * 2] /*.Freq*/ !== 0) {
            s.heap[++s.heap_len] = max_code = n;
            s.depth[n] = 0;

          } else {
            tree[n * 2 + 1] /*.Len*/ = 0;
          }
        }

        /* The pkzip format requires that at least one distance code exists,
           * and that at least one bit should be sent even if there is only one
           * possible code. So to avoid special checks later on we force at least
           * two codes of non zero frequency.
           */
        while (s.heap_len < 2) {
          node = s.heap[++s.heap_len] = max_code < 2 ? ++max_code : 0;
          tree[node * 2] /*.Freq*/ = 1;
          s.depth[node] = 0;
          s.opt_len--;

          if (has_stree) {
            s.static_len -= stree[node * 2 + 1] /*.Len*/;
          }
          /* node is 0 or 1 so it does not have extra bits */
        }
        desc.max_code = max_code;

        /* The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,
                                   * establish sub-heaps of increasing lengths:
                                   */
        for (n = s.heap_len >> 1 /*int /2*/; n >= 1; n--) {pqdownheap(s, tree, n);}

        /* Construct the Huffman tree by repeatedly combining the least two
                                                                                     * frequent nodes.
                                                                                     */
        node = elems; /* next internal node of the tree */
        do {
          //pqremove(s, tree, n);  /* n = node of least frequency */
          /*** pqremove ***/
          n = s.heap[1 /*SMALLEST*/];
          s.heap[1 /*SMALLEST*/] = s.heap[s.heap_len--];
          pqdownheap(s, tree, 1 /*SMALLEST*/);
          /***/

          m = s.heap[1 /*SMALLEST*/]; /* m = node of next least frequency */

          s.heap[--s.heap_max] = n; /* keep the nodes sorted by frequency */
          s.heap[--s.heap_max] = m;

          /* Create a new node father of n and m */
          tree[node * 2] /*.Freq*/ = tree[n * 2] /*.Freq*/ + tree[m * 2] /*.Freq*/;
          s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
          tree[n * 2 + 1] /*.Dad*/ = tree[m * 2 + 1] /*.Dad*/ = node;

          /* and insert the new node in the heap */
          s.heap[1 /*SMALLEST*/] = node++;
          pqdownheap(s, tree, 1 /*SMALLEST*/);

        } while (s.heap_len >= 2);

        s.heap[--s.heap_max] = s.heap[1 /*SMALLEST*/];

        /* At this point, the fields freq and dad are set. We can now
                                                        * generate the bit lengths.
                                                        */
        gen_bitlen(s, desc);

        /* The field len is now set, we can generate the bit codes */
        gen_codes(tree, max_code, s.bl_count);
      }


      /* ===========================================================================
         * Scan a literal or distance tree to determine the frequencies of the codes
         * in the bit length tree.
         */
      function scan_tree(s, tree, max_code)
      //    deflate_state *s;
      //    ct_data *tree;   /* the tree to be scanned */
      //    int max_code;    /* and its largest code of non zero frequency */
      {
        var n; /* iterates over all tree elements */
        var prevlen = -1; /* last emitted length */
        var curlen; /* length of current code */

        var nextlen = tree[0 * 2 + 1] /*.Len*/; /* length of next code */

        var count = 0; /* repeat count of the current code */
        var max_count = 7; /* max repeat count */
        var min_count = 4; /* min repeat count */

        if (nextlen === 0) {
          max_count = 138;
          min_count = 3;
        }
        tree[(max_code + 1) * 2 + 1] /*.Len*/ = 0xffff; /* guard */

        for (n = 0; n <= max_code; n++) {
          curlen = nextlen;
          nextlen = tree[(n + 1) * 2 + 1] /*.Len*/;

          if (++count < max_count && curlen === nextlen) {
            continue;

          } else if (count < min_count) {
            s.bl_tree[curlen * 2] /*.Freq*/ += count;

          } else if (curlen !== 0) {

            if (curlen !== prevlen) {s.bl_tree[curlen * 2] /*.Freq*/++;}
            s.bl_tree[REP_3_6 * 2] /*.Freq*/++;

          } else if (count <= 10) {
            s.bl_tree[REPZ_3_10 * 2] /*.Freq*/++;

          } else {
            s.bl_tree[REPZ_11_138 * 2] /*.Freq*/++;
          }

          count = 0;
          prevlen = curlen;

          if (nextlen === 0) {
            max_count = 138;
            min_count = 3;

          } else if (curlen === nextlen) {
            max_count = 6;
            min_count = 3;

          } else {
            max_count = 7;
            min_count = 4;
          }
        }
      }


      /* ===========================================================================
         * Send a literal or distance tree in compressed form, using the codes in
         * bl_tree.
         */
      function send_tree(s, tree, max_code)
      //    deflate_state *s;
      //    ct_data *tree; /* the tree to be scanned */
      //    int max_code;       /* and its largest code of non zero frequency */
      {
        var n; /* iterates over all tree elements */
        var prevlen = -1; /* last emitted length */
        var curlen; /* length of current code */

        var nextlen = tree[0 * 2 + 1] /*.Len*/; /* length of next code */

        var count = 0; /* repeat count of the current code */
        var max_count = 7; /* max repeat count */
        var min_count = 4; /* min repeat count */

        /* tree[max_code+1].Len = -1; */ /* guard already set */
        if (nextlen === 0) {
          max_count = 138;
          min_count = 3;
        }

        for (n = 0; n <= max_code; n++) {
          curlen = nextlen;
          nextlen = tree[(n + 1) * 2 + 1] /*.Len*/;

          if (++count < max_count && curlen === nextlen) {
            continue;

          } else if (count < min_count) {
            do {send_code(s, curlen, s.bl_tree);} while (--count !== 0);

          } else if (curlen !== 0) {
            if (curlen !== prevlen) {
              send_code(s, curlen, s.bl_tree);
              count--;
            }
            //Assert(count >= 3 && count <= 6, " 3_6?");
            send_code(s, REP_3_6, s.bl_tree);
            send_bits(s, count - 3, 2);

          } else if (count <= 10) {
            send_code(s, REPZ_3_10, s.bl_tree);
            send_bits(s, count - 3, 3);

          } else {
            send_code(s, REPZ_11_138, s.bl_tree);
            send_bits(s, count - 11, 7);
          }

          count = 0;
          prevlen = curlen;
          if (nextlen === 0) {
            max_count = 138;
            min_count = 3;

          } else if (curlen === nextlen) {
            max_count = 6;
            min_count = 3;

          } else {
            max_count = 7;
            min_count = 4;
          }
        }
      }


      /* ===========================================================================
         * Construct the Huffman tree for the bit lengths and return the index in
         * bl_order of the last bit length code to send.
         */
      function build_bl_tree(s) {
        var max_blindex; /* index of last bit length code of non zero freq */

        /* Determine the bit length frequencies for literal and distance trees */
        scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
        scan_tree(s, s.dyn_dtree, s.d_desc.max_code);

        /* Build the bit length tree: */
        build_tree(s, s.bl_desc);
        /* opt_len now includes the length of the tree representations, except
                                   * the lengths of the bit lengths codes and the 5+5+4 bits for the counts.
                                   */

        /* Determine the number of bit length codes to send. The pkzip format
                                       * requires that at least 4 bit length codes be sent. (appnote.txt says
                                       * 3 but the actual value used is 4.)
                                       */
        for (max_blindex = BL_CODES - 1; max_blindex >= 3; max_blindex--) {
          if (s.bl_tree[bl_order[max_blindex] * 2 + 1] /*.Len*/ !== 0) {
            break;
          }
        }
        /* Update opt_len to include the bit length tree and counts */
        s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
        //Tracev((stderr, "\ndyn trees: dyn %ld, stat %ld",
        //        s->opt_len, s->static_len));

        return max_blindex;
      }


      /* ===========================================================================
         * Send the header for a block using dynamic Huffman trees: the counts, the
         * lengths of the bit length codes, the literal tree and the distance tree.
         * IN assertion: lcodes >= 257, dcodes >= 1, blcodes >= 4.
         */
      function send_all_trees(s, lcodes, dcodes, blcodes)
      //    deflate_state *s;
      //    int lcodes, dcodes, blcodes; /* number of codes for each tree */
      {
        var rank; /* index in bl_order */

        //Assert (lcodes >= 257 && dcodes >= 1 && blcodes >= 4, "not enough codes");
        //Assert (lcodes <= L_CODES && dcodes <= D_CODES && blcodes <= BL_CODES,
        //        "too many codes");
        //Tracev((stderr, "\nbl counts: "));
        send_bits(s, lcodes - 257, 5); /* not +255 as stated in appnote.txt */
        send_bits(s, dcodes - 1, 5);
        send_bits(s, blcodes - 4, 4); /* not -3 as stated in appnote.txt */
        for (rank = 0; rank < blcodes; rank++) {
          //Tracev((stderr, "\nbl code %2d ", bl_order[rank]));
          send_bits(s, s.bl_tree[bl_order[rank] * 2 + 1] /*.Len*/, 3);
        }
        //Tracev((stderr, "\nbl tree: sent %ld", s->bits_sent));

        send_tree(s, s.dyn_ltree, lcodes - 1); /* literal tree */
        //Tracev((stderr, "\nlit tree: sent %ld", s->bits_sent));

        send_tree(s, s.dyn_dtree, dcodes - 1); /* distance tree */
        //Tracev((stderr, "\ndist tree: sent %ld", s->bits_sent));
      }


      /* ===========================================================================
         * Check if the data type is TEXT or BINARY, using the following algorithm:
         * - TEXT if the two conditions below are satisfied:
         *    a) There are no non-portable control characters belonging to the
         *       "black list" (0..6, 14..25, 28..31).
         *    b) There is at least one printable character belonging to the
         *       "white list" (9 {TAB}, 10 {LF}, 13 {CR}, 32..255).
         * - BINARY otherwise.
         * - The following partially-portable control characters form a
         *   "gray list" that is ignored in this detection algorithm:
         *   (7 {BEL}, 8 {BS}, 11 {VT}, 12 {FF}, 26 {SUB}, 27 {ESC}).
         * IN assertion: the fields Freq of dyn_ltree are set.
         */
      function detect_data_type(s) {
        /* black_mask is the bit mask of black-listed bytes
                                     * set bits 0..6, 14..25, and 28..31
                                     * 0xf3ffc07f = binary 11110011111111111100000001111111
                                     */
        var black_mask = 0xf3ffc07f;
        var n;

        /* Check for non-textual ("black-listed") bytes. */
        for (n = 0; n <= 31; n++, black_mask >>>= 1) {
          if (black_mask & 1 && s.dyn_ltree[n * 2] /*.Freq*/ !== 0) {
            return Z_BINARY;
          }
        }

        /* Check for textual ("white-listed") bytes. */
        if (s.dyn_ltree[9 * 2] /*.Freq*/ !== 0 || s.dyn_ltree[10 * 2] /*.Freq*/ !== 0 ||
        s.dyn_ltree[13 * 2] /*.Freq*/ !== 0) {
          return Z_TEXT;
        }
        for (n = 32; n < LITERALS; n++) {
          if (s.dyn_ltree[n * 2] /*.Freq*/ !== 0) {
            return Z_TEXT;
          }
        }

        /* There are no "black-listed" or "white-listed" bytes:
           * this stream either is empty or has tolerated ("gray-listed") bytes only.
           */
        return Z_BINARY;
      }


      var static_init_done = false;

      /* ===========================================================================
                                     * Initialize the tree data structures for a new zlib stream.
                                     */
      function _tr_init(s)
      {

        if (!static_init_done) {
          tr_static_init();
          static_init_done = true;
        }

        s.l_desc = new TreeDesc(s.dyn_ltree, static_l_desc);
        s.d_desc = new TreeDesc(s.dyn_dtree, static_d_desc);
        s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);

        s.bi_buf = 0;
        s.bi_valid = 0;

        /* Initialize the first block of the first file: */
        init_block(s);
      }


      /* ===========================================================================
         * Send a stored block
         */
      function _tr_stored_block(s, buf, stored_len, last)
      //DeflateState *s;
      //charf *buf;       /* input block */
      //ulg stored_len;   /* length of input block */
      //int last;         /* one if this is the last block for a file */
      {
        send_bits(s, (STORED_BLOCK << 1) + (last ? 1 : 0), 3); /* send block type */
        copy_block(s, buf, stored_len, true); /* with header */
      }


      /* ===========================================================================
         * Send one empty static block to give enough lookahead for inflate.
         * This takes 10 bits, of which 7 may remain in the bit buffer.
         */
      function _tr_align(s) {
        send_bits(s, STATIC_TREES << 1, 3);
        send_code(s, END_BLOCK, static_ltree);
        bi_flush(s);
      }


      /* ===========================================================================
         * Determine the best encoding for the current block: dynamic trees, static
         * trees or store, and output the encoded block to the zip file.
         */
      function _tr_flush_block(s, buf, stored_len, last)
      //DeflateState *s;
      //charf *buf;       /* input block, or NULL if too old */
      //ulg stored_len;   /* length of input block */
      //int last;         /* one if this is the last block for a file */
      {
        var opt_lenb, static_lenb; /* opt_len and static_len in bytes */
        var max_blindex = 0; /* index of last bit length code of non zero freq */

        /* Build the Huffman trees unless a stored block is forced */
        if (s.level > 0) {

          /* Check if the file is binary or text */
          if (s.strm.data_type === Z_UNKNOWN) {
            s.strm.data_type = detect_data_type(s);
          }

          /* Construct the literal and distance trees */
          build_tree(s, s.l_desc);
          // Tracev((stderr, "\nlit data: dyn %ld, stat %ld", s->opt_len,
          //        s->static_len));

          build_tree(s, s.d_desc);
          // Tracev((stderr, "\ndist data: dyn %ld, stat %ld", s->opt_len,
          //        s->static_len));
          /* At this point, opt_len and static_len are the total bit lengths of
           * the compressed block data, excluding the tree representations.
           */

          /* Build the bit length tree for the above two trees, and get the index
               * in bl_order of the last bit length code to send.
               */
          max_blindex = build_bl_tree(s);

          /* Determine the best encoding. Compute the block lengths in bytes. */
          opt_lenb = s.opt_len + 3 + 7 >>> 3;
          static_lenb = s.static_len + 3 + 7 >>> 3;

          // Tracev((stderr, "\nopt %lu(%lu) stat %lu(%lu) stored %lu lit %u ",
          //        opt_lenb, s->opt_len, static_lenb, s->static_len, stored_len,
          //        s->last_lit));

          if (static_lenb <= opt_lenb) {opt_lenb = static_lenb;}

        } else {
          // Assert(buf != (char*)0, "lost buf");
          opt_lenb = static_lenb = stored_len + 5; /* force a stored block */
        }

        if (stored_len + 4 <= opt_lenb && buf !== -1) {
          /* 4: two words for the lengths */

          /* The test buf != NULL is only necessary if LIT_BUFSIZE > WSIZE.
                                              * Otherwise we can't have processed more than WSIZE input bytes since
                                              * the last block flush, because compression would have been
                                              * successful. If LIT_BUFSIZE <= WSIZE, it is never too late to
                                              * transform a block into a stored block.
                                              */
          _tr_stored_block(s, buf, stored_len, last);

        } else if (s.strategy === Z_FIXED || static_lenb === opt_lenb) {

          send_bits(s, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
          compress_block(s, static_ltree, static_dtree);

        } else {
          send_bits(s, (DYN_TREES << 1) + (last ? 1 : 0), 3);
          send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
          compress_block(s, s.dyn_ltree, s.dyn_dtree);
        }
        // Assert (s->compressed_len == s->bits_sent, "bad compressed size");
        /* The above check is made mod 2^32, for files larger than 512 MB
         * and uLong implemented on 32 bits.
         */
        init_block(s);

        if (last) {
          bi_windup(s);
        }
        // Tracev((stderr,"\ncomprlen %lu(%lu) ", s->compressed_len>>3,
        //       s->compressed_len-7*last));
      }

      /* ===========================================================================
         * Save the match info and tally the frequency counts. Return true if
         * the current block must be flushed.
         */
      function _tr_tally(s, dist, lc)
      //    deflate_state *s;
      //    unsigned dist;  /* distance of matched string */
      //    unsigned lc;    /* match length-MIN_MATCH or unmatched char (if dist==0) */
      {
        //var out_length, in_length, dcode;

        s.pending_buf[s.d_buf + s.last_lit * 2] = dist >>> 8 & 0xff;
        s.pending_buf[s.d_buf + s.last_lit * 2 + 1] = dist & 0xff;

        s.pending_buf[s.l_buf + s.last_lit] = lc & 0xff;
        s.last_lit++;

        if (dist === 0) {
          /* lc is the unmatched char */
          s.dyn_ltree[lc * 2] /*.Freq*/++;
        } else {
          s.matches++;
          /* Here, lc is the match length - MIN_MATCH */
          dist--; /* dist = match distance - 1 */
          //Assert((ush)dist < (ush)MAX_DIST(s) &&
          //       (ush)lc <= (ush)(MAX_MATCH-MIN_MATCH) &&
          //       (ush)d_code(dist) < (ush)D_CODES,  "_tr_tally: bad match");

          s.dyn_ltree[(_length_code[lc] + LITERALS + 1) * 2] /*.Freq*/++;
          s.dyn_dtree[d_code(dist) * 2] /*.Freq*/++;
        }

        // (!) This block is disabled in zlib defaults,
        // don't enable it for binary compatibility

        //#ifdef TRUNCATE_BLOCK
        //  /* Try to guess if it is profitable to stop the current block here */
        //  if ((s.last_lit & 0x1fff) === 0 && s.level > 2) {
        //    /* Compute an upper bound for the compressed length */
        //    out_length = s.last_lit*8;
        //    in_length = s.strstart - s.block_start;
        //
        //    for (dcode = 0; dcode < D_CODES; dcode++) {
        //      out_length += s.dyn_dtree[dcode*2]/*.Freq*/ * (5 + extra_dbits[dcode]);
        //    }
        //    out_length >>>= 3;
        //    //Tracev((stderr,"\nlast_lit %u, in %ld, out ~%ld(%ld%%) ",
        //    //       s->last_lit, in_length, out_length,
        //    //       100L - out_length*100L/in_length));
        //    if (s.matches < (s.last_lit>>1)/*int /2*/ && out_length < (in_length>>1)/*int /2*/) {
        //      return true;
        //    }
        //  }
        //#endif

        return s.last_lit === s.lit_bufsize - 1;
        /* We avoid equality with lit_bufsize because of wraparound at 64K
                                                  * on 16 bit machines and because stored blocks are restricted to
                                                  * 64K-1 bytes.
                                                  */
      }

      exports._tr_init = _tr_init;
      exports._tr_stored_block = _tr_stored_block;
      exports._tr_flush_block = _tr_flush_block;
      exports._tr_tally = _tr_tally;
      exports._tr_align = _tr_align;

    }, { "../utils/common": 3 }], 15: [function (require, module, exports) {
      'use strict';

      // (C) 1995-2013 Jean-loup Gailly and Mark Adler
      // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
      //
      // This software is provided 'as-is', without any express or implied
      // warranty. In no event will the authors be held liable for any damages
      // arising from the use of this software.
      //
      // Permission is granted to anyone to use this software for any purpose,
      // including commercial applications, and to alter it and redistribute it
      // freely, subject to the following restrictions:
      //
      // 1. The origin of this software must not be misrepresented; you must not
      //   claim that you wrote the original software. If you use this software
      //   in a product, an acknowledgment in the product documentation would be
      //   appreciated but is not required.
      // 2. Altered source versions must be plainly marked as such, and must not be
      //   misrepresented as being the original software.
      // 3. This notice may not be removed or altered from any source distribution.

      function ZStream() {
        /* next input byte */
        this.input = null; // JS specific, because we have no pointers
        this.next_in = 0;
        /* number of bytes available at input */
        this.avail_in = 0;
        /* total number of input bytes read so far */
        this.total_in = 0;
        /* next output byte should be put there */
        this.output = null; // JS specific, because we have no pointers
        this.next_out = 0;
        /* remaining free space at output */
        this.avail_out = 0;
        /* total number of bytes output so far */
        this.total_out = 0;
        /* last error message, NULL if no error */
        this.msg = '' /*Z_NULL*/;
        /* not visible by applications */
        this.state = null;
        /* best guess about the data type: binary or text */
        this.data_type = 2 /*Z_UNKNOWN*/;
        /* adler32 value of the uncompressed data */
        this.adler = 0;
      }

      module.exports = ZStream;

    }, {}], "/": [function (require, module, exports) {
      // Top level file is just a mixin of submodules & constants
      'use strict';

      var assign = require('./lib/utils/common').assign;

      var deflate = require('./lib/deflate');
      var inflate = require('./lib/inflate');
      var constants = require('./lib/zlib/constants');

      var pako = {};

      assign(pako, deflate, inflate, constants);

      module.exports = pako;

    }, { "./lib/deflate": 1, "./lib/inflate": 2, "./lib/utils/common": 3, "./lib/zlib/constants": 6 }] }, {}, [])("/");
});

/***/ }),
/* 37 */
/*!********************************************************************************************************************************!*\
  !*** F:/Ten/WeGame/Document download/WeChat Files/WXID_99Ake/FileStorage/File/2019-08/qj_consult/qj_consult/utils/encoding.js ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 30));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};} // This is free and unencumbered software released into the public domain.
// See LICENSE.md for more information.

/**
 * @fileoverview Global |this| required for resolving indexes in node.
 * @suppress {globalThis}
 */
(function (global) {
  'use strict';

  // If we're in node require encoding-indexes and attach it to the global.
  if ( true && module.exports &&
  !global["encoding-indexes"]) {
    var encoding;
    try {
      var value = uni.getStorageSync('encoding-indexes');
      console.log("value", value);
      encoding = value;
      if (!value) {
        _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var _ref2, _ref3, error, res;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (
                    uni.request({
                      url: 'https://mpv2.csqiji.com/res/text-encoding/encoding.json' }));case 2:_ref2 = _context.sent;_ref3 = _slicedToArray(_ref2, 2);error = _ref3[0];res = _ref3[1];

                  console.log(res.data);
                  encoding = res.data;
                  uni.setStorage({
                    key: 'encoding-indexes',
                    data: encoding });case 9:case "end":return _context.stop();}}}, _callee, this);}))();


      }
    }
    catch (e) {
      // error
    }



    global["encoding-indexes"] = encoding;
  }

  //
  // Utilities
  //

  /**
   * @param {number} a The number to test.
   * @param {number} min The minimum value in the range, inclusive.
   * @param {number} max The maximum value in the range, inclusive.
   * @return {boolean} True if a >= min and a <= max.
   */
  function inRange(a, min, max) {
    return min <= a && a <= max;
  }

  /**
     * @param {!Array.<*>} array The array to check.
     * @param {*} item The item to look for in the array.
     * @return {boolean} True if the item appears in the array.
     */
  function includes(array, item) {
    return array.indexOf(item) !== -1;
  }

  var floor = Math.floor;

  /**
                           * @param {*} o
                           * @return {Object}
                           */
  function ToDictionary(o) {
    if (o === undefined) return {};
    if (o === Object(o)) return o;
    throw TypeError('Could not convert argument to dictionary');
  }

  /**
     * @param {string} string Input string of UTF-16 code units.
     * @return {!Array.<number>} Code points.
     */
  function stringToCodePoints(string) {
    // https://heycam.github.io/webidl/#dfn-obtain-unicode

    // 1. Let S be the DOMString value.
    var s = String(string);

    // 2. Let n be the length of S.
    var n = s.length;

    // 3. Initialize i to 0.
    var i = 0;

    // 4. Initialize U to be an empty sequence of Unicode characters.
    var u = [];

    // 5. While i < n:
    while (i < n) {

      // 1. Let c be the code unit in S at index i.
      var c = s.charCodeAt(i);

      // 2. Depending on the value of c:

      // c < 0xD800 or c > 0xDFFF
      if (c < 0xD800 || c > 0xDFFF) {
        // Append to U the Unicode character with code point c.
        u.push(c);
      }

      // 0xDC00 ≤ c ≤ 0xDFFF
      else if (0xDC00 <= c && c <= 0xDFFF) {
          // Append to U a U+FFFD REPLACEMENT CHARACTER.
          u.push(0xFFFD);
        }

        // 0xD800 ≤ c ≤ 0xDBFF
        else if (0xD800 <= c && c <= 0xDBFF) {
            // 1. If i = n−1, then append to U a U+FFFD REPLACEMENT
            // CHARACTER.
            if (i === n - 1) {
              u.push(0xFFFD);
            }
            // 2. Otherwise, i < n−1:
            else {
                // 1. Let d be the code unit in S at index i+1.
                var d = s.charCodeAt(i + 1);

                // 2. If 0xDC00 ≤ d ≤ 0xDFFF, then:
                if (0xDC00 <= d && d <= 0xDFFF) {
                  // 1. Let a be c & 0x3FF.
                  var a = c & 0x3FF;

                  // 2. Let b be d & 0x3FF.
                  var b = d & 0x3FF;

                  // 3. Append to U the Unicode character with code point
                  // 2^16+2^10*a+b.
                  u.push(0x10000 + (a << 10) + b);

                  // 4. Set i to i+1.
                  i += 1;
                }

                // 3. Otherwise, d < 0xDC00 or d > 0xDFFF. Append to U a
                // U+FFFD REPLACEMENT CHARACTER.
                else {
                    u.push(0xFFFD);
                  }
              }
          }

      // 3. Set i to i+1.
      i += 1;
    }

    // 6. Return U.
    return u;
  }

  /**
     * @param {!Array.<number>} code_points Array of code points.
     * @return {string} string String of UTF-16 code units.
     */
  function codePointsToString(code_points) {
    var s = '';
    for (var i = 0; i < code_points.length; ++i) {
      var cp = code_points[i];
      if (cp <= 0xFFFF) {
        s += String.fromCharCode(cp);
      } else {
        cp -= 0x10000;
        s += String.fromCharCode((cp >> 10) + 0xD800,
        (cp & 0x3FF) + 0xDC00);
      }
    }
    return s;
  }


  //
  // Implementation of Encoding specification
  // https://encoding.spec.whatwg.org/
  //

  //
  // 4. Terminology
  //

  /**
   * An ASCII byte is a byte in the range 0x00 to 0x7F, inclusive.
   * @param {number} a The number to test.
   * @return {boolean} True if a is in the range 0x00 to 0x7F, inclusive.
   */
  function isASCIIByte(a) {
    return 0x00 <= a && a <= 0x7F;
  }

  /**
     * An ASCII code point is a code point in the range U+0000 to
     * U+007F, inclusive.
     */
  var isASCIICodePoint = isASCIIByte;


  /**
                                       * End-of-stream is a special token that signifies no more tokens
                                       * are in the stream.
                                       * @const
                                       */
  var end_of_stream = -1;

  /**
                           * A stream represents an ordered sequence of tokens.
                           *
                           * @constructor
                           * @param {!(Array.<number>|Uint8Array)} tokens Array of tokens that provide
                           * the stream.
                           */
  function Stream(tokens) {
    /** @type {!Array.<number>} */
    this.tokens = [].slice.call(tokens);
    // Reversed as push/pop is more efficient than shift/unshift.
    this.tokens.reverse();
  }

  Stream.prototype = {
    /**
                        * @return {boolean} True if end-of-stream has been hit.
                        */
    endOfStream: function endOfStream() {
      return !this.tokens.length;
    },

    /**
        * When a token is read from a stream, the first token in the
        * stream must be returned and subsequently removed, and
        * end-of-stream must be returned otherwise.
        *
        * @return {number} Get the next token from the stream, or
        * end_of_stream.
        */
    read: function read() {
      if (!this.tokens.length)
      return end_of_stream;
      return this.tokens.pop();
    },

    /**
        * When one or more tokens are prepended to a stream, those tokens
        * must be inserted, in given order, before the first token in the
        * stream.
        *
        * @param {(number|!Array.<number>)} token The token(s) to prepend to the
        * stream.
        */
    prepend: function prepend(token) {
      if (Array.isArray(token)) {
        var tokens = /**@type {!Array.<number>}*/token;
        while (tokens.length) {
          this.tokens.push(tokens.pop());}
      } else {
        this.tokens.push(token);
      }
    },

    /**
        * When one or more tokens are pushed to a stream, those tokens
        * must be inserted, in given order, after the last token in the
        * stream.
        *
        * @param {(number|!Array.<number>)} token The tokens(s) to push to the
        * stream.
        */
    push: function push(token) {
      if (Array.isArray(token)) {
        var tokens = /**@type {!Array.<number>}*/token;
        while (tokens.length) {
          this.tokens.unshift(tokens.shift());}
      } else {
        this.tokens.unshift(token);
      }
    } };


  //
  // 5. Encodings
  //

  // 5.1 Encoders and decoders

  /** @const */
  var finished = -1;

  /**
                      * @param {boolean} fatal If true, decoding errors raise an exception.
                      * @param {number=} opt_code_point Override the standard fallback code point.
                      * @return {number} The code point to insert on a decoding error.
                      */
  function decoderError(fatal, opt_code_point) {
    if (fatal)
    throw TypeError('Decoder error');
    return opt_code_point || 0xFFFD;
  }

  /**
     * @param {number} code_point The code point that could not be encoded.
     * @return {number} Always throws, no value is actually returned.
     */
  function encoderError(code_point) {
    throw TypeError('The code point ' + code_point + ' could not be encoded.');
  }

  /** @interface */
  function Decoder() {}
  Decoder.prototype = {
    /**
                         * @param {Stream} stream The stream of bytes being decoded.
                         * @param {number} bite The next byte read from the stream.
                         * @return {?(number|!Array.<number>)} The next code point(s)
                         *     decoded, or null if not enough data exists in the input
                         *     stream to decode a complete code point, or |finished|.
                         */
    handler: function handler(stream, bite) {} };


  /** @interface */
  function Encoder() {}
  Encoder.prototype = {
    /**
                         * @param {Stream} stream The stream of code points being encoded.
                         * @param {number} code_point Next code point read from the stream.
                         * @return {(number|!Array.<number>)} Byte(s) to emit, or |finished|.
                         */
    handler: function handler(stream, code_point) {} };


  // 5.2 Names and labels

  // TODO: Define @typedef for Encoding: {name:string,labels:Array.<string>}
  // https://github.com/google/closure-compiler/issues/247

  /**
   * @param {string} label The encoding label.
   * @return {?{name:string,labels:Array.<string>}}
   */
  function getEncoding(label) {
    // 1. Remove any leading and trailing ASCII whitespace from label.
    label = String(label).trim().toLowerCase();

    // 2. If label is an ASCII case-insensitive match for any of the
    // labels listed in the table below, return the corresponding
    // encoding, and failure otherwise.
    if (Object.prototype.hasOwnProperty.call(label_to_encoding, label)) {
      return label_to_encoding[label];
    }
    return null;
  }

  /**
     * Encodings table: https://encoding.spec.whatwg.org/encodings.json
     * @const
     * @type {!Array.<{
     *          heading: string,
     *          encodings: Array.<{name:string,labels:Array.<string>}>
     *        }>}
     */
  var encodings = [{
    "encodings": [{
      "labels": [
      "unicode-1-1-utf-8",
      "utf-8",
      "utf8"],

      "name": "UTF-8" }],

    "heading": "The Encoding" },

  {
    "encodings": [{
      "labels": [
      "866",
      "cp866",
      "csibm866",
      "ibm866"],

      "name": "IBM866" },

    {
      "labels": [
      "csisolatin2",
      "iso-8859-2",
      "iso-ir-101",
      "iso8859-2",
      "iso88592",
      "iso_8859-2",
      "iso_8859-2:1987",
      "l2",
      "latin2"],

      "name": "ISO-8859-2" },

    {
      "labels": [
      "csisolatin3",
      "iso-8859-3",
      "iso-ir-109",
      "iso8859-3",
      "iso88593",
      "iso_8859-3",
      "iso_8859-3:1988",
      "l3",
      "latin3"],

      "name": "ISO-8859-3" },

    {
      "labels": [
      "csisolatin4",
      "iso-8859-4",
      "iso-ir-110",
      "iso8859-4",
      "iso88594",
      "iso_8859-4",
      "iso_8859-4:1988",
      "l4",
      "latin4"],

      "name": "ISO-8859-4" },

    {
      "labels": [
      "csisolatincyrillic",
      "cyrillic",
      "iso-8859-5",
      "iso-ir-144",
      "iso8859-5",
      "iso88595",
      "iso_8859-5",
      "iso_8859-5:1988"],

      "name": "ISO-8859-5" },

    {
      "labels": [
      "arabic",
      "asmo-708",
      "csiso88596e",
      "csiso88596i",
      "csisolatinarabic",
      "ecma-114",
      "iso-8859-6",
      "iso-8859-6-e",
      "iso-8859-6-i",
      "iso-ir-127",
      "iso8859-6",
      "iso88596",
      "iso_8859-6",
      "iso_8859-6:1987"],

      "name": "ISO-8859-6" },

    {
      "labels": [
      "csisolatingreek",
      "ecma-118",
      "elot_928",
      "greek",
      "greek8",
      "iso-8859-7",
      "iso-ir-126",
      "iso8859-7",
      "iso88597",
      "iso_8859-7",
      "iso_8859-7:1987",
      "sun_eu_greek"],

      "name": "ISO-8859-7" },

    {
      "labels": [
      "csiso88598e",
      "csisolatinhebrew",
      "hebrew",
      "iso-8859-8",
      "iso-8859-8-e",
      "iso-ir-138",
      "iso8859-8",
      "iso88598",
      "iso_8859-8",
      "iso_8859-8:1988",
      "visual"],

      "name": "ISO-8859-8" },

    {
      "labels": [
      "csiso88598i",
      "iso-8859-8-i",
      "logical"],

      "name": "ISO-8859-8-I" },

    {
      "labels": [
      "csisolatin6",
      "iso-8859-10",
      "iso-ir-157",
      "iso8859-10",
      "iso885910",
      "l6",
      "latin6"],

      "name": "ISO-8859-10" },

    {
      "labels": [
      "iso-8859-13",
      "iso8859-13",
      "iso885913"],

      "name": "ISO-8859-13" },

    {
      "labels": [
      "iso-8859-14",
      "iso8859-14",
      "iso885914"],

      "name": "ISO-8859-14" },

    {
      "labels": [
      "csisolatin9",
      "iso-8859-15",
      "iso8859-15",
      "iso885915",
      "iso_8859-15",
      "l9"],

      "name": "ISO-8859-15" },

    {
      "labels": [
      "iso-8859-16"],

      "name": "ISO-8859-16" },

    {
      "labels": [
      "cskoi8r",
      "koi",
      "koi8",
      "koi8-r",
      "koi8_r"],

      "name": "KOI8-R" },

    {
      "labels": [
      "koi8-ru",
      "koi8-u"],

      "name": "KOI8-U" },

    {
      "labels": [
      "csmacintosh",
      "mac",
      "macintosh",
      "x-mac-roman"],

      "name": "macintosh" },

    {
      "labels": [
      "dos-874",
      "iso-8859-11",
      "iso8859-11",
      "iso885911",
      "tis-620",
      "windows-874"],

      "name": "windows-874" },

    {
      "labels": [
      "cp1250",
      "windows-1250",
      "x-cp1250"],

      "name": "windows-1250" },

    {
      "labels": [
      "cp1251",
      "windows-1251",
      "x-cp1251"],

      "name": "windows-1251" },

    {
      "labels": [
      "ansi_x3.4-1968",
      "ascii",
      "cp1252",
      "cp819",
      "csisolatin1",
      "ibm819",
      "iso-8859-1",
      "iso-ir-100",
      "iso8859-1",
      "iso88591",
      "iso_8859-1",
      "iso_8859-1:1987",
      "l1",
      "latin1",
      "us-ascii",
      "windows-1252",
      "x-cp1252"],

      "name": "windows-1252" },

    {
      "labels": [
      "cp1253",
      "windows-1253",
      "x-cp1253"],

      "name": "windows-1253" },

    {
      "labels": [
      "cp1254",
      "csisolatin5",
      "iso-8859-9",
      "iso-ir-148",
      "iso8859-9",
      "iso88599",
      "iso_8859-9",
      "iso_8859-9:1989",
      "l5",
      "latin5",
      "windows-1254",
      "x-cp1254"],

      "name": "windows-1254" },

    {
      "labels": [
      "cp1255",
      "windows-1255",
      "x-cp1255"],

      "name": "windows-1255" },

    {
      "labels": [
      "cp1256",
      "windows-1256",
      "x-cp1256"],

      "name": "windows-1256" },

    {
      "labels": [
      "cp1257",
      "windows-1257",
      "x-cp1257"],

      "name": "windows-1257" },

    {
      "labels": [
      "cp1258",
      "windows-1258",
      "x-cp1258"],

      "name": "windows-1258" },

    {
      "labels": [
      "x-mac-cyrillic",
      "x-mac-ukrainian"],

      "name": "x-mac-cyrillic" }],


    "heading": "Legacy single-byte encodings" },

  {
    "encodings": [{
      "labels": [
      "chinese",
      "csgb2312",
      "csiso58gb231280",
      "gb2312",
      "gb_2312",
      "gb_2312-80",
      "gbk",
      "iso-ir-58",
      "x-gbk"],

      "name": "GBK" },

    {
      "labels": [
      "gb18030"],

      "name": "gb18030" }],


    "heading": "Legacy multi-byte Chinese (simplified) encodings" },

  {
    "encodings": [{
      "labels": [
      "big5",
      "big5-hkscs",
      "cn-big5",
      "csbig5",
      "x-x-big5"],

      "name": "Big5" }],

    "heading": "Legacy multi-byte Chinese (traditional) encodings" },

  {
    "encodings": [{
      "labels": [
      "cseucpkdfmtjapanese",
      "euc-jp",
      "x-euc-jp"],

      "name": "EUC-JP" },

    {
      "labels": [
      "csiso2022jp",
      "iso-2022-jp"],

      "name": "ISO-2022-JP" },

    {
      "labels": [
      "csshiftjis",
      "ms932",
      "ms_kanji",
      "shift-jis",
      "shift_jis",
      "sjis",
      "windows-31j",
      "x-sjis"],

      "name": "Shift_JIS" }],


    "heading": "Legacy multi-byte Japanese encodings" },

  {
    "encodings": [{
      "labels": [
      "cseuckr",
      "csksc56011987",
      "euc-kr",
      "iso-ir-149",
      "korean",
      "ks_c_5601-1987",
      "ks_c_5601-1989",
      "ksc5601",
      "ksc_5601",
      "windows-949"],

      "name": "EUC-KR" }],

    "heading": "Legacy multi-byte Korean encodings" },

  {
    "encodings": [{
      "labels": [
      "csiso2022kr",
      "hz-gb-2312",
      "iso-2022-cn",
      "iso-2022-cn-ext",
      "iso-2022-kr"],

      "name": "replacement" },

    {
      "labels": [
      "utf-16be"],

      "name": "UTF-16BE" },

    {
      "labels": [
      "utf-16",
      "utf-16le"],

      "name": "UTF-16LE" },

    {
      "labels": [
      "x-user-defined"],

      "name": "x-user-defined" }],


    "heading": "Legacy miscellaneous encodings" }];



  // Label to encoding registry.
  /** @type {Object.<string,{name:string,labels:Array.<string>}>} */
  var label_to_encoding = {};
  encodings.forEach(function (category) {
    category.encodings.forEach(function (encoding) {
      encoding.labels.forEach(function (label) {
        label_to_encoding[label] = encoding;
      });
    });
  });

  // Registry of of encoder/decoder factories, by encoding name.
  /** @type {Object.<string, function({fatal:boolean}): Encoder>} */
  var encoders = {};
  /** @type {Object.<string, function({fatal:boolean}): Decoder>} */
  var decoders = {};

  //
  // 6. Indexes
  //

  /**
   * @param {number} pointer The |pointer| to search for.
   * @param {(!Array.<?number>|undefined)} index The |index| to search within.
   * @return {?number} The code point corresponding to |pointer| in |index|,
   *     or null if |code point| is not in |index|.
   */
  function indexCodePointFor(pointer, index) {
    if (!index) return null;
    return index[pointer] || null;
  }

  /**
     * @param {number} code_point The |code point| to search for.
     * @param {!Array.<?number>} index The |index| to search within.
     * @return {?number} The first pointer corresponding to |code point| in
     *     |index|, or null if |code point| is not in |index|.
     */
  function indexPointerFor(code_point, index) {
    var pointer = index.indexOf(code_point);
    return pointer === -1 ? null : pointer;
  }

  /**
     * @param {string} name Name of the index.
     * @return {(!Array.<number>|!Array.<Array.<number>>)}
     *  */
  function index(name) {
    if (!('encoding-indexes' in global)) {
      throw Error("Indexes missing." +
      " Did you forget to include encoding-indexes.js first?");
    }
    return global['encoding-indexes'][name];
  }

  /**
     * @param {number} pointer The |pointer| to search for in the gb18030 index.
     * @return {?number} The code point corresponding to |pointer| in |index|,
     *     or null if |code point| is not in the gb18030 index.
     */
  function indexGB18030RangesCodePointFor(pointer) {
    // 1. If pointer is greater than 39419 and less than 189000, or
    // pointer is greater than 1237575, return null.
    if (pointer > 39419 && pointer < 189000 || pointer > 1237575)
    return null;

    // 2. If pointer is 7457, return code point U+E7C7.
    if (pointer === 7457) return 0xE7C7;

    // 3. Let offset be the last pointer in index gb18030 ranges that
    // is equal to or less than pointer and let code point offset be
    // its corresponding code point.
    var offset = 0;
    var code_point_offset = 0;
    var idx = index('gb18030-ranges');
    var i;
    for (i = 0; i < idx.length; ++i) {
      /** @type {!Array.<number>} */
      var entry = idx[i];
      if (entry[0] <= pointer) {
        offset = entry[0];
        code_point_offset = entry[1];
      } else {
        break;
      }
    }

    // 4. Return a code point whose value is code point offset +
    // pointer − offset.
    return code_point_offset + pointer - offset;
  }

  /**
     * @param {number} code_point The |code point| to locate in the gb18030 index.
     * @return {number} The first pointer corresponding to |code point| in the
     *     gb18030 index.
     */
  function indexGB18030RangesPointerFor(code_point) {
    // 1. If code point is U+E7C7, return pointer 7457.
    if (code_point === 0xE7C7) return 7457;

    // 2. Let offset be the last code point in index gb18030 ranges
    // that is equal to or less than code point and let pointer offset
    // be its corresponding pointer.
    var offset = 0;
    var pointer_offset = 0;
    var idx = index('gb18030-ranges');
    var i;
    for (i = 0; i < idx.length; ++i) {
      /** @type {!Array.<number>} */
      var entry = idx[i];
      if (entry[1] <= code_point) {
        offset = entry[1];
        pointer_offset = entry[0];
      } else {
        break;
      }
    }

    // 3. Return a pointer whose value is pointer offset + code point
    // − offset.
    return pointer_offset + code_point - offset;
  }

  /**
     * @param {number} code_point The |code_point| to search for in the Shift_JIS
     *     index.
     * @return {?number} The code point corresponding to |pointer| in |index|,
     *     or null if |code point| is not in the Shift_JIS index.
     */
  function indexShiftJISPointerFor(code_point) {
    // 1. Let index be index jis0208 excluding all entries whose
    // pointer is in the range 8272 to 8835, inclusive.
    shift_jis_index = shift_jis_index ||
    index('jis0208').map(function (code_point, pointer) {
      return inRange(pointer, 8272, 8835) ? null : code_point;
    });
    var index_ = shift_jis_index;

    // 2. Return the index pointer for code point in index.
    return index_.indexOf(code_point);
  }
  var shift_jis_index;

  /**
                        * @param {number} code_point The |code_point| to search for in the big5
                        *     index.
                        * @return {?number} The code point corresponding to |pointer| in |index|,
                        *     or null if |code point| is not in the big5 index.
                        */
  function indexBig5PointerFor(code_point) {
    // 1. Let index be index Big5 excluding all entries whose pointer
    big5_index_no_hkscs = big5_index_no_hkscs ||
    index('big5').map(function (code_point, pointer) {
      return pointer < (0xA1 - 0x81) * 157 ? null : code_point;
    });
    var index_ = big5_index_no_hkscs;

    // 2. If code point is U+2550, U+255E, U+2561, U+256A, U+5341, or
    // U+5345, return the last pointer corresponding to code point in
    // index.
    if (code_point === 0x2550 || code_point === 0x255E ||
    code_point === 0x2561 || code_point === 0x256A ||
    code_point === 0x5341 || code_point === 0x5345) {
      return index_.lastIndexOf(code_point);
    }

    // 3. Return the index pointer for code point in index.
    return indexPointerFor(code_point, index_);
  }
  var big5_index_no_hkscs;

  //
  // 8. API
  //

  /** @const */
  var DEFAULT_ENCODING = 'utf-8';

  // 8.1 Interface TextDecoder

  /**
   * @constructor
   * @param {string=} label The label of the encoding;
   *     defaults to 'utf-8'.
   * @param {Object=} options
   */
  function TextDecoder(label, options) {
    // Web IDL conventions
    if (!(this instanceof TextDecoder))
    throw TypeError('Called as a function. Did you forget \'new\'?');
    label = label !== undefined ? String(label) : DEFAULT_ENCODING;
    options = ToDictionary(options);

    // A TextDecoder object has an associated encoding, decoder,
    // stream, ignore BOM flag (initially unset), BOM seen flag
    // (initially unset), error mode (initially replacement), and do
    // not flush flag (initially unset).

    /** @private */
    this._encoding = null;
    /** @private @type {?Decoder} */
    this._decoder = null;
    /** @private @type {boolean} */
    this._ignoreBOM = false;
    /** @private @type {boolean} */
    this._BOMseen = false;
    /** @private @type {string} */
    this._error_mode = 'replacement';
    /** @private @type {boolean} */
    this._do_not_flush = false;


    // 1. Let encoding be the result of getting an encoding from
    // label.
    var encoding = getEncoding(label);

    // 2. If encoding is failure or replacement, throw a RangeError.
    if (encoding === null || encoding.name === 'replacement')
    throw RangeError('Unknown encoding: ' + label);
    if (!decoders[encoding.name]) {
      throw Error('Decoder not present.' +
      ' Did you forget to include encoding-indexes.js first?');
    }

    // 3. Let dec be a new TextDecoder object.
    var dec = this;

    // 4. Set dec's encoding to encoding.
    dec._encoding = encoding;

    // 5. If options's fatal member is true, set dec's error mode to
    // fatal.
    if (Boolean(options['fatal']))
    dec._error_mode = 'fatal';

    // 6. If options's ignoreBOM member is true, set dec's ignore BOM
    // flag.
    if (Boolean(options['ignoreBOM']))
    dec._ignoreBOM = true;

    // For pre-ES5 runtimes:
    if (!Object.defineProperty) {
      this.encoding = dec._encoding.name.toLowerCase();
      this.fatal = dec._error_mode === 'fatal';
      this.ignoreBOM = dec._ignoreBOM;
    }

    // 7. Return dec.
    return dec;
  }

  if (Object.defineProperty) {
    // The encoding attribute's getter must return encoding's name.
    Object.defineProperty(TextDecoder.prototype, 'encoding', {
      /** @this {TextDecoder} */
      get: function get() {
        return this._encoding.name.toLowerCase();
      } });


    // The fatal attribute's getter must return true if error mode
    // is fatal, and false otherwise.
    Object.defineProperty(TextDecoder.prototype, 'fatal', {
      /** @this {TextDecoder} */
      get: function get() {
        return this._error_mode === 'fatal';
      } });


    // The ignoreBOM attribute's getter must return true if ignore
    // BOM flag is set, and false otherwise.
    Object.defineProperty(TextDecoder.prototype, 'ignoreBOM', {
      /** @this {TextDecoder} */
      get: function get() {
        return this._ignoreBOM;
      } });

  }

  /**
     * @param {BufferSource=} input The buffer of bytes to decode.
     * @param {Object=} options
     * @return {string} The decoded string.
     */
  TextDecoder.prototype.decode = function decode(input, options) {
    var bytes;
    if (typeof input === 'object' && input instanceof ArrayBuffer) {
      bytes = new Uint8Array(input);
    } else if (typeof input === 'object' && 'buffer' in input &&
    input.buffer instanceof ArrayBuffer) {
      bytes = new Uint8Array(input.buffer,
      input.byteOffset,
      input.byteLength);
    } else {
      bytes = new Uint8Array(0);
    }

    options = ToDictionary(options);

    // 1. If the do not flush flag is unset, set decoder to a new
    // encoding's decoder, set stream to a new stream, and unset the
    // BOM seen flag.
    if (!this._do_not_flush) {
      this._decoder = decoders[this._encoding.name]({
        fatal: this._error_mode === 'fatal' });

      this._BOMseen = false;
    }

    // 2. If options's stream is true, set the do not flush flag, and
    // unset the do not flush flag otherwise.
    this._do_not_flush = Boolean(options['stream']);

    // 3. If input is given, push a copy of input to stream.
    // TODO: Align with spec algorithm - maintain stream on instance.
    var input_stream = new Stream(bytes);

    // 4. Let output be a new stream.
    var output = [];

    /** @type {?(number|!Array.<number>)} */
    var result;

    // 5. While true:
    while (true) {
      // 1. Let token be the result of reading from stream.
      var token = input_stream.read();

      // 2. If token is end-of-stream and the do not flush flag is
      // set, return output, serialized.
      // TODO: Align with spec algorithm.
      if (token === end_of_stream)
      break;

      // 3. Otherwise, run these subsubsteps:

      // 1. Let result be the result of processing token for decoder,
      // stream, output, and error mode.
      result = this._decoder.handler(input_stream, token);

      // 2. If result is finished, return output, serialized.
      if (result === finished)
      break;

      if (result !== null) {
        if (Array.isArray(result))
        output.push.apply(output, /**@type {!Array.<number>}*/result);else

        output.push(result);
      }

      // 3. Otherwise, if result is error, throw a TypeError.
      // (Thrown in handler)

      // 4. Otherwise, do nothing.
    }
    // TODO: Align with spec algorithm.
    if (!this._do_not_flush) {
      do {
        result = this._decoder.handler(input_stream, input_stream.read());
        if (result === finished)
        break;
        if (result === null)
        continue;
        if (Array.isArray(result))
        output.push.apply(output, /**@type {!Array.<number>}*/result);else

        output.push(result);
      } while (!input_stream.endOfStream());
      this._decoder = null;
    }

    // A TextDecoder object also has an associated serialize stream
    // algorithm...
    /**
     * @param {!Array.<number>} stream
     * @return {string}
     * @this {TextDecoder}
     */
    function serializeStream(stream) {
      // 1. Let token be the result of reading from stream.
      // (Done in-place on array, rather than as a stream)

      // 2. If encoding is UTF-8, UTF-16BE, or UTF-16LE, and ignore
      // BOM flag and BOM seen flag are unset, run these subsubsteps:
      if (includes(['UTF-8', 'UTF-16LE', 'UTF-16BE'], this._encoding.name) &&
      !this._ignoreBOM && !this._BOMseen) {
        if (stream.length > 0 && stream[0] === 0xFEFF) {
          // 1. If token is U+FEFF, set BOM seen flag.
          this._BOMseen = true;
          stream.shift();
        } else if (stream.length > 0) {
          // 2. Otherwise, if token is not end-of-stream, set BOM seen
          // flag and append token to stream.
          this._BOMseen = true;
        } else {
          // 3. Otherwise, if token is not end-of-stream, append token
          // to output.
          // (no-op)
        }
      }
      // 4. Otherwise, return output.
      return codePointsToString(stream);
    }

    return serializeStream.call(this, output);
  };

  // 8.2 Interface TextEncoder

  /**
   * @constructor
   * @param {string=} label The label of the encoding. NONSTANDARD.
   * @param {Object=} options NONSTANDARD.
   */
  function TextEncoder(label, options) {
    // Web IDL conventions
    if (!(this instanceof TextEncoder))
    throw TypeError('Called as a function. Did you forget \'new\'?');
    options = ToDictionary(options);

    // A TextEncoder object has an associated encoding and encoder.

    /** @private */
    this._encoding = null;
    /** @private @type {?Encoder} */
    this._encoder = null;

    // Non-standard
    /** @private @type {boolean} */
    this._do_not_flush = false;
    /** @private @type {string} */
    this._fatal = Boolean(options['fatal']) ? 'fatal' : 'replacement';

    // 1. Let enc be a new TextEncoder object.
    var enc = this;

    // 2. Set enc's encoding to UTF-8's encoder.
    if (Boolean(options['NONSTANDARD_allowLegacyEncoding'])) {
      // NONSTANDARD behavior.
      label = label !== undefined ? String(label) : DEFAULT_ENCODING;
      var encoding = getEncoding(label);
      if (encoding === null || encoding.name === 'replacement')
      throw RangeError('Unknown encoding: ' + label);
      if (!encoders[encoding.name]) {
        throw Error('Encoder not present.' +
        ' Did you forget to include encoding-indexes.js first?');
      }
      enc._encoding = encoding;
    } else {
      // Standard behavior.
      enc._encoding = getEncoding('utf-8');

      if (label !== undefined && 'console' in global) {
        console.warn('TextEncoder constructor called with encoding label, ' +
        'which is ignored.');
      }
    }

    // For pre-ES5 runtimes:
    if (!Object.defineProperty)
    this.encoding = enc._encoding.name.toLowerCase();

    // 3. Return enc.
    return enc;
  }

  if (Object.defineProperty) {
    // The encoding attribute's getter must return encoding's name.
    Object.defineProperty(TextEncoder.prototype, 'encoding', {
      /** @this {TextEncoder} */
      get: function get() {
        return this._encoding.name.toLowerCase();
      } });

  }

  /**
     * @param {string=} opt_string The string to encode.
     * @param {Object=} options
     * @return {!Uint8Array} Encoded bytes, as a Uint8Array.
     */
  TextEncoder.prototype.encode = function encode(opt_string, options) {
    opt_string = opt_string === undefined ? '' : String(opt_string);
    options = ToDictionary(options);

    // NOTE: This option is nonstandard. None of the encodings
    // permitted for encoding (i.e. UTF-8, UTF-16) are stateful when
    // the input is a USVString so streaming is not necessary.
    if (!this._do_not_flush)
    this._encoder = encoders[this._encoding.name]({
      fatal: this._fatal === 'fatal' });

    this._do_not_flush = Boolean(options['stream']);

    // 1. Convert input to a stream.
    var input = new Stream(stringToCodePoints(opt_string));

    // 2. Let output be a new stream
    var output = [];

    /** @type {?(number|!Array.<number>)} */
    var result;
    // 3. While true, run these substeps:
    while (true) {
      // 1. Let token be the result of reading from input.
      var token = input.read();
      if (token === end_of_stream)
      break;
      // 2. Let result be the result of processing token for encoder,
      // input, output.
      result = this._encoder.handler(input, token);
      if (result === finished)
      break;
      if (Array.isArray(result))
      output.push.apply(output, /**@type {!Array.<number>}*/result);else

      output.push(result);
    }
    // TODO: Align with spec algorithm.
    if (!this._do_not_flush) {
      while (true) {
        result = this._encoder.handler(input, input.read());
        if (result === finished)
        break;
        if (Array.isArray(result))
        output.push.apply(output, /**@type {!Array.<number>}*/result);else

        output.push(result);
      }
      this._encoder = null;
    }
    // 3. If result is finished, convert output into a byte sequence,
    // and then return a Uint8Array object wrapping an ArrayBuffer
    // containing output.
    return new Uint8Array(output);
  };


  //
  // 9. The encoding
  //

  // 9.1 utf-8

  // 9.1.1 utf-8 decoder
  /**
   * @constructor
   * @implements {Decoder}
   * @param {{fatal: boolean}} options
   */
  function UTF8Decoder(options) {
    var fatal = options.fatal;

    // utf-8's decoder's has an associated utf-8 code point, utf-8
    // bytes seen, and utf-8 bytes needed (all initially 0), a utf-8
    // lower boundary (initially 0x80), and a utf-8 upper boundary
    // (initially 0xBF).
    var /** @type {number} */utf8_code_point = 0,
    /** @type {number} */
    utf8_bytes_seen = 0,
    /** @type {number} */
    utf8_bytes_needed = 0,
    /** @type {number} */
    utf8_lower_boundary = 0x80,
    /** @type {number} */
    utf8_upper_boundary = 0xBF;

    /**
                                 * @param {Stream} stream The stream of bytes being decoded.
                                 * @param {number} bite The next byte read from the stream.
                                 * @return {?(number|!Array.<number>)} The next code point(s)
                                 *     decoded, or null if not enough data exists in the input
                                 *     stream to decode a complete code point.
                                 */
    this.handler = function (stream, bite) {
      // 1. If byte is end-of-stream and utf-8 bytes needed is not 0,
      // set utf-8 bytes needed to 0 and return error.
      if (bite === end_of_stream && utf8_bytes_needed !== 0) {
        utf8_bytes_needed = 0;
        return decoderError(fatal);
      }

      // 2. If byte is end-of-stream, return finished.
      if (bite === end_of_stream)
      return finished;

      // 3. If utf-8 bytes needed is 0, based on byte:
      if (utf8_bytes_needed === 0) {

        // 0x00 to 0x7F
        if (inRange(bite, 0x00, 0x7F)) {
          // Return a code point whose value is byte.
          return bite;
        }

        // 0xC2 to 0xDF
        else if (inRange(bite, 0xC2, 0xDF)) {
            // 1. Set utf-8 bytes needed to 1.
            utf8_bytes_needed = 1;

            // 2. Set UTF-8 code point to byte & 0x1F.
            utf8_code_point = bite & 0x1F;
          }

          // 0xE0 to 0xEF
          else if (inRange(bite, 0xE0, 0xEF)) {
              // 1. If byte is 0xE0, set utf-8 lower boundary to 0xA0.
              if (bite === 0xE0)
              utf8_lower_boundary = 0xA0;
              // 2. If byte is 0xED, set utf-8 upper boundary to 0x9F.
              if (bite === 0xED)
              utf8_upper_boundary = 0x9F;
              // 3. Set utf-8 bytes needed to 2.
              utf8_bytes_needed = 2;
              // 4. Set UTF-8 code point to byte & 0xF.
              utf8_code_point = bite & 0xF;
            }

            // 0xF0 to 0xF4
            else if (inRange(bite, 0xF0, 0xF4)) {
                // 1. If byte is 0xF0, set utf-8 lower boundary to 0x90.
                if (bite === 0xF0)
                utf8_lower_boundary = 0x90;
                // 2. If byte is 0xF4, set utf-8 upper boundary to 0x8F.
                if (bite === 0xF4)
                utf8_upper_boundary = 0x8F;
                // 3. Set utf-8 bytes needed to 3.
                utf8_bytes_needed = 3;
                // 4. Set UTF-8 code point to byte & 0x7.
                utf8_code_point = bite & 0x7;
              }

              // Otherwise
              else {
                  // Return error.
                  return decoderError(fatal);
                }

        // Return continue.
        return null;
      }

      // 4. If byte is not in the range utf-8 lower boundary to utf-8
      // upper boundary, inclusive, run these substeps:
      if (!inRange(bite, utf8_lower_boundary, utf8_upper_boundary)) {

        // 1. Set utf-8 code point, utf-8 bytes needed, and utf-8
        // bytes seen to 0, set utf-8 lower boundary to 0x80, and set
        // utf-8 upper boundary to 0xBF.
        utf8_code_point = utf8_bytes_needed = utf8_bytes_seen = 0;
        utf8_lower_boundary = 0x80;
        utf8_upper_boundary = 0xBF;

        // 2. Prepend byte to stream.
        stream.prepend(bite);

        // 3. Return error.
        return decoderError(fatal);
      }

      // 5. Set utf-8 lower boundary to 0x80 and utf-8 upper boundary
      // to 0xBF.
      utf8_lower_boundary = 0x80;
      utf8_upper_boundary = 0xBF;

      // 6. Set UTF-8 code point to (UTF-8 code point << 6) | (byte &
      // 0x3F)
      utf8_code_point = utf8_code_point << 6 | bite & 0x3F;

      // 7. Increase utf-8 bytes seen by one.
      utf8_bytes_seen += 1;

      // 8. If utf-8 bytes seen is not equal to utf-8 bytes needed,
      // continue.
      if (utf8_bytes_seen !== utf8_bytes_needed)
      return null;

      // 9. Let code point be utf-8 code point.
      var code_point = utf8_code_point;

      // 10. Set utf-8 code point, utf-8 bytes needed, and utf-8 bytes
      // seen to 0.
      utf8_code_point = utf8_bytes_needed = utf8_bytes_seen = 0;

      // 11. Return a code point whose value is code point.
      return code_point;
    };
  }

  // 9.1.2 utf-8 encoder
  /**
   * @constructor
   * @implements {Encoder}
   * @param {{fatal: boolean}} options
   */
  function UTF8Encoder(options) {
    var fatal = options.fatal;
    /**
                                * @param {Stream} stream Input stream.
                                * @param {number} code_point Next code point read from the stream.
                                * @return {(number|!Array.<number>)} Byte(s) to emit.
                                */
    this.handler = function (stream, code_point) {
      // 1. If code point is end-of-stream, return finished.
      if (code_point === end_of_stream)
      return finished;

      // 2. If code point is an ASCII code point, return a byte whose
      // value is code point.
      if (isASCIICodePoint(code_point))
      return code_point;

      // 3. Set count and offset based on the range code point is in:
      var count, offset;
      // U+0080 to U+07FF, inclusive:
      if (inRange(code_point, 0x0080, 0x07FF)) {
        // 1 and 0xC0
        count = 1;
        offset = 0xC0;
      }
      // U+0800 to U+FFFF, inclusive:
      else if (inRange(code_point, 0x0800, 0xFFFF)) {
          // 2 and 0xE0
          count = 2;
          offset = 0xE0;
        }
        // U+10000 to U+10FFFF, inclusive:
        else if (inRange(code_point, 0x10000, 0x10FFFF)) {
            // 3 and 0xF0
            count = 3;
            offset = 0xF0;
          }

      // 4. Let bytes be a byte sequence whose first byte is (code
      // point >> (6 × count)) + offset.
      var bytes = [(code_point >> 6 * count) + offset];

      // 5. Run these substeps while count is greater than 0:
      while (count > 0) {

        // 1. Set temp to code point >> (6 × (count − 1)).
        var temp = code_point >> 6 * (count - 1);

        // 2. Append to bytes 0x80 | (temp & 0x3F).
        bytes.push(0x80 | temp & 0x3F);

        // 3. Decrease count by one.
        count -= 1;
      }

      // 6. Return bytes bytes, in order.
      return bytes;
    };
  }

  /** @param {{fatal: boolean}} options */
  encoders['UTF-8'] = function (options) {
    return new UTF8Encoder(options);
  };
  /** @param {{fatal: boolean}} options */
  decoders['UTF-8'] = function (options) {
    return new UTF8Decoder(options);
  };

  //
  // 10. Legacy single-byte encodings
  //

  // 10.1 single-byte decoder
  /**
   * @constructor
   * @implements {Decoder}
   * @param {!Array.<number>} index The encoding index.
   * @param {{fatal: boolean}} options
   */
  function SingleByteDecoder(index, options) {
    var fatal = options.fatal;
    /**
                                * @param {Stream} stream The stream of bytes being decoded.
                                * @param {number} bite The next byte read from the stream.
                                * @return {?(number|!Array.<number>)} The next code point(s)
                                *     decoded, or null if not enough data exists in the input
                                *     stream to decode a complete code point.
                                */
    this.handler = function (stream, bite) {
      // 1. If byte is end-of-stream, return finished.
      if (bite === end_of_stream)
      return finished;

      // 2. If byte is an ASCII byte, return a code point whose value
      // is byte.
      if (isASCIIByte(bite))
      return bite;

      // 3. Let code point be the index code point for byte − 0x80 in
      // index single-byte.
      var code_point = index[bite - 0x80];

      // 4. If code point is null, return error.
      if (code_point === null)
      return decoderError(fatal);

      // 5. Return a code point whose value is code point.
      return code_point;
    };
  }

  // 10.2 single-byte encoder
  /**
   * @constructor
   * @implements {Encoder}
   * @param {!Array.<?number>} index The encoding index.
   * @param {{fatal: boolean}} options
   */
  function SingleByteEncoder(index, options) {
    var fatal = options.fatal;
    /**
                                * @param {Stream} stream Input stream.
                                * @param {number} code_point Next code point read from the stream.
                                * @return {(number|!Array.<number>)} Byte(s) to emit.
                                */
    this.handler = function (stream, code_point) {
      // 1. If code point is end-of-stream, return finished.
      if (code_point === end_of_stream)
      return finished;

      // 2. If code point is an ASCII code point, return a byte whose
      // value is code point.
      if (isASCIICodePoint(code_point))
      return code_point;

      // 3. Let pointer be the index pointer for code point in index
      // single-byte.
      var pointer = indexPointerFor(code_point, index);

      // 4. If pointer is null, return error with code point.
      if (pointer === null)
      encoderError(code_point);

      // 5. Return a byte whose value is pointer + 0x80.
      return pointer + 0x80;
    };
  }

  (function () {
    if (!('encoding-indexes' in global))
    return;
    encodings.forEach(function (category) {
      if (category.heading !== 'Legacy single-byte encodings')
      return;
      category.encodings.forEach(function (encoding) {
        var name = encoding.name;
        var idx = index(name.toLowerCase());
        /** @param {{fatal: boolean}} options */
        decoders[name] = function (options) {
          return new SingleByteDecoder(idx, options);
        };
        /** @param {{fatal: boolean}} options */
        encoders[name] = function (options) {
          return new SingleByteEncoder(idx, options);
        };
      });
    });
  })();

  //
  // 11. Legacy multi-byte Chinese (simplified) encodings
  //

  // 11.1 gbk

  // 11.1.1 gbk decoder
  // gbk's decoder is gb18030's decoder.
  /** @param {{fatal: boolean}} options */
  decoders['GBK'] = function (options) {
    return new GB18030Decoder(options);
  };

  // 11.1.2 gbk encoder
  // gbk's encoder is gb18030's encoder with its gbk flag set.
  /** @param {{fatal: boolean}} options */
  encoders['GBK'] = function (options) {
    return new GB18030Encoder(options, true);
  };

  // 11.2 gb18030

  // 11.2.1 gb18030 decoder
  /**
   * @constructor
   * @implements {Decoder}
   * @param {{fatal: boolean}} options
   */
  function GB18030Decoder(options) {
    var fatal = options.fatal;
    // gb18030's decoder has an associated gb18030 first, gb18030
    // second, and gb18030 third (all initially 0x00).
    var /** @type {number} */gb18030_first = 0x00,
    /** @type {number} */
    gb18030_second = 0x00,
    /** @type {number} */
    gb18030_third = 0x00;
    /**
                           * @param {Stream} stream The stream of bytes being decoded.
                           * @param {number} bite The next byte read from the stream.
                           * @return {?(number|!Array.<number>)} The next code point(s)
                           *     decoded, or null if not enough data exists in the input
                           *     stream to decode a complete code point.
                           */
    this.handler = function (stream, bite) {
      // 1. If byte is end-of-stream and gb18030 first, gb18030
      // second, and gb18030 third are 0x00, return finished.
      if (bite === end_of_stream && gb18030_first === 0x00 &&
      gb18030_second === 0x00 && gb18030_third === 0x00) {
        return finished;
      }
      // 2. If byte is end-of-stream, and gb18030 first, gb18030
      // second, or gb18030 third is not 0x00, set gb18030 first,
      // gb18030 second, and gb18030 third to 0x00, and return error.
      if (bite === end_of_stream && (
      gb18030_first !== 0x00 || gb18030_second !== 0x00 ||
      gb18030_third !== 0x00)) {
        gb18030_first = 0x00;
        gb18030_second = 0x00;
        gb18030_third = 0x00;
        decoderError(fatal);
      }
      var code_point;
      // 3. If gb18030 third is not 0x00, run these substeps:
      if (gb18030_third !== 0x00) {
        // 1. Let code point be null.
        code_point = null;
        // 2. If byte is in the range 0x30 to 0x39, inclusive, set
        // code point to the index gb18030 ranges code point for
        // (((gb18030 first − 0x81) × 10 + gb18030 second − 0x30) ×
        // 126 + gb18030 third − 0x81) × 10 + byte − 0x30.
        if (inRange(bite, 0x30, 0x39)) {
          code_point = indexGB18030RangesCodePointFor(
          (((gb18030_first - 0x81) * 10 + gb18030_second - 0x30) * 126 +
          gb18030_third - 0x81) * 10 + bite - 0x30);
        }

        // 3. Let buffer be a byte sequence consisting of gb18030
        // second, gb18030 third, and byte, in order.
        var buffer = [gb18030_second, gb18030_third, bite];

        // 4. Set gb18030 first, gb18030 second, and gb18030 third to
        // 0x00.
        gb18030_first = 0x00;
        gb18030_second = 0x00;
        gb18030_third = 0x00;

        // 5. If code point is null, prepend buffer to stream and
        // return error.
        if (code_point === null) {
          stream.prepend(buffer);
          return decoderError(fatal);
        }

        // 6. Return a code point whose value is code point.
        return code_point;
      }

      // 4. If gb18030 second is not 0x00, run these substeps:
      if (gb18030_second !== 0x00) {

        // 1. If byte is in the range 0x81 to 0xFE, inclusive, set
        // gb18030 third to byte and return continue.
        if (inRange(bite, 0x81, 0xFE)) {
          gb18030_third = bite;
          return null;
        }

        // 2. Prepend gb18030 second followed by byte to stream, set
        // gb18030 first and gb18030 second to 0x00, and return error.
        stream.prepend([gb18030_second, bite]);
        gb18030_first = 0x00;
        gb18030_second = 0x00;
        return decoderError(fatal);
      }

      // 5. If gb18030 first is not 0x00, run these substeps:
      if (gb18030_first !== 0x00) {

        // 1. If byte is in the range 0x30 to 0x39, inclusive, set
        // gb18030 second to byte and return continue.
        if (inRange(bite, 0x30, 0x39)) {
          gb18030_second = bite;
          return null;
        }

        // 2. Let lead be gb18030 first, let pointer be null, and set
        // gb18030 first to 0x00.
        var lead = gb18030_first;
        var pointer = null;
        gb18030_first = 0x00;

        // 3. Let offset be 0x40 if byte is less than 0x7F and 0x41
        // otherwise.
        var offset = bite < 0x7F ? 0x40 : 0x41;

        // 4. If byte is in the range 0x40 to 0x7E, inclusive, or 0x80
        // to 0xFE, inclusive, set pointer to (lead − 0x81) × 190 +
        // (byte − offset).
        if (inRange(bite, 0x40, 0x7E) || inRange(bite, 0x80, 0xFE))
        pointer = (lead - 0x81) * 190 + (bite - offset);

        // 5. Let code point be null if pointer is null and the index
        // code point for pointer in index gb18030 otherwise.
        code_point = pointer === null ? null :
        indexCodePointFor(pointer, index('gb18030'));

        // 6. If code point is null and byte is an ASCII byte, prepend
        // byte to stream.
        if (code_point === null && isASCIIByte(bite))
        stream.prepend(bite);

        // 7. If code point is null, return error.
        if (code_point === null)
        return decoderError(fatal);

        // 8. Return a code point whose value is code point.
        return code_point;
      }

      // 6. If byte is an ASCII byte, return a code point whose value
      // is byte.
      if (isASCIIByte(bite))
      return bite;

      // 7. If byte is 0x80, return code point U+20AC.
      if (bite === 0x80)
      return 0x20AC;

      // 8. If byte is in the range 0x81 to 0xFE, inclusive, set
      // gb18030 first to byte and return continue.
      if (inRange(bite, 0x81, 0xFE)) {
        gb18030_first = bite;
        return null;
      }

      // 9. Return error.
      return decoderError(fatal);
    };
  }

  // 11.2.2 gb18030 encoder
  /**
   * @constructor
   * @implements {Encoder}
   * @param {{fatal: boolean}} options
   * @param {boolean=} gbk_flag
   */
  function GB18030Encoder(options, gbk_flag) {
    var fatal = options.fatal;
    // gb18030's decoder has an associated gbk flag (initially unset).
    /**
     * @param {Stream} stream Input stream.
     * @param {number} code_point Next code point read from the stream.
     * @return {(number|!Array.<number>)} Byte(s) to emit.
     */
    this.handler = function (stream, code_point) {
      // 1. If code point is end-of-stream, return finished.
      if (code_point === end_of_stream)
      return finished;

      // 2. If code point is an ASCII code point, return a byte whose
      // value is code point.
      if (isASCIICodePoint(code_point))
      return code_point;

      // 3. If code point is U+E5E5, return error with code point.
      if (code_point === 0xE5E5)
      return encoderError(code_point);

      // 4. If the gbk flag is set and code point is U+20AC, return
      // byte 0x80.
      if (gbk_flag && code_point === 0x20AC)
      return 0x80;

      // 5. Let pointer be the index pointer for code point in index
      // gb18030.
      var pointer = indexPointerFor(code_point, index('gb18030'));

      // 6. If pointer is not null, run these substeps:
      if (pointer !== null) {

        // 1. Let lead be floor(pointer / 190) + 0x81.
        var lead = floor(pointer / 190) + 0x81;

        // 2. Let trail be pointer % 190.
        var trail = pointer % 190;

        // 3. Let offset be 0x40 if trail is less than 0x3F and 0x41 otherwise.
        var offset = trail < 0x3F ? 0x40 : 0x41;

        // 4. Return two bytes whose values are lead and trail + offset.
        return [lead, trail + offset];
      }

      // 7. If gbk flag is set, return error with code point.
      if (gbk_flag)
      return encoderError(code_point);

      // 8. Set pointer to the index gb18030 ranges pointer for code
      // point.
      pointer = indexGB18030RangesPointerFor(code_point);

      // 9. Let byte1 be floor(pointer / 10 / 126 / 10).
      var byte1 = floor(pointer / 10 / 126 / 10);

      // 10. Set pointer to pointer − byte1 × 10 × 126 × 10.
      pointer = pointer - byte1 * 10 * 126 * 10;

      // 11. Let byte2 be floor(pointer / 10 / 126).
      var byte2 = floor(pointer / 10 / 126);

      // 12. Set pointer to pointer − byte2 × 10 × 126.
      pointer = pointer - byte2 * 10 * 126;

      // 13. Let byte3 be floor(pointer / 10).
      var byte3 = floor(pointer / 10);

      // 14. Let byte4 be pointer − byte3 × 10.
      var byte4 = pointer - byte3 * 10;

      // 15. Return four bytes whose values are byte1 + 0x81, byte2 +
      // 0x30, byte3 + 0x81, byte4 + 0x30.
      return [byte1 + 0x81,
      byte2 + 0x30,
      byte3 + 0x81,
      byte4 + 0x30];

    };
  }

  /** @param {{fatal: boolean}} options */
  encoders['gb18030'] = function (options) {
    return new GB18030Encoder(options);
  };
  /** @param {{fatal: boolean}} options */
  decoders['gb18030'] = function (options) {
    return new GB18030Decoder(options);
  };


  //
  // 12. Legacy multi-byte Chinese (traditional) encodings
  //

  // 12.1 Big5

  // 12.1.1 Big5 decoder
  /**
   * @constructor
   * @implements {Decoder}
   * @param {{fatal: boolean}} options
   */
  function Big5Decoder(options) {
    var fatal = options.fatal;
    // Big5's decoder has an associated Big5 lead (initially 0x00).
    var /** @type {number} */Big5_lead = 0x00;

    /**
                                                * @param {Stream} stream The stream of bytes being decoded.
                                                * @param {number} bite The next byte read from the stream.
                                                * @return {?(number|!Array.<number>)} The next code point(s)
                                                *     decoded, or null if not enough data exists in the input
                                                *     stream to decode a complete code point.
                                                */
    this.handler = function (stream, bite) {
      // 1. If byte is end-of-stream and Big5 lead is not 0x00, set
      // Big5 lead to 0x00 and return error.
      if (bite === end_of_stream && Big5_lead !== 0x00) {
        Big5_lead = 0x00;
        return decoderError(fatal);
      }

      // 2. If byte is end-of-stream and Big5 lead is 0x00, return
      // finished.
      if (bite === end_of_stream && Big5_lead === 0x00)
      return finished;

      // 3. If Big5 lead is not 0x00, let lead be Big5 lead, let
      // pointer be null, set Big5 lead to 0x00, and then run these
      // substeps:
      if (Big5_lead !== 0x00) {
        var lead = Big5_lead;
        var pointer = null;
        Big5_lead = 0x00;

        // 1. Let offset be 0x40 if byte is less than 0x7F and 0x62
        // otherwise.
        var offset = bite < 0x7F ? 0x40 : 0x62;

        // 2. If byte is in the range 0x40 to 0x7E, inclusive, or 0xA1
        // to 0xFE, inclusive, set pointer to (lead − 0x81) × 157 +
        // (byte − offset).
        if (inRange(bite, 0x40, 0x7E) || inRange(bite, 0xA1, 0xFE))
        pointer = (lead - 0x81) * 157 + (bite - offset);

        // 3. If there is a row in the table below whose first column
        // is pointer, return the two code points listed in its second
        // column
        // Pointer | Code points
        // --------+--------------
        // 1133    | U+00CA U+0304
        // 1135    | U+00CA U+030C
        // 1164    | U+00EA U+0304
        // 1166    | U+00EA U+030C
        switch (pointer) {
          case 1133:
            return [0x00CA, 0x0304];
          case 1135:
            return [0x00CA, 0x030C];
          case 1164:
            return [0x00EA, 0x0304];
          case 1166:
            return [0x00EA, 0x030C];}


        // 4. Let code point be null if pointer is null and the index
        // code point for pointer in index Big5 otherwise.
        var code_point = pointer === null ? null :
        indexCodePointFor(pointer, index('big5'));

        // 5. If code point is null and byte is an ASCII byte, prepend
        // byte to stream.
        if (code_point === null && isASCIIByte(bite))
        stream.prepend(bite);

        // 6. If code point is null, return error.
        if (code_point === null)
        return decoderError(fatal);

        // 7. Return a code point whose value is code point.
        return code_point;
      }

      // 4. If byte is an ASCII byte, return a code point whose value
      // is byte.
      if (isASCIIByte(bite))
      return bite;

      // 5. If byte is in the range 0x81 to 0xFE, inclusive, set Big5
      // lead to byte and return continue.
      if (inRange(bite, 0x81, 0xFE)) {
        Big5_lead = bite;
        return null;
      }

      // 6. Return error.
      return decoderError(fatal);
    };
  }

  // 12.1.2 Big5 encoder
  /**
   * @constructor
   * @implements {Encoder}
   * @param {{fatal: boolean}} options
   */
  function Big5Encoder(options) {
    var fatal = options.fatal;
    /**
                                * @param {Stream} stream Input stream.
                                * @param {number} code_point Next code point read from the stream.
                                * @return {(number|!Array.<number>)} Byte(s) to emit.
                                */
    this.handler = function (stream, code_point) {
      // 1. If code point is end-of-stream, return finished.
      if (code_point === end_of_stream)
      return finished;

      // 2. If code point is an ASCII code point, return a byte whose
      // value is code point.
      if (isASCIICodePoint(code_point))
      return code_point;

      // 3. Let pointer be the index Big5 pointer for code point.
      var pointer = indexBig5PointerFor(code_point);

      // 4. If pointer is null, return error with code point.
      if (pointer === null)
      return encoderError(code_point);

      // 5. Let lead be floor(pointer / 157) + 0x81.
      var lead = floor(pointer / 157) + 0x81;

      // 6. If lead is less than 0xA1, return error with code point.
      if (lead < 0xA1)
      return encoderError(code_point);

      // 7. Let trail be pointer % 157.
      var trail = pointer % 157;

      // 8. Let offset be 0x40 if trail is less than 0x3F and 0x62
      // otherwise.
      var offset = trail < 0x3F ? 0x40 : 0x62;

      // Return two bytes whose values are lead and trail + offset.
      return [lead, trail + offset];
    };
  }

  /** @param {{fatal: boolean}} options */
  encoders['Big5'] = function (options) {
    return new Big5Encoder(options);
  };
  /** @param {{fatal: boolean}} options */
  decoders['Big5'] = function (options) {
    return new Big5Decoder(options);
  };


  //
  // 13. Legacy multi-byte Japanese encodings
  //

  // 13.1 euc-jp

  // 13.1.1 euc-jp decoder
  /**
   * @constructor
   * @implements {Decoder}
   * @param {{fatal: boolean}} options
   */
  function EUCJPDecoder(options) {
    var fatal = options.fatal;

    // euc-jp's decoder has an associated euc-jp jis0212 flag
    // (initially unset) and euc-jp lead (initially 0x00).
    var /** @type {boolean} */eucjp_jis0212_flag = false,
    /** @type {number} */
    eucjp_lead = 0x00;

    /**
                        * @param {Stream} stream The stream of bytes being decoded.
                        * @param {number} bite The next byte read from the stream.
                        * @return {?(number|!Array.<number>)} The next code point(s)
                        *     decoded, or null if not enough data exists in the input
                        *     stream to decode a complete code point.
                        */
    this.handler = function (stream, bite) {
      // 1. If byte is end-of-stream and euc-jp lead is not 0x00, set
      // euc-jp lead to 0x00, and return error.
      if (bite === end_of_stream && eucjp_lead !== 0x00) {
        eucjp_lead = 0x00;
        return decoderError(fatal);
      }

      // 2. If byte is end-of-stream and euc-jp lead is 0x00, return
      // finished.
      if (bite === end_of_stream && eucjp_lead === 0x00)
      return finished;

      // 3. If euc-jp lead is 0x8E and byte is in the range 0xA1 to
      // 0xDF, inclusive, set euc-jp lead to 0x00 and return a code
      // point whose value is 0xFF61 − 0xA1 + byte.
      if (eucjp_lead === 0x8E && inRange(bite, 0xA1, 0xDF)) {
        eucjp_lead = 0x00;
        return 0xFF61 - 0xA1 + bite;
      }

      // 4. If euc-jp lead is 0x8F and byte is in the range 0xA1 to
      // 0xFE, inclusive, set the euc-jp jis0212 flag, set euc-jp lead
      // to byte, and return continue.
      if (eucjp_lead === 0x8F && inRange(bite, 0xA1, 0xFE)) {
        eucjp_jis0212_flag = true;
        eucjp_lead = bite;
        return null;
      }

      // 5. If euc-jp lead is not 0x00, let lead be euc-jp lead, set
      // euc-jp lead to 0x00, and run these substeps:
      if (eucjp_lead !== 0x00) {
        var lead = eucjp_lead;
        eucjp_lead = 0x00;

        // 1. Let code point be null.
        var code_point = null;

        // 2. If lead and byte are both in the range 0xA1 to 0xFE,
        // inclusive, set code point to the index code point for (lead
        // − 0xA1) × 94 + byte − 0xA1 in index jis0208 if the euc-jp
        // jis0212 flag is unset and in index jis0212 otherwise.
        if (inRange(lead, 0xA1, 0xFE) && inRange(bite, 0xA1, 0xFE)) {
          code_point = indexCodePointFor(
          (lead - 0xA1) * 94 + (bite - 0xA1),
          index(!eucjp_jis0212_flag ? 'jis0208' : 'jis0212'));
        }

        // 3. Unset the euc-jp jis0212 flag.
        eucjp_jis0212_flag = false;

        // 4. If byte is not in the range 0xA1 to 0xFE, inclusive,
        // prepend byte to stream.
        if (!inRange(bite, 0xA1, 0xFE))
        stream.prepend(bite);

        // 5. If code point is null, return error.
        if (code_point === null)
        return decoderError(fatal);

        // 6. Return a code point whose value is code point.
        return code_point;
      }

      // 6. If byte is an ASCII byte, return a code point whose value
      // is byte.
      if (isASCIIByte(bite))
      return bite;

      // 7. If byte is 0x8E, 0x8F, or in the range 0xA1 to 0xFE,
      // inclusive, set euc-jp lead to byte and return continue.
      if (bite === 0x8E || bite === 0x8F || inRange(bite, 0xA1, 0xFE)) {
        eucjp_lead = bite;
        return null;
      }

      // 8. Return error.
      return decoderError(fatal);
    };
  }

  // 13.1.2 euc-jp encoder
  /**
   * @constructor
   * @implements {Encoder}
   * @param {{fatal: boolean}} options
   */
  function EUCJPEncoder(options) {
    var fatal = options.fatal;
    /**
                                * @param {Stream} stream Input stream.
                                * @param {number} code_point Next code point read from the stream.
                                * @return {(number|!Array.<number>)} Byte(s) to emit.
                                */
    this.handler = function (stream, code_point) {
      // 1. If code point is end-of-stream, return finished.
      if (code_point === end_of_stream)
      return finished;

      // 2. If code point is an ASCII code point, return a byte whose
      // value is code point.
      if (isASCIICodePoint(code_point))
      return code_point;

      // 3. If code point is U+00A5, return byte 0x5C.
      if (code_point === 0x00A5)
      return 0x5C;

      // 4. If code point is U+203E, return byte 0x7E.
      if (code_point === 0x203E)
      return 0x7E;

      // 5. If code point is in the range U+FF61 to U+FF9F, inclusive,
      // return two bytes whose values are 0x8E and code point −
      // 0xFF61 + 0xA1.
      if (inRange(code_point, 0xFF61, 0xFF9F))
      return [0x8E, code_point - 0xFF61 + 0xA1];

      // 6. If code point is U+2212, set it to U+FF0D.
      if (code_point === 0x2212)
      code_point = 0xFF0D;

      // 7. Let pointer be the index pointer for code point in index
      // jis0208.
      var pointer = indexPointerFor(code_point, index('jis0208'));

      // 8. If pointer is null, return error with code point.
      if (pointer === null)
      return encoderError(code_point);

      // 9. Let lead be floor(pointer / 94) + 0xA1.
      var lead = floor(pointer / 94) + 0xA1;

      // 10. Let trail be pointer % 94 + 0xA1.
      var trail = pointer % 94 + 0xA1;

      // 11. Return two bytes whose values are lead and trail.
      return [lead, trail];
    };
  }

  /** @param {{fatal: boolean}} options */
  encoders['EUC-JP'] = function (options) {
    return new EUCJPEncoder(options);
  };
  /** @param {{fatal: boolean}} options */
  decoders['EUC-JP'] = function (options) {
    return new EUCJPDecoder(options);
  };

  // 13.2 iso-2022-jp

  // 13.2.1 iso-2022-jp decoder
  /**
   * @constructor
   * @implements {Decoder}
   * @param {{fatal: boolean}} options
   */
  function ISO2022JPDecoder(options) {
    var fatal = options.fatal;
    /** @enum */
    var states = {
      ASCII: 0,
      Roman: 1,
      Katakana: 2,
      LeadByte: 3,
      TrailByte: 4,
      EscapeStart: 5,
      Escape: 6 };

    // iso-2022-jp's decoder has an associated iso-2022-jp decoder
    // state (initially ASCII), iso-2022-jp decoder output state
    // (initially ASCII), iso-2022-jp lead (initially 0x00), and
    // iso-2022-jp output flag (initially unset).
    var /** @type {number} */iso2022jp_decoder_state = states.ASCII,
    /** @type {number} */
    iso2022jp_decoder_output_state = states.ASCII,
    /** @type {number} */
    iso2022jp_lead = 0x00,
    /** @type {boolean} */
    iso2022jp_output_flag = false;
    /**
                                    * @param {Stream} stream The stream of bytes being decoded.
                                    * @param {number} bite The next byte read from the stream.
                                    * @return {?(number|!Array.<number>)} The next code point(s)
                                    *     decoded, or null if not enough data exists in the input
                                    *     stream to decode a complete code point.
                                    */
    this.handler = function (stream, bite) {
      // switching on iso-2022-jp decoder state:
      switch (iso2022jp_decoder_state) {
        default:
        case states.ASCII:
          // ASCII
          // Based on byte:

          // 0x1B
          if (bite === 0x1B) {
            // Set iso-2022-jp decoder state to escape start and return
            // continue.
            iso2022jp_decoder_state = states.EscapeStart;
            return null;
          }

          // 0x00 to 0x7F, excluding 0x0E, 0x0F, and 0x1B
          if (inRange(bite, 0x00, 0x7F) && bite !== 0x0E &&
          bite !== 0x0F && bite !== 0x1B) {
            // Unset the iso-2022-jp output flag and return a code point
            // whose value is byte.
            iso2022jp_output_flag = false;
            return bite;
          }

          // end-of-stream
          if (bite === end_of_stream) {
            // Return finished.
            return finished;
          }

          // Otherwise
          // Unset the iso-2022-jp output flag and return error.
          iso2022jp_output_flag = false;
          return decoderError(fatal);

        case states.Roman:
          // Roman
          // Based on byte:

          // 0x1B
          if (bite === 0x1B) {
            // Set iso-2022-jp decoder state to escape start and return
            // continue.
            iso2022jp_decoder_state = states.EscapeStart;
            return null;
          }

          // 0x5C
          if (bite === 0x5C) {
            // Unset the iso-2022-jp output flag and return code point
            // U+00A5.
            iso2022jp_output_flag = false;
            return 0x00A5;
          }

          // 0x7E
          if (bite === 0x7E) {
            // Unset the iso-2022-jp output flag and return code point
            // U+203E.
            iso2022jp_output_flag = false;
            return 0x203E;
          }

          // 0x00 to 0x7F, excluding 0x0E, 0x0F, 0x1B, 0x5C, and 0x7E
          if (inRange(bite, 0x00, 0x7F) && bite !== 0x0E && bite !== 0x0F &&
          bite !== 0x1B && bite !== 0x5C && bite !== 0x7E) {
            // Unset the iso-2022-jp output flag and return a code point
            // whose value is byte.
            iso2022jp_output_flag = false;
            return bite;
          }

          // end-of-stream
          if (bite === end_of_stream) {
            // Return finished.
            return finished;
          }

          // Otherwise
          // Unset the iso-2022-jp output flag and return error.
          iso2022jp_output_flag = false;
          return decoderError(fatal);

        case states.Katakana:
          // Katakana
          // Based on byte:

          // 0x1B
          if (bite === 0x1B) {
            // Set iso-2022-jp decoder state to escape start and return
            // continue.
            iso2022jp_decoder_state = states.EscapeStart;
            return null;
          }

          // 0x21 to 0x5F
          if (inRange(bite, 0x21, 0x5F)) {
            // Unset the iso-2022-jp output flag and return a code point
            // whose value is 0xFF61 − 0x21 + byte.
            iso2022jp_output_flag = false;
            return 0xFF61 - 0x21 + bite;
          }

          // end-of-stream
          if (bite === end_of_stream) {
            // Return finished.
            return finished;
          }

          // Otherwise
          // Unset the iso-2022-jp output flag and return error.
          iso2022jp_output_flag = false;
          return decoderError(fatal);

        case states.LeadByte:
          // Lead byte
          // Based on byte:

          // 0x1B
          if (bite === 0x1B) {
            // Set iso-2022-jp decoder state to escape start and return
            // continue.
            iso2022jp_decoder_state = states.EscapeStart;
            return null;
          }

          // 0x21 to 0x7E
          if (inRange(bite, 0x21, 0x7E)) {
            // Unset the iso-2022-jp output flag, set iso-2022-jp lead
            // to byte, iso-2022-jp decoder state to trail byte, and
            // return continue.
            iso2022jp_output_flag = false;
            iso2022jp_lead = bite;
            iso2022jp_decoder_state = states.TrailByte;
            return null;
          }

          // end-of-stream
          if (bite === end_of_stream) {
            // Return finished.
            return finished;
          }

          // Otherwise
          // Unset the iso-2022-jp output flag and return error.
          iso2022jp_output_flag = false;
          return decoderError(fatal);

        case states.TrailByte:
          // Trail byte
          // Based on byte:

          // 0x1B
          if (bite === 0x1B) {
            // Set iso-2022-jp decoder state to escape start and return
            // continue.
            iso2022jp_decoder_state = states.EscapeStart;
            return decoderError(fatal);
          }

          // 0x21 to 0x7E
          if (inRange(bite, 0x21, 0x7E)) {
            // 1. Set the iso-2022-jp decoder state to lead byte.
            iso2022jp_decoder_state = states.LeadByte;

            // 2. Let pointer be (iso-2022-jp lead − 0x21) × 94 + byte − 0x21.
            var pointer = (iso2022jp_lead - 0x21) * 94 + bite - 0x21;

            // 3. Let code point be the index code point for pointer in
            // index jis0208.
            var code_point = indexCodePointFor(pointer, index('jis0208'));

            // 4. If code point is null, return error.
            if (code_point === null)
            return decoderError(fatal);

            // 5. Return a code point whose value is code point.
            return code_point;
          }

          // end-of-stream
          if (bite === end_of_stream) {
            // Set the iso-2022-jp decoder state to lead byte, prepend
            // byte to stream, and return error.
            iso2022jp_decoder_state = states.LeadByte;
            stream.prepend(bite);
            return decoderError(fatal);
          }

          // Otherwise
          // Set iso-2022-jp decoder state to lead byte and return
          // error.
          iso2022jp_decoder_state = states.LeadByte;
          return decoderError(fatal);

        case states.EscapeStart:
          // Escape start

          // 1. If byte is either 0x24 or 0x28, set iso-2022-jp lead to
          // byte, iso-2022-jp decoder state to escape, and return
          // continue.
          if (bite === 0x24 || bite === 0x28) {
            iso2022jp_lead = bite;
            iso2022jp_decoder_state = states.Escape;
            return null;
          }

          // 2. Prepend byte to stream.
          stream.prepend(bite);

          // 3. Unset the iso-2022-jp output flag, set iso-2022-jp
          // decoder state to iso-2022-jp decoder output state, and
          // return error.
          iso2022jp_output_flag = false;
          iso2022jp_decoder_state = iso2022jp_decoder_output_state;
          return decoderError(fatal);

        case states.Escape:
          // Escape

          // 1. Let lead be iso-2022-jp lead and set iso-2022-jp lead to
          // 0x00.
          var lead = iso2022jp_lead;
          iso2022jp_lead = 0x00;

          // 2. Let state be null.
          var state = null;

          // 3. If lead is 0x28 and byte is 0x42, set state to ASCII.
          if (lead === 0x28 && bite === 0x42)
          state = states.ASCII;

          // 4. If lead is 0x28 and byte is 0x4A, set state to Roman.
          if (lead === 0x28 && bite === 0x4A)
          state = states.Roman;

          // 5. If lead is 0x28 and byte is 0x49, set state to Katakana.
          if (lead === 0x28 && bite === 0x49)
          state = states.Katakana;

          // 6. If lead is 0x24 and byte is either 0x40 or 0x42, set
          // state to lead byte.
          if (lead === 0x24 && (bite === 0x40 || bite === 0x42))
          state = states.LeadByte;

          // 7. If state is non-null, run these substeps:
          if (state !== null) {
            // 1. Set iso-2022-jp decoder state and iso-2022-jp decoder
            // output state to states.
            iso2022jp_decoder_state = iso2022jp_decoder_state = state;

            // 2. Let output flag be the iso-2022-jp output flag.
            var output_flag = iso2022jp_output_flag;

            // 3. Set the iso-2022-jp output flag.
            iso2022jp_output_flag = true;

            // 4. Return continue, if output flag is unset, and error
            // otherwise.
            return !output_flag ? null : decoderError(fatal);
          }

          // 8. Prepend lead and byte to stream.
          stream.prepend([lead, bite]);

          // 9. Unset the iso-2022-jp output flag, set iso-2022-jp
          // decoder state to iso-2022-jp decoder output state and
          // return error.
          iso2022jp_output_flag = false;
          iso2022jp_decoder_state = iso2022jp_decoder_output_state;
          return decoderError(fatal);}

    };
  }

  // 13.2.2 iso-2022-jp encoder
  /**
   * @constructor
   * @implements {Encoder}
   * @param {{fatal: boolean}} options
   */
  function ISO2022JPEncoder(options) {
    var fatal = options.fatal;
    // iso-2022-jp's encoder has an associated iso-2022-jp encoder
    // state which is one of ASCII, Roman, and jis0208 (initially
    // ASCII).
    /** @enum */
    var states = {
      ASCII: 0,
      Roman: 1,
      jis0208: 2 };

    var /** @type {number} */iso2022jp_state = states.ASCII;
    /**
                                                              * @param {Stream} stream Input stream.
                                                              * @param {number} code_point Next code point read from the stream.
                                                              * @return {(number|!Array.<number>)} Byte(s) to emit.
                                                              */
    this.handler = function (stream, code_point) {
      // 1. If code point is end-of-stream and iso-2022-jp encoder
      // state is not ASCII, prepend code point to stream, set
      // iso-2022-jp encoder state to ASCII, and return three bytes
      // 0x1B 0x28 0x42.
      if (code_point === end_of_stream &&
      iso2022jp_state !== states.ASCII) {
        stream.prepend(code_point);
        iso2022jp_state = states.ASCII;
        return [0x1B, 0x28, 0x42];
      }

      // 2. If code point is end-of-stream and iso-2022-jp encoder
      // state is ASCII, return finished.
      if (code_point === end_of_stream && iso2022jp_state === states.ASCII)
      return finished;

      // 3. If ISO-2022-JP encoder state is ASCII or Roman, and code
      // point is U+000E, U+000F, or U+001B, return error with U+FFFD.
      if ((iso2022jp_state === states.ASCII ||
      iso2022jp_state === states.Roman) && (
      code_point === 0x000E || code_point === 0x000F ||
      code_point === 0x001B)) {
        return encoderError(0xFFFD);
      }

      // 4. If iso-2022-jp encoder state is ASCII and code point is an
      // ASCII code point, return a byte whose value is code point.
      if (iso2022jp_state === states.ASCII &&
      isASCIICodePoint(code_point))
      return code_point;

      // 5. If iso-2022-jp encoder state is Roman and code point is an
      // ASCII code point, excluding U+005C and U+007E, or is U+00A5
      // or U+203E, run these substeps:
      if (iso2022jp_state === states.Roman && (
      isASCIICodePoint(code_point) &&
      code_point !== 0x005C && code_point !== 0x007E ||
      code_point == 0x00A5 || code_point == 0x203E)) {

        // 1. If code point is an ASCII code point, return a byte
        // whose value is code point.
        if (isASCIICodePoint(code_point))
        return code_point;

        // 2. If code point is U+00A5, return byte 0x5C.
        if (code_point === 0x00A5)
        return 0x5C;

        // 3. If code point is U+203E, return byte 0x7E.
        if (code_point === 0x203E)
        return 0x7E;
      }

      // 6. If code point is an ASCII code point, and iso-2022-jp
      // encoder state is not ASCII, prepend code point to stream, set
      // iso-2022-jp encoder state to ASCII, and return three bytes
      // 0x1B 0x28 0x42.
      if (isASCIICodePoint(code_point) &&
      iso2022jp_state !== states.ASCII) {
        stream.prepend(code_point);
        iso2022jp_state = states.ASCII;
        return [0x1B, 0x28, 0x42];
      }

      // 7. If code point is either U+00A5 or U+203E, and iso-2022-jp
      // encoder state is not Roman, prepend code point to stream, set
      // iso-2022-jp encoder state to Roman, and return three bytes
      // 0x1B 0x28 0x4A.
      if ((code_point === 0x00A5 || code_point === 0x203E) &&
      iso2022jp_state !== states.Roman) {
        stream.prepend(code_point);
        iso2022jp_state = states.Roman;
        return [0x1B, 0x28, 0x4A];
      }

      // 8. If code point is U+2212, set it to U+FF0D.
      if (code_point === 0x2212)
      code_point = 0xFF0D;

      // 9. Let pointer be the index pointer for code point in index
      // jis0208.
      var pointer = indexPointerFor(code_point, index('jis0208'));

      // 10. If pointer is null, return error with code point.
      if (pointer === null)
      return encoderError(code_point);

      // 11. If iso-2022-jp encoder state is not jis0208, prepend code
      // point to stream, set iso-2022-jp encoder state to jis0208,
      // and return three bytes 0x1B 0x24 0x42.
      if (iso2022jp_state !== states.jis0208) {
        stream.prepend(code_point);
        iso2022jp_state = states.jis0208;
        return [0x1B, 0x24, 0x42];
      }

      // 12. Let lead be floor(pointer / 94) + 0x21.
      var lead = floor(pointer / 94) + 0x21;

      // 13. Let trail be pointer % 94 + 0x21.
      var trail = pointer % 94 + 0x21;

      // 14. Return two bytes whose values are lead and trail.
      return [lead, trail];
    };
  }

  /** @param {{fatal: boolean}} options */
  encoders['ISO-2022-JP'] = function (options) {
    return new ISO2022JPEncoder(options);
  };
  /** @param {{fatal: boolean}} options */
  decoders['ISO-2022-JP'] = function (options) {
    return new ISO2022JPDecoder(options);
  };

  // 13.3 Shift_JIS

  // 13.3.1 Shift_JIS decoder
  /**
   * @constructor
   * @implements {Decoder}
   * @param {{fatal: boolean}} options
   */
  function ShiftJISDecoder(options) {
    var fatal = options.fatal;
    // Shift_JIS's decoder has an associated Shift_JIS lead (initially
    // 0x00).
    var /** @type {number} */Shift_JIS_lead = 0x00;
    /**
                                                     * @param {Stream} stream The stream of bytes being decoded.
                                                     * @param {number} bite The next byte read from the stream.
                                                     * @return {?(number|!Array.<number>)} The next code point(s)
                                                     *     decoded, or null if not enough data exists in the input
                                                     *     stream to decode a complete code point.
                                                     */
    this.handler = function (stream, bite) {
      // 1. If byte is end-of-stream and Shift_JIS lead is not 0x00,
      // set Shift_JIS lead to 0x00 and return error.
      if (bite === end_of_stream && Shift_JIS_lead !== 0x00) {
        Shift_JIS_lead = 0x00;
        return decoderError(fatal);
      }

      // 2. If byte is end-of-stream and Shift_JIS lead is 0x00,
      // return finished.
      if (bite === end_of_stream && Shift_JIS_lead === 0x00)
      return finished;

      // 3. If Shift_JIS lead is not 0x00, let lead be Shift_JIS lead,
      // let pointer be null, set Shift_JIS lead to 0x00, and then run
      // these substeps:
      if (Shift_JIS_lead !== 0x00) {
        var lead = Shift_JIS_lead;
        var pointer = null;
        Shift_JIS_lead = 0x00;

        // 1. Let offset be 0x40, if byte is less than 0x7F, and 0x41
        // otherwise.
        var offset = bite < 0x7F ? 0x40 : 0x41;

        // 2. Let lead offset be 0x81, if lead is less than 0xA0, and
        // 0xC1 otherwise.
        var lead_offset = lead < 0xA0 ? 0x81 : 0xC1;

        // 3. If byte is in the range 0x40 to 0x7E, inclusive, or 0x80
        // to 0xFC, inclusive, set pointer to (lead − lead offset) ×
        // 188 + byte − offset.
        if (inRange(bite, 0x40, 0x7E) || inRange(bite, 0x80, 0xFC))
        pointer = (lead - lead_offset) * 188 + bite - offset;

        // 4. If pointer is in the range 8836 to 10715, inclusive,
        // return a code point whose value is 0xE000 − 8836 + pointer.
        if (inRange(pointer, 8836, 10715))
        return 0xE000 - 8836 + pointer;

        // 5. Let code point be null, if pointer is null, and the
        // index code point for pointer in index jis0208 otherwise.
        var code_point = pointer === null ? null :
        indexCodePointFor(pointer, index('jis0208'));

        // 6. If code point is null and byte is an ASCII byte, prepend
        // byte to stream.
        if (code_point === null && isASCIIByte(bite))
        stream.prepend(bite);

        // 7. If code point is null, return error.
        if (code_point === null)
        return decoderError(fatal);

        // 8. Return a code point whose value is code point.
        return code_point;
      }

      // 4. If byte is an ASCII byte or 0x80, return a code point
      // whose value is byte.
      if (isASCIIByte(bite) || bite === 0x80)
      return bite;

      // 5. If byte is in the range 0xA1 to 0xDF, inclusive, return a
      // code point whose value is 0xFF61 − 0xA1 + byte.
      if (inRange(bite, 0xA1, 0xDF))
      return 0xFF61 - 0xA1 + bite;

      // 6. If byte is in the range 0x81 to 0x9F, inclusive, or 0xE0
      // to 0xFC, inclusive, set Shift_JIS lead to byte and return
      // continue.
      if (inRange(bite, 0x81, 0x9F) || inRange(bite, 0xE0, 0xFC)) {
        Shift_JIS_lead = bite;
        return null;
      }

      // 7. Return error.
      return decoderError(fatal);
    };
  }

  // 13.3.2 Shift_JIS encoder
  /**
   * @constructor
   * @implements {Encoder}
   * @param {{fatal: boolean}} options
   */
  function ShiftJISEncoder(options) {
    var fatal = options.fatal;
    /**
                                * @param {Stream} stream Input stream.
                                * @param {number} code_point Next code point read from the stream.
                                * @return {(number|!Array.<number>)} Byte(s) to emit.
                                */
    this.handler = function (stream, code_point) {
      // 1. If code point is end-of-stream, return finished.
      if (code_point === end_of_stream)
      return finished;

      // 2. If code point is an ASCII code point or U+0080, return a
      // byte whose value is code point.
      if (isASCIICodePoint(code_point) || code_point === 0x0080)
      return code_point;

      // 3. If code point is U+00A5, return byte 0x5C.
      if (code_point === 0x00A5)
      return 0x5C;

      // 4. If code point is U+203E, return byte 0x7E.
      if (code_point === 0x203E)
      return 0x7E;

      // 5. If code point is in the range U+FF61 to U+FF9F, inclusive,
      // return a byte whose value is code point − 0xFF61 + 0xA1.
      if (inRange(code_point, 0xFF61, 0xFF9F))
      return code_point - 0xFF61 + 0xA1;

      // 6. If code point is U+2212, set it to U+FF0D.
      if (code_point === 0x2212)
      code_point = 0xFF0D;

      // 7. Let pointer be the index Shift_JIS pointer for code point.
      var pointer = indexShiftJISPointerFor(code_point);

      // 8. If pointer is null, return error with code point.
      if (pointer === null)
      return encoderError(code_point);

      // 9. Let lead be floor(pointer / 188).
      var lead = floor(pointer / 188);

      // 10. Let lead offset be 0x81, if lead is less than 0x1F, and
      // 0xC1 otherwise.
      var lead_offset = lead < 0x1F ? 0x81 : 0xC1;

      // 11. Let trail be pointer % 188.
      var trail = pointer % 188;

      // 12. Let offset be 0x40, if trail is less than 0x3F, and 0x41
      // otherwise.
      var offset = trail < 0x3F ? 0x40 : 0x41;

      // 13. Return two bytes whose values are lead + lead offset and
      // trail + offset.
      return [lead + lead_offset, trail + offset];
    };
  }

  /** @param {{fatal: boolean}} options */
  encoders['Shift_JIS'] = function (options) {
    return new ShiftJISEncoder(options);
  };
  /** @param {{fatal: boolean}} options */
  decoders['Shift_JIS'] = function (options) {
    return new ShiftJISDecoder(options);
  };

  //
  // 14. Legacy multi-byte Korean encodings
  //

  // 14.1 euc-kr

  // 14.1.1 euc-kr decoder
  /**
   * @constructor
   * @implements {Decoder}
   * @param {{fatal: boolean}} options
   */
  function EUCKRDecoder(options) {
    var fatal = options.fatal;

    // euc-kr's decoder has an associated euc-kr lead (initially 0x00).
    var /** @type {number} */euckr_lead = 0x00;
    /**
                                                 * @param {Stream} stream The stream of bytes being decoded.
                                                 * @param {number} bite The next byte read from the stream.
                                                 * @return {?(number|!Array.<number>)} The next code point(s)
                                                 *     decoded, or null if not enough data exists in the input
                                                 *     stream to decode a complete code point.
                                                 */
    this.handler = function (stream, bite) {
      // 1. If byte is end-of-stream and euc-kr lead is not 0x00, set
      // euc-kr lead to 0x00 and return error.
      if (bite === end_of_stream && euckr_lead !== 0) {
        euckr_lead = 0x00;
        return decoderError(fatal);
      }

      // 2. If byte is end-of-stream and euc-kr lead is 0x00, return
      // finished.
      if (bite === end_of_stream && euckr_lead === 0)
      return finished;

      // 3. If euc-kr lead is not 0x00, let lead be euc-kr lead, let
      // pointer be null, set euc-kr lead to 0x00, and then run these
      // substeps:
      if (euckr_lead !== 0x00) {
        var lead = euckr_lead;
        var pointer = null;
        euckr_lead = 0x00;

        // 1. If byte is in the range 0x41 to 0xFE, inclusive, set
        // pointer to (lead − 0x81) × 190 + (byte − 0x41).
        if (inRange(bite, 0x41, 0xFE))
        pointer = (lead - 0x81) * 190 + (bite - 0x41);

        // 2. Let code point be null, if pointer is null, and the
        // index code point for pointer in index euc-kr otherwise.
        var code_point = pointer === null ?
        null : indexCodePointFor(pointer, index('euc-kr'));

        // 3. If code point is null and byte is an ASCII byte, prepend
        // byte to stream.
        if (pointer === null && isASCIIByte(bite))
        stream.prepend(bite);

        // 4. If code point is null, return error.
        if (code_point === null)
        return decoderError(fatal);

        // 5. Return a code point whose value is code point.
        return code_point;
      }

      // 4. If byte is an ASCII byte, return a code point whose value
      // is byte.
      if (isASCIIByte(bite))
      return bite;

      // 5. If byte is in the range 0x81 to 0xFE, inclusive, set
      // euc-kr lead to byte and return continue.
      if (inRange(bite, 0x81, 0xFE)) {
        euckr_lead = bite;
        return null;
      }

      // 6. Return error.
      return decoderError(fatal);
    };
  }

  // 14.1.2 euc-kr encoder
  /**
   * @constructor
   * @implements {Encoder}
   * @param {{fatal: boolean}} options
   */
  function EUCKREncoder(options) {
    var fatal = options.fatal;
    /**
                                * @param {Stream} stream Input stream.
                                * @param {number} code_point Next code point read from the stream.
                                * @return {(number|!Array.<number>)} Byte(s) to emit.
                                */
    this.handler = function (stream, code_point) {
      // 1. If code point is end-of-stream, return finished.
      if (code_point === end_of_stream)
      return finished;

      // 2. If code point is an ASCII code point, return a byte whose
      // value is code point.
      if (isASCIICodePoint(code_point))
      return code_point;

      // 3. Let pointer be the index pointer for code point in index
      // euc-kr.
      var pointer = indexPointerFor(code_point, index('euc-kr'));

      // 4. If pointer is null, return error with code point.
      if (pointer === null)
      return encoderError(code_point);

      // 5. Let lead be floor(pointer / 190) + 0x81.
      var lead = floor(pointer / 190) + 0x81;

      // 6. Let trail be pointer % 190 + 0x41.
      var trail = pointer % 190 + 0x41;

      // 7. Return two bytes whose values are lead and trail.
      return [lead, trail];
    };
  }

  /** @param {{fatal: boolean}} options */
  encoders['EUC-KR'] = function (options) {
    return new EUCKREncoder(options);
  };
  /** @param {{fatal: boolean}} options */
  decoders['EUC-KR'] = function (options) {
    return new EUCKRDecoder(options);
  };


  //
  // 15. Legacy miscellaneous encodings
  //

  // 15.1 replacement

  // Not needed - API throws RangeError

  // 15.2 Common infrastructure for utf-16be and utf-16le

  /**
   * @param {number} code_unit
   * @param {boolean} utf16be
   * @return {!Array.<number>} bytes
   */
  function convertCodeUnitToBytes(code_unit, utf16be) {
    // 1. Let byte1 be code unit >> 8.
    var byte1 = code_unit >> 8;

    // 2. Let byte2 be code unit & 0x00FF.
    var byte2 = code_unit & 0x00FF;

    // 3. Then return the bytes in order:
    // utf-16be flag is set: byte1, then byte2.
    if (utf16be)
    return [byte1, byte2];
    // utf-16be flag is unset: byte2, then byte1.
    return [byte2, byte1];
  }

  // 15.2.1 shared utf-16 decoder
  /**
   * @constructor
   * @implements {Decoder}
   * @param {boolean} utf16_be True if big-endian, false if little-endian.
   * @param {{fatal: boolean}} options
   */
  function UTF16Decoder(utf16_be, options) {
    var fatal = options.fatal;
    var /** @type {?number} */utf16_lead_byte = null,
    /** @type {?number} */
    utf16_lead_surrogate = null;
    /**
                                  * @param {Stream} stream The stream of bytes being decoded.
                                  * @param {number} bite The next byte read from the stream.
                                  * @return {?(number|!Array.<number>)} The next code point(s)
                                  *     decoded, or null if not enough data exists in the input
                                  *     stream to decode a complete code point.
                                  */
    this.handler = function (stream, bite) {
      // 1. If byte is end-of-stream and either utf-16 lead byte or
      // utf-16 lead surrogate is not null, set utf-16 lead byte and
      // utf-16 lead surrogate to null, and return error.
      if (bite === end_of_stream && (utf16_lead_byte !== null ||
      utf16_lead_surrogate !== null)) {
        return decoderError(fatal);
      }

      // 2. If byte is end-of-stream and utf-16 lead byte and utf-16
      // lead surrogate are null, return finished.
      if (bite === end_of_stream && utf16_lead_byte === null &&
      utf16_lead_surrogate === null) {
        return finished;
      }

      // 3. If utf-16 lead byte is null, set utf-16 lead byte to byte
      // and return continue.
      if (utf16_lead_byte === null) {
        utf16_lead_byte = bite;
        return null;
      }

      // 4. Let code unit be the result of:
      var code_unit;
      if (utf16_be) {
        // utf-16be decoder flag is set
        //   (utf-16 lead byte << 8) + byte.
        code_unit = (utf16_lead_byte << 8) + bite;
      } else {
        // utf-16be decoder flag is unset
        //   (byte << 8) + utf-16 lead byte.
        code_unit = (bite << 8) + utf16_lead_byte;
      }
      // Then set utf-16 lead byte to null.
      utf16_lead_byte = null;

      // 5. If utf-16 lead surrogate is not null, let lead surrogate
      // be utf-16 lead surrogate, set utf-16 lead surrogate to null,
      // and then run these substeps:
      if (utf16_lead_surrogate !== null) {
        var lead_surrogate = utf16_lead_surrogate;
        utf16_lead_surrogate = null;

        // 1. If code unit is in the range U+DC00 to U+DFFF,
        // inclusive, return a code point whose value is 0x10000 +
        // ((lead surrogate − 0xD800) << 10) + (code unit − 0xDC00).
        if (inRange(code_unit, 0xDC00, 0xDFFF)) {
          return 0x10000 + (lead_surrogate - 0xD800) * 0x400 + (
          code_unit - 0xDC00);
        }

        // 2. Prepend the sequence resulting of converting code unit
        // to bytes using utf-16be decoder flag to stream and return
        // error.
        stream.prepend(convertCodeUnitToBytes(code_unit, utf16_be));
        return decoderError(fatal);
      }

      // 6. If code unit is in the range U+D800 to U+DBFF, inclusive,
      // set utf-16 lead surrogate to code unit and return continue.
      if (inRange(code_unit, 0xD800, 0xDBFF)) {
        utf16_lead_surrogate = code_unit;
        return null;
      }

      // 7. If code unit is in the range U+DC00 to U+DFFF, inclusive,
      // return error.
      if (inRange(code_unit, 0xDC00, 0xDFFF))
      return decoderError(fatal);

      // 8. Return code point code unit.
      return code_unit;
    };
  }

  // 15.2.2 shared utf-16 encoder
  /**
   * @constructor
   * @implements {Encoder}
   * @param {boolean} utf16_be True if big-endian, false if little-endian.
   * @param {{fatal: boolean}} options
   */
  function UTF16Encoder(utf16_be, options) {
    var fatal = options.fatal;
    /**
                                * @param {Stream} stream Input stream.
                                * @param {number} code_point Next code point read from the stream.
                                * @return {(number|!Array.<number>)} Byte(s) to emit.
                                */
    this.handler = function (stream, code_point) {
      // 1. If code point is end-of-stream, return finished.
      if (code_point === end_of_stream)
      return finished;

      // 2. If code point is in the range U+0000 to U+FFFF, inclusive,
      // return the sequence resulting of converting code point to
      // bytes using utf-16be encoder flag.
      if (inRange(code_point, 0x0000, 0xFFFF))
      return convertCodeUnitToBytes(code_point, utf16_be);

      // 3. Let lead be ((code point − 0x10000) >> 10) + 0xD800,
      // converterd to bytes using utf-16be encoder flag.
      var lead = convertCodeUnitToBytes(
      (code_point - 0x10000 >> 10) + 0xD800, utf16_be);

      // 4. Let trail be ((code point − 0x10000) & 0x3FF) + 0xDC00,
      // converterd to bytes using utf-16be encoder flag.
      var trail = convertCodeUnitToBytes(
      (code_point - 0x10000 & 0x3FF) + 0xDC00, utf16_be);

      // 5. Return a byte sequence of lead followed by trail.
      return lead.concat(trail);
    };
  }

  // 15.3 utf-16be
  // 15.3.1 utf-16be decoder
  /** @param {{fatal: boolean}} options */
  encoders['UTF-16BE'] = function (options) {
    return new UTF16Encoder(true, options);
  };
  // 15.3.2 utf-16be encoder
  /** @param {{fatal: boolean}} options */
  decoders['UTF-16BE'] = function (options) {
    return new UTF16Decoder(true, options);
  };

  // 15.4 utf-16le
  // 15.4.1 utf-16le decoder
  /** @param {{fatal: boolean}} options */
  encoders['UTF-16LE'] = function (options) {
    return new UTF16Encoder(false, options);
  };
  // 15.4.2 utf-16le encoder
  /** @param {{fatal: boolean}} options */
  decoders['UTF-16LE'] = function (options) {
    return new UTF16Decoder(false, options);
  };

  // 15.5 x-user-defined

  // 15.5.1 x-user-defined decoder
  /**
   * @constructor
   * @implements {Decoder}
   * @param {{fatal: boolean}} options
   */
  function XUserDefinedDecoder(options) {
    var fatal = options.fatal;
    /**
                                * @param {Stream} stream The stream of bytes being decoded.
                                * @param {number} bite The next byte read from the stream.
                                * @return {?(number|!Array.<number>)} The next code point(s)
                                *     decoded, or null if not enough data exists in the input
                                *     stream to decode a complete code point.
                                */
    this.handler = function (stream, bite) {
      // 1. If byte is end-of-stream, return finished.
      if (bite === end_of_stream)
      return finished;

      // 2. If byte is an ASCII byte, return a code point whose value
      // is byte.
      if (isASCIIByte(bite))
      return bite;

      // 3. Return a code point whose value is 0xF780 + byte − 0x80.
      return 0xF780 + bite - 0x80;
    };
  }

  // 15.5.2 x-user-defined encoder
  /**
   * @constructor
   * @implements {Encoder}
   * @param {{fatal: boolean}} options
   */
  function XUserDefinedEncoder(options) {
    var fatal = options.fatal;
    /**
                                * @param {Stream} stream Input stream.
                                * @param {number} code_point Next code point read from the stream.
                                * @return {(number|!Array.<number>)} Byte(s) to emit.
                                */
    this.handler = function (stream, code_point) {
      // 1.If code point is end-of-stream, return finished.
      if (code_point === end_of_stream)
      return finished;

      // 2. If code point is an ASCII code point, return a byte whose
      // value is code point.
      if (isASCIICodePoint(code_point))
      return code_point;

      // 3. If code point is in the range U+F780 to U+F7FF, inclusive,
      // return a byte whose value is code point − 0xF780 + 0x80.
      if (inRange(code_point, 0xF780, 0xF7FF))
      return code_point - 0xF780 + 0x80;

      // 4. Return error with code point.
      return encoderError(code_point);
    };
  }

  /** @param {{fatal: boolean}} options */
  encoders['x-user-defined'] = function (options) {
    return new XUserDefinedEncoder(options);
  };
  /** @param {{fatal: boolean}} options */
  decoders['x-user-defined'] = function (options) {
    return new XUserDefinedDecoder(options);
  };

  if (!global['TextEncoder'])
  global['TextEncoder'] = TextEncoder;
  if (!global['TextDecoder'])
  global['TextDecoder'] = TextDecoder;

  if ( true && module.exports) {
    module.exports = {
      TextEncoder: global['TextEncoder'],
      TextDecoder: global['TextDecoder'],
      EncodingIndexes: global["encoding-indexes"] };

  }

  // For strict environments where `this` inside the global scope
  // is `undefined`, take a pure object instead
})(void 0 || {});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 17)["default"]))

/***/ }),
/* 38 */
/*!*****************************************************************************************************************************!*\
  !*** F:/Ten/WeGame/Document download/WeChat Files/WXID_99Ake/FileStorage/File/2019-08/qj_consult/qj_consult/common/help.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var command = {
  /**
                                                                                                                     * 心跳
                                                                                                                     */
  HEARTBEAT: "00001" };


var qiniuUploader = __webpack_require__(/*! ./qiniuUploader */ 39);var _default =

{
  command: command,
  qiniuUploader: qiniuUploader };exports.default = _default;

/***/ }),
/* 39 */
/*!**************************************************************************************************************************************!*\
  !*** F:/Ten/WeGame/Document download/WeChat Files/WXID_99Ake/FileStorage/File/2019-08/qj_consult/qj_consult/common/qiniuUploader.js ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // created by gpake
(function () {

  var config = {
    qiniuRegion: '',
    qiniuImageURLPrefix: '',
    qiniuUploadToken: '',
    qiniuUploadTokenURL: '',
    qiniuUploadTokenFunction: null,
    qiniuShouldUseQiniuFileName: false };


  module.exports = {
    init: init,
    upload: upload


    // 在整个程序生命周期中，只需要 init 一次即可
    // 如果需要变更参数，再调用 init 即可
  };function init(options) {
    config = {
      qiniuRegion: '',
      qiniuImageURLPrefix: '',
      qiniuUploadToken: '',
      qiniuUploadTokenURL: '',
      qiniuUploadTokenFunction: null,
      qiniuShouldUseQiniuFileName: false };

    updateConfigWithOptions(options);
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
    } else if (options.uptokenFunc) {
      config.qiniuUploadTokenFunction = options.uptokenFunc;
    }
    if (options.domain) {
      config.qiniuImageURLPrefix = options.domain;
    }
    config.qiniuShouldUseQiniuFileName = options.shouldUseQiniuFileName;
  }

  function upload(filePath, success, fail, options, progress, cancelTask, before, complete) {
    if (null == filePath) {
      console.error('qiniu uploader need filePath to upload');
      return;
    }
    if (options) {
      console.log("options:------------>", options, "paramter:", arguments);
      updateConfigWithOptions(options);
      console.log("config:", config);
    }
    if (config.qiniuUploadToken) {
      doUpload(filePath, success, fail, options, progress, cancelTask, before, complete);
    } else if (config.qiniuUploadTokenURL) {
      getQiniuToken(function () {
        doUpload(filePath, success, fail, options, progress, cancelTask, before, complete);
      });
    } else if (config.qiniuUploadTokenFunction) {
      config.qiniuUploadToken = config.qiniuUploadTokenFunction();
      if (null == config.qiniuUploadToken && config.qiniuUploadToken.length > 0) {
        console.error('qiniu UploadTokenFunction result is null, please check the return value');
        return;
      }
      doUpload(filePath, success, fail, options, progress, cancelTask, before, complete);
    } else {
      console.error('qiniu uploader need one of [uptoken, uptokenURL, uptokenFunc]');
      return;
    }
  }

  function doUpload(filePath, _success, _fail, options, progress, cancelTask, before, _complete) {
    if (null == config.qiniuUploadToken && config.qiniuUploadToken.length > 0) {
      console.error('qiniu UploadToken is null, please check the init config or networking');
      return;
    }
    var url = uploadURLFromRegionCode(config.qiniuRegion);
    var fileName = filePath.split('//')[1];
    if (options && options.key) {
      fileName = options.key;
    }
    var formData = {
      'token': config.qiniuUploadToken };

    if (!config.qiniuShouldUseQiniuFileName) {
      formData['key'] = fileName;
    }
    before && before();
    var uploadTask = wx.uploadFile({
      url: url,
      filePath: filePath,
      name: 'file',
      formData: formData,
      success: function success(res) {
        var dataString = res.data;
        //   // this if case is a compatibility with wechat server returned a charcode, but was fixed
        //   if(res.data.hasOwnProperty('type') && res.data.type === 'Buffer'){
        //     dataString = String.fromCharCode.apply(null, res.data.data)
        //   }
        try {
          var dataObject = JSON.parse(dataString);
          //do something
          var fileUrl = config.qiniuImageURLPrefix + '/' + dataObject.key;
          dataObject.fileUrl = fileUrl;
          dataObject.imageURL = fileUrl;
          console.log(dataObject);
          if (_success) {
            _success(dataObject);
          }
        } catch (e) {
          console.log('parse JSON failed, origin String is: ' + dataString);
          if (_fail) {
            _fail(e);
          }
        }
      },
      fail: function fail(error) {
        console.error(error);
        if (_fail) {
          _fail(error);
        }
      },
      complete: function complete(err) {
        _complete && _complete(err);
      } });


    uploadTask.onProgressUpdate(function (res) {
      progress && progress(res);
    });

    cancelTask && cancelTask(function () {
      uploadTask.abort();
    });
  }

  function getQiniuToken(callback) {
    wx.request({
      url: config.qiniuUploadTokenURL,
      success: function success(res) {
        var token = res.data.uptoken;
        if (token && token.length > 0) {
          config.qiniuUploadToken = token;
          if (callback) {
            callback();
          }
        } else {
          console.error('qiniuUploader cannot get your token, please check the uptokenURL or server');
        }
      },
      fail: function fail(error) {
        console.error('qiniu UploadToken is null, please check the init config or networking: ' + error);
      } });

  }

  function uploadURLFromRegionCode(code) {
    var uploadURL = null;
    switch (code) {
      case 'ECN':uploadURL = 'https://up.qiniup.com';break;
      case 'NCN':uploadURL = 'https://up-z1.qiniup.com';break;
      case 'SCN':uploadURL = 'https://up-z2.qiniup.com';break;
      case 'NA':uploadURL = 'https://up-na0.qiniup.com';break;
      case 'ASG':uploadURL = 'https://up-as0.qiniup.com';break;
      default:console.error('please make the region is with one of [ECN, SCN, NCN, NA, ASG]');}

    return uploadURL;
  }

})();

/***/ }),
/* 40 */
/*!****************************************************************************************************************************!*\
  !*** F:/Ten/WeGame/Document download/WeChat Files/WXID_99Ake/FileStorage/File/2019-08/qj_consult/qj_consult/utils/util.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var getRandomName = function getRandomName() {
  var familyNames = new Array(
  "赵", "钱", "孙", "李", "周", "吴", "郑", "王", "冯", "陈",
  "褚", "卫", "蒋", "沈", "韩", "杨", "朱", "秦", "尤", "许",
  "何", "吕", "施", "张", "孔", "曹", "严", "华", "金", "魏",
  "陶", "姜", "戚", "谢", "邹", "喻", "柏", "水", "窦", "章",
  "云", "苏", "潘", "葛", "奚", "范", "彭", "郎", "鲁", "韦",
  "昌", "马", "苗", "凤", "花", "方", "俞", "任", "袁", "柳",
  "酆", "鲍", "史", "唐", "费", "廉", "岑", "薛", "雷", "贺",
  "倪", "汤", "滕", "殷", "罗", "毕", "郝", "邬", "安", "常",
  "乐", "于", "时", "傅", "皮", "卞", "齐", "康", "伍", "余",
  "元", "卜", "顾", "孟", "平", "黄", "和", "穆", "萧", "尹");

  var givenNames = new Array(
  "子璇", "淼", "国栋", "夫子", "瑞堂", "甜", "敏", "尚", "国贤", "贺祥", "晨涛",
  "昊轩", "易轩", "益辰", "益帆", "益冉", "瑾春", "瑾昆", "春齐", "杨", "文昊",
  "东东", "雄霖", "浩晨", "熙涵", "溶溶", "冰枫", "欣欣", "宜豪", "欣慧", "建政",
  "美欣", "淑慧", "文轩", "文杰", "欣源", "忠林", "榕润", "欣汝", "慧嘉", "新建",
  "建林", "亦菲", "林", "冰洁", "佳欣", "涵涵", "禹辰", "淳美", "泽惠", "伟洋",
  "涵越", "润丽", "翔", "淑华", "晶莹", "凌晶", "苒溪", "雨涵", "嘉怡", "佳毅",
  "子辰", "佳琪", "紫轩", "瑞辰", "昕蕊", "萌", "明远", "欣宜", "泽远", "欣怡",
  "佳怡", "佳惠", "晨茜", "晨璐", "运昊", "汝鑫", "淑君", "晶滢", "润莎", "榕汕",
  "佳钰", "佳玉", "晓庆", "一鸣", "语晨", "添池", "添昊", "雨泽", "雅晗", "雅涵",
  "清妍", "诗悦", "嘉乐", "晨涵", "天赫", "玥傲", "佳昊", "天昊", "萌萌", "若萌");

  var i = parseInt(10 * Math.random()) * 10 + parseInt(10 * Math.random());
  var familyName = familyNames[i];
  var j = parseInt(10 * Math.random()) * 10 + parseInt(10 * Math.random());
  var givenName = givenNames[i];
  var name = familyName + givenName;
  return name;
};



var formatTime = function formatTime(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':');
};

//根据时间排序

// var compare1 = function (a, b) {
//   return b['createdAt'] < a['createdAt']
// }

var now_time = function now_time(time) {
  var date = new Date(time * 1000);

  //月  
  var M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
  //日  
  var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  //时 
  var h = date.getHours();
  //分  
  var m = date.getMinutes();
  if (m < 10) {
    m = "0" + m;
  }
  var now = "".concat(M, "\u6708").concat(D, "\u65E5 ").concat(h, ":").concat(m);
  return now;
};

var nowtime = function nowtime() {
  //获取当前时间戳  
  var timestamp = Date.parse(new Date());
  timestamp = timestamp / 1000;

  //获取当前时间  
  return timestamp;
};

var timechange = function timechange(timestamp) {
  var n = timestamp * 1000;
  var date = new Date(n);
  //年  
  var Y = date.getFullYear();
  //月  
  var M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
  //日  
  var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  //时 

  var h = date.getHours();
  //分  
  var m = date.getMinutes();

  console.log("".concat(h, ":").concat(m));
  return date.toLocaleString();
};

var formatNumber = function formatNumber(n) {
  n = n.toString();
  return n[1] ? n : '0' + n;
};

var formatDate = function formatDate(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  return [year, month, day].map(formatNumber).join('-');
};

//formatPrice有问题
var formatPrice = function formatPrice(n) {
  n = n.toString();
  return n.substring(0, n.length - 2) + '.' + n.substring(n.length - 2, n.length);
};

var compare = function compare(prop) {// 降序排序
  return function (obj1, obj2) {
    var val1 = obj1[prop];
    var val2 = obj2[prop];
    if (val1 > val2) {
      return -1;
    } else if (val1 < val2) {
      return 1;
    } else {
      return 0;
    }
  };
};


var timeago = function timeago(timestamp) {
  var result;
  var minute = 1000 * 60;
  var hour = minute * 60;
  var day = hour * 24;
  var halfamonth = day * 15;
  var month = day * 30;
  var now = new Date();
  var curTime = new Date(timestamp * 1000); //后端返回的是秒数
  var diffValue = now - curTime;

  if (diffValue < 0) {
    return;
  }
  var monthC = diffValue / month;
  var weekC = diffValue / (7 * day);
  var dayC = diffValue / day;
  var hourC = diffValue / hour;
  var minC = diffValue / minute;
  if (monthC >= 1) {
    if (monthC <= 12)
    result = "" + parseInt(monthC) + "月前";else
    {
      result = now.toLocaleString();
      console.log('年');
    }
  } else if (weekC >= 1) {
    result = "" + parseInt(weekC) + "周前";
  } else if (dayC >= 1) {
    result = "" + parseInt(dayC) + "天前";
  } else if (hourC >= 1) {
    result = "" + parseInt(hourC) + "小时前";
  } else if (minC >= 1) {
    result = "" + parseInt(minC) + "分钟前";
  } else {
    result = "（刚刚）";
  }

  return result;
};
var transCity = function transCity(city) {var _citys;
  // 全国市级城市拼音 - 中文对照表
  var citys = (_citys = {
    "Beijing": "北京",
    "Tianjin": "天津",
    "Shanghai": "上海",
    "Chongqing": "重庆",
    "Yinchuan": "银川",
    "Shizuishan": "石嘴山",
    "Wuzhong": "吴忠",
    "Guyuan": "固原",
    "Zhongwei": "中卫",
    "Wulumuqi": "乌鲁木齐",
    "Kelamayi": "克拉玛依",
    "Lasa": "拉萨",
    "Huhehaote": "呼和浩特",
    "Baotou": "包头",
    "Wuhai": "乌海",
    "Chifeng": "赤峰",
    "Tongliao": "通辽",
    "Eerduosi": "鄂尔多斯",
    "Hulunbeier": "呼伦贝尔",
    "Bayannaoer": "巴彦淖尔",
    "Wulanchabu": "乌兰察布",
    "Nanning": "南宁",
    "Liuzhou": "柳州",
    "Guilin": "桂林",
    "Wuzhou": "梧州",
    "Beihai": "北海",
    "Chongzuo": "崇左",
    "Laibin": "来宾",
    "Hezhou": "贺州",
    "Yulin": "玉林",
    "Baise": "百色",
    "Hechi": "河池",
    "Qinzhou": "钦州",
    "Fangchenggang": "防城港",
    "Guigang": "贵港",
    "Haerbin": "哈尔滨",
    "Daqing": "大庆",
    "Qiqihaer": "齐齐哈尔",
    "Jiamusi": "佳木斯",
    "Jixi": "鸡西",
    "Hegang": "鹤岗",
    "Shuangyashan": "双鸭山",
    "Mudanjiang": "牡丹江",
    "Yichun": "伊春",
    "Qitaihe": "七台河",
    "Heihe": "黑河",
    "Suihua": "绥化",
    "Changchun": "长春",
    "Jilin": "吉林",
    "Siping": "四平",
    "Liaoyuan": "辽源",
    "Tonghua": "通化",
    "Baishan": "白山",
    "Songyuan": "松原",
    "Baicheng": "白城",
    "Shenyang": "沈阳",
    "Dalian": "大连",
    "Anshan": "鞍山",
    "Fushun": "抚顺",
    "Benxi": "本溪",
    "Dandong": "丹东",
    "Jinzhou": "锦州",
    "Yingkou": "营口",
    "Fuxin": "阜新",
    "Liaoyang": "辽阳",
    "Panjin": "盘锦",
    "Tieling": "铁岭",
    "Chaoyang": "朝阳",
    "Huludao": "葫芦岛",
    "Shijiazhuang": "石家庄",
    "Tangshan": "唐山",
    "Handan": "邯郸",
    "Qinghuangdao": "秦皇岛",
    "Baoding": "保定",
    "Zhangjiakou": "张家口",
    "Chengde": "承德",
    "Langfang": "廊坊",
    "Cangzhou": "沧州",
    "Hengshui": "衡水",
    "Xingtai": "邢台",
    "Jinan": "济南",
    "Qingdao": "青岛",
    "Zibo": "淄博",
    "Zaozhuang": "枣庄",
    "Dongying": "东营",
    "Yantai": "烟台",
    "Weifang": "潍坊",
    "Jining": "济宁",
    "Taian": "泰安",
    "Weihai": "威海",
    "Rizhao": "日照",
    "Laiwu": "莱芜",
    "Linyi": "临沂",
    "Dezhou": "德州",
    "Liaocheng": "聊城",
    "Heze": "菏泽",
    "Binzhou": "滨州",
    "Nanjing": "南京",
    "Zhenjiang": "镇江",
    "Changzhou": "常州",
    "Wuxi": "无锡",
    "Suzhou": "苏州",
    "Xuzhou": "徐州",
    "Lianyungang": "连云港",
    "Huaian": "淮安",
    "Yancheng": "盐城",
    "Yangzhou": "扬州",
    "Taizhou": "泰州",
    "Nantong": "南通",
    "Suqian": "宿迁",
    "Hefei": "合肥",
    "Bengbu": "蚌埠",
    "Wuhu": "芜湖",
    "Huainan": "淮南",
    "Bozhou": "亳州",
    "Fuyang": "阜阳",
    "Huaibei": "淮北" }, _defineProperty(_citys, "Suzhou",
  "宿州"), _defineProperty(_citys,
  "Chuzhou", "滁州"), _defineProperty(_citys,
  "Anqing", "安庆"), _defineProperty(_citys,
  "Chaohu", "巢湖"), _defineProperty(_citys,
  "Maanshan", "马鞍山"), _defineProperty(_citys,
  "Xuancheng", "宣城"), _defineProperty(_citys,
  "Huangshan", "黄山"), _defineProperty(_citys,
  "Chizhou", "池州"), _defineProperty(_citys,
  "Tongling", "铜陵"), _defineProperty(_citys,
  "Hangzhou", "杭州"), _defineProperty(_citys,
  "Jiaxing", "嘉兴"), _defineProperty(_citys,
  "Huzhou", "湖州"), _defineProperty(_citys,
  "Ningbo", "宁波"), _defineProperty(_citys,
  "Jinhua", "金华"), _defineProperty(_citys,
  "Wenzhou", "温州"), _defineProperty(_citys,
  "Lishui", "丽水"), _defineProperty(_citys,
  "Shaoxing", "绍兴"), _defineProperty(_citys,
  "Quzhou", "衢州"), _defineProperty(_citys,
  "Zhoushan", "舟山"), _defineProperty(_citys, "Taizhou",
  "台州"), _defineProperty(_citys,
  "Fuzhou", "福州"), _defineProperty(_citys,
  "Xiamen", "厦门"), _defineProperty(_citys,
  "Quanzhou", "泉州"), _defineProperty(_citys,
  "Sanming", "三明"), _defineProperty(_citys,
  "Nanping", "南平"), _defineProperty(_citys,
  "Zhangzhou", "漳州"), _defineProperty(_citys,
  "Putian", "莆田"), _defineProperty(_citys,
  "Ningde", "宁德"), _defineProperty(_citys,
  "Longyan", "龙岩"), _defineProperty(_citys,
  "Guangzhou", "广州"), _defineProperty(_citys,
  "Shenzhen", "深圳"), _defineProperty(_citys,
  "Shantou", "汕头"), _defineProperty(_citys,
  "Huizhou", "惠州"), _defineProperty(_citys,
  "Zhuhai", "珠海"), _defineProperty(_citys,
  "Jieyang", "揭阳"), _defineProperty(_citys,
  "Foshan", "佛山"), _defineProperty(_citys,
  "Heyuan", "河源"), _defineProperty(_citys,
  "Yangjiang", "阳江"), _defineProperty(_citys,
  "Maoming", "茂名"), _defineProperty(_citys,
  "Zhanjiang", "湛江"), _defineProperty(_citys,
  "Meizhou", "梅州"), _defineProperty(_citys,
  "Zhaoqing", "肇庆"), _defineProperty(_citys,
  "Shaoguan", "韶关"), _defineProperty(_citys,
  "Chaozhou", "潮州"), _defineProperty(_citys,
  "Dongguan", "东莞"), _defineProperty(_citys,
  "Zhongshan", "中山"), _defineProperty(_citys,
  "Qingyuan", "清远"), _defineProperty(_citys,
  "Jiangmen", "江门"), _defineProperty(_citys,
  "Shanwei", "汕尾"), _defineProperty(_citys,
  "Yunfu", "云浮"), _defineProperty(_citys,
  "Haikou", "海口"), _defineProperty(_citys,
  "Sanya", "三亚"), _defineProperty(_citys,
  "Kunming", "昆明"), _defineProperty(_citys,
  "Qujing", "曲靖"), _defineProperty(_citys,
  "Yuxi", "玉溪"), _defineProperty(_citys,
  "Baoshan", "保山"), _defineProperty(_citys,
  "Zhaotong", "昭通"), _defineProperty(_citys,
  "Lijiang", "丽江"), _defineProperty(_citys,
  "Puer", "普洱"), _defineProperty(_citys,
  "Lincang", "临沧"), _defineProperty(_citys,
  "Guiyang", "贵阳"), _defineProperty(_citys,
  "Liupanshui", "六盘水"), _defineProperty(_citys,
  "Zunyi", "遵义"), _defineProperty(_citys,
  "Anshun", "安顺"), _defineProperty(_citys,
  "Chengdu", "成都"), _defineProperty(_citys,
  "Mianyang", "绵阳"), _defineProperty(_citys,
  "Deyang", "德阳"), _defineProperty(_citys,
  "Guangyuan", "广元"), _defineProperty(_citys,
  "Zigong", "自贡"), _defineProperty(_citys,
  "Panzhihua", "攀枝花"), _defineProperty(_citys,
  "Leshan", "乐山"), _defineProperty(_citys,
  "Nanchong", "南充"), _defineProperty(_citys,
  "Neijiang", "内江"), _defineProperty(_citys,
  "Suining", "遂宁"), _defineProperty(_citys,
  "Guangan", "广安"), _defineProperty(_citys,
  "Luzhou", "泸州"), _defineProperty(_citys,
  "Dazhou", "达州"), _defineProperty(_citys,
  "Meishan", "眉山"), _defineProperty(_citys,
  "Yibin", "宜宾"), _defineProperty(_citys,
  "Yaan", "雅安"), _defineProperty(_citys,
  "Ziyang", "资阳"), _defineProperty(_citys,
  "Changsha", "长沙"), _defineProperty(_citys,
  "Zhuzhou", "株洲"), _defineProperty(_citys,
  "Xiangtan", "湘潭"), _defineProperty(_citys,
  "Hengyang", "衡阳"), _defineProperty(_citys,
  "Yueyang", "岳阳"), _defineProperty(_citys,
  "Chenzhou", "郴州"), _defineProperty(_citys,
  "Yongzhou", "永州"), _defineProperty(_citys,
  "Shaoyang", "邵阳"), _defineProperty(_citys,
  "Huaihua", "怀化"), _defineProperty(_citys,
  "Changde", "常德"), _defineProperty(_citys,
  "Yiyang", "益阳"), _defineProperty(_citys,
  "Zhangjiajie", "张家界"), _defineProperty(_citys,
  "Loudi", "娄底"), _defineProperty(_citys,
  "Wuhan", "武汉"), _defineProperty(_citys,
  "Xiangfan", "襄樊"), _defineProperty(_citys,
  "Yichang", "宜昌"), _defineProperty(_citys,
  "Huangshi", "黄石"), _defineProperty(_citys,
  "Ezhou", "鄂州"), _defineProperty(_citys,
  "Suizhou", "随州"), _defineProperty(_citys,
  "Jingzhou", "荆州"), _defineProperty(_citys,
  "Jingmen", "荆门"), _defineProperty(_citys,
  "Shiyan", "十堰"), _defineProperty(_citys,
  "Xiaogan", "孝感"), _defineProperty(_citys,
  "Huanggang", "黄冈"), _defineProperty(_citys,
  "Xianning", "咸宁"), _defineProperty(_citys,
  "Zhengzhou", "郑州"), _defineProperty(_citys,
  "Luoyang", "洛阳"), _defineProperty(_citys,
  "Kaifeng", "开封"), _defineProperty(_citys,
  "Luohe", "漯河"), _defineProperty(_citys,
  "Anyang", "安阳"), _defineProperty(_citys,
  "Xinxiang", "新乡"), _defineProperty(_citys,
  "Zhoukou", "周口"), _defineProperty(_citys,
  "Sanmenxia", "三门峡"), _defineProperty(_citys,
  "Jiaozuo", "焦作"), _defineProperty(_citys,
  "Pingdingshan", "平顶山"), _defineProperty(_citys,
  "Xinyang", "信阳"), _defineProperty(_citys,
  "Nanyang", "南阳"), _defineProperty(_citys,
  "Hebi", "鹤壁"), _defineProperty(_citys,
  "Puyang", "濮阳"), _defineProperty(_citys,
  "Xuchang", "许昌"), _defineProperty(_citys,
  "Shangqiu", "商丘"), _defineProperty(_citys,
  "Zhumadian", "驻马店"), _defineProperty(_citys,
  "Taiyuan", "太原"), _defineProperty(_citys,
  "DaTong", "大同"), _defineProperty(_citys,
  "Xinzhou", "忻州"), _defineProperty(_citys,
  "Yangquan", "阳泉"), _defineProperty(_citys,
  "Changzhi", "长治"), _defineProperty(_citys,
  "Jincheng", "晋城"), _defineProperty(_citys,
  "Shuozhou", "朔州"), _defineProperty(_citys,
  "Jinzhong", "晋中"), _defineProperty(_citys,
  "Yuncheng", "运城"), _defineProperty(_citys,
  "Linfen", "临汾"), _defineProperty(_citys,
  "Lvliang", "吕梁"), _defineProperty(_citys,
  "Xian", "西安"), _defineProperty(_citys,
  "Xianyang", "咸阳"), _defineProperty(_citys,
  "Tongchuan", "铜川"), _defineProperty(_citys,
  "Yanan", "延安"), _defineProperty(_citys,
  "Baoji", "宝鸡"), _defineProperty(_citys,
  "Weinan", "渭南"), _defineProperty(_citys,
  "Hanzhoung", "汉中"), _defineProperty(_citys,
  "Ankang", "安康"), _defineProperty(_citys,
  "Shangluo", "商洛"), _defineProperty(_citys, "Yulin",
  "榆林"), _defineProperty(_citys,
  "Lanzhou", "兰州"), _defineProperty(_citys,
  "Tianshui", "天水"), _defineProperty(_citys,
  "Pingliang", "平凉"), _defineProperty(_citys,
  "Jiuquan", "酒泉"), _defineProperty(_citys,
  "Jiayuguan", "嘉峪关"), _defineProperty(_citys,
  "Jinchang", "金昌"), _defineProperty(_citys,
  "baiyiin", "白银"), _defineProperty(_citys,
  "Wuwei", "武威"), _defineProperty(_citys,
  "Zhangye", "张掖"), _defineProperty(_citys,
  "Qingyang", "庆阳"), _defineProperty(_citys,
  "Dingxi", "定西"), _defineProperty(_citys,
  "Longnan", "陇南"), _defineProperty(_citys,
  "Xining", "西宁"), _defineProperty(_citys,
  "Nanchang", "南昌"), _defineProperty(_citys,
  "Jiujiang", "九江"), _defineProperty(_citys,
  "Ganzhou", "赣州"), _defineProperty(_citys,
  "Jian", "吉安"), _defineProperty(_citys,
  "Yingtan", "鹰潭"), _defineProperty(_citys,
  "Shangrao", "上饶"), _defineProperty(_citys,
  "Pingxiang", "萍乡"), _defineProperty(_citys,
  "Jingdezhen", "景德镇"), _defineProperty(_citys,
  "Xinyu", "新余"), _defineProperty(_citys, "Yichun",
  "宜春"), _defineProperty(_citys, "Fuzhou",
  "抚州"), _citys);

  if (citys[city]) {
    return citys[city];
  } else {
    return city;
  }
};

var questions = function questions() {
  var question = [{
    "name": '“奇纪时尚，你穿我搭”是一个什么类型的小程序。',
    "viewid": '0',
    "content_url": "../helpMessage/helpMessage",
    "content": '奇纪时尚，你穿我搭是一款专业的形象设计咨询和服务平台。客户可以“线上测试系统”，对自己的肤色风格体系等特质进行了解。“咨询”“找顾问”提问，解决我们日常的穿搭疑问，并由专业的形象顾问给出专业搭配方案。“私人衣橱”，上传我们的个人服饰，由专业的形象顾问给你把关，它们是否适合你等。平台包含线上测试系统、专业咨询回复、商城商品推荐，专业顾问等功能板块，形成从测试到设计服务到产品推荐三位一体的形象设计平台。' },


  {
    "name": '我在“奇纪时尚，你穿我搭”咨询，个人信息是否安全。',
    "viewid": '1',
    "content_url": "../helpMessage/helpMessage",
    "content": '您在平台的注册信息、个人账号都是保密的，请您放心！不过需要提示您，请您在咨询过程中不要将个人手机号码、微信等联系方式告知形象顾问，如您脱离平台与医生私下联络，平台将无法保护您的权益。' },


  {
    "name": '如何购买“商家平台”中的服饰？',
    "viewid": '2',
    "content_url": "../helpMessage/helpMessage",
    "content": '“商家平台”的中的服饰，主要是专业顾问在搭配方案时，选用推荐的服饰。如果需要购买。点击相应商品，可以直接与商家联系沟通购买。销售及售后由相应商家负责完成。' },

  {
    "name": '什么问题可以在“奇纪时尚，你穿我搭”咨询。',
    "viewid": '3',
    "content_url": "../helpMessage/helpMessage",
    "content": '“奇纪时尚，你穿我搭”平台提供形象设计方面的咨询服务。日常的穿搭，发型，妆面等都可以进行咨询。在进行提问咨询前，需完成形象测试（目前测试免费）。提问问题不要过于广而泛的问题：例如：我适合穿什么衣服/包/鞋？问题要具体，精简。例如：这套衣服适合我约会用吗？/ 这双鞋与我这套衣服搭配是否合理？/这件服饰适合我穿吗？等不要同时文几个问题，否则顾问只会针对提出的第一个问题进行解答。您提出问题的后所满意的方案，会在“个人中心”中的“我的方案”中查看。' },

  {
    "name": '提问是否收费？',
    "viewid": '4',
    "content_url": "../helpMessage/helpMessage",
    "content": '形象顾问都是经过专业的学习和培训考核后，才能入住到平台，付出时间和精力理应获得相应报酬，提问可以通过“咨询”或者“找顾问”的方式进行图文提问。“咨询”目前收费为1元/次，随机分配1个专业顾问进行解答。“找顾问”根据选择不同的顾问级别付费。您可以更具实际需求进行选择。' },

  {
    "name": '提问后多少时间可以得到回复？',
    "viewid": '5',
    "content_url": "../helpMessage/helpMessage",
    "content": '目前回复时间为24小时内。' },

  {
    "name": '形象测试中照片应该怎么拍？',
    "viewid": '6',
    "content_url": "../helpMessage/helpMessage",
    "content": '形象测试系统，是一款智能个人形象识别加人工辅助的系统。所上传照片如果不符合要求，会影响测试，甚至无法测试。照片要求背景简单干净，最好是纯色背景。其中正面照片必须是无美颜PS，素颜照（如每天有化妆习惯，可画淡妆）。形象测试结果，您在24小时内，通过“个人中心”中的“会员档案”中查看。其中肤色测试需另行收费 ，1680元/人，可联系客服进行咨询。' },

  {
    "name": '私人衣橱是什么？',
    "viewid": '7',
    "content_url": "../helpMessage/helpMessage",
    "content": ' 私人衣橱就是您个人的线上电子衣橱，可以形成专业的个人服饰数据。您可以通过“私人衣橱”上传自己的服装，包，鞋 ，饰品等。并由专业顾问判断是否适合您？ 目前收费为1元/件。顾问在在进行搭配方案时，顾问首先选择私人衣橱中合适的服饰进行搭配。' },

  {
    "name": '为什么我上传在私人衣橱中的服饰无法判断？',
    "viewid": '8',
    "content_url": "../helpMessage/helpMessage",
    "content": '在上传个人服饰应注意：1、上传的服饰背景应简单干净，最好是纯色背景。 2、照片要清晰。 3、要对服饰规格进行描述，如衣服的长短/厚薄，包的长款，饰品的大小等。4、如照片有严重色差，可在服饰尺寸描述中简单说明。' },

  {
    "name": '支付方式有哪些？',
    "viewid": '9',
    "content_url": "../helpMessage/helpMessage",
    "content": '首次登陆会送相一定数量的优惠券，优惠券使用完后，可以选择“充值”或者“微信支付”的方式进行支付。' }];


  return question;
};

module.exports = {
  formatTime: formatTime,
  formatDate: formatDate,
  transCity: transCity,
  compare: compare,
  formatPrice: formatPrice,
  questions: questions,
  getRandomName: getRandomName,
  nowtime: nowtime,
  timechange: timechange,
  timeago: timeago,
  now_time: now_time
  // compare1: compare1
};

/***/ }),
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */
/*!***********************************************************************************************************************************************!*\
  !*** F:/Ten/WeGame/Document download/WeChat Files/WXID_99Ake/FileStorage/File/2019-08/qj_consult/qj_consult/components/uni-icon/uni-icon.vue ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uni_icon_vue_vue_type_template_id_6f8e89dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-icon.vue?vue&type=template&id=6f8e89dc& */ 70);
/* harmony import */ var _uni_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-icon.vue?vue&type=script&lang=js& */ 72);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _uni_icon_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uni-icon.vue?vue&type=style&index=0&lang=css& */ 74);
/* harmony import */ var _E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 9);






/* normalize component */

var component = Object(_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _uni_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _uni_icon_vue_vue_type_template_id_6f8e89dc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _uni_icon_vue_vue_type_template_id_6f8e89dc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "F:/Ten/WeGame/Document download/WeChat Files/WXID_99Ake/FileStorage/File/2019-08/qj_consult/qj_consult/components/uni-icon/uni-icon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 70 */
/*!******************************************************************************************************************************************************************************!*\
  !*** F:/Ten/WeGame/Document download/WeChat Files/WXID_99Ake/FileStorage/File/2019-08/qj_consult/qj_consult/components/uni-icon/uni-icon.vue?vue&type=template&id=6f8e89dc& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_icon_vue_vue_type_template_id_6f8e89dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./uni-icon.vue?vue&type=template&id=6f8e89dc& */ 71);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_icon_vue_vue_type_template_id_6f8e89dc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_icon_vue_vue_type_template_id_6f8e89dc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 71 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/Ten/WeGame/Document download/WeChat Files/WXID_99Ake/FileStorage/File/2019-08/qj_consult/qj_consult/components/uni-icon/uni-icon.vue?vue&type=template&id=6f8e89dc& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("view", {
    staticClass: "uni-icon",
    class: "uni-icon-" + _vm.type,
    style: { color: _vm.color, "font-size": _vm.size + "px" },
    attrs: { eventid: "c76f4378-0" },
    on: { click: _vm._onClick }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 72 */
/*!************************************************************************************************************************************************************************!*\
  !*** F:/Ten/WeGame/Document download/WeChat Files/WXID_99Ake/FileStorage/File/2019-08/qj_consult/qj_consult/components/uni-icon/uni-icon.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./uni-icon.vue?vue&type=script&lang=js& */ 73);
/* harmony import */ var _E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 73 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/Ten/WeGame/Document download/WeChat Files/WXID_99Ake/FileStorage/File/2019-08/qj_consult/qj_consult/components/uni-icon/uni-icon.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =









{
  name: 'UniIcon',
  props: {
    type: {
      type: String,
      default: '' },

    color: {
      type: String,
      default: '#333333' },

    size: {
      type: [Number, String],
      default: 16 } },


  methods: {
    _onClick: function _onClick() {
      this.$emit('click');
    } } };exports.default = _default;

/***/ }),
/* 74 */
/*!********************************************************************************************************************************************************************************!*\
  !*** F:/Ten/WeGame/Document download/WeChat Files/WXID_99Ake/FileStorage/File/2019-08/qj_consult/qj_consult/components/uni-icon/uni-icon.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_icon_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./uni-icon.vue?vue&type=style&index=0&lang=css& */ 75);
/* harmony import */ var _E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_icon_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_icon_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_icon_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_icon_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_icon_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 75 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/Ten/WeGame/Document download/WeChat Files/WXID_99Ake/FileStorage/File/2019-08/qj_consult/qj_consult/components/uni-icon/uni-icon.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 76 */,
/* 77 */,
/* 78 */
/*!*************************************************************************************************************************************************!*\
  !*** F:/Ten/WeGame/Document download/WeChat Files/WXID_99Ake/FileStorage/File/2019-08/qj_consult/qj_consult/components/im-chat/messageshow.vue ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _messageshow_vue_vue_type_template_id_282e0bb9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messageshow.vue?vue&type=template&id=282e0bb9& */ 79);
/* harmony import */ var _messageshow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messageshow.vue?vue&type=script&lang=js& */ 81);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _messageshow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _messageshow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _messageshow_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messageshow.vue?vue&type=style&index=0&lang=css& */ 83);
/* harmony import */ var _E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 9);






/* normalize component */

var component = Object(_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _messageshow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _messageshow_vue_vue_type_template_id_282e0bb9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _messageshow_vue_vue_type_template_id_282e0bb9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "F:/Ten/WeGame/Document download/WeChat Files/WXID_99Ake/FileStorage/File/2019-08/qj_consult/qj_consult/components/im-chat/messageshow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 79 */
/*!********************************************************************************************************************************************************************************!*\
  !*** F:/Ten/WeGame/Document download/WeChat Files/WXID_99Ake/FileStorage/File/2019-08/qj_consult/qj_consult/components/im-chat/messageshow.vue?vue&type=template&id=282e0bb9& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_messageshow_vue_vue_type_template_id_282e0bb9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./messageshow.vue?vue&type=template&id=282e0bb9& */ 80);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_messageshow_vue_vue_type_template_id_282e0bb9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_messageshow_vue_vue_type_template_id_282e0bb9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 80 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/Ten/WeGame/Document download/WeChat Files/WXID_99Ake/FileStorage/File/2019-08/qj_consult/qj_consult/components/im-chat/messageshow.vue?vue&type=template&id=282e0bb9& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "m-item", attrs: { id: "message" + _vm.id } },
    [
      _vm.message.user == "home"
        ? _c("view", { staticClass: "m-left" }, [
            _c("image", {
              staticClass: "head_icon",
              attrs: { src: _vm.home.avatar }
            })
          ])
        : _vm._e(),
      _c("view", { staticClass: "m-content" }, [
        _c(
          "view",
          {
            class:
              _vm.message.user == "customer" ? "m-time_right" : "m-time_left"
          },
          [_c("text", [_vm._v(_vm._s(_vm.message.now_time))])]
        ),
        _vm.message.user == "home"
          ? _c("view", { staticClass: "name-left" }, [
              _vm._v(_vm._s(_vm.home.name))
            ])
          : _vm._e(),
        _vm.message.user == "customer"
          ? _c("view", { staticClass: "name-right" }, [
              _vm._v(_vm._s(_vm.name))
            ])
          : _vm._e(),
        _c("view", { staticClass: "m-content-head" }, [
          _c(
            "view",
            {
              class:
                _vm.message.user == "customer"
                  ? "m-content-head-right"
                  : "m-content-head-left"
            },
            [
              _vm.message.type == "text"
                ? _c("view", { class: "m-content-head-" + _vm.message.user }, [
                    _vm._v(_vm._s(_vm.message.content))
                  ])
                : _vm.message.type == "voice"
                ? _c(
                    "view",
                    {
                      class: "m-content-head-" + _vm.message.user,
                      attrs: { eventid: "10b70feb-0" },
                      on: { tap: _vm.playVoice }
                    },
                    [
                      _c(
                        "text",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.message.user == "customer" ? 1 : 0,
                              expression: "message.user=='customer'? 1:0"
                            }
                          ],
                          staticStyle: { "font-size": "35rpx" }
                        },
                        [_vm._v(_vm._s(_vm.message.duration) + '"')]
                      ),
                      _c("image", {
                        attrs: {
                          src:
                            "../../static/image/voice_" +
                            _vm.message.user +
                            ".png",
                          mode: ""
                        }
                      }),
                      _c(
                        "text",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.message.user == "customer" ? 0 : 1,
                              expression: "message.user=='customer'? 0:1"
                            }
                          ],
                          staticStyle: { "font-size": "35rpx" }
                        },
                        [_vm._v(_vm._s(_vm.message.duration) + '"')]
                      )
                    ]
                  )
                : _vm.message.type == "picture"
                ? _c(
                    "view",
                    {
                      class: "m-content-headimg-" + _vm.message.user,
                      attrs: { eventid: "10b70feb-1" },
                      on: { tap: _vm.preimage }
                    },
                    [
                      _c("image", {
                        staticClass: "img_icon",
                        attrs: { src: _vm.message.content }
                      })
                    ]
                  )
                : _vm.message.type == "video"
                ? _c(
                    "view",
                    { class: "m-content-headimg-" + _vm.message.user },
                    [
                      _c("video", {
                        staticClass: "vedio_icon",
                        attrs: {
                          src: _vm.message.content,
                          "enable-danmu": "",
                          "danmu-btn": "",
                          controls: "",
                          eventid: "10b70feb-2"
                        },
                        on: { error: _vm.videoErrorCallback }
                      })
                    ]
                  )
                : _vm._e()
            ]
          )
        ])
      ]),
      _c("view", { staticClass: "m-right" }, [
        _vm.message.user == "customer"
          ? _c("image", {
              staticClass: "head_icon",
              attrs: { src: _vm.avatar }
            })
          : _vm._e()
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 81 */
/*!**************************************************************************************************************************************************************************!*\
  !*** F:/Ten/WeGame/Document download/WeChat Files/WXID_99Ake/FileStorage/File/2019-08/qj_consult/qj_consult/components/im-chat/messageshow.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_messageshow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./messageshow.vue?vue&type=script&lang=js& */ 82);
/* harmony import */ var _E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_messageshow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_messageshow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_messageshow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_messageshow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_messageshow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 82 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/Ten/WeGame/Document download/WeChat Files/WXID_99Ake/FileStorage/File/2019-08/qj_consult/qj_consult/components/im-chat/messageshow.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;













































var _uniIcon = _interopRequireDefault(__webpack_require__(/*! ../uni-icon/uni-icon.vue */ 69));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var innerAudioContext = uni.createInnerAudioContext();var _default =

{
  props: ['message', 'id', 'home', 'avatar', 'name'],
  components: {
    uniIcon: _uniIcon.default },


  methods: {
    videoErrorCallback: function videoErrorCallback(e) {
      console.log('视频错误信息:');
      console.log(e.target.errMsg);
    },
    playVoice: function playVoice() {
      if (this.message.content) {
        var bgAudioMannager = uni.getBackgroundAudioManager();
        bgAudioMannager.title = "语音";
        bgAudioMannager.src = this.message.content;
        bgAudioMannager.onPlay(function (res) {
          console.log("开始播放");
        });
        bgAudioMannager.onError(function (res) {
          console.log(res.errMsg);
          console.log(res.errCode);
        });
        bgAudioMannager.onEnded(function (res) {
          console.log("播放结束");
        });
      }
    },
    preimage: function preimage() {
      console.log("查看图片");
      var a = [this.message.content];
      console.log(a[0]);
      uni.previewImage({
        urls: a });


    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 17)["default"]))

/***/ }),
/* 83 */
/*!**********************************************************************************************************************************************************************************!*\
  !*** F:/Ten/WeGame/Document download/WeChat Files/WXID_99Ake/FileStorage/File/2019-08/qj_consult/qj_consult/components/im-chat/messageshow.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_messageshow_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./messageshow.vue?vue&type=style&index=0&lang=css& */ 84);
/* harmony import */ var _E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_messageshow_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_messageshow_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_messageshow_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_messageshow_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_messageshow_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 84 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/Ten/WeGame/Document download/WeChat Files/WXID_99Ake/FileStorage/File/2019-08/qj_consult/qj_consult/components/im-chat/messageshow.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */
/*!********************************************************************************************************************************************************!*\
  !*** F:/Ten/WeGame/Document download/WeChat Files/WXID_99Ake/FileStorage/File/2019-08/qj_consult/qj_consult/components/list-pagination/pagination.vue ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pagination_vue_vue_type_template_id_46b6b62d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagination.vue?vue&type=template&id=46b6b62d& */ 155);
/* harmony import */ var _pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagination.vue?vue&type=script&lang=js& */ 157);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _pagination_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagination.vue?vue&type=style&index=0&lang=css& */ 159);
/* harmony import */ var _E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 9);






/* normalize component */

var component = Object(_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _pagination_vue_vue_type_template_id_46b6b62d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _pagination_vue_vue_type_template_id_46b6b62d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "F:/Ten/WeGame/Document download/WeChat Files/WXID_99Ake/FileStorage/File/2019-08/qj_consult/qj_consult/components/list-pagination/pagination.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 155 */
/*!***************************************************************************************************************************************************************************************!*\
  !*** F:/Ten/WeGame/Document download/WeChat Files/WXID_99Ake/FileStorage/File/2019-08/qj_consult/qj_consult/components/list-pagination/pagination.vue?vue&type=template&id=46b6b62d& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_pagination_vue_vue_type_template_id_46b6b62d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./pagination.vue?vue&type=template&id=46b6b62d& */ 156);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_pagination_vue_vue_type_template_id_46b6b62d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_pagination_vue_vue_type_template_id_46b6b62d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 156 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/Ten/WeGame/Document download/WeChat Files/WXID_99Ake/FileStorage/File/2019-08/qj_consult/qj_consult/components/list-pagination/pagination.vue?vue&type=template&id=46b6b62d& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("view", [
    _c("view", { staticClass: "foot" }, [
      _c("view", { staticClass: "pagination" }, [
        _c(
          "view",
          {
            staticClass: "button",
            attrs: { eventid: "46b75eea-0" },
            on: { tap: _vm.JumpPre }
          },
          [_c("text", [_vm._v("上一页")])]
        ),
        _c("view", { staticClass: "num" }, [
          _c("input", {
            attrs: {
              type: "number",
              value: _vm.current,
              eventid: "46b75eea-1"
            },
            on: { input: _vm.getNum }
          }),
          _vm._v("/"),
          _c("text", [_vm._v(_vm._s(_vm.num))])
        ]),
        _c(
          "view",
          {
            staticClass: "button",
            attrs: { eventid: "46b75eea-2" },
            on: { tap: _vm.JumpNext }
          },
          [_c("text", [_vm._v("下一页")])]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 157 */
/*!*********************************************************************************************************************************************************************************!*\
  !*** F:/Ten/WeGame/Document download/WeChat Files/WXID_99Ake/FileStorage/File/2019-08/qj_consult/qj_consult/components/list-pagination/pagination.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./pagination.vue?vue&type=script&lang=js& */ 158);
/* harmony import */ var _E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 158 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/Ten/WeGame/Document download/WeChat Files/WXID_99Ake/FileStorage/File/2019-08/qj_consult/qj_consult/components/list-pagination/pagination.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =

















{
  name: 'list-pagination',
  props: ['current', 'num'],
  data: function data() {
    return {};


  },
  onLoad: function onLoad(e) {
    console.log('进入到组件list-pagination');
  },
  methods: {
    JumpPre: function JumpPre() {
      var current = this.current;
      if (current != 1) {
        this.current = --current;
        console.log('上一页', this.current);
      } else {
        uni.showToast({
          title: '前面没有了哦~',
          icon: 'none',
          duration: 2000 });

      }
      this.getCurrent(current);
    },
    JumpNext: function JumpNext() {
      var current = this.current;
      if (current != this.num) {
        this.current = ++current;
        console.log('下一页', this.current);
      } else {
        uni.showToast({
          title: '后面没有了哦~',
          icon: 'none',
          duration: 2000 });

      }
      this.getCurrent(current);
    },
    getNum: function getNum(e) {
      console.log('获取输入值', e);
      var value = e.detail.value;
      value = Math.round(value); //取整数

      if (value <= this.num && value > 0) {
        this.value = value;
        this.getCurrent(value);
      } else {
        uni.showToast({
          title: '您的输入不规范哦~',
          icon: 'none',
          duration: 2000 });

      }
      console.log(value);
    },
    getCurrent: function getCurrent(current) {
      //点击按钮时，通知父组件
      this.$emit('get-current', {
        current: current });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 17)["default"]))

/***/ }),
/* 159 */
/*!*****************************************************************************************************************************************************************************************!*\
  !*** F:/Ten/WeGame/Document download/WeChat Files/WXID_99Ake/FileStorage/File/2019-08/qj_consult/qj_consult/components/list-pagination/pagination.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_pagination_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./pagination.vue?vue&type=style&index=0&lang=css& */ 160);
/* harmony import */ var _E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_pagination_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_pagination_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_pagination_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_pagination_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_Computer_projects_Wechat_devtools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_pagination_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 160 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/Ten/WeGame/Document download/WeChat Files/WXID_99Ake/FileStorage/File/2019-08/qj_consult/qj_consult/components/list-pagination/pagination.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map