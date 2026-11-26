---
title: "Ethics"
path: not-for-profit
topic_order: 1
author: "Waleed"
status: draft
ai_use: "Paraphrasing"
---

## Introduction

### Doing Good, Responsibly

When developing software for a not-for-profit, research or healthcare organisation, success is not always measured by revenue or user growth. The goal might be to help someone receive appropriate care, make essential services more accessible or give professionals more time to focus on people instead of paperwork. That sense of purpose can make the work rewarding, but it does not make every technical decision automatically ethical.

Imagine a hospital application that shows staff the information they need within seconds. That sounds like an improvement. Now imagine the same information is visible to an unauthorised visitor, or a record is out of date when a clinician needs it. The system can be useful and still cause harm.

The **ACM Code of Ethics** asks computing professionals to contribute to society, avoid harm, be fair and respect privacy [1]. For software engineers working on services that people depend on, ethics cannot be a final checkbox before release. It needs to shape requirements, architecture, interface design, testing and day-to-day decisions.

**By the end of this section, you should be able to** identify ethical risks in mission-driven software, explain competing responsibilities and justify practical safeguards using real engineering scenarios.

## Key Concepts

### 1. Privacy, confidentiality and the need to know

Patient information can include medical conditions, dietary requirements and mobility needs. Some details are essential for safe care, but not everyone needs access to everything. **Data minimisation** means limiting personal data to what is necessary for a defined purpose, while **privacy by design and by default** means considering those limits from the start [2]. The Irish Data Protection Commission also advises that staff access should reflect the data they need to perform their duties [3].

For developers, that can influence role permissions, what is visible on a shared screen, session timeouts, audit logs and how much information an interface reveals by default. Importantly, these decisions should be made with the hospital's authorised clinical and information-governance teams—not by developers guessing what each job title should see. Privacy also does not mean blocking information that a professional legitimately needs to provide safe care.

### 2. Safety, accuracy and availability

We usually think about data security as keeping information secret. In healthcare, **integrity** and **availability** matter too. An allergy recorded incorrectly, an outdated assessment or an unavailable system could affect care even without a conventional data breach. The GDPR includes accuracy and security among its core data-protection principles [4].

Engineering responses might include clear record timestamps, validation, traceable changes, sensible recovery procedures and a way to flag conflicting information for review. These are examples of safeguards to consider, not a claim that every healthcare application requires the same architecture. The central question is whether staff can rely on the right information at the right time.

### 3. Fairness, accessibility and inclusion

A system can be secure and efficient yet still fail people who struggle to use it. Consider a digital pre-assessment form with confusing instructions, controls that cannot be used with a keyboard, or a process that assumes every patient is confident using technology. The result could be that some users complete it easily while others need additional help or are excluded.

Accessibility is therefore an ethical concern as well as a design concern. The W3C's **Web Content Accessibility Guidelines (WCAG) 2.2** provide practical guidance for making web content more accessible [5]. In mission-driven projects, involving the people who will actually use the service can reveal problems that a technically successful test may miss. Keeping an appropriate assisted or alternative route available may also matter, depending on the service.

### 4. Ethical trade-offs: what should guide a decision?

There is rarely a perfect option. A quick sign-in process may help staff access urgent information, but a poorly designed shortcut could expose private records. Two useful ways to reason about this are:

- **Consequences:** What benefits and harms are likely for patients, staff and the wider service? Which groups carry the risks, and how serious could those risks be?
- **Duties and rights:** What responsibilities must be respected even when a shortcut would save time—for example, confidentiality, honesty, fairness and professional care?

A third perspective is **care**: pay particular attention to people who may be vulnerable or dependent on the service. In practice, these perspectives work best together. A proposal should not be judged only by how many minutes it saves or only by whether it is technically possible.

### 5. Accountability is part of the engineer's job

A developer might not have the final say over clinical policy or hosting arrangements, but that does not remove professional responsibility. If a requirement creates a foreseeable risk, the engineer should raise it, explain the trade-off, seek appropriate clinical and security input, and document the decision. The ACM Code places professional responsibility on computing practitioners even when decisions are difficult [1].

