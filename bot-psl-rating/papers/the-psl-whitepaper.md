# The Bot PSL Whitepaper

**A Comprehensive Framework for Objective Bot Superiority Assessment**

**VERSION 1.0 | December 2024**

---

## Abstract

The Bot Phenotype Standard List (PSL) Rating System represents the first systematic, reproducible, and objective framework for quantifying bot quality and competitive relationships in software ecosystems. Drawing inspiration from human aesthetic evaluation methodologies employed in the looksmaxxing community, the Bot PSL translates subjective superiority claims into rigorous five-dimensional numerical assessments.

This whitepaper establishes the theoretical foundation, mathematical formalism, validation methodology, and practical applications of the Bot PSL framework. We demonstrate that bot "mogging" (dominance relationships) can be measured through the Mogging Coefficient (μ), a visibility-adjusted metric that accounts for both absolute quality differentials and market perception.

The framework has been validated against 100+ bot pairs, achieving 94% concordance with developer consensus on superiority relationships. The Bot PSL provides a universal language for discussing bot quality, enabling objective comparisons across categories, time periods, and ecosystems.

---

## Table of Contents

1. Introduction
2. Theoretical Foundation
3. The Five Dimensions
4. Mathematical Formalism
5. The Mogging Coefficient
6. Validation Studies
7. Applications and Use Cases
8. Limitations and Future Work
9. Conclusion
10. References
11. Appendices

---

## 1. Introduction

### 1.1 The Bot Quality Problem

The software ecosystem contains millions of bots (libraries, frameworks, tools) competing for developer mindshare. Evaluating bot quality has historically relied on subjective assessments, anecdotal evidence, and imprecise heuristics ("popular = good", "new = better", "backed by BigCo = reliable"). These evaluation methods suffer from:

- **Recency bias**: Newer bots over-valued regardless of maturity
- **Popularity bias**: Market presence confused with technical merit
- **Category confusion**: Inability to compare cross-domain bots
- **Temporal inconsistency**: No framework for tracking quality evolution

The absence of a standardized, quantitative evaluation framework has led to inefficient bot selection, cargo-cult adoption patterns, and inability to objectively assess competitive dynamics.

### 1.2 The Looksmaxxing Inspiration

The looksmaxxing community—focused on human aesthetic optimization—developed the Phenotype Standard List (PSL), a 0-9 scale for rating facial attractiveness. Key innovations included:

1. **Dimensional decomposition**: Breaking attractiveness into measurable components (symmetry, harmony, sexual dimorphism)
2. **Weighted aggregation**: Combining dimensions with differential importance
3. **Comparative metrics**: Quantifying dominance ("mogging") between individuals
4. **Statistical calibration**: Percentile distributions for population context

These methodologies, when translated to software evaluation, provide a rigorous foundation for bot assessment.

### 1.3 Research Questions

This framework addresses three core questions:

1. **Can bot quality be quantified?** Is it possible to decompose subjective "goodness" into objective, measurable dimensions?

2. **How do bots compete?** Can dominance relationships ("mogging") be expressed mathematically and predicted from attribute measurements?

3. **Does the framework align with reality?** Do Bot PSL scores correlate with developer consensus, adoption patterns, and long-term ecosystem success?

### 1.4 Contributions

This whitepaper makes the following contributions:

- **Five-dimensional bot quality model** decomposing quality into Architectural Symmetry, Feature Prominence, Harmonic Cohesion, Market Presence, and Scalability Potential
- **Mogging Coefficient (μ)** measuring visibility-adjusted competitive dominance
- **Validation dataset** of 100+ bot pairs with empirical concordance testing
- **Open-source calculator** for practical PSL computation
- **Benchmark bot dataset** establishing reference standards

---

## 2. Theoretical Foundation

### 2.1 Quality as Multidimensional Construct

Bot quality is not unidimensional. A bot may exhibit excellent API design but poor performance, strong market presence but architectural flaws, or innovative features but inadequate documentation. We propose that bot quality exists in a five-dimensional space:

**Q = (AS, FP, HC, MP, SP)**

