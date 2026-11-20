---
title: "Not-for-Profit Economics and Sustainable Software"
path: not-for-profit
topic_order: 4
author: "Eoin"
status: draft
ai_use: "OpenAI Codex was used to help structure and draft content; reviewed and edited by the author."
---

## Introduction

A not-for-profit software organisation still has to pay developers, hosting bills, security costs and suppliers. The difference is not that it avoids money or never earns a surplus. Its finances are organised around a mission rather than distributing profit to owners.

In Ireland, **not-for-profit** is a broad description, while **charity** is a regulated status. A registered charity must have an eligible charitable purpose and provide public benefit. A community technology group can be not-for-profit without automatically being a registered charity (Charities Regulator n.d.-b, p.7).

For a software engineer, this changes how success is measured. A commercial product may optimise revenue, retention or shareholder return. A mission-led product must also ask whether the intended community can access it, whether the service creates the promised public benefit and whether it can still be maintained next year. Good intentions do not remove economic constraints: an unreliable or insolvent service cannot deliver its mission.

The central question for this topic is:

> How can a software organisation remain financially sustainable when maximising profit is not its primary purpose?

---

## Key Concepts

### 1. Mission, legal form and software licence are different choices

Three ideas are often confused:

* **Mission:** the social outcome the organisation exists to create.
* **Legal and governance structure:** who controls the organisation and what may happen to its assets or surplus.
* **Software licence:** the permissions users have to run, inspect, modify and redistribute code.

A charity can build closed-source software, and a profit-seeking company can publish open-source software. The Open Source Initiative's definition concerns distribution rights, not whether the developer is a charity. Engineers should therefore avoid treating "open source", "free to use" and "not-for-profit" as synonyms (Open Source Initiative 2007).

### 2. Income is usually a portfolio, not a single stream

Mission-led organisations can combine several sources of income:

| Income source | Benefit | Economic risk |
|---|---|---|
| Individual donations | Builds a broad community of supporters | Can be seasonal and unpredictable |
| Grants | Can fund a major feature or programme | Often restricted, competitive and time-limited |
| Memberships | More predictable recurring income | Members expect continuing value and influence |
| Service contracts | Connects income to useful work | Contract work can pull staff away from the core mission |
| Training, support or enterprise services | Earned income can subsidise free public access | A paid tier can create tension with equal access |
| Endowment or investment income | Supports long-term resilience | Takes time and capital to build and still carries risk |

Depending on one grant or one major donor creates **concentration risk**. If that funder leaves, the software may lose maintenance, security updates or hosting even when users still depend on it. Diversification is not automatically safer, however: research indicates that its effect depends on the organisation's overall income and the particular mix of revenue sources (Guan et al. 2021). Teams should model the reliability, restrictions and full cost of each source rather than simply counting how many sources they have.

### 3. Restricted money is not the same as available cash

A funder may give €30,000 specifically for Irish-language localisation or an accessibility feature. That money cannot simply be moved to an unrelated server bill. The Charities Regulator distinguishes **restricted funds**, which must be used in the specified way, from **unrestricted funds**, which can support day-to-day operations and other activities within the organisation's purpose (Charities Regulator n.d.-a, p.5).

This distinction matters to engineering teams. A project can have cash in the bank and still be unable to fund an urgent database migration. Before committing to a feature, a team should know both the amount of funding and the conditions attached to it.

### 4. Surplus, reserves and runway protect the mission

A surplus is the amount left when income exceeds expenditure over a period. In a not-for-profit, it can be retained for the mission rather than paid to owners. The Charities Regulator explains that unrestricted surpluses can build reserves which help an organisation meet commitments and continue services when income falls or unexpected costs arise (Charities Regulator n.d.-a, pp.6-7).

Useful measures include:

* **Annual surplus or deficit:** total income minus total expenditure.
* **Monthly net burn:** monthly expenditure minus monthly income when expenditure is higher.
* **Runway:** unrestricted cash available divided by monthly net burn.
* **Months of reserves:** unrestricted reserves divided by average monthly unrestricted expenditure.

Holding no reserve makes a service vulnerable. Holding an unnecessarily large reserve without explaining why can also be inconsistent with using resources for the mission. The board should agree a reserve policy based on risks such as grant gaps, security incidents, supplier price increases and essential maintenance (Charities Regulator n.d.-a, pp.7-10).

### 5. Measure outcomes as well as output

Counting releases, downloads or registered accounts shows activity, but not necessarily public benefit. A mission-led team might track:

