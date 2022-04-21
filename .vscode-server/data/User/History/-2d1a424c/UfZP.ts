import colorConverter from 'color-convert'
import { Cmyk } from 'color-convert/conversions';
import { TtfRgb, TtfCmyk } from '../../../commons/src/model/Color';

export function convert(color: TtfRgb): TtfCmyk {
    const colorToConvert: TtfRgb = color.rgb;
    const convertedColor = colorConverter.rgb.cmyk(color);
    return { cyan: convertedColor[0], magenta: convertedColor[1], yellow: convertedColor[2], black: convertedColor[3] } as TtfCmyk;
}
