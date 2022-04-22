import colorConverter from 'color-convert'
import { RGB, HSL } from 'color-convert/conversions';
import { TtfRgb, TtfHsl } from '../../../commons/src/model/Color';

export function convert(color: TtfRgb): TtfHsl {
    const colorToConvert: TtfRgb = { color.red, color.green, color.blue };
    const convertedColor = colorConverter;
    return {} as ColorModel;
}
