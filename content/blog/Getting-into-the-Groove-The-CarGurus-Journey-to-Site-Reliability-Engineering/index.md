---
title: "Getting into the Groove: The CarGurus Journey to Site Reliability Engineering"
date: "2019-10-10T17:32:23.279Z"
author: abonassera
permalink: "/Getting into the Groove: The CarGurus Journey to Site Reliability Engineering/"
tags:
- SRE
- culture
---

### An Introduction
A few years ago Google shared how they run their production environments when they published a book introducing [Site Reliability Engineering](https://landing.google.com/sre/books/) to the world. At the time I was managing a production operations team, and found the ideas and processes Google had put in place to manage their "world scale" resources inspiring. I felt that my team at the time was struggling under the operational toil of keeping our public facing high traffic web services running. We were staffed primarily to do manual, repetitive toil and we were not considered part of the "Engineering" organization. My team was made up of well-paid but frustrated engineers that looked at monitoring services on large TV screens in a NOC waiting for green things to become red things. To me, the concept of treating operations as a software engineering problem via a formalized, consistent model and refusing to accept repetitive toil as a solution for problems felt like it could provide an improvement to how things worked in the technical world.

Since Google's original publication other books have been published, a community grew, and multiple Usenix yearly conferences world wide created where individuals and organizations come together to discuss SRE. 

As individuals started to try and bring SRE practices into their organizations and teams, it quickly became apparent that most of the places we work are not Google, or Facebook, or Netflix. Different "versions" of SRE have evolved to address this, all working towards how Yaniv Aknin concisely distilled his definition of SRE at SREcon EMEA in Dublin, Ireland last week: **"Measurably Optimizing Reliability vs. Cost"**.

### My Journey to SRE
Here at CarGurus I am the Senior Manager of our SRE team. We are a relatively new team, created early in 2019, and have the support of our product teams and Senior Management to create a SRE practice from scratch. I was extremely excited at this opportunity and jumped at the chance.  My excitement started to fade a bit when we sat down and started having detailed discussions on how to actually get started! I decided to write this blog post to perhaps offer some advice or insight to individuals in similar situations.

When I joined the team in December of 2018, great work was being done in creating robust observability tools, and I was hired to manage the team that designed and provided these tools. We provided the ability to create and collect rich metrics and logging data, and felt that working with our product teams to best use this information to ensure positive customer experience and create better experiences for those developing these services using SRE concepts and practices would be a great logical next step. 

### The opportunity
Engineers spent time addressing incidents in production, and while it's important for everyone to have a sense of ownership, the processes and methods around how we dealt with these incidents could have been improved. Product teams naturally want to get features out, and having advocates who could demonstrably identify and even take on work to improve reliability felt right. We provided tools to track trends, alert on thresholds, create rich visualizations, but engineers were too busy to try and find ways to take advantage of them.  We felt that SRE could be something that could help in these areas.

But how could we get to something that approximates SRE? 

### The mission
Within our department, we started by trying to answer why changes were needed. We agreed that our mission in SRE at CarGurus could be to optimize reliability for agreed upon services and to help ensure a positive developer experience to our peers in engineering. We defined a service as a shared resource that more than two individuals depend on.

### How we are doing it
With the support and participation of my manager, we began meeting with senior management and engineering leads on product teams to discuss the concept and understand if there was an appetite for SRE. We also have a strong system engineering team at CarGurus, and it was important to come to an understanding about how to best co-exist. I strongly recommend this exercise, creating a shadow engineering team or operating without the sponsorship of your management will likely cause your SREs to feel like outsiders, non-aligned with teams, and lead to stress and confusion about role and ownership.

From prior experience, I felt that simply taking an existing team (a practice referred to in the SRE book as [rename and shame](https://landing.google.com/sre/workbook/chapters/how-sre-relates/#id-3xecgurhvsw-marker)) would not be ideal.  When it came to staffing, with the popularity of SRE we were meeting with a lot of candidates that had great system engineering and operational background but lacked the software engineering background we were looking for. Working with our amazing recruiting team we worked to better explain the role to prospective candidates. In short time we were able to hire two amazing engineers and are always looking for [more](https://boards.greenhouse.io/cargurus/jobs/1669824?gh_jid=1669824)!

Given the size of our team we were hesitant to take on running all of our services at once. Burnout is real!  We also felt that we had to be able to start providing value as quickly as we could. A new team spending months hiring and getting up to speed would likely result in other teams feeling we weren't living up to the promises we were making.  

**We decided to partner with product teams using a consulting/embedded model of engagement**. As a group we take on carrying the pager for agreed upon services and coordinate and guide our Incident Response processes. We started with one specific product team only, we would still jump in and provide coordination and leadership during and after incidents, but we were only committing resources to improve reliability for one of our services. Individually we focus our work on partnering with our assigned product teams to start the work of "Measurably Optimizing Reliability vs. Cost." We now are up to two supported product teams, and the model seems to be a good balance between staffing, workload, and providing value to our partners and our business. Before starting the engagement, we draft a document outlining what we commit to, and what we expect our partners to provide for us. [Here](/Service-SRE-Proposal.pdf) is a sanitized version of our most recent engagement proposal.   

### Where we are now
I feel that the work we are doing has been well appreciated by our peers, but there have been challenges.

* Staffing is a delicate operation, and something important to get right, and significant effort is needed in that area. It's important that everyone involved in hiring is on the same page about the role, team, and how we are doing it when having conversations with candidates

* Given the size of the team, we sometimes tend to be teetering on the line between [toil](https://landing.google.com/sre/sre-book/chapters/eliminating-toil/) and having the resources to improve and address technical debt 

* Sometimes we still run into areas of overlap with other teams, a lot of my time is spent on working to define areas or ownership 

* We currently could provide a lot more information to the teams we work with that measure what value we are providing, and in what areas we can improve upon

I feel these are all solvable issues and are indicative that we're making progress on our journey to SRE

We plan on continuing to partner with our product teams to help them define Service Level Objectives and leverage the tools and services our Observability team provides to ensure we are both operating within these limit and maximizing their ability to do what they do, create and develop amazing products!

