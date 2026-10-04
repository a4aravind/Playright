# Awesome QA Public Website Test Plan

## 1. Test Plan ID and Title

| Field | Value |
|---|---|
| Test Plan ID | AQA-TP-001 (locally assigned) |
| Title | Awesome QA Public Website Test Plan |
| Version | 0.1 |
| Status | Draft for stakeholder review |
| Prepared | 2026-10-04 |

## 2. Objective and References

### Objective

Assess whether a public visitor can navigate and use the agreed public pages, find accurate and consistent information, and access the Contact page across the supported browsers and screen sizes. Verify observable behavior against owner-approved requirements when those are supplied. This plan describes intended testing; it does not claim that tests have been executed.

### References and observed context

- Public website: [https://awesomeqa.com/](https://awesomeqa.com/)
- Public pages in scope:
  - [Home](https://awesomeqa.com/)
  - [About](https://awesomeqa.com/about/)
  - [Offerings](https://awesomeqa.com/offerings/)
  - [Contact](https://awesomeqa.com/contact/)
  - [Terms and Conditions](https://awesomeqa.com/terms-and-conditions/)
  - [Privacy Policy](https://awesomeqa.com/privacy-policy/)
  - [Cancellation and Refund](https://awesomeqa.com/cancellation-and-refund/)
  - [Shipping and Delivery](https://awesomeqa.com/shipping-and-delivery/)
- The public homepage navigation links to the primary informational pages and policy pages listed above. The homepage promotes education/course content; the Offerings and Contact pages include a call to discuss software testing and automation needs.
- The policy page content includes statements about digital goods, registration, privacy, and shipping. These observations identify candidate coverage only; they are not confirmed business requirements.
- Source template: `04_RICE_POT_Generic_QA_Template.md`, Test Plan profile.
- Formal product requirements, approved content, design specifications, service-level targets, and prior test results: **Not provided**.

## 3. In Scope and Out of Scope

### In scope

- Public, unauthenticated browsing of the eight pages listed in Section 2.
- Primary and footer navigation, logo/home links, page titles, headings, internal links, and browser back/forward behavior.
- Content presentation and owner-approved content checks, including consistency of policy references and calls to action.
- Contact-page interaction and client-side validation, if a form or other interactive contact method is present in the approved test environment.
- Responsive layout, keyboard operability, semantic/accessibility smoke checks, and cross-browser rendering.
- Basic page-load and broken-resource checks under an agreed non-load-test profile.
- Regression smoke coverage after website content, theme, plugin, or navigation changes.

### Out of scope

- Authenticated accounts, registration, course enrollment, course delivery, forums, and learner-only content.
- Payment processing, refunds, shipping transactions, or changes to orders.
- Administrative/CMS workflows, source-code review, API testing, and integrations not exposed through the public pages.
- Production contact submissions or other actions that send email, create records, or have external side effects unless the site owner explicitly authorizes a safe test route and test mailbox.
- Penetration testing, denial-of-service/load testing, and security testing requiring intrusive or privileged access.
- Verification of legal compliance or the legal sufficiency of policy wording.

Any proposed scope change requires stakeholder agreement before execution.

## 4. Requirements and Planned Coverage

No formal requirement IDs or acceptance criteria were supplied. The identifiers below are **locally assigned planning IDs**, based on the agreed public-page scope and observable site structure. They must be mapped to approved requirements when available.

| Local ID | Planned coverage | Principal evidence |
|---|---|---|
| AQA-LR-01 | Each agreed public page loads at its canonical route and presents the expected page identity and primary content. | Page URL, title, visible heading/content, browser console/network observations |
| AQA-LR-02 | Primary and footer navigation, logo links, calls to action, and internal policy links resolve to the intended public pages. | Link destinations, navigation outcome, response status |
| AQA-LR-03 | Contact information and any contact form or action are usable and validate input according to owner-approved rules. | Approved form specification, field behavior, confirmation or safe test-mail evidence |
| AQA-LR-04 | Public page content is readable, complete, and internally consistent with approved business content. | Approved copy/policy baseline and page-by-page comparison |
| AQA-LR-05 | The public site remains usable at agreed desktop and mobile viewports and in supported browsers. | Viewport/browser matrix, screenshots, interaction results |
| AQA-LR-06 | Core pages are operable using keyboard and expose understandable labels, headings, and link purpose for assistive technology. | Keyboard checks, accessibility audit output, manual review |
| AQA-LR-07 | Core public pages render without material functional errors, broken required resources, or performance regressions against an agreed baseline. | Network/console checks and agreed performance measurements |

These IDs are planning aids, not requirements asserted by the site owner. Policy link paths and content should be checked against owner-approved canonical destinations; any discrepancy found during test preparation should be logged for confirmation rather than silently treated as intended behavior.

## 5. Test Approach, Levels, and Types

### Approach

1. Review approved requirements, content baselines, supported-browser policy, and environment restrictions before execution.
2. Perform a page and link inventory; verify that each in-scope route loads and identify page-specific controls.
3. Run a focused smoke pass for navigation and core content, followed by page-specific functional checks.
4. Check the contact interaction only in a safe, approved environment with synthetic data.
5. Run responsive, compatibility, accessibility, and agreed performance checks.
6. Retest fixes and run the affected smoke/regression checks.

### Test levels

- **System/UI:** Primary level for public-page navigation, content rendering, form behavior, and browser-visible accessibility.
- **Integration:** Limited to observable public integrations, such as the contact submission path, only where the site owner provides a safe test endpoint and expected behavior.
- **Component/unit:** Not planned without a codebase, component specifications, or test environment.

### Test types

- Functional: page reachability, links, calls to action, browser history, form validation and feedback if present.
- Content: page identity, expected copy, policy consistency, spelling/formatting, and current contact references against an approved baseline.
- Compatibility and responsive: agreed browser/device/viewport matrix.
- Accessibility: keyboard navigation and automated/manual WCAG-oriented checks.
- Performance: repeatable page-load baseline checks, not load or stress testing.
- Regression: repeat smoke and affected page checks after fixes or content/site changes.

### Prioritization

Proposed priorities: **P0** blocks access to core public pages or creates a serious user/data risk; **P1** breaks primary navigation, a principal call to action, or an approved contact flow; **P2** affects secondary content or supported presentation; **P3** is a minor visual/content issue. Confirm the project's severity and priority conventions before execution.

## 6. Environment, Tools, Access, and Test Data

| Item | Plan / status |
|---|---|
| Target environment | Not provided. Prefer a production-equivalent staging environment. Production checks should be non-destructive and limited to owner-approved smoke coverage. |
| Access | Public visitor access is sufficient for the agreed page scope. Credentials, if later needed, must be provided through an approved secure channel and are not included in this plan. |
| Browsers | Proposed: current stable Chrome, Edge, Firefox, and Safari, subject to the owner’s support matrix. |
| Devices/viewports | Proposed: desktop and mobile layouts, including narrow and wide supported viewport sizes; exact dimensions/devices require agreement. |
| Tools | Proposed: browser developer tools, accessibility inspection tooling, and a repeatable page-performance tool. Select approved versions before execution; no tool/version was specified. |
| Test data | Synthetic data only. Use invalid/valid-format contact inputs as defined by the approved form rules. Do not use real personal data. |
| Contact side effects | Test submissions are blocked on production unless explicitly authorized. Staging must use a test mailbox or non-delivering sink if submission behavior is in scope. |
| Network/dependencies | Site availability, external fonts/media, email delivery, and third-party services may affect results; record dependencies and distinguish site defects from provider outages. |

## 7. Entry and Exit Criteria

The numerical thresholds below are **proposals requiring owner approval**, not existing service-level commitments.

### Entry criteria

- Scope and supported browser/device matrix are approved.
- Acceptance criteria and approved content/policy baselines are available, or gaps are formally accepted for the relevant checks.
- Target environment is reachable and identified; production restrictions are documented.
- Contact form behavior and safe test procedure are agreed before any submission testing.
- Test accounts or test mail sink are available if required; synthetic data is approved.
- A defect reporting channel, severity definitions, and triage contact are identified.

### Exit criteria (proposed)

- 100% of planned P0/P1 checks have an execution result and evidence where applicable.
- At least 95% of all planned checks have been executed; any exclusions or blocked checks are documented with an owner and reason.
- All executed P0/P1 checks pass, or each remaining failure has an explicit stakeholder disposition.
- No open Critical/High defects remain without written risk acceptance; lower-severity open defects have an owner and target disposition.
- Retests for agreed fixes are complete and affected regression checks have been run.
- A final summary lists coverage, outcomes, defects, deviations, and residual risks.

No performance pass threshold is set until the owner provides or approves a metric, measurement method, and test conditions.

## 8. Roles, Responsibilities, Estimates, and Schedule

Named owners and availability are **Not provided**. The following assignments and timeline are proposed for planning and require confirmation.

| Role | Responsibility | Owner |
|---|---|---|
| Product/site owner | Confirm scope, requirements, expected content, environment, and release acceptance. | Not provided |
| QA lead/tester | Prepare cases, execute approved checks, maintain evidence, report defects, and summarize results. | Not provided |
| Developer/site administrator | Support environment access, diagnose/fix defects, and provide change details. | Not provided |
| Content/legal reviewer | Confirm published copy and policy destinations; assess policy wording outside QA’s legal scope. | Not provided |

### Proposed estimate

Approximately **3–4 business days**, after entry criteria are met: up to 1 day for requirements/environment preparation, 1–2 days for execution, and up to 1 day for retest/reporting. This is a rough estimate, not a committed schedule; test volume, availability, defects, and browser matrix may change it.

## 9. Defect Management and Reporting

- Record defects in the project’s approved issue tracker; tracker is **Not provided**.
- Each defect should include a concise title, affected URL, environment/browser/viewport, preconditions, reproducible steps, expected behavior (from an approved requirement or clearly marked assumption), actual behavior, severity/priority, evidence, and reproduction status.
- Use synthetic data and redact personal or sensitive information from screenshots, logs, and attachments.
- Proposed triage cadence: daily during active execution and before exit review; confirm with stakeholders.
- Report execution progress, passed/failed/blocked/not-run counts, defect status, and risks at the agreed cadence. Cadence and recipient list are **Not provided**.
- Do not represent unexecuted checks as passed. Distinguish observed facts, expected behavior, and unconfirmed content/behavior assumptions.

## 10. Risks, Dependencies, Assumptions, and Open Questions

### Risks and dependencies

- Requirements and approved copy are unavailable, so content correctness and expected outcomes cannot be fully judged yet.
- The Contact page’s exact interactive behavior, if any, and the consequences of submitting it have not been confirmed.
- Production-only testing may be unsafe for form submissions or any action that sends messages or creates records.
- Public policy content may refer to different or outdated page paths; canonical destinations and wording require owner confirmation.
- External resources and third-party services can make results variable.
- Browser support, accessibility conformance target, and performance thresholds have not been specified.

### Assumptions

- Scope is the eight public pages listed in Section 2, with no authenticated or transactional flows.
- Tests will use a staging/test environment for any interaction with side effects.
- Any threshold or browser/device selection labeled “proposed” is subject to approval before test execution.

### Open questions

1. Which environment is approved for testing, and what production checks are permitted?
2. What are the approved expected content and policy/link destinations?
3. Does the Contact page contain a form or other submission flow, and what are its validation and success/error rules?
4. Which browsers, devices, accessibility target, and performance thresholds are supported?
5. Which issue tracker, severity convention, test owner, and release approver should be used?

## 11. Suspension and Resumption Criteria

### Suspend testing when

- A core page or the target environment is unavailable or unstable enough to invalidate results.
- A test risks sending an unapproved real message, creating a transaction, exposing personal data, or otherwise affecting a real user.
- Access control or environment configuration is incorrect, or test data is not safely isolated.
- A Critical/High issue indicates a risk of data exposure, material user harm, or widespread functional failure.
- A third-party outage prevents reliable evaluation of a dependent check.

Record the reason, affected checks, evidence, and decision owner. Do not retry an unsafe or side-effecting action until approved.

### Resume testing when

- The environment is stable and the affected dependency is restored or an approved workaround is documented.
- The site owner confirms that the test path and data are safe.
- The blocking defect is fixed or the stakeholder approves a limited continuation.
- The test plan, affected cases, and schedule are updated as needed.

## 12. Test Deliverables and Approval

### Deliverables

- Approved test plan and final requirement/risk coverage mapping.
- Detailed test cases with local IDs, preconditions, test data, steps, and observable expected results.
- Execution log and evidence for checks actually run.
- Defect records and retest results.
- Test summary with coverage, results, blocked/not-run checks, deviations, and residual risks.

Detailed test cases and execution results are future deliverables; they are not included or claimed as completed by this plan.

### Approval

| Approval role | Name | Decision/date |
|---|---|---|
| Product/site owner | Not provided | Pending |
| QA lead | Not provided | Pending |
| Release approver | Not provided | Pending |

Approval of this plan confirms agreement on its scope, proposed thresholds, environment constraints, and open questions. It does not constitute test execution or release approval.
