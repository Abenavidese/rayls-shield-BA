(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/rayls-shield-landing-page/node_modules/circomlibjs/src/babyjub.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>buildBabyJub
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/ffjavascript/build/browser.esm.js [app-client] (ecmascript)");
;
async function buildBabyJub() {
    const bn128 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurveFromName"])("bn128", true);
    return new BabyJub(bn128.Fr);
}
class BabyJub {
    constructor(F){
        this.F = F;
        this.p = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].fromString("21888242871839275222246405745257275088548364400416034343698204186575808495617");
        this.pm1d2 = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].div(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].sub(this.p, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].e(1)), __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].e(2));
        this.Generator = [
            F.e("995203441582195749578291179787384436505546430278305826713579947235728471134"),
            F.e("5472060717959818805561601436314318772137091100104008585924551046643952123905")
        ];
        this.Base8 = [
            F.e("5299619240641551281634865583518297030282874472190772894086521144482721001553"),
            F.e("16950150798460657717958625567821834550301663161624707787222815936182638968203")
        ];
        this.order = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].fromString("21888242871839275222246405745257275088614511777268538073601725287587578984328");
        this.subOrder = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].shiftRight(this.order, 3);
        this.A = F.e("168700");
        this.D = F.e("168696");
    }
    addPoint(a, b) {
        const F = this.F;
        const res = [];
        /* does the equivalent of:
        res[0] = bigInt((a[0]*b[1] + b[0]*a[1]) *  bigInt(bigInt("1") + d*a[0]*b[0]*a[1]*b[1]).inverse(q)).affine(q);
        res[1] = bigInt((a[1]*b[1] - cta*a[0]*b[0]) * bigInt(bigInt("1") - d*a[0]*b[0]*a[1]*b[1]).inverse(q)).affine(q);
        */ const beta = F.mul(a[0], b[1]);
        const gamma = F.mul(a[1], b[0]);
        const delta = F.mul(F.sub(a[1], F.mul(this.A, a[0])), F.add(b[0], b[1]));
        const tau = F.mul(beta, gamma);
        const dtau = F.mul(this.D, tau);
        res[0] = F.div(F.add(beta, gamma), F.add(F.one, dtau));
        res[1] = F.div(F.add(delta, F.sub(F.mul(this.A, beta), gamma)), F.sub(F.one, dtau));
        return res;
    }
    mulPointEscalar(base, e) {
        const F = this.F;
        let res = [
            F.e("0"),
            F.e("1")
        ];
        let rem = e;
        let exp = base;
        while(!__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].isZero(rem)){
            if (__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].isOdd(rem)) {
                res = this.addPoint(res, exp);
            }
            exp = this.addPoint(exp, exp);
            rem = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].shiftRight(rem, 1);
        }
        return res;
    }
    inSubgroup(P) {
        const F = this.F;
        if (!this.inCurve(P)) return false;
        const res = this.mulPointEscalar(P, this.subOrder);
        return F.isZero(res[0]) && F.eq(res[1], F.one);
    }
    inCurve(P) {
        const F = this.F;
        const x2 = F.square(P[0]);
        const y2 = F.square(P[1]);
        if (!F.eq(F.add(F.mul(this.A, x2), y2), F.add(F.one, F.mul(F.mul(x2, y2), this.D)))) return false;
        return true;
    }
    packPoint(P) {
        const F = this.F;
        const buff = new Uint8Array(32);
        F.toRprLE(buff, 0, P[1]);
        const n = F.toObject(P[0]);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].gt(n, this.pm1d2)) {
            buff[31] = buff[31] | 0x80;
        }
        return buff;
    }
    unpackPoint(buff) {
        const F = this.F;
        let sign = false;
        const P = new Array(2);
        if (buff[31] & 0x80) {
            sign = true;
            buff[31] = buff[31] & 0x7F;
        }
        P[1] = F.fromRprLE(buff, 0);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].gt(F.toObject(P[1]), this.p)) return null;
        const y2 = F.square(P[1]);
        const x2 = F.div(F.sub(F.one, y2), F.sub(this.A, F.mul(this.D, y2)));
        const x2h = F.exp(x2, F.half);
        if (!F.eq(F.one, x2h)) return null;
        let x = F.sqrt(x2);
        if (x == null) return null;
        if (sign) x = F.neg(x);
        P[0] = x;
        return P;
    }
}
}),
"[project]/rayls-shield-landing-page/node_modules/circomlibjs/src/pedersen_hash.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>buildPedersenHash
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$src$2f$babyjub$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/circomlibjs/src/babyjub.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$blake2b$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/blake2b/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$blake$2d$hash$2f$js$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/blake-hash/js.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/ffjavascript/build/browser.esm.js [app-client] (ecmascript)");
;
;
;
;
const GENPOINT_PREFIX = "PedersenGenerator";
const windowSize = 4;
const nWindowsPerSegment = 50;
async function buildPedersenHash() {
    const babyJub = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$src$2f$babyjub$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    return new PedersenHash(babyJub);
}
class PedersenHash {
    constructor(babyJub){
        this.babyJub = babyJub;
        this.bases = [];
    }
    baseHash(type, S) {
        if (type == "blake") {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$blake$2d$hash$2f$js$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("blake256").update(S).digest();
        } else if (type == "blake2b") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from((0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$blake2b$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(32).update(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(S)).digest());
        }
    }
    hash(msg, options) {
        options = options || {};
        options.baseHash = options.baseHash || "blake";
        const babyJub = this.babyJub;
        const bitsPerSegment = windowSize * nWindowsPerSegment;
        const bits = this.buffer2bits(msg);
        const nSegments = Math.floor((bits.length - 1) / (windowSize * nWindowsPerSegment)) + 1;
        let accP = [
            babyJub.F.zero,
            babyJub.F.one
        ];
        for(let s = 0; s < nSegments; s++){
            let nWindows;
            if (s == nSegments - 1) {
                nWindows = Math.floor((bits.length - (nSegments - 1) * bitsPerSegment - 1) / windowSize) + 1;
            } else {
                nWindows = nWindowsPerSegment;
            }
            let escalar = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].e(0);
            let exp = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].e(1);
            for(let w = 0; w < nWindows; w++){
                let o = s * bitsPerSegment + w * windowSize;
                let acc = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].e(1);
                for(let b = 0; b < windowSize - 1 && o < bits.length; b++){
                    if (bits[o]) {
                        acc = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].add(acc, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].shl(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].e(1), b));
                    }
                    o++;
                }
                if (o < bits.length) {
                    if (bits[o]) {
                        acc = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].neg(acc);
                    }
                    o++;
                }
                escalar = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].add(escalar, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].mul(acc, exp));
                exp = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].shl(exp, windowSize + 1);
            }
            if (__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].lt(escalar, 0)) {
                escalar = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].add(escalar, babyJub.subOrder);
            }
            accP = babyJub.addPoint(accP, babyJub.mulPointEscalar(this.getBasePoint(options.baseHash, s), escalar));
        }
        return babyJub.packPoint(accP);
    }
    getBasePoint(baseHashType, pointIdx) {
        const babyJub = this.babyJub;
        if (this.bases[pointIdx]) return this.bases[pointIdx];
        let p = null;
        let tryIdx = 0;
        while(p == null){
            const S = GENPOINT_PREFIX + "_" + this.padLeftZeros(pointIdx, 32) + "_" + this.padLeftZeros(tryIdx, 32);
            const h = this.baseHash(baseHashType, S);
            h[31] = h[31] & 0xBF; // Set 255th bit to 0 (256th is the signal and 254th is the last possible bit to 1)
            p = babyJub.unpackPoint(h);
            tryIdx++;
        }
        const p8 = babyJub.mulPointEscalar(p, 8);
        if (!babyJub.inSubgroup(p8)) {
            throw new Error("Point not in curve");
        }
        this.bases[pointIdx] = p8;
        return p8;
    }
    padLeftZeros(idx, n) {
        let sidx = "" + idx;
        while(sidx.length < n)sidx = "0" + sidx;
        return sidx;
    }
    /*
    Input a buffer
    Returns an array of booleans. 0 is LSB of first byte and so on.
    */ buffer2bits(buff) {
        const res = new Array(buff.length * 8);
        for(let i = 0; i < buff.length; i++){
            const b = buff[i];
            res[i * 8] = b & 0x01;
            res[i * 8 + 1] = (b & 0x02) >> 1;
            res[i * 8 + 2] = (b & 0x04) >> 2;
            res[i * 8 + 3] = (b & 0x08) >> 3;
            res[i * 8 + 4] = (b & 0x10) >> 4;
            res[i * 8 + 5] = (b & 0x20) >> 5;
            res[i * 8 + 6] = (b & 0x40) >> 6;
            res[i * 8 + 7] = (b & 0x80) >> 7;
        }
        return res;
    }
}
}),
"[project]/rayls-shield-landing-page/node_modules/circomlibjs/src/mimc7.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>buildMimc7
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/ffjavascript/build/browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/circomlibjs/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
;
;
const SEED = "mimc";
const NROUNDS = 91;
async function buildMimc7() {
    const bn128 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurveFromName"])("bn128", true);
    return new Mimc7(bn128.Fr);
}
class Mimc7 {
    constructor(F){
        this.F = F;
        this.cts = this.getConstants(SEED, 91);
    }
    getIV(seed) {
        const F = this.F;
        if (typeof seed === "undefined") seed = SEED;
        const c = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].utils.keccak256(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].utils.toUtf8Bytes(seed + "_iv"));
        const cn = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].e(c);
        const iv = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].mod(cn, F.p);
        return iv;
    }
    getConstants(seed, nRounds) {
        const F = this.F;
        if (typeof seed === "undefined") seed = SEED;
        if (typeof nRounds === "undefined") nRounds = NROUNDS;
        const cts = new Array(nRounds);
        let c = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].utils.keccak256(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].utils.toUtf8Bytes(SEED));
        for(let i = 1; i < nRounds; i++){
            c = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].utils.keccak256(c);
            cts[i] = F.e(c);
        }
        cts[0] = F.e(0);
        return cts;
    }
    hash(_x_in, _k) {
        const F = this.F;
        const x_in = F.e(_x_in);
        const k = F.e(_k);
        let r;
        for(let i = 0; i < NROUNDS; i++){
            const c = this.cts[i];
            const t = i == 0 ? F.add(x_in, k) : F.add(F.add(r, k), c);
            const t2 = F.square(t);
            const t4 = F.square(t2);
            r = F.mul(F.mul(t4, t2), t);
        }
        return F.add(r, k);
    }
    multiHash(arr, key) {
        const F = this.F;
        let r;
        if (typeof key === "undefined") {
            r = F.zero;
        } else {
            r = F.e(key);
        }
        for(let i = 0; i < arr.length; i++){
            r = F.add(F.add(r, F.e(arr[i])), this.hash(F.e(arr[i]), r));
        }
        return r;
    }
}
}),
"[project]/rayls-shield-landing-page/node_modules/circomlibjs/src/poseidon_wasm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildPoseidon",
    ()=>buildPoseidon,
    "buildPoseidonWasm",
    ()=>buildPoseidonWasm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$src$2f$poseidon_constants_opt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/circomlibjs/src/poseidon_constants_opt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/ffjavascript/build/browser.esm.js [app-client] (ecmascript)");
