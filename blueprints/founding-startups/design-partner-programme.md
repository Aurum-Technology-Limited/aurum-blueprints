---
id: founding-startups.design-partner-programme
name: Design Partner Programme
description: "A small cohort of early customers building the product with you: a clear partner profile, a fair agreement, a working cadence that keeps them engaged, honest triage of their requests and a planned route to paid contracts."
category: business
version: 1.0.0
tags: [founding-startups, design-partner-programme, founder, design-partners, early-customers, pilots, co-development, b2b]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - feedback-themes
    - metrics-log
    - product-spec
    - purchase-decision
  pillars:
    - name: Founding & Startups
      emoji: "🚀"
      description: "Starting and steering a young company: validating the idea, incorporating, finding product-market fit, the founder's operating rhythm, co-founder relationships, runway and the hard calls of the early years."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Design Partner Programme
          description: "Recruiting a handful of early customers as design partners, agreeing expectations and building the product closely alongside them."
          projects:
            - name: What the design partner programme must prove
              description: |-
                ## Purpose
                Founders often recruit design partners because it sounds like the right thing to do, then cannot say after six months what the programme taught them. Writing down the two or three bets the cohort must confirm or kill, such as whether a finance team will replace its spreadsheet workflow, turns every later session into a test rather than a chat.

                ## Milestones
                1. Two or three product bets written as statements the cohort can confirm or disprove.
                2. A time box for the programme, usually three to six months, agreed with co-founders.
                3. The evidence that would count as confirmation written beside each bet.
                4. A one-page programme brief shared with everyone who will talk to partners.

                ## Notes
                If you cannot name a bet the partners would test, you may still be in discovery. Finish that work first rather than asking partners to help you find the problem.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated one-page brief naming the bets, the evidence for each and the programme end date, agreed by all founders."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the product assumptions you most need real customers to test"
                - "Pick the two or three bets that would change the roadmap if wrong"
                - "Write the evidence that would confirm or kill each bet"
                - "Agree the programme end date with your co-founders"
            - name: Ideal design partner profile
              description: |-
                ## Purpose
                A design partner who is too big will drown you in procurement, and one who is too small will never become a real customer. A short profile covering company size, the role of the champion, the pain they feel weekly and their appetite for unfinished software stops you signing whoever says yes first.

                ## Milestones
                1. Firmographic limits written: size band, industry, geography and current tooling.
                2. The champion's role and seniority described, plus who signs off on spend.
                3. Three must-have traits and three disqualifiers listed.
                4. The profile tested against five real companies and adjusted.

                ## Notes
                The best partners feel the problem often, have a named owner for it and have tried at least one workaround. Interest without a workaround is usually curiosity.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A written partner profile with size limits, champion role, three must-haves and three disqualifiers, checked against five named companies."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the company size band and industries you will accept"
                - "Describe the champion role and who approves their spending"
                - "List three must-have traits and three disqualifiers"
                - "Score five real companies against the profile and revise it"
            - name: Design partner value exchange offer
              description: |-
                ## Purpose
                Partners give you hours of senior time, access to their workflow and honest criticism, so they need to know what they get back. Spelling out the exchange, such as early access, direct founder time, roadmap influence and a locked conversion discount, makes recruiting easier and stops partners expecting a free product forever.

                ## Milestones
                1. A list of what you ask of partners, with hours per month estimated.
                2. A list of what partners receive, each item something you can deliver.
                3. The offer written as a half-page summary a champion could forward to their boss.
                4. The offer reviewed by one friendly prospect and tightened.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A half-page partner offer stating the time asked, the benefits given and the end of the free period, reviewed by one prospect."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Estimate the partner hours per month the programme will need"
                - "List every benefit you can genuinely deliver to a partner"
                - "Write the half-page offer in plain language"
                - "Ask one friendly prospect what in the offer would worry their manager"
            - name: Cohort size and partner cap
              description: |-
                ## Purpose
                Every partner costs founder hours each week, and at ten partners most teams stop listening and start servicing. Choosing a cap now, typically three to eight, and writing why, gives you a reason to decline the eleventh eager company and keeps the cohort deep rather than wide.

                ## Milestones
                1. Founder and engineer hours available per week for partner work estimated.
                2. Hours each partner needs per month estimated from the offer.
                3. A cap on active partners chosen and written down with the reasoning.
                4. A waitlist rule agreed for companies that apply once the cap is reached.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written cap on active design partners, backed by an hours estimate, with a waitlist rule for extra applicants."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Count the founder and engineer hours free each week for partners"
                - "Divide by the hours each partner needs to find a realistic cap"
                - "Write the cap and the reasons in the programme brief"
                - "Agree how you will reply to companies once the cohort is full"
            - name: Target list of thirty candidate partners
              description: |-
                ## Purpose
                Conversion from first approach to signed partner is low, often one in five or worse, so a cohort of five needs a list of at least thirty named companies. Building the list from warm introductions, discovery interviewees and communities before any outreach saves weeks of scrambling.

                ## Milestones
                1. Thirty companies listed, each matched against the partner profile.
                2. A named person at each company, with how you are connected.
                3. Every entry tagged warm, lukewarm or cold.
                4. The ten best fits ranked for first approach.

                ## Notes
                People you interviewed during discovery are often the strongest candidates, because they already told you about the pain. Start there.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A list of thirty profile-matched companies with a named contact and connection strength, the top ten ranked."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull every discovery interviewee who matched the profile into the list"
                - "Ask three investors or advisers for named introductions"
                - "Tag each entry warm, lukewarm or cold"
                - "Rank the ten best fits for the first round of outreach"
            - name: Design partner agreement drafted with a lawyer
              description: |-
                ## Purpose
                A handshake partnership works until a partner assumes they own the feature they asked for, or their legal team blocks access to real data in month two. A short design partner agreement, reviewed by a startup lawyer in your country, sets the term, the commitments on both sides, feedback rights, confidentiality and what happens at the end.

                ## Milestones
                1. A list of the points the agreement must cover, agreed between founders.
                2. A draft of two to four pages from a template your lawyer is comfortable with.
                3. The draft reviewed by a lawyer and their comments resolved.
                4. A clean version saved with a short cover note explaining it in plain words.

                ## Notes
                Keep it short. A ten-page agreement sends a partner to their legal team for a month. Treat this as preparation for the lawyer, not a substitute for one.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A lawyer-reviewed design partner agreement of no more than four pages, plus a plain-language cover note, ready to send."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the points the agreement must cover, from term to exit"
                - "Ask two founder friends for the partner agreements they used"
                - "Book a fixed-fee review with a startup lawyer"
                - "Write a one-paragraph plain-language cover note for partners"
            - name: Feedback ownership and confidentiality terms
              description: |-
                ## Purpose
                If a partner's suggestion becomes a core feature, you need the right to sell it to everyone, and they need confidence that their workflow details will not show up in a competitor's demo. Agreeing a feedback licence and a mutual confidentiality clause in advance avoids the most common design partner dispute.

                ## Milestones
                1. The founders' position on who owns product changes inspired by feedback written down.
                2. A mutual confidentiality clause scoped to what each side actually shares.
                3. Both clauses checked by your lawyer as part of the agreement review.
                4. A short explanation prepared for partners who ask why the clause exists.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Feedback licence and confidentiality clauses approved by your lawyer and included in the partner agreement, with a plain explanation ready."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write your position on owning features that come from partner feedback"
                - "List what each side will share and needs kept confidential"
                - "Send both points to your lawyer with the agreement draft"
                - "Draft a two-sentence reply for partners who query the feedback clause"
            - name: Partner data handling and security answers
              description: |-
                ## Purpose
                The first partner worth having will send a security questionnaire before granting access to real data, and an unanswered one can stall the programme for weeks. Preparing honest answers on hosting, access control, backups, deletion and incident contact, plus a short data handling note, gets you through the gate without overclaiming.

                ## Milestones
                1. A plain inventory of what partner data the product will touch and where it is stored.
                2. Standard answers written for hosting, access, encryption, backups and deletion.
                3. Gaps listed honestly, each with a date or a reason it is out of scope.
                4. A one-page data handling note ready to attach to the agreement.

                ## Notes
                Never claim a certification or control you do not have. Partners forgive an early-stage gap far more readily than a discovered exaggeration.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page data handling note and a reusable answer set covering hosting, access, encryption, backups and deletion, with gaps dated."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every type of partner data the product will read or store"
                - "Ask the agent to draft standard answers from your hosting set-up notes"
                - "Mark each gap with a fix date or a reason it is out of scope"
                - "Write the one-page data handling note for the agreement pack"
            - name: Partner kickoff pack and success plan
              description: |-
                ## Purpose
                Partners who start without a shared definition of success drift within a month. A kickoff pack holding the agreement summary, contacts, the session schedule, the problem you are solving together and a one-page success plan per partner means every partnership starts the same way and can be judged later.

                ## Milestones
                1. A kickoff deck or document of no more than eight pages.
                2. A success plan template with the partner's goal, baseline measure and target.
                3. A contacts sheet naming the champion, the day-to-day user and your owner.
                4. The pack tried once on a friendly partner and adjusted.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reusable kickoff pack and success plan template, used with at least one partner and revised after that first use."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Outline the eight pages a partner needs on day one"
                - "Build a success plan template with goal, baseline and target"
                - "Add a contacts sheet with champion, daily user and your owner"
                - "Revise the pack after the first kickoff it is used in"
            - name: Design partner recruitment pipeline
              description: |-
                ## Purpose
                Recruiting stalls when outreach happens in bursts between product sprints. A simple pipeline with stages from first contact to signed agreement, worked on one fixed morning a week until the cohort is full, keeps a steady flow and shows where candidates drop out.

                ## Milestones
                1. Pipeline stages defined: contacted, call booked, fit confirmed, agreement sent, signed.
                2. Every candidate from the target list entered with a next step and date.
                3. A weekly outreach block held for four weeks in a row.
                4. Drop-off by stage reviewed and the weakest stage improved.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A pipeline with five defined stages, every candidate carrying a dated next step, and outreach logged weekly until the cohort cap is reached."
                cadence: rolling
              tasks:
                - "Set up the five pipeline stages in your CRM or a spreadsheet"
                - "Enter every target company with a next step and a date"
                - "Send this week's partner outreach and update every stage @recurring(weekly:mon)"
                - "Note which stage loses the most candidates and why"
            - name: Weekly partner working sessions
              description: |-
                ## Purpose
                Design partners only shape the product if they see it often, so most programmes hold a working session with each partner every week or two. A standing slot with a fixed agenda, something new to show, one question to answer and written notes, keeps the relationship productive rather than polite.

                ## Milestones
                1. A recurring slot booked with every active partner.
                2. A standard agenda used in every session: show, ask, listen, agree next step.
                3. Notes from each session saved within a day in a shared place.
                4. Attendance and cancellations tracked so drifting partners stand out.

                ## Notes
                Start from the **Meeting notes** template. Bring something to react to every time, even a sketch. Partners give far better feedback on a thing than on an idea.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every active partner has a booked recurring session and at least 80 percent of sessions in a month have notes saved within a day."
                cadence: rolling
              tasks:
                - "Book a recurring session slot with each active partner"
                - "Write the four-part session agenda and reuse it"
                - "Prepare this week's demo item and question for each partner @recurring(weekly:wed)"
                - "Log attendance so repeated cancellations are visible"
            - name: Partner feedback log and tagging
              description: |-
                ## Purpose
                Feedback scattered across call notes, chat threads and emails is invisible when you plan the next sprint. One log where every request, complaint and praise is entered with the partner, the problem behind it and a tag lets you count patterns instead of remembering the loudest voice.

                ## Milestones
                1. A single feedback log with fields for partner, quote, underlying problem and tag.
                2. A short tag list agreed, no more than fifteen tags.
                3. Every session and channel thread from the last month entered.
                4. A monthly roll-up showing the top themes by number of partners.

                ## Notes
                Start from the **Feedback themes** template. Count partners, not mentions: one partner raising something nine times is still one partner.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A feedback log with every partner input from the last month tagged, and a monthly theme roll-up ranked by number of partners."
                cadence: rolling
              tasks:
                - "Create the log with partner, quote, problem and tag fields"
                - "Agree a tag list of no more than fifteen tags"
                - "Enter and tag this week's partner feedback from sessions and chat @recurring(weekly:fri)"
                - "Roll up the month's top themes by number of partners @recurring(monthly:12)"
            - name: Weekly product update note to partners
              description: |-
                ## Purpose
                Partners who never hear what happened to their feedback stop giving it. A short weekly note listing what shipped, what changed because of a named partner, what is next and what you need from them closes the loop and gives champions something to forward inside their own company.

                ## Milestones
                1. A note format of five short sections agreed.
                2. Four consecutive weekly notes sent.
                3. At least one item per note credited to a partner's feedback, with their permission.
                4. Partner replies to the note tracked as feedback.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A partner update note sent every week for a month, each crediting at least one change to partner feedback."
                cadence: rolling
              tasks:
                - "Write the five-section note format"
                - "Ask each partner whether they are happy to be credited by name"
                - "Send the weekly partner update note @recurring(weekly:mon)"
                - "Copy partner replies into the feedback log"
            - name: Partner usage and health tracking
              description: |-
                ## Purpose
                A partner who praises the product in sessions but logs in twice a month is telling you something the meetings will not. Tracking a few usage signals per partner, such as weekly active users, the core action completed and time since last login, beside a simple health score shows who is really adopting.

                ## Milestones
                1. Three usage signals chosen that reflect real adoption of the core workflow.
                2. A per-partner view of those signals updated automatically or weekly.
                3. A red, amber or green health score defined with clear thresholds.
                4. Any partner on red for two weeks discussed with their champion.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A per-partner usage view with three signals and a defined health score, checked weekly, with every red partner contacted within two weeks."
                cadence: rolling
              tasks:
                - "Pick three usage signals that show the core workflow in use"
                - "Build a per-partner view of the three signals"
                - "Check each partner's usage signals and note any change @recurring(weekly:thu)"
                - "Score every partner red, amber or green and act on reds @recurring(monthly:3)"
            - name: Partner request triage
              description: |-
                ## Purpose
                Expect partners to ask for far more than a small team can build, and saying yes to everything turns the product into a bundle of one-off features. A fixed triage step that sorts every request into now, next, later or no, against the programme bets, keeps the roadmap yours while showing partners their asks were weighed.

                ## Milestones
                1. Triage criteria written: fit with the bets, number of partners affected, effort.
                2. Every open partner request given one of four outcomes.
                3. The reason for each no recorded in a sentence.
                4. A monthly roadmap check showing how many items came from partners.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every partner request older than a week carries a now, next, later or no outcome with a recorded reason."
                cadence: rolling
              tasks:
                - "Write the three triage criteria in the programme brief"
                - "Triage new partner requests into now, next, later or no @recurring(weekly:tue)"
                - "Record the reason for every no in one sentence"
                - "Review how much of the roadmap came from partner requests @recurring(monthly:8)"
            - name: Shared partner channels and response times
              description: |-
                ## Purpose
                Most programmes run a shared chat channel with each partner, and a question left unanswered for two days tells a partner they are not a priority. Agreeing response times, who watches the channels and how bugs are logged keeps the channel useful and protects engineers from constant interruption.

                ## Milestones
                1. A shared channel or group set up with each active partner.
                2. A response time promise written and shared, for example same working day.
                3. One person named each week to watch the channels.
                4. Bug reports from channels moved into the issue tracker with a link back.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every active partner has a shared channel, a published response time and a named weekly owner, with bugs logged in the tracker."
                cadence: rolling
              tasks:
                - "Open a shared channel with each active partner"
                - "Publish your response time promise in each channel"
                - "Name this week's channel owner on a rota"
                - "Clear every unanswered partner channel message before end of day @recurring(daily)"
            - name: Monthly partner commitments check
              description: |-
                ## Purpose
                Design partnerships are two-way, and partners quietly stop doing their part: sessions get skipped, the promised data never arrives, the champion delegates to an intern. A monthly check of each partner's commitments against the agreement lets you raise it early and kindly instead of resenting it.

                ## Milestones
                1. Each partner's commitments listed from the agreement and kickoff.
                2. A monthly score of kept, partly kept or missed for each commitment.
                3. Any partner missing two commitments raised with their champion.
                4. Your own commitments to partners scored the same way.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Commitments for every partner, and your own, are scored monthly, and any partner missing two is raised with their champion within a week."
                cadence: rolling
              tasks:
                - "List each partner's commitments from the agreement and kickoff"
                - "Score every partner's commitments and your own @recurring(monthly:15)"
                - "Raise any two missed commitments with the champion in your next session"
                - "Note patterns in missed commitments for the programme review"
            - name: Quarterly design partner programme review
              description: |-
                ## Purpose
                Left alone, a programme can run on autopilot for months while the original bets go untested. A quarterly review asking which bets moved, which partners are worth keeping, what the cohort is costing in founder hours and whether the end date still holds keeps the programme honest.

                ## Milestones
                1. Each programme bet marked confirmed, disproved or still open, with the evidence.
                2. Each partner rated keep, change or exit.
                3. Founder and engineering hours spent on partners totalled for the quarter.
                4. Decisions recorded and the programme brief updated.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A dated quarterly review recording the status of every bet, a keep, change or exit call for every partner, and the hours spent."
                cadence: cyclic
              tasks:
                - "Hold the quarterly programme review with all founders @recurring(quarterly)"
                - "Mark each bet confirmed, disproved or open with the evidence"
                - "Rate every partner keep, change or exit"
                - "Update the programme brief with the decisions taken"
            - name: Partner champion and stakeholder map
              description: |-
                ## Purpose
                Design partnerships usually rest on one enthusiastic champion, and when that person changes job the partnership often dies with them. Mapping the champion, the daily users, the budget holder and any blockers at each partner, and checking it monthly, shows where a partnership is fragile before it breaks.

                ## Milestones
                1. A map per partner naming champion, users, budget holder and known sceptics.
                2. At least two relationships beyond the champion at every partner.
                3. A monthly check for role changes, departures and new stakeholders.
                4. A plan for any partner resting on a single person.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every partner has a stakeholder map with at least two named relationships beyond the champion, reviewed monthly."
                cadence: rolling
              tasks:
                - "Draw a stakeholder map for each partner"
                - "Ask each champion who else should see the product"
                - "Check every partner map for role changes and departures @recurring(monthly:22)"
                - "Write a plan for any partner held up by one person"
            - name: Writing the design partner pitch
              description: |-
                ## Purpose
                Asking a busy operations lead to give you an hour a week for an unfinished product is a big ask, and generic outreach gets ignored. A pitch that names their specific pain, shows you understand their workflow, states the time asked and the benefit, and asks for a short call converts far better than a feature list.

                ## Milestones
                1. A pitch of under 150 words for warm introductions and one for cold outreach.
                2. Two versions tested with five prospects each.
                3. Reply and call-booked rates recorded for each version.
                4. The stronger version kept and the weaker one rewritten.

                ## Notes
                Lead with their problem and the evidence you already have, not with the product. Say plainly that the product is early; the right partners find that appealing.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Two tested pitch versions with recorded reply and booking rates, and a chosen version in use for outreach."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write a 150-word pitch naming the partner's pain and the time asked"
                - "Write a second version that opens with evidence from discovery"
                - "Send each version to five prospects and log the replies"
                - "Compare pitch reply and booking rates and rewrite the weaker one @recurring(monthly:20)"
            - name: Facilitating a partner working session
              description: |-
                ## Purpose
                Founders tend to spend partner sessions demoing and defending, which teaches them nothing. Practising a few facilitation habits, such as handing over control, asking the partner to narrate their real task and staying quiet through confusion, turns the same hour into usable evidence.

                ## Milestones
                1. A list of five facilitation habits to practise, kept beside the agenda.
                2. Three sessions recorded with permission and reviewed for talk time.
                3. Founder talk time brought below half of each session.
                4. One teammate taught the same habits.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three recorded sessions reviewed, with founder talk time under 50 percent in the last one, and the habits written down for the team."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write five facilitation habits on a card for your next session"
                - "Ask a partner's permission to record a working session"
                - "Measure how much of the recording you were the one talking"
                - "Run a teammate through the habits before their first session"
            - name: Separating cohort signal from one-partner requests
              description: |-
                ## Purpose
                The partner who shouts loudest is rarely representative, and building their custom workflow can make the product worse for the other four. Learning to ask what problem sits behind each request, and whether other partners share it, is the core skill that keeps a design partner programme from becoming a consulting business.

                ## Milestones
                1. Ten recent requests rewritten as the underlying problem.
                2. Each problem checked against the other partners in the next round of sessions.
                3. Requests sorted into shared, partly shared and single-partner.
                4. A rule agreed for when a single-partner request can still be built.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten requests rewritten as problems, each tested with the other partners, and a written rule for single-partner requests."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Rewrite ten recent partner requests as the problem behind them"
                - "Ask the other partners about each problem in their next session"
                - "Sort the requests into shared, partly shared and single-partner"
                - "Write the rule for when a single-partner request can be built"
            - name: Prototype walkthroughs with partner users
              description: |-
                ## Purpose
                Before engineering spends a sprint on a new flow, a clickable prototype put in front of three partner users usually catches the misunderstanding that would have cost a month. Running short task-based walkthroughs with the people who will actually use the screen, not just the champion, is a skill worth practising early.

                ## Milestones
                1. One upcoming feature turned into a clickable prototype.
                2. Three realistic tasks written for users to attempt.
                3. Walkthroughs held with at least three partner users from two partners.
                4. Findings summarised and the prototype changed before build starts.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Walkthroughs with three or more partner users completed and a findings summary that changed the prototype before engineering began."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick the next feature that will cost more than a week to build"
                - "Write three tasks a partner user would really do in it"
                - "Book three twenty-minute walkthroughs with daily users"
                - "Summarise where users got stuck and change the prototype"
            - name: Problem statements from partner feedback
              description: |-
                ## Purpose
                Engineers given a raw quote like "we need an export button" build exactly that, while a problem statement explaining who needs the data, where it goes and why leads to a better solution. Turning the top feedback themes into short problem statements makes partner input usable by the whole team.

                ## Milestones
                1. A problem statement format agreed: who, situation, current workaround, cost.
                2. The top three feedback themes each written as a problem statement.
                3. Each statement linked to the partner evidence behind it.
                4. One statement taken through to a spec and built.

                ## Notes
                Start from the **Product spec** template once a statement is ready to build.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Three problem statements in the agreed format, each linked to partner evidence, and one taken through to a written spec."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Agree a four-part problem statement format with your engineers"
                - "Ask the agent to draft problem statements from the top three themes"
                - "Link each statement to the partner notes that support it"
                - "Take one statement through to a spec for the next sprint"
            - name: Saying no to a partner and keeping them
              description: |-
                ## Purpose
                Refusing a request from a partner who gave you their time feels ungrateful, so founders hedge with "maybe later" and the partner keeps waiting. Practising a clear, warm no that explains the reasoning and offers a workaround keeps trust higher than a vague promise that never ships.

                ## Milestones
                1. A short script for declining a request, with reasoning and an alternative.
                2. Three real declines delivered in sessions rather than in writing.
                3. Partner reactions noted and the script adjusted.
                4. No open request left on maybe for more than a month.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three declines delivered live using the script, and no partner request sitting undecided for over a month."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write a four-sentence script for declining a partner request"
                - "Find every request currently parked as maybe"
                - "Deliver the next three declines in a live session"
                - "Adjust the script after hearing how partners responded"
            - name: Spotting a partner going quiet
              description: |-
                ## Purpose
                Disengaged partners rarely announce it; they reschedule, answer slower and send a junior colleague. Learning the early signals and having a standard response, such as a direct question to the champion about priorities, lets you rescue or release a partner in weeks rather than months.

                ## Milestones
                1. A list of five early disengagement signals relevant to your partners.
                2. A monthly scan of every partner against the list.
                3. A standard check-in message for a partner showing two or more signals.
                4. Each quiet partner either re-engaged or moved toward exit within a month.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every partner scanned monthly against five written signals, and each partner showing two or more contacted within a week."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write five signs that a partner is losing interest"
                - "Scan every partner against the disengagement signals @recurring(monthly:27)"
                - "Draft a direct check-in message for a quiet champion"
                - "Decide re-engage or exit for each quiet partner within a month"
            - name: Paid or free design partnership decision
              description: |-
                ## Purpose
                Free partnerships recruit faster but attract partners with nothing at stake, while a modest fee filters for real pain and makes conversion easier later. Weighing the trade-off for your market, and choosing free, paid pilot or refundable deposit, is a decision worth making on purpose rather than by default.

                ## Milestones
                1. The three options written with their pros and cons for your buyers.
                2. Advice gathered from two founders who ran programmes in a similar market.
                3. A choice made and the reasoning recorded.
                4. The partner offer and agreement updated to match.

                ## Notes
                Setting the actual price list belongs with pricing work. This decision is only whether partners pay anything during the programme.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice between free, paid pilot or deposit, with reasons and two founder conversations behind it, reflected in the offer."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the pros and cons of free, paid pilot and deposit"
                - "Ask two founders in a similar market what they charged partners"
                - "Record the choice and the reasons in the programme brief"
                - "Update the offer and agreement to reflect the choice"
            - name: Conversion terms written into the agreement
              description: |-
                ## Purpose
                The awkward moment in most programmes is month five, when the founder has to ask a partner who has had the product free to start paying. Writing the conversion trigger, the timing and a partner discount into the agreement on day one turns that moment into a scheduled step both sides expected.

                ## Milestones
                1. A conversion trigger chosen, such as an end date or a named milestone.
                2. A partner discount and how long it lasts written down.
                3. The conversion clause added to the agreement and checked by your lawyer.
                4. The conversion step explained in the kickoff pack.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The partner agreement names a conversion trigger, date and partner discount, and the kickoff pack explains it in plain words."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose the trigger that ends the free or pilot period"
                - "Decide the partner discount and how long it applies"
                - "Send the conversion clause to your lawyer with the agreement"
                - "Add a conversion section to the kickoff pack"
            - name: Time to first value for new partners
              description: |-
                ## Purpose
                If a new partner needs three weeks of set-up before seeing anything useful, enthusiasm fades before the first real session. Measuring the days from signature to the first moment the product does something they value, then cutting the slowest steps, makes every later partner easier to win and keep.

                ## Milestones
                1. First value defined in one sentence for your product.
                2. Days from signature to first value measured for every current partner.
                3. The two slowest set-up steps identified.
                4. Those steps shortened and the next partner measured again.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Time to first value measured for every partner and reduced for the next new partner after two set-up steps were shortened."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write what first value means for a partner in one sentence"
                - "Count days from signature to first value for each partner"
                - "Pick the two slowest set-up steps to shorten"
                - "Measure the next new partner against the old number"
            - name: Replacing a disengaged design partner
              description: |-
                ## Purpose
                Holding on to a partner who no longer shows up costs you a slot, founder hours and skewed feedback. Ending the partnership politely under the agreement's exit terms and backfilling from the waitlist keeps the cohort useful and is far kinder than letting it fade.

                ## Milestones
                1. The decision to exit made in the programme review with evidence.
                2. A respectful exit conversation held with the champion.
                3. Access, data and any shared channels closed out under the agreement.
                4. A replacement chosen from the waitlist or pipeline.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "The exited partner's access and data closed out as the agreement requires, and a replacement signed or in the pipeline within a month."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the evidence for exiting the partner in the review notes"
                - "Hold the exit conversation with the champion by call"
                - "Close access and handle partner data as the agreement says"
                - "Approach the top waitlist candidate for the open slot"
            - name: Cohort mix and bias check
              description: |-
                ## Purpose
                Four partners who all share the same founder's network, size and tooling can make a niche look like a market. Checking the mix for size, industry, region and technical maturity shows whether your evidence will hold beyond the friends who signed first.

                ## Milestones
                1. Every partner tabulated by size, industry, region and maturity.
                2. Clusters and gaps in the mix identified.
                3. The next recruitment aimed at the most important gap.
                4. Findings from the cohort marked where they may not generalise.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table of partners by four attributes, a named gap, and the next recruitment target chosen to fill it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Tabulate every partner by size, industry, region and maturity"
                - "Mark where the cohort clusters and where it has gaps"
                - "Aim the next outreach at the most important gap"
                - "Flag findings that may only hold for the clustered partners"
            - name: Choosing tools for partner feedback and support
              description: |-
                ## Purpose
                Some teams run the programme from a spreadsheet and a chat app; others buy a feedback portal too early and spend more time configuring it than talking to partners. Comparing two or three options against the cohort size and what the team will actually maintain settles the question for the next six months.

                ## Milestones
                1. Requirements written: number of partners, channels, who updates the log.
                2. Two or three options compared, including the spreadsheet you already have.
                3. A choice made with the cost and the review date recorded.
                4. The chosen set-up running for every partner.

                ## Notes
                Start from the **Purchase decision** template. Below about eight partners, simple shared tools are usually enough.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded tooling choice comparing at least two options, with cost and a review date, in use for every active partner."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the requirements for logging and answering partner feedback"
                - "Compare the spreadsheet you have with one or two paid tools"
                - "Record the choice, its monthly cost and a review date"
                - "Move every partner's feedback into the chosen set-up"
            - name: Logo, quote and case study rights
              description: |-
                ## Purpose
                Logos on your website and quotes in your deck are worth a great deal, but many companies need marketing or legal approval to grant either. Asking early, with a clear request and a draft to approve, makes the rights part of the relationship rather than an awkward favour at the end.

                ## Milestones
                1. A list of the rights you want: logo, quote, named case study, reference calls.
                2. Each partner asked which they could grant and who must approve.
                3. Approvals in writing for whatever each partner agrees.
                4. A record of what you may use for each partner and any conditions.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written record of the logo, quote, case study and reference rights each partner has approved, with approvals saved."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the four marketing rights you would like from partners"
                - "Ask each champion who in their company approves logo use"
                - "Send each partner a draft quote to approve or edit"
                - "Record the approved rights and conditions for every partner"
            - name: First design partner kickoff meeting
              description: |-
                ## Purpose
                Your first kickoff sets the pattern for every partnership that follows, and a scrappy one leaves the partner unsure what they signed up for. Running it with the kickoff pack, the right people from both sides and a success plan agreed by the end of the hour starts the cohort with momentum.

                ## Milestones
                1. The meeting booked with the champion, a daily user and your product owner.
                2. The kickoff pack sent two days before.
                3. A success plan with a goal, baseline and target agreed in the meeting.
                4. The first working session booked before the call ends.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Kickoff held with champion and a daily user present, a signed-off success plan and the first working session in the calendar."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Book the kickoff with the champion and a daily user"
                - "Send the kickoff pack two days before the meeting"
                - "Agree the success plan goal, baseline and target in the meeting"
                - "Book the first working session before hanging up"
            - name: Partner roundtable day
              description: |-
                ## Purpose
                Peers teach partners as much as you do, and hearing peers describe the same pain is strong evidence for both sides. A half-day roundtable, in person or online, where partners see the roadmap and react together, deepens commitment and often surfaces a shared priority one-to-one sessions missed.

                ## Milestones
                1. A date chosen that at least three partners can attend.
                2. An agenda covering roadmap, a live demo and one facilitated discussion.
                3. Permission confirmed for partners to meet each other, given confidentiality terms.
                4. Notes and agreed priorities sent to all partners within two days.

                ## Notes
                Check the confidentiality terms before introducing partners who may be competitors. Some will prefer to attend anonymously or not at all.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A roundtable attended by at least three partners, with notes and the agreed priorities sent within two days."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Poll partners for a half-day date that suits at least three"
                - "Check whether any partners compete and need anonymity"
                - "Draft the agenda of roadmap, demo and discussion"
                - "Send notes and agreed priorities within two days of the event"
            - name: First live rollout with a design partner
              description: |-
                ## Purpose
                Moving a partner from a sandbox to their real work is the point where the product starts teaching you about reliability, permissions and edge cases. Planning the rollout with the partner, with a named support contact, a rollback route and a check-in after the first week, protects the relationship when something breaks.

                ## Milestones
                1. A rollout plan agreed with the partner, including scope and date.
                2. A rollback or fallback route the partner understands.
                3. A named support contact on your side for the first two weeks.
                4. A one-week check-in held and issues logged.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A partner running real work on the product, with an agreed rollback route and a one-week check-in completed."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Agree the rollout scope and date with the partner's champion"
                - "Write the fallback route if the rollout has to be reversed"
                - "Name the support contact for the first two weeks"
                - "Hold the one-week check-in and log every issue raised"
            - name: Ninety-day partnership checkpoint
              description: |-
                ## Purpose
                Three months in, each partnership should have moved its success plan measure and given you clear evidence on the programme bets. A formal checkpoint with each champion, reviewing the plan, the usage and the next quarter, is the natural place to recommit, adjust or part ways.

                ## Milestones
                1. Each partner's success plan measure compared with its baseline.
                2. Usage and commitment scores for the quarter summarised.
                3. A checkpoint call held with every champion.
                4. A recommit, adjust or exit outcome recorded for each partner.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A checkpoint held with every partner by day 120, each with a recorded recommit, adjust or exit outcome."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Compare each partner's success measure with its baseline"
                - "Summarise each partner's usage and commitment scores"
                - "Book a checkpoint call with every champion"
                - "Record recommit, adjust or exit for each partner"
            - name: Conversion to a paid contract
              description: |-
                ## Purpose
                Converting design partners to paying customers is the clearest proof the programme worked, and the step most founders put off. Preparing each conversion with the value the partner has seen, the terms already in the agreement and the buyer's approval process makes the ask straightforward.

                ## Milestones
                1. A value summary per partner showing results against the success plan.
                2. The buyer and approval steps at each partner identified.
                3. A conversion proposal sent using the agreed terms and discount.
                4. Each partner signed, extended with a date, or released.

                ## Notes
                If a partner will not pay anything after months of use, treat that as evidence about the product, not just about the partner.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "Every partner has a recorded conversion outcome: signed, extended to a fixed date or released, with the reason."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write a one-page value summary for each partner"
                - "Ask each champion who approves the purchase and how long it takes"
                - "Send the conversion proposal with the agreed partner discount"
                - "Record each outcome and the reason in the programme brief"
            - name: Programme graduation and reference customers
              description: |-
                ## Purpose
                Ending the programme properly, with a thank-you, a clear move to normal customer terms and a short list of partners willing to take reference calls, turns early goodwill into lasting sales assets. Without a graduation, partners drift between special treatment and ordinary support for months.

                ## Milestones
                1. A graduation date set and communicated to every partner.
                2. A handover from programme cadence to normal customer support agreed.
                3. At least two partners agreed to take reference calls.
                4. A thank-you sent to every partner, including those who left.
              priority: medium
              deadlineOffsetDays: 240
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every partner moved to normal terms by the graduation date, with at least two confirmed reference customers."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Set the graduation date and tell every partner"
                - "Agree how each partner moves to normal customer support"
                - "Ask your strongest partners to take two reference calls a quarter"
                - "Send a personal thank-you to every partner"
            - name: Design partners as a solo technical founder
              description: |-
                ## Purpose
                Running working sessions, support channels and engineering alone means a cohort of five can eat the whole week. A solo founder needs a smaller cap, batched sessions on fixed days and firmer limits on channel response, so building still happens between partner calls.

                ## Milestones
                1. A cohort cap of two to four partners set.
                2. All partner sessions batched onto one or two fixed days.
                3. Channel response windows published, for example twice a day.
                4. Weekly build hours protected and tracked for a month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No more than four active partners, sessions held on fixed days, and at least 20 protected build hours a week kept for a month."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Set a cohort cap of no more than four partners"
                - "Move every partner session onto one or two fixed days"
                - "Publish twice-daily channel response windows to partners"
                - "Track protected build hours each week for a month"
            - name: Enterprise design partner with procurement
              description: |-
                ## Purpose
                Signing a large company as a design partner brings credibility and a demanding use case, but also vendor onboarding, security review and legal redlines that can take a quarter. Mapping their process up front and agreeing a lightweight path with the champion stops a prestigious partner from consuming the whole programme.

                ## Milestones
                1. The partner's vendor onboarding steps and owners listed.
                2. A lighter route agreed where possible, such as a pilot under a short agreement.
                3. Security and legal reviews started in parallel, not in sequence.
                4. A date agreed by which the partnership starts or is dropped.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A mapped procurement path with owners and a go or drop date, and the partnership live or declined by that date."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask the champion to list every vendor onboarding step and owner"
                - "Propose a short pilot agreement as a lighter route"
                - "Start security and legal reviews in the same week"
                - "Agree a date by which the partnership starts or is dropped"
            - name: Design partners for a hardware pilot
              description: |-
                ## Purpose
                Hardware design partners cannot simply log in: units have to be built, shipped, installed and sometimes recovered, and each revision costs real money. Planning the pilot fleet, the install and return logistics, and how firmware or design changes reach partners keeps a physical programme from stalling on logistics.

                ## Milestones
                1. The number of pilot units per partner and total fleet cost agreed.
                2. Install, support and return steps written for each site.
                3. A way to collect field data and failures from every unit.
                4. A rule for when partners receive revised units.

                ## Notes
                Agree in writing who owns and insures pilot units while they sit at a partner's site, and what happens to them at the end.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A pilot plan covering unit numbers, cost, install, field data, returns and revision rules, agreed with every hardware partner."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Agree pilot unit numbers per partner and the total fleet cost"
                - "Write install, support and return steps for each partner site"
                - "Set up a way to log field failures from every unit"
                - "Decide when partners receive revised units"
            - name: Design partners for an AI product
              description: |-
                ## Purpose
                With an AI product, partners judge quality on their own messy data, and a demo that shone on your examples can disappoint on theirs. Agreeing what partner data may be used for evaluation, building a small shared test set of their real cases and reporting quality on it regularly gives both sides an honest picture.

                ## Milestones
                1. Written agreement on what partner data may be used, and whether for training.
                2. A test set of twenty to fifty real partner cases with expected outcomes.
                3. Quality on the test set measured and shared with each partner.
                4. Regressions caught on the test set before releases reach partners.

                ## Notes
                Never use partner data to train or tune models unless the agreement explicitly allows it. Many partners will allow evaluation but not training.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A partner-approved test set of at least twenty real cases, with quality results shared monthly and checked before each release."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Confirm in writing what each partner's data may be used for"
                - "Collect twenty real cases from partners with expected outcomes"
                - "Rerun the partner test set and share the quality results @recurring(monthly:18)"
                - "Block releases that fall below the last result on the test set"
            - name: Design partners during a fundraise
              description: |-
                ## Purpose
                Investors at pre-seed and seed often call design partners, and a champion caught unprepared can undersell months of good work. Asking which partners are willing to talk, briefing them on what investors tend to ask, and limiting calls to protect their time turns the cohort into fundraising evidence without straining it.

                ## Milestones
                1. Two or three partners agreed to take investor calls.
                2. A short briefing sent covering the likely questions.
                3. A cap on calls per partner agreed and respected.
                4. A thank-you and update sent to each partner after the round.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "At least two briefed partners available for investor calls, with a call cap agreed and never exceeded during the round."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask your strongest partners whether they would speak to investors"
                - "Send a one-page briefing on the questions investors ask"
                - "Agree a maximum number of investor calls per partner"
                - "Thank each partner and share the outcome after the round"
            - name: Partners from a former employer's network
              description: |-
                ## Purpose
                Founders often find their first partners among old colleagues and their former employer's customers, which is fast but can breach non-solicitation or confidentiality terms. Checking your employment obligations and keeping clear of anything learned confidentially before approaching them avoids a dispute that could sink the company.

                ## Milestones
                1. Your former employment contract checked for non-solicitation and confidentiality terms.
                2. A list of candidate partners marked safe, check first or avoid.
                3. Legal advice taken on any check-first names.
                4. Outreach to safe names using only what you know publicly.

                ## Notes
                This is organisational preparation, not legal advice. Ask a lawyer in your country if any term is unclear.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every former-network candidate marked safe, check first or avoid, with legal advice recorded for each check-first name."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find your last employment contract and read the restrictive terms"
                - "Mark each former-network candidate safe, check first or avoid"
                - "Take legal advice on every check-first name"
                - "Approach safe names using only public information"
            - name: Design partners in a regulated industry
              description: |-
                ## Purpose
                In healthcare, financial services or public sector work, a design partner may need approvals before staff can even look at an unfinished tool. Learning the partner's compliance gates early, using synthetic or anonymised data where possible and keeping a record of what was shared protects both sides and the programme's timeline.

                ## Milestones
                1. The partner's internal approvals for trying new software listed.
                2. A data plan using synthetic or anonymised data for early sessions.
                3. A log of every dataset or document shared in either direction.
                4. The partner's compliance contact briefed on the programme.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A written list of the partner's approval gates, a synthetic or anonymised data plan and a sharing log kept from day one."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the champion which internal approvals new software needs"
                - "Prepare synthetic or anonymised data for the first sessions"
                - "Start a log of every dataset shared in either direction"
                - "Brief the partner's compliance contact on the programme"
            - name: Co-development and joint IP arrangements
              description: |-
                ## Purpose
                Occasionally a partner wants to fund or co-build a component, which brings revenue and depth but raises questions about who owns the result and whether competitors can buy it. Mapping the options, such as funded features you own outright or a limited exclusivity window, before negotiating keeps the core product yours.

                ## Milestones
                1. The partner's proposal written up with what they would fund or build.
                2. Options listed: you own outright, time-limited exclusivity, joint ownership.
                3. Each option checked with your lawyer and an investor or adviser.
                4. A position agreed and the outcome recorded in the agreement.

                ## Notes
                Joint ownership of core IP can worry future investors and acquirers. Get advice before agreeing anything beyond a short exclusivity window.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written position on ownership and exclusivity, checked with a lawyer, and the agreed terms recorded in a signed amendment or declined."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write up exactly what the partner proposes to fund or build"
                - "List the ownership and exclusivity options with their risks"
                - "Review the options with your lawyer and one adviser"
                - "Record the agreed position or the reason you declined"
            - name: Product vision shaped by the cohort
              description: |-
                ## Purpose
                After months with partners, you know more about the problem than any pitch deck says, but the learning sits in logs and memory. Writing a short product vision grounded in partner evidence, and testing it with two champions, gives the team and investors a direction that real customers recognise.

                ## Milestones
                1. The confirmed and disproved programme bets summarised on one page.
                2. A two-page vision drafted, each claim linked to partner evidence.
                3. Two champions asked whether the vision matches their reality.
                4. The vision shared with the team and refreshed each quarter.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A two-page vision document with partner evidence behind each claim, reviewed by two champions and refreshed quarterly."
                cadence: cyclic
                effort_hours_estimate: "8"
              tasks:
                - "Summarise the confirmed and disproved bets on one page"
                - "Ask the agent to draft a two-page vision from the feedback themes"
                - "Test the vision with two champions in their next sessions"
                - "Refresh the vision with new partner evidence @recurring(quarterly)"
            - name: Second cohort designed from first cohort lessons
              description: |-
                ## Purpose
                First cohorts are usually recruited from whoever was closest, and the second can be chosen deliberately. Using what the first group taught you about partner profile, time cost, conversion and the bets still open to design a sharper second cohort makes the next round faster and the evidence stronger.

                ## Milestones
                1. Lessons from the first cohort written up: what worked, what to change.
                2. The partner profile and offer revised.
                3. New bets chosen for the second cohort.
                4. A target list and start date set for the second cohort.
              priority: low
              deadlineOffsetDays: 270
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A written lessons note, revised profile and offer, new bets and a dated start for the second cohort."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write the first cohort lessons under keep, change and drop"
                - "Revise the partner profile and offer from those lessons"
                - "Choose the bets the second cohort must test"
                - "Build the second target list and set a start date"
            - name: Design partner playbook for the team
              description: |-
                ## Purpose
                Once early hires start running partner sessions, the founders' habits need to live somewhere other than their heads. A short playbook covering the profile, the offer, the agreement, the session agenda, triage rules and conversion steps lets someone new run a partnership to the same standard.

                ## Milestones
                1. A playbook of under ten pages covering recruiting to graduation.
                2. Links to every template, script and agreement in one place.
                3. A new team member run through it and running one partnership.
                4. The playbook updated after their first month.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A playbook of under ten pages used by a team member to run one partnership, revised after their first month."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Outline the playbook from recruiting to graduation"
                - "Link every template, script and agreement in one place"
                - "Walk a team member through the playbook in one sitting"
                - "Revise the playbook after their first month running a partner"
---

# Design Partner Programme

This area is for founders who want three to eight early customers to shape the product alongside them, without the programme turning into free consulting or a pile of custom features. It starts with the foundations (what the programme must prove, the partner profile, the value exchange, the agreement and data terms), then the routines that run a live cohort, the facilitation and triage skills that keep feedback honest, the decisions about money, scope and replacements, dated moments from kickoff to conversion, variants for solo, enterprise, hardware, AI and regulated settings, and finally the specialist work of co-development terms and a second cohort.

What repeats is a weekly rhythm of outreach, working sessions, request triage, usage checks and an update note, a daily sweep of the shared channels, monthly theme roll-ups, commitment checks and champion reviews, and a quarterly programme review. The **Meeting notes**, **Feedback themes**, **Metrics log**, **Product spec** and **Purchase decision** templates pair with the sessions, the feedback log, partner usage, problem statements and the tooling choice. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
