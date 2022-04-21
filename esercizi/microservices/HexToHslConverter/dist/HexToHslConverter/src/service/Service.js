"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
const color_convert_1 = __importDefault(require("color-convert"));
function convert(color) {
    const colorToConvert = color;
    const convertedColor = color_convert_1.default.hex.hsl(color.hex);
    return { hue: convertedColor[0], saturation: convertedColor[1], lightness: convertedColor[2] };
}
exports.convert = convert;
//# sourceMappingURL=Service.js.map