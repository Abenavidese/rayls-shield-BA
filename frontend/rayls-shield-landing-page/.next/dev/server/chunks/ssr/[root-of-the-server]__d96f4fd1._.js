module.exports = [
"[project]/rayls-shield-landing-page/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/rayls-shield-landing-page/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/rayls-shield-landing-page/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/rayls-shield-landing-page/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/rayls-shield-landing-page/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/rayls-shield-landing-page/components/ui/label.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/@radix-ui/react-label/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/rayls-shield-landing-page/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/rayls-shield-landing-page/lib/contracts/addresses.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CONTRACT_ADDRESSES",
    ()=>CONTRACT_ADDRESSES,
    "DEFAULT_NETWORK",
    ()=>DEFAULT_NETWORK
]);
const CONTRACT_ADDRESSES = {
    RAYLS_TESTNET: {
        chainId: 123123,
        networkName: 'Rayls Testnet',
        rpcUrl: 'https://devnet-rpc.rayls.com',
        explorerUrl: 'https://devnet-explorer.rayls.com',
        contracts: {
            RaylsShield: '0xAC22e6292EbDf4Ee3963FFa35293a22770AD6781',
            Groth16Verifier: '0x8fded712132bC7d9c284c6f1F96Fd5aA61adfC89'
        }
    }
};
const DEFAULT_NETWORK = CONTRACT_ADDRESSES.RAYLS_TESTNET;
}),
"[project]/rayls-shield-landing-page/lib/web3/provider.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Web3Provider",
    ()=>Web3Provider,
    "web3Provider",
    ()=>web3Provider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$browser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/ethers/lib.esm/providers/provider-browser.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$lib$2f$contracts$2f$addresses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/lib/contracts/addresses.ts [app-ssr] (ecmascript)");
;
;
class Web3Provider {
    provider = null;
    signer = null;
    async initProvider() {
        if (!window.ethereum) {
            throw new Error('MetaMask is not installed');
        }
        if (!this.provider) {
            this.provider = new __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$browser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BrowserProvider"](window.ethereum);
        }
        // Re-get signer if needed
        if (!this.signer) {
            const accounts = await window.ethereum.request({
                method: 'eth_accounts'
            });
            if (accounts.length > 0) {
                this.signer = await this.provider.getSigner();
            }
        }
    }
    async connectWallet() {
        if (!window.ethereum) {
            throw new Error('MetaMask is not installed');
        }
        try {
            this.provider = new __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$browser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BrowserProvider"](window.ethereum);
            const accounts = await window.ethereum.request({
                method: 'eth_requestAccounts'
            });
            if (accounts.length === 0) {
                throw new Error('No accounts found');
            }
            this.signer = await this.provider.getSigner();
            return accounts[0];
        } catch (error) {
            if (error.code === 4001) {
                throw new Error('User rejected the connection request');
            }
            throw error;
        }
    }
    async getConnectedAccount() {
        if (!window.ethereum) {
            return null;
        }
        try {
            // Initialize provider if needed
            await this.initProvider();
            const accounts = await window.ethereum.request({
                method: 'eth_accounts'
            });
            return accounts.length > 0 ? accounts[0] : null;
        } catch  {
            return null;
        }
    }
    async switchToRaylsNetwork() {
        if (!window.ethereum) {
            throw new Error('MetaMask is not installed');
        }
        const chainIdHex = `0x${__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$lib$2f$contracts$2f$addresses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_NETWORK"].chainId.toString(16)}`;
        try {
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [
                    {
                        chainId: chainIdHex
                    }
                ]
            });
        } catch (switchError) {
            // Chain doesn't exist, add it
            if (switchError.code === 4902) {
                try {
                    await window.ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [
                            {
                                chainId: chainIdHex,
                                chainName: __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$lib$2f$contracts$2f$addresses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_NETWORK"].networkName,
                                nativeCurrency: {
                                    name: 'USDgas',
                                    symbol: 'USDgas',
                                    decimals: 18
                                },
                                rpcUrls: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$lib$2f$contracts$2f$addresses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_NETWORK"].rpcUrl
                                ],
                                blockExplorerUrls: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$lib$2f$contracts$2f$addresses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_NETWORK"].explorerUrl
                                ]
                            }
                        ]
                    });
                } catch (addError) {
                    throw new Error('Failed to add Rayls network to MetaMask');
                }
            } else {
                throw switchError;
            }
        }
    }
    async getCurrentChainId() {
        if (!window.ethereum) {
            throw new Error('MetaMask is not installed');
        }
        const chainId = await window.ethereum.request({
            method: 'eth_chainId'
        });
        return parseInt(chainId, 16);
    }
    async getSigner() {
        // Try to initialize if not connected
        if (!this.signer) {
            await this.initProvider();
        }
        if (!this.signer) {
            throw new Error('Wallet not connected');
        }
        return this.signer;
    }
    async getProvider() {
        if (!this.provider) {
            await this.initProvider();
        }
        if (!this.provider) {
            throw new Error('Provider not initialized');
        }
        return this.provider;
    }
    isConnected() {
        return this.provider !== null && this.signer !== null;
    }
}
const web3Provider = new Web3Provider();
}),
"[project]/rayls-shield-landing-page/hooks/use-wallet.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useWallet",
    ()=>useWallet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$lib$2f$web3$2f$provider$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/lib/web3/provider.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$lib$2f$contracts$2f$addresses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/lib/contracts/addresses.ts [app-ssr] (ecmascript)");
