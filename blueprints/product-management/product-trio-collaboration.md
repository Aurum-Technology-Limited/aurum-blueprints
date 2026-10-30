---
id: product-management.product-trio-collaboration
name: Product Trio Collaboration
description: "A product, design and engineering trio that decides together: decision rights, a working agreement, shared customer contact, weekly risk reviews, honest retrospectives and the manager habits that keep trios healthy."
category: business
version: 1.0.0
tags: [product-management, product-trio-collaboration, team, manager, product-trio, cross-functional, decision-making, design-engineering]
author: Aurum Technology
starter_structure:
  templates:
    - skills-matrix
    - meeting-notes
    - risk-register
    - one-on-one
    - purchase-decision
    - onboarding-30-60-90
  pillars:
    - name: Product Management
      emoji: "🧩"
      description: "Deciding what to build and why: discovery and research, roadmaps and prioritisation, specs and launches, pricing and packaging, product analytics, and the feedback loops that keep a product honest."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Product Trio Collaboration
          description: "Making product, design and engineering leads work as one decision-making unit, sharing discovery, trade-offs and ownership of outcomes."
          projects:
            - name: Trio membership and decision rights charter
              description: |-
                ## Purpose
                Most trios fail quietly because nobody wrote down which calls belong to the three of them and which belong to one person. Naming the members, listing the decisions the trio makes together (problem choice, scope cuts, release readiness) and the ones each lead makes alone (interaction design, architecture, commercial input) stops the same argument recurring every sprint. One page agreed in the first fortnight is enough.

                ## Milestones
                1. The three trio members named, with a deputy for each when they are away.
                2. A list of at least eight recurring decisions, each marked as trio, product, design or engineering.
                3. A default rule for decisions nobody listed, written in one sentence.
                4. The charter agreed by all three members and by their managers.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page charter naming the trio and listing at least eight decisions with an owner each is agreed by all three members and their managers."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the last ten product decisions and who actually made each one"
                - "Mark each recurring decision as trio, product, design or engineering"
                - "Write the default rule for decisions not on the list"
                - "Share the draft charter with all three managers for comment"
            - name: Working agreement for the product trio
              description: |-
                ## Purpose
                Three leads from three disciplines bring three sets of habits: one answers messages in minutes, one blocks mornings for focused work, one writes everything down. A short working agreement covering response times, meeting rhythm, where notes live and how to raise a concern turns those differences into known expectations instead of slow resentment.

                ## Milestones
                1. Expected response times agreed for chat, comments and urgent issues.
                2. Core overlap hours and protected focus time written down for each member.
                3. One agreed home for notes, decisions and drafts.
                4. A sentence on how any member raises a concern about how the trio is working.
                5. The agreement pinned where all three see it every week.

                ## Notes
                Keep it under a page. A long agreement is read once and then ignored; a short one gets quoted in retrospectives.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page working agreement covering response times, overlap hours, a home for notes and a route for concerns is pinned in the shared workspace."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft five working norms each, separately, before comparing"
                - "Merge the three lists into one page of agreed norms"
                - "Agree core overlap hours and each member's protected focus blocks"
                - "Pin the agreement at the top of the trio's shared workspace"
            - name: Trio collaboration health baseline
              description: |-
                ## Purpose
                Before changing how the trio works, measure how it works now. Each member privately scores ten statements, such as whether they hear about customer problems at the same time as the others and whether disagreements end in a decision, so the trio can see where its views differ rather than guessing.

                ## Milestones
                1. Ten statements chosen covering shared context, decision speed, trust and workload.
                2. All three members have scored every statement privately on a one to five scale.
                3. Scores compared side by side, with any gap of two points or more highlighted.
                4. Two areas chosen to improve first, written in the trio's shared workspace.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three private score sheets against the same ten statements are compared, and two improvement areas are recorded in the shared workspace."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose ten collaboration statements the trio wants to score"
                - "Score the statements privately and send them to one neutral person"
                - "Ask the agent to summarise where the three sets of scores differ most"
                - "Pick the two lowest-scoring areas to work on first"
            - name: Ownership boundaries with neighbouring teams
              description: |-
                ## Purpose
                A trio can only own outcomes if it knows where its patch ends. Mapping which parts of the product, which metrics and which customer problems this trio owns, which it shares with another team and which it only influences stops two trios redesigning the same screen, or neither one picking up the bug that sits between them.

                ## Milestones
                1. A map of the product surfaces, services and metrics the trio owns outright.
                2. Shared areas listed with the other team named and a contact for each.
                3. Gaps nobody owns flagged to the product and engineering managers.
                4. The map confirmed with the leads of each neighbouring trio.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An ownership map marking each product surface and metric as owned, shared or influenced is confirmed by every neighbouring trio."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every screen, service and metric the trio currently touches"
                - "Mark each one as owned, shared or influenced"
                - "Meet the neighbouring trios to confirm the shared areas"
                - "Send the list of unowned gaps to your managers"
            - name: Skills map across the three trio members
              description: |-
                ## Purpose
                Trios work best when each member's strengths cover the others' gaps, yet most teams never say out loud who is strong at interviewing, data analysis, facilitation or technical spikes. A shared skills map makes it easy to divide discovery work sensibly and shows each person where to grow next.

                ## Milestones
                1. Twelve skills listed that the trio's work depends on.
                2. Each member rated on each skill by themselves and by the other two.
                3. The two skills nobody is strong in named as trio gaps.
                4. One growth goal per member agreed and shared with their manager.

                ## Notes
                Start from the **Skills matrix** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A skills map with self and peer ratings for all three members, two named gaps and one growth goal each is shared with their managers."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the twelve skills discovery and delivery most depend on"
                - "Rate yourself and each trio colleague on every skill"
                - "Name the two skills the trio lacks between you"
                - "Refresh the skills map at the start of each year @recurring(yearly)"
            - name: Shared trio workspace and decision log
              description: |-
                ## Purpose
                Discovery notes in one tool, design files in another and technical spikes in a third mean nobody sees the whole picture. One shared space with an index of research, a decision log, an open questions list and links to the design and code work gives all three leads the same context in one click.

                ## Milestones
                1. One workspace created with sections for research, decisions, questions and links.
                2. A decision log format with date, decision, options considered, owner and how reversible it is.
                3. Notes from the last two months moved or linked in.
                4. All three members using it as their default place to write.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared workspace with a decision log and research index holds every trio note written in its first month."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create the shared workspace with research, decisions and questions sections"
                - "Set up the decision log columns, including how reversible each call is"
                - "Link the last two months of research notes and design files"
                - "Agree to write new trio notes there instead of in private documents"
            - name: Kick-off session for a newly formed trio
              description: |-
                ## Purpose
                New trios usually start delivering before they have talked about how they want to work, then spend months repairing it. A half-day kick-off covering each member's background, working style, what success looks like in six months and the first problem to tackle sets the tone while everyone is still curious about each other.

                ## Milestones
                1. A half-day session held within the trio's first two weeks.
                2. Each member has shared their working style, pet hates and what they need from the other two.
                3. A six-month picture of success written together in one paragraph.
                4. The first problem the trio will investigate chosen, with a date to review progress.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A kick-off is held within two weeks of the trio forming, with a written six-month success paragraph and a first problem chosen."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Book a half-day in person or on video within the first fortnight"
                - "Prepare three questions each about how you like to work"
                - "Write the six-month success paragraph together during the session"
                - "Choose the first problem to investigate and set a review date"
            - name: Engineering lead time budget for discovery
              description: |-
                ## Purpose
                Engineering leads are often invited to discovery only after the solution is chosen, which is exactly when their feasibility knowledge matters least. Agreeing how many hours a week the engineering lead spends on customer sessions, solution sketches and technical spikes, and protecting that time from delivery pressure, puts feasibility into the conversation while options are still open.

                ## Milestones
                1. A weekly discovery time budget agreed for the engineering lead, for example four to eight hours.
                2. The engineering manager's agreement recorded, with cover for delivery duties.
                3. The engineering lead's first three discovery activities scheduled.
                4. A check after six weeks of whether the budget was kept.

                ## Notes
                Start small and protect it. Four hours that actually happen beat a full day that gets cancelled every sprint.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A weekly discovery budget for the engineering lead is agreed with their manager, and at least 80 percent of it was kept over six weeks."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Agree a weekly discovery hours budget with the engineering lead"
                - "Ask the engineering manager who covers delivery questions in that time"
                - "Put the engineering lead's first three discovery sessions in the calendar"
                - "Check after six weeks how many budgeted hours were actually spent"
            - name: Disagreement and escalation path
              description: |-
                ## Purpose
                Healthy trios disagree often, and the risk is not the disagreement but leaving it open for weeks. Writing down how a stuck decision gets unstuck, from a time-boxed debate to a named tiebreaker to a joint written escalation, means arguments end in a call and nobody goes over a colleague's head alone.

                ## Milestones
                1. A time limit agreed for how long a decision can stay open before it moves to the next step.
                2. A tiebreaker named for each decision type in the charter.
                3. An escalation note format covering the options, each member's view and the cost of waiting.
                4. A rule that escalations go to managers jointly, never from one member alone.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written escalation path with a time limit, named tiebreakers and a joint escalation note format is agreed by all three members."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Agree how many working days a stuck decision may stay open"
                - "Name the tiebreaker for each decision type in the charter"
                - "Write a one-page escalation note format with space for each member's view"
                - "Review how many decisions were escalated last quarter and why @recurring(quarterly)"
            - name: Weekly trio sync with a fixed agenda
              description: |-
                ## Purpose
                Without a standing slot, trio conversations happen in fragments across chat threads and corridors, and one member always misses the context. A 45-minute weekly sync with the same four items, customer learning, open decisions, risks and next week's focus, keeps the three aligned without adding meetings elsewhere.

                ## Milestones
                1. A recurring 45-minute slot that all three protect.
                2. A four-item agenda used every week: customer learning, decisions, risks and focus.
                3. Notes and decisions written into the shared workspace before the meeting ends.
                4. Eight consecutive syncs held with all three present or a delegate sent.

                ## Notes
                Start from the **Meeting notes** template. Rotate who facilitates so the product manager does not become the trio's secretary.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly syncs are held with the fixed agenda, each with its decisions logged in the shared workspace."
                cadence: rolling
              tasks:
                - "Book a recurring 45-minute trio slot all three can protect"
                - "Write the four standing agenda items into the notes template"
                - "Run the weekly trio sync and log decisions before leaving @recurring(weekly:tue)"
                - "Rotate the facilitator each week across the three members"
            - name: Decision log upkeep and monthly read-back
              description: |-
                ## Purpose
                A decision log is only useful if it is current and someone reads it. Logging every trio decision within a day, then reading the month's entries back together, catches decisions that were quietly reversed, shows which reversible calls could have been made faster and gives new joiners the reasoning, not just the outcome.

                ## Milestones
                1. Every trio decision logged within one working day of being made.
                2. A monthly read-back of the log held by all three.
                3. Decisions that were reversed or ignored marked with the reason.
                4. Six months of entries searchable by topic.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly read-backs are completed, with every reversed decision marked with its reason."
                cadence: rolling
              tasks:
                - "Log each trio decision with its options and owner within a day"
                - "Ask the agent to group the month's decisions by theme"
                - "Read back the month's decision log together @recurring(monthly:12)"
                - "Mark any reversed or ignored decisions with the reason"
            - name: Customer exposure hours for all three members
              description: |-
                ## Purpose
                When only the product manager talks to customers, the designer and engineer get problems second-hand and filtered. Setting a monthly target, for example two customer conversations or support shadowing sessions each, and tracking it openly means all three can argue from what they saw rather than what they were told.

                ## Milestones
                1. A monthly exposure target agreed for each member.
                2. A simple tally of conversations, support shadowing and usability sessions per person.
                3. Each member joining at least one session a month as note-taker or lead.
                4. Three consecutive months in which all three met the target.

                ## Notes
                Listening in and taking notes counts. Interview technique itself belongs with the team's discovery interview practice; this project is about who is in the room.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All three trio members meet the agreed monthly customer exposure target for three consecutive months."
                cadence: rolling
              tasks:
                - "Agree a monthly customer exposure target for each trio member"
                - "Create a tally of sessions attended by each person"
                - "Check each member's customer exposure tally for the month @recurring(monthly:8)"
                - "Book the designer and engineer into the next two customer sessions"
            - name: Weekly four-risks review across value, usability, feasibility and viability
              description: |-
                ## Purpose
                Each lead naturally guards one kind of risk: the product manager value and viability, the designer usability, the engineer feasibility. Reviewing the top open assumptions in all four categories each week, with each lead presenting the one they own, keeps any single lens from dominating and surfaces the risk nobody is testing.

                ## Milestones
                1. A risk list with open assumptions tagged value, usability, feasibility or viability.
                2. An owner and a next test named for every high-risk assumption.
                3. A weekly review where each lead presents their category's top risk.
                4. No high-risk assumption left untested for more than four weeks.

                ## Notes
                Start from the **Risk register** template, with a column for each of the four risk types.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A four-category risk register is reviewed weekly for two months, with no high-risk assumption untested for more than four weeks."
                cadence: rolling
              tasks:
                - "Tag every open assumption as value, usability, feasibility or viability"
                - "Name an owner and a next test for each high-risk assumption"
                - "Review the top risk in each of the four categories together @recurring(weekly:thu)"
                - "Flag any high-risk assumption that has gone four weeks untested"
            - name: Monthly trio retrospective
              description: |-
                ## Purpose
                Sprint retrospectives look at the whole team's delivery, but the trio's own collaboration rarely gets examined. Thirty minutes a month on how the three worked together, what slowed a decision, where someone felt left out and what to try next catches friction while it is still small.

                ## Milestones
                1. A monthly 30-minute retrospective just for the trio.
                2. One experiment chosen each month with an owner.
                3. Last month's experiment reviewed at the start of each session.
                4. Recurring themes collected across six months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly trio retrospectives are held, each producing one experiment that is reviewed the following month."
                cadence: rolling
              tasks:
                - "Book a monthly 30-minute trio retrospective"
                - "Run the trio retrospective and pick one experiment @recurring(monthly:26)"
                - "Open each session by reviewing last month's experiment"
                - "Collect recurring themes in one running list"
            - name: Weekly design and engineering pairing slot
              description: |-
                ## Purpose
                Handing over finished designs invites late surprises: an animation that costs a week, a layout that breaks the component library, an empty state nobody drew. A standing weekly hour where the designer and engineering lead sketch and review work in progress together catches those problems while they cost minutes rather than sprints.

                ## Milestones
                1. A protected weekly hour for the designer and engineering lead.
                2. Work in progress shown before it is polished, not after.
                3. Feasibility concerns and component reuse noted in the design file.
                4. Late design changes during build counted over a quarter and compared with the one before.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve weekly pairing hours are held in a quarter, with late design changes during build counted and compared with the previous quarter."
                cadence: rolling
              tasks:
                - "Book a weekly hour for the designer and engineering lead to pair"
                - "Bring unfinished designs to the pairing hour @recurring(weekly:wed)"
                - "Note feasibility concerns directly in the design file"
                - "Count late design changes during build at the end of the quarter"
            - name: Quarterly trio health check
              description: |-
                ## Purpose
                Collaboration drifts as deadlines, reorganisations and new members arrive. Re-running the baseline statements every quarter shows whether the experiments from retrospectives are working, and gives managers an early, specific signal instead of a vague sense that the trio is struggling.

                ## Milestones
                1. The same ten statements scored by all three every quarter.
                2. Results compared with the baseline and the previous quarter.
                3. Any statement that dropped by a point discussed at the next retrospective.
                4. A one-line trend shared with the trio's managers.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly health checks are completed in a year, each compared with the baseline and summarised for the managers."
                cadence: cyclic
              tasks:
                - "Score the ten health statements privately @recurring(quarterly)"
                - "Compare the scores with the baseline and last quarter"
                - "Raise any statement that fell by a point at the next retrospective"
                - "Send a one-line trend summary to your managers"
            - name: Pairwise one-to-ones inside the trio
              description: |-
                ## Purpose
                Group meetings hide the tension between two people, such as a designer who feels overruled by the engineer, or a product manager who notices the designer going quiet in reviews. A monthly one-to-one for each pair, product with design, product with engineering and design with engineering, gives each relationship its own space.

                ## Milestones
                1. Three pairwise one-to-ones scheduled every month.
                2. A short shared agenda page for each pair.
                3. At least one concern raised and resolved inside a pair rather than in the group.
                4. Six months of pairwise meetings held.

                ## Notes
                Start from the **1:1** template. The design and engineering pair is the one most often skipped, so protect it first.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All three pairwise one-to-ones are held monthly for six months, each pair with a shared agenda page."
                cadence: rolling
              tasks:
                - "Schedule monthly one-to-ones for each of the three pairs"
                - "Start a shared agenda page for each pair"
                - "Hold this month's three pairwise one-to-ones @recurring(monthly:15)"
                - "Note any concern resolved within a pair rather than the group"
            - name: Scope trade-off conversation before each cycle commitment
              description: |-
                ## Purpose
                Scope, time and quality pull against each other, and when one lead makes the trade-off alone the other two feel it later. A short conversation before each cycle or sprint commitment, where all three name what they would cut and what they refuse to cut, turns trade-offs into a joint call recorded in the decision log.

                ## Milestones
                1. A standing trade-off conversation before each cycle commitment.
                2. Each lead naming one cut they would accept and one line they will not cross.
                3. The agreed scope, deferred items and quality bar recorded in the decision log.
                4. Six cycles committed with the trade-off recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive cycle commitments each have a recorded trade-off agreed by all three leads."
                cadence: rolling
              tasks:
                - "Add a trade-off conversation to the calendar before each commitment"
                - "Name one acceptable cut and one non-negotiable each"
                - "Hold the pre-commitment trade-off conversation @recurring(monthly:3)"
                - "Record the agreed scope and deferred items in the decision log"
            - name: Post-release outcome review as a trio
              description: |-
                ## Purpose
                Teams celebrate shipping and move on, so nobody checks whether customers behaved any differently. A monthly review in which the trio looks at what shipped four to eight weeks ago against the success criteria agreed before build makes outcomes something all three own, rather than a report the product manager writes alone.

                ## Milestones
                1. A list of releases from the last two months with their pre-agreed success criteria.
                2. Each release marked as moved the measure, no change or too early to tell.
                3. One follow-up decision per release: iterate, leave alone or remove.
                4. Six monthly reviews held with verdicts recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly outcome reviews are held, each giving every recent release a verdict and a follow-up decision."
                cadence: rolling
              tasks:
                - "List releases from the last two months with their success criteria"
                - "Review shipped work against its success criteria together @recurring(monthly:22)"
                - "Agree whether to iterate, leave alone or remove each release"
                - "Record each outcome verdict in the decision log"
            - name: Joint triage of technical and design debt
              description: |-
                ## Purpose
                Engineering leads carry a list of technical debt, designers a list of inconsistencies and accessibility gaps, and product managers rarely see either until something breaks. A quarterly triage where the three rank both lists together and agree a share of capacity, such as 15 to 20 percent, makes debt a trade-off the trio owns instead of a fight in every sprint.

                ## Milestones
                1. Technical and design debt in one list with a rough size for each item.
                2. Each item scored for customer impact and the risk of leaving it.
                3. A share of capacity agreed for debt in the coming quarter.
                4. Last quarter's debt work reviewed against what was planned.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A ranked combined debt list and an agreed capacity share are recorded every quarter for a year."
                cadence: cyclic
              tasks:
                - "Merge the technical and design debt lists into one"
                - "Score each debt item for customer impact and risk"
                - "Agree the quarter's capacity share for debt as a trio @recurring(quarterly)"
                - "Compare last quarter's planned and completed debt work"
            - name: Running a trio decision with options and criteria
              description: |-
                ## Purpose
                Debates drag on when each lead argues for a different solution against criteria nobody stated. Learning to frame a decision as two to four options scored against three or four agreed criteria, written before anyone picks a favourite, cuts debates from weeks to an hour and leaves a clear record of why.

                ## Milestones
                1. A decision framing format learned: question, options, criteria and recommendation.
                2. Three real trio decisions run using the format.
                3. Time from question to decision noted for each one.
                4. The format added to the working agreement.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three trio decisions are made using written options and agreed criteria, each with the time to decide recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read a short guide to options and criteria decision making"
                - "Pick an open trio decision and write two to four options"
                - "Agree the criteria before anyone states a preference"
                - "Add the format to the trio's working agreement"
            - name: Disagree and commit in practice
              description: |-
                ## Purpose
                Committing to a decision you argued against is a skill, and without it trios slide into polite agreement in the room and quiet resistance afterwards. Practising how to state dissent clearly, record it beside the decision and then back the call fully, with an agreed point to revisit it, makes strong disagreement safe.

                ## Milestones
                1. Each member able to state dissent in one sentence with their reason.
                2. Dissent recorded in the decision log alongside the decision.
                3. A revisit trigger agreed for contested decisions, such as a metric threshold or a date.
                4. Two contested decisions handled this way and reviewed at their trigger.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two contested decisions are recorded with dissent and a revisit trigger, and both are reviewed when the trigger arrives."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Agree how dissent will be written in the decision log"
                - "Write a revisit trigger for each contested decision"
                - "Review contested decisions when their trigger is reached"
                - "Discuss at a retrospective whether committed decisions were fully backed"
            - name: Business basics for the designer and engineering lead
              description: |-
                ## Purpose
                Designers and engineers make better trade-offs when they know how the product makes money, what a customer costs to win and which segments matter most. A few sessions led by the product manager on the business model, the key revenue numbers and the strategy behind current work make all three equal partners in viability discussions.

                ## Milestones
                1. The business model explained on one page: who pays, for what and how often.
                2. The five business numbers the trio's work affects listed with current values.
                3. The company strategy linked to the trio's current problem in a paragraph.
                4. The designer and engineering lead have each explained the viability case for one initiative.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The designer and engineering lead have each presented the viability case for one initiative using the trio's one-page business summary."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Draft a one-page summary of how the product makes money"
                - "List the five business numbers the trio's work affects"
                - "Run a 45-minute session on the business model for the trio"
                - "Ask the designer and engineer to present one viability case each"
            - name: Technical fluency for the product manager and designer
              description: |-
                ## Purpose
                Product managers and designers who cannot picture the system ask for things that are surprisingly expensive and miss options that are surprisingly cheap. An architecture walkthrough from the engineering lead, covering the main services, where data lives and what makes changes slow, lets the other two ask better questions in every feasibility discussion.

                ## Milestones
                1. An architecture walkthrough held, with a simple diagram the product manager and designer can redraw.
                2. The three parts of the system most often touched by the trio's work explained.
                3. A glossary of ten technical terms the team uses daily.
                4. The product manager and designer each able to explain why one past request was costly.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The product manager and designer can each redraw the system diagram and explain one past costly request, checked by the engineering lead."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the engineering lead for a one-hour architecture walkthrough"
                - "Redraw the system diagram from memory and check it with the engineer"
                - "Write a glossary of ten technical terms the team uses daily"
                - "Pick one past costly request and explain why it was hard to build"
            - name: Design critique the whole trio can join
              description: |-
                ## Purpose
                Design reviews go wrong when non-designers react with personal taste about colours and fonts rather than goals, and designers then stop showing early work. Learning a shared critique format that starts from the goal and the user, then names what supports it and what does not, lets product and engineering give feedback designers actually want.

                ## Milestones
                1. A critique format agreed: goal, user, what works and what does not serve the goal.
                2. Three design critiques run with every trio member contributing.
                3. The designer's rating of how useful the feedback was recorded after each.
                4. Early sketches shown at critique, not only polished screens.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three design critiques are run with the agreed format, each rated useful by the designer."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Agree a four-part critique format with the designer"
                - "Run three critiques where every trio member gives goal-based feedback"
                - "Ask the designer to rate how useful the feedback was each time"
                - "Bring rough sketches to at least one critique"
            - name: Giving direct feedback inside the trio
              description: |-
                ## Purpose
                Peers in a trio have no reporting line between them, so feedback often goes unsaid or travels through managers. Learning a simple structure, the situation, the behaviour and its impact, and practising it in the pairwise one-to-ones lets each member hear what helps and what hurts directly from the person concerned.

                ## Milestones
                1. A feedback structure learned by all three members.
                2. Each member has given one positive and one critical point to each colleague.
                3. Feedback that went through a manager instead discussed, and the habit changed.
                4. A feedback norm added to the working agreement.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each trio member has given positive and critical feedback directly to both colleagues, and a feedback norm is in the working agreement."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read a short guide to situation, behaviour and impact feedback"
                - "Prepare one positive and one critical point for each colleague"
                - "Deliver the feedback during the next pairwise one-to-ones"
                - "Add a feedback norm to the working agreement"
            - name: Joint problem brief written by all three leads
              description: |-
                ## Purpose
                Briefs written by the product manager alone tend to carry one discipline's assumptions. A one-page problem brief written together, with the product manager on customer and business context, the designer on user behaviour and the engineer on constraints and options, builds shared understanding before any detailed spec exists.

                ## Milestones
                1. A one-page brief format with a section owned by each lead.
                2. One brief drafted by all three in a single working session.
                3. Gaps and disagreements flagged in the brief rather than smoothed over.
                4. The brief used as the starting point for the next detailed spec.

                ## Notes
                The brief comes before the full requirements document and does not replace it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page problem brief with sections written by all three leads is complete and used to start the next spec."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Agree a one-page brief format with a section owned by each lead"
                - "Draft the brief together in one 90-minute session"
                - "Flag open disagreements in the brief instead of deleting them"
                - "Hand the finished brief to whoever writes the detailed spec"
            - name: Forecasting delivery with ranges as a trio
              description: |-
                ## Purpose
                A single delivery date given under pressure becomes a promise the engineering lead carries alone. Learning to forecast with ranges and confidence levels based on past cycle time lets the trio give stakeholders honest answers, and decide together which scope to cut when the range is too wide.

                ## Milestones
                1. Cycle time data from the last three months collected.
                2. A first forecast given as a range with a confidence level.
                3. Forecast and actual compared for three pieces of work.
                4. Range forecasting written into how the trio answers date questions.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three delivery forecasts are given as ranges, each compared with the actual result and the comparison recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Pull cycle times for the last three months of completed work"
                - "Give the next forecast as a range with a confidence level"
                - "Compare forecast and actual for three finished pieces of work"
                - "Agree that date questions get a range answer from all three leads"
            - name: Replacing design handoff with continuous collaboration
              description: |-
                ## Purpose
                Handoffs, where finished designs are passed over to engineering, make the designer a supplier and the engineer a recipient. Moving to overlapping work, with engineering joining from the first sketches and design staying involved through build and release, cuts rework and gives both disciplines a stake in the result.

                ## Milestones
                1. The current handoff points mapped, with rework from the last quarter counted.
                2. A new working model agreed, with engineering in early sketches and design in build reviews.
                3. Two initiatives run under the new model.
                4. Rework compared with the previous quarter.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Two initiatives are run with engineering in early sketches and design in build reviews, with rework compared against the previous quarter."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Map where design work currently passes to engineering"
                - "Count design rework in the last quarter's builds"
                - "Agree the stages where both disciplines must be present"
                - "Run the next two initiatives under the new model"
            - name: Trio meeting load audit
              description: |-
                ## Purpose
                Trios often add meetings as collaboration grows, until the three leads have no time left to think. Auditing every recurring meeting each member attends, and cutting, merging or making optional anything that does not need all three, protects focus time and keeps the trio's own meetings purposeful.

                ## Milestones
                1. Every recurring meeting each member attends listed with its weekly hours.
                2. Each meeting marked keep, merge, shorten, make optional or drop.
                3. Total meeting hours per member reduced by an agreed amount.
                4. A weekly meeting limit added to the working agreement.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Meeting hours per trio member fall by the agreed amount within a month, and a meeting limit is written into the working agreement."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every recurring meeting each trio member attends"
                - "Mark each meeting keep, merge, shorten, optional or drop"
                - "Decline or reshape the meetings marked for change"
                - "Add a weekly meeting hours limit to the working agreement"
            - name: Dividing discovery work between product and design
              description: |-
                ## Purpose
                Product managers and designers both claim discovery, so sessions get duplicated, synthesis is done twice or not at all, and one person feels sidelined. Agreeing who leads planning, recruiting, interviewing, synthesis and usability testing, with the other as an active partner, removes the turf question.

                ## Milestones
                1. Each discovery activity listed with a lead and a partner.
                2. The engineering lead's role in each activity written down.
                3. The division tested on one full discovery round.
                4. The split adjusted after a retrospective.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written split of discovery activities with a lead and partner for each is tested on one discovery round and reviewed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every discovery activity the trio carries out"
                - "Assign a lead and a partner for each activity"
                - "Write the engineering lead's role in each activity"
                - "Review the division at the next trio retrospective"
            - name: Choosing who represents engineering in the trio
              description: |-
                ## Purpose
                When a team has both a tech lead and an engineering manager, it is often unclear which one sits in the trio, so both attend or neither commits fully. Deciding from what the trio needs, technical depth for discovery or people and capacity for planning, and writing down how the other is kept informed settles it.

                ## Milestones
                1. The trio's needs from engineering listed: technical depth, capacity and people matters.
                2. One engineering representative chosen, with the reason recorded.
                3. How the other role is kept informed agreed.
                4. The choice reviewed after one quarter.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One engineering representative is named for the trio with the reason recorded, and a review after one quarter is completed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List what the trio needs from its engineering member"
                - "Discuss the options with the tech lead and engineering manager together"
                - "Record the chosen representative and the reason"
                - "Agree how the other engineering role stays informed"
            - name: Shared quality bar for what the trio ships
              description: |-
                ## Purpose
                Each discipline defines quality differently: the designer thinks of polish and accessibility, the engineer of reliability and performance, the product manager of whether the problem is solved. A written quality bar all three hold every release to, including accessibility checks, performance budgets and error states, ends last-minute arguments about whether something is good enough.

                ## Milestones
                1. Quality criteria from each discipline listed and merged.
                2. Measurable checks agreed, such as page load budgets and an accessibility standard.
                3. The bar applied to two releases before they shipped.
                4. Exceptions recorded with who agreed them.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written quality bar with measurable checks is applied to two releases, with any exceptions recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write five quality criteria each from your own discipline"
                - "Merge them into one checkable quality bar"
                - "Apply the quality bar to the next two releases"
                - "Revisit the quality bar together each year @recurring(yearly)"
            - name: Success criteria agreed before build starts
              description: |-
                ## Purpose
                If the trio cannot agree what success looks like before engineering starts, it will not agree afterwards either. Requiring every initiative above a size threshold to have a measurable outcome, a target and a check date signed off by all three before build begins makes outcome reviews possible and stops vague work early.

                ## Milestones
                1. A size threshold agreed above which written success criteria are required.
                2. A short success criteria format: behaviour change, measure, target and check date.
                3. Every current initiative above the threshold given criteria.
                4. No new initiative starting build without all three signing off.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every initiative above the agreed size has written success criteria signed by all three leads before build starts, for a full quarter."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Agree the size threshold that requires written success criteria"
                - "Write criteria for every initiative currently in progress"
                - "Get all three leads to sign off criteria before build starts"
                - "Hold back any initiative missing criteria from the next cycle"
            - name: Choosing the trio's collaboration tools
              description: |-
                ## Purpose
                Trios end up with a whiteboard tool, two document tools, a design tool and a chat app, and important context leaks into all of them. A short decision on which tool holds what, comparing options against criteria such as access for all three, search and links to the design and engineering systems, cuts the sprawl.

                ## Milestones
                1. Current tools listed with what each one holds.
                2. Criteria agreed: access, search, cost and links to design and code systems.
                3. One tool chosen for each job, with the rest retired for trio work.
                4. Old content moved or linked within a month.

                ## Notes
                Start from the **Purchase decision** template if a new tool needs budget.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written list naming one tool for each trio job is agreed, and old content is moved or linked within a month."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every tool the trio uses and what each one holds"
                - "Agree criteria for choosing the trio's main tools"
                - "Pick one tool for each job and retire the rest for trio work"
                - "Move or link the old content into the chosen tools"
            - name: Rebuilding trust after a failed release
              description: |-
                ## Purpose
                After a release that misses badly, whether late, buggy or ignored by customers, each lead is tempted to blame the other disciplines. Working through what happened together, with each person naming their own part first, repairs the relationship and turns the failure into specific changes.

                ## Milestones
                1. A private trio conversation held within two weeks of the failure.
                2. Each member's own contribution named by themselves first.
                3. Three specific changes agreed to how the trio works.
                4. A check two months later on whether the changes and the trust have held.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Three agreed changes are recorded after a trio conversation about the failure, and checked two months later."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Book a private trio conversation within two weeks of the failure"
                - "Write down your own part in what went wrong before the meeting"
                - "Agree three specific changes to how the trio works"
                - "Check in two months later on whether the changes held"
            - name: Quarterly trio planning offsite
              description: |-
                ## Purpose
                Day-to-day work leaves little room to step back and ask whether the trio is solving the right problems. A half or full day each quarter, away from screens and the backlog, to review outcomes, revisit the risk register and choose the next problems to explore gives the three a shared starting point for the quarter.

                ## Milestones
                1. A date and place booked for the offsite.
                2. Outcome results, health check scores and the risk register prepared beforehand.
                3. The next quarter's two or three problems agreed.
                4. A one-page offsite summary shared with the team.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An offsite is held each quarter, producing two or three agreed problems and a one-page summary shared with the team."
                cadence: cyclic
              tasks:
                - "Book a date and a room away from the usual desks"
                - "Prepare outcome results, health scores and the risk register"
                - "Hold the offsite and agree the next two or three problems @recurring(quarterly)"
                - "Share a one-page summary with the wider team"
            - name: Discovery week before committing to a big bet
              description: |-
                ## Purpose
                Large initiatives deserve more than a meeting before they are funded. A time-boxed week in which all three leads clear their calendars to map the problem, talk to five customers, sketch solutions and spike the riskiest technical question produces a joint recommendation that a manager can actually fund or stop.

                ## Milestones
                1. Five days blocked in all three calendars.
                2. Five customer conversations held and synthesised.
                3. At least two solution sketches and one technical spike completed.
                4. A joint go, change or stop recommendation written on two pages.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A two-page joint recommendation based on five customer conversations and one technical spike is delivered at the end of the week."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Block the same five days in all three calendars"
                - "Recruit five customers to talk to during the week"
                - "Run the riskiest technical spike alongside the solution sketches"
                - "Write the joint two-page recommendation on the final day"
            - name: Trio practice show and tell for other teams
              description: |-
                ## Purpose
                Good habits such as a decision log or a four-risks review rarely travel between trios, so neighbouring teams reinvent them. A 30-minute show and tell for other trios, presenting one practice with real examples and honest limits, spreads what works and invites ideas back.

                ## Milestones
                1. One practice chosen with real examples to show.
                2. A 30-minute session booked with at least two other trios.
                3. Questions and ideas from other trios recorded.
                4. One idea from another trio tried within a month.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A show and tell is held with at least two other trios, and one borrowed idea is tried within a month."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose one trio practice worth showing to other teams"
                - "Prepare real examples and the practice's limits"
                - "Run the 30-minute show and tell with at least two trios"
                - "Try one idea borrowed from another trio within a month"
            - name: Blameless trio review after a major release
              description: |-
                ## Purpose
                Major releases expose how the trio works under pressure, from late scope changes to quiet disagreements about readiness. A blameless review within two weeks of each major release, looking at decisions rather than people, captures what to repeat and what to change while memories are fresh.

                ## Milestones
                1. A timeline of key decisions from kick-off to release.
                2. Points where the trio disagreed or decided late marked on it.
                3. Three things to repeat and three to change written down.
                4. The changes added to the next retrospective's experiments.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A blameless review with a decision timeline and three items each to repeat and change is recorded within two weeks of the release."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book the review within two weeks of the release"
                - "Draft a timeline of key decisions from kick-off to release"
                - "Agree three things to repeat and three to change"
                - "Add the changes to the next trio retrospective"
            - name: Annual trio charter renewal
              description: |-
                ## Purpose
                Twelve months change the product, the team and what the trio is trusted to decide. Renewing the charter, the working agreement and the ownership map once a year, with each member saying what they want to keep or change, keeps the documents true rather than historical.

                ## Milestones
                1. Charter, working agreement and ownership map reviewed together.
                2. Each member's keep, change and drop list shared.
                3. Updated documents agreed by the trio and its managers.
                4. The renewal date set for next year.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The charter, working agreement and ownership map are renewed and agreed by the trio and its managers once a year."
                cadence: cyclic
              tasks:
                - "Book a two-hour charter renewal session @recurring(yearly)"
                - "Write your own keep, change and drop list before the session"
                - "Update the charter, working agreement and ownership map"
                - "Send the renewed documents to the trio's managers"
            - name: Joining an existing trio as a new member
              description: |-
                ## Purpose
                Joining a trio that already works together means learning its shorthand, its past decisions and its open arguments, often while being expected to contribute in week one. A 30, 60 and 90-day plan covering the decision log, customer sessions, one-to-ones with each colleague and a first owned decision gets a new product manager, designer or engineering lead up to speed without resetting the trio.

                ## Milestones
                1. The charter and decision log read in the first week.
                2. One-to-ones held with both trio colleagues and their managers.
                3. At least two customer sessions attended in the first month.
                4. One trio decision led by the new member by day 90.

                ## Notes
                Start from the **Onboarding 30/60/90** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "By day 90 the new member has attended two customer sessions, met both colleagues one-to-one and led one trio decision."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Read the trio charter and the last three months of decisions"
                - "Book one-to-ones with both colleagues in the first week"
                - "Join two customer sessions in the first month"
                - "Lead one trio decision before day 90"
            - name: Forming trios across a product group
              description: |-
                ## Purpose
                Managers setting up a trio model across several teams face mismatched ratios, often four product managers to two designers, and pairings that look fine on paper but clash in practice. Planning trio membership with the design and engineering managers, checking ratios and working styles, and agreeing common expectations gives each trio a fair start.

                ## Milestones
                1. Current product managers, designers and engineering leads mapped to teams.
                2. Ratio gaps named, with a plan to fill or share roles.
                3. Trio pairings agreed by the three discipline managers.
                4. A common set of expectations for every trio written on one page.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every team in the product group has a named trio agreed by all three discipline managers, with one page of shared expectations."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Map every product manager, designer and engineering lead to a team"
                - "Name the teams where a discipline is missing or shared"
                - "Agree trio pairings with the design and engineering managers"
                - "Write one page of expectations every trio will work to"
            - name: Coaching a trio that is struggling
              description: |-
                ## Purpose
                When a trio stalls, the symptoms show up as missed decisions, escalations from one member or a designer quietly disengaging. A manager who observes a few trio meetings, talks to each member separately and agrees two or three changes with the trio, rather than for it, can usually fix the pattern before anyone asks to move teams.

                ## Milestones
                1. Two trio meetings observed without intervening.
                2. Each member interviewed separately about what is not working.
                3. Two or three changes agreed with the trio together.
                4. Progress checked monthly for three months.
              priority: medium
              frontmatter:
                mode: service
                output_kind: knowledge
                success_criteria: "Two or three changes agreed with the trio are tracked monthly for three months, with progress noted after each observation."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Sit in on two trio meetings and only take notes"
                - "Talk to each trio member separately about what is not working"
                - "Agree two or three changes with the trio together"
                - "Observe one trio meeting and note progress on the changes @recurring(monthly:10)"
            - name: Sharing one designer across two trios
              description: |-
                ## Purpose
                Many product groups have fewer designers than teams, so one designer sits in two trios and ends up half-present in both. Agreeing which trio gets which days, what each can expect and how the two product managers settle competing demand protects the designer from refereeing between two sets of priorities.

                ## Milestones
                1. The designer's time split agreed between the two trios.
                2. A single view of design demand from both trios.
                3. A rule for conflicts, with the two product managers settling priority before asking the designer.
                4. The designer's workload reviewed with them after six weeks.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written time split and conflict rule for the shared designer are in place, and their workload is reviewed after six weeks."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Agree which days or weeks belong to each trio"
                - "Combine both trios' design requests into one view"
                - "Agree that the two product managers settle conflicts first"
                - "Check the designer's workload with them after six weeks"
            - name: Running a trio across time zones
              description: |-
                ## Purpose
                Spreading a trio across time zones removes the quick conversations that make decisions fast, and the member furthest away often hears about decisions last. Agreeing a small window of overlap, making decisions in writing with a response deadline and sending a weekly digest keeps all three equal partners wherever they sit.

                ## Milestones
                1. An overlap window of at least two hours a week agreed.
                2. A written decision format with a response deadline.
                3. A weekly digest of decisions and open questions.
                4. Meeting times rotated so one member is not always on the late call.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly written digest is sent for eight weeks, and no trio member has been on the late call more than half the time."
                cadence: rolling
              tasks:
                - "Find a weekly overlap window that works for all three"
                - "Agree a written decision format with a response deadline"
                - "Ask the agent to draft the weekly digest from the trio's notes @recurring(weekly:fri)"
                - "Rotate meeting times so the late call is shared"
            - name: Keeping the trio together through a reorganisation
              description: |-
                ## Purpose
                Reorganisations split trios, change their scope or swap a member with little notice. Planning how the trio's knowledge, decisions and customer relationships transfer, and how the changed trio restarts, avoids losing months of discovery and context in a single announcement.

                ## Milestones
                1. What changes for the trio written down: scope, members or both.
                2. A handover pack of decision log, research and open risks.
                3. A restart session for the changed trio held within two weeks.
                4. Customer contacts and commitments passed to named owners.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A handover pack is complete and a restart session is held within two weeks of the reorganisation taking effect."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write down exactly what the reorganisation changes for the trio"
                - "Prepare a handover pack of decisions, research and open risks"
                - "Hold a restart session with the changed trio within two weeks"
                - "Hand each customer commitment to a named owner"
            - name: Trio effectiveness signals for managers
              description: |-
                ## Purpose
                Managers often judge trios by how much they ship or how loudly they disagree, and both are poor signals. A small set of indicators, such as time from question to decision, the share of initiatives with success criteria before build, customer exposure hours and the health check trend, gives a fairer quarterly picture across several trios.

                ## Milestones
                1. Four to six effectiveness indicators chosen with the trios.
                2. A data source and an owner named for each indicator.
                3. One quarter of indicators collected across every trio.
                4. Indicators discussed privately with each trio, not ranked publicly.

                ## Notes
                Use these to start conversations. Ranking trios against each other on these numbers quickly turns them into targets to game.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Four to six indicators are collected for every trio for two quarters and discussed privately with each one."
                cadence: rolling
              tasks:
                - "Draft four to six trio effectiveness indicators"
                - "Agree the indicators and data sources with each trio"
                - "Collect the effectiveness indicators for every trio @recurring(quarterly)"
                - "Discuss each trio's indicators with them privately"
            - name: Extending the trio to a quad
              description: |-
                ## Purpose
                Some problems need a fourth voice in the core group: a data scientist for a model-driven feature, a content designer for a writing-heavy product, a product marketer close to launch. Deciding when to add a fourth member, what they decide with the trio and when they step back keeps the group small enough to move fast.

                ## Milestones
                1. The situations that justify a fourth member listed.
                2. Decision rights for the fourth member written into the charter.
                3. A quad run for one initiative with a start and end date.
                4. A review of whether the fourth member sped up or slowed decisions.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One initiative is run as a quad with written decision rights, followed by a recorded review of decision speed."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the situations where a fourth member would help"
                - "Write the fourth member's decision rights into the charter"
                - "Run one initiative as a quad with a clear end date"
                - "Review whether decisions got faster or slower with four"
            - name: Shared outcome credit in performance reviews
              description: |-
                ## Purpose
                Product trios are asked to own outcomes together, then each member is reviewed separately by a manager in their own discipline who sees only part of the work. Agreeing with the three discipline managers how shared outcomes and peer feedback feed into each member's review stops individual incentives pulling the trio apart.

                ## Milestones
                1. Each discipline's current review criteria compared side by side.
                2. A shared section on trio outcomes agreed for all three reviews.
                3. Peer feedback from both trio colleagues included in each review.
                4. The approach checked after one review cycle.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "All three trio members' reviews include a shared outcomes section and peer feedback from both colleagues in one review cycle."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Compare the review criteria used for each discipline"
                - "Agree a shared trio outcomes section with the three managers"
                - "Collect peer feedback from both trio colleagues before reviews @recurring(yearly)"
                - "Check after one cycle whether the shared section was used"
---

# Product Trio Collaboration

This area is for product managers, designers and engineering leads who want to decide together rather than pass work down a line, and for the managers who set trios up and keep them healthy. It starts with the foundations (decision rights, a working agreement, ownership boundaries, a shared workspace and a kick-off), moves to the weekly and monthly rhythms that keep three disciplines aligned, then the skills each lead needs from the others, improvements such as ending design handoff, the planning events, situations like joining a trio or sharing a designer, and finally the manager's view across many trios.

What repeats is a Tuesday trio sync, a Wednesday design and engineering pairing hour and a Thursday four-risks review, monthly decision log read-backs, customer exposure checks, pairwise one-to-ones, outcome reviews and retrospectives, a quarterly health check, debt triage and offsite, and a yearly charter renewal. The Meeting notes, 1:1, Risk register, Skills matrix, Onboarding 30/60/90 and Purchase decision templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
