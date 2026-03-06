# @mog/logger

Professional logging solution for tracking MOG Bot's superiority achievements.

## Installation

```bash
pnpm add @mog/logger
```

## Usage

```typescript
import { createLogger } from '@mog/logger';

const logger = createLogger({
  level: 'info',
  format: 'json',
});

logger.info('Mogging operation initiated');
logger.success('Target bot successfully mogged');
logger.error('Mogging failed: target too powerful');
```