;
;
;
function useWallet() {
    const [isConnected, setIsConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [address, setAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [chainId, setChainId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isCorrectNetwork, setIsCorrectNetwork] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Check if wallet is already connected on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkConnection = async ()=>{
            try {
                const account = await __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$lib$2f$web3$2f$provider$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["web3Provider"].getConnectedAccount();
                if (account) {
                    setAddress(account);
                    setIsConnected(true);
                    const currentChainId = await __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$lib$2f$web3$2f$provider$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["web3Provider"].getCurrentChainId();
                    setChainId(currentChainId);
                    setIsCorrectNetwork(currentChainId === __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$lib$2f$contracts$2f$addresses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_NETWORK"].chainId);
                }
            } catch (err) {
                console.error('Error checking wallet connection:', err);
            }
        };
        checkConnection();
        // Setup event listeners for account and chain changes
        if (window.ethereum) {
            const handleAccountsChanged = (accounts)=>{
                if (accounts.length > 0) {
                    setAddress(accounts[0]);
                    setIsConnected(true);
                    setError('');
                } else {
                    setAddress('');
                    setIsConnected(false);
                }
            };
            const handleChainChanged = (chainIdHex)=>{
                const newChainId = parseInt(chainIdHex, 16);
                setChainId(newChainId);
                setIsCorrectNetwork(newChainId === __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$lib$2f$contracts$2f$addresses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_NETWORK"].chainId);
            };
            window.ethereum.on('accountsChanged', handleAccountsChanged);
            window.ethereum.on('chainChanged', handleChainChanged);
            return ()=>{
                window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
                window.ethereum.removeListener('chainChanged', handleChainChanged);
            };
        }
    }, []);
    const connect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        setIsLoading(true);
        setError('');
        try {
            const account = await __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$lib$2f$web3$2f$provider$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["web3Provider"].connectWallet();
            setAddress(account);
            setIsConnected(true);
            const currentChainId = await __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$lib$2f$web3$2f$provider$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["web3Provider"].getCurrentChainId();
            setChainId(currentChainId);
            setIsCorrectNetwork(currentChainId === __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$lib$2f$contracts$2f$addresses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_NETWORK"].chainId);
            return account;
        } catch (err) {
            const errorMessage = err.message || 'Failed to connect wallet';
            setError(errorMessage);
            throw new Error(errorMessage);
        } finally{
            setIsLoading(false);
        }
    }, []);
    const switchNetwork = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        setIsLoading(true);
        setError('');
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$lib$2f$web3$2f$provider$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["web3Provider"].switchToRaylsNetwork();
            const currentChainId = await __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$lib$2f$web3$2f$provider$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["web3Provider"].getCurrentChainId();
            setChainId(currentChainId);
            setIsCorrectNetwork(currentChainId === __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$lib$2f$contracts$2f$addresses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_NETWORK"].chainId);
        } catch (err) {
            const errorMessage = err.message || 'Failed to switch network';
            setError(errorMessage);
            throw new Error(errorMessage);
        } finally{
            setIsLoading(false);
        }
    }, []);
    const disconnect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setIsConnected(false);
        setAddress('');
        setChainId(null);
        setIsCorrectNetwork(false);
    }, []);
    return {
        isConnected,
        address,
        chainId,
        isCorrectNetwork,
        error,
        isLoading,
        connect,
        switchNetwork,
        disconnect
    };
}
}),
"[project]/rayls-shield-landing-page/lib/contracts/RaylsShieldABI.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RAYLS_SHIELD_ABI",
    ()=>RAYLS_SHIELD_ABI
]);
const RAYLS_SHIELD_ABI = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_endpoint",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_verifier",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "messageHash",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "srcChainId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "nullifier",
                "type": "bytes32"
            }
        ],
        "name": "PrivateMessageReceived",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "messageHash",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "dstChainId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "nullifierHash",
                "type": "bytes32"
            }
        ],
        "name": "PrivateMessageSent",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "oldVerifier",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newVerifier",
                "type": "address"
            }
        ],
        "name": "VerifierUpdated",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "_messageHash",
                "type": "bytes32"
            }
        ],
        "name": "isMessageVerified",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "_nullifier",
                "type": "bytes32"
            }
        ],
        "name": "isNullifierUsed",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_dstChainId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_destination",
                "type": "address"
            },
            {
                "internalType": "bytes",
                "name": "_encryptedPayload",
                "type": "bytes"
            },
            {
                "internalType": "uint256[2]",
                "name": "_pA",
                "type": "uint256[2]"
            },
            {
                "internalType": "uint256[2][2]",
                "name": "_pB",
                "type": "uint256[2][2]"
            },
            {
                "internalType": "uint256[2]",
                "name": "_pC",
                "type": "uint256[2]"
            },
            {
                "internalType": "uint256[3]",
                "name": "_publicSignals",
                "type": "uint256[3]"
            }
        ],
        "name": "sendPrivateMessage",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_dstChainId",
                "type": "uint256"
            },
            {
                "internalType": "bytes32",
                "name": "_resourceId",
                "type": "bytes32"
            },
            {
                "internalType": "bytes",
                "name": "_encryptedPayload",
                "type": "bytes"
            },
            {
                "internalType": "uint256[2]",
                "name": "_pA",
                "type": "uint256[2]"
            },
            {
                "internalType": "uint256[2][2]",
                "name": "_pB",
                "type": "uint256[2][2]"
            },
            {
                "internalType": "uint256[2]",
                "name": "_pC",
                "type": "uint256[2]"
            },
            {
                "internalType": "uint256[3]",
                "name": "_publicSignals",
                "type": "uint256[3]"
            }
        ],
        "name": "sendPrivateMessageToResource",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_newVerifier",
                "type": "address"
            }
        ],
        "name": "updateVerifier",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "verifier",
        "outputs": [
            {
                "internalType": "contract IGroth16Verifier",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];
}),
"[project]/rayls-shield-landing-page/lib/contracts/Groth16VerifierABI.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GROTH16_VERIFIER_ABI",
    ()=>GROTH16_VERIFIER_ABI
]);
const GROTH16_VERIFIER_ABI = [
    {
        "inputs": [
            {
                "internalType": "uint256[2]",
                "name": "_pA",
                "type": "uint256[2]"
            },
            {
                "internalType": "uint256[2][2]",
                "name": "_pB",
                "type": "uint256[2][2]"
            },
            {
                "internalType": "uint256[2]",
                "name": "_pC",
                "type": "uint256[2]"
            },
            {
                "internalType": "uint256[3]",
                "name": "_pubSignals",
                "type": "uint256[3]"
            }
        ],
        "name": "verifyProof",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/vm [external] (vm, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("vm", () => require("vm"));

module.exports = mod;
}),
"[externals]/worker_threads [external] (worker_threads, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("worker_threads", () => require("worker_threads"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/constants [external] (constants, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("constants", () => require("constants"));

module.exports = mod;
}),
"[externals]/readline [external] (readline, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("readline", () => require("readline"));

