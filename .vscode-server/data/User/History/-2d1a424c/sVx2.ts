import colorConverter from 'color-convert'
import { cmyk } from 'color-convert/conversions';
import { TtfRgb, TtfCmyk } from '../../../commons/src/model/Color';

export function convert(color: TtfRgb): TtfCmyk {
    const colorToConvert: TtfRgb = [color.red, color.green, color.blue];
    const convertedColor = colorConverter.rgb.cmyk(colorToConvert);
    return { cyan: convertedColor[0], magenta: convertedColor[1], yellow: convertedColor[2], black: convertedColor[3] } as TtfCmyk;
}
