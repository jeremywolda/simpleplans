# SimplePlans — User Stories and Acceptance Criteria

**Version:** 1.1  
**Date:** November 26, 2026  
**Status:** Revised Draft

## 1. Purpose

This document defines the primary user stories and acceptance criteria for SimplePlans. Each user story represents a user need and establishes conditions that must be satisfied for the associated functionality to be considered complete.

## 2. Overarching User Story

### US-001 — Understanding Health Insurance

As someone with limited knowledge of health insurance, I want to understand my coverage options, anticipate potential expenses, and explore relatable life situations so that I can make informed healthcare decisions for myself and my family without feeling overwhelmed.

## 3. Homepage and Navigation

### US-101 — Understanding the Application

As a first-time visitor, I want to immediately understand what SimplePlans does so that I can determine whether it can help me.

**Acceptance Criteria:**

- The homepage clearly communicates the purpose of SimplePlans.
- The homepage introduces all three primary features.
- The application communicates that it is free, independent, and educational.
- No account is required to access the application.

**Related Requirements:** FR-101–FR-104, FR-106, NFR-401

### US-102 — Navigating the Application

As a visitor, I want to easily navigate between different sections so that I can quickly find the information I need.

**Acceptance Criteria:**

- Users can access Health Insurance 101, The Calculator, and Common Scenarios from the homepage.
- Navigation remains consistent across primary pages.
- Supporting information is accessible through footer navigation.

**Related Requirements:** FR-103, FR-105, FR-107

## 4. Health Insurance 101

### US-201 — Understanding Insurance Terminology

As someone unfamiliar with health insurance, I want simple explanations of common terminology so that I can understand my insurance documents.

**Acceptance Criteria:**

- Common insurance terms are defined in plain language.
- Definitions include relatable examples where appropriate.
- Users can search the glossary for specific terminology.
- Educational content does not assume prior insurance knowledge.

**Related Requirements:** FR-201, FR-202, FR-208, FR-209, NFR-101–NFR-103

### US-202 — Understanding How Insurance Works

As someone confused by healthcare costs, I want to understand how health insurance works so that I can better understand my financial responsibilities.

**Acceptance Criteria:**

- Content explains premiums, deductibles, copays, coinsurance, and out-of-pocket maximums.
- Content explains how these concepts relate to one another.
- Content explains why additional charges may occur after paying a copay.
- Examples distinguish billed charges, insurance payments, and patient responsibilities.
- Content explains the meaning of covered, in-network allowed medical expenses.
- Content explains how prescription coverage, out-of-network expenses, and supplemental insurance may affect actual healthcare costs.
- Users can access answers to frequently asked health insurance questions.

**Related Requirements:** FR-202, FR-203, FR-208, FR-210, FR-212

### US-203 — Understanding Coverage Options

As someone shopping for health insurance, I want to understand my available coverage options so that I can make a more informed decision.

**Acceptance Criteria:**

- Common insurance plan types are explained.
- Employer-sponsored coverage is explained.
- Marketplace coverage is explained.
- Open enrollment is explained.
- Content addresses common questions about choosing between employer-sponsored and Marketplace coverage.

**Related Requirements:** FR-204–FR-206, FR-210

### US-204 — Understanding Healthcare Spending Accounts

As someone unfamiliar with healthcare spending accounts, I want to understand HSAs and FSAs so that I can recognize their potential financial benefits and limitations.

**Acceptance Criteria:**

- HSAs and FSAs are defined.
- Their primary differences are explained.
- Potential tax advantages are explained.
- Eligibility requirements and common limitations are communicated.
- Users understand that HSA and FSA contributions and associated tax savings are not included in calculator estimates.

**Related Requirements:** FR-207, FR-208, FR-409

### US-205 — Understanding Individual and Family Coverage

As someone evaluating health insurance for my family, I want to understand how individual and family coverage differ so that I can better understand the financial responsibilities associated with covering multiple people.

**Acceptance Criteria:**