module.exports = mod;
}),
"[project]/rayls-shield-landing-page/lib/zk/proof-generator.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addressToBigInt",
    ()=>addressToBigInt,
    "generateProofInputs",
    ()=>generateProofInputs,
    "generateRandomNullifier",
    ()=>generateRandomNullifier,
    "generateRandomSecret",
    ()=>generateRandomSecret,
    "generateZKProof",
    ()=>generateZKProof
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$main$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/circomlibjs/main.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$src$2f$poseidon_wasm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/circomlibjs/src/poseidon_wasm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$snarkjs$2f$main$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/snarkjs/main.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$snarkjs$2f$src$2f$groth16$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__groth16$3e$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/snarkjs/src/groth16.js [app-ssr] (ecmascript) <export * as groth16>");
;
;
async function generateProofInputs(params) {
    const poseidon = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$src$2f$poseidon_wasm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildPoseidon"])();
    const F = poseidon.F;
    // Compute public inputs using Poseidon hash
    const commitment = poseidon([
        params.secret,
        params.nullifier,
        params.amount
    ]);
    const commitmentBigInt = F.toObject(commitment);
    const nullifierHash = poseidon([
        params.nullifier
    ]);
    const nullifierHashBigInt = F.toObject(nullifierHash);
    const recipientHash = poseidon([
        params.recipient
    ]);
    const recipientHashBigInt = F.toObject(recipientHash);
    return {
        nullifierHash: nullifierHashBigInt.toString(),
        commitment: commitmentBigInt.toString(),
        recipientHash: recipientHashBigInt.toString()
    };
}
/**
 * Format proof for Solidity contract call
 */ function formatProofForSolidity(proof, publicSignals) {
    return {
        a: [
            proof.pi_a[0],
            proof.pi_a[1]
        ],
        b: [
            [
                proof.pi_b[0][1],
                proof.pi_b[0][0]
            ],
            [
                proof.pi_b[1][1],
                proof.pi_b[1][0]
            ]
        ],
        c: [
            proof.pi_c[0],
            proof.pi_c[1]
        ],
        publicSignals: publicSignals.map((s)=>BigInt(s).toString())
    };
}
async function generateZKProof(params) {
    console.log('🔐 Generating real ZK proof...');
    try {
        // Compute public signals
        const inputs = await generateProofInputs(params);
        // Prepare circuit inputs
        const circuitInputs = {
            nullifierHash: inputs.nullifierHash,
            commitment: inputs.commitment,
            recipientHash: inputs.recipientHash,
            secret: params.secret.toString(),
            nullifier: params.nullifier.toString(),
            recipient: params.recipient.toString(),
            amount: params.amount.toString()
        };
        console.log('📊 Circuit inputs prepared');
        // Generate proof using snarkjs
        const wasmPath = '/circuits/privacy.wasm';
        const zkeyPath = '/circuits/privacy.zkey';
        console.log('⚙️ Computing witness and generating proof...');
        const { proof, publicSignals } = await __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$snarkjs$2f$src$2f$groth16$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__groth16$3e$__["groth16"].fullProve(circuitInputs, wasmPath, zkeyPath);
        console.log('✅ Proof generated successfully!');
        // Format for Solidity
        const solidityProof = formatProofForSolidity(proof, publicSignals);
        return {
            proof,
            publicSignals,
            solidityProof
        };
    } catch (error) {
        console.error('❌ Error generating ZK proof:', error);
        throw new Error(`Failed to generate ZK proof: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}
function addressToBigInt(address) {
    return BigInt(address);
}
function generateRandomSecret() {
    return BigInt('0x' + Array.from({
        length: 64
    }, ()=>Math.floor(Math.random() * 16).toString(16)).join(''));
}
function generateRandomNullifier() {
    return BigInt('0x' + Array.from({
        length: 64
    }, ()=>Math.floor(Math.random() * 16).toString(16)).join(''));
}
}),
"[project]/rayls-shield-landing-page/hooks/use-rayls-shield.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRaylsShield",
    ()=>useRaylsShield
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/ethers/lib.esm/contract/contract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$lib$2f$web3$2f$provider$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/lib/web3/provider.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$lib$2f$contracts$2f$RaylsShieldABI$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/lib/contracts/RaylsShieldABI.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$lib$2f$contracts$2f$Groth16VerifierABI$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/lib/contracts/Groth16VerifierABI.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$lib$2f$contracts$2f$addresses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/lib/contracts/addresses.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$lib$2f$zk$2f$proof$2d$generator$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/lib/zk/proof-generator.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
function useRaylsShield() {
    const [txStatus, setTxStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        status: 'idle'
    });
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const getContract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$lib$2f$web3$2f$provider$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["web3Provider"].isConnected()) {
            throw new Error('Wallet not connected');
        }
        const signer = await __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$lib$2f$web3$2f$provider$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["web3Provider"].getSigner();
        return new __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Contract"](__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$lib$2f$contracts$2f$addresses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_NETWORK"].contracts.RaylsShield, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$lib$2f$contracts$2f$RaylsShieldABI$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RAYLS_SHIELD_ABI"], signer);
    }, []);
    const getVerifierContract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$lib$2f$web3$2f$provider$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["web3Provider"].isConnected()) {
            throw new Error('Wallet not connected');
        }
        const signer = await __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$lib$2f$web3$2f$provider$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["web3Provider"].getSigner();
        return new __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Contract"](__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$lib$2f$contracts$2f$addresses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_NETWORK"].contracts.Groth16Verifier, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$lib$2f$contracts$2f$Groth16VerifierABI$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GROTH16_VERIFIER_ABI"], signer);
    }, []);
    /**
   * Send a private cross-chain message with ZK proof
   */ const sendPrivateMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (params)=>{
        setIsLoading(true);
        setTxStatus({
            status: 'generating-proof'
        });
        try {
            // Step 1: Generate random secret and nullifier
            const secret = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$lib$2f$zk$2f$proof$2d$generator$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateRandomSecret"])();
            const nullifier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$lib$2f$zk$2f$proof$2d$generator$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateRandomNullifier"])();
            const recipient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$lib$2f$zk$2f$proof$2d$generator$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addressToBigInt"])(params.destinationAddress);
            console.log('🔑 Private inputs:', {
                secret: secret.toString(),
                nullifier: nullifier.toString(),
                recipient: recipient.toString(),
                amount: params.amount.toString()
            });
            // Step 2: Generate ZK proof
            console.log('🔐 Generating ZK proof...');
            const proofOutput = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$lib$2f$zk$2f$proof$2d$generator$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateZKProof"])({
                secret,
                nullifier,
                recipient,
                amount: params.amount
            });
            console.log('📊 Proof output:', {
                publicSignals: proofOutput.publicSignals,
                solidityProof: proofOutput.solidityProof
            });
            // Step 2.5: Verify proof locally before sending
            console.log('🔍 Verifying proof with verifier contract...');
            try {
                const isValid = await verifyProof(proofOutput);
                console.log('✅ Local verification result:', isValid);
                if (!isValid) {
                    throw new Error('Proof verification failed locally');
                }
            } catch (verifyError) {
                console.error('❌ Proof verification error:', verifyError);
                throw new Error(`Proof verification failed: ${verifyError instanceof Error ? verifyError.message : 'Unknown error'}`);
            }
            setTxStatus({
                status: 'generating-proof',
                proof: proofOutput
            });
            // Step 3: Prepare encrypted payload (in production, encrypt the actual message)
            const encryptedPayload = params.encryptedPayload || '0x' + Buffer.from('encrypted_data').toString('hex');
            // Step 4: Send transaction
            setTxStatus({
                status: 'signing',
                proof: proofOutput
            });
            const contract = await getContract();
            console.log('📤 Sending transaction with params:', {
                dstChainId: params.destinationChainId,
                destination: params.destinationAddress,
                encryptedPayload,
                proof: {
                    a: proofOutput.solidityProof.a,
                    b: proofOutput.solidityProof.b,
                    c: proofOutput.solidityProof.c,
                    publicSignals: proofOutput.solidityProof.publicSignals
                }
            });
            const tx = await contract.sendPrivateMessage(params.destinationChainId, params.destinationAddress, encryptedPayload, proofOutput.solidityProof.a, proofOutput.solidityProof.b, proofOutput.solidityProof.c, proofOutput.solidityProof.publicSignals, {
                value: 0,
                gasLimit: 500000
            });
            console.log('✅ Transaction sent:', tx.hash);
            setTxStatus({
                status: 'pending',
                hash: tx.hash,
                proof: proofOutput
            });
            // Wait for confirmation
            const receipt = await tx.wait();
            setTxStatus({
                status: 'success',
                hash: receipt.hash,
                proof: proofOutput
            });
            setIsLoading(false);
            return receipt;
        } catch (error) {
            console.error('Error sending private message:', error);
            setTxStatus({
                status: 'error',
                error: error.message || 'Transaction failed'
            });
            setIsLoading(false);
            throw error;
        }
    }, [
        getContract
    ]);
    /**
   * Check if a nullifier has been used
   */ const isNullifierUsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (nullifier)=>{
        try {
            const contract = await getContract();
            return await contract.isNullifierUsed(nullifier);
        } catch (error) {
            console.error('Error checking nullifier:', error);
            throw error;
        }
    }, [
        getContract
    ]);
    /**
   * Check if a message has been verified
   */ const isMessageVerified = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (messageHash)=>{
        try {
            const contract = await getContract();
            return await contract.isMessageVerified(messageHash);
        } catch (error) {
            console.error('Error checking message:', error);
            throw error;
        }
    }, [
        getContract
    ]);
    /**
   * Verify a proof using the Groth16 verifier
   */ const verifyProof = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (proof)=>{
        try {
            const verifier = await getVerifierContract();
            return await verifier.verifyProof(proof.solidityProof.a, proof.solidityProof.b, proof.solidityProof.c, proof.solidityProof.publicSignals);
        } catch (error) {
            console.error('Error verifying proof:', error);
            throw error;
        }
    }, [
        getVerifierContract
    ]);
    /**
   * Reset transaction status
   */ const resetStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setTxStatus({
            status: 'idle'
        });
    }, []);
    return {
        sendPrivateMessage,
        isNullifierUsed,
        isMessageVerified,
        verifyProof,
        resetStatus,
        txStatus,
        isLoading
    };
}
}),
"[project]/rayls-shield-landing-page/components/dapp-interface.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DappInterface
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/lucide-react/dist/esm/icons/wallet.js [app-ssr] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/lucide-react/dist/esm/icons/circle.js [app-ssr] (ecmascript) <export default as Circle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/lucide-react/dist/esm/icons/network.js [app-ssr] (ecmascript) <export default as Network>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$hooks$2f$use$2d$wallet$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/hooks/use-wallet.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$hooks$2f$use$2d$rayls$2d$shield$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/hooks/use-rayls-shield.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$lib$2f$contracts$2f$addresses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/lib/contracts/addresses.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
function DappInterface() {
    const { isConnected, address, isCorrectNetwork, error: walletError, connect, switchNetwork } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$hooks$2f$use$2d$wallet$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWallet"])();
    const { sendPrivateMessage, txStatus, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$hooks$2f$use$2d$rayls$2d$shield$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRaylsShield"])();
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [recipient, setRecipient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [destinationChainId, setDestinationChainId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('123123');
    const handleConnectWallet = async ()=>{
        try {
            await connect();
        } catch (err) {
            console.error('Error connecting wallet:', err);
        }
    };
    const handleSwitchNetwork = async ()=>{
        try {
            await switchNetwork();
        } catch (err) {
            console.error('Error switching network:', err);
        }
    };
    const formatAddress = (address)=>{
        if (!address) return '—';
        return `${address.slice(0, 6)}...${address.slice(-4)}`;
    };
    const handleSendPrivateMessage = async ()=>{
        if (!amount || parseFloat(amount) <= 0 || !recipient || !isConnected) return;
        try {
            // Convert amount to wei (18 decimals)
            const amountInWei = BigInt(Math.floor(parseFloat(amount) * 1e18));
            await sendPrivateMessage({
                destinationChainId: parseInt(destinationChainId),
                destinationAddress: recipient,
                amount: amountInWei
            });
        } catch (err) {
            console.error('Error sending private message:', err);
        }
    };
    const getStatusText = ()=>{
        if (!isConnected) return 'Status: Connect your wallet to begin';
        if (!isCorrectNetwork) return 'Status: Switch to Rayls Testnet';
        if (!amount || !recipient) return 'Status: Enter amount and recipient';
        switch(txStatus.status){
            case 'generating-proof':
                return 'Status: Generating ZK proof...';
            case 'signing':
                return 'Status: Please sign the transaction';
            case 'pending':
                return 'Status: Transaction pending...';
            case 'success':
                return 'Status: Private message sent successfully! ✅';
            case 'error':
                return `Status: Error - ${txStatus.error}`;
            default:
                return 'Status: Ready to send private message';
        }
    };
    const isReadyToSend = isConnected && isCorrectNetwork && amount && recipient && parseFloat(amount) > 0 && !isLoading;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-screen overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-20 left-10 w-64 h-64 border border-primary/30 rotate-45 animate-spin-slow"
                    }, void 0, false, {
                        fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-20 right-10 w-96 h-96 border border-secondary/20 rotate-12 animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 left-1/4 w-32 h-32 border border-primary/20 -rotate-12"
                    }, void 0, false, {
                        fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "relative z-10 border-b border-border bg-background/80 backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 py-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "flex items-center gap-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VppUk6C0PqXEejmhm4odcKCCDOIUKm.png",
                                    alt: "RaylsShield",
                                    width: 200,
                                    height: 50,
                                    className: "h-8 w-auto"
                                }, void 0, false, {
                                    fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                    lineNumber: 97,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "sm",
                                    className: "gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                            lineNumber: 107,
                                            columnNumber: 17
                                        }, this),
                                        "Back to Home"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                    lineNumber: 106,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 container mx-auto px-4 py-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl md:text-5xl font-bold mb-4 text-balance",
                                    children: "RaylsShield Dapp"
                                }, void 0, false, {
                                    fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg text-muted-foreground",
                                    children: "Generate your ZK Proof and send a private transfer"
                                }, void 0, false, {
                                    fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-3 gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:col-span-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative border border-primary/30 bg-card/50 backdrop-blur-sm rounded-lg p-8 shadow-[0_0_30px_rgba(244,255,74,0.1)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                lineNumber: 133,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                lineNumber: 134,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                lineNumber: 135,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                lineNumber: 136,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                                htmlFor: "wallet",
                                                                className: "text-foreground font-semibold",
                                                                children: "1. Connect Wallet & Network"
                                                            }, void 0, false, {
                                                                fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                                lineNumber: 141,
                                                                columnNumber: 21
                                                            }, this),
                                                            walletError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-start gap-2 p-3 rounded-md bg-destructive/10 border border-destructive/20",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                                        className: "h-4 w-4 text-destructive flex-shrink-0 mt-0.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                                        lineNumber: 146,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-destructive",
                                                                        children: walletError
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                                        lineNumber: 147,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                                lineNumber: 145,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                        id: "wallet",
                                                                        onClick: handleConnectWallet,
                                                                        disabled: isConnected,
                                                                        className: "w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(244,255,74,0.3)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(244,255,74,0.5)] font-bold",
                                                                        size: "lg",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                                                                className: "mr-2 h-5 w-5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                                                lineNumber: 158,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            isConnected ? `Connected: ${formatAddress(address)}` : 'Connect Wallet'
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                                        lineNumber: 151,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    isConnected && !isCorrectNetwork && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                        onClick: handleSwitchNetwork,
                                                                        variant: "outline",
                                                                        className: "w-full",
                                                                        size: "lg",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__["Network"], {
                                                                                className: "mr-2 h-5 w-5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                                                lineNumber: 168,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            "Switch to ",
                                                                            __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$lib$2f$contracts$2f$addresses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_NETWORK"].networkName
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                                        lineNumber: 162,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                                lineNumber: 150,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
                                                    }, void 0, false, {
                                                        fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                        lineNumber: 176,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                                htmlFor: "recipient",
                                                                className: "text-foreground font-semibold",
                                                                children: "2. Recipient Address"
                                                            }, void 0, false, {
                                                                fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                                lineNumber: 180,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                                id: "recipient",
                                                                type: "text",
                                                                placeholder: "0x...",
                                                                value: recipient,
                                                                onChange: (e)=>setRecipient(e.target.value),
                                                                disabled: !isConnected || !isCorrectNetwork,
                                                                className: "bg-muted border-primary/30 focus:border-primary focus:shadow-[0_0_15px_rgba(244,255,74,0.2)] font-mono"
                                                            }, void 0, false, {
                                                                fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                                lineNumber: 183,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                        lineNumber: 179,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
                                                    }, void 0, false, {
                                                        fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                        lineNumber: 195,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                                htmlFor: "amount",
                                                                className: "text-foreground font-semibold",
                                                                children: "3. Enter Amount"
                                                            }, void 0, false, {
                                                                fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                                lineNumber: 199,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "relative",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                                        id: "amount",
                                                                        type: "number",
                                                                        placeholder: "0.00",
                                                                        value: amount,
                                                                        onChange: (e)=>setAmount(e.target.value),
                                                                        disabled: !isConnected || !isCorrectNetwork,
                                                                        className: "pr-20 bg-muted border-primary/30 focus:border-primary focus:shadow-[0_0_15px_rgba(244,255,74,0.2)] text-lg font-mono h-12",
                                                                        step: "0.01",
                                                                        min: "0"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                                        lineNumber: 203,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground font-semibold",
                                                                        children: "USDr"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                                        lineNumber: 214,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                                lineNumber: 202,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
                                                    }, void 0, false, {
                                                        fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                        lineNumber: 221,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                                htmlFor: "proof",
                                                                className: "text-foreground font-semibold",
                                                                children: "4. Send Private Message with ZK Proof"
                                                            }, void 0, false, {
                                                                fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                                lineNumber: 225,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                id: "proof",
                                                                onClick: handleSendPrivateMessage,
                                                                disabled: !isReadyToSend,
                                                                className: "w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-[0_0_20px_rgba(199,169,255,0.3)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(199,169,255,0.5)] font-bold",
                                                                size: "lg",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                                        className: "mr-2 h-5 w-5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                                        lineNumber: 235,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    isLoading ? 'Processing...' : 'Generate Proof & Send'
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                                lineNumber: 228,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-muted-foreground text-center font-mono",
                                                                children: getStatusText()
                                                            }, void 0, false, {
                                                                fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                                lineNumber: 240,
                                                                columnNumber: 21
                                                            }, this),
                                                            txStatus.status === 'success' && txStatus.hash && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: `${__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$lib$2f$contracts$2f$addresses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_NETWORK"].explorerUrl}/tx/${txStatus.hash}`,
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "flex items-center justify-center gap-2 text-sm text-primary hover:underline",
                                                                children: [
                                                                    "View on Explorer",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                        className: "h-3 w-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                                        lineNumber: 253,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                                lineNumber: 246,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                        lineNumber: 224,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                lineNumber: 138,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                        lineNumber: 131,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:col-span-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border border-secondary/30 bg-card/50 backdrop-blur-sm rounded-lg p-6 space-y-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-bold text-secondary",
                                                    children: "Transaction Status"
                                                }, void 0, false, {
                                                    fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                    lineNumber: 264,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-muted-foreground",
                                                            children: "Network"
                                                        }, void 0, false, {
                                                            fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                            lineNumber: 268,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-medium text-foreground",
                                                            children: isCorrectNetwork ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-primary",
                                                                children: [
                                                                    "✓ ",
                                                                    __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$lib$2f$contracts$2f$addresses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_NETWORK"].networkName
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                                lineNumber: 271,
                                                                columnNumber: 23
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-destructive",
                                                                children: "Wrong Network"
                                                            }, void 0, false, {
                                                                fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                                lineNumber: 273,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                            lineNumber: 269,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                    lineNumber: 267,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-muted-foreground",
                                                            children: "Connected Wallet"
                                                        }, void 0, false, {
                                                            fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                            lineNumber: 280,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-mono text-foreground break-all",
                                                            children: isConnected ? address : '—'
                                                        }, void 0, false, {
                                                            fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                            lineNumber: 281,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                    lineNumber: 279,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-muted-foreground",
                                                            children: "RaylsShield Contract"
                                                        }, void 0, false, {
                                                            fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                            lineNumber: 288,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: `${__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$lib$2f$contracts$2f$addresses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_NETWORK"].explorerUrl}/address/${__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$lib$2f$contracts$2f$addresses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_NETWORK"].contracts.RaylsShield}`,
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            className: "text-xs font-mono text-secondary hover:underline break-all flex items-start gap-1",
                                                            children: [
                                                                formatAddress(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$lib$2f$contracts$2f$addresses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_NETWORK"].contracts.RaylsShield),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                    className: "h-3 w-3 flex-shrink-0 mt-0.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                                    lineNumber: 296,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                            lineNumber: 289,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                    lineNumber: 287,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-muted-foreground",
                                                            children: "Progress"
                                                        }, void 0, false, {
                                                            fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                            lineNumber: 302,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-start gap-3",
                                                            children: [
                                                                isConnected && isCorrectNetwork ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                    className: "h-5 w-5 text-primary flex-shrink-0 mt-0.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                                    lineNumber: 307,
                                                                    columnNumber: 23
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
                                                                    className: "h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                                    lineNumber: 309,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm font-medium",
                                                                        children: "Wallet Connected"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                                        lineNumber: 312,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                                    lineNumber: 311,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                            lineNumber: 305,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-start gap-3",
                                                            children: [
                                                                recipient && amount && parseFloat(amount) > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                    className: "h-5 w-5 text-primary flex-shrink-0 mt-0.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                                    lineNumber: 319,
                                                                    columnNumber: 23
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
                                                                    className: "h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                                    lineNumber: 321,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm font-medium",
                                                                        children: "Details Entered"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                                        lineNumber: 324,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                                    lineNumber: 323,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                            lineNumber: 317,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-start gap-3",
                                                            children: [
                                                                txStatus.status === 'generating-proof' || txStatus.proof ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                    className: "h-5 w-5 text-secondary flex-shrink-0 mt-0.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                                    lineNumber: 331,
                                                                    columnNumber: 23
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
                                                                    className: "h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                                    lineNumber: 333,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm font-medium",
                                                                        children: "ZK Proof Generated"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                                        lineNumber: 336,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                                    lineNumber: 335,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                            lineNumber: 329,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-start gap-3",
                                                            children: [
                                                                txStatus.status === 'success' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                    className: "h-5 w-5 text-secondary flex-shrink-0 mt-0.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                                    lineNumber: 343,
                                                                    columnNumber: 23
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
                                                                    className: "h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                                    lineNumber: 345,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm font-medium",
                                                                        children: "Transaction Sent"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                                        lineNumber: 348,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                                    lineNumber: 347,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                            lineNumber: 341,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                    lineNumber: 301,
                                                    columnNumber: 17
                                                }, this),
                                                txStatus.hash && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2 pt-4 border-t border-border",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-muted-foreground",
                                                            children: "Last Transaction"
                                                        }, void 0, false, {
                                                            fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                            lineNumber: 356,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: `${__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$lib$2f$contracts$2f$addresses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_NETWORK"].explorerUrl}/tx/${txStatus.hash}`,
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            className: "text-xs font-mono text-secondary hover:underline break-all flex items-start gap-1",
                                                            children: [
                                                                formatAddress(txStatus.hash),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                    className: "h-3 w-3 flex-shrink-0 mt-0.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                                    lineNumber: 364,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                            lineNumber: 357,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                    lineNumber: 355,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                            lineNumber: 263,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-8 relative h-32",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 flex items-center justify-center opacity-20",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-24 h-24 border border-primary rotate-45"
                                                    }, void 0, false, {
                                                        fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                        lineNumber: 373,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute w-16 h-16 border border-secondary -rotate-12"
                                                    }, void 0, false, {
                                                        fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                        lineNumber: 374,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                                lineNumber: 372,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                            lineNumber: 371,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                                    lineNumber: 262,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                    lineNumber: 117,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/rayls-shield-landing-page/components/dapp-interface.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d96f4fd1._.js.map