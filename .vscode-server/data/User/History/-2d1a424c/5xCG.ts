import colorConverter from 'color-convert'
import { Cmyk } from 'color-convert/conversions';
import { TtfRgb, TtfCmyk } from '../../../commons/src/model/Color';

export function convert(color: TtfRgb): TtfCmyk {
    const colorToConvert: TtfRgb = color.rgb;
    const convertedColor = colorConverter.rgb.cmyk(color);
    return {} as TtfCmyk;
}
