---
id: product-management.internal-tools-product-ownership
name: Internal Tools Product Ownership
description: "Internal tools run like products: an owner and charter for each, a request and release rhythm staff can trust, access reviews, adoption measures, and the cutovers that retire spreadsheets and legacy systems."
category: business
version: 1.0.0
tags: [product-management, internal-tools-product-ownership, team, enterprise, engineer, internal-tools, back-office, admin-console]
author: Aurum Technology
starter_structure:
  templates:
    - product-spec
    - meeting-notes
    - compliance-control
    - metrics-log
    - purchase-decision
    - operational-checklist
  pillars:
    - name: Product Management
      emoji: "🧩"
      description: "Deciding what to build and why: discovery and research, roadmaps and prioritisation, specs and launches, pricing and packaging, product analytics, and the feedback loops that keep a product honest."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Internal Tools Product Ownership
          description: "Treating internal tools for staff as products with users, roadmaps and adoption goals rather than side projects nobody owns."
          projects:
            - name: Internal tools inventory with owners and users
              description: |-
                ## Purpose
                Most organisations cannot say how many internal tools they run, who built them or who depends on them, until one breaks during month-end. A single inventory listing every admin console, back-office app, operations dashboard, scripted workflow and business-critical spreadsheet, with its users, owner and the process it supports, is the base every other decision in this area stands on.

                ## Milestones
                1. An inventory listing every internal tool with its purpose, main users and the business process it supports.
                2. An owner, or the word 'none', recorded against every entry.
                3. Each tool rated critical, important or convenience according to what stops if it fails.
                4. The hosting, data stores and integrations of each critical tool noted.
                5. The inventory published where staff and IT can both find it.

                ## Notes
                Ask finance for software subscriptions and IT for the apps registered in single sign-on. Between them they surface the tools nobody mentions in interviews.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An inventory of every internal tool, each with users, owner or 'none', a criticality rating and its supporting process, is published and agreed with IT."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the internal tools you already know of in one shared sheet"
                - "Ask IT for the apps registered in single sign-on and the service catalogue"
                - "Ask finance for the software subscriptions charged to each department"
                - "Rate each tool critical, important or convenience by what stops if it fails"
                - "Refresh the inventory and mark retired or new tools @recurring(yearly)"
            - name: Named product owner for each critical tool
              description: |-
                ## Purpose
                Tools without an owner collect requests nobody answers and fixes nobody prioritises, so staff build workarounds and the tool slowly rots. Naming one accountable product owner for each critical tool, with a written scope and real time in their week, turns 'whoever touched it last' into someone who decides what it becomes.

                ## Milestones
                1. Every tool rated critical in the inventory has one named product owner.
                2. Each owner's decision rights written down: what they approve alone and what goes to a sponsor.
                3. Time for the role agreed with each owner's manager as a share of their week.
                4. A business sponsor recorded for each critical tool.

                ## Notes
                An owner is not the same as the engineer who maintains the code. Small teams can combine the two roles, but write both down so a gap is visible when one person leaves.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each critical internal tool has a named product owner, a business sponsor and written decision rights, with time for the role agreed by the owner's manager."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Filter the inventory to the tools rated critical"
                - "Propose an owner and a sponsor for each critical tool"
                - "Agree the time each owner will give the role with their manager"
                - "Write a one-paragraph statement of each owner's decision rights"
            - name: Internal user map by role, team and frequency
              description: |-
                ## Purpose
                Internal users are not one group: a support agent who lives in the admin console eight hours a day needs different things from a finance lead who opens it twice a month. Mapping users by role, team, frequency and the tasks they perform shows whose time the tool consumes most, and whose needs have quietly been ignored.

                ## Milestones
                1. Every role that uses the tool listed with a headcount.
                2. Each role marked as a daily, weekly or occasional user.
                3. The top three tasks for each role written in plain words.
                4. The roles that spend the most combined hours in the tool identified.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A user map lists every role using the tool with headcount, frequency and top three tasks, and names the roles with the most combined hours in it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export the active accounts and their departments from the tool"
                - "Group the accounts into roles and count each one"
                - "Ask a manager in each team which three tasks their staff do most"
                - "Rank roles by headcount multiplied by hours spent in the tool"
                - "Check the user map against the latest organisation chart @recurring(yearly)"
            - name: Shadowing staff through a real working session
              description: |-
                ## Purpose
                Requests usually arrive as solutions, such as 'add an export button', while the real problem only shows when you watch someone work. Sitting beside three or four staff for a couple of hours each during a normal shift reveals the copy and paste between screens, the sticky notes and the side spreadsheets that never reach a ticket.

                ## Milestones
                1. Shadowing sessions held with at least three people from the heaviest-use role.
                2. Every workaround seen recorded with how often it happens.
                3. Moments of waiting, re-keying or checking another system counted.
                4. A short write-up shared with the people shadowed so they can correct it.

                ## Notes
                Tell managers and staff this is not a performance review. People hide their workarounds if they think they will be judged for them.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Notes from at least three shadowing sessions list every observed workaround with its frequency and have been checked by the staff observed."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask a team lead for three volunteers from the heaviest-use role"
                - "Book two-hour shadowing slots during a normal shift"
                - "Record every workaround, re-key and side spreadsheet you see"
                - "Send the write-up to the people shadowed and ask for corrections"
            - name: Cost of manual workarounds baseline
              description: |-
                ## Purpose
                Engineering time for internal tools competes against customer features, and it loses unless someone can put a number on the waste. Timing the main workarounds and multiplying by how often they happen and how many people do them gives a baseline in staff hours a month, which every later change can be measured against.

                ## Milestones
                1. The five most frequent workarounds from shadowing chosen for measurement.
                2. A median time per occurrence measured for each.
                3. Monthly frequency and the number of people doing each one agreed with team leads.
                4. A baseline of total staff hours a month written down with the method used.

                ## Notes
                Use conservative figures and show your sums. A modest number that finance can check beats a dramatic one they will dismiss.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A baseline of monthly staff hours spent on the five main workarounds, with the timing method and assumptions shown, is signed off by the business sponsor."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick the five most frequent workarounds from your shadowing notes"
                - "Time each workaround on at least five real occurrences"
                - "Agree monthly frequency and headcount for each with team leads"
                - "Multiply out the monthly hours and write the method beside the total"
            - name: One-page charter for an internal tool
              description: |-
                ## Purpose
                Without a written purpose, an internal tool drifts, and every department's request looks equally valid. A one-page charter covering the problem, the users, the outcomes that matter and the things the tool will deliberately not do gives the owner a document to point at when the next out-of-scope request lands.

                ## Milestones
                1. The problem the tool solves written in two sentences from the users' side.
                2. Primary and secondary user roles named.
                3. Three outcomes stated, each with how it will be measured.
                4. A list of non-goals the sponsor has agreed to.
                5. The charter linked from the tool's home page or help menu.

                ## Notes
                Start from the **Product spec** template. Keep it to one page; the non-goals section does most of the work.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page charter with problem, users, three measured outcomes and agreed non-goals is signed off by the sponsor and linked from inside the tool."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft the problem statement in two sentences from the users' side"
                - "Ask the agent to turn your shadowing notes into candidate outcomes"
                - "List five things the tool will not do and agree them with the sponsor"
                - "Link the signed-off charter from the tool's help menu"
            - name: Success measures for an internal tool
              description: |-
                ## Purpose
                Revenue and conversion rarely apply inside the company, so internal tools get judged by anecdote and by whoever complains loudest. Choosing three or four measures that staff time, quality and adoption actually depend on, such as median handling time, error or rework rate and the share of the target role using the tool weekly, gives the owner an honest scoreboard.

                ## Milestones
                1. No more than four measures chosen, covering time, quality and adoption.
                2. A current baseline recorded for each measure.
                3. A target agreed with the sponsor for twelve months from now.
                4. The source of each figure, and who pulls it, written beside it.

                ## Notes
                Avoid logins as an adoption measure. Staff forced to use a tool will log in and still work around it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Up to four success measures for the tool each have a baseline, a twelve-month target agreed with the sponsor and a named data source."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Shortlist measures covering time saved, error rate and adoption"
                - "Check which measures can come from logs and which need sampling"
                - "Record a baseline for each chosen measure"
                - "Agree twelve-month targets with the sponsor"
            - name: Single intake route for internal tool requests
              description: |-
                ## Purpose
                When requests arrive by chat message, corridor conversation and a manager's email, the loudest get built and the quiet ones vanish. One intake form or queue, with a few required fields covering who is affected, how often and what they do today, gives every request the same fair hearing and gives the owner data instead of noise.

                ## Milestones
                1. One intake form or queue created and named in the tool's help menu.
                2. Required fields for role, frequency, current workaround and urgency.
                3. Requests from chat and email redirected to the queue with a standard reply.
                4. Every new request acknowledged within two working days.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All requests for the tool arrive through one queue with required fields, and every request in the last month was acknowledged within two working days."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create a request form with fields for role, frequency, workaround and urgency"
                - "Add a link to the form in the tool's help menu"
                - "Write a short reply that redirects chat requests to the form"
                - "Move open requests from chat and email into the new queue"
            - name: Least-privilege roles and permissions baseline
              description: |-
                ## Purpose
                Many internal tools hand every user an admin account because it was quicker at launch, which means one stolen password or careless click can change thousands of customer records. Defining a small set of roles matched to real jobs, and moving every account onto one, cuts that exposure and makes later audits far quicker.

                ## Milestones
                1. Every permission in the tool listed and grouped by what it allows.
                2. Three to six roles defined that match real jobs, each with the least access it needs.
                3. Every active account assigned to exactly one role.
                4. Admin access limited to a named few and approved by the sponsor.
                5. Accounts belonging to leavers and long-inactive users removed.

                ## Notes
                Agree the roles with your security team before changing anyone's access, and warn users a week ahead. Losing a permission mid-shift creates more urgent tickets than any release.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every active account sits in one documented least-privilege role, admin access is held by a named list approved by the sponsor, and no leaver accounts remain."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Export every account with its current permissions"
                - "Draft three to six roles that match real jobs in the user map"
                - "Review the proposed roles with the security team"
                - "Give users a week's notice before moving them to their new roles"
                - "Remove accounts for leavers and anyone inactive for 90 days"
            - name: Source-of-truth map for the tool's data
              description: |-
                ## Purpose
                Most internal tools read from and write to several systems, and when two of them disagree staff stop trusting both. Mapping which system owns each key record, such as customer, order, employee or price, and which direction each sync runs, shows exactly where double entry and conflicting numbers come from.

                ## Milestones
                1. Every data object the tool reads or writes listed.
                2. One system of record named for each object.
                3. Every sync drawn with its direction and frequency.
                4. Places where staff edit the same record in two systems flagged for fixing.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A data map names the system of record for every object the tool touches, shows each sync's direction and flags every double-edit point."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List each record type the tool reads or writes"
                - "Ask the data or platform team which system owns each one"
                - "Draw each sync with its direction and how often it runs"
                - "Flag every place staff can edit the same record in two systems"
            - name: Weekly triage of internal tool requests
              description: |-
                ## Purpose
                A request queue that nobody reviews is worse than none, because staff stop filing and go back to messaging engineers directly. A fixed thirty-minute triage each week, where every new request is sized, merged with duplicates, given a status and answered, keeps the queue credible and the backlog honest.

                ## Milestones
                1. A weekly triage slot in the owner's and lead engineer's calendars.
                2. Every new request given a status: accepted, merged, needs information, or declined with a reason.
                3. Duplicate requests merged with a count of how many people asked.
                4. Requesters told the outcome within a week of filing.

                ## Notes
                Decline in writing and give the reason. A clear no with a suggested workaround builds more trust than a request left open for a year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every request filed in the last eight weeks has a status and a reply to the requester, with none left untriaged for more than a week."
                cadence: rolling
              tasks:
                - "Book a 30-minute weekly triage with the lead engineer"
                - "Triage new requests, merge duplicates and reply to each requester @recurring(weekly:tue)"
                - "Close requests that have waited for information for more than a month"
            - name: Monthly roadmap review with business owners
              description: |-
                ## Purpose
                Department heads who fund or depend on an internal tool rarely see its roadmap, so they escalate around the owner whenever their priority slips. A monthly half-hour review with the sponsor and the leads of the main user teams, covering what shipped, what is next and what was declined, keeps expectations aligned and surfaces conflicts between teams before they turn political.

                ## Milestones
                1. A standing monthly review with the sponsor and the main user team leads.
                2. A one-page now, next and later roadmap shared before each meeting.
                3. Disagreements between teams resolved, or escalated with the decision recorded.
                4. Six consecutive reviews held, each with notes.

                ## Notes
                Start from the **Meeting notes** template. Show declined items as well as planned ones; it stops the same request returning every month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly roadmap reviews held with the sponsor and user team leads, each with notes recording decisions and declined items."
                cadence: rolling
              tasks:
                - "Invite the sponsor and the main user team leads to a monthly review"
                - "Send the now, next and later roadmap two days before the review @recurring(monthly:9)"
                - "Record each decision and declined item in the meeting notes"
            - name: Quarterly internal user satisfaction pulse
              description: |-
                ## Purpose
                Staff rarely complain about tools formally; they quietly lose an hour a day and mention it in exit interviews. A three-question pulse each quarter (how easy is it to do your job in the tool, what frustrates you most, what should we fix first) gives a trend line and a ranked list of pain straight from the people using it.

                ## Milestones
                1. A three-question survey agreed and kept identical each quarter.
                2. A response rate above 30 percent from the target roles.
                3. Free-text answers grouped into themes and counted.
                4. The top theme from each pulse turned into a roadmap item or a written reason why not.
                5. Results and actions shared back with everyone who responded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly pulses run with identical questions, each with a response rate over 30 percent and its top theme acted on or answered publicly."
                cadence: rolling
              tasks:
                - "Write three survey questions and freeze the wording"
                - "Send the pulse to the tool's active users @recurring(quarterly)"
                - "Ask the agent to group the free-text answers into counted themes"
                - "Share the results and the chosen fix with all users"
            - name: Weekly office hours for tool users
              description: |-
                ## Purpose
                Plenty of internal tool problems are five-minute fixes or misunderstandings that never justify a ticket. An open half hour each week, where anyone can drop in and share a screen, catches confusion early, teaches features people did not know existed and gives the owner a steady stream of unfiltered feedback.

                ## Milestones
                1. A recurring open session advertised inside the tool and in the main team channels.
                2. Attendance and questions logged at each session.
                3. Repeated questions turned into help articles or interface changes.
                4. Sessions moved to fortnightly if attendance stays below two people for a month.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Twelve weekly sessions held with questions logged, and at least three repeated questions turned into help articles or interface fixes."
                cadence: rolling
              tasks:
                - "Book a recurring open video call and post the link in the tool"
                - "Host the office hours session and log each question @recurring(weekly:thu)"
                - "Turn any question asked three times into a help article"
            - name: Staff-facing release notes for tool changes
              description: |-
                ## Purpose
                Changes that engineers see as small, such as a moved button, a renamed status or a new required field, can stop a support team mid-shift. Short release notes written for staff, saying what changed, who it affects and what they now do differently, prevent most of the 'it is broken' tickets that follow a release.

                ## Milestones
                1. A release notes page linked from inside the tool.
                2. Every release that changes what users see described in plain words.
                3. Changes to required fields or workflows announced at least two days ahead.
                4. A monthly roundup sent to team leads.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every user-visible release in the last three months has a plain-language note, and workflow changes were announced at least two days ahead."
                cadence: rolling
              tasks:
                - "Create a release notes page and link it from the tool's menu"
                - "Write a plain-language note for each user-visible change before it ships"
                - "Send team leads the monthly roundup of changes @recurring(monthly:20)"
            - name: Quarterly access recertification
              description: |-
                ## Purpose
                Access granted for a project or a stint covering a colleague is rarely taken away, and auditors in most industries expect evidence that someone reviews it. A quarterly recertification, where each manager confirms or removes their team's roles in the tool, keeps permissions matched to jobs and produces that evidence in one pass.

                ## Milestones
                1. A quarterly export of every account and role sent to each manager.
                2. Every manager confirming or removing their team's access by a set date.
                3. Removals carried out and logged within five working days.
                4. The signed-off review stored where auditors can find it.

                ## Notes
                Start from the **Compliance control** template. Ask your security or audit team which tools are in scope; tools touching finance or customer data usually are.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly access reviews completed, each with manager sign-off for every account and removals logged within five working days."
                cadence: cyclic
              tasks:
                - "Ask the security team which internal tools need access reviews"
                - "Send each manager their team's accounts and roles to confirm @recurring(quarterly)"
                - "Remove unconfirmed access and log each change"
                - "File the signed-off review with the audit evidence"
            - name: Monthly usage and task-time review
              description: |-
                ## Purpose
                A tool can be live and still unused, with staff falling back to the old spreadsheet for the awkward cases. Checking the success measures each month, alongside which screens are used and which are ignored, shows whether a release really changed how the work gets done.

                ## Milestones
                1. A small usage view showing weekly active users by role and use of key screens.
                2. The success measures updated monthly against their baseline.
                3. Screens or features with almost no use listed for a keep or remove decision.
                4. One finding from each review turned into a backlog item.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly reviews logged, each updating the success measures against baseline and producing at least one backlog item."
                cadence: rolling
              tasks:
                - "Set up a view of weekly active users by role and key screen use"
                - "Update the success measures and note what moved @recurring(monthly:14)"
                - "List screens with almost no use for a keep or remove decision"
            - name: Incident reviews for internal tool outages
              description: |-
                ## Purpose
                When an internal tool goes down, the cost lands on staff who cannot ship orders, pay suppliers or answer customers, yet the outage is often fixed quietly and forgotten. A short written review of every outage or data error, and a monthly look across them, finds the repeat causes and gives internal tools the reliability attention customer systems get.

                ## Milestones
                1. A simple incident record: what broke, who was affected, for how long and why.
                2. A record written within three working days of every outage or data error.
                3. A monthly look across incidents for repeat causes.
                4. At least one repeat cause fixed for good.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every outage in the last quarter has an incident record written within three working days, and at least one repeat cause has been removed."
                cadence: rolling
              tasks:
                - "Create a one-page incident record format for the tool"
                - "Write an incident record within three days of any outage"
                - "Review the month's incidents for repeat causes @recurring(monthly:23)"
                - "Put the top repeat cause on the roadmap with an owner"
            - name: Quarterly maintenance and tech debt allowance
              description: |-
                ## Purpose
                Built fast and then starved of attention, a typical internal tool decays quietly: dependencies age, libraries fall out of support and every change takes longer than the last. Agreeing a fixed share of each quarter's engineering time for upgrades, security patches and clean-up, and protecting it in planning, keeps the tool cheap to change.

                ## Milestones
                1. A share of engineering time for maintenance agreed with the sponsor, often 15 to 25 percent.
                2. A maintenance list of outdated dependencies, warnings and known fragile areas.
                3. The allowance spent each quarter and the work recorded.
                4. No dependency left more than one major version behind without a written reason.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarters in a row with the agreed maintenance share spent and recorded, and no unsupported dependency left without a written reason."
                cadence: cyclic
              tasks:
                - "Agree a fixed share of engineering time for maintenance with the sponsor"
                - "List outdated dependencies and known fragile areas of the tool"
                - "Plan the quarter's maintenance work before feature work @recurring(quarterly)"
            - name: Department champions network
              description: |-
                ## Purpose
                One owner cannot hear from every team, and staff trust a colleague's tip more than any release note. A champion in each main user team, given early previews and a monthly half hour with the owner, spreads good practice, tests changes before release and brings back the problems people will not file.

                ## Milestones
                1. One champion named in each main user team with their manager's agreement.
                2. A monthly champions session with previews of upcoming changes.
                3. Champions testing each significant change before release.
                4. Champion feedback recorded and the actions taken reported back.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A champion in every main user team, attending at least ten of twelve monthly sessions and testing each significant release before it ships."
                cadence: rolling
              tasks:
                - "Ask each team lead to nominate one champion"
                - "Run the monthly champions session with a preview of next changes @recurring(monthly:5)"
                - "Give champions early access to test each significant change"
                - "Report back which champion suggestions were acted on"
            - name: Contextual inquiry for back-office workflows
              description: |-
                ## Purpose
                Interviewing staff in a meeting room produces the official process; watching them do the work and asking why at each step reveals the real one. Learning contextual inquiry, the master and apprentice style of observation, gives owners and engineers a repeatable way to find needs that requests and surveys miss.

                ## Milestones
                1. The method studied and its four principles summarised: context, partnership, interpretation and focus.
                2. Two practice sessions run with a colleague and reviewed.
                3. Three real sessions completed, with notes interpreted the same day.
                4. A workflow model drawn from the sessions showing steps, hand-offs and breakdowns.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three contextual inquiry sessions completed and turned into a workflow model of steps, hand-offs and breakdowns, reviewed by the team."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Read an introduction to contextual inquiry and note its four principles"
                - "Practise one session on a colleague doing a familiar task"
                - "Run three real sessions and interpret the notes the same day"
                - "Draw a workflow model showing hand-offs and breakdowns"
            - name: Writing stories for operators and admins
              description: |-
                ## Purpose
                Stories written as 'as a user I want a button' hide the volume, interruptions and accuracy demands that shape back-office work. Learning to write stories that name the role, the trigger, the volume and the cost of an error, for example an agent handling 80 refunds a shift who needs to approve a batch without opening each one, gives engineers what they need to build the right thing.

                ## Milestones
                1. Ten recent tickets rewritten with role, trigger, volume and error cost.
                2. Acceptance criteria for each, including the edge cases staff actually meet.
                3. The rewritten stories reviewed by an engineer and a user from the role.
                4. A short story-writing guide added to the intake form's help text.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten backlog items rewritten with role, trigger, volume and error cost, reviewed by an engineer and a user, with a story guide linked from the intake form."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pick ten recent tickets that led to rework"
                - "Rewrite each with the role, trigger, volume and cost of an error"
                - "Add acceptance criteria for the edge cases staff actually meet"
                - "Review the rewrites with one engineer and one user from the role"
            - name: Designing for expert high-frequency users
              description: |-
                ## Purpose
                Consumer design habits, such as generous white space, step-by-step wizards and confirmation pop-ups, slow down someone who performs the same task three hundred times a day. Learning the patterns expert users need, including keyboard shortcuts, dense tables, saved filters, bulk selection and stable layouts, changes what the team proposes for every screen.

                ## Milestones
                1. Five expert-user patterns studied with examples from well-regarded professional tools.
                2. The most used screen reviewed against those patterns.
                3. Three changes proposed and tested with daily users.
                4. A short checklist of expert-user patterns added to the team's design notes.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The most used screen has been reviewed against a written expert-user checklist and three changes tested with daily users are on the roadmap."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Collect examples of shortcuts, dense tables and saved filters from tools you admire"
                - "Review the most used screen against those patterns"
                - "Test three proposed changes with two daily users each"
                - "Write the expert-user checklist into the team's design notes"
            - name: Timing tasks and counting errors properly
              description: |-
                ## Purpose
                Claims that a release saves hours are easy to make and hard to believe without a method behind them. Learning simple time sampling, error and rework counting, and how to compare before and after fairly gives the owner numbers that survive a sceptical finance review.

                ## Milestones
                1. A sampling method chosen: observed timings, log timestamps or self-recorded tallies.
                2. The median used for task time, with the reason it beats the mean understood.
                3. A before-and-after comparison run on one recent change.
                4. The method written up so others can repeat it.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written measurement method has been used on one recent change, with before and after medians and error counts recorded side by side."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose observed timing, log timestamps or tallies for one common task"
                - "Measure the task on twenty occurrences before a change ships"
                - "Repeat the measurement four weeks after the change"
                - "Write up the method and both results for the next owner"
            - name: Prioritising internal requests without revenue figures
              description: |-
                ## Purpose
                Without a price tag to rank by, internal requests get ordered by the seniority of whoever asked. Learning to score each request by people affected, frequency, minutes saved, error risk and compliance exposure, and to show the scores openly, makes the order defensible and turns saying no to a senior stakeholder into a conversation about numbers.

                ## Milestones
                1. A scoring sheet with five criteria and how each is rated.
                2. The current top twenty requests scored with the champions.
                3. The scored order shared openly with requesters.
                4. One senior request deferred or declined with the scores as the explanation.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "The top twenty requests are scored on five published criteria, the ranked list is visible to requesters and it has been used to defer at least one senior request."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft scoring criteria for people affected, frequency, time saved, risk and compliance"
                - "Score the top twenty open requests with the champions"
                - "Publish the scored list where requesters can see it"
                - "Rehearse explaining a deferral to a senior stakeholder using the scores"
            - name: Knowing the limits of low-code app builders
              description: |-
                ## Purpose
                Low-code builders and internal app platforms can put a working admin screen in front of staff in days, then become expensive once the tool needs fine-grained permissions, audit trails or hundreds of thousands of records. Learning where these platforms shine and where they break, before choosing one for the next tool, saves a painful rebuild a year later.

                ## Milestones
                1. Requirements that usually strain low-code tools listed: permissions, audit, volume, offline use, testing and version control.
                2. Two platform categories tried with a small real task each.
                3. Each platform's pricing checked for how cost grows with users or records.
                4. A one-page rule of thumb for when to use low-code and when to build.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page rule of thumb, based on hands-on trials of two platform categories, states when the team will use low-code and when it will build."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the requirements that most often strain low-code tools"
                - "Build one small real screen in two different platform types"
                - "Check how each platform's price grows with users and records"
                - "Write a one-page rule for when to use low-code"
            - name: Hours-saved and errors-avoided business case
              description: |-
                ## Purpose
                Funding for internal tools is decided in the same budget round as customer features, so the case has to speak the language of cost and risk. Learning to turn the workaround baseline into staff hours, cost at a loaded hourly rate, avoided errors and a payback period lets the owner ask for engineering time with figures finance recognises.

                ## Milestones
                1. A loaded hourly cost for each affected role agreed with finance.
                2. Hours saved and errors avoided estimated from the baseline as a range.
                3. Build and running costs estimated with the engineering lead.
                4. A one-page case with a payback period reviewed by finance.

                ## Notes
                Show a low, middle and high estimate. Finance trusts a range more than a single confident figure.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A one-page business case for the next internal tool investment, with low, middle and high estimates and a payback period, has been reviewed by finance."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask finance for the loaded hourly cost of each affected role"
                - "Turn the workaround baseline into low, middle and high savings"
                - "Estimate build and running costs with the engineering lead"
                - "Ask the agent to draft the one-page case from your figures"
            - name: Keep, rebuild or replace an ageing internal tool
              description: |-
                ## Purpose
                Homegrown tools written a decade ago often still run critical processes on an unsupported framework that only one engineer understands. Comparing three options side by side, keep and patch, rebuild, or replace with a bought product, against the same criteria of cost, risk, workflow fit and migration effort produces a decision that can be defended when the bill arrives.

                ## Milestones
                1. The tool's current running cost, risks and support status written down.
                2. Three options described with cost, time, workflow fit and migration effort.
                3. Staff from the heaviest-use role asked which workflow features they cannot lose.
                4. A decision recorded with the sponsor's sign-off and a review date.

                ## Notes
                Start from the **Purchase decision** template. Price data migration and retraining honestly; they are usually the largest hidden cost of replacing.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A keep, rebuild or replace decision for the tool, comparing three costed options against the same criteria, is signed off by the sponsor with a review date."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write down the tool's running cost, support status and known risks"
                - "Describe keep, rebuild and replace options with cost and time"
                - "Ask heavy users which workflow features they cannot lose"
                - "Present the options to the sponsor and record the decision"
            - name: Replacing a critical spreadsheet with a proper tool
              description: |-
                ## Purpose
                Somewhere in most companies a spreadsheet with forty tabs runs pricing approvals, stock allocation or commission, and only its creator understands the formulas. Moving that process into a supported tool with validation, permissions and history removes a single point of failure without losing the flexibility users loved about the spreadsheet.

                ## Milestones
                1. The spreadsheet's inputs, formulas, outputs and users documented.
                2. The business rules hidden in its formulas written out and checked with its creator.
                3. A replacement running in parallel for one full cycle with matching results.
                4. The spreadsheet made read-only and archived.

                ## Notes
                Run both in parallel for at least one month-end or pay cycle. Differences found there are far cheaper than differences found by an auditor.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The spreadsheet's process runs in a supported tool that matched its results for one full cycle, and the spreadsheet is read-only and archived."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Sit with the spreadsheet's creator and list every tab and its purpose"
                - "Write out each formula's business rule in plain words"
                - "Run the replacement in parallel for one full cycle"
                - "Make the spreadsheet read-only once the results match"
            - name: Audit log for admin actions on customer data
              description: |-
                ## Purpose
                Admin consoles let staff refund, edit, impersonate or delete customer accounts, and without a record of who did what, a mistake or misuse cannot be traced. An audit log capturing the person, action, record, before and after values and time for every sensitive action answers 'who changed this?' in minutes rather than days.

                ## Milestones
                1. Every sensitive action in the tool listed with the security or privacy team.
                2. Each one logging person, action, record, old and new values and time.
                3. The log protected from editing by the people it records.
                4. A search screen or saved query that finds who changed a given record.
                5. A retention period agreed with the privacy or legal team.

                ## Notes
                Ask your privacy and legal advisers how long logs should be kept and what personal data they may hold; the answer varies by country and sector.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every listed sensitive admin action writes a tamper-resistant audit entry, and a test lookup of who changed a record returns the answer in under five minutes."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "List every sensitive action in the admin console with the security team"
                - "Agree which fields each audit entry must capture"
                - "Confirm the log retention period with the privacy team"
                - "Test the lookup by tracing a recent change to a real record"
            - name: Bulk edit and undo for high-volume queues
              description: |-
                ## Purpose
                Operators who process hundreds of similar records a day, such as refunds, address fixes or approvals, lose hours clicking into each one, and a single wrong click can be hard to reverse. Adding bulk selection with a preview of what will change, plus undo for a short window, cuts handling time and makes staff less wary of the tool.

                ## Milestones
                1. The three highest-volume repetitive actions identified from the logs.
                2. Bulk selection with a preview of the change built for the top action.
                3. An undo window or reversal path for every bulk change.
                4. Handling time compared before and after using the agreed measurement method.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The highest-volume action supports bulk selection with preview and undo, and median handling time for it has fallen against the measured baseline."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Find the three most repeated single-record actions in the logs"
                - "Sketch a bulk flow with a preview of changes for the top action"
                - "Agree with users how long undo should stay available"
                - "Measure handling time four weeks after release"
            - name: Automating a hand-off between two teams
              description: |-
                ## Purpose
                Many internal delays live in the gap between teams: sales emails a form to finance, finance re-keys it, operations waits for a reply. Replacing one manual hand-off with a structured request, automatic routing and a status both sides can see removes re-keying errors and ends the 'did you get my email?' messages.

                ## Milestones
                1. The hand-off mapped with every step, wait and re-key.
                2. Both teams agreeing the request fields and the status steps.
                3. The automated route live with status visible to both sides.
                4. Time from request to completion compared before and after.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "One cross-team hand-off runs through a structured request with visible status, and its median completion time is measurably lower than before."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Map one hand-off with every step, wait and re-key"
                - "Agree the request fields and statuses with both team leads"
                - "Measure the median time from request to completion before changing it"
                - "Launch the automated route and retire the old shared mailbox"
            - name: Self-service for the five most common requests
              description: |-
                ## Purpose
                A large share of tickets to tool owners and IT are routine: reset a locked account, add someone to a role, change a reference value. Letting staff or their managers handle the five most common ones themselves, with the right approvals built in, frees engineers and unblocks people in minutes rather than days.

                ## Milestones
                1. The five most frequent routine requests found from the queue.
                2. An approval rule agreed for each, such as manager approval for role changes.
                3. Self-service built or configured for at least three of them.
                4. Ticket volume for those request types compared after two months.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "At least three of the five most common routine requests are self-service with approvals, and their ticket volume has dropped after two months."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Count the most frequent request types in the last three months"
                - "Agree an approval rule for each of the top five"
                - "Configure self-service for the three simplest"
                - "Check ticket volume for the self-service request types @recurring(monthly:17)"
            - name: Accessibility review of the most used internal tool
              description: |-
                ## Purpose
                Internal tools often skip the accessibility checks customer products get, yet staff with low vision, dyslexia, motor impairments or colour blindness use them all day. Reviewing the most used tool against a recognised accessibility standard and fixing the worst barriers may be a legal duty to employees, and it is always a fairness one.

                ## Milestones
                1. The most used tool checked with an automated accessibility scanner.
                2. Keyboard-only and screen reader walkthroughs of the top three tasks.
                3. Staff who use assistive technology invited to describe their barriers.
                4. The worst barriers fixed and the rest scheduled.

                ## Notes
                WCAG is the standard most organisations reference. Ask HR or your legal team what applies to employee-facing systems in your country.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "The most used tool has a documented accessibility review against WCAG, with the highest-severity barriers fixed and the rest scheduled."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Run an automated accessibility scan on the tool's main screens"
                - "Complete the top three tasks using only the keyboard"
                - "Invite staff who use assistive technology to share their barriers"
                - "Fix the most severe barriers and schedule the rest"
            - name: Funding model for internal tools
              description: |-
                ## Purpose
                Internal tools paid for from whatever budget has room get cut first, while tools charged back to departments can turn every change into an invoice dispute. Deciding between a central budget, a per-user chargeback or a hybrid, with the trade-offs written down, settles who pays for growth and who gets to demand features.

                ## Milestones
                1. The current way each critical tool is funded written down.
                2. Central, chargeback and hybrid options described with their effect on behaviour.
                3. Finance and two department heads consulted.
                4. A funding model chosen and recorded for next year's budget.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A funding model for internal tools is chosen with written trade-offs, agreed by finance and included in next year's budget."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find out how each critical tool is funded today"
                - "Describe central, chargeback and hybrid funding with their trade-offs"
                - "Discuss the options with finance and two department heads"
                - "Record the chosen model before the next budget round"
            - name: Shadow tools amnesty
              description: |-
                ## Purpose
                Staff build their own tools when official ones fail them: macros, personal databases, automation flows running from someone's own account. An amnesty that invites people to declare these without blame finds the ones carrying real business risk, and the ones good enough to adopt properly.

                ## Milestones
                1. An amnesty announced by a sponsor with a clear no-blame message.
                2. Every declared tool logged with its creator, users and the data it touches.
                3. Each one marked adopt, replace, leave alone or retire.
                4. Tools holding customer or financial data moved under proper ownership.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Every tool declared in the amnesty is logged and marked adopt, replace, leave alone or retire, with those holding customer or financial data under a named owner."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the sponsor to announce a no-blame amnesty for home-made tools"
                - "Log each declared tool with its creator, users and data"
                - "Mark each one adopt, replace, leave alone or retire"
                - "Repeat the amnesty call to all staff @recurring(yearly)"
            - name: Pilot launch with one department
              description: |-
                ## Purpose
                Rolling a new internal tool out to everyone at once means every rough edge hits hundreds of people on the same morning. Launching first with one willing team for four to six weeks, with daily feedback and a clear bar for expanding, finds the gaps while they are cheap and creates colleagues who can vouch for the tool.

                ## Milestones
                1. A pilot team chosen with a willing lead and a typical workload.
                2. Entry criteria met: training done, support route agreed, rollback possible.
                3. Feedback collected daily for the first two weeks and weekly after.
                4. An expand, fix first or stop decision made against agreed criteria.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A pilot with one team ran for at least four weeks and ended in a recorded expand, fix or stop decision against criteria agreed beforehand."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Choose a pilot team with a willing lead and a typical workload"
                - "Write the criteria for expanding beyond the pilot"
                - "Collect feedback from the pilot team daily in the first two weeks"
                - "Hold the expand, fix or stop decision meeting at week six"
            - name: Cutover from the legacy tool
              description: |-
                ## Purpose
                Moving staff from an old tool to a new one usually comes down to a single dated event: data migrated, old system locked, new one live, support on standby. Planning the cutover as a rehearsed runbook, with a go or no-go check and a rollback route, stops a bad weekend turning into a lost week of operations.

                ## Milestones
                1. A cutover runbook with every step, owner and timing.
                2. A full rehearsal with migrated data completed and timed.
                3. A go or no-go checklist signed by the sponsor the day before.
                4. Floor support or a hotline staffed for the first three working days.
                5. The legacy tool locked to read-only with a decommission date set.

                ## Notes
                Start from the **Operational checklist** template. Avoid cutovers in the same week as month-end, payroll or a seasonal peak.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Cutover completed on the planned date after a timed rehearsal, with go or no-go signed off, three days of floor support and the legacy tool read-only."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Pick a cutover date clear of month-end, payroll and seasonal peaks"
                - "Write the runbook with every step, owner and timing"
                - "Rehearse the cutover with a full copy of migrated data"
                - "Staff floor support for the first three working days"
                - "Set a decommission date for the legacy tool"
            - name: Rollout training and new starter sessions
              description: |-
                ## Purpose
                Staff mostly learn internal tools from whoever sits next to them, which spreads shortcuts and mistakes in equal measure. Short task-based training for each role at rollout, plus a standing session for new starters, means everyone learns the intended way and the help desk hears fewer of the same questions.

                ## Milestones
                1. Task-based training for each main role, under 45 minutes each.
                2. A one-page quick reference card for the top tasks of each role.
                3. Every user in the rollout trained before go-live.
                4. A monthly session for new starters booked through HR onboarding.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every user in the rollout was trained before go-live, quick reference cards are published for each role, and new starters are trained monthly through onboarding."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Write a quick reference card for each role's top five tasks"
                - "Run task-based training sessions for each role before go-live"
                - "Ask HR to add the tool session to new starter onboarding"
                - "Run the new starter session for the month's joiners @recurring(monthly:2)"
            - name: Annual internal tools review with leadership
              description: |-
                ## Purpose
                Once a year leadership settles budgets and headcount, and internal tools are often missing from that conversation until something fails. An annual review presenting the portfolio, the hours saved, the risks carried and the investment asked for puts internal tools on the same footing as every other line of spending.

                ## Milestones
                1. A one-page portfolio summary with criticality, owner and health for each tool.
                2. The year's results against success measures gathered.
                3. Risks and unsupported systems listed with costed options.
                4. A funding request presented and the decision recorded.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An annual review with portfolio health, results, risks and a funding request presented to leadership, with the decision recorded, two years running."
                cadence: cyclic
              tasks:
                - "Book the annual review before the budget round closes @recurring(yearly)"
                - "Gather each tool's results against its success measures"
                - "List unsupported systems with a costed option for each"
                - "Record the funding decision and share it with tool owners"
            - name: Peak period readiness for operations tools
              description: |-
                ## Purpose
                Year-end close, seasonal sales peaks, student enrolment week or the annual benefits window push internal tools to volumes they see nowhere else in the year. A readiness check six weeks before, covering capacity, support cover, a change freeze and a fallback procedure, stops the busiest week becoming the week the tool falls over.

                ## Milestones
                1. The organisation's peak periods and their expected volumes listed.
                2. Capacity checked against last year's peak plus headroom.
                3. A change freeze agreed for the peak window.
                4. Support cover and a fallback procedure published for staff.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Before the last peak, capacity was checked against expected volume, a change freeze held and a fallback procedure was published to staff."
                cadence: cyclic
              tasks:
                - "List the peak periods and their volumes from last year"
                - "Start the peak readiness check six weeks before the main peak @recurring(yearly)"
                - "Agree a change freeze window with engineering and the sponsor"
                - "Publish a fallback procedure in case the tool is unavailable"
            - name: Engineer inheriting an unowned internal tool
              description: |-
                ## Purpose
                Engineers often end up maintaining an internal tool by accident: the original builder left and the alerts now point at them. Spending the first month learning who uses it, what breaks and what nobody dares touch, before agreeing to anything new, turns an inherited burden into something with a plan and a sponsor.

                ## Milestones
                1. The tool's code, hosting, credentials location and deployment steps documented.
                2. Its main users and the processes depending on it identified.
                3. The three biggest risks written down, each with a proposal.
                4. A conversation held with a manager or sponsor about time and scope.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Within a month of inheriting the tool, its deployment and dependencies are documented, its users known and its top three risks agreed with a sponsor."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Find where the code, hosting and credentials for the tool live"
                - "Deploy a trivial change to prove you can release it safely"
                - "List the people and processes that would stop if it failed"
                - "Take the top three risks and a time request to your manager"
            - name: Part-time ownership alongside a day job
              description: |-
                ## Purpose
                In many teams the tool owner is an operations lead or engineer who carries the role on top of a full job. A light routine of a protected slot each week, a simple queue and a monthly note to the sponsor keeps the tool moving without the role swallowing everything else in their week.

                ## Milestones
                1. A fixed weekly slot for ownership work protected in the calendar.
                2. Weekly ownership work reduced to triage, one decision and one round of replies.
                3. A monthly three-line note to the sponsor on progress and blockers.
                4. A written case for more time if the queue grows for three months running.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For three months the part-time owner kept a weekly ownership slot and sent a monthly sponsor note, with the queue size recorded each month."
                cadence: rolling
              tasks:
                - "Block two hours a week for ownership work and defend it"
                - "Send the sponsor a three-line progress and blockers note @recurring(monthly:28)"
                - "Record the queue size each month to show whether demand is growing"
            - name: Standardising one tool across regions and units
              description: |-
                ## Purpose
                Large organisations often run three versions of the same internal tool, one per region or business unit, each with its own fields and workarounds. Agreeing a common core with room for justified local variation, and moving units onto it one at a time, cuts duplicate engineering and makes group-wide reporting possible.

                ## Milestones
                1. Each unit's version compared field by field and workflow by workflow.
                2. A common core agreed by unit leads, with the allowed local variations listed.
                3. A migration order set, starting with the unit closest to the core.
                4. The first unit moved onto the shared version.

                ## Notes
                Differences driven by local law, tax rules or contracts are real; others are often habit. Ask each unit to justify every variation against a regulation, a contract or a measured need.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A common core for the tool is agreed by all unit leads with the allowed local variations listed, and the first unit runs on the shared version."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Compare each unit's version field by field in one sheet"
                - "Ask each unit to justify its variations with a reason"
                - "Agree the common core and allowed variations with unit leads"
                - "Set the order in which units will move onto the shared version"
            - name: Tool rationalisation after a merger
              description: |-
                ## Purpose
                After an acquisition, two companies' worth of CRMs, ticketing systems, admin consoles and finance tools run side by side, and staff on both sides fear losing the one they know. A rationalisation plan that inventories both estates, picks a target for each function and sequences the moves across the integration period avoids both chaos and years of paying for two of everything.

                ## Milestones
                1. Both companies' internal tools listed by business function.
                2. A target tool chosen for each function with the reasons recorded.
                3. A migration sequence aligned to the integration timeline.
                4. Staff from both companies represented in each selection.

                ## Notes
                Contract notice periods often decide the sequence more than technical fit, so pull every renewal date early.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A rationalisation plan names a target tool for every business function across both companies, with reasons, renewal dates and a migration sequence approved by the integration lead."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List both companies' tools by business function"
                - "Pull every renewal date and notice period from the contracts"
                - "Choose a target for each function with users from both sides"
                - "Sequence the migrations against the integration timeline"
            - name: Controls in finance and compliance team tools
              description: |-
                ## Purpose
                Tools used to approve payments, close the books or handle regulated records must meet control requirements other internal tools escape: segregation of duties, approvals that cannot be bypassed and evidence for auditors. Building those controls in alongside the finance and compliance teams, rather than retrofitting them after an audit finding, keeps the tool usable and the auditors satisfied.

                ## Milestones
                1. The controls the tool supports listed with the finance controller or compliance lead.
                2. Segregation of duties enforced, so nobody can both create and approve the same item.
                3. Approval steps that no role or configuration change can skip.
                4. Evidence reports that auditors can run themselves.

                ## Notes
                The controls themselves are set by your finance, risk or compliance team and your auditors. The owner's job is to build them faithfully and keep the evidence easy to produce.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each control assigned to the tool by finance or compliance is enforced in it, segregation of duties has been tested, and auditors can run the evidence reports themselves."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List the controls the tool supports with the finance controller"
                - "Test that no single role can both create and approve the same item"
                - "Build the evidence reports auditors ask for most often"
                - "Walk the internal auditor through the reports before year-end"
            - name: Tools for frontline and shift workers
              description: |-
                ## Purpose
                Warehouse staff, field engineers, store teams and ward staff use internal tools on shared devices, in gloves, with poor signal and between other tasks. Designing for those conditions, with large touch targets, fast sign-in on shared devices, offline capture and short screens, decides whether the tool gets used on the floor or ignored.

                ## Milestones
                1. Frontline conditions observed on at least two shifts: devices, signal, gloves, noise and time pressure.
                2. Sign-in on shared devices cut to a few seconds within security rules.
                3. The core task usable offline or on weak signal.
                4. Completion time for the core task measured on the floor.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The core frontline task works on shared devices with fast sign-in and weak signal, and its completion time has been measured on the floor."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Observe the tool in use on two real shifts"
                - "Note the devices, signal strength, gloves and time pressure you see"
                - "Agree a faster shared-device sign-in with the security team"
                - "Test the core task with no signal and fix what breaks"
            - name: Shared component kit for internal tools
              description: |-
                ## Purpose
                When every internal tool is built from scratch, each has its own tables, forms and permission checks, and staff relearn the basics in every one. A small shared kit of components, such as a filterable data table, validated form fields, an audit hook and a role check, makes new tools faster to build and consistent to use.

                ## Milestones
                1. The patterns repeated across three internal tools listed.
                2. Five shared components built with documentation and examples.
                3. Two tools using the kit for new screens.
                4. A named maintainer and a contribution route for the kit.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A documented kit of at least five shared components is used for new screens in two internal tools and has a named maintainer."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "List the patterns repeated across three internal tools"
                - "Build the data table and form components first"
                - "Write a usage example for each component"
                - "Review contribution requests and breaking changes to the kit @recurring(quarterly)"
            - name: Company-wide internal tools portfolio scoring
              description: |-
                ## Purpose
                With dozens of internal tools in play, leadership needs to know which to invest in, which to hold steady and which to retire. Scoring every tool on business value, user satisfaction, technical health and risk, on one page, turns a vague worry about having too many tools into a ranked list of investments and retirements.

                ## Milestones
                1. A scoring scheme for value, satisfaction, technical health and risk agreed.
                2. Every tool in the inventory scored with its owner.
                3. Each tool placed in invest, maintain or retire.
                4. Retirement plans started for the lowest-scoring tools.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every inventoried tool is scored on four agreed dimensions and placed in invest, maintain or retire, with retirement plans started for the lowest scorers."
                cadence: cyclic
              tasks:
                - "Agree the four scoring dimensions with the sponsors"
                - "Score each tool with its owner"
                - "Place each tool in invest, maintain or retire"
                - "Rescore the portfolio before the annual leadership review @recurring(yearly)"
            - name: Service level objectives for critical internal tools
              description: |-
                ## Purpose
                Everyone who depends on a tool needs to know how far they can rely on it, and engineers need to know when reliability work should beat new features. Agreeing service level objectives for availability, response time and support turnaround on each critical tool, and checking them monthly, makes those trade-offs explicit rather than argued after every outage.

                ## Milestones
                1. Objectives agreed for availability, key screen response time and support response.
                2. Each objective measured automatically where possible.
                3. A rule agreed that reliability work takes priority when an objective is missed.
                4. Objectives and recent results visible to users.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each critical tool has published objectives for availability, response time and support, measured monthly, with reliability work prioritised whenever one is missed."
                cadence: rolling
              tasks:
                - "Agree availability, response time and support targets with the sponsor"
                - "Set up automatic measurement for availability and response time"
                - "Review results against the objectives @recurring(monthly:27)"
                - "Publish the objectives and recent results inside the tool"
---

# Internal Tools Product Ownership

This area is for teams, engineers and enterprise owners who run the admin consoles, back-office apps and operations tools that staff depend on, and who want to treat them as products rather than side projects nobody owns. It starts with the foundations (an inventory, named owners, a user map, shadowing, a cost baseline, a charter, measures, one intake route, permissions and a data map), then the operating rhythm, the skills of observing and prioritising internal work, improvements and decisions from spreadsheet replacements to audit logs, dated pilots and cutovers, situations for inherited and part-time owners, regions, mergers, finance teams and frontline staff, and finally specialist work on shared components, portfolio scoring and service levels.

The rhythm is weekly for request triage and office hours, monthly for the roadmap review, usage check, incident review, champions session, release roundup, new starter training, self-service check, sponsor note and service levels, quarterly for the satisfaction pulse, access recertification, maintenance allowance and component kit review, and yearly for the inventory refresh, user map, amnesty, peak readiness, portfolio scoring and leadership review. The Product spec, Meeting notes, Compliance control, Metrics log, Purchase decision and Operational checklist templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
