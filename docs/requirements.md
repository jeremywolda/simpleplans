# SimplePlans — Software Requirements Specification

**Version:** 1.1  
**Date:** November 26, 2026  
**Status:** Revised Draft

## 1. Purpose

This document defines the functional and non-functional requirements for the initial release of SimplePlans. These requirements will guide application design, development, testing, and evaluation.

## 2. Functional Requirements

### 2.1 Homepage and Navigation

| ID | Requirement |
|---|---|
| FR-101 | The application shall provide a publicly accessible homepage. |
| FR-102 | The homepage shall display the SimplePlans brand identity, introductory copy, and a hero illustration. |
| FR-103 | The homepage shall provide direct navigation to Health Insurance 101, The Calculator, and Common Scenarios. |
| FR-104 | Each primary destination shall include a title, illustration, brief description, and call to action. |
| FR-105 | The application shall provide consistent navigation between its primary pages. |
| FR-106 | The homepage shall communicate the application's independent, educational, and free-to-use nature. |
| FR-107 | The application shall provide footer navigation to supporting information. |

### 2.2 Health Insurance 101

| ID | Requirement |
|---|---|
| FR-201 | The application shall provide a dedicated educational page titled Health Insurance 101. |
| FR-202 | The page shall explain fundamental health insurance terminology in plain language. |
| FR-203 | The page shall explain how health insurance works in the United States. |
| FR-204 | The page shall explain common insurance plan types. |
| FR-205 | The page shall explain employer-sponsored health insurance and open enrollment. |
| FR-206 | The page shall explain HealthCare.gov and Marketplace insurance. |
| FR-207 | The page shall explain common healthcare savings and spending accounts, including HSAs and FSAs. |
| FR-208 | Educational content shall incorporate relatable examples and illustrations. |
| FR-209 | The application shall provide a searchable glossary of common health insurance terminology. |
| FR-210 | The application shall provide answers to frequently asked health insurance questions. |
| FR-211 | Educational content shall explain the differences between individual and family coverage, including embedded and aggregate deductible structures. |
| FR-212 | Educational content shall explain relevant insurance provisions excluded from the calculator, including copays, prescription coverage, out-of-network expenses, and supplemental insurance. |

### 2.3 The Calculator — Plan Input

| ID | Requirement |
|---|---|
| FR-301 | The calculator shall support single-plan analysis and two-plan comparison. |
| FR-302 | The calculator shall collect insurance plan information through a traditional form. |
| FR-303 | The calculator shall provide plain-language explanations alongside input fields. |
| FR-304 | The calculator shall allow users to manually enter and edit insurance plan information. |
| FR-305 | The calculator shall support entry of plan names, coverage types, premiums, premium payment frequencies, individual deductibles, individual out-of-pocket maximums, family deductibles, family out-of-pocket maximums, and coinsurance percentages. |
| FR-306 | The calculator shall validate required inputs and relationships between inputs upon submission. |
| FR-307 | The calculator shall provide understandable feedback when invalid or incomplete information is submitted. |
| FR-308 | The calculator shall preserve entered plan information when switching between calculator modes while the calculator remains mounted. |
| FR-309 | The calculator shall provide a Calculate button to submit plan information. |
| FR-310 | The calculator shall allow users to select individual or family coverage through a predefined selection field. |
| FR-311 | The calculator shall support weekly, biweekly, semimonthly, monthly, and annual premium payment frequencies through a dropdown selection. |
| FR-312 | The calculator shall require family deductible and family out-of-pocket maximum information when family coverage is selected. |
| FR-313 | The calculator shall require matching coverage types when comparing two insurance plans. |
| FR-314 | The calculator shall allow users to enter optional plan names and provide default names when none are entered. |
| FR-315 | The calculator shall accept nonnegative monetary inputs with up to two decimal places. |
| FR-316 | The calculator shall accept coinsurance percentages between zero and one hundred percent, inclusive. |
| FR-317 | The calculator shall distinguish valid zero values from missing inputs. |
| FR-318 | The calculator shall provide a Reset button that clears entered information, calculation results, and validation errors and restores default calculator settings. |

### 2.4 The Calculator — Results and Expense Simulation

