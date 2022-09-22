import logger from "../utils/loggers/Log4jsLogger";

export default function loggerMiddleware(req, _res, next) {
    logger.info(`[${req.method}] ${req.originalUrl}`)
    next();
}