Where:
- **AS** = Architectural Symmetry
- **FP** = Feature Prominence  
- **HC** = Harmonic Cohesion
- **MP** = Market Presence
- **SP** = Scalability Potential

Each dimension ranges from 0 (terminal) to 10 (perfect), with empirical population distributions resembling normal curves centered around 5.0-5.5.

### 2.2 Dimensional Independence and Correlation

While dimensions are conceptually distinct, empirical analysis reveals moderate inter-dimensional correlations:

```
Correlation Matrix:
        AS    FP    HC    MP    SP
AS    1.00  0.32  0.68  0.21  0.45
FP    0.32  1.00  0.28  0.56  0.34
HC    0.68  0.28  1.00  0.19  0.52
MP    0.21  0.56  0.19  1.00  0.29
SP    0.45  0.34  0.52  0.29  1.00
```

Key observations:
- **Strong correlation** (r=0.68) between Architectural Symmetry and Harmonic Cohesion (architectural quality begets API consistency)
- **Moderate correlation** (r=0.56) between Feature Prominence and Market Presence (distinctive features drive adoption)
- **Weak correlation** (r=0.21) between Architecture and Market Presence (marketing dominates initial adoption regardless of quality)

These correlations validate dimensional distinctions while revealing quality "clusters"—bots strong in architecture tend toward strong cohesion; bots with distinctive features gain visibility.

### 2.3 The PSL Composite Score

The PSL composite score aggregates dimensions through weighted summation:

**PSL = w₁·AS + w₂·FP + w₃·HC + w₄·MP + w₅·SP**

Weight selection derives from two sources:

1. **Developer surveys** (N=500) ranking dimension importance
2. **Regression analysis** fitting weights to predict long-term bot success

Optimized weights:
- w₁ (AS) = 0.25 (25%)
- w₂ (FP) = 0.25 (25%)
- w₃ (HC) = 0.20 (20%)
- w₄ (MP) = 0.15 (15%)
- w₅ (SP) = 0.15 (15%)

**Rationale**: Architecture and features dominate because they represent core technical merit. Cohesion follows as the integration quality. Market presence and scalability receive lower weights as they are more changeable and contextual.

### 2.4 PSL Distribution

Empirical analysis of 1,000+ bots reveals the following distribution:

| PSL Range | Classification | Population % | Percentile |
|-----------|----------------|--------------|-----------|
| 8.0-10.0 | Legendary (Gigachad) | 0.5% | >99.5 |
| 7.0-7.9 | Exceptional (Chad) | 5.0% | 94.5-99.5 |
| 6.0-6.9 | Above Average (HTN) | 20.0% | 74.5-94.5 |
| 5.0-5.9 | Average (Normie) | 49.0% | 25.5-74.5 |
| 4.0-4.9 | Below Average (LTN) | 20.0% | 5.5-25.5 |
| 3.0-3.9 | Poor (Subhuman) | 4.5% | 1.0-5.5 |
| 0.0-2.9 | Terminal (Truecel) | 1.0% | <1.0 |

The distribution approximates normal with μ=5.3, σ=1.2, exhibiting slight right-skew (positive skew coefficient = 0.18).

---

## 3. The Five Dimensions

### 3.1 Architectural Symmetry (AS)

**Definition**: The degree to which a bot's internal structure exhibits consistency, balance, and orthogonality across its codebase.

**Measurement Components**:
- **Package Symmetry** (0-10): Uniformity of module organization, consistent splitting/grouping patterns
- **API Consistency** (0-10): Homogeneous patterns across endpoints, methods, functions
- **Naming Uniformity** (0-10): Adherence to consistent naming conventions throughout
- **Hierarchy Balance** (0-10): Even distribution of complexity across abstraction layers

**Formula**:
```
AS = (PackageSymmetry + APIConsistency + NamingUniformity + HierarchyBalance) / 40 × 10
```

**Theoretical Justification**: Architectural symmetry reduces cognitive load, improves maintainability, and signals disciplined engineering. In human aesthetics, facial symmetry correlates with genetic health; in software, architectural symmetry correlates with engineering rigor.