| ID | Requirement |
|---|---|
| FR-401 | The calculator shall display initial results following successful form submission. |
| FR-402 | Initial results shall include annual premiums, applicable individual and family deductibles, applicable individual and family out-of-pocket maximums, coinsurance percentages, and the sum of annual premiums and applicable out-of-pocket maximums. |
| FR-403 | The calculator shall display an interactive horizontal medical expense slider beneath the initial results. |
| FR-404 | The slider shall allow users to increase or decrease anticipated annual covered, in-network allowed medical expenses. |
| FR-405 | The calculator shall dynamically update estimated medical out-of-pocket expenses as the slider value changes. |
| FR-406 | The calculator shall display annual premiums and estimated medical out-of-pocket expenses separately. |
| FR-407 | The calculator shall display the combined estimated annual cost of each plan. |
| FR-408 | In comparison mode, the calculator shall display both plans' results and their estimated cost difference. |
| FR-409 | The calculator shall communicate the assumptions and limitations of its calculations. |
| FR-410 | Users shall be able to revise and resubmit insurance plan information. |
| FR-411 | The calculator shall annualize premiums according to the selected payment frequency. |
| FR-412 | The medical expense slider shall support values between $0 and $100,000 in increments of $100, with an initial value of $0. |
| FR-413 | For family coverage, the calculator shall allow users to switch between individual and combined household expense scenarios. |
| FR-414 | The calculator shall apply individual deductible and out-of-pocket maximum values to individual expense scenarios. |
| FR-415 | The calculator shall apply family deductible and out-of-pocket maximum values to household expense scenarios using a simplified aggregate calculation model. |
| FR-416 | The calculator shall apply the full annual premium of the selected coverage regardless of the expense scenario. |
| FR-417 | Estimated medical out-of-pocket expenses shall not exceed the applicable out-of-pocket maximum within the supported calculation model. |
| FR-418 | In comparison mode, both plans shall be evaluated using the same medical expense amount and expense scope. |
| FR-419 | The calculator shall identify the lower estimated annual cost or indicate when both plans have equal estimated annual costs. |
| FR-420 | Changing the expense scope shall immediately update applicable calculation results without requiring additional form submission. |
| FR-421 | Editing submitted plan information or changing calculator modes shall invalidate displayed results until successful resubmission. |
| FR-422 | The calculator shall visually distinguish annual premiums from estimated medical out-of-pocket expenses using simple cost breakdowns. |
| FR-423 | The calculator shall communicate that annual premiums plus the applicable out-of-pocket maximum represent a modeled financial exposure benchmark rather than an absolute spending limit. |

### 2.5 Common Scenarios

| ID | Requirement |
|---|---|
| FR-501 | The application shall provide a dedicated Common Scenarios page. |
| FR-502 | The page shall present relatable examples of individuals navigating health insurance decisions. |
| FR-503 | Scenarios shall describe relevant life circumstances, available options, financial considerations, and decision-making rationale. |
| FR-504 | Scenarios shall include illustrative financial examples where appropriate. |
| FR-505 | Scenarios shall incorporate friendly language and illustrations. |
| FR-506 | Fictional or hypothetical scenarios shall be clearly identified as such. |
| FR-507 | Scenarios shall communicate that individual circumstances may produce different outcomes. |
| FR-508 | Scenarios shall provide navigation to relevant educational content and the calculator. |

### 2.6 Supporting Information

| ID | Requirement |
|---|---|
| FR-601 | The application shall provide information about its creator, purpose, and mission. |
| FR-602 | The application shall reference authoritative sources for educational content. |
| FR-603 | The application shall document its financial calculation methodology. |
| FR-604 | The application shall provide a privacy statement. |
| FR-605 | The application shall communicate that its creator is not a healthcare or insurance professional. |
| FR-606 | The application shall communicate that its content and calculations are educational and do not constitute professional advice. |

## 3. Non-Functional Requirements

### 3.1 Usability and Readability

| ID | Requirement |
|---|---|
| NFR-101 | The application shall assume no prior knowledge of health insurance. |
| NFR-102 | Application copy shall use friendly, conversational, and approachable language. |
| NFR-103 | Unfamiliar terminology shall be explained using plain language and relatable examples. |
| NFR-104 | The application shall maintain a consistent visual identity throughout its pages. |
| NFR-105 | The application shall prioritize simplicity and minimize unnecessary user interactions. |

### 3.2 Accessibility

| ID | Requirement |
|---|---|
| NFR-201 | The application shall target WCAG 2.2 Level AA accessibility standards. |
| NFR-202 | Interactive elements shall be operable using a keyboard. |
| NFR-203 | Form inputs shall have accessible labels. |
| NFR-204 | Informative illustrations shall include appropriate alternative text. |
| NFR-205 | Text and interactive elements shall maintain sufficient color contrast. |
| NFR-206 | Information shall not be communicated through color alone. |
| NFR-207 | Validation messages shall be associated with their corresponding form fields and accessible to assistive technologies. |

### 3.3 Performance

| ID | Requirement |
|---|---|
| NFR-301 | Calculator results shall update without requiring a page reload. |
| NFR-302 | Financial calculations shall be performed locally within the user's browser. |
| NFR-303 | Application assets shall be optimized to minimize unnecessary loading times. |

### 3.4 Privacy and Security

| ID | Requirement |
|---|---|
| NFR-401 | The application shall not require user registration or authentication. |
| NFR-402 | The application shall not require personally identifiable information. |
| NFR-403 | User-entered insurance information shall not be transmitted to a remote server. |
| NFR-404 | The application shall not collect or store medical records. |
| NFR-405 | The deployed application shall be served over HTTPS. |
| NFR-406 | User-entered insurance information shall be maintained temporarily in application memory. |
| NFR-407 | The application shall not persist user-entered insurance information through cookies, local storage, session storage, or remote databases. |
| NFR-408 | Refreshing the application shall clear calculator information and results. |

