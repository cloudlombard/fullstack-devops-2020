import colorConverter from 'color-convert'
import { cmyk, HSL } from 'color-convert/conversions';
import { TtfCmyk, TtfHsl } from '../../../commons/src/model/Color';

export function convert(color: TtfCmyk): TtfHsl {
    const colorToConvert: TtfCmyk = [color.cyan, color.magenta, color.yellow, color.black];
    const convertedColor = colorConverter;
    return {} as ColorModel;
}
