---
title: "Ethics"
path: mnc
topic_order: 4
author: "Add your name"
status: draft
ai_use: "ChatGPT helped research, structure and draft this section."
---

## Introduction

Imagine you are a software engineer working for a large company. Your team is about to launch a new feature, but during testing you notice that it works badly for some users. Your manager says there is no time to fix it before release. What do you do?

This is an ethical decision. **Ethics** is about thinking carefully about what is right and fair, and how our decisions affect other people. In software, it means asking more than “Does the code work?” We also need to ask, “Who might this hurt?” and “What can we do about it?”

A multinational company, or **MNC**, operates in more than one country. Its products may be used by millions of people with different languages, backgrounds and needs. A mistake can affect many people, and a feature that works well in one place may cause problems in another.

As an engineer, you might not make the final decision. But you can test for problems, explain the risks, suggest changes and speak up when something does not feel right. The [IEEE/ACM Software Engineering Code of Ethics](https://www.computer.org/education/code-of-ethics) encourages engineers to consider the public interest and the quality of their work.

By the end of this section, you should be able to spot an ethical risk, explain who it could affect and suggest a practical response.

---

## Key Concepts

### 1. Legal does not always mean fair

Companies must follow the law. But a feature can meet legal requirements and still be confusing, unfair or harmful.

For example, an app could explain its data collection in a long privacy notice that most people never read. Even if the notice has been legally reviewed, users may still be surprised by how much information the app collects.

**What can an engineer do?** Ask the team to explain the feature in plain language, collect only what is needed and involve the privacy team. The separate data protection section explains the legal requirements in more detail.

### 2. Think about who could be affected

The people affected by a product are often called **stakeholders**. They include users, employees, customers and people whose information is used by the system.

When a product is used across many countries, people may have different needs. They may use different languages, have slower internet connections or use assistive technology, such as a screen reader.

**Example:** A security check that relies only on recognising English words may lock out users who do not speak English.

**What can an engineer do?** Ask who might struggle with the feature. Test with a range of users and involve local teams where possible. Provide another way to complete an important task.

### 3. Check for unfair results

**Bias** is an unfair pattern in a system or its results. It can happen when a product is built or tested using information that does not represent everyone who will use it.

**Example:** A speech recognition tool tested mostly with one accent may make more mistakes for people with other accents. This could make a service harder for some users to access.

**What can an engineer do?** Test with different accents and languages that the product supports. Compare the results, investigate large differences and give users a way to report problems. A good average score does not mean the tool works well for everyone.

### 4. Be honest about what the product does

Users should be able to understand important things about a product. This includes what it does, what information it uses and where it might make mistakes.

**Example:** A company uses software to help review job applications. Applicants should not be left guessing about the tool's role or what to do if they believe a mistake was made.

**What can an engineer do?** Help write clear explanations and make it possible to review or challenge important results. Do not describe a system as safe or accurate unless there is evidence to support that claim. Explaining a problem is useful, but the team should also work to fix it.

### 5. Protect people's information

People trust companies with information such as their contact details, location and account activity. A company should have a clear reason for collecting it and protect it from unnecessary access.

**Example:** A weather app may need an approximate location to show a forecast. That does not automatically mean it needs to record a user's exact location all day.

**What can an engineer do?** Ask what data the feature needs, limit who can access it and avoid putting personal details in logs or public code. If you are unsure about the rules, ask the privacy or security team.

### 6. Take responsibility and speak up

In an MNC, work may pass between several teams and offices. This can make it easy to assume someone else will deal with a risk. The team should agree who is responsible for each problem and who will check the product after launch.

If you find a serious concern:

1. Write down what you found, who could be affected and the evidence you have. Protect any sensitive information.
2. Tell your team lead and suggest a safer option.
3. If the concern is not addressed, use an appropriate company channel, such as the security, privacy or ethics team.
4. Keep a record of the decision and follow up. If there is immediate danger or the internal process is unsuitable, seek appropriate independent advice.

Follow the company's reporting process. Do not access information you are not allowed to see while investigating.

---

## Case Study: Microsoft's Tay chatbot

In 2016, Microsoft launched Tay, an experimental chatbot that talked to people online. Soon after launch, Tay posted offensive and hurtful messages. Microsoft took it offline and apologised.

In its [account of what happened](https://blogs.microsoft.com/blog/2016/03/25/learning-tays-introduction/), Microsoft said it had not fully prepared for a coordinated attack that took advantage of a weakness in Tay.

**Who was affected?** People who saw the messages, especially those targeted by them, as well as the team behind the product and people who lost trust in it.

**What was the ethical problem?** The chatbot could spread harmful content in public. The company wanted to try a new technology, but it also had a responsibility to consider how people could misuse it and how others might be hurt.

**What could a team learn from this?** Before launching a public chatbot, engineers could test it with abusive messages, limit the first release to a small group and prepare a way to monitor or pause it. After release, they could investigate harmful outputs and improve the system. These steps could reduce risk, though none can guarantee that every harmful response will be prevented.

**Think about it:** If you saw the chatbot repeat a hateful message during testing, what would you tell your team lead? Would you feel comfortable launching it? Why?

---

## Exercise: The launch deadline

You work for a fictional MNC that makes a voice-controlled customer service app. During testing, your team finds that the app often misunderstands users with some accents. These users may struggle to get help.

The app is due to launch in several countries next week. Your manager wants to release it on time and fix any problems later.

Discuss the questions with a partner or write down your answers:

1. Who could benefit from the app? Who could be left out or harmed?
2. What information would you collect to understand the problem better?
3. What are two possible ways the team could reduce the harm?
4. What would you say to your manager? What would you do if the concern was ignored?
5. Would you launch next week? Explain your choice.

<details>
<summary><strong>Click to see a suggested answer</strong></summary>

The app could help customers contact support more quickly. But people whose accents are not recognised may be unable to get the same help as others. Customer service staff could also face more complaints.

I would record examples of failed tests and check how often the problem happens across the accents and languages the app claims to support. I would ask the team to test with more relevant users and check whether the results are consistent.

The team could improve recognition before launch and offer another way to get help, such as a text option or a human support channel. I would tell the manager what we found, who is affected and what we could do next. If the concern was ignored, I would use the company's appropriate reporting channel.

On the facts given, delaying the affected voice feature is a reasonable choice until the team understands the problem and provides a suitable alternative. The final decision should consider how serious the failures are and whether people can still access support fairly.

</details>

---

## Interactive Element: Choose your next step

### Scenario: A risky chatbot launch

Your team is testing a customer support chatbot for an MNC. During testing, you find that it sometimes gives users harmful advice. The launch is tomorrow.

**Decision 1: What do you do first?**

A. Ignore the results because most answers are useful.  
B. Record the examples and tell the team lead.  
C. Post private customer conversations online to prove the problem.

<details>
<summary><strong>Reveal feedback</strong></summary>

**B.** Share enough evidence for the team to understand the risk, while keeping private information safe. A good average result does not cancel out serious harm.

</details>

**Decision 2: The team lead says the deadline is more important. What next?**

A. Stay quiet because the lead has made a decision.  
B. Raise the concern through the appropriate company channel and suggest delaying or limiting the feature.  
C. Delete the test results.

<details>
<summary><strong>Reveal feedback</strong></summary>

**B.** Explain the risk and use the company's reporting process if it remains unresolved. Keep a record and suggest practical steps the team can take.

</details>

**Decision 3: The team fixes the examples you reported. Is the work finished?**

A. Yes, because those examples now pass.  
B. No. Test more cases, agree who will monitor the chatbot and prepare a way to pause it if needed.

<details>
<summary><strong>Reveal feedback</strong></summary>

**B.** Fixing known examples is a start. More testing and monitoring help the team find other problems, although they cannot guarantee that every risk has been removed.

</details>

### Idea for the web team

Turn the scenario into a short decision activity. Show one question at a time, let the reader select an answer and then show the feedback above. At the end, display a short reminder: **record the risk, speak up, and keep checking after launch**.

### Before you ship: a quick checklist

Copy these questions into a project ticket or discuss them at a team meeting:

- [ ] **People:** Who benefits, and who could be harmed or left out?
- [ ] **Fairness:** Have we tested with different users and relevant languages?
- [ ] **Privacy:** Do we need the information we collect, and is it protected?
- [ ] **Honesty:** Do users understand what the feature does and its limits?
- [ ] **Responsibility:** Who will respond if something goes wrong?
- [ ] **After launch:** How will we spot problems, and can we pause the feature?

**Final reflection:** Think of an app you use or have built. Pick one question from the checklist. What is one change that could make that app safer or fairer?

---

## Additional Resources

- [IEEE/ACM Software Engineering Code of Ethics](https://www.computer.org/education/code-of-ethics) — principles to help engineers make responsible decisions.
- [Microsoft: Learning from Tay's introduction](https://blogs.microsoft.com/blog/2016/03/25/learning-tays-introduction/) — Microsoft's explanation of the chatbot case.
- [NIST AI Risk Management Framework](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/) — a guide to identifying and managing risks in AI systems.

## Declaration of Generative AI and AI-assisted technologies in the writing process

ChatGPT was used to help research, structure and draft this section in simple English. The author should review the content and sources, make their own changes and update this statement so it accurately describes their use before submission. The group should place the final declaration immediately above the references in the full submission, as required by the brief.

## References

- IEEE Computer Society and Association for Computing Machinery (n.d.) [*Software Engineering Code of Ethics and Professional Practice*](https://www.computer.org/education/code-of-ethics).
- Lee, P. (2016) [*Learning from Tay's introduction*](https://blogs.microsoft.com/blog/2016/03/25/learning-tays-introduction/), Microsoft, 25 March.
- National Institute of Standards and Technology (2023) [*AI Risk Management Framework: Core functions*](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/).