* the cost per person who successfully completes a service;
* accessibility and localisation coverage;
* uptime for users who have no alternative service;
* whether target communities return and achieve the intended outcome;
* maintenance backlog, security response time and contributor retention.

The cheapest technical option is not always the most economical. Deferring security, documentation or maintenance may improve this year's programme ratio but create much larger future costs. Engineers contribute to financial sustainability when they make total cost of ownership, operational risk and technical debt visible.

### 6. Mission drift is an economic risk

Earned income can make an organisation more resilient, but it may also redirect effort toward customers who can pay. This is **mission drift**: activity gradually moves away from the organisation's stated purpose because funding incentives are stronger elsewhere (Klein et al. 2021).

A useful decision test is:

1. Does the work advance or enable the mission?
2. Are restricted funds being used only for their agreed purpose?
3. Does the work cover its full cost, including support and future maintenance?
4. What mission work will be delayed if the team accepts it?
5. Can the decision and its trade-offs be explained to users, donors and trustees?

---

## Case Study

### Wikimedia Foundation: free access still has a cost

Wikipedia can be read without a subscription, but the service behind it is not costless. The Wikimedia Foundation is a nonprofit organisation that supports Wikipedia and other Wikimedia projects. It reports that it is funded mostly by individual donors through small donations, while also publishing annual reports, financial reports and plans (Wikimedia Foundation n.d.).

For its 2024–25 financial year, the Board approved a balanced plan with **US$188.75 million in revenue and US$188.75 million in expenditure**. Planned expenditure included **US$145.04 million for programme activity**, **US$21.43 million for fundraising**, and **US$22.28 million for general and administrative costs** (Wikimedia Foundation Board of Trustees 2024).

This illustrates several not-for-profit economics lessons:

* **Free at the point of use does not mean free to produce.** Infrastructure, product development, trust and safety, security, legal work and community support require continuing resources.
* **Fundraising is part of the operating model.** It costs money to communicate with donors and process donations; removing that cost would also affect future income.
* **Administration enables delivery.** Governance, finance, risk management and staff support are not the mission by themselves, but the mission cannot operate safely without them.
* **Budgets express priorities.** A balanced annual plan links expected income to planned work, while public reporting allows donors and communities to scrutinise those choices.
* **Open source and nonprofit status remain separate.** Wikimedia uses open technologies and community contribution, but it still needs an organisation, staff, infrastructure and a sustainable financial model.

The lesson for engineers is that architecture is also a resource decision. A design that is expensive to host, difficult for volunteers to contribute to or dependent on one vendor can reduce the amount available for the organisation's public mission.

---

## Exercise

### Build a sustainable budget for CivicCode

**CivicCode** maintains a free web service that helps people find local support services. It expects the following income next year:

* €50,000 in unrestricted donations;
* €30,000 from a grant restricted to accessibility and Irish-language localisation;
* €20,000 from training and support services.

It begins the year with €20,000 in unrestricted reserves. Allocate the **€100,000 income** while meeting these minimum commitments:

| Area | Minimum | Why it matters |
|---|---:|---|
| Core development and maintenance | €35,000 | Keeps the existing service useful and maintainable |
| Hosting, security and incident response | €20,000 | Protects availability and user data |
| Accessibility and localisation | €30,000 | Required by the restricted grant |
| Fundraising and administration | €10,000 | Supports future income and accountable governance |

Answer these questions:

1. Where will you put the final €5,000, and what evidence supports that choice?
2. What happens if unrestricted donations fall by 20%?
3. Would you accept a €25,000 commercial contract that requires two months of developer time but does not directly serve CivicCode's users?
4. Which three measures would show whether your budget created public benefit?

<details>
<summary><strong>Click to reveal one reasoned approach</strong></summary>

There is no single correct allocation. One defensible choice is to put the remaining **€5,000 into unrestricted reserves**. The organisation then plans a €5,000 annual surplus and ends with €25,000 of unrestricted reserves.

The €30,000 restricted grant is fully matched to accessibility and localisation. It cannot be counted as cover for an unrelated emergency. The other €70,000 of income covers €65,000 of unrestricted expenditure, so the planned surplus is unrestricted.

If donations fall by 20%, income falls by €10,000. The planned €5,000 surplus becomes a €5,000 deficit, reducing reserves to €15,000 unless the team changes its plan. The team should identify reductions before the loss occurs rather than assuming restricted grant money can fill the gap.

