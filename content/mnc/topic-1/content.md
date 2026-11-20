---
title: "GDPR"
path: mnc # founder | startup | mnc | not-for-profit
topic_order: 1 # 1-4, sets this topic's position within the path
author: "Peter"
status: draft # draft | review | final
ai_use: "none" # declare any AI use here, or "none"
---

## Introduction

GDPR (General Data Protection Regulation) is an EU law that sets rules for how organizations handle the personal data of people in the EU, but it can also apply outside of the EU too. The most important thing to remember for software is that GDPR applies to where your users are, not where your servers that store the data are located. With fines up to 4% of global annual turnover for serious breaches, and Ireland being the EU headquarters for a great deal of MNCs, GDPR is a hugely important regulation framework to keep in consideration when developing software for MNCs (and outside them too!)

## Key Concepts
<!-- The core content. -->
Within this page we will discuss three key concepts: the GDPR frameworks between the EU and US, the need to have privacy built into software design, and rules relating to notifications of data breaches. These concepts, and more, are very important to be aware of as a software engineer within an MNC, and can have far-reaching consequences if not adhered to.

EU-US Data Protection Framework (DPF):
If your app stores EU users’ data on US infrastructure such as AWS, Google Cloud or other US-based SaaS tools, that is treated as an international transfer under GDPR Chapter V, and it needs a legal basis. Working for an MNC (particularly US-owned ones) means you are almost certainly going to encounter these data non-EU data infrastructures. The DPF is currently the easiest one and was adopted by the European Commission in July 2023, following negotiations with the US to address concerns raised by the CJEU in Schrems II. US companies that self-certify under it can receive EU data without extra contracts. It has a shaky history, though: it is the third EU-US adequacy framework, following the invalidation of Safe Harbor (2015) and Privacy Shield (2020). It survived its first court challenge in September 2025, but the European Court of Justice may soon weigh in again following French politician Philippe Latombe’s appeal on October 31, 2025. 
With this as important context, the lesson for engineers is to check that your vendors are actually DPF-certified, and to design systems so EU data could be moved to EU regions if the framework falls again. GDPR-compliancy can often sit above the level of a software engineer within a company, but nonetheless it is important to be aware of these kinds of frameworks set in place in order to protect the data and privacy of your EU users.

Privacy by Design/Security:
Article 25 of GDPR requires that data protection is provided “by design and by default”. As a result of this, privacy has to be built into the architecture from the start, not bolted on before launch. In practice, that means collecting only the fields you need, setting short retention periods, making the most private option the default, and pseudonymising data wherever you can. This should massively affect the way that you plan out your systems concerning data collection, usage and storage in order to be compliant with the regulations set out.
Article 32 adds a duty to apply “appropriate technical and organisational measures”, such as encryption in transit and at rest, access controls, and regular testing of your security. For MNCs, this also covers who can access data from where. A prime example of this is discussed in the Case Studies below, in which TikTok’s €530m fine arose because the personal data of EEA users, remotely accessed by staff in China, wasn’t shown to have equivalent protection. Role-based access, audit logs and region-locked data stores are privacy-by-design decisions as much as security ones.

72hr Breach Notifications:
Under Article 33, once a company becomes aware of a personal data breach, it has 72 hours to notify its lead supervisory authority, unless the breach is unlikely to put people’s rights at risk. If the risk to individuals is high, Article 34 also requires telling the affected users directly. For an MNC, this deadline covers every country it operates in. A leaked S3 bucket in a US region exposing EU customers starts the same clock. Those 72 hours can and will disappear very fast unless engineering has prepared in advance: logging and monitoring to detect the breach, an incident runbook, a clear owner who escalates to the Data Protection Officer, and enough data mapping to answer “whose data, how much, what type?” quickly. Even breaches that don’t need reporting must be documented internally, so your incident tooling is effectively compliance tooling.
As a software engineer, recognition and understanding of this is critically important. If you came across a data breach and fail to report it/act too slowly, the consequences for user privacy, the company and yourself can be far reaching and disastrous. 

## Case Study

Meta €1.2bn fine (2023): Meta was fined a record €1.2bn in 2023 for illegally transferring personal user data from the EU to the US. This transfer was illegal due to the landmark court ruling known as Schrems II, which declared that US data protection laws are/were not strong enough to protect EU data from being accessed by US intelligence agencies. Despite the Schrems II decision having been made in 2020, data transfer to the US continued by Meta, hence the billion-euro penalty handed down to the company.

TikTok €530m fine (2025): Similarly in 2025 our own Data Protection Commission fined TikTom €530m for unlawfully transferring EEA user data to China and for transparency failures in its privacy policy.

## Exercise
Data flow quiz: For example a question (MCQ) could be like: “Your EU app uses a US CDN, an Indian support team and a Singapore backup. Which transfer mechanism covers each?” 

## Interactive Element (optional)
"Spot the data violation" code snippet/written paragraph. In this you could show a snippet of code that involves data in some way which has a GDPR-violating line(s) of code. The user could copy-paste the offending area of code, or maybe use a highlighter tool to single out area of offence. Submits answer and then a written explanation of the violation could be shown to the user giving further context behind the regulations concerning it?

## Additional Resources
The law itself: gdpr-info.eu has the full text with each article linked to its recitals. Read Articles 3, 5, 25, 28, 32–34 and 44–49.
The UK ICO’s guide to GDPR (ico.org.uk) is the most readable plain-English explainer. It covers UK GDPR, but the concepts are the same.
EDPB guidelines (edpb.europa.eu): look at Guidelines 4/2019 on data protection by design, and Recommendations 01/2020 on supplementary measures for transfers.
Irish DPC decisions (dataprotection.ie): read the primary source for the Meta and TikTok cases.
CMS GDPR Enforcement Tracker (enforcementtracker.com) is a searchable fines database, useful for picking examples. Its 2026 report also notes that international data transfers, online tracking technologies, profiling activities and behavioural data processing continue to generate the highest fines.
