/**
 * Bot PSL Rating System Calculator
 * 
 * Implementation of the Bot Phenotype Standard List (PSL) rating methodology
 * for objective bot superiority assessment.
 * 
 * For TypeScript type definitions, see types.ts
 */

// ============================================================================
// Core Calculation Functions
// ============================================================================

/**
 * Calculate Architectural Symmetry score
 * Formula: (PackageSymmetry + APIConsistency + NamingUniformity + HierarchyBalance) / 40 × 10
 * @param {Object} attrs - Bot attributes object
 * @returns {number} Architectural Symmetry score (0-10)
 */
export function calculateArchitecturalSymmetry(attrs) {
  const sum =
    attrs.packageSymmetry +
    attrs.apiConsistency +
    attrs.namingUniformity +
    attrs.hierarchyBalance;

  return (sum / 40) * 10;
}

/**
 * Calculate Feature Prominence score
 * Formula: (FunctionalDistinctiveness + USPStrength + Discoverability + MarketingClarity) / 40 × 10
 * @param {Object} attrs - Bot attributes object
 * @returns {number} Feature Prominence score (0-10)
 */
export function calculateFeatureProminence(attrs) {
  const sum =
    attrs.functionalDistinctiveness +
    attrs.uspStrength +
    attrs.discoverability +
    attrs.marketingClarity;

  return (sum / 40) * 10;
}

/**
 * Calculate Harmonic Cohesion score
 * Formula: (APICohesion + TypeConsistency + ErrorHandling + Documentation) / 40 × 10
 * @param {Object} attrs - Bot attributes object
 * @returns {number} Harmonic Cohesion score (0-10)
 */
export function calculateHarmonicCohesion(attrs) {
  const sum =
    attrs.apiCohesion +
    attrs.typeConsistency +
    attrs.errorHandling +
    attrs.documentation;

  return (sum / 40) * 10;
}

/**
 * Calculate Market Presence score
 * Formula: (log₁₀(Stars + 1) + log₁₀(Downloads + 1) + CommunityScore + DocsSiteScore) / 40 × 10
 * @param {Object} attrs - Bot attributes object
 * @returns {number} Market Presence score (0-10)
 */
export function calculateMarketPresence(attrs) {
  const starsLog = Math.log10(attrs.githubStars + 1);
  const downloadsLog = Math.log10(attrs.npmDownloads + 1);

  const sum = starsLog + downloadsLog + attrs.communityScore + attrs.docsSiteScore;

  return (sum / 40) * 10;
}

/**
 * Calculate Scalability Potential score
 * Formula: (HorizontalScaling + Performance + Extensibility + (10 - TechnicalDebt)) / 40 × 10
 * @param {Object} attrs - Bot attributes object
 * @returns {number} Scalability Potential score (0-10)
 */
export function calculateScalabilityPotential(attrs) {
  const sum =
    attrs.horizontalScaling +
    attrs.performance +
    attrs.extensibility +
    (10 - attrs.technicalDebt); // Inverted

  return (sum / 40) * 10;
}

/**
 * Calculate all dimension scores
 * @param {Object} attrs - Bot attributes object
 * @returns {Object} Dimension scores object
 */
export function calculateDimensions(attrs) {
  return {
    architecturalSymmetry: calculateArchitecturalSymmetry(attrs),
    featureProminence: calculateFeatureProminence(attrs),
    harmonicCohesion: calculateHarmonicCohesion(attrs),
    marketPresence: calculateMarketPresence(attrs),
    scalabilityPotential: calculateScalabilityPotential(attrs),
  };
}

/**
 * Calculate final PSL score using weighted average
 * Weights: AS (25%), FP (25%), HC (20%), MP (15%), SP (15%)
 * @param {Object} attrs - Bot attributes object
 * @returns {Object} PSL result with score, dimensions, classification, percentile, breakdown
 */
