---
id: sales-revenue.annual-sales-kickoff
name: Annual Sales Kickoff
description: "The yearly sales kickoff planned end to end: outcomes, budget, venue and run-of-show, the targets reveal, product training, the awards night and the follow-through that keeps the message alive all year."
category: business
version: 1.0.0
tags: [sales-revenue, annual-sales-kickoff, manager, enterprise, team, sales-kickoff, event-planning, sales-awards]
author: Aurum Technology
starter_structure:
  templates:
    - feedback-themes
    - purchase-decision
    - meeting-notes
    - risk-register
    - metrics-log
    - vendor
  pillars:
    - name: Sales & Revenue
      emoji: "💼"
      description: "Turning interest into revenue: prospecting and pipeline, discovery and demos, proposals and negotiation, forecasting, key accounts, sales process, enablement and compensation."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Annual Sales Kickoff
          description: "Planning the yearly sales team gathering, including targets, product training, awards and the messaging that sets the tone for the next twelve months."
          projects:
            - name: Kickoff purpose and three measurable outcomes
              description: |-
                ## Purpose
                Without three written outcomes, every executive adds a session and the kickoff turns into a two-day slide marathon. Agreeing what sellers should know, believe and do differently when they fly home, each with a way to check it sixty days later, gives the planning team a filter for every agenda request that follows.

                ## Milestones
                1. Three outcomes written, one each for knowledge, belief and behaviour.
                2. Each outcome paired with a measure that can be checked after the event.
                3. The outcomes signed off by the chief revenue officer or head of sales.
                4. The outcomes printed at the top of the planning document and agenda draft.

                ## Notes
                Typical outcomes: every seller can pitch the new product in two minutes, every team leaves with a first-quarter pipeline plan, and the team believes the number is reachable. Keep it to three.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Three kickoff outcomes, each with a post-event measure, are signed off by the sales leader and sit at the top of the planning document."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Book a 45-minute session with the sales leader to agree the kickoff outcomes"
                - "Draft one knowledge, one belief and one behaviour outcome"
                - "Add a measure that could be checked sixty days after the event to each"
                - "Get written sign-off and paste the outcomes into the planning document"
            - name: Kickoff owner and planning committee
              description: |-
                ## Purpose
                Someone has to own the kickoff end to end, or decisions bounce between sales, marketing, enablement and the executive assistant until the venue deadline passes. Naming one accountable owner and a small committee with clear lanes, such as content, logistics, awards and budget, means every question has a home and a deadline.

                ## Milestones
                1. One accountable kickoff owner named and announced by the sales leader.
                2. A committee of four to seven people, each with a written lane.
                3. Decision rights agreed: what the owner decides alone and what goes to the sales leader.
                4. A shared folder and channel set up for kickoff planning.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page committee charter naming the owner, each member's lane and the decision rights is shared with the sales leadership team."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the functions that touch the kickoff: sales, marketing, enablement, finance, events"
                - "Ask the sales leader to name the accountable owner in writing"
                - "Invite four to seven committee members and assign each a lane"
                - "Write a one-page charter with lanes and decision rights"
                - "Create the shared planning folder and channel"
            - name: Kickoff date, length and format decision
              description: |-
                ## Purpose
                Timing decides half the outcome: too early and the comp plan and territories are not ready, too late and the first quarter is already slipping. Choosing the date, the number of days and whether it is in person, virtual or hybrid, against fiscal year start, plan readiness and the budget, gives everyone a fixed point to plan back from.

                ## Milestones
                1. Two or three candidate date windows listed against the fiscal calendar.
                2. Readiness of territories, quotas and comp plans checked for each window.
                3. In-person, virtual and hybrid options costed at a rough level.
                4. A date, length and format chosen and recorded with the reasons.

                ## Notes
                Most teams hold kickoff in the first two to four weeks of the fiscal year. Avoid clashes with major religious holidays, school holidays and your industry's biggest trade show.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A kickoff date, length and format are chosen, recorded with the reasons, and placed in every attendee's calendar as a hold."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Mark the fiscal year start and quarter-end dates on a planning calendar"
                - "Ask sales operations when territories and quotas will be final"
                - "Check candidate windows against holidays and major industry events"
                - "Compare rough costs for in-person, virtual and hybrid formats"
                - "Send a calendar hold to all attendees once the date is chosen"
            - name: Kickoff budget and cost-per-head model
              description: |-
                ## Purpose
                Kickoff costs creep in small amounts: an extra night, a better band, upgraded AV, a late flight change for forty people. A budget built per head, with lines for venue, travel, accommodation, food, production, speakers, awards and a contingency, lets the owner say yes or no to each request with the number in front of them.

                ## Milestones
                1. A budget sheet with per-head and fixed cost lines.
                2. A contingency line of around ten percent set aside.
                3. The total approved by finance with a named budget holder.
                4. Committed and actual spend tracked against each line.

                ## Notes
                Travel and accommodation are usually the biggest lines for an in-person event. Ask finance early whether travel is charged to the kickoff budget or to each team.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A finance-approved kickoff budget with per-head lines and a contingency exists, and committed spend is compared with it every month."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull last year's kickoff spend by category from finance"
                - "Build a budget sheet with per-head and fixed lines"
                - "Agree with finance who pays for travel and accommodation"
                - "Get the total and contingency approved by the budget holder"
                - "Compare committed spend with each budget line @recurring(monthly:12)"
            - name: Last year's kickoff debrief and lessons
              description: |-
                ## Purpose
                Last year's feedback forms usually sit unread in a survey tool while the same mistakes are planned again. Pulling the scores, the comments and the committee's own notes into a list of keep, change and drop gives this year's plan a head start and shows sellers their feedback was heard.

                ## Milestones
                1. Last year's survey results and session scores gathered in one place.
                2. Comments grouped into themes with a count for each.
                3. A keep, change and drop list agreed by the committee.
                4. Three changes announced to sellers as a result of their feedback.

                ## Notes
                Start from the **Feedback themes** template. If there was no survey, interview six sellers and two managers instead.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A keep, change and drop list built from last year's feedback is agreed by the committee, with three changes communicated to sellers."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export last year's kickoff survey results and session scores"
                - "Ask the agent to group the survey comments into themes with counts"
                - "Agree a keep, change and drop list with the committee"
                - "Run the kickoff debrief within two weeks of each event @recurring(yearly)"
            - name: Pre-kickoff seller needs survey
              description: |-
                ## Purpose
                Sellers sit through sessions built from what leadership thinks they need, while the real gaps, such as pricing the new tier or handling a competitor's discounting, go untouched. A five-question survey sent six to eight weeks out, with managers asked to add their team's top skill gap, gives the content lead evidence for every breakout.

                ## Milestones
                1. A survey of no more than five questions written and tested on two sellers.
                2. The survey sent to every seller, sales engineer and manager.
                3. A response rate above half reached through manager reminders.
                4. The top five requested topics mapped to agenda slots.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A needs survey reaches a response rate above half, and its top five topics are each matched to a named agenda slot."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write five survey questions, including one on the hardest deal moment"
                - "Test the survey on two sellers and fix confusing questions"
                - "Send the pre-kickoff needs survey to every seller @recurring(yearly)"
                - "Ask managers to chase their teams after one week"
                - "Map the top five requested topics to agenda slots"
            - name: Attendee list and invitation tiers
              description: |-
                ## Purpose
                Who gets invited is a signal: leaving out sales engineers, customer success or the partner team tells them they are not part of the number. Deciding the tiers up front, such as full attendance, general sessions only, awards night only or remote, settles the headcount the venue and budget depend on.

                ## Milestones
                1. Invitation tiers defined with who sits in each.
                2. A named attendee list with role, region and tier.
                3. Headcount per tier confirmed with the budget owner.
                4. The list shared with the registration lead as the master record.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A master attendee list with tiers and headcount is signed off by the budget owner and handed to registration."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export the current sales, sales engineering and customer success headcount"
                - "Draft invitation tiers and who belongs in each"
                - "Check planned hires who will start before the kickoff date"
                - "Get headcount per tier signed off by the budget owner"
            - name: Backwards planning timeline from day one
              description: |-
                ## Purpose
                Every kickoff that goes wrong goes wrong in the last three weeks, because decisions due in month two were never made. Counting back from day one, with dates for venue contract, invitations, speaker briefs, slide lock, rehearsals and printing, turns a vague event into a schedule anyone on the committee can check.

                ## Milestones
                1. A timeline listing every major decision and its latest date.
                2. Each item assigned to a committee member.
                3. Dependencies marked, such as slides waiting on product launch dates.
                4. The timeline reviewed and accepted by the full committee.

                ## Notes
                A common default for an in-person kickoff of 100 or more: venue signed five to six months out, save the date at four months, agenda at six weeks, slide lock at two weeks.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated, owned timeline counting back from the kickoff covers venue, invitations, content, rehearsals and printing, and is accepted by the committee."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every decision and deliverable the kickoff needs"
                - "Set a latest date for each by counting back from day one"
                - "Assign an owner to every item on the timeline"
                - "Walk the committee through the timeline and fix the gaps they raise"
            - name: Year theme and kickoff message house
              description: |-
                ## Purpose
                One theme, repeated in the keynote, the breakouts, the awards and the slides, is what sellers remember in March. A message house with a single line on top, three supporting pillars and the proof points for each keeps twenty speakers telling one story about the year instead of twenty.

                ## Milestones
                1. A one-line theme agreed by the sales leader.
                2. Three pillars beneath it, each tied to the year's revenue plan.
                3. Proof points, numbers and customer stories listed under each pillar.
                4. The message house sent to every speaker with their brief.

                ## Notes
                Test the theme line by asking three sellers what it means. If they need it explained, it is too clever.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page message house with a theme line, three pillars and proof points is approved by the sales leader and included in every speaker brief."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect the year's revenue plan, product launches and strategic priorities"
                - "Ask the agent to draft three candidate theme lines from the year plan"
                - "Test the favourite line with three sellers and one manager"
                - "Write the three pillars and their proof points"
                - "Send the approved message house to every confirmed speaker"
            - name: Venue shortlist and contract decision
              description: |-
                ## Purpose
                Good venues for 50 to 500 people book out months ahead, and the contract terms, especially room block attrition and cancellation, matter more than the photos. Comparing three venues on capacity, breakout rooms, AV, travel time from the airport, accessibility and the full contract cost avoids a cheap rate with an expensive catch.

                ## Milestones
                1. A brief listing headcount, dates, room needs and budget sent to venues.
                2. Three venues compared on the same criteria, including attrition and cancellation terms.
                3. At least one site visit or virtual walk-through completed.
                4. A contract signed with deposits and key dates added to the timeline.

                ## Notes
                Start from the **Purchase decision** template. Have finance or legal read the attrition clause: it sets what you pay if fewer people book rooms than promised.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A venue contract is signed after comparing three options on the same criteria, with deposit and attrition dates in the planning timeline."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write a one-page venue brief with headcount, dates and room needs"
                - "Send the brief to at least three venues or a venue finder"
                - "Score each venue on capacity, breakouts, AV, access and contract terms"
                - "Ask finance or legal to review the attrition and cancellation clauses"
                - "Add deposit and attrition dates from the signed contract to the timeline"
            - name: Kickoff planning committee meetings
              description: |-
                ## Purpose
                Planning slips quietly when the committee only meets when something has gone wrong. A short standing meeting with the timeline on screen, each lane reporting red, amber or green and decisions written down, keeps the run-up honest and gives the owner one place to escalate.

                ## Milestones
                1. A standing meeting in the calendar with a fixed agenda.
                2. Each lane reporting status against the timeline at every meeting.
                3. Decisions and actions recorded in one running notes page.
                4. Meetings moved to weekly for the final eight weeks before the event.

                ## Notes
                Start from the **Meeting notes** template. Keep it to 30 minutes and end with the three decisions needed before the next meeting.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Committee meetings run on schedule through the run-up, each with lane status and recorded decisions in one notes page."
                cadence: rolling
              tasks:
                - "Set a fixed 30-minute committee agenda built on the timeline"
                - "Run the kickoff planning committee meeting and record decisions @recurring(monthly:3)"
                - "Add weekly meetings to the calendar for the final eight weeks"
            - name: Run-of-show master document
              description: |-
                ## Purpose
                On the day, the production crew, the speakers, the host and the venue all need the same minute-by-minute plan, and a version on someone's laptop does not count. A single run-of-show with timings, speakers, walk-on cues, slides, microphones and room changes is what lets a two-day agenda actually start and finish on time.

                ## Milestones
                1. A run-of-show with every session, start time, length and speaker.
                2. AV cues, walk-on music, microphones and slide files listed per session.
                3. Buffer time built in after every two hours of content.
                4. The final version locked and shared with crew, host and venue.
              priority: medium
              deadlineOffsetDays: 100
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A locked run-of-show covering every session minute by minute is shared with the crew, host and venue one week before the event."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Lay out the agenda as a minute-by-minute run-of-show"
                - "Add AV cues, microphones and slide file names per session"
                - "Insert a 15-minute buffer after every two hours of content"
                - "Walk the host and production lead through the full document"
                - "Lock the final version and send it to crew and venue"
            - name: Registration, travel and rooming tracker
              description: |-
                ## Purpose
                Missing passport names, unbooked flights and dietary needs nobody recorded are what keep an events lead up the night before. One tracker per attendee covering registration, travel, hotel, dietary and access needs, and emergency contact, turns chasing into a filtered list rather than a hundred emails.

                ## Milestones
                1. A registration form capturing travel, hotel, dietary, access and emergency contact.
                2. A tracker with one row per attendee and a status column.
                3. Every attendee registered, with travel and rooms confirmed.
                4. A final rooming list sent to the hotel before the attrition date.

                ## Notes
                Personal data such as passport details and emergency contacts should sit in a restricted file, deleted after the event in line with your company's data policy.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every invited attendee has a tracker row showing confirmed registration, travel and room, and the rooming list reaches the hotel before the attrition date."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Build a registration form with travel, dietary, access and emergency fields"
                - "Set up the attendee tracker with a status column per item"
                - "Send managers a list of their people who have not registered"
                - "Send the final rooming list to the hotel before the attrition date"
            - name: Attendee communications calendar
              description: |-
                ## Purpose
                Attendees who hear nothing between the save the date and the week of the event fill the gap with rumours about the comp plan and whether it is worth flying in. A planned run of messages, from save the date to agenda teaser, pre-work, travel details and what to bring, builds anticipation and cuts the questions landing in the owner's inbox.

                ## Milestones
                1. A calendar of six to eight messages with dates and senders.
                2. Save the date and agenda teaser sent from the sales leader.
                3. Pre-work and logistics messages sent on schedule.
                4. A one-page attendee guide with venue, agenda, dress code and contacts.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Every planned attendee message goes out on its scheduled date, and a one-page attendee guide is in every inbox a week before the event."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every message attendees need and when, from save the date to arrival"
                - "Ask the agent to draft the save the date and the agenda teaser"
                - "Agree which messages come from the sales leader and which from events"
                - "Write the one-page attendee guide with venue, agenda and contacts"
            - name: Speaker deadlines and dry-run gates
              description: |-
                ## Purpose
                Late slides are the single biggest cause of weak kickoff sessions, because nobody can coach a deck that arrives the night before. Fixed gates for an outline, a first draft, a dry run and a final lock, enforced politely but firmly even with executives, give every speaker time to get better.

                ## Milestones
                1. Every speaker briefed with outcomes, message house, slot length and gate dates.
                2. Outlines received and checked against the kickoff outcomes.
                3. A dry run held for every main-stage and breakout session.
                4. All final slides locked and loaded two weeks before the event.

                ## Notes
                Ask the sales leader to back the gates in writing to all speakers. Gates only work when the most senior speaker keeps them first.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every session passes outline, draft and dry-run gates, and all final slides are locked two weeks before the kickoff."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Send every speaker a brief with outcomes, slot length and gate dates"
                - "Ask the sales leader to email speakers backing the deadlines"
                - "Book a 30-minute dry run with each speaker"
                - "Chase missing outlines three days after each gate"
                - "Load every locked slide file into one shared presentation folder"
            - name: Kickoff risk register and contingency plans
              description: |-
                ## Purpose
                Flights get cancelled, the keynote speaker catches flu, a storm closes the airport and the venue's Wi-Fi fails during the live demo. A short risk register naming the ten likeliest problems, an owner for each and a written fallback turns a crisis on the day into a decision already made.

                ## Milestones
                1. Ten risks listed with likelihood, impact and owner.
                2. A written fallback for each of the top five.
                3. Backup presenters named for every main-stage session.
                4. Event insurance and cancellation terms checked with finance.

                ## Notes
                Start from the **Risk register** template. Include a plan for a serious medical or safety incident, with the venue's emergency procedures attached.
              priority: high
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A risk register with ten owned risks and fallbacks for the top five is reviewed monthly through the run-up and shared with the on-site team."
                cadence: rolling
              tasks:
                - "List the ten likeliest things that could go wrong at the kickoff"
                - "Write a fallback plan for each of the top five risks"
                - "Name a backup presenter for every main-stage session"
                - "Review the top five kickoff risks and their owners @recurring(monthly:24)"
            - name: Post-kickoff 90-day follow-through
              description: |-
                ## Purpose
                Most kickoff energy is gone within a fortnight unless someone turns the commitments made in the room into actions managers check. A 90-day plan, with each team's commitments logged, a manager check-in at 30, 60 and 90 days and a short report to the sales leader, is what separates a good event from a good year.

                ## Milestones
                1. Every team's kickoff commitments captured in one shared list.
                2. Managers holding a review of commitments at 30, 60 and 90 days.
                3. Completion of the commitments reported to the sales leader each month.
                4. A 90-day summary shared with the whole team.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each team's kickoff commitments are reviewed at 30, 60 and 90 days, with a written 90-day summary sent to the whole sales team."
                cadence: cyclic
              tasks:
                - "Collect each team's written commitments before attendees leave the venue"
                - "Put the 30, 60 and 90-day manager check-ins in the calendar"
                - "Check progress on each team's kickoff commitments @recurring(monthly:15)"
                - "Write and send the 90-day summary to the whole sales team"
            - name: Year-round reinforcement of the kickoff theme
              description: |-
                ## Purpose
                If the theme only lives on a banner at the venue, it is forgotten by the second forecast call. Opening each monthly team call with one story of the theme in action, and checking each quarter which kickoff habits have slipped, keeps the message working through the year at almost no cost.

                ## Milestones
                1. A monthly slot on the all-team call reserved for a theme story.
                2. A list of story sources: won deals, customer quotes, manager nominations.
                3. Twelve theme stories told across the year.
                4. A quarterly check with managers on which kickoff habits have slipped.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A kickoff theme story opens the all-team call every month for twelve months, and managers are asked about slipped habits each quarter."
                cadence: rolling
              tasks:
                - "Reserve five minutes at the start of the monthly all-team call"
                - "Share one story of the kickoff theme in action on the team call @recurring(monthly:8)"
                - "Ask managers which kickoff habit has slipped in their team @recurring(quarterly)"
            - name: Award nominations gathered through the year
              description: |-
                ## Purpose
                Award winners chosen in a rush the week before kickoff tend to be the biggest bookings, while the seller who saved a key renewal is forgotten. Collecting nominations and standout deal stories every quarter means the awards reflect the whole year and the citations write themselves.

                ## Milestones
                1. Award categories and criteria published at the start of the year.
                2. A nominations form open to managers and peers.
                3. Nominations collected and logged every quarter.
                4. A shortlist per category ready two months before kickoff.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Nominations are logged every quarter for a full year, and a shortlist per award category exists two months before the kickoff."
                cadence: rolling
              tasks:
                - "Set up a nominations form with category, name and a short story"
                - "Log standout deals and saves as they close @recurring(monthly:28)"
                - "Collect the quarter's award nominations from managers @recurring(quarterly)"
            - name: Next year's kickoff date hold
              description: |-
                ## Purpose
                Booking next year's dates and a provisional venue hold in the weeks after this kickoff, while costs and lessons are fresh, gets better rates and avoids a scramble in the autumn. A yearly reset also forces the decision on whether the same format still fits the team.

                ## Milestones
                1. Next year's date window agreed with the sales leader.
                2. A provisional hold placed with the preferred venue.
                3. Calendar holds sent to the sales leadership team.
                4. The planning start date for next year fixed in the owner's calendar.
              priority: low
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "Within two months of each kickoff, next year's date window and a provisional venue hold are in place and in leaders' calendars."
                cadence: cyclic
              tasks:
                - "Agree next year's date window with the sales leader"
                - "Place a provisional hold on next year's kickoff venue and dates @recurring(yearly)"
                - "Send calendar holds to the sales leadership team"
            - name: Writing the leader's opening keynote
              description: |-
                ## Purpose
                The opening keynote is the one talk every seller hears, and it decides whether the room believes the number. A keynote built as a story, where we won and why, what changes this year and what is asked of each person, lands far better than a tour of last year's charts.

                ## Milestones
                1. A one-page outline: last year in one story, this year's change, the ask.
                2. No more than three numbers on screen, each with its meaning spelled out.
                3. Two customer or seller stories chosen to carry the main points.
                4. Two full rehearsals done, one in front of a small honest audience.

                ## Notes
                Twenty to thirty minutes is enough. End with the specific behaviour you want from every seller on Monday morning.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: deliverable
                success_criteria: "A keynote outline built on the message house is rehearsed twice, and three sellers can repeat its main ask after hearing it."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write the keynote's three-part outline on a single page"
                - "Pick two seller or customer stories that carry the main points"
                - "Cut the slides to no more than three numbers in total"
                - "Rehearse in front of three honest colleagues and ask what they will remember"
            - name: Breakout sessions built around practice, not slides
              description: |-
                ## Purpose
                People remember what they practise far more than what they are shown, yet most breakouts are a presenter reading forty slides. Designing each breakout around a short input followed by paired practice, a real scenario and a takeaway card turns training time into skill.

                ## Milestones
                1. A breakout template: ten minutes of input, thirty of practice, ten of debrief.
                2. Every breakout tied to one kickoff outcome.
                3. A realistic scenario written for each practice segment.
                4. Facilitators briefed on running pairs and trios for the practice.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every breakout follows the input, practice and debrief template, and at least two thirds of each session's time is practice."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read a short guide on adult learning and practice-based training"
                - "Write a breakout template with timed input, practice and debrief"
                - "Ask each breakout owner to replace half their slides with a practice scenario"
                - "Run one breakout as a pilot with a single team before the event"
            - name: Running deal clinics and role plays at scale
              description: |-
                ## Purpose
                Role plays in a room of 200 sellers go wrong fast: nervous people, vague briefs and no feedback. Running them in trios with buyer cards, an observer checklist and a manager floating between groups, or as deal clinics on real live opportunities, makes practice useful even with a large room.

                ## Milestones
                1. Buyer persona cards written for three common deal situations.
                2. An observer checklist with four or five behaviours to watch for.
                3. Managers briefed to float and coach, not to judge.
                4. A deal clinic format chosen, using real pipeline deals volunteered by sellers.

                ## Notes
                Ask sellers to bring one live deal each. Working on a real deal gets far more energy than a made-up scenario.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Buyer cards, an observer checklist and a deal clinic format are ready, and every seller takes part in at least one role play or clinic."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write buyer cards for three common deal situations"
                - "Draft an observer checklist with five behaviours to watch"
                - "Ask each seller to bring one live deal to the clinic"
                - "Brief managers on coaching the trios during role plays"
            - name: Coaching internal speakers before they go on stage
              description: |-
                ## Purpose
                Strong sellers are not always strong speakers, and a top performer reading notes in front of peers wastes the credibility they bring. A short coaching session for each internal speaker, covering structure, timing, one story and how to handle the clicker, makes their slot one of the best of the event.

                ## Milestones
                1. Every internal speaker offered a 45-minute coaching session.
                2. Each talk structured around one point and one story.
                3. Each speaker timed in a full run-through.
                4. Feedback given on pace, filler words and slide density.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every internal speaker completes a coaching session and a timed run-through before the event, and every talk finishes within its slot."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Book a 45-minute coaching session with each internal speaker"
                - "Help each speaker cut their talk to one point and one story"
                - "Time a full run-through and note where they run over"
                - "Send each speaker three written pointers after the session"
            - name: Product launch training track with certification
              description: |-
                ## Purpose
                New products and releases planned for the year are the hardest content to land, because product managers explain features while sellers need to know who buys it and why. A training track that ends in a short pitch certification, judged by managers on the spot, means every seller leaves able to position the launch.

                ## Milestones
                1. The year's launches confirmed with product management and dates checked.
                2. A session per launch covering buyer, problem, pitch and objections.
                3. A two-minute pitch certification with a simple scoring sheet.
                4. Certification results shared with managers for follow-up coaching.

                ## Notes
                Lock which launches are definite before writing content. Training sellers on a feature that slips a quarter costs credibility.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every attending seller completes the launch pitch certification at kickoff, with scores shared with their managers within a week."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Confirm with product management which launches are definite for the year"
                - "Ask product marketing for buyer, problem and objection notes per launch"
                - "Write a two-minute pitch certification scoring sheet"
                - "Send certification scores to each manager within a week of kickoff"
            - name: Producing a virtual or hybrid kickoff
              description: |-
                ## Purpose
                Remote attendees drop off when a virtual kickoff is just a webcast of the main stage. Shorter sessions, a dedicated host for the remote audience, live polls, cameras-on breakouts and a production run-through make the online experience worth staying for.

                ## Milestones
                1. Remote agenda built in blocks of no more than 90 minutes.
                2. A remote host and a technical producer named.
                3. Polls, chat moderation and breakout rooms set up and tested.
                4. A full technical rehearsal completed on the event platform.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A full technical rehearsal is completed, and remote attendance stays above three quarters of registrations through each session block."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Watch two recorded virtual events and note what kept you watching"
                - "Split the remote agenda into blocks of 90 minutes or less"
                - "Name a remote host and a technical producer"
                - "Run a full technical rehearsal on the event platform"
            - name: Measuring what the kickoff changed
              description: |-
                ## Purpose
                Satisfaction scores tell you whether people enjoyed the event, not whether they sell differently. Measuring at four levels, reaction, learning, behaviour and results, with a knowledge check before and after and a behaviour metric tracked each quarter, gives an honest answer to whether the outcomes were met.

                ## Milestones
                1. A measure chosen for each kickoff outcome at each level.
                2. A short knowledge check taken before and after the event.
                3. A behaviour metric, such as use of the new pitch, tracked for two quarters.
                4. A results summary written against the three outcomes.

                ## Notes
                Start from the **Metrics log** template. Agree the behaviour metric with sales operations before the event so the data is there afterwards.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Pre and post knowledge checks and two quarters of a behaviour metric are recorded, with a written summary against each kickoff outcome."
                cadence: cyclic
              tasks:
                - "Choose one measure per outcome for reaction, learning and behaviour"
                - "Write a ten-question knowledge check to run before and after"
                - "Agree the behaviour metric source with sales operations"
                - "Pull the kickoff behaviour metrics into the metrics log @recurring(quarterly)"
            - name: Annual targets reveal session
              description: |-
                ## Purpose
                How the number is presented matters as much as the number: a target shown without the reasoning reads as a guess, and sellers spend the coffee break doing their own maths. A session that explains the company target, how it breaks down by segment, the pipeline and win-rate assumptions behind it and what support comes with it, builds belief instead of grumbling.

                ## Milestones
                1. Final targets confirmed with finance and sales operations before slides are built.
                2. The company number broken into segments and regions with the assumptions shown.
                3. Individual quotas shared privately by managers, not on the main stage.
                4. A written list of likely questions with agreed answers.

                ## Notes
                This session presents targets already set; the modelling belongs with quota and capacity planning. Never reveal a number that has not been signed off.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A targets session built on signed-off numbers is rehearsed, and every seller receives their individual quota privately from their manager during the kickoff."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Confirm with finance the date the final targets will be signed off"
                - "Build the breakdown of the company number by segment and region"
                - "Write the ten hardest questions sellers will ask and agree answers"
                - "Brief managers on sharing individual quotas in private conversations"
            - name: Compensation plan walkthrough and FAQ session
              description: |-
                ## Purpose
                Sellers read the comp plan before anything else, and confusion about accelerators or clawbacks will drain attention from every other session. A walkthrough with worked examples for three typical sellers, a written FAQ and a clear route for individual questions settles most of it in one hour.

                ## Milestones
                1. The final plan document confirmed as signed off before the session.
                2. Worked earnings examples for three typical seller situations.
                3. A written FAQ published straight after the session.
                4. A named contact and deadline for individual plan questions.

                ## Notes
                Plan design belongs elsewhere; this project is about explaining a finished plan. Keep personal earnings out of the room.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A comp walkthrough with three worked examples is delivered, and a written FAQ is published to every seller within two days."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Confirm the comp plan document is final and signed off"
                - "Build worked earnings examples for three typical sellers"
                - "Collect questions raised during the session in one place"
                - "Ask the agent to turn the collected questions into an FAQ draft"
                - "Publish the FAQ with the named contact for individual questions"
            - name: Agenda balance between training, inspiration and downtime
              description: |-
                ## Purpose
                Back-to-back sessions from eight in the morning to dinner leave people tired by lunch on day one and checking email by day two. Deciding the share of time for main stage, practice, team time, networking and rest, and holding every requested session to that split, gives an agenda people can stay present for.

                ## Milestones
                1. A target split agreed, for example a third main stage, a third practice, a third team and social time.
                2. Every requested session listed with its owner and length.
                3. Sessions cut or shortened to fit the split.
                4. At least one unscheduled hour each day kept free.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A draft agenda meets the agreed time split, with at least one free hour per day, and is approved by the sales leader."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every session requested with owner and length"
                - "Agree the target split of main stage, practice and team time"
                - "Cut or merge sessions until the agenda fits the split"
                - "Block one unscheduled hour on each day of the agenda"
            - name: Event agency versus in-house delivery decision
              description: |-
                ## Purpose
                An event agency can save the committee hundreds of hours on venues, travel and production, but it adds a management fee and another party to brief. Comparing the true internal workload against two agency quotes, with clear scope for what the agency owns, makes this a decision rather than a habit.

                ## Milestones
                1. Internal hours estimated for logistics, travel and production.
                2. A scope written listing what an agency would own.
                3. Two agency quotes compared against the same scope.
                4. A decision recorded, with the chosen agency's contract and contacts filed.

                ## Notes
                Start from the **Vendor** template. Check who owns attendee data and the venue contract if an agency signs on your behalf.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on agency or in-house delivery is based on an internal hours estimate and two quotes against one written scope."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Estimate the internal hours logistics, travel and production would take"
                - "Write a one-page scope of what an agency would own"
                - "Request quotes from two event agencies against that scope"
                - "Record the decision and file the chosen contract"
            - name: Customer voice panel and recorded stories
              description: |-
                ## Purpose
                Hearing a customer explain why they bought, what nearly stopped them and what changed afterwards does more for seller belief than any internal slide. A short customer panel or a set of recorded interviews, prepared with clear questions and the customer's permission, gives the kickoff its most credible half hour.

                ## Milestones
                1. Three to five customers invited through their account owners.
                2. Panel questions agreed with the customers in advance.
                3. Permission for recording and internal sharing confirmed in writing.
                4. The panel delivered or the recordings edited and placed in the agenda.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "At least two customers take part live or on recording, with written permission and agreed questions, in a slot on the agenda."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask account owners to nominate customers with a strong story"
                - "Send nominated customers an invitation with the planned questions"
                - "Get written permission for recording and internal use"
                - "Book a moderator and a 20-minute prep call with the panel"
            - name: Partner day inclusion decision
              description: |-
                ## Purpose
                Resellers and partners who sell alongside the team often hear about the year's priorities months after the direct sellers do. Deciding whether to invite partners to part of the kickoff, run a separate partner day, or send a recorded briefing, weighs alignment against the confidential sessions on targets and comp.

                ## Milestones
                1. Partners who drive meaningful revenue listed with their contacts.
                2. Sessions marked as partner-safe or internal only.
                3. Options compared: joint day, separate partner day or recorded briefing.
                4. A choice made and partners invited or briefed accordingly.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on partner involvement exists, and every partner on the list is invited or briefed within a month of the kickoff."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List partners who influenced meaningful revenue last year"
                - "Mark each planned session as partner-safe or internal only"
                - "Compare a joint day, a partner day and a recorded briefing"
                - "Send partners their invitation or briefing date"
            - name: Inclusive and accessible kickoff design
              description: |-
                ## Purpose
                Dietary needs, step-free access, prayer space, parents travelling with infants and people who do not drink are often handled as last-minute exceptions. Building them into the venue brief, the registration form, the agenda and the evening plans means everyone can take part fully, not just those who fit the default.

                ## Milestones
                1. Access, dietary, faith and family needs captured at registration.
                2. Venue checked for step-free access, hearing loops, quiet and prayer rooms.
                3. Evening events planned with strong alcohol-free options and non-drinking activities.
                4. Sessions captioned and slides readable from the back of the room.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An accessibility checklist covering venue, registration, agenda and evenings is completed and every registered need has a confirmed arrangement."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Add access, dietary, faith and family questions to registration"
                - "Ask the venue for step-free routes, hearing loops and a quiet room"
                - "Plan the evening programme with alcohol-free drinks and activities"
                - "Arrange live captions for the main stage sessions"
            - name: Conduct, alcohol and duty of care plan
              description: |-
                ## Purpose
                Company events with an open bar, late nights and hotel rooms are where many workplace conduct complaints start. A written conduct reminder, limits on bar tabs, transport home, a named welfare contact on site and a clear reporting route protect attendees and the company, and they should be agreed with HR months ahead.

                ## Milestones
                1. A conduct and welfare plan agreed with HR and legal.
                2. Bar tab limits and end times set for every evening event.
                3. A named welfare contact on duty each evening.
                4. The reporting route included in the attendee guide.

                ## Notes
                Follow your company's own conduct policy and HR's advice; this project organises the plan, it does not replace them.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A conduct and welfare plan signed off by HR is in place, with a named welfare contact each evening and the reporting route in the attendee guide."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Book a meeting with HR to agree the kickoff conduct and welfare plan"
                - "Set bar tab limits and end times for each evening event"
                - "Name a welfare contact for each evening"
                - "Add the conduct reminder and reporting route to the attendee guide"
            - name: Opening general session production
              description: |-
                ## Purpose
                The first hour sets the tone for the whole event: a late start, a dead microphone or a slow first speaker and the room never quite recovers. Producing the opening with a tight script, walk-on music, a strong host, rehearsed transitions and a technical check at the venue is worth more attention than any other hour.

                ## Milestones
                1. A scripted opening hour with host links between every speaker.
                2. Walk-on music, lighting and video cues confirmed with production.
                3. A technical rehearsal held in the room the evening before.
                4. The session started within two minutes of its scheduled time.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The opening session starts within two minutes of schedule after an in-room technical rehearsal, and runs to its planned length."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write the host script for the opening hour"
                - "Confirm walk-on music, lighting and video cues with production"
                - "Run a technical rehearsal in the room the evening before"
                - "Seat speakers in the front row ten minutes before the start"
            - name: Awards and recognition night
              description: |-
                ## Purpose
                Recognition in front of peers is often the moment sellers talk about for the rest of the year, and the moment resentment starts if criteria look unfair. Publishing the categories and criteria, checking results against final booked numbers, writing a short citation for each winner and running a tight ceremony keeps the night a celebration.

                ## Milestones
                1. Categories and criteria published before the year starts.
                2. Winners checked against final closed and booked figures with sales operations.
                3. A short citation written for each winner.
                4. A ceremony running under an hour, with winners' managers presenting.

                ## Notes
                Include awards for behaviours as well as bookings, such as best team player or biggest save, so more than the top quota attainers are recognised.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Awards are given against published criteria, every winner is checked against final figures, and the ceremony runs in under an hour."
                cadence: cyclic
              tasks:
                - "Confirm award criteria and categories with leadership @recurring(yearly)"
                - "Check every winner against final booked figures with sales operations"
                - "Write a two-sentence citation for each winner"
                - "Order trophies with names spelled as on the winners' records"
            - name: Executive panel with open questions
              description: |-
                ## Purpose
                Leadership answering unscripted questions does more for trust than any polished keynote, as long as the questions are real. A panel of three or four executives, with anonymous questions collected in advance and live, a strong moderator and a promise to answer the rest in writing, gives sellers a voice at the event.

                ## Milestones
                1. Panel members confirmed and briefed on the format.
                2. Anonymous questions collected before and during the session.
                3. A moderator chosen who will ask the uncomfortable questions.
                4. Unanswered questions answered in writing within two weeks.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The panel takes anonymous questions, and every question not answered live receives a written answer within two weeks."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Confirm three or four executives for the panel"
                - "Open an anonymous question form two weeks before the event"
                - "Brief the moderator to pick the hardest common questions first"
                - "Publish written answers to unanswered questions within two weeks"
            - name: Kickoff days on-site operations desk
              description: |-
                ## Purpose
                During the event, dozens of small problems arrive at once: a missing badge, a speaker stuck in traffic, a room that is too cold, a seller taken ill. An operations desk staffed throughout, with the run-of-show, the risk register, the attendee tracker and a radio or group chat to the crew, means each one is solved without pulling the owner out of the main room.

                ## Milestones
                1. A staffed desk with a rota covering every hour of the event.
                2. Run-of-show, risk register, tracker and contacts printed and online.
                3. A crew group chat set up with venue, production and committee.
                4. A daily ten-minute wash-up held with the crew each evening.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An operations desk is staffed for every hour of the event, and a nightly crew wash-up records issues and fixes."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Draw up a desk rota covering every hour of the event"
                - "Print the run-of-show, risk register and key contacts for the desk"
                - "Set up a crew group chat with venue, production and committee"
                - "Hold a ten-minute crew wash-up each evening"
            - name: Satellite kickoffs for remote and regional teams
              description: |-
                ## Purpose
                Field teams in other time zones, or those who cannot travel, often receive the kickoff as a recording weeks later and feel second-class all year. Running a local satellite session with a regional leader, a live link to the key moments and local awards gives them their own event rather than a replay.

                ## Milestones
                1. Teams that cannot attend centrally listed with their time zones.
                2. A regional host named for each satellite session.
                3. Live links scheduled for the keynote and awards where time zones allow.
                4. Local agenda, venue or office space and catering confirmed.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every team unable to attend centrally has a satellite session with a named host, a local agenda and the keynote live or within a day."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List teams that cannot attend centrally and their time zones"
                - "Ask a regional leader to host each satellite session"
                - "Schedule live links for the keynote and awards where hours allow"
                - "Book local office space and catering for each satellite"
            - name: First kickoff as a new sales leader
              description: |-
                ## Purpose
                A new sales leader's first kickoff is when the team decides whether to trust them, often only weeks after they arrived. Listening to managers and top sellers first, keeping what the team valued from previous kickoffs and choosing one clear change, makes the event a statement of direction without throwing out what worked.

                ## Milestones
                1. Short interviews held with every manager and five sellers.
                2. Last kickoff's best-loved elements identified and kept.
                3. One clear change of direction chosen as the event's message.
                4. The leader's keynote and the agenda shaped around that change.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Interviews with every manager and five sellers are completed and one written change of direction shapes the keynote and agenda."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Book 20-minute conversations with every manager"
                - "Ask five sellers what they valued most at past kickoffs"
                - "Write down the one change of direction the event will announce"
                - "Brief the kickoff owner on what to keep and what to change"
            - name: One-day kickoff for a small team on a tight budget
              description: |-
                ## Purpose
                For a team of eight to fifteen sellers, a hotel and a stage are unnecessary; one well-run day in the office or a hired room can do the same job. A single day with the plan, one skill session, deal planning, a team lunch and a simple awards moment gives a small team a proper start to the year for the cost of a dinner.

                ## Milestones
                1. A one-day agenda with plan, skills, deal planning and recognition.
                2. A room booked and lunch and dinner arranged within budget.
                3. Every seller arriving with three priority accounts prepared.
                4. Each seller leaving with a written first-quarter plan.

                ## Notes
                Ask a peer company's sales leader or a customer to speak for twenty minutes. An outside voice lifts a small event more than any production.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A one-day kickoff is delivered within its set budget, and every seller leaves with a written first-quarter plan."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Draft a one-day agenda with plan, skills and deal planning blocks"
                - "Book a room and a team dinner within the agreed budget"
                - "Ask every seller to bring three priority accounts prepared"
                - "Invite one outside speaker for a 20-minute slot"
            - name: Multi-region enterprise kickoff for hundreds of sellers
              description: |-
                ## Purpose
                At several hundred attendees across regions, the kickoff becomes a programme: visa letters, language needs, regional breakouts, travel from many hubs and leaders in different time zones. A regional lead per area, a shared core agenda with regional tracks and a monthly call to keep them aligned stops the event fragmenting into separate parties.

                ## Milestones
                1. A regional lead named for each region with a written brief.
                2. A shared core agenda with clearly marked regional tracks.
                3. Visa invitation letters and travel guidance issued early for those who need them.
                4. A monthly alignment call held with every regional lead through the run-up.

                ## Notes
                Visa processing can take months in some countries. Ask your travel or mobility team for lead times as soon as the venue is fixed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every region has a briefed lead, visa letters are issued at least three months out, and monthly alignment calls run through the run-up."
                cadence: cyclic
              tasks:
                - "Name a regional kickoff lead for each region"
                - "Ask the mobility or travel team for visa lead times by country"
                - "Mark core and regional tracks clearly on the agenda"
                - "Hold a call with the regional kickoff leads @recurring(monthly:18)"
            - name: Kickoff after a missed year
              description: |-
                ## Purpose
                After a year that missed the number, a kickoff full of celebration feels false and sellers notice. Being honest about what went wrong, what leadership is changing and what is being asked of the team, while still recognising the people who delivered, rebuilds credibility faster than spin.

                ## Milestones
                1. A frank written review of why the year was missed.
                2. Three changes leadership is making, stated plainly.
                3. Recognition kept for individuals who delivered despite the year.
                4. The tone of every main-stage session checked against the message.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The keynote names the main reasons the year was missed and three leadership changes, and post-event survey trust scores are recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a frank one-page review of why the number was missed"
                - "Agree three leadership changes to announce"
                - "Check every main-stage script for tone against that review"
                - "Add a trust question to the post-event survey"
            - name: Kickoff during a merger or reorganisation
              description: |-
                ## Purpose
                When the team has just merged, been reorganised or gained a new leader, sellers arrive with one question: what happens to me. A kickoff that answers the structure, territory and comp questions early, mixes the two teams deliberately and avoids an us-and-them awards night does more for retention than any team-building exercise.

                ## Milestones
                1. The questions sellers are asking gathered from managers.
                2. Structure, territory and comp answers scheduled on day one.
                3. Seating and breakouts planned to mix the former teams.
                4. Awards criteria checked for fairness across both former teams.

                ## Notes
                Agree with HR and legal what can be said about roles and structure before the event. Saying nothing is better than saying something that has to be reversed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Structure, territory and comp answers are delivered on day one, and every breakout group mixes sellers from the former teams."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask managers for the top five questions their sellers are asking"
                - "Agree with HR and legal what can be said about roles"
                - "Plan seating and breakouts to mix the former teams"
                - "Review award criteria for fairness across both former teams"
            - name: First-time attendees and new hire kickoff track
              description: |-
                ## Purpose
                Anyone who joined in the last quarter arrives at the kickoff knowing a handful of names and none of the in-jokes. A short welcome briefing, a buddy from another team, a glossary of the acronyms they will hear and a catch-up pack for people who join after the event turn kickoff into part of their start rather than a confusing extra.

                ## Milestones
                1. Every first-time attendee paired with a buddy.
                2. A 30-minute welcome briefing held before the opening session.
                3. A one-page glossary of internal terms and acronyms.
                4. A replay pack ready for people who join after the kickoff.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every first-time attendee has a buddy and a welcome briefing, and every later starter receives the replay pack in their first month."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List everyone attending their first kickoff"
                - "Pair each first-time attendee with a buddy from another team"
                - "Write a one-page glossary of internal terms and acronyms"
                - "Send the replay pack to new starters since the last kickoff @recurring(monthly:5)"
            - name: Manager prep and team planning breakouts
              description: |-
                ## Purpose
                Front-line managers decide whether the kickoff turns into a plan, because the team breakout is where the year becomes accounts, quarters and names. Briefing managers a week ahead, giving them a planning template and asking each seller to leave with a written first-quarter plan, makes the breakout the most useful hour of the event.

                ## Milestones
                1. Managers briefed a week before on outcomes, messages and their breakout role.
                2. A team planning template covering targets, priority accounts and first-quarter actions.
                3. Every seller leaving with a written first-quarter plan.
                4. Each plan reviewed in a one-to-one within a month.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every seller leaves the kickoff with a written first-quarter plan, and each plan is reviewed by their manager in a one-to-one within a month."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Run a one-hour manager briefing a week before the kickoff"
                - "Share the team planning template with every manager"
                - "Collect a copy of each seller's first-quarter plan"
                - "Review each seller's kickoff plan in a one-to-one @recurring(quarterly)"
            - name: Leadership alignment day before the kickoff
              description: |-
                ## Purpose
                Leaders who disagree about priorities in private will contradict each other on stage, and sellers hear it immediately. A working day for the sales leadership team a few weeks before the kickoff, to settle the plan, rehearse the key messages together and agree answers to the hardest questions, is what experienced revenue leaders do to make the event speak with one voice.

                ## Milestones
                1. A leadership day held three to four weeks before the kickoff.
                2. Open disagreements on priorities resolved and written down.
                3. Each leader's session checked against the message house.
                4. A shared list of hard questions with agreed answers.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A leadership alignment day is held before the kickoff, producing written decisions on priorities and an agreed answer list for hard questions."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Book a full day with the sales leadership team a month before kickoff"
                - "Ask each leader to list the priorities they would put first"
                - "Draft the hard-questions list for leaders to agree answers to"
                - "Send the written decisions from the day to every leader"
            - name: Kickoff return on investment case for finance
              description: |-
                ## Purpose
                Finance will ask why the kickoff costs what a small team of sellers does, and a good feeling in the room is not an answer. Comparing cost per head with changes in early-quarter pipeline, new-hire ramp, launch product bookings and retention of top sellers, year on year, gives the sales leader evidence for the next budget conversation.

                ## Milestones
                1. Total cost and cost per head calculated for the last kickoff.
                2. Four business indicators chosen and agreed with finance.
                3. Indicators compared with the previous year and the quarter before kickoff.
                4. A one-page case written for the next budget round.

                ## Notes
                Be careful with cause and effect: many things drive pipeline. Present the indicators as evidence alongside the outcome measures, not as proof.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A one-page return on investment case comparing cost per head with four agreed indicators year on year is shared with finance before budget planning."
                cadence: cyclic
              tasks:
                - "Calculate total cost and cost per head for the last kickoff"
                - "Agree four business indicators with finance"
                - "Compare post-kickoff pipeline and ramp numbers with the prior year @recurring(yearly)"
                - "Write the one-page case for the next budget round"
            - name: Kickoff replay library and archive
              description: |-
                ## Purpose
                Half the value of the kickoff sessions is lost when recordings sit unlabelled in a shared drive that nobody can search. A small library of edited recordings, slides and summaries, tagged by topic and retired once out of date, serves people who missed the event, new starters and next year's planning team.

                ## Milestones
                1. Every session recorded with speaker permission.
                2. Recordings edited, titled and tagged by topic and audience.
                3. A short written summary attached to each recording.
                4. Out-of-date recordings retired each quarter.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every kickoff session has an edited, tagged recording with a summary in one library, and outdated items are retired each quarter."
                cadence: rolling
              tasks:
                - "Ask every speaker for permission to record their session"
                - "Ask the agent to write a one-paragraph summary for each recording"
                - "Tag each recording by topic, audience and date"
                - "Check replay views and retire outdated recordings @recurring(quarterly)"
---

# Annual Sales Kickoff

This area is for whoever has been handed the yearly sales kickoff, whether that is a sales leader, a revenue operations or enablement lead, or a manager pulling together a one-day event for a small team. It starts with the foundations (written outcomes, an owner and committee, the date and format, the budget, last year's lessons, the attendee list, the timeline, the year's theme and the venue), moves through the planning machinery and the skills of keynotes, breakouts and speaker coaching, then the decisions on the targets reveal, the comp walkthrough, agencies, partners and duty of care, the event days themselves, the situations that change the brief, and finally the advanced work of leadership alignment, return on investment and a replay library.

What repeats is a monthly planning meeting and budget check in the run-up, a monthly risk review, the post-event follow-through and theme reinforcement through the year, quarterly award nominations, and a yearly cycle of survey, debrief, date hold and award criteria. The Feedback themes, Purchase decision, Meeting notes, Risk register, Metrics log and Vendor templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
