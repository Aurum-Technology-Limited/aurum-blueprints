---
id: software-engineering.engineer-onboarding
name: Engineer Onboarding
description: "A tested setup guide, an architecture tour, starter tasks, trained buddies and a first-month plan that get new engineers shipping real changes in days, with metrics and reviews that keep the programme improving."
category: business
version: 1.0.0
tags: [software-engineering, engineer-onboarding, engineer, manager, team, onboarding, buddy, setup-guide]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - onboarding-30-60-90
    - feedback-themes
    - metrics-log
    - one-on-one
    - onboarding-plan
  pillars:
    - name: Software Engineering
      emoji: "⚙️"
      description: "Building and running software: architecture and code quality, delivery and release, testing, infrastructure and reliability, incidents, technical debt, developer experience and engineering teams."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Engineer Onboarding
          description: "Getting new engineers productive quickly with setup guides, architecture tours, starter tasks, buddies and a clear first-month plan."
          projects:
            - name: Definition of a ramped-up new engineer
              description: |-
                ## Purpose
                Most teams cannot say when onboarding is finished, so a new hire is either rushed into on-call in week two or treated as new for six months. Writing down the handful of observable milestones that mean someone is ramped up, such as a first merged change by day three, a first production deploy by week two and an independent feature by day sixty, gives managers, buddies and the new engineer the same finish line.

                ## Milestones
                1. Five to seven observable ramp-up milestones written, each with a target day.
                2. The milestones agreed by the engineering managers and two recent hires.
                3. Each milestone tied to something that can be checked, such as a merged pull request or a completed deploy.
                4. The definition published on the onboarding start page and linked from the offer pack.

                ## Notes
                Keep the targets realistic for your codebase. A first merged change on day one is a good goal only if the setup guide genuinely works in a morning.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A published definition lists at least five ramp-up milestones with target days, agreed by every engineering manager on the team."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List what the last three hires could do at day thirty that they could not at day one"
                - "Draft five to seven ramp-up milestones with a target day for each"
                - "Ask two recent hires whether the targets match their experience"
                - "Publish the agreed definition on the onboarding start page"
                - "Revisit the ramp-up targets against a year of hire data @recurring(yearly)"
            - name: Pre-arrival access and equipment checklist
              description: |-
                ## Purpose
                Spending day one waiting for a laptop, a source control invite or a VPN certificate teaches a new engineer that the team was not ready for them. A checklist that the hiring manager starts the day an offer is accepted, covering hardware, identity accounts, repository and cloud access, chat channels and calendar invites, turns two lost days into a working first morning.

                ## Milestones
                1. Every account, group and device a new engineer needs listed with its owner and lead time.
                2. Items with long lead times, such as hardware and security reviews, flagged to start at offer acceptance.
                3. The checklist trialled on one real hire and gaps added.
                4. A named person responsible for completing it before every start date.

                ## Notes
                Start from the **Operational checklist** template. Ask IT and security which requests need a ticket number or manager approval, and note it against each line.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A checklist naming every account and device, with owners and lead times, has been completed for at least one hire before their first day."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the last hire which access they were still missing at the end of week one"
                - "List every account, group, device and channel with its owner and lead time"
                - "Mark the items that must be requested on the day the offer is accepted"
                - "Run the checklist for the next hire and add anything that was missed"
            - name: Clean-machine setup guide to a running app
              description: |-
                ## Purpose
                Setup instructions written by someone who installed everything two years ago always skip the step that only a fresh laptop reveals. A guide tested from a wiped machine, with exact versions, expected output after each step and fixes for the known failures, lets a new engineer run the main application and its tests locally in a single morning.

                ## Milestones
                1. A guide covering prerequisites, cloning, secrets, dependencies, database seeding and running the tests.
                2. Expected output or a screenshot shown after each major step.
                3. A troubleshooting section listing the five commonest failures and their fixes.
                4. The guide followed end to end on a clean machine by someone who has never set it up.

                ## Notes
                Write the guide as an onboarding document, not a tooling project. If a step takes more than ten minutes or fails often, log it for the setup blockers project rather than writing a longer explanation.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A person new to the codebase follows the guide on a clean machine and runs the application and its test suite locally in under four hours."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Time yourself setting up the main repository on a fresh user account or virtual machine"
                - "Write each step with exact versions and the output a reader should expect"
                - "Add a troubleshooting section for the failures you hit along the way"
                - "Ask an engineer from another team to follow the guide while you watch silently"
            - name: Hour-by-hour first day schedule
              description: |-
                ## Purpose
                First days drift into a blur of HR forms and waiting for a manager who is in back-to-back meetings. A written schedule, from the welcome coffee to the first pull request opened before five, tells the new engineer where to be and gives them one small win to go home with.

                ## Milestones
                1. A first day schedule with times, people and locations or video links.
                2. HR and compliance tasks grouped into one block instead of scattered across the day.
                3. Time set aside for setup with the buddy close by.
                4. A small, safe first change, such as adding their name to the team page, ready to open as a pull request.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written first day schedule exists and the last new hire opened a pull request on their first day."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask HR which first day sessions are mandatory and how long each takes"
                - "Draft the day in hour blocks with a named person for each block"
                - "Prepare a tiny first change the new engineer can open as a pull request"
                - "Send the schedule to the new engineer and their buddy two days before they start"
            - name: Onboarding buddy programme
              description: |-
                ## Purpose
                New engineers hold back basic questions when the only person to ask is their manager or a busy tech lead. A named buddy from the same team, with protected time and a short written role, gives them someone to ask the questions that feel too small for anyone else. Buddies also notice early when someone is stuck and too polite to say so.

                ## Milestones
                1. A one-page buddy role covering expectations, time commitment and what to escalate.
                2. A pool of at least four willing buddies who have been on the team six months or more.
                3. Buddy time recognised in sprint planning, roughly three to five hours a week for the first month.
                4. Every new engineer in the next quarter assigned a buddy before their start date.

                ## Notes
                A buddy is not a mentor or a manager. Keep the role practical: setup help, introductions, where things live and how the team really works.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written buddy role is published and every engineer who starts in the following quarter has a named buddy before day one."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a one-page buddy role with time commitment and escalation points"
                - "Ask the team who would volunteer to buddy in the next six months"
                - "Agree with the manager how buddy hours are reflected in sprint capacity"
                - "Assign a buddy to the next confirmed hire and introduce them by email"
            - name: First-month plan for every new engineer
              description: |-
                ## Purpose
                Without a plan, the first month becomes whatever the loudest ticket is that week, and the new engineer has no way to tell whether they are on track. A written plan for weeks one to four, followed by goals for days sixty and ninety, sets expectations both ways and makes the thirty-day review a conversation about evidence.

                ## Milestones
                1. A reusable plan with goals for each of the first four weeks and for days sixty and ninety.
                2. Each goal phrased as an outcome, such as a first deploy or a reviewed design note.
                3. Space for the manager to add role-specific goals before the start date.
                4. The plan shared with the next new engineer on their first day.

                ## Notes
                Start from the **Onboarding 30/60/90** template. Copy it per hire rather than editing the master.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reusable first-month plan with weekly goals and day sixty and ninety outcomes is used for the next new engineer."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create the master plan from the onboarding 30/60/90 template"
                - "Write one outcome per week for the first four weeks"
                - "Add day sixty and day ninety goals that match the ramp-up definition"
                - "Fill in a copy for the next hire and share it on their first morning"
            - name: Good first issues backlog
              description: |-
                ## Purpose
                Starter tasks picked on the morning they are needed tend to be either trivial chores or tangled bugs that need three systems explained. A labelled backlog of ten real, small, well-described tickets, each touching a different part of the codebase, lets a new engineer merge something useful in the first few days and learn the code by changing it.

                ## Milestones
                1. A label for starter tickets agreed and added to the issue tracker.
                2. Ten tickets written with context, the files likely involved and what done looks like.
                3. The tickets spread across at least four areas of the codebase.
                4. Each ticket checked by a senior engineer as achievable in one or two days.

                ## Notes
                Good starter tickets change real behaviour. A typo fix teaches the review process but not the system.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least ten labelled starter tickets, covering four or more codebase areas, are ready in the tracker."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Create a starter label in the issue tracker"
                - "Ask each team member to nominate two small tickets from their recent work"
                - "Rewrite each nominated ticket with context, likely files and acceptance criteria"
                - "Have a senior engineer confirm each ticket fits in one or two days"
            - name: Architecture tour for new starters
              description: |-
                ## Purpose
                New engineers usually learn the system one stack trace at a time, and some hold a wrong mental model for months. A one-hour tour that walks a single user request through the system, with one current diagram and the reasons behind the odd parts, gives them a map to hang everything else on.

                ## Milestones
                1. One diagram showing the main services, data stores, queues and external dependencies.
                2. A walkthrough script that follows one real request from the browser or client to the database and back.
                3. A short list of the historical decisions that explain the surprising parts.
                4. The tour recorded so it can be watched again in week three, when it makes more sense.

                ## Notes
                Keep the tour about orientation. Detailed design records belong in the team's documentation; link to them rather than repeating them.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A recorded architecture tour with a current diagram exists and the last two new hires watched it in their first week."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose one representative user request to trace through the system"
                - "Draw a single diagram of the services and data stores that request touches"
                - "Write a one-hour script with the history behind the three oddest parts"
                - "Record the tour and link it from the onboarding start page"
                - "Re-record the architecture tour against the current system @recurring(yearly)"
            - name: Team and domain glossary
              description: |-
                ## Purpose
                Every team speaks in acronyms, internal service names and customer jargon that new engineers nod along to for weeks. A plain glossary of the forty or so terms that come up in standups, tickets and code, with what each means and where it lives, removes a quiet source of confusion.

                ## Milestones
                1. Forty or more terms collected from standups, tickets, code and recent incident reviews.
                2. Each term given a one-line meaning and, where it applies, the repository or service it maps to.
                3. Retired names and their replacements noted, since old names linger in code.
                4. The glossary linked from the onboarding start page and the team chat channel.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A glossary of at least forty terms, each with a meaning and location, is linked from the onboarding start page."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the last two hires which terms confused them in their first month"
                - "Skim a week of standup notes and tickets for unexplained jargon"
                - "Ask the agent to draft one-line definitions from your term list for the team to correct"
                - "Add new terms heard in the month to the glossary @recurring(monthly:15)"
            - name: Baseline of past hires' ramp-up times
              description: |-
                ## Purpose
                Before changing anything, it helps to know how long onboarding actually takes today. Pulling the dates of first merged change, first production deploy and first independent feature for the last eight to ten hires from source control and the deploy log gives a baseline that later improvements can be measured against.

                ## Milestones
                1. Start dates for the last eight to ten engineering hires collected.
                2. Days to first merged change and first production deploy found for each.
                3. A median and range calculated for each milestone.
                4. Two or three obvious causes of the slowest ramp-ups noted from conversations with those hires.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table of ramp-up dates for at least eight past hires, with medians for first merge and first deploy, is saved with the onboarding metrics."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Get start dates for the last eight to ten engineering hires from the manager or HR"
                - "Look up each hire's first merged pull request and first production deploy"
                - "Work out the median and range in days for each milestone"
                - "Ask the two slowest ramp-ups what held them back"
            - name: Monthly clean-machine setup test
              description: |-
                ## Purpose
                Setup guides rot quietly: a dependency bumps a major version, a secret moves, a seed script breaks, and nobody notices until a new hire loses a day. Running the guide on a clean machine or fresh container once a month catches the drift while it is one small fix.

                ## Milestones
                1. A clean environment, such as a spare laptop account or a disposable virtual machine, available for testing.
                2. A rotating list of engineers who take turns running the test.
                3. Each run recorded with the time taken and anything that failed.
                4. Every failure fixed in the guide or logged as a blocker within the same week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly setup tests recorded, each with time taken and failures fixed within a week."
                cadence: rolling
              tasks:
                - "Prepare a disposable environment that starts from a blank operating system"
                - "Draw up a rota of engineers who take turns running the test"
                - "Run the setup guide from scratch and record time taken and failures @recurring(monthly:12)"
                - "Fix the guide or open a blocker ticket for each failure found"
            - name: Good first issues refill routine
              description: |-
                ## Purpose
                Starter backlogs get used up by the second hire and then quietly fill with stale tickets that no longer make sense. A short monthly pass that removes done or outdated tickets and tops the list back up to ten keeps the backlog ready for whoever starts next.

                ## Milestones
                1. A named owner for the starter backlog each quarter.
                2. Outdated or already-fixed starter tickets closed each month.
                3. The backlog topped up to at least ten ready tickets each month.
                4. No new engineer in six months started without a choice of at least five starter tickets.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The starter label holds at least ten ready tickets at every monthly check for six months."
                cadence: rolling
              tasks:
                - "Name this quarter's owner for the starter backlog"
                - "Close starter tickets that are done, outdated or too large"
                - "Top the starter backlog back up to ten ready tickets @recurring(monthly:19)"
                - "Note which starter tickets new hires actually picked and why"
            - name: Weekly buddy check-ins for the first six weeks
              description: |-
                ## Purpose
                Problems in the first month are rarely dramatic: a setup issue worked around badly, a review comment taken hard, a ticket that has been stuck for three days. A fixed thirty-minute weekly check-in between buddy and new engineer surfaces these while they are small and gives the buddy a reason to ask.

                ## Milestones
                1. A recurring weekly slot booked for six weeks before the start date.
                2. A short set of standing questions the buddy asks each week.
                3. Anything blocking passed to the manager within a day.
                4. Six check-ins completed for each new engineer, with a line noted after each.

                ## Notes
                Good standing questions: what took longer than it should have, who you have not met yet, and what you would ask if it did not feel silly.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every new engineer in a quarter has six weekly buddy check-ins recorded, with blockers raised to the manager within a day."
                cadence: rolling
              tasks:
                - "Book a weekly thirty-minute slot for six weeks before the start date"
                - "Write four standing questions the buddy asks each time"
                - "Hold the buddy check-in and note one line about how it went @recurring(weekly:tue)"
                - "Pass anything blocking to the manager the same day"
            - name: Thirty and ninety day onboarding surveys
              description: |-
                ## Purpose
                Every rough edge is obvious to a new engineer in the first weeks, and then it stops being visible. A short survey at day thirty and day ninety captures what was confusing, what helped and what was missing while it is still fresh, and gives the team specific fixes rather than a general sense that onboarding could be better.

                ## Milestones
                1. A survey of eight questions or fewer, mixing ratings with two open questions.
                2. Sending at day thirty and day ninety scheduled for every hire.
                3. Responses grouped into themes each quarter.
                4. At least one change made from each quarter's themes.

                ## Notes
                Start from the **Feedback themes** template. Let people answer anonymously if your team is large enough that answers would not be obvious.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarters of survey themes recorded, each with at least one change made in response."
                cadence: rolling
              tasks:
                - "Write a survey of eight questions or fewer with two open questions"
                - "Schedule the survey for day thirty and day ninety of the next hire"
                - "Group the quarter's survey answers into themes and pick one change @recurring(quarterly)"
                - "Tell recent hires which change came from their answers"
            - name: Onboarding metrics log
              description: |-
                ## Purpose
                Survey scores tell you how onboarding felt; dates tell you how it went. A log that records each hire's start date, first merged change, first production deploy and day ninety outcome shows whether changes to the programme are making a difference, and spots a hire falling behind early.

                ## Milestones
                1. A log with columns for start date, first merge, first deploy, first independent feature and survey scores.
                2. Every hire from the baseline onwards entered.
                3. Monthly entries kept up to date for all current new starters.
                4. A rolling median for each milestone visible at the top.

                ## Notes
                Start from the **Metrics log** template. Use these numbers to improve the programme, never to rank individual new hires against each other.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The log holds milestone dates for every hire since the baseline, updated monthly, with a rolling median per milestone."
                cadence: rolling
              tasks:
                - "Create the onboarding log from the metrics log template"
                - "Enter the baseline hires and their milestone dates"
                - "Update milestone dates for every current new starter @recurring(monthly:24)"
                - "Add a rolling median for first merge and first deploy"
            - name: Quarterly onboarding retrospective
              description: |-
                ## Purpose
                Onboarding is owned by everyone and therefore by no one, so fixes pile up in survey answers and chat threads. A forty-five minute retrospective each quarter, with the managers, the buddies and the quarter's new hires, turns the metrics and survey themes into three owned actions.

                ## Milestones
                1. A quarterly forty-five minute slot booked with managers, buddies and recent hires.
                2. Metrics and survey themes shared before the meeting.
                3. No more than three actions agreed, each with an owner and a date.
                4. Last quarter's actions checked at the start of each retrospective.

                ## Notes
                Start the meeting by asking the newest hire to walk through their first week. It grounds the discussion faster than any chart.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly retrospectives held in a year, each ending with up to three owned actions and a check of the previous ones."
                cadence: cyclic
              tasks:
                - "Book the first retrospective with managers, buddies and recent hires"
                - "Share the metrics log and survey themes two days before"
                - "Hold the onboarding retrospective and record three owned actions @recurring(quarterly)"
                - "Check last quarter's actions in the first ten minutes"
            - name: Upcoming start dates weekly handoff
              description: |-
                ## Purpose
                Engineering teams often hear about a start date from the new hire's welcome message in chat. A five-minute Monday check of accepted offers with the recruiter or HR, looking four weeks ahead, gives time to order a laptop, assign a buddy and pick starter tickets.

                ## Milestones
                1. An agreed place where recruiting records accepted offers and start dates.
                2. A Monday check of the next four weeks of start dates.
                3. The access checklist and buddy assignment started for every hire at least two weeks out.
                4. No hire in six months arrived to missing hardware or no buddy.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For six months, every new engineer had a buddy and completed access checklist at least two weeks before their start date."
                cadence: rolling
              tasks:
                - "Agree with recruiting where accepted offers and start dates are recorded"
                - "Check the next four weeks of engineering start dates @recurring(weekly:mon)"
                - "Start the access checklist and buddy assignment for each new date"
            - name: Role access bundle review
              description: |-
                ## Purpose
                Access lists for new engineers grow by accretion: someone needed a tool once, so everyone gets it, while a newly required system is missing. Reviewing each role's access bundle every quarter keeps new hires able to work on day one without handing out more permissions than the job needs.

                ## Milestones
                1. Access bundles written for each engineering role, such as backend, frontend, mobile and data.
                2. Each item in a bundle justified by a task the role does in its first month.
                3. Tools nobody used in their first ninety days removed from the default bundle.
                4. Security or IT confirmed the bundles match least-privilege policy.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each engineering role has a written access bundle reviewed in each of the last four quarters, with unused items removed."
                cadence: rolling
              tasks:
                - "List the access each engineering role receives today"
                - "Ask recent hires which granted tools they never opened"
                - "Review each role's access bundle with security or IT @recurring(quarterly)"
                - "Remove unused default access and add anything hires had to request"
            - name: Onboarding docs freshness rota
              description: |-
                ## Purpose
                The onboarding start page, setup guide, glossary and architecture tour each go stale at their own pace. Giving every onboarding document a named owner and a monthly check of one or two of them stops new hires being the people who find the broken links.

                ## Milestones
                1. Every onboarding document listed with a named owner.
                2. A last-checked date shown at the top of each document.
                3. One or two documents checked each month on rotation.
                4. No onboarding document more than six months past its last check.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every onboarding document shows a named owner and a last-checked date within the past six months."
                cadence: rolling
              tasks:
                - "List every onboarding document and assign an owner to each"
                - "Add a last-checked date to the top of each document"
                - "Check the next two onboarding documents on the rota @recurring(monthly:3)"
            - name: Guided codebase reading path
              description: |-
                ## Purpose
                Opening a repository with several hundred thousand lines and no starting point is overwhelming, and new engineers often read the least important parts first. A short reading path, ordered from entry points to core domain logic to the shared libraries, with a question to answer at each stop, turns the first two weeks of reading into deliberate learning.

                ## Milestones
                1. Eight to twelve stops chosen, each a file or module with a sentence on why it matters.
                2. A question at each stop that the reader can answer only by reading the code.
                3. The path ordered from the request entry points inward.
                4. Two recent hires walked the path and answered the questions.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A reading path with at least eight stops and questions is complete, and two new engineers have answered every question."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pick eight to twelve files or modules a new engineer must understand"
                - "Write one sentence and one question for each stop"
                - "Order the stops from entry points to core logic to shared code"
                - "Ask the next hire to walk the path and discuss their answers with the buddy"
            - name: First change shipped to production with a buddy
              description: |-
                ## Purpose
                Deploying to production for the first time is the moment many new engineers are most anxious about, and teams that delay it make it more frightening. Walking one small change through review, merge, deploy, verification and, if it comes to it, rollback with a buddy beside them teaches the whole delivery path in a single afternoon.

                ## Milestones
                1. A small, low-risk change chosen from the starter backlog.
                2. The change reviewed, merged and deployed by the new engineer with the buddy watching.
                3. The change verified in production using the team's normal checks.
                4. The rollback steps explained and, where safe, practised in a staging environment.

                ## Notes
                Aim for this within the first two weeks. If it cannot happen that early, the reason is usually a delivery problem worth logging.
              priority: high
              frontmatter:
                mode: learning
                output_kind: event-completion
                success_criteria: "The new engineer has deployed their own change to production and can describe the rollback steps, within fourteen days of starting."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pick a low-risk starter ticket that changes visible behaviour"
                - "Pair on review, merge and deploy with the buddy watching"
                - "Verify the change in production using the team's usual checks"
                - "Walk through the rollback steps together in staging"
            - name: Production dashboards and logs tour
              description: |-
                ## Purpose
                When something breaks, new engineers often do not know where to look, so they wait for someone senior to notice. A ninety-minute tour of the team's main dashboards, log search and error tracker, using one real past incident as the example, shows them where the evidence lives before they ever need it under pressure.

                ## Milestones
                1. The three or four dashboards, log tools and error trackers the team relies on listed.
                2. A past incident chosen and its trail traced through those tools.
                3. Access to each tool confirmed for the new engineer during the session.
                4. The new engineer finds a given error in the logs on their own afterwards.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The new engineer has completed the tour and independently found a given error and its request in the logs and dashboards."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the dashboards, log search and error tracker the team checks daily"
                - "Pick a past incident whose trail is still in the tools"
                - "Run the ninety-minute tour with the new engineer driving"
                - "Set a small exercise to find a named error in the logs alone"
            - name: Customer and domain immersion week
              description: |-
                ## Purpose
                Engineers who have never watched a customer use the product make reasonable technical choices that miss the point. Spending part of the first or second week reading support tickets, sitting in on a sales or support call and using the product as a customer would gives the context that makes later tickets make sense.

                ## Milestones
                1. Two support or customer calls shadowed, with permission.
                2. Twenty recent support tickets read and the three commonest problems noted.
                3. The product used end to end as a new customer, with friction written down.
                4. A short summary shared with the buddy or manager.

                ## Notes
                Respect customer privacy: use the support team's guidance on what new staff may view and record.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The new engineer has shadowed two customer calls, read twenty tickets and shared a written summary of the three commonest problems."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the support lead which calls a new engineer may shadow"
                - "Read twenty recent support tickets and note recurring problems"
                - "Sign up and use the product as a new customer would"
                - "Share a half-page summary with the buddy or manager"
            - name: How we work here primer
              description: |-
                ## Purpose
                Much of what new engineers need to know is unwritten: how big a pull request should be, when standup really starts, whether to ask in a thread or a direct message, how tickets move. A two-page primer that answers the questions every hire asks in week one saves dozens of small interruptions and makes the unspoken rules fair to everyone.

                ## Milestones
                1. The fifteen most common week-one questions collected from recent hires.
                2. Each answered in a sentence or two, with a link where a longer document exists.
                3. Meeting rhythm, review expectations, ticket flow and working hours covered.
                4. The primer read and corrected by two engineers and the manager.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A primer answering at least fifteen common week-one questions is linked from the onboarding start page and has been checked by the manager."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the last three hires what they wished someone had told them in week one"
                - "Answer each question in one or two sentences with links"
                - "Ask two engineers and the manager to correct anything out of date"
                - "Link the primer from the onboarding start page"
            - name: New language or framework ramp-up plan
              description: |-
                ## Purpose
                Strong engineers are often hired from a different stack, and they lose weeks writing code that works but reads like their old language. A short study plan for the team's main language and frameworks, covering the idioms, the testing style and the team's own conventions, closes that gap in a month instead of a year.

                ## Milestones
                1. Two or three trusted learning resources chosen for the team's main language and framework.
                2. A list of team idioms and conventions that differ from the language's defaults.
                3. Three exercises completed and reviewed by an experienced engineer.
                4. A first production change in the new stack reviewed with comments on idiom, not just correctness.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The engineer has completed three reviewed exercises and a production change in the new stack within their first month."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the senior engineers which two learning resources they would recommend"
                - "List the team conventions that surprise people coming from other stacks"
                - "Set three small exercises that touch the team's main framework"
                - "Review the first production change for idiom as well as correctness"
            - name: Buddy training session
              description: |-
                ## Purpose
                Being a buddy is a skill: knowing when to answer and when to point to the docs, how to give review feedback to someone in their first week, and when to tell the manager something is wrong. A one-hour session for new buddies, with examples from past onboarding, makes the programme consistent rather than dependent on who you happened to get.

                ## Milestones
                1. A one-hour session outline covering the role, common situations and escalation.
                2. Three real examples from past onboarding used as discussion cases.
                3. Every active buddy attended once.
                4. A one-page summary kept with the buddy role description.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every active buddy has attended the training session and the summary is stored with the buddy role description."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "Collect three situations from past onboarding that buddies found hard"
                - "Write a one-hour outline covering role, situations and escalation"
                - "Run the session for everyone in the buddy pool"
                - "Run a refresher buddy session with updated examples @recurring(yearly)"
            - name: Fixing the top five setup blockers
              description: |-
                ## Purpose
                The monthly setup tests and surveys usually point to the same few culprits: a flaky seed script, a secret that has to be requested by hand, a package that fails on one chip architecture. Fixing the five that cost new hires the most time, rather than documenting workarounds, is often the single biggest improvement to the first week.

                ## Milestones
                1. Every setup failure from tests and surveys listed with the time it cost.
                2. The top five chosen by total hours lost.
                3. Each of the five fixed at source or removed, not just documented.
                4. The next clean-machine test completed without hitting any of the five.

                ## Notes
                Where a fix needs real tooling work, hand it to whoever owns developer tooling with the evidence attached. Onboarding owns finding and ranking the blockers.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Five ranked setup blockers are fixed at source and the following clean-machine test hits none of them."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Gather setup failures from the test log and survey answers"
                - "Rank them by total hours lost across recent hires"
                - "Open a ticket with evidence for each of the top five"
                - "Re-run the clean-machine test once all five are closed"
            - name: Seed data and sandbox accounts for new starters
              description: |-
                ## Purpose
                With an empty local database, a new engineer cannot click through the product, so every starter ticket begins with an hour of creating test users by hand. A realistic seed dataset and a set of sandbox accounts for the third-party services the product uses let them see the system working on day one, without ever touching production data.

                ## Milestones
                1. A seed dataset covering the main user types and the states a starter ticket might need.
                2. No real customer data in the seed, confirmed by the data owner.
                3. Sandbox or test-mode accounts for the main third-party services, with a way for new hires to get credentials safely.
                4. The setup guide updated to load the seed in one step.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A new engineer can load a seed dataset with no real customer data in one step and log in as each main user type."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List the user types and data states starter tickets usually need"
                - "Write or extend a seed script that creates them with fake data"
                - "Confirm with the data owner that no real customer data is included"
                - "Document how new hires get sandbox credentials through the secrets manager"
            - name: Single onboarding start page
              description: |-
                ## Purpose
                Onboarding material tends to spread across a wiki, three READMEs, a pinned chat message and an old slide deck. One start page that links everything in the order a new engineer needs it, day one first, gives them a single place to begin and the team a single place to update.

                ## Milestones
                1. Every existing onboarding document, video and checklist found and listed.
                2. Duplicates merged or retired, with redirects where possible.
                3. One start page ordered by day one, week one and month one.
                4. The page linked from the offer pack, the welcome message and the main repository.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One start page links every current onboarding resource in day, week and month order, and no duplicate onboarding page remains live."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Search the wiki, repositories and chat for every onboarding resource"
                - "Merge or retire duplicates and add redirects"
                - "Build the start page in day one, week one and month one sections"
                - "Check every link on the onboarding start page still works @recurring(monthly:28)"
            - name: Cohort or one-at-a-time onboarding decision
              description: |-
                ## Purpose
                Teams hiring more than one engineer a month face a choice: onboard each person individually as they arrive, or align start dates into small cohorts that share the tour, the setup session and a peer group. Comparing the two against your hiring rate, buddy capacity and recruiting flexibility settles it on purpose rather than by accident.

                ## Milestones
                1. Expected hires per month for the next two quarters estimated with recruiting.
                2. Buddy and manager time compared under each model.
                3. Recruiting asked how much flexibility there is on start dates.
                4. A decision recorded with the reasons and a date to revisit.
              priority: low
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision between cohort and individual onboarding is recorded with hiring forecasts, capacity figures and a review date."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask recruiting for the expected engineering hires per month"
                - "Estimate buddy and manager hours under each model"
                - "Ask whether start dates can be grouped to the first Monday of a month"
                - "Record the decision with reasons and a date to revisit"
            - name: Short recorded explainer library
              description: |-
                ## Purpose
                Senior engineers explain the same five things to every new hire: how the build works, how feature flags are used, how to read the deploy pipeline, where configuration lives. Recording each as a five to ten minute screen share once frees their time and lets new starters rewatch at their own pace.

                ## Milestones
                1. The five explanations most often repeated to new hires identified.
                2. Each recorded as a screen share of ten minutes or less.
                3. Videos stored in one place and linked from the start page with a one-line summary.
                4. Each video's recording date shown, so stale ones are easy to spot.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least five explainer videos of ten minutes or less are linked from the start page, each with a summary and recording date."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the senior engineers which explanations they repeat most often"
                - "Record the first explainer as a screen share under ten minutes"
                - "Ask the agent to draft a one-line summary and chapter list from each transcript"
                - "Link every video from the start page with its recording date"
            - name: Cutting time to first production deploy
              description: |-
                ## Purpose
                Time to first deploy is the clearest single signal of onboarding health, because it depends on setup, access, starter tasks, review speed and the pipeline all working at once. Taking the baseline median and setting out to halve it, by removing whichever step holds new hires up longest, improves the experience for every future hire at once.

                ## Milestones
                1. The current median days to first production deploy taken from the baseline.
                2. The waiting time in each step, from setup to approval to deploy, mapped for two recent hires.
                3. The longest wait removed or shortened.
                4. The median for the next three hires at or below half the baseline.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The median days to first production deploy for the next three hires is half the baseline median or less."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Take the median days to first deploy from the baseline"
                - "Map where two recent hires waited between setup and their first deploy"
                - "Pick the longest wait and agree a fix with its owner"
                - "Compare the next three hires against the baseline median"
            - name: Automated access provisioning by role
              description: |-
                ## Purpose
                Granting access by hand from a checklist works for a few hires a year and breaks when hiring speeds up, because each request waits on a different admin. Mapping each role's access bundle to identity provider groups, so adding someone to one group grants the rest, gets new engineers working on day one and makes removing access equally reliable.

                ## Milestones
                1. Each role's access bundle mapped to groups in the identity provider.
                2. Tools that support group-based provisioning connected; manual exceptions listed.
                3. The change reviewed and approved by security or IT.
                4. The next two hires given access through group membership alone, apart from the listed exceptions.

                ## Notes
                Agree the approach with whoever owns identity and security before changing anything. They may already have a provisioning process you should plug into.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Two consecutive hires received their role's access through identity group membership, with only documented exceptions granted by hand."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Meet the identity or IT owner to agree the provisioning approach"
                - "Map each access bundle item to an identity provider group"
                - "List the tools that cannot be provisioned by group and why"
                - "Provision the next hire through groups and note anything that failed"
            - name: Day-one welcome and first commit
              description: |-
                ## Purpose
                The first day sets the tone for the rest of the first month. Running it to the written schedule, with a buddy ready at nine, a working laptop, a team lunch or video coffee and a first small pull request opened before the end of the day, tells the new engineer the team planned for them.

                ## Milestones
                1. Laptop, accounts and access confirmed working the evening before.
                2. The buddy and manager both available for their blocks on the day.
                3. A team lunch or video coffee held.
                4. A first pull request opened by the new engineer before the end of the day.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The new engineer had working access from the first hour and opened a pull request on day one."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Confirm laptop and account access with IT the day before"
                - "Block the buddy's and manager's calendars for their first day slots"
                - "Book the team lunch or video coffee"
                - "Help the new engineer open their first pull request before the day ends"
            - name: End of first week check-in
              description: |-
                ## Purpose
                By Friday of week one a new engineer knows whether setup worked, who has been helpful and what still makes no sense, and most will say so only if asked directly. A thirty-minute manager check-in at the end of the first week catches setup and access problems before they cost a second week.

                ## Milestones
                1. A thirty-minute slot with the manager booked for the first Friday.
                2. Setup, access, buddy contact and starter ticket progress covered.
                3. Anything unresolved given an owner and a date.
                4. The new engineer's goals for week two agreed.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A first-week check-in is held for every new engineer, with any open issue assigned an owner and week two goals agreed."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Book a thirty-minute check-in for the new engineer's first Friday"
                - "Ask what still blocks them and who has been most helpful"
                - "Assign an owner and date to each unresolved issue"
                - "Agree two or three goals for week two"
            - name: Thirty-day review conversation
              description: |-
                ## Purpose
                Thirty days in, the first-month plan has either held or drifted, and both sides have opinions they have not yet shared. A structured review against the plan, covering what went well, what was missing and what the next sixty days should focus on, turns impressions into an agreed direction.

                ## Milestones
                1. The new engineer and manager both reviewed the first-month plan beforehand.
                2. Progress against each thirty-day goal discussed with examples.
                3. Gaps in the onboarding programme itself noted for the retrospective.
                4. Goals for days sixty and ninety confirmed or adjusted in writing.

                ## Notes
                Start from the **1:1** template. Ask for feedback on the onboarding before giving feedback on performance.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A thirty-day review is held and written up, with day sixty and ninety goals recorded and onboarding gaps passed to the retrospective."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book the thirty-day review and send the plan to review beforehand"
                - "Ask what the onboarding got wrong before discussing progress"
                - "Record goals for days sixty and ninety in the plan"
                - "Pass any programme gaps to the next onboarding retrospective"
            - name: Ninety-day review and onboarding sign-off
              description: |-
                ## Purpose
                Onboarding should end on a date, with a clear statement that the engineer is now a full member of the team, rather than fading out. A ninety-day review against the ramp-up definition confirms they are ready for on-call and independent work, or names exactly what support is still needed, and formally closes the buddy arrangement.

                ## Milestones
                1. Progress against every ramp-up milestone checked with evidence.
                2. Readiness for the on-call rotation agreed, or the remaining gaps named.
                3. The buddy arrangement closed with thanks, and the buddy's time acknowledged.
                4. The day ninety survey sent and the metrics log updated.

                ## Notes
                If the engineer is struggling, say so plainly at this point with specific examples and a support plan. Discovering it at the first performance review is unfair to everyone.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A ninety-day review is recorded against the ramp-up definition, with an on-call readiness decision and the buddy arrangement formally closed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Gather evidence for each ramp-up milestone before the review"
                - "Agree whether the engineer is ready to join on-call"
                - "Thank the buddy and close the buddy arrangement"
                - "Send the day ninety survey and update the metrics log"
            - name: Summer intern cohort onboarding
              description: |-
                ## Purpose
                Interns arrive together, stay ten to twelve weeks and need to ship something real before they go, so a slow first fortnight costs a fifth of their time. Planning the cohort's first two weeks together, with a shared setup session, scoped projects ready on day one and mentors briefed, gives them a fair chance to finish something they can show.

                ## Milestones
                1. One scoped project per intern written and approved by a mentor before the start date.
                2. Access, hardware and buddies arranged for the whole cohort two weeks out.
                3. A shared setup morning and architecture tour scheduled for day one.
                4. A final demo date set in the first week.

                ## Notes
                Start from the **Onboarding plan** template. Check local rules on intern pay and working hours with HR before scoping the work.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every intern starts with a scoped project, working access and a buddy, and each one presents a finished piece of work at the final demo."
                cadence: cyclic
                effort_hours_estimate: "20"
              tasks:
                - "Ask managers to propose one scoped project per intern place"
                - "Order hardware and access for the whole cohort two weeks before the start"
                - "Schedule a shared setup morning and tour for day one"
                - "Start planning next year's intern projects with managers @recurring(yearly)"
            - name: Hiring surge onboarding plan
              description: |-
                ## Purpose
                When a funding round or a new product line brings ten or twenty engineers in a quarter, the usual one-buddy-per-hire approach runs out of people within weeks. A surge plan that sequences start dates, trains extra buddies early and moves recurring sessions to a fixed weekly schedule keeps quality up without stalling the existing team.

                ## Milestones
                1. Start dates for the surge spread to no more than two or three per team per month.
                2. Enough buddies trained to cover every hire without anyone buddying twice at once.
                3. Architecture tours and setup sessions moved to a fixed weekly slot.
                4. A weekly review of surge hires' progress held by the managers.

                ## Notes
                Watch the existing team's delivery during a surge. If it drops sharply, slow the start dates rather than cutting onboarding short.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A surge plan is in place with spread start dates, enough trained buddies for every hire and weekly group sessions running."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Get the full list of planned surge hires and start dates from recruiting"
                - "Spread start dates so no team takes more than three a month"
                - "Train enough extra buddies before the first surge hire arrives"
                - "Fix a weekly slot for group setup sessions and architecture tours"
            - name: Onboarding a remote engineer across timezones
              description: |-
                ## Purpose
                A remote hire several hours away from the team can lose half of every working day waiting for answers. Choosing a buddy with overlapping hours, front-loading written material, shipping the laptop early and booking more video time in the first two weeks makes up for what an office would have given them by accident.

                ## Milestones
                1. The team's overlapping working hours with the new engineer worked out.
                2. A buddy chosen with at least three hours of daily overlap.
                3. Hardware shipped to arrive at least three working days before the start date, allowing for customs.
                4. Daily short video check-ins booked for the first two weeks.

                ## Notes
                Ask whether the new engineer's location needs anything different for employment, equipment or data access, and route those questions to HR or legal.
              priority: medium
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "The remote engineer had hardware three days early, a buddy with three hours of overlap and daily check-ins through their first two weeks."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Work out the overlapping hours between the new engineer and the team"
                - "Pick a buddy with at least three hours of daily overlap"
                - "Ship hardware early enough to clear customs before day one"
                - "Book short daily video check-ins for the first two weeks"
            - name: Onboarding a senior or staff engineer
              description: |-
                ## Purpose
                Senior hires are expected to shape the system, yet the standard starter tickets and setup checklist treat them like anyone else, and some start proposing rewrites before they understand why things are the way they are. A plan built around a listening tour, the history of key decisions and one meaningful problem by day sixty uses their experience without breaking trust.

                ## Milestones
                1. Ten to fifteen conversations booked across engineering, product and operations in the first month.
                2. The history behind the three most debated technical decisions shared.
                3. One meaningful problem agreed for them to own by day sixty.
                4. A written summary of their first-month observations shared with the manager.

                ## Notes
                Ask senior hires to hold big change proposals until after day forty-five. Fresh eyes are valuable; fresh eyes with context are more so.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The senior hire completes at least ten listening conversations and owns an agreed problem by day sixty, with a written observations summary."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List ten to fifteen people across functions for the listening tour"
                - "Brief the new hire on the history of the three most debated decisions"
                - "Agree one meaningful problem for them to own by day sixty"
                - "Ask for a written summary of their first-month observations"
            - name: Onboarding a graduate or junior engineer
              description: |-
                ## Purpose
                Graduates and career changers often know algorithms but not version control workflows, code review etiquette or how a production system is put together. A plan with smaller starter tickets, more pairing, explicit permission to ask and weekly learning goals keeps them moving without leaving them to sink quietly.

                ## Milestones
                1. A starter backlog subset of the smallest, best-described tickets set aside.
                2. Pairing sessions booked at least three times a week for the first month.
                3. A short list of basics, such as branching, rebasing and reading a stack trace, practised with the buddy.
                4. Weekly learning goals agreed and reviewed for the first eight weeks.

                ## Notes
                Tell junior hires in writing that asking after fifteen minutes stuck is expected, not a weakness. Many will not believe it until they see it written down.
              priority: medium
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "The junior engineer has paired at least three times a week for a month and met weekly learning goals for eight weeks."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Set aside the five smallest starter tickets for the junior hire"
                - "Book three pairing sessions a week for the first month"
                - "Write down the fifteen-minute rule for asking when stuck"
                - "Agree and review a learning goal each week for eight weeks"
            - name: Onboarding a new engineering manager
              description: |-
                ## Purpose
                A new engineering manager inherits people, commitments and unwritten promises at once, and the engineer onboarding plan covers almost none of it. A plan that starts with one-to-ones with every report, a handover from the previous manager or skip-level, a review of current commitments and a light first contribution to the code builds trust before the first hard decision.

                ## Milestones
                1. A first one-to-one held with every direct report in the first two weeks.
                2. A written handover from the previous manager or skip-level covering people, projects and open issues.
                3. Current roadmap commitments and their risks understood and written down.
                4. The manager's local setup working and one small change shipped, if the team expects it.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The new manager has met every report one to one, received a written handover and recorded current commitments within thirty days."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Book a first one-to-one with each direct report for the first two weeks"
                - "Ask the previous manager or skip-level for a written handover"
                - "List current commitments, their dates and the risks to each"
                - "Agree with the team whether the manager should ship a small change"
            - name: Your own first ninety days in a new engineering job
              description: |-
                ## Purpose
                Joining a new team as an engineer, you are judged on how quickly you become useful and how well you read the room, often with little guidance. Keeping your own plan, with a list of people to meet, questions to ask, a weekly note of what you learned and a running list of ideas held back until you understand the context, makes the first quarter deliberate.

                ## Milestones
                1. A personal plan with goals for thirty, sixty and ninety days, checked with your manager.
                2. A list of people to meet in the first month and the question you will ask each.
                3. A weekly note of what you learned, shipped and are still confused by.
                4. A held-back ideas list reviewed with your manager at day sixty.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You have a ninety-day plan agreed with your manager, twelve weekly notes and a reviewed list of held-back ideas."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Draft thirty, sixty and ninety day goals and check them with your manager"
                - "List the people to meet in your first month and one question for each"
                - "Write a short note of what you learned and shipped this week @recurring(weekly:fri)"
                - "Keep a list of ideas to raise once you understand the context"
            - name: Internal transfer onto a new team
              description: |-
                ## Purpose
                Engineers moving between teams are often given no onboarding at all because they already know the company, yet the new codebase, rota and customers are entirely unfamiliar. A shortened plan that skips company basics but keeps the setup guide, the architecture tour, a buddy and starter tickets brings them up to speed in weeks rather than months.

                ## Milestones
                1. Company-wide items removed from the standard plan, team-specific items kept.
                2. A buddy from the new team assigned for the first month.
                3. The new team's architecture tour and setup guide completed in week one.
                4. A clean handover agreed with the old team, including on-call and open work.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "The transferring engineer has a shortened written plan, a buddy and a completed handover from the old team within their first week."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Strip company-wide items from a copy of the first-month plan"
                - "Assign a buddy from the receiving team"
                - "Agree the handover of on-call and open work with the old team's manager"
                - "Book the architecture tour for the transfer's first week"
            - name: Onboarding contractors and agency engineers
              description: |-
                ## Purpose
                Contractors are expected to deliver from week one and usually start with less context and narrower access than employees, with contracts that may limit what they can see. A lighter plan with a scoped access bundle, an end date on every account, a named contact and the same setup guide gets them productive while keeping access tidy when the engagement ends.

                ## Milestones
                1. A contractor access bundle agreed with security, narrower than the employee one.
                2. Every contractor account set to expire on the contract end date.
                3. A named employee contact assigned for questions and reviews.
                4. An offboarding step list ready for the end of each engagement.

                ## Notes
                Check with whoever manages the contract what confidentiality and intellectual property terms apply before sharing internal material.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every active contractor has scoped access with an expiry date and a named contact, checked monthly for six months."
                cadence: rolling
              tasks:
                - "Agree a contractor access bundle with security"
                - "Set expiry dates on contractor accounts to match contract end dates"
                - "Assign a named employee contact to each contractor"
                - "Check contractor accounts against contract end dates @recurring(monthly:9)"
            - name: Re-onboarding after parental or long leave
              description: |-
                ## Purpose
                Returning after six months of parental, medical or caring leave can feel like joining a new company: the stack has moved, the team has changed and the old mental model is out of date. A short re-onboarding plan, agreed before the return date, with a summary of what changed, a buddy and a gentle first fortnight, respects the person and their new constraints.

                ## Milestones
                1. A return conversation held before the first day back, covering hours and any adjustments.
                2. A written summary of what changed in the codebase, team and processes.
                3. A buddy assigned for the first two weeks.
                4. A first fortnight of smaller tasks, with on-call deferred until agreed.

                ## Notes
                Follow your company's return-to-work policy and local law on flexible working requests. Ask what would help rather than assuming.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "The returning engineer has a pre-return conversation, a written change summary and a buddy, with on-call return on an agreed date."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Book a return conversation two weeks before the first day back"
                - "Ask the agent to summarise merged changes and team updates since the leave began"
                - "Assign a buddy for the first two weeks back"
                - "Agree a date to rejoin on-call rather than adding them straight away"
            - name: Onboarding in a regulated codebase
              description: |-
                ## Purpose
                Teams working on payments, health records or other regulated systems must prove that every engineer completed security training, signed the right policies and received only the access their role needs before touching production. Building those steps into onboarding, with evidence kept as you go, avoids a scramble when the auditor asks for proof about one person who joined last spring.

                ## Milestones
                1. The required training, policy acknowledgements and background checks for engineers listed with compliance.
                2. Production access gated on those steps being complete.
                3. Evidence for each hire stored where auditors expect to find it.
                4. One past hire's record checked end to end as a dry run.

                ## Notes
                Your compliance or security team owns the requirements. This project is about building their steps into onboarding and keeping the evidence, not interpreting the regulations.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every engineer hired in the last year has complete, retrievable evidence of required training and approvals before their first production access."
                cadence: rolling
              tasks:
                - "Ask compliance for the list of steps engineers must complete before production access"
                - "Add each step to the access checklist with where its evidence is stored"
                - "Pull one past hire's evidence end to end as a dry run"
                - "Confirm every engineer's annual security training is current @recurring(yearly)"
            - name: Onboarding engineers from an acquired company
              description: |-
                ## Purpose
                After an acquisition, a whole team arrives at once with its own tools, habits and anxieties, and the usual one-hire onboarding does not fit. A phased plan that pairs each acquired engineer with a counterpart, explains the new company's systems alongside their own and is honest about what will change and when, reduces attrition in the critical first six months.

                ## Milestones
                1. A counterpart named for each acquired engineer on the matching team.
                2. A comparison of both companies' tools and processes, showing what stays and what changes.
                3. Access to the acquiring company's core systems granted in planned waves.
                4. Monthly group sessions held for the first six months to answer integration questions.

                ## Notes
                Coordinate with HR and legal on what can be shared and when. Many acquisitions restrict access to systems until legal steps complete.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every acquired engineer has a named counterpart and staged access, and monthly integration sessions run for six months."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Name a counterpart for each acquired engineer"
                - "Write a comparison of both companies' tools showing what stays and changes"
                - "Plan access to core systems in waves with HR, legal and security"
                - "Book monthly integration question sessions for six months"
            - name: Onboarding outcomes and twelve-month retention analysis
              description: |-
                ## Purpose
                Ramp-up speed matters, but what onboarding should ultimately buy is engineers who stay and do well. Once a year, comparing onboarding measures such as days to first deploy and survey scores with twelve-month retention and first performance review outcomes, at group level only, shows which parts of the programme are worth the most investment.

                ## Milestones
                1. Onboarding measures and twelve-month outcomes gathered for every hire from the past two years.
                2. The data reviewed with HR at group level, never by named individual.
                3. Two or three patterns written up, with honest caveats about small numbers.
                4. One programme investment decided from the findings.

                ## Notes
                With small numbers, patterns are suggestions, not proof. Treat retention and performance data as confidential and agree with HR how it may be used.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An annual write-up compares onboarding measures with twelve-month outcomes at group level and records one programme investment decision."
                cadence: cyclic
                effort_hours_estimate: "8"
              tasks:
                - "Agree with HR how retention and review data may be used"
                - "Join onboarding measures with twelve-month outcomes at group level"
                - "Write up two or three patterns with caveats about sample size"
                - "Run the onboarding outcomes analysis with HR @recurring(yearly)"
---

# Engineer Onboarding

A new engineer's first month decides whether they ship confidently by week two or spend six weeks guessing which repository matters and who to ask. These projects start with the foundations (a definition of ramped up, access ordered before day one, a setup guide tested on a clean machine, buddies, a starter backlog and an architecture tour), move through the routines that keep onboarding fresh, then the skills a new starter needs, the improvements and decisions worth making, the dated reviews, variants for seniors, graduates, managers, remote hires, contractors and returners, and specialist work for regulated codebases, acquisitions and retention.

What repeats is a Monday check of upcoming start dates, Tuesday buddy check-ins, monthly clean-machine setup tests, starter backlog refills, metrics entries and doc freshness checks, quarterly surveys, retrospectives and access reviews, and a yearly refresh of the definition, the tour and buddy training. The Operational checklist, Onboarding 30/60/90, Feedback themes, Metrics log, 1:1 and Onboarding plan templates pair with the projects that need a record. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
