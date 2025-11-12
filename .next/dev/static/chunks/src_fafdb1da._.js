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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(148);
    if ($[0] !== "7c7300bd2b292df1eb7a8b6740f96b2b2e35a6cc0be9644e8ef9f86378fcb443") {
        for(let $i = 0; $i < 148; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7c7300bd2b292df1eb7a8b6740f96b2b2e35a6cc0be9644e8ef9f86378fcb443";
    }
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
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
                        const mobileSearch = document.querySelector(".mobile-search-container");
                        if (mobileSearch && !mobileSearch.contains(event.target)) {
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
    let t10;
    let t9;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = ({
            "Navbar[useEffect()]": ()=>{
                const handleClickOutside_0 = {
                    "Navbar[useEffect() > handleClickOutside_0]": (event_0)=>{
                        if (searchRef.current && !searchRef.current.contains(event_0.target)) {
                            setShowSearchResults(false);
                        }
                    }
                }["Navbar[useEffect() > handleClickOutside_0]"];
                document.addEventListener("mousedown", handleClickOutside_0);
                return ()=>document.removeEventListener("mousedown", handleClickOutside_0);
            }
        })["Navbar[useEffect()]"];
        t10 = [];
        $[11] = t10;
        $[12] = t9;
    } else {
        t10 = $[11];
        t9 = $[12];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t9, t10);
    const t11 = `backdrop-blur-xl transition-all duration-500 sticky top-0 z-50
        ${scrolled ? "bg-white/90 dark:bg-slate-900/95 shadow-2xl shadow-blue-500/10 border-b border-gray-200/50 dark:border-slate-700/50" : "bg-white/80 dark:bg-slate-900/90 shadow-lg shadow-blue-500/5 border-b border-gray-200/30 dark:border-slate-700/30"}`;
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-linear-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20 pointer-events-none"
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 161,
            columnNumber: 11
        }, this);
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-8 h-8 lg:w-10 lg:h-10 bg-linear-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-500 group-hover:scale-105",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white font-bold text-xs lg:text-sm",
                        children: "SN"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.js",
                        lineNumber: 168,
                        columnNumber: 291
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 rounded-xl border-2 border-white/20 animate-pulse-slow"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.js",
                        lineNumber: 168,
                        columnNumber: 358
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.js",
                lineNumber: 168,
                columnNumber: 37
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 168,
            columnNumber: 11
        }, this);
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    let t14;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center shrink-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                className: "flex items-center space-x-2 lg:space-x-3 group",
                children: [
                    t13,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xl lg:text-2xl font-black bg-linear-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-200 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500",
                                children: "ShopNow"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.js",
                                lineNumber: 175,
                                columnNumber: 165
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-gray-500 dark:text-gray-400 font-medium -mt-1",
                                children: "PREMIUM COLLECTION"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.js",
                                lineNumber: 175,
                                columnNumber: 412
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.js",
                        lineNumber: 175,
                        columnNumber: 134
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.js",
                lineNumber: 175,
                columnNumber: 55
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 175,
            columnNumber: 11
        }, this);
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    let t15;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = [
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
        $[16] = t15;
    } else {
        t15 = $[16];
    }
    let t16;
    if ($[17] !== pathname) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden lg:flex items-center justify-center flex-1 max-w-2xl mx-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center space-x-1",
                children: t15.map({
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
                                    lineNumber: 204,
                                    columnNumber: 283
                                }, this)
                            ]
                        }, item.href, true, {
                            fileName: "[project]/src/components/Navbar.js",
                            lineNumber: 204,
                            columnNumber: 20
                        }, this);
                    }
                }["Navbar[(anonymous)()]"])
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.js",
                lineNumber: 201,
                columnNumber: 93
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 201,
            columnNumber: 11
        }, this);
        $[17] = pathname;
        $[18] = t16;
    } else {
        t16 = $[18];
    }
    let t17;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = ({
            "Navbar[<input>.onChange]": (e)=>setSearchQuery(e.target.value)
        })["Navbar[<input>.onChange]"];
        $[19] = t17;
    } else {
        t17 = $[19];
    }
    let t18;
    if ($[20] !== searchQuery) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            placeholder: "Search luxury products...",
            value: searchQuery,
            onChange: t17,
            className: "w-64 px-6 py-3 pl-12 text-sm bg-white/80 text-white dark:bg-slate-800/80 backdrop-blur-sm border border-gray-300/50 dark:border-slate-600/50 rounded-2xl focus:outline-none focus:ring-1 transition-all duration-300 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10"
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 223,
            columnNumber: 11
        }, this);
        $[20] = searchQuery;
        $[21] = t18;
    } else {
        t18 = $[21];
    }
    let t19;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                lineNumber: 231,
                columnNumber: 144
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 231,
            columnNumber: 11
        }, this);
        $[22] = t19;
    } else {
        t19 = $[22];
    }
    let t20;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute right-4 top-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-5 h-5 border-2 border-gray-300 dark:border-slate-500 rounded-full group-focus-within:border-blue-500 transition-colors"
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.js",
                lineNumber: 238,
                columnNumber: 51
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 238,
            columnNumber: 11
        }, this);
        $[23] = t20;
    } else {
        t20 = $[23];
    }
    let t21;
    if ($[24] !== t18) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative group",
            children: [
                t18,
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 245,
            columnNumber: 11
        }, this);
        $[24] = t18;
        $[25] = t21;
    } else {
        t21 = $[25];
    }
    let t22;
    if ($[26] !== searchQuery || $[27] !== searchResults || $[28] !== showSearchResults) {
        t22 = showSearchResults && searchResults.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                        lineNumber: 259,
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
                                                lineNumber: 259,
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
                                                lineNumber: 259,
                                                columnNumber: 419
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Navbar.js",
                                        lineNumber: 259,
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
                                            lineNumber: 259,
                                            columnNumber: 700
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.js",
                                        lineNumber: 259,
                                        columnNumber: 517
                                    }, this)
                                ]
                            }, product_0.id, true, {
                                fileName: "[project]/src/components/Navbar.js",
                                lineNumber: 254,
                                columnNumber: 55
                            }, this)
                    }["Navbar[searchResults.map()]"])
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.js",
                    lineNumber: 253,
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
                    lineNumber: 260,
                    columnNumber: 49
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 253,
            columnNumber: 60
        }, this);
        $[26] = searchQuery;
        $[27] = searchResults;
        $[28] = showSearchResults;
        $[29] = t22;
    } else {
        t22 = $[29];
    }
    let t23;
    if ($[30] !== t21 || $[31] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden lg:block relative",
            ref: searchRef,
            children: [
                t21,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 275,
            columnNumber: 11
        }, this);
        $[30] = t21;
        $[31] = t22;
        $[32] = t23;
    } else {
        t23 = $[32];
    }
    const t24 = `relative p-3 rounded-2xl backdrop-blur-sm border transition-all duration-500 hover:scale-110 hover:shadow-lg group hidden lg:flex ${pathname === "/favourites" ? "bg-red-50 dark:bg-red-900/20 border-red-300/50 dark:border-red-600/50 text-red-600 dark:text-red-400 shadow-lg shadow-red-500/20" : "bg-white/80 dark:bg-slate-800/80 border-gray-300/50 dark:border-slate-600/50 text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 hover:shadow-red-500/20"}`;
    let t25;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-linear-to-r from-red-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 285,
            columnNumber: 11
        }, this);
        $[33] = t25;
    } else {
        t25 = $[33];
    }
    const t26 = wishlistItems.length > 0 ? "currentColor" : "none";
    let t27;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 293,
            columnNumber: 11
        }, this);
        $[34] = t27;
    } else {
        t27 = $[34];
    }
    let t28;
    if ($[35] !== t26) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-6 h-6 relative z-10",
            fill: t26,
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: t27
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 300,
            columnNumber: 11
        }, this);
        $[35] = t26;
        $[36] = t28;
    } else {
        t28 = $[36];
    }
    let t29;
    if ($[37] !== mounted || $[38] !== wishlistItems.length) {
        t29 = mounted && wishlistItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "absolute -top-2 -right-2 bg-linear-to-r from-red-500 to-pink-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold shadow-lg animate-pulse",
            children: wishlistItems.length
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 308,
            columnNumber: 50
        }, this);
        $[37] = mounted;
        $[38] = wishlistItems.length;
        $[39] = t29;
    } else {
        t29 = $[39];
    }
    let t30;
    if ($[40] !== t24 || $[41] !== t28 || $[42] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/favourites",
            className: t24,
            "aria-label": "View favourites",
            children: [
                t25,
                t28,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 317,
            columnNumber: 11
        }, this);
        $[40] = t24;
        $[41] = t28;
        $[42] = t29;
        $[43] = t30;
    } else {
        t30 = $[43];
    }
    let t31;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-linear-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 327,
            columnNumber: 11
        }, this);
        $[44] = t31;
    } else {
        t31 = $[44];
    }
    let t32;
    if ($[45] !== darkMode || $[46] !== mounted) {
        t32 = mounted && darkMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                lineNumber: 334,
                columnNumber: 126
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 334,
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
                lineNumber: 334,
                columnNumber: 451
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 334,
            columnNumber: 358
        }, this);
        $[45] = darkMode;
        $[46] = mounted;
        $[47] = t32;
    } else {
        t32 = $[47];
    }
    let t33;
    if ($[48] !== t32 || $[49] !== toggleDarkMode) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: toggleDarkMode,
            className: "relative p-3 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-gray-300/50 dark:border-slate-600/50 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20 group hidden lg:flex",
            "aria-label": "Toggle dark mode",
            children: [
                t31,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 343,
            columnNumber: 11
        }, this);
        $[48] = t32;
        $[49] = toggleDarkMode;
        $[50] = t33;
    } else {
        t33 = $[50];
    }
    let t34;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = ({
            "Navbar[<button>.onClick]": ()=>setCartOpen(true)
        })["Navbar[<button>.onClick]"];
        $[51] = t34;
    } else {
        t34 = $[51];
    }
    let t35;
    if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-linear-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 361,
            columnNumber: 11
        }, this);
        $[52] = t35;
    } else {
        t35 = $[52];
    }
    let t36;
    if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                lineNumber: 368,
                columnNumber: 104
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 368,
            columnNumber: 11
        }, this);
        $[53] = t36;
    } else {
        t36 = $[53];
    }
    let t37;
    if ($[54] !== getTotalItems || $[55] !== mounted) {
        t37 = mounted && getTotalItems() > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "absolute -top-2 -right-2 bg-linear-to-r from-red-500 to-pink-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold shadow-lg animate-bounce",
            children: getTotalItems()
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 375,
            columnNumber: 45
        }, this);
        $[54] = getTotalItems;
        $[55] = mounted;
        $[56] = t37;
    } else {
        t37 = $[56];
    }
    let t38;
    if ($[57] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t34,
            className: "relative p-3 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-gray-300/50 dark:border-slate-600/50 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20 group",
            "aria-label": "Open shopping cart",
            children: [
                t35,
                t36,
                t37
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 384,
            columnNumber: 11
        }, this);
        $[57] = t37;
        $[58] = t38;
    } else {
        t38 = $[58];
    }
    let t39;
    if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = ({
            "Navbar[<button>.onClick]": ()=>setMobileMenuOpen(true)
        })["Navbar[<button>.onClick]"];
        $[59] = t39;
    } else {
        t39 = $[59];
    }
    let t40;
    if ($[60] === Symbol.for("react.memo_cache_sentinel")) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-linear-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 401,
            columnNumber: 11
        }, this);
        $[60] = t40;
    } else {
        t40 = $[60];
    }
    let t41;
    if ($[61] === Symbol.for("react.memo_cache_sentinel")) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t39,
            className: "lg:hidden p-3 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-gray-300/50 dark:border-slate-600/50 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20 group",
            "aria-label": "Open mobile menu",
            children: [
                t40,
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
                        lineNumber: 408,
                        columnNumber: 469
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.js",
                    lineNumber: 408,
                    columnNumber: 376
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 408,
            columnNumber: 11
        }, this);
        $[61] = t41;
    } else {
        t41 = $[61];
    }
    let t42;
    if ($[62] !== t30 || $[63] !== t33 || $[64] !== t38) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center space-x-5",
            children: [
                t30,
                t33,
                t38,
                t41
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 415,
            columnNumber: 11
        }, this);
        $[62] = t30;
        $[63] = t33;
        $[64] = t38;
        $[65] = t42;
    } else {
        t42 = $[65];
    }
    let t43;
    if ($[66] !== t23 || $[67] !== t42) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-end space-x-5 shrink-0",
            children: [
                t23,
                t42
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 425,
            columnNumber: 11
        }, this);
        $[66] = t23;
        $[67] = t42;
        $[68] = t43;
    } else {
        t43 = $[68];
    }
    let t44;
    if ($[69] !== t16 || $[70] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto px-4 sm:px-6 lg:px-8 relative",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center h-16 lg:h-20",
                children: [
                    t14,
                    t16,
                    t43
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.js",
                lineNumber: 434,
                columnNumber: 66
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 434,
            columnNumber: 11
        }, this);
        $[69] = t16;
        $[70] = t43;
        $[71] = t44;
    } else {
        t44 = $[71];
    }
    const t45 = `fixed inset-0 z-60 lg:hidden transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`;
    let t46;
    if ($[72] === Symbol.for("react.memo_cache_sentinel")) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-black/50 backdrop-blur-lg",
            onClick: {
                "Navbar[<div>.onClick]": ()=>setMobileMenuOpen(false)
            }["Navbar[<div>.onClick]"]
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 444,
            columnNumber: 11
        }, this);
        $[72] = t46;
    } else {
        t46 = $[72];
    }
    const t47 = `fixed left-0 top-0 h-screen w-4/5 bg-white dark:bg-slate-800 shadow-2xl border-r border-gray-200 dark:border-slate-700 transform transition-transform duration-300 z-70 ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`;
    let t48;
    let t49;
    if ($[73] === Symbol.for("react.memo_cache_sentinel")) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center space-x-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-8 h-8 bg-linear-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-lg flex items-center justify-center shadow-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white font-bold text-sm",
                        children: "SN"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.js",
                        lineNumber: 455,
                        columnNumber: 194
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.js",
                    lineNumber: 455,
                    columnNumber: 56
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xl font-black bg-linear-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-200 bg-clip-text text-transparent",
                    children: "ShopNow"
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.js",
                    lineNumber: 455,
                    columnNumber: 256
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 455,
            columnNumber: 11
        }, this);
        t49 = ({
            "Navbar[<button>.onClick]": ()=>setMobileMenuOpen(false)
        })["Navbar[<button>.onClick]"];
        $[73] = t48;
        $[74] = t49;
    } else {
        t48 = $[73];
        t49 = $[74];
    }
    let t50;
    if ($[75] === Symbol.for("react.memo_cache_sentinel")) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between p-6 border-b border-gray-200 dark:border-slate-700",
            children: [
                t48,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: t49,
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
                            lineNumber: 467,
                            columnNumber: 363
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.js",
                        lineNumber: 467,
                        columnNumber: 251
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.js",
                    lineNumber: 467,
                    columnNumber: 118
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 467,
            columnNumber: 11
        }, this);
        $[75] = t50;
    } else {
        t50 = $[75];
    }
    let t51;
    if ($[76] === Symbol.for("react.memo_cache_sentinel")) {
        t51 = [
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
        $[76] = t51;
    } else {
        t51 = $[76];
    }
    let t52;
    if ($[77] !== pathname) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "space-y-6",
            children: t51.map({
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
                        lineNumber: 496,
                        columnNumber: 18
                    }, this);
                }
            }["Navbar[(anonymous)()]"])
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 493,
            columnNumber: 11
        }, this);
        $[77] = pathname;
        $[78] = t52;
    } else {
        t52 = $[78];
    }
    let t53;
    if ($[79] === Symbol.for("react.memo_cache_sentinel")) {
        t53 = ({
            "Navbar[<input>.onChange]": (e_0)=>setSearchQuery(e_0.target.value)
        })["Navbar[<input>.onChange]"];
        $[79] = t53;
    } else {
        t53 = $[79];
    }
    let t54;
    if ($[80] !== searchQuery) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            placeholder: "Search products...",
            value: searchQuery,
            onChange: t53,
            className: "w-full px-4 py-3 pl-12 text-sm bg-gray-50 text-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 517,
            columnNumber: 11
        }, this);
        $[80] = searchQuery;
        $[81] = t54;
    } else {
        t54 = $[81];
    }
    let t55;
    if ($[82] === Symbol.for("react.memo_cache_sentinel")) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                lineNumber: 525,
                columnNumber: 128
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 525,
            columnNumber: 11
        }, this);
        $[82] = t55;
    } else {
        t55 = $[82];
    }
    let t56;
    if ($[83] !== router || $[84] !== searchQuery) {
        t56 = searchQuery.trim() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: {
                "Navbar[<button>.onClick]": ()=>{
                    setMobileMenuOpen(false);
                    router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
                    setSearchQuery("");
                }
            }["Navbar[<button>.onClick]"],
            className: "absolute right-4 top-3.5 p-1 text-blue-500 hover:text-blue-600 transition-colors",
            "aria-label": "Search",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-4 h-4",
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
                    lineNumber: 538,
                    columnNumber: 228
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.js",
                lineNumber: 538,
                columnNumber: 149
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 532,
            columnNumber: 33
        }, this);
        $[83] = router;
        $[84] = searchQuery;
        $[85] = t56;
    } else {
        t56 = $[85];
    }
    let t57;
    if ($[86] !== t54 || $[87] !== t56) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t54,
                t55,
                t56
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 547,
            columnNumber: 11
        }, this);
        $[86] = t54;
        $[87] = t56;
        $[88] = t57;
    } else {
        t57 = $[88];
    }
    let t58;
    if ($[89] !== searchQuery || $[90] !== searchResults) {
        t58 = searchQuery.length > 0 && searchResults.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl shadow-lg max-h-60 overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-2",
                    children: searchResults.map({
                        "Navbar[searchResults.map()]": (product_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/product/${product_1.id}`,
                                className: "flex items-center p-3 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors rounded-lg group",
                                onClick: {
                                    "Navbar[searchResults.map() > <Link>.onClick]": ()=>{
                                        setSearchQuery("");
                                        setMobileMenuOpen(false);
                                    }
                                }["Navbar[searchResults.map() > <Link>.onClick]"],
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: product_1.image,
                                        alt: product_1.name,
                                        className: "w-10 h-10 object-cover rounded-lg mr-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.js",
                                        lineNumber: 562,
                                        columnNumber: 62
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-medium text-gray-900 dark:text-white text-sm truncate",
                                                children: product_1.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Navbar.js",
                                                lineNumber: 562,
                                                columnNumber: 195
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-blue-600 dark:text-blue-400 font-bold text-xs",
                                                children: [
                                                    "$",
                                                    product_1.price
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Navbar.js",
                                                lineNumber: 562,
                                                columnNumber: 293
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Navbar.js",
                                        lineNumber: 562,
                                        columnNumber: 163
                                    }, this)
                                ]
                            }, product_1.id, true, {
                                fileName: "[project]/src/components/Navbar.js",
                                lineNumber: 557,
                                columnNumber: 55
                            }, this)
                    }["Navbar[searchResults.map()]"])
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.js",
                    lineNumber: 556,
                    columnNumber: 205
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: `/shop?search=${encodeURIComponent(searchQuery)}`,
                    className: "block p-3 text-center bg-gray-50 dark:bg-slate-700 text-blue-600 dark:text-blue-400 font-medium hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors rounded-b-xl border-t border-gray-200 dark:border-slate-600",
                    onClick: {
                        "Navbar[<Link>.onClick]": ()=>{
                            setSearchQuery("");
                            setMobileMenuOpen(false);
                        }
                    }["Navbar[<Link>.onClick]"],
                    children: "View all results"
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.js",
                    lineNumber: 563,
                    columnNumber: 49
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 556,
            columnNumber: 65
        }, this);
        $[89] = searchQuery;
        $[90] = searchResults;
        $[91] = t58;
    } else {
        t58 = $[91];
    }
    let t59;
    if ($[92] !== searchQuery.length || $[93] !== searchResults) {
        t59 = searchQuery.length > 0 && searchResults.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-2 p-3 text-center text-gray-500 dark:text-gray-400 text-sm bg-gray-50 dark:bg-slate-700 rounded-xl",
            children: "No products found"
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 577,
            columnNumber: 67
        }, this);
        $[92] = searchQuery.length;
        $[93] = searchResults;
        $[94] = t59;
    } else {
        t59 = $[94];
    }
    let t60;
    if ($[95] !== t57 || $[96] !== t58 || $[97] !== t59) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-8 mobile-search-container",
            ref: searchRef,
            children: [
                t57,
                t58,
                t59
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 586,
            columnNumber: 11
        }, this);
        $[95] = t57;
        $[96] = t58;
        $[97] = t59;
        $[98] = t60;
    } else {
        t60 = $[98];
    }
    const t61 = `flex items-center px-4 py-3 rounded-xl transition-all duration-300 font-semibold ${pathname === "/favourites" ? "bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400" : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 hover:text-red-600 dark:hover:text-red-400"}`;
    let t62;
    if ($[99] === Symbol.for("react.memo_cache_sentinel")) {
        t62 = ({
            "Navbar[<Link>.onClick]": ()=>setMobileMenuOpen(false)
        })["Navbar[<Link>.onClick]"];
        $[99] = t62;
    } else {
        t62 = $[99];
    }
    const t63 = wishlistItems.length > 0 ? "currentColor" : "none";
    let t64;
    if ($[100] === Symbol.for("react.memo_cache_sentinel")) {
        t64 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 607,
            columnNumber: 11
        }, this);
        $[100] = t64;
    } else {
        t64 = $[100];
    }
    let t65;
    if ($[101] !== t63) {
        t65 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-6 h-6 mr-4",
            fill: t63,
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: t64
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 614,
            columnNumber: 11
        }, this);
        $[101] = t63;
        $[102] = t65;
    } else {
        t65 = $[102];
    }
    let t66;
    if ($[103] !== mounted || $[104] !== wishlistItems.length) {
        t66 = mounted && wishlistItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "ml-auto bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold",
            children: wishlistItems.length
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 622,
            columnNumber: 50
        }, this);
        $[103] = mounted;
        $[104] = wishlistItems.length;
        $[105] = t66;
    } else {
        t66 = $[105];
    }
    let t67;
    if ($[106] !== t61 || $[107] !== t65 || $[108] !== t66) {
        t67 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/favourites",
            className: t61,
            onClick: t62,
            children: [
                t65,
                "Favourites",
                t66
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 631,
            columnNumber: 11
        }, this);
        $[106] = t61;
        $[107] = t65;
        $[108] = t66;
        $[109] = t67;
    } else {
        t67 = $[109];
    }
    let t68;
    if ($[110] !== darkMode || $[111] !== mounted) {
        t68 = mounted && darkMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                lineNumber: 641,
                columnNumber: 117
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 641,
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
                lineNumber: 641,
                columnNumber: 433
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 641,
            columnNumber: 349
        }, this);
        $[110] = darkMode;
        $[111] = mounted;
        $[112] = t68;
    } else {
        t68 = $[112];
    }
    const t69 = darkMode ? "Light Mode" : "Dark Mode";
    let t70;
    if ($[113] !== t68 || $[114] !== t69 || $[115] !== toggleDarkMode) {
        t70 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: toggleDarkMode,
            className: "flex items-center w-full px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-semibold",
            children: [
                t68,
                t69
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 651,
            columnNumber: 11
        }, this);
        $[113] = t68;
        $[114] = t69;
        $[115] = toggleDarkMode;
        $[116] = t70;
    } else {
        t70 = $[116];
    }
    let t71;
    if ($[117] === Symbol.for("react.memo_cache_sentinel")) {
        t71 = ({
            "Navbar[<button>.onClick]": ()=>{
                setCartOpen(true);
                setMobileMenuOpen(false);
            }
        })["Navbar[<button>.onClick]"];
        $[117] = t71;
    } else {
        t71 = $[117];
    }
    let t72;
    if ($[118] === Symbol.for("react.memo_cache_sentinel")) {
        t72 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                lineNumber: 673,
                columnNumber: 95
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 673,
            columnNumber: 11
        }, this);
        $[118] = t72;
    } else {
        t72 = $[118];
    }
    let t73;
    if ($[119] !== getTotalItems || $[120] !== mounted) {
        t73 = mounted && getTotalItems() > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "ml-auto bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold",
            children: getTotalItems()
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 680,
            columnNumber: 45
        }, this);
        $[119] = getTotalItems;
        $[120] = mounted;
        $[121] = t73;
    } else {
        t73 = $[121];
    }
    let t74;
    if ($[122] !== t73) {
        t74 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t71,
            className: "flex items-center w-full px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-semibold",
            children: [
                t72,
                "Cart",
                t73
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 689,
            columnNumber: 11
        }, this);
        $[122] = t73;
        $[123] = t74;
    } else {
        t74 = $[123];
    }
    let t75;
    if ($[124] !== t67 || $[125] !== t70 || $[126] !== t74) {
        t75 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-8 space-y-4",
            children: [
                t67,
                t70,
                t74
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 697,
            columnNumber: 11
        }, this);
        $[124] = t67;
        $[125] = t70;
        $[126] = t74;
        $[127] = t75;
    } else {
        t75 = $[127];
    }
    let t76;
    if ($[128] !== t52 || $[129] !== t60 || $[130] !== t75) {
        t76 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col h-full bg-white dark:bg-slate-800",
            children: [
                t50,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 px-6 py-8 bg-white dark:bg-slate-800",
                    children: [
                        t52,
                        t60,
                        t75
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Navbar.js",
                    lineNumber: 707,
                    columnNumber: 81
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 707,
            columnNumber: 11
        }, this);
        $[128] = t52;
        $[129] = t60;
        $[130] = t75;
        $[131] = t76;
    } else {
        t76 = $[131];
    }
    let t77;
    if ($[132] !== t47 || $[133] !== t76) {
        t77 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t47,
            children: t76
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 717,
            columnNumber: 11
        }, this);
        $[132] = t47;
        $[133] = t76;
        $[134] = t77;
    } else {
        t77 = $[134];
    }
    let t78;
    if ($[135] !== t45 || $[136] !== t77) {
        t78 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t45,
            children: [
                t46,
                t77
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 726,
            columnNumber: 11
        }, this);
        $[135] = t45;
        $[136] = t77;
        $[137] = t78;
    } else {
        t78 = $[137];
    }
    let t79;
    if ($[138] !== t11 || $[139] !== t44 || $[140] !== t78) {
        t79 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: t11,
            children: [
                t12,
                t44,
                t78
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 735,
            columnNumber: 11
        }, this);
        $[138] = t11;
        $[139] = t44;
        $[140] = t78;
        $[141] = t79;
    } else {
        t79 = $[141];
    }
    let t80;
    if ($[142] === Symbol.for("react.memo_cache_sentinel")) {
        t80 = ({
            "Navbar[<Cart>.onClose]": ()=>setCartOpen(false)
        })["Navbar[<Cart>.onClose]"];
        $[142] = t80;
    } else {
        t80 = $[142];
    }
    let t81;
    if ($[143] !== cartOpen) {
        t81 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            isOpen: cartOpen,
            onClose: t80
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 754,
            columnNumber: 11
        }, this);
        $[143] = cartOpen;
        $[144] = t81;
    } else {
        t81 = $[144];
    }
    let t82;
    if ($[145] !== t79 || $[146] !== t81) {
        t82 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t79,
                t81
            ]
        }, void 0, true);
        $[145] = t79;
        $[146] = t81;
        $[147] = t82;
    } else {
        t82 = $[147];
    }
    return t82;
}
_s(Navbar, "s7nPFKOetonrKcX7R3nDU82RVYs=", false, function() {
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