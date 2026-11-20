---
title: "Corruption & Governance in Not-for-Profits"
path: not-for-profit # founder | startup | mnc | not-for-profit
topic_order: 3 # 1-4, sets this topic's position within the path
author: "Your name"
status: draft # draft | review | final
ai_use: "Claude used to research sources and to draft and edit the text and quiz."
---

## Introduction

**What governance and corruption mean.** *Governance* is how an organisation is directed and held to account: who makes decisions, and who checks them. *Corruption* is "the abuse of entrusted power for private gain" ([Transparency International][ti]). The two are linked. Weak governance is usually what lets corruption happen, and what keeps it hidden.

**Why not-for-profits are different.** A company has owners watching the money. A not-for-profit has none. Donors and funders give on trust, and the people it serves rarely have a say in how it is run. Oversight therefore has to come from the board, internal controls and the regulator.

When that oversight fails, the damage spreads beyond one organisation. In 2013 it emerged that the Central Remedial Clinic, a Dublin charity, had used donations to top up senior salaries. Its public collections that year fell from over €400,000 to €190,000 ([UK Fundraising][crc]).

**Why it matters to you.** Many of these controls now live in the systems engineers build and run: donation platforms, donor databases, finance tools and case records about the people the organisation helps. Those systems decide who can approve a payment, who can edit a record and what gets logged. In a small team, the engineer may also be the person who decides who gets access to what. If you build those systems, you are part of the organisation's governance, whether or not anyone tells you so.

**The scale in Ireland.** In 2025, the Charities Regulator received 681 concerns about the country's 11,466 registered charities, up 38% on 2024 ([Irish Examiner][ie-2025], [Law Society Gazette][lsg-2026]). Governance was the most common type of concern ([QIDN][qidn]).

## Key Concepts

### Why are not-for-profits vulnerable to corruption?

One of the biggest threats to not-for-profits is *insider fraud*, committed by someone inside the organisation: a trustee, an employee or a volunteer. A 2018 study of insider fraud in charities by the Charity Commission for England and Wales found ([Charity Commission][cc-insider]):

- **Missing controls** were the main enabler in 19 of 20 cases examined.
- **Too much trust** in one person, or a lack of challenge and oversight, enabled nearly 70% of frauds in its survey.
- **Small teams** make it hard to separate duties. Typical failures were a single signatory on the bank account and bank statements nobody reconciled.
- **Insiders at every level** were responsible: employees in 43% of cases, trustees in 33% and volunteers in 10%.

Ireland's Charities Regulator sees the same pattern of one individual taking excessive control of a charity ([Law Society Gazette][lsg-2026-b]).

Five ideas from charity governance and fraud prevention explain most of what goes wrong, including in the case study.

### Trustee oversight

- The board of trustees is legally responsible for overseeing the CEO and protecting the charity's assets.
- Irish charities must follow the [Charities Governance Code][code]. Its six principles include *behaving with integrity*, *exercising control* and *being accountable and transparent* ([The Wheel][wheel]). A charity that does not meet one of the Code's standards must explain why ([Mason Hayes & Curran][mhc]).

### Conflicts of interest

- A conflict arises when a personal interest could influence a decision you make for the charity. For example, a trustee's company bids for the charity's IT contract.
- The Charities Regulator says conflicts are not the problem in themselves; failing to identify, manage and record them is ([Charities Regulator][cr-coi], [Law Society Gazette][lsg-coi]).
- **In software:** a conflicts register, and checks that flag a supplier whose bank details or address match a staff member's or trustee's.

### Segregation of duties

- No one person should control a transaction from start to finish, for example by requesting, approving and paying the same invoice. The Charity Commission calls this a crucial way to prevent and detect fraud ([Charity Commission][cc-fraud]).
- **In software:** approval workflows that block self-approval, and role-based access so no single account can do everything.

### The fraud triangle

Fraud usually needs three things at once ([EBSCO][ebsco]):

\*\*add in a fraud triangle diagram

Opportunity is the easiest of the three to control ([AGA][aga]), and many of those controls are built into software.

### Whistleblowing

- Tips are the most common way fraud is detected. They uncovered 43% of the cases in the Association of Certified Fraud Examiners' 2024 global study ([ACFE][acfe]).
- In Ireland, organisations with 50 or more employees must have internal channels for reporting wrongdoing, and the law protects workers who use them ([WRC][wrc]).
- **In software:** a reporting tool that keeps the reporter's identity confidential, including from IT admins.

## Case Study

### Console, an Irish charity wound up in 2016

Console was a suicide bereavement charity founded by Paul Kelly in 2002. It was funded in part by the HSE ([Oireachtas][oir]). An HSE audit of its 2012 to 2014 finances found serious governance failures.

**Before you read on:** Console had 20 charity credit cards. Can you guess how many were held by the founder's family, and what share of all card spending went through them?

