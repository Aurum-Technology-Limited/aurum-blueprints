---
id: founding-startups.startup-advisor-board
name: Startup Advisor Board
description: "A small advisory bench chosen for real gaps, signed on standard terms with vesting, kept useful with monthly updates and specific asks, and refreshed or wound down as the company changes."
category: business
version: 1.0.0
tags: [founding-startups, startup-advisor-board, founder, advisors, advisory-board, advisor-equity, mentorship, startup-governance]
author: Aurum Technology
starter_structure:
  templates:
    - person
    - one-on-one
    - meeting-notes
  pillars:
    - name: Founding & Startups
      emoji: "🚀"
      description: "Starting and steering a young company: validating the idea, incorporating, finding product-market fit, the founder's operating rhythm, co-founder relationships, runway and the hard calls of the early years."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Startup Advisor Board
          description: "Recruiting startup advisors with relevant experience, agreeing what they will do and compensation, and actually using their help."
          projects:
            - name: Advisor gap map for the next eighteen months
              description: |-
                ## Purpose
                Most founders recruit advisors they happen to admire, then discover nobody on the bench has done the thing the company is about to attempt. Listing the four or five bets of the next eighteen months, such as a first enterprise contract, a regulated launch or a hire you have never made, shows exactly which experience is missing and which is already covered by the team or investors.

                ## Milestones
                1. The company's main bets for the next eighteen months written as five or fewer outcomes.
                2. Each bet marked with the experience it needs and whether the team, an investor or nobody has it.
                3. Two or three gaps ranked by cost of getting them wrong.
                4. A one-line description of the ideal advisor written for each of the top gaps.

                ## Notes
                A gap that a part-time contractor or a single paid call could close is not an advisor seat. Keep the map to gaps that need months of judgement.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page gap map lists the company's bets, the experience each needs and two or three ranked advisor gaps with an ideal profile for each."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the company's five biggest bets for the next eighteen months"
                - "Mark beside each bet who on the team or cap table has done it before"
                - "Rank the uncovered gaps by the cost of getting them wrong"
                - "Draft a one-line ideal advisor profile for the top three gaps"
            - name: Advisor, mentor, consultant or investor for each gap
              description: |-
                ## Purpose
                Founders often offer equity for help that a mentor would give for free, a consultant would deliver faster for cash, or an angel would give in exchange for investing. Deciding the right relationship for each gap before any outreach keeps advisor equity for the people who will carry ongoing responsibility, and stops the bench growing by accident.

                ## Milestones
                1. Each gap from the map labelled as advisor, mentor, paid consultant, angel investor or formal board seat.
                2. A sentence per gap explaining why that relationship fits better than the others.
                3. No more than two or three gaps left in the advisor column.
                4. The decision recorded where co-founders can see and challenge it.

                ## Notes
                A useful test: if the help is a one-off answer, pay for it or ask a mentor. If it needs months of context and the person will be accountable for introductions or reviews, it may be an advisor seat.
              priority: medium
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every gap on the map is assigned to one relationship type with a written reason, leaving at most three advisor seats."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Label each gap as advisor, mentor, consultant, investor or board seat"
                - "Write one sentence per gap on why that relationship fits"
                - "Move any one-off question out of the advisor column"
                - "Share the labelled list with your co-founder for challenge"
            - name: Role cards for the first two advisor seats
              description: |-
                ## Purpose
                An advisor asked to help with go-to-market will interpret that as anything from one coffee a year to rewriting your sales deck, and the mismatch surfaces months later as quiet resentment on both sides. A one-page role card per seat, stating the outcomes, the time expected and what the advisor will not be asked to do, becomes the basis of the conversation, the agreement and every later review.

                ## Milestones
                1. A role card per seat naming two or three outcomes the advisor is there to help achieve.
                2. Expected time stated in hours per month and the forms it takes, such as calls, reviews or introductions.
                3. A short list of what is out of scope for the seat.
                4. A review point after six months written onto the card.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Two role cards exist, each with named outcomes, hours per month, out-of-scope items and a six-month review point."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the two or three outcomes for the first advisor seat"
                - "Set the expected hours per month and the form of each contribution"
                - "List what the advisor will not be asked to do"
                - "Repeat the card for the second seat and add a review date to each"
            - name: Advisor equity budget inside the option pool
              description: |-
                ## Purpose
                Every advisor grant comes out of the same pool that has to fund your first ten hires, so a bench of six generous grants can quietly eat a fifth of it. Setting a total advisor budget and a range per seat before talking to anyone means each offer is consistent, easy to defend to investors and impossible to inflate in the moment.

                ## Milestones
                1. The current option pool size and amount already granted confirmed from the cap table.
                2. A total advisor budget set as a share of the fully diluted company, agreed by the founders.
                3. A grant range per seat type, such as standard, expert and strategic, written down.
                4. The budget checked with your lawyer or accountant for how grants are issued in your jurisdiction.

                ## Notes
                Published frameworks such as the Founder Institute's FAST agreement give commonly used ranges by stage and commitment. Treat them as a market reference to discuss with your lawyer, not as advice.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written advisor equity budget states the total share of the company and a range per seat type, agreed by all founders."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pull the current option pool size and granted amount from the cap table"
                - "Read one published advisor equity framework and note its ranges"
                - "Agree a total advisor budget with your co-founders"
                - "Write a grant range for standard, expert and strategic seats"
            - name: Standard advisor agreement drafted with your lawyer
              description: |-
                ## Purpose
                Handshake advisor deals are one of the most common items startup lawyers have to repair during a first priced round, because nobody can say what was promised, whether it vested or who owns the ideas discussed. One standard agreement, reviewed once by your lawyer and reused for every advisor, covers equity, vesting, confidentiality, intellectual property assignment and how either side can end it.

                ## Milestones
                1. A template agreement chosen, such as your lawyer's standard form or a published advisor template.
                2. Clauses on equity, vesting, confidentiality, intellectual property and termination reviewed by a lawyer.
                3. A one-page schedule attached for the role card, grant size and start date.
                4. The final template saved where every future advisor agreement will start from.

                ## Notes
                Ask your lawyer whether advisors in another country need a different version, and how the grant is formally approved, often by a board resolution.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A lawyer-reviewed advisor agreement template with a fill-in schedule for role, grant and start date is saved and ready to reuse."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your lawyer for their standard advisor agreement and fee"
                - "List the questions you want the agreement to answer"
                - "Review the draft clauses on vesting, confidentiality and IP"
                - "Save the approved template with a blank schedule page"
            - name: Advisor vesting, cliff and exit terms
              description: |-
                ## Purpose
                Vesting is what turns an advisor grant from a gift into a payment for contribution, yet many founders copy employee terms that do not fit a part-time role. Choosing the vesting period, whether there is a cliff, what happens on acquisition and what happens if the advisor stops helping protects the cap table without making the offer feel stingy.

                ## Milestones
                1. A vesting period and schedule chosen, commonly monthly over one to two years for advisors.
                2. A decision recorded on whether a short cliff applies and how long it is.
                3. Treatment on acquisition and on early termination written in plain words.
                4. The terms confirmed with your lawyer and copied into the agreement template.

                ## Notes
                Ask your lawyer and tax adviser about any filings the advisor may need to make on receiving shares, such as an 83(b) election in the US. The advisor should get their own advice too.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Vesting period, cliff, acquisition treatment and termination terms are written in plain words and confirmed by your lawyer."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Compare employee vesting terms with what fits a part-time advisor"
                - "Decide whether a cliff applies and write down why"
                - "Write what happens to unvested equity on acquisition or termination"
                - "Confirm the chosen terms with your lawyer"
            - name: Advisor longlist from your second-degree network
              description: |-
                ## Purpose
                The best advisors for an early company are rarely famous; they are operators who did the exact thing you need two or three years ago and still remember the details. Working through investors, former colleagues, customers and other founders for names, and asking each of them who they would call, usually yields fifteen to twenty credible candidates within three weeks.

                ## Milestones
                1. Investors, former colleagues, customers and founder friends asked for names against each gap.
                2. A longlist of fifteen or more candidates with the gap each could fill.
                3. Each candidate noted with who knows them and how well.
                4. The list cut to five or six per gap based on direct experience, not title.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A longlist of at least fifteen candidates, each tied to a gap and a mutual contact, is cut to a shortlist of five or six per gap."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Send your gap profiles to three investors or founder friends asking for names"
                - "Search your contacts for people who held the exact role two years ago"
                - "Record each candidate with the gap and the mutual contact"
                - "Cut the longlist to the five or six strongest per gap"
            - name: Advisor outreach note and one-page company brief
              description: |-
                ## Purpose
                Busy operators decide in about a minute whether to take a call, and a vague request to pick their brain gets ignored. A short warm introduction request, a direct note naming the specific problem and a one-page brief on the company, its traction and the role gives a candidate everything needed to say yes to a first conversation.

                ## Milestones
                1. A one-page brief covering what the company does, current traction, the gap and the role card summary.
                2. A forwardable introduction request your mutual contact can send without editing.
                3. A direct note of under 150 words for candidates you already know.
                4. First outreach sent to the top candidates for each gap.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page brief and two outreach notes exist and have been sent to the top candidates for each advisor gap."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the agent to draft a one-page company brief from your latest update"
                - "Write a forwardable introduction request for mutual contacts"
                - "Write a direct outreach note of under 150 words"
                - "Send outreach to the top two candidates for each gap"
            - name: Trial project before offering an advisor seat
              description: |-
                ## Purpose
                A great first coffee says little about whether someone will reply in a crisis or give you the uncomfortable answer. A paid or unpaid trial of four to six weeks on one real problem, such as reviewing a pricing page or opening two customer doors, shows how the candidate works, and a couple of reference calls with founders they have advised fill in the rest.

                ## Milestones
                1. One real, bounded problem agreed with the candidate as a trial.
                2. Two reference calls held with founders the candidate has advised before.
                3. The trial output reviewed against the role card outcomes.
                4. A written yes or no on offering the seat, with the reason.

                ## Notes
                Ask references what the candidate did in the worst month, not the best one. Advisors who vanish under pressure look identical to good ones in calm months.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each advisor candidate has completed a bounded trial and two reference calls, and a written decision on the seat is recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose one real problem small enough for a four-week trial"
                - "Propose the trial to your top candidate with a clear end date"
                - "Book two reference calls with founders the candidate has advised"
                - "Write the seat decision and the reason in the candidate's record"
            - name: Monthly advisor update email
              description: |-
                ## Purpose
                Advisors can only help with problems they know about, and a short monthly note keeps them close enough to spot an opening or a risk without needing a call. A fixed format of numbers, wins, problems and two specific asks takes under an hour to write and is the single habit that most separates useful advisory benches from forgotten ones.

                ## Milestones
                1. A fixed update format with headline numbers, wins, problems and asks.
                2. A distribution list of current advisors, kept separate from the investor list.
                3. The first update sent with at least two specific asks.
                4. Advisor replies tracked so every ask gets a follow-up.

                ## Notes
                Keep the bad news in. Advisors who only hear good news cannot help when it matters, and they notice when an update is a press release.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An advisor update with numbers, problems and at least two specific asks is sent every month for six consecutive months."
                cadence: rolling
              tasks:
                - "Write the update format with four headings and save it"
                - "Create an advisor distribution list separate from investors"
                - "Send the monthly advisor update with two specific asks @recurring(monthly:5)"
                - "Reply to every advisor response within two working days"
            - name: Advisor relationship tracker
              description: |-
                ## Purpose
                Relationships with three or four advisors are easy to hold in your head until the day you cannot remember who promised the bank introduction or when you last spoke to the one with regulatory experience. A simple record per advisor with their role card, grant, last contact, open asks and contributions makes every conversation pick up where the last one ended.

                ## Milestones
                1. A record per advisor with role card, grant size, vesting start and contact details.
                2. Last contact date and open asks visible for each advisor.
                3. Contributions logged with date and outcome.
                4. Any advisor with no contact in six weeks flagged automatically or by a weekly glance.

                ## Notes
                Start from the **Person** template, one record per advisor, linked from this area.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every advisor has a record with role, grant, last contact, open asks and a dated contribution log that is no more than a week out of date."
                cadence: rolling
              tasks:
                - "Create one record per advisor with role card and grant details"
                - "Add last contact date and open asks to each record"
                - "Log this week's advisor touchpoints and contributions @recurring(weekly:fri)"
                - "Flag any advisor with no contact in six weeks"
            - name: Specific asks queue for each advisor
              description: |-
                ## Purpose
                Vague requests like any thoughts on hiring get vague answers, while an ask such as review our first sales engineer job spec and tell us the two things you would change gets a reply the same day. Keeping a running queue of specific, small asks per advisor turns their goodwill into weekly progress and shows quickly which advisors respond.

                ## Milestones
                1. A queue per advisor of asks tied to their role card outcomes.
                2. Each ask written so it can be answered in under fifteen minutes or a single introduction.
                3. At least one ask per advisor sent each month.
                4. Response time and usefulness noted for each ask.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each advisor receives at least one specific, scoped ask a month, with response and usefulness recorded in their tracker entry."
                cadence: rolling
              tasks:
                - "Write three specific asks for each advisor tied to their role card"
                - "Rewrite any ask that would take more than fifteen minutes to answer"
                - "Send one queued ask to each advisor @recurring(monthly:12)"
                - "Note response time and usefulness beside each completed ask"
            - name: Quarterly one-to-one with each advisor
              description: |-
                ## Purpose
                Quarterly conversations are where an advisor moves from answering questions to offering the observations you did not know to ask for. An hour with each advisor every three months, with a short pre-read and three agenda items, keeps their context current and gives both sides a regular moment to say whether the arrangement is still working.

                ## Milestones
                1. A standing quarterly slot booked with each advisor.
                2. A pre-read sent three days before with the latest numbers and three agenda items.
                3. Notes captured with decisions and follow-ups for both sides.
                4. One question asked each time about whether the advisor wants anything to change.

                ## Notes
                Start from the **1:1** template so the notes from each quarter sit together.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each advisor has a one-hour one-to-one every quarter with a pre-read and written notes listing follow-ups."
                cadence: cyclic
              tasks:
                - "Book a recurring quarterly hour with each advisor"
                - "Send a pre-read with numbers and three agenda items @recurring(quarterly)"
                - "Write up decisions and follow-ups within a day of each call"
                - "Ask each advisor whether the arrangement still works for them"
            - name: Advisor contribution log and quarterly value check
              description: |-
                ## Purpose
                Without a record, a founder's view of an advisor is set by the last conversation, which is either flattering or unfair. Logging each introduction, review and decision an advisor shaped, then looking at the log each quarter against their grant and role card, gives an honest picture and the evidence for keeping, changing or ending the seat.

                ## Milestones
                1. A log format with date, type of contribution and resulting outcome.
                2. Every contribution from the last quarter entered.
                3. A quarterly view per advisor comparing contributions with the role card.
                4. Any seat with fewer than two meaningful contributions in a quarter marked for a conversation.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarterly contribution summary per advisor exists, with any underused seat flagged for a conversation within two weeks."
                cadence: rolling
              tasks:
                - "Set up a contribution log with date, type and outcome columns"
                - "Enter last month's advisor contributions in the log @recurring(monthly:28)"
                - "Compare each advisor's quarter against their role card @recurring(quarterly)"
                - "Book a conversation with any advisor below two contributions"
            - name: Advisor introduction requests with double opt-in
              description: |-
                ## Purpose
                Introductions are often the most valuable thing an advisor gives, and the fastest way to waste them is a sloppy request that makes the advisor look bad to their contact. A standard forwardable blurb, a double opt-in rule and a habit of closing the loop with the advisor afterwards keep their network open to you for years.

                ## Milestones
                1. A template for a forwardable introduction blurb under 100 words.
                2. A rule agreed with advisors that they ask their contact before introducing you.
                3. Every introduction followed within 48 hours and the advisor told the outcome.
                4. A record of introductions per advisor and what came of each.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every advisor introduction uses a forwardable blurb, is followed within 48 hours and has its outcome reported back to the advisor."
                cadence: rolling
              tasks:
                - "Write a forwardable introduction blurb template"
                - "Tell each advisor you prefer they check with contacts before introducing"
                - "Report the outcome of every open introduction to the advisor @recurring(monthly:20)"
                - "Record introductions and results in each advisor's tracker entry"
            - name: Twice-yearly group advisory session
              description: |-
                ## Purpose
                Bringing advisors into one room twice a year produces a different kind of help than one-to-ones: they challenge each other, connect ideas across functions and see the whole company instead of their slice. A two-hour session with a tight pre-read and one big question, such as which market to enter next, is worth far more than a general catch-up.

                ## Milestones
                1. Two dates a year held for a group session, chosen around planning cycles.
                2. One big question set for each session and shared a week ahead with a pre-read.
                3. A facilitated session with every advisor asked for a view before discussion.
                4. A written summary of views, the decision taken and who follows up.

                ## Notes
                Start from the **Meeting notes** template. Keep this separate from formal board meetings, which have legal duties and minutes of their own.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Two group advisory sessions are held each year, each with a pre-read, one central question and a written summary of the decision."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Choose two session dates a year that sit before planning cycles"
                - "Agree the year's group session dates with every advisor @recurring(yearly)"
                - "Write the central question and pre-read a week before each session"
                - "Send the written summary and follow-ups within two days"
            - name: Advisor equity and paperwork register
              description: |-
                ## Purpose
                Lost advisor paperwork is a common cause of delay in due diligence, when an investor's lawyer asks for every signed agreement, board approval and vesting schedule. Keeping a single register per advisor with the signed agreement, grant approval, vesting start, amount vested to date and any filings means the request takes ten minutes instead of a fortnight of chasing signatures.

                ## Milestones
                1. One register listing every current and past advisor.
                2. For each, the signed agreement, grant approval and vesting start stored together.
                3. Vested and unvested amounts matching the cap table.
                4. Any missing signature or approval chased and filed.
              priority: high
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A register holds the signed agreement, grant approval and vesting status for every advisor, reconciled with the cap table each quarter."
                cadence: rolling
              tasks:
                - "List every current and past advisor in one register"
                - "Store each signed agreement and grant approval beside the entry"
                - "Reconcile advisor vesting in the register with the cap table @recurring(quarterly)"
                - "Chase any missing signature or board approval this week"
            - name: Confidentiality and information rules for advisors
              description: |-
                ## Purpose
                Advisors often sit on other boards, invest in other companies or advise a competitor's supplier, so what you share and how you share it matters. Deciding what advisors see, such as headline numbers but not customer contracts, and how sensitive material is handled keeps the relationship open without putting the company at risk.

                ## Milestones
                1. Three tiers of information defined, from shareable to never shared outside the company.
                2. Each advisor's other roles noted against the tiers.
                3. A short note sent to advisors on how sensitive material will be shared.
                4. The confidentiality clause in each agreement checked against the tiers.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written three-tier information policy exists, each advisor's other roles are recorded, and every advisor has been told how sensitive material is shared."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Define what advisors can see, see on request, and never see"
                - "Note each advisor's other boards, investments and advisory roles"
                - "Send advisors a short note on how sensitive material is shared"
                - "Review the information tiers and advisors' other roles @recurring(yearly)"
            - name: Annual advisor bench refresh
              description: |-
                ## Purpose
                Needs change faster than benches do: the advisor who was perfect for finding first customers may have little to add once the company is hiring a sales team. A yearly look at the gap map against the current advisors, with honest conversations about who stays, who changes role and who moves to alumni status, keeps the bench matched to the company it is advising.

                ## Milestones
                1. The gap map redrawn for the coming eighteen months.
                2. Each current advisor matched to a current gap or marked as no longer matched.
                3. A conversation held with every advisor about the year ahead.
                4. Changes recorded, including new seats to recruit and seats to close.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Once a year, the gap map is redrawn, every advisor is matched or released, and the decisions are recorded in the register."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Redraw the gap map for the next eighteen months @recurring(yearly)"
                - "Match each current advisor to a gap or mark them unmatched"
                - "Hold a year-ahead conversation with every advisor"
                - "Record new seats to recruit and seats to close in the register"
            - name: Advisor equity norms at your stage
              description: |-
                ## Purpose
                Knowing how advisor grants usually vary by stage, commitment and seniority lets you make offers that are fair without being naive, and recognise when a candidate's ask is far outside the norm. A few hours with published frameworks, a conversation with your lawyer and a couple of founders who granted equity recently gives you a working sense of the market.

                ## Milestones
                1. Two published advisor equity frameworks read and their ranges noted.
                2. A conversation with your lawyer on what they see in companies at your stage.
                3. Two founders asked what they granted advisors and whether they would do it again.
                4. A one-page summary of the ranges you will work within, linked to the equity budget.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of advisor equity ranges by stage and commitment, drawn from two frameworks, your lawyer and two founders, is linked to the equity budget."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read two published advisor equity frameworks and note the ranges"
                - "Ask your lawyer what grants they see at your stage"
                - "Ask two founders what they granted and whether they regret it"
                - "Write a one-page ranges summary and link it to the equity budget"
            - name: Writing asks advisors can answer in ten minutes
              description: |-
                ## Purpose
                Questions that are too broad force an advisor to do the thinking you should have done, and most will answer politely and unhelpfully. Practising the shape of a good ask, with context in two lines, the options you are weighing, your current lean and the exact decision needed, makes every message to an advisor faster to answer and better answered.

                ## Milestones
                1. A four-part ask format written down: context, options, your lean, the decision needed.
                2. Five recent vague questions rewritten in the new format.
                3. The rewritten asks sent and the quality of answers compared with earlier replies.
                4. The format saved where you draft advisor messages.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five asks rewritten in a four-part format have been sent, and the answers are compared in writing with replies to earlier vague questions."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write the four-part ask format on one card"
                - "Rewrite five recent vague advisor questions in the format"
                - "Send the rewritten asks to the relevant advisors"
                - "Compare the answers with replies to your earlier questions"
            - name: Advisor working sessions that end in a decision
              description: |-
                ## Purpose
                An hour with an experienced advisor can either be a pleasant conversation or the moment a stuck decision gets made. Learning to run a working session, with a one-page brief sent ahead, the decision stated in the first five minutes and the last ten minutes reserved for what happens next, turns advisor time into decisions you can act on the same week.

                ## Milestones
                1. A one-page brief template for working sessions.
                2. Three working sessions run using the brief, the stated decision and a next-steps close.
                3. A decision recorded at the end of each session, even if it is to gather one more fact.
                4. A short reflection on what to change in the format after the third session.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three advisor working sessions have each ended in a recorded decision or a named next fact to gather, using a one-page brief sent ahead."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Draft a one-page brief template for advisor working sessions"
                - "Book a working session on a decision that has been stuck"
                - "State the decision needed in the first five minutes of the call"
                - "Record the outcome and refine the format after three sessions"
            - name: Weighing conflicting advice from two advisors
              description: |-
                ## Purpose
                Two good advisors will regularly tell you opposite things, and founders often freeze or simply follow whoever spoke last. A method for weighing advice, which asks what each person has actually seen, what assumption sits under their view and what cheap test would separate the two, keeps the decision yours and makes disagreement useful instead of paralysing.

                ## Milestones
                1. A current conflicting piece of advice written out side by side.
                2. Each advisor's direct experience and underlying assumption noted.
                3. A cheap test or extra fact identified that would favour one view.
                4. The decision and reasoning shared back with both advisors.

                ## Notes
                Advisors respect being overruled with a reason far more than being ignored. Telling both what you decided and why keeps them engaged.
              priority: low
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "One real conflict between advisors has been resolved with a written comparison, a test or fact that settled it, and a note back to both advisors."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write two conflicting pieces of advice side by side"
                - "Note the direct experience behind each advisor's view"
                - "Name the cheapest test that would separate the two views"
                - "Tell both advisors what you decided and why"
            - name: Taking hard feedback from an advisor
              description: |-
                ## Purpose
                Experienced advisors earn their equity in the moment they tell you the plan will not work, and the most common founder reflex is to explain why they are wrong. Practising a simple response, asking what they have seen that leads them there, summarising it back and taking a day before replying, keeps the honest feedback coming instead of teaching advisors to be polite.

                ## Milestones
                1. A short personal script for receiving hard feedback.
                2. The script used in at least two advisor conversations.
                3. A written note after each on what was said and what you will do about it.
                4. One advisor asked directly whether you are easy to give bad news to.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "The feedback script has been used in two advisor conversations, each with a written follow-up note, and one advisor has been asked how easy you are to tell bad news."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write a three-line script for receiving hard feedback"
                - "Use the script in your next advisor conversation"
                - "Write what was said and your follow-up within a day"
                - "Ask one advisor how easy you are to bring bad news to"
            - name: Spotting equity collectors before they join
              description: |-
                ## Purpose
                Some people advise a dozen startups at once, ask for equity on the first call and add little beyond their name. Learning the warning signs, such as no references from founders they have advised, reluctance to do a trial or a fixed demand for a large grant without vesting, saves you from a seat that costs equity and gives nothing back.

                ## Milestones
                1. A list of warning signs drawn from founders and investors you trust.
                2. Two founders asked about advisors who did not work out and why.
                3. The warning signs added to your candidate review checklist.
                4. Every current candidate checked against the list.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of advisor warning signs is part of the candidate review checklist, and every current candidate has been checked against it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask two founders about advisors who did not work out"
                - "Write a list of warning signs from what you hear"
                - "Add the warning signs to your candidate review checklist"
                - "Check every current candidate against the list"
            - name: Thanking and crediting advisors properly
              description: |-
                ## Purpose
                Gratitude is cheap to give and rarely given well; most advisors hear thanks only in a closing line of the update. A habit of telling an advisor exactly what their help changed, such as the customer who signed after their introduction, keeps people motivated in a role where the equity may not be worth anything for years.

                ## Milestones
                1. A note sent to each advisor naming one specific outcome their help produced.
                2. A monthly habit of one specific thank-you note.
                3. Advisor contributions credited by name in the advisor update where appropriate.
                4. A small yearly gesture chosen for each advisor, such as a handwritten card.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "One specific thank-you note naming an outcome is sent to an advisor every month, and each advisor has had at least one in the last six months."
                cadence: rolling
              tasks:
                - "Write to one advisor naming an outcome their help produced"
                - "Send one specific thank-you note to an advisor @recurring(monthly:15)"
                - "Credit advisor contributions by name in the monthly update"
                - "Choose a small yearly gesture for each advisor"
            - name: Advisor conflicts of interest
              description: |-
                ## Purpose
                Conflicts are normal for anyone experienced enough to be worth having as an advisor, but undeclared ones cause real damage, for example an advisor who also advises a company bidding for the same customer. Understanding the common types, asking every advisor to declare theirs and agreeing how each will be handled makes conflicts manageable instead of embarrassing.

                ## Milestones
                1. The common conflict types noted, such as competitors, suppliers, customers and investors.
                2. Each advisor asked to list their other roles and holdings that touch your market.
                3. A handling rule agreed for each declared conflict.
                4. Declarations stored in the register and refreshed at each annual review.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every advisor has a written declaration of conflicts with an agreed handling rule, stored in the advisor register."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the conflict types that matter in your market"
                - "Ask each advisor to declare roles that touch your market"
                - "Agree a handling rule for each declared conflict"
                - "Store the declarations in the advisor register"
            - name: Formalising a helpful friend as an advisor
              description: |-
                ## Purpose
                Many founders already have one person who has been answering their calls for a year without any agreement, and the relationship is drifting from favour into obligation. Offering a formal seat with a role card and equity recognises what they have done, sets expectations for what comes next and gets the history into writing before the company has more value.

                ## Milestones
                1. The help already given written down with dates and outcomes.
                2. A role card drafted for the formal seat going forward.
                3. A conversation held where the friend can say yes, no or not this way.
                4. A signed standard agreement, or a recorded decision to keep things informal.

                ## Notes
                Ask your lawyer how to treat help given before the agreement starts. Some founders start vesting from the date the help began, which needs to be documented properly.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The friend's past help is documented and either a signed advisor agreement or a recorded decision to stay informal exists."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the help your friend has given with rough dates"
                - "Draft a role card for what a formal seat would cover"
                - "Ask them openly whether they want a formal role"
                - "Send the standard agreement or record the decision to stay informal"
            - name: Parting ways with an inactive advisor
              description: |-
                ## Purpose
                Ending an advisor relationship feels awkward enough that founders let silent seats keep vesting for years, which costs equity and clutters the cap table for the next round. A direct, warm conversation, followed by the termination steps in the agreement and a clean record of what vested, closes the seat while keeping the person as a friend of the company.

                ## Milestones
                1. The contribution log reviewed and the decision to end the seat taken by the founders.
                2. The termination clause and vesting position checked with your lawyer.
                3. A direct conversation held, followed by a written confirmation.
                4. Vesting stopped, the cap table updated and the register marked as ended.

                ## Notes
                Most inactive advisors are relieved, not offended. Thank them for the specific help they did give and offer to stay in touch as an alumnus.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The inactive seat is ended in writing, vesting is stopped under the agreement and the cap table and register reflect the final position."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Review the advisor's contribution log with your co-founder"
                - "Check the termination clause and vested amount with your lawyer"
                - "Hold a direct, warm conversation about ending the seat"
                - "Confirm in writing and update the cap table and register"
            - name: Resetting an advisor seat after the role changes
              description: |-
                ## Purpose
                Roles drift: an advisor brought in for fundraising becomes your most useful voice on hiring, or one brought in for a regulated launch has nothing left to do once the licence is granted. Resetting the role card, and where needed the grant, keeps the agreement honest and avoids someone vesting for work they no longer do.

                ## Milestones
                1. The original role card compared with what the advisor actually does now.
                2. A new role card drafted for the next twelve months.
                3. Any change to the grant or vesting agreed and approved properly.
                4. The amended agreement signed and the register updated.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The advisor has a new written role card and, if the grant changed, a signed amendment recorded in the register."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Compare the original role card with the advisor's current help"
                - "Draft a revised role card for the next twelve months"
                - "Ask your lawyer how to amend the grant if it needs to change"
                - "Sign the amended terms and update the register"
            - name: Cash retainer or equity for a specialist advisor
              description: |-
                ## Purpose
                Specialists such as a former regulator, a clinical expert or a retired chief financial officer may prefer to be paid for their time, and for narrow, intensive help cash can be cheaper than equity in the long run. Comparing a monthly retainer, an hourly rate, equity or a mix against the expected hours and the company's cash position gives a defensible offer.

                ## Milestones
                1. Expected hours and duration estimated for the specialist role.
                2. Three options costed: cash retainer, equity only and a mix.
                3. The cash option checked against runway and the equity option against the budget.
                4. An offer chosen and the reasoning recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three compensation options for the specialist are costed against runway and the equity budget, and the chosen offer is recorded with its reason."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Estimate hours and duration for the specialist role"
                - "Cost a cash retainer, an equity grant and a mix"
                - "Check each option against runway and the equity budget"
                - "Record the chosen offer and the reasoning"
            - name: Moving an advisor onto the formal board
              description: |-
                ## Purpose
                Strong advisors are sometimes invited to become directors, a change that brings legal duties, a vote, insurance questions and often a different relationship with investors. Thinking through what the company needs from the board, what the person wants and what changes legally before offering the seat avoids an offer that is hard to reverse.

                ## Milestones
                1. The board composition today and after the next round written out.
                2. The differences between advisor and director duties explained by your lawyer.
                3. Investor views on the seat gathered where they have consent rights.
                4. A decision recorded to offer the seat, keep the advisor role or wait.

                ## Notes
                Directors usually need insurance and formal appointment, and the advisor grant may need to be reviewed. Take legal advice before making the offer.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on the board seat exists, informed by your lawyer's note on director duties and any investor consent required."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the current board and its likely shape after the next round"
                - "Ask your lawyer to explain how director duties differ from an advisor's"
                - "Check whether investors have consent rights over new directors"
                - "Record the decision to offer the seat, wait or keep the advisor role"
            - name: Listing advisors on the website and pitch deck
              description: |-
                ## Purpose
                Listing names can lend credibility with customers, candidates and investors, but a slide of advisors who never reply to emails is a known warning sign for experienced investors. Deciding who is listed, with whose permission, how their role is described and when names come down keeps the public list truthful and useful.

                ## Milestones
                1. A rule for who may be listed, such as signed agreement and active contribution.
                2. Written permission from each listed advisor, with approved wording and photo.
                3. Website and deck updated to match the rule.
                4. A yearly check that every listed name is still an active advisor.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Only advisors who meet a written listing rule and have given permission appear on the website and deck, checked once a year."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the rule for who may be listed publicly"
                - "Ask each listed advisor to approve their wording and photo"
                - "Update the website and deck to match the rule"
                - "Check every publicly listed advisor is still active @recurring(yearly)"
            - name: Swapping a famous name for an operator
              description: |-
                ## Purpose
                A well-known advisor can help a first fundraise and then contribute nothing for two years, while an operator who ran the job you are hiring for would change weekly decisions. Reviewing whether a prestige seat still earns its place, and redirecting the budget towards someone hands-on, is often the single best improvement to an early bench.

                ## Milestones
                1. The prestige advisor's contributions over the last year listed.
                2. The operator profile you would recruit instead written down.
                3. A decision made to keep, reduce or end the prestige seat.
                4. The freed budget allocated to a named operator search.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on the prestige seat exists, and any freed equity budget is assigned to a named operator search."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List what the prestige advisor contributed over the last year"
                - "Write the profile of the operator you would recruit instead"
                - "Decide to keep, reduce or end the prestige seat"
                - "Start an operator search with the freed budget"
            - name: First advisor onboarding session
              description: |-
                ## Purpose
                First impressions set how an advisor engages for the whole relationship, and an advisor who spends the first month confused about the product rarely recovers momentum. A ninety-minute onboarding with a product walk-through, the numbers, the role card, the information rules and their first two asks gets a new advisor useful in week one.

                ## Milestones
                1. An onboarding pack with product demo access, latest update, role card and information rules.
                2. A ninety-minute session held within two weeks of signing.
                3. Two first asks agreed before the session ends.
                4. The advisor added to the update list and tracker.

                ## Notes
                Start from the **Meeting notes** template to capture what the advisor said in the first session; first reactions are often the most candid.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Each new advisor has an onboarding session within two weeks of signing, leaves with two agreed asks and is on the update list."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Assemble an onboarding pack with demo access and the latest update"
                - "Book a ninety-minute session within two weeks of signing"
                - "Agree two first asks before the session ends"
                - "Add the advisor to the update list and tracker"
            - name: Advisor review before a fundraise
              description: |-
                ## Purpose
                Fundraising is where advisors with relevant experience pay back their equity fastest, by stress-testing the story and opening investor doors that cold emails cannot. A dedicated review a month before the process starts, with the deck, the model and the target list, catches the weak spots while there is still time to fix them.

                ## Milestones
                1. Deck, financial model and target investor list shared with chosen advisors.
                2. A review call held with each, or one group session.
                3. Written changes made to the story and model.
                4. Specific investor introductions agreed with advisors who know them.

                ## Notes
                Ask advisors which investors they would personally vouch for you with, not which they know. A lukewarm introduction can do more harm than none.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Advisors have reviewed the deck and model a month before the raise, changes are made, and agreed introductions are listed by advisor."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose which advisors have relevant fundraising experience"
                - "Share the deck, model and target list a month before the raise"
                - "Hold review calls and write down every change agreed"
                - "Ask each advisor which investors they would vouch for you with"
            - name: Advisor read of the launch plan
              description: |-
                ## Purpose
                Launch plans tend to be reviewed by people too close to them, and an advisor who has launched in your market can usually spot the missing channel or the wrong date in one read. Sending the plan for a focused review two to three weeks before launch, with three specific questions, gets that value without turning advisors into the launch team.

                ## Milestones
                1. The launch plan shared with one or two advisors who have launched in the market.
                2. Three specific questions included with the plan.
                3. Written answers received and the plan amended.
                4. A short thank-you sent after launch with the results.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One or two advisors have reviewed the launch plan against three specific questions, and their changes are reflected in the final plan."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick one or two advisors who have launched in your market"
                - "Write three specific questions to send with the plan"
                - "Amend the launch plan using their written answers"
                - "Send launch results and thanks to the reviewing advisors"
            - name: Yearly advisor dinner
              description: |-
                ## Purpose
                Once a year, a relaxed dinner with all current advisors and the founding team does what no update can: advisors meet each other, the team sees who backs the company, and goodwill builds for the hard year that may follow. A short toast naming one thing each advisor changed is enough structure.

                ## Milestones
                1. A date chosen that most advisors can make.
                2. A modest venue booked within budget.
                3. One specific contribution prepared for each advisor to mention.
                4. Photos and a thank-you message sent the following day.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One advisor dinner is held each year with most advisors attending and each thanked for a named contribution."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "Poll advisors for a dinner date @recurring(yearly)"
                - "Book a modest venue within the agreed budget"
                - "Prepare one named contribution to mention for each advisor"
                - "Send photos and thanks the next day"
            - name: Convening advisors for an urgent decision
              description: |-
                ## Purpose
                When a key customer leaves, a co-founder resigns or cash is suddenly short, founders often go quiet with advisors exactly when they are most useful. Having a short emergency protocol, with a two-paragraph situation summary, a call within 48 hours and a clear question, means the bench can help within days instead of hearing about it in the next update.

                ## Milestones
                1. A two-paragraph situation summary format written in advance.
                2. Advisors told that you may call on them at short notice and how.
                3. A call held within 48 hours of the event with a specific question.
                4. The decision and next steps sent to all advisors afterwards.

                ## Notes
                Decide in advance which advisors are trusted with what. A crisis is not the moment to work out the information rules.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written emergency protocol exists, and any urgent event is followed by an advisor call within 48 hours and a written decision summary."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a two-paragraph emergency situation summary format"
                - "Tell advisors how you would reach them at short notice"
                - "Name which advisors are trusted with which kinds of crisis"
                - "Save the protocol where you can find it on a bad day"
            - name: Solo founder's advisory bench as a sounding board
              description: |-
                ## Purpose
                Solo founders lack the daily co-founder argument that tests every important call, and a small bench of two or three advisors can partly fill that gap if the rhythm is closer than usual. A fortnightly short call with one rotating advisor and a clear rule on which decisions get run past them keeps judgement checked without handing over control.

                ## Milestones
                1. Two or three advisors chosen with the sounding-board role written into their cards.
                2. A list of decision types that always get an advisor view first.
                3. A rotating short call rhythm agreed with the advisors.
                4. A record of decisions tested and whether the advisor view changed them.

                ## Notes
                Advisors are not co-founders. Keep the final decision and the accountability with you, and say so explicitly in the role card.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A solo founder has two or three sounding-board advisors, a written list of decisions that get their view, and a monthly record of calls held."
                cadence: rolling
              tasks:
                - "Write the sounding-board role into two or three advisor cards"
                - "List the decision types that always get an advisor view first"
                - "Agree a rotating short call rhythm with those advisors"
                - "Log which decisions were tested and what changed @recurring(monthly:9)"
            - name: First-time founder's first advisor
              description: |-
                ## Purpose
                If you have never built a company before, the first advisor matters more than the next three, because they will shape how you read every early signal. Choosing one generalist operator who has been a founder, rather than three narrow specialists, and agreeing a monthly rhythm gives you a steady reference point while you learn what you do not know.

                ## Milestones
                1. A profile written for a generalist advisor who has founded a company.
                2. Three candidates met through warm introductions.
                3. One advisor chosen after a short trial.
                4. A monthly hour agreed and the first three topics listed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A first-time founder has one signed generalist advisor with a monthly hour booked and the first three topics agreed."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write the profile of a generalist advisor who has founded before"
                - "Ask two people you trust for warm introductions to candidates"
                - "Run a short trial with your preferred candidate"
                - "Book a monthly hour and list the first three topics"
            - name: Commercial advisor for a technical founding team
              description: |-
                ## Purpose
                Technical founding teams often build well and sell late, and the gap is rarely knowledge that a book can fill. An advisor who has sold to your buyer, sat in their procurement meetings and priced a similar product can shorten the first sales cycles by months, provided the role card asks for introductions and deal reviews rather than general strategy.

                ## Milestones
                1. The buyer, sales motion and typical deal size described in a paragraph.
                2. A role card focused on deal reviews, pricing feedback and buyer introductions.
                3. Candidates found among people who sold to that buyer recently.
                4. An advisor signed and the first live deal reviewed with them.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A commercial advisor who has sold to your buyer is signed and has reviewed at least one live deal with the founders."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Describe your buyer, sales motion and deal size in one paragraph"
                - "Write a role card centred on deal reviews and buyer introductions"
                - "Search for people who sold to that buyer in the last three years"
                - "Review the first live deal with the new advisor"
            - name: Remote advisors for a founder in a small market
              description: |-
                ## Purpose
                Founders in a small home market, such as an island economy or a smaller city, often need advisors who know the larger market they will sell into. Recruiting remotely and running the relationship across time zones works when the update is short and regular and calls are planned weeks ahead, and when you are honest that the advisor may never visit.

                ## Milestones
                1. The target market and the experience needed from it written down.
                2. Candidates found through diaspora networks, alumni groups and investors in that market.
                3. Time zone and preferred contact method agreed with each advisor.
                4. A short regular update rhythm running across the distance.

                ## Notes
                Ask your lawyer whether an advisor in another country needs a different agreement or has local tax consequences on the grant.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "At least one advisor from the target market is signed, with contact hours agreed and a monthly update running for three months."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write the target market and the experience you need from it"
                - "Ask diaspora networks and alumni groups for candidate names"
                - "Agree time zone overlap and contact method with each advisor"
                - "Send a short voice or text update to remote advisors @recurring(monthly:22)"
            - name: Regulated-sector advisor for health or finance
              description: |-
                ## Purpose
                Regulated founders building in health, financial services or education face licensing and compliance questions where a wrong early assumption can cost a year. An advisor who has held a compliance, clinical or regulatory role helps you ask the right questions of lawyers and regulators, while making clear they are not your legal or regulatory counsel.

                ## Milestones
                1. The main regulatory questions facing the company listed.
                2. A role card that separates advisory input from formal legal or compliance advice.
                3. An advisor with direct regulatory experience signed.
                4. A first session held to plan the questions for your lawyer and the regulator.

                ## Notes
                Keep formal compliance decisions with qualified counsel. The advisor helps you prepare and spot risk; they do not replace professional advice.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An advisor with regulatory experience is signed under a role card that excludes formal advice, and a list of questions for counsel exists."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the regulatory questions your company faces this year"
                - "Write a role card that excludes formal legal or compliance advice"
                - "Find candidates who held compliance or regulatory roles"
                - "Plan questions for your lawyer with the advisor in the first session"
            - name: Advisors for a bootstrapped company without a pool
              description: |-
                ## Purpose
                Without investors or an option pool, a bootstrapped company can still attract good advisors, but the offer has to look different: a small profit share, a paid annual review, a revenue-linked bonus or simply a strong relationship with a founder they like. Choosing the form that fits the company's cash and ownership plans keeps independence intact.

                ## Milestones
                1. The options listed: small equity grant, profit share, paid sessions or unpaid mentoring.
                2. Each option checked against your plan to stay independent.
                3. A chosen offer reviewed by your accountant or lawyer.
                4. The first advisor signed on the chosen terms.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A bootstrapped company has a written advisor offer reviewed by an accountant or lawyer and at least one advisor signed on those terms."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List compensation options that do not need an option pool"
                - "Check each option against your plan to stay independent"
                - "Ask your accountant how profit share or paid sessions are treated"
                - "Make the first offer on the chosen terms"
            - name: Advisor grants across borders
              description: |-
                ## Purpose
                Granting equity to an advisor who lives in another country can bring securities, tax and reporting questions in both places, and these are much easier to sort before the grant than after. Mapping where each advisor lives, what your lawyer says about each jurisdiction and what the advisor must check for themselves keeps every grant clean.

                ## Milestones
                1. Each advisor's country of residence recorded.
                2. Your lawyer's view on each jurisdiction captured in writing.
                3. Each advisor told in writing to take their own tax advice.
                4. Any required filings or approvals completed and stored in the register.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Every overseas advisor's grant has a written legal note on the jurisdiction, a record that they were told to seek their own tax advice and any filings stored."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Record the country of residence for every advisor"
                - "Ask your lawyer about grant requirements in each country"
                - "Tell each overseas advisor in writing to get their own tax advice"
                - "Store any required filings in the advisor register"
            - name: Advisor paperwork clean-up before a priced round
              description: |-
                ## Purpose
                Investors' lawyers will ask for every advisor agreement, approval and vesting record during due diligence, and gaps can delay a closing or force awkward last-minute signatures. Running your own check two or three months before a priced round finds unsigned agreements, unapproved grants and promises made in email, while there is time to fix them calmly.

                ## Milestones
                1. Every advisor promise, including emails and messages, listed.
                2. Each matched to a signed agreement and grant approval, or marked as a gap.
                3. Gaps fixed with your lawyer, including any ratifying resolutions.
                4. A clean advisor folder ready for the data room.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every advisor commitment is matched to signed, approved paperwork, and a complete advisor folder is ready before the round opens."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Search email and messages for any equity promised to advisors"
                - "Match every promise to a signed agreement and approval"
                - "Ask your lawyer to fix each gap, including any ratifications"
                - "Assemble a complete advisor folder for the data room"
            - name: Scientific advisory board for a deep tech company
              description: |-
                ## Purpose
                Deep tech companies often need a scientific advisory board to test technical claims, open doors to research groups and reassure specialist investors. Unlike a general bench, it works best with a clear technical charter, a yearly review of the research roadmap and careful handling of publication and intellectual property questions with the members' universities.

                ## Milestones
                1. A charter stating the technical questions the board is there to test.
                2. Three to five members chosen to cover the critical disciplines.
                3. Intellectual property and publication terms agreed with members and, where needed, their institutions.
                4. A first roadmap review held with written conclusions.

                ## Notes
                Academic members may need their university's approval for outside roles. Ask early, as it can take weeks.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A scientific advisory board has a written charter, three to five signed members with agreed IP terms and one completed roadmap review."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write the technical questions the scientific board should test"
                - "Choose three to five members covering the critical disciplines"
                - "Check each academic member's university rules for outside roles"
                - "Hold the first research roadmap review and record conclusions"
            - name: Advisor bench return on equity review
              description: |-
                ## Purpose
                Equity granted to advisors can end up worth more than a senior hire's salary, so once a year it is worth asking what the bench actually delivered. Comparing each advisor's grant against introductions, deals, hires and decisions shaped gives an honest view of where advisor equity has been well spent and where the next grant should go.

                ## Milestones
                1. Total advisor equity and each advisor's grant listed.
                2. A year of contributions summarised per advisor from the log.
                3. Each seat rated as strong, adequate or weak value with a reason.
                4. Lessons written down for how future grants are sized and scoped.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A yearly one-page review rates every advisor seat's value against its grant and records lessons for future grants."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "List total advisor equity and each grant"
                - "Summarise each advisor's year from the contribution log"
                - "Rate every seat as strong, adequate or weak value @recurring(yearly)"
                - "Write lessons for sizing and scoping future grants"
            - name: Next-stage advisor bench for scaling
              description: |-
                ## Purpose
                The advisors who helped find product-market fit are rarely the ones who know how to build a sales team of twenty or open a second country. Planning the next bench a year ahead, around the leaders you will hire and the problems of the next stage, lets the first advisors move gracefully to alumni while new operators arrive before the problems do.

                ## Milestones
                1. The next stage's main challenges listed, such as scaling sales, international expansion or a first executive team.
                2. A target bench of three or four seats designed for those challenges.
                3. A transition plan for current advisors, including alumni status where fitting.
                4. The first next-stage seat recruited.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written next-stage bench plan with three or four seats and a transition plan for current advisors exists, and the first new seat is filled."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the challenges of the company's next stage"
                - "Design three or four advisor seats for those challenges"
                - "Plan how current advisors move to new roles or alumni status"
                - "Start the search for the first next-stage seat"
---

# Startup Advisor Board

This area is for founders who want advisors who actually help, not a row of logos on a slide. It starts with foundations (a gap map, the right kind of help for each gap, role cards, an equity budget, a standard agreement with vesting, and a careful search and trial), then the routines that keep advisors useful, the skills of asking well and weighing advice, the decisions about who stays, who goes and who joins the board, the dated moments where advisors earn their equity, variants for solo, first-time, technical, remote, regulated and bootstrapped founders, and finally the specialist work of clean paperwork, scientific panels and the next-stage bench.

What repeats is a monthly advisor update, a monthly queue of specific asks, a Friday touchpoint log, quarterly one-to-ones and paperwork checks, and a yearly refresh of the whole bench. The **Person**, **1:1** and **Meeting notes** templates pair with the advisor tracker, the quarterly one-to-ones and the group advisory sessions. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
