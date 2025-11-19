(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/rayls-shield-landing-page/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/rayls-shield-landing-page/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/rayls-shield-landing-page/node_modules/next/dist/shared/lib/image-blur-svg.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * A shared function, used on both client and server, to generate a SVG blur placeholder.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getImageBlurSvg", {
    enumerable: true,
    get: function() {
        return getImageBlurSvg;
    }
});
function getImageBlurSvg({ widthInt, heightInt, blurWidth, blurHeight, blurDataURL, objectFit }) {
    const std = 20;
    const svgWidth = blurWidth ? blurWidth * 40 : widthInt;
    const svgHeight = blurHeight ? blurHeight * 40 : heightInt;
    const viewBox = svgWidth && svgHeight ? `viewBox='0 0 ${svgWidth} ${svgHeight}'` : '';
    const preserveAspectRatio = viewBox ? 'none' : objectFit === 'contain' ? 'xMidYMid' : objectFit === 'cover' ? 'xMidYMid slice' : 'none';
    return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${viewBox}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='${std}'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='${std}'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${preserveAspectRatio}' style='filter: url(%23b);' href='${blurDataURL}'/%3E%3C/svg%3E`;
} //# sourceMappingURL=image-blur-svg.js.map
}),
"[project]/rayls-shield-landing-page/node_modules/next/dist/shared/lib/image-config.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    VALID_LOADERS: null,
    imageConfigDefault: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    VALID_LOADERS: function() {
        return VALID_LOADERS;
    },
    imageConfigDefault: function() {
        return imageConfigDefault;
    }
});
const VALID_LOADERS = [
    'default',
    'imgix',
    'cloudinary',
    'akamai',
    'custom'
];
const imageConfigDefault = {
    deviceSizes: [
        640,
        750,
        828,
        1080,
        1200,
        1920,
        2048,
        3840
    ],
    imageSizes: [
        32,
        48,
        64,
        96,
        128,
        256,
        384
    ],
    path: '/_next/image',
    loader: 'default',
    loaderFile: '',
    /**
   * @deprecated Use `remotePatterns` instead to protect your application from malicious users.
   */ domains: [],
    disableStaticImages: false,
    minimumCacheTTL: 14400,
    formats: [
        'image/webp'
    ],
    maximumRedirects: 3,
    dangerouslyAllowLocalIP: false,
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: `script-src 'none'; frame-src 'none'; sandbox;`,
    contentDispositionType: 'attachment',
    localPatterns: undefined,
    remotePatterns: [],
    qualities: [
        75
    ],
    unoptimized: false
}; //# sourceMappingURL=image-config.js.map
}),
"[project]/rayls-shield-landing-page/node_modules/next/dist/shared/lib/get-img-props.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getImgProps", {
    enumerable: true,
    get: function() {
        return getImgProps;
    }
});
const _warnonce = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
const _imageblursvg = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/next/dist/shared/lib/image-blur-svg.js [app-client] (ecmascript)");
const _imageconfig = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/next/dist/shared/lib/image-config.js [app-client] (ecmascript)");
const VALID_LOADING_VALUES = [
    'lazy',
    'eager',
    undefined
];
// Object-fit values that are not valid background-size values
const INVALID_BACKGROUND_SIZE_VALUES = [
    '-moz-initial',
    'fill',
    'none',
    'scale-down',
    undefined
];
function isStaticRequire(src) {
    return src.default !== undefined;
}
function isStaticImageData(src) {
    return src.src !== undefined;
}
function isStaticImport(src) {
    return !!src && typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}
const allImgs = new Map();
let perfObserver;
function getInt(x) {
    if (typeof x === 'undefined') {
        return x;
    }
    if (typeof x === 'number') {
        return Number.isFinite(x) ? x : NaN;
    }
    if (typeof x === 'string' && /^[0-9]+$/.test(x)) {
        return parseInt(x, 10);
    }
    return NaN;
}
function getWidths({ deviceSizes, allSizes }, width, sizes) {
    if (sizes) {
        // Find all the "vw" percent sizes used in the sizes prop
        const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
        const percentSizes = [];
        for(let match; match = viewportWidthRe.exec(sizes); match){
            percentSizes.push(parseInt(match[2]));
        }
        if (percentSizes.length) {
            const smallestRatio = Math.min(...percentSizes) * 0.01;
            return {
                widths: allSizes.filter((s)=>s >= deviceSizes[0] * smallestRatio),
                kind: 'w'
            };
        }
        return {
            widths: allSizes,
            kind: 'w'
        };
    }
    if (typeof width !== 'number') {
        return {
            widths: deviceSizes,
            kind: 'w'
        };
    }
    const widths = [
        ...new Set(// > are actually 3x in the green color, but only 1.5x in the red and
        // > blue colors. Showing a 3x resolution image in the app vs a 2x
        // > resolution image will be visually the same, though the 3x image
        // > takes significantly more data. Even true 3x resolution screens are
        // > wasteful as the human eye cannot see that level of detail without
        // > something like a magnifying glass.
        // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
        [
            width,
            width * 2 /*, width * 3*/ 
        ].map((w)=>allSizes.find((p)=>p >= w) || allSizes[allSizes.length - 1]))
    ];
    return {
        widths,
        kind: 'x'
    };
}
function generateImgAttrs({ config, src, unoptimized, width, quality, sizes, loader }) {
    if (unoptimized) {
        return {
            src,
            srcSet: undefined,
            sizes: undefined
        };
    }
    const { widths, kind } = getWidths(config, width, sizes);
    const last = widths.length - 1;
    return {
        sizes: !sizes && kind === 'w' ? '100vw' : sizes,
        srcSet: widths.map((w, i)=>`${loader({
                config,
                src,
                quality,
                width: w
            })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        src: loader({
            config,
            src,
            quality,
            width: widths[last]
        })
    };
}
function getImgProps({ src, sizes, unoptimized = false, priority = false, preload = false, loading, className, quality, width, height, fill = false, style, overrideSrc, onLoad, onLoadingComplete, placeholder = 'empty', blurDataURL, fetchPriority, decoding = 'async', layout, objectFit, objectPosition, lazyBoundary, lazyRoot, ...rest }, _state) {
    const { imgConf, showAltText, blurComplete, defaultLoader } = _state;
    let config;
    let c = imgConf || _imageconfig.imageConfigDefault;
    if ('allSizes' in c) {
        config = c;
    } else {
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b);
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
        const qualities = c.qualities?.sort((a, b)=>a - b);
        config = {
            ...c,
            allSizes,
            deviceSizes,
            qualities
        };
    }
    if (typeof defaultLoader === 'undefined') {
        throw Object.defineProperty(new Error('images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config'), "__NEXT_ERROR_CODE", {
            value: "E163",
            enumerable: false,
            configurable: true
        });
    }
    let loader = rest.loader || defaultLoader;
    // Remove property so it's not spread on <img> element
    delete rest.loader;
    delete rest.srcSet;
    // This special value indicates that the user
    // didn't define a "loader" prop or "loader" config.
    const isDefaultLoader = '__next_img_default' in loader;
    if (isDefaultLoader) {
        if (config.loader === 'custom') {
            throw Object.defineProperty(new Error(`Image with src "${src}" is missing "loader" prop.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", {
                value: "E252",
                enumerable: false,
                configurable: true
            });
        }
    } else {
        // The user defined a "loader" prop or config.
        // Since the config object is internal only, we
        // must not pass it to the user-defined "loader".
        const customImageLoader = loader;
        loader = (obj)=>{
            const { config: _, ...opts } = obj;
            return customImageLoader(opts);
        };
    }
    if (layout) {
        if (layout === 'fill') {
            fill = true;
        }
        const layoutToStyle = {
            intrinsic: {
                maxWidth: '100%',
                height: 'auto'
            },
            responsive: {
                width: '100%',
                height: 'auto'
            }
        };
        const layoutToSizes = {
            responsive: '100vw',
            fill: '100vw'
        };
        const layoutStyle = layoutToStyle[layout];
        if (layoutStyle) {
            style = {
                ...style,
                ...layoutStyle
            };
        }
        const layoutSizes = layoutToSizes[layout];
        if (layoutSizes && !sizes) {
            sizes = layoutSizes;
        }
    }
    let staticSrc = '';
    let widthInt = getInt(width);
    let heightInt = getInt(height);
    let blurWidth;
    let blurHeight;
    if (isStaticImport(src)) {
        const staticImageData = isStaticRequire(src) ? src.default : src;
        if (!staticImageData.src) {
            throw Object.defineProperty(new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`), "__NEXT_ERROR_CODE", {
                value: "E460",
                enumerable: false,
                configurable: true
            });
        }
        if (!staticImageData.height || !staticImageData.width) {
            throw Object.defineProperty(new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`), "__NEXT_ERROR_CODE", {
                value: "E48",
                enumerable: false,
                configurable: true
            });
        }
        blurWidth = staticImageData.blurWidth;
        blurHeight = staticImageData.blurHeight;
        blurDataURL = blurDataURL || staticImageData.blurDataURL;
        staticSrc = staticImageData.src;
        if (!fill) {
            if (!widthInt && !heightInt) {
                widthInt = staticImageData.width;
                heightInt = staticImageData.height;
            } else if (widthInt && !heightInt) {
                const ratio = widthInt / staticImageData.width;
                heightInt = Math.round(staticImageData.height * ratio);
            } else if (!widthInt && heightInt) {
                const ratio = heightInt / staticImageData.height;
                widthInt = Math.round(staticImageData.width * ratio);
            }
        }
    }
    src = typeof src === 'string' ? src : staticSrc;
    let isLazy = !priority && !preload && (loading === 'lazy' || typeof loading === 'undefined');
    if (!src || src.startsWith('data:') || src.startsWith('blob:')) {
        // https://developer.mozilla.org/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
        unoptimized = true;
        isLazy = false;
    }
    if (config.unoptimized) {
        unoptimized = true;
    }
    if (isDefaultLoader && !config.dangerouslyAllowSVG && src.split('?', 1)[0].endsWith('.svg')) {
        // Special case to make svg serve as-is to avoid proxying
        // through the built-in Image Optimization API.
        unoptimized = true;
    }
    const qualityInt = getInt(quality);
    if ("TURBOPACK compile-time truthy", 1) {
        if (config.output === 'export' && isDefaultLoader && !unoptimized) {
            throw Object.defineProperty(new Error(`Image Optimization using the default loader is not compatible with \`{ output: 'export' }\`.
  Possible solutions:
    - Remove \`{ output: 'export' }\` and run "next start" to run server mode including the Image Optimization API.
    - Configure \`{ images: { unoptimized: true } }\` in \`next.config.js\` to disable the Image Optimization API.
  Read more: https://nextjs.org/docs/messages/export-image-api`), "__NEXT_ERROR_CODE", {
                value: "E500",
                enumerable: false,
                configurable: true
            });
        }
        if (!src) {
            // React doesn't show the stack trace and there's
            // no `src` to help identify which image, so we
            // instead console.error(ref) during mount.
            unoptimized = true;
        } else {
            if (fill) {
                if (width) {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has both "width" and "fill" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
                        value: "E96",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (height) {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has both "height" and "fill" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
                        value: "E115",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (style?.position && style.position !== 'absolute') {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has both "fill" and "style.position" properties. Images with "fill" always use position absolute - it cannot be modified.`), "__NEXT_ERROR_CODE", {
                        value: "E216",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (style?.width && style.width !== '100%') {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has both "fill" and "style.width" properties. Images with "fill" always use width 100% - it cannot be modified.`), "__NEXT_ERROR_CODE", {
                        value: "E73",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (style?.height && style.height !== '100%') {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has both "fill" and "style.height" properties. Images with "fill" always use height 100% - it cannot be modified.`), "__NEXT_ERROR_CODE", {
                        value: "E404",
                        enumerable: false,
                        configurable: true
                    });
                }
            } else {
                if (typeof widthInt === 'undefined') {
                    throw Object.defineProperty(new Error(`Image with src "${src}" is missing required "width" property.`), "__NEXT_ERROR_CODE", {
                        value: "E451",
                        enumerable: false,
                        configurable: true
                    });
                } else if (isNaN(widthInt)) {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has invalid "width" property. Expected a numeric value in pixels but received "${width}".`), "__NEXT_ERROR_CODE", {
                        value: "E66",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (typeof heightInt === 'undefined') {
                    throw Object.defineProperty(new Error(`Image with src "${src}" is missing required "height" property.`), "__NEXT_ERROR_CODE", {
                        value: "E397",
                        enumerable: false,
                        configurable: true
                    });
                } else if (isNaN(heightInt)) {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has invalid "height" property. Expected a numeric value in pixels but received "${height}".`), "__NEXT_ERROR_CODE", {
                        value: "E444",
                        enumerable: false,
                        configurable: true
                    });
                }
                // eslint-disable-next-line no-control-regex
                if (/^[\x00-\x20]/.test(src)) {
                    throw Object.defineProperty(new Error(`Image with src "${src}" cannot start with a space or control character. Use src.trimStart() to remove it or encodeURIComponent(src) to keep it.`), "__NEXT_ERROR_CODE", {
                        value: "E176",
                        enumerable: false,
                        configurable: true
                    });
                }
                // eslint-disable-next-line no-control-regex
                if (/[\x00-\x20]$/.test(src)) {
                    throw Object.defineProperty(new Error(`Image with src "${src}" cannot end with a space or control character. Use src.trimEnd() to remove it or encodeURIComponent(src) to keep it.`), "__NEXT_ERROR_CODE", {
                        value: "E21",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
        if (!VALID_LOADING_VALUES.includes(loading)) {
            throw Object.defineProperty(new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`), "__NEXT_ERROR_CODE", {
                value: "E357",
                enumerable: false,
                configurable: true
            });
        }
        if (priority && loading === 'lazy') {
            throw Object.defineProperty(new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
                value: "E218",
                enumerable: false,
                configurable: true
            });
        }
        if (preload && loading === 'lazy') {
            throw Object.defineProperty(new Error(`Image with src "${src}" has both "preload" and "loading='lazy'" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
                value: "E803",
                enumerable: false,
                configurable: true
            });
        }
        if (preload && priority) {
            throw Object.defineProperty(new Error(`Image with src "${src}" has both "preload" and "priority" properties. Only "preload" should be used.`), "__NEXT_ERROR_CODE", {
                value: "E802",
                enumerable: false,
                configurable: true
            });
        }
        if (placeholder !== 'empty' && placeholder !== 'blur' && !placeholder.startsWith('data:image/')) {
            throw Object.defineProperty(new Error(`Image with src "${src}" has invalid "placeholder" property "${placeholder}".`), "__NEXT_ERROR_CODE", {
                value: "E431",
                enumerable: false,
                configurable: true
            });
        }
        if (placeholder !== 'empty') {
            if (widthInt && heightInt && widthInt * heightInt < 1600) {
                (0, _warnonce.warnOnce)(`Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder" property to improve performance.`);
            }
        }
        if (qualityInt && config.qualities && !config.qualities.includes(qualityInt)) {
            (0, _warnonce.warnOnce)(`Image with src "${src}" is using quality "${qualityInt}" which is not configured in images.qualities [${config.qualities.join(', ')}]. Please update your config to [${[
                ...config.qualities,
                qualityInt
            ].sort().join(', ')}].` + `\nRead more: https://nextjs.org/docs/messages/next-image-unconfigured-qualities`);
        }
        if (placeholder === 'blur' && !blurDataURL) {
            const VALID_BLUR_EXT = [
                'jpeg',
                'png',
                'webp',
                'avif'
            ] // should match next-image-loader
            ;
            throw Object.defineProperty(new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
        Possible solutions:
          - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
          - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(',')} (animated images not supported)
          - Remove the "placeholder" property, effectively no blur effect
        Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`), "__NEXT_ERROR_CODE", {
                value: "E371",
                enumerable: false,
                configurable: true
            });
        }
        if ('ref' in rest) {
            (0, _warnonce.warnOnce)(`Image with src "${src}" is using unsupported "ref" property. Consider using the "onLoad" property instead.`);
        }
        if (!unoptimized && !isDefaultLoader) {
            const urlStr = loader({
                config,
                src,
                width: widthInt || 400,
                quality: qualityInt || 75
            });
            let url;
            try {
                url = new URL(urlStr);
            } catch (err) {}
            if (urlStr === src || url && url.pathname === src && !url.search) {
                (0, _warnonce.warnOnce)(`Image with src "${src}" has a "loader" property that does not implement width. Please implement it or use the "unoptimized" property instead.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader-width`);
            }
        }
        if (onLoadingComplete) {
            (0, _warnonce.warnOnce)(`Image with src "${src}" is using deprecated "onLoadingComplete" property. Please use the "onLoad" property instead.`);
        }
        for (const [legacyKey, legacyValue] of Object.entries({
            layout,
            objectFit,
            objectPosition,
            lazyBoundary,
            lazyRoot
        })){
            if (legacyValue) {
                (0, _warnonce.warnOnce)(`Image with src "${src}" has legacy prop "${legacyKey}". Did you forget to run the codemod?` + `\nRead more: https://nextjs.org/docs/messages/next-image-upgrade-to-13`);
            }
        }
        if (typeof window !== 'undefined' && !perfObserver && window.PerformanceObserver) {
            perfObserver = new PerformanceObserver((entryList)=>{
                for (const entry of entryList.getEntries()){
                    // @ts-ignore - missing "LargestContentfulPaint" class with "element" prop
                    const imgSrc = entry?.element?.src || '';
                    const lcpImage = allImgs.get(imgSrc);
                    if (lcpImage && lcpImage.loading === 'lazy' && lcpImage.placeholder === 'empty' && !lcpImage.src.startsWith('data:') && !lcpImage.src.startsWith('blob:')) {
                        // https://web.dev/lcp/#measure-lcp-in-javascript
                        (0, _warnonce.warnOnce)(`Image with src "${lcpImage.src}" was detected as the Largest Contentful Paint (LCP). Please add the \`loading="eager"\` property if this image is above the fold.` + `\nRead more: https://nextjs.org/docs/app/api-reference/components/image#loading`);
                    }
                }
            });
            try {
                perfObserver.observe({
                    type: 'largest-contentful-paint',
                    buffered: true
                });
            } catch (err) {
                // Log error but don't crash the app
                console.error(err);
            }
        }
    }
    const imgStyle = Object.assign(fill ? {
        position: 'absolute',
        height: '100%',
        width: '100%',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        objectFit,
        objectPosition
    } : {}, showAltText ? {} : {
        color: 'transparent'
    }, style);
    const backgroundImage = !blurComplete && placeholder !== 'empty' ? placeholder === 'blur' ? `url("data:image/svg+xml;charset=utf-8,${(0, _imageblursvg.getImageBlurSvg)({
        widthInt,
        heightInt,
        blurWidth,
        blurHeight,
        blurDataURL: blurDataURL || '',
        objectFit: imgStyle.objectFit
    })}")` : `url("${placeholder}")` // assume `data:image/`
     : null;
    const backgroundSize = !INVALID_BACKGROUND_SIZE_VALUES.includes(imgStyle.objectFit) ? imgStyle.objectFit : imgStyle.objectFit === 'fill' ? '100% 100%' // the background-size equivalent of `fill`
     : 'cover';
    let placeholderStyle = backgroundImage ? {
        backgroundSize,
        backgroundPosition: imgStyle.objectPosition || '50% 50%',
        backgroundRepeat: 'no-repeat',
        backgroundImage
    } : {};
    if ("TURBOPACK compile-time truthy", 1) {
        if (placeholderStyle.backgroundImage && placeholder === 'blur' && blurDataURL?.startsWith('/')) {
            // During `next dev`, we don't want to generate blur placeholders with webpack
            // because it can delay starting the dev server. Instead, `next-image-loader.js`
            // will inline a special url to lazily generate the blur placeholder at request time.
            placeholderStyle.backgroundImage = `url("${blurDataURL}")`;
        }
    }
    const imgAttributes = generateImgAttrs({
        config,
        src,
        unoptimized,
        width: widthInt,
        quality: qualityInt,
        sizes,
        loader
    });
    const loadingFinal = isLazy ? 'lazy' : loading;
    if ("TURBOPACK compile-time truthy", 1) {
        if (typeof window !== 'undefined') {
            let fullUrl;
            try {
                fullUrl = new URL(imgAttributes.src);
            } catch (e) {
                fullUrl = new URL(imgAttributes.src, window.location.href);
            }
            allImgs.set(fullUrl.href, {
                src,
                loading: loadingFinal,
                placeholder
            });
        }
    }
    const props = {
        ...rest,
        loading: loadingFinal,
        fetchPriority,
        width: widthInt,
        height: heightInt,
        decoding,
        className,
        style: {
            ...imgStyle,
            ...placeholderStyle
        },
        sizes: imgAttributes.sizes,
        srcSet: imgAttributes.srcSet,
        src: overrideSrc || imgAttributes.src
    };
    const meta = {
        unoptimized,
        preload: preload || priority,
        placeholder,
        fill
    };
    return {
        props,
        meta
    };
} //# sourceMappingURL=get-img-props.js.map
}),
"[project]/rayls-shield-landing-page/node_modules/next/dist/shared/lib/side-effect.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SideEffect;
    }
});
const _react = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const isServer = typeof window === 'undefined';
const useClientOnlyLayoutEffect = isServer ? ()=>{} : _react.useLayoutEffect;
const useClientOnlyEffect = isServer ? ()=>{} : _react.useEffect;
function SideEffect(props) {
    const { headManager, reduceComponentsToState } = props;
    function emitChange() {
        if (headManager && headManager.mountedInstances) {
            const headElements = _react.Children.toArray(Array.from(headManager.mountedInstances).filter(Boolean));
            headManager.updateHead(reduceComponentsToState(headElements));
        }
    }
    if (isServer) {
        headManager?.mountedInstances?.add(props.children);
        emitChange();
    }
    useClientOnlyLayoutEffect({
        "SideEffect.useClientOnlyLayoutEffect": ()=>{
            headManager?.mountedInstances?.add(props.children);
            return ({
                "SideEffect.useClientOnlyLayoutEffect": ()=>{
                    headManager?.mountedInstances?.delete(props.children);
                }
            })["SideEffect.useClientOnlyLayoutEffect"];
        }
    }["SideEffect.useClientOnlyLayoutEffect"]);
    // We need to call `updateHead` method whenever the `SideEffect` is trigger in all
    // life-cycles: mount, update, unmount. However, if there are multiple `SideEffect`s
    // being rendered, we only trigger the method from the last one.
    // This is ensured by keeping the last unflushed `updateHead` in the `_pendingUpdate`
    // singleton in the layout effect pass, and actually trigger it in the effect pass.
    useClientOnlyLayoutEffect({
        "SideEffect.useClientOnlyLayoutEffect": ()=>{
            if (headManager) {
                headManager._pendingUpdate = emitChange;
            }
            return ({
                "SideEffect.useClientOnlyLayoutEffect": ()=>{
                    if (headManager) {
                        headManager._pendingUpdate = emitChange;
                    }
                }
            })["SideEffect.useClientOnlyLayoutEffect"];
        }
    }["SideEffect.useClientOnlyLayoutEffect"]);
    useClientOnlyEffect({
        "SideEffect.useClientOnlyEffect": ()=>{
            if (headManager && headManager._pendingUpdate) {
                headManager._pendingUpdate();
                headManager._pendingUpdate = null;
            }
            return ({
                "SideEffect.useClientOnlyEffect": ()=>{
                    if (headManager && headManager._pendingUpdate) {
                        headManager._pendingUpdate();
                        headManager._pendingUpdate = null;
                    }
                }
            })["SideEffect.useClientOnlyEffect"];
        }
    }["SideEffect.useClientOnlyEffect"]);
    return null;
} //# sourceMappingURL=side-effect.js.map
}),
"[project]/rayls-shield-landing-page/node_modules/next/dist/shared/lib/head.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    defaultHead: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    defaultHead: function() {
        return defaultHead;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _interop_require_wildcard = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _sideeffect = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/next/dist/shared/lib/side-effect.js [app-client] (ecmascript)"));