- Individual and family coverage are explained in plain language.
- Individual and family deductibles are explained.
- Individual and family out-of-pocket maximums are explained.
- Embedded and aggregate deductible structures are explained using relatable examples.
- Content explains how medical expenses incurred by different family members may affect actual healthcare costs.
- Users are informed that the calculator uses a simplified family expense model and does not reproduce policy-specific family deductible rules.

**Related Requirements:** FR-208, FR-211, FR-409, FR-413–FR-416

## 5. The Calculator

### US-301 — Entering Insurance Plan Information

As someone evaluating health insurance, I want to enter my plan information into a simple form so that I can understand its potential annual cost.

**Acceptance Criteria:**

- Users can select single-plan or two-plan comparison mode.
- Users can select individual or family coverage.
- Users can optionally enter a name for each insurance plan.
- Default plan names are provided when no names are entered.
- Users can enter their premium amount.
- Users can select weekly, biweekly, semimonthly, monthly, or annual premium payment frequencies.
- Users can enter individual deductible and individual out-of-pocket maximum amounts.
- Family deductible and family out-of-pocket maximum fields are displayed and required when family coverage is selected.
- Family-specific fields are not required for individual coverage.
- Users can enter their coinsurance percentage.
- Input fields include understandable labels and explanations.
- Users can submit their information using a Calculate button.
- Invalid or incomplete information produces understandable feedback.
- Previously entered plan information is preserved when switching between calculator modes while the calculator remains mounted.
- Users can edit and resubmit their information.

**Related Requirements:** FR-301–FR-312, FR-314, FR-410

### US-302 — Understanding Initial Annual Costs

As someone evaluating an insurance plan, I want to see its annual financial implications so that I can understand my fixed costs and potential financial exposure.

**Acceptance Criteria:**

- Initial results appear following successful form submission.
- Annual premiums are calculated using the selected payment frequency.
- Individual deductibles and out-of-pocket maximums are displayed.
- Family deductibles and out-of-pocket maximums are displayed when applicable.
- The entered coinsurance percentage is displayed.
- The combined annual premiums and applicable out-of-pocket maximums are displayed.
- Financial results are formatted in United States dollars.
- Users are informed that annual premiums plus the applicable out-of-pocket maximum represent a modeled financial exposure benchmark rather than an absolute spending limit.
- Limitations of the displayed financial exposure are communicated.

**Related Requirements:** FR-401, FR-402, FR-409, FR-411, FR-423, NFR-501, NFR-504

### US-303 — Exploring Potential Medical Expenses

As someone uncertain about my future healthcare needs, I want to adjust my anticipated medical expenses so that I can understand how different spending scenarios affect my annual costs.

**Acceptance Criteria:**

- A horizontal medical expense slider appears beneath the initial calculation results.
- The selected medical expense amount is clearly displayed.
- The slider initially displays $0.
- Users can adjust anticipated medical expenses between $0 and $100,000 in increments of $100.
- Users are informed that the slider represents covered, in-network allowed medical expenses before the modeled insurance cost-sharing provisions are applied.
- Estimated medical out-of-pocket expenses update as the slider moves.
- Estimated total annual costs update without requiring another form submission.
- Annual premiums and estimated medical out-of-pocket expenses are displayed separately.
- A simple visual breakdown distinguishes premium costs from estimated medical out-of-pocket expenses.
- Estimated medical out-of-pocket expenses do not exceed the applicable out-of-pocket maximum within the supported calculation model.
- Calculation assumptions and exclusions are communicated.

**Related Requirements:** FR-403–FR-407, FR-409, FR-412, FR-417, FR-422, NFR-301

### US-304 — Comparing Two Insurance Plans

As someone choosing between two insurance plans, I want to compare their potential annual costs so that I can understand their financial differences.

**Acceptance Criteria:**