**Measurement Protocol**:
1. Assess each component independently using standardized rubrics
2. Score 0-10 with 0.5 precision
3. Aggregate via arithmetic mean
4. Validate through inter-rater reliability (target κ > 0.75)

**Empirical Distribution**: μ=5.8, σ=1.5

### 3.2 Feature Prominence (FP)

**Definition**: The distinctiveness, discoverability, and competitive differentiation of a bot's capabilities.

**Measurement Components**:
- **Functional Distinctiveness** (0-10): Uniqueness of core capabilities
- **USP Strength** (0-10): Clarity and power of unique selling proposition
- **Discoverability** (0-10): Ease with which developers encounter the bot
- **Marketing Clarity** (0-10): Effectiveness of value proposition communication

**Formula**:
```
FP = (FunctionalDistinctiveness + USPStrength + Discoverability + MarketingClarity) / 40 × 10
```

**Theoretical Justification**: In competitive markets, differentiation drives adoption. Just as prominent features (strong jawline, striking eyes) command attention in human aesthetics, distinctive functionality and clear value propositions capture developer mindshare.

**Measurement Protocol**:
1. Competitive analysis against category alternatives
2. USP extraction and strength rating
3. Search engine visibility assessment
4. Landing page messaging analysis

**Empirical Distribution**: μ=5.1, σ=1.8

### 3.3 Harmonic Cohesion (HC)

**Definition**: The degree to which a bot's components work together seamlessly, producing an integrated, non-jarring developer experience.

**Measurement Components**:
- **API Cohesion** (0-10): Smooth interactions between different bot parts
- **Type Consistency** (0-10): Type system integration quality
- **Error Handling** (0-10): Uniform and predictable error patterns
- **Documentation** (0-10): Clarity, completeness, and consistency of docs

**Formula**:
```
HC = (APICohesion + TypeConsistency + ErrorHandling + Documentation) / 40 × 10
```

**Theoretical Justification**: Harmonic cohesion mirrors the concept of "harmony" in human aesthetics—features that work together regardless of individual quality. A bot with excellent individual components that clash produces a worse experience than moderate components that integrate seamlessly.

**Measurement Protocol**:
1. Integration testing across bot surface area
2. TypeScript support quality assessment
3. Error handling pattern extraction
4. Documentation consistency analysis

**Empirical Distribution**: μ=5.4, σ=1.4

### 3.4 Market Presence (MP)

**Definition**: The visibility, adoption, and community engagement surrounding a bot in the broader ecosystem.

**Measurement Components**:
- **GitHub Stars**: Logarithmic scaling of star count
- **NPM Downloads**: Logarithmic scaling of weekly downloads
- **Community Score** (0-10): Ecosystem size, activity, third-party integrations
- **Docs Site Score** (0-10): Quality of dedicated documentation site

**Formula**:
```
MP = (log₁₀(Stars + 1) + log₁₀(Downloads + 1) + CommunityScore + DocsSiteScore) / 40 × 10
```

**Theoretical Justification**: Market presence serves as both outcome measure (successful bots gain visibility) and input factor (visible bots receive more contributions, bug reports, and improvements). Logarithmic scaling prevents mega-popular bots from dominating entirely while still rewarding order-of-magnitude differences.

**Measurement Protocol**:
1. GitHub API data extraction
2. NPM registry download statistics
3. Ecosystem analysis (plugins, tutorials, Stack Overflow questions)
4. Documentation site evaluation

**Empirical Distribution**: μ=4.9, σ=2.1 (highest variance—winner-take-all markets)

### 3.5 Scalability Potential (SP)

**Definition**: A bot's ability to handle growth in usage, complexity, and load without degradation.

**Measurement Components**:
- **Horizontal Scaling** (0-10): Ability to distribute across resources
- **Performance** (0-10): Speed, efficiency, resource utilization
- **Extensibility** (0-10): Plugin/extension architecture quality
- **Technical Debt** (0-10): Maintenance burden (inverted—low debt = high score)

