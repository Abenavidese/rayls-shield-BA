module.exports = [
"[project]/rayls-shield-landing-page/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports._ = _interop_require_default;
}),
"[project]/rayls-shield-landing-page/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/compose-refs/src/composeRefs.tsx
__turbopack_context__.s([
    "composeRefs",
    ()=>composeRefs,
    "useComposedRefs",
    ()=>useComposedRefs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function setRef(ref, value) {
    if (typeof ref === "function") {
        return ref(value);
    } else if (ref !== null && ref !== void 0) {
        ref.current = value;
    }
}
function composeRefs(...refs) {
    return (node)=>{
        let hasCleanup = false;
        const cleanups = refs.map((ref)=>{
            const cleanup = setRef(ref, node);
            if (!hasCleanup && typeof cleanup == "function") {
                hasCleanup = true;
            }
            return cleanup;
        });
        if (hasCleanup) {
            return ()=>{
                for(let i = 0; i < cleanups.length; i++){
                    const cleanup = cleanups[i];
                    if (typeof cleanup == "function") {
                        cleanup();
                    } else {
                        setRef(refs[i], null);
                    }
                }
            };
        }
    };
}
function useComposedRefs(...refs) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](composeRefs(...refs), refs);
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/rayls-shield-landing-page/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/slot/src/Slot.tsx
__turbopack_context__.s([
    "Root",
    ()=>Root,
    "Slot",
    ()=>Slot,
    "Slottable",
    ()=>Slottable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
var Slot = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { children, ...slotProps } = props;
    const childrenArray = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].toArray(children);
    const slottable = childrenArray.find(isSlottable);
    if (slottable) {
        const newElement = slottable.props.children;
        const newChildren = childrenArray.map((child)=>{
            if (child === slottable) {
                if (__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].count(newElement) > 1) return __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].only(null);
                return __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"](newElement) ? newElement.props.children : null;
            } else {
                return child;
            }
        });
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
            ...slotProps,
            ref: forwardedRef,
            children: __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"](newElement) ? __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"](newElement, void 0, newChildren) : null
        });
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
        ...slotProps,
        ref: forwardedRef,
        children
    });
});
Slot.displayName = "Slot";
var SlotClone = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { children, ...slotProps } = props;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"](children)) {
        const childrenRef = getElementRef(children);
        return __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"](children, {
            ...mergeProps(slotProps, children.props),
            // @ts-ignore
            ref: forwardedRef ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeRefs"])(forwardedRef, childrenRef) : childrenRef
        });
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].count(children) > 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].only(null) : null;
});
SlotClone.displayName = "SlotClone";
var Slottable = ({ children })=>{
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children
    });
};
function isSlottable(child) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"](child) && child.type === Slottable;
}
function mergeProps(slotProps, childProps) {
    const overrideProps = {
        ...childProps
    };
    for(const propName in childProps){
        const slotPropValue = slotProps[propName];
        const childPropValue = childProps[propName];
        const isHandler = /^on[A-Z]/.test(propName);
        if (isHandler) {
            if (slotPropValue && childPropValue) {
                overrideProps[propName] = (...args)=>{
                    childPropValue(...args);
                    slotPropValue(...args);
                };
            } else if (slotPropValue) {
                overrideProps[propName] = slotPropValue;
            }
        } else if (propName === "style") {
            overrideProps[propName] = {
                ...slotPropValue,
                ...childPropValue
            };
        } else if (propName === "className") {
            overrideProps[propName] = [
                slotPropValue,
                childPropValue
            ].filter(Boolean).join(" ");
        }
    }
    return {
        ...slotProps,
        ...overrideProps
    };
}
function getElementRef(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.ref;
    }
    getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.props.ref;
    }
    return element.props.ref || element.ref;
}
var Root = Slot;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/rayls-shield-landing-page/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/primitive/src/Primitive.tsx
__turbopack_context__.s([
    "Primitive",
    ()=>Primitive,
    "Root",
    ()=>Root,
    "dispatchDiscreteCustomEvent",
    ()=>dispatchDiscreteCustomEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
;
var NODES = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul"
];
var Primitive = NODES.reduce((primitive, node)=>{
    const Node = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
        const { asChild, ...primitiveProps } = props;
        const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : node;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Comp, {
            ...primitiveProps,
            ref: forwardedRef
        });
    });
    Node.displayName = `Primitive.${node}`;
    return {
        ...primitive,
        [node]: Node
    };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
    if (target) __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["flushSync"](()=>target.dispatchEvent(event));
}
var Root = Primitive;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/rayls-shield-landing-page/node_modules/@radix-ui/react-label/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label,
    "Root",
    ()=>Root
]);
// packages/react/label/src/Label.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
;
;
;
var NAME = "Label";
var Label = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].label, {
        ...props,
        ref: forwardedRef,
        onMouseDown: (event)=>{
            const target = event.target;
            if (target.closest("button, input, select, textarea")) return;
            props.onMouseDown?.(event);
            if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
        }
    });
});
Label.displayName = NAME;
var Root = Label;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/rayls-shield-landing-page/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clsx",
    ()=>clsx,
    "default",
    ()=>__TURBOPACK__default__export__
]);
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
        var o = e.length;
        for(t = 0; t < o; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for(f in e)e[f] && (n && (n += " "), n += f);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = "", o = arguments.length; f < o; f++)(e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
const __TURBOPACK__default__export__ = clsx;
}),
"[project]/rayls-shield-landing-page/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Copyright 2022 Joe Bell. All rights reserved.
 *
 * This file is licensed to you under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR REPRESENTATIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */ __turbopack_context__.s([
    "cva",
    ()=>cva,
    "cx",
    ()=>cx
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
;
const falsyToString = (value)=>typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
const cx = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"];
const cva = (base, config)=>(props)=>{
        var _config_compoundVariants;
        if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
        const { variants, defaultVariants } = config;
        const getVariantClassNames = Object.keys(variants).map((variant)=>{
            const variantProp = props === null || props === void 0 ? void 0 : props[variant];
            const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
            if (variantProp === null) return null;
            const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
            return variants[variant][variantKey];
        });
        const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param)=>{
            let [key, value] = param;
            if (value === undefined) {
                return acc;
            }
            acc[key] = value;
            return acc;
        }, {});
        const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param)=>{
            let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
            return Object.entries(compoundVariantOptions).every((param)=>{
                let [key, value] = param;
                return Array.isArray(value) ? value.includes({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                }[key]) : ({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                })[key] === value;
            }) ? [
                ...acc,
                cvClass,
                cvClassName
            ] : acc;
        }, []);
        return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    };
}),
"[project]/rayls-shield-landing-page/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createTailwindMerge",
    ()=>createTailwindMerge,
    "extendTailwindMerge",
    ()=>extendTailwindMerge,
    "fromTheme",
    ()=>fromTheme,
    "getDefaultConfig",
    ()=>getDefaultConfig,
    "mergeConfigs",
    ()=>mergeConfigs,
    "twJoin",
    ()=>twJoin,
    "twMerge",
    ()=>twMerge,
    "validators",
    ()=>validators
]);
const CLASS_PART_SEPARATOR = '-';
const createClassGroupUtils = (config)=>{
    const classMap = createClassMap(config);
    const { conflictingClassGroups, conflictingClassGroupModifiers } = config;
    const getClassGroupId = (className)=>{
        const classParts = className.split(CLASS_PART_SEPARATOR);
        // Classes like `-inset-1` produce an empty string as first classPart. We assume that classes for negative values are used correctly and remove it from classParts.
        if (classParts[0] === '' && classParts.length !== 1) {
            classParts.shift();
        }
        return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
    };
    const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier)=>{
        const conflicts = conflictingClassGroups[classGroupId] || [];
        if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
            return [
                ...conflicts,
                ...conflictingClassGroupModifiers[classGroupId]
            ];
        }
        return conflicts;
    };
    return {
        getClassGroupId,
        getConflictingClassGroupIds
    };
};
const getGroupRecursive = (classParts, classPartObject)=>{
    if (classParts.length === 0) {
        return classPartObject.classGroupId;
    }
    const currentClassPart = classParts[0];
    const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
    const classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : undefined;
    if (classGroupFromNextClassPart) {
        return classGroupFromNextClassPart;
    }
    if (classPartObject.validators.length === 0) {
        return undefined;
    }
    const classRest = classParts.join(CLASS_PART_SEPARATOR);
    return classPartObject.validators.find(({ validator })=>validator(classRest))?.classGroupId;
};
const arbitraryPropertyRegex = /^\[(.+)\]$/;
const getGroupIdForArbitraryProperty = (className)=>{
    if (arbitraryPropertyRegex.test(className)) {
        const arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
        const property = arbitraryPropertyClassName?.substring(0, arbitraryPropertyClassName.indexOf(':'));
        if (property) {
            // I use two dots here because one dot is used as prefix for class groups in plugins
            return 'arbitrary..' + property;
        }
    }
};
/**
 * Exported for testing only
 */ const createClassMap = (config)=>{
    const { theme, prefix } = config;
    const classMap = {
        nextPart: new Map(),
        validators: []
    };
    const prefixedClassGroupEntries = getPrefixedClassGroupEntries(Object.entries(config.classGroups), prefix);
    prefixedClassGroupEntries.forEach(([classGroupId, classGroup])=>{
        processClassesRecursively(classGroup, classMap, classGroupId, theme);
    });
    return classMap;
};
const processClassesRecursively = (classGroup, classPartObject, classGroupId, theme)=>{
    classGroup.forEach((classDefinition)=>{
        if (typeof classDefinition === 'string') {
            const classPartObjectToEdit = classDefinition === '' ? classPartObject : getPart(classPartObject, classDefinition);
            classPartObjectToEdit.classGroupId = classGroupId;
            return;
        }
        if (typeof classDefinition === 'function') {
            if (isThemeGetter(classDefinition)) {
                processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
                return;
            }
            classPartObject.validators.push({
                validator: classDefinition,
                classGroupId
            });
            return;
        }
        Object.entries(classDefinition).forEach(([key, classGroup])=>{
            processClassesRecursively(classGroup, getPart(classPartObject, key), classGroupId, theme);
        });
    });
};
const getPart = (classPartObject, path)=>{
    let currentClassPartObject = classPartObject;
    path.split(CLASS_PART_SEPARATOR).forEach((pathPart)=>{
        if (!currentClassPartObject.nextPart.has(pathPart)) {
            currentClassPartObject.nextPart.set(pathPart, {
                nextPart: new Map(),
                validators: []
            });
        }
        currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
    });
    return currentClassPartObject;
};
const isThemeGetter = (func)=>func.isThemeGetter;
const getPrefixedClassGroupEntries = (classGroupEntries, prefix)=>{
    if (!prefix) {
        return classGroupEntries;
    }
    return classGroupEntries.map(([classGroupId, classGroup])=>{
        const prefixedClassGroup = classGroup.map((classDefinition)=>{
            if (typeof classDefinition === 'string') {
                return prefix + classDefinition;
            }
            if (typeof classDefinition === 'object') {
                return Object.fromEntries(Object.entries(classDefinition).map(([key, value])=>[
                        prefix + key,
                        value
                    ]));
            }
            return classDefinition;
        });
        return [
            classGroupId,
            prefixedClassGroup
        ];
    });
};
// LRU cache inspired from hashlru (https://github.com/dominictarr/hashlru/blob/v1.0.4/index.js) but object replaced with Map to improve performance
const createLruCache = (maxCacheSize)=>{
    if (maxCacheSize < 1) {
        return {
            get: ()=>undefined,
            set: ()=>{}
        };
    }
    let cacheSize = 0;
    let cache = new Map();
    let previousCache = new Map();
    const update = (key, value)=>{
        cache.set(key, value);
        cacheSize++;
        if (cacheSize > maxCacheSize) {
            cacheSize = 0;
            previousCache = cache;
            cache = new Map();
        }
    };
    return {
        get (key) {
            let value = cache.get(key);
            if (value !== undefined) {
                return value;
            }
            if ((value = previousCache.get(key)) !== undefined) {
                update(key, value);
                return value;
            }
        },
        set (key, value) {
            if (cache.has(key)) {
                cache.set(key, value);
            } else {
                update(key, value);
            }
        }
    };
};
const IMPORTANT_MODIFIER = '!';
const createParseClassName = (config)=>{
    const { separator, experimentalParseClassName } = config;
    const isSeparatorSingleCharacter = separator.length === 1;
    const firstSeparatorCharacter = separator[0];
    const separatorLength = separator.length;
    // parseClassName inspired by https://github.com/tailwindlabs/tailwindcss/blob/v3.2.2/src/util/splitAtTopLevelOnly.js
    const parseClassName = (className)=>{
        const modifiers = [];
        let bracketDepth = 0;
        let modifierStart = 0;
        let postfixModifierPosition;
        for(let index = 0; index < className.length; index++){
            let currentCharacter = className[index];
            if (bracketDepth === 0) {
                if (currentCharacter === firstSeparatorCharacter && (isSeparatorSingleCharacter || className.slice(index, index + separatorLength) === separator)) {
                    modifiers.push(className.slice(modifierStart, index));
                    modifierStart = index + separatorLength;
                    continue;
                }
                if (currentCharacter === '/') {
                    postfixModifierPosition = index;
                    continue;
                }
            }
            if (currentCharacter === '[') {
                bracketDepth++;
            } else if (currentCharacter === ']') {
                bracketDepth--;
            }
        }
        const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
        const hasImportantModifier = baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);
        const baseClassName = hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier;
        const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : undefined;
        return {
            modifiers,
            hasImportantModifier,
            baseClassName,
            maybePostfixModifierPosition
        };
    };
    if (experimentalParseClassName) {
        return (className)=>experimentalParseClassName({
                className,
                parseClassName
            });
    }
    return parseClassName;
};
/**
 * Sorts modifiers according to following schema:
 * - Predefined modifiers are sorted alphabetically
 * - When an arbitrary variant appears, it must be preserved which modifiers are before and after it
 */ const sortModifiers = (modifiers)=>{
    if (modifiers.length <= 1) {
        return modifiers;
    }
    const sortedModifiers = [];
    let unsortedModifiers = [];
    modifiers.forEach((modifier)=>{
        const isArbitraryVariant = modifier[0] === '[';
        if (isArbitraryVariant) {
            sortedModifiers.push(...unsortedModifiers.sort(), modifier);
            unsortedModifiers = [];
        } else {
            unsortedModifiers.push(modifier);
        }
    });
    sortedModifiers.push(...unsortedModifiers.sort());
    return sortedModifiers;
};
const createConfigUtils = (config)=>({
        cache: createLruCache(config.cacheSize),
        parseClassName: createParseClassName(config),
        ...createClassGroupUtils(config)
    });
const SPLIT_CLASSES_REGEX = /\s+/;
const mergeClassList = (classList, configUtils)=>{
    const { parseClassName, getClassGroupId, getConflictingClassGroupIds } = configUtils;
    /**
   * Set of classGroupIds in following format:
   * `{importantModifier}{variantModifiers}{classGroupId}`
   * @example 'float'
   * @example 'hover:focus:bg-color'
   * @example 'md:!pr'
   */ const classGroupsInConflict = [];
    const classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
    let result = '';
    for(let index = classNames.length - 1; index >= 0; index -= 1){
        const originalClassName = classNames[index];
        const { modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition } = parseClassName(originalClassName);
        let hasPostfixModifier = Boolean(maybePostfixModifierPosition);
        let classGroupId = getClassGroupId(hasPostfixModifier ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
        if (!classGroupId) {
            if (!hasPostfixModifier) {
                // Not a Tailwind class
                result = originalClassName + (result.length > 0 ? ' ' + result : result);
                continue;
            }
            classGroupId = getClassGroupId(baseClassName);
            if (!classGroupId) {
                // Not a Tailwind class
                result = originalClassName + (result.length > 0 ? ' ' + result : result);
                continue;
            }
            hasPostfixModifier = false;
        }
        const variantModifier = sortModifiers(modifiers).join(':');
        const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
        const classId = modifierId + classGroupId;
        if (classGroupsInConflict.includes(classId)) {
            continue;
        }
        classGroupsInConflict.push(classId);
        const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
        for(let i = 0; i < conflictGroups.length; ++i){
            const group = conflictGroups[i];
            classGroupsInConflict.push(modifierId + group);
        }
        // Tailwind class not in conflict
        result = originalClassName + (result.length > 0 ? ' ' + result : result);
    }
    return result;
};
/**
 * The code in this file is copied from https://github.com/lukeed/clsx and modified to suit the needs of tailwind-merge better.
 *
 * Specifically:
 * - Runtime code from https://github.com/lukeed/clsx/blob/v1.2.1/src/index.js
 * - TypeScript types from https://github.com/lukeed/clsx/blob/v1.2.1/clsx.d.ts
 *
 * Original code has MIT license: Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
 */ function twJoin() {
    let index = 0;
    let argument;
    let resolvedValue;
    let string = '';
    while(index < arguments.length){
        if (argument = arguments[index++]) {
            if (resolvedValue = toValue(argument)) {
                string && (string += ' ');
                string += resolvedValue;
            }
        }
    }
    return string;
}
const toValue = (mix)=>{
    if (typeof mix === 'string') {
        return mix;
    }
    let resolvedValue;
    let string = '';
    for(let k = 0; k < mix.length; k++){
        if (mix[k]) {
            if (resolvedValue = toValue(mix[k])) {
                string && (string += ' ');
                string += resolvedValue;
            }
        }
    }
    return string;
};
function createTailwindMerge(createConfigFirst, ...createConfigRest) {
    let configUtils;
    let cacheGet;
    let cacheSet;
    let functionToCall = initTailwindMerge;
    function initTailwindMerge(classList) {
        const config = createConfigRest.reduce((previousConfig, createConfigCurrent)=>createConfigCurrent(previousConfig), createConfigFirst());
        configUtils = createConfigUtils(config);
        cacheGet = configUtils.cache.get;
        cacheSet = configUtils.cache.set;
        functionToCall = tailwindMerge;
        return tailwindMerge(classList);
    }
    function tailwindMerge(classList) {
        const cachedResult = cacheGet(classList);
        if (cachedResult) {
            return cachedResult;
        }
        const result = mergeClassList(classList, configUtils);
        cacheSet(classList, result);
        return result;
    }
    return function callTailwindMerge() {
        return functionToCall(twJoin.apply(null, arguments));
    };
}
const fromTheme = (key)=>{
    const themeGetter = (theme)=>theme[key] || [];
    themeGetter.isThemeGetter = true;
    return themeGetter;
};
const arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i;
const fractionRegex = /^\d+\/\d+$/;
const stringLengths = /*#__PURE__*/ new Set([
    'px',
    'full',
    'screen'
]);
const tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
const lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
const colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/;
// Shadow always begins with x and y offset separated by underscore optionally prepended by inset
const shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
const imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
const isLength = (value)=>isNumber(value) || stringLengths.has(value) || fractionRegex.test(value);
const isArbitraryLength = (value)=>getIsArbitraryValue(value, 'length', isLengthOnly);
const isNumber = (value)=>Boolean(value) && !Number.isNaN(Number(value));
const isArbitraryNumber = (value)=>getIsArbitraryValue(value, 'number', isNumber);
const isInteger = (value)=>Boolean(value) && Number.isInteger(Number(value));
const isPercent = (value)=>value.endsWith('%') && isNumber(value.slice(0, -1));
const isArbitraryValue = (value)=>arbitraryValueRegex.test(value);
const isTshirtSize = (value)=>tshirtUnitRegex.test(value);
const sizeLabels = /*#__PURE__*/ new Set([
    'length',
    'size',
    'percentage'
]);
const isArbitrarySize = (value)=>getIsArbitraryValue(value, sizeLabels, isNever);
const isArbitraryPosition = (value)=>getIsArbitraryValue(value, 'position', isNever);
const imageLabels = /*#__PURE__*/ new Set([
    'image',
    'url'
]);
const isArbitraryImage = (value)=>getIsArbitraryValue(value, imageLabels, isImage);
const isArbitraryShadow = (value)=>getIsArbitraryValue(value, '', isShadow);
const isAny = ()=>true;
const getIsArbitraryValue = (value, label, testValue)=>{
    const result = arbitraryValueRegex.exec(value);
    if (result) {
        if (result[1]) {
            return typeof label === 'string' ? result[1] === label : label.has(result[1]);
        }
        return testValue(result[2]);
    }
    return false;
};
const isLengthOnly = (value)=>// `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
    // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
    // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
    lengthUnitRegex.test(value) && !colorFunctionRegex.test(value);
const isNever = ()=>false;
const isShadow = (value)=>shadowRegex.test(value);
const isImage = (value)=>imageRegex.test(value);
const validators = /*#__PURE__*/ Object.defineProperty({
    __proto__: null,
    isAny,
    isArbitraryImage,
    isArbitraryLength,
    isArbitraryNumber,
    isArbitraryPosition,
    isArbitraryShadow,
    isArbitrarySize,
    isArbitraryValue,
    isInteger,
    isLength,
    isNumber,
    isPercent,
    isTshirtSize
}, Symbol.toStringTag, {
    value: 'Module'
});
const getDefaultConfig = ()=>{
    const colors = fromTheme('colors');
    const spacing = fromTheme('spacing');
    const blur = fromTheme('blur');
    const brightness = fromTheme('brightness');
    const borderColor = fromTheme('borderColor');
    const borderRadius = fromTheme('borderRadius');
    const borderSpacing = fromTheme('borderSpacing');
    const borderWidth = fromTheme('borderWidth');
    const contrast = fromTheme('contrast');
    const grayscale = fromTheme('grayscale');
    const hueRotate = fromTheme('hueRotate');
    const invert = fromTheme('invert');
    const gap = fromTheme('gap');
    const gradientColorStops = fromTheme('gradientColorStops');
    const gradientColorStopPositions = fromTheme('gradientColorStopPositions');
    const inset = fromTheme('inset');
    const margin = fromTheme('margin');
    const opacity = fromTheme('opacity');
    const padding = fromTheme('padding');
    const saturate = fromTheme('saturate');
    const scale = fromTheme('scale');
    const sepia = fromTheme('sepia');
    const skew = fromTheme('skew');
    const space = fromTheme('space');
    const translate = fromTheme('translate');
    const getOverscroll = ()=>[
            'auto',
            'contain',
            'none'
        ];
    const getOverflow = ()=>[
            'auto',
            'hidden',
            'clip',
            'visible',
            'scroll'
        ];
    const getSpacingWithAutoAndArbitrary = ()=>[
            'auto',
            isArbitraryValue,
            spacing
        ];
    const getSpacingWithArbitrary = ()=>[
            isArbitraryValue,
            spacing
        ];
    const getLengthWithEmptyAndArbitrary = ()=>[
            '',
            isLength,
            isArbitraryLength
        ];
    const getNumberWithAutoAndArbitrary = ()=>[
            'auto',
            isNumber,
            isArbitraryValue
        ];
    const getPositions = ()=>[
            'bottom',
            'center',
            'left',
            'left-bottom',
            'left-top',
            'right',
            'right-bottom',
            'right-top',
            'top'
        ];
    const getLineStyles = ()=>[
            'solid',
            'dashed',
            'dotted',
            'double',
            'none'
        ];
    const getBlendModes = ()=>[
            'normal',
            'multiply',
            'screen',
            'overlay',
            'darken',
            'lighten',
            'color-dodge',
            'color-burn',
            'hard-light',
            'soft-light',
            'difference',
            'exclusion',
            'hue',
            'saturation',
            'color',
            'luminosity'
        ];
    const getAlign = ()=>[
            'start',
            'end',
            'center',
            'between',
            'around',
            'evenly',
            'stretch'
        ];
    const getZeroAndEmpty = ()=>[
            '',
            '0',
            isArbitraryValue
        ];
    const getBreaks = ()=>[
            'auto',
            'avoid',
            'all',
            'avoid-page',
            'page',
            'left',
            'right',
            'column'
        ];
    const getNumberAndArbitrary = ()=>[
            isNumber,
            isArbitraryValue
        ];
    return {
        cacheSize: 500,
        separator: ':',
        theme: {
            colors: [
                isAny
            ],
            spacing: [
                isLength,
                isArbitraryLength
            ],
            blur: [
                'none',
                '',
                isTshirtSize,
                isArbitraryValue
            ],
            brightness: getNumberAndArbitrary(),
            borderColor: [
                colors
            ],
            borderRadius: [
                'none',
                '',
                'full',
                isTshirtSize,
                isArbitraryValue
            ],
            borderSpacing: getSpacingWithArbitrary(),
            borderWidth: getLengthWithEmptyAndArbitrary(),
            contrast: getNumberAndArbitrary(),
            grayscale: getZeroAndEmpty(),
            hueRotate: getNumberAndArbitrary(),
            invert: getZeroAndEmpty(),
            gap: getSpacingWithArbitrary(),
            gradientColorStops: [
                colors
            ],
            gradientColorStopPositions: [
                isPercent,
                isArbitraryLength
            ],
            inset: getSpacingWithAutoAndArbitrary(),
            margin: getSpacingWithAutoAndArbitrary(),
            opacity: getNumberAndArbitrary(),
            padding: getSpacingWithArbitrary(),
            saturate: getNumberAndArbitrary(),
            scale: getNumberAndArbitrary(),
            sepia: getZeroAndEmpty(),
            skew: getNumberAndArbitrary(),
            space: getSpacingWithArbitrary(),
            translate: getSpacingWithArbitrary()
        },
        classGroups: {
            // Layout
            /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */ aspect: [
                {
                    aspect: [
                        'auto',
                        'square',
                        'video',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */ container: [
                'container'
            ],
            /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */ columns: [
                {
                    columns: [
                        isTshirtSize
                    ]
                }
            ],
            /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */ 'break-after': [
                {
                    'break-after': getBreaks()
                }
            ],
            /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */ 'break-before': [
                {
                    'break-before': getBreaks()
                }
            ],
            /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */ 'break-inside': [
                {
                    'break-inside': [
                        'auto',
                        'avoid',
                        'avoid-page',
                        'avoid-column'
                    ]
                }
            ],
            /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */ 'box-decoration': [
                {
                    'box-decoration': [
                        'slice',
                        'clone'
                    ]
                }
            ],
            /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */ box: [
                {
                    box: [
                        'border',
                        'content'
                    ]
                }
            ],
            /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */ display: [
                'block',
                'inline-block',
                'inline',
                'flex',
                'inline-flex',
                'table',
                'inline-table',
                'table-caption',
                'table-cell',
                'table-column',
                'table-column-group',
                'table-footer-group',
                'table-header-group',
                'table-row-group',
                'table-row',
                'flow-root',
                'grid',
                'inline-grid',
                'contents',
                'list-item',
                'hidden'
            ],
            /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */ float: [
                {
                    float: [
                        'right',
                        'left',
                        'none',
                        'start',
                        'end'
                    ]
                }
            ],
            /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */ clear: [
                {
                    clear: [
                        'left',
                        'right',
                        'both',
                        'none',
                        'start',
                        'end'
                    ]
                }
            ],
            /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */ isolation: [
                'isolate',
                'isolation-auto'
            ],
            /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */ 'object-fit': [
                {
                    object: [
                        'contain',
                        'cover',
                        'fill',
                        'none',
                        'scale-down'
                    ]
                }
            ],
            /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */ 'object-position': [
                {
                    object: [
                        ...getPositions(),
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */ overflow: [
                {
                    overflow: getOverflow()
                }
            ],
            /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */ 'overflow-x': [
                {
                    'overflow-x': getOverflow()
                }
            ],
            /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */ 'overflow-y': [
                {
                    'overflow-y': getOverflow()
                }
            ],
            /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */ overscroll: [
                {
                    overscroll: getOverscroll()
                }
            ],
            /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */ 'overscroll-x': [
                {
                    'overscroll-x': getOverscroll()
                }
            ],
            /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */ 'overscroll-y': [
                {
                    'overscroll-y': getOverscroll()
                }
            ],
            /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */ position: [
                'static',
                'fixed',
                'absolute',
                'relative',
                'sticky'
            ],
            /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ inset: [
                {
                    inset: [
                        inset
                    ]
                }
            ],
            /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ 'inset-x': [
                {
                    'inset-x': [
                        inset
                    ]
                }
            ],
            /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ 'inset-y': [
                {
                    'inset-y': [
                        inset
                    ]
                }
            ],
            /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ start: [
                {
                    start: [
                        inset
                    ]
                }
            ],
            /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ end: [
                {
                    end: [
                        inset
                    ]
                }
            ],
            /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ top: [
                {
                    top: [
                        inset
                    ]
                }
            ],
            /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ right: [
                {
                    right: [
                        inset
                    ]
                }
            ],
            /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ bottom: [
                {
                    bottom: [
                        inset
                    ]
                }
            ],
            /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ left: [
                {
                    left: [
                        inset
                    ]
                }
            ],
            /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */ visibility: [
                'visible',
                'invisible',
                'collapse'
            ],
            /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */ z: [
                {
                    z: [
                        'auto',
                        isInteger,
                        isArbitraryValue
                    ]
                }
            ],
            // Flexbox and Grid
            /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */ basis: [
                {
                    basis: getSpacingWithAutoAndArbitrary()
                }
            ],
            /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */ 'flex-direction': [
                {
                    flex: [
                        'row',
                        'row-reverse',
                        'col',
                        'col-reverse'
                    ]
                }
            ],
            /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */ 'flex-wrap': [
                {
                    flex: [
                        'wrap',
                        'wrap-reverse',
                        'nowrap'
                    ]
                }
            ],
            /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */ flex: [
                {
                    flex: [
                        '1',
                        'auto',
                        'initial',
                        'none',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */ grow: [
                {
                    grow: getZeroAndEmpty()
                }
            ],
            /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */ shrink: [
                {
                    shrink: getZeroAndEmpty()
                }
            ],
            /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */ order: [
                {
                    order: [
                        'first',
                        'last',
                        'none',
                        isInteger,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */ 'grid-cols': [
                {
                    'grid-cols': [
                        isAny
                    ]
                }
            ],
            /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */ 'col-start-end': [
                {
                    col: [
                        'auto',
                        {
                            span: [
                                'full',
                                isInteger,
                                isArbitraryValue
                            ]
                        },
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */ 'col-start': [
                {
                    'col-start': getNumberWithAutoAndArbitrary()
                }
            ],
            /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */ 'col-end': [
                {
                    'col-end': getNumberWithAutoAndArbitrary()
                }
            ],
            /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */ 'grid-rows': [
                {
                    'grid-rows': [
                        isAny
                    ]
                }
            ],
            /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */ 'row-start-end': [
                {
                    row: [
                        'auto',
                        {
                            span: [
                                isInteger,
                                isArbitraryValue
                            ]
                        },
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */ 'row-start': [
                {
                    'row-start': getNumberWithAutoAndArbitrary()
                }
            ],
            /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */ 'row-end': [
                {
                    'row-end': getNumberWithAutoAndArbitrary()
                }
            ],
            /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */ 'grid-flow': [
                {
                    'grid-flow': [
                        'row',
                        'col',
                        'dense',
                        'row-dense',
                        'col-dense'
                    ]
                }
            ],
            /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */ 'auto-cols': [
                {
                    'auto-cols': [
                        'auto',
                        'min',
                        'max',
                        'fr',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */ 'auto-rows': [
                {
                    'auto-rows': [
                        'auto',
                        'min',
                        'max',
                        'fr',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */ gap: [
                {
                    gap: [
                        gap
                    ]
                }
            ],
            /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */ 'gap-x': [
                {
                    'gap-x': [
                        gap
                    ]
                }
            ],
            /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */ 'gap-y': [
                {
                    'gap-y': [
                        gap
                    ]
                }
            ],
            /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */ 'justify-content': [
                {
                    justify: [
                        'normal',
                        ...getAlign()
                    ]
                }
            ],
            /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */ 'justify-items': [
                {
                    'justify-items': [
                        'start',
                        'end',
                        'center',
                        'stretch'
                    ]
                }
            ],
            /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */ 'justify-self': [
                {
                    'justify-self': [
                        'auto',
                        'start',
                        'end',
                        'center',
                        'stretch'
                    ]
                }
            ],
            /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */ 'align-content': [
                {
                    content: [
                        'normal',
                        ...getAlign(),
                        'baseline'
                    ]
                }
            ],
            /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */ 'align-items': [
                {
                    items: [
                        'start',
                        'end',
                        'center',
                        'baseline',
                        'stretch'
                    ]
                }
            ],
            /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */ 'align-self': [
                {
                    self: [
                        'auto',
                        'start',
                        'end',
                        'center',
                        'stretch',
                        'baseline'
                    ]
                }
            ],
            /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */ 'place-content': [
                {
                    'place-content': [
                        ...getAlign(),
                        'baseline'
                    ]
                }
            ],
            /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */ 'place-items': [
                {
                    'place-items': [
                        'start',
                        'end',
                        'center',
                        'baseline',
                        'stretch'
                    ]
                }
            ],
            /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */ 'place-self': [
                {
                    'place-self': [
                        'auto',
                        'start',
                        'end',
                        'center',
                        'stretch'
                    ]
                }
            ],
            // Spacing
            /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */ p: [
                {
                    p: [
                        padding
                    ]
                }
            ],
            /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */ px: [
                {
                    px: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */ py: [
                {
                    py: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */ ps: [
                {
                    ps: [
                        padding
                    ]
                }
            ],
            /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */ pe: [
                {
                    pe: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */ pt: [
                {
                    pt: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */ pr: [
                {
                    pr: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */ pb: [
                {
                    pb: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */ pl: [
                {
                    pl: [
                        padding
                    ]
                }
            ],
            /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */ m: [
                {
                    m: [
                        margin
                    ]
                }
            ],
            /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */ mx: [
                {
                    mx: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */ my: [
                {
                    my: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */ ms: [
                {
                    ms: [
                        margin
                    ]
                }
            ],
            /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */ me: [
                {
                    me: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */ mt: [
                {
                    mt: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */ mr: [
                {
                    mr: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */ mb: [
                {
                    mb: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */ ml: [
                {
                    ml: [
                        margin
                    ]
                }
            ],
            /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */ 'space-x': [
                {
                    'space-x': [
                        space
                    ]
                }
            ],
            /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */ 'space-x-reverse': [
                'space-x-reverse'
            ],
            /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */ 'space-y': [
                {
                    'space-y': [
                        space
                    ]
                }
            ],
            /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */ 'space-y-reverse': [
                'space-y-reverse'
            ],
            // Sizing
            /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */ w: [
                {
                    w: [
                        'auto',
                        'min',
                        'max',
                        'fit',
                        'svw',
                        'lvw',
                        'dvw',
                        isArbitraryValue,
                        spacing
                    ]
                }
            ],
            /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */ 'min-w': [
                {
                    'min-w': [
                        isArbitraryValue,
                        spacing,
                        'min',
                        'max',
                        'fit'
                    ]
                }
            ],
            /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */ 'max-w': [
                {
                    'max-w': [
                        isArbitraryValue,
                        spacing,
                        'none',
                        'full',
                        'min',
                        'max',
                        'fit',
                        'prose',
                        {
                            screen: [
                                isTshirtSize
                            ]
                        },
                        isTshirtSize
                    ]
                }
            ],
            /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */ h: [
                {
                    h: [
                        isArbitraryValue,
                        spacing,
                        'auto',
                        'min',
                        'max',
                        'fit',
                        'svh',
                        'lvh',
                        'dvh'
                    ]
                }
            ],
            /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */ 'min-h': [
                {
                    'min-h': [
                        isArbitraryValue,
                        spacing,
                        'min',
                        'max',
                        'fit',
                        'svh',
                        'lvh',
                        'dvh'
                    ]
                }
            ],
            /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */ 'max-h': [
                {
                    'max-h': [
                        isArbitraryValue,
                        spacing,
                        'min',
                        'max',
                        'fit',
                        'svh',
                        'lvh',
                        'dvh'
                    ]
                }
            ],
            /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */ size: [
                {
                    size: [
                        isArbitraryValue,
                        spacing,
                        'auto',
                        'min',
                        'max',
                        'fit'
                    ]
                }
            ],
            // Typography
            /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */ 'font-size': [
                {
                    text: [
                        'base',
                        isTshirtSize,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */ 'font-smoothing': [
                'antialiased',
                'subpixel-antialiased'
            ],
            /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */ 'font-style': [
                'italic',
                'not-italic'
            ],
            /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */ 'font-weight': [
                {
                    font: [
                        'thin',
                        'extralight',
                        'light',
                        'normal',
                        'medium',
                        'semibold',
                        'bold',
                        'extrabold',
                        'black',
                        isArbitraryNumber
                    ]
                }
            ],
            /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */ 'font-family': [
                {
                    font: [
                        isAny
                    ]
                }
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-normal': [
                'normal-nums'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-ordinal': [
                'ordinal'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-slashed-zero': [
                'slashed-zero'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-figure': [
                'lining-nums',
                'oldstyle-nums'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-spacing': [
                'proportional-nums',
                'tabular-nums'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-fraction': [
                'diagonal-fractions',
                'stacked-fractions'
            ],
            /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */ tracking: [
                {
                    tracking: [
                        'tighter',
                        'tight',
                        'normal',
                        'wide',
                        'wider',
                        'widest',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */ 'line-clamp': [
                {
                    'line-clamp': [
                        'none',
                        isNumber,
                        isArbitraryNumber
                    ]
                }
            ],
            /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */ leading: [
                {
                    leading: [
                        'none',
                        'tight',
                        'snug',
                        'normal',
                        'relaxed',
                        'loose',
                        isLength,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */ 'list-image': [
                {
                    'list-image': [
                        'none',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */ 'list-style-type': [
                {
                    list: [
                        'none',
                        'disc',
                        'decimal',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */ 'list-style-position': [
                {
                    list: [
                        'inside',
                        'outside'
                    ]
                }
            ],
            /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */ 'placeholder-color': [
                {
                    placeholder: [
                        colors
                    ]
                }
            ],
            /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */ 'placeholder-opacity': [
                {
                    'placeholder-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */ 'text-alignment': [
                {
                    text: [
                        'left',
                        'center',
                        'right',
                        'justify',
                        'start',
                        'end'
                    ]
                }
            ],
            /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */ 'text-color': [
                {
                    text: [
                        colors
                    ]
                }
            ],
            /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */ 'text-opacity': [
                {
                    'text-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */ 'text-decoration': [
                'underline',
                'overline',
                'line-through',
                'no-underline'
            ],
            /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */ 'text-decoration-style': [
                {
                    decoration: [
                        ...getLineStyles(),
                        'wavy'
                    ]
                }
            ],
            /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */ 'text-decoration-thickness': [
                {
                    decoration: [
                        'auto',
                        'from-font',
                        isLength,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */ 'underline-offset': [
                {
                    'underline-offset': [
                        'auto',
                        isLength,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */ 'text-decoration-color': [
                {
                    decoration: [
                        colors
                    ]
                }
            ],
            /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */ 'text-transform': [
                'uppercase',
                'lowercase',
                'capitalize',
                'normal-case'
            ],
            /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */ 'text-overflow': [
                'truncate',
                'text-ellipsis',
                'text-clip'
            ],
            /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */ 'text-wrap': [
                {
                    text: [
                        'wrap',
                        'nowrap',
                        'balance',
                        'pretty'
                    ]
                }
            ],
            /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */ indent: [
                {
                    indent: getSpacingWithArbitrary()
                }
            ],
            /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */ 'vertical-align': [
                {
                    align: [
                        'baseline',
                        'top',
                        'middle',
                        'bottom',
                        'text-top',
                        'text-bottom',
                        'sub',
                        'super',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */ whitespace: [
                {
                    whitespace: [
                        'normal',
                        'nowrap',
                        'pre',
                        'pre-line',
                        'pre-wrap',
                        'break-spaces'
                    ]
                }
            ],
            /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */ break: [
                {
                    break: [
                        'normal',
                        'words',
                        'all',
                        'keep'
                    ]
                }
            ],
            /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */ hyphens: [
                {
                    hyphens: [
                        'none',
                        'manual',
                        'auto'
                    ]
                }
            ],
            /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */ content: [
                {
                    content: [
                        'none',
                        isArbitraryValue
                    ]
                }
            ],
            // Backgrounds
            /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */ 'bg-attachment': [
                {
                    bg: [
                        'fixed',
                        'local',
                        'scroll'
                    ]
                }
            ],
            /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */ 'bg-clip': [
                {
                    'bg-clip': [
                        'border',
                        'padding',
                        'content',
                        'text'
                    ]
                }
            ],
            /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */ 'bg-opacity': [
                {
                    'bg-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */ 'bg-origin': [
                {
                    'bg-origin': [
                        'border',
                        'padding',
                        'content'
                    ]
                }
            ],
            /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */ 'bg-position': [
                {
                    bg: [
                        ...getPositions(),
                        isArbitraryPosition
                    ]
                }
            ],
            /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */ 'bg-repeat': [
                {
                    bg: [
                        'no-repeat',
                        {
                            repeat: [
                                '',
                                'x',
                                'y',
                                'round',
                                'space'
                            ]
                        }
                    ]
                }
            ],
            /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */ 'bg-size': [
                {
                    bg: [
                        'auto',
                        'cover',
                        'contain',
                        isArbitrarySize
                    ]
                }
            ],
            /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */ 'bg-image': [
                {
                    bg: [
                        'none',
                        {
                            'gradient-to': [
                                't',
                                'tr',
                                'r',
                                'br',
                                'b',
                                'bl',
                                'l',
                                'tl'
                            ]
                        },
                        isArbitraryImage
                    ]
                }
            ],
            /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */ 'bg-color': [
                {
                    bg: [
                        colors
                    ]
                }
            ],
            /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-from-pos': [
                {
                    from: [
                        gradientColorStopPositions
                    ]
                }
            ],
            /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-via-pos': [
                {
                    via: [
                        gradientColorStopPositions
                    ]
                }
            ],
            /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-to-pos': [
                {
                    to: [
                        gradientColorStopPositions
                    ]
                }
            ],
            /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-from': [
                {
                    from: [
                        gradientColorStops
                    ]
                }
            ],
            /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-via': [
                {
                    via: [
                        gradientColorStops
                    ]
                }
            ],
            /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-to': [
                {
                    to: [
                        gradientColorStops
                    ]
                }
            ],
            // Borders
            /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */ rounded: [
                {
                    rounded: [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-s': [
                {
                    'rounded-s': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-e': [
                {
                    'rounded-e': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-t': [
                {
                    'rounded-t': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-r': [
                {
                    'rounded-r': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-b': [
                {
                    'rounded-b': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-l': [
                {
                    'rounded-l': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-ss': [
                {
                    'rounded-ss': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-se': [
                {
                    'rounded-se': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-ee': [
                {
                    'rounded-ee': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-es': [
                {
                    'rounded-es': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-tl': [
                {
                    'rounded-tl': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-tr': [
                {
                    'rounded-tr': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-br': [
                {
                    'rounded-br': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-bl': [
                {
                    'rounded-bl': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w': [
                {
                    border: [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-x': [
                {
                    'border-x': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-y': [
                {
                    'border-y': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-s': [
                {
                    'border-s': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-e': [
                {
                    'border-e': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-t': [
                {
                    'border-t': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-r': [
                {
                    'border-r': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-b': [
                {
                    'border-b': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-l': [
                {
                    'border-l': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */ 'border-opacity': [
                {
                    'border-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */ 'border-style': [
                {
                    border: [
                        ...getLineStyles(),
                        'hidden'
                    ]
                }
            ],
            /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */ 'divide-x': [
                {
                    'divide-x': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */ 'divide-x-reverse': [
                'divide-x-reverse'
            ],
            /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */ 'divide-y': [
                {
                    'divide-y': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */ 'divide-y-reverse': [
                'divide-y-reverse'
            ],
            /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */ 'divide-opacity': [
                {
                    'divide-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */ 'divide-style': [
                {
                    divide: getLineStyles()
                }
            ],
            /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color': [
                {
                    border: [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-x': [
                {
                    'border-x': [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-y': [
                {
                    'border-y': [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-s': [
                {
                    'border-s': [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-e': [
                {
                    'border-e': [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-t': [
                {
                    'border-t': [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-r': [
                {
                    'border-r': [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-b': [
                {
                    'border-b': [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-l': [
                {
                    'border-l': [
                        borderColor
                    ]
                }
            ],
            /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */ 'divide-color': [
                {
                    divide: [
                        borderColor
                    ]
                }
            ],
            /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */ 'outline-style': [
                {
                    outline: [
                        '',
                        ...getLineStyles()
                    ]
                }
            ],
            /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */ 'outline-offset': [
                {
                    'outline-offset': [
                        isLength,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */ 'outline-w': [
                {
                    outline: [
                        isLength,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */ 'outline-color': [
                {
                    outline: [
                        colors
                    ]
                }
            ],
            /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */ 'ring-w': [
                {
                    ring: getLengthWithEmptyAndArbitrary()
                }
            ],
            /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */ 'ring-w-inset': [
                'ring-inset'
            ],
            /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */ 'ring-color': [
                {
                    ring: [
                        colors
                    ]
                }
            ],
            /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */ 'ring-opacity': [
                {
                    'ring-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */ 'ring-offset-w': [
                {
                    'ring-offset': [
                        isLength,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */ 'ring-offset-color': [
                {
                    'ring-offset': [
                        colors
                    ]
                }
            ],
            // Effects
            /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */ shadow: [
                {
                    shadow: [
                        '',
                        'inner',
                        'none',
                        isTshirtSize,
                        isArbitraryShadow
                    ]
                }
            ],
            /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */ 'shadow-color': [
                {
                    shadow: [
                        isAny
                    ]
                }
            ],
            /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */ opacity: [
                {
                    opacity: [
                        opacity
                    ]
                }
            ],
            /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */ 'mix-blend': [
                {
                    'mix-blend': [
                        ...getBlendModes(),
                        'plus-lighter',
                        'plus-darker'
                    ]
                }
            ],
            /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */ 'bg-blend': [
                {
                    'bg-blend': getBlendModes()
                }
            ],
            // Filters
            /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */ filter: [
                {
                    filter: [
                        '',
                        'none'
                    ]
                }
            ],
            /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */ blur: [
                {
                    blur: [
                        blur
                    ]
                }
            ],
            /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */ brightness: [
                {
                    brightness: [
                        brightness
                    ]
                }
            ],
            /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */ contrast: [
                {
                    contrast: [
                        contrast
                    ]
                }
            ],
            /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */ 'drop-shadow': [
                {
                    'drop-shadow': [
                        '',
                        'none',
                        isTshirtSize,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */ grayscale: [
                {
                    grayscale: [
                        grayscale
                    ]
                }
            ],
            /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */ 'hue-rotate': [
                {
                    'hue-rotate': [
                        hueRotate
                    ]
                }
            ],
            /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */ invert: [
                {
                    invert: [
                        invert
                    ]
                }
            ],
            /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */ saturate: [
                {
                    saturate: [
                        saturate
                    ]
                }
            ],
            /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */ sepia: [
                {
                    sepia: [
                        sepia
                    ]
                }
            ],
            /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */ 'backdrop-filter': [
                {
                    'backdrop-filter': [
                        '',
                        'none'
                    ]
                }
            ],
            /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */ 'backdrop-blur': [
                {
                    'backdrop-blur': [
                        blur
                    ]
                }
            ],
            /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */ 'backdrop-brightness': [
                {
                    'backdrop-brightness': [
                        brightness
                    ]
                }
            ],
            /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */ 'backdrop-contrast': [
                {
                    'backdrop-contrast': [
                        contrast
                    ]
                }
            ],
            /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */ 'backdrop-grayscale': [
                {
                    'backdrop-grayscale': [
                        grayscale
                    ]
                }
            ],
            /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */ 'backdrop-hue-rotate': [
                {
                    'backdrop-hue-rotate': [
                        hueRotate
                    ]
                }
            ],
            /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */ 'backdrop-invert': [
                {
                    'backdrop-invert': [
                        invert
                    ]
                }
            ],
            /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */ 'backdrop-opacity': [
                {
                    'backdrop-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */ 'backdrop-saturate': [
                {
                    'backdrop-saturate': [
                        saturate
                    ]
                }
            ],
            /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */ 'backdrop-sepia': [
                {
                    'backdrop-sepia': [
                        sepia
                    ]
                }
            ],
            // Tables
            /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */ 'border-collapse': [
                {
                    border: [
                        'collapse',
                        'separate'
                    ]
                }
            ],
            /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */ 'border-spacing': [
                {
                    'border-spacing': [
                        borderSpacing
                    ]
                }
            ],
            /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */ 'border-spacing-x': [
                {
                    'border-spacing-x': [
                        borderSpacing
                    ]
                }
            ],
            /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */ 'border-spacing-y': [
                {
                    'border-spacing-y': [
                        borderSpacing
                    ]
                }
            ],
            /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */ 'table-layout': [
                {
                    table: [
                        'auto',
                        'fixed'
                    ]
                }
            ],
            /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */ caption: [
                {
                    caption: [
                        'top',
                        'bottom'
                    ]
                }
            ],
            // Transitions and Animation
            /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */ transition: [
                {
                    transition: [
                        'none',
                        'all',
                        '',
                        'colors',
                        'opacity',
                        'shadow',
                        'transform',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */ duration: [
                {
                    duration: getNumberAndArbitrary()
                }
            ],
            /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */ ease: [
                {
                    ease: [
                        'linear',
                        'in',
                        'out',
                        'in-out',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */ delay: [
                {
                    delay: getNumberAndArbitrary()
                }
            ],
            /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */ animate: [
                {
                    animate: [
                        'none',
                        'spin',
                        'ping',
                        'pulse',
                        'bounce',
                        isArbitraryValue
                    ]
                }
            ],
            // Transforms
            /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */ transform: [
                {
                    transform: [
                        '',
                        'gpu',
                        'none'
                    ]
                }
            ],
            /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */ scale: [
                {
                    scale: [
                        scale
                    ]
                }
            ],
            /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */ 'scale-x': [
                {
                    'scale-x': [
                        scale
                    ]
                }
            ],
            /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */ 'scale-y': [
                {
                    'scale-y': [
                        scale
                    ]
                }
            ],
            /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */ rotate: [
                {
                    rotate: [
                        isInteger,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */ 'translate-x': [
                {
                    'translate-x': [
                        translate
                    ]
                }
            ],
            /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */ 'translate-y': [
                {
                    'translate-y': [
                        translate
                    ]
                }
            ],
            /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */ 'skew-x': [
                {
                    'skew-x': [
                        skew
                    ]
                }
            ],
            /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */ 'skew-y': [
                {
                    'skew-y': [
                        skew
                    ]
                }
            ],
            /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */ 'transform-origin': [
                {
                    origin: [
                        'center',
                        'top',
                        'top-right',
                        'right',
                        'bottom-right',
                        'bottom',
                        'bottom-left',
                        'left',
                        'top-left',
                        isArbitraryValue
                    ]
                }
            ],
            // Interactivity
            /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */ accent: [
                {
                    accent: [
                        'auto',
                        colors
                    ]
                }
            ],
            /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */ appearance: [
                {
                    appearance: [
                        'none',
                        'auto'
                    ]
                }
            ],
            /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */ cursor: [
                {
                    cursor: [
                        'auto',
                        'default',
                        'pointer',
                        'wait',
                        'text',
                        'move',
                        'help',
                        'not-allowed',
                        'none',
                        'context-menu',
                        'progress',
                        'cell',
                        'crosshair',
                        'vertical-text',
                        'alias',
                        'copy',
                        'no-drop',
                        'grab',
                        'grabbing',
                        'all-scroll',
                        'col-resize',
                        'row-resize',
                        'n-resize',
                        'e-resize',
                        's-resize',
                        'w-resize',
                        'ne-resize',
                        'nw-resize',
                        'se-resize',
                        'sw-resize',
                        'ew-resize',
                        'ns-resize',
                        'nesw-resize',
                        'nwse-resize',
                        'zoom-in',
                        'zoom-out',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */ 'caret-color': [
                {
                    caret: [
                        colors
                    ]
                }
            ],
            /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */ 'pointer-events': [
                {
                    'pointer-events': [
                        'none',
                        'auto'
                    ]
                }
            ],
            /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */ resize: [
                {
                    resize: [
                        'none',
                        'y',
                        'x',
                        ''
                    ]
                }
            ],
            /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */ 'scroll-behavior': [
                {
                    scroll: [
                        'auto',
                        'smooth'
                    ]
                }
            ],
            /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-m': [
                {
                    'scroll-m': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-mx': [
                {
                    'scroll-mx': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-my': [
                {
                    'scroll-my': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-ms': [
                {
                    'scroll-ms': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-me': [
                {
                    'scroll-me': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-mt': [
                {
                    'scroll-mt': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-mr': [
                {
                    'scroll-mr': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-mb': [
                {
                    'scroll-mb': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-ml': [
                {
                    'scroll-ml': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-p': [
                {
                    'scroll-p': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-px': [
                {
                    'scroll-px': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-py': [
                {
                    'scroll-py': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-ps': [
                {
                    'scroll-ps': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pe': [
                {
                    'scroll-pe': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pt': [
                {
                    'scroll-pt': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pr': [
                {
                    'scroll-pr': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pb': [
                {
                    'scroll-pb': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pl': [
                {
                    'scroll-pl': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */ 'snap-align': [
                {
                    snap: [
                        'start',
                        'end',
                        'center',
                        'align-none'
                    ]
                }
            ],
            /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */ 'snap-stop': [
                {
                    snap: [
                        'normal',
                        'always'
                    ]
                }
            ],
            /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */ 'snap-type': [
                {
                    snap: [
                        'none',
                        'x',
                        'y',
                        'both'
                    ]
                }
            ],
            /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */ 'snap-strictness': [
                {
                    snap: [
                        'mandatory',
                        'proximity'
                    ]
                }
            ],
            /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */ touch: [
                {
                    touch: [
                        'auto',
                        'none',
                        'manipulation'
                    ]
                }
            ],
            /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */ 'touch-x': [
                {
                    'touch-pan': [
                        'x',
                        'left',
                        'right'
                    ]
                }
            ],
            /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */ 'touch-y': [
                {
                    'touch-pan': [
                        'y',
                        'up',
                        'down'
                    ]
                }
            ],
            /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */ 'touch-pz': [
                'touch-pinch-zoom'
            ],
            /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */ select: [
                {
                    select: [
                        'none',
                        'text',
                        'all',
                        'auto'
                    ]
                }
            ],
            /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */ 'will-change': [
                {
                    'will-change': [
                        'auto',
                        'scroll',
                        'contents',
                        'transform',
                        isArbitraryValue
                    ]
                }
            ],
            // SVG
            /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */ fill: [
                {
                    fill: [
                        colors,
                        'none'
                    ]
                }
            ],
            /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */ 'stroke-w': [
                {
                    stroke: [
                        isLength,
                        isArbitraryLength,
                        isArbitraryNumber
                    ]
                }
            ],
            /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */ stroke: [
                {
                    stroke: [
                        colors,
                        'none'
                    ]
                }
            ],
            // Accessibility
            /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */ sr: [
                'sr-only',
                'not-sr-only'
            ],
            /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */ 'forced-color-adjust': [
                {
                    'forced-color-adjust': [
                        'auto',
                        'none'
                    ]
                }
            ]
        },
        conflictingClassGroups: {
            overflow: [
                'overflow-x',
                'overflow-y'
            ],
            overscroll: [
                'overscroll-x',
                'overscroll-y'
            ],
            inset: [
                'inset-x',
                'inset-y',
                'start',
                'end',
                'top',
                'right',
                'bottom',
                'left'
            ],
            'inset-x': [
                'right',
                'left'
            ],
            'inset-y': [
                'top',
                'bottom'
            ],
            flex: [
                'basis',
                'grow',
                'shrink'
            ],
            gap: [
                'gap-x',
                'gap-y'
            ],
            p: [
                'px',
                'py',
                'ps',
                'pe',
                'pt',
                'pr',
                'pb',
                'pl'
            ],
            px: [
                'pr',
                'pl'
            ],
            py: [
                'pt',
                'pb'
            ],
            m: [
                'mx',
                'my',
                'ms',
                'me',
                'mt',
                'mr',
                'mb',
                'ml'
            ],
            mx: [
                'mr',
                'ml'
            ],
            my: [
                'mt',
                'mb'
            ],
            size: [
                'w',
                'h'
            ],
            'font-size': [
                'leading'
            ],
            'fvn-normal': [
                'fvn-ordinal',
                'fvn-slashed-zero',
                'fvn-figure',
                'fvn-spacing',
                'fvn-fraction'
            ],
            'fvn-ordinal': [
                'fvn-normal'
            ],
            'fvn-slashed-zero': [
                'fvn-normal'
            ],
            'fvn-figure': [
                'fvn-normal'
            ],
            'fvn-spacing': [
                'fvn-normal'
            ],
            'fvn-fraction': [
                'fvn-normal'
            ],
            'line-clamp': [
                'display',
                'overflow'
            ],
            rounded: [
                'rounded-s',
                'rounded-e',
                'rounded-t',
                'rounded-r',
                'rounded-b',
                'rounded-l',
                'rounded-ss',
                'rounded-se',
                'rounded-ee',
                'rounded-es',
                'rounded-tl',
                'rounded-tr',
                'rounded-br',
                'rounded-bl'
            ],
            'rounded-s': [
                'rounded-ss',
                'rounded-es'
            ],
            'rounded-e': [
                'rounded-se',
                'rounded-ee'
            ],
            'rounded-t': [
                'rounded-tl',
                'rounded-tr'
            ],
            'rounded-r': [
                'rounded-tr',
                'rounded-br'
            ],
            'rounded-b': [
                'rounded-br',
                'rounded-bl'
            ],
            'rounded-l': [
                'rounded-tl',
                'rounded-bl'
            ],
            'border-spacing': [
                'border-spacing-x',
                'border-spacing-y'
            ],
            'border-w': [
                'border-w-s',
                'border-w-e',
                'border-w-t',
                'border-w-r',
                'border-w-b',
                'border-w-l'
            ],
            'border-w-x': [
                'border-w-r',
                'border-w-l'
            ],
            'border-w-y': [
                'border-w-t',
                'border-w-b'
            ],
            'border-color': [
                'border-color-s',
                'border-color-e',
                'border-color-t',
                'border-color-r',
                'border-color-b',
                'border-color-l'
            ],
            'border-color-x': [
                'border-color-r',
                'border-color-l'
            ],
            'border-color-y': [
                'border-color-t',
                'border-color-b'
            ],
            'scroll-m': [
                'scroll-mx',
                'scroll-my',
                'scroll-ms',
                'scroll-me',
                'scroll-mt',
                'scroll-mr',
                'scroll-mb',
                'scroll-ml'
            ],
            'scroll-mx': [
                'scroll-mr',
                'scroll-ml'
            ],
            'scroll-my': [
                'scroll-mt',
                'scroll-mb'
            ],
            'scroll-p': [
                'scroll-px',
                'scroll-py',
                'scroll-ps',
                'scroll-pe',
                'scroll-pt',
                'scroll-pr',
                'scroll-pb',
                'scroll-pl'
            ],
            'scroll-px': [
                'scroll-pr',
                'scroll-pl'
            ],
            'scroll-py': [
                'scroll-pt',
                'scroll-pb'
            ],
            touch: [
                'touch-x',
                'touch-y',
                'touch-pz'
            ],
            'touch-x': [
                'touch'
            ],
            'touch-y': [
                'touch'
            ],
            'touch-pz': [
                'touch'
            ]
        },
        conflictingClassGroupModifiers: {
            'font-size': [
                'leading'
            ]
        }
    };
};
/**
 * @param baseConfig Config where other config will be merged into. This object will be mutated.
 * @param configExtension Partial config to merge into the `baseConfig`.
 */ const mergeConfigs = (baseConfig, { cacheSize, prefix, separator, experimentalParseClassName, extend = {}, override = {} })=>{
    overrideProperty(baseConfig, 'cacheSize', cacheSize);
    overrideProperty(baseConfig, 'prefix', prefix);
    overrideProperty(baseConfig, 'separator', separator);
    overrideProperty(baseConfig, 'experimentalParseClassName', experimentalParseClassName);
    for(const configKey in override){
        overrideConfigProperties(baseConfig[configKey], override[configKey]);
    }
    for(const key in extend){
        mergeConfigProperties(baseConfig[key], extend[key]);
    }
    return baseConfig;
};
const overrideProperty = (baseObject, overrideKey, overrideValue)=>{
    if (overrideValue !== undefined) {
        baseObject[overrideKey] = overrideValue;
    }
};
const overrideConfigProperties = (baseObject, overrideObject)=>{
    if (overrideObject) {
        for(const key in overrideObject){
            overrideProperty(baseObject, key, overrideObject[key]);
        }
    }
};
const mergeConfigProperties = (baseObject, mergeObject)=>{
    if (mergeObject) {
        for(const key in mergeObject){
            const mergeValue = mergeObject[key];
            if (mergeValue !== undefined) {
                baseObject[key] = (baseObject[key] || []).concat(mergeValue);
            }
        }
    }
};
const extendTailwindMerge = (configExtension, ...createConfig)=>typeof configExtension === 'function' ? createTailwindMerge(getDefaultConfig, configExtension, ...createConfig) : createTailwindMerge(()=>mergeConfigs(getDefaultConfig(), configExtension), ...createConfig);
const twMerge = /*#__PURE__*/ createTailwindMerge(getDefaultConfig);
;
 //# sourceMappingURL=bundle-mjs.mjs.map
}),
"[project]/rayls-shield-landing-page/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "mergeClasses",
    ()=>mergeClasses,
    "toKebabCase",
    ()=>toKebabCase
]);
const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/rayls-shield-landing-page/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}),
"[project]/rayls-shield-landing-page/node_modules/lucide-react/dist/esm/Icon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]);
});
;
 //# sourceMappingURL=Icon.js.map
}),
"[project]/rayls-shield-landing-page/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/lucide-react/dist/esm/Icon.js [app-ssr] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toKebabCase"])(iconName)}`, className),
            ...props
        }));
    Component.displayName = `${iconName}`;
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}),
"[project]/rayls-shield-landing-page/node_modules/lucide-react/dist/esm/icons/wallet.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Wallet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Wallet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Wallet", [
    [
        "path",
        {
            d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
            key: "18etb6"
        }
    ],
    [
        "path",
        {
            d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",
            key: "xoc0q4"
        }
    ]
]);
;
 //# sourceMappingURL=wallet.js.map
}),
"[project]/rayls-shield-landing-page/node_modules/lucide-react/dist/esm/icons/wallet.js [app-ssr] (ecmascript) <export default as Wallet>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Wallet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/lucide-react/dist/esm/icons/wallet.js [app-ssr] (ecmascript)");
}),
"[project]/rayls-shield-landing-page/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Zap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Zap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Zap", [
    [
        "path",
        {
            d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
            key: "1xq2db"
        }
    ]
]);
;
 //# sourceMappingURL=zap.js.map
}),
"[project]/rayls-shield-landing-page/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Zap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript)");
}),
"[project]/rayls-shield-landing-page/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>CircleCheck
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const CircleCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("CircleCheck", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "m9 12 2 2 4-4",
            key: "dzmm74"
        }
    ]
]);
;
 //# sourceMappingURL=circle-check.js.map
}),
"[project]/rayls-shield-landing-page/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckCircle2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript)");
}),
"[project]/rayls-shield-landing-page/node_modules/lucide-react/dist/esm/icons/circle.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Circle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Circle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Circle", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ]
]);
;
 //# sourceMappingURL=circle.js.map
}),
"[project]/rayls-shield-landing-page/node_modules/lucide-react/dist/esm/icons/circle.js [app-ssr] (ecmascript) <export default as Circle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Circle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/lucide-react/dist/esm/icons/circle.js [app-ssr] (ecmascript)");
}),
"[project]/rayls-shield-landing-page/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>ArrowLeft
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const ArrowLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("ArrowLeft", [
    [
        "path",
        {
            d: "m12 19-7-7 7-7",
            key: "1l729n"
        }
    ],
    [
        "path",
        {
            d: "M19 12H5",
            key: "x3x0zl"
        }
    ]
]);
;
 //# sourceMappingURL=arrow-left.js.map
}),
"[project]/rayls-shield-landing-page/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowLeft",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript)");
}),
"[project]/rayls-shield-landing-page/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>CircleAlert
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const CircleAlert = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("CircleAlert", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "8",
            y2: "12",
            key: "1pkeuh"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12.01",
            y1: "16",
            y2: "16",
            key: "4dfq90"
        }
    ]
]);
;
 //# sourceMappingURL=circle-alert.js.map
}),
"[project]/rayls-shield-landing-page/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlertCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript)");
}),
"[project]/rayls-shield-landing-page/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>ExternalLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const ExternalLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("ExternalLink", [
    [
        "path",
        {
            d: "M15 3h6v6",
            key: "1q9fwt"
        }
    ],
    [
        "path",
        {
            d: "M10 14 21 3",
            key: "gplh6r"
        }
    ],
    [
        "path",
        {
            d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
            key: "a6xqqp"
        }
    ]
]);
;
 //# sourceMappingURL=external-link.js.map
}),
"[project]/rayls-shield-landing-page/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExternalLink",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript)");
}),
"[project]/rayls-shield-landing-page/node_modules/lucide-react/dist/esm/icons/network.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Network
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Network = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Network", [
    [
        "rect",
        {
            x: "16",
            y: "16",
            width: "6",
            height: "6",
            rx: "1",
            key: "4q2zg0"
        }
    ],
    [
        "rect",
        {
            x: "2",
            y: "16",
            width: "6",
            height: "6",
            rx: "1",
            key: "8cvhb9"
        }
    ],
    [
        "rect",
        {
            x: "9",
            y: "2",
            width: "6",
            height: "6",
            rx: "1",
            key: "1egb70"
        }
    ],
    [
        "path",
        {
            d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",
            key: "1jsf9p"
        }
    ],
    [
        "path",
        {
            d: "M12 12V8",
            key: "2874zd"
        }
    ]
]);
;
 //# sourceMappingURL=network.js.map
}),
"[project]/rayls-shield-landing-page/node_modules/lucide-react/dist/esm/icons/network.js [app-ssr] (ecmascript) <export default as Network>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Network",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/lucide-react/dist/esm/icons/network.js [app-ssr] (ecmascript)");
}),
"[project]/rayls-shield-landing-page/node_modules/@noble/hashes/esm/_assert.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bool",
    ()=>bool,
    "bytes",
    ()=>bytes,
    "default",
    ()=>__TURBOPACK__default__export__,
    "exists",
    ()=>exists,
    "hash",
    ()=>hash,
    "number",
    ()=>number,
    "output",
    ()=>output
]);
function number(n) {
    if (!Number.isSafeInteger(n) || n < 0) throw new Error(`Wrong positive integer: ${n}`);
}
function bool(b) {
    if (typeof b !== 'boolean') throw new Error(`Expected boolean, not ${b}`);
}
function bytes(b, ...lengths) {
    if (!(b instanceof Uint8Array)) throw new Error('Expected Uint8Array');
    if (lengths.length > 0 && !lengths.includes(b.length)) throw new Error(`Expected Uint8Array of length ${lengths}, not of length=${b.length}`);
}
function hash(hash) {
    if (typeof hash !== 'function' || typeof hash.create !== 'function') throw new Error('Hash should be wrapped by utils.wrapConstructor');
    number(hash.outputLen);
    number(hash.blockLen);
}
function exists(instance, checkFinished = true) {
    if (instance.destroyed) throw new Error('Hash instance has been destroyed');
    if (checkFinished && instance.finished) throw new Error('Hash#digest() has already been called');
}
function output(out, instance) {
    bytes(out);
    const min = instance.outputLen;
    if (out.length < min) {
        throw new Error(`digestInto() expects output buffer of length at least ${min}`);
    }
}
;
const assert = {
    number,
    bool,
    bytes,
    hash,
    exists,
    output
};
const __TURBOPACK__default__export__ = assert;
 //# sourceMappingURL=_assert.js.map
}),
"[project]/rayls-shield-landing-page/node_modules/@noble/hashes/esm/_u64.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "add",
    ()=>add,
    "add3H",
    ()=>add3H,
    "add3L",
    ()=>add3L,
    "add4H",
    ()=>add4H,
    "add4L",
    ()=>add4L,
    "add5H",
    ()=>add5H,
    "add5L",
    ()=>add5L,
    "default",
    ()=>__TURBOPACK__default__export__,
    "fromBig",
    ()=>fromBig,
    "rotlBH",
    ()=>rotlBH,
    "rotlBL",
    ()=>rotlBL,
    "rotlSH",
    ()=>rotlSH,
    "rotlSL",
    ()=>rotlSL,
    "rotr32H",
    ()=>rotr32H,
    "rotr32L",
    ()=>rotr32L,
    "rotrBH",
    ()=>rotrBH,
    "rotrBL",
    ()=>rotrBL,
    "rotrSH",
    ()=>rotrSH,
    "rotrSL",
    ()=>rotrSL,
    "shrSH",
    ()=>shrSH,
    "shrSL",
    ()=>shrSL,
    "split",
    ()=>split,
    "toBig",
    ()=>toBig
]);
const U32_MASK64 = /* @__PURE__ */ BigInt(2 ** 32 - 1);
const _32n = /* @__PURE__ */ BigInt(32);
// We are not using BigUint64Array, because they are extremely slow as per 2022
function fromBig(n, le = false) {
    if (le) return {
        h: Number(n & U32_MASK64),
        l: Number(n >> _32n & U32_MASK64)
    };
    return {
        h: Number(n >> _32n & U32_MASK64) | 0,
        l: Number(n & U32_MASK64) | 0
    };
}
function split(lst, le = false) {
    let Ah = new Uint32Array(lst.length);
    let Al = new Uint32Array(lst.length);
    for(let i = 0; i < lst.length; i++){
        const { h, l } = fromBig(lst[i], le);
        [Ah[i], Al[i]] = [
            h,
            l
        ];
    }
    return [
        Ah,
        Al
    ];
}
const toBig = (h, l)=>BigInt(h >>> 0) << _32n | BigInt(l >>> 0);
// for Shift in [0, 32)
const shrSH = (h, _l, s)=>h >>> s;
const shrSL = (h, l, s)=>h << 32 - s | l >>> s;
// Right rotate for Shift in [1, 32)
const rotrSH = (h, l, s)=>h >>> s | l << 32 - s;
const rotrSL = (h, l, s)=>h << 32 - s | l >>> s;
// Right rotate for Shift in (32, 64), NOTE: 32 is special case.
const rotrBH = (h, l, s)=>h << 64 - s | l >>> s - 32;
const rotrBL = (h, l, s)=>h >>> s - 32 | l << 64 - s;
// Right rotate for shift===32 (just swaps l&h)
const rotr32H = (_h, l)=>l;
const rotr32L = (h, _l)=>h;
// Left rotate for Shift in [1, 32)
const rotlSH = (h, l, s)=>h << s | l >>> 32 - s;
const rotlSL = (h, l, s)=>l << s | h >>> 32 - s;
// Left rotate for Shift in (32, 64), NOTE: 32 is special case.
const rotlBH = (h, l, s)=>l << s - 32 | h >>> 64 - s;
const rotlBL = (h, l, s)=>h << s - 32 | l >>> 64 - s;
// JS uses 32-bit signed integers for bitwise operations which means we cannot
// simple take carry out of low bit sum by shift, we need to use division.
function add(Ah, Al, Bh, Bl) {
    const l = (Al >>> 0) + (Bl >>> 0);
    return {
        h: Ah + Bh + (l / 2 ** 32 | 0) | 0,
        l: l | 0
    };
}
// Addition with more than 2 elements
const add3L = (Al, Bl, Cl)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
const add3H = (low, Ah, Bh, Ch)=>Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
const add4L = (Al, Bl, Cl, Dl)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
const add4H = (low, Ah, Bh, Ch, Dh)=>Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
const add5L = (Al, Bl, Cl, Dl, El)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
const add5H = (low, Ah, Bh, Ch, Dh, Eh)=>Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;
;
// prettier-ignore
const u64 = {
    fromBig,
    split,
    toBig,
    shrSH,
    shrSL,
    rotrSH,
    rotrSL,
    rotrBH,
    rotrBL,
    rotr32H,
    rotr32L,
    rotlSH,
    rotlSL,
    rotlBH,
    rotlBL,
    add,
    add3L,
    add3H,
    add4L,
    add4H,
    add5H,
    add5L
};
const __TURBOPACK__default__export__ = u64;
 //# sourceMappingURL=_u64.js.map
}),
"[project]/rayls-shield-landing-page/node_modules/@noble/hashes/esm/cryptoNode.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// We use WebCrypto aka globalThis.crypto, which exists in browsers and node.js 16+.
// See utils.ts for details.
// The file will throw on node.js 14 and earlier.
// @ts-ignore
__turbopack_context__.s([
    "crypto",
    ()=>crypto
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
;
const crypto = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ && typeof __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ === 'object' && 'webcrypto' in __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ ? __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__.webcrypto : undefined; //# sourceMappingURL=cryptoNode.js.map
}),
"[project]/rayls-shield-landing-page/node_modules/@noble/hashes/esm/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ // We use WebCrypto aka globalThis.crypto, which exists in browsers and node.js 16+.
// node.js versions earlier than v19 don't declare it in global scope.
// For node.js, package.json#exports field mapping rewrites import
// from `crypto` to `cryptoNode`, which imports native module.
// Makes the utils un-importable in browsers without a bundler.
// Once node.js 18 is deprecated, we can just drop the import.
__turbopack_context__.s([
    "Hash",
    ()=>Hash,
    "asyncLoop",
    ()=>asyncLoop,
    "bytesToHex",
    ()=>bytesToHex,
    "checkOpts",
    ()=>checkOpts,
    "concatBytes",
    ()=>concatBytes,
    "createView",
    ()=>createView,
    "hexToBytes",
    ()=>hexToBytes,
    "isLE",
    ()=>isLE,
    "nextTick",
    ()=>nextTick,
    "randomBytes",
    ()=>randomBytes,
    "rotr",
    ()=>rotr,
    "toBytes",
    ()=>toBytes,
    "u32",
    ()=>u32,
    "u8",
    ()=>u8,
    "utf8ToBytes",
    ()=>utf8ToBytes,
    "wrapConstructor",
    ()=>wrapConstructor,
    "wrapConstructorWithOpts",
    ()=>wrapConstructorWithOpts,
    "wrapXOFConstructorWithOpts",
    ()=>wrapXOFConstructorWithOpts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$cryptoNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/@noble/hashes/esm/cryptoNode.js [app-ssr] (ecmascript)");
;
const u8a = (a)=>a instanceof Uint8Array;
const u8 = (arr)=>new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
const u32 = (arr)=>new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
const createView = (arr)=>new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
const rotr = (word, shift)=>word << 32 - shift | word >>> shift;
const isLE = new Uint8Array(new Uint32Array([
    0x11223344
]).buffer)[0] === 0x44;
if (!isLE) throw new Error('Non little-endian hardware is not supported');
const hexes = /* @__PURE__ */ Array.from({
    length: 256
}, (_, i)=>i.toString(16).padStart(2, '0'));
function bytesToHex(bytes) {
    if (!u8a(bytes)) throw new Error('Uint8Array expected');
    // pre-caching improves the speed 6x
    let hex = '';
    for(let i = 0; i < bytes.length; i++){
        hex += hexes[bytes[i]];
    }
    return hex;
}
function hexToBytes(hex) {
    if (typeof hex !== 'string') throw new Error('hex string expected, got ' + typeof hex);
    const len = hex.length;
    if (len % 2) throw new Error('padded hex string expected, got unpadded hex of length ' + len);
    const array = new Uint8Array(len / 2);
    for(let i = 0; i < array.length; i++){
        const j = i * 2;
        const hexByte = hex.slice(j, j + 2);
        const byte = Number.parseInt(hexByte, 16);
        if (Number.isNaN(byte) || byte < 0) throw new Error('Invalid byte sequence');
        array[i] = byte;
    }
    return array;
}
const nextTick = async ()=>{};
async function asyncLoop(iters, tick, cb) {
    let ts = Date.now();
    for(let i = 0; i < iters; i++){
        cb(i);
        // Date.now() is not monotonic, so in case if clock goes backwards we return return control too
        const diff = Date.now() - ts;
        if (diff >= 0 && diff < tick) continue;
        await nextTick();
        ts += diff;
    }
}
function utf8ToBytes(str) {
    if (typeof str !== 'string') throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
    return new Uint8Array(new TextEncoder().encode(str)); // https://bugzil.la/1681809
}
function toBytes(data) {
    if (typeof data === 'string') data = utf8ToBytes(data);
    if (!u8a(data)) throw new Error(`expected Uint8Array, got ${typeof data}`);
    return data;
}
function concatBytes(...arrays) {
    const r = new Uint8Array(arrays.reduce((sum, a)=>sum + a.length, 0));
    let pad = 0; // walk through each item, ensure they have proper type
    arrays.forEach((a)=>{
        if (!u8a(a)) throw new Error('Uint8Array expected');
        r.set(a, pad);
        pad += a.length;
    });
    return r;
}
class Hash {
    // Safe version that clones internal state
    clone() {
        return this._cloneInto();
    }
}
const toStr = {}.toString;
function checkOpts(defaults, opts) {
    if (opts !== undefined && toStr.call(opts) !== '[object Object]') throw new Error('Options should be object or undefined');
    const merged = Object.assign(defaults, opts);
    return merged;
}
function wrapConstructor(hashCons) {
    const hashC = (msg)=>hashCons().update(toBytes(msg)).digest();
    const tmp = hashCons();
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = ()=>hashCons();
    return hashC;
}
function wrapConstructorWithOpts(hashCons) {
    const hashC = (msg, opts)=>hashCons(opts).update(toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts)=>hashCons(opts);
    return hashC;
}
function wrapXOFConstructorWithOpts(hashCons) {
    const hashC = (msg, opts)=>hashCons(opts).update(toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts)=>hashCons(opts);
    return hashC;
}
function randomBytes(bytesLength = 32) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$cryptoNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["crypto"] && typeof __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$cryptoNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["crypto"].getRandomValues === 'function') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$cryptoNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["crypto"].getRandomValues(new Uint8Array(bytesLength));
    }
    throw new Error('crypto.getRandomValues must be defined');
} //# sourceMappingURL=utils.js.map
}),
"[project]/rayls-shield-landing-page/node_modules/@noble/hashes/esm/sha3.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Keccak",
    ()=>Keccak,
    "keccakP",
    ()=>keccakP,
    "keccak_224",
    ()=>keccak_224,
    "keccak_256",
    ()=>keccak_256,
    "keccak_384",
    ()=>keccak_384,
    "keccak_512",
    ()=>keccak_512,
    "sha3_224",
    ()=>sha3_224,
    "sha3_256",
    ()=>sha3_256,
    "sha3_384",
    ()=>sha3_384,
    "sha3_512",
    ()=>sha3_512,
    "shake128",
    ()=>shake128,
    "shake256",
    ()=>shake256
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/@noble/hashes/esm/_assert.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/@noble/hashes/esm/_u64.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/@noble/hashes/esm/utils.js [app-ssr] (ecmascript)");
;
;
;
// SHA3 (keccak) is based on a new design: basically, the internal state is bigger than output size.
// It's called a sponge function.
// Various per round constants calculations
const [SHA3_PI, SHA3_ROTL, _SHA3_IOTA] = [
    [],
    [],
    []
];
const _0n = /* @__PURE__ */ BigInt(0);
const _1n = /* @__PURE__ */ BigInt(1);
const _2n = /* @__PURE__ */ BigInt(2);
const _7n = /* @__PURE__ */ BigInt(7);
const _256n = /* @__PURE__ */ BigInt(256);
const _0x71n = /* @__PURE__ */ BigInt(0x71);
for(let round = 0, R = _1n, x = 1, y = 0; round < 24; round++){
    // Pi
    [x, y] = [
        y,
        (2 * x + 3 * y) % 5
    ];
    SHA3_PI.push(2 * (5 * y + x));
    // Rotational
    SHA3_ROTL.push((round + 1) * (round + 2) / 2 % 64);
    // Iota
    let t = _0n;
    for(let j = 0; j < 7; j++){
        R = (R << _1n ^ (R >> _7n) * _0x71n) % _256n;
        if (R & _2n) t ^= _1n << (_1n << /* @__PURE__ */ BigInt(j)) - _1n;
    }
    _SHA3_IOTA.push(t);
}
const [SHA3_IOTA_H, SHA3_IOTA_L] = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["split"])(_SHA3_IOTA, true);
// Left rotation (without 0, 32, 64)
const rotlH = (h, l, s)=>s > 32 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotlBH"])(h, l, s) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotlSH"])(h, l, s);
const rotlL = (h, l, s)=>s > 32 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotlBL"])(h, l, s) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotlSL"])(h, l, s);
function keccakP(s, rounds = 24) {
    const B = new Uint32Array(5 * 2);
    // NOTE: all indices are x2 since we store state as u32 instead of u64 (bigints to slow in js)
    for(let round = 24 - rounds; round < 24; round++){
        // Theta θ
        for(let x = 0; x < 10; x++)B[x] = s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40];
        for(let x = 0; x < 10; x += 2){
            const idx1 = (x + 8) % 10;
            const idx0 = (x + 2) % 10;
            const B0 = B[idx0];
            const B1 = B[idx0 + 1];
            const Th = rotlH(B0, B1, 1) ^ B[idx1];
            const Tl = rotlL(B0, B1, 1) ^ B[idx1 + 1];
            for(let y = 0; y < 50; y += 10){
                s[x + y] ^= Th;
                s[x + y + 1] ^= Tl;
            }
        }
        // Rho (ρ) and Pi (π)
        let curH = s[2];
        let curL = s[3];
        for(let t = 0; t < 24; t++){
            const shift = SHA3_ROTL[t];
            const Th = rotlH(curH, curL, shift);
            const Tl = rotlL(curH, curL, shift);
            const PI = SHA3_PI[t];
            curH = s[PI];
            curL = s[PI + 1];
            s[PI] = Th;
            s[PI + 1] = Tl;
        }
        // Chi (χ)
        for(let y = 0; y < 50; y += 10){
            for(let x = 0; x < 10; x++)B[x] = s[y + x];
            for(let x = 0; x < 10; x++)s[y + x] ^= ~B[(x + 2) % 10] & B[(x + 4) % 10];
        }
        // Iota (ι)
        s[0] ^= SHA3_IOTA_H[round];
        s[1] ^= SHA3_IOTA_L[round];
    }
    B.fill(0);
}
class Keccak extends __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Hash"] {
    // NOTE: we accept arguments in bytes instead of bits here.
    constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24){
        super();
        this.blockLen = blockLen;
        this.suffix = suffix;
        this.outputLen = outputLen;
        this.enableXOF = enableXOF;
        this.rounds = rounds;
        this.pos = 0;
        this.posOut = 0;
        this.finished = false;
        this.destroyed = false;
        // Can be passed from user as dkLen
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"])(outputLen);
        // 1600 = 5x5 matrix of 64bit.  1600 bits === 200 bytes
        if (0 >= this.blockLen || this.blockLen >= 200) throw new Error('Sha3 supports only keccak-f1600 function');
        this.state = new Uint8Array(200);
        this.state32 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u32"])(this.state);
    }
    keccak() {
        keccakP(this.state32, this.rounds);
        this.posOut = 0;
        this.pos = 0;
    }
    update(data) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exists"])(this);
        const { blockLen, state } = this;
        data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBytes"])(data);
        const len = data.length;
        for(let pos = 0; pos < len;){
            const take = Math.min(blockLen - this.pos, len - pos);
            for(let i = 0; i < take; i++)state[this.pos++] ^= data[pos++];
            if (this.pos === blockLen) this.keccak();
        }
        return this;
    }
    finish() {
        if (this.finished) return;
        this.finished = true;
        const { state, suffix, pos, blockLen } = this;
        // Do the padding
        state[pos] ^= suffix;
        if ((suffix & 0x80) !== 0 && pos === blockLen - 1) this.keccak();
        state[blockLen - 1] ^= 0x80;
        this.keccak();
    }
    writeInto(out) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exists"])(this, false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bytes"])(out);
        this.finish();
        const bufferOut = this.state;
        const { blockLen } = this;
        for(let pos = 0, len = out.length; pos < len;){
            if (this.posOut >= blockLen) this.keccak();
            const take = Math.min(blockLen - this.posOut, len - pos);
            out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
            this.posOut += take;
            pos += take;
        }
        return out;
    }
    xofInto(out) {
        // Sha3/Keccak usage with XOF is probably mistake, only SHAKE instances can do XOF
        if (!this.enableXOF) throw new Error('XOF is not possible for this instance');
        return this.writeInto(out);
    }
    xof(bytes) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"])(bytes);
        return this.xofInto(new Uint8Array(bytes));
    }
    digestInto(out) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["output"])(out, this);
        if (this.finished) throw new Error('digest() was already called');
        this.writeInto(out);
        this.destroy();
        return out;
    }
    digest() {
        return this.digestInto(new Uint8Array(this.outputLen));
    }
    destroy() {
        this.destroyed = true;
        this.state.fill(0);
    }
    _cloneInto(to) {
        const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
        to || (to = new Keccak(blockLen, suffix, outputLen, enableXOF, rounds));
        to.state32.set(this.state32);
        to.pos = this.pos;
        to.posOut = this.posOut;
        to.finished = this.finished;
        to.rounds = rounds;
        // Suffix can change in cSHAKE
        to.suffix = suffix;
        to.outputLen = outputLen;
        to.enableXOF = enableXOF;
        to.destroyed = this.destroyed;
        return to;
    }
}
const gen = (suffix, blockLen, outputLen)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wrapConstructor"])(()=>new Keccak(blockLen, suffix, outputLen));
const sha3_224 = /* @__PURE__ */ gen(0x06, 144, 224 / 8);
const sha3_256 = /* @__PURE__ */ gen(0x06, 136, 256 / 8);
const sha3_384 = /* @__PURE__ */ gen(0x06, 104, 384 / 8);
const sha3_512 = /* @__PURE__ */ gen(0x06, 72, 512 / 8);
const keccak_224 = /* @__PURE__ */ gen(0x01, 144, 224 / 8);
const keccak_256 = /* @__PURE__ */ gen(0x01, 136, 256 / 8);
const keccak_384 = /* @__PURE__ */ gen(0x01, 104, 384 / 8);
const keccak_512 = /* @__PURE__ */ gen(0x01, 72, 512 / 8);
const genShake = (suffix, blockLen, outputLen)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wrapXOFConstructorWithOpts"])((opts = {})=>new Keccak(blockLen, suffix, opts.dkLen === undefined ? outputLen : opts.dkLen, true));
const shake128 = /* @__PURE__ */ genShake(0x1f, 168, 128 / 8);
const shake256 = /* @__PURE__ */ genShake(0x1f, 136, 256 / 8); //# sourceMappingURL=sha3.js.map
}),
"[project]/rayls-shield-landing-page/node_modules/@noble/hashes/esm/_sha2.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SHA2",
    ()=>SHA2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/@noble/hashes/esm/_assert.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/@noble/hashes/esm/utils.js [app-ssr] (ecmascript)");
;
;
// Polyfill for Safari 14
function setBigUint64(view, byteOffset, value, isLE) {
    if (typeof view.setBigUint64 === 'function') return view.setBigUint64(byteOffset, value, isLE);
    const _32n = BigInt(32);
    const _u32_max = BigInt(0xffffffff);
    const wh = Number(value >> _32n & _u32_max);
    const wl = Number(value & _u32_max);
    const h = isLE ? 4 : 0;
    const l = isLE ? 0 : 4;
    view.setUint32(byteOffset + h, wh, isLE);
    view.setUint32(byteOffset + l, wl, isLE);
}
class SHA2 extends __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Hash"] {
    constructor(blockLen, outputLen, padOffset, isLE){
        super();
        this.blockLen = blockLen;
        this.outputLen = outputLen;
        this.padOffset = padOffset;
        this.isLE = isLE;
        this.finished = false;
        this.length = 0;
        this.pos = 0;
        this.destroyed = false;
        this.buffer = new Uint8Array(blockLen);
        this.view = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createView"])(this.buffer);
    }
    update(data) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exists"])(this);
        const { view, buffer, blockLen } = this;
        data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBytes"])(data);
        const len = data.length;
        for(let pos = 0; pos < len;){
            const take = Math.min(blockLen - this.pos, len - pos);
            // Fast path: we have at least one block in input, cast it to view and process
            if (take === blockLen) {
                const dataView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createView"])(data);
                for(; blockLen <= len - pos; pos += blockLen)this.process(dataView, pos);
                continue;
            }
            buffer.set(data.subarray(pos, pos + take), this.pos);
            this.pos += take;
            pos += take;
            if (this.pos === blockLen) {
                this.process(view, 0);
                this.pos = 0;
            }
        }
        this.length += data.length;
        this.roundClean();
        return this;
    }
    digestInto(out) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exists"])(this);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["output"])(out, this);
        this.finished = true;
        // Padding
        // We can avoid allocation of buffer for padding completely if it
        // was previously not allocated here. But it won't change performance.
        const { buffer, view, blockLen, isLE } = this;
        let { pos } = this;
        // append the bit '1' to the message
        buffer[pos++] = 0b10000000;
        this.buffer.subarray(pos).fill(0);
        // we have less than padOffset left in buffer, so we cannot put length in current block, need process it and pad again
        if (this.padOffset > blockLen - pos) {
            this.process(view, 0);
            pos = 0;
        }
        // Pad until full block byte with zeros
        for(let i = pos; i < blockLen; i++)buffer[i] = 0;
        // Note: sha512 requires length to be 128bit integer, but length in JS will overflow before that
        // You need to write around 2 exabytes (u64_max / 8 / (1024**6)) for this to happen.
        // So we just write lowest 64 bits of that value.
        setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE);
        this.process(view, 0);
        const oview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createView"])(out);
        const len = this.outputLen;
        // NOTE: we do division by 4 later, which should be fused in single op with modulo by JIT
        if (len % 4) throw new Error('_sha2: outputLen should be aligned to 32bit');
        const outLen = len / 4;
        const state = this.get();
        if (outLen > state.length) throw new Error('_sha2: outputLen bigger than state');
        for(let i = 0; i < outLen; i++)oview.setUint32(4 * i, state[i], isLE);
    }
    digest() {
        const { buffer, outputLen } = this;
        this.digestInto(buffer);
        const res = buffer.slice(0, outputLen);
        this.destroy();
        return res;
    }
    _cloneInto(to) {
        to || (to = new this.constructor());
        to.set(...this.get());
        const { blockLen, buffer, length, finished, destroyed, pos } = this;
        to.length = length;
        to.pos = pos;
        to.finished = finished;
        to.destroyed = destroyed;
        if (length % blockLen) to.buffer.set(buffer);
        return to;
    }
} //# sourceMappingURL=_sha2.js.map
}),
"[project]/rayls-shield-landing-page/node_modules/@noble/hashes/esm/sha256.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sha224",
    ()=>sha224,
    "sha256",
    ()=>sha256
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_sha2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/@noble/hashes/esm/_sha2.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/@noble/hashes/esm/utils.js [app-ssr] (ecmascript)");
;
;
// SHA2-256 need to try 2^128 hashes to execute birthday attack.
// BTC network is doing 2^67 hashes/sec as per early 2023.
// Choice: a ? b : c
const Chi = (a, b, c)=>a & b ^ ~a & c;
// Majority function, true if any two inpust is true
const Maj = (a, b, c)=>a & b ^ a & c ^ b & c;
// Round constants:
// first 32 bits of the fractional parts of the cube roots of the first 64 primes 2..311)
// prettier-ignore
const SHA256_K = /* @__PURE__ */ new Uint32Array([
    0x428a2f98,
    0x71374491,
    0xb5c0fbcf,
    0xe9b5dba5,
    0x3956c25b,
    0x59f111f1,
    0x923f82a4,
    0xab1c5ed5,
    0xd807aa98,
    0x12835b01,
    0x243185be,
    0x550c7dc3,
    0x72be5d74,
    0x80deb1fe,
    0x9bdc06a7,
    0xc19bf174,
    0xe49b69c1,
    0xefbe4786,
    0x0fc19dc6,
    0x240ca1cc,
    0x2de92c6f,
    0x4a7484aa,
    0x5cb0a9dc,
    0x76f988da,
    0x983e5152,
    0xa831c66d,
    0xb00327c8,
    0xbf597fc7,
    0xc6e00bf3,
    0xd5a79147,
    0x06ca6351,
    0x14292967,
    0x27b70a85,
    0x2e1b2138,
    0x4d2c6dfc,
    0x53380d13,
    0x650a7354,
    0x766a0abb,
    0x81c2c92e,
    0x92722c85,
    0xa2bfe8a1,
    0xa81a664b,
    0xc24b8b70,
    0xc76c51a3,
    0xd192e819,
    0xd6990624,
    0xf40e3585,
    0x106aa070,
    0x19a4c116,
    0x1e376c08,
    0x2748774c,
    0x34b0bcb5,
    0x391c0cb3,
    0x4ed8aa4a,
    0x5b9cca4f,
    0x682e6ff3,
    0x748f82ee,
    0x78a5636f,
    0x84c87814,
    0x8cc70208,
    0x90befffa,
    0xa4506ceb,
    0xbef9a3f7,
    0xc67178f2
]);
// Initial state (first 32 bits of the fractional parts of the square roots of the first 8 primes 2..19):
// prettier-ignore
const IV = /* @__PURE__ */ new Uint32Array([
    0x6a09e667,
    0xbb67ae85,
    0x3c6ef372,
    0xa54ff53a,
    0x510e527f,
    0x9b05688c,
    0x1f83d9ab,
    0x5be0cd19
]);
// Temporary buffer, not used to store anything between runs
// Named this way because it matches specification.
const SHA256_W = /* @__PURE__ */ new Uint32Array(64);
class SHA256 extends __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_sha2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA2"] {
    constructor(){
        super(64, 32, 8, false);
        // We cannot use array here since array allows indexing by variable
        // which means optimizer/compiler cannot use registers.
        this.A = IV[0] | 0;
        this.B = IV[1] | 0;
        this.C = IV[2] | 0;
        this.D = IV[3] | 0;
        this.E = IV[4] | 0;
        this.F = IV[5] | 0;
        this.G = IV[6] | 0;
        this.H = IV[7] | 0;
    }
    get() {
        const { A, B, C, D, E, F, G, H } = this;
        return [
            A,
            B,
            C,
            D,
            E,
            F,
            G,
            H
        ];
    }
    // prettier-ignore
    set(A, B, C, D, E, F, G, H) {
        this.A = A | 0;
        this.B = B | 0;
        this.C = C | 0;
        this.D = D | 0;
        this.E = E | 0;
        this.F = F | 0;
        this.G = G | 0;
        this.H = H | 0;
    }
    process(view, offset) {
        // Extend the first 16 words into the remaining 48 words w[16..63] of the message schedule array
        for(let i = 0; i < 16; i++, offset += 4)SHA256_W[i] = view.getUint32(offset, false);
        for(let i = 16; i < 64; i++){
            const W15 = SHA256_W[i - 15];
            const W2 = SHA256_W[i - 2];
            const s0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotr"])(W15, 7) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotr"])(W15, 18) ^ W15 >>> 3;
            const s1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotr"])(W2, 17) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotr"])(W2, 19) ^ W2 >>> 10;
            SHA256_W[i] = s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16] | 0;
        }
        // Compression function main loop, 64 rounds
        let { A, B, C, D, E, F, G, H } = this;
        for(let i = 0; i < 64; i++){
            const sigma1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotr"])(E, 6) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotr"])(E, 11) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotr"])(E, 25);
            const T1 = H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i] | 0;
            const sigma0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotr"])(A, 2) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotr"])(A, 13) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotr"])(A, 22);
            const T2 = sigma0 + Maj(A, B, C) | 0;
            H = G;
            G = F;
            F = E;
            E = D + T1 | 0;
            D = C;
            C = B;
            B = A;
            A = T1 + T2 | 0;
        }
        // Add the compressed chunk to the current hash value
        A = A + this.A | 0;
        B = B + this.B | 0;
        C = C + this.C | 0;
        D = D + this.D | 0;
        E = E + this.E | 0;
        F = F + this.F | 0;
        G = G + this.G | 0;
        H = H + this.H | 0;
        this.set(A, B, C, D, E, F, G, H);
    }
    roundClean() {
        SHA256_W.fill(0);
    }
    destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0);
        this.buffer.fill(0);
    }
}
// Constants from https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf
class SHA224 extends SHA256 {
    constructor(){
        super();
        this.A = 0xc1059ed8 | 0;
        this.B = 0x367cd507 | 0;
        this.C = 0x3070dd17 | 0;
        this.D = 0xf70e5939 | 0;
        this.E = 0xffc00b31 | 0;
        this.F = 0x68581511 | 0;
        this.G = 0x64f98fa7 | 0;
        this.H = 0xbefa4fa4 | 0;
        this.outputLen = 28;
    }
}
const sha256 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wrapConstructor"])(()=>new SHA256());
const sha224 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wrapConstructor"])(()=>new SHA224()); //# sourceMappingURL=sha256.js.map
}),
"[project]/rayls-shield-landing-page/node_modules/@noble/hashes/esm/hmac.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HMAC",
    ()=>HMAC,
    "hmac",
    ()=>hmac
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/@noble/hashes/esm/_assert.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/@noble/hashes/esm/utils.js [app-ssr] (ecmascript)");
;
;
class HMAC extends __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Hash"] {
    constructor(hash, _key){
        super();
        this.finished = false;
        this.destroyed = false;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hash"])(hash);
        const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBytes"])(_key);
        this.iHash = hash.create();
        if (typeof this.iHash.update !== 'function') throw new Error('Expected instance of class which extends utils.Hash');
        this.blockLen = this.iHash.blockLen;
        this.outputLen = this.iHash.outputLen;
        const blockLen = this.blockLen;
        const pad = new Uint8Array(blockLen);
        // blockLen can be bigger than outputLen
        pad.set(key.length > blockLen ? hash.create().update(key).digest() : key);
        for(let i = 0; i < pad.length; i++)pad[i] ^= 0x36;
        this.iHash.update(pad);
        // By doing update (processing of first block) of outer hash here we can re-use it between multiple calls via clone
        this.oHash = hash.create();
        // Undo internal XOR && apply outer XOR
        for(let i = 0; i < pad.length; i++)pad[i] ^= 0x36 ^ 0x5c;
        this.oHash.update(pad);
        pad.fill(0);
    }
    update(buf) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exists"])(this);
        this.iHash.update(buf);
        return this;
    }
    digestInto(out) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exists"])(this);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bytes"])(out, this.outputLen);
        this.finished = true;
        this.iHash.digestInto(out);
        this.oHash.update(out);
        this.oHash.digestInto(out);
        this.destroy();
    }
    digest() {
        const out = new Uint8Array(this.oHash.outputLen);
        this.digestInto(out);
        return out;
    }
    _cloneInto(to) {
        // Create new instance without calling constructor since key already in state and we don't know it.
        to || (to = Object.create(Object.getPrototypeOf(this), {}));
        const { oHash, iHash, finished, destroyed, blockLen, outputLen } = this;
        to = to;
        to.finished = finished;
        to.destroyed = destroyed;
        to.blockLen = blockLen;
        to.outputLen = outputLen;
        to.oHash = oHash._cloneInto(to.oHash);
        to.iHash = iHash._cloneInto(to.iHash);
        return to;
    }
    destroy() {
        this.destroyed = true;
        this.oHash.destroy();
        this.iHash.destroy();
    }
}
const hmac = (hash, key, message)=>new HMAC(hash, key).update(message).digest();
hmac.create = (hash, key)=>new HMAC(hash, key); //# sourceMappingURL=hmac.js.map
}),
"[project]/rayls-shield-landing-page/node_modules/@adraffy/ens-normalize/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// created 2023-09-25T01:01:55.148Z
// compressed base64-encoded blob for include-ens data
// source: https://github.com/adraffy/ens-normalize.js/blob/main/src/make.js
// see: https://github.com/adraffy/ens-normalize.js#security
// SHA-256: 0565ed049b9cf1614bb9e11ba7d8ac6a6fb96c893253d890f7e2b2884b9ded32
__turbopack_context__.s([
    "ens_beautify",
    ()=>ens_beautify,
    "ens_emoji",
    ()=>ens_emoji,
    "ens_normalize",
    ()=>ens_normalize,
    "ens_normalize_fragment",
    ()=>ens_normalize_fragment,
    "ens_split",
    ()=>ens_split,
    "ens_tokenize",
    ()=>ens_tokenize,
    "is_combining_mark",
    ()=>is_combining_mark,
    "nfc",
    ()=>nfc,
    "nfd",
    ()=>nfd,
    "safe_str_from_cps",
    ()=>safe_str_from_cps,
    "should_escape",
    ()=>should_escape
]);
var COMPRESSED$1 = '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';
const FENCED = new Map([
    [
        8217,
        "apostrophe"
    ],
    [
        8260,
        "fraction slash"
    ],
    [
        12539,
        "middle dot"
    ]
]);
const NSM_MAX = 4;
function decode_arithmetic(bytes) {
    let pos = 0;
    function u16() {
        return bytes[pos++] << 8 | bytes[pos++];
    }
    // decode the frequency table
    let symbol_count = u16();
    let total = 1;
    let acc = [
        0,
        1
    ]; // first symbol has frequency 1
    for(let i = 1; i < symbol_count; i++){
        acc.push(total += u16());
    }
    // skip the sized-payload that the last 3 symbols index into
    let skip = u16();
    let pos_payload = pos;
    pos += skip;
    let read_width = 0;
    let read_buffer = 0;
    function read_bit() {
        if (read_width == 0) {
            // this will read beyond end of buffer
            // but (undefined|0) => zero pad
            read_buffer = read_buffer << 8 | bytes[pos++];
            read_width = 8;
        }
        return read_buffer >> --read_width & 1;
    }
    const N = 31;
    const FULL = 2 ** N;
    const HALF = FULL >>> 1;
    const QRTR = HALF >> 1;
    const MASK = FULL - 1;
    // fill register
    let register = 0;
    for(let i = 0; i < N; i++)register = register << 1 | read_bit();
    let symbols = [];
    let low = 0;
    let range = FULL; // treat like a float
    while(true){
        let value = Math.floor(((register - low + 1) * total - 1) / range);
        let start = 0;
        let end = symbol_count;
        while(end - start > 1){
            let mid = start + end >>> 1;
            if (value < acc[mid]) {
                end = mid;
            } else {
                start = mid;
            }
        }
        if (start == 0) break; // first symbol is end mark
        symbols.push(start);
        let a = low + Math.floor(range * acc[start] / total);
        let b = low + Math.floor(range * acc[start + 1] / total) - 1;
        while(((a ^ b) & HALF) == 0){
            register = register << 1 & MASK | read_bit();
            a = a << 1 & MASK;
            b = b << 1 & MASK | 1;
        }
        while(a & ~b & QRTR){
            register = register & HALF | register << 1 & MASK >>> 1 | read_bit();
            a = a << 1 ^ HALF;
            b = (b ^ HALF) << 1 | HALF | 1;
        }
        low = a;
        range = 1 + b - a;
    }
    let offset = symbol_count - 4;
    return symbols.map((x)=>{
        switch(x - offset){
            case 3:
                return offset + 0x10100 + (bytes[pos_payload++] << 16 | bytes[pos_payload++] << 8 | bytes[pos_payload++]);
            case 2:
                return offset + 0x100 + (bytes[pos_payload++] << 8 | bytes[pos_payload++]);
            case 1:
                return offset + bytes[pos_payload++];
            default:
                return x - 1;
        }
    });
}
// returns an iterator which returns the next symbol
function read_payload(v) {
    let pos = 0;
    return ()=>v[pos++];
}
function read_compressed_payload(s) {
    return read_payload(decode_arithmetic(unsafe_atob(s)));
}
// unsafe in the sense:
// expected well-formed Base64 w/o padding 
// 20220922: added for https://github.com/adraffy/ens-normalize.js/issues/4
function unsafe_atob(s) {
    let lookup = [];
    [
        ...'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
    ].forEach((c, i)=>lookup[c.charCodeAt(0)] = i);
    let n = s.length;
    let ret = new Uint8Array(6 * n >> 3);
    for(let i = 0, pos = 0, width = 0, carry = 0; i < n; i++){
        carry = carry << 6 | lookup[s.charCodeAt(i)];
        width += 6;
        if (width >= 8) {
            ret[pos++] = carry >> (width -= 8);
        }
    }
    return ret;
}
// eg. [0,1,2,3...] => [0,-1,1,-2,...]
function signed(i) {
    return i & 1 ? ~i >> 1 : i >> 1;
}
function read_deltas(n, next) {
    let v = Array(n);
    for(let i = 0, x = 0; i < n; i++)v[i] = x += signed(next());
    return v;
}
// [123][5] => [0 3] [1 1] [0 0]
function read_sorted(next, prev = 0) {
    let ret = [];
    while(true){
        let x = next();
        let n = next();
        if (!n) break;
        prev += x;
        for(let i = 0; i < n; i++){
            ret.push(prev + i);
        }
        prev += n + 1;
    }
    return ret;
}
function read_sorted_arrays(next) {
    return read_array_while(()=>{
        let v = read_sorted(next);
        if (v.length) return v;
    });
}
// returns map of x => ys
function read_mapped(next) {
    let ret = [];
    while(true){
        let w = next();
        if (w == 0) break;
        ret.push(read_linear_table(w, next));
    }
    while(true){
        let w = next() - 1;
        if (w < 0) break;
        ret.push(read_replacement_table(w, next));
    }
    return ret.flat();
}
// read until next is falsy
// return array of read values
function read_array_while(next) {
    let v = [];
    while(true){
        let x = next(v.length);
        if (!x) break;
        v.push(x);
    }
    return v;
}
// read w columns of length n
// return as n rows of length w
function read_transposed(n, w, next) {
    let m = Array(n).fill().map(()=>[]);
    for(let i = 0; i < w; i++){
        read_deltas(n, next).forEach((x, j)=>m[j].push(x));
    }
    return m;
}
// returns [[x, ys], [x+dx, ys+dy], [x+2*dx, ys+2*dy], ...]
// where dx/dy = steps, n = run size, w = length of y
function read_linear_table(w, next) {
    let dx = 1 + next();
    let dy = next();
    let vN = read_array_while(next);
    let m = read_transposed(vN.length, 1 + w, next);
    return m.flatMap((v, i)=>{
        let [x, ...ys] = v;
        return Array(vN[i]).fill().map((_, j)=>{
            let j_dy = j * dy;
            return [
                x + j * dx,
                ys.map((y)=>y + j_dy)
            ];
        });
    });
}
// return [[x, ys...], ...]
// where w = length of y
function read_replacement_table(w, next) {
    let n = 1 + next();
    let m = read_transposed(n, 1 + w, next);
    return m.map((v)=>[
            v[0],
            v.slice(1)
        ]);
}
function read_trie(next) {
    let ret = [];
    let sorted = read_sorted(next);
    expand(decode([]), []);
    return ret; // not sorted
    //TURBOPACK unreachable
    ;
    function decode(Q) {
        let S = next(); // state: valid, save, check
        let B = read_array_while(()=>{
            let cps = read_sorted(next).map((i)=>sorted[i]);
            if (cps.length) return decode(cps);
        });
        return {
            S,
            B,
            Q
        };
    }
    function expand({ S, B }, cps, saved) {
        if (S & 4 && saved === cps[cps.length - 1]) return;
        if (S & 2) saved = cps[cps.length - 1];
        if (S & 1) ret.push(cps);
        for (let br of B){
            for (let cp of br.Q){
                expand(br, [
                    ...cps,
                    cp
                ], saved);
            }
        }
    }
}
function hex_cp(cp) {
    return cp.toString(16).toUpperCase().padStart(2, '0');
}
function quote_cp(cp) {
    return `{${hex_cp(cp)}}`; // raffy convention: like "\u{X}" w/o the "\u"
}
/*
export function explode_cp(s) {
	return [...s].map(c => c.codePointAt(0));
}
*/ function explode_cp(s) {
    let cps = [];
    for(let pos = 0, len = s.length; pos < len;){
        let cp = s.codePointAt(pos);
        pos += cp < 0x10000 ? 1 : 2;
        cps.push(cp);
    }
    return cps;
}
function str_from_cps(cps) {
    const chunk = 4096;
    let len = cps.length;
    if (len < chunk) return String.fromCodePoint(...cps);
    let buf = [];
    for(let i = 0; i < len;){
        buf.push(String.fromCodePoint(...cps.slice(i, i += chunk)));
    }
    return buf.join('');
}
function compare_arrays(a, b) {
    let n = a.length;
    let c = n - b.length;
    for(let i = 0; c == 0 && i < n; i++)c = a[i] - b[i];
    return c;
}
// created 2023-09-25T01:01:55.148Z
// compressed base64-encoded blob for include-nf data
// source: https://github.com/adraffy/ens-normalize.js/blob/main/src/make.js
// see: https://github.com/adraffy/ens-normalize.js#security
// SHA-256: a974b6f8541fc29d919bc85118af0a44015851fab5343f8679cb31be2bdb209e
var COMPRESSED = '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';
// https://unicode.org/reports/tr15/
// for reference implementation
// see: /derive/nf.js
// algorithmic hangul
// https://www.unicode.org/versions/Unicode15.0.0/ch03.pdf (page 144)
const S0 = 0xAC00;
const L0 = 0x1100;
const V0 = 0x1161;
const T0 = 0x11A7;
const L_COUNT = 19;
const V_COUNT = 21;
const T_COUNT = 28;
const N_COUNT = V_COUNT * T_COUNT;
const S_COUNT = L_COUNT * N_COUNT;
const S1 = S0 + S_COUNT;
const L1 = L0 + L_COUNT;
const V1 = V0 + V_COUNT;
const T1 = T0 + T_COUNT;
function unpack_cc(packed) {
    return packed >> 24 & 0xFF;
}
function unpack_cp(packed) {
    return packed & 0xFFFFFF;
}
let SHIFTED_RANK, EXCLUSIONS, DECOMP, RECOMP;
function init$1() {
    //console.time('nf');
    let r = read_compressed_payload(COMPRESSED);
    SHIFTED_RANK = new Map(read_sorted_arrays(r).flatMap((v, i)=>v.map((x)=>[
                x,
                i + 1 << 24
            ]))); // pre-shifted
    EXCLUSIONS = new Set(read_sorted(r));
    DECOMP = new Map();
    RECOMP = new Map();
    for (let [cp, cps] of read_mapped(r)){
        if (!EXCLUSIONS.has(cp) && cps.length == 2) {
            let [a, b] = cps;
            let bucket = RECOMP.get(a);
            if (!bucket) {
                bucket = new Map();
                RECOMP.set(a, bucket);
            }
            bucket.set(b, cp);
        }
        DECOMP.set(cp, cps.reverse()); // stored reversed
    }
//console.timeEnd('nf');
// 20230905: 11ms
}
function is_hangul(cp) {
    return cp >= S0 && cp < S1;
}
function compose_pair(a, b) {
    if (a >= L0 && a < L1 && b >= V0 && b < V1) {
        return S0 + (a - L0) * N_COUNT + (b - V0) * T_COUNT;
    } else if (is_hangul(a) && b > T0 && b < T1 && (a - S0) % T_COUNT == 0) {
        return a + (b - T0);
    } else {
        let recomp = RECOMP.get(a);
        if (recomp) {
            recomp = recomp.get(b);
            if (recomp) {
                return recomp;
            }
        }
        return -1;
    }
}
function decomposed(cps) {
    if (!SHIFTED_RANK) init$1();
    let ret = [];
    let buf = [];
    let check_order = false;
    function add(cp) {
        let cc = SHIFTED_RANK.get(cp);
        if (cc) {
            check_order = true;
            cp |= cc;
        }
        ret.push(cp);
    }
    for (let cp of cps){
        while(true){
            if (cp < 0x80) {
                ret.push(cp);
            } else if (is_hangul(cp)) {
                let s_index = cp - S0;
                let l_index = s_index / N_COUNT | 0;
                let v_index = s_index % N_COUNT / T_COUNT | 0;
                let t_index = s_index % T_COUNT;
                add(L0 + l_index);
                add(V0 + v_index);
                if (t_index > 0) add(T0 + t_index);
            } else {
                let mapped = DECOMP.get(cp);
                if (mapped) {
                    buf.push(...mapped);
                } else {
                    add(cp);
                }
            }
            if (!buf.length) break;
            cp = buf.pop();
        }
    }
    if (check_order && ret.length > 1) {
        let prev_cc = unpack_cc(ret[0]);
        for(let i = 1; i < ret.length; i++){
            let cc = unpack_cc(ret[i]);
            if (cc == 0 || prev_cc <= cc) {
                prev_cc = cc;
                continue;
            }
            let j = i - 1;
            while(true){
                let tmp = ret[j + 1];
                ret[j + 1] = ret[j];
                ret[j] = tmp;
                if (!j) break;
                prev_cc = unpack_cc(ret[--j]);
                if (prev_cc <= cc) break;
            }
            prev_cc = unpack_cc(ret[i]);
        }
    }
    return ret;
}
function composed_from_decomposed(v) {
    let ret = [];
    let stack = [];
    let prev_cp = -1;
    let prev_cc = 0;
    for (let packed of v){
        let cc = unpack_cc(packed);
        let cp = unpack_cp(packed);
        if (prev_cp == -1) {
            if (cc == 0) {
                prev_cp = cp;
            } else {
                ret.push(cp);
            }
        } else if (prev_cc > 0 && prev_cc >= cc) {
            if (cc == 0) {
                ret.push(prev_cp, ...stack);
                stack.length = 0;
                prev_cp = cp;
            } else {
                stack.push(cp);
            }
            prev_cc = cc;
        } else {
            let composed = compose_pair(prev_cp, cp);
            if (composed >= 0) {
                prev_cp = composed;
            } else if (prev_cc == 0 && cc == 0) {
                ret.push(prev_cp);
                prev_cp = cp;
            } else {
                stack.push(cp);
                prev_cc = cc;
            }
        }
    }
    if (prev_cp >= 0) {
        ret.push(prev_cp, ...stack);
    }
    return ret;
}
// note: cps can be iterable
function nfd(cps) {
    return decomposed(cps).map(unpack_cp);
}
function nfc(cps) {
    return composed_from_decomposed(decomposed(cps));
}
const HYPHEN = 0x2D;
const STOP = 0x2E;
const STOP_CH = '.';
const FE0F = 0xFE0F;
const UNIQUE_PH = 1;
// 20230913: replace [...v] with Array_from(v) to avoid large spreads
const Array_from = (x)=>Array.from(x); // Array.from.bind(Array);
function group_has_cp(g, cp) {
    // 20230913: keep primary and secondary distinct instead of creating valid union
    return g.P.has(cp) || g.Q.has(cp);
}
class Emoji extends Array {
    get is_emoji() {
        return true;
    }
}
let MAPPED, IGNORED, CM, NSM, ESCAPE, NFC_CHECK, GROUPS, WHOLE_VALID, WHOLE_MAP, VALID, EMOJI_LIST, EMOJI_ROOT;
function init() {
    if (MAPPED) return;
    let r = read_compressed_payload(COMPRESSED$1);
    const read_sorted_array = ()=>read_sorted(r);
    const read_sorted_set = ()=>new Set(read_sorted_array());
    const set_add_many = (set, v)=>v.forEach((x)=>set.add(x));
    MAPPED = new Map(read_mapped(r));
    IGNORED = read_sorted_set(); // ignored characters are not valid, so just read raw codepoints
    /*
	// direct include from payload is smaller than the decompression code
	const FENCED = new Map(read_array_while(() => {
		let cp = r();
		if (cp) return [cp, read_str(r())];
	}));
	*/ // 20230217: we still need all CM for proper error formatting
    // but norm only needs NSM subset that are potentially-valid
    CM = read_sorted_array();
    NSM = new Set(read_sorted_array().map((i)=>CM[i]));
    CM = new Set(CM);
    ESCAPE = read_sorted_set(); // characters that should not be printed
    NFC_CHECK = read_sorted_set(); // only needed to illustrate ens_tokenize() transformations
    let chunks = read_sorted_arrays(r);
    let unrestricted = r();
    //const read_chunked = () => new Set(read_sorted_array().flatMap(i => chunks[i]).concat(read_sorted_array()));
    const read_chunked = ()=>{
        // 20230921: build set in parts, 2x faster
        let set = new Set();
        read_sorted_array().forEach((i)=>set_add_many(set, chunks[i]));
        set_add_many(set, read_sorted_array());
        return set;
    };
    GROUPS = read_array_while((i)=>{
        // minifier property mangling seems unsafe
        // so these are manually renamed to single chars
        let N = read_array_while(r).map((x)=>x + 0x60);
        if (N.length) {
            let R = i >= unrestricted; // unrestricted then restricted
            N[0] -= 32; // capitalize
            N = str_from_cps(N);
            if (R) N = `Restricted[${N}]`;
            let P = read_chunked(); // primary
            let Q = read_chunked(); // secondary
            let M = !r(); // not-whitelisted, check for NSM
            // *** this code currently isn't needed ***
            /*
			let V = [...P, ...Q].sort((a, b) => a-b); // derive: sorted valid
			let M = r()-1; // number of combining mark
			if (M < 0) { // whitelisted
				M = new Map(read_array_while(() => {
					let i = r();
					if (i) return [V[i-1], read_array_while(() => {
						let v = read_array_while(r);
						if (v.length) return v.map(x => x-1);
					})];
				}));
			}*/ return {
                N,
                P,
                Q,
                M,
                R
            };
        }
    });
    // decode compressed wholes
    WHOLE_VALID = read_sorted_set();
    WHOLE_MAP = new Map();
    let wholes = read_sorted_array().concat(Array_from(WHOLE_VALID)).sort((a, b)=>a - b); // must be sorted
    wholes.forEach((cp, i)=>{
        let d = r();
        let w = wholes[i] = d ? wholes[i - d] : {
            V: [],
            M: new Map()
        };
        w.V.push(cp); // add to member set
        if (!WHOLE_VALID.has(cp)) {
            WHOLE_MAP.set(cp, w); // register with whole map
        }
    });
    // compute confusable-extent complements
    // usage: WHOLE_MAP.get(cp).M.get(cp) = complement set
    for (let { V, M } of new Set(WHOLE_MAP.values())){
        // connect all groups that have each whole character
        let recs = [];
        for (let cp of V){
            let gs = GROUPS.filter((g)=>group_has_cp(g, cp));
            let rec = recs.find(({ G })=>gs.some((g)=>G.has(g)));
            if (!rec) {
                rec = {
                    G: new Set(),
                    V: []
                };
                recs.push(rec);
            }
            rec.V.push(cp);
            set_add_many(rec.G, gs);
        }
        // per character cache groups which are not a member of the extent
        let union = recs.flatMap((x)=>Array_from(x.G)); // all of the groups used by this whole
        for (let { G, V } of recs){
            let complement = new Set(union.filter((g)=>!G.has(g))); // groups not covered by the extent
            for (let cp of V){
                M.set(cp, complement); // this is the same reference
            }
        }
    }
    // compute valid set
    // 20230924: VALID was union but can be re-used
    VALID = new Set(); // exists in 1+ groups
    let multi = new Set(); // exists in 2+ groups
    const add_to_union = (cp)=>VALID.has(cp) ? multi.add(cp) : VALID.add(cp);
    for (let g of GROUPS){
        for (let cp of g.P)add_to_union(cp);
        for (let cp of g.Q)add_to_union(cp);
    }
    // dual purpose WHOLE_MAP: return placeholder if unique non-confusable
    for (let cp of VALID){
        if (!WHOLE_MAP.has(cp) && !multi.has(cp)) {
            WHOLE_MAP.set(cp, UNIQUE_PH);
        }
    }
    // add all decomposed parts
    // see derive: "Valid is Closed (via Brute-force)"
    set_add_many(VALID, nfd(VALID));
    // decode emoji
    // 20230719: emoji are now fully-expanded to avoid quirk logic 
    EMOJI_LIST = read_trie(r).map((v)=>Emoji.from(v)).sort(compare_arrays);
    EMOJI_ROOT = new Map(); // this has approx 7K nodes (2+ per emoji)
    for (let cps of EMOJI_LIST){
        // 20230719: change to *slightly* stricter algorithm which disallows 
        // insertion of misplaced FE0F in emoji sequences (matching ENSIP-15)
        // example: beautified [A B] (eg. flag emoji) 
        //  before: allow: [A FE0F B], error: [A FE0F FE0F B] 
        //   after: error: both
        // note: this code now matches ENSNormalize.{cs,java} logic
        let prev = [
            EMOJI_ROOT
        ];
        for (let cp of cps){
            let next = prev.map((node)=>{
                let child = node.get(cp);
                if (!child) {
                    // should this be object? 
                    // (most have 1-2 items, few have many)
                    // 20230719: no, v8 default map is 4?
                    child = new Map();
                    node.set(cp, child);
                }
                return child;
            });
            if (cp === FE0F) {
                prev.push(...next); // less than 20 elements
            } else {
                prev = next;
            }
        }
        for (let x of prev){
            x.V = cps;
        }
    }
}
// if escaped: {HEX}
//       else: "x" {HEX}
function quoted_cp(cp) {
    return (should_escape(cp) ? '' : `${bidi_qq(safe_str_from_cps([
        cp
    ]))} `) + quote_cp(cp);
}
// 20230211: some messages can be mixed-directional and result in spillover
// use 200E after a quoted string to force the remainder of a string from 
// acquring the direction of the quote
// https://www.w3.org/International/questions/qa-bidi-unicode-controls#exceptions
function bidi_qq(s) {
    return `"${s}"\u200E`; // strong LTR
}
function check_label_extension(cps) {
    if (cps.length >= 4 && cps[2] == HYPHEN && cps[3] == HYPHEN) {
        throw new Error(`invalid label extension: "${str_from_cps(cps.slice(0, 4))}"`); // this can only be ascii so cant be bidi
    }
}
function check_leading_underscore(cps) {
    const UNDERSCORE = 0x5F;
    for(let i = cps.lastIndexOf(UNDERSCORE); i > 0;){
        if (cps[--i] !== UNDERSCORE) {
            throw new Error('underscore allowed only at start');
        }
    }
}
// check that a fenced cp is not leading, trailing, or touching another fenced cp
function check_fenced(cps) {
    let cp = cps[0];
    let prev = FENCED.get(cp);
    if (prev) throw error_placement(`leading ${prev}`);
    let n = cps.length;
    let last = -1; // prevents trailing from throwing
    for(let i = 1; i < n; i++){
        cp = cps[i];
        let match = FENCED.get(cp);
        if (match) {
            // since cps[0] isn't fenced, cps[1] cannot throw
            if (last == i) throw error_placement(`${prev} + ${match}`);
            last = i + 1;
            prev = match;
        }
    }
    if (last == n) throw error_placement(`trailing ${prev}`);
}
// create a safe to print string 
// invisibles are escaped
// leading cm uses placeholder
// if cps exceed max, middle truncate with ellipsis
// quoter(cp) => string, eg. 3000 => "{3000}"
// note: in html, you'd call this function then replace [<>&] with entities
function safe_str_from_cps(cps, max = Infinity, quoter = quote_cp) {
    //if (Number.isInteger(cps)) cps = [cps];
    //if (!Array.isArray(cps)) throw new TypeError(`expected codepoints`);
    let buf = [];
    if (is_combining_mark(cps[0])) buf.push('◌');
    if (cps.length > max) {
        max >>= 1;
        cps = [
            ...cps.slice(0, max),
            0x2026,
            ...cps.slice(-max)
        ];
    }
    let prev = 0;
    let n = cps.length;
    for(let i = 0; i < n; i++){
        let cp = cps[i];
        if (should_escape(cp)) {
            buf.push(str_from_cps(cps.slice(prev, i)));
            buf.push(quoter(cp));
            prev = i + 1;
        }
    }
    buf.push(str_from_cps(cps.slice(prev, n)));
    return buf.join('');
}
// note: set(s) cannot be exposed because they can be modified
// note: Object.freeze() doesn't work
function is_combining_mark(cp) {
    init();
    return CM.has(cp);
}
function should_escape(cp) {
    init();
    return ESCAPE.has(cp);
}
// return all supported emoji as fully-qualified emoji 
// ordered by length then lexicographic 
function ens_emoji() {
    init();
    return EMOJI_LIST.map((x)=>x.slice()); // emoji are exposed so copy
}
function ens_normalize_fragment(frag, decompose) {
    init();
    let nf = decompose ? nfd : nfc;
    return frag.split(STOP_CH).map((label)=>str_from_cps(tokens_from_str(explode_cp(label), nf, filter_fe0f).flat())).join(STOP_CH);
}
function ens_normalize(name) {
    return flatten(split(name, nfc, filter_fe0f));
}
function ens_beautify(name) {
    let labels = split(name, nfc, (x)=>x); // emoji not exposed
    for (let { type, output, error } of labels){
        if (error) break; // flatten will throw
        // replace leading/trailing hyphen
        // 20230121: consider beautifing all or leading/trailing hyphen to unicode variant
        // not exactly the same in every font, but very similar: "-" vs "‐"
        /*
		const UNICODE_HYPHEN = 0x2010;
		// maybe this should replace all for visual consistancy?
		// `node tools/reg-count.js regex ^-\{2,\}` => 592
		//for (let i = 0; i < output.length; i++) if (output[i] == 0x2D) output[i] = 0x2010;
		if (output[0] == HYPHEN) output[0] = UNICODE_HYPHEN;
		let end = output.length-1;
		if (output[end] == HYPHEN) output[end] = UNICODE_HYPHEN;
		*/ // 20230123: WHATWG URL uses "CheckHyphens" false
        // https://url.spec.whatwg.org/#idna
        // update ethereum symbol
        // ξ => Ξ if not greek
        if (type !== 'Greek') array_replace(output, 0x3BE, 0x39E);
    // 20221213: fixes bidi subdomain issue, but breaks invariant (200E is disallowed)
    // could be fixed with special case for: 2D (.) + 200E (LTR)
    // https://discuss.ens.domains/t/bidi-label-ordering-spoof/15824
    //output.splice(0, 0, 0x200E);
    }
    return flatten(labels);
}
function array_replace(v, a, b) {
    let prev = 0;
    while(true){
        let next = v.indexOf(a, prev);
        if (next < 0) break;
        v[next] = b;
        prev = next + 1;
    }
}
function ens_split(name, preserve_emoji) {
    return split(name, nfc, preserve_emoji ? (x)=>x.slice() : filter_fe0f); // emoji are exposed so copy
}
function split(name, nf, ef) {
    if (!name) return []; // 20230719: empty name allowance
    init();
    let offset = 0;
    // https://unicode.org/reports/tr46/#Validity_Criteria
    // 4.) "The label must not contain a U+002E ( . ) FULL STOP."
    return name.split(STOP_CH).map((label)=>{
        let input = explode_cp(label);
        let info = {
            input,
            offset
        };
        offset += input.length + 1; // + stop
        try {
            // 1.) "The label must be in Unicode Normalization Form NFC"
            let tokens = info.tokens = tokens_from_str(input, nf, ef);
            let token_count = tokens.length;
            let type;
            if (!token_count) {
                //norm = [];
                //type = 'None'; // use this instead of next match, "ASCII"
                // 20230120: change to strict
                // https://discuss.ens.domains/t/ens-name-normalization-2nd/14564/59
                throw new Error(`empty label`);
            }
            let norm = info.output = tokens.flat();
            check_leading_underscore(norm);
            let emoji = info.emoji = token_count > 1 || tokens[0].is_emoji; // same as: tokens.some(x => x.is_emoji);
            if (!emoji && norm.every((cp)=>cp < 0x80)) {
                // 20230123: matches matches WHATWG, see note 3.3
                check_label_extension(norm); // only needed for ascii
                // cant have fenced
                // cant have cm
                // cant have wholes
                // see derive: "Fastpath ASCII"
                type = 'ASCII';
            } else {
                let chars = tokens.flatMap((x)=>x.is_emoji ? [] : x); // all of the nfc tokens concat together
                if (!chars.length) {
                    type = 'Emoji';
                } else {
                    // 5.) "The label must not begin with a combining mark, that is: General_Category=Mark."
                    if (CM.has(norm[0])) throw error_placement('leading combining mark');
                    for(let i = 1; i < token_count; i++){
                        let cps = tokens[i];
                        if (!cps.is_emoji && CM.has(cps[0])) {
                            // bidi_qq() not needed since emoji is LTR and cps is a CM
                            throw error_placement(`emoji + combining mark: "${str_from_cps(tokens[i - 1])} + ${safe_str_from_cps([
                                cps[0]
                            ])}"`);
                        }
                    }
                    check_fenced(norm);
                    let unique = Array_from(new Set(chars));
                    let [g] = determine_group(unique); // take the first match
                    // see derive: "Matching Groups have Same CM Style"
                    // alternative: could form a hybrid type: Latin/Japanese/...	
                    check_group(g, chars); // need text in order
                    check_whole(g, unique); // only need unique text (order would be required for multiple-char confusables)
                    type = g.N;
                // 20230121: consider exposing restricted flag
                // it's simpler to just check for 'Restricted'
                // or even better: type.endsWith(']')
                //if (g.R) info.restricted = true;
                }
            }
            info.type = type;
        } catch (err) {
            info.error = err; // use full error object
        }
        return info;
    });
}
function check_whole(group, unique) {
    let maker;
    let shared = [];
    for (let cp of unique){
        let whole = WHOLE_MAP.get(cp);
        if (whole === UNIQUE_PH) return; // unique, non-confusable
        if (whole) {
            let set = whole.M.get(cp); // groups which have a character that look-like this character
            maker = maker ? maker.filter((g)=>set.has(g)) : Array_from(set);
            if (!maker.length) return; // confusable intersection is empty
        } else {
            shared.push(cp);
        }
    }
    if (maker) {
        // we have 1+ confusable
        // check if any of the remaining groups
        // contain the shared characters too
        for (let g of maker){
            if (shared.every((cp)=>group_has_cp(g, cp))) {
                throw new Error(`whole-script confusable: ${group.N}/${g.N}`);
            }
        }
    }
}
// assumption: unique.size > 0
// returns list of matching groups
function determine_group(unique) {
    let groups = GROUPS;
    for (let cp of unique){
        // note: we need to dodge CM that are whitelisted
        // but that code isn't currently necessary
        let gs = groups.filter((g)=>group_has_cp(g, cp));
        if (!gs.length) {
            if (!GROUPS.some((g)=>group_has_cp(g, cp))) {
                // the character was composed of valid parts
                // but it's NFC form is invalid
                // 20230716: change to more exact statement, see: ENSNormalize.{cs,java}
                // note: this doesn't have to be a composition
                // 20230720: change to full check
                throw error_disallowed(cp); // this should be rare
            } else {
                // there is no group that contains all these characters
                // throw using the highest priority group that matched
                // https://www.unicode.org/reports/tr39/#mixed_script_confusables
                throw error_group_member(groups[0], cp);
            }
        }
        groups = gs;
        if (gs.length == 1) break; // there is only one group left
    }
    // there are at least 1 group(s) with all of these characters
    return groups;
}
// throw on first error
function flatten(split) {
    return split.map(({ input, error, output })=>{
        if (error) {
            // don't print label again if just a single label
            let msg = error.message;
            // bidi_qq() only necessary if msg is digits
            throw new Error(split.length == 1 ? msg : `Invalid label ${bidi_qq(safe_str_from_cps(input, 63))}: ${msg}`);
        }
        return str_from_cps(output);
    }).join(STOP_CH);
}
function error_disallowed(cp) {
    // TODO: add cp to error?
    return new Error(`disallowed character: ${quoted_cp(cp)}`);
}
function error_group_member(g, cp) {
    let quoted = quoted_cp(cp);
    let gg = GROUPS.find((g)=>g.P.has(cp)); // only check primary
    if (gg) {
        quoted = `${gg.N} ${quoted}`;
    }
    return new Error(`illegal mixture: ${g.N} + ${quoted}`);
}
function error_placement(where) {
    return new Error(`illegal placement: ${where}`);
}
// assumption: cps.length > 0
// assumption: cps[0] isn't a CM
// assumption: the previous character isn't an emoji
function check_group(g, cps) {
    for (let cp of cps){
        if (!group_has_cp(g, cp)) {
            // for whitelisted scripts, this will throw illegal mixture on invalid cm, eg. "e{300}{300}"
            // at the moment, it's unnecessary to introduce an extra error type
            // until there exists a whitelisted multi-character
            //   eg. if (M < 0 && is_combining_mark(cp)) { ... }
            // there are 3 cases:
            //   1. illegal cm for wrong group => mixture error
            //   2. illegal cm for same group => cm error
            //       requires set of whitelist cm per group: 
            //        eg. new Set([...g.P, ...g.Q].flatMap(nfc).filter(cp => CM.has(cp)))
            //   3. wrong group => mixture error
            throw error_group_member(g, cp);
        }
    }
    //if (M >= 0) { // we have a known fixed cm count
    if (g.M) {
        let decomposed = nfd(cps);
        for(let i = 1, e = decomposed.length; i < e; i++){
            // 20230210: bugfix: using cps instead of decomposed h/t Carbon225
            /*
			if (CM.has(decomposed[i])) {
				let j = i + 1;
				while (j < e && CM.has(decomposed[j])) j++;
				if (j - i > M) {
					throw new Error(`too many combining marks: ${g.N} ${bidi_qq(str_from_cps(decomposed.slice(i-1, j)))} (${j-i}/${M})`);
				}
				i = j;
			}
			*/ // 20230217: switch to NSM counting
            // https://www.unicode.org/reports/tr39/#Optional_Detection
            if (NSM.has(decomposed[i])) {
                let j = i + 1;
                for(let cp; j < e && NSM.has(cp = decomposed[j]); j++){
                    // a. Forbid sequences of the same nonspacing mark.
                    for(let k = i; k < j; k++){
                        if (decomposed[k] == cp) {
                            throw new Error(`duplicate non-spacing marks: ${quoted_cp(cp)}`);
                        }
                    }
                }
                // parse to end so we have full nsm count
                // b. Forbid sequences of more than 4 nonspacing marks (gc=Mn or gc=Me).
                if (j - i > NSM_MAX) {
                    // note: this slice starts with a base char or spacing-mark cm
                    throw new Error(`excessive non-spacing marks: ${bidi_qq(safe_str_from_cps(decomposed.slice(i - 1, j)))} (${j - i}/${NSM_MAX})`);
                }
                i = j;
            }
        }
    }
// *** this code currently isn't needed ***
/*
	let cm_whitelist = M instanceof Map;
	for (let i = 0, e = cps.length; i < e; ) {
		let cp = cps[i++];
		let seqs = cm_whitelist && M.get(cp);
		if (seqs) { 
			// list of codepoints that can follow
			// if this exists, this will always be 1+
			let j = i;
			while (j < e && CM.has(cps[j])) j++;
			let cms = cps.slice(i, j);
			let match = seqs.find(seq => !compare_arrays(seq, cms));
			if (!match) throw new Error(`disallowed combining mark sequence: "${safe_str_from_cps([cp, ...cms])}"`);
			i = j;
		} else if (!V.has(cp)) {
			// https://www.unicode.org/reports/tr39/#mixed_script_confusables
			let quoted = quoted_cp(cp);
			for (let cp of cps) {
				let u = UNIQUE.get(cp);
				if (u && u !== g) {
					// if both scripts are restricted this error is confusing
					// because we don't differentiate RestrictedA from RestrictedB 
					if (!u.R) quoted = `${quoted} is ${u.N}`;
					break;
				}
			}
			throw new Error(`disallowed ${g.N} character: ${quoted}`);
			//throw new Error(`disallowed character: ${quoted} (expected ${g.N})`);
			//throw new Error(`${g.N} does not allow: ${quoted}`);
		}
	}
	if (!cm_whitelist) {
		let decomposed = nfd(cps);
		for (let i = 1, e = decomposed.length; i < e; i++) { // we know it can't be cm leading
			if (CM.has(decomposed[i])) {
				let j = i + 1;
				while (j < e && CM.has(decomposed[j])) j++;
				if (j - i > M) {
					throw new Error(`too many combining marks: "${str_from_cps(decomposed.slice(i-1, j))}" (${j-i}/${M})`);
				}
				i = j;
			}
		}
	}
	*/ }
// given a list of codepoints
// returns a list of lists, where emoji are a fully-qualified (as Array subclass)
// eg. explode_cp("abc💩d") => [[61, 62, 63], Emoji[1F4A9, FE0F], [64]]
// 20230818: rename for 'process' name collision h/t Javarome
// https://github.com/adraffy/ens-normalize.js/issues/23
function tokens_from_str(input, nf, ef) {
    let ret = [];
    let chars = [];
    input = input.slice().reverse(); // flip so we can pop
    while(input.length){
        let emoji = consume_emoji_reversed(input);
        if (emoji) {
            if (chars.length) {
                ret.push(nf(chars));
                chars = [];
            }
            ret.push(ef(emoji));
        } else {
            let cp = input.pop();
            if (VALID.has(cp)) {
                chars.push(cp);
            } else {
                let cps = MAPPED.get(cp);
                if (cps) {
                    chars.push(...cps); // less than 10 elements
                } else if (!IGNORED.has(cp)) {
                    // 20230912: unicode 15.1 changed the order of processing such that
                    // disallowed parts are only rejected after NFC
                    // https://unicode.org/reports/tr46/#Validity_Criteria
                    // this doesn't impact normalization as of today
                    // technically, this error can be removed as the group logic will apply similar logic
                    // however the error type might be less clear
                    throw error_disallowed(cp);
                }
            }
        }
    }
    if (chars.length) {
        ret.push(nf(chars));
    }
    return ret;
}
function filter_fe0f(cps) {
    return cps.filter((cp)=>cp != FE0F);
}
// given array of codepoints
// returns the longest valid emoji sequence (or undefined if no match)
// *MUTATES* the supplied array
// disallows interleaved ignored characters
// fills (optional) eaten array with matched codepoints
function consume_emoji_reversed(cps, eaten) {
    let node = EMOJI_ROOT;
    let emoji;
    let pos = cps.length;
    while(pos){
        node = node.get(cps[--pos]);
        if (!node) break;
        let { V } = node;
        if (V) {
            emoji = V;
            if (eaten) eaten.push(...cps.slice(pos).reverse()); // (optional) copy input, used for ens_tokenize()
            cps.length = pos; // truncate
        }
    }
    return emoji;
}
// ************************************************************
// tokenizer 
const TY_VALID = 'valid';
const TY_MAPPED = 'mapped';
const TY_IGNORED = 'ignored';
const TY_DISALLOWED = 'disallowed';
const TY_EMOJI = 'emoji';
const TY_NFC = 'nfc';
const TY_STOP = 'stop';
function ens_tokenize(name, { nf = true } = {}) {
    init();
    let input = explode_cp(name).reverse();
    let eaten = [];
    let tokens = [];
    while(input.length){
        let emoji = consume_emoji_reversed(input, eaten);
        if (emoji) {
            tokens.push({
                type: TY_EMOJI,
                emoji: emoji.slice(),
                input: eaten,
                cps: filter_fe0f(emoji)
            });
            eaten = []; // reset buffer
        } else {
            let cp = input.pop();
            if (cp == STOP) {
                tokens.push({
                    type: TY_STOP,
                    cp
                });
            } else if (VALID.has(cp)) {
                tokens.push({
                    type: TY_VALID,
                    cps: [
                        cp
                    ]
                });
            } else if (IGNORED.has(cp)) {
                tokens.push({
                    type: TY_IGNORED,
                    cp
                });
            } else {
                let cps = MAPPED.get(cp);
                if (cps) {
                    tokens.push({
                        type: TY_MAPPED,
                        cp,
                        cps: cps.slice()
                    });
                } else {
                    tokens.push({
                        type: TY_DISALLOWED,
                        cp
                    });
                }
            }
        }
    }
    if (nf) {
        for(let i = 0, start = -1; i < tokens.length; i++){
            let token = tokens[i];
            if (is_valid_or_mapped(token.type)) {
                if (requires_check(token.cps)) {
                    let end = i + 1;
                    for(let pos = end; pos < tokens.length; pos++){
                        let { type, cps } = tokens[pos];
                        if (is_valid_or_mapped(type)) {
                            if (!requires_check(cps)) break;
                            end = pos + 1;
                        } else if (type !== TY_IGNORED) {
                            break;
                        }
                    }
                    if (start < 0) start = i;
                    let slice = tokens.slice(start, end);
                    let cps0 = slice.flatMap((x)=>is_valid_or_mapped(x.type) ? x.cps : []); // strip junk tokens
                    let cps = nfc(cps0);
                    if (compare_arrays(cps, cps0)) {
                        tokens.splice(start, end - start, {
                            type: TY_NFC,
                            input: cps0,
                            cps,
                            tokens0: collapse_valid_tokens(slice),
                            tokens: ens_tokenize(str_from_cps(cps), {
                                nf: false
                            })
                        });
                        i = start;
                    } else {
                        i = end - 1; // skip to end of slice
                    }
                    start = -1; // reset
                } else {
                    start = i; // remember last
                }
            } else if (token.type !== TY_IGNORED) {
                start = -1; // reset
            }
        }
    }
    return collapse_valid_tokens(tokens);
}
function is_valid_or_mapped(type) {
    return type == TY_VALID || type == TY_MAPPED;
}
function requires_check(cps) {
    return cps.some((cp)=>NFC_CHECK.has(cp));
}
function collapse_valid_tokens(tokens) {
    for(let i = 0; i < tokens.length; i++){
        if (tokens[i].type == TY_VALID) {
            let j = i + 1;
            while(j < tokens.length && tokens[j].type == TY_VALID)j++;
            tokens.splice(i, j - i, {
                type: TY_VALID,
                cps: tokens.slice(i, j).flatMap((x)=>x.cps)
            });
        }
    }
    return tokens;
}
;
}),
"[project]/rayls-shield-landing-page/node_modules/web-worker/cjs/node.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const URL = __turbopack_context__.r("[externals]/url [external] (url, cjs)");
const VM = __turbopack_context__.r("[externals]/vm [external] (vm, cjs)");
const threads = __turbopack_context__.r("[externals]/worker_threads [external] (worker_threads, cjs)");
const WORKER = Symbol.for('worker');
const EVENTS = Symbol.for('events');
class EventTarget {
    constructor(){
        Object.defineProperty(this, EVENTS, {
            value: new Map()
        });
    }
    dispatchEvent(event) {
        event.target = event.currentTarget = this;
        if (this['on' + event.type]) {
            try {
                this['on' + event.type](event);
            } catch (err) {
                console.error(err);
            }
        }
        const list = this[EVENTS].get(event.type);
        if (list == null) return;
        list.forEach((handler)=>{
            try {
                handler.call(this, event);
            } catch (err) {
                console.error(err);
            }
        });
    }
    addEventListener(type, fn) {
        let events = this[EVENTS].get(type);
        if (!events) this[EVENTS].set(type, events = []);
        events.push(fn);
    }
    removeEventListener(type, fn) {
        let events = this[EVENTS].get(type);
        if (events) {
            const index = events.indexOf(fn);
            if (index !== -1) events.splice(index, 1);
        }
    }
}
function Event(type, target) {
    this.type = type;
    this.timeStamp = Date.now();
    this.target = this.currentTarget = this.data = null;
} // this module is used self-referentially on both sides of the
// thread boundary, but behaves differently in each context.
module.exports = threads.isMainThread ? mainThread() : workerThread();
const baseUrl = URL.pathToFileURL(process.cwd() + '/');
function mainThread() {
    /**
   * A web-compatible Worker implementation atop Node's worker_threads.
   *  - uses DOM-style events (Event.data, Event.type, etc)
   *  - supports event handler properties (worker.onmessage)
   *  - Worker() constructor accepts a module URL
   *  - accepts the {type:'module'} option
   *  - emulates WorkerGlobalScope within the worker
   * @param {string} url  The URL or module specifier to load
   * @param {object} [options]  Worker construction options
   * @param {string} [options.name]  Available as `self.name` within the Worker
   * @param {string} [options.type="classic"]  Pass "module" to create a Module Worker.
   */ class Worker extends EventTarget {
        constructor(url, options){
            super();
            const { name, type } = options || {};
            url += '';
            let mod;
            if (/^data:/.test(url)) {
                mod = url;
            } else {
                mod = URL.fileURLToPath(new URL.URL(url, baseUrl));
            }
            const worker = new threads.Worker(("TURBOPACK compile-time value", "/ROOT/rayls-shield-landing-page/node_modules/web-worker/cjs/node.js"), {
                workerData: {
                    mod,
                    name,
                    type
                }
            });
            Object.defineProperty(this, WORKER, {
                value: worker
            });
            worker.on('message', (data)=>{
                const event = new Event('message');
                event.data = data;
                this.dispatchEvent(event);
            });
            worker.on('error', (error)=>{
                error.type = 'error';
                this.dispatchEvent(error);
            });
            worker.on('exit', ()=>{
                this.dispatchEvent(new Event('close'));
            });
        }
        postMessage(data, transferList) {
            this[WORKER].postMessage(data, transferList);
        }
        terminate() {
            this[WORKER].terminate();
        }
    }
    Worker.prototype.onmessage = Worker.prototype.onerror = Worker.prototype.onclose = null;
    return Worker;
}
function workerThread() {
    let { mod, name, type } = threads.workerData; // turn global into a mock WorkerGlobalScope
    const self = /*TURBOPACK member replacement*/ __turbopack_context__.g.self = /*TURBOPACK member replacement*/ __turbopack_context__.g; // enqueue messages to dispatch after modules are loaded
    let q = [];
    function flush() {
        const buffered = q;
        q = null;
        buffered.forEach((event)=>{
            self.dispatchEvent(event);
        });
    }
    threads.parentPort.on('message', (data)=>{
        const event = new Event('message');
        event.data = data;
        if (q == null) self.dispatchEvent(event);
        else q.push(event);
    });
    threads.parentPort.on('error', (err)=>{
        err.type = 'Error';
        self.dispatchEvent(err);
    });
    class WorkerGlobalScope extends EventTarget {
        postMessage(data, transferList) {
            threads.parentPort.postMessage(data, transferList);
        }
        close() {
            process.exit();
        }
    }
    let proto = Object.getPrototypeOf(/*TURBOPACK member replacement*/ __turbopack_context__.g);
    delete proto.constructor;
    Object.defineProperties(WorkerGlobalScope.prototype, proto);
    proto = Object.setPrototypeOf(/*TURBOPACK member replacement*/ __turbopack_context__.g, new WorkerGlobalScope());
    [
        'postMessage',
        'addEventListener',
        'removeEventListener',
        'dispatchEvent'
    ].forEach((fn)=>{
        proto[fn] = proto[fn].bind(/*TURBOPACK member replacement*/ __turbopack_context__.g);
    });
    /*TURBOPACK member replacement*/ __turbopack_context__.g.name = name;
    const isDataUrl = /^data:/.test(mod);
    if (type === 'module') {
        Promise.resolve().then(()=>{
            const e = new Error("Cannot find module as expression is too dynamic");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        }).catch((err)=>{
            if (isDataUrl && err.message === 'Not supported') {
                console.warn('Worker(): Importing data: URLs requires Node 12.10+. Falling back to classic worker.');
                return evaluateDataUrl(mod, name);
            }
            console.error(err);
        }).then(flush);
    } else {
        try {
            if (/^data:/.test(mod)) {
                evaluateDataUrl(mod, name);
            } else {
                (()=>{
                    const e = new Error("Cannot find module as expression is too dynamic");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                })();
            }
        } catch (err) {
            console.error(err);
        }
        Promise.resolve().then(flush);
    }
}
function evaluateDataUrl(url, name) {
    const { data } = parseDataUrl(url);
    return VM.runInThisContext(data, {
        filename: 'worker.<' + (name || 'data:') + '>'
    });
}
function parseDataUrl(url) {
    let [m, type, encoding, data] = url.match(/^data: *([^;,]*)(?: *; *([^,]*))? *,(.*)$/) || [];
    if (!m) throw Error('Invalid Data URL.');
    if (encoding) switch(encoding.toLowerCase()){
        case 'base64':
            data = Buffer.from(data, 'base64').toString();
            break;
        default:
            throw Error('Unknown Data URL encoding "' + encoding + '"');
    }
    return {
        type,
        data
    };
}
}),
"[project]/rayls-shield-landing-page/node_modules/wasmbuilder/src/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
    Copyright 2019 0KIMS association.

    This file is part of wasmbuilder

    wasmbuilder is a free software: you can redistribute it and/or modify it
    under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    wasmbuilder is distributed in the hope that it will be useful, but WITHOUT
    ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
    or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public
    License for more details.

    You should have received a copy of the GNU General Public License
    along with wasmbuilder. If not, see <https://www.gnu.org/licenses/>.
*/ __turbopack_context__.s([
    "bitLength",
    ()=>bitLength,
    "ident",
    ()=>ident,
    "isNegative",
    ()=>isNegative,
    "isZero",
    ()=>isZero,
    "string",
    ()=>string,
    "toHexString",
    ()=>toHexString,
    "toNumber",
    ()=>toNumber,
    "toUTF8Array",
    ()=>toUTF8Array,
    "u32",
    ()=>u32,
    "u64",
    ()=>u64,
    "varint",
    ()=>varint,
    "varint32",
    ()=>varint32,
    "varint64",
    ()=>varint64,
    "varuint",
    ()=>varuint,
    "varuint32",
    ()=>varuint32,
    "varuint64",
    ()=>varuint64
]);
function toNumber(n) {
    return BigInt(n);
}
function isNegative(n) {
    return n < 0n;
}
function isZero(n) {
    return n === 0n;
}
function bitLength(n) {
    if (isNegative(n)) {
        return n.toString(2).length - 1; // discard the - sign
    } else {
        return n.toString(2).length;
    }
}
function u32(n) {
    const b = [];
    const v = toNumber(n);
    b.push(Number(v & 0xFFn));
    b.push(Number(v >> 8n & 0xFFn));
    b.push(Number(v >> 16n & 0xFFn));
    b.push(Number(v >> 24n & 0xFFn));
    return b;
}
function u64(n) {
    const b = [];
    const v = toNumber(n);
    b.push(Number(v & 0xFFn));
    b.push(Number(v >> 8n & 0xFFn));
    b.push(Number(v >> 16n & 0xFFn));
    b.push(Number(v >> 24n & 0xFFn));
    b.push(Number(v >> 32n & 0xFFn));
    b.push(Number(v >> 40n & 0xFFn));
    b.push(Number(v >> 48n & 0xFFn));
    b.push(Number(v >> 56n & 0xFFn));
    return b;
}
function toUTF8Array(str) {
    var utf8 = [];
    for(var i = 0; i < str.length; i++){
        var charcode = str.charCodeAt(i);
        if (charcode < 0x80) utf8.push(charcode);
        else if (charcode < 0x800) {
            utf8.push(0xc0 | charcode >> 6, 0x80 | charcode & 0x3f);
        } else if (charcode < 0xd800 || charcode >= 0xe000) {
            utf8.push(0xe0 | charcode >> 12, 0x80 | charcode >> 6 & 0x3f, 0x80 | charcode & 0x3f);
        } else {
            i++;
            // UTF-16 encodes 0x10000-0x10FFFF by
            // subtracting 0x10000 and splitting the
            // 20 bits of 0x0-0xFFFFF into two halves
            charcode = 0x10000 + ((charcode & 0x3ff) << 10 | str.charCodeAt(i) & 0x3ff);
            utf8.push(0xf0 | charcode >> 18, 0x80 | charcode >> 12 & 0x3f, 0x80 | charcode >> 6 & 0x3f, 0x80 | charcode & 0x3f);
        }
    }
    return utf8;
}
function string(str) {
    const bytes = toUTF8Array(str);
    return [
        ...varuint32(bytes.length),
        ...bytes
    ];
}
function varuint(n) {
    const code = [];
    let v = toNumber(n);
    if (isNegative(v)) throw new Error("Number cannot be negative");
    while(!isZero(v)){
        code.push(Number(v & 0x7Fn));
        v = v >> 7n;
    }
    if (code.length == 0) code.push(0);
    for(let i = 0; i < code.length - 1; i++){
        code[i] = code[i] | 0x80;
    }
    return code;
}
function varint(_n) {
    let n, sign;
    const bits = bitLength(_n);
    if (_n < 0) {
        sign = true;
        n = (1n << BigInt(bits)) + _n;
    } else {
        sign = false;
        n = toNumber(_n);
    }
    const paddingBits = 7 - bits % 7;
    const padding = (1n << BigInt(paddingBits)) - 1n << BigInt(bits);
    const paddingMask = (1 << 7 - paddingBits) - 1 | 0x80;
    const code = varuint(n + padding);
    if (!sign) {
        code[code.length - 1] = code[code.length - 1] & paddingMask;
    }
    return code;
}
function varint32(n) {
    let v = toNumber(n);
    if (v > 0xFFFFFFFFn) throw new Error("Number too big");
    if (v > 0x7FFFFFFFn) v = v - 0x100000000n;
    // bigInt("-80000000", 16) as base10
    if (v < -2147483648n) throw new Error("Number too small");
    return varint(v);
}
function varint64(n) {
    let v = toNumber(n);
    if (v > 0xFFFFFFFFFFFFFFFFn) throw new Error("Number too big");
    if (v > 0x7FFFFFFFFFFFFFFFn) v = v - 0x10000000000000000n;
    // bigInt("-8000000000000000", 16) as base10
    if (v < -9223372036854775808n) throw new Error("Number too small");
    return varint(v);
}
function varuint32(n) {
    let v = toNumber(n);
    if (v > 0xFFFFFFFFn) throw new Error("Number too big");
    return varuint(v);
}
function varuint64(n) {
    let v = toNumber(n);
    if (v > 0xFFFFFFFFFFFFFFFFn) throw new Error("Number too big");
    return varuint(v);
}
function toHexString(byteArray) {
    return Array.from(byteArray, function(byte) {
        return ("0" + (byte & 0xFF).toString(16)).slice(-2);
    }).join("");
}
function ident(text) {
    if (typeof text === "string") {
        let lines = text.split("\n");
        for(let i = 0; i < lines.length; i++){
            if (lines[i]) lines[i] = "    " + lines[i];
        }
        return lines.join("\n");
    } else if (Array.isArray(text)) {
        for(let i = 0; i < text.length; i++){
            text[i] = ident(text[i]);
        }
        return text;
    }
}
}),
"[project]/rayls-shield-landing-page/node_modules/wasmbuilder/src/codebuilder.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
    Copyright 2019 0KIMS association.

    This file is part of wasmbuilder

    wasmbuilder is a free software: you can redistribute it and/or modify it
    under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    wasmbuilder is distributed in the hope that it will be useful, but WITHOUT
    ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
    or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public
    License for more details.

    You should have received a copy of the GNU General Public License
    along with wasmbuilder. If not, see <https://www.gnu.org/licenses/>.
*/ __turbopack_context__.s([
    "CodeBuilder",
    ()=>CodeBuilder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/wasmbuilder/src/utils.js [app-ssr] (ecmascript)");
;
class CodeBuilder {
    constructor(func){
        this.func = func;
        this.functionName = func.functionName;
        this.module = func.module;
    }
    setLocal(localName, valCode) {
        const idx = this.func.localIdxByName[localName];
        if (idx === undefined) throw new Error(`Local Variable not defined: Function: ${this.functionName} local: ${localName} `);
        return [
            ...valCode,
            0x21,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varuint32"](idx)
        ];
    }
    teeLocal(localName, valCode) {
        const idx = this.func.localIdxByName[localName];
        if (idx === undefined) throw new Error(`Local Variable not defined: Function: ${this.functionName} local: ${localName} `);
        return [
            ...valCode,
            0x22,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varuint32"](idx)
        ];
    }
    getLocal(localName) {
        const idx = this.func.localIdxByName[localName];
        if (idx === undefined) throw new Error(`Local Variable not defined: Function: ${this.functionName} local: ${localName} `);
        return [
            0x20,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varuint32"](idx)
        ];
    }
    i64_load8_s(idxCode, _offset, _align) {
        const offset = _offset || 0;
        const align = _align === undefined ? 0 : _align; // 8 bits alignment by default
        return [
            ...idxCode,
            0x30,
            align,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varuint32"](offset)
        ];
    }
    i64_load8_u(idxCode, _offset, _align) {
        const offset = _offset || 0;
        const align = _align === undefined ? 0 : _align; // 8 bits alignment by default
        return [
            ...idxCode,
            0x31,
            align,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varuint32"](offset)
        ];
    }
    i64_load16_s(idxCode, _offset, _align) {
        const offset = _offset || 0;
        const align = _align === undefined ? 1 : _align; // 16 bits alignment by default
        return [
            ...idxCode,
            0x32,
            align,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varuint32"](offset)
        ];
    }
    i64_load16_u(idxCode, _offset, _align) {
        const offset = _offset || 0;
        const align = _align === undefined ? 1 : _align; // 16 bits alignment by default
        return [
            ...idxCode,
            0x33,
            align,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varuint32"](offset)
        ];
    }
    i64_load32_s(idxCode, _offset, _align) {
        const offset = _offset || 0;
        const align = _align === undefined ? 2 : _align; // 32 bits alignment by default
        return [
            ...idxCode,
            0x34,
            align,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varuint32"](offset)
        ];
    }
    i64_load32_u(idxCode, _offset, _align) {
        const offset = _offset || 0;
        const align = _align === undefined ? 2 : _align; // 32 bits alignment by default
        return [
            ...idxCode,
            0x35,
            align,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varuint32"](offset)
        ];
    }
    i64_load(idxCode, _offset, _align) {
        const offset = _offset || 0;
        const align = _align === undefined ? 3 : _align; // 64 bits alignment by default
        return [
            ...idxCode,
            0x29,
            align,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varuint32"](offset)
        ];
    }
    i64_store(idxCode, _offset, _align, _codeVal) {
        let offset, align, codeVal;
        if (Array.isArray(_offset)) {
            offset = 0;
            align = 3;
            codeVal = _offset;
        } else if (Array.isArray(_align)) {
            offset = _offset;
            align = 3;
            codeVal = _align;
        } else if (Array.isArray(_codeVal)) {
            offset = _offset;
            align = _align;
            codeVal = _codeVal;
        }
        return [
            ...idxCode,
            ...codeVal,
            0x37,
            align,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varuint32"](offset)
        ];
    }
    i64_store32(idxCode, _offset, _align, _codeVal) {
        let offset, align, codeVal;
        if (Array.isArray(_offset)) {
            offset = 0;
            align = 2;
            codeVal = _offset;
        } else if (Array.isArray(_align)) {
            offset = _offset;
            align = 2;
            codeVal = _align;
        } else if (Array.isArray(_codeVal)) {
            offset = _offset;
            align = _align;
            codeVal = _codeVal;
        }
        return [
            ...idxCode,
            ...codeVal,
            0x3e,
            align,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varuint32"](offset)
        ];
    }
    i64_store16(idxCode, _offset, _align, _codeVal) {
        let offset, align, codeVal;
        if (Array.isArray(_offset)) {
            offset = 0;
            align = 1;
            codeVal = _offset;
        } else if (Array.isArray(_align)) {
            offset = _offset;
            align = 1;
            codeVal = _align;
        } else if (Array.isArray(_codeVal)) {
            offset = _offset;
            align = _align;
            codeVal = _codeVal;
        }
        return [
            ...idxCode,
            ...codeVal,
            0x3d,
            align,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varuint32"](offset)
        ];
    }
    i64_store8(idxCode, _offset, _align, _codeVal) {
        let offset, align, codeVal;
        if (Array.isArray(_offset)) {
            offset = 0;
            align = 0;
            codeVal = _offset;
        } else if (Array.isArray(_align)) {
            offset = _offset;
            align = 0;
            codeVal = _align;
        } else if (Array.isArray(_codeVal)) {
            offset = _offset;
            align = _align;
            codeVal = _codeVal;
        }
        return [
            ...idxCode,
            ...codeVal,
            0x3c,
            align,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varuint32"](offset)
        ];
    }
    i32_load8_s(idxCode, _offset, _align) {
        const offset = _offset || 0;
        const align = _align === undefined ? 0 : _align; // 32 bits alignment by default
        return [
            ...idxCode,
            0x2c,
            align,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varuint32"](offset)
        ];
    }
    i32_load8_u(idxCode, _offset, _align) {
        const offset = _offset || 0;
        const align = _align === undefined ? 0 : _align; // 32 bits alignment by default
        return [
            ...idxCode,
            0x2d,
            align,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varuint32"](offset)
        ];
    }
    i32_load16_s(idxCode, _offset, _align) {
        const offset = _offset || 0;
        const align = _align === undefined ? 1 : _align; // 32 bits alignment by default
        return [
            ...idxCode,
            0x2e,
            align,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varuint32"](offset)
        ];
    }
    i32_load16_u(idxCode, _offset, _align) {
        const offset = _offset || 0;
        const align = _align === undefined ? 1 : _align; // 32 bits alignment by default
        return [
            ...idxCode,
            0x2f,
            align,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varuint32"](offset)
        ];
    }
    i32_load(idxCode, _offset, _align) {
        const offset = _offset || 0;
        const align = _align === undefined ? 2 : _align; // 32 bits alignment by default
        return [
            ...idxCode,
            0x28,
            align,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varuint32"](offset)
        ];
    }
    i32_store(idxCode, _offset, _align, _codeVal) {
        let offset, align, codeVal;
        if (Array.isArray(_offset)) {
            offset = 0;
            align = 2;
            codeVal = _offset;
        } else if (Array.isArray(_align)) {
            offset = _offset;
            align = 2;
            codeVal = _align;
        } else if (Array.isArray(_codeVal)) {
            offset = _offset;
            align = _align;
            codeVal = _codeVal;
        }
        return [
            ...idxCode,
            ...codeVal,
            0x36,
            align,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varuint32"](offset)
        ];
    }
    i32_store16(idxCode, _offset, _align, _codeVal) {
        let offset, align, codeVal;
        if (Array.isArray(_offset)) {
            offset = 0;
            align = 1;
            codeVal = _offset;
        } else if (Array.isArray(_align)) {
            offset = _offset;
            align = 1;
            codeVal = _align;
        } else if (Array.isArray(_codeVal)) {
            offset = _offset;
            align = _align;
            codeVal = _codeVal;
        }
        return [
            ...idxCode,
            ...codeVal,
            0x3b,
            align,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varuint32"](offset)
        ];
    }
    i32_store8(idxCode, _offset, _align, _codeVal) {
        let offset, align, codeVal;
        if (Array.isArray(_offset)) {
            offset = 0;
            align = 0;
            codeVal = _offset;
        } else if (Array.isArray(_align)) {
            offset = _offset;
            align = 0;
            codeVal = _align;
        } else if (Array.isArray(_codeVal)) {
            offset = _offset;
            align = _align;
            codeVal = _codeVal;
        }
        return [
            ...idxCode,
            ...codeVal,
            0x3a,
            align,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varuint32"](offset)
        ];
    }
    call(fnName, ...args) {
        const idx = this.module.functionIdxByName[fnName];
        if (idx === undefined) throw new Error(`Function not defined: Function: ${fnName}`);
        return [
            ...[].concat(...args),
            0x10,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varuint32"](idx)
        ];
    }
    call_indirect(fnIdx, ...args) {
        return [
            ...[].concat(...args),
            ...fnIdx,
            0x11,
            0,
            0
        ];
    }
    if(condCode, thenCode, elseCode) {
        if (elseCode) {
            return [
                ...condCode,
                0x04,
                0x40,
                ...thenCode,
                0x05,
                ...elseCode,
                0x0b
            ];
        } else {
            return [
                ...condCode,
                0x04,
                0x40,
                ...thenCode,
                0x0b
            ];
        }
    }
    block(bCode) {
        return [
            0x02,
            0x40,
            ...bCode,
            0x0b
        ];
    }
    loop(...args) {
        return [
            0x03,
            0x40,
            ...[].concat(...[
                ...args
            ]),
            0x0b
        ];
    }
    br_if(relPath, condCode) {
        return [
            ...condCode,
            0x0d,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varuint32"](relPath)
        ];
    }
    br(relPath) {
        return [
            0x0c,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varuint32"](relPath)
        ];
    }
    ret(rCode) {
        return [
            ...rCode,
            0x0f
        ];
    }
    drop(dCode) {
        return [
            ...dCode,
            0x1a
        ];
    }
    i64_const(num) {
        return [
            0x42,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varint64"](num)
        ];
    }
    i32_const(num) {
        return [
            0x41,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varint32"](num)
        ];
    }
    i64_eqz(opcode) {
        return [
            ...opcode,
            0x50
        ];
    }
    i64_eq(op1code, op2code) {
        return [
            ...op1code,
            ...op2code,
            0x51
        ];
    }
    i64_ne(op1code, op2code) {
        return [
            ...op1code,
            ...op2code,
            0x52
        ];
    }
    i64_lt_s(op1code, op2code) {
        return [
            ...op1code,
            ...op2code,
            0x53
        ];
    }
    i64_lt_u(op1code, op2code) {
        return [
            ...op1code,
            ...op2code,
            0x54
        ];
    }
    i64_gt_s(op1code, op2code) {
        return [
            ...op1code,
            ...op2code,
            0x55
        ];
    }
    i64_gt_u(op1code, op2code) {
        return [
            ...op1code,
            ...op2code,
            0x56
        ];
    }
    i64_le_s(op1code, op2code) {
        return [
            ...op1code,
            ...op2code,
            0x57
        ];
    }
    i64_le_u(op1code, op2code) {
        return [
            ...op1code,
            ...op2code,
            0x58
        ];
    }
    i64_ge_s(op1code, op2code) {
        return [
            ...op1code,
            ...op2code,
            0x59
        ];
    }
    i64_ge_u(op1code, op2code) {
        return [
            ...op1code,
            ...op2code,
            0x5a
        ];
    }
    i64_add(op1code, op2code) {
        return [
            ...op1code,
            ...op2code,
            0x7c
        ];
    }
    i64_sub(op1code, op2code) {
        return [
            ...op1code,
            ...op2code,
            0x7d
        ];
    }
    i64_mul(op1code, op2code) {
        return [
            ...op1code,
            ...op2code,
            0x7e
        ];
    }
    i64_div_s(op1code, op2code) {
        return [
            ...op1code,
            ...op2code,
            0x7f
        ];
    }
    i64_div_u(op1code, op2code) {
        return [
            ...op1code,
            ...op2code,
            0x80
        ];
    }
    i64_rem_s(op1code, op2code) {
        return [
            ...op1code,
            ...op2code,
            0x81
        ];
    }
    i64_rem_u(op1code, op2code) {
        return [
            ...op1code,
            ...op2code,
            0x82
        ];
    }
    i64_and(op1code, op2code) {
        return [
            ...op1code,
            ...op2code,
            0x83
        ];
    }
    i64_or(op1code, op2code) {
        return [
            ...op1code,
            ...op2code,
            0x84
        ];
    }
    i64_xor(op1code, op2code) {
        return [
            ...op1code,
            ...op2code,
            0x85
        ];
    }
    i64_shl(op1code, op2code) {
        return [
            ...op1code,
            ...op2code,
            0x86
        ];
    }
    i64_shr_s(op1code, op2code) {
        return [
            ...op1code,
            ...op2code,
            0x87
        ];
    }
    i64_shr_u(op1code, op2code) {
        return [
            ...op1code,
            ...op2code,
            0x88
        ];
    }
    i64_extend_i32_s(op1code) {
        return [
            ...op1code,
            0xac
        ];
    }
    i64_extend_i32_u(op1code) {
        return [
            ...op1code,
            0xad
        ];
    }
    i64_clz(op1code) {
        return [
            ...op1code,
            0x79
        ];
    }
    i64_ctz(op1code) {
        return [
            ...op1code,
            0x7a
        ];
    }
    i32_eqz(op1code) {
        return [
            ...op1code,
            0x45
        ];
    }
    i32_eq(op1code, op2code) {
        return [
            ...op1code,
            ...op2code,
            0x46
        ];
    }
    i32_ne(op1code, op2code) {
        return [
            ...op1code,
            ...op2code,
            0x47
        ];
    }
    i32_lt_s(op1code, op2code) {
        return [
            ...op1code,
            ...op2code,
            0x48
        ];
    }
    i32_lt_u(op1code, op2code) {
        return [
            ...op1code,
            ...op2code,
            0x49
        ];
    }
    i32_gt_s(op1code, op2code) {
        return [
            ...op1code,
            ...op2code,
            0x4a
        ];
    }
    i32_gt_u(op1code, op2code) {
        return [
            ...op1code,
            ...op2code,
            0x4b
        ];
    }
    i32_le_s(op1code, op2code) {
        return [
            ...op1code,
            ...op2code,
            0x4c
        ];
    }
    i32_le_u(op1code, op2code) {
        return [
            ...op1code,
            ...op2code,
            0x4d
        ];
    }
    i32_ge_s(op1code, op2code) {
        return [
            ...op1code,
            ...op2code,
            0x4e
        ];
    }
    i32_ge_u(op1code, op2code) {
        return [
            ...op1code,
            ...op2code,
            0x4f
        ];
    }
    i32_add(op1code, op2code) {
        return [
            ...op1code,
            ...op2code,
            0x6a
        ];
    }
    i32_sub(op1code, op2code) {
        return [
            ...op1code,
            ...op2code,
            0x6b
        ];
    }
    i32_mul(op1code, op2code) {
        return [
            ...op1code,
            ...op2code,
            0x6c
        ];
    }
    i32_div_s(op1code, op2code) {
        return [
            ...op1code,
            ...op2code,
            0x6d
        ];
    }
    i32_div_u(op1code, op2code) {
        return [
            ...op1code,
            ...op2code,
            0x6e
        ];
    }
    i32_rem_s(op1code, op2code) {
        return [
            ...op1code,
            ...op2code,
            0x6f
        ];
    }
    i32_rem_u(op1code, op2code) {
        return [
            ...op1code,
            ...op2code,
            0x70
        ];
    }
    i32_and(op1code, op2code) {
        return [
            ...op1code,
            ...op2code,
            0x71
        ];
    }
    i32_or(op1code, op2code) {
        return [
            ...op1code,
            ...op2code,
            0x72
        ];
    }
    i32_xor(op1code, op2code) {
        return [
            ...op1code,
            ...op2code,
            0x73
        ];
    }
    i32_shl(op1code, op2code) {
        return [
            ...op1code,
            ...op2code,
            0x74
        ];
    }
    i32_shr_s(op1code, op2code) {
        return [
            ...op1code,
            ...op2code,
            0x75
        ];
    }
    i32_shr_u(op1code, op2code) {
        return [
            ...op1code,
            ...op2code,
            0x76
        ];
    }
    i32_rotl(op1code, op2code) {
        return [
            ...op1code,
            ...op2code,
            0x77
        ];
    }
    i32_rotr(op1code, op2code) {
        return [
            ...op1code,
            ...op2code,
            0x78
        ];
    }
    i32_wrap_i64(op1code) {
        return [
            ...op1code,
            0xa7
        ];
    }
    i32_clz(op1code) {
        return [
            ...op1code,
            0x67
        ];
    }
    i32_ctz(op1code) {
        return [
            ...op1code,
            0x68
        ];
    }
    unreachable() {
        return [
            0x0
        ];
    }
    current_memory() {
        return [
            0x3f,
            0
        ];
    }
    comment() {
        return [];
    }
}
}),
"[project]/rayls-shield-landing-page/node_modules/wasmbuilder/src/functionbuilder.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
    Copyright 2019 0KIMS association.

    This file is part of wasmbuilder

    wasmbuilder is a free software: you can redistribute it and/or modify it
    under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    wasmbuilder is distributed in the hope that it will be useful, but WITHOUT
    ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
    or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public
    License for more details.

    You should have received a copy of the GNU General Public License
    along with wasmbuilder. If not, see <https://www.gnu.org/licenses/>.
*/ __turbopack_context__.s([
    "FunctionBuilder",
    ()=>FunctionBuilder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$codebuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/wasmbuilder/src/codebuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/wasmbuilder/src/utils.js [app-ssr] (ecmascript)");
;
;
const typeCodes = {
    "i32": 0x7f,
    "i64": 0x7e,
    "f32": 0x7d,
    "f64": 0x7c,
    "anyfunc": 0x70,
    "func": 0x60,
    "emptyblock": 0x40
};
class FunctionBuilder {
    constructor(module, fnName, fnType, moduleName, fieldName){
        if (fnType == "import") {
            this.fnType = "import";
            this.moduleName = moduleName;
            this.fieldName = fieldName;
        } else if (fnType == "internal") {
            this.fnType = "internal";
        } else {
            throw new Error("Invalid function fnType: " + fnType);
        }
        this.module = module;
        this.fnName = fnName;
        this.params = [];
        this.locals = [];
        this.localIdxByName = {};
        this.code = [];
        this.returnType = null;
        this.nextLocal = 0;
    }
    addParam(paramName, paramType) {
        if (this.localIdxByName[paramName]) throw new Error(`param already exists. Function: ${this.fnName}, Param: ${paramName} `);
        const idx = this.nextLocal++;
        this.localIdxByName[paramName] = idx;
        this.params.push({
            type: paramType
        });
    }
    addLocal(localName, localType, _length) {
        const length = _length || 1;
        if (this.localIdxByName[localName]) throw new Error(`local already exists. Function: ${this.fnName}, Param: ${localName} `);
        const idx = this.nextLocal++;
        this.localIdxByName[localName] = idx;
        this.locals.push({
            type: localType,
            length: length
        });
    }
    setReturnType(returnType) {
        if (this.returnType) throw new Error(`returnType already defined. Function: ${this.fnName}`);
        this.returnType = returnType;
    }
    getSignature() {
        const params = [
            ...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varuint32"](this.params.length),
            ...this.params.map((p)=>typeCodes[p.type])
        ];
        const returns = this.returnType ? [
            0x01,
            typeCodes[this.returnType]
        ] : [
            0
        ];
        return [
            0x60,
            ...params,
            ...returns
        ];
    }
    getBody() {
        const locals = this.locals.map((l)=>[
                ...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varuint32"](l.length),
                typeCodes[l.type]
            ]);
        const body = [
            ...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varuint32"](this.locals.length),
            ...[].concat(...locals),
            ...this.code,
            0x0b
        ];
        return [
            ...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varuint32"](body.length),
            ...body
        ];
    }
    addCode(...code) {
        this.code.push(...[].concat(...[
            ...code
        ]));
    }
    getCodeBuilder() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$codebuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CodeBuilder"](this);
    }
}
}),
"[project]/rayls-shield-landing-page/node_modules/wasmbuilder/src/modulebuilder.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
    Copyright 2019 0KIMS association.

    This file is part of wasmbuilder

    wasmbuilder is a free software: you can redistribute it and/or modify it
    under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    wasmbuilder is distributed in the hope that it will be useful, but WITHOUT
    ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
    or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public
    License for more details.

    You should have received a copy of the GNU General Public License
    along with wasmbuilder. If not, see <https://www.gnu.org/licenses/>.
*/ __turbopack_context__.s([
    "ModuleBuilder",
    ()=>ModuleBuilder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$functionbuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/wasmbuilder/src/functionbuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/wasmbuilder/src/utils.js [app-ssr] (ecmascript)");
;
;
class ModuleBuilder {
    constructor(){
        this.functions = [];
        this.functionIdxByName = {};
        this.nImportFunctions = 0;
        this.nInternalFunctions = 0;
        this.memory = {
            pagesSize: 1,
            moduleName: "env",
            fieldName: "memory"
        };
        this.free = 8;
        this.datas = [];
        this.modules = {};
        this.exports = [];
        this.functionsTable = [];
    }
    build() {
        this._setSignatures();
        return new Uint8Array([
            ...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u32"](0x6d736100),
            ...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u32"](1),
            ...this._buildType(),
            ...this._buildImport(),
            ...this._buildFunctionDeclarations(),
            ...this._buildFunctionsTable(),
            ...this._buildExports(),
            ...this._buildElements(),
            ...this._buildCode(),
            ...this._buildData()
        ]);
    }
    addFunction(fnName) {
        if (typeof this.functionIdxByName[fnName] !== "undefined") throw new Error(`Function already defined: ${fnName}`);
        const idx = this.functions.length;
        this.functionIdxByName[fnName] = idx;
        this.functions.push(new __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$functionbuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FunctionBuilder"](this, fnName, "internal"));
        this.nInternalFunctions++;
        return this.functions[idx];
    }
    addIimportFunction(fnName, moduleName, _fieldName) {
        if (typeof this.functionIdxByName[fnName] !== "undefined") throw new Error(`Function already defined: ${fnName}`);
        if (this.functions.length > 0 && this.functions[this.functions.length - 1].type == "internal") throw new Error(`Import functions must be declared before internal: ${fnName}`);
        let fieldName = _fieldName || fnName;
        const idx = this.functions.length;
        this.functionIdxByName[fnName] = idx;
        this.functions.push(new __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$functionbuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FunctionBuilder"](this, fnName, "import", moduleName, fieldName));
        this.nImportFunctions++;
        return this.functions[idx];
    }
    setMemory(pagesSize, moduleName, fieldName) {
        this.memory = {
            pagesSize: pagesSize,
            moduleName: moduleName || "env",
            fieldName: fieldName || "memory"
        };
    }
    exportFunction(fnName, _exportName) {
        const exportName = _exportName || fnName;
        if (typeof this.functionIdxByName[fnName] === "undefined") throw new Error(`Function not defined: ${fnName}`);
        const idx = this.functionIdxByName[fnName];
        if (exportName != fnName) {
            this.functionIdxByName[exportName] = idx;
        }
        this.exports.push({
            exportName: exportName,
            idx: idx
        });
    }
    addFunctionToTable(fnName) {
        const idx = this.functionIdxByName[fnName];
        this.functionsTable.push(idx);
    }
    addData(offset, bytes) {
        this.datas.push({
            offset: offset,
            bytes: bytes
        });
    }
    alloc(a, b) {
        let size;
        let bytes;
        if ((Array.isArray(a) || ArrayBuffer.isView(a)) && typeof b === "undefined") {
            size = a.length;
            bytes = a;
        } else {
            size = a;
            bytes = b;
        }
        size = (size - 1 >> 3) + 1 << 3; // Align to 64 bits.
        const p = this.free;
        this.free += size;
        if (bytes) {
            this.addData(p, bytes);
        }
        return p;
    }
    allocString(s) {
        const encoder = new globalThis.TextEncoder();
        const uint8array = encoder.encode(s);
        return this.alloc([
            ...uint8array,
            0
        ]);
    }
    _setSignatures() {
        this.signatures = [];
        const signatureIdxByName = {};
        if (this.functionsTable.length > 0) {
            const signature = this.functions[this.functionsTable[0]].getSignature();
            const signatureName = "s_" + __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHexString"](signature);
            signatureIdxByName[signatureName] = 0;
            this.signatures.push(signature);
        }
        for(let i = 0; i < this.functions.length; i++){
            const signature = this.functions[i].getSignature();
            const signatureName = "s_" + __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHexString"](signature);
            if (typeof signatureIdxByName[signatureName] === "undefined") {
                signatureIdxByName[signatureName] = this.signatures.length;
                this.signatures.push(signature);
            }
            this.functions[i].signatureIdx = signatureIdxByName[signatureName];
        }
    }
    _buildSection(sectionType, section) {
        return [
            sectionType,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varuint32"](section.length),
            ...section
        ];
    }
    _buildType() {
        return this._buildSection(0x01, [
            ...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varuint32"](this.signatures.length),
            ...[].concat(...this.signatures)
        ]);
    }
    _buildImport() {
        const entries = [];
        entries.push([
            ...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"](this.memory.moduleName),
            ...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"](this.memory.fieldName),
            0x02,
            0x00,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varuint32"](this.memory.pagesSize)
        ]);
        for(let i = 0; i < this.nImportFunctions; i++){
            entries.push([
                ...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"](this.functions[i].moduleName),
                ...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"](this.functions[i].fieldName),
                0x00,
                ...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varuint32"](this.functions[i].signatureIdx)
            ]);
        }
        return this._buildSection(0x02, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varuint32"](entries.length).concat(...entries));
    }
    _buildFunctionDeclarations() {
        const entries = [];
        for(let i = this.nImportFunctions; i < this.nImportFunctions + this.nInternalFunctions; i++){
            entries.push(...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varuint32"](this.functions[i].signatureIdx));
        }
        return this._buildSection(0x03, [
            ...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varuint32"](entries.length),
            ...[
                ...entries
            ]
        ]);
    }
    _buildFunctionsTable() {
        if (this.functionsTable.length == 0) return [];
        return this._buildSection(0x04, [
            ...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varuint32"](1),
            0x70,
            0,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varuint32"](this.functionsTable.length)
        ]);
    }
    _buildElements() {
        if (this.functionsTable.length == 0) return [];
        const entries = [];
        for(let i = 0; i < this.functionsTable.length; i++){
            entries.push(...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varuint32"](this.functionsTable[i]));
        }
        return this._buildSection(0x09, [
            ...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varuint32"](1),
            ...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varuint32"](0),
            0x41,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varint32"](0),
            0x0b,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varuint32"](this.functionsTable.length),
            ...[
                ...entries
            ]
        ]);
    }
    _buildExports() {
        const entries = [];
        for(let i = 0; i < this.exports.length; i++){
            entries.push([
                ...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"](this.exports[i].exportName),
                0x00,
                ...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varuint32"](this.exports[i].idx)
            ]);
        }
        return this._buildSection(0x07, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varuint32"](entries.length).concat(...entries));
    }
    _buildCode() {
        const entries = [];
        for(let i = this.nImportFunctions; i < this.nImportFunctions + this.nInternalFunctions; i++){
            entries.push(this.functions[i].getBody());
        }
        return this._buildSection(0x0a, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varuint32"](entries.length).concat(...entries));
    }
    _buildData() {
        const entries = [];
        entries.push([
            0x00,
            0x41,
            0x00,
            0x0b,
            0x04,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u32"](this.free)
        ]);
        for(let i = 0; i < this.datas.length; i++){
            entries.push([
                0x00,
                0x41,
                ...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varint32"](this.datas[i].offset),
                0x0b,
                ...__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varuint32"](this.datas[i].bytes.length),
                ...this.datas[i].bytes
            ]);
        }
        return this._buildSection(0x0b, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varuint32"](entries.length).concat(...entries));
    }
}
}),
"[project]/rayls-shield-landing-page/node_modules/wasmbuilder/src/codebuilder_wat.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
    Copyright 2019 0KIMS association.

    This file is part of wasmbuilder

    wasmbuilder is a free software: you can redistribute it and/or modify it
    under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    wasmbuilder is distributed in the hope that it will be useful, but WITHOUT
    ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
    or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public
    License for more details.

    You should have received a copy of the GNU General Public License
    along with wasmbuilder. If not, see <https://www.gnu.org/licenses/>.
*/ __turbopack_context__.s([
    "CodeBuilderWat",
    ()=>CodeBuilderWat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/wasmbuilder/src/utils.js [app-ssr] (ecmascript)");
;
class CodeBuilderWat {
    constructor(func){
        this.func = func;
        this.functionName = func.functionName;
        this.module = func.module;
    }
    setLocal(localName, valCode) {
        const idx = this.func.localIdxByName[localName];
        if (idx === undefined) throw new Error(`Local Variable not defined: Function: ${this.functionName} local: ${localName} `);
        return [
            valCode,
            `set_local $${localName}`
        ];
    }
    teeLocal(localName, valCode) {
        const idx = this.func.localIdxByName[localName];
        if (idx === undefined) throw new Error(`Local Variable not defined: Function: ${this.functionName} local: ${localName} `);
        return [
            valCode,
            `tee_local $${localName}`
        ];
    }
    getLocal(localName) {
        const idx = this.func.localIdxByName[localName];
        if (idx === undefined) throw new Error(`Local Variable not defined: Function: ${this.functionName} local: ${localName} `);
        return `get_local $${localName}`;
    }
    genLoad(inst, def_align, idxCode, _offset, _align) {
        let S = inst;
        const offset = _offset || 0;
        if (offset > 0) S += ` offset=${offset}`;
        const align = _align === undefined ? def_align : _align; // 8 bits alignment by default
        if (align != def_align) S += ` align=${1 << align}`;
        return [
            idxCode,
            S
        ];
    }
    genStore(inst, def_align, idxCode, _offset, _align, _codeVal) {
        let offset, align, codeVal;
        if (typeof _align === "undefined") {
            offset = 0;
            align = def_align;
            codeVal = _offset;
        } else if (typeof _codeVal === "undefined") {
            offset = _offset;
            align = def_align;
            codeVal = _align;
        } else {
            offset = _offset;
            align = _align;
            codeVal = _codeVal;
        }
        let S = inst;
        if (offset > 0) S += ` offset=${offset}`;
        if (align != def_align) S += ` align=${1 << align}`;
        return [
            idxCode,
            codeVal,
            S
        ];
    }
    i64_load8_s(idxCode, _offset, _align) {
        return this.genLoad("i64.load8_s", 0, idxCode, _offset, _align);
    }
    i64_load8_u(idxCode, _offset, _align) {
        return this.genLoad("i64.load8_u", 0, idxCode, _offset, _align);
    }
    i64_load16_s(idxCode, _offset, _align) {
        return this.genLoad("i64.load16_s", 1, idxCode, _offset, _align);
    }
    i64_load16_u(idxCode, _offset, _align) {
        return this.genLoad("i64.load16_u", 1, idxCode, _offset, _align);
    }
    i64_load32_s(idxCode, _offset, _align) {
        return this.genLoad("i64.load32_s", 2, idxCode, _offset, _align);
    }
    i64_load32_u(idxCode, _offset, _align) {
        return this.genLoad("i64.load32_u", 2, idxCode, _offset, _align);
    }
    i64_load(idxCode, _offset, _align) {
        return this.genLoad("i64.load", 3, idxCode, _offset, _align);
    }
    i64_store(idxCode, _offset, _align, _codeVal) {
        return this.genStore("i64.store", 3, idxCode, _offset, _align, _codeVal);
    }
    i64_store32(idxCode, _offset, _align, _codeVal) {
        return this.genStore("i64.store32", 2, idxCode, _offset, _align, _codeVal);
    }
    i64_store16(idxCode, _offset, _align, _codeVal) {
        return this.genStore("i64.store16", 1, idxCode, _offset, _align, _codeVal);
    }
    i64_store8(idxCode, _offset, _align, _codeVal) {
        return this.genStore("i64.store8", 0, idxCode, _offset, _align, _codeVal);
    }
    i32_load8_s(idxCode, _offset, _align) {
        return this.genLoad("i32.load8_s", 0, idxCode, _offset, _align);
    }
    i32_load8_u(idxCode, _offset, _align) {
        return this.genLoad("i32.load8_u", 0, idxCode, _offset, _align);
    }
    i32_load16_s(idxCode, _offset, _align) {
        return this.genLoad("i32.load16_s", 1, idxCode, _offset, _align);
    }
    i32_load16_u(idxCode, _offset, _align) {
        return this.genLoad("i32.load16_u", 1, idxCode, _offset, _align);
    }
    i32_load(idxCode, _offset, _align) {
        return this.genLoad("i32.load", 2, idxCode, _offset, _align);
    }
    i32_store(idxCode, _offset, _align, _codeVal) {
        return this.genStore("i32.store", 2, idxCode, _offset, _align, _codeVal);
    }
    i32_store16(idxCode, _offset, _align, _codeVal) {
        return this.genStore("i32.store16", 1, idxCode, _offset, _align, _codeVal);
    }
    i32_store8(idxCode, _offset, _align, _codeVal) {
        return this.genStore("i32.store8", 0, idxCode, _offset, _align, _codeVal);
    }
    call(fnName, ...args) {
        const idx = this.module.functionIdxByName[fnName];
        if (idx === undefined) throw new Error(`Function not defined: Function: ${fnName}`);
        return [
            args,
            `call $${fnName}`
        ];
    }
    call_indirect(fnIdx, ...args) {
        return [
            args,
            fnIdx,
            "call_indirect (type 0)"
        ];
    }
    if(condCode, thenCode, elseCode) {
        if (elseCode) {
            return [
                condCode,
                "if",
                __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ident"](thenCode),
                "else",
                __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ident"](elseCode),
                "end"
            ];
        } else {
            return [
                condCode,
                "if",
                __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ident"](thenCode),
                "end"
            ];
        }
    }
    block(bCode) {
        return [
            "block",
            __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ident"](bCode),
            "end"
        ];
    }
    loop(...args) {
        return [
            "loop",
            __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ident"](args),
            "end"
        ];
    }
    br_if(relPath, condCode) {
        return [
            condCode,
            `br_if ${relPath}`
        ];
    }
    br(relPath) {
        return `br ${relPath}`;
    }
    ret(rCode) {
        return [
            rCode,
            "return"
        ];
    }
    drop(dCode) {
        return [
            dCode,
            "drop"
        ];
    }
    i64_const(num) {
        return `i64.const ${num}`;
    }
    i32_const(num) {
        return `i32.const ${num}`;
    }
    i64_eqz(opcode) {
        return [
            opcode,
            "i64.eqz"
        ];
    }
    i64_eq(op1code, op2code) {
        return [
            op1code,
            op2code,
            "i64.eq"
        ];
    }
    i64_ne(op1code, op2code) {
        return [
            op1code,
            op2code,
            "i64.ne"
        ];
    }
    i64_lt_s(op1code, op2code) {
        return [
            op1code,
            op2code,
            "i64.lt_s"
        ];
    }
    i64_lt_u(op1code, op2code) {
        return [
            op1code,
            op2code,
            "i64.lt_u"
        ];
    }
    i64_gt_s(op1code, op2code) {
        return [
            op1code,
            op2code,
            "i64.gt_s"
        ];
    }
    i64_gt_u(op1code, op2code) {
        return [
            op1code,
            op2code,
            "i64.gt_u"
        ];
    }
    i64_le_s(op1code, op2code) {
        return [
            op1code,
            op2code,
            "i64.le_s"
        ];
    }
    i64_le_u(op1code, op2code) {
        return [
            op1code,
            op2code,
            "i64.le_u"
        ];
    }
    i64_ge_s(op1code, op2code) {
        return [
            op1code,
            op2code,
            "i64.ge_s"
        ];
    }
    i64_ge_u(op1code, op2code) {
        return [
            op1code,
            op2code,
            "i64.ge_u"
        ];
    }
    i64_add(op1code, op2code) {
        return [
            op1code,
            op2code,
            "i64.add"
        ];
    }
    i64_sub(op1code, op2code) {
        return [
            op1code,
            op2code,
            "i64.sub"
        ];
    }
    i64_mul(op1code, op2code) {
        return [
            op1code,
            op2code,
            "i64.mul"
        ];
    }
    i64_div_s(op1code, op2code) {
        return [
            op1code,
            op2code,
            "i64.div_s"
        ];
    }
    i64_div_u(op1code, op2code) {
        return [
            op1code,
            op2code,
            "i64.div_u"
        ];
    }
    i64_rem_s(op1code, op2code) {
        return [
            op1code,
            op2code,
            "i64.rem_s"
        ];
    }
    i64_rem_u(op1code, op2code) {
        return [
            op1code,
            op2code,
            "i64.rem_u"
        ];
    }
    i64_and(op1code, op2code) {
        return [
            op1code,
            op2code,
            "i64.and"
        ];
    }
    i64_or(op1code, op2code) {
        return [
            op1code,
            op2code,
            "i64.or"
        ];
    }
    i64_xor(op1code, op2code) {
        return [
            op1code,
            op2code,
            "i64.xor"
        ];
    }
    i64_shl(op1code, op2code) {
        return [
            op1code,
            op2code,
            "i64.shl"
        ];
    }
    i64_shr_s(op1code, op2code) {
        return [
            op1code,
            op2code,
            "i64.shr_s"
        ];
    }
    i64_shr_u(op1code, op2code) {
        return [
            op1code,
            op2code,
            "i64.shr_u"
        ];
    }
    i64_extend_i32_s(op1code) {
        return [
            op1code,
            "i64.extend_s/i32"
        ];
    }
    i64_extend_i32_u(op1code) {
        return [
            op1code,
            "i64.extend_u/i32"
        ];
    }
    i32_eqz(op1code) {
        return [
            op1code,
            "i32.eqz"
        ];
    }
    i32_eq(op1code, op2code) {
        return [
            op1code,
            op2code,
            "i32.eq"
        ];
    }
    i32_ne(op1code, op2code) {
        return [
            op1code,
            op2code,
            "i32.ne"
        ];
    }
    i32_lt_s(op1code, op2code) {
        return [
            op1code,
            op2code,
            "i32.lt_s"
        ];
    }
    i32_lt_u(op1code, op2code) {
        return [
            op1code,
            op2code,
            "i32.lt_u"
        ];
    }
    i32_gt_s(op1code, op2code) {
        return [
            op1code,
            op2code,
            "i32.gt_s"
        ];
    }
    i32_gt_u(op1code, op2code) {
        return [
            op1code,
            op2code,
            "i32.gt_u"
        ];
    }
    i32_le_s(op1code, op2code) {
        return [
            op1code,
            op2code,
            "i32.le_s"
        ];
    }
    i32_le_u(op1code, op2code) {
        return [
            op1code,
            op2code,
            "i32.le_u"
        ];
    }
    i32_ge_s(op1code, op2code) {
        return [
            op1code,
            op2code,
            "i32.ge_s"
        ];
    }
    i32_ge_u(op1code, op2code) {
        return [
            op1code,
            op2code,
            "i32.ge_u"
        ];
    }
    i32_add(op1code, op2code) {
        return [
            op1code,
            op2code,
            "i32.add"
        ];
    }
    i32_sub(op1code, op2code) {
        return [
            op1code,
            op2code,
            "i32.sub"
        ];
    }
    i32_mul(op1code, op2code) {
        return [
            op1code,
            op2code,
            "i32.mul"
        ];
    }
    i32_div_s(op1code, op2code) {
        return [
            op1code,
            op2code,
            "i32.div_s"
        ];
    }
    i32_div_u(op1code, op2code) {
        return [
            op1code,
            op2code,
            "i32.div_u"
        ];
    }
    i32_rem_s(op1code, op2code) {
        return [
            op1code,
            op2code,
            "i32.rem_s"
        ];
    }
    i32_rem_u(op1code, op2code) {
        return [
            op1code,
            op2code,
            "i32.rem_u"
        ];
    }
    i32_and(op1code, op2code) {
        return [
            op1code,
            op2code,
            "i32.and"
        ];
    }
    i32_or(op1code, op2code) {
        return [
            op1code,
            op2code,
            "i32.or"
        ];
    }
    i32_xor(op1code, op2code) {
        return [
            op1code,
            op2code,
            "i32.xor"
        ];
    }
    i32_shl(op1code, op2code) {
        return [
            op1code,
            op2code,
            "i32.shl"
        ];
    }
    i32_shr_s(op1code, op2code) {
        return [
            op1code,
            op2code,
            "i32.shr_s"
        ];
    }
    i32_shr_u(op1code, op2code) {
        return [
            op1code,
            op2code,
            "i32.shr_u"
        ];
    }
    i32_rotl(op1code, op2code) {
        return [
            op1code,
            op2code,
            "i32.rotl"
        ];
    }
    i32_rotr(op1code, op2code) {
        return [
            op1code,
            op2code,
            "i32.rotr"
        ];
    }
    i32_wrap_i64(op1code) {
        return [
            op1code,
            "i32.wrap/i64"
        ];
    }
    ureachable() {
        return "unreachable";
    }
    current_memory() {
        return "current_memory";
    }
    comment(c) {
        return ";; " + c;
    }
}
}),
"[project]/rayls-shield-landing-page/node_modules/wasmbuilder/src/functionbuilder_wat.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
    Copyright 2019 0KIMS association.

    This file is part of wasmbuilder

    wasmbuilder is a free software: you can redistribute it and/or modify it
    under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    wasmbuilder is distributed in the hope that it will be useful, but WITHOUT
    ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
    or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public
    License for more details.

    You should have received a copy of the GNU General Public License
    along with wasmbuilder. If not, see <https://www.gnu.org/licenses/>.
*/ __turbopack_context__.s([
    "FunctionBuilderWat",
    ()=>FunctionBuilderWat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$codebuilder_wat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/wasmbuilder/src/codebuilder_wat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/wasmbuilder/src/utils.js [app-ssr] (ecmascript)");
;
;
class FunctionBuilderWat {
    constructor(module, fnName, fnType, moduleName, fieldName){
        if (fnType == "import") {
            this.fnType = "import";
            this.moduleName = moduleName;
            this.fieldName = fieldName;
        } else if (fnType == "internal") {
            this.fnType = "internal";
            this.comment = moduleName;
        } else {
            throw new Error("Invalid function fnType: " + fnType);
        }
        this.module = module;
        this.fnName = fnName;
        this.params = [];
        this.locals = [];
        this.localIdxByName = {};
        this.code = [];
        this.returnType = null;
        this.nextLocal = 0;
    }
    addParam(paramName, paramType) {
        if (this.localIdxByName[paramName]) throw new Error(`param already exists. Function: ${this.fnName}, Param: ${paramName} `);
        const idx = this.nextLocal++;
        this.localIdxByName[paramName] = idx;
        this.params.push({
            type: paramType,
            name: paramName
        });
    }
    addLocal(localName, localType, _length) {
        if (typeof _length != "undefined" && _length != 1) {
            throw new Error("Locals greater than 1 not implemented");
        }
        if (this.localIdxByName[localName]) throw new Error(`local already exists. Function: ${this.fnName}, Param: ${localName} `);
        const idx = this.nextLocal++;
        this.localIdxByName[localName] = idx;
        this.locals.push({
            type: localType,
            name: localName
        });
    }
    setReturnType(returnType) {
        if (this.returnType) throw new Error(`returnType already defined. Function: ${this.fnName}`);
        this.returnType = returnType;
    }
    getSignature() {
        let p = "";
        for(let i = 0; i < this.params.length; i++){
            if (i == 0) p += " (param";
            p += " " + this.params[i].type;
        }
        if (p != "") p += ")";
        let r = "";
        if (this.returnType) {
            r += ` (result ${this.returnType})`;
        }
        return `(type $${this.getSignatureName()} (func ${p}${r}))`;
    }
    getSignatureName() {
        let s = "_sig_";
        for(let i = 0; i < this.params.length; i++){
            s += this.params[i].type;
        }
        if (this.returnType) {
            s += "r" + this.returnType;
        }
        return s;
    }
    getBody() {
        const src = [];
        for(let i = 0; i < this.params.length; i++){
            src.push(` (param $${this.params[i].name} ${this.params[i].type})`);
        }
        if (this.returnType) {
            src.push(`(result ${this.returnType})`);
        }
        for(let i = 0; i < this.locals.length; i++){
            src.push(` (local $${this.locals[i].name} ${this.locals[i].type})`);
        }
        src.push(this.code);
        let Ss;
        if (this.comment) {
            Ss = this.comment.split("\n");
            for(let i = 0; i < Ss.length; i++){
                Ss[i] = ";; " + Ss[i];
            }
        } else {
            Ss = [];
        }
        return [
            ...Ss,
            `(func $${this.fnName} (type $${this.getSignatureName()})`,
            __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ident"](src),
            ")"
        ];
    }
    addCode(...code) {
        this.code.push(code);
    }
    getCodeBuilder() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$codebuilder_wat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CodeBuilderWat"](this);
    }
}
}),
"[project]/rayls-shield-landing-page/node_modules/wasmbuilder/src/modulebuilder_wat.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
    Copyright 2019 0KIMS association.

    This file is part of wasmbuilder

    wasmbuilder is a free software: you can redistribute it and/or modify it
    under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    wasmbuilder is distributed in the hope that it will be useful, but WITHOUT
    ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
    or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public
    License for more details.

    You should have received a copy of the GNU General Public License
    along with wasmbuilder. If not, see <https://www.gnu.org/licenses/>.
*/ __turbopack_context__.s([
    "ModuleBuilderWat",
    ()=>ModuleBuilderWat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$functionbuilder_wat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/wasmbuilder/src/functionbuilder_wat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/wasmbuilder/src/utils.js [app-ssr] (ecmascript)");
;
;
class ModuleBuilderWat {
    constructor(){
        this.functions = [];
        this.functionIdxByName = {};
        this.nImportFunctions = 0;
        this.nInternalFunctions = 0;
        this.memory = {
            pagesSize: 1,
            moduleName: "env",
            fieldName: "memory"
        };
        this.free = 8;
        this.datas = [];
        this.modules = {};
        this.exports = [];
        this.functionsTable = [];
    }
    build() {
        const src = [];
        this._setSignatures();
        src.push(this._buildType());
        src.push(this._buildImport());
        if (this.functionsTable.length > 0) {
            src.push(this._buildFunctionsTable());
        }
        if (this.exports.length > 0) {
            src.push(this._buildExports());
        }
        if (this.functionsTable.length > 0) {
            src.push(this._buildElements());
        }
        if (this.nInternalFunctions > 0) {
            src.push(this._buildFunctions());
        }
        src.push(this._buildData());
        return [
            "(module",
            __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ident"](src),
            ")"
        ];
    }
    addFunction(fnName, comment) {
        if (typeof this.functionIdxByName[fnName] !== "undefined") throw new Error(`Function already defined: ${fnName}`);
        const idx = this.functions.length;
        this.functionIdxByName[fnName] = idx;
        this.functions.push(new __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$functionbuilder_wat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FunctionBuilderWat"](this, fnName, "internal", comment));
        this.nInternalFunctions++;
        return this.functions[idx];
    }
    addIimportFunction(fnName, moduleName, _fieldName) {
        if (typeof this.functionIdxByName[fnName] !== "undefined") throw new Error(`Function already defined: ${fnName}`);
        if (this.functions.length > 0 && this.functions[this.functions.length - 1].type == "internal") throw new Error(`Import functions must be declared before internal: ${fnName}`);
        let fieldName = _fieldName || fnName;
        const idx = this.functions.length;
        this.functionIdxByName[fnName] = idx;
        this.functions.push(new __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$functionbuilder_wat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FunctionBuilderWat"](this, fnName, "import", moduleName, fieldName));
        this.nImportFunctions++;
        return this.functions[idx];
    }
    setMemory(pagesSize, moduleName, fieldName) {
        this.memory = {
            pagesSize: pagesSize,
            moduleName: moduleName || "env",
            fieldName: fieldName || "memory"
        };
    }
    exportFunction(fnName, _exportName) {
        const exportName = _exportName || fnName;
        if (typeof this.functionIdxByName[fnName] === "undefined") throw new Error(`Function not defined: ${fnName}`);
        const idx = this.functionIdxByName[fnName];
        if (exportName != fnName) {
            this.functionIdxByName[exportName] = idx;
        }
        this.exports.push({
            exportName: exportName,
            idx: idx
        });
    }
    addFunctionToTable(fnName) {
        const idx = this.functionIdxByName[fnName];
        this.functionsTable.push(idx);
    }
    addData(offset, bytes) {
        this.datas.push({
            offset: offset,
            bytes: bytes
        });
    }
    alloc(a, b) {
        let size;
        let bytes;
        if ((Array.isArray(a) || ArrayBuffer.isView(a)) && typeof b === "undefined") {
            size = a.length;
            bytes = a;
        } else {
            size = a;
            bytes = b;
        }
        size = (size - 1 >> 3) + 1 << 3; // Align to 64 bits.
        const p = this.free;
        this.free += size;
        if (bytes) {
            this.addData(p, bytes);
        }
        return p;
    }
    allocString(s) {
        const encoder = new TextEncoder();
        const uint8array = encoder.encode(s);
        return this.alloc([
            ...uint8array,
            0
        ]);
    }
    _setSignatures() {
        this.signatures = [];
        const signatureIdxByName = {};
        if (this.functionsTable.length > 0) {
            const signature = this.functions[this.functionsTable[0]].getSignature();
            const signatureName = this.functions[this.functionsTable[0]].getSignatureName();
            signatureIdxByName[signatureName] = 0;
            this.signatures.push(signature);
        }
        for(let i = 0; i < this.functions.length; i++){
            const signature = this.functions[i].getSignature();
            const signatureName = this.functions[i].getSignatureName();
            if (typeof signatureIdxByName[signatureName] === "undefined") {
                signatureIdxByName[signatureName] = this.signatures.length;
                this.signatures.push(signature);
            }
            this.functions[i].signatureIdx = signatureIdxByName[signatureName];
            this.functions[i].signatureName = signatureName;
        }
    }
    _buildType() {
        return this.signatures;
    }
    _buildImport() {
        const src = [];
        src.push(`(import "${this.memory.moduleName}" "${this.memory.fieldName}" (memory ${this.memory.pagesSize}))`);
        for(let i = 0; i < this.nImportFunctions; i++){
            src.push(`(import "${this.functions[i].moduleName}" "${this.functions[i].fieldName}" (func $${this.functions[i].fnName} (type $${this.functions[i].getSignatureName()})))`);
        }
        return src;
    }
    _buildFunctionsTable() {
        return `(table ${this.functionsTable.length} anyfunc)`;
    }
    _buildElements() {
        let funcs = "";
        for(let i = 0; i < this.functionsTable.length; i++){
            funcs += " $" + this.functions[this.functionsTable[i]].fnName;
        }
        return `(elem (i32.const 0) ${funcs})`;
    }
    _buildExports() {
        const src = [];
        for(let i = 0; i < this.exports.length; i++){
            src.push(`(export "${this.exports[i].exportName}" (func $${this.functions[this.exports[i].idx].fnName}))`);
        }
        return src;
    }
    _buildFunctions() {
        const src = [];
        for(let i = this.nImportFunctions; i < this.nImportFunctions + this.nInternalFunctions; i++){
            src.push(this.functions[i].getBody());
        }
        return src;
    }
    _buildData() {
        const src = [];
        const buf = Buffer.alloc(4);
        buf.writeUInt32LE(this.free, 0);
        src.push(`(data (i32.const 0) ${bytes2string(buf)})`);
        for(let i = 0; i < this.datas.length; i++){
            src.push(`(data (i32.const ${this.datas[i].offset}) ${bytes2string(this.datas[i].bytes)})`);
        }
        return src;
        //TURBOPACK unreachable
        ;
        function bytes2string(b) {
            let S = "\"";
            for(let i = 0; i < b.length; i++){
                if (b[i] < 32 || b[i] > 126 || b[i] == 34 || b[i] == 92) {
                    let h = b[i].toString(16);
                    while(h.length < 2)h = "0" + h;
                    S += "\\" + h;
                } else {
                    S += String.fromCharCode(b[i]);
                }
            }
            S += "\"";
            return S;
        }
    }
}
}),
"[project]/rayls-shield-landing-page/node_modules/wasmbuilder/src/protoboard.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
    Copyright 2019 0KIMS association.

    This file is part of websnark (Web Assembly zkSnark Prover).

    websnark is a free software: you can redistribute it and/or modify it
    under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    websnark is distributed in the hope that it will be useful, but WITHOUT
    ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
    or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public
    License for more details.

    You should have received a copy of the GNU General Public License
    along with websnark. If not, see <https://www.gnu.org/licenses/>.
*/ __turbopack_context__.s([
    "buildProtoboard",
    ()=>buildProtoboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$modulebuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/wasmbuilder/src/modulebuilder.js [app-ssr] (ecmascript)");
;
async function buildProtoboard(builder, defBytes, bitsPerBytes) {
    const protoboard = new Protoboard();
    protoboard.defBytes = defBytes;
    protoboard.bitsPerBytes = bitsPerBytes || 32;
    protoboard.memory = new WebAssembly.Memory({
        initial: 20000
    });
    protoboard.i32 = new Uint32Array(protoboard.memory.buffer);
    protoboard.i8 = new Uint8Array(protoboard.memory.buffer);
    const moduleBuilder = new __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$modulebuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ModuleBuilder"]();
    const fLog32 = moduleBuilder.addIimportFunction("debug_log32", "debug", "log32");
    fLog32.addParam("x", "i32");
    const fLog64 = moduleBuilder.addIimportFunction("debug_log64", "debug", "log64");
    fLog64.addParam("x", "i32");
    fLog64.addParam("y", "i32");
    buildLog32(moduleBuilder);
    buildLog64(moduleBuilder);
    builder(moduleBuilder, protoboard);
    const code = moduleBuilder.build();
    const wasmModule = await WebAssembly.compile(code);
    protoboard.log = console.log;
    protoboard.instance = await WebAssembly.instantiate(wasmModule, {
        env: {
            "memory": protoboard.memory
        },
        debug: {
            log32: function(c1) {
                if (c1 < 0) c1 = 0x100000000 + c1;
                let s = c1.toString(16);
                while(s.length < 8)s = "0" + s;
                protoboard.log(s + ": " + c1.toString());
            },
            log64: function(c1, c2) {
                if (c1 < 0) c1 = 0x100000000 + c1;
                if (c2 < 0) c2 = 0x100000000 + c2;
                const n = BigInt(c1) + (BigInt(c2) << 32n);
                let s = n.toString(16);
                while(s.length < 16)s = "0" + s;
                protoboard.log(s + ": " + n.toString());
            }
        }
    });
    Object.assign(protoboard, protoboard.instance.exports);
    Object.assign(protoboard, moduleBuilder.modules);
    return protoboard;
    //TURBOPACK unreachable
    ;
    function buildLog32(module) {
        const f = module.addFunction("log32");
        f.addParam("x", "i32");
        const c = f.getCodeBuilder();
        f.addCode(c.call("debug_log32", c.getLocal("x")));
    }
    function buildLog64(module) {
        const f = module.addFunction("log64");
        f.addParam("x", "i64");
        const c = f.getCodeBuilder();
        f.addCode(c.call("debug_log64", c.i32_wrap_i64(c.getLocal("x")), c.i32_wrap_i64(c.i64_shr_u(c.getLocal("x"), c.i64_const(32)))));
    }
}
class Protoboard {
    constructor(){}
    alloc(length) {
        if (typeof length === "undefined") {
            length = this.defBytes;
        }
        length = (length - 1 >> 3) + 1 << 3; // Align to 64 bits.
        const res = this.i32[0];
        this.i32[0] += length;
        return res;
    }
    set(pos, nums, nBytes) {
        if (!Array.isArray(nums)) {
            nums = [
                nums
            ];
        }
        if (typeof nBytes === "undefined") {
            nBytes = this.defBytes;
        }
        const words = Math.floor((nBytes - 1) / 4) + 1;
        let p = pos;
        const CHUNK = 1n << BigInt(this.bitsPerBytes);
        for(let i = 0; i < nums.length; i++){
            let v = BigInt(nums[i]);
            for(let j = 0; j < words; j++){
                const quotient = v / CHUNK;
                const remainder = v % CHUNK;
                this.i32[p >> 2] = Number(remainder);
                v = quotient;
                p += 4;
            }
            if (v !== 0n) {
                throw new Error("Expected v to be 0");
            }
        }
        return pos;
    }
    get(pos, nElements, nBytes) {
        if (typeof nBytes == "undefined") {
            if (typeof nElements == "undefined") {
                nElements = 1;
                nBytes = this.defBytes;
            } else {
                nElements = nBytes;
                nBytes = this.defBytes;
            }
        }
        const words = Math.floor((nBytes - 1) / 4) + 1;
        const CHUNK = 1n << BigInt(this.bitsPerBytes);
        const nums = [];
        for(let i = 0; i < nElements; i++){
            let acc = 0n;
            for(let j = words - 1; j >= 0; j--){
                acc = acc * CHUNK;
                let v = this.i32[(pos >> 2) + j];
                if (this.bitsPerBytes < 32) {
                    if (v & 0x80000000) v = v - 0x100000000;
                }
                acc = acc + BigInt(v);
            }
            nums.push(acc);
            pos += words * 4;
        }
        if (nums.length == 1) return nums[0];
        return nums;
    }
}
}),
"[project]/rayls-shield-landing-page/node_modules/wasmbuilder/main.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/*
    Copyright 2019 0KIMS association.

    This file is part of wasmbuilder

    wasmbuilder is a free software: you can redistribute it and/or modify it
    under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    wasmbuilder is distributed in the hope that it will be useful, but WITHOUT
    ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
    or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public
    License for more details.

    You should have received a copy of the GNU General Public License
    along with wasmbuilder. If not, see <https://www.gnu.org/licenses/>.
*/ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$modulebuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/wasmbuilder/src/modulebuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$modulebuilder_wat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/wasmbuilder/src/modulebuilder_wat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$wasmbuilder$2f$src$2f$protoboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/wasmbuilder/src/protoboard.js [app-ssr] (ecmascript)");
;
;
;
}),
"[project]/rayls-shield-landing-page/node_modules/nanoassert/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = assert;
class AssertionError extends Error {
}
AssertionError.prototype.name = 'AssertionError';
/**
 * Minimal assert function
 * @param  {any} t Value to check if falsy
 * @param  {string=} m Optional assertion error message
 * @throws {AssertionError}
 */ function assert(t, m) {
    if (!t) {
        var err = new AssertionError(m);
        if (Error.captureStackTrace) Error.captureStackTrace(err, assert);
        throw err;
    }
}
}),
"[project]/rayls-shield-landing-page/node_modules/b4a/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function isBuffer(value) {
    return Buffer.isBuffer(value) || value instanceof Uint8Array;
}
function isEncoding(encoding) {
    return Buffer.isEncoding(encoding);
}
function alloc(size, fill, encoding) {
    return Buffer.alloc(size, fill, encoding);
}
function allocUnsafe(size) {
    return Buffer.allocUnsafe(size);
}
function allocUnsafeSlow(size) {
    return Buffer.allocUnsafeSlow(size);
}
function byteLength(string, encoding) {
    return Buffer.byteLength(string, encoding);
}
function compare(a, b) {
    return Buffer.compare(a, b);
}
function concat(buffers, totalLength) {
    return Buffer.concat(buffers, totalLength);
}
function copy(source, target, targetStart, start, end) {
    return toBuffer(source).copy(target, targetStart, start, end);
}
function equals(a, b) {
    return toBuffer(a).equals(b);
}
function fill(buffer, value, offset, end, encoding) {
    return toBuffer(buffer).fill(value, offset, end, encoding);
}
function from(value, encodingOrOffset, length) {
    return Buffer.from(value, encodingOrOffset, length);
}
function includes(buffer, value, byteOffset, encoding) {
    return toBuffer(buffer).includes(value, byteOffset, encoding);
}
function indexOf(buffer, value, byfeOffset, encoding) {
    return toBuffer(buffer).indexOf(value, byfeOffset, encoding);
}
function lastIndexOf(buffer, value, byteOffset, encoding) {
    return toBuffer(buffer).lastIndexOf(value, byteOffset, encoding);
}
function swap16(buffer) {
    return toBuffer(buffer).swap16();
}
function swap32(buffer) {
    return toBuffer(buffer).swap32();
}
function swap64(buffer) {
    return toBuffer(buffer).swap64();
}
function toBuffer(buffer) {
    if (Buffer.isBuffer(buffer)) return buffer;
    return Buffer.from(buffer.buffer, buffer.byteOffset, buffer.byteLength);
}
function toString(buffer, encoding, start, end) {
    return toBuffer(buffer).toString(encoding, start, end);
}
function write(buffer, string, offset, length, encoding) {
    return toBuffer(buffer).write(string, offset, length, encoding);
}
function readDoubleBE(buffer, offset) {
    return toBuffer(buffer).readDoubleBE(offset);
}
function readDoubleLE(buffer, offset) {
    return toBuffer(buffer).readDoubleLE(offset);
}
function readFloatBE(buffer, offset) {
    return toBuffer(buffer).readFloatBE(offset);
}
function readFloatLE(buffer, offset) {
    return toBuffer(buffer).readFloatLE(offset);
}
function readInt32BE(buffer, offset) {
    return toBuffer(buffer).readInt32BE(offset);
}
function readInt32LE(buffer, offset) {
    return toBuffer(buffer).readInt32LE(offset);
}
function readUInt32BE(buffer, offset) {
    return toBuffer(buffer).readUInt32BE(offset);
}
function readUInt32LE(buffer, offset) {
    return toBuffer(buffer).readUInt32LE(offset);
}
function writeDoubleBE(buffer, value, offset) {
    return toBuffer(buffer).writeDoubleBE(value, offset);
}
function writeDoubleLE(buffer, value, offset) {
    return toBuffer(buffer).writeDoubleLE(value, offset);
}
function writeFloatBE(buffer, value, offset) {
    return toBuffer(buffer).writeFloatBE(value, offset);
}
function writeFloatLE(buffer, value, offset) {
    return toBuffer(buffer).writeFloatLE(value, offset);
}
function writeInt32BE(buffer, value, offset) {
    return toBuffer(buffer).writeInt32BE(value, offset);
}
function writeInt32LE(buffer, value, offset) {
    return toBuffer(buffer).writeInt32LE(value, offset);
}
function writeUInt32BE(buffer, value, offset) {
    return toBuffer(buffer).writeUInt32BE(value, offset);
}
function writeUInt32LE(buffer, value, offset) {
    return toBuffer(buffer).writeUInt32LE(value, offset);
}
module.exports = {
    isBuffer,
    isEncoding,
    alloc,
    allocUnsafe,
    allocUnsafeSlow,
    byteLength,
    compare,
    concat,
    copy,
    equals,
    fill,
    from,
    includes,
    indexOf,
    lastIndexOf,
    swap16,
    swap32,
    swap64,
    toBuffer,
    toString,
    write,
    readDoubleBE,
    readDoubleLE,
    readFloatBE,
    readFloatLE,
    readInt32BE,
    readInt32LE,
    readUInt32BE,
    readUInt32LE,
    writeDoubleBE,
    writeDoubleLE,
    writeFloatBE,
    writeFloatLE,
    writeInt32BE,
    writeInt32LE,
    writeUInt32BE,
    writeUInt32LE
};
}),
"[project]/rayls-shield-landing-page/node_modules/blake2b-wasm/blake2b.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var __commonJS = (cb, mod)=>function __require() {
        return mod || (0, cb[Object.keys(cb)[0]])((mod = {
            exports: {}
        }).exports, mod), mod.exports;
    };
var __toBinary = /* @__PURE__ */ (()=>{
    var table = new Uint8Array(128);
    for(var i = 0; i < 64; i++)table[i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i * 4 - 205] = i;
    return (base64)=>{
        var n = base64.length, bytes2 = new Uint8Array((n - (base64[n - 1] == "=") - (base64[n - 2] == "=")) * 3 / 4 | 0);
        for(var i2 = 0, j = 0; i2 < n;){
            var c0 = table[base64.charCodeAt(i2++)], c1 = table[base64.charCodeAt(i2++)];
            var c2 = table[base64.charCodeAt(i2++)], c3 = table[base64.charCodeAt(i2++)];
            bytes2[j++] = c0 << 2 | c1 >> 4;
            bytes2[j++] = c1 << 4 | c2 >> 2;
            bytes2[j++] = c2 << 6 | c3;
        }
        return bytes2;
    };
})();
// wasm-binary:./blake2b.wat
var require_blake2b = __commonJS({
    "wasm-binary:./blake2b.wat" (exports2, module2) {
        module2.exports = __toBinary("AGFzbQEAAAABEANgAn9/AGADf39/AGABfwADBQQAAQICBQUBAQroBwdNBQZtZW1vcnkCAAxibGFrZTJiX2luaXQAAA5ibGFrZTJiX3VwZGF0ZQABDWJsYWtlMmJfZmluYWwAAhBibGFrZTJiX2NvbXByZXNzAAMKvz8EwAIAIABCADcDACAAQgA3AwggAEIANwMQIABCADcDGCAAQgA3AyAgAEIANwMoIABCADcDMCAAQgA3AzggAEIANwNAIABCADcDSCAAQgA3A1AgAEIANwNYIABCADcDYCAAQgA3A2ggAEIANwNwIABCADcDeCAAQoiS853/zPmE6gBBACkDAIU3A4ABIABCu86qptjQ67O7f0EIKQMAhTcDiAEgAEKr8NP0r+68tzxBECkDAIU3A5ABIABC8e30+KWn/aelf0EYKQMAhTcDmAEgAELRhZrv+s+Uh9EAQSApAwCFNwOgASAAQp/Y+dnCkdqCm39BKCkDAIU3A6gBIABC6/qG2r+19sEfQTApAwCFNwOwASAAQvnC+JuRo7Pw2wBBOCkDAIU3A7gBIABCADcDwAEgAEIANwPIASAAQgA3A9ABC20BA38gAEHAAWohAyAAQcgBaiEEIAQpAwCnIQUCQANAIAEgAkYNASAFQYABRgRAIAMgAykDACAFrXw3AwBBACEFIAAQAwsgACAFaiABLQAAOgAAIAVBAWohBSABQQFqIQEMAAsLIAQgBa03AwALYQEDfyAAQcABaiEBIABByAFqIQIgASABKQMAIAIpAwB8NwMAIABCfzcD0AEgAikDAKchAwJAA0AgA0GAAUYNASAAIANqQQA6AAAgA0EBaiEDDAALCyACIAOtNwMAIAAQAwuqOwIgfgl/IABBgAFqISEgAEGIAWohIiAAQZABaiEjIABBmAFqISQgAEGgAWohJSAAQagBaiEmIABBsAFqIScgAEG4AWohKCAhKQMAIQEgIikDACECICMpAwAhAyAkKQMAIQQgJSkDACEFICYpAwAhBiAnKQMAIQcgKCkDACEIQoiS853/zPmE6gAhCUK7zqqm2NDrs7t/IQpCq/DT9K/uvLc8IQtC8e30+KWn/aelfyEMQtGFmu/6z5SH0QAhDUKf2PnZwpHagpt/IQ5C6/qG2r+19sEfIQ9C+cL4m5Gjs/DbACEQIAApAwAhESAAKQMIIRIgACkDECETIAApAxghFCAAKQMgIRUgACkDKCEWIAApAzAhFyAAKQM4IRggACkDQCEZIAApA0ghGiAAKQNQIRsgACkDWCEcIAApA2AhHSAAKQNoIR4gACkDcCEfIAApA3ghICANIAApA8ABhSENIA8gACkD0AGFIQ8gASAFIBF8fCEBIA0gAYVCIIohDSAJIA18IQkgBSAJhUIYiiEFIAEgBSASfHwhASANIAGFQhCKIQ0gCSANfCEJIAUgCYVCP4ohBSACIAYgE3x8IQIgDiAChUIgiiEOIAogDnwhCiAGIAqFQhiKIQYgAiAGIBR8fCECIA4gAoVCEIohDiAKIA58IQogBiAKhUI/iiEGIAMgByAVfHwhAyAPIAOFQiCKIQ8gCyAPfCELIAcgC4VCGIohByADIAcgFnx8IQMgDyADhUIQiiEPIAsgD3whCyAHIAuFQj+KIQcgBCAIIBd8fCEEIBAgBIVCIIohECAMIBB8IQwgCCAMhUIYiiEIIAQgCCAYfHwhBCAQIASFQhCKIRAgDCAQfCEMIAggDIVCP4ohCCABIAYgGXx8IQEgECABhUIgiiEQIAsgEHwhCyAGIAuFQhiKIQYgASAGIBp8fCEBIBAgAYVCEIohECALIBB8IQsgBiALhUI/iiEGIAIgByAbfHwhAiANIAKFQiCKIQ0gDCANfCEMIAcgDIVCGIohByACIAcgHHx8IQIgDSAChUIQiiENIAwgDXwhDCAHIAyFQj+KIQcgAyAIIB18fCEDIA4gA4VCIIohDiAJIA58IQkgCCAJhUIYiiEIIAMgCCAefHwhAyAOIAOFQhCKIQ4gCSAOfCEJIAggCYVCP4ohCCAEIAUgH3x8IQQgDyAEhUIgiiEPIAogD3whCiAFIAqFQhiKIQUgBCAFICB8fCEEIA8gBIVCEIohDyAKIA98IQogBSAKhUI/iiEFIAEgBSAffHwhASANIAGFQiCKIQ0gCSANfCEJIAUgCYVCGIohBSABIAUgG3x8IQEgDSABhUIQiiENIAkgDXwhCSAFIAmFQj+KIQUgAiAGIBV8fCECIA4gAoVCIIohDiAKIA58IQogBiAKhUIYiiEGIAIgBiAZfHwhAiAOIAKFQhCKIQ4gCiAOfCEKIAYgCoVCP4ohBiADIAcgGnx8IQMgDyADhUIgiiEPIAsgD3whCyAHIAuFQhiKIQcgAyAHICB8fCEDIA8gA4VCEIohDyALIA98IQsgByALhUI/iiEHIAQgCCAefHwhBCAQIASFQiCKIRAgDCAQfCEMIAggDIVCGIohCCAEIAggF3x8IQQgECAEhUIQiiEQIAwgEHwhDCAIIAyFQj+KIQggASAGIBJ8fCEBIBAgAYVCIIohECALIBB8IQsgBiALhUIYiiEGIAEgBiAdfHwhASAQIAGFQhCKIRAgCyAQfCELIAYgC4VCP4ohBiACIAcgEXx8IQIgDSAChUIgiiENIAwgDXwhDCAHIAyFQhiKIQcgAiAHIBN8fCECIA0gAoVCEIohDSAMIA18IQwgByAMhUI/iiEHIAMgCCAcfHwhAyAOIAOFQiCKIQ4gCSAOfCEJIAggCYVCGIohCCADIAggGHx8IQMgDiADhUIQiiEOIAkgDnwhCSAIIAmFQj+KIQggBCAFIBZ8fCEEIA8gBIVCIIohDyAKIA98IQogBSAKhUIYiiEFIAQgBSAUfHwhBCAPIASFQhCKIQ8gCiAPfCEKIAUgCoVCP4ohBSABIAUgHHx8IQEgDSABhUIgiiENIAkgDXwhCSAFIAmFQhiKIQUgASAFIBl8fCEBIA0gAYVCEIohDSAJIA18IQkgBSAJhUI/iiEFIAIgBiAdfHwhAiAOIAKFQiCKIQ4gCiAOfCEKIAYgCoVCGIohBiACIAYgEXx8IQIgDiAChUIQiiEOIAogDnwhCiAGIAqFQj+KIQYgAyAHIBZ8fCEDIA8gA4VCIIohDyALIA98IQsgByALhUIYiiEHIAMgByATfHwhAyAPIAOFQhCKIQ8gCyAPfCELIAcgC4VCP4ohByAEIAggIHx8IQQgECAEhUIgiiEQIAwgEHwhDCAIIAyFQhiKIQggBCAIIB58fCEEIBAgBIVCEIohECAMIBB8IQwgCCAMhUI/iiEIIAEgBiAbfHwhASAQIAGFQiCKIRAgCyAQfCELIAYgC4VCGIohBiABIAYgH3x8IQEgECABhUIQiiEQIAsgEHwhCyAGIAuFQj+KIQYgAiAHIBR8fCECIA0gAoVCIIohDSAMIA18IQwgByAMhUIYiiEHIAIgByAXfHwhAiANIAKFQhCKIQ0gDCANfCEMIAcgDIVCP4ohByADIAggGHx8IQMgDiADhUIgiiEOIAkgDnwhCSAIIAmFQhiKIQggAyAIIBJ8fCEDIA4gA4VCEIohDiAJIA58IQkgCCAJhUI/iiEIIAQgBSAafHwhBCAPIASFQiCKIQ8gCiAPfCEKIAUgCoVCGIohBSAEIAUgFXx8IQQgDyAEhUIQiiEPIAogD3whCiAFIAqFQj+KIQUgASAFIBh8fCEBIA0gAYVCIIohDSAJIA18IQkgBSAJhUIYiiEFIAEgBSAafHwhASANIAGFQhCKIQ0gCSANfCEJIAUgCYVCP4ohBSACIAYgFHx8IQIgDiAChUIgiiEOIAogDnwhCiAGIAqFQhiKIQYgAiAGIBJ8fCECIA4gAoVCEIohDiAKIA58IQogBiAKhUI/iiEGIAMgByAefHwhAyAPIAOFQiCKIQ8gCyAPfCELIAcgC4VCGIohByADIAcgHXx8IQMgDyADhUIQiiEPIAsgD3whCyAHIAuFQj+KIQcgBCAIIBx8fCEEIBAgBIVCIIohECAMIBB8IQwgCCAMhUIYiiEIIAQgCCAffHwhBCAQIASFQhCKIRAgDCAQfCEMIAggDIVCP4ohCCABIAYgE3x8IQEgECABhUIgiiEQIAsgEHwhCyAGIAuFQhiKIQYgASAGIBd8fCEBIBAgAYVCEIohECALIBB8IQsgBiALhUI/iiEGIAIgByAWfHwhAiANIAKFQiCKIQ0gDCANfCEMIAcgDIVCGIohByACIAcgG3x8IQIgDSAChUIQiiENIAwgDXwhDCAHIAyFQj+KIQcgAyAIIBV8fCEDIA4gA4VCIIohDiAJIA58IQkgCCAJhUIYiiEIIAMgCCARfHwhAyAOIAOFQhCKIQ4gCSAOfCEJIAggCYVCP4ohCCAEIAUgIHx8IQQgDyAEhUIgiiEPIAogD3whCiAFIAqFQhiKIQUgBCAFIBl8fCEEIA8gBIVCEIohDyAKIA98IQogBSAKhUI/iiEFIAEgBSAafHwhASANIAGFQiCKIQ0gCSANfCEJIAUgCYVCGIohBSABIAUgEXx8IQEgDSABhUIQiiENIAkgDXwhCSAFIAmFQj+KIQUgAiAGIBZ8fCECIA4gAoVCIIohDiAKIA58IQogBiAKhUIYiiEGIAIgBiAYfHwhAiAOIAKFQhCKIQ4gCiAOfCEKIAYgCoVCP4ohBiADIAcgE3x8IQMgDyADhUIgiiEPIAsgD3whCyAHIAuFQhiKIQcgAyAHIBV8fCEDIA8gA4VCEIohDyALIA98IQsgByALhUI/iiEHIAQgCCAbfHwhBCAQIASFQiCKIRAgDCAQfCEMIAggDIVCGIohCCAEIAggIHx8IQQgECAEhUIQiiEQIAwgEHwhDCAIIAyFQj+KIQggASAGIB98fCEBIBAgAYVCIIohECALIBB8IQsgBiALhUIYiiEGIAEgBiASfHwhASAQIAGFQhCKIRAgCyAQfCELIAYgC4VCP4ohBiACIAcgHHx8IQIgDSAChUIgiiENIAwgDXwhDCAHIAyFQhiKIQcgAiAHIB18fCECIA0gAoVCEIohDSAMIA18IQwgByAMhUI/iiEHIAMgCCAXfHwhAyAOIAOFQiCKIQ4gCSAOfCEJIAggCYVCGIohCCADIAggGXx8IQMgDiADhUIQiiEOIAkgDnwhCSAIIAmFQj+KIQggBCAFIBR8fCEEIA8gBIVCIIohDyAKIA98IQogBSAKhUIYiiEFIAQgBSAefHwhBCAPIASFQhCKIQ8gCiAPfCEKIAUgCoVCP4ohBSABIAUgE3x8IQEgDSABhUIgiiENIAkgDXwhCSAFIAmFQhiKIQUgASAFIB18fCEBIA0gAYVCEIohDSAJIA18IQkgBSAJhUI/iiEFIAIgBiAXfHwhAiAOIAKFQiCKIQ4gCiAOfCEKIAYgCoVCGIohBiACIAYgG3x8IQIgDiAChUIQiiEOIAogDnwhCiAGIAqFQj+KIQYgAyAHIBF8fCEDIA8gA4VCIIohDyALIA98IQsgByALhUIYiiEHIAMgByAcfHwhAyAPIAOFQhCKIQ8gCyAPfCELIAcgC4VCP4ohByAEIAggGXx8IQQgECAEhUIgiiEQIAwgEHwhDCAIIAyFQhiKIQggBCAIIBR8fCEEIBAgBIVCEIohECAMIBB8IQwgCCAMhUI/iiEIIAEgBiAVfHwhASAQIAGFQiCKIRAgCyAQfCELIAYgC4VCGIohBiABIAYgHnx8IQEgECABhUIQiiEQIAsgEHwhCyAGIAuFQj+KIQYgAiAHIBh8fCECIA0gAoVCIIohDSAMIA18IQwgByAMhUIYiiEHIAIgByAWfHwhAiANIAKFQhCKIQ0gDCANfCEMIAcgDIVCP4ohByADIAggIHx8IQMgDiADhUIgiiEOIAkgDnwhCSAIIAmFQhiKIQggAyAIIB98fCEDIA4gA4VCEIohDiAJIA58IQkgCCAJhUI/iiEIIAQgBSASfHwhBCAPIASFQiCKIQ8gCiAPfCEKIAUgCoVCGIohBSAEIAUgGnx8IQQgDyAEhUIQiiEPIAogD3whCiAFIAqFQj+KIQUgASAFIB18fCEBIA0gAYVCIIohDSAJIA18IQkgBSAJhUIYiiEFIAEgBSAWfHwhASANIAGFQhCKIQ0gCSANfCEJIAUgCYVCP4ohBSACIAYgEnx8IQIgDiAChUIgiiEOIAogDnwhCiAGIAqFQhiKIQYgAiAGICB8fCECIA4gAoVCEIohDiAKIA58IQogBiAKhUI/iiEGIAMgByAffHwhAyAPIAOFQiCKIQ8gCyAPfCELIAcgC4VCGIohByADIAcgHnx8IQMgDyADhUIQiiEPIAsgD3whCyAHIAuFQj+KIQcgBCAIIBV8fCEEIBAgBIVCIIohECAMIBB8IQwgCCAMhUIYiiEIIAQgCCAbfHwhBCAQIASFQhCKIRAgDCAQfCEMIAggDIVCP4ohCCABIAYgEXx8IQEgECABhUIgiiEQIAsgEHwhCyAGIAuFQhiKIQYgASAGIBh8fCEBIBAgAYVCEIohECALIBB8IQsgBiALhUI/iiEGIAIgByAXfHwhAiANIAKFQiCKIQ0gDCANfCEMIAcgDIVCGIohByACIAcgFHx8IQIgDSAChUIQiiENIAwgDXwhDCAHIAyFQj+KIQcgAyAIIBp8fCEDIA4gA4VCIIohDiAJIA58IQkgCCAJhUIYiiEIIAMgCCATfHwhAyAOIAOFQhCKIQ4gCSAOfCEJIAggCYVCP4ohCCAEIAUgGXx8IQQgDyAEhUIgiiEPIAogD3whCiAFIAqFQhiKIQUgBCAFIBx8fCEEIA8gBIVCEIohDyAKIA98IQogBSAKhUI/iiEFIAEgBSAefHwhASANIAGFQiCKIQ0gCSANfCEJIAUgCYVCGIohBSABIAUgHHx8IQEgDSABhUIQiiENIAkgDXwhCSAFIAmFQj+KIQUgAiAGIBh8fCECIA4gAoVCIIohDiAKIA58IQogBiAKhUIYiiEGIAIgBiAffHwhAiAOIAKFQhCKIQ4gCiAOfCEKIAYgCoVCP4ohBiADIAcgHXx8IQMgDyADhUIgiiEPIAsgD3whCyAHIAuFQhiKIQcgAyAHIBJ8fCEDIA8gA4VCEIohDyALIA98IQsgByALhUI/iiEHIAQgCCAUfHwhBCAQIASFQiCKIRAgDCAQfCEMIAggDIVCGIohCCAEIAggGnx8IQQgECAEhUIQiiEQIAwgEHwhDCAIIAyFQj+KIQggASAGIBZ8fCEBIBAgAYVCIIohECALIBB8IQsgBiALhUIYiiEGIAEgBiARfHwhASAQIAGFQhCKIRAgCyAQfCELIAYgC4VCP4ohBiACIAcgIHx8IQIgDSAChUIgiiENIAwgDXwhDCAHIAyFQhiKIQcgAiAHIBV8fCECIA0gAoVCEIohDSAMIA18IQwgByAMhUI/iiEHIAMgCCAZfHwhAyAOIAOFQiCKIQ4gCSAOfCEJIAggCYVCGIohCCADIAggF3x8IQMgDiADhUIQiiEOIAkgDnwhCSAIIAmFQj+KIQggBCAFIBN8fCEEIA8gBIVCIIohDyAKIA98IQogBSAKhUIYiiEFIAQgBSAbfHwhBCAPIASFQhCKIQ8gCiAPfCEKIAUgCoVCP4ohBSABIAUgF3x8IQEgDSABhUIgiiENIAkgDXwhCSAFIAmFQhiKIQUgASAFICB8fCEBIA0gAYVCEIohDSAJIA18IQkgBSAJhUI/iiEFIAIgBiAffHwhAiAOIAKFQiCKIQ4gCiAOfCEKIAYgCoVCGIohBiACIAYgGnx8IQIgDiAChUIQiiEOIAogDnwhCiAGIAqFQj+KIQYgAyAHIBx8fCEDIA8gA4VCIIohDyALIA98IQsgByALhUIYiiEHIAMgByAUfHwhAyAPIAOFQhCKIQ8gCyAPfCELIAcgC4VCP4ohByAEIAggEXx8IQQgECAEhUIgiiEQIAwgEHwhDCAIIAyFQhiKIQggBCAIIBl8fCEEIBAgBIVCEIohECAMIBB8IQwgCCAMhUI/iiEIIAEgBiAdfHwhASAQIAGFQiCKIRAgCyAQfCELIAYgC4VCGIohBiABIAYgE3x8IQEgECABhUIQiiEQIAsgEHwhCyAGIAuFQj+KIQYgAiAHIB58fCECIA0gAoVCIIohDSAMIA18IQwgByAMhUIYiiEHIAIgByAYfHwhAiANIAKFQhCKIQ0gDCANfCEMIAcgDIVCP4ohByADIAggEnx8IQMgDiADhUIgiiEOIAkgDnwhCSAIIAmFQhiKIQggAyAIIBV8fCEDIA4gA4VCEIohDiAJIA58IQkgCCAJhUI/iiEIIAQgBSAbfHwhBCAPIASFQiCKIQ8gCiAPfCEKIAUgCoVCGIohBSAEIAUgFnx8IQQgDyAEhUIQiiEPIAogD3whCiAFIAqFQj+KIQUgASAFIBt8fCEBIA0gAYVCIIohDSAJIA18IQkgBSAJhUIYiiEFIAEgBSATfHwhASANIAGFQhCKIQ0gCSANfCEJIAUgCYVCP4ohBSACIAYgGXx8IQIgDiAChUIgiiEOIAogDnwhCiAGIAqFQhiKIQYgAiAGIBV8fCECIA4gAoVCEIohDiAKIA58IQogBiAKhUI/iiEGIAMgByAYfHwhAyAPIAOFQiCKIQ8gCyAPfCELIAcgC4VCGIohByADIAcgF3x8IQMgDyADhUIQiiEPIAsgD3whCyAHIAuFQj+KIQcgBCAIIBJ8fCEEIBAgBIVCIIohECAMIBB8IQwgCCAMhUIYiiEIIAQgCCAWfHwhBCAQIASFQhCKIRAgDCAQfCEMIAggDIVCP4ohCCABIAYgIHx8IQEgECABhUIgiiEQIAsgEHwhCyAGIAuFQhiKIQYgASAGIBx8fCEBIBAgAYVCEIohECALIBB8IQsgBiALhUI/iiEGIAIgByAafHwhAiANIAKFQiCKIQ0gDCANfCEMIAcgDIVCGIohByACIAcgH3x8IQIgDSAChUIQiiENIAwgDXwhDCAHIAyFQj+KIQcgAyAIIBR8fCEDIA4gA4VCIIohDiAJIA58IQkgCCAJhUIYiiEIIAMgCCAdfHwhAyAOIAOFQhCKIQ4gCSAOfCEJIAggCYVCP4ohCCAEIAUgHnx8IQQgDyAEhUIgiiEPIAogD3whCiAFIAqFQhiKIQUgBCAFIBF8fCEEIA8gBIVCEIohDyAKIA98IQogBSAKhUI/iiEFIAEgBSARfHwhASANIAGFQiCKIQ0gCSANfCEJIAUgCYVCGIohBSABIAUgEnx8IQEgDSABhUIQiiENIAkgDXwhCSAFIAmFQj+KIQUgAiAGIBN8fCECIA4gAoVCIIohDiAKIA58IQogBiAKhUIYiiEGIAIgBiAUfHwhAiAOIAKFQhCKIQ4gCiAOfCEKIAYgCoVCP4ohBiADIAcgFXx8IQMgDyADhUIgiiEPIAsgD3whCyAHIAuFQhiKIQcgAyAHIBZ8fCEDIA8gA4VCEIohDyALIA98IQsgByALhUI/iiEHIAQgCCAXfHwhBCAQIASFQiCKIRAgDCAQfCEMIAggDIVCGIohCCAEIAggGHx8IQQgECAEhUIQiiEQIAwgEHwhDCAIIAyFQj+KIQggASAGIBl8fCEBIBAgAYVCIIohECALIBB8IQsgBiALhUIYiiEGIAEgBiAafHwhASAQIAGFQhCKIRAgCyAQfCELIAYgC4VCP4ohBiACIAcgG3x8IQIgDSAChUIgiiENIAwgDXwhDCAHIAyFQhiKIQcgAiAHIBx8fCECIA0gAoVCEIohDSAMIA18IQwgByAMhUI/iiEHIAMgCCAdfHwhAyAOIAOFQiCKIQ4gCSAOfCEJIAggCYVCGIohCCADIAggHnx8IQMgDiADhUIQiiEOIAkgDnwhCSAIIAmFQj+KIQggBCAFIB98fCEEIA8gBIVCIIohDyAKIA98IQogBSAKhUIYiiEFIAQgBSAgfHwhBCAPIASFQhCKIQ8gCiAPfCEKIAUgCoVCP4ohBSABIAUgH3x8IQEgDSABhUIgiiENIAkgDXwhCSAFIAmFQhiKIQUgASAFIBt8fCEBIA0gAYVCEIohDSAJIA18IQkgBSAJhUI/iiEFIAIgBiAVfHwhAiAOIAKFQiCKIQ4gCiAOfCEKIAYgCoVCGIohBiACIAYgGXx8IQIgDiAChUIQiiEOIAogDnwhCiAGIAqFQj+KIQYgAyAHIBp8fCEDIA8gA4VCIIohDyALIA98IQsgByALhUIYiiEHIAMgByAgfHwhAyAPIAOFQhCKIQ8gCyAPfCELIAcgC4VCP4ohByAEIAggHnx8IQQgECAEhUIgiiEQIAwgEHwhDCAIIAyFQhiKIQggBCAIIBd8fCEEIBAgBIVCEIohECAMIBB8IQwgCCAMhUI/iiEIIAEgBiASfHwhASAQIAGFQiCKIRAgCyAQfCELIAYgC4VCGIohBiABIAYgHXx8IQEgECABhUIQiiEQIAsgEHwhCyAGIAuFQj+KIQYgAiAHIBF8fCECIA0gAoVCIIohDSAMIA18IQwgByAMhUIYiiEHIAIgByATfHwhAiANIAKFQhCKIQ0gDCANfCEMIAcgDIVCP4ohByADIAggHHx8IQMgDiADhUIgiiEOIAkgDnwhCSAIIAmFQhiKIQggAyAIIBh8fCEDIA4gA4VCEIohDiAJIA58IQkgCCAJhUI/iiEIIAQgBSAWfHwhBCAPIASFQiCKIQ8gCiAPfCEKIAUgCoVCGIohBSAEIAUgFHx8IQQgDyAEhUIQiiEPIAogD3whCiAFIAqFQj+KIQUgISAhKQMAIAEgCYWFNwMAICIgIikDACACIAqFhTcDACAjICMpAwAgAyALhYU3AwAgJCAkKQMAIAQgDIWFNwMAICUgJSkDACAFIA2FhTcDACAmICYpAwAgBiAOhYU3AwAgJyAnKQMAIAcgD4WFNwMAICggKCkDACAIIBCFhTcDAAs=");
    }
});
// wasm-module:./blake2b.wat
var bytes = require_blake2b();
var compiled = WebAssembly.compile(bytes);
module.exports = async (imports)=>{
    const instance = await WebAssembly.instantiate(await compiled, imports);
    return instance.exports;
};
}),
"[project]/rayls-shield-landing-page/node_modules/blake2b-wasm/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var assert = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/nanoassert/index.js [app-ssr] (ecmascript)");
var b4a = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/b4a/index.js [app-ssr] (ecmascript)");
var wasm = null;
var wasmPromise = typeof WebAssembly !== "undefined" && __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/blake2b-wasm/blake2b.js [app-ssr] (ecmascript)")().then((mod)=>{
    wasm = mod;
});
var head = 64;
var freeList = [];
module.exports = Blake2b;
var BYTES_MIN = module.exports.BYTES_MIN = 16;
var BYTES_MAX = module.exports.BYTES_MAX = 64;
var BYTES = module.exports.BYTES = 32;
var KEYBYTES_MIN = module.exports.KEYBYTES_MIN = 16;
var KEYBYTES_MAX = module.exports.KEYBYTES_MAX = 64;
var KEYBYTES = module.exports.KEYBYTES = 32;
var SALTBYTES = module.exports.SALTBYTES = 16;
var PERSONALBYTES = module.exports.PERSONALBYTES = 16;
function Blake2b(digestLength, key, salt, personal, noAssert) {
    if (!(this instanceof Blake2b)) return new Blake2b(digestLength, key, salt, personal, noAssert);
    if (!wasm) throw new Error('WASM not loaded. Wait for Blake2b.ready(cb)');
    if (!digestLength) digestLength = 32;
    if (noAssert !== true) {
        assert(digestLength >= BYTES_MIN, 'digestLength must be at least ' + BYTES_MIN + ', was given ' + digestLength);
        assert(digestLength <= BYTES_MAX, 'digestLength must be at most ' + BYTES_MAX + ', was given ' + digestLength);
        if (key != null) {
            assert(key instanceof Uint8Array, 'key must be Uint8Array or Buffer');
            assert(key.length >= KEYBYTES_MIN, 'key must be at least ' + KEYBYTES_MIN + ', was given ' + key.length);
            assert(key.length <= KEYBYTES_MAX, 'key must be at least ' + KEYBYTES_MAX + ', was given ' + key.length);
        }
        if (salt != null) {
            assert(salt instanceof Uint8Array, 'salt must be Uint8Array or Buffer');
            assert(salt.length === SALTBYTES, 'salt must be exactly ' + SALTBYTES + ', was given ' + salt.length);
        }
        if (personal != null) {
            assert(personal instanceof Uint8Array, 'personal must be Uint8Array or Buffer');
            assert(personal.length === PERSONALBYTES, 'personal must be exactly ' + PERSONALBYTES + ', was given ' + personal.length);
        }
    }
    if (!freeList.length) {
        freeList.push(head);
        head += 216;
    }
    this.digestLength = digestLength;
    this.finalized = false;
    this.pointer = freeList.pop();
    this._memory = new Uint8Array(wasm.memory.buffer);
    this._memory.fill(0, 0, 64);
    this._memory[0] = this.digestLength;
    this._memory[1] = key ? key.length : 0;
    this._memory[2] = 1; // fanout
    this._memory[3] = 1; // depth
    if (salt) this._memory.set(salt, 32);
    if (personal) this._memory.set(personal, 48);
    if (this.pointer + 216 > this._memory.length) this._realloc(this.pointer + 216); // we need 216 bytes for the state
    wasm.blake2b_init(this.pointer, this.digestLength);
    if (key) {
        this.update(key);
        this._memory.fill(0, head, head + key.length); // whiteout key
        this._memory[this.pointer + 200] = 128;
    }
}
Blake2b.prototype._realloc = function(size) {
    wasm.memory.grow(Math.max(0, Math.ceil(Math.abs(size - this._memory.length) / 65536)));
    this._memory = new Uint8Array(wasm.memory.buffer);
};
Blake2b.prototype.update = function(input) {
    assert(this.finalized === false, 'Hash instance finalized');
    assert(input instanceof Uint8Array, 'input must be Uint8Array or Buffer');
    if (head + input.length > this._memory.length) this._realloc(head + input.length);
    this._memory.set(input, head);
    wasm.blake2b_update(this.pointer, head, head + input.length);
    return this;
};
Blake2b.prototype.digest = function(enc) {
    assert(this.finalized === false, 'Hash instance finalized');
    this.finalized = true;
    freeList.push(this.pointer);
    wasm.blake2b_final(this.pointer);
    if (!enc || enc === 'binary') {
        return this._memory.slice(this.pointer + 128, this.pointer + 128 + this.digestLength);
    }
    if (typeof enc === 'string') {
        return b4a.toString(this._memory, enc, this.pointer + 128, this.pointer + 128 + this.digestLength);
    }
    assert(enc instanceof Uint8Array && enc.length >= this.digestLength, 'input must be Uint8Array or Buffer');
    for(var i = 0; i < this.digestLength; i++){
        enc[i] = this._memory[this.pointer + 128 + i];
    }
    return enc;
};
// libsodium compat
Blake2b.prototype.final = Blake2b.prototype.digest;
Blake2b.WASM = wasm;
Blake2b.SUPPORTED = typeof WebAssembly !== 'undefined';
Blake2b.ready = function(cb) {
    if (!cb) cb = noop;
    if (!wasmPromise) return cb(new Error('WebAssembly not supported'));
    return wasmPromise.then(()=>cb(), cb);
};
Blake2b.prototype.ready = Blake2b.ready;
Blake2b.prototype.getPartialHash = function() {
    return this._memory.slice(this.pointer, this.pointer + 216);
};
Blake2b.prototype.setPartialHash = function(ph) {
    this._memory.set(ph, this.pointer);
};
function noop() {}
}),
"[project]/rayls-shield-landing-page/node_modules/blake2b/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var assert = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/nanoassert/index.js [app-ssr] (ecmascript)");
var b2wasm = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/blake2b-wasm/index.js [app-ssr] (ecmascript)");
// 64-bit unsigned addition
// Sets v[a,a+1] += v[b,b+1]
// v should be a Uint32Array
function ADD64AA(v, a, b) {
    var o0 = v[a] + v[b];
    var o1 = v[a + 1] + v[b + 1];
    if (o0 >= 0x100000000) {
        o1++;
    }
    v[a] = o0;
    v[a + 1] = o1;
}
// 64-bit unsigned addition
// Sets v[a,a+1] += b
// b0 is the low 32 bits of b, b1 represents the high 32 bits
function ADD64AC(v, a, b0, b1) {
    var o0 = v[a] + b0;
    if (b0 < 0) {
        o0 += 0x100000000;
    }
    var o1 = v[a + 1] + b1;
    if (o0 >= 0x100000000) {
        o1++;
    }
    v[a] = o0;
    v[a + 1] = o1;
}
// Little-endian byte access
function B2B_GET32(arr, i) {
    return arr[i] ^ arr[i + 1] << 8 ^ arr[i + 2] << 16 ^ arr[i + 3] << 24;
}
// G Mixing function
// The ROTRs are inlined for speed
function B2B_G(a, b, c, d, ix, iy) {
    var x0 = m[ix];
    var x1 = m[ix + 1];
    var y0 = m[iy];
    var y1 = m[iy + 1];
    ADD64AA(v, a, b); // v[a,a+1] += v[b,b+1] ... in JS we must store a uint64 as two uint32s
    ADD64AC(v, a, x0, x1); // v[a, a+1] += x ... x0 is the low 32 bits of x, x1 is the high 32 bits
    // v[d,d+1] = (v[d,d+1] xor v[a,a+1]) rotated to the right by 32 bits
    var xor0 = v[d] ^ v[a];
    var xor1 = v[d + 1] ^ v[a + 1];
    v[d] = xor1;
    v[d + 1] = xor0;
    ADD64AA(v, c, d);
    // v[b,b+1] = (v[b,b+1] xor v[c,c+1]) rotated right by 24 bits
    xor0 = v[b] ^ v[c];
    xor1 = v[b + 1] ^ v[c + 1];
    v[b] = xor0 >>> 24 ^ xor1 << 8;
    v[b + 1] = xor1 >>> 24 ^ xor0 << 8;
    ADD64AA(v, a, b);
    ADD64AC(v, a, y0, y1);
    // v[d,d+1] = (v[d,d+1] xor v[a,a+1]) rotated right by 16 bits
    xor0 = v[d] ^ v[a];
    xor1 = v[d + 1] ^ v[a + 1];
    v[d] = xor0 >>> 16 ^ xor1 << 16;
    v[d + 1] = xor1 >>> 16 ^ xor0 << 16;
    ADD64AA(v, c, d);
    // v[b,b+1] = (v[b,b+1] xor v[c,c+1]) rotated right by 63 bits
    xor0 = v[b] ^ v[c];
    xor1 = v[b + 1] ^ v[c + 1];
    v[b] = xor1 >>> 31 ^ xor0 << 1;
    v[b + 1] = xor0 >>> 31 ^ xor1 << 1;
}
// Initialization Vector
var BLAKE2B_IV32 = new Uint32Array([
    0xF3BCC908,
    0x6A09E667,
    0x84CAA73B,
    0xBB67AE85,
    0xFE94F82B,
    0x3C6EF372,
    0x5F1D36F1,
    0xA54FF53A,
    0xADE682D1,
    0x510E527F,
    0x2B3E6C1F,
    0x9B05688C,
    0xFB41BD6B,
    0x1F83D9AB,
    0x137E2179,
    0x5BE0CD19
]);
var SIGMA8 = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    14,
    10,
    4,
    8,
    9,
    15,
    13,
    6,
    1,
    12,
    0,
    2,
    11,
    7,
    5,
    3,
    11,
    8,
    12,
    0,
    5,
    2,
    15,
    13,
    10,
    14,
    3,
    6,
    7,
    1,
    9,
    4,
    7,
    9,
    3,
    1,
    13,
    12,
    11,
    14,
    2,
    6,
    5,
    10,
    4,
    0,
    15,
    8,
    9,
    0,
    5,
    7,
    2,
    4,
    10,
    15,
    14,
    1,
    11,
    12,
    6,
    8,
    3,
    13,
    2,
    12,
    6,
    10,
    0,
    11,
    8,
    3,
    4,
    13,
    7,
    5,
    15,
    14,
    1,
    9,
    12,
    5,
    1,
    15,
    14,
    13,
    4,
    10,
    0,
    7,
    6,
    3,
    9,
    2,
    8,
    11,
    13,
    11,
    7,
    14,
    12,
    1,
    3,
    9,
    5,
    0,
    15,
    4,
    8,
    6,
    2,
    10,
    6,
    15,
    14,
    9,
    11,
    3,
    0,
    8,
    12,
    2,
    13,
    7,
    1,
    4,
    10,
    5,
    10,
    2,
    8,
    4,
    7,
    6,
    1,
    5,
    15,
    11,
    9,
    14,
    3,
    12,
    13,
    0,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    14,
    10,
    4,
    8,
    9,
    15,
    13,
    6,
    1,
    12,
    0,
    2,
    11,
    7,
    5,
    3
];
// These are offsets into a uint64 buffer.
// Multiply them all by 2 to make them offsets into a uint32 buffer,
// because this is Javascript and we don't have uint64s
var SIGMA82 = new Uint8Array(SIGMA8.map(function(x) {
    return x * 2;
}));
// Compression function. 'last' flag indicates last block.
// Note we're representing 16 uint64s as 32 uint32s
var v = new Uint32Array(32);
var m = new Uint32Array(32);
function blake2bCompress(ctx, last) {
    var i = 0;
    // init work variables
    for(i = 0; i < 16; i++){
        v[i] = ctx.h[i];
        v[i + 16] = BLAKE2B_IV32[i];
    }
    // low 64 bits of offset
    v[24] = v[24] ^ ctx.t;
    v[25] = v[25] ^ ctx.t / 0x100000000;
    // high 64 bits not supported, offset may not be higher than 2**53-1
    // last block flag set ?
    if (last) {
        v[28] = ~v[28];
        v[29] = ~v[29];
    }
    // get little-endian words
    for(i = 0; i < 32; i++){
        m[i] = B2B_GET32(ctx.b, 4 * i);
    }
    // twelve rounds of mixing
    for(i = 0; i < 12; i++){
        B2B_G(0, 8, 16, 24, SIGMA82[i * 16 + 0], SIGMA82[i * 16 + 1]);
        B2B_G(2, 10, 18, 26, SIGMA82[i * 16 + 2], SIGMA82[i * 16 + 3]);
        B2B_G(4, 12, 20, 28, SIGMA82[i * 16 + 4], SIGMA82[i * 16 + 5]);
        B2B_G(6, 14, 22, 30, SIGMA82[i * 16 + 6], SIGMA82[i * 16 + 7]);
        B2B_G(0, 10, 20, 30, SIGMA82[i * 16 + 8], SIGMA82[i * 16 + 9]);
        B2B_G(2, 12, 22, 24, SIGMA82[i * 16 + 10], SIGMA82[i * 16 + 11]);
        B2B_G(4, 14, 16, 26, SIGMA82[i * 16 + 12], SIGMA82[i * 16 + 13]);
        B2B_G(6, 8, 18, 28, SIGMA82[i * 16 + 14], SIGMA82[i * 16 + 15]);
    }
    for(i = 0; i < 16; i++){
        ctx.h[i] = ctx.h[i] ^ v[i] ^ v[i + 16];
    }
}
// reusable parameter_block
var parameter_block = new Uint8Array([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0 // 60: personal
]);
// Creates a BLAKE2b hashing context
// Requires an output length between 1 and 64 bytes
// Takes an optional Uint8Array key
function Blake2b(outlen, key, salt, personal) {
    // zero out parameter_block before usage
    parameter_block.fill(0);
    // state, 'param block'
    this.b = new Uint8Array(128);
    this.h = new Uint32Array(16);
    this.t = 0; // input count
    this.c = 0; // pointer within buffer
    this.outlen = outlen; // output length in bytes
    parameter_block[0] = outlen;
    if (key) parameter_block[1] = key.length;
    parameter_block[2] = 1; // fanout
    parameter_block[3] = 1; // depth
    if (salt) parameter_block.set(salt, 32);
    if (personal) parameter_block.set(personal, 48);
    // initialize hash state
    for(var i = 0; i < 16; i++){
        this.h[i] = BLAKE2B_IV32[i] ^ B2B_GET32(parameter_block, i * 4);
    }
    // key the hash, if applicable
    if (key) {
        blake2bUpdate(this, key);
        // at the end
        this.c = 128;
    }
}
Blake2b.prototype.update = function(input) {
    assert(input instanceof Uint8Array, 'input must be Uint8Array or Buffer');
    blake2bUpdate(this, input);
    return this;
};
Blake2b.prototype.digest = function(out) {
    var buf = !out || out === 'binary' || out === 'hex' ? new Uint8Array(this.outlen) : out;
    assert(buf instanceof Uint8Array, 'out must be "binary", "hex", Uint8Array, or Buffer');
    assert(buf.length >= this.outlen, 'out must have at least outlen bytes of space');
    blake2bFinal(this, buf);
    if (out === 'hex') return hexSlice(buf);
    return buf;
};
Blake2b.prototype.final = Blake2b.prototype.digest;
Blake2b.ready = function(cb) {
    b2wasm.ready(function() {
        cb(); // ignore the error
    });
};
// Updates a BLAKE2b streaming hash
// Requires hash context and Uint8Array (byte array)
function blake2bUpdate(ctx, input) {
    for(var i = 0; i < input.length; i++){
        if (ctx.c === 128) {
            ctx.t += ctx.c; // add counters
            blake2bCompress(ctx, false); // compress (not last)
            ctx.c = 0; // counter to zero
        }
        ctx.b[ctx.c++] = input[i];
    }
}
// Completes a BLAKE2b streaming hash
// Returns a Uint8Array containing the message digest
function blake2bFinal(ctx, out) {
    ctx.t += ctx.c; // mark last block offset
    while(ctx.c < 128){
        ctx.b[ctx.c++] = 0;
    }
    blake2bCompress(ctx, true); // final block flag = 1
    for(var i = 0; i < ctx.outlen; i++){
        out[i] = ctx.h[i >> 2] >> 8 * (i & 3);
    }
    return out;
}
function hexSlice(buf) {
    var str = '';
    for(var i = 0; i < buf.length; i++)str += toHex(buf[i]);
    return str;
}
function toHex(n) {
    if (n < 16) return '0' + n.toString(16);
    return n.toString(16);
}
var Proto = Blake2b;
module.exports = function createHash(outlen, key, salt, personal, noAssert) {
    if (noAssert !== true) {
        assert(outlen >= BYTES_MIN, 'outlen must be at least ' + BYTES_MIN + ', was given ' + outlen);
        assert(outlen <= BYTES_MAX, 'outlen must be at most ' + BYTES_MAX + ', was given ' + outlen);
        if (key != null) {
            assert(key instanceof Uint8Array, 'key must be Uint8Array or Buffer');
            assert(key.length >= KEYBYTES_MIN, 'key must be at least ' + KEYBYTES_MIN + ', was given ' + key.length);
            assert(key.length <= KEYBYTES_MAX, 'key must be at most ' + KEYBYTES_MAX + ', was given ' + key.length);
        }
        if (salt != null) {
            assert(salt instanceof Uint8Array, 'salt must be Uint8Array or Buffer');
            assert(salt.length === SALTBYTES, 'salt must be exactly ' + SALTBYTES + ', was given ' + salt.length);
        }
        if (personal != null) {
            assert(personal instanceof Uint8Array, 'personal must be Uint8Array or Buffer');
            assert(personal.length === PERSONALBYTES, 'personal must be exactly ' + PERSONALBYTES + ', was given ' + personal.length);
        }
    }
    return new Proto(outlen, key, salt, personal);
};
module.exports.ready = function(cb) {
    b2wasm.ready(function() {
        cb();
    });
};
module.exports.WASM_SUPPORTED = b2wasm.SUPPORTED;
module.exports.WASM_LOADED = false;
var BYTES_MIN = module.exports.BYTES_MIN = 16;
var BYTES_MAX = module.exports.BYTES_MAX = 64;
var BYTES = module.exports.BYTES = 32;
var KEYBYTES_MIN = module.exports.KEYBYTES_MIN = 16;
var KEYBYTES_MAX = module.exports.KEYBYTES_MAX = 64;
var KEYBYTES = module.exports.KEYBYTES = 32;
var SALTBYTES = module.exports.SALTBYTES = 16;
var PERSONALBYTES = module.exports.PERSONALBYTES = 16;
b2wasm.ready(function(err) {
    if (!err) {
        module.exports.WASM_LOADED = true;
        module.exports = b2wasm;
    }
});
}),
"[project]/rayls-shield-landing-page/node_modules/readable-stream/lib/internal/streams/stream.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)");
}),
"[project]/rayls-shield-landing-page/node_modules/readable-stream/lib/internal/streams/buffer_list.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
var _require = __turbopack_context__.r("[externals]/buffer [external] (buffer, cjs)"), Buffer = _require.Buffer;
var _require2 = __turbopack_context__.r("[externals]/util [external] (util, cjs)"), inspect = _require2.inspect;
var custom = inspect && inspect.custom || 'inspect';
function copyBuffer(src, target, offset) {
    Buffer.prototype.copy.call(src, target, offset);
}
module.exports = /*#__PURE__*/ function() {
    function BufferList() {
        _classCallCheck(this, BufferList);
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    _createClass(BufferList, [
        {
            key: "push",
            value: function push(v) {
                var entry = {
                    data: v,
                    next: null
                };
                if (this.length > 0) this.tail.next = entry;
                else this.head = entry;
                this.tail = entry;
                ++this.length;
            }
        },
        {
            key: "unshift",
            value: function unshift(v) {
                var entry = {
                    data: v,
                    next: this.head
                };
                if (this.length === 0) this.tail = entry;
                this.head = entry;
                ++this.length;
            }
        },
        {
            key: "shift",
            value: function shift() {
                if (this.length === 0) return;
                var ret = this.head.data;
                if (this.length === 1) this.head = this.tail = null;
                else this.head = this.head.next;
                --this.length;
                return ret;
            }
        },
        {
            key: "clear",
            value: function clear() {
                this.head = this.tail = null;
                this.length = 0;
            }
        },
        {
            key: "join",
            value: function join(s) {
                if (this.length === 0) return '';
                var p = this.head;
                var ret = '' + p.data;
                while(p = p.next)ret += s + p.data;
                return ret;
            }
        },
        {
            key: "concat",
            value: function concat(n) {
                if (this.length === 0) return Buffer.alloc(0);
                var ret = Buffer.allocUnsafe(n >>> 0);
                var p = this.head;
                var i = 0;
                while(p){
                    copyBuffer(p.data, ret, i);
                    i += p.data.length;
                    p = p.next;
                }
                return ret;
            }
        },
        {
            key: "consume",
            value: function consume(n, hasStrings) {
                var ret;
                if (n < this.head.data.length) {
                    // `slice` is the same for buffers and strings.
                    ret = this.head.data.slice(0, n);
                    this.head.data = this.head.data.slice(n);
                } else if (n === this.head.data.length) {
                    // First chunk is a perfect match.
                    ret = this.shift();
                } else {
                    // Result spans more than one buffer.
                    ret = hasStrings ? this._getString(n) : this._getBuffer(n);
                }
                return ret;
            }
        },
        {
            key: "first",
            value: function first() {
                return this.head.data;
            }
        },
        {
            key: "_getString",
            value: function _getString(n) {
                var p = this.head;
                var c = 1;
                var ret = p.data;
                n -= ret.length;
                while(p = p.next){
                    var str = p.data;
                    var nb = n > str.length ? str.length : n;
                    if (nb === str.length) ret += str;
                    else ret += str.slice(0, n);
                    n -= nb;
                    if (n === 0) {
                        if (nb === str.length) {
                            ++c;
                            if (p.next) this.head = p.next;
                            else this.head = this.tail = null;
                        } else {
                            this.head = p;
                            p.data = str.slice(nb);
                        }
                        break;
                    }
                    ++c;
                }
                this.length -= c;
                return ret;
            }
        },
        {
            key: "_getBuffer",
            value: function _getBuffer(n) {
                var ret = Buffer.allocUnsafe(n);
                var p = this.head;
                var c = 1;
                p.data.copy(ret);
                n -= p.data.length;
                while(p = p.next){
                    var buf = p.data;
                    var nb = n > buf.length ? buf.length : n;
                    buf.copy(ret, ret.length - n, 0, nb);
                    n -= nb;
                    if (n === 0) {
                        if (nb === buf.length) {
                            ++c;
                            if (p.next) this.head = p.next;
                            else this.head = this.tail = null;
                        } else {
                            this.head = p;
                            p.data = buf.slice(nb);
                        }
                        break;
                    }
                    ++c;
                }
                this.length -= c;
                return ret;
            }
        },
        {
            key: custom,
            value: function value(_, options) {
                return inspect(this, _objectSpread(_objectSpread({}, options), {}, {
                    // Only inspect one level.
                    depth: 0,
                    // It should not recurse.
                    customInspect: false
                }));
            }
        }
    ]);
    return BufferList;
}();
}),
"[project]/rayls-shield-landing-page/node_modules/readable-stream/lib/internal/streams/destroy.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// undocumented cb() API, needed for core, not for public API
function destroy(err, cb) {
    var _this = this;
    var readableDestroyed = this._readableState && this._readableState.destroyed;
    var writableDestroyed = this._writableState && this._writableState.destroyed;
    if (readableDestroyed || writableDestroyed) {
        if (cb) {
            cb(err);
        } else if (err) {
            if (!this._writableState) {
                process.nextTick(emitErrorNT, this, err);
            } else if (!this._writableState.errorEmitted) {
                this._writableState.errorEmitted = true;
                process.nextTick(emitErrorNT, this, err);
            }
        }
        return this;
    }
    // we set destroyed to true before firing error callbacks in order
    // to make it re-entrance safe in case destroy() is called within callbacks
    if (this._readableState) {
        this._readableState.destroyed = true;
    }
    // if this is a duplex stream mark the writable part as destroyed as well
    if (this._writableState) {
        this._writableState.destroyed = true;
    }
    this._destroy(err || null, function(err) {
        if (!cb && err) {
            if (!_this._writableState) {
                process.nextTick(emitErrorAndCloseNT, _this, err);
            } else if (!_this._writableState.errorEmitted) {
                _this._writableState.errorEmitted = true;
                process.nextTick(emitErrorAndCloseNT, _this, err);
            } else {
                process.nextTick(emitCloseNT, _this);
            }
        } else if (cb) {
            process.nextTick(emitCloseNT, _this);
            cb(err);
        } else {
            process.nextTick(emitCloseNT, _this);
        }
    });
    return this;
}
function emitErrorAndCloseNT(self, err) {
    emitErrorNT(self, err);
    emitCloseNT(self);
}
function emitCloseNT(self) {
    if (self._writableState && !self._writableState.emitClose) return;
    if (self._readableState && !self._readableState.emitClose) return;
    self.emit('close');
}
function undestroy() {
    if (this._readableState) {
        this._readableState.destroyed = false;
        this._readableState.reading = false;
        this._readableState.ended = false;
        this._readableState.endEmitted = false;
    }
    if (this._writableState) {
        this._writableState.destroyed = false;
        this._writableState.ended = false;
        this._writableState.ending = false;
        this._writableState.finalCalled = false;
        this._writableState.prefinished = false;
        this._writableState.finished = false;
        this._writableState.errorEmitted = false;
    }
}
function emitErrorNT(self, err) {
    self.emit('error', err);
}
function errorOrDestroy(stream, err) {
    // We have tests that rely on errors being emitted
    // in the same tick, so changing this is semver major.
    // For now when you opt-in to autoDestroy we allow
    // the error to be emitted nextTick. In a future
    // semver major update we should change the default to this.
    var rState = stream._readableState;
    var wState = stream._writableState;
    if (rState && rState.autoDestroy || wState && wState.autoDestroy) stream.destroy(err);
    else stream.emit('error', err);
}
module.exports = {
    destroy: destroy,
    undestroy: undestroy,
    errorOrDestroy: errorOrDestroy
};
}),
"[project]/rayls-shield-landing-page/node_modules/readable-stream/errors.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const codes = {};
function createErrorType(code, message, Base) {
    if (!Base) {
        Base = Error;
    }
    function getMessage(arg1, arg2, arg3) {
        if (typeof message === 'string') {
            return message;
        } else {
            return message(arg1, arg2, arg3);
        }
    }
    class NodeError extends Base {
        constructor(arg1, arg2, arg3){
            super(getMessage(arg1, arg2, arg3));
        }
    }
    NodeError.prototype.name = Base.name;
    NodeError.prototype.code = code;
    codes[code] = NodeError;
}
// https://github.com/nodejs/node/blob/v10.8.0/lib/internal/errors.js
function oneOf(expected, thing) {
    if (Array.isArray(expected)) {
        const len = expected.length;
        expected = expected.map((i)=>String(i));
        if (len > 2) {
            return `one of ${thing} ${expected.slice(0, len - 1).join(', ')}, or ` + expected[len - 1];
        } else if (len === 2) {
            return `one of ${thing} ${expected[0]} or ${expected[1]}`;
        } else {
            return `of ${thing} ${expected[0]}`;
        }
    } else {
        return `of ${thing} ${String(expected)}`;
    }
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
function startsWith(str, search, pos) {
    return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
function endsWith(str, search, this_len) {
    if (this_len === undefined || this_len > str.length) {
        this_len = str.length;
    }
    return str.substring(this_len - search.length, this_len) === search;
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
function includes(str, search, start) {
    if (typeof start !== 'number') {
        start = 0;
    }
    if (start + search.length > str.length) {
        return false;
    } else {
        return str.indexOf(search, start) !== -1;
    }
}
createErrorType('ERR_INVALID_OPT_VALUE', function(name, value) {
    return 'The value "' + value + '" is invalid for option "' + name + '"';
}, TypeError);
createErrorType('ERR_INVALID_ARG_TYPE', function(name, expected, actual) {
    // determiner: 'must be' or 'must not be'
    let determiner;
    if (typeof expected === 'string' && startsWith(expected, 'not ')) {
        determiner = 'must not be';
        expected = expected.replace(/^not /, '');
    } else {
        determiner = 'must be';
    }
    let msg;
    if (endsWith(name, ' argument')) {
        // For cases like 'first argument'
        msg = `The ${name} ${determiner} ${oneOf(expected, 'type')}`;
    } else {
        const type = includes(name, '.') ? 'property' : 'argument';
        msg = `The "${name}" ${type} ${determiner} ${oneOf(expected, 'type')}`;
    }
    msg += `. Received type ${typeof actual}`;
    return msg;
}, TypeError);
createErrorType('ERR_STREAM_PUSH_AFTER_EOF', 'stream.push() after EOF');
createErrorType('ERR_METHOD_NOT_IMPLEMENTED', function(name) {
    return 'The ' + name + ' method is not implemented';
});
createErrorType('ERR_STREAM_PREMATURE_CLOSE', 'Premature close');
createErrorType('ERR_STREAM_DESTROYED', function(name) {
    return 'Cannot call ' + name + ' after a stream was destroyed';
});
createErrorType('ERR_MULTIPLE_CALLBACK', 'Callback called multiple times');
createErrorType('ERR_STREAM_CANNOT_PIPE', 'Cannot pipe, not readable');
createErrorType('ERR_STREAM_WRITE_AFTER_END', 'write after end');
createErrorType('ERR_STREAM_NULL_VALUES', 'May not write null values to stream', TypeError);
createErrorType('ERR_UNKNOWN_ENCODING', function(arg) {
    return 'Unknown encoding: ' + arg;
}, TypeError);
createErrorType('ERR_STREAM_UNSHIFT_AFTER_END_EVENT', 'stream.unshift() after end event');
module.exports.codes = codes;
}),
"[project]/rayls-shield-landing-page/node_modules/readable-stream/lib/internal/streams/state.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var ERR_INVALID_OPT_VALUE = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/readable-stream/errors.js [app-ssr] (ecmascript)").codes.ERR_INVALID_OPT_VALUE;
function highWaterMarkFrom(options, isDuplex, duplexKey) {
    return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
}
function getHighWaterMark(state, options, duplexKey, isDuplex) {
    var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);
    if (hwm != null) {
        if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
            var name = isDuplex ? duplexKey : 'highWaterMark';
            throw new ERR_INVALID_OPT_VALUE(name, hwm);
        }
        return Math.floor(hwm);
    }
    // Default value
    return state.objectMode ? 16 : 16 * 1024;
}
module.exports = {
    getHighWaterMark: getHighWaterMark
};
}),
"[project]/rayls-shield-landing-page/node_modules/readable-stream/lib/_stream_writable.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

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
// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.
module.exports = Writable;
/* <replacement> */ function WriteReq(chunk, encoding, cb) {
    this.chunk = chunk;
    this.encoding = encoding;
    this.callback = cb;
    this.next = null;
}
// It seems a linked list but it is not
// there will be only 2 of these for each stream
function CorkedRequest(state) {
    var _this = this;
    this.next = null;
    this.entry = null;
    this.finish = function() {
        onCorkedFinish(_this, state);
    };
}
/* </replacement> */ /*<replacement>*/ var Duplex;
/*</replacement>*/ Writable.WritableState = WritableState;
/*<replacement>*/ var internalUtil = {
    deprecate: __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/util-deprecate/node.js [app-ssr] (ecmascript)")
};
/*</replacement>*/ /*<replacement>*/ var Stream = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/readable-stream/lib/internal/streams/stream.js [app-ssr] (ecmascript)");
/*</replacement>*/ var Buffer = __turbopack_context__.r("[externals]/buffer [external] (buffer, cjs)").Buffer;
var OurUint8Array = (("TURBOPACK compile-time truthy", 1) ? /*TURBOPACK member replacement*/ __turbopack_context__.g : "TURBOPACK unreachable").Uint8Array || function() {};
function _uint8ArrayToBuffer(chunk) {
    return Buffer.from(chunk);
}
function _isUint8Array(obj) {
    return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}
var destroyImpl = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/readable-stream/lib/internal/streams/destroy.js [app-ssr] (ecmascript)");
var _require = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/readable-stream/lib/internal/streams/state.js [app-ssr] (ecmascript)"), getHighWaterMark = _require.getHighWaterMark;
var _require$codes = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/readable-stream/errors.js [app-ssr] (ecmascript)").codes, ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE, ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED, ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK, ERR_STREAM_CANNOT_PIPE = _require$codes.ERR_STREAM_CANNOT_PIPE, ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED, ERR_STREAM_NULL_VALUES = _require$codes.ERR_STREAM_NULL_VALUES, ERR_STREAM_WRITE_AFTER_END = _require$codes.ERR_STREAM_WRITE_AFTER_END, ERR_UNKNOWN_ENCODING = _require$codes.ERR_UNKNOWN_ENCODING;
var errorOrDestroy = destroyImpl.errorOrDestroy;
__turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/inherits/inherits.js [app-ssr] (ecmascript)")(Writable, Stream);
function nop() {}
function WritableState(options, stream, isDuplex) {
    Duplex = Duplex || __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/readable-stream/lib/_stream_duplex.js [app-ssr] (ecmascript)");
    options = options || {};
    // Duplex streams are both readable and writable, but share
    // the same options object.
    // However, some cases require setting options to different
    // values for the readable and the writable sides of the duplex stream,
    // e.g. options.readableObjectMode vs. options.writableObjectMode, etc.
    if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof Duplex;
    // object stream flag to indicate whether or not this stream
    // contains buffers or objects.
    this.objectMode = !!options.objectMode;
    if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode;
    // the point at which write() starts returning false
    // Note: 0 is a valid value, means that we always return false if
    // the entire buffer is not flushed immediately on write()
    this.highWaterMark = getHighWaterMark(this, options, 'writableHighWaterMark', isDuplex);
    // if _final has been called
    this.finalCalled = false;
    // drain event flag.
    this.needDrain = false;
    // at the start of calling end()
    this.ending = false;
    // when end() has been called, and returned
    this.ended = false;
    // when 'finish' is emitted
    this.finished = false;
    // has it been destroyed
    this.destroyed = false;
    // should we decode strings into buffers before passing to _write?
    // this is here so that some node-core streams can optimize string
    // handling at a lower level.
    var noDecode = options.decodeStrings === false;
    this.decodeStrings = !noDecode;
    // Crypto is kind of old and crusty.  Historically, its default string
    // encoding is 'binary' so we have to make this configurable.
    // Everything else in the universe uses 'utf8', though.
    this.defaultEncoding = options.defaultEncoding || 'utf8';
    // not an actual buffer we keep track of, but a measurement
    // of how much we're waiting to get pushed to some underlying
    // socket or file.
    this.length = 0;
    // a flag to see when we're in the middle of a write.
    this.writing = false;
    // when true all writes will be buffered until .uncork() call
    this.corked = 0;
    // a flag to be able to tell if the onwrite cb is called immediately,
    // or on a later tick.  We set this to true at first, because any
    // actions that shouldn't happen until "later" should generally also
    // not happen before the first write call.
    this.sync = true;
    // a flag to know if we're processing previously buffered items, which
    // may call the _write() callback in the same tick, so that we don't
    // end up in an overlapped onwrite situation.
    this.bufferProcessing = false;
    // the callback that's passed to _write(chunk,cb)
    this.onwrite = function(er) {
        onwrite(stream, er);
    };
    // the callback that the user supplies to write(chunk,encoding,cb)
    this.writecb = null;
    // the amount that is being written when _write is called.
    this.writelen = 0;
    this.bufferedRequest = null;
    this.lastBufferedRequest = null;
    // number of pending user-supplied write callbacks
    // this must be 0 before 'finish' can be emitted
    this.pendingcb = 0;
    // emit prefinish if the only thing we're waiting for is _write cbs
    // This is relevant for synchronous Transform streams
    this.prefinished = false;
    // True if the error was already emitted and should not be thrown again
    this.errorEmitted = false;
    // Should close be emitted on destroy. Defaults to true.
    this.emitClose = options.emitClose !== false;
    // Should .destroy() be called after 'finish' (and potentially 'end')
    this.autoDestroy = !!options.autoDestroy;
    // count buffered requests
    this.bufferedRequestCount = 0;
    // allocate the first CorkedRequest, there is always
    // one allocated and free to use, and we maintain at most two
    this.corkedRequestsFree = new CorkedRequest(this);
}
WritableState.prototype.getBuffer = function getBuffer() {
    var current = this.bufferedRequest;
    var out = [];
    while(current){
        out.push(current);
        current = current.next;
    }
    return out;
};
(function() {
    try {
        Object.defineProperty(WritableState.prototype, 'buffer', {
            get: internalUtil.deprecate(function writableStateBufferGetter() {
                return this.getBuffer();
            }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.', 'DEP0003')
        });
    } catch (_) {}
})();
// Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.
var realHasInstance;
if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
    realHasInstance = Function.prototype[Symbol.hasInstance];
    Object.defineProperty(Writable, Symbol.hasInstance, {
        value: function value(object) {
            if (realHasInstance.call(this, object)) return true;
            if (this !== Writable) return false;
            return object && object._writableState instanceof WritableState;
        }
    });
} else {
    realHasInstance = function realHasInstance(object) {
        return object instanceof this;
    };
}
function Writable(options) {
    Duplex = Duplex || __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/readable-stream/lib/_stream_duplex.js [app-ssr] (ecmascript)");
    // Writable ctor is applied to Duplexes, too.
    // `realHasInstance` is necessary because using plain `instanceof`
    // would return false, as no `_writableState` property is attached.
    // Trying to use the custom `instanceof` for Writable here will also break the
    // Node.js LazyTransform implementation, which has a non-trivial getter for
    // `_writableState` that would lead to infinite recursion.
    // Checking for a Stream.Duplex instance is faster here instead of inside
    // the WritableState constructor, at least with V8 6.5
    var isDuplex = this instanceof Duplex;
    if (!isDuplex && !realHasInstance.call(Writable, this)) return new Writable(options);
    this._writableState = new WritableState(options, this, isDuplex);
    // legacy.
    this.writable = true;
    if (options) {
        if (typeof options.write === 'function') this._write = options.write;
        if (typeof options.writev === 'function') this._writev = options.writev;
        if (typeof options.destroy === 'function') this._destroy = options.destroy;
        if (typeof options.final === 'function') this._final = options.final;
    }
    Stream.call(this);
}
// Otherwise people can pipe Writable streams, which is just wrong.
Writable.prototype.pipe = function() {
    errorOrDestroy(this, new ERR_STREAM_CANNOT_PIPE());
};
function writeAfterEnd(stream, cb) {
    var er = new ERR_STREAM_WRITE_AFTER_END();
    // TODO: defer error events consistently everywhere, not just the cb
    errorOrDestroy(stream, er);
    process.nextTick(cb, er);
}
// Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.
function validChunk(stream, state, chunk, cb) {
    var er;
    if (chunk === null) {
        er = new ERR_STREAM_NULL_VALUES();
    } else if (typeof chunk !== 'string' && !state.objectMode) {
        er = new ERR_INVALID_ARG_TYPE('chunk', [
            'string',
            'Buffer'
        ], chunk);
    }
    if (er) {
        errorOrDestroy(stream, er);
        process.nextTick(cb, er);
        return false;
    }
    return true;
}
Writable.prototype.write = function(chunk, encoding, cb) {
    var state = this._writableState;
    var ret = false;
    var isBuf = !state.objectMode && _isUint8Array(chunk);
    if (isBuf && !Buffer.isBuffer(chunk)) {
        chunk = _uint8ArrayToBuffer(chunk);
    }
    if (typeof encoding === 'function') {
        cb = encoding;
        encoding = null;
    }
    if (isBuf) encoding = 'buffer';
    else if (!encoding) encoding = state.defaultEncoding;
    if (typeof cb !== 'function') cb = nop;
    if (state.ending) writeAfterEnd(this, cb);
    else if (isBuf || validChunk(this, state, chunk, cb)) {
        state.pendingcb++;
        ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
    }
    return ret;
};
Writable.prototype.cork = function() {
    this._writableState.corked++;
};
Writable.prototype.uncork = function() {
    var state = this._writableState;
    if (state.corked) {
        state.corked--;
        if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
    }
};
Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
    // node::ParseEncoding() requires lower case.
    if (typeof encoding === 'string') encoding = encoding.toLowerCase();
    if (!([
        'hex',
        'utf8',
        'utf-8',
        'ascii',
        'binary',
        'base64',
        'ucs2',
        'ucs-2',
        'utf16le',
        'utf-16le',
        'raw'
    ].indexOf((encoding + '').toLowerCase()) > -1)) throw new ERR_UNKNOWN_ENCODING(encoding);
    this._writableState.defaultEncoding = encoding;
    return this;
};
Object.defineProperty(Writable.prototype, 'writableBuffer', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState && this._writableState.getBuffer();
    }
});
function decodeChunk(state, chunk, encoding) {
    if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
        chunk = Buffer.from(chunk, encoding);
    }
    return chunk;
}
Object.defineProperty(Writable.prototype, 'writableHighWaterMark', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState.highWaterMark;
    }
});
// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
    if (!isBuf) {
        var newChunk = decodeChunk(state, chunk, encoding);
        if (chunk !== newChunk) {
            isBuf = true;
            encoding = 'buffer';
            chunk = newChunk;
        }
    }
    var len = state.objectMode ? 1 : chunk.length;
    state.length += len;
    var ret = state.length < state.highWaterMark;
    // we must ensure that previous needDrain will not be reset to false.
    if (!ret) state.needDrain = true;
    if (state.writing || state.corked) {
        var last = state.lastBufferedRequest;
        state.lastBufferedRequest = {
            chunk: chunk,
            encoding: encoding,
            isBuf: isBuf,
            callback: cb,
            next: null
        };
        if (last) {
            last.next = state.lastBufferedRequest;
        } else {
            state.bufferedRequest = state.lastBufferedRequest;
        }
        state.bufferedRequestCount += 1;
    } else {
        doWrite(stream, state, false, len, chunk, encoding, cb);
    }
    return ret;
}
function doWrite(stream, state, writev, len, chunk, encoding, cb) {
    state.writelen = len;
    state.writecb = cb;
    state.writing = true;
    state.sync = true;
    if (state.destroyed) state.onwrite(new ERR_STREAM_DESTROYED('write'));
    else if (writev) stream._writev(chunk, state.onwrite);
    else stream._write(chunk, encoding, state.onwrite);
    state.sync = false;
}
function onwriteError(stream, state, sync, er, cb) {
    --state.pendingcb;
    if (sync) {
        // defer the callback if we are being called synchronously
        // to avoid piling up things on the stack
        process.nextTick(cb, er);
        // this can emit finish, and it will always happen
        // after error
        process.nextTick(finishMaybe, stream, state);
        stream._writableState.errorEmitted = true;
        errorOrDestroy(stream, er);
    } else {
        // the caller expect this to happen before if
        // it is async
        cb(er);
        stream._writableState.errorEmitted = true;
        errorOrDestroy(stream, er);
        // this can emit finish, but finish must
        // always follow error
        finishMaybe(stream, state);
    }
}
function onwriteStateUpdate(state) {
    state.writing = false;
    state.writecb = null;
    state.length -= state.writelen;
    state.writelen = 0;
}
function onwrite(stream, er) {
    var state = stream._writableState;
    var sync = state.sync;
    var cb = state.writecb;
    if (typeof cb !== 'function') throw new ERR_MULTIPLE_CALLBACK();
    onwriteStateUpdate(state);
    if (er) onwriteError(stream, state, sync, er, cb);
    else {
        // Check if we're actually ready to finish, but don't emit yet
        var finished = needFinish(state) || stream.destroyed;
        if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
            clearBuffer(stream, state);
        }
        if (sync) {
            process.nextTick(afterWrite, stream, state, finished, cb);
        } else {
            afterWrite(stream, state, finished, cb);
        }
    }
}
function afterWrite(stream, state, finished, cb) {
    if (!finished) onwriteDrain(stream, state);
    state.pendingcb--;
    cb();
    finishMaybe(stream, state);
}
// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream, state) {
    if (state.length === 0 && state.needDrain) {
        state.needDrain = false;
        stream.emit('drain');
    }
}
// if there's something in the buffer waiting, then process it
function clearBuffer(stream, state) {
    state.bufferProcessing = true;
    var entry = state.bufferedRequest;
    if (stream._writev && entry && entry.next) {
        // Fast case, write everything using _writev()
        var l = state.bufferedRequestCount;
        var buffer = new Array(l);
        var holder = state.corkedRequestsFree;
        holder.entry = entry;
        var count = 0;
        var allBuffers = true;
        while(entry){
            buffer[count] = entry;
            if (!entry.isBuf) allBuffers = false;
            entry = entry.next;
            count += 1;
        }
        buffer.allBuffers = allBuffers;
        doWrite(stream, state, true, state.length, buffer, '', holder.finish);
        // doWrite is almost always async, defer these to save a bit of time
        // as the hot path ends with doWrite
        state.pendingcb++;
        state.lastBufferedRequest = null;
        if (holder.next) {
            state.corkedRequestsFree = holder.next;
            holder.next = null;
        } else {
            state.corkedRequestsFree = new CorkedRequest(state);
        }
        state.bufferedRequestCount = 0;
    } else {
        // Slow case, write chunks one-by-one
        while(entry){
            var chunk = entry.chunk;
            var encoding = entry.encoding;
            var cb = entry.callback;
            var len = state.objectMode ? 1 : chunk.length;
            doWrite(stream, state, false, len, chunk, encoding, cb);
            entry = entry.next;
            state.bufferedRequestCount--;
            // if we didn't call the onwrite immediately, then
            // it means that we need to wait until it does.
            // also, that means that the chunk and cb are currently
            // being processed, so move the buffer counter past them.
            if (state.writing) {
                break;
            }
        }
        if (entry === null) state.lastBufferedRequest = null;
    }
    state.bufferedRequest = entry;
    state.bufferProcessing = false;
}
Writable.prototype._write = function(chunk, encoding, cb) {
    cb(new ERR_METHOD_NOT_IMPLEMENTED('_write()'));
};
Writable.prototype._writev = null;
Writable.prototype.end = function(chunk, encoding, cb) {
    var state = this._writableState;
    if (typeof chunk === 'function') {
        cb = chunk;
        chunk = null;
        encoding = null;
    } else if (typeof encoding === 'function') {
        cb = encoding;
        encoding = null;
    }
    if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);
    // .end() fully uncorks
    if (state.corked) {
        state.corked = 1;
        this.uncork();
    }
    // ignore unnecessary end() calls.
    if (!state.ending) endWritable(this, state, cb);
    return this;
};
Object.defineProperty(Writable.prototype, 'writableLength', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState.length;
    }
});
function needFinish(state) {
    return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}
function callFinal(stream, state) {
    stream._final(function(err) {
        state.pendingcb--;
        if (err) {
            errorOrDestroy(stream, err);
        }
        state.prefinished = true;
        stream.emit('prefinish');
        finishMaybe(stream, state);
    });
}
function prefinish(stream, state) {
    if (!state.prefinished && !state.finalCalled) {
        if (typeof stream._final === 'function' && !state.destroyed) {
            state.pendingcb++;
            state.finalCalled = true;
            process.nextTick(callFinal, stream, state);
        } else {
            state.prefinished = true;
            stream.emit('prefinish');
        }
    }
}
function finishMaybe(stream, state) {
    var need = needFinish(state);
    if (need) {
        prefinish(stream, state);
        if (state.pendingcb === 0) {
            state.finished = true;
            stream.emit('finish');
            if (state.autoDestroy) {
                // In case of duplex streams we need a way to detect
                // if the readable side is ready for autoDestroy as well
                var rState = stream._readableState;
                if (!rState || rState.autoDestroy && rState.endEmitted) {
                    stream.destroy();
                }
            }
        }
    }
    return need;
}
function endWritable(stream, state, cb) {
    state.ending = true;
    finishMaybe(stream, state);
    if (cb) {
        if (state.finished) process.nextTick(cb);
        else stream.once('finish', cb);
    }
    state.ended = true;
    stream.writable = false;
}
function onCorkedFinish(corkReq, state, err) {
    var entry = corkReq.entry;
    corkReq.entry = null;
    while(entry){
        var cb = entry.callback;
        state.pendingcb--;
        cb(err);
        entry = entry.next;
    }
    // reuse the free corkReq.
    state.corkedRequestsFree.next = corkReq;
}
Object.defineProperty(Writable.prototype, 'destroyed', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        if (this._writableState === undefined) {
            return false;
        }
        return this._writableState.destroyed;
    },
    set: function set(value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (!this._writableState) {
            return;
        }
        // backward compatibility, the user is explicitly
        // managing destroyed
        this._writableState.destroyed = value;
    }
});
Writable.prototype.destroy = destroyImpl.destroy;
Writable.prototype._undestroy = destroyImpl.undestroy;
Writable.prototype._destroy = function(err, cb) {
    cb(err);
};
}),
"[project]/rayls-shield-landing-page/node_modules/readable-stream/lib/_stream_duplex.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

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
// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.
/*<replacement>*/ var objectKeys = Object.keys || function(obj) {
    var keys = [];
    for(var key in obj)keys.push(key);
    return keys;
};
/*</replacement>*/ module.exports = Duplex;
var Readable = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/readable-stream/lib/_stream_readable.js [app-ssr] (ecmascript)");
var Writable = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/readable-stream/lib/_stream_writable.js [app-ssr] (ecmascript)");
__turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/inherits/inherits.js [app-ssr] (ecmascript)")(Duplex, Readable);
{
    // Allow the keys array to be GC'ed.
    var keys = objectKeys(Writable.prototype);
    for(var v = 0; v < keys.length; v++){
        var method = keys[v];
        if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
    }
}function Duplex(options) {
    if (!(this instanceof Duplex)) return new Duplex(options);
    Readable.call(this, options);
    Writable.call(this, options);
    this.allowHalfOpen = true;
    if (options) {
        if (options.readable === false) this.readable = false;
        if (options.writable === false) this.writable = false;
        if (options.allowHalfOpen === false) {
            this.allowHalfOpen = false;
            this.once('end', onend);
        }
    }
}
Object.defineProperty(Duplex.prototype, 'writableHighWaterMark', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState.highWaterMark;
    }
});
Object.defineProperty(Duplex.prototype, 'writableBuffer', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState && this._writableState.getBuffer();
    }
});
Object.defineProperty(Duplex.prototype, 'writableLength', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState.length;
    }
});
// the no-half-open enforcer
function onend() {
    // If the writable side ended, then we're ok.
    if (this._writableState.ended) return;
    // no more data can be written.
    // But allow more writes to happen in this tick.
    process.nextTick(onEndNT, this);
}
function onEndNT(self) {
    self.end();
}
Object.defineProperty(Duplex.prototype, 'destroyed', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        if (this._readableState === undefined || this._writableState === undefined) {
            return false;
        }
        return this._readableState.destroyed && this._writableState.destroyed;
    },
    set: function set(value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (this._readableState === undefined || this._writableState === undefined) {
            return;
        }
        // backward compatibility, the user is explicitly
        // managing destroyed
        this._readableState.destroyed = value;
        this._writableState.destroyed = value;
    }
});
}),
"[project]/rayls-shield-landing-page/node_modules/readable-stream/lib/internal/streams/end-of-stream.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Ported from https://github.com/mafintosh/end-of-stream with
// permission from the author, Mathias Buus (@mafintosh).
var ERR_STREAM_PREMATURE_CLOSE = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/readable-stream/errors.js [app-ssr] (ecmascript)").codes.ERR_STREAM_PREMATURE_CLOSE;
function once(callback) {
    var called = false;
    return function() {
        if (called) return;
        called = true;
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        callback.apply(this, args);
    };
}
function noop() {}
function isRequest(stream) {
    return stream.setHeader && typeof stream.abort === 'function';
}
function eos(stream, opts, callback) {
    if (typeof opts === 'function') return eos(stream, null, opts);
    if (!opts) opts = {};
    callback = once(callback || noop);
    var readable = opts.readable || opts.readable !== false && stream.readable;
    var writable = opts.writable || opts.writable !== false && stream.writable;
    var onlegacyfinish = function onlegacyfinish() {
        if (!stream.writable) onfinish();
    };
    var writableEnded = stream._writableState && stream._writableState.finished;
    var onfinish = function onfinish() {
        writable = false;
        writableEnded = true;
        if (!readable) callback.call(stream);
    };
    var readableEnded = stream._readableState && stream._readableState.endEmitted;
    var onend = function onend() {
        readable = false;
        readableEnded = true;
        if (!writable) callback.call(stream);
    };
    var onerror = function onerror(err) {
        callback.call(stream, err);
    };
    var onclose = function onclose() {
        var err;
        if (readable && !readableEnded) {
            if (!stream._readableState || !stream._readableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
            return callback.call(stream, err);
        }
        if (writable && !writableEnded) {
            if (!stream._writableState || !stream._writableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
            return callback.call(stream, err);
        }
    };
    var onrequest = function onrequest() {
        stream.req.on('finish', onfinish);
    };
    if (isRequest(stream)) {
        stream.on('complete', onfinish);
        stream.on('abort', onclose);
        if (stream.req) onrequest();
        else stream.on('request', onrequest);
    } else if (writable && !stream._writableState) {
        // legacy streams
        stream.on('end', onlegacyfinish);
        stream.on('close', onlegacyfinish);
    }
    stream.on('end', onend);
    stream.on('finish', onfinish);
    if (opts.error !== false) stream.on('error', onerror);
    stream.on('close', onclose);
    return function() {
        stream.removeListener('complete', onfinish);
        stream.removeListener('abort', onclose);
        stream.removeListener('request', onrequest);
        if (stream.req) stream.req.removeListener('finish', onfinish);
        stream.removeListener('end', onlegacyfinish);
        stream.removeListener('close', onlegacyfinish);
        stream.removeListener('finish', onfinish);
        stream.removeListener('end', onend);
        stream.removeListener('error', onerror);
        stream.removeListener('close', onclose);
    };
}
module.exports = eos;
}),
"[project]/rayls-shield-landing-page/node_modules/readable-stream/lib/internal/streams/async_iterator.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _Object$setPrototypeO;
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
var finished = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/readable-stream/lib/internal/streams/end-of-stream.js [app-ssr] (ecmascript)");
var kLastResolve = Symbol('lastResolve');
var kLastReject = Symbol('lastReject');
var kError = Symbol('error');
var kEnded = Symbol('ended');
var kLastPromise = Symbol('lastPromise');
var kHandlePromise = Symbol('handlePromise');
var kStream = Symbol('stream');
function createIterResult(value, done) {
    return {
        value: value,
        done: done
    };
}
function readAndResolve(iter) {
    var resolve = iter[kLastResolve];
    if (resolve !== null) {
        var data = iter[kStream].read();
        // we defer if data is null
        // we can be expecting either 'end' or
        // 'error'
        if (data !== null) {
            iter[kLastPromise] = null;
            iter[kLastResolve] = null;
            iter[kLastReject] = null;
            resolve(createIterResult(data, false));
        }
    }
}
function onReadable(iter) {
    // we wait for the next tick, because it might
    // emit an error with process.nextTick
    process.nextTick(readAndResolve, iter);
}
function wrapForNext(lastPromise, iter) {
    return function(resolve, reject) {
        lastPromise.then(function() {
            if (iter[kEnded]) {
                resolve(createIterResult(undefined, true));
                return;
            }
            iter[kHandlePromise](resolve, reject);
        }, reject);
    };
}
var AsyncIteratorPrototype = Object.getPrototypeOf(function() {});
var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {
    get stream () {
        return this[kStream];
    },
    next: function next() {
        var _this = this;
        // if we have detected an error in the meanwhile
        // reject straight away
        var error = this[kError];
        if (error !== null) {
            return Promise.reject(error);
        }
        if (this[kEnded]) {
            return Promise.resolve(createIterResult(undefined, true));
        }
        if (this[kStream].destroyed) {
            // We need to defer via nextTick because if .destroy(err) is
            // called, the error will be emitted via nextTick, and
            // we cannot guarantee that there is no error lingering around
            // waiting to be emitted.
            return new Promise(function(resolve, reject) {
                process.nextTick(function() {
                    if (_this[kError]) {
                        reject(_this[kError]);
                    } else {
                        resolve(createIterResult(undefined, true));
                    }
                });
            });
        }
        // if we have multiple next() calls
        // we will wait for the previous Promise to finish
        // this logic is optimized to support for await loops,
        // where next() is only called once at a time
        var lastPromise = this[kLastPromise];
        var promise;
        if (lastPromise) {
            promise = new Promise(wrapForNext(lastPromise, this));
        } else {
            // fast path needed to support multiple this.push()
            // without triggering the next() queue
            var data = this[kStream].read();
            if (data !== null) {
                return Promise.resolve(createIterResult(data, false));
            }
            promise = new Promise(this[kHandlePromise]);
        }
        this[kLastPromise] = promise;
        return promise;
    }
}, _defineProperty(_Object$setPrototypeO, Symbol.asyncIterator, function() {
    return this;
}), _defineProperty(_Object$setPrototypeO, "return", function _return() {
    var _this2 = this;
    // destroy(err, cb) is a private API
    // we can guarantee we have that here, because we control the
    // Readable class this is attached to
    return new Promise(function(resolve, reject) {
        _this2[kStream].destroy(null, function(err) {
            if (err) {
                reject(err);
                return;
            }
            resolve(createIterResult(undefined, true));
        });
    });
}), _Object$setPrototypeO), AsyncIteratorPrototype);
var createReadableStreamAsyncIterator = function createReadableStreamAsyncIterator(stream) {
    var _Object$create;
    var iterator = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, _defineProperty(_Object$create, kStream, {
        value: stream,
        writable: true
    }), _defineProperty(_Object$create, kLastResolve, {
        value: null,
        writable: true
    }), _defineProperty(_Object$create, kLastReject, {
        value: null,
        writable: true
    }), _defineProperty(_Object$create, kError, {
        value: null,
        writable: true
    }), _defineProperty(_Object$create, kEnded, {
        value: stream._readableState.endEmitted,
        writable: true
    }), _defineProperty(_Object$create, kHandlePromise, {
        value: function value(resolve, reject) {
            var data = iterator[kStream].read();
            if (data) {
                iterator[kLastPromise] = null;
                iterator[kLastResolve] = null;
                iterator[kLastReject] = null;
                resolve(createIterResult(data, false));
            } else {
                iterator[kLastResolve] = resolve;
                iterator[kLastReject] = reject;
            }
        },
        writable: true
    }), _Object$create));
    iterator[kLastPromise] = null;
    finished(stream, function(err) {
        if (err && err.code !== 'ERR_STREAM_PREMATURE_CLOSE') {
            var reject = iterator[kLastReject];
            // reject if we are waiting for data in the Promise
            // returned by next() and store the error
            if (reject !== null) {
                iterator[kLastPromise] = null;
                iterator[kLastResolve] = null;
                iterator[kLastReject] = null;
                reject(err);
            }
            iterator[kError] = err;
            return;
        }
        var resolve = iterator[kLastResolve];
        if (resolve !== null) {
            iterator[kLastPromise] = null;
            iterator[kLastResolve] = null;
            iterator[kLastReject] = null;
            resolve(createIterResult(undefined, true));
        }
        iterator[kEnded] = true;
    });
    stream.on('readable', onReadable.bind(null, iterator));
    return iterator;
};
module.exports = createReadableStreamAsyncIterator;
}),
"[project]/rayls-shield-landing-page/node_modules/readable-stream/lib/internal/streams/from.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
var ERR_INVALID_ARG_TYPE = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/readable-stream/errors.js [app-ssr] (ecmascript)").codes.ERR_INVALID_ARG_TYPE;
function from(Readable, iterable, opts) {
    var iterator;
    if (iterable && typeof iterable.next === 'function') {
        iterator = iterable;
    } else if (iterable && iterable[Symbol.asyncIterator]) iterator = iterable[Symbol.asyncIterator]();
    else if (iterable && iterable[Symbol.iterator]) iterator = iterable[Symbol.iterator]();
    else throw new ERR_INVALID_ARG_TYPE('iterable', [
        'Iterable'
    ], iterable);
    var readable = new Readable(_objectSpread({
        objectMode: true
    }, opts));
    // Reading boolean to protect against _read
    // being called before last iteration completion.
    var reading = false;
    readable._read = function() {
        if (!reading) {
            reading = true;
            next();
        }
    };
    function next() {
        return _next2.apply(this, arguments);
    }
    function _next2() {
        _next2 = _asyncToGenerator(function*() {
            try {
                var _yield$iterator$next = yield iterator.next(), value = _yield$iterator$next.value, done = _yield$iterator$next.done;
                if (done) {
                    readable.push(null);
                } else if (readable.push((yield value))) {
                    next();
                } else {
                    reading = false;
                }
            } catch (err) {
                readable.destroy(err);
            }
        });
        return _next2.apply(this, arguments);
    }
    return readable;
}
module.exports = from;
}),
"[project]/rayls-shield-landing-page/node_modules/readable-stream/lib/_stream_readable.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

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
module.exports = Readable;
/*<replacement>*/ var Duplex;
/*</replacement>*/ Readable.ReadableState = ReadableState;
/*<replacement>*/ var EE = __turbopack_context__.r("[externals]/events [external] (events, cjs)").EventEmitter;
var EElistenerCount = function EElistenerCount(emitter, type) {
    return emitter.listeners(type).length;
};
/*</replacement>*/ /*<replacement>*/ var Stream = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/readable-stream/lib/internal/streams/stream.js [app-ssr] (ecmascript)");
/*</replacement>*/ var Buffer = __turbopack_context__.r("[externals]/buffer [external] (buffer, cjs)").Buffer;
var OurUint8Array = (("TURBOPACK compile-time truthy", 1) ? /*TURBOPACK member replacement*/ __turbopack_context__.g : "TURBOPACK unreachable").Uint8Array || function() {};
function _uint8ArrayToBuffer(chunk) {
    return Buffer.from(chunk);
}
function _isUint8Array(obj) {
    return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}
/*<replacement>*/ var debugUtil = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
var debug;
if (debugUtil && debugUtil.debuglog) {
    debug = debugUtil.debuglog('stream');
} else {
    debug = function debug() {};
}
/*</replacement>*/ var BufferList = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/readable-stream/lib/internal/streams/buffer_list.js [app-ssr] (ecmascript)");
var destroyImpl = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/readable-stream/lib/internal/streams/destroy.js [app-ssr] (ecmascript)");
var _require = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/readable-stream/lib/internal/streams/state.js [app-ssr] (ecmascript)"), getHighWaterMark = _require.getHighWaterMark;
var _require$codes = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/readable-stream/errors.js [app-ssr] (ecmascript)").codes, ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE, ERR_STREAM_PUSH_AFTER_EOF = _require$codes.ERR_STREAM_PUSH_AFTER_EOF, ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED, ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
// Lazy loaded to improve the startup performance.
var StringDecoder;
var createReadableStreamAsyncIterator;
var from;
__turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/inherits/inherits.js [app-ssr] (ecmascript)")(Readable, Stream);
var errorOrDestroy = destroyImpl.errorOrDestroy;
var kProxyEvents = [
    'error',
    'close',
    'destroy',
    'pause',
    'resume'
];
function prependListener(emitter, event, fn) {
    // Sadly this is not cacheable as some libraries bundle their own
    // event emitter implementation with them.
    if (typeof emitter.prependListener === 'function') return emitter.prependListener(event, fn);
    // This is a hack to make sure that our error handler is attached before any
    // userland ones.  NEVER DO THIS. This is here only because this code needs
    // to continue to work with older versions of Node.js that do not include
    // the prependListener() method. The goal is to eventually remove this hack.
    if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);
    else if (Array.isArray(emitter._events[event])) emitter._events[event].unshift(fn);
    else emitter._events[event] = [
        fn,
        emitter._events[event]
    ];
}
function ReadableState(options, stream, isDuplex) {
    Duplex = Duplex || __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/readable-stream/lib/_stream_duplex.js [app-ssr] (ecmascript)");
    options = options || {};
    // Duplex streams are both readable and writable, but share
    // the same options object.
    // However, some cases require setting options to different
    // values for the readable and the writable sides of the duplex stream.
    // These options can be provided separately as readableXXX and writableXXX.
    if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof Duplex;
    // object stream flag. Used to make read(n) ignore n and to
    // make all the buffer merging and length checks go away
    this.objectMode = !!options.objectMode;
    if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode;
    // the point at which it stops calling _read() to fill the buffer
    // Note: 0 is a valid value, means "don't call _read preemptively ever"
    this.highWaterMark = getHighWaterMark(this, options, 'readableHighWaterMark', isDuplex);
    // A linked list is used to store data chunks instead of an array because the
    // linked list can remove elements from the beginning faster than
    // array.shift()
    this.buffer = new BufferList();
    this.length = 0;
    this.pipes = null;
    this.pipesCount = 0;
    this.flowing = null;
    this.ended = false;
    this.endEmitted = false;
    this.reading = false;
    // a flag to be able to tell if the event 'readable'/'data' is emitted
    // immediately, or on a later tick.  We set this to true at first, because
    // any actions that shouldn't happen until "later" should generally also
    // not happen before the first read call.
    this.sync = true;
    // whenever we return null, then we set a flag to say
    // that we're awaiting a 'readable' event emission.
    this.needReadable = false;
    this.emittedReadable = false;
    this.readableListening = false;
    this.resumeScheduled = false;
    this.paused = true;
    // Should close be emitted on destroy. Defaults to true.
    this.emitClose = options.emitClose !== false;
    // Should .destroy() be called after 'end' (and potentially 'finish')
    this.autoDestroy = !!options.autoDestroy;
    // has it been destroyed
    this.destroyed = false;
    // Crypto is kind of old and crusty.  Historically, its default string
    // encoding is 'binary' so we have to make this configurable.
    // Everything else in the universe uses 'utf8', though.
    this.defaultEncoding = options.defaultEncoding || 'utf8';
    // the number of writers that are awaiting a drain event in .pipe()s
    this.awaitDrain = 0;
    // if true, a maybeReadMore has been scheduled
    this.readingMore = false;
    this.decoder = null;
    this.encoding = null;
    if (options.encoding) {
        if (!StringDecoder) StringDecoder = __turbopack_context__.f({
            "string_decoder": {
                id: ()=>"[project]/rayls-shield-landing-page/node_modules/string_decoder/lib/string_decoder.js [app-ssr] (ecmascript)",
                module: ()=>__turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/string_decoder/lib/string_decoder.js [app-ssr] (ecmascript)")
            },
            "string_decoder/": {
                id: ()=>"[project]/rayls-shield-landing-page/node_modules/string_decoder/lib/string_decoder.js [app-ssr] (ecmascript)",
                module: ()=>__turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/string_decoder/lib/string_decoder.js [app-ssr] (ecmascript)")
            }
        })('string_decoder/').StringDecoder;
        this.decoder = new StringDecoder(options.encoding);
        this.encoding = options.encoding;
    }
}
function Readable(options) {
    Duplex = Duplex || __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/readable-stream/lib/_stream_duplex.js [app-ssr] (ecmascript)");
    if (!(this instanceof Readable)) return new Readable(options);
    // Checking for a Stream.Duplex instance is faster here instead of inside
    // the ReadableState constructor, at least with V8 6.5
    var isDuplex = this instanceof Duplex;
    this._readableState = new ReadableState(options, this, isDuplex);
    // legacy
    this.readable = true;
    if (options) {
        if (typeof options.read === 'function') this._read = options.read;
        if (typeof options.destroy === 'function') this._destroy = options.destroy;
    }
    Stream.call(this);
}
Object.defineProperty(Readable.prototype, 'destroyed', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        if (this._readableState === undefined) {
            return false;
        }
        return this._readableState.destroyed;
    },
    set: function set(value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (!this._readableState) {
            return;
        }
        // backward compatibility, the user is explicitly
        // managing destroyed
        this._readableState.destroyed = value;
    }
});
Readable.prototype.destroy = destroyImpl.destroy;
Readable.prototype._undestroy = destroyImpl.undestroy;
Readable.prototype._destroy = function(err, cb) {
    cb(err);
};
// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push = function(chunk, encoding) {
    var state = this._readableState;
    var skipChunkCheck;
    if (!state.objectMode) {
        if (typeof chunk === 'string') {
            encoding = encoding || state.defaultEncoding;
            if (encoding !== state.encoding) {
                chunk = Buffer.from(chunk, encoding);
                encoding = '';
            }
            skipChunkCheck = true;
        }
    } else {
        skipChunkCheck = true;
    }
    return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
};
// Unshift should *always* be something directly out of read()
Readable.prototype.unshift = function(chunk) {
    return readableAddChunk(this, chunk, null, true, false);
};
function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
    debug('readableAddChunk', chunk);
    var state = stream._readableState;
    if (chunk === null) {
        state.reading = false;
        onEofChunk(stream, state);
    } else {
        var er;
        if (!skipChunkCheck) er = chunkInvalid(state, chunk);
        if (er) {
            errorOrDestroy(stream, er);
        } else if (state.objectMode || chunk && chunk.length > 0) {
            if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) {
                chunk = _uint8ArrayToBuffer(chunk);
            }
            if (addToFront) {
                if (state.endEmitted) errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());
                else addChunk(stream, state, chunk, true);
            } else if (state.ended) {
                errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());
            } else if (state.destroyed) {
                return false;
            } else {
                state.reading = false;
                if (state.decoder && !encoding) {
                    chunk = state.decoder.write(chunk);
                    if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);
                    else maybeReadMore(stream, state);
                } else {
                    addChunk(stream, state, chunk, false);
                }
            }
        } else if (!addToFront) {
            state.reading = false;
            maybeReadMore(stream, state);
        }
    }
    // We can push more data if we are below the highWaterMark.
    // Also, if we have no data yet, we can stand some more bytes.
    // This is to work around cases where hwm=0, such as the repl.
    return !state.ended && (state.length < state.highWaterMark || state.length === 0);
}
function addChunk(stream, state, chunk, addToFront) {
    if (state.flowing && state.length === 0 && !state.sync) {
        state.awaitDrain = 0;
        stream.emit('data', chunk);
    } else {
        // update the buffer info.
        state.length += state.objectMode ? 1 : chunk.length;
        if (addToFront) state.buffer.unshift(chunk);
        else state.buffer.push(chunk);
        if (state.needReadable) emitReadable(stream);
    }
    maybeReadMore(stream, state);
}
function chunkInvalid(state, chunk) {
    var er;
    if (!_isUint8Array(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
        er = new ERR_INVALID_ARG_TYPE('chunk', [
            'string',
            'Buffer',
            'Uint8Array'
        ], chunk);
    }
    return er;
}
Readable.prototype.isPaused = function() {
    return this._readableState.flowing === false;
};
// backwards compatibility.
Readable.prototype.setEncoding = function(enc) {
    if (!StringDecoder) StringDecoder = __turbopack_context__.f({
        "string_decoder": {
            id: ()=>"[project]/rayls-shield-landing-page/node_modules/string_decoder/lib/string_decoder.js [app-ssr] (ecmascript)",
            module: ()=>__turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/string_decoder/lib/string_decoder.js [app-ssr] (ecmascript)")
        },
        "string_decoder/": {
            id: ()=>"[project]/rayls-shield-landing-page/node_modules/string_decoder/lib/string_decoder.js [app-ssr] (ecmascript)",
            module: ()=>__turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/string_decoder/lib/string_decoder.js [app-ssr] (ecmascript)")
        }
    })('string_decoder/').StringDecoder;
    var decoder = new StringDecoder(enc);
    this._readableState.decoder = decoder;
    // If setEncoding(null), decoder.encoding equals utf8
    this._readableState.encoding = this._readableState.decoder.encoding;
    // Iterate over current buffer to convert already stored Buffers:
    var p = this._readableState.buffer.head;
    var content = '';
    while(p !== null){
        content += decoder.write(p.data);
        p = p.next;
    }
    this._readableState.buffer.clear();
    if (content !== '') this._readableState.buffer.push(content);
    this._readableState.length = content.length;
    return this;
};
// Don't raise the hwm > 1GB
var MAX_HWM = 0x40000000;
function computeNewHighWaterMark(n) {
    if (n >= MAX_HWM) {
        // TODO(ronag): Throw ERR_VALUE_OUT_OF_RANGE.
        n = MAX_HWM;
    } else {
        // Get the next highest power of 2 to prevent increasing hwm excessively in
        // tiny amounts
        n--;
        n |= n >>> 1;
        n |= n >>> 2;
        n |= n >>> 4;
        n |= n >>> 8;
        n |= n >>> 16;
        n++;
    }
    return n;
}
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function howMuchToRead(n, state) {
    if (n <= 0 || state.length === 0 && state.ended) return 0;
    if (state.objectMode) return 1;
    if (n !== n) {
        // Only flow one buffer at a time
        if (state.flowing && state.length) return state.buffer.head.data.length;
        else return state.length;
    }
    // If we're asking for more than the current hwm, then raise the hwm.
    if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
    if (n <= state.length) return n;
    // Don't have enough
    if (!state.ended) {
        state.needReadable = true;
        return 0;
    }
    return state.length;
}
// you can override either this method, or the async _read(n) below.
Readable.prototype.read = function(n) {
    debug('read', n);
    n = parseInt(n, 10);
    var state = this._readableState;
    var nOrig = n;
    if (n !== 0) state.emittedReadable = false;
    // if we're doing read(0) to trigger a readable event, but we
    // already have a bunch of data in the buffer, then just trigger
    // the 'readable' event and move on.
    if (n === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
        debug('read: emitReadable', state.length, state.ended);
        if (state.length === 0 && state.ended) endReadable(this);
        else emitReadable(this);
        return null;
    }
    n = howMuchToRead(n, state);
    // if we've ended, and we're now clear, then finish it up.
    if (n === 0 && state.ended) {
        if (state.length === 0) endReadable(this);
        return null;
    }
    // All the actual chunk generation logic needs to be
    // *below* the call to _read.  The reason is that in certain
    // synthetic stream cases, such as passthrough streams, _read
    // may be a completely synchronous operation which may change
    // the state of the read buffer, providing enough data when
    // before there was *not* enough.
    //
    // So, the steps are:
    // 1. Figure out what the state of things will be after we do
    // a read from the buffer.
    //
    // 2. If that resulting state will trigger a _read, then call _read.
    // Note that this may be asynchronous, or synchronous.  Yes, it is
    // deeply ugly to write APIs this way, but that still doesn't mean
    // that the Readable class should behave improperly, as streams are
    // designed to be sync/async agnostic.
    // Take note if the _read call is sync or async (ie, if the read call
    // has returned yet), so that we know whether or not it's safe to emit
    // 'readable' etc.
    //
    // 3. Actually pull the requested chunks out of the buffer and return.
    // if we need a readable event, then we need to do some reading.
    var doRead = state.needReadable;
    debug('need readable', doRead);
    // if we currently have less than the highWaterMark, then also read some
    if (state.length === 0 || state.length - n < state.highWaterMark) {
        doRead = true;
        debug('length less than watermark', doRead);
    }
    // however, if we've ended, then there's no point, and if we're already
    // reading, then it's unnecessary.
    if (state.ended || state.reading) {
        doRead = false;
        debug('reading or ended', doRead);
    } else if (doRead) {
        debug('do read');
        state.reading = true;
        state.sync = true;
        // if the length is currently zero, then we *need* a readable event.
        if (state.length === 0) state.needReadable = true;
        // call internal read method
        this._read(state.highWaterMark);
        state.sync = false;
        // If _read pushed data synchronously, then `reading` will be false,
        // and we need to re-evaluate how much data we can return to the user.
        if (!state.reading) n = howMuchToRead(nOrig, state);
    }
    var ret;
    if (n > 0) ret = fromList(n, state);
    else ret = null;
    if (ret === null) {
        state.needReadable = state.length <= state.highWaterMark;
        n = 0;
    } else {
        state.length -= n;
        state.awaitDrain = 0;
    }
    if (state.length === 0) {
        // If we have nothing in the buffer, then we want to know
        // as soon as we *do* get something into the buffer.
        if (!state.ended) state.needReadable = true;
        // If we tried to read() past the EOF, then emit end on the next tick.
        if (nOrig !== n && state.ended) endReadable(this);
    }
    if (ret !== null) this.emit('data', ret);
    return ret;
};
function onEofChunk(stream, state) {
    debug('onEofChunk');
    if (state.ended) return;
    if (state.decoder) {
        var chunk = state.decoder.end();
        if (chunk && chunk.length) {
            state.buffer.push(chunk);
            state.length += state.objectMode ? 1 : chunk.length;
        }
    }
    state.ended = true;
    if (state.sync) {
        // if we are sync, wait until next tick to emit the data.
        // Otherwise we risk emitting data in the flow()
        // the readable code triggers during a read() call
        emitReadable(stream);
    } else {
        // emit 'readable' now to make sure it gets picked up.
        state.needReadable = false;
        if (!state.emittedReadable) {
            state.emittedReadable = true;
            emitReadable_(stream);
        }
    }
}
// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
    var state = stream._readableState;
    debug('emitReadable', state.needReadable, state.emittedReadable);
    state.needReadable = false;
    if (!state.emittedReadable) {
        debug('emitReadable', state.flowing);
        state.emittedReadable = true;
        process.nextTick(emitReadable_, stream);
    }
}
function emitReadable_(stream) {
    var state = stream._readableState;
    debug('emitReadable_', state.destroyed, state.length, state.ended);
    if (!state.destroyed && (state.length || state.ended)) {
        stream.emit('readable');
        state.emittedReadable = false;
    }
    // The stream needs another readable event if
    // 1. It is not flowing, as the flow mechanism will take
    //    care of it.
    // 2. It is not ended.
    // 3. It is below the highWaterMark, so we can schedule
    //    another readable later.
    state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
    flow(stream);
}
// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
    if (!state.readingMore) {
        state.readingMore = true;
        process.nextTick(maybeReadMore_, stream, state);
    }
}
function maybeReadMore_(stream, state) {
    // Attempt to read more data if we should.
    //
    // The conditions for reading more data are (one of):
    // - Not enough data buffered (state.length < state.highWaterMark). The loop
    //   is responsible for filling the buffer with enough data if such data
    //   is available. If highWaterMark is 0 and we are not in the flowing mode
    //   we should _not_ attempt to buffer any extra data. We'll get more data
    //   when the stream consumer calls read() instead.
    // - No data in the buffer, and the stream is in flowing mode. In this mode
    //   the loop below is responsible for ensuring read() is called. Failing to
    //   call read here would abort the flow and there's no other mechanism for
    //   continuing the flow if the stream consumer has just subscribed to the
    //   'data' event.
    //
    // In addition to the above conditions to keep reading data, the following
    // conditions prevent the data from being read:
    // - The stream has ended (state.ended).
    // - There is already a pending 'read' operation (state.reading). This is a
    //   case where the the stream has called the implementation defined _read()
    //   method, but they are processing the call asynchronously and have _not_
    //   called push() with new data. In this case we skip performing more
    //   read()s. The execution ends in this method again after the _read() ends
    //   up calling push() with more data.
    while(!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)){
        var len = state.length;
        debug('maybeReadMore read 0');
        stream.read(0);
        if (len === state.length) break;
    }
    state.readingMore = false;
}
// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read = function(n) {
    errorOrDestroy(this, new ERR_METHOD_NOT_IMPLEMENTED('_read()'));
};
Readable.prototype.pipe = function(dest, pipeOpts) {
    var src = this;
    var state = this._readableState;
    switch(state.pipesCount){
        case 0:
            state.pipes = dest;
            break;
        case 1:
            state.pipes = [
                state.pipes,
                dest
            ];
            break;
        default:
            state.pipes.push(dest);
            break;
    }
    state.pipesCount += 1;
    debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);
    var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
    var endFn = doEnd ? onend : unpipe;
    if (state.endEmitted) process.nextTick(endFn);
    else src.once('end', endFn);
    dest.on('unpipe', onunpipe);
    function onunpipe(readable, unpipeInfo) {
        debug('onunpipe');
        if (readable === src) {
            if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
                unpipeInfo.hasUnpiped = true;
                cleanup();
            }
        }
    }
    function onend() {
        debug('onend');
        dest.end();
    }
    // when the dest drains, it reduces the awaitDrain counter
    // on the source.  This would be more elegant with a .once()
    // handler in flow(), but adding and removing repeatedly is
    // too slow.
    var ondrain = pipeOnDrain(src);
    dest.on('drain', ondrain);
    var cleanedUp = false;
    function cleanup() {
        debug('cleanup');
        // cleanup event handlers once the pipe is broken
        dest.removeListener('close', onclose);
        dest.removeListener('finish', onfinish);
        dest.removeListener('drain', ondrain);
        dest.removeListener('error', onerror);
        dest.removeListener('unpipe', onunpipe);
        src.removeListener('end', onend);
        src.removeListener('end', unpipe);
        src.removeListener('data', ondata);
        cleanedUp = true;
        // if the reader is waiting for a drain event from this
        // specific writer, then it would cause it to never start
        // flowing again.
        // So, if this is awaiting a drain, then we just call it now.
        // If we don't know, then assume that we are waiting for one.
        if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
    }
    src.on('data', ondata);
    function ondata(chunk) {
        debug('ondata');
        var ret = dest.write(chunk);
        debug('dest.write', ret);
        if (ret === false) {
            // If the user unpiped during `dest.write()`, it is possible
            // to get stuck in a permanently paused state if that write
            // also returned false.
            // => Check whether `dest` is still a piping destination.
            if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
                debug('false write response, pause', state.awaitDrain);
                state.awaitDrain++;
            }
            src.pause();
        }
    }
    // if the dest has an error, then stop piping into it.
    // however, don't suppress the throwing behavior for this.
    function onerror(er) {
        debug('onerror', er);
        unpipe();
        dest.removeListener('error', onerror);
        if (EElistenerCount(dest, 'error') === 0) errorOrDestroy(dest, er);
    }
    // Make sure our error handler is attached before userland ones.
    prependListener(dest, 'error', onerror);
    // Both close and finish should trigger unpipe, but only once.
    function onclose() {
        dest.removeListener('finish', onfinish);
        unpipe();
    }
    dest.once('close', onclose);
    function onfinish() {
        debug('onfinish');
        dest.removeListener('close', onclose);
        unpipe();
    }
    dest.once('finish', onfinish);
    function unpipe() {
        debug('unpipe');
        src.unpipe(dest);
    }
    // tell the dest that it's being piped to
    dest.emit('pipe', src);
    // start the flow if it hasn't been started already.
    if (!state.flowing) {
        debug('pipe resume');
        src.resume();
    }
    return dest;
};
function pipeOnDrain(src) {
    return function pipeOnDrainFunctionResult() {
        var state = src._readableState;
        debug('pipeOnDrain', state.awaitDrain);
        if (state.awaitDrain) state.awaitDrain--;
        if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
            state.flowing = true;
            flow(src);
        }
    };
}
Readable.prototype.unpipe = function(dest) {
    var state = this._readableState;
    var unpipeInfo = {
        hasUnpiped: false
    };
    // if we're not piping anywhere, then do nothing.
    if (state.pipesCount === 0) return this;
    // just one destination.  most common case.
    if (state.pipesCount === 1) {
        // passed in one, but it's not the right one.
        if (dest && dest !== state.pipes) return this;
        if (!dest) dest = state.pipes;
        // got a match.
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        if (dest) dest.emit('unpipe', this, unpipeInfo);
        return this;
    }
    // slow case. multiple pipe destinations.
    if (!dest) {
        // remove all.
        var dests = state.pipes;
        var len = state.pipesCount;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        for(var i = 0; i < len; i++)dests[i].emit('unpipe', this, {
            hasUnpiped: false
        });
        return this;
    }
    // try to find the right one.
    var index = indexOf(state.pipes, dest);
    if (index === -1) return this;
    state.pipes.splice(index, 1);
    state.pipesCount -= 1;
    if (state.pipesCount === 1) state.pipes = state.pipes[0];
    dest.emit('unpipe', this, unpipeInfo);
    return this;
};
// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on = function(ev, fn) {
    var res = Stream.prototype.on.call(this, ev, fn);
    var state = this._readableState;
    if (ev === 'data') {
        // update readableListening so that resume() may be a no-op
        // a few lines down. This is needed to support once('readable').
        state.readableListening = this.listenerCount('readable') > 0;
        // Try start flowing on next tick if stream isn't explicitly paused
        if (state.flowing !== false) this.resume();
    } else if (ev === 'readable') {
        if (!state.endEmitted && !state.readableListening) {
            state.readableListening = state.needReadable = true;
            state.flowing = false;
            state.emittedReadable = false;
            debug('on readable', state.length, state.reading);
            if (state.length) {
                emitReadable(this);
            } else if (!state.reading) {
                process.nextTick(nReadingNextTick, this);
            }
        }
    }
    return res;
};
Readable.prototype.addListener = Readable.prototype.on;
Readable.prototype.removeListener = function(ev, fn) {
    var res = Stream.prototype.removeListener.call(this, ev, fn);
    if (ev === 'readable') {
        // We need to check if there is someone still listening to
        // readable and reset the state. However this needs to happen
        // after readable has been emitted but before I/O (nextTick) to
        // support once('readable', fn) cycles. This means that calling
        // resume within the same tick will have no
        // effect.
        process.nextTick(updateReadableListening, this);
    }
    return res;
};
Readable.prototype.removeAllListeners = function(ev) {
    var res = Stream.prototype.removeAllListeners.apply(this, arguments);
    if (ev === 'readable' || ev === undefined) {
        // We need to check if there is someone still listening to
        // readable and reset the state. However this needs to happen
        // after readable has been emitted but before I/O (nextTick) to
        // support once('readable', fn) cycles. This means that calling
        // resume within the same tick will have no
        // effect.
        process.nextTick(updateReadableListening, this);
    }
    return res;
};
function updateReadableListening(self) {
    var state = self._readableState;
    state.readableListening = self.listenerCount('readable') > 0;
    if (state.resumeScheduled && !state.paused) {
        // flowing needs to be set to true now, otherwise
        // the upcoming resume will not flow.
        state.flowing = true;
    // crude way to check if we should resume
    } else if (self.listenerCount('data') > 0) {
        self.resume();
    }
}
function nReadingNextTick(self) {
    debug('readable nexttick read 0');
    self.read(0);
}
// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume = function() {
    var state = this._readableState;
    if (!state.flowing) {
        debug('resume');
        // we flow only if there is no one listening
        // for readable, but we still have to call
        // resume()
        state.flowing = !state.readableListening;
        resume(this, state);
    }
    state.paused = false;
    return this;
};
function resume(stream, state) {
    if (!state.resumeScheduled) {
        state.resumeScheduled = true;
        process.nextTick(resume_, stream, state);
    }
}
function resume_(stream, state) {
    debug('resume', state.reading);
    if (!state.reading) {
        stream.read(0);
    }
    state.resumeScheduled = false;
    stream.emit('resume');
    flow(stream);
    if (state.flowing && !state.reading) stream.read(0);
}
Readable.prototype.pause = function() {
    debug('call pause flowing=%j', this._readableState.flowing);
    if (this._readableState.flowing !== false) {
        debug('pause');
        this._readableState.flowing = false;
        this.emit('pause');
    }
    this._readableState.paused = true;
    return this;
};
function flow(stream) {
    var state = stream._readableState;
    debug('flow', state.flowing);
    while(state.flowing && stream.read() !== null);
}
// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap = function(stream) {
    var _this = this;
    var state = this._readableState;
    var paused = false;
    stream.on('end', function() {
        debug('wrapped end');
        if (state.decoder && !state.ended) {
            var chunk = state.decoder.end();
            if (chunk && chunk.length) _this.push(chunk);
        }
        _this.push(null);
    });
    stream.on('data', function(chunk) {
        debug('wrapped data');
        if (state.decoder) chunk = state.decoder.write(chunk);
        // don't skip over falsy values in objectMode
        if (state.objectMode && (chunk === null || chunk === undefined)) return;
        else if (!state.objectMode && (!chunk || !chunk.length)) return;
        var ret = _this.push(chunk);
        if (!ret) {
            paused = true;
            stream.pause();
        }
    });
    // proxy all the other methods.
    // important when wrapping filters and duplexes.
    for(var i in stream){
        if (this[i] === undefined && typeof stream[i] === 'function') {
            this[i] = function methodWrap(method) {
                return function methodWrapReturnFunction() {
                    return stream[method].apply(stream, arguments);
                };
            }(i);
        }
    }
    // proxy certain important events.
    for(var n = 0; n < kProxyEvents.length; n++){
        stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
    }
    // when we try to consume some more bytes, simply unpause the
    // underlying stream.
    this._read = function(n) {
        debug('wrapped _read', n);
        if (paused) {
            paused = false;
            stream.resume();
        }
    };
    return this;
};
if (typeof Symbol === 'function') {
    Readable.prototype[Symbol.asyncIterator] = function() {
        if (createReadableStreamAsyncIterator === undefined) {
            createReadableStreamAsyncIterator = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/readable-stream/lib/internal/streams/async_iterator.js [app-ssr] (ecmascript)");
        }
        return createReadableStreamAsyncIterator(this);
    };
}
Object.defineProperty(Readable.prototype, 'readableHighWaterMark', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._readableState.highWaterMark;
    }
});
Object.defineProperty(Readable.prototype, 'readableBuffer', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._readableState && this._readableState.buffer;
    }
});
Object.defineProperty(Readable.prototype, 'readableFlowing', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._readableState.flowing;
    },
    set: function set(state) {
        if (this._readableState) {
            this._readableState.flowing = state;
        }
    }
});
// exposed for testing purposes only.
Readable._fromList = fromList;
Object.defineProperty(Readable.prototype, 'readableLength', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._readableState.length;
    }
});
// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromList(n, state) {
    // nothing buffered
    if (state.length === 0) return null;
    var ret;
    if (state.objectMode) ret = state.buffer.shift();
    else if (!n || n >= state.length) {
        // read it all, truncate the list
        if (state.decoder) ret = state.buffer.join('');
        else if (state.buffer.length === 1) ret = state.buffer.first();
        else ret = state.buffer.concat(state.length);
        state.buffer.clear();
    } else {
        // read part of list
        ret = state.buffer.consume(n, state.decoder);
    }
    return ret;
}
function endReadable(stream) {
    var state = stream._readableState;
    debug('endReadable', state.endEmitted);
    if (!state.endEmitted) {
        state.ended = true;
        process.nextTick(endReadableNT, state, stream);
    }
}
function endReadableNT(state, stream) {
    debug('endReadableNT', state.endEmitted, state.length);
    // Check that we didn't get one last unshift.
    if (!state.endEmitted && state.length === 0) {
        state.endEmitted = true;
        stream.readable = false;
        stream.emit('end');
        if (state.autoDestroy) {
            // In case of duplex streams we need a way to detect
            // if the writable side is ready for autoDestroy as well
            var wState = stream._writableState;
            if (!wState || wState.autoDestroy && wState.finished) {
                stream.destroy();
            }
        }
    }
}
if (typeof Symbol === 'function') {
    Readable.from = function(iterable, opts) {
        if (from === undefined) {
            from = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/readable-stream/lib/internal/streams/from.js [app-ssr] (ecmascript)");
        }
        return from(Readable, iterable, opts);
    };
}
function indexOf(xs, x) {
    for(var i = 0, l = xs.length; i < l; i++){
        if (xs[i] === x) return i;
    }
    return -1;
}
}),
"[project]/rayls-shield-landing-page/node_modules/readable-stream/lib/_stream_transform.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

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
// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.
module.exports = Transform;
var _require$codes = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/readable-stream/errors.js [app-ssr] (ecmascript)").codes, ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED, ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK, ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes.ERR_TRANSFORM_ALREADY_TRANSFORMING, ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes.ERR_TRANSFORM_WITH_LENGTH_0;
var Duplex = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/readable-stream/lib/_stream_duplex.js [app-ssr] (ecmascript)");
__turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/inherits/inherits.js [app-ssr] (ecmascript)")(Transform, Duplex);
function afterTransform(er, data) {
    var ts = this._transformState;
    ts.transforming = false;
    var cb = ts.writecb;
    if (cb === null) {
        return this.emit('error', new ERR_MULTIPLE_CALLBACK());
    }
    ts.writechunk = null;
    ts.writecb = null;
    if (data != null) // single equals check for both `null` and `undefined`
    this.push(data);
    cb(er);
    var rs = this._readableState;
    rs.reading = false;
    if (rs.needReadable || rs.length < rs.highWaterMark) {
        this._read(rs.highWaterMark);
    }
}
function Transform(options) {
    if (!(this instanceof Transform)) return new Transform(options);
    Duplex.call(this, options);
    this._transformState = {
        afterTransform: afterTransform.bind(this),
        needTransform: false,
        transforming: false,
        writecb: null,
        writechunk: null,
        writeencoding: null
    };
    // start out asking for a readable event once data is transformed.
    this._readableState.needReadable = true;
    // we have implemented the _read method, and done the other things
    // that Readable wants before the first _read call, so unset the
    // sync guard flag.
    this._readableState.sync = false;
    if (options) {
        if (typeof options.transform === 'function') this._transform = options.transform;
        if (typeof options.flush === 'function') this._flush = options.flush;
    }
    // When the writable side finishes, then flush out anything remaining.
    this.on('prefinish', prefinish);
}
function prefinish() {
    var _this = this;
    if (typeof this._flush === 'function' && !this._readableState.destroyed) {
        this._flush(function(er, data) {
            done(_this, er, data);
        });
    } else {
        done(this, null, null);
    }
}
Transform.prototype.push = function(chunk, encoding) {
    this._transformState.needTransform = false;
    return Duplex.prototype.push.call(this, chunk, encoding);
};
// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform.prototype._transform = function(chunk, encoding, cb) {
    cb(new ERR_METHOD_NOT_IMPLEMENTED('_transform()'));
};
Transform.prototype._write = function(chunk, encoding, cb) {
    var ts = this._transformState;
    ts.writecb = cb;
    ts.writechunk = chunk;
    ts.writeencoding = encoding;
    if (!ts.transforming) {
        var rs = this._readableState;
        if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
    }
};
// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform.prototype._read = function(n) {
    var ts = this._transformState;
    if (ts.writechunk !== null && !ts.transforming) {
        ts.transforming = true;
        this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
    } else {
        // mark that we need a transform, so that any data that comes in
        // will get processed, now that we've asked for it.
        ts.needTransform = true;
    }
};
Transform.prototype._destroy = function(err, cb) {
    Duplex.prototype._destroy.call(this, err, function(err2) {
        cb(err2);
    });
};
function done(stream, er, data) {
    if (er) return stream.emit('error', er);
    if (data != null) // single equals check for both `null` and `undefined`
    stream.push(data);
    // TODO(BridgeAR): Write a test for these two error cases
    // if there's nothing in the write buffer, then that means
    // that nothing more will ever be provided
    if (stream._writableState.length) throw new ERR_TRANSFORM_WITH_LENGTH_0();
    if (stream._transformState.transforming) throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
    return stream.push(null);
}
}),
"[project]/rayls-shield-landing-page/node_modules/readable-stream/lib/_stream_passthrough.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

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
// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.
module.exports = PassThrough;
var Transform = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/readable-stream/lib/_stream_transform.js [app-ssr] (ecmascript)");
__turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/inherits/inherits.js [app-ssr] (ecmascript)")(PassThrough, Transform);
function PassThrough(options) {
    if (!(this instanceof PassThrough)) return new PassThrough(options);
    Transform.call(this, options);
}
PassThrough.prototype._transform = function(chunk, encoding, cb) {
    cb(null, chunk);
};
}),
"[project]/rayls-shield-landing-page/node_modules/readable-stream/lib/internal/streams/pipeline.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Ported from https://github.com/mafintosh/pump with
// permission from the author, Mathias Buus (@mafintosh).
var eos;
function once(callback) {
    var called = false;
    return function() {
        if (called) return;
        called = true;
        callback.apply(void 0, arguments);
    };
}
var _require$codes = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/readable-stream/errors.js [app-ssr] (ecmascript)").codes, ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS, ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
function noop(err) {
    // Rethrow the error if it exists to avoid swallowing it
    if (err) throw err;
}
function isRequest(stream) {
    return stream.setHeader && typeof stream.abort === 'function';
}
function destroyer(stream, reading, writing, callback) {
    callback = once(callback);
    var closed = false;
    stream.on('close', function() {
        closed = true;
    });
    if (eos === undefined) eos = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/readable-stream/lib/internal/streams/end-of-stream.js [app-ssr] (ecmascript)");
    eos(stream, {
        readable: reading,
        writable: writing
    }, function(err) {
        if (err) return callback(err);
        closed = true;
        callback();
    });
    var destroyed = false;
    return function(err) {
        if (closed) return;
        if (destroyed) return;
        destroyed = true;
        // request.destroy just do .end - .abort is what we want
        if (isRequest(stream)) return stream.abort();
        if (typeof stream.destroy === 'function') return stream.destroy();
        callback(err || new ERR_STREAM_DESTROYED('pipe'));
    };
}
function call(fn) {
    fn();
}
function pipe(from, to) {
    return from.pipe(to);
}
function popCallback(streams) {
    if (!streams.length) return noop;
    if (typeof streams[streams.length - 1] !== 'function') return noop;
    return streams.pop();
}
function pipeline() {
    for(var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++){
        streams[_key] = arguments[_key];
    }
    var callback = popCallback(streams);
    if (Array.isArray(streams[0])) streams = streams[0];
    if (streams.length < 2) {
        throw new ERR_MISSING_ARGS('streams');
    }
    var error;
    var destroys = streams.map(function(stream, i) {
        var reading = i < streams.length - 1;
        var writing = i > 0;
        return destroyer(stream, reading, writing, function(err) {
            if (!error) error = err;
            if (err) destroys.forEach(call);
            if (reading) return;
            destroys.forEach(call);
            callback(error);
        });
    });
    return streams.reduce(pipe);
}
module.exports = pipeline;
}),
"[project]/rayls-shield-landing-page/node_modules/readable-stream/readable.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var Stream = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)");
if (process.env.READABLE_STREAM === 'disable' && Stream) {
    module.exports = Stream.Readable;
    Object.assign(module.exports, Stream);
    module.exports.Stream = Stream;
} else {
    exports = module.exports = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/readable-stream/lib/_stream_readable.js [app-ssr] (ecmascript)");
    exports.Stream = Stream || exports;
    exports.Readable = exports;
    exports.Writable = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/readable-stream/lib/_stream_writable.js [app-ssr] (ecmascript)");
    exports.Duplex = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/readable-stream/lib/_stream_duplex.js [app-ssr] (ecmascript)");
    exports.Transform = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/readable-stream/lib/_stream_transform.js [app-ssr] (ecmascript)");
    exports.PassThrough = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/readable-stream/lib/_stream_passthrough.js [app-ssr] (ecmascript)");
    exports.finished = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/readable-stream/lib/internal/streams/end-of-stream.js [app-ssr] (ecmascript)");
    exports.pipeline = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/readable-stream/lib/internal/streams/pipeline.js [app-ssr] (ecmascript)");
}
}),
"[project]/rayls-shield-landing-page/node_modules/inherits/inherits_browser.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

if (typeof Object.create === 'function') {
    // implementation from standard node.js 'util' module
    module.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
            ctor.super_ = superCtor;
            ctor.prototype = Object.create(superCtor.prototype, {
                constructor: {
                    value: ctor,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
        }
    };
} else {
    // old school shim for old browsers
    module.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
            ctor.super_ = superCtor;
            var TempCtor = function() {};
            TempCtor.prototype = superCtor.prototype;
            ctor.prototype = new TempCtor();
            ctor.prototype.constructor = ctor;
        }
    };
}
}),
"[project]/rayls-shield-landing-page/node_modules/inherits/inherits.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

try {
    var util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
    /* istanbul ignore next */ if (typeof util.inherits !== 'function') throw '';
    module.exports = util.inherits;
} catch (e) {
    /* istanbul ignore next */ module.exports = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/inherits/inherits_browser.js [app-ssr] (ecmascript)");
}
}),
"[project]/rayls-shield-landing-page/node_modules/util-deprecate/node.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * For Node.js, simply re-export the core `util.deprecate` function.
 */ module.exports = __turbopack_context__.r("[externals]/util [external] (util, cjs)").deprecate;
}),
"[project]/rayls-shield-landing-page/node_modules/safe-buffer/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ /* eslint-disable node/no-deprecated-api */ var buffer = __turbopack_context__.r("[externals]/buffer [external] (buffer, cjs)");
var Buffer = buffer.Buffer;
// alternative to using Object.keys for old browsers
function copyProps(src, dst) {
    for(var key in src){
        dst[key] = src[key];
    }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
    module.exports = buffer;
} else {
    // Copy properties from require('buffer')
    copyProps(buffer, exports);
    exports.Buffer = SafeBuffer;
}
function SafeBuffer(arg, encodingOrOffset, length) {
    return Buffer(arg, encodingOrOffset, length);
}
SafeBuffer.prototype = Object.create(Buffer.prototype);
// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer);
SafeBuffer.from = function(arg, encodingOrOffset, length) {
    if (typeof arg === 'number') {
        throw new TypeError('Argument must not be a number');
    }
    return Buffer(arg, encodingOrOffset, length);
};
SafeBuffer.alloc = function(size, fill, encoding) {
    if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number');
    }
    var buf = Buffer(size);
    if (fill !== undefined) {
        if (typeof encoding === 'string') {
            buf.fill(fill, encoding);
        } else {
            buf.fill(fill);
        }
    } else {
        buf.fill(0);
    }
    return buf;
};
SafeBuffer.allocUnsafe = function(size) {
    if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number');
    }
    return Buffer(size);
};
SafeBuffer.allocUnsafeSlow = function(size) {
    if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number');
    }
    return buffer.SlowBuffer(size);
};
}),
"[project]/rayls-shield-landing-page/node_modules/string_decoder/lib/string_decoder.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

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
/*<replacement>*/ var Buffer = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/safe-buffer/index.js [app-ssr] (ecmascript)").Buffer;
/*</replacement>*/ var isEncoding = Buffer.isEncoding || function(encoding) {
    encoding = '' + encoding;
    switch(encoding && encoding.toLowerCase()){
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
        case 'raw':
            return true;
        default:
            return false;
    }
};
function _normalizeEncoding(enc) {
    if (!enc) return 'utf8';
    var retried;
    while(true){
        switch(enc){
            case 'utf8':
            case 'utf-8':
                return 'utf8';
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
                return 'utf16le';
            case 'latin1':
            case 'binary':
                return 'latin1';
            case 'base64':
            case 'ascii':
            case 'hex':
                return enc;
            default:
                if (retried) return; // undefined
                enc = ('' + enc).toLowerCase();
                retried = true;
        }
    }
}
;
// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function normalizeEncoding(enc) {
    var nenc = _normalizeEncoding(enc);
    if (typeof nenc !== 'string' && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
    return nenc || enc;
}
// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters.
exports.StringDecoder = StringDecoder;
function StringDecoder(encoding) {
    this.encoding = normalizeEncoding(encoding);
    var nb;
    switch(this.encoding){
        case 'utf16le':
            this.text = utf16Text;
            this.end = utf16End;
            nb = 4;
            break;
        case 'utf8':
            this.fillLast = utf8FillLast;
            nb = 4;
            break;
        case 'base64':
            this.text = base64Text;
            this.end = base64End;
            nb = 3;
            break;
        default:
            this.write = simpleWrite;
            this.end = simpleEnd;
            return;
    }
    this.lastNeed = 0;
    this.lastTotal = 0;
    this.lastChar = Buffer.allocUnsafe(nb);
}
StringDecoder.prototype.write = function(buf) {
    if (buf.length === 0) return '';
    var r;
    var i;
    if (this.lastNeed) {
        r = this.fillLast(buf);
        if (r === undefined) return '';
        i = this.lastNeed;
        this.lastNeed = 0;
    } else {
        i = 0;
    }
    if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
    return r || '';
};
StringDecoder.prototype.end = utf8End;
// Returns only complete characters in a Buffer
StringDecoder.prototype.text = utf8Text;
// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
StringDecoder.prototype.fillLast = function(buf) {
    if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
    this.lastNeed -= buf.length;
};
// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.
function utf8CheckByte(byte) {
    if (byte <= 0x7F) return 0;
    else if (byte >> 5 === 0x06) return 2;
    else if (byte >> 4 === 0x0E) return 3;
    else if (byte >> 3 === 0x1E) return 4;
    return byte >> 6 === 0x02 ? -1 : -2;
}
// Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.
function utf8CheckIncomplete(self, buf, i) {
    var j = buf.length - 1;
    if (j < i) return 0;
    var nb = utf8CheckByte(buf[j]);
    if (nb >= 0) {
        if (nb > 0) self.lastNeed = nb - 1;
        return nb;
    }
    if (--j < i || nb === -2) return 0;
    nb = utf8CheckByte(buf[j]);
    if (nb >= 0) {
        if (nb > 0) self.lastNeed = nb - 2;
        return nb;
    }
    if (--j < i || nb === -2) return 0;
    nb = utf8CheckByte(buf[j]);
    if (nb >= 0) {
        if (nb > 0) {
            if (nb === 2) nb = 0;
            else self.lastNeed = nb - 3;
        }
        return nb;
    }
    return 0;
}
// Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.
function utf8CheckExtraBytes(self, buf, p) {
    if ((buf[0] & 0xC0) !== 0x80) {
        self.lastNeed = 0;
        return '\ufffd';
    }
    if (self.lastNeed > 1 && buf.length > 1) {
        if ((buf[1] & 0xC0) !== 0x80) {
            self.lastNeed = 1;
            return '\ufffd';
        }
        if (self.lastNeed > 2 && buf.length > 2) {
            if ((buf[2] & 0xC0) !== 0x80) {
                self.lastNeed = 2;
                return '\ufffd';
            }
        }
    }
}
// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
function utf8FillLast(buf) {
    var p = this.lastTotal - this.lastNeed;
    var r = utf8CheckExtraBytes(this, buf, p);
    if (r !== undefined) return r;
    if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, p, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    buf.copy(this.lastChar, p, 0, buf.length);
    this.lastNeed -= buf.length;
}
// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.
function utf8Text(buf, i) {
    var total = utf8CheckIncomplete(this, buf, i);
    if (!this.lastNeed) return buf.toString('utf8', i);
    this.lastTotal = total;
    var end = buf.length - (total - this.lastNeed);
    buf.copy(this.lastChar, 0, end);
    return buf.toString('utf8', i, end);
}
// For UTF-8, a replacement character is added when ending on a partial
// character.
function utf8End(buf) {
    var r = buf && buf.length ? this.write(buf) : '';
    if (this.lastNeed) return r + '\ufffd';
    return r;
}
// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function utf16Text(buf, i) {
    if ((buf.length - i) % 2 === 0) {
        var r = buf.toString('utf16le', i);
        if (r) {
            var c = r.charCodeAt(r.length - 1);
            if (c >= 0xD800 && c <= 0xDBFF) {
                this.lastNeed = 2;
                this.lastTotal = 4;
                this.lastChar[0] = buf[buf.length - 2];
                this.lastChar[1] = buf[buf.length - 1];
                return r.slice(0, -1);
            }
        }
        return r;
    }
    this.lastNeed = 1;
    this.lastTotal = 2;
    this.lastChar[0] = buf[buf.length - 1];
    return buf.toString('utf16le', i, buf.length - 1);
}
// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function utf16End(buf) {
    var r = buf && buf.length ? this.write(buf) : '';
    if (this.lastNeed) {
        var end = this.lastTotal - this.lastNeed;
        return r + this.lastChar.toString('utf16le', 0, end);
    }
    return r;
}
function base64Text(buf, i) {
    var n = (buf.length - i) % 3;
    if (n === 0) return buf.toString('base64', i);
    this.lastNeed = 3 - n;
    this.lastTotal = 3;
    if (n === 1) {
        this.lastChar[0] = buf[buf.length - 1];
    } else {
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
    }
    return buf.toString('base64', i, buf.length - n);
}
function base64End(buf) {
    var r = buf && buf.length ? this.write(buf) : '';
    if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
    return r;
}
// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function simpleWrite(buf) {
    return buf.toString(this.encoding);
}
function simpleEnd(buf) {
    return buf && buf.length ? this.write(buf) : '';
}
}),
"[project]/rayls-shield-landing-page/node_modules/blake-hash/lib/api/blake.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const Transform = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/readable-stream/readable.js [app-ssr] (ecmascript)").Transform;
module.exports = class Blake extends Transform {
    constructor(engine, options){
        super(options);
        this._engine = engine;
        this._finalized = false;
    }
    _transform(chunk, encoding, callback) {
        let error = null;
        try {
            this.update(chunk, encoding);
        } catch (err) {
            error = err;
        }
        callback(error);
    }
    _flush(callback) {
        let error = null;
        try {
            this.push(this.digest());
        } catch (err) {
            error = err;
        }
        callback(error);
    }
    update(data, encoding) {
        if (!Buffer.isBuffer(data) && typeof data !== 'string') throw new TypeError('Data must be a string or a buffer');
        if (this._finalized) throw new Error('Digest already called');
        if (!Buffer.isBuffer(data)) data = Buffer.from(data, encoding);
        this._engine.update(data);
        return this;
    }
    digest(encoding) {
        if (this._finalized) throw new Error('Digest already called');
        this._finalized = true;
        let digest = this._engine.digest();
        if (encoding !== undefined) digest = digest.toString(encoding);
        return digest;
    }
};
}),
"[project]/rayls-shield-landing-page/node_modules/blake-hash/lib/api/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const Blake = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/blake-hash/lib/api/blake.js [app-ssr] (ecmascript)");
module.exports = (engines)=>{
    const getEngine = (algorithm)=>{
        const hash = typeof algorithm === 'string' ? algorithm.toLowerCase() : algorithm;
        switch(hash){
            case 'blake224':
                return engines.Blake224;
            case 'blake256':
                return engines.Blake256;
            case 'blake384':
                return engines.Blake384;
            case 'blake512':
                return engines.Blake512;
            default:
                throw new Error('Invald algorithm: ' + algorithm);
        }
    };
    return (algorithm, options)=>{
        const Engine = getEngine(algorithm);
        return new Blake(new Engine(), options);
    };
};
}),
"[project]/rayls-shield-landing-page/node_modules/blake-hash/bindings.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/blake-hash/lib/api/index.js [app-ssr] (ecmascript)")(__turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/node-gyp-build/index.js [app-ssr] (ecmascript)")(("TURBOPACK compile-time value", "/ROOT/rayls-shield-landing-page/node_modules/blake-hash")));
}),
"[project]/rayls-shield-landing-page/node_modules/blake-hash/lib/blake.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

class Blake {
    _lengthCarry(arr) {
        for(let j = 0; j < arr.length; ++j){
            if (arr[j] < 0x0100000000) break;
            arr[j] -= 0x0100000000;
            arr[j + 1] += 1;
        }
    }
    update(data) {
        const block = this._block;
        let offset = 0;
        while(this._blockOffset + data.length - offset >= block.length){
            for(let i = this._blockOffset; i < block.length;)block[i++] = data[offset++];
            this._length[0] += block.length * 8;
            this._lengthCarry(this._length);
            this._compress();
            this._blockOffset = 0;
        }
        while(offset < data.length)block[this._blockOffset++] = data[offset++];
    }
}
Blake.sigma = [
    [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
    ],
    [
        14,
        10,
        4,
        8,
        9,
        15,
        13,
        6,
        1,
        12,
        0,
        2,
        11,
        7,
        5,
        3
    ],
    [
        11,
        8,
        12,
        0,
        5,
        2,
        15,
        13,
        10,
        14,
        3,
        6,
        7,
        1,
        9,
        4
    ],
    [
        7,
        9,
        3,
        1,
        13,
        12,
        11,
        14,
        2,
        6,
        5,
        10,
        4,
        0,
        15,
        8
    ],
    [
        9,
        0,
        5,
        7,
        2,
        4,
        10,
        15,
        14,
        1,
        11,
        12,
        6,
        8,
        3,
        13
    ],
    [
        2,
        12,
        6,
        10,
        0,
        11,
        8,
        3,
        4,
        13,
        7,
        5,
        15,
        14,
        1,
        9
    ],
    [
        12,
        5,
        1,
        15,
        14,
        13,
        4,
        10,
        0,
        7,
        6,
        3,
        9,
        2,
        8,
        11
    ],
    [
        13,
        11,
        7,
        14,
        12,
        1,
        3,
        9,
        5,
        0,
        15,
        4,
        8,
        6,
        2,
        10
    ],
    [
        6,
        15,
        14,
        9,
        11,
        3,
        0,
        8,
        12,
        2,
        13,
        7,
        1,
        4,
        10,
        5
    ],
    [
        10,
        2,
        8,
        4,
        7,
        6,
        1,
        5,
        15,
        11,
        9,
        14,
        3,
        12,
        13,
        0
    ],
    [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
    ],
    [
        14,
        10,
        4,
        8,
        9,
        15,
        13,
        6,
        1,
        12,
        0,
        2,
        11,
        7,
        5,
        3
    ],
    [
        11,
        8,
        12,
        0,
        5,
        2,
        15,
        13,
        10,
        14,
        3,
        6,
        7,
        1,
        9,
        4
    ],
    [
        7,
        9,
        3,
        1,
        13,
        12,
        11,
        14,
        2,
        6,
        5,
        10,
        4,
        0,
        15,
        8
    ],
    [
        9,
        0,
        5,
        7,
        2,
        4,
        10,
        15,
        14,
        1,
        11,
        12,
        6,
        8,
        3,
        13
    ],
    [
        2,
        12,
        6,
        10,
        0,
        11,
        8,
        3,
        4,
        13,
        7,
        5,
        15,
        14,
        1,
        9
    ]
];
Blake.u256 = [
    0x243f6a88,
    0x85a308d3,
    0x13198a2e,
    0x03707344,
    0xa4093822,
    0x299f31d0,
    0x082efa98,
    0xec4e6c89,
    0x452821e6,
    0x38d01377,
    0xbe5466cf,
    0x34e90c6c,
    0xc0ac29b7,
    0xc97c50dd,
    0x3f84d5b5,
    0xb5470917
];
Blake.u512 = [
    0x243f6a88,
    0x85a308d3,
    0x13198a2e,
    0x03707344,
    0xa4093822,
    0x299f31d0,
    0x082efa98,
    0xec4e6c89,
    0x452821e6,
    0x38d01377,
    0xbe5466cf,
    0x34e90c6c,
    0xc0ac29b7,
    0xc97c50dd,
    0x3f84d5b5,
    0xb5470917,
    0x9216d5d9,
    0x8979fb1b,
    0xd1310ba6,
    0x98dfb5ac,
    0x2ffd72db,
    0xd01adfb7,
    0xb8e1afed,
    0x6a267e96,
    0xba7c9045,
    0xf12c7f99,
    0x24a19947,
    0xb3916cf7,
    0x0801f2e2,
    0x858efc16,
    0x636920d8,
    0x71574e69
];
Blake.padding = Buffer.from([
    0x80,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
]);
module.exports = Blake;
}),
"[project]/rayls-shield-landing-page/node_modules/blake-hash/lib/blake256.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const Blake = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/blake-hash/lib/blake.js [app-ssr] (ecmascript)");
const zo = Buffer.from([
    0x01
]);
const oo = Buffer.from([
    0x81
]);
const rot = (x, n)=>(x << 32 - n | x >>> n) >>> 0;
function g(v, m, i, a, b, c, d, e) {
    const sigma = Blake.sigma;
    const u256 = Blake.u256;
    v[a] = v[a] + ((m[sigma[i][e]] ^ u256[sigma[i][e + 1]]) >>> 0) + v[b] >>> 0;
    v[d] = rot(v[d] ^ v[a], 16);
    v[c] = v[c] + v[d] >>> 0;
    v[b] = rot(v[b] ^ v[c], 12);
    v[a] = v[a] + ((m[sigma[i][e + 1]] ^ u256[sigma[i][e]]) >>> 0) + v[b] >>> 0;
    v[d] = rot(v[d] ^ v[a], 8);
    v[c] = v[c] + v[d] >>> 0;
    v[b] = rot(v[b] ^ v[c], 7);
}
module.exports = class Blake256 extends Blake {
    constructor(){
        super();
        this._h = [
            0x6a09e667,
            0xbb67ae85,
            0x3c6ef372,
            0xa54ff53a,
            0x510e527f,
            0x9b05688c,
            0x1f83d9ab,
            0x5be0cd19
        ];
        this._s = [
            0,
            0,
            0,
            0
        ];
        this._block = Buffer.alloc(64);
        this._blockOffset = 0;
        this._length = [
            0,
            0
        ];
        this._nullt = false;
        this._zo = zo;
        this._oo = oo;
    }
    _compress() {
        const u256 = Blake.u256;
        const v = new Array(16);
        const m = new Array(16);
        let i;
        for(i = 0; i < 16; ++i)m[i] = this._block.readUInt32BE(i * 4);
        for(i = 0; i < 8; ++i)v[i] = this._h[i] >>> 0;
        for(i = 8; i < 12; ++i)v[i] = (this._s[i - 8] ^ u256[i - 8]) >>> 0;
        for(i = 12; i < 16; ++i)v[i] = u256[i - 8];
        if (!this._nullt) {
            v[12] = (v[12] ^ this._length[0]) >>> 0;
            v[13] = (v[13] ^ this._length[0]) >>> 0;
            v[14] = (v[14] ^ this._length[1]) >>> 0;
            v[15] = (v[15] ^ this._length[1]) >>> 0;
        }
        for(i = 0; i < 14; ++i){
            /* column step */ g(v, m, i, 0, 4, 8, 12, 0);
            g(v, m, i, 1, 5, 9, 13, 2);
            g(v, m, i, 2, 6, 10, 14, 4);
            g(v, m, i, 3, 7, 11, 15, 6);
            /* diagonal step */ g(v, m, i, 0, 5, 10, 15, 8);
            g(v, m, i, 1, 6, 11, 12, 10);
            g(v, m, i, 2, 7, 8, 13, 12);
            g(v, m, i, 3, 4, 9, 14, 14);
        }
        for(i = 0; i < 16; ++i)this._h[i % 8] = (this._h[i % 8] ^ v[i]) >>> 0;
        for(i = 0; i < 8; ++i)this._h[i] = (this._h[i] ^ this._s[i % 4]) >>> 0;
    }
    _padding() {
        let lo = this._length[0] + this._blockOffset * 8;
        let hi = this._length[1];
        if (lo >= 0x0100000000) {
            lo -= 0x0100000000;
            hi += 1;
        }
        const msglen = Buffer.alloc(8);
        msglen.writeUInt32BE(hi, 0);
        msglen.writeUInt32BE(lo, 4);
        if (this._blockOffset === 55) {
            this._length[0] -= 8;
            this.update(this._oo);
        } else {
            if (this._blockOffset < 55) {
                if (this._blockOffset === 0) this._nullt = true;
                this._length[0] -= (55 - this._blockOffset) * 8;
                this.update(Blake.padding.slice(0, 55 - this._blockOffset));
            } else {
                this._length[0] -= (64 - this._blockOffset) * 8;
                this.update(Blake.padding.slice(0, 64 - this._blockOffset));
                this._length[0] -= 55 * 8;
                this.update(Blake.padding.slice(1, 1 + 55));
                this._nullt = true;
            }
            this.update(this._zo);
            this._length[0] -= 8;
        }
        this._length[0] -= 64;
        this.update(msglen);
    }
    digest() {
        this._padding();
        const buffer = Buffer.alloc(32);
        for(let i = 0; i < 8; ++i)buffer.writeUInt32BE(this._h[i], i * 4);
        return buffer;
    }
};
}),
"[project]/rayls-shield-landing-page/node_modules/blake-hash/lib/blake224.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const Blake256 = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/blake-hash/lib/blake256.js [app-ssr] (ecmascript)");
const zo = Buffer.from([
    0x00
]);
const oo = Buffer.from([
    0x80
]);
module.exports = class Blake224 extends Blake256 {
    constructor(){
        super();
        this._h = [
            0xc1059ed8,
            0x367cd507,
            0x3070dd17,
            0xf70e5939,
            0xffc00b31,
            0x68581511,
            0x64f98fa7,
            0xbefa4fa4
        ];
        this._zo = zo;
        this._oo = oo;
    }
    digest() {
        this._padding();
        const buffer = Buffer.alloc(28);
        for(let i = 0; i < 7; ++i)buffer.writeUInt32BE(this._h[i], i * 4);
        return buffer;
    }
};
}),
"[project]/rayls-shield-landing-page/node_modules/blake-hash/lib/blake512.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const Blake = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/blake-hash/lib/blake.js [app-ssr] (ecmascript)");
const zo = Buffer.from([
    0x01
]);
const oo = Buffer.from([
    0x81
]);
function rot(v, i, j, n) {
    let hi = v[i * 2] ^ v[j * 2];
    let lo = v[i * 2 + 1] ^ v[j * 2 + 1];
    if (n >= 32) {
        lo = lo ^ hi;
        hi = lo ^ hi;
        lo = lo ^ hi;
        n -= 32;
    }
    if (n === 0) {
        v[i * 2] = hi >>> 0;
        v[i * 2 + 1] = lo >>> 0;
    } else {
        v[i * 2] = (hi >>> n | lo << 32 - n) >>> 0;
        v[i * 2 + 1] = (lo >>> n | hi << 32 - n) >>> 0;
    }
}
function g(v, m, i, a, b, c, d, e) {
    const sigma = Blake.sigma;
    const u512 = Blake.u512;
    let lo;
    // v[a] += (m[sigma[i][e]] ^ u512[sigma[i][e+1]]) + v[b];
    lo = v[a * 2 + 1] + ((m[sigma[i][e] * 2 + 1] ^ u512[sigma[i][e + 1] * 2 + 1]) >>> 0) + v[b * 2 + 1];
    v[a * 2] = v[a * 2] + ((m[sigma[i][e] * 2] ^ u512[sigma[i][e + 1] * 2]) >>> 0) + v[b * 2] + ~~(lo / 0x0100000000) >>> 0;
    v[a * 2 + 1] = lo >>> 0;
    // v[d] = ROT( v[d] ^ v[a],32);
    rot(v, d, a, 32);
    // v[c] += v[d];
    lo = v[c * 2 + 1] + v[d * 2 + 1];
    v[c * 2] = v[c * 2] + v[d * 2] + ~~(lo / 0x0100000000) >>> 0;
    v[c * 2 + 1] = lo >>> 0;
    // v[b] = ROT( v[b] ^ v[c],25);
    rot(v, b, c, 25);
    // v[a] += (m[sigma[i][e+1]] ^ u512[sigma[i][e]])+v[b];
    lo = v[a * 2 + 1] + ((m[sigma[i][e + 1] * 2 + 1] ^ u512[sigma[i][e] * 2 + 1]) >>> 0) + v[b * 2 + 1];
    v[a * 2] = v[a * 2] + ((m[sigma[i][e + 1] * 2] ^ u512[sigma[i][e] * 2]) >>> 0) + v[b * 2] + ~~(lo / 0x0100000000) >>> 0;
    v[a * 2 + 1] = lo >>> 0;
    // v[d] = ROT( v[d] ^ v[a],16);
    rot(v, d, a, 16);
    // v[c] += v[d];
    lo = v[c * 2 + 1] + v[d * 2 + 1];
    v[c * 2] = v[c * 2] + v[d * 2] + ~~(lo / 0x0100000000) >>> 0;
    v[c * 2 + 1] = lo >>> 0;
    // v[b] = ROT( v[b] ^ v[c],11)
    rot(v, b, c, 11);
}
module.exports = class Blake512 extends Blake {
    constructor(){
        super();
        this._h = [
            0x6a09e667,
            0xf3bcc908,
            0xbb67ae85,
            0x84caa73b,
            0x3c6ef372,
            0xfe94f82b,
            0xa54ff53a,
            0x5f1d36f1,
            0x510e527f,
            0xade682d1,
            0x9b05688c,
            0x2b3e6c1f,
            0x1f83d9ab,
            0xfb41bd6b,
            0x5be0cd19,
            0x137e2179
        ];
        this._s = [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ];
        this._block = Buffer.alloc(128);
        this._blockOffset = 0;
        this._length = [
            0,
            0,
            0,
            0
        ];
        this._nullt = false;
        this._zo = zo;
        this._oo = oo;
    }
    _compress() {
        const u512 = Blake.u512;
        const v = new Array(32);
        const m = new Array(32);
        let i;
        for(i = 0; i < 32; ++i)m[i] = this._block.readUInt32BE(i * 4);
        for(i = 0; i < 16; ++i)v[i] = this._h[i] >>> 0;
        for(i = 16; i < 24; ++i)v[i] = (this._s[i - 16] ^ u512[i - 16]) >>> 0;
        for(i = 24; i < 32; ++i)v[i] = u512[i - 16];
        if (!this._nullt) {
            v[24] = (v[24] ^ this._length[1]) >>> 0;
            v[25] = (v[25] ^ this._length[0]) >>> 0;
            v[26] = (v[26] ^ this._length[1]) >>> 0;
            v[27] = (v[27] ^ this._length[0]) >>> 0;
            v[28] = (v[28] ^ this._length[3]) >>> 0;
            v[29] = (v[29] ^ this._length[2]) >>> 0;
            v[30] = (v[30] ^ this._length[3]) >>> 0;
            v[31] = (v[31] ^ this._length[2]) >>> 0;
        }
        for(i = 0; i < 16; ++i){
            /* column step */ g(v, m, i, 0, 4, 8, 12, 0);
            g(v, m, i, 1, 5, 9, 13, 2);
            g(v, m, i, 2, 6, 10, 14, 4);
            g(v, m, i, 3, 7, 11, 15, 6);
            /* diagonal step */ g(v, m, i, 0, 5, 10, 15, 8);
            g(v, m, i, 1, 6, 11, 12, 10);
            g(v, m, i, 2, 7, 8, 13, 12);
            g(v, m, i, 3, 4, 9, 14, 14);
        }
        for(i = 0; i < 16; ++i){
            this._h[i % 8 * 2] = (this._h[i % 8 * 2] ^ v[i * 2]) >>> 0;
            this._h[i % 8 * 2 + 1] = (this._h[i % 8 * 2 + 1] ^ v[i * 2 + 1]) >>> 0;
        }
        for(i = 0; i < 8; ++i){
            this._h[i * 2] = (this._h[i * 2] ^ this._s[i % 4 * 2]) >>> 0;
            this._h[i * 2 + 1] = (this._h[i * 2 + 1] ^ this._s[i % 4 * 2 + 1]) >>> 0;
        }
    }
    _padding() {
        const len = this._length.slice();
        len[0] += this._blockOffset * 8;
        this._lengthCarry(len);
        const msglen = Buffer.alloc(16);
        for(let i = 0; i < 4; ++i)msglen.writeUInt32BE(len[3 - i], i * 4);
        if (this._blockOffset === 111) {
            this._length[0] -= 8;
            this.update(this._oo);
        } else {
            if (this._blockOffset < 111) {
                if (this._blockOffset === 0) this._nullt = true;
                this._length[0] -= (111 - this._blockOffset) * 8;
                this.update(Blake.padding.slice(0, 111 - this._blockOffset));
            } else {
                this._length[0] -= (128 - this._blockOffset) * 8;
                this.update(Blake.padding.slice(0, 128 - this._blockOffset));
                this._length[0] -= 111 * 8;
                this.update(Blake.padding.slice(1, 1 + 111));
                this._nullt = true;
            }
            this.update(this._zo);
            this._length[0] -= 8;
        }
        this._length[0] -= 128;
        this.update(msglen);
    }
    digest() {
        this._padding();
        const buffer = Buffer.alloc(64);
        for(let i = 0; i < 16; ++i)buffer.writeUInt32BE(this._h[i], i * 4);
        return buffer;
    }
};
}),
"[project]/rayls-shield-landing-page/node_modules/blake-hash/lib/blake384.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const Blake512 = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/blake-hash/lib/blake512.js [app-ssr] (ecmascript)");
const zo = Buffer.from([
    0x00
]);
const oo = Buffer.from([
    0x80
]);
module.exports = class Blake384 extends Blake512 {
    constructor(){
        super();
        this._h = [
            0xcbbb9d5d,
            0xc1059ed8,
            0x629a292a,
            0x367cd507,
            0x9159015a,
            0x3070dd17,
            0x152fecd8,
            0xf70e5939,
            0x67332667,
            0xffc00b31,
            0x8eb44a87,
            0x68581511,
            0xdb0c2e0d,
            0x64f98fa7,
            0x47b5481d,
            0xbefa4fa4
        ];
        this._zo = zo;
        this._oo = oo;
    }
    digest() {
        this._padding();
        const buffer = Buffer.alloc(48);
        for(let i = 0; i < 12; ++i)buffer.writeUInt32BE(this._h[i], i * 4);
        return buffer;
    }
};
}),
"[project]/rayls-shield-landing-page/node_modules/blake-hash/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    Blake224: __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/blake-hash/lib/blake224.js [app-ssr] (ecmascript)"),
    Blake256: __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/blake-hash/lib/blake256.js [app-ssr] (ecmascript)"),
    Blake384: __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/blake-hash/lib/blake384.js [app-ssr] (ecmascript)"),
    Blake512: __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/blake-hash/lib/blake512.js [app-ssr] (ecmascript)")
};
}),
"[project]/rayls-shield-landing-page/node_modules/blake-hash/js.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/blake-hash/lib/api/index.js [app-ssr] (ecmascript)")(__turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/blake-hash/lib/index.js [app-ssr] (ecmascript)"));
}),
"[project]/rayls-shield-landing-page/node_modules/blake-hash/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

try {
    module.exports = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/blake-hash/bindings.js [app-ssr] (ecmascript)");
} catch (err) {
    module.exports = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/blake-hash/js.js [app-ssr] (ecmascript)");
}
}),
"[project]/rayls-shield-landing-page/node_modules/node-gyp-build/node-gyp-build.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var fs = __turbopack_context__.r("[externals]/fs [external] (fs, cjs)");
var path = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
var os = __turbopack_context__.r("[externals]/os [external] (os, cjs)");
// Workaround to fix webpack's build warnings: 'the request of a dependency is an expression'
var runtimeRequire = typeof __webpack_require__ === 'function' ? __non_webpack_require__ : /*TURBOPACK member replacement*/ __turbopack_context__.t // eslint-disable-line
;
var vars = process.config && process.config.variables || {};
var prebuildsOnly = !!process.env.PREBUILDS_ONLY;
var abi = process.versions.modules // TODO: support old node where this is undef
;
var runtime = isElectron() ? 'electron' : isNwjs() ? 'node-webkit' : 'node';
var arch = process.env.npm_config_arch || os.arch();
var platform = process.env.npm_config_platform || os.platform();
var libc = process.env.LIBC || (isAlpine(platform) ? 'musl' : 'glibc');
var armv = process.env.ARM_VERSION || (arch === 'arm64' ? '8' : vars.arm_version) || '';
var uv = (process.versions.uv || '').split('.')[0];
module.exports = load;
function load(dir) {
    return runtimeRequire(load.resolve(dir));
}
load.resolve = load.path = function(dir) {
    dir = path.resolve(dir || '.');
    try {
        var name = runtimeRequire(path.join(dir, 'package.json')).name.toUpperCase().replace(/-/g, '_');
        if (process.env[name + '_PREBUILD']) dir = process.env[name + '_PREBUILD'];
    } catch (err) {}
    if (!prebuildsOnly) {
        var release = getFirst(path.join(dir, 'build/Release'), matchBuild);
        if (release) return release;
        var debug = getFirst(path.join(dir, 'build/Debug'), matchBuild);
        if (debug) return debug;
    }
    var prebuild = resolve(dir);
    if (prebuild) return prebuild;
    var nearby = resolve(path.dirname(process.execPath));
    if (nearby) return nearby;
    var target = [
        'platform=' + platform,
        'arch=' + arch,
        'runtime=' + runtime,
        'abi=' + abi,
        'uv=' + uv,
        armv ? 'armv=' + armv : '',
        'libc=' + libc,
        'node=' + process.versions.node,
        process.versions.electron ? 'electron=' + process.versions.electron : '',
        typeof __webpack_require__ === 'function' ? 'webpack=true' : '' // eslint-disable-line
    ].filter(Boolean).join(' ');
    throw new Error('No native build was found for ' + target + '\n    loaded from: ' + dir + '\n');
    function resolve(dir) {
        // Find matching "prebuilds/<platform>-<arch>" directory
        var tuples = readdirSync(path.join(dir, 'prebuilds')).map(parseTuple);
        var tuple = tuples.filter(matchTuple(platform, arch)).sort(compareTuples)[0];
        if (!tuple) return;
        // Find most specific flavor first
        var prebuilds = path.join(dir, 'prebuilds', tuple.name);
        var parsed = readdirSync(prebuilds).map(parseTags);
        var candidates = parsed.filter(matchTags(runtime, abi));
        var winner = candidates.sort(compareTags(runtime))[0];
        if (winner) return path.join(prebuilds, winner.file);
    }
};
function readdirSync(dir) {
    try {
        return fs.readdirSync(dir);
    } catch (err) {
        return [];
    }
}
function getFirst(dir, filter) {
    var files = readdirSync(dir).filter(filter);
    return files[0] && path.join(dir, files[0]);
}
function matchBuild(name) {
    return /\.node$/.test(name);
}
function parseTuple(name) {
    // Example: darwin-x64+arm64
    var arr = name.split('-');
    if (arr.length !== 2) return;
    var platform = arr[0];
    var architectures = arr[1].split('+');
    if (!platform) return;
    if (!architectures.length) return;
    if (!architectures.every(Boolean)) return;
    return {
        name,
        platform,
        architectures
    };
}
function matchTuple(platform, arch) {
    return function(tuple) {
        if (tuple == null) return false;
        if (tuple.platform !== platform) return false;
        return tuple.architectures.includes(arch);
    };
}
function compareTuples(a, b) {
    // Prefer single-arch prebuilds over multi-arch
    return a.architectures.length - b.architectures.length;
}
function parseTags(file) {
    var arr = file.split('.');
    var extension = arr.pop();
    var tags = {
        file: file,
        specificity: 0
    };
    if (extension !== 'node') return;
    for(var i = 0; i < arr.length; i++){
        var tag = arr[i];
        if (tag === 'node' || tag === 'electron' || tag === 'node-webkit') {
            tags.runtime = tag;
        } else if (tag === 'napi') {
            tags.napi = true;
        } else if (tag.slice(0, 3) === 'abi') {
            tags.abi = tag.slice(3);
        } else if (tag.slice(0, 2) === 'uv') {
            tags.uv = tag.slice(2);
        } else if (tag.slice(0, 4) === 'armv') {
            tags.armv = tag.slice(4);
        } else if (tag === 'glibc' || tag === 'musl') {
            tags.libc = tag;
        } else {
            continue;
        }
        tags.specificity++;
    }
    return tags;
}
function matchTags(runtime, abi) {
    return function(tags) {
        if (tags == null) return false;
        if (tags.runtime && tags.runtime !== runtime && !runtimeAgnostic(tags)) return false;
        if (tags.abi && tags.abi !== abi && !tags.napi) return false;
        if (tags.uv && tags.uv !== uv) return false;
        if (tags.armv && tags.armv !== armv) return false;
        if (tags.libc && tags.libc !== libc) return false;
        return true;
    };
}
function runtimeAgnostic(tags) {
    return tags.runtime === 'node' && tags.napi;
}
function compareTags(runtime) {
    // Precedence: non-agnostic runtime, abi over napi, then by specificity.
    return function(a, b) {
        if (a.runtime !== b.runtime) {
            return a.runtime === runtime ? -1 : 1;
        } else if (a.abi !== b.abi) {
            return a.abi ? -1 : 1;
        } else if (a.specificity !== b.specificity) {
            return a.specificity > b.specificity ? -1 : 1;
        } else {
            return 0;
        }
    };
}
function isNwjs() {
    return !!(process.versions && process.versions.nw);
}
function isElectron() {
    if (process.versions && process.versions.electron) return true;
    if (process.env.ELECTRON_RUN_AS_NODE) return true;
    return ("TURBOPACK compile-time value", "undefined") !== 'undefined' && window.process && window.process.type === 'renderer';
}
function isAlpine(platform) {
    return platform === 'linux' && fs.existsSync('/etc/alpine-release');
}
// Exposed for unit tests
// TODO: move to lib
load.parseTags = parseTags;
load.matchTags = matchTags;
load.compareTags = compareTags;
load.parseTuple = parseTuple;
load.matchTuple = matchTuple;
load.compareTuples = compareTuples;
}),
"[project]/rayls-shield-landing-page/node_modules/node-gyp-build/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const runtimeRequire = typeof __webpack_require__ === 'function' ? __non_webpack_require__ : /*TURBOPACK member replacement*/ __turbopack_context__.t // eslint-disable-line
;
if (typeof runtimeRequire.addon === 'function') {
    module.exports = runtimeRequire.addon.bind(runtimeRequire);
} else {
    module.exports = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/node-gyp-build/node-gyp-build.js [app-ssr] (ecmascript)");
}
}),
"[project]/rayls-shield-landing-page/node_modules/bn.js/lib/bn.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

(function(module1, exports) {
    'use strict';
    // Utils
    function assert(val, msg) {
        if (!val) throw new Error(msg || 'Assertion failed');
    }
    // Could use `inherits` module, but don't want to move from single file
    // architecture yet.
    function inherits(ctor, superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {};
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
    }
    // BN
    function BN(number, base, endian) {
        if (BN.isBN(number)) {
            return number;
        }
        this.negative = 0;
        this.words = null;
        this.length = 0;
        // Reduction context
        this.red = null;
        if (number !== null) {
            if (base === 'le' || base === 'be') {
                endian = base;
                base = 10;
            }
            this._init(number || 0, base || 10, endian || 'be');
        }
    }
    if ("TURBOPACK compile-time truthy", 1) {
        module1.exports = BN;
    } else //TURBOPACK unreachable
    ;
    BN.BN = BN;
    BN.wordSize = 26;
    var Buffer;
    try {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            Buffer = __turbopack_context__.r("[externals]/buffer [external] (buffer, cjs)").Buffer;
        }
    } catch (e) {}
    BN.isBN = function isBN(num) {
        if (num instanceof BN) {
            return true;
        }
        return num !== null && typeof num === 'object' && num.constructor.wordSize === BN.wordSize && Array.isArray(num.words);
    };
    BN.max = function max(left, right) {
        if (left.cmp(right) > 0) return left;
        return right;
    };
    BN.min = function min(left, right) {
        if (left.cmp(right) < 0) return left;
        return right;
    };
    BN.prototype._init = function init(number, base, endian) {
        if (typeof number === 'number') {
            return this._initNumber(number, base, endian);
        }
        if (typeof number === 'object') {
            return this._initArray(number, base, endian);
        }
        if (base === 'hex') {
            base = 16;
        }
        assert(base === (base | 0) && base >= 2 && base <= 36);
        number = number.toString().replace(/\s+/g, '');
        var start = 0;
        if (number[0] === '-') {
            start++;
            this.negative = 1;
        }
        if (start < number.length) {
            if (base === 16) {
                this._parseHex(number, start, endian);
            } else {
                this._parseBase(number, base, start);
                if (endian === 'le') {
                    this._initArray(this.toArray(), base, endian);
                }
            }
        }
    };
    BN.prototype._initNumber = function _initNumber(number, base, endian) {
        if (number < 0) {
            this.negative = 1;
            number = -number;
        }
        if (number < 0x4000000) {
            this.words = [
                number & 0x3ffffff
            ];
            this.length = 1;
        } else if (number < 0x10000000000000) {
            this.words = [
                number & 0x3ffffff,
                number / 0x4000000 & 0x3ffffff
            ];
            this.length = 2;
        } else {
            assert(number < 0x20000000000000); // 2 ^ 53 (unsafe)
            this.words = [
                number & 0x3ffffff,
                number / 0x4000000 & 0x3ffffff,
                1
            ];
            this.length = 3;
        }
        if (endian !== 'le') return;
        // Reverse the bytes
        this._initArray(this.toArray(), base, endian);
    };
    BN.prototype._initArray = function _initArray(number, base, endian) {
        // Perhaps a Uint8Array
        assert(typeof number.length === 'number');
        if (number.length <= 0) {
            this.words = [
                0
            ];
            this.length = 1;
            return this;
        }
        this.length = Math.ceil(number.length / 3);
        this.words = new Array(this.length);
        for(var i = 0; i < this.length; i++){
            this.words[i] = 0;
        }
        var j, w;
        var off = 0;
        if (endian === 'be') {
            for(i = number.length - 1, j = 0; i >= 0; i -= 3){
                w = number[i] | number[i - 1] << 8 | number[i - 2] << 16;
                this.words[j] |= w << off & 0x3ffffff;
                this.words[j + 1] = w >>> 26 - off & 0x3ffffff;
                off += 24;
                if (off >= 26) {
                    off -= 26;
                    j++;
                }
            }
        } else if (endian === 'le') {
            for(i = 0, j = 0; i < number.length; i += 3){
                w = number[i] | number[i + 1] << 8 | number[i + 2] << 16;
                this.words[j] |= w << off & 0x3ffffff;
                this.words[j + 1] = w >>> 26 - off & 0x3ffffff;
                off += 24;
                if (off >= 26) {
                    off -= 26;
                    j++;
                }
            }
        }
        return this._strip();
    };
    function parseHex4Bits(string, index) {
        var c = string.charCodeAt(index);
        // '0' - '9'
        if (c >= 48 && c <= 57) {
            return c - 48;
        // 'A' - 'F'
        } else if (c >= 65 && c <= 70) {
            return c - 55;
        // 'a' - 'f'
        } else if (c >= 97 && c <= 102) {
            return c - 87;
        } else {
            assert(false, 'Invalid character in ' + string);
        }
    }
    function parseHexByte(string, lowerBound, index) {
        var r = parseHex4Bits(string, index);
        if (index - 1 >= lowerBound) {
            r |= parseHex4Bits(string, index - 1) << 4;
        }
        return r;
    }
    BN.prototype._parseHex = function _parseHex(number, start, endian) {
        // Create possibly bigger array to ensure that it fits the number
        this.length = Math.ceil((number.length - start) / 6);
        this.words = new Array(this.length);
        for(var i = 0; i < this.length; i++){
            this.words[i] = 0;
        }
        // 24-bits chunks
        var off = 0;
        var j = 0;
        var w;
        if (endian === 'be') {
            for(i = number.length - 1; i >= start; i -= 2){
                w = parseHexByte(number, start, i) << off;
                this.words[j] |= w & 0x3ffffff;
                if (off >= 18) {
                    off -= 18;
                    j += 1;
                    this.words[j] |= w >>> 26;
                } else {
                    off += 8;
                }
            }
        } else {
            var parseLength = number.length - start;
            for(i = parseLength % 2 === 0 ? start + 1 : start; i < number.length; i += 2){
                w = parseHexByte(number, start, i) << off;
                this.words[j] |= w & 0x3ffffff;
                if (off >= 18) {
                    off -= 18;
                    j += 1;
                    this.words[j] |= w >>> 26;
                } else {
                    off += 8;
                }
            }
        }
        this._strip();
    };
    function parseBase(str, start, end, mul) {
        var r = 0;
        var b = 0;
        var len = Math.min(str.length, end);
        for(var i = start; i < len; i++){
            var c = str.charCodeAt(i) - 48;
            r *= mul;
            // 'a'
            if (c >= 49) {
                b = c - 49 + 0xa;
            // 'A'
            } else if (c >= 17) {
                b = c - 17 + 0xa;
            // '0' - '9'
            } else {
                b = c;
            }
            assert(c >= 0 && b < mul, 'Invalid character');
            r += b;
        }
        return r;
    }
    BN.prototype._parseBase = function _parseBase(number, base, start) {
        // Initialize as zero
        this.words = [
            0
        ];
        this.length = 1;
        // Find length of limb in base
        for(var limbLen = 0, limbPow = 1; limbPow <= 0x3ffffff; limbPow *= base){
            limbLen++;
        }
        limbLen--;
        limbPow = limbPow / base | 0;
        var total = number.length - start;
        var mod = total % limbLen;
        var end = Math.min(total, total - mod) + start;
        var word = 0;
        for(var i = start; i < end; i += limbLen){
            word = parseBase(number, i, i + limbLen, base);
            this.imuln(limbPow);
            if (this.words[0] + word < 0x4000000) {
                this.words[0] += word;
            } else {
                this._iaddn(word);
            }
        }
        if (mod !== 0) {
            var pow = 1;
            word = parseBase(number, i, number.length, base);
            for(i = 0; i < mod; i++){
                pow *= base;
            }
            this.imuln(pow);
            if (this.words[0] + word < 0x4000000) {
                this.words[0] += word;
            } else {
                this._iaddn(word);
            }
        }
        this._strip();
    };
    BN.prototype.copy = function copy(dest) {
        dest.words = new Array(this.length);
        for(var i = 0; i < this.length; i++){
            dest.words[i] = this.words[i];
        }
        dest.length = this.length;
        dest.negative = this.negative;
        dest.red = this.red;
    };
    function move(dest, src) {
        dest.words = src.words;
        dest.length = src.length;
        dest.negative = src.negative;
        dest.red = src.red;
    }
    BN.prototype._move = function _move(dest) {
        move(dest, this);
    };
    BN.prototype.clone = function clone() {
        var r = new BN(null);
        this.copy(r);
        return r;
    };
    BN.prototype._expand = function _expand(size) {
        while(this.length < size){
            this.words[this.length++] = 0;
        }
        return this;
    };
    // Remove leading `0` from `this`
    BN.prototype._strip = function strip() {
        while(this.length > 1 && this.words[this.length - 1] === 0){
            this.length--;
        }
        return this._normSign();
    };
    BN.prototype._normSign = function _normSign() {
        // -0 = 0
        if (this.length === 1 && this.words[0] === 0) {
            this.negative = 0;
        }
        return this;
    };
    // Check Symbol.for because not everywhere where Symbol defined
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#Browser_compatibility
    if (typeof Symbol !== 'undefined' && typeof Symbol.for === 'function') {
        try {
            BN.prototype[Symbol.for('nodejs.util.inspect.custom')] = inspect;
        } catch (e) {
            BN.prototype.inspect = inspect;
        }
    } else {
        BN.prototype.inspect = inspect;
    }
    function inspect() {
        return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
    }
    /*

  var zeros = [];
  var groupSizes = [];
  var groupBases = [];

  var s = '';
  var i = -1;
  while (++i < BN.wordSize) {
    zeros[i] = s;
    s += '0';
  }
  groupSizes[0] = 0;
  groupSizes[1] = 0;
  groupBases[0] = 0;
  groupBases[1] = 0;
  var base = 2 - 1;
  while (++base < 36 + 1) {
    var groupSize = 0;
    var groupBase = 1;
    while (groupBase < (1 << BN.wordSize) / base) {
      groupBase *= base;
      groupSize += 1;
    }
    groupSizes[base] = groupSize;
    groupBases[base] = groupBase;
  }

  */ var zeros = [
        '',
        '0',
        '00',
        '000',
        '0000',
        '00000',
        '000000',
        '0000000',
        '00000000',
        '000000000',
        '0000000000',
        '00000000000',
        '000000000000',
        '0000000000000',
        '00000000000000',
        '000000000000000',
        '0000000000000000',
        '00000000000000000',
        '000000000000000000',
        '0000000000000000000',
        '00000000000000000000',
        '000000000000000000000',
        '0000000000000000000000',
        '00000000000000000000000',
        '000000000000000000000000',
        '0000000000000000000000000'
    ];
    var groupSizes = [
        0,
        0,
        25,
        16,
        12,
        11,
        10,
        9,
        8,
        8,
        7,
        7,
        7,
        7,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5
    ];
    var groupBases = [
        0,
        0,
        33554432,
        43046721,
        16777216,
        48828125,
        60466176,
        40353607,
        16777216,
        43046721,
        10000000,
        19487171,
        35831808,
        62748517,
        7529536,
        11390625,
        16777216,
        24137569,
        34012224,
        47045881,
        64000000,
        4084101,
        5153632,
        6436343,
        7962624,
        9765625,
        11881376,
        14348907,
        17210368,
        20511149,
        24300000,
        28629151,
        33554432,
        39135393,
        45435424,
        52521875,
        60466176
    ];
    BN.prototype.toString = function toString(base, padding) {
        base = base || 10;
        padding = padding | 0 || 1;
        var out;
        if (base === 16 || base === 'hex') {
            out = '';
            var off = 0;
            var carry = 0;
            for(var i = 0; i < this.length; i++){
                var w = this.words[i];
                var word = ((w << off | carry) & 0xffffff).toString(16);
                carry = w >>> 24 - off & 0xffffff;
                off += 2;
                if (off >= 26) {
                    off -= 26;
                    i--;
                }
                if (carry !== 0 || i !== this.length - 1) {
                    out = zeros[6 - word.length] + word + out;
                } else {
                    out = word + out;
                }
            }
            if (carry !== 0) {
                out = carry.toString(16) + out;
            }
            while(out.length % padding !== 0){
                out = '0' + out;
            }
            if (this.negative !== 0) {
                out = '-' + out;
            }
            return out;
        }
        if (base === (base | 0) && base >= 2 && base <= 36) {
            // var groupSize = Math.floor(BN.wordSize * Math.LN2 / Math.log(base));
            var groupSize = groupSizes[base];
            // var groupBase = Math.pow(base, groupSize);
            var groupBase = groupBases[base];
            out = '';
            var c = this.clone();
            c.negative = 0;
            while(!c.isZero()){
                var r = c.modrn(groupBase).toString(base);
                c = c.idivn(groupBase);
                if (!c.isZero()) {
                    out = zeros[groupSize - r.length] + r + out;
                } else {
                    out = r + out;
                }
            }
            if (this.isZero()) {
                out = '0' + out;
            }
            while(out.length % padding !== 0){
                out = '0' + out;
            }
            if (this.negative !== 0) {
                out = '-' + out;
            }
            return out;
        }
        assert(false, 'Base should be between 2 and 36');
    };
    BN.prototype.toNumber = function toNumber() {
        var ret = this.words[0];
        if (this.length === 2) {
            ret += this.words[1] * 0x4000000;
        } else if (this.length === 3 && this.words[2] === 0x01) {
            // NOTE: at this stage it is known that the top bit is set
            ret += 0x10000000000000 + this.words[1] * 0x4000000;
        } else if (this.length > 2) {
            assert(false, 'Number can only safely store up to 53 bits');
        }
        return this.negative !== 0 ? -ret : ret;
    };
    BN.prototype.toJSON = function toJSON() {
        return this.toString(16, 2);
    };
    if (Buffer) {
        BN.prototype.toBuffer = function toBuffer(endian, length) {
            return this.toArrayLike(Buffer, endian, length);
        };
    }
    BN.prototype.toArray = function toArray(endian, length) {
        return this.toArrayLike(Array, endian, length);
    };
    var allocate = function allocate(ArrayType, size) {
        if (ArrayType.allocUnsafe) {
            return ArrayType.allocUnsafe(size);
        }
        return new ArrayType(size);
    };
    BN.prototype.toArrayLike = function toArrayLike(ArrayType, endian, length) {
        this._strip();
        var byteLength = this.byteLength();
        var reqLength = length || Math.max(1, byteLength);
        assert(byteLength <= reqLength, 'byte array longer than desired length');
        assert(reqLength > 0, 'Requested array length <= 0');
        var res = allocate(ArrayType, reqLength);
        var postfix = endian === 'le' ? 'LE' : 'BE';
        this['_toArrayLike' + postfix](res, byteLength);
        return res;
    };
    BN.prototype._toArrayLikeLE = function _toArrayLikeLE(res, byteLength) {
        var position = 0;
        var carry = 0;
        for(var i = 0, shift = 0; i < this.length; i++){
            var word = this.words[i] << shift | carry;
            res[position++] = word & 0xff;
            if (position < res.length) {
                res[position++] = word >> 8 & 0xff;
            }
            if (position < res.length) {
                res[position++] = word >> 16 & 0xff;
            }
            if (shift === 6) {
                if (position < res.length) {
                    res[position++] = word >> 24 & 0xff;
                }
                carry = 0;
                shift = 0;
            } else {
                carry = word >>> 24;
                shift += 2;
            }
        }
        if (position < res.length) {
            res[position++] = carry;
            while(position < res.length){
                res[position++] = 0;
            }
        }
    };
    BN.prototype._toArrayLikeBE = function _toArrayLikeBE(res, byteLength) {
        var position = res.length - 1;
        var carry = 0;
        for(var i = 0, shift = 0; i < this.length; i++){
            var word = this.words[i] << shift | carry;
            res[position--] = word & 0xff;
            if (position >= 0) {
                res[position--] = word >> 8 & 0xff;
            }
            if (position >= 0) {
                res[position--] = word >> 16 & 0xff;
            }
            if (shift === 6) {
                if (position >= 0) {
                    res[position--] = word >> 24 & 0xff;
                }
                carry = 0;
                shift = 0;
            } else {
                carry = word >>> 24;
                shift += 2;
            }
        }
        if (position >= 0) {
            res[position--] = carry;
            while(position >= 0){
                res[position--] = 0;
            }
        }
    };
    if (Math.clz32) {
        BN.prototype._countBits = function _countBits(w) {
            return 32 - Math.clz32(w);
        };
    } else {
        BN.prototype._countBits = function _countBits(w) {
            var t = w;
            var r = 0;
            if (t >= 0x1000) {
                r += 13;
                t >>>= 13;
            }
            if (t >= 0x40) {
                r += 7;
                t >>>= 7;
            }
            if (t >= 0x8) {
                r += 4;
                t >>>= 4;
            }
            if (t >= 0x02) {
                r += 2;
                t >>>= 2;
            }
            return r + t;
        };
    }
    BN.prototype._zeroBits = function _zeroBits(w) {
        // Short-cut
        if (w === 0) return 26;
        var t = w;
        var r = 0;
        if ((t & 0x1fff) === 0) {
            r += 13;
            t >>>= 13;
        }
        if ((t & 0x7f) === 0) {
            r += 7;
            t >>>= 7;
        }
        if ((t & 0xf) === 0) {
            r += 4;
            t >>>= 4;
        }
        if ((t & 0x3) === 0) {
            r += 2;
            t >>>= 2;
        }
        if ((t & 0x1) === 0) {
            r++;
        }
        return r;
    };
    // Return number of used bits in a BN
    BN.prototype.bitLength = function bitLength() {
        var w = this.words[this.length - 1];
        var hi = this._countBits(w);
        return (this.length - 1) * 26 + hi;
    };
    function toBitArray(num) {
        var w = new Array(num.bitLength());
        for(var bit = 0; bit < w.length; bit++){
            var off = bit / 26 | 0;
            var wbit = bit % 26;
            w[bit] = num.words[off] >>> wbit & 0x01;
        }
        return w;
    }
    // Number of trailing zero bits
    BN.prototype.zeroBits = function zeroBits() {
        if (this.isZero()) return 0;
        var r = 0;
        for(var i = 0; i < this.length; i++){
            var b = this._zeroBits(this.words[i]);
            r += b;
            if (b !== 26) break;
        }
        return r;
    };
    BN.prototype.byteLength = function byteLength() {
        return Math.ceil(this.bitLength() / 8);
    };
    BN.prototype.toTwos = function toTwos(width) {
        if (this.negative !== 0) {
            return this.abs().inotn(width).iaddn(1);
        }
        return this.clone();
    };
    BN.prototype.fromTwos = function fromTwos(width) {
        if (this.testn(width - 1)) {
            return this.notn(width).iaddn(1).ineg();
        }
        return this.clone();
    };
    BN.prototype.isNeg = function isNeg() {
        return this.negative !== 0;
    };
    // Return negative clone of `this`
    BN.prototype.neg = function neg() {
        return this.clone().ineg();
    };
    BN.prototype.ineg = function ineg() {
        if (!this.isZero()) {
            this.negative ^= 1;
        }
        return this;
    };
    // Or `num` with `this` in-place
    BN.prototype.iuor = function iuor(num) {
        while(this.length < num.length){
            this.words[this.length++] = 0;
        }
        for(var i = 0; i < num.length; i++){
            this.words[i] = this.words[i] | num.words[i];
        }
        return this._strip();
    };
    BN.prototype.ior = function ior(num) {
        assert((this.negative | num.negative) === 0);
        return this.iuor(num);
    };
    // Or `num` with `this`
    BN.prototype.or = function or(num) {
        if (this.length > num.length) return this.clone().ior(num);
        return num.clone().ior(this);
    };
    BN.prototype.uor = function uor(num) {
        if (this.length > num.length) return this.clone().iuor(num);
        return num.clone().iuor(this);
    };
    // And `num` with `this` in-place
    BN.prototype.iuand = function iuand(num) {
        // b = min-length(num, this)
        var b;
        if (this.length > num.length) {
            b = num;
        } else {
            b = this;
        }
        for(var i = 0; i < b.length; i++){
            this.words[i] = this.words[i] & num.words[i];
        }
        this.length = b.length;
        return this._strip();
    };
    BN.prototype.iand = function iand(num) {
        assert((this.negative | num.negative) === 0);
        return this.iuand(num);
    };
    // And `num` with `this`
    BN.prototype.and = function and(num) {
        if (this.length > num.length) return this.clone().iand(num);
        return num.clone().iand(this);
    };
    BN.prototype.uand = function uand(num) {
        if (this.length > num.length) return this.clone().iuand(num);
        return num.clone().iuand(this);
    };
    // Xor `num` with `this` in-place
    BN.prototype.iuxor = function iuxor(num) {
        // a.length > b.length
        var a;
        var b;
        if (this.length > num.length) {
            a = this;
            b = num;
        } else {
            a = num;
            b = this;
        }
        for(var i = 0; i < b.length; i++){
            this.words[i] = a.words[i] ^ b.words[i];
        }
        if (this !== a) {
            for(; i < a.length; i++){
                this.words[i] = a.words[i];
            }
        }
        this.length = a.length;
        return this._strip();
    };
    BN.prototype.ixor = function ixor(num) {
        assert((this.negative | num.negative) === 0);
        return this.iuxor(num);
    };
    // Xor `num` with `this`
    BN.prototype.xor = function xor(num) {
        if (this.length > num.length) return this.clone().ixor(num);
        return num.clone().ixor(this);
    };
    BN.prototype.uxor = function uxor(num) {
        if (this.length > num.length) return this.clone().iuxor(num);
        return num.clone().iuxor(this);
    };
    // Not ``this`` with ``width`` bitwidth
    BN.prototype.inotn = function inotn(width) {
        assert(typeof width === 'number' && width >= 0);
        var bytesNeeded = Math.ceil(width / 26) | 0;
        var bitsLeft = width % 26;
        // Extend the buffer with leading zeroes
        this._expand(bytesNeeded);
        if (bitsLeft > 0) {
            bytesNeeded--;
        }
        // Handle complete words
        for(var i = 0; i < bytesNeeded; i++){
            this.words[i] = ~this.words[i] & 0x3ffffff;
        }
        // Handle the residue
        if (bitsLeft > 0) {
            this.words[i] = ~this.words[i] & 0x3ffffff >> 26 - bitsLeft;
        }
        // And remove leading zeroes
        return this._strip();
    };
    BN.prototype.notn = function notn(width) {
        return this.clone().inotn(width);
    };
    // Set `bit` of `this`
    BN.prototype.setn = function setn(bit, val) {
        assert(typeof bit === 'number' && bit >= 0);
        var off = bit / 26 | 0;
        var wbit = bit % 26;
        this._expand(off + 1);
        if (val) {
            this.words[off] = this.words[off] | 1 << wbit;
        } else {
            this.words[off] = this.words[off] & ~(1 << wbit);
        }
        return this._strip();
    };
    // Add `num` to `this` in-place
    BN.prototype.iadd = function iadd(num) {
        var r;
        // negative + positive
        if (this.negative !== 0 && num.negative === 0) {
            this.negative = 0;
            r = this.isub(num);
            this.negative ^= 1;
            return this._normSign();
        // positive + negative
        } else if (this.negative === 0 && num.negative !== 0) {
            num.negative = 0;
            r = this.isub(num);
            num.negative = 1;
            return r._normSign();
        }
        // a.length > b.length
        var a, b;
        if (this.length > num.length) {
            a = this;
            b = num;
        } else {
            a = num;
            b = this;
        }
        var carry = 0;
        for(var i = 0; i < b.length; i++){
            r = (a.words[i] | 0) + (b.words[i] | 0) + carry;
            this.words[i] = r & 0x3ffffff;
            carry = r >>> 26;
        }
        for(; carry !== 0 && i < a.length; i++){
            r = (a.words[i] | 0) + carry;
            this.words[i] = r & 0x3ffffff;
            carry = r >>> 26;
        }
        this.length = a.length;
        if (carry !== 0) {
            this.words[this.length] = carry;
            this.length++;
        // Copy the rest of the words
        } else if (a !== this) {
            for(; i < a.length; i++){
                this.words[i] = a.words[i];
            }
        }
        return this;
    };
    // Add `num` to `this`
    BN.prototype.add = function add(num) {
        var res;
        if (num.negative !== 0 && this.negative === 0) {
            num.negative = 0;
            res = this.sub(num);
            num.negative ^= 1;
            return res;
        } else if (num.negative === 0 && this.negative !== 0) {
            this.negative = 0;
            res = num.sub(this);
            this.negative = 1;
            return res;
        }
        if (this.length > num.length) return this.clone().iadd(num);
        return num.clone().iadd(this);
    };
    // Subtract `num` from `this` in-place
    BN.prototype.isub = function isub(num) {
        // this - (-num) = this + num
        if (num.negative !== 0) {
            num.negative = 0;
            var r = this.iadd(num);
            num.negative = 1;
            return r._normSign();
        // -this - num = -(this + num)
        } else if (this.negative !== 0) {
            this.negative = 0;
            this.iadd(num);
            this.negative = 1;
            return this._normSign();
        }
        // At this point both numbers are positive
        var cmp = this.cmp(num);
        // Optimization - zeroify
        if (cmp === 0) {
            this.negative = 0;
            this.length = 1;
            this.words[0] = 0;
            return this;
        }
        // a > b
        var a, b;
        if (cmp > 0) {
            a = this;
            b = num;
        } else {
            a = num;
            b = this;
        }
        var carry = 0;
        for(var i = 0; i < b.length; i++){
            r = (a.words[i] | 0) - (b.words[i] | 0) + carry;
            carry = r >> 26;
            this.words[i] = r & 0x3ffffff;
        }
        for(; carry !== 0 && i < a.length; i++){
            r = (a.words[i] | 0) + carry;
            carry = r >> 26;
            this.words[i] = r & 0x3ffffff;
        }
        // Copy rest of the words
        if (carry === 0 && i < a.length && a !== this) {
            for(; i < a.length; i++){
                this.words[i] = a.words[i];
            }
        }
        this.length = Math.max(this.length, i);
        if (a !== this) {
            this.negative = 1;
        }
        return this._strip();
    };
    // Subtract `num` from `this`
    BN.prototype.sub = function sub(num) {
        return this.clone().isub(num);
    };
    function smallMulTo(self, num, out) {
        out.negative = num.negative ^ self.negative;
        var len = self.length + num.length | 0;
        out.length = len;
        len = len - 1 | 0;
        // Peel one iteration (compiler can't do it, because of code complexity)
        var a = self.words[0] | 0;
        var b = num.words[0] | 0;
        var r = a * b;
        var lo = r & 0x3ffffff;
        var carry = r / 0x4000000 | 0;
        out.words[0] = lo;
        for(var k = 1; k < len; k++){
            // Sum all words with the same `i + j = k` and accumulate `ncarry`,
            // note that ncarry could be >= 0x3ffffff
            var ncarry = carry >>> 26;
            var rword = carry & 0x3ffffff;
            var maxJ = Math.min(k, num.length - 1);
            for(var j = Math.max(0, k - self.length + 1); j <= maxJ; j++){
                var i = k - j | 0;
                a = self.words[i] | 0;
                b = num.words[j] | 0;
                r = a * b + rword;
                ncarry += r / 0x4000000 | 0;
                rword = r & 0x3ffffff;
            }
            out.words[k] = rword | 0;
            carry = ncarry | 0;
        }
        if (carry !== 0) {
            out.words[k] = carry | 0;
        } else {
            out.length--;
        }
        return out._strip();
    }
    // TODO(indutny): it may be reasonable to omit it for users who don't need
    // to work with 256-bit numbers, otherwise it gives 20% improvement for 256-bit
    // multiplication (like elliptic secp256k1).
    var comb10MulTo = function comb10MulTo(self, num, out) {
        var a = self.words;
        var b = num.words;
        var o = out.words;
        var c = 0;
        var lo;
        var mid;
        var hi;
        var a0 = a[0] | 0;
        var al0 = a0 & 0x1fff;
        var ah0 = a0 >>> 13;
        var a1 = a[1] | 0;
        var al1 = a1 & 0x1fff;
        var ah1 = a1 >>> 13;
        var a2 = a[2] | 0;
        var al2 = a2 & 0x1fff;
        var ah2 = a2 >>> 13;
        var a3 = a[3] | 0;
        var al3 = a3 & 0x1fff;
        var ah3 = a3 >>> 13;
        var a4 = a[4] | 0;
        var al4 = a4 & 0x1fff;
        var ah4 = a4 >>> 13;
        var a5 = a[5] | 0;
        var al5 = a5 & 0x1fff;
        var ah5 = a5 >>> 13;
        var a6 = a[6] | 0;
        var al6 = a6 & 0x1fff;
        var ah6 = a6 >>> 13;
        var a7 = a[7] | 0;
        var al7 = a7 & 0x1fff;
        var ah7 = a7 >>> 13;
        var a8 = a[8] | 0;
        var al8 = a8 & 0x1fff;
        var ah8 = a8 >>> 13;
        var a9 = a[9] | 0;
        var al9 = a9 & 0x1fff;
        var ah9 = a9 >>> 13;
        var b0 = b[0] | 0;
        var bl0 = b0 & 0x1fff;
        var bh0 = b0 >>> 13;
        var b1 = b[1] | 0;
        var bl1 = b1 & 0x1fff;
        var bh1 = b1 >>> 13;
        var b2 = b[2] | 0;
        var bl2 = b2 & 0x1fff;
        var bh2 = b2 >>> 13;
        var b3 = b[3] | 0;
        var bl3 = b3 & 0x1fff;
        var bh3 = b3 >>> 13;
        var b4 = b[4] | 0;
        var bl4 = b4 & 0x1fff;
        var bh4 = b4 >>> 13;
        var b5 = b[5] | 0;
        var bl5 = b5 & 0x1fff;
        var bh5 = b5 >>> 13;
        var b6 = b[6] | 0;
        var bl6 = b6 & 0x1fff;
        var bh6 = b6 >>> 13;
        var b7 = b[7] | 0;
        var bl7 = b7 & 0x1fff;
        var bh7 = b7 >>> 13;
        var b8 = b[8] | 0;
        var bl8 = b8 & 0x1fff;
        var bh8 = b8 >>> 13;
        var b9 = b[9] | 0;
        var bl9 = b9 & 0x1fff;
        var bh9 = b9 >>> 13;
        out.negative = self.negative ^ num.negative;
        out.length = 19;
        /* k = 0 */ lo = Math.imul(al0, bl0);
        mid = Math.imul(al0, bh0);
        mid = mid + Math.imul(ah0, bl0) | 0;
        hi = Math.imul(ah0, bh0);
        var w0 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w0 >>> 26) | 0;
        w0 &= 0x3ffffff;
        /* k = 1 */ lo = Math.imul(al1, bl0);
        mid = Math.imul(al1, bh0);
        mid = mid + Math.imul(ah1, bl0) | 0;
        hi = Math.imul(ah1, bh0);
        lo = lo + Math.imul(al0, bl1) | 0;
        mid = mid + Math.imul(al0, bh1) | 0;
        mid = mid + Math.imul(ah0, bl1) | 0;
        hi = hi + Math.imul(ah0, bh1) | 0;
        var w1 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w1 >>> 26) | 0;
        w1 &= 0x3ffffff;
        /* k = 2 */ lo = Math.imul(al2, bl0);
        mid = Math.imul(al2, bh0);
        mid = mid + Math.imul(ah2, bl0) | 0;
        hi = Math.imul(ah2, bh0);
        lo = lo + Math.imul(al1, bl1) | 0;
        mid = mid + Math.imul(al1, bh1) | 0;
        mid = mid + Math.imul(ah1, bl1) | 0;
        hi = hi + Math.imul(ah1, bh1) | 0;
        lo = lo + Math.imul(al0, bl2) | 0;
        mid = mid + Math.imul(al0, bh2) | 0;
        mid = mid + Math.imul(ah0, bl2) | 0;
        hi = hi + Math.imul(ah0, bh2) | 0;
        var w2 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w2 >>> 26) | 0;
        w2 &= 0x3ffffff;
        /* k = 3 */ lo = Math.imul(al3, bl0);
        mid = Math.imul(al3, bh0);
        mid = mid + Math.imul(ah3, bl0) | 0;
        hi = Math.imul(ah3, bh0);
        lo = lo + Math.imul(al2, bl1) | 0;
        mid = mid + Math.imul(al2, bh1) | 0;
        mid = mid + Math.imul(ah2, bl1) | 0;
        hi = hi + Math.imul(ah2, bh1) | 0;
        lo = lo + Math.imul(al1, bl2) | 0;
        mid = mid + Math.imul(al1, bh2) | 0;
        mid = mid + Math.imul(ah1, bl2) | 0;
        hi = hi + Math.imul(ah1, bh2) | 0;
        lo = lo + Math.imul(al0, bl3) | 0;
        mid = mid + Math.imul(al0, bh3) | 0;
        mid = mid + Math.imul(ah0, bl3) | 0;
        hi = hi + Math.imul(ah0, bh3) | 0;
        var w3 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w3 >>> 26) | 0;
        w3 &= 0x3ffffff;
        /* k = 4 */ lo = Math.imul(al4, bl0);
        mid = Math.imul(al4, bh0);
        mid = mid + Math.imul(ah4, bl0) | 0;
        hi = Math.imul(ah4, bh0);
        lo = lo + Math.imul(al3, bl1) | 0;
        mid = mid + Math.imul(al3, bh1) | 0;
        mid = mid + Math.imul(ah3, bl1) | 0;
        hi = hi + Math.imul(ah3, bh1) | 0;
        lo = lo + Math.imul(al2, bl2) | 0;
        mid = mid + Math.imul(al2, bh2) | 0;
        mid = mid + Math.imul(ah2, bl2) | 0;
        hi = hi + Math.imul(ah2, bh2) | 0;
        lo = lo + Math.imul(al1, bl3) | 0;
        mid = mid + Math.imul(al1, bh3) | 0;
        mid = mid + Math.imul(ah1, bl3) | 0;
        hi = hi + Math.imul(ah1, bh3) | 0;
        lo = lo + Math.imul(al0, bl4) | 0;
        mid = mid + Math.imul(al0, bh4) | 0;
        mid = mid + Math.imul(ah0, bl4) | 0;
        hi = hi + Math.imul(ah0, bh4) | 0;
        var w4 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w4 >>> 26) | 0;
        w4 &= 0x3ffffff;
        /* k = 5 */ lo = Math.imul(al5, bl0);
        mid = Math.imul(al5, bh0);
        mid = mid + Math.imul(ah5, bl0) | 0;
        hi = Math.imul(ah5, bh0);
        lo = lo + Math.imul(al4, bl1) | 0;
        mid = mid + Math.imul(al4, bh1) | 0;
        mid = mid + Math.imul(ah4, bl1) | 0;
        hi = hi + Math.imul(ah4, bh1) | 0;
        lo = lo + Math.imul(al3, bl2) | 0;
        mid = mid + Math.imul(al3, bh2) | 0;
        mid = mid + Math.imul(ah3, bl2) | 0;
        hi = hi + Math.imul(ah3, bh2) | 0;
        lo = lo + Math.imul(al2, bl3) | 0;
        mid = mid + Math.imul(al2, bh3) | 0;
        mid = mid + Math.imul(ah2, bl3) | 0;
        hi = hi + Math.imul(ah2, bh3) | 0;
        lo = lo + Math.imul(al1, bl4) | 0;
        mid = mid + Math.imul(al1, bh4) | 0;
        mid = mid + Math.imul(ah1, bl4) | 0;
        hi = hi + Math.imul(ah1, bh4) | 0;
        lo = lo + Math.imul(al0, bl5) | 0;
        mid = mid + Math.imul(al0, bh5) | 0;
        mid = mid + Math.imul(ah0, bl5) | 0;
        hi = hi + Math.imul(ah0, bh5) | 0;
        var w5 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w5 >>> 26) | 0;
        w5 &= 0x3ffffff;
        /* k = 6 */ lo = Math.imul(al6, bl0);
        mid = Math.imul(al6, bh0);
        mid = mid + Math.imul(ah6, bl0) | 0;
        hi = Math.imul(ah6, bh0);
        lo = lo + Math.imul(al5, bl1) | 0;
        mid = mid + Math.imul(al5, bh1) | 0;
        mid = mid + Math.imul(ah5, bl1) | 0;
        hi = hi + Math.imul(ah5, bh1) | 0;
        lo = lo + Math.imul(al4, bl2) | 0;
        mid = mid + Math.imul(al4, bh2) | 0;
        mid = mid + Math.imul(ah4, bl2) | 0;
        hi = hi + Math.imul(ah4, bh2) | 0;
        lo = lo + Math.imul(al3, bl3) | 0;
        mid = mid + Math.imul(al3, bh3) | 0;
        mid = mid + Math.imul(ah3, bl3) | 0;
        hi = hi + Math.imul(ah3, bh3) | 0;
        lo = lo + Math.imul(al2, bl4) | 0;
        mid = mid + Math.imul(al2, bh4) | 0;
        mid = mid + Math.imul(ah2, bl4) | 0;
        hi = hi + Math.imul(ah2, bh4) | 0;
        lo = lo + Math.imul(al1, bl5) | 0;
        mid = mid + Math.imul(al1, bh5) | 0;
        mid = mid + Math.imul(ah1, bl5) | 0;
        hi = hi + Math.imul(ah1, bh5) | 0;
        lo = lo + Math.imul(al0, bl6) | 0;
        mid = mid + Math.imul(al0, bh6) | 0;
        mid = mid + Math.imul(ah0, bl6) | 0;
        hi = hi + Math.imul(ah0, bh6) | 0;
        var w6 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w6 >>> 26) | 0;
        w6 &= 0x3ffffff;
        /* k = 7 */ lo = Math.imul(al7, bl0);
        mid = Math.imul(al7, bh0);
        mid = mid + Math.imul(ah7, bl0) | 0;
        hi = Math.imul(ah7, bh0);
        lo = lo + Math.imul(al6, bl1) | 0;
        mid = mid + Math.imul(al6, bh1) | 0;
        mid = mid + Math.imul(ah6, bl1) | 0;
        hi = hi + Math.imul(ah6, bh1) | 0;
        lo = lo + Math.imul(al5, bl2) | 0;
        mid = mid + Math.imul(al5, bh2) | 0;
        mid = mid + Math.imul(ah5, bl2) | 0;
        hi = hi + Math.imul(ah5, bh2) | 0;
        lo = lo + Math.imul(al4, bl3) | 0;
        mid = mid + Math.imul(al4, bh3) | 0;
        mid = mid + Math.imul(ah4, bl3) | 0;
        hi = hi + Math.imul(ah4, bh3) | 0;
        lo = lo + Math.imul(al3, bl4) | 0;
        mid = mid + Math.imul(al3, bh4) | 0;
        mid = mid + Math.imul(ah3, bl4) | 0;
        hi = hi + Math.imul(ah3, bh4) | 0;
        lo = lo + Math.imul(al2, bl5) | 0;
        mid = mid + Math.imul(al2, bh5) | 0;
        mid = mid + Math.imul(ah2, bl5) | 0;
        hi = hi + Math.imul(ah2, bh5) | 0;
        lo = lo + Math.imul(al1, bl6) | 0;
        mid = mid + Math.imul(al1, bh6) | 0;
        mid = mid + Math.imul(ah1, bl6) | 0;
        hi = hi + Math.imul(ah1, bh6) | 0;
        lo = lo + Math.imul(al0, bl7) | 0;
        mid = mid + Math.imul(al0, bh7) | 0;
        mid = mid + Math.imul(ah0, bl7) | 0;
        hi = hi + Math.imul(ah0, bh7) | 0;
        var w7 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w7 >>> 26) | 0;
        w7 &= 0x3ffffff;
        /* k = 8 */ lo = Math.imul(al8, bl0);
        mid = Math.imul(al8, bh0);
        mid = mid + Math.imul(ah8, bl0) | 0;
        hi = Math.imul(ah8, bh0);
        lo = lo + Math.imul(al7, bl1) | 0;
        mid = mid + Math.imul(al7, bh1) | 0;
        mid = mid + Math.imul(ah7, bl1) | 0;
        hi = hi + Math.imul(ah7, bh1) | 0;
        lo = lo + Math.imul(al6, bl2) | 0;
        mid = mid + Math.imul(al6, bh2) | 0;
        mid = mid + Math.imul(ah6, bl2) | 0;
        hi = hi + Math.imul(ah6, bh2) | 0;
        lo = lo + Math.imul(al5, bl3) | 0;
        mid = mid + Math.imul(al5, bh3) | 0;
        mid = mid + Math.imul(ah5, bl3) | 0;
        hi = hi + Math.imul(ah5, bh3) | 0;
        lo = lo + Math.imul(al4, bl4) | 0;
        mid = mid + Math.imul(al4, bh4) | 0;
        mid = mid + Math.imul(ah4, bl4) | 0;
        hi = hi + Math.imul(ah4, bh4) | 0;
        lo = lo + Math.imul(al3, bl5) | 0;
        mid = mid + Math.imul(al3, bh5) | 0;
        mid = mid + Math.imul(ah3, bl5) | 0;
        hi = hi + Math.imul(ah3, bh5) | 0;
        lo = lo + Math.imul(al2, bl6) | 0;
        mid = mid + Math.imul(al2, bh6) | 0;
        mid = mid + Math.imul(ah2, bl6) | 0;
        hi = hi + Math.imul(ah2, bh6) | 0;
        lo = lo + Math.imul(al1, bl7) | 0;
        mid = mid + Math.imul(al1, bh7) | 0;
        mid = mid + Math.imul(ah1, bl7) | 0;
        hi = hi + Math.imul(ah1, bh7) | 0;
        lo = lo + Math.imul(al0, bl8) | 0;
        mid = mid + Math.imul(al0, bh8) | 0;
        mid = mid + Math.imul(ah0, bl8) | 0;
        hi = hi + Math.imul(ah0, bh8) | 0;
        var w8 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w8 >>> 26) | 0;
        w8 &= 0x3ffffff;
        /* k = 9 */ lo = Math.imul(al9, bl0);
        mid = Math.imul(al9, bh0);
        mid = mid + Math.imul(ah9, bl0) | 0;
        hi = Math.imul(ah9, bh0);
        lo = lo + Math.imul(al8, bl1) | 0;
        mid = mid + Math.imul(al8, bh1) | 0;
        mid = mid + Math.imul(ah8, bl1) | 0;
        hi = hi + Math.imul(ah8, bh1) | 0;
        lo = lo + Math.imul(al7, bl2) | 0;
        mid = mid + Math.imul(al7, bh2) | 0;
        mid = mid + Math.imul(ah7, bl2) | 0;
        hi = hi + Math.imul(ah7, bh2) | 0;
        lo = lo + Math.imul(al6, bl3) | 0;
        mid = mid + Math.imul(al6, bh3) | 0;
        mid = mid + Math.imul(ah6, bl3) | 0;
        hi = hi + Math.imul(ah6, bh3) | 0;
        lo = lo + Math.imul(al5, bl4) | 0;
        mid = mid + Math.imul(al5, bh4) | 0;
        mid = mid + Math.imul(ah5, bl4) | 0;
        hi = hi + Math.imul(ah5, bh4) | 0;
        lo = lo + Math.imul(al4, bl5) | 0;
        mid = mid + Math.imul(al4, bh5) | 0;
        mid = mid + Math.imul(ah4, bl5) | 0;
        hi = hi + Math.imul(ah4, bh5) | 0;
        lo = lo + Math.imul(al3, bl6) | 0;
        mid = mid + Math.imul(al3, bh6) | 0;
        mid = mid + Math.imul(ah3, bl6) | 0;
        hi = hi + Math.imul(ah3, bh6) | 0;
        lo = lo + Math.imul(al2, bl7) | 0;
        mid = mid + Math.imul(al2, bh7) | 0;
        mid = mid + Math.imul(ah2, bl7) | 0;
        hi = hi + Math.imul(ah2, bh7) | 0;
        lo = lo + Math.imul(al1, bl8) | 0;
        mid = mid + Math.imul(al1, bh8) | 0;
        mid = mid + Math.imul(ah1, bl8) | 0;
        hi = hi + Math.imul(ah1, bh8) | 0;
        lo = lo + Math.imul(al0, bl9) | 0;
        mid = mid + Math.imul(al0, bh9) | 0;
        mid = mid + Math.imul(ah0, bl9) | 0;
        hi = hi + Math.imul(ah0, bh9) | 0;
        var w9 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w9 >>> 26) | 0;
        w9 &= 0x3ffffff;
        /* k = 10 */ lo = Math.imul(al9, bl1);
        mid = Math.imul(al9, bh1);
        mid = mid + Math.imul(ah9, bl1) | 0;
        hi = Math.imul(ah9, bh1);
        lo = lo + Math.imul(al8, bl2) | 0;
        mid = mid + Math.imul(al8, bh2) | 0;
        mid = mid + Math.imul(ah8, bl2) | 0;
        hi = hi + Math.imul(ah8, bh2) | 0;
        lo = lo + Math.imul(al7, bl3) | 0;
        mid = mid + Math.imul(al7, bh3) | 0;
        mid = mid + Math.imul(ah7, bl3) | 0;
        hi = hi + Math.imul(ah7, bh3) | 0;
        lo = lo + Math.imul(al6, bl4) | 0;
        mid = mid + Math.imul(al6, bh4) | 0;
        mid = mid + Math.imul(ah6, bl4) | 0;
        hi = hi + Math.imul(ah6, bh4) | 0;
        lo = lo + Math.imul(al5, bl5) | 0;
        mid = mid + Math.imul(al5, bh5) | 0;
        mid = mid + Math.imul(ah5, bl5) | 0;
        hi = hi + Math.imul(ah5, bh5) | 0;
        lo = lo + Math.imul(al4, bl6) | 0;
        mid = mid + Math.imul(al4, bh6) | 0;
        mid = mid + Math.imul(ah4, bl6) | 0;
        hi = hi + Math.imul(ah4, bh6) | 0;
        lo = lo + Math.imul(al3, bl7) | 0;
        mid = mid + Math.imul(al3, bh7) | 0;
        mid = mid + Math.imul(ah3, bl7) | 0;
        hi = hi + Math.imul(ah3, bh7) | 0;
        lo = lo + Math.imul(al2, bl8) | 0;
        mid = mid + Math.imul(al2, bh8) | 0;
        mid = mid + Math.imul(ah2, bl8) | 0;
        hi = hi + Math.imul(ah2, bh8) | 0;
        lo = lo + Math.imul(al1, bl9) | 0;
        mid = mid + Math.imul(al1, bh9) | 0;
        mid = mid + Math.imul(ah1, bl9) | 0;
        hi = hi + Math.imul(ah1, bh9) | 0;
        var w10 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w10 >>> 26) | 0;
        w10 &= 0x3ffffff;
        /* k = 11 */ lo = Math.imul(al9, bl2);
        mid = Math.imul(al9, bh2);
        mid = mid + Math.imul(ah9, bl2) | 0;
        hi = Math.imul(ah9, bh2);
        lo = lo + Math.imul(al8, bl3) | 0;
        mid = mid + Math.imul(al8, bh3) | 0;
        mid = mid + Math.imul(ah8, bl3) | 0;
        hi = hi + Math.imul(ah8, bh3) | 0;
        lo = lo + Math.imul(al7, bl4) | 0;
        mid = mid + Math.imul(al7, bh4) | 0;
        mid = mid + Math.imul(ah7, bl4) | 0;
        hi = hi + Math.imul(ah7, bh4) | 0;
        lo = lo + Math.imul(al6, bl5) | 0;
        mid = mid + Math.imul(al6, bh5) | 0;
        mid = mid + Math.imul(ah6, bl5) | 0;
        hi = hi + Math.imul(ah6, bh5) | 0;
        lo = lo + Math.imul(al5, bl6) | 0;
        mid = mid + Math.imul(al5, bh6) | 0;
        mid = mid + Math.imul(ah5, bl6) | 0;
        hi = hi + Math.imul(ah5, bh6) | 0;
        lo = lo + Math.imul(al4, bl7) | 0;
        mid = mid + Math.imul(al4, bh7) | 0;
        mid = mid + Math.imul(ah4, bl7) | 0;
        hi = hi + Math.imul(ah4, bh7) | 0;
        lo = lo + Math.imul(al3, bl8) | 0;
        mid = mid + Math.imul(al3, bh8) | 0;
        mid = mid + Math.imul(ah3, bl8) | 0;
        hi = hi + Math.imul(ah3, bh8) | 0;
        lo = lo + Math.imul(al2, bl9) | 0;
        mid = mid + Math.imul(al2, bh9) | 0;
        mid = mid + Math.imul(ah2, bl9) | 0;
        hi = hi + Math.imul(ah2, bh9) | 0;
        var w11 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w11 >>> 26) | 0;
        w11 &= 0x3ffffff;
        /* k = 12 */ lo = Math.imul(al9, bl3);
        mid = Math.imul(al9, bh3);
        mid = mid + Math.imul(ah9, bl3) | 0;
        hi = Math.imul(ah9, bh3);
        lo = lo + Math.imul(al8, bl4) | 0;
        mid = mid + Math.imul(al8, bh4) | 0;
        mid = mid + Math.imul(ah8, bl4) | 0;
        hi = hi + Math.imul(ah8, bh4) | 0;
        lo = lo + Math.imul(al7, bl5) | 0;
        mid = mid + Math.imul(al7, bh5) | 0;
        mid = mid + Math.imul(ah7, bl5) | 0;
        hi = hi + Math.imul(ah7, bh5) | 0;
        lo = lo + Math.imul(al6, bl6) | 0;
        mid = mid + Math.imul(al6, bh6) | 0;
        mid = mid + Math.imul(ah6, bl6) | 0;
        hi = hi + Math.imul(ah6, bh6) | 0;
        lo = lo + Math.imul(al5, bl7) | 0;
        mid = mid + Math.imul(al5, bh7) | 0;
        mid = mid + Math.imul(ah5, bl7) | 0;
        hi = hi + Math.imul(ah5, bh7) | 0;
        lo = lo + Math.imul(al4, bl8) | 0;
        mid = mid + Math.imul(al4, bh8) | 0;
        mid = mid + Math.imul(ah4, bl8) | 0;
        hi = hi + Math.imul(ah4, bh8) | 0;
        lo = lo + Math.imul(al3, bl9) | 0;
        mid = mid + Math.imul(al3, bh9) | 0;
        mid = mid + Math.imul(ah3, bl9) | 0;
        hi = hi + Math.imul(ah3, bh9) | 0;
        var w12 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w12 >>> 26) | 0;
        w12 &= 0x3ffffff;
        /* k = 13 */ lo = Math.imul(al9, bl4);
        mid = Math.imul(al9, bh4);
        mid = mid + Math.imul(ah9, bl4) | 0;
        hi = Math.imul(ah9, bh4);
        lo = lo + Math.imul(al8, bl5) | 0;
        mid = mid + Math.imul(al8, bh5) | 0;
        mid = mid + Math.imul(ah8, bl5) | 0;
        hi = hi + Math.imul(ah8, bh5) | 0;
        lo = lo + Math.imul(al7, bl6) | 0;
        mid = mid + Math.imul(al7, bh6) | 0;
        mid = mid + Math.imul(ah7, bl6) | 0;
        hi = hi + Math.imul(ah7, bh6) | 0;
        lo = lo + Math.imul(al6, bl7) | 0;
        mid = mid + Math.imul(al6, bh7) | 0;
        mid = mid + Math.imul(ah6, bl7) | 0;
        hi = hi + Math.imul(ah6, bh7) | 0;
        lo = lo + Math.imul(al5, bl8) | 0;
        mid = mid + Math.imul(al5, bh8) | 0;
        mid = mid + Math.imul(ah5, bl8) | 0;
        hi = hi + Math.imul(ah5, bh8) | 0;
        lo = lo + Math.imul(al4, bl9) | 0;
        mid = mid + Math.imul(al4, bh9) | 0;
        mid = mid + Math.imul(ah4, bl9) | 0;
        hi = hi + Math.imul(ah4, bh9) | 0;
        var w13 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w13 >>> 26) | 0;
        w13 &= 0x3ffffff;
        /* k = 14 */ lo = Math.imul(al9, bl5);
        mid = Math.imul(al9, bh5);
        mid = mid + Math.imul(ah9, bl5) | 0;
        hi = Math.imul(ah9, bh5);
        lo = lo + Math.imul(al8, bl6) | 0;
        mid = mid + Math.imul(al8, bh6) | 0;
        mid = mid + Math.imul(ah8, bl6) | 0;
        hi = hi + Math.imul(ah8, bh6) | 0;
        lo = lo + Math.imul(al7, bl7) | 0;
        mid = mid + Math.imul(al7, bh7) | 0;
        mid = mid + Math.imul(ah7, bl7) | 0;
        hi = hi + Math.imul(ah7, bh7) | 0;
        lo = lo + Math.imul(al6, bl8) | 0;
        mid = mid + Math.imul(al6, bh8) | 0;
        mid = mid + Math.imul(ah6, bl8) | 0;
        hi = hi + Math.imul(ah6, bh8) | 0;
        lo = lo + Math.imul(al5, bl9) | 0;
        mid = mid + Math.imul(al5, bh9) | 0;
        mid = mid + Math.imul(ah5, bl9) | 0;
        hi = hi + Math.imul(ah5, bh9) | 0;
        var w14 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w14 >>> 26) | 0;
        w14 &= 0x3ffffff;
        /* k = 15 */ lo = Math.imul(al9, bl6);
        mid = Math.imul(al9, bh6);
        mid = mid + Math.imul(ah9, bl6) | 0;
        hi = Math.imul(ah9, bh6);
        lo = lo + Math.imul(al8, bl7) | 0;
        mid = mid + Math.imul(al8, bh7) | 0;
        mid = mid + Math.imul(ah8, bl7) | 0;
        hi = hi + Math.imul(ah8, bh7) | 0;
        lo = lo + Math.imul(al7, bl8) | 0;
        mid = mid + Math.imul(al7, bh8) | 0;
        mid = mid + Math.imul(ah7, bl8) | 0;
        hi = hi + Math.imul(ah7, bh8) | 0;
        lo = lo + Math.imul(al6, bl9) | 0;
        mid = mid + Math.imul(al6, bh9) | 0;
        mid = mid + Math.imul(ah6, bl9) | 0;
        hi = hi + Math.imul(ah6, bh9) | 0;
        var w15 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w15 >>> 26) | 0;
        w15 &= 0x3ffffff;
        /* k = 16 */ lo = Math.imul(al9, bl7);
        mid = Math.imul(al9, bh7);
        mid = mid + Math.imul(ah9, bl7) | 0;
        hi = Math.imul(ah9, bh7);
        lo = lo + Math.imul(al8, bl8) | 0;
        mid = mid + Math.imul(al8, bh8) | 0;
        mid = mid + Math.imul(ah8, bl8) | 0;
        hi = hi + Math.imul(ah8, bh8) | 0;
        lo = lo + Math.imul(al7, bl9) | 0;
        mid = mid + Math.imul(al7, bh9) | 0;
        mid = mid + Math.imul(ah7, bl9) | 0;
        hi = hi + Math.imul(ah7, bh9) | 0;
        var w16 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w16 >>> 26) | 0;
        w16 &= 0x3ffffff;
        /* k = 17 */ lo = Math.imul(al9, bl8);
        mid = Math.imul(al9, bh8);
        mid = mid + Math.imul(ah9, bl8) | 0;
        hi = Math.imul(ah9, bh8);
        lo = lo + Math.imul(al8, bl9) | 0;
        mid = mid + Math.imul(al8, bh9) | 0;
        mid = mid + Math.imul(ah8, bl9) | 0;
        hi = hi + Math.imul(ah8, bh9) | 0;
        var w17 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w17 >>> 26) | 0;
        w17 &= 0x3ffffff;
        /* k = 18 */ lo = Math.imul(al9, bl9);
        mid = Math.imul(al9, bh9);
        mid = mid + Math.imul(ah9, bl9) | 0;
        hi = Math.imul(ah9, bh9);
        var w18 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w18 >>> 26) | 0;
        w18 &= 0x3ffffff;
        o[0] = w0;
        o[1] = w1;
        o[2] = w2;
        o[3] = w3;
        o[4] = w4;
        o[5] = w5;
        o[6] = w6;
        o[7] = w7;
        o[8] = w8;
        o[9] = w9;
        o[10] = w10;
        o[11] = w11;
        o[12] = w12;
        o[13] = w13;
        o[14] = w14;
        o[15] = w15;
        o[16] = w16;
        o[17] = w17;
        o[18] = w18;
        if (c !== 0) {
            o[19] = c;
            out.length++;
        }
        return out;
    };
    // Polyfill comb
    if (!Math.imul) {
        comb10MulTo = smallMulTo;
    }
    function bigMulTo(self, num, out) {
        out.negative = num.negative ^ self.negative;
        out.length = self.length + num.length;
        var carry = 0;
        var hncarry = 0;
        for(var k = 0; k < out.length - 1; k++){
            // Sum all words with the same `i + j = k` and accumulate `ncarry`,
            // note that ncarry could be >= 0x3ffffff
            var ncarry = hncarry;
            hncarry = 0;
            var rword = carry & 0x3ffffff;
            var maxJ = Math.min(k, num.length - 1);
            for(var j = Math.max(0, k - self.length + 1); j <= maxJ; j++){
                var i = k - j;
                var a = self.words[i] | 0;
                var b = num.words[j] | 0;
                var r = a * b;
                var lo = r & 0x3ffffff;
                ncarry = ncarry + (r / 0x4000000 | 0) | 0;
                lo = lo + rword | 0;
                rword = lo & 0x3ffffff;
                ncarry = ncarry + (lo >>> 26) | 0;
                hncarry += ncarry >>> 26;
                ncarry &= 0x3ffffff;
            }
            out.words[k] = rword;
            carry = ncarry;
            ncarry = hncarry;
        }
        if (carry !== 0) {
            out.words[k] = carry;
        } else {
            out.length--;
        }
        return out._strip();
    }
    function jumboMulTo(self, num, out) {
        // Temporary disable, see https://github.com/indutny/bn.js/issues/211
        // var fftm = new FFTM();
        // return fftm.mulp(self, num, out);
        return bigMulTo(self, num, out);
    }
    BN.prototype.mulTo = function mulTo(num, out) {
        var res;
        var len = this.length + num.length;
        if (this.length === 10 && num.length === 10) {
            res = comb10MulTo(this, num, out);
        } else if (len < 63) {
            res = smallMulTo(this, num, out);
        } else if (len < 1024) {
            res = bigMulTo(this, num, out);
        } else {
            res = jumboMulTo(this, num, out);
        }
        return res;
    };
    // Cooley-Tukey algorithm for FFT
    // slightly revisited to rely on looping instead of recursion
    function FFTM(x, y) {
        this.x = x;
        this.y = y;
    }
    FFTM.prototype.makeRBT = function makeRBT(N) {
        var t = new Array(N);
        var l = BN.prototype._countBits(N) - 1;
        for(var i = 0; i < N; i++){
            t[i] = this.revBin(i, l, N);
        }
        return t;
    };
    // Returns binary-reversed representation of `x`
    FFTM.prototype.revBin = function revBin(x, l, N) {
        if (x === 0 || x === N - 1) return x;
        var rb = 0;
        for(var i = 0; i < l; i++){
            rb |= (x & 1) << l - i - 1;
            x >>= 1;
        }
        return rb;
    };
    // Performs "tweedling" phase, therefore 'emulating'
    // behaviour of the recursive algorithm
    FFTM.prototype.permute = function permute(rbt, rws, iws, rtws, itws, N) {
        for(var i = 0; i < N; i++){
            rtws[i] = rws[rbt[i]];
            itws[i] = iws[rbt[i]];
        }
    };
    FFTM.prototype.transform = function transform(rws, iws, rtws, itws, N, rbt) {
        this.permute(rbt, rws, iws, rtws, itws, N);
        for(var s = 1; s < N; s <<= 1){
            var l = s << 1;
            var rtwdf = Math.cos(2 * Math.PI / l);
            var itwdf = Math.sin(2 * Math.PI / l);
            for(var p = 0; p < N; p += l){
                var rtwdf_ = rtwdf;
                var itwdf_ = itwdf;
                for(var j = 0; j < s; j++){
                    var re = rtws[p + j];
                    var ie = itws[p + j];
                    var ro = rtws[p + j + s];
                    var io = itws[p + j + s];
                    var rx = rtwdf_ * ro - itwdf_ * io;
                    io = rtwdf_ * io + itwdf_ * ro;
                    ro = rx;
                    rtws[p + j] = re + ro;
                    itws[p + j] = ie + io;
                    rtws[p + j + s] = re - ro;
                    itws[p + j + s] = ie - io;
                    /* jshint maxdepth : false */ if (j !== l) {
                        rx = rtwdf * rtwdf_ - itwdf * itwdf_;
                        itwdf_ = rtwdf * itwdf_ + itwdf * rtwdf_;
                        rtwdf_ = rx;
                    }
                }
            }
        }
    };
    FFTM.prototype.guessLen13b = function guessLen13b(n, m) {
        var N = Math.max(m, n) | 1;
        var odd = N & 1;
        var i = 0;
        for(N = N / 2 | 0; N; N = N >>> 1){
            i++;
        }
        return 1 << i + 1 + odd;
    };
    FFTM.prototype.conjugate = function conjugate(rws, iws, N) {
        if (N <= 1) return;
        for(var i = 0; i < N / 2; i++){
            var t = rws[i];
            rws[i] = rws[N - i - 1];
            rws[N - i - 1] = t;
            t = iws[i];
            iws[i] = -iws[N - i - 1];
            iws[N - i - 1] = -t;
        }
    };
    FFTM.prototype.normalize13b = function normalize13b(ws, N) {
        var carry = 0;
        for(var i = 0; i < N / 2; i++){
            var w = Math.round(ws[2 * i + 1] / N) * 0x2000 + Math.round(ws[2 * i] / N) + carry;
            ws[i] = w & 0x3ffffff;
            if (w < 0x4000000) {
                carry = 0;
            } else {
                carry = w / 0x4000000 | 0;
            }
        }
        return ws;
    };
    FFTM.prototype.convert13b = function convert13b(ws, len, rws, N) {
        var carry = 0;
        for(var i = 0; i < len; i++){
            carry = carry + (ws[i] | 0);
            rws[2 * i] = carry & 0x1fff;
            carry = carry >>> 13;
            rws[2 * i + 1] = carry & 0x1fff;
            carry = carry >>> 13;
        }
        // Pad with zeroes
        for(i = 2 * len; i < N; ++i){
            rws[i] = 0;
        }
        assert(carry === 0);
        assert((carry & ~0x1fff) === 0);
    };
    FFTM.prototype.stub = function stub(N) {
        var ph = new Array(N);
        for(var i = 0; i < N; i++){
            ph[i] = 0;
        }
        return ph;
    };
    FFTM.prototype.mulp = function mulp(x, y, out) {
        var N = 2 * this.guessLen13b(x.length, y.length);
        var rbt = this.makeRBT(N);
        var _ = this.stub(N);
        var rws = new Array(N);
        var rwst = new Array(N);
        var iwst = new Array(N);
        var nrws = new Array(N);
        var nrwst = new Array(N);
        var niwst = new Array(N);
        var rmws = out.words;
        rmws.length = N;
        this.convert13b(x.words, x.length, rws, N);
        this.convert13b(y.words, y.length, nrws, N);
        this.transform(rws, _, rwst, iwst, N, rbt);
        this.transform(nrws, _, nrwst, niwst, N, rbt);
        for(var i = 0; i < N; i++){
            var rx = rwst[i] * nrwst[i] - iwst[i] * niwst[i];
            iwst[i] = rwst[i] * niwst[i] + iwst[i] * nrwst[i];
            rwst[i] = rx;
        }
        this.conjugate(rwst, iwst, N);
        this.transform(rwst, iwst, rmws, _, N, rbt);
        this.conjugate(rmws, _, N);
        this.normalize13b(rmws, N);
        out.negative = x.negative ^ y.negative;
        out.length = x.length + y.length;
        return out._strip();
    };
    // Multiply `this` by `num`
    BN.prototype.mul = function mul(num) {
        var out = new BN(null);
        out.words = new Array(this.length + num.length);
        return this.mulTo(num, out);
    };
    // Multiply employing FFT
    BN.prototype.mulf = function mulf(num) {
        var out = new BN(null);
        out.words = new Array(this.length + num.length);
        return jumboMulTo(this, num, out);
    };
    // In-place Multiplication
    BN.prototype.imul = function imul(num) {
        return this.clone().mulTo(num, this);
    };
    BN.prototype.imuln = function imuln(num) {
        var isNegNum = num < 0;
        if (isNegNum) num = -num;
        assert(typeof num === 'number');
        assert(num < 0x4000000);
        // Carry
        var carry = 0;
        for(var i = 0; i < this.length; i++){
            var w = (this.words[i] | 0) * num;
            var lo = (w & 0x3ffffff) + (carry & 0x3ffffff);
            carry >>= 26;
            carry += w / 0x4000000 | 0;
            // NOTE: lo is 27bit maximum
            carry += lo >>> 26;
            this.words[i] = lo & 0x3ffffff;
        }
        if (carry !== 0) {
            this.words[i] = carry;
            this.length++;
        }
        this.length = num === 0 ? 1 : this.length;
        return isNegNum ? this.ineg() : this;
    };
    BN.prototype.muln = function muln(num) {
        return this.clone().imuln(num);
    };
    // `this` * `this`
    BN.prototype.sqr = function sqr() {
        return this.mul(this);
    };
    // `this` * `this` in-place
    BN.prototype.isqr = function isqr() {
        return this.imul(this.clone());
    };
    // Math.pow(`this`, `num`)
    BN.prototype.pow = function pow(num) {
        var w = toBitArray(num);
        if (w.length === 0) return new BN(1);
        // Skip leading zeroes
        var res = this;
        for(var i = 0; i < w.length; i++, res = res.sqr()){
            if (w[i] !== 0) break;
        }
        if (++i < w.length) {
            for(var q = res.sqr(); i < w.length; i++, q = q.sqr()){
                if (w[i] === 0) continue;
                res = res.mul(q);
            }
        }
        return res;
    };
    // Shift-left in-place
    BN.prototype.iushln = function iushln(bits) {
        assert(typeof bits === 'number' && bits >= 0);
        var r = bits % 26;
        var s = (bits - r) / 26;
        var carryMask = 0x3ffffff >>> 26 - r << 26 - r;
        var i;
        if (r !== 0) {
            var carry = 0;
            for(i = 0; i < this.length; i++){
                var newCarry = this.words[i] & carryMask;
                var c = (this.words[i] | 0) - newCarry << r;
                this.words[i] = c | carry;
                carry = newCarry >>> 26 - r;
            }
            if (carry) {
                this.words[i] = carry;
                this.length++;
            }
        }
        if (s !== 0) {
            for(i = this.length - 1; i >= 0; i--){
                this.words[i + s] = this.words[i];
            }
            for(i = 0; i < s; i++){
                this.words[i] = 0;
            }
            this.length += s;
        }
        return this._strip();
    };
    BN.prototype.ishln = function ishln(bits) {
        // TODO(indutny): implement me
        assert(this.negative === 0);
        return this.iushln(bits);
    };
    // Shift-right in-place
    // NOTE: `hint` is a lowest bit before trailing zeroes
    // NOTE: if `extended` is present - it will be filled with destroyed bits
    BN.prototype.iushrn = function iushrn(bits, hint, extended) {
        assert(typeof bits === 'number' && bits >= 0);
        var h;
        if (hint) {
            h = (hint - hint % 26) / 26;
        } else {
            h = 0;
        }
        var r = bits % 26;
        var s = Math.min((bits - r) / 26, this.length);
        var mask = 0x3ffffff ^ 0x3ffffff >>> r << r;
        var maskedWords = extended;
        h -= s;
        h = Math.max(0, h);
        // Extended mode, copy masked part
        if (maskedWords) {
            for(var i = 0; i < s; i++){
                maskedWords.words[i] = this.words[i];
            }
            maskedWords.length = s;
        }
        if (s === 0) {
        // No-op, we should not move anything at all
        } else if (this.length > s) {
            this.length -= s;
            for(i = 0; i < this.length; i++){
                this.words[i] = this.words[i + s];
            }
        } else {
            this.words[0] = 0;
            this.length = 1;
        }
        var carry = 0;
        for(i = this.length - 1; i >= 0 && (carry !== 0 || i >= h); i--){
            var word = this.words[i] | 0;
            this.words[i] = carry << 26 - r | word >>> r;
            carry = word & mask;
        }
        // Push carried bits as a mask
        if (maskedWords && carry !== 0) {
            maskedWords.words[maskedWords.length++] = carry;
        }
        if (this.length === 0) {
            this.words[0] = 0;
            this.length = 1;
        }
        return this._strip();
    };
    BN.prototype.ishrn = function ishrn(bits, hint, extended) {
        // TODO(indutny): implement me
        assert(this.negative === 0);
        return this.iushrn(bits, hint, extended);
    };
    // Shift-left
    BN.prototype.shln = function shln(bits) {
        return this.clone().ishln(bits);
    };
    BN.prototype.ushln = function ushln(bits) {
        return this.clone().iushln(bits);
    };
    // Shift-right
    BN.prototype.shrn = function shrn(bits) {
        return this.clone().ishrn(bits);
    };
    BN.prototype.ushrn = function ushrn(bits) {
        return this.clone().iushrn(bits);
    };
    // Test if n bit is set
    BN.prototype.testn = function testn(bit) {
        assert(typeof bit === 'number' && bit >= 0);
        var r = bit % 26;
        var s = (bit - r) / 26;
        var q = 1 << r;
        // Fast case: bit is much higher than all existing words
        if (this.length <= s) return false;
        // Check bit and return
        var w = this.words[s];
        return !!(w & q);
    };
    // Return only lowers bits of number (in-place)
    BN.prototype.imaskn = function imaskn(bits) {
        assert(typeof bits === 'number' && bits >= 0);
        var r = bits % 26;
        var s = (bits - r) / 26;
        assert(this.negative === 0, 'imaskn works only with positive numbers');
        if (this.length <= s) {
            return this;
        }
        if (r !== 0) {
            s++;
        }
        this.length = Math.min(s, this.length);
        if (r !== 0) {
            var mask = 0x3ffffff ^ 0x3ffffff >>> r << r;
            this.words[this.length - 1] &= mask;
        }
        return this._strip();
    };
    // Return only lowers bits of number
    BN.prototype.maskn = function maskn(bits) {
        return this.clone().imaskn(bits);
    };
    // Add plain number `num` to `this`
    BN.prototype.iaddn = function iaddn(num) {
        assert(typeof num === 'number');
        assert(num < 0x4000000);
        if (num < 0) return this.isubn(-num);
        // Possible sign change
        if (this.negative !== 0) {
            if (this.length === 1 && (this.words[0] | 0) <= num) {
                this.words[0] = num - (this.words[0] | 0);
                this.negative = 0;
                return this;
            }
            this.negative = 0;
            this.isubn(num);
            this.negative = 1;
            return this;
        }
        // Add without checks
        return this._iaddn(num);
    };
    BN.prototype._iaddn = function _iaddn(num) {
        this.words[0] += num;
        // Carry
        for(var i = 0; i < this.length && this.words[i] >= 0x4000000; i++){
            this.words[i] -= 0x4000000;
            if (i === this.length - 1) {
                this.words[i + 1] = 1;
            } else {
                this.words[i + 1]++;
            }
        }
        this.length = Math.max(this.length, i + 1);
        return this;
    };
    // Subtract plain number `num` from `this`
    BN.prototype.isubn = function isubn(num) {
        assert(typeof num === 'number');
        assert(num < 0x4000000);
        if (num < 0) return this.iaddn(-num);
        if (this.negative !== 0) {
            this.negative = 0;
            this.iaddn(num);
            this.negative = 1;
            return this;
        }
        this.words[0] -= num;
        if (this.length === 1 && this.words[0] < 0) {
            this.words[0] = -this.words[0];
            this.negative = 1;
        } else {
            // Carry
            for(var i = 0; i < this.length && this.words[i] < 0; i++){
                this.words[i] += 0x4000000;
                this.words[i + 1] -= 1;
            }
        }
        return this._strip();
    };
    BN.prototype.addn = function addn(num) {
        return this.clone().iaddn(num);
    };
    BN.prototype.subn = function subn(num) {
        return this.clone().isubn(num);
    };
    BN.prototype.iabs = function iabs() {
        this.negative = 0;
        return this;
    };
    BN.prototype.abs = function abs() {
        return this.clone().iabs();
    };
    BN.prototype._ishlnsubmul = function _ishlnsubmul(num, mul, shift) {
        var len = num.length + shift;
        var i;
        this._expand(len);
        var w;
        var carry = 0;
        for(i = 0; i < num.length; i++){
            w = (this.words[i + shift] | 0) + carry;
            var right = (num.words[i] | 0) * mul;
            w -= right & 0x3ffffff;
            carry = (w >> 26) - (right / 0x4000000 | 0);
            this.words[i + shift] = w & 0x3ffffff;
        }
        for(; i < this.length - shift; i++){
            w = (this.words[i + shift] | 0) + carry;
            carry = w >> 26;
            this.words[i + shift] = w & 0x3ffffff;
        }
        if (carry === 0) return this._strip();
        // Subtraction overflow
        assert(carry === -1);
        carry = 0;
        for(i = 0; i < this.length; i++){
            w = -(this.words[i] | 0) + carry;
            carry = w >> 26;
            this.words[i] = w & 0x3ffffff;
        }
        this.negative = 1;
        return this._strip();
    };
    BN.prototype._wordDiv = function _wordDiv(num, mode) {
        var shift = this.length - num.length;
        var a = this.clone();
        var b = num;
        // Normalize
        var bhi = b.words[b.length - 1] | 0;
        var bhiBits = this._countBits(bhi);
        shift = 26 - bhiBits;
        if (shift !== 0) {
            b = b.ushln(shift);
            a.iushln(shift);
            bhi = b.words[b.length - 1] | 0;
        }
        // Initialize quotient
        var m = a.length - b.length;
        var q;
        if (mode !== 'mod') {
            q = new BN(null);
            q.length = m + 1;
            q.words = new Array(q.length);
            for(var i = 0; i < q.length; i++){
                q.words[i] = 0;
            }
        }
        var diff = a.clone()._ishlnsubmul(b, 1, m);
        if (diff.negative === 0) {
            a = diff;
            if (q) {
                q.words[m] = 1;
            }
        }
        for(var j = m - 1; j >= 0; j--){
            var qj = (a.words[b.length + j] | 0) * 0x4000000 + (a.words[b.length + j - 1] | 0);
            // NOTE: (qj / bhi) is (0x3ffffff * 0x4000000 + 0x3ffffff) / 0x2000000 max
            // (0x7ffffff)
            qj = Math.min(qj / bhi | 0, 0x3ffffff);
            a._ishlnsubmul(b, qj, j);
            while(a.negative !== 0){
                qj--;
                a.negative = 0;
                a._ishlnsubmul(b, 1, j);
                if (!a.isZero()) {
                    a.negative ^= 1;
                }
            }
            if (q) {
                q.words[j] = qj;
            }
        }
        if (q) {
            q._strip();
        }
        a._strip();
        // Denormalize
        if (mode !== 'div' && shift !== 0) {
            a.iushrn(shift);
        }
        return {
            div: q || null,
            mod: a
        };
    };
    // NOTE: 1) `mode` can be set to `mod` to request mod only,
    //       to `div` to request div only, or be absent to
    //       request both div & mod
    //       2) `positive` is true if unsigned mod is requested
    BN.prototype.divmod = function divmod(num, mode, positive) {
        assert(!num.isZero());
        if (this.isZero()) {
            return {
                div: new BN(0),
                mod: new BN(0)
            };
        }
        var div, mod, res;
        if (this.negative !== 0 && num.negative === 0) {
            res = this.neg().divmod(num, mode);
            if (mode !== 'mod') {
                div = res.div.neg();
            }
            if (mode !== 'div') {
                mod = res.mod.neg();
                if (positive && mod.negative !== 0) {
                    mod.iadd(num);
                }
            }
            return {
                div: div,
                mod: mod
            };
        }
        if (this.negative === 0 && num.negative !== 0) {
            res = this.divmod(num.neg(), mode);
            if (mode !== 'mod') {
                div = res.div.neg();
            }
            return {
                div: div,
                mod: res.mod
            };
        }
        if ((this.negative & num.negative) !== 0) {
            res = this.neg().divmod(num.neg(), mode);
            if (mode !== 'div') {
                mod = res.mod.neg();
                if (positive && mod.negative !== 0) {
                    mod.isub(num);
                }
            }
            return {
                div: res.div,
                mod: mod
            };
        }
        // Both numbers are positive at this point
        // Strip both numbers to approximate shift value
        if (num.length > this.length || this.cmp(num) < 0) {
            return {
                div: new BN(0),
                mod: this
            };
        }
        // Very short reduction
        if (num.length === 1) {
            if (mode === 'div') {
                return {
                    div: this.divn(num.words[0]),
                    mod: null
                };
            }
            if (mode === 'mod') {
                return {
                    div: null,
                    mod: new BN(this.modrn(num.words[0]))
                };
            }
            return {
                div: this.divn(num.words[0]),
                mod: new BN(this.modrn(num.words[0]))
            };
        }
        return this._wordDiv(num, mode);
    };
    // Find `this` / `num`
    BN.prototype.div = function div(num) {
        return this.divmod(num, 'div', false).div;
    };
    // Find `this` % `num`
    BN.prototype.mod = function mod(num) {
        return this.divmod(num, 'mod', false).mod;
    };
    BN.prototype.umod = function umod(num) {
        return this.divmod(num, 'mod', true).mod;
    };
    // Find Round(`this` / `num`)
    BN.prototype.divRound = function divRound(num) {
        var dm = this.divmod(num);
        // Fast case - exact division
        if (dm.mod.isZero()) return dm.div;
        var mod = dm.div.negative !== 0 ? dm.mod.isub(num) : dm.mod;
        var half = num.ushrn(1);
        var r2 = num.andln(1);
        var cmp = mod.cmp(half);
        // Round down
        if (cmp < 0 || r2 === 1 && cmp === 0) return dm.div;
        // Round up
        return dm.div.negative !== 0 ? dm.div.isubn(1) : dm.div.iaddn(1);
    };
    BN.prototype.modrn = function modrn(num) {
        var isNegNum = num < 0;
        if (isNegNum) num = -num;
        assert(num <= 0x3ffffff);
        var p = (1 << 26) % num;
        var acc = 0;
        for(var i = this.length - 1; i >= 0; i--){
            acc = (p * acc + (this.words[i] | 0)) % num;
        }
        return isNegNum ? -acc : acc;
    };
    // WARNING: DEPRECATED
    BN.prototype.modn = function modn(num) {
        return this.modrn(num);
    };
    // In-place division by number
    BN.prototype.idivn = function idivn(num) {
        var isNegNum = num < 0;
        if (isNegNum) num = -num;
        assert(num <= 0x3ffffff);
        var carry = 0;
        for(var i = this.length - 1; i >= 0; i--){
            var w = (this.words[i] | 0) + carry * 0x4000000;
            this.words[i] = w / num | 0;
            carry = w % num;
        }
        this._strip();
        return isNegNum ? this.ineg() : this;
    };
    BN.prototype.divn = function divn(num) {
        return this.clone().idivn(num);
    };
    BN.prototype.egcd = function egcd(p) {
        assert(p.negative === 0);
        assert(!p.isZero());
        var x = this;
        var y = p.clone();
        if (x.negative !== 0) {
            x = x.umod(p);
        } else {
            x = x.clone();
        }
        // A * x + B * y = x
        var A = new BN(1);
        var B = new BN(0);
        // C * x + D * y = y
        var C = new BN(0);
        var D = new BN(1);
        var g = 0;
        while(x.isEven() && y.isEven()){
            x.iushrn(1);
            y.iushrn(1);
            ++g;
        }
        var yp = y.clone();
        var xp = x.clone();
        while(!x.isZero()){
            for(var i = 0, im = 1; (x.words[0] & im) === 0 && i < 26; ++i, im <<= 1);
            if (i > 0) {
                x.iushrn(i);
                while(i-- > 0){
                    if (A.isOdd() || B.isOdd()) {
                        A.iadd(yp);
                        B.isub(xp);
                    }
                    A.iushrn(1);
                    B.iushrn(1);
                }
            }
            for(var j = 0, jm = 1; (y.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1);
            if (j > 0) {
                y.iushrn(j);
                while(j-- > 0){
                    if (C.isOdd() || D.isOdd()) {
                        C.iadd(yp);
                        D.isub(xp);
                    }
                    C.iushrn(1);
                    D.iushrn(1);
                }
            }
            if (x.cmp(y) >= 0) {
                x.isub(y);
                A.isub(C);
                B.isub(D);
            } else {
                y.isub(x);
                C.isub(A);
                D.isub(B);
            }
        }
        return {
            a: C,
            b: D,
            gcd: y.iushln(g)
        };
    };
    // This is reduced incarnation of the binary EEA
    // above, designated to invert members of the
    // _prime_ fields F(p) at a maximal speed
    BN.prototype._invmp = function _invmp(p) {
        assert(p.negative === 0);
        assert(!p.isZero());
        var a = this;
        var b = p.clone();
        if (a.negative !== 0) {
            a = a.umod(p);
        } else {
            a = a.clone();
        }
        var x1 = new BN(1);
        var x2 = new BN(0);
        var delta = b.clone();
        while(a.cmpn(1) > 0 && b.cmpn(1) > 0){
            for(var i = 0, im = 1; (a.words[0] & im) === 0 && i < 26; ++i, im <<= 1);
            if (i > 0) {
                a.iushrn(i);
                while(i-- > 0){
                    if (x1.isOdd()) {
                        x1.iadd(delta);
                    }
                    x1.iushrn(1);
                }
            }
            for(var j = 0, jm = 1; (b.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1);
            if (j > 0) {
                b.iushrn(j);
                while(j-- > 0){
                    if (x2.isOdd()) {
                        x2.iadd(delta);
                    }
                    x2.iushrn(1);
                }
            }
            if (a.cmp(b) >= 0) {
                a.isub(b);
                x1.isub(x2);
            } else {
                b.isub(a);
                x2.isub(x1);
            }
        }
        var res;
        if (a.cmpn(1) === 0) {
            res = x1;
        } else {
            res = x2;
        }
        if (res.cmpn(0) < 0) {
            res.iadd(p);
        }
        return res;
    };
    BN.prototype.gcd = function gcd(num) {
        if (this.isZero()) return num.abs();
        if (num.isZero()) return this.abs();
        var a = this.clone();
        var b = num.clone();
        a.negative = 0;
        b.negative = 0;
        // Remove common factor of two
        for(var shift = 0; a.isEven() && b.isEven(); shift++){
            a.iushrn(1);
            b.iushrn(1);
        }
        do {
            while(a.isEven()){
                a.iushrn(1);
            }
            while(b.isEven()){
                b.iushrn(1);
            }
            var r = a.cmp(b);
            if (r < 0) {
                // Swap `a` and `b` to make `a` always bigger than `b`
                var t = a;
                a = b;
                b = t;
            } else if (r === 0 || b.cmpn(1) === 0) {
                break;
            }
            a.isub(b);
        }while (true)
        return b.iushln(shift);
    };
    // Invert number in the field F(num)
    BN.prototype.invm = function invm(num) {
        return this.egcd(num).a.umod(num);
    };
    BN.prototype.isEven = function isEven() {
        return (this.words[0] & 1) === 0;
    };
    BN.prototype.isOdd = function isOdd() {
        return (this.words[0] & 1) === 1;
    };
    // And first word and num
    BN.prototype.andln = function andln(num) {
        return this.words[0] & num;
    };
    // Increment at the bit position in-line
    BN.prototype.bincn = function bincn(bit) {
        assert(typeof bit === 'number');
        var r = bit % 26;
        var s = (bit - r) / 26;
        var q = 1 << r;
        // Fast case: bit is much higher than all existing words
        if (this.length <= s) {
            this._expand(s + 1);
            this.words[s] |= q;
            return this;
        }
        // Add bit and propagate, if needed
        var carry = q;
        for(var i = s; carry !== 0 && i < this.length; i++){
            var w = this.words[i] | 0;
            w += carry;
            carry = w >>> 26;
            w &= 0x3ffffff;
            this.words[i] = w;
        }
        if (carry !== 0) {
            this.words[i] = carry;
            this.length++;
        }
        return this;
    };
    BN.prototype.isZero = function isZero() {
        return this.length === 1 && this.words[0] === 0;
    };
    BN.prototype.cmpn = function cmpn(num) {
        var negative = num < 0;
        if (this.negative !== 0 && !negative) return -1;
        if (this.negative === 0 && negative) return 1;
        this._strip();
        var res;
        if (this.length > 1) {
            res = 1;
        } else {
            if (negative) {
                num = -num;
            }
            assert(num <= 0x3ffffff, 'Number is too big');
            var w = this.words[0] | 0;
            res = w === num ? 0 : w < num ? -1 : 1;
        }
        if (this.negative !== 0) return -res | 0;
        return res;
    };
    // Compare two numbers and return:
    // 1 - if `this` > `num`
    // 0 - if `this` == `num`
    // -1 - if `this` < `num`
    BN.prototype.cmp = function cmp(num) {
        if (this.negative !== 0 && num.negative === 0) return -1;
        if (this.negative === 0 && num.negative !== 0) return 1;
        var res = this.ucmp(num);
        if (this.negative !== 0) return -res | 0;
        return res;
    };
    // Unsigned comparison
    BN.prototype.ucmp = function ucmp(num) {
        // At this point both numbers have the same sign
        if (this.length > num.length) return 1;
        if (this.length < num.length) return -1;
        var res = 0;
        for(var i = this.length - 1; i >= 0; i--){
            var a = this.words[i] | 0;
            var b = num.words[i] | 0;
            if (a === b) continue;
            if (a < b) {
                res = -1;
            } else if (a > b) {
                res = 1;
            }
            break;
        }
        return res;
    };
    BN.prototype.gtn = function gtn(num) {
        return this.cmpn(num) === 1;
    };
    BN.prototype.gt = function gt(num) {
        return this.cmp(num) === 1;
    };
    BN.prototype.gten = function gten(num) {
        return this.cmpn(num) >= 0;
    };
    BN.prototype.gte = function gte(num) {
        return this.cmp(num) >= 0;
    };
    BN.prototype.ltn = function ltn(num) {
        return this.cmpn(num) === -1;
    };
    BN.prototype.lt = function lt(num) {
        return this.cmp(num) === -1;
    };
    BN.prototype.lten = function lten(num) {
        return this.cmpn(num) <= 0;
    };
    BN.prototype.lte = function lte(num) {
        return this.cmp(num) <= 0;
    };
    BN.prototype.eqn = function eqn(num) {
        return this.cmpn(num) === 0;
    };
    BN.prototype.eq = function eq(num) {
        return this.cmp(num) === 0;
    };
    //
    // A reduce context, could be using montgomery or something better, depending
    // on the `m` itself.
    //
    BN.red = function red(num) {
        return new Red(num);
    };
    BN.prototype.toRed = function toRed(ctx) {
        assert(!this.red, 'Already a number in reduction context');
        assert(this.negative === 0, 'red works only with positives');
        return ctx.convertTo(this)._forceRed(ctx);
    };
    BN.prototype.fromRed = function fromRed() {
        assert(this.red, 'fromRed works only with numbers in reduction context');
        return this.red.convertFrom(this);
    };
    BN.prototype._forceRed = function _forceRed(ctx) {
        this.red = ctx;
        return this;
    };
    BN.prototype.forceRed = function forceRed(ctx) {
        assert(!this.red, 'Already a number in reduction context');
        return this._forceRed(ctx);
    };
    BN.prototype.redAdd = function redAdd(num) {
        assert(this.red, 'redAdd works only with red numbers');
        return this.red.add(this, num);
    };
    BN.prototype.redIAdd = function redIAdd(num) {
        assert(this.red, 'redIAdd works only with red numbers');
        return this.red.iadd(this, num);
    };
    BN.prototype.redSub = function redSub(num) {
        assert(this.red, 'redSub works only with red numbers');
        return this.red.sub(this, num);
    };
    BN.prototype.redISub = function redISub(num) {
        assert(this.red, 'redISub works only with red numbers');
        return this.red.isub(this, num);
    };
    BN.prototype.redShl = function redShl(num) {
        assert(this.red, 'redShl works only with red numbers');
        return this.red.shl(this, num);
    };
    BN.prototype.redMul = function redMul(num) {
        assert(this.red, 'redMul works only with red numbers');
        this.red._verify2(this, num);
        return this.red.mul(this, num);
    };
    BN.prototype.redIMul = function redIMul(num) {
        assert(this.red, 'redMul works only with red numbers');
        this.red._verify2(this, num);
        return this.red.imul(this, num);
    };
    BN.prototype.redSqr = function redSqr() {
        assert(this.red, 'redSqr works only with red numbers');
        this.red._verify1(this);
        return this.red.sqr(this);
    };
    BN.prototype.redISqr = function redISqr() {
        assert(this.red, 'redISqr works only with red numbers');
        this.red._verify1(this);
        return this.red.isqr(this);
    };
    // Square root over p
    BN.prototype.redSqrt = function redSqrt() {
        assert(this.red, 'redSqrt works only with red numbers');
        this.red._verify1(this);
        return this.red.sqrt(this);
    };
    BN.prototype.redInvm = function redInvm() {
        assert(this.red, 'redInvm works only with red numbers');
        this.red._verify1(this);
        return this.red.invm(this);
    };
    // Return negative clone of `this` % `red modulo`
    BN.prototype.redNeg = function redNeg() {
        assert(this.red, 'redNeg works only with red numbers');
        this.red._verify1(this);
        return this.red.neg(this);
    };
    BN.prototype.redPow = function redPow(num) {
        assert(this.red && !num.red, 'redPow(normalNum)');
        this.red._verify1(this);
        return this.red.pow(this, num);
    };
    // Prime numbers with efficient reduction
    var primes = {
        k256: null,
        p224: null,
        p192: null,
        p25519: null
    };
    // Pseudo-Mersenne prime
    function MPrime(name, p) {
        // P = 2 ^ N - K
        this.name = name;
        this.p = new BN(p, 16);
        this.n = this.p.bitLength();
        this.k = new BN(1).iushln(this.n).isub(this.p);
        this.tmp = this._tmp();
    }
    MPrime.prototype._tmp = function _tmp() {
        var tmp = new BN(null);
        tmp.words = new Array(Math.ceil(this.n / 13));
        return tmp;
    };
    MPrime.prototype.ireduce = function ireduce(num) {
        // Assumes that `num` is less than `P^2`
        // num = HI * (2 ^ N - K) + HI * K + LO = HI * K + LO (mod P)
        var r = num;
        var rlen;
        do {
            this.split(r, this.tmp);
            r = this.imulK(r);
            r = r.iadd(this.tmp);
            rlen = r.bitLength();
        }while (rlen > this.n)
        var cmp = rlen < this.n ? -1 : r.ucmp(this.p);
        if (cmp === 0) {
            r.words[0] = 0;
            r.length = 1;
        } else if (cmp > 0) {
            r.isub(this.p);
        } else {
            if (r.strip !== undefined) {
                // r is a BN v4 instance
                r.strip();
            } else {
                // r is a BN v5 instance
                r._strip();
            }
        }
        return r;
    };
    MPrime.prototype.split = function split(input, out) {
        input.iushrn(this.n, 0, out);
    };
    MPrime.prototype.imulK = function imulK(num) {
        return num.imul(this.k);
    };
    function K256() {
        MPrime.call(this, 'k256', 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f');
    }
    inherits(K256, MPrime);
    K256.prototype.split = function split(input, output) {
        // 256 = 9 * 26 + 22
        var mask = 0x3fffff;
        var outLen = Math.min(input.length, 9);
        for(var i = 0; i < outLen; i++){
            output.words[i] = input.words[i];
        }
        output.length = outLen;
        if (input.length <= 9) {
            input.words[0] = 0;
            input.length = 1;
            return;
        }
        // Shift by 9 limbs
        var prev = input.words[9];
        output.words[output.length++] = prev & mask;
        for(i = 10; i < input.length; i++){
            var next = input.words[i] | 0;
            input.words[i - 10] = (next & mask) << 4 | prev >>> 22;
            prev = next;
        }
        prev >>>= 22;
        input.words[i - 10] = prev;
        if (prev === 0 && input.length > 10) {
            input.length -= 10;
        } else {
            input.length -= 9;
        }
    };
    K256.prototype.imulK = function imulK(num) {
        // K = 0x1000003d1 = [ 0x40, 0x3d1 ]
        num.words[num.length] = 0;
        num.words[num.length + 1] = 0;
        num.length += 2;
        // bounded at: 0x40 * 0x3ffffff + 0x3d0 = 0x100000390
        var lo = 0;
        for(var i = 0; i < num.length; i++){
            var w = num.words[i] | 0;
            lo += w * 0x3d1;
            num.words[i] = lo & 0x3ffffff;
            lo = w * 0x40 + (lo / 0x4000000 | 0);
        }
        // Fast length reduction
        if (num.words[num.length - 1] === 0) {
            num.length--;
            if (num.words[num.length - 1] === 0) {
                num.length--;
            }
        }
        return num;
    };
    function P224() {
        MPrime.call(this, 'p224', 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001');
    }
    inherits(P224, MPrime);
    function P192() {
        MPrime.call(this, 'p192', 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff');
    }
    inherits(P192, MPrime);
    function P25519() {
        // 2 ^ 255 - 19
        MPrime.call(this, '25519', '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed');
    }
    inherits(P25519, MPrime);
    P25519.prototype.imulK = function imulK(num) {
        // K = 0x13
        var carry = 0;
        for(var i = 0; i < num.length; i++){
            var hi = (num.words[i] | 0) * 0x13 + carry;
            var lo = hi & 0x3ffffff;
            hi >>>= 26;
            num.words[i] = lo;
            carry = hi;
        }
        if (carry !== 0) {
            num.words[num.length++] = carry;
        }
        return num;
    };
    // Exported mostly for testing purposes, use plain name instead
    BN._prime = function prime(name) {
        // Cached version of prime
        if (primes[name]) return primes[name];
        var prime;
        if (name === 'k256') {
            prime = new K256();
        } else if (name === 'p224') {
            prime = new P224();
        } else if (name === 'p192') {
            prime = new P192();
        } else if (name === 'p25519') {
            prime = new P25519();
        } else {
            throw new Error('Unknown prime ' + name);
        }
        primes[name] = prime;
        return prime;
    };
    //
    // Base reduction engine
    //
    function Red(m) {
        if (typeof m === 'string') {
            var prime = BN._prime(m);
            this.m = prime.p;
            this.prime = prime;
        } else {
            assert(m.gtn(1), 'modulus must be greater than 1');
            this.m = m;
            this.prime = null;
        }
    }
    Red.prototype._verify1 = function _verify1(a) {
        assert(a.negative === 0, 'red works only with positives');
        assert(a.red, 'red works only with red numbers');
    };
    Red.prototype._verify2 = function _verify2(a, b) {
        assert((a.negative | b.negative) === 0, 'red works only with positives');
        assert(a.red && a.red === b.red, 'red works only with red numbers');
    };
    Red.prototype.imod = function imod(a) {
        if (this.prime) return this.prime.ireduce(a)._forceRed(this);
        move(a, a.umod(this.m)._forceRed(this));
        return a;
    };
    Red.prototype.neg = function neg(a) {
        if (a.isZero()) {
            return a.clone();
        }
        return this.m.sub(a)._forceRed(this);
    };
    Red.prototype.add = function add(a, b) {
        this._verify2(a, b);
        var res = a.add(b);
        if (res.cmp(this.m) >= 0) {
            res.isub(this.m);
        }
        return res._forceRed(this);
    };
    Red.prototype.iadd = function iadd(a, b) {
        this._verify2(a, b);
        var res = a.iadd(b);
        if (res.cmp(this.m) >= 0) {
            res.isub(this.m);
        }
        return res;
    };
    Red.prototype.sub = function sub(a, b) {
        this._verify2(a, b);
        var res = a.sub(b);
        if (res.cmpn(0) < 0) {
            res.iadd(this.m);
        }
        return res._forceRed(this);
    };
    Red.prototype.isub = function isub(a, b) {
        this._verify2(a, b);
        var res = a.isub(b);
        if (res.cmpn(0) < 0) {
            res.iadd(this.m);
        }
        return res;
    };
    Red.prototype.shl = function shl(a, num) {
        this._verify1(a);
        return this.imod(a.ushln(num));
    };
    Red.prototype.imul = function imul(a, b) {
        this._verify2(a, b);
        return this.imod(a.imul(b));
    };
    Red.prototype.mul = function mul(a, b) {
        this._verify2(a, b);
        return this.imod(a.mul(b));
    };
    Red.prototype.isqr = function isqr(a) {
        return this.imul(a, a.clone());
    };
    Red.prototype.sqr = function sqr(a) {
        return this.mul(a, a);
    };
    Red.prototype.sqrt = function sqrt(a) {
        if (a.isZero()) return a.clone();
        var mod3 = this.m.andln(3);
        assert(mod3 % 2 === 1);
        // Fast case
        if (mod3 === 3) {
            var pow = this.m.add(new BN(1)).iushrn(2);
            return this.pow(a, pow);
        }
        // Tonelli-Shanks algorithm (Totally unoptimized and slow)
        //
        // Find Q and S, that Q * 2 ^ S = (P - 1)
        var q = this.m.subn(1);
        var s = 0;
        while(!q.isZero() && q.andln(1) === 0){
            s++;
            q.iushrn(1);
        }
        assert(!q.isZero());
        var one = new BN(1).toRed(this);
        var nOne = one.redNeg();
        // Find quadratic non-residue
        // NOTE: Max is such because of generalized Riemann hypothesis.
        var lpow = this.m.subn(1).iushrn(1);
        var z = this.m.bitLength();
        z = new BN(2 * z * z).toRed(this);
        while(this.pow(z, lpow).cmp(nOne) !== 0){
            z.redIAdd(nOne);
        }
        var c = this.pow(z, q);
        var r = this.pow(a, q.addn(1).iushrn(1));
        var t = this.pow(a, q);
        var m = s;
        while(t.cmp(one) !== 0){
            var tmp = t;
            for(var i = 0; tmp.cmp(one) !== 0; i++){
                tmp = tmp.redSqr();
            }
            assert(i < m);
            var b = this.pow(c, new BN(1).iushln(m - i - 1));
            r = r.redMul(b);
            c = b.redSqr();
            t = t.redMul(c);
            m = i;
        }
        return r;
    };
    Red.prototype.invm = function invm(a) {
        var inv = a._invmp(this.m);
        if (inv.negative !== 0) {
            inv.negative = 0;
            return this.imod(inv).redNeg();
        } else {
            return this.imod(inv);
        }
    };
    Red.prototype.pow = function pow(a, num) {
        if (num.isZero()) return new BN(1).toRed(this);
        if (num.cmpn(1) === 0) return a.clone();
        var windowSize = 4;
        var wnd = new Array(1 << windowSize);
        wnd[0] = new BN(1).toRed(this);
        wnd[1] = a;
        for(var i = 2; i < wnd.length; i++){
            wnd[i] = this.mul(wnd[i - 1], a);
        }
        var res = wnd[0];
        var current = 0;
        var currentLen = 0;
        var start = num.bitLength() % 26;
        if (start === 0) {
            start = 26;
        }
        for(i = num.length - 1; i >= 0; i--){
            var word = num.words[i];
            for(var j = start - 1; j >= 0; j--){
                var bit = word >> j & 1;
                if (res !== wnd[0]) {
                    res = this.sqr(res);
                }
                if (bit === 0 && current === 0) {
                    currentLen = 0;
                    continue;
                }
                current <<= 1;
                current |= bit;
                currentLen++;
                if (currentLen !== windowSize && (i !== 0 || j !== 0)) continue;
                res = this.mul(res, wnd[current]);
                currentLen = 0;
                current = 0;
            }
            start = 26;
        }
        return res;
    };
    Red.prototype.convertTo = function convertTo(num) {
        var r = num.umod(this.m);
        return r === num ? r.clone() : r;
    };
    Red.prototype.convertFrom = function convertFrom(num) {
        var res = num.clone();
        res.red = null;
        return res;
    };
    //
    // Montgomery method engine
    //
    BN.mont = function mont(num) {
        return new Mont(num);
    };
    function Mont(m) {
        Red.call(this, m);
        this.shift = this.m.bitLength();
        if (this.shift % 26 !== 0) {
            this.shift += 26 - this.shift % 26;
        }
        this.r = new BN(1).iushln(this.shift);
        this.r2 = this.imod(this.r.sqr());
        this.rinv = this.r._invmp(this.m);
        this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
        this.minv = this.minv.umod(this.r);
        this.minv = this.r.sub(this.minv);
    }
    inherits(Mont, Red);
    Mont.prototype.convertTo = function convertTo(num) {
        return this.imod(num.ushln(this.shift));
    };
    Mont.prototype.convertFrom = function convertFrom(num) {
        var r = this.imod(num.mul(this.rinv));
        r.red = null;
        return r;
    };
    Mont.prototype.imul = function imul(a, b) {
        if (a.isZero() || b.isZero()) {
            a.words[0] = 0;
            a.length = 1;
            return a;
        }
        var t = a.imul(b);
        var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
        var u = t.isub(c).iushrn(this.shift);
        var res = u;
        if (u.cmp(this.m) >= 0) {
            res = u.isub(this.m);
        } else if (u.cmpn(0) < 0) {
            res = u.iadd(this.m);
        }
        return res._forceRed(this);
    };
    Mont.prototype.mul = function mul(a, b) {
        if (a.isZero() || b.isZero()) return new BN(0)._forceRed(this);
        var t = a.mul(b);
        var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
        var u = t.isub(c).iushrn(this.shift);
        var res = u;
        if (u.cmp(this.m) >= 0) {
            res = u.isub(this.m);
        } else if (u.cmpn(0) < 0) {
            res = u.iadd(this.m);
        }
        return res._forceRed(this);
    };
    Mont.prototype.invm = function invm(a) {
        // (AR)^-1 * R^2 = (A^-1 * R^-1) * R^2 = A^-1 * R
        var res = this.imod(a._invmp(this.m).mul(this.r2));
        return res._forceRed(this);
    };
})(("TURBOPACK compile-time value", "object") === 'undefined' || module, /*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/rayls-shield-landing-page/node_modules/js-sha3/src/sha3.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * [js-sha3]{@link https://github.com/emn178/js-sha3}
 *
 * @version 0.8.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2015-2018
 * @license MIT
 */ /*jslint bitwise: true */ (function() {
    'use strict';
    var INPUT_ERROR = 'input is invalid type';
    var FINALIZE_ERROR = 'finalize already called';
    var WINDOW = ("TURBOPACK compile-time value", "undefined") === 'object';
    var root = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : {};
    if (root.JS_SHA3_NO_WINDOW) {
        WINDOW = false;
    }
    var WEB_WORKER = !WINDOW && typeof self === 'object';
    var NODE_JS = !root.JS_SHA3_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node;
    if (NODE_JS) {
        root = /*TURBOPACK member replacement*/ __turbopack_context__.g;
    } else if (WEB_WORKER) {
        root = self;
    }
    var COMMON_JS = !root.JS_SHA3_NO_COMMON_JS && ("TURBOPACK compile-time value", "object") === 'object' && module.exports;
    var AMD = typeof define === 'function' && define.amd;
    var ARRAY_BUFFER = !root.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';
    var HEX_CHARS = '0123456789abcdef'.split('');
    var SHAKE_PADDING = [
        31,
        7936,
        2031616,
        520093696
    ];
    var CSHAKE_PADDING = [
        4,
        1024,
        262144,
        67108864
    ];
    var KECCAK_PADDING = [
        1,
        256,
        65536,
        16777216
    ];
    var PADDING = [
        6,
        1536,
        393216,
        100663296
    ];
    var SHIFT = [
        0,
        8,
        16,
        24
    ];
    var RC = [
        1,
        0,
        32898,
        0,
        32906,
        2147483648,
        2147516416,
        2147483648,
        32907,
        0,
        2147483649,
        0,
        2147516545,
        2147483648,
        32777,
        2147483648,
        138,
        0,
        136,
        0,
        2147516425,
        0,
        2147483658,
        0,
        2147516555,
        0,
        139,
        2147483648,
        32905,
        2147483648,
        32771,
        2147483648,
        32770,
        2147483648,
        128,
        2147483648,
        32778,
        0,
        2147483658,
        2147483648,
        2147516545,
        2147483648,
        32896,
        2147483648,
        2147483649,
        0,
        2147516424,
        2147483648
    ];
    var BITS = [
        224,
        256,
        384,
        512
    ];
    var SHAKE_BITS = [
        128,
        256
    ];
    var OUTPUT_TYPES = [
        'hex',
        'buffer',
        'arrayBuffer',
        'array',
        'digest'
    ];
    var CSHAKE_BYTEPAD = {
        '128': 168,
        '256': 136
    };
    if (root.JS_SHA3_NO_NODE_JS || !Array.isArray) {
        Array.isArray = function(obj) {
            return Object.prototype.toString.call(obj) === '[object Array]';
        };
    }
    if (ARRAY_BUFFER && (root.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
        ArrayBuffer.isView = function(obj) {
            return typeof obj === 'object' && obj.buffer && obj.buffer.constructor === ArrayBuffer;
        };
    }
    var createOutputMethod = function(bits, padding, outputType) {
        return function(message) {
            return new Keccak(bits, padding, bits).update(message)[outputType]();
        };
    };
    var createShakeOutputMethod = function(bits, padding, outputType) {
        return function(message, outputBits) {
            return new Keccak(bits, padding, outputBits).update(message)[outputType]();
        };
    };
    var createCshakeOutputMethod = function(bits, padding, outputType) {
        return function(message, outputBits, n, s) {
            return methods['cshake' + bits].update(message, outputBits, n, s)[outputType]();
        };
    };
    var createKmacOutputMethod = function(bits, padding, outputType) {
        return function(key, message, outputBits, s) {
            return methods['kmac' + bits].update(key, message, outputBits, s)[outputType]();
        };
    };
    var createOutputMethods = function(method, createMethod, bits, padding) {
        for(var i = 0; i < OUTPUT_TYPES.length; ++i){
            var type = OUTPUT_TYPES[i];
            method[type] = createMethod(bits, padding, type);
        }
        return method;
    };
    var createMethod = function(bits, padding) {
        var method = createOutputMethod(bits, padding, 'hex');
        method.create = function() {
            return new Keccak(bits, padding, bits);
        };
        method.update = function(message) {
            return method.create().update(message);
        };
        return createOutputMethods(method, createOutputMethod, bits, padding);
    };
    var createShakeMethod = function(bits, padding) {
        var method = createShakeOutputMethod(bits, padding, 'hex');
        method.create = function(outputBits) {
            return new Keccak(bits, padding, outputBits);
        };
        method.update = function(message, outputBits) {
            return method.create(outputBits).update(message);
        };
        return createOutputMethods(method, createShakeOutputMethod, bits, padding);
    };
    var createCshakeMethod = function(bits, padding) {
        var w = CSHAKE_BYTEPAD[bits];
        var method = createCshakeOutputMethod(bits, padding, 'hex');
        method.create = function(outputBits, n, s) {
            if (!n && !s) {
                return methods['shake' + bits].create(outputBits);
            } else {
                return new Keccak(bits, padding, outputBits).bytepad([
                    n,
                    s
                ], w);
            }
        };
        method.update = function(message, outputBits, n, s) {
            return method.create(outputBits, n, s).update(message);
        };
        return createOutputMethods(method, createCshakeOutputMethod, bits, padding);
    };
    var createKmacMethod = function(bits, padding) {
        var w = CSHAKE_BYTEPAD[bits];
        var method = createKmacOutputMethod(bits, padding, 'hex');
        method.create = function(key, outputBits, s) {
            return new Kmac(bits, padding, outputBits).bytepad([
                'KMAC',
                s
            ], w).bytepad([
                key
            ], w);
        };
        method.update = function(key, message, outputBits, s) {
            return method.create(key, outputBits, s).update(message);
        };
        return createOutputMethods(method, createKmacOutputMethod, bits, padding);
    };
    var algorithms = [
        {
            name: 'keccak',
            padding: KECCAK_PADDING,
            bits: BITS,
            createMethod: createMethod
        },
        {
            name: 'sha3',
            padding: PADDING,
            bits: BITS,
            createMethod: createMethod
        },
        {
            name: 'shake',
            padding: SHAKE_PADDING,
            bits: SHAKE_BITS,
            createMethod: createShakeMethod
        },
        {
            name: 'cshake',
            padding: CSHAKE_PADDING,
            bits: SHAKE_BITS,
            createMethod: createCshakeMethod
        },
        {
            name: 'kmac',
            padding: CSHAKE_PADDING,
            bits: SHAKE_BITS,
            createMethod: createKmacMethod
        }
    ];
    var methods = {}, methodNames = [];
    for(var i = 0; i < algorithms.length; ++i){
        var algorithm = algorithms[i];
        var bits = algorithm.bits;
        for(var j = 0; j < bits.length; ++j){
            var methodName = algorithm.name + '_' + bits[j];
            methodNames.push(methodName);
            methods[methodName] = algorithm.createMethod(bits[j], algorithm.padding);
            if (algorithm.name !== 'sha3') {
                var newMethodName = algorithm.name + bits[j];
                methodNames.push(newMethodName);
                methods[newMethodName] = methods[methodName];
            }
        }
    }
    function Keccak(bits, padding, outputBits) {
        this.blocks = [];
        this.s = [];
        this.padding = padding;
        this.outputBits = outputBits;
        this.reset = true;
        this.finalized = false;
        this.block = 0;
        this.start = 0;
        this.blockCount = 1600 - (bits << 1) >> 5;
        this.byteCount = this.blockCount << 2;
        this.outputBlocks = outputBits >> 5;
        this.extraBytes = (outputBits & 31) >> 3;
        for(var i = 0; i < 50; ++i){
            this.s[i] = 0;
        }
    }
    Keccak.prototype.update = function(message) {
        if (this.finalized) {
            throw new Error(FINALIZE_ERROR);
        }
        var notString, type = typeof message;
        if (type !== 'string') {
            if (type === 'object') {
                if (message === null) {
                    throw new Error(INPUT_ERROR);
                } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
                    message = new Uint8Array(message);
                } else if (!Array.isArray(message)) {
                    if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
                        throw new Error(INPUT_ERROR);
                    }
                }
            } else {
                throw new Error(INPUT_ERROR);
            }
            notString = true;
        }
        var blocks = this.blocks, byteCount = this.byteCount, length = message.length, blockCount = this.blockCount, index = 0, s = this.s, i, code;
        while(index < length){
            if (this.reset) {
                this.reset = false;
                blocks[0] = this.block;
                for(i = 1; i < blockCount + 1; ++i){
                    blocks[i] = 0;
                }
            }
            if (notString) {
                for(i = this.start; index < length && i < byteCount; ++index){
                    blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];
                }
            } else {
                for(i = this.start; index < length && i < byteCount; ++index){
                    code = message.charCodeAt(index);
                    if (code < 0x80) {
                        blocks[i >> 2] |= code << SHIFT[i++ & 3];
                    } else if (code < 0x800) {
                        blocks[i >> 2] |= (0xc0 | code >> 6) << SHIFT[i++ & 3];
                        blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
                    } else if (code < 0xd800 || code >= 0xe000) {
                        blocks[i >> 2] |= (0xe0 | code >> 12) << SHIFT[i++ & 3];
                        blocks[i >> 2] |= (0x80 | code >> 6 & 0x3f) << SHIFT[i++ & 3];
                        blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
                    } else {
                        code = 0x10000 + ((code & 0x3ff) << 10 | message.charCodeAt(++index) & 0x3ff);
                        blocks[i >> 2] |= (0xf0 | code >> 18) << SHIFT[i++ & 3];
                        blocks[i >> 2] |= (0x80 | code >> 12 & 0x3f) << SHIFT[i++ & 3];
                        blocks[i >> 2] |= (0x80 | code >> 6 & 0x3f) << SHIFT[i++ & 3];
                        blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
                    }
                }
            }
            this.lastByteIndex = i;
            if (i >= byteCount) {
                this.start = i - byteCount;
                this.block = blocks[blockCount];
                for(i = 0; i < blockCount; ++i){
                    s[i] ^= blocks[i];
                }
                f(s);
                this.reset = true;
            } else {
                this.start = i;
            }
        }
        return this;
    };
    Keccak.prototype.encode = function(x, right) {
        var o = x & 255, n = 1;
        var bytes = [
            o
        ];
        x = x >> 8;
        o = x & 255;
        while(o > 0){
            bytes.unshift(o);
            x = x >> 8;
            o = x & 255;
            ++n;
        }
        if (right) {
            bytes.push(n);
        } else {
            bytes.unshift(n);
        }
        this.update(bytes);
        return bytes.length;
    };
    Keccak.prototype.encodeString = function(str) {
        var notString, type = typeof str;
        if (type !== 'string') {
            if (type === 'object') {
                if (str === null) {
                    throw new Error(INPUT_ERROR);
                } else if (ARRAY_BUFFER && str.constructor === ArrayBuffer) {
                    str = new Uint8Array(str);
                } else if (!Array.isArray(str)) {
                    if (!ARRAY_BUFFER || !ArrayBuffer.isView(str)) {
                        throw new Error(INPUT_ERROR);
                    }
                }
            } else {
                throw new Error(INPUT_ERROR);
            }
            notString = true;
        }
        var bytes = 0, length = str.length;
        if (notString) {
            bytes = length;
        } else {
            for(var i = 0; i < str.length; ++i){
                var code = str.charCodeAt(i);
                if (code < 0x80) {
                    bytes += 1;
                } else if (code < 0x800) {
                    bytes += 2;
                } else if (code < 0xd800 || code >= 0xe000) {
                    bytes += 3;
                } else {
                    code = 0x10000 + ((code & 0x3ff) << 10 | str.charCodeAt(++i) & 0x3ff);
                    bytes += 4;
                }
            }
        }
        bytes += this.encode(bytes * 8);
        this.update(str);
        return bytes;
    };
    Keccak.prototype.bytepad = function(strs, w) {
        var bytes = this.encode(w);
        for(var i = 0; i < strs.length; ++i){
            bytes += this.encodeString(strs[i]);
        }
        var paddingBytes = w - bytes % w;
        var zeros = [];
        zeros.length = paddingBytes;
        this.update(zeros);
        return this;
    };
    Keccak.prototype.finalize = function() {
        if (this.finalized) {
            return;
        }
        this.finalized = true;
        var blocks = this.blocks, i = this.lastByteIndex, blockCount = this.blockCount, s = this.s;
        blocks[i >> 2] |= this.padding[i & 3];
        if (this.lastByteIndex === this.byteCount) {
            blocks[0] = blocks[blockCount];
            for(i = 1; i < blockCount + 1; ++i){
                blocks[i] = 0;
            }
        }
        blocks[blockCount - 1] |= 0x80000000;
        for(i = 0; i < blockCount; ++i){
            s[i] ^= blocks[i];
        }
        f(s);
    };
    Keccak.prototype.toString = Keccak.prototype.hex = function() {
        this.finalize();
        var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks, extraBytes = this.extraBytes, i = 0, j = 0;
        var hex = '', block;
        while(j < outputBlocks){
            for(i = 0; i < blockCount && j < outputBlocks; ++i, ++j){
                block = s[i];
                hex += HEX_CHARS[block >> 4 & 0x0F] + HEX_CHARS[block & 0x0F] + HEX_CHARS[block >> 12 & 0x0F] + HEX_CHARS[block >> 8 & 0x0F] + HEX_CHARS[block >> 20 & 0x0F] + HEX_CHARS[block >> 16 & 0x0F] + HEX_CHARS[block >> 28 & 0x0F] + HEX_CHARS[block >> 24 & 0x0F];
            }
            if (j % blockCount === 0) {
                f(s);
                i = 0;
            }
        }
        if (extraBytes) {
            block = s[i];
            hex += HEX_CHARS[block >> 4 & 0x0F] + HEX_CHARS[block & 0x0F];
            if (extraBytes > 1) {
                hex += HEX_CHARS[block >> 12 & 0x0F] + HEX_CHARS[block >> 8 & 0x0F];
            }
            if (extraBytes > 2) {
                hex += HEX_CHARS[block >> 20 & 0x0F] + HEX_CHARS[block >> 16 & 0x0F];
            }
        }
        return hex;
    };
    Keccak.prototype.arrayBuffer = function() {
        this.finalize();
        var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks, extraBytes = this.extraBytes, i = 0, j = 0;
        var bytes = this.outputBits >> 3;
        var buffer;
        if (extraBytes) {
            buffer = new ArrayBuffer(outputBlocks + 1 << 2);
        } else {
            buffer = new ArrayBuffer(bytes);
        }
        var array = new Uint32Array(buffer);
        while(j < outputBlocks){
            for(i = 0; i < blockCount && j < outputBlocks; ++i, ++j){
                array[j] = s[i];
            }
            if (j % blockCount === 0) {
                f(s);
            }
        }
        if (extraBytes) {
            array[i] = s[i];
            buffer = buffer.slice(0, bytes);
        }
        return buffer;
    };
    Keccak.prototype.buffer = Keccak.prototype.arrayBuffer;
    Keccak.prototype.digest = Keccak.prototype.array = function() {
        this.finalize();
        var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks, extraBytes = this.extraBytes, i = 0, j = 0;
        var array = [], offset, block;
        while(j < outputBlocks){
            for(i = 0; i < blockCount && j < outputBlocks; ++i, ++j){
                offset = j << 2;
                block = s[i];
                array[offset] = block & 0xFF;
                array[offset + 1] = block >> 8 & 0xFF;
                array[offset + 2] = block >> 16 & 0xFF;
                array[offset + 3] = block >> 24 & 0xFF;
            }
            if (j % blockCount === 0) {
                f(s);
            }
        }
        if (extraBytes) {
            offset = j << 2;
            block = s[i];
            array[offset] = block & 0xFF;
            if (extraBytes > 1) {
                array[offset + 1] = block >> 8 & 0xFF;
            }
            if (extraBytes > 2) {
                array[offset + 2] = block >> 16 & 0xFF;
            }
        }
        return array;
    };
    function Kmac(bits, padding, outputBits) {
        Keccak.call(this, bits, padding, outputBits);
    }
    Kmac.prototype = new Keccak();
    Kmac.prototype.finalize = function() {
        this.encode(this.outputBits, true);
        return Keccak.prototype.finalize.call(this);
    };
    var f = function(s) {
        var h, l, n, c0, c1, c2, c3, c4, c5, c6, c7, c8, c9, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29, b30, b31, b32, b33, b34, b35, b36, b37, b38, b39, b40, b41, b42, b43, b44, b45, b46, b47, b48, b49;
        for(n = 0; n < 48; n += 2){
            c0 = s[0] ^ s[10] ^ s[20] ^ s[30] ^ s[40];
            c1 = s[1] ^ s[11] ^ s[21] ^ s[31] ^ s[41];
            c2 = s[2] ^ s[12] ^ s[22] ^ s[32] ^ s[42];
            c3 = s[3] ^ s[13] ^ s[23] ^ s[33] ^ s[43];
            c4 = s[4] ^ s[14] ^ s[24] ^ s[34] ^ s[44];
            c5 = s[5] ^ s[15] ^ s[25] ^ s[35] ^ s[45];
            c6 = s[6] ^ s[16] ^ s[26] ^ s[36] ^ s[46];
            c7 = s[7] ^ s[17] ^ s[27] ^ s[37] ^ s[47];
            c8 = s[8] ^ s[18] ^ s[28] ^ s[38] ^ s[48];
            c9 = s[9] ^ s[19] ^ s[29] ^ s[39] ^ s[49];
            h = c8 ^ (c2 << 1 | c3 >>> 31);
            l = c9 ^ (c3 << 1 | c2 >>> 31);
            s[0] ^= h;
            s[1] ^= l;
            s[10] ^= h;
            s[11] ^= l;
            s[20] ^= h;
            s[21] ^= l;
            s[30] ^= h;
            s[31] ^= l;
            s[40] ^= h;
            s[41] ^= l;
            h = c0 ^ (c4 << 1 | c5 >>> 31);
            l = c1 ^ (c5 << 1 | c4 >>> 31);
            s[2] ^= h;
            s[3] ^= l;
            s[12] ^= h;
            s[13] ^= l;
            s[22] ^= h;
            s[23] ^= l;
            s[32] ^= h;
            s[33] ^= l;
            s[42] ^= h;
            s[43] ^= l;
            h = c2 ^ (c6 << 1 | c7 >>> 31);
            l = c3 ^ (c7 << 1 | c6 >>> 31);
            s[4] ^= h;
            s[5] ^= l;
            s[14] ^= h;
            s[15] ^= l;
            s[24] ^= h;
            s[25] ^= l;
            s[34] ^= h;
            s[35] ^= l;
            s[44] ^= h;
            s[45] ^= l;
            h = c4 ^ (c8 << 1 | c9 >>> 31);
            l = c5 ^ (c9 << 1 | c8 >>> 31);
            s[6] ^= h;
            s[7] ^= l;
            s[16] ^= h;
            s[17] ^= l;
            s[26] ^= h;
            s[27] ^= l;
            s[36] ^= h;
            s[37] ^= l;
            s[46] ^= h;
            s[47] ^= l;
            h = c6 ^ (c0 << 1 | c1 >>> 31);
            l = c7 ^ (c1 << 1 | c0 >>> 31);
            s[8] ^= h;
            s[9] ^= l;
            s[18] ^= h;
            s[19] ^= l;
            s[28] ^= h;
            s[29] ^= l;
            s[38] ^= h;
            s[39] ^= l;
            s[48] ^= h;
            s[49] ^= l;
            b0 = s[0];
            b1 = s[1];
            b32 = s[11] << 4 | s[10] >>> 28;
            b33 = s[10] << 4 | s[11] >>> 28;
            b14 = s[20] << 3 | s[21] >>> 29;
            b15 = s[21] << 3 | s[20] >>> 29;
            b46 = s[31] << 9 | s[30] >>> 23;
            b47 = s[30] << 9 | s[31] >>> 23;
            b28 = s[40] << 18 | s[41] >>> 14;
            b29 = s[41] << 18 | s[40] >>> 14;
            b20 = s[2] << 1 | s[3] >>> 31;
            b21 = s[3] << 1 | s[2] >>> 31;
            b2 = s[13] << 12 | s[12] >>> 20;
            b3 = s[12] << 12 | s[13] >>> 20;
            b34 = s[22] << 10 | s[23] >>> 22;
            b35 = s[23] << 10 | s[22] >>> 22;
            b16 = s[33] << 13 | s[32] >>> 19;
            b17 = s[32] << 13 | s[33] >>> 19;
            b48 = s[42] << 2 | s[43] >>> 30;
            b49 = s[43] << 2 | s[42] >>> 30;
            b40 = s[5] << 30 | s[4] >>> 2;
            b41 = s[4] << 30 | s[5] >>> 2;
            b22 = s[14] << 6 | s[15] >>> 26;
            b23 = s[15] << 6 | s[14] >>> 26;
            b4 = s[25] << 11 | s[24] >>> 21;
            b5 = s[24] << 11 | s[25] >>> 21;
            b36 = s[34] << 15 | s[35] >>> 17;
            b37 = s[35] << 15 | s[34] >>> 17;
            b18 = s[45] << 29 | s[44] >>> 3;
            b19 = s[44] << 29 | s[45] >>> 3;
            b10 = s[6] << 28 | s[7] >>> 4;
            b11 = s[7] << 28 | s[6] >>> 4;
            b42 = s[17] << 23 | s[16] >>> 9;
            b43 = s[16] << 23 | s[17] >>> 9;
            b24 = s[26] << 25 | s[27] >>> 7;
            b25 = s[27] << 25 | s[26] >>> 7;
            b6 = s[36] << 21 | s[37] >>> 11;
            b7 = s[37] << 21 | s[36] >>> 11;
            b38 = s[47] << 24 | s[46] >>> 8;
            b39 = s[46] << 24 | s[47] >>> 8;
            b30 = s[8] << 27 | s[9] >>> 5;
            b31 = s[9] << 27 | s[8] >>> 5;
            b12 = s[18] << 20 | s[19] >>> 12;
            b13 = s[19] << 20 | s[18] >>> 12;
            b44 = s[29] << 7 | s[28] >>> 25;
            b45 = s[28] << 7 | s[29] >>> 25;
            b26 = s[38] << 8 | s[39] >>> 24;
            b27 = s[39] << 8 | s[38] >>> 24;
            b8 = s[48] << 14 | s[49] >>> 18;
            b9 = s[49] << 14 | s[48] >>> 18;
            s[0] = b0 ^ ~b2 & b4;
            s[1] = b1 ^ ~b3 & b5;
            s[10] = b10 ^ ~b12 & b14;
            s[11] = b11 ^ ~b13 & b15;
            s[20] = b20 ^ ~b22 & b24;
            s[21] = b21 ^ ~b23 & b25;
            s[30] = b30 ^ ~b32 & b34;
            s[31] = b31 ^ ~b33 & b35;
            s[40] = b40 ^ ~b42 & b44;
            s[41] = b41 ^ ~b43 & b45;
            s[2] = b2 ^ ~b4 & b6;
            s[3] = b3 ^ ~b5 & b7;
            s[12] = b12 ^ ~b14 & b16;
            s[13] = b13 ^ ~b15 & b17;
            s[22] = b22 ^ ~b24 & b26;
            s[23] = b23 ^ ~b25 & b27;
            s[32] = b32 ^ ~b34 & b36;
            s[33] = b33 ^ ~b35 & b37;
            s[42] = b42 ^ ~b44 & b46;
            s[43] = b43 ^ ~b45 & b47;
            s[4] = b4 ^ ~b6 & b8;
            s[5] = b5 ^ ~b7 & b9;
            s[14] = b14 ^ ~b16 & b18;
            s[15] = b15 ^ ~b17 & b19;
            s[24] = b24 ^ ~b26 & b28;
            s[25] = b25 ^ ~b27 & b29;
            s[34] = b34 ^ ~b36 & b38;
            s[35] = b35 ^ ~b37 & b39;
            s[44] = b44 ^ ~b46 & b48;
            s[45] = b45 ^ ~b47 & b49;
            s[6] = b6 ^ ~b8 & b0;
            s[7] = b7 ^ ~b9 & b1;
            s[16] = b16 ^ ~b18 & b10;
            s[17] = b17 ^ ~b19 & b11;
            s[26] = b26 ^ ~b28 & b20;
            s[27] = b27 ^ ~b29 & b21;
            s[36] = b36 ^ ~b38 & b30;
            s[37] = b37 ^ ~b39 & b31;
            s[46] = b46 ^ ~b48 & b40;
            s[47] = b47 ^ ~b49 & b41;
            s[8] = b8 ^ ~b0 & b2;
            s[9] = b9 ^ ~b1 & b3;
            s[18] = b18 ^ ~b10 & b12;
            s[19] = b19 ^ ~b11 & b13;
            s[28] = b28 ^ ~b20 & b22;
            s[29] = b29 ^ ~b21 & b23;
            s[38] = b38 ^ ~b30 & b32;
            s[39] = b39 ^ ~b31 & b33;
            s[48] = b48 ^ ~b40 & b42;
            s[49] = b49 ^ ~b41 & b43;
            s[0] ^= RC[n];
            s[1] ^= RC[n + 1];
        }
    };
    if (COMMON_JS) {
        module.exports = methods;
    } else {
        for(i = 0; i < methodNames.length; ++i){
            root[methodNames[i]] = methods[methodNames[i]];
        }
        if (AMD) {
            ((r)=>r !== undefined && __turbopack_context__.v(r))(function() {
                return methods;
            }(__turbopack_context__.r, exports, module));
        }
    }
})();
}),
"[project]/rayls-shield-landing-page/node_modules/minimalistic-assert/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = assert;
function assert(val, msg) {
    if (!val) throw new Error(msg || 'Assertion failed');
}
assert.equal = function assertEqual(l, r, msg) {
    if (l != r) throw new Error(msg || 'Assertion failed: ' + l + ' != ' + r);
};
}),
"[project]/rayls-shield-landing-page/node_modules/hash.js/lib/hash/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var assert = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/minimalistic-assert/index.js [app-ssr] (ecmascript)");
var inherits = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/inherits/inherits.js [app-ssr] (ecmascript)");
exports.inherits = inherits;
function isSurrogatePair(msg, i) {
    if ((msg.charCodeAt(i) & 0xFC00) !== 0xD800) {
        return false;
    }
    if (i < 0 || i + 1 >= msg.length) {
        return false;
    }
    return (msg.charCodeAt(i + 1) & 0xFC00) === 0xDC00;
}
function toArray(msg, enc) {
    if (Array.isArray(msg)) return msg.slice();
    if (!msg) return [];
    var res = [];
    if (typeof msg === 'string') {
        if (!enc) {
            // Inspired by stringToUtf8ByteArray() in closure-library by Google
            // https://github.com/google/closure-library/blob/8598d87242af59aac233270742c8984e2b2bdbe0/closure/goog/crypt/crypt.js#L117-L143
            // Apache License 2.0
            // https://github.com/google/closure-library/blob/master/LICENSE
            var p = 0;
            for(var i = 0; i < msg.length; i++){
                var c = msg.charCodeAt(i);
                if (c < 128) {
                    res[p++] = c;
                } else if (c < 2048) {
                    res[p++] = c >> 6 | 192;
                    res[p++] = c & 63 | 128;
                } else if (isSurrogatePair(msg, i)) {
                    c = 0x10000 + ((c & 0x03FF) << 10) + (msg.charCodeAt(++i) & 0x03FF);
                    res[p++] = c >> 18 | 240;
                    res[p++] = c >> 12 & 63 | 128;
                    res[p++] = c >> 6 & 63 | 128;
                    res[p++] = c & 63 | 128;
                } else {
                    res[p++] = c >> 12 | 224;
                    res[p++] = c >> 6 & 63 | 128;
                    res[p++] = c & 63 | 128;
                }
            }
        } else if (enc === 'hex') {
            msg = msg.replace(/[^a-z0-9]+/ig, '');
            if (msg.length % 2 !== 0) msg = '0' + msg;
            for(i = 0; i < msg.length; i += 2)res.push(parseInt(msg[i] + msg[i + 1], 16));
        }
    } else {
        for(i = 0; i < msg.length; i++)res[i] = msg[i] | 0;
    }
    return res;
}
exports.toArray = toArray;
function toHex(msg) {
    var res = '';
    for(var i = 0; i < msg.length; i++)res += zero2(msg[i].toString(16));
    return res;
}
exports.toHex = toHex;
function htonl(w) {
    var res = w >>> 24 | w >>> 8 & 0xff00 | w << 8 & 0xff0000 | (w & 0xff) << 24;
    return res >>> 0;
}
exports.htonl = htonl;
function toHex32(msg, endian) {
    var res = '';
    for(var i = 0; i < msg.length; i++){
        var w = msg[i];
        if (endian === 'little') w = htonl(w);
        res += zero8(w.toString(16));
    }
    return res;
}
exports.toHex32 = toHex32;
function zero2(word) {
    if (word.length === 1) return '0' + word;
    else return word;
}
exports.zero2 = zero2;
function zero8(word) {
    if (word.length === 7) return '0' + word;
    else if (word.length === 6) return '00' + word;
    else if (word.length === 5) return '000' + word;
    else if (word.length === 4) return '0000' + word;
    else if (word.length === 3) return '00000' + word;
    else if (word.length === 2) return '000000' + word;
    else if (word.length === 1) return '0000000' + word;
    else return word;
}
exports.zero8 = zero8;
function join32(msg, start, end, endian) {
    var len = end - start;
    assert(len % 4 === 0);
    var res = new Array(len / 4);
    for(var i = 0, k = start; i < res.length; i++, k += 4){
        var w;
        if (endian === 'big') w = msg[k] << 24 | msg[k + 1] << 16 | msg[k + 2] << 8 | msg[k + 3];
        else w = msg[k + 3] << 24 | msg[k + 2] << 16 | msg[k + 1] << 8 | msg[k];
        res[i] = w >>> 0;
    }
    return res;
}
exports.join32 = join32;
function split32(msg, endian) {
    var res = new Array(msg.length * 4);
    for(var i = 0, k = 0; i < msg.length; i++, k += 4){
        var m = msg[i];
        if (endian === 'big') {
            res[k] = m >>> 24;
            res[k + 1] = m >>> 16 & 0xff;
            res[k + 2] = m >>> 8 & 0xff;
            res[k + 3] = m & 0xff;
        } else {
            res[k + 3] = m >>> 24;
            res[k + 2] = m >>> 16 & 0xff;
            res[k + 1] = m >>> 8 & 0xff;
            res[k] = m & 0xff;
        }
    }
    return res;
}
exports.split32 = split32;
function rotr32(w, b) {
    return w >>> b | w << 32 - b;
}
exports.rotr32 = rotr32;
function rotl32(w, b) {
    return w << b | w >>> 32 - b;
}
exports.rotl32 = rotl32;
function sum32(a, b) {
    return a + b >>> 0;
}
exports.sum32 = sum32;
function sum32_3(a, b, c) {
    return a + b + c >>> 0;
}
exports.sum32_3 = sum32_3;
function sum32_4(a, b, c, d) {
    return a + b + c + d >>> 0;
}
exports.sum32_4 = sum32_4;
function sum32_5(a, b, c, d, e) {
    return a + b + c + d + e >>> 0;
}
exports.sum32_5 = sum32_5;
function sum64(buf, pos, ah, al) {
    var bh = buf[pos];
    var bl = buf[pos + 1];
    var lo = al + bl >>> 0;
    var hi = (lo < al ? 1 : 0) + ah + bh;
    buf[pos] = hi >>> 0;
    buf[pos + 1] = lo;
}
exports.sum64 = sum64;
function sum64_hi(ah, al, bh, bl) {
    var lo = al + bl >>> 0;
    var hi = (lo < al ? 1 : 0) + ah + bh;
    return hi >>> 0;
}
exports.sum64_hi = sum64_hi;
function sum64_lo(ah, al, bh, bl) {
    var lo = al + bl;
    return lo >>> 0;
}
exports.sum64_lo = sum64_lo;
function sum64_4_hi(ah, al, bh, bl, ch, cl, dh, dl) {
    var carry = 0;
    var lo = al;
    lo = lo + bl >>> 0;
    carry += lo < al ? 1 : 0;
    lo = lo + cl >>> 0;
    carry += lo < cl ? 1 : 0;
    lo = lo + dl >>> 0;
    carry += lo < dl ? 1 : 0;
    var hi = ah + bh + ch + dh + carry;
    return hi >>> 0;
}
exports.sum64_4_hi = sum64_4_hi;
function sum64_4_lo(ah, al, bh, bl, ch, cl, dh, dl) {
    var lo = al + bl + cl + dl;
    return lo >>> 0;
}
exports.sum64_4_lo = sum64_4_lo;
function sum64_5_hi(ah, al, bh, bl, ch, cl, dh, dl, eh, el) {
    var carry = 0;
    var lo = al;
    lo = lo + bl >>> 0;
    carry += lo < al ? 1 : 0;
    lo = lo + cl >>> 0;
    carry += lo < cl ? 1 : 0;
    lo = lo + dl >>> 0;
    carry += lo < dl ? 1 : 0;
    lo = lo + el >>> 0;
    carry += lo < el ? 1 : 0;
    var hi = ah + bh + ch + dh + eh + carry;
    return hi >>> 0;
}
exports.sum64_5_hi = sum64_5_hi;
function sum64_5_lo(ah, al, bh, bl, ch, cl, dh, dl, eh, el) {
    var lo = al + bl + cl + dl + el;
    return lo >>> 0;
}
exports.sum64_5_lo = sum64_5_lo;
function rotr64_hi(ah, al, num) {
    var r = al << 32 - num | ah >>> num;
    return r >>> 0;
}
exports.rotr64_hi = rotr64_hi;
function rotr64_lo(ah, al, num) {
    var r = ah << 32 - num | al >>> num;
    return r >>> 0;
}
exports.rotr64_lo = rotr64_lo;
function shr64_hi(ah, al, num) {
    return ah >>> num;
}
exports.shr64_hi = shr64_hi;
function shr64_lo(ah, al, num) {
    var r = ah << 32 - num | al >>> num;
    return r >>> 0;
}
exports.shr64_lo = shr64_lo;
}),
"[project]/rayls-shield-landing-page/node_modules/hash.js/lib/hash/common.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var utils = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/hash.js/lib/hash/utils.js [app-ssr] (ecmascript)");
var assert = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/minimalistic-assert/index.js [app-ssr] (ecmascript)");
function BlockHash() {
    this.pending = null;
    this.pendingTotal = 0;
    this.blockSize = this.constructor.blockSize;
    this.outSize = this.constructor.outSize;
    this.hmacStrength = this.constructor.hmacStrength;
    this.padLength = this.constructor.padLength / 8;
    this.endian = 'big';
    this._delta8 = this.blockSize / 8;
    this._delta32 = this.blockSize / 32;
}
exports.BlockHash = BlockHash;
BlockHash.prototype.update = function update(msg, enc) {
    // Convert message to array, pad it, and join into 32bit blocks
    msg = utils.toArray(msg, enc);
    if (!this.pending) this.pending = msg;
    else this.pending = this.pending.concat(msg);
    this.pendingTotal += msg.length;
    // Enough data, try updating
    if (this.pending.length >= this._delta8) {
        msg = this.pending;
        // Process pending data in blocks
        var r = msg.length % this._delta8;
        this.pending = msg.slice(msg.length - r, msg.length);
        if (this.pending.length === 0) this.pending = null;
        msg = utils.join32(msg, 0, msg.length - r, this.endian);
        for(var i = 0; i < msg.length; i += this._delta32)this._update(msg, i, i + this._delta32);
    }
    return this;
};
BlockHash.prototype.digest = function digest(enc) {
    this.update(this._pad());
    assert(this.pending === null);
    return this._digest(enc);
};
BlockHash.prototype._pad = function pad() {
    var len = this.pendingTotal;
    var bytes = this._delta8;
    var k = bytes - (len + this.padLength) % bytes;
    var res = new Array(k + this.padLength);
    res[0] = 0x80;
    for(var i = 1; i < k; i++)res[i] = 0;
    // Append length
    len <<= 3;
    if (this.endian === 'big') {
        for(var t = 8; t < this.padLength; t++)res[i++] = 0;
        res[i++] = 0;
        res[i++] = 0;
        res[i++] = 0;
        res[i++] = 0;
        res[i++] = len >>> 24 & 0xff;
        res[i++] = len >>> 16 & 0xff;
        res[i++] = len >>> 8 & 0xff;
        res[i++] = len & 0xff;
    } else {
        res[i++] = len & 0xff;
        res[i++] = len >>> 8 & 0xff;
        res[i++] = len >>> 16 & 0xff;
        res[i++] = len >>> 24 & 0xff;
        res[i++] = 0;
        res[i++] = 0;
        res[i++] = 0;
        res[i++] = 0;
        for(t = 8; t < this.padLength; t++)res[i++] = 0;
    }
    return res;
};
}),
"[project]/rayls-shield-landing-page/node_modules/hash.js/lib/hash/sha/common.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var utils = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/hash.js/lib/hash/utils.js [app-ssr] (ecmascript)");
var rotr32 = utils.rotr32;
function ft_1(s, x, y, z) {
    if (s === 0) return ch32(x, y, z);
    if (s === 1 || s === 3) return p32(x, y, z);
    if (s === 2) return maj32(x, y, z);
}
exports.ft_1 = ft_1;
function ch32(x, y, z) {
    return x & y ^ ~x & z;
}
exports.ch32 = ch32;
function maj32(x, y, z) {
    return x & y ^ x & z ^ y & z;
}
exports.maj32 = maj32;
function p32(x, y, z) {
    return x ^ y ^ z;
}
exports.p32 = p32;
function s0_256(x) {
    return rotr32(x, 2) ^ rotr32(x, 13) ^ rotr32(x, 22);
}
exports.s0_256 = s0_256;
function s1_256(x) {
    return rotr32(x, 6) ^ rotr32(x, 11) ^ rotr32(x, 25);
}
exports.s1_256 = s1_256;
function g0_256(x) {
    return rotr32(x, 7) ^ rotr32(x, 18) ^ x >>> 3;
}
exports.g0_256 = g0_256;
function g1_256(x) {
    return rotr32(x, 17) ^ rotr32(x, 19) ^ x >>> 10;
}
exports.g1_256 = g1_256;
}),
"[project]/rayls-shield-landing-page/node_modules/hash.js/lib/hash/sha/1.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var utils = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/hash.js/lib/hash/utils.js [app-ssr] (ecmascript)");
var common = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/hash.js/lib/hash/common.js [app-ssr] (ecmascript)");
var shaCommon = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/hash.js/lib/hash/sha/common.js [app-ssr] (ecmascript)");
var rotl32 = utils.rotl32;
var sum32 = utils.sum32;
var sum32_5 = utils.sum32_5;
var ft_1 = shaCommon.ft_1;
var BlockHash = common.BlockHash;
var sha1_K = [
    0x5A827999,
    0x6ED9EBA1,
    0x8F1BBCDC,
    0xCA62C1D6
];
function SHA1() {
    if (!(this instanceof SHA1)) return new SHA1();
    BlockHash.call(this);
    this.h = [
        0x67452301,
        0xefcdab89,
        0x98badcfe,
        0x10325476,
        0xc3d2e1f0
    ];
    this.W = new Array(80);
}
utils.inherits(SHA1, BlockHash);
module.exports = SHA1;
SHA1.blockSize = 512;
SHA1.outSize = 160;
SHA1.hmacStrength = 80;
SHA1.padLength = 64;
SHA1.prototype._update = function _update(msg, start) {
    var W = this.W;
    for(var i = 0; i < 16; i++)W[i] = msg[start + i];
    for(; i < W.length; i++)W[i] = rotl32(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);
    var a = this.h[0];
    var b = this.h[1];
    var c = this.h[2];
    var d = this.h[3];
    var e = this.h[4];
    for(i = 0; i < W.length; i++){
        var s = ~~(i / 20);
        var t = sum32_5(rotl32(a, 5), ft_1(s, b, c, d), e, W[i], sha1_K[s]);
        e = d;
        d = c;
        c = rotl32(b, 30);
        b = a;
        a = t;
    }
    this.h[0] = sum32(this.h[0], a);
    this.h[1] = sum32(this.h[1], b);
    this.h[2] = sum32(this.h[2], c);
    this.h[3] = sum32(this.h[3], d);
    this.h[4] = sum32(this.h[4], e);
};
SHA1.prototype._digest = function digest(enc) {
    if (enc === 'hex') return utils.toHex32(this.h, 'big');
    else return utils.split32(this.h, 'big');
};
}),
"[project]/rayls-shield-landing-page/node_modules/hash.js/lib/hash/sha/256.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var utils = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/hash.js/lib/hash/utils.js [app-ssr] (ecmascript)");
var common = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/hash.js/lib/hash/common.js [app-ssr] (ecmascript)");
var shaCommon = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/hash.js/lib/hash/sha/common.js [app-ssr] (ecmascript)");
var assert = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/minimalistic-assert/index.js [app-ssr] (ecmascript)");
var sum32 = utils.sum32;
var sum32_4 = utils.sum32_4;
var sum32_5 = utils.sum32_5;
var ch32 = shaCommon.ch32;
var maj32 = shaCommon.maj32;
var s0_256 = shaCommon.s0_256;
var s1_256 = shaCommon.s1_256;
var g0_256 = shaCommon.g0_256;
var g1_256 = shaCommon.g1_256;
var BlockHash = common.BlockHash;
var sha256_K = [
    0x428a2f98,
    0x71374491,
    0xb5c0fbcf,
    0xe9b5dba5,
    0x3956c25b,
    0x59f111f1,
    0x923f82a4,
    0xab1c5ed5,
    0xd807aa98,
    0x12835b01,
    0x243185be,
    0x550c7dc3,
    0x72be5d74,
    0x80deb1fe,
    0x9bdc06a7,
    0xc19bf174,
    0xe49b69c1,
    0xefbe4786,
    0x0fc19dc6,
    0x240ca1cc,
    0x2de92c6f,
    0x4a7484aa,
    0x5cb0a9dc,
    0x76f988da,
    0x983e5152,
    0xa831c66d,
    0xb00327c8,
    0xbf597fc7,
    0xc6e00bf3,
    0xd5a79147,
    0x06ca6351,
    0x14292967,
    0x27b70a85,
    0x2e1b2138,
    0x4d2c6dfc,
    0x53380d13,
    0x650a7354,
    0x766a0abb,
    0x81c2c92e,
    0x92722c85,
    0xa2bfe8a1,
    0xa81a664b,
    0xc24b8b70,
    0xc76c51a3,
    0xd192e819,
    0xd6990624,
    0xf40e3585,
    0x106aa070,
    0x19a4c116,
    0x1e376c08,
    0x2748774c,
    0x34b0bcb5,
    0x391c0cb3,
    0x4ed8aa4a,
    0x5b9cca4f,
    0x682e6ff3,
    0x748f82ee,
    0x78a5636f,
    0x84c87814,
    0x8cc70208,
    0x90befffa,
    0xa4506ceb,
    0xbef9a3f7,
    0xc67178f2
];
function SHA256() {
    if (!(this instanceof SHA256)) return new SHA256();
    BlockHash.call(this);
    this.h = [
        0x6a09e667,
        0xbb67ae85,
        0x3c6ef372,
        0xa54ff53a,
        0x510e527f,
        0x9b05688c,
        0x1f83d9ab,
        0x5be0cd19
    ];
    this.k = sha256_K;
    this.W = new Array(64);
}
utils.inherits(SHA256, BlockHash);
module.exports = SHA256;
SHA256.blockSize = 512;
SHA256.outSize = 256;
SHA256.hmacStrength = 192;
SHA256.padLength = 64;
SHA256.prototype._update = function _update(msg, start) {
    var W = this.W;
    for(var i = 0; i < 16; i++)W[i] = msg[start + i];
    for(; i < W.length; i++)W[i] = sum32_4(g1_256(W[i - 2]), W[i - 7], g0_256(W[i - 15]), W[i - 16]);
    var a = this.h[0];
    var b = this.h[1];
    var c = this.h[2];
    var d = this.h[3];
    var e = this.h[4];
    var f = this.h[5];
    var g = this.h[6];
    var h = this.h[7];
    assert(this.k.length === W.length);
    for(i = 0; i < W.length; i++){
        var T1 = sum32_5(h, s1_256(e), ch32(e, f, g), this.k[i], W[i]);
        var T2 = sum32(s0_256(a), maj32(a, b, c));
        h = g;
        g = f;
        f = e;
        e = sum32(d, T1);
        d = c;
        c = b;
        b = a;
        a = sum32(T1, T2);
    }
    this.h[0] = sum32(this.h[0], a);
    this.h[1] = sum32(this.h[1], b);
    this.h[2] = sum32(this.h[2], c);
    this.h[3] = sum32(this.h[3], d);
    this.h[4] = sum32(this.h[4], e);
    this.h[5] = sum32(this.h[5], f);
    this.h[6] = sum32(this.h[6], g);
    this.h[7] = sum32(this.h[7], h);
};
SHA256.prototype._digest = function digest(enc) {
    if (enc === 'hex') return utils.toHex32(this.h, 'big');
    else return utils.split32(this.h, 'big');
};
}),
"[project]/rayls-shield-landing-page/node_modules/hash.js/lib/hash/sha/224.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var utils = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/hash.js/lib/hash/utils.js [app-ssr] (ecmascript)");
var SHA256 = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/hash.js/lib/hash/sha/256.js [app-ssr] (ecmascript)");
function SHA224() {
    if (!(this instanceof SHA224)) return new SHA224();
    SHA256.call(this);
    this.h = [
        0xc1059ed8,
        0x367cd507,
        0x3070dd17,
        0xf70e5939,
        0xffc00b31,
        0x68581511,
        0x64f98fa7,
        0xbefa4fa4
    ];
}
utils.inherits(SHA224, SHA256);
module.exports = SHA224;
SHA224.blockSize = 512;
SHA224.outSize = 224;
SHA224.hmacStrength = 192;
SHA224.padLength = 64;
SHA224.prototype._digest = function digest(enc) {
    // Just truncate output
    if (enc === 'hex') return utils.toHex32(this.h.slice(0, 7), 'big');
    else return utils.split32(this.h.slice(0, 7), 'big');
};
}),
"[project]/rayls-shield-landing-page/node_modules/hash.js/lib/hash/sha/512.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var utils = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/hash.js/lib/hash/utils.js [app-ssr] (ecmascript)");
var common = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/hash.js/lib/hash/common.js [app-ssr] (ecmascript)");
var assert = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/minimalistic-assert/index.js [app-ssr] (ecmascript)");
var rotr64_hi = utils.rotr64_hi;
var rotr64_lo = utils.rotr64_lo;
var shr64_hi = utils.shr64_hi;
var shr64_lo = utils.shr64_lo;
var sum64 = utils.sum64;
var sum64_hi = utils.sum64_hi;
var sum64_lo = utils.sum64_lo;
var sum64_4_hi = utils.sum64_4_hi;
var sum64_4_lo = utils.sum64_4_lo;
var sum64_5_hi = utils.sum64_5_hi;
var sum64_5_lo = utils.sum64_5_lo;
var BlockHash = common.BlockHash;
var sha512_K = [
    0x428a2f98,
    0xd728ae22,
    0x71374491,
    0x23ef65cd,
    0xb5c0fbcf,
    0xec4d3b2f,
    0xe9b5dba5,
    0x8189dbbc,
    0x3956c25b,
    0xf348b538,
    0x59f111f1,
    0xb605d019,
    0x923f82a4,
    0xaf194f9b,
    0xab1c5ed5,
    0xda6d8118,
    0xd807aa98,
    0xa3030242,
    0x12835b01,
    0x45706fbe,
    0x243185be,
    0x4ee4b28c,
    0x550c7dc3,
    0xd5ffb4e2,
    0x72be5d74,
    0xf27b896f,
    0x80deb1fe,
    0x3b1696b1,
    0x9bdc06a7,
    0x25c71235,
    0xc19bf174,
    0xcf692694,
    0xe49b69c1,
    0x9ef14ad2,
    0xefbe4786,
    0x384f25e3,
    0x0fc19dc6,
    0x8b8cd5b5,
    0x240ca1cc,
    0x77ac9c65,
    0x2de92c6f,
    0x592b0275,
    0x4a7484aa,
    0x6ea6e483,
    0x5cb0a9dc,
    0xbd41fbd4,
    0x76f988da,
    0x831153b5,
    0x983e5152,
    0xee66dfab,
    0xa831c66d,
    0x2db43210,
    0xb00327c8,
    0x98fb213f,
    0xbf597fc7,
    0xbeef0ee4,
    0xc6e00bf3,
    0x3da88fc2,
    0xd5a79147,
    0x930aa725,
    0x06ca6351,
    0xe003826f,
    0x14292967,
    0x0a0e6e70,
    0x27b70a85,
    0x46d22ffc,
    0x2e1b2138,
    0x5c26c926,
    0x4d2c6dfc,
    0x5ac42aed,
    0x53380d13,
    0x9d95b3df,
    0x650a7354,
    0x8baf63de,
    0x766a0abb,
    0x3c77b2a8,
    0x81c2c92e,
    0x47edaee6,
    0x92722c85,
    0x1482353b,
    0xa2bfe8a1,
    0x4cf10364,
    0xa81a664b,
    0xbc423001,
    0xc24b8b70,
    0xd0f89791,
    0xc76c51a3,
    0x0654be30,
    0xd192e819,
    0xd6ef5218,
    0xd6990624,
    0x5565a910,
    0xf40e3585,
    0x5771202a,
    0x106aa070,
    0x32bbd1b8,
    0x19a4c116,
    0xb8d2d0c8,
    0x1e376c08,
    0x5141ab53,
    0x2748774c,
    0xdf8eeb99,
    0x34b0bcb5,
    0xe19b48a8,
    0x391c0cb3,
    0xc5c95a63,
    0x4ed8aa4a,
    0xe3418acb,
    0x5b9cca4f,
    0x7763e373,
    0x682e6ff3,
    0xd6b2b8a3,
    0x748f82ee,
    0x5defb2fc,
    0x78a5636f,
    0x43172f60,
    0x84c87814,
    0xa1f0ab72,
    0x8cc70208,
    0x1a6439ec,
    0x90befffa,
    0x23631e28,
    0xa4506ceb,
    0xde82bde9,
    0xbef9a3f7,
    0xb2c67915,
    0xc67178f2,
    0xe372532b,
    0xca273ece,
    0xea26619c,
    0xd186b8c7,
    0x21c0c207,
    0xeada7dd6,
    0xcde0eb1e,
    0xf57d4f7f,
    0xee6ed178,
    0x06f067aa,
    0x72176fba,
    0x0a637dc5,
    0xa2c898a6,
    0x113f9804,
    0xbef90dae,
    0x1b710b35,
    0x131c471b,
    0x28db77f5,
    0x23047d84,
    0x32caab7b,
    0x40c72493,
    0x3c9ebe0a,
    0x15c9bebc,
    0x431d67c4,
    0x9c100d4c,
    0x4cc5d4be,
    0xcb3e42b6,
    0x597f299c,
    0xfc657e2a,
    0x5fcb6fab,
    0x3ad6faec,
    0x6c44198c,
    0x4a475817
];
function SHA512() {
    if (!(this instanceof SHA512)) return new SHA512();
    BlockHash.call(this);
    this.h = [
        0x6a09e667,
        0xf3bcc908,
        0xbb67ae85,
        0x84caa73b,
        0x3c6ef372,
        0xfe94f82b,
        0xa54ff53a,
        0x5f1d36f1,
        0x510e527f,
        0xade682d1,
        0x9b05688c,
        0x2b3e6c1f,
        0x1f83d9ab,
        0xfb41bd6b,
        0x5be0cd19,
        0x137e2179
    ];
    this.k = sha512_K;
    this.W = new Array(160);
}
utils.inherits(SHA512, BlockHash);
module.exports = SHA512;
SHA512.blockSize = 1024;
SHA512.outSize = 512;
SHA512.hmacStrength = 192;
SHA512.padLength = 128;
SHA512.prototype._prepareBlock = function _prepareBlock(msg, start) {
    var W = this.W;
    // 32 x 32bit words
    for(var i = 0; i < 32; i++)W[i] = msg[start + i];
    for(; i < W.length; i += 2){
        var c0_hi = g1_512_hi(W[i - 4], W[i - 3]); // i - 2
        var c0_lo = g1_512_lo(W[i - 4], W[i - 3]);
        var c1_hi = W[i - 14]; // i - 7
        var c1_lo = W[i - 13];
        var c2_hi = g0_512_hi(W[i - 30], W[i - 29]); // i - 15
        var c2_lo = g0_512_lo(W[i - 30], W[i - 29]);
        var c3_hi = W[i - 32]; // i - 16
        var c3_lo = W[i - 31];
        W[i] = sum64_4_hi(c0_hi, c0_lo, c1_hi, c1_lo, c2_hi, c2_lo, c3_hi, c3_lo);
        W[i + 1] = sum64_4_lo(c0_hi, c0_lo, c1_hi, c1_lo, c2_hi, c2_lo, c3_hi, c3_lo);
    }
};
SHA512.prototype._update = function _update(msg, start) {
    this._prepareBlock(msg, start);
    var W = this.W;
    var ah = this.h[0];
    var al = this.h[1];
    var bh = this.h[2];
    var bl = this.h[3];
    var ch = this.h[4];
    var cl = this.h[5];
    var dh = this.h[6];
    var dl = this.h[7];
    var eh = this.h[8];
    var el = this.h[9];
    var fh = this.h[10];
    var fl = this.h[11];
    var gh = this.h[12];
    var gl = this.h[13];
    var hh = this.h[14];
    var hl = this.h[15];
    assert(this.k.length === W.length);
    for(var i = 0; i < W.length; i += 2){
        var c0_hi = hh;
        var c0_lo = hl;
        var c1_hi = s1_512_hi(eh, el);
        var c1_lo = s1_512_lo(eh, el);
        var c2_hi = ch64_hi(eh, el, fh, fl, gh, gl);
        var c2_lo = ch64_lo(eh, el, fh, fl, gh, gl);
        var c3_hi = this.k[i];
        var c3_lo = this.k[i + 1];
        var c4_hi = W[i];
        var c4_lo = W[i + 1];
        var T1_hi = sum64_5_hi(c0_hi, c0_lo, c1_hi, c1_lo, c2_hi, c2_lo, c3_hi, c3_lo, c4_hi, c4_lo);
        var T1_lo = sum64_5_lo(c0_hi, c0_lo, c1_hi, c1_lo, c2_hi, c2_lo, c3_hi, c3_lo, c4_hi, c4_lo);
        c0_hi = s0_512_hi(ah, al);
        c0_lo = s0_512_lo(ah, al);
        c1_hi = maj64_hi(ah, al, bh, bl, ch, cl);
        c1_lo = maj64_lo(ah, al, bh, bl, ch, cl);
        var T2_hi = sum64_hi(c0_hi, c0_lo, c1_hi, c1_lo);
        var T2_lo = sum64_lo(c0_hi, c0_lo, c1_hi, c1_lo);
        hh = gh;
        hl = gl;
        gh = fh;
        gl = fl;
        fh = eh;
        fl = el;
        eh = sum64_hi(dh, dl, T1_hi, T1_lo);
        el = sum64_lo(dl, dl, T1_hi, T1_lo);
        dh = ch;
        dl = cl;
        ch = bh;
        cl = bl;
        bh = ah;
        bl = al;
        ah = sum64_hi(T1_hi, T1_lo, T2_hi, T2_lo);
        al = sum64_lo(T1_hi, T1_lo, T2_hi, T2_lo);
    }
    sum64(this.h, 0, ah, al);
    sum64(this.h, 2, bh, bl);
    sum64(this.h, 4, ch, cl);
    sum64(this.h, 6, dh, dl);
    sum64(this.h, 8, eh, el);
    sum64(this.h, 10, fh, fl);
    sum64(this.h, 12, gh, gl);
    sum64(this.h, 14, hh, hl);
};
SHA512.prototype._digest = function digest(enc) {
    if (enc === 'hex') return utils.toHex32(this.h, 'big');
    else return utils.split32(this.h, 'big');
};
function ch64_hi(xh, xl, yh, yl, zh) {
    var r = xh & yh ^ ~xh & zh;
    if (r < 0) r += 0x100000000;
    return r;
}
function ch64_lo(xh, xl, yh, yl, zh, zl) {
    var r = xl & yl ^ ~xl & zl;
    if (r < 0) r += 0x100000000;
    return r;
}
function maj64_hi(xh, xl, yh, yl, zh) {
    var r = xh & yh ^ xh & zh ^ yh & zh;
    if (r < 0) r += 0x100000000;
    return r;
}
function maj64_lo(xh, xl, yh, yl, zh, zl) {
    var r = xl & yl ^ xl & zl ^ yl & zl;
    if (r < 0) r += 0x100000000;
    return r;
}
function s0_512_hi(xh, xl) {
    var c0_hi = rotr64_hi(xh, xl, 28);
    var c1_hi = rotr64_hi(xl, xh, 2); // 34
    var c2_hi = rotr64_hi(xl, xh, 7); // 39
    var r = c0_hi ^ c1_hi ^ c2_hi;
    if (r < 0) r += 0x100000000;
    return r;
}
function s0_512_lo(xh, xl) {
    var c0_lo = rotr64_lo(xh, xl, 28);
    var c1_lo = rotr64_lo(xl, xh, 2); // 34
    var c2_lo = rotr64_lo(xl, xh, 7); // 39
    var r = c0_lo ^ c1_lo ^ c2_lo;
    if (r < 0) r += 0x100000000;
    return r;
}
function s1_512_hi(xh, xl) {
    var c0_hi = rotr64_hi(xh, xl, 14);
    var c1_hi = rotr64_hi(xh, xl, 18);
    var c2_hi = rotr64_hi(xl, xh, 9); // 41
    var r = c0_hi ^ c1_hi ^ c2_hi;
    if (r < 0) r += 0x100000000;
    return r;
}
function s1_512_lo(xh, xl) {
    var c0_lo = rotr64_lo(xh, xl, 14);
    var c1_lo = rotr64_lo(xh, xl, 18);
    var c2_lo = rotr64_lo(xl, xh, 9); // 41
    var r = c0_lo ^ c1_lo ^ c2_lo;
    if (r < 0) r += 0x100000000;
    return r;
}
function g0_512_hi(xh, xl) {
    var c0_hi = rotr64_hi(xh, xl, 1);
    var c1_hi = rotr64_hi(xh, xl, 8);
    var c2_hi = shr64_hi(xh, xl, 7);
    var r = c0_hi ^ c1_hi ^ c2_hi;
    if (r < 0) r += 0x100000000;
    return r;
}
function g0_512_lo(xh, xl) {
    var c0_lo = rotr64_lo(xh, xl, 1);
    var c1_lo = rotr64_lo(xh, xl, 8);
    var c2_lo = shr64_lo(xh, xl, 7);
    var r = c0_lo ^ c1_lo ^ c2_lo;
    if (r < 0) r += 0x100000000;
    return r;
}
function g1_512_hi(xh, xl) {
    var c0_hi = rotr64_hi(xh, xl, 19);
    var c1_hi = rotr64_hi(xl, xh, 29); // 61
    var c2_hi = shr64_hi(xh, xl, 6);
    var r = c0_hi ^ c1_hi ^ c2_hi;
    if (r < 0) r += 0x100000000;
    return r;
}
function g1_512_lo(xh, xl) {
    var c0_lo = rotr64_lo(xh, xl, 19);
    var c1_lo = rotr64_lo(xl, xh, 29); // 61
    var c2_lo = shr64_lo(xh, xl, 6);
    var r = c0_lo ^ c1_lo ^ c2_lo;
    if (r < 0) r += 0x100000000;
    return r;
}
}),
"[project]/rayls-shield-landing-page/node_modules/hash.js/lib/hash/sha/384.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var utils = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/hash.js/lib/hash/utils.js [app-ssr] (ecmascript)");
var SHA512 = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/hash.js/lib/hash/sha/512.js [app-ssr] (ecmascript)");
function SHA384() {
    if (!(this instanceof SHA384)) return new SHA384();
    SHA512.call(this);
    this.h = [
        0xcbbb9d5d,
        0xc1059ed8,
        0x629a292a,
        0x367cd507,
        0x9159015a,
        0x3070dd17,
        0x152fecd8,
        0xf70e5939,
        0x67332667,
        0xffc00b31,
        0x8eb44a87,
        0x68581511,
        0xdb0c2e0d,
        0x64f98fa7,
        0x47b5481d,
        0xbefa4fa4
    ];
}
utils.inherits(SHA384, SHA512);
module.exports = SHA384;
SHA384.blockSize = 1024;
SHA384.outSize = 384;
SHA384.hmacStrength = 192;
SHA384.padLength = 128;
SHA384.prototype._digest = function digest(enc) {
    if (enc === 'hex') return utils.toHex32(this.h.slice(0, 12), 'big');
    else return utils.split32(this.h.slice(0, 12), 'big');
};
}),
"[project]/rayls-shield-landing-page/node_modules/hash.js/lib/hash/sha.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

exports.sha1 = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/hash.js/lib/hash/sha/1.js [app-ssr] (ecmascript)");
exports.sha224 = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/hash.js/lib/hash/sha/224.js [app-ssr] (ecmascript)");
exports.sha256 = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/hash.js/lib/hash/sha/256.js [app-ssr] (ecmascript)");
exports.sha384 = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/hash.js/lib/hash/sha/384.js [app-ssr] (ecmascript)");
exports.sha512 = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/hash.js/lib/hash/sha/512.js [app-ssr] (ecmascript)");
}),
"[project]/rayls-shield-landing-page/node_modules/hash.js/lib/hash/ripemd.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var utils = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/hash.js/lib/hash/utils.js [app-ssr] (ecmascript)");
var common = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/hash.js/lib/hash/common.js [app-ssr] (ecmascript)");
var rotl32 = utils.rotl32;
var sum32 = utils.sum32;
var sum32_3 = utils.sum32_3;
var sum32_4 = utils.sum32_4;
var BlockHash = common.BlockHash;
function RIPEMD160() {
    if (!(this instanceof RIPEMD160)) return new RIPEMD160();
    BlockHash.call(this);
    this.h = [
        0x67452301,
        0xefcdab89,
        0x98badcfe,
        0x10325476,
        0xc3d2e1f0
    ];
    this.endian = 'little';
}
utils.inherits(RIPEMD160, BlockHash);
exports.ripemd160 = RIPEMD160;
RIPEMD160.blockSize = 512;
RIPEMD160.outSize = 160;
RIPEMD160.hmacStrength = 192;
RIPEMD160.padLength = 64;
RIPEMD160.prototype._update = function update(msg, start) {
    var A = this.h[0];
    var B = this.h[1];
    var C = this.h[2];
    var D = this.h[3];
    var E = this.h[4];
    var Ah = A;
    var Bh = B;
    var Ch = C;
    var Dh = D;
    var Eh = E;
    for(var j = 0; j < 80; j++){
        var T = sum32(rotl32(sum32_4(A, f(j, B, C, D), msg[r[j] + start], K(j)), s[j]), E);
        A = E;
        E = D;
        D = rotl32(C, 10);
        C = B;
        B = T;
        T = sum32(rotl32(sum32_4(Ah, f(79 - j, Bh, Ch, Dh), msg[rh[j] + start], Kh(j)), sh[j]), Eh);
        Ah = Eh;
        Eh = Dh;
        Dh = rotl32(Ch, 10);
        Ch = Bh;
        Bh = T;
    }
    T = sum32_3(this.h[1], C, Dh);
    this.h[1] = sum32_3(this.h[2], D, Eh);
    this.h[2] = sum32_3(this.h[3], E, Ah);
    this.h[3] = sum32_3(this.h[4], A, Bh);
    this.h[4] = sum32_3(this.h[0], B, Ch);
    this.h[0] = T;
};
RIPEMD160.prototype._digest = function digest(enc) {
    if (enc === 'hex') return utils.toHex32(this.h, 'little');
    else return utils.split32(this.h, 'little');
};
function f(j, x, y, z) {
    if (j <= 15) return x ^ y ^ z;
    else if (j <= 31) return x & y | ~x & z;
    else if (j <= 47) return (x | ~y) ^ z;
    else if (j <= 63) return x & z | y & ~z;
    else return x ^ (y | ~z);
}
function K(j) {
    if (j <= 15) return 0x00000000;
    else if (j <= 31) return 0x5a827999;
    else if (j <= 47) return 0x6ed9eba1;
    else if (j <= 63) return 0x8f1bbcdc;
    else return 0xa953fd4e;
}
function Kh(j) {
    if (j <= 15) return 0x50a28be6;
    else if (j <= 31) return 0x5c4dd124;
    else if (j <= 47) return 0x6d703ef3;
    else if (j <= 63) return 0x7a6d76e9;
    else return 0x00000000;
}
var r = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    7,
    4,
    13,
    1,
    10,
    6,
    15,
    3,
    12,
    0,
    9,
    5,
    2,
    14,
    11,
    8,
    3,
    10,
    14,
    4,
    9,
    15,
    8,
    1,
    2,
    7,
    0,
    6,
    13,
    11,
    5,
    12,
    1,
    9,
    11,
    10,
    0,
    8,
    12,
    4,
    13,
    3,
    7,
    15,
    14,
    5,
    6,
    2,
    4,
    0,
    5,
    9,
    7,
    12,
    2,
    10,
    14,
    1,
    3,
    8,
    11,
    6,
    15,
    13
];
var rh = [
    5,
    14,
    7,
    0,
    9,
    2,
    11,
    4,
    13,
    6,
    15,
    8,
    1,
    10,
    3,
    12,
    6,
    11,
    3,
    7,
    0,
    13,
    5,
    10,
    14,
    15,
    8,
    12,
    4,
    9,
    1,
    2,
    15,
    5,
    1,
    3,
    7,
    14,
    6,
    9,
    11,
    8,
    12,
    2,
    10,
    0,
    4,
    13,
    8,
    6,
    4,
    1,
    3,
    11,
    15,
    0,
    5,
    12,
    2,
    13,
    9,
    7,
    10,
    14,
    12,
    15,
    10,
    4,
    1,
    5,
    8,
    7,
    6,
    2,
    13,
    14,
    0,
    3,
    9,
    11
];
var s = [
    11,
    14,
    15,
    12,
    5,
    8,
    7,
    9,
    11,
    13,
    14,
    15,
    6,
    7,
    9,
    8,
    7,
    6,
    8,
    13,
    11,
    9,
    7,
    15,
    7,
    12,
    15,
    9,
    11,
    7,
    13,
    12,
    11,
    13,
    6,
    7,
    14,
    9,
    13,
    15,
    14,
    8,
    13,
    6,
    5,
    12,
    7,
    5,
    11,
    12,
    14,
    15,
    14,
    15,
    9,
    8,
    9,
    14,
    5,
    6,
    8,
    6,
    5,
    12,
    9,
    15,
    5,
    11,
    6,
    8,
    13,
    12,
    5,
    12,
    13,
    14,
    11,
    8,
    5,
    6
];
var sh = [
    8,
    9,
    9,
    11,
    13,
    15,
    15,
    5,
    7,
    7,
    8,
    11,
    14,
    14,
    12,
    6,
    9,
    13,
    15,
    7,
    12,
    8,
    9,
    11,
    7,
    7,
    12,
    7,
    6,
    15,
    13,
    11,
    9,
    7,
    15,
    11,
    8,
    6,
    6,
    14,
    12,
    13,
    5,
    14,
    13,
    13,
    7,
    5,
    15,
    5,
    8,
    11,
    14,
    14,
    6,
    14,
    6,
    9,
    12,
    9,
    12,
    5,
    15,
    8,
    8,
    5,
    12,
    9,
    12,
    5,
    14,
    6,
    8,
    13,
    6,
    5,
    15,
    13,
    11,
    11
];
}),
"[project]/rayls-shield-landing-page/node_modules/hash.js/lib/hash/hmac.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var utils = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/hash.js/lib/hash/utils.js [app-ssr] (ecmascript)");
var assert = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/minimalistic-assert/index.js [app-ssr] (ecmascript)");
function Hmac(hash, key, enc) {
    if (!(this instanceof Hmac)) return new Hmac(hash, key, enc);
    this.Hash = hash;
    this.blockSize = hash.blockSize / 8;
    this.outSize = hash.outSize / 8;
    this.inner = null;
    this.outer = null;
    this._init(utils.toArray(key, enc));
}
module.exports = Hmac;
Hmac.prototype._init = function init(key) {
    // Shorten key, if needed
    if (key.length > this.blockSize) key = new this.Hash().update(key).digest();
    assert(key.length <= this.blockSize);
    // Add padding to key
    for(var i = key.length; i < this.blockSize; i++)key.push(0);
    for(i = 0; i < key.length; i++)key[i] ^= 0x36;
    this.inner = new this.Hash().update(key);
    // 0x36 ^ 0x5c = 0x6a
    for(i = 0; i < key.length; i++)key[i] ^= 0x6a;
    this.outer = new this.Hash().update(key);
};
Hmac.prototype.update = function update(msg, enc) {
    this.inner.update(msg, enc);
    return this;
};
Hmac.prototype.digest = function digest(enc) {
    this.outer.update(this.inner.digest());
    return this.outer.digest(enc);
};
}),
"[project]/rayls-shield-landing-page/node_modules/hash.js/lib/hash.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var hash = exports;
hash.utils = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/hash.js/lib/hash/utils.js [app-ssr] (ecmascript)");
hash.common = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/hash.js/lib/hash/common.js [app-ssr] (ecmascript)");
hash.sha = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/hash.js/lib/hash/sha.js [app-ssr] (ecmascript)");
hash.ripemd = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/hash.js/lib/hash/ripemd.js [app-ssr] (ecmascript)");
hash.hmac = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/hash.js/lib/hash/hmac.js [app-ssr] (ecmascript)");
// Proxy hash functions to the main object
hash.sha1 = hash.sha.sha1;
hash.sha256 = hash.sha.sha256;
hash.sha224 = hash.sha.sha224;
hash.sha384 = hash.sha.sha384;
hash.sha512 = hash.sha.sha512;
hash.ripemd160 = hash.ripemd.ripemd160;
}),
"[project]/rayls-shield-landing-page/node_modules/scrypt-js/scrypt.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

(function(root) {
    const MAX_VALUE = 0x7fffffff;
    // The SHA256 and PBKDF2 implementation are from scrypt-async-js:
    // See: https://github.com/dchest/scrypt-async-js
    function SHA256(m) {
        const K = new Uint32Array([
            0x428a2f98,
            0x71374491,
            0xb5c0fbcf,
            0xe9b5dba5,
            0x3956c25b,
            0x59f111f1,
            0x923f82a4,
            0xab1c5ed5,
            0xd807aa98,
            0x12835b01,
            0x243185be,
            0x550c7dc3,
            0x72be5d74,
            0x80deb1fe,
            0x9bdc06a7,
            0xc19bf174,
            0xe49b69c1,
            0xefbe4786,
            0x0fc19dc6,
            0x240ca1cc,
            0x2de92c6f,
            0x4a7484aa,
            0x5cb0a9dc,
            0x76f988da,
            0x983e5152,
            0xa831c66d,
            0xb00327c8,
            0xbf597fc7,
            0xc6e00bf3,
            0xd5a79147,
            0x06ca6351,
            0x14292967,
            0x27b70a85,
            0x2e1b2138,
            0x4d2c6dfc,
            0x53380d13,
            0x650a7354,
            0x766a0abb,
            0x81c2c92e,
            0x92722c85,
            0xa2bfe8a1,
            0xa81a664b,
            0xc24b8b70,
            0xc76c51a3,
            0xd192e819,
            0xd6990624,
            0xf40e3585,
            0x106aa070,
            0x19a4c116,
            0x1e376c08,
            0x2748774c,
            0x34b0bcb5,
            0x391c0cb3,
            0x4ed8aa4a,
            0x5b9cca4f,
            0x682e6ff3,
            0x748f82ee,
            0x78a5636f,
            0x84c87814,
            0x8cc70208,
            0x90befffa,
            0xa4506ceb,
            0xbef9a3f7,
            0xc67178f2
        ]);
        let h0 = 0x6a09e667, h1 = 0xbb67ae85, h2 = 0x3c6ef372, h3 = 0xa54ff53a;
        let h4 = 0x510e527f, h5 = 0x9b05688c, h6 = 0x1f83d9ab, h7 = 0x5be0cd19;
        const w = new Uint32Array(64);
        function blocks(p) {
            let off = 0, len = p.length;
            while(len >= 64){
                let a = h0, b = h1, c = h2, d = h3, e = h4, f = h5, g = h6, h = h7, u, i, j, t1, t2;
                for(i = 0; i < 16; i++){
                    j = off + i * 4;
                    w[i] = (p[j] & 0xff) << 24 | (p[j + 1] & 0xff) << 16 | (p[j + 2] & 0xff) << 8 | p[j + 3] & 0xff;
                }
                for(i = 16; i < 64; i++){
                    u = w[i - 2];
                    t1 = (u >>> 17 | u << 32 - 17) ^ (u >>> 19 | u << 32 - 19) ^ u >>> 10;
                    u = w[i - 15];
                    t2 = (u >>> 7 | u << 32 - 7) ^ (u >>> 18 | u << 32 - 18) ^ u >>> 3;
                    w[i] = (t1 + w[i - 7] | 0) + (t2 + w[i - 16] | 0) | 0;
                }
                for(i = 0; i < 64; i++){
                    t1 = (((e >>> 6 | e << 32 - 6) ^ (e >>> 11 | e << 32 - 11) ^ (e >>> 25 | e << 32 - 25)) + (e & f ^ ~e & g) | 0) + (h + (K[i] + w[i] | 0) | 0) | 0;
                    t2 = ((a >>> 2 | a << 32 - 2) ^ (a >>> 13 | a << 32 - 13) ^ (a >>> 22 | a << 32 - 22)) + (a & b ^ a & c ^ b & c) | 0;
                    h = g;
                    g = f;
                    f = e;
                    e = d + t1 | 0;
                    d = c;
                    c = b;
                    b = a;
                    a = t1 + t2 | 0;
                }
                h0 = h0 + a | 0;
                h1 = h1 + b | 0;
                h2 = h2 + c | 0;
                h3 = h3 + d | 0;
                h4 = h4 + e | 0;
                h5 = h5 + f | 0;
                h6 = h6 + g | 0;
                h7 = h7 + h | 0;
                off += 64;
                len -= 64;
            }
        }
        blocks(m);
        let i, bytesLeft = m.length % 64, bitLenHi = m.length / 0x20000000 | 0, bitLenLo = m.length << 3, numZeros = bytesLeft < 56 ? 56 : 120, p = m.slice(m.length - bytesLeft, m.length);
        p.push(0x80);
        for(i = bytesLeft + 1; i < numZeros; i++){
            p.push(0);
        }
        p.push(bitLenHi >>> 24 & 0xff);
        p.push(bitLenHi >>> 16 & 0xff);
        p.push(bitLenHi >>> 8 & 0xff);
        p.push(bitLenHi >>> 0 & 0xff);
        p.push(bitLenLo >>> 24 & 0xff);
        p.push(bitLenLo >>> 16 & 0xff);
        p.push(bitLenLo >>> 8 & 0xff);
        p.push(bitLenLo >>> 0 & 0xff);
        blocks(p);
        return [
            h0 >>> 24 & 0xff,
            h0 >>> 16 & 0xff,
            h0 >>> 8 & 0xff,
            h0 >>> 0 & 0xff,
            h1 >>> 24 & 0xff,
            h1 >>> 16 & 0xff,
            h1 >>> 8 & 0xff,
            h1 >>> 0 & 0xff,
            h2 >>> 24 & 0xff,
            h2 >>> 16 & 0xff,
            h2 >>> 8 & 0xff,
            h2 >>> 0 & 0xff,
            h3 >>> 24 & 0xff,
            h3 >>> 16 & 0xff,
            h3 >>> 8 & 0xff,
            h3 >>> 0 & 0xff,
            h4 >>> 24 & 0xff,
            h4 >>> 16 & 0xff,
            h4 >>> 8 & 0xff,
            h4 >>> 0 & 0xff,
            h5 >>> 24 & 0xff,
            h5 >>> 16 & 0xff,
            h5 >>> 8 & 0xff,
            h5 >>> 0 & 0xff,
            h6 >>> 24 & 0xff,
            h6 >>> 16 & 0xff,
            h6 >>> 8 & 0xff,
            h6 >>> 0 & 0xff,
            h7 >>> 24 & 0xff,
            h7 >>> 16 & 0xff,
            h7 >>> 8 & 0xff,
            h7 >>> 0 & 0xff
        ];
    }
    function PBKDF2_HMAC_SHA256_OneIter(password, salt, dkLen) {
        // compress password if it's longer than hash block length
        password = password.length <= 64 ? password : SHA256(password);
        const innerLen = 64 + salt.length + 4;
        const inner = new Array(innerLen);
        const outerKey = new Array(64);
        let i;
        let dk = [];
        // inner = (password ^ ipad) || salt || counter
        for(i = 0; i < 64; i++){
            inner[i] = 0x36;
        }
        for(i = 0; i < password.length; i++){
            inner[i] ^= password[i];
        }
        for(i = 0; i < salt.length; i++){
            inner[64 + i] = salt[i];
        }
        for(i = innerLen - 4; i < innerLen; i++){
            inner[i] = 0;
        }
        // outerKey = password ^ opad
        for(i = 0; i < 64; i++)outerKey[i] = 0x5c;
        for(i = 0; i < password.length; i++)outerKey[i] ^= password[i];
        // increments counter inside inner
        function incrementCounter() {
            for(let i = innerLen - 1; i >= innerLen - 4; i--){
                inner[i]++;
                if (inner[i] <= 0xff) return;
                inner[i] = 0;
            }
        }
        // output blocks = SHA256(outerKey || SHA256(inner)) ...
        while(dkLen >= 32){
            incrementCounter();
            dk = dk.concat(SHA256(outerKey.concat(SHA256(inner))));
            dkLen -= 32;
        }
        if (dkLen > 0) {
            incrementCounter();
            dk = dk.concat(SHA256(outerKey.concat(SHA256(inner))).slice(0, dkLen));
        }
        return dk;
    }
    // The following is an adaptation of scryptsy
    // See: https://www.npmjs.com/package/scryptsy
    function blockmix_salsa8(BY, Yi, r, x, _X) {
        let i;
        arraycopy(BY, (2 * r - 1) * 16, _X, 0, 16);
        for(i = 0; i < 2 * r; i++){
            blockxor(BY, i * 16, _X, 16);
            salsa20_8(_X, x);
            arraycopy(_X, 0, BY, Yi + i * 16, 16);
        }
        for(i = 0; i < r; i++){
            arraycopy(BY, Yi + i * 2 * 16, BY, i * 16, 16);
        }
        for(i = 0; i < r; i++){
            arraycopy(BY, Yi + (i * 2 + 1) * 16, BY, (i + r) * 16, 16);
        }
    }
    function R(a, b) {
        return a << b | a >>> 32 - b;
    }
    function salsa20_8(B, x) {
        arraycopy(B, 0, x, 0, 16);
        for(let i = 8; i > 0; i -= 2){
            x[4] ^= R(x[0] + x[12], 7);
            x[8] ^= R(x[4] + x[0], 9);
            x[12] ^= R(x[8] + x[4], 13);
            x[0] ^= R(x[12] + x[8], 18);
            x[9] ^= R(x[5] + x[1], 7);
            x[13] ^= R(x[9] + x[5], 9);
            x[1] ^= R(x[13] + x[9], 13);
            x[5] ^= R(x[1] + x[13], 18);
            x[14] ^= R(x[10] + x[6], 7);
            x[2] ^= R(x[14] + x[10], 9);
            x[6] ^= R(x[2] + x[14], 13);
            x[10] ^= R(x[6] + x[2], 18);
            x[3] ^= R(x[15] + x[11], 7);
            x[7] ^= R(x[3] + x[15], 9);
            x[11] ^= R(x[7] + x[3], 13);
            x[15] ^= R(x[11] + x[7], 18);
            x[1] ^= R(x[0] + x[3], 7);
            x[2] ^= R(x[1] + x[0], 9);
            x[3] ^= R(x[2] + x[1], 13);
            x[0] ^= R(x[3] + x[2], 18);
            x[6] ^= R(x[5] + x[4], 7);
            x[7] ^= R(x[6] + x[5], 9);
            x[4] ^= R(x[7] + x[6], 13);
            x[5] ^= R(x[4] + x[7], 18);
            x[11] ^= R(x[10] + x[9], 7);
            x[8] ^= R(x[11] + x[10], 9);
            x[9] ^= R(x[8] + x[11], 13);
            x[10] ^= R(x[9] + x[8], 18);
            x[12] ^= R(x[15] + x[14], 7);
            x[13] ^= R(x[12] + x[15], 9);
            x[14] ^= R(x[13] + x[12], 13);
            x[15] ^= R(x[14] + x[13], 18);
        }
        for(let i = 0; i < 16; ++i){
            B[i] += x[i];
        }
    }
    // naive approach... going back to loop unrolling may yield additional performance
    function blockxor(S, Si, D, len) {
        for(let i = 0; i < len; i++){
            D[i] ^= S[Si + i];
        }
    }
    function arraycopy(src, srcPos, dest, destPos, length) {
        while(length--){
            dest[destPos++] = src[srcPos++];
        }
    }
    function checkBufferish(o) {
        if (!o || typeof o.length !== 'number') {
            return false;
        }
        for(let i = 0; i < o.length; i++){
            const v = o[i];
            if (typeof v !== 'number' || v % 1 || v < 0 || v >= 256) {
                return false;
            }
        }
        return true;
    }
    function ensureInteger(value, name) {
        if (typeof value !== "number" || value % 1) {
            throw new Error('invalid ' + name);
        }
        return value;
    }
    // N = Cpu cost, r = Memory cost, p = parallelization cost
    // callback(error, progress, key)
    function _scrypt(password, salt, N, r, p, dkLen, callback) {
        N = ensureInteger(N, 'N');
        r = ensureInteger(r, 'r');
        p = ensureInteger(p, 'p');
        dkLen = ensureInteger(dkLen, 'dkLen');
        if (N === 0 || (N & N - 1) !== 0) {
            throw new Error('N must be power of 2');
        }
        if (N > MAX_VALUE / 128 / r) {
            throw new Error('N too large');
        }
        if (r > MAX_VALUE / 128 / p) {
            throw new Error('r too large');
        }
        if (!checkBufferish(password)) {
            throw new Error('password must be an array or buffer');
        }
        password = Array.prototype.slice.call(password);
        if (!checkBufferish(salt)) {
            throw new Error('salt must be an array or buffer');
        }
        salt = Array.prototype.slice.call(salt);
        let b = PBKDF2_HMAC_SHA256_OneIter(password, salt, p * 128 * r);
        const B = new Uint32Array(p * 32 * r);
        for(let i = 0; i < B.length; i++){
            const j = i * 4;
            B[i] = (b[j + 3] & 0xff) << 24 | (b[j + 2] & 0xff) << 16 | (b[j + 1] & 0xff) << 8 | (b[j + 0] & 0xff) << 0;
        }
        const XY = new Uint32Array(64 * r);
        const V = new Uint32Array(32 * r * N);
        const Yi = 32 * r;
        // scratch space
        const x = new Uint32Array(16); // salsa20_8
        const _X = new Uint32Array(16); // blockmix_salsa8
        const totalOps = p * N * 2;
        let currentOp = 0;
        let lastPercent10 = null;
        // Set this to true to abandon the scrypt on the next step
        let stop = false;
        // State information
        let state = 0;
        let i0 = 0, i1;
        let Bi;
        // How many blockmix_salsa8 can we do per step?
        const limit = callback ? parseInt(1000 / r) : 0xffffffff;
        // Trick from scrypt-async; if there is a setImmediate shim in place, use it
        const nextTick = typeof setImmediate !== 'undefined' ? setImmediate : setTimeout;
        // This is really all I changed; making scryptsy a state machine so we occasionally
        // stop and give other evnts on the evnt loop a chance to run. ~RicMoo
        const incrementalSMix = function() {
            if (stop) {
                return callback(new Error('cancelled'), currentOp / totalOps);
            }
            let steps;
            switch(state){
                case 0:
                    // for (var i = 0; i < p; i++)...
                    Bi = i0 * 32 * r;
                    arraycopy(B, Bi, XY, 0, Yi); // ROMix - 1
                    state = 1; // Move to ROMix 2
                    i1 = 0;
                // Fall through
                case 1:
                    // Run up to 1000 steps of the first inner smix loop
                    steps = N - i1;
                    if (steps > limit) {
                        steps = limit;
                    }
                    for(let i = 0; i < steps; i++){
                        arraycopy(XY, 0, V, (i1 + i) * Yi, Yi); // ROMix - 3
                        blockmix_salsa8(XY, Yi, r, x, _X); // ROMix - 4
                    }
                    // for (var i = 0; i < N; i++)
                    i1 += steps;
                    currentOp += steps;
                    if (callback) {
                        // Call the callback with the progress (optionally stopping us)
                        const percent10 = parseInt(1000 * currentOp / totalOps);
                        if (percent10 !== lastPercent10) {
                            stop = callback(null, currentOp / totalOps);
                            if (stop) {
                                break;
                            }
                            lastPercent10 = percent10;
                        }
                    }
                    if (i1 < N) {
                        break;
                    }
                    i1 = 0; // Move to ROMix 6
                    state = 2;
                // Fall through
                case 2:
                    // Run up to 1000 steps of the second inner smix loop
                    steps = N - i1;
                    if (steps > limit) {
                        steps = limit;
                    }
                    for(let i = 0; i < steps; i++){
                        const offset = (2 * r - 1) * 16; // ROMix - 7
                        const j = XY[offset] & N - 1;
                        blockxor(V, j * Yi, XY, Yi); // ROMix - 8 (inner)
                        blockmix_salsa8(XY, Yi, r, x, _X); // ROMix - 9 (outer)
                    }
                    // for (var i = 0; i < N; i++)...
                    i1 += steps;
                    currentOp += steps;
                    // Call the callback with the progress (optionally stopping us)
                    if (callback) {
                        const percent10 = parseInt(1000 * currentOp / totalOps);
                        if (percent10 !== lastPercent10) {
                            stop = callback(null, currentOp / totalOps);
                            if (stop) {
                                break;
                            }
                            lastPercent10 = percent10;
                        }
                    }
                    if (i1 < N) {
                        break;
                    }
                    arraycopy(XY, 0, B, Bi, Yi); // ROMix - 10
                    // for (var i = 0; i < p; i++)...
                    i0++;
                    if (i0 < p) {
                        state = 0;
                        break;
                    }
                    b = [];
                    for(let i = 0; i < B.length; i++){
                        b.push(B[i] >> 0 & 0xff);
                        b.push(B[i] >> 8 & 0xff);
                        b.push(B[i] >> 16 & 0xff);
                        b.push(B[i] >> 24 & 0xff);
                    }
                    const derivedKey = PBKDF2_HMAC_SHA256_OneIter(password, b, dkLen);
                    // Send the result to the callback
                    if (callback) {
                        callback(null, 1.0, derivedKey);
                    }
                    // Done; don't break (which would reschedule)
                    return derivedKey;
            }
            // Schedule the next steps
            if (callback) {
                nextTick(incrementalSMix);
            }
        };
        // Run the smix state machine until completion
        if (!callback) {
            while(true){
                const derivedKey = incrementalSMix();
                if (derivedKey != undefined) {
                    return derivedKey;
                }
            }
        }
        // Bootstrap the async incremental smix
        incrementalSMix();
    }
    const lib = {
        scrypt: function(password, salt, N, r, p, dkLen, progressCallback) {
            return new Promise(function(resolve, reject) {
                let lastProgress = 0;
                if (progressCallback) {
                    progressCallback(0);
                }
                _scrypt(password, salt, N, r, p, dkLen, function(error, progress, key) {
                    if (error) {
                        reject(error);
                    } else if (key) {
                        if (progressCallback && lastProgress !== 1) {
                            progressCallback(1);
                        }
                        resolve(new Uint8Array(key));
                    } else if (progressCallback && progress !== lastProgress) {
                        lastProgress = progress;
                        return progressCallback(progress);
                    }
                });
            });
        },
        syncScrypt: function(password, salt, N, r, p, dkLen) {
            return new Uint8Array(_scrypt(password, salt, N, r, p, dkLen));
        }
    };
    // node.js
    if ("TURBOPACK compile-time truthy", 1) {
        module.exports = lib;
    // RequireJS/AMD
    // http://www.requirejs.org/docs/api.html
    // https://github.com/amdjs/amdjs-api/wiki/AMD
    } else //TURBOPACK unreachable
    ;
})(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/rayls-shield-landing-page/node_modules/bech32/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var ALPHABET = 'qpzry9x8gf2tvdw0s3jn54khce6mua7l';
// pre-compute lookup table
var ALPHABET_MAP = {};
for(var z = 0; z < ALPHABET.length; z++){
    var x = ALPHABET.charAt(z);
    if (ALPHABET_MAP[x] !== undefined) throw new TypeError(x + ' is ambiguous');
    ALPHABET_MAP[x] = z;
}
function polymodStep(pre) {
    var b = pre >> 25;
    return (pre & 0x1FFFFFF) << 5 ^ -(b >> 0 & 1) & 0x3b6a57b2 ^ -(b >> 1 & 1) & 0x26508e6d ^ -(b >> 2 & 1) & 0x1ea119fa ^ -(b >> 3 & 1) & 0x3d4233dd ^ -(b >> 4 & 1) & 0x2a1462b3;
}
function prefixChk(prefix) {
    var chk = 1;
    for(var i = 0; i < prefix.length; ++i){
        var c = prefix.charCodeAt(i);
        if (c < 33 || c > 126) return 'Invalid prefix (' + prefix + ')';
        chk = polymodStep(chk) ^ c >> 5;
    }
    chk = polymodStep(chk);
    for(i = 0; i < prefix.length; ++i){
        var v = prefix.charCodeAt(i);
        chk = polymodStep(chk) ^ v & 0x1f;
    }
    return chk;
}
function encode(prefix, words, LIMIT) {
    LIMIT = LIMIT || 90;
    if (prefix.length + 7 + words.length > LIMIT) throw new TypeError('Exceeds length limit');
    prefix = prefix.toLowerCase();
    // determine chk mod
    var chk = prefixChk(prefix);
    if (typeof chk === 'string') throw new Error(chk);
    var result = prefix + '1';
    for(var i = 0; i < words.length; ++i){
        var x = words[i];
        if (x >> 5 !== 0) throw new Error('Non 5-bit word');
        chk = polymodStep(chk) ^ x;
        result += ALPHABET.charAt(x);
    }
    for(i = 0; i < 6; ++i){
        chk = polymodStep(chk);
    }
    chk ^= 1;
    for(i = 0; i < 6; ++i){
        var v = chk >> (5 - i) * 5 & 0x1f;
        result += ALPHABET.charAt(v);
    }
    return result;
}
function __decode(str, LIMIT) {
    LIMIT = LIMIT || 90;
    if (str.length < 8) return str + ' too short';
    if (str.length > LIMIT) return 'Exceeds length limit';
    // don't allow mixed case
    var lowered = str.toLowerCase();
    var uppered = str.toUpperCase();
    if (str !== lowered && str !== uppered) return 'Mixed-case string ' + str;
    str = lowered;
    var split = str.lastIndexOf('1');
    if (split === -1) return 'No separator character for ' + str;
    if (split === 0) return 'Missing prefix for ' + str;
    var prefix = str.slice(0, split);
    var wordChars = str.slice(split + 1);
    if (wordChars.length < 6) return 'Data too short';
    var chk = prefixChk(prefix);
    if (typeof chk === 'string') return chk;
    var words = [];
    for(var i = 0; i < wordChars.length; ++i){
        var c = wordChars.charAt(i);
        var v = ALPHABET_MAP[c];
        if (v === undefined) return 'Unknown character ' + c;
        chk = polymodStep(chk) ^ v;
        // not in the checksum?
        if (i + 6 >= wordChars.length) continue;
        words.push(v);
    }
    if (chk !== 1) return 'Invalid checksum for ' + str;
    return {
        prefix: prefix,
        words: words
    };
}
function decodeUnsafe() {
    var res = __decode.apply(null, arguments);
    if (typeof res === 'object') return res;
}
function decode(str) {
    var res = __decode.apply(null, arguments);
    if (typeof res === 'object') return res;
    throw new Error(res);
}
function convert(data, inBits, outBits, pad) {
    var value = 0;
    var bits = 0;
    var maxV = (1 << outBits) - 1;
    var result = [];
    for(var i = 0; i < data.length; ++i){
        value = value << inBits | data[i];
        bits += inBits;
        while(bits >= outBits){
            bits -= outBits;
            result.push(value >> bits & maxV);
        }
    }
    if (pad) {
        if (bits > 0) {
            result.push(value << outBits - bits & maxV);
        }
    } else {
        if (bits >= inBits) return 'Excess padding';
        if (value << outBits - bits & maxV) return 'Non-zero padding';
    }
    return result;
}
function toWordsUnsafe(bytes) {
    var res = convert(bytes, 8, 5, true);
    if (Array.isArray(res)) return res;
}
function toWords(bytes) {
    var res = convert(bytes, 8, 5, true);
    if (Array.isArray(res)) return res;
    throw new Error(res);
}
function fromWordsUnsafe(words) {
    var res = convert(words, 5, 8, false);
    if (Array.isArray(res)) return res;
}
function fromWords(words) {
    var res = convert(words, 5, 8, false);
    if (Array.isArray(res)) return res;
    throw new Error(res);
}
module.exports = {
    decodeUnsafe: decodeUnsafe,
    decode: decode,
    encode: encode,
    toWordsUnsafe: toWordsUnsafe,
    toWords: toWords,
    fromWordsUnsafe: fromWordsUnsafe,
    fromWords: fromWords
};
}),
"[project]/rayls-shield-landing-page/node_modules/fastfile/src/osfile.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "open",
    ()=>open
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
;
async function open(fileName, openFlags, cacheSize, pageSize) {
    cacheSize = cacheSize || 4096 * 64;
    if (typeof openFlags !== "number" && [
        "w+",
        "wx+",
        "r",
        "ax+",
        "a+"
    ].indexOf(openFlags) < 0) throw new Error("Invalid open option");
    const fd = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].promises.open(fileName, openFlags);
    const stats = await fd.stat();
    return new FastFile(fd, stats, cacheSize, pageSize, fileName);
}
class FastFile {
    constructor(fd, stats, cacheSize, pageSize, fileName){
        this.fileName = fileName;
        this.fd = fd;
        this.pos = 0;
        this.pageSize = pageSize || 1 << 8;
        while(this.pageSize < stats.blksize){
            this.pageSize *= 2;
        }
        this.totalSize = stats.size;
        this.totalPages = Math.floor((stats.size - 1) / this.pageSize) + 1;
        this.maxPagesLoaded = Math.floor(cacheSize / this.pageSize) + 1;
        this.pages = {};
        this.pendingLoads = [];
        this.writing = false;
        this.reading = false;
        this.avBuffs = [];
        this.history = {};
    }
    _loadPage(p) {
        const self = this;
        const P = new Promise((resolve, reject)=>{
            self.pendingLoads.push({
                page: p,
                resolve: resolve,
                reject: reject
            });
        });
        self.__statusPage("After Load request: ", p);
        return P;
    }
    __statusPage(s, p) {
        const logEntry = [];
        const self = this;
        if (!self.logHistory) return;
        logEntry.push("==" + s + " " + p);
        let S = "";
        for(let i = 0; i < self.pendingLoads.length; i++){
            if (self.pendingLoads[i].page == p) S = S + " " + i;
        }
        if (S) logEntry.push("Pending loads:" + S);
        if (typeof self.pages[p] != "undefined") {
            const page = self.pages[p];
            logEntry.push("Loaded");
            logEntry.push("pendingOps: " + page.pendingOps);
            if (page.loading) logEntry.push("loading: " + page.loading);
            if (page.writing) logEntry.push("writing");
            if (page.dirty) logEntry.push("dirty");
        }
        logEntry.push("==");
        if (!self.history[p]) self.history[p] = [];
        self.history[p].push(logEntry);
    }
    __printHistory(p) {
        const self = this;
        if (!self.history[p]) console.log("Empty History ", p);
        console.log("History " + p);
        for(let i = 0; i < self.history[p].length; i++){
            for(let j = 0; j < self.history[p][i].length; j++){
                console.log("-> " + self.history[p][i][j]);
            }
        }
    }
    _triggerLoad() {
        const self = this;
        if (self.reading) return;
        if (self.pendingLoads.length == 0) return;
        const pageIdxs = Object.keys(self.pages);
        const deletablePages = [];
        for(let i = 0; i < pageIdxs.length; i++){
            const page = self.pages[parseInt(pageIdxs[i])];
            if (page.dirty == false && page.pendingOps == 0 && !page.writing && !page.loading) deletablePages.push(parseInt(pageIdxs[i]));
        }
        let freePages = self.maxPagesLoaded - pageIdxs.length;
        const ops = [];
        // while pending loads and
        //     the page is loaded or I can recover one.
        while(self.pendingLoads.length > 0 && (typeof self.pages[self.pendingLoads[0].page] != "undefined" || freePages > 0 || deletablePages.length > 0)){
            const load = self.pendingLoads.shift();
            if (typeof self.pages[load.page] != "undefined") {
                self.pages[load.page].pendingOps++;
                const idx = deletablePages.indexOf(load.page);
                if (idx >= 0) deletablePages.splice(idx, 1);
                if (self.pages[load.page].loading) {
                    self.pages[load.page].loading.push(load);
                } else {
                    load.resolve();
                }
                self.__statusPage("After Load (cached): ", load.page);
            } else {
                if (freePages) {
                    freePages--;
                } else {
                    const fp = deletablePages.shift();
                    self.__statusPage("Before Unload: ", fp);
                    self.avBuffs.unshift(self.pages[fp]);
                    delete self.pages[fp];
                    self.__statusPage("After Unload: ", fp);
                }
                if (load.page >= self.totalPages) {
                    self.pages[load.page] = getNewPage();
                    load.resolve();
                    self.__statusPage("After Load (new): ", load.page);
                } else {
                    self.reading = true;
                    self.pages[load.page] = getNewPage();
                    self.pages[load.page].loading = [
                        load
                    ];
                    ops.push(self.fd.read(self.pages[load.page].buff, 0, self.pageSize, load.page * self.pageSize).then((res)=>{
                        self.pages[load.page].size = res.bytesRead;
                        const loading = self.pages[load.page].loading;
                        delete self.pages[load.page].loading;
                        for(let i = 0; i < loading.length; i++){
                            loading[i].resolve();
                        }
                        self.__statusPage("After Load (loaded): ", load.page);
                        return res;
                    }, (err)=>{
                        load.reject(err);
                    }));
                    self.__statusPage("After Load (loading): ", load.page);
                }
            }
        }
        // if (ops.length>1) console.log(ops.length);
        Promise.all(ops).then(()=>{
            self.reading = false;
            if (self.pendingLoads.length > 0) setImmediate(self._triggerLoad.bind(self));
            self._tryClose();
        });
        function getNewPage() {
            if (self.avBuffs.length > 0) {
                const p = self.avBuffs.shift();
                p.dirty = false;
                p.pendingOps = 1;
                p.size = 0;
                return p;
            } else {
                return {
                    dirty: false,
                    buff: new Uint8Array(self.pageSize),
                    pendingOps: 1,
                    size: 0
                };
            }
        }
    }
    _triggerWrite() {
        const self = this;
        if (self.writing) return;
        const pageIdxs = Object.keys(self.pages);
        const ops = [];
        for(let i = 0; i < pageIdxs.length; i++){
            const page = self.pages[parseInt(pageIdxs[i])];
            if (page.dirty) {
                page.dirty = false;
                page.writing = true;
                self.writing = true;
                ops.push(self.fd.write(page.buff, 0, page.size, parseInt(pageIdxs[i]) * self.pageSize).then(()=>{
                    page.writing = false;
                    return;
                }, (err)=>{
                    console.log("ERROR Writing: " + err);
                    self.error = err;
                    self._tryClose();
                }));
            }
        }
        if (self.writing) {
            Promise.all(ops).then(()=>{
                self.writing = false;
                setImmediate(self._triggerWrite.bind(self));
                self._tryClose();
                if (self.pendingLoads.length > 0) setImmediate(self._triggerLoad.bind(self));
            });
        }
    }
    _getDirtyPage() {
        for(let p in this.pages){
            if (this.pages[p].dirty) return p;
        }
        return -1;
    }
    async write(buff, pos) {
        if (buff.byteLength == 0) return;
        const self = this;
        /*
        if (buff.byteLength > self.pageSize*self.maxPagesLoaded*0.8) {
            const cacheSize = Math.floor(buff.byteLength * 1.1);
            this.maxPagesLoaded = Math.floor( cacheSize / self.pageSize)+1;
        }
*/ if (typeof pos == "undefined") pos = self.pos;
        self.pos = pos + buff.byteLength;
        if (self.totalSize < pos + buff.byteLength) self.totalSize = pos + buff.byteLength;
        if (self.pendingClose) throw new Error("Writing a closing file");
        const firstPage = Math.floor(pos / self.pageSize);
        const lastPage = Math.floor((pos + buff.byteLength - 1) / self.pageSize);
        const pagePromises = [];
        for(let i = firstPage; i <= lastPage; i++)pagePromises.push(self._loadPage(i));
        self._triggerLoad();
        let p = firstPage;
        let o = pos % self.pageSize;
        let r = buff.byteLength;
        while(r > 0){
            await pagePromises[p - firstPage];
            const l = o + r > self.pageSize ? self.pageSize - o : r;
            const srcView = buff.slice(buff.byteLength - r, buff.byteLength - r + l);
            const dstView = new Uint8Array(self.pages[p].buff.buffer, o, l);
            dstView.set(srcView);
            self.pages[p].dirty = true;
            self.pages[p].pendingOps--;
            self.pages[p].size = Math.max(o + l, self.pages[p].size);
            if (p >= self.totalPages) {
                self.totalPages = p + 1;
            }
            r = r - l;
            p++;
            o = 0;
            if (!self.writing) setImmediate(self._triggerWrite.bind(self));
        }
    }
    async read(len, pos) {
        const self = this;
        let buff = new Uint8Array(len);
        await self.readToBuffer(buff, 0, len, pos);
        return buff;
    }
    async readToBuffer(buffDst, offset, len, pos) {
        if (len == 0) {
            return;
        }
        const self = this;
        if (len > self.pageSize * self.maxPagesLoaded * 0.8) {
            const cacheSize = Math.floor(len * 1.1);
            this.maxPagesLoaded = Math.floor(cacheSize / self.pageSize) + 1;
        }
        if (typeof pos == "undefined") pos = self.pos;
        self.pos = pos + len;
        if (self.pendingClose) throw new Error("Reading a closing file");
        const firstPage = Math.floor(pos / self.pageSize);
        const lastPage = Math.floor((pos + len - 1) / self.pageSize);
        const pagePromises = [];
        for(let i = firstPage; i <= lastPage; i++)pagePromises.push(self._loadPage(i));
        self._triggerLoad();
        let p = firstPage;
        let o = pos % self.pageSize;
        // Remaining bytes to read
        let r = pos + len > self.totalSize ? len - (pos + len - self.totalSize) : len;
        while(r > 0){
            await pagePromises[p - firstPage];
            self.__statusPage("After Await (read): ", p);
            // bytes to copy from this page
            const l = o + r > self.pageSize ? self.pageSize - o : r;
            const srcView = new Uint8Array(self.pages[p].buff.buffer, self.pages[p].buff.byteOffset + o, l);
            buffDst.set(srcView, offset + len - r);
            self.pages[p].pendingOps--;
            self.__statusPage("After Op done: ", p);
            r = r - l;
            p++;
            o = 0;
            if (self.pendingLoads.length > 0) setImmediate(self._triggerLoad.bind(self));
        }
        this.pos = pos + len;
    }
    _tryClose() {
        const self = this;
        if (!self.pendingClose) return;
        if (self.error) {
            self.pendingCloseReject(self.error);
        }
        const p = self._getDirtyPage();
        if (p >= 0 || self.writing || self.reading || self.pendingLoads.length > 0) return;
        self.pendingClose();
    }
    close() {
        const self = this;
        if (self.pendingClose) throw new Error("Closing the file twice");
        return new Promise((resolve, reject)=>{
            self.pendingClose = resolve;
            self.pendingCloseReject = reject;
            self._tryClose();
        }).then(()=>{
            self.fd.close();
        }, (err)=>{
            self.fd.close();
            throw err;
        });
    }
    async discard() {
        const self = this;
        await self.close();
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].promises.unlink(this.fileName);
    }
    async writeULE32(v, pos) {
        const self = this;
        const tmpBuff32 = new Uint8Array(4);
        const tmpBuff32v = new DataView(tmpBuff32.buffer);
        tmpBuff32v.setUint32(0, v, true);
        await self.write(tmpBuff32, pos);
    }
    async writeUBE32(v, pos) {
        const self = this;
        const tmpBuff32 = new Uint8Array(4);
        const tmpBuff32v = new DataView(tmpBuff32.buffer);
        tmpBuff32v.setUint32(0, v, false);
        await self.write(tmpBuff32, pos);
    }
    async writeULE64(v, pos) {
        const self = this;
        const tmpBuff64 = new Uint8Array(8);
        const tmpBuff64v = new DataView(tmpBuff64.buffer);
        tmpBuff64v.setUint32(0, v & 0xFFFFFFFF, true);
        tmpBuff64v.setUint32(4, Math.floor(v / 0x100000000), true);
        await self.write(tmpBuff64, pos);
    }
    async readULE32(pos) {
        const self = this;
        const b = await self.read(4, pos);
        const view = new Uint32Array(b.buffer);
        return view[0];
    }
    async readUBE32(pos) {
        const self = this;
        const b = await self.read(4, pos);
        const view = new DataView(b.buffer);
        return view.getUint32(0, false);
    }
    async readULE64(pos) {
        const self = this;
        const b = await self.read(8, pos);
        const view = new Uint32Array(b.buffer);
        return view[1] * 0x100000000 + view[0];
    }
    async readString(pos) {
        const self = this;
        if (self.pendingClose) {
            throw new Error("Reading a closing file");
        }
        let currentPosition = typeof pos == "undefined" ? self.pos : pos;
        let currentPage = Math.floor(currentPosition / self.pageSize);
        let endOfStringFound = false;
        let str = "";
        while(!endOfStringFound){
            //Read page
            let pagePromise = self._loadPage(currentPage);
            self._triggerLoad();
            await pagePromise;
            self.__statusPage("After Await (read): ", currentPage);
            let offsetOnPage = currentPosition % self.pageSize;
            const dataArray = new Uint8Array(self.pages[currentPage].buff.buffer, self.pages[currentPage].buff.byteOffset + offsetOnPage, self.pageSize - offsetOnPage);
            let indexEndOfString = dataArray.findIndex((element)=>element === 0);
            endOfStringFound = indexEndOfString !== -1;
            if (endOfStringFound) {
                str += new TextDecoder().decode(dataArray.slice(0, indexEndOfString));
                self.pos = currentPage * this.pageSize + offsetOnPage + indexEndOfString + 1;
            } else {
                str += new TextDecoder().decode(dataArray);
                self.pos = currentPage * this.pageSize + offsetOnPage + dataArray.length;
            }
            self.pages[currentPage].pendingOps--;
            self.__statusPage("After Op done: ", currentPage);
            currentPosition = self.pos;
            currentPage++;
            if (self.pendingLoads.length > 0) setImmediate(self._triggerLoad.bind(self));
        }
        return str;
    }
}
}),
"[project]/rayls-shield-landing-page/node_modules/fastfile/src/memfile.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createNew",
    ()=>createNew,
    "readExisting",
    ()=>readExisting,
    "readWriteExisting",
    ()=>readWriteExisting
]);
function createNew(o) {
    const initialSize = o.initialSize || 1 << 20;
    const fd = new MemFile();
    fd.o = o;
    fd.o.data = new Uint8Array(initialSize);
    fd.allocSize = initialSize;
    fd.totalSize = 0;
    fd.readOnly = false;
    fd.pos = 0;
    return fd;
}
function readExisting(o) {
    const fd = new MemFile();
    fd.o = o;
    fd.allocSize = o.data.byteLength;
    fd.totalSize = o.data.byteLength;
    fd.readOnly = true;
    fd.pos = 0;
    return fd;
}
function readWriteExisting(o) {
    const fd = new MemFile();
    fd.o = o;
    fd.allocSize = o.data.byteLength;
    fd.totalSize = o.data.byteLength;
    fd.readOnly = false;
    fd.pos = 0;
    return fd;
}
const tmpBuff32 = new Uint8Array(4);
const tmpBuff32v = new DataView(tmpBuff32.buffer);
const tmpBuff64 = new Uint8Array(8);
const tmpBuff64v = new DataView(tmpBuff64.buffer);
class MemFile {
    constructor(){
        this.pageSize = 1 << 14; // for compatibility
    }
    _resizeIfNeeded(newLen) {
        if (newLen > this.allocSize) {
            const newAllocSize = Math.max(this.allocSize + (1 << 20), Math.floor(this.allocSize * 1.1), newLen);
            const newData = new Uint8Array(newAllocSize);
            newData.set(this.o.data);
            this.o.data = newData;
            this.allocSize = newAllocSize;
        }
    }
    async write(buff, pos) {
        const self = this;
        if (typeof pos == "undefined") pos = self.pos;
        if (this.readOnly) throw new Error("Writing a read only file");
        this._resizeIfNeeded(pos + buff.byteLength);
        this.o.data.set(buff.slice(), pos);
        if (pos + buff.byteLength > this.totalSize) this.totalSize = pos + buff.byteLength;
        this.pos = pos + buff.byteLength;
    }
    async readToBuffer(buffDest, offset, len, pos) {
        const self = this;
        if (typeof pos == "undefined") pos = self.pos;
        if (this.readOnly) {
            if (pos + len > this.totalSize) throw new Error("Reading out of bounds");
        }
        this._resizeIfNeeded(pos + len);
        const buffSrc = new Uint8Array(this.o.data.buffer, this.o.data.byteOffset + pos, len);
        buffDest.set(buffSrc, offset);
        this.pos = pos + len;
    }
    async read(len, pos) {
        const self = this;
        const buff = new Uint8Array(len);
        await self.readToBuffer(buff, 0, len, pos);
        return buff;
    }
    close() {
        if (this.o.data.byteLength != this.totalSize) {
            this.o.data = this.o.data.slice(0, this.totalSize);
        }
    }
    async discard() {}
    async writeULE32(v, pos) {
        const self = this;
        tmpBuff32v.setUint32(0, v, true);
        await self.write(tmpBuff32, pos);
    }
    async writeUBE32(v, pos) {
        const self = this;
        tmpBuff32v.setUint32(0, v, false);
        await self.write(tmpBuff32, pos);
    }
    async writeULE64(v, pos) {
        const self = this;
        tmpBuff64v.setUint32(0, v & 0xFFFFFFFF, true);
        tmpBuff64v.setUint32(4, Math.floor(v / 0x100000000), true);
        await self.write(tmpBuff64, pos);
    }
    async readULE32(pos) {
        const self = this;
        const b = await self.read(4, pos);
        const view = new Uint32Array(b.buffer);
        return view[0];
    }
    async readUBE32(pos) {
        const self = this;
        const b = await self.read(4, pos);
        const view = new DataView(b.buffer);
        return view.getUint32(0, false);
    }
    async readULE64(pos) {
        const self = this;
        const b = await self.read(8, pos);
        const view = new Uint32Array(b.buffer);
        return view[1] * 0x100000000 + view[0];
    }
    async readString(pos) {
        const self = this;
        let currentPosition = typeof pos == "undefined" ? self.pos : pos;
        if (currentPosition > this.totalSize) {
            if (this.readOnly) {
                throw new Error("Reading out of bounds");
            }
            this._resizeIfNeeded(pos);
        }
        const dataArray = new Uint8Array(self.o.data.buffer, currentPosition, this.totalSize - currentPosition);
        let indexEndOfString = dataArray.findIndex((element)=>element === 0);
        let endOfStringFound = indexEndOfString !== -1;
        let str = "";
        if (endOfStringFound) {
            str = new TextDecoder().decode(dataArray.slice(0, indexEndOfString));
            self.pos = currentPosition + indexEndOfString + 1;
        } else {
            self.pos = currentPosition;
        }
        return str;
    }
}
}),
"[project]/rayls-shield-landing-page/node_modules/fastfile/src/bigmemfile.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createNew",
    ()=>createNew,
    "readExisting",
    ()=>readExisting,
    "readWriteExisting",
    ()=>readWriteExisting
]);
const PAGE_SIZE = 1 << 22;
function createNew(o) {
    const initialSize = o.initialSize || 0;
    const fd = new BigMemFile();
    fd.o = o;
    const nPages = initialSize ? Math.floor((initialSize - 1) / PAGE_SIZE) + 1 : 0;
    fd.o.data = [];
    for(let i = 0; i < nPages - 1; i++){
        fd.o.data.push(new Uint8Array(PAGE_SIZE));
    }
    if (nPages) fd.o.data.push(new Uint8Array(initialSize - PAGE_SIZE * (nPages - 1)));
    fd.totalSize = 0;
    fd.readOnly = false;
    fd.pos = 0;
    return fd;
}
function readExisting(o) {
    const fd = new BigMemFile();
    fd.o = o;
    fd.totalSize = (o.data.length - 1) * PAGE_SIZE + o.data[o.data.length - 1].byteLength;
    fd.readOnly = true;
    fd.pos = 0;
    return fd;
}
function readWriteExisting(o) {
    const fd = new BigMemFile();
    fd.o = o;
    fd.totalSize = (o.data.length - 1) * PAGE_SIZE + o.data[o.data.length - 1].byteLength;
    fd.readOnly = false;
    fd.pos = 0;
    return fd;
}
const tmpBuff32 = new Uint8Array(4);
const tmpBuff32v = new DataView(tmpBuff32.buffer);
const tmpBuff64 = new Uint8Array(8);
const tmpBuff64v = new DataView(tmpBuff64.buffer);
class BigMemFile {
    constructor(){
        this.pageSize = 1 << 14; // for compatibility
    }
    _resizeIfNeeded(newLen) {
        if (newLen <= this.totalSize) return;
        if (this.readOnly) throw new Error("Reading out of file bounds");
        const nPages = Math.floor((newLen - 1) / PAGE_SIZE) + 1;
        for(let i = Math.max(this.o.data.length - 1, 0); i < nPages; i++){
            const newSize = i < nPages - 1 ? PAGE_SIZE : newLen - (nPages - 1) * PAGE_SIZE;
            const p = new Uint8Array(newSize);
            if (i == this.o.data.length - 1) p.set(this.o.data[i]);
            this.o.data[i] = p;
        }
        this.totalSize = newLen;
    }
    async write(buff, pos) {
        const self = this;
        if (typeof pos == "undefined") pos = self.pos;
        if (this.readOnly) throw new Error("Writing a read only file");
        this._resizeIfNeeded(pos + buff.byteLength);
        const firstPage = Math.floor(pos / PAGE_SIZE);
        let p = firstPage;
        let o = pos % PAGE_SIZE;
        let r = buff.byteLength;
        while(r > 0){
            const l = o + r > PAGE_SIZE ? PAGE_SIZE - o : r;
            const srcView = buff.slice(buff.byteLength - r, buff.byteLength - r + l);
            const dstView = new Uint8Array(self.o.data[p].buffer, o, l);
            dstView.set(srcView);
            r = r - l;
            p++;
            o = 0;
        }
        this.pos = pos + buff.byteLength;
    }
    async readToBuffer(buffDst, offset, len, pos) {
        const self = this;
        if (typeof pos == "undefined") pos = self.pos;
        if (this.readOnly) {
            if (pos + len > this.totalSize) throw new Error("Reading out of bounds");
        }
        this._resizeIfNeeded(pos + len);
        const firstPage = Math.floor(pos / PAGE_SIZE);
        let p = firstPage;
        let o = pos % PAGE_SIZE;
        // Remaining bytes to read
        let r = len;
        while(r > 0){
            // bytes to copy from this page
            const l = o + r > PAGE_SIZE ? PAGE_SIZE - o : r;
            const srcView = new Uint8Array(self.o.data[p].buffer, o, l);
            buffDst.set(srcView, offset + len - r);
            r = r - l;
            p++;
            o = 0;
        }
        this.pos = pos + len;
    }
    async read(len, pos) {
        const self = this;
        const buff = new Uint8Array(len);
        await self.readToBuffer(buff, 0, len, pos);
        return buff;
    }
    close() {}
    async discard() {}
    async writeULE32(v, pos) {
        const self = this;
        tmpBuff32v.setUint32(0, v, true);
        await self.write(tmpBuff32, pos);
    }
    async writeUBE32(v, pos) {
        const self = this;
        tmpBuff32v.setUint32(0, v, false);
        await self.write(tmpBuff32, pos);
    }
    async writeULE64(v, pos) {
        const self = this;
        tmpBuff64v.setUint32(0, v & 0xFFFFFFFF, true);
        tmpBuff64v.setUint32(4, Math.floor(v / 0x100000000), true);
        await self.write(tmpBuff64, pos);
    }
    async readULE32(pos) {
        const self = this;
        const b = await self.read(4, pos);
        const view = new Uint32Array(b.buffer);
        return view[0];
    }
    async readUBE32(pos) {
        const self = this;
        const b = await self.read(4, pos);
        const view = new DataView(b.buffer);
        return view.getUint32(0, false);
    }
    async readULE64(pos) {
        const self = this;
        const b = await self.read(8, pos);
        const view = new Uint32Array(b.buffer);
        return view[1] * 0x100000000 + view[0];
    }
    async readString(pos) {
        const self = this;
        const fixedSize = 2048;
        let currentPosition = typeof pos == "undefined" ? self.pos : pos;
        if (currentPosition > this.totalSize) {
            if (this.readOnly) {
                throw new Error("Reading out of bounds");
            }
            this._resizeIfNeeded(pos);
        }
        let endOfStringFound = false;
        let str = "";
        while(!endOfStringFound){
            let currentPage = Math.floor(currentPosition / PAGE_SIZE);
            let offsetOnPage = currentPosition % PAGE_SIZE;
            if (self.o.data[currentPage] === undefined) {
                throw new Error("ERROR");
            }
            let readLength = Math.min(fixedSize, self.o.data[currentPage].length - offsetOnPage);
            const dataArray = new Uint8Array(self.o.data[currentPage].buffer, offsetOnPage, readLength);
            let indexEndOfString = dataArray.findIndex((element)=>element === 0);
            endOfStringFound = indexEndOfString !== -1;
            if (endOfStringFound) {
                str += new TextDecoder().decode(dataArray.slice(0, indexEndOfString));
                self.pos = currentPage * PAGE_SIZE + offsetOnPage + indexEndOfString + 1;
            } else {
                str += new TextDecoder().decode(dataArray);
                self.pos = currentPage * PAGE_SIZE + offsetOnPage + dataArray.length;
            }
            currentPosition = self.pos;
        }
        return str;
    }
}
}),
"[project]/rayls-shield-landing-page/node_modules/fastfile/src/fastfile.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* global fetch */ __turbopack_context__.s([
    "createNoOverride",
    ()=>createNoOverride,
    "createOverride",
    ()=>createOverride,
    "readExisting",
    ()=>readExisting,
    "readWriteExisting",
    ()=>readWriteExisting,
    "readWriteExistingOrCreate",
    ()=>readWriteExistingOrCreate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$fastfile$2f$src$2f$osfile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/fastfile/src/osfile.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$fastfile$2f$src$2f$memfile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/fastfile/src/memfile.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$fastfile$2f$src$2f$bigmemfile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/fastfile/src/bigmemfile.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$constants__$5b$external$5d$__$28$constants$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/constants [external] (constants, cjs)");
;
;
;
;
const DEFAULT_CACHE_SIZE = 1 << 16;
const DEFAULT_PAGE_SIZE = 1 << 13;
async function createOverride(o, b, c) {
    if (typeof o === "string") {
        o = {
            type: "file",
            fileName: o,
            cacheSize: b || DEFAULT_CACHE_SIZE,
            pageSize: c || DEFAULT_PAGE_SIZE
        };
    }
    if (o.type == "file") {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$fastfile$2f$src$2f$osfile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["open"])(o.fileName, __TURBOPACK__imported__module__$5b$externals$5d2f$constants__$5b$external$5d$__$28$constants$2c$__cjs$29$__["O_TRUNC"] | __TURBOPACK__imported__module__$5b$externals$5d2f$constants__$5b$external$5d$__$28$constants$2c$__cjs$29$__["O_CREAT"] | __TURBOPACK__imported__module__$5b$externals$5d2f$constants__$5b$external$5d$__$28$constants$2c$__cjs$29$__["O_RDWR"], o.cacheSize, o.pageSize);
    } else if (o.type == "mem") {
        return __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$fastfile$2f$src$2f$memfile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createNew"](o);
    } else if (o.type == "bigMem") {
        return __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$fastfile$2f$src$2f$bigmemfile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createNew"](o);
    } else {
        throw new Error("Invalid FastFile type: " + o.type);
    }
}
function createNoOverride(o, b, c) {
    if (typeof o === "string") {
        o = {
            type: "file",
            fileName: o,
            cacheSize: b || DEFAULT_CACHE_SIZE,
            pageSize: c || DEFAULT_PAGE_SIZE
        };
    }
    if (o.type == "file") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$fastfile$2f$src$2f$osfile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["open"])(o.fileName, __TURBOPACK__imported__module__$5b$externals$5d2f$constants__$5b$external$5d$__$28$constants$2c$__cjs$29$__["O_TRUNC"] | __TURBOPACK__imported__module__$5b$externals$5d2f$constants__$5b$external$5d$__$28$constants$2c$__cjs$29$__["O_CREAT"] | __TURBOPACK__imported__module__$5b$externals$5d2f$constants__$5b$external$5d$__$28$constants$2c$__cjs$29$__["O_RDWR"] | __TURBOPACK__imported__module__$5b$externals$5d2f$constants__$5b$external$5d$__$28$constants$2c$__cjs$29$__["O_EXCL"], o.cacheSize, o.pageSize);
    } else if (o.type == "mem") {
        return __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$fastfile$2f$src$2f$memfile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createNew"](o);
    } else if (o.type == "bigMem") {
        return __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$fastfile$2f$src$2f$bigmemfile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createNew"](o);
    } else {
        throw new Error("Invalid FastFile type: " + o.type);
    }
}
async function readExisting(o, b, c) {
    if (o instanceof Uint8Array) {
        o = {
            type: "mem",
            data: o
        };
    }
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if (typeof o === "string") {
            o = {
                type: "file",
                fileName: o,
                cacheSize: b || DEFAULT_CACHE_SIZE,
                pageSize: c || DEFAULT_PAGE_SIZE
            };
        }
    }
    if (o.type == "file") {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$fastfile$2f$src$2f$osfile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["open"])(o.fileName, __TURBOPACK__imported__module__$5b$externals$5d2f$constants__$5b$external$5d$__$28$constants$2c$__cjs$29$__["O_RDONLY"], o.cacheSize, o.pageSize);
    } else if (o.type == "mem") {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$fastfile$2f$src$2f$memfile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readExisting"](o);
    } else if (o.type == "bigMem") {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$fastfile$2f$src$2f$bigmemfile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readExisting"](o);
    } else {
        throw new Error("Invalid FastFile type: " + o.type);
    }
}
function readWriteExisting(o, b, c) {
    if (typeof o === "string") {
        o = {
            type: "file",
            fileName: o,
            cacheSize: b || DEFAULT_CACHE_SIZE,
            pageSize: c || DEFAULT_PAGE_SIZE
        };
    }
    if (o.type == "file") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$fastfile$2f$src$2f$osfile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["open"])(o.fileName, __TURBOPACK__imported__module__$5b$externals$5d2f$constants__$5b$external$5d$__$28$constants$2c$__cjs$29$__["O_CREAT"] | __TURBOPACK__imported__module__$5b$externals$5d2f$constants__$5b$external$5d$__$28$constants$2c$__cjs$29$__["O_RDWR"], o.cacheSize, o.pageSize);
    } else if (o.type == "mem") {
        return __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$fastfile$2f$src$2f$memfile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readWriteExisting"](o);
    } else if (o.type == "bigMem") {
        return __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$fastfile$2f$src$2f$bigmemfile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readWriteExisting"](o);
    } else {
        throw new Error("Invalid FastFile type: " + o.type);
    }
}
function readWriteExistingOrCreate(o, b, c) {
    if (typeof o === "string") {
        o = {
            type: "file",
            fileName: o,
            cacheSize: b || DEFAULT_CACHE_SIZE,
            pageSize: c || DEFAULT_PAGE_SIZE
        };
    }
    if (o.type == "file") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$fastfile$2f$src$2f$osfile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["open"])(o.fileName, __TURBOPACK__imported__module__$5b$externals$5d2f$constants__$5b$external$5d$__$28$constants$2c$__cjs$29$__["O_CREAT"] | __TURBOPACK__imported__module__$5b$externals$5d2f$constants__$5b$external$5d$__$28$constants$2c$__cjs$29$__["O_RDWR"] | __TURBOPACK__imported__module__$5b$externals$5d2f$constants__$5b$external$5d$__$28$constants$2c$__cjs$29$__["O_EXCL"], o.cacheSize);
    } else if (o.type == "mem") {
        return __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$fastfile$2f$src$2f$memfile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readWriteExisting"](o);
    } else if (o.type == "bigMem") {
        return __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$fastfile$2f$src$2f$bigmemfile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readWriteExisting"](o);
    } else {
        throw new Error("Invalid FastFile type: " + o.type);
    }
}
}),
"[project]/rayls-shield-landing-page/node_modules/@iden3/binfileutils/src/binfileutils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "copySection",
    ()=>copySection,
    "createBinFile",
    ()=>createBinFile,
    "endReadSection",
    ()=>endReadSection,
    "endWriteSection",
    ()=>endWriteSection,
    "readBigInt",
    ()=>readBigInt,
    "readBinFile",
    ()=>readBinFile,
    "readSection",
    ()=>readSection,
    "sectionIsEqual",
    ()=>sectionIsEqual,
    "startReadUniqueSection",
    ()=>startReadUniqueSection,
    "startWriteSection",
    ()=>startWriteSection,
    "writeBigInt",
    ()=>writeBigInt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$iden3$2f$binfileutils$2f$node_modules$2f$ffjavascript$2f$main$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/@iden3/binfileutils/node_modules/ffjavascript/main.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$iden3$2f$binfileutils$2f$node_modules$2f$ffjavascript$2f$src$2f$bigbuffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BigBuffer$3e$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/@iden3/binfileutils/node_modules/ffjavascript/src/bigbuffer.js [app-ssr] (ecmascript) <export default as BigBuffer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$fastfile$2f$src$2f$fastfile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/fastfile/src/fastfile.js [app-ssr] (ecmascript)");
;
;
async function readBinFile(fileName, type, maxVersion, cacheSize, pageSize) {
    const fd = await __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$fastfile$2f$src$2f$fastfile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readExisting"](fileName, cacheSize, pageSize);
    const b = await fd.read(4);
    let readedType = "";
    for(let i = 0; i < 4; i++)readedType += String.fromCharCode(b[i]);
    if (readedType != type) throw new Error(fileName + ": Invalid File format");
    let v = await fd.readULE32();
    if (v > maxVersion) throw new Error("Version not supported");
    const nSections = await fd.readULE32();
    // Scan sections
    let sections = [];
    for(let i = 0; i < nSections; i++){
        let ht = await fd.readULE32();
        let hl = await fd.readULE64();
        if (typeof sections[ht] == "undefined") sections[ht] = [];
        sections[ht].push({
            p: fd.pos,
            size: hl
        });
        fd.pos += hl;
    }
    return {
        fd,
        sections
    };
}
async function createBinFile(fileName, type, version, nSections, cacheSize, pageSize) {
    const fd = await __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$fastfile$2f$src$2f$fastfile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createOverride"](fileName, cacheSize, pageSize);
    const buff = new Uint8Array(4);
    for(let i = 0; i < 4; i++)buff[i] = type.charCodeAt(i);
    await fd.write(buff, 0); // Magic "r1cs"
    await fd.writeULE32(version); // Version
    await fd.writeULE32(nSections); // Number of Sections
    return fd;
}
async function startWriteSection(fd, idSection) {
    if (typeof fd.writingSection !== "undefined") throw new Error("Already writing a section");
    await fd.writeULE32(idSection); // Header type
    fd.writingSection = {
        pSectionSize: fd.pos
    };
    await fd.writeULE64(0); // Temporally set to 0 length
}
async function endWriteSection(fd) {
    if (typeof fd.writingSection === "undefined") throw new Error("Not writing a section");
    const sectionSize = fd.pos - fd.writingSection.pSectionSize - 8;
    const oldPos = fd.pos;
    fd.pos = fd.writingSection.pSectionSize;
    await fd.writeULE64(sectionSize);
    fd.pos = oldPos;
    delete fd.writingSection;
}
async function startReadUniqueSection(fd, sections, idSection) {
    if (typeof fd.readingSection !== "undefined") throw new Error("Already reading a section");
    if (!sections[idSection]) throw new Error(fd.fileName + ": Missing section " + idSection);
    if (sections[idSection].length > 1) throw new Error(fd.fileName + ": Section Duplicated " + idSection);
    fd.pos = sections[idSection][0].p;
    fd.readingSection = sections[idSection][0];
}
async function endReadSection(fd, noCheck) {
    if (typeof fd.readingSection === "undefined") throw new Error("Not reading a section");
    if (!noCheck) {
        if (fd.pos - fd.readingSection.p != fd.readingSection.size) throw new Error("Invalid section size reading");
    }
    delete fd.readingSection;
}
async function writeBigInt(fd, n, n8, pos) {
    const buff = new Uint8Array(n8);
    __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$iden3$2f$binfileutils$2f$node_modules$2f$ffjavascript$2f$main$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Scalar"].toRprLE(buff, 0, n, n8);
    await fd.write(buff, pos);
}
async function readBigInt(fd, n8, pos) {
    const buff = await fd.read(n8, pos);
    return __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$iden3$2f$binfileutils$2f$node_modules$2f$ffjavascript$2f$main$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Scalar"].fromRprLE(buff, 0, n8);
}
async function copySection(fdFrom, sections, fdTo, sectionId, size) {
    if (typeof size === "undefined") {
        size = sections[sectionId][0].size;
    }
    const chunkSize = fdFrom.pageSize;
    await startReadUniqueSection(fdFrom, sections, sectionId);
    await startWriteSection(fdTo, sectionId);
    for(let p = 0; p < size; p += chunkSize){
        const l = Math.min(size - p, chunkSize);
        const buff = await fdFrom.read(l);
        await fdTo.write(buff);
    }
    await endWriteSection(fdTo);
    await endReadSection(fdFrom, size != sections[sectionId][0].size);
}
async function readSection(fd, sections, idSection, offset, length) {
    offset = typeof offset === "undefined" ? 0 : offset;
    length = typeof length === "undefined" ? sections[idSection][0].size - offset : length;
    if (offset + length > sections[idSection][0].size) {
        throw new Error("Reading out of the range of the section");
    }
    let buff;
    if (length < 1 << 30) {
        buff = new Uint8Array(length);
    } else {
        buff = new __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$iden3$2f$binfileutils$2f$node_modules$2f$ffjavascript$2f$src$2f$bigbuffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BigBuffer$3e$__["BigBuffer"](length);
    }
    await fd.readToBuffer(buff, 0, length, sections[idSection][0].p + offset);
    return buff;
}
async function sectionIsEqual(fd1, sections1, fd2, sections2, idSection) {
    const MAX_BUFF_SIZE = fd1.pageSize * 16;
    await startReadUniqueSection(fd1, sections1, idSection);
    await startReadUniqueSection(fd2, sections2, idSection);
    if (sections1[idSection][0].size != sections2[idSection][0].size) return false;
    const totalBytes = sections1[idSection][0].size;
    for(let i = 0; i < totalBytes; i += MAX_BUFF_SIZE){
        const n = Math.min(totalBytes - i, MAX_BUFF_SIZE);
        const buff1 = await fd1.read(n);
        const buff2 = await fd2.read(n);
        for(let j = 0; j < n; j++)if (buff1[j] != buff2[j]) return false;
    }
    await endReadSection(fd1);
    await endReadSection(fd2);
    return true;
}
}),
"[project]/rayls-shield-landing-page/node_modules/@iden3/bigarray/src/bigarray.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const SUBARRAY_SIZE = 0x40000;
const BigArrayHandler = {
    get: function(obj, prop) {
        if (!isNaN(prop)) {
            return obj.getElement(prop);
        } else return obj[prop];
    },
    set: function(obj, prop, value) {
        if (!isNaN(prop)) {
            return obj.setElement(prop, value);
        } else {
            obj[prop] = value;
            return true;
        }
    }
};
class _BigArray {
    constructor(initSize){
        this.length = initSize || 0;
        this.arr = new Array(SUBARRAY_SIZE);
        for(let i = 0; i < initSize; i += SUBARRAY_SIZE){
            this.arr[i / SUBARRAY_SIZE] = new Array(Math.min(SUBARRAY_SIZE, initSize - i));
        }
        return this;
    }
    push() {
        for(let i = 0; i < arguments.length; i++){
            this.setElement(this.length, arguments[i]);
        }
    }
    slice(f, t) {
        const arr = new Array(t - f);
        for(let i = f; i < t; i++)arr[i - f] = this.getElement(i);
        return arr;
    }
    getElement(idx) {
        idx = parseInt(idx);
        const idx1 = Math.floor(idx / SUBARRAY_SIZE);
        const idx2 = idx % SUBARRAY_SIZE;
        return this.arr[idx1] ? this.arr[idx1][idx2] : undefined;
    }
    setElement(idx, value) {
        idx = parseInt(idx);
        const idx1 = Math.floor(idx / SUBARRAY_SIZE);
        if (!this.arr[idx1]) {
            this.arr[idx1] = new Array(SUBARRAY_SIZE);
        }
        const idx2 = idx % SUBARRAY_SIZE;
        this.arr[idx1][idx2] = value;
        if (idx >= this.length) this.length = idx + 1;
        return true;
    }
    getKeys() {
        const newA = new BigArray();
        for(let i = 0; i < this.arr.length; i++){
            if (this.arr[i]) {
                for(let j = 0; j < this.arr[i].length; j++){
                    if (typeof this.arr[i][j] !== "undefined") {
                        newA.push(i * SUBARRAY_SIZE + j);
                    }
                }
            }
        }
        return newA;
    }
}
class BigArray {
    constructor(initSize){
        const obj = new _BigArray(initSize);
        const extObj = new Proxy(obj, BigArrayHandler);
        return extObj;
    }
}
const __TURBOPACK__default__export__ = BigArray;
}),
"[project]/rayls-shield-landing-page/node_modules/circom_runtime/js/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*

Copyright 2020 0KIMS association.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/ __turbopack_context__.s([
    "flatArray",
    ()=>flatArray,
    "fnvHash",
    ()=>fnvHash,
    "normalize",
    ()=>normalize,
    "toArray32",
    ()=>toArray32
]);
function flatArray(a) {
    let res = [];
    fillArray(res, a);
    return res;
    //TURBOPACK unreachable
    ;
    function fillArray(res, a) {
        if (Array.isArray(a)) {
            for(let i = 0; i < a.length; i++){
                fillArray(res, a[i]);
            }
        } else {
            res.push(a);
        }
    }
}
function normalize(n, prime) {
    let res = BigInt(n) % prime;
    if (res < 0) res += prime;
    return res;
}
function fnvHash(str) {
    const uint64_max = BigInt(2) ** BigInt(64);
    let hash = BigInt("0xCBF29CE484222325");
    for(let i = 0; i < str.length; i++){
        hash ^= BigInt(str[i].charCodeAt(0));
        hash *= BigInt(0x100000001B3);
        hash %= uint64_max;
    }
    let shash = hash.toString(16);
    let n = 16 - shash.length;
    shash = "0".repeat(n).concat(shash);
    return shash;
}
function toArray32(s, size) {
    const res = []; //new Uint32Array(size); //has no unshift
    let rem = BigInt(s);
    const radix = BigInt(0x100000000);
    while(rem){
        res.unshift(Number(rem % radix));
        rem = rem / radix;
    }
    if (size) {
        let i = size - res.length;
        while(i > 0){
            res.unshift(0);
            i--;
        }
    }
    return res;
}
}),
"[project]/rayls-shield-landing-page/node_modules/circom_runtime/js/witness_calculator.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* globals WebAssembly */ /*

Copyright 2020 0KIMS association.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/ __turbopack_context__.s([
    "default",
    ()=>builder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circom_runtime$2f$js$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/circom_runtime/js/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circom_runtime$2f$node_modules$2f$ffjavascript$2f$main$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/circom_runtime/node_modules/ffjavascript/main.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circom_runtime$2f$node_modules$2f$ffjavascript$2f$src$2f$f1field$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__F1Field$3e$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/circom_runtime/node_modules/ffjavascript/src/f1field.js [app-ssr] (ecmascript) <export default as F1Field>");
;
;
async function builder(code, options) {
    let instance;
    let wc;
    let memory;
    options = options || {};
    // Only circom 2 implements version lookup through exports in the WASM
    // We default to `1` and update if we see the `getVersion` export (major version)
    // These are updated after the instance is instantiated, assuming the functions are available
    let majorVersion = 1;
    // After Circom 2.0.7, Blaine added exported functions for getting minor and patch versions
    let minorVersion = 0;
    // If we can't look up the patch version, assume the lowest
    let patchVersion = 0;
    let codeIsWebAssemblyInstance = false;
    // If code is already prepared WebAssembly.Instance, we use it directly
    if (code instanceof WebAssembly.Instance) {
        instance = code;
        codeIsWebAssemblyInstance = true;
    } else {
        let memorySize = 32767;
        if (options.memorySize) {
            // make sure we have int
            memorySize = parseInt(options.memorySize);
            if (memorySize < 0) {
                throw new Error("Invalid memory size");
            }
        }
        let memoryAllocated = false;
        while(!memoryAllocated){
            try {
                memory = new WebAssembly.Memory({
                    initial: memorySize
                });
                memoryAllocated = true;
            } catch (err) {
                if (memorySize <= 1) {
                    throw err;
                }
                console.warn("Could not allocate " + memorySize * 1024 * 64 + " bytes. This may cause severe instability. Trying with " + memorySize * 1024 * 64 / 2 + " bytes");
                memorySize = Math.floor(memorySize / 2);
            }
        }
        const wasmModule = await WebAssembly.compile(code);
        let errStr = "";
        let msgStr = "";
        instance = await WebAssembly.instantiate(wasmModule, {
            env: {
                "memory": memory
            },
            runtime: {
                printDebug: function(value) {
                    console.log("printDebug:", value);
                },
                exceptionHandler: function(code) {
                    let err;
                    if (code === 1) {
                        err = "Signal not found. ";
                    } else if (code === 2) {
                        err = "Too many signals set. ";
                    } else if (code === 3) {
                        err = "Signal already set. ";
                    } else if (code === 4) {
                        err = "Assert Failed. ";
                    } else if (code === 5) {
                        err = "Not enough memory. ";
                    } else if (code === 6) {
                        err = "Input signal array access exceeds the size. ";
                    } else {
                        err = "Unknown error. ";
                    }
                    console.error("ERROR: ", code, errStr);
                    throw new Error(err + errStr);
                },
                // A new way of logging messages was added in Circom 2.0.7 that requires 2 new imports
                // `printErrorMessage` and `writeBufferMessage`.
                printErrorMessage: function() {
                    errStr += getMessage() + "\n";
                },
                writeBufferMessage: function() {
                    const msg = getMessage();
                    // Any calls to `log()` will always end with a `\n`, so that's when we print and reset
                    if (msg === "\n") {
                        console.log(msgStr);
                        msgStr = "";
                    } else {
                        // If we've buffered other content, put a space in between the items
                        if (msgStr !== "") {
                            msgStr += " ";
                        }
                        // Then append the message to the message we are creating
                        msgStr += msg;
                    }
                },
                showSharedRWMemory: function() {
                    const shared_rw_memory_size = instance.exports.getFieldNumLen32();
                    const arr = new Uint32Array(shared_rw_memory_size);
                    for(let j = 0; j < shared_rw_memory_size; j++){
                        arr[shared_rw_memory_size - 1 - j] = instance.exports.readSharedRWMemory(j);
                    }
                    // In circom 2.0.7, they changed the log() function to allow strings and changed the
                    // output API. This smoothes over the breaking change.
                    if (majorVersion >= 2 && (minorVersion >= 1 || patchVersion >= 7)) {
                        // If we've buffered other content, put a space in between the items
                        if (msgStr !== "") {
                            msgStr += " ";
                        }
                        // Then append the value to the message we are creating
                        const msg = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circom_runtime$2f$node_modules$2f$ffjavascript$2f$main$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Scalar"].fromArray(arr, 0x100000000).toString();
                        msgStr += msg;
                    } else {
                        console.log(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circom_runtime$2f$node_modules$2f$ffjavascript$2f$main$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Scalar"].fromArray(arr, 0x100000000));
                    }
                },
                error: function(code, pstr, a, b, c, d) {
                    let errStr;
                    if (code === 7) {
                        errStr = p2str(pstr) + " " + wc.getFr(b).toString() + " != " + wc.getFr(c).toString() + " " + p2str(d);
                    } else if (code === 9) {
                        errStr = p2str(pstr) + " " + wc.getFr(b).toString() + " " + p2str(c);
                    } else if (code === 5 && options.sym) {
                        errStr = p2str(pstr) + " " + options.sym.labelIdx2Name[c];
                    } else {
                        errStr = p2str(pstr) + " " + a + " " + b + " " + c + " " + d;
                    }
                    console.log("ERROR: ", code, errStr);
                    throw new Error(errStr);
                },
                log: function(a) {
                    console.log(wc.getFr(a).toString());
                },
                logGetSignal: function(signal, pVal) {
                    if (options.logGetSignal) {
                        options.logGetSignal(signal, wc.getFr(pVal));
                    }
                },
                logSetSignal: function(signal, pVal) {
                    if (options.logSetSignal) {
                        options.logSetSignal(signal, wc.getFr(pVal));
                    }
                },
                logStartComponent: function(cIdx) {
                    if (options.logStartComponent) {
                        options.logStartComponent(cIdx);
                    }
                },
                logFinishComponent: function(cIdx) {
                    if (options.logFinishComponent) {
                        options.logFinishComponent(cIdx);
                    }
                }
            }
        });
    }
    if (typeof instance.exports.getVersion == "function") {
        majorVersion = instance.exports.getVersion();
    }
    if (typeof instance.exports.getMinorVersion == "function") {
        minorVersion = instance.exports.getMinorVersion();
    }
    if (typeof instance.exports.getPatchVersion == "function") {
        patchVersion = instance.exports.getPatchVersion();
    }
    const sanityCheck = options && (options.sanityCheck || options.logGetSignal || options.logSetSignal || options.logStartComponent || options.logFinishComponent);
    // We explicitly check for major version 2 in case there's a circom v3 in the future
    if (majorVersion === 2) {
        wc = new WitnessCalculatorCircom2(instance, sanityCheck);
    } else if (majorVersion === 1) {
        if (codeIsWebAssemblyInstance) {
            throw new Error('Loading code from WebAssembly instance is not supported for circom version 1');
        }
        wc = new WitnessCalculatorCircom1(memory, instance, sanityCheck);
    } else {
        throw new Error(`Unsupported circom version: ${majorVersion}`);
    }
    return wc;
    //TURBOPACK unreachable
    ;
    function getMessage() {
        let message = "";
        let c = instance.exports.getMessageChar();
        while(c !== 0){
            message += String.fromCharCode(c);
            c = instance.exports.getMessageChar();
        }
        return message;
    }
    function p2str(p) {
        const i8 = new Uint8Array(memory.buffer);
        const bytes = [];
        for(let i = 0; i8[p + i] > 0; i++)bytes.push(i8[p + i]);
        return String.fromCharCode.apply(null, bytes);
    }
}
class WitnessCalculatorCircom1 {
    constructor(memory, instance, sanityCheck){
        this.memory = memory;
        this.i32 = new Uint32Array(memory.buffer);
        this.instance = instance;
        this.n32 = (this.instance.exports.getFrLen() >> 2) - 2;
        const pRawPrime = this.instance.exports.getPRawPrime();
        const arr = new Array(this.n32);
        for(let i = 0; i < this.n32; i++){
            arr[this.n32 - 1 - i] = this.i32[(pRawPrime >> 2) + i];
        }
        this.prime = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circom_runtime$2f$node_modules$2f$ffjavascript$2f$main$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Scalar"].fromArray(arr, 0x100000000);
        this.Fr = new __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circom_runtime$2f$node_modules$2f$ffjavascript$2f$src$2f$f1field$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__F1Field$3e$__["F1Field"](this.prime);
        this.mask32 = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circom_runtime$2f$node_modules$2f$ffjavascript$2f$main$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Scalar"].fromString("FFFFFFFF", 16);
        this.NVars = this.instance.exports.getNVars();
        this.n64 = Math.floor((this.Fr.bitLength - 1) / 64) + 1;
        this.R = this.Fr.e(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circom_runtime$2f$node_modules$2f$ffjavascript$2f$main$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Scalar"].shiftLeft(1, this.n64 * 64));
        this.RInv = this.Fr.inv(this.R);
        this.sanityCheck = sanityCheck;
    }
    circom_version() {
        return 1;
    }
    async _doCalculateWitness(input, sanityCheck) {
        this.instance.exports.init(this.sanityCheck || sanityCheck ? 1 : 0);
        const pSigOffset = this.allocInt();
        const pFr = this.allocFr();
        const keys = Object.keys(input);
        keys.forEach((k)=>{
            const h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circom_runtime$2f$js$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fnvHash"])(k);
            const hMSB = parseInt(h.slice(0, 8), 16);
            const hLSB = parseInt(h.slice(8, 16), 16);
            try {
                this.instance.exports.getSignalOffset32(pSigOffset, 0, hMSB, hLSB);
            } catch (err) {
                throw new Error(`Signal ${k} is not an input of the circuit.`);
            }
            const sigOffset = this.getInt(pSigOffset);
            const fArr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circom_runtime$2f$js$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["flatArray"])(input[k]);
            for(let i = 0; i < fArr.length; i++){
                this.setFr(pFr, fArr[i]);
                this.instance.exports.setSignal(0, 0, sigOffset + i, pFr);
            }
        });
    }
    async calculateWitness(input, sanityCheck) {
        const self = this;
        const old0 = self.i32[0];
        const w = [];
        await self._doCalculateWitness(input, sanityCheck);
        for(let i = 0; i < self.NVars; i++){
            const pWitness = self.instance.exports.getPWitness(i);
            w.push(self.getFr(pWitness));
        }
        self.i32[0] = old0;
        return w;
    }
    async calculateBinWitness(input, sanityCheck) {
        const self = this;
        const old0 = self.i32[0];
        await self._doCalculateWitness(input, sanityCheck);
        const pWitnessBuffer = self.instance.exports.getWitnessBuffer();
        self.i32[0] = old0;
        const buff = self.memory.buffer.slice(pWitnessBuffer, pWitnessBuffer + self.NVars * self.n64 * 8);
        return new Uint8Array(buff);
    }
    allocInt() {
        const p = this.i32[0];
        this.i32[0] = p + 8;
        return p;
    }
    allocFr() {
        const p = this.i32[0];
        this.i32[0] = p + this.n32 * 4 + 8;
        return p;
    }
    getInt(p) {
        return this.i32[p >> 2];
    }
    setInt(p, v) {
        this.i32[p >> 2] = v;
    }
    getFr(p) {
        const self = this;
        const idx = p >> 2;
        if (self.i32[idx + 1] & 0x80000000) {
            const arr = new Array(self.n32);
            for(let i = 0; i < self.n32; i++){
                arr[self.n32 - 1 - i] = self.i32[idx + 2 + i];
            }
            const res = self.Fr.e(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circom_runtime$2f$node_modules$2f$ffjavascript$2f$main$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Scalar"].fromArray(arr, 0x100000000));
            if (self.i32[idx + 1] & 0x40000000) {
                return fromMontgomery(res);
            } else {
                return res;
            }
        } else {
            if (self.i32[idx] & 0x80000000) {
                return self.Fr.e(self.i32[idx] - 0x100000000);
            } else {
                return self.Fr.e(self.i32[idx]);
            }
        }
        function fromMontgomery(n) {
            return self.Fr.mul(self.RInv, n);
        }
    }
    setFr(p, v) {
        const self = this;
        v = self.Fr.e(v);
        const minShort = self.Fr.neg(self.Fr.e("80000000", 16));
        const maxShort = self.Fr.e("7FFFFFFF", 16);
        if (self.Fr.geq(v, minShort) && self.Fr.leq(v, maxShort)) {
            let a;
            if (self.Fr.geq(v, self.Fr.zero)) {
                a = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circom_runtime$2f$node_modules$2f$ffjavascript$2f$main$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Scalar"].toNumber(v);
            } else {
                a = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circom_runtime$2f$node_modules$2f$ffjavascript$2f$main$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Scalar"].toNumber(self.Fr.sub(v, minShort));
                a = a - 0x80000000;
                a = 0x100000000 + a;
            }
            self.i32[p >> 2] = a;
            self.i32[(p >> 2) + 1] = 0;
            return;
        }
        self.i32[p >> 2] = 0;
        self.i32[(p >> 2) + 1] = 0x80000000;
        const arr = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circom_runtime$2f$node_modules$2f$ffjavascript$2f$main$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Scalar"].toArray(v, 0x100000000);
        for(let i = 0; i < self.n32; i++){
            const idx = arr.length - 1 - i;
            if (idx >= 0) {
                self.i32[(p >> 2) + 2 + i] = arr[idx];
            } else {
                self.i32[(p >> 2) + 2 + i] = 0;
            }
        }
    }
}
class WitnessCalculatorCircom2 {
    constructor(instance, sanityCheck){
        this.instance = instance;
        this.version = this.instance.exports.getVersion();
        this.n32 = this.instance.exports.getFieldNumLen32();
        this.instance.exports.getRawPrime();
        const arr = new Uint32Array(this.n32);
        for(let i = 0; i < this.n32; i++){
            arr[this.n32 - 1 - i] = this.instance.exports.readSharedRWMemory(i);
        }
        this.prime = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circom_runtime$2f$node_modules$2f$ffjavascript$2f$main$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Scalar"].fromArray(arr, 0x100000000);
        this.witnessSize = this.instance.exports.getWitnessSize();
        this.sanityCheck = sanityCheck;
    }
    circom_version() {
        return this.instance.exports.getVersion();
    }
    async _doCalculateWitness(input, sanityCheck) {
        //input is assumed to be a map from signals to arrays of bigints
        this.instance.exports.init(this.sanityCheck || sanityCheck ? 1 : 0);
        const keys = Object.keys(input);
        let input_counter = 0;
        keys.forEach((k)=>{
            const h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circom_runtime$2f$js$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fnvHash"])(k);
            const hMSB = parseInt(h.slice(0, 8), 16);
            const hLSB = parseInt(h.slice(8, 16), 16);
            const fArr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circom_runtime$2f$js$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["flatArray"])(input[k]);
            // Slight deviation from https://github.com/iden3/circom/blob/v2.1.6/code_producers/src/wasm_elements/common/witness_calculator.js
            // because I don't know when this exported function was added
            if (typeof this.instance.exports.getInputSignalSize === "function") {
                let signalSize = this.instance.exports.getInputSignalSize(hMSB, hLSB);
                if (signalSize < 0) {
                    throw new Error(`Signal ${k} not found\n`);
                }
                if (fArr.length < signalSize) {
                    throw new Error(`Not enough values for input signal ${k}\n`);
                }
                if (fArr.length > signalSize) {
                    throw new Error(`Too many values for input signal ${k}\n`);
                }
            }
            for(let i = 0; i < fArr.length; i++){
                const arrFr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circom_runtime$2f$js$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray32"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circom_runtime$2f$js$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalize"])(fArr[i], this.prime), this.n32);
                for(let j = 0; j < this.n32; j++){
                    this.instance.exports.writeSharedRWMemory(j, arrFr[this.n32 - 1 - j]);
                }
                try {
                    this.instance.exports.setInputSignal(hMSB, hLSB, i);
                    input_counter++;
                } catch (err) {
                    // console.log(`After adding signal ${i} of ${k}`)
                    throw new Error(err);
                }
            }
        });
        if (input_counter < this.instance.exports.getInputSize()) {
            throw new Error(`Not all inputs have been set. Only ${input_counter} out of ${this.instance.exports.getInputSize()}`);
        }
    }
    async calculateWitness(input, sanityCheck) {
        const w = [];
        await this._doCalculateWitness(input, sanityCheck);
        for(let i = 0; i < this.witnessSize; i++){
            this.instance.exports.getWitness(i);
            const arr = new Uint32Array(this.n32);
            for(let j = 0; j < this.n32; j++){
                arr[this.n32 - 1 - j] = this.instance.exports.readSharedRWMemory(j);
            }
            w.push(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circom_runtime$2f$node_modules$2f$ffjavascript$2f$main$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Scalar"].fromArray(arr, 0x100000000));
        }
        return w;
    }
    async calculateWTNSBin(input, sanityCheck) {
        const buff32 = new Uint32Array(this.witnessSize * this.n32 + this.n32 + 11);
        const buff = new Uint8Array(buff32.buffer);
        await this._doCalculateWitness(input, sanityCheck);
        //"wtns"
        buff[0] = "w".charCodeAt(0);
        buff[1] = "t".charCodeAt(0);
        buff[2] = "n".charCodeAt(0);
        buff[3] = "s".charCodeAt(0);
        //version 2
        buff32[1] = 2;
        //number of sections: 2
        buff32[2] = 2;
        //id section 1
        buff32[3] = 1;
        const n8 = this.n32 * 4;
        //id section 1 length in 64bytes
        const idSection1length = 8 + n8;
        const idSection1lengthHex = idSection1length.toString(16);
        buff32[4] = parseInt(idSection1lengthHex.slice(0, 8), 16);
        buff32[5] = parseInt(idSection1lengthHex.slice(8, 16), 16);
        //this.n32
        buff32[6] = n8;
        //prime number
        this.instance.exports.getRawPrime();
        let pos = 7;
        for(let j = 0; j < this.n32; j++){
            buff32[pos + j] = this.instance.exports.readSharedRWMemory(j);
        }
        pos += this.n32;
        // witness size
        buff32[pos] = this.witnessSize;
        pos++;
        //id section 2
        buff32[pos] = 2;
        pos++;
        // section 2 length
        const idSection2length = n8 * this.witnessSize;
        const idSection2lengthHex = idSection2length.toString(16);
        buff32[pos] = parseInt(idSection2lengthHex.slice(0, 8), 16);
        buff32[pos + 1] = parseInt(idSection2lengthHex.slice(8, 16), 16);
        pos += 2;
        for(let i = 0; i < this.witnessSize; i++){
            this.instance.exports.getWitness(i);
            for(let j = 0; j < this.n32; j++){
                buff32[pos + j] = this.instance.exports.readSharedRWMemory(j);
            }
            pos += this.n32;
        }
        return buff;
    }
}
}),
"[project]/rayls-shield-landing-page/node_modules/circom_runtime/main.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circom_runtime$2f$js$2f$witness_calculator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/circom_runtime/js/witness_calculator.js [app-ssr] (ecmascript)");
;
}),
"[project]/rayls-shield-landing-page/node_modules/circom_runtime/js/witness_calculator.js [app-ssr] (ecmascript) <export default as WitnessCalculatorBuilder>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WitnessCalculatorBuilder",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circom_runtime$2f$js$2f$witness_calculator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circom_runtime$2f$js$2f$witness_calculator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/circom_runtime/js/witness_calculator.js [app-ssr] (ecmascript)");
}),
"[project]/rayls-shield-landing-page/node_modules/r1csfile/src/r1csfile.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "R1CS_FILE_CONSTRAINTS_SECTION",
    ()=>R1CS_FILE_CONSTRAINTS_SECTION,
    "R1CS_FILE_CUSTOM_GATES_LIST_SECTION",
    ()=>R1CS_FILE_CUSTOM_GATES_LIST_SECTION,
    "R1CS_FILE_CUSTOM_GATES_USES_SECTION",
    ()=>R1CS_FILE_CUSTOM_GATES_USES_SECTION,
    "R1CS_FILE_HEADER_SECTION",
    ()=>R1CS_FILE_HEADER_SECTION,
    "R1CS_FILE_WIRE2LABELID_SECTION",
    ()=>R1CS_FILE_WIRE2LABELID_SECTION,
    "readConstraints",
    ()=>readConstraints,
    "readCustomGatesListSection",
    ()=>readCustomGatesListSection,
    "readCustomGatesUsesSection",
    ()=>readCustomGatesUsesSection,
    "readMap",
    ()=>readMap,
    "readR1cs",
    ()=>readR1cs,
    "readR1csFd",
    ()=>readR1csFd,
    "readR1csHeader",
    ()=>readR1csHeader,
    "writeR1cs",
    ()=>writeR1cs,
    "writeR1csConstraints",
    ()=>writeR1csConstraints,
    "writeR1csHeader",
    ()=>writeR1csHeader,
    "writeR1csMap",
    ()=>writeR1csMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$r1csfile$2f$node_modules$2f$ffjavascript$2f$main$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/r1csfile/node_modules/ffjavascript/main.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$r1csfile$2f$node_modules$2f$ffjavascript$2f$src$2f$f1field$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__F1Field$3e$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/r1csfile/node_modules/ffjavascript/src/f1field.js [app-ssr] (ecmascript) <export default as F1Field>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$r1csfile$2f$node_modules$2f$ffjavascript$2f$src$2f$curves$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/r1csfile/node_modules/ffjavascript/src/curves.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$iden3$2f$bigarray$2f$src$2f$bigarray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/@iden3/bigarray/src/bigarray.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$iden3$2f$binfileutils$2f$src$2f$binfileutils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/@iden3/binfileutils/src/binfileutils.js [app-ssr] (ecmascript)");
;
;
;
const R1CS_FILE_HEADER_SECTION = 1;
const R1CS_FILE_CONSTRAINTS_SECTION = 2;
const R1CS_FILE_WIRE2LABELID_SECTION = 3;
const R1CS_FILE_CUSTOM_GATES_LIST_SECTION = 4;
const R1CS_FILE_CUSTOM_GATES_USES_SECTION = 5;
async function readR1csHeader(fd, sections, singleThread) {
    let options;
    if (typeof singleThread === "object") {
        options = singleThread;
    } else if (typeof singleThread === "undefined") {
        options = {
            singleThread: false
        };
    } else {
        options = {
            singleThread: singleThread
        };
    }
    const res = {};
    await __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$iden3$2f$binfileutils$2f$src$2f$binfileutils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startReadUniqueSection"](fd, sections, 1);
    // Read Header
    res.n8 = await fd.readULE32();
    res.prime = await __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$iden3$2f$binfileutils$2f$src$2f$binfileutils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readBigInt"](fd, res.n8);
    if (options.F) {
        if (options.F.p != res.prime) throw new Error("Different Prime");
        res.F = options.F;
    } else if (options.getFieldFromPrime) {
        res.F = await options.getFieldFromPrime(res.prime, options.singleThread);
    } else if (options.getCurveFromPrime) {
        res.curve = await options.getCurveFromPrime(res.prime, options.singleThread);
        res.F = res.curve.Fr;
    } else {
        try {
            res.curve = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$r1csfile$2f$node_modules$2f$ffjavascript$2f$src$2f$curves$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurveFromR"])(res.prime, options.singleThread);
            res.F = res.curve.Fr;
        } catch (err) {
            res.F = new __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$r1csfile$2f$node_modules$2f$ffjavascript$2f$src$2f$f1field$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__F1Field$3e$__["F1Field"](res.prime);
        }
    }
    res.nVars = await fd.readULE32();
    res.nOutputs = await fd.readULE32();
    res.nPubInputs = await fd.readULE32();
    res.nPrvInputs = await fd.readULE32();
    res.nLabels = await fd.readULE64();
    res.nConstraints = await fd.readULE32();
    res.useCustomGates = typeof sections[R1CS_FILE_CUSTOM_GATES_LIST_SECTION] !== "undefined" && sections[R1CS_FILE_CUSTOM_GATES_LIST_SECTION] !== null && typeof sections[R1CS_FILE_CUSTOM_GATES_USES_SECTION] !== "undefined" && sections[R1CS_FILE_CUSTOM_GATES_USES_SECTION] !== null;
    await __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$iden3$2f$binfileutils$2f$src$2f$binfileutils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["endReadSection"](fd);
    return res;
}
async function readConstraints(fd, sections, r1cs, logger, loggerCtx) {
    let options;
    if (typeof logger === "object") {
        options = logger;
    } else if (typeof logger === "undefined") {
        options = {};
    } else {
        options = {
            logger: logger,
            loggerCtx: loggerCtx
        };
    }
    const bR1cs = await __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$iden3$2f$binfileutils$2f$src$2f$binfileutils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readSection"](fd, sections, 2);
    let bR1csPos = 0;
    let constraints;
    if (r1cs.nConstraints > 1 << 20) {
        constraints = new __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$iden3$2f$bigarray$2f$src$2f$bigarray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]();
    } else {
        constraints = [];
    }
    for(let i = 0; i < r1cs.nConstraints; i++){
        if (options.logger && i % 100000 == 0) options.logger.info(`${options.loggerCtx}: Loading constraints: ${i}/${r1cs.nConstraints}`);
        const c = readConstraint();
        constraints.push(c);
    }
    return constraints;
    //TURBOPACK unreachable
    ;
    function readConstraint() {
        const c = [];
        c[0] = readLC();
        c[1] = readLC();
        c[2] = readLC();
        return c;
    }
    function readLC() {
        const lc = {};
        const buffUL32 = bR1cs.slice(bR1csPos, bR1csPos + 4);
        bR1csPos += 4;
        const buffUL32V = new DataView(buffUL32.buffer);
        const nIdx = buffUL32V.getUint32(0, true);
        const buff = bR1cs.slice(bR1csPos, bR1csPos + (4 + r1cs.n8) * nIdx);
        bR1csPos += (4 + r1cs.n8) * nIdx;
        const buffV = new DataView(buff.buffer);
        for(let i = 0; i < nIdx; i++){
            const idx = buffV.getUint32(i * (4 + r1cs.n8), true);
            const val = r1cs.F.fromRprLE(buff, i * (4 + r1cs.n8) + 4);
            lc[idx] = val;
        }
        return lc;
    }
}
async function readMap(fd, sections, r1cs, logger, loggerCtx) {
    let options;
    if (typeof logger === "object") {
        options = logger;
    } else if (typeof logger === "undefined") {
        options = {};
    } else {
        options = {
            logger: logger,
            loggerCtx: loggerCtx
        };
    }
    const bMap = await __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$iden3$2f$binfileutils$2f$src$2f$binfileutils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readSection"](fd, sections, 3);
    let bMapPos = 0;
    let map;
    if (r1cs.nVars > 1 << 20) {
        map = new __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$iden3$2f$bigarray$2f$src$2f$bigarray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]();
    } else {
        map = [];
    }
    for(let i = 0; i < r1cs.nVars; i++){
        if (options.logger && i % 10000 == 0) options.logger.info(`${options.loggerCtx}: Loading map: ${i}/${r1cs.nVars}`);
        const idx = readULE64();
        map.push(idx);
    }
    return map;
    //TURBOPACK unreachable
    ;
    function readULE64() {
        const buffULE64 = bMap.slice(bMapPos, bMapPos + 8);
        bMapPos += 8;
        const buffULE64V = new DataView(buffULE64.buffer);
        const LSB = buffULE64V.getUint32(0, true);
        const MSB = buffULE64V.getUint32(4, true);
        return MSB * 0x100000000 + LSB;
    }
}
async function readR1csFd(fd, sections, options) {
    /**
     * Options properties:
     *  loadConstraints: <bool> true by default
     *  loadMap:         <bool> false by default
     *  loadCustomGates: <bool> true by default
     */ if (typeof options !== "object") {
        throw new Error("readR1csFd: options must be an object");
    }
    options.loadConstraints = "loadConstraints" in options ? options.loadConstraints : true;
    options.loadMap = "loadMap" in options ? options.loadMap : false;
    options.loadCustomGates = "loadCustomGates" in options ? options.loadCustomGates : true;
    const res = await readR1csHeader(fd, sections, options);
    if (options.loadConstraints) {
        res.constraints = await readConstraints(fd, sections, res, options);
    }
    // Read Labels
    if (options.loadMap) {
        res.map = await readMap(fd, sections, res, options);
    }
    if (options.loadCustomGates) {
        if (res.useCustomGates) {
            res.customGates = await readCustomGatesListSection(fd, sections, res);
            res.customGatesUses = await readCustomGatesUsesSection(fd, sections, options);
        } else {
            res.customGates = [];
            res.customGatesUses = [];
        }
    }
    return res;
}
async function readR1cs(fileName, loadConstraints, loadMap, singleThread, logger, loggerCtx) {
    let options;
    if (typeof loadConstraints === "object") {
        options = loadConstraints;
    } else if (typeof loadConstraints === "undefined") {
        options = {
            loadConstraints: true,
            loadMap: false,
            loadCustomGates: true
        };
    } else {
        options = {
            loadConstraints: loadConstraints,
            loadMap: loadMap,
            singleThread: singleThread,
            logger: logger,
            loggerCtx: loggerCtx
        };
    }
    const { fd, sections } = await __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$iden3$2f$binfileutils$2f$src$2f$binfileutils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readBinFile"](fileName, "r1cs", 1, 1 << 25, 1 << 22);
    const res = await readR1csFd(fd, sections, options);
    await fd.close();
    return res;
}
async function readCustomGatesListSection(fd, sections, res) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$iden3$2f$binfileutils$2f$src$2f$binfileutils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startReadUniqueSection"](fd, sections, R1CS_FILE_CUSTOM_GATES_LIST_SECTION);
    let num = await fd.readULE32();
    let customGates = [];
    for(let i = 0; i < num; i++){
        let customGate = {};
        customGate.templateName = await fd.readString();
        let numParameters = await fd.readULE32();
        customGate.parameters = Array(numParameters);
        let buff = await fd.read(res.n8 * numParameters);
        for(let j = 0; j < numParameters; j++){
            customGate.parameters[j] = res.F.fromRprLE(buff, j * res.n8, res.n8);
            ;
        }
        customGates.push(customGate);
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$iden3$2f$binfileutils$2f$src$2f$binfileutils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["endReadSection"](fd);
    return customGates;
}
async function readCustomGatesUsesSection(fd, sections, options) {
    const bR1cs = await __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$iden3$2f$binfileutils$2f$src$2f$binfileutils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readSection"](fd, sections, R1CS_FILE_CUSTOM_GATES_USES_SECTION);
    const bR1cs32 = new Uint32Array(bR1cs.buffer, bR1cs.byteOffset, bR1cs.byteLength / 4);
    const nCustomGateUses = bR1cs32[0];
    let bR1csPos = 1;
    let customGatesUses;
    if (nCustomGateUses > 1 << 20) {
        customGatesUses = new __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$iden3$2f$bigarray$2f$src$2f$bigarray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]();
    } else {
        customGatesUses = [];
    }
    for(let i = 0; i < nCustomGateUses; i++){
        if (options.logger && i % 100000 == 0) options.logger.info(`${options.loggerCtx}: Loading custom gate uses: ${i}/${nCustomGateUses}`);
        let c = {};
        c.id = bR1cs32[bR1csPos++];
        let numSignals = bR1cs32[bR1csPos++];
        c.signals = [];
        for(let j = 0; j < numSignals; j++){
            const LSB = bR1cs32[bR1csPos++];
            const MSB = bR1cs32[bR1csPos++];
            c.signals.push(MSB * 0x100000000 + LSB);
        }
        customGatesUses.push(c);
    }
    return customGatesUses;
}
async function writeR1csHeader(fd, cir) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$iden3$2f$binfileutils$2f$src$2f$binfileutils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startWriteSection"](fd, 1);
    await fd.writeULE32(cir.n8); // Temporally set to 0 length
    await __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$iden3$2f$binfileutils$2f$src$2f$binfileutils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["writeBigInt"](fd, cir.prime, cir.n8);
    await fd.writeULE32(cir.nVars);
    await fd.writeULE32(cir.nOutputs);
    await fd.writeULE32(cir.nPubInputs);
    await fd.writeULE32(cir.nPrvInputs);
    await fd.writeULE64(cir.nLabels);
    await fd.writeULE32(cir.constraints.length);
    await __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$iden3$2f$binfileutils$2f$src$2f$binfileutils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["endWriteSection"](fd);
}
async function writeR1csConstraints(fd, cir, logger, loggerCtx) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$iden3$2f$binfileutils$2f$src$2f$binfileutils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startWriteSection"](fd, 2);
    for(let i = 0; i < cir.constraints.length; i++){
        if (logger && i % 10000 == 0) logger.info(`${loggerCtx}: writing constraint: ${i}/${cir.constraints.length}`);
        await writeConstraint(cir.constraints[i]);
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$iden3$2f$binfileutils$2f$src$2f$binfileutils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["endWriteSection"](fd);
    function writeConstraint(c) {
        const n8 = cir.n8;
        const F = cir.F || cir.curve.Fr;
        const idxA = Object.keys(c[0]);
        const idxB = Object.keys(c[1]);
        const idxC = Object.keys(c[2]);
        const buff = new Uint8Array((idxA.length + idxB.length + idxC.length) * (n8 + 4) + 12);
        const buffV = new DataView(buff.buffer);
        let o = 0;
        buffV.setUint32(o, idxA.length, true);
        o += 4;
        for(let i = 0; i < idxA.length; i++){
            const coef = idxA[i];
            buffV.setUint32(o, coef, true);
            o += 4;
            F.toRprLE(buff, o, c[0][coef]);
            o += n8;
        }
        buffV.setUint32(o, idxB.length, true);
        o += 4;
        for(let i = 0; i < idxB.length; i++){
            const coef = idxB[i];
            buffV.setUint32(o, coef, true);
            o += 4;
            F.toRprLE(buff, o, c[1][coef]);
            o += n8;
        }
        buffV.setUint32(o, idxC.length, true);
        o += 4;
        for(let i = 0; i < idxC.length; i++){
            const coef = idxC[i];
            buffV.setUint32(o, coef, true);
            o += 4;
            F.toRprLE(buff, o, c[2][coef]);
            o += n8;
        }
        return fd.write(buff);
    }
}
async function writeR1csMap(fd, cir, logger, loggerCtx) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$iden3$2f$binfileutils$2f$src$2f$binfileutils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startWriteSection"](fd, 3);
    if (cir.map.length != cir.nVars) throw new Error("Invalid map size");
    for(let i = 0; i < cir.nVars; i++){
        if (logger && i % 10000 == 0) logger.info(`${loggerCtx}: writing map: ${i}/${cir.nVars}`);
        await fd.writeULE64(cir.map[i]);
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$iden3$2f$binfileutils$2f$src$2f$binfileutils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["endWriteSection"](fd);
}
async function writeR1cs(fileName, cir, logger, loggerCtx) {
    const fd = await __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$iden3$2f$binfileutils$2f$src$2f$binfileutils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBinFile"](fileName, "r1cs", 1, 3, 1 << 25, 1 << 22);
    await writeR1csHeader(fd, cir);
    await writeR1csConstraints(fd, cir, logger, loggerCtx);
    await writeR1csMap(fd, cir, logger, loggerCtx);
    await fd.close();
}
}),
"[project]/rayls-shield-landing-page/node_modules/ejs/lib/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*
 * EJS Embedded JavaScript templates
 * Copyright 2112 Matthew Eernisse (mde@fleegix.org)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
*/ /**
 * Private utility functions
 * @module utils
 * @private
 */ var regExpChars = /[|\\{}()[\]^$+*?.]/g;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function(obj, key) {
    return hasOwnProperty.apply(obj, [
        key
    ]);
};
/**
 * Escape characters reserved in regular expressions.
 *
 * If `string` is `undefined` or `null`, the empty string is returned.
 *
 * @param {String} string Input string
 * @return {String} Escaped string
 * @static
 * @private
 */ exports.escapeRegExpChars = function(string) {
    // istanbul ignore if
    if (!string) {
        return '';
    }
    return String(string).replace(regExpChars, '\\$&');
};
var _ENCODE_HTML_RULES = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&#34;',
    "'": '&#39;'
};
var _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
    return _ENCODE_HTML_RULES[c] || c;
}
/**
 * Stringified version of constants used by {@link module:utils.escapeXML}.
 *
 * It is used in the process of generating {@link ClientFunction}s.
 *
 * @readonly
 * @type {String}
 */ var escapeFuncStr = 'var _ENCODE_HTML_RULES = {\n' + '      "&": "&amp;"\n' + '    , "<": "&lt;"\n' + '    , ">": "&gt;"\n' + '    , \'"\': "&#34;"\n' + '    , "\'": "&#39;"\n' + '    }\n' + '  , _MATCH_HTML = /[&<>\'"]/g;\n' + 'function encode_char(c) {\n' + '  return _ENCODE_HTML_RULES[c] || c;\n' + '};\n';
/**
 * Escape characters reserved in XML.
 *
 * If `markup` is `undefined` or `null`, the empty string is returned.
 *
 * @implements {EscapeCallback}
 * @param {String} markup Input string
 * @return {String} Escaped string
 * @static
 * @private
 */ exports.escapeXML = function(markup) {
    return markup == undefined ? '' : String(markup).replace(_MATCH_HTML, encode_char);
};
function escapeXMLToString() {
    return Function.prototype.toString.call(this) + ';\n' + escapeFuncStr;
}
try {
    if (typeof Object.defineProperty === 'function') {
        // If the Function prototype is frozen, the "toString" property is non-writable. This means that any objects which inherit this property
        // cannot have the property changed using an assignment. If using strict mode, attempting that will cause an error. If not using strict
        // mode, attempting that will be silently ignored.
        // However, we can still explicitly shadow the prototype's "toString" property by defining a new "toString" property on this object.
        Object.defineProperty(exports.escapeXML, 'toString', {
            value: escapeXMLToString
        });
    } else {
        // If Object.defineProperty() doesn't exist, attempt to shadow this property using the assignment operator.
        exports.escapeXML.toString = escapeXMLToString;
    }
} catch (err) {
    console.warn('Unable to set escapeXML.toString (is the Function prototype frozen?)');
}
/**
 * Naive copy of properties from one object to another.
 * Does not recurse into non-scalar properties
 * Does not check to see if the property has a value before copying
 *
 * @param  {Object} to   Destination object
 * @param  {Object} from Source object
 * @return {Object}      Destination object
 * @static
 * @private
 */ exports.shallowCopy = function(to, from) {
    from = from || {};
    if (to !== null && to !== undefined) {
        for(var p in from){
            if (!hasOwn(from, p)) {
                continue;
            }
            if (p === '__proto__' || p === 'constructor') {
                continue;
            }
            to[p] = from[p];
        }
    }
    return to;
};
/**
 * Naive copy of a list of key names, from one object to another.
 * Only copies property if it is actually defined
 * Does not recurse into non-scalar properties
 *
 * @param  {Object} to   Destination object
 * @param  {Object} from Source object
 * @param  {Array} list List of properties to copy
 * @return {Object}      Destination object
 * @static
 * @private
 */ exports.shallowCopyFromList = function(to, from, list) {
    list = list || [];
    from = from || {};
    if (to !== null && to !== undefined) {
        for(var i = 0; i < list.length; i++){
            var p = list[i];
            if (typeof from[p] != 'undefined') {
                if (!hasOwn(from, p)) {
                    continue;
                }
                if (p === '__proto__' || p === 'constructor') {
                    continue;
                }
                to[p] = from[p];
            }
        }
    }
    return to;
};
/**
 * Simple in-process cache implementation. Does not implement limits of any
 * sort.
 *
 * @implements {Cache}
 * @static
 * @private
 */ exports.cache = {
    _data: {},
    set: function(key, val) {
        this._data[key] = val;
    },
    get: function(key) {
        return this._data[key];
    },
    remove: function(key) {
        delete this._data[key];
    },
    reset: function() {
        this._data = {};
    }
};
/**
 * Transforms hyphen case variable into camel case.
 *
 * @param {String} string Hyphen case string
 * @return {String} Camel case string
 * @static
 * @private
 */ exports.hyphenToCamel = function(str) {
    return str.replace(/-[a-z]/g, function(match) {
        return match[1].toUpperCase();
    });
};
/**
 * Returns a null-prototype object in runtimes that support it
 *
 * @return {Object} Object, prototype will be set to null where possible
 * @static
 * @private
 */ exports.createNullProtoObjWherePossible = function() {
    if (typeof Object.create == 'function') {
        return function() {
            return Object.create(null);
        };
    }
    if (!(({
        __proto__: null
    }) instanceof Object)) {
        return function() {
            return {
                __proto__: null
            };
        };
    }
    // Not possible, just pass through
    return function() {
        return {};
    };
}();
exports.hasOwnOnlyObject = function(obj) {
    var o = exports.createNullProtoObjWherePossible();
    for(var p in obj){
        if (hasOwn(obj, p)) {
            o[p] = obj[p];
        }
    }
    return o;
};
}),
"[project]/rayls-shield-landing-page/node_modules/ejs/package.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"name":"ejs","description":"Embedded JavaScript templates","keywords":["template","engine","ejs"],"version":"3.1.10","author":"Matthew Eernisse <mde@fleegix.org> (http://fleegix.org)","license":"Apache-2.0","bin":{"ejs":"./bin/cli.js"},"main":"./lib/ejs.js","jsdelivr":"ejs.min.js","unpkg":"ejs.min.js","repository":{"type":"git","url":"git://github.com/mde/ejs.git"},"bugs":"https://github.com/mde/ejs/issues","homepage":"https://github.com/mde/ejs","dependencies":{"jake":"^10.8.5"},"devDependencies":{"browserify":"^16.5.1","eslint":"^6.8.0","git-directory-deploy":"^1.5.1","jsdoc":"^4.0.2","lru-cache":"^4.0.1","mocha":"^10.2.0","uglify-js":"^3.3.16"},"engines":{"node":">=0.10.0"},"scripts":{"test":"npx jake test"}});}),
"[project]/rayls-shield-landing-page/node_modules/ejs/lib/ejs.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*
 * EJS Embedded JavaScript templates
 * Copyright 2112 Matthew Eernisse (mde@fleegix.org)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
*/ /**
 * @file Embedded JavaScript templating engine. {@link http://ejs.co}
 * @author Matthew Eernisse <mde@fleegix.org>
 * @author Tiancheng "Timothy" Gu <timothygu99@gmail.com>
 * @project EJS
 * @license {@link http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0}
 */ /**
 * EJS internal functions.
 *
 * Technically this "module" lies in the same file as {@link module:ejs}, for
 * the sake of organization all the private functions re grouped into this
 * module.
 *
 * @module ejs-internal
 * @private
 */ /**
 * Embedded JavaScript templating engine.
 *
 * @module ejs
 * @public
 */ var fs = __turbopack_context__.r("[externals]/fs [external] (fs, cjs)");
var path = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
var utils = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/ejs/lib/utils.js [app-ssr] (ecmascript)");
var scopeOptionWarned = false;
/** @type {string} */ var _VERSION_STRING = __turbopack_context__.r("[project]/rayls-shield-landing-page/node_modules/ejs/package.json (json)").version;
var _DEFAULT_OPEN_DELIMITER = '<';
var _DEFAULT_CLOSE_DELIMITER = '>';
var _DEFAULT_DELIMITER = '%';
var _DEFAULT_LOCALS_NAME = 'locals';
var _NAME = 'ejs';
var _REGEX_STRING = '(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)';
var _OPTS_PASSABLE_WITH_DATA = [
    'delimiter',
    'scope',
    'context',
    'debug',
    'compileDebug',
    'client',
    '_with',
    'rmWhitespace',
    'strict',
    'filename',
    'async'
];
// We don't allow 'cache' option to be passed in the data obj for
// the normal `render` call, but this is where Express 2 & 3 put it
// so we make an exception for `renderFile`
var _OPTS_PASSABLE_WITH_DATA_EXPRESS = _OPTS_PASSABLE_WITH_DATA.concat('cache');
var _BOM = /^\uFEFF/;
var _JS_IDENTIFIER = /^[a-zA-Z_$][0-9a-zA-Z_$]*$/;
/**
 * EJS template function cache. This can be a LRU object from lru-cache NPM
 * module. By default, it is {@link module:utils.cache}, a simple in-process
 * cache that grows continuously.
 *
 * @type {Cache}
 */ exports.cache = utils.cache;
/**
 * Custom file loader. Useful for template preprocessing or restricting access
 * to a certain part of the filesystem.
 *
 * @type {fileLoader}
 */ exports.fileLoader = fs.readFileSync;
/**
 * Name of the object containing the locals.
 *
 * This variable is overridden by {@link Options}`.localsName` if it is not
 * `undefined`.
 *
 * @type {String}
 * @public
 */ exports.localsName = _DEFAULT_LOCALS_NAME;
/**
 * Promise implementation -- defaults to the native implementation if available
 * This is mostly just for testability
 *
 * @type {PromiseConstructorLike}
 * @public
 */ exports.promiseImpl = new Function('return this;')().Promise;
/**
 * Get the path to the included file from the parent file path and the
 * specified path.
 *
 * @param {String}  name     specified path
 * @param {String}  filename parent file path
 * @param {Boolean} [isDir=false] whether the parent file path is a directory
 * @return {String}
 */ exports.resolveInclude = function(name, filename, isDir) {
    var dirname = path.dirname;
    var extname = path.extname;
    var resolve = path.resolve;
    var includePath = resolve(isDir ? filename : dirname(filename), name);
    var ext = extname(name);
    if (!ext) {
        includePath += '.ejs';
    }
    return includePath;
};
/**
 * Try to resolve file path on multiple directories
 *
 * @param  {String}        name  specified path
 * @param  {Array<String>} paths list of possible parent directory paths
 * @return {String}
 */ function resolvePaths(name, paths) {
    var filePath;
    if (paths.some(function(v) {
        filePath = exports.resolveInclude(name, v, true);
        return fs.existsSync(filePath);
    })) {
        return filePath;
    }
}
/**
 * Get the path to the included file by Options
 *
 * @param  {String}  path    specified path
 * @param  {Options} options compilation options
 * @return {String}
 */ function getIncludePath(path, options) {
    var includePath;
    var filePath;
    var views = options.views;
    var match = /^[A-Za-z]+:\\|^\//.exec(path);
    // Abs path
    if (match && match.length) {
        path = path.replace(/^\/*/, '');
        if (Array.isArray(options.root)) {
            includePath = resolvePaths(path, options.root);
        } else {
            includePath = exports.resolveInclude(path, options.root || '/', true);
        }
    } else {
        // Look relative to a passed filename first
        if (options.filename) {
            filePath = exports.resolveInclude(path, options.filename);
            if (fs.existsSync(filePath)) {
                includePath = filePath;
            }
        }
        // Then look in any views directories
        if (!includePath && Array.isArray(views)) {
            includePath = resolvePaths(path, views);
        }
        if (!includePath && typeof options.includer !== 'function') {
            throw new Error('Could not find the include file "' + options.escapeFunction(path) + '"');
        }
    }
    return includePath;
}
/**
 * Get the template from a string or a file, either compiled on-the-fly or
 * read from cache (if enabled), and cache the template if needed.
 *
 * If `template` is not set, the file specified in `options.filename` will be
 * read.
 *
 * If `options.cache` is true, this function reads the file from
 * `options.filename` so it must be set prior to calling this function.
 *
 * @memberof module:ejs-internal
 * @param {Options} options   compilation options
 * @param {String} [template] template source
 * @return {(TemplateFunction|ClientFunction)}
 * Depending on the value of `options.client`, either type might be returned.
 * @static
 */ function handleCache(options, template) {
    var func;
    var filename = options.filename;
    var hasTemplate = arguments.length > 1;
    if (options.cache) {
        if (!filename) {
            throw new Error('cache option requires a filename');
        }
        func = exports.cache.get(filename);
        if (func) {
            return func;
        }
        if (!hasTemplate) {
            template = fileLoader(filename).toString().replace(_BOM, '');
        }
    } else if (!hasTemplate) {
        // istanbul ignore if: should not happen at all
        if (!filename) {
            throw new Error('Internal EJS error: no file name or template ' + 'provided');
        }
        template = fileLoader(filename).toString().replace(_BOM, '');
    }
    func = exports.compile(template, options);
    if (options.cache) {
        exports.cache.set(filename, func);
    }
    return func;
}
/**
 * Try calling handleCache with the given options and data and call the
 * callback with the result. If an error occurs, call the callback with
 * the error. Used by renderFile().
 *
 * @memberof module:ejs-internal
 * @param {Options} options    compilation options
 * @param {Object} data        template data
 * @param {RenderFileCallback} cb callback
 * @static
 */ function tryHandleCache(options, data, cb) {
    var result;
    if (!cb) {
        if (typeof exports.promiseImpl == 'function') {
            return new exports.promiseImpl(function(resolve, reject) {
                try {
                    result = handleCache(options)(data);
                    resolve(result);
                } catch (err) {
                    reject(err);
                }
            });
        } else {
            throw new Error('Please provide a callback function');
        }
    } else {
        try {
            result = handleCache(options)(data);
        } catch (err) {
            return cb(err);
        }
        cb(null, result);
    }
}
/**
 * fileLoader is independent
 *
 * @param {String} filePath ejs file path.
 * @return {String} The contents of the specified file.
 * @static
 */ function fileLoader(filePath) {
    return exports.fileLoader(filePath);
}
/**
 * Get the template function.
 *
 * If `options.cache` is `true`, then the template is cached.
 *
 * @memberof module:ejs-internal
 * @param {String}  path    path for the specified file
 * @param {Options} options compilation options
 * @return {(TemplateFunction|ClientFunction)}
 * Depending on the value of `options.client`, either type might be returned
 * @static
 */ function includeFile(path, options) {
    var opts = utils.shallowCopy(utils.createNullProtoObjWherePossible(), options);
    opts.filename = getIncludePath(path, opts);
    if (typeof options.includer === 'function') {
        var includerResult = options.includer(path, opts.filename);
        if (includerResult) {
            if (includerResult.filename) {
                opts.filename = includerResult.filename;
            }
            if (includerResult.template) {
                return handleCache(opts, includerResult.template);
            }
        }
    }
    return handleCache(opts);
}
/**
 * Re-throw the given `err` in context to the `str` of ejs, `filename`, and
 * `lineno`.
 *
 * @implements {RethrowCallback}
 * @memberof module:ejs-internal
 * @param {Error}  err      Error object
 * @param {String} str      EJS source
 * @param {String} flnm     file name of the EJS file
 * @param {Number} lineno   line number of the error
 * @param {EscapeCallback} esc
 * @static
 */ function rethrow(err, str, flnm, lineno, esc) {
    var lines = str.split('\n');
    var start = Math.max(lineno - 3, 0);
    var end = Math.min(lines.length, lineno + 3);
    var filename = esc(flnm);
    // Error context
    var context = lines.slice(start, end).map(function(line, i) {
        var curr = i + start + 1;
        return (curr == lineno ? ' >> ' : '    ') + curr + '| ' + line;
    }).join('\n');
    // Alter exception message
    err.path = filename;
    err.message = (filename || 'ejs') + ':' + lineno + '\n' + context + '\n\n' + err.message;
    throw err;
}
function stripSemi(str) {
    return str.replace(/;(\s*$)/, '$1');
}
/**
 * Compile the given `str` of ejs into a template function.
 *
 * @param {String}  template EJS template
 *
 * @param {Options} [opts] compilation options
 *
 * @return {(TemplateFunction|ClientFunction)}
 * Depending on the value of `opts.client`, either type might be returned.
 * Note that the return type of the function also depends on the value of `opts.async`.
 * @public
 */ exports.compile = function compile(template, opts) {
    var templ;
    // v1 compat
    // 'scope' is 'context'
    // FIXME: Remove this in a future version
    if (opts && opts.scope) {
        if (!scopeOptionWarned) {
            console.warn('`scope` option is deprecated and will be removed in EJS 3');
            scopeOptionWarned = true;
        }
        if (!opts.context) {
            opts.context = opts.scope;
        }
        delete opts.scope;
    }
    templ = new Template(template, opts);
    return templ.compile();
};
/**
 * Render the given `template` of ejs.
 *
 * If you would like to include options but not data, you need to explicitly
 * call this function with `data` being an empty object or `null`.
 *
 * @param {String}   template EJS template
 * @param {Object}  [data={}] template data
 * @param {Options} [opts={}] compilation and rendering options
 * @return {(String|Promise<String>)}
 * Return value type depends on `opts.async`.
 * @public
 */ exports.render = function(template, d, o) {
    var data = d || utils.createNullProtoObjWherePossible();
    var opts = o || utils.createNullProtoObjWherePossible();
    // No options object -- if there are optiony names
    // in the data, copy them to options
    if (arguments.length == 2) {
        utils.shallowCopyFromList(opts, data, _OPTS_PASSABLE_WITH_DATA);
    }
    return handleCache(opts, template)(data);
};
/**
 * Render an EJS file at the given `path` and callback `cb(err, str)`.
 *
 * If you would like to include options but not data, you need to explicitly
 * call this function with `data` being an empty object or `null`.
 *
 * @param {String}             path     path to the EJS file
 * @param {Object}            [data={}] template data
 * @param {Options}           [opts={}] compilation and rendering options
 * @param {RenderFileCallback} cb callback
 * @public
 */ exports.renderFile = function() {
    var args = Array.prototype.slice.call(arguments);
    var filename = args.shift();
    var cb;
    var opts = {
        filename: filename
    };
    var data;
    var viewOpts;
    // Do we have a callback?
    if (typeof arguments[arguments.length - 1] == 'function') {
        cb = args.pop();
    }
    // Do we have data/opts?
    if (args.length) {
        // Should always have data obj
        data = args.shift();
        // Normal passed opts (data obj + opts obj)
        if (args.length) {
            // Use shallowCopy so we don't pollute passed in opts obj with new vals
            utils.shallowCopy(opts, args.pop());
        } else {
            // Express 3 and 4
            if (data.settings) {
                // Pull a few things from known locations
                if (data.settings.views) {
                    opts.views = data.settings.views;
                }
                if (data.settings['view cache']) {
                    opts.cache = true;
                }
                // Undocumented after Express 2, but still usable, esp. for
                // items that are unsafe to be passed along with data, like `root`
                viewOpts = data.settings['view options'];
                if (viewOpts) {
                    utils.shallowCopy(opts, viewOpts);
                }
            }
            // Express 2 and lower, values set in app.locals, or people who just
            // want to pass options in their data. NOTE: These values will override
            // anything previously set in settings  or settings['view options']
            utils.shallowCopyFromList(opts, data, _OPTS_PASSABLE_WITH_DATA_EXPRESS);
        }
        opts.filename = filename;
    } else {
        data = utils.createNullProtoObjWherePossible();
    }
    return tryHandleCache(opts, data, cb);
};
/**
 * Clear intermediate JavaScript cache. Calls {@link Cache#reset}.
 * @public
 */ /**
 * EJS template class
 * @public
 */ exports.Template = Template;
exports.clearCache = function() {
    exports.cache.reset();
};
function Template(text, optsParam) {
    var opts = utils.hasOwnOnlyObject(optsParam);
    var options = utils.createNullProtoObjWherePossible();
    this.templateText = text;
    /** @type {string | null} */ this.mode = null;
    this.truncate = false;
    this.currentLine = 1;
    this.source = '';
    options.client = opts.client || false;
    options.escapeFunction = opts.escape || opts.escapeFunction || utils.escapeXML;
    options.compileDebug = opts.compileDebug !== false;
    options.debug = !!opts.debug;
    options.filename = opts.filename;
    options.openDelimiter = opts.openDelimiter || exports.openDelimiter || _DEFAULT_OPEN_DELIMITER;
    options.closeDelimiter = opts.closeDelimiter || exports.closeDelimiter || _DEFAULT_CLOSE_DELIMITER;
    options.delimiter = opts.delimiter || exports.delimiter || _DEFAULT_DELIMITER;
    options.strict = opts.strict || false;
    options.context = opts.context;
    options.cache = opts.cache || false;
    options.rmWhitespace = opts.rmWhitespace;
    options.root = opts.root;
    options.includer = opts.includer;
    options.outputFunctionName = opts.outputFunctionName;
    options.localsName = opts.localsName || exports.localsName || _DEFAULT_LOCALS_NAME;
    options.views = opts.views;
    options.async = opts.async;
    options.destructuredLocals = opts.destructuredLocals;
    options.legacyInclude = typeof opts.legacyInclude != 'undefined' ? !!opts.legacyInclude : true;
    if (options.strict) {
        options._with = false;
    } else {
        options._with = typeof opts._with != 'undefined' ? opts._with : true;
    }
    this.opts = options;
    this.regex = this.createRegex();
}
Template.modes = {
    EVAL: 'eval',
    ESCAPED: 'escaped',
    RAW: 'raw',
    COMMENT: 'comment',
    LITERAL: 'literal'
};
Template.prototype = {
    createRegex: function() {
        var str = _REGEX_STRING;
        var delim = utils.escapeRegExpChars(this.opts.delimiter);
        var open = utils.escapeRegExpChars(this.opts.openDelimiter);
        var close = utils.escapeRegExpChars(this.opts.closeDelimiter);
        str = str.replace(/%/g, delim).replace(/</g, open).replace(/>/g, close);
        return new RegExp(str);
    },
    compile: function() {
        /** @type {string} */ var src;
        /** @type {ClientFunction} */ var fn;
        var opts = this.opts;
        var prepended = '';
        var appended = '';
        /** @type {EscapeCallback} */ var escapeFn = opts.escapeFunction;
        /** @type {FunctionConstructor} */ var ctor;
        /** @type {string} */ var sanitizedFilename = opts.filename ? JSON.stringify(opts.filename) : 'undefined';
        if (!this.source) {
            this.generateSource();
            prepended += '  var __output = "";\n' + '  function __append(s) { if (s !== undefined && s !== null) __output += s }\n';
            if (opts.outputFunctionName) {
                if (!_JS_IDENTIFIER.test(opts.outputFunctionName)) {
                    throw new Error('outputFunctionName is not a valid JS identifier.');
                }
                prepended += '  var ' + opts.outputFunctionName + ' = __append;' + '\n';
            }
            if (opts.localsName && !_JS_IDENTIFIER.test(opts.localsName)) {
                throw new Error('localsName is not a valid JS identifier.');
            }
            if (opts.destructuredLocals && opts.destructuredLocals.length) {
                var destructuring = '  var __locals = (' + opts.localsName + ' || {}),\n';
                for(var i = 0; i < opts.destructuredLocals.length; i++){
                    var name = opts.destructuredLocals[i];
                    if (!_JS_IDENTIFIER.test(name)) {
                        throw new Error('destructuredLocals[' + i + '] is not a valid JS identifier.');
                    }
                    if (i > 0) {
                        destructuring += ',\n  ';
                    }
                    destructuring += name + ' = __locals.' + name;
                }
                prepended += destructuring + ';\n';
            }
            if (opts._with !== false) {
                prepended += '  with (' + opts.localsName + ' || {}) {' + '\n';
                appended += '  }' + '\n';
            }
            appended += '  return __output;' + '\n';
            this.source = prepended + this.source + appended;
        }
        if (opts.compileDebug) {
            src = 'var __line = 1' + '\n' + '  , __lines = ' + JSON.stringify(this.templateText) + '\n' + '  , __filename = ' + sanitizedFilename + ';' + '\n' + 'try {' + '\n' + this.source + '} catch (e) {' + '\n' + '  rethrow(e, __lines, __filename, __line, escapeFn);' + '\n' + '}' + '\n';
        } else {
            src = this.source;
        }
        if (opts.client) {
            src = 'escapeFn = escapeFn || ' + escapeFn.toString() + ';' + '\n' + src;
            if (opts.compileDebug) {
                src = 'rethrow = rethrow || ' + rethrow.toString() + ';' + '\n' + src;
            }
        }
        if (opts.strict) {
            src = '"use strict";\n' + src;
        }
        if (opts.debug) {
            console.log(src);
        }
        if (opts.compileDebug && opts.filename) {
            src = src + '\n' + '//# sourceURL=' + sanitizedFilename + '\n';
        }
        try {
            if (opts.async) {
                // Have to use generated function for this, since in envs without support,
                // it breaks in parsing
                try {
                    ctor = new Function('return (async function(){}).constructor;')();
                } catch (e) {
                    if (e instanceof SyntaxError) {
                        throw new Error('This environment does not support async/await');
                    } else {
                        throw e;
                    }
                }
            } else {
                ctor = Function;
            }
            fn = new ctor(opts.localsName + ', escapeFn, include, rethrow', src);
        } catch (e) {
            // istanbul ignore else
            if (e instanceof SyntaxError) {
                if (opts.filename) {
                    e.message += ' in ' + opts.filename;
                }
                e.message += ' while compiling ejs\n\n';
                e.message += 'If the above error is not helpful, you may want to try EJS-Lint:\n';
                e.message += 'https://github.com/RyanZim/EJS-Lint';
                if (!opts.async) {
                    e.message += '\n';
                    e.message += 'Or, if you meant to create an async function, pass `async: true` as an option.';
                }
            }
            throw e;
        }
        // Return a callable function which will execute the function
        // created by the source-code, with the passed data as locals
        // Adds a local `include` function which allows full recursive include
        var returnedFn = opts.client ? fn : function anonymous(data) {
            var include = function(path, includeData) {
                var d = utils.shallowCopy(utils.createNullProtoObjWherePossible(), data);
                if (includeData) {
                    d = utils.shallowCopy(d, includeData);
                }
                return includeFile(path, opts)(d);
            };
            return fn.apply(opts.context, [
                data || utils.createNullProtoObjWherePossible(),
                escapeFn,
                include,
                rethrow
            ]);
        };
        if (opts.filename && typeof Object.defineProperty === 'function') {
            var filename = opts.filename;
            var basename = path.basename(filename, path.extname(filename));
            try {
                Object.defineProperty(returnedFn, 'name', {
                    value: basename,
                    writable: false,
                    enumerable: false,
                    configurable: true
                });
            } catch (e) {}
        }
        return returnedFn;
    },
    generateSource: function() {
        var opts = this.opts;
        if (opts.rmWhitespace) {
            // Have to use two separate replace here as `^` and `$` operators don't
            // work well with `\r` and empty lines don't work well with the `m` flag.
            this.templateText = this.templateText.replace(/[\r\n]+/g, '\n').replace(/^\s+|\s+$/gm, '');
        }
        // Slurp spaces and tabs before <%_ and after _%>
        this.templateText = this.templateText.replace(/[ \t]*<%_/gm, '<%_').replace(/_%>[ \t]*/gm, '_%>');
        var self = this;
        var matches = this.parseTemplateText();
        var d = this.opts.delimiter;
        var o = this.opts.openDelimiter;
        var c = this.opts.closeDelimiter;
        if (matches && matches.length) {
            matches.forEach(function(line, index) {
                var closing;
                // If this is an opening tag, check for closing tags
                // FIXME: May end up with some false positives here
                // Better to store modes as k/v with openDelimiter + delimiter as key
                // Then this can simply check against the map
                if (line.indexOf(o + d) === 0 // If it is a tag
                 && line.indexOf(o + d + d) !== 0) {
                    closing = matches[index + 2];
                    if (!(closing == d + c || closing == '-' + d + c || closing == '_' + d + c)) {
                        throw new Error('Could not find matching close tag for "' + line + '".');
                    }
                }
                self.scanLine(line);
            });
        }
    },
    parseTemplateText: function() {
        var str = this.templateText;
        var pat = this.regex;
        var result = pat.exec(str);
        var arr = [];
        var firstPos;
        while(result){
            firstPos = result.index;
            if (firstPos !== 0) {
                arr.push(str.substring(0, firstPos));
                str = str.slice(firstPos);
            }
            arr.push(result[0]);
            str = str.slice(result[0].length);
            result = pat.exec(str);
        }
        if (str) {
            arr.push(str);
        }
        return arr;
    },
    _addOutput: function(line) {
        if (this.truncate) {
            // Only replace single leading linebreak in the line after
            // -%> tag -- this is the single, trailing linebreak
            // after the tag that the truncation mode replaces
            // Handle Win / Unix / old Mac linebreaks -- do the \r\n
            // combo first in the regex-or
            line = line.replace(/^(?:\r\n|\r|\n)/, '');
            this.truncate = false;
        }
        if (!line) {
            return line;
        }
        // Preserve literal slashes
        line = line.replace(/\\/g, '\\\\');
        // Convert linebreaks
        line = line.replace(/\n/g, '\\n');
        line = line.replace(/\r/g, '\\r');
        // Escape double-quotes
        // - this will be the delimiter during execution
        line = line.replace(/"/g, '\\"');
        this.source += '    ; __append("' + line + '")' + '\n';
    },
    scanLine: function(line) {
        var self = this;
        var d = this.opts.delimiter;
        var o = this.opts.openDelimiter;
        var c = this.opts.closeDelimiter;
        var newLineCount = 0;
        newLineCount = line.split('\n').length - 1;
        switch(line){
            case o + d:
            case o + d + '_':
                this.mode = Template.modes.EVAL;
                break;
            case o + d + '=':
                this.mode = Template.modes.ESCAPED;
                break;
            case o + d + '-':
                this.mode = Template.modes.RAW;
                break;
            case o + d + '#':
                this.mode = Template.modes.COMMENT;
                break;
            case o + d + d:
                this.mode = Template.modes.LITERAL;
                this.source += '    ; __append("' + line.replace(o + d + d, o + d) + '")' + '\n';
                break;
            case d + d + c:
                this.mode = Template.modes.LITERAL;
                this.source += '    ; __append("' + line.replace(d + d + c, d + c) + '")' + '\n';
                break;
            case d + c:
            case '-' + d + c:
            case '_' + d + c:
                if (this.mode == Template.modes.LITERAL) {
                    this._addOutput(line);
                }
                this.mode = null;
                this.truncate = line.indexOf('-') === 0 || line.indexOf('_') === 0;
                break;
            default:
                // In script mode, depends on type of tag
                if (this.mode) {
                    // If '//' is found without a line break, add a line break.
                    switch(this.mode){
                        case Template.modes.EVAL:
                        case Template.modes.ESCAPED:
                        case Template.modes.RAW:
                            if (line.lastIndexOf('//') > line.lastIndexOf('\n')) {
                                line += '\n';
                            }
                    }
                    switch(this.mode){
                        // Just executing code
                        case Template.modes.EVAL:
                            this.source += '    ; ' + line + '\n';
                            break;
                        // Exec, esc, and output
                        case Template.modes.ESCAPED:
                            this.source += '    ; __append(escapeFn(' + stripSemi(line) + '))' + '\n';
                            break;
                        // Exec and output
                        case Template.modes.RAW:
                            this.source += '    ; __append(' + stripSemi(line) + ')' + '\n';
                            break;
                        case Template.modes.COMMENT:
                            break;
                        // Literal <%% mode, append as raw output
                        case Template.modes.LITERAL:
                            this._addOutput(line);
                            break;
                    }
                } else {
                    this._addOutput(line);
                }
        }
        if (self.opts.compileDebug && newLineCount) {
            this.currentLine += newLineCount;
            this.source += '    ; __line = ' + this.currentLine + '\n';
        }
    }
};
/**
 * Escape characters reserved in XML.
 *
 * This is simply an export of {@link module:utils.escapeXML}.
 *
 * If `markup` is `undefined` or `null`, the empty string is returned.
 *
 * @param {String} markup Input string
 * @return {String} Escaped string
 * @public
 * @func
 * */ exports.escapeXML = utils.escapeXML;
/**
 * Express.js support.
 *
 * This is an alias for {@link module:ejs.renderFile}, in order to support
 * Express.js out-of-the-box.
 *
 * @func
 */ exports.__express = exports.renderFile;
/**
 * Version of EJS.
 *
 * @readonly
 * @type {String}
 * @public
 */ exports.VERSION = _VERSION_STRING;
/**
 * Name for detection of EJS.
 *
 * @readonly
 * @type {String}
 * @public
 */ exports.name = _NAME;
/* istanbul ignore if */ if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
}),
];

//# sourceMappingURL=5df0c_cee83a68._.js.map