# Ethics in Not-for-Profit and Research Organisations

Why Does Ethics Matter?

When developing software for a not-for-profit or healthcare organisation, success isn't always measured by revenue or the number of users. Often, the goal is to improve people's lives, support healthcare professionals, or make essential services more efficient.

However, having good intentions doesn't automatically mean that every technical decision is ethical. Software engineers must consider how their systems affect people's privacy, safety and wellbeing. The ACM Code of Ethics highlights the responsibility of computing professionals to contribute to society, avoid harm and respect privacy (Association for Computing Machinery 2018).

Patient Care vs Patient Privacy

During my internship at the Rapid Innovation Unit, I worked on a patient bedside tablet application designed to make important patient information more accessible. This included medical conditions, dietary requirements and mobility needs, helping healthcare staff understand patients' individual care requirements.

While making this information readily available could improve care, it also raises an ethical question: who should be allowed to see what?

For example, catering staff may need to know about a patient's food allergies, but would they need access to their entire medical history?

This relates to the principle of data minimisation, which encourages organisations to collect and use only the personal information necessary for a specific purpose. The Data Protection Commission (n.d.) emphasises incorporating privacy protections into systems from the beginning rather than treating them as an afterthought.

[Interactive Activity 1 – Who Needs Access?]

Match different hospital roles (doctor, nurse, catering staff and visitor) with the information they should be permitted to access. Reveal an explanation of each decision, considering patient confidentiality and care requirements.

Innovation vs Responsibility

Another project I worked on was GyneConnect, a digital pre-assessment form application for gynaecological surgery.

Hospital staff described how paper-based documentation could be misplaced and how obtaining signatures and approvals across different departments was time-consuming. GyneConnect aimed to centralise this process, making documentation easier to manage and reducing unnecessary administrative work.

However, improving efficiency also meant considering how sensitive information would be stored and protected.

Both projects faced concerns around cloud hosting and data security. These concerns were particularly understandable given the ransomware attack on Ireland's HSE in May 2021, which significantly disrupted healthcare services (Health Service Executive, 2021).

Offline applications and privately hosted on-premises systems were therefore considered important options. However, neither approach automatically guarantees security. Offline systems can create difficulties with updates and synchronisation, while on-premises hosting still requires maintenance, access controls and reliable backups.

The ethical responsibility is to assess these trade-offs rather than simply choosing the quickest or easiest technical solution.

[Interactive Activity 2 – The Hosting Dilemma]

You are developing a hospital pre-assessment application. Would you recommend cloud hosting, private on-premises hosting or an offline-first system? Consider confidentiality, availability, maintenance and recovery before making your decision.

The Responsibility of a Software Engineer

Ethics is not just about following regulations. It also involves asking whether a solution is fair, necessary and safe for the people affected by it.

A useful approach is to consider both the likely consequences of a decision and the professional duties involved. For healthcare software, this means asking who benefits, who might be harmed and what safeguards are needed before deployment.

The key takeaway: Building software that makes someone's job easier is valuable, but building software that people can trust is equally important.

References

Association for Computing Machinery (2018) ACM code of ethics and professional conduct, available: https://www.acm.org/code-of-ethics [accessed 19 November 2026].

Data Protection Commission (n.d.) Data protection by design and by default, available: https://dataprotection.ie/en/organisations/know-your-obligations/data-protection-design-and-default [accessed 19 November 2026].

Health Service Executive (2021) Conti cyber attack on the HSE: independent post incident review, available: https://about.hse.ie/publications/conti-cyber-attack-on-the-hse-independent-post-incident-review/ [accessed 19 November 2026].
