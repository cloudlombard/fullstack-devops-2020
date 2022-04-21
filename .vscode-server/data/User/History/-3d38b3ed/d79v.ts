import colorConverter from 'color-convert'
import { HSL } from 'color-convert/conversions';
import { TtfHex, TtfHsl } from '../../../commons/src/model/Color';

export function convert(color: TtfHex): TtfHsl {
    const colorToConvert: TtfHex = color;
    const convertedColor = colorConverter.hex.hsl;
    return { hue: convertedColor[0], saturation: convertedColor[1], lightness: convertedColor[2] } as TtfHsl;
}
