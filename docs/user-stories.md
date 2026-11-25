# SimplePlans — User Stories and Acceptance Criteria

**Version:** 1.0  
**Date:** November 25, 2026  
**Status:** Initial Draft

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

**Related Requirements:** FR-202, FR-208, FR-209, NFR-101–NFR-103

### US-202 — Understanding How Insurance Works

As someone confused by healthcare costs, I want to understand how health insurance works so that I can better understand my financial responsibilities.

**Acceptance Criteria:**

- Content explains premiums, deductibles, copays, coinsurance, and out-of-pocket maximums.
- Content explains how these concepts relate to one another.
- Content explains why additional charges may occur after paying a copay.
- Examples distinguish billed charges, insurance payments, and patient responsibilities.

**Related Requirements:** FR-202, FR-203, FR-208

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

**Related Requirements:** FR-207, FR-208

## 5. The Calculator

### US-301 — Entering Insurance Plan Information

As someone evaluating health insurance, I want to enter my plan information into a simple form so that I can understand its potential annual cost.

**Acceptance Criteria:**

- Users can select single-plan or two-plan comparison mode.
- Users can manually enter supported insurance plan information.
- Input fields include understandable labels and explanations.
- Users can submit their information using a Calculate button.
- Invalid or incomplete information produces understandable feedback.
- Users can edit and resubmit their information.

**Related Requirements:** FR-301–FR-309, FR-410

### US-302 — Understanding Initial Annual Costs

As someone evaluating an insurance plan, I want to see its annual financial implications so that I can understand my fixed costs and potential financial exposure.

**Acceptance Criteria:**

- Initial results appear following successful form submission.
- Annual premiums are calculated using the selected payment frequency.
- Deductibles and out-of-pocket maximums are displayed.
- The combined annual premiums and out-of-pocket maximum are displayed.
- Limitations of the displayed financial exposure are communicated.

**Related Requirements:** FR-401, FR-402, FR-409

### US-303 — Exploring Potential Medical Expenses

As someone uncertain about my future healthcare needs, I want to adjust my anticipated medical expenses so that I can understand how different spending scenarios affect my annual costs.

**Acceptance Criteria:**

- A horizontal medical expense slider appears beneath the initial calculation results.
- The selected medical expense amount is clearly displayed.
- Users can increase or decrease the anticipated expense amount.
- Estimated medical out-of-pocket expenses update as the slider moves.
- Estimated total annual costs update without requiring another form submission.
- Annual premiums and estimated medical out-of-pocket expenses are displayed separately.
- Calculation assumptions are communicated.

**Related Requirements:** FR-403–FR-407, FR-409, NFR-301

### US-304 — Comparing Two Insurance Plans

As someone choosing between two insurance plans, I want to compare their potential annual costs so that I can understand their financial differences.

**Acceptance Criteria:**

- Users can enter information for two insurance plans.
- Initial results are displayed for both plans.
- A single medical expense slider controls the spending scenario for both plans.
- Both plans' estimated costs update as the slider moves.
- The estimated cost difference between plans is displayed.
- Equal estimated costs are communicated when applicable.

**Related Requirements:** FR-301, FR-401–FR-409

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

**Related Requirements:** NFR-201–NFR-206

### US-502 — Accessing SimplePlans Across Devices

As someone using a phone, tablet, or computer, I want the application to adapt to my device so that I can use its features comfortably.

**Acceptance Criteria:**

- Primary pages are usable on desktop, tablet, and mobile devices.
- Calculator inputs and results adapt to available screen space.
- Essential content remains accessible across supported browsers.

**Related Requirements:** NFR-701–NFR-703

### US-503 — Protecting My Privacy

As someone concerned about sharing personal information online, I want to use the calculator privately so that I can explore my financial circumstances without compromising my privacy.

**Acceptance Criteria:**

- No account is required.
- Personally identifiable information is not required.
- Calculations are performed locally within the browser.
- User-entered insurance information is not transmitted to a remote server.
- A privacy statement is accessible.

**Related Requirements:** FR-604, NFR-302, NFR-401–NFR-405

### US-504 — Trusting the Information Provided

As someone making important healthcare decisions, I want to understand where the application's information comes from and what its limitations are so that I can use it responsibly.

**Acceptance Criteria:**

- Authoritative educational sources are accessible.
- Financial calculation methodology is documented.
- The application's purpose and creator are described.
- Educational content is distinguished from professional advice.
- Estimated financial outcomes are distinguished from guaranteed costs.

**Related Requirements:** FR-601–FR-606, NFR-501–NFR-505

## 8. Acceptance and Validation

User stories and acceptance criteria shall serve as a foundation for application testing.

A user story shall be considered complete when its applicable acceptance criteria have been satisfied and verified through appropriate manual or automated testing.

Detailed test cases and technical implementation decisions shall be documented during subsequent development phases.

User stories may be revised as the project evolves, with changes tracked through version control.