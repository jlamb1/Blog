---
title: "Meet the CTO: a Q&A with Kyle Lomeli"
date: "2020-01-28T12:00:00.000Z"
author: "eng"
tags:
- blog
- culture
---


<div style="max-width: 200px;"><img src="Kyle.jpg" alt="CarGurus CTO Kyle Lomeli" /></div>

**To start, can you give me the SparkNotes version of the CarGurus tech stack?**

We have a Java-based tech stack that relies on Spring and heavily modified Struts 2.0. We use Freemarker as our templating engine and we are transitioning more of our front-end over to ReactJS. MySQL is our relational database, and we use MongoDB and Elastic Search as our NoSQL databases. We also use Kafka for some of our stream processing.

Our system follows somewhat of a services-oriented architecture, although right now it leans more toward a monolithic code base. But we are actively taking steps to introduce platform as a service to help us progressively get closer to a microservices-oriented architecture.

We’re in the process of finishing containerizing all of our systems and moving towards incorporating Kubernetes into our ecosystem and incorporating Bazel as our build mechanism.

Java is our primary language and that’s what our main website’s back-end is written in, but there are teams that leverage other languages such as Python and Ruby.

**What are your personal preferred coding languages?**

It depends on the setting, I guess. Since I don’t do coding anymore as part of my daily job, I focus most of my non-work-related creative energies towards my hobby projects. My most recent pet projects have been written in Haskell. Lately I have been eyeing Rust.

**Do you want to reveal what any of these pet projects are?**

Honestly these aren’t change-the-world type projects, but they’re ones I can sink my teeth into. One I’m working on right now is creating a chess engine that is flexible enough to declaratively represent multiple chess board layouts and game variations and enables me to explore a little bit of AI, but also has a web front end component to it. I like it because I get a good sense of the expressiveness of a given language and it allows me to get a sense of the relative maturity of their supporting libraries and web-frameworks.

**Do you try to always be learning new languages?**

Ha! You could say yes and no. I have evolved my appreciation for different types of programming languages over the years. In my younger years, learning a language to me was not a very interesting exercise. Why bother with different languages when you could just stick to one and get the job done? I used to see any given language very much like a tool with a single purpose. I saw it as having your favorite hammer, you get used to the grip and the handle and the weight of it, and you go about being productive. Eventually you decide to buy a new one. It may have small differences like a nicer finish, a nicer grip, but at the end of the day it’s still a hammer used exactly the same way. That had been my experience with learning new languages.

What I didn’t realize was that I didn’t have a full appreciation for the different programming paradigms out there. I had been raised living in an imperative programming world and didn’t really see the need to go out of those bounds. That changed when a friend of mine began sharing with me his adventures in the yonder lands of functional programming. After initially scoffing at the idea, then warming up to it a little more and learning what people liked about it, I decided to pick up Haskell.

That’s a funny term to use: “pick up.” I thought I could simply read up on the syntax, dive into a project, and come out the other end with another tool in my tool-belt. I don’t know of anyone that has transitioned from imperative to functional paradigms as easily as the term “pick-up” implies. That was my mistake!

Wow! Was THAT a refreshing and challenging experience for once! It wasn’t the language that was a challenge but rather the paradigm itself. As I was going from imperative languages over to functional languages, I realized how arrogant I was in my younger years, thinking that one language was like the next. I used to think you could just take a little time to learn the syntax and how the libraries operate, and you’d be good to go. Then I take on learning Haskell and it’s an entirely different world! It felt like learning to program from scratch. So far, it’s been an eye-opening, humbling, interesting, and rewarding journey and I haven’t even scratched the surface of all I can learn in that language. It gives me an opportunity to focus on continually improving on something.

**In terms of growth at CarGurus, did you ever have an “oh crap” moment where you realized we might not be ready for this?**

That’s an interesting question. Sometimes I feel like it’s been such a wild ride that I haven’t even had a chance to step back and say, “holy shit, look at where we are.” It’s always been about focusing on that next goal and the next goal after that, and we’ve been chugging along like that.

I can tell you from a personal standpoint that stepping into progressively more senior leadership roles, spending more of my time mentoring, coaching, and growing the Engineering team, was a big departure from what I normally had to do. My focus moved away from being about solving technical problems to solving more growth, culture and operational problems. I wasn’t directly contributing to the outcome of projects, but rather influencing them in a given direction. Even as the nature of my day-to-day job changed, even then I can’t say I had an “oh crap” moment. Much of this transition happened gradually by taking on progressively bigger leadership roles within the company.

