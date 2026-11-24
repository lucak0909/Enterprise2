---
title: "GDPR"
path: not-for-profit
topic_order: 2
author: "Hugh Feehan"
status: draft # draft | review | final
ai_use: "Planning" # declare any AI use here, or "none"
---

## Introduction

Not-for-profits are not exempt from GDPR, and they often hold the most sensitive data there is: health records, sexuality, details about children and people at risk. Yet they are usually small teams with no Data Protection Officer and no legal team.

This means that for an engineer working in one, GDPR becomes a requirement for every part of the infrastructure: the schema, the forms, the email tool, the backups and the logs.

The Ethics section covered *why* privacy matters. This topic covers *what the law makes you build*.

## Key Concepts

### Special category data

- Processing health, sexuality, religion or ethnicity data is banned unless an exception applies, such as explicit consent ([Art. 9][gdpr]).
- In Ireland, under-16s need a parent's consent for online services ([DPA 2018, s.31][dpa-31]).
- **In software:** separate, role-restricted storage and age checks on sign-up.

### Consent

- Consent must be provable, and withdrawing it must be as easy as giving it.
- Email and SMS marketing generally need prior consent ([S.I. 336/2011][eprivacy]).
- **In software:** a consent record (who, when, which wording, which channel), not an `opted_in` column.

### People's rights

- People can ask to see, correct or delete their data, or to stop marketing, and you usually have **one month** to respond.
- **In software:** a full data export, deletion that reaches every tool, and a "do not contact" list.

### Third-party tools

- Your email platform and CRM are processors. You stay responsible for them and need a contract with each.
- **In software:** a list of every tool that touches personal data.

### Security and breaches

- Security must match the risk.
- A breach must be reported to the Data Protection Commission (DPC) within **72 hours** where feasible ([DPC][dpc-breach]).
- **In software:** encryption, access control and audit logs.

## Case Study

### Mermaids: one wrong setting

Mermaids, a UK charity supporting transgender children, set up an internal email group in 2016. The CEO created it with the least secure settings by mistake, so it was listed publicly and indexed by Google ([Charity Times][mermaids-ct]).

- About 780 pages of emails, including 550 names and details of mental health and sexuality, stayed public for **almost three years**.
- A journalist found it, not the charity.
- In 2021 the UK regulator fined Mermaids £25,000, saying encryption or pseudonymisation could have protected the data.

**Closer to home:** the DPC fined MOVE Ireland, a domestic violence charity, €1,500 after it lost SD cards that may have held recordings of group sessions ([DPC][move-dpc]). Small charities are not off the regulator's radar.

| Failure | Control that would have helped |
| --- | --- |
| Public-by-default settings | Private by default, checked by a second person |
| Unnoticed for three years | Regular review of what each tool exposes |
| Sensitive data in group email | Kept in an encrypted, access-controlled system |

## Exercise

### Ship It or Block It

You play the only engineer at a small Irish charity. Feature requests and pull requests arrive one at a time, and for each one you decide whether to **Ship** it, **Block** it or **Fix** it. Every request touches one of the five Key Concepts above. Once all the requests are done, a journalist reviews what you shipped and publishes a story about the charity. That story is your final rating.

## Interactive Element (optional)

**Ship It or Block It (Exercise section).** A simple card-based game that can share a format with the other not-for-profit exercises. Each request appears as a card with three buttons: **Ship**, **Block** or **Fix**. A short explanation is shown after each choice.

At the end, a news outlet "finds the code" and publishes a headline based on the reader's choices. The headline is the score, from *"Small charity praised for protecting young people's data"* to *"Charity exposes service users' health details online"*.

**How it helps decision-making.** In a not-for-profit there is rarely a legal team checking your work, so GDPR decisions are made at code review. The game practises that moment. Instead of memorising articles, the reader learns to ask a few quick questions about any change:

- *Is this sensitive data, and who can see it?*
- *Can we prove the person agreed to this?*
- *Could we export, correct or delete it if someone asked?*
- *Which third-party tool does it end up in?*
- *If it leaked, would we know whose data it was?*

**Key takeaways:**

- GDPR is part of the engineer's job, not just the lawyers'.
- Most failures come from defaults and small decisions, like one wrong setting, not from deliberate wrongdoing.
- "Fix" is often a better answer than "Block": features can usually be built in a way that complies.
- The public judges a charity on how it treats people's data, and that trust is hard to win back.

## Additional Resources

**Sources:**

- [EUR-Lex: General Data Protection Regulation][gdpr]
- [Data Protection Act 2018, s.31][dpa-31]
- [S.I. No. 336 of 2011 (ePrivacy Regulations)][eprivacy]
- [DPC: Breach notification][dpc-breach]
- [Charity Times: ICO fines Mermaids £25,000][mermaids-ct]
- [DPC: Inquiry into MOVE Ireland][move-dpc]

[gdpr]: https://eur-lex.europa.eu/eli/reg/2016/679/oj
[dpa-31]: https://www.irishstatutebook.ie/eli/2018/act/7/section/31/enacted/en/html
[eprivacy]: https://www.irishstatutebook.ie/eli/2011/si/336/made/en/print
[dpc-breach]: https://www.dataprotection.ie/organisations/know-your-obligations/breach-notification
[mermaids-ct]: https://www.charitytimes.com/ct/ICO-fines-charity-25000-for-failing-to-keep-hundreds-of-users-data-safe.php
[move-dpc]: https://dataprotection.ie/en/dpc-guidance/decisions/inquiry-move-men-overcoming-violence-ireland
