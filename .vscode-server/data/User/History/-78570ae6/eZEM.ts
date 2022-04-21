import colorConverter from 'color-convert'
import { CMYK } from 'color-convert/conversions';
import {TtfCmyk, TtfHsl} from "../../../commons/src/model/Color";

export function convert(color: TtfCmyk): TtfHsl {
    const colorToConvert: TtfCmyk = color;
    const colorValues: CMYK = [colorToConvert.cyan, colorToConvert.magenta, colorToConvert.yellow, colorToConvert.black];
    const convertedColor = colorConverter.cmyk.hsl(colorValues);
    return {} as ColorModel;
}
