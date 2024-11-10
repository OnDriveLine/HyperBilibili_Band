// Wbi签名混淆表
export const mixinKeyEncTab = [
    46, 47, 18, 2, 53, 8, 23, 32, 15, 50, 10, 31,
    58, 3, 45, 35, 27, 43, 5, 49,
    33, 9, 42, 19, 29, 28, 14, 39,
    12, 38, 41, 13, 37, 48, 7, 16,
    24, 55, 40, 61, 26, 17, 0, 1,
    60, 51, 30, 4, 22, 25, 54, 21,
    56, 59, 6, 63, 57, 62, 11, 36,
    20, 34, 44, 52
];

// 对imgKey和subKey进行混淆编码
export const getMixinKey = (orig: string) =>
    mixinKeyEncTab.map(n => orig[n]).join("").slice(0, 32);