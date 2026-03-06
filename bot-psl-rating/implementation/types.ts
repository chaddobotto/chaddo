/**
 * TypeScript Type Definitions for Bot PSL Rating System
 */

// ============================================================================
// Core Attribute Types
// ============================================================================

/**
 * Complete bot attribute set for PSL calculation
 */
export interface BotAttributes {
  // Architectural Symmetry components (0-10 each)
  /** Uniformity of module organization and package structure */
  packageSymmetry: number;
  /** Homogeneous patterns across API surface */
  apiConsistency: number;
  /** Adherence to naming conventions */
  namingUniformity: number;
  /** Balance across abstraction layers */
  hierarchyBalance: number;

  // Feature Prominence components (0-10 each)
  /** Uniqueness of core capabilities */
  functionalDistinctiveness: number;
  /** Strength of unique selling proposition */
  uspStrength: number;
  /** Ease of discovery by developers */
  discoverability: number;
  /** Effectiveness of value prop communication */
  marketingClarity: number;

  // Harmonic Cohesion components (0-10 each)
  /** Smooth interaction between bot parts */
  apiCohesion: number;
  /** Type system integration quality */
  typeConsistency: number;
  /** Uniform error handling patterns */
  errorHandling: number;
  /** Documentation quality */
  documentation: number;

  // Market Presence metrics
  /** GitHub star count */
  githubStars: number;
  /** NPM weekly downloads */
  npmDownloads: number;
  /** Ecosystem size and activity (0-10) */
  communityScore: number;
  /** Documentation site quality (0-10) */
  docsSiteScore: number;

  // Scalability Potential components (0-10 each)
  /** Ability to distribute across resources */
  horizontalScaling: number;
  /** Speed and resource efficiency */
  performance: number;
  /** Plugin/extension architecture quality */
  extensibility: number;
  /** Maintenance burden (higher = worse, inverted in calculation) */
  technicalDebt: number;
}

/**
 * Partial bot attributes for incremental assessment
 */
export type PartialBotAttributes = Partial<BotAttributes>;

/**
 * Individual dimension scores (0-10)
 */
export interface DimensionScores {
  /** Architectural Symmetry (0-10) */
  architecturalSymmetry: number;
  /** Feature Prominence (0-10) */
  featureProminence: number;
  /** Harmonic Cohesion (0-10) */
  harmonicCohesion: number;
  /** Market Presence (0-10) */
  marketPresence: number;
  /** Scalability Potential (0-10) */
  scalabilityPotential: number;
}

/**
 * Dimension names as union type
 */
export type DimensionName =
  | 'architecturalSymmetry'
  | 'featureProminence'
  | 'harmonicCohesion'
  | 'marketPresence'
  | 'scalabilityPotential';

/**
 * Dimension weights for PSL calculation
 */
export interface DimensionWeights {
  architecturalSymmetry: number; // Default: 0.25
  featureProminence: number; // Default: 0.25
  harmonicCohesion: number; // Default: 0.20
  marketPresence: number; // Default: 0.15
  scalabilityPotential: number; // Default: 0.15
}

/**
 * Breakdown of dimension contributions to final PSL
 */
export interface DimensionBreakdown {
  [dimensionName: string]: {
    /** Dimension score (0-10) */
    score: number;
    /** Weight applied (0-1) */
    weight: number;
    /** Weighted contribution to final PSL */
    contribution: number;
  };
}

// ============================================================================
// PSL Result Types
// ============================================================================

/**
 * Complete PSL calculation result
 */
export interface PSLResult {
  /** Final PSL score (0-10, typically 0-9) */
  pslScore: number;
  /** Individual dimension scores */
  dimensions: DimensionScores;
  /** Textual classification (e.g., "Exceptional (Chad)") */
  classification: string;
  /** Percentile ranking (0-100) */
  percentile: number;
  /** Detailed breakdown of score calculation */
  breakdown: DimensionBreakdown;
}

/**
 * PSL classification tiers
 */