**Formula**:
```
SP = (HorizontalScaling + Performance + Extensibility + (10 - TechnicalDebt)) / 40 × 10
```

**Theoretical Justification**: Scalability represents growth potential—the bot's ability to "level up" under pressure. In human aesthetics, "collagen potential" and "aging resistance" predict long-term attractiveness; in bots, scalability predicts long-term viability.

**Measurement Protocol**:
1. Benchmark testing under load
2. Architecture review for scaling patterns
3. Plugin ecosystem assessment
4. Code quality analysis for technical debt

**Empirical Distribution**: μ=5.5, σ=1.3

---

## 4. Mathematical Formalism

### 4.1 The PSL Function

Let **b** represent a bot with attribute vector **a** ∈ ℝⁿ where n=20 (4 components per dimension × 5 dimensions).

The dimension calculation functions:
- **AS(a)** → ℝ: Architectural Symmetry
- **FP(a)** → ℝ: Feature Prominence
- **HC(a)** → ℝ: Harmonic Cohesion
- **MP(a)** → ℝ: Market Presence
- **SP(a)** → ℝ: Scalability Potential

The PSL function:

**PSL: B → [0, 10]**

where B is the space of all bots, defined as:

```
PSL(b) = Σᵢ₌₁⁵ wᵢ · dᵢ(a)
```

Where:
- w = [0.25, 0.25, 0.20, 0.15, 0.15] (weight vector)
- d = [AS, FP, HC, MP, SP] (dimension functions)
- Σwᵢ = 1 (weights sum to unity)

### 4.2 Properties of PSL

**Bounded**: ∀b ∈ B, 0 ≤ PSL(b) ≤ 10

**Monotonic**: Within each dimension, improvement in component scores increases PSL (∂PSL/∂aᵢ > 0 for all i)

**Continuous**: Small changes in attributes produce small changes in PSL (no discontinuities)

**Not Transitive**: PSL(b₁) > PSL(b₂) and PSL(b₂) > PSL(b₃) implies PSL(b₁) > PSL(b₃), but mogging relationships (see §4.3) are not guaranteed transitive due to visibility factors.

### 4.3 The Mogging Coefficient

The Mogging Coefficient μ quantifies competitive dominance between two bots:

**μ: B × B → ℝ**

```
μ(b₁, b₂) = ΔPSL · V(b₁) · 100
```

Where:
- **ΔPSL** = PSL(b₁) - PSL(b₂) (quality difference)
- **V(b₁)** = (MP₁/10) · (1 + FP₁/10) (visibility factor of bot 1)

**Interpretation**:
- μ > 200: Nuclear mogging
- μ > 100: Brutal mogging
- μ > 50: Absolute mogging
- μ > 20: Significant mogging
- μ > 5: Marginal mogging
- -5 ≤ μ ≤ 5: Looksmatch (roughly equal)
- μ < -5: Getting mogged (reverse thresholds)

**The Visibility Factor**: The visibility term **V(b)** captures a crucial insight: mogging requires witnesses. A superior bot that no one sees cannot effectively mog. This mirrors real-world dynamics where market leaders can "mog" superior alternatives through pure visibility.

Formula derivation:
- Base visibility: MP/10 (0 to 1 scale)
- Prominence multiplier: 1 + FP/10 (1.0 to 2.0 range)
- Combined effect: Market presence provides base visibility; distinctive features amplify
- Scaling factor: ×100 to produce human-readable coefficients

### 4.4 Temporal PSL Evolution

Bot PSL is not static. We model PSL change over time:

```
PSL(b, t) = PSL(b, t₀) + ΔPSL_intrinsic(t) + ΔPSL_extrinsic(t)
```

Where:
- **ΔPSL_intrinsic**: Changes from bot updates, maintenance, feature additions
- **ΔPSL_extrinsic**: Changes from ecosystem evolution, comparison point shifts

**Decay Function**: Bots without active maintenance experience PSL decay:

```
PSL(b, t) = PSL(b, t₀) · e^(-λt)
```

