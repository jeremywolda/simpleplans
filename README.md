# SimplePlans

**Healthcare is complicated. Choosing a plan shouldn't be.**

## Overview

SimplePlans is a free, accessible web application designed to help individuals and families understand health insurance, compare available healthcare plans, and make informed financial decisions.

The application combines plain-language educational resources with interactive financial modeling to simplify the process of evaluating health insurance options.

## Motivation

Navigating the American healthcare system can be overwhelming. Unfamiliar terminology, complicated insurance policies, and unclear financial implications make choosing a health insurance plan unnecessarily difficult.

SimplePlans was created to address this problem by making health insurance education and comparison tools accessible to everyone, regardless of their education, income, or previous knowledge of healthcare.

## Intended Audience

- Individuals evaluating employer-sponsored health insurance.
- Individuals navigating HealthCare.gov and Marketplace insurance options.
- Young adults selecting health insurance for the first time.
- Self-employed individuals and independent contractors.
- Families anticipating significant healthcare expenses.

## Planned Features

- **Health Insurance Education:** Beginner-friendly educational resources explaining how health insurance works.
- **Plan Comparison:** Side-by-side comparisons of manually entered insurance plans.
- **Scenario Modeling:** Estimated annual healthcare costs under various circumstances.
- **Financial Visualizations:** Interactive charts illustrating potential expenses, savings, and financial risk.
- **Healthcare Glossary:** Searchable definitions of common healthcare terminology.
- **Frequently Asked Questions:** Plain-language answers to common health insurance questions.
- **Marketplace Education:** Resources for understanding and navigating HealthCare.gov.

## Proposed Technology Stack

| Technology | Purpose |
|---|---|
| React | User interface |
| TypeScript | Application logic and type safety |
| Vite | Development and build tooling |
| React Router | Client-side navigation |
| Tailwind CSS | Styling and responsive design |
| Recharts | Data visualization |
| Vitest | Unit testing |
| Playwright | End-to-end testing |
| GitHub | Version control and project management |
| Vercel | Application hosting and deployment |

## Architecture

SimplePlans is designed as a client-side web application. Insurance plan information will be manually entered by users, and financial calculations will be performed locally within their browsers.

The initial release will not require:

- A backend server.
- A database.
- User accounts or authentication.
- Remote storage of personal information.
- Integration with insurance providers.
- A database of existing insurance plans.

This approach prioritizes privacy, simplicity, accessibility, and maintainability.

## Project Documentation

Detailed project documentation will be maintained in the `docs/` directory throughout development.

## Development Status

SimplePlans is currently in the planning and requirements analysis phase.

## Disclaimer

SimplePlans is intended for educational and informational purposes. Financial projections are estimates based on user-provided information and documented assumptions. Users should verify coverage details and costs with their insurance providers before making enrollment decisions.