export type PSLClassification =
  | 'Legendary (Gigachad)' // 8.0-10.0
  | 'Exceptional (Chad)' // 7.0-7.9
  | 'Above Average (HTN)' // 6.0-6.9
  | 'Average (Normie)' // 5.0-5.9
  | 'Below Average (LTN)' // 4.0-4.9
  | 'Poor (Subhuman)' // 3.0-3.9
  | 'Terminal (Truecel)'; // 0.0-2.9

/**
 * Simplified PSL summary for quick display
 */
export interface PSLSummary {
  pslScore: number;
  classification: PSLClassification;
  percentile: number;
}

// ============================================================================
// Mogging Types
// ============================================================================

/**
 * Mogging coefficient calculation result
 */
export interface MoggingResult {
  /** Mogging coefficient μ */
  coefficient: number;
  /** Mogging classification (e.g., "Nuclear Mogging") */
  classification: MoggingClassification;
  /** Human-readable description of relationship */
  description: string;
  /** Self bot PSL score */
  selfPSL: number;
  /** Target bot PSL score */
  targetPSL: number;
  /** PSL difference (self - target) */
  pslDifference: number;
  /** Visibility factor applied */
  visibilityFactor: number;
}

/**
 * Mogging classification categories
 */
export type MoggingClassification =
  | 'Nuclear Mogging' // μ > 200
  | 'Brutal Mogging' // 100 < μ ≤ 200
  | 'Absolute Mogging' // 50 < μ ≤ 100
  | 'Significant Mogging' // 20 < μ ≤ 50
  | 'Marginal Mogging' // 5 < μ ≤ 20
  | 'Looksmatch' // -5 ≤ μ ≤ 5
  | 'Getting Mogged' // -20 < μ ≤ -5
  | 'Significantly Mogged' // -50 < μ ≤ -20
  | 'Brutally Mogged' // -100 < μ ≤ -50
  | 'Obliterated'; // μ ≤ -100

/**
 * Bot comparison result
 */
export interface BotComparison {
  bot1: BotReference;
  bot2: BotReference;
  /** Name of the winning bot */
  winner: string;
  /** Mogging coefficient (from bot1 perspective) */
  moggingCoefficient: number;
  /** Human-readable comparison analysis */
  analysis: string;
}

/**
 * Bot reference with name and PSL
 */
export interface BotReference {
  name: string;
  psl: number;
}

/**
 * Bot profile for mogging calculation
 */
export interface BotProfile {
  name: string;
  psl: number;
  marketPresence: number;
  featureProminence: number;
}

// ============================================================================
// Bot Data Types
// ============================================================================

/**
 * Complete bot profile with metadata
 */
export interface Bot {
  /** Bot name (e.g., "React", "Express") */
  name: string;
  /** Bot category (e.g., "UI Framework", "Routing") */
  category: string;
  /** Complete attribute set */
  attributes: BotAttributes;
  /** PSL calculation result */
  pslResult?: PSLResult;
  /** Additional metadata */
  metadata?: BotMetadata;
}

/**
 * Bot metadata
 */
export interface BotMetadata {
  /** GitHub repository URL */
  githubUrl?: string;
  /** NPM package name */
  npmPackage?: string;
  /** Official website URL */
  websiteUrl?: string;
  /** Description */
  description?: string;
  /** Primary maintainer */
  maintainer?: string;
  /** Assessment date */
  assessedAt?: string;
  /** Assessment version */
  version?: string;
}

/**
 * Historical PSL data point
 */
export interface PSLDataPoint {
  date: string;
  pslScore: number;
  dimensions: DimensionScores;
}

/**
 * Bot with temporal PSL history
 */
export interface BotHistory {
  bot: Bot;
  history: PSLDataPoint[];
}

// ============================================================================
// Calculation Input Types
// ============================================================================

/**
 * Options for PSL calculation
 */
export interface PSLCalculationOptions {
  /** Custom dimension weights (default: standard weights) */
  weights?: Partial<DimensionWeights>;
  /** Whether to include detailed breakdown */
  includeBreakdown?: boolean;
  /** Rounding precision for scores */
  precision?: number;
}

