# Ethics in Not-for-Profit and Research Organisations

Why Does Ethics Matter?

When developing software for a not-for-profit or healthcare organisation, success isn't always measured by revenue or the number of users. Often, the goal is to improve people's lives, support healthcare professionals, or make essential services more efficient.

However, having good intentions doesn't automatically mean that every technical decision is ethical. Software engineers must consider how their systems affect people's privacy, safety and wellbeing. The ACM Code of Ethics highlights the responsibility of computing professionals to contribute to society, avoid harm and respect privacy (Association for Computing Machinery 2018).

Patient Care vs Patient Privacy

During my internship at the Rapid Innovation Unit, I worked on a patient bedside tablet application designed to make important patient information more accessible. This included medical conditions, dietary requirements and mobility needs, helping healthcare staff understand patients' individual care requirements.

While making this information readily available could improve care, it also raises an ethical question: who should be allowed to see what?

For example, catering staff may need to know about a patient's food allergies, but would they need access to their entire medical history?

This relates to the principle of data minimisation, which encourages organisations to collect and use only the personal information necessary for a specific purpose. The Data Protection Commission (n.d.) emphasises incorporating privacy protections into systems from the beginning rather than treating them as an afterthought.

Interactive Activity 1 – Who Should Have Access?

Based on: Patient Bedside Tablet Application
Format: Interactive role-based access simulator

Scenario

You're developing a bedside tablet application displaying a patient's medical conditions, dietary requirements and mobility needs. Different hospital staff need different information, but giving everyone full access could compromise patient privacy.

How It Works

The reader selects a role: Doctor, Nurse, Catering Staff or Visitor.

A fictional patient information screen appears with categories such as medical history, dietary requirements and mobility needs.

The reader selects which information their chosen role should access.

Clicking Check My Decision displays feedback explaining any privacy or patient-safety concerns.

The reader can retry or choose another role.

Example Interaction

Selected role: Catering Staff

Reader's choice: Allow access to dietary requirements and full medical history.

Feedback:

"Good decision including dietary requirements, as catering staff need allergy information to prepare meals safely. However, full medical history is unnecessary for their responsibilities and could expose confidential patient information."

Key learning: Apply data minimisation and least-privilege principles while ensuring information needed for safe patient care remains accessible.

Web Team – Implementation

Use selectable role cards and information checkboxes.

Display a mock bedside tablet with fictional patient information.

Compare selections against predefined role-specific recommendations and show contextual feedback.

Include Try Again and Choose Another Role buttons.

This can be implemented using a reusable React component and local state, without a backend.

Innovation vs Responsibility

Another project I worked on was GyneConnect, a digital pre-assessment form application for gynaecological surgery.

Hospital staff described how paper-based documentation could be misplaced and how obtaining signatures and approvals across different departments was time-consuming. GyneConnect aimed to centralise this process, making documentation easier to manage and reducing unnecessary administrative work.

However, improving efficiency also meant considering how sensitive information would be stored and protected.

Both projects faced concerns around cloud hosting and data security. These concerns were particularly understandable given the ransomware attack on Ireland's HSE in May 2021, which significantly disrupted healthcare services (Health Service Executive, 2021).

Offline applications and privately hosted on-premises systems were therefore considered important options. However, neither approach automatically guarantees security. Offline systems can create difficulties with updates and synchronisation, while on-premises hosting still requires maintenance, access controls and reliable backups.

The ethical responsibility is to assess these trade-offs rather than simply choosing the quickest or easiest technical solution.

Interactive Activity 2 – The Healthcare Hosting Dilemma

Based on: GyneConnect – Gynaecological Surgery Pre-Assessment Application
Format: Branching decision-making simulator

Scenario

You're developing a hospital pre-assessment application to replace slow paper-based documentation. The hospital wants a more efficient system but is concerned about sensitive patient information, cybersecurity and system availability, particularly following the 2021 HSE cyberattack.

How It Works

The reader chooses between three hosting approaches:

Cloud Hosting: Managed infrastructure, but requires assessment of provider security, data protection and connectivity.

On-Premises Hosting: Greater direct infrastructure control, but requires internal maintenance, backups and security management.

Offline-First: Can operate without continuous connectivity, but introduces local data storage and synchronisation risks.

After choosing, the reader encounters an unexpected problem specific to their decision.

They select how to respond and receive feedback explaining the technical and ethical consequences.

Example Interaction

Selected approach: Offline-First

Unexpected problem: Two hospital staff members update the same patient's assessment while one device is offline, creating conflicting records.

What should the system do?

A. Automatically overwrite the older record.
B. Flag the conflicting changes for an authorised staff member to review.
C. Keep both records without notifying anyone.

Recommended response: B.

Feedback:

"Flagging the conflict allows the changes to be reviewed without silently losing potentially important medical information. Automatically overwriting records could affect patient safety."

Key learning: No hosting option is automatically the safest. Ethical engineering involves balancing confidentiality, availability, reliability and maintainability.

Web Team – Implementation

Display three selectable hosting cards with icons.

Each selection opens a different predefined problem with three response options.

Show immediate feedback explaining the consequences.

Allow readers to try different hosting approaches.

Use a simple React component with scenario data stored in a JavaScript object. No backend or real patient data is required.


The Responsibility of a Software Engineer

Ethics is not just about following regulations. It also involves asking whether a solution is fair, necessary and safe for the people affected by it.

A useful approach is to consider both the likely consequences of a decision and the professional duties involved. For healthcare software, this means asking who benefits, who might be harmed and what safeguards are needed before deployment.

The key takeaway: Building software that makes someone's job easier is valuable, but building software that people can trust is equally important.

References

Association for Computing Machinery (2018) ACM code of ethics and professional conduct, available: https://www.acm.org/code-of-ethics [accessed 19 November 2026].

Data Protection Commission (n.d.) Data protection by design and by default, available: https://dataprotection.ie/en/organisations/know-your-obligations/data-protection-design-and-default [accessed 19 November 2026].

Health Service Executive (2021) Conti cyber attack on the HSE: independent post incident review, available: https://about.hse.ie/publications/conti-cyber-attack-on-the-hse-independent-post-incident-review/ [accessed 19 November 2026].
