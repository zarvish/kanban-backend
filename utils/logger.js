import winston from 'winston';
import fs from 'fs';
import path from 'path';
import 'dotenv/config';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4
};

const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    debug: 'orange'
};

winston.addColors(colors);

const transports = [
    new winston.transports.File({
        filename: 'logs/errors.log',
        level: 'error',
    }),
    new winston.transports.File({
        filename: 'logs/combined.log'
    })
];

const logger = winston.createLogger({
    level: 'info',
    levels,
    format: winston.format.json(),
    transports
});

if (process.env['NODE_ENV'] !== 'production') {
    logger.add(
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.simple()
            )
        })
    );
}

const httpLogStream = fs.createWriteStream(path.join(__dirname, '../', 'logs', 'http_logs.cjs'));

export {
    httpLogStream,
    logger
}