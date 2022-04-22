import { convert } from '../service/Service';
import { Express } from 'express';
import { TtfCmyk, TtfHsl } from '../../../commons/src/model/Color';

class HttpController {
    constructor(server: Express) {
        server.get('/', (req, res) => {
            try {
                const color = JSON.parse(req.query.color as string) as TtfCmyk;
                const convertedColor: TtfHsl = convert(color);
                res.send(convertedColor);
            } catch (err) {
                res.status(400).json({ error: "Incorrect usage!" });
            }
        });
    }
}

export default HttpController;