/**
 * Options for mogging calculation
 */
export interface MoggingCalculationOptions {
  /** Custom visibility factor formula */
  visibilityFormula?: (mp: number, fp: number) => number;
  /** Include rival bot details in result */
  includeRivalDetails?: boolean;
}

/**
 * Batch calculation input
 */
export interface BotBatch {
  bots: Bot[];
  options?: PSLCalculationOptions;
}

// ============================================================================
// Validation and Error Types
// ============================================================================

/**
 * Attribute validation result
 */
export interface ValidationResult {
  /** Whether attributes are valid */
  valid: boolean;
  /** Validation error messages */
  errors: ValidationError[];
  /** Warning messages (non-fatal) */
  warnings: string[];
}

/**
 * Validation error
 */
export interface ValidationError {
  /** Attribute name with error */
  attribute: keyof BotAttributes;
  /** Current value */
  value: number;
  /** Error message */
  message: string;
  /** Suggested correction */
  suggestion?: string;
}

/**
 * PSL calculation error
 */
export class PSLCalculationError extends Error {
  constructor(
    message: string,
    public readonly botName?: string,
    public readonly attribute?: string
  ) {
    super(message);
    this.name = 'PSLCalculationError';
  }
}

// ============================================================================
// Dataset Types
// ============================================================================

/**
 * Bot dataset for analysis
 */
export interface BotDataset {
  /** Dataset name */
  name: string;
  /** Dataset version */
  version: string;
  /** Assessment date */
  date: string;
  /** Bot entries */
  bots: Bot[];
  /** Dataset metadata */
  metadata?: {
    totalBots?: number;
    categories?: string[];
    pslRange?: { min: number; max: number };
  };
}

/**
 * Mogging matrix entry
 */
export interface MoggingMatrixEntry {
  bot1: string;
  bot2: string;
  coefficient: number;
  classification: MoggingClassification;
}

/**
 * Complete mogging matrix
 */
export interface MoggingMatrix {
  /** Matrix entries */
  entries: MoggingMatrixEntry[];
  /** Bot names included in matrix */
  bots: string[];
  /** Generation date */
  generatedAt: string;
}

// ============================================================================
// Utility Types
// ============================================================================

/**
 * Percentile distribution data
 */
export interface PercentileDistribution {
  /** PSL range */
  pslRange: [number, number];
  /** Percentage of bots in range */
  percentage: number;
  /** Classification for range */
  classification: PSLClassification;
  /** Percentile boundaries */
  percentiles: [number, number];
}

/**
 * Statistical summary
 */
export interface StatisticalSummary {
  /** Mean PSL */
  mean: number;
  /** Median PSL */
  median: number;
  /** Standard deviation */
  stdDev: number;
  /** Minimum PSL */
  min: number;
  /** Maximum PSL */
  max: number;
  /** Sample size */
  count: number;
  /** Percentile distribution */
  distribution: PercentileDistribution[];
}

/**
 * Correlation data between dimensions
 */
export interface DimensionCorrelation {
  dimension1: DimensionName;
  dimension2: DimensionName;
  /** Correlation coefficient (-1 to 1) */
  correlation: number;
  /** Statistical significance */
  pValue?: number;
}

/**
 * Complete correlation matrix
 */
export type CorrelationMatrix = {
  [D1 in DimensionName]: {
    [D2 in DimensionName]: number;
  };
};

// ============================================================================
// Export Formats
// ============================================================================

/**
 * Exportable report format
 */
export interface PSLReport {
  bot: Bot;
  result: PSLResult;
  generatedAt: string;
  format: 'json' | 'markdown' | 'html';
}

/**
 * Markdown report options
 */
export interface MarkdownReportOptions {
  includeBreakdown: boolean;
  includeDimensionDetails: boolean;
  includeMethodology: boolean;
}

/**
 * Comparison report
 */
export interface ComparisonReport {
  bots: Bot[];
  results: PSLResult[];
  moggingAnalysis: BotComparison[];
  summary: string;
  generatedAt: string;
}
