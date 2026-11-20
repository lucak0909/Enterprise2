---
title: "Corruption & Governance"
path: mnc
topic_order: 3
author: "Andy Cao"
status: draft
ai_use: "Claude (Anthropic) used to help structure and draft; reviewed and edited by the author"
---

## Introduction

**Corruption** is "the abuse of public power for private gain" (World Bank, 1997). It shows up as:

| Form | What it looks like |
|---|---|
| Bribery or extortion | A permit officer asks for an unofficial payment |
| Embezzlement | An official moves public money into their own account |
| Favouritism | A contract goes to a friend's company that put in a weaker bid |
| State capture | Powerful interests shape the rules for their own benefit |

**Governance** is the rules and checks that make these hard to do and easy to catch.

At an MNC this isn't just for lawyers. Your company will operate where officials expect bribes, sell to governments, and sit close to political power. Think of the tech CEOs at the January 2025 US inauguration: *who gets in the room when the rules are written?*

You probably won't be offered a bribe. You're more likely to **build the system** (the approval workflow, the audit log, the supplier database) that either makes corruption hard or makes it invisible.

---

## Key Concepts

### 1. "Grease" or "sand" in the wheels?

Some argue a bribe "greases the wheels" where regulation is slow. Others say corruption is **sand in the wheels**, adding cost and uncertainty and destroying trust (Gillanders, 2026). The evidence mostly supports **sand**: more corrupt countries grow more slowly because they attract less investment (Mauro, 1995), and for Ugandan firms **bribes slowed growth more than taxes did** (Fisman and Svensson, 2007).

**For you:** a "facilitation payment" to speed up a data-centre permit isn't a shortcut. It's a recurring cost with legal risk (see Concept 4).

### 2. Political connections have a price

* When rumours spread that Indonesia's President Suharto was ill, connected firms' share prices fell further than others'. For the best-connected firms, roughly **a quarter** of their value came from their ties to the regime (Fisman, 2001).
* After South Korea's 2007 election, state firms run by the president's network gave more contracts to firms in the same network, and those contracts **performed worse and were renegotiated upward more often** (Schoenherr, 2019).
**For you:** contracts won through connections mean worse software at a higher price.

### 3. Corruption costs lives

* Over a 30-year period, **83%** of deaths from building collapses in earthquakes happened in countries more corrupt than their income would predict (Ambraseys and Bilham, 2011).
* Politically connected Chinese firms had **2–3×** the worker death rate of firms without those ties (Fisman and Wang, 2015).

**For you:** a safety check someone can quietly override is as dangerous in software as in a building inspection.

### 4. The law follows MNCs across borders

An MNC can be prosecuted at home for a bribe paid abroad:

| Law | Why an MNC engineer should know it |
|---|---|
| **US Foreign Corrupt Practices Act (FCPA)** | Requires **accurate books and internal controls**, so a system that hides payments is itself a violation |
| **UK Bribery Act 2010, s.7** | A company is guilty if it **fails to prevent** bribery, unless it had "adequate procedures" |
| **Ireland: Criminal Justice (Corruption Offences) Act 2018, s.18** | A company is liable for staff or agents' corruption, unless it took **all reasonable steps and exercised all due diligence** |

The company must **prove it had working controls**, and most of those are software: approval flows, segregation of duties, audit logs and vendor checks.

### 5. What actually reduces corruption

| Approach | What it changes | The engineering version |
|---|---|---|
| **Reduce opportunities** | Less hidden discretion | Fewer manual overrides; readable rules |
| **Detect and respond** | Records, audits, consequences | Append-only logs, anomaly alerts |
| **Change expectations** | Professional norms | Code review culture |
| **Protect people** | Safe reporting | Fallbacks, appeals, anonymous channels |

*(Adapted from Gillanders, 2026.)*

**Audits work if they are credible.** In over 600 Indonesian village road projects, raising the audit probability from 4% to 100% cut missing spending by about **8 percentage points** (Olken, 2007).
### 6. Technology helps, but only if you design it carefully

Digital systems remove bargaining at the desk but create new risks, such as an administrator quietly changing the record. India's biometric smartcards made welfare payments **faster and less corrupt** (Muralidharan, Niehaus and Sukhtankar, 2016), but another biometric reform cut off **1.5–2 million legitimate beneficiaries** at some point (Muralidharan, Niehaus and Sukhtankar, 2025). **Fallbacks and appeals are part of the design.**

Before shipping a system that handles money, permits or contracts, ask (Gillanders, 2026):

1. Who can edit the eligibility rules?
2. Who can override a rejected application?
3. Who can alter or delete the audit log?
4. Who investigates the person with administrator access?

---

## Case Study

### Siemens: bribery as a business process

In December 2008, Siemens AG settled bribery charges for about **US$1.6 billion** across the US and Germany, then the largest penalty ever for foreign bribery. The SEC found that between 2001 and 2007 Siemens made **4,283 payments totalling about US$1.4 billion** to government officials, winning work such as metro lines in Venezuela and national ID cards in Argentina (SEC, 2008).

The bribes were **built into everyday business processes**:

* off-books "slush funds";
* sham "consultants" paid on invented invoices;
* approvals signed on removable Post-it notes, so no record showed who approved them.

Each is a **failed governance control**: vendor onboarding, invoice matching, audit trails.

**Lesson:** at MNC scale, corruption runs through systems. The same systems, designed well, are how it gets caught.

---

## Exercise

### Spot the red flags

A sample from a public tender dataset:

