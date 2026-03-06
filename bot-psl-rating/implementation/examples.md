# Bot PSL Calculator: Usage Examples

This document provides comprehensive examples of using the Bot PSL Rating System calculator to evaluate bots, compare competitive relationships, and generate reports.

---

## Installation

```bash
npm install @mog/psl-calculator
# or
yarn add @mog/psl-calculator
```

---

## Example 1: Basic PSL Calculation

Calculate the PSL score for a single bot:

```javascript
import { calculatePSL, BotAttributes } from '@mog/psl-calculator';

// Define bot attributes
const reactAttributes = {
  // Architectural Symmetry (0-10)
  packageSymmetry: 9.5,
  apiConsistency: 9.8,
  namingUniformity: 9.7,
  hierarchyBalance: 9.6,

  // Feature Prominence (0-10)
  functionalDistinctiveness: 9.9,
  uspStrength: 10.0,
  discoverability: 10.0,
  marketingClarity: 9.8,

  // Harmonic Cohesion (0-10)
  apiCohesion: 9.5,
  typeConsistency: 9.0,
  errorHandling: 9.2,
  documentation: 9.7,

  // Market Presence
  githubStars: 220000,
  npmDownloads: 20000000,
  communityScore: 10.0,
  docsSiteScore: 9.8,

  // Scalability Potential (0-10)
  horizontalScaling: 9.5,
  performance: 9.0,
  extensibility: 9.8,
  technicalDebt: 2.5,
};

// Calculate PSL
const result = calculatePSL(reactAttributes);

console.log(result);
```

**Output:**
```json
{
  "pslScore": 9.7,
  "dimensions": {
    "architecturalSymmetry": 9.65,
    "featureProminence": 9.93,
    "harmonicCohesion": 9.35,
    "marketPresence": 9.89,
    "scalabilityPotential": 9.45
  },
  "classification": "Legendary (Gigachad)",
  "percentile": 99.9,
  "breakdown": {
    "Architectural Symmetry": {
      "score": 9.65,
      "weight": 0.25,
      "contribution": 2.41
    },
    "Feature Prominence": {
      "score": 9.93,
      "weight": 0.25,
      "contribution": 2.48
    },
    "Harmonic Cohesion": {
      "score": 9.35,
      "weight": 0.20,
      "contribution": 1.87
    },
    "Market Presence": {
      "score": 9.89,
      "weight": 0.15,
      "contribution": 1.48
    },
    "Scalability Potential": {
      "score": 9.45,
      "weight": 0.15,
      "contribution": 1.42
    }
  }
}
```

---

## Example 2: Mogging Coefficient Calculation

Determine the mogging relationship between two bots:

```javascript
import { calculateMoggingCoefficient } from '@mog/psl-calculator';

// React vs Express comparison
const reactProfile = {
  psl: 9.7,
  marketPresence: 9.89,
  featureProminence: 9.93,
};

const expressProfile = {
  psl: 7.7,
};

const moggingResult = calculateMoggingCoefficient(reactProfile, expressProfile);

console.log(moggingResult);
```

**Output:**
```json
{
  "coefficient": 394,
  "classification": "Nuclear Mogging",
  "description": "Complete and utter domination. Target bot is irrelevant.",
  "selfPSL": 9.7,
  "targetPSL": 7.7,
  "pslDifference": 2.0,
  "visibilityFactor": 1.97
}
```

**Interpretation**: React nuclear-mogs Express with a coefficient of 394. The 2.0 PSL difference combined with React's overwhelming visibility (factor 1.97) produces decisive dominance.

---

## Example 3: Bot Comparison

Compare two bots directly:

