---
id: software-engineering.solo-developer-side-projects
name: Solo Developer Side Projects
description: "A protected weekly build slot, ideas cut to a two-weekend scope, a deploy from day one, cheap hosting with a cost ceiling, and the routines that get personal software shipped, launched and either kept alive or retired well."
category: business
version: 1.0.0
tags: [software-engineering, solo-developer-side-projects, engineer, creative, side-projects, indie-hacking, shipping, mvp]
author: Aurum Technology
starter_structure:
  templates:
    - product-spec
    - habit-tracker
    - metrics-log
    - marketing-campaign
    - portfolio-piece
  pillars:
    - name: Software Engineering
      emoji: "⚙️"
      description: "Building and running software: architecture and code quality, delivery and release, testing, infrastructure and reliability, incidents, technical debt, developer experience and engineering teams."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Solo Developer Side Projects
          description: "Planning, building and actually shipping personal software projects alone, keeping scope small and momentum steady around a day job."
          projects:
            - name: Weekly side project time budget
              description: |-
                ## Purpose
                Side projects rarely fail on skill; they fail because the hours were never real. Writing down exactly which slots in a normal week belong to the project, say two evenings of ninety minutes and one Saturday morning, and agreeing them with the people you live with, turns a vague intention into a commitment you can plan scope against.

                ## Milestones
                1. A typical week mapped, with work, commute, family and sleep blocked out first.
                2. Two to four specific build slots chosen, totalling a number of hours you have actually had free for the last month.
                3. The slots agreed with a partner or housemates where they affect them.
                4. The slots in your calendar as recurring events with a clear name.

                ## Notes
                Budget for the week you usually have, not the best week of the year. Five honest hours beat fifteen imagined ones, and every later scope decision is measured against this number.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written weekly hour budget with named slots, entered as recurring calendar events and agreed with anyone it affects."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every fixed commitment in a normal week before choosing slots"
                - "Pick two to four build slots and total the hours honestly"
                - "Talk the slots through with whoever shares your evenings"
                - "Add the slots to your calendar as recurring events"
            - name: Employment contract and IP clause check
              description: |-
                ## Purpose
                Many employment contracts claim ownership of anything you invent while employed, and some require you to disclose outside work or avoid competing products. Reading your own contract and handbook before you build means you know where you stand, can ask for a written carve-out if needed, and will not discover a problem the week you start charging money.

                ## Milestones
                1. The intellectual property, moonlighting and conflict of interest clauses in your contract and handbook located and highlighted.
                2. A plain summary of what the clauses appear to cover written in your own words.
                3. A decision recorded on whether to ask your employer for written permission or a carve-out.
                4. Where the position is unclear or the project could earn money, a question taken to an employment lawyer or adviser in your country.

                ## Notes
                This is about preparing questions, not reaching a legal conclusion. Keep side project work on your own devices, accounts and time, never on company equipment or during working hours.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The relevant contract clauses summarised in a note, with a recorded decision on permission and any professional advice noted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find your signed contract and the current employee handbook"
                - "Highlight clauses on inventions, outside work and competition"
                - "Write a short summary of what they seem to cover"
                - "Decide whether to request a written carve-out from your manager or HR"
            - name: Idea shortlist scored on five questions
              description: |-
                ## Purpose
                Most developers carry a notes file of twenty ideas and start whichever one feels exciting on a Friday night. Scoring a shortlist against the same five questions (would I use it weekly, can version one ship in two weekends, do I know the domain, can I reach the first ten users, will it still interest me in three months) picks the idea most likely to get finished rather than the most glamorous one.

                ## Milestones
                1. Every idea from notes, bookmarks and old repositories gathered into one list.
                2. The list cut to five to eight candidates.
                3. Each candidate scored from one to five on the same five questions.
                4. One idea chosen, with the runner-up parked in a someday list rather than deleted.

                ## Notes
                An idea you would use yourself every week has a built-in first user and a reason to keep going when nobody else notices it.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scored table of at least five ideas against five fixed questions, with one chosen and the reason written beside it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Gather every idea you have written down into one list"
                - "Cut the list to no more than eight candidates"
                - "Score each candidate on the same five questions"
                - "Pick the winner and move the rest to a someday list"
            - name: One-page brief with one user and one job
              description: |-
                ## Purpose
                Without a written brief, a side project quietly grows a settings page, a social feed and an admin panel before it does its one useful thing. A single page naming the one person it is for, the one job it does for them and what is deliberately out of scope gives you something to say no with when a new idea arrives at midnight.

                ## Milestones
                1. One sentence describing the user and the moment they need the tool.
                2. One sentence describing the job the tool does for them.
                3. A list of at least five features that are explicitly out of scope for version one.
                4. The brief saved as the first file in the repository and pinned where you plan.

                ## Notes
                Start from the **Product spec** template, but stop at one page. If the brief needs a second page, the project is too big for the hours you have.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page brief naming one user, one job and at least five out-of-scope features, committed as the first file in the repository."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write one sentence about the person and the moment they need this"
                - "Write one sentence about the job the tool does for them"
                - "List five features you will not build in version one"
                - "Commit the brief as the first file in the repository"
            - name: Cutting version one to a two-weekend scope
              description: |-
                ## Purpose
                A first version that takes three months of evenings usually never ships, because life intervenes long before then. Cutting the feature list until the smallest useful thing fits in roughly two weekends of your real hours, with authentication, payments and polish removed wherever possible, gets something in front of a person while you still care.

                ## Milestones
                1. Every feature in the brief estimated in build sessions rather than hours.
                2. The list cut until the total fits two weekends of your budgeted time.
                3. Accounts, payments and admin screens replaced with manual or hard-coded stand-ins where possible.
                4. A written definition of done for version one that someone else could check.

                ## Notes
                Typical cuts that cost nothing: a magic link or a single shared password instead of accounts, a spreadsheet instead of an admin panel, an email instead of in-app notifications.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A version one feature list estimated at no more than two weekends of budgeted hours, with a written definition of done."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Estimate each planned feature in build sessions"
                - "Strike features until the total fits two weekends"
                - "Replace accounts and admin with manual stand-ins where you can"
                - "Write the definition of done for version one"
            - name: Boring stack choice for a solo builder
              description: |-
                ## Purpose
                Every new framework you learn during a side project spends hours that were meant for the product. Choosing the language, framework, database and host you already know well, unless learning is the explicit point, removes the biggest hidden cost in solo work and means the inevitable 11pm bug is one you can fix.

                ## Milestones
                1. The project's goal recorded as either shipping a product or learning a technology, not both.
                2. Two candidate stacks compared on familiarity, hosting cost and how many moving parts they need.
                3. One stack chosen and written into the brief with a one-line reason.
                4. A rule written that no new dependency is added without a reason in the commit message.

                ## Notes
                A single server-rendered app with one database covers most side projects comfortably. Separate frontend and backend services, queues and microservices are rarely worth it alone.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded stack decision with a stated goal of shipping or learning and a comparison of two options."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Decide whether this project is for shipping or for learning"
                - "Compare two stacks on familiarity, cost and moving parts"
                - "Write the chosen stack and reason into the brief"
                - "Note a rule about adding new dependencies"
            - name: Walking skeleton deployed on day one
              description: |-
                ## Purpose
                Deployment is the step solo projects most often leave until last, and it is where a working laptop app meets DNS, environment variables and a database that will not connect. Putting a page that says hello, reads one row from the real database and sits at its real address live in the first session means every later change is one push from users.

                ## Milestones
                1. A repository created with a readme, a licence decision and the brief.
                2. A minimal app that reads one value from the production database.
                3. The app live at a public address over HTTPS.
                4. A single command or push that redeploys it, written in the readme.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A public HTTPS address serving the app from the production database, redeployable with one documented command."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Create the repository with a readme and the brief"
                - "Build a page that reads one row from the real database"
                - "Deploy it to your chosen host behind HTTPS"
                - "Write the one-line redeploy command into the readme"
            - name: Personal accounts, domains and secrets register
              description: |-
                ## Purpose
                Side projects accumulate a hosting account here, a domain registrar there and an API key pasted into a chat, often signed up for with a work email. A single register of every account, who owns it, which email and second factor it uses and where its secrets live means you never lose a domain to a forgotten login or leak a key into a public repository.

                ## Milestones
                1. Every service the project uses listed with its login email and billing card.
                2. Any account tied to a work email moved to a personal address.
                3. Two-factor authentication on the registrar, host and code hosting accounts.
                4. All secrets stored in a password manager or the host's secret store, none in the repository.

                ## Notes
                Run a secret scanner over the repository history once. A key committed and later deleted is still in the history and should be revoked and replaced.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register listing every project account with its email, second factor and secret location, and no secrets in the repository history."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every service the project touches with its login email"
                - "Move any account on a work email to a personal one"
                - "Turn on two-factor login for registrar, host and code hosting"
                - "Scan the repository history for committed secrets and revoke any found"
                - "Rotate API tokens that have not changed in a year @recurring(yearly)"
            - name: Monthly running cost ceiling
              description: |-
                ## Purpose
                Free tiers end, a forgotten database keeps billing and a viral weekend can produce a surprising invoice. Setting a monthly ceiling you are happy to spend on a project that may never earn anything, with billing alerts at half and at the full amount, keeps the hobby a hobby and makes the later decision to pay for more a deliberate one.

                ## Milestones
                1. A monthly ceiling agreed with yourself, and with a partner if money is shared.
                2. Billing alerts set at fifty and one hundred percent of the ceiling on every paid service.
                3. Hard spending caps switched on where the provider offers them.
                4. A cost line added to your metrics log with this month's actual figure.

                ## Notes
                Start from the **Metrics log** template. Watch per-request and bandwidth pricing in particular, since those are the bills that grow without a code change.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written monthly cost ceiling, alerts at fifty and one hundred percent on every paid service, and a monthly cost entry in the log."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Decide the most you will spend each month without any revenue"
                - "Set billing alerts at half and all of the ceiling"
                - "Turn on hard spending caps where the provider allows"
                - "Compare the month's bills with the ceiling in the log @recurring(monthly:5)"
            - name: Protected weekend build session
              description: |-
                ## Purpose
                Momentum on a solo project comes from turning up at the same time each week, not from occasional all-nighters. A protected session with a fixed start, a written goal chosen the night before, notifications off and a five-minute leave-off note at the end makes the next session start in minutes rather than half an hour of remembering.

                ## Milestones
                1. A fixed weekly session with a start time, length and place.
                2. A pre-session ritual of choosing one goal small enough to finish in the session.
                3. A leave-off note written at the end of every session saying exactly what to do next.
                4. Eight sessions in a row held, or moved rather than skipped.

                ## Notes
                Start from the **Habit tracker** template. Stop in the middle of an easy task rather than at a hard one, so the next session begins with a quick win.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly sessions held or rescheduled, each ending with a written leave-off note."
                cadence: rolling
              tasks:
                - "Choose the session's single goal the evening before"
                - "Hold the protected build session with notifications off @recurring(weekly:sat)"
                - "Write a leave-off note naming the very next step"
                - "Mark the session as held or moved in the habit tracker"
            - name: Now, next and later backlog on one page
              description: |-
                ## Purpose
                You do not need a ticketing system as a solo developer, but a head full of loose ideas is just as bad. One page split into now (at most three items), next and later, trimmed weekly, keeps the current session focused and gives every new idea a place to land that is not this weekend.

                ## Milestones
                1. A single backlog file or board with now, next and later columns.
                2. No more than three items in now at any time.
                3. Every item phrased as a result a user would notice.
                4. A weekly trim that moves, merges or deletes items.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A one-page backlog with no more than three items in now, trimmed every week for a month."
                cadence: rolling
              tasks:
                - "Create one backlog page with now, next and later sections"
                - "Rewrite each item as something a user would notice"
                - "Trim now to three items and delete stale later items @recurring(weekly:sun)"
                - "Park every new idea in later before thinking about it further"
            - name: Ship one visible change every month
              description: |-
                ## Purpose
                Projects that only change behind the scenes feel stalled, both to you and to anyone watching. Committing to put one change a user can see into production every month, however small, keeps deploys routine, keeps users seeing life in the project and exposes when the codebase has become too painful to change.

                ## Milestones
                1. A monthly target date chosen for the visible change.
                2. The change chosen from the now column at the start of the month.
                3. Twelve consecutive months with at least one user-visible release.
                4. Each release noted in the changelog with a date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least one user-visible change released in each of six consecutive months, each recorded in the changelog."
                cadence: rolling
              tasks:
                - "Pick this month's visible change from the now column"
                - "Release one visible change to production @recurring(monthly:26)"
                - "Add a dated line to the changelog for each release"
            - name: Build log and public changelog
              description: |-
                ## Purpose
                Writing a few lines after each week of work shows you how far the project has come on the evenings it feels stuck, and a public changelog gives early users a reason to come back. Kept short, the habit costs ten minutes and later becomes the raw material for a launch post or a case study.

                ## Milestones
                1. A private build log file with a dated entry per week.
                2. A public changelog page linked from the app.
                3. Each entry covering what shipped, what got stuck and what is next.
                4. Twelve weekly entries written.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve weekly build log entries and a public changelog page linked from the app."
                cadence: rolling
              tasks:
                - "Create the build log file and a public changelog page"
                - "Write three lines on shipped, stuck and next @recurring(weekly:sun)"
                - "Link the changelog from the app's footer"
            - name: Monthly maintenance hour
              description: |-
                ## Purpose
                Left untouched for six months, a side project comes back with expired certificates, a failing build and security warnings on every dependency. One scheduled hour a month to apply updates, check the build still passes, confirm backups ran and glance at logs keeps the project in a state where a free evening can go on features.

                ## Milestones
                1. A written checklist for the hour: updates, build, backups, logs, renewals.
                2. A monthly calendar slot that is separate from build sessions.
                3. A database restore tested from a backup into a scratch environment.
                4. Six consecutive months of the checklist completed.

                ## Notes
                Batch small dependency updates monthly rather than letting them pile up into a painful major upgrade. Restoring a backup at least once a quarter is the only way to know it works.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The maintenance checklist completed for six consecutive months, including at least two successful test restores."
                cadence: rolling
              tasks:
                - "Write the maintenance hour checklist into the repository"
                - "Work through the maintenance checklist @recurring(monthly:12)"
                - "Restore last night's backup into a scratch database @recurring(quarterly)"
                - "Note anything that took more than ten minutes as a backlog item"
            - name: Quarterly keep, pause or kill review
              description: |-
                ## Purpose
                Solo developers tend to collect half-alive projects that each take a little attention and money. A quarterly review of every project against usage, cost, your interest and your available hours, ending in an explicit keep, pause or kill for each, frees time for the one that deserves it and stops guilt about the rest.

                ## Milestones
                1. Every live or half-built project listed with its monthly cost and recent usage.
                2. Each one given a keep, pause or kill decision with a sentence of reasoning.
                3. Paused projects put into a low-cost frozen state.
                4. Killed projects scheduled for a proper shutdown.
              priority: high
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A dated review listing every project with a keep, pause or kill decision, repeated each quarter."
                cadence: cyclic
              tasks:
                - "List every project with its cost, usage and last commit date"
                - "Decide keep, pause or kill for each project @recurring(quarterly)"
                - "Freeze paused projects on the cheapest possible hosting"
            - name: Quiet uptime and error alerts
              description: |-
                ## Purpose
                When you are the only person on call, an alert that fires every night gets muted and the real outage goes unseen for a week. A small set of alerts, an uptime check on the main page and a notice when errors spike, sent to your phone during waking hours only, tells you what matters without turning a hobby into a pager.

                ## Milestones
                1. An external uptime check on the main page and one critical action.
                2. Error reporting installed with notices only on new or spiking errors.
                3. Alerts routed to your phone with quiet hours set.
                4. A monthly look at alert noise with anything unactionable muted.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Uptime and error alerts in place that fired no more than a handful of times in the last month, each one actionable."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set up an external uptime check on the main page"
                - "Install error reporting that notifies only on new errors"
                - "Set quiet hours on alert notifications"
                - "Review alert noise and mute anything you did not act on @recurring(monthly:3)"
            - name: Feedback inbox read once a week
              description: |-
                ## Purpose
                Early users send feedback through a contact form, a social reply and a stray email, and a solo developer either reacts to every message the moment it lands or loses most of them. One inbox, read once a week and tagged as bug, request or praise, turns scattered comments into evidence for the backlog without letting the loudest person steer the project.

                ## Milestones
                1. One address or form that all feedback is pointed to.
                2. A simple tag set: bug, request, praise, question.
                3. A weekly read with every message tagged and acknowledged.
                4. Requests counted so the backlog reflects how many people asked.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All feedback arriving in one place, tagged and acknowledged weekly for two months, with request counts on backlog items."
                cadence: rolling
              tasks:
                - "Point the app's contact links at one feedback inbox"
                - "Read, tag and acknowledge new feedback @recurring(weekly:wed)"
                - "Add a request count beside matching backlog items"
            - name: Energy check around the day job
              description: |-
                ## Purpose
                Building after a full day of programming is a different kind of tiring, and many solo developers notice burnout only after the project and their sleep have both suffered. A monthly ten-minute check on sleep, mood, time with people and whether the project still feels like play catches the slide early and makes cutting back a planned choice.

                ## Milestones
                1. Three or four questions written that you will answer honestly each month.
                2. A rule agreed for what happens when two answers go the wrong way, such as a month off.
                3. Six monthly checks recorded.
                4. At least one deliberate rest month taken when the rule triggered, or none needed.

                ## Notes
                A paused project costs nothing that cannot be recovered. Missing sleep for months to keep a streak alive does.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly energy checks recorded, with a written rule for when to pause and evidence it was followed."
                cadence: rolling
              tasks:
                - "Write three questions about sleep, mood and enjoyment"
                - "Answer the energy questions honestly @recurring(monthly:20)"
                - "Decide in advance what triggers a month off"
            - name: Yearly renewals and subscriptions sweep
              description: |-
                ## Purpose
                Domain expiries are the classic way a side project dies: the card on file changed, the reminder went to an old address and someone else registered the name. A yearly sweep of domains, certificates, paid tiers and developer program memberships, with auto-renew checked and dates in one calendar, protects names you care about and cancels the ones you do not.

                ## Milestones
                1. Every domain, paid plan and membership listed with renewal date and price.
                2. Auto-renew confirmed on domains you intend to keep.
                3. Renewal reminders in your personal calendar two weeks ahead.
                4. Unwanted domains and plans cancelled.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A renewal list with dates and prices, auto-renew confirmed on kept domains and unused subscriptions cancelled, reviewed every year."
                cadence: cyclic
              tasks:
                - "List every domain and paid plan with its renewal date"
                - "Check the card on file and auto-renew for each domain"
                - "Sweep renewals and cancel what you no longer need @recurring(yearly)"
            - name: Learning a new language through a tiny clone
              description: |-
                ## Purpose
                When the honest goal of a side project is to learn a language or framework, rebuilding a small tool you know well, such as a to-do list, a link shortener or a markdown previewer, keeps the product questions answered so all your attention goes on the technology. Calling it a learning project up front also stops you judging it by users it was never meant to have.

                ## Milestones
                1. A small, well-understood tool chosen to clone, with a feature list of five items or fewer.
                2. The official tutorial or one chosen book completed first.
                3. The clone built with idiomatic structure, tests and the language's standard tooling.
                4. A short write-up of what surprised you compared with your usual language.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A working clone in the new language with tests, plus a written comparison of at least five differences from your usual stack."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose a tool to clone with no more than five features"
                - "Work through the official tutorial before writing the clone"
                - "Build the clone using the language's standard tooling"
                - "Write down five things that surprised you"
            - name: Tests for the riskiest ten percent
              description: |-
                ## Purpose
                Full test coverage is rarely realistic alone, but no tests at all means every change to the payment code or data import is a gamble at midnight. Learning to spot the small part of a side project where a bug would lose data, money or trust, and covering only that part properly, gives most of the safety for a fraction of the time.

                ## Milestones
                1. The code paths where a bug would lose data, money or trust listed.
                2. Automated tests written for each of those paths.
                3. Tests running automatically on every push.
                4. A rule that any bug fixed in those paths gets a test first.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Automated tests covering every listed high-risk path, running on every push."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the code paths where a bug would lose data or money"
                - "Write tests for the first two of those paths"
                - "Set the tests to run on every push"
                - "Add a regression test before fixing the next bug in those paths"
            - name: Landing page that explains itself in one line
              description: |-
                ## Purpose
                Developers often launch with a page that lists the stack and the features but never says who it is for or why they should care. Learning to write a one-line promise, three benefits and a single call to action, then testing it on five people who have never heard of the project, is the cheapest improvement to how many visitors try it.

                ## Milestones
                1. A headline that says what the tool does and for whom in under twelve words.
                2. Three benefits written as outcomes, not features.
                3. One call to action with a screenshot or short clip of the tool working.
                4. The page shown to five strangers, who can each say what it does.

                ## Notes
                Ask the five people to explain the product back to you after ten seconds. Anything they get wrong is a copy problem, not a user problem.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A live landing page with a one-line promise, three benefits and one call to action, correctly explained back by five testers."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft five versions of a one-line promise and pick one"
                - "Rewrite the feature list as three outcomes for the user"
                - "Record a short clip of the tool doing its main job"
                - "Show the page to five people for ten seconds each"
            - name: Design basics for developers without a designer
              description: |-
                ## Purpose
                Nobody expects a side project to be beautiful, but cramped spacing, five fonts and low-contrast text make people trust it less. A handful of rules, a spacing scale, one typeface, a limited palette with accessible contrast and consistent buttons, can be learned in a few evenings and applied to every project you build after.

                ## Milestones
                1. A spacing scale and type scale chosen and written as variables.
                2. A palette of no more than five colours, checked for text contrast.
                3. A small component set: button, input, card, alert.
                4. The main screen redone with the new rules and compared side by side with the old one.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written set of spacing, type and colour rules applied to the main screen, with before and after screenshots saved."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read one short guide on interface design for developers"
                - "Define a spacing scale, one typeface and a five-colour palette"
                - "Check text colours against a contrast checker"
                - "Redo the main screen and save before and after screenshots"
            - name: Estimating in build sessions, not hours
              description: |-
                ## Purpose
                Solo developers estimate as if they had a clear eight-hour day, then wonder why a three-day feature took two months. Learning to estimate in sessions, the real blocks you get, and keeping a simple record of estimate against actual for ten tasks shows your personal multiplier and makes every later launch date honest.

                ## Milestones
                1. Ten upcoming tasks estimated in sessions before starting.
                2. Actual sessions recorded for each one.
                3. Your average overrun worked out as a single multiplier.
                4. The multiplier applied to the current roadmap and its dates updated.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Estimate and actual sessions recorded for ten tasks, with a personal multiplier calculated and applied to the roadmap."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Estimate the next ten tasks in sessions"
                - "Record the actual sessions each task took"
                - "Calculate your average overrun multiplier"
                - "Redo the roadmap dates using the multiplier"
            - name: Publishing a command-line tool to a package registry
              description: |-
                ## Purpose
                A small command-line tool is one of the most finishable side projects there is: no hosting, no accounts, no design. Learning to package, version and publish one to your language's registry, with a readme and install instructions, teaches the whole release loop in miniature and leaves something other developers can install in one line.

                ## Milestones
                1. A command-line tool that does one job, with help text.
                2. The package name checked for availability and conflicts.
                3. Version 0.1.0 published to the registry with a readme.
                4. The tool installed from the registry on a clean machine or container.

                ## Notes
                Turn on two-factor authentication for your registry account before the first publish. Package registry accounts are a common target.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A command-line tool published to a public registry and successfully installed from it on a clean machine."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pick a one-job tool you would use yourself"
                - "Check the package name is free on the registry"
                - "Publish version 0.1.0 with a readme and install line"
                - "Install it from the registry on a clean container"
            - name: Running a small virtual server yourself safely
              description: |-
                ## Purpose
                Managed platforms are easy until the free tier ends, and a small virtual server can host several side projects for the price of one coffee a month. Learning the minimum to run one safely, key-only login, a firewall, automatic security updates, a reverse proxy with HTTPS and off-server backups, makes that a real option rather than a weekend of anxiety.

                ## Milestones
                1. A server with password login disabled and key-only access.
                2. A firewall allowing only web and SSH traffic.
                3. Automatic security updates switched on.
                4. A reverse proxy serving one app over HTTPS, with backups copied off the server.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One app served over HTTPS from a self-managed server with key-only login, a firewall, automatic updates and off-server backups."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Create a small server and disable password login"
                - "Enable a firewall and automatic security updates"
                - "Set up a reverse proxy with automatic HTTPS for one app"
                - "Copy nightly backups to storage outside the server"
            - name: Build, buy or glue check before writing code
              description: |-
                ## Purpose
                Developers instinctively reach for a new repository, but some side project ideas are already solved by an existing tool, a spreadsheet with a form, or a no-code builder in an afternoon. Spending an hour checking those options first either saves weeks or confirms there is a genuine gap worth your evenings.

                ## Milestones
                1. Three existing tools that do something similar found and tried.
                2. A spreadsheet or no-code version of the core job attempted for one hour.
                3. The specific gap the existing options leave written in one sentence.
                4. A decision recorded to build, adopt or glue.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three alternatives tried and a written build, adopt or glue decision naming the gap that justifies building."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search for three tools that already do something similar"
                - "Try a spreadsheet or no-code version for one hour"
                - "Write the one-sentence gap the alternatives leave"
                - "Record the build, adopt or glue decision in the brief"
            - name: Moving off a free tier before it ends
              description: |-
                ## Purpose
                Hosting and database providers change or end their free tiers regularly, often with a few weeks of notice. Planning the move as soon as the notice arrives, comparing a paid plan, another provider and a small server against your cost ceiling, avoids a rushed migration over a weekend with your data at risk.

                ## Milestones
                1. The deadline and what exactly stops working written down.
                2. Three options compared on monthly cost, migration effort and lock-in.
                3. One option chosen and a migration date set well before the deadline.
                4. Data migrated, the app verified and the old service shut down.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The project migrated to the chosen option before the free tier deadline, with data verified and the old service closed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Note the free tier deadline and what will stop working"
                - "Compare three options against your monthly cost ceiling"
                - "Set a migration date at least two weeks before the deadline"
                - "Verify the data after migration and close the old account"
            - name: Rewrite temptation decision record
              description: |-
                ## Purpose
                Every solo developer reaches the point where the old code looks embarrassing and a rewrite in a newer framework feels like progress. Writing down what the rewrite would fix, what users would gain and how many sessions it would cost, then deciding against an alternative of targeted cleanup, keeps a month of evenings from vanishing into a project that ships nothing new.

                ## Milestones
                1. The specific pains of the current code listed.
                2. For each pain, whether users would notice the fix recorded.
                3. A rewrite and a targeted cleanup each estimated in sessions.
                4. A written decision with a date to revisit it.

                ## Notes
                A useful rule: no rewrite unless the current code blocks a feature users are actively asking for.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated decision record comparing a rewrite with a targeted cleanup in sessions, with a revisit date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the specific pains in the current code"
                - "Mark which pains a user would actually notice"
                - "Estimate a rewrite and a cleanup in sessions"
                - "Write the decision and a date to revisit it"
            - name: Adding payments to a side project
              description: |-
                ## Purpose
                Charging even a small amount changes a side project: refunds, receipts, tax registration questions and support all arrive with the first payment. Choosing a payment provider or merchant of record, deciding a simple price and checking the tax and employer questions before switching it on means the first sale is a pleasure rather than a panic.

                ## Milestones
                1. Two payment providers or merchants of record compared on fees, tax handling and payout timing.
                2. One simple price chosen, with a refund policy written.
                3. Questions about registering income and sales tax taken to an accountant or the tax authority's guidance.
                4. A test purchase and refund completed in the provider's test mode.

                ## Notes
                A merchant of record handles sales tax collection for you in many countries, at a higher fee. This is organisational preparation, not tax advice; confirm your own obligations with a professional.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A chosen payment provider, a written price and refund policy, recorded tax questions answered by a professional, and a test purchase completed."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Compare two payment providers on fees and tax handling"
                - "Write one price and a short refund policy"
                - "List your tax and registration questions for an accountant"
                - "Run a test purchase and a refund in test mode"
            - name: Open source or keep private decision
              description: |-
                ## Purpose
                Making a side project's code public can bring contributors and credibility, but it also brings issues to answer, licence questions and sometimes a clone of your paid product. Deciding deliberately, with the licence chosen and the history checked for secrets, avoids publishing by accident or keeping private something that would have helped people.

                ## Milestones
                1. Reasons for and against publishing the code written for this specific project.
                2. Employer contract position on publishing code confirmed.
                3. If public, a licence chosen and the repository history scanned for secrets.
                4. The decision and the expected time for answering issues recorded.

                ## Notes
                Publishing does not oblige you to accept contributions or answer every issue. A clear note in the readme about how the project is maintained sets expectations.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded public or private decision with the licence chosen and a secrets scan done if published."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write reasons for and against publishing this code"
                - "Check what your employment contract says about publishing code"
                - "Choose a licence if publishing and add it to the repository"
                - "Add a readme note on how the project is maintained"
            - name: Removing features nobody uses
              description: |-
                ## Purpose
                Each feature in a solo-maintained app is something you test, update and support for as long as it lives. Checking which features have had no use in three months and removing or hiding them shrinks the code you have to carry and often makes the main job clearer to new users.

                ## Milestones
                1. Simple usage counts on each main feature for at least a month.
                2. A list of features with no or almost no use.
                3. Users of those features, if any, told before removal.
                4. The features removed, with the code and any data cleaned up.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least one unused feature removed along with its code and data, after any remaining users were told."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Add a simple counter to each main feature"
                - "List features with almost no use after a month"
                - "Email any remaining users of those features"
                - "Delete the feature code and clean up its data"
            - name: Making the project survive a month of neglect
              description: |-
                ## Purpose
                Holidays, a busy quarter at work or a new baby will eventually leave the project untouched for weeks. Removing the manual chores, scheduled jobs you run by hand, a queue you empty yourself, a weekly data import, and putting a holding message in place means it keeps running while you are away and is still there when you come back.

                ## Milestones
                1. Every manual task the project needs listed with its frequency.
                2. Each one automated, removed or documented as safe to skip for a month.
                3. A status or holiday message ready to switch on.
                4. A two-week trial away from the project with nothing breaking.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "No manual task required more often than monthly, proven by two weeks untouched without an outage."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every manual chore the project needs and how often"
                - "Automate or remove the chores you do weekly"
                - "Write a holding message for users while you are away"
                - "Leave the project alone for two weeks and note what broke"
            - name: First public launch on a community board
              description: |-
                ## Purpose
                A launch post on a developer community board or a niche forum is usually a solo project's best chance of its first hundred visitors, and it happens once. Preparing the post, a working demo account, a landing page that loads fast and a free afternoon to answer every comment turns that one chance into real feedback rather than a crashed server and silence.

                ## Milestones
                1. Two or three communities chosen where your one user actually spends time, with their posting rules read.
                2. A short launch post written that explains the problem before the product.
                3. A demo that works without sign-up, and the app checked under a burst of traffic.
                4. Launch day blocked out, with every comment answered within the day.

                ## Notes
                Start from the **Marketing campaign** template. Post when you can stay online for several hours, and never ask friends to upvote: most communities detect and penalise it.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A launch post published in at least one relevant community, with every comment answered on the day and visitor numbers recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Read the posting rules of three communities your user visits"
                - "Ask the agent to draft a launch post that leads with the problem"
                - "Make a demo that works without signing up"
                - "Block launch afternoon in your calendar to answer comments"
            - name: Solo entry to a weekend build jam
              description: |-
                ## Purpose
                Timed jams and online hackathons are a forcing function solo developers rarely get: a fixed theme, a hard deadline and other people shipping at the same time. Entering alone with a plan for sleep, food and a deliberately tiny scope is excellent practice at cutting features and finishing, and the result often seeds a longer project.

                ## Milestones
                1. A jam chosen with dates that fit your calendar, and its rules read.
                2. A template repository ready with deploy already working.
                3. A submission made before the deadline with a short description and screenshots.
                4. A short note on what you would keep from the entry.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A working entry submitted to a timed jam before its deadline, with a written note on what to keep."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Find a jam whose dates and rules suit you"
                - "Prepare a starter repository with deploy working"
                - "Plan meals and sleep for the jam weekend"
                - "Submit before the deadline with screenshots"
            - name: Thirty-day ship challenge
              description: |-
                ## Purpose
                One small commit or note every day for thirty days, done in public, is a way to break a long stall or build the habit on a new project. Kept small enough that a ten-minute day still counts, it rebuilds momentum quickly and ends with a visible record of thirty days of work.

                ## Milestones
                1. A start date and a minimum that counts as a day, such as one commit or a written note.
                2. A public or private log with one line per day.
                3. At least twenty-five of thirty days logged.
                4. A short retrospective on what the challenge produced and whether to keep a lighter version.

                ## Notes
                Missing a day does not end the challenge. Two misses in a row is the signal to make the daily minimum smaller.
              priority: low
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "At least twenty-five of thirty days logged with a commit or note, followed by a written retrospective."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Choose a start date and the smallest unit that counts as a day"
                - "Log one commit or note for the challenge @recurring(daily)"
                - "Write a retrospective when the thirty days end"
            - name: Demo at a local developer meetup
              description: |-
                ## Purpose
                Showing a side project to a room of developers for five minutes produces sharper feedback than months of analytics, and a date in the calendar is a strong reason to finish the next feature. Preparing a short live demo with a recorded backup is also good practice for interviews and conference talks later.

                ## Milestones
                1. A meetup with a demo or lightning talk slot chosen and booked.
                2. A five-minute demo script covering the problem, the product and one technical lesson.
                3. A recorded backup of the demo in case the live version fails.
                4. Feedback from the evening written down within a day.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A five-minute demo given at a meetup, with a recorded backup prepared and the feedback written down within a day."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find a meetup with a demo or lightning talk slot"
                - "Write a five-minute script: problem, product, one lesson"
                - "Record a backup video of the demo"
                - "Write up the feedback the next morning"
            - name: Version one release day
              description: |-
                ## Purpose
                Many side projects sit in a permanent beta because there is never a clear moment to call them done. Setting a date for version one, freezing features two weeks before, and treating the day as a small event with a changelog, an announcement and a backup of everything gives the project a finish line and you a reason to celebrate.

                ## Milestones
                1. A release date set and a feature freeze two weeks before it.
                2. Every item in the version one definition of done checked off.
                3. A full backup taken and a rollback tested before the release.
                4. The release announced to existing users and on the changelog.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Version one released on its planned date or within a week of it, with a tested rollback and an announcement sent."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Set the release date and the feature freeze date"
                - "Check off each item in the definition of done"
                - "Take a full backup and test a rollback"
                - "Send the release note to users and update the changelog"
            - name: Shutting a project down gracefully
              description: |-
                ## Purpose
                Killing a project is a good outcome when it frees hours for something better, but switching it off overnight strands users and their data. A short wind-down, notice to users, a data export, a final read-only period and closing every account and payment, ends the project cleanly and protects your reputation for the next one.

                ## Milestones
                1. A shutdown date set at least thirty days out, and users told.
                2. A data export available to every user.
                3. Payments and subscriptions stopped, with refunds handled where due.
                4. Hosting, databases and paid services closed, with the domain kept or released deliberately.

                ## Notes
                Keep the domain pointing at a simple page for a year if people link to it. Archive the repository rather than deleting it.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Users given at least thirty days of notice and an export, payments stopped and every paid service closed by the shutdown date."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Choose a shutdown date at least thirty days away"
                - "Email users with the date and how to export their data"
                - "Cancel subscriptions and handle any refunds due"
                - "Close hosting accounts and archive the repository"
            - name: A tool for your own creative practice
              description: |-
                ## Purpose
                Artists, musicians, writers and photographers who code often get the most from building something only they need: a sample organiser, a manuscript word tracker, a print price calculator. Starting from a real annoyance in your own studio keeps the scope honest and the motivation high, because you feel the benefit the first evening it works.

                ## Milestones
                1. One recurring annoyance in your creative practice written down with how often it happens.
                2. The smallest tool that removes it sketched on one page.
                3. The tool used in at least three real working sessions.
                4. Changes made from those sessions, and a decision on whether others might want it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A working tool used in at least three real creative sessions, with a written decision on sharing it."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write down the annoyance in your practice that happens most"
                - "Sketch the smallest tool that would remove it"
                - "Use the tool in three real working sessions"
                - "Decide whether anyone else in your field would want it"
            - name: Generative art or creative coding series
              description: |-
                ## Purpose
                Creative coding rewards a series more than a single piece: a fixed constraint, such as one shape, one palette or one algorithm, explored over a dozen outputs builds both skill and a body of work. Publishing on a regular rhythm gives creatives a portfolio and engineers a low-pressure way to keep coding for the joy of it.

                ## Milestones
                1. A constraint for the series written in one sentence.
                2. A small sketch template so each piece starts in minutes.
                3. Twelve pieces made and published.
                4. The series gathered on one page with notes on the technique.

                ## Notes
                Start from the **Portfolio piece** template for the final collection page.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Twelve pieces in one constrained series published, collected on a single page with technique notes."
                cadence: rolling
              tasks:
                - "Write the series constraint in one sentence"
                - "Set up a sketch template that starts a new piece in minutes"
                - "Make and publish one piece in the series @recurring(weekly:fri)"
                - "Gather the finished series on one page with technique notes"
            - name: Portfolio project aimed at a job change
              description: |-
                ## Purpose
                Engineers moving into a new specialism, such as data, mobile or backend, are often told to build something, then build something nobody can evaluate. Choosing a project that mirrors the kind of work in the job ads you want, finishing it properly and writing up the decisions gives a hiring manager real evidence in the five minutes they spend on it.

                ## Milestones
                1. Five target job ads collected and the skills they share listed.
                2. A project chosen that uses at least three of those skills on a realistic problem.
                3. The project deployed with a readme explaining the decisions and trade-offs.
                4. A short case study linked from your CV and profile.

                ## Notes
                Start from the **Portfolio piece** template for the write-up. One finished project with a clear explanation beats five tutorials.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A deployed project using at least three skills from target job ads, with a written case study linked from your CV."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Save five job ads for the role you want next"
                - "List the skills at least three of the ads share"
                - "Choose a project that exercises three of those skills"
                - "Write the decisions and trade-offs into the readme"
            - name: Fifteen-minute sessions for carers and new parents
              description: |-
                ## Purpose
                With a new baby, caring duties or shift work, a two-hour session may not happen for months, but fifteen minutes twice a week often can. Breaking the project into tasks that fit a quarter of an hour, keeping the laptop ready and the next step written down, keeps a project alive through a demanding season without guilt.

                ## Milestones
                1. The backlog broken into tasks that each fit in fifteen minutes.
                2. A setup that opens straight to the right file and the leave-off note.
                3. Two short sessions a week held for a month.
                4. A note on which kinds of work fit short sessions and which wait for longer ones.

                ## Notes
                Writing, planning, small bug fixes and test cases fit short sessions well. Save tricky debugging for the rare longer block.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two fifteen-minute sessions a week held for four weeks, with the backlog split into tasks that fit them."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Split the next five backlog items into fifteen-minute tasks"
                - "Set up a script that opens the project at the leave-off note"
                - "Hold a fifteen-minute build session @recurring(weekly:tue,thu)"
                - "Note which work fits short sessions and which needs longer"
            - name: Getting hands-on again as a manager
              description: |-
                ## Purpose
                Engineering managers and architects who have not written production code in years often feel their judgement drifting from the tools their teams use. A small personal project on the current stack, built entirely outside work, restores hands-on familiarity without taking tickets from the team or blocking their reviews.

                ## Milestones
                1. A project chosen that uses the tools and practices current in your field.
                2. A local setup working with today's versions of those tools.
                3. One complete feature built, tested and deployed.
                4. Three things that have changed since you last coded every day written down.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One feature deployed on a current stack outside work, with three written observations about how practice has changed."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Pick a small project that uses your field's current tools"
                - "Set up the local environment from scratch"
                - "Build, test and deploy one complete feature"
                - "Write three things that changed since you last coded daily"
            - name: Building a small tool for a friend or local club
              description: |-
                ## Purpose
                Booking sheets for a sports club, a rota for a community kitchen or a stock list for a friend's shop are classic first side projects with a real user from day one. Agreeing up front what you will build, how long you will support it and what happens when you step away keeps a favour from becoming an unpaid job you cannot leave.

                ## Milestones
                1. The problem and the one or two people who will use the tool agreed in writing.
                2. A support promise recorded: what you will fix, how quickly and for how long.
                3. The tool in use by the club or friend for a month.
                4. A handover note written so someone else could run or retire it.

                ## Notes
                Check whether an existing free tool would do before building. If the tool handles members' personal data, keep only what is needed and agree who is responsible for it.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A tool in use for at least a month, with a written support promise and a handover note the club holds."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write down the problem with the person who has it"
                - "Agree how long you will support the tool and what that covers"
                - "Check in with the club contact about how it is going @recurring(quarterly)"
                - "Write a handover note they can keep"
            - name: Turning a side project into a paid product while employed
              description: |-
                ## Purpose
                When a side project gains users who would pay, the questions change: employer permission, a business structure, tax registration, a support promise and how many hours you can give it without risking your job. Working through them in order, with the right professionals for the legal and tax parts, lets you charge confidently instead of drifting into a business by accident.

                ## Milestones
                1. Written employer permission, or a recorded decision that it is not needed, after checking your contract.
                2. Questions on business structure and tax registration answered by an accountant or official guidance.
                3. A support promise and terms of service drafted, with professional review where needed.
                4. A weekly hour limit set and agreed with anyone it affects.

                ## Notes
                This project prepares decisions and questions. It does not replace legal or tax advice for your country.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Employer position, business structure and tax questions resolved in writing, terms drafted and a weekly hour limit recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Revisit your contract notes and ask for written permission if needed"
                - "Book a session with an accountant about structure and tax"
                - "Draft terms of service and a support promise"
                - "Set a weekly hour limit for the business"
            - name: Running a micro product with its first paying customers
              description: |-
                ## Purpose
                Ten paying customers bring expectations a free project never had: answers within a day or two, invoices that match payouts and no surprise downtime. A light operating rhythm, support twice a week, a monthly reconciliation and a short status page, keeps those customers without turning evenings into a help desk.

                ## Milestones
                1. A support promise published, such as replies within two working days.
                2. Support handled on two fixed days a week.
                3. A monthly reconciliation of payments, refunds and payouts.
                4. A simple status page and a saved reply for common questions.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Support replies within the published time for three months and every month's payments reconciled against payouts."
                cadence: rolling
              tasks:
                - "Publish a support response time on the help page"
                - "Answer customer support messages @recurring(weekly:mon,thu)"
                - "Reconcile payments, refunds and payouts @recurring(monthly:15)"
                - "Write saved replies for the five most common questions"
            - name: Selling or handing over a side project
              description: |-
                ## Purpose
                Projects you no longer want to run may still have users, revenue or a good domain worth passing on. Preparing it for a sale or a handover, with clean documentation, transferable accounts and honest numbers, gets a fair outcome and keeps users served, whether it goes to a buyer, a community maintainer or a friend.

                ## Milestones
                1. A one-page summary of users, revenue, costs and hours needed per month, with honest figures.
                2. Every account and domain checked for transferability.
                3. Documentation good enough for a new owner to deploy it within a day.
                4. A buyer or new maintainer chosen and the handover completed with a written agreement.

                ## Notes
                For a sale, use an escrow service or a marketplace's process, and get legal advice on the agreement. Never hand over personal user data without checking what your privacy policy allows.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A completed transfer or sale with accounts moved, documentation handed over and a written agreement signed."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write a one-page summary of users, revenue and costs"
                - "Check whether each account and domain can be transferred"
                - "Document deployment so a new owner could do it in a day"
                - "Compare a sale, a community handover and a friend taking it on"
            - name: Technical case study of the build
              description: |-
                ## Purpose
                Readers share a well-written account of how you built something alone, the decisions, the dead ends and the numbers, far more widely than the project itself, and it often brings users, job offers or speaking invitations. Turning the build log into a structured case study captures lessons while you still remember them.

                ## Milestones
                1. The build log reread and the five most interesting decisions picked.
                2. A case study drafted with problem, approach, trade-offs and real numbers.
                3. The draft reviewed by one other developer.
                4. The case study published and linked from the project.

                ## Notes
                Specifics travel: the hosting bill, the hours spent and the feature you cut are what readers remember.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A published case study covering at least five decisions with real numbers, reviewed by one other developer."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Reread the build log and pick five key decisions"
                - "Ask the agent to turn the build log into a first outline"
                - "Draft the case study with real costs and hours"
                - "Ask one developer friend to review it before publishing"
            - name: Small studio of products on one shared stack
              description: |-
                ## Purpose
                Experienced solo builders often run three or four small products at once, and each separate stack multiplies maintenance. Moving them onto one shared foundation, the same framework, one server or platform, one shared login, payments and email setup, lets a single maintenance hour cover all of them and makes each new idea quicker to start.

                ## Milestones
                1. Every product listed with its stack, hosting and monthly maintenance time.
                2. A target shared stack chosen with a starter template.
                3. At least two products moved onto it.
                4. Maintenance time across all products measured again and compared.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least two products running on one shared stack and starter template, with combined monthly maintenance time measured before and after."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "List each product with its stack and monthly maintenance time"
                - "Build a starter template from the stack you know best"
                - "Move the smallest product onto the shared stack first"
                - "Give one product a focused month of attention in turn @recurring(monthly:22)"
---

# Solo Developer Side Projects

Most side projects die in the gap between a Friday night burst of enthusiasm and the third weekend, when the day job, family and a half-built login page all compete for the same tired hours. These projects start with the foundations (a time budget you can keep, a check of your employment contract, an idea worth the effort, a one-page brief, a scope cut to two weekends and a live deploy on day one), then the routines that keep momentum, the skills a solo builder needs, decisions about stack, money and rewrites, dated launches and challenges, variants for creatives, carers, career changers and lapsed coders, and the specialist work of running a tiny paid product or a small studio of them.

What repeats is a protected weekend build session, a weekly backlog trim and build log, a monthly shipped change, maintenance hour and cost check, a quarterly keep, pause or kill review and backup restore, and a yearly sweep of renewals and tokens. The Product spec, Habit tracker, Metrics log, Marketing campaign and Portfolio piece templates pair with the projects that need a record. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
