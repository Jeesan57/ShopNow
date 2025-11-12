(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/context/CartContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartProvider",
    ()=>CartProvider,
    "useCart",
    ()=>useCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
const CartContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])();
function CartProvider(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(39);
    if ($[0] !== "9aada3c032f2775c5b21ce16e37607c95f8a14570db433b60142598daa9c4e20") {
        for(let $i = 0; $i < 39; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9aada3c032f2775c5b21ce16e37607c95f8a14570db433b60142598daa9c4e20";
    }
    const { children } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [cartItems, setCartItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [];
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const [wishlistItems, setWishlistItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    const [darkMode, setDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(_CartProviderUseState);
    let t3;
    let t4;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "CartProvider[useEffect()]": ()=>{
                const savedCart = localStorage.getItem("shopnow-cart");
                if (savedCart) {
                    setCartItems(JSON.parse(savedCart));
                }
                const savedWishlist = localStorage.getItem("shopnow-wishlist");
                if (savedWishlist) {
                    setWishlistItems(JSON.parse(savedWishlist));
                }
            }
        })["CartProvider[useEffect()]"];
        t4 = [];
        $[3] = t3;
        $[4] = t4;
    } else {
        t3 = $[3];
        t4 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    let t6;
    if ($[5] !== darkMode) {
        t5 = ({
            "CartProvider[useLayoutEffect()]": ()=>{
                if (darkMode) {
                    document.documentElement.classList.add("dark");
                } else {
                    document.documentElement.classList.remove("dark");
                }
            }
        })["CartProvider[useLayoutEffect()]"];
        t6 = [
            darkMode
        ];
        $[5] = darkMode;
        $[6] = t5;
        $[7] = t6;
    } else {
        t5 = $[6];
        t6 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(t5, t6);
    let t7;
    let t8;
    if ($[8] !== cartItems) {
        t7 = ({
            "CartProvider[useEffect()]": ()=>{
                localStorage.setItem("shopnow-cart", JSON.stringify(cartItems));
            }
        })["CartProvider[useEffect()]"];
        t8 = [
            cartItems
        ];
        $[8] = cartItems;
        $[9] = t7;
        $[10] = t8;
    } else {
        t7 = $[9];
        t8 = $[10];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t7, t8);
    let t10;
    let t9;
    if ($[11] !== wishlistItems) {
        t9 = ({
            "CartProvider[useEffect()]": ()=>{
                localStorage.setItem("shopnow-wishlist", JSON.stringify(wishlistItems));
            }
        })["CartProvider[useEffect()]"];
        t10 = [
            wishlistItems
        ];
        $[11] = wishlistItems;
        $[12] = t10;
        $[13] = t9;
    } else {
        t10 = $[12];
        t9 = $[13];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t9, t10);
    let t11;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = ({
            "CartProvider[addToCart]": (product)=>{
                setCartItems({
                    "CartProvider[addToCart > setCartItems()]": (prevItems)=>{
                        const existingItem = prevItems.find({
                            "CartProvider[addToCart > setCartItems() > prevItems.find()]": (item)=>item.id === product.id
                        }["CartProvider[addToCart > setCartItems() > prevItems.find()]"]);
                        if (existingItem) {
                            return prevItems.map({
                                "CartProvider[addToCart > setCartItems() > prevItems.map()]": (item_0)=>item_0.id === product.id ? {
                                        ...item_0,
                                        quantity: item_0.quantity + 1
                                    } : item_0
                            }["CartProvider[addToCart > setCartItems() > prevItems.map()]"]);
                        } else {
                            return [
                                ...prevItems,
                                {
                                    ...product,
                                    quantity: 1
                                }
                            ];
                        }
                    }
                }["CartProvider[addToCart > setCartItems()]"]);
            }
        })["CartProvider[addToCart]"];
        $[14] = t11;
    } else {
        t11 = $[14];
    }
    const addToCart = t11;
    let t12;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = ({
            "CartProvider[removeFromCart]": (productId)=>{
                setCartItems({
                    "CartProvider[removeFromCart > setCartItems()]": (prevItems_0)=>prevItems_0.filter({
                            "CartProvider[removeFromCart > setCartItems() > prevItems_0.filter()]": (item_1)=>item_1.id !== productId
                        }["CartProvider[removeFromCart > setCartItems() > prevItems_0.filter()]"])
                }["CartProvider[removeFromCart > setCartItems()]"]);
            }
        })["CartProvider[removeFromCart]"];
        $[15] = t12;
    } else {
        t12 = $[15];
    }
    const removeFromCart = t12;
    let t13;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = ({
            "CartProvider[updateQuantity]": (productId_0, quantity)=>{
                if (quantity <= 0) {
                    removeFromCart(productId_0);
                    return;
                }
                setCartItems({
                    "CartProvider[updateQuantity > setCartItems()]": (prevItems_1)=>prevItems_1.map({
                            "CartProvider[updateQuantity > setCartItems() > prevItems_1.map()]": (item_2)=>item_2.id === productId_0 ? {
                                    ...item_2,
                                    quantity
                                } : item_2
                        }["CartProvider[updateQuantity > setCartItems() > prevItems_1.map()]"])
                }["CartProvider[updateQuantity > setCartItems()]"]);
            }
        })["CartProvider[updateQuantity]"];
        $[16] = t13;
    } else {
        t13 = $[16];
    }
    const updateQuantity = t13;
    let t14;
    if ($[17] !== cartItems) {
        t14 = ({
            "CartProvider[getTotalItems]": ()=>cartItems.reduce(_CartProviderGetTotalItemsCartItemsReduce, 0)
        })["CartProvider[getTotalItems]"];
        $[17] = cartItems;
        $[18] = t14;
    } else {
        t14 = $[18];
    }
    const getTotalItems = t14;
    let t15;
    if ($[19] !== cartItems) {
        t15 = ({
            "CartProvider[getTotalPrice]": ()=>cartItems.reduce(_CartProviderGetTotalPriceCartItemsReduce, 0)
        })["CartProvider[getTotalPrice]"];
        $[19] = cartItems;
        $[20] = t15;
    } else {
        t15 = $[20];
    }
    const getTotalPrice = t15;
    let t16;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = ({
            "CartProvider[clearCart]": ()=>{
                setCartItems([]);
            }
        })["CartProvider[clearCart]"];
        $[21] = t16;
    } else {
        t16 = $[21];
    }
    const clearCart = t16;
    let t17;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = ({
            "CartProvider[addToWishlist]": (product_0)=>{
                setWishlistItems({
                    "CartProvider[addToWishlist > setWishlistItems()]": (prevItems_2)=>{
                        const existingItem_0 = prevItems_2.find({
                            "CartProvider[addToWishlist > setWishlistItems() > prevItems_2.find()]": (item_5)=>item_5.id === product_0.id
                        }["CartProvider[addToWishlist > setWishlistItems() > prevItems_2.find()]"]);
                        if (!existingItem_0) {
                            return [
                                ...prevItems_2,
                                product_0
                            ];
                        }
                        return prevItems_2;
                    }
                }["CartProvider[addToWishlist > setWishlistItems()]"]);
            }
        })["CartProvider[addToWishlist]"];
        $[22] = t17;
    } else {
        t17 = $[22];
    }
    const addToWishlist = t17;
    let t18;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = ({
            "CartProvider[removeFromWishlist]": (productId_1)=>{
                setWishlistItems({
                    "CartProvider[removeFromWishlist > setWishlistItems()]": (prevItems_3)=>prevItems_3.filter({
                            "CartProvider[removeFromWishlist > setWishlistItems() > prevItems_3.filter()]": (item_6)=>item_6.id !== productId_1
                        }["CartProvider[removeFromWishlist > setWishlistItems() > prevItems_3.filter()]"])
                }["CartProvider[removeFromWishlist > setWishlistItems()]"]);
            }
        })["CartProvider[removeFromWishlist]"];
        $[23] = t18;
    } else {
        t18 = $[23];
    }
    const removeFromWishlist = t18;
    let t19;
    if ($[24] !== wishlistItems) {
        t19 = ({
            "CartProvider[isInWishlist]": (productId_2)=>wishlistItems.some({
                    "CartProvider[isInWishlist > wishlistItems.some()]": (item_7)=>item_7.id === productId_2
                }["CartProvider[isInWishlist > wishlistItems.some()]"])
        })["CartProvider[isInWishlist]"];
        $[24] = wishlistItems;
        $[25] = t19;
    } else {
        t19 = $[25];
    }
    const isInWishlist = t19;
    let t20;
    if ($[26] !== darkMode) {
        t20 = ({
            "CartProvider[toggleDarkMode]": ()=>{
                const newDarkMode = !darkMode;
                setDarkMode(newDarkMode);
                if (newDarkMode) {
                    document.documentElement.classList.add("dark");
                    localStorage.setItem("shopnow-theme", "dark");
                } else {
                    document.documentElement.classList.remove("dark");
                    localStorage.setItem("shopnow-theme", "light");
                }
            }
        })["CartProvider[toggleDarkMode]"];
        $[26] = darkMode;
        $[27] = t20;
    } else {
        t20 = $[27];
    }
    const toggleDarkMode = t20;
    let t21;
    if ($[28] !== cartItems || $[29] !== darkMode || $[30] !== getTotalItems || $[31] !== getTotalPrice || $[32] !== isInWishlist || $[33] !== toggleDarkMode || $[34] !== wishlistItems) {
        t21 = {
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            getTotalItems,
            getTotalPrice,
            clearCart,
            wishlistItems,
            addToWishlist,
            removeFromWishlist,
            isInWishlist,
            darkMode,
            toggleDarkMode
        };
        $[28] = cartItems;
        $[29] = darkMode;
        $[30] = getTotalItems;
        $[31] = getTotalPrice;
        $[32] = isInWishlist;
        $[33] = toggleDarkMode;
        $[34] = wishlistItems;
        $[35] = t21;
    } else {
        t21 = $[35];
    }
    let t22;
    if ($[36] !== children || $[37] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CartContext.Provider, {
            value: t21,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/context/CartContext.js",
            lineNumber: 318,
            columnNumber: 11
        }, this);
        $[36] = children;
        $[37] = t21;
        $[38] = t22;
    } else {
        t22 = $[38];
    }
    return t22;
}
_s(CartProvider, "aozW77CF6/5EW9dY8IVtgFsh/pw=");
_c = CartProvider;
function _CartProviderGetTotalPriceCartItemsReduce(total_0, item_4) {
    return total_0 + item_4.price * item_4.quantity;
}
function _CartProviderGetTotalItemsCartItemsReduce(total, item_3) {
    return total + item_3.quantity;
}
function _CartProviderUseState() {
    if ("TURBOPACK compile-time truthy", 1) {
        const savedTheme = localStorage.getItem("shopnow-theme");
        if (savedTheme === "dark") {
            document.documentElement.classList.add("dark");
            return true;
        }
        if (savedTheme === "light") {
            document.documentElement.classList.remove("dark");
            return false;
        }
        document.documentElement.classList.remove("dark");
        return false;
    }
    //TURBOPACK unreachable
    ;
}
function useCart() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "9aada3c032f2775c5b21ce16e37607c95f8a14570db433b60142598daa9c4e20") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9aada3c032f2775c5b21ce16e37607c95f8a14570db433b60142598daa9c4e20";
    }
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
_s1(useCart, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "CartProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Cart.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Cart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/CartContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Cart(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(66);
    if ($[0] !== "036d5a3bb9fd316d6a610c518c9505a7c34b30e7b5ef313af88e5cb1f9a64a7f") {
        for(let $i = 0; $i < 66; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "036d5a3bb9fd316d6a610c518c9505a7c34b30e7b5ef313af88e5cb1f9a64a7f";
    }
    const { isOpen, onClose } = t0;
    const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const [isRemoving, setIsRemoving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    if ($[1] !== cartItems || $[2] !== clearCart || $[3] !== getTotalPrice || $[4] !== isOpen || $[5] !== isRemoving || $[6] !== onClose || $[7] !== removeFromCart || $[8] !== updateQuantity) {
        t8 = Symbol.for("react.early_return_sentinel");
        bb0: {
            const total = getTotalPrice();
            const itemCount = cartItems.reduce(_CartCartItemsReduce, 0);
            if (!isOpen) {
                t8 = null;
                break bb0;
            }
            let t9;
            if ($[17] !== removeFromCart) {
                t9 = ({
                    "Cart[handleRemove]": async (itemId)=>{
                        setIsRemoving(itemId);
                        await new Promise(_temp);
                        removeFromCart(itemId);
                        setIsRemoving(null);
                    }
                })["Cart[handleRemove]"];
                $[17] = removeFromCart;
                $[18] = t9;
            } else {
                t9 = $[18];
            }
            const handleRemove = t9;
            let t10;
            if ($[19] !== handleRemove || $[20] !== updateQuantity) {
                t10 = ({
                    "Cart[handleQuantityChange]": (itemId_0, newQuantity)=>{
                        if (newQuantity <= 0) {
                            handleRemove(itemId_0);
                        } else {
                            updateQuantity(itemId_0, newQuantity);
                        }
                    }
                })["Cart[handleQuantityChange]"];
                $[19] = handleRemove;
                $[20] = updateQuantity;
                $[21] = t10;
            } else {
                t10 = $[21];
            }
            const handleQuantityChange = t10;
            t6 = "fixed inset-0 z-50 overflow-hidden";
            if ($[22] !== onClose) {
                t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-slate-900/70 backdrop-blur-xl transition-opacity duration-300",
                    onClick: onClose
                }, void 0, false, {
                    fileName: "[project]/src/components/Cart.js",
                    lineNumber: 80,
                    columnNumber: 14
                }, this);
                $[22] = onClose;
                $[23] = t7;
            } else {
                t7 = $[23];
            }
            t5 = "absolute right-0 top-0 h-full w-full max-w-md transform transition-transform duration-300 ease-in-out";
            t1 = "flex flex-col h-full bg-white dark:bg-slate-800 shadow-2xl border-l border-slate-200 dark:border-slate-700";
            let t11;
            if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
                t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-5 h-5 text-white",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5H19M7 13v8a2 2 0 002 2h10a2 2 0 002-2v-3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Cart.js",
                            lineNumber: 90,
                            columnNumber: 188
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Cart.js",
                        lineNumber: 90,
                        columnNumber: 98
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Cart.js",
                    lineNumber: 90,
                    columnNumber: 15
                }, this);
                $[24] = t11;
            } else {
                t11 = $[24];
            }
            let t12;
            if ($[25] !== itemCount) {
                t12 = itemCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold animate-bounce",
                    children: itemCount
                }, void 0, false, {
                    fileName: "[project]/src/components/Cart.js",
                    lineNumber: 97,
                    columnNumber: 32
                }, this);
                $[25] = itemCount;
                $[26] = t12;
            } else {
                t12 = $[26];
            }
            let t13;
            if ($[27] !== t12) {
                t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        t11,
                        t12
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Cart.js",
                    lineNumber: 105,
                    columnNumber: 15
                }, this);
                $[27] = t12;
                $[28] = t13;
            } else {
                t13 = $[28];
            }
            let t14;
            if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
                t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-black text-slate-900 dark:text-white",
                    children: "Your Cart"
                }, void 0, false, {
                    fileName: "[project]/src/components/Cart.js",
                    lineNumber: 113,
                    columnNumber: 15
                }, this);
                $[29] = t14;
            } else {
                t14 = $[29];
            }
            const t15 = itemCount === 1 ? "item" : "items";
            let t16;
            if ($[30] !== itemCount || $[31] !== t15) {
                t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t14,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-slate-600 dark:text-slate-400",
                            children: [
                                itemCount,
                                " ",
                                t15
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Cart.js",
                            lineNumber: 121,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Cart.js",
                    lineNumber: 121,
                    columnNumber: 15
                }, this);
                $[30] = itemCount;
                $[31] = t15;
                $[32] = t16;
            } else {
                t16 = $[32];
            }
            let t17;
            if ($[33] !== t13 || $[34] !== t16) {
                t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center space-x-3",
                    children: [
                        t13,
                        t16
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Cart.js",
                    lineNumber: 130,
                    columnNumber: 15
                }, this);
                $[33] = t13;
                $[34] = t16;
                $[35] = t17;
            } else {
                t17 = $[35];
            }
            let t18;
            if ($[36] !== cartItems.length || $[37] !== clearCart) {
                t18 = cartItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: clearCart,
                    className: "p-2 text-slate-400 hover:text-red-500 transition-colors duration-200",
                    title: "Clear cart",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-5 h-5",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Cart.js",
                            lineNumber: 139,
                            columnNumber: 246
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Cart.js",
                        lineNumber: 139,
                        columnNumber: 167
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Cart.js",
                    lineNumber: 139,
                    columnNumber: 39
                }, this);
                $[36] = cartItems.length;
                $[37] = clearCart;
                $[38] = t18;
            } else {
                t18 = $[38];
            }
            let t19;
            if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
                t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                        fileName: "[project]/src/components/Cart.js",
                        lineNumber: 148,
                        columnNumber: 129
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Cart.js",
                    lineNumber: 148,
                    columnNumber: 15
                }, this);
                $[39] = t19;
            } else {
                t19 = $[39];
            }
            let t20;
            if ($[40] !== onClose) {
                t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "w-10 h-10 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-xl flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-600 hover:scale-110 transition-all duration-200",
                    children: t19
                }, void 0, false, {
                    fileName: "[project]/src/components/Cart.js",
                    lineNumber: 155,
                    columnNumber: 15
                }, this);
                $[40] = onClose;
                $[41] = t20;
            } else {
                t20 = $[41];
            }
            let t21;
            if ($[42] !== t18 || $[43] !== t20) {
                t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center space-x-2",
                    children: [
                        t18,
                        t20
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Cart.js",
                    lineNumber: 163,
                    columnNumber: 15
                }, this);
                $[42] = t18;
                $[43] = t20;
                $[44] = t21;
            } else {
                t21 = $[44];
            }
            if ($[45] !== t17 || $[46] !== t21) {
                t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700 bg-gradient-to-r from-slate-50 to-white dark:from-slate-700 dark:to-slate-800",
                    children: [
                        t17,
                        t21
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Cart.js",
                    lineNumber: 171,
                    columnNumber: 14
                }, this);
                $[45] = t17;
                $[46] = t21;
                $[47] = t2;
            } else {
                t2 = $[47];
            }
            if ($[48] !== cartItems || $[49] !== handleQuantityChange || $[50] !== handleRemove || $[51] !== isRemoving || $[52] !== onClose) {
                t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto",
                    children: cartItems.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center justify-center h-full text-center p-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-24 h-24 mb-6 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-12 h-12 text-slate-400",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5H19M7 13v8a2 2 0 002 2h10a2 2 0 002-2v-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Cart.js",
                                        lineNumber: 179,
                                        columnNumber: 367
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Cart.js",
                                    lineNumber: 179,
                                    columnNumber: 271
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Cart.js",
                                lineNumber: 179,
                                columnNumber: 162
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-bold text-slate-900 dark:text-white mb-3",
                                children: "Your cart is empty"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Cart.js",
                                lineNumber: 179,
                                columnNumber: 540
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-600 dark:text-slate-400 mb-6 max-w-sm",
                                children: "Looks like you haven't added any items to your cart yet. Start shopping to discover amazing products!"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Cart.js",
                                lineNumber: 179,
                                columnNumber: 634
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "inline-flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-slate-800 dark:hover:bg-gray-100 transition-all duration-300 hover:scale-105",
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
                                            d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Cart.js",
                                            lineNumber: 179,
                                            columnNumber: 1126
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Cart.js",
                                        lineNumber: 179,
                                        columnNumber: 1047
                                    }, this),
                                    "Start Shopping"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Cart.js",
                                lineNumber: 179,
                                columnNumber: 803
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Cart.js",
                        lineNumber: 179,
                        columnNumber: 80
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 space-y-4",
                        children: cartItems.map({
                            "Cart[cartItems.map()]": (item_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `bg-white dark:bg-slate-700/50 rounded-2xl p-4 border border-slate-200 dark:border-slate-600 transition-all duration-300 ${isRemoving === item_0.id ? "scale-95 opacity-50" : "hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg"}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: item_0.image,
                                                        alt: item_0.name,
                                                        fill: true,
                                                        className: "object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Cart.js",
                                                        lineNumber: 180,
                                                        columnNumber: 448
                                                    }, this),
                                                    isRemoving === item_0.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-red-500/20 flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-6 h-6 text-red-500 animate-spin",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Cart.js",
                                                                lineNumber: 180,
                                                                columnNumber: 746
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Cart.js",
                                                            lineNumber: 180,
                                                            columnNumber: 641
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Cart.js",
                                                        lineNumber: 180,
                                                        columnNumber: 560
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Cart.js",
                                                lineNumber: 180,
                                                columnNumber: 371
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-semibold text-slate-900 dark:text-white truncate mb-1",
                                                        children: item_0.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Cart.js",
                                                        lineNumber: 180,
                                                        columnNumber: 995
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-blue-600 dark:text-blue-400 font-bold text-lg mb-2",
                                                        children: [
                                                            "$",
                                                            item_0.price
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Cart.js",
                                                        lineNumber: 180,
                                                        columnNumber: 1088
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center space-x-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: {
                                                                            "Cart[cartItems.map() > <button>.onClick]": ()=>handleQuantityChange(item_0.id, item_0.quantity - 1)
                                                                        }["Cart[cartItems.map() > <button>.onClick]"],
                                                                        className: "w-8 h-8 bg-slate-100 dark:bg-slate-600 rounded-lg flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-500 transition-colors font-semibold text-slate-700 dark:text-slate-300",
                                                                        children: "−"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Cart.js",
                                                                        lineNumber: 180,
                                                                        columnNumber: 1274
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "w-8 text-center font-bold text-slate-900 dark:text-white",
                                                                        children: item_0.quantity
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Cart.js",
                                                                        lineNumber: 182,
                                                                        columnNumber: 287
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: {
                                                                            "Cart[cartItems.map() > <button>.onClick]": ()=>handleQuantityChange(item_0.id, item_0.quantity + 1)
                                                                        }["Cart[cartItems.map() > <button>.onClick]"],
                                                                        className: "w-8 h-8 bg-slate-100 dark:bg-slate-600 rounded-lg flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-500 transition-colors font-semibold text-slate-700 dark:text-slate-300",
                                                                        children: "+"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Cart.js",
                                                                        lineNumber: 182,
                                                                        columnNumber: 386
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Cart.js",
                                                                lineNumber: 180,
                                                                columnNumber: 1229
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-right",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "font-bold text-slate-900 dark:text-white text-lg",
                                                                        children: [
                                                                            "$",
                                                                            (item_0.price * item_0.quantity).toFixed(2)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/Cart.js",
                                                                        lineNumber: 184,
                                                                        columnNumber: 321
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: {
                                                                            "Cart[cartItems.map() > <button>.onClick]": ()=>handleRemove(item_0.id)
                                                                        }["Cart[cartItems.map() > <button>.onClick]"],
                                                                        className: "text-red-500 hover:text-red-700 text-sm font-medium transition-colors duration-200 flex items-center gap-1 mt-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                className: "w-4 h-4",
                                                                                fill: "none",
                                                                                stroke: "currentColor",
                                                                                viewBox: "0 0 24 24",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                    strokeLinecap: "round",
                                                                                    strokeLinejoin: "round",
                                                                                    strokeWidth: 2,
                                                                                    d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/Cart.js",
                                                                                    lineNumber: 186,
                                                                                    columnNumber: 275
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/Cart.js",
                                                                                lineNumber: 186,
                                                                                columnNumber: 196
                                                                            }, this),
                                                                            "Remove"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/Cart.js",
                                                                        lineNumber: 184,
                                                                        columnNumber: 439
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Cart.js",
                                                                lineNumber: 184,
                                                                columnNumber: 293
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Cart.js",
                                                        lineNumber: 180,
                                                        columnNumber: 1178
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Cart.js",
                                                lineNumber: 180,
                                                columnNumber: 963
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Cart.js",
                                        lineNumber: 180,
                                        columnNumber: 326
                                    }, this)
                                }, item_0.id, false, {
                                    fileName: "[project]/src/components/Cart.js",
                                    lineNumber: 180,
                                    columnNumber: 50
                                }, this)
                        }["Cart[cartItems.map()]"])
                    }, void 0, false, {
                        fileName: "[project]/src/components/Cart.js",
                        lineNumber: 179,
                        columnNumber: 1281
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Cart.js",
                    lineNumber: 179,
                    columnNumber: 14
                }, this);
                $[48] = cartItems;
                $[49] = handleQuantityChange;
                $[50] = handleRemove;
                $[51] = isRemoving;
                $[52] = onClose;
                $[53] = t3;
            } else {
                t3 = $[53];
            }
            t4 = cartItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-slate-200 dark:border-slate-700 bg-gradient-to-r from-slate-50 to-white dark:from-slate-700 dark:to-slate-800 p-6 space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center text-slate-600 dark:text-slate-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Subtotal"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Cart.js",
                                        lineNumber: 197,
                                        columnNumber: 306
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "$",
                                            total.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Cart.js",
                                        lineNumber: 197,
                                        columnNumber: 327
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Cart.js",
                                lineNumber: 197,
                                columnNumber: 220
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center text-slate-600 dark:text-slate-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Shipping"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Cart.js",
                                        lineNumber: 197,
                                        columnNumber: 451
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-green-600 dark:text-green-400",
                                        children: "Free"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Cart.js",
                                        lineNumber: 197,
                                        columnNumber: 472
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Cart.js",
                                lineNumber: 197,
                                columnNumber: 365
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center text-slate-600 dark:text-slate-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Tax"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Cart.js",
                                        lineNumber: 197,
                                        columnNumber: 628
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "$",
                                            (total * 0.1).toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Cart.js",
                                        lineNumber: 197,
                                        columnNumber: 644
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Cart.js",
                                lineNumber: 197,
                                columnNumber: 542
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-slate-200 dark:border-slate-600 pt-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center text-xl font-black text-slate-900 dark:text-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Total"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Cart.js",
                                            lineNumber: 197,
                                            columnNumber: 861
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "$",
                                                (total * 1.1).toFixed(2)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Cart.js",
                                            lineNumber: 197,
                                            columnNumber: 879
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Cart.js",
                                    lineNumber: 197,
                                    columnNumber: 760
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Cart.js",
                                lineNumber: 197,
                                columnNumber: 690
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Cart.js",
                        lineNumber: 197,
                        columnNumber: 193
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-4 rounded-xl font-bold hover:bg-slate-800 dark:hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl",
                                children: "Proceed to Checkout"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Cart.js",
                                lineNumber: 197,
                                columnNumber: 964
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "w-full border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 py-3 rounded-xl font-semibold hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all duration-300",
                                children: "Continue Shopping"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Cart.js",
                                lineNumber: 197,
                                columnNumber: 1215
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Cart.js",
                        lineNumber: 197,
                        columnNumber: 937
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center space-x-6 pt-4",
                        children: [
                            "\uD83D\uDD12",
                            "\uD83D\uDE9A",
                            "\u21A9\uFE0F"
                        ].map(_CartAnonymous)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Cart.js",
                        lineNumber: 197,
                        columnNumber: 1529
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Cart.js",
                lineNumber: 197,
                columnNumber: 36
            }, this);
        }
        $[1] = cartItems;
        $[2] = clearCart;
        $[3] = getTotalPrice;
        $[4] = isOpen;
        $[5] = isRemoving;
        $[6] = onClose;
        $[7] = removeFromCart;
        $[8] = updateQuantity;
        $[9] = t1;
        $[10] = t2;
        $[11] = t3;
        $[12] = t4;
        $[13] = t5;
        $[14] = t6;
        $[15] = t7;
        $[16] = t8;
    } else {
        t1 = $[9];
        t2 = $[10];
        t3 = $[11];
        t4 = $[12];
        t5 = $[13];
        t6 = $[14];
        t7 = $[15];
        t8 = $[16];
    }
    if (t8 !== Symbol.for("react.early_return_sentinel")) {
        return t8;
    }
    let t9;
    if ($[54] !== t1 || $[55] !== t2 || $[56] !== t3 || $[57] !== t4) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: [
                t2,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Cart.js",
            lineNumber: 230,
            columnNumber: 10
        }, this);
        $[54] = t1;
        $[55] = t2;
        $[56] = t3;
        $[57] = t4;
        $[58] = t9;
    } else {
        t9 = $[58];
    }
    let t10;
    if ($[59] !== t5 || $[60] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            children: t9
        }, void 0, false, {
            fileName: "[project]/src/components/Cart.js",
            lineNumber: 241,
            columnNumber: 11
        }, this);
        $[59] = t5;
        $[60] = t9;
        $[61] = t10;
    } else {
        t10 = $[61];
    }
    let t11;
    if ($[62] !== t10 || $[63] !== t6 || $[64] !== t7) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t6,
            children: [
                t7,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Cart.js",
            lineNumber: 250,
            columnNumber: 11
        }, this);
        $[62] = t10;
        $[63] = t6;
        $[64] = t7;
        $[65] = t11;
    } else {
        t11 = $[65];
    }
    return t11;
}
_s(Cart, "pHlHDKBtDTNdR7hudK+6ZWIScE0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = Cart;
function _CartAnonymous(icon, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center space-x-1 text-xs text-slate-500 dark:text-slate-400",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: icon
            }, void 0, false, {
                fileName: "[project]/src/components/Cart.js",
                lineNumber: 261,
                columnNumber: 110
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    icon === "\uD83D\uDD12" && "Secure",
                    icon === "\uD83D\uDE9A" && "Fast Delivery",
                    icon === "\u21A9\uFE0F" && "Easy Returns"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Cart.js",
                lineNumber: 261,
                columnNumber: 129
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/src/components/Cart.js",
        lineNumber: 261,
        columnNumber: 10
    }, this);
}
function _temp(resolve) {
    return setTimeout(resolve, 300);
}
function _CartCartItemsReduce(sum, item) {
    return sum + item.quantity;
}
var _c;
__turbopack_context__.k.register(_c, "Cart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/products.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cartItems",
    ()=>cartItems,
    "categories",
    ()=>categories,
    "products",
    ()=>products
]);
const products = [
    {
        id: 1,
        name: "Classic White T-Shirt",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
        category: "Men",
        description: "A comfortable and versatile white t-shirt perfect for everyday wear.",
        thumbnails: [
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
            "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400",
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400"
        ]
    },
    {
        id: 2,
        name: "Blue Denim Jeans",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
        category: "Men",
        description: "High-quality denim jeans with a perfect fit and durable material.",
        thumbnails: [
            "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
            "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=400",
            "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=400"
        ]
    },
    {
        id: 3,
        name: "Elegant Black Dress",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1566479179814-63fc212fb9d7?w=400",
        category: "Women",
        description: "A sophisticated black dress suitable for formal occasions or evening wear.",
        thumbnails: [
            "https://images.unsplash.com/photo-1566479179814-63fc212fb9d7?w=400",
            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400",
            "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400"
        ]
    },
    {
        id: 4,
        name: "Leather Handbag",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
        category: "Accessories",
        description: "A stylish leather handbag with ample space and premium craftsmanship.",
        thumbnails: [
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400",
            "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400"
        ]
    },
    {
        id: 5,
        name: "Running Sneakers",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
        category: "Men",
        description: "Comfortable running sneakers designed for performance and style.",
        thumbnails: [
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
            "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400",
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400"
        ]
    },
    {
        id: 6,
        name: "Summer Floral Skirt",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1583496661160-fb5886a6aaaa?w=400",
        category: "Women",
        description: "A light and airy floral skirt perfect for summer outings.",
        thumbnails: [
            "https://images.unsplash.com/photo-1583496661160-fb5886a6aaaa?w=400",
            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400",
            "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400"
        ]
    },
    {
        id: 7,
        name: "Gold Necklace",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400",
        category: "Accessories",
        description: "A delicate gold necklace that adds elegance to any outfit.",
        thumbnails: [
            "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400",
            "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400",
            "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400"
        ]
    },
    {
        id: 8,
        name: "Casual Hoodie",
        price: 34.99,
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400",
        category: "Men",
        description: "A cozy hoodie perfect for casual wear and layering.",
        thumbnails: [
            "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400",
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
            "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400"
        ]
    },
    {
        id: 9,
        name: "Kids Colorful T-Shirt",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1503454532315-69dd2b4c1c3f?w=400",
        category: "Kids",
        description: "Bright and comfortable t-shirt for active kids, made with soft cotton.",
        thumbnails: [
            "https://images.unsplash.com/photo-1503454532315-69dd2b4c1c3f?w=400",
            "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=400",
            "https://images.unsplash.com/photo-1504275107627-0c2ba7a43dba?w=400"
        ]
    },
    {
        id: 10,
        name: "Kids Denim Jacket",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1604917019118-2042fe6d7c0a?w=400",
        category: "Kids",
        description: "Stylish denim jacket perfect for kids' outdoor adventures.",
        thumbnails: [
            "https://images.unsplash.com/photo-1604917019118-2042fe6d7c0a?w=400",
            "https://images.unsplash.com/photo-1594736797933-d0ea3ff8db41?w=400",
            "https://images.unsplash.com/photo-1588679716590-3a8b38d7d7b9?w=400"
        ]
    },
    {
        id: 11,
        name: "Kids Sneakers",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1545324412-8187b8f04964?w=400",
        category: "Kids",
        description: "Comfortable and durable sneakers for active kids.",
        thumbnails: [
            "https://images.unsplash.com/photo-1545324412-8187b8f04964?w=400",
            "https://images.unsplash.com/photo-1545324412-8187b8f04964?w=400",
            "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?w=400"
        ]
    },
    {
        id: 12,
        name: "Kids Backpack",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
        category: "Kids",
        description: "Fun and practical backpack for school and travel.",
        thumbnails: [
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400",
            "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400"
        ]
    },
    {
        id: 13,
        name: "Classic White T-Shirt",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
        category: "Men",
        description: "A comfortable and versatile white t-shirt perfect for everyday wear.",
        thumbnails: [
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
            "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400",
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400"
        ]
    },
    {
        id: 14,
        name: "Classic White T-Shirt",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
        category: "Men",
        description: "A comfortable and versatile white t-shirt perfect for everyday wear.",
        thumbnails: [
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
            "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400",
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400"
        ]
    }
];
const categories = [
    "Men",
    "Women",
    "Accessories",
    "Kids"
];
const cartItems = [
    {
        id: 1,
        name: "Classic White T-Shirt",
        price: 19.99,
        quantity: 2
    },
    {
        id: 3,
        name: "Elegant Black Dress",
        price: 79.99,
        quantity: 1
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Navbar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Cart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/CartContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/products.js [app-client] (ecmascript)");
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
function Navbar() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(132);
    if ($[0] !== "2840799cfea054f90b94b77c32bfb33721f4a50d88cdc1087a9719cc056d0921") {
        for(let $i = 0; $i < 132; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2840799cfea054f90b94b77c32bfb33721f4a50d88cdc1087a9719cc056d0921";
    }
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [cartOpen, setCartOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [searchResults, setSearchResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [showSearchResults, setShowSearchResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const searchRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { getTotalItems, wishlistItems, darkMode, toggleDarkMode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "Navbar[useEffect()]": ()=>{
                setMounted(true);
            }
        })["Navbar[useEffect()]"];
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "Navbar[useEffect()]": ()=>{
                const handleScroll = {
                    "Navbar[useEffect() > handleScroll]": ()=>{
                        setScrolled(window.scrollY > 20);
                    }
                }["Navbar[useEffect() > handleScroll]"];
                window.addEventListener("scroll", handleScroll);
                return ()=>window.removeEventListener("scroll", handleScroll);
            }
        })["Navbar[useEffect()]"];
        t4 = [];
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    let t6;
    if ($[6] !== searchQuery) {
        t5 = ({
            "Navbar[useEffect()]": ()=>{
                if (searchQuery.length > 0) {
                    const filtered = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].filter({
                        "Navbar[useEffect() > products.filter()]": (product)=>product.name.toLowerCase().includes(searchQuery.toLowerCase()) || product.category.toLowerCase().includes(searchQuery.toLowerCase())
                    }["Navbar[useEffect() > products.filter()]"]).slice(0, 5);
                    setSearchResults(filtered);
                    setShowSearchResults(true);
                } else {
                    setSearchResults([]);
                    setShowSearchResults(false);
                }
            }
        })["Navbar[useEffect()]"];
        t6 = [
            searchQuery
        ];
        $[6] = searchQuery;
        $[7] = t5;
        $[8] = t6;
    } else {
        t5 = $[7];
        t6 = $[8];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t7;
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "Navbar[useEffect()]": ()=>{
                const handleClickOutside = {
                    "Navbar[useEffect() > handleClickOutside]": (event)=>{
                        if (searchRef.current && !searchRef.current.contains(event.target)) {
                            setShowSearchResults(false);
                        }
                    }
                }["Navbar[useEffect() > handleClickOutside]"];
                document.addEventListener("mousedown", handleClickOutside);
                return ()=>document.removeEventListener("mousedown", handleClickOutside);
            }
        })["Navbar[useEffect()]"];
        t8 = [];
        $[9] = t7;
        $[10] = t8;
    } else {
        t7 = $[9];
        t8 = $[10];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t7, t8);
    const t9 = `backdrop-blur-xl transition-all duration-500 sticky top-0 z-50
        ${scrolled ? "bg-white/90 dark:bg-slate-900/95 shadow-2xl shadow-blue-500/10 border-b border-gray-200/50 dark:border-slate-700/50" : "bg-white/80 dark:bg-slate-900/90 shadow-lg shadow-blue-500/5 border-b border-gray-200/30 dark:border-slate-700/30"}`;
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-linear-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20 pointer-events-none"
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 133,
            columnNumber: 11
        }, this);
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-8 h-8 lg:w-10 lg:h-10 bg-linear-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-500 group-hover:scale-105",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white font-bold text-xs lg:text-sm",
                        children: "SN"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.js",
                        lineNumber: 140,
                        columnNumber: 291
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 rounded-xl border-2 border-white/20 animate-pulse-slow"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.js",
                        lineNumber: 140,
                        columnNumber: 358
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.js",
                lineNumber: 140,
                columnNumber: 37
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 140,
            columnNumber: 11
        }, this);
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center shrink-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                className: "flex items-center space-x-2 lg:space-x-3 group",
                children: [
                    t11,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xl lg:text-2xl font-black bg-linear-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-200 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500",
                                children: "ShopNow"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.js",
                                lineNumber: 147,
                                columnNumber: 165
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-gray-500 dark:text-gray-400 font-medium -mt-1",
                                children: "PREMIUM COLLECTION"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.js",
                                lineNumber: 147,
                                columnNumber: 412
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.js",
                        lineNumber: 147,
                        columnNumber: 134
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.js",
                lineNumber: 147,
                columnNumber: 55
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 147,
            columnNumber: 11
        }, this);
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = [
            {
                href: "/",
                label: "Home"
            },
            {
                href: "/shop",
                label: "Shop"
            },
            {
                href: "/about",
                label: "About"
            },
            {
                href: "/contact",
                label: "Contact"
            }
        ];
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    let t14;
    if ($[15] !== pathname) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden lg:flex items-center justify-center flex-1 max-w-2xl mx-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center space-x-1",
                children: t13.map({
                    "Navbar[(anonymous)()]": (item)=>{
                        const isActive = pathname === item.href;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: item.href,
                            className: `relative px-4 py-2 transition-all duration-300 font-semibold group ${isActive ? "text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"}`,
                            children: [
                                item.label,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `absolute bottom-0 h-0.5 bg-linear-to-r from-blue-500 to-purple-500 transition-all duration-500 ${isActive ? "w-1/2 left-1/4" : "w-0 left-1/2"}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.js",
                                    lineNumber: 176,
                                    columnNumber: 283
                                }, this)
                            ]
                        }, item.href, true, {
                            fileName: "[project]/src/components/Navbar.js",
                            lineNumber: 176,
                            columnNumber: 20
                        }, this);
                    }
                }["Navbar[(anonymous)()]"])
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.js",
                lineNumber: 173,
                columnNumber: 93
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 173,
            columnNumber: 11
        }, this);
        $[15] = pathname;
        $[16] = t14;
    } else {
        t14 = $[16];
    }
    let t15;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = ({
            "Navbar[<input>.onChange]": (e)=>setSearchQuery(e.target.value)
        })["Navbar[<input>.onChange]"];
        $[17] = t15;
    } else {
        t15 = $[17];
    }
    let t16;
    if ($[18] !== searchQuery) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            placeholder: "Search luxury products...",
            value: searchQuery,
            onChange: t15,
            className: "w-64 px-6 py-3 pl-12 text-sm bg-white/80 text-white dark:bg-slate-800/80 backdrop-blur-sm border border-gray-300/50 dark:border-slate-600/50 rounded-2xl focus:outline-none focus:ring-1 transition-all duration-300 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10"
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 195,
            columnNumber: 11
        }, this);
        $[18] = searchQuery;
        $[19] = t16;
    } else {
        t16 = $[19];
    }
    let t17;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "absolute left-4 top-3 w-5 h-5 text-gray-400 transition-colors",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.js",
                lineNumber: 203,
                columnNumber: 144
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 203,
            columnNumber: 11
        }, this);
        $[20] = t17;
    } else {
        t17 = $[20];
    }
    let t18;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute right-4 top-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-5 h-5 border-2 border-gray-300 dark:border-slate-500 rounded-full group-focus-within:border-blue-500 transition-colors"
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.js",
                lineNumber: 210,
                columnNumber: 51
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 210,
            columnNumber: 11
        }, this);
        $[21] = t18;
    } else {
        t18 = $[21];
    }
    let t19;
    if ($[22] !== t16) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative group",
            children: [
                t16,
                t17,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 217,
            columnNumber: 11
        }, this);
        $[22] = t16;
        $[23] = t19;
    } else {
        t19 = $[23];
    }
    let t20;
    if ($[24] !== searchQuery || $[25] !== searchResults || $[26] !== showSearchResults) {
        t20 = showSearchResults && searchResults.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-full mt-3 w-full bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl border border-gray-200/50 dark:border-slate-700/50 rounded-2xl shadow-2xl shadow-black/20 z-50 max-h-80 overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-2",
                    children: searchResults.map({
                        "Navbar[searchResults.map()]": (product_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/product/${product_0.id}`,
                                className: "flex items-center p-3 hover:bg-gray-50/80 dark:hover:bg-slate-700/80 transition-all duration-300 rounded-xl group border-b border-gray-100/50 dark:border-slate-600/50 last:border-b-0",
                                onClick: {
                                    "Navbar[searchResults.map() > <Link>.onClick]": ()=>{
                                        setSearchQuery("");
                                        setShowSearchResults(false);
                                    }
                                }["Navbar[searchResults.map() > <Link>.onClick]"],
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: product_0.image,
                                        alt: product_0.name,
                                        className: "w-12 h-12 object-cover rounded-lg mr-4 shadow-md group-hover:scale-105 transition-transform duration-300"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.js",
                                        lineNumber: 231,
                                        columnNumber: 62
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-semibold text-gray-900 dark:text-white text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors",
                                                children: product_0.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Navbar.js",
                                                lineNumber: 231,
                                                columnNumber: 253
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-blue-600 dark:text-blue-400 font-bold text-sm",
                                                children: [
                                                    "$",
                                                    product_0.price
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Navbar.js",
                                                lineNumber: 231,
                                                columnNumber: 419
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Navbar.js",
                                        lineNumber: 231,
                                        columnNumber: 229
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-4 h-4 text-gray-400 group-hover:text-blue-500 transform group-hover:translate-x-1 transition-all duration-300",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M9 5l7 7-7 7"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.js",
                                            lineNumber: 231,
                                            columnNumber: 700
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.js",
                                        lineNumber: 231,
                                        columnNumber: 517
                                    }, this)
                                ]
                            }, product_0.id, true, {
                                fileName: "[project]/src/components/Navbar.js",
                                lineNumber: 226,
                                columnNumber: 55
                            }, this)
                    }["Navbar[searchResults.map()]"])
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.js",
                    lineNumber: 225,
                    columnNumber: 277
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: `/shop?search=${encodeURIComponent(searchQuery)}`,
                    className: "block p-4 text-center bg-linear-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-600 dark:text-blue-400 font-semibold hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-800/30 dark:hover:to-purple-800/30 transition-all duration-300 rounded-b-2xl border-t border-gray-200/50 dark:border-slate-600/50",
                    onClick: {
                        "Navbar[<Link>.onClick]": ()=>{
                            setSearchQuery("");
                            setShowSearchResults(false);
                        }
                    }["Navbar[<Link>.onClick]"],
                    children: "View all results"
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.js",
                    lineNumber: 232,
                    columnNumber: 49
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 225,
            columnNumber: 60
        }, this);
        $[24] = searchQuery;
        $[25] = searchResults;
        $[26] = showSearchResults;
        $[27] = t20;
    } else {
        t20 = $[27];
    }
    let t21;
    if ($[28] !== t19 || $[29] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden lg:block relative",
            ref: searchRef,
            children: [
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 247,
            columnNumber: 11
        }, this);
        $[28] = t19;
        $[29] = t20;
        $[30] = t21;
    } else {
        t21 = $[30];
    }
    const t22 = `relative p-3 rounded-2xl backdrop-blur-sm border transition-all duration-500 hover:scale-110 hover:shadow-lg group hidden lg:flex ${pathname === "/favourites" ? "bg-red-50 dark:bg-red-900/20 border-red-300/50 dark:border-red-600/50 text-red-600 dark:text-red-400 shadow-lg shadow-red-500/20" : "bg-white/80 dark:bg-slate-800/80 border-gray-300/50 dark:border-slate-600/50 text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 hover:shadow-red-500/20"}`;
    let t23;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-linear-to-r from-red-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 257,
            columnNumber: 11
        }, this);
        $[31] = t23;
    } else {
        t23 = $[31];
    }
    const t24 = wishlistItems.length > 0 ? "currentColor" : "none";
    let t25;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 265,
            columnNumber: 11
        }, this);
        $[32] = t25;
    } else {
        t25 = $[32];
    }
    let t26;
    if ($[33] !== t24) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-6 h-6 relative z-10",
            fill: t24,
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: t25
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 272,
            columnNumber: 11
        }, this);
        $[33] = t24;
        $[34] = t26;
    } else {
        t26 = $[34];
    }
    let t27;
    if ($[35] !== mounted || $[36] !== wishlistItems.length) {
        t27 = mounted && wishlistItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "absolute -top-2 -right-2 bg-linear-to-r from-red-500 to-pink-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold shadow-lg animate-pulse",
            children: wishlistItems.length
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 280,
            columnNumber: 50
        }, this);
        $[35] = mounted;
        $[36] = wishlistItems.length;
        $[37] = t27;
    } else {
        t27 = $[37];
    }
    let t28;
    if ($[38] !== t22 || $[39] !== t26 || $[40] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/favourites",
            className: t22,
            "aria-label": "View favourites",
            children: [
                t23,
                t26,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 289,
            columnNumber: 11
        }, this);
        $[38] = t22;
        $[39] = t26;
        $[40] = t27;
        $[41] = t28;
    } else {
        t28 = $[41];
    }
    let t29;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-linear-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 299,
            columnNumber: 11
        }, this);
        $[42] = t29;
    } else {
        t29 = $[42];
    }
    let t30;
    if ($[43] !== darkMode || $[44] !== mounted) {
        t30 = mounted && darkMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-5 h-5 relative z-10",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.js",
                lineNumber: 306,
                columnNumber: 126
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 306,
            columnNumber: 33
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-5 h-5 relative z-10",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.js",
                lineNumber: 306,
                columnNumber: 451
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 306,
            columnNumber: 358
        }, this);
        $[43] = darkMode;
        $[44] = mounted;
        $[45] = t30;
    } else {
        t30 = $[45];
    }
    let t31;
    if ($[46] !== t30 || $[47] !== toggleDarkMode) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: toggleDarkMode,
            className: "relative p-3 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-gray-300/50 dark:border-slate-600/50 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20 group hidden lg:flex",
            "aria-label": "Toggle dark mode",
            children: [
                t29,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 315,
            columnNumber: 11
        }, this);
        $[46] = t30;
        $[47] = toggleDarkMode;
        $[48] = t31;
    } else {
        t31 = $[48];
    }
    let t32;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = ({
            "Navbar[<button>.onClick]": ()=>setCartOpen(true)
        })["Navbar[<button>.onClick]"];
        $[49] = t32;
    } else {
        t32 = $[49];
    }
    let t33;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-linear-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 333,
            columnNumber: 11
        }, this);
        $[50] = t33;
    } else {
        t33 = $[50];
    }
    let t34;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-4 h-4 relative z-10",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5H19M7 13v8a2 2 0 002 2h10a2 2 0 002-2v-3"
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.js",
                lineNumber: 340,
                columnNumber: 104
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 340,
            columnNumber: 11
        }, this);
        $[51] = t34;
    } else {
        t34 = $[51];
    }
    let t35;
    if ($[52] !== getTotalItems || $[53] !== mounted) {
        t35 = mounted && getTotalItems() > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "absolute -top-2 -right-2 bg-linear-to-r from-red-500 to-pink-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold shadow-lg animate-bounce",
            children: getTotalItems()
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 347,
            columnNumber: 45
        }, this);
        $[52] = getTotalItems;
        $[53] = mounted;
        $[54] = t35;
    } else {
        t35 = $[54];
    }
    let t36;
    if ($[55] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t32,
            className: "relative p-3 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-gray-300/50 dark:border-slate-600/50 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20 group",
            "aria-label": "Open shopping cart",
            children: [
                t33,
                t34,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 356,
            columnNumber: 11
        }, this);
        $[55] = t35;
        $[56] = t36;
    } else {
        t36 = $[56];
    }
    let t37;
    if ($[57] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = ({
            "Navbar[<button>.onClick]": ()=>setMobileMenuOpen(true)
        })["Navbar[<button>.onClick]"];
        $[57] = t37;
    } else {
        t37 = $[57];
    }
    let t38;
    if ($[58] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-linear-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 373,
            columnNumber: 11
        }, this);
        $[58] = t38;
    } else {
        t38 = $[58];
    }
    let t39;
    if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t37,
            className: "lg:hidden p-3 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-gray-300/50 dark:border-slate-600/50 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20 group",
            "aria-label": "Open mobile menu",
            children: [
                t38,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-4 h-4 relative z-10",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M4 6h16M4 12h16M4 18h16"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.js",
                        lineNumber: 380,
                        columnNumber: 469
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.js",
                    lineNumber: 380,
                    columnNumber: 376
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 380,
            columnNumber: 11
        }, this);
        $[59] = t39;
    } else {
        t39 = $[59];
    }
    let t40;
    if ($[60] !== t28 || $[61] !== t31 || $[62] !== t36) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center space-x-5",
            children: [
                t28,
                t31,
                t36,
                t39
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 387,
            columnNumber: 11
        }, this);
        $[60] = t28;
        $[61] = t31;
        $[62] = t36;
        $[63] = t40;
    } else {
        t40 = $[63];
    }
    let t41;
    if ($[64] !== t21 || $[65] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-end space-x-5 shrink-0",
            children: [
                t21,
                t40
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 397,
            columnNumber: 11
        }, this);
        $[64] = t21;
        $[65] = t40;
        $[66] = t41;
    } else {
        t41 = $[66];
    }
    let t42;
    if ($[67] !== t14 || $[68] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto px-4 sm:px-6 lg:px-8 relative",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center h-16 lg:h-20",
                children: [
                    t12,
                    t14,
                    t41
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.js",
                lineNumber: 406,
                columnNumber: 66
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 406,
            columnNumber: 11
        }, this);
        $[67] = t14;
        $[68] = t41;
        $[69] = t42;
    } else {
        t42 = $[69];
    }
    const t43 = `fixed inset-0 z-60 lg:hidden transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`;
    let t44;
    if ($[70] === Symbol.for("react.memo_cache_sentinel")) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-black/50 backdrop-blur-lg",
            onClick: {
                "Navbar[<div>.onClick]": ()=>setMobileMenuOpen(false)
            }["Navbar[<div>.onClick]"]
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 416,
            columnNumber: 11
        }, this);
        $[70] = t44;
    } else {
        t44 = $[70];
    }
    const t45 = `fixed left-0 top-0 h-screen w-4/5 bg-white dark:bg-slate-800 shadow-2xl border-r border-gray-200 dark:border-slate-700 transform transition-transform duration-300 z-70 ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`;
    let t46;
    let t47;
    if ($[71] === Symbol.for("react.memo_cache_sentinel")) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center space-x-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-8 h-8 bg-linear-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-lg flex items-center justify-center shadow-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white font-bold text-sm",
                        children: "SN"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.js",
                        lineNumber: 427,
                        columnNumber: 194
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.js",
                    lineNumber: 427,
                    columnNumber: 56
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xl font-black bg-linear-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-200 bg-clip-text text-transparent",
                    children: "ShopNow"
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.js",
                    lineNumber: 427,
                    columnNumber: 256
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 427,
            columnNumber: 11
        }, this);
        t47 = ({
            "Navbar[<button>.onClick]": ()=>setMobileMenuOpen(false)
        })["Navbar[<button>.onClick]"];
        $[71] = t46;
        $[72] = t47;
    } else {
        t46 = $[71];
        t47 = $[72];
    }
    let t48;
    if ($[73] === Symbol.for("react.memo_cache_sentinel")) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between p-6 border-b border-gray-200 dark:border-slate-700",
            children: [
                t46,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: t47,
                    className: "p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors",
                    "aria-label": "Close menu",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-6 h-6 text-gray-600 dark:text-gray-300",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M6 18L18 6M6 6l12 12"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.js",
                            lineNumber: 439,
                            columnNumber: 363
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.js",
                        lineNumber: 439,
                        columnNumber: 251
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.js",
                    lineNumber: 439,
                    columnNumber: 118
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 439,
            columnNumber: 11
        }, this);
        $[73] = t48;
    } else {
        t48 = $[73];
    }
    let t49;
    if ($[74] === Symbol.for("react.memo_cache_sentinel")) {
        t49 = [
            {
                href: "/",
                label: "Home"
            },
            {
                href: "/shop",
                label: "Shop"
            },
            {
                href: "/about",
                label: "About"
            },
            {
                href: "/contact",
                label: "Contact"
            }
        ];
        $[74] = t49;
    } else {
        t49 = $[74];
    }
    let t50;
    if ($[75] !== pathname) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "space-y-6",
            children: t49.map({
                "Navbar[(anonymous)()]": (item_0)=>{
                    const isActive_0 = pathname === item_0.href;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: item_0.href,
                        className: `block px-4 py-3 rounded-xl transition-all duration-300 font-semibold ${isActive_0 ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400" : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400"}`,
                        onClick: {
                            "Navbar[(anonymous)() > <Link>.onClick]": ()=>setMobileMenuOpen(false)
                        }["Navbar[(anonymous)() > <Link>.onClick]"],
                        children: item_0.label
                    }, item_0.href, false, {
                        fileName: "[project]/src/components/Navbar.js",
                        lineNumber: 468,
                        columnNumber: 18
                    }, this);
                }
            }["Navbar[(anonymous)()]"])
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 465,
            columnNumber: 11
        }, this);
        $[75] = pathname;
        $[76] = t50;
    } else {
        t50 = $[76];
    }
    let t51;
    if ($[77] === Symbol.for("react.memo_cache_sentinel")) {
        t51 = ({
            "Navbar[<input>.onChange]": (e_0)=>setSearchQuery(e_0.target.value)
        })["Navbar[<input>.onChange]"];
        $[77] = t51;
    } else {
        t51 = $[77];
    }
    let t52;
    if ($[78] !== searchQuery) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            placeholder: "Search products...",
            value: searchQuery,
            onChange: t51,
            className: "w-full text-white px-4 py-3 pl-12 text-sm bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 489,
            columnNumber: 11
        }, this);
        $[78] = searchQuery;
        $[79] = t52;
    } else {
        t52 = $[79];
    }
    let t53;
    if ($[80] === Symbol.for("react.memo_cache_sentinel")) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "absolute left-4 top-3.5 w-4 h-4 text-gray-400",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.js",
                lineNumber: 497,
                columnNumber: 128
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 497,
            columnNumber: 11
        }, this);
        $[80] = t53;
    } else {
        t53 = $[80];
    }
    let t54;
    if ($[81] !== t52) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    t52,
                    t53
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.js",
                lineNumber: 504,
                columnNumber: 33
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 504,
            columnNumber: 11
        }, this);
        $[81] = t52;
        $[82] = t54;
    } else {
        t54 = $[82];
    }
    const t55 = `flex items-center px-4 py-3 rounded-xl transition-all duration-300 font-semibold ${pathname === "/favourites" ? "bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400" : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 hover:text-red-600 dark:hover:text-red-400"}`;
    let t56;
    if ($[83] === Symbol.for("react.memo_cache_sentinel")) {
        t56 = ({
            "Navbar[<Link>.onClick]": ()=>setMobileMenuOpen(false)
        })["Navbar[<Link>.onClick]"];
        $[83] = t56;
    } else {
        t56 = $[83];
    }
    const t57 = wishlistItems.length > 0 ? "currentColor" : "none";
    let t58;
    if ($[84] === Symbol.for("react.memo_cache_sentinel")) {
        t58 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 523,
            columnNumber: 11
        }, this);
        $[84] = t58;
    } else {
        t58 = $[84];
    }
    let t59;
    if ($[85] !== t57) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-6 h-6 mr-4",
            fill: t57,
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: t58
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 530,
            columnNumber: 11
        }, this);
        $[85] = t57;
        $[86] = t59;
    } else {
        t59 = $[86];
    }
    let t60;
    if ($[87] !== mounted || $[88] !== wishlistItems.length) {
        t60 = mounted && wishlistItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "ml-auto bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold",
            children: wishlistItems.length
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 538,
            columnNumber: 50
        }, this);
        $[87] = mounted;
        $[88] = wishlistItems.length;
        $[89] = t60;
    } else {
        t60 = $[89];
    }
    let t61;
    if ($[90] !== t55 || $[91] !== t59 || $[92] !== t60) {
        t61 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/favourites",
            className: t55,
            onClick: t56,
            children: [
                t59,
                "Favourites",
                t60
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 547,
            columnNumber: 11
        }, this);
        $[90] = t55;
        $[91] = t59;
        $[92] = t60;
        $[93] = t61;
    } else {
        t61 = $[93];
    }
    let t62;
    if ($[94] !== darkMode || $[95] !== mounted) {
        t62 = mounted && darkMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-6 h-6 mr-4",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.js",
                lineNumber: 557,
                columnNumber: 117
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 557,
            columnNumber: 33
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-6 h-6 mr-4",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.js",
                lineNumber: 557,
                columnNumber: 433
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 557,
            columnNumber: 349
        }, this);
        $[94] = darkMode;
        $[95] = mounted;
        $[96] = t62;
    } else {
        t62 = $[96];
    }
    const t63 = darkMode ? "Light Mode" : "Dark Mode";
    let t64;
    if ($[97] !== t62 || $[98] !== t63 || $[99] !== toggleDarkMode) {
        t64 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: toggleDarkMode,
            className: "flex items-center w-full px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-semibold",
            children: [
                t62,
                t63
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 567,
            columnNumber: 11
        }, this);
        $[97] = t62;
        $[98] = t63;
        $[99] = toggleDarkMode;
        $[100] = t64;
    } else {
        t64 = $[100];
    }
    let t65;
    if ($[101] === Symbol.for("react.memo_cache_sentinel")) {
        t65 = ({
            "Navbar[<button>.onClick]": ()=>{
                setCartOpen(true);
                setMobileMenuOpen(false);
            }
        })["Navbar[<button>.onClick]"];
        $[101] = t65;
    } else {
        t65 = $[101];
    }
    let t66;
    if ($[102] === Symbol.for("react.memo_cache_sentinel")) {
        t66 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-6 h-6 mr-4",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5H19M7 13v8a2 2 0 002 2h10a2 2 0 002-2v-3"
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.js",
                lineNumber: 589,
                columnNumber: 95
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 589,
            columnNumber: 11
        }, this);
        $[102] = t66;
    } else {
        t66 = $[102];
    }
    let t67;
    if ($[103] !== getTotalItems || $[104] !== mounted) {
        t67 = mounted && getTotalItems() > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "ml-auto bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold",
            children: getTotalItems()
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 596,
            columnNumber: 45
        }, this);
        $[103] = getTotalItems;
        $[104] = mounted;
        $[105] = t67;
    } else {
        t67 = $[105];
    }
    let t68;
    if ($[106] !== t67) {
        t68 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t65,
            className: "flex items-center w-full px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-semibold",
            children: [
                t66,
                "Cart",
                t67
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 605,
            columnNumber: 11
        }, this);
        $[106] = t67;
        $[107] = t68;
    } else {
        t68 = $[107];
    }
    let t69;
    if ($[108] !== t61 || $[109] !== t64 || $[110] !== t68) {
        t69 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-8 space-y-4",
            children: [
                t61,
                t64,
                t68
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 613,
            columnNumber: 11
        }, this);
        $[108] = t61;
        $[109] = t64;
        $[110] = t68;
        $[111] = t69;
    } else {
        t69 = $[111];
    }
    let t70;
    if ($[112] !== t50 || $[113] !== t54 || $[114] !== t69) {
        t70 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col h-full bg-white dark:bg-slate-800",
            children: [
                t48,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 px-6 py-8 bg-white dark:bg-slate-800",
                    children: [
                        t50,
                        t54,
                        t69
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Navbar.js",
                    lineNumber: 623,
                    columnNumber: 81
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 623,
            columnNumber: 11
        }, this);
        $[112] = t50;
        $[113] = t54;
        $[114] = t69;
        $[115] = t70;
    } else {
        t70 = $[115];
    }
    let t71;
    if ($[116] !== t45 || $[117] !== t70) {
        t71 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t45,
            children: t70
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 633,
            columnNumber: 11
        }, this);
        $[116] = t45;
        $[117] = t70;
        $[118] = t71;
    } else {
        t71 = $[118];
    }
    let t72;
    if ($[119] !== t43 || $[120] !== t71) {
        t72 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t43,
            children: [
                t44,
                t71
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 642,
            columnNumber: 11
        }, this);
        $[119] = t43;
        $[120] = t71;
        $[121] = t72;
    } else {
        t72 = $[121];
    }
    let t73;
    if ($[122] !== t42 || $[123] !== t72 || $[124] !== t9) {
        t73 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: t9,
            children: [
                t10,
                t42,
                t72
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 651,
            columnNumber: 11
        }, this);
        $[122] = t42;
        $[123] = t72;
        $[124] = t9;
        $[125] = t73;
    } else {
        t73 = $[125];
    }
    let t74;
    if ($[126] === Symbol.for("react.memo_cache_sentinel")) {
        t74 = ({
            "Navbar[<Cart>.onClose]": ()=>setCartOpen(false)
        })["Navbar[<Cart>.onClose]"];
        $[126] = t74;
    } else {
        t74 = $[126];
    }
    let t75;
    if ($[127] !== cartOpen) {
        t75 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            isOpen: cartOpen,
            onClose: t74
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 670,
            columnNumber: 11
        }, this);
        $[127] = cartOpen;
        $[128] = t75;
    } else {
        t75 = $[128];
    }
    let t76;
    if ($[129] !== t73 || $[130] !== t75) {
        t76 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t73,
                t75
            ]
        }, void 0, true);
        $[129] = t73;
        $[130] = t75;
        $[131] = t76;
    } else {
        t76 = $[131];
    }
    return t76;
}
_s(Navbar, "KJgx4FwS/aoq9jdaQZkpXzcnXh4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ParticleBackground.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ParticleBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function ParticleBackground() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParticleBackground.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            // Set canvas size
            const resizeCanvas = {
                "ParticleBackground.useEffect.resizeCanvas": ()=>{
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                }
            }["ParticleBackground.useEffect.resizeCanvas"];
            resizeCanvas();
            window.addEventListener('resize', resizeCanvas);
            // Particle class
            class Particle {
                constructor(){
                    this.x = Math.random() * canvas.width;
                    this.y = Math.random() * canvas.height;
                    this.size = Math.random() * 2 + 0.5;
                    this.speedX = Math.random() * 2 - 1;
                    this.speedY = Math.random() * 2 - 1;
                    this.opacity = Math.random() * 0.5 + 0.2;
                }
                update() {
                    this.x += this.speedX;
                    this.y += this.speedY;
                    // Wrap around edges
                    if (this.x > canvas.width) this.x = 0;
                    if (this.x < 0) this.x = canvas.width;
                    if (this.y > canvas.height) this.y = 0;
                    if (this.y < 0) this.y = canvas.height;
                    // Subtle opacity pulsing
                    this.opacity += Math.sin(Date.now() * 0.001 + this.x) * 0.01;
                    this.opacity = Math.max(0.1, Math.min(0.7, this.opacity));
                }
                draw() {
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                    ctx.fill();
                }
            }
            // Create particles
            const particles = [];
            const particleCount = Math.min(50, Math.floor(canvas.width * canvas.height / 15000));
            for(let i = 0; i < particleCount; i++){
                particles.push(new Particle());
            }
            // Animation loop
            const animate = {
                "ParticleBackground.useEffect.animate": ()=>{
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    particles.forEach({
                        "ParticleBackground.useEffect.animate": (particle)=>{
                            particle.update();
                            particle.draw();
                        }
                    }["ParticleBackground.useEffect.animate"]);
                    // Draw connections between nearby particles
                    particles.forEach({
                        "ParticleBackground.useEffect.animate": (particle_0, i_0)=>{
                            particles.slice(i_0 + 1).forEach({
                                "ParticleBackground.useEffect.animate": (otherParticle)=>{
                                    const dx = particle_0.x - otherParticle.x;
                                    const dy = particle_0.y - otherParticle.y;
                                    const distance = Math.sqrt(dx * dx + dy * dy);
                                    if (distance < 100) {
                                        ctx.beginPath();
                                        ctx.moveTo(particle_0.x, particle_0.y);
                                        ctx.lineTo(otherParticle.x, otherParticle.y);
                                        ctx.strokeStyle = `rgba(255, 255, 255, ${(100 - distance) / 100 * 0.1})`;
                                        ctx.lineWidth = 0.5;
                                        ctx.stroke();
                                    }
                                }
                            }["ParticleBackground.useEffect.animate"]);
                        }
                    }["ParticleBackground.useEffect.animate"]);
                    requestAnimationFrame(animate);
                }
            }["ParticleBackground.useEffect.animate"];
            animate();
            return ({
                "ParticleBackground.useEffect": ()=>{
                    window.removeEventListener('resize', resizeCanvas);
                }
            })["ParticleBackground.useEffect"];
        }
    }["ParticleBackground.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "fixed inset-0 pointer-events-none z-0",
        style: {
            background: 'transparent'
        }
    }, void 0, false, {
        fileName: "[project]/src/components/ParticleBackground.js",
        lineNumber: 90,
        columnNumber: 10
    }, this);
}
_s(ParticleBackground, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = ParticleBackground;
var _c;
__turbopack_context__.k.register(_c, "ParticleBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_fafdb1da._.js.map