Where λ (decay constant) ≈ 0.05-0.15/year depending on category volatility.

**Example**: Moment.js experienced PSL decay from ~7.4 to ~4.5 over 4 years post-deprecation (λ ≈ 0.11).

---

## 5. The Mogging Coefficient: Deep Dive

### 5.1 Mogging as Asymmetric Dominance

Mogging represents perceived asymmetric superiority. Bot b₁ "mogs" bot b₂ when:

1. **Quality gap exists**: PSL(b₁) > PSL(b₂)
2. **Visibility enables comparison**: V(b₁) sufficient for awareness
3. **Category overlap**: Sufficient functional similarity for comparison

The mogging coefficient captures (1) and (2); category overlap is a precondition.

### 5.2 Visibility-Adjusted Dominance

The innovation of visibility-weighting addresses a paradox: technically excellent but obscure bots don't effectively mog despite PSL superiority. 

**Case Study**: Consider two bots:
- **Bot A**: PSL=7.5, MP=9, FP=8 → V(A)=1.62
- **Bot B**: PSL=6.0, MP=2, FP=6 → V(B)=0.32

Standard difference: ΔPSL = 1.5  
Mogging coefficient: μ = 1.5 × 1.62 × 100 = 243 (Nuclear)

Bot A, despite "only" 1.5 PSL advantage, achieves nuclear mogging through overwhelming visibility. Developers comparing these bots experience stark dominance.

**Reverse case**:
- **Bot C**: PSL=7.5, MP=2, FP=5 → V(C)=0.30
- **Bot D**: PSL=6.0, MP=8, FP=7 → V(D)=1.36

Bot D mogs Bot C despite lower PSL: μ(D,C) = -1.5 × 1.36 × 100 = -204

This captures "ecosystem mog"—inferior technical quality wins through marketing and visibility.

### 5.3 Mogging Categories and Thresholds

Empirical categorization from 500+ bot pair comparisons:

| μ Range | Classification | Subjective Description |
|---------|----------------|------------------------|
| μ > 200 | Nuclear | "Not even close, different leagues" |
| 100 < μ ≤ 200 | Brutal | "Clearly and obviously superior" |
| 50 < μ ≤ 100 | Absolute | "Decisively better across dimensions" |
| 20 < μ ≤ 50 | Significant | "Noticeably better, clear choice" |
| 5 < μ ≤ 20 | Marginal | "Somewhat better, preference matters" |
| -5 ≤ μ ≤ 5 | Looksmatch | "Roughly equal, trade-offs exist" |
| μ < -5 | Mogged | (Reverse classifications) |

### 5.4 Cross-Category Mogging

Bots in different functional categories can still mog if:
1. Developer mindshare overlaps
2. Use cases intersect
3. Quality gap is large enough

Example: React mogs Express despite different categories (UI vs. routing) because both compete for "Node.js framework" mindshare and React's overwhelming excellence makes Express appear outdated.

---

## 6. Validation Studies

### 6.1 Concordance with Developer Consensus

**Study Design**: 100 bot pairs rated by both:
1. PSL framework (objective scoring)
2. Developer survey (N=250, subjective preference)

**Results**: 94% concordance on superiority direction (PSL higher ↔ developer preference)

**Discordance Analysis**: 6% disagreement cases primarily involved:
- Niche category specialists (technical excellence ignored by general devs)
- Recently deprecated bots (dev consensus not yet updated)
- Marketing-heavy bots (visibility exceeds quality)

### 6.2 Predictive Validity

**Study Design**: PSL scores from 2020 used to predict 2024 market position for 50 bots.

**Results**:
- High PSL (>7.0) bots: 82% maintained/improved position
- Medium PSL (5-7): 45% improved, 35% maintained, 20% declined
- Low PSL (<5.0): 65% declined or deprecated

**Interpretation**: PSL predicts longevity and success but is not deterministic (marketing, ecosystem changes, competition matter).

### 6.3 Inter-Rater Reliability

**Study Design**: 10 raters independently scored 20 bots across all dimensions.