- Users can enter information for two insurance plans.
- Both plans must use matching coverage types.
- Initial results are displayed for both plans.
- A single medical expense slider controls the spending scenario for both plans.
- Both plans are evaluated using the same anticipated medical expense amount and expense scope.
- Both plans' estimated costs update as the slider moves.
- The estimated cost difference between plans is displayed.
- The plan with the lower estimated annual cost is identified.
- Equal estimated costs are communicated when applicable.
- Users are informed that the comparison reflects estimated financial costs rather than overall insurance quality or suitability.

**Related Requirements:** FR-301, FR-313, FR-401–FR-409, FR-418–FR-420, NFR-504

### US-305 — Exploring Individual and Household Expenses

As someone evaluating family health insurance, I want to explore both individual and combined household medical expenses so that I can better understand how different healthcare needs may affect my family's annual costs.

**Acceptance Criteria:**

- Family coverage provides an individual expense scenario and a combined household expense scenario.
- Individual expenses are selected by default.
- Individual expense scenarios use the individual deductible and individual out-of-pocket maximum.
- Household expense scenarios use the family deductible and family out-of-pocket maximum.
- The full annual premium for the selected coverage applies to both expense scenarios.
- Switching expense scenarios immediately updates applicable calculation results.
- In comparison mode, the selected expense scenario applies to both plans.
- Household expense scenarios are not available for individual coverage.
- Users are informed that household calculations use simplified aggregate family limits.
- Users are informed that the calculator does not model how medical expenses are distributed among family members or account for policy-specific embedded deductible rules.

**Related Requirements:** FR-409, FR-413–FR-418, FR-420

### US-306 — Correcting and Resetting Calculator Information

As someone entering unfamiliar insurance information, I want clear guidance when I make a mistake and the ability to revise or reset my information so that I can complete my calculations confidently.

**Acceptance Criteria:**

- Required fields are validated when the user submits the form.
- Missing required values are distinguished from valid zero values.
- Negative monetary amounts are rejected.
- Monetary amounts containing more than two decimal places are rejected.
- Coinsurance percentages below zero or above one hundred percent are rejected.
- Nonfinite values and values outside safe numeric calculation limits are rejected.
- Deductibles exceeding their corresponding out-of-pocket maximums produce understandable validation feedback.
- Individual deductible or out-of-pocket maximum values exceeding their corresponding family limits produce understandable validation feedback.
- Mismatched coverage types in comparison mode produce understandable validation feedback.
- Validation messages identify the affected fields and explain how users can correct their information.
- Invalid submissions do not produce calculation results.
- Editing previously submitted plan information invalidates displayed results until successful resubmission.
- Changing calculator modes invalidates displayed results until successful resubmission.
- A Reset button clears entered information, calculation results, and validation errors.
- Resetting restores the calculator's default settings.

**Related Requirements:** FR-304, FR-306, FR-307, FR-313, FR-315–FR-318, FR-410, FR-421, NFR-207, NFR-502, NFR-510

## 6. Common Scenarios

### US-401 — Exploring Relatable Life Situations

As someone unsure which coverage options make sense for my circumstances, I want to explore relatable examples so that I can better understand the factors involved in choosing insurance.

**Acceptance Criteria:**

- Users can access multiple relatable healthcare scenarios.
- Each scenario describes relevant life circumstances.
- Scenarios explain available options and their potential advantages and disadvantages.
- Financial examples are included where appropriate.
- Hypothetical scenarios are clearly identified.
- Scenarios do not present individual outcomes as universal recommendations.

**Related Requirements:** FR-501–FR-507

### US-402 — Applying What I Have Learned

As someone reading a healthcare scenario, I want to access relevant educational content and calculations so that I can explore my own circumstances.

**Acceptance Criteria:**

- Scenarios provide links to relevant educational content.
- Scenarios provide access to the calculator.
- Users can explore their own insurance information independently of the example.

**Related Requirements:** FR-508

## 7. Accessibility, Usability, and Trust

### US-501 — Using an Accessible Application

As someone with accessibility needs, I want to use SimplePlans without unnecessary barriers so that I can access the same information and functionality as other users.

