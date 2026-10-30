---
id: software-engineering.engineering-on-call-rotation
name: Engineering On-Call Rotation
description: "A fair on-call rota with clear escalation, runbooks for every page, alerts worth waking up for, handovers that stick and real support for the engineers and managers carrying the pager."
category: business
version: 1.0.0
tags: [software-engineering, engineering-on-call-rotation, engineer, team, manager, on-call, paging, escalation, runbooks, alerting]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - meeting-notes
    - metrics-log
    - training-program
    - purchase-decision
  pillars:
    - name: Software Engineering
      emoji: "⚙️"
      description: "Building and running software: architecture and code quality, delivery and release, testing, infrastructure and reliability, incidents, technical debt, developer experience and engineering teams."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Engineering On-Call Rotation
          description: "Running a fair on-call schedule with runbooks, escalation paths, sensible alerting and support for the people woken up at night."
          projects:
            - name: Service ownership map for paging
              description: |-
                ## Purpose
                Pages go to the wrong person when nobody has written down which team owns which service, queue, cron job and third-party integration. A single table that lists every production component, its owning team and the rotation that gets paged for it ends the 3 a.m. guessing game. It is also the first thing an auditor or a new manager will ask for.

                ## Milestones
                1. Every production service, scheduled job and critical integration listed in one table.
                2. Each row assigned an owning team and a paging rotation, with no blanks.
                3. Orphaned components with no clear owner flagged and raised with the engineering manager.
                4. The map stored in the repository or wiki and linked from the paging tool.

                ## Notes
                Include the boring things: certificate renewals, DNS, the billing webhook. Unowned plumbing causes a surprising share of night pages.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A published ownership table covers every production component with a named team and rotation, and no row is left without an owner."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export the list of services and scheduled jobs from your deployment platform"
                - "Add an owning team and paging rotation column to every row"
                - "Raise each unowned component with the engineering manager by name"
                - "Link the finished map from the paging tool's service descriptions"
            - name: First fair primary and secondary rota
              description: |-
                ## Purpose
                A rota that lives in one person's head, or that quietly leans on the two engineers who never say no, burns people out within a quarter. Writing a schedule with a primary and a secondary, equal shift counts and a published calendar makes the load visible and shareable. Aim for at least five or six people per rotation so nobody is on more than one week in five or six.

                ## Milestones
                1. A list of eligible responders agreed, including who is excluded and why.
                2. Shift length, handover time and primary and secondary roles decided.
                3. Twelve weeks of rota published in the paging tool and the team calendar.
                4. Every responder confirmed they have seen their dates and raised clashes.

                ## Notes
                If you have fewer than four people, see the small-team project before committing to round-the-clock cover.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A twelve-week primary and secondary rota is live in the paging tool with shift counts that differ by no more than one between responders."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every engineer eligible for on-call and note any agreed exclusions"
                - "Choose the shift length and the weekday and hour of handover"
                - "Build twelve weeks of primary and secondary shifts in the paging tool"
                - "Ask each responder to confirm their dates and flag clashes within a week"
            - name: Severity levels and escalation policy
              description: |-
                ## Purpose
                When a page is not acknowledged, or the responder is out of their depth, the next step should be automatic rather than a frantic search through chat for someone awake. A short severity scale with response expectations, plus an escalation chain from primary to secondary to manager, removes that decision from the worst moment. Keep it to three or four levels people can recite.

                ## Milestones
                1. Three or four severity levels defined, each with an example and an expected acknowledgement time.
                2. An escalation chain of primary, secondary and a named manager configured with timeouts.
                3. The rules for when to wake someone else written in plain language.
                4. The policy published in the handbook and reflected exactly in the paging tool.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written severity scale and an escalation chain with timeouts match the live paging tool configuration, checked by a second engineer."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft three or four severity levels with one real past incident as an example for each"
                - "Set an acknowledgement timeout before a page escalates to the secondary"
                - "Name the manager or lead who sits at the end of the escalation chain"
                - "Ask a second engineer to compare the written policy with the tool settings"
            - name: Paging tool set-up and contact test
              description: |-
                ## Purpose
                A rota is worthless if the phone stays silent: wrong numbers, muted apps, do-not-disturb modes and expired accounts are the usual reasons a page goes unanswered. Configuring every responder's notification rules and sending each a real test page proves the chain works end to end. Repeat the test whenever someone changes phone or joins the rotation.

                ## Milestones
                1. Every responder has an active account with phone, push and SMS contact methods.
                2. Notification rules set so a high-urgency page breaks through do-not-disturb.
                3. A test page sent to each responder and acknowledged within five minutes.
                4. Failures fixed and retested before the person's next shift.

                ## Notes
                Start from the **Operational checklist** template so the same checks run for every new responder.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every responder on the rota has acknowledged a test page within five minutes, with the results recorded in a checklist."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every responder and the contact methods set in the paging tool"
                - "Send each responder a test page and note the time to acknowledge"
                - "Help anyone who missed it set a do-not-disturb override for the paging app"
                - "Re-test every responder's notification rules after phone or app changes @recurring(quarterly)"
            - name: On-call handbook for responders
              description: |-
                ## Purpose
                New responders want to know the basics before their first shift: how fast to acknowledge, whether they can go to the gym, what to carry, and when it is fine to wake someone. An eight to ten page handbook answers those questions once and stops each newcomer learning the rules by breaking them. Write it from the questions people actually asked in the last few months.

                ## Milestones
                1. A handbook covering expectations, response times, kit, connectivity, escalation and handover.
                2. A section on what is not expected, such as fixing root causes at night.
                3. Links to the ownership map, escalation policy and runbook index.
                4. The handbook read and signed off by two current responders and one newcomer.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A published on-call handbook covers expectations, kit, escalation and handover, reviewed by two current responders and one new one."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect the questions new responders asked in chat over the last three months"
                - "Ask the agent to draft handbook sections that answer each question"
                - "Add a short section on what responders are not expected to do at night"
                - "Have one newcomer read it and mark every unclear line"
            - name: Baseline of current paging load
              description: |-
                ## Purpose
                Teams argue about whether on-call is bad without numbers, and the loudest voice wins. Counting pages per shift, the share that arrive out of hours and how many were actionable over the last eight weeks gives an honest starting point. Every later improvement is measured against this baseline.

                ## Milestones
                1. Eight weeks of page history exported from the paging tool.
                2. Pages per shift, out-of-hours pages and pages per responder counted.
                3. Each page marked actionable or not, using the incident or ticket that followed.
                4. A one-page summary shared with the team and the engineering manager.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page summary of eight weeks of pages shows totals, out-of-hours share and actionable share, shared with the team."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Export the last eight weeks of incidents and pages from the paging tool"
                - "Count pages per shift and the share that fired between 10 p.m. and 7 a.m."
                - "Mark each page actionable or not actionable with a one-word reason"
                - "Share the summary with the team before the next planning meeting"
            - name: Runbooks for the ten most frequent alerts
              description: |-
                ## Purpose
                Most pages come from a handful of alerts, and a responder facing one of them at night should find a short, current page explaining what it means and what to try first. Writing runbooks for the top ten covers the majority of real pages with a few days of work. Link each runbook directly from its alert so nobody has to search.

                ## Milestones
                1. The ten alerts that paged most often in the last quarter identified.
                2. A runbook for each with what it means, how to confirm impact, first safe actions and when to escalate.
                3. Each runbook tested by someone other than its author against a past occurrence.
                4. Every one of the ten alerts carrying a direct link to its runbook.

                ## Notes
                Lead with the safest mitigation, not the full diagnosis. At night, a rollback that restores service beats an hour of investigation.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The ten most frequent alerts each link to a runbook that a second engineer has walked through against a real past occurrence."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Rank alerts by how often they paged in the last quarter and take the top ten"
                - "Write the first runbook using the template of meaning, impact check, mitigation, escalation"
                - "Ask a teammate to dry-run each runbook against a past occurrence"
                - "Add the runbook link to the alert's notification text"
            - name: On-call pay and time-off policy
              description: |-
                ## Purpose
                Carrying a pager costs evenings, weekends and sleep, and teams that treat it as free soon lose their most reliable engineers. A written policy for allowances, call-out pay or time off in lieu, agreed with HR and finance, removes resentment and private deals. Managers should own this rather than leaving engineers to negotiate shift by shift.

                ## Milestones
                1. Current practice documented, including any informal arrangements.
                2. Options for standby allowance, call-out payment and time off in lieu compared with HR.
                3. A written policy approved by HR and finance and published to the team.
                4. The first month of claims processed under the new policy without disputes.

                ## Notes
                Rules on standby time and working hours vary by country and contract. Agree the policy with HR and, where needed, employment counsel.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "An HR-approved on-call compensation and time-off policy is published, and one month of claims has been paid under it."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write down how on-call is currently rewarded, including informal deals"
                - "Book a meeting with HR to compare allowance and time-off options"
                - "Draft the policy and get written approval from HR and finance"
                - "Explain the policy to the team and how to log claims"
            - name: Production access readiness for responders
              description: |-
                ## Purpose
                Nothing wastes an incident like a responder who cannot log in: an expired VPN certificate, a missing database role or a hardware key left at the office. A readiness checklist covering every system a responder needs, tested before their first shift, turns access problems into daytime chores. Include a documented break-glass route for when normal access fails.

                ## Milestones
                1. A list of every console, cluster, database and dashboard a responder needs.
                2. Each responder's access tested against the list before their next shift.
                3. A break-glass procedure written, with how it is logged and reviewed afterwards.
                4. Gaps fixed through the normal access request process, not shared accounts.

                ## Notes
                Start from the **Operational checklist** template. Never solve access gaps by sharing credentials; that breaks audit trails and usually your security policy.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every responder has passed the access checklist and a documented break-glass procedure exists with logging."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every system a responder must reach during an incident"
                - "Ask each responder to log in to each system and tick it off"
                - "Write the break-glass steps with who approves and how use is logged"
                - "Raise access requests for every gap through the normal process"
            - name: Monday on-call handover routine
              description: |-
                ## Purpose
                Context is lost at every shift change unless the outgoing responder hands over open incidents, flapping alerts, risky deploys and anything half-mitigated. A fifteen-minute handover at a fixed time each week, backed by a short written note, means the incoming responder starts informed rather than surprised. It also creates a running record of what each week was like.

                ## Milestones
                1. A fixed weekly handover slot booked for outgoing and incoming responders.
                2. A handover note format agreed with open issues, noisy alerts, upcoming changes and follow-ups.
                3. Four consecutive handovers held with notes filed in one place.
                4. Follow-up items from handover notes landing in the team backlog.

                ## Notes
                Start from the **Meeting notes** template for the written note.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Handover notes exist for each of the last four shift changes, each listing open issues and follow-ups."
                cadence: rolling
              tasks:
                - "Book a recurring fifteen-minute handover slot at the shift change"
                - "Write the handover note with open issues, noisy alerts and upcoming risky changes @recurring(weekly:mon)"
                - "File the note where the next responder will look for it"
                - "Move any follow-up from the note into the team backlog"
            - name: Weekly alert review meeting
              description: |-
                ## Purpose
                Alerts multiply silently: each incident adds one and nobody ever removes them. A thirty-minute weekly review of every page from the last shift, asking whether it was real, urgent and actionable, is the single habit that keeps the pager quiet. Each review should end with at least one alert changed.

                ## Milestones
                1. A weekly thirty-minute slot with the last primary, secondary and one owner of the noisiest service.
                2. Every page from the shift classified as actionable, noise or duplicate.
                3. At least one alert tuned, downgraded or deleted per review.
                4. Decisions logged so the same alert is not debated twice.

                ## Notes
                Start from the **Meeting notes** template and keep a running decision log at the bottom.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly reviews are logged, each classifying every page and recording at least one alert change."
                cadence: rolling
              tasks:
                - "Pull the list of pages from the last shift before the meeting"
                - "Run the alert review and classify each page as actionable, noise or duplicate @recurring(weekly:thu)"
                - "Assign an owner and a date to each alert change agreed"
                - "Log each decision with the alert name and the reason"
            - name: Monthly paging load report
              description: |-
                ## Purpose
                Publishing a short report every month keeps on-call health in front of the people who can fund fixes, rather than only the people losing sleep. Track pages per shift, out-of-hours pages, time to acknowledge and the top noisy alerts against the baseline. Trends matter more than any single month.

                ## Milestones
                1. A report format with five numbers and a short commentary agreed.
                2. The first report published comparing the month with the baseline.
                3. Three consecutive reports showing a trend line for each number.
                4. The report discussed in the engineering leadership meeting at least once a quarter.

                ## Notes
                Start from the **Metrics log** template so each month sits in the same table.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive monthly paging reports are published with the same five measures compared with the baseline."
                cadence: rolling
              tasks:
                - "Choose the five measures the report will always include"
                - "Export last month's pages and publish the paging load report @recurring(monthly:5)"
                - "Add two sentences on what changed and why"
                - "Send the report to the engineering manager and the team channel"
            - name: Quarterly rotation fairness audit
              description: |-
                ## Purpose
                Swaps, sick days and holidays slowly tilt the rota so that a few people carry far more nights and weekends than the rest. A quarterly count of shifts, weekend shifts, out-of-hours pages and swaps per person shows whether the load is still shared. Rebalance the next quarter's rota from what the numbers show.

                ## Milestones
                1. Shifts, weekend shifts and out-of-hours pages counted per responder for the quarter.
                2. Anyone more than twenty per cent above the average identified.
                3. The next quarter's rota adjusted to rebalance the load.
                4. The audit summary shared with the team, without blaming anyone for swaps.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A per-person load table for the quarter exists and the next rota corrects any responder more than twenty per cent above average."
                cadence: cyclic
              tasks:
                - "Count shifts, weekend shifts and night pages per person for the quarter @recurring(quarterly)"
                - "Highlight anyone well above or below the team average"
                - "Adjust the next quarter's rota to even out the load"
                - "Share the table with the team and explain the changes"
            - name: Shift log kept during every shift
              description: |-
                ## Purpose
                Memory after a night of pages is unreliable, and the details that matter later (what fired, what you tried, what fixed it) evaporate by morning. A simple shift log with timestamps, kept by the primary, feeds the handover, the alert review and any later incident review. It takes a minute per page and saves an hour of reconstruction.

                ## Milestones
                1. A shift log format with time, alert, action taken and outcome.
                2. A log kept for four consecutive shifts by different responders.
                3. Logs filed alongside handover notes and searchable.
                4. At least one alert change traced back to a pattern seen in the logs.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive shifts each have a timestamped log of pages and actions, filed with the handover notes."
                cadence: rolling
              tasks:
                - "Create a shift log page with columns for time, alert, action and outcome"
                - "Add an entry within ten minutes of acknowledging each page"
                - "Close the shift log and attach it to the handover note @recurring(weekly:fri)"
                - "Search past logs for repeat alerts before the alert review"
            - name: Monthly runbook freshness check
              description: |-
                ## Purpose
                Runbooks rot as services change: commands point at renamed clusters, dashboards move and the mitigation step no longer exists. Checking a handful each month against the current system, and putting a last-checked date on each, keeps them trustworthy enough to follow half asleep. A runbook nobody trusts is worse than none.

                ## Milestones
                1. Every runbook carrying a last-checked date and an owner.
                2. Three to five runbooks checked against the live system each month.
                3. Broken commands, dead links and outdated steps fixed the same week.
                4. No linked runbook older than six months since its last check.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every alert-linked runbook shows an owner and a last-checked date within the past six months."
                cadence: rolling
              tasks:
                - "Add an owner and a last-checked date to the top of every runbook"
                - "Check the five oldest runbooks against the live system @recurring(monthly:18)"
                - "Fix broken commands and dead dashboard links the same week"
                - "Flag runbooks for retired alerts for archiving"
            - name: Shift swaps and holiday cover process
              description: |-
                ## Purpose
                Without a rule, swaps happen in private messages and the paging tool still pages the person on a beach. A simple process where swaps are agreed in a public channel and changed in the tool by the person giving up the shift keeps the schedule true. Publishing next month's rota early lets people plan around it.

                ## Milestones
                1. A written swap rule saying who changes the tool and where the swap is announced.
                2. Next month's rota published before the start of each month.
                3. Planned leave entered as a blocker before the rota is built.
                4. No page in a quarter sent to someone who had swapped out.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Swaps are recorded in the tool and a public channel, and no page in the quarter reached someone who had swapped out."
                cadence: rolling
              tasks:
                - "Write the swap rule in two sentences and pin it in the team channel"
                - "Collect planned leave from every responder for the coming month"
                - "Publish next month's rota and invite swap requests @recurring(monthly:24)"
                - "Check the paging tool matches every swap announced in the channel"
            - name: Monthly paging and escalation drill
              description: |-
                ## Purpose
                Escalation chains break quietly when a manager leaves, a schedule is deleted or an integration key expires. A scheduled monthly drill that sends a low-urgency test page through the full chain, during working hours, proves each step still works. Fixing a broken step on a Tuesday afternoon beats discovering it at 2 a.m.

                ## Milestones
                1. A test service in the paging tool that routes through the real escalation chain.
                2. A monthly drill run in working hours with the result recorded.
                3. Any broken step fixed and retested within the week.
                4. Six months of drill results showing the chain completed each time.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly drills are recorded with each escalation step acknowledged, and any failures fixed within a week."
                cadence: rolling
              tasks:
                - "Create a test service that follows the production escalation chain"
                - "Send a test page through the full escalation chain and record each step @recurring(monthly:12)"
                - "Fix and retest any step that failed"
                - "Tell the team the drill is coming so nobody treats it as real"
            - name: Interrupt queue triage during the shift
              description: |-
                ## Purpose
                Most of an on-call week is not pages but interrupts: support escalations, failed jobs, access requests and questions from other teams. Making the primary the owner of a single interrupt queue, triaged on a fixed day, protects everyone else's focus and shows how much toil the team carries. Counting it is the first step to automating it.

                ## Milestones
                1. One queue or label for non-urgent operational requests during the shift.
                2. The primary named as owner of the queue, with project work reduced that week.
                3. Each item tagged by type so toil can be counted.
                4. The three most common interrupt types proposed for automation or self-service.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All operational interrupts for a month are in one tagged queue, and the top three types have an automation proposal."
                cadence: rolling
              tasks:
                - "Create one queue or label for operational interrupts"
                - "Agree with the manager that the primary carries less project work that week"
                - "Triage the interrupt queue and tag each item by type @recurring(weekly:wed)"
                - "Write up the three most common interrupt types as automation candidates"
            - name: Shadow and reverse-shadow shifts for new responders
              description: |-
                ## Purpose
                Throwing someone onto the rota alone after a slide deck is how confidence is lost on the first bad night. One shadow shift watching an experienced primary, then one reverse-shadow shift where the newcomer leads with the experienced engineer behind them, builds judgement safely. Sign-off should depend on handling real pages, not on time served.

                ## Milestones
                1. A shadow shift completed alongside an experienced primary.
                2. A reverse-shadow shift completed with the newcomer leading every page.
                3. A short sign-off checklist covering access, escalation, the top runbooks and handover.
                4. The newcomer added to the solo rota with the date recorded.

                ## Notes
                Start from the **Training program** template to keep the sign-off steps the same for everyone.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The new responder has completed one shadow and one reverse-shadow shift and passed the written sign-off checklist."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pair the newcomer with an experienced primary for a shadow shift"
                - "Book the reverse-shadow shift for the following rotation"
                - "Walk through the sign-off checklist together at the end"
                - "Add the newcomer to the solo rota once signed off"
            - name: Incident commander role training
              description: |-
                ## Purpose
                In a serious incident the person typing commands should not also be coordinating people, updating stakeholders and deciding when to escalate. Training a few responders in the incident commander role, with its clear handoffs to an operations lead and a communications lead, keeps big incidents calm and short. This is about running the response, not the review afterwards.

                ## Milestones
                1. A one-page description of the incident commander, operations and communications roles.
                2. Three or more engineers trained through a walkthrough and a practice scenario.
                3. A rule for when an incident commander is declared, tied to severity.
                4. The role used in at least one real or simulated major incident.

                ## Notes
                Start from the **Training program** template if you run this as a cohort.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least three engineers have practised the incident commander role in a scenario, and the declaration rule is in the handbook."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write a one-page outline of the incident commander, operations and comms roles"
                - "Pick three engineers for the first training group"
                - "Run a ninety-minute practice scenario with each person taking the commander role"
                - "Add the rule for declaring a commander to the severity policy"
            - name: First fifteen minutes triage practice
              description: |-
                ## Purpose
                The first quarter hour of a page decides whether an incident stays small: confirm impact, check recent changes, choose a safe mitigation, decide whether to escalate. Practising that sequence against past alerts, under a timer, turns it into a reflex. Responders who rehearse it panic less and escalate earlier.

                ## Milestones
                1. A written five-step triage sequence for the first fifteen minutes.
                2. Five past alerts turned into short practice prompts.
                3. Each responder timed through at least two prompts.
                4. Common hesitations noted and fed back into the handbook.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every responder has completed two timed triage prompts and the five-step sequence is published in the handbook."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the five-step triage sequence on one card"
                - "Turn five past alerts into prompts with the dashboards as they looked at the time"
                - "Run a fifteen-minute timed triage prompt with one responder @recurring(monthly:15)"
                - "Add any repeated hesitation to the handbook's triage section"
            - name: Stakeholder updates during live incidents
              description: |-
                ## Purpose
                Support, sales and executives fill silence with guesses and direct messages that pull the responder away from the fix. A habit of short, regular updates on a fixed channel, with what is affected, what is being done and when the next update comes, buys the responder room to work. It is a skill, and it improves with templates and practice.

                ## Milestones
                1. An update template with impact, current action, next update time and contact.
                2. An agreed channel and audience list for each severity.
                3. Update intervals set by severity, such as every thirty minutes for the highest.
                4. Two responders have each written updates during a drill or real incident.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A stakeholder update template and interval rule are in the handbook, and two responders have used them in practice."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft a four-line update template with impact, action, next update and contact"
                - "Agree which channel and audience each severity updates"
                - "Set the update interval for each severity level"
                - "Practise writing updates during the next drill"
            - name: Quarterly on-call game day
              description: |-
                ## Purpose
                Practice beats theory: a game day where a facilitator replays a past incident, or plays the system while responders talk through what they would check, exposes gaps in runbooks, access and escalation without real customers suffering. Teams often call this a wheel of misfortune. Run it in working hours, with snacks, and with junior responders in the driving seat.

                ## Milestones
                1. A scenario prepared from a real past page with the timeline and dashboards.
                2. A ninety-minute session run with at least three responders.
                3. Every gap found written as an action with an owner.
                4. Actions from the previous game day checked before the next one.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: event-completion
                success_criteria: "A game day is held each quarter with a written list of gaps found, each with an owner, and last quarter's actions reviewed."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Pick a past page with a clear timeline for the scenario"
                - "Run a ninety-minute on-call game day with a junior responder leading @recurring(quarterly)"
                - "Write each gap found as an action with an owner"
                - "Check last quarter's game day actions before the session starts"
            - name: Safe mitigation moves every responder knows
              description: |-
                ## Purpose
                At night the goal is to stop the bleeding, and most teams have the same four or five safe moves: roll back the last deploy, switch off a feature flag, scale up, fail over, or shed load. Making sure every responder can perform each one, with the commands written down and practised in a staging environment, shortens incidents more than any diagnostic skill. Diagnosis can wait for daylight.

                ## Milestones
                1. The team's safe mitigation moves listed with exact commands or buttons.
                2. Each move practised by every responder in a non-production environment.
                3. Permissions for each move confirmed for every responder.
                4. The list printed at the top of the runbook index.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every responder has performed each listed mitigation move in a non-production environment, recorded on a sign-off sheet."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the four or five mitigation moves the team trusts most"
                - "Write the exact command or console steps for each move"
                - "Schedule a staging session where each responder performs every move"
                - "Put the list at the top of the runbook index"
            - name: Handling pages for unfamiliar services
              description: |-
                ## Purpose
                Shared rotations mean you will be paged for a service you have never touched, and freezing is the natural response. A practised approach (read the ownership entry, open the runbook, check recent deploys, reach the owning team's escalation) makes an unknown service manageable. Each responder should try it on two services they do not normally work on.

                ## Milestones
                1. A short checklist for approaching an unfamiliar service during a page.
                2. Each responder has walked through two unfamiliar services using only the checklist.
                3. Missing information found during those walkthroughs added to service entries.
                4. The owning team's escalation contact verified for every shared-rotation service.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every responder on a shared rotation has walked through two unfamiliar services with the checklist, and gaps found are fixed."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write a six-line checklist for approaching an unfamiliar service"
                - "Assign each responder two services they have never worked on"
                - "Have them find the runbook, dashboard and recent deploys using only the checklist"
                - "Add any missing information they hit to the service entries"
            - name: Noisy alert clean-up campaign
              description: |-
                ## Purpose
                If more than half of pages need no action, responders learn to ignore the pager, and the one real page gets missed. A focused clean-up that deletes, downgrades or fixes the noisiest alerts, using the baseline, typically cuts page volume sharply within a month or two. Every alert that pages a human must be urgent, real and actionable.

                ## Milestones
                1. The twenty noisiest alerts ranked by pages and by out-of-hours pages.
                2. Each one deleted, downgraded to a ticket, retuned or fixed at the source.
                3. Page volume compared with the baseline after four weeks.
                4. A rule agreed that new paging alerts need a runbook and an owner.
              priority: high
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The twenty noisiest alerts have each been deleted, downgraded, retuned or fixed, with page volume measured against the baseline."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Rank alerts by total pages and night pages over the last eight weeks"
                - "Decide delete, downgrade, retune or fix for each of the top twenty"
                - "Pick the noisiest remaining alert and fix or delete it @recurring(monthly:9)"
                - "Add the runbook and owner rule for new paging alerts to the handbook"
            - name: Paging on user impact, not on causes
              description: |-
                ## Purpose
                Alerts on high CPU, a full queue or a restarting pod page people for things that may not hurt anyone, while a broken checkout can go unnoticed. Moving the pager to symptoms customers feel (errors, latency, failed sign-ups or payments) and sending cause alerts to dashboards or tickets cuts noise and catches real problems. This is a decision about what wakes people up, not about how metrics are collected.

                ## Milestones
                1. Every current paging alert labelled as a symptom or a cause.
                2. Symptom alerts defined for the main user flows of each service.
                3. Cause alerts moved to non-paging notifications where a symptom alert covers them.
                4. The change reviewed after a month for any missed incidents.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each main user flow has a symptom-based paging alert, and cause alerts covered by it no longer page out of hours."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Label every paging alert as symptom or cause in a shared sheet"
                - "Name the user flows each service must protect"
                - "Agree with service owners which cause alerts stop paging"
                - "Review a month later whether any incident went unpaged"
            - name: Choosing a paging and scheduling tool
              description: |-
                ## Purpose
                Teams outgrow chat notifications and shared phones, or find their current tool too expensive for what they use. Comparing two or three paging tools on escalation features, scheduling, phone reliability, integrations and price per responder makes the choice defensible. Trial the shortlist with real alerts before signing.

                ## Milestones
                1. Requirements listed, including schedules, escalation, overrides, integrations and reporting.
                2. Three tools shortlisted and scored on the same criteria.
                3. A two-week trial of the top choice with real alert routing.
                4. A decision recorded with cost per responder and a migration plan.

                ## Notes
                Start from the **Purchase decision** template.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written tool decision scores three options on the same criteria and includes trial results and a cost per responder."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write the requirements list with must-haves marked"
                - "Score three paging tools against the list"
                - "Run a two-week trial routing real alerts to the top choice"
                - "Record the decision, cost and migration plan"
            - name: Follow-the-sun or single-timezone cover
              description: |-
                ## Purpose
                Teams spread across regions can hand the pager across time zones so nobody covers nights, but only if each region has enough trained people and a clean handover. Comparing that model with single-timezone cover plus night allowance, honestly, saves a reorganisation that fails in month two. The decision depends on headcount, not ambition.

                ## Milestones
                1. Responders counted per region with their working hours mapped.
                2. Both models costed for headcount, handovers and night pages avoided.
                3. Risks listed, such as thin regional cover and lost context at handover.
                4. A decision recorded with the conditions that would trigger a revisit.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision compares follow-the-sun with single-timezone cover using headcount per region and lists revisit triggers."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Map each responder's region and working hours on one chart"
                - "Count how many trained responders each region could supply"
                - "Compare night pages avoided against extra handovers"
                - "Write up the decision and what would make you revisit it"
            - name: Shift length and pattern decision
              description: |-
                ## Purpose
                Week-long shifts are simple but brutal after a bad night, while daily or split weekday and weekend shifts spread the load at the cost of more handovers. Testing a pattern against your real page volume, team size and time zones, then asking responders, produces a rota people can sustain. Revisit it when the team or page volume changes.

                ## Milestones
                1. Three candidate patterns described, such as weekly, split weekday and weekend, and twelve-hour.
                2. Each pattern checked against team size and current page volume.
                3. Responders surveyed on preference and constraints.
                4. A chosen pattern trialled for one full cycle and kept or changed.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A shift pattern is chosen from three written options, trialled for one cycle and confirmed with responder feedback."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Describe three shift patterns in a short comparison table"
                - "Check how many shifts per person each pattern gives your team size"
                - "Survey responders on preferences and constraints"
                - "Trial the chosen pattern for one cycle and review it"
            - name: Routing non-urgent alerts to working hours
              description: |-
                ## Purpose
                Disk at seventy per cent, a certificate expiring in three weeks or a slow batch job matter, but not at 3 a.m. Splitting alerts into high urgency that pages now and low urgency that waits for working hours, then creating a ticket automatically, protects sleep without losing the signal. The secondary should never be woken for a low-urgency alert.

                ## Milestones
                1. Every alert assigned high or low urgency.
                2. Low-urgency alerts configured to notify only in working hours.
                3. Low-urgency alerts creating tickets in the team queue automatically.
                4. A month with no out-of-hours page from a low-urgency alert.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All alerts carry an urgency level, low-urgency alerts raise tickets in working hours, and none paged out of hours in a month."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Mark each alert as high or low urgency with the owning team"
                - "Set urgency rules so low-urgency alerts notify only in working hours"
                - "Connect low-urgency alerts to the team ticket queue"
                - "Check a month later that no low-urgency alert paged at night"
            - name: Alert grouping and deduplication rules
              description: |-
                ## Purpose
                One database failure can fire forty alerts across a dozen services, turning a single problem into a storm of phone calls. Grouping related alerts into one incident and suppressing dependants while the root alert is open lets the responder think. Get the grouping wrong and you hide real problems, so test it against past storms.

                ## Milestones
                1. The three worst alert storms of the last six months reconstructed.
                2. Grouping and dependency rules drafted for each storm pattern.
                3. Rules tested by replaying past alerts or reviewing them with the tool's preview.
                4. The next real storm producing one or two pages rather than dozens.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Grouping rules exist for the three worst past alert storms and a replay shows each storm producing no more than two pages."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Find the three biggest alert storms in the paging history"
                - "Identify the root alert and its dependants in each storm"
                - "Draft grouping and suppression rules and preview them against past alerts"
                - "Review the next storm to see how many pages it produced"
            - name: Auto-remediation for repeat pages
              description: |-
                ## Purpose
                Some pages have the same fix every time: restart the stuck worker, clear the temp directory, rotate the log. If a human follows the same runbook step more than a few times a month, a script can do it and tell the team afterwards. Keep a human in the loop for anything destructive, and page only if the automation fails.

                ## Milestones
                1. Repeat pages with an identical manual fix listed from shift logs.
                2. One or two safe fixes automated with logging and a notification.
                3. A rule that automation pages a human if the fix fails or repeats too often.
                4. Page volume for those alerts measured a month later.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "At least one repeat page is handled by logged automation that pages a human on failure, with a month of before-and-after counts."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Search shift logs for pages fixed by the same manual step"
                - "Pick the safest repeat fix and script it with logging"
                - "Add a fallback that pages a human if the fix fails twice"
                - "Compare page counts for that alert after a month"
            - name: Your first solo week as primary
              description: |-
                ## Purpose
                The first week alone with the pager is when most people decide whether on-call is bearable. Preparing for it deliberately (access checked, runbooks skimmed, the secondary briefed, evenings kept light) turns it from dread into a manageable week. Afterwards, write down what surprised you while it is fresh.

                ## Milestones
                1. Access and test page confirmed in the days before the shift.
                2. The top runbooks and the escalation policy reread.
                3. A short call with the secondary agreeing how to reach each other.
                4. A list of surprises and gaps sent to the team after the shift.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first solo shift is completed with access tested beforehand and a written list of surprises shared with the team afterwards."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Send yourself a test page and confirm it wakes the phone"
                - "Reread the top runbooks and the escalation policy"
                - "Agree with your secondary how and when to pull them in"
                - "Send the team your list of surprises after the shift ends"
            - name: Peak season and launch cover plan
              description: |-
                ## Purpose
                Big launches, sales events and seasonal peaks bring more traffic, more risky changes and more pages at the worst time. A cover plan with reinforced shifts, a change freeze window, named service owners on standby and agreed escalation to vendors keeps the team rested and ready. Start planning six to eight weeks ahead.

                ## Milestones
                1. The peak dates and the services most at risk identified.
                2. Extra responders scheduled with secondary and standby cover.
                3. A change freeze window agreed with product and release owners.
                4. A peak readiness review held a week before, with open risks listed.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written peak cover plan with reinforced shifts, a freeze window and named standby owners is agreed a week before the peak."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Mark the peak dates and list the services that will see the most load"
                - "Schedule reinforced primary, secondary and standby cover for the peak"
                - "Agree the change freeze window with product and release owners"
                - "Hold a readiness review one week before the peak"
            - name: Holiday period on-call rota
              description: |-
                ## Purpose
                The end-of-year holidays and major public holidays are when the most people want leave and the fewest are around to help. Building the holiday rota early, with volunteers first, extra pay or time off honoured, and fair rotation year on year, avoids last-minute conscription. Keep a record of who covered which holidays so next year starts fair.

                ## Milestones
                1. The holiday dates that need cover listed for every region.
                2. Volunteers collected first, then gaps filled using last year's record.
                3. Holiday rates or time off confirmed under the on-call policy.
                4. The rota published at least six weeks before the first holiday.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The holiday rota is published six weeks ahead and nobody covers the same major holiday as last year unless they volunteered."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "Ask for holiday cover volunteers and build the holiday rota @recurring(yearly)"
                - "Check last year's record so the same people do not cover again"
                - "Confirm holiday pay or time off with HR"
                - "Publish the rota and add it to the paging tool"
            - name: Annual on-call health survey
              description: |-
                ## Purpose
                Numbers show load, but only people can tell you whether on-call is hurting sleep, relationships or plans to stay. A short anonymous survey once a year, asking about stress, sleep, fairness, support and readiness, gives managers a signal before resignations do. Share the results and the actions taken, or nobody will answer next year.

                ## Milestones
                1. A survey of ten questions or fewer, anonymous and repeatable each year.
                2. A response rate of at least seventy per cent of responders.
                3. Results shared with the team alongside last year's.
                4. Three actions chosen from the results, each with an owner.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An anonymous survey reaches seventy per cent of responders and its results are shared with three owned actions."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "Write ten or fewer questions on load, sleep, fairness and support"
                - "Run the anonymous on-call health survey and share results with last year's @recurring(yearly)"
                - "Pick three actions from the results and name an owner for each"
                - "Tell the team what changed because of their answers"
            - name: Six-month rotation retrospective
              description: |-
                ## Purpose
                Half a year after setting up or changing the rotation, enough has happened to judge it: pages, swaps, burnout signs and near-misses. A dedicated retrospective, separate from incident reviews, asks whether the rota, escalation and tooling are working and what to change next. It is the point to renegotiate rather than quietly endure.

                ## Milestones
                1. Six months of paging reports, fairness audits and handover notes gathered.
                2. A ninety-minute retrospective held with every responder invited.
                3. Keep, change and stop lists agreed.
                4. No more than five changes chosen, each with an owner and a date.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A six-month rotation retrospective is held and produces at most five changes, each with an owner and date."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Gather six months of paging reports and fairness audits"
                - "Book a ninety-minute retrospective and invite every responder"
                - "Agree keep, change and stop lists in the session"
                - "Limit the follow-up to five changes with owners and dates"
            - name: On-call for a team of three or four
              description: |-
                ## Purpose
                Small teams cannot run round-the-clock cover without someone on call every third week, which is not sustainable. Narrowing what pages out of hours to the few things that truly cannot wait, offering best-effort cover outside a defined window, or pooling with a neighbouring team are the honest options. Decide which, and tell customers or stakeholders what to expect.

                ## Milestones
                1. The services and failures that truly need out-of-hours response listed.
                2. A choice made between business-hours cover, best-effort nights or a pooled rotation.
                3. Expected response times communicated to stakeholders in writing.
                4. A headcount threshold agreed for moving to full cover.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A small team has a written cover model with stated response times and a headcount threshold for full cover."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the failures that genuinely cannot wait until morning"
                - "Compare business-hours cover, best-effort nights and pooling with another team"
                - "Write down the response times stakeholders can expect"
                - "Agree the headcount at which you move to full cover"
            - name: On-call around parenting and caring duties
              description: |-
                ## Purpose
                School runs, night feeds and caring for a relative make some shifts far harder than others, and a rigid rota can push good engineers out. Adjustments such as preferred shift days, a guaranteed secondary, or swapping nights for extra daytime cover keep parents and carers in the rotation fairly. The aim is equal load, not identical shifts.

                ## Milestones
                1. A private way for responders to share constraints with their manager.
                2. Adjustment options listed that keep the overall load equal.
                3. Agreed adjustments reflected in the rota without public explanation.
                4. A check after one quarter that adjustments have not shifted load onto others.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "Responders with caring duties have written adjustments in place and the next fairness audit shows overall load still balanced."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Offer each responder a private chat about caring or family constraints"
                - "List adjustment options that keep total load equal"
                - "Build agreed adjustments into the next rota quietly"
                - "Check the next fairness audit for load moved onto others"
            - name: Supporting responders as a manager
              description: |-
                ## Purpose
                Managers who never feel the pager tend to underestimate it, and responders notice. Checking in with each week's primary, joining the escalation chain, covering the occasional shift and protecting project time after a rough night shows the rotation is taken seriously. It also gives you first-hand data for budget and headcount arguments.

                ## Milestones
                1. The manager added to the escalation chain at a sensible level.
                2. A brief weekly check-in with the current primary.
                3. Project commitments reduced for the primary during their shift week.
                4. At least one shift or secondary slot covered by the manager each quarter.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "The manager holds a weekly check-in with each primary and has covered at least one on-call slot in the quarter."
                cadence: rolling
              tasks:
                - "Add yourself to the escalation chain after the secondary"
                - "Check in with this week's primary about load and sleep @recurring(weekly:tue)"
                - "Reduce the primary's sprint commitments during their shift week"
                - "Volunteer for one secondary slot this quarter"
            - name: Bringing an inherited service into rotation
              description: |-
                ## Purpose
                After a reorganisation or acquisition, a team often inherits a service it has never run, along with its alerts and its history. Adding it to the pager before anyone understands it guarantees miserable nights. A readiness gate covering ownership, alerts, runbooks, access and a knowledge transfer from the old owners makes the handover deliberate.

                ## Milestones
                1. A readiness checklist agreed with the outgoing owners.
                2. Alerts reviewed and pruned before they route to the new rotation.
                3. Runbooks for the service's top alerts written or updated.
                4. A dated cutover with the old owners on secondary for the first two weeks.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The inherited service passes a written readiness checklist before paging the new rotation, with old owners as secondary for two weeks."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Agree a readiness checklist with the outgoing owners"
                - "Review and prune the service's alerts before rerouting them"
                - "Run two knowledge transfer sessions on the service's past incidents"
                - "Set a cutover date with the old owners on secondary for two weeks"
            - name: Founder as the only on-call engineer
              description: |-
                ## Purpose
                In an early startup the founder or first engineer often holds the pager every night by default, which is fine for a month and corrosive for a year. Defining what must page, what can wait, which vendor support plans cover the gaps and when the first hire joins the rota keeps the product up without wrecking the person. Write it down so a cofounder or investor can see the plan.

                ## Milestones
                1. A short list of failures that justify being woken, with everything else routed to email.
                2. Managed services and vendor support checked for what they cover at night.
                3. A status page or customer message prepared for slow responses.
                4. A date or headcount at which a second responder joins the rota.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page solo on-call plan lists what pages, what vendors cover and when a second responder will join."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the three or four failures worth waking up for"
                - "Route every other alert to email or a morning digest"
                - "Check what your hosting and database providers support at night"
                - "Write down when the next hire joins the rota"
            - name: Rest after a rough night
              description: |-
                ## Purpose
                An engineer who was up from 2 a.m. to 5 a.m. and then sits in a 9 a.m. planning meeting is a safety risk to production and to themselves. A clear rule, such as a late start or a rest morning after a set amount of night work, with the manager covering their commitments, makes recovery normal rather than heroic. Tired people make the next incident worse.

                ## Milestones
                1. A rest rule written into the handbook with a clear threshold.
                2. A way for the responder to signal they are taking it, without asking permission.
                3. Managers covering or moving the responder's meetings that day.
                4. Rest mornings counted in the monthly paging report.

                ## Notes
                If someone is regularly too tired to work safely, that is a load problem to fix, not a personal failing.
              priority: high
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A rest rule with a stated night-work threshold is in the handbook and rest mornings taken are counted each month."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Agree the night-work threshold that triggers a rest morning"
                - "Write the rule into the handbook in two sentences"
                - "Set up a simple channel message for signalling a rest morning"
                - "Add rest mornings taken to the monthly paging report"
            - name: Tiered support and engineering escalation
              description: |-
                ## Purpose
                When customer support, an operations desk and engineering each have their own idea of what counts as urgent, engineers get paged for password resets and real outages wait in a queue. Defining tiers, what each tier handles, the criteria for escalating to the engineering pager and the information required with each escalation stops both failures. Agree it jointly with the support lead.

                ## Milestones
                1. Tiers defined with what each handles and its hours.
                2. Escalation criteria to the engineering pager written with examples.
                3. A required-information form for every escalation, such as customer, impact and steps tried.
                4. A quarterly review of escalations with the support lead.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "Support and engineering have a jointly agreed tier and escalation document, and escalations are reviewed together each quarter."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Meet the support lead to list what each tier handles today"
                - "Write escalation criteria to the engineering pager with real examples"
                - "Create a required-information form for every escalation"
                - "Review last quarter's escalations with the support lead @recurring(quarterly)"
            - name: Contractual response times and on-call evidence
              description: |-
                ## Purpose
                Enterprise contracts and some regulated sectors promise response times, such as acknowledging a critical issue within fifteen minutes around the clock. If the rota, escalation policy and paging records cannot prove that promise, the gap shows up in an audit or a customer dispute. Mapping each commitment to the rota and keeping evidence of acknowledgement times closes it.

                ## Milestones
                1. Every contractual response commitment listed with the customer and severity.
                2. Each commitment mapped to a rotation and escalation policy that can meet it.
                3. Monthly evidence of acknowledgement times kept for the commitments.
                4. Any commitment the rota cannot meet raised with the account owner and legal.

                ## Notes
                Interpreting contract terms is for your legal or commercial team; this project gathers the facts they need.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "Every contractual response commitment maps to a rotation that can meet it, with monthly acknowledgement evidence on file."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the commercial team for every contract with response time commitments"
                - "Map each commitment to the rotation and escalation that covers it"
                - "Set up a monthly export of acknowledgement times for those services"
                - "Raise any commitment the rota cannot meet with the account owner"
            - name: On-call measures dashboard
              description: |-
                ## Purpose
                Once the basics are in place, a small set of measures watched continuously tells you where the rotation is heading: time to acknowledge, pages per shift, night pages per person, actionable share and escalations to the secondary. Putting them on one dashboard that refreshes from the paging tool replaces hand-built reports and makes regressions visible within days.

                ## Milestones
                1. Five on-call measures defined with exact formulas.
                2. A dashboard fed automatically from the paging tool's data or API.
                3. Thresholds marked that prompt a conversation, such as more than two night pages per shift.
                4. The dashboard reviewed at the start of each monthly report.

                ## Notes
                Start from the **Metrics log** template if you keep a monthly snapshot beside the live dashboard.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A self-updating dashboard shows five defined on-call measures with thresholds, reviewed alongside each monthly report."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write exact formulas for the five on-call measures"
                - "Connect the paging tool's export or API to a dashboard"
                - "Mark the thresholds that should prompt a team conversation"
                - "Snapshot the dashboard into the metrics log @recurring(monthly:28)"
            - name: Vendor and cloud provider escalation contacts
              description: |-
                ## Purpose
                Some incidents can only be fixed by someone else: the cloud provider, the payment processor, the DNS host. Knowing your support tier, the fastest way to open a critical ticket, account numbers and who in the company is authorised to raise it saves the first half hour of a vendor-caused outage. Keep the list where the responder can reach it without production access.

                ## Milestones
                1. Every critical vendor listed with support tier and hours.
                2. The steps to open a highest-severity ticket written for each.
                3. Responders added as authorised contacts where the vendor requires it.
                4. The list stored somewhere reachable during a full outage.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A vendor escalation list covers every critical provider with ticket steps and authorised contacts, stored outside production systems."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every vendor whose outage would page your team"
                - "Write the steps to open a top-severity ticket with each"
                - "Add current responders as authorised support contacts"
                - "Check every vendor contact and support tier is still current @recurring(quarterly)"
            - name: Platform versus product team on-call model
              description: |-
                ## Purpose
                As an organisation grows, someone has to decide whether product teams carry the pager for what they build or a central platform or operations team carries it for everyone. Each model has real trade-offs in ownership, expertise and load. Writing down the current model, its pain points and the boundary between teams avoids two rotations both assuming the other will answer.

                ## Milestones
                1. The current ownership model described, including where it is unclear.
                2. Options compared for ownership, expertise, load and incentives to fix things.
                3. A boundary agreed between platform and product rotations.
                4. The boundary reflected in the ownership map and escalation policies.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written on-call ownership model defines the boundary between platform and product rotations and matches the ownership map."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Describe today's on-call ownership model in one page"
                - "List incidents in the last year where ownership was unclear"
                - "Compare central and team-owned on-call against those incidents"
                - "Update the ownership map with the agreed boundary"
            - name: Working-time rules and on-call compliance
              description: |-
                ## Purpose
                Standby and call-out time can count as working time under some employment laws and collective agreements, with limits on hours and required rest. Large and international organisations need to check that their rota respects each country's rules and keep the records to show it. The engineering manager gathers the rota facts; HR and employment counsel decide what applies.

                ## Milestones
                1. Each country or contract type in the rotation listed.
                2. The relevant working-time and rest rules confirmed by HR or counsel for each.
                3. The rota checked against those rules, with breaches fixed.
                4. Records of shifts and call-outs retained in the form HR requires.

                ## Notes
                This is a fact-gathering project. Do not interpret labour law yourself.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "HR has confirmed the working-time rules for every country in the rotation and the rota has been checked against them."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "List the countries and contract types of everyone on the rotation"
                - "Ask HR which working-time and rest rules apply to each"
                - "Check the current rota against those rules and fix any breach"
                - "Re-check the rota against working-time rules with HR @recurring(yearly)"
---

# Engineering On-Call Rotation

On-call is the promise a team makes that someone competent will answer when production breaks, and it only stays sustainable when the rota is fair, the pages are real and the person holding the pager has what they need. These projects start with the foundations (service ownership, the first rota, escalation, the paging tool, a handbook, runbooks and access), move through the weekly and monthly routines that keep the rotation healthy, then responder skills, the alerting and scheduling decisions worth making on purpose, dated events such as peak season and holiday cover, situations for small teams, parents, managers and founders, and specialist work like tiered support and contractual response times.

What repeats is a Monday handover, a Wednesday sweep of the interrupt queue, a Thursday alert review, monthly paging reports, paging tests, runbook checks and rota publication, a quarterly fairness audit and game day, and a yearly holiday rota and health survey. The Operational checklist, Meeting notes, Metrics log, Training program and Purchase decision templates pair with the projects that need a record. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
