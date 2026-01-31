import pino, { Logger, LoggerOptions } from "pino";
const isDev = process.env.NODE_ENV !== 'production';
export const config: LoggerOptions = {
  name: "auth-monorepo",
  level: isDev ? "debug" : "info",
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: isDev,
      translateTime: 'SYS:standard',
      ignore: 'pid,hostname',
    }
  },
  browser: {
    asObject: true,
    write: (obj) => {
      const { level, time, msg, ...rest } = obj as any;
      const logMessage = `[${new Date(time).toLocaleTimeString()}] ${msg}`;

      if (level >= 50) console.error(`[🔴 ERROR] ${msg}`, rest);
      else if (level >= 40) console.warn(`[ZK WARN] ${msg}`, rest);
      else if (level >= 30) console.info(`[🔵 INFO] ${msg}`, rest);
      else console.log(`[🟢 DEBUG] ${msg}`, rest);
    },
  },
  redact: {
    paths: [
      'password',
      'token',
      'accessToken',
      'refreshToken',
      'authorization',
      'secret',
      'creditCard'
    ],
    censor: isDev ? '***[REDACTED]***' : undefined,
  }
}

export const logger: Logger = pino(config);
export type { Logger };