import colorConverter from 'color-convert'

import { TtfHex, TtfHsl } from '../../../commons/src/model/Color';

export function convert(color: TtfHex): TtfHsl {
    const colorToConvert: TtfHex = color;
    const convertedColor = colorConverter.hex.hsl;
    return {} as ColorModel;
}
