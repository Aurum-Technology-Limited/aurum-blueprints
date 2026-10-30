---
id: product-management.product-launch-management
name: Product Launch Management
description: "Launch tiers, a checklist and a single owner, sales and support made ready, a go or no-go call with written criteria, a planned launch day and an honest review afterwards, for product teams, managers and enterprise launches."
category: business
version: 1.0.0
tags: [product-management, product-launch-management, team, manager, enterprise, go-to-market, launch-readiness, go-no-go]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - risk-register
    - meeting-notes
    - metrics-log
    - feedback-themes
    - marketing-campaign
  pillars:
    - name: Product Management
      emoji: "🧩"
      description: "Deciding what to build and why: discovery and research, roadmaps and prioritisation, specs and launches, pricing and packaging, product analytics, and the feedback loops that keep a product honest."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Product Launch Management
          description: "Coordinating everything a launch needs across engineering, marketing, sales and support, with a launch checklist, tiers and a go or no-go call."
          projects:
            - name: Launch tier definitions for your product
              description: |-
                ## Purpose
                Without agreed tiers, every release gets either a press push it does not deserve or no announcement at all, and marketing, sales and support cannot plan their own work. Defining three tiers by customer impact, revenue at stake and how much behaviour changes lets anyone classify a launch in five minutes and know what each team owes it.

                ## Milestones
                1. Three tiers written down, each with two or three plain criteria such as new paid capability, changed workflow for existing users or internal improvement.
                2. For each tier, the minimum deliverables from engineering, marketing, sales, support and documentation listed.
                3. The last ten releases classified against the tiers as a test, with any disagreements resolved.
                4. The tier definitions agreed by product, marketing and support leads and published where every team can find them.

                ## Notes
                Most teams find that only a handful of launches a year are tier 1. If a third of your launches end up there, the criteria are too loose.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A published three-tier definition with criteria and per-team deliverables, tested against the last ten releases and agreed by product, marketing and support."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the last ten releases with their customer impact in one line each"
                - "Draft three tier criteria and the minimum deliverables for each tier"
                - "Classify the ten releases against the draft tiers with the marketing lead"
                - "Publish the agreed tiers on the shared launch page"
                - "Check the tier criteria still match the kinds of launches you ship @recurring(yearly)"
            - name: One-page launch brief for the next release
              description: |-
                ## Purpose
                Each team joining a launch asks the same questions: what is it, who is it for, when is it, what tier, and what do you need from me. One page answering those, written before anyone produces an asset, stops five teams working from five different understandings and gives every later decision a reference point.

                ## Milestones
                1. A brief covering the customer problem, target users, tier, target date, owner and what is out of scope.
                2. Two or three sentences of positioning agreed with whoever writes the external messaging.
                3. Known dependencies and open questions listed with an owner each.
                4. The brief reviewed by the engineering lead and the product marketing or marketing contact.
                5. The brief linked from the launch channel and the launch calendar entry.

                ## Notes
                Keep it to one page. Detail belongs in the spec; the brief is what a sales manager reads in two minutes.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page brief for the next release, reviewed by engineering and marketing, linked from the launch channel and calendar."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the customer problem and target users for the next release in three sentences"
                - "Add tier, target date, owner and an explicit out-of-scope list"
                - "Ask the engineering lead and marketing contact to review the brief"
                - "Link the brief from the launch channel and calendar entry"
            - name: Launch roles and a single accountable owner
              description: |-
                ## Purpose
                Launches slip when everyone is involved and nobody is answerable: marketing waits for a date, engineering waits for a decision, support finds out from customers. Naming one accountable owner and a lead in each function, with what each one signs off, turns a vague group effort into a list of people who can be asked a direct question.

                ## Milestones
                1. One accountable launch owner named for the release, with authority to call the go or no-go.
                2. A named lead in engineering, design, marketing, sales, support, documentation and legal or security where relevant.
                3. A simple responsibility grid showing who decides, who does the work and who only needs to be told.
                4. Every named person has confirmed their role in writing.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A responsibility grid naming the accountable owner and a lead per function, with written confirmation from each person."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Name the accountable launch owner and confirm it with your manager"
                - "List every function the launch touches and ask each for a named lead"
                - "Draw the responsibility grid of who decides, does and is told"
                - "Collect written confirmation from each named lead"
            - name: Master launch checklist by tier
              description: |-
                ## Purpose
                Forgotten items are what make launches embarrassing: a pricing page still showing the old plan, a help article missing, sales hearing about it from a prospect. A master checklist with items grouped by function and marked by tier means nothing depends on someone remembering, and new team members can run a launch without folklore.

                ## Milestones
                1. A checklist grouped by function: product, engineering, design, marketing, sales, support, documentation, legal and operations.
                2. Each item marked with the tiers it applies to and how many days before launch it is due.
                3. Items from the last three launch retrospectives added where something was missed.
                4. A copy of the checklist used for the next launch, with each item ticked or marked not applicable.

                ## Notes
                Start from the **Operational checklist** template. Keep items as checkable outcomes, such as help article published, not activities, such as work on docs.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tiered master checklist with due-days per item, used in full for at least one launch with every item ticked or marked not applicable."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Create the launch checklist from the operational checklist template"
                - "Ask each function lead for the five items they most often see forgotten"
                - "Mark every item with its tiers and days before launch"
                - "Run the next launch from a copy of the checklist"
            - name: Launch goals and guardrail metrics set in advance
              description: |-
                ## Purpose
                Goals written after a launch always look achieved. Setting two or three targets before the date, such as accounts using the feature in 30 days or trial conversions, plus guardrails like error rate and support ticket volume, gives the post-launch review something to measure against and tells the team early when to worry.

                ## Milestones
                1. Two or three launch goals written with a number, a date and a data source.
                2. Two guardrail metrics with a threshold that would trigger action.
                3. The baseline for each metric recorded before launch.
                4. Goals and guardrails agreed with the analytics owner and shown in the launch brief.

                ## Notes
                Ask the analytics owner to confirm every metric can actually be measured on launch day. A goal that needs new tracking is a dependency, not a goal.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Two or three dated launch goals and two guardrails with thresholds and baselines, recorded in the launch brief before the launch date."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft two or three launch goals with a number, a date and a data source"
                - "Choose two guardrail metrics and the threshold that triggers action"
                - "Ask the analytics owner to confirm each metric is measurable today"
                - "Record the baselines in the launch brief"
            - name: Go or no-go criteria and decision rights
              description: |-
                ## Purpose
                Go or no-go meetings turn into arguments when the bar is invented on the day. Writing the criteria in advance, such as no open severity one bugs, support trained, docs published and legal sign-off received, and naming who can block, makes the call quick, fair and hard to overrule with enthusiasm.

                ## Milestones
                1. Criteria written for each tier, each one answerable with yes or no.
                2. Named people who can block the launch, and what counts as a valid reason.
                3. A rule for what happens on a no: new date, reduced scope or quiet release.
                4. The criteria agreed with engineering, support and marketing leads before the next launch.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written yes or no criteria per tier, named blockers and a no-go rule, agreed by engineering, support and marketing leads."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write yes or no launch criteria for each tier"
                - "Name who can block a launch and what counts as a valid reason"
                - "Write the rule for a no-go: new date, smaller scope or quiet release"
                - "Agree the criteria with the engineering, support and marketing leads"
            - name: Working-back plan from the launch date
              description: |-
                ## Purpose
                Marketing campaigns, sales training and translated help content all have lead times longer than the last sprint. Working back from the launch date, with each function's lead time and any company freeze windows marked, shows in week one whether the date is real or whether something needs to move.

                ## Milestones
                1. A timeline from today to launch day with each function's milestones and lead times.
                2. Company freeze windows, holidays and competing launches marked on it.
                3. Critical path items, the ones that move the date if late, highlighted.
                4. The plan reviewed with every function lead and either confirmed or the date changed.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A working-back timeline with lead times, freeze windows and highlighted critical path, confirmed by every function lead."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask each function lead for their lead time on a launch of this tier"
                - "Plot milestones back from the launch date on one timeline"
                - "Mark freeze windows, public holidays and other launches on the timeline"
                - "Highlight the critical path and review it with the function leads"
            - name: Launch channel and single source of truth page
              description: |-
                ## Purpose
                When launch status lives in six threads and three documents, people act on the out-of-date one. A single launch page holding the brief, checklist, dates, owners and decisions, with one channel for questions, gives everyone the same answer and cuts status questions to the owner by half.

                ## Milestones
                1. One launch page holding the brief, checklist, timeline, owners, decisions log and links to assets.
                2. One named channel or thread for launch questions, with the page pinned.
                3. A decisions log on the page with date, decision and who made it.
                4. Old documents and threads pointing to the launch page instead.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A launch page with brief, checklist, timeline, owners and decisions log, pinned in one launch channel that all function leads have joined."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create the launch page with sections for brief, checklist, timeline and owners"
                - "Open one launch channel and pin the page in it"
                - "Add a decisions log with date, decision and decider"
                - "Replace old status documents with a link to the launch page"
            - name: Launch risk register with owners
              description: |-
                ## Purpose
                Most launch failures were predicted by someone weeks earlier and never written down: a vendor dependency, an untested migration, a key engineer on leave. A short register listing each risk, its likelihood, impact, owner and mitigation makes those worries visible while they can still be acted on.

                ## Milestones
                1. A register with at least the top eight risks across technical, commercial, legal and people categories.
                2. Each risk scored for likelihood and impact and given an owner.
                3. A mitigation or contingency written for every high risk.
                4. The register reviewed in the weekly launch sync until launch day.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A launch risk register with at least eight scored risks, an owner each and a mitigation for every high risk, reviewed weekly until launch."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create the register from the risk register template"
                - "Ask each function lead for the one thing most likely to go wrong"
                - "Score each risk and assign an owner"
                - "Review open risks and mitigations with their owners @recurring(monthly:8)"
            - name: Weekly cross-functional launch sync
              description: |-
                ## Purpose
                Launch work spans teams that never otherwise meet, so problems surface late unless there is a standing slot. A 30-minute weekly sync, run from the checklist and risk register rather than round-the-room updates, catches slipping items while there is still time to fix them.

                ## Milestones
                1. A recurring 30-minute slot with every function lead for upcoming launches.
                2. A fixed agenda: checklist items due, new risks, decisions needed, dates at risk.
                3. Actions and decisions written into the launch page within an hour of each sync.
                4. Syncs cancelled when nothing is due, so people keep turning up.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly launch sync held for at least eight weeks running, with actions and decisions logged on the launch page after each one."
                cadence: rolling
              tasks:
                - "Book a recurring 30-minute launch sync with every function lead"
                - "Write the fixed four-item agenda at the top of the launch page"
                - "Run the launch sync from the checklist and log actions afterwards @recurring(weekly:tue)"
            - name: Rolling launch calendar for the next two quarters
              description: |-
                ## Purpose
                Sales leaders, support managers and marketing all plan around launches, and they hate surprises more than delays. A rolling calendar of planned launches with tier, confidence and owner, shared openly, lets other teams staff and plan, and shows when three launches are about to land in the same week.

                ## Milestones
                1. A calendar of every planned launch for six months with tier, target date, confidence and owner.
                2. Confidence shown honestly, for example committed, likely or exploring.
                3. Clashes with other launches, events and freeze periods flagged.
                4. The calendar shared with sales, support and marketing leadership each quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A six-month launch calendar with tier, date confidence and owner per launch, updated monthly and shared with go-to-market leaders each quarter."
                cadence: rolling
              tasks:
                - "List every planned launch for six months with tier, date and owner"
                - "Add a confidence label to each date"
                - "Update dates and confidence on the launch calendar @recurring(monthly:3)"
                - "Share the calendar with sales, support and marketing leaders @recurring(quarterly)"
            - name: Monthly readiness review of upcoming launches
              description: |-
                ## Purpose
                A launch that is red three weeks out is fixable; one discovered red at the go or no-go is not. Reviewing every launch due in the next 60 days once a month, with a simple readiness score per function, gives managers one place to see which launches need help.

                ## Milestones
                1. A readiness view listing launches due in 60 days with a red, amber or green status per function.
                2. A short written reason for every red or amber.
                3. An owner and date for fixing each red.
                4. Three consecutive monthly reviews held, with fewer surprises at go or no-go.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive monthly readiness reviews, each showing per-function status for launches due within 60 days and an owner for every red."
                cadence: rolling
              tasks:
                - "Build a readiness view with a status column for each function"
                - "Ask each function lead to set their own status before the review"
                - "Review launches due in the next 60 days and assign owners to every red @recurring(monthly:12)"
            - name: Go or no-go meeting for each launch
              description: |-
                ## Purpose
                The go or no-go is where a launch is either protected or rushed. Holding it two to five working days before launch, walking the written criteria one by one and recording the decision and its conditions, means the call is made on evidence and everyone leaves knowing exactly what happens next.

                ## Milestones
                1. The meeting booked at launch planning time, two to five working days before the date.
                2. Each criterion answered yes or no by its owner, with evidence linked.
                3. The decision recorded as go, go with conditions, or no-go, with reasons.
                4. The outcome posted to the launch channel within an hour.

                ## Notes
                Start from the **Meeting notes** template. A go with conditions needs a named person checking each condition before launch, or it is just a go.
              priority: high
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "A recorded go or no-go decision, with each criterion answered by its owner, held before every tier 1 and tier 2 launch."
                cadence: rolling
              tasks:
                - "Book the go or no-go meeting when the launch date is first set"
                - "Set up the meeting notes page with every criterion as a line"
                - "Ask each criterion owner to post evidence a day before the meeting"
                - "Post the decision and any conditions to the launch channel"
            - name: First fortnight launch watch
              description: |-
                ## Purpose
                The first two weeks after launch are when bugs, confused customers and unexpected load show up, and when fixes are cheapest. A short daily check of guardrail metrics, support tickets and sales feedback for ten working days, with a named person on watch, turns early signals into fixes instead of churn.

                ## Milestones
                1. A named person on launch watch for each of the first ten working days.
                2. A daily check covering guardrail metrics, support tickets, sales questions and social mentions.
                3. Issues logged with severity and owner in one list.
                4. A summary posted at the end of the fortnight with open issues handed to the normal backlog.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ten working days of launch watch with a daily check logged, ending in a written summary and open issues handed to the backlog."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Draw up a launch watch rota for the first ten working days"
                - "Write the daily watch checklist of metrics, tickets and sales questions"
                - "Log each issue found with severity and owner"
                - "Post the fortnight summary and move open issues into the backlog"
            - name: Post-launch review within 30 days
              description: |-
                ## Purpose
                Teams that skip the review repeat the same mistakes on the next launch. A blameless review within 30 days, comparing results with the goals set beforehand and asking what helped and what hurt, gives the playbook its improvements and the team a clear ending.

                ## Milestones
                1. The review booked before launch day, within 30 days afterwards.
                2. Results against each pre-launch goal and guardrail shown with data.
                3. Three things to keep and three things to change agreed by the group.
                4. Each change turned into an action with an owner on the retro actions backlog.

                ## Notes
                Keep it blameless. Ask what about the process allowed the problem, not who caused it.
              priority: high
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A written post-launch review held within 30 days, with results against goals and at least three owned actions added to the backlog."
                cadence: rolling
              tasks:
                - "Book the post-launch review before launch day"
                - "Gather results against each launch goal and guardrail"
                - "Run the review with three keep and three change items"
                - "Add each change as an owned action on the retro backlog"
            - name: Launch retrospective actions backlog
              description: |-
                ## Purpose
                Retro actions written on a whiteboard rarely survive the next sprint. One backlog collecting actions from every launch review, checked monthly, shows which process fixes actually happened and which problems keep returning across launches.

                ## Milestones
                1. A single list of retro actions from all launches with owner, date and status.
                2. Repeat issues tagged so patterns across launches are visible.
                3. Completed actions reflected in the checklist or playbook.
                4. Six months of monthly reviews with the open list shrinking.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A shared retro actions backlog reviewed monthly for six months, with completed actions reflected in the checklist or playbook."
                cadence: rolling
              tasks:
                - "Collect actions from the last three launch reviews into one list"
                - "Tag actions that repeat an issue from an earlier launch"
                - "Chase owners of overdue retro actions and close finished ones @recurring(monthly:24)"
            - name: Launch scorecard at day 7, 30 and 90
              description: |-
                ## Purpose
                Early excitement often fades, and a launch looks different a week out than it does at three months. Recording the same handful of numbers at day 7, 30 and 90 for every launch, against the goals set beforehand, shows which launches truly landed and builds a record leaders can trust.

                ## Milestones
                1. A scorecard format with goals, guardrails, support volume and sales feedback.
                2. Day 7, 30 and 90 dates entered in the calendar for each launch.
                3. Each checkpoint recorded with a one-line verdict: on track, behind or ahead.
                4. Scorecards for the last three launches shared with leadership.

                ## Notes
                Start from the **Metrics log** template. Adoption detail per feature belongs with feature adoption tracking; the scorecard is the launch's headline record.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Scorecards completed at day 7, 30 and 90 for at least three launches, each with a one-line verdict against pre-launch goals."
                cadence: rolling
              tasks:
                - "Create the launch scorecard from the metrics log template"
                - "Add day 7, 30 and 90 checkpoints for the most recent launch"
                - "Fill in any launch scorecard checkpoints that fell due this month @recurring(monthly:15)"
            - name: Field feedback loop from sales and support
              description: |-
                ## Purpose
                Sales and support hear what customers make of a launch long before dashboards do, but that knowledge stays in calls and tickets unless someone collects it. A short weekly round-up of launch questions, objections and complaints from the field shows where the messaging, docs or product need a fix in the weeks after launch.

                ## Milestones
                1. One place where sales and support drop launch feedback, with a tag per launch.
                2. A weekly round-up grouped into themes with counts.
                3. Each theme routed to an owner: messaging, documentation, product or pricing.
                4. Field contributors told what changed because of their feedback.

                ## Notes
                Start from the **Feedback themes** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six weekly field feedback round-ups after a launch, grouped into themes, with each theme routed to a named owner."
                cadence: rolling
              tasks:
                - "Set up a feedback themes page with a tag for the current launch"
                - "Ask sales and support managers to post launch feedback there"
                - "Group the week's launch feedback into themes and route each one @recurring(weekly:fri)"
                - "Tell contributors what changed as a result of their feedback"
            - name: Quarterly launch playbook refresh
              description: |-
                ## Purpose
                Written once, a playbook becomes wrong within a year as tools, teams and channels change. Refreshing it each quarter from retro actions and scorecards keeps the tiers, checklist and templates matching how launches are really run, so people keep using it instead of working around it.

                ## Milestones
                1. One playbook page linking tiers, checklist, brief template, go or no-go criteria and review format.
                2. Each quarter's retro actions folded into the playbook.
                3. Out-of-date items removed and changes listed at the top with a date.
                4. Function leads told what changed each quarter.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A launch playbook updated four quarters running, each with a dated change list sent to function leads."
                cadence: cyclic
              tasks:
                - "Gather tiers, checklist, brief and criteria onto one playbook page"
                - "Fold completed retro actions into the playbook and date the changes @recurring(quarterly)"
                - "Send function leads a three-line summary of playbook changes"
            - name: Monthly internal launch digest
              description: |-
                ## Purpose
                Most staff learn about launches from customers or social media, which is awkward for sales and support alike. A short monthly digest of what shipped, what is coming next month and where to find the details keeps the whole company able to talk about the product without reading every channel.

                ## Milestones
                1. A digest format of no more than one screen: shipped, coming next, links.
                2. A distribution list or channel covering sales, support, success and leadership.
                3. Six monthly issues sent on time.
                4. A quick check with two sales and two support people on whether it is useful.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly internal launch digests sent to sales, support, success and leadership, with feedback gathered from at least four readers."
                cadence: rolling
              tasks:
                - "Draft a one-screen digest format of shipped, coming next and links"
                - "Agree the distribution list with the sales and support managers"
                - "Send the internal launch digest for the month @recurring(monthly:28)"
                - "Ask two sales and two support readers what they would change"
            - name: Writing launch messaging with product marketing
              description: |-
                ## Purpose
                Product managers know what was built; customers care what it lets them do. Learning to turn a feature list into a message house, with one headline benefit, three supporting points and proof for each, makes the brief, the sales deck and the announcement say the same thing.

                ## Milestones
                1. A message house drafted for one launch with headline, three pillars and proof points.
                2. The draft tested by reading it to two people outside the team.
                3. The messaging reviewed by product marketing or marketing, with edits accepted or argued.
                4. The final messaging reused in the brief, sales deck and announcement.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A reviewed message house for one launch, with the same headline and pillars visible in its brief, sales deck and announcement."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read two strong launch announcements and note their headline and proof"
                - "Draft a message house for the next launch"
                - "Read the draft to two people outside the team and note confusion"
                - "Review the messaging with product marketing and agree the final version"
            - name: Running a launch pre-mortem
              description: |-
                ## Purpose
                Asking people to imagine the launch has already failed surfaces risks that a normal planning meeting politely skips. Learning to run a 45-minute pre-mortem, three to four weeks before launch, gives quieter team members permission to name their worries and feeds the risk register with real items.

                ## Milestones
                1. The pre-mortem format learned: imagine failure, write reasons alone, share, group, act.
                2. One pre-mortem run for a real launch with every function present.
                3. The top five failure reasons turned into risks with owners.
                4. A note written on what to do differently when running the next one.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One pre-mortem held for a real launch, with its top five failure reasons added to the risk register with owners."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read a short guide to the pre-mortem method"
                - "Book a 45-minute pre-mortem three to four weeks before the next launch"
                - "Run it with silent writing before any discussion"
                - "Turn the top five failure reasons into owned risks"
            - name: Case study of three past launches
              description: |-
                ## Purpose
                Every company has launches people still talk about, for good and bad reasons, and the lessons are rarely written down. Studying three past launches, one strong, one weak and one average, through their documents and a short chat with people involved, gives you your organisation's real launch habits rather than the official version.

                ## Milestones
                1. Three past launches chosen with a range of outcomes.
                2. For each, the brief, dates, results and what people remember gathered.
                3. Two people from each launch spoken to for 20 minutes.
                4. A one-page comparison of what the strong launch did that the others did not.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page comparison of three past launches, built from their documents and six short conversations, shared with the product team."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick three past launches with a strong, weak and average outcome"
                - "Find each launch's brief, dates and results"
                - "Book 20-minute chats with two people from each launch"
                - "Write a one-page comparison and share it with the product team"
            - name: Understanding how sales will sell the launch
              description: |-
                ## Purpose
                Something that looks clear in a product review can be hard to sell in a real call, where the buyer asks about price, migration and competitors in the first five minutes. Sitting in on sales calls and pipeline reviews teaches you which launches move deals and what the sales team needs to talk about them confidently.

                ## Milestones
                1. Three sales calls observed with notes on questions customers ask.
                2. One pipeline review attended to see which deals the launch could affect.
                3. A short list of the top five questions sales will face about the launch.
                4. Those questions answered in the sales materials before launch.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three sales calls and one pipeline review observed, producing five launch questions that are answered in the sales materials."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask a sales manager to let you sit in on three customer calls"
                - "Attend one pipeline review and note deals the launch could affect"
                - "Write the top five questions sales will face about the launch"
                - "Join a sales call to hear current customer questions @recurring(quarterly)"
            - name: Writing launch FAQs that answer the hard questions
              description: |-
                ## Purpose
                The questions that sink launches are the uncomfortable ones: what happens to my existing data, does this cost more, why did you remove the old way. Learning to write an internal and an external FAQ that answers those first, before the easy ones, prepares every team for the conversations they will actually have.

                ## Milestones
                1. A list of at least fifteen likely questions, gathered from sales, support and legal.
                2. An internal FAQ with candid answers, including what we are not saying publicly.
                3. An external FAQ with customer-safe answers checked by legal where needed.
                4. Both FAQs linked from the launch page and the support and sales materials.

                ## Notes
                Put the hardest five questions at the top. If you cannot answer one honestly, that is a launch risk, not a wording problem.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "An internal and an external FAQ, each starting with the five hardest questions, linked from the launch page and support and sales materials."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask sales, support and legal for the questions they dread about this launch"
                - "Write candid internal answers to the hardest five first"
                - "Turn the internal answers into customer-safe external wording"
                - "Ask the agent to check both FAQs for unanswered or contradictory questions"
            - name: Sales enablement kit for a tier 1 launch
              description: |-
                ## Purpose
                Sales teams will not pitch what they cannot explain, and a launch that sales ignores rarely hits its revenue goals. A compact kit with the pitch, a demo script, objection handling, a competitor comparison and the FAQ, delivered at least a week before launch, gives account teams what they need to bring it up in their next call.

                ## Milestones
                1. A one-slide pitch and a three-minute demo script.
                2. Objection handling for the five most likely pushbacks.
                3. A short comparison against the main alternatives buyers mention.
                4. The kit reviewed by two account executives and delivered at least a week before launch.
                5. The kit linked from wherever sales keep their materials.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A sales kit with pitch, demo script, objections and comparison, reviewed by two account executives and published a week before launch."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Draft the one-slide pitch and three-minute demo script"
                - "Write answers to the five most likely objections"
                - "Ask two account executives to review the kit and try the demo"
                - "Publish the kit where sales keep their materials a week before launch"
            - name: Support readiness pack before launch day
              description: |-
                ## Purpose
                Support absorbs every gap a launch leaves, usually with no warning and no answers. A pack with updated help articles, reply templates for common questions, known issues, and a clear escalation path to the product team means the first wave of tickets is handled in minutes rather than escalated in confusion.

                ## Milestones
                1. Help articles written or updated and ready to publish on launch day.
                2. Reply templates for the ten most likely questions.
                3. A known issues list and workarounds shared with support.
                4. An escalation path naming who in product and engineering answers during the first fortnight.
                5. A 30-minute walkthrough held with the support team before launch.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Help articles, ten reply templates, a known issues list and a named escalation path delivered and walked through with support before launch."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the ten questions support is most likely to get about the launch"
                - "Write or update the help articles with the documentation lead"
                - "Draft reply templates and a known issues list with the support lead"
                - "Run a 30-minute walkthrough with the support team"
                - "Name the product and engineering escalation contacts for the first fortnight"
            - name: Key account briefings before a major launch
              description: |-
                ## Purpose
                Large customers who learn about a change from a public announcement feel blindsided, and their admins may need to prepare users. Briefing the top accounts a week or two ahead, through their account managers, protects relationships and turns the biggest customers into early advocates rather than escalations.

                ## Milestones
                1. A list of accounts to brief, chosen by revenue, impact and contract terms.
                2. A short briefing note and slide for account managers to use.
                3. Each briefing logged with date, attendees and questions raised.
                4. Questions from briefings fed back into the FAQ and support pack.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every account on the briefing list briefed before launch, with date, attendees and questions logged and fed into the FAQ."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree the briefing list with the customer success or account lead"
                - "Write a short briefing note and slide for account managers"
                - "Log each briefing with date, attendees and questions"
                - "Add new questions from briefings to the external FAQ"
            - name: Demo environment and sample data for launch
              description: |-
                ## Purpose
                Demos break when they rely on someone's personal test account or on production data that cannot be shown. A shared demo environment with realistic sample data and the new capability switched on, tested by sales and marketing a week before launch, keeps every demo, screenshot and recorded video consistent and safe.

                ## Milestones
                1. A demo environment with the launched capability enabled.
                2. Realistic sample data with no real customer information.
                3. A reset routine so the environment returns to a known state after each demo.
                4. Sales and marketing have run the demo there successfully before launch.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A demo environment with sample data and a reset routine, used successfully by sales and marketing before launch day."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask engineering to enable the launched capability in a shared demo environment"
                - "Load realistic sample data with no real customer details"
                - "Write a short reset routine for after each demo"
                - "Ask sales and marketing to rehearse the demo there"
            - name: Rollback and contingency plan for launch
              description: |-
                ## Purpose
                Some launches have to be paused or reversed, and the worst time to work out how is at midnight with customers watching. A written plan naming the triggers, who decides, how to switch off or roll back, and what customers and staff are told keeps a bad hour from becoming a bad month.

                ## Milestones
                1. Clear triggers for pausing or rolling back, tied to the guardrail metrics.
                2. One named person who decides, and a backup.
                3. Technical steps to switch off or reverse the change, tested once.
                4. Holding statements drafted for customers, support and sales.
                5. The plan linked from the launch page and known to everyone on launch watch.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written rollback plan with triggers, a decider, tested technical steps and drafted holding statements, linked from the launch page."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the triggers for pausing or rolling back the launch"
                - "Name the decider and a backup for a rollback call"
                - "Ask engineering to test the rollback steps once in a staging environment"
                - "Draft holding statements for customers, support and sales"
            - name: Launch campaign plan with marketing
              description: |-
                ## Purpose
                Marketing needs more lead time and more detail than product teams usually give, and campaigns built in a rush miss the audience. Agreeing the campaign early, with channels, audience, assets, owners and dates matched to the tier, means emails, posts, pages and in-product messages go out together on the day.

                ## Milestones
                1. Audience and channels agreed for the launch tier.
                2. An asset list with owner and due date: landing page, email, social posts, in-product message, blog post.
                3. Every asset reviewed for accuracy by the product owner.
                4. A send and publish schedule for launch day and the following two weeks.

                ## Notes
                Start from the **Marketing campaign** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A campaign plan with audience, channels and an owned, dated asset list, with every asset accuracy-checked by product before launch."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Set up the campaign from the marketing campaign template"
                - "Agree audience and channels with marketing for the launch tier"
                - "List every asset with an owner and due date"
                - "Check each asset for product accuracy before it is scheduled"
            - name: Cutting launch scope to protect the date
              description: |-
                ## Purpose
                When a launch falls behind, teams usually slip the date by default, even when marketing, events and customer promises are fixed. Making an explicit scope decision, listing what could be held back, what that costs and what customers would notice, gives leaders a real choice instead of a surprise delay.

                ## Milestones
                1. The items still unfinished listed with effort remaining.
                2. Two or three options compared: slip the date, cut scope, or launch as limited availability.
                3. The customer and commercial impact of each option written in a sentence.
                4. A decision recorded with who made it and communicated to every function.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A recorded decision between slipping, cutting scope or limited availability, with the impact of each option written down and shared with all functions."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List unfinished launch items with the effort each still needs"
                - "Write the impact of slipping, cutting scope and limited availability"
                - "Take the options to the accountable owner for a decision"
                - "Record the decision and tell every function lead the same day"
            - name: Legal, privacy and security sign-offs for launch
              description: |-
                ## Purpose
                Late legal or security review is one of the commonest reasons a launch moves at the last minute. Knowing which reviews your launch needs, such as privacy notice changes, terms updates, a security review or accessibility checks, and requesting them early with what reviewers need, puts sign-off on the plan rather than in the way of it.

                ## Milestones
                1. The reviews this launch needs identified with each reviewer.
                2. Each reviewer's lead time and required inputs known.
                3. Requests sent with a summary, data flows and screenshots where relevant.
                4. Every sign-off recorded on the launch page before the go or no-go.

                ## Notes
                This project organises the reviews; the decisions belong to your legal, privacy and security colleagues.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every required legal, privacy and security sign-off identified, requested with the right inputs and recorded on the launch page before go or no-go."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask legal, privacy and security which reviews this launch needs"
                - "Note each reviewer's lead time and the inputs they want"
                - "Send review requests with a summary, data flows and screenshots"
                - "Record each sign-off on the launch page"
            - name: Customer-eye walkthrough of the whole launch
              description: |-
                ## Purpose
                Teams check their own piece and nobody checks the whole: the email links to a page that says something different, the help article shows an old screen, the upgrade button goes nowhere. Walking the full customer path a few days before launch, as a new and an existing customer, catches the gaps between teams that no single checklist owner sees.

                ## Milestones
                1. Two customer paths written: a new prospect and an existing customer.
                2. Each path walked end to end through email, landing page, product, help centre and billing.
                3. Every mismatch or broken step logged with an owner.
                4. All logged issues fixed or accepted before the go or no-go.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Both customer paths walked end to end before go or no-go, with every logged mismatch fixed or explicitly accepted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the steps a new prospect and an existing customer will take"
                - "Walk both paths through every email, page and product screen"
                - "Log each mismatch or broken link with an owner"
                - "Confirm every logged issue is fixed or accepted before go or no-go"
            - name: Launch day run of show
              description: |-
                ## Purpose
                Launch day goes wrong in small ways: an email sent before the feature is switched on, a post published in the wrong time zone, nobody watching support. An hour-by-hour run of show, with each step's owner, dependency and confirmation, makes the day calm and lets the owner see at a glance what has happened.

                ## Milestones
                1. An hour-by-hour plan from switch-on to the end-of-day check, with owners.
                2. Dependencies marked, such as feature enabled before announcement sent.
                3. A launch-day channel with each step confirmed as it happens.
                4. An end-of-day summary posted with any issues and owners.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A launch day run with every step on the hour-by-hour plan confirmed in the channel and an end-of-day summary posted."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft the hour-by-hour run of show with an owner per step"
                - "Mark each dependency such as switch-on before the email goes out"
                - "Walk the run of show with every owner two days before"
                - "Post the end-of-day summary with issues and owners"
            - name: Customer launch webinar or live demo
              description: |-
                ## Purpose
                A live session lets customers see the new capability in use and ask the questions that a post cannot answer. Planning a 45-minute webinar with a tight demo, a customer voice if possible and time for questions, then sharing the recording, gives sales and success a reusable asset as well as the live audience.

                ## Milestones
                1. A date, host, presenter and running order fixed.
                2. Invitations sent through marketing to the right customer segment.
                3. A rehearsal held in the demo environment.
                4. The live session delivered and the recording shared with attendees, sales and success.
                5. Questions from the session added to the FAQ.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A launch webinar delivered with a rehearsal beforehand, its recording shared with attendees, sales and success, and its questions added to the FAQ."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Fix the webinar date, host and running order with marketing"
                - "Rehearse the demo once in the demo environment"
                - "Deliver the live session and save the questions asked"
                - "Share the recording with attendees, sales and success"
            - name: Internal launch kickoff and sales training session
              description: |-
                ## Purpose
                Reading a kit is not the same as being able to pitch it, and staff who feel prepared talk about a launch far more. A one-hour internal kickoff, with the why, a live demo, practice handling objections and the support plan, gets sales, success and support ready together and shows the launch matters.

                ## Milestones
                1. A one-hour session booked for sales, success and support, recorded for those who miss it.
                2. A running order: why it matters, demo, objections practice, support plan, questions.
                3. Attendance tracked and the recording shared within a day.
                4. A short follow-up check of three account executives on whether they feel ready to pitch it.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A recorded internal kickoff held before launch for sales, success and support, with attendance tracked and a readiness check of three account executives."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Book a one-hour kickoff for sales, success and support before launch"
                - "Plan the running order with a demo and objections practice"
                - "Share the recording and kit with everyone who missed it"
                - "Ask three account executives whether they feel ready to pitch it"
            - name: Press and analyst briefings under embargo
              description: |-
                ## Purpose
                For a major launch, journalists and industry analysts need time to understand the story before it goes public, and a broken embargo can ruin the timing. Planning who to brief, when, with what materials and under what embargo terms, alongside your communications team, gives the launch outside coverage without losing control of the date.

                ## Milestones
                1. A briefing list of journalists and analysts agreed with communications.
                2. A press release, briefing deck and spokesperson agreed and approved.
                3. Embargo terms set and confirmed in writing with each outlet.
                4. Briefings held with notes kept, and coverage tracked after launch.

                ## Notes
                Your communications or public relations team owns media relationships. This project is the product side: the story, the demo and the spokesperson's preparation.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every outlet on the agreed briefing list briefed under a written embargo, with notes kept and coverage tracked after launch."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Agree the press and analyst briefing list with communications"
                - "Prepare the briefing deck and a demo for the spokesperson"
                - "Confirm embargo terms in writing with each outlet"
                - "Track coverage in the week after launch"
            - name: Annual conference launch moment
              description: |-
                ## Purpose
                Many companies bundle major launches into a yearly customer conference or keynote, which fixes the date months ahead and leaves no room for slipping. Planning the conference launch as its own programme, with a feature freeze well before the stage date and a fallback for anything not ready, keeps the keynote honest.

                ## Milestones
                1. The launches going into the conference chosen and confirmed with leadership.
                2. A feature freeze date set well ahead of the event.
                3. Keynote demos scripted, rehearsed and recorded as a backup.
                4. A fallback agreed for each launch that is not ready, such as preview or coming soon.
                5. Post-event follow-up: sales kit, webinar and customer emails sent within a week.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A conference launch delivered with a set freeze date, rehearsed and recorded demos, and post-event follow-up sent within a week."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "List launch candidates for the conference with their readiness today"
                - "Set the feature freeze date with engineering leadership"
                - "Script and rehearse each keynote demo and record a backup"
                - "Start planning the next conference launch slate @recurring(yearly)"
            - name: Launch customer quotes and references
              description: |-
                ## Purpose
                A launch with a real customer saying what changed for them is far more convincing than any claim the company makes. Lining up two or three customers who used it early to give a quote, a short case study or a reference call, with their written approval, gives marketing and sales proof on launch day.

                ## Milestones
                1. Two or three candidate customers identified with their account managers.
                2. Each customer asked, with clear options: quote, case study or reference call.
                3. Quotes and stories written up and approved in writing by the customer.
                4. Approved material handed to marketing and sales before launch.

                ## Notes
                Never publish a customer name, logo or quote without written approval from the customer.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "At least two customer quotes or references approved in writing by the customers and handed to marketing and sales before launch."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask account managers for three customers who have used it early"
                - "Offer each customer a quote, case study or reference call"
                - "Get written approval of the final wording from each customer"
                - "Hand approved quotes and references to marketing and sales"
            - name: Your first launch as a new product manager
              description: |-
                ## Purpose
                Your first launch in a new company is when you learn who really needs to know, which steps are written down and which are folklore. Treating it as a deliberate learning run, with a mentor, a copy of the last good launch's documents and notes on everything that surprised you, makes the second one far easier.

                ## Milestones
                1. A mentor or experienced product manager agreed to review your launch plan.
                2. The documents from a recent successful launch found and read.
                3. Your first launch delivered with brief, checklist and go or no-go in place.
                4. A list of surprises and unwritten rules shared with your manager.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A first launch delivered with mentor review, and a written list of surprises and unwritten rules shared with your manager."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask an experienced product manager to review your first launch plan"
                - "Read the documents from the most recent launch that went well"
                - "Keep a running note of every surprise during the launch"
                - "Share the surprises and unwritten rules with your manager"
            - name: Launching at a small company without product marketing
              description: |-
                ## Purpose
                In a small team the product manager often writes the announcement, briefs the founders, trains the two salespeople and answers support. A lighter launch kit, with a short brief, a single announcement reused across channels and one shared checklist, keeps quality up when there is no specialist for each step.

                ## Milestones
                1. A trimmed checklist with only the items a small team truly needs.
                2. One announcement written once and adapted for email, blog, social and in-product.
                3. A 20-minute briefing for everyone in the company who talks to customers.
                4. A note of which tasks to hand to a specialist when the company grows.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A launch delivered with a trimmed checklist, one announcement reused across four channels and a briefing for every customer-facing person."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Cut the master checklist down to what a small team truly needs"
                - "Write one announcement and adapt it for email, blog, social and in-product"
                - "Brief everyone who talks to customers in a 20-minute call"
                - "List the launch tasks you would hand to a specialist first"
            - name: Enterprise launch with customer notice periods
              description: |-
                ## Purpose
                Enterprise customers often have contracts that require advance notice of material changes, change windows when nothing may be switched on, and admins who must prepare thousands of users. Planning launches around those constraints, with admin pre-announcements and opt-in or delayed rollout options, avoids breaching commitments and keeps renewals safe.

                ## Milestones
                1. Notice periods and change window commitments confirmed with legal and account management.
                2. An admin pre-announcement sent within the required notice period.
                3. Admin controls or a delay option available for customers who need more time.
                4. A record of which customers were notified, when and how.

                ## Notes
                Contract terms vary by customer. Check the actual commitments with legal and account management rather than assuming a standard notice period.
              priority: high
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every affected enterprise customer notified within their contractual notice period, with a dated notification record and an admin delay option available."
                cadence: rolling
              tasks:
                - "Ask legal and account management for customers with notice or change window terms"
                - "Draft the admin pre-announcement template with what changes and when"
                - "Record which customers were notified, when and through which channel"
                - "Check upcoming launches against customer notice periods @recurring(monthly:6)"
            - name: Launching across time zones with a distributed team
              description: |-
                ## Purpose
                When engineering is in one region, marketing in another and customers everywhere, a launch can go live while half the team is asleep. Picking a launch time that suits the main customer base, with handovers and an on-call owner in each region, avoids a launch that nobody is awake to watch.

                ## Milestones
                1. A launch time chosen for the largest customer regions, with reasons noted.
                2. A handover plan with a named owner awake in each region for the first 48 hours.
                3. All scheduled sends and posts set in the correct time zone and double-checked.
                4. A short note after launch on what the time-zone plan got right or wrong.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A launch delivered with a reasoned launch time, named regional owners for 48 hours and every scheduled send checked for time zone."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check where your active customers are by region"
                - "Choose the launch time and write down why"
                - "Name an owner awake in each region for the first 48 hours"
                - "Double-check the time zone on every scheduled email and post"
            - name: Coaching product managers through their launches
              description: |-
                ## Purpose
                Product leaders with several product managers see launches go well or badly depending on who runs them, not on the process. A regular launch coaching slot, reviewing plans before the go or no-go and reviews afterwards, spreads good habits across the team and catches risky launches early.

                ## Milestones
                1. Each product manager's upcoming launches listed with dates and tiers.
                2. A monthly coaching slot with each product manager who has a launch due.
                3. Plans reviewed against the checklist and criteria before each go or no-go.
                4. Common coaching themes written up and fed into the playbook.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly launch coaching held for six months with every product manager who has a launch due, with common themes added to the playbook."
                cadence: rolling
              tasks:
                - "List each product manager's upcoming launches with tier and date"
                - "Hold launch coaching with each product manager who has a launch due @recurring(monthly:19)"
                - "Note recurring coaching themes for the playbook"
            - name: Relaunching after a launch that missed
              description: |-
                ## Purpose
                Some launches land quietly or badly: the message missed, adoption stalled or a bug spoiled the first impression. A deliberate relaunch, built on what the review found and aimed at the customers who matter most, can recover the investment, but only if it fixes the real cause rather than repeating the announcement louder.

                ## Milestones
                1. The cause of the miss written down from data and field feedback.
                2. A decision on whether to relaunch, fix quietly or let it rest.
                3. If relaunching, a changed message, audience or product fix in place.
                4. Relaunch results compared with the first attempt at day 30.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written diagnosis of the original miss and a recorded relaunch decision, with day 30 results compared if a relaunch went ahead."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pull the scorecard and field feedback from the launch that missed"
                - "Write the most likely cause of the miss in a paragraph"
                - "Decide between relaunching, fixing quietly or letting it rest"
                - "Compare relaunch results with the first attempt at day 30"
            - name: Launch programme office across product teams
              description: |-
                ## Purpose
                In larger organisations launches compete for the same marketing slots, sales attention and support capacity, and nobody sees the whole picture. A small launch programme office, owning the calendar, tiers, playbook and a weekly portfolio view, lets leadership balance launches across teams instead of discovering clashes too late.

                ## Milestones
                1. A charter for the programme office agreed with product, marketing and sales leadership.
                2. One portfolio view of all launches across teams with tier, date and readiness.
                3. A weekly portfolio check and a quarterly report to leadership.
                4. Clashes resolved by agreed rules, such as no two tier 1 launches in the same week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A chartered launch programme office running a weekly portfolio view and four quarterly leadership reports in its first year."
                cadence: rolling
              tasks:
                - "Draft a one-page charter for the launch programme office"
                - "Merge every team's launch list into one portfolio view"
                - "Check the launch portfolio for clashes and readiness gaps @recurring(weekly:wed)"
                - "Send leadership the quarterly launch portfolio report @recurring(quarterly)"
            - name: Coordinated multi-product release
              description: |-
                ## Purpose
                Bundling launches from several teams into one release, such as a seasonal release or a platform update, makes a stronger story but multiplies dependencies. Running it with one release owner, a shared freeze date, one combined message and a joint go or no-go stops one team's delay from silently breaking the others' launches.

                ## Milestones
                1. One release owner and a lead from each contributing team named.
                2. A shared freeze date and a combined message agreed.
                3. A rule for dropping a late item without delaying the whole release.
                4. A joint go or no-go held and the release delivered on the agreed date.
              priority: low
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "A multi-product release delivered on its agreed date after a joint go or no-go, with any late items dropped under the agreed rule."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Name the release owner and a lead from each contributing team"
                - "Agree the shared freeze date and combined message"
                - "Write the rule for dropping a late item from the release"
                - "Hold one joint go or no-go across all teams"
            - name: Year of launches benchmark
              description: |-
                ## Purpose
                Individual reviews show what happened on one launch; a year of them shows how the organisation launches. Comparing every launch from the last twelve months on lead time, readiness at go or no-go, goal attainment and incidents reveals whether the playbook is working and where to invest next.

                ## Milestones
                1. A table of every launch from the past year with tier, dates and outcome.
                2. Measures compared: planned versus actual date, readiness, goals met and incidents.
                3. Three findings written with evidence.
                4. Findings presented to product and go-to-market leadership with proposed changes.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A benchmark of the past year's launches on four measures, with three evidenced findings presented to leadership."
                cadence: cyclic
                effort_hours_estimate: "10"
              tasks:
                - "Gather every launch from the past year into one table"
                - "Compare planned and actual dates, readiness, goals met and incidents"
                - "Write three findings with evidence for leadership"
                - "Run the year of launches benchmark @recurring(yearly)"
            - name: Launch incident rehearsal
              description: |-
                ## Purpose
                Teams that have practised a launch going wrong respond in minutes; teams that have not spend the first hour working out who is in charge. A yearly 90-minute rehearsal of a launch-day failure, such as a broken sign-up flow or a data issue, tests the rollback plan, the decision chain and the holding statements before a real customer sees them.

                ## Milestones
                1. A realistic failure scenario written with engineering and support.
                2. A 90-minute rehearsal run with the launch owner, engineering, support and communications.
                3. Gaps found in the rollback plan, contacts and statements written down.
                4. Every gap fixed or assigned before the next tier 1 launch.
              priority: low
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "A launch incident rehearsal held each year, with every gap found fixed or assigned before the next tier 1 launch."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Write a launch-day failure scenario with engineering and support"
                - "Run a 90-minute launch incident rehearsal with the launch roles @recurring(yearly)"
                - "Write down every gap the rehearsal exposed"
                - "Assign an owner to each gap before the next tier 1 launch"
---

# Product Launch Management

This area is for whoever has to make a launch actually happen across engineering, marketing, sales and support: a product manager shipping their team's next release, a manager running several launches a quarter, or someone launching into enterprise customers with notice periods and change windows. It starts with the foundations (tiers, a launch brief, a named owner, a checklist, goals and go or no-go criteria), moves through the operating rhythm of syncs, calendars, readiness reviews and post-launch scorecards, then covers launch skills, readiness work for sales and support, dated launch moments, situations for new, small-company, distributed and enterprise teams, and specialist work such as a launch programme office.

The rhythm is weekly for the launch sync and field feedback, monthly for the launch calendar, readiness review, scorecards, retro actions and the internal launch digest, quarterly for the playbook refresh and sales ride-alongs, and yearly for tier, benchmark and incident rehearsal reviews. The Operational checklist, Risk register, Meeting notes, Metrics log, Feedback themes and Marketing campaign templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
