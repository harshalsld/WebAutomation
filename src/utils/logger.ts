type LogLevel = 'info' | 'warn' | 'error';

function log(level: LogLevel, message: string, context?: string): void {
  const prefix = context ? `[${context}]` : '[test]';
  const line = `${prefix} ${message}`;

  switch (level) {
    case 'info':
      console.log(line);
      break;
    case 'warn':
      console.warn(line);
      break;
    case 'error':
      console.error(line);
      break;
  }
}

export const logger = {
  info: (message: string, context?: string) => log('info', message, context),
  warn: (message: string, context?: string) => log('warn', message, context),
  error: (message: string, context?: string) => log('error', message, context),
};