**Acceptance Criteria:**

- Interactive elements are keyboard accessible.
- Form inputs have accessible labels.
- The medical expense slider is operable using a keyboard.
- Informative illustrations include appropriate alternative text.
- Information is not communicated through color alone.
- Text maintains sufficient contrast.
- Validation messages are associated with their corresponding input fields.
- Validation messages are accessible to assistive technologies.
- Calculator modes and expense scope selections are accessible using a keyboard.

**Related Requirements:** NFR-201–NFR-207

### US-502 — Accessing SimplePlans Across Devices

As someone using a phone, tablet, or computer, I want the application to adapt to my device so that I can use its features comfortably.

**Acceptance Criteria:**

- Primary pages are usable on desktop, tablet, and mobile devices.
- Calculator inputs and results adapt to available screen space.
- Essential content remains accessible across supported browsers.
- Single-plan and two-plan calculator modes remain usable on smaller screens.
- Interactive controls remain accessible across supported viewport sizes.

**Related Requirements:** NFR-701–NFR-703

### US-503 — Protecting My Privacy

As someone concerned about sharing personal information online, I want to use the calculator privately so that I can explore my financial circumstances without compromising my privacy.

**Acceptance Criteria:**

- No account is required.
- Personally identifiable information is not required.
- Medical records are not requested.
- Calculations are performed locally within the browser.
- User-entered insurance information is not transmitted to a remote server.
- User-entered insurance information is maintained temporarily in application memory.
- User-entered insurance information is not persisted through cookies, local storage, session storage, or remote databases.
- Refreshing the application clears calculator information and results.
- The deployed application is served over HTTPS.
- A privacy statement is accessible.

**Related Requirements:** FR-604, NFR-302, NFR-401–NFR-408

### US-504 — Trusting the Information Provided

As someone making important healthcare decisions, I want to understand where the application's information comes from and what its limitations are so that I can use it responsibly.

**Acceptance Criteria:**

- Authoritative educational sources are accessible.
- Financial calculation methodology is documented.
- Premium annualization, deductible calculations, coinsurance calculations, and out-of-pocket maximum rules are explained.
- Individual and household calculation assumptions are documented.
- Financial calculation exclusions are clearly communicated.
- The application's purpose and creator are described.
- The application communicates that its creator is not a healthcare or insurance professional.
- Educational content is distinguished from professional advice.
- Estimated financial outcomes are distinguished from guaranteed costs.
- Identical validated inputs produce identical financial results.
- Core financial calculation logic is verified through automated testing.

**Related Requirements:** FR-409, FR-601–FR-606, FR-423, NFR-501–NFR-508

## 8. Acceptance and Validation

User stories and acceptance criteria shall serve as a foundation for application testing.

A user story shall be considered complete when its applicable acceptance criteria have been satisfied and verified through appropriate manual or automated testing.

### 8.1 Testing Approach

Application verification shall include:

- Unit testing of financial calculations, input validation, and currency rounding.
- Integration testing of calculator components, state management, and calculation logic.
- End-to-end testing of primary user workflows.
- Manual and automated accessibility testing.
- Responsive design and browser compatibility testing.
- Review of educational content and supporting references.

Vitest and Playwright shall support automated application testing as described in `docs/system-design.md`.

### 8.2 Requirements Traceability

Each user story shall retain a unique identifier and reference its applicable functional and non-functional requirements.

Technical requirements that do not directly represent user-facing functionality shall be verified through appropriate engineering reviews and technical test cases.

Detailed test cases shall be documented during subsequent development phases.

User stories may be revised as the project evolves, with changes tracked through version control.

## 9. Revision History

| Version | Date | Description |
|---|---|---|
| 1.0 | November 25, 2026 | Initial user stories and acceptance criteria established during project planning. |
| 1.1 | November 26, 2026 | Updated user stories and acceptance criteria to reflect individual and family coverage, financial calculation rules, expense simulation, input validation, state management, privacy, and testing strategies. |