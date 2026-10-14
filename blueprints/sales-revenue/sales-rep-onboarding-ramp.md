---
id: sales-revenue.sales-rep-onboarding-ramp
name: Sales Rep Onboarding & Ramp
description: "A ninety-day route to a productive seller: a clear ramp definition, a planned first week, stage gates, weekly scorecards, certification calls and early warning signs, built for sales managers and their teams."
category: business
version: 1.0.0
tags: [sales-revenue, sales-rep-onboarding-ramp, manager, team, enterprise, onboarding, ramp, certification]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - onboarding-30-60-90
    - metrics-log
    - one-on-one
    - remediation-plan
    - purchase-decision
  pillars:
    - name: Sales & Revenue
      emoji: "💼"
      description: "Turning interest into revenue: prospecting and pipeline, discovery and demos, proposals and negotiation, forecasting, key accounts, sales process, enablement and compensation."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Sales Rep Onboarding & Ramp
          description: "Getting new sellers productive fast with a structured first ninety days, product training, shadowing, certification calls and clear early milestones."
          projects:
            - name: Defining what ramped means for your team
              description: |-
                ## Purpose
                Ask five sales managers when a new seller is fully ramped and you will often hear five answers, which turns every ramp conversation into an argument about the finish line. A written definition, such as two consecutive months at or above 80 percent of full quota, gives the new hire, their manager and finance the same target and makes ramp time measurable at all.

                ## Milestones
                1. A one-sentence definition of fully ramped for each selling role, agreed by sales leadership.
                2. Leading indicators named for the months before closed revenue appears.
                3. The definition shared with finance and whoever owns quota planning.
                4. The definition written into the onboarding plan every new hire receives.

                ## Notes
                Pick a definition you can measure from CRM data you already hold. A rule that needs a manager's opinion each month will drift.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written ramp definition for each selling role, agreed by sales leadership and finance, appears in the onboarding plan."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List how each sales manager currently decides a new hire is ramped"
                - "Draft one measurable ramp definition per selling role"
                - "Agree the definitions with sales leadership and finance in one meeting"
                - "Review whether the ramp definition still fits the sales motion @recurring(yearly)"
            - name: Time-to-productivity baseline from past hires
              description: |-
                ## Purpose
                Before changing anything about onboarding, find out how long ramp really takes today. Pulling the start date, first meeting, first opportunity, first closed deal and first month at target for every seller hired in the last two or three years gives a baseline any new programme can be judged against, and it often shows the stall sits in a different month than people assumed.

                ## Milestones
                1. A table of every seller hired in the last two to three years, with start date and role.
                2. Days to first meeting, first opportunity, first closed deal and ramped recorded for each hire.
                3. Median ramp time by role worked out, with early leavers noted separately.
                4. The two months where new hires most often stall identified.

                ## Notes
                Include the people who left during ramp. Leaving them out makes ramp look faster and hides the most expensive failures.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A baseline table of past hires shows median days to first deal and to ramped for each role, with the biggest stall point named."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export start dates and roles for every seller hired in the last three years"
                - "Pull each hire's first meeting, first opportunity and first closed deal dates from the CRM"
                - "Work out median days to ramped by role, noting leavers separately"
                - "Add each graduating hire's ramp dates to the baseline table @recurring(quarterly)"
            - name: Pre-start set-up checklist for new sellers
              description: |-
                ## Purpose
                New sellers commonly lose their first two or three days waiting for a CRM licence, a phone number, call recording access or a laptop someone forgot to order. A checklist owned by one person and started two weeks before the start date means the new hire makes a practice call on day one rather than filing IT tickets.

                ## Milestones
                1. A checklist of every account, licence, device and permission a seller needs, each with an owner.
                2. Lead times noted for items that take more than a few days, such as hardware and phone numbers.
                3. The checklist started as soon as an offer is accepted.
                4. The last new hire's access confirmed as complete before their first meeting on day one.

                ## Notes
                Start from the **Operational checklist** template. Include call recording consent settings and any regional rules on recorded calls, and confirm them with whoever owns compliance.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A pre-start checklist with an owner per item is used for the next new hire, who has every system working on their first morning."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the last two hires what access was missing in their first week"
                - "List every licence, device and permission with an owner and lead time"
                - "Agree who starts the checklist when an offer is accepted"
                - "Check the list against the current sales tools and remove retired ones @recurring(quarterly)"
            - name: Hour-by-hour first week for a new seller
              description: |-
                ## Purpose
                A first week spent reading documents alone sends the message that selling starts later. Planning every slot of days one to five, with welcome meetings, live call shadowing from day two, short product sessions and one small selling task by Friday, gets a new hire hearing customers immediately and gives their manager a schedule to run rather than invent.

                ## Milestones
                1. A five-day schedule with every slot named, owned and booked in calendars.
                2. At least six live customer calls to shadow arranged across the week.
                3. A first small selling task, such as researching ten target accounts, set for day four or five.
                4. An end-of-week review between the new hire and manager booked for Friday afternoon.

                ## Notes
                Keep self-study blocks under two hours at a time. Most of week one should be spent listening to customers and the people who serve them.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A complete five-day schedule, booked in calendars, with six or more shadowed calls and a Friday review, is ready before the next start date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Block out the five days in half-hour slots on one page"
                - "Ask three top sellers which live calls the new hire can join"
                - "Book welcome meetings with marketing, product, support and finance"
                - "Set a small account research task for day four and a Friday review"
            - name: Ninety-day onboarding plan with stage gates
              description: |-
                ## Purpose
                Ninety days is long enough to drift without anyone noticing. A plan split into three thirty-day stages, each with learning goals, activity targets and a gate the new hire must pass to move on, turns onboarding into checkable commitments that the manager and the new hire review together.

                ## Milestones
                1. Learning goals, activity targets and skills to demonstrate written for days 1 to 30, 31 to 60 and 61 to 90.
                2. A pass condition written for each stage gate.
                3. The plan checked for realism by two recent hires.
                4. The plan handed to every new hire on day one, signed off by their manager.

                ## Notes
                Start from the **Onboarding 30/60/90** template. Write one per role; an inbound account executive and an enterprise seller need different gates.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A ninety-day plan with three stage gates and written pass conditions is issued to the next new hire on their first day."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Copy the onboarding 30/60/90 template for each selling role"
                - "Write learning goals and activity targets for each thirty-day stage"
                - "Define a pass condition for each of the three stage gates"
                - "Ask two recent hires to mark anything unrealistic in the draft"
            - name: Ramp milestones by sales role
              description: |-
                ## Purpose
                Development reps, inbound account executives, account managers and enterprise sellers ramp at very different speeds, so one set of milestones either rushes some or lets others coast. Setting role-specific markers, for example a first meeting booked by week two for a development rep or a first qualified opportunity by day forty-five for an enterprise seller, makes progress comparable within each role.

                ## Milestones
                1. Every selling role listed with its usual sales cycle length.
                2. Four to six dated milestones per role, drawn from the baseline of past hires.
                3. Milestones checked against what the best performers in each role actually achieved.
                4. The milestones added to each role's ninety-day plan.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each selling role has four to six dated ramp milestones grounded in past-hire data and written into its onboarding plan."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List each selling role and its typical sales cycle length"
                - "Pull the first-deal timing of the best three hires in each role"
                - "Draft four to six dated milestones per role"
                - "Add the role milestones to the matching ninety-day plan"
            - name: Stepped ramp targets for new hires
              description: |-
                ## Purpose
                Giving a new seller full quota in month one sets them up to miss, and giving them nothing for six months removes the urgency. Agreeing a stepped schedule, such as no target in the first month and rising shares after that until full quota, lines the new hire's targets up with how long deals really take and keeps the team forecast honest.

                ## Milestones
                1. A month-by-month ramp target schedule for each role, based on the sales cycle and baseline data.
                2. The schedule agreed with finance and the owner of the compensation plan.
                3. How ramp targets interact with any guarantee or draw confirmed in writing by the compensation plan owner.
                4. The schedule included in the paperwork the new hire receives in week one.

                ## Notes
                Commission rates and guarantees belong to the compensation plan. This work only sets the targets a new hire carries and makes sure everyone agrees them before the start date.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written month-by-month ramp target schedule for each role is approved by finance and given to new hires in their first week."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Map the average sales cycle for each role against months one to six"
                - "Draft a stepped target schedule that reaches full quota at ramp"
                - "Review the schedule with finance and the compensation plan owner"
                - "Add the schedule to the paperwork new hires receive in week one"
            - name: Single onboarding hub page for new sellers
              description: |-
                ## Purpose
                Onboarding material usually lives in a dozen places, from shared drives and chat channels to recorded calls and old slide decks, and new hires waste hours hunting for the current version. One page that links the ninety-day plan, the schedule, the curriculum, the best recorded calls, tool guides and who to ask turns the first question of every day into a click.

                ## Milestones
                1. Every current onboarding resource found and its owner noted.
                2. Out-of-date material archived or clearly labelled.
                3. One hub page with sections for plan, learning, calls, tools and people.
                4. The hub link sent in the pre-start email and pinned in the team channel.

                ## Notes
                Give every link an owner and a last-checked date. The hub is only trusted while it stays current.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One onboarding hub page, with an owner and date on every link, is sent to the next new hire before their start date."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the agent to list every onboarding link shared in the team channel this year"
                - "Archive or label any resource older than the current product release"
                - "Build the hub page with sections for plan, learning, calls, tools and people"
                - "Pin the hub link in the team channel and add it to the pre-start email"
            - name: Manager commitments during a new hire's ramp
              description: |-
                ## Purpose
                Ramp speed depends more on the manager's calendar than on the curriculum, and managers carrying a full team often squeeze new hires into whatever time is left. Writing down exactly what the manager does, such as a daily check-in in week one, a weekly one-to-one, joining the first five customer calls and running each stage gate, makes the commitment visible and booked in advance.

                ## Milestones
                1. A list of manager commitments across the ninety days, with hours per week estimated.
                2. Every recurring commitment booked in the manager's calendar before the start date.
                3. A named deputy for weeks when the manager travels or is on leave.
                4. The commitments compared at day ninety with what actually happened.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written list of manager commitments exists, with every recurring slot booked before the new hire starts and a deputy named."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down what the manager does in week one, weeks two to four and weeks five to thirteen"
                - "Estimate the hours per week each stage needs from the manager"
                - "Book every recurring check-in and stage gate before the start date"
                - "Name a deputy who covers the commitments during leave or travel"
            - name: Starter account handover for a new seller
              description: |-
                ## Purpose
                Many new sellers inherit accounts or open deals from someone who left months ago, with notes scattered or missing. A handover pack for each inherited account, covering contacts, history, open opportunities and known risks, plus warm introductions from the manager, stops customers feeling forgotten and gives the new hire live conversations in the first fortnight.

                ## Milestones
                1. The accounts and open deals the new hire will own listed and agreed.
                2. A one-page handover note for each account with contacts, history and risks.
                3. CRM ownership moved and stale records closed for those accounts.
                4. Introduction emails sent from the manager to the key contact in each inherited account.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every inherited account has a handover note, correct CRM ownership and a sent introduction email within the new hire's first two weeks."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the accounts and open opportunities moving to the new hire"
                - "Write a one-page handover note for each inherited account"
                - "Reassign ownership in the CRM and close dead opportunities"
                - "Send manager introduction emails to the main contact at each account"
            - name: Weekly ramp scorecard for each new hire
              description: |-
                ## Purpose
                Closed revenue arrives too late to tell you a new hire is struggling, so ramp needs leading indicators checked every week. A one-page scorecard with conversations held, meetings booked, opportunities created, pipeline value and certifications passed, set against the role's milestones, shows a slow start by week three instead of month four.

                ## Milestones
                1. Five to seven leading indicators chosen for each role.
                2. A scorecard that pulls those numbers from the CRM with little manual entry.
                3. Weekly targets for each indicator taken from the role milestones.
                4. The scorecard completed every week of the ninety days for each current hire.

                ## Notes
                Start from the **Metrics log** template. Share the scorecard with the new hire; a number they cannot see cannot motivate them.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A scorecard for each current new hire is updated every week for the full ninety days, with indicators compared against role milestones."
                cadence: rolling
              tasks:
                - "Choose five to seven leading indicators for each selling role"
                - "Build the scorecard from the metrics log template"
                - "Update each new hire's scorecard from the CRM @recurring(weekly:fri)"
                - "Share the scorecard with the new hire before their one-to-one"
            - name: Weekly ramp one-to-one
              description: |-
                ## Purpose
                During ramp the weekly one-to-one is the main place problems surface, yet without a structure it drifts into a chat about the weekend. A fixed agenda of scorecard, stage gate progress, one skill to practise and blockers to clear makes thirty minutes a week the most useful half hour in the new hire's schedule.

                ## Milestones
                1. A standing thirty-minute slot booked for the full ninety days.
                2. A four-part agenda used every week: scorecard, gate progress, one skill, blockers.
                3. Notes kept in one running document both people can see.
                4. Actions from each meeting checked off at the start of the next.

                ## Notes
                Start from the **1:1** template. Let the new hire add their items first; the manager's items go after.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Thirteen weekly one-to-ones are held across the ramp, each with notes and actions recorded in a shared running document."
                cadence: rolling
              tasks:
                - "Book a thirty-minute one-to-one for each of the thirteen weeks"
                - "Create a shared running notes page from the 1:1 template"
                - "Hold the ramp one-to-one using the four-part agenda @recurring(weekly:tue)"
                - "Open each meeting by checking last week's actions"
            - name: Daily cohort stand-up in the first month
              description: |-
                ## Purpose
                New sellers who start together learn as much from each other as from trainers, but only if they meet. A fifteen-minute stand-up each morning for the first four weeks, covering yesterday's best moment, today's goal and one question, builds peer support and surfaces confusion while it is still small.

                ## Milestones
                1. A fifteen-minute morning slot booked for the cohort for twenty working days.
                2. A three-question format agreed and posted in the cohort channel.
                3. Questions that come up more than twice logged for the curriculum owner.
                4. The stand-up handed to the cohort to run themselves by week three.

                ## Notes
                Archive the recurring task once the cohort passes day thirty; the weekly one-to-one takes over from there.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twenty stand-ups are held in the cohort's first month, with repeated questions logged and passed to the curriculum owner."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Book a fifteen-minute morning stand-up for the cohort's first twenty working days"
                - "Post the three stand-up questions in the cohort channel"
                - "Run the fifteen-minute cohort stand-up @recurring(daily)"
                - "Log any question asked twice and send it to the curriculum owner"
            - name: Shadowing rota with structured debriefs
              description: |-
                ## Purpose
                Shadowing only works when the new hire knows what to listen for and talks it through afterwards; otherwise it is an hour of passive listening. A rota that spreads shadowing across several strong sellers, with a short listening brief before each call and a ten-minute debrief after, turns other people's calls into the fastest teacher in the programme.

                ## Milestones
                1. Four or five experienced sellers agreed as shadowing hosts.
                2. A one-page listening brief covering opening, questions asked, objections and next step agreed.
                3. At least fifteen shadowed calls logged in the first month with debrief notes.
                4. Shadowing reversed by week five, with an experienced seller observing the new hire.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Fifteen or more shadowed calls with debrief notes are logged in the first month, followed by at least three reverse-shadowed calls by week six."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask four or five strong sellers to host shadowing each week"
                - "Write a one-page listening brief for shadowed calls"
                - "Hold a ten-minute debrief on the week's shadowed calls @recurring(weekly:wed)"
                - "Schedule three reverse-shadow calls for week five"
            - name: New-hire pipeline build tracker
              description: |-
                ## Purpose
                Pipeline created in the first sixty days predicts a new seller's second-quarter revenue better than any training score. Tracking opportunities opened, their stage and value each week against a pipeline target shows whether the new hire is building enough to meet their stepped targets, while there is still time to add prospecting hours or seeded accounts.

                ## Milestones
                1. A pipeline creation target for each of the first three months, based on win rate and deal size.
                2. A saved CRM view of the new hire's opportunities by stage and created date.
                3. Weekly pipeline totals recorded against the target.
                4. A gap rule written for what happens if pipeline is below half the target at day forty-five.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly pipeline totals are recorded against a target for each new hire's first ninety days, with the gap rule applied whenever it triggers."
                cadence: rolling
              tasks:
                - "Work out a pipeline target from win rate, deal size and the ramp schedule"
                - "Save a CRM view of the new hire's opportunities by created date"
                - "Record the new hire's weekly pipeline created against target @recurring(weekly:mon)"
                - "Write the action to take if pipeline is under half the target by day forty-five"
            - name: Monthly onboarding cohort retrospective
              description: |-
                ## Purpose
                Each group of new hires spots the gaps that experienced staff stopped noticing years ago. A monthly forty-five minute retrospective with everyone still in ramp, asking what helped, what wasted time and what was missing, gives the programme owner a steady list of fixes from the people living through it.

                ## Milestones
                1. A monthly slot for everyone currently inside their first ninety days.
                2. Three standing questions: what helped, what wasted time, what was missing.
                3. Feedback grouped into themes and logged in one place.
                4. At least one change made to onboarding after each retrospective.

                ## Notes
                Hold it without the hiring managers in the room, or new hires will tell you everything is fine.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly retrospectives are held with notes, each followed by at least one recorded change to the onboarding programme."
                cadence: rolling
              tasks:
                - "Book a monthly retrospective for everyone in their first ninety days"
                - "Run the onboarding retrospective and group the feedback into themes @recurring(monthly:12)"
                - "Make one change from the feedback and note it in the programme change log"
                - "Invite graduates at day ninety to one final retrospective"
            - name: Onboarding buddy programme
              description: |-
                ## Purpose
                Sellers in ramp ask their manager about deals but ask a peer about everything else: where the good call recordings are, how expenses work, which product manager answers messages. Pairing each hire with a buddy from the same role, with a short brief and a monthly check-in, answers those questions in minutes and gives the buddy real leadership experience.

                ## Milestones
                1. Buddy criteria written: same role, at least a year in seat, in good standing.
                2. A one-page buddy brief with expectations for the first ninety days.
                3. Every new hire paired with a buddy before their start date.
                4. Buddies thanked and their contribution noted in their own reviews.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every new seller in the last two intakes had a named buddy before starting, with monthly buddy check-ins held."
                cadence: rolling
              tasks:
                - "Write the criteria for who can be an onboarding buddy"
                - "Draft a one-page brief on what a buddy does across ninety days"
                - "Pair the next new hire with a buddy before their start date"
                - "Check in with each buddy pair on how it is going @recurring(monthly:20)"
            - name: Quarterly onboarding curriculum refresh
              description: |-
                ## Purpose
                Product releases, new pricing and changed processes quietly make onboarding material wrong, and new hires then learn the old version with full confidence. A quarterly pass through every module, matched against release notes and pricing changes since the last review, keeps what new sellers learn the same as what customers will hear.

                ## Milestones
                1. A list of every onboarding module with its owner and last-reviewed date.
                2. Release notes and pricing changes since the last refresh gathered.
                3. Every affected module updated or flagged.
                4. Recorded sessions older than a year re-recorded or retired.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every onboarding module shows a reviewed date within the last three months and outdated recordings have been retired."
                cadence: cyclic
              tasks:
                - "List every onboarding module with its owner and last-reviewed date"
                - "Gather release notes and pricing changes since the last refresh"
                - "Review and update every onboarding module with its owner @recurring(quarterly)"
                - "Retire recorded sessions that show retired products or old prices"
            - name: Ramp cohort tagging in the CRM
              description: |-
                ## Purpose
                Ramp cannot be measured if the CRM does not know when each seller started or which intake they joined. Adding start date, role and cohort to user records, and a monthly report of activity and pipeline by months since start, turns every future question about ramp into a filtered report instead of a spreadsheet project.

                ## Milestones
                1. Start date, role and cohort captured for every seller in the CRM or the people system it reads.
                2. Historical sellers back-filled from the baseline table.
                3. A saved report of activity, pipeline and wins by months since start.
                4. The report sent to sales leadership every month.

                ## Notes
                Agree the change with whoever administers the CRM, and ask for fields on the user record rather than on every deal.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every current seller has start date, role and cohort recorded, and a months-since-start report reaches leadership each month."
                cadence: rolling
              tasks:
                - "Ask the CRM administrator to add start date, role and cohort to user records"
                - "Back-fill start dates for current sellers from the baseline table"
                - "Build a report of activity, pipeline and wins by months since start"
                - "Send the months-since-start report to sales leadership @recurring(monthly:3)"
            - name: Product knowledge curriculum for sellers
              description: |-
                ## Purpose
                Sellers do not need to know the product like an engineer; they need to explain which problems it solves, for whom, and where it stops. A curriculum built around customer problems rather than feature menus, with a short quiz after each module, gets a new hire answering the ten most common product questions accurately inside the first month.

                ## Milestones
                1. The ten product questions buyers ask most collected from recent calls.
                2. Six to eight modules organised by customer problem, each under an hour.
                3. A short quiz per module with a pass mark.
                4. The current cohort's quiz results recorded by day thirty.

                ## Notes
                Ask product marketing to own accuracy and sales to own relevance. Modules written by the product team alone tend to read as feature lists.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six or more problem-led product modules with quizzes exist, and every new hire in the current cohort passes all quizzes by day thirty."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Collect the ten product questions buyers asked most on last quarter's calls"
                - "Group the product content into modules by customer problem"
                - "Write a five-question quiz for each module"
                - "Record each new hire's quiz scores in their scorecard"
            - name: Customer and industry primer for new hires
              description: |-
                ## Purpose
                Hires from another industry often understand the product within weeks but still sound like outsiders to buyers for months. A primer on the buyer's working day, the words they use, the metrics they are judged on and the regulations or seasons that shape their year closes that gap faster than product training alone.

                ## Milestones
                1. A two-page primer for each main buyer persona covering responsibilities, metrics, vocabulary and calendar.
                2. A glossary of thirty industry terms with plain definitions.
                3. Three recorded calls chosen to illustrate each persona.
                4. The new hire able to explain a persona's top three priorities in their own words at the day-thirty gate.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A primer and glossary exist for each main buyer persona, and every new hire explains three persona priorities correctly at the day-thirty gate."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the three to five buyer personas the new hire will meet most"
                - "Write a two-page primer for each persona with their metrics and vocabulary"
                - "Build a thirty-term glossary from recent call transcripts"
                - "Pick three recorded calls that show each persona in their own words"
            - name: Competitive landscape briefing for new hires
              description: |-
                ## Purpose
                Buyers mention a competitor in many first calls, and a new seller who freezes or runs the rival down loses credibility instantly. A briefing that walks through the three or four competitors met most often, using the battle cards the team already maintains, and ends with a short role play, lets the new hire handle a competitive mention calmly by week four.

                ## Milestones
                1. The three or four competitors met most often identified from recent deals.
                2. Existing battle cards read and discussed with an experienced seller.
                3. Two recorded calls reviewed where a competitor came up.
                4. A five-minute competitive role play passed by the new hire.

                ## Notes
                Keep the briefing to what the team already publishes. If battle cards are missing or stale, flag it to the enablement owner rather than writing new ones during onboarding.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each new hire completes the competitive briefing and passes a five-minute competitive role play by the end of week four."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull the competitors named most often in last year's opportunities"
                - "Read the current battle card for each main competitor"
                - "Listen to two recorded calls where a competitor came up"
                - "Pass a five-minute competitive role play with an experienced seller"
            - name: Sales stages and CRM expectations walk-through
              description: |-
                ## Purpose
                Most forecasting arguments start with a new hire who moved a deal to a later stage because the buyer sounded keen. Walking every new seller through the stage definitions, exit criteria, required fields and the weekly pipeline review they will join, using three real deals as examples, gets clean data from their very first opportunity.

                ## Milestones
                1. Each stage and its exit criteria explained with a real example deal.
                2. The required fields and next-step standard shown in the CRM.
                3. Two pipeline reviews observed before the new hire presents their own deals.
                4. The first five opportunities they create checked for stage accuracy.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The new hire's first five opportunities are checked and all sit in the correct stage with required fields complete."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Walk through each stage and its exit criteria using three real deals"
                - "Show the required fields and next-step standard in the CRM"
                - "Invite the new hire to observe two pipeline reviews"
                - "Check the new hire's first five opportunities for stage accuracy"
            - name: Core pitch certification
              description: |-
                ## Purpose
                Certification makes sure every new seller can tell the company story the same way before telling it to a buyer. Delivering the core pitch to a panel of two experienced people, scored on a shared rubric with one retake allowed, gives the manager a clear yes before the new hire runs first calls alone.

                ## Milestones
                1. A rubric of five to seven scored criteria agreed by sales leadership.
                2. A panel of two scorers booked for each new hire.
                3. The pitch delivered and scored, with written feedback within a day.
                4. A pass recorded, or a retake booked within a week.

                ## Notes
                Score against the same rubric every time. Panels that change their criteria from person to person turn certification into a popularity test.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every new hire in the cohort has a recorded pass on the core pitch rubric by day forty-five."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree a five to seven point pitch rubric with sales leadership"
                - "Book two panel scorers for the pitch certification"
                - "Rehearse the pitch twice with a buddy before the panel"
                - "Send written scores and feedback within one working day"
            - name: Discovery role-play certification
              description: |-
                ## Purpose
                Discovery is where new sellers most often rush, jumping to the product after two questions. A scripted role play in which an experienced colleague plays a realistic buyer, with hidden pain, budget and decision facts to uncover, shows whether the new hire asks enough to qualify a deal before they are trusted with live first calls.

                ## Milestones
                1. Two buyer briefs written, each with hidden facts the seller must uncover.
                2. The role play recorded and scored on facts uncovered and talk ratio.
                3. A pass mark agreed in advance as a share of hidden facts uncovered.
                4. A pass recorded before the new hire runs discovery calls alone.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each new hire passes a recorded discovery role play, uncovering the agreed share of hidden facts, before running discovery alone."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write two buyer briefs with hidden pain, budget and decision facts"
                - "Ask an experienced seller to play the buyer from the brief"
                - "Record and score the role play on facts uncovered and talk ratio"
                - "Book a second attempt within a week if the pass mark is missed"
            - name: Standard demo certification
              description: |-
                ## Purpose
                A demo given before certification usually becomes a feature tour that loses the buyer by minute ten. Certifying each new hire on the standard demo flow, including tying each screen to a pain from discovery and recovering from a broken environment, protects early opportunities and builds real confidence.

                ## Milestones
                1. The standard demo flow and its three key moments written down.
                2. A practice environment with sample data set up for the new hire.
                3. The demo delivered to a panel using a discovery brief as context.
                4. A pass recorded, with any weak moment practised again.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every new hire passes demo certification against a discovery brief, with the result recorded before their first solo demo."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write down the standard demo flow and its three key moments"
                - "Set up a practice demo environment with sample data"
                - "Deliver the demo to a panel against a discovery brief"
                - "Practise recovering from a frozen screen or missing data"
            - name: Objection practice drills during ramp
              description: |-
                ## Purpose
                Objections a new seller has never heard said aloud tend to produce either silence or a discount. Ten-minute weekly drills, where a colleague fires the team's most common objections on price, timing, competitors and risk, build reflexes faster than reading an objection guide ever does.

                ## Milestones
                1. The ten objections new hires will hear most chosen from the team's existing guide.
                2. A weekly ten-minute drill in the calendar for each person in ramp.
                3. Each response scored on acknowledging, asking and answering.
                4. All ten objections handled fluently by day ninety.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Weekly objection drills are held through ramp, with all ten common objections scored as handled well by day ninety."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Choose the ten most common objections from the team's existing guide"
                - "Pair each new hire with a colleague who will play the buyer"
                - "Run a ten-minute objection drill with the new hire @recurring(weekly:thu)"
                - "Score each response on acknowledging, asking and answering"
            - name: Pricing and quoting sign-off
              description: |-
                ## Purpose
                A wrong quote in a new hire's first deal can set a price precedent the company lives with for years. Teaching price books, discount limits, approval routes and the quoting tool, then checking two practice quotes before the first real one goes out, removes the most expensive early mistake.

                ## Milestones
                1. Price books, standard terms and discount limits explained for the new hire's segment.
                2. Approval routes for non-standard terms walked through.
                3. Two practice quotes built and checked by the manager or deal desk.
                4. The first live quote reviewed before it is sent.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two practice quotes are checked as correct and the new hire's first live quote is reviewed before sending."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Walk through the price book and discount limits for the new hire's segment"
                - "Explain who approves non-standard terms and how to request it"
                - "Build two practice quotes from mock deals for checking"
                - "Review the new hire's first live quote before it goes out"
            - name: Best recorded calls library for new sellers
              description: |-
                ## Purpose
                Recordings of excellent calls are the closest thing sales has to an apprenticeship, but most teams hold thousands of recordings and no way to find the good ones. A curated library of fifteen to twenty calls, each tagged by stage and annotated with what to notice, gives every new hire the same examples of how the best sellers open, question, handle objections and close.

                ## Milestones
                1. Fifteen to twenty excellent calls chosen across stages and buyer personas.
                2. Each call annotated with timestamps of the moments worth hearing.
                3. Customer consent and recording retention rules checked for every call kept.
                4. The library linked from the onboarding hub and assigned at each stage of the ninety-day plan.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A library of at least fifteen annotated calls covering every sales stage is linked from the onboarding hub and used in the ninety-day plan."
                cadence: rolling
              tasks:
                - "Ask top sellers to nominate their two best recorded calls"
                - "Annotate each chosen call with the timestamps worth hearing"
                - "Confirm each recording meets the company's consent and retention rules"
                - "Add one newly nominated call and retire one dated call @recurring(monthly:25)"
            - name: Cohort versus rolling onboarding decision
              description: |-
                ## Purpose
                Whether new sellers start together in intakes or join whenever they are hired changes everything from trainer time to how quickly vacancies are filled. Comparing hiring volume, trainer capacity and the cost of a seat left empty while waiting for the next intake leads to a decision you can explain to recruiters and hiring managers.

                ## Milestones
                1. Hires per quarter for the last year and next year's plan gathered.
                2. Trainer and manager hours per new hire estimated under both models.
                3. The revenue cost of each month a seat stays empty worked out.
                4. A decision recorded, with intake dates if cohorts are chosen.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision between intake cohorts and rolling starts is recorded, with the numbers behind it and intake dates if cohorts were chosen."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Count hires per quarter last year and in next year's hiring plan"
                - "Estimate trainer and manager hours per hire under each model"
                - "Work out the revenue cost of a seat left empty for a month"
                - "Record the decision and share it with recruiting"
            - name: Choosing a home for onboarding courses and quizzes
              description: |-
                ## Purpose
                Once a programme has more than a handful of modules and quizzes, shared folders stop showing who completed what. Comparing a learning platform, the training features inside the sales tools you already pay for and a simple tracker, against team size, budget and the need for completion data, leads to a choice that will not need replacing within a year.

                ## Milestones
                1. Requirements written: completion tracking, quizzes, video, CRM link, cost per seat.
                2. Three options compared, including staying with what you already have.
                3. A trial run with one module and two new hires.
                4. A choice recorded with cost and owner.

                ## Notes
                Start from the **Purchase decision** template. Check what your existing sales tools already include before buying anything new.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice of where onboarding courses live, made after comparing three options and trialling one module with two new hires."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write five must-have requirements for hosting onboarding courses"
                - "Check which learning features your current sales tools already include"
                - "Compare three options against the requirements and cost per seat"
                - "Trial one module with two new hires before deciding"
            - name: Onboarding audit against ramp results
              description: |-
                ## Purpose
                Programmes gain modules every year and rarely lose any, so onboarding grows longer without ramp getting shorter. Comparing what each recent hire actually completed with how fast they ramped shows which parts earn their time, which can shrink and which gaps the fastest people filled on their own.

                ## Milestones
                1. Completion records and ramp times for the last two intakes set side by side.
                2. Each module rated keep, shorten or cut, with a reason.
                3. What the three fastest hires did differently written down.
                4. A revised programme length agreed and published.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every module is rated keep, shorten or cut against ramp data, and a revised programme is published."
                cadence: cyclic
              tasks:
                - "Put the last two intakes' module completion beside their ramp times"
                - "Interview the three fastest hires about what helped them most"
                - "Rate each module keep, shorten or cut with one reason"
                - "Repeat the onboarding audit with the newest intake data @recurring(yearly)"
            - name: Early warning signs and ramp intervention plan
              description: |-
                ## Purpose
                Most failed ramps were visible by day forty-five, yet many teams wait for a missed quarter before acting. Writing the warning signs in advance, such as a failed certification, pipeline under half of target or a flat scorecard for three weeks, together with a supportive intervention for each, means help arrives early and the conversation is fair.

                ## Milestones
                1. Four to six warning signs written with the thresholds that trigger them.
                2. An intervention for each sign, such as extra shadowing, a coaching block or a reset goal.
                3. A written plan agreed with the new hire whenever a sign triggers, with a review date.
                4. HR consulted on how support plans are documented, so they stay supportive and fair.

                ## Notes
                Start from the **Remediation plan** template. Frame it as support with a clear review date, and follow your company's people policies on documentation.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written list of warning signs and matching interventions exists and is applied within a week whenever a new hire triggers one."
                cadence: rolling
              tasks:
                - "Write four to six ramp warning signs with clear thresholds"
                - "Match each sign to a specific intervention and owner"
                - "Check every new hire's scorecard against the warning thresholds @recurring(monthly:8)"
                - "Ask HR how support plans during ramp should be documented"
            - name: Seeded starter pipeline for early wins
              description: |-
                ## Purpose
                Winning a first deal in the opening two months changes a new seller's confidence and credibility far more than another training module. Setting aside a small pool of warm inbound leads, upsell candidates or dormant accounts for each new hire gives them real conversations early, as long as the pool is agreed as fair by the rest of the team.

                ## Milestones
                1. Rules for which leads or accounts can be seeded, agreed with the team.
                2. A pool of fifteen to twenty-five accounts set aside for each new hire.
                3. Seeded accounts tagged in the CRM so results can be measured separately.
                4. Time to first deal compared for seeded and unseeded hires.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each new hire receives a tagged pool of seeded accounts, and time to first deal is compared with unseeded hires after two intakes."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Agree with the team which leads and accounts can be seeded to new hires"
                - "Set aside fifteen to twenty-five seeded accounts before the next start date"
                - "Tag the seeded accounts in the CRM"
                - "Compare time to first deal for seeded and unseeded hires after two intakes"
            - name: Cost of ramp and payback calculation
              description: |-
                ## Purpose
                Leadership tends to see onboarding as a cost until someone puts a number on a slow ramp. Calculating the cost of a seller during ramp, the gross margin a fully ramped seller produces each month and the payback month for a new hire shows what each month shaved off ramp is worth, which is the strongest case for manager time and programme budget.

                ## Milestones
                1. The fully loaded monthly cost of a new seller during ramp estimated with finance.
                2. Monthly gross margin from a fully ramped seller estimated for each role.
                3. The payback month calculated at the current ramp time.
                4. The value of a one-month shorter ramp written in one sentence for leadership.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page payback calculation agreed with finance states the value of a ramp that is one month shorter."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask finance for the fully loaded monthly cost of a new seller"
                - "Estimate monthly gross margin from a fully ramped seller in each role"
                - "Calculate the payback month at today's ramp time"
                - "Ask the agent to draft a one-paragraph summary of the payback case for leadership"
            - name: Thirty and sixty day ramp check-ins
              description: |-
                ## Purpose
                Stage gates only matter if they are held on time with the evidence ready. Preparing the day-thirty and day-sixty check-ins, with the scorecard, certification results and the new hire's own self-assessment on the table, produces a clear pass, a pass with conditions or a support plan, instead of a vague sense that things are going fine.

                ## Milestones
                1. Both check-ins booked on day one with the manager and new hire.
                2. A self-assessment form completed by the new hire before each check-in.
                3. Scorecard and certification results brought to each meeting.
                4. An outcome recorded at each gate: pass, pass with conditions, or support plan.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Day-thirty and day-sixty check-ins are held within three working days of their dates, each with a recorded outcome."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Book the day-thirty and day-sixty check-ins on the new hire's first day"
                - "Send the self-assessment form a week before each check-in"
                - "Bring the scorecard and certification results to each meeting"
                - "Record the gate outcome and any conditions in the onboarding plan"
            - name: First solo customer meeting
              description: |-
                ## Purpose
                The first meeting a new seller runs without a colleague is a milestone worth preparing for properly. A short prep session on the account, the agenda and the two or three things to learn, followed by a recorded debrief within a day, makes sure the first solo call teaches something whether or not it goes well.

                ## Milestones
                1. A suitable first meeting chosen: a warm account with low risk.
                2. A one-page call plan with agenda, questions and desired next step.
                3. The call recorded with the buyer's consent.
                4. A debrief held within a day, with two strengths and one improvement written down.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The new hire's first solo meeting has a written call plan and a recorded debrief within one working day."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose a low-risk warm account for the first solo meeting"
                - "Write a one-page call plan with agenda, questions and next step"
                - "Ask the buyer's permission to record the call"
                - "Debrief the recording with the manager within one working day"
            - name: First closed deal debrief and celebration
              description: |-
                ## Purpose
                First wins deserve to be noticed, and they also hold the clearest lesson a new hire will get in ramp. Marking the first closed deal in front of the team and then walking back through it, from first contact to signature, captures what worked while it is fresh and adds a real story to the onboarding material.

                ## Milestones
                1. The first closed deal announced in the team channel or meeting.
                2. A thirty-minute debrief held covering source, cycle length, stakeholders and turning points.
                3. Two lessons written up for the next intake.
                4. The deal added as an anonymised story to the onboarding hub if suitable.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first closed deal is announced to the team and a written debrief with two lessons is added to the onboarding hub."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Announce the new hire's first closed deal to the team"
                - "Hold a thirty-minute walk-back from first contact to signature"
                - "Write two lessons from the deal for the next intake"
                - "Add the deal story to the onboarding hub with customer details removed"
            - name: Day-ninety ramp graduation review
              description: |-
                ## Purpose
                Ninety days in, the new hire, their manager and sales leadership should agree clearly whether onboarding is finished and what comes next. A formal review with the full scorecard, certifications, pipeline and the new hire's own reflection ends ramp on a recorded decision, sets development goals for the next quarter and closes the onboarding record.

                ## Milestones
                1. The review booked for day ninety with the manager and a second leader.
                2. A pack of scorecard trends, certifications, pipeline and self-reflection prepared.
                3. A decision recorded: graduated, or extended with one clear target and a date.
                4. Three development goals for the next quarter agreed.

                ## Notes
                If ramp is extended, set one clear target and a date. Open-ended extensions rarely end well for anyone.
              priority: medium
              deadlineOffsetDays: 100
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A day-ninety review is held with a written decision and three development goals for the next quarter."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book the day-ninety review with the manager and a second sales leader"
                - "Prepare the pack of scorecard trends, certifications and pipeline"
                - "Ask the new hire for a one-page reflection on their ramp"
                - "Record the decision and three development goals for next quarter"
            - name: Cohort bootcamp week for several new hires
              description: |-
                ## Purpose
                Hiring five or more sellers in the same month is the moment a team either builds a strong class or overwhelms its managers. A planned bootcamp week with rooms or video links, a full agenda, named trainers and practice sessions every afternoon gets the whole cohort through the core material together and frees managers for the follow-up.

                ## Milestones
                1. A five-day agenda with named trainers and booked rooms or video links.
                2. Pre-work sent to the cohort a week before the start.
                3. Daily practice sessions held with scored role plays.
                4. Feedback collected from every attendee on the final afternoon.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A five-day bootcamp is delivered to the cohort with every session staffed and written feedback collected on the final day."
                cadence: one-shot
                effort_hours_estimate: "25"
              tasks:
                - "Fix the bootcamp dates and book rooms or video links"
                - "Confirm a named trainer for every session on the agenda"
                - "Send pre-work to the cohort a week before the start"
                - "Collect written feedback from every attendee on the last afternoon"
            - name: Customer listening day with support and success
              description: |-
                ## Purpose
                Support and customer success teams hear what customers really struggle with every day, which is exactly the context new sellers lack. A full day sitting in on support calls, a success manager's account review and a renewal conversation teaches a new hire how customers actually use the product and what over-promising in the sales cycle costs later.

                ## Milestones
                1. A date agreed with the support and customer success leads within the first month.
                2. At least five support calls or tickets observed.
                3. One account review and one renewal conversation joined.
                4. Three things the new hire will never promise a buyer written down.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A listening day is completed in the first month, with three written commitments about what not to promise buyers."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree a listening day date with the support and success leads"
                - "Sit with support agents for at least five customer calls or tickets"
                - "Join one account review and one renewal conversation"
                - "Write down three things never to promise a buyer"
            - name: Fast-track onboarding for an experienced hire
              description: |-
                ## Purpose
                Experienced sellers hired from a competitor or a similar company arrive with skills and habits, and putting them through the full beginner programme wastes their time and frustrates them. A fast track that tests what they know, skips modules they can already pass and concentrates on your process, product and pricing gets them productive sooner while respecting their obligations to a former employer.

                ## Milestones
                1. Certifications offered in the first week so known material can be skipped.
                2. A shortened plan focused on internal process, product and pricing.
                3. Confidentiality expectations about the previous employer discussed using HR guidance.
                4. Ramp targets shortened only where the evidence supports it.

                ## Notes
                Do not ask for or accept customer lists or documents from a previous employer. Agree the approach with HR or legal if you are unsure.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An experienced hire has a shortened written plan, with skipped modules and confidentiality expectations recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Offer the pitch and demo certifications in the first week"
                - "Remove modules the new hire passes from their ninety-day plan"
                - "Discuss confidentiality expectations using guidance from HR or legal"
                - "Focus week two on internal process, pricing and approval routes"
            - name: Onboarding a first-time seller or career changer
              description: |-
                ## Purpose
                People moving into sales from teaching, hospitality, customer support or the armed forces often bring excellent listening and resilience, but have never run a pipeline or handled rejection at volume. A longer foundation stage on sales basics, call reluctance and time management, with more shadowing and a gentler ramp schedule, gives them the base experienced hires bring with them.

                ## Milestones
                1. Two extra weeks of sales fundamentals added before stage one.
                2. Shadowing doubled in the first month.
                3. A weekly check on confidence, rejection and call reluctance built into the one-to-one.
                4. Ramp targets extended by an agreed amount and written into the plan.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A first-time seller has an extended written plan with fundamentals, doubled shadowing and adjusted targets agreed before they start."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Add two weeks of sales fundamentals before stage one of the plan"
                - "Double the shadowing target for the first month"
                - "Ask about rejection and call reluctance at each one-to-one"
                - "Agree an extended ramp target schedule with finance"
            - name: Remote new-seller onboarding across time zones
              description: |-
                ## Purpose
                Joining remotely means missing overheard calls, desk-side questions and lunch with the team, which is where a lot of onboarding really happens. Building those moments in deliberately, with listen-in links for live calls, recorded sessions for other time zones and scheduled informal time, closes most of the gap with office-based hires.

                ## Milestones
                1. Live shadowing arranged through listen-in links every week.
                2. Core sessions recorded for hires in other time zones.
                3. A weekly informal video coffee with a teammate in another location.
                4. Ramp results for remote and office hires compared after two intakes.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Remote hires have weekly live shadowing and video coffees, and their ramp is compared with office hires after two intakes."
                cadence: rolling
              tasks:
                - "Set up listen-in links so remote hires can join live calls"
                - "Record every core onboarding session for other time zones"
                - "Hold a video coffee between the remote hire and a teammate @recurring(weekly:wed)"
                - "Compare remote and office ramp times after two intakes"
            - name: Enterprise seller ramp into long deal cycles
              description: |-
                ## Purpose
                Enterprise sellers often face sales cycles of nine months or more, so judging them on closed revenue at day ninety tells you nothing. Ramp milestones built around account plans, executive meetings secured, opportunities with several contacts engaged and familiarity with security reviews, legal and procurement show progress long before the first signature.

                ## Milestones
                1. Account plans written for the new hire's top ten named accounts by day sixty.
                2. Executive-level meetings secured in at least three accounts by day ninety.
                3. Walk-throughs of a recent security review, legal redline and procurement process completed.
                4. Ramp targets for the first two quarters set on pipeline quality rather than closed revenue.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An enterprise new hire has ten account plans by day sixty and three executive meetings by day ninety, recorded in their plan."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Agree the new hire's top ten named accounts in week one"
                - "Walk through one recent security review, redline and procurement file"
                - "Set pipeline quality milestones for the first two quarters"
                - "Review the account plans with the manager at day sixty"
            - name: Promoted development rep moving into a closing seat
              description: |-
                ## Purpose
                Development reps promoted into account executive roles already know the product and the prospects, but have rarely run a deal from discovery to close or owned a forecast. Treating the move as a real onboarding, with a short plan covering demos, proposals, negotiation and forecasting, avoids the slump many promoted reps hit in their first two quarters.

                ## Milestones
                1. A gap list of closing skills the promoted rep has not yet practised.
                2. A sixty-day plan covering demo, proposal, negotiation and forecasting.
                3. Their prospecting accounts handed over cleanly to the development team.
                4. Their first forecast call joined with manager support.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The promoted rep has a written sixty-day plan, a clean handover of their prospecting work and has joined a forecast call."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List the closing skills the promoted rep has not yet practised"
                - "Write a sixty-day plan for demos, proposals, negotiation and forecasting"
                - "Hand the rep's prospecting accounts to a development team member"
                - "Prepare the rep for their first forecast call"
            - name: First-time manager running a new hire's ramp
              description: |-
                ## Purpose
                Newly promoted managers often onboard their first hire the way they were onboarded themselves, or simply let them shadow and hope. Pairing the manager with an experienced peer for that first ramp, using the existing plan and scorecard as written, and reviewing together at day thirty and day ninety gives both the manager and the new hire a fairer start.

                ## Milestones
                1. An experienced manager named as mentor for the first ramp.
                2. The standard plan and scorecard used as written the first time.
                3. Mentor reviews held at day thirty and day ninety.
                4. Three lessons recorded for the manager's second hire.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A first-time manager completes a full ninety-day ramp with a named mentor and records three lessons for the next hire."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Name an experienced manager to mentor the first ramp"
                - "Walk through the standard plan and scorecard with the mentor"
                - "Hold mentor reviews at day thirty and day ninety"
                - "Write three lessons to carry into the next new hire's ramp"
            - name: Ramp curve analysis across hiring classes
              description: |-
                ## Purpose
                With two or more years of tagged data, ramp stops being an anecdote and becomes a curve: pipeline and attainment by month since start, by role, hiring source and cohort. Analysing it shows which programme changes actually shortened ramp, which hiring sources ramp fastest and what realistic month-by-month expectations look like for planning.

                ## Milestones
                1. Attainment and pipeline by months since start plotted for every intake.
                2. Curves split by role, hiring source and onboarding version.
                3. The effect of the last two programme changes estimated.
                4. A recommended ramp curve published for finance and quota planning.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Ramp curves by role and intake are published, with the effect of recent programme changes estimated and a recommended curve shared with planning."
                cadence: cyclic
              tasks:
                - "Export attainment and pipeline by months since start for every intake"
                - "Plot ramp curves by role, hiring source and onboarding version"
                - "Estimate how the last two programme changes moved ramp time"
                - "Publish an updated ramp curve for finance and planning @recurring(yearly)"
            - name: Regional onboarding programme for a global sales team
              description: |-
                ## Purpose
                Enterprise teams selling in several regions often run one programme written for head office, which leaves new hires abroad learning pricing, terms and regulations that do not apply to them. A shared core with regional modules for local buyers, currencies, contract terms and holidays, each owned by someone in that region, keeps standards consistent while fitting the market.

                ## Milestones
                1. The core modules every region shares agreed.
                2. Regional modules listed for each region, with a local owner.
                3. Recorded sessions available for every time zone.
                4. Ramp times compared across regions twice a year.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each region has named owners for its regional modules, and ramp times across regions are compared at least twice a year."
                cadence: rolling
              tasks:
                - "Agree which onboarding modules every region shares"
                - "Name a local owner for each region's onboarding modules"
                - "List regional differences in pricing, terms and buyer behaviour"
                - "Hold a sync with the regional onboarding owners @recurring(quarterly)"
            - name: Full mock deal simulation as a ramp capstone
              description: |-
                ## Purpose
                Individual certifications test parts of the sale, but deals fail in the joins between them. A two-week capstone in which the new hire runs a simulated deal from first call to signed order, with colleagues playing several buyers, a procurement contact and a late objection, shows whether they can hold a whole deal together before carrying full quota.

                ## Milestones
                1. A simulated account written with three or four buyer roles and hidden facts.
                2. Colleagues briefed and booked to play each role.
                3. Discovery, demo, proposal and negotiation run on the simulated deal.
                4. A panel debrief held with scores on each stage and an overall pass or retake.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The new hire completes the simulated deal from first call to signature and receives a scored panel debrief."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write a simulated account with three or four buyer roles"
                - "Brief colleagues to play each buyer and the procurement contact"
                - "Schedule the simulated deal stages across two weeks"
                - "Hold a panel debrief with scores for each stage"
---

# Sales Rep Onboarding & Ramp

This area is for sales managers, the sellers they hire and enterprise teams who want new people productive fast and judged fairly. It starts with the foundations (what ramped means, a baseline from past hires, pre-start set-up, the first week, the ninety-day plan and stepped targets), then the weekly machinery of scorecards, one-to-ones and shadowing, the product, customer and certification skills every new hire must show, the decisions that shorten ramp, the check-ins and firsts worth marking, variants for experienced hires, career changers, remote, enterprise and promoted sellers, and finally the specialist work of ramp curves, regional programmes and a full mock deal.

What repeats while someone is in ramp is a weekly scorecard, one-to-one, shadowing debrief, pipeline check and objection drill, alongside monthly retrospectives, buddy check-ins and warning-sign checks, a quarterly curriculum refresh and a yearly audit of ramp results. The Onboarding 30/60/90, Operational checklist, Metrics log, 1:1, Remediation plan and Purchase decision templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
