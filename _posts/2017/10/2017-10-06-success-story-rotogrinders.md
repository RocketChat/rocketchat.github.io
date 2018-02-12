---
title: "Customer Success Story:  RotoGrinders"
categories:
  - Customer Success
  - Features
date: 2017-10-06 16:45:10
author: Sing Li
cover: /images/posts/2017/10/success-story-rotogrinders/rotogrinders.png
redirect_from: /blog/success-story-rotogrinders
---

Using their own knowledge and research, sports fans can now get in on the action by assembling their own virtual teams of professional athletes from a particular league or competition to compete against others' virtual teams online; the virtual teams earn points based on the actual statistical performance of the players in real-world competitions. Daily fantasy sports (DFS) ups the ante of traditional fantasy sports by allowing players to compete for short-term periods, such as a week or single day of competition (as opposed to those that are played across an entire season). For some, this is a friendly competition but the fact that fantasy sports is now a multibillion dollar industry suggests that for many, this has become a serious sport in and of itself.

![Rotogrinders](/images/posts/2017/10/success-story-rotogrinders/rotogrinders.png)


### The Leading Community for Daily Fantasy Sports

Since 2010, DFS company Rotogrinders has provided their 200,000-strong community members with everything needed to be successful in DFS: DFS news, DFS analysis, DFS blog posts, DFS discussion forums, and behind-the-scenes views of America's favorite pastimes. They've grown progressively more statistics-focused (especially with Major League Baseball) and offer several stats tools, have industry experts to weigh in on games (they even have an in-house meteorologist on-hand to discuss rain chances!), and provide urgent news teams for every sport they cover. In fact, the only thing you won't find on their website is actual DFS contests - They leave that to sites like DraftKings and FanDuel and instead focus on providing players with everything they need to assemble the best team.

### Scaling Up and Scaling Down with Rocket.Chat, On Their Terms

Recently, Rotogrinders was in a pickle and a one-size-fits-all solution wasn't going to cut it. Their issue: They were continuing to grow quickly and their community was extremely engaged but their site was regularly pushed to the limit, specifically in their discussion forums just before games were starting and people were deciding how to finish building out their fantasy team rosters; oftentimes, a single room might have 2000 people in it discussing the pros and cons of adding one player or removing another. During these times, Rotogrinders' need to scale up was obvious so they did just that, opting to run multiple chat servers at once in order to support their users. However, they didn't want to waste money paying for chat servers that they weren't using when user count was down (for example, in the middle of the night).&nbsp;

> "We needed a solution that could quickly scale up or down." - Rotogrinders CTO, Riley Bryant

Initially, Rotogrinders considered using Slack because the Rotogrinders internal team has used it internally but that option was quickly dismissed as it doesn't offer site level integration nor the ability to handle the scale they needed. They then checked out Discourse but it doesn't have site level integration either so it was a no-go. Enter: Rocket.Chat.

To get started, Rotogrinders deployed an auto-scaling cluster with two to seven instances of middle-tier Rocket.Chat servers against a MongoDB replica set. Randomly, they were experiencing login failures. Initial diagnostics seem to indicate possible race conditions involving data propagation delay between primary and secondaries of the MongoDB cluster. At this point, Rotogrinders contacted Rocket.Chat. After a round of experimentation and investigation, it was discovered that some cached access URL may be pointing to an expired instance causing the login failures. The Rocket.Chat team assembled an expert performance and tuning team to help resolve the problem.

### Betting on Success

We're psyched to have been able to help Rotogrinders. DFS is a lot of fun whether you have a lot on the line or not, Rotogrinders offerings are extensive, and their community is engaged - What more could you ask for? As it turns out, Rotogrinders asks themselves that question every day and they've got several interesting things on their radar for the future including e-sports (think: video games) and they're also keeping a close eye on the sports betting bill, [PASPA](https://www.legalsportsreport.com/14148/congress-sports-betting-bill-paspa/).

Whichever direction(s) they grow, we're betting they'll be successful and we look forward to helping them along the way. Find Rotogrinders at [https://rotogrinders.com](https://rotogrinders.com). Their mobile apps are available on Apple App Store and Google Play. You can find Riley as @o0lit3 on the Rocket.Chat community server [https://open.rocket.chat](https://open.rocket.chat), or email him at [riley@rotogrinders.com](mailto:riley@rotogrinders.com).
