# SimplePlans — System Design

**Version:** 1.0  
**Date:** November 26, 2026  
**Status:** Proposed

## 1. Introduction

### 1.1 Purpose

This document defines the technical architecture, technology stack, data models, calculation rules, and implementation strategies for SimplePlans.

It serves as a reference throughout application development, testing, deployment, and maintenance.

### 1.2 Scope

SimplePlans is a client-side web application designed to help users understand health insurance, compare insurance plans, and estimate annual healthcare expenses.

The application prioritizes simplicity, accessibility, accuracy, transparency, and user privacy.

## 2. Technology Stack

| Technology | Responsibility |
|---|---|
| React | Component-based user interface |
| TypeScript | Application programming and type safety |
| Vite | Development server and production builds |
| Tailwind CSS | Styling and responsive design |
| React Router | Client-side navigation |
| Vitest | Unit and integration testing |
| Playwright | End-to-end browser testing |
| Node.js | Development runtime |
| npm | Package and dependency management |
| Git | Version control |
| GitHub | Source code hosting and collaboration |
| Vercel | Application hosting and deployment |

### 2.1 Technology Selection Rationale

React provides reusable components and reactive state management suitable for an interactive educational application.

TypeScript provides static type checking, explicit data models, and improved maintainability.

Vite provides efficient development tooling and optimized production builds.

Tailwind CSS supports consistent styling, responsive layouts, and reusable design tokens.

React Router enables navigation between application pages without requiring full-page reloads.

Vitest and Playwright support automated testing of calculation logic, application behavior, and user workflows.

GitHub and Vercel support version control, pull request workflows, and automated deployment.

### 2.2 Architectural Exclusions

The initial application will not require:

- Backend application servers
- Databases
- User authentication
- External state management libraries
- External insurance data APIs
- Charting libraries
- Containerization

Additional dependencies will be introduced only when justified by application requirements.

## 3. System Architecture

### 3.1 Application Type

SimplePlans will be implemented as a client-side single-page application (SPA).

Application logic, input validation, state management, and financial calculations will execute within the user's browser.

### 3.2 Layered Architecture

The application will use three logical layers.

#### Presentation Layer

Responsibilities:

- Render application pages and reusable components.
- Collect user input.
- Display educational content.
- Present calculation results.
- Provide accessible and responsive user interactions.

Technologies: React, Tailwind CSS, and React Router.

#### Application Layer

Responsibilities:

- Manage application state.
- Coordinate form submission.
- Invoke input validation.
- Coordinate financial calculations.
- Manage transitions between calculator modes and expense scenarios.

Technologies: React hooks and TypeScript.

#### Business Logic Layer

Responsibilities:

- Define insurance plan data models.
- Validate and normalize financial inputs.
- Calculate annual premiums.
- Estimate medical out-of-pocket expenses.
- Calculate total annual costs.
- Compare insurance plans.

Technology: TypeScript.

The business logic layer will remain independent of React and browser-specific APIs.

### 3.3 Separation of Concerns

Presentation, application coordination, and financial calculation logic will remain logically separated.

This separation supports independent testing, maintainability, component reuse, and future application enhancements.

## 4. Directory Structure

The proposed repository structure is:

```
simpleplans/
├── docs/
│   ├── project-charter.md
│   ├── requirements.md
│   ├── user-stories.md
│   └── system-design.md
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── layout/
│   │   ├── common/
│   │   └── calculator/
│   ├── pages/
│   ├── engine/
│   ├── types/
│   ├── content/
│   ├── hooks/
│   ├── tests/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── e2e/
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

### 4.1 Directory Responsibilities

| Directory | Responsibility |
|---|---|
| docs | Project and engineering documentation |
| public | Publicly served static assets |
| assets | Illustrations, images, and visual assets |
| components | Reusable user interface components |
| pages | Page-level React components |
| engine | Financial calculations and validation |
| types | TypeScript interfaces and type definitions |
| content | Educational material, glossary entries, FAQs, and scenarios |
| hooks | Reusable React state and interaction logic |
| tests | Unit and integration tests |
| e2e | End-to-end browser tests |

The directory structure may evolve as implementation requirements become clearer.

## 5. Application Routing

React Router will manage client-side navigation.

| Route | Destination |
|---|---|
| / | Homepage |
| /insurance-101 | Health Insurance 101 |
| /calculator | Insurance calculator |
| /scenarios | Common scenarios |
| /about | About SimplePlans |
| /sources | Educational references |
| /methodology | Calculation methodology |
| /privacy | Privacy statement |
| /disclaimer | Educational disclaimer |
| * | Page not found |

Primary navigation will provide access to the three main application features.

Supporting information will be accessible through the application footer.

## 6. Data Models

### 6.1 Payment Frequency

Premium payment frequency will be selected through a dropdown containing predefined options.

```typescript
type PaymentFrequency =
    | "weekly"
    | "biweekly"
    | "semimonthly"
    | "monthly"
    | "annually";