export function calculatePSL(attrs) {
  const dimensions = calculateDimensions(attrs);

  const weights = {
    architecturalSymmetry: 0.25,
    featureProminence: 0.25,
    harmonicCohesion: 0.20,
    marketPresence: 0.15,
    scalabilityPotential: 0.15,
  };

  const pslScore =
    dimensions.architecturalSymmetry * weights.architecturalSymmetry +
    dimensions.featureProminence * weights.featureProminence +
    dimensions.harmonicCohesion * weights.harmonicCohesion +
    dimensions.marketPresence * weights.marketPresence +
    dimensions.scalabilityPotential * weights.scalabilityPotential;

  const classification = classifyPSL(pslScore);
  const percentile = calculatePercentile(pslScore);

  const breakdown = {
    'Architectural Symmetry': {
      score: dimensions.architecturalSymmetry,
      weight: weights.architecturalSymmetry,
      contribution: dimensions.architecturalSymmetry * weights.architecturalSymmetry,
    },
    'Feature Prominence': {
      score: dimensions.featureProminence,
      weight: weights.featureProminence,
      contribution: dimensions.featureProminence * weights.featureProminence,
    },
    'Harmonic Cohesion': {
      score: dimensions.harmonicCohesion,
      weight: weights.harmonicCohesion,
      contribution: dimensions.harmonicCohesion * weights.harmonicCohesion,
    },
    'Market Presence': {
      score: dimensions.marketPresence,
      weight: weights.marketPresence,
      contribution: dimensions.marketPresence * weights.marketPresence,
    },
    'Scalability Potential': {
      score: dimensions.scalabilityPotential,
      weight: weights.scalabilityPotential,
      contribution: dimensions.scalabilityPotential * weights.scalabilityPotential,
    },
  };

  return {
    pslScore: roundToOneDecimal(pslScore),
    dimensions,
    classification,
    percentile,
    breakdown,
  };
}

// ============================================================================
// Mogging Calculations
// ============================================================================

/**
 * Calculate Mogging Coefficient
 * Formula: μ = (PSL_self - PSL_target) × Visibility_Factor × 100
 * @param {Object} selfBot - Self bot with psl, marketPresence, featureProminence
 * @param {Object} targetBot - Target bot with psl
 * @returns {Object} Mogging result with coefficient, classification, description
 */
export function calculateMoggingCoefficient(selfBot, targetBot) {
  const pslDifference = selfBot.psl - targetBot.psl;
  
  // Visibility Factor = (MP_self / 10) × (1 + (FP_self / 10))
  const visibilityFactor =
    (selfBot.marketPresence / 10) * (1 + selfBot.featureProminence / 10);

  const coefficient = pslDifference * visibilityFactor * 100;

  const classification = classifyMogging(coefficient);
  const description = describeMogging(coefficient);

  return {
    coefficient: roundToOneDecimal(coefficient),
    classification,
    description,
    selfPSL: selfBot.psl,
    targetPSL: targetBot.psl,
    pslDifference: roundToOneDecimal(pslDifference),
    visibilityFactor: roundToTwoDecimals(visibilityFactor),
  };
}

/**
 * Compare two bots and determine mogging relationship
 * @param {Object} bot1 - First bot with name and attrs
 * @param {Object} bot2 - Second bot with name and attrs
 * @returns {Object} Comparison result with winner and mogging analysis
 */
export function compareBots(bot1, bot2) {
  const result1 = calculatePSL(bot1.attrs);
  const result2 = calculatePSL(bot2.attrs);

  const mogging = calculateMoggingCoefficient(
    {
      psl: result1.pslScore,
      marketPresence: result1.dimensions.marketPresence,
      featureProminence: result1.dimensions.featureProminence,
    },
    { psl: result2.pslScore }
  );

  const winner = mogging.coefficient > 0 ? bot1.name : bot2.name;
  const analysis = generateComparisonAnalysis(bot1.name, bot2.name, mogging);

  return {
    bot1: { name: bot1.name, psl: result1.pslScore },
    bot2: { name: bot2.name, psl: result2.pslScore },
    winner,
    moggingCoefficient: mogging.coefficient,
    analysis,
  };
}

// ============================================================================
// Classification Functions
// ============================================================================

/**
 * Classify PSL score into tier
 * @param {number} psl - PSL score
 * @returns {string} Classification tier
 */
function classifyPSL(psl) {
  if (psl >= 8.0) return 'Legendary (Gigachad)';
  if (psl >= 7.0) return 'Exceptional (Chad)';
  if (psl >= 6.0) return 'Above Average (HTN)';
  if (psl >= 5.0) return 'Average (Normie)';
  if (psl >= 4.0) return 'Below Average (LTN)';
  if (psl >= 3.0) return 'Poor (Subhuman)';
  return 'Terminal (Truecel)';
}

/**
 * Classify mogging coefficient
 * @param {number} mu - Mogging coefficient
 * @returns {string} Mogging classification
 */
function classifyMogging(mu) {
  if (mu > 200) return 'Nuclear Mogging';
  if (mu > 100) return 'Brutal Mogging';
  if (mu > 50) return 'Absolute Mogging';
  if (mu > 20) return 'Significant Mogging';
  if (mu > 5) return 'Marginal Mogging';
  if (mu >= -5) return 'Looksmatch';
  if (mu > -20) return 'Getting Mogged';
  if (mu > -50) return 'Significantly Mogged';
  if (mu > -100) return 'Brutally Mogged';
  return 'Obliterated';
}

