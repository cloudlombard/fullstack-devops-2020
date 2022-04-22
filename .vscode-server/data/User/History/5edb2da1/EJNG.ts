import colorConverter from 'color-convert'
import { RGB, HSL } from 'color-convert/conversions';
import { TtfRgb, TtfHsl } from '../../../commons/src/model/Color';

export function convert(color: TtfRgb): TtfHsl {
    const colorToConvert: TtfRgb = { color.red, color.green, color.blue };
    const convertedColor = colorConverter.rgb.hsl(colorToConvert);
    return { hue: convertedColor[0], saturation: convertedColor[1], lightness: convertedColor[2] } as TtfHsl;
}