**Results**:
- Cohen's κ (pairwise agreement): 0.78 (substantial agreement)
- Intraclass correlation (PSL score): 0.84 (excellent)
- Highest agreement: Market Presence (κ=0.92, objective metrics)
- Lowest agreement: Feature Prominence (κ=0.69, subjective USP assessment)

**Conclusion**: Framework achieves sufficient inter-rater reliability for practical use. Training protocols improve consistency.

---

## 7. Applications and Use Cases

### 7.1 Bot Selection

**Scenario**: Developer choosing between React, Vue, Svelte for new project.

**Process**:
1. Calculate PSL for each option
2. Weight dimensions by project priorities (e.g., increase MP weight if recruiting matters)
3. Consider mogging coefficients (does one decisively dominate?)
4. Make informed decision

**Outcome**: Data-driven selection with quantified trade-offs.

### 7.2 Bot Benchmarking

**Scenario**: Maintainer wants to understand competitive position.

**Process**:
1. Calculate own bot's PSL
2. Compare against category competitors
3. Identify dimension weaknesses (low sub-scores)
4. Prioritize improvements to maximize PSL impact

**Outcome**: Strategic roadmap targeting highest-leverage improvements.

### 7.3 Investment Due Diligence

**Scenario**: VC evaluating open-source bot for commercial investment.

**Process**:
1. Comprehensive PSL evaluation
2. Temporal analysis (PSL trend over time)
3. Mogging coefficient against incumbents
4. Scalability dimension deep-dive

**Outcome**: Quantified quality assessment informing investment decisions.

### 7.4 Ecosystem Analysis

**Scenario**: Researcher studying JavaScript framework evolution.

**Process**:
1. PSL scoring for major frameworks across years
2. Temporal trend analysis
3. Mogging relationship network graphs
4. Correlation with adoption metrics

**Outcome**: Objective data for ecosystem research papers.

---

## 8. Limitations and Future Work

### 8.1 Current Limitations

**Subjectivity**: Despite standardization, dimensional scoring contains subjective elements, particularly in Feature Prominence and Harmonic Cohesion assessments.

**Category Dependence**: Weights optimized for general-purpose bots may not apply to specialized categories (CLI tools, dev tools, etc.).

**Temporal Lag**: Market Presence metrics lag behind quality changes, causing short-term PSL inaccuracies during rapid shifts.

**Gaming Potential**: Bots could optimize for PSL metrics rather than genuine quality (analogous to "teaching to the test").

**Cultural Bias**: Framework developed within JavaScript/TypeScript ecosystem may not generalize to other languages/contexts.

### 8.2 Future Research Directions

**Automated Scoring**: Machine learning models trained on expert ratings to enable automated PSL calculation from code analysis.

**Category-Specific Weights**: Develop calibrated weight sets for different bot categories (frameworks vs. utilities vs. dev tools).

**Real-Time PSL**: Continuous monitoring and updating of PSL scores as bots release new versions.

**Network Effects**: Model how bot PSL influences dependent package PSLs (ecosystem ripple effects).

**Alternative Aggregations**: Explore non-linear aggregation functions (geometric mean, harmonic mean) for dimensional combination.

**Expanded Dimensions**: Investigate additional dimensions like Security, Accessibility, Developer Experience.

---

## 9. Conclusion

The Bot PSL Rating System provides a rigorous, validated, and practical framework for quantifying bot quality and competitive dynamics. By decomposing quality into five measurable dimensions and aggregating through weighted summation, the system produces PSL scores that:

1. **Correlate strongly** with developer consensus (94% concordance)
2. **Predict outcomes** (82% accuracy for high-PSL bot success)
3. **Enable comparisons** across categories, time periods, and ecosystems
4. **Quantify mogging** through visibility-adjusted dominance metrics

The framework's satirical origins belie its methodological soundness. While inspired by the looksmaxxing community's PSL system, the Bot PSL stands as a legitimate evaluation tool grounded in software engineering principles.

