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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(59);
    if ($[0] !== "c545792715cb54d1981fcae28143c626a159041b9f952eff1b37d5bcb25533dd") {
        for(let $i = 0; $i < 59; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c545792715cb54d1981fcae28143c626a159041b9f952eff1b37d5bcb25533dd";
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
    const [recentlyAdded, setRecentlyAdded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [darkMode, setDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(_CartProviderUseState);
    let t3;
    let t4;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "CartProvider[useEffect()]": ()=>{
                ;
                try {
                    const savedCart = localStorage.getItem("shopnow-cart");
                    const savedWishlist = localStorage.getItem("shopnow-wishlist");
                    if (savedCart) {
                        const parsedCart = JSON.parse(savedCart);
                        if (Array.isArray(parsedCart)) {
                            setCartItems(parsedCart);
                        }
                    }
                    if (savedWishlist) {
                        const parsedWishlist = JSON.parse(savedWishlist);
                        if (Array.isArray(parsedWishlist)) {
                            setWishlistItems(parsedWishlist);
                        }
                    }
                } catch (t5) {
                    const error = t5;
                    console.error("Error loading cart data:", error);
                    localStorage.removeItem("shopnow-cart");
                    localStorage.removeItem("shopnow-wishlist");
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
                const timeoutId = setTimeout({
                    "CartProvider[useEffect() > setTimeout()]": ()=>{
                        ;
                        try {
                            localStorage.setItem("shopnow-cart", JSON.stringify(cartItems));
                        } catch (t9) {
                            const error_0 = t9;
                            console.error("Error saving cart:", error_0);
                        }
                    }
                }["CartProvider[useEffect() > setTimeout()]"], 100);
                return ()=>clearTimeout(timeoutId);
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
                const timeoutId_0 = setTimeout({
                    "CartProvider[useEffect() > setTimeout()]": ()=>{
                        ;
                        try {
                            localStorage.setItem("shopnow-wishlist", JSON.stringify(wishlistItems));
                        } catch (t11) {
                            const error_1 = t11;
                            console.error("Error saving wishlist:", error_1);
                        }
                    }
                }["CartProvider[useEffect() > setTimeout()]"], 100);
                return ()=>clearTimeout(timeoutId_0);
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
            "CartProvider[addToCart]": (product, t12)=>{
                const quantity = t12 === undefined ? 1 : t12;
                setCartItems({
                    "CartProvider[addToCart > setCartItems()]": (prevItems)=>{
                        const existingItem = prevItems.find({
                            "CartProvider[addToCart > setCartItems() > prevItems.find()]": (item)=>item.id === product.id
                        }["CartProvider[addToCart > setCartItems() > prevItems.find()]"]);
                        if (existingItem) {
                            return prevItems.map({
                                "CartProvider[addToCart > setCartItems() > prevItems.map()]": (item_0)=>item_0.id === product.id ? {
                                        ...item_0,
                                        quantity: item_0.quantity + quantity
                                    } : item_0
                            }["CartProvider[addToCart > setCartItems() > prevItems.map()]"]);
                        } else {
                            return [
                                ...prevItems,
                                {
                                    ...product,
                                    quantity,
                                    addedAt: new Date().toISOString()
                                }
                            ];
                        }
                    }
                }["CartProvider[addToCart > setCartItems()]"]);
                setRecentlyAdded(product.id);
                setTimeout({
                    "CartProvider[addToCart > setTimeout()]": ()=>setRecentlyAdded(null)
                }["CartProvider[addToCart > setTimeout()]"], 2000);
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
            "CartProvider[updateQuantity]": (productId_0, quantity_0)=>{
                if (quantity_0 <= 0) {
                    removeFromCart(productId_0);
                    return;
                }
                setCartItems({
                    "CartProvider[updateQuantity > setCartItems()]": (prevItems_1)=>prevItems_1.map({
                            "CartProvider[updateQuantity > setCartItems() > prevItems_1.map()]": (item_2)=>item_2.id === productId_0 ? {
                                    ...item_2,
                                    quantity: quantity_0
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
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = ({
            "CartProvider[incrementQuantity]": (productId_1)=>{
                setCartItems({
                    "CartProvider[incrementQuantity > setCartItems()]": (prevItems_2)=>prevItems_2.map({
                            "CartProvider[incrementQuantity > setCartItems() > prevItems_2.map()]": (item_3)=>item_3.id === productId_1 ? {
                                    ...item_3,
                                    quantity: item_3.quantity + 1
                                } : item_3
                        }["CartProvider[incrementQuantity > setCartItems() > prevItems_2.map()]"])
                }["CartProvider[incrementQuantity > setCartItems()]"]);
            }
        })["CartProvider[incrementQuantity]"];
        $[17] = t14;
    } else {
        t14 = $[17];
    }
    const incrementQuantity = t14;
    let t15;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = ({
            "CartProvider[decrementQuantity]": (productId_2)=>{
                setCartItems({
                    "CartProvider[decrementQuantity > setCartItems()]": (prevItems_3)=>prevItems_3.map({
                            "CartProvider[decrementQuantity > setCartItems() > prevItems_3.map()]": (item_4)=>item_4.id === productId_2 && item_4.quantity > 1 ? {
                                    ...item_4,
                                    quantity: item_4.quantity - 1
                                } : item_4
                        }["CartProvider[decrementQuantity > setCartItems() > prevItems_3.map()]"])
                }["CartProvider[decrementQuantity > setCartItems()]"]);
            }
        })["CartProvider[decrementQuantity]"];
        $[18] = t15;
    } else {
        t15 = $[18];
    }
    const decrementQuantity = t15;
    let t16;
    if ($[19] !== cartItems) {
        t16 = ({
            "CartProvider[getTotalItems]": ()=>cartItems.reduce(_CartProviderGetTotalItemsCartItemsReduce, 0)
        })["CartProvider[getTotalItems]"];
        $[19] = cartItems;
        $[20] = t16;
    } else {
        t16 = $[20];
    }
    const getTotalItems = t16;
    let t17;
    if ($[21] !== cartItems) {
        t17 = ({
            "CartProvider[getTotalPrice]": ()=>cartItems.reduce(_CartProviderGetTotalPriceCartItemsReduce, 0)
        })["CartProvider[getTotalPrice]"];
        $[21] = cartItems;
        $[22] = t17;
    } else {
        t17 = $[22];
    }
    const getTotalPrice = t17;
    let t18;
    if ($[23] !== cartItems) {
        t18 = ({
            "CartProvider[getItemQuantity]": (productId_3)=>{
                const item_8 = cartItems.find({
                    "CartProvider[getItemQuantity > cartItems.find()]": (item_7)=>item_7.id === productId_3
                }["CartProvider[getItemQuantity > cartItems.find()]"]);
                return item_8 ? item_8.quantity : 0;
            }
        })["CartProvider[getItemQuantity]"];
        $[23] = cartItems;
        $[24] = t18;
    } else {
        t18 = $[24];
    }
    const getItemQuantity = t18;
    let t19;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = ({
            "CartProvider[clearCart]": ()=>{
                setCartItems([]);
            }
        })["CartProvider[clearCart]"];
        $[25] = t19;
    } else {
        t19 = $[25];
    }
    const clearCart = t19;
    let t20;
    if ($[26] !== cartItems || $[27] !== getTotalItems || $[28] !== getTotalPrice) {
        t20 = ({
            "CartProvider[getCartSummary]": ()=>{
                const totalItems = getTotalItems();
                const totalPrice = getTotalPrice();
                const uniqueItems = cartItems.length;
                return {
                    totalItems,
                    totalPrice,
                    uniqueItems,
                    formattedTotal: `$${totalPrice.toFixed(2)}`
                };
            }
        })["CartProvider[getCartSummary]"];
        $[26] = cartItems;
        $[27] = getTotalItems;
        $[28] = getTotalPrice;
        $[29] = t20;
    } else {
        t20 = $[29];
    }
    const getCartSummary = t20;
    let t21;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = ({
            "CartProvider[addToWishlist]": (product_0)=>{
                setWishlistItems({
                    "CartProvider[addToWishlist > setWishlistItems()]": (prevItems_4)=>{
                        const existingItem_0 = prevItems_4.find({
                            "CartProvider[addToWishlist > setWishlistItems() > prevItems_4.find()]": (item_9)=>item_9.id === product_0.id
                        }["CartProvider[addToWishlist > setWishlistItems() > prevItems_4.find()]"]);
                        if (!existingItem_0) {
                            return [
                                ...prevItems_4,
                                {
                                    ...product_0,
                                    addedAt: new Date().toISOString()
                                }
                            ];
                        }
                        return prevItems_4;
                    }
                }["CartProvider[addToWishlist > setWishlistItems()]"]);
            }
        })["CartProvider[addToWishlist]"];
        $[30] = t21;
    } else {
        t21 = $[30];
    }
    const addToWishlist = t21;
    let t22;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = ({
            "CartProvider[removeFromWishlist]": (productId_4)=>{
                setWishlistItems({
                    "CartProvider[removeFromWishlist > setWishlistItems()]": (prevItems_5)=>prevItems_5.filter({
                            "CartProvider[removeFromWishlist > setWishlistItems() > prevItems_5.filter()]": (item_10)=>item_10.id !== productId_4
                        }["CartProvider[removeFromWishlist > setWishlistItems() > prevItems_5.filter()]"])
                }["CartProvider[removeFromWishlist > setWishlistItems()]"]);
            }
        })["CartProvider[removeFromWishlist]"];
        $[31] = t22;
    } else {
        t22 = $[31];
    }
    const removeFromWishlist = t22;
    let isInWishlist;
    let t23;
    let toggleWishlist;
    if ($[32] !== wishlistItems) {
        toggleWishlist = ({
            "CartProvider[toggleWishlist]": (product_1)=>{
                if (isInWishlist(product_1.id)) {
                    removeFromWishlist(product_1.id);
                } else {
                    addToWishlist(product_1);
                }
            }
        })["CartProvider[toggleWishlist]"];
        isInWishlist = ({
            "CartProvider[isInWishlist]": (productId_5)=>wishlistItems.some({
                    "CartProvider[isInWishlist > wishlistItems.some()]": (item_11)=>item_11.id === productId_5
                }["CartProvider[isInWishlist > wishlistItems.some()]"])
        })["CartProvider[isInWishlist]"];
        t23 = ({
            "CartProvider[getWishlistCount]": ()=>wishlistItems.length
        })["CartProvider[getWishlistCount]"];
        $[32] = wishlistItems;
        $[33] = isInWishlist;
        $[34] = t23;
        $[35] = toggleWishlist;
    } else {
        isInWishlist = $[33];
        t23 = $[34];
        toggleWishlist = $[35];
    }
    const getWishlistCount = t23;
    let t24;
    if ($[36] !== darkMode) {
        t24 = ({
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
        $[36] = darkMode;
        $[37] = t24;
    } else {
        t24 = $[37];
    }
    const toggleDarkMode = t24;
    let t25;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = ({
            "CartProvider[setTheme]": (theme)=>{
                const isDark = theme === "dark";
                setDarkMode(isDark);
                if (isDark) {
                    document.documentElement.classList.add("dark");
                    localStorage.setItem("shopnow-theme", "dark");
                } else {
                    document.documentElement.classList.remove("dark");
                    localStorage.setItem("shopnow-theme", "light");
                }
            }
        })["CartProvider[setTheme]"];
        $[38] = t25;
    } else {
        t25 = $[38];
    }
    const setTheme = t25;
    let t26;
    if ($[39] !== getTotalItems || $[40] !== getTotalPrice) {
        t26 = ({
            "CartProvider[getCartStats]": ()=>{
                const totalValue = getTotalPrice();
                const itemCount = getTotalItems();
                const averagePrice = itemCount > 0 ? totalValue / itemCount : 0;
                return {
                    totalValue,
                    itemCount,
                    averagePrice: averagePrice.toFixed(2),
                    savings: 0
                };
            }
        })["CartProvider[getCartStats]"];
        $[39] = getTotalItems;
        $[40] = getTotalPrice;
        $[41] = t26;
    } else {
        t26 = $[41];
    }
    const getCartStats = t26;
    let t27;
    if ($[42] !== cartItems || $[43] !== darkMode || $[44] !== getCartStats || $[45] !== getCartSummary || $[46] !== getItemQuantity || $[47] !== getTotalItems || $[48] !== getTotalPrice || $[49] !== getWishlistCount || $[50] !== isInWishlist || $[51] !== recentlyAdded || $[52] !== toggleDarkMode || $[53] !== toggleWishlist || $[54] !== wishlistItems) {
        t27 = {
            cartItems,
            wishlistItems,
            recentlyAdded,
            darkMode,
            addToCart,
            removeFromCart,
            updateQuantity,
            incrementQuantity,
            decrementQuantity,
            getTotalItems,
            getTotalPrice,
            getItemQuantity,
            clearCart,
            getCartSummary,
            getCartStats,
            addToWishlist,
            removeFromWishlist,
            toggleWishlist,
            isInWishlist,
            getWishlistCount,
            toggleDarkMode,
            setTheme
        };
        $[42] = cartItems;
        $[43] = darkMode;
        $[44] = getCartStats;
        $[45] = getCartSummary;
        $[46] = getItemQuantity;
        $[47] = getTotalItems;
        $[48] = getTotalPrice;
        $[49] = getWishlistCount;
        $[50] = isInWishlist;
        $[51] = recentlyAdded;
        $[52] = toggleDarkMode;
        $[53] = toggleWishlist;
        $[54] = wishlistItems;
        $[55] = t27;
    } else {
        t27 = $[55];
    }
    const value = t27;
    let t28;
    if ($[56] !== children || $[57] !== value) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CartContext.Provider, {
            value: value,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/context/CartContext.js",
            lineNumber: 517,
            columnNumber: 11
        }, this);
        $[56] = children;
        $[57] = value;
        $[58] = t28;
    } else {
        t28 = $[58];
    }
    return t28;
}
_s(CartProvider, "1Q3RUUGQx9PVmrQji4D5ZWajyVw=");
_c = CartProvider;
function _CartProviderGetTotalPriceCartItemsReduce(total_0, item_6) {
    return total_0 + item_6.price * item_6.quantity;
}
function _CartProviderGetTotalItemsCartItemsReduce(total, item_5) {
    return total + item_5.quantity;
}
function _CartProviderUseState() {
    if ("TURBOPACK compile-time truthy", 1) {
        const savedTheme = localStorage.getItem("shopnow-theme");
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (savedTheme === "dark" || !savedTheme && systemPrefersDark) {
            document.documentElement.classList.add("dark");
            return true;
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
    if ($[0] !== "c545792715cb54d1981fcae28143c626a159041b9f952eff1b37d5bcb25533dd") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c545792715cb54d1981fcae28143c626a159041b9f952eff1b37d5bcb25533dd";
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
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Cart(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(37);
    if ($[0] !== "a9b9a131868cc08160e9828228f276a0d6e33a476461cab4bd5ac720327a2278") {
        for(let $i = 0; $i < 37; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a9b9a131868cc08160e9828228f276a0d6e33a476461cab4bd5ac720327a2278";
    }
    const { isOpen, onClose } = t0;
    const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    if ($[1] !== cartItems || $[2] !== getTotalPrice || $[3] !== isOpen || $[4] !== onClose || $[5] !== removeFromCart || $[6] !== updateQuantity) {
        t8 = Symbol.for("react.early_return_sentinel");
        bb0: {
            const total = getTotalPrice();
            if (!isOpen) {
                t8 = null;
                break bb0;
            }
            t6 = "fixed inset-0 z-50 overflow-hidden";
            if ($[15] !== onClose) {
                t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-black bg-opacity-50",
                    onClick: onClose
                }, void 0, false, {
                    fileName: "[project]/src/components/Cart.js",
                    lineNumber: 42,
                    columnNumber: 14
                }, this);
                $[15] = onClose;
                $[16] = t7;
            } else {
                t7 = $[16];
            }
            t5 = "absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl";
            t1 = "flex flex-col h-full";
            let t9;
            if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
                t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-lg font-semibold",
                    children: "Shopping Cart"
                }, void 0, false, {
                    fileName: "[project]/src/components/Cart.js",
                    lineNumber: 52,
                    columnNumber: 14
                }, this);
                $[17] = t9;
            } else {
                t9 = $[17];
            }
            let t10;
            if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
                t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-6 h-6",
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
                        lineNumber: 59,
                        columnNumber: 94
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Cart.js",
                    lineNumber: 59,
                    columnNumber: 15
                }, this);
                $[18] = t10;
            } else {
                t10 = $[18];
            }
            if ($[19] !== onClose) {
                t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between p-4 border-b",
                    children: [
                        t9,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-gray-400 hover:text-gray-600",
                            children: t10
                        }, void 0, false, {
                            fileName: "[project]/src/components/Cart.js",
                            lineNumber: 65,
                            columnNumber: 82
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Cart.js",
                    lineNumber: 65,
                    columnNumber: 14
                }, this);
                $[19] = onClose;
                $[20] = t2;
            } else {
                t2 = $[20];
            }
            if ($[21] !== cartItems || $[22] !== removeFromCart || $[23] !== updateQuantity) {
                t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto p-4",
                    children: cartItems.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-gray-500",
                        children: "Your cart is empty"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Cart.js",
                        lineNumber: 72,
                        columnNumber: 84
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: cartItems.map({
                            "Cart[cartItems.map()]": (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-16 h-16 bg-gray-200 rounded-md flex-shrink-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: item.image,
                                                alt: item.name,
                                                className: "w-full h-full object-cover rounded-md"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Cart.js",
                                                lineNumber: 73,
                                                columnNumber: 171
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Cart.js",
                                            lineNumber: 73,
                                            columnNumber: 107
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-medium",
                                                    children: item.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Cart.js",
                                                    lineNumber: 73,
                                                    columnNumber: 291
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-600",
                                                    children: [
                                                        "$",
                                                        item.price
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Cart.js",
                                                    lineNumber: 73,
                                                    columnNumber: 335
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center space-x-2 mt-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: {
                                                                "Cart[cartItems.map() > <button>.onClick]": ()=>updateQuantity(item.id, item.quantity - 1)
                                                            }["Cart[cartItems.map() > <button>.onClick]"],
                                                            className: "w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-sm hover:bg-gray-300",
                                                            children: "-"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Cart.js",
                                                            lineNumber: 73,
                                                            columnNumber: 439
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm",
                                                            children: item.quantity
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Cart.js",
                                                            lineNumber: 75,
                                                            columnNumber: 182
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: {
                                                                "Cart[cartItems.map() > <button>.onClick]": ()=>updateQuantity(item.id, item.quantity + 1)
                                                            }["Cart[cartItems.map() > <button>.onClick]"],
                                                            className: "w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-sm hover:bg-gray-300",
                                                            children: "+"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Cart.js",
                                                            lineNumber: 75,
                                                            columnNumber: 230
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Cart.js",
                                                    lineNumber: 73,
                                                    columnNumber: 389
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Cart.js",
                                            lineNumber: 73,
                                            columnNumber: 267
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-right",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-semibold",
                                                    children: [
                                                        "$",
                                                        (item.price * item.quantity).toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Cart.js",
                                                    lineNumber: 77,
                                                    columnNumber: 222
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: {
                                                        "Cart[cartItems.map() > <button>.onClick]": ()=>removeFromCart(item.id)
                                                    }["Cart[cartItems.map() > <button>.onClick]"],
                                                    className: "text-red-500 text-sm hover:text-red-700 mt-1",
                                                    children: "Remove"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Cart.js",
                                                    lineNumber: 77,
                                                    columnNumber: 301
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Cart.js",
                                            lineNumber: 77,
                                            columnNumber: 194
                                        }, this)
                                    ]
                                }, item.id, true, {
                                    fileName: "[project]/src/components/Cart.js",
                                    lineNumber: 73,
                                    columnNumber: 48
                                }, this)
                        }["Cart[cartItems.map()]"])
                    }, void 0, false, {
                        fileName: "[project]/src/components/Cart.js",
                        lineNumber: 72,
                        columnNumber: 150
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Cart.js",
                    lineNumber: 72,
                    columnNumber: 14
                }, this);
                $[21] = cartItems;
                $[22] = removeFromCart;
                $[23] = updateQuantity;
                $[24] = t3;
            } else {
                t3 = $[24];
            }
            t4 = cartItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-lg font-semibold",
                                children: "Total:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Cart.js",
                                lineNumber: 88,
                                columnNumber: 122
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-lg font-semibold",
                                children: [
                                    "$",
                                    total.toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Cart.js",
                                lineNumber: 88,
                                columnNumber: 175
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Cart.js",
                        lineNumber: 88,
                        columnNumber: 66
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors",
                        children: "Checkout"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Cart.js",
                        lineNumber: 88,
                        columnNumber: 247
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Cart.js",
                lineNumber: 88,
                columnNumber: 36
            }, this);
        }
        $[1] = cartItems;
        $[2] = getTotalPrice;
        $[3] = isOpen;
        $[4] = onClose;
        $[5] = removeFromCart;
        $[6] = updateQuantity;
        $[7] = t1;
        $[8] = t2;
        $[9] = t3;
        $[10] = t4;
        $[11] = t5;
        $[12] = t6;
        $[13] = t7;
        $[14] = t8;
    } else {
        t1 = $[7];
        t2 = $[8];
        t3 = $[9];
        t4 = $[10];
        t5 = $[11];
        t6 = $[12];
        t7 = $[13];
        t8 = $[14];
    }
    if (t8 !== Symbol.for("react.early_return_sentinel")) {
        return t8;
    }
    let t9;
    if ($[25] !== t1 || $[26] !== t2 || $[27] !== t3 || $[28] !== t4) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: [
                t2,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Cart.js",
            lineNumber: 119,
            columnNumber: 10
        }, this);
        $[25] = t1;
        $[26] = t2;
        $[27] = t3;
        $[28] = t4;
        $[29] = t9;
    } else {
        t9 = $[29];
    }
    let t10;
    if ($[30] !== t5 || $[31] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            children: t9
        }, void 0, false, {
            fileName: "[project]/src/components/Cart.js",
            lineNumber: 130,
            columnNumber: 11
        }, this);
        $[30] = t5;
        $[31] = t9;
        $[32] = t10;
    } else {
        t10 = $[32];
    }
    let t11;
    if ($[33] !== t10 || $[34] !== t6 || $[35] !== t7) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t6,
            children: [
                t7,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Cart.js",
            lineNumber: 139,
            columnNumber: 11
        }, this);
        $[33] = t10;
        $[34] = t6;
        $[35] = t7;
        $[36] = t11;
    } else {
        t11 = $[36];
    }
    return t11;
}
_s(Cart, "80hrGnSmewk6YRS4fO+67m2wTQg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = Cart;
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(82);
    if ($[0] !== "7fe9b0fff5c85400174e014d4d1449475e43a7b5554bc641235dbca70d2d751f") {
        for(let $i = 0; $i < 82; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7fe9b0fff5c85400174e014d4d1449475e43a7b5554bc641235dbca70d2d751f";
    }
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
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
            lineNumber: 131,
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
                className: "w-10 h-10 bg-linear-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-500 group-hover:scale-105",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white font-bold text-sm",
                        children: "SN"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.js",
                        lineNumber: 138,
                        columnNumber: 277
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 rounded-xl border-2 border-white/20 animate-pulse-slow"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.js",
                        lineNumber: 138,
                        columnNumber: 333
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.js",
                lineNumber: 138,
                columnNumber: 37
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 138,
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
                className: "flex items-center space-x-3 group",
                children: [
                    t11,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-2xl font-black bg-linear-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-200 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500",
                                children: "ShopNow"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.js",
                                lineNumber: 145,
                                columnNumber: 152
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-gray-500 dark:text-gray-400 font-medium -mt-1",
                                children: "PREMIUM COLLECTION"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.js",
                                lineNumber: 145,
                                columnNumber: 388
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.js",
                        lineNumber: 145,
                        columnNumber: 121
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.js",
                lineNumber: 145,
                columnNumber: 55
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 145,
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
                            className: `relative px-6 py-2 transition-all duration-300 font-semibold group ${isActive ? "text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"}`,
                            children: [
                                item.label,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `absolute bottom-0 h-0.5 bg-linear-to-r from-blue-500 to-purple-500 transition-all duration-500 ${isActive ? "w-1/2 left-1/4" : "w-0 left-1/2"}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.js",
                                    lineNumber: 174,
                                    columnNumber: 283
                                }, this)
                            ]
                        }, item.href, true, {
                            fileName: "[project]/src/components/Navbar.js",
                            lineNumber: 174,
                            columnNumber: 20
                        }, this);
                    }
                }["Navbar[(anonymous)()]"])
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.js",
                lineNumber: 171,
                columnNumber: 93
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 171,
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
            lineNumber: 193,
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
                lineNumber: 201,
                columnNumber: 144
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 201,
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
                lineNumber: 208,
                columnNumber: 51
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 208,
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
            lineNumber: 215,
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
                                        lineNumber: 229,
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
                                                lineNumber: 229,
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
                                                lineNumber: 229,
                                                columnNumber: 419
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Navbar.js",
                                        lineNumber: 229,
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
                                            lineNumber: 229,
                                            columnNumber: 700
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.js",
                                        lineNumber: 229,
                                        columnNumber: 517
                                    }, this)
                                ]
                            }, product_0.id, true, {
                                fileName: "[project]/src/components/Navbar.js",
                                lineNumber: 224,
                                columnNumber: 55
                            }, this)
                    }["Navbar[searchResults.map()]"])
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.js",
                    lineNumber: 223,
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
                    lineNumber: 230,
                    columnNumber: 49
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 223,
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
            lineNumber: 245,
            columnNumber: 11
        }, this);
        $[28] = t19;
        $[29] = t20;
        $[30] = t21;
    } else {
        t21 = $[30];
    }
    const t22 = `relative p-3 rounded-2xl backdrop-blur-sm border transition-all duration-500 hover:scale-110 hover:shadow-lg group ${pathname === "/favourites" ? "bg-red-50 dark:bg-red-900/20 border-red-300/50 dark:border-red-600/50 text-red-600 dark:text-red-400 shadow-lg shadow-red-500/20" : "bg-white/80 dark:bg-slate-800/80 border-gray-300/50 dark:border-slate-600/50 text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 hover:shadow-red-500/20"}`;
    let t23;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-linear-to-r from-red-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 255,
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
            lineNumber: 263,
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
            lineNumber: 270,
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
            lineNumber: 278,
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
            lineNumber: 287,
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
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "lg:hidden p-3 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-gray-300/50 dark:border-slate-600/50 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                    fileName: "[project]/src/components/Navbar.js",
                    lineNumber: 297,
                    columnNumber: 343
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.js",
                lineNumber: 297,
                columnNumber: 264
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 297,
            columnNumber: 11
        }, this);
        $[42] = t29;
    } else {
        t29 = $[42];
    }
    let t30;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-linear-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 304,
            columnNumber: 11
        }, this);
        $[43] = t30;
    } else {
        t30 = $[43];
    }
    let t31;
    if ($[44] !== darkMode || $[45] !== mounted) {
        t31 = mounted && darkMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                lineNumber: 311,
                columnNumber: 126
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 311,
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
                lineNumber: 311,
                columnNumber: 451
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 311,
            columnNumber: 358
        }, this);
        $[44] = darkMode;
        $[45] = mounted;
        $[46] = t31;
    } else {
        t31 = $[46];
    }
    let t32;
    if ($[47] !== t31 || $[48] !== toggleDarkMode) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: toggleDarkMode,
            className: "relative p-3 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-gray-300/50 dark:border-slate-600/50 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20 group",
            "aria-label": "Toggle dark mode",
            children: [
                t30,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 320,
            columnNumber: 11
        }, this);
        $[47] = t31;
        $[48] = toggleDarkMode;
        $[49] = t32;
    } else {
        t32 = $[49];
    }
    let t33;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = ({
            "Navbar[<button>.onClick]": ()=>setCartOpen(true)
        })["Navbar[<button>.onClick]"];
        $[50] = t33;
    } else {
        t33 = $[50];
    }
    let t34;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-linear-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 338,
            columnNumber: 11
        }, this);
        $[51] = t34;
    } else {
        t34 = $[51];
    }
    let t35;
    if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-6 h-6 relative z-10",
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
                lineNumber: 345,
                columnNumber: 104
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 345,
            columnNumber: 11
        }, this);
        $[52] = t35;
    } else {
        t35 = $[52];
    }
    let t36;
    if ($[53] !== getTotalItems || $[54] !== mounted) {
        t36 = mounted && getTotalItems() > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "absolute -top-2 -right-2 bg-linear-to-r from-red-500 to-pink-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold shadow-lg animate-bounce",
            children: getTotalItems()
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 352,
            columnNumber: 45
        }, this);
        $[53] = getTotalItems;
        $[54] = mounted;
        $[55] = t36;
    } else {
        t36 = $[55];
    }
    let t37;
    if ($[56] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t33,
            className: "relative p-3 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-gray-300/50 dark:border-slate-600/50 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20 group",
            "aria-label": "Open shopping cart",
            children: [
                t34,
                t35,
                t36
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 361,
            columnNumber: 11
        }, this);
        $[56] = t36;
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
            lineNumber: 369,
            columnNumber: 11
        }, this);
        $[58] = t38;
    } else {
        t38 = $[58];
    }
    let t39;
    if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "p-3 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-gray-300/50 dark:border-slate-600/50 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20 group",
            children: [
                t38,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-5 h-5 relative z-10",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.js",
                        lineNumber: 376,
                        columnNumber: 415
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.js",
                    lineNumber: 376,
                    columnNumber: 322
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 376,
            columnNumber: 11
        }, this);
        $[59] = t39;
    } else {
        t39 = $[59];
    }
    let t40;
    if ($[60] !== t28 || $[61] !== t32 || $[62] !== t37) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center space-x-5",
            children: [
                t28,
                t29,
                t32,
                t37,
                t39
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 383,
            columnNumber: 11
        }, this);
        $[60] = t28;
        $[61] = t32;
        $[62] = t37;
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
            lineNumber: 393,
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
            className: "flex justify-between items-center h-16 lg:h-20",
            children: [
                t12,
                t14,
                t41
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 402,
            columnNumber: 11
        }, this);
        $[67] = t14;
        $[68] = t41;
        $[69] = t42;
    } else {
        t42 = $[69];
    }
    let t43;
    if ($[70] === Symbol.for("react.memo_cache_sentinel")) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:hidden border-t border-gray-200/50 dark:border-slate-700/50 py-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center space-x-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium",
                        children: "Home"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.js",
                        lineNumber: 411,
                        columnNumber: 143
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/shop",
                        className: "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium",
                        children: "Shop"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.js",
                        lineNumber: 411,
                        columnNumber: 289
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/contact",
                        className: "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium",
                        children: "Contact"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.js",
                        lineNumber: 411,
                        columnNumber: 439
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.js",
                lineNumber: 411,
                columnNumber: 96
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 411,
            columnNumber: 11
        }, this);
        $[70] = t43;
    } else {
        t43 = $[70];
    }
    let t44;
    if ($[71] !== t42) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto px-4 sm:px-6 lg:px-8 relative",
            children: [
                t42,
                t43
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 418,
            columnNumber: 11
        }, this);
        $[71] = t42;
        $[72] = t44;
    } else {
        t44 = $[72];
    }
    let t45;
    if ($[73] !== t44 || $[74] !== t9) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: t9,
            children: [
                t10,
                t44
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 426,
            columnNumber: 11
        }, this);
        $[73] = t44;
        $[74] = t9;
        $[75] = t45;
    } else {
        t45 = $[75];
    }
    let t46;
    if ($[76] === Symbol.for("react.memo_cache_sentinel")) {
        t46 = ({
            "Navbar[<Cart>.onClose]": ()=>setCartOpen(false)
        })["Navbar[<Cart>.onClose]"];
        $[76] = t46;
    } else {
        t46 = $[76];
    }
    let t47;
    if ($[77] !== cartOpen) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            isOpen: cartOpen,
            onClose: t46
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 444,
            columnNumber: 11
        }, this);
        $[77] = cartOpen;
        $[78] = t47;
    } else {
        t47 = $[78];
    }
    let t48;
    if ($[79] !== t45 || $[80] !== t47) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t45,
                t47
            ]
        }, void 0, true);
        $[79] = t45;
        $[80] = t47;
        $[81] = t48;
    } else {
        t48 = $[81];
    }
    return t48;
}
_s(Navbar, "17tJCxWc/qv0cyT5CW7ww/ctf8A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
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