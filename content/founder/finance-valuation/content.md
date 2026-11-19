---
title: Finance and Valuation for Startups
path: founder
topic_order: 1
author: Nathan Dobbyn
status: draft
ai_use: none
---

## Introduction

Most software engineers treat finance as an administrative afterthought; something you delegate to a CFO or an accountant once the code works. In reality, finance is the compiler for your business model. If you do not understand how capital is priced, how equity dilutes, and how future cash flows translate into present enterprise value, you will write code for a company that dies before its architecture ever scales.

Peter Thiel argues in *Zero to One* that startups exist to create new value rather than incrementally copy existing models, moving from **0 to 1** instead of **1 to n**. Yet creating value for users is mathematically worthless to a founder unless you capture a fraction of that value as durable cash flow. Conversely, Paul Graham reduces early-stage survival to a ruthless binary metric: **Default Alive or Default Dead**. Before you optimize algorithms or debate valuation multiples, your financial model must answer a single question: *On your current expense trajectory and real revenue growth rate, do you reach profitability before your bank balance hits zero?*

Combining Thiel’s long-horizon monopoly economics with Graham’s immediate cash-survival discipline gives technical founders an unfair edge. You build for a ten-year monopoly while managing burn like tomorrow’s capital markets might freeze.

---

## Key Concepts

### 1. Value Creation vs. Value Capture (The Monopoly Equation)
In classical economics, perfect competition is equilibrium: supply meets demand, marginal revenue equals marginal cost, and economic profits drop to zero. Thiel’s core thesis is that **capitalism and competition are opposites**. 
* **1 to n businesses** compete in crowded markets (e.g., undifferentiated SaaS wrappers or commodity API resellers). Every dollar of margin gets competed away through customer acquisition costs (CAC) and price cuts.
* **0 to 1 businesses** establish a creative monopoly through proprietary technology (10x better), network effects, economies of scale, and branding. Only a monopoly generates the excess cash flows required to fund multi-year R&D rather than daily survival.

### 2. Discounted Cash Flow (DCF) and Long-Horizon Value
A company’s fundamental value today is the sum of all future cash flows it will generate, discounted back to the present:

$$\text{Enterprise Value} = \sum_{t=1}^{\infty} \frac{\text{FCF}_t}{(1 + r)^t}$$

Where $\text{FCF}_t$ is Free Cash Flow in year $t$, and $r$ is the discount rate (cost of capital/risk). 
* **Why tech valuations look "irrational":** A traditional business (like a local restaurant) generates steady cash in years 1–3 and slowly declines. A high-growth technology monopoly typically loses money in years 1–4 while capturing market share, meaning **75% to 85%+ of its value sits in cash flows 10 to 15 years in the future**. 
* **Sensitivity to $r$:** Because most value lies in the distant tail, early-stage tech valuations are hypersensitive to interest rates and survival risk ($r$). If you run out of cash in Year 2, $\text{FCF}_{10}$ is multiplied by zero.

### 3. The Power Law of Venture Capital
Venture returns do not follow a normal bell curve; they follow a **Power Law**, where a single investment in a fund outperforms all others combined. Because top VCs know that 80%+ of startups will return zero or 1x, they do not optimize for "safe" 20% annual returns—they underwrite companies capable of becoming 100x category monopolies. As Marc Andreessen notes in *The Case for Scaling Venture*, modern software and infrastructure winners capture markets orders of magnitude larger than past decades, justifying massive upfront R&D and capital deployment—provided the company can actually own the category.

### 4. Default Alive, Burn Rate, and Runway
Paul Graham’s survival framework strips away vanity metrics (ARR projections, waitlists, press) down to three operational numbers:
* **Gross Burn:** Total cash leaving your bank account each month (salaries, cloud/GPU compute, SaaS).
* **Net Burn:** $\text{Monthly Expenses} - \text{Monthly Gross Profit}$. (Note: Revenue with negative gross margins *accelerates* death; every new user burns more cash).
* **Runway:** $\frac{\text{Cash in Bank}}{\text{Monthly Net Burn}}$ (measured in months).

If your trailing monthly revenue growth rate allows gross profit to overtake expenses before runway hits zero, you are **Default Alive**. If not, you are **Default Dead**—and entering what Graham calls the **Fatal Pinch** (*Default Dead + slow growth + insufficient runway to fix the product*).

