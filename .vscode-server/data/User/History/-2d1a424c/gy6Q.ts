import colorConverter from 'color-convert'
import { TtfRgb, TtfCmyk } from '../../../commons/src/model/Color';

export function convert(color: TtfRgb): TtfCmyk {
    const colorToConvert: TtfRgb = { red: color.red, green: color.green, blue: color.blue };
    const convertedColor = colorConverter.rgb.cmyk([colorToConvert["red"], colorToConvert["green"], colorToConvert["blue"]]);
    return { cyan: convertedColor[0], magenta: convertedColor[1], yellow: convertedColor[2], black: convertedColor[3] } as TtfCmyk;
}
