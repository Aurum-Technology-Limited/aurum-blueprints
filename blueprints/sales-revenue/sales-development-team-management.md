---
id: sales-revenue.sales-development-team-management
name: Sales Development Team Management
description: "Fair meeting targets, daily standups and weekly one-to-ones, a clean handoff to account executives, and a written promotion path that turns prospecting reps into closers."
category: business
version: 1.0.0
tags: [sales-revenue, sales-development-team-management, manager, team, enterprise, sdr, meeting-targets, promotion-path]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - skills-matrix
    - one-on-one
    - development-plan
    - onboarding-30-60-90
    - remediation-plan
  pillars:
    - name: Sales & Revenue
      emoji: "💼"
      description: "Turning interest into revenue: prospecting and pipeline, discovery and demos, proposals and negotiation, forecasting, key accounts, sales process, enablement and compensation."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Sales Development Team Management
          description: "Leading a team of prospecting reps, setting activity and meeting targets, running daily standups and building a promotion path into closing roles."
          projects:
            - name: SDR team charter and remit
              description: |-
                ## Purpose
                Prospecting teams drift into whatever is loudest that week: chasing webinar attendees one day, researching enterprise logos the next, booking calls for existing customers on Friday. A one-page charter states which segments and lead types the SDR team covers, what it hands over and when, and what it does not do, so account executives, marketing and the SDRs themselves stop arguing about it.

                ## Milestones
                1. The segments, regions and lead sources the team covers listed, with anything out of scope named.
                2. The point at which an SDR hands a prospect to an account executive written in one sentence.
                3. Work the team will not take on, such as renewals or upsells to existing customers, written down.
                4. The charter signed off by the heads of sales and marketing and pinned in the team channel.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page SDR charter covering segments, lead sources, handover point and exclusions, approved by sales and marketing leadership."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every type of work the SDRs did in the last month"
                - "Mark each item as core, occasional or out of scope"
                - "Draft the one-page charter and send it to the sales and marketing heads"
                - "Reread the charter with the sales and marketing heads @recurring(yearly)"
            - name: Qualified meeting definition agreed with account executives
              description: |-
                ## Purpose
                Nothing sours the relationship between SDRs and account executives faster than meetings the closer thinks were a waste of time. Writing down what a meeting must have to count, such as the right job title, a company inside the profile and a stated reason to talk, gives both sides the same test and ends the weekly argument about quality.

                ## Milestones
                1. Three to five acceptance criteria agreed with at least two account executives.
                2. A short list of automatic rejections, such as students, competitors and existing customers, written down.
                3. A rule for meetings that fall just short, naming who decides and within how many days.
                4. The criteria added to the CRM meeting record as required fields.

                ## Notes
                Keep the bar about fit and interest, not budget and timeline. Full qualification belongs in the account executive's discovery call, and an SDR who tries to do it scares off half the meetings.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written qualified meeting definition with acceptance criteria and a rule for borderline cases, agreed by the SDR manager and the account executive team lead."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pull the last 20 meetings account executives complained about"
                - "Draft acceptance criteria from what those meetings were missing"
                - "Agree the criteria with two account executives in a 30-minute session"
                - "Compare rejected meetings against the definition and adjust it @recurring(quarterly)"
            - name: Ninety-day SDR performance baseline
              description: |-
                ## Purpose
                Targets set from gut feel or a vendor benchmark tend to be either impossible or soft. Pulling the last ninety days of activities, conversations, meetings booked, meetings held and meetings accepted for each SDR shows what the team actually produces today, and where the gap between booked and held is hiding.

                ## Milestones
                1. Ninety days of activity and meeting data exported for every SDR.
                2. Each SDR's weekly averages for activities, conversations, booked, held and accepted meetings in one table.
                3. The team's conversion rate at each step worked out.
                4. The two biggest drop-off points between steps noted with a likely cause.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table of ninety-day weekly averages per SDR across five funnel steps, with team conversion rates and two named drop-off points."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Export the last 90 days of activities and meetings from the CRM"
                - "Average each SDR's weekly numbers at each funnel step"
                - "Work out the team conversion rate from conversation to accepted meeting"
                - "Write down the two steps where the most meetings are lost"
            - name: Weekly accepted meeting target per SDR
              description: |-
                ## Purpose
                Measure SDRs on the output that matters, accepted meetings, with activity numbers there to diagnose rather than to punish. Working back from the baseline conversion rates to a weekly meeting target and a supporting activity range gives each rep a number they can see is fair, and a daily plan that adds up to it.

                ## Milestones
                1. A weekly accepted meeting target set for fully ramped SDRs, based on the baseline.
                2. A reduced target for SDRs in their first months, rising in steps.
                3. A daily activity range that, at current conversion rates, produces the meeting target.
                4. Targets explained to each SDR individually, with how they were worked out.

                ## Notes
                Check any link between targets and pay with whoever owns the compensation plan before announcing numbers. A target that changes someone's income needs that owner's sign-off.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every SDR has a written weekly accepted meeting target and daily activity range, explained to them in person before the next month starts."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Divide the target meetings by each conversion rate to get the activity needed"
                - "Set a stepped target for SDRs who are still ramping"
                - "Write each SDR's target and how it was worked out in one paragraph"
                - "Walk each SDR through their target in their next one-to-one"
            - name: SDR to account executive pairing model
              description: |-
                ## Purpose
                Whether SDRs work for named account executives or feed a shared pool changes everything from handoff quality to who gets the blame for a no-show. Choosing a pairing model, such as fixed pods of one SDR to two or three closers, or round robin from a pool, and writing down the ratio and rules, settles who works with whom and why.

                ## Milestones
                1. Current pairings and meeting flow between SDRs and account executives mapped.
                2. Fixed pods and a shared pool compared on handoff quality, fairness and holiday cover.
                3. A model and ratio chosen, with the reasoning written in a paragraph.
                4. Pairings announced to both teams with a review date six months out.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A chosen pairing model and SDR to account executive ratio recorded with reasoning, announced to both teams with a review date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Map which account executives each SDR booked meetings for last quarter"
                - "List the strengths and risks of fixed pods against a shared pool"
                - "Ask three account executives which model they would choose and why"
                - "Announce the pairings and the date they will be reviewed"
            - name: SDR team dashboard
              description: |-
                ## Purpose
                Managers who run the team from a dozen CRM reports spend Monday mornings building spreadsheets instead of coaching. One dashboard with the five numbers that matter, activities, conversations, meetings booked, meetings held and meetings accepted, per SDR and per week, shows the whole team at a glance and becomes the single page used in standups and one-to-ones.

                ## Milestones
                1. Five numbers defined, each with a precise CRM filter.
                2. A dashboard showing each SDR's numbers this week against target.
                3. A twelve-week trend view added for each number.
                4. The dashboard checked against a manual count and the differences fixed.

                ## Notes
                Start from the **Metrics log** template to keep a weekly snapshot alongside the live dashboard, since CRM reports quietly change when records are edited later.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dashboard showing five defined numbers per SDR against weekly target with a twelve-week trend, reconciled once against a manual count."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the CRM filter that defines each of the five numbers"
                - "Build the weekly view per SDR with target beside actual"
                - "Count one SDR's meetings by hand and compare with the dashboard"
                - "Save a snapshot of the week's numbers in the metrics log @recurring(weekly:fri)"
            - name: Protected prospecting blocks in the team calendar
              description: |-
                ## Purpose
                SDR days are easily eaten by training, internal meetings and admin, and the hours when prospects actually answer are the first to go. Putting two protected prospecting blocks into every SDR's calendar, at the times your buyers are most reachable, and moving internal meetings out of them, is often worth more than any new script.

                ## Milestones
                1. The hours with the best connect and reply rates identified from last quarter's data.
                2. Two daily prospecting blocks set as recurring calendar events for every SDR.
                3. Team meetings, training and one-to-ones moved outside those blocks.
                4. A month of calendars checked for internal meetings booked into the blocks.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every SDR has two recurring prospecting blocks in their calendar and no internal meetings were booked into them over a full month."
                cadence: rolling
              tasks:
                - "Find the hours with the highest connect rates in last quarter's call data"
                - "Send every SDR a recurring invite for the two prospecting blocks"
                - "Move the team meeting and training sessions out of those hours"
                - "Check calendars for internal meetings landing in the blocks @recurring(monthly:14)"
            - name: SDR levels and promotion criteria
              description: |-
                ## Purpose
                Most people take an SDR job as a route into a closing role, and the ones who cannot see the path leave for a competitor who shows them one. Written levels, such as SDR, senior SDR and ready for account executive, each with the results, skills and behaviours needed, make promotion a standard anyone can check rather than a favour.

                ## Milestones
                1. Two or three SDR levels named, with what changes at each.
                2. Results, skills and behaviours required for each level written down.
                3. The minimum time in role and the evidence needed for promotion to account executive agreed with the sales leader.
                4. The criteria shared with every SDR and used in their next career conversation.

                ## Notes
                Start from the **Skills matrix** template. Judge results over a sustained period, such as three of the last four months at target, so one lucky month does not decide a promotion.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written SDR levelling document with results, skills and evidence for each level and for promotion to account executive, approved by the sales leader and shared with the team."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List what your last three promoted SDRs had in common"
                - "Draft results, skills and behaviours for each level"
                - "Agree the promotion bar to account executive with the sales leader"
                - "Score each SDR against the criteria and tell them where they stand @recurring(quarterly)"
            - name: Account claiming and release rules for SDRs
              description: |-
                ## Purpose
                Two SDRs emailing the same head of operations in the same week makes the company look disorganised, and an SDR sitting on two hundred accounts they never touch blocks everyone else. Clear rules on how many accounts an SDR may claim, how long they keep them without activity and how disputes are settled keep coverage fair and prospects spared.

                ## Milestones
                1. A maximum number of claimed accounts per SDR set.
                2. An inactivity period after which an account returns to the shared pool agreed.
                3. A simple rule for disputes, such as first logged activity wins.
                4. The rules set up in the CRM as ownership fields and a release report.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written claiming rules with a cap, an inactivity release period and a dispute rule, enforced by a CRM report that is worked every month."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Count how many accounts each SDR owns and how many they touched last month"
                - "Set the claim cap and the inactivity release period"
                - "Build a CRM report of claimed accounts with no activity in the release period"
                - "Release stale accounts back to the pool from the report @recurring(monthly:24)"
            - name: Meeting handoff note standard
              description: |-
                ## Purpose
                An account executive who opens a first meeting by asking the prospect to repeat everything they told the SDR undoes the work that earned it. A short handoff note written into the CRM before every booked meeting, carrying why the prospect agreed, what they said hurts and who else is involved, lets the closer start where the SDR left off.

                ## Milestones
                1. Five handoff fields agreed with account executives, such as trigger, stated pain, role, others involved and what was promised.
                2. The fields added to the meeting record in the CRM.
                3. Three strong example notes saved where every SDR can find them.
                4. A month of notes spot-checked, with gaps fed back to each SDR.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every booked meeting in a four-week spot check carries a completed five-field handoff note in the CRM."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask account executives what they wish they knew before first meetings"
                - "Agree five handoff fields and add them to the CRM meeting record"
                - "Save three strong example notes in the team folder"
                - "Spot-check ten handoff notes and send each SDR their gaps"
            - name: Daily SDR standup
              description: |-
                ## Purpose
                Fifteen minutes at the start of the day is enough to see yesterday's numbers, hear each SDR's plan for today and catch blockers before they cost a morning. Standups that run long, or turn into public reviews of who is behind, do more harm than none, so the format matters as much as the habit.

                ## Milestones
                1. A fixed time, a 15-minute limit and a three-question format agreed.
                2. The dashboard on screen at every standup.
                3. Blockers raised in standup answered the same day.
                4. Standup held on at least 90 percent of working days for a quarter.

                ## Notes
                Take individual performance conversations to one-to-ones. Standup is for plans and blockers, and anyone singled out in it will dread the next one.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The 15-minute standup runs on at least 90 percent of working days for a quarter, with every raised blocker answered the same day."
                cadence: rolling
              tasks:
                - "Choose a standup time just before the first prospecting block"
                - "Write the three standup questions at the top of the dashboard page"
                - "Run the 15-minute standup with the dashboard on screen @recurring(weekly:mon,tue,wed,thu,fri)"
                - "Follow up every blocker raised in standup before midday"
            - name: Weekly SDR team meeting
              description: |-
                ## Purpose
                Standups handle the day; the weekly meeting is where the team learns together. An hour split between one win worth copying, one skill practised as a group and one insight from the market or from account executives keeps the team improving as a unit rather than as isolated reps.

                ## Milestones
                1. A fixed agenda of win, skill and market insight agreed.
                2. A rota of SDRs presenting the win, so everyone contributes.
                3. Account executives or marketing invited at least once a month.
                4. Notes from each meeting saved with the actions agreed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly team meetings held with the three-part agenda and notes saved for each."
                cadence: rolling
              tasks:
                - "Set the three-part agenda and a presenter rota for the next eight weeks"
                - "Invite one account executive to share what made a recent meeting convert"
                - "Run the weekly team meeting and save the notes @recurring(weekly:mon)"
                - "Pick next week's skill topic from patterns in rejected meetings"
            - name: Weekly one-to-ones with each SDR
              description: |-
                ## Purpose
                Hearing no dozens of times a day wears people down, and a manager who only sees SDRs in a group misses who is struggling and who is ready for more. Thirty minutes a week with each SDR, covering their numbers, one thing to work on and how they are really doing, is the core of the job.

                ## Milestones
                1. A 30-minute weekly slot booked with every SDR, outside prospecting blocks.
                2. A shared page per SDR holding numbers, focus and actions.
                3. Actions from the last meeting checked at the start of every one-to-one.
                4. No one-to-one cancelled twice in a row over a quarter.

                ## Notes
                Start from the **1:1** template. Let the SDR set the first item on the agenda, and keep the numbers to five minutes.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every SDR has had a weekly one-to-one with a written page for at least eleven of the last twelve weeks."
                cadence: rolling
              tasks:
                - "Book a recurring 30-minute slot with each SDR outside prospecting blocks"
                - "Create a one-to-one page for each SDR from the template"
                - "Hold each one-to-one and update the actions on that SDR's page @recurring(weekly:wed)"
                - "Ask each SDR what would make next week easier"
            - name: Meeting confirmation and no-show routine
              description: |-
                ## Purpose
                A booked meeting that never happens wastes the SDR's effort and the account executive's slot, and some teams lose a fifth or more of their bookings this way. A standard routine, with a calendar invite and agenda sent at booking, a reminder the day before and a prompt reschedule attempt for every no-show, raises the share of meetings that are actually held.

                ## Milestones
                1. The held rate for the last eight weeks of booked meetings measured.
                2. A confirmation routine written: invite with agenda at booking, reminder the day before.
                3. A reschedule rule for no-shows, such as two attempts within three days.
                4. The held rate tracked weekly and compared with the starting point after two months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every SDR uses the confirmation routine and the held rate has been tracked weekly for eight weeks against the starting figure."
                cadence: rolling
              tasks:
                - "Work out the held rate for the last eight weeks of booked meetings"
                - "Write the confirmation routine and a standard invite with agenda"
                - "Agree the two-attempt reschedule rule with the team"
                - "Review the week's no-shows and reschedules with the team @recurring(weekly:thu)"
            - name: Meeting quality ratings from account executives
              description: |-
                ## Purpose
                Few SDRs ever find out what happened after the handoff, so they keep booking the same weak meetings. A quick rating from the account executive after every first meeting, accepted or rejected with a reason from a short list, closes the loop and gives you real evidence for coaching instead of anecdotes.

                ## Milestones
                1. An accepted or rejected field with a short reason list added to the meeting record.
                2. Account executives committed to rating within two working days of each meeting.
                3. A weekly summary of acceptance rate by SDR.
                4. Rejection reasons discussed with each SDR in their one-to-one.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least 90 percent of first meetings in a month carry an account executive rating within two working days, summarised by SDR each week."
                cadence: rolling
              tasks:
                - "Add the accepted or rejected field and reason list to the meeting record"
                - "Ask the account executive team lead to back the two-day rating rule"
                - "Chase unrated meetings and summarise acceptance by SDR @recurring(weekly:tue)"
                - "Bring each SDR's rejection reasons to their next one-to-one"
            - name: Monthly target review for each SDR
              description: |-
                ## Purpose
                Weekly numbers swing with holidays, list quality and luck, so the month is where you see whether an SDR is genuinely on track. Reviewing each person's month against target, with the real reason behind any shortfall, keeps conversations fair and catches a slide before it becomes a performance issue.

                ## Milestones
                1. Each SDR's accepted meetings for the month compared with target.
                2. The main reason for any shortfall recorded, such as list quality, skill or time off.
                3. One action agreed with each SDR who missed.
                4. Anyone below target two months running raised with the sales leader, with a support plan.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly review note for every SDR, recording attainment, the main reason for any gap and one agreed action, for six consecutive months."
                cadence: rolling
              tasks:
                - "Pull each SDR's accepted meetings against target for the month @recurring(monthly:2)"
                - "Note the main reason behind each shortfall in a single line"
                - "Agree one specific action with each SDR who missed"
                - "Flag anyone below target two months running to the sales leader"
            - name: Monthly sourced pipeline report to sales leadership
              description: |-
                ## Purpose
                Leadership funds an SDR team for the pipeline it creates, not the emails it sends, and a team that only reports activity looks like a cost centre. A short monthly report with meetings accepted, opportunities created, pipeline value sourced and the revenue earlier opportunities went on to close tells the story in the numbers leadership cares about.

                ## Milestones
                1. SDR-sourced opportunities tagged consistently in the CRM.
                2. A one-page layout with accepted meetings, opportunities, pipeline value and revenue closed.
                3. The report sent by the sixth of each month.
                4. A short note explaining any large swing included each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A one-page sourced pipeline report sent to sales leadership by the sixth of each month for six months running."
                cadence: rolling
              tasks:
                - "Agree with sales operations how SDR-sourced opportunities are tagged"
                - "Draft a one-page report layout with four headline numbers"
                - "Send the sourced pipeline report to sales leadership @recurring(monthly:6)"
                - "Add one sentence explaining any month-on-month swing"
            - name: Monthly prospect data quality check
              description: |-
                ## Purpose
                Bounced emails, disconnected numbers and contacts who left the company months ago burn SDR hours and sending reputation. Checking bounce and wrong-number rates by list source each month, and raising them with whoever owns data, stops the team blaming themselves for a data problem.

                ## Milestones
                1. Bounce and wrong-number rates measured for each list source.
                2. An acceptable threshold for each rate agreed with the data owner.
                3. Sources above threshold paused or cleaned.
                4. A quick way for SDRs to flag bad records in the CRM.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Bounce and wrong-number rates by list source logged monthly for six months, with every source over threshold paused or cleaned."
                cadence: rolling
              tasks:
                - "Pull bounce and wrong-number rates by list source @recurring(monthly:16)"
                - "Agree acceptable thresholds with the data or operations owner"
                - "Pause any source above threshold until it is cleaned"
                - "Add a bad-data flag SDRs can tick on a contact record"
            - name: Quarterly SDR targets, themes and coverage plan
              description: |-
                ## Purpose
                Each quarter brings new targets, campaigns and sometimes new segments, and SDRs who hear about them in week three have already lost a fortnight. A plan written before each quarter, setting targets, two or three outreach themes and who covers what, means the team starts day one knowing exactly what it is working on.

                ## Milestones
                1. Next quarter's team and individual meeting targets agreed with the sales leader.
                2. Two or three outreach themes chosen with marketing, tied to campaigns or market events.
                3. Segment and account coverage confirmed for each SDR.
                4. The plan presented to the team in the last week of the quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A written quarterly plan with targets, themes and coverage shared with the team before the quarter starts, four quarters in a row."
                cadence: cyclic
              tasks:
                - "Ask marketing which campaigns and events land next quarter"
                - "Agree next quarter's team meeting target with the sales leader"
                - "Write the quarterly plan and present it to the team @recurring(quarterly)"
                - "Confirm each SDR's segments and accounts for the quarter"
            - name: SDR funnel maths for managers
              description: |-
                ## Purpose
                Every SDR target rests on a chain of conversion rates, and a manager who can do the arithmetic answers most questions about the team in a minute: how much more activity a missed target needs, what a better held rate is worth, whether a new list is helping. Learning to build and read that chain is the skill behind fair targets and credible numbers for leadership.

                ## Milestones
                1. The funnel steps from activity to accepted meeting written out with your team's real rates.
                2. A simple sheet that recalculates the activity needed when a rate or target changes.
                3. Three what-if questions answered with the sheet, such as a five-point rise in held rate.
                4. The sheet explained to one SDR so they can plan their own week with it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A working funnel sheet with the team's real rates, used to answer three written what-if questions."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write out the team's funnel steps with last quarter's rates"
                - "Build a sheet that works back from a meeting target to activity"
                - "Answer three what-if questions with the sheet and note the answers"
                - "Show one SDR how to use the sheet for their own week"
            - name: Teaching SDRs to plan their own week
              description: |-
                ## Purpose
                New SDRs often start each day by opening the inbox and reacting, so follow-ups slip and the hardest calls never get made. Teaching each SDR to plan the coming week on Friday, with accounts to work, follow-ups due and their own meeting goal, builds the self-management they will need in a closing role.

                ## Milestones
                1. A one-page weekly plan format covering accounts, follow-ups and a meeting goal.
                2. A 45-minute session teaching the format with a worked example.
                3. Every SDR sharing a plan by Friday afternoon for four weeks.
                4. Plans compared with actual results so each SDR sees where their week went.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Every SDR has shared a written weekly plan for four consecutive Fridays and compared at least one with what actually happened."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Draft a one-page weekly plan format with a worked example"
                - "Teach the format in a 45-minute team session"
                - "Ask each SDR to share next week's plan before leaving on Friday"
                - "Compare one SDR's plan with their actual week each fortnight"
            - name: Business acumen programme for SDRs
              description: |-
                ## Purpose
                SDRs who understand how a customer's business makes money ask better questions and sound like peers rather than callers with a script, and that same understanding is what account executive roles demand. An eight-week programme covering how to read a company's results, the metrics your buyers report on and how your product moves them builds it on purpose.

                ## Milestones
                1. Eight weekly topics chosen, from reading an annual report to the metrics your buyers are judged on.
                2. Each topic paired with a short exercise on a real target account.
                3. Every SDR completing all eight exercises.
                4. A short presentation by each SDR on one account's business and priorities.

                ## Notes
                Start from the **Development plan** template for each SDR, so the programme sits alongside their promotion goals rather than as extra homework.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every SDR has completed eight business acumen exercises and presented one target account's business priorities to the team."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Choose eight topics from what account executives say SDRs lack"
                - "Find one short reading or video for each topic"
                - "Set a weekly exercise on a real target account"
                - "Book a team session for each SDR to present one account's priorities"
            - name: Account executive shadowing rotation
              description: |-
                ## Purpose
                Booking meetings they never see leaves SDRs guessing at what makes a good one. A rotation where each SDR sits in on two or three discovery calls a month and debriefs with the account executive afterwards shows them what happens after the handoff, and starts the learning they will need for a closing role.

                ## Milestones
                1. Each account executive agreeing to host one SDR a fortnight.
                2. A shadowing rota covering every SDR for a quarter.
                3. A short debrief question set: what the buyer cared about, what the SDR would book differently.
                4. Each SDR writing down one change to their own booking approach after shadowing.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every SDR has shadowed at least two discovery calls a month for a quarter and recorded one change to how they book meetings."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask each account executive to host one SDR a fortnight"
                - "Write four debrief questions for after each shadowed call"
                - "Book each SDR into an account executive's discovery call @recurring(monthly:8)"
                - "Ask each SDR for one booking change after their first two shadowed calls"
            - name: Top and bottom performer habit study
              description: |-
                ## Purpose
                The gap between the best and the struggling SDRs is usually habits rather than talent: when they call, how quickly they follow up, how many touches they give each prospect. Comparing the top and bottom quartile over a quarter shows which habits actually separate them, and gives coaching something specific to copy.

                ## Milestones
                1. Top and bottom quartile SDRs identified on accepted meetings over a quarter.
                2. Activity timing, touches per prospect, follow-up speed and channel mix compared between the two groups.
                3. Three habits that clearly differ written down.
                4. One habit taught to the whole team and tracked for a month.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written comparison of top and bottom quartile habits naming three differences, with one habit taught to the team and tracked for a month."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Rank SDRs by accepted meetings for last quarter"
                - "Compare call times, touches per prospect and follow-up speed between the groups"
                - "Ask the top two SDRs to walk you through how they plan a day"
                - "Teach one habit to the whole team at the weekly meeting"
            - name: Career conversations with SDRs
              description: |-
                ## Purpose
                Promotion criteria tell SDRs what is possible; a career conversation tells you what each of them actually wants, which is not always an account executive role. Some want customer success, marketing or sales operations, and a quarterly conversation kept separate from performance lets you plan for it rather than be surprised by a resignation.

                ## Milestones
                1. A quarterly career conversation booked with each SDR, separate from their one-to-one.
                2. Each SDR's goal role and timeline written in a sentence.
                3. One development step agreed per SDR each quarter.
                4. Internal moves discussed with the receiving team's manager where relevant.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every SDR has a recorded goal role, timeline and current development step, refreshed in a career conversation within the last quarter."
                cadence: cyclic
              tasks:
                - "Write five open questions for a career conversation"
                - "Hold a separate career conversation with each SDR @recurring(quarterly)"
                - "Record each SDR's goal role and timeline in one sentence"
                - "Introduce SDRs interested in other teams to those managers"
            - name: Spotting and preventing SDR burnout
              description: |-
                ## Purpose
                Daily rejection, visible leaderboards and repetitive work make the SDR role one of the quickest to burn people out, and the first sign is often a quiet drop in activity followed by a resignation letter. Learning the early signals, and checking workload, leave and mood every month, lets you act while there is still something to fix.

                ## Milestones
                1. Early warning signs listed, such as falling activity, missed standups and no holiday taken.
                2. Each SDR's leave taken in the last six months checked.
                3. A monthly workload and wellbeing question added to one-to-ones.
                4. Where to point someone who needs more support, such as an employee assistance service, written down.

                ## Notes
                You are their manager, not their counsellor. Know where your company's support services are and point people to them early.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of warning signs, a leave check for every SDR and the company support contact recorded, with monthly wellbeing check-ins running."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List the warning signs you saw before past resignations"
                - "Check how much leave each SDR has taken in six months"
                - "Ask every SDR how sustainable their workload feels @recurring(monthly:20)"
                - "Find your company's employee support service and note how to refer someone"
            - name: Inbound and outbound split for the SDR team
              description: |-
                ## Purpose
                Mixing inbound enquiries and outbound prospecting in one role usually lets outbound slide, because inbound is easier and feels more urgent. Deciding whether to split the team, rotate inbound duty or keep everyone mixed, based on enquiry volume and response targets, stops one motion quietly starving the other.

                ## Milestones
                1. Hours spent on inbound and outbound per SDR estimated for the last month.
                2. Three options compared: dedicated inbound reps, a daily rota, or a mixed role.
                3. A choice made, with the enquiry volume that would trigger a change.
                4. The new structure run for a full quarter before judging it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on how inbound and outbound work is split, with the volume threshold for revisiting it, running for a full quarter."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Estimate each SDR's hours on inbound and outbound last month"
                - "Compare outbound meetings booked by SDRs with and without inbound duty"
                - "Write up the three options with their costs and risks"
                - "Announce the chosen structure and when it will be reviewed"
            - name: Deciding whether SDRs report to sales or marketing
              description: |-
                ## Purpose
                SDR teams sit under sales in some companies and marketing in others, and the choice shapes what they are measured on and who fights for them in budget rounds. Laying out how each option would change targets, handoffs and career paths, and choosing deliberately, beats inheriting whatever the last reorganisation left behind.

                ## Milestones
                1. Current problems caused by the reporting line listed with examples.
                2. Each option assessed on targets, handoffs, budget and promotion route.
                3. A recommendation written for the heads of sales and marketing.
                4. The decision and its first review date recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page recommendation on the SDR reporting line presented to the heads of sales and marketing, with their decision recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List three recent problems caused by the current reporting line"
                - "Ask a peer at another company how their SDR reporting line works"
                - "Draft a one-page comparison of the two options"
                - "Present the recommendation to the heads of sales and marketing"
            - name: Meeting credit and dispute rules
              description: |-
                ## Purpose
                Arguments about whether a meeting counts eat manager time and poison trust, especially when the meeting number affects pay. Written rules on when a meeting is credited, such as held and accepted rather than just booked, what happens with reschedules and duplicates, and who settles a dispute within how many days, end most of them before they start.

                ## Milestones
                1. A crediting rule agreed: booked, held or accepted.
                2. Rules for reschedules, duplicates and meetings with accounts that already have an open opportunity written down.
                3. A dispute process with a named owner and a five-day limit.
                4. The rules checked with whoever owns compensation and shared with SDRs and account executives.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written meeting credit rules covering reschedules, duplicates and open opportunities, with a five-day dispute process, shared with both teams."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect the last ten disputed meetings and how each was settled"
                - "Draft credit rules for reschedules, duplicates and open opportunities"
                - "Check the rules with the owner of the compensation plan"
                - "Publish the rules and the five-day dispute process to both teams"
            - name: Cutting SDR admin time
              description: |-
                ## Purpose
                At many companies SDRs spend a large share of the week on list building, CRM updates and copying notes between tools rather than talking to prospects. Measuring where the time goes for one week, then removing or automating the two biggest admin tasks, gives back prospecting hours without asking anyone to work longer.

                ## Milestones
                1. A one-week time log kept by three SDRs.
                2. Admin tasks ranked by hours per week.
                3. The two largest removed, automated or moved to operations.
                4. A second time log a month later showing the change.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Two admin tasks removed or automated, with a repeat time log showing weekly admin hours lower than the first log."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask three SDRs to log their time in 30-minute blocks for one week"
                - "Rank admin tasks by total hours across the three logs"
                - "Agree with sales operations which two tasks to automate or remove"
                - "Repeat the time log a month later and compare"
            - name: Outsourced SDR agency versus in-house team
              description: |-
                ## Purpose
                Agencies promise meetings within weeks without hiring, while an in-house team takes months to build but keeps the learning and the people. Comparing the full cost per accepted meeting, control over messaging and what happens when the contract ends lets you decide on evidence, or run a time-boxed pilot of one against the other.

                ## Milestones
                1. In-house cost per accepted meeting worked out, including salaries, tools, data and management time.
                2. Pricing and contract terms collected from two or three agencies.
                3. Meeting quality risks and exit terms compared side by side.
                4. A decision recorded, or a ninety-day pilot agreed with success measures.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of in-house and agency cost per accepted meeting, ending in a recorded decision or pilot terms with success measures."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Work out in-house cost per accepted meeting for last quarter"
                - "Request pricing and contract terms from two agencies"
                - "Ask each agency how they define and count a meeting"
                - "Write the decision or pilot terms with success measures"
            - name: Shared sequence ownership and change rules
              description: |-
                ## Purpose
                When every SDR can edit the team's shared outreach sequences, nobody knows which version is working and test results become meaningless. Naming an owner per sequence, a rule for proposing changes and a minimum test size before declaring a winner keeps the team's outreach improving instead of churning.

                ## Milestones
                1. Every active shared sequence listed with one named owner.
                2. A change process written: propose, agree with the owner, log the change.
                3. A minimum sample, such as 200 prospects per variant, set before any test is called.
                4. A change log in use and reviewed with owners each month.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every active shared sequence has a named owner and a change log, and no test has been called below the agreed sample size for three months."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every active shared sequence and who last edited it"
                - "Assign one owner to each sequence"
                - "Write the change and test rules on one page"
                - "Review the change log and test results with sequence owners @recurring(monthly:12)"
            - name: Moving SDR targets from volume to quality
              description: |-
                ## Purpose
                Activity targets on their own, such as 80 calls a day, reward dialling the easiest numbers and sending the most generic emails. Shifting the weight toward conversations held, meetings accepted and pipeline sourced, while keeping activity as a floor, rewards the work that creates revenue and treats SDRs as professionals.

                ## Milestones
                1. Current targets listed with the behaviour each one rewards.
                2. A new target mix agreed, with activity as a floor rather than the goal.
                3. A two-month trial running the new scorecard alongside the old one.
                4. Results compared on accepted meetings and pipeline, and the change confirmed or reversed.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A two-month side-by-side trial of volume and quality scorecards completed, with the chosen scorecard and its results recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List each current target and the behaviour it rewards"
                - "Draft a target mix weighted to accepted meetings and pipeline"
                - "Run the new scorecard alongside the old one for two months"
                - "Compare accepted meetings and pipeline under both and decide"
            - name: Planning an SDR hiring cohort
              description: |-
                ## Purpose
                Hiring SDRs one at a time means onboarding never stops and every new starter learns alone. Hiring two to four as a cohort with a shared start date makes training efficient, gives new SDRs peers to learn beside, and lets you have laptops, licences, lists and pairings ready before anyone walks in.

                ## Milestones
                1. Headcount and start date agreed with the sales leader and finance.
                2. Job description and interview stages ready, with interviewers booked.
                3. Offers accepted with a single start date.
                4. Laptops, tool licences, starter lists and pairings ready the week before the start date.

                ## Notes
                Keep the cohort start date fixed even if one hire slips. A late joiner catches up faster than a whole cohort can afford to wait.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A cohort of new SDRs starts on one agreed date with equipment, licences, account lists and pairings ready on day one."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Agree the cohort size and start date with the sales leader"
                - "Book interview panels for the next six weeks"
                - "Order laptops and tool licences for the start date"
                - "Prepare a starter account list and pairing for each new SDR"
            - name: First promotion of an SDR into an account executive role
              description: |-
                ## Purpose
                The first promotion from the team proves the path is real, and how it is handled tells every other SDR what to expect. Planning the move, with a handover of open meetings and accounts, a ramp into the closing role and a backfill or redistributed target, protects both the new account executive and the team's numbers.

                ## Milestones
                1. The promotion confirmed against the written criteria and announced.
                2. The SDR's open meetings, sequences and claimed accounts handed over.
                3. A backfill hire started, or the target redistributed for the gap.
                4. A first-ninety-days plan agreed with the receiving sales manager.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The promoted SDR has started as an account executive with a documented handover, a ninety-day plan and a backfill or target cover in place."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Check the candidate against the promotion criteria with the sales leader"
                - "List the SDR's open meetings, sequences and claimed accounts for handover"
                - "Agree how the team target covers the gap until a backfill ramps"
                - "Announce the promotion to the team, naming what it was earned on"
            - name: Quarter-end meeting sprint
              description: |-
                ## Purpose
                Late in a quarter account executives are busy closing and prospects are distracted, so meeting flow sags just when next quarter's pipeline is being decided. A planned three-week sprint, with chosen account lists, a modest team goal and visible thanks at the end, keeps meetings coming and gives the next quarter a running start.

                ## Milestones
                1. Sprint dates, account lists and a team goal set three weeks before quarter end.
                2. Account executives' first-meeting availability for the following weeks confirmed.
                3. Daily sprint progress shared in standup.
                4. Results and lessons written up and the team thanked.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A three-week quarter-end sprint run against a written team goal, with results and two lessons recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose the accounts and segments for the three-week sprint"
                - "Set a team meeting goal for the sprint from the baseline"
                - "Confirm with account executives which weeks they can take first meetings"
                - "Share sprint results and thank the team at the weekly meeting"
            - name: Holiday period coverage and target plan
              description: |-
                ## Purpose
                Prospects disappear over year-end and summer holidays, and SDRs take leave at the same time, so unchanged targets in those weeks are both unfair and pointless. A plan made two months ahead, covering who is in, adjusted targets and useful work for when buyers are away, such as account research and list building, keeps the quiet weeks productive.

                ## Milestones
                1. Leave requests for the holiday period collected.
                2. Reduced targets for the low weeks agreed with the sales leader.
                3. Quiet-week work defined, such as account research and sequence building.
                4. Cover for inbound enquiries confirmed for every working day.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A holiday plan with leave, reduced targets, quiet-week work and inbound cover agreed at least a month before the period starts."
                cadence: cyclic
              tasks:
                - "Collect leave plans for the coming holiday period"
                - "Agree reduced targets for the low weeks with the sales leader"
                - "List research and list-building work for the quiet weeks"
                - "Start the holiday coverage plan two months ahead of year end @recurring(yearly)"
            - name: Launching SDR outreach into a new segment
              description: |-
                ## Purpose
                When the business moves into a new industry, company size or region, the SDR team is usually first through the door with the least to go on. Treating the launch as a project, with two pilot SDRs, a researched account list, messaging built with account executives and a review after six weeks, finds out quickly whether the segment books meetings.

                ## Milestones
                1. Two SDRs and a list of 100 to 200 accounts assigned to the pilot.
                2. Segment messaging drafted with account executives and marketing.
                3. Six weeks of outreach run with results tracked separately.
                4. A go, adjust or stop decision presented to the sales leader.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A six-week pilot in the new segment completed with separate results and a go, adjust or stop decision recorded by the sales leader."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Agree the pilot segment and success measures with the sales leader"
                - "Pick two SDRs and build the pilot account list"
                - "Ask the agent to draft first-touch messaging from the segment notes for the team to edit"
                - "Present the six-week results with a go, adjust or stop call"
            - name: SDR team update at the quarterly business review
              description: |-
                ## Purpose
                The quarterly business review is where budget and headcount are argued, and an SDR team that arrives with activity charts loses to teams that talk in revenue. A tight five-minute update, covering pipeline sourced, conversion to revenue, what changed and what you need, makes the case for the team in leadership's terms.

                ## Milestones
                1. Pipeline sourced and revenue won from SDR meetings calculated for the quarter.
                2. Three slides at most: results, what changed, what you need.
                3. One SDR-sourced win used as a short example.
                4. Questions and asks recorded with owners after the review.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A three-slide SDR update delivered at each quarterly business review, with every ask and its owner recorded afterwards."
                cadence: cyclic
              tasks:
                - "Prepare the SDR section for the quarterly business review @recurring(quarterly)"
                - "Pick one SDR-sourced win to tell in two sentences"
                - "Rehearse the update to keep it under five minutes"
                - "Write down every ask and question with its owner afterwards"
            - name: First ninety days as an SDR manager promoted from the team
              description: |-
                ## Purpose
                Many SDR managers are promoted from the team they now lead, which means managing friends, giving up the meetings that earned the promotion and learning to win through other people. A deliberate first ninety days, with boundaries set early, a one-to-one with every former peer and your own manager's expectations in writing, avoids the classic slide into being the team's best rep instead of its manager.

                ## Milestones
                1. Expectations for the first ninety days agreed in writing with your own manager.
                2. A one-to-one held with each former peer about how the working relationship changes.
                3. Your own prospecting handed over or reduced to an agreed level.
                4. One team process improved and shown to work by day ninety.

                ## Notes
                Start from the **Onboarding 30/60/90** template. The hardest early conversation is usually with the peer who also wanted the job; have it in the first week.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written ninety-day plan agreed with your manager, one-to-ones held with every former peer, and one process improvement shown by day ninety."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask your manager for three things you must achieve by day ninety"
                - "Book a one-to-one with each former peer in your first fortnight"
                - "Agree how much of your own prospecting you keep, if any"
                - "Write down at day ninety what changed and what comes next"
            - name: Player-coach SDR team lead
              description: |-
                ## Purpose
                A team lead who still carries a meeting target has two jobs competing for the same hours, and coaching usually loses. Splitting the week deliberately, such as mornings prospecting and afternoons coaching, with a reduced personal target agreed in writing, makes both jobs possible and shows whether the person is ready to manage full time.

                ## Milestones
                1. A reduced personal target agreed with the manager in writing.
                2. A weekly calendar split between own prospecting and coaching.
                3. Coaching hours logged for a month to see whether they are protected.
                4. The split reviewed with the manager after a quarter.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written reduced target and a month of logged coaching hours, reviewed with the manager at the end of the quarter."
                cadence: phased
              tasks:
                - "Agree a reduced personal target with your manager in writing"
                - "Block coaching time in your calendar for the next four weeks"
                - "Log coaching and prospecting hours for one month"
                - "Review the split with your manager at the end of the quarter"
            - name: Leading a remote SDR team across time zones
              description: |-
                ## Purpose
                Remote SDRs lose the overheard calls and quick questions that teach a new rep half the job, and when the team is spread across time zones a single standup time suits nobody. Shared live calling sessions, a written channel for wins and questions, and standup times that rotate fairly keep a distributed team learning from each other.

                ## Milestones
                1. SDR locations and working hours mapped against buyer time zones.
                2. A standup schedule that shares early and late slots fairly.
                3. A weekly shared calling session on video for peer learning.
                4. A written channel for wins, questions and good examples in daily use.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A fair standup schedule in place and eight weekly shared calling sessions held, with the team channel used on most working days."
                cadence: phased
              tasks:
                - "Map each SDR's working hours against their buyers' time zones"
                - "Set standup times that share the early and late slots fairly"
                - "Run a shared video calling session for the whole team @recurring(weekly:tue)"
                - "Start a team channel for wins, questions and examples"
            - name: Enterprise SDR team on named accounts
              description: |-
                ## Purpose
                Enterprise SDRs work a few dozen named accounts for months, reaching many people in each, so targets built for high-volume prospecting make no sense for them. Goals built around accounts engaged, senior contacts reached and meetings accepted per account, with each SDR paired closely with the account executives they serve, fit the work to the deal size.

                ## Milestones
                1. A named account list of agreed size for each enterprise SDR.
                2. Targets set on accounts engaged, senior contacts reached and accepted meetings.
                3. A fortnightly account planning session between each SDR and their account executives.
                4. Results reviewed after two quarters, allowing for the longer cycle.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every enterprise SDR has a named account list and account-based targets, with fortnightly planning sessions held for two quarters."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Agree how many named accounts one enterprise SDR can work properly"
                - "Set targets for accounts engaged and senior contacts reached"
                - "Book a fortnightly planning slot with each SDR and their account executives"
                - "Review the enterprise targets after two full quarters"
            - name: Your own path from SDR to account executive
              description: |-
                ## Purpose
                If you are an SDR aiming for a closing role, waiting to be noticed is the slowest route. Asking your manager for the promotion criteria, tracking your own results against them and building evidence of closing skills, such as running part of a discovery call with an account executive watching, turns a vague hope into a plan with a date.

                ## Milestones
                1. The promotion criteria in hand and discussed with your manager.
                2. Your results against the criteria tracked every month.
                3. Two skills you lack for a closing role named, with a way to practise each.
                4. A target promotion date agreed with your manager.

                ## Notes
                Start from the **Development plan** template. Ask for feedback from the account executives you book for; their view often carries weight in promotion decisions.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written development plan with your promotion criteria, two named skill gaps and a target date agreed with your manager."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask your manager for the written promotion criteria"
                - "Score yourself honestly against each criterion"
                - "Ask an account executive to let you run part of a discovery call"
                - "Check your own results against the promotion criteria @recurring(monthly:26)"
            - name: Taking over an underperforming SDR team
              description: |-
                ## Purpose
                Inheriting a team that has missed target for months usually means a mix of causes: poor lists, unclear targets, weak handoffs and a few people in the wrong role. A thirty-day diagnosis before changing anything, followed by a short list of fixes in priority order, avoids blaming the people for a system problem, or the system for a people one.

                ## Milestones
                1. Thirty days of observation across standups, one-to-ones, calls and data.
                2. Causes sorted into data, process, skill and fit.
                3. Three fixes chosen and scheduled in order.
                4. Team results compared with the starting point after one quarter.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written diagnosis sorting causes into data, process, skill and fit, with three scheduled fixes and a one-quarter comparison of results."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Hold a listening one-to-one with every SDR in the first fortnight"
                - "Pull the last six months of results and list quality figures"
                - "Sort the causes you find into data, process, skill and fit"
                - "Write down three fixes and the order you will make them"
            - name: Supporting an SDR through a performance improvement plan
              description: |-
                ## Purpose
                When an SDR misses target for several months despite coaching, a formal plan is fairer to them than an unspoken judgement. A clear, time-boxed plan with specific measures, weekly check-ins and the support you will provide, written with HR, gives the person a real chance and protects the business if it does not work out.

                ## Milestones
                1. Evidence of the gap and the coaching already given gathered.
                2. The plan written with HR: measures, timescale, support and check-in dates.
                3. Weekly check-ins held and recorded.
                4. An outcome recorded at the end: met, extended, or an exit following HR process.

                ## Notes
                Start from the **Remediation plan** template. Follow your company's HR policy and local employment rules, and involve HR before the first conversation, not after.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A written improvement plan agreed with HR, every weekly check-in recorded, and the final outcome documented."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Gather three months of results and notes on coaching already given"
                - "Book a meeting with HR before speaking to the SDR"
                - "Write the plan with measures, timescale and support"
                - "Hold and record a weekly check-in until the plan ends"
            - name: Cost per opportunity and SDR return analysis
              description: |-
                ## Purpose
                Sooner or later finance asks what the SDR team costs per opportunity and whether it pays back. Tracking SDR-sourced opportunities through to closed revenue over six to twelve months, and dividing fully loaded team cost by accepted meetings, opportunities and revenue, gives an answer you can defend and shows which segments are worth the effort.

                ## Milestones
                1. Fully loaded team cost for the last year calculated, including salaries, tools, data and management.
                2. Cost per accepted meeting, per opportunity and per closed deal worked out.
                3. Results split by segment or source to show where the team earns its keep.
                4. The analysis reviewed with finance and the method written down.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written analysis of cost per accepted meeting, opportunity and closed deal by segment, reviewed with finance, with the method recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask finance for the fully loaded cost of the SDR team for last year"
                - "Match SDR-sourced opportunities to closed revenue over twelve months"
                - "Split cost per opportunity by segment and source"
                - "Refresh the cost per opportunity figures with new closed deals @recurring(quarterly)"
            - name: SDR tenure and attrition analysis
              description: |-
                ## Purpose
                SDR roles turn over faster than most, and every leaver costs months of ramp and a gap in the pipeline. Looking at why and when people left, or were promoted, over the last two or three years shows whether you have a retention problem or a healthy promotion flow, and what to change.

                ## Milestones
                1. Every SDR from the last three years listed with start date, end date and destination.
                2. Average time to promotion and average time to exit worked out.
                3. Exit reasons grouped from exit interviews and manager notes.
                4. Two changes proposed from the patterns.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A three-year tenure table with average time to promotion and to exit, grouped exit reasons and two proposed changes."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every SDR from the last three years with start and end dates"
                - "Mark each as promoted, moved internally, resigned or let go"
                - "Group the reasons people gave for leaving"
                - "Propose two changes to the sales leader from the patterns"
            - name: AI use policy for SDR research and drafting
              description: |-
                ## Purpose
                SDRs already use AI tools to research accounts and draft messages, whether or not there is a policy, and the risks are real: invented facts about a prospect, customer data pasted into unapproved tools and generic messages sent at scale. A short team policy on approved tools, what data may go in and a human read before anything is sent keeps the speed and removes most of the risk.

                ## Milestones
                1. Current AI tool use across the team surveyed honestly.
                2. Approved tools and forbidden data types agreed with security or IT.
                3. A rule that every AI-drafted message is read and edited before sending.
                4. The policy taught in a team session with good and bad examples.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page AI use policy approved by security or IT, taught to every SDR in a session with examples."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask each SDR anonymously which AI tools they use and for what"
                - "Agree approved tools and data rules with security or IT"
                - "Ask the agent to draft a one-page policy from the agreed rules"
                - "Review the policy against new tools and features @recurring(yearly)"
            - name: Building an SDR leadership bench
              description: |-
                ## Purpose
                Teams that promote their best SDRs into closing roles every year need a steady supply of future team leads, or every growth step depends on hiring managers from outside. Giving one or two senior SDRs real leadership work, such as running standup, mentoring new starters and owning a shared sequence, tests who can lead before the title is on the line.

                ## Milestones
                1. One or two senior SDRs identified with an interest in leading.
                2. A leadership responsibility given to each, such as mentoring or running standup.
                3. Monthly feedback given on how they lead, not only how they sell.
                4. A written view of who could step into a team lead role within a year.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "At least one senior SDR has held a leadership responsibility for a quarter, with a written readiness view for a team lead role."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask senior SDRs who is interested in leading others"
                - "Hand one of them the daily standup for a month"
                - "Pair each new starter with a senior SDR as mentor"
                - "Write down who could lead a team within a year and why"
---

# Sales Development Team Management

This area is for managers who lead a team of sales development reps, the team leads who help them, and the SDRs who want to see how the machine around them works. It starts with the foundations (a charter, a qualified meeting definition agreed with account executives, a baseline, fair targets, pairing, a dashboard, levels and promotion criteria), then the daily, weekly and monthly routines that run the team, the skills worth building in managers and SDRs, the decisions that shape the team, the dated moments to plan for, situations such as a new manager, a player-coach, a remote team or an inherited one, and finally specialist work on cost, attrition, AI use and the leadership bench.

What repeats is a weekday standup, a Monday team meeting, Tuesday meeting quality ratings, Wednesday one-to-ones, a Thursday no-show review and a Friday dashboard snapshot, then monthly target reviews, pipeline reports and data checks, quarterly planning, promotion scoring, career conversations and the business review, and a yearly charter reread. The Metrics log, Skills matrix, 1:1, Development plan, Onboarding 30/60/90 and Remediation plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
