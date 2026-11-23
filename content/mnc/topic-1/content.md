---
title: "Project Management"
path: mnc # founder | startup | mnc | not-for-profit
topic_order: 1 # 1-4, sets this topic's position within the path
author: "Peter"
status: draft # draft | review | final
ai_use: "Used Claude for topic research (verified sources myself) and draft structure" # declare any AI use here, or "none"
---

## Introduction

Project management is how a group of people gets a defined piece of work done: agreeing what will be built, by when, for how much, and who decides when those things collide.

At a startup, project management can be a whiteboard and a group chat. At an MNC it is an entire system of its own.
You probably won't be the project manager in your first role. But you will estimate work, flag risks, attend stand-ups and planning, and feel the consequences when a plan is wrong. Engineers who understand how the plan works get listened to when they say it won't.

## Key Concepts

<!-- The core content. -->
1. The iron triangle: you can't fix everything
Every project trades off scope, time and cost, with quality caught in the middle . Fix all three corners and quality is what quietly gives way.

If the deadline is fixed and you're behind, you have four options, and each one costs something. You can cut scope, which moves features to a later release. You can add people, which costs money now and often causes more delay . You can move the date, which costs trust with customers or other teams. Or the team can "just work harder", which costs quality, testing and weekends, and leaves you with tech debt and burnout.

2. Plan-driven vs. agile
Plan-driven ("waterfall") work moves through fixed phases: requirements, design, build, test, release. Ironically, Royce's 1970 paper, usually cited as its origin, called the one-pass version "risky and invites failure".

Agile delivers in short cycles and adjusts the plan as you learn, valuing working software and responding to change over heavy documentation and fixed plans (Beck et al., 2001). Scrum, the most common framework, uses fixed-length sprints, a prioritised backlog, daily stand-ups and retrospectives.

At an MNC you'll usually see a hybrid: agile teams running sprints inside annual budgets, quarterly roadmaps and release gates. Your "agile" team will probably still have a Gantt chart somewhere above it.

3. Agile at scale
SAFe groups teams into "release trains" that plan together every 8–12 weeks; the "Spotify model" uses autonomous squads grouped into tribes (Kniberg and Ivarsson, 2012). A former Spotify engineer later wrote that the model was never fully implemented even at Spotify (Lee, 2020). Copying an org chart doesn't copy the culture.

4. Estimation is hard, and adding people makes it worse
Planning fallacy: people underestimate how long their own tasks will take, even when they know similar tasks overran before (Kahneman and Tversky, 1979).
Cone of uncertainty: at the start of a project, estimates can be off by a factor of four in either direction; they narrow only as decisions get made (Boehm, 1981; McConnell, 2006).
Brooks's law: "adding manpower to a late software project makes it later" (Brooks, 1975). New people need onboarding, and every extra person adds communication paths: n people have n(n−1)/2 possible pairs.

That number grows much faster than the team. A team of 4 has 6 possible pairs, a team of 8 has 28, and a team of 16 has 120. Doubling the team more than quadruples the number of conversations that can go wrong.
## Case Study

HealthCare.gov: a fixed date, 33 contractors and no one in charge

On 1 October 2013 the US government launched HealthCare.gov, its new health insurance marketplace. Users hit outages and technical failures at launch and for weeks after (HHS OIG, 2016). The roots were in project management:
•A fixed, political deadline with uncertain scope and funding: a high risk of failure from the start.
•Fragmented delivery: CMS, the agency in charge, managed 60 contracts awarded to 33 companies, including the MNCs CGI Federal and Accenture.
•Unclear authority: the GAO found confusion over who could make contracting decisions in the days before launch.
•Weak requirements and testing: requirements were not effectively managed and testing was incomplete. A month before launch, CMS raised concerns about the main contractor's code quality, testing and missing functionality, but launched anyway.

The take-away from this is that software projects rarely fail due to the likes of one line of bad code. More often than not it is because there is not one person with the authority, info and/or courage to say "this isn't ready, here is what we need to cut".

## Exercise
Name the trade-off

Your team has promised a new login page in 2 weeks. With one week left, you realise the remaining work will take about 3 more weeks. Your manager says the date can't move.

Which option would you choose, and what does it cost?

A) Ask for two more engineers to join for the last week. B) Launch with email login now and add Google sign-in in the next release. C) Have everyone work late every night until it's done.


Answers:
B. If the date is fixed, cut scope . The cost is that one feature arrives later, but users still get a working login page on time.

A usually makes things later. New people need time to get up to speed, and that time comes from the team that's already behind.
C gives up quality and testing to save the date. Bugs in a login page are a security risk, and a tired team makes more of them.


## Interactive Element (optional)

<!--
Describe anything you'd like turned into an interactive component:
quiz, game, video embed, interview clip, etc. The Creative Lead and
devs will take it from here, but the more detail you give (what it
asks, what "correct" looks like), the closer the build will match
what you had in mind.
-->

## Additional Resources

The Scrum Guide: the official, 13-page definition of Scrum. (https://scrumguides.org/scrum-guide.html)
Manifesto for Agile Software Development: the four values and twelve principles. (https://agilemanifesto.org/)
GAO-14-694: HealthCare.gov: the full report behind the case study. (https://www.gao.gov/products/gao-14-694)
Spotify's Failed #SquadGoals: why copying another company's org chart doesn't work. (https://www.jeremiahlee.com/posts/failed-squad-goals/)
The Mythical Man-Month (Brooks, 1975): John Savage recommendation