(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/QuickViewModal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuickViewModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/CartContext.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function QuickViewModal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(110);
    if ($[0] !== "d57d80e710b786508874adbe36817aec13391682a7d0bce087a71a3b4d357167") {
        for(let $i = 0; $i < 110; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d57d80e710b786508874adbe36817aec13391682a7d0bce087a71a3b4d357167";
    }
    const { product, isOpen, onClose } = t0;
    const { addToCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const [selectedImage, setSelectedImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [isAdding, setIsAdding] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    let t2;
    if ($[1] !== product) {
        t1 = ({
            "QuickViewModal[useEffect()]": ()=>{
                if (product) {
                    setSelectedImage(product.image);
                    setQuantity(1);
                }
            }
        })["QuickViewModal[useEffect()]"];
        t2 = [
            product
        ];
        $[1] = product;
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    let t4;
    if ($[4] !== isOpen || $[5] !== onClose) {
        t3 = ({
            "QuickViewModal[useEffect()]": ()=>{
                const handleEscape = {
                    "QuickViewModal[useEffect() > handleEscape]": (e)=>{
                        if (e.key === "Escape") {
                            onClose();
                        }
                    }
                }["QuickViewModal[useEffect() > handleEscape]"];
                if (isOpen) {
                    document.addEventListener("keydown", handleEscape);
                    document.body.style.overflow = "hidden";
                }
                return ()=>{
                    document.removeEventListener("keydown", handleEscape);
                    document.body.style.overflow = "unset";
                };
            }
        })["QuickViewModal[useEffect()]"];
        t4 = [
            isOpen,
            onClose
        ];
        $[4] = isOpen;
        $[5] = onClose;
        $[6] = t3;
        $[7] = t4;
    } else {
        t3 = $[6];
        t4 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[8] !== addToCart || $[9] !== onClose || $[10] !== product || $[11] !== quantity) {
        t5 = ({
            "QuickViewModal[handleAddToCart]": async ()=>{
                setIsAdding(true);
                await new Promise(_temp);
                for(let i = 0; i < quantity; i++){
                    addToCart(product);
                }
                setIsAdding(false);
                onClose();
            }
        })["QuickViewModal[handleAddToCart]"];
        $[8] = addToCart;
        $[9] = onClose;
        $[10] = product;
        $[11] = quantity;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    const handleAddToCart = t5;
    if (!isOpen || !product) {
        return null;
    }
    let t6;
    if ($[13] !== onClose) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-slate-900/70 backdrop-blur-sm transition-opacity duration-300",
            onClick: onClose
        }, void 0, false, {
            fileName: "[project]/src/components/QuickViewModal.js",
            lineNumber: 105,
            columnNumber: 10
        }, this);
        $[13] = onClose;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    let t7;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-5 h-5 text-slate-700 dark:text-slate-300",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M6 18L18 6M6 6l12 12"
            }, void 0, false, {
                fileName: "[project]/src/components/QuickViewModal.js",
                lineNumber: 113,
                columnNumber: 124
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/QuickViewModal.js",
            lineNumber: 113,
            columnNumber: 10
        }, this);
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] !== onClose) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClose,
            className: "absolute top-6 right-6 z-20 w-10 h-10 bg-white/90 dark:bg-slate-700/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-slate-600 hover:scale-110 transition-all duration-300 shadow-lg border border-slate-200 dark:border-slate-600",
            "aria-label": "Close modal",
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/components/QuickViewModal.js",
            lineNumber: 120,
            columnNumber: 10
        }, this);
        $[16] = onClose;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t9;
    if ($[18] !== product.name || $[19] !== selectedImage) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: selectedImage,
            alt: product.name,
            fill: true,
            className: "object-cover transition-transform duration-700 group-hover:scale-105",
            priority: true
        }, void 0, false, {
            fileName: "[project]/src/components/QuickViewModal.js",
            lineNumber: 128,
            columnNumber: 10
        }, this);
        $[18] = product.name;
        $[19] = selectedImage;
        $[20] = t9;
    } else {
        t9 = $[20];
    }
    let t10;
    if ($[21] !== product.thumbnails || $[22] !== selectedImage) {
        t10 = ({
            "QuickViewModal[<button>.onClick]": ()=>{
                const currentIndex = product.thumbnails.indexOf(selectedImage);
                const prevIndex = currentIndex > 0 ? currentIndex - 1 : product.thumbnails.length - 1;
                setSelectedImage(product.thumbnails[prevIndex]);
            }
        })["QuickViewModal[<button>.onClick]"];
        $[21] = product.thumbnails;
        $[22] = selectedImage;
        $[23] = t10;
    } else {
        t10 = $[23];
    }
    let t11;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-5 h-5 text-slate-700 dark:text-slate-300",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M15 19l-7-7 7-7"
            }, void 0, false, {
                fileName: "[project]/src/components/QuickViewModal.js",
                lineNumber: 152,
                columnNumber: 125
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/QuickViewModal.js",
            lineNumber: 152,
            columnNumber: 11
        }, this);
        $[24] = t11;
    } else {
        t11 = $[24];
    }
    let t12;
    if ($[25] !== t10) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t10,
            className: "absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg opacity-0 group-hover:opacity-100",
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/components/QuickViewModal.js",
            lineNumber: 159,
            columnNumber: 11
        }, this);
        $[25] = t10;
        $[26] = t12;
    } else {
        t12 = $[26];
    }
    let t13;
    if ($[27] !== product.thumbnails || $[28] !== selectedImage) {
        t13 = ({
            "QuickViewModal[<button>.onClick]": ()=>{
                const currentIndex_0 = product.thumbnails.indexOf(selectedImage);
                const nextIndex = currentIndex_0 < product.thumbnails.length - 1 ? currentIndex_0 + 1 : 0;
                setSelectedImage(product.thumbnails[nextIndex]);
            }
        })["QuickViewModal[<button>.onClick]"];
        $[27] = product.thumbnails;
        $[28] = selectedImage;
        $[29] = t13;
    } else {
        t13 = $[29];
    }
    let t14;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-5 h-5 text-slate-700 dark:text-slate-300",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M9 5l7 7-7 7"
            }, void 0, false, {
                fileName: "[project]/src/components/QuickViewModal.js",
                lineNumber: 182,
                columnNumber: 125
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/QuickViewModal.js",
            lineNumber: 182,
            columnNumber: 11
        }, this);
        $[30] = t14;
    } else {
        t14 = $[30];
    }
    let t15;
    if ($[31] !== t13) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t13,
            className: "absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg opacity-0 group-hover:opacity-100",
            children: t14
        }, void 0, false, {
            fileName: "[project]/src/components/QuickViewModal.js",
            lineNumber: 189,
            columnNumber: 11
        }, this);
        $[31] = t13;
        $[32] = t15;
    } else {
        t15 = $[32];
    }
    let t16;
    if ($[33] !== t12 || $[34] !== t15 || $[35] !== t9) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative aspect-square mb-6 rounded-2xl overflow-hidden group",
            children: [
                t9,
                t12,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/QuickViewModal.js",
            lineNumber: 197,
            columnNumber: 11
        }, this);
        $[33] = t12;
        $[34] = t15;
        $[35] = t9;
        $[36] = t16;
    } else {
        t16 = $[36];
    }
    let t17;
    if ($[37] !== product.name || $[38] !== product.thumbnails || $[39] !== selectedImage) {
        let t18;
        if ($[41] !== product.name || $[42] !== selectedImage) {
            t18 = ({
                "QuickViewModal[product.thumbnails.map()]": (thumb, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "QuickViewModal[product.thumbnails.map() > <button>.onClick]": ()=>setSelectedImage(thumb)
                        }["QuickViewModal[product.thumbnails.map() > <button>.onClick]"],
                        className: `shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${selectedImage === thumb ? "border-blue-500 shadow-lg shadow-blue-500/25 scale-105" : "border-slate-200 dark:border-slate-600 hover:border-slate-300 dark:hover:border-slate-500"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: thumb,
                            alt: `${product.name} view ${index + 1}`,
                            width: 64,
                            height: 64,
                            className: "w-full h-full object-cover"
                        }, void 0, false, {
                            fileName: "[project]/src/components/QuickViewModal.js",
                            lineNumber: 212,
                            columnNumber: 368
                        }, this)
                    }, index, false, {
                        fileName: "[project]/src/components/QuickViewModal.js",
                        lineNumber: 210,
                        columnNumber: 71
                    }, this)
            })["QuickViewModal[product.thumbnails.map()]"];
            $[41] = product.name;
            $[42] = selectedImage;
            $[43] = t18;
        } else {
            t18 = $[43];
        }
        t17 = product.thumbnails.map(t18);
        $[37] = product.name;
        $[38] = product.thumbnails;
        $[39] = selectedImage;
        $[40] = t17;
    } else {
        t17 = $[40];
    }
    let t18;
    if ($[44] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center space-x-3 overflow-x-auto py-2",
            children: t17
        }, void 0, false, {
            fileName: "[project]/src/components/QuickViewModal.js",
            lineNumber: 230,
            columnNumber: 11
        }, this);
        $[44] = t17;
        $[45] = t18;
    } else {
        t18 = $[45];
    }
    let t19;
    if ($[46] !== t16 || $[47] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative p-8 bg-linear-to-br from-slate-50 to-white dark:from-slate-700 dark:to-slate-800",
            children: [
                t16,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/QuickViewModal.js",
            lineNumber: 238,
            columnNumber: 11
        }, this);
        $[46] = t16;
        $[47] = t18;
        $[48] = t19;
    } else {
        t19 = $[48];
    }
    let t20;
    if ($[49] !== product.category) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start justify-between mb-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",
                children: product.category
            }, void 0, false, {
                fileName: "[project]/src/components/QuickViewModal.js",
                lineNumber: 247,
                columnNumber: 66
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/QuickViewModal.js",
            lineNumber: 247,
            columnNumber: 11
        }, this);
        $[49] = product.category;
        $[50] = t20;
    } else {
        t20 = $[50];
    }
    let t21;
    if ($[51] !== product.name) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-3xl font-bold text-slate-900 dark:text-white mb-3 leading-tight",
            children: product.name
        }, void 0, false, {
            fileName: "[project]/src/components/QuickViewModal.js",
            lineNumber: 255,
            columnNumber: 11
        }, this);
        $[51] = product.name;
        $[52] = t21;
    } else {
        t21 = $[52];
    }
    let t22;
    if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center space-x-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex text-yellow-400",
                    children: [
                        ...Array(5)
                    ].map(_QuickViewModalAnonymous)
                }, void 0, false, {
                    fileName: "[project]/src/components/QuickViewModal.js",
                    lineNumber: 263,
                    columnNumber: 56
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm text-slate-500 dark:text-slate-400",
                    children: "4.8 (128 reviews)"
                }, void 0, false, {
                    fileName: "[project]/src/components/QuickViewModal.js",
                    lineNumber: 263,
                    columnNumber: 145
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/QuickViewModal.js",
            lineNumber: 263,
            columnNumber: 11
        }, this);
        $[53] = t22;
    } else {
        t22 = $[53];
    }
    let t23;
    if ($[54] !== product.price) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-4xl font-black text-slate-900 dark:text-white",
            children: [
                "$",
                product.price
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/QuickViewModal.js",
            lineNumber: 270,
            columnNumber: 11
        }, this);
        $[54] = product.price;
        $[55] = t23;
    } else {
        t23 = $[55];
    }
    let t24;
    if ($[56] !== t22 || $[57] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between mb-4",
            children: [
                t22,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/QuickViewModal.js",
            lineNumber: 278,
            columnNumber: 11
        }, this);
        $[56] = t22;
        $[57] = t23;
        $[58] = t24;
    } else {
        t24 = $[58];
    }
    let t25;
    if ($[59] !== t20 || $[60] !== t21 || $[61] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t20,
                t21,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/QuickViewModal.js",
            lineNumber: 287,
            columnNumber: 11
        }, this);
        $[59] = t20;
        $[60] = t21;
        $[61] = t24;
        $[62] = t25;
    } else {
        t25 = $[62];
    }
    let t26;
    if ($[63] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-semibold text-slate-900 dark:text-white mb-3",
            children: "Description"
        }, void 0, false, {
            fileName: "[project]/src/components/QuickViewModal.js",
            lineNumber: 297,
            columnNumber: 11
        }, this);
        $[63] = t26;
    } else {
        t26 = $[63];
    }
    let t27;
    if ($[64] !== product.description) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t26,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-slate-600 dark:text-slate-300 leading-relaxed",
                    children: product.description
                }, void 0, false, {
                    fileName: "[project]/src/components/QuickViewModal.js",
                    lineNumber: 304,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/QuickViewModal.js",
            lineNumber: 304,
            columnNumber: 11
        }, this);
        $[64] = product.description;
        $[65] = t27;
    } else {
        t27 = $[65];
    }
    let t28;
    if ($[66] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-semibold text-slate-900 dark:text-white mb-3",
            children: "Quantity"
        }, void 0, false, {
            fileName: "[project]/src/components/QuickViewModal.js",
            lineNumber: 312,
            columnNumber: 11
        }, this);
        $[66] = t28;
    } else {
        t28 = $[66];
    }
    let t29;
    let t30;
    let t31;
    if ($[67] !== quantity) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: {
                "QuickViewModal[<button>.onClick]": ()=>setQuantity(Math.max(1, quantity - 1))
            }["QuickViewModal[<button>.onClick]"],
            className: "w-12 h-12 bg-white dark:bg-slate-600 border border-slate-200 dark:border-slate-500 rounded-xl flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-500 transition-colors font-semibold text-slate-700 dark:text-slate-300",
            children: "−"
        }, void 0, false, {
            fileName: "[project]/src/components/QuickViewModal.js",
            lineNumber: 321,
            columnNumber: 11
        }, this);
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-2xl font-bold text-slate-900 dark:text-white w-16 text-center",
            children: quantity
        }, void 0, false, {
            fileName: "[project]/src/components/QuickViewModal.js",
            lineNumber: 324,
            columnNumber: 11
        }, this);
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: {
                "QuickViewModal[<button>.onClick]": ()=>setQuantity(quantity + 1)
            }["QuickViewModal[<button>.onClick]"],
            className: "w-12 h-12 bg-white dark:bg-slate-600 border border-slate-200 dark:border-slate-500 rounded-xl flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-500 transition-colors font-semibold text-slate-700 dark:text-slate-300",
            children: "+"
        }, void 0, false, {
            fileName: "[project]/src/components/QuickViewModal.js",
            lineNumber: 325,
            columnNumber: 11
        }, this);
        $[67] = quantity;
        $[68] = t29;
        $[69] = t30;
        $[70] = t31;
    } else {
        t29 = $[68];
        t30 = $[69];
        t31 = $[70];
    }
    const t32 = product.price * quantity;
    let t33;
    if ($[71] !== t32) {
        t33 = t32.toFixed(2);
        $[71] = t32;
        $[72] = t33;
    } else {
        t33 = $[72];
    }
    let t34;
    if ($[73] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "ml-auto text-lg font-semibold text-slate-600 dark:text-slate-400",
            children: [
                "Total: ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-blue-600 dark:text-blue-400",
                    children: [
                        "$",
                        t33
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/QuickViewModal.js",
                    lineNumber: 348,
                    columnNumber: 100
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/QuickViewModal.js",
            lineNumber: 348,
            columnNumber: 11
        }, this);
        $[73] = t33;
        $[74] = t34;
    } else {
        t34 = $[74];
    }
    let t35;
    if ($[75] !== t29 || $[76] !== t30 || $[77] !== t31 || $[78] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-slate-50 dark:bg-slate-700/50 rounded-2xl p-4",
            children: [
                t28,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center space-x-4",
                    children: [
                        t29,
                        t30,
                        t31,
                        t34
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/QuickViewModal.js",
                    lineNumber: 356,
                    columnNumber: 82
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/QuickViewModal.js",
            lineNumber: 356,
            columnNumber: 11
        }, this);
        $[75] = t29;
        $[76] = t30;
        $[77] = t31;
        $[78] = t34;
        $[79] = t35;
    } else {
        t35 = $[79];
    }
    let t36;
    if ($[80] !== t25 || $[81] !== t27 || $[82] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t25,
                t27,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/QuickViewModal.js",
            lineNumber: 367,
            columnNumber: 11
        }, this);
        $[80] = t25;
        $[81] = t27;
        $[82] = t35;
        $[83] = t36;
    } else {
        t36 = $[83];
    }
    const t37 = `w-full py-4 px-6 rounded-2xl font-bold text-white transition-all duration-300 flex items-center justify-center space-x-3 ${isAdding ? "bg-green-600 scale-95" : "bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-gray-100 hover:scale-105 active:scale-95"} shadow-lg hover:shadow-xl`;
    let t38;
    if ($[84] !== isAdding || $[85] !== product.price || $[86] !== quantity) {
        t38 = isAdding ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-5 h-5 animate-spin",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M5 13l4 4L19 7"
                    }, void 0, false, {
                        fileName: "[project]/src/components/QuickViewModal.js",
                        lineNumber: 378,
                        columnNumber: 116
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/QuickViewModal.js",
                    lineNumber: 378,
                    columnNumber: 24
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Added to Cart!"
                }, void 0, false, {
                    fileName: "[project]/src/components/QuickViewModal.js",
                    lineNumber: 378,
                    columnNumber: 210
                }, this)
            ]
        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-5 h-5",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
                    }, void 0, false, {
                        fileName: "[project]/src/components/QuickViewModal.js",
                        lineNumber: 378,
                        columnNumber: 324
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/QuickViewModal.js",
                    lineNumber: 378,
                    columnNumber: 245
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        "Add ",
                        quantity,
                        " to Cart - $",
                        (product.price * quantity).toFixed(2)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/QuickViewModal.js",
                    lineNumber: 378,
                    columnNumber: 430
                }, this)
            ]
        }, void 0, true);
        $[84] = isAdding;
        $[85] = product.price;
        $[86] = quantity;
        $[87] = t38;
    } else {
        t38 = $[87];
    }
    let t39;
    if ($[88] !== handleAddToCart || $[89] !== isAdding || $[90] !== t37 || $[91] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleAddToCart,
            disabled: isAdding,
            className: t37,
            children: t38
        }, void 0, false, {
            fileName: "[project]/src/components/QuickViewModal.js",
            lineNumber: 388,
            columnNumber: 11
        }, this);
        $[88] = handleAddToCart;
        $[89] = isAdding;
        $[90] = t37;
        $[91] = t38;
        $[92] = t39;
    } else {
        t39 = $[92];
    }
    let t40;
    if ($[93] !== onClose) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClose,
            className: "w-full py-3 px-6 border-2 border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-2xl font-semibold hover:border-slate-300 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all duration-300",
            children: "Continue Shopping"
        }, void 0, false, {
            fileName: "[project]/src/components/QuickViewModal.js",
            lineNumber: 399,
            columnNumber: 11
        }, this);
        $[93] = onClose;
        $[94] = t40;
    } else {
        t40 = $[94];
    }
    let t41;
    if ($[95] !== t39 || $[96] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4 pt-6",
            children: [
                t39,
                t40
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/QuickViewModal.js",
            lineNumber: 407,
            columnNumber: 11
        }, this);
        $[95] = t39;
        $[96] = t40;
        $[97] = t41;
    } else {
        t41 = $[97];
    }
    let t42;
    if ($[98] !== t36 || $[99] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-8 flex flex-col justify-between",
            children: [
                t36,
                t41
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/QuickViewModal.js",
            lineNumber: 416,
            columnNumber: 11
        }, this);
        $[98] = t36;
        $[99] = t41;
        $[100] = t42;
    } else {
        t42 = $[100];
    }
    let t43;
    if ($[101] !== t19 || $[102] !== t42) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 xl:grid-cols-2 min-h-[600px]",
            children: [
                t19,
                t42
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/QuickViewModal.js",
            lineNumber: 425,
            columnNumber: 11
        }, this);
        $[101] = t19;
        $[102] = t42;
        $[103] = t43;
    } else {
        t43 = $[103];
    }
    let t44;
    if ($[104] !== t43 || $[105] !== t8) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-full items-end justify-center p-4 sm:items-center sm:p-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative bg-white dark:bg-slate-800 rounded-3xl shadow-2xl max-w-6xl w-full mx-auto overflow-hidden transform transition-all duration-300 scale-95 sm:scale-100 group",
                children: [
                    t8,
                    t43
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/QuickViewModal.js",
                lineNumber: 434,
                columnNumber: 96
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/QuickViewModal.js",
            lineNumber: 434,
            columnNumber: 11
        }, this);
        $[104] = t43;
        $[105] = t8;
        $[106] = t44;
    } else {
        t44 = $[106];
    }
    let t45;
    if ($[107] !== t44 || $[108] !== t6) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 overflow-y-auto",
            children: [
                t6,
                t44
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/QuickViewModal.js",
            lineNumber: 443,
            columnNumber: 11
        }, this);
        $[107] = t44;
        $[108] = t6;
        $[109] = t45;
    } else {
        t45 = $[109];
    }
    return t45;
}
_s(QuickViewModal, "X+UVYqGSYDYgvv8edcEGkO8ub2I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = QuickViewModal;
function _QuickViewModalAnonymous(_, i_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-5 h-5 fill-current",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        }, void 0, false, {
            fileName: "[project]/src/components/QuickViewModal.js",
            lineNumber: 453,
            columnNumber: 78
        }, this)
    }, i_0, false, {
        fileName: "[project]/src/components/QuickViewModal.js",
        lineNumber: 453,
        columnNumber: 10
    }, this);
}
function _temp(resolve) {
    return setTimeout(resolve, 600);
}
var _c;
__turbopack_context__.k.register(_c, "QuickViewModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/products.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/CartContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuickViewModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/QuickViewModal.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function Home() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(48);
    if ($[0] !== "878aa953c6b41859d35350b64c965e6c979bb58bf7acb83920d67063d1cb3c06") {
        for(let $i = 0; $i < 48; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "878aa953c6b41859d35350b64c965e6c979bb58bf7acb83920d67063d1cb3c06";
    }
    const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const [quickViewProduct, setQuickViewProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isQuickViewOpen, setIsQuickViewOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    if ($[1] !== addToCart || $[2] !== addToWishlist || $[3] !== isInWishlist || $[4] !== removeFromWishlist) {
        const trendingProducts = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].slice(0, 6);
        t5 = "min-h-screen bg-white dark:bg-slate-900";
        let t8;
        if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 39,
                columnNumber: 12
            }, this);
            $[13] = t8;
        } else {
            t8 = $[13];
        }
        let t9;
        if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow",
                style: {
                    animationDelay: "2s"
                }
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 46,
                columnNumber: 12
            }, this);
            $[14] = t9;
        } else {
            t9 = $[14];
        }
        let t10;
        let t11;
        if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden",
                children: [
                    t8,
                    t9,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse-slow",
                        style: {
                            animationDelay: "4s"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 56,
                        columnNumber: 71
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 56,
                columnNumber: 13
            }, this);
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 59,
                columnNumber: 13
            }, this);
            $[15] = t10;
            $[16] = t11;
        } else {
            t10 = $[15];
            t11 = $[16];
        }
        let t12;
        if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-2 h-2 bg-green-400 rounded-full animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 68,
                        columnNumber: 136
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-medium text-white/80",
                        children: "Trusted by 10,000+ customers worldwide"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 68,
                        columnNumber: 203
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 68,
                columnNumber: 13
            }, this);
            $[17] = t12;
        } else {
            t12 = $[17];
        }
        let t13;
        let t14;
        if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
            t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-5xl md:text-7xl lg:text-8xl font-black tracking-tight",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent",
                        children: "ELEVATE"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 76,
                        columnNumber: 88
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 76,
                        columnNumber: 188
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent",
                        children: "YOUR STYLE"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 76,
                        columnNumber: 194
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 76,
                columnNumber: 13
            }, this);
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed",
                children: "Discover curated collections of premium products designed for the modern lifestyle. Quality meets innovation in every piece."
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 77,
                columnNumber: 13
            }, this);
            $[18] = t13;
            $[19] = t14;
        } else {
            t13 = $[18];
            t14 = $[19];
        }
        let t15;
        if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
            t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row gap-4 justify-center items-center pt-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/shop",
                        className: "group relative bg-white text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-linear-to-r from-white to-gray-100 rounded-xl opacity-100 group-hover:opacity-0 transition-opacity duration-300"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 86,
                                columnNumber: 276
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative",
                                children: "Explore Collection"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 86,
                                columnNumber: 427
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -inset-1 rounded-xl bg-linear-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 blur transition-all duration-300"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 86,
                                columnNumber: 479
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 86,
                        columnNumber: 95
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/about",
                        className: "group border-2 border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:border-white/40 hover:bg-white/5 transition-all duration-300 backdrop-blur-sm",
                        children: "Our Story"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 86,
                        columnNumber: 643
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 86,
                columnNumber: 13
            }, this);
            $[20] = t15;
        } else {
            t15 = $[20];
        }
        let t16;
        if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
            t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative max-w-6xl mx-auto px-6 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-8",
                    children: [
                        t12,
                        t13,
                        t14,
                        t15,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto",
                            children: [
                                {
                                    number: "10K+",
                                    label: "Happy Customers"
                                },
                                {
                                    number: "500+",
                                    label: "Premium Products"
                                },
                                {
                                    number: "24/7",
                                    label: "Expert Support"
                                }
                            ].map(_HomeAnonymous)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 93,
                            columnNumber: 121
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 93,
                    columnNumber: 74
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 93,
                columnNumber: 13
            }, this);
            $[21] = t16;
        } else {
            t16 = $[21];
        }
        if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-slate-900",
                children: [
                    t10,
                    t11,
                    t16,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-8 left-1/2 -translate-x-1/2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-6 h-10 border-2 border-white/30 rounded-full flex justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 108,
                                columnNumber: 322
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 108,
                            columnNumber: 238
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 108,
                        columnNumber: 177
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 108,
                columnNumber: 12
            }, this);
            $[22] = t6;
        } else {
            t6 = $[22];
        }
        let t17;
        if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
            t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-1.5 h-1.5 bg-blue-500 rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 115,
                                columnNumber: 181
                            }, this),
                            "Categories"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 115,
                        columnNumber: 48
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6",
                        children: "Shop By Category"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 115,
                        columnNumber: 253
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto",
                        children: "Discover our carefully curated collections designed to meet your every need with style and quality."
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 115,
                        columnNumber: 357
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 115,
                columnNumber: 13
            }, this);
            $[23] = t17;
        } else {
            t17 = $[23];
        }
        let t18;
        if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
            t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categories"].map(_HomeCategoriesMap)
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 122,
                columnNumber: 13
            }, this);
            $[24] = t18;
        } else {
            t18 = $[24];
        }
        if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 bg-white dark:bg-slate-900",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-6",
                    children: [
                        t17,
                        t18,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mt-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/shop",
                                className: "inline-flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 dark:hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl",
                                children: [
                                    "Browse All Categories",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-4 h-4",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M17 8l4 4m0 0l-4 4m4-4H3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 128,
                                            columnNumber: 518
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 128,
                                        columnNumber: 439
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 128,
                                columnNumber: 151
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 128,
                            columnNumber: 116
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 128,
                    columnNumber: 66
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 128,
                columnNumber: 12
            }, this);
            $[25] = t7;
        } else {
            t7 = $[25];
        }
        t4 = "py-20 bg-slate-50 dark:bg-slate-800/50";
        t2 = "max-w-6xl mx-auto px-6";
        if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "bg-linear-to-r from-slate-900 to-slate-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent",
                            children: "Featured Products"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 136,
                            columnNumber: 131
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 136,
                        columnNumber: 47
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto",
                        children: "Handpicked selections that combine exceptional quality with timeless design."
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 136,
                        columnNumber: 284
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 136,
                columnNumber: 12
            }, this);
            $[26] = t3;
        } else {
            t3 = $[26];
        }
        t0 = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8";
        t1 = trendingProducts.map({
            "Home[trendingProducts.map()]": (product, index_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-slate-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/product/${product.id}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: product.image,
                                        alt: product.name,
                                        width: 400,
                                        height: 300,
                                        className: "w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 143,
                                        columnNumber: 336
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 143,
                                    columnNumber: 298
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: {
                                        "Home[trendingProducts.map() > <button>.onClick]": ()=>isInWishlist(product.id) ? removeFromWishlist(product.id) : addToWishlist(product)
                                    }["Home[trendingProducts.map() > <button>.onClick]"],
                                    className: `absolute top-4 right-4 p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${isInWishlist(product.id) ? "bg-red-500 text-white shadow-lg" : "bg-white/90 dark:bg-slate-800/90 text-gray-600 dark:text-gray-300 hover:bg-white hover:shadow-lg"}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-5 h-5",
                                        fill: isInWishlist(product.id) ? "currentColor" : "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 145,
                                            columnNumber: 454
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 145,
                                        columnNumber: 329
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 143,
                                    columnNumber: 509
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 143,
                            columnNumber: 256
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/product/${product.id}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-lg text-slate-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors",
                                        children: product.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 145,
                                        columnNumber: 731
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 145,
                                    columnNumber: 693
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-2xl font-black text-slate-900 dark:text-white",
                                            children: [
                                                "$",
                                                product.price
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 145,
                                            columnNumber: 971
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center text-sm text-yellow-600",
                                            children: "★★★★☆"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 145,
                                            columnNumber: 1063
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 145,
                                    columnNumber: 915
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: {
                                                "Home[trendingProducts.map() > <button>.onClick]": ()=>addToCart(product)
                                            }["Home[trendingProducts.map() > <button>.onClick]"],
                                            className: "w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-3 rounded-xl font-bold hover:bg-slate-800 dark:hover:bg-gray-100 transition-all duration-300 hover:scale-105 active:scale-95",
                                            children: "Add to Cart"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 145,
                                            columnNumber: 1166
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: {
                                                "Home[trendingProducts.map() > <button>.onClick]": ()=>{
                                                    setQuickViewProduct(product);
                                                    setIsQuickViewOpen(true);
                                                }
                                            }["Home[trendingProducts.map() > <button>.onClick]"],
                                            className: "w-full border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-gray-300 py-2 rounded-xl font-medium hover:border-slate-400 dark:hover:border-slate-500 transition-all duration-300",
                                            children: "Quick View"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 147,
                                            columnNumber: 292
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 145,
                                    columnNumber: 1139
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 145,
                            columnNumber: 672
                        }, this)
                    ]
                }, product.id, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 143,
                    columnNumber: 61
                }, this)
        }["Home[trendingProducts.map()]"]);
        $[1] = addToCart;
        $[2] = addToWishlist;
        $[3] = isInWishlist;
        $[4] = removeFromWishlist;
        $[5] = t0;
        $[6] = t1;
        $[7] = t2;
        $[8] = t3;
        $[9] = t4;
        $[10] = t5;
        $[11] = t6;
        $[12] = t7;
    } else {
        t0 = $[5];
        t1 = $[6];
        t2 = $[7];
        t3 = $[8];
        t4 = $[9];
        t5 = $[10];
        t6 = $[11];
        t7 = $[12];
    }
    let t8;
    if ($[27] !== t0 || $[28] !== t1) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t0,
            children: t1
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 178,
            columnNumber: 10
        }, this);
        $[27] = t0;
        $[28] = t1;
        $[29] = t8;
    } else {
        t8 = $[29];
    }
    let t9;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mt-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/shop",
                className: "inline-flex items-center gap-2 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-gray-300 px-8 py-4 rounded-xl font-bold hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all duration-300",
                children: [
                    "View All Products",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-4 h-4",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M17 8l4 4m0 0l-4 4m4-4H3"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 187,
                            columnNumber: 440
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 187,
                        columnNumber: 361
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 187,
                columnNumber: 45
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 187,
            columnNumber: 10
        }, this);
        $[30] = t9;
    } else {
        t9 = $[30];
    }
    let t10;
    if ($[31] !== t2 || $[32] !== t3 || $[33] !== t8) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: [
                t3,
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 194,
            columnNumber: 11
        }, this);
        $[31] = t2;
        $[32] = t3;
        $[33] = t8;
        $[34] = t10;
    } else {
        t10 = $[34];
    }
    let t11;
    if ($[35] !== t10 || $[36] !== t4) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: t4,
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 204,
            columnNumber: 11
        }, this);
        $[35] = t10;
        $[36] = t4;
        $[37] = t11;
    } else {
        t11 = $[37];
    }
    let t12;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = ({
            "Home[<QuickViewModal>.onClose]": ()=>{
                setIsQuickViewOpen(false);
                setQuickViewProduct(null);
            }
        })["Home[<QuickViewModal>.onClose]"];
        $[38] = t12;
    } else {
        t12 = $[38];
    }
    let t13;
    if ($[39] !== isQuickViewOpen || $[40] !== quickViewProduct) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuickViewModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            product: quickViewProduct,
            isOpen: isQuickViewOpen,
            onClose: t12
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 225,
            columnNumber: 11
        }, this);
        $[39] = isQuickViewOpen;
        $[40] = quickViewProduct;
        $[41] = t13;
    } else {
        t13 = $[41];
    }
    let t14;
    if ($[42] !== t11 || $[43] !== t13 || $[44] !== t5 || $[45] !== t6 || $[46] !== t7) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            children: [
                t6,
                t7,
                t11,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 234,
            columnNumber: 11
        }, this);
        $[42] = t11;
        $[43] = t13;
        $[44] = t5;
        $[45] = t6;
        $[46] = t7;
        $[47] = t14;
    } else {
        t14 = $[47];
    }
    return t14;
}
_s(Home, "Z7FohLZgGxvhk1hRY12eD2v6VhA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = Home;
function _HomeCategoriesMap(category, index_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: `/shop?category=${category}`,
        className: "group w-full max-w-sm bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-200 dark:border-slate-700",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-48 bg-gray-100 dark:bg-slate-700 flex items-center justify-center overflow-hidden",
                children: [
                    category === "Men" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&h=300&fit=crop",
                        alt: "Men's Fashion",
                        className: "w-full h-full object-cover"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 247,
                        columnNumber: 387
                    }, this),
                    category === "Women" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=300&fit=crop",
                        alt: "Women's Fashion",
                        className: "w-full h-full object-cover"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 247,
                        columnNumber: 567
                    }, this),
                    category === "Kids" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "https://images.unsplash.com/photo-1503454532315-69dd2b4c1c3f?w=400&h=300&fit=crop",
                        alt: "Kids Fashion",
                        className: "w-full h-full object-cover"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 247,
                        columnNumber: 748
                    }, this),
                    category === "Accessories" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400&h=300&fit=crop",
                        alt: "Accessories",
                        className: "w-full h-full object-cover"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 247,
                        columnNumber: 933
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 247,
                        columnNumber: 1086
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-4 left-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-lg px-3 py-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm font-semibold text-slate-700 dark:text-white",
                            children: category
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 247,
                            columnNumber: 1296
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 247,
                        columnNumber: 1186
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 247,
                columnNumber: 254
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors",
                        children: [
                            category,
                            " Collection"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 247,
                        columnNumber: 1429
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 dark:text-gray-400 text-sm mb-4",
                        children: [
                            "Explore our premium ",
                            category.toLowerCase(),
                            " selection"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 247,
                        columnNumber: 1604
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-blue-600 dark:text-blue-400 text-sm font-medium",
                                children: "Shop Now"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 247,
                                columnNumber: 1779
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-4 h-4 text-blue-600 dark:text-blue-400 transform group-hover:translate-x-1 transition-transform duration-300",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M9 5l7 7-7 7"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 247,
                                    columnNumber: 2047
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 247,
                                columnNumber: 1865
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 247,
                        columnNumber: 1723
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 247,
                columnNumber: 1396
            }, this)
        ]
    }, category, true, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 247,
        columnNumber: 10
    }, this);
}
function _HomeAnonymous(stat, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-2xl md:text-3xl font-bold text-white mb-2",
                children: stat.number
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 250,
                columnNumber: 56
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm text-gray-400 font-medium",
                children: stat.label
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 250,
                columnNumber: 139
            }, this)
        ]
    }, stat.label, true, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 250,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_ab81fd03._.js.map