import { spawnSync } from 'child_process';
import { config } from 'dotenv';
import { resolve } from 'path';

export const NODE_ENV = process.env.NODE_ENV || 'development';

const envFile = NODE_ENV === 'development' ? '.env.development' : '.env';

config({ path: resolve(__dirname, `../${envFile}`) });
config({ path: resolve(__dirname, `../${envFile}.local`), override: true });

// Load all environment variables from .env file

export const PORT = process.env.PORT || 8000;
export const DATABASE_URL = process.env.DATABASE_URL || '';

// Get all arguments passed to the script
const args = process.argv.slice(2);

// Run Prisma command with all arguments
const result = spawnSync('npx', ['prisma', ...args], {
  stdio: 'inherit',
  env: { ...process.env }
});

process.exit(result.status ?? 0);