### 5. Cap Tables, Dilution, and Instruments (SAFEs vs. Priced Rounds)
* **Pre-Money vs. Post-Money Valuation:** If an investor puts $2M into a company at an $8M **pre-money** valuation, the **post-money** valuation is $10M, and the investor owns $\frac{\$2\text{M}}{\$10\text{M}} = 20\%$.
* **Post-Money SAFE (Simple Agreement for Future Equity):** Standard Y Combinator instrument for pre-seed/seed. Instead of setting a share price today, the investor buys the right to a fixed percentage of the company at the next priced round, capped at a maximum valuation (**Valuation Cap**). 
* **Dilution Math:** Every time you issue new shares to investors or expand the **Option Pool** (typically 10%–15% reserved for future hires), existing shareholders' ownership percentages shrink proportionally. Founders aim for the pie to grow far faster than their slice shrinks.

---

## Case Study

### Surviving the Crash to Capture the Long Horizon: PayPal (2000) vs. Frontier AI (2026)

#### The Historical Playbook: PayPal in the Dot-Com Bust
In late 1999 and early 2000, PayPal was burning cash at a terrifying pace—paying $10–$20 referral bounties to acquire users while losing money on credit card processing fees and fraud. When the NASDAQ crashed in March 2000, capital markets slammed shut. Hundreds of competitors (like Webvan and Pets.com) died because they were **Default Dead** with bloated cost structures and no path to positive unit economics.

PayPal survived and eventually sold to eBay for $1.5B because Peter Thiel, Max Levchin, and David Sacks executed two simultaneous moves:
1. **Immediate Unit Economics Fix:** They raised a $100M lifeline right before the crash closed, then ruthlessly modeled every transaction as $\text{Volume} \times \text{Take Rate} - \text{Fraud} - \text{Funding Costs} - \text{Support}$. By shifting users from expensive credit card funding to ACH bank transfers and introducing merchant fees, they turned negative unit margins positive overnight.
2. **Long-Horizon Monopoly Lock-In:** While competitors retreated, PayPal dominated eBay payments, achieving a ~70% market share on the platform—creating a two-sided network effect where buyers needed PayPal because sellers required it, and vice versa.

#### The 2026 Parallel: Frontier AI Labs vs. Wrapper Startups
The exact same financial structure governs the AI landscape today:
* **The "Dot-Com Wrapper" Trap (1 to n):** Thousands of AI application startups launched between 2023 and 2026 as thin UI layers over frontier APIs. Despite rapid initial ARR growth, they face negative or razor-thin gross margins due to inference token costs, zero switching costs, and ruthless price competition. When growth slows, they hit Graham’s Fatal Pinch.
* **The Long-Horizon Infrastructure Bet (0 to 1):** Compare that to frontier model labs like **Anthropic** and **OpenAI**. In 2025–2026, both burned billions of dollars annually on compute and R&D ($3B–$9B+ per year) while raising capital at massive valuations ($380B+ to $1T+ trajectories). Investors underwrite these valuations using Thiel’s DCF logic: they are betting that proprietary model capabilities, enterprise API lock-in (e.g., Anthropic surging past $30B annualized revenue via Claude Code and enterprise adoption), and ecosystem gravity will yield decades of monopolistic software margins once training capex stabilizes relative to inference revenue.

---

## Exercise

### Cap Table Dilution & Runway Modeling

You and your co-founder incorporate **NexusAI**, splitting **8,000,000** common shares 50/50 (4,000,000 shares each).

**Stage 1: Pre-Seed (Post-Money SAFE)**
You raise **$1,000,000** from an angel syndicate on a Y Combinator Post-Money SAFE with a **$10,000,000 Valuation Cap**.

**Stage 2: Series A (Priced Round)**
18 months later, your product hits $100k MRR. A Tier-1 VC offers a **$5,000,000** investment at a **$20,000,000 Pre-Money Valuation**. As a condition of the term sheet, the VC requires creating an unallocated **10% Post-Money Employee Option Pool** *prior* to the Series A conversion (meaning the pool dilutes founders and SAFE holders, not the Series A VC).

**Calculate the following:**
1. What percentage of the company do the Pre-Seed SAFE investors own immediately upon conversion?
2. What is the Post-Money Valuation of the Series A?
3. What percentage does the Series A VC own?
4. What is your individual founder ownership percentage after the Series A closes?
5. **Runway Check:** Post-Series A, your total cash in the bank is $5,200,000. Your monthly expenses are $350,000, and your current gross profit is $100,000/month, growing at **12% month-over-month**. Are you currently *Default Alive* or *Default Dead*? (Hint: Calculate how many months it takes for gross profit to reach $350,000 using $100,000 \times (1.12)^n \ge 350,000$, and compare cumulative net burn against your $5.2M cash balance).

