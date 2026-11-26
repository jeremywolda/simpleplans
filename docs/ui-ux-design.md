# SimplePlans — UI/UX Design Specification

**Version:** 1.0  
**Date:** November 26, 2026  
**Status:** Approved Design Specification

## 1. Introduction

This document establishes the visual identity, user experience, interface design, and accessibility standards for SimplePlans.

The application is designed to make American health insurance easier to understand through approachable educational content, interactive financial calculations, and relatable hypothetical scenarios.

The design prioritizes simplicity, personality, accessibility, transparency, and usability.

## 2. Brand Identity

### 2.1 Creative Direction

SimplePlans combines neo-brutalist web design with visual influences from independent music culture, punk zines, retro cartoons, and record sleeve artwork.

The application intentionally avoids the conventional corporate and clinical aesthetics commonly associated with healthcare websites.

### 2.2 Brand Personality

The SimplePlans brand is:

- Approachable
- Playful
- Conversational
- Slightly irreverent
- Independent
- Trustworthy
- Consumer-focused
- Unpretentious

### 2.3 Brand Voice

Educational content and interface copy should resemble a knowledgeable friend explaining complicated concepts in everyday language.

The application may acknowledge the frustrations and complexities associated with health insurance through humor, sarcasm, and relatable observations.

Editorial guidelines:

- Assume no prior knowledge of health insurance.
- Prioritize factual accuracy over humor.
- Explain unfamiliar concepts using plain language.
- Direct humor toward the complexity of the system rather than the user.
- Never trivialize illness, medical emergencies, or financial hardship.
- Avoid unsupported claims about insurance companies or industry practices.
- Maintain objective financial calculations.
- Support educational information with authoritative sources.
- Avoid unnecessary jargon and corporate language.

### 2.4 Design Philosophy

Make a complicated subject feel uncomplicated without making the user feel unintelligent.

## 3. Color Palette

### 3.1 Brand Colors

| Color | Hex Value | Purpose |
|---|---|---|
| Electric Lime | #DFFF43 | Primary brand accent and primary actions |
| Lavender | #B6A1F4 | Educational content |
| Coral | #FF785B | Calculator |
| Golden Yellow | #F5D66D | Common Scenarios |
| Warm Cream | #F5F1E6 | Primary page background |
| Ink Black | #171717 | Typography, borders, shadows, and dark surfaces |

### 3.2 Supporting Colors

| Color | Hex Value | Purpose |
|---|---|---|
| White | #FFFFFF | Form inputs and selected content surfaces |
| Error Red | #B42318 | Validation messages and error indicators |

### 3.3 Color Usage

Electric Lime serves as the primary brand color throughout the application.

Each primary destination has a distinct accent color:

- Health Insurance 101: Lavender
- The Calculator: Coral
- Common Scenarios: Golden Yellow

Ink Black should be used as the primary text color against light backgrounds.

Color must not be the sole means of communicating information, validation errors, financial comparisons, or interactive states.

All implemented color combinations must satisfy applicable accessibility contrast requirements.

## 4. Typography

### 4.1 Typeface Selection

| Typeface | Purpose |
|---|---|
| Space Grotesk | Branding, headings, navigation, and buttons |
| Inter | Body content, form inputs, labels, and explanations |
| Space Mono | Financial results, numerical displays, and decorative numbering |

Fonts will be self-hosted to minimize external dependencies and unnecessary third-party requests.

Applicable font licenses will be retained.

### 4.2 Typography Hierarchy

| Element | Desktop Reference Size |
|---|---|
| Hero heading | 64px |
| Page heading | 40px |
| Section heading | 24px |
| Body content | 16–18px |
| Supporting text | 14px |
| Financial results | 32–48px |

Typography sizes will adapt to viewport dimensions and content requirements.

Heading hierarchy must remain semantically meaningful regardless of visual styling.

## 5. Illustration and Artwork

### 5.1 Illustration Style

Illustrations draw inspiration from retro cartoons, punk zines, independent music artwork, and hand-drawn graphic design.

Visual characteristics include:

- Thick, expressive black outlines
- Exaggerated facial expressions
- Limited brand-aligned color palettes
- Hand-drawn decorative elements
- Occasional halftone textures
- Humorous visual metaphors
- Retro cartoon influences

### 5.2 Brand Mascot

A recurring cartoon skeleton will serve as the SimplePlans mascot.

The mascot represents an individual navigating the complexities of adulthood and health insurance.

The mascot may appear throughout:

- Homepage illustrations
- Educational content
- Calculator illustrations
- Common Scenarios
- Error pages

Supporting illustrations may include additional characters, paperwork, calculators, money, and other relevant visual elements.

### 5.3 Asset Requirements