```

### 6.2 Coverage Type

```typescript
type CoverageType =
    | "individual"
    | "family";
```

### 6.3 Calculator Mode

```typescript
type CalculatorMode =
    | "single"
    | "comparison";
```

### 6.4 Expense Scope

```typescript
type ExpenseScope =
    | "individual"
    | "family";
```

### 6.5 Insurance Plan

```typescript
interface InsurancePlan {
    name: string;
    coverageType: CoverageType;
    premium: number;
    paymentFrequency: PaymentFrequency;
    individualDeductible: number;
    familyDeductible?: number;
    individualOutOfPocketMax: number;
    familyOutOfPocketMax?: number;
    coinsurance: number;
}
```

Monetary properties will represent integer cents.

Coinsurance will represent the percentage of eligible expenses paid by the insured individual after the applicable deductible.

Family-specific properties will be required when the coverage type is family.

### 6.6 Plan Estimate

```typescript
interface PlanEstimate {
    annualPremium: number;
    estimatedMedicalCost: number;
    estimatedAnnualCost: number;
    premiumPlusOutOfPocketMax: number;
}
```

All monetary results will represent integer cents.

### 6.7 Plan Comparison

```typescript
interface PlanComparison {
    planA: PlanEstimate;
    planB: PlanEstimate;
    costDifference: number;
    lowerCostPlan: "A" | "B" | "equal";
}
```

The cost difference will represent the absolute difference between estimated annual costs.

## 7. Calculation Engine

### 7.1 General Principles

The calculation engine will:

- Operate independently of the presentation layer.
- Accept validated and normalized input.
- Produce deterministic results.
- Use a single plan year as the calculation period.
- Represent monetary values internally as integer cents.
- Perform calculations locally within the user's browser.

### 7.2 Annual Premium

Annual premiums will be calculated by multiplying the entered premium by the applicable annual payment frequency.

| Payment Frequency | Annual Multiplier |
|---|---:|
| Weekly | 52 |
| Biweekly | 26 |
| Semimonthly | 24 |
| Monthly | 12 |
| Annually | 1 |

Formula:

```
Annual Premium = Premium × Annual Payment Frequency
```

Standard annual payment schedules will be assumed.

### 7.3 Estimated Medical Expenses

The calculation engine will model covered, in-network allowed medical expenses subject to the applicable deductible and coinsurance.

```
Deductible Cost =
    min(Medical Expenses, Deductible)

Remaining Expenses =
    max(0, Medical Expenses - Deductible)

Coinsurance Cost =
    Remaining Expenses × (Coinsurance / 100)

Estimated Medical Cost =
    min(
        Deductible Cost + Coinsurance Cost,
        Out-of-Pocket Maximum
    )
```

Medical expenses will not exceed the applicable out-of-pocket maximum within the simplified calculation model.

### 7.4 Estimated Annual Cost

```
Estimated Annual Cost =
    Annual Premium + Estimated Medical Cost
```

### 7.5 Premium Plus Out-of-Pocket Maximum

```
Premium Plus Out-of-Pocket Maximum =
    Annual Premium + Out-of-Pocket Maximum