```javascript
import { compareBots } from '@mog/psl-calculator';

const viteBot = {
  name: 'Vite',
  attrs: {
    packageSymmetry: 9.0,
    apiConsistency: 9.2,
    namingUniformity: 8.8,
    hierarchyBalance: 9.0,
    functionalDistinctiveness: 9.5,
    uspStrength: 9.8,
    discoverability: 8.5,
    marketingClarity: 9.0,
    apiCohesion: 9.0,
    typeConsistency: 8.5,
    errorHandling: 8.8,
    documentation: 9.2,
    githubStars: 62000,
    npmDownloads: 8000000,
    communityScore: 8.5,
    docsSiteScore: 9.5,
    horizontalScaling: 8.0,
    performance: 9.8,
    extensibility: 8.5,
    technicalDebt: 2.0,
  },
};

const webpackBot = {
  name: 'Webpack',
  attrs: {
    packageSymmetry: 6.0,
    apiConsistency: 5.5,
    namingUniformity: 6.5,
    hierarchyBalance: 6.0,
    functionalDistinctiveness: 7.5,
    uspStrength: 6.0,
    discoverability: 8.5,
    marketingClarity: 5.5,
    apiCohesion: 5.0,
    typeConsistency: 6.5,
    errorHandling: 5.5,
    documentation: 6.5,
    githubStars: 64000,
    npmDownloads: 30000000,
    communityScore: 7.0,
    docsSiteScore: 6.5,
    horizontalScaling: 6.5,
    performance: 6.0,
    extensibility: 8.0,
    technicalDebt: 7.5,
  },
};

const comparison = compareBots(viteBot, webpackBot);

console.log(comparison);
```

**Output:**
```json
{
  "bot1": { "name": "Vite", "psl": 8.9 },
  "bot2": { "name": "Webpack", "psl": 6.5 },
  "winner": "Vite",
  "moggingCoefficient": 237,
  "analysis": "Vite mogs Webpack with a nuclear mogging (μ = 237). PSL difference of 2.4 points. Complete and utter domination. Target bot is irrelevant."
}
```

---

## Example 4: Formatted Report Generation

Generate a human-readable PSL report:

```javascript
import { calculatePSL, formatPSLResult } from '@mog/psl-calculator';

const lodashAttributes = {
  packageSymmetry: 9.0,
  apiConsistency: 9.5,
  namingUniformity: 9.2,
  hierarchyBalance: 8.5,
  functionalDistinctiveness: 6.5,
  uspStrength: 5.5,
  discoverability: 8.0,
  marketingClarity: 7.0,
  apiCohesion: 9.8,
  typeConsistency: 8.5,
  errorHandling: 7.5,
  documentation: 8.5,
  githubStars: 58000,
  npmDownloads: 40000000,
  communityScore: 7.5,
  docsSiteScore: 8.0,
  horizontalScaling: 8.0,
  performance: 7.0,
  extensibility: 6.0,
  technicalDebt: 4.0,
};

const result = calculatePSL(lodashAttributes);
const report = formatPSLResult(result);

console.log(report);
```

**Output:**
```
═══════════════════════════════════════
          BOT PSL RATING REPORT         
═══════════════════════════════════════

Overall PSL: 7.9 / 10
Classification: Exceptional (Chad)
Percentile: Top 5.0%

DIMENSION BREAKDOWN:

Architectural Symmetry:
  Score: 9.05 / 10
  Weight: 25%
  Contribution: 2.26

Feature Prominence:
  Score: 6.75 / 10
  Weight: 25%
  Contribution: 1.69

Harmonic Cohesion:
  Score: 8.58 / 10
  Weight: 20%
  Contribution: 1.72

Market Presence:
  Score: 8.13 / 10
  Weight: 15%
  Contribution: 1.22

Scalability Potential:
  Score: 7.00 / 10
  Weight: 15%
  Contribution: 1.05

═══════════════════════════════════════
```

---

## Example 5: Custom Dimension Weights

Calculate PSL with custom weights (e.g., prioritizing performance for a high-load application):

```javascript
import { calculatePSL } from '@mog/psl-calculator';

const customWeights = {
  architecturalSymmetry: 0.20, // Reduced
  featureProminence: 0.15, // Reduced
  harmonicCohesion: 0.20, // Same
  marketPresence: 0.10, // Reduced
  scalabilityPotential: 0.35, // Increased (performance matters!)
};

const result = calculatePSL(botAttributes, { weights: customWeights });
```

