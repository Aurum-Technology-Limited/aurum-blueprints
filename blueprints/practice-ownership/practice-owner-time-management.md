---
id: practice-ownership.practice-owner-time-management
name: Practice Owner Time Management
description: "A true picture of where the owner's hours go, protected management time, delegation that sticks, a weekly owner review and the limits, breaks and leave that keep a practice owner from burning out."
category: business
version: 1.0.0
tags: [practice-ownership, practice-owner-time-management, small-business, founder, time-management, delegation, burnout, weekly-review]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - meeting-notes
    - operational-checklist
    - purchase-decision
  pillars:
    - name: Professional Practice Ownership
      emoji: "🔑"
      description: "Owning and running a professional practice: medical and dental clinics, law and accounting firms, engineering consultancies, architecture studios, veterinary practices and pharmacies, from buying or starting one through partnership agreements, billing, compliance, hiring and growth to succession and sale."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Practice Owner Time Management
          description: "Balancing professional work with running the business: protected management time, delegation, a weekly owner review and avoiding burnout."
          projects:
            - name: Two-week owner time audit
              description: |-
                ## Purpose
                Most practice owners guess they spend a day a week on management and find, once they log it, that it is closer to two, scattered across lunch breaks and evenings. Logging every working hour for ten working days, in 30-minute blocks, gives a true split between professional work, management, admin and interruptions before you change anything.

                ## Milestones
                1. Ten working days logged in 30-minute blocks, including evenings and weekends.
                2. Every block tagged as professional, management, admin, interruption or personal.
                3. Total hours and the percentage in each category calculated.
                4. The three biggest surprises written in one paragraph.

                ## Notes
                Start from the **Metrics log** template. Log as you go, not from memory at the end of the day; recall badly underestimates interruptions and evening email.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Ten consecutive working days of time logged in 30-minute blocks, with category totals and percentages written up."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Set up a time log with 30-minute rows and five category columns"
                - "Log every block as you work for ten working days"
                - "Total the hours in each category at the end of the fortnight"
                - "Write down the three findings that surprised you most"
            - name: Target split between professional and management time
              description: |-
                ## Purpose
                Once the audit shows where hours go, the next step is deciding where they should go. An owner who sees patients or clients four and a half days a week and runs the business in the gaps usually needs a written target, such as 80 percent professional and 20 percent management, and a weekly hour count to match.

                ## Milestones
                1. A target percentage for professional, management and admin time written down.
                2. The target converted into hours per week against your normal working week.
                3. The gap between the audit and the target measured in hours.
                4. The target shared with your practice manager or partners.

                ## Notes
                Model the income effect of fewer professional hours with your accountant before committing. The target has to be affordable as well as sensible.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written target split with weekly hours for each category, compared against the audit and shared with at least one colleague."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write your ideal weekly split as percentages next to the audit results"
                - "Convert each percentage into hours for a normal working week"
                - "Ask your accountant how fewer professional hours would change your drawings"
                - "Share the agreed split with your practice manager or partners"
            - name: List of decisions and duties only the owner can do
              description: |-
                ## Purpose
                In many practices the owner signs every cheque, approves every rota swap and answers every supplier because nobody wrote down what actually needs them. A short list of duties that genuinely require the owner's licence, signature or authority, such as clinical or professional sign-off, regulator returns or partner decisions, makes everything else a candidate for someone else.

                ## Milestones
                1. Every recurring owner duty from the audit listed.
                2. Each duty marked as required by law or regulation, by choice, or by habit.
                3. A final list of no more than 15 owner-only duties.
                4. The list kept where staff can see what to bring to you.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written list of no more than 15 owner-only duties, each with the reason it needs the owner, shared with the team."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every recurring task the time audit shows you doing"
                - "Mark each one as required by law, by your choice or by habit"
                - "Check your regulator's guidance on which duties must stay with a licensed owner"
                - "Share the final owner-only list with your practice manager"
            - name: Protected weekly management block
              description: |-
                ## Purpose
                Management work squeezed between appointments gets done badly or not at all. A fixed block in the diary, ideally a half-day closed to bookings, where the owner works on staff issues, plans and money with the door shut, is the change many owners say made the biggest difference.

                ## Milestones
                1. A half-day or two two-hour blocks chosen at the quietest point of the week.
                2. The blocks removed from the booking system so reception cannot fill them.
                3. Staff told what may interrupt the block and what must wait.
                4. Eight consecutive weeks of blocks held without being given away.

                ## Notes
                Mornings tend to survive better than late afternoons, which fill with overruns. If a block must move, move it within the same week rather than cancel it.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weeks in which the protected management block was held at least 90 percent of the time."
                cadence: rolling
              tasks:
                - "Choose the half-day with the lowest booking demand from last quarter's diary"
                - "Block the time in the appointment system so it cannot be booked"
                - "Tell the front desk what counts as urgent enough to interrupt"
                - "Check that this week's management block was held and note why if not @recurring(weekly:thu)"
            - name: Personal capacity limits for the owner
              description: |-
                ## Purpose
                Burnout in practice owners usually follows a slow creep: one extra patient squeezed in, one more late evening, a Saturday clinic that quietly became permanent. Writing your own limits down, such as a maximum number of appointments or billable hours a week, a latest finishing time and a day with no work at all, gives reception and partners something to hold to.

                ## Milestones
                1. A maximum weekly professional load set in appointments or billable hours.
                2. A latest finishing time and at least one full day off each week fixed.
                3. The limits built into the appointment templates or diary rules.
                4. A rule agreed for the rare exceptions and who can approve them.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written weekly limits for professional load, finishing time and days off, configured in the booking system and known to reception."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down your maximum appointments or billable hours per week"
                - "Fix a latest finishing time and a weekly day with no work"
                - "Set the limits in the booking system or diary rules"
                - "Agree with reception who may approve an exception and how often"
                - "Check last month's diary against your limits and note each breach @recurring(monthly:3)"
            - name: Delegation map of recurring admin
              description: |-
                ## Purpose
                Purchasing, rota changes, supplier calls, staff leave requests and invoice queries make up the bulk of most owners' admin, and almost all of it can be handed over with a clear brief. A map showing each recurring task, who does it now, who should do it and from when turns delegation from a vague intention into a schedule.

                ## Milestones
                1. Every admin task from the audit listed with its frequency and time taken.
                2. A named person or outside provider proposed for each one.
                3. The tasks ordered by hours saved for the owner.
                4. Ten tasks handed over, each with a start date.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A delegation map listing every recurring admin task with its new owner, and at least ten tasks handed over within 45 days."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List each admin task with how often it happens and how long it takes"
                - "Name who in the team or which provider could take each one"
                - "Ask the agent to draft a one-paragraph handover brief for each of the top ten tasks"
                - "Hand over the first three tasks with a start date this month"
                - "Check that delegated tasks have not drifted back to you @recurring(monthly:20)"
            - name: Weekly owner review agenda
              description: |-
                ## Purpose
                A weekly review only works if it takes the same 45 minutes every time and covers the same ground. Designing the agenda once, with fixed sections for last week's diary, open staff issues, cash and bookings, and next week's three priorities, means each review starts on time instead of with a blank page.

                ## Milestones
                1. An agenda of five or six fixed sections, timed to fit 45 minutes.
                2. The source for each section listed, such as the booking report or bank feed.
                3. A one-page review note format with space for decisions and actions.
                4. The first review held using the agenda and adjusted afterwards.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written weekly review agenda of no more than six timed sections, used once and revised after that first run."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft a six-section agenda that fits into 45 minutes"
                - "Note where each section's information comes from"
                - "Create a one-page note format for decisions and actions"
                - "Run the first review and cut anything that did not earn its time"
            - name: Three owner priorities for the quarter
              description: |-
                ## Purpose
                Without a short list, the owner's management time goes to whatever arrived in the inbox that morning. Choosing three priorities for the next 90 days, such as recruiting an associate, moving to online booking or clearing the appraisal backlog, and writing what done looks like for each, gives the protected block real work to do.

                ## Milestones
                1. A long list of possible owner projects narrowed to three.
                2. Each priority written with a definition of done and a target date.
                3. The first step of each scheduled into a management block.
                4. Progress on all three scored at the end of the quarter.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Three written quarterly priorities, each with a definition of done, scored at the end of the 90 days."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a long list of everything you would like to change in the practice"
                - "Pick the three that would make the most difference in 90 days"
                - "Define what done looks like for each of the three"
                - "Schedule the first step of each into next week's management block"
            - name: Owner inbox and message triage rules
              description: |-
                ## Purpose
                Owners commonly receive messages through email, a practice messaging app, the phone system and notes left on the desk, and every channel expects an instant answer. Setting rules for which channel is for what, who screens it first and when you check it cuts the constant switching that eats professional concentration.

                ## Milestones
                1. Every channel that reaches you listed with its typical daily volume.
                2. A rule for each: who reads it first, what gets forwarded, what waits.
                3. Two or three fixed times a day for checking messages.
                4. Folders or filters set up so routine items bypass you.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written triage rules covering every message channel, with filters in place and two or three fixed checking times."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every channel that brings messages to you and roughly how many a day"
                - "Decide who screens each channel before it reaches you"
                - "Set up email folders or filters for supplier, staff and client items"
                - "Pick two or three fixed times a day to check messages"
            - name: Friday weekly owner review
              description: |-
                ## Purpose
                Held at the same time each week, the review is where problems get caught while they are small: a rota gap three weeks out, a staff member who seems unhappy, a quiet booking week ahead. Forty-five minutes on a Friday afternoon, using the agenda, is enough to close the week and set up the next one.

                ## Milestones
                1. A recurring 45-minute slot each Friday in the diary.
                2. A note written for every review with decisions and actions.
                3. Actions from the previous review checked at the start of each one.
                4. Twelve consecutive weekly reviews completed.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly reviews, each with a written note and the previous week's actions checked."
                cadence: rolling
              tasks:
                - "Book a recurring 45-minute Friday slot for the review"
                - "Run the weekly owner review using the agenda @recurring(weekly:fri)"
                - "Start each review by checking last week's actions"
                - "Move unfinished actions to next week or drop them deliberately"
            - name: Monday look-ahead at diary and rota
              description: |-
                ## Purpose
                Many weekly crises, such as a double-booked room, an associate on leave with a full list or a supplier visit during clinic, are visible on Monday morning to anyone who looks. A 15-minute look-ahead at the week's appointments, staff rota and meetings lets you fix them before they cost an afternoon.

                ## Milestones
                1. A 15-minute Monday slot before the first appointment.
                2. The week's bookings, rota and meetings checked side by side.
                3. Clashes and gaps listed with who will fix each one.
                4. Eight weeks of look-aheads with no clash reaching clients unfixed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive Monday look-aheads held, each producing a short list of clashes with a named fixer for each."
                cadence: rolling
              tasks:
                - "Book 15 minutes before the first appointment every Monday"
                - "Check the week's bookings, staff rota and meetings together @recurring(weekly:mon)"
                - "Name who fixes each clash and by when"
            - name: End-of-day shutdown routine
              description: |-
                ## Purpose
                Leaving the practice with unfinished thoughts carries the business home, which is how evenings fill with email and 2am worrying. A ten-minute shutdown at the end of each working day, writing tomorrow's first three tasks, parking open issues on a list and closing the inbox, gives the mind permission to stop.

                ## Milestones
                1. A written shutdown routine of no more than five steps.
                2. The routine done at the end of most working days for a month.
                3. An open-issues list kept so nothing lives only in your head.
                4. Evenings spent on practice email counted before and after.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The shutdown routine completed on at least 80 percent of working days for a month, with evening email sessions counted before and after."
                cadence: rolling
              tasks:
                - "Write a shutdown routine of no more than five steps"
                - "Start an open-issues list for anything unresolved at day end"
                - "Run the end-of-day shutdown routine before leaving @recurring(daily)"
                - "Count the evenings you open practice email in a month"
            - name: Monthly check of next month's diary
              description: |-
                ## Purpose
                By the time a week arrives, its diary is usually full, so the only place to protect management time and personal limits is a month ahead. Checking next month's bookings against your target split, limits and leave on a fixed date each month catches overbooked weeks while reception can still move appointments.

                ## Milestones
                1. A fixed monthly date for the check.
                2. Next month's professional hours compared with your target split.
                3. Weeks over your limits identified and adjusted with reception.
                4. Six monthly checks completed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly diary checks, each recording booked professional hours against target and any weeks adjusted."
                cadence: rolling
              tasks:
                - "Choose a fixed date each month for the diary check"
                - "Compare next month's booked hours with your target split @recurring(monthly:9)"
                - "Ask reception to move bookings out of any week over your limits"
            - name: Quarterly owner planning half-day
              description: |-
                ## Purpose
                Every 90 days the owner needs a few hours away from the clinic floor or the desk to score the last quarter's priorities and pick the next three. Holding it off site, or at least with the phone handed to someone else, stops it turning into another catch-up session.

                ## Milestones
                1. A half-day booked each quarter, outside professional sessions.
                2. Last quarter's three priorities scored as done, partly done or dropped.
                3. Three new priorities chosen with definitions of done.
                4. Four quarterly half-days held in a year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly planning half-days held in twelve months, each producing scored priorities and three new ones."
                cadence: cyclic
              tasks:
                - "Book next quarter's planning half-day outside professional sessions"
                - "Score last quarter's priorities and choose the next three @recurring(quarterly)"
                - "Hand your phone to the practice manager for the duration"
            - name: Interruptions log and batching
              description: |-
                ## Purpose
                A professional interrupted six times in a morning loses far more than six minutes, and in clinical work interruptions are a known source of error. Logging who interrupts, why and whether it could have waited, for two weeks, shows which questions to batch into a message tray, a set check-in time or the management block.

                ## Milestones
                1. Two weeks of interruptions logged with source, reason and urgency.
                2. The five most common reasons identified.
                3. A batching route agreed for each, such as a message tray or set check-in time.
                4. A repeat week logged showing fewer interruptions.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Interruptions logged for two weeks, a batching route set for the top five causes, and a repeat week showing at least a third fewer."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Keep a tally sheet of every interruption for two working weeks"
                - "Group the interruptions by reason and count each group"
                - "Agree a batching route for each of the five most common reasons"
                - "Log a repeat week a month later and compare the totals"
            - name: Wednesday paperwork and sign-off session
              description: |-
                ## Purpose
                Notes, referral letters, reports, drawings to check and documents to sign build up quietly until they fill a Sunday. A fixed weekly session for the paperwork only the owner can do, separate from the management block, keeps the backlog to days rather than weeks and protects record-keeping standards.

                ## Milestones
                1. The owner's sign-off backlog counted and listed.
                2. A weekly 90-minute paperwork session in the diary.
                3. The backlog cleared to under a week's worth.
                4. A same-day rule set for anything the regulator expects promptly, such as clinical notes.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The owner's paperwork backlog held at under one week's worth for two consecutive months."
                cadence: rolling
              tasks:
                - "Count every unsigned note, letter, report or drawing waiting for you"
                - "Book a weekly 90-minute paperwork session away from the management block"
                - "Clear the oldest paperwork first in the weekly session @recurring(weekly:wed)"
                - "Write down which items must be finished on the same day"
            - name: Annual leave planned a year ahead
              description: |-
                ## Purpose
                Owners who wait until they are exhausted to book a holiday usually find the diary full and cover impossible. Fixing next year's leave weeks in advance, blocking them in the booking system and arranging cover early means rest actually happens and clients are booked around it.

                ## Milestones
                1. At least four weeks of leave chosen for the coming year.
                2. The weeks blocked in the booking system before anything is booked into them.
                3. Cover arranged for each period, from a partner, associate or locum.
                4. Every planned week taken, not given back.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Next year's leave of at least four weeks blocked in the booking system with cover named, and all of it taken."
                cadence: cyclic
              tasks:
                - "Choose your leave weeks for the next twelve months"
                - "Block the weeks in the booking system before they fill"
                - "Ask partners or associates which periods they can cover"
                - "Plan and block the following year's leave each autumn @recurring(yearly)"
            - name: Monthly energy and workload check
              description: |-
                ## Purpose
                Exhaustion builds over months and is easy to miss from the inside. A five-minute monthly score of sleep, energy, irritability, hours worked and days fully off, kept in one place, shows the trend early enough to change the diary before it shows up in your work or your health.

                ## Milestones
                1. A simple monthly score sheet with five measures.
                2. A personal threshold written down for when the trend means action.
                3. Twelve monthly entries completed.
                4. Any month over the threshold followed by a concrete change to the diary.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly workload and energy scores recorded, with a diary change logged after any month over your threshold."
                cadence: rolling
              tasks:
                - "Make a score sheet for sleep, energy, irritability, hours and days off"
                - "Score the last month and note total hours worked @recurring(monthly:24)"
                - "Write the score that will trigger a change to your diary"
                - "Book a conversation with your doctor if scores stay low for two months"
            - name: Owner decision log
              description: |-
                ## Purpose
                Repeated decisions about refund requests, overtime, discounts or shift swaps get made again and again because the earlier answer lives only in the owner's head. A short log of the question, the answer and the reason lets staff apply past decisions themselves and shows which ones should become written rules.

                ## Milestones
                1. A decision log with date, question, decision and reason.
                2. Every owner decision for a month recorded.
                3. Repeated decisions turned into written rules staff can apply.
                4. The log reviewed each quarter for new rules.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A month of owner decisions logged and at least three repeated decisions converted into written rules for staff."
                cadence: rolling
              tasks:
                - "Create a decision log with date, question, decision and reason"
                - "Record every decision you are asked to make for a month"
                - "Turn any decision made three times into a written rule"
                - "Review the decision log for new rules @recurring(quarterly)"
            - name: Delegating with a clear five-part brief
              description: |-
                ## Purpose
                Delegation fails most often because the brief was vague, the deadline unspoken and the authority unclear, so the task comes back half done and the owner concludes it is quicker to do it themselves. Practising a five-part brief, covering outcome, deadline, authority, resources and check-in, on three real tasks teaches the skill faster than any book.

                ## Milestones
                1. A five-part brief format written down.
                2. Three real tasks delegated using it.
                3. The person asked what was unclear after each one.
                4. The format revised and used as your default.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three tasks delegated with written five-part briefs, each followed by feedback from the person who took it on."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a five-part brief format covering outcome, deadline, authority, resources and check-in"
                - "Delegate three real tasks this month using the format"
                - "Ask each person what was unclear in the brief"
                - "Update the format based on their answers"
            - name: Saying no to extra sessions and requests
              description: |-
                ## Purpose
                Professionals are trained to help, which makes refusing an extra Saturday clinic, an urgent favour for a referrer or another committee seat feel wrong. Learning a few practised ways to decline or defer, and when to offer an alternative, protects the limits you set without damaging relationships.

                ## Milestones
                1. A list of last month's requests you said yes to and regret.
                2. Three or four short decline and defer phrases written in your own words.
                3. The phrases used at least five times.
                4. A note of which requests are always worth accepting.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five requests declined or deferred using prepared wording within two months, with the outcome of each noted."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List last month's requests you agreed to and later regretted"
                - "Write three short ways to decline or defer in your own words"
                - "Use a prepared phrase the next time a request breaks your limits"
                - "Note which kinds of request you will always accept"
            - name: Time blocking when others book your diary
              description: |-
                ## Purpose
                Unlike most managers, a clinician or fee earner has a diary filled by reception, clients and referrers. Learning to design the template itself, with fixed admin slots, buffer appointments after likely overruns and a no-book zone, gives back the control that ordinary time-management advice assumes you already have.

                ## Milestones
                1. Your current appointment template mapped for a typical week.
                2. Buffer and admin slots added where overruns usually happen.
                3. Reception briefed on which slots they may release and when.
                4. Four weeks run on the new template and overrun minutes compared.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A revised weekly template with buffer and admin slots used for four weeks, with overrun minutes compared before and after."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Export a typical week of your appointment template"
                - "Mark where sessions usually overrun and add a buffer slot after each"
                - "Agree with reception when an unused buffer may be released"
                - "Compare total overrun minutes before and after four weeks"
            - name: Running a 20-minute staff meeting
              description: |-
                ## Purpose
                Long, unfocused staff meetings cost the owner time twice: in the room, and in the questions afterwards because nothing was decided. Practising a short format with a written agenda, a timekeeper, decisions recorded and actions named turns the team meeting into something people value.

                ## Milestones
                1. A standard agenda with no more than four items.
                2. A rotating timekeeper and note-taker chosen.
                3. Decisions and actions recorded in every meeting.
                4. Three meetings run within 20 minutes.

                ## Notes
                Start from the **Meeting notes** template.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three consecutive staff meetings held within 20 minutes, each with written decisions and named actions."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write a four-item agenda format for team meetings"
                - "Choose a rotating timekeeper and note-taker"
                - "Circulate the agenda a day before each meeting"
                - "Send decisions and actions to the team within an hour of finishing"
            - name: Recognising burnout early in yourself
              description: |-
                ## Purpose
                Professionals who own the practice often notice burnout in staff long before they see it in themselves, partly because nobody above them will say so. Learning the common early signs, such as dreading the list, cynicism toward clients, poor sleep and slips in routine work, and agreeing who will tell you, makes it possible to act before it becomes a health or conduct problem.

                ## Milestones
                1. Your professional body's wellbeing guidance or a similar reliable source read.
                2. Your own early signs written down from past hard periods.
                3. One trusted person asked to tell you when they see them.
                4. Your doctor's and a confidential support service's contact details kept to hand.

                ## Notes
                This is about noticing and getting help, not self-diagnosis. Many professional bodies run confidential support lines for practitioners; find yours before you need it.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of your own early warning signs, a named person who will raise them, and a support contact recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find your professional body's wellbeing or practitioner support service"
                - "Write down the signs you showed in your last very hard period"
                - "Ask a partner, spouse or friend to tell you when they see them"
                - "Save the contact details for your doctor and a confidential support line"
            - name: Checklists for jobs you keep reinventing
              description: |-
                ## Purpose
                Month-end payroll checks, a new starter's first day, the insurance renewal and reopening after a holiday closure all get rebuilt from memory each time, usually by the owner. Writing them as short checklists lets someone else run them and shrinks the owner's part to a final check.

                ## Milestones
                1. Five recurring jobs identified that the owner runs from memory.
                2. A checklist written for each and tested once.
                3. Each checklist handed to a named person to run.
                4. The checklists stored where the whole team can find them.

                ## Notes
                Start from the **Operational checklist** template.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five written checklists, each tested once and run by someone other than the owner."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List five jobs you rebuild from memory each time"
                - "Ask the agent to draft a first checklist from your notes on one job"
                - "Test each checklist the next time the job comes round"
                - "Hand each tested checklist to a named person"
            - name: Dictation for notes, letters and reports
              description: |-
                ## Purpose
                Typing notes, letters and reports is often the slowest part of an owner's paperwork. Learning to dictate with the speech-to-text built into the practice system, or a tool approved for confidential information, can cut that time sharply once the vocabulary and document templates are set up.

                ## Milestones
                1. A dictation option checked against your confidentiality and data protection duties.
                2. A personal vocabulary of clinical or technical terms added.
                3. Two weeks of letters or notes produced by dictation.
                4. Time per document compared with typing.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two weeks of notes or letters produced by approved dictation, with average time per document compared against typing."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Check which dictation tools your practice system and data rules allow"
                - "Add your most used technical terms to the dictation vocabulary"
                - "Dictate every letter or note for two weeks"
                - "Time ten documents each way and compare"
            - name: Routing same-day and urgent requests away from you
              description: |-
                ## Purpose
                In many practices every urgent call, walk-in or emergency email lands on the owner by default, whoever is on duty. Agreeing a duty rota or triage rule for same-day requests with the other professionals spreads the load and lets the owner plan their own sessions.

                ## Milestones
                1. Same-day requests counted over two weeks with who handled each.
                2. A duty rota or triage rule drafted with the professional team.
                3. Reception scripts updated to route requests to the duty person.
                4. The owner's share of same-day work measured again after a month.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A duty rota or triage rule in use for a month, with the owner's share of same-day requests measured before and after."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Count same-day requests for two weeks and note who handled each"
                - "Draft a duty rota with the other professionals"
                - "Update the reception script so urgent requests go to the duty person"
                - "Recount the owner's share after one month"
            - name: Deciding which external roles to keep
              description: |-
                ## Purpose
                Committee seats, teaching sessions, professional body roles and charity boards are usually accepted one at a time and never reviewed together. Listing them with hours, value to the practice and value to you, then keeping only those that earn their time, can return several hours a month.

                ## Milestones
                1. Every external role listed with monthly hours, including travel and preparation.
                2. Each scored for value to the practice and to you.
                3. A keep, reduce or leave decision recorded for each.
                4. Notice given on roles you are leaving, with a handover date.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scored list of all external roles with a recorded decision on each, and notice given on any being dropped."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every external role with its monthly hours including travel"
                - "Score each role for value to the practice and value to you"
                - "Write to the chair of any role you are leaving with a handover date"
                - "Review all external roles before accepting new ones @recurring(yearly)"
            - name: Proper breaks in the professional day
              description: |-
                ## Purpose
                Working through lunch to catch up on admin is so normal in clinics and firms that many owners have not taken a real break in years, and afternoon errors and short tempers follow. Putting a protected 30-minute break away from the desk into the session template makes rest part of the working day rather than a reward for finishing.

                ## Milestones
                1. A 30-minute break fixed in each full day's template.
                2. The break taken away from the desk or consulting room.
                3. Breaks ticked off for four weeks.
                4. Afternoon overruns noted before and after for comparison.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A 30-minute break in every full-day template, taken on at least four days a week for four consecutive weeks."
                cadence: rolling
              tasks:
                - "Add a 30-minute break to every full day in the appointment template"
                - "Tell reception the break is never to be booked over"
                - "Take the break away from your desk and tick it off each day"
                - "Note afternoon overruns for two weeks before and after"
            - name: Converting a professional day into a management day
              description: |-
                ## Purpose
                For the owner of a growing practice, the hardest call is often giving up a professional day to run the business properly. Modelling the lost fees against what the management day would deliver, such as faster recruitment, better collections or a second site, makes it a business decision rather than a guilty one.

                ## Milestones
                1. The fee income of one professional day per week calculated.
                2. The specific management outcomes the day would deliver written down.
                3. Cover for the lost sessions costed, such as an associate's extra day.
                4. A decision recorded with a review date six months on.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of one day's lost fees against expected management gains, with a recorded decision and a six-month review date."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Calculate the fees one weekly professional day brings in"
                - "List the management outcomes a weekly management day would deliver"
                - "Cost the cover needed for the sessions you would give up"
                - "Record the decision and book a review six months later"
            - name: Outsourcing bookkeeping, payroll or IT support
              description: |-
                ## Purpose
                Small practice owners often still do the books, run payroll or fix the printer themselves, at an hourly cost far above an outside provider's. Comparing three providers for one function, on price, response times and how they handle confidential data, frees hours that can then be protected for management.

                ## Milestones
                1. The owner's monthly hours on the function counted.
                2. Three providers quoted against the same written scope.
                3. Confidentiality and data protection terms checked for each.
                4. A provider chosen and the handover completed.

                ## Notes
                Start from the **Purchase decision** template.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One function outsourced after comparing three written quotes, with confidentiality terms checked and the owner's monthly hours on it recorded before and after."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Count the hours you spent last month on bookkeeping, payroll or IT"
                - "Write a one-page scope for the function you want to hand over"
                - "Get quotes from three providers against that scope"
                - "Check each provider's confidentiality and data handling terms"
            - name: Cutting the meetings the owner attends
              description: |-
                ## Purpose
                Most owners sit in every meeting because they always have. Reviewing a month of meetings and asking of each whether your presence changes the outcome usually removes a good share of them, with notes or a delegate covering the rest.

                ## Milestones
                1. A month of meetings listed with length and purpose.
                2. Each marked as essential, delegate, notes only or stop.
                3. Changes communicated to the people who run each meeting.
                4. The owner's monthly meeting hours compared before and after.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The owner's monthly meeting hours cut by at least a quarter, with each change recorded and communicated."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every meeting from the last month with its length"
                - "Mark each as essential, delegate, notes only or stop"
                - "Tell each meeting organiser what is changing"
                - "Compare your meeting hours a month later"
            - name: Out-of-hours and on-call load review
              description: |-
                ## Purpose
                Out-of-hours rotas, on-call phones and emergency cover can quietly add a day a week to an owner's hours, especially in veterinary, medical and dental practice. Measuring the real load and comparing options, such as a fairer rota among partners, a shared cooperative or a commercial out-of-hours provider, supports a decision that still meets your regulator's cover rules.

                ## Milestones
                1. Three months of out-of-hours calls and callouts counted by person.
                2. Your regulator's or contract's cover obligations checked.
                3. Two or three cover options costed.
                4. A decision recorded and the new rota published.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of out-of-hours options against regulatory cover duties, with a decision and a published rota."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Count out-of-hours calls and callouts per person for three months"
                - "Check what out-of-hours cover your regulator or contracts require"
                - "Get prices for a shared or commercial out-of-hours service"
                - "Publish the new rota once a decision is made"
            - name: After-hours contact rules
              description: |-
                ## Purpose
                Practice messaging groups that ping at 10pm train everyone, owner included, to treat evenings as working time. Agreed rules for after-hours contact, covering what counts as an emergency, who is called and what waits for the morning, give the owner real evenings off.

                ## Milestones
                1. A written list of what counts as an after-hours emergency.
                2. A named contact order for genuine emergencies.
                3. Notifications for practice channels switched off outside agreed hours.
                4. A month of evenings with no non-urgent practice contact answered.

                ## Notes
                Pin the rules in the staff channel. Unwritten rules erode within weeks, usually starting with the owner.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Written after-hours contact rules shared with staff, and a month with no non-urgent practice messages answered after the agreed time."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down what counts as an emergency outside working hours"
                - "Set the order of who is called for a genuine emergency"
                - "Switch off practice channel notifications outside agreed hours"
                - "Pin the rules in the staff messaging channel"
            - name: Two-week holiday without checking in
              description: |-
                ## Purpose
                Many owners have not taken two consecutive weeks off since they bought or opened the practice, and the first attempt shows exactly what still depends on them. Planning a fortnight away with cover, a handover note and one agreed emergency route proves the practice can run without you for that long.

                ## Milestones
                1. Two consecutive weeks chosen and blocked at least three months ahead.
                2. Professional cover arranged for every session.
                3. A handover note listing open issues and who decides what.
                4. The fortnight taken with no more than one planned check-in.
                5. A list of what came up, used to fix gaps before the next holiday.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A two-week holiday taken with cover in place, no more than one check-in, and a written list of issues that arose."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick two consecutive weeks at least three months away"
                - "Arrange cover for every session in those weeks"
                - "Write a handover note of open issues and who decides each"
                - "Agree one emergency contact route with the practice manager"
                - "List what came up while you were away within a week of returning"
            - name: Peak season workload plan
              description: |-
                ## Purpose
                Accounting firms have tax deadlines, veterinary practices have seasonal surges and clinics have winter illness, and owners often absorb the peak personally. A plan written six weeks before it starts, with extra cover, paused projects and a slimmer management agenda, keeps the owner's hours inside a known limit.

                ## Milestones
                1. The peak period and its usual extra hours identified from last year.
                2. Extra cover, overtime or locum sessions booked.
                3. Non-urgent owner projects paused until the peak passes.
                4. Owner hours during the peak recorded against the planned limit.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written peak plan with cover booked six weeks ahead, and the owner's peak-period hours recorded against a planned limit."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Check last year's diary for when the peak started and ended"
                - "Book extra cover or locum sessions for the busiest weeks"
                - "Pause owner projects that can wait until after the peak"
                - "Record your weekly hours through the peak against your limit"
            - name: Annual owner strategy day
              description: |-
                ## Purpose
                Once a year the owner needs a full day to look at the practice from the outside: what kind of work they want to be doing in three years, which services to grow or stop, and how their own role should change. Doing it away from the premises, with the year's review notes in hand, produces decisions a quarterly half-day cannot.

                ## Milestones
                1. A full day booked away from the practice.
                2. The year's weekly review notes, quarterly scores and energy scores gathered.
                3. A three-year picture of your own role written on one page.
                4. A theme for each of next year's four quarters agreed.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An annual strategy day held, producing a one-page three-year role picture and four written quarterly themes."
                cadence: cyclic
              tasks:
                - "Book a full day away from the practice for the annual strategy day @recurring(yearly)"
                - "Gather the year's review notes and energy scores beforehand"
                - "Write one page on what your role should look like in three years"
                - "Choose a theme for each of next year's quarters"
            - name: Planning a sabbatical of a month or more
              description: |-
                ## Purpose
                Four weeks or more away, for study, family or rest, needs a year of planning in a small practice: cover contracts, client communication and a deputy with genuine authority. Planned well, it also tests how the practice runs without the owner in a way no fortnight can.

                ## Milestones
                1. Dates and purpose agreed with partners and family a year ahead.
                2. Cover contracted for the whole period.
                3. A deputy named with written authority limits.
                4. Patients or clients told in good time, in line with your regulator's continuity expectations.
                5. A return plan written for the first week back.
              priority: low
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A sabbatical of four weeks or more taken with contracted cover, a named deputy with written authority and a return plan."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Agree sabbatical dates and purpose with partners and family"
                - "Ask locum agencies or associates about cover for the period"
                - "Write the deputy's authority limits for the time you are away"
                - "Draft the message to patients or clients about the absence"
                - "Plan your first week back before you leave"
            - name: Owner time during a system go-live or premises move
              description: |-
                ## Purpose
                New practice systems, refits and moves to new premises can absorb the owner completely for weeks, on top of a full professional list. Deciding in advance how many sessions to drop, who leads the project day to day and what the owner will personally do keeps the change from turning into months of evenings.

                ## Milestones
                1. The change's busiest weeks identified with the supplier or contractor.
                2. Owner sessions reduced or covered for those weeks.
                3. A day-to-day project lead named other than the owner.
                4. Owner tasks for the project limited to a written list.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written plan for the go-live or move showing reduced owner sessions, a named project lead and a list of owner-only tasks."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the supplier or contractor which weeks will need the most input"
                - "Reduce or cover your sessions in those weeks"
                - "Name a day-to-day lead for the project who is not you"
                - "Write the short list of decisions that still need the owner"
            - name: Owner time plan for the first year of a new practice
              description: |-
                ## Purpose
                In the first year of a new or newly bought practice, founders typically see clients by day and build systems by night, and the habit sticks for a decade. Planning the year in phases, with heavy set-up in the first quarter and then a deliberate step down, sets a pattern you can live with.

                ## Milestones
                1. Four quarterly phases written with an hours limit for each.
                2. The set-up and management tasks expected in each phase listed.
                3. Monthly hours recorded against each phase's limit.
                4. Weekly hours at or below your long-term target by the end of the year.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A four-phase first-year plan with hours limits, monthly hours recorded, and weekly hours at the long-term target by month twelve."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write four quarterly phases for the first year with an hours limit each"
                - "List the set-up tasks that belong in each phase"
                - "Record your total hours at the end of each month"
                - "Book a review at month six to adjust the remaining phases"
            - name: Solo practitioner week without a practice manager
              description: |-
                ## Purpose
                Sole practitioners with one receptionist, or none, cannot delegate in the usual sense, so the answer is fewer tasks, outside help and strict batching. Designing a week around one admin morning, an outsourced bookkeeper and online booking and payment keeps the business side to a fixed number of hours.

                ## Milestones
                1. Every non-professional task listed with its weekly hours.
                2. Tasks stopped, automated or outsourced where possible.
                3. One fixed admin morning a week holding the rest.
                4. Weekly business hours kept within a written limit for two months.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A solo practitioner's week with business tasks held in one admin morning and kept within a written hours limit for two months."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every task you do that is not professional work"
                - "Mark each as stop, automate, outsource or batch"
                - "Set one fixed admin morning a week for everything left"
                - "Turn on online booking or payment if it removes phone and invoice work"
            - name: Practice hours around school runs and caring duties
              description: |-
                ## Purpose
                For an owner who is also a parent or carer, the difficulty is less the total hours than the fixed points: the school gate at 3.15, a parent's hospital appointments, a child sent home ill. Building those points into the session template, with a backup plan for sudden absence, stops the practice and the family competing for the same hour every day.

                ## Milestones
                1. The family's fixed weekly commitments listed with times.
                2. Session times adjusted so they do not clash.
                3. A backup plan for short-notice absence agreed with a partner, associate or locum.
                4. A month run without a clash forcing a cancelled list.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Session times redesigned around the family's fixed commitments, a written short-notice backup plan, and a month with no lists cancelled because of clashes."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down every fixed family commitment in a normal week"
                - "Move session start and end times to clear those points"
                - "Agree who covers your list if a child or relative needs you suddenly"
                - "Check next term's school and care dates against the diary @recurring(quarterly)"
            - name: Sharing management duties between partners
              description: |-
                ## Purpose
                Management in a partnership often falls to whichever partner minds most, who then resents the others. Agreeing a written split, such as one partner for finance, one for people and one for premises and compliance, each with protected time, turns management into a shared and visible job.

                ## Milestones
                1. All management responsibilities listed from the partners' combined time audits.
                2. Each area assigned to a named partner.
                3. Protected management hours agreed for each partner.
                4. The split reviewed at the annual partners' meeting.

                ## Notes
                If the partnership agreement already assigns management roles or pays for them, check the new split against it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written split of management responsibilities between partners, with protected hours for each, agreed at a partners' meeting."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask each partner to list the management work they currently do"
                - "Group the work into three or four portfolios"
                - "Assign each portfolio to a named partner with protected hours"
                - "Add the split to the agenda of the annual partners' meeting"
            - name: Phased return after parental or sick leave
              description: |-
                ## Purpose
                Coming back after parental leave, illness or a bereavement straight into a full list and a backlog of management issues is a common route to a second absence. A phased return, with reduced sessions, a briefing from whoever deputised and a short list of the decisions waiting for you, makes the return sustainable.

                ## Milestones
                1. A phased return over four to eight weeks agreed with partners or the practice manager.
                2. A written handback briefing from the deputy.
                3. Waiting decisions sorted into now, soon and later.
                4. Full sessions resumed by the agreed date, or the plan adjusted.

                ## Notes
                After illness, agree the return pattern with your own doctor or an occupational health adviser.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written phased return over four to eight weeks, a handback briefing received and full sessions resumed on an agreed date."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Draft a session pattern rising over four to eight weeks"
                - "Ask your deputy for a written handback briefing"
                - "Sort the waiting decisions into now, soon and later"
                - "Review the return plan with your partners at week four"
            - name: Reducing your own professional hours in later career
              description: |-
                ## Purpose
                Owners in their late fifties and sixties often want to see fewer patients or clients well before they sell or retire, but the diary rarely shrinks on its own. Setting a reduced session pattern, the work you keep and the work you pass to colleagues makes the change planned rather than sudden.

                ## Milestones
                1. A target weekly session pattern for the next two years.
                2. The clients or patients you keep and those you transfer listed.
                3. Colleagues briefed and the transfers scheduled.
                4. The first reduced pattern live in the booking system.

                ## Notes
                Ownership, exit and who takes over belong in succession planning. This project is only about your own weekly load.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A reduced two-year session pattern in the booking system, with a written list of transferred clients or patients."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the weekly session pattern you want in two years"
                - "List the clients or patients you will keep personally"
                - "Brief the colleagues who will take over the others"
                - "Change the booking template to the first reduced pattern"
            - name: Owner week across several sites
              description: |-
                ## Purpose
                An owner with two or three locations can lose a day a week to driving and to being in the wrong building when a problem arises. A fixed weekly pattern of where you are, with site leads handling the rest and a standing call with each, makes the owner's presence predictable and useful.

                ## Milestones
                1. A fixed weekly pattern of which site you are at and when.
                2. A named lead for each site with authority to act day to day.
                3. A short weekly call with each site lead.
                4. Weekly travel hours recorded and reduced.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A published weekly site pattern, a named lead per site, and weekly travel hours recorded for two months."
                cadence: rolling
              tasks:
                - "Set a fixed weekly pattern of which site you are at each day"
                - "Confirm each site lead's authority for day-to-day decisions"
                - "Hold a 15-minute call with each site lead @recurring(weekly:tue)"
                - "Record your weekly travel hours for two months"
            - name: Moving from owner-operator to owner-director
              description: |-
                ## Purpose
                At around eight to fifteen professionals, many practices outgrow an owner who runs everything personally. Stepping into a director role, with a practice manager or managing partner running operations and the owner holding strategy, finance and senior hiring, needs a written role for yourself and a clear handover of day-to-day authority.

                ## Milestones
                1. A written role description for yourself as owner-director.
                2. Day-to-day operational authority handed to a named manager or managing partner.
                3. A monthly owner-director meeting replacing daily involvement.
                4. Six months completed in the new role, followed by a review.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written owner-director role description in use, operational authority formally handed over, and a six-month review held."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write a one-page role description for yourself as owner-director"
                - "List the operational decisions you will hand over and to whom"
                - "Set up a monthly meeting to replace daily involvement"
                - "Hold a review of the new role after six months"
            - name: Annual owner workload report to partners
              description: |-
                ## Purpose
                Uneven workloads cause more partner disputes than money does in many firms, often because nobody has the numbers. A short annual report showing each partner's professional hours, management hours, out-of-hours load and leave taken gives the partners' meeting facts to discuss instead of impressions.

                ## Milestones
                1. A standard format for each partner's annual hours by category.
                2. Data gathered from diaries, the booking system and time records.
                3. The report circulated before the annual partners' meeting.
                4. Any agreed workload changes recorded in the minutes.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An annual workload report covering every partner, circulated before the partners' meeting, with agreed changes minuted."
                cadence: cyclic
              tasks:
                - "Agree a report format with categories every partner recognises"
                - "Pull each partner's hours from diaries and time records"
                - "Ask the agent to summarise the differences between partners on one page"
                - "Circulate the workload report before the partners' meeting @recurring(yearly)"
            - name: Practice owners' peer group
              description: |-
                ## Purpose
                Nobody inside the practice sits at the owner's level, which makes it hard to test decisions about time, staff and workload honestly. A peer group of four to six owners from other practices, ideally in other towns, meeting every month or two under an agreed confidentiality rule, gives challenge on the owner's role that staff cannot.

                ## Milestones
                1. Possible members found through your professional body, a business network or former colleagues.
                2. A format agreed covering frequency, length, confidentiality and one member's issue per meeting.
                3. Four meetings held.
                4. One change to your own working week made because of the group.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A peer group of at least four practice owners meeting regularly, with four meetings held and one change to your week recorded."
                cadence: rolling
              tasks:
                - "List five owners from other practices whose judgement you respect"
                - "Propose a format with dates, confidentiality and a rotating focus"
                - "Bring one real time or workload problem to the peer group @recurring(monthly:15)"
            - name: Year-on-year owner time audit
              description: |-
                ## Purpose
                Changes to the diary drift back within a year unless they are measured again. Repeating the two-week time audit every twelve months, with the same categories, shows whether management time stayed protected, whether delegation held and whether total hours actually fell.

                ## Milestones
                1. The two-week audit repeated with the same categories.
                2. Results set beside last year's in one table.
                3. Each category's change explained in a sentence.
                4. Next year's target split adjusted where needed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A repeated two-week time audit compared with the previous year's in one table, with next year's target split confirmed."
                cadence: cyclic
              tasks:
                - "Repeat the two-week time audit using last year's categories @recurring(yearly)"
                - "Put this year's totals beside last year's in one table"
                - "Explain each change of more than five percent in one sentence"
                - "Adjust next year's target split if the audit shows it is unrealistic"
---

# Practice Owner Time Management

This area is for the owner who is also the busiest professional in the building: the dentist, vet, solicitor, accountant, engineer or physiotherapist who sees clients all day and runs the business in the gaps. It starts with foundations (a two-week time audit, a target split, owner-only duties, a protected management block and personal limits), then the weekly and monthly routines, the skills of delegating and saying no, decisions that move work off the owner, the dated events of leave, peaks and big changes, situations from a first-year founder to a partner sharing management, and finally the shift from owner-operator to owner-director.

What repeats is a Monday look-ahead, a protected management block, a Wednesday paperwork session, a Friday owner review, a daily shutdown, monthly diary and energy checks, a quarterly planning half-day and a yearly strategy day, leave plan and repeat time audit. The Metrics log, Meeting notes, Operational checklist and Purchase decision templates pair with it. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