**What the audit found** ([RTÉ][rte-audit]):

- **One person in control.** Paul Kelly ran the charity entirely. He kept acting as a shadow director after resigning as a director in 2013.
- **No approval for payments.** Payments to him and his wife had no contracts and no board approval.
- **Credit cards.** The Kelly family held 11 of the charity's 20 cards. Those cards accounted for 63% of card spending, or €464,777.
- **Cash.** There were no records of how €87,027 in cash withdrawals was used.
- **Records.** A clothing-allowance policy dated 2010 appeared to have been created only hours before it was emailed to the auditors.

Console was wound up in July 2016, and Pieta House took over its services ([TheJournal.ie][journal]).

**Watch:** [Console: The inside story of a con that shook the nation][rte-video] (RTÉ Prime Time, 2024). The investigation began in 2012 with a phone call from a member of the public, and it took about four years to gather the evidence. It is a reminder that tips are how most fraud comes to light.

### Which controls would have prevented these failures?

| Failure at Console | Governance concept | Control that would have helped |
| --- | --- | --- |
| One person in control | Trustee oversight | Board-approved roles; system access granted by role and reviewed by the board |
| Payments to family with no approval | Conflicts of interest | Payments to related parties sent to the board for approval |
| Family cards, 63% of spending | Segregation of duties | Card limits; statements checked by someone other than the cardholder |
| Undocumented cash | Segregation of duties | Receipt required before a withdrawal is reconciled |
| Policy apparently created just before the audit | Accountability and transparency | Document version history that the author cannot edit |

## Exercise

### Quiz

**1. At a small charity, the finance officer can add new suppliers, approve invoices and release payments. Nothing has gone wrong so far. What is the main problem?**

- a) There is no problem, because no fraud has happened
- b) There is no segregation of duties: one person controls a payment from start to finish
- c) It is a conflict of interest
- d) It is a data protection breach

*Answer: b.* The risk exists before anything goes wrong. In the Charity Commission's study, missing controls were the main enabler in 19 of 20 insider fraud cases.

**2. A trustee's company bids to build the charity's new donor database. What should happen?**

- a) The bid is rejected automatically
- b) Nothing, as long as the trustee's bid is the cheapest
- c) The trustee must resign from the board
- d) The trustee declares the interest, steps out of the decision, and the board records it

*Answer: d.* The Charities Regulator's position is that conflicts of interest are not the problem in themselves. Failing to identify, manage and record them is.

**3. A charity's board wants to reduce fraud risk. Which measure targets *opportunity* rather than pressure or rationalisation?**

- a) A financial wellbeing programme for staff
- b) Ethics training on the charity's code of conduct
- c) Requiring two people to approve payments of €2,000 or more
- d) A pay rise for the finance team

*Answer: c.* A second approver takes away the chance to act alone. Options a and d address pressure, and option b addresses rationalisation.

**4. In the Association of Certified Fraud Examiners' 2024 global study, how was workplace fraud most often first detected?**

- a) A tip from someone
- b) External audit
- c) Management review
- d) Automated monitoring

*Answer: a.* Tips uncovered 43% of cases, more than three times the next most common method. This is why confidential reporting channels matter.

**5. At Console, the founder's family held 11 of 20 charity credit cards, and those cards made up 63% of card spending. Which control would most directly have exposed this?**

- a) An annual external audit of the accounts
- b) A board-approved expenses policy
- c) A rule that every card transaction needs a receipt
- d) Monthly card statements reviewed by someone other than the cardholder

*Answer: d.* A policy or a receipt rule only works if someone independent checks it, and at Console the people spending were the people in control. An annual audit only samples transactions once a year. Console had external auditors, and accounting regulators later fined them ([Irish Times][it-auditors]). An independent monthly review shows who is spending what within weeks.

**6. An engineer at an Irish charity with 80 staff notices payments to a supplier whose bank details match a staff member's. What reporting route must the charity have in place by law?**

- a) None: charities are exempt
- b) Only a report to the Gardaí
- c) An internal reporting channel, with legal protection from penalisation for the person who reports
- d) None: the requirement applies only to public bodies

*Answer: c.* Since 17 December 2023, every organisation with 50 or more employees, including not-for-profits, must have internal channels for reporting wrongdoing ([WRC][wrc]).

## Interactive Element (optional)

**1. Quiz (Exercise section).** Show one question at a time. When the reader picks an answer, show whether it is right, then the explanation under it. Correct answers: 1 b, 2 d, 3 c, 4 a, 5 d, 6 c. Show the score at the end.

**2. "Before you read on" guess (Case Study).** Ask the question as written, and let the reader type or pick a guess before the audit findings are revealed (11 of 20 cards; 63% of card spending).

**3. RTÉ video (Case Study).** Embed "Console: The inside story of a con that shook the nation" if RTÉ allows embedding; otherwise show a link card.