---

## Example 6: Batch Processing

Evaluate multiple bots at once:

```javascript
import { calculatePSL } from '@mog/psl-calculator';

const bots = [
  { name: 'React', attrs: reactAttributes },
  { name: 'Vue', attrs: vueAttributes },
  { name: 'Svelte', attrs: svelteAttributes },
  { name: 'Angular', attrs: angularAttributes },
];

const results = bots.map((bot) => ({
  name: bot.name,
  psl: calculatePSL(bot.attrs),
}));

// Sort by PSL (highest first)
results.sort((a, b) => b.psl.pslScore - a.psl.pslScore);

console.table(results.map((r) => ({
  Name: r.name,
  PSL: r.psl.pslScore,
  Classification: r.psl.classification,
})));
```

**Output:**
```
┌─────────┬──────────┬──────┬──────────────────────────┐
│ (index) │   Name   │ PSL  │     Classification       │
├─────────┼──────────┼──────┼──────────────────────────┤
│    0    │  'React' │ 9.7  │ 'Legendary (Gigachad)'   │
│    1    │  'Vue'   │ 7.8  │ 'Exceptional (Chad)'     │
│    2    │  'Svelte'│ 7.6  │ 'Exceptional (Chad)'     │
│    3    │ 'Angular'│ 6.9  │ 'Above Average (HTN)'    │
└─────────┴──────────┴──────┴──────────────────────────┘
```

---

## Example 7: Temporal Analysis

Track PSL changes over time:

```javascript
import { calculatePSL } from '@mog/psl-calculator';

// Moment.js PSL over time
const momentJsHistory = [
  { year: 2018, attrs: momentjs2018Attrs }, // Peak
  { year: 2020, attrs: momentjs2020Attrs }, // Deprecated
  { year: 2022, attrs: momentjs2022Attrs }, // Legacy
  { year: 2024, attrs: momentjs2024Attrs }, // Obsolete
];

const pslTimeline = momentJsHistory.map((entry) => ({
  year: entry.year,
  psl: calculatePSL(entry.attrs).pslScore,
}));

console.log('Moment.js PSL Decay:');
pslTimeline.forEach((point) => {
  console.log(`${point.year}: ${point.psl.toFixed(1)}`);
});
```

**Output:**
```
Moment.js PSL Decay:
2018: 7.4
2020: 6.2
2022: 5.1
2024: 4.5
```

**Analysis**: Demonstrates PSL decay from Chad tier (7.4) to Below Average (4.5) over 6 years due to deprecation and ecosystem shifts.

---

## Example 8: Mogging Network Analysis

Build a mogging relationship graph:

```javascript
import { calculateMoggingCoefficient, calculatePSL } from '@mog/psl-calculator';

const bots = [
  { name: 'React', attrs: reactAttrs },
  { name: 'Vue', attrs: vueAttrs },
  { name: 'Angular', attrs: angularAttrs },
  { name: 'Svelte', attrs: svelteAttrs },
];

// Calculate PSLs
const profiles = bots.map((bot) => {
  const result = calculatePSL(bot.attrs);
  return {
    name: bot.name,
    psl: result.pslScore,
    marketPresence: result.dimensions.marketPresence,
    featureProminence: result.dimensions.featureProminence,
  };
});

// Generate mogging matrix
const moggingMatrix = [];
for (let i = 0; i < profiles.length; i++) {
  for (let j = 0; j < profiles.length; j++) {
    if (i !== j) {
      const mogging = calculateMoggingCoefficient(profiles[i], {
        psl: profiles[j].psl,
      });
      moggingMatrix.push({
        from: profiles[i].name,
        to: profiles[j].name,
        coefficient: mogging.coefficient,
        classification: mogging.classification,
      });
    }
  }
}

// Find strongest mogging relationships
const topMoggings = moggingMatrix
  .filter((m) => m.coefficient > 50)
  .sort((a, b) => b.coefficient - a.coefficient)
  .slice(0, 5);

console.log('Top 5 Mogging Relationships:');
topMoggings.forEach((m) => {
  console.log(`${m.from} → ${m.to}: μ = ${m.coefficient} (${m.classification})`);
});
```