<details>
<summary><strong>Click to verify your solutions</strong></summary>

1. **SAFE Ownership:** $\frac{\$1,000,000}{\$10,000,000} = \mathbf{10.0\%}$ (Since the Series A pre-money valuation of $20M exceeds the $10M cap, the SAFE converts at the $10M cap).
2. **Series A Post-Money Valuation:** $\$20,000,000 \text{ (Pre-Money)} + \$5,000,000 \text{ (Investment)} = \mathbf{\$25,000,000}$.
3. **Series A VC Ownership:** $\frac{\$5,000,000}{\$25,000,000} = \mathbf{20.0\%}$.
4. **Individual Founder Ownership:** 
   * Total post-Series A pie = $100\%$.
   * Subtract Series A VC ($20\%$), SAFE holders ($10\%$), and new Option Pool ($10\%$) = $60\%$ remaining for the founders.
   * Split 50/50 between two co-founders = **$\mathbf{30.0\%}$ each** (worth $\$7.5\text{M}$ on paper).
5. **Default Alive Check:**
   * Solve $100,000 \times (1.12)^n = 350,000 \implies (1.12)^n = 3.5 \implies n = \frac{\ln(3.5)}{\ln(1.12)} \approx \mathbf{11.05\text{ months}}$.
   * Your initial monthly net burn is $\$350\text{k} - \$100\text{k} = \$250\text{k}$, and shrinks every month as gross profit grows. Even at the maximum burn rate of $\$250\text{k/mo}$ over 12 months, total burn is under $\$3.0\text{M}$, well below your $\$5.2\text{M}$ cash balance. You reach profitability in Month 12 with ~$3.5M+ still in the bank. **You are Default Alive.**
</details>

---

## Interactive Element (Optional)

### Conceptual Spec: *Runway & Dilution Simulator*

**Objective:** Allow engineering founders to visualize how early equity decisions and unit economics compound over a 36-month horizon.

* **Input Panel (Sliders & Toggles):**
  * *Capital & Equity:* Pre-Seed SAFE Raise ($), SAFE Valuation Cap ($), Series A Raise ($), Series A Pre-Money ($), Option Pool (%).
  * *Operations (Graham Mode):* Starting Cash ($), Monthly Fixed Burn ($), Starting MRR ($), Gross Margin (%), Monthly Revenue Growth Rate (%).
  * *Long-Horizon Valuation (Thiel Mode):* Terminal Year-10 Free Cash Flow ($), Discount Rate / Survival Risk $r$ (%).
* **Real-Time Visualizations:**
  1. **Dynamic Cap Table Stacked Bar:** Shows exact founder ownership erosion across Pre-Seed, Option Pool creation, and Series A, alongside the dollar value of the founder's stake.
  2. **Cash vs. Burn Trajectory Chart:** Plots monthly cash balance against monthly gross profit. Dynamically flags the exact month of breakeven (**Default Alive** in green) or the exact month cash hits $0 (**Default Dead / Fatal Pinch** in red).
  3. **DCF Sensitivity Curve:** Graphs present Enterprise Value against the discount rate ($r$), demonstrating visually why cutting survival risk early dramatically increases company valuation today.

---

## Additional Resources

* **Peter Thiel & Blake Masters — *Zero to One* (2014):** Specifically Chapters 3 (*All Happy Companies Are Different*), 4 (*The Ideology of Competition*), 5 (*Last Mover Advantage*), and 6 (*You Are Not a Lottery Ticket*).
* **Paul Graham — *Default Alive or Default Dead?* (2015):** Essential reading on calculating startup survival trajectories and avoiding premature hiring before product-market fit.
* **Marc Andreessen — *The PMARCA Guide to Startups* & *The Case for Scaling Venture* (a16z):** Deep dives into Product-Market Fit ("The Only Thing That Matters"), the "Idea Maze," and why modern category winners require scaled capital deployment.
* **Sam Altman — *Startup Playbook* (Equity & Fundraising Sections):** Practical heuristics on why founders should never optimize for valuation over momentum, and how dilution rules of thumb work from Seed to Series B.
* **Y Combinator — *SAFE User Guide & Cap Table Templates*:** The official mathematical mechanics and post-money SAFE spreadsheet models used across Silicon Valley.