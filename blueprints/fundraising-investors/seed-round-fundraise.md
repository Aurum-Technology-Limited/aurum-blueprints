---
id: fundraising-investors.seed-round-fundraise
name: Seed Round Fundraise
description: "A seed round run as a process: readiness and amount, a one-page story, a live investor pipeline with follow-ups, lead and allocation decisions, and the steps from first meetings to close."
category: business
version: 1.0.0
tags: [fundraising-investors, seed-round-fundraise, founder, seed-round, startup-fundraising, venture-capital, investor-pipeline]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - feedback-themes
    - metrics-log
    - person
  pillars:
    - name: Fundraising & Investor Relations
      emoji: "💰"
      description: "Raising capital and keeping investors informed: rounds from pre-seed to growth, grants and debt, the data room, cap table, investor updates, board reporting and exits."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Seed Round Fundraise
          description: "Running a seed round end to end: story, targets, meetings, follow-ups and closing, for founders with early traction."
          projects:
            - name: Seed readiness check against your traction
              description: |-
                ## Purpose
                Seed investors back early evidence, not ideas, and the bar moves with the market: some want paying customers, others strong usage or a waitlist that converts. Before booking a single meeting, setting your numbers beside what recently funded companies in your sector showed at seed tells you whether to raise now or spend another quarter building proof.

                ## Milestones
                1. Five companies in your sector that raised a seed in the last 18 months listed with what they had shown at the time.
                2. Your own revenue, usage, retention and growth figures written on one page with their dates.
                3. Gaps between your evidence and the comparison set named in plain words.
                4. A raise-now or build-first decision recorded with the one metric that would change it.

                ## Notes
                Ask two founders who closed a seed recently what investors pushed on hardest. Their answer is more current than any article.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated raise-now or build-first decision, backed by a one-page comparison with at least five recent seed rounds in your sector."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List five recently funded seed companies in your sector"
                - "Write your current revenue, usage and retention figures on one page"
                - "Ask two founders who raised a seed this year what investors probed"
                - "Record the decision to raise now or build for another quarter"
            - name: Seed amount and runway decision
              description: |-
                ## Purpose
                The amount you ask for is a statement of plan, and a number picked because it sounds right falls apart at the first question about use of funds. Working back from the hires, burn and months needed to reach Series A milestones, with a buffer for a slow next raise, gives an ask you can defend and a minimum you could close on.

                ## Milestones
                1. A month-by-month burn estimate for the next 24 months, with hires on their start dates.
                2. The months of runway the round must buy, including a buffer for the next raise taking longer than planned.
                3. A target amount and a minimum viable amount, each tied to a specific plan.
                4. The ask and its use of funds written in three sentences for the memo and the deck.

                ## Notes
                The detailed projections belong in your financial model. This project produces the decision and the three sentences you say out loud.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A target and a minimum raise amount, each linked to a written runway plan, agreed by all founders before outreach starts."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write down every hire planned for the next two years with a start month"
                - "Estimate monthly burn from the hiring plan and current costs"
                - "Agree a target amount and a minimum you would close on"
                - "Draft the three-sentence use of funds with your co-founder"
            - name: Milestones the seed money must reach
              description: |-
                ## Purpose
                Every seed investor is privately asking what the company will look like when it needs a Series A, and whether that picture will be fundable. Writing down the three or four milestones this money must buy, such as a revenue run rate, a retention level or a shipped product, gives the story its spine and gives you a scoreboard once the money lands.

                ## Milestones
                1. Three or four Series A milestones written as numbers with target dates.
                2. Each milestone checked against what Series A investors in your sector currently expect.
                3. The milestones linked to the hires and spend in the raise plan.
                4. A monthly check of progress against the milestones in the calendar.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page list of three or four dated, numeric milestones the seed must fund, checked with at least one Series A investor or recent founder."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft three or four milestones the company must hit before a Series A"
                - "Ask one Series A investor or founder whether those milestones are fundable"
                - "Link each milestone to the hires and spend that produce it"
                - "Check progress against the Series A milestones @recurring(monthly:20)"
            - name: Priced seed or SAFE round decision
              description: |-
                ## Purpose
                Many seeds now close on SAFEs or convertible notes, while others are priced rounds with a lead, board changes and fuller legal documents. The choice changes legal cost, timing, who leads and how much control changes hands, so it is worth deciding with your lawyer before the first meeting rather than letting the first investor decide for you.

                ## Milestones
                1. The main differences between a priced seed and a SAFE or note round summarised on one page.
                2. Your lawyer's view on cost, timeline and fit for your company recorded.
                3. Investor preferences in your market noted from two or three conversations.
                4. A default structure chosen, with the conditions under which you would switch.

                ## Notes
                Your lawyer gives the legal view; this project records the decision and the reasons. Caps, discounts and the paperwork itself are handled separately once the structure is settled.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written default structure for the seed, priced or SAFE, with your lawyer's advice noted and the switch conditions listed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Summarise how a priced seed and a SAFE round differ for your company"
                - "Ask your lawyer for the cost and timeline of each structure"
                - "Ask two seed investors which structure they usually back"
                - "Record the default structure and when you would switch"
            - name: Startup lawyer engaged for the seed
              description: |-
                ## Purpose
                A general practice lawyer who rarely sees venture deals will be slower, dearer and easier to outmanoeuvre than one who closes seed rounds every month. Choosing a startup specialist early, with a fixed or capped fee agreed, means term sheets get read in days and nothing in the company's paperwork surprises an investor's counsel.

                ## Milestones
                1. Three lawyers or firms that regularly close seed rounds shortlisted from founder recommendations.
                2. Fee quotes received, including any fixed or capped fee for the round.
                3. One firm engaged with a signed engagement letter.
                4. The lawyer briefed on the planned structure, amount and timeline.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A startup lawyer engaged under a signed engagement letter, with a written fee quote for the seed round on file."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask three recently funded founders which lawyer closed their seed"
                - "Request a fee quote for the round from three firms"
                - "Sign the engagement letter with your chosen firm"
                - "Brief the lawyer on amount, structure and target close date"
            - name: One-page seed story memo
              description: |-
                ## Purpose
                Before slides, the raise needs a story you can tell in ninety seconds: the problem, the insight others missed, the evidence it is working, why now and what the money buys. Writing it as a one-page memo forces the hard choices about what to leave out, and the same page becomes the forwardable email investors pass to their partners.

                ## Milestones
                1. A one-page memo covering problem, insight, traction, why now, team and the ask.
                2. The memo read cold by three people outside the company, each able to repeat the core idea.
                3. A forwardable version under 200 words ready to paste into an introduction email.
                4. The memo and the deck telling the same story in the same order.

                ## Notes
                If a reader cannot say what the company does after one read, cut rather than add. The first sentence carries most of the weight.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page seed memo and a 200-word forwardable blurb, each tested on three outside readers who could repeat the core idea."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the company's problem and insight in two sentences"
                - "Ask the agent to draft a one-page memo from your notes and latest numbers"
                - "Have three outsiders read the memo and repeat the core idea back"
                - "Cut a 200-word forwardable version for introductions"
                - "Revise the memo with the latest numbers @recurring(monthly:12)"
            - name: Founder and IP paperwork clean-up before the raise
              description: |-
                ## Purpose
                Seed investors' lawyers will check that the company owns its code and brand, that founders have vesting in place and that every past promise of equity is written down. Fixing a missing IP assignment or an undocumented adviser grant before the raise is a small job; finding it in diligence can stall a close for weeks.

                ## Milestones
                1. A signed IP assignment from every founder, employee and contractor who wrote code or designs.
                2. Founder vesting terms documented and signed.
                3. Every verbal promise of shares or options to advisers listed and either papered or withdrawn.
                4. Incorporation, share issue and board records found and filed in one folder.

                ## Notes
                Your lawyer decides what each fix needs. Former contractors are the usual gap; contact them early because they can be slow to sign.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Signed IP assignments from every contributor, documented founder vesting and a written list of all equity promises, reviewed by your lawyer."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List everyone who has written code, designs or content for the company"
                - "Check which of them have signed an IP assignment"
                - "Write down every promise of equity made to advisers or early hires"
                - "Send the gap list to your lawyer for a fix plan"
            - name: Raise roles split between co-founders
              description: |-
                ## Purpose
                Fundraising takes most of one founder's time for two to four months, and companies stall when both founders chase investors and nobody runs the product. Agreeing who leads the raise, who keeps the company moving and which meetings need both of you protects the traction the pitch depends on.

                ## Milestones
                1. One founder named as raise lead, owning the pipeline and every follow-up.
                2. The other founder's operating priorities for the raise period written down.
                3. A rule for which investor meetings need both founders.
                4. The team told how the raise affects founder availability.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written split naming the raise lead, the operating lead and the meetings that need both founders, shared with the team."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Agree which founder leads the raise and owns follow-ups"
                - "List the operating priorities the other founder will own"
                - "Decide which meetings need both founders in the room"
                - "Tell the team how founder time will change during the raise"
            - name: Ten-week seed process calendar
              description: |-
                ## Purpose
                Raises that drift on for six months lose momentum and signal weak demand, while a compressed process lets interest build and decisions arrive close together. A calendar with a preparation phase, a two-week first-meeting batch, follow-up weeks and a target close date turns the raise into a project with a finish line.

                ## Milestones
                1. Preparation, outreach, first meetings, follow-up and close phases set on dates.
                2. Holiday periods and major sector conferences checked against the calendar.
                3. A target date for a lead commitment and a target close date.
                4. The calendar shared with your co-founder, lawyer and closest investors.

                ## Notes
                Avoid launching into the weeks when investors in your market take long holidays. Ten weeks is a target, not a promise.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated process calendar with five phases, a lead-commitment target and a close target, shared with your co-founder and lawyer."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set dates for preparation, outreach, meetings, follow-up and close"
                - "Check the calendar against holidays and sector conferences"
                - "Pick target dates for a lead commitment and the close"
                - "Share the calendar with your co-founder and lawyer"
            - name: Seed investor pipeline tracker
              description: |-
                ## Purpose
                Fifty or more investor conversations cannot live in an inbox and memory. A tracker with one row per investor, a stage, the last contact, the next step and a date makes it obvious who is going cold, who needs a reply today and how close the round really is.

                ## Milestones
                1. A tracker with stages from contacted to committed, plus passed.
                2. Every investor contacted so far entered with a next step and date.
                3. Each row updated within a day of any contact.
                4. A weekly count by stage used in the fundraising stand-up.

                ## Notes
                A spreadsheet works. A dedicated CRM is only worth it if you will update it every day.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every investor in the raise has a tracker row with a stage, next step and date, updated weekly for the whole process."
                cadence: rolling
              tasks:
                - "Create a tracker with stage, last contact, next step and owner columns"
                - "Enter every investor you have spoken to so far"
                - "Update every investor's stage and next step @recurring(weekly:fri)"
            - name: Weekly fundraising stand-up
              description: |-
                ## Purpose
                Half an hour once a week keeps both founders honest about the raise: what moved, what stalled, who needs chasing and whether the plan still holds. Without it, follow-ups slip and the raise lead carries the whole picture alone.

                ## Milestones
                1. A fixed 30-minute slot each week with a standing agenda.
                2. Stage counts, hot investors and stalled conversations reviewed each time.
                3. Three or fewer actions agreed, each with an owner.
                4. The stand-up held every week from launch to close.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The stand-up held every week from the first outreach to close, each with no more than three owned actions recorded."
                cadence: rolling
              tasks:
                - "Write a standing agenda: moved, stalled, chase, decisions"
                - "Run the 30-minute fundraising stand-up @recurring(weekly:mon)"
                - "Record up to three actions with owners after each stand-up"
            - name: Follow-up within one working day of each meeting
              description: |-
                ## Purpose
                Investors meet dozens of founders a week, and the ones who send a crisp follow-up the same day, with the promised data and a clear next step, come across as operators. A fixed routine after every meeting, notes then follow-up then tracker update, stops promises being forgotten.

                ## Milestones
                1. A follow-up email format with thanks, answers to open questions, attachments and a proposed next step.
                2. Notes written within an hour of every meeting.
                3. Every follow-up sent within one working day.
                4. Each open promise tracked until delivered.

                ## Notes
                Start from the **Meeting notes** template. One page per investor conversation is enough.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every investor meeting during the raise has notes and a follow-up email sent within one working day, logged in the tracker."
                cadence: rolling
              tasks:
                - "Write a follow-up email format with a proposed next step"
                - "Create a notes page for each investor meeting from the template"
                - "Clear any follow-up older than one working day @recurring(daily)"
                - "Log each promised document until it is sent"
            - name: Weekly progress note to investors in diligence
              description: |-
                ## Purpose
                Once a fund is looking closely, silence reads as bad news, and a small piece of progress can tip a partner vote. A short weekly note to the handful of investors in diligence, with one metric, one win and one answer they asked for, keeps you in their thinking without pestering.

                ## Milestones
                1. A note format of under 150 words: one metric, one win, one answer.
                2. A list of investors currently in diligence or partner stages.
                3. A note sent every week to that list until each one decides.
                4. Replies logged in the tracker with any new questions.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A short progress note sent every week to each investor in diligence until they commit or pass."
                cadence: rolling
              tasks:
                - "Draft a 150-word progress note format"
                - "List the investors who are in diligence this week"
                - "Send a short progress note to investors in diligence @recurring(weekly:thu)"
            - name: Pass reasons log and weekly pitch fixes
              description: |-
                ## Purpose
                Each no carries information if you ask why and write it down: too early, wrong sector, market size doubts, team gaps. Grouping pass reasons every week shows whether the problem is the story, the targeting or the evidence, and that tells you what to change before the next batch of meetings.

                ## Milestones
                1. Every pass recorded with the stated reason and your own guess at the real one.
                2. Reasons grouped into story, targeting, traction, team or timing.
                3. One change to the pitch, the list or the materials made each week in response.
                4. A pattern summary written after the first twenty passes.

                ## Notes
                Start from the **Feedback themes** template. Polite passes often hide the real reason; a short, gracious question about what would change their mind gets more honest answers.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every pass logged with a reason category, with at least one pitch or targeting change recorded each week of the raise."
                cadence: rolling
              tasks:
                - "Set up a pass log with reason categories"
                - "Ask each passing investor what would have changed their answer"
                - "Tag this week's passes by reason and choose one pitch fix @recurring(weekly:fri)"
                - "Write a pattern summary after twenty passes"
            - name: Committed versus target round board
              description: |-
                ## Purpose
                Founders often believe a round is half full when much of it is warm words. A board that separates verbal interest, written commitments and signed documents, against the target and the minimum, shows the true position and tells you when to push for signatures.

                ## Milestones
                1. Three columns in use: verbal, committed in writing and signed or funded.
                2. Totals compared with the target and minimum amounts.
                3. Every verbal commitment followed up for written confirmation within a week.
                4. The board shared with the lead investor once one is in place.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A round board showing verbal, written and signed amounts against target, reconciled weekly from launch to final close."
                cadence: rolling
              tasks:
                - "Build the board with verbal, written and signed columns"
                - "Ask every verbal commitment to confirm the amount by email"
                - "Reconcile committed amounts against signed documents @recurring(weekly:wed)"
            - name: Company metrics kept moving during the raise
              description: |-
                ## Purpose
                The cruellest fundraising outcome is a flat month in the middle of the raise, just as investors ask for the latest numbers. A weekly look at the three metrics the story depends on, run by the operating founder, catches a slide early and gives you fresh growth to report.

                ## Milestones
                1. Three metrics chosen that the seed story rests on.
                2. A weekly review slot owned by the operating founder.
                3. Any metric falling two weeks running given a named fix.
                4. Monthly figures ready to send investors within three days of month end.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The three core metrics reviewed every week of the raise, with month-end figures ready within three days."
                cadence: rolling
              tasks:
                - "Choose the three metrics the seed story depends on"
                - "Create a metrics log for them from the template"
                - "Review the three core metrics with the team @recurring(weekly:tue)"
                - "Name a fix for any metric that falls two weeks running"
            - name: Living investor question bank
              description: |-
                ## Purpose
                By the tenth meeting, the same twenty questions keep coming up: churn, pricing, why this team, what happens if a large company copies you. Keeping a bank of questions and your best current answers, updated after every week of meetings, makes each conversation sharper and helps a co-founder answer the same way.

                ## Milestones
                1. Every question from the first five meetings written down.
                2. A tested best answer written for each, with supporting numbers.
                3. New questions added after every week of meetings.
                4. Questions sorted by how often they come up.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A question bank holding every investor question asked during the raise, each with a current best answer."
                cadence: rolling
              tasks:
                - "List every question asked in your first five meetings"
                - "Write a best answer with numbers for each question"
                - "Add new questions from the week's meetings to the bank @recurring(weekly:sun)"
            - name: Meeting-day blocks in the founder calendar
              description: |-
                ## Purpose
                Scattering investor calls across every day of the week wrecks the raise lead's ability to do anything else. Clustering meetings into two or three set days, with buffer time, protects focused work and makes it easier to batch investors so that decisions arrive close together.

                ## Milestones
                1. Two or three meeting days chosen for the raise period.
                2. Booking links or a scheduling note limited to those days.
                3. Buffer time after each meeting for notes and follow-up.
                4. At least one day a week kept free of investor calls.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For the raise period, at least 80 percent of investor meetings fall on the chosen meeting days, with one day a week free of calls."
                cadence: rolling
              tasks:
                - "Choose two or three investor meeting days for the raise"
                - "Limit your booking link to those days"
                - "Block next week's meeting days and buffers in the calendar @recurring(weekly:thu)"
            - name: How seed funds make an investment decision
              description: |-
                ## Purpose
                One great first call starts the process rather than ending it: most funds move from a partner or associate call to a second meeting, a partner meeting and sometimes a committee vote. Knowing each fund's steps, who has the authority to say yes and how long it takes lets you time the process and avoid waiting on someone who cannot commit.

                ## Milestones
                1. The common decision steps at seed funds written down: first call, working session, partner meeting, decision.
                2. For each target fund, who can commit and how many steps they use recorded.
                3. Typical time from first call to decision noted per fund.
                4. A standard question about their process asked on every first call.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "For every fund in the active pipeline, the decision steps, decision maker and typical timeline are recorded in the tracker."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read two first-hand accounts of how seed funds run decisions"
                - "Ask each fund on the first call what their next steps are"
                - "Record who at each fund can commit and how long it takes"
                - "Note any fund that needs a full committee vote"
            - name: Investor types at seed and how each writes cheques
              description: |-
                ## Purpose
                Seed money comes from dedicated seed funds, multi-stage funds with seed programmes, angels, operator syndicates, scouts and sometimes corporate funds, and each behaves differently on leading, cheque size, speed and follow-on. Understanding the differences helps you build a round where someone leads, someone adds expertise and nobody's presence worries the next investor.

                ## Milestones
                1. Each investor type described in two lines: role, typical behaviour and what it needs from you.
                2. Your target list tagged by type.
                3. The mix you want in the round written down: lead, followers, angels.
                4. Two founders asked how their seed mix helped or hurt later.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note on each seed investor type, with the target list tagged by type and a chosen round mix recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write two lines on each type of seed investor"
                - "Tag every name on your list with its investor type"
                - "Decide the mix of lead, followers and angels you want"
                - "Ask two founders how their seed investor mix played out"
            - name: Reading investor signals in seed conversations
              description: |-
                ## Purpose
                Phrases like keep us posted, we would love to follow and come back when you have a lead sound positive but usually mean no for now. Learning to tell real interest from politeness, by what an investor asks for and how fast they move, saves weeks spent chasing people who were never going to lead.

                ## Milestones
                1. A list of common investor phrases with what they usually mean.
                2. Concrete signs of real interest written down: data requests, partner introductions, customer calls.
                3. Each active investor marked hot, warm or cold based on behaviour, not words.
                4. Time spent on cold investors cut back.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every investor in the tracker is rated hot, warm or cold from observed actions, reviewed after each batch of meetings."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write down the investor phrases you have heard so far"
                - "List the actions that show real interest"
                - "Rate each active investor hot, warm or cold by behaviour"
                - "Move cold investors to a light-touch update list"
            - name: Presenting early traction with retention and cohorts
              description: |-
                ## Purpose
                Top-line growth can hide customers leaving as fast as they arrive, and experienced seed investors go straight to retention. Learning to present cohorts, revenue retention or weekly active use honestly, with the definitions written down, makes your numbers credible and spares you awkward corrections in diligence.

                ## Milestones
                1. Definitions written for each metric you show, including what counts as active.
                2. A cohort chart built from raw data, not estimates.
                3. Weak cohorts explained in a sentence rather than hidden.
                4. The chart checked by someone who has reviewed startup metrics before.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A cohort or retention chart built from raw data with written metric definitions, checked by one experienced reviewer."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a definition for every metric you plan to show investors"
                - "Pull raw customer or user data for a cohort chart"
                - "Ask an experienced founder or investor to check the chart"
                - "Refresh the cohort chart with the latest month @recurring(monthly:3)"
            - name: Bottom-up market size for the seed story
              description: |-
                ## Purpose
                A big top-down number from a research report persuades nobody at seed. Building market size from the number of target customers, what they pay and how many you can reach shows you understand your buyer and gives investors a figure they can test in the meeting.

                ## Milestones
                1. Target customer count estimated from a named, checkable source.
                2. A realistic price per customer from your own pricing or pilots.
                3. Reachable market and total market shown separately.
                4. Assumptions listed so an investor can change any one of them.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A bottom-up market size with every assumption and source listed, small enough to fit on one slide."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Estimate how many target customers exist and cite the source"
                - "Set a price per customer from your pricing or pilots"
                - "Separate the reachable market from the total market"
                - "List each assumption so it can be changed in front of an investor"
            - name: First priced round valuation basics
              description: |-
                ## Purpose
                On a first priced seed, founders meet pre-money, post-money, an option pool top-up and fully diluted counts for real, and confusing them can cost several points of ownership. Learning the mechanics with your own numbers, and checking your understanding with your lawyer, means you can follow an offer the day it arrives.

                ## Milestones
                1. Pre-money, post-money, fully diluted and the option pool top-up explained in your own words.
                2. One worked example on your own cap table showing ownership after the round.
                3. Outstanding SAFEs or notes included in the example.
                4. Your lawyer or adviser confirming the worked example is right.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked example of your own post-round ownership, including outstanding SAFEs or notes, checked by your lawyer or adviser."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write definitions of pre-money, post-money and fully diluted"
                - "Work one example of ownership after the round on your cap table"
                - "Add any outstanding SAFEs or notes to the example"
                - "Ask your lawyer to check the worked example"
            - name: Competitive landscape you can explain in a minute
              description: |-
                ## Purpose
                Saying you have no competitors tells an investor you have not looked. A clear, honest map of incumbents, funded startups and the spreadsheet or manual workaround customers use today, with the reason customers pick you, answers the competition question before it becomes a doubt.

                ## Milestones
                1. Incumbents, funded startups and current workarounds listed.
                2. The two or three dimensions that matter to buyers chosen.
                3. Your position stated with customer evidence for why they switch.
                4. A one-minute spoken version practised until it sounds natural.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A competition map with customer evidence, and a one-minute explanation delivered without notes to a co-founder or adviser."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List incumbents, funded startups and the workaround customers use now"
                - "Pick the two or three buying criteria that matter most"
                - "Collect three customer quotes on why they chose you"
                - "Practise the one-minute competition explanation aloud"
            - name: Lead investor choice among seed offers
              description: |-
                ## Purpose
                When more than one fund wants to lead, the headline valuation is only one factor; the partner who works with you, the fund's reserves for follow-on and its behaviour when portfolio companies struggle matter for years. Scoring each offer on the same criteria, with your lawyer on terms and founders on behaviour, makes the choice deliberate.

                ## Milestones
                1. Every lead offer laid side by side on headline terms, with your lawyer's comments.
                2. The partner, follow-on reserves and support offered by each fund written down.
                3. Conversations with founders each fund has backed recorded.
                4. A decision made and the reasons recorded before replying to anyone.

                ## Notes
                Keep the detailed term negotiation with your lawyer. This project is about choosing the partner you will work with for years.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A lead investor chosen against written criteria covering terms, partner, reserves and founder references, with reasons recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the five criteria you will score every lead offer on"
                - "Ask your lawyer to comment on each offer's headline terms"
                - "Speak to two founders backed by each fund's partner"
                - "Record the decision and reasons before replying to any fund"
            - name: Single lead or party round decision
              description: |-
                ## Purpose
                A party round of many small cheques can close fast and keep control with founders, but nobody owns the company's next raise and nobody steps up in a crisis. Deciding early whether you want one lead with a large share or a group of smaller investors shapes your target list and your pitch.

                ## Milestones
                1. The trade-offs of a single lead and a party round listed for your company.
                2. Advice from two founders who raised each way recorded.
                3. A preferred structure chosen, with the minimum lead cheque you would want.
                4. Your target list reordered to match.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice between a single lead and a party round, with the minimum lead cheque size and a reordered target list."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the trade-offs of a single lead versus a party round"
                - "Ask a founder who raised a party round what they would change"
                - "Choose your preferred structure and minimum lead cheque"
                - "Reorder the target list to match the structure"
            - name: Multi-stage fund seed cheque and signalling risk
              description: |-
                ## Purpose
                Large multi-stage funds sometimes write small seed cheques as options on a company, and if they later decline to lead the Series A, other investors may read it as a bad sign. Weighing the brand and resources against that risk, and asking how the fund has behaved with past seed bets, helps you decide whether their money is worth it.

                ## Milestones
                1. Each multi-stage fund in the pipeline identified.
                2. Founders from their past seed investments asked how follow-on decisions went.
                3. The fund asked directly about its follow-on record from seed.
                4. A written decision on whether to accept and at what size.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on each multi-stage fund offer, based on at least two founder conversations about its seed follow-on behaviour."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Mark which funds in the pipeline are multi-stage"
                - "Ask two of their seed founders how follow-on decisions went"
                - "Ask the fund what share of its seed bets it backed at Series A"
                - "Record whether to accept their cheque and at what size"
            - name: Allocation plan for an oversubscribed seed
              description: |-
                ## Purpose
                Hot rounds create a different problem: more demand than space, and every allocation decision affects relationships. Deciding in advance how much goes to the lead, which angels earn a place for their expertise and how to decline gracefully keeps the round at the size you planned and the people you turn away friendly.

                ## Milestones
                1. The lead's allocation agreed first.
                2. A ranked list of remaining investors by value beyond money.
                3. A maximum round size you will not exceed, agreed with your co-founder and lead.
                4. A courteous note sent to every investor who did not get an allocation.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every allocation in an oversubscribed round recorded against a ranked list, the agreed maximum size held and every declined investor sent a note."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Agree the lead investor's allocation first"
                - "Rank remaining investors by expertise, network and follow-on capacity"
                - "Agree the maximum round size with your co-founder and lead"
                - "Send a courteous note to every investor without an allocation"
            - name: Mid-raise round size adjustment
              description: |-
                ## Purpose
                Six weeks in, the market has given its verdict: interest is stronger or weaker than planned. Deciding deliberately whether to raise more, close at the minimum or extend the process, using the round board and the runway plan, beats drifting until cash forces the choice.

                ## Milestones
                1. A checkpoint date for the size review set in the process calendar.
                2. Committed amounts and hot investors compared with the target.
                3. Runway at the minimum and at a larger amount recalculated.
                4. A decision to upsize, hold or close at the minimum recorded and shared with the lead.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A size decision recorded at the mid-raise checkpoint, with runway figures for each option and the lead informed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Set the size review checkpoint in the process calendar"
                - "Compare committed amounts and hot investors with the target"
                - "Recalculate runway at the minimum and at a larger raise"
                - "Tell the lead your decision on round size"
            - name: Operator angels picked for specific gaps
              description: |-
                ## Purpose
                Angels who have built in your market can open customer doors, help hire a first sales leader or spot a pricing mistake. Choosing three to five for named gaps, rather than taking every small cheque offered, adds real help to the seed without crowding the cap table.

                ## Milestones
                1. The company's three biggest gaps in experience or network named.
                2. Candidate angels mapped to each gap.
                3. Each candidate asked for a specific kind of help, not just money.
                4. Three to five angels confirmed, each with their agreed help written down.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Three to five angels confirmed in the seed, each linked to a named gap and an agreed form of help."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Name the three biggest gaps in the team's experience or network"
                - "Map possible angels to each gap"
                - "Ask each candidate what specific help they could give"
                - "Write down the help each confirmed angel agreed to give"
            - name: Stop rule for a stalled seed raise
              description: |-
                ## Purpose
                Raises that are not working tend to grind on, eating founder time and cash while the company stands still. Writing a stop rule before launch, such as no lead in sight after a set number of weeks and meetings, gives you permission to pause, build more proof and come back stronger with runway still in the bank.

                ## Milestones
                1. A stop rule written before launch, with week, meeting and runway thresholds.
                2. A plan B for a pause: cost cuts, milestones and a relaunch date.
                3. The rule checked at each monthly review.
                4. If triggered, investors told plainly that you will be back with more evidence.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written stop rule with thresholds and a plan B, checked every month of the raise against the tracker."
                cadence: rolling
              tasks:
                - "Write a stop rule with week, meeting and runway thresholds"
                - "Draft a plan B with cost cuts and a relaunch date"
                - "Check the pipeline against the stop rule @recurring(monthly:10)"
            - name: Pre-launch briefing with existing backers
              description: |-
                ## Purpose
                Your pre-seed angels and early backers are the first people new investors call, and their enthusiasm, or lack of it, carries weight. Briefing them a few weeks before launch on the plan, the amount and their likely follow-on, and asking each for two specific introductions, turns them into allies rather than surprised spectators.

                ## Milestones
                1. Every existing investor briefed on the raise plan before outreach starts.
                2. Each one's intention to take up their pro rata recorded.
                3. Two specific introductions requested from each backer.
                4. Talking points sent so they describe the company consistently.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every existing investor briefed before launch, with follow-on intentions recorded and two named introductions requested from each."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every existing investor and adviser to brief"
                - "Book a short call with each one before outreach starts"
                - "Ask each backer for two named introductions"
                - "Send three short talking points they can use when asked"
            - name: First batch of seed meetings week
              description: |-
                ## Purpose
                Launching with 15 to 25 first meetings packed into two weeks, rather than trickling them out, creates comparison and urgency, because funds sense that others are moving. Preparing the batch as an event, with materials ready, slots blocked and follow-ups planned, gives the raise its best opening.

                ## Milestones
                1. Fifteen to twenty-five first meetings booked inside a two-week window.
                2. Memo, deck and data ready to send before the first call.
                3. Notes and follow-ups completed for every meeting in the batch.
                4. A review after the batch that sorts investors into next step, maybe and pass.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "At least fifteen first meetings held within a two-week window, each with a follow-up sent within one working day."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Choose the two-week window for the first meetings batch"
                - "Send meeting requests to the first-batch investors on the same day"
                - "Confirm memo, deck and data are ready to send"
                - "Sort every investor after the batch into next step, maybe or pass"
            - name: Seed fund partner meeting preparation
              description: |-
                ## Purpose
                Getting to the full partner meeting means one partner already believes; the job now is to give them what they need to win over colleagues who have never met you. Asking your champion what the partnership will worry about, rehearsing the answers and bringing the latest numbers turns a nervous hour into a decision.

                ## Milestones
                1. The champion partner asked which concerns the partnership will raise.
                2. Answers to those concerns prepared with supporting data.
                3. Latest monthly figures added to the materials.
                4. A run-through held with an adviser playing a sceptical partner.
                5. A clear ask and decision timeline stated at the end of the meeting.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A partner meeting held with the champion's concerns answered in the materials and a decision date agreed before leaving."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask your champion which worries the partnership will raise"
                - "Prepare written answers with data for each worry"
                - "Run the meeting once with an adviser playing a sceptic"
                - "Agree the decision date before the meeting ends"
            - name: Funding announcement for the seed
              description: |-
                ## Purpose
                An announcement is a hiring and sales tool as much as news, and it needs the lead's approval and the money in the bank first. Planning the date, the story, a quote from the lead and where it will appear makes the round work for recruiting and customers rather than being a one-day post.

                ## Milestones
                1. The announcement held until the round is closed and funds received.
                2. Approval of the wording from the lead investor and your lawyer.
                3. A short story covering why now and what the money funds, with a quote from the lead.
                4. Channels planned: company blog, founder posts, sector press and the careers page.
                5. Open roles live on the day of the announcement.
              priority: low
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A seed announcement published after funds landed, approved by the lead, with open roles live on the same day."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Confirm with your lawyer when the round can be announced"
                - "Draft the announcement with a quote from the lead investor"
                - "Update the careers page so roles are live on the day"
                - "Ask the agent to draft founder social posts from the announcement"
            - name: First thirty days after the seed lands
              description: |-
                ## Purpose
                The weeks after the money arrives set the tone with new investors and the team. Sending thanks, starting the hiring plan the round was raised for, setting spending controls and sending the first update show investors their bet is being run properly.

                ## Milestones
                1. Personal thanks sent to every investor and everyone who made an introduction.
                2. Funds held in an account structure your accountant or finance lead approved.
                3. The first two hires from the raise plan opened.
                4. Spending approval limits written down for founders and managers.
                5. The first investor update sent within a month of close.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Within thirty days of close, thanks sent, the first two roles opened, spending limits written and the first investor update delivered."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Send personal thanks to every investor and introducer"
                - "Open the first two roles in the raise plan"
                - "Write spending approval limits for founders and managers"
                - "Send the first investor update within a month of close"
            - name: Seed round retrospective
              description: |-
                ## Purpose
                Within a month of closing, the lessons are still fresh: which sources produced meetings, which story changes worked, where time was wasted. A written retrospective with numbers becomes the starting playbook for the Series A and saves relearning the same things in two years.

                ## Milestones
                1. Pipeline numbers collected: contacts, meetings, partner meetings, offers and closes.
                2. The three best and three worst decisions of the raise written down.
                3. Story and materials changes listed with their effect.
                4. A short playbook for the next raise saved with the round documents.
              priority: low
              frontmatter:
                mode: event
                output_kind: knowledge
                success_criteria: "A written retrospective with pipeline numbers and a next-raise playbook, completed within a month of the final close."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pull the pipeline numbers from the tracker"
                - "Write the three best and three worst decisions of the raise"
                - "List the story changes and what each one did"
                - "Save a short playbook for the next round"
            - name: Solo founder running a seed round
              description: |-
                ## Purpose
                Solo founders face extra questions about key person risk and still have to run the company while raising. Preparing a credible answer, with senior hires planned, an advisory bench and a clear plan for who keeps things running, and using a peer or adviser as a sounding board, makes the raise survivable.

                ## Milestones
                1. A written answer to the key person question, with planned senior hires.
                2. An adviser or peer founder agreed as a weekly sounding board.
                3. Company tasks that pause, delegate or continue during the raise listed.
                4. Weekly meeting load capped at a level the business can survive.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written key person answer, a weekly adviser check-in held through the raise and a capped weekly meeting load."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write your answer to the key person risk question"
                - "Ask one adviser or peer founder to be your weekly sounding board"
                - "List company tasks to pause, delegate or keep during the raise"
                - "Send the week's raise summary to your adviser @recurring(weekly:sat)"
            - name: Seed raise from outside the main startup hubs
              description: |-
                ## Purpose
                Founders in the Caribbean, Africa, Latin America or smaller European cities often raise from investors in another country, which brings time zone, currency and legal structure questions. Mapping which foreign and local funds back companies like yours, and asking a lawyer early whether investors will expect a holding company in another jurisdiction, avoids a late restructure.

                ## Milestones
                1. Local, regional and foreign investors who back your market listed separately.
                2. Your lawyer's advice on whether a different holding structure will be expected recorded.
                3. A meeting schedule that respects investor time zones.
                4. A short answer prepared on why your market is a strength.

                ## Notes
                Restructuring into a new holding company has tax and legal consequences in more than one country. Get advice in each before agreeing to it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A split list of local and foreign investors for your market and your lawyer's written view on company structure, recorded before outreach."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List local, regional and foreign investors who have backed your market"
                - "Ask your lawyer whether investors will expect a different holding structure"
                - "Set meeting slots that suit investors' time zones"
                - "Write a short answer on why your market is an advantage"
            - name: Pre-revenue seed raise built on pilots and usage
              description: |-
                ## Purpose
                Without revenue, the case rests on signals that predict it: paid pilots, letters of intent, usage that keeps growing, a waitlist that converts. Turning each signal into a documented proof point, with names, dates and numbers investors can verify, gives a pre-revenue seed a factual backbone.

                ## Milestones
                1. Every pilot, letter of intent and usage figure listed with dates.
                2. Two or three pilot customers willing to take an investor call.
                3. A clear path from pilot to paid contract written for each.
                4. The proof points placed at the centre of the memo and deck.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated proof point list, with at least two pilot customers willing to speak to investors."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every pilot, letter of intent and usage figure with dates"
                - "Ask two pilot customers if they will take an investor call"
                - "Write the path from pilot to paid contract for each pilot"
                - "Move the strongest proof points to the top of the memo"
            - name: Deep tech or hardware seed with a long build
              description: |-
                ## Purpose
                Hardware, biotech and other deep tech companies need more money and time before revenue, and many generalist seed funds pass on timeline alone. Targeting specialist funds and technical angels, and breaking the plan into technical milestones investors can verify, fits the raise to the way these companies are actually built.

                ## Milestones
                1. Specialist funds and technical angels in your field listed separately from generalists.
                2. Technical milestones written with dates and the evidence for each.
                3. Grants or other non-dilutive funding won or applied for shown alongside the equity ask.
                4. A technical adviser lined up to speak with investors' experts.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A specialist investor list and a dated technical milestone plan, with a technical adviser agreed to take investor diligence calls."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Separate specialist deep tech funds from generalists on your list"
                - "Write dated technical milestones with the evidence for each"
                - "List grants won or applied for beside the equity ask"
                - "Ask a technical adviser to take investor diligence calls"
            - name: Second-time founder seed raise
              description: |-
                ## Purpose
                Founders with a previous company often raise faster from people who backed or watched them, but investors will still ask what is different this time and why this idea. Reconnecting first with past investors and colleagues, and telling the story of the last company honestly, turns history into a head start.

                ## Milestones
                1. Past investors, co-founders and senior colleagues contacted before general outreach.
                2. A plain account of the last company's outcome and lessons written.
                3. The reason this idea is stronger than the last stated in one sentence.
                4. Early commitments from past backers recorded.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every past investor contacted before launch, with a written account of the last company and any early commitments recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List investors and colleagues from your previous company"
                - "Write a plain account of how the last company ended"
                - "Contact past backers before general outreach begins"
                - "Record any early commitments from past investors"
            - name: Raising a seed in a slow funding market
              description: |-
                ## Purpose
                When funds are deploying slowly, seed processes take longer, investors want more proof and terms tighten. Planning for more meetings, a longer timeline and a lower minimum, and cutting burn before launch so runway outlasts the process, keeps a hard market from turning into a cash crisis.

                ## Milestones
                1. The process calendar extended and the target meeting count raised.
                2. Burn reviewed and cut so runway covers the raise plus six months.
                3. A minimum raise reset for the market you are in.
                4. Runway recalculated every month during the raise.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A revised calendar, a reset minimum and runway covering the raise plus six months, recalculated monthly until close."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Extend the process calendar and raise the meeting target"
                - "Cut costs so runway covers the raise plus six months"
                - "Reset the minimum raise for current market conditions"
                - "Recalculate runway from the latest bank balance @recurring(monthly:5)"
            - name: Founder-parent seed raise on limited hours
              description: |-
                ## Purpose
                Parents and carers raising a seed cannot do breakfast meetings, late dinners and last-minute flights at will. Designing the raise around fixed hours, with calls in school time, video first meetings and boundaries agreed at home, protects both the family and the process.

                ## Milestones
                1. Fixed raise hours agreed with your partner or support network.
                2. Video set as the default for first meetings.
                3. Travel days for in-person meetings planned weeks ahead with care cover.
                4. Two evenings a week kept completely free of the raise.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Raise hours fixed for the whole process, with first meetings by video and two evenings a week free of fundraising work."
                cadence: rolling
              tasks:
                - "Agree fixed raise hours with your partner or support network"
                - "Set video as the default for first meetings"
                - "Plan the week's meeting slots around school and care hours @recurring(weekly:sun)"
                - "Book care cover for any in-person travel day"
            - name: Tight-window competitive seed process
              description: |-
                ## Purpose
                Experienced founders with strong traction sometimes run a seed like a short auction: all first meetings in one week, partner meetings the next and a set date for offers. Running it well takes preparation and nerve, and done badly it looks arrogant, so it suits rounds where demand is already proven.

                ## Milestones
                1. Evidence of strong demand checked before choosing this approach.
                2. All first meetings scheduled inside one week.
                3. A date for offers communicated politely and early.
                4. Offers compared on the date set, with the decision made within days.
              priority: low
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A process where all first meetings fell in one week and offers were compared on the announced date."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Check whether demand is strong enough for a tight window"
                - "Schedule every first meeting inside the same week"
                - "Tell investors the offer date at the first meeting"
                - "Compare all offers on the set date with your lawyer"
            - name: Handling a pre-emptive seed offer
              description: |-
                ## Purpose
                Sometimes a fund offers to lead before you have started raising, with a short deadline attached. Whether to take it, test it against a few other funds or walk away depends on the price, the partner and how much the offer might shut out better options, and your lawyer and closest backers should hear about it the same day.

                ## Milestones
                1. The offer's headline terms and deadline written down.
                2. Your lawyer and two trusted backers consulted within 48 hours.
                3. A decision on whether to test the market briefly before replying.
                4. A reply sent before the deadline with the decision and any conditions.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on the pre-emptive offer, made before its deadline after consulting your lawyer and two backers."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down the offer's headline terms and deadline"
                - "Call your lawyer and two trusted backers within 48 hours"
                - "Decide whether to speak to two other funds before replying"
                - "Reply to the fund before the deadline with your decision"
            - name: Seed funnel conversion analysis
              description: |-
                ## Purpose
                Treating the raise as a funnel shows where it leaks: introductions that never become meetings, first meetings that never reach a partner, or partner meetings that never become offers. Measuring conversion by stage and source points to the fix, whether that is better targeting, a sharper first meeting or stronger proof.

                ## Milestones
                1. Conversion rates calculated for each stage of the pipeline.
                2. Results split by source: warm introduction, cold outreach, events.
                3. The weakest stage identified with a likely cause.
                4. One change tested on the next batch of investors.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Monthly conversion rates by stage and source recorded through the raise, with one tested change per month."
                cadence: rolling
              tasks:
                - "Count investors at each pipeline stage"
                - "Split conversion rates by introduction source"
                - "Update stage conversion rates and note the weakest stage @recurring(monthly:28)"
            - name: Small cheques pooled into one cap table line
              description: |-
                ## Purpose
                Many small angel cheques can leave dozens of names on the cap table, each needing signatures at every future round. Asking your lawyer about pooling them through a nominee, a syndicate vehicle or a lead angel keeps the cap table clean, though it adds cost and needs the angels to agree.

                ## Milestones
                1. The number of small cheques expected in the round counted.
                2. Pooling options and their costs explained by your lawyer.
                3. Angels asked whether they accept investing through a pooled vehicle.
                4. A decision on pooling recorded and reflected in the closing plan.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on pooling small cheques, based on your lawyer's options and the angels' agreement."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Count how many small cheques the round is likely to have"
                - "Ask your lawyer to explain pooling options and their cost"
                - "Ask your angels whether they would invest through a pooled vehicle"
                - "Record the pooling decision for the closing plan"
            - name: Series A relationships started during the seed
              description: |-
                ## Purpose
                Many Series A investors prefer to know founders for a year before investing, and the seed raise is the natural moment to meet them. Keeping a short list of Series A partners met along the way, with a light quarterly note on progress against milestones, means the next raise starts with relationships rather than cold emails.

                ## Milestones
                1. Series A funds met during the seed listed with the partner and their stated interest.
                2. A record per partner of what they said they need to see.
                3. A quarterly progress note sent to each.
                4. Two or three relationships warm enough for a first meeting when the next raise starts.

                ## Notes
                Start from the **Person** template for each partner worth keeping in touch with.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarterly note sent to every Series A partner on the list, each tracked against what they said they need to see."
                cadence: rolling
              tasks:
                - "List the Series A funds and partners you met during the seed"
                - "Create a person page for each partner from the template"
                - "Send a short progress note to each Series A partner @recurring(quarterly)"
---

# Seed Round Fundraise

This area is for founders with early traction who are about to raise a seed round and want to run it as a disciplined process rather than a scramble. It starts with the foundations (readiness, the amount, the milestones the money must buy, the structure, a lawyer and a one-page story), then the weekly machinery of a live raise, the skills that make investor conversations land, the decisions about leads, angels and allocations, the dated moments from launch week to the announcement, variants for solo, parent, second-time and out-of-hub founders, and finally the tactics experienced founders use.

What repeats during the raise is a Monday stand-up, Friday pipeline and pass-reason reviews, a Wednesday reconciliation of commitments, a Thursday note to investors in diligence and a daily follow-up sweep, with monthly runway, cohort and stop-rule checks and a quarterly note to Series A partners once the round is done. The Meeting notes, Feedback themes, Metrics log and Person templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
