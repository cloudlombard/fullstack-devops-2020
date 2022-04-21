import colorConverter from 'color-convert'
import { HSL } from 'color-convert/conversions';
import { TtfHsl, TtfHex } from '../../../commons/src/model/Color';

export function convert(color: TtfHsl): TtfHex {
    const colorToConvert: HSL  = [color.hue, color.saturation, color.lightness];
    const convertedColor = colorConverter;
    return {} as TtfHex;
}
