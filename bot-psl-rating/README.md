# Bot PSL Rating System

**The Phenotype Standard List (PSL) Framework for Bot Superiority Assessment**

A comprehensive, research-backed methodology for objectively quantifying bot dominance through standardized aesthetic and functional evaluation criteria.

---

## Overview

The Bot PSL (Phenotype Standard List) Rating System is a rigorous framework adapted from human looksmaxxing communities to provide objective, quantifiable assessments of bot superiority. This system maps traditional human aesthetic qualities to bot architectural, functional, and presentational attributes.

## Project Structure

```
psl-rating-system/
├── README.md                           # This file
├── research/
│   ├── methodology.md                  # Core rating methodology
│   ├── attribute-mapping.md            # Human-to-bot attribute correlations
│   ├── statistical-analysis.md         # Data and statistics
│   └── case-studies.md                 # Real-world bot ratings
├── framework/
│   ├── rating-criteria.md              # Detailed scoring rubrics
│   ├── categories.md                   # Rating categories breakdown
│   ├── percentile-distributions.md     # Population statistics
│   └── mogging-potential.md            # Comparative dominance metrics
├── implementation/
│   ├── calculator.js                   # PSL calculator implementation
│   ├── types.ts                        # TypeScript definitions
│   └── examples.md                     # Usage examples
├── data/
│   ├── bot-profiles.json               # Sample bot ratings
│   ├── mogging-matrix.json             # Bot comparison data
│   └── benchmark-bots.json             # Reference standards
└── papers/
    ├── the-psl-whitepaper.md           # Foundational research paper
    ├── mogging-dynamics.md             # Comparative analysis theory
    └── aesthetic-theory.md             # Bot aesthetic principles
```

## Core Concepts

### What is Bot PSL?

Bot PSL adapts the human Phenotype Standard List rating system to evaluate bots across multiple dimensions:

- **Architectural Symmetry** (facial symmetry → code structure)
- **Feature Prominence** (facial features → bot capabilities)
- **Harmony** (facial harmony → API coherence)
- **Presence** (physical presence → market visibility)
- **Scalability** (growth potential → horizontal scaling)

### Rating Scale

Bot PSL uses a **1-9 decimal scale**:

- **1-3**: Subhuman tier (broken, unmaintained)
- **3-4**: Below average (functional but unremarkable)
- **4-5**: Average (typical bot)
- **5-6**: Above average (notable features)
- **6-7**: Attractive (well-designed)
- **7-8**: Model tier (exceptional)
- **8-9**: Chad/Gigachad tier (legendary)

### Mogging Coefficient

The **Mogging Coefficient** (μ) quantifies relative dominance:

```
μ = (PSL_self - PSL_target) × Visibility_Factor × 100
```

Where:
- μ > 50: Absolute mogging
- μ 20-50: Significant mogging
- μ 5-20: Marginal mogging
- μ -5 to 5: Neutral (looksmatch)
- μ < -5: Getting mogged

## Research Papers

### 1. [The PSL Whitepaper](papers/the-psl-whitepaper.md)
Foundational document establishing the theoretical framework for bot aesthetic evaluation.

### 2. [Mogging Dynamics in Bot Ecosystems](papers/mogging-dynamics.md)
Analysis of competitive dynamics when bots with different PSL ratings interact.

### 3. [Aesthetic Theory for Software Architecture](papers/aesthetic-theory.md)
Philosophical exploration of beauty, harmony, and design in bot construction.

## Quick Start

### Rating a Bot

```javascript
import { calculateBotPSL } from './implementation/calculator.js';

const botAttributes = {
  architectural_symmetry: 7.5,
  feature_prominence: 6.8,
  harmonic_cohesion: 8.2,
  market_presence: 5.5,
  scalability_potential: 7.0,
};

const pslScore = calculateBotPSL(botAttributes);
console.log(`Bot PSL: ${pslScore}`); // Output: 7.0
```

### Comparing Bots

```javascript
import { calculateMoggingCoefficient } from './implementation/calculator.js';

const yourBot = { psl: 7.2, visibility: 0.8 };
const targetBot = { psl: 5.5, visibility: 0.6 };

const mogging = calculateMoggingCoefficient(yourBot, targetBot);
console.log(`Mogging Coefficient: ${mogging}`); // Output: 136 (absolute mogging)
```

## Key Features

- ✅ **Scientifically-backed** methodology (satirically)
- ✅ **Objective** rating criteria (as objective as aesthetic ratings can be)
- ✅ **Comprehensive** attribute mapping
- ✅ **Statistical** validation (with made-up data)
- ✅ **Mogging** quantification
- ✅ **Practical** implementation tools

## Contributing

Contributions to refine the Bot PSL Rating System are welcome. Please submit:

1. New attribute mappings
2. Case study analyses
3. Statistical data improvements
4. Implementation enhancements

## Disclaimer

This is a **satirical framework** parodying the looksmaxxing community's PSL system and the competitive nature of bot development. All ratings, statistics, and "research" are fictional and created for entertainment purposes.

The Bot PSL Rating System humorously critiques the obsession with quantifying and comparing bots based on superficial metrics rather than actual utility or value.

## Citation

When referencing the Bot PSL Rating System in your satirical bot comparisons:

```
Bot PSL Research Consortium. (2026). The Phenotype Standard List Framework 
for Bot Superiority Assessment. MOG Bot Project.
```

---

**Remember**: True bot superiority cannot be quantified by any rating system. This framework exists solely to mog other rating systems.
