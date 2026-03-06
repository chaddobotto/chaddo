/**
 * MOG Bot React Integration
 * 
 * React hooks and components for seamless mogging in your React applications.
 */

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from 'react';
import { createMog } from '@mog/core';
import type { MogInstance, MogOptions, MogStatus, MogResult } from '@mog/types';

/**
 * Context for MOG Bot instance
 */
interface MogContextValue {
  instance: MogInstance | null;
  status: MogStatus;
  mog: () => Promise<MogResult | null>;
  analyze: (target: string) => Promise<void>;
  isActive: boolean;
}

const MogContext = createContext<MogContextValue | undefined>(undefined);

/**
 * Props for MogProvider
 */
export interface MogProviderProps {
  children: ReactNode;
  options?: MogOptions;
}

/**
 * Provider component for MOG Bot
 * 
 * @example
 * ```tsx
 * <MogProvider options={{ aggressiveness: 'maximum' }}>
 *   <App />
 * </MogProvider>
 * ```
 */
export function MogProvider({ children, options = {} }: MogProviderProps) {
  const [instance] = useState(() => createMog(options));
  const [status, setStatus] = useState<MogStatus>(instance.getStatus());
  const [isActive, setIsActive] = useState(false);

  const mog = useCallback(async () => {
    if (!instance) return null;
    
    setIsActive(true);
    try {
      const result = await instance.mog();
      setStatus(instance.getStatus());
      return result;
    } finally {
      setIsActive(false);
    }
  }, [instance]);

  const analyze = useCallback(
    async (target: string) => {
      if (!instance) return;
      await instance.analyze(target);
    },
    [instance]
  );

  useEffect(() => {
    return () => {
      instance.destroy();
    };
  }, [instance]);

  const value: MogContextValue = {
    instance,
    status,
    mog,
    analyze,
    isActive,
  };

  return <MogContext.Provider value={value}>{children}</MogContext.Provider>;
}

/**
 * Hook to access MOG Bot functionality
 * 
 * @returns MOG Bot context value
 * @throws Error if used outside MogProvider
 * 
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { mog, status, isActive } = useMog();
 *   
 *   return (
 *     <button onClick={mog} disabled={isActive}>
 *       Mog ({status.mogsCompleted} completed)
 *     </button>
 *   );
 * }
 * ```
 */
export function useMog(): MogContextValue {
  const context = useContext(MogContext);
  if (!context) {
    throw new Error('useMog must be used within MogProvider');
  }
  return context;
}

/**
 * Hook for mogging on component mount
 * 
 * @param enabled - Whether to mog on mount
 * 
 * @example
 * ```tsx
 * function AutoMog() {
 *   useMogOnMount(true);
 *   return <div>Mogging automatically...</div>;
 * }
 * ```
 */
export function useMogOnMount(enabled: boolean = true) {
  const { mog } = useMog();

  useEffect(() => {
    if (enabled) {
      mog();
    }
  }, [enabled, mog]);
}

/**
 * Hook for periodic mogging
 * 
 * @param interval - Interval in milliseconds
 * @param enabled - Whether periodic mogging is enabled
 * 
 * @example
 * ```tsx
 * function PeriodicMog() {
 *   usePeriodicMog(5000, true); // Mog every 5 seconds
 *   return <div>Mogging periodically...</div>;
 * }
 * ```
 */
export function usePeriodicMog(interval: number, enabled: boolean = true) {
  const { mog } = useMog();

  useEffect(() => {
    if (!enabled) return;

    const timer = setInterval(() => {
      mog();
    }, interval);

    return () => clearInterval(timer);
  }, [interval, enabled, mog]);
}

// Re-export types
export type * from '@mog/types';
