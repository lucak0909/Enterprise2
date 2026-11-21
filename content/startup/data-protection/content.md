---
title: "Data Protection in a Startup"
path: startup
topic_order: 2
author: "Luca"
status: draft
ai_use: "First draft generated with AI (Claude) from my outline and sources; needs my review/editing pass before it's marked ready, and the final ai_use line should describe what actually changed."
---

## Introduction

At a large company, data protection is somebody else's job — there's a Data Protection
Officer, a legal team, and a privacy review before anything ships. At a startup, there
usually isn't. The first few engineers *are* the privacy team, whether they've been told
that or not. Every signup form, analytics event, and third-party SDK you wire up is a
decision about someone else's personal data, often made under deadline pressure with no
one checking your work.

This matters for two reasons that are specific to startups. First, the cost of getting it
wrong compounds: a data-protection problem discovered at 50,000 users is far cheaper to
fix than one discovered at 5 million, and a breach or regulatory fine early on can kill a
company that doesn't have the cash reserves or reputation to absorb it. Second, investors
and enterprise customers increasingly check this before writing a check or signing a
contract — "how do you handle user data" is now a standard due-diligence question, and a
vague answer is a red flag.

## Key Concepts

**Personal data is broader than you think.** Under GDPR (and similar laws like the UK
GDPR and California's CCPA/CPRA), personal data isn't just names and emails — it's
anything that can identify a person, directly or indirectly: an IP address, a device ID,
a behavioural analytics trail, even a hashed user ID if it can be linked back to someone.
Most startups collect far more of this than they realise, often by default, through
analytics and crash-reporting SDKs.

**Privacy by design.** The core engineering principle: privacy isn't a feature you bolt
on before launch, it's a default you build in from the first schema. In practice this
means:
- **Data minimisation** — collect only the fields you actually need right now, not the
  ones you might want for a feature you haven't built yet.
- **Purpose limitation** — data collected for one reason (e.g. fraud detection) shouldn't
  silently get reused for another (e.g. ad targeting) without telling users.
- **Storage limits** — delete or anonymise data once it's no longer needed, rather than
  keeping everything forever "just in case."

**Legal basis and consent.** You need a lawful reason to process personal data — consent
is one, but not the only one (others include "necessary to perform the contract" or
"legitimate interest"). Consent, when you do rely on it, has to be a genuine opt-in: pre-
ticked boxes and buried checkboxes in a 40-page terms-of-service don't count, and this is
one of the most common things regulators fine companies for.

**Engineering responsibilities, concretely:**
- Encrypt personal data in transit (TLS) and at rest.
- Keep access controls tight — not every engineer needs production database access to
  the full users table.
- Scrub personal data from logs. A stack trace with a user's email and password reset
  token in it is a breach waiting to happen.
- Know what your third-party vendors do with the data you send them (analytics,
  crash reporting, email providers) — you're still responsible for it once it leaves
  your servers, under what GDPR calls "processor" obligations.
- Build in a way to actually delete a user's data on request. "Right to erasure" isn't
  optional, and retrofitting deletion into a system that assumes data is permanent is
  expensive.

**Do you need a DPO?** Formally, only if you process data at scale or data concerning
sensitive categories (health, biometrics, etc.) as a core activity — most early-stage
startups don't hit that threshold. But *someone* on the team should own privacy decisions
even informally, because "nobody owns it" is how mistakes happen.

## Case Study

**Clearview AI** is a useful cautionary example precisely because it was a startup, not
an established tech giant, when the core data-protection failure happened. The company
built facial recognition software by scraping billions of photos from public social media
profiles without asking the platforms or the people in the photos for permission, then
sold access to the resulting database to law enforcement.

From an engineering standpoint, nothing about the scraper was technically remarkable —
it's the kind of project a small, capable team can genuinely build in weeks. The failure
was entirely in the data-protection reasoning that didn't happen: no one asked whether
"the data is publicly visible" is the same as "we have a lawful basis to collect and
reuse it" (it isn't, under GDPR), and no one built in a way for a person to find out they
were in the database or ask to be removed.

The consequences were severe and fast once regulators caught up: Clearview was fined by
data protection authorities in the UK, Italy, France, Greece, and elsewhere (penalties in
the UK and Italy alone running to many millions of pounds/euros), ordered to delete data
and stop processing EU/UK residents' data, and became the subject of ongoing litigation
in the US. For a startup, a regulatory order to delete your core dataset is close to an
existential event — it's not a fine you budget for, it's a product you may no longer be
legally allowed to run.

The lesson for a founding engineer isn't "don't build ambitious data products" — it's
that the privacy-by-design questions (what's our legal basis, did we tell people, can
someone opt out) need to be asked *before* the pipeline ships, not after a journalist or
regulator asks them for you.

## Exercise

You're the first engineer at a startup building a mobile app that tracks users' daily
habits (sleep, exercise, mood) to give personalised recommendations. In pairs or small
groups:

1. List the personal data fields your signup and tracking flow would actually collect.
   Which of these count as "special category" data under GDPR (health data does)?
2. Sketch the consent flow a user would see. What's the minimum you need to ask, and
   where would a pre-ticked box or buried checkbox be tempting to use — and why is that
   a problem?
3. Your analytics vendor's free tier requires sending full event payloads to their
   servers. What would you check before wiring that up, and what would make you say no?
4. A user emails asking you to delete their account and all their data. Walk through
   what your system would actually need to do to fulfil that request today. Where would
   it get stuck?

## Interactive Element (optional)

A short "spot the data protection mistake" game: show 5–6 real-looking signup screens or
code snippets (a pre-ticked marketing opt-in, a log statement printing a password reset
token, an analytics SDK call sending a full name and precise GPS location for a
step-counter app) and have the reader tag which ones are violations and why, with a
one-line explanation revealed after each guess.

## Additional Resources

- UK Information Commissioner's Office (ICO) — "Guide to the UK GDPR" (plain-language
  guidance aimed at organisations, including startups)
- GDPR.eu — "GDPR for startups" explainer
- ICO enforcement action summary: Clearview AI Inc. (for the case study above)
- OWASP — "Top 10 Privacy Risks" (engineering-focused checklist)
- Article 25 GDPR — "Data protection by design and by default" (the legal text behind
  the privacy-by-design principle above)
