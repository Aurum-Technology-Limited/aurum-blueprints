---
id: software-engineering.incident-postmortems
name: Incident Postmortems
description: "A postmortem policy, a blameless template, honest timelines, contributing factor analysis and action items that really close, plus the review rhythms that turn every outage into a lesson for engineers, teams and managers."
category: business
version: 1.0.0
tags: [software-engineering, incident-postmortems, engineer, team, manager, blameless, root-cause-analysis, action-items]
author: Aurum Technology
starter_structure:
  templates:
    - remediation-plan
    - meeting-notes
    - metrics-log
    - reading-queue
    - purchase-decision
    - risk-register
  pillars:
    - name: Software Engineering
      emoji: "⚙️"
      description: "Building and running software: architecture and code quality, delivery and release, testing, infrastructure and reliability, incidents, technical debt, developer experience and engineering teams."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Incident Postmortems
          description: "Writing blameless reviews after production incidents that explain what happened, why, and which concrete actions will prevent it happening again."
          projects:
            - name: Postmortem policy with clear severity triggers
              description: |-
                ## Purpose
                Without a written rule, postmortems happen for the incidents that embarrassed someone senior and get skipped for the quiet ones that will recur. A one-page policy that says which severities, durations, data incidents and customer-visible failures require a review, and how soon, removes the argument every time. Agree it before the next outage, while nobody is defending a particular incident.

                ## Milestones
                1. A list of triggers agreed, covering severity level, customer impact, data loss or exposure, and any incident a responder asks to review.
                2. Time limits set for a first draft and for the review meeting after each qualifying incident.
                3. An explicit statement that postmortems are blameless and are not used in performance reviews.
                4. The policy published where every engineer and incident commander can find it in two clicks.

                ## Notes
                Include a trigger that lets any engineer request a review. Some of the most useful postmortems come from incidents that never reached a high severity.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A published one-page postmortem policy lists the review triggers, the draft and meeting deadlines and the blameless commitment."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the last ten incidents and mark which ones got a written review"
                - "Draft review triggers by severity, customer impact and data exposure"
                - "Set the draft and review meeting deadlines in business days"
                - "Publish the policy and link it from the incident response guide"
            - name: Blameless postmortem template for the team
              description: |-
                ## Purpose
                A blank page produces wildly different write-ups: one engineer writes three lines, another writes a novel with no actions. A shared template with fixed sections for summary, impact, timeline, contributing factors, what went well, where we got lucky and action items makes every postmortem comparable and much faster to start. Write prompts into each section so a tired author knows what good looks like.

                ## Milestones
                1. A template with sections for summary, impact, detection, timeline, contributing factors, what went well, where we got lucky and actions.
                2. Short prompts under each heading that show what to write and what to avoid.
                3. The template tried on one past incident and trimmed where sections stayed empty.
                4. The final template stored where new postmortems are created by copying it.

                ## Notes
                Keep a section called where we got lucky. It surfaces the near misses inside an incident that would have made it far worse.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A postmortem template with prompted sections has been tested on one past incident and is the default starting point for new reviews."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect three past postmortems and note which sections were useful"
                - "Ask the agent to draft a template with prompts from those examples"
                - "Fill the draft template for one past incident and cut empty sections"
                - "Save the template where authors start every new postmortem"
            - name: One searchable home for every postmortem
              description: |-
                ## Purpose
                Postmortems scattered across chat threads, personal documents and old wiki spaces cannot be searched when the same failure returns two years later. One folder or space with a fixed naming convention, a short index and consistent tags means anyone can find every past review of the payment service in under a minute. Move the existing ones now, while people still remember where they are.

                ## Milestones
                1. A single location chosen, with read access for all engineers.
                2. A naming convention agreed, such as date, service and a short description.
                3. Existing postmortems from the last two years moved or linked into it.
                4. An index page listing each review with date, severity and services affected.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All postmortems from the last two years sit in one location with a consistent naming convention and an index page."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Search chat, wiki and shared drives for existing postmortems"
                - "Agree a file naming convention with date, service and summary"
                - "Move or link each existing postmortem into the new location"
                - "Build an index page with date, severity and services for each review"
            - name: Evidence capture checklist for live incidents
              description: |-
                ## Purpose
                The hardest part of a postmortem is reconstructing what happened from memory three days later, after chat history has scrolled away and dashboards have rolled up their data. A short checklist for the incident scribe, covering timestamps of key decisions, links to graphs, commands run and who was paged, preserves the evidence while it still exists. It costs minutes during the incident and saves hours afterwards.

                ## Milestones
                1. A checklist of what to capture during an incident: key timestamps, decisions, graphs, commands and people involved.
                2. A scribe role named in the incident process, separate from the person fixing the problem.
                3. A place agreed for raw notes and screenshots that the postmortem author can open later.
                4. The checklist used during one real incident and adjusted afterwards.

                ## Notes
                Screenshot dashboards during the incident. Many monitoring tools lose fine-grained data after a few days.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A scribe checklist exists, the scribe role is in the incident process, and the checklist has been used in at least one real incident."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a one-page scribe checklist of what to capture during an incident"
                - "Add a scribe role to the incident roles list"
                - "Create a raw notes folder that postmortem authors can open later"
                - "Review the checklist after the next incident and fix what was missed"
            - name: Postmortem roles for owner, facilitator and approver
              description: |-
                ## Purpose
                Postmortems stall when nobody knows who is writing them, who runs the meeting and who signs off the actions. Naming three roles, with the incident commander usually picking the owner within a day, gives every review someone accountable for getting it finished. The facilitator should ideally be someone who was not deeply involved, so the meeting stays curious rather than defensive.

                ## Milestones
                1. Three roles defined in a few sentences each: owner, facilitator and approver.
                2. A rule for who assigns the owner and by when after an incident closes.
                3. A short list of people willing to facilitate reviews for other teams.
                4. The roles added to the postmortem policy and the template header.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Owner, facilitator and approver roles are written into the policy, with a named pool of at least three facilitators."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a three-sentence description of each postmortem role"
                - "Decide who assigns the postmortem owner and within how many hours"
                - "Ask for volunteers to join a pool of cross-team facilitators"
                - "Add role fields to the top of the postmortem template"
            - name: Backfilled postmortem for a recent outage
              description: |-
                ## Purpose
                The quickest way to test a new template and policy is to write a full review for an incident from the last month that never got one. People still remember the details, the stakes are lower than during a fresh outage, and the gaps in your process show up immediately. Treat it as a rehearsal that also produces real action items.

                ## Milestones
                1. One unreviewed incident from the last 30 to 60 days chosen.
                2. A timeline rebuilt from chat logs, deploy history and monitoring.
                3. A review meeting held with the responders and a facilitator.
                4. Action items filed in the tracker with owners and dates.
                5. Three notes on what to change in the template or policy.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A complete postmortem for a recent unreviewed incident is published with owned action items and notes on improving the process."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick one incident from the last two months that has no write-up"
                - "Rebuild its timeline from chat, deploy logs and dashboards"
                - "Book a 60-minute review with the responders and a facilitator"
                - "File each agreed action item in the tracker with an owner"
            - name: Blameless language guide for write-ups
              description: |-
                ## Purpose
                Phrases like human error, should have known and failed to check quietly turn a postmortem into an accusation, and people stop sharing what really happened. A short guide with before and after examples teaches authors to describe what a person saw and why their action made sense at the time. The aim is honest detail, not vagueness: names of systems, decisions and signals, without verdicts about people.

                ## Milestones
                1. A list of ten phrases to avoid, each with a better alternative.
                2. Two paragraphs from real postmortems rewritten as worked examples.
                3. A note on when to name individuals and when to name roles instead.
                4. The guide linked from the template and read by every regular author.

                ## Notes
                Blameless does not mean consequence-free for wilful misconduct. Say in the policy that such cases go through a separate process, so the postmortem itself stays a learning document.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A language guide with at least ten phrase replacements and two rewritten examples is linked from the postmortem template."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search past postmortems for phrases like human error and failed to"
                - "Write a better alternative beside each phrase you find"
                - "Rewrite two real paragraphs as before and after examples"
                - "Link the guide from the first line of the template"
            - name: Postmortem turnaround targets and reminders
              description: |-
                ## Purpose
                A postmortem published six weeks after the incident is history, not learning: the responders have moved on and the action items lose momentum. Setting targets, such as a draft within five business days and a review meeting within ten, and reminding owners as those dates approach, keeps reviews close to the event. Track the actual times so the target stays honest.

                ## Milestones
                1. Turnaround targets agreed for first draft, review meeting and publication.
                2. An automatic or manual reminder set for owners two days before each target.
                3. Actual turnaround recorded for every postmortem in the index.
                4. A first look at how many reviews met the targets after two months.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Draft, meeting and publication targets are written into the policy and actual turnaround is recorded for each postmortem."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Agree target days for draft, review meeting and publication"
                - "Add incident close date and publication date columns to the index"
                - "Set a reminder for each owner two days before the draft target"
                - "Count how many reviews met the targets after two months"
            - name: Postmortem action items in the issue tracker
              description: |-
                ## Purpose
                Action items that live only inside the postmortem document are the ones that never get done. Filing each one as a ticket with a shared label, a link back to the review, an owner and a target date puts it into the same planning flow as feature work, where it can be prioritised and seen. A weekly triage of newly filed items catches the ones with no owner before they drift.

                ## Milestones
                1. A shared label or field for postmortem action items in the tracker.
                2. A rule that every action item links back to its postmortem.
                3. Every open action item from the last six months filed with an owner and date.
                4. A saved view showing all open postmortem actions by team.

                ## Notes
                Start from the **Remediation plan** template for incidents with more than five actions, so the whole set is tracked together.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every postmortem action item from the last six months is a labelled ticket with an owner, a date and a link to its review."
                cadence: rolling
              tasks:
                - "Create a postmortem action label in the issue tracker"
                - "File every open action from the last six months as a ticket"
                - "Build a saved view of open postmortem actions grouped by team"
                - "Triage newly filed postmortem actions for missing owners @recurring(weekly:thu)"
            - name: Weekly postmortem review meeting
              description: |-
                ## Purpose
                A regular slot where finished postmortems are walked through with a wider group spreads the lessons beyond the team that was paged. Thirty to sixty minutes a week, with one or two reviews presented by their owners, is enough to build a habit of reading and questioning each other's incidents. When there is nothing to review, cancel it rather than filling the time.

                ## Milestones
                1. A standing weekly slot booked with an open invitation for all engineers.
                2. A simple agenda: summary, timeline highlights, contributing factors, actions and questions.
                3. Notes from each session stored with the postmortem they discussed.
                4. Attendance from at least three teams after the first two months.

                ## Notes
                Start from the **Meeting notes** template for each session so questions and new actions are captured in the same place.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly review meeting has run for two months with notes stored and attendance from at least three teams."
                cadence: rolling
              tasks:
                - "Book a recurring 45-minute slot and invite all engineering teams"
                - "Write a five-item agenda for presenters"
                - "Run the postmortem review meeting and file the notes @recurring(weekly:wed)"
                - "Cancel the slot by noon the day before when nothing is ready"
            - name: Unreviewed incident backlog check
              description: |-
                ## Purpose
                Incidents that qualify for a postmortem under the policy can slip through when the commander forgets to assign an owner or the team is buried in the next release. A short Monday check of last week's incidents against the policy catches each one within days. It is the cheapest control in the whole process and the one most often missing.

                ## Milestones
                1. A list of incidents from the past week compared against the policy triggers.
                2. Every qualifying incident with a named postmortem owner.
                3. Incidents judged not to need a review marked with a one-line reason.
                4. No qualifying incident older than ten days without an owner.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each Monday, every qualifying incident from the prior week has an owner or a recorded reason for no review."
                cadence: rolling
              tasks:
                - "Pull last week's incidents from the incident tool or channel"
                - "Check incidents against the policy triggers and assign owners @recurring(weekly:mon)"
                - "Record a one-line reason for each incident that needs no review"
                - "Chase any owner whose draft is past the target date"
            - name: Monthly sweep of open action items
              description: |-
                ## Purpose
                Action items age quietly. A monthly sweep of every open postmortem ticket, checking that the owner still works on the team, the date still makes sense and the fix still matters, keeps the list honest. Items that no longer apply get closed with a reason instead of rotting in the backlog.

                ## Milestones
                1. Every open postmortem action reviewed once a month.
                2. Items with departed owners reassigned.
                3. Items no longer relevant closed with a written reason.
                4. A count of open, closed and overdue items recorded each month.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Open postmortem actions are reviewed every month, with reassignments, closures and counts recorded."
                cadence: rolling
              tasks:
                - "Open the saved view of postmortem actions and sort by age"
                - "Review every open postmortem action with its owner @recurring(monthly:12)"
                - "Close items that no longer apply with a one-line reason"
                - "Record open, closed and overdue counts in the programme log"
            - name: Overdue action item escalation path
              description: |-
                ## Purpose
                Some action items are overdue because the fix is genuinely hard, others because nobody gave the team time to do it. An agreed escalation path, from owner to team lead to engineering manager after set periods, turns quiet slippage into a visible planning decision. The point is to force a choice, either schedule it or accept the risk, rather than to punish anyone.

                ## Milestones
                1. Escalation stages agreed with time limits, for example 14 and 30 days overdue.
                2. A short monthly note to managers listing items at each stage.
                3. Each escalated item either rescheduled or formally accepted as a risk.
                4. Fewer items above 30 days overdue after three months.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Overdue postmortem actions are escalated monthly by stage and each escalated item has a recorded schedule or risk decision."
                cadence: rolling
              tasks:
                - "Agree the overdue thresholds for each escalation stage"
                - "Send managers the list of overdue postmortem actions by stage @recurring(monthly:20)"
                - "Record each manager's decision to schedule or accept the risk"
                - "Compare the 30-day overdue count with three months ago"
            - name: Monthly incident trend digest
              description: |-
                ## Purpose
                Single postmortems explain single incidents; patterns only show up when you read across them. A one-page monthly digest of incident counts, severities, services affected, recurring contributing factors and action item progress gives leaders and engineers the same picture. Keep it short enough to read in five minutes, or nobody will.

                ## Milestones
                1. A digest format agreed: counts, severities, top services, repeat factors and action status.
                2. The first digest published to engineering and leadership.
                3. One theme from the digest discussed in the weekly review meeting.
                4. Three consecutive monthly digests published on time.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A one-page incident digest has been published for three consecutive months, each naming at least one recurring theme."
                cadence: rolling
              tasks:
                - "Agree the five numbers and one theme each digest will show"
                - "Compile and publish the monthly incident trend digest @recurring(monthly:5)"
                - "Pick one theme from the digest for the weekly review"
                - "Ask readers which number they actually use and drop the rest"
            - name: Quarterly postmortem quality audit
              description: |-
                ## Purpose
                Postmortem quality drifts back towards short summaries and vague actions unless someone reads a sample with fresh eyes. Scoring four or five recent reviews each quarter against a simple rubric, covering timeline accuracy, depth of contributing factors, blameless language and strength of actions, shows exactly where to coach. Share the scores as team trends, never as a league table of authors.

                ## Milestones
                1. A rubric of five criteria, each scored from one to three.
                2. Four or five postmortems from the quarter scored by two reviewers.
                3. The two weakest criteria named with an example of each.
                4. One change to the template, guide or training agreed from the findings.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter, at least four postmortems are scored against a five-point rubric and one process change is agreed."
                cadence: cyclic
              tasks:
                - "Write a five-criterion rubric with a one-to-three scale"
                - "Score a sample of this quarter's postmortems with a second reviewer @recurring(quarterly)"
                - "Write up the two weakest criteria with anonymised examples"
                - "Agree one change to the template or training from the audit"
            - name: Near-miss and good-catch reporting
              description: |-
                ## Purpose
                For every outage there are many near misses: the bad migration caught in staging, the alert someone noticed by chance, the deploy rolled back just in time. A low-effort way to report them, and a short weekly look at what came in, lets the team learn from incidents that never happened. Thank reporters publicly so it becomes normal to admit how close things came.

                ## Milestones
                1. A simple form or channel for near-miss reports with four fields.
                2. The reporting route announced with two real examples.
                3. Reports reviewed weekly, with the useful ones turned into actions.
                4. At least ten near misses reported in the first three months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A near-miss reporting route exists, reports are reviewed weekly and at least ten have been logged in three months."
                cadence: rolling
              tasks:
                - "Create a near-miss form asking what happened, what caught it and what could have happened"
                - "Announce the form with two near misses from the past month"
                - "Review new near-miss reports and file actions for useful ones @recurring(weekly:fri)"
                - "Thank each reporter by name in the team channel, with their agreement"
            - name: Monthly postmortem reading circulation
              description: |-
                ## Purpose
                Most engineers never read postmortems from other teams, even when the same database, library or deploy tool is involved. Sending a short monthly pick of two or three reviews worth reading, each with a sentence on why, spreads lessons cheaply. Include one from outside the company now and then to widen the view.

                ## Milestones
                1. A monthly message format with two or three picks and a reason for each.
                2. The first circulation sent to all engineers.
                3. Replies or questions collected and passed to postmortem owners.
                4. Six months of circulations sent without a gap.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly message recommending two or three postmortems, each with a reason, has gone out for six months running."
                cadence: rolling
              tasks:
                - "Pick two internal postmortems from last month that others should read"
                - "Send the monthly postmortem reading picks to all engineers @recurring(monthly:26)"
                - "Pass any questions from readers to the postmortem owners"
                - "Add one public postmortem from another company every third month"
            - name: Annual incident year in review
              description: |-
                ## Purpose
                Once a year, stepping back from individual incidents shows what the organisation actually learned: which systems caused the most pain, which actions paid off, which themes keep returning. A written year in review, presented to engineering and leadership, sets reliability priorities for the next year from evidence rather than memory. It is also the best record of progress you will have.

                ## Milestones
                1. A year of incidents and postmortems pulled into one table.
                2. Top five recurring contributing factors named with examples.
                3. Action items completed and their measured effect described.
                4. A written review and a 30-minute presentation delivered.
                5. Three reliability priorities for the coming year agreed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A written incident year in review naming the top five contributing factors and three agreed priorities is presented each year."
                cadence: cyclic
                effort_hours_estimate: "16"
              tasks:
                - "Export the year's incidents and postmortems into one table"
                - "Group contributing factors and name the top five themes"
                - "Write and present the incident year in review @recurring(yearly)"
                - "Agree three reliability priorities with engineering leadership"
            - name: Building an accurate incident timeline
              description: |-
                ## Purpose
                The timeline is the backbone of a postmortem, and most are wrong in small ways that matter: times in mixed zones, the moment of detection confused with the moment of impact, decisions missing between alerts. Learning to merge chat logs, alert history, deploy records and monitoring into one timeline in a single time zone makes every later analysis sharper. Practise on a past incident before you need it for a fresh one.

                ## Milestones
                1. Sources listed for timeline data: chat, paging tool, deploys, monitoring and support tickets.
                2. One past incident's timeline rebuilt in UTC from at least four sources.
                3. Key moments marked: start of impact, detection, escalation, mitigation and resolution.
                4. Gaps in the evidence noted as questions for responders.

                ## Notes
                Record times in UTC throughout. Mixed time zones are the most common timeline error in distributed teams.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One past incident has a rebuilt UTC timeline from at least four sources with impact, detection, mitigation and resolution marked."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List every system that holds timestamps about an incident"
                - "Export the chat, paging and deploy history for one past incident"
                - "Merge the sources into a single UTC timeline"
                - "Mark impact start, detection, mitigation and resolution on it"
            - name: Contributing factors instead of a single root cause
              description: |-
                ## Purpose
                Real incidents almost never have one root cause: a latent bug, a missing alert, a confusing dashboard and a rushed deploy usually combine. Learning to map several contributing factors, and to ask what made each one possible, produces actions that address the system rather than the last person to touch it. It also ends the unhelpful debate about which factor was the real cause.

                ## Milestones
                1. Two short readings on contributing factors and systems thinking in incidents completed.
                2. One past postmortem reanalysed with at least four contributing factors.
                3. Each factor linked to the condition that allowed it to exist.
                4. A one-page comparison of the original and new actions shared with the team.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One past postmortem has been reanalysed into at least four contributing factors, with a comparison of old and new actions shared."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read two articles on contributing factors in software incidents"
                - "Choose a past postmortem that named a single root cause"
                - "Map at least four contributing factors and what enabled each one"
                - "Share how the actions would change under the new analysis"
            - name: Five whys practice and its limits
              description: |-
                ## Purpose
                Asking five whys is quick and familiar, but it tends to follow a single chain and stop at whichever answer feels comfortable, often a person. Practising it on past incidents, deliberately branching at each why and noticing where it ends at a human, teaches when it helps and when a wider factor map is better. Use it as a starting question, not as the whole analysis.

                ## Milestones
                1. Three past incidents worked through with the five whys.
                2. At least one branch point recorded where two answers were both true.
                3. Places where the chain stopped at a person rewritten as a system question.
                4. A short team note on when to use the five whys and when to go wider.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three past incidents have branched five whys analyses and a team note on when the method fits has been written."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Run the five whys on three past incidents with a colleague"
                - "Mark every point where more than one answer was true"
                - "Rewrite any chain that ended at a person as a question about the system"
                - "Write a short note on when the method helps and when it misleads"
            - name: Facilitating a blameless review meeting
              description: |-
                ## Purpose
                Blamelessness succeeds or fails in the review meeting: one sharp question from a senior person can shut down an engineer for the rest of the hour. Learning to open with ground rules, ask how a decision made sense at the time, keep the room on systems and capture actions without arguing their design in the meeting is a learnable skill. Shadow two experienced facilitators before running one alone.

                ## Milestones
                1. Two review meetings observed with notes on what the facilitator did.
                2. A one-page facilitation script with opening rules and question prompts.
                3. One review co-facilitated with an experienced facilitator.
                4. One review facilitated alone, with feedback from two attendees.

                ## Notes
                Ask open questions such as what were you seeing at that point. Avoid why did you, which sounds like an accusation however kindly it is meant.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One review meeting has been facilitated solo using a written script, with feedback collected from two attendees."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask to observe the next two postmortem review meetings"
                - "Write a one-page script with ground rules and open question prompts"
                - "Co-facilitate one review with an experienced facilitator"
                - "Ask two attendees for one thing to keep and one to change"
            - name: Interviewing responders without leading questions
              description: |-
                ## Purpose
                Responders remember the incident differently, and a group meeting often captures only the loudest version. Short one-to-one conversations before the review, using open questions about what each person saw, expected and tried, uncover the confusing dashboards, missing permissions and unwritten knowledge that never reach the chat log. Notes from these talks make the timeline and factors far richer.

                ## Milestones
                1. A list of open questions for responder interviews.
                2. Three responders from one incident interviewed for 20 to 30 minutes each.
                3. Differences between their accounts noted without judging who was right.
                4. New facts from the interviews added to the postmortem.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three responders from one incident have been interviewed with open questions and new facts added to its postmortem."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write eight open questions about what responders saw, expected and tried"
                - "Book short one-to-one calls with three responders from a recent incident"
                - "Note where their accounts differ without deciding who is right"
                - "Add the new facts to the timeline and contributing factors"
            - name: Writing action items that prevent recurrence
              description: |-
                ## Purpose
                Actions such as be more careful, add more tests and improve monitoring feel productive and change nothing. Learning to write actions that are specific, owned, dated and ranked by strength, preferring changes that remove the hazard over those that add checklists or training, is the single biggest improvement most teams can make. A strong action names the system, the change and how you will know it worked.

                ## Milestones
                1. A ranking of action strength agreed, from eliminating the hazard down to training and reminders.
                2. Ten past action items rewritten to be specific, owned, dated and testable.
                3. Each rewritten action tagged with its strength level.
                4. A short checklist for authors added to the template's action section.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten past action items have been rewritten with an owner, date, test and strength level, and an author checklist is in the template."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Pick ten weak action items from past postmortems"
                - "Rewrite each with a system, a change, an owner and a test of success"
                - "Tag each rewritten action as eliminate, guard, detect or train"
                - "Add a five-line action checklist to the template"
            - name: Executive summary for non-engineering readers
              description: |-
                ## Purpose
                Leaders, support teams and account managers read the first paragraph of a postmortem and nothing else. Learning to write a five-sentence summary covering what customers experienced, for how long, why in plain words, what was done and what will change, makes the review useful far beyond engineering. It also reduces the follow-up questions that land on the owner.

                ## Milestones
                1. A five-sentence summary structure agreed and written into the template.
                2. Summaries rewritten for three past postmortems.
                3. Each rewrite read by someone outside engineering, with their questions noted.
                4. Jargon from those questions added to a list of terms to explain or avoid.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three postmortem summaries have been rewritten to a five-sentence structure and checked by a reader outside engineering."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write the five-sentence summary structure into the template"
                - "Rewrite the summaries of three past postmortems"
                - "Ask a support or account colleague to read them and list their questions"
                - "Keep a list of jargon words that confused readers"
            - name: Quantifying incident impact honestly
              description: |-
                ## Purpose
                Impact statements are often guesses: about some users, a few minutes, minor degradation. Learning to measure affected requests, users or accounts, the real duration from first impact to full recovery, and any data or revenue effect turns impact into numbers that drive priority. Be clear about what you could not measure rather than rounding it down.

                ## Milestones
                1. Impact measures agreed: affected users or requests, duration, data effect and support contacts.
                2. Queries or dashboards found that produce each measure.
                3. Impact recalculated for two past incidents and compared with what was written.
                4. A short impact section format added to the template, including a line for unknowns.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Impact has been recalculated for two past incidents using agreed measures, and the template has a structured impact section."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the impact measures your services can actually produce"
                - "Find or write the query behind each measure"
                - "Recalculate impact for two past incidents and compare with the write-up"
                - "Add a structured impact section with a line for unknowns"
            - name: Studying public postmortems from other companies
              description: |-
                ## Purpose
                Many companies publish detailed incident reports, and reading them is a cheap way to see failure modes before they reach you: expired certificates, runaway retries, configuration pushes, region failovers that did not fail over. A monthly reading habit with a short note on each, and the question could this happen here, builds pattern recognition across the team. Pick reports involving technology you run.

                ## Milestones
                1. A reading list of public postmortems relevant to your stack.
                2. One report read each month with a three-line note.
                3. Each note answers whether the same failure could happen in your systems.
                4. At least two actions or checks raised from outside reports in six months.

                ## Notes
                Start from the **Reading queue** template to keep the list and notes together.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six public postmortems have been read and noted in six months, with at least two internal checks raised from them."
                cadence: rolling
              tasks:
                - "Collect ten public postmortems involving technology you run"
                - "Read one public postmortem and note whether it could happen here @recurring(monthly:15)"
                - "Raise a ticket when a report suggests a check worth doing"
                - "Share the most useful report in the monthly reading circulation"
            - name: Choosing postmortem tooling, documents or incident platform
              description: |-
                ## Purpose
                Teams start with shared documents and eventually wonder whether a dedicated incident platform would save time with timelines, action tracking and reporting. Comparing the two against your real volume, budget and integrations, with a trial on actual incidents, avoids buying a tool nobody fills in. For many small teams a good template and tracker label are enough.

                ## Milestones
                1. Requirements listed: timeline import, action sync with the tracker, search, access control and reporting.
                2. Current incident volume and time spent per postmortem measured.
                3. Two or three options compared, including staying on documents.
                4. One option trialled on two real postmortems.
                5. A decision recorded with cost and reasons.

                ## Notes
                Start from the **Purchase decision** template.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A tooling decision, including the option of staying on documents, is recorded with cost, trial results and reasons."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Count incidents and postmortems over the last six months"
                - "Write the five requirements any tool must meet"
                - "Trial the leading option on two real postmortems"
                - "Record the decision and the reasons in a purchase decision note"
            - name: Severity scale recalibration from past incidents
              description: |-
                ## Purpose
                Severity levels drive which incidents get reviewed, yet many scales were written once and never checked against reality. Re-scoring a year of incidents against the written definitions shows where the scale is ambiguous, where teams inflate or deflate, and where the review trigger sits in the wrong place. A clearer scale means the right incidents get postmortems.

                ## Milestones
                1. A year of incidents re-scored against the written severity definitions.
                2. Disagreements between original and re-scored severity listed.
                3. Revised definitions with customer-facing examples for each level.
                4. The postmortem trigger confirmed or moved in the policy.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A year of incidents has been re-scored, severity definitions revised with examples, and the review trigger confirmed in the policy."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Export a year of incidents with their recorded severity"
                - "Re-score each incident against the written definitions"
                - "List the cases where the score changed and why"
                - "Propose revised definitions with one example per level"
            - name: Incident tagging scheme for trend analysis
              description: |-
                ## Purpose
                Trends are impossible to see when every postmortem describes its causes in free text. A small fixed set of tags, such as change-related, capacity, dependency, configuration, data and detection gap, applied consistently, lets you count what keeps going wrong. Keep the list short enough that authors pick the right tag without a manual.

                ## Milestones
                1. A list of eight to twelve contributing factor tags with one-line definitions.
                2. Tags applied to the last 20 postmortems by two people independently.
                3. Definitions tightened where the two people disagreed.
                4. A tag field added to the template and the index.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tag list of eight to twelve defined factors has been applied to the last 20 postmortems and added to the template and index."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft eight to twelve contributing factor tags with definitions"
                - "Tag the last 20 postmortems with a colleague working separately"
                - "Tighten the definitions where your tags disagreed"
                - "Add the tag field to the template and the index page"
            - name: Accepting risk on actions you will not do
              description: |-
                ## Purpose
                Not every action item is worth its cost, and pretending otherwise leaves a backlog of tickets everyone knows will never be done. Recording an explicit decision to accept a risk, with who decided, why and when it will be looked at again, is more honest and easier to defend after the next incident. Review accepted risks each quarter, because costs and systems change.

                ## Milestones
                1. A rule for who can accept risk on a postmortem action and at what severity.
                2. Open actions that will not be done converted into recorded risk decisions.
                3. Each decision with a reason, a decider and a review date.
                4. Accepted risks reviewed once a quarter.

                ## Notes
                Start from the **Risk register** template so accepted risks sit in one list with owners and review dates.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Every postmortem action that will not be done is a recorded risk decision with a decider, reason and review date."
                cadence: rolling
              tasks:
                - "Agree who may accept risk on a postmortem action at each severity"
                - "Convert stale actions nobody will do into recorded risk decisions"
                - "Review the accepted postmortem risks with their deciders @recurring(quarterly)"
                - "Reopen any accepted risk that has contributed to a new incident"
            - name: Cutting time from incident to published postmortem
              description: |-
                ## Purpose
                If your turnaround records show reviews routinely taking weeks, the cause is usually specific: waiting for one busy person, rebuilding timelines by hand, or approval loops. Finding the slowest step from your last ten postmortems and fixing that one step does more than general reminders. Aim to halve the median, not to reach a perfect number.

                ## Milestones
                1. Turnaround for the last ten postmortems broken into steps.
                2. The slowest step identified with evidence.
                3. One change made to that step, such as a pre-filled timeline or a single approver.
                4. Median turnaround for the next five postmortems compared with the baseline.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "The slowest postmortem step has been changed and median turnaround for the next five reviews compared with the previous ten."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Break the last ten postmortems into draft, meeting and approval times"
                - "Name the step that takes longest and the reason"
                - "Make one change to that step and announce it"
                - "Compare median turnaround after the next five postmortems"
            - name: Linking postmortems to the changes that triggered them
              description: |-
                ## Purpose
                Plenty of incidents follow a deploy, configuration change or feature flag flip, but postmortems rarely record which change in a way you can query. Adding a field for the triggering change, with a link to the pull request or change record, lets you see which kinds of change cause the most incidents. That evidence is far more persuasive than opinion when proposing safer release practices.

                ## Milestones
                1. A triggering change field added to the template, allowing none or unknown.
                2. The field filled for the last 20 postmortems where the evidence exists.
                3. Incidents grouped by change type: code, configuration, flag, infrastructure or none.
                4. Findings shared with the teams that own release practices.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The last 20 postmortems record their triggering change, and a grouped summary has been shared with release owners."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Add a triggering change field to the postmortem template"
                - "Fill the field for the last 20 postmortems from deploy history"
                - "Group the incidents by type of change"
                - "Send the summary to the people who own release practices"
            - name: Postmortem visibility and redaction rules
              description: |-
                ## Purpose
                Open postmortems spread learning, but some contain customer names, security details or personal information that should not be read by everyone. Clear rules on default visibility, what to redact and who approves wider sharing let authors publish quickly without worrying about leaks. Default to open within engineering and redact rather than hide.

                ## Milestones
                1. Default visibility agreed for internal postmortems.
                2. A redaction list covering customer identifiers, credentials, personal data and exploit details.
                3. An approver named for sharing beyond engineering.
                4. The rules added to the policy and checked on two existing postmortems.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Visibility defaults, a redaction list and a named approver for wider sharing are written into the postmortem policy."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Decide who can read internal postmortems by default"
                - "Write a redaction list of details that must never appear"
                - "Name who approves sharing a postmortem outside engineering"
                - "Check two existing postmortems against the new rules"
            - name: Public incident report after a major outage
              description: |-
                ## Purpose
                When customers felt an outage, a clear public report rebuilds more trust than silence or a vague apology. Turning the internal postmortem into a customer-facing version, covering what happened, who was affected, why in plain terms and what is changing, needs care with wording, legal review and timing. Agree the format before the next major outage so it is not invented under pressure.

                ## Milestones
                1. A public report format agreed with support, communications and legal.
                2. The internal postmortem translated into plain language without internal names or blame.
                3. The draft reviewed by legal and the support lead.
                4. The report published on the status page or blog and sent to affected customers.
                5. Customer questions after publication collected for the owner.

                ## Notes
                Never speculate in a public report. If a cause is still being confirmed, say so and promise an update by a date.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A public incident report reviewed by legal and support is published and sent to affected customers within the agreed time."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree the public report format with support, communications and legal"
                - "Draft the customer version from the internal postmortem in plain language"
                - "Get sign-off from legal and the support lead"
                - "Publish the report and send it to affected customers"
            - name: Multi-team postmortem for a major incident
              description: |-
                ## Purpose
                Major incidents cross several teams and services, and a normal one-hour review cannot cover them. A structured process with a lead author, a short section from each team, a pre-meeting read and a longer facilitated session keeps everyone's view in the record without the meeting turning into a defence of each team's part. Plan it within a day of the incident closing.

                ## Milestones
                1. A lead author and a neutral facilitator named within one business day.
                2. Each involved team's timeline and factors collected in one shared draft.
                3. A pre-read sent at least two days before the review.
                4. A 90-minute facilitated review held with all teams.
                5. Cross-team actions owned by a single named person each.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A major multi-team incident has one published postmortem with each team's input and every cross-team action owned by a named person."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Name a lead author and a facilitator from outside the affected teams"
                - "Ask each team for its timeline and factors in the shared draft"
                - "Send the pre-read two days before a 90-minute review"
                - "Assign every cross-team action to one named person"
            - name: Incident story at an engineering all-hands
              description: |-
                ## Purpose
                Told well, an incident story at an all-hands meeting teaches more people than any document, and it shows that the organisation values learning over blame. Presenting one recent incident in ten minutes, with the timeline, the surprising part and what changed, normalises talking openly about failure. Choose an incident where the responders are happy to be named.

                ## Milestones
                1. One recent incident chosen with the responders' agreement.
                2. A ten-minute talk prepared with the timeline, the surprise and the changes.
                3. The talk rehearsed once with a colleague.
                4. The talk delivered and questions captured for the postmortem owner.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A ten-minute incident story has been presented at an engineering all-hands, with the responders' agreement and questions recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the responders of a recent incident whether they are happy to share it"
                - "Prepare five slides: before, timeline, surprise, changes and lessons"
                - "Rehearse the talk once with a colleague and cut to ten minutes"
                - "Deliver the talk and send the questions to the postmortem owner"
            - name: Replaying a past incident as a team exercise
              description: |-
                ## Purpose
                Reading a postmortem tells people what happened; replaying it makes them think through what they would have done. Running a past incident as a tabletop exercise, revealing the same signals in order and asking the group to decide each step, shows whether the actions from that postmortem really changed how people respond. It is also a gentle way to bring newer engineers into incident thinking.

                ## Milestones
                1. One past incident chosen and its signals arranged in order.
                2. A 60-minute session run with four to eight engineers.
                3. Points where the group's choices differed from the original response noted.
                4. Gaps found added as actions or as updates to the original postmortem.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A past incident has been replayed with at least four engineers and any gaps found filed as actions."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick a past incident with a clear sequence of signals"
                - "Prepare the signals as cards or slides revealed in order"
                - "Run the 60-minute replay with four to eight engineers"
                - "File the gaps the group found as postmortem actions"
            - name: Incident evidence pack for auditors or regulators
              description: |-
                ## Purpose
                In regulated or enterprise settings, an auditor, regulator or major customer may ask how incidents are reviewed and whether actions were completed. A prepared pack with the policy, a sample of postmortems, action closure records and the escalation path answers that in days instead of weeks. Assemble it once, then keep it current.

                ## Milestones
                1. A list of what typical requests ask for, gathered from legal or compliance.
                2. The policy, template and three redacted sample postmortems collected.
                3. Action item closure records for the last year exported.
                4. The pack reviewed by compliance and stored with an owner.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An evidence pack with the policy, three redacted postmortems and a year of action closure records is reviewed by compliance and stored."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask compliance what incident evidence past audits requested"
                - "Collect the policy, template and three redacted postmortems"
                - "Export a year of postmortem action closure records"
                - "Store the pack with a named owner and review it with compliance"
            - name: Your first postmortem when your change caused it
              description: |-
                ## Purpose
                For an engineer whose deploy or command triggered an outage, the first postmortem can feel like a trial. Knowing what to expect, how to tell your part plainly, and that the review is about why the system allowed the change to cause harm, makes it a learning experience rather than a frightening one. Many senior engineers can tell you about theirs.

                ## Milestones
                1. The postmortem policy and blameless commitment read before the review.
                2. Your own account written down while it is fresh: what you saw, expected and did.
                3. A conversation with a trusted senior engineer or manager before the meeting.
                4. Your account contributed to the review and one system improvement suggested.

                ## Notes
                Write your account within a day. Memory of what you were thinking fades fast, and that context is the most valuable thing you can give the review.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your written account is in the postmortem and you have proposed at least one system change that would have stopped the incident."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down what you saw, expected and did, in order, within a day"
                - "Read the team's postmortem policy and blameless commitment"
                - "Talk the incident through with a senior engineer you trust"
                - "Suggest one change to the system that would have caught your mistake"
            - name: Manager's role in postmortems and follow-through
              description: |-
                ## Purpose
                Engineering managers decide whether postmortems are safe and whether their actions ever get time. Visibly protecting blameless reviews, giving owners space to write them and making sure action items compete fairly with feature work in planning are the three things only a manager can do. A monthly check of your team's open actions keeps that commitment real.

                ## Milestones
                1. A note to the team restating that postmortems are blameless and why.
                2. Time for postmortem writing and actions reserved in sprint or cycle planning.
                3. Your team's open postmortem actions reviewed every month.
                4. Any blame language in reviews addressed privately and promptly.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Planning reserves time for postmortem work and the manager reviews the team's open postmortem actions every month."
                cadence: rolling
              tasks:
                - "Tell the team in writing that postmortems will never feed performance reviews"
                - "Reserve a share of each planning cycle for postmortem actions"
                - "Review your team's open postmortem actions with each owner @recurring(monthly:22)"
                - "Speak privately to anyone who uses blaming language in a review"
            - name: Lightweight postmortems for a small startup team
              description: |-
                ## Purpose
                Five-person teams have no reliability engineer, no incident platform and no time for long documents, yet the same outage can sink a small company faster. A one-page postmortem, a 30-minute review and a short list of actions in the main backlog give most of the value at a fraction of the cost. The founder or tech lead joining every review signals that it matters.

                ## Milestones
                1. A one-page postmortem format with summary, timeline, factors and three actions at most.
                2. A rule to review any customer-visible incident within a week.
                3. Actions added straight to the main product backlog with a label.
                4. A monthly skim of all incidents by the founder or tech lead.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every customer-visible incident gets a one-page postmortem within a week, with actions in the main backlog."
                cadence: rolling
              tasks:
                - "Cut the template down to one page with three actions at most"
                - "Agree that every customer-visible incident gets a review within a week"
                - "Skim the month's incidents and open postmortem actions @recurring(monthly:28)"
                - "Label postmortem actions in the main backlog so they are visible in planning"
            - name: Postmortem for a third-party vendor outage
              description: |-
                ## Purpose
                When a cloud provider, payment processor or API vendor fails, it is tempting to write it was their fault and move on. The useful questions are about your side: how fast you detected it, whether you could degrade gracefully, how you communicated and what the contract or status page promised. A vendor outage review produces actions you control.

                ## Milestones
                1. The vendor's own incident report obtained and linked.
                2. Your detection time and response compared with the vendor's timeline.
                3. Your dependencies on the vendor and the fallback options listed.
                4. Actions within your control agreed, with any contract questions passed to the vendor owner.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A vendor outage postmortem compares your response with the vendor timeline and lists actions your team controls."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Request or download the vendor's incident report"
                - "Compare when you detected the outage with when it began"
                - "List what failed on your side and what degraded gracefully"
                - "Agree actions you control and send contract questions to the vendor owner"
            - name: Postmortem after data loss or corruption
              description: |-
                ## Purpose
                Data incidents are different from outages: the system may look healthy while records are missing, duplicated or wrong, and the impact keeps growing until someone notices. Reviewing one well means establishing exactly which records were affected and over what window, how the data was restored or corrected, and why backups, validation or alerts did not catch it sooner. Bring in whoever owns customer communication and legal questions early, because affected users may need to be told.

                ## Milestones
                1. The affected data scoped by table, record count and time window, with unknowns stated.
                2. The restore or correction method recorded, including what could not be recovered.
                3. Detection gaps named: why validation, reconciliation or alerts missed the problem.
                4. Customer communication and any legal questions handed to their owners with dates.
                5. Actions agreed on backups, restore testing or data checks.

                ## Notes
                Do not decide notification duties in the postmortem. Record the facts and pass the question to legal or the data protection lead.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A data incident postmortem states the affected records and window, the recovery outcome and the owners of customer and legal follow-up."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Query the exact records and time window affected by the data incident"
                - "Write down how the data was restored and what could not be recovered"
                - "Ask why reconciliation or validation checks did not catch it sooner"
                - "Hand customer messaging and legal questions to their owners with dates"
            - name: Security incident postmortem with restricted details
              description: |-
                ## Purpose
                Security incidents need the same honest review as outages, but details such as exploit paths, affected accounts and forensic findings cannot be shared widely. Writing two versions, a restricted full record and a redacted learning version for engineering, keeps the lessons flowing without exposing the organisation. Agree the approach with the security lead and legal before writing anything down.

                ## Milestones
                1. The security lead and legal agree who may see the full record.
                2. A restricted postmortem written with full technical detail.
                3. A redacted version written for wider engineering learning.
                4. Actions tracked in a restricted queue with progress visible to the security lead.

                ## Notes
                Check with legal before writing conclusions about data exposure or notification duties. Those are legal questions, not engineering ones.
              priority: high
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A restricted full postmortem and a redacted learning version exist, with access agreed by security and legal."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask the security lead and legal who may read the full record"
                - "Write the restricted postmortem in an access-controlled space"
                - "Produce a redacted version that keeps the lessons and removes exploit details"
                - "Track actions in a restricted queue the security lead can see"
            - name: Supporting responders after a stressful incident
              description: |-
                ## Purpose
                Long or high-stakes incidents leave people exhausted, and some feel guilty or anxious for days, especially before the review. Checking in individually, giving time off after night work and making sure nobody writes the postmortem alone in that state protects the people and the quality of the review. Managers and leads set the tone here.

                ## Milestones
                1. Every responder contacted individually within two days.
                2. Rest time agreed for anyone who worked through the night.
                3. The postmortem owner paired with a second person if they were central to the incident.
                4. Any ongoing concerns passed to the manager or the support available at work.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "After each major incident every responder has been checked on within two days and rest time agreed for night responders."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Message each responder privately to ask how they are doing"
                - "Agree rest time with anyone who worked overnight"
                - "Pair the postmortem owner with a colleague if they were at the centre of it"
                - "Point anyone struggling to the support available through work"
            - name: Postmortem programme metrics and reporting
              description: |-
                ## Purpose
                To know whether postmortems are working, measure the programme itself: share of qualifying incidents reviewed, turnaround, action closure rate, overdue actions and incidents that repeat a past contributing factor. Tracked monthly and reported quarterly, these show leaders the return on reliability work. Avoid targets on incident counts, which only encourage people to stop declaring incidents.

                ## Milestones
                1. Five programme measures defined with how each is calculated.
                2. A baseline for each from the last six months.
                3. Measures updated monthly in a shared log.
                4. A quarterly summary sent to engineering leadership.

                ## Notes
                Start from the **Metrics log** template. Watch the repeat-incident rate most closely: it is the clearest sign actions are not working.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Five postmortem programme measures are logged monthly from a six-month baseline and summarised for leadership each quarter."
                cadence: rolling
              tasks:
                - "Define the five programme measures and how to calculate each"
                - "Calculate a six-month baseline for every measure"
                - "Update the postmortem programme measures in the log @recurring(monthly:8)"
                - "Send a quarterly programme summary to engineering leadership @recurring(quarterly)"
            - name: Resilience engineering and learning from incidents study
              description: |-
                ## Purpose
                Beyond templates and action items, the field of resilience engineering asks why things go right most of the time and how people adapt under pressure. Studying its main ideas, such as work as imagined versus work as done, and trying one of its techniques on a real incident, changes the questions experienced reviewers ask. Pick two or three sources rather than a long reading list.

                ## Milestones
                1. Two or three key sources on resilience engineering and learning from incidents read.
                2. A one-page summary of ideas relevant to your team written.
                3. One technique, such as a focus on adaptations that helped, tried in a real review.
                4. A short talk or note shared with other facilitators.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of resilience engineering ideas has been written and one technique tried in a real postmortem."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Choose two or three well-regarded sources on learning from incidents"
                - "Write a one-page summary of the ideas that fit your team"
                - "Try one technique in the next postmortem you facilitate"
                - "Share what changed in that review with the facilitator pool"
            - name: Postmortem facilitator guild across teams
              description: |-
                ## Purpose
                As an organisation grows, postmortem quality depends on a few experienced facilitators who become a bottleneck. A small guild that trains new facilitators, shares hard cases each month and keeps the template and guide current spreads the skill across teams. It also gives every major incident a neutral facilitator from outside the affected team.

                ## Milestones
                1. A guild of at least five facilitators from different teams.
                2. A short training path: observe two, co-facilitate one, lead one with feedback.
                3. A monthly session where members discuss a difficult review.
                4. Every major incident review in the last quarter run by a guild facilitator.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A guild of at least five facilitators meets monthly and has run every major incident review for a full quarter."
                cadence: rolling
              tasks:
                - "Invite experienced facilitators from at least three teams to form a guild"
                - "Write the observe, co-facilitate and lead training path"
                - "Run the monthly facilitator guild session on a difficult review @recurring(monthly:18)"
                - "Assign a guild facilitator to each major incident review"
            - name: Structured postmortem data for automated reporting
              description: |-
                ## Purpose
                Once there are hundreds of postmortems, manual counting for digests and year-end reviews becomes the bottleneck. Storing key fields such as severity, services, tags, triggering change, impact and action status in a structured form, whether a database, spreadsheet or the incident tool's fields, lets reports and dashboards build themselves. Define the schema before automating anything.

                ## Milestones
                1. A schema of postmortem fields with allowed values.
                2. Existing postmortems from the last year migrated into the structured store.
                3. A dashboard or query producing the monthly digest numbers automatically.
                4. New postmortems feeding the store without extra manual steps.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A year of postmortems is held in a structured store with defined fields and the monthly digest numbers come from a query."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write a schema of postmortem fields and their allowed values"
                - "Ask the agent to extract those fields from last year's postmortems into a table"
                - "Build a query that produces the monthly digest numbers"
                - "Connect new postmortems to the store so fields fill automatically"
---

# Incident Postmortems

A postmortem is the one moment after an outage when everyone is paying attention, and a good one turns a bad night into a lasting fix instead of a blame session and a forgotten document. These projects start with the foundations (a policy that says when a review is required, a blameless template, a single home for every write-up, clear roles and a first backfilled review), move through the weekly and monthly routines that keep reviews and action items moving, then the analysis and facilitation skills, the decisions about tooling and severity, the big events such as public incident reports, situations for new engineers, managers, small teams and security incidents, and specialist work on programme metrics and resilience thinking.

What repeats is a Wednesday review meeting, a Monday check for incidents still waiting on a write-up, a Friday look at near-miss reports, monthly sweeps of open and overdue action items on different days, a monthly trend digest, a quarterly quality audit and an incident year in review. The Remediation plan, Meeting notes, Metrics log, Reading queue, Purchase decision and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