### 3.5 Accuracy and Reliability

| ID | Requirement |
|---|---|
| NFR-501 | Financial calculations shall produce accurate results within documented assumptions. |
| NFR-502 | Invalid inputs shall not produce misleading financial results. |
| NFR-503 | Educational content shall be supported by authoritative sources. |
| NFR-504 | Financial estimates shall be clearly distinguished from guaranteed costs. |
| NFR-505 | Core calculation logic shall be verified through automated unit testing. |
| NFR-506 | Financial calculations shall use integer cents to represent monetary values internally. |
| NFR-507 | Percentage-based coinsurance calculations shall be rounded to the nearest cent. |
| NFR-508 | Financial calculations shall produce deterministic results for identical validated inputs. |
| NFR-509 | Core application workflows shall be verified through automated end-to-end testing. |
| NFR-510 | The application shall reject nonfinite numeric values and values outside safe numeric calculation limits. |

### 3.6 Maintainability

| ID | Requirement |
|---|---|
| NFR-601 | The application shall maintain separation between presentation components and financial calculation logic. |
| NFR-602 | The application shall utilize reusable components where appropriate. |
| NFR-603 | Source code shall follow consistent naming and organizational conventions. |
| NFR-604 | Project documentation shall be maintained alongside the source code. |
| NFR-605 | Application changes shall be tracked using Git version control. |
| NFR-606 | Financial calculation and validation logic shall remain independent of React and browser-specific APIs. |
| NFR-607 | Application development shall follow the GitHub Flow branching and pull request workflow. |

### 3.7 Responsive Design and Compatibility

| ID | Requirement |
|---|---|
| NFR-701 | The application shall support desktop, tablet, and mobile screen sizes. |
| NFR-702 | Application content shall adapt to different viewport dimensions. |
| NFR-703 | Core functionality shall operate in current versions of Chrome, Safari, Firefox, and Edge. |

## 4. System Constraints

- The application shall be free to use.
- The initial release shall utilize a client-side single-page application architecture.
- The initial release shall not require a backend server or database.
- Insurance plan information shall be manually entered.
- The calculator shall support a maximum of two plans simultaneously.
- The application shall not sell insurance or facilitate insurance enrollment.
- The application shall not automatically determine Marketplace subsidy eligibility.
- The application shall remain independent of insurance providers.
- Financial calculations shall use United States dollars.
- Financial calculations shall represent a single plan year.
- The calculator shall model covered, in-network allowed medical expenses subject to the applicable deductible, coinsurance percentage, and out-of-pocket maximum.
- Household expense scenarios shall use simplified aggregate family limits.
- The calculator shall not model the distribution of medical expenses among individual family members.

### 4.1 Calculation Exclusions

The initial calculator shall not incorporate the following variables:

- Copays.
- Policy-specific embedded deductible rules.
- HSA or FSA contributions.
- Tax savings.
- Hospital indemnity insurance.
- Prescription-specific coverage.
- Out-of-network expenses.
- Noncovered services.
- Balance billing.
- Other policy-specific exceptions.

Relevant excluded concepts shall be addressed through educational content where appropriate.

### 4.2 Technology Constraints

The initial application shall utilize the following technology stack:

| Technology | Responsibility |
|---|---|
| React | User interface |
| TypeScript | Application programming and type safety |
| Vite | Development tooling and production builds |
| Tailwind CSS | Styling and responsive design |
| React Router | Client-side navigation |
| Vitest | Unit and integration testing |
| Playwright | End-to-end testing |
| Node.js | Development runtime |
| npm | Package management |
| Git | Version control |
| GitHub | Source code hosting |
| Vercel | Application hosting and deployment |

The initial release shall not require external state management libraries, charting libraries, backend services, databases, authentication services, or containerization.

Detailed technical implementation decisions are documented in `docs/system-design.md`.

## 5. Outstanding Design Decisions

The following details remain subject to further design and development:

- Educational content organization and information architecture.
- Illustration style and visual identity.
- Typography and color palette.
- Page layouts and responsive component behavior.
- Detailed user interaction and accessibility design.
- Quantitative performance targets.
- Final dependency versions.

## 6. Requirements Management

Each requirement shall maintain a unique identifier to support traceability throughout application development and testing.

Requirements may be revised as the project evolves. Changes shall be documented and tracked through version control.

## 7. Revision History

| Version | Date | Description |
|---|---|---|
| 1.0 | November 25, 2026 | Initial functional and non-functional requirements established during project planning. |
| 1.1 | November 26, 2026 | Updated requirements to reflect system architecture, technology selection, individual and family coverage, calculation rules, input validation, state management, privacy, and testing strategies. |