const _headmanagercontextsharedruntime = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js [app-client] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
function defaultHead() {
    const head = [
        /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
            charSet: "utf-8"
        }, "charset"),
        /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
            name: "viewport",
            content: "width=device-width"
        }, "viewport")
    ];
    return head;
}
function onlyReactElement(list, child) {
    // React children can be "string" or "number" in this case we ignore them for backwards compat
    if (typeof child === 'string' || typeof child === 'number') {
        return list;
    }
    // Adds support for React.Fragment
    if (child.type === _react.default.Fragment) {
        return list.concat(_react.default.Children.toArray(child.props.children).reduce((fragmentList, fragmentChild)=>{
            if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
                return fragmentList;
            }
            return fragmentList.concat(fragmentChild);
        }, []));
    }
    return list.concat(child);
}
const METATYPES = [
    'name',
    'httpEquiv',
    'charSet',
    'itemProp'
];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/ function unique() {
    const keys = new Set();
    const tags = new Set();
    const metaTypes = new Set();
    const metaCategories = {};
    return (h)=>{
        let isUnique = true;
        let hasKey = false;
        if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
            hasKey = true;
            const key = h.key.slice(h.key.indexOf('$') + 1);
            if (keys.has(key)) {
                isUnique = false;
            } else {
                keys.add(key);
            }
        }
        // eslint-disable-next-line default-case
        switch(h.type){
            case 'title':
            case 'base':
                if (tags.has(h.type)) {
                    isUnique = false;
                } else {
                    tags.add(h.type);
                }
                break;
            case 'meta':
                for(let i = 0, len = METATYPES.length; i < len; i++){
                    const metatype = METATYPES[i];
                    if (!h.props.hasOwnProperty(metatype)) continue;
                    if (metatype === 'charSet') {
                        if (metaTypes.has(metatype)) {
                            isUnique = false;
                        } else {
                            metaTypes.add(metatype);
                        }
                    } else {
                        const category = h.props[metatype];
                        const categories = metaCategories[metatype] || new Set();
                        if ((metatype !== 'name' || !hasKey) && categories.has(category)) {
                            isUnique = false;
                        } else {
                            categories.add(category);
                            metaCategories[metatype] = categories;
                        }
                    }
                }
                break;
        }
        return isUnique;
    };
}
/**
 *
 * @param headChildrenElements List of children of <Head>
 */ function reduceComponents(headChildrenElements) {
    return headChildrenElements.reduce(onlyReactElement, []).reverse().concat(defaultHead().reverse()).filter(unique()).reverse().map((c, i)=>{
        const key = c.key || i;
        if ("TURBOPACK compile-time truthy", 1) {
            // omit JSON-LD structured data snippets from the warning
            if (c.type === 'script' && c.props['type'] !== 'application/ld+json') {
                const srcMessage = c.props['src'] ? `<script> tag with src="${c.props['src']}"` : `inline <script>`;
                (0, _warnonce.warnOnce)(`Do not add <script> tags using next/head (see ${srcMessage}). Use next/script instead. \nSee more info here: https://nextjs.org/docs/messages/no-script-tags-in-head-component`);
            } else if (c.type === 'link' && c.props['rel'] === 'stylesheet') {
                (0, _warnonce.warnOnce)(`Do not add stylesheets using next/head (see <link rel="stylesheet"> tag with href="${c.props['href']}"). Use Document instead. \nSee more info here: https://nextjs.org/docs/messages/no-stylesheets-in-head-component`);
            }
        }
        return /*#__PURE__*/ _react.default.cloneElement(c, {
            key
        });
    });
}
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */ function Head({ children }) {
    const headManager = (0, _react.useContext)(_headmanagercontextsharedruntime.HeadManagerContext);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_sideeffect.default, {
        reduceComponentsToState: reduceComponents,
        headManager: headManager,
        children: children
    });
}
const _default = Head;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=head.js.map
}),
"[project]/rayls-shield-landing-page/node_modules/next/dist/shared/lib/image-config-context.shared-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ImageConfigContext", {
    enumerable: true,
    get: function() {
        return ImageConfigContext;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _imageconfig = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/next/dist/shared/lib/image-config.js [app-client] (ecmascript)");
const ImageConfigContext = _react.default.createContext(_imageconfig.imageConfigDefault);
if ("TURBOPACK compile-time truthy", 1) {
    ImageConfigContext.displayName = 'ImageConfigContext';
} //# sourceMappingURL=image-config-context.shared-runtime.js.map
}),
"[project]/rayls-shield-landing-page/node_modules/next/dist/shared/lib/router-context.shared-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RouterContext", {
    enumerable: true,
    get: function() {
        return RouterContext;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const RouterContext = _react.default.createContext(null);
if ("TURBOPACK compile-time truthy", 1) {
    RouterContext.displayName = 'RouterContext';
} //# sourceMappingURL=router-context.shared-runtime.js.map
}),
"[project]/rayls-shield-landing-page/node_modules/next/dist/shared/lib/find-closest-quality.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "findClosestQuality", {
    enumerable: true,
    get: function() {
        return findClosestQuality;
    }
});
function findClosestQuality(quality, config) {
    const q = quality || 75;
    if (!config?.qualities?.length) {
        return q;
    }
    return config.qualities.reduce((prev, cur)=>Math.abs(cur - q) < Math.abs(prev - q) ? cur : prev, 0);
} //# sourceMappingURL=find-closest-quality.js.map
}),
"[project]/rayls-shield-landing-page/node_modules/next/dist/compiled/picomatch/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
(()=>{
    "use strict";
    var t = {
        170: (t, e, u)=>{
            const n = u(510);
            const isWindows = ()=>{
                if (typeof navigator !== "undefined" && navigator.platform) {
                    const t = navigator.platform.toLowerCase();
                    return t === "win32" || t === "windows";
                }
                if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].platform) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].platform === "win32";
                }
                return false;
            };
            function picomatch(t, e, u = false) {
                if (e && (e.windows === null || e.windows === undefined)) {
                    e = {
                        ...e,
                        windows: isWindows()
                    };
                }
                return n(t, e, u);
            }
            Object.assign(picomatch, n);
            t.exports = picomatch;
        },
        154: (t)=>{
            const e = "\\\\/";
            const u = `[^${e}]`;
            const n = "\\.";
            const o = "\\+";
            const s = "\\?";
            const r = "\\/";
            const a = "(?=.)";
            const i = "[^/]";
            const c = `(?:${r}|$)`;
            const p = `(?:^|${r})`;
            const l = `${n}{1,2}${c}`;
            const f = `(?!${n})`;
            const A = `(?!${p}${l})`;
            const _ = `(?!${n}{0,1}${c})`;
            const R = `(?!${l})`;
            const E = `[^.${r}]`;
            const h = `${i}*?`;
            const g = "/";
            const b = {
                DOT_LITERAL: n,
                PLUS_LITERAL: o,
                QMARK_LITERAL: s,
                SLASH_LITERAL: r,
                ONE_CHAR: a,
                QMARK: i,
                END_ANCHOR: c,
                DOTS_SLASH: l,
                NO_DOT: f,
                NO_DOTS: A,
                NO_DOT_SLASH: _,
                NO_DOTS_SLASH: R,
                QMARK_NO_DOT: E,
                STAR: h,
                START_ANCHOR: p,
                SEP: g
            };
            const C = {
                ...b,
                SLASH_LITERAL: `[${e}]`,
                QMARK: u,
                STAR: `${u}*?`,
                DOTS_SLASH: `${n}{1,2}(?:[${e}]|$)`,
                NO_DOT: `(?!${n})`,
                NO_DOTS: `(?!(?:^|[${e}])${n}{1,2}(?:[${e}]|$))`,
                NO_DOT_SLASH: `(?!${n}{0,1}(?:[${e}]|$))`,
                NO_DOTS_SLASH: `(?!${n}{1,2}(?:[${e}]|$))`,
                QMARK_NO_DOT: `[^.${e}]`,
                START_ANCHOR: `(?:^|[${e}])`,
                END_ANCHOR: `(?:[${e}]|$)`,
                SEP: "\\"
            };
            const y = {
                alnum: "a-zA-Z0-9",
                alpha: "a-zA-Z",
                ascii: "\\x00-\\x7F",
                blank: " \\t",
                cntrl: "\\x00-\\x1F\\x7F",
                digit: "0-9",
                graph: "\\x21-\\x7E",
                lower: "a-z",
                print: "\\x20-\\x7E ",
                punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",
                space: " \\t\\r\\n\\v\\f",
                upper: "A-Z",
                word: "A-Za-z0-9_",
                xdigit: "A-Fa-f0-9"
            };
            t.exports = {
                MAX_LENGTH: 1024 * 64,
                POSIX_REGEX_SOURCE: y,
                REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
                REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
                REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
                REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
                REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
                REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
                REPLACEMENTS: {
                    "***": "*",
                    "**/**": "**",
                    "**/**/**": "**"
                },
                CHAR_0: 48,
                CHAR_9: 57,
                CHAR_UPPERCASE_A: 65,
                CHAR_LOWERCASE_A: 97,
                CHAR_UPPERCASE_Z: 90,
                CHAR_LOWERCASE_Z: 122,
                CHAR_LEFT_PARENTHESES: 40,
                CHAR_RIGHT_PARENTHESES: 41,
                CHAR_ASTERISK: 42,
                CHAR_AMPERSAND: 38,
                CHAR_AT: 64,
                CHAR_BACKWARD_SLASH: 92,
                CHAR_CARRIAGE_RETURN: 13,
                CHAR_CIRCUMFLEX_ACCENT: 94,
                CHAR_COLON: 58,
                CHAR_COMMA: 44,
                CHAR_DOT: 46,
                CHAR_DOUBLE_QUOTE: 34,
                CHAR_EQUAL: 61,
                CHAR_EXCLAMATION_MARK: 33,
                CHAR_FORM_FEED: 12,
                CHAR_FORWARD_SLASH: 47,
                CHAR_GRAVE_ACCENT: 96,
                CHAR_HASH: 35,
                CHAR_HYPHEN_MINUS: 45,
                CHAR_LEFT_ANGLE_BRACKET: 60,
                CHAR_LEFT_CURLY_BRACE: 123,
                CHAR_LEFT_SQUARE_BRACKET: 91,
                CHAR_LINE_FEED: 10,
                CHAR_NO_BREAK_SPACE: 160,
                CHAR_PERCENT: 37,
                CHAR_PLUS: 43,
                CHAR_QUESTION_MARK: 63,
                CHAR_RIGHT_ANGLE_BRACKET: 62,
                CHAR_RIGHT_CURLY_BRACE: 125,
                CHAR_RIGHT_SQUARE_BRACKET: 93,
                CHAR_SEMICOLON: 59,
                CHAR_SINGLE_QUOTE: 39,
                CHAR_SPACE: 32,
                CHAR_TAB: 9,
                CHAR_UNDERSCORE: 95,
                CHAR_VERTICAL_LINE: 124,
                CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
                extglobChars (t) {
                    return {
                        "!": {
                            type: "negate",
                            open: "(?:(?!(?:",
                            close: `))${t.STAR})`
                        },
                        "?": {
                            type: "qmark",
                            open: "(?:",
                            close: ")?"
                        },
                        "+": {
                            type: "plus",
                            open: "(?:",
                            close: ")+"
                        },
                        "*": {
                            type: "star",
                            open: "(?:",
                            close: ")*"
                        },
                        "@": {
                            type: "at",
                            open: "(?:",
                            close: ")"
                        }
                    };
                },
                globChars (t) {
                    return t === true ? C : b;
                }
            };
        },
        697: (t, e, u)=>{
            const n = u(154);
            const o = u(96);
            const { MAX_LENGTH: s, POSIX_REGEX_SOURCE: r, REGEX_NON_SPECIAL_CHARS: a, REGEX_SPECIAL_CHARS_BACKREF: i, REPLACEMENTS: c } = n;
            const expandRange = (t, e)=>{
                if (typeof e.expandRange === "function") {
                    return e.expandRange(...t, e);
                }
                t.sort();
                const u = `[${t.join("-")}]`;
                try {
                    new RegExp(u);
                } catch (e) {
                    return t.map((t)=>o.escapeRegex(t)).join("..");
                }
                return u;
            };
            const syntaxError = (t, e)=>`Missing ${t}: "${e}" - use "\\\\${e}" to match literal characters`;
            const parse = (t, e)=>{
                if (typeof t !== "string") {
                    throw new TypeError("Expected a string");
                }
                t = c[t] || t;
                const u = {
                    ...e
                };
                const p = typeof u.maxLength === "number" ? Math.min(s, u.maxLength) : s;
                let l = t.length;
                if (l > p) {
                    throw new SyntaxError(`Input length: ${l}, exceeds maximum allowed length: ${p}`);
                }
                const f = {
                    type: "bos",
                    value: "",
                    output: u.prepend || ""
                };
                const A = [
                    f
                ];
                const _ = u.capture ? "" : "?:";
                const R = n.globChars(u.windows);
                const E = n.extglobChars(R);
                const { DOT_LITERAL: h, PLUS_LITERAL: g, SLASH_LITERAL: b, ONE_CHAR: C, DOTS_SLASH: y, NO_DOT: $, NO_DOT_SLASH: x, NO_DOTS_SLASH: S, QMARK: H, QMARK_NO_DOT: v, STAR: d, START_ANCHOR: L } = R;
                const globstar = (t)=>`(${_}(?:(?!${L}${t.dot ? y : h}).)*?)`;
                const T = u.dot ? "" : $;
                const O = u.dot ? H : v;
                let k = u.bash === true ? globstar(u) : d;
                if (u.capture) {
                    k = `(${k})`;
                }
                if (typeof u.noext === "boolean") {
                    u.noextglob = u.noext;
                }
                const m = {
                    input: t,
                    index: -1,
                    start: 0,
                    dot: u.dot === true,
                    consumed: "",
                    output: "",
                    prefix: "",
                    backtrack: false,
                    negated: false,
                    brackets: 0,
                    braces: 0,
                    parens: 0,
                    quotes: 0,
                    globstar: false,
                    tokens: A
                };
                t = o.removePrefix(t, m);
                l = t.length;
                const w = [];
                const N = [];
                const I = [];
                let B = f;
                let G;
                const eos = ()=>m.index === l - 1;
                const D = m.peek = (e = 1)=>t[m.index + e];
                const M = m.advance = ()=>t[++m.index] || "";
                const remaining = ()=>t.slice(m.index + 1);
                const consume = (t = "", e = 0)=>{
                    m.consumed += t;
                    m.index += e;
                };
                const append = (t)=>{
                    m.output += t.output != null ? t.output : t.value;
                    consume(t.value);
                };
                const negate = ()=>{
                    let t = 1;
                    while(D() === "!" && (D(2) !== "(" || D(3) === "?")){
                        M();
                        m.start++;
                        t++;
                    }
                    if (t % 2 === 0) {
                        return false;
                    }
                    m.negated = true;
                    m.start++;
                    return true;
                };
                const increment = (t)=>{
                    m[t]++;
                    I.push(t);
                };
                const decrement = (t)=>{
                    m[t]--;
                    I.pop();
                };
                const push = (t)=>{
                    if (B.type === "globstar") {
                        const e = m.braces > 0 && (t.type === "comma" || t.type === "brace");
                        const u = t.extglob === true || w.length && (t.type === "pipe" || t.type === "paren");
                        if (t.type !== "slash" && t.type !== "paren" && !e && !u) {
                            m.output = m.output.slice(0, -B.output.length);
                            B.type = "star";
                            B.value = "*";
                            B.output = k;
                            m.output += B.output;
                        }
                    }
                    if (w.length && t.type !== "paren") {
                        w[w.length - 1].inner += t.value;
                    }
                    if (t.value || t.output) append(t);
                    if (B && B.type === "text" && t.type === "text") {
                        B.output = (B.output || B.value) + t.value;
                        B.value += t.value;
                        return;
                    }
                    t.prev = B;
                    A.push(t);
                    B = t;
                };
                const extglobOpen = (t, e)=>{
                    const n = {
                        ...E[e],
                        conditions: 1,
                        inner: ""
                    };
                    n.prev = B;
                    n.parens = m.parens;
                    n.output = m.output;
                    const o = (u.capture ? "(" : "") + n.open;
                    increment("parens");
                    push({
                        type: t,
                        value: e,
                        output: m.output ? "" : C
                    });
                    push({
                        type: "paren",
                        extglob: true,
                        value: M(),
                        output: o
                    });
                    w.push(n);
                };
                const extglobClose = (t)=>{
                    let n = t.close + (u.capture ? ")" : "");
                    let o;
                    if (t.type === "negate") {
                        let s = k;
                        if (t.inner && t.inner.length > 1 && t.inner.includes("/")) {
                            s = globstar(u);
                        }
                        if (s !== k || eos() || /^\)+$/.test(remaining())) {
                            n = t.close = `)$))${s}`;
                        }
                        if (t.inner.includes("*") && (o = remaining()) && /^\.[^\\/.]+$/.test(o)) {
                            const u = parse(o, {
                                ...e,
                                fastpaths: false
                            }).output;
                            n = t.close = `)${u})${s})`;
                        }
                        if (t.prev.type === "bos") {
                            m.negatedExtglob = true;
                        }
                    }
                    push({
                        type: "paren",
                        extglob: true,
                        value: G,
                        output: n
                    });
                    decrement("parens");
                };
                if (u.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(t)) {
                    let n = false;
                    let s = t.replace(i, (t, e, u, o, s, r)=>{
                        if (o === "\\") {
                            n = true;
                            return t;
                        }
                        if (o === "?") {
                            if (e) {
                                return e + o + (s ? H.repeat(s.length) : "");
                            }
                            if (r === 0) {
                                return O + (s ? H.repeat(s.length) : "");
                            }
                            return H.repeat(u.length);
                        }
                        if (o === ".") {
                            return h.repeat(u.length);
                        }
                        if (o === "*") {
                            if (e) {
                                return e + o + (s ? k : "");
                            }
                            return k;
                        }
                        return e ? t : `\\${t}`;
                    });
                    if (n === true) {
                        if (u.unescape === true) {
                            s = s.replace(/\\/g, "");
                        } else {
                            s = s.replace(/\\+/g, (t)=>t.length % 2 === 0 ? "\\\\" : t ? "\\" : "");
                        }
                    }
                    if (s === t && u.contains === true) {
                        m.output = t;
                        return m;
                    }
                    m.output = o.wrapOutput(s, m, e);
                    return m;
                }
                while(!eos()){
                    G = M();
                    if (G === "\0") {
                        continue;
                    }
                    if (G === "\\") {
                        const t = D();
                        if (t === "/" && u.bash !== true) {
                            continue;
                        }
                        if (t === "." || t === ";") {
                            continue;
                        }
                        if (!t) {
                            G += "\\";
                            push({
                                type: "text",
                                value: G
                            });
                            continue;
                        }
                        const e = /^\\+/.exec(remaining());
                        let n = 0;
                        if (e && e[0].length > 2) {
                            n = e[0].length;
                            m.index += n;
                            if (n % 2 !== 0) {
                                G += "\\";
                            }
                        }
                        if (u.unescape === true) {
                            G = M();
                        } else {
                            G += M();
                        }
                        if (m.brackets === 0) {
                            push({
                                type: "text",
                                value: G
                            });
                            continue;
                        }
                    }
                    if (m.brackets > 0 && (G !== "]" || B.value === "[" || B.value === "[^")) {
                        if (u.posix !== false && G === ":") {
                            const t = B.value.slice(1);
                            if (t.includes("[")) {
                                B.posix = true;
                                if (t.includes(":")) {
                                    const t = B.value.lastIndexOf("[");
                                    const e = B.value.slice(0, t);
                                    const u = B.value.slice(t + 2);
                                    const n = r[u];
                                    if (n) {
                                        B.value = e + n;
                                        m.backtrack = true;
                                        M();
                                        if (!f.output && A.indexOf(B) === 1) {
                                            f.output = C;
                                        }
                                        continue;
                                    }
                                }
                            }
                        }
                        if (G === "[" && D() !== ":" || G === "-" && D() === "]") {
                            G = `\\${G}`;
                        }
                        if (G === "]" && (B.value === "[" || B.value === "[^")) {
                            G = `\\${G}`;
                        }
                        if (u.posix === true && G === "!" && B.value === "[") {
                            G = "^";
                        }
                        B.value += G;
                        append({
                            value: G
                        });
                        continue;
                    }
                    if (m.quotes === 1 && G !== '"') {
                        G = o.escapeRegex(G);
                        B.value += G;
                        append({
                            value: G
                        });
                        continue;
                    }
                    if (G === '"') {
                        m.quotes = m.quotes === 1 ? 0 : 1;
                        if (u.keepQuotes === true) {
                            push({
                                type: "text",
                                value: G
                            });
                        }
                        continue;
                    }
                    if (G === "(") {
                        increment("parens");
                        push({
                            type: "paren",
                            value: G
                        });
                        continue;
                    }
                    if (G === ")") {
                        if (m.parens === 0 && u.strictBrackets === true) {
                            throw new SyntaxError(syntaxError("opening", "("));
                        }
                        const t = w[w.length - 1];
                        if (t && m.parens === t.parens + 1) {
                            extglobClose(w.pop());
                            continue;
                        }
                        push({
                            type: "paren",
                            value: G,
                            output: m.parens ? ")" : "\\)"
                        });
                        decrement("parens");
                        continue;
                    }
                    if (G === "[") {
                        if (u.nobracket === true || !remaining().includes("]")) {
                            if (u.nobracket !== true && u.strictBrackets === true) {
                                throw new SyntaxError(syntaxError("closing", "]"));
                            }
                            G = `\\${G}`;
                        } else {
                            increment("brackets");
                        }
                        push({
                            type: "bracket",
                            value: G
                        });
                        continue;
                    }
                    if (G === "]") {
                        if (u.nobracket === true || B && B.type === "bracket" && B.value.length === 1) {
                            push({
                                type: "text",
                                value: G,
                                output: `\\${G}`
                            });
                            continue;
                        }
                        if (m.brackets === 0) {
                            if (u.strictBrackets === true) {
                                throw new SyntaxError(syntaxError("opening", "["));
                            }
                            push({
                                type: "text",
                                value: G,
                                output: `\\${G}`
                            });
                            continue;
                        }
                        decrement("brackets");
                        const t = B.value.slice(1);
                        if (B.posix !== true && t[0] === "^" && !t.includes("/")) {
                            G = `/${G}`;
                        }
                        B.value += G;
                        append({
                            value: G
                        });
                        if (u.literalBrackets === false || o.hasRegexChars(t)) {
                            continue;
                        }
                        const e = o.escapeRegex(B.value);
                        m.output = m.output.slice(0, -B.value.length);
                        if (u.literalBrackets === true) {
                            m.output += e;
                            B.value = e;
                            continue;
                        }
                        B.value = `(${_}${e}|${B.value})`;
                        m.output += B.value;
                        continue;
                    }
                    if (G === "{" && u.nobrace !== true) {
                        increment("braces");
                        const t = {
                            type: "brace",
                            value: G,
                            output: "(",
                            outputIndex: m.output.length,
                            tokensIndex: m.tokens.length
                        };
                        N.push(t);
                        push(t);
                        continue;
                    }
                    if (G === "}") {
                        const t = N[N.length - 1];
                        if (u.nobrace === true || !t) {
                            push({
                                type: "text",
                                value: G,
                                output: G
                            });
                            continue;
                        }
                        let e = ")";
                        if (t.dots === true) {
                            const t = A.slice();
                            const n = [];
                            for(let e = t.length - 1; e >= 0; e--){
                                A.pop();
                                if (t[e].type === "brace") {
                                    break;
                                }
                                if (t[e].type !== "dots") {
                                    n.unshift(t[e].value);
                                }
                            }
                            e = expandRange(n, u);
                            m.backtrack = true;
                        }
                        if (t.comma !== true && t.dots !== true) {
                            const u = m.output.slice(0, t.outputIndex);
                            const n = m.tokens.slice(t.tokensIndex);
                            t.value = t.output = "\\{";
                            G = e = "\\}";
                            m.output = u;
                            for (const t of n){
                                m.output += t.output || t.value;
                            }
                        }
                        push({
                            type: "brace",
                            value: G,
                            output: e
                        });
                        decrement("braces");
                        N.pop();
                        continue;
                    }
                    if (G === "|") {
                        if (w.length > 0) {
                            w[w.length - 1].conditions++;
                        }
                        push({
                            type: "text",
                            value: G
                        });
                        continue;
                    }
                    if (G === ",") {
                        let t = G;
                        const e = N[N.length - 1];
                        if (e && I[I.length - 1] === "braces") {
                            e.comma = true;
                            t = "|";
                        }
                        push({
                            type: "comma",
                            value: G,
                            output: t
                        });
                        continue;
                    }
                    if (G === "/") {
                        if (B.type === "dot" && m.index === m.start + 1) {
                            m.start = m.index + 1;
                            m.consumed = "";
                            m.output = "";
                            A.pop();
                            B = f;
                            continue;
                        }
                        push({
                            type: "slash",
                            value: G,
                            output: b
                        });
                        continue;
                    }
                    if (G === ".") {
                        if (m.braces > 0 && B.type === "dot") {
                            if (B.value === ".") B.output = h;
                            const t = N[N.length - 1];
                            B.type = "dots";
                            B.output += G;
                            B.value += G;
                            t.dots = true;
                            continue;
                        }
                        if (m.braces + m.parens === 0 && B.type !== "bos" && B.type !== "slash") {
                            push({
                                type: "text",
                                value: G,
                                output: h
                            });
                            continue;
                        }
                        push({
                            type: "dot",
                            value: G,
                            output: h
                        });
                        continue;
                    }
                    if (G === "?") {
                        const t = B && B.value === "(";
                        if (!t && u.noextglob !== true && D() === "(" && D(2) !== "?") {
                            extglobOpen("qmark", G);
                            continue;
                        }
                        if (B && B.type === "paren") {
                            const t = D();
                            let e = G;
                            if (B.value === "(" && !/[!=<:]/.test(t) || t === "<" && !/<([!=]|\w+>)/.test(remaining())) {
                                e = `\\${G}`;
                            }
                            push({
                                type: "text",
                                value: G,
                                output: e
                            });
                            continue;
                        }
                        if (u.dot !== true && (B.type === "slash" || B.type === "bos")) {
                            push({
                                type: "qmark",
                                value: G,
                                output: v
                            });
                            continue;
                        }
                        push({
                            type: "qmark",
                            value: G,
                            output: H
                        });
                        continue;
                    }
                    if (G === "!") {
                        if (u.noextglob !== true && D() === "(") {
                            if (D(2) !== "?" || !/[!=<:]/.test(D(3))) {
                                extglobOpen("negate", G);
                                continue;
                            }
                        }
                        if (u.nonegate !== true && m.index === 0) {
                            negate();
                            continue;
                        }
                    }
                    if (G === "+") {
                        if (u.noextglob !== true && D() === "(" && D(2) !== "?") {
                            extglobOpen("plus", G);
                            continue;
                        }
                        if (B && B.value === "(" || u.regex === false) {
                            push({
                                type: "plus",
                                value: G,
                                output: g
                            });
                            continue;
                        }
                        if (B && (B.type === "bracket" || B.type === "paren" || B.type === "brace") || m.parens > 0) {
                            push({
                                type: "plus",
                                value: G
                            });
                            continue;
                        }
                        push({
                            type: "plus",
                            value: g
                        });
                        continue;
                    }
                    if (G === "@") {
                        if (u.noextglob !== true && D() === "(" && D(2) !== "?") {
                            push({
                                type: "at",
                                extglob: true,
                                value: G,
                                output: ""
                            });
                            continue;
                        }
                        push({
                            type: "text",
                            value: G
                        });
                        continue;
                    }
                    if (G !== "*") {
                        if (G === "$" || G === "^") {
                            G = `\\${G}`;
                        }
                        const t = a.exec(remaining());
                        if (t) {
                            G += t[0];
                            m.index += t[0].length;
                        }
                        push({
                            type: "text",
                            value: G
                        });
                        continue;
                    }
                    if (B && (B.type === "globstar" || B.star === true)) {
                        B.type = "star";
                        B.star = true;
                        B.value += G;
                        B.output = k;
                        m.backtrack = true;
                        m.globstar = true;
                        consume(G);
                        continue;
                    }
                    let e = remaining();
                    if (u.noextglob !== true && /^\([^?]/.test(e)) {
                        extglobOpen("star", G);
                        continue;
                    }
                    if (B.type === "star") {
                        if (u.noglobstar === true) {
                            consume(G);
                            continue;
                        }
                        const n = B.prev;
                        const o = n.prev;
                        const s = n.type === "slash" || n.type === "bos";
                        const r = o && (o.type === "star" || o.type === "globstar");
                        if (u.bash === true && (!s || e[0] && e[0] !== "/")) {
                            push({
                                type: "star",
                                value: G,
                                output: ""
                            });
                            continue;
                        }
                        const a = m.braces > 0 && (n.type === "comma" || n.type === "brace");
                        const i = w.length && (n.type === "pipe" || n.type === "paren");
                        if (!s && n.type !== "paren" && !a && !i) {
                            push({
                                type: "star",
                                value: G,
                                output: ""
                            });
                            continue;
                        }
                        while(e.slice(0, 3) === "/**"){
                            const u = t[m.index + 4];
                            if (u && u !== "/") {
                                break;
                            }
                            e = e.slice(3);
                            consume("/**", 3);
                        }
                        if (n.type === "bos" && eos()) {
                            B.type = "globstar";
                            B.value += G;
                            B.output = globstar(u);
                            m.output = B.output;
                            m.globstar = true;
                            consume(G);
                            continue;
                        }
                        if (n.type === "slash" && n.prev.type !== "bos" && !r && eos()) {
                            m.output = m.output.slice(0, -(n.output + B.output).length);
                            n.output = `(?:${n.output}`;
                            B.type = "globstar";
                            B.output = globstar(u) + (u.strictSlashes ? ")" : "|$)");
                            B.value += G;
                            m.globstar = true;
                            m.output += n.output + B.output;
                            consume(G);
                            continue;
                        }
                        if (n.type === "slash" && n.prev.type !== "bos" && e[0] === "/") {
                            const t = e[1] !== void 0 ? "|$" : "";
                            m.output = m.output.slice(0, -(n.output + B.output).length);
                            n.output = `(?:${n.output}`;
                            B.type = "globstar";
                            B.output = `${globstar(u)}${b}|${b}${t})`;
                            B.value += G;
                            m.output += n.output + B.output;
                            m.globstar = true;
                            consume(G + M());
                            push({
                                type: "slash",
                                value: "/",
                                output: ""
                            });
                            continue;
                        }
                        if (n.type === "bos" && e[0] === "/") {
                            B.type = "globstar";
                            B.value += G;
                            B.output = `(?:^|${b}|${globstar(u)}${b})`;
                            m.output = B.output;
                            m.globstar = true;
                            consume(G + M());
                            push({
                                type: "slash",
                                value: "/",
                                output: ""
                            });
                            continue;
                        }
                        m.output = m.output.slice(0, -B.output.length);
                        B.type = "globstar";
                        B.output = globstar(u);
                        B.value += G;
                        m.output += B.output;
                        m.globstar = true;
                        consume(G);
                        continue;
                    }
                    const n = {
                        type: "star",
                        value: G,
                        output: k
                    };
                    if (u.bash === true) {
                        n.output = ".*?";
                        if (B.type === "bos" || B.type === "slash") {
                            n.output = T + n.output;
                        }
                        push(n);
                        continue;
                    }
                    if (B && (B.type === "bracket" || B.type === "paren") && u.regex === true) {
                        n.output = G;
                        push(n);
                        continue;
                    }
                    if (m.index === m.start || B.type === "slash" || B.type === "dot") {
                        if (B.type === "dot") {
                            m.output += x;
                            B.output += x;
                        } else if (u.dot === true) {
                            m.output += S;
                            B.output += S;
                        } else {
                            m.output += T;
                            B.output += T;
                        }
                        if (D() !== "*") {
                            m.output += C;
                            B.output += C;
                        }
                    }
                    push(n);
                }
                while(m.brackets > 0){
                    if (u.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "]"));
                    m.output = o.escapeLast(m.output, "[");
                    decrement("brackets");
                }
                while(m.parens > 0){
                    if (u.strictBrackets === true) throw new SyntaxError(syntaxError("closing", ")"));
                    m.output = o.escapeLast(m.output, "(");
                    decrement("parens");
                }
                while(m.braces > 0){
                    if (u.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "}"));
                    m.output = o.escapeLast(m.output, "{");
                    decrement("braces");
                }
                if (u.strictSlashes !== true && (B.type === "star" || B.type === "bracket")) {
                    push({
                        type: "maybe_slash",
                        value: "",
                        output: `${b}?`
                    });
                }
                if (m.backtrack === true) {
                    m.output = "";
                    for (const t of m.tokens){
                        m.output += t.output != null ? t.output : t.value;
                        if (t.suffix) {
                            m.output += t.suffix;
                        }
                    }
                }
                return m;
            };
            parse.fastpaths = (t, e)=>{
                const u = {
                    ...e
                };
                const r = typeof u.maxLength === "number" ? Math.min(s, u.maxLength) : s;
                const a = t.length;
                if (a > r) {
                    throw new SyntaxError(`Input length: ${a}, exceeds maximum allowed length: ${r}`);
                }
                t = c[t] || t;
                const { DOT_LITERAL: i, SLASH_LITERAL: p, ONE_CHAR: l, DOTS_SLASH: f, NO_DOT: A, NO_DOTS: _, NO_DOTS_SLASH: R, STAR: E, START_ANCHOR: h } = n.globChars(u.windows);
                const g = u.dot ? _ : A;
                const b = u.dot ? R : A;
                const C = u.capture ? "" : "?:";
                const y = {
                    negated: false,
                    prefix: ""
                };
                let $ = u.bash === true ? ".*?" : E;
                if (u.capture) {
                    $ = `(${$})`;
                }
                const globstar = (t)=>{
                    if (t.noglobstar === true) return $;
                    return `(${C}(?:(?!${h}${t.dot ? f : i}).)*?)`;
                };
                const create = (t)=>{
                    switch(t){
                        case "*":
                            return `${g}${l}${$}`;
                        case ".*":
                            return `${i}${l}${$}`;
                        case "*.*":
                            return `${g}${$}${i}${l}${$}`;
                        case "*/*":
                            return `${g}${$}${p}${l}${b}${$}`;
                        case "**":
                            return g + globstar(u);
                        case "**/*":
                            return `(?:${g}${globstar(u)}${p})?${b}${l}${$}`;
                        case "**/*.*":
                            return `(?:${g}${globstar(u)}${p})?${b}${$}${i}${l}${$}`;
                        case "**/.*":
                            return `(?:${g}${globstar(u)}${p})?${i}${l}${$}`;
                        default:
                            {
                                const e = /^(.*?)\.(\w+)$/.exec(t);
                                if (!e) return;
                                const u = create(e[1]);
                                if (!u) return;
                                return u + i + e[2];
                            }
                    }
                };
                const x = o.removePrefix(t, y);
                let S = create(x);
                if (S && u.strictSlashes !== true) {
                    S += `${p}?`;
                }
                return S;
            };
            t.exports = parse;
        },
        510: (t, e, u)=>{
            const n = u(716);
            const o = u(697);
            const s = u(96);
            const r = u(154);
            const isObject = (t)=>t && typeof t === "object" && !Array.isArray(t);
            const picomatch = (t, e, u = false)=>{
                if (Array.isArray(t)) {
                    const n = t.map((t)=>picomatch(t, e, u));
                    const arrayMatcher = (t)=>{
                        for (const e of n){
                            const u = e(t);
                            if (u) return u;
                        }
                        return false;
                    };
                    return arrayMatcher;
                }
                const n = isObject(t) && t.tokens && t.input;
                if (t === "" || typeof t !== "string" && !n) {
                    throw new TypeError("Expected pattern to be a non-empty string");
                }
                const o = e || {};
                const s = o.windows;
                const r = n ? picomatch.compileRe(t, e) : picomatch.makeRe(t, e, false, true);
                const a = r.state;
                delete r.state;
                let isIgnored = ()=>false;
                if (o.ignore) {
                    const t = {
                        ...e,
                        ignore: null,
                        onMatch: null,
                        onResult: null
                    };
                    isIgnored = picomatch(o.ignore, t, u);
                }
                const matcher = (u, n = false)=>{
                    const { isMatch: i, match: c, output: p } = picomatch.test(u, r, e, {
                        glob: t,
                        posix: s
                    });
                    const l = {
                        glob: t,
                        state: a,
                        regex: r,
                        posix: s,
                        input: u,
                        output: p,
                        match: c,
                        isMatch: i
                    };
                    if (typeof o.onResult === "function") {
                        o.onResult(l);
                    }
                    if (i === false) {
                        l.isMatch = false;
                        return n ? l : false;
                    }
                    if (isIgnored(u)) {
                        if (typeof o.onIgnore === "function") {
                            o.onIgnore(l);
                        }
                        l.isMatch = false;
                        return n ? l : false;
                    }
                    if (typeof o.onMatch === "function") {
                        o.onMatch(l);
                    }
                    return n ? l : true;
                };
                if (u) {
                    matcher.state = a;
                }
                return matcher;
            };
            picomatch.test = (t, e, u, { glob: n, posix: o } = {})=>{
                if (typeof t !== "string") {
                    throw new TypeError("Expected input to be a string");
                }
                if (t === "") {
                    return {
                        isMatch: false,
                        output: ""
                    };
                }
                const r = u || {};
                const a = r.format || (o ? s.toPosixSlashes : null);
                let i = t === n;
                let c = i && a ? a(t) : t;
                if (i === false) {
                    c = a ? a(t) : t;
                    i = c === n;
                }
                if (i === false || r.capture === true) {
                    if (r.matchBase === true || r.basename === true) {
                        i = picomatch.matchBase(t, e, u, o);
                    } else {
                        i = e.exec(c);
                    }
                }
                return {
                    isMatch: Boolean(i),
                    match: i,
                    output: c
                };
            };
            picomatch.matchBase = (t, e, u)=>{
                const n = e instanceof RegExp ? e : picomatch.makeRe(e, u);
                return n.test(s.basename(t));
            };
            picomatch.isMatch = (t, e, u)=>picomatch(e, u)(t);
            picomatch.parse = (t, e)=>{
                if (Array.isArray(t)) return t.map((t)=>picomatch.parse(t, e));
                return o(t, {
                    ...e,
                    fastpaths: false
                });
            };
            picomatch.scan = (t, e)=>n(t, e);
            picomatch.compileRe = (t, e, u = false, n = false)=>{
                if (u === true) {
                    return t.output;
                }
                const o = e || {};
                const s = o.contains ? "" : "^";
                const r = o.contains ? "" : "$";
                let a = `${s}(?:${t.output})${r}`;
                if (t && t.negated === true) {
                    a = `^(?!${a}).*$`;
                }
                const i = picomatch.toRegex(a, e);
                if (n === true) {
                    i.state = t;
                }
                return i;
            };
            picomatch.makeRe = (t, e = {}, u = false, n = false)=>{
                if (!t || typeof t !== "string") {
                    throw new TypeError("Expected a non-empty string");
                }
                let s = {
                    negated: false,
                    fastpaths: true
                };
                if (e.fastpaths !== false && (t[0] === "." || t[0] === "*")) {
                    s.output = o.fastpaths(t, e);
                }
                if (!s.output) {
                    s = o(t, e);
                }
                return picomatch.compileRe(s, e, u, n);
            };
            picomatch.toRegex = (t, e)=>{
                try {
                    const u = e || {};
                    return new RegExp(t, u.flags || (u.nocase ? "i" : ""));
                } catch (t) {
                    if (e && e.debug === true) throw t;
                    return /$^/;
                }
            };
            picomatch.constants = r;
            t.exports = picomatch;
        },
        716: (t, e, u)=>{
            const n = u(96);
            const { CHAR_ASTERISK: o, CHAR_AT: s, CHAR_BACKWARD_SLASH: r, CHAR_COMMA: a, CHAR_DOT: i, CHAR_EXCLAMATION_MARK: c, CHAR_FORWARD_SLASH: p, CHAR_LEFT_CURLY_BRACE: l, CHAR_LEFT_PARENTHESES: f, CHAR_LEFT_SQUARE_BRACKET: A, CHAR_PLUS: _, CHAR_QUESTION_MARK: R, CHAR_RIGHT_CURLY_BRACE: E, CHAR_RIGHT_PARENTHESES: h, CHAR_RIGHT_SQUARE_BRACKET: g } = u(154);
            const isPathSeparator = (t)=>t === p || t === r;
            const depth = (t)=>{
                if (t.isPrefix !== true) {
                    t.depth = t.isGlobstar ? Infinity : 1;
                }
            };
            const scan = (t, e)=>{
                const u = e || {};
                const b = t.length - 1;
                const C = u.parts === true || u.scanToEnd === true;
                const y = [];
                const $ = [];
                const x = [];
                let S = t;
                let H = -1;
                let v = 0;
                let d = 0;
                let L = false;
                let T = false;
                let O = false;
                let k = false;
                let m = false;
                let w = false;
                let N = false;
                let I = false;
                let B = false;
                let G = false;
                let D = 0;
                let M;
                let P;
                let K = {
                    value: "",
                    depth: 0,
                    isGlob: false
                };
                const eos = ()=>H >= b;
                const peek = ()=>S.charCodeAt(H + 1);
                const advance = ()=>{
                    M = P;
                    return S.charCodeAt(++H);
                };
                while(H < b){
                    P = advance();
                    let t;
                    if (P === r) {
                        N = K.backslashes = true;
                        P = advance();
                        if (P === l) {
                            w = true;
                        }
                        continue;
                    }
                    if (w === true || P === l) {
                        D++;
                        while(eos() !== true && (P = advance())){
                            if (P === r) {
                                N = K.backslashes = true;
                                advance();
                                continue;
                            }
                            if (P === l) {
                                D++;
                                continue;
                            }
                            if (w !== true && P === i && (P = advance()) === i) {
                                L = K.isBrace = true;
                                O = K.isGlob = true;
                                G = true;
                                if (C === true) {
                                    continue;
                                }
                                break;
                            }
                            if (w !== true && P === a) {
                                L = K.isBrace = true;
                                O = K.isGlob = true;
                                G = true;
                                if (C === true) {
                                    continue;
                                }
                                break;
                            }
                            if (P === E) {
                                D--;
                                if (D === 0) {
                                    w = false;
                                    L = K.isBrace = true;
                                    G = true;
                                    break;
                                }
                            }
                        }
                        if (C === true) {
                            continue;
                        }
                        break;
                    }
                    if (P === p) {
                        y.push(H);
                        $.push(K);
                        K = {
                            value: "",
                            depth: 0,
                            isGlob: false
                        };
                        if (G === true) continue;
                        if (M === i && H === v + 1) {
                            v += 2;
                            continue;
                        }
                        d = H + 1;
                        continue;
                    }
                    if (u.noext !== true) {
                        const t = P === _ || P === s || P === o || P === R || P === c;
                        if (t === true && peek() === f) {
                            O = K.isGlob = true;
                            k = K.isExtglob = true;
                            G = true;
                            if (P === c && H === v) {
                                B = true;
                            }
                            if (C === true) {
                                while(eos() !== true && (P = advance())){
                                    if (P === r) {
                                        N = K.backslashes = true;
                                        P = advance();
                                        continue;
                                    }
                                    if (P === h) {
                                        O = K.isGlob = true;
                                        G = true;
                                        break;
                                    }
                                }
                                continue;
                            }
                            break;
                        }
                    }
                    if (P === o) {
                        if (M === o) m = K.isGlobstar = true;
                        O = K.isGlob = true;
                        G = true;
                        if (C === true) {
                            continue;
                        }
                        break;
                    }
                    if (P === R) {
                        O = K.isGlob = true;
                        G = true;
                        if (C === true) {
                            continue;
                        }
                        break;
                    }
                    if (P === A) {
                        while(eos() !== true && (t = advance())){
                            if (t === r) {
                                N = K.backslashes = true;
                                advance();
                                continue;
                            }
                            if (t === g) {
                                T = K.isBracket = true;
                                O = K.isGlob = true;
                                G = true;
                                break;
                            }
                        }
                        if (C === true) {
                            continue;
                        }
                        break;
                    }
                    if (u.nonegate !== true && P === c && H === v) {
                        I = K.negated = true;
                        v++;
                        continue;
                    }
                    if (u.noparen !== true && P === f) {
                        O = K.isGlob = true;
                        if (C === true) {
                            while(eos() !== true && (P = advance())){
                                if (P === f) {
                                    N = K.backslashes = true;
                                    P = advance();
                                    continue;
                                }
                                if (P === h) {
                                    G = true;
                                    break;
                                }
                            }
                            continue;
                        }
                        break;
                    }
                    if (O === true) {
                        G = true;
                        if (C === true) {
                            continue;
                        }
                        break;
                    }
                }
                if (u.noext === true) {
                    k = false;
                    O = false;
                }
                let U = S;
                let X = "";
                let F = "";
                if (v > 0) {
                    X = S.slice(0, v);
                    S = S.slice(v);
                    d -= v;
                }
                if (U && O === true && d > 0) {
                    U = S.slice(0, d);
                    F = S.slice(d);
                } else if (O === true) {
                    U = "";
                    F = S;
                } else {
                    U = S;
                }
                if (U && U !== "" && U !== "/" && U !== S) {
                    if (isPathSeparator(U.charCodeAt(U.length - 1))) {
                        U = U.slice(0, -1);
                    }
                }
                if (u.unescape === true) {
                    if (F) F = n.removeBackslashes(F);
                    if (U && N === true) {
                        U = n.removeBackslashes(U);
                    }
                }
                const Q = {
                    prefix: X,
                    input: t,
                    start: v,
                    base: U,
                    glob: F,
                    isBrace: L,
                    isBracket: T,
                    isGlob: O,
                    isExtglob: k,
                    isGlobstar: m,
                    negated: I,
                    negatedExtglob: B
                };
                if (u.tokens === true) {
                    Q.maxDepth = 0;
                    if (!isPathSeparator(P)) {
                        $.push(K);
                    }
                    Q.tokens = $;
                }
                if (u.parts === true || u.tokens === true) {
                    let e;
                    for(let n = 0; n < y.length; n++){
                        const o = e ? e + 1 : v;
                        const s = y[n];
                        const r = t.slice(o, s);
                        if (u.tokens) {
                            if (n === 0 && v !== 0) {
                                $[n].isPrefix = true;
                                $[n].value = X;
                            } else {
                                $[n].value = r;
                            }
                            depth($[n]);
                            Q.maxDepth += $[n].depth;
                        }
                        if (n !== 0 || r !== "") {
                            x.push(r);
                        }
                        e = s;
                    }
                    if (e && e + 1 < t.length) {
                        const n = t.slice(e + 1);
                        x.push(n);
                        if (u.tokens) {
                            $[$.length - 1].value = n;
                            depth($[$.length - 1]);
                            Q.maxDepth += $[$.length - 1].depth;
                        }
                    }
                    Q.slashes = y;
                    Q.parts = x;
                }
                return Q;
            };
            t.exports = scan;
        },
        96: (t, e, u)=>{
            const { REGEX_BACKSLASH: n, REGEX_REMOVE_BACKSLASH: o, REGEX_SPECIAL_CHARS: s, REGEX_SPECIAL_CHARS_GLOBAL: r } = u(154);
            e.isObject = (t)=>t !== null && typeof t === "object" && !Array.isArray(t);
            e.hasRegexChars = (t)=>s.test(t);
            e.isRegexChar = (t)=>t.length === 1 && e.hasRegexChars(t);
            e.escapeRegex = (t)=>t.replace(r, "\\$1");
            e.toPosixSlashes = (t)=>t.replace(n, "/");
            e.removeBackslashes = (t)=>t.replace(o, (t)=>t === "\\" ? "" : t);
            e.escapeLast = (t, u, n)=>{
                const o = t.lastIndexOf(u, n);
                if (o === -1) return t;
                if (t[o - 1] === "\\") return e.escapeLast(t, u, o - 1);
                return `${t.slice(0, o)}\\${t.slice(o)}`;
            };
            e.removePrefix = (t, e = {})=>{
                let u = t;
                if (u.startsWith("./")) {
                    u = u.slice(2);
                    e.prefix = "./";
                }
                return u;
            };
            e.wrapOutput = (t, e = {}, u = {})=>{
                const n = u.contains ? "" : "^";
                const o = u.contains ? "" : "$";
                let s = `${n}(?:${t})${o}`;
                if (e.negated === true) {
                    s = `(?:^(?!${s}).*$)`;
                }
                return s;
            };
            e.basename = (t, { windows: e } = {})=>{
                const u = t.split(e ? /[\\/]/ : "/");
                const n = u[u.length - 1];
                if (n === "") {
                    return u[u.length - 2];
                }
                return n;
            };
        }
    };
    var e = {};
    function __nccwpck_require__(u) {
        var n = e[u];
        if (n !== undefined) {
            return n.exports;
        }
        var o = e[u] = {
            exports: {}
        };
        var s = true;
        try {
            t[u](o, o.exports, __nccwpck_require__);
            s = false;
        } finally{
            if (s) delete e[u];
        }
        return o.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/rayls-shield-landing-page/node_modules/next/dist/compiled/picomatch") + "/";
    var u = __nccwpck_require__(170);
    module.exports = u;
})();
}),
"[project]/rayls-shield-landing-page/node_modules/next/dist/shared/lib/match-local-pattern.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    hasLocalMatch: null,
    matchLocalPattern: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    hasLocalMatch: function() {
        return hasLocalMatch;
    },
    matchLocalPattern: function() {
        return matchLocalPattern;
    }
});
const _picomatch = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/next/dist/compiled/picomatch/index.js [app-client] (ecmascript)");
function matchLocalPattern(pattern, url) {
    if (pattern.search !== undefined) {
        if (pattern.search !== url.search) {
            return false;
        }
    }
    if (!(0, _picomatch.makeRe)(pattern.pathname ?? '**', {
        dot: true
    }).test(url.pathname)) {
        return false;
    }
    return true;
}
function hasLocalMatch(localPatterns, urlPathAndQuery) {
    if (!localPatterns) {
        // if the user didn't define "localPatterns", we allow all local images
        return true;
    }
    const url = new URL(urlPathAndQuery, 'http://n');
    return localPatterns.some((p)=>matchLocalPattern(p, url));
} //# sourceMappingURL=match-local-pattern.js.map
}),
"[project]/rayls-shield-landing-page/node_modules/next/dist/shared/lib/match-remote-pattern.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    hasRemoteMatch: null,
    matchRemotePattern: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    hasRemoteMatch: function() {
        return hasRemoteMatch;
    },
    matchRemotePattern: function() {
        return matchRemotePattern;
    }
});
const _picomatch = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/next/dist/compiled/picomatch/index.js [app-client] (ecmascript)");
function matchRemotePattern(pattern, url) {
    if (pattern.protocol !== undefined) {
        if (pattern.protocol.replace(/:$/, '') !== url.protocol.replace(/:$/, '')) {
            return false;
        }
    }
    if (pattern.port !== undefined) {
        if (pattern.port !== url.port) {
            return false;
        }
    }
    if (pattern.hostname === undefined) {
        throw Object.defineProperty(new Error(`Pattern should define hostname but found\n${JSON.stringify(pattern)}`), "__NEXT_ERROR_CODE", {
            value: "E410",
            enumerable: false,
            configurable: true
        });
    } else {
        if (!(0, _picomatch.makeRe)(pattern.hostname).test(url.hostname)) {
            return false;
        }
    }
    if (pattern.search !== undefined) {
        if (pattern.search !== url.search) {
            return false;
        }
    }
    // Should be the same as writeImagesManifest()
    if (!(0, _picomatch.makeRe)(pattern.pathname ?? '**', {
        dot: true
    }).test(url.pathname)) {
        return false;
    }
    return true;
}
function hasRemoteMatch(domains, remotePatterns, url) {
    return domains.some((domain)=>url.hostname === domain) || remotePatterns.some((p)=>matchRemotePattern(p, url));
} //# sourceMappingURL=match-remote-pattern.js.map
}),
"[project]/rayls-shield-landing-page/node_modules/next/dist/shared/lib/image-loader.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _findclosestquality = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/next/dist/shared/lib/find-closest-quality.js [app-client] (ecmascript)");
function defaultLoader({ config, src, width, quality }) {
    if (src.startsWith('/') && src.includes('?') && config.localPatterns?.length === 1 && config.localPatterns[0].pathname === '**' && config.localPatterns[0].search === '') {
        throw Object.defineProperty(new Error(`Image with src "${src}" is using a query string which is not configured in images.localPatterns.` + `\nRead more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
            value: "E871",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        const missingValues = [];
        // these should always be provided but make sure they are
        if (!src) missingValues.push('src');
        if (!width) missingValues.push('width');
        if (missingValues.length > 0) {
            throw Object.defineProperty(new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
                src,
                width,
                quality
            })}`), "__NEXT_ERROR_CODE", {
                value: "E188",
                enumerable: false,
                configurable: true
            });
        }
        if (src.startsWith('//')) {
            throw Object.defineProperty(new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`), "__NEXT_ERROR_CODE", {
                value: "E360",
                enumerable: false,
                configurable: true
            });
        }
        if (src.startsWith('/') && config.localPatterns) {
            if ("TURBOPACK compile-time truthy", 1) {
                // We use dynamic require because this should only error in development
                const { hasLocalMatch } = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/next/dist/shared/lib/match-local-pattern.js [app-client] (ecmascript)");
                if (!hasLocalMatch(config.localPatterns, src)) {
                    throw Object.defineProperty(new Error(`Invalid src prop (${src}) on \`next/image\` does not match \`images.localPatterns\` configured in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
                        value: "E426",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
        if (!src.startsWith('/') && (config.domains || config.remotePatterns)) {
            let parsedSrc;
            try {
                parsedSrc = new URL(src);
            } catch (err) {
                console.error(err);
                throw Object.defineProperty(new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`), "__NEXT_ERROR_CODE", {
                    value: "E63",
                    enumerable: false,
                    configurable: true
                });
            }
            if ("TURBOPACK compile-time truthy", 1) {
                // We use dynamic require because this should only error in development
                const { hasRemoteMatch } = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/next/dist/shared/lib/match-remote-pattern.js [app-client] (ecmascript)");
                if (!hasRemoteMatch(config.domains, config.remotePatterns, parsedSrc)) {
                    throw Object.defineProperty(new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`), "__NEXT_ERROR_CODE", {
                        value: "E231",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
    }
    const q = (0, _findclosestquality.findClosestQuality)(quality, config);
    return `${config.path}?url=${encodeURIComponent(src)}&w=${width}&q=${q}${src.startsWith('/_next/static/media/') && ("TURBOPACK compile-time value", false) ? "TURBOPACK unreachable" : ''}`;
}
// We use this to determine if the import is the default loader
// or a custom loader defined by the user in next.config.js
defaultLoader.__next_img_default = true;
const _default = defaultLoader; //# sourceMappingURL=image-loader.js.map
}),
"[project]/rayls-shield-landing-page/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMergedRef", {
    enumerable: true,
    get: function() {
        return useMergedRef;
    }
});
const _react = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function useMergedRef(refA, refB) {
    const cleanupA = (0, _react.useRef)(null);
    const cleanupB = (0, _react.useRef)(null);
    // NOTE: In theory, we could skip the wrapping if only one of the refs is non-null.
    // (this happens often if the user doesn't pass a ref to Link/Form/Image)
    // But this can cause us to leak a cleanup-ref into user code (previously via `<Link legacyBehavior>`),
    // and the user might pass that ref into ref-merging library that doesn't support cleanup refs
    // (because it hasn't been updated for React 19)
    // which can then cause things to blow up, because a cleanup-returning ref gets called with `null`.
    // So in practice, it's safer to be defensive and always wrap the ref, even on React 19.
    return (0, _react.useCallback)((current)=>{
        if (current === null) {
            const cleanupFnA = cleanupA.current;
            if (cleanupFnA) {
                cleanupA.current = null;
                cleanupFnA();
            }
            const cleanupFnB = cleanupB.current;
            if (cleanupFnB) {
                cleanupB.current = null;
                cleanupFnB();
            }
        } else {
            if (refA) {
                cleanupA.current = applyRef(refA, current);
            }
            if (refB) {
                cleanupB.current = applyRef(refB, current);
            }
        }
    }, [
        refA,
        refB
    ]);
}
function applyRef(refA, current) {
    if (typeof refA === 'function') {
        const cleanup = refA(current);
        if (typeof cleanup === 'function') {
            return cleanup;
        } else {
            return ()=>refA(null);
        }
    } else {
        refA.current = current;
        return ()=>{
            refA.current = null;
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-merged-ref.js.map
}),
"[project]/rayls-shield-landing-page/node_modules/next/dist/client/image-component.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Image", {
    enumerable: true,
    get: function() {
        return Image;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _interop_require_wildcard = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _reactdom = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)"));
const _head = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/next/dist/shared/lib/head.js [app-client] (ecmascript)"));
const _getimgprops = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/next/dist/shared/lib/get-img-props.js [app-client] (ecmascript)");
const _imageconfig = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/next/dist/shared/lib/image-config.js [app-client] (ecmascript)");
const _imageconfigcontextsharedruntime = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/next/dist/shared/lib/image-config-context.shared-runtime.js [app-client] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
const _routercontextsharedruntime = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/next/dist/shared/lib/router-context.shared-runtime.js [app-client] (ecmascript)");
const _imageloader = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/next/dist/shared/lib/image-loader.js [app-client] (ecmascript)"));
const _usemergedref = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)");
// This is replaced by webpack define plugin
const configEnv = ("TURBOPACK compile-time value", {
    "deviceSizes": ("TURBOPACK compile-time value", [
        ("TURBOPACK compile-time value", 640),
        ("TURBOPACK compile-time value", 750),
        ("TURBOPACK compile-time value", 828),
        ("TURBOPACK compile-time value", 1080),
        ("TURBOPACK compile-time value", 1200),
        ("TURBOPACK compile-time value", 1920),
        ("TURBOPACK compile-time value", 2048),
        ("TURBOPACK compile-time value", 3840)
    ]),
    "imageSizes": ("TURBOPACK compile-time value", [
        ("TURBOPACK compile-time value", 32),
        ("TURBOPACK compile-time value", 48),
        ("TURBOPACK compile-time value", 64),
        ("TURBOPACK compile-time value", 96),
        ("TURBOPACK compile-time value", 128),
        ("TURBOPACK compile-time value", 256),
        ("TURBOPACK compile-time value", 384)
    ]),
    "qualities": ("TURBOPACK compile-time value", [
        ("TURBOPACK compile-time value", 75)
    ]),
    "path": ("TURBOPACK compile-time value", "/_next/image"),
    "loader": ("TURBOPACK compile-time value", "default"),
    "dangerouslyAllowSVG": ("TURBOPACK compile-time value", false),
    "unoptimized": ("TURBOPACK compile-time value", true),
    "domains": ("TURBOPACK compile-time value", []),
    "remotePatterns": ("TURBOPACK compile-time value", []),
    "localPatterns": ("TURBOPACK compile-time value", [
        ("TURBOPACK compile-time value", {
            "pathname": ("TURBOPACK compile-time value", "**"),
            "search": ("TURBOPACK compile-time value", "")
        })
    ])
});
if (typeof window === 'undefined') {
    ;
    globalThis.__NEXT_IMAGE_IMPORTED = true;
}
// See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.
function handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput) {
    const src = img?.src;
    if (!img || img['data-loaded-src'] === src) {
        return;
    }
    img['data-loaded-src'] = src;
    const p = 'decode' in img ? img.decode() : Promise.resolve();
    p.catch(()=>{}).then(()=>{
        if (!img.parentElement || !img.isConnected) {
            // Exit early in case of race condition:
            // - onload() is called
            // - decode() is called but incomplete
            // - unmount is called
            // - decode() completes
            return;
        }
        if (placeholder !== 'empty') {
            setBlurComplete(true);
        }
        if (onLoadRef?.current) {
            // Since we don't have the SyntheticEvent here,
            // we must create one with the same shape.
            // See https://reactjs.org/docs/events.html
            const event = new Event('load');
            Object.defineProperty(event, 'target', {
                writable: false,
                value: img
            });
            let prevented = false;
            let stopped = false;
            onLoadRef.current({
                ...event,
                nativeEvent: event,
                currentTarget: img,
                target: img,
                isDefaultPrevented: ()=>prevented,
                isPropagationStopped: ()=>stopped,
                persist: ()=>{},
                preventDefault: ()=>{
                    prevented = true;
                    event.preventDefault();
                },
                stopPropagation: ()=>{
                    stopped = true;
                    event.stopPropagation();
                }
            });
        }
        if (onLoadingCompleteRef?.current) {
            onLoadingCompleteRef.current(img);
        }
        if ("TURBOPACK compile-time truthy", 1) {
            const origSrc = new URL(src, 'http://n').searchParams.get('url') || src;
            if (img.getAttribute('data-nimg') === 'fill') {
                if (!unoptimized && (!sizesInput || sizesInput === '100vw')) {
                    let widthViewportRatio = img.getBoundingClientRect().width / window.innerWidth;
                    if (widthViewportRatio < 0.6) {
                        if (sizesInput === '100vw') {
                            (0, _warnonce.warnOnce)(`Image with src "${origSrc}" has "fill" prop and "sizes" prop of "100vw", but image is not rendered at full viewport width. Please adjust "sizes" to improve page performance. Read more: https://nextjs.org/docs/api-reference/next/image#sizes`);
                        } else {
                            (0, _warnonce.warnOnce)(`Image with src "${origSrc}" has "fill" but is missing "sizes" prop. Please add it to improve page performance. Read more: https://nextjs.org/docs/api-reference/next/image#sizes`);
                        }
                    }
                }
                if (img.parentElement) {
                    const { position } = window.getComputedStyle(img.parentElement);
                    const valid = [
                        'absolute',
                        'fixed',
                        'relative'
                    ];
                    if (!valid.includes(position)) {
                        (0, _warnonce.warnOnce)(`Image with src "${origSrc}" has "fill" and parent element with invalid "position". Provided "${position}" should be one of ${valid.map(String).join(',')}.`);
                    }
                }
                if (img.height === 0) {
                    (0, _warnonce.warnOnce)(`Image with src "${origSrc}" has "fill" and a height value of 0. This is likely because the parent element of the image has not been styled to have a set height.`);
                }
            }
            const heightModified = img.height.toString() !== img.getAttribute('height');
            const widthModified = img.width.toString() !== img.getAttribute('width');
            if (heightModified && !widthModified || !heightModified && widthModified) {
                (0, _warnonce.warnOnce)(`Image with src "${origSrc}" has either width or height modified, but not the other. If you use CSS to change the size of your image, also include the styles 'width: "auto"' or 'height: "auto"' to maintain the aspect ratio.`);
            }
        }
    });
}
function getDynamicProps(fetchPriority) {
    if (Boolean(_react.use)) {
        // In React 19.0.0 or newer, we must use camelCase
        // prop to avoid "Warning: Invalid DOM property".
        // See https://github.com/facebook/react/pull/25927
        return {
            fetchPriority
        };
    }
    // In React 18.2.0 or older, we must use lowercase prop
    // to avoid "Warning: Invalid DOM property".
    return {
        fetchpriority: fetchPriority
    };
}
const ImageElement = /*#__PURE__*/ (0, _react.forwardRef)(({ src, srcSet, sizes, height, width, decoding, className, style, fetchPriority, placeholder, loading, unoptimized, fill, onLoadRef, onLoadingCompleteRef, setBlurComplete, setShowAltText, sizesInput, onLoad, onError, ...rest }, forwardedRef)=>{
    const ownRef = (0, _react.useCallback)((img)=>{
        if (!img) {
            return;
        }
        if (onError) {
            // If the image has an error before react hydrates, then the error is lost.
            // The workaround is to wait until the image is mounted which is after hydration,
            // then we set the src again to trigger the error handler (if there was an error).
            // eslint-disable-next-line no-self-assign
            img.src = img.src;
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (!src) {
                console.error(`Image is missing required "src" property:`, img);
            }
            if (img.getAttribute('alt') === null) {
                console.error(`Image is missing required "alt" property. Please add Alternative Text to describe the image for screen readers and search engines.`);
            }
        }
        if (img.complete) {
            handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput);
        }
    }, [
        src,
        placeholder,
        onLoadRef,
        onLoadingCompleteRef,
        setBlurComplete,
        onError,
        unoptimized,
        sizesInput
    ]);
    const ref = (0, _usemergedref.useMergedRef)(forwardedRef, ownRef);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("img", {
        ...rest,
        ...getDynamicProps(fetchPriority),
        // It's intended to keep `loading` before `src` because React updates
        // props in order which causes Safari/Firefox to not lazy load properly.
        // See https://github.com/facebook/react/issues/25883
        loading: loading,
        width: width,
        height: height,
        decoding: decoding,
        "data-nimg": fill ? 'fill' : '1',
        className: className,
        style: style,
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        sizes: sizes,
        srcSet: srcSet,
        src: src,
        ref: ref,
        onLoad: (event)=>{
            const img = event.currentTarget;
            handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput);
        },
        onError: (event)=>{
            // if the real image fails to load, this will ensure "alt" is visible
            setShowAltText(true);
            if (placeholder !== 'empty') {
                // If the real image fails to load, this will still remove the placeholder.
                setBlurComplete(true);
            }
            if (onError) {
                onError(event);
            }
        }
    });
});
function ImagePreload({ isAppRouter, imgAttributes }) {
    const opts = {
        as: 'image',
        imageSrcSet: imgAttributes.srcSet,
        imageSizes: imgAttributes.sizes,
        crossOrigin: imgAttributes.crossOrigin,
        referrerPolicy: imgAttributes.referrerPolicy,
        ...getDynamicProps(imgAttributes.fetchPriority)
    };
    if (isAppRouter && _reactdom.default.preload) {
        _reactdom.default.preload(imgAttributes.src, opts);
        return null;
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_head.default, {
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
            rel: "preload",
            // Note how we omit the `href` attribute, as it would only be relevant
            // for browsers that do not support `imagesrcset`, and in those cases
            // it would cause the incorrect image to be preloaded.
            //
            // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
            href: imgAttributes.srcSet ? undefined : imgAttributes.src,
            ...opts
        }, '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes)
    });
}
const Image = /*#__PURE__*/ (0, _react.forwardRef)((props, forwardedRef)=>{
    const pagesRouter = (0, _react.useContext)(_routercontextsharedruntime.RouterContext);
    // We're in the app directory if there is no pages router.
    const isAppRouter = !pagesRouter;
    const configContext = (0, _react.useContext)(_imageconfigcontextsharedruntime.ImageConfigContext);
    const config = (0, _react.useMemo)(()=>{
        const c = configEnv || configContext || _imageconfig.imageConfigDefault;
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b);
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
        const qualities = c.qualities?.sort((a, b)=>a - b);
        return {
            ...c,
            allSizes,
            deviceSizes,
            qualities,
            // During the SSR, configEnv (__NEXT_IMAGE_OPTS) does not include
            // security sensitive configs like `localPatterns`, which is needed
            // during the server render to ensure it's validated. Therefore use
            // configContext, which holds the config from the server for validation.
            localPatterns: typeof window === 'undefined' ? configContext?.localPatterns : c.localPatterns
        };
    }, [
        configContext
    ]);
    const { onLoad, onLoadingComplete } = props;
    const onLoadRef = (0, _react.useRef)(onLoad);
    (0, _react.useEffect)(()=>{
        onLoadRef.current = onLoad;
    }, [
        onLoad
    ]);
    const onLoadingCompleteRef = (0, _react.useRef)(onLoadingComplete);
    (0, _react.useEffect)(()=>{
        onLoadingCompleteRef.current = onLoadingComplete;
    }, [
        onLoadingComplete
    ]);
    const [blurComplete, setBlurComplete] = (0, _react.useState)(false);
    const [showAltText, setShowAltText] = (0, _react.useState)(false);
    const { props: imgAttributes, meta: imgMeta } = (0, _getimgprops.getImgProps)(props, {
        defaultLoader: _imageloader.default,
        imgConf: config,
        blurComplete,
        showAltText
    });
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(ImageElement, {
                ...imgAttributes,
                unoptimized: imgMeta.unoptimized,
                placeholder: imgMeta.placeholder,
                fill: imgMeta.fill,
                onLoadRef: onLoadRef,
                onLoadingCompleteRef: onLoadingCompleteRef,
                setBlurComplete: setBlurComplete,
                setShowAltText: setShowAltText,
                sizesInput: props.sizes,
                ref: forwardedRef
            }),
            imgMeta.preload ? /*#__PURE__*/ (0, _jsxruntime.jsx)(ImagePreload, {
                isAppRouter: isAppRouter,
                imgAttributes: imgAttributes
            }) : null
        ]
    });
});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=image-component.js.map
}),
"[project]/rayls-shield-landing-page/node_modules/next/dist/shared/lib/image-external.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    getImageProps: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    getImageProps: function() {
        return getImageProps;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _getimgprops = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/next/dist/shared/lib/get-img-props.js [app-client] (ecmascript)");
