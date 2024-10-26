/**
 * This is a wrapper for logger library, for now we are using console.logs only
 */

export const logger = {
  info: (message: string) => {
    console.log(`INFO: `, message);
  },
  error: (message: unknown) => {
    console.error(`ERROR: `, message);
  },
  warn: (message: string) => {
    console.warn(`WARN: `, message);
  },
}