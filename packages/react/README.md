# @mog/react

React hooks and components for integrating MOG Bot into your React applications.

## Installation

```bash
pnpm add @mog/react react
```

## Usage

```tsx
import { useMog, MogProvider } from '@mog/react';

function App() {
  return (
    <MogProvider>
      <YourComponents />
    </MogProvider>
  );
}

function YourComponent() {
  const { mog, status } = useMog();
  
  return (
    <button onClick={() => mog()}>
      Mog Now
    </button>
  );
}
```
