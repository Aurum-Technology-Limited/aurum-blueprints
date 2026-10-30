---
id: product-management.freemium-trial-design
name: Freemium & Trial Design
description: "A measured free-to-paid funnel, a deliberate choice between freemium, free trial and reverse trial, free limits and upgrade prompts that convert without annoying people, and the reviews that keep the free offer paying for itself."
category: business
version: 1.0.0
tags: [product-management, freemium-trial-design, founder, team, freemium, free-trial, reverse-trial, product-led-growth, conversion]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - feedback-themes
    - reading-queue
    - product-spec
    - marketing-campaign
    - risk-register
  pillars:
    - name: Product Management
      emoji: "🧩"
      description: "Deciding what to build and why: discovery and research, roadmaps and prioritisation, specs and launches, pricing and packaging, product analytics, and the feedback loops that keep a product honest."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Freemium & Trial Design
          description: "Deciding between free plans, free trials and reverse trials, and setting limits and upgrade prompts that convert users without frustrating them."
          projects:
            - name: Free-to-paid funnel baseline
              description: |-
                ## Purpose
                Before changing a trial length or a free limit, you need today's numbers written down: sign-ups per week, how many start a trial or stay on the free plan, how many reach the first meaningful use, and how many pay within 30, 60 and 90 days. Most teams discover their conversion figure has three different definitions in three different dashboards. A single agreed baseline is what every later experiment in this area is measured against.

                ## Milestones
                1. Sign-ups, trial starts, first meaningful use and paid conversions counted for the last three full months.
                2. Conversion within 30, 60 and 90 days of sign-up recorded for each monthly cohort.
                3. The median number of days from sign-up to first payment worked out.
                4. One baseline table agreed by product, finance and whoever owns the billing data.

                ## Notes
                Count from the billing system for payments and from product events for usage. If the two disagree by more than a few per cent, fix the join before trusting either.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A baseline table shows three monthly cohorts with sign-ups, trial starts, first use and paid conversion at 30, 60 and 90 days, agreed by product and finance."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every dashboard that currently reports a trial or free conversion rate"
                - "Export three months of sign-ups and first payments with account ids"
                - "Calculate conversion at 30, 60 and 90 days for each monthly cohort"
                - "Review the baseline table with finance and settle any disagreement"
            - name: Self-serve fit check before giving anything away
              description: |-
                ## Purpose
                Free plans and trials work when a buyer can reach real value alone, in days, and pay with a card. Products that need data migration, procurement sign-off or a six-week rollout often convert worse with an open trial than with a guided pilot. Checking fit honestly first saves a quarter spent tuning a free offer that the product's buying motion was never going to support.

                ## Milestones
                1. Typical time to first value for a new account estimated from real accounts, not hopes.
                2. Average first-year contract value and the share of deals that needed a sales call noted.
                3. The person who signs up compared with the person who pays, and whether they are the same.
                4. A written verdict: self-serve suits all, some or none of your segments.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page fit verdict records time to value, contract value, buyer versus user, and which segments should get a self-serve free offer."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull ten recent new accounts and note how long each took to first value"
                - "Ask sales how many recent deals closed without a call or a quote"
                - "Note who signed up and who paid on each of those ten accounts"
                - "Write the fit verdict by segment and share it with the founder or lead"
            - name: Cost to serve a free user
              description: |-
                ## Purpose
                Every free account costs something: hosting, storage, third-party fees per seat, email sending, support tickets and fraud losses. When the free base is large and conversion is two or three per cent, those costs decide whether the free offer is a marketing channel or a slow leak. Knowing the monthly cost per free account turns limit and retention decisions from opinion into arithmetic.

                ## Milestones
                1. Infrastructure, storage and third-party per-account costs split between free and paid accounts.
                2. Support tickets from free accounts counted and costed at a loaded hourly rate.
                3. A monthly cost per active free account and per dormant free account calculated.
                4. The cost of acquiring one paying customer through the free route compared with paid acquisition.

                ## Notes
                Dormant free accounts with stored data often cost more in total than active ones because there are so many of them. Count both.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written cost per active and per dormant free account, with the free-route acquisition cost per paying customer set beside paid channels."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask engineering for last month's hosting and storage bill split by account plan"
                - "Count support tickets opened by free accounts in the last quarter"
                - "Work out the monthly cost per active and per dormant free account"
                - "Compare free-route acquisition cost with your paid channel costs"
            - name: Freemium, free trial or reverse trial decision
              description: |-
                ## Purpose
                The three models suit different products. Freemium needs a large market, low marginal cost and a free plan that spreads the product; a time-limited trial suits narrower markets with a clear paid value; a reverse trial gives every new account the full product for a set period and then drops it to a permanent free plan. Choosing deliberately, with the baseline and cost figures in hand, avoids drifting into whatever a competitor happened to launch.

                ## Milestones
                1. Each model scored against market size, marginal cost, time to value and viral potential.
                2. The likely conversion range and cost for each model estimated from your own numbers.
                3. A recommended model chosen, with the evidence that would make you change it.
                4. The decision and its reasoning recorded where the team can find it.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision names the chosen free offer model, the scores behind it and the evidence that would trigger a rethink."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Score freemium, free trial and reverse trial against the same four criteria"
                - "Estimate conversion and monthly cost for each using the baseline figures"
                - "Write a one-page recommendation with the evidence that would change it"
                - "Revisit the model choice against a year of results @recurring(yearly)"
            - name: Behaviours that predict a paid upgrade
              description: |-
                ## Purpose
                Some early actions, such as inviting a colleague, connecting a data source or publishing a first project, are far more common among accounts that later pay. Finding the two or three that matter tells you what a trial must get people to do and which free accounts deserve attention. Without this, trial emails and prompts push generic tours that have no link to conversion.

                ## Milestones
                1. Twenty candidate early actions listed from the event data.
                2. Each action compared between accounts that paid and accounts that did not, in their first 14 days.
                3. Two or three actions with the clearest difference shortlisted, with sample sizes noted.
                4. The shortlist checked against ten upgrader interviews or support conversations for a plausible reason.

                ## Notes
                Correlation is a starting point, not proof. Treat the shortlist as hypotheses to test, and expect at least one to be a sign of buyer intent rather than a cause of it.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A shortlist of two or three early actions, each with its upgrade rate for doers versus non-doers and the sample size behind it."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List twenty early actions your event data can already measure"
                - "Compare first-14-day rates for paid and unpaid accounts on each action"
                - "Shortlist the actions with the biggest gap and enough volume"
                - "Ask the agent to summarise upgrader support threads for reasons behind each action"
            - name: Free plan boundary map
              description: |-
                ## Purpose
                The free plan needs to be good enough to keep people using it and limited enough that growing teams hit the line. Mapping every feature and limit as free, paid or trial-only, with the reason for each, exposes the usual problems: a core feature locked away so nobody gets value, or a generous allowance so nobody ever needs to pay. The map becomes the reference for every later limit change.

                ## Milestones
                1. Every feature and quantitative limit listed with its current free, trial and paid setting.
                2. Each gated item tagged with its reason: cost, advanced need, team need or compliance.
                3. Items whose gating has no stated reason flagged for review.
                4. The map published to product, sales and support as the single source.

                ## Notes
                A good rule of thumb: let individuals succeed for free and charge when a team, a business process or a large volume depends on the product.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A published boundary map lists every feature and limit with its free, trial and paid setting and a reason for each gate."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every feature and numeric limit from the plan configuration"
                - "Mark each item as free, trial only or paid as it works today"
                - "Write the reason for each gate in one short phrase"
                - "Share the map with sales and support and ask what surprises them"
            - name: Trial length decision
              description: |-
                ## Purpose
                Seven, 14 and 30 days are habits, not laws. The right length is set by how long a typical buyer needs to reach the upgrade behaviours and get a colleague or budget holder to agree. Too long and people forget they are trialling; too short and they run out before the value lands. Basing the length on your own time-to-convert data makes the choice defensible.

                ## Milestones
                1. The distribution of days from sign-up to first payment plotted from the baseline.
                2. The day by which most eventual payers have reached the upgrade behaviours noted.
                3. A trial length chosen, with a written reason tied to those two figures.
                4. Any extension policy decided alongside the length.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A trial length is chosen and recorded with the time-to-convert and behaviour data that justify it, plus an extension rule."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Plot days from sign-up to first payment for the last six months"
                - "Find the day by which most payers reached the upgrade behaviours"
                - "Write the chosen length and its reason in the decision log"
                - "Decide when, if ever, a trial can be extended"
            - name: Card upfront or no card at trial start
              description: |-
                ## Purpose
                Asking for a payment card at sign-up usually cuts trial starts sharply and raises the share who convert, because the people who stay are more serious and conversion happens by default. A no-card trial brings more people in and needs a stronger in-trial experience to convert them. The right answer depends on whether your problem is too few sign-ups or too few serious ones, and on how you will handle refunds and surprise charges.

                ## Milestones
                1. Current sign-up volume and trial-to-paid rate written beside the target for each.
                2. The likely effect of each option on paying customers per month estimated.
                3. Refund, reminder and cancellation handling planned for the card option.
                4. A choice made and recorded with a date to review it.

                ## Notes
                If you take a card, send a clear reminder before the first charge and make cancelling as easy as signing up. Check consumer protection rules for automatic renewals in each country you sell to.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice on card at sign-up, with estimated paying customers per month under each option and a reminder and refund plan if a card is taken."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write today's monthly trial starts and trial-to-paid rate side by side"
                - "Estimate paying customers per month with and without a card at sign-up"
                - "Draft the pre-charge reminder and the cancellation route"
                - "Record the choice and the review date in the decision log"
            - name: Free offer goals and guardrails
              description: |-
                ## Purpose
                Without written goals, a free plan gets judged on whoever shouts loudest: sales wants fewer free users, marketing wants more sign-ups, finance wants lower costs. Agreeing three or four targets, such as free-to-paid rate, cost per free account and paying customers from the free route, plus a few guardrails like abuse rate and support load, gives every later change a shared test.

                ## Milestones
                1. Three or four goal metrics chosen, each with a definition and a 12-month target.
                2. Two or three guardrail metrics with a level that would trigger a pause.
                3. The goals agreed by the founder or product lead, finance and sales.
                4. Goals and guardrails added to the weekly conversion review.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written goals and guardrails for the free offer, each with a definition and target, signed off by product, finance and sales."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft three goal metrics and two guardrails with definitions"
                - "Set a 12-month target for each goal from the baseline"
                - "Agree the list with finance and the sales lead in one meeting"
                - "Add goals and guardrails to the top of the weekly review page"
            - name: Free account terms, fair use and data retention
              description: |-
                ## Purpose
                Free accounts need rules that paid ones do not: what counts as fair use, how long an inactive free workspace is kept, what happens to data when a trial ends, and whether free accounts may be used commercially. Writing these down, with legal review, protects you when you later need to delete dormant accounts or stop abuse, and tells users plainly what to expect.

                ## Milestones
                1. Fair use limits for free accounts written in plain language.
                2. An inactivity period and the notice given before a free account is deleted agreed.
                3. What happens to trial data at expiry, and for how long it is kept, stated.
                4. The terms reviewed by your legal adviser and published.

                ## Notes
                Data deletion and retention rules depend on where your users live. Ask your legal adviser to confirm the notice periods before you publish them.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Published free account terms state fair use limits, the inactivity deletion period and notice, and trial data retention, after legal review."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List what free and trial accounts can and cannot do today"
                - "Draft the inactivity deletion period and the notice emails"
                - "Send the draft terms to your legal adviser for review"
                - "Check the free terms still match how the plan works @recurring(yearly)"
            - name: Weekly free-to-paid conversion review
              description: |-
                ## Purpose
                Conversion moves slowly, so problems hide for weeks unless someone looks on a fixed day. Fifteen minutes each Monday on sign-ups, trial starts, upgrades and the guardrails, compared with the baseline, catches a broken checkout, a pricing page bug or a spike of junk sign-ups while it still matters. Writing one line of interpretation each week builds a record the team can learn from.

                ## Milestones
                1. A weekly view with sign-ups, trial starts, upgrades and guardrails beside the baseline.
                2. A fixed Monday slot owned by one named person.
                3. One line of interpretation and any action written each week.
                4. Twelve consecutive weeks of entries in the log.

                ## Notes
                Start from the **Metrics log** template. Watch counts as well as rates: a rate that rises because sign-ups fell is not good news.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly entries, each with the core funnel numbers against baseline and a written interpretation."
                cadence: rolling
              tasks:
                - "Create the weekly conversion log from the metrics log template"
                - "Add sign-ups, trial starts, upgrades and guardrails as columns"
                - "Update the funnel numbers and write one line on what changed @recurring(weekly:mon)"
                - "Raise any guardrail breach in the team channel the same day"
            - name: Monthly trial cohort conversion curves
              description: |-
                ## Purpose
                Weekly totals mix old and new accounts, so a good month can hide a worsening trial. Plotting each sign-up month as its own curve, showing the share paid by day 7, 14, 30 and 60, shows whether recent changes actually improved conversion or just shifted when it happens. It is also how you spot a slow-burning segment that upgrades after the trial ends.

                ## Milestones
                1. A cohort chart with one line per sign-up month and conversion by day.
                2. The chart updated in the first fortnight of each month.
                3. Each new cohort compared with the average of the previous three.
                4. Late converters after day 60 counted and noted by segment.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly updates of the cohort chart, each noting whether the newest cohort is ahead of or behind the previous three."
                cadence: rolling
              tasks:
                - "Build a cohort chart of conversion by day for each sign-up month"
                - "Add the newest cohort and compare it with the last three @recurring(monthly:9)"
                - "Count accounts that paid after day 60 and note their segment"
            - name: Trial lifecycle email upkeep
              description: |-
                ## Purpose
                Welcome, mid-trial, ending soon and trial ended emails are often written once at launch and never touched again, while the product, the prices and the upgrade behaviours change around them. A monthly check of open, click and upgrade rates for each message, plus a read-through for stale screenshots and wrong prices, keeps the sequence pulling its weight.

                ## Milestones
                1. Every trial and free lifecycle message listed with its trigger and timing.
                2. Open, click and upgrade-after-click rates recorded for each message.
                3. Stale content, broken links and wrong prices fixed.
                4. One message rewritten each quarter around an upgrade behaviour.

                ## Notes
                Send messages based on what the account has or has not done, not only on the day of the trial. An account that already invited its team does not need the invite reminder.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A current list of every lifecycle message with its rates, and six monthly checks logged with fixes made."
                cadence: rolling
              tasks:
                - "List every trial and free lifecycle message with its trigger"
                - "Record open, click and upgrade rates for each message"
                - "Read each message for stale prices, links and screenshots @recurring(monthly:12)"
                - "Rewrite the weakest message around one upgrade behaviour"
            - name: Upgrade prompt inventory and audit
              description: |-
                ## Purpose
                Upgrade prompts multiply: a banner here, a locked icon there, a modal someone added for a campaign. Too many and users learn to close them without reading; too few and nobody knows what paying gets them. A quarterly inventory of every prompt, where it fires, how often a user sees it and what it converts, lets you cut the noisy ones and strengthen the few that work.

                ## Milestones
                1. Every upgrade prompt listed with its location, trigger and frequency cap.
                2. Views, clicks and upgrades recorded for each prompt over the last quarter.
                3. Prompts with high views and near-zero upgrades removed or reworked.
                4. A maximum number of prompts per session agreed and enforced.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarterly inventory of upgrade prompts with views, clicks and upgrades, and at least one prompt cut or reworked each quarter."
                cadence: cyclic
              tasks:
                - "Click through the free plan and screenshot every upgrade prompt you meet"
                - "Record views, clicks and upgrades for each prompt"
                - "Agree a cap on upgrade prompts shown per session"
                - "Audit every upgrade prompt and cut the weakest @recurring(quarterly)"
            - name: Free account abuse and repeat trial watch
              description: |-
                ## Purpose
                Generous free offers attract people who create a new account every 14 days, scripts that farm free compute or storage, and spam sent from free workspaces. Left alone, abuse inflates sign-up numbers, raises costs and can damage email deliverability for everyone. A short weekly look at the signals keeps it small without punishing honest users.

                ## Milestones
                1. Abuse signals defined: disposable email domains, repeat devices or cards, usage spikes, spam reports.
                2. A weekly report of accounts that trip two or more signals.
                3. A response ladder agreed, from a warning to suspension, with who decides.
                4. Abuse share of new sign-ups tracked as a guardrail.

                ## Notes
                Keep a human review before suspending any account that might be a real customer. A false positive on a prospect costs more than a month of abuse.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly abuse report runs for twelve weeks, with a written response ladder and the abuse share of sign-ups tracked."
                cadence: rolling
              tasks:
                - "List the abuse signals your sign-up and usage data can already show"
                - "Write the response ladder and name who approves a suspension"
                - "Review accounts that trip two or more abuse signals @recurring(weekly:thu)"
                - "Add abuse share of sign-ups to the guardrails"
            - name: Product-qualified lead handoff to sales
              description: |-
                ## Purpose
                Some free and trial accounts are worth a human conversation: a company domain, ten active users, a limit hit twice. A product-qualified lead rule, agreed with sales and reviewed weekly, gets those accounts a timely, useful offer of help, while leaving self-serve buyers alone. Without a rule, sales either ignores the free base or calls everyone.

                ## Milestones
                1. A written qualification rule built from upgrade behaviours, company size and usage.
                2. Qualified accounts flowing to the sales queue with the reason attached.
                3. A weekly check of handed-off accounts with outcomes recorded.
                4. The rule adjusted after one quarter of outcomes.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written qualification rule is in use, with a quarter of weekly handoff reviews showing contact and conversion rates for qualified accounts."
                cadence: rolling
              tasks:
                - "Draft a qualification rule from the upgrade behaviours and company size"
                - "Agree with sales what a qualified account receives and how fast"
                - "Check last week's handed-off accounts and their outcomes @recurring(weekly:wed)"
                - "Adjust the rule after one quarter of outcomes"
            - name: Free plan limit-hit report
              description: |-
                ## Purpose
                Limits only convert if people reach them, and only if reaching them feels like growth rather than a trap. A monthly report of how many free accounts hit each limit, and what they did next (upgraded, stopped, deleted data, left), shows which limits are working as upgrade triggers and which are causing quiet churn.

                ## Milestones
                1. An event recorded every time an account reaches a free limit.
                2. A monthly table of hits per limit and the next action taken within seven days.
                3. Limits ranked by upgrade rate after a hit.
                4. Any limit with high hits and high abandonment flagged for recalibration.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly limit-hit reports showing hits, upgrade rate and abandonment rate for each free limit."
                cadence: rolling
              tasks:
                - "Ask engineering to log an event each time a free limit is reached"
                - "Build a table of hits and next actions for each limit"
                - "Update the limit-hit table and flag limits that drive people away @recurring(monthly:16)"
            - name: Trial extension and reactivation requests
              description: |-
                ## Purpose
                Requests for more time arrive by chat, email and sales, and are granted or refused depending on who answers. A simple policy and a log make extensions consistent, and a monthly look at what extended accounts did shows whether extensions actually lead to sales or only delay a no. The same log covers expired accounts that come back asking to restart.

                ## Milestones
                1. An extension and reactivation policy written for support and sales.
                2. Every request logged with the reason and the decision.
                3. Conversion of extended accounts compared with similar unextended ones.
                4. The policy revised once with the evidence.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written extension policy is in use, every request is logged, and a comparison of extended versus unextended conversion is recorded."
                cadence: rolling
              tasks:
                - "Write a one-paragraph extension and reactivation policy"
                - "Add an extension log that support and sales both use"
                - "Review extended accounts and whether they paid @recurring(monthly:20)"
            - name: Quarterly free tier cost review
              description: |-
                ## Purpose
                Hosting prices, third-party fees and usage patterns change, and a free tier that was cheap a year ago can quietly become the biggest line in the infrastructure bill. Re-running the cost per free account each quarter, beside the free-route revenue, keeps the free offer honest and gives early warning before a limit or retention change is forced in a hurry.

                ## Milestones
                1. Cost per active and dormant free account recalculated each quarter.
                2. Free-route paying customers and revenue for the quarter set beside the cost.
                3. The ratio compared with the previous quarter and the goal.
                4. Any cost driver growing faster than free accounts named with an owner.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly cost reviews recorded, each with cost per free account, free-route revenue and any rising cost driver assigned."
                cadence: cyclic
              tasks:
                - "Recalculate cost per free account and set it beside free-route revenue @recurring(quarterly)"
                - "Name the fastest-growing cost driver and give it an owner"
                - "Share the quarter's figures with finance"
            - name: Expired trial exit survey
              description: |-
                ## Purpose
                People who let a trial lapse rarely tell you why unless asked at the right moment, in one question. A short survey at expiry, with a few fixed reasons and a free text box, gathers enough answers each month to separate price objections from missing features, bad timing and simple confusion. Those themes feed directly into trial length, limits and messaging.

                ## Milestones
                1. A one-question exit survey with five fixed reasons and a text box live at trial expiry.
                2. A response rate above ten per cent of expiring trials.
                3. Answers coded into themes each month.
                4. The top theme each quarter turned into a change on the roadmap or in messaging.

                ## Notes
                Start from the **Feedback themes** template. Ask on the expiry screen and in the trial ended email, not a week later.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An exit survey is live at expiry, six months of answers are coded into themes, and two quarterly changes trace back to them."
                cadence: rolling
              tasks:
                - "Write the exit question and five fixed reasons"
                - "Add the survey to the expiry screen and the trial ended email"
                - "Code the month's exit answers into themes @recurring(monthly:23)"
                - "Turn the quarter's top theme into a roadmap or messaging change"
            - name: Freemium and trial economics reading list
              description: |-
                ## Purpose
                There is a small body of good writing on free offers, from product-led growth books to public teardowns of how well-known products set their free limits, and most of it is quicker to read than to rediscover. A short, ordered list read over a month gives a founder or new product manager the vocabulary and the common mistakes before they change anything live.

                ## Milestones
                1. Eight to ten sources chosen, covering models, limits, conversion metrics and pricing psychology.
                2. Each source read with three takeaways noted.
                3. Takeaways grouped into principles you agree with and ones you doubt.
                4. Two principles tested against your own data.

                ## Notes
                Start from the **Reading queue** template.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Eight sources read with notes, and two principles from them checked against your own conversion data."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Set up a reading queue for freemium and trial sources"
                - "Choose eight sources across models, limits and metrics"
                - "Write three takeaways after each source"
                - "Test two takeaways against your baseline numbers"
            - name: Conversion metric definitions and denominators
              description: |-
                ## Purpose
                Trial conversion can mean paid accounts over trial starts, over sign-ups, over activated accounts, or over website visitors, and each answer differs by a factor of five. Learning the standard definitions and writing your own, with the denominator and time window spelled out, stops arguments about whether three per cent is good and makes comparisons with benchmarks meaningful.

                ## Milestones
                1. The common definitions of free-to-paid and trial-to-paid conversion compared.
                2. Your definitions written with numerator, denominator and time window.
                3. Every dashboard relabelled or corrected to match.
                4. A one-page glossary shared with marketing, sales and finance.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A glossary defines each conversion metric with numerator, denominator and window, and every dashboard uses those definitions."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Collect three published definitions of trial conversion rate"
                - "Write your definitions with numerator, denominator and window"
                - "Relabel each dashboard metric to match the glossary"
                - "Walk marketing and finance through the glossary"
            - name: Teardown of ten free offers in your category
              description: |-
                ## Purpose
                Signing up for ten competing or adjacent products, as a real prospect would, shows what users already expect: trial length, whether a card is asked for, what the free plan includes, how the first upgrade prompt is worded and what happens at expiry. A structured teardown turns a vague sense of the market into a table you can point to when someone says everybody gives 30 days.

                ## Milestones
                1. Ten products chosen across direct competitors and admired adjacent products.
                2. Each signed up for and recorded on the same criteria over its trial.
                3. Screenshots of the first upgrade prompt and the expiry screen for each.
                4. Three patterns worth copying and two to avoid written up.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A teardown table covers ten products on the same criteria, with screenshots and a written list of patterns to copy and avoid."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose ten products and set up a separate email for sign-ups"
                - "Record model, length, card policy and free limits for each"
                - "Screenshot the first upgrade prompt and the expiry screen"
                - "Write three patterns to copy and two to avoid"
            - name: Interviews with recent upgraders and lapsed trials
              description: |-
                ## Purpose
                Data shows what people did; only conversations show why they paid or walked away. Talking to five accounts that upgraded in the last month and five whose trial lapsed, while the decision is fresh, reveals the moment it clicked, who else was involved and what nearly stopped them. Practising this regularly keeps the team close to the conversion decision itself.

                ## Milestones
                1. An interview guide focused on the decision timeline, not feature wishes.
                2. Five upgrader and five lapsed-trial interviews held within 30 days of their decision.
                3. A timeline of each decision written up, with triggers and blockers.
                4. Patterns shared with the team and linked to the upgrade behaviours.

                ## Notes
                Ask about the last time something happened, not what they would do. Offer a small thank-you and keep calls to 25 minutes.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Ten interviews completed within 30 days of each decision, each written as a timeline, with shared patterns recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write a 25-minute guide built around the decision timeline"
                - "Invite ten recent upgraders and ten lapsed trials to book a call"
                - "Write each interview as a dated decision timeline"
                - "Hold two fresh upgrader interviews every quarter @recurring(quarterly)"
            - name: Writing upgrade prompts that respect the user
              description: |-
                ## Purpose
                Good upgrade prompts say what the user was trying to do, what paying gives them and what it costs, then let them carry on. Bad ones block work with a vague padlock or a guilt-tripping button. Practising the craft on your own prompts, with a simple checklist and a few rewrites tested on colleagues, raises conversion and lowers the irritation that drives free users away.

                ## Milestones
                1. A prompt checklist covering context, benefit, price, a way out and tone.
                2. Five current prompts scored against the checklist.
                3. Three prompts rewritten and reviewed with a designer or writer.
                4. The rewrites shown to five users with their reactions noted.

                ## Notes
                Avoid decline buttons that shame the user. They may lift clicks briefly, but they damage trust and some regulators treat them as manipulative design.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A written prompt checklist, five prompts scored and three rewrites tested with five users, with reactions recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a five-point checklist for upgrade prompts"
                - "Score five live prompts against the checklist"
                - "Rewrite the three lowest-scoring prompts"
                - "Show the rewrites to five users and note their reactions"
            - name: Testing conversion changes on low sign-up volume
              description: |-
                ## Purpose
                With 400 trials a month, a product cannot detect a one-point lift in a two-week test, yet teams run those tests and declare winners from noise. Learning how sample size, baseline rate and minimum detectable effect fit together tells you which conversion tests are worth running, which need months, and when a before-and-after comparison with caveats is the honest choice.

                ## Milestones
                1. A sample size calculator understood and run on your own baseline rate.
                2. The smallest lift you can detect in a month written down.
                3. A rule for when to run a split test and when to use a dated before-and-after.
                4. One past test result re-examined with the new understanding.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written testing rule states the minimum detectable lift at your volume and when split tests versus before-and-after comparisons are used."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Run a sample size calculation using your trial-to-paid baseline"
                - "Write down the smallest lift you can detect in one month"
                - "Draft the rule for choosing a split test or a before-and-after"
                - "Re-examine one past conversion test against that rule"
            - name: Behavioural principles behind trials and their limits
              description: |-
                ## Purpose
                Reverse trials rely on loss aversion, countdowns rely on urgency, and default card charges rely on inertia. Understanding these effects helps you design a trial that motivates people, and knowing where they tip into manipulation keeps you on the right side of users and regulators. A short study of the principles and the dark patterns lists turns instinct into a shared standard.

                ## Milestones
                1. The main effects behind trials summarised: loss aversion, endowment, defaults, urgency.
                2. A published list of manipulative subscription patterns reviewed.
                3. Your own trial checked against that list, with any matches noted.
                4. A short team standard for what you will and will not do.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written team standard on persuasive versus manipulative trial design, with your own trial checked against a published dark patterns list."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read a summary of loss aversion, defaults and urgency in pricing"
                - "Find a published list of manipulative subscription patterns"
                - "Check your trial screens and emails against that list"
                - "Write a half-page standard and share it with the team"
            - name: Reverse trial pilot
              description: |-
                ## Purpose
                In a reverse trial every new account gets the paid features for a set period, then drops to the free plan instead of losing access. People experience the paid value first and feel its absence, while those who never pay stay as free users. Piloting it on one segment, with a clear comparison against the current model, tells you whether it lifts paid conversion without hurting long-term free retention.

                ## Milestones
                1. One segment and a pilot length chosen, with the comparison group defined.
                2. The downgrade step built, including what happens to paid-only content.
                3. Messages written for the start, the midpoint and the day of the downgrade.
                4. Paid conversion and 60-day free retention compared between pilot and control.

                ## Notes
                Decide before launch what happens to work created with paid features after the downgrade. Locking it as read-only is common; deleting it is not acceptable.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A reverse trial pilot runs on one segment with a control group, and a decision on wider rollout is recorded from conversion and retention results."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Choose the pilot segment and define the control group"
                - "Specify what happens to paid-only work at the downgrade"
                - "Write the start, midpoint and downgrade messages"
                - "Compare paid conversion and 60-day retention for both groups"
            - name: Trial length experiment
              description: |-
                ## Purpose
                Once the trial length decision has a reason behind it, testing it against one alternative tells you whether the reason holds. Running 14 days against 30, or 7 against 14, on new sign-ups for long enough to see conversion at 60 days settles a debate that otherwise returns every quarter. Measuring paying customers, not just conversion rate, avoids rewarding a longer trial that merely delays decisions.

                ## Milestones
                1. Two lengths chosen and the test duration set from the sample size rule.
                2. Sign-ups split randomly and the assignment recorded on each account.
                3. Paying customers per hundred sign-ups at day 60 compared.
                4. The winning length adopted, or the test called inconclusive, and recorded.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A trial length test ran to its planned sample size, and the outcome with paying customers per hundred sign-ups at day 60 is recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pick the two trial lengths and calculate how long the test must run"
                - "Ask engineering to assign sign-ups randomly and store the group"
                - "Compare paying customers per hundred sign-ups at day 60"
                - "Record the result and the length adopted"
            - name: Free plan usage limit recalibration
              description: |-
                ## Purpose
                Limits set at launch are guesses. With a few months of limit-hit data, you can see whether the line sits where growing accounts cross it or where nobody ever reaches it. Moving one limit at a time, and watching upgrade and abandonment rates after each move, is how a free plan gets steadily better at converting without becoming mean.

                ## Milestones
                1. The limit with the weakest upgrade rate or highest abandonment chosen.
                2. A new level proposed, with the share of current free accounts it would affect.
                3. Existing accounts given notice or grandfathered, as agreed.
                4. Upgrade and abandonment rates for the limit compared before and after.

                ## Notes
                Change one limit at a time. Moving three at once makes it impossible to say which one worked.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One free limit is moved with a recorded rationale and affected-account count, and its before and after upgrade and abandonment rates are compared."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick the limit with the weakest upgrade rate from the limit-hit report"
                - "Count how many free accounts a new level would affect"
                - "Decide whether existing accounts keep the old limit"
                - "Compare upgrade and abandonment rates eight weeks after the change"
            - name: Gated feature upgrade screen redesign
              description: |-
                ## Purpose
                The screen a user sees when they click a paid feature is the single most important upgrade moment in a freemium product, and it is often a generic padlock with a link to the pricing page. Redesigning it to show what the feature does with their own data, which plan includes it, the price and a way to try it, turns a dead end into a decision point.

                ## Milestones
                1. Current gated screens catalogued with their click-through to upgrade.
                2. A spec written for a gated screen pattern with context, preview, plan, price and exit.
                3. The new pattern built for the three most-clicked gated features.
                4. Upgrade rate from those screens compared before and after.

                ## Notes
                Start from the **Product spec** template. Offering a short preview or a one-off try of the feature often beats a static description.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A gated screen pattern is specified and live on the three most-clicked paid features, with before and after upgrade rates recorded."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Screenshot every gated feature screen and note its upgrade rate"
                - "Write the spec for one gated screen pattern"
                - "Build the pattern for the three most-clicked gated features"
                - "Compare upgrade rates from those screens after four weeks"
            - name: Trial end, grace period and downgrade experience
              description: |-
                ## Purpose
                What happens on the last day of a trial shapes whether a lapsed user comes back. A hard lockout with no warning loses goodwill; a short grace period, a clear summary of what they built, and an easy path to pay or to step down to free keeps the door open. This is also where billing mistakes cause angry tickets, so it deserves deliberate design and testing.

                ## Milestones
                1. The current expiry sequence walked through end to end and documented.
                2. A grace period length and what remains accessible during it decided.
                3. An expiry screen showing work created, the plan needed and the price.
                4. The whole sequence tested with test accounts, including card failures.
              priority: high
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A documented expiry and grace period sequence is live and has passed an end-to-end test covering pay, downgrade and card failure paths."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Run a test account through trial expiry and note every screen"
                - "Decide the grace period length and what stays accessible"
                - "Design an expiry screen that summarises the work created"
                - "Test pay, downgrade and failed card paths with test accounts"
            - name: Sales assist for high-fit trials
              description: |-
                ## Purpose
                For a business product, a well-timed offer of help to a trial from a company that matches your best customers can double its chance of paying, while a pushy call on day one can end it. Defining which trials get a human, what that person offers and when, and measuring the result against similar unassisted trials, makes sales assist an asset to the trial rather than a tax on it.

                ## Milestones
                1. A fit rule for which trials qualify for a human offer of help.
                2. The offer defined: a setup call, a tailored demo or a pricing conversation.
                3. Timing agreed so the offer arrives after the first meaningful use.
                4. Assisted and unassisted conversion compared after a quarter.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A written fit rule and offer are in use, and a quarter of assisted versus unassisted trial conversion is compared and recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write the fit rule for trials that get an offer of help"
                - "Agree the offer and its timing with the sales lead"
                - "Review assisted trial outcomes with sales @recurring(monthly:3)"
                - "Compare assisted and unassisted conversion after one quarter"
            - name: Free plan collaboration and seat limits
              description: |-
                ## Purpose
                Whether a free workspace allows two people, five, or unlimited members decides how far the product spreads inside a company before anyone pays. Too tight and it never reaches the buyer; too loose and a 40-person team runs on it for free for years. Deciding the seat and sharing rules from your viral and upgrade data is one of the most consequential freemium calls.

                ## Milestones
                1. Current free workspace sizes plotted, with upgrade rate by size.
                2. Invite and sharing rates for free workspaces recorded.
                3. Two or three seat and sharing options modelled for spread and revenue.
                4. A choice made, with treatment of existing large free workspaces agreed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on free seat and sharing limits, based on workspace size and upgrade data, with a plan for existing large free workspaces."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Plot free workspaces by member count and upgrade rate"
                - "Record how often free members invite or share with others"
                - "Model three seat limit options for spread and revenue"
                - "Agree how existing large free workspaces will be treated"
            - name: Self-serve upgrade checkout friction fixes
              description: |-
                ## Purpose
                Users who click upgrade have already decided, and every extra field, surprise tax line or failed payment method loses some of them. Watching ten people go from the upgrade button to a receipt, and counting drop-off at each step, usually finds two or three cheap fixes: fewer fields, local payment methods, plan preselected from the trigger, tax shown early.

                ## Milestones
                1. Drop-off measured at each step from upgrade click to successful payment.
                2. Ten checkout sessions watched or recorded, with friction points noted.
                3. The three biggest friction points fixed.
                4. Click-to-payment completion compared before and after the fixes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Three checkout friction points are fixed and click-to-payment completion is measured before and after."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Measure drop-off between upgrade click and successful payment"
                - "Watch ten recorded checkout sessions and note each stumble"
                - "Fix the three biggest friction points"
                - "Compare checkout completion four weeks after the fixes"
            - name: End-of-trial offer and discount policy
              description: |-
                ## Purpose
                Discounting on the last day of a trial can rescue sales, or it can teach every future trial to wait for the discount. Deciding whether to offer one, to whom, for how long and how often, and writing that down, stops ad hoc codes from sales and support eroding the price. Measuring the policy over a quarter shows whether it adds customers or just gives margin away.

                ## Milestones
                1. Current end-of-trial discounts and codes in use listed.
                2. A policy written: whether to offer, to which segments, size and duration.
                3. A rule that no account receives the offer more than once.
                4. A quarter of offer acceptance and 12-month retention of discounted customers reviewed.

                ## Notes
                Prefer a longer annual term or an extra feature over a straight price cut. Discounted customers often churn when the discount ends.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written end-of-trial offer policy is in use and a quarter of acceptance and retention results for discounted customers is recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every end-of-trial discount code issued in the last six months"
                - "Draft the offer policy with segments, size and duration"
                - "Brief sales and support on the once-per-account rule"
                - "Review discounted customer retention after one quarter"
            - name: First free plan or trial launch
              description: |-
                ## Purpose
                Opening a free plan or self-serve trial for the first time touches the website, sign-up, billing, support, sales and analytics all at once. Treating it as a dated launch with a checklist, a soft opening to a small audience and a go or no-go review avoids the classic failures: a pricing page that contradicts the product, untracked sign-ups, or support drowning on day two.

                ## Milestones
                1. A launch date set with owners for website, product, billing, support and analytics.
                2. Sign-up to payment tested end to end with test accounts and tracked in analytics.
                3. A soft opening to a small audience completed and issues fixed.
                4. Public launch held, with first-week sign-ups, upgrades and tickets reviewed.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The free offer launches on its date after an end-to-end test and a soft opening, with a first-week review of sign-ups, upgrades and tickets recorded."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Set the launch date and name an owner for each function"
                - "Test sign-up through payment with test accounts and check the tracking"
                - "Open the free offer to a small audience a week before launch"
                - "Review first-week sign-ups, upgrades and tickets after launch"
            - name: Free plan limit change notice to existing users
              description: |-
                ## Purpose
                Tightening a free plan affects people who chose your product partly because it was free, and how you tell them matters as much as the change. A notice period, an honest reason, a clear summary of what changes for each account, and an offer for affected users protects trust and keeps the change from becoming a public complaint thread.

                ## Milestones
                1. Every affected free account identified and grouped by impact.
                2. A notice period agreed and the effective date fixed.
                3. Emails, in-product notices and a help article written and reviewed.
                4. Support briefed with answers and an escalation route before the notice goes out.

                ## Notes
                Give at least 30 days of notice for anything that removes access to existing work, and longer for large or long-standing free accounts.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Affected free users receive notice on the planned date, with support briefed and complaint volume tracked through the effective date."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Count the free accounts affected by the change and group them by impact"
                - "Fix the notice date and the effective date"
                - "Draft the email, in-product notice and help article"
                - "Brief support with answers and an escalation route"
            - name: Launch spike trial cohort follow-through
              description: |-
                ## Purpose
                Launch day features, big press mentions and marketplace listings can bring weeks of trial sign-ups in two days, and that cohort converts differently from steady traffic. Planning the follow-through in advance, with extra support cover, a lifecycle sequence tuned for curious visitors and a separate cohort tag, turns a spike into customers instead of a pile of expired trials.

                ## Milestones
                1. The spike source tagged on every sign-up from it.
                2. Support cover and onboarding capacity planned for the first two weeks.
                3. A tailored lifecycle sequence ready for the spike cohort.
                4. The spike cohort's conversion at 30 and 60 days compared with normal cohorts.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The spike cohort is tagged, receives a tailored sequence, and its 30 and 60 day conversion is compared with normal cohorts."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Set up a source tag for sign-ups from the coming launch"
                - "Plan extra support cover for the first two weeks"
                - "Adapt the lifecycle sequence for curious first-time visitors"
                - "Compare the spike cohort with normal cohorts at day 60"
            - name: Annual upgrade campaign for long-term free users
              description: |-
                ## Purpose
                Accounts that have used the free plan happily for a year are the warmest prospects you have and the ones you talk to least. A once-a-year campaign, timed to a planning season or a major release, that shows them what paid plans now include and offers a reason to move, often converts better than any trial. It needs care not to feel like a bait and switch.

                ## Milestones
                1. Long-term active free accounts identified and segmented by usage.
                2. A campaign message and offer chosen for each segment.
                3. Emails and in-product messages scheduled around a release or planning season.
                4. Upgrades, unsubscribes and complaints from the campaign recorded.

                ## Notes
                Start from the **Marketing campaign** template.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The annual campaign reaches segmented long-term free users, with upgrades, unsubscribes and complaints recorded."
                cadence: cyclic
              tasks:
                - "Pull active free accounts older than twelve months by usage level"
                - "Choose a message and offer for each usage segment"
                - "Plan the annual free-user upgrade campaign @recurring(yearly)"
                - "Record upgrades, unsubscribes and complaints afterwards"
            - name: Moving from freemium to trial only
              description: |-
                ## Purpose
                Some products outgrow a free plan: costs rise, the free base never converts, or the market turns out to be too narrow. Closing a free plan to new sign-ups and moving existing free users onto a trial or a paid plan is one of the riskiest changes in this area, because it upsets your most loyal non-payers in public. A phased plan with legal review, long notice and generous terms for existing users keeps it orderly.

                ## Milestones
                1. The decision recorded with the data behind it and the expected revenue and cost change.
                2. Risks listed with owners: churn, public backlash, data deletion, contractual promises.
                3. New sign-ups moved to the trial on a fixed date.
                4. Existing free users moved on their own later date with notice and an offer.

                ## Notes
                Start from the **Risk register** template. Ask your legal adviser to check any promises made to free users in past terms or marketing.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "New sign-ups move to the trial on one date and existing free users move later with notice, with a risk register maintained throughout."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write the case for closing the free plan with cost and revenue figures"
                - "Start a risk register for the migration with an owner for each risk"
                - "Ask your legal adviser to review promises made to free users"
                - "Set separate dates for new sign-ups and existing free users"
            - name: Founder's first self-serve trial with no sales team
              description: |-
                ## Purpose
                A founder selling alone can run a self-serve trial, but only if it can mostly run itself. The trick is to keep the first version tiny: one trial length, card or no card decided, three emails, one upgrade screen and a habit of personally emailing every trial in week one. That personal touch is both the best conversion tactic and the cheapest research you will ever do.

                ## Milestones
                1. One trial length and card policy chosen in an afternoon, not a month.
                2. Three trial emails and one upgrade screen live.
                3. A personal note sent to every new trial in its first week for the first two months.
                4. The top three reasons people paid or did not written up from those replies.

                ## Notes
                Resist building limits, tiers and prompts before you have 50 paying customers. Most early conversion comes from talking to people.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A minimal trial is live with three emails and one upgrade screen, and every new trial received a personal note for two months."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Choose one trial length and a card policy today"
                - "Write the welcome, midpoint and ending soon emails"
                - "Send a personal note to each new trial in its first week"
                - "Write up the top three reasons people paid or did not"
            - name: Guided trial or paid pilot for a sales-led product
              description: |-
                ## Purpose
                For a business product with a buying committee, an open trial often sits unused while procurement does its work. A guided trial or a paid pilot, with agreed success criteria, a fixed length, a named contact on both sides and a decision meeting booked at the end, converts far better. Designing it as a repeatable package lets sales offer it consistently rather than inventing terms each time.

                ## Milestones
                1. A pilot package written: length, success criteria, support and price or credit.
                2. A mutual plan template covering both sides' contacts and checkpoints.
                3. The package used on three deals, with outcomes recorded.
                4. Package terms revised from those three pilots.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A written pilot package and mutual plan template are used on three deals, with outcomes and revised terms recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Draft the pilot package with length, success criteria and price"
                - "Create a mutual plan template with checkpoints for both sides"
                - "Use the package on the next three qualified deals"
                - "Revise the terms after the third pilot ends"
            - name: Inheriting a free plan nobody owns
              description: |-
                ## Purpose
                A product manager who joins a team often finds a free plan set up years ago by someone who has left, with limits nobody can explain and prompts added by three different teams. Taking ownership means finding out what exists, who depends on it and what the numbers are before changing anything, then agreeing a short list of fixes with the people who care most.

                ## Milestones
                1. The free plan's history gathered from old documents, tickets and people still around.
                2. Current limits, prompts, emails and costs listed in one place.
                3. Stakeholders in sales, marketing, support and finance interviewed.
                4. A 90-day list of three fixes agreed with them.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written state-of-the-free-plan summary and an agreed 90-day list of three fixes exist within the first two months of ownership."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Search old documents and tickets for why each free limit was set"
                - "List current limits, prompts, emails and costs on one page"
                - "Interview one person each from sales, marketing, support and finance"
                - "Agree three fixes for the next 90 days"
            - name: App store free trial and introductory offers
              description: |-
                ## Purpose
                Mobile subscription apps run trials through the app stores' own introductory offer systems, with their own rules on eligibility, cancellation, reminders and how trials display on the purchase sheet. Designing within those rules, rather than copying a web trial, avoids rejections and surprise refunds. It also means deciding between a free trial, a discounted first period and a paywall shown at first launch.

                ## Milestones
                1. Each store's current introductory offer rules checked and summarised.
                2. The offer type chosen: free trial, discounted first period or paid up front.
                3. The paywall and trial disclosure screens reviewed against store guidelines.
                4. Trial start, conversion and refund rates tracked separately for each store.

                ## Notes
                Store rules change several times a year. Check the current developer guidelines before every paywall change, not only at launch.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A chosen introductory offer type is live on each store, its disclosure screens pass review, and trial and refund rates are tracked per store."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Read each app store's current rules for introductory offers"
                - "Choose between a free trial, a discounted first period or paid up front"
                - "Check the paywall disclosure wording against store guidelines"
                - "Track trial starts, conversions and refunds for each store"
            - name: Trials for products with a long setup before value
              description: |-
                ## Purpose
                When value only appears after connecting data, importing records or training a team, a 14-day trial often ends before the first useful result. Options include a trial clock that starts at setup completion, a sandbox with sample data, a done-for-you setup offer, or a free plan that covers the setup stage. Choosing among them starts with measuring how long setup really takes.

                ## Milestones
                1. Median and slowest setup times measured from recent trials.
                2. The setup steps that cause most abandonment identified.
                3. One option chosen: setup-triggered clock, sample data, assisted setup or free setup tier.
                4. Share of trials reaching first value before expiry compared before and after.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One long-setup option is live, and the share of trials reaching first value before expiry is compared before and after."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Measure median and slowest setup times for the last 50 trials"
                - "Find the setup step where most trials stall"
                - "Choose one option for long setups and write why"
                - "Compare first value before expiry eight weeks after the change"
            - name: Upgrade propensity scoring for free accounts
              description: |-
                ## Purpose
                With tens of thousands of free accounts, nobody can review them by hand. A simple score built from the upgrade behaviours, company signals and recent usage ranks accounts by likelihood to pay, so prompts, offers and sales attention go where they will help. Start with a transparent points model; a statistical model can come later if the simple one proves its worth.

                ## Milestones
                1. A points model built from three to six signals with written weights.
                2. The model back-tested on six months of history, with upgrade rate by score band.
                3. Scores written onto accounts and refreshed on a schedule.
                4. Score bands linked to actions: prompt, sales offer or leave alone.

                ## Notes
                Check the score does not simply rank by company size. If it does, it adds little beyond a firmographic filter.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A back-tested propensity score is written onto free accounts, with upgrade rate by score band recorded and an action for each band."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose three to six signals and give each a points weight"
                - "Back-test the score on six months of free accounts"
                - "Link each score band to a prompt, a sales offer or no action"
                - "Check upgrade rates by score band still separate @recurring(quarterly)"
            - name: Free user lifetime value including referrals
              description: |-
                ## Purpose
                A free user who never pays may still bring paying colleagues, write a review or share work that brings sign-ups. Valuing free users only by their own conversion undercounts the free plan, while counting every share as revenue overcounts it. A careful model of direct conversion plus attributed referrals gives a defensible figure for what a free user is worth, and how much you can spend to serve one.

                ## Milestones
                1. Direct conversion value per free user calculated from cohorts.
                2. Referral and invite sign-ups attributed to the free accounts that caused them.
                3. Conversion value of referred sign-ups added, with assumptions written down.
                4. Free user value compared with cost to serve and reviewed with finance.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written model gives value per free user from direct and referred conversion, with assumptions stated and compared with cost to serve."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Calculate direct conversion value per free user from cohorts"
                - "Attribute invite and referral sign-ups to the free accounts behind them"
                - "Write down every assumption in the referral attribution"
                - "Review the free user value against cost to serve with finance"
            - name: Workspace consolidation for bottom-up adoption
              description: |-
                ## Purpose
                When a free plan spreads inside a large company, you end up with dozens of separate free workspaces from the same email domain. Spotting these clusters and offering the company a single paid workspace, with admin controls and consolidated billing, is often the biggest revenue opportunity a freemium product has. It needs care, because individual users chose the product and do not want it taken away.

                ## Milestones
                1. Free workspaces grouped by company email domain with user counts.
                2. Domains with five or more workspaces or 25 or more users shortlisted.
                3. A consolidation offer and migration path designed with sales.
                4. Three companies approached, with outcomes recorded.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A domain cluster report is maintained, a consolidation offer exists, and three companies have been approached with outcomes recorded."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Group free workspaces by company email domain"
                - "Shortlist domains with five or more workspaces or 25 users"
                - "Design the consolidation offer and data merge path with sales"
                - "Refresh the domain cluster report for sales @recurring(monthly:27)"
            - name: Competitive response to a rival's new free plan
              description: |-
                ## Purpose
                When a competitor launches a generous free plan or a longer trial, the reflex is to match it within a week. A calm response starts with facts: which of your segments are exposed, what the rival's free plan actually includes and costs them, and whether your win and loss data shows any change. Often the right answer is a sharper message rather than a matching giveaway.

                ## Milestones
                1. The rival's free offer documented from a real sign-up.
                2. Exposed segments identified from overlap in customers and use cases.
                3. Sign-ups, trial conversion and lost deals watched for six weeks against baseline.
                4. A response chosen and recorded: hold, adjust messaging, or change the offer.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded response to the rival's free plan, backed by six weeks of sign-up, conversion and lost deal data against baseline."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Sign up for the rival's free plan and record what it includes"
                - "List which of your segments overlap most with the rival"
                - "Watch sign-ups, conversion and lost deals for six weeks"
                - "Check rival free offers for changes @recurring(quarterly)"
---

# Freemium & Trial Design

This area is for founders and product teams who give something away to earn a sale later, whether that is a free plan, a time-limited trial or a reverse trial that starts on paid features and steps down. It opens with the foundations (a funnel baseline, a self-serve fit check, the cost of a free user, the model decision, the behaviours that predict an upgrade and where the free line sits), then the weekly and monthly routines that watch conversion, the skills behind good conversion work, the changes and decisions that move the numbers, the launches and migrations that need dated preparation, the situations founders and inheriting teams meet, and finally the modelling an experienced growth lead brings.

What repeats is a weekly conversion review, weekly abuse and sales handoff checks, monthly cohort curves, limit-hit reports, lifecycle email upkeep and exit survey themes, quarterly prompt and cost audits, and a yearly look at whether the model still fits. The Metrics log, Feedback themes, Reading queue, Product spec, Marketing campaign and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