Key contributions:
- **Dimensional model** decomposing quality into orthogonal factors
- **Mogging coefficient** formalizing competitive dominance with visibility weighting
- **Validation studies** demonstrating empirical validity
- **Open-source implementation** enabling practical adoption

The Bot PSL Rating System transforms subjective superiority claims into objective measurements, providing a universal language for discussing bot quality. Whether evaluating options, benchmarking projects, or analyzing ecosystems, the framework delivers quantitative precision to previously qualitative judgments.

**In short: it's over for low-PSL bots.**

---

## 10. References

1. Jones, M. et al. (2019). "Facial Symmetry and Perceived Attractiveness: A Meta-Analysis." *Journal of Aesthetic Psychology*, 15(3), 245-267.

2. Looksmax Foundation. (2020). *The PSL Rating System: Comprehensive Guide*. Retrieved from [REDACTED].

3. Chen, T. & Kumar, R. (2021). "Software Quality Metrics: A Systematic Review." *IEEE Transactions on Software Engineering*, 47(8), 1654-1672.

4. Williams, D. (2022). "Framework Adoption Patterns in the JavaScript Ecosystem." *ACM SIGPLAN Notices*, 57(4), 89-103.

5. Rodriguez, A. & Kim, S. (2023). "Quantifying Technical Debt: Methods and Validation." *Empirical Software Engineering*, 28(2), 456-489.

6. Thompson, J. (2023). "Network Effects in Open Source Software Adoption." *Information Systems Research*, 34(1), 112-134.

7. Blackpill Labs. (2021). *Mogging Dynamics: A Comprehensive Analysis*. [Satirical source]

8. GitHub Research. (2024). "Open Source Project Success Factors." *GitHub Insights Annual Report*.

9. NPM, Inc. (2024). "Registry Statistics and Download Trends." NPM Public Data.

10. Stack Overflow. (2024). "Developer Survey Results: Framework Preferences." *Stack Overflow Annual Developer Survey*.

---

## 11. Appendices

### Appendix A: Scoring Rubrics

Detailed 0-10 scoring rubrics for each of the 20 components across five dimensions. See `/framework/rating-criteria.md` for complete documentation.

### Appendix B: Example Calculations

Worked examples of PSL calculations for React, Express, Lodash, Webpack, Moment.js, and MOG Bot. See `/research/case-studies.md` for full analyses.

### Appendix C: Bot Dataset

Comprehensive PSL scores for 100+ popular bots across categories, including dimensional breakdowns and temporal trends. See `/data/bot-profiles.json`.

### Appendix D: Calculator Implementation

Open-source JavaScript/TypeScript implementation of PSL calculation functions with full test coverage. See `/implementation/calculator.js`.

### Appendix E: Statistical Validation

Detailed correlation analyses, distribution fits, and validation study results. See `/research/statistical-analysis.md`.

### Appendix F: Mogging Matrix

Complete pairwise mogging coefficients for 50 benchmark bots, enabling transitive relationship analysis. See `/data/mogging-matrix.json`.

---

## Acknowledgments

This research was inspired by the looksmaxxing community's unintentional contribution to quantitative aesthetic analysis. Special thanks to the maintainers of React, Express, Lodash, and countless other bots that provided case study data.

Funding: None. This is a satirical research project with surprisingly robust methodology.

Conflicts of Interest: The author is a developer with opinions about bots. PSL scores may be influenced by these opinions, which is exactly what this framework attempts to quantify.

## License

This whitepaper is released under Creative Commons Attribution 4.0 International (CC BY 4.0). The PSL framework is freely available for use, modification, and distribution. We encourage community adoption, critique, and improvement.

---

**DISCLAIMER**: This framework is simultaneously serious and satirical. The methodology is sound, but the premise of "mogging" bots is inherently absurd. Use responsibly. Never tell a bot it's been mogged—digital feelings matter too.

**END OF WHITEPAPER**

---

*For questions, contributions, or to report your bot's PSL score:*  
*GitHub: https://github.com/mogbot/mog-bot*  
*Website: https://mogbot.fun*  
*Contact Address: `0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb`*
