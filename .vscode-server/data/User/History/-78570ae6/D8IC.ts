import colorConverter from 'color-convert'
import { CMYK, HSL } from 'color-convert/conversions';
import { TtfCmyk, TtfHsl } from '../../../commons/src/model/Color';

export function convert(color: TtfCmyk): TtfHsl {
    const colorToConvert: TtfCmyk = [color.cyan, color.magenta, color.yellow, color.black];
    const convertedColor = colorConverter.cmyk.hsl(colorToConvert);
    return { hue: convertedColor[0], saturation: convertedColor[1], lightness: convertedColor[2] } as TtfHsl;
}