**4. Fraud triangle diagram (Key Concepts).** A static image, not interactive. Label each corner with a short definition, because quiz question 3 depends on it: pressure (a financial need or target), opportunity (a weakness that makes fraud possible), rationalisation (an excuse).

## Additional Resources

- [Charities Governance Code][code]: the standards Irish charities must meet, with a checklist.
- [Focus on insider fraud in charities][cc-insider]: the Charity Commission's research on how and why insider fraud happens.
- [Red Flags in Public Procurement][ocp]: how to detect corruption risks in data, with indicators you can build into software.

**Sources:**

- [Transparency International: What is corruption?][ti]
- [UK Fundraising: Central Remedial Clinic donations fall][crc]
- [Irish Examiner: Charities Regulator received 681 complaints][ie-2025]
- [Law Society Gazette: Governance issues linger at some charities][lsg-2026]
- [QIDN: Charities Regulator 2025 annual report][qidn]
- [Charity Commission: Focus on insider fraud in charities][cc-insider]
- [Law Society Gazette: Governance issues linger at some charities (second link)][lsg-2026-b]
- [Charities Regulator: Charities Governance Code][code]
- [The Wheel: Charities Governance Code][wheel]
- [Mason Hayes & Curran: Charities Regulator publishes new governance code][mhc]
- [Charities Regulator: Guide to managing conflicts of interest][cr-coi]
- [Law Society Gazette: Charities urged to manage conflicts of interest][lsg-coi]
- [Charity Commission: Over half of charities hit by fraud knew the perpetrator][cc-fraud]
- [EBSCO: Fraud triangle][ebsco]
- [AGA: The fraud triangle][aga]
- [ACFE: Occupational Fraud 2024, A Report to the Nations][acfe]
- [WRC: Obligations under the Protected Disclosures (Amendment) Act 2022][wrc]
- [Oireachtas: Parliamentary question on Console funding, 5 July 2016][oir]
- [RTÉ: Interim report raises concerns over Console][rte-audit]
- [TheJournal.ie: HSE appears before the PAC on Console][journal]
- [RTÉ Prime Time: Console, the inside story of a con that shook the nation][rte-video]
- [Irish Times: Console's auditors fined][it-auditors]
- [Open Contracting Partnership: Red Flags in Public Procurement][ocp]

<!-- Reference link definitions used throughout the page. -->

[ti]: https://www.transparency.org/en/what-is-corruption
[crc]: https://fundraising.co.uk/?p=205309
[ie-2025]: https://www.irishexaminer.com/news/arid-41882842.html
[lsg-2026]: https://production.lawsociety.ie/gazette/top-stories/2026/july/governance-issues-linger-at-some-charities/
[lsg-2026-b]: https://www.lawsociety.ie/gazette/top-stories/2026/july/governance-issues-linger-at-some-charities/
[qidn]: https://qidn.ie/?p=3095
[cc-insider]: https://www.gov.uk/government/publications/focus-on-insider-fraud-in-charities/focus-on-insider-fraud-research-report
[code]: https://www.charitiesregulator.ie/en/information-for-charities/charities-governance-code
[wheel]: https://www.wheel.ie/advice-guidance/governing-your-organisation/charities-governance-code
[mhc]: https://mhc.ie/latest/insights/charities-not-for-profit-update-charities-regulator-publishes-new-governance-code
[cr-coi]: https://www.charitiesregulator.ie/ga/faisnéis-don-phobal/ár-nuacht/2018/may/charities-regulator-launches-guide-to-help-charity-trustees-manage-conflicts-of-interest
[lsg-coi]: https://www.lawsociety.ie/gazette/top-stories/2024/may/charities-urged-to-manage-conflicts-of-interest/
[cc-fraud]: https://www.gov.uk/government/news/over-half-of-charities-hit-by-fraud-knew-the-perpetrator-according-to-new-research
[ebsco]: https://ebsco.com/research-starters/law/fraud-triangle
[aga]: https://www.agacgfm.org/resource/the-fraud-triangle/
[acfe]: https://legacy.acfe.com/report-to-the-nations/2024/
[wrc]: https://workplacerelations.ie/en/what_you_should_know/employer-obligations/protection-of-whistleblowers/new-obligations-under-the-protected-disclosures-amendment-act-2022/
[oir]: https://www.oireachtas.ie/ga/debates/question/2016-07-05/573/
[rte-audit]: https://www.rte.ie/news/2016/0628/798832-console-investigations
[journal]: https://thejournal.ie/hse-pac-appearance-2879383-Jul2016
[rte-video]: https://www.rte.ie/news/primetime/2024/0222/1433824-console-inside-story/
[it-auditors]: https://www.irishtimes.com/news/ireland/irish-news/console-s-auditors-fined-tens-of-thousands-of-euro-over-ethical-and-professional-flaws-1.3843126
[ocp]: https://open-contracting.org/redflags