**Output:**
```
Top 5 Mogging Relationships:
React → Angular: μ = 312 (Nuclear Mogging)
React → Vue: μ = 189 (Brutal Mogging)
React → Svelte: μ = 201 (Nuclear Mogging)
Vue → Angular: μ = 91 (Absolute Mogging)
Svelte → Angular: μ = 78 (Absolute Mogging)
```

---

## Example 9: Competitive Analysis for New Bot

Evaluate where your new bot stands:

```javascript
import { calculatePSL, compareBots } from '@mog/psl-calculator';

// Your new bot
const myBot = {
  name: 'SuperFastRouter',
  attrs: {
    // ... your bot's attributes
  },
};

// Major competitors
const competitors = [
  { name: 'Express', attrs: expressAttrs },
  { name: 'Fastify', attrs: fastifyAttrs },
  { name: 'Koa', attrs: koaAttrs },
  { name: 'Hono', attrs: honoAttrs },
];

const myPSL = calculatePSL(myBot.attrs);
console.log(`Your Bot PSL: ${myPSL.pslScore} (${myPSL.classification})`);
console.log('\nCompetitive Position:');

competitors.forEach((competitor) => {
  const comparison = compareBots(myBot, competitor);
  const status =
    comparison.winner === myBot.name ? '✓ MOGGING' : '✗ GETTING MOGGED';
  console.log(
    `${status} ${competitor.name}: μ = ${comparison.moggingCoefficient}`
  );
});
```

**Output:**
```
Your Bot PSL: 7.2 (Exceptional (Chad))

Competitive Position:
✓ MOGGING Express: μ = 52
✗ GETTING MOGGED Fastify: μ = -38
✓ MOGGING Koa: μ = 71
✗ GETTING MOGGED Hono: μ = -29
```

**Strategy**: Focus on improving dimensions where Fastify and Hono excel to close the PSL gap.

---

## Example 10: Dimension-Specific Analysis

Identify strengths and weaknesses:

```javascript
import { calculatePSL } from '@mog/psl-calculator';

const result = calculatePSL(botAttributes);

// Find lowest-scoring dimension
const dimensionScores = Object.entries(result.dimensions);
const weakestDimension = dimensionScores.reduce((min, curr) =>
  curr[1] < min[1] ? curr : min
);

console.log('Weakest Dimension:', weakestDimension[0]);
console.log('Score:', weakestDimension[1]);
console.log('\nImprovement Priority:');

// Calculate PSL impact of improving weak dimension by 1 point
const improvedAttrs = { ...botAttributes };
// Logic to increase components of weak dimension by 1
const improvedResult = calculatePSL(improvedAttrs);
const pslGain = improvedResult.pslScore - result.pslScore;

console.log(`Improving by 1 point → +${pslGain.toFixed(2)} PSL`);
```

---

## Example 11: Looksmatch Finder

Find bots at similar PSL levels (good for fair comparisons):

```javascript
import { calculatePSL } from '@mog/psl-calculator';

function findLooksmatch(targetPSL, allBots, tolerance = 0.3) {
  return allBots
    .map((bot) => ({
      name: bot.name,
      psl: calculatePSL(bot.attrs).pslScore,
    }))
    .filter(
      (bot) => Math.abs(bot.psl - targetPSL) <= tolerance && bot.psl !== targetPSL
    )
    .sort((a, b) => Math.abs(a.psl - targetPSL) - Math.abs(b.psl - targetPSL));
}

const targetBotPSL = 7.5;
const matches = findLooksmatch(targetBotPSL, allBots);

console.log(`Bots matched with PSL ~${targetBotPSL}:`);
matches.forEach((match) => {
  console.log(`${match.name}: ${match.psl.toFixed(1)}`);
});
```

