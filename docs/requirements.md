# SimplePlans — Software Requirements Specification

**Version:** 1.0  
**Date:** November 25, 2026  
**Status:** Initial Draft

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

### 2.3 The Calculator — Plan Input

| ID | Requirement |
|---|---|
| FR-301 | The calculator shall support single-plan analysis and two-plan comparison. |
| FR-302 | The calculator shall collect insurance plan information through a traditional form. |
| FR-303 | The calculator shall provide plain-language explanations alongside input fields. |
| FR-304 | The calculator shall allow users to manually enter and edit insurance plan information. |
| FR-305 | The calculator shall support entry of plan names, premiums, premium payment frequencies, deductibles, coinsurance percentages, and out-of-pocket maximums. |
| FR-306 | The calculator shall validate required inputs upon submission. |
| FR-307 | The calculator shall provide understandable feedback when invalid or incomplete information is submitted. |
| FR-308 | The calculator shall preserve entered plan information when switching between calculator modes during the current session. |
| FR-309 | The calculator shall provide a Calculate button to submit plan information. |

### 2.4 The Calculator — Results and Expense Simulation

| ID | Requirement |
|---|---|
| FR-401 | The calculator shall display initial results following successful form submission. |
| FR-402 | Initial results shall include annual premiums, deductibles, out-of-pocket maximums, and the sum of annual premiums and out-of-pocket maximums. |
| FR-403 | The calculator shall display an interactive horizontal medical expense slider beneath the initial results. |
| FR-404 | The slider shall allow users to increase or decrease anticipated annual covered medical expenses. |
| FR-405 | The calculator shall dynamically update estimated medical out-of-pocket expenses as the slider value changes. |
| FR-406 | The calculator shall display annual premiums and estimated medical out-of-pocket expenses separately. |
| FR-407 | The calculator shall display the combined estimated annual cost of each plan. |
| FR-408 | In comparison mode, the calculator shall display both plans' results and their estimated cost difference. |
| FR-409 | The calculator shall communicate the assumptions and limitations of its calculations. |
| FR-410 | Users shall be able to revise and resubmit insurance plan information. |

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

### 3.5 Accuracy and Reliability

| ID | Requirement |
|---|---|
| NFR-501 | Financial calculations shall produce accurate results within documented assumptions. |
| NFR-502 | Invalid inputs shall not produce misleading financial results. |
| NFR-503 | Educational content shall be supported by authoritative sources. |
| NFR-504 | Financial estimates shall be clearly distinguished from guaranteed costs. |
| NFR-505 | Core calculation logic shall be verified through automated unit testing. |

### 3.6 Maintainability

| ID | Requirement |
|---|---|
| NFR-601 | The application shall maintain separation between presentation components and financial calculation logic. |
| NFR-602 | The application shall utilize reusable components where appropriate. |
| NFR-603 | Source code shall follow consistent naming and organizational conventions. |
| NFR-604 | Project documentation shall be maintained alongside the source code. |
| NFR-605 | Application changes shall be tracked using Git version control. |

### 3.7 Responsive Design and Compatibility

| ID | Requirement |
|---|---|
| NFR-701 | The application shall support desktop, tablet, and mobile screen sizes. |
| NFR-702 | Application content shall adapt to different viewport dimensions. |
| NFR-703 | Core functionality shall operate in current versions of Chrome, Safari, Firefox, and Edge. |

## 4. System Constraints

- The application shall be free to use.
- The initial release shall utilize a client-side architecture.
- The initial release shall not require a backend server or database.
- Insurance plan information shall be manually entered.
- The calculator shall support a maximum of two plans simultaneously.
- The application shall not sell insurance or facilitate insurance enrollment.
- The application shall not automatically determine Marketplace subsidy eligibility.
- The application shall remain independent of insurance providers.

## 5. Outstanding Design Decisions

The following details will be finalized during system design:

- Individual and family coverage calculation rules.
- Supported copay and supplemental insurance variables.
- Medical expense slider range and increments.
- Financial calculation formulas and rounding conventions.
- Exact calculator input validation rules.
- Educational content organization.
- Illustration style, typography, and color palette.
- Quantitative performance targets.
- Final technology stack and dependencies.

## 6. Requirements Management

Each requirement shall maintain a unique identifier to support traceability throughout application development and testing.

Requirements may be revised as the project evolves. Changes shall be documented and tracked through version control.