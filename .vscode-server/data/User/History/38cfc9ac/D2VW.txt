La nostra implementazione (circolare) rispetta il principio della Single Responsability e sfrutta la composizione.

Avviare i docker containers eseguendo il seguente comando dalla cartella "microservices":

docker-compose up

Dopodiché sarà possibile utilizzare i links qui sotto per sfruttare i vari servizi.

Hex -> RGB:

http://localhost/hex_to_rgb?color={%22hex%22:%20%22FFFFFF%22}#/

RGB -> CMYK:

http://localhost/rgb_to_cmyk?color={%22red%22:%20255,%20%22green%22:%20255,%20%22blue%22:%20255}#/

CMYK -> HSL:

http://localhost/cmyk_to_hsl?color={%22cyan%22:0,%22magenta%22:0,%22yellow%22:0,%22black%22:0}#/

HSL -> HEX:

http://localhost/hsl_to_hex?color={%22hue%22:0,%22saturation%22:0,%22lightness%22:100}#/

HEX -> HSL (EXTRA):

http://localhost/hex_to_hsl?color={%22hex%22:%20%22FFFFFF%22}#/
