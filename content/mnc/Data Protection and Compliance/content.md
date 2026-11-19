---
title: "Data Protection & Compliance"
path: mnc
topic_order: 2
author: "Sarah"
status: draft
ai_use: "Claude (Anthropic) used to help structure and draft content; reviewed and edited by the author"
---
 
## Introduction
 
Data protection law sets the rules for what you can do with information about people: what you collect, why, where you store it, who can see it and when you delete it. In the EU that law is the **General Data Protection Regulation (GDPR)**. It applies to anyone handling EU residents' data, wherever they are based (Art. 3).
 
For engineers joining an MNC, Ireland is a special case. Meta, Google, TikTok, LinkedIn and Apple run their EU operations from Dublin, so under the "one-stop-shop" rule (Art. 56) Ireland's **Data Protection Commission (DPC)** leads most big tech cases. Fines can reach **€20 million or 4% of worldwide annual turnover, whichever is higher** (Art. 83(5)).
 
At an MNC you'll meet GDPR as privacy reviews, data classification, retention jobs and deletion tickets. Developers often equate privacy with security and struggle to put GDPR into code (Hadar et al., 2018; Alhazmi and Arachchilage, 2021).
 
---
 
## Key Concepts
 
### 1. Personal data: wider than you think
 
**Personal data** is any information relating to an identifiable living person (Art. 4(1)). That includes names and emails, but also IP addresses, device IDs, cookie IDs, location and internal user IDs. **Special category data** (Art. 9), such as health, biometrics, religion and sexual orientation, is prohibited by default unless a specific exception applies.
 
**Pseudonymised** data, like a hashed email, can be linked back to a person, so it **is still personal data** (Recital 26). Only truly anonymised data falls outside GDPR.
 
### 2. The principles as design constraints (Art. 5)
 
| Principle | What it means in code |
|---|---|
| Purpose limitation | A table collected for fraud detection isn't reused for ad targeting |
| Data minimisation | Store "over 18: yes/no" instead of a full date of birth if that's all you need |
| Storage limitation | TTLs, retention jobs and log expiry |
| Integrity and confidentiality | Encryption, least-privilege access, nothing sensitive in logs |
| Accountability | Design docs, audit logs and DPIAs that prove the above |
 
### 3. Lawful bases (Art. 6)
 
Every activity needs one of six bases: **consent, contract, legal obligation, vital interests, public task** or **legitimate interests**. Consent is often not the right one: a delivery address falls under **contract**, and security logging under **legitimate interests**. Where consent is used, pre-ticked boxes don't count (Art. 4(11)).
 
### 4. Privacy by design, rights and breaches
 
* **Privacy by design and by default** (Art. 25): build protection in from the start, and make the most private option the default.
* **DPIAs** (Art. 35): high-risk processing needs a Data Protection Impact Assessment before launch. Many teams use **LINDDUN** (Deng et al., 2011), a privacy version of STRIDE threat modelling.
* **Data subject rights** (Arts. 15–22): access, rectification, erasure, portability and objection, normally answered **within one month** (Art. 12(3)). The hard part is finding every copy: caches, warehouses, backups, logs.
* **Breaches** (Arts. 33–34): notify the regulator **within 72 hours** of becoming aware, and tell affected users if the risk is high. Accidental internal exposure counts.
---
 
## Case Study
 
### Meta
 
#### The architecture problem: €1.2 billion (2023)
In May 2023 the DPC fined Meta Platforms Ireland **€1.2 billion**, the largest GDPR fine to date, and ordered it to suspend transfers of EU users' data to the US. Its contractual safeguards didn't protect EU users from US surveillance.
 
#### The logging problem: €91 million (2024)
In 2019 Meta discovered that hundreds of millions of Facebook and Instagram passwords had been stored in **plaintext** on internal systems, largely through logging, searchable by thousands of staff. No outsider saw them, but in 2024 the DPC fined Meta **€91 million** for weak security and failing to report the breach (Arts. 32, 33).
 
**Lesson:** a region setting or a single log line can cost millions, no attacker needed.
 
---
 
## Exercise
 
### Trim the sign-up form
 
A music streaming MNC's free sign-up form asks for:
 
**full name, email, password, date of birth, gender, phone number, home address, favourite genres, PPS number, profile photo**
 
1. Which fields would you remove, make optional or change? Why?
2. For each field you keep, which lawful basis applies?
<details>
<summary><strong>Click to reveal a suggested answer</strong></summary>
* **Keep:** email and password (**contract**: needed to run the account).
* **Change:** date of birth to a simple age check, if that's all the service needs (**data minimisation**).
* **Make optional:** gender, favourite genres and profile photo, with **consent** for any use beyond the core service, such as recommendations or marketing.
* **Remove:** phone number and home address, unless a specific feature needs them.
* **Remove completely:** the PPS number. A streaming service has no reason to collect a national ID number.
</details>
---
 
## Interactive Element (optional)
 
### The 72-Hour Clock
 
**Tuesday, 10:00.** While debugging, you find a storage bucket that has been publicly readable for two weeks. It contains CSV exports of names, emails and order histories for about 40,000 EU customers. Make three decisions.
 
**Decision 1. What do you do first?**
A) Quietly fix it. B) Fix it and report it via the incident channel. C) Post it in team Slack.
 
**Decision 2. The incident team asks what to check first.**
A) Access logs: was it downloaded? B) Who wrote the config. C) File sizes.
 
**Decision 3. Thursday 09:00 (47 hours in). Logs show unknown IPs downloaded the files. Notify the DPC?**
A) No, since there were no passwords or card details. B) Yes, before Friday 10:00. C) Wait until the investigation is fully finished.
 
<details>
<summary><strong>Click to reveal the outcome</strong></summary>
* **1: B.** Hiding it turns a mistake into a cover-up; the 72-hour clock may already be running.
* **2: A.** Risk depends on whether data was accessed. Incident reviews are blameless.
* **3: B.** The clock started when the company became aware (Tuesday 10:00). Names and emails enable phishing, so this is a risk to people's rights. You can notify in phases if facts are still missing (Art. 33(4)).
</details>
---
 
## Additional Resources
 
* **[Data Protection Commission (Ireland)](https://www.dataprotection.ie):** guidance for organisations and published decisions.
* **[LINDDUN](https://linddun.org):** free privacy threat modelling cards and tutorials.
* **[OWASP Top 10 Privacy Risks](https://owasp.org/www-project-top-10-privacy-risks/)** and the **[OWASP Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html)** (what never to log).
### References
 
* Alhazmi, A. and Arachchilage, N.A.G. (2021) 'I'm all ears! Listening to software developers on putting GDPR principles into software development practice', *Personal and Ubiquitous Computing*, 25(5), 879–892.
* Data Protection Commission (2023) *Data Protection Commission announces conclusion of inquiry into Meta Ireland* [press release], 22 May.
* Data Protection Commission (2024) *DPC announces €91 million fine of Meta* [press release], 27 September.
* Deng, M., Wuyts, K., Scandariato, R., Preneel, B. and Joosen, W. (2011) 'A privacy threat analysis framework: supporting the elicitation and fulfillment of privacy requirements', *Requirements Engineering*, 16(1), 3–32.
* European Parliament and Council of the European Union (2016) *Regulation (EU) 2016/679 (General Data Protection Regulation)*, OJ L119, 1–88.
* Hadar, I., Hasson, T., Ayalon, O., Toch, E., Birnhack, M., Sherman, S. and Balissa, A. (2018) 'Privacy by designers: software developers' privacy mindset', *Empirical Software Engineering*, 23(1), 259–289.
 