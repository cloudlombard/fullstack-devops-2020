import colorConverter from 'color-convert'
import { TtfHsl, TtfHex } from '../../../commons/src/model/Color';

export function convert(color: TtfHsl): TtfHex {
    const colorToConvert: TtfHsl = { hue: color.hue, saturation: color.saturation, lightness: color.lightness };
    const convertedColor = colorConverter.hsl.hex(colorToConvert);
    return { hex: convertedColor } as TtfHex;
}