A useful habit is to ask: **Who benefits? Who could be harmed? What do we still not know? Who has the authority and expertise to approve the risk?** These questions are especially important when tight budgets, urgent deadlines or pressure to innovate make a shortcut tempting.

## Case Study

The following examples draw on projects I worked on during my internship at the **Rapid Innovation Unit**. They describe the purpose of the projects and the ethical questions they raised for me. Where specific safeguards are discussed, they are proposed design considerations rather than claims about what was implemented or deployed.

### Case Study 1: The patient bedside tablet — care versus confidentiality

One project involved a **patient bedside tablet application** intended to make important information more accessible. It included details such as medical conditions, dietary requirements and mobility needs, helping healthcare staff understand individual care requirements.

This immediately raises a design dilemma. Making information easy to find can support better care; making *all* information easy for *everyone* to see can undermine patient privacy. For example, catering staff may need to know whether a patient has an allergy, but would normally have no reason to browse unrelated medical history. Likewise, a visitor being physically near the tablet does not automatically mean they are authorised to view confidential records.

As a software engineer, I would begin by separating **what information exists** from **what each user needs for a particular task**. A possible design might use role-appropriate views, an appropriately protected screen when unattended, and a process for authorised access in situations where clinical needs change. These choices would need review by the relevant hospital teams, because a simplistic restriction could also prevent someone from providing safe care.

This example illustrates a wider ethical point: **a more convenient interface is not necessarily a better interface unless it protects the people whose information it displays.**

### Case Study 2: GyneConnect — efficiency versus reliability and trust

Another project was **GyneConnect**, a digital pre-assessment form application for gynaecological surgery. Hospital staff explained that paper documents could be misplaced and that collecting signatures and approvals across departments took time. The aim was to centralise the process so documentation would be easier to manage and administrative work could move more efficiently.

Listening to staff was important: it revealed real problems that would not be obvious from a list of technical requirements alone. But turning a paper workflow into a digital one also changes the risks. If a form is edited, who can see the new version? How can staff tell whether an approval is complete? What should happen if two people update information at different times? Poorly handled answers could leave staff relying on incomplete or outdated details.

Both internship projects also involved caution around cloud hosting and protecting patient information. This concern was understandable in the context of the **May 2021 HSE ransomware attack**, which disrupted health services and was later examined in an independent review [6]. Offline applications and private on-premises hosting were important options in discussions around these projects.

However, **cloud is not automatically unsafe, and offline or on-premises systems are not automatically safe**. Cloud services still require careful assessment of access, provider responsibilities and continuity. On-premises systems require maintenance, patching and recovery arrangements. Offline-first workflows can keep parts of a service usable when connectivity fails, but may introduce risks from local storage and conflicting updates.

For a hospital, the ethical question is not simply *“Where should we host this?”* It is *“Which arrangement can we operate responsibly, protect appropriately and recover when something goes wrong?”* The answer depends on the hospital's actual needs, risk assessment and technical capacity.

### What these projects taught me

The bedside tablet made me think about **who should see information**. GyneConnect made me think about **whether information stays accurate, secure and usable throughout a workflow**. Both showed me why listening to healthcare staff matters, but also why software teams need to consider patients and other affected people who might not be in the room when requirements are discussed.

## Exercise

### The Busy-Ward Authentication Dilemma

**Scenario (fictional):** Your team is testing a bedside application. A hospital manager asks you to remove the sign-in step because staff say it slows them down during busy shifts. You understand the frustration: delays can interfere with work. But the tablet may be visible to people who are not authorised to see private patient information.

**Your task:** Write a short recommendation to the team. Address the following questions:

1. **Who is affected?** Consider the patient, clinical staff, visitors and the organisation.
2. **What are the competing duties?** Explain the case for quick access *and* the case for confidentiality and safety.
3. **What would you propose?** Could a faster authorised sign-in, different information views, an unattended-screen lock or another approved approach reduce both risks?
4. **How would you test it?** Who should be consulted, and what evidence would show that the solution works in a busy ward?