```

This value represents a modeled financial exposure benchmark rather than an absolute limit on healthcare spending.

### 7.6 Individual and Family Expenses

Individual coverage will use individual deductibles and out-of-pocket maximums.

Family coverage will support two expense scenarios:

- Individual expenses within a family plan.
- Combined household expenses.

Individual scenarios will use individual limits. Household scenarios will use family limits.

The full annual premium for the selected coverage will apply in either scenario.

Family calculations will use simplified aggregate limits and will not model the distribution of expenses among family members or policy-specific embedded deductible rules.

### 7.7 Plan Comparison

Both insurance plans will be evaluated using the same anticipated medical expense amount and expense scope.

```
Cost Difference =
    abs(Plan A Annual Cost - Plan B Annual Cost)
```

The application will identify the plan with the lower estimated annual cost.

If both estimated costs are equal, neither plan will be identified as less expensive.

### 7.8 Medical Expense Slider

| Setting | Value |
|---|---:|
| Minimum | $0 |
| Maximum | $100,000 |
| Increment | $100 |
| Initial value | $0 |

The slider will appear following successful form submission.

Adjusting the slider will immediately update estimated annual costs without requiring additional form submission.

The maximum slider value is a user interface constraint rather than a limitation of the calculation engine.

### 7.9 Currency and Rounding

All financial calculations will use United States dollars.

Monetary inputs will be converted to integer cents before being passed to the calculation engine.

Percentage-based coinsurance calculations will be rounded to the nearest cent before calculating the final medical cost.

Displayed financial results will use standard USD currency formatting.

### 7.10 Calculation Exclusions

The calculation engine will not incorporate:

- Copays
- Embedded versus aggregate deductible rules
- HSA or FSA contributions
- Tax savings
- Hospital indemnity insurance
- Prescription-specific coverage
- Out-of-network expenses
- Noncovered services
- Balance billing
- Policy-specific exceptions

These concepts will be addressed through educational content where applicable.

## 8. State Management

### 8.1 State Management Strategy

React's built-in state management capabilities will be used.

An external state management library will not be required for the initial application.

### 8.2 Calculator State

| State | Initial Value |
|---|---|
| Calculator mode | Single plan |
| Plan A draft inputs | Empty |
| Plan B draft inputs | Empty |
| Submitted plans | None |
| Expense scope | Individual |
| Anticipated medical expenses | $0 |
| Validation errors | None |

### 8.3 Draft and Submitted State

Draft form inputs will remain separate from validated, submitted insurance plan information.

Calculation results will only appear following successful form submission.

Editing previously submitted plan information will invalidate the displayed results until the form is successfully resubmitted.

### 8.4 Derived Values

Financial results will be derived from validated plan information and the current medical expense scenario.

Calculated results will not be maintained as independent state when they can be derived directly from existing state.

### 8.5 Calculator Behavior

- Switching between single-plan and comparison modes will preserve previously entered plan information while the calculator remains mounted.
- Changing calculator modes will require successful submission before displaying results for the new mode.
- Adjusting the medical expense slider will update results immediately.
- Changing the expense scope will update results immediately.
- Household expense scenarios will only be available for family coverage.
- Resetting the calculator will clear all inputs, results, and validation errors.
- Refreshing the application will clear calculator state.

## 9. Input Validation

### 9.1 Field-Level Validation

| Field | Validation Rule |
|---|---|
| Plan name | Optional; defaults to Plan A or Plan B |
| Coverage type | Valid predefined selection |
| Premium | Required, nonnegative monetary value |
| Payment frequency | Valid predefined selection |
| Individual deductible | Required, nonnegative monetary value |
| Family deductible | Required for family coverage |
| Individual out-of-pocket maximum | Required, nonnegative monetary value |
| Family out-of-pocket maximum | Required for family coverage |
| Coinsurance | Required, between 0% and 100% |
| Medical expenses | Within the supported slider range |

Monetary inputs will accept up to two decimal places.

Empty inputs will be distinguished from valid zero values.

Nonfinite values and values outside safe numeric calculation limits will be rejected.

### 9.2 Cross-Field Validation

The application will check for:

- Individual deductibles exceeding individual out-of-pocket maximums.
- Family deductibles exceeding family out-of-pocket maximums.
- Individual deductibles exceeding family deductibles.
- Individual out-of-pocket maximums exceeding family out-of-pocket maximums.
- Mismatched coverage types when comparing two plans.

Inconsistent values will require correction before calculation under the supported model.

### 9.3 Validation Feedback

Validation messages will:

- Identify the affected field.
- Explain the issue in plain language.
- Provide guidance for correcting the input.
- Appear near the corresponding field.
- Be accessible to keyboard and assistive technology users.

### 9.4 Input Normalization

Raw form values will be validated and converted into the appropriate TypeScript data types before being passed to the calculation engine.

The calculation engine will operate exclusively on validated, normalized data.

## 10. Privacy and Security

### 10.1 Client-Side Processing

Insurance plan information and financial calculations will remain within the user's browser.

User-entered insurance information will not be transmitted to a remote server.

### 10.2 Data Persistence

The application will not persist user-entered insurance information through:

- Cookies
- Local storage
- Session storage
- Remote databases

Calculator information will exist temporarily in application memory.

### 10.3 Security Practices

The application will:

- Be served over HTTPS.
- Validate user input.
- Avoid collecting personally identifiable information.
- Avoid requesting medical records.
- Maintain application dependencies.
- Avoid committing credentials or secrets to source control.

## 11. Testing Strategy

### 11.1 Unit Testing

Vitest will be used to test independent application logic.

Testing priorities include:

- Premium annualization for every supported payment frequency.
- Deductible calculations.
- Coinsurance calculations.
- Out-of-pocket maximum enforcement.
- Individual and family expense scenarios.
- Annual cost calculations.
- Plan comparison results.
- Currency rounding.
- Input validation and normalization.

### 11.2 Calculation Edge Cases

Automated tests will cover:

- Zero medical expenses.
- Zero premiums.
- Zero deductibles.
- Zero out-of-pocket maximums.
- Expenses below the deductible.
- Expenses equal to the deductible.
- Expenses exceeding the deductible.
- Zero percent coinsurance.
- One hundred percent coinsurance.
- Reaching the out-of-pocket maximum.
- Expenses exceeding the out-of-pocket maximum threshold.
- Equal estimated plan costs.
- Invalid and incomplete inputs.

### 11.3 Integration Testing

Integration tests will verify interactions between application components, state management, validation, and calculation logic.

### 11.4 End-to-End Testing

Playwright will be used to test complete user workflows, including:

- Navigating application pages.
- Submitting a single insurance plan.
- Comparing two insurance plans.
- Adjusting anticipated medical expenses.
- Switching individual and household scenarios.
- Correcting invalid inputs.
- Editing and resubmitting plan information.
- Resetting the calculator.

### 11.5 Accessibility and Compatibility

The application will target WCAG 2.2 Level AA accessibility.

Testing will include keyboard navigation, accessible form labels, contrast, responsive layouts, and compatibility with current versions of Chrome, Safari, Firefox, and Edge.

## 12. Deployment Architecture

### 12.1 Source Control

GitHub will host the application source code and project documentation.

Development will follow GitHub Flow:

1. Create a purpose-specific branch from main.
2. Implement and test changes.
3. Commit changes using descriptive commit messages.
4. Push the branch to GitHub.
5. Open a pull request.
6. Review and merge approved changes.
7. Remove completed branches.

### 12.2 Production Hosting

Vercel will host the production application.

Vite will generate optimized static application assets for deployment.

The hosting configuration will support direct navigation to client-side application routes.

### 12.3 Continuous Deployment

The GitHub repository will be integrated with Vercel.

Approved changes merged into the main branch will trigger automated production builds and deployments.

Pull requests may generate preview deployments for review.

## 13. Design Limitations

SimplePlans provides educational information and simplified financial estimates.

The application does not reproduce the complete billing rules of individual insurance policies.

Calculation results assume covered, in-network allowed charges subject to a single applicable deductible, coinsurance percentage, and out-of-pocket maximum.

Actual healthcare expenses may differ due to copays, prescription coverage, network restrictions, family deductible structures, noncovered services, and other policy-specific provisions.

The application will communicate these limitations through contextual explanations, calculation methodology, and educational disclaimers.

SimplePlans will not provide professional insurance, medical, tax, or financial advice.

## 14. Design Principles

The following principles will guide implementation:

- Simplicity
- Accessibility
- Accuracy
- Transparency
- Privacy
- Separation of concerns
- Maintainability
- Testability

Application complexity should be managed through thoughtful engineering rather than transferred to the user.