const _imagecomponent = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/next/dist/client/image-component.js [app-client] (ecmascript)");
const _imageloader = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/next/dist/shared/lib/image-loader.js [app-client] (ecmascript)"));
function getImageProps(imgProps) {
    const { props } = (0, _getimgprops.getImgProps)(imgProps, {
        defaultLoader: _imageloader.default,
        // This is replaced by webpack define plugin
        imgConf: ("TURBOPACK compile-time value", {
            "deviceSizes": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", 640),
                ("TURBOPACK compile-time value", 750),
                ("TURBOPACK compile-time value", 828),
                ("TURBOPACK compile-time value", 1080),
                ("TURBOPACK compile-time value", 1200),
                ("TURBOPACK compile-time value", 1920),
                ("TURBOPACK compile-time value", 2048),
                ("TURBOPACK compile-time value", 3840)
            ]),
            "imageSizes": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", 32),
                ("TURBOPACK compile-time value", 48),
                ("TURBOPACK compile-time value", 64),
                ("TURBOPACK compile-time value", 96),
                ("TURBOPACK compile-time value", 128),
                ("TURBOPACK compile-time value", 256),
                ("TURBOPACK compile-time value", 384)
            ]),
            "qualities": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", 75)
            ]),
            "path": ("TURBOPACK compile-time value", "/_next/image"),
            "loader": ("TURBOPACK compile-time value", "default"),
            "dangerouslyAllowSVG": ("TURBOPACK compile-time value", false),
            "unoptimized": ("TURBOPACK compile-time value", true),
            "domains": ("TURBOPACK compile-time value", []),
            "remotePatterns": ("TURBOPACK compile-time value", []),
            "localPatterns": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", {
                    "pathname": ("TURBOPACK compile-time value", "**"),
                    "search": ("TURBOPACK compile-time value", "")
                })
            ])
        })
    });
    // Normally we don't care about undefined props because we pass to JSX,
    // but this exported function could be used by the end user for anything
    // so we delete undefined props to clean it up a little.
    for (const [key, value] of Object.entries(props)){
        if (value === undefined) {
            delete props[key];
        }
    }
    return {
        props
    };
}
const _default = _imagecomponent.Image; //# sourceMappingURL=image-external.js.map
}),
"[project]/rayls-shield-landing-page/node_modules/next/image.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/next/dist/shared/lib/image-external.js [app-client] (ecmascript)");
}),
"[project]/rayls-shield-landing-page/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    assign: null,
    searchParamsToUrlQuery: null,
    urlQueryToSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assign: function() {
        return assign;
    },
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    for (const [key, value] of searchParams.entries()){
        const existing = query[key];
        if (typeof existing === 'undefined') {
            query[key] = value;
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            query[key] = [
                existing,
                value
            ];
        }
    }
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string') {
        return param;
    }
    if (typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(query) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query)){
        if (Array.isArray(value)) {
            for (const item of value){
                searchParams.append(key, stringifyUrlQueryParam(item));
            }
        } else {
            searchParams.set(key, stringifyUrlQueryParam(value));
        }
    }
    return searchParams;
}
function assign(target, ...searchParamsList) {
    for (const searchParams of searchParamsList){
        for (const key of searchParams.keys()){
            target.delete(key);
        }
        for (const [key, value] of searchParams.entries()){
            target.append(key, value);
        }
    }
    return target;
} //# sourceMappingURL=querystring.js.map
}),
"[project]/rayls-shield-landing-page/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatUrl: null,
    formatWithValidation: null,
    urlObjectKeys: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)"));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || '';
    let pathname = urlObj.pathname || '';
    let hash = urlObj.hash || '';
    let query = urlObj.query || '';
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);
        if (urlObj.port) {
            host += ':' + urlObj.port;
        }
    }
    if (query && typeof query === 'object') {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && `?${query}` || '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
    } else if (!host) {
        host = '';
    }
    if (hash && hash[0] !== '#') hash = '#' + hash;
    if (search && search[0] !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace('#', '%23');
    return `${protocol}${host}${pathname}${search}${hash}`;
}
const urlObjectKeys = [
    'auth',
    'hash',
    'host',
    'hostname',
    'href',
    'path',
    'pathname',
    'port',
    'protocol',
    'query',
    'search',
    'slashes'
];
function formatWithValidation(url) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (url !== null && typeof url === 'object') {
            Object.keys(url).forEach((key)=>{
                if (!urlObjectKeys.includes(key)) {
                    console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
                }
            });
        }
    }
    return formatUrl(url);
} //# sourceMappingURL=format-url.js.map
}),
"[project]/rayls-shield-landing-page/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DecodeError: null,
    MiddlewareNotFoundError: null,
    MissingStaticPage: null,
    NormalizeError: null,
    PageNotFoundError: null,
    SP: null,
    ST: null,
    WEB_VITALS: null,
    execOnce: null,
    getDisplayName: null,
    getLocationOrigin: null,
    getURL: null,
    isAbsoluteUrl: null,
    isResSent: null,
    loadGetInitialProps: null,
    normalizeRepeatedSlashes: null,
    stringifyError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return (...args)=>{
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? `?${urlParts.slice(1).join('?')}` : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (App.prototype?.getInitialProps) {
            const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: false,
                configurable: true
            });
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = `Cannot find module for page: ${page}`;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = `Failed to load static file for page: ${page} ${message}`;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = `Cannot find the middleware module`;
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map
}),
"[project]/rayls-shield-landing-page/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isLocalURL", {
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
});
const _utils = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _hasbasepath = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
} //# sourceMappingURL=is-local-url.js.map
}),
"[project]/rayls-shield-landing-page/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "errorOnce", {
    enumerable: true,
    get: function() {
        return errorOnce;
    }
});
let errorOnce = (_)=>{};
if ("TURBOPACK compile-time truthy", 1) {
    const errors = new Set();
    errorOnce = (msg)=>{
        if (!errors.has(msg)) {
            console.error(msg);
        }
        errors.add(msg);
    };
} //# sourceMappingURL=error-once.js.map
}),
"[project]/rayls-shield-landing-page/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * A React component that extends the HTML `<a>` element to provide
 * [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
 * and client-side navigation. This is the primary way to navigate between routes in Next.js.
 *
 * @remarks
 * - Prefetching is only enabled in production.
 *
 * @see https://nextjs.org/docs/app/api-reference/components/link
 */ default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _formaturl = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _usemergedref = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _addbasepath = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
const _links = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
const _islocalurl = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)");
const _types = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/next/dist/client/components/segment-cache/types.js [app-client] (ecmascript)");
const _erroronce = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)");
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate) {
    if (typeof window !== 'undefined') {
        const { nodeName } = e.currentTarget;
        // anchors inside an svg have a lowercase nodeName
        const isAnchorNodeName = nodeName.toUpperCase() === 'A';
        if (isAnchorNodeName && isModifiedEvent(e) || e.currentTarget.hasAttribute('download')) {
            // ignore click for browser’s default behavior
            return;
        }
        if (!(0, _islocalurl.isLocalURL)(href)) {
            if (replace) {
                // browser default behavior does not replace the history state
                // so we need to do it manually
                e.preventDefault();
                location.replace(href);
            }
            // ignore click for browser’s default behavior
            return;
        }
        e.preventDefault();
        if (onNavigate) {
            let isDefaultPrevented = false;
            onNavigate({
                preventDefault: ()=>{
                    isDefaultPrevented = true;
                }
            });
            if (isDefaultPrevented) {
                return;
            }
        }
        const { dispatchNavigateAction } = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
        _react.default.startTransition(()=>{
            dispatchNavigateAction(as || href, replace ? 'replace' : 'push', scroll ?? true, linkInstanceRef.current);
        });
    }
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === 'string') {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
function LinkComponent(props) {
    const [linkStatus, setOptimisticLinkStatus] = (0, _react.useOptimistic)(_links.IDLE_LINK_STATUS);
    let children;
    const linkInstanceRef = (0, _react.useRef)(null);
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, onNavigate, ref: forwardedRef, unstable_dynamicOnHover, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const router = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const prefetchEnabled = prefetchProp !== false;
    const fetchStrategy = prefetchProp !== false ? getFetchStrategyFromPrefetchProp(prefetchProp) : _types.FetchStrategy.PPR;
    if ("TURBOPACK compile-time truthy", 1) {
        function createPropError(args) {
            return Object.defineProperty(new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (typeof window !== 'undefined' ? "\nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                value: "E319",
                enumerable: false,
                configurable: true
            });
        }
        // TypeScript trick for type-guarding:
        const requiredPropsGuard = {
            href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key)=>{
            if (key === 'href') {
                if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: props[key] === null ? 'null' : typeof props[key]
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
        // TypeScript trick for type-guarding:
        const optionalPropsGuard = {
            as: true,
            replace: true,
            scroll: true,
            shallow: true,
            passHref: true,
            prefetch: true,
            unstable_dynamicOnHover: true,
            onClick: true,
            onMouseEnter: true,
            onTouchStart: true,
            legacyBehavior: true,
            onNavigate: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key)=>{
            const valType = typeof props[key];
            if (key === 'as') {
                if (props[key] && valType !== 'string' && valType !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: valType
                    });
                }
            } else if (key === 'onClick' || key === 'onMouseEnter' || key === 'onTouchStart' || key === 'onNavigate') {
                if (props[key] && valType !== 'function') {
                    throw createPropError({
                        key,
                        expected: '`function`',
                        actual: valType
                    });
                }
            } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'legacyBehavior' || key === 'unstable_dynamicOnHover') {
                if (props[key] != null && valType !== 'boolean') {
                    throw createPropError({
                        key,
                        expected: '`boolean`',
                        actual: valType
                    });
                }
            } else if (key === 'prefetch') {
                if (props[key] != null && valType !== 'boolean' && props[key] !== 'auto') {
                    throw createPropError({
                        key,
                        expected: '`boolean | "auto"`',
                        actual: valType
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (props.locale) {
            (0, _warnonce.warnOnce)('The `locale` prop is not supported in `next/link` while using the `app` router. Read more about app router internalization: https://nextjs.org/docs/app/building-your-application/routing/internationalization');
        }
        if (!asProp) {
            let href;
            if (typeof hrefProp === 'string') {
                href = hrefProp;
            } else if (typeof hrefProp === 'object' && typeof hrefProp.pathname === 'string') {
                href = hrefProp.pathname;
            }
            if (href) {
                const hasDynamicSegment = href.split('/').some((segment)=>segment.startsWith('[') && segment.endsWith(']'));
                if (hasDynamicSegment) {
                    throw Object.defineProperty(new Error(`Dynamic href \`${href}\` found in <Link> while using the \`/app\` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href`), "__NEXT_ERROR_CODE", {
                        value: "E267",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
    }
    const { href, as } = _react.default.useMemo({
        "LinkComponent.useMemo": ()=>{
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
    }["LinkComponent.useMemo"], [
        hrefProp,
        asProp
    ]);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (children?.$$typeof === Symbol.for('react.lazy')) {
            throw Object.defineProperty(new Error(`\`<Link legacyBehavior>\` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's \`<a>\` tag.`), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: false,
                configurable: true
            });
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (onClick) {
                console.warn(`"onClick" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link`);
            }
            if (onMouseEnterProp) {
                console.warn(`"onMouseEnter" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link`);
            }
            try {
                child = _react.default.Children.only(children);
            } catch (err) {
                if (!children) {
                    throw Object.defineProperty(new Error(`No children were passed to <Link> with \`href\` of \`${hrefProp}\` but one child is required https://nextjs.org/docs/messages/link-no-children`), "__NEXT_ERROR_CODE", {
                        value: "E320",
                        enumerable: false,
                        configurable: true
                    });
                }
                throw Object.defineProperty(new Error(`Multiple children were passed to <Link> with \`href\` of \`${hrefProp}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + (typeof window !== 'undefined' ? " \nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                    value: "E266",
                    enumerable: false,
                    configurable: true
                });
            }
        } else //TURBOPACK unreachable
        ;
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if (children?.type === 'a') {
                throw Object.defineProperty(new Error('Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor'), "__NEXT_ERROR_CODE", {
                    value: "E209",
                    enumerable: false,
                    configurable: true
                });
            }
        }
    }
    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
    // Use a callback ref to attach an IntersectionObserver to the anchor tag on
    // mount. In the future we will also use this to keep track of all the
    // currently mounted <Link> instances, e.g. so we can re-prefetch them after
    // a revalidation or refresh.
    const observeLinkVisibilityOnMount = _react.default.useCallback({
        "LinkComponent.useCallback[observeLinkVisibilityOnMount]": (element)=>{
            if (router !== null) {
                linkInstanceRef.current = (0, _links.mountLinkInstance)(element, href, router, fetchStrategy, prefetchEnabled, setOptimisticLinkStatus);
            }
            return ({
                "LinkComponent.useCallback[observeLinkVisibilityOnMount]": ()=>{
                    if (linkInstanceRef.current) {
                        (0, _links.unmountLinkForCurrentNavigation)(linkInstanceRef.current);
                        linkInstanceRef.current = null;
                    }
                    (0, _links.unmountPrefetchableInstance)(element);
                }
            })["LinkComponent.useCallback[observeLinkVisibilityOnMount]"];
        }
    }["LinkComponent.useCallback[observeLinkVisibilityOnMount]"], [
        prefetchEnabled,
        href,
        router,
        fetchStrategy,
        setOptimisticLinkStatus
    ]);
    const mergedRef = (0, _usemergedref.useMergedRef)(observeLinkVisibilityOnMount, childRef);
    const childProps = {
        ref: mergedRef,
        onClick (e) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (!e) {
                    throw Object.defineProperty(new Error(`Component rendered inside next/link has to pass click event to "onClick" prop.`), "__NEXT_ERROR_CODE", {
                        value: "E312",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
            if (!legacyBehavior && typeof onClick === 'function') {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                return;
            }
            //TURBOPACK unreachable
            ;
            const upgradeToDynamicPrefetch = undefined;
        },
        onTouchStart: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === 'function') {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled) {
                return;
            }
            const upgradeToDynamicPrefetch = unstable_dynamicOnHover === true;
            (0, _links.onNavigationIntent)(e.currentTarget, upgradeToDynamicPrefetch);
        }
    };
    // If the url is absolute, we can bypass the logic to prepend the basePath.
    if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
        childProps.href = (0, _addbasepath.addBasePath)(as);
    }
    let link;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, _erroronce.errorOnce)('`legacyBehavior` is deprecated and will be removed in a future ' + 'release. A codemod is available to upgrade your components:\n\n' + 'npx @next/codemod@latest new-link .\n\n' + 'Learn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components');
        }
        link = /*#__PURE__*/ _react.default.cloneElement(child, childProps);
    } else {
        link = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            ...restProps,
            ...childProps,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(LinkStatusContext.Provider, {
        value: linkStatus,
        children: link
    });
}
const LinkStatusContext = /*#__PURE__*/ (0, _react.createContext)(_links.IDLE_LINK_STATUS);
const useLinkStatus = ()=>{
    return (0, _react.useContext)(LinkStatusContext);
};
function getFetchStrategyFromPrefetchProp(prefetchProp) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return prefetchProp === null || prefetchProp === 'auto' ? _types.FetchStrategy.PPR : // (although invalid values should've been filtered out by prop validation in dev)
        _types.FetchStrategy.Full;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map
}),
"[project]/rayls-shield-landing-page/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

(function() {
    var e = {
        675: function(e, r) {
            "use strict";
            r.byteLength = byteLength;
            r.toByteArray = toByteArray;
            r.fromByteArray = fromByteArray;
            var t = [];
            var f = [];
            var n = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
            var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            for(var o = 0, u = i.length; o < u; ++o){
                t[o] = i[o];
                f[i.charCodeAt(o)] = o;
            }
            f["-".charCodeAt(0)] = 62;
            f["_".charCodeAt(0)] = 63;
            function getLens(e) {
                var r = e.length;
                if (r % 4 > 0) {
                    throw new Error("Invalid string. Length must be a multiple of 4");
                }
                var t = e.indexOf("=");
                if (t === -1) t = r;
                var f = t === r ? 0 : 4 - t % 4;
                return [
                    t,
                    f
                ];
            }
            function byteLength(e) {
                var r = getLens(e);
                var t = r[0];
                var f = r[1];
                return (t + f) * 3 / 4 - f;
            }
            function _byteLength(e, r, t) {
                return (r + t) * 3 / 4 - t;
            }
            function toByteArray(e) {
                var r;
                var t = getLens(e);
                var i = t[0];
                var o = t[1];
                var u = new n(_byteLength(e, i, o));
                var a = 0;
                var s = o > 0 ? i - 4 : i;
                var h;
                for(h = 0; h < s; h += 4){
                    r = f[e.charCodeAt(h)] << 18 | f[e.charCodeAt(h + 1)] << 12 | f[e.charCodeAt(h + 2)] << 6 | f[e.charCodeAt(h + 3)];
                    u[a++] = r >> 16 & 255;
                    u[a++] = r >> 8 & 255;
                    u[a++] = r & 255;
                }
                if (o === 2) {
                    r = f[e.charCodeAt(h)] << 2 | f[e.charCodeAt(h + 1)] >> 4;
                    u[a++] = r & 255;
                }
                if (o === 1) {
                    r = f[e.charCodeAt(h)] << 10 | f[e.charCodeAt(h + 1)] << 4 | f[e.charCodeAt(h + 2)] >> 2;
                    u[a++] = r >> 8 & 255;
                    u[a++] = r & 255;
                }
                return u;
            }
            function tripletToBase64(e) {
                return t[e >> 18 & 63] + t[e >> 12 & 63] + t[e >> 6 & 63] + t[e & 63];
            }
            function encodeChunk(e, r, t) {
                var f;
                var n = [];
                for(var i = r; i < t; i += 3){
                    f = (e[i] << 16 & 16711680) + (e[i + 1] << 8 & 65280) + (e[i + 2] & 255);
                    n.push(tripletToBase64(f));
                }
                return n.join("");
            }
            function fromByteArray(e) {
                var r;
                var f = e.length;
                var n = f % 3;
                var i = [];
                var o = 16383;
                for(var u = 0, a = f - n; u < a; u += o){
                    i.push(encodeChunk(e, u, u + o > a ? a : u + o));
                }
                if (n === 1) {
                    r = e[f - 1];
                    i.push(t[r >> 2] + t[r << 4 & 63] + "==");
                } else if (n === 2) {
                    r = (e[f - 2] << 8) + e[f - 1];
                    i.push(t[r >> 10] + t[r >> 4 & 63] + t[r << 2 & 63] + "=");
                }
                return i.join("");
            }
        },
        72: function(e, r, t) {
            "use strict";
            /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ var f = t(675);
            var n = t(783);
            var i = typeof Symbol === "function" && typeof Symbol.for === "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
            r.Buffer = Buffer;
            r.SlowBuffer = SlowBuffer;
            r.INSPECT_MAX_BYTES = 50;
            var o = 2147483647;
            r.kMaxLength = o;
            Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
            if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
                console.error("This browser lacks typed array (Uint8Array) support which is required by " + "`buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
            }
            function typedArraySupport() {
                try {
                    var e = new Uint8Array(1);
                    var r = {
                        foo: function() {
                            return 42;
                        }
                    };
                    Object.setPrototypeOf(r, Uint8Array.prototype);
                    Object.setPrototypeOf(e, r);
                    return e.foo() === 42;
                } catch (e) {
                    return false;
                }
            }
            Object.defineProperty(Buffer.prototype, "parent", {
                enumerable: true,
                get: function() {
                    if (!Buffer.isBuffer(this)) return undefined;
                    return this.buffer;
                }
            });
            Object.defineProperty(Buffer.prototype, "offset", {
                enumerable: true,
                get: function() {
                    if (!Buffer.isBuffer(this)) return undefined;
                    return this.byteOffset;
                }
            });
            function createBuffer(e) {
                if (e > o) {
                    throw new RangeError('The value "' + e + '" is invalid for option "size"');
                }
                var r = new Uint8Array(e);
                Object.setPrototypeOf(r, Buffer.prototype);
                return r;
            }
            function Buffer(e, r, t) {
                if (typeof e === "number") {
                    if (typeof r === "string") {
                        throw new TypeError('The "string" argument must be of type string. Received type number');
                    }
                    return allocUnsafe(e);
                }
                return from(e, r, t);
            }
            Buffer.poolSize = 8192;
            function from(e, r, t) {
                if (typeof e === "string") {
                    return fromString(e, r);
                }
                if (ArrayBuffer.isView(e)) {
                    return fromArrayLike(e);
                }
                if (e == null) {
                    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, " + "or Array-like Object. Received type " + typeof e);
                }
                if (isInstance(e, ArrayBuffer) || e && isInstance(e.buffer, ArrayBuffer)) {
                    return fromArrayBuffer(e, r, t);
                }
                if (typeof SharedArrayBuffer !== "undefined" && (isInstance(e, SharedArrayBuffer) || e && isInstance(e.buffer, SharedArrayBuffer))) {
                    return fromArrayBuffer(e, r, t);
                }
                if (typeof e === "number") {
                    throw new TypeError('The "value" argument must not be of type number. Received type number');
                }
                var f = e.valueOf && e.valueOf();
                if (f != null && f !== e) {
                    return Buffer.from(f, r, t);
                }
                var n = fromObject(e);
                if (n) return n;
                if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] === "function") {
                    return Buffer.from(e[Symbol.toPrimitive]("string"), r, t);
                }
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, " + "or Array-like Object. Received type " + typeof e);
            }
            Buffer.from = function(e, r, t) {
                return from(e, r, t);
            };
            Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
            Object.setPrototypeOf(Buffer, Uint8Array);
            function assertSize(e) {
                if (typeof e !== "number") {
                    throw new TypeError('"size" argument must be of type number');
                } else if (e < 0) {
                    throw new RangeError('The value "' + e + '" is invalid for option "size"');
                }
            }
            function alloc(e, r, t) {
                assertSize(e);
                if (e <= 0) {
                    return createBuffer(e);
                }
                if (r !== undefined) {
                    return typeof t === "string" ? createBuffer(e).fill(r, t) : createBuffer(e).fill(r);
                }
                return createBuffer(e);
            }
            Buffer.alloc = function(e, r, t) {
                return alloc(e, r, t);
            };
            function allocUnsafe(e) {
                assertSize(e);
                return createBuffer(e < 0 ? 0 : checked(e) | 0);
            }
            Buffer.allocUnsafe = function(e) {
                return allocUnsafe(e);
            };
            Buffer.allocUnsafeSlow = function(e) {
                return allocUnsafe(e);
            };
            function fromString(e, r) {
                if (typeof r !== "string" || r === "") {
                    r = "utf8";
                }
                if (!Buffer.isEncoding(r)) {
                    throw new TypeError("Unknown encoding: " + r);
                }
                var t = byteLength(e, r) | 0;
                var f = createBuffer(t);
                var n = f.write(e, r);
                if (n !== t) {
                    f = f.slice(0, n);
                }
                return f;
            }
            function fromArrayLike(e) {
                var r = e.length < 0 ? 0 : checked(e.length) | 0;
                var t = createBuffer(r);
                for(var f = 0; f < r; f += 1){
                    t[f] = e[f] & 255;
                }
                return t;
            }
            function fromArrayBuffer(e, r, t) {
                if (r < 0 || e.byteLength < r) {
                    throw new RangeError('"offset" is outside of buffer bounds');
                }
                if (e.byteLength < r + (t || 0)) {
                    throw new RangeError('"length" is outside of buffer bounds');
                }
                var f;
                if (r === undefined && t === undefined) {
                    f = new Uint8Array(e);
                } else if (t === undefined) {
                    f = new Uint8Array(e, r);
                } else {
                    f = new Uint8Array(e, r, t);
                }
                Object.setPrototypeOf(f, Buffer.prototype);
                return f;
            }
            function fromObject(e) {
                if (Buffer.isBuffer(e)) {
                    var r = checked(e.length) | 0;
                    var t = createBuffer(r);
                    if (t.length === 0) {
                        return t;
                    }
                    e.copy(t, 0, 0, r);
                    return t;
                }
                if (e.length !== undefined) {
                    if (typeof e.length !== "number" || numberIsNaN(e.length)) {
                        return createBuffer(0);
                    }
                    return fromArrayLike(e);
                }
                if (e.type === "Buffer" && Array.isArray(e.data)) {
                    return fromArrayLike(e.data);
                }
            }
            function checked(e) {
                if (e >= o) {
                    throw new RangeError("Attempt to allocate Buffer larger than maximum " + "size: 0x" + o.toString(16) + " bytes");
                }
                return e | 0;
            }
            function SlowBuffer(e) {
                if (+e != e) {
                    e = 0;
                }
                return Buffer.alloc(+e);
            }
            Buffer.isBuffer = function isBuffer(e) {
                return e != null && e._isBuffer === true && e !== Buffer.prototype;
            };
            Buffer.compare = function compare(e, r) {
                if (isInstance(e, Uint8Array)) e = Buffer.from(e, e.offset, e.byteLength);
                if (isInstance(r, Uint8Array)) r = Buffer.from(r, r.offset, r.byteLength);
                if (!Buffer.isBuffer(e) || !Buffer.isBuffer(r)) {
                    throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                }
                if (e === r) return 0;
                var t = e.length;
                var f = r.length;
                for(var n = 0, i = Math.min(t, f); n < i; ++n){
                    if (e[n] !== r[n]) {
                        t = e[n];
                        f = r[n];
                        break;
                    }
                }
                if (t < f) return -1;
                if (f < t) return 1;
                return 0;
            };
            Buffer.isEncoding = function isEncoding(e) {
                switch(String(e).toLowerCase()){
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return true;
                    default:
                        return false;
                }
            };
            Buffer.concat = function concat(e, r) {
                if (!Array.isArray(e)) {
                    throw new TypeError('"list" argument must be an Array of Buffers');
                }
                if (e.length === 0) {
                    return Buffer.alloc(0);
                }
                var t;
                if (r === undefined) {
                    r = 0;
                    for(t = 0; t < e.length; ++t){
                        r += e[t].length;
                    }
                }
                var f = Buffer.allocUnsafe(r);
                var n = 0;
                for(t = 0; t < e.length; ++t){
                    var i = e[t];
                    if (isInstance(i, Uint8Array)) {
                        i = Buffer.from(i);
                    }
                    if (!Buffer.isBuffer(i)) {
                        throw new TypeError('"list" argument must be an Array of Buffers');
                    }
                    i.copy(f, n);
                    n += i.length;
                }
                return f;
            };
            function byteLength(e, r) {
                if (Buffer.isBuffer(e)) {
                    return e.length;
                }
                if (ArrayBuffer.isView(e) || isInstance(e, ArrayBuffer)) {
                    return e.byteLength;
                }
                if (typeof e !== "string") {
                    throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' + "Received type " + typeof e);
                }
                var t = e.length;
                var f = arguments.length > 2 && arguments[2] === true;
                if (!f && t === 0) return 0;
                var n = false;
                for(;;){
                    switch(r){
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return t;
                        case "utf8":
                        case "utf-8":
                            return utf8ToBytes(e).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return t * 2;
                        case "hex":
                            return t >>> 1;
                        case "base64":
                            return base64ToBytes(e).length;
                        default:
                            if (n) {
                                return f ? -1 : utf8ToBytes(e).length;
                            }
                            r = ("" + r).toLowerCase();
                            n = true;
                    }
                }
            }
            Buffer.byteLength = byteLength;
            function slowToString(e, r, t) {
                var f = false;
                if (r === undefined || r < 0) {
                    r = 0;
                }
                if (r > this.length) {
                    return "";
                }
                if (t === undefined || t > this.length) {
                    t = this.length;
                }
                if (t <= 0) {
                    return "";
                }
                t >>>= 0;
                r >>>= 0;
                if (t <= r) {
                    return "";
                }
                if (!e) e = "utf8";
                while(true){
                    switch(e){
                        case "hex":
                            return hexSlice(this, r, t);
                        case "utf8":
                        case "utf-8":
                            return utf8Slice(this, r, t);
                        case "ascii":
                            return asciiSlice(this, r, t);
                        case "latin1":
                        case "binary":
                            return latin1Slice(this, r, t);
                        case "base64":
                            return base64Slice(this, r, t);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return utf16leSlice(this, r, t);
                        default:
                            if (f) throw new TypeError("Unknown encoding: " + e);
                            e = (e + "").toLowerCase();
                            f = true;
                    }
                }
            }
            Buffer.prototype._isBuffer = true;
            function swap(e, r, t) {
                var f = e[r];
                e[r] = e[t];
                e[t] = f;
            }
            Buffer.prototype.swap16 = function swap16() {
                var e = this.length;
                if (e % 2 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 16-bits");
                }
                for(var r = 0; r < e; r += 2){
                    swap(this, r, r + 1);
                }
                return this;
            };
            Buffer.prototype.swap32 = function swap32() {
                var e = this.length;
                if (e % 4 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 32-bits");
                }
                for(var r = 0; r < e; r += 4){
                    swap(this, r, r + 3);
                    swap(this, r + 1, r + 2);
                }
                return this;
            };
            Buffer.prototype.swap64 = function swap64() {
                var e = this.length;
                if (e % 8 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 64-bits");
                }
                for(var r = 0; r < e; r += 8){
                    swap(this, r, r + 7);
                    swap(this, r + 1, r + 6);
                    swap(this, r + 2, r + 5);
                    swap(this, r + 3, r + 4);
                }
                return this;
            };
            Buffer.prototype.toString = function toString() {
                var e = this.length;
                if (e === 0) return "";
                if (arguments.length === 0) return utf8Slice(this, 0, e);
                return slowToString.apply(this, arguments);
            };
            Buffer.prototype.toLocaleString = Buffer.prototype.toString;
            Buffer.prototype.equals = function equals(e) {
                if (!Buffer.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                if (this === e) return true;
                return Buffer.compare(this, e) === 0;
            };
            Buffer.prototype.inspect = function inspect() {
                var e = "";
                var t = r.INSPECT_MAX_BYTES;
                e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim();
                if (this.length > t) e += " ... ";
                return "<Buffer " + e + ">";
            };
            if (i) {
                Buffer.prototype[i] = Buffer.prototype.inspect;
            }
            Buffer.prototype.compare = function compare(e, r, t, f, n) {
                if (isInstance(e, Uint8Array)) {
                    e = Buffer.from(e, e.offset, e.byteLength);
                }
                if (!Buffer.isBuffer(e)) {
                    throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. ' + "Received type " + typeof e);
                }
                if (r === undefined) {
                    r = 0;
                }
                if (t === undefined) {
                    t = e ? e.length : 0;
                }
                if (f === undefined) {
                    f = 0;
                }
                if (n === undefined) {
                    n = this.length;
                }
                if (r < 0 || t > e.length || f < 0 || n > this.length) {
                    throw new RangeError("out of range index");
                }
                if (f >= n && r >= t) {
                    return 0;
                }
                if (f >= n) {
                    return -1;
                }
                if (r >= t) {
                    return 1;
                }
                r >>>= 0;
                t >>>= 0;
                f >>>= 0;
                n >>>= 0;
                if (this === e) return 0;
                var i = n - f;
                var o = t - r;
                var u = Math.min(i, o);
                var a = this.slice(f, n);
                var s = e.slice(r, t);
                for(var h = 0; h < u; ++h){
                    if (a[h] !== s[h]) {
                        i = a[h];
                        o = s[h];
                        break;
                    }
                }
                if (i < o) return -1;
                if (o < i) return 1;
                return 0;
            };
            function bidirectionalIndexOf(e, r, t, f, n) {
                if (e.length === 0) return -1;
                if (typeof t === "string") {
                    f = t;
                    t = 0;
                } else if (t > 2147483647) {
                    t = 2147483647;
                } else if (t < -2147483648) {
                    t = -2147483648;
                }
                t = +t;
                if (numberIsNaN(t)) {
                    t = n ? 0 : e.length - 1;
                }
                if (t < 0) t = e.length + t;
                if (t >= e.length) {
                    if (n) return -1;
                    else t = e.length - 1;
                } else if (t < 0) {
                    if (n) t = 0;
                    else return -1;
                }
                if (typeof r === "string") {
                    r = Buffer.from(r, f);
                }
                if (Buffer.isBuffer(r)) {
                    if (r.length === 0) {
                        return -1;
                    }
                    return arrayIndexOf(e, r, t, f, n);
                } else if (typeof r === "number") {
                    r = r & 255;
                    if (typeof Uint8Array.prototype.indexOf === "function") {
                        if (n) {
                            return Uint8Array.prototype.indexOf.call(e, r, t);
                        } else {
                            return Uint8Array.prototype.lastIndexOf.call(e, r, t);
                        }
                    }
                    return arrayIndexOf(e, [
                        r
                    ], t, f, n);
                }
                throw new TypeError("val must be string, number or Buffer");
            }
            function arrayIndexOf(e, r, t, f, n) {
                var i = 1;
                var o = e.length;
                var u = r.length;
                if (f !== undefined) {
                    f = String(f).toLowerCase();
                    if (f === "ucs2" || f === "ucs-2" || f === "utf16le" || f === "utf-16le") {
                        if (e.length < 2 || r.length < 2) {
                            return -1;
                        }
                        i = 2;
                        o /= 2;
                        u /= 2;
                        t /= 2;
                    }
                }
                function read(e, r) {
                    if (i === 1) {
                        return e[r];
                    } else {
                        return e.readUInt16BE(r * i);
                    }
                }
                var a;
                if (n) {
                    var s = -1;
                    for(a = t; a < o; a++){
                        if (read(e, a) === read(r, s === -1 ? 0 : a - s)) {
                            if (s === -1) s = a;
                            if (a - s + 1 === u) return s * i;
                        } else {
                            if (s !== -1) a -= a - s;
                            s = -1;
                        }
                    }
                } else {
                    if (t + u > o) t = o - u;
                    for(a = t; a >= 0; a--){
                        var h = true;
                        for(var c = 0; c < u; c++){
                            if (read(e, a + c) !== read(r, c)) {
                                h = false;
                                break;
                            }
                        }
                        if (h) return a;
                    }
                }
                return -1;
            }
            Buffer.prototype.includes = function includes(e, r, t) {
                return this.indexOf(e, r, t) !== -1;
            };
            Buffer.prototype.indexOf = function indexOf(e, r, t) {
                return bidirectionalIndexOf(this, e, r, t, true);
            };
            Buffer.prototype.lastIndexOf = function lastIndexOf(e, r, t) {
                return bidirectionalIndexOf(this, e, r, t, false);
            };
            function hexWrite(e, r, t, f) {
                t = Number(t) || 0;
                var n = e.length - t;
                if (!f) {
                    f = n;
                } else {
                    f = Number(f);
                    if (f > n) {
                        f = n;
                    }
                }
                var i = r.length;
                if (f > i / 2) {
                    f = i / 2;
                }
                for(var o = 0; o < f; ++o){
                    var u = parseInt(r.substr(o * 2, 2), 16);
                    if (numberIsNaN(u)) return o;
                    e[t + o] = u;
                }
                return o;
            }
            function utf8Write(e, r, t, f) {
                return blitBuffer(utf8ToBytes(r, e.length - t), e, t, f);
            }
            function asciiWrite(e, r, t, f) {
                return blitBuffer(asciiToBytes(r), e, t, f);
            }
            function latin1Write(e, r, t, f) {
                return asciiWrite(e, r, t, f);
            }
            function base64Write(e, r, t, f) {
                return blitBuffer(base64ToBytes(r), e, t, f);
            }
            function ucs2Write(e, r, t, f) {
                return blitBuffer(utf16leToBytes(r, e.length - t), e, t, f);
            }
            Buffer.prototype.write = function write(e, r, t, f) {
                if (r === undefined) {
                    f = "utf8";
                    t = this.length;
                    r = 0;
                } else if (t === undefined && typeof r === "string") {
                    f = r;
                    t = this.length;
                    r = 0;
                } else if (isFinite(r)) {
                    r = r >>> 0;
                    if (isFinite(t)) {
                        t = t >>> 0;
                        if (f === undefined) f = "utf8";
                    } else {
                        f = t;
                        t = undefined;
                    }
                } else {
                    throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                }
                var n = this.length - r;
                if (t === undefined || t > n) t = n;
                if (e.length > 0 && (t < 0 || r < 0) || r > this.length) {
                    throw new RangeError("Attempt to write outside buffer bounds");
                }
                if (!f) f = "utf8";
                var i = false;
                for(;;){
                    switch(f){
                        case "hex":
                            return hexWrite(this, e, r, t);
                        case "utf8":
                        case "utf-8":
                            return utf8Write(this, e, r, t);
                        case "ascii":
                            return asciiWrite(this, e, r, t);
                        case "latin1":
                        case "binary":
                            return latin1Write(this, e, r, t);
                        case "base64":
                            return base64Write(this, e, r, t);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return ucs2Write(this, e, r, t);
                        default:
                            if (i) throw new TypeError("Unknown encoding: " + f);
                            f = ("" + f).toLowerCase();
                            i = true;
                    }
                }
            };
            Buffer.prototype.toJSON = function toJSON() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                };
            };
            function base64Slice(e, r, t) {
                if (r === 0 && t === e.length) {
                    return f.fromByteArray(e);
                } else {
                    return f.fromByteArray(e.slice(r, t));
                }
            }
            function utf8Slice(e, r, t) {
                t = Math.min(e.length, t);
                var f = [];
                var n = r;
                while(n < t){
                    var i = e[n];
                    var o = null;
                    var u = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1;
                    if (n + u <= t) {
                        var a, s, h, c;
                        switch(u){
                            case 1:
                                if (i < 128) {
                                    o = i;
                                }
                                break;
                            case 2:
                                a = e[n + 1];
                                if ((a & 192) === 128) {
                                    c = (i & 31) << 6 | a & 63;
                                    if (c > 127) {
                                        o = c;
                                    }
                                }
                                break;
                            case 3:
                                a = e[n + 1];
                                s = e[n + 2];
                                if ((a & 192) === 128 && (s & 192) === 128) {
                                    c = (i & 15) << 12 | (a & 63) << 6 | s & 63;
                                    if (c > 2047 && (c < 55296 || c > 57343)) {
                                        o = c;
                                    }
                                }
                                break;
                            case 4:
                                a = e[n + 1];
                                s = e[n + 2];
                                h = e[n + 3];
                                if ((a & 192) === 128 && (s & 192) === 128 && (h & 192) === 128) {
                                    c = (i & 15) << 18 | (a & 63) << 12 | (s & 63) << 6 | h & 63;
                                    if (c > 65535 && c < 1114112) {
                                        o = c;
                                    }
                                }
                        }
                    }
                    if (o === null) {
                        o = 65533;
                        u = 1;
                    } else if (o > 65535) {
                        o -= 65536;
                        f.push(o >>> 10 & 1023 | 55296);
                        o = 56320 | o & 1023;
                    }
                    f.push(o);
                    n += u;
                }
                return decodeCodePointsArray(f);
            }
            var u = 4096;
            function decodeCodePointsArray(e) {
                var r = e.length;
                if (r <= u) {
                    return String.fromCharCode.apply(String, e);
                }
                var t = "";
                var f = 0;
                while(f < r){
                    t += String.fromCharCode.apply(String, e.slice(f, f += u));
                }
                return t;
            }
            function asciiSlice(e, r, t) {
                var f = "";
                t = Math.min(e.length, t);
                for(var n = r; n < t; ++n){
                    f += String.fromCharCode(e[n] & 127);
                }
                return f;
            }
            function latin1Slice(e, r, t) {
                var f = "";
                t = Math.min(e.length, t);
                for(var n = r; n < t; ++n){
                    f += String.fromCharCode(e[n]);
                }
                return f;
            }
            function hexSlice(e, r, t) {
                var f = e.length;
                if (!r || r < 0) r = 0;
                if (!t || t < 0 || t > f) t = f;
                var n = "";
                for(var i = r; i < t; ++i){
                    n += s[e[i]];
                }
                return n;
            }
            function utf16leSlice(e, r, t) {
                var f = e.slice(r, t);
                var n = "";
                for(var i = 0; i < f.length; i += 2){
                    n += String.fromCharCode(f[i] + f[i + 1] * 256);
                }
                return n;
            }
            Buffer.prototype.slice = function slice(e, r) {
                var t = this.length;
                e = ~~e;
                r = r === undefined ? t : ~~r;
                if (e < 0) {
                    e += t;
                    if (e < 0) e = 0;
                } else if (e > t) {
                    e = t;
                }
                if (r < 0) {
                    r += t;
                    if (r < 0) r = 0;
                } else if (r > t) {
                    r = t;
                }
                if (r < e) r = e;
                var f = this.subarray(e, r);
                Object.setPrototypeOf(f, Buffer.prototype);
                return f;
            };
            function checkOffset(e, r, t) {
                if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
                if (e + r > t) throw new RangeError("Trying to access beyond buffer length");
            }
            Buffer.prototype.readUIntLE = function readUIntLE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = this[e];
                var n = 1;
                var i = 0;
                while(++i < r && (n *= 256)){
                    f += this[e + i] * n;
                }
                return f;
            };
            Buffer.prototype.readUIntBE = function readUIntBE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) {
                    checkOffset(e, r, this.length);
                }
                var f = this[e + --r];
                var n = 1;
                while(r > 0 && (n *= 256)){
                    f += this[e + --r] * n;
                }
                return f;
            };
            Buffer.prototype.readUInt8 = function readUInt8(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 1, this.length);
                return this[e];
            };
            Buffer.prototype.readUInt16LE = function readUInt16LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                return this[e] | this[e + 1] << 8;
            };
            Buffer.prototype.readUInt16BE = function readUInt16BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                return this[e] << 8 | this[e + 1];
            };
            Buffer.prototype.readUInt32LE = function readUInt32LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
            };
            Buffer.prototype.readUInt32BE = function readUInt32BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
            };
            Buffer.prototype.readIntLE = function readIntLE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = this[e];
                var n = 1;
                var i = 0;
                while(++i < r && (n *= 256)){
                    f += this[e + i] * n;
                }
                n *= 128;
                if (f >= n) f -= Math.pow(2, 8 * r);
                return f;
            };
            Buffer.prototype.readIntBE = function readIntBE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = r;
                var n = 1;
                var i = this[e + --f];
                while(f > 0 && (n *= 256)){
                    i += this[e + --f] * n;
                }
                n *= 128;
                if (i >= n) i -= Math.pow(2, 8 * r);
                return i;
            };
            Buffer.prototype.readInt8 = function readInt8(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 1, this.length);
                if (!(this[e] & 128)) return this[e];
                return (255 - this[e] + 1) * -1;
            };
            Buffer.prototype.readInt16LE = function readInt16LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                var t = this[e] | this[e + 1] << 8;
                return t & 32768 ? t | 4294901760 : t;
            };
            Buffer.prototype.readInt16BE = function readInt16BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                var t = this[e + 1] | this[e] << 8;
                return t & 32768 ? t | 4294901760 : t;
            };
            Buffer.prototype.readInt32LE = function readInt32LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
            };
            Buffer.prototype.readInt32BE = function readInt32BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
            };
            Buffer.prototype.readFloatLE = function readFloatLE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return n.read(this, e, true, 23, 4);
            };
            Buffer.prototype.readFloatBE = function readFloatBE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return n.read(this, e, false, 23, 4);
            };
            Buffer.prototype.readDoubleLE = function readDoubleLE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 8, this.length);
                return n.read(this, e, true, 52, 8);
            };
            Buffer.prototype.readDoubleBE = function readDoubleBE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 8, this.length);
                return n.read(this, e, false, 52, 8);
            };
            function checkInt(e, r, t, f, n, i) {
                if (!Buffer.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (r > n || r < i) throw new RangeError('"value" argument is out of bounds');
                if (t + f > e.length) throw new RangeError("Index out of range");
            }
            Buffer.prototype.writeUIntLE = function writeUIntLE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                t = t >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t) - 1;
                    checkInt(this, e, r, t, n, 0);
                }
                var i = 1;
                var o = 0;
                this[r] = e & 255;
                while(++o < t && (i *= 256)){
                    this[r + o] = e / i & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeUIntBE = function writeUIntBE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                t = t >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t) - 1;
                    checkInt(this, e, r, t, n, 0);
                }
                var i = t - 1;
                var o = 1;
                this[r + i] = e & 255;
                while(--i >= 0 && (o *= 256)){
                    this[r + i] = e / o & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeUInt8 = function writeUInt8(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 1, 255, 0);
                this[r] = e & 255;
                return r + 1;
            };
            Buffer.prototype.writeUInt16LE = function writeUInt16LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 65535, 0);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                return r + 2;
            };
            Buffer.prototype.writeUInt16BE = function writeUInt16BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 65535, 0);
                this[r] = e >>> 8;
                this[r + 1] = e & 255;
                return r + 2;
            };
            Buffer.prototype.writeUInt32LE = function writeUInt32LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 4294967295, 0);
                this[r + 3] = e >>> 24;
                this[r + 2] = e >>> 16;
                this[r + 1] = e >>> 8;
                this[r] = e & 255;
                return r + 4;
            };
            Buffer.prototype.writeUInt32BE = function writeUInt32BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 4294967295, 0);
                this[r] = e >>> 24;
                this[r + 1] = e >>> 16;
                this[r + 2] = e >>> 8;
                this[r + 3] = e & 255;
                return r + 4;
            };
            Buffer.prototype.writeIntLE = function writeIntLE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t - 1);
                    checkInt(this, e, r, t, n - 1, -n);
                }
                var i = 0;
                var o = 1;
                var u = 0;
                this[r] = e & 255;
                while(++i < t && (o *= 256)){
                    if (e < 0 && u === 0 && this[r + i - 1] !== 0) {
                        u = 1;
                    }
                    this[r + i] = (e / o >> 0) - u & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeIntBE = function writeIntBE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t - 1);
                    checkInt(this, e, r, t, n - 1, -n);
                }
                var i = t - 1;
                var o = 1;
                var u = 0;
                this[r + i] = e & 255;
                while(--i >= 0 && (o *= 256)){
                    if (e < 0 && u === 0 && this[r + i + 1] !== 0) {
                        u = 1;
                    }
                    this[r + i] = (e / o >> 0) - u & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeInt8 = function writeInt8(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 1, 127, -128);
                if (e < 0) e = 255 + e + 1;
                this[r] = e & 255;
                return r + 1;
            };
            Buffer.prototype.writeInt16LE = function writeInt16LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 32767, -32768);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                return r + 2;
            };
            Buffer.prototype.writeInt16BE = function writeInt16BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 32767, -32768);
                this[r] = e >>> 8;
                this[r + 1] = e & 255;
                return r + 2;
            };
            Buffer.prototype.writeInt32LE = function writeInt32LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 2147483647, -2147483648);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                this[r + 2] = e >>> 16;
                this[r + 3] = e >>> 24;
                return r + 4;
            };
            Buffer.prototype.writeInt32BE = function writeInt32BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 2147483647, -2147483648);
                if (e < 0) e = 4294967295 + e + 1;
                this[r] = e >>> 24;
                this[r + 1] = e >>> 16;
                this[r + 2] = e >>> 8;
                this[r + 3] = e & 255;
                return r + 4;
            };
            function checkIEEE754(e, r, t, f, n, i) {
                if (t + f > e.length) throw new RangeError("Index out of range");
                if (t < 0) throw new RangeError("Index out of range");
            }
            function writeFloat(e, r, t, f, i) {
                r = +r;
                t = t >>> 0;
                if (!i) {
                    checkIEEE754(e, r, t, 4, 34028234663852886e22, -34028234663852886e22);
                }
                n.write(e, r, t, f, 23, 4);
                return t + 4;
            }
            Buffer.prototype.writeFloatLE = function writeFloatLE(e, r, t) {
                return writeFloat(this, e, r, true, t);
            };
            Buffer.prototype.writeFloatBE = function writeFloatBE(e, r, t) {
                return writeFloat(this, e, r, false, t);
            };
            function writeDouble(e, r, t, f, i) {
                r = +r;
                t = t >>> 0;
                if (!i) {
                    checkIEEE754(e, r, t, 8, 17976931348623157e292, -17976931348623157e292);
                }
                n.write(e, r, t, f, 52, 8);
                return t + 8;
            }
            Buffer.prototype.writeDoubleLE = function writeDoubleLE(e, r, t) {
                return writeDouble(this, e, r, true, t);
            };
            Buffer.prototype.writeDoubleBE = function writeDoubleBE(e, r, t) {
                return writeDouble(this, e, r, false, t);
            };
            Buffer.prototype.copy = function copy(e, r, t, f) {
                if (!Buffer.isBuffer(e)) throw new TypeError("argument should be a Buffer");
                if (!t) t = 0;
                if (!f && f !== 0) f = this.length;
                if (r >= e.length) r = e.length;
                if (!r) r = 0;
                if (f > 0 && f < t) f = t;
                if (f === t) return 0;
                if (e.length === 0 || this.length === 0) return 0;
                if (r < 0) {
                    throw new RangeError("targetStart out of bounds");
                }
                if (t < 0 || t >= this.length) throw new RangeError("Index out of range");
                if (f < 0) throw new RangeError("sourceEnd out of bounds");
                if (f > this.length) f = this.length;
                if (e.length - r < f - t) {
                    f = e.length - r + t;
                }
                var n = f - t;
                if (this === e && typeof Uint8Array.prototype.copyWithin === "function") {
                    this.copyWithin(r, t, f);
                } else if (this === e && t < r && r < f) {
                    for(var i = n - 1; i >= 0; --i){
                        e[i + r] = this[i + t];
                    }
                } else {
                    Uint8Array.prototype.set.call(e, this.subarray(t, f), r);
                }
                return n;
            };
            Buffer.prototype.fill = function fill(e, r, t, f) {
                if (typeof e === "string") {
                    if (typeof r === "string") {
                        f = r;
                        r = 0;
                        t = this.length;
                    } else if (typeof t === "string") {
                        f = t;
                        t = this.length;
                    }
                    if (f !== undefined && typeof f !== "string") {
                        throw new TypeError("encoding must be a string");
                    }
                    if (typeof f === "string" && !Buffer.isEncoding(f)) {
                        throw new TypeError("Unknown encoding: " + f);
                    }
                    if (e.length === 1) {
                        var n = e.charCodeAt(0);
                        if (f === "utf8" && n < 128 || f === "latin1") {
                            e = n;
                        }
                    }
                } else if (typeof e === "number") {
                    e = e & 255;
                } else if (typeof e === "boolean") {
                    e = Number(e);
                }
                if (r < 0 || this.length < r || this.length < t) {
                    throw new RangeError("Out of range index");
                }
                if (t <= r) {
                    return this;
                }
                r = r >>> 0;
                t = t === undefined ? this.length : t >>> 0;
                if (!e) e = 0;
                var i;
                if (typeof e === "number") {
                    for(i = r; i < t; ++i){
                        this[i] = e;
                    }
                } else {
                    var o = Buffer.isBuffer(e) ? e : Buffer.from(e, f);
                    var u = o.length;
                    if (u === 0) {
                        throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                    }
                    for(i = 0; i < t - r; ++i){
                        this[i + r] = o[i % u];
                    }
                }
                return this;
            };
            var a = /[^+/0-9A-Za-z-_]/g;
            function base64clean(e) {
                e = e.split("=")[0];
                e = e.trim().replace(a, "");
                if (e.length < 2) return "";
                while(e.length % 4 !== 0){
                    e = e + "=";
                }
                return e;
            }
            function utf8ToBytes(e, r) {
                r = r || Infinity;
                var t;
                var f = e.length;
                var n = null;
                var i = [];
                for(var o = 0; o < f; ++o){
                    t = e.charCodeAt(o);
                    if (t > 55295 && t < 57344) {
                        if (!n) {
                            if (t > 56319) {
                                if ((r -= 3) > -1) i.push(239, 191, 189);
                                continue;
                            } else if (o + 1 === f) {
                                if ((r -= 3) > -1) i.push(239, 191, 189);
                                continue;
                            }
                            n = t;
                            continue;
                        }
                        if (t < 56320) {
                            if ((r -= 3) > -1) i.push(239, 191, 189);
                            n = t;
                            continue;
                        }
                        t = (n - 55296 << 10 | t - 56320) + 65536;
                    } else if (n) {
                        if ((r -= 3) > -1) i.push(239, 191, 189);
                    }
                    n = null;
                    if (t < 128) {
                        if ((r -= 1) < 0) break;
                        i.push(t);
                    } else if (t < 2048) {
                        if ((r -= 2) < 0) break;
                        i.push(t >> 6 | 192, t & 63 | 128);
                    } else if (t < 65536) {
                        if ((r -= 3) < 0) break;
                        i.push(t >> 12 | 224, t >> 6 & 63 | 128, t & 63 | 128);
                    } else if (t < 1114112) {
                        if ((r -= 4) < 0) break;
                        i.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, t & 63 | 128);
                    } else {
                        throw new Error("Invalid code point");
                    }
                }
                return i;
            }
            function asciiToBytes(e) {
                var r = [];
                for(var t = 0; t < e.length; ++t){
                    r.push(e.charCodeAt(t) & 255);
                }
                return r;
            }
            function utf16leToBytes(e, r) {
                var t, f, n;
                var i = [];
                for(var o = 0; o < e.length; ++o){
                    if ((r -= 2) < 0) break;
                    t = e.charCodeAt(o);
                    f = t >> 8;
                    n = t % 256;
                    i.push(n);
                    i.push(f);
                }
                return i;
            }
            function base64ToBytes(e) {
                return f.toByteArray(base64clean(e));
            }
            function blitBuffer(e, r, t, f) {
                for(var n = 0; n < f; ++n){
                    if (n + t >= r.length || n >= e.length) break;
                    r[n + t] = e[n];
                }
                return n;
            }
            function isInstance(e, r) {
                return e instanceof r || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === r.name;
            }
            function numberIsNaN(e) {
                return e !== e;
            }
            var s = function() {
                var e = "0123456789abcdef";
                var r = new Array(256);
                for(var t = 0; t < 16; ++t){
                    var f = t * 16;
                    for(var n = 0; n < 16; ++n){
                        r[f + n] = e[t] + e[n];
                    }
                }
                return r;
            }();
        },
        783: function(e, r) {
            /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ r.read = function(e, r, t, f, n) {
                var i, o;
                var u = n * 8 - f - 1;
                var a = (1 << u) - 1;
                var s = a >> 1;
                var h = -7;
                var c = t ? n - 1 : 0;
                var l = t ? -1 : 1;
                var p = e[r + c];
                c += l;
                i = p & (1 << -h) - 1;
                p >>= -h;
                h += u;
                for(; h > 0; i = i * 256 + e[r + c], c += l, h -= 8){}
                o = i & (1 << -h) - 1;
                i >>= -h;
                h += f;
                for(; h > 0; o = o * 256 + e[r + c], c += l, h -= 8){}
                if (i === 0) {
                    i = 1 - s;
                } else if (i === a) {
                    return o ? NaN : (p ? -1 : 1) * Infinity;
                } else {
                    o = o + Math.pow(2, f);
                    i = i - s;
                }
                return (p ? -1 : 1) * o * Math.pow(2, i - f);
            };
            r.write = function(e, r, t, f, n, i) {
                var o, u, a;
                var s = i * 8 - n - 1;
                var h = (1 << s) - 1;
                var c = h >> 1;
                var l = n === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
                var p = f ? 0 : i - 1;
                var y = f ? 1 : -1;
                var g = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0;
                r = Math.abs(r);
                if (isNaN(r) || r === Infinity) {
                    u = isNaN(r) ? 1 : 0;
                    o = h;
                } else {
                    o = Math.floor(Math.log(r) / Math.LN2);
                    if (r * (a = Math.pow(2, -o)) < 1) {
                        o--;
                        a *= 2;
                    }
                    if (o + c >= 1) {
                        r += l / a;
                    } else {
                        r += l * Math.pow(2, 1 - c);
                    }
                    if (r * a >= 2) {
                        o++;
                        a /= 2;
                    }
                    if (o + c >= h) {
                        u = 0;
                        o = h;
                    } else if (o + c >= 1) {
                        u = (r * a - 1) * Math.pow(2, n);
                        o = o + c;
                    } else {
                        u = r * Math.pow(2, c - 1) * Math.pow(2, n);
                        o = 0;
                    }
                }
                for(; n >= 8; e[t + p] = u & 255, p += y, u /= 256, n -= 8){}
                o = o << n | u;
                s += n;
                for(; s > 0; e[t + p] = o & 255, p += y, o /= 256, s -= 8){}
                e[t + p - y] |= g * 128;
            };
        }
    };
    var r = {};
    function __nccwpck_require__(t) {
        var f = r[t];
        if (f !== undefined) {
            return f.exports;
        }
        var n = r[t] = {
            exports: {}
        };
        var i = true;
        try {
            e[t](n, n.exports, __nccwpck_require__);
            i = false;
        } finally{
            if (i) delete r[t];
        }
        return n.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/rayls-shield-landing-page/node_modules/next/dist/compiled/buffer") + "/";
    var t = __nccwpck_require__(72);
    module.exports = t;
})();
}),
"[project]/rayls-shield-landing-page/node_modules/next/dist/compiled/events/events.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