**Compare your thinking with this example response:** Rather than removing authentication for everyone, I would first observe the workflow with staff and involve the hospital's clinical and information-governance teams. I would explore a quicker approved sign-in method and limit what remains visible on an unattended screen. I would then test whether authorised staff can retrieve necessary information promptly without increasing inappropriate access. I would document any remaining risks and seek the appropriate approval before release.

This is **one defensible response, not the only correct answer**. The aim is to explain your reasoning and avoid treating patient privacy and staff usability as an either/or choice.

## Interactive Element (optional)

### Activity 1 — Who Should Have Access?

**Try the bedside tablet challenge.** Choose a role—**doctor, nurse, catering staff or visitor**—then select which categories of fictional patient information that person should be allowed to view. Submit your choices to receive feedback explaining what may be needed for safe care and what could unnecessarily expose private information.

**Example:** You select *catering staff* and allow access to dietary requirements **and** the patient's full medical history. Feedback explains that allergy information can be important for meal safety, but unrelated medical details should not normally be disclosed. Try a different role to see why the answer changes with the task and circumstances. These are educational scenarios, not real hospital access rules.

### Activity 2 — The Healthcare Hosting Dilemma

**Make a deployment decision for a fictional hospital pre-assessment system.** Choose **managed cloud hosting, private on-premises hosting or an offline-first approach**. You then face a complication associated with your choice and decide how to respond.

**Example:** You choose *offline-first*. Two staff members make different updates while one device is disconnected. Should the system silently overwrite one record, ignore the conflict, or flag it for authorised review? Feedback explains why protecting the accuracy of clinical information matters alongside confidentiality and availability.

There is **no universally safest hosting option**. The challenge is to recognise the trade-offs, respond to a realistic problem and identify safeguards that make your recommendation responsible.

## Additional Resources

### Practical questions to take into your next software project

Before a team commits to a feature or architecture, ask:

- **Purpose:** What specific patient or staff need are we solving?
- **Access:** Who genuinely needs each category of information, and why?
- **Harm:** What could happen if information is exposed, incorrect or unavailable?
- **Inclusion:** Can people with different needs actually use the service?
- **Accountability:** Who will review the risks, approve decisions and maintain the safeguards?

**The key takeaway:** Building software that makes someone's job easier is valuable. Building software that people can trust—and that stays safe when real-world conditions are messy—is just as important.

### References (IEEE)

[1] Association for Computing Machinery, “ACM Code of Ethics and Professional Conduct,” 2018. [Online]. Available: https://www.acm.org/code-of-ethics. [Accessed: Nov. 26, 2026].

[2] Data Protection Commission, “Data Protection by Design and by Default.” [Online]. Available: https://www.dataprotection.ie/en/organisations/know-your-obligations/data-protection-design-and-default. [Accessed: Nov. 26, 2026].

[3] Data Protection Commission, “Data Security Guidance.” [Online]. Available: https://www.dataprotection.ie/en/organisations/know-your-obligations/data-security-guidance. [Accessed: Nov. 26, 2026].

[4] European Parliament and Council of the European Union, “Regulation (EU) 2016/679 (General Data Protection Regulation),” *Official Journal of the European Union*, vol. L119, pp. 1–88, 2016. [Online]. Available: https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng. [Accessed: Nov. 26, 2026].

[5] World Wide Web Consortium, “Web Content Accessibility Guidelines (WCAG) 2.2,” W3C Recommendation, Oct. 5, 2023. [Online]. Available: https://www.w3.org/TR/WCAG22/. [Accessed: Nov. 26, 2026].

[6] Health Service Executive, *Conti cyber attack on the HSE – Independent post incident review*, Dec. 2021. [Online]. Available: https://about.hse.ie/publications/conti-cyber-attack-on-the-hse-independent-post-incident-review/. [Accessed: Nov. 26, 2026].
