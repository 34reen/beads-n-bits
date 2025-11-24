(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/ProductCard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ProductCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ProductCard({ product }) {
    _s();
    const [isWishlisted, setIsWishlisted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [imageError, setImageError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const backendUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_BACKEND_URL || "http://localhost/backend";
    // Clean the image path to ensure it's just a filename
    const getCleanImageUrl = (imagePath)=>{
        // If it's already a messed up URL, extract just the filename
        if (imagePath.includes('http://localhost/backend/')) {
            // Extract the last part after the last slash
            const parts = imagePath.split('/');
            const filename = parts[parts.length - 1];
            return `${backendUrl}/admin/uploads/${filename}`;
        }
        // If it's just a filename, use it directly
        return `${backendUrl}/admin/uploads/${imagePath}`;
    };
    const imageUrl = product.image ? getCleanImageUrl(product.image) : "/placeholder.png";
    /*
===========================================================
                 🔥 WISHLIST SECTION (UPDATED)
===========================================================
*/ // Load wishlist state
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductCard.useEffect": ()=>{
            const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
            setIsWishlisted(wishlist.includes(product.id)); // No need for toString() now
        }
    }["ProductCard.useEffect"], [
        product.id
    ]);
    // Toggle wishlist + backend sync
    const toggleWishlist = async ()=>{
        const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
        let updatedWishlist;
        if (isWishlisted) {
            // Remove from wishlist
            updatedWishlist = wishlist.filter((id)=>id !== product.id); // Direct comparison
            try {
                await fetch(`${backendUrl}/store-api/wishlist/remove-from-wishlist.php`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        userId: 1,
                        productId: product.id
                    })
                });
            } catch (error) {
                console.error("Failed to sync remove:", error);
            }
        } else {
            // Add to wishlist
            updatedWishlist = [
                ...wishlist,
                product.id
            ]; // Direct assignment
            try {
                await fetch(`${backendUrl}/store-api/wishlist/add-to-wishlist.php`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        userId: 1,
                        productId: product.id
                    })
                });
            } catch (error) {
                console.error("Failed to sync add:", error);
            }
        }
        // Save to localStorage
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
        // Update UI
        setIsWishlisted(!isWishlisted);
    };
    // Add to cart logic
    const handleAddToCart = async ()=>{
        await fetch(`${backendUrl}/store-api/cart/add-to-cart.php`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userId: 1,
                productId: product.id,
                quantity: 1
            })
        });
        const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
        const itemIndex = existingCart.findIndex((item)=>item.id === product.id);
        // Clean up the image URL to ensure it's just the filename
        const cleanImageUrl = (imagePath)=>{
            // If it contains the double URL, extract just the filename
            if (imagePath.includes('http://localhost/backend/http://localhost/backend/')) {
                return imagePath.replace('http://localhost/backend/http://localhost/backend/uploads/', '');
            }
            // If it's a full URL, extract just the filename
            if (imagePath.includes('http://localhost/backend/uploads/')) {
                return imagePath.replace('http://localhost/backend/uploads/', '');
            }
            // If it's a full URL with admin path, extract just the filename
            if (imagePath.includes('http://localhost/backend/admin/uploads/')) {
                return imagePath.replace('http://localhost/backend/admin/uploads/', '');
            }
            // Otherwise return as is (should be just filename)
            return imagePath;
        };
        const cleanProduct = {
            ...product,
            image: cleanImageUrl(product.image)
        };
        let updatedCart;
        if (itemIndex > -1) {
            existingCart[itemIndex].quantity += 1;
            updatedCart = existingCart;
        } else {
            updatedCart = [
                ...existingCart,
                {
                    ...cleanProduct,
                    quantity: 1
                }
            ];
        }
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        alert(`${product.name} added to cart!`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: imageError ? "/placeholder.png" : imageUrl,
                alt: product.name,
                width: 400,
                height: 300,
                className: "w-full object-cover h-60",
                onError: ()=>setImageError(true),
                priority: true
            }, void 0, false, {
                fileName: "[project]/src/components/ProductCard.tsx",
                lineNumber: 147,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: toggleWishlist,
                className: "absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:scale-105 transition",
                "aria-label": "Add to wishlist",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: isWishlisted ? "text-red-500" : "text-gray-400",
                    children: isWishlisted ? "❤️" : "🤍"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProductCard.tsx",
                    lineNumber: 163,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ProductCard.tsx",
                lineNumber: 158,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold text-gray-800",
                        children: product.name
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 169,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-purple-700 font-bold mt-2",
                        children: [
                            "Ksh ",
                            Math.round(product.price).toLocaleString()
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 170,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-500 mt-1",
                        children: [
                            "⭐ ",
                            (Number(product.rating) || 0).toFixed(1),
                            " / 5"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 173,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleAddToCart,
                        className: "mt-4 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition",
                        children: "Add to Cart"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 178,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProductCard.tsx",
                lineNumber: 168,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProductCard.tsx",
        lineNumber: 145,
        columnNumber: 3
    }, this);
}
_s(ProductCard, "6gWCBIBSfPHD6dxPglC7/JWGreY=");
_c = ProductCard;
var _c;
__turbopack_context__.k.register(_c, "ProductCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/products/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ProductsPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProductCard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ProductsPage() {
    _s();
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductsPage.useEffect": ()=>{
            const fetchProducts = {
                "ProductsPage.useEffect.fetchProducts": async ()=>{
                    try {
                        const res = await fetch("http://localhost/backend/store-api/products/get-products.php");
                        const data = await res.json();
                        // Ensure data is an array
                        if (!Array.isArray(data)) {
                            console.error("Invalid products format:", data);
                            setProducts([]);
                            return;
                        }
                        const updatedData = data.map({
                            "ProductsPage.useEffect.fetchProducts.updatedData": (p)=>({
                                    ...p,
                                    price: Number(p.price) || 0,
                                    rating: Number(p.rating) || 0,
                                    image: p.image && p.image.trim() !== "" ? `http://localhost/backend/${p.image}` : "/placeholder.png"
                                })
                        }["ProductsPage.useEffect.fetchProducts.updatedData"]);
                        setProducts(updatedData);
                    } catch (error) {
                        console.error("Failed to fetch products:", error);
                    } finally{
                        setLoading(false);
                    }
                }
            }["ProductsPage.useEffect.fetchProducts"];
            fetchProducts();
        }
    }["ProductsPage.useEffect"], []);
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        children: "Loading products..."
    }, void 0, false, {
        fileName: "[project]/src/app/products/page.tsx",
        lineNumber: 48,
        columnNumber: 23
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "max-w-7xl mx-auto p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold text-purple-700 mb-6",
                children: "Our Jewelry Collection"
            }, void 0, false, {
                fileName: "[project]/src/app/products/page.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            products.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-500 text-lg",
                children: "No products available"
            }, void 0, false, {
                fileName: "[project]/src/app/products/page.tsx",
                lineNumber: 57,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
                children: products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        product: product
                    }, product.id, false, {
                        fileName: "[project]/src/app/products/page.tsx",
                        lineNumber: 61,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/products/page.tsx",
                lineNumber: 59,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/products/page.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_s(ProductsPage, "KWid68LpBxbFhyja5dauhUIHvyY=");
_c = ProductsPage;
var _c;
__turbopack_context__.k.register(_c, "ProductsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_e219570b._.js.map