I could say that the same applies to our company’s growth; it has felt natural in a way. I mean, if you take a step back you can definitely say, “holy shit we grew really fast,” but when you’re in the thick of it, it feels more like consistent, progressive improvements that span years. I wouldn’t say we take it for granted, but you can definitely get a little lost in the day-to-day where you don’t constantly see the forest through the trees. Looking back, it looks like it was this meteoric growth spurt, but to me it felt like it actually ramped up at a steady enough pace to give us a chance to adapt and be able to plan how we’ll change things. We could focus on adjusting only what we needed to change in our approach as the company grew while continuing to drive forward and stay focused on that next goal.

**So if there wasn’t a real-time or looking ahead moment, was there a time you looked back and were hit by all that your team has accomplished?**

I think when we went through the IPO process it was a much more visible marker to what we’ve accomplished over these years. And of course, there’s everything that comes along after that from being a public company where we have to keep this growth and pace. But we also now have all of these other things keep in mind like optics in the market and how do we make sure that our narrative is consistent, which we didn’t have to worry too much about on the engineering side before. That being said, it’s incredibly empowering. With the increased exposure we’re able to open more doors than were previously closed to us; like attracting more talent, more easily exploring new partnerships that accelerate product development, etc…

**Let’s change gears, a number of months back we had a big data center move. How fun was that?**

You know, it wasn’t as bad as I thought it would be. Don’t get me wrong, it could have turned out very bad, but the team pulled together and did an incredible job of ensuring we defined a plan that mitigated risk and that things went smoothly and ahead of schedule. I can only say it was “fun” in retrospect – now that it is at a very safe distance. There was a huge amount of pressure and anxiety leading up to that critical switch-over moment. Despite our best efforts of dotting our i’s and crossing our t’s, the knowns could have really made it an unpleasant experience.

It was great to see the team coming together the way they did. They were the heroes in this whole process. And even though it was somewhat of a thankless job and despite all of the stress and frenetic work, the nice thing that came out of it was the bonding. You’re in the trenches with people, working very closely and we’re all together on one singular focus. Everyone was going above and beyond to make this a success and that was very gratifying to see – that was the fun part.

And then the culmination of all of that preparation work took place on one night where the whole team stayed in the office and realized the fruits of all of our labor. Seeing it go out successfully was very gratifying and validating to all of the work that we did and all of the people involved. It was unique in that it did break a bit of the “monotony” of the daily 9-5 to come into the office at 3am in your pajamas and pull an all-nighter. It’s not usually something anyone ever wants to do but considering what was at stake and that everyone was in it together, it was a nice unifying moment. Not to mention the fifty pounds of chocolate chip cookies and watching Office Space during downtime – that was fun too.

**What’s the general architecture that we use?**

Right now, it’s a hybrid of a monolithic system and service-oriented architecture. We have one app that handles most of the traffic coming into our site but then offloads a number of requests over to supporting services. Still, all of the business logic is stored on that monolithic web app and that’s something we’re looking to break apart into smaller web apps that are more aligned to the different verticals for which we have teams. Then they can own a service in full and we won’t have to coordinate as often whenever there’s an issue that one team originated that impacted another team and all of the inefficiencies that come along with trying to triage those issues. So, we’re going more towards micro-services with a Platform-as-a-Service type of component to it to facilitate everything. That’s a very long journey and right now we’re putting the building blocks in place. It’s going to be up to every team to iterate and move in that direction over a period of time.

**What are the habits of successful engineers at CarGurus?**

Great collaboration and a strong sense of ownership are two of the most important qualities. They should also have an analytical mind and be very pragmatic. You wouldn’t be successful here if you obsessed over having the 100% perfect solution that takes six months to execute on. We look for people who recognize the goal or the business case and reason that they can get the most beneficial result with a practical approach that is not perfect, even though it’s not necessarily the most elaborate or robust solution that we would probably want to have in place. We need someone who is comfortable with making those trade-offs for the sake of getting data to validate sooner that we are on the right track from a product-fit perspective, with the understanding that if we feel we found something that will stick we will follow it up with a cleaner, more robust solution.

**How is the relationship between engineering and business at CarGurus?**

As a company one of our fundamental values is collaboration. Engineering doesn’t work in a vacuum. We are all in this together. Whether we are talking about making enhancements to our products or providing tooling and automation to enable other departments to operate more efficiently, Engineering is an enabler for many different areas of the organization. In all cases, Engineering has stakeholders that we work with closely.

On the product front, we work side-by-side with the Product Management organization. We work together to help define all product features and enhancements and roll-out strategies. It’s a healthy relationship that ensures different viewpoints factor into the evolution of product features.

Similarly, on company-facing automation and enhancements, we have many different stakeholders that requires us to adopt a service-oriented mindset. It’s always gratifying to get to work so closely with so many different parts of the organization and learn how it all comes together.