Production artwork must be original or appropriately licensed.

Illustrations must be optimized for web delivery.

Meaningful illustrations require descriptive alternative text. Decorative illustrations must be hidden from assistive technology where appropriate.

## 6. Interface Design System

### 6.1 Visual Characteristics

The interface uses:

- Bold black borders
- Hard offset shadows
- Predominantly square corners
- Saturated accent colors
- Generous whitespace
- Expressive typography
- Clearly defined interactive elements
- Minimal decorative animation

### 6.2 Buttons

Three primary button styles will be supported:

**Primary:** Electric Lime background, Ink Black border, bold typography, and offset shadow.

**Secondary:** Warm Cream background, Ink Black border, and offset shadow.

**Tertiary:** Text-based action with minimal decoration.

Buttons must provide distinguishable default, hover, active, focus, and disabled states.

### 6.3 Forms

Form controls use:

- Clearly visible labels
- White input backgrounds
- Defined borders
- Contextual supporting text
- Appropriate input types
- Accessible validation feedback

Placeholder text must not replace visible labels.

### 6.4 Cards

Reusable cards will support educational content, navigation, hypothetical scenarios, and financial results.

Cards may use destination-specific accent colors while maintaining consistent borders, spacing, typography, and interaction behavior.

### 6.5 Contextual Messages

Reusable callouts will communicate:

- Educational tips
- Important considerations
- Validation errors
- Calculation assumptions
- Disclaimers

Messages must communicate their meaning through text and, where appropriate, icons rather than color alone.

### 6.6 Financial Results

Financial results will use dark surfaces, prominent numerical displays, and clearly labeled cost breakdowns.

Simple stacked horizontal bars may visualize the relationship between annual premiums and estimated medical expenses.

Comparative bars must use a consistent scale.

Numerical values must remain visible independently of visual representations.

## 7. Reusable Components

The following components represent the proposed reusable interface library.

| Component | Responsibility |
|---|---|
| Button | Consistent action buttons |
| TextInput | Text and numerical inputs |
| SelectInput | Dropdown selections |
| ToggleGroup | Calculator mode and expense scope |
| Slider | Medical expense simulation |
| Card | Reusable content containers |
| Callout | Tips, warnings, and disclaimers |
| CostBreakdown | Financial result visualization |
| Accordion | Expandable educational content |
| SearchInput | Glossary search |
| Illustration | Mascot and supporting artwork |
| Header | Primary navigation |
| Footer | Supporting navigation |
| PageContainer | Consistent page width and spacing |

Additional components may be introduced during development when justified by reuse, maintainability, or accessibility.

## 8. Global Navigation

### 8.1 Header

The header provides:

- SimplePlans wordmark linked to the homepage
- Health Insurance 101 navigation
- Calculator navigation
- Common Scenarios navigation
- Active-page indication
- Responsive mobile navigation

### 8.2 Footer

The footer provides navigation to:

- About
- Sources
- Methodology
- Privacy
- Disclaimer

Navigation must remain consistent throughout the application.

## 9. Homepage

**Route:** /

### 9.1 Purpose

Introduce SimplePlans, establish its personality, and direct users toward the application's primary features.

### 9.2 Page Structure

1. Global header
2. Hero section
3. Brand statement
4. Primary destination cards
5. Project introduction and independence statement
6. Global footer

### 9.3 Hero Section

The hero uses an Electric Lime background, oversized typography, conversational introductory copy, and the skeleton mascot.

The primary call to action navigates users to the destination cards.

### 9.4 Primary Destinations

Three prominent navigation cards introduce:

- Health Insurance 101
- The Calculator
- Common Scenarios

Each card includes a title, illustration, brief description, and clear call to action.

The entire card may function as a navigation link while maintaining accessible interaction semantics.

### 9.5 Trust and Transparency

A brief introductory section communicates the application's educational purpose, independence, and absence of professional insurance advice.

## 10. Health Insurance 101

**Route:** /insurance-101

**Accent Color:** Lavender

### 10.1 Purpose

Provide accessible educational information about health insurance without requiring previous knowledge.

### 10.2 Page Structure

1. Global header
2. Educational hero
3. Section navigation
4. Fundamental insurance terminology
5. Worked financial examples
6. Coverage options
7. Additional insurance concepts
8. Searchable glossary
9. Frequently asked questions
10. Calculator call to action
11. Global footer

### 10.3 Fundamental Terminology

The page introduces:

- Premiums
- Deductibles
- Copays
- Coinsurance
- Out-of-pocket maximums

Each concept includes a plain-language explanation and may include illustrations, examples, and expandable supporting information.

### 10.4 Coverage Education

Educational content includes:

