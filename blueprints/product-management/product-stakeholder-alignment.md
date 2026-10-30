---
id: product-management.product-stakeholder-alignment
name: Product Stakeholder Alignment
description: "A stakeholder map, clear decision rights, a decision log and a steady rhythm of updates, syncs and reviews that keep sales, support and leadership aligned on product trade-offs."
category: business
version: 1.0.0
tags: [product-management, product-stakeholder-alignment, manager, team, enterprise, stakeholder-updates, decision-log, trade-offs]
author: Aurum Technology
starter_structure:
  templates:
    - feedback-themes
    - person
    - meeting-notes
    - one-on-one
    - reading-queue
    - metrics-log
  pillars:
    - name: Product Management
      emoji: "🧩"
      description: "Deciding what to build and why: discovery and research, roadmaps and prioritisation, specs and launches, pricing and packaging, product analytics, and the feedback loops that keep a product honest."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Product Stakeholder Alignment
          description: "Keeping sales, support, leadership and other teams informed and aligned on product decisions through regular updates and honest trade-off discussions."
          projects:
            - name: Stakeholder map for your product area
              description: |-
                ## Purpose
                Before anyone can be kept aligned, you need to know who is affected by your product decisions, who can block them and who only needs to hear about them afterwards. A map that places sales, support, success, marketing, finance, legal and leadership on a grid of influence and interest shows where your attention is going and where it should go instead.

                ## Milestones
                1. Every team and named person affected by your product decisions listed, usually 15 to 40 names.
                2. Each person placed on an influence and interest grid with a one-line reason.
                3. The five to eight people whose support you most need marked as key stakeholders.
                4. Gaps noted where an important stakeholder currently hears nothing from product.

                ## Notes
                Include the people who say no quietly: the finance partner who approves headcount, the security reviewer, the regional sales lead whose numbers depend on your dates.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A stakeholder grid naming at least 15 people with influence and interest ratings, and five to eight key stakeholders marked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every team that has asked product for something in the last three months"
                - "Place each person on an influence and interest grid"
                - "Mark the five to eight key stakeholders you most need on side"
                - "Refresh the stakeholder map with new joiners and leavers @recurring(quarterly)"
            - name: Decision rights agreement for product calls
              description: |-
                ## Purpose
                Arguments about scope and dates often turn out to be arguments about who gets to decide. Agreeing in writing which product decisions you own, which need leadership sign-off and who must be consulted or informed for each, using a simple model such as RACI or DACI, removes a whole class of escalations before they start.

                ## Milestones
                1. The ten most common product decisions listed, from cutting scope to moving a launch date.
                2. Each decision assigned one decider, the roles consulted and the roles informed.
                3. The agreement reviewed and accepted by your manager and the heads of sales and support.
                4. The agreement published where every partner team can find it.

                ## Notes
                Keep the decider to one named role per decision. Two deciders means none.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A published decision rights table covering at least ten recurring product decisions, each with one decider, accepted by your manager and the sales and support heads."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write down the last five product decisions that caused friction and who made each"
                - "Draft a decider, consulted and informed list for ten recurring decisions"
                - "Walk the draft through with your manager before sharing it wider"
                - "Publish the agreed version on the product team's main page"
                - "Review the decision rights with leadership each year @recurring(yearly)"
            - name: Listening tour with sales, support and leadership
              description: |-
                ## Purpose
                Thirty-minute conversations with eight to twelve stakeholders will tell you more about alignment problems than any survey: what they think product is working on, where they were surprised last quarter and how they prefer to hear news. Doing the tour early, with the same five questions for everyone, gives you comparable answers and shows people you asked before you acted.

                ## Milestones
                1. Five standard questions written and tested on one friendly colleague.
                2. At least eight conversations held across sales, support, customer success and leadership.
                3. Answers grouped into themes, with quotes kept anonymous.
                4. A short summary of what you heard and what you will change sent to everyone you spoke to.

                ## Notes
                Start from the **Feedback themes** template to group what you hear. Sending the summary back is what turns a tour into trust.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "At least eight stakeholder conversations held, grouped into themes, with a written summary sent to every interviewee."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write five questions about surprises, priorities and preferred channels"
                - "Book eight to twelve thirty-minute conversations across partner teams"
                - "Group the answers into themes on the feedback themes page"
                - "Send every interviewee a summary of what you heard and will change"
            - name: Profile pages for your key stakeholders
              description: |-
                ## Purpose
                Knowing that the head of support measures her team on first-response time, or that the enterprise sales director has three renewals riding on one integration, changes how you frame every update to them. A short profile per key stakeholder, with their goals, pressures, preferred format and history with product, keeps that knowledge from living only in your head.

                ## Milestones
                1. A profile page for each of your five to eight key stakeholders.
                2. Each profile records their goals, the metric they are judged on and how they like to receive news.
                3. Past commitments product has made to each person noted with dates.
                4. Profiles corrected after your next conversation with each person.

                ## Notes
                Start from the **Person** template. Write only what you would be comfortable with the person reading.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A profile page exists for every key stakeholder, each listing their goals, key metric, preferred format and past product commitments."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Create a person page for your most senior stakeholder first"
                - "Record each person's goals, key metric and preferred update format"
                - "Add past product commitments to each profile with dates"
                - "Check each stakeholder profile for changes in role or goals @recurring(quarterly)"
            - name: Product decision log
              description: |-
                ## Purpose
                When a salesperson asks why a feature was dropped six months ago, the answer should take one link, not an afternoon in old chat threads. A decision log that records each significant product decision, the options considered, who decided and why, gives every team the same account and stops settled questions from being reopened.

                ## Milestones
                1. A log with columns for date, decision, options considered, decider, reasoning and evidence link.
                2. The ten most important decisions of the last six months entered retrospectively.
                3. The log linked from the product team page and the sales and support wikis.
                4. A rule agreed for which decisions must go in the log.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A decision log holding at least ten dated entries with decider and reasoning, linked from the sales and support wikis."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Set up the decision log with date, decision, options, decider and reasoning columns"
                - "Enter the ten most significant decisions from the last six months"
                - "Link the log from the sales and support wikis"
                - "Agree with your team which decisions must be logged"
            - name: Communication plan by audience and channel
              description: |-
                ## Purpose
                Executives want the decision and the risk in three lines, account managers want what to tell customers, and support wants dates and known issues. A plan that names each audience, what it needs, how often and through which channel stops you sending one long update that nobody reads to the end.

                ## Milestones
                1. Each audience from the stakeholder map listed with the questions it most needs answered.
                2. A channel, frequency and owner set for each audience.
                3. Rules for urgent news, such as a slipped date, written separately from routine updates.
                4. The plan shared with your manager and key stakeholders for comment.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written plan giving every audience on the stakeholder map a channel, frequency and owner, plus a separate rule for urgent news."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List each audience and the three questions it asks product most often"
                - "Pick one channel and frequency per audience"
                - "Write the rule for how fast urgent changes reach each audience"
                - "Revisit the communication plan against what people actually read @recurring(quarterly)"
            - name: Front door for requests from other teams
              description: |-
                ## Purpose
                Requests that arrive in direct messages, corridor chats and forwarded emails get lost, and the people who sent them assume they were ignored. One intake route with a short form, a promised response time and a visible status gives sales, support and leadership a fair way in and gives you a clear picture of internal demand.

                ## Milestones
                1. A single intake form asking for the problem, affected customers, revenue or risk at stake and urgency.
                2. A response promise published, such as an acknowledgement within two working days.
                3. Every request given a visible status: received, under review, planned or not planned.
                4. Partner team leads told that requests sent elsewhere will be redirected to the form.

                ## Notes
                This is for internal stakeholder requests. Raw customer feedback belongs in your feedback triage process, not here.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One published intake form with a stated response time, and every internal request from the last month showing a visible status."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft a five-question intake form for internal product requests"
                - "Publish the response time you will commit to"
                - "Redirect the next three side-channel requests to the form politely"
                - "Triage new internal requests and update their status @recurring(weekly:wed)"
            - name: Baseline alignment survey of partner teams
              description: |-
                ## Purpose
                Without a starting number, you cannot tell whether your updates are helping. A short survey of partner teams, asking how well they understand current priorities, how often product changes surprise them and how much they trust product dates, gives a baseline you can repeat in six months.

                ## Milestones
                1. A survey of no more than six questions, mixing 1 to 5 ratings with one open question.
                2. Responses from at least half of the people on your stakeholder map.
                3. Scores summarised by team, with the lowest-scoring team identified.
                4. Two specific changes chosen in response and announced to respondents.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Survey results from at least half the stakeholder map, summarised by team, with two announced changes in response."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write six survey questions on clarity, surprise and trust in dates"
                - "Send the survey to everyone on your stakeholder map"
                - "Ask the agent to summarise the open answers into themes"
                - "Announce the two changes you will make in response"
            - name: Shared language for plan confidence
              description: |-
                ## Purpose
                Sales hears 'we are looking at it' as a promise, and engineering hears 'committed' as a hope. Defining four or five plain labels such as committed, planned, exploring and not planned, with what each means for dates and customer conversations, makes every later update harder to misread.

                ## Milestones
                1. Four or five confidence labels defined in one sentence each.
                2. Guidance written for what sales and success may say to customers under each label.
                3. The labels applied to every item in current product updates.
                4. The definitions pinned in the sales and support channels.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Four or five confidence labels with written definitions and customer guidance, applied to every item in the current product update."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft one-sentence definitions for committed, planned, exploring and not planned"
                - "Write what customer-facing staff may say under each label"
                - "Relabel every item in the current product update"
                - "Pin the definitions in the sales and support channels"
            - name: Monthly product update for the whole company
              description: |-
                ## Purpose
                Once a company passes about fifty people, most staff learn about product changes second-hand or from customers. A monthly written update covering what shipped, what changed in the plan and why, what is coming next and what is not gives everyone the same version and cuts the repeated questions in chat.

                ## Milestones
                1. A fixed structure: shipped, changed and why, next, not doing, asks.
                2. The first three monthly updates sent on schedule.
                3. Readership checked, with most of the stakeholder map opening each update.
                4. A standing way for readers to ask questions in reply.

                ## Notes
                Lead with changes to the plan, not the list of shipped items. Changes are what people need to act on.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive monthly product updates sent on schedule in the fixed structure, each read by most of the stakeholder map."
                cadence: rolling
              tasks:
                - "Write the five section headings for the monthly update"
                - "Collect shipped items and plan changes from each product team"
                - "Ask the agent to draft the update from the decision log and release list"
                - "Send the monthly product update to the company @recurring(monthly:4)"
            - name: Weekly sales and product sync
              description: |-
                ## Purpose
                Deals won and lost on product gaps, competitor moves heard on calls and promises made under quarter-end pressure all reach product too late without a standing conversation. A tight thirty-minute weekly sync with sales leadership, with a fixed agenda and written notes, keeps both sides working from the same picture.

                ## Milestones
                1. A fixed agenda: lost deals with product reasons, upcoming changes, open asks, commitments check.
                2. Attendance agreed from sales leadership and one product lead.
                3. Notes from each sync published within a day.
                4. Product reasons for lost deals captured as a running list.

                ## Notes
                Start from the **Meeting notes** template. Cancel the sync in a week with nothing on the agenda rather than filling the time.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weekly syncs held with published notes, and a running list of product reasons for lost deals."
                cadence: rolling
              tasks:
                - "Agree the sync's attendees and fixed agenda with the head of sales"
                - "Run the weekly sales and product sync @recurring(weekly:tue)"
                - "Publish the sync notes in the sales channel within a day"
                - "Add each lost deal's product reason to the running list"
            - name: Monthly support and product escalation review
              description: |-
                ## Purpose
                Support teams see the cost of product decisions first: confusing screens, missing settings, workarounds explained a hundred times. A monthly review with support leads of the top ticket drivers and open escalations, with product saying plainly what will and will not be fixed, keeps support from feeling ignored and gives product real evidence.

                ## Milestones
                1. The top ten ticket drivers by volume shared before each review.
                2. Each open escalation given a product answer: fixing, scheduled, or not fixing with a reason.
                3. Workaround notes handed to support for issues that will not be fixed soon.
                4. Decisions from the review recorded in the decision log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three monthly reviews held in which every open escalation received a fixing, scheduled or not fixing answer recorded in the decision log."
                cadence: rolling
              tasks:
                - "Ask the support lead for this month's top ten ticket drivers"
                - "Prepare a fixing, scheduled or not fixing answer for each escalation"
                - "Hold the support and product escalation review @recurring(monthly:12)"
                - "Send support workaround notes for issues not being fixed soon"
            - name: Monthly leadership product review
              description: |-
                ## Purpose
                Leadership teams that only see product at quarterly planning tend to intervene late and hard. A monthly forty-five minute review of progress against outcomes, decisions taken, risks and the trade-offs you need leadership to make keeps senior support current and turns surprises into early conversations.

                ## Milestones
                1. A one-page pre-read format: outcomes, decisions made, risks, decisions needed.
                2. Pre-reads sent two working days before each review.
                3. Each review ending with every decision needed either made or given an owner and date.
                4. Three consecutive reviews held without a last-minute reschedule.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive monthly leadership reviews held with pre-reads sent two working days ahead and every requested decision made or assigned."
                cadence: rolling
              tasks:
                - "Agree the review slot and attendees with your manager"
                - "Draft the one-page pre-read format"
                - "Send the pre-read two working days before each review"
                - "Hold the leadership product review @recurring(monthly:20)"
            - name: Weekly decision log upkeep
              description: |-
                ## Purpose
                Logs decay within a month if entries depend on someone remembering. A fixed fifteen minutes each week to add the week's decisions, link the evidence and tell the people affected keeps the log trustworthy enough that other teams start citing it.

                ## Milestones
                1. Every decision from the week's meetings checked against the log.
                2. Each new entry linked to its evidence and announced to affected teams.
                3. Reversed decisions marked as superseded rather than deleted.
                4. A full month of entries with no gaps.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weeks of decision log entries with evidence links, and every reversed decision marked as superseded."
                cadence: rolling
              tasks:
                - "Block fifteen minutes each Friday for decision log upkeep"
                - "Add the week's decisions to the log with evidence links @recurring(weekly:fri)"
                - "Mark reversed decisions as superseded with a link to the new one"
                - "Tell affected teams about each new entry in their channel"
            - name: Regular one-to-ones with key stakeholders
              description: |-
                ## Purpose
                Trust is built in the conversations where nothing is being asked for. A monthly half hour with each key stakeholder, to hear their pressures and preview what is coming, means the hard conversation about a cut or a delay happens between people who already know each other.

                ## Milestones
                1. A monthly slot booked with each of your key stakeholders.
                2. A running notes page per person with agreed follow-ups.
                3. Follow-ups from each conversation closed before the next one.
                4. At least one upcoming change previewed in each conversation before it is announced.

                ## Notes
                Start from the **1:1** template. Keep the preview honest: share what is uncertain as uncertain.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly one-to-one held with every key stakeholder for three months, each with notes and closed follow-ups."
                cadence: rolling
              tasks:
                - "Book a recurring half hour with each key stakeholder"
                - "Create a running notes page for each stakeholder"
                - "Prepare one upcoming change to preview in each conversation @recurring(monthly:8)"
                - "Close the follow-ups from the last conversation before the next"
            - name: Customer commitments tracker
              description: |-
                ## Purpose
                Promises made to customers by sales or account managers, in a contract appendix or on a call, quietly become product obligations. A tracker of every external commitment with its customer, owner, date and product status lets you spot the ones at risk weeks before a renewal call goes badly.

                ## Milestones
                1. Every known external commitment collected from sales, success and contract notes.
                2. Each commitment recorded with customer, promise, date promised, owner and status.
                3. At-risk commitments flagged to the account owner with a proposed message.
                4. A rule agreed that new commitments need product confirmation first.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A tracker listing every known customer commitment with owner and status, reviewed weekly, and an agreed rule that new commitments need product sign-off."
                cadence: rolling
              tasks:
                - "Ask sales and success leads for every feature promised to a customer"
                - "Record each commitment with customer, date, owner and status"
                - "Review at-risk commitments with their account owners @recurring(weekly:mon)"
                - "Agree with the head of sales that new commitments need product sign-off"
            - name: Quarterly stakeholder alignment health check
              description: |-
                ## Purpose
                Every quarter, alignment drifts: new hires join sales, a leader changes priorities, an update channel goes quiet. A short quarterly check, rerunning the baseline survey questions, reviewing surprises and asking key stakeholders what is not working, catches the drift before it shows up as an escalation.

                ## Milestones
                1. The baseline survey rerun and scores compared with last quarter.
                2. Every surprise of the quarter listed with how the stakeholder found out.
                3. One change to the communication plan chosen and made.
                4. Results shared with your manager in a short note.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter, survey scores compared with the previous quarter and one recorded change made to the communication plan."
                cadence: cyclic
              tasks:
                - "Rerun the alignment survey and compare scores @recurring(quarterly)"
                - "List every stakeholder surprise from the quarter and its cause"
                - "Choose one change to the communication plan"
                - "Send your manager a half-page note on the results"
            - name: Plan change notices within two working days
              description: |-
                ## Purpose
                Bad news about a slipped date or a cut feature gets worse the longer it waits, and the worst version is a stakeholder hearing it from a customer. A standing rule and a short template for change notices, sent to affected teams within two working days of a decision, makes late news survivable.

                ## Milestones
                1. A change notice template: what changed, why, who is affected, what to tell customers, what happens next.
                2. The two-working-day rule agreed with your manager.
                3. The audiences that must hear each type of change written down.
                4. Every plan change in the next quarter announced within the rule.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every plan change in a quarter announced to affected teams within two working days using the five-part template."
                cadence: rolling
              tasks:
                - "Write the five-part change notice template"
                - "List which audiences must hear each type of plan change"
                - "Send a change notice for the most recent unannounced change"
                - "Check new decision log entries for any missing change notice"
            - name: Sales and support product FAQ
              description: |-
                ## Purpose
                Customer-facing staff need answers they can repeat word for word: is this coming, when, what is the workaround, what do we say about the competitor's version. A living FAQ written for sales and support, refreshed monthly from real questions in their channels, stops the same questions reaching product a dozen times a week.

                ## Milestones
                1. The twenty questions most often asked of product collected from chat and email.
                2. Each answered in two or three sentences using the confidence labels.
                3. The FAQ linked in the sales and support channels and in onboarding material.
                4. Stale answers removed or updated every month.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An FAQ of at least twenty customer-safe answers, linked in sales and support onboarding, with no answer older than one month unchecked."
                cadence: rolling
              tasks:
                - "Collect the twenty most frequent product questions from sales and support chat"
                - "Answer each in customer-safe language using the confidence labels"
                - "Link the FAQ in sales and support onboarding material"
                - "Refresh FAQ answers from the month's new questions @recurring(monthly:24)"
            - name: Saying no to senior stakeholders
              description: |-
                ## Purpose
                Refusing a vice president's request without damaging the relationship is a skill, not a personality trait. Practising a simple pattern, acknowledge the problem, show what it would displace, offer an alternative or a date to revisit, makes the next no quicker and less personal.

                ## Milestones
                1. A three-step pattern for declining written in your own words.
                2. The pattern rehearsed with a peer on two real past requests.
                3. The pattern used on at least three live requests.
                4. A note kept of how each stakeholder responded and what you would change.

                ## Notes
                A no that shows what would be displaced is easier to accept than a no that cites capacity.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The three-step declining pattern used on at least three live requests, with each stakeholder's response noted."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write your own three-step pattern for declining a request"
                - "Rehearse declining two past requests with a peer"
                - "Use the pattern on the next three requests you cannot take"
                - "Note how each stakeholder responded and what you would change"
            - name: Writing a one-page trade-off memo
              description: |-
                ## Purpose
                Most stakeholder arguments about product priorities stay vague because the options are never laid side by side. Learning to write a one-page memo that states the decision, two or three options, what each costs and gains, and your recommendation, turns a meeting of opinions into a choice.

                ## Milestones
                1. Two strong decision memos from inside or outside your company studied.
                2. A memo structure written: decision, options, costs, gains, recommendation, what you need.
                3. A memo written for a live trade-off and sent before the meeting that decides it.
                4. Feedback from one reader used to tighten the next memo.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A one-page trade-off memo sent ahead of a live decision meeting, and a revised template reflecting one reader's feedback."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find two well-written decision memos to study"
                - "Write a one-page memo template with options, costs and recommendation"
                - "Draft a memo for the next live trade-off you face"
                - "Ask one reader what was unclear and revise the template"
            - name: Disagree and commit conversations
              description: |-
                ## Purpose
                Consensus on every product decision is impossible once five teams are involved, and waiting for it stalls the work. Learning to run a conversation where dissent is heard in full, the decider decides and everyone commits to the outcome lets teams disagree openly without relitigating later.

                ## Milestones
                1. The disagree and commit principle explained to your team in your own words.
                2. A meeting run where dissenting views were recorded before the decision.
                3. The dissent and the decision both written in the decision log.
                4. A follow-up date set to check whether the dissenters' concerns came true.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One contested decision logged with the dissenting views recorded alongside it and a dated follow-up check."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read one account of disagree and commit written by a product leader"
                - "Ask each dissenter at the next contested meeting to state their concern in one sentence"
                - "Record dissent alongside the decision in the log"
                - "Set a date to revisit whether the concerns materialised"
            - name: Five-minute executive briefings
              description: |-
                ## Purpose
                Senior leaders give product updates a few minutes between other meetings, and an update that builds up to its point usually loses them before it gets there. Practising the bottom-line-first briefing, with the decision or ask in the first sentence, then the reason, then the risk, makes executive time count.

                ## Milestones
                1. Three past executive updates rewritten with the ask in the first sentence.
                2. A five-minute briefing rehearsed aloud and timed.
                3. The format used in two live leadership conversations.
                4. One executive asked what they needed that was missing.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two live executive briefings delivered in the bottom-line-first format within five minutes, with one executive's feedback recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Rewrite your last executive update with the ask in the first line"
                - "Time yourself giving a five-minute briefing aloud"
                - "Use the bottom-line-first format in the next leadership review"
                - "Ask one executive what was missing from your briefing"
            - name: Translating product changes for sales teams
              description: |-
                ## Purpose
                Feature names and technical detail mean little to a salesperson preparing for a call tomorrow. Learning to restate each change as the customer problem it solves, the kind of customer it matters to, the objection it answers and a one-line pitch makes product news usable in the field.

                ## Milestones
                1. A four-part format: problem, who it matters to, objection answered, one-line pitch.
                2. The format applied to the last five significant changes.
                3. Two salespeople asked to test the wording on real calls.
                4. A sales-ready section added to the monthly product update.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five recent product changes rewritten in the four-part sales format, tested on real calls by two salespeople."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write the four-part sales translation format"
                - "Apply it to the last five significant product changes"
                - "Ask two salespeople to try the wording on real calls"
                - "Add a sales-ready section to the monthly product update"
            - name: Interest-based negotiation on scope and dates
              description: |-
                ## Purpose
                Positions such as 'we need it by March' hide interests such as 'our largest customer renews in April'. Learning interest-based negotiation, asking why, separating the person from the problem and inventing options together, often finds a smaller scope or a phased date that satisfies both sides.

                ## Milestones
                1. The core ideas of interest-based negotiation summarised on one page.
                2. A past scope or date argument rewritten as the interests on each side.
                3. Two live negotiations prepared with each side's interests and at least three options.
                4. One agreement reached that neither side's opening position contained.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two scope or date negotiations prepared with interests and three options each, and one resulting agreement recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read a short summary of interest-based negotiation"
                - "Rewrite one past scope argument as the interests on each side"
                - "Prepare three options before your next scope or date negotiation"
                - "Record the agreement reached and how it differed from opening positions"
            - name: Staying calm in escalations and tense meetings
              description: |-
                ## Purpose
                Heated meetings, where a sales leader with a lost deal or an executive with an angry customer wants an answer now, are where alignment is won or lost. Practising a few techniques, naming the concern back, separating facts from the decision and agreeing a time to come back rather than deciding under pressure, protects both the relationship and the product.

                ## Milestones
                1. Three phrases prepared for slowing down a tense conversation.
                2. One recent difficult meeting reviewed for what you would do differently.
                3. A personal rule set for when you will defer a decision to a follow-up.
                4. The approach used in a real escalation, with a short note afterwards.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written deferral rule and three prepared phrases, used in at least one real escalation with a note on how it went."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write three phrases for slowing down a tense conversation"
                - "Review one recent difficult meeting and note what you would change"
                - "Set your rule for deferring decisions demanded under pressure"
                - "Write a short note after your next escalation on how it went"
            - name: Influence without authority reading list
              description: |-
                ## Purpose
                Product managers rarely manage the people whose cooperation they need, so influence is the main tool they have. Working through a short, chosen list of books and essays on influence, persuasion and organisational politics, taking one practical idea from each, builds a toolkit that lasts beyond one company.

                ## Milestones
                1. A list of four to six books or essays chosen.
                2. One practical idea written down from each.
                3. Each idea tried at least once at work.
                4. The list and your notes shared with a peer.

                ## Notes
                Start from the **Reading queue** template.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four to six titles finished, each with one practical idea noted and tried once at work."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose four to six titles on influence and organisational politics"
                - "Add them to a reading queue in priority order"
                - "Write one practical idea from each title you finish"
                - "Try each idea once at work and note the result"
            - name: Rule for deal-driven feature requests
              description: |-
                ## Purpose
                Large deals that hinge on one missing feature put enormous pressure on the plan, and without a rule each one is fought from scratch. Agreeing in advance the threshold for considering a deal-driven request, such as deal size, strategic fit and how many other customers want it, makes the answer predictable for sales and defensible for product.

                ## Milestones
                1. The last ten deal-driven requests reviewed for outcome and cost.
                2. Criteria agreed with sales and leadership: deal value, fit, repeat demand and effort.
                3. A fast review route for qualifying requests with a response time.
                4. The rule published to the sales team with two worked examples.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A published deal-driven request rule with agreed criteria, a response time and two worked examples, endorsed by the head of sales."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull the last ten deal-driven requests and what happened to each"
                - "Draft criteria for deal value, strategic fit and repeat demand"
                - "Agree the criteria with the head of sales and your manager"
                - "Publish the rule with two worked examples"
            - name: Replacing a status meeting with written updates
              description: |-
                ## Purpose
                Status meetings where twelve people listen to each other read out progress cost a working day of attention every week. Replacing one of them with a short written update and a smaller decision meeting returns that time and leaves a record people can search.

                ## Milestones
                1. Each recurring status meeting you run or attend listed with attendees and hours spent.
                2. One meeting chosen to replace with a written update and a shorter decision slot.
                3. The replacement run for four weeks.
                4. Attendees asked whether they are better or worse informed, with the answer recorded.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One status meeting replaced by a written update for four weeks, with attendee feedback recorded and a keep or revert decision made."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every recurring status meeting with attendees and total hours"
                - "Pick one meeting to replace with a written update"
                - "Run the written update instead for four weeks"
                - "Ask attendees whether they feel better or worse informed"
            - name: Escalation path for product disagreements
              description: |-
                ## Purpose
                Disagreements between product and another team that cannot be settled at working level need a route that is quick, fair and not personal. A written escalation path, saying who raises it, to whom, with what one-page summary and how fast a decision comes back, keeps disputes from simmering or jumping straight to the chief executive.

                ## Milestones
                1. Escalation levels named, from team leads to department heads to an executive sponsor.
                2. A one-page summary format agreed: issue, options, each side's view, cost of delay.
                3. A response time agreed for each level.
                4. The path published alongside the decision rights agreement.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A published escalation path with named levels, a one-page summary format and a response time for each level."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Name the escalation levels above product and partner team leads"
                - "Draft the one-page escalation summary format"
                - "Agree response times for each level with your manager"
                - "Publish the path next to the decision rights agreement"
            - name: Repairing a strained relationship with a partner team
              description: |-
                ## Purpose
                Sometimes a whole team, often support or a regional sales group, has stopped trusting product after a run of missed dates or ignored requests. Repairing it takes an honest account of what went wrong, a few promises kept visibly and some months of consistency, not a single apology meeting.

                ## Milestones
                1. The history of the strain written down from the other team's point of view.
                2. A conversation held with the team's lead to agree what would rebuild trust.
                3. Two or three small commitments chosen and delivered on time.
                4. A check after three months on whether the relationship has improved.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Two or three agreed commitments to the partner team delivered on time, and a three-month check-in held with its lead."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write the history of the strain as the other team would tell it"
                - "Meet the team's lead to ask what would rebuild trust"
                - "Choose two small commitments you can deliver within a month"
                - "Check in with the lead three months later on progress"
            - name: Choosing one home for product updates
              description: |-
                ## Purpose
                Updates scattered across email, three chat channels, a wiki and slide decks mean nobody knows which is current. Choosing one place where every product update, decision and FAQ lives, and pointing every other channel at it, makes the latest answer findable in one click.

                ## Milestones
                1. Every place product news currently appears listed.
                2. Two or three candidate homes compared on reach, searchability and effort to maintain.
                3. One home chosen and agreed with your manager.
                4. Other channels changed to post a short summary with a link to the home.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One agreed home for product updates, with every other channel posting a summary and a link to it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every place product news is currently posted"
                - "Compare two or three candidate homes on reach and searchability"
                - "Agree the chosen home with your manager"
                - "Change other channels to post a summary and a link"
            - name: Trimming product meetings and distribution lists
              description: |-
                ## Purpose
                Over time, product meetings and mailing lists collect people who no longer need them, and the people who do need them tune out. Pruning attendee lists, merging overlapping meetings and making detailed lists opt-in keeps the important messages from drowning.

                ## Milestones
                1. Every recurring product meeting and distribution list audited for size and purpose.
                2. Overlapping meetings merged or cancelled.
                3. Attendees without a role in a meeting moved to its written summary instead.
                4. Total weekly meeting hours for stakeholders measured before and after.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Weekly stakeholder meeting hours measured before and after the audit, with at least one overlapping meeting merged or cancelled."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Export the attendee lists of every recurring product meeting"
                - "Merge or cancel meetings that cover the same ground"
                - "Move non-essential attendees to the written summary"
                - "Audit product meeting attendees and mailing lists @recurring(quarterly)"
            - name: Shared metrics view for product and commercial teams
              description: |-
                ## Purpose
                Alignment is easier when product, sales and success look at the same five numbers each month instead of defending their own dashboards. A shared view of adoption, retention, win rate on product-related deals and top support drivers, with agreed definitions, turns trade-off discussions toward evidence.

                ## Milestones
                1. Five shared metrics agreed with sales and success leaders, each with a written definition.
                2. A single page showing all five, updated monthly.
                3. The page used as the opening item in the leadership product review.
                4. One disputed definition resolved and recorded.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared page of five defined metrics, updated monthly for three months and opening each leadership product review."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Propose five shared metrics to the sales and success leads"
                - "Write an agreed definition for each metric"
                - "Update the shared metrics page @recurring(monthly:16)"
                - "Open the leadership review with the shared metrics page"
            - name: Product section of the quarterly business review
              description: |-
                ## Purpose
                Quarterly business reviews are where leadership compares every department's results, and a product section that only lists features shipped invites the question of what it was all for. Preparing a section that links outcomes to company goals, admits misses and asks for the trade-offs needed next quarter earns credibility in the room.

                ## Milestones
                1. Outcomes for the quarter gathered against the goals set at its start.
                2. Misses stated plainly with causes and what changes.
                3. Two or three decisions or trade-offs needed from leadership written as clear asks.
                4. The section rehearsed and sent as a pre-read before the review.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A product section presented at the quarterly business review covering outcomes, misses and two or three explicit asks, sent as a pre-read."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Gather the quarter's outcomes against the goals set at its start"
                - "Write the misses plainly with their causes"
                - "Draft two or three clear asks for leadership"
                - "Block preparation time two weeks before each quarterly review @recurring(quarterly)"
            - name: Annual planning alignment workshop
              description: |-
                ## Purpose
                Annual plans written separately by product, sales and marketing collide in the first month of the year. A half-day workshop with department heads before plans are finalised, to compare goals, surface conflicts and agree the few product bets everyone will support, saves months of quiet disagreement.

                ## Milestones
                1. Each department's draft goals collected a week before the workshop.
                2. Conflicts between goals listed in advance as discussion items.
                3. The workshop held with every department head or a delegate present.
                4. Agreed product bets and open conflicts circulated within two days.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A half-day workshop held with every department represented, and agreed bets and open conflicts circulated within two days."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Ask each department head for draft goals a week before the workshop"
                - "List the conflicts between draft goals as agenda items"
                - "Run the half-day planning alignment workshop"
                - "Circulate agreed bets and open conflicts within two days"
            - name: Product session at the sales kickoff
              description: |-
                ## Purpose
                Kickoffs are the one time a year most of the sales team listens to product at once, and a feature parade wastes it. A session built around what customers will be able to do this year, what is not coming and how to handle the top objections gives sales something to use from the first call.

                ## Milestones
                1. The session's three messages agreed with sales leadership.
                2. Content covering what is coming, what is not, and the top objections with answers.
                3. A dry run with two account executives, with their feedback applied.
                4. Slides and a one-page summary shared with the sales team afterwards.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A kickoff session delivered after a dry run with two account executives, with slides and a one-page summary shared afterwards."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Agree three key messages for the session with the head of sales"
                - "Draft answers to the top five objections heard on calls"
                - "Run the session past two account executives in a dry run"
                - "Share the slides and a one-page summary afterwards"
            - name: Announcing a cut to a committed feature
              description: |-
                ## Purpose
                Cutting or delaying something sales has already mentioned to customers is the hardest alignment moment in product. Preparing the announcement properly, telling the most affected stakeholders in person first and giving the reasons, the customer message and the alternatives, limits the damage and keeps your credibility for the next decision.

                ## Milestones
                1. The decision and its reasons written in a one-page note.
                2. Affected customers and their account owners identified from the commitments tracker.
                3. Key stakeholders told individually before any wider announcement.
                4. A customer-safe message and alternatives given to account owners on the day of the announcement.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every key stakeholder told individually before the announcement, and every affected account owner given a customer message the same day."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the one-page note on what is cut and why"
                - "Find affected customers and account owners in the commitments tracker"
                - "Tell each key stakeholder individually before the wide announcement"
                - "Ask the agent to draft a customer-safe message from the one-page note"
                - "Give account owners the customer message and alternatives"
            - name: Product demo and Q&A at the company all-hands
              description: |-
                ## Purpose
                Demos at an all-hands show the whole company what product has been building, and an open question slot shows that product is willing to be challenged. Preparing a ten-minute demo of real customer workflows, with honest answers to the questions people actually ask, is one of the cheapest ways to build company-wide alignment.

                ## Milestones
                1. A ten-minute slot booked at the next all-hands.
                2. A demo of two or three real workflows, recorded as a backup.
                3. Likely hard questions collected in advance and answers prepared.
                4. Unanswered questions followed up in writing within a week.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A ten-minute demo and Q&A delivered at an all-hands, with every unanswered question followed up in writing within a week."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the all-hands organiser for a ten-minute product slot"
                - "Pick two or three real customer workflows to demo"
                - "Record a backup video of the demo"
                - "Answer leftover questions in writing within a week"
            - name: Executive steering committee product update
              description: |-
                ## Purpose
                Steering committees in larger organisations, where several executives oversee a major product programme, expect a disciplined update: status against plan, risks, decisions needed and what changed since last time. A tidy, repeatable pack keeps the committee focused on the decisions only it can make.

                ## Milestones
                1. A standard pack: status, changes since last meeting, risks, decisions needed.
                2. Risks shown with owner, likelihood, impact and mitigation.
                3. The pack sent three working days ahead of each meeting.
                4. Decisions and actions minuted and circulated within a day.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A steering pack sent three working days before the meeting, and minuted decisions and actions circulated within a day of it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Get the committee's terms of reference and meeting dates"
                - "Build the four-section steering pack"
                - "Send the pack three working days ahead"
                - "Circulate minuted decisions and actions within a day"
            - name: First sixty days aligning stakeholders in a new product role
              description: |-
                ## Purpose
                Joining a product team means inheriting relationships, promises and grudges you did not create. A sixty-day plan that meets every key stakeholder in the first fortnight, maps inherited commitments by day thirty and delivers one small visible win by day sixty gives you standing before your first hard decision.

                ## Milestones
                1. Every key stakeholder met within the first two weeks.
                2. Inherited commitments and open disputes listed by day thirty.
                3. One small, visible fix delivered for a partner team by day sixty.
                4. Your communication plan in place and announced.

                ## Notes
                Ask your predecessor or manager which stakeholder relationship most needs attention. There is usually one.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "All key stakeholders met within two weeks, inherited commitments listed by day thirty and one partner team fix delivered by day sixty."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask your manager which stakeholder relationship most needs attention"
                - "Book introductory meetings with every key stakeholder in the first fortnight"
                - "List inherited commitments and open disputes by day thirty"
                - "Deliver one small fix a partner team asked for by day sixty"
            - name: Realigning after a reorganisation or new executive
              description: |-
                ## Purpose
                Reorganisations and new executives reset who decides, who cares and what counts as success, often without anyone saying so. Re-mapping stakeholders, re-confirming decision rights and briefing the new leader on decisions already made avoids months of reopening settled questions.

                ## Milestones
                1. The stakeholder map redrawn for the new structure.
                2. Decision rights re-confirmed or changed with the new leadership.
                3. A briefing for the new executive covering current bets, decisions taken and open trade-offs.
                4. Commitments affected by the change reviewed with their owners.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A redrawn stakeholder map, decision rights re-confirmed with the new leadership and a written briefing delivered to the new executive."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Redraw the stakeholder map for the new structure"
                - "Ask the new leader how they want product decisions brought to them"
                - "Write a briefing on current bets, past decisions and open trade-offs"
                - "Review affected customer commitments with their owners"
            - name: Aligning account teams on a strategic customer's requests
              description: |-
                ## Purpose
                Strategic enterprise accounts often have several people talking to product at once: the account executive, a solutions engineer, a customer success manager and an executive sponsor, each with a slightly different list. One agreed view of that customer's requests, their status and what product has said keeps the account team consistent and stops the customer playing people against each other.

                ## Milestones
                1. Every request from the account collected from each member of the account team.
                2. Duplicates merged into one list with status and the product position on each.
                3. One named product contact agreed for the account.
                4. A review with the account team held before the next renewal conversation.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "One merged request list for the strategic account with a product position on each item, and a named product contact agreed with the account team."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Collect the customer's requests from each member of the account team"
                - "Ask the agent to merge the lists and flag duplicates"
                - "Agree one named product contact for the account"
                - "Hold a review with the account team before the next renewal meeting"
            - name: Stakeholder alignment across regions and time zones
              description: |-
                ## Purpose
                Global organisations add distance to every alignment problem: regional sales teams hear news a day late, meetings always fall in someone's evening, and local priorities rarely reach headquarters. Rotating meeting times, written updates with a question window and a named contact in each region keep distant teams as informed as the ones down the corridor.

                ## Milestones
                1. Each region's stakeholders and working hours listed.
                2. Meeting times rotated so no region always joins out of hours.
                3. Every live update also published in writing with a 48-hour question window.
                4. A contact named in each region to collect local priorities.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A rotation for recurring meeting times in place, a written version of every live update, and a named contact in each region."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List each region's stakeholders and working hours"
                - "Set a rotation for recurring meeting times"
                - "Publish a written version of every live update with a question window"
                - "Name a regional contact to gather local priorities"
            - name: Alignment habits across a team of product managers
              description: |-
                ## Purpose
                Managers of product managers find that alignment problems multiply when each PM runs updates their own way and sales receives five different formats. Setting shared expectations for stakeholder maps, update formats and change notices, and reviewing them in one-to-ones, makes the team predictable to the rest of the company.

                ## Milestones
                1. Shared standards written for stakeholder maps, updates and change notices.
                2. Each PM's stakeholder map reviewed in a one-to-one.
                3. One combined product update replacing separate PM updates where audiences overlap.
                4. Partner team leads asked whether product communication has become more consistent.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written team standards for stakeholder communication, with every PM's stakeholder map reviewed at least once."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write the team's shared standards for updates and change notices"
                - "Review each PM's stakeholder map in your next one-to-one"
                - "Combine overlapping PM updates into one product update"
                - "Review one PM's stakeholder communication in depth @recurring(monthly:27)"
            - name: Stakeholder updates during a major product outage
              description: |-
                ## Purpose
                Outages and serious defects pull every stakeholder in at once: sales wants a customer message, support needs a status line, leadership wants to know the business impact. A prepared product communication plan for incidents, separate from the engineering response, means the right people hear accurate news on a known rhythm.

                ## Milestones
                1. A list of who product must update during a serious incident, in order.
                2. Holding statements drafted for customer-facing teams to adapt.
                3. An update rhythm agreed with the incident lead, such as every hour until resolved.
                4. A post-incident note format for stakeholders covering cause, impact and prevention.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An incident stakeholder plan with an ordered update list, holding statements and an agreed update rhythm, stored where the incident lead can find it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List who product must update during a serious incident and in what order"
                - "Draft holding statements for sales and support to adapt"
                - "Agree the update rhythm with the engineering incident lead"
                - "Write the post-incident stakeholder note template"
            - name: Stakeholder surprise index
              description: |-
                ## Purpose
                Surprises are the clearest sign of misalignment: each time a stakeholder learns of a product change late, from a customer or a competitor, something in the system failed. Counting surprises monthly, with their cause, gives you a metric that is hard to game and shows which part of the communication plan to fix.

                ## Milestones
                1. A definition of a surprise agreed with your manager.
                2. A simple log with date, stakeholder, what they learned late, how and the cause.
                3. Three months of monthly counts recorded.
                4. The most common cause addressed with a specific change.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three months of monthly surprise counts with causes recorded, and one change made to address the most common cause."
                cadence: rolling
              tasks:
                - "Write a one-sentence definition of a stakeholder surprise"
                - "Set up the surprise log with date, stakeholder, cause and channel"
                - "Count the month's surprises and their causes @recurring(monthly:28)"
                - "Fix the most common cause with one change to the communication plan"
            - name: Cross-team dependency agreements
              description: |-
                ## Purpose
                Dependencies between product teams, or between product and platform, finance or legal, cause more broken promises than any single team's delays. Written dependency agreements that state what is needed, by when, from whom and what happens if it slips make the risk visible to every stakeholder before it lands.

                ## Milestones
                1. Every dependency for the next two quarters listed with the providing team.
                2. Each dependency agreed in writing with a date and a named owner on both sides.
                3. Slip consequences and fallback options noted for the riskiest five.
                4. Dependencies reviewed as a standing item in the leadership product review.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every dependency for the next two quarters agreed in writing with dates and owners, and fallbacks written for the five riskiest."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every dependency on other teams for the next two quarters"
                - "Agree a date and owner for each dependency in writing"
                - "Write a fallback for the five riskiest dependencies"
                - "Add the dependency list to the leadership review pre-read"
            - name: Product principles for settling trade-offs
              description: |-
                ## Purpose
                Principles agreed with leadership in advance, such as 'reliability before new features' or 'no custom builds for a single customer', settle many stakeholder disputes before they start, because the argument has already been had. Writing five to seven principles, testing them against past decisions and getting them endorsed gives every PM a shared reference in hard conversations.

                ## Milestones
                1. Five to seven draft principles, each with a one-line reason.
                2. The drafts tested against ten past contested decisions.
                3. The principles endorsed by the leadership team.
                4. The principles cited in at least three decision log entries within a quarter.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five to seven product principles endorsed by leadership and cited in at least three decision log entries within a quarter."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Draft five to seven principles from patterns in past contested decisions"
                - "Test each draft principle against ten past decisions"
                - "Ask the leadership team to endorse the final principles"
                - "Revisit the product principles with leadership @recurring(yearly)"
            - name: Annual stakeholder alignment retrospective
              description: |-
                ## Purpose
                Looking back across a full year shows patterns a quarter hides: the team that was surprised at every launch, the update nobody read, the escalation route nobody used. A yearly retrospective with your manager and key stakeholders, using the survey scores, surprise log and decision log, sets the alignment priorities for the year ahead.

                ## Milestones
                1. A year of survey scores, surprise counts and escalations pulled together.
                2. Three key stakeholders interviewed on what worked and what did not.
                3. Three changes for next year agreed with your manager.
                4. The communication plan and decision rights updated to match.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A yearly retrospective note drawing on survey, surprise and escalation data, with three agreed changes reflected in the communication plan."
                cadence: cyclic
              tasks:
                - "Pull together the year's survey scores, surprise log and escalations"
                - "Interview three key stakeholders on what worked and what did not"
                - "Agree three changes for the next year with your manager"
                - "Hold the stakeholder alignment retrospective @recurring(yearly)"
---

# Product Stakeholder Alignment

This area is for product managers, product leaders and anyone in a larger organisation who needs sales, support, success and leadership to understand product decisions before they hear about them from a customer. It starts with the foundations (a stakeholder map, decision rights, a listening tour, a decision log, a communication plan and a front door for requests), then the operating rhythms that keep everyone current, the skills of saying no, writing trade-off memos and negotiating scope, the improvements that cut noise and settle disputes faster, the events where alignment is won or lost, the situations of a new role, a reorganisation or a strategic account, and finally the measurement and principles work of an experienced product leader.

What repeats is a monthly company product update and leadership review, a weekly sales sync, request triage, commitments check and decision log entry, monthly support reviews, stakeholder one-to-ones, FAQ refreshes and shared metrics, a quarterly health check and stakeholder map refresh, and a yearly retrospective with a review of decision rights and principles. The Feedback themes, Person, Meeting notes, 1:1, Reading queue and Metrics log templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