The commercial contract should be assessed on its **full cost and opportunity cost**, not just its €25,000 price. CivicCode should estimate salary, support and maintenance costs; identify what mission work would be delayed; and agree how any net contribution supports the mission. It may be sensible income, but accepting every paid request risks mission drift.

Suitable impact measures might include successful referrals to support services, task completion by users of assistive technology, Irish-language task completion, uptime, or cost per successful referral. Page views alone would not prove that users received help.

</details>

---

## Interactive Element (optional)

### Mission and Runway Simulator

**Objective:** Let learners experience the trade-off between immediate programme impact, restricted funding and long-term service survival.

**Starting screen**

The learner receives CivicCode's €100,000 income and €20,000 opening reserve. Four accessible sliders allocate money to development, infrastructure and security, accessibility and localisation, and fundraising and administration. Restricted grant money is visually labelled and cannot be dragged into another category.

**Live feedback**

* A stacked bar shows restricted funds, unrestricted spending and closing reserves without relying on colour alone.
* A **mission delivery** indicator responds to accessibility, localisation and service investment.
* A **service risk** indicator rises when hosting, security or maintenance is underfunded.
* A **months of reserves** value explains how long unrestricted operations could continue.
* Every warning states the reason in text and is announced through an `aria-live` region for screen-reader users.

**Scenario cards**

After the first allocation, the learner receives one random event: donations fall by 20%, hosting prices rise, a security incident occurs, or a commercial customer offers a contract. The learner must rebalance the budget and choose whether to use reserves, reduce activity or seek new income.

**Outcome**

There is no hidden perfect score. The result explains which mission outcomes were funded, whether restrictions were honoured, the remaining runway, and what trade-off the learner made. Keyboard controls, labelled numeric inputs and a reduced-motion mode should provide alternatives to dragging and animation.

---

## Additional Resources

* [Charities Regulator — What is a Charity?](https://www.charitiesregulator.ie/media/eqvh32ky/what-is-a-charity-rev-001.pdf): explains charitable purpose, public benefit and the Irish Charity Test.
* [Charities Regulator — Guidance on Charity Reserves](https://www.charitiesregulator.ie/media/1919/guidance-on-charity-reserves-final.pdf): distinguishes restricted funds, unrestricted funds and reserves and explains why reserve policies matter.
* [Wikimedia Foundation — Key Reports](https://wikimediafoundation.org/who-we-are/reports/): annual, financial and transparency reporting from a large technology nonprofit.
* [Wikimedia Foundation — 2024–25 Annual Plan and Budget resolution](https://foundation.wikimedia.org/wiki/Resolution:Approving_the_Wikimedia_Foundation_2024-2025_Annual_Plan_and_Budget): the source for the case-study budget figures.
* [Open Source Initiative — The Open Source Definition](https://opensource.org/osd): clarifies that open source describes licence and distribution conditions, not an organisation's profit status.

### References

Charities Regulator (n.d.-a) *Guidance on Charity Reserves*, available: https://www.charitiesregulator.ie/media/1919/guidance-on-charity-reserves-final.pdf [accessed 20 Nov 2026].

Charities Regulator (n.d.-b) *What is a charity?*, available: https://www.charitiesregulator.ie/media/eqvh32ky/what-is-a-charity-rev-001.pdf [accessed 20 Nov 2026].

Guan, S., Tian, S. and Deng, G. (2021) ‘Revenue diversification or revenue concentration? Impact on financial health of social enterprises’, *Public Management Review*, 23(5), 754-774, available: https://doi.org/10.1080/14719037.2020.1865439.

Klein, S., Schneider, S. and Spieth, P. (2021) ‘How to stay on the road? A business model perspective on mission drift in social purpose organizations’, *Journal of Business Research*, 125, 658-671, available: https://doi.org/10.1016/j.jbusres.2020.01.053.

Open Source Initiative (2007) *The Open Source Definition*, version 1.9, available: https://opensource.org/osd [accessed 20 Nov 2026].

Wikimedia Foundation (n.d.) *Key reports*, available: https://wikimediafoundation.org/who-we-are/reports/ [accessed 20 Nov 2026].

Wikimedia Foundation Board of Trustees (2024) *Resolution: Approving the Wikimedia Foundation 2024–2025 Annual Plan and Budget*, 20 Jun, available: https://foundation.wikimedia.org/wiki/Resolution:Approving_the_Wikimedia_Foundation_2024-2025_Annual_Plan_and_Budget [accessed 20 Nov 2026].
