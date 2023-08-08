import type { UnConfig } from '../types';

export const defaults: Partial<UnConfig> = {
  adapter: 'request',
  timeout: 60000,
  validateStatus: (status) => status >= 200 && status < 300,
};