| Tender | Bidders | Bidding period | Winner | Amendments after award |
|---|---|---|---|---|
| A | 6 | 30 days | NorthGrid Ltd | +3% |
| B | 1 | 4 days | Kestrel Systems | +0% |
| C | 5 | 28 days | Kestrel Systems | +62% |
| D | 1 | 35 days | MedScan GmbH | +2% |
| E | 2 | 3 days | Kestrel Systems | +41% |

1. Which tenders would you flag, and why?
2. For each flag, give **one innocent explanation**.
3. Write a rule (pseudo-code, SQL or Python) that flags tenders automatically.

<details>
<summary><strong>Click to reveal a suggested answer</strong></summary>

Based on the Open Contracting Partnership's *Red Flags* guide (2024):

* **B:** single bidder, very short period. *Innocent:* a genuine emergency.
* **C:** +62% amendment. *Innocent:* requirements changed.
* **E:** short period, large amendment. *Innocent:* Kestrel is the best supplier.
* **D:** single bidder only. *Innocent:* specialist work. A weak flag.
* **Pattern:** Kestrel wins 3 of 5. **Several flags on one supplier** justifies a closer look.

```python
def red_flags(t):
    flags = []
    if t.bidders == 1:            flags.append("single bidder")
    if t.bid_days < 7:            flags.append("short bidding period")
    if t.amendment_pct > 25:      flags.append("large amendment")
    return flags
```

A flag is a **reason to look**, not proof; send it to a human.

</details>

---

## Interactive Element (optional)

### Who controls the audit log?

**Scenario.** Your MNC is building a grants-approval platform for a government department. Applications are scored automatically.

**Decision 1. A senior official wants an "admin override" to approve applications below the threshold.**
A) Build it as requested.
B) Build it with a written reason, a second approver and a log the official can't edit.
C) Refuse any override.

<details>
<summary><strong>Reveal feedback</strong></summary>

**B.** A ban pushes exceptions into email; an unchecked override is hidden discretion. **Two people plus a permanent record** makes it auditable.

</details>

**Decision 2. The client wants fingerprint-only identity checks, with no other way to apply.**
A) Ship it; biometrics stop fraud.
B) Ship it with a staffed fallback, an appeal route and monitoring of false rejections.

<details>
<summary><strong>Reveal feedback</strong></summary>

**B.** See Key Concept 6: 1.5–2 million legitimate people were locked out in India.

</details>

### Idea for the web team

One decision at a time, ending with Key Concept 6's four questions as a checklist. Make the red-flag table tickable.

---

## Additional Resources

* **[Corruption Perceptions Index](https://www.transparency.org/en/cpi)**: country scores before entering a market.
* **[Red Flags in Public Procurement](https://www.open-contracting.org/resources/red-flags-in-public-procurement-a-guide-to-using-data-to-detect-and-mitigate-risks/)**: detecting risk from tender data.
* **[A Resource Guide to the FCPA](https://www.justice.gov/criminal/criminal-fraud/fcpa-resource-guide)**: how regulators judge internal controls.

## Declaration of Generative AI and AI-assisted technologies in the writing process

Claude (Anthropic) helped structure and draft this section from the masterclass slides and cited sources. The author reviewed, edited and checked it.

## References

* *Bribery Act 2010*, c. 23, s. 7. London: The Stationery Office.
* *Criminal Justice (Corruption Offences) Act 2018*, No. 9 of 2018, s. 18. Dublin: Stationery Office.
* *Foreign Corrupt Practices Act of 1977*, 15 U.S.C. §§ 78dd-1 et seq. and § 78m(b).
* Ambraseys, N. and Bilham, R. (2011) 'Corruption kills', *Nature*, 469, 153–155.
* Fisman, R. (2001) 'Estimating the value of political connections', *American Economic Review*, 91(4), 1095–1102.
* Fisman, R. and Svensson, J. (2007) 'Are corruption and taxation really harmful to growth? Firm level evidence', *Journal of Development Economics*, 83(1), 63–75.
* Fisman, R. and Wang, Y. (2015) 'The mortality cost of political connections', *Review of Economic Studies*, 82(4), 1346–1382.
* Gillanders, R. (2026) *Corruption: why it matters, what we can do about it* [masterclass slides], Enterprise II, Immersive Software Engineering, University of Limerick.
* Mauro, P. (1995) 'Corruption and growth', *Quarterly Journal of Economics*, 110(3), 681–712.
* Muralidharan, K., Niehaus, P. and Sukhtankar, S. (2016) 'Building state capacity: evidence from biometric smartcards in India', *American Economic Review*, 106(10), 2895–2929.
* Muralidharan, K., Niehaus, P. and Sukhtankar, S. (2025) 'Identity verification standards in welfare programs', *Review of Economics and Statistics*, 107(2), 372–392.
* Olken, B.A. (2007) 'Monitoring corruption: evidence from a field experiment in Indonesia', *Journal of Political Economy*, 115(2), 200–249.
* Open Contracting Partnership (2024) *Red flags in public procurement: a guide to using data to detect and mitigate risks*.
* Schoenherr, D. (2019) 'Political connections and allocative distortions', *Journal of Finance*, 74(2), 543–586.
* U.S. Securities and Exchange Commission (2008) *SEC charges Siemens AG for engaging in worldwide bribery* [press release 2008-294], 15 December. Available at: https://www.sec.gov/newsroom/press-releases/2008-294-sec-charges-siemens-ag-engaging-worldwide-bribery.
* World Bank (1997) *Helping countries combat corruption: the role of the World Bank*. Washington, DC: World Bank.
