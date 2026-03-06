/**
 * MOG Bot Framework Type Definitions
 * 
 * Complete type safety for all your mogging operations.
 */

/**
 * Configuration options for creating a MOG Bot instance
 */
export interface MogOptions {
  /**
   * Operating mode for the bot
   * - 'autonomous': Fully automated mogging
   * - 'manual': User-controlled mogging
   * - 'hybrid': Combination of both
   */
  mode?: 'autonomous' | 'manual' | 'hybrid';

  /**
   * Level of mogging aggressiveness
   * - 'subtle': Gentle mogging
   * - 'moderate': Standard mogging
   * - 'maximum': Absolute dominance
   */
  aggressiveness?: 'subtle' | 'moderate' | 'maximum';

  /**
   * Enable verbose logging
   */
  verbose?: boolean;

  /**
   * Target bots to mog (optional, defaults to all)
   */
  targets?: string[];

  /**
   * Custom mogging strategies
   */
  strategies?: MogStrategy[];
}

/**
 * MOG Bot instance interface
 */
export interface MogInstance {
  /**
   * Execute a mogging operation
   */
  mog(): Promise<MogResult>;

  /**
   * Analyze a target bot
   */
  analyze(target: string): Promise<MogAnalysis>;

  /**
   * Get current mogging status
   */
  getStatus(): MogStatus;

  /**
   * Generate superiority report
   */
  generateReport(): MogReport;

  /**
   * Destroy the MOG Bot instance
   */
  destroy(): void;
}

/**
 * Result of a mogging operation
 */
export interface MogResult {
  /**
   * Whether the mogging was successful
   */
  success: boolean;

  /**
   * Mogging score achieved (0-100)
   */
  score: number;

  /**
   * Timestamp of the operation
   */
  timestamp: number;

  /**
   * Details about what was mogged
   */
  details: MogDetails;
}

/**
 * Details about a mogging operation
 */
export interface MogDetails {
  /**
   * Target that was mogged
   */
  target: string;

  /**
   * Metrics that contributed to mogging
   */
  metrics: Record<string, number>;

  /**
   * Areas of superiority
   */
  advantages: string[];

  /**
   * Areas that need improvement
   */
  weaknesses: string[];
}

/**
 * Analysis of a target bot
 */
export interface MogAnalysis {
  /**
   * Target bot identifier
   */
  target: string;

  /**
   * Vulnerability score (0-100)
   */
  vulnerability: number;

  /**
   * Detected weaknesses
   */
  weaknesses: string[];

  /**
   * Recommended mogging strategies
   */
  recommendations: string[];
}

/**
 * Current status of MOG Bot operations
 */
export interface MogStatus {
  /**
   * Whether the bot is currently active
   */
  active: boolean;

  /**
   * Number of successful mogs
   */
  mogsCompleted: number;

  /**
   * Overall superiority rating
   */
  superiorityRating: number;

  /**
   * Time since last mog
   */
  lastMog: number | null;
}

/**
 * Comprehensive mogging report
 */
export interface MogReport {
  /**
   * Summary of all mogging operations
   */
  summary: {
    totalMogs: number;
    successRate: number;
    averageScore: number;
  };

  /**
   * Detailed operation history
   */
  history: MogResult[];

  /**
   * Performance trends
   */
  trends: {
    momentum: 'increasing' | 'stable' | 'decreasing';
    projection: number;
  };
}

/**
 * Custom mogging strategy
 */
export interface MogStrategy {
  /**
   * Strategy name
   */
  name: string;

  /**
   * Strategy implementation
   */
  execute: (target: string) => Promise<MogResult>;

  /**
   * Strategy priority (higher = used first)
   */
  priority?: number;
}

/**
 * Error thrown by MOG Bot operations
 */
export class MogError extends Error {
  constructor(
    message: string,
    public code: string,
    public details?: unknown
  ) {
    super(message);
    this.name = 'MogError';
  }
}

/**
 * Callback function type for mogging events
 */
export type MogCallback = (result: MogResult) => void;

/**
 * Event types emitted by MOG Bot
 */
export type MogEvent = 
  | 'mog:start'
  | 'mog:complete'
  | 'mog:error'
  | 'analysis:complete'
  | 'status:change';

/**
 * Event handler mapping
 */
export interface MogEventHandlers {
  'mog:start'?: () => void;
  'mog:complete'?: (result: MogResult) => void;
  'mog:error'?: (error: MogError) => void;
  'analysis:complete'?: (analysis: MogAnalysis) => void;
  'status:change'?: (status: MogStatus) => void;
}