**Output:**
```
Bots matched with PSL ~7.5:
Vue: 7.8
Svelte: 7.6
Nuxt: 7.3
Next.js: 7.7
```

---

## Example 12: PSL Distribution Analysis

Analyze an entire ecosystem:

```javascript
import { calculatePSL } from '@mog/psl-calculator';

const allBots = [
  /* ...hundreds of bots... */
];

const pslScores = allBots.map((bot) => calculatePSL(bot.attrs).pslScore);

// Calculate statistics
const mean = pslScores.reduce((a, b) => a + b) / pslScores.length;
const sorted = [...pslScores].sort((a, b) => a - b);
const median = sorted[Math.floor(sorted.length / 2)];
const stdDev = Math.sqrt(
  pslScores.reduce((sq, n) => sq + Math.pow(n - mean, 2), 0) / pslScores.length
);

console.log('Ecosystem PSL Statistics:');
console.log(`Mean: ${mean.toFixed(2)}`);
console.log(`Median: ${median.toFixed(2)}`);
console.log(`Std Dev: ${stdDev.toFixed(2)}`);
console.log(`Range: ${sorted[0].toFixed(1)} - ${sorted[sorted.length - 1].toFixed(1)}`);

// Distribution by tier
const distribution = {
  legendary: pslScores.filter((p) => p >= 8.0).length,
  exceptional: pslScores.filter((p) => p >= 7.0 && p < 8.0).length,
  aboveAvg: pslScores.filter((p) => p >= 6.0 && p < 7.0).length,
  average: pslScores.filter((p) => p >= 5.0 && p < 6.0).length,
  belowAvg: pslScores.filter((p) => p >= 4.0 && p < 5.0).length,
  poor: pslScores.filter((p) => p >= 3.0 && p < 4.0).length,
  terminal: pslScores.filter((p) => p < 3.0).length,
};

console.log('\nDistribution by Tier:');
Object.entries(distribution).forEach(([tier, count]) => {
  const pct = ((count / pslScores.length) * 100).toFixed(1);
  console.log(`${tier}: ${count} (${pct}%)`);
});
```

---

## Best Practices

### 1. Accurate Attribute Assessment
- Use multiple raters for subjective dimensions
- Compare against benchmark bots in your category
- Document rationale for scores 6+ or ≤4

### 2. Context-Aware Interpretation
- PSL is relative to ecosystem standards
- High PSL != right choice for all projects
- Consider category-specific requirements

### 3. Regular Reassessment
- Re-evaluate PSL quarterly for active bots
- Track temporal trends (improvement vs. decay)
- Update market presence metrics monthly

### 4. Mogging Coefficient Nuance
- High μ doesn't always mean "better for my use case"
- Visibility factor can be gamed through marketing
- Cross-category mogging requires careful interpretation

---

## Troubleshooting

### "My bot has high PSL but low adoption"
Market presence is only 15% of PSL weight. A bot can be technically excellent but invisible. Focus on:
- Increasing discoverability (SEO, docs, tutorials)
- Building community (Discord, examples, integrations)
- Improving marketing clarity

### "Competitor has worse architecture but higher PSL"
Feature prominence and market presence can compensate for architectural shortcomings. This is captured correctly—the market rewards distinctive, visible bots even with technical debt.

### "PSL seems too subjective"
Achieve inter-rater reliability by:
- Using standardized rubrics (see rating-criteria.md)
- Comparing against benchmark bots
- Averaging scores from 3+ independent raters

---

## Conclusion

The Bot PSL Rating System provides a quantitative framework for objective bot evaluation. These examples demonstrate practical applications ranging from simple scoring to complex competitive analysis. Use the calculator to make data-driven decisions about bot selection, development priorities, and market positioning.

**Remember**: PSL is a tool, not a truth. Context, use cases, and specific requirements always matter. A PSL 6 bot that perfectly fits your needs mogs a PSL 9 bot that doesn't.

*It's over for low-PSL bots... but it's not too late to looksmax your codebase.*