(function() {
    "use strict";
    var e = {
        864: function(e) {
            var t = typeof Reflect === "object" ? Reflect : null;
            var n = t && typeof t.apply === "function" ? t.apply : function ReflectApply(e, t, n) {
                return Function.prototype.apply.call(e, t, n);
            };
            var r;
            if (t && typeof t.ownKeys === "function") {
                r = t.ownKeys;
            } else if (Object.getOwnPropertySymbols) {
                r = function ReflectOwnKeys(e) {
                    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
                };
            } else {
                r = function ReflectOwnKeys(e) {
                    return Object.getOwnPropertyNames(e);
                };
            }
            function ProcessEmitWarning(e) {
                if (console && console.warn) console.warn(e);
            }
            var i = Number.isNaN || function NumberIsNaN(e) {
                return e !== e;
            };
            function EventEmitter() {
                EventEmitter.init.call(this);
            }
            e.exports = EventEmitter;
            e.exports.once = once;
            EventEmitter.EventEmitter = EventEmitter;
            EventEmitter.prototype._events = undefined;
            EventEmitter.prototype._eventsCount = 0;
            EventEmitter.prototype._maxListeners = undefined;
            var s = 10;
            function checkListener(e) {
                if (typeof e !== "function") {
                    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
                }
            }
            Object.defineProperty(EventEmitter, "defaultMaxListeners", {
                enumerable: true,
                get: function() {
                    return s;
                },
                set: function(e) {
                    if (typeof e !== "number" || e < 0 || i(e)) {
                        throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
                    }
                    s = e;
                }
            });
            EventEmitter.init = function() {
                if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
                    this._events = Object.create(null);
                    this._eventsCount = 0;
                }
                this._maxListeners = this._maxListeners || undefined;
            };
            EventEmitter.prototype.setMaxListeners = function setMaxListeners(e) {
                if (typeof e !== "number" || e < 0 || i(e)) {
                    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
                }
                this._maxListeners = e;
                return this;
            };
            function _getMaxListeners(e) {
                if (e._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
                return e._maxListeners;
            }
            EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
                return _getMaxListeners(this);
            };
            EventEmitter.prototype.emit = function emit(e) {
                var t = [];
                for(var r = 1; r < arguments.length; r++)t.push(arguments[r]);
                var i = e === "error";
                var s = this._events;
                if (s !== undefined) i = i && s.error === undefined;
                else if (!i) return false;
                if (i) {
                    var o;
                    if (t.length > 0) o = t[0];
                    if (o instanceof Error) {
                        throw o;
                    }
                    var f = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
                    f.context = o;
                    throw f;
                }
                var u = s[e];
                if (u === undefined) return false;
                if (typeof u === "function") {
                    n(u, this, t);
                } else {
                    var a = u.length;
                    var c = arrayClone(u, a);
                    for(var r = 0; r < a; ++r)n(c[r], this, t);
                }
                return true;
            };
            function _addListener(e, t, n, r) {
                var i;
                var s;
                var o;
                checkListener(n);
                s = e._events;
                if (s === undefined) {
                    s = e._events = Object.create(null);
                    e._eventsCount = 0;
                } else {
                    if (s.newListener !== undefined) {
                        e.emit("newListener", t, n.listener ? n.listener : n);
                        s = e._events;
                    }
                    o = s[t];
                }
                if (o === undefined) {
                    o = s[t] = n;
                    ++e._eventsCount;
                } else {
                    if (typeof o === "function") {
                        o = s[t] = r ? [
                            n,
                            o
                        ] : [
                            o,
                            n
                        ];
                    } else if (r) {
                        o.unshift(n);
                    } else {
                        o.push(n);
                    }
                    i = _getMaxListeners(e);
                    if (i > 0 && o.length > i && !o.warned) {
                        o.warned = true;
                        var f = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(t) + " listeners " + "added. Use emitter.setMaxListeners() to " + "increase limit");
                        f.name = "MaxListenersExceededWarning";
                        f.emitter = e;
                        f.type = t;
                        f.count = o.length;
                        ProcessEmitWarning(f);
                    }
                }
                return e;
            }
            EventEmitter.prototype.addListener = function addListener(e, t) {
                return _addListener(this, e, t, false);
            };
            EventEmitter.prototype.on = EventEmitter.prototype.addListener;
            EventEmitter.prototype.prependListener = function prependListener(e, t) {
                return _addListener(this, e, t, true);
            };
            function onceWrapper() {
                if (!this.fired) {
                    this.target.removeListener(this.type, this.wrapFn);
                    this.fired = true;
                    if (arguments.length === 0) return this.listener.call(this.target);
                    return this.listener.apply(this.target, arguments);
                }
            }
            function _onceWrap(e, t, n) {
                var r = {
                    fired: false,
                    wrapFn: undefined,
                    target: e,
                    type: t,
                    listener: n
                };
                var i = onceWrapper.bind(r);
                i.listener = n;
                r.wrapFn = i;
                return i;
            }
            EventEmitter.prototype.once = function once(e, t) {
                checkListener(t);
                this.on(e, _onceWrap(this, e, t));
                return this;
            };
            EventEmitter.prototype.prependOnceListener = function prependOnceListener(e, t) {
                checkListener(t);
                this.prependListener(e, _onceWrap(this, e, t));
                return this;
            };
            EventEmitter.prototype.removeListener = function removeListener(e, t) {
                var n, r, i, s, o;
                checkListener(t);
                r = this._events;
                if (r === undefined) return this;
                n = r[e];
                if (n === undefined) return this;
                if (n === t || n.listener === t) {
                    if (--this._eventsCount === 0) this._events = Object.create(null);
                    else {
                        delete r[e];
                        if (r.removeListener) this.emit("removeListener", e, n.listener || t);
                    }
                } else if (typeof n !== "function") {
                    i = -1;
                    for(s = n.length - 1; s >= 0; s--){
                        if (n[s] === t || n[s].listener === t) {
                            o = n[s].listener;
                            i = s;
                            break;
                        }
                    }
                    if (i < 0) return this;
                    if (i === 0) n.shift();
                    else {
                        spliceOne(n, i);
                    }
                    if (n.length === 1) r[e] = n[0];
                    if (r.removeListener !== undefined) this.emit("removeListener", e, o || t);
                }
                return this;
            };
            EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
            EventEmitter.prototype.removeAllListeners = function removeAllListeners(e) {
                var t, n, r;
                n = this._events;
                if (n === undefined) return this;
                if (n.removeListener === undefined) {
                    if (arguments.length === 0) {
                        this._events = Object.create(null);
                        this._eventsCount = 0;
                    } else if (n[e] !== undefined) {
                        if (--this._eventsCount === 0) this._events = Object.create(null);
                        else delete n[e];
                    }
                    return this;
                }
                if (arguments.length === 0) {
                    var i = Object.keys(n);
                    var s;
                    for(r = 0; r < i.length; ++r){
                        s = i[r];
                        if (s === "removeListener") continue;
                        this.removeAllListeners(s);
                    }
                    this.removeAllListeners("removeListener");
                    this._events = Object.create(null);
                    this._eventsCount = 0;
                    return this;
                }
                t = n[e];
                if (typeof t === "function") {
                    this.removeListener(e, t);
                } else if (t !== undefined) {
                    for(r = t.length - 1; r >= 0; r--){
                        this.removeListener(e, t[r]);
                    }
                }
                return this;
            };
            function _listeners(e, t, n) {
                var r = e._events;
                if (r === undefined) return [];
                var i = r[t];
                if (i === undefined) return [];
                if (typeof i === "function") return n ? [
                    i.listener || i
                ] : [
                    i
                ];
                return n ? unwrapListeners(i) : arrayClone(i, i.length);
            }
            EventEmitter.prototype.listeners = function listeners(e) {
                return _listeners(this, e, true);
            };
            EventEmitter.prototype.rawListeners = function rawListeners(e) {
                return _listeners(this, e, false);
            };
            EventEmitter.listenerCount = function(e, t) {
                if (typeof e.listenerCount === "function") {
                    return e.listenerCount(t);
                } else {
                    return listenerCount.call(e, t);
                }
            };
            EventEmitter.prototype.listenerCount = listenerCount;
            function listenerCount(e) {
                var t = this._events;
                if (t !== undefined) {
                    var n = t[e];
                    if (typeof n === "function") {
                        return 1;
                    } else if (n !== undefined) {
                        return n.length;
                    }
                }
                return 0;
            }
            EventEmitter.prototype.eventNames = function eventNames() {
                return this._eventsCount > 0 ? r(this._events) : [];
            };
            function arrayClone(e, t) {
                var n = new Array(t);
                for(var r = 0; r < t; ++r)n[r] = e[r];
                return n;
            }
            function spliceOne(e, t) {
                for(; t + 1 < e.length; t++)e[t] = e[t + 1];
                e.pop();
            }
            function unwrapListeners(e) {
                var t = new Array(e.length);
                for(var n = 0; n < t.length; ++n){
                    t[n] = e[n].listener || e[n];
                }
                return t;
            }
            function once(e, t) {
                return new Promise(function(n, r) {
                    function errorListener(n) {
                        e.removeListener(t, resolver);
                        r(n);
                    }
                    function resolver() {
                        if (typeof e.removeListener === "function") {
                            e.removeListener("error", errorListener);
                        }
                        n([].slice.call(arguments));
                    }
                    eventTargetAgnosticAddListener(e, t, resolver, {
                        once: true
                    });
                    if (t !== "error") {
                        addErrorHandlerIfEventEmitter(e, errorListener, {
                            once: true
                        });
                    }
                });
            }
            function addErrorHandlerIfEventEmitter(e, t, n) {
                if (typeof e.on === "function") {
                    eventTargetAgnosticAddListener(e, "error", t, n);
                }
            }
            function eventTargetAgnosticAddListener(e, t, n, r) {
                if (typeof e.on === "function") {
                    if (r.once) {
                        e.once(t, n);
                    } else {
                        e.on(t, n);
                    }
                } else if (typeof e.addEventListener === "function") {
                    e.addEventListener(t, function wrapListener(i) {
                        if (r.once) {
                            e.removeEventListener(t, wrapListener);
                        }
                        n(i);
                    });
                } else {
                    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
                }
            }
        }
    };
    var t = {};
    function __nccwpck_require__(n) {
        var r = t[n];
        if (r !== undefined) {
            return r.exports;
        }
        var i = t[n] = {
            exports: {}
        };
        var s = true;
        try {
            e[n](i, i.exports, __nccwpck_require__);
            s = false;
        } finally{
            if (s) delete t[n];
        }
        return i.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/rayls-shield-landing-page/node_modules/next/dist/compiled/events") + "/";
    var n = __nccwpck_require__(864);
    module.exports = n;
})();
}),
"[project]/rayls-shield-landing-page/node_modules/next/dist/compiled/assert/assert.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
(function() {
    var e = {
        8992: function(e) {
            e.exports = function(e, r, n) {
                if (e.filter) return e.filter(r, n);
                if (void 0 === e || null === e) throw new TypeError;
                if ("function" != typeof r) throw new TypeError;
                var o = [];
                for(var i = 0; i < e.length; i++){
                    if (!t.call(e, i)) continue;
                    var a = e[i];
                    if (r.call(n, a, i, e)) o.push(a);
                }
                return o;
            };
            var t = Object.prototype.hasOwnProperty;
        },
        2167: function(e, t, r) {
            "use strict";
            function _typeof(e) {
                if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                    _typeof = function _typeof(e) {
                        return typeof e;
                    };
                } else {
                    _typeof = function _typeof(e) {
                        return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    };
                }
                return _typeof(e);
            }
            function _classCallCheck(e, t) {
                if (!(e instanceof t)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }
            var n = r(2023), o = n.codes, i = o.ERR_AMBIGUOUS_ARGUMENT, a = o.ERR_INVALID_ARG_TYPE, c = o.ERR_INVALID_ARG_VALUE, u = o.ERR_INVALID_RETURN_VALUE, f = o.ERR_MISSING_ARGS;
            var s = r(942);
            var l = r(8177), p = l.inspect;
            var y = r(8177).types, v = y.isPromise, g = y.isRegExp;
            var b = ("TURBOPACK compile-time truthy", 1) ? Object.assign : "TURBOPACK unreachable";
            var d = Object.is ? Object.is : r(3256);
            var h = new Map;
            var m;
            var S;
            var w;
            var E;
            var O;
            function lazyLoadComparison() {
                var e = r(176);
                m = e.isDeepEqual;
                S = e.isDeepStrictEqual;
            }
            var A = /[\x00-\x08\x0b\x0c\x0e-\x1f]/g;
            var j = null && [
                "\\u0000",
                "\\u0001",
                "\\u0002",
                "\\u0003",
                "\\u0004",
                "\\u0005",
                "\\u0006",
                "\\u0007",
                "\\b",
                "",
                "",
                "\\u000b",
                "\\f",
                "",
                "\\u000e",
                "\\u000f",
                "\\u0010",
                "\\u0011",
                "\\u0012",
                "\\u0013",
                "\\u0014",
                "\\u0015",
                "\\u0016",
                "\\u0017",
                "\\u0018",
                "\\u0019",
                "\\u001a",
                "\\u001b",
                "\\u001c",
                "\\u001d",
                "\\u001e",
                "\\u001f"
            ];
            var P = function escapeFn(e) {
                return j[e.charCodeAt(0)];
            };
            var _ = false;
            var x = e.exports = ok;
            var k = {};
            function innerFail(e) {
                if (e.message instanceof Error) throw e.message;
                throw new s(e);
            }
            function fail(e, t, r, n, o) {
                var i = arguments.length;
                var a;
                if (i === 0) {
                    a = "Failed";
                } else if (i === 1) {
                    r = e;
                    e = undefined;
                } else {
                    if (_ === false) {
                        _ = true;
                        var c = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].emitWarning ? __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].emitWarning : console.warn.bind(console);
                        c("assert.fail() with more than one argument is deprecated. " + "Please use assert.strictEqual() instead or only pass a message.", "DeprecationWarning", "DEP0094");
                    }
                    if (i === 2) n = "!=";
                }
                if (r instanceof Error) throw r;
                var u = {
                    actual: e,
                    expected: t,
                    operator: n === undefined ? "fail" : n,
                    stackStartFn: o || fail
                };
                if (r !== undefined) {
                    u.message = r;
                }
                var f = new s(u);
                if (a) {
                    f.message = a;
                    f.generatedMessage = true;
                }
                throw f;
            }
            x.fail = fail;
            x.AssertionError = s;
            function innerOk(e, t, r, n) {
                if (!r) {
                    var o = false;
                    if (t === 0) {
                        o = true;
                        n = "No value argument passed to `assert.ok()`";
                    } else if (n instanceof Error) {
                        throw n;
                    }
                    var i = new s({
                        actual: r,
                        expected: true,
                        message: n,
                        operator: "==",
                        stackStartFn: e
                    });
                    i.generatedMessage = o;
                    throw i;
                }
            }
            function ok() {
                for(var e = arguments.length, t = new Array(e), r = 0; r < e; r++){
                    t[r] = arguments[r];
                }
                innerOk.apply(void 0, [
                    ok,
                    t.length
                ].concat(t));
            }
            x.ok = ok;
            x.equal = function equal(e, t, r) {
                if (arguments.length < 2) {
                    throw new f("actual", "expected");
                }
                if (e != t) {
                    innerFail({
                        actual: e,
                        expected: t,
                        message: r,
                        operator: "==",
                        stackStartFn: equal
                    });
                }
            };
            x.notEqual = function notEqual(e, t, r) {
                if (arguments.length < 2) {
                    throw new f("actual", "expected");
                }
                if (e == t) {
                    innerFail({
                        actual: e,
                        expected: t,
                        message: r,
                        operator: "!=",
                        stackStartFn: notEqual
                    });
                }
            };
            x.deepEqual = function deepEqual(e, t, r) {
                if (arguments.length < 2) {
                    throw new f("actual", "expected");
                }
                if (m === undefined) lazyLoadComparison();
                if (!m(e, t)) {
                    innerFail({
                        actual: e,
                        expected: t,
                        message: r,
                        operator: "deepEqual",
                        stackStartFn: deepEqual
                    });
                }
            };
            x.notDeepEqual = function notDeepEqual(e, t, r) {
                if (arguments.length < 2) {
                    throw new f("actual", "expected");
                }
                if (m === undefined) lazyLoadComparison();
                if (m(e, t)) {
                    innerFail({
                        actual: e,
                        expected: t,
                        message: r,
                        operator: "notDeepEqual",
                        stackStartFn: notDeepEqual
                    });
                }
            };
            x.deepStrictEqual = function deepStrictEqual(e, t, r) {
                if (arguments.length < 2) {
                    throw new f("actual", "expected");
                }
                if (m === undefined) lazyLoadComparison();
                if (!S(e, t)) {
                    innerFail({
                        actual: e,
                        expected: t,
                        message: r,
                        operator: "deepStrictEqual",
                        stackStartFn: deepStrictEqual
                    });
                }
            };
            x.notDeepStrictEqual = notDeepStrictEqual;
            function notDeepStrictEqual(e, t, r) {
                if (arguments.length < 2) {
                    throw new f("actual", "expected");
                }
                if (m === undefined) lazyLoadComparison();
                if (S(e, t)) {
                    innerFail({
                        actual: e,
                        expected: t,
                        message: r,
                        operator: "notDeepStrictEqual",
                        stackStartFn: notDeepStrictEqual
                    });
                }
            }
            x.strictEqual = function strictEqual(e, t, r) {
                if (arguments.length < 2) {
                    throw new f("actual", "expected");
                }
                if (!d(e, t)) {
                    innerFail({
                        actual: e,
                        expected: t,
                        message: r,
                        operator: "strictEqual",
                        stackStartFn: strictEqual
                    });
                }
            };
            x.notStrictEqual = function notStrictEqual(e, t, r) {
                if (arguments.length < 2) {
                    throw new f("actual", "expected");
                }
                if (d(e, t)) {
                    innerFail({
                        actual: e,
                        expected: t,
                        message: r,
                        operator: "notStrictEqual",
                        stackStartFn: notStrictEqual
                    });
                }
            };
            var T = function Comparison(e, t, r) {
                var n = this;
                _classCallCheck(this, Comparison);
                t.forEach(function(t) {
                    if (t in e) {
                        if (r !== undefined && typeof r[t] === "string" && g(e[t]) && e[t].test(r[t])) {
                            n[t] = r[t];
                        } else {
                            n[t] = e[t];
                        }
                    }
                });
            };
            function compareExceptionKey(e, t, r, n, o, i) {
                if (!(r in e) || !S(e[r], t[r])) {
                    if (!n) {
                        var a = new T(e, o);
                        var c = new T(t, o, e);
                        var u = new s({
                            actual: a,
                            expected: c,
                            operator: "deepStrictEqual",
                            stackStartFn: i
                        });
                        u.actual = e;
                        u.expected = t;
                        u.operator = i.name;
                        throw u;
                    }
                    innerFail({
                        actual: e,
                        expected: t,
                        message: n,
                        operator: i.name,
                        stackStartFn: i
                    });
                }
            }
            function expectedException(e, t, r, n) {
                if (typeof t !== "function") {
                    if (g(t)) return t.test(e);
                    if (arguments.length === 2) {
                        throw new a("expected", [
                            "Function",
                            "RegExp"
                        ], t);
                    }
                    if (_typeof(e) !== "object" || e === null) {
                        var o = new s({
                            actual: e,
                            expected: t,
                            message: r,
                            operator: "deepStrictEqual",
                            stackStartFn: n
                        });
                        o.operator = n.name;
                        throw o;
                    }
                    var i = Object.keys(t);
                    if (t instanceof Error) {
                        i.push("name", "message");
                    } else if (i.length === 0) {
                        throw new c("error", t, "may not be an empty object");
                    }
                    if (m === undefined) lazyLoadComparison();
                    i.forEach(function(o) {
                        if (typeof e[o] === "string" && g(t[o]) && t[o].test(e[o])) {
                            return;
                        }
                        compareExceptionKey(e, t, o, r, i, n);
                    });
                    return true;
                }
                if (t.prototype !== undefined && e instanceof t) {
                    return true;
                }
                if (Error.isPrototypeOf(t)) {
                    return false;
                }
                return t.call({}, e) === true;
            }
            function getActual(e) {
                if (typeof e !== "function") {
                    throw new a("fn", "Function", e);
                }
                try {
                    e();
                } catch (e) {
                    return e;
                }
                return k;
            }
            function checkIsPromise(e) {
                return v(e) || e !== null && _typeof(e) === "object" && typeof e.then === "function" && typeof e.catch === "function";
            }
            function waitForActual(e) {
                return Promise.resolve().then(function() {
                    var t;
                    if (typeof e === "function") {
                        t = e();
                        if (!checkIsPromise(t)) {
                            throw new u("instance of Promise", "promiseFn", t);
                        }
                    } else if (checkIsPromise(e)) {
                        t = e;
                    } else {
                        throw new a("promiseFn", [
                            "Function",
                            "Promise"
                        ], e);
                    }
                    return Promise.resolve().then(function() {
                        return t;
                    }).then(function() {
                        return k;
                    }).catch(function(e) {
                        return e;
                    });
                });
            }
            function expectsError(e, t, r, n) {
                if (typeof r === "string") {
                    if (arguments.length === 4) {
                        throw new a("error", [
                            "Object",
                            "Error",
                            "Function",
                            "RegExp"
                        ], r);
                    }
                    if (_typeof(t) === "object" && t !== null) {
                        if (t.message === r) {
                            throw new i("error/message", 'The error message "'.concat(t.message, '" is identical to the message.'));
                        }
                    } else if (t === r) {
                        throw new i("error/message", 'The error "'.concat(t, '" is identical to the message.'));
                    }
                    n = r;
                    r = undefined;
                } else if (r != null && _typeof(r) !== "object" && typeof r !== "function") {
                    throw new a("error", [
                        "Object",
                        "Error",
                        "Function",
                        "RegExp"
                    ], r);
                }
                if (t === k) {
                    var o = "";
                    if (r && r.name) {
                        o += " (".concat(r.name, ")");
                    }
                    o += n ? ": ".concat(n) : ".";
                    var c = e.name === "rejects" ? "rejection" : "exception";
                    innerFail({
                        actual: undefined,
                        expected: r,
                        operator: e.name,
                        message: "Missing expected ".concat(c).concat(o),
                        stackStartFn: e
                    });
                }
                if (r && !expectedException(t, r, n, e)) {
                    throw t;
                }
            }
            function expectsNoError(e, t, r, n) {
                if (t === k) return;
                if (typeof r === "string") {
                    n = r;
                    r = undefined;
                }
                if (!r || expectedException(t, r)) {
                    var o = n ? ": ".concat(n) : ".";
                    var i = e.name === "doesNotReject" ? "rejection" : "exception";
                    innerFail({
                        actual: t,
                        expected: r,
                        operator: e.name,
                        message: "Got unwanted ".concat(i).concat(o, "\n") + 'Actual message: "'.concat(t && t.message, '"'),
                        stackStartFn: e
                    });
                }
                throw t;
            }
            x.throws = function throws(e) {
                for(var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++){
                    r[n - 1] = arguments[n];
                }
                expectsError.apply(void 0, [
                    throws,
                    getActual(e)
                ].concat(r));
            };
            x.rejects = function rejects(e) {
                for(var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++){
                    r[n - 1] = arguments[n];
                }
                return waitForActual(e).then(function(e) {
                    return expectsError.apply(void 0, [
                        rejects,
                        e
                    ].concat(r));
                });
            };
            x.doesNotThrow = function doesNotThrow(e) {
                for(var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++){
                    r[n - 1] = arguments[n];
                }
                expectsNoError.apply(void 0, [
                    doesNotThrow,
                    getActual(e)
                ].concat(r));
            };
            x.doesNotReject = function doesNotReject(e) {
                for(var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++){
                    r[n - 1] = arguments[n];
                }
                return waitForActual(e).then(function(e) {
                    return expectsNoError.apply(void 0, [
                        doesNotReject,
                        e
                    ].concat(r));
                });
            };
            x.ifError = function ifError(e) {
                if (e !== null && e !== undefined) {
                    var t = "ifError got unwanted exception: ";
                    if (_typeof(e) === "object" && typeof e.message === "string") {
                        if (e.message.length === 0 && e.constructor) {
                            t += e.constructor.name;
                        } else {
                            t += e.message;
                        }
                    } else {
                        t += p(e);
                    }
                    var r = new s({
                        actual: e,
                        expected: null,
                        operator: "ifError",
                        message: t,
                        stackStartFn: ifError
                    });
                    var n = e.stack;
                    if (typeof n === "string") {
                        var o = n.split("\n");
                        o.shift();
                        var i = r.stack.split("\n");
                        for(var a = 0; a < o.length; a++){
                            var c = i.indexOf(o[a]);
                            if (c !== -1) {
                                i = i.slice(0, c);
                                break;
                            }
                        }
                        r.stack = "".concat(i.join("\n"), "\n").concat(o.join("\n"));
                    }
                    throw r;
                }
            };
            function strict() {
                for(var e = arguments.length, t = new Array(e), r = 0; r < e; r++){
                    t[r] = arguments[r];
                }
                innerOk.apply(void 0, [
                    strict,
                    t.length
                ].concat(t));
            }
            x.strict = b(strict, x, {
                equal: x.strictEqual,
                deepEqual: x.deepStrictEqual,
                notEqual: x.notStrictEqual,
                notDeepEqual: x.notDeepStrictEqual
            });
            x.strict.strict = x.strict;
        },
        942: function(e, t, r) {
            "use strict";
            function _objectSpread(e) {
                for(var t = 1; t < arguments.length; t++){
                    var r = arguments[t] != null ? arguments[t] : {};
                    var n = Object.keys(r);
                    if (typeof Object.getOwnPropertySymbols === "function") {
                        n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        }));
                    }
                    n.forEach(function(t) {
                        _defineProperty(e, t, r[t]);
                    });
                }
                return e;
            }
            function _defineProperty(e, t, r) {
                if (t in e) {
                    Object.defineProperty(e, t, {
                        value: r,
                        enumerable: true,
                        configurable: true,
                        writable: true
                    });
                } else {
                    e[t] = r;
                }
                return e;
            }
            function _classCallCheck(e, t) {
                if (!(e instanceof t)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }
            function _defineProperties(e, t) {
                for(var r = 0; r < t.length; r++){
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n);
                }
            }
            function _createClass(e, t, r) {
                if (t) _defineProperties(e.prototype, t);
                if (r) _defineProperties(e, r);
                return e;
            }
            function _possibleConstructorReturn(e, t) {
                if (t && (_typeof(t) === "object" || typeof t === "function")) {
                    return t;
                }
                return _assertThisInitialized(e);
            }
            function _assertThisInitialized(e) {
                if (e === void 0) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return e;
            }
            function _inherits(e, t) {
                if (typeof t !== "function" && t !== null) {
                    throw new TypeError("Super expression must either be null or a function");
                }
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: true,
                        configurable: true
                    }
                });
                if (t) _setPrototypeOf(e, t);
            }
            function _wrapNativeSuper(e) {
                var t = typeof Map === "function" ? new Map : undefined;
                _wrapNativeSuper = function _wrapNativeSuper(e) {
                    if (e === null || !_isNativeFunction(e)) return e;
                    if (typeof e !== "function") {
                        throw new TypeError("Super expression must either be null or a function");
                    }
                    if (typeof t !== "undefined") {
                        if (t.has(e)) return t.get(e);
                        t.set(e, Wrapper);
                    }
                    function Wrapper() {
                        return _construct(e, arguments, _getPrototypeOf(this).constructor);
                    }
                    Wrapper.prototype = Object.create(e.prototype, {
                        constructor: {
                            value: Wrapper,
                            enumerable: false,
                            writable: true,
                            configurable: true
                        }
                    });
                    return _setPrototypeOf(Wrapper, e);
                };
                return _wrapNativeSuper(e);
            }
            function isNativeReflectConstruct() {
                if (typeof Reflect === "undefined" || !Reflect.construct) return false;
                if (Reflect.construct.sham) return false;
                if (typeof Proxy === "function") return true;
                try {
                    Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
                    return true;
                } catch (e) {
                    return false;
                }
            }
            function _construct(e, t, r) {
                if (isNativeReflectConstruct()) {
                    _construct = Reflect.construct;
                } else {
                    _construct = function _construct(e, t, r) {
                        var n = [
                            null
                        ];
                        n.push.apply(n, t);
                        var o = Function.bind.apply(e, n);
                        var i = new o;
                        if (r) _setPrototypeOf(i, r.prototype);
                        return i;
                    };
                }
                return _construct.apply(null, arguments);
            }
            function _isNativeFunction(e) {
                return Function.toString.call(e).indexOf("[native code]") !== -1;
            }
            function _setPrototypeOf(e, t) {
                _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    e.__proto__ = t;
                    return e;
                };
                return _setPrototypeOf(e, t);
            }
            function _getPrototypeOf(e) {
                _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                };
                return _getPrototypeOf(e);
            }
            function _typeof(e) {
                if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                    _typeof = function _typeof(e) {
                        return typeof e;
                    };
                } else {
                    _typeof = function _typeof(e) {
                        return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    };
                }
                return _typeof(e);
            }
            var n = r(8177), o = n.inspect;
            var i = r(2023), a = i.codes.ERR_INVALID_ARG_TYPE;
            function endsWith(e, t, r) {
                if (r === undefined || r > e.length) {
                    r = e.length;
                }
                return e.substring(r - t.length, r) === t;
            }
            function repeat(e, t) {
                t = Math.floor(t);
                if (e.length == 0 || t == 0) return "";
                var r = e.length * t;
                t = Math.floor(Math.log(t) / Math.log(2));
                while(t){
                    e += e;
                    t--;
                }
                e += e.substring(0, r - e.length);
                return e;
            }
            var c = "";
            var u = "";
            var f = "";
            var s = "";
            var l = {
                deepStrictEqual: "Expected values to be strictly deep-equal:",
                strictEqual: "Expected values to be strictly equal:",
                strictEqualObject: 'Expected "actual" to be reference-equal to "expected":',
                deepEqual: "Expected values to be loosely deep-equal:",
                equal: "Expected values to be loosely equal:",
                notDeepStrictEqual: 'Expected "actual" not to be strictly deep-equal to:',
                notStrictEqual: 'Expected "actual" to be strictly unequal to:',
                notStrictEqualObject: 'Expected "actual" not to be reference-equal to "expected":',
                notDeepEqual: 'Expected "actual" not to be loosely deep-equal to:',
                notEqual: 'Expected "actual" to be loosely unequal to:',
                notIdentical: "Values identical but not reference-equal:"
            };
            var p = 10;
            function copyError(e) {
                var t = Object.keys(e);
                var r = Object.create(Object.getPrototypeOf(e));
                t.forEach(function(t) {
                    r[t] = e[t];
                });
                Object.defineProperty(r, "message", {
                    value: e.message
                });
                return r;
            }
            function inspectValue(e) {
                return o(e, {
                    compact: false,
                    customInspect: false,
                    depth: 1e3,
                    maxArrayLength: Infinity,
                    showHidden: false,
                    breakLength: Infinity,
                    showProxy: false,
                    sorted: true,
                    getters: true
                });
            }
            function createErrDiff(e, t, r) {
                var n = "";
                var o = "";
                var i = 0;
                var a = "";
                var y = false;
                var v = inspectValue(e);
                var g = v.split("\n");
                var b = inspectValue(t).split("\n");
                var d = 0;
                var h = "";
                if (r === "strictEqual" && _typeof(e) === "object" && _typeof(t) === "object" && e !== null && t !== null) {
                    r = "strictEqualObject";
                }
                if (g.length === 1 && b.length === 1 && g[0] !== b[0]) {
                    var m = g[0].length + b[0].length;
                    if (m <= p) {
                        if ((_typeof(e) !== "object" || e === null) && (_typeof(t) !== "object" || t === null) && (e !== 0 || t !== 0)) {
                            return "".concat(l[r], "\n\n") + "".concat(g[0], " !== ").concat(b[0], "\n");
                        }
                    } else if (r !== "strictEqualObject") {
                        var S = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stderr && __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stderr.isTTY ? __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stderr.columns : 80;
                        if (m < S) {
                            while(g[0][d] === b[0][d]){
                                d++;
                            }
                            if (d > 2) {
                                h = "\n  ".concat(repeat(" ", d), "^");
                                d = 0;
                            }
                        }
                    }
                }
                var w = g[g.length - 1];
                var E = b[b.length - 1];
                while(w === E){
                    if (d++ < 2) {
                        a = "\n  ".concat(w).concat(a);
                    } else {
                        n = w;
                    }
                    g.pop();
                    b.pop();
                    if (g.length === 0 || b.length === 0) break;
                    w = g[g.length - 1];
                    E = b[b.length - 1];
                }
                var O = Math.max(g.length, b.length);
                if (O === 0) {
                    var A = v.split("\n");
                    if (A.length > 30) {
                        A[26] = "".concat(c, "...").concat(s);
                        while(A.length > 27){
                            A.pop();
                        }
                    }
                    return "".concat(l.notIdentical, "\n\n").concat(A.join("\n"), "\n");
                }
                if (d > 3) {
                    a = "\n".concat(c, "...").concat(s).concat(a);
                    y = true;
                }
                if (n !== "") {
                    a = "\n  ".concat(n).concat(a);
                    n = "";
                }
                var j = 0;
                var P = l[r] + "\n".concat(u, "+ actual").concat(s, " ").concat(f, "- expected").concat(s);
                var _ = " ".concat(c, "...").concat(s, " Lines skipped");
                for(d = 0; d < O; d++){
                    var x = d - i;
                    if (g.length < d + 1) {
                        if (x > 1 && d > 2) {
                            if (x > 4) {
                                o += "\n".concat(c, "...").concat(s);
                                y = true;
                            } else if (x > 3) {
                                o += "\n  ".concat(b[d - 2]);
                                j++;
                            }
                            o += "\n  ".concat(b[d - 1]);
                            j++;
                        }
                        i = d;
                        n += "\n".concat(f, "-").concat(s, " ").concat(b[d]);
                        j++;
                    } else if (b.length < d + 1) {
                        if (x > 1 && d > 2) {
                            if (x > 4) {
                                o += "\n".concat(c, "...").concat(s);
                                y = true;
                            } else if (x > 3) {
                                o += "\n  ".concat(g[d - 2]);
                                j++;
                            }
                            o += "\n  ".concat(g[d - 1]);
                            j++;
                        }
                        i = d;
                        o += "\n".concat(u, "+").concat(s, " ").concat(g[d]);
                        j++;
                    } else {
                        var k = b[d];
                        var T = g[d];
                        var I = T !== k && (!endsWith(T, ",") || T.slice(0, -1) !== k);
                        if (I && endsWith(k, ",") && k.slice(0, -1) === T) {
                            I = false;
                            T += ",";
                        }
                        if (I) {
                            if (x > 1 && d > 2) {
                                if (x > 4) {
                                    o += "\n".concat(c, "...").concat(s);
                                    y = true;
                                } else if (x > 3) {
                                    o += "\n  ".concat(g[d - 2]);
                                    j++;
                                }
                                o += "\n  ".concat(g[d - 1]);
                                j++;
                            }
                            i = d;
                            o += "\n".concat(u, "+").concat(s, " ").concat(T);
                            n += "\n".concat(f, "-").concat(s, " ").concat(k);
                            j += 2;
                        } else {
                            o += n;
                            n = "";
                            if (x === 1 || d === 0) {
                                o += "\n  ".concat(T);
                                j++;
                            }
                        }
                    }
                    if (j > 20 && d < O - 2) {
                        return "".concat(P).concat(_, "\n").concat(o, "\n").concat(c, "...").concat(s).concat(n, "\n") + "".concat(c, "...").concat(s);
                    }
                }
                return "".concat(P).concat(y ? _ : "", "\n").concat(o).concat(n).concat(a).concat(h);
            }
            var y = function(e) {
                _inherits(AssertionError, e);
                function AssertionError(e) {
                    var t;
                    _classCallCheck(this, AssertionError);
                    if (_typeof(e) !== "object" || e === null) {
                        throw new a("options", "Object", e);
                    }
                    var r = e.message, n = e.operator, o = e.stackStartFn;
                    var i = e.actual, p = e.expected;
                    var y = Error.stackTraceLimit;
                    Error.stackTraceLimit = 0;
                    if (r != null) {
                        t = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError).call(this, String(r)));
                    } else {
                        if (__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stderr && __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stderr.isTTY) {
                            if (__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stderr && __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stderr.getColorDepth && __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stderr.getColorDepth() !== 1) {
                                c = "[34m";
                                u = "[32m";
                                s = "[39m";
                                f = "[31m";
                            } else {
                                c = "";
                                u = "";
                                s = "";
                                f = "";
                            }
                        }
                        if (_typeof(i) === "object" && i !== null && _typeof(p) === "object" && p !== null && "stack" in i && i instanceof Error && "stack" in p && p instanceof Error) {
                            i = copyError(i);
                            p = copyError(p);
                        }
                        if (n === "deepStrictEqual" || n === "strictEqual") {
                            t = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError).call(this, createErrDiff(i, p, n)));
                        } else if (n === "notDeepStrictEqual" || n === "notStrictEqual") {
                            var v = l[n];
                            var g = inspectValue(i).split("\n");
                            if (n === "notStrictEqual" && _typeof(i) === "object" && i !== null) {
                                v = l.notStrictEqualObject;
                            }
                            if (g.length > 30) {
                                g[26] = "".concat(c, "...").concat(s);
                                while(g.length > 27){
                                    g.pop();
                                }
                            }
                            if (g.length === 1) {
                                t = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError).call(this, "".concat(v, " ").concat(g[0])));
                            } else {
                                t = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError).call(this, "".concat(v, "\n\n").concat(g.join("\n"), "\n")));
                            }
                        } else {
                            var b = inspectValue(i);
                            var d = "";
                            var h = l[n];
                            if (n === "notDeepEqual" || n === "notEqual") {
                                b = "".concat(l[n], "\n\n").concat(b);
                                if (b.length > 1024) {
                                    b = "".concat(b.slice(0, 1021), "...");
                                }
                            } else {
                                d = "".concat(inspectValue(p));
                                if (b.length > 512) {
                                    b = "".concat(b.slice(0, 509), "...");
                                }
                                if (d.length > 512) {
                                    d = "".concat(d.slice(0, 509), "...");
                                }
                                if (n === "deepEqual" || n === "equal") {
                                    b = "".concat(h, "\n\n").concat(b, "\n\nshould equal\n\n");
                                } else {
                                    d = " ".concat(n, " ").concat(d);
                                }
                            }
                            t = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError).call(this, "".concat(b).concat(d)));
                        }
                    }
                    Error.stackTraceLimit = y;
                    t.generatedMessage = !r;
                    Object.defineProperty(_assertThisInitialized(t), "name", {
                        value: "AssertionError [ERR_ASSERTION]",
                        enumerable: false,
                        writable: true,
                        configurable: true
                    });
                    t.code = "ERR_ASSERTION";
                    t.actual = i;
                    t.expected = p;
                    t.operator = n;
                    if (Error.captureStackTrace) {
                        Error.captureStackTrace(_assertThisInitialized(t), o);
                    }
                    t.stack;
                    t.name = "AssertionError";
                    return _possibleConstructorReturn(t);
                }
                _createClass(AssertionError, [
                    {
                        key: "toString",
                        value: function toString() {
                            return "".concat(this.name, " [").concat(this.code, "]: ").concat(this.message);
                        }
                    },
                    {
                        key: o.custom,
                        value: function value(e, t) {
                            return o(this, _objectSpread({}, t, {
                                customInspect: false,
                                depth: 0
                            }));
                        }
                    }
                ]);
                return AssertionError;
            }(_wrapNativeSuper(Error));
            e.exports = y;
        },
        2023: function(e, t, r) {
            "use strict";
            function _typeof(e) {
                if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                    _typeof = function _typeof(e) {
                        return typeof e;
                    };
                } else {
                    _typeof = function _typeof(e) {
                        return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    };
                }
                return _typeof(e);
            }
            function _classCallCheck(e, t) {
                if (!(e instanceof t)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }
            function _possibleConstructorReturn(e, t) {
                if (t && (_typeof(t) === "object" || typeof t === "function")) {
                    return t;
                }
                return _assertThisInitialized(e);
            }
            function _assertThisInitialized(e) {
                if (e === void 0) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return e;
            }
            function _getPrototypeOf(e) {
                _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                };
                return _getPrototypeOf(e);
            }
            function _inherits(e, t) {
                if (typeof t !== "function" && t !== null) {
                    throw new TypeError("Super expression must either be null or a function");
                }
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: true,
                        configurable: true
                    }
                });
                if (t) _setPrototypeOf(e, t);
            }
            function _setPrototypeOf(e, t) {
                _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    e.__proto__ = t;
                    return e;
                };
                return _setPrototypeOf(e, t);
            }
            var n = {};
            var o;
            var i;
            function createErrorType(e, t, r) {
                if (!r) {
                    r = Error;
                }
                function getMessage(e, r, n) {
                    if (typeof t === "string") {
                        return t;
                    } else {
                        return t(e, r, n);
                    }
                }
                var o = function(t) {
                    _inherits(NodeError, t);
                    function NodeError(t, r, n) {
                        var o;
                        _classCallCheck(this, NodeError);
                        o = _possibleConstructorReturn(this, _getPrototypeOf(NodeError).call(this, getMessage(t, r, n)));
                        o.code = e;
                        return o;
                    }
                    return NodeError;
                }(r);
                n[e] = o;
            }
            function oneOf(e, t) {
                if (Array.isArray(e)) {
                    var r = e.length;
                    e = e.map(function(e) {
                        return String(e);
                    });
                    if (r > 2) {
                        return "one of ".concat(t, " ").concat(e.slice(0, r - 1).join(", "), ", or ") + e[r - 1];
                    } else if (r === 2) {
                        return "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1]);
                    } else {
                        return "of ".concat(t, " ").concat(e[0]);
                    }
                } else {
                    return "of ".concat(t, " ").concat(String(e));
                }
            }
            function startsWith(e, t, r) {
                return e.substr(!r || r < 0 ? 0 : +r, t.length) === t;
            }
            function endsWith(e, t, r) {
                if (r === undefined || r > e.length) {
                    r = e.length;
                }
                return e.substring(r - t.length, r) === t;
            }
            function includes(e, t, r) {
                if (typeof r !== "number") {
                    r = 0;
                }
                if (r + t.length > e.length) {
                    return false;
                } else {
                    return e.indexOf(t, r) !== -1;
                }
            }
            createErrorType("ERR_AMBIGUOUS_ARGUMENT", 'The "%s" argument is ambiguous. %s', TypeError);
            createErrorType("ERR_INVALID_ARG_TYPE", function(e, t, n) {
                if (o === undefined) o = r(2167);
                o(typeof e === "string", "'name' must be a string");
                var i;
                if (typeof t === "string" && startsWith(t, "not ")) {
                    i = "must not be";
                    t = t.replace(/^not /, "");
                } else {
                    i = "must be";
                }
                var a;
                if (endsWith(e, " argument")) {
                    a = "The ".concat(e, " ").concat(i, " ").concat(oneOf(t, "type"));
                } else {
                    var c = includes(e, ".") ? "property" : "argument";
                    a = 'The "'.concat(e, '" ').concat(c, " ").concat(i, " ").concat(oneOf(t, "type"));
                }
                a += ". Received type ".concat(_typeof(n));
                return a;
            }, TypeError);
            createErrorType("ERR_INVALID_ARG_VALUE", function(e, t) {
                var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "is invalid";
                if (i === undefined) i = r(8177);
                var o = i.inspect(t);
                if (o.length > 128) {
                    o = "".concat(o.slice(0, 128), "...");
                }
                return "The argument '".concat(e, "' ").concat(n, ". Received ").concat(o);
            }, TypeError, RangeError);
            createErrorType("ERR_INVALID_RETURN_VALUE", function(e, t, r) {
                var n;
                if (r && r.constructor && r.constructor.name) {
                    n = "instance of ".concat(r.constructor.name);
                } else {
                    n = "type ".concat(_typeof(r));
                }
                return "Expected ".concat(e, ' to be returned from the "').concat(t, '"') + " function but got ".concat(n, ".");
            }, TypeError);
            createErrorType("ERR_MISSING_ARGS", function() {
                for(var e = arguments.length, t = new Array(e), n = 0; n < e; n++){
                    t[n] = arguments[n];
                }
                if (o === undefined) o = r(2167);
                o(t.length > 0, "At least one arg needs to be specified");
                var i = "The ";
                var a = t.length;
                t = t.map(function(e) {
                    return '"'.concat(e, '"');
                });
                switch(a){
                    case 1:
                        i += "".concat(t[0], " argument");
                        break;
                    case 2:
                        i += "".concat(t[0], " and ").concat(t[1], " arguments");
                        break;
                    default:
                        i += t.slice(0, a - 1).join(", ");
                        i += ", and ".concat(t[a - 1], " arguments");
                        break;
                }
                return "".concat(i, " must be specified");
            }, TypeError);
            e.exports.codes = n;
        },
        176: function(e, t, r) {
            "use strict";
            function _slicedToArray(e, t) {
                return _arrayWithHoles(e) || _iterableToArrayLimit(e, t) || _nonIterableRest();
            }
            function _nonIterableRest() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
            function _iterableToArrayLimit(e, t) {
                var r = [];
                var n = true;
                var o = false;
                var i = undefined;
                try {
                    for(var a = e[Symbol.iterator](), c; !(n = (c = a.next()).done); n = true){
                        r.push(c.value);
                        if (t && r.length === t) break;
                    }
                } catch (e) {
                    o = true;
                    i = e;
                } finally{
                    try {
                        if (!n && a["return"] != null) a["return"]();
                    } finally{
                        if (o) throw i;
                    }
                }
                return r;
            }
            function _arrayWithHoles(e) {
                if (Array.isArray(e)) return e;
            }
            function _typeof(e) {
                if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                    _typeof = function _typeof(e) {
                        return typeof e;
                    };
                } else {
                    _typeof = function _typeof(e) {
                        return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    };
                }
                return _typeof(e);
            }
            var n = /a/g.flags !== undefined;
            var o = function arrayFromSet(e) {
                var t = [];
                e.forEach(function(e) {
                    return t.push(e);
                });
                return t;
            };
            var i = function arrayFromMap(e) {
                var t = [];
                e.forEach(function(e, r) {
                    return t.push([
                        r,
                        e
                    ]);
                });
                return t;
            };
            var a = Object.is ? Object.is : r(3256);
            var c = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols : function() {
                return [];
            };
            var u = Number.isNaN ? Number.isNaN : r(1992);
            function uncurryThis(e) {
                return e.call.bind(e);
            }
            var f = uncurryThis(Object.prototype.hasOwnProperty);
            var s = uncurryThis(Object.prototype.propertyIsEnumerable);
            var l = uncurryThis(Object.prototype.toString);
            var p = r(8177).types, y = p.isAnyArrayBuffer, v = p.isArrayBufferView, g = p.isDate, b = p.isMap, d = p.isRegExp, h = p.isSet, m = p.isNativeError, S = p.isBoxedPrimitive, w = p.isNumberObject, E = p.isStringObject, O = p.isBooleanObject, A = p.isBigIntObject, j = p.isSymbolObject, P = p.isFloat32Array, _ = p.isFloat64Array;
            function isNonIndex(e) {
                if (e.length === 0 || e.length > 10) return true;
                for(var t = 0; t < e.length; t++){
                    var r = e.charCodeAt(t);
                    if (r < 48 || r > 57) return true;
                }
                return e.length === 10 && e >= Math.pow(2, 32);
            }
            function getOwnNonIndexProperties(e) {
                return Object.keys(e).filter(isNonIndex).concat(c(e).filter(Object.prototype.propertyIsEnumerable.bind(e)));
            }
            /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */ function compare(e, t) {
                if (e === t) {
                    return 0;
                }
                var r = e.length;
                var n = t.length;
                for(var o = 0, i = Math.min(r, n); o < i; ++o){
                    if (e[o] !== t[o]) {
                        r = e[o];
                        n = t[o];
                        break;
                    }
                }
                if (r < n) {
                    return -1;
                }
                if (n < r) {
                    return 1;
                }
                return 0;
            }
            var x = undefined;
            var k = true;
            var T = false;
            var I = 0;
            var N = 1;
            var F = 2;
            var R = 3;
            function areSimilarRegExps(e, t) {
                return n ? e.source === t.source && e.flags === t.flags : RegExp.prototype.toString.call(e) === RegExp.prototype.toString.call(t);
            }
            function areSimilarFloatArrays(e, t) {
                if (e.byteLength !== t.byteLength) {
                    return false;
                }
                for(var r = 0; r < e.byteLength; r++){
                    if (e[r] !== t[r]) {
                        return false;
                    }
                }
                return true;
            }
            function areSimilarTypedArrays(e, t) {
                if (e.byteLength !== t.byteLength) {
                    return false;
                }
                return compare(new Uint8Array(e.buffer, e.byteOffset, e.byteLength), new Uint8Array(t.buffer, t.byteOffset, t.byteLength)) === 0;
            }
            function areEqualArrayBuffers(e, t) {
                return e.byteLength === t.byteLength && compare(new Uint8Array(e), new Uint8Array(t)) === 0;
            }
            function isEqualBoxedPrimitive(e, t) {
                if (w(e)) {
                    return w(t) && a(Number.prototype.valueOf.call(e), Number.prototype.valueOf.call(t));
                }
                if (E(e)) {
                    return E(t) && String.prototype.valueOf.call(e) === String.prototype.valueOf.call(t);
                }
                if (O(e)) {
                    return O(t) && Boolean.prototype.valueOf.call(e) === Boolean.prototype.valueOf.call(t);
                }
                if (A(e)) {
                    return A(t) && BigInt.prototype.valueOf.call(e) === BigInt.prototype.valueOf.call(t);
                }
                return j(t) && Symbol.prototype.valueOf.call(e) === Symbol.prototype.valueOf.call(t);
            }
            function innerDeepEqual(e, t, r, n) {
                if (e === t) {
                    if (e !== 0) return true;
                    return r ? a(e, t) : true;
                }
                if (r) {
                    if (_typeof(e) !== "object") {
                        return typeof e === "number" && u(e) && u(t);
                    }
                    if (_typeof(t) !== "object" || e === null || t === null) {
                        return false;
                    }
                    if (Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)) {
                        return false;
                    }
                } else {
                    if (e === null || _typeof(e) !== "object") {
                        if (t === null || _typeof(t) !== "object") {
                            return e == t;
                        }
                        return false;
                    }
                    if (t === null || _typeof(t) !== "object") {
                        return false;
                    }
                }
                var o = l(e);
                var i = l(t);
                if (o !== i) {
                    return false;
                }
                if (Array.isArray(e)) {
                    if (e.length !== t.length) {
                        return false;
                    }
                    var c = getOwnNonIndexProperties(e, x);
                    var f = getOwnNonIndexProperties(t, x);
                    if (c.length !== f.length) {
                        return false;
                    }
                    return keyCheck(e, t, r, n, N, c);
                }
                if (o === "[object Object]") {
                    if (!b(e) && b(t) || !h(e) && h(t)) {
                        return false;
                    }
                }
                if (g(e)) {
                    if (!g(t) || Date.prototype.getTime.call(e) !== Date.prototype.getTime.call(t)) {
                        return false;
                    }
                } else if (d(e)) {
                    if (!d(t) || !areSimilarRegExps(e, t)) {
                        return false;
                    }
                } else if (m(e) || e instanceof Error) {
                    if (e.message !== t.message || e.name !== t.name) {
                        return false;
                    }
                } else if (v(e)) {
                    if (!r && (P(e) || _(e))) {
                        if (!areSimilarFloatArrays(e, t)) {
                            return false;
                        }
                    } else if (!areSimilarTypedArrays(e, t)) {
                        return false;
                    }
                    var s = getOwnNonIndexProperties(e, x);
                    var p = getOwnNonIndexProperties(t, x);
                    if (s.length !== p.length) {
                        return false;
                    }
                    return keyCheck(e, t, r, n, I, s);
                } else if (h(e)) {
                    if (!h(t) || e.size !== t.size) {
                        return false;
                    }
                    return keyCheck(e, t, r, n, F);
                } else if (b(e)) {
                    if (!b(t) || e.size !== t.size) {
                        return false;
                    }
                    return keyCheck(e, t, r, n, R);
                } else if (y(e)) {
                    if (!areEqualArrayBuffers(e, t)) {
                        return false;
                    }
                } else if (S(e) && !isEqualBoxedPrimitive(e, t)) {
                    return false;
                }
                return keyCheck(e, t, r, n, I);
            }
            function getEnumerables(e, t) {
                return t.filter(function(t) {
                    return s(e, t);
                });
            }
            function keyCheck(e, t, r, n, o, i) {
                if (arguments.length === 5) {
                    i = Object.keys(e);
                    var a = Object.keys(t);
                    if (i.length !== a.length) {
                        return false;
                    }
                }
                var u = 0;
                for(; u < i.length; u++){
                    if (!f(t, i[u])) {
                        return false;
                    }
                }
                if (r && arguments.length === 5) {
                    var l = c(e);
                    if (l.length !== 0) {
                        var p = 0;
                        for(u = 0; u < l.length; u++){
                            var y = l[u];
                            if (s(e, y)) {
                                if (!s(t, y)) {
                                    return false;
                                }
                                i.push(y);
                                p++;
                            } else if (s(t, y)) {
                                return false;
                            }
                        }
                        var v = c(t);
                        if (l.length !== v.length && getEnumerables(t, v).length !== p) {
                            return false;
                        }
                    } else {
                        var g = c(t);
                        if (g.length !== 0 && getEnumerables(t, g).length !== 0) {
                            return false;
                        }
                    }
                }
                if (i.length === 0 && (o === I || o === N && e.length === 0 || e.size === 0)) {
                    return true;
                }
                if (n === undefined) {
                    n = {
                        val1: new Map,
                        val2: new Map,
                        position: 0
                    };
                } else {
                    var b = n.val1.get(e);
                    if (b !== undefined) {
                        var d = n.val2.get(t);
                        if (d !== undefined) {
                            return b === d;
                        }
                    }
                    n.position++;
                }
                n.val1.set(e, n.position);
                n.val2.set(t, n.position);
                var h = objEquiv(e, t, r, i, n, o);
                n.val1.delete(e);
                n.val2.delete(t);
                return h;
            }
            function setHasEqualElement(e, t, r, n) {
                var i = o(e);
                for(var a = 0; a < i.length; a++){
                    var c = i[a];
                    if (innerDeepEqual(t, c, r, n)) {
                        e.delete(c);
                        return true;
                    }
                }
                return false;
            }
            function findLooseMatchingPrimitives(e) {
                switch(_typeof(e)){
                    case "undefined":
                        return null;
                    case "object":
                        return undefined;
                    case "symbol":
                        return false;
                    case "string":
                        e = +e;
                    case "number":
                        if (u(e)) {
                            return false;
                        }
                }
                return true;
            }
            function setMightHaveLoosePrim(e, t, r) {
                var n = findLooseMatchingPrimitives(r);
                if (n != null) return n;
                return t.has(n) && !e.has(n);
            }
            function mapMightHaveLoosePrim(e, t, r, n, o) {
                var i = findLooseMatchingPrimitives(r);
                if (i != null) {
                    return i;
                }
                var a = t.get(i);
                if (a === undefined && !t.has(i) || !innerDeepEqual(n, a, false, o)) {
                    return false;
                }
                return !e.has(i) && innerDeepEqual(n, a, false, o);
            }
            function setEquiv(e, t, r, n) {
                var i = null;
                var a = o(e);
                for(var c = 0; c < a.length; c++){
                    var u = a[c];
                    if (_typeof(u) === "object" && u !== null) {
                        if (i === null) {
                            i = new Set;
                        }
                        i.add(u);
                    } else if (!t.has(u)) {
                        if (r) return false;
                        if (!setMightHaveLoosePrim(e, t, u)) {
                            return false;
                        }
                        if (i === null) {
                            i = new Set;
                        }
                        i.add(u);
                    }
                }
                if (i !== null) {
                    var f = o(t);
                    for(var s = 0; s < f.length; s++){
                        var l = f[s];
                        if (_typeof(l) === "object" && l !== null) {
                            if (!setHasEqualElement(i, l, r, n)) return false;
                        } else if (!r && !e.has(l) && !setHasEqualElement(i, l, r, n)) {
                            return false;
                        }
                    }
                    return i.size === 0;
                }
                return true;
            }
            function mapHasEqualEntry(e, t, r, n, i, a) {
                var c = o(e);
                for(var u = 0; u < c.length; u++){
                    var f = c[u];
                    if (innerDeepEqual(r, f, i, a) && innerDeepEqual(n, t.get(f), i, a)) {
                        e.delete(f);
                        return true;
                    }
                }
                return false;
            }
            function mapEquiv(e, t, r, n) {
                var o = null;
                var a = i(e);
                for(var c = 0; c < a.length; c++){
                    var u = _slicedToArray(a[c], 2), f = u[0], s = u[1];
                    if (_typeof(f) === "object" && f !== null) {
                        if (o === null) {
                            o = new Set;
                        }
                        o.add(f);
                    } else {
                        var l = t.get(f);
                        if (l === undefined && !t.has(f) || !innerDeepEqual(s, l, r, n)) {
                            if (r) return false;
                            if (!mapMightHaveLoosePrim(e, t, f, s, n)) return false;
                            if (o === null) {
                                o = new Set;
                            }
                            o.add(f);
                        }
                    }
                }
                if (o !== null) {
                    var p = i(t);
                    for(var y = 0; y < p.length; y++){
                        var v = _slicedToArray(p[y], 2), f = v[0], g = v[1];
                        if (_typeof(f) === "object" && f !== null) {
                            if (!mapHasEqualEntry(o, e, f, g, r, n)) return false;
                        } else if (!r && (!e.has(f) || !innerDeepEqual(e.get(f), g, false, n)) && !mapHasEqualEntry(o, e, f, g, false, n)) {
                            return false;
                        }
                    }
                    return o.size === 0;
                }
                return true;
            }
            function objEquiv(e, t, r, n, o, i) {
                var a = 0;
                if (i === F) {
                    if (!setEquiv(e, t, r, o)) {
                        return false;
                    }
                } else if (i === R) {
                    if (!mapEquiv(e, t, r, o)) {
                        return false;
                    }
                } else if (i === N) {
                    for(; a < e.length; a++){
                        if (f(e, a)) {
                            if (!f(t, a) || !innerDeepEqual(e[a], t[a], r, o)) {
                                return false;
                            }
                        } else if (f(t, a)) {
                            return false;
                        } else {
                            var c = Object.keys(e);
                            for(; a < c.length; a++){
                                var u = c[a];
                                if (!f(t, u) || !innerDeepEqual(e[u], t[u], r, o)) {
                                    return false;
                                }
                            }
                            if (c.length !== Object.keys(t).length) {
                                return false;
                            }
                            return true;
                        }
                    }
                }
                for(a = 0; a < n.length; a++){
                    var s = n[a];
                    if (!innerDeepEqual(e[s], t[s], r, o)) {
                        return false;
                    }
                }
                return true;
            }
            function isDeepEqual(e, t) {
                return innerDeepEqual(e, t, T);
            }
            function isDeepStrictEqual(e, t) {
                return innerDeepEqual(e, t, k);
            }
            e.exports = {
                isDeepEqual: isDeepEqual,
                isDeepStrictEqual: isDeepStrictEqual
            };
        },
        5555: function(e, t, r) {
            "use strict";
            var n = r(1212);
            var o = r(1909);
            var i = r(8737);
            var a = r(8772);
            e.exports = a || n.call(i, o);
        },
        9905: function(e, t, r) {
            "use strict";
            var n = r(1212);
            var o = r(1909);
            var i = r(5555);
            e.exports = function applyBind() {
                return i(n, o, arguments);
            };
        },
        1909: function(e) {
            "use strict";
            e.exports = Function.prototype.apply;
        },
        8737: function(e) {
            "use strict";
            e.exports = Function.prototype.call;
        },
        7152: function(e, t, r) {
            "use strict";
            var n = r(1212);
            var o = r(8202);
            var i = r(8737);
            var a = r(5555);
            e.exports = function callBindBasic(e) {
                if (e.length < 1 || typeof e[0] !== "function") {
                    throw new o("a function is required");
                }
                return a(n, i, e);
            };
        },
        8772: function(e) {
            "use strict";
            e.exports = typeof Reflect !== "undefined" && Reflect && Reflect.apply;
        },
        7139: function(e, t, r) {
            "use strict";
            var n = r(1212);
            var o = r(3197);
            var i = o("%Function.prototype.apply%");
            var a = o("%Function.prototype.call%");
            var c = o("%Reflect.apply%", true) || n.call(a, i);
            var u = o("%Object.getOwnPropertyDescriptor%", true);
            var f = o("%Object.defineProperty%", true);
            var s = o("%Math.max%");
            if (f) {
                try {
                    f({}, "a", {
                        value: 1
                    });
                } catch (e) {
                    f = null;
                }
            }
            e.exports = function callBind(e) {
                var t = c(n, a, arguments);
                if (u && f) {
                    var r = u(t, "length");
                    if (r.configurable) {
                        f(t, "length", {
                            value: 1 + s(0, e.length - (arguments.length - 1))
                        });
                    }
                }
                return t;
            };
            var l = function applyBind() {
                return c(n, i, arguments);
            };
            if (f) {
                f(e.exports, "apply", {
                    value: l
                });
            } else {
                e.exports.apply = l;
            }
        },
        516: function(e, t, r) {
            "use strict";
            var n = r(3197);
            var o = r(9042);
            var i = o(n("String.prototype.indexOf"));
            e.exports = function callBoundIntrinsic(e, t) {
                var r = n(e, !!t);
                if (typeof r === "function" && i(e, ".prototype.") > -1) {
                    return o(r);
                }
                return r;
            };
        },
        9042: function(e, t, r) {
            "use strict";
            var n = r(3143);
            var o = r(446);
            var i = r(7152);
            var a = r(9905);
            e.exports = function callBind(e) {
                var t = i(arguments);
                var r = e.length - (arguments.length - 1);
                return n(t, 1 + (r > 0 ? r : 0), true);
            };
            if (o) {
                o(e.exports, "apply", {
                    value: a
                });
            } else {
                e.exports.apply = a;
            }
        },
        819: function(e, t, r) {
            "use strict";
            var n = r(446);
            var o = r(5182);
            var i = r(8202);
            var a = r(3990);
            e.exports = function defineDataProperty(e, t, r) {
                if (!e || typeof e !== "object" && typeof e !== "function") {
                    throw new i("`obj` must be an object or a function`");
                }
                if (typeof t !== "string" && typeof t !== "symbol") {
                    throw new i("`property` must be a string or a symbol`");
                }
                if (arguments.length > 3 && typeof arguments[3] !== "boolean" && arguments[3] !== null) {
                    throw new i("`nonEnumerable`, if provided, must be a boolean or null");
                }
                if (arguments.length > 4 && typeof arguments[4] !== "boolean" && arguments[4] !== null) {
                    throw new i("`nonWritable`, if provided, must be a boolean or null");
                }
                if (arguments.length > 5 && typeof arguments[5] !== "boolean" && arguments[5] !== null) {
                    throw new i("`nonConfigurable`, if provided, must be a boolean or null");
                }
                if (arguments.length > 6 && typeof arguments[6] !== "boolean") {
                    throw new i("`loose`, if provided, must be a boolean");
                }
                var c = arguments.length > 3 ? arguments[3] : null;
                var u = arguments.length > 4 ? arguments[4] : null;
                var f = arguments.length > 5 ? arguments[5] : null;
                var s = arguments.length > 6 ? arguments[6] : false;
                var l = !!a && a(e, t);
                if (n) {
                    n(e, t, {
                        configurable: f === null && l ? l.configurable : !f,
                        enumerable: c === null && l ? l.enumerable : !c,
                        value: r,
                        writable: u === null && l ? l.writable : !u
                    });
                } else if (s || !c && !u && !f) {
                    e[t] = r;
                } else {
                    throw new o("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
                }
            };
        },
        3069: function(e, t, r) {
            "use strict";
            var n = r(4935);
            var o = typeof Symbol === "function" && typeof Symbol("foo") === "symbol";
            var i = Object.prototype.toString;
            var a = Array.prototype.concat;
            var c = Object.defineProperty;
            var isFunction = function(e) {
                return typeof e === "function" && i.call(e) === "[object Function]";
            };
            var arePropertyDescriptorsSupported = function() {
                var e = {};
                try {
                    c(e, "x", {
                        enumerable: false,
                        value: e
                    });
                    for(var t in e){
                        return false;
                    }
                    return e.x === e;
                } catch (e) {
                    return false;
                }
            };
            var u = c && arePropertyDescriptorsSupported();
            var defineProperty = function(e, t, r, n) {
                if (t in e && (!isFunction(n) || !n())) {
                    return;
                }
                if (u) {
                    c(e, t, {
                        configurable: true,
                        enumerable: false,
                        value: r,
                        writable: true
                    });
                } else {
                    e[t] = r;
                }
            };
            var defineProperties = function(e, t) {
                var r = arguments.length > 2 ? arguments[2] : {};
                var i = n(t);
                if (o) {
                    i = a.call(i, Object.getOwnPropertySymbols(t));
                }
                for(var c = 0; c < i.length; c += 1){
                    defineProperty(e, i[c], t[i[c]], r[i[c]]);
                }
            };
            defineProperties.supportsDescriptors = !!u;
            e.exports = defineProperties;
        },
        6211: function(e, t, r) {
            "use strict";
            var n = r(7152);
            var o = r(3990);
            var i;
            try {
                i = [].__proto__ === Array.prototype;
            } catch (e) {
                if (!e || typeof e !== "object" || !("code" in e) || e.code !== "ERR_PROTO_ACCESS") {
                    throw e;
                }
            }
            var a = !!i && o && o(Object.prototype, "__proto__");
            var c = Object;
            var u = c.getPrototypeOf;
            e.exports = a && typeof a.get === "function" ? n([
                a.get
            ]) : typeof u === "function" ? function getDunder(e) {
                return u(e == null ? e : c(e));
            } : false;
        },
        446: function(e) {
            "use strict";
            var t = Object.defineProperty || false;
            if (t) {
                try {
                    t({}, "a", {
                        value: 1
                    });
                } catch (e) {
                    t = false;
                }
            }
            e.exports = t;
        },
        7181: function(e) {
            "use strict";
            e.exports = EvalError;
        },
        1545: function(e) {
            "use strict";
            e.exports = Error;
        },
        22: function(e) {
            "use strict";
            e.exports = RangeError;
        },
        2803: function(e) {
            "use strict";
            e.exports = ReferenceError;
        },
        5182: function(e) {
            "use strict";
            e.exports = SyntaxError;
        },
        8202: function(e) {
            "use strict";
            e.exports = TypeError;
        },
        3284: function(e) {
            "use strict";
            e.exports = URIError;
        },
        2811: function(e) {
            "use strict";
            e.exports = Object;
        },
        7604: function(e) {
            "use strict";
            function assign(e, t) {
                if (e === undefined || e === null) {
                    throw new TypeError("Cannot convert first argument to object");
                }
                var r = Object(e);
                for(var n = 1; n < arguments.length; n++){
                    var o = arguments[n];
                    if (o === undefined || o === null) {
                        continue;
                    }
                    var i = Object.keys(Object(o));
                    for(var a = 0, c = i.length; a < c; a++){
                        var u = i[a];
                        var f = Object.getOwnPropertyDescriptor(o, u);
                        if (f !== undefined && f.enumerable) {
                            r[u] = o[u];
                        }
                    }
                }
                return r;
            }
            function polyfill() {
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
            }
            e.exports = {
                assign: assign,
                polyfill: polyfill
            };
        },
        6144: function(e) {
            var t = Object.prototype.hasOwnProperty;
            var r = Object.prototype.toString;
            e.exports = function forEach(e, n, o) {
                if (r.call(n) !== "[object Function]") {
                    throw new TypeError("iterator must be a function");
                }
                var i = e.length;
                if (i === +i) {
                    for(var a = 0; a < i; a++){
                        n.call(o, e[a], a, e);
                    }
                } else {
                    for(var c in e){
                        if (t.call(e, c)) {
                            n.call(o, e[c], c, e);
                        }
                    }
                }
            };
        },
        3136: function(e) {
            "use strict";
            var t = "Function.prototype.bind called on incompatible ";
            var r = Object.prototype.toString;
            var n = Math.max;
            var o = "[object Function]";
            var i = function concatty(e, t) {
                var r = [];
                for(var n = 0; n < e.length; n += 1){
                    r[n] = e[n];
                }
                for(var o = 0; o < t.length; o += 1){
                    r[o + e.length] = t[o];
                }
                return r;
            };
            var a = function slicy(e, t) {
                var r = [];
                for(var n = t || 0, o = 0; n < e.length; n += 1, o += 1){
                    r[o] = e[n];
                }
                return r;
            };
            var joiny = function(e, t) {
                var r = "";
                for(var n = 0; n < e.length; n += 1){
                    r += e[n];
                    if (n + 1 < e.length) {
                        r += t;
                    }
                }
                return r;
            };
            e.exports = function bind(e) {
                var c = this;
                if (typeof c !== "function" || r.apply(c) !== o) {
                    throw new TypeError(t + c);
                }
                var u = a(arguments, 1);
                var f;
                var binder = function() {
                    if (this instanceof f) {
                        var t = c.apply(this, i(u, arguments));
                        if (Object(t) === t) {
                            return t;
                        }
                        return this;
                    }
                    return c.apply(e, i(u, arguments));
                };
                var s = n(0, c.length - u.length);
                var l = [];
                for(var p = 0; p < s; p++){
                    l[p] = "$" + p;
                }
                f = Function("binder", "return function (" + joiny(l, ",") + "){ return binder.apply(this,arguments); }")(binder);
                if (c.prototype) {
                    var y = function Empty() {};
                    y.prototype = c.prototype;
                    f.prototype = new y;
                    y.prototype = null;
                }
                return f;
            };
        },
        1212: function(e, t, r) {
            "use strict";
            var n = r(3136);
            e.exports = Function.prototype.bind || n;
        },
        3197: function(e, t, r) {
            "use strict";
            var n;
            var o = r(2811);
            var i = r(1545);
            var a = r(7181);
            var c = r(22);
            var u = r(2803);
            var f = r(5182);
            var s = r(8202);
            var l = r(3284);
            var p = r(7173);
            var y = r(847);
            var v = r(2916);
            var g = r(9882);
            var b = r(3291);
            var d = r(553);
            var h = r(8629);
            var m = Function;
            var getEvalledConstructor = function(e) {
                try {
                    return m('"use strict"; return (' + e + ").constructor;")();
                } catch (e) {}
            };
            var S = r(3990);
            var w = r(446);
            var throwTypeError = function() {
                throw new s;
            };
            var E = S ? function() {
                try {
                    arguments.callee;
                    return throwTypeError;
                } catch (e) {
                    try {
                        return S(arguments, "callee").get;
                    } catch (e) {
                        return throwTypeError;
                    }
                }
            }() : throwTypeError;
            var O = r(4871)();
            var A = r(699);
            var j = r(7823);
            var P = r(7904);
            var _ = r(1909);
            var x = r(8737);
            var k = {};
            var T = typeof Uint8Array === "undefined" || !A ? n : A(Uint8Array);
            var I = {
                __proto__: null,
                "%AggregateError%": typeof AggregateError === "undefined" ? n : AggregateError,
                "%Array%": Array,
                "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? n : ArrayBuffer,
                "%ArrayIteratorPrototype%": O && A ? A([][Symbol.iterator]()) : n,
                "%AsyncFromSyncIteratorPrototype%": n,
                "%AsyncFunction%": k,
                "%AsyncGenerator%": k,
                "%AsyncGeneratorFunction%": k,
                "%AsyncIteratorPrototype%": k,
                "%Atomics%": typeof Atomics === "undefined" ? n : Atomics,
                "%BigInt%": typeof BigInt === "undefined" ? n : BigInt,
                "%BigInt64Array%": typeof BigInt64Array === "undefined" ? n : BigInt64Array,
                "%BigUint64Array%": typeof BigUint64Array === "undefined" ? n : BigUint64Array,
                "%Boolean%": Boolean,
                "%DataView%": typeof DataView === "undefined" ? n : DataView,
                "%Date%": Date,
                "%decodeURI%": decodeURI,
                "%decodeURIComponent%": decodeURIComponent,
                "%encodeURI%": encodeURI,
                "%encodeURIComponent%": encodeURIComponent,
                "%Error%": i,
                "%eval%": eval,
                "%EvalError%": a,
                "%Float16Array%": typeof Float16Array === "undefined" ? n : Float16Array,
                "%Float32Array%": typeof Float32Array === "undefined" ? n : Float32Array,
                "%Float64Array%": typeof Float64Array === "undefined" ? n : Float64Array,
                "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? n : FinalizationRegistry,
                "%Function%": m,
                "%GeneratorFunction%": k,
                "%Int8Array%": typeof Int8Array === "undefined" ? n : Int8Array,
                "%Int16Array%": typeof Int16Array === "undefined" ? n : Int16Array,
                "%Int32Array%": typeof Int32Array === "undefined" ? n : Int32Array,
                "%isFinite%": isFinite,
                "%isNaN%": isNaN,
                "%IteratorPrototype%": O && A ? A(A([][Symbol.iterator]())) : n,
                "%JSON%": typeof JSON === "object" ? JSON : n,
                "%Map%": typeof Map === "undefined" ? n : Map,
                "%MapIteratorPrototype%": typeof Map === "undefined" || !O || !A ? n : A((new Map)[Symbol.iterator]()),
                "%Math%": Math,
                "%Number%": Number,
                "%Object%": o,
                "%Object.getOwnPropertyDescriptor%": S,
                "%parseFloat%": parseFloat,
                "%parseInt%": parseInt,
                "%Promise%": typeof Promise === "undefined" ? n : Promise,
                "%Proxy%": typeof Proxy === "undefined" ? n : Proxy,
                "%RangeError%": c,
                "%ReferenceError%": u,
                "%Reflect%": typeof Reflect === "undefined" ? n : Reflect,
                "%RegExp%": RegExp,
                "%Set%": typeof Set === "undefined" ? n : Set,
                "%SetIteratorPrototype%": typeof Set === "undefined" || !O || !A ? n : A((new Set)[Symbol.iterator]()),
                "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? n : SharedArrayBuffer,
                "%String%": String,
                "%StringIteratorPrototype%": O && A ? A(""[Symbol.iterator]()) : n,
                "%Symbol%": O ? Symbol : n,
                "%SyntaxError%": f,
                "%ThrowTypeError%": E,
                "%TypedArray%": T,
                "%TypeError%": s,
                "%Uint8Array%": typeof Uint8Array === "undefined" ? n : Uint8Array,
                "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? n : Uint8ClampedArray,
                "%Uint16Array%": typeof Uint16Array === "undefined" ? n : Uint16Array,
                "%Uint32Array%": typeof Uint32Array === "undefined" ? n : Uint32Array,
                "%URIError%": l,
                "%WeakMap%": typeof WeakMap === "undefined" ? n : WeakMap,
                "%WeakRef%": typeof WeakRef === "undefined" ? n : WeakRef,
                "%WeakSet%": typeof WeakSet === "undefined" ? n : WeakSet,
                "%Function.prototype.call%": x,
                "%Function.prototype.apply%": _,
                "%Object.defineProperty%": w,
                "%Object.getPrototypeOf%": j,
                "%Math.abs%": p,
                "%Math.floor%": y,
                "%Math.max%": v,
                "%Math.min%": g,
                "%Math.pow%": b,
                "%Math.round%": d,
                "%Math.sign%": h,
                "%Reflect.getPrototypeOf%": P
            };
            if (A) {
                try {
                    null.error;
                } catch (e) {
                    var N = A(A(e));
                    I["%Error.prototype%"] = N;
                }
            }
            var F = function doEval(e) {
                var t;
                if (e === "%AsyncFunction%") {
                    t = getEvalledConstructor("async function () {}");
                } else if (e === "%GeneratorFunction%") {
                    t = getEvalledConstructor("function* () {}");
                } else if (e === "%AsyncGeneratorFunction%") {
                    t = getEvalledConstructor("async function* () {}");
                } else if (e === "%AsyncGenerator%") {
                    var r = doEval("%AsyncGeneratorFunction%");
                    if (r) {
                        t = r.prototype;
                    }
                } else if (e === "%AsyncIteratorPrototype%") {
                    var n = doEval("%AsyncGenerator%");
                    if (n && A) {
                        t = A(n.prototype);
                    }
                }
                I[e] = t;
                return t;
            };
            var R = {
                __proto__: null,
                "%ArrayBufferPrototype%": [
                    "ArrayBuffer",
                    "prototype"
                ],
                "%ArrayPrototype%": [
                    "Array",
                    "prototype"
                ],
                "%ArrayProto_entries%": [
                    "Array",
                    "prototype",
                    "entries"
                ],
                "%ArrayProto_forEach%": [
                    "Array",
                    "prototype",
                    "forEach"
                ],
                "%ArrayProto_keys%": [
                    "Array",
                    "prototype",
                    "keys"
                ],
                "%ArrayProto_values%": [
                    "Array",
                    "prototype",
                    "values"
                ],
                "%AsyncFunctionPrototype%": [
                    "AsyncFunction",
                    "prototype"
                ],
                "%AsyncGenerator%": [
                    "AsyncGeneratorFunction",
                    "prototype"
                ],
                "%AsyncGeneratorPrototype%": [
                    "AsyncGeneratorFunction",
                    "prototype",
                    "prototype"
                ],
                "%BooleanPrototype%": [
                    "Boolean",
                    "prototype"
                ],
                "%DataViewPrototype%": [
                    "DataView",
                    "prototype"
                ],
                "%DatePrototype%": [
                    "Date",
                    "prototype"
                ],
                "%ErrorPrototype%": [
                    "Error",
                    "prototype"
                ],
                "%EvalErrorPrototype%": [
                    "EvalError",
                    "prototype"
                ],
                "%Float32ArrayPrototype%": [
                    "Float32Array",
                    "prototype"
                ],
                "%Float64ArrayPrototype%": [
                    "Float64Array",
                    "prototype"
                ],
                "%FunctionPrototype%": [
                    "Function",
                    "prototype"
                ],
                "%Generator%": [
                    "GeneratorFunction",
                    "prototype"
                ],
                "%GeneratorPrototype%": [
                    "GeneratorFunction",
                    "prototype",
                    "prototype"
                ],
                "%Int8ArrayPrototype%": [
                    "Int8Array",
                    "prototype"
                ],
                "%Int16ArrayPrototype%": [
                    "Int16Array",
                    "prototype"
                ],
                "%Int32ArrayPrototype%": [
                    "Int32Array",
                    "prototype"
                ],
                "%JSONParse%": [
                    "JSON",
                    "parse"
                ],
                "%JSONStringify%": [
                    "JSON",
                    "stringify"
                ],
                "%MapPrototype%": [
                    "Map",
                    "prototype"
                ],
                "%NumberPrototype%": [
                    "Number",
                    "prototype"
                ],
                "%ObjectPrototype%": [
                    "Object",
                    "prototype"
                ],
                "%ObjProto_toString%": [
                    "Object",
                    "prototype",
                    "toString"
                ],
                "%ObjProto_valueOf%": [
                    "Object",
                    "prototype",
                    "valueOf"
                ],
                "%PromisePrototype%": [
                    "Promise",
                    "prototype"
                ],
                "%PromiseProto_then%": [
                    "Promise",
                    "prototype",
                    "then"
                ],
                "%Promise_all%": [
                    "Promise",
                    "all"
                ],
                "%Promise_reject%": [
                    "Promise",
                    "reject"
                ],
                "%Promise_resolve%": [
                    "Promise",
                    "resolve"
                ],
                "%RangeErrorPrototype%": [
                    "RangeError",
                    "prototype"
                ],
                "%ReferenceErrorPrototype%": [
                    "ReferenceError",
                    "prototype"
                ],
                "%RegExpPrototype%": [
                    "RegExp",
                    "prototype"
                ],
                "%SetPrototype%": [
                    "Set",
                    "prototype"
                ],
                "%SharedArrayBufferPrototype%": [
                    "SharedArrayBuffer",
                    "prototype"
                ],
                "%StringPrototype%": [
                    "String",
                    "prototype"
                ],
                "%SymbolPrototype%": [
                    "Symbol",
                    "prototype"
                ],
                "%SyntaxErrorPrototype%": [
                    "SyntaxError",
                    "prototype"
                ],
                "%TypedArrayPrototype%": [
                    "TypedArray",
                    "prototype"
                ],
                "%TypeErrorPrototype%": [
                    "TypeError",
                    "prototype"
                ],
                "%Uint8ArrayPrototype%": [
                    "Uint8Array",
                    "prototype"
                ],
                "%Uint8ClampedArrayPrototype%": [
                    "Uint8ClampedArray",
                    "prototype"
                ],
                "%Uint16ArrayPrototype%": [
                    "Uint16Array",
                    "prototype"
                ],
                "%Uint32ArrayPrototype%": [
                    "Uint32Array",
                    "prototype"
                ],
                "%URIErrorPrototype%": [
                    "URIError",
                    "prototype"
                ],
                "%WeakMapPrototype%": [
                    "WeakMap",
                    "prototype"
                ],
                "%WeakSetPrototype%": [
                    "WeakSet",
                    "prototype"
                ]
            };
            var B = r(1212);
            var q = r(3270);
            var D = B.call(x, Array.prototype.concat);
            var M = B.call(_, Array.prototype.splice);
            var U = B.call(x, String.prototype.replace);
            var C = B.call(x, String.prototype.slice);
            var W = B.call(x, RegExp.prototype.exec);
            var V = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
            var z = /\\(\\)?/g;
            var L = function stringToPath(e) {
                var t = C(e, 0, 1);
                var r = C(e, -1);
                if (t === "%" && r !== "%") {
                    throw new f("invalid intrinsic syntax, expected closing `%`");
                } else if (r === "%" && t !== "%") {
                    throw new f("invalid intrinsic syntax, expected opening `%`");
                }
                var n = [];
                U(e, V, function(e, t, r, o) {
                    n[n.length] = r ? U(o, z, "$1") : t || e;
                });
                return n;
            };
            var G = function getBaseIntrinsic(e, t) {
                var r = e;
                var n;
                if (q(R, r)) {
                    n = R[r];
                    r = "%" + n[0] + "%";
                }
                if (q(I, r)) {
                    var o = I[r];
                    if (o === k) {
                        o = F(r);
                    }
                    if (typeof o === "undefined" && !t) {
                        throw new s("intrinsic " + e + " exists, but is not available. Please file an issue!");
                    }
                    return {
                        alias: n,
                        name: r,
                        value: o
                    };
                }
                throw new f("intrinsic " + e + " does not exist!");
            };
            e.exports = function GetIntrinsic(e, t) {
                if (typeof e !== "string" || e.length === 0) {
                    throw new s("intrinsic name must be a non-empty string");
                }
                if (arguments.length > 1 && typeof t !== "boolean") {
                    throw new s('"allowMissing" argument must be a boolean');
                }
                if (W(/^%?[^%]*%?$/, e) === null) {
                    throw new f("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
                }
                var r = L(e);
                var o = r.length > 0 ? r[0] : "";
                var i = G("%" + o + "%", t);
                var a = i.name;
                var c = i.value;
                var u = false;
                var l = i.alias;
                if (l) {
                    o = l[0];
                    M(r, D([
                        0,
                        1
                    ], l));
                }
                for(var p = 1, y = true; p < r.length; p += 1){
                    var v = r[p];
                    var g = C(v, 0, 1);
                    var b = C(v, -1);
                    if ((g === '"' || g === "'" || g === "`" || b === '"' || b === "'" || b === "`") && g !== b) {
                        throw new f("property names with quotes must have matching quotes");
                    }
                    if (v === "constructor" || !y) {
                        u = true;
                    }
                    o += "." + v;
                    a = "%" + o + "%";
                    if (q(I, a)) {
                        c = I[a];
                    } else if (c != null) {
                        if (!(v in c)) {
                            if (!t) {
                                throw new s("base intrinsic for " + e + " exists, but the property is not available.");
                            }
                            return void n;
                        }
                        if (S && p + 1 >= r.length) {
                            var d = S(c, v);
                            y = !!d;
                            if (y && "get" in d && !("originalValue" in d.get)) {
                                c = d.get;
                            } else {
                                c = c[v];
                            }
                        } else {
                            y = q(c, v);
                            c = c[v];
                        }
                        if (y && !u) {
                            I[a] = c;
                        }
                    }
                }
                return c;
            };
        },
        7823: function(e, t, r) {
            "use strict";
            var n = r(2811);
            e.exports = n.getPrototypeOf || null;
        },
        7904: function(e) {
            "use strict";
            e.exports = typeof Reflect !== "undefined" && Reflect.getPrototypeOf || null;
        },
        699: function(e, t, r) {
            "use strict";
            var n = r(7904);
            var o = r(7823);
            var i = r(6211);
            e.exports = n ? function getProto(e) {
                return n(e);
            } : o ? function getProto(e) {
                if (!e || typeof e !== "object" && typeof e !== "function") {
                    throw new TypeError("getProto: not an object");
                }
                return o(e);
            } : i ? function getProto(e) {
                return i(e);
            } : null;
        },
        4596: function(e) {
            "use strict";
            e.exports = Object.getOwnPropertyDescriptor;
        },
        3990: function(e, t, r) {
            "use strict";
            var n = r(4596);
            if (n) {
                try {
                    n([], "length");
                } catch (e) {
                    n = null;
                }
            }
            e.exports = n;
        },
        7122: function(e, t, r) {
            "use strict";
            var n = r(446);
            var o = function hasPropertyDescriptors() {
                return !!n;
            };
            o.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
                if (!n) {
                    return null;
                }
                try {
                    return n([], "length", {
                        value: 1
                    }).length !== 1;
                } catch (e) {
                    return true;
                }
            };
            e.exports = o;
        },
        9942: function(e, t, r) {
            "use strict";
            var n = typeof Symbol !== "undefined" && Symbol;
            var o = r(3773);
            e.exports = function hasNativeSymbols() {
                if (typeof n !== "function") {
                    return false;
                }
                if (typeof Symbol !== "function") {
                    return false;
                }
                if (typeof n("foo") !== "symbol") {
                    return false;
                }
                if (typeof Symbol("bar") !== "symbol") {
                    return false;
                }
                return o();
            };
        },
        3773: function(e) {
            "use strict";
            e.exports = function hasSymbols() {
                if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
                    return false;
                }
                if (typeof Symbol.iterator === "symbol") {
                    return true;
                }
                var e = {};
                var t = Symbol("test");
                var r = Object(t);
                if (typeof t === "string") {
                    return false;
                }
                if (Object.prototype.toString.call(t) !== "[object Symbol]") {
                    return false;
                }
                if (Object.prototype.toString.call(r) !== "[object Symbol]") {
                    return false;
                }
                var n = 42;
                e[t] = n;
                for(t in e){
                    return false;
                }
                if (typeof Object.keys === "function" && Object.keys(e).length !== 0) {
                    return false;
                }
                if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(e).length !== 0) {
                    return false;
                }
                var o = Object.getOwnPropertySymbols(e);
                if (o.length !== 1 || o[0] !== t) {
                    return false;
                }
                if (!Object.prototype.propertyIsEnumerable.call(e, t)) {
                    return false;
                }
                if (typeof Object.getOwnPropertyDescriptor === "function") {
                    var i = Object.getOwnPropertyDescriptor(e, t);
                    if (i.value !== n || i.enumerable !== true) {
                        return false;
                    }
                }
                return true;
            };
        },
        4871: function(e, t, r) {
            "use strict";
            var n = typeof Symbol !== "undefined" && Symbol;
            var o = r(5960);
            e.exports = function hasNativeSymbols() {
                if (typeof n !== "function") {
                    return false;
                }
                if (typeof Symbol !== "function") {
                    return false;
                }
                if (typeof n("foo") !== "symbol") {
                    return false;
                }
                if (typeof Symbol("bar") !== "symbol") {
                    return false;
                }
                return o();
            };
        },
        5960: function(e) {
            "use strict";
            e.exports = function hasSymbols() {
                if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
                    return false;
                }
                if (typeof Symbol.iterator === "symbol") {
                    return true;
                }
                var e = {};
                var t = Symbol("test");
                var r = Object(t);
                if (typeof t === "string") {
                    return false;
                }
                if (Object.prototype.toString.call(t) !== "[object Symbol]") {
                    return false;
                }
                if (Object.prototype.toString.call(r) !== "[object Symbol]") {
                    return false;
                }
                var n = 42;
                e[t] = n;
                for(var o in e){
                    return false;
                }
                if (typeof Object.keys === "function" && Object.keys(e).length !== 0) {
                    return false;
                }
                if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(e).length !== 0) {
                    return false;
                }
                var i = Object.getOwnPropertySymbols(e);
                if (i.length !== 1 || i[0] !== t) {
                    return false;
                }
                if (!Object.prototype.propertyIsEnumerable.call(e, t)) {
                    return false;
                }
                if (typeof Object.getOwnPropertyDescriptor === "function") {
                    var a = Object.getOwnPropertyDescriptor(e, t);
                    if (a.value !== n || a.enumerable !== true) {
                        return false;
                    }
                }
                return true;
            };
        },
        3270: function(e, t, r) {
            "use strict";
            var n = Function.prototype.call;
            var o = Object.prototype.hasOwnProperty;
            var i = r(1212);
            e.exports = i.call(n, o);
        },
        3782: function(e) {
            if (typeof Object.create === "function") {
                e.exports = function inherits(e, t) {
                    if (t) {
                        e.super_ = t;
                        e.prototype = Object.create(t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: false,
                                writable: true,
                                configurable: true
                            }
                        });
                    }
                };
            } else {
                e.exports = function inherits(e, t) {
                    if (t) {
                        e.super_ = t;
                        var TempCtor = function() {};
                        TempCtor.prototype = t.prototype;
                        e.prototype = new TempCtor;
                        e.prototype.constructor = e;
                    }
                };
            }
        },
        5157: function(e) {
            "use strict";
            var t = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
            var r = Object.prototype.toString;
            var n = function isArguments(e) {
                if (t && e && typeof e === "object" && Symbol.toStringTag in e) {
                    return false;
                }
                return r.call(e) === "[object Arguments]";
            };
            var o = function isArguments(e) {
                if (n(e)) {
                    return true;
                }
                return e !== null && typeof e === "object" && typeof e.length === "number" && e.length >= 0 && r.call(e) !== "[object Array]" && r.call(e.callee) === "[object Function]";
            };
            var i = function() {
                return n(arguments);
            }();
            n.isLegacyArguments = o;
            e.exports = i ? n : o;
        },
        3391: function(e) {
            "use strict";
            var t = Object.prototype.toString;
            var r = Function.prototype.toString;
            var n = /^\s*(?:function)?\*/;
            var o = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
            var i = Object.getPrototypeOf;
            var getGeneratorFunc = function() {
                if (!o) {
                    return false;
                }
                try {
                    return Function("return function*() {}")();
                } catch (e) {}
            };
            var a = getGeneratorFunc();
            var c = a ? i(a) : {};
            e.exports = function isGeneratorFunction(e) {
                if (typeof e !== "function") {
                    return false;
                }
                if (n.test(r.call(e))) {
                    return true;
                }
                if (!o) {
                    var a = t.call(e);
                    return a === "[object GeneratorFunction]";
                }
                return i(e) === c;
            };
        },
        460: function(e) {
            "use strict";
            e.exports = function isNaN1(e) {
                return e !== e;
            };
        },
        1992: function(e, t, r) {
            "use strict";
            var n = r(7139);
            var o = r(3069);
            var i = r(460);
            var a = r(773);
            var c = r(4171);
            var u = n(a(), Number);
            o(u, {
                getPolyfill: a,
                implementation: i,
                shim: c
            });
            e.exports = u;
        },
        773: function(e, t, r) {
            "use strict";
            var n = r(460);
            e.exports = function getPolyfill() {
                if (Number.isNaN && Number.isNaN(NaN) && !Number.isNaN("a")) {
                    return Number.isNaN;
                }
                return n;
            };
        },
        4171: function(e, t, r) {
            "use strict";
            var n = r(3069);
            var o = r(773);
            e.exports = function shimNumberIsNaN() {
                var e = o();
                n(Number, {
                    isNaN: e
                }, {
                    isNaN: function testIsNaN() {
                        return Number.isNaN !== e;
                    }
                });
                return e;
            };
        },
        994: function(e, t, r) {
            "use strict";
            var n = r(6144);
            var o = r(1349);
            var i = r(516);
            var a = i("Object.prototype.toString");
            var c = r(9942)();
            var u = c && typeof Symbol.toStringTag === "symbol";
            var f = o();
            var s = i("Array.prototype.indexOf", true) || function indexOf(e, t) {
                for(var r = 0; r < e.length; r += 1){
                    if (e[r] === t) {
                        return r;
                    }
                }
                return -1;
            };
            var l = i("String.prototype.slice");
            var p = {};
            var y = r(2154);
            var v = Object.getPrototypeOf;
            if (u && y && v) {
                n(f, function(e) {
                    var t = new /*TURBOPACK member replacement*/ __turbopack_context__.g[e];
                    if (!(Symbol.toStringTag in t)) {
                        throw new EvalError("this engine has support for Symbol.toStringTag, but " + e + " does not have the property! Please report this.");
                    }
                    var r = v(t);
                    var n = y(r, Symbol.toStringTag);
                    if (!n) {
                        var o = v(r);
                        n = y(o, Symbol.toStringTag);
                    }
                    p[e] = n.get;
                });
            }
            var g = function tryAllTypedArrays(e) {
                var t = false;
                n(p, function(r, n) {
                    if (!t) {
                        try {
                            t = r.call(e) === n;
                        } catch (e) {}
                    }
                });
                return t;
            };
            e.exports = function isTypedArray(e) {
                if (!e || typeof e !== "object") {
                    return false;
                }
                if (!u) {
                    var t = l(a(e), 8, -1);
                    return s(f, t) > -1;
                }
                if (!y) {
                    return false;
                }
                return g(e);
            };
        },
        7173: function(e) {
            "use strict";
            e.exports = Math.abs;
        },
        847: function(e) {
            "use strict";
            e.exports = Math.floor;
        },
        219: function(e) {
            "use strict";
            e.exports = Number.isNaN || function isNaN1(e) {
                return e !== e;
            };
        },
        2916: function(e) {
            "use strict";
            e.exports = Math.max;
        },
        9882: function(e) {
            "use strict";
            e.exports = Math.min;
        },
        3291: function(e) {
            "use strict";
            e.exports = Math.pow;
        },
        553: function(e) {
            "use strict";
            e.exports = Math.round;
        },
        8629: function(e, t, r) {
            "use strict";
            var n = r(219);
            e.exports = function sign(e) {
                if (n(e) || e === 0) {
                    return e;
                }
                return e < 0 ? -1 : +1;
            };
        },
        3256: function(e) {
            "use strict";
            var numberIsNaN = function(e) {
                return e !== e;
            };
            e.exports = function is(e, t) {
                if (e === 0 && t === 0) {
                    return 1 / e === 1 / t;
                }
                if (e === t) {
                    return true;
                }
                if (numberIsNaN(e) && numberIsNaN(t)) {
                    return true;
                }
                return false;
            };
        },
        8579: function(e, t, r) {
            "use strict";
            var n;
            if (!Object.keys) {
                var o = Object.prototype.hasOwnProperty;
                var i = Object.prototype.toString;
                var a = r(8412);
                var c = Object.prototype.propertyIsEnumerable;
                var u = !c.call({
                    toString: null
                }, "toString");
                var f = c.call(function() {}, "prototype");
                var s = [
                    "toString",
                    "toLocaleString",
                    "valueOf",
                    "hasOwnProperty",
                    "isPrototypeOf",
                    "propertyIsEnumerable",
                    "constructor"
                ];
                var equalsConstructorPrototype = function(e) {
                    var t = e.constructor;
                    return t && t.prototype === e;
                };
                var l = {
                    $applicationCache: true,
                    $console: true,
                    $external: true,
                    $frame: true,
                    $frameElement: true,
                    $frames: true,
                    $innerHeight: true,
                    $innerWidth: true,
                    $onmozfullscreenchange: true,
                    $onmozfullscreenerror: true,
                    $outerHeight: true,
                    $outerWidth: true,
                    $pageXOffset: true,
                    $pageYOffset: true,
                    $parent: true,
                    $scrollLeft: true,
                    $scrollTop: true,
                    $scrollX: true,
                    $scrollY: true,
                    $self: true,
                    $webkitIndexedDB: true,
                    $webkitStorageInfo: true,
                    $window: true
                };
                var p = function() {
                    if (typeof window === "undefined") {
                        return false;
                    }
                    for(var e in window){
                        try {
                            if (!l["$" + e] && o.call(window, e) && window[e] !== null && typeof window[e] === "object") {
                                try {
                                    equalsConstructorPrototype(window[e]);
                                } catch (e) {
                                    return true;
                                }
                            }
                        } catch (e) {
                            return true;
                        }
                    }
                    return false;
                }();
                var equalsConstructorPrototypeIfNotBuggy = function(e) {
                    if (typeof window === "undefined" || !p) {
                        return equalsConstructorPrototype(e);
                    }
                    try {
                        return equalsConstructorPrototype(e);
                    } catch (e) {
                        return false;
                    }
                };
                n = function keys(e) {
                    var t = e !== null && typeof e === "object";
                    var r = i.call(e) === "[object Function]";
                    var n = a(e);
                    var c = t && i.call(e) === "[object String]";
                    var l = [];
                    if (!t && !r && !n) {
                        throw new TypeError("Object.keys called on a non-object");
                    }
                    var p = f && r;
                    if (c && e.length > 0 && !o.call(e, 0)) {
                        for(var y = 0; y < e.length; ++y){
                            l.push(String(y));
                        }
                    }
                    if (n && e.length > 0) {
                        for(var v = 0; v < e.length; ++v){
                            l.push(String(v));
                        }
                    } else {
                        for(var g in e){
                            if (!(p && g === "prototype") && o.call(e, g)) {
                                l.push(String(g));
                            }
                        }
                    }
                    if (u) {
                        var b = equalsConstructorPrototypeIfNotBuggy(e);
                        for(var d = 0; d < s.length; ++d){
                            if (!(b && s[d] === "constructor") && o.call(e, s[d])) {
                                l.push(s[d]);
                            }
                        }
                    }
                    return l;
                };
            }
            e.exports = n;
        },
        4935: function(e, t, r) {
            "use strict";
            var n = Array.prototype.slice;
            var o = r(8412);
            var i = Object.keys;
            var a = i ? function keys(e) {
                return i(e);
            } : r(8579);
            var c = Object.keys;
            a.shim = function shimObjectKeys() {
                if (Object.keys) {
                    var e = function() {
                        var e = Object.keys(arguments);
                        return e && e.length === arguments.length;
                    }(1, 2);
                    if (!e) {
                        Object.keys = function keys(e) {
                            if (o(e)) {
                                return c(n.call(e));
                            }
                            return c(e);
                        };
                    }
                } else {
                    Object.keys = a;
                }
                return Object.keys || a;
            };
            e.exports = a;
        },
        8412: function(e) {
            "use strict";
            var t = Object.prototype.toString;
            e.exports = function isArguments(e) {
                var r = t.call(e);
                var n = r === "[object Arguments]";
                if (!n) {
                    n = r !== "[object Array]" && e !== null && typeof e === "object" && typeof e.length === "number" && e.length >= 0 && t.call(e.callee) === "[object Function]";
                }
                return n;
            };
        },
        3143: function(e, t, r) {
            "use strict";
            var n = r(3197);
            var o = r(819);
            var i = r(7122)();
            var a = r(3990);
            var c = r(8202);
            var u = n("%Math.floor%");
            e.exports = function setFunctionLength(e, t) {
                if (typeof e !== "function") {
                    throw new c("`fn` is not a function");
                }
                if (typeof t !== "number" || t < 0 || t > 4294967295 || u(t) !== t) {
                    throw new c("`length` must be a positive 32-bit integer");
                }
                var r = arguments.length > 2 && !!arguments[2];
                var n = true;
                var f = true;
                if ("length" in e && a) {
                    var s = a(e, "length");
                    if (s && !s.configurable) {
                        n = false;
                    }
                    if (s && !s.writable) {
                        f = false;
                    }
                }
                if (n || f || !r) {
                    if (i) {
                        o(e, "length", t, true, true);
                    } else {
                        o(e, "length", t);
                    }
                }
                return e;
            };
        },
        2369: function(e) {
            e.exports = function isBuffer(e) {
                return e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"];
            };
        },
        5584: function(e, t, r) {
            "use strict";
            var n = r(5157);
            var o = r(3391);
            var i = r(1490);
            var a = r(994);
            function uncurryThis(e) {
                return e.call.bind(e);
            }
            var c = typeof BigInt !== "undefined";
            var u = typeof Symbol !== "undefined";
            var f = uncurryThis(Object.prototype.toString);
            var s = uncurryThis(Number.prototype.valueOf);
            var l = uncurryThis(String.prototype.valueOf);
            var p = uncurryThis(Boolean.prototype.valueOf);
            if (c) {
                var y = uncurryThis(BigInt.prototype.valueOf);
            }
            if (u) {
                var v = uncurryThis(Symbol.prototype.valueOf);
            }
            function checkBoxedPrimitive(e, t) {
                if (typeof e !== "object") {
                    return false;
                }
                try {
                    t(e);
                    return true;
                } catch (e) {
                    return false;
                }
            }
            t.isArgumentsObject = n;
            t.isGeneratorFunction = o;
            t.isTypedArray = a;
            function isPromise(e) {
                return typeof Promise !== "undefined" && e instanceof Promise || e !== null && typeof e === "object" && typeof e.then === "function" && typeof e.catch === "function";
            }
            t.isPromise = isPromise;
            function isArrayBufferView(e) {
                if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
                    return ArrayBuffer.isView(e);
                }
                return a(e) || isDataView(e);
            }
            t.isArrayBufferView = isArrayBufferView;
            function isUint8Array(e) {
                return i(e) === "Uint8Array";
            }
            t.isUint8Array = isUint8Array;
            function isUint8ClampedArray(e) {
                return i(e) === "Uint8ClampedArray";
            }
            t.isUint8ClampedArray = isUint8ClampedArray;
            function isUint16Array(e) {
                return i(e) === "Uint16Array";
            }
            t.isUint16Array = isUint16Array;
            function isUint32Array(e) {
                return i(e) === "Uint32Array";
            }
            t.isUint32Array = isUint32Array;
            function isInt8Array(e) {
                return i(e) === "Int8Array";
            }
            t.isInt8Array = isInt8Array;
            function isInt16Array(e) {
                return i(e) === "Int16Array";
            }
            t.isInt16Array = isInt16Array;
            function isInt32Array(e) {
                return i(e) === "Int32Array";
            }
            t.isInt32Array = isInt32Array;
            function isFloat32Array(e) {
                return i(e) === "Float32Array";
            }
            t.isFloat32Array = isFloat32Array;
            function isFloat64Array(e) {
                return i(e) === "Float64Array";
            }
            t.isFloat64Array = isFloat64Array;
            function isBigInt64Array(e) {
                return i(e) === "BigInt64Array";
            }
            t.isBigInt64Array = isBigInt64Array;
            function isBigUint64Array(e) {
                return i(e) === "BigUint64Array";
            }
            t.isBigUint64Array = isBigUint64Array;
            function isMapToString(e) {
                return f(e) === "[object Map]";
            }
            isMapToString.working = typeof Map !== "undefined" && isMapToString(new Map);
            function isMap(e) {
                if (typeof Map === "undefined") {
                    return false;
                }
                return isMapToString.working ? isMapToString(e) : e instanceof Map;
            }
            t.isMap = isMap;
            function isSetToString(e) {
                return f(e) === "[object Set]";
            }
            isSetToString.working = typeof Set !== "undefined" && isSetToString(new Set);
            function isSet(e) {
                if (typeof Set === "undefined") {
                    return false;
                }
                return isSetToString.working ? isSetToString(e) : e instanceof Set;
            }
            t.isSet = isSet;
            function isWeakMapToString(e) {
                return f(e) === "[object WeakMap]";
            }
            isWeakMapToString.working = typeof WeakMap !== "undefined" && isWeakMapToString(new WeakMap);
            function isWeakMap(e) {
                if (typeof WeakMap === "undefined") {
                    return false;
                }
                return isWeakMapToString.working ? isWeakMapToString(e) : e instanceof WeakMap;
            }
            t.isWeakMap = isWeakMap;
            function isWeakSetToString(e) {
                return f(e) === "[object WeakSet]";
            }
            isWeakSetToString.working = typeof WeakSet !== "undefined" && isWeakSetToString(new WeakSet);
            function isWeakSet(e) {
                return isWeakSetToString(e);
            }
            t.isWeakSet = isWeakSet;
            function isArrayBufferToString(e) {
                return f(e) === "[object ArrayBuffer]";
            }
            isArrayBufferToString.working = typeof ArrayBuffer !== "undefined" && isArrayBufferToString(new ArrayBuffer);
            function isArrayBuffer(e) {
                if (typeof ArrayBuffer === "undefined") {
                    return false;
                }
                return isArrayBufferToString.working ? isArrayBufferToString(e) : e instanceof ArrayBuffer;
            }
            t.isArrayBuffer = isArrayBuffer;
            function isDataViewToString(e) {
                return f(e) === "[object DataView]";
            }
            isDataViewToString.working = typeof ArrayBuffer !== "undefined" && typeof DataView !== "undefined" && isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1));
            function isDataView(e) {
                if (typeof DataView === "undefined") {
                    return false;
                }
                return isDataViewToString.working ? isDataViewToString(e) : e instanceof DataView;
            }
            t.isDataView = isDataView;
            var g = typeof SharedArrayBuffer !== "undefined" ? SharedArrayBuffer : undefined;
            function isSharedArrayBufferToString(e) {
                return f(e) === "[object SharedArrayBuffer]";
            }
            function isSharedArrayBuffer(e) {
                if (typeof g === "undefined") {
                    return false;
                }
                if (typeof isSharedArrayBufferToString.working === "undefined") {
                    isSharedArrayBufferToString.working = isSharedArrayBufferToString(new g);
                }
                return isSharedArrayBufferToString.working ? isSharedArrayBufferToString(e) : e instanceof g;
            }
            t.isSharedArrayBuffer = isSharedArrayBuffer;
            function isAsyncFunction(e) {
                return f(e) === "[object AsyncFunction]";
            }
            t.isAsyncFunction = isAsyncFunction;
            function isMapIterator(e) {
                return f(e) === "[object Map Iterator]";
            }
            t.isMapIterator = isMapIterator;
            function isSetIterator(e) {
                return f(e) === "[object Set Iterator]";
            }
            t.isSetIterator = isSetIterator;
            function isGeneratorObject(e) {
                return f(e) === "[object Generator]";
            }
            t.isGeneratorObject = isGeneratorObject;
            function isWebAssemblyCompiledModule(e) {
                return f(e) === "[object WebAssembly.Module]";
            }
            t.isWebAssemblyCompiledModule = isWebAssemblyCompiledModule;
            function isNumberObject(e) {
                return checkBoxedPrimitive(e, s);
            }
            t.isNumberObject = isNumberObject;
            function isStringObject(e) {
                return checkBoxedPrimitive(e, l);
            }
            t.isStringObject = isStringObject;
            function isBooleanObject(e) {
                return checkBoxedPrimitive(e, p);
            }
            t.isBooleanObject = isBooleanObject;
            function isBigIntObject(e) {
                return c && checkBoxedPrimitive(e, y);
            }
            t.isBigIntObject = isBigIntObject;
            function isSymbolObject(e) {
                return u && checkBoxedPrimitive(e, v);
            }
            t.isSymbolObject = isSymbolObject;
            function isBoxedPrimitive(e) {
                return isNumberObject(e) || isStringObject(e) || isBooleanObject(e) || isBigIntObject(e) || isSymbolObject(e);
            }
            t.isBoxedPrimitive = isBoxedPrimitive;
            function isAnyArrayBuffer(e) {
                return typeof Uint8Array !== "undefined" && (isArrayBuffer(e) || isSharedArrayBuffer(e));
            }
            t.isAnyArrayBuffer = isAnyArrayBuffer;
            [
                "isProxy",
                "isExternal",
                "isModuleNamespaceObject"
            ].forEach(function(e) {
                Object.defineProperty(t, e, {
                    enumerable: false,
                    value: function() {
                        throw new Error(e + " is not supported in userland");
                    }
                });
            });
        },
        8177: function(e, t, r) {
            var n = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(e) {
                var t = Object.keys(e);
                var r = {};
                for(var n = 0; n < t.length; n++){
                    r[t[n]] = Object.getOwnPropertyDescriptor(e, t[n]);
                }
                return r;
            };
            var o = /%[sdj%]/g;
            t.format = function(e) {
                if (!isString(e)) {
                    var t = [];
                    for(var r = 0; r < arguments.length; r++){
                        t.push(inspect(arguments[r]));
                    }
                    return t.join(" ");
                }
                var r = 1;
                var n = arguments;
                var i = n.length;
                var a = String(e).replace(o, function(e) {
                    if (e === "%%") return "%";
                    if (r >= i) return e;
                    switch(e){
                        case "%s":
                            return String(n[r++]);
                        case "%d":
                            return Number(n[r++]);
                        case "%j":
                            try {
                                return JSON.stringify(n[r++]);
                            } catch (e) {
                                return "[Circular]";
                            }
                        default:
                            return e;
                    }
                });
                for(var c = n[r]; r < i; c = n[++r]){
                    if (isNull(c) || !isObject(c)) {
                        a += " " + c;
                    } else {
                        a += " " + inspect(c);
                    }
                }
                return a;
            };
            t.deprecate = function(e, r) {
                if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].noDeprecation === true) {
                    return e;
                }
                if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] === "undefined") {
                    return function() {
                        return t.deprecate(e, r).apply(this, arguments);
                    };
                }
                var n = false;
                function deprecated() {
                    if (!n) {
                        if (__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].throwDeprecation) {
                            throw new Error(r);
                        } else if (__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].traceDeprecation) {
                            console.trace(r);
                        } else {
                            console.error(r);
                        }
                        n = true;
                    }
                    return e.apply(this, arguments);
                }
                return deprecated;
            };
            var i = {};
            var a = /^$/;
            if (__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NODE_DEBUG) {
                var c = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NODE_DEBUG;
                c = c.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase();
                a = new RegExp("^" + c + "$", "i");
            }
            t.debuglog = function(e) {
                e = e.toUpperCase();
                if (!i[e]) {
                    if (a.test(e)) {
                        var r = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].pid;
                        i[e] = function() {
                            var n = t.format.apply(t, arguments);
                            console.error("%s %d: %s", e, r, n);
                        };
                    } else {
                        i[e] = function() {};
                    }
                }
                return i[e];
            };
            function inspect(e, r) {
                var n = {
                    seen: [],
                    stylize: stylizeNoColor
                };
                if (arguments.length >= 3) n.depth = arguments[2];
                if (arguments.length >= 4) n.colors = arguments[3];
                if (isBoolean(r)) {
                    n.showHidden = r;
                } else if (r) {
                    t._extend(n, r);
                }
                if (isUndefined(n.showHidden)) n.showHidden = false;
                if (isUndefined(n.depth)) n.depth = 2;
                if (isUndefined(n.colors)) n.colors = false;
                if (isUndefined(n.customInspect)) n.customInspect = true;
                if (n.colors) n.stylize = stylizeWithColor;
                return formatValue(n, e, n.depth);
            }
            t.inspect = inspect;
            inspect.colors = {
                bold: [
                    1,
                    22
                ],
                italic: [
                    3,
                    23
                ],
                underline: [
                    4,
                    24
                ],
                inverse: [
                    7,
                    27
                ],
                white: [
                    37,
                    39
                ],
                grey: [
                    90,
                    39
                ],
                black: [
                    30,
                    39
                ],
                blue: [
                    34,
                    39
                ],
                cyan: [
                    36,
                    39
                ],
                green: [
                    32,
                    39
                ],
                magenta: [
                    35,
                    39
                ],
                red: [
                    31,
                    39
                ],
                yellow: [
                    33,
                    39
                ]
            };
            inspect.styles = {
                special: "cyan",
                number: "yellow",
                boolean: "yellow",
                undefined: "grey",
                null: "bold",
                string: "green",
                date: "magenta",
                regexp: "red"
            };
            function stylizeWithColor(e, t) {
                var r = inspect.styles[t];
                if (r) {
                    return "[" + inspect.colors[r][0] + "m" + e + "[" + inspect.colors[r][1] + "m";
                } else {
                    return e;
                }
            }
            function stylizeNoColor(e, t) {
                return e;
            }
            function arrayToHash(e) {
                var t = {};
                e.forEach(function(e, r) {
                    t[e] = true;
                });
                return t;
            }
            function formatValue(e, r, n) {
                if (e.customInspect && r && isFunction(r.inspect) && r.inspect !== t.inspect && !(r.constructor && r.constructor.prototype === r)) {
                    var o = r.inspect(n, e);
                    if (!isString(o)) {
                        o = formatValue(e, o, n);
                    }
                    return o;
                }
                var i = formatPrimitive(e, r);
                if (i) {
                    return i;
                }
                var a = Object.keys(r);
                var c = arrayToHash(a);
                if (e.showHidden) {
                    a = Object.getOwnPropertyNames(r);
                }
                if (isError(r) && (a.indexOf("message") >= 0 || a.indexOf("description") >= 0)) {
                    return formatError(r);
                }
                if (a.length === 0) {
                    if (isFunction(r)) {
                        var u = r.name ? ": " + r.name : "";
                        return e.stylize("[Function" + u + "]", "special");
                    }
                    if (isRegExp(r)) {
                        return e.stylize(RegExp.prototype.toString.call(r), "regexp");
                    }
                    if (isDate(r)) {
                        return e.stylize(Date.prototype.toString.call(r), "date");
                    }
                    if (isError(r)) {
                        return formatError(r);
                    }
                }
                var f = "", s = false, l = [
                    "{",
                    "}"
                ];
                if (isArray(r)) {
                    s = true;
                    l = [
                        "[",
                        "]"
                    ];
                }
                if (isFunction(r)) {
                    var p = r.name ? ": " + r.name : "";
                    f = " [Function" + p + "]";
                }
                if (isRegExp(r)) {
                    f = " " + RegExp.prototype.toString.call(r);
                }
                if (isDate(r)) {
                    f = " " + Date.prototype.toUTCString.call(r);
                }
                if (isError(r)) {
                    f = " " + formatError(r);
                }
                if (a.length === 0 && (!s || r.length == 0)) {
                    return l[0] + f + l[1];
                }
                if (n < 0) {
                    if (isRegExp(r)) {
                        return e.stylize(RegExp.prototype.toString.call(r), "regexp");
                    } else {
                        return e.stylize("[Object]", "special");
                    }
                }
                e.seen.push(r);
                var y;
                if (s) {
                    y = formatArray(e, r, n, c, a);
                } else {
                    y = a.map(function(t) {
                        return formatProperty(e, r, n, c, t, s);
                    });
                }
                e.seen.pop();
                return reduceToSingleString(y, f, l);
            }
            function formatPrimitive(e, t) {
                if (isUndefined(t)) return e.stylize("undefined", "undefined");
                if (isString(t)) {
                    var r = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                    return e.stylize(r, "string");
                }
                if (isNumber(t)) return e.stylize("" + t, "number");
                if (isBoolean(t)) return e.stylize("" + t, "boolean");
                if (isNull(t)) return e.stylize("null", "null");
            }
            function formatError(e) {
                return "[" + Error.prototype.toString.call(e) + "]";
            }
            function formatArray(e, t, r, n, o) {
                var i = [];
                for(var a = 0, c = t.length; a < c; ++a){
                    if (hasOwnProperty(t, String(a))) {
                        i.push(formatProperty(e, t, r, n, String(a), true));
                    } else {
                        i.push("");
                    }
                }
                o.forEach(function(o) {
                    if (!o.match(/^\d+$/)) {
                        i.push(formatProperty(e, t, r, n, o, true));
                    }
                });
                return i;
            }
            function formatProperty(e, t, r, n, o, i) {
                var a, c, u;
                u = Object.getOwnPropertyDescriptor(t, o) || {
                    value: t[o]
                };
                if (u.get) {
                    if (u.set) {
                        c = e.stylize("[Getter/Setter]", "special");
                    } else {
                        c = e.stylize("[Getter]", "special");
                    }
                } else {
                    if (u.set) {
                        c = e.stylize("[Setter]", "special");
                    }
                }
                if (!hasOwnProperty(n, o)) {
                    a = "[" + o + "]";
                }
                if (!c) {
                    if (e.seen.indexOf(u.value) < 0) {
                        if (isNull(r)) {
                            c = formatValue(e, u.value, null);
                        } else {
                            c = formatValue(e, u.value, r - 1);
                        }
                        if (c.indexOf("\n") > -1) {
                            if (i) {
                                c = c.split("\n").map(function(e) {
                                    return "  " + e;
                                }).join("\n").substr(2);
                            } else {
                                c = "\n" + c.split("\n").map(function(e) {
                                    return "   " + e;
                                }).join("\n");
                            }
                        }
                    } else {
                        c = e.stylize("[Circular]", "special");
                    }
                }
                if (isUndefined(a)) {
                    if (i && o.match(/^\d+$/)) {
                        return c;
                    }
                    a = JSON.stringify("" + o);
                    if (a.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
                        a = a.substr(1, a.length - 2);
                        a = e.stylize(a, "name");
                    } else {
                        a = a.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
                        a = e.stylize(a, "string");
                    }
                }
                return a + ": " + c;
            }
            function reduceToSingleString(e, t, r) {
                var n = 0;
                var o = e.reduce(function(e, t) {
                    n++;
                    if (t.indexOf("\n") >= 0) n++;
                    return e + t.replace(/\u001b\[\d\d?m/g, "").length + 1;
                }, 0);
                if (o > 60) {
                    return r[0] + (t === "" ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + r[1];
                }
                return r[0] + t + " " + e.join(", ") + " " + r[1];
            }
            t.types = r(5584);
            function isArray(e) {
                return Array.isArray(e);
            }
            t.isArray = isArray;
            function isBoolean(e) {
                return typeof e === "boolean";
            }
            t.isBoolean = isBoolean;
            function isNull(e) {
                return e === null;
            }
            t.isNull = isNull;
            function isNullOrUndefined(e) {
                return e == null;
            }
            t.isNullOrUndefined = isNullOrUndefined;
            function isNumber(e) {
                return typeof e === "number";
            }
            t.isNumber = isNumber;
            function isString(e) {
                return typeof e === "string";
            }
            t.isString = isString;
            function isSymbol(e) {
                return typeof e === "symbol";
            }
            t.isSymbol = isSymbol;
            function isUndefined(e) {
                return e === void 0;
            }
            t.isUndefined = isUndefined;
            function isRegExp(e) {
                return isObject(e) && objectToString(e) === "[object RegExp]";
            }
            t.isRegExp = isRegExp;
            t.types.isRegExp = isRegExp;
            function isObject(e) {
                return typeof e === "object" && e !== null;
            }
            t.isObject = isObject;
            function isDate(e) {
                return isObject(e) && objectToString(e) === "[object Date]";
            }
            t.isDate = isDate;
            t.types.isDate = isDate;
            function isError(e) {
                return isObject(e) && (objectToString(e) === "[object Error]" || e instanceof Error);
            }
            t.isError = isError;
            t.types.isNativeError = isError;
            function isFunction(e) {
                return typeof e === "function";
            }
            t.isFunction = isFunction;
            function isPrimitive(e) {
                return e === null || typeof e === "boolean" || typeof e === "number" || typeof e === "string" || typeof e === "symbol" || typeof e === "undefined";
            }
            t.isPrimitive = isPrimitive;
            t.isBuffer = r(2369);
            function objectToString(e) {
                return Object.prototype.toString.call(e);
            }
            function pad(e) {
                return e < 10 ? "0" + e.toString(10) : e.toString(10);
            }
            var u = [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec"
            ];
            function timestamp() {
                var e = new Date;
                var t = [
                    pad(e.getHours()),
                    pad(e.getMinutes()),
                    pad(e.getSeconds())
                ].join(":");
                return [
                    e.getDate(),
                    u[e.getMonth()],
                    t
                ].join(" ");
            }
            t.log = function() {
                console.log("%s - %s", timestamp(), t.format.apply(t, arguments));
            };
            t.inherits = r(3782);
            t._extend = function(e, t) {
                if (!t || !isObject(t)) return e;
                var r = Object.keys(t);
                var n = r.length;
                while(n--){
                    e[r[n]] = t[r[n]];
                }
                return e;
            };
            function hasOwnProperty(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }
            var f = typeof Symbol !== "undefined" ? Symbol("util.promisify.custom") : undefined;
            t.promisify = function promisify(e) {
                if (typeof e !== "function") throw new TypeError('The "original" argument must be of type Function');
                if (f && e[f]) {
                    var t = e[f];
                    if (typeof t !== "function") {
                        throw new TypeError('The "util.promisify.custom" argument must be of type Function');
                    }
                    Object.defineProperty(t, f, {
                        value: t,
                        enumerable: false,
                        writable: false,
                        configurable: true
                    });
                    return t;
                }
                function t() {
                    var t, r;
                    var n = new Promise(function(e, n) {
                        t = e;
                        r = n;
                    });
                    var o = [];
                    for(var i = 0; i < arguments.length; i++){
                        o.push(arguments[i]);
                    }
                    o.push(function(e, n) {
                        if (e) {
                            r(e);
                        } else {
                            t(n);
                        }
                    });
                    try {
                        e.apply(this, o);
                    } catch (e) {
                        r(e);
                    }
                    return n;
                }
                Object.setPrototypeOf(t, Object.getPrototypeOf(e));
                if (f) Object.defineProperty(t, f, {
                    value: t,
                    enumerable: false,
                    writable: false,
                    configurable: true
                });
                return Object.defineProperties(t, n(e));
            };
            t.promisify.custom = f;
            function callbackifyOnRejected(e, t) {
                if (!e) {
                    var r = new Error("Promise was rejected with a falsy value");
                    r.reason = e;
                    e = r;
                }
                return t(e);
            }
            function callbackify(e) {
                if (typeof e !== "function") {
                    throw new TypeError('The "original" argument must be of type Function');
                }
                function callbackified() {
                    var t = [];
                    for(var r = 0; r < arguments.length; r++){
                        t.push(arguments[r]);
                    }
                    var n = t.pop();
                    if (typeof n !== "function") {
                        throw new TypeError("The last argument must be of type Function");
                    }
                    var o = this;
                    var cb = function() {
                        return n.apply(o, arguments);
                    };
                    e.apply(this, t).then(function(e) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(cb.bind(null, null, e));
                    }, function(e) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(callbackifyOnRejected.bind(null, e, cb));
                    });
                }
                Object.setPrototypeOf(callbackified, Object.getPrototypeOf(e));
                Object.defineProperties(callbackified, n(e));
                return callbackified;
            }
            t.callbackify = callbackify;
        },
        1490: function(e, t, r) {
            "use strict";
            var n = r(6144);
            var o = r(1349);
            var i = r(516);
            var a = i("Object.prototype.toString");
            var c = r(9942)();
            var u = c && typeof Symbol.toStringTag === "symbol";
            var f = o();
            var s = i("String.prototype.slice");
            var l = {};
            var p = r(2154);
            var y = Object.getPrototypeOf;
            if (u && p && y) {
                n(f, function(e) {
                    if (typeof /*TURBOPACK member replacement*/ __turbopack_context__.g[e] === "function") {
                        var t = new /*TURBOPACK member replacement*/ __turbopack_context__.g[e];
                        if (!(Symbol.toStringTag in t)) {
                            throw new EvalError("this engine has support for Symbol.toStringTag, but " + e + " does not have the property! Please report this.");
                        }
                        var r = y(t);
                        var n = p(r, Symbol.toStringTag);
                        if (!n) {
                            var o = y(r);
                            n = p(o, Symbol.toStringTag);
                        }
                        l[e] = n.get;
                    }
                });
            }
            var v = function tryAllTypedArrays(e) {
                var t = false;
                n(l, function(r, n) {
                    if (!t) {
                        try {
                            var o = r.call(e);
                            if (o === n) {
                                t = o;
                            }
                        } catch (e) {}
                    }
                });
                return t;
            };
            var g = r(994);
            e.exports = function whichTypedArray(e) {
                if (!g(e)) {
                    return false;
                }
                if (!u) {
                    return s(a(e), 8, -1);
                }
                return v(e);
            };
        },
        1349: function(e, t, r) {
            "use strict";
            var n = r(8992);
            e.exports = function availableTypedArrays() {
                return n([
                    "BigInt64Array",
                    "BigUint64Array",
                    "Float32Array",
                    "Float64Array",
                    "Int16Array",
                    "Int32Array",
                    "Int8Array",
                    "Uint16Array",
                    "Uint32Array",
                    "Uint8Array",
                    "Uint8ClampedArray"
                ], function(e) {
                    return typeof /*TURBOPACK member replacement*/ __turbopack_context__.g[e] === "function";
                });
            };
        },
        2154: function(e, t, r) {
            "use strict";
            e.exports = r(3990);
        }
    };
    var t = {};
    function __nccwpck_require__(r) {
        var n = t[r];
        if (n !== undefined) {
            return n.exports;
        }
        var o = t[r] = {
            exports: {}
        };
        var i = true;
        try {
            e[r](o, o.exports, __nccwpck_require__);
            i = false;
        } finally{
            if (i) delete t[r];
        }
        return o.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/rayls-shield-landing-page/node_modules/next/dist/compiled/assert") + "/";
    var r = __nccwpck_require__(2167);
    module.exports = r;
})();
}),
]);

//# sourceMappingURL=5df0c_next_a3a88d31._.js.map