- Employer-sponsored insurance
- Open enrollment
- Health Insurance Marketplace
- Common insurance plan types
- Individual and family coverage
- Embedded and aggregate deductibles
- Health Savings Accounts
- Flexible Spending Accounts
- Provider networks
- Prescription coverage
- Medical billing
- Coverage limitations and exclusions

### 10.5 Glossary

The glossary provides searchable insurance terminology with concise definitions.

Search results update without requiring a page reload.

An understandable empty state is displayed when no matching terms are found.

### 10.6 Frequently Asked Questions

Frequently asked questions use accessible expandable sections.

### 10.7 Content Standards

Educational information must be researched, factually accurate, appropriately sourced, and clearly distinguish general explanations from plan-specific rules.

## 11. The Calculator

**Route:** /calculator

**Accent Color:** Coral

### 11.1 Purpose

Allow users to enter insurance plan information, understand annual financial commitments, and estimate costs under different medical expense scenarios.

### 11.2 Page Structure

1. Global header
2. Calculator hero
3. Calculator mode selection
4. Plan input forms
5. Calculate and reset actions
6. Initial financial results
7. Medical expense simulator
8. Estimated annual cost breakdown
9. Calculation assumptions and limitations
10. Global footer

### 11.3 Calculator Modes

Users may select:

- One plan
- Compare two plans

The application defaults to single-plan mode with empty financial input fields.

Plan information remains available when switching modes while the calculator remains mounted.

### 11.4 Plan Input Forms

Each plan supports:

- Optional plan name
- Coverage type
- Premium amount
- Payment frequency
- Individual deductible
- Individual out-of-pocket maximum
- Family deductible, when applicable
- Family out-of-pocket maximum, when applicable
- Coinsurance percentage

Family-specific fields appear when family coverage is selected.

Each financial input includes a concise explanation where appropriate.

### 11.5 Form Submission

Users explicitly submit plan information using the Calculate action.

Invalid or incomplete information produces accessible validation feedback.

Editing submitted information or changing calculator modes invalidates previous results until the form is successfully resubmitted.

The reset action clears all calculator information and restores default settings.

### 11.6 Initial Results

Successful submission displays:

- Annual premiums
- Individual deductible
- Individual out-of-pocket maximum
- Applicable family deductible
- Applicable family out-of-pocket maximum
- Coinsurance percentage
- Annual premiums plus applicable out-of-pocket maximums

The premium-plus-maximum figures are presented as financial benchmarks rather than absolute limits on healthcare spending.

### 11.7 Medical Expense Simulator

A horizontal slider appears beneath the initial results.

Slider configuration:

- Minimum: $0
- Maximum: $100,000
- Increment: $100
- Initial value: $0

The slider represents anticipated annual covered, in-network allowed medical expenses.

Moving the slider dynamically updates estimated financial results without requiring another form submission.

For family plans, users may select either an individual expense scenario or a simplified household expense scenario.

### 11.8 Dynamic Results

Each plan displays:

- Annual premiums
- Estimated medical expenses paid by the user
- Estimated total annual cost
- Visual cost breakdown

Comparison mode additionally displays:

- Estimated cost difference
- Lower-cost plan under the selected scenario
- Equal-cost indication when applicable

The interface must not imply that the lower-cost plan necessarily provides better overall coverage.

### 11.9 Calculation Transparency

The calculator clearly communicates its assumptions and limitations.

Copays, non-covered services, and other excluded plan-specific provisions are not modeled.

Family calculations use simplified individual or aggregate household limits rather than modeling the distribution of expenses among individual family members.

Detailed calculation methodology is available through the Methodology page.

## 12. Common Scenarios

**Route:** /scenarios

**Accent Color:** Golden Yellow

### 12.1 Purpose

Provide relatable hypothetical examples that demonstrate how different circumstances may influence insurance decisions.

### 12.2 Scenario Directory

The initial application will include six scenarios:

1. Aging out of parental insurance coverage
2. Preparing for childbirth and a growing family
3. Choosing coverage with limited anticipated medical expenses
4. Navigating insurance as a freelancer or self-employed individual
5. Evaluating insurance benefits at a new job
6. Planning for recurring healthcare expenses

Each scenario card includes a title, brief description, illustration, and navigation action.

### 12.3 Story Template

Individual scenarios follow a consistent structure:

1. Introduction to fictional characters
2. Description of their circumstances
3. Explanation of the insurance decision
4. Hypothetical financial information
5. Important financial or coverage considerations
6. Explanation of the characters' decision
7. Practical questions worth considering
8. Links to relevant educational content and the calculator

Stories may use a reusable detail view within the scenarios section.

### 12.4 Editorial Requirements

All scenarios must be clearly identified as fictional or hypothetical.

Financial examples must be internally consistent and accurately calculated.

Stories must acknowledge that different circumstances may produce different decisions.

Scenarios provide educational context rather than personalized insurance recommendations.

## 13. Supporting Pages

### 13.1 About

**Route:** /about

Introduces the project, creator, educational purpose, independence, and professional limitations.

Provides access to the public GitHub repository.

### 13.2 Sources

**Route:** /sources

Provides authoritative references, educational resources, and applicable content review dates.

### 13.3 Methodology

**Route:** /methodology

Explains calculation formulas, assumptions, limitations, and worked examples.

### 13.4 Privacy

**Route:** /privacy

Explains the application's data handling practices, local calculations, temporary form state, and absence of persistent storage of insurance inputs.

Privacy statements must accurately reflect the deployed application and its hosting infrastructure.

### 13.5 Disclaimer

**Route:** /disclaimer

Communicates the application's educational purpose, calculation limitations, and absence of professional medical, financial, or insurance advice.

### 13.6 Not Found

**Route:** *

Provides a branded 404 experience with a clear navigation action returning users to the homepage.

## 14. Responsive Design

### 14.1 Approach

SimplePlans follows a mobile-first responsive design approach using Tailwind CSS.

Layouts must adapt to mobile, tablet, and desktop viewport dimensions.

### 14.2 Breakpoints

| Breakpoint | Minimum Width |
|---|---|
| Default | 0px |
| sm | 640px |
| md | 768px |
| lg | 1024px |
| xl | 1280px |
| 2xl | 1536px |

### 14.3 Layout Behavior

| Element | Mobile | Desktop |
|---|---|---|
| Navigation | Collapsible menu | Horizontal navigation |
| Hero | Stacked layout | Side-by-side layout |
| Homepage cards | Single column | Three columns |
| Calculator forms | Stacked | Side-by-side |
| Comparison results | Compact responsive layout | Full comparison table |
| Scenario cards | Single column | Multi-column grid |
| Typography | Responsive sizing | Expanded hierarchy |
| Content width | Fluid | Maximum 1280px |

Responsive layouts must preserve access to essential information and functionality without unnecessary horizontal scrolling.

## 15. Accessibility

### 15.1 Accessibility Target

The application targets WCAG 2.2 Level AA conformance.

Conformance must be evaluated during implementation and testing.

### 15.2 Interaction Requirements

- Keyboard-accessible navigation and controls
- Visible focus indicators
- Logical focus order
- Accessible mobile navigation
- Keyboard-operable sliders
- Accessible expandable sections
- Appropriate interactive element semantics
- Touch targets of at least 44 × 44 CSS pixels where practical

### 15.3 Content Requirements

- Semantic HTML
- Logical heading hierarchy
- Readable typography
- Sufficient color contrast
- Descriptive link text
- Alternative text for meaningful illustrations
- Support for browser zoom and responsive reflow

### 15.4 Form Accessibility

- Visible labels associated with inputs
- Accessible descriptions and instructions
- Clearly identified required fields
- Validation messages associated with relevant controls
- Error communication that does not rely exclusively on color

### 15.5 Dynamic Content

Calculator results and relevant state changes must be accessible to assistive technologies.

Dynamic announcements should communicate meaningful updates without overwhelming users during continuous slider interaction.

### 15.6 Motion

Decorative animation must remain nonessential and respect reduced-motion preferences.

## 16. User Experience Principles

The application adheres to the following principles:

- Simplicity over unnecessary functionality
- Education before complexity
- Clear and predictable navigation
- Minimal barriers to interaction
- Transparent financial calculations
- Consistent visual identity
- Accessible information and controls
- Respect for user privacy
- Honest communication of limitations
- Personality without sacrificing credibility

## 17. Design Validation

The implemented interface will be evaluated through:

- Manual usability testing
- Responsive layout testing
- Keyboard navigation testing
- Screen reader testing
- Color contrast verification
- Form validation testing
- Calculator interaction testing
- Cross-browser testing
- Automated accessibility checks where practical

The design specification does not establish that accessibility or usability requirements have already been satisfied.

## 18. Outstanding Implementation Decisions

The following items will be finalized during development:

- Production mascot and illustration assets
- Final wordmark treatment
- Final educational and interface copy
- Educational source verification
- Exact spacing and component dimensions
- Detailed responsive component behavior
- Scenario detail navigation implementation
- Final accessibility verification
- Applicable artwork, font, and software licensing
- Review of lyric-inspired branding and copy before publication

These decisions must remain consistent with the approved creative direction and application requirements.

## 19. Revision History

| Version | Date | Description |
|---|---|---|
| 1.0 | November 26, 2026 | Initial UI/UX design specification |
