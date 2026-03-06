/**
 * MOG Bot Logger
 * 
 * Professional logging for tracking bot mogging operations.
 */

export type LogLevel = 'debug' | 'info' | 'success' | 'warn' | 'error';

export interface LoggerOptions {
  /**
   * Minimum log level to output
   */
  level?: LogLevel;

  /**
   * Output format
   */
  format?: 'text' | 'json';

  /**
   * Enable timestamps
   */
  timestamps?: boolean;

  /**
   * Enable colors (for text format)
   */
  colors?: boolean;
}

export interface Logger {
  debug(message: string, meta?: Record<string, unknown>): void;
  info(message: string, meta?: Record<string, unknown>): void;
  success(message: string, meta?: Record<string, unknown>): void;
  warn(message: string, meta?: Record<string, unknown>): void;
  error(message: string, error?: Error, meta?: Record<string, unknown>): void;
}

const LOG_LEVELS: Record<LogLevel, number> = {
  debug: 0,
  info: 1,
  success: 2,
  warn: 3,
  error: 4,
};

const COLORS: Record<LogLevel, string> = {
  debug: '\x1b[36m',    // Cyan
  info: '\x1b[34m',     // Blue
  success: '\x1b[32m',  // Green
  warn: '\x1b[33m',     // Yellow
  error: '\x1b[31m',    // Red
};

const RESET_COLOR = '\x1b[0m';

/**
 * Create a new logger instance
 * 
 * @param options - Logger configuration options
 * @returns Configured logger instance
 * 
 * @example
 * ```typescript
 * const logger = createLogger({
 *   level: 'info',
 *   format: 'json',
 *   timestamps: true,
 * });
 * 
 * logger.info('Mogging operation started');
 * logger.success('Target successfully mogged');
 * ```
 */
export function createLogger(options: LoggerOptions = {}): Logger {
  const config = {
    level: options.level || 'info',
    format: options.format || 'text',
    timestamps: options.timestamps ?? true,
    colors: options.colors ?? true,
  };

  const minLevel = LOG_LEVELS[config.level];

  function shouldLog(level: LogLevel): boolean {
    return LOG_LEVELS[level] >= minLevel;
  }

  function formatMessage(
    level: LogLevel,
    message: string,
    meta?: Record<string, unknown>
  ): string {
    if (config.format === 'json') {
      return JSON.stringify({
        level,
        message,
        timestamp: config.timestamps ? new Date().toISOString() : undefined,
        ...meta,
      });
    }

    const parts: string[] = [];

    if (config.timestamps) {
      parts.push(`[${new Date().toISOString()}]`);
    }

    if (config.colors) {
      parts.push(`${COLORS[level]}${level.toUpperCase()}${RESET_COLOR}`);
    } else {
      parts.push(level.toUpperCase());
    }

    parts.push(message);

    if (meta && Object.keys(meta).length > 0) {
      parts.push(JSON.stringify(meta));
    }

    return parts.join(' ');
  }

  function log(
    level: LogLevel,
    message: string,
    meta?: Record<string, unknown>
  ): void {
    if (!shouldLog(level)) return;

    const formatted = formatMessage(level, message, meta);
    
    if (level === 'error') {
      console.error(formatted);
    } else {
      console.log(formatted);
    }
  }

  return {
    debug(message: string, meta?: Record<string, unknown>): void {
      log('debug', message, meta);
    },

    info(message: string, meta?: Record<string, unknown>): void {
      log('info', message, meta);
    },

    success(message: string, meta?: Record<string, unknown>): void {
      log('success', message, meta);
    },

    warn(message: string, meta?: Record<string, unknown>): void {
      log('warn', message, meta);
    },

    error(message: string, error?: Error, meta?: Record<string, unknown>): void {
      const errorMeta = error
        ? {
            ...meta,
            error: {
              name: error.name,
              message: error.message,
              stack: error.stack,
            },
          }
        : meta;

      log('error', message, errorMeta);
    },
  };
}

/**
 * Default logger instance
 */
export const logger = createLogger();

// Re-export types
export type * from '@mog/types';