;
;
async function buildPoseidon() {
    const bn128 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurveFromName"])("bn128", true, buildPoseidonWasm);
    const F = bn128.Fr;
    const pState = bn128.tm.alloc(32);
    const pIn = bn128.tm.alloc(32 * 16);
    const pOut = bn128.tm.alloc(32 * 17);
    const poseidon = (arr, state, nOut)=>{
        let buff;
        let n;
        if (Array.isArray(arr)) {
            n = arr.length;
            buff = new Uint8Array(n * 32);
            for(let i = 0; i < n; i++)buff.set(F.e(arr[i]), i * 32);
        } else {
            buff = arr;
            n = buff.byteLength / 32;
            if (n * 32 != buff.byteLength) throw new Error("Invalid iput buff size");
        }
        bn128.tm.setBuff(pIn, buff);
        if (n < 1 || n > 16) throw new Error("Invalid poseidon size");
        if (typeof state == "undefined") {
            state = F.zero;
        } else {
            state = F.e(state);
        }
        bn128.tm.setBuff(pState, state);
        nOut = nOut || 1;
        bn128.tm.instance.exports.poseidon(pState, pIn, n, pOut, nOut);
        if (nOut == 1) {
            return bn128.tm.getBuff(pOut, 32);
        } else {
            const out = [];
            for(let i = 0; i < nOut; i++){
                out.push(bn128.tm.getBuff(pOut + i * 32, 32));
            }
            return out;
        }
    };
    poseidon.F = F;
    return poseidon;
}
function buildPoseidonWasm(module) {
    const F = new __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F1Field"](__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].e("21888242871839275222246405745257275088548364400416034343698204186575808495617"));
    const pointers = {
        C: [],
        S: [],
        M: [],
        P: []
    };
    const N_ROUNDS_P = [
        56,
        57,
        56,
        60,
        60,
        63,
        64,
        63,
        60,
        66,
        60,
        65,
        70,
        60,
        64,
        68
    ];
    const NSizes = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$src$2f$poseidon_constants_opt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].C.length;
    const buffIdx = new Uint8Array(NSizes * 5 * 4);
    const buffIdx32 = new Uint32Array(buffIdx.buffer);
    for(let i = 0; i < NSizes; i++){
        buffIdx32[i * 5] = N_ROUNDS_P[i];
        const buffC = new Uint8Array(32 * __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$src$2f$poseidon_constants_opt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].C[i].length);
        for(let j = 0; j < __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$src$2f$poseidon_constants_opt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].C[i].length; j++){
            F.toRprLEM(buffC, j * 32, F.e(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$src$2f$poseidon_constants_opt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].C[i][j]));
        }
        buffIdx32[i * 5 + 1] = module.alloc(buffC);
        const buffS = new Uint8Array(32 * __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$src$2f$poseidon_constants_opt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].S[i].length);
        for(let j = 0; j < __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$src$2f$poseidon_constants_opt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].S[i].length; j++){
            F.toRprLEM(buffS, j * 32, F.e(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$src$2f$poseidon_constants_opt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].S[i][j]));
        }
        buffIdx32[i * 5 + 2] = module.alloc(buffS);
        const N = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$src$2f$poseidon_constants_opt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].M[i].length;
        const buffM = new Uint8Array(32 * N * N);
        for(let j = 0; j < N; j++){
            for(let k = 0; k < N; k++){
                F.toRprLEM(buffM, (j * N + k) * 32, F.e(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$src$2f$poseidon_constants_opt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].M[i][k][j]));
            }
        }
        buffIdx32[i * 5 + 3] = module.alloc(buffM);
        const buffP = new Uint8Array(32 * N * N);
        for(let j = 0; j < N; j++){
            for(let k = 0; k < N; k++){
                F.toRprLEM(buffP, (j * N + k) * 32, F.e(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$src$2f$poseidon_constants_opt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].P[i][k][j]));
            }
        }
        buffIdx32[i * 5 + 4] = module.alloc(buffP);
    }
    const pConstants = module.alloc(buffIdx);
    const pState = module.alloc(32 * ((NSizes + 1) * 32));
    function buildAddConstant() {
        const f = module.addFunction("poseidon_addConstant");
        f.addParam("t", "i32");
        f.addParam("pC", "i32");
        f.setReturnType("i32");
        f.addLocal("i", "i32");
        f.addLocal("pState", "i32");
        const c = f.getCodeBuilder();
        f.addCode(c.setLocal("pState", c.i32_const(pState)), c.setLocal("i", c.i32_const(0)), c.block(c.loop(c.br_if(1, c.i32_eq(c.getLocal("i"), c.getLocal("t"))), c.call("frm_add", c.getLocal("pC"), c.getLocal("pState"), c.getLocal("pState")), c.setLocal("pC", c.i32_add(c.getLocal("pC"), c.i32_const(32))), c.setLocal("pState", c.i32_add(c.getLocal("pState"), c.i32_const(32))), c.setLocal("i", c.i32_add(c.getLocal("i"), c.i32_const(1))), c.br(0))), c.ret(c.getLocal("pC")));
    }
    function buildPower5() {
        const f = module.addFunction("poseidon_power5");
        f.addParam("p", "i32");
        const c = f.getCodeBuilder();
        const AUX = c.i32_const(module.alloc(32));
        f.addCode(c.call("frm_square", c.getLocal("p"), AUX), c.call("frm_square", AUX, AUX), c.call("frm_mul", c.getLocal("p"), AUX, c.getLocal("p")));
    }
    function buildPower5all() {
        const f = module.addFunction("poseidon_power5all");
        f.addParam("t", "i32");
        f.addLocal("i", "i32");
        f.addLocal("pState", "i32");
        const c = f.getCodeBuilder();
        f.addCode(c.setLocal("pState", c.i32_const(pState)), c.setLocal("i", c.i32_const(0)), c.block(c.loop(c.br_if(1, c.i32_eq(c.getLocal("i"), c.getLocal("t"))), c.call("poseidon_power5", c.getLocal("pState")), c.setLocal("pState", c.i32_add(c.getLocal("pState"), c.i32_const(32))), c.setLocal("i", c.i32_add(c.getLocal("i"), c.i32_const(1))), c.br(0))));
    }
    function buildApplyMatrix() {
        const f = module.addFunction("poseidon_applyMatrix");
        f.addParam("t", "i32");
        f.addParam("pM", "i32");
        f.addLocal("i", "i32");
        f.addLocal("j", "i32");
        f.addLocal("pState", "i32");
        f.addLocal("pStateAux", "i32");
        const c = f.getCodeBuilder();
        const pStateAux = module.alloc(32 * ((NSizes + 1) * 32));
        const pAux = module.alloc(32);
        f.addCode(c.setLocal("pStateAux", c.i32_const(pStateAux)), c.setLocal("i", c.i32_const(0)), c.block(c.loop(c.br_if(1, c.i32_eq(c.getLocal("i"), c.getLocal("t"))), c.call("frm_zero", c.getLocal("pStateAux")), c.setLocal("pState", c.i32_const(pState)), c.setLocal("j", c.i32_const(0)), c.block(c.loop(c.br_if(1, c.i32_eq(c.getLocal("j"), c.getLocal("t"))), c.call("frm_mul", c.getLocal("pState"), c.getLocal("pM"), c.i32_const(pAux)), c.call("frm_add", c.i32_const(pAux), c.getLocal("pStateAux"), c.getLocal("pStateAux")), c.setLocal("pM", c.i32_add(c.getLocal("pM"), c.i32_const(32))), c.setLocal("pState", c.i32_add(c.getLocal("pState"), c.i32_const(32))), c.setLocal("j", c.i32_add(c.getLocal("j"), c.i32_const(1))), c.br(0))), c.setLocal("pStateAux", c.i32_add(c.getLocal("pStateAux"), c.i32_const(32))), c.setLocal("i", c.i32_add(c.getLocal("i"), c.i32_const(1))), c.br(0))), c.setLocal("pStateAux", c.i32_const(pStateAux)), c.setLocal("pState", c.i32_const(pState)), c.setLocal("i", c.i32_const(0)), c.block(c.loop(c.br_if(1, c.i32_eq(c.getLocal("i"), c.getLocal("t"))), c.call("frm_copy", c.getLocal("pStateAux"), c.getLocal("pState")), c.setLocal("pState", c.i32_add(c.getLocal("pState"), c.i32_const(32))), c.setLocal("pStateAux", c.i32_add(c.getLocal("pStateAux"), c.i32_const(32))), c.setLocal("i", c.i32_add(c.getLocal("i"), c.i32_const(1))), c.br(0))));
    }
    function buildApplySMatrix() {
        const f = module.addFunction("poseidon_applySMatrix");
        f.addParam("t", "i32");
        f.addParam("pS", "i32");
        f.setReturnType("i32");
        f.addLocal("i", "i32");
        f.addLocal("pState", "i32");
        const c = f.getCodeBuilder();
        const pS0 = module.alloc(32);
        const pAux = module.alloc(32);
        f.addCode(c.call("frm_zero", c.i32_const(pS0)), c.setLocal("pState", c.i32_const(pState)), c.setLocal("i", c.i32_const(0)), c.block(c.loop(c.br_if(1, c.i32_eq(c.getLocal("i"), c.getLocal("t"))), c.call("frm_mul", c.getLocal("pState"), c.getLocal("pS"), c.i32_const(pAux)), c.call("frm_add", c.i32_const(pS0), c.i32_const(pAux), c.i32_const(pS0)), c.setLocal("pS", c.i32_add(c.getLocal("pS"), c.i32_const(32))), c.setLocal("pState", c.i32_add(c.getLocal("pState"), c.i32_const(32))), c.setLocal("i", c.i32_add(c.getLocal("i"), c.i32_const(1))), c.br(0))), c.setLocal("pState", c.i32_const(pState + 32)), c.setLocal("i", c.i32_const(1)), c.block(c.loop(c.br_if(1, c.i32_eq(c.getLocal("i"), c.getLocal("t"))), c.call("frm_mul", c.i32_const(pState), c.getLocal("pS"), c.i32_const(pAux)), c.call("frm_add", c.getLocal("pState"), c.i32_const(pAux), c.getLocal("pState")), c.setLocal("pS", c.i32_add(c.getLocal("pS"), c.i32_const(32))), c.setLocal("pState", c.i32_add(c.getLocal("pState"), c.i32_const(32))), c.setLocal("i", c.i32_add(c.getLocal("i"), c.i32_const(1))), c.br(0))), c.call("frm_copy", c.i32_const(pS0), c.i32_const(pState)), c.ret(c.getLocal("pS")));
    }
    function buildPoseidon() {
        const f = module.addFunction("poseidon");
        f.addParam("pInitState", "i32");
        f.addParam("pIn", "i32");
        f.addParam("n", "i32");
        f.addParam("pOut", "i32");
        f.addParam("nOut", "i32");
        f.addLocal("pC", "i32");
        f.addLocal("pS", "i32");
        f.addLocal("pM", "i32");
        f.addLocal("pP", "i32");
        f.addLocal("t", "i32");
        f.addLocal("i", "i32");
        f.addLocal("nRoundsP", "i32");
        f.addLocal("pAux", "i32");
        const c = f.getCodeBuilder();
        f.addCode(c.setLocal("t", c.i32_add(c.getLocal("n"), c.i32_const(1))), c.setLocal("pAux", c.i32_add(c.i32_const(pConstants), c.i32_mul(c.i32_sub(c.getLocal("n"), c.i32_const(1)), c.i32_const(20)))), c.setLocal("nRoundsP", c.i32_load(c.getLocal("pAux"))), c.setLocal("pC", c.i32_load(c.i32_add(c.getLocal("pAux"), c.i32_const(4)))), c.setLocal("pS", c.i32_load(c.i32_add(c.getLocal("pAux"), c.i32_const(8)))), c.setLocal("pM", c.i32_load(c.i32_add(c.getLocal("pAux"), c.i32_const(12)))), c.setLocal("pP", c.i32_load(c.i32_add(c.getLocal("pAux"), c.i32_const(16)))), // Initialize state
        c.call("frm_zero", c.i32_const(pState)), c.call("frm_copy", c.getLocal("pInitState"), c.i32_const(pState)), c.setLocal("i", c.i32_const(1)), c.block(c.loop(c.call("frm_copy", c.i32_add(c.getLocal("pIn"), c.i32_mul(c.i32_sub(c.getLocal("i"), c.i32_const(1)), c.i32_const(32))), c.i32_add(c.i32_const(pState), c.i32_mul(c.getLocal("i"), c.i32_const(32)))), c.br_if(1, c.i32_eq(c.getLocal("i"), c.getLocal("n"))), c.setLocal("i", c.i32_add(c.getLocal("i"), c.i32_const(1))), c.br(0))), // Initialize state
        c.setLocal("pC", c.call("poseidon_addConstant", c.getLocal("t"), c.getLocal("pC"))), // First full rounds
        c.setLocal("i", c.i32_const(0)), c.block(c.loop(c.br_if(1, c.i32_eq(c.getLocal("i"), c.i32_const(3))), c.call("poseidon_power5all", c.getLocal("t")), c.setLocal("pC", c.call("poseidon_addConstant", c.getLocal("t"), c.getLocal("pC"))), c.call("poseidon_applyMatrix", c.getLocal("t"), c.getLocal("pM")), c.setLocal("i", c.i32_add(c.getLocal("i"), c.i32_const(1))), c.br(0))), c.call("poseidon_power5all", c.getLocal("t")), c.setLocal("pC", c.call("poseidon_addConstant", c.getLocal("t"), c.getLocal("pC"))), c.call("poseidon_applyMatrix", c.getLocal("t"), c.getLocal("pP")), c.setLocal("i", c.i32_const(0)), c.block(c.loop(c.br_if(1, c.i32_eq(c.getLocal("i"), c.getLocal("nRoundsP"))), c.call("poseidon_power5", c.i32_const(pState)), c.call("frm_add", c.i32_const(pState), c.getLocal("pC"), c.i32_const(pState)), c.setLocal("pC", c.i32_add(c.getLocal("pC"), c.i32_const(32))), c.setLocal("pS", c.call("poseidon_applySMatrix", c.getLocal("t"), c.getLocal("pS"))), c.setLocal("i", c.i32_add(c.getLocal("i"), c.i32_const(1))), c.br(0))), c.setLocal("i", c.i32_const(0)), c.block(c.loop(c.br_if(1, c.i32_eq(c.getLocal("i"), c.i32_const(3))), c.call("poseidon_power5all", c.getLocal("t")), c.setLocal("pC", c.call("poseidon_addConstant", c.getLocal("t"), c.getLocal("pC"))), c.call("poseidon_applyMatrix", c.getLocal("t"), c.getLocal("pM")), c.setLocal("i", c.i32_add(c.getLocal("i"), c.i32_const(1))), c.br(0))), c.call("poseidon_power5all", c.getLocal("t")), c.call("poseidon_applyMatrix", c.getLocal("t"), c.getLocal("pM")), c.setLocal("i", c.i32_const(0)), c.block(c.loop(c.br_if(1, c.i32_eq(c.getLocal("i"), c.getLocal("nOut"))), c.call("frm_copy", c.i32_add(c.i32_const(pState), c.i32_mul(c.getLocal("i"), c.i32_const(32))), c.i32_add(c.getLocal("pOut"), c.i32_mul(c.getLocal("i"), c.i32_const(32)))), c.setLocal("i", c.i32_add(c.getLocal("i"), c.i32_const(1))), c.br(0))));
    }
    buildAddConstant();
    buildPower5();
    buildPower5all();
    buildApplyMatrix();
    buildApplySMatrix();
    buildPoseidon();
    module.exportFunction("poseidon");
}
}),
"[project]/rayls-shield-landing-page/node_modules/circomlibjs/src/mimcsponge.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>buildMimcSponge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/ffjavascript/build/browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/circomlibjs/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
;
;
const SEED = "mimcsponge";
const NROUNDS = 220;
async function buildMimcSponge() {
    const bn128 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurveFromName"])("bn128", true);
    return new MimcSponge(bn128.Fr);
}
class MimcSponge {
    constructor(F){
        this.F = F;
        this.cts = this.getConstants(SEED, NROUNDS);
    }
    getIV(seed) {
        const F = this.F;
        if (typeof seed === "undefined") seed = SEED;
        const c = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].utils.keccak256(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].utils.toUtf8Bytes(seed + "_iv"));
        const cn = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].e(c);
        const iv = cn.mod(F.p);
        return iv;
    }
    getConstants(seed, nRounds) {
        const F = this.F;
        if (typeof seed === "undefined") seed = SEED;
        if (typeof nRounds === "undefined") nRounds = NROUNDS;
        const cts = new Array(nRounds);
        let c = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].utils.keccak256(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].utils.toUtf8Bytes(SEED));
        ;
        for(let i = 1; i < nRounds; i++){
            c = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].utils.keccak256(c);
            cts[i] = F.e(c);
        }
        cts[0] = F.e(0);
        cts[cts.length - 1] = F.e(0);
        return cts;
    }
    hash(_xL_in, _xR_in, _k) {
        const F = this.F;
        let xL = F.e(_xL_in);
        let xR = F.e(_xR_in);
        const k = F.e(_k);
        for(let i = 0; i < NROUNDS; i++){
            const c = this.cts[i];
            const t = i == 0 ? F.add(xL, k) : F.add(F.add(xL, k), c);
            const t2 = F.square(t);
            const t4 = F.square(t2);
            const t5 = F.mul(t4, t);
            const xR_tmp = F.e(xR);
            if (i < NROUNDS - 1) {
                xR = xL;
                xL = F.add(xR_tmp, t5);
            } else {
                xR = F.add(xR_tmp, t5);
            }
        }
        return {
            xL: xL,
            xR: xR
        };
    }
    multiHash(arr, key, numOutputs) {
        const F = this.F;
        if (typeof numOutputs === "undefined") {
            numOutputs = 1;
        }
        if (typeof key === "undefined") {
            key = F.zero;
        }
        let R = F.zero;
        let C = F.zero;
        for(let i = 0; i < arr.length; i++){
            R = F.add(R, F.e(arr[i]));
            const S = this.hash(R, C, key);
            R = S.xL;
            C = S.xR;
        }
        let outputs = [
            R
        ];
        for(let i = 1; i < numOutputs; i++){
            const S = this.hash(R, C, key);
            R = S.xL;
            C = S.xR;
            outputs.push(R);
        }
        if (numOutputs == 1) {
            return outputs[0];
        } else {
            return outputs;
        }
    }
}
}),
"[project]/rayls-shield-landing-page/node_modules/circomlibjs/src/eddsa.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>buildEddsa
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/ffjavascript/build/browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$src$2f$babyjub$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/circomlibjs/src/babyjub.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$src$2f$pedersen_hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/circomlibjs/src/pedersen_hash.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$src$2f$mimc7$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/circomlibjs/src/mimc7.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$src$2f$poseidon_wasm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/circomlibjs/src/poseidon_wasm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$src$2f$mimcsponge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/circomlibjs/src/mimcsponge.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$blake$2d$hash$2f$js$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/blake-hash/js.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
async function buildEddsa() {
    const babyJub = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$src$2f$babyjub$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("bn128");
    const pedersenHash = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$src$2f$pedersen_hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const mimc7 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$src$2f$mimc7$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const poseidon = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$src$2f$poseidon_wasm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildPoseidon"])();
    const mimcSponge = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$src$2f$mimcsponge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    return new Eddsa(babyJub, pedersenHash, mimc7, poseidon, mimcSponge);
}
class Eddsa {
    constructor(babyJub, pedersenHash, mimc7, poseidon, mimcSponge){
        this.babyJub = babyJub;
        this.pedersenHash = pedersenHash;
        this.mimc7 = mimc7;
        this.poseidon = poseidon;
        this.mimcSponge = mimcSponge;
        this.F = babyJub.F;
    }
    pruneBuffer(buff) {
        buff[0] = buff[0] & 0xF8;
        buff[31] = buff[31] & 0x7F;
        buff[31] = buff[31] | 0x40;
        return buff;
    }
    prv2pub(prv) {
        const F = this.babyJub.F;
        const sBuff = this.pruneBuffer((0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$blake$2d$hash$2f$js$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("blake512").update(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(prv)).digest());
        let s = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].fromRprLE(sBuff, 0, 32);
        const A = this.babyJub.mulPointEscalar(this.babyJub.Base8, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].shr(s, 3));
        return A;
    }
    signPedersen(prv, msg) {
        const F = this.babyJub.F;
        const sBuff = this.pruneBuffer((0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$blake$2d$hash$2f$js$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("blake512").update(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(prv)).digest());
        const s = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].fromRprLE(sBuff, 0, 32);
        const A = this.babyJub.mulPointEscalar(this.babyJub.Base8, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].shr(s, 3));
        const composeBuff = new Uint8Array(32 + msg.length);
        composeBuff.set(sBuff.slice(32), 0);
        composeBuff.set(msg, 32);
        const rBuff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$blake$2d$hash$2f$js$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("blake512").update(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(composeBuff)).digest();
        let r = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].mod(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].fromRprLE(rBuff, 0, 64), this.babyJub.subOrder);
        const R8 = this.babyJub.mulPointEscalar(this.babyJub.Base8, r);
        const R8p = this.babyJub.packPoint(R8);
        const Ap = this.babyJub.packPoint(A);
        const composeBuff2 = new Uint8Array(64 + msg.length);
        composeBuff2.set(R8p, 0);
        composeBuff2.set(Ap, 32);
        composeBuff2.set(msg, 64);
        const hmBuff = this.pedersenHash.hash(composeBuff2);
        const hm = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].fromRprLE(hmBuff, 0, 32);
        const S = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].mod(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].add(r, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].mul(hm, s)), this.babyJub.subOrder);
        return {
            R8: R8,
            S: S
        };
    }
    signMiMC(prv, msg) {
        const F = this.babyJub.F;
        const sBuff = this.pruneBuffer((0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$blake$2d$hash$2f$js$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("blake512").update(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(prv)).digest());
        const s = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].fromRprLE(sBuff, 0, 32);
        const A = this.babyJub.mulPointEscalar(this.babyJub.Base8, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].shr(s, 3));
        const composeBuff = new Uint8Array(32 + msg.length);
        composeBuff.set(sBuff.slice(32), 0);
        F.toRprLE(composeBuff, 32, msg);
        const rBuff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$blake$2d$hash$2f$js$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("blake512").update(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(composeBuff)).digest();
        let r = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].mod(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].fromRprLE(rBuff, 0, 64), this.babyJub.subOrder);
        const R8 = this.babyJub.mulPointEscalar(this.babyJub.Base8, r);
        const hm = this.mimc7.multiHash([
            R8[0],
            R8[1],
            A[0],
            A[1],
            msg
        ]);
        const hms = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].e(this.babyJub.F.toObject(hm));
        const S = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].mod(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].add(r, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].mul(hms, s)), this.babyJub.subOrder);
        return {
            R8: R8,
            S: S
        };
    }
    signMiMCSponge(prv, msg) {
        const F = this.babyJub.F;
        const sBuff = this.pruneBuffer((0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$blake$2d$hash$2f$js$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("blake512").update(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(prv)).digest());
        const s = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].fromRprLE(sBuff, 0, 32);
        const A = this.babyJub.mulPointEscalar(this.babyJub.Base8, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].shr(s, 3));
        const composeBuff = new Uint8Array(32 + msg.length);
        composeBuff.set(sBuff.slice(32), 0);
        F.toRprLE(composeBuff, 32, msg);
        const rBuff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$blake$2d$hash$2f$js$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("blake512").update(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(composeBuff)).digest();
        let r = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].mod(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].fromRprLE(rBuff, 0, 64), this.babyJub.subOrder);
        const R8 = this.babyJub.mulPointEscalar(this.babyJub.Base8, r);
        const hm = this.mimcSponge.multiHash([
            R8[0],
            R8[1],
            A[0],
            A[1],
            msg
        ]);
        const hms = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].e(this.babyJub.F.toObject(hm));
        const S = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].mod(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].add(r, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].mul(hms, s)), this.babyJub.subOrder);
        return {
            R8: R8,
            S: S
        };
    }
    signPoseidon(prv, msg) {
        const F = this.babyJub.F;
        const sBuff = this.pruneBuffer((0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$blake$2d$hash$2f$js$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("blake512").update(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(prv)).digest());
        const s = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].fromRprLE(sBuff, 0, 32);
        const A = this.babyJub.mulPointEscalar(this.babyJub.Base8, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].shr(s, 3));
        const composeBuff = new Uint8Array(32 + msg.length);
        composeBuff.set(sBuff.slice(32), 0);
        F.toRprLE(composeBuff, 32, msg);
        const rBuff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$blake$2d$hash$2f$js$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("blake512").update(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(composeBuff)).digest();
        let r = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].mod(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].fromRprLE(rBuff, 0, 64), this.babyJub.subOrder);
        const R8 = this.babyJub.mulPointEscalar(this.babyJub.Base8, r);
        const hm = this.poseidon([
            R8[0],
            R8[1],
            A[0],
            A[1],
            msg
        ]);
        const hms = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].e(this.babyJub.F.toObject(hm));
        const S = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].mod(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].add(r, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].mul(hms, s)), this.babyJub.subOrder);
        return {
            R8: R8,
            S: S
        };
    }
    verifyPedersen(msg, sig, A) {
        // Check parameters
        if (typeof sig != "object") return false;
        if (!Array.isArray(sig.R8)) return false;
        if (sig.R8.length != 2) return false;
        if (!this.babyJub.inCurve(sig.R8)) return false;
        if (!Array.isArray(A)) return false;
        if (A.length != 2) return false;
        if (!this.babyJub.inCurve(A)) return false;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].geq(sig.S, this.babyJub.subOrder)) return false;
        const R8p = this.babyJub.packPoint(sig.R8);
        const Ap = this.babyJub.packPoint(A);
        const composeBuff2 = new Uint8Array(64 + msg.length);
        composeBuff2.set(R8p, 0);
        composeBuff2.set(Ap, 32);
        composeBuff2.set(msg, 64);
        const hmBuff = this.pedersenHash.hash(composeBuff2);
        const hm = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].fromRprLE(hmBuff, 0, 32);
        const Pleft = this.babyJub.mulPointEscalar(this.babyJub.Base8, sig.S);
        let Pright = this.babyJub.mulPointEscalar(A, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].mul(hm, 8));
        Pright = this.babyJub.addPoint(sig.R8, Pright);
        if (!this.babyJub.F.eq(Pleft[0], Pright[0])) return false;
        if (!this.babyJub.F.eq(Pleft[1], Pright[1])) return false;
        return true;
    }
    verifyMiMC(msg, sig, A) {
        // Check parameters
        if (typeof sig != "object") return false;
        if (!Array.isArray(sig.R8)) return false;
        if (sig.R8.length != 2) return false;
        if (!this.babyJub.inCurve(sig.R8)) return false;
        if (!Array.isArray(A)) return false;
        if (A.length != 2) return false;
        if (!this.babyJub.inCurve(A)) return false;
        if (sig.S >= this.babyJub.subOrder) return false;
        const hm = this.mimc7.multiHash([
            sig.R8[0],
            sig.R8[1],
            A[0],
            A[1],
            msg
        ]);
        const hms = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].e(this.babyJub.F.toObject(hm));
        const Pleft = this.babyJub.mulPointEscalar(this.babyJub.Base8, sig.S);
        let Pright = this.babyJub.mulPointEscalar(A, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].mul(hms, 8));
        Pright = this.babyJub.addPoint(sig.R8, Pright);
        if (!this.babyJub.F.eq(Pleft[0], Pright[0])) return false;
        if (!this.babyJub.F.eq(Pleft[1], Pright[1])) return false;
        return true;
    }
    verifyPoseidon(msg, sig, A) {
        // Check parameters
        if (typeof sig != "object") return false;
        if (!Array.isArray(sig.R8)) return false;
        if (sig.R8.length != 2) return false;
        if (!this.babyJub.inCurve(sig.R8)) return false;
        if (!Array.isArray(A)) return false;
        if (A.length != 2) return false;
        if (!this.babyJub.inCurve(A)) return false;
        if (sig.S >= this.babyJub.subOrder) return false;
        const hm = this.poseidon([
            sig.R8[0],
            sig.R8[1],
            A[0],
            A[1],
            msg
        ]);
        const hms = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].e(this.babyJub.F.toObject(hm));
        const Pleft = this.babyJub.mulPointEscalar(this.babyJub.Base8, sig.S);
        let Pright = this.babyJub.mulPointEscalar(A, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].mul(hms, 8));
        Pright = this.babyJub.addPoint(sig.R8, Pright);
        if (!this.babyJub.F.eq(Pleft[0], Pright[0])) return false;
        if (!this.babyJub.F.eq(Pleft[1], Pright[1])) return false;
        return true;
    }
    verifyMiMCSponge(msg, sig, A) {
        // Check parameters
        if (typeof sig != "object") return false;
        if (!Array.isArray(sig.R8)) return false;
        if (sig.R8.length != 2) return false;
        if (!this.babyJub.inCurve(sig.R8)) return false;
        if (!Array.isArray(A)) return false;
        if (A.length != 2) return false;
        if (!this.babyJub.inCurve(A)) return false;
        if (sig.S >= this.babyJub.subOrder) return false;
        const hm = this.mimcSponge.multiHash([
            sig.R8[0],
            sig.R8[1],
            A[0],
            A[1],
            msg
        ]);
        const hms = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].e(this.babyJub.F.toObject(hm));
        const Pleft = this.babyJub.mulPointEscalar(this.babyJub.Base8, sig.S);
        let Pright = this.babyJub.mulPointEscalar(A, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].mul(hms, 8));
        Pright = this.babyJub.addPoint(sig.R8, Pright);
        if (!this.babyJub.F.eq(Pleft[0], Pright[0])) return false;
        if (!this.babyJub.F.eq(Pleft[1], Pright[1])) return false;
        return true;
    }
    packSignature(sig) {
        const buff = new Uint8Array(64);
        const R8p = this.babyJub.packPoint(sig.R8);
        buff.set(R8p, 0);
        const Sp = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].toRprLE(buff, 32, sig.S, 32);
        return buff;
    }
    unpackSignature(sigBuff) {
        return {
            R8: this.babyJub.unpackPoint(sigBuff.slice(0, 32)),
            S: __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].fromRprLE(sigBuff, 32, 32)
        };
    }
}
}),
"[project]/rayls-shield-landing-page/node_modules/circomlibjs/src/evmasm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Copyright (c) 2018 Jordi Baylina
// License: LGPL-3.0+
//
__turbopack_context__.s([
    "default",
    ()=>Contract
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/circomlibjs/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/ffjavascript/build/browser.esm.js [app-client] (ecmascript)");
;
;
class Contract {
    constructor(){
        this.code = [];
        this.labels = {};
        this.pendingLabels = {};
    }
    createTxData() {
        let C;
        // Check all labels are defined
        const pendingLabels = Object.keys(this.pendingLabels);
        if (pendingLabels.length > 0) {
            throw new Error("Lables not defined: " + pendingLabels.join(", "));
        }
        let setLoaderLength = 0;
        let genLoadedLength = -1;
        while(genLoadedLength != setLoaderLength){
            setLoaderLength = genLoadedLength;
            C = new Contract();
            C.codesize();
            C.push(setLoaderLength);
            C.push(0);
            C.codecopy();
            C.push(this.code.length);
            C.push(0);
            C.return();
            genLoadedLength = C.code.length;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].utils.hexlify(C.code.concat(this.code));
    }
    stop() {
        this.code.push(0x00);
    }
    add() {
        this.code.push(0x01);
    }
    mul() {
        this.code.push(0x02);
    }
    sub() {
        this.code.push(0x03);
    }
    div() {
        this.code.push(0x04);
    }
    sdiv() {
        this.code.push(0x05);
    }
    mod() {
        this.code.push(0x06);
    }
    smod() {
        this.code.push(0x07);
    }
    addmod() {
        this.code.push(0x08);
    }
    mulmod() {
        this.code.push(0x09);
    }
    exp() {
        this.code.push(0x0a);
    }
    signextend() {
        this.code.push(0x0b);
    }
    lt() {
        this.code.push(0x10);
    }
    gt() {
        this.code.push(0x11);
    }
    slt() {
        this.code.push(0x12);
    }
    sgt() {
        this.code.push(0x13);
    }
    eq() {
        this.code.push(0x14);
    }
    iszero() {
        this.code.push(0x15);
    }
    and() {
        this.code.push(0x16);
    }
    or() {
        this.code.push(0x17);
    }
    shor() {
        this.code.push(0x18);
    }
    not() {
        this.code.push(0x19);
    }
    byte() {
        this.code.push(0x1a);
    }
    keccak() {
        this.code.push(0x20);
    }
    sha3() {
        this.code.push(0x20);
    }
    address() {
        this.code.push(0x30);
    }
    balance() {
        this.code.push(0x31);
    }
    origin() {
        this.code.push(0x32);
    }
    caller() {
        this.code.push(0x33);
    }
    callvalue() {
        this.code.push(0x34);
    }
    calldataload() {
        this.code.push(0x35);
    }
    calldatasize() {
        this.code.push(0x36);
    }
    calldatacopy() {
        this.code.push(0x37);
    }
    codesize() {
        this.code.push(0x38);
    }
    codecopy() {
        this.code.push(0x39);
    }
    gasprice() {
        this.code.push(0x3a);
    }
    extcodesize() {
        this.code.push(0x3b);
    }
    extcodecopy() {
        this.code.push(0x3c);
    }
    returndatasize() {
        this.code.push(0x3d);
    }
    returndatacopy() {
        this.code.push(0x3e);
    }
    blockhash() {
        this.code.push(0x40);
    }
    coinbase() {
        this.code.push(0x41);
    }
    timestamp() {
        this.code.push(0x42);
    }
    number() {
        this.code.push(0x43);
    }
    difficulty() {
        this.code.push(0x44);
    }
    gaslimit() {
        this.code.push(0x45);
    }
    pop() {
        this.code.push(0x50);
    }
    mload() {
        this.code.push(0x51);
    }
    mstore() {
        this.code.push(0x52);
    }
    mstore8() {
        this.code.push(0x53);
    }
    sload() {
        this.code.push(0x54);
    }
    sstore() {
        this.code.push(0x55);
    }
    _pushLabel(label) {
        if (typeof this.labels[label] != "undefined") {
            this.push(this.labels[label]);
        } else {
            this.pendingLabels[label] = this.pendingLabels[label] || [];
            this.pendingLabels[label].push(this.code.length);
            this.push("0x000000");
        }
    }
    _fillLabel(label) {
        if (!this.pendingLabels[label]) return;
        let dst = this.labels[label];
        const dst3 = [
            dst >> 16,
            dst >> 8 & 0xFF,
            dst & 0xFF
        ];
        this.pendingLabels[label].forEach((p)=>{
            for(let i = 0; i < 3; i++){
                this.code[p + i + 1] = dst3[i];
            }
        });
        delete this.pendingLabels[label];
    }
    jmp(label) {
        if (typeof label !== "undefined") {
            this._pushLabel(label);
        }
        this.code.push(0x56);
    }
    jmpi(label) {
        if (typeof label !== "undefined") {
            this._pushLabel(label);
        }
        this.code.push(0x57);
    }
    pc() {
        this.code.push(0x58);
    }
    msize() {
        this.code.push(0x59);
    }
    gas() {
        this.code.push(0x5a);
    }
    label(name) {
        if (typeof this.labels[name] != "undefined") {
            throw new Error("Label already defined");
        }
        this.labels[name] = this.code.length;
        this.code.push(0x5b);
        this._fillLabel(name);
    }
    push(data) {
        if (typeof data !== "string" || data.slice(0, 2) != "0x") {
            let v = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].e(data);
            if (__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].isNegative(v)) {
                v = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].add(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].shl(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].e(1), 256), v);
            }
            let S = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].toString(v, 16);
            if (S.length % 2) S = "0" + S;
            S = "0x" + S;
            data = S;
        }
        const d = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].utils.arrayify(data);
        if (d.length == 0 || d.length > 32) {
            throw new Error("Assertion failed");
        }
        const a = [];
        this.code.push(0x5F + d.length);
        for(let i = 0; i < d.length; i++){
            this.code.push(d[i]);
        }
    }
    dup(n) {
        if (n < 0 || n >= 16) {
            throw new Error("Assertion failed");
        }
        this.code.push(0x80 + n);
    }
    swap(n) {
        if (n < 1 || n > 16) {
            throw new Error("Assertion failed");
        }
        this.code.push(0x8f + n);
    }
    log0() {
        this.code.push(0xa0);
    }
    log1() {
        this.code.push(0xa1);
    }
    log2() {
        this.code.push(0xa2);
    }
    log3() {
        this.code.push(0xa3);
    }
    log4() {
        this.code.push(0xa4);
    }
    create() {
        this.code.push(0xf0);
    }
    call() {
        this.code.push(0xf1);
    }
    callcode() {
        this.code.push(0xf2);
    }
    return() {
        this.code.push(0xf3);
    }
    delegatecall() {
        this.code.push(0xf4);
    }
    staticcall() {
        this.code.push(0xfa);
    }
    revert() {
        this.code.push(0xfd);
    }
    invalid() {
        this.code.push(0xfe);
    }
    selfdestruct() {
        this.code.push(0xff);
    }
}
}),
"[project]/rayls-shield-landing-page/node_modules/circomlibjs/src/mimc7_gencontract.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Copyright (c) 2018 Jordi Baylina
// License: LGPL-3.0+
//
__turbopack_context__.s([
    "abi",
    ()=>abi,
    "createCode",
    ()=>createCode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/circomlibjs/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$src$2f$evmasm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/circomlibjs/src/evmasm.js [app-client] (ecmascript)");
;
;
function createCode(seed, n) {
    let ci = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].utils.keccak256(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].utils.toUtf8Bytes(seed));
    ;
    const C = new __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$src$2f$evmasm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
    C.push(0x44);
    C.push("0x00");
    C.push("0x00");
    C.calldatacopy();
    C.push("0x0100000000000000000000000000000000000000000000000000000000");
    C.push("0x00");
    C.mload();
    C.div();
    C.push("0xd15ca109"); // MiMCpe7(uint256,uint256)
    //    C.push("0x8c42199e"); // MiMCpe7(uint256,uint256,uint256)
    C.eq();
    C.jmpi("start");
    C.invalid();
    C.label("start");
    C.push("0x30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001"); // q
    C.push("0x24");
    C.mload(); // k q
    C.dup(1); // q k q
    C.dup(0); // q q k q
    C.push("0x04");
    C.mload(); // x q q k q
    C.dup(3); // k x q q k q
    C.addmod(); // t=x+k q k q
    C.dup(1); // q t q k q
    C.dup(0); // q q t q k q
    C.dup(2); // t q q t q k q
    C.dup(0); // t t q q t q k q
    C.mulmod(); // a=t^2 q t q k q
    C.dup(1); // q a q t q k q
    C.dup(1); // a q a q t q k q
    C.dup(0); // a a q a q t q k q
    C.mulmod(); // b=t^4 a q t q k q
    C.mulmod(); // c=t^6 t q k q
    C.mulmod(); // r=t^7 k q
    for(let i = 0; i < n - 1; i++){
        ci = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].utils.keccak256(ci);
        C.dup(2); // q r k q
        C.dup(0); // q q r k q
        C.dup(0); // q q q r k q
        C.swap(3); // r q q q k q
        C.push(ci); // c r q q k q
        C.addmod(); // s=c+r q q k q
        C.dup(3); // k s q q k q
        C.addmod(); // t=s+k q k q
        C.dup(1); // q t q k q
        C.dup(0); // q q t q k q
        C.dup(2); // t q q t q k q
        C.dup(0); // t t q q t q k q
        C.mulmod(); // a=t^2 q t q k q
        C.dup(1); // q a q t q k q
        C.dup(1); // a q a q t q k q
        C.dup(0); // a a q a q t q k q
        C.mulmod(); // b=t^4 a q t q k q
        C.mulmod(); // c=t^6 t q k q
        C.mulmod(); // r=t^7 k q
    }
    C.addmod(); // res=t^7+k
    C.push("0x00");
    C.mstore(); // Save it to pos 0;
    C.push("0x20");
    C.push("0x00");
    C.return();
    return C.createTxData();
}
const abi = [
    {
        "constant": true,
        "inputs": [
            {
                "name": "in_x",
                "type": "uint256"
            },
            {
                "name": "in_k",
                "type": "uint256"
            }
        ],
        "name": "MiMCpe7",
        "outputs": [
            {
                "name": "out_x",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "pure",
        "type": "function"
    }
];
}),
"[project]/rayls-shield-landing-page/node_modules/circomlibjs/src/mimcsponge_gencontract.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Copyright (c) 2018 Jordi Baylina
// License: LGPL-3.0+
//
__turbopack_context__.s([
    "abi",
    ()=>abi,
    "createCode",
    ()=>createCode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/circomlibjs/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$src$2f$evmasm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/circomlibjs/src/evmasm.js [app-client] (ecmascript)");
;
;
function createCode(seed, n) {
    let ci = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].utils.keccak256(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].utils.toUtf8Bytes(seed));
    const C = new __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$src$2f$evmasm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
    C.push(0x64);
    C.push("0x00");
    C.push("0x00");
    C.calldatacopy();
    C.push("0x0100000000000000000000000000000000000000000000000000000000");
    C.push("0x00");
    C.mload();
    C.div();
    C.push("0x3f1a1187"); // MiMCSponge(uint256,uint256,uint256)
    C.eq();
    C.jmpi("start");
    C.invalid();
    C.label("start");
    C.push("0x30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001"); // q
    C.push("0x44");
    C.mload(); // k q
    C.push("0x04");
    C.mload(); // xL k q
    C.dup(2); // q xL k q
    C.push("0x24");
    C.mload(); // xR q xL k q
    C.dup(1); // q xR q xL k q
    C.dup(0); // q q xR q xL k q
    C.dup(4); // xL q q xR q xL k q
    C.dup(6); // k xL q q xR q xL k q
    C.addmod(); // t=k+xL q xR q xL k q
    C.dup(1); // q t q xR q xL k q
    C.dup(0); // q q t q xR q xL k q
    C.dup(2); // t q q t q xR q xL k q
    C.dup(0); // t t q q t q xR q xL k q
    C.mulmod(); // b=t^2 q t q xR q xL k q
    C.dup(0); // b b q t q xR q xL k q
    C.mulmod(); // c=t^4 t q xR q xL k q
    C.mulmod(); // d=t^5 xR q xL k q
    C.addmod(); // e=t^5+xR xL k q (for next round: xL xR k q)
    for(let i = 0; i < n - 1; i++){
        if (i < n - 2) {
            ci = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].utils.keccak256(ci);
        } else {
            ci = "0x00";
        }
        C.swap(1); // xR xL k q
        C.dup(3); // q xR xL k q
        C.dup(3); // k q xR xL k q
        C.dup(1); // q k q xR xL k q
        C.dup(4); // xL q k q xR xL k q
        C.push(ci); // ci xL q k q xR xL k q
        C.addmod(); // a=ci+xL k q xR xL k q
        C.addmod(); // t=a+k xR xL k q
        C.dup(4); // q t xR xL k q
        C.swap(1); // t q xR xL k q
        C.dup(1); // q t q xR xL k q
        C.dup(0); // q q t q xR xL k q
        C.dup(2); // t q q t q xR xL k q
        C.dup(0); // t t q q t q xR xL k q
        C.mulmod(); // b=t^2 q t q xR xL k q
        C.dup(0); // b b q t q xR xL k q
        C.mulmod(); // c=t^4 t q xR xL k q
        C.mulmod(); // d=t^5 xR xL k q
        C.dup(4); // q d xR xL k q
        C.swap(2); // xR d q xL k q
        C.addmod(); // e=t^5+xR xL k q (for next round: xL xR k q)
    }
    C.push("0x20");
    C.mstore(); // Save it to pos 0;
    C.push("0x00");
    C.mstore(); // Save it to pos 1;
    C.push("0x40");
    C.push("0x00");
    C.return();
    return C.createTxData();
}
const abi = [
    {
        "constant": true,
        "inputs": [
            {
                "name": "xL_in",
                "type": "uint256"
            },
            {
                "name": "xR_in",
                "type": "uint256"
            },
            {
                "name": "k",
                "type": "uint256"
            }
        ],
        "name": "MiMCSponge",
        "outputs": [
            {
                "name": "xL",
                "type": "uint256"
            },
            {
                "name": "xR",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "pure",
        "type": "function"
    }
];
}),
"[project]/rayls-shield-landing-page/node_modules/circomlibjs/src/poseidon_gencontract.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Copyright (c) 2018 Jordi Baylina
// License: LGPL-3.0+
//
__turbopack_context__.s([
    "createCode",
    ()=>createCode,
    "generateABI",
    ()=>generateABI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$src$2f$evmasm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/circomlibjs/src/evmasm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/ffjavascript/build/browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/circomlibjs/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$src$2f$poseidon_constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/circomlibjs/src/poseidon_constants.js [app-client] (ecmascript)");
;
;
const { unstringifyBigInts } = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"];
;
;
const { C: K, M } = unstringifyBigInts(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$src$2f$poseidon_constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const N_ROUNDS_F = 8;
const N_ROUNDS_P = [
    56,
    57,
    56,
    60,
    60,
    63,
    64,
    63
];
function toHex256(a) {
    let S = a.toString(16);
    while(S.length < 64)S = "0" + S;
    return "0x" + S;
}
function createCode(nInputs) {
    if (nInputs < 1 || nInputs > 8) throw new Error("Invalid number of inputs. Must be 1<=nInputs<=8");
    const t = nInputs + 1;
    const nRoundsF = N_ROUNDS_F;
    const nRoundsP = N_ROUNDS_P[t - 2];
    const C = new __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$src$2f$evmasm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
    function saveM() {
        for(let i = 0; i < t; i++){
            for(let j = 0; j < t; j++){
                C.push(toHex256(M[t - 2][i][j]));
                C.push((1 + i * t + j) * 32);
                C.mstore();
            }
        }
    }
    function ark(r) {
        for(let i = 0; i < t; i++){
            C.dup(t); // q, st, q
            C.push(toHex256(K[t - 2][r * t + i])); // K, q, st, q
            C.dup(2 + i); // st[i], K, q, st, q
            C.addmod(); // newSt[i], st, q
            C.swap(1 + i); // xx, st, q
            C.pop();
        }
    }
    function sigma(p) {
        // sq, q
        C.dup(t); // q, st, q
        C.dup(1 + p); // st[p] , q , st, q
        C.dup(1); // q, st[p] , q , st, q
        C.dup(0); // q, q, st[p] , q , st, q
        C.dup(2); // st[p] , q, q, st[p] , q , st, q
        C.dup(0); // st[p] , st[p] , q, q, st[p] , q , st, q
        C.mulmod(); // st2[p], q, st[p] , q , st, q
        C.dup(0); // st2[p], st2[p], q, st[p] , q , st, q
        C.mulmod(); // st4[p], st[p] , q , st, q
        C.mulmod(); // st5[p], st, q
        C.swap(1 + p);
        C.pop(); // newst, q
    }
    function mix() {
        C.label("mix");
        for(let i = 0; i < t; i++){
            for(let j = 0; j < t; j++){
                if (j == 0) {
                    C.dup(i + t); // q, newSt, oldSt, q
                    C.push((1 + i * t + j) * 32);
                    C.mload(); // M, q, newSt, oldSt, q
                    C.dup(2 + i + j); // oldSt[j], M, q, newSt, oldSt, q
                    C.mulmod(); // acc, newSt, oldSt, q
                } else {
                    C.dup(1 + i + t); // q, acc, newSt, oldSt, q
                    C.push((1 + i * t + j) * 32);
                    C.mload(); // M, q, acc, newSt, oldSt, q
                    C.dup(3 + i + j); // oldSt[j], M, q, acc, newSt, oldSt, q
                    C.mulmod(); // aux, acc, newSt, oldSt, q
                    C.dup(2 + i + t); // q, aux, acc, newSt, oldSt, q
                    C.swap(2); // acc, aux, q, newSt, oldSt, q
                    C.addmod(); // acc, newSt, oldSt, q
                }
            }
        }
        for(let i = 0; i < t; i++){
            C.swap(t - i + (t - i - 1));
            C.pop();
        }
        C.push(0);
        C.mload();
        C.jmp();
    }
    // Check selector
    C.push("0x0100000000000000000000000000000000000000000000000000000000");
    C.push(0);
    C.calldataload();
    C.div();
    C.dup(0);
    C.push(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].utils.keccak256(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].utils.toUtf8Bytes(`poseidon(uint256[${nInputs}])`)).slice(0, 10)); // poseidon(uint256[n])
    C.eq();
    C.swap(1);
    C.push(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].utils.keccak256(__TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].utils.toUtf8Bytes(`poseidon(bytes32[${nInputs}])`)).slice(0, 10)); // poseidon(bytes32[n])
    C.eq();
    C.or();
    C.jmpi("start");
    C.invalid();
    C.label("start");
    saveM();
    C.push("0x30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001"); // q
    // Load t values from the call data.
    // The function has a single array param param
    // [Selector (4)] [item1 (32)] [item2 (32)] ....
    // Stack positions 0-nInputs.
    for(let i = 0; i < nInputs; i++){
        C.push(0x04 + 0x20 * (nInputs - i - 1));
        C.calldataload();
    }
    C.push(0);
    for(let i = 0; i < nRoundsF + nRoundsP; i++){
        ark(i);
        if (i < nRoundsF / 2 || i >= nRoundsP + nRoundsF / 2) {
            for(let j = 0; j < t; j++){
                sigma(j);
            }
        } else {
            sigma(0);
        }
        const strLabel = "aferMix" + i;
        C._pushLabel(strLabel);
        C.push(0);
        C.mstore();
        C.jmp("mix");
        C.label(strLabel);
    }
    C.push("0x00");
    C.mstore(); // Save it to pos 0;
    C.push("0x20");
    C.push("0x00");
    C.return();
    mix();
    return C.createTxData();
}
function generateABI(nInputs) {
    return [
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": `bytes32[${nInputs}]`,
                    "name": "input",
                    "type": `bytes32[${nInputs}]`
                }
            ],
            "name": "poseidon",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "payable": false,
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": `uint256[${nInputs}]`,
                    "name": "input",
                    "type": `uint256[${nInputs}]`
                }
            ],
            "name": "poseidon",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "pure",
            "type": "function"
        }
    ];
}
}),
"[project]/rayls-shield-landing-page/node_modules/circomlibjs/src/poseidon_reference.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>buildPoseidon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$assert$2f$assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/next/dist/compiled/assert/assert.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/ffjavascript/build/browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$src$2f$poseidon_constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/circomlibjs/src/poseidon_constants.js [app-client] (ecmascript)");
;
;
;
function unsringifyConstants(Fr, o) {
    if (typeof o == "string" && /^[0-9]+$/.test(o)) {
        return Fr.e(o);
    } else if (typeof o == "string" && /^0x[0-9a-fA-F]+$/.test(o)) {
        return Fr.e(o);
    } else if (Array.isArray(o)) {
        return o.map(unsringifyConstants.bind(null, Fr));
    } else if (typeof o == "object") {
        if (o === null) return null;
        const res = {};
        const keys = Object.keys(o);
        keys.forEach((k)=>{
            res[k] = unsringifyConstants(Fr, o[k]);
        });
        return res;
    } else {
        return o;
    }
}
async function buildPoseidon() {
    const bn128 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurveFromName"])("bn128", true);
    const F = bn128.Fr;
    // Parameters are generated by a reference script https://extgit.iaik.tugraz.at/krypto/hadeshash/-/blob/master/code/generate_parameters_grain.sage
    // Used like so: sage generate_parameters_grain.sage 1 0 254 2 8 56 0x30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001
    const { C, M } = unsringifyConstants(F, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$src$2f$poseidon_constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    // Using recommended parameters from whitepaper https://eprint.iacr.org/2019/458.pdf (table 2, table 8)
    // Generated by https://extgit.iaik.tugraz.at/krypto/hadeshash/-/blob/master/code/calc_round_numbers.py
    // And rounded up to nearest integer that divides by t
    const N_ROUNDS_F = 8;
    const N_ROUNDS_P = [
        56,
        57,
        56,
        60,
        60,
        63,
        64,
        63,
        60,
        66,
        60,
        65,
        70,
        60,
        64,
        68
    ];
    const pow5 = (a)=>F.mul(a, F.square(F.square(a, a)));
    function poseidon(inputs, initState, nOut) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$assert$2f$assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(inputs.length > 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$assert$2f$assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(inputs.length <= N_ROUNDS_P.length);
        const t = inputs.length + 1;
        const nRoundsF = N_ROUNDS_F;
        const nRoundsP = N_ROUNDS_P[t - 2];
        if (initState) {
            initState = F.e(initState);
        } else {
            initState = F.zero;
        }
        nOut = nOut || 1;
        let state = [
            initState,
            ...inputs.map((a)=>F.e(a))
        ];
        for(let r = 0; r < nRoundsF + nRoundsP; r++){
            state = state.map((a, i)=>F.add(a, C[t - 2][r * t + i]));
            if (r < nRoundsF / 2 || r >= nRoundsF / 2 + nRoundsP) {
                state = state.map((a)=>pow5(a));
            } else {
                state[0] = pow5(state[0]);
            }
            state = state.map((_, i)=>state.reduce((acc, a, j)=>F.add(acc, F.mul(M[t - 2][i][j], a)), F.zero));
        }
        if (nOut == 1) {
            return state[0];
        } else {
            return state.slice(0, nOut);
        }
    }
    poseidon.F = F;
    return poseidon;
}
}),
"[project]/rayls-shield-landing-page/node_modules/circomlibjs/src/poseidon_opt.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Parameters are generated by a reference script https://extgit.iaik.tugraz.at/krypto/hadeshash/-/blob/master/code/generate_parameters_grain.sage
// Used like so: sage generate_parameters_grain.sage 1 0 254 2 8 56 0x30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001
// Using recommended parameters from whitepaper https://eprint.iacr.org/2019/458.pdf (table 2, table 8)
// Generated by https://extgit.iaik.tugraz.at/krypto/hadeshash/-/blob/master/code/calc_round_numbers.py
// And rounded up to nearest integer that divides by t
// Optimization is taken from https://github.com/filecoin-project/neptune
__turbopack_context__.s([
    "default",
    ()=>buildPoseidon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$assert$2f$assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/next/dist/compiled/assert/assert.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/ffjavascript/build/browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$src$2f$poseidon_constants_opt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/circomlibjs/src/poseidon_constants_opt.js [app-client] (ecmascript)");
;
;
;
function unsringifyConstants(Fr, o) {
    if (typeof o == "string" && /^[0-9]+$/.test(o)) {
        return Fr.e(o);
    } else if (typeof o == "string" && /^0x[0-9a-fA-F]+$/.test(o)) {
        return Fr.e(o);
    } else if (Array.isArray(o)) {
        return o.map(unsringifyConstants.bind(null, Fr));
    } else if (typeof o == "object") {
        if (o === null) return null;
        const res = {};
        const keys = Object.keys(o);
        keys.forEach((k)=>{
            res[k] = unsringifyConstants(Fr, o[k]);
        });
        return res;
    } else {
        return o;
    }
}
async function buildPoseidon() {
    const bn128 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurveFromName"])("bn128", true);
    const F = bn128.Fr;
    const opt = unsringifyConstants(F, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$src$2f$poseidon_constants_opt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const N_ROUNDS_F = 8;
    const N_ROUNDS_P = [
        56,
        57,
        56,
        60,
        60,
        63,
        64,
        63,
        60,
        66,
        60,
        65,
        70,
        60,
        64,
        68
    ];
    const pow5 = (a)=>F.mul(a, F.square(F.square(a, a)));
    function poseidon(inputs, initState, nOut) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$assert$2f$assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(inputs.length > 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$assert$2f$assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(inputs.length <= N_ROUNDS_P.length);
        if (initState) {
            initState = F.e(initState);
        } else {
            initState = F.zero;
        }
        nOut = nOut || 1;
        const t = inputs.length + 1;
        const nRoundsF = N_ROUNDS_F;
        const nRoundsP = N_ROUNDS_P[t - 2];
        const C = opt.C[t - 2];
        const S = opt.S[t - 2];
        const M = opt.M[t - 2];
        const P = opt.P[t - 2];
        let state = [
            initState,
            ...inputs.map((a)=>F.e(a))
        ];
        state = state.map((a, i)=>F.add(a, C[i]));
        for(let r = 0; r < nRoundsF / 2 - 1; r++){
            state = state.map((a)=>pow5(a));
            state = state.map((a, i)=>F.add(a, C[(r + 1) * t + i]));
            state = state.map((_, i)=>state.reduce((acc, a, j)=>F.add(acc, F.mul(M[j][i], a)), F.zero));
        }
        state = state.map((a)=>pow5(a));
        state = state.map((a, i)=>F.add(a, C[(nRoundsF / 2 - 1 + 1) * t + i]));
        state = state.map((_, i)=>state.reduce((acc, a, j)=>F.add(acc, F.mul(P[j][i], a)), F.zero));
        for(let r = 0; r < nRoundsP; r++){
            state[0] = pow5(state[0]);
            state[0] = F.add(state[0], C[(nRoundsF / 2 + 1) * t + r]);
            const s0 = state.reduce((acc, a, j)=>{
                return F.add(acc, F.mul(S[(t * 2 - 1) * r + j], a));
            }, F.zero);
            for(let k = 1; k < t; k++){
                state[k] = F.add(state[k], F.mul(state[0], S[(t * 2 - 1) * r + t + k - 1]));
            }
            state[0] = s0;
        }
        for(let r = 0; r < nRoundsF / 2 - 1; r++){
            state = state.map((a)=>pow5(a));
            state = state.map((a, i)=>F.add(a, C[(nRoundsF / 2 + 1) * t + nRoundsP + r * t + i]));
            state = state.map((_, i)=>state.reduce((acc, a, j)=>F.add(acc, F.mul(M[j][i], a)), F.zero));
        }
        state = state.map((a)=>pow5(a));
        state = state.map((_, i)=>state.reduce((acc, a, j)=>F.add(acc, F.mul(M[j][i], a)), F.zero));
        if (nOut == 1) {
            return state[0];
        } else {
            return state.slice(0, nOut);
        }
    }
    poseidon.F = F;
    return poseidon;
}
}),
"[project]/rayls-shield-landing-page/node_modules/circomlibjs/src/smt_memdb.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SMTMemDb
]);
class SMTMemDb {
    constructor(F){
        this.nodes = {};
        this.root = F.zero;
        this.F = F;
    }
    async getRoot() {
        return this.root;
    }
    _key2str(k) {
        const F = this.F;
        const keyS = this.F.toString(k);
        return keyS;
    }
    _normalize(n) {
        const F = this.F;
        for(let i = 0; i < n.length; i++){
            n[i] = this.F.e(n[i]);
        }
    }
    async get(key) {
        const keyS = this._key2str(key);
        return this.nodes[keyS];
    }
    async multiGet(keys) {
        const promises = [];
        for(let i = 0; i < keys.length; i++){
            promises.push(this.get(keys[i]));
        }
        return await Promise.all(promises);
    }
    async setRoot(rt) {
        this.root = rt;
    }
    async multiIns(inserts) {
        for(let i = 0; i < inserts.length; i++){
            const keyS = this._key2str(inserts[i][0]);
            this._normalize(inserts[i][1]);
            this.nodes[keyS] = inserts[i][1];
        }
    }
    async multiDel(dels) {
        for(let i = 0; i < dels.length; i++){
            const keyS = this._key2str(dels[i]);
            delete this.nodes[keyS];
        }
    }
}
}),
"[project]/rayls-shield-landing-page/node_modules/circomlibjs/src/smt_hashes_poseidon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getHashes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$src$2f$poseidon_wasm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/circomlibjs/src/poseidon_wasm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/ffjavascript/build/browser.esm.js [app-client] (ecmascript)");
;
;
async function getHashes() {
    const bn128 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurveFromName"])("bn128", true);
    const poseidon = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$src$2f$poseidon_wasm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildPoseidon"])();
    return {
        hash0: function(left, right) {
            return poseidon([
                left,
                right
            ]);
        },
        hash1: function(key, value) {
            return poseidon([
                key,
                value,
                bn128.Fr.one
            ]);
        },
        F: bn128.Fr
    };
}
}),
"[project]/rayls-shield-landing-page/node_modules/circomlibjs/src/smt.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SMT",
    ()=>SMT,
    "buildSMT",
    ()=>buildSMT,
    "newMemEmptyTrie",
    ()=>newMemEmptyTrie
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/ffjavascript/build/browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$src$2f$smt_memdb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/circomlibjs/src/smt_memdb.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$src$2f$smt_hashes_poseidon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rayls-shield-landing-page/node_modules/circomlibjs/src/smt_hashes_poseidon.js [app-client] (ecmascript)");
;
;
;
async function buildSMT(db, root) {
    const { hash0, hash1, F } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$src$2f$smt_hashes_poseidon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    return new SMT(db, root, hash0, hash1, F);
}
class SMT {
    constructor(db, root, hash0, hash1, F){
        this.db = db;
        this.root = root;
        this.hash0 = hash0;
        this.hash1 = hash1;
        this.F = F;
    }
    _splitBits(_key) {
        const F = this.F;
        const res = __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$ffjavascript$2f$build$2f$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"].bits(F.toObject(_key));
        while(res.length < 256)res.push(false);
        return res;
    }
    async update(_key, _newValue) {
        const F = this.F;
        const key = F.e(_key);
        const newValue = F.e(_newValue);
        const resFind = await this.find(key);
        const res = {};
        res.oldRoot = this.root;
        res.oldKey = key;
        res.oldValue = resFind.foundValue;
        res.newKey = key;
        res.newValue = newValue;
        res.siblings = resFind.siblings;
        const ins = [];
        const dels = [];
        let rtOld = this.hash1(key, resFind.foundValue);
        let rtNew = this.hash1(key, newValue);
        ins.push([
            rtNew,
            [
                1,
                key,
                newValue
            ]
        ]);
        dels.push(rtOld);
        const keyBits = this._splitBits(key);
        for(let level = resFind.siblings.length - 1; level >= 0; level--){
            let oldNode, newNode;
            const sibling = resFind.siblings[level];
            if (keyBits[level]) {
                oldNode = [
                    sibling,
                    rtOld
                ];
                newNode = [
                    sibling,
                    rtNew
                ];
            } else {
                oldNode = [
                    rtOld,
                    sibling
                ];
                newNode = [
                    rtNew,
                    sibling
                ];
            }
            rtOld = this.hash0(oldNode[0], oldNode[1]);
            rtNew = this.hash0(newNode[0], newNode[1]);
            dels.push(rtOld);
            ins.push([
                rtNew,
                newNode
            ]);
        }
        res.newRoot = rtNew;
        await this.db.multiDel(dels);
        await this.db.multiIns(ins);
        await this.db.setRoot(rtNew);
        this.root = rtNew;
        return res;
    }
    async delete(_key) {
        const F = this.F;
        const key = F.e(_key);
        const resFind = await this.find(key);
        if (!resFind.found) throw new Error("Key does not exists");
        const res = {
            siblings: [],
            delKey: key,
            delValue: resFind.foundValue
        };
        const dels = [];
        const ins = [];
        let rtOld = this.hash1(key, resFind.foundValue);
        let rtNew;
        dels.push(rtOld);
        let mixed;
        if (resFind.siblings.length > 0) {
            const record = await this.db.get(resFind.siblings[resFind.siblings.length - 1]);
            if (record.length == 3 && F.eq(record[0], F.one)) {
                mixed = false;
                res.oldKey = record[1];
                res.oldValue = record[2];
                res.isOld0 = false;
                rtNew = resFind.siblings[resFind.siblings.length - 1];
            } else if (record.length == 2) {
                mixed = true;
                res.oldKey = key;
                res.oldValue = F.zero;
                res.isOld0 = true;
                rtNew = F.zero;
            } else {
                throw new Error("Invalid node. Database corrupted");
            }
        } else {
            rtNew = F.zero;
            res.oldKey = key;
            res.oldValue = F.zero;
            res.isOld0 = true;
        }
        const keyBits = this._splitBits(key);
        for(let level = resFind.siblings.length - 1; level >= 0; level--){
            let newSibling = resFind.siblings[level];
            if (level == resFind.siblings.length - 1 && !res.isOld0) {
                newSibling = F.zero;
            }
            const oldSibling = resFind.siblings[level];
            if (keyBits[level]) {
                rtOld = this.hash0(oldSibling, rtOld);
            } else {
                rtOld = this.hash0(rtOld, oldSibling);
            }
            dels.push(rtOld);
            if (!F.isZero(newSibling)) {
                mixed = true;
            }
            if (mixed) {
                res.siblings.unshift(resFind.siblings[level]);
                let newNode;
                if (keyBits[level]) {
                    newNode = [
                        newSibling,
                        rtNew
                    ];
                } else {
                    newNode = [
                        rtNew,
                        newSibling
                    ];
                }
                rtNew = this.hash0(newNode[0], newNode[1]);
                ins.push([
                    rtNew,
                    newNode
                ]);
            }
        }
        await this.db.multiIns(ins);
        await this.db.setRoot(rtNew);
        this.root = rtNew;
        await this.db.multiDel(dels);
        res.newRoot = rtNew;
        res.oldRoot = rtOld;
        return res;
    }
    async insert(_key, _value) {
        const F = this.F;
        const key = F.e(_key);
        const value = F.e(_value);
        let addedOne = false;
        const res = {};
        res.oldRoot = this.root;
        const newKeyBits = this._splitBits(key);
        let rtOld;
        const resFind = await this.find(key);
        if (resFind.found) throw new Error("Key already exists");
        res.siblings = resFind.siblings;
        let mixed;
        if (!resFind.isOld0) {
            const oldKeyits = this._splitBits(resFind.notFoundKey);
            for(let i = res.siblings.length; oldKeyits[i] == newKeyBits[i]; i++){
                res.siblings.push(F.zero);
            }
            rtOld = this.hash1(resFind.notFoundKey, resFind.notFoundValue);
            res.siblings.push(rtOld);
            addedOne = true;
            mixed = false;
        } else if (res.siblings.length > 0) {
            mixed = true;
            rtOld = F.zero;
        }
        const inserts = [];
        const dels = [];
        let rt = this.hash1(key, value);
        inserts.push([
            rt,
            [
                1,
                key,
                value
            ]
        ]);
        for(let i = res.siblings.length - 1; i >= 0; i--){
            if (i < res.siblings.length - 1 && !F.isZero(res.siblings[i])) {
                mixed = true;
            }
            if (mixed) {
                const oldSibling = resFind.siblings[i];
                if (newKeyBits[i]) {
                    rtOld = this.hash0(oldSibling, rtOld);
                } else {
                    rtOld = this.hash0(rtOld, oldSibling);
                }
                dels.push(rtOld);
            }
            let newRt;
            if (newKeyBits[i]) {
                newRt = this.hash0(res.siblings[i], rt);
                inserts.push([
                    newRt,
                    [
                        res.siblings[i],
                        rt
                    ]
                ]);
            } else {
                newRt = this.hash0(rt, res.siblings[i]);
                inserts.push([
                    newRt,
                    [
                        rt,
                        res.siblings[i]
                    ]
                ]);
            }
            rt = newRt;
        }
        if (addedOne) res.siblings.pop();
        while(res.siblings.length > 0 && F.isZero(res.siblings[res.siblings.length - 1])){
            res.siblings.pop();
        }
        res.oldKey = resFind.notFoundKey;
        res.oldValue = resFind.notFoundValue;
        res.newRoot = rt;
        res.isOld0 = resFind.isOld0;
        await this.db.multiIns(inserts);
        await this.db.setRoot(rt);
        this.root = rt;
        await this.db.multiDel(dels);
        return res;
    }
    async find(_key) {
        const key = this.F.e(_key);
        const keyBits = this._splitBits(key);
        return await this._find(key, keyBits, this.root, 0);
    }
    async _find(key, keyBits, root, level) {
        const F = this.F;
        if (typeof root === "undefined") root = this.root;
        let res;
        if (F.isZero(root)) {
            res = {
                found: false,
                siblings: [],
                notFoundKey: key,
                notFoundValue: F.zero,
                isOld0: true
            };
            return res;
        }
        const record = await this.db.get(root);
        if (record.length == 3 && F.eq(record[0], F.one)) {
            if (F.eq(record[1], key)) {
                res = {
                    found: true,
                    siblings: [],
                    foundValue: record[2],
                    isOld0: false
                };
            } else {
                res = {
                    found: false,
                    siblings: [],
                    notFoundKey: record[1],
                    notFoundValue: record[2],
                    isOld0: false
                };
            }
        } else {
            if (keyBits[level] == 0) {
                res = await this._find(key, keyBits, record[0], level + 1);
                res.siblings.unshift(record[1]);
            } else {
                res = await this._find(key, keyBits, record[1], level + 1);
                res.siblings.unshift(record[0]);
            }
        }
        return res;
    }
}
async function newMemEmptyTrie() {
    const { hash0, hash1, F } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$src$2f$smt_hashes_poseidon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const db = new __TURBOPACK__imported__module__$5b$project$5d2f$rayls$2d$shield$2d$landing$2d$page$2f$node_modules$2f$circomlibjs$2f$src$2f$smt_memdb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](F);
    const rt = await db.getRoot();
    const smt = new SMT(db, rt, hash0, hash1, F);
    return smt;
}
}),
]);

//# sourceMappingURL=5df0c_circomlibjs_src_d0002030._.js.map