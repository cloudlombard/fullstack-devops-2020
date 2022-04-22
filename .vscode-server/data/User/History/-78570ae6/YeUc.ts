import colorConverter from 'color-convert'
import { TtfCmyk, TtfHsl } from '../../../commons/src/model/Color';

export function convert(color: TtfCmyk): TtfHsl {
    const colorToConvert: TtfCmyk = { cyan: color.cyan, magenta: color.magenta, yellow: color.yellow, black: color.black };
    //const convertedColor = colorConverter.cmyk.hsl([color.cyan, color.magenta, color.yellow, color.black]);
    const convertedColor = colorConverter.cmyk.hsl([colorToConvert[0], colorToConvert[1], colorToConvert[2], colorToConvert[3]]);
    return { hue: convertedColor[0], saturation: convertedColor[1], lightness: convertedColor[2] } as TtfHsl;
}