/**
 * Describe mogging relationship
 * @param {number} mu - Mogging coefficient
 * @returns {string} Mogging description
 */
function describeMogging(mu) {
  if (mu > 200)
    return 'Complete and utter domination. Target bot is irrelevant.';
  if (mu > 100)
    return 'Overwhelming superiority. Target bot is outclassed in every dimension.';
  if (mu > 50)
    return 'Clear superiority across multiple dimensions. Decisive mogging.';
  if (mu > 20) return 'Notable advantage. Visible superiority.';
  if (mu > 5) return 'Slight edge. Minor mogging.';
  if (mu >= -5) return 'Roughly equal. Similar tier bots.';
  if (mu > -20) return 'Slight disadvantage. Target has edge.';
  if (mu > -50) return 'Clear inferiority. Target is superior.';
  if (mu > -100) return 'Overwhelming inferiority. Getting dominated.';
  return 'Complete obliteration. No competition.';
}

/**
 * Calculate percentile ranking based on PSL
 * @param {number} psl - PSL score
 * @returns {number} Percentile ranking
 */
function calculatePercentile(psl) {
  // Based on bot PSL distribution
  if (psl >= 8.0) return 99.9;
  if (psl >= 7.0) return 95.0;
  if (psl >= 6.0) return 75.0;
  if (psl >= 5.0) return 50.0;
  if (psl >= 4.0) return 25.0;
  if (psl >= 3.0) return 10.0;
  return 1.0;
}

/**
 * Generate comparison analysis text
 * @param {string} bot1Name - First bot name
 * @param {string} bot2Name - Second bot name
 * @param {Object} mogging - Mogging result object
 * @returns {string} Analysis text
 */
function generateComparisonAnalysis(bot1Name, bot2Name, mogging) {
  const pslDiff = Math.abs(mogging.pslDifference);
  const winner = mogging.coefficient > 0 ? bot1Name : bot2Name;
  const loser = mogging.coefficient > 0 ? bot2Name : bot1Name;

  return `${winner} mogs ${loser} with a ${mogging.classification.toLowerCase()} (μ = ${
    mogging.coefficient
  }). PSL difference of ${pslDiff.toFixed(
    1
  )} points. ${mogging.description}`;
}

// ============================================================================
// Utility Functions
// ============================================================================

function roundToOneDecimal(value) {
  return Math.round(value * 10) / 10;
}

function roundToTwoDecimals(value) {
  return Math.round(value * 100) / 100;
}

/**
 * Format PSL result for display
 * @param {Object} result - PSL result object
 * @returns {string} Formatted report text
 */
export function formatPSLResult(result) {
  const lines = [
    `═══════════════════════════════════════`,
    `          BOT PSL RATING REPORT         `,
    `═══════════════════════════════════════`,
    ``,
    `Overall PSL: ${result.pslScore} / 10`,
    `Classification: ${result.classification}`,
    `Percentile: Top ${(100 - result.percentile).toFixed(1)}%`,
    ``,
    `DIMENSION BREAKDOWN:`,
    ``,
  ];

  Object.entries(result.breakdown).forEach(([dimension, data]) => {
    lines.push(
      `${dimension}:`,
      `  Score: ${data.score.toFixed(2)} / 10`,
      `  Weight: ${(data.weight * 100).toFixed(0)}%`,
      `  Contribution: ${data.contribution.toFixed(2)}`,
      ``
    );
  });

  lines.push(
    `═══════════════════════════════════════`,
    ``
  );

  return lines.join('\n');
}

/**
 * Format mogging result for display
 * @param {Object} result - Mogging result object
 * @returns {string} Formatted mogging analysis text
 */
export function formatMoggingResult(result) {
  return [
    `═══════════════════════════════════════`,
    `          MOGGING ANALYSIS              `,
    `═══════════════════════════════════════`,
    ``,
    `Classification: ${result.classification}`,
    `Mogging Coefficient (μ): ${result.coefficient}`,
    ``,
    `PSL Scores:`,
    `  Your Bot: ${result.selfPSL}`,
    `  Target Bot: ${result.targetPSL}`,
    `  Difference: ${result.pslDifference}`,
    ``,
    `Visibility Factor: ${result.visibilityFactor}`,
    ``,
    `Analysis:`,
    `  ${result.description}`,
    ``,
    `═══════════════════════════════════════`,
    ``,
  ].join('\n');
}
