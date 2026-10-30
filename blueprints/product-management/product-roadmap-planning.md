---
id: product-management.product-roadmap-planning
name: Product Roadmap Planning
description: "An outcome-based roadmap built from strategy, real capacity and existing commitments, refreshed monthly as learning arrives, with honest versions for the team, leadership and customers."
category: business
version: 1.0.0
tags: [product-management, product-roadmap-planning, team, manager, founder, outcome-roadmap, now-next-later, quarterly-planning]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - meeting-notes
    - operational-checklist
    - risk-register
    - reading-queue
    - metrics-log
  pillars:
    - name: Product Management
      emoji: "🧩"
      description: "Deciding what to build and why: discovery and research, roadmaps and prioritisation, specs and launches, pricing and packaging, product analytics, and the feedback loops that keep a product honest."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Product Roadmap Planning
          description: "Building and communicating a product roadmap organised around outcomes and themes, updated as learning arrives rather than frozen for the year."
          projects:
            - name: Inventory of every roadmap in circulation
              description: |-
                ## Purpose
                Most product teams have more roadmaps than they think: a planning spreadsheet, a slide in the sales deck, a board appendix and a promise sitting in someone's inbox, each slightly different. Finding every version before building a new one shows where the contradictions are and who relies on which copy, so nothing breaks quietly when the new roadmap replaces them.

                ## Milestones
                1. Every roadmap artefact in use listed with its owner, audience and last edit date.
                2. The contradictions between versions written down, item by item.
                3. The people relying on each version identified, including sales and customer success.
                4. A retirement date set for every version the new roadmap will replace.

                ## Notes
                Search the sales enablement folder as well as product spaces. Old roadmap slides often live there long after the plan changed, and they are the ones customers have seen.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table listing every roadmap version in use, its owner and audience, the contradictions between versions and a retirement date for each."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Search shared drives and chat for files and slides named roadmap"
                - "List each version with its owner, audience and last edit date"
                - "Ask sales and support which roadmap they show customers"
                - "Ask the agent to compare the versions and list every contradiction"
                - "Set a retirement date for each version you will replace"
            - name: Roadmap purpose and audience statement
              description: |-
                ## Purpose
                A roadmap that tries to serve engineers, executives, salespeople and customers at once usually serves none of them well. Writing down which decisions the roadmap exists to support, and which audience gets which version, settles arguments about detail and dates before they start.

                ## Milestones
                1. A one-paragraph statement of the decisions the roadmap supports.
                2. Each audience listed with the version, level of detail and date precision it receives.
                3. An owner named for the roadmap and for each audience version.
                4. The statement agreed with your manager or co-founder and stored beside the roadmap.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written purpose and audience statement, naming an owner and the version each audience receives, agreed and stored beside the roadmap."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the three decisions the roadmap must help people make"
                - "List each audience and the level of detail it needs"
                - "Decide which audiences see dates and which see only sequence"
                - "Agree the statement with your manager or co-founder"
            - name: Choosing between Now, Next, Later and a dated timeline
              description: |-
                ## Purpose
                Timeline roadmaps look precise but turn every estimate into a promise, while a Now, Next, Later board shows sequence and confidence without inventing dates months away. Choosing the format deliberately, with your contracts, release trains and audiences in mind, avoids switching formats halfway through the year.

                ## Milestones
                1. The constraints that genuinely need dates listed, such as contractual commitments, regulatory deadlines or a hardware release.
                2. Both formats mocked up with the same five items.
                3. A format chosen, with a written reason and the rules for when a date may appear.
                4. The decision shared with the people who use the roadmap most.

                ## Notes
                A common default is Now, Next, Later internally, with dates only on items that carry an external commitment, marked as committed so nobody mistakes an estimate for a promise.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A roadmap format chosen and recorded, with a written rule for which items may carry dates and why."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every item that carries an external date commitment"
                - "Mock up five current items in both formats side by side"
                - "Write the rule for when a date may appear on the roadmap"
                - "Record the chosen format and the reason on the roadmap page"
            - name: Three to five roadmap themes drawn from strategy
              description: |-
                ## Purpose
                Themes such as cut time to first invoice or win mid-market accounts give the roadmap a spine that survives individual features being swapped out. Drawing them directly from company strategy and goals means every item can be traced to a reason leadership has already agreed, which ends most arguments about why something is there.

                ## Milestones
                1. The current company strategy, goals and product vision gathered in one place.
                2. Three to five themes drafted, each tied to a customer or business outcome.
                3. A progress measure named for each theme.
                4. Every existing roadmap item mapped to a theme or flagged as orphaned.
                5. The themes reviewed with leadership and adjusted.

                ## Notes
                An item that fits no theme is information: either the theme set is missing something real, or the item should leave the roadmap.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three to five outcome themes, each with a progress measure, agreed with leadership, with every roadmap item mapped to one or flagged as orphaned."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Collect the latest strategy, goals and product vision documents"
                - "Draft three to five themes, each phrased as an outcome"
                - "Name one progress measure for each theme"
                - "Map every current roadmap item to a theme or mark it orphaned"
                - "Review the themes with leadership and record their changes"
            - name: Planning horizons and confidence labels
              description: |-
                ## Purpose
                Work planned for this quarter can be described in detail, next quarter's work as problems with a rough size, and anything beyond that only as direction. Defining these horizons, and a simple confidence label for each item, tells every reader how much weight to put on what they see.

                ## Milestones
                1. Three horizons defined, each with a time range and the detail it carries.
                2. A three-level confidence scale written with a plain description of each level.
                3. Every roadmap item labelled with a horizon and a confidence level.
                4. A legend on the roadmap explaining both.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every roadmap item carries a horizon and a confidence label, with a legend on the roadmap explaining both."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Define the time range and level of detail for each horizon"
                - "Write a three-level confidence scale in plain words"
                - "Label every roadmap item with its horizon and confidence"
                - "Add a legend for horizons and confidence to the roadmap"
            - name: Roadmap item card with problem, outcome and evidence
              description: |-
                ## Purpose
                Roadmap items written as feature names, such as bulk export, invite debate about solutions instead of problems. A standard card for each item, with the customer problem, the outcome expected, the evidence behind it and a rough size, makes items comparable and keeps the conversation on why.

                ## Milestones
                1. A card format with problem, target outcome, evidence, size, theme and confidence fields.
                2. The ten most important roadmap items rewritten on the card.
                3. Gaps in evidence marked openly on the cards.
                4. The card format agreed with the design and engineering leads.

                ## Notes
                Keep the card to half a page. An item that needs a full specification belongs in the requirements process, not on the roadmap.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Ten roadmap items rewritten on a standard card, each stating problem, outcome, evidence and size, with weak evidence marked."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft a card format with problem, outcome, evidence, size and theme"
                - "Rewrite the ten most important roadmap items on the card"
                - "Mark every card where the evidence is thin or missing"
                - "Ask the design and engineering leads to review the card format"
            - name: Capacity baseline for the next two quarters
              description: |-
                ## Purpose
                Roadmaps fail most often because they assume a team has more time than it does. Counting real capacity for the next two quarters, after holidays, on-call duty, support rotation and a fixed share for maintenance, gives the roadmap a ceiling everyone can see and argue with honestly.

                ## Milestones
                1. Headcount per team for the next two quarters, including known joiners and leavers.
                2. Time lost to holidays, on-call, support and unplanned work estimated per team.
                3. A share reserved for maintenance, bugs and technical debt, agreed with engineering.
                4. Planned roadmap work compared with remaining capacity, and the gap stated in writing.

                ## Notes
                Ask engineering leads what share of time went to unplanned work last quarter and plan with that figure, not the hoped-for one.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written capacity figure per team for the next two quarters, with the maintenance share and the gap against planned work stated."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask each engineering lead for headcount and known absences next quarter"
                - "Estimate time lost to on-call, support and unplanned work"
                - "Agree the share of capacity reserved for maintenance and debt"
                - "Compare planned roadmap work with the capacity that remains"
                - "Update the capacity baseline for team size changes @recurring(quarterly)"
            - name: Register of commitments already made
              description: |-
                ## Purpose
                Before any new planning, someone has usually promised something: a feature in a signed contract, a date given to a partner, a regulatory change with a deadline. Gathering these into one register shows how much capacity is already spoken for and stops surprises arriving from the sales team in month three.

                ## Milestones
                1. Every known commitment listed with source, customer or partner, due date and owner.
                2. Each commitment checked against the contract or written promise, not memory.
                3. The rough size of each commitment estimated.
                4. Committed items marked on the roadmap so everyone planning can see them.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A commitments register with every promise sourced, dated, owned and sized, and each one marked on the roadmap."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask sales, partnerships and legal for feature promises made in writing"
                - "Check each claimed commitment against the contract or email"
                - "Estimate the rough size of each commitment"
                - "Mark committed items distinctly on the roadmap"
                - "Review the register for items due in the next quarter @recurring(monthly:3)"
            - name: Choosing a roadmap tool or staying in a spreadsheet
              description: |-
                ## Purpose
                Dedicated roadmap tools offer links to tickets and feedback and several views of one plan, but they charge per seat and take real time to set up well. Comparing two or three tools against a well-built spreadsheet or document, with your team size and audiences in mind, avoids paying for features nobody uses.

                ## Milestones
                1. Requirements written: views needed, integrations, sharing controls and budget.
                2. Two or three tools trialled against a spreadsheet baseline with the same items.
                3. A decision recorded with annual cost and the owner of setup.
                4. The chosen tool set up with the current roadmap migrated into it.

                ## Notes
                Start from the **Purchase decision** template. A small team with one roadmap rarely needs more than a shared document and a board view.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A tool decision recorded with requirements, annual cost and owner, and the current roadmap migrated into the chosen tool."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the views, integrations and sharing controls you need"
                - "Trial two tools with the same ten roadmap items"
                - "Compare annual cost against a spreadsheet baseline"
                - "Record the decision and who will set the tool up"
            - name: Single published home for the roadmap
              description: |-
                ## Purpose
                When the roadmap lives in five places, people trust whichever copy they saw last. Publishing one canonical version with a named owner, a visible last-updated date and the right access for each audience gives everyone the same reference point.

                ## Milestones
                1. One location chosen as the canonical roadmap, with the owner named on the page.
                2. A last-updated date and a link to the change log shown at the top.
                3. Access set so each audience sees its own version.
                4. Old copies replaced with a link to the canonical page.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One canonical roadmap page, with owner and last-updated date shown, and every old copy replaced by a link to it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose the one location that will hold the canonical roadmap"
                - "Add the owner and last-updated date to the top of the page"
                - "Replace old roadmap copies with a link to the canonical page"
                - "Check the published page matches the working version @recurring(monthly:26)"
            - name: Monthly roadmap refresh
              description: |-
                ## Purpose
                A roadmap is a set of current bets, and bets should change when evidence does. A fixed monthly session to move items between horizons, retire ones that no longer make sense and add what research has surfaced keeps the roadmap honest without turning it into weekly churn.

                ## Milestones
                1. A recurring monthly slot booked with the design and engineering leads.
                2. A short standing agenda: evidence since last month, changes proposed, changes agreed.
                3. Every agreed change recorded with its reason in the change log.
                4. Six consecutive monthly refreshes held.

                ## Notes
                Start from the **Meeting notes** template. Moving an item already in Now needs a stronger reason than moving something in Later.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly refreshes held, each with its changes and reasons recorded in the change log."
                cadence: rolling
              tasks:
                - "Book a monthly 60-minute slot with the design and engineering leads"
                - "Write a three-part standing agenda for the refresh"
                - "Hold the roadmap refresh and record agreed changes @recurring(monthly:8)"
                - "Send a two-line summary of changes to the team after each refresh"
            - name: Quarterly roadmap planning cycle
              description: |-
                ## Purpose
                Every quarter the Now horizon rolls over: finished work leaves, Next items need sharpening and capacity has moved. Running the same planning steps each quarter, with inputs gathered two weeks ahead, turns a stressful scramble into a routine the team can predict.

                ## Milestones
                1. A planning calendar with input deadlines two weeks before the quarter starts.
                2. Inputs gathered: outcome results, capacity, commitments and new evidence.
                3. The Now horizon for the coming quarter agreed with team leads.
                4. The updated roadmap published within a week of the quarter starting.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly cycles completed in a year, each producing a published roadmap within a week of the quarter starting."
                cadence: cyclic
              tasks:
                - "Draft a planning calendar working back from the quarter start"
                - "Gather outcome results, capacity and commitments two weeks ahead"
                - "Run quarterly planning and agree the next Now horizon @recurring(quarterly)"
                - "Publish the updated roadmap within a week of the quarter starting"
            - name: Weekly roadmap change log
              description: |-
                ## Purpose
                People lose trust in a roadmap when items vanish without explanation. A running change log, updated each week with what moved, why and who agreed, lets sales, support and leadership catch up without a meeting and gives you a record when someone asks what happened to their feature.

                ## Milestones
                1. A change log linked from the top of the roadmap.
                2. Each entry stating the item, the change, the reason and who agreed it.
                3. The log updated every week for three months.
                4. A summary of the quarter's changes pulled from the log for planning.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A change log with weekly entries for three months, each giving the change, the reason and who approved it."
                cadence: rolling
              tasks:
                - "Create a change log page linked from the roadmap"
                - "Add the week's roadmap changes with their reasons @recurring(weekly:fri)"
                - "Ask the agent to summarise the quarter's changes from the log"
            - name: Evidence file for each roadmap theme
              description: |-
                ## Purpose
                Interviews, support tickets, usage data and lost-deal notes arrive constantly but rarely reach the roadmap in a usable form. Keeping a short evidence page per theme, with the strongest signals linked and dated, means the monthly refresh argues from facts and you can show anyone why a theme matters.

                ## Milestones
                1. One evidence page created for each roadmap theme.
                2. Each entry dated, sourced and linked to the original note or chart.
                3. The evidence read before every monthly refresh.
                4. At least one theme's place on the roadmap changed or confirmed by the evidence within a quarter.

                ## Notes
                This file holds signals already sorted elsewhere. It is a short list of the strongest evidence per theme, not a second feedback inbox.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An evidence page for every theme, updated monthly, with dated and linked entries read at each refresh."
                cadence: rolling
              tasks:
                - "Create one evidence page for each roadmap theme"
                - "Link the five strongest recent signals to each theme"
                - "Add the month's new evidence to the theme pages @recurring(monthly:15)"
                - "Flag any theme whose evidence has gone quiet for two months"
            - name: Quarterly roadmap health check
              description: |-
                ## Purpose
                Roadmaps decay quietly: items lose their outcome, Later fills with old ideas and confidence labels stop meaning anything. A quarterly check of every item against a short checklist catches the rot before a leadership review does.

                ## Milestones
                1. A checklist covering stated outcome, linked evidence, named owner, current confidence and item age.
                2. Every roadmap item scored against the checklist.
                3. The share of healthy items recorded each quarter.
                4. The three worst items fixed or removed.

                ## Notes
                Start from the **Operational checklist** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly health checks completed, each recording the share of healthy items and fixing or removing the three worst."
                cadence: cyclic
              tasks:
                - "Write a five-point health checklist for roadmap items"
                - "Score every roadmap item against the health checklist @recurring(quarterly)"
                - "Record the share of healthy items on the roadmap page"
                - "Fix or remove the three lowest-scoring items"
            - name: Outcome review of shipped roadmap items
              description: |-
                ## Purpose
                Shipping a roadmap item is not the same as achieving its outcome, and most teams never look back once the release goes out. Reviewing each item 60 to 90 days after release against the outcome on its card shows which themes are working and feeds real results into the next refresh.

                ## Milestones
                1. A list of items shipped in the last two quarters with their intended outcomes.
                2. Each item's outcome measure checked 60 to 90 days after release.
                3. Results recorded as hit, partial or missed, with a sentence on why.
                4. Follow-up work added, or the theme reconsidered, where outcomes were missed.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every item shipped in the last two quarters has a recorded result of hit, partial or missed, with any follow-up noted."
                cadence: rolling
              tasks:
                - "List items shipped in the last two quarters and their intended outcomes"
                - "Ask the analytics owner for each item's outcome measure"
                - "Review outcomes of items shipped 60 to 90 days ago @recurring(monthly:22)"
                - "Add follow-up work for any outcome that was missed"
            - name: Annual roadmap theme reset
              description: |-
                ## Purpose
                Once a year the themes themselves deserve a hard look, not just the items beneath them. An annual reset, timed just after company goals are set, asks whether each theme still earns its place, which should end and what new theme the strategy now demands.

                ## Milestones
                1. The year's outcome results summarised by theme.
                2. Each theme marked keep, change or retire, with a reason.
                3. New themes drafted where the strategy has moved.
                4. The reset roadmap shared before the first quarterly cycle of the year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "An annual reset held, each theme recorded as kept, changed or retired, and the new roadmap shared before the first quarterly cycle."
                cadence: cyclic
              tasks:
                - "Summarise the year's outcome results for each theme"
                - "Mark each theme keep, change or retire with a one-line reason"
                - "Hold the annual theme reset after company goals are set @recurring(yearly)"
                - "Share the reset roadmap before the first quarter of the year"
            - name: Intake route for roadmap requests
              description: |-
                ## Purpose
                Requests from executives, large customers and sales arrive by chat, corridor and email, and the loudest usually wins. A single intake route with a short form, a weekly triage slot and a promised response time treats every request the same way and shows requesters where their idea went.

                ## Milestones
                1. A request form asking for the problem, who has it, the evidence and the urgency.
                2. A weekly triage slot where requests are sorted into decline, evidence file or roadmap discussion.
                3. A response time promised to requesters and met.
                4. Requests arriving outside the form redirected politely.

                ## Notes
                Most requests should land in a theme's evidence file, not straight onto the roadmap.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every roadmap request in a quarter arrives through one form and receives a triage decision within the promised response time."
                cadence: rolling
              tasks:
                - "Write a five-question request form for roadmap asks"
                - "Announce the form to sales, support and leadership"
                - "Triage new roadmap requests and reply to each requester @recurring(weekly:tue)"
                - "Redirect requests that arrive by chat to the form"
            - name: Monthly dependency check-in with other teams
              description: |-
                ## Purpose
                A roadmap item that needs another team's API, data or design system work is only as reliable as that team's plan. A monthly check-in with each team you depend on catches slipped dates while there is still time to resequence, rather than in the sprint where the work was due to start.

                ## Milestones
                1. Every roadmap item with an external dependency tagged with the team and the work needed.
                2. A named contact in each team you depend on.
                3. A monthly check-in held, with each dependency marked on track, at risk or slipped.
                4. Items resequenced whenever a dependency slips.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every dependency on the roadmap has a named contact and a status updated monthly for a full quarter."
                cadence: rolling
              tasks:
                - "Tag every roadmap item that depends on another team"
                - "Name a contact in each team you depend on"
                - "Check each dependency's status with its team @recurring(monthly:12)"
                - "Resequence items whose dependency has slipped"
            - name: Roadmap risk register
              description: |-
                ## Purpose
                Some roadmap risks are visible months ahead: a key engineer on leave, an unproven vendor, a regulation that might change, an assumption nobody has tested. Writing them down with likelihood, impact and a response turns vague worry into choices you can make early.

                ## Milestones
                1. A register listing each risk, the roadmap items affected, likelihood, impact and owner.
                2. A response written for every high risk: avoid, reduce, accept or prepare a fallback.
                3. The register reviewed monthly, with closed risks marked.
                4. The top risks summarised in the quarterly planning pack.

                ## Notes
                Start from the **Risk register** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A roadmap risk register with an owner and response for every high risk, reviewed monthly for a quarter."
                cadence: rolling
              tasks:
                - "Create a roadmap risk register from the template"
                - "List the five biggest risks to the current Now and Next items"
                - "Write a response and owner for each high risk"
                - "Review roadmap risks and update their status @recurring(monthly:18)"
            - name: Writing outcome statements instead of feature names
              description: |-
                ## Purpose
                Turning add a dashboard into help account owners see overdue invoices without exporting data is a learnable skill, and it changes what the team builds. Practising the rewrite on real items, with a simple pattern of who, what changes and how you will know, makes outcome thinking a habit rather than a slogan.

                ## Milestones
                1. A pattern written for outcome statements: who, what change in behaviour or result, and the measure.
                2. Twenty current roadmap items rewritten as outcomes.
                3. The rewrites reviewed by a peer for vagueness.
                4. The pattern added to the roadmap item card guidance.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twenty roadmap items rewritten as outcome statements using one pattern, reviewed by a peer and added to the card guidance."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write the outcome statement pattern on one page"
                - "Rewrite twenty roadmap items as outcome statements"
                - "Ask a peer product manager to mark any vague rewrites"
                - "Add the pattern to the roadmap item card guidance"
            - name: Studying five published product roadmaps
              description: |-
                ## Purpose
                Several software companies publish their roadmaps openly, and comparing them shows the range of formats, detail and caveats that work in public. Studying five, and noting what you would borrow or avoid, gives you real examples to point at when the team debates format.

                ## Milestones
                1. Five public roadmaps found from products of different sizes.
                2. Each noted for format, horizons, use of dates, caveats and how feedback is invited.
                3. Three practices to borrow and two to avoid written down.
                4. The notes shared with the team before the format decision.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes on five public roadmaps, with three practices to borrow and two to avoid, shared with the team."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find five public roadmaps from products of different sizes"
                - "Note each one's format, use of dates and caveats"
                - "Write three practices to borrow and two to avoid"
                - "Share the comparison notes with the team"
            - name: Roadmap sizing with T-shirt estimates
              description: |-
                ## Purpose
                Roadmap items need a size before anyone has designed them, and asking engineers for days at that stage produces either padding or false precision. Agreeing what small, medium, large and extra large mean in team-weeks, calibrated against past work, gives fast sizes that are good enough to sequence a roadmap.

                ## Milestones
                1. Four sizes defined in team-weeks, each with a past example.
                2. Ten upcoming items sized with the engineering lead in one session.
                3. Sizes compared with actual effort for three completed items.
                4. The size definitions adjusted after the comparison.

                ## Notes
                Roadmap sizing is not sprint estimation. Keep it to one short session and never convert sizes into delivery dates.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four size definitions with past examples, ten roadmap items sized, and the definitions checked against three completed items."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Define small, medium, large and extra large in team-weeks"
                - "Find a completed past item that fits each size"
                - "Size ten upcoming items with the engineering lead in one session"
                - "Compare sizes with actual effort for three finished items"
            - name: Practising how to say no to roadmap requests
              description: |-
                ## Purpose
                Product managers and founders spend much of their roadmap time declining good ideas, and a clumsy no costs goodwill with sales and customers. Preparing and rehearsing a few honest responses, such as not now and here is why, or yes if we drop this, makes trade-offs explicit instead of personal.

                ## Milestones
                1. Four response scripts written for common cases: a big customer, an executive idea, competitor parity and a good idea at the wrong time.
                2. Each script rehearsed with a colleague playing the requester.
                3. The scripts used on three real requests.
                4. One line noted on what worked after each real conversation.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four response scripts written and rehearsed, then used on three real requests with notes on what worked."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write four short response scripts for common roadmap requests"
                - "Rehearse the scripts with a colleague playing the requester"
                - "Use a script on three real requests this month"
                - "Note what worked after each real conversation"
            - name: Presenting the roadmap as a ten-minute story
              description: |-
                ## Purpose
                Leadership and all-hands audiences remember a roadmap as a story: where customers are stuck today, what the team is betting on and what will be different in six months. Practising a ten-minute narrative built around themes, rather than a scroll through items, makes the roadmap easier to support and harder to pick apart line by line.

                ## Milestones
                1. A narrative outline: customer problem, themes, bets, what we are not doing and how we will know.
                2. Slides limited to one per theme plus an opening and a close.
                3. The talk rehearsed twice with a timer and feedback.
                4. The narrative delivered at a real review, with questions noted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A ten-minute roadmap narrative rehearsed twice and delivered at a real review, with audience questions recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Outline a ten-minute roadmap narrative around the themes"
                - "Build one slide per theme plus an opening and a close"
                - "Rehearse the talk twice with a timer and a colleague"
                - "Write down the questions asked after the real presentation"
            - name: Roadmapping and product strategy reading queue
              description: |-
                ## Purpose
                Only a handful of books and essays shaped how strong teams roadmap today, covering outcome-based roadmaps, continuous discovery and product strategy. Working through a short queue, with one idea to try noted from each, builds judgement faster than collecting templates.

                ## Milestones
                1. A queue of five to eight books or essays on roadmaps and product strategy.
                2. Notes on each one with an idea to try.
                3. Two of those ideas tried on your own roadmap.
                4. The queue shared with a colleague or the team.

                ## Notes
                Start from the **Reading queue** template. Product Roadmaps Relaunched by C. Todd Lombardo and co-authors is a common starting point.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five readings finished with notes, and two ideas from them tried on your own roadmap."
                cadence: rolling
              tasks:
                - "Build a queue of five to eight roadmap and strategy readings"
                - "Read one chapter or essay from the reading queue @recurring(weekly:sun)"
                - "Write one idea to try after finishing each reading"
                - "Try two of the ideas on your own roadmap"
            - name: Sequencing roadmap bets by risk and learning
              description: |-
                ## Purpose
                Two roadmaps with identical items can differ hugely in how quickly they reveal whether the strategy is right. Learning to sequence by putting the bets with the riskiest assumptions early, and the work that depends on them later, means bad bets fail cheaply and good ones get more investment sooner.

                ## Milestones
                1. The riskiest assumption written down for each Next item.
                2. Items reordered so the riskiest assumptions are tested first.
                3. A small test planned for the top two assumptions before full build.
                4. The new sequence explained at the next roadmap refresh.

                ## Notes
                Running the tests belongs to discovery and prototyping work. The roadmap skill is choosing the order.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every Next item has a written riskiest assumption, and the sequence has been reordered and explained at a refresh."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write the riskiest assumption for each Next item"
                - "Reorder Next so the riskiest assumptions come first"
                - "Plan a small test for the top two assumptions"
                - "Explain the new sequence at the next roadmap refresh"
            - name: Converting a feature-list roadmap to outcome themes
              description: |-
                ## Purpose
                Many teams inherit a roadmap that is a ranked list of features with dates, which reads as a delivery schedule and resists learning. Converting it in phases, first grouping items under themes, then rewriting them as outcomes, then removing far-off dates, changes the conversation without a disruptive overnight switch.

                ## Milestones
                1. Every existing item grouped under one of the agreed themes.
                2. Items in the Now and Next horizons rewritten as outcomes.
                3. Dates removed from items beyond the current quarter, except real commitments.
                4. The converted roadmap presented to stakeholders with a one-page explanation.
                5. Feedback on the new format gathered a quarter later and acted on.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The roadmap is grouped by theme, Now and Next items are written as outcomes, and only committed items beyond this quarter carry dates."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Group every existing roadmap item under a theme"
                - "Rewrite Now and Next items as outcome statements"
                - "Remove dates beyond this quarter except real commitments"
                - "Present the converted roadmap with a one-page explanation"
                - "Ask five regular readers for their view of the new format after a quarter"
            - name: Written list of what the roadmap will not do
              description: |-
                ## Purpose
                Every roadmap says as much through what it leaves out as through what it includes, but omissions are silent, so people assume their idea is coming eventually. Publishing a short list of things the team has decided not to pursue this year, with reasons, prevents repeated debates and shows the strategy has edges.

                ## Milestones
                1. The ten most requested ideas that are not on the roadmap listed.
                2. Each given a decision of not this year, not while the strategy holds, or never, with a reason.
                3. The list agreed with leadership.
                4. The list published beside the roadmap and linked from the intake form.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A not-doing list of at least ten ideas, each with a decision and reason, agreed with leadership and published beside the roadmap."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the ten most requested ideas missing from the roadmap"
                - "Give each idea a decision and a one-sentence reason"
                - "Agree the not-doing list with leadership"
                - "Publish the list beside the roadmap and link it from the intake form"
            - name: Investment balance across new, improve and maintain
              description: |-
                ## Purpose
                Left alone, roadmaps drift toward new features while existing ones decay, or toward firefighting while nothing new ships. Agreeing a target split of capacity across new bets, improving what exists and keeping the lights on, and checking it against reality every quarter, makes the balance a decision rather than an accident.

                ## Milestones
                1. Three or four investment categories defined with examples of each.
                2. Last quarter's actual split measured from completed work.
                3. A target split for next quarter agreed with engineering and leadership.
                4. Actual against target compared each quarter, with the gap explained.

                ## Notes
                There is no correct ratio. A product still finding its market spends very differently from one defending a large customer base.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A target investment split agreed and recorded, with actual against target compared for at least two quarters."
                cadence: cyclic
              tasks:
                - "Define three or four investment categories with examples"
                - "Measure last quarter's actual split from completed work"
                - "Agree a target split with engineering and leadership"
                - "Compare actual and target split and explain the gap @recurring(quarterly)"
            - name: Technical debt and platform work on the roadmap
              description: |-
                ## Purpose
                Platform upgrades, security fixes and debt pay-down often sit off the roadmap, so they look like the team going slowly rather than a deliberate choice. Putting the largest pieces on the roadmap as items with an outcome, such as halve deploy time or remove an end-of-life dependency, lets stakeholders see and weigh them.

                ## Milestones
                1. The five largest technical investments listed with the engineering lead.
                2. Each written with an outcome a non-engineer can follow.
                3. The items placed in horizons alongside customer-facing work.
                4. Technical items reported on in the same review as everything else.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The five largest technical investments sit on the roadmap with plain-language outcomes and are reported in the regular review."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the engineering lead for the five largest technical investments needed"
                - "Write each one as an outcome a non-engineer can follow"
                - "Place the technical items in horizons beside customer work"
                - "Report technical items in the same review as customer-facing ones"
            - name: Pruning the Later horizon
              description: |-
                ## Purpose
                The Later column becomes a polite graveyard for ideas nobody wanted to reject, and its length makes the whole roadmap look unrealistic. A quarterly prune that removes anything untouched for two quarters without new evidence keeps Later short enough to mean something.

                ## Milestones
                1. A pruning rule agreed, such as removing anything untouched for two quarters without fresh evidence.
                2. The first prune completed, with removed items listed.
                3. Requesters of removed items told, with the reason.
                4. Later kept under an agreed maximum number of items.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Later stays under its agreed maximum for two quarters, with each prune's removed items listed and their requesters told."
                cadence: cyclic
              tasks:
                - "Agree a pruning rule and a maximum size for Later"
                - "Prune the Later horizon using the agreed rule @recurring(quarterly)"
                - "Tell the requesters of removed items why they were removed"
                - "Move removed items to the not-doing list or an evidence page"
            - name: Customer-facing roadmap page
              description: |-
                ## Purpose
                Customers and prospects ask what is coming, and an improvised answer from each salesperson creates a hundred different promises. A deliberately simple external roadmap, showing the themes and problems being worked on with horizons instead of dates and a clear caveat, answers the question once and in the product team's words.

                ## Milestones
                1. Content rules decided: themes and problems only, no dates, nothing under negotiation.
                2. A first version drafted and reviewed by sales, support and legal.
                3. The page published where customers can find it.
                4. The page refreshed after each monthly roadmap refresh.

                ## Notes
                Keep a short caveat that plans change. Never list a feature tied to a single customer's deal.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An external roadmap page published with themes, horizons and a caveat, reviewed by sales, support and legal, and refreshed monthly."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the content rules for the external roadmap"
                - "Draft the first version from the current themes and Now items"
                - "Ask sales, support and legal to review the draft"
                - "Refresh the external roadmap after the monthly refresh @recurring(monthly:10)"
            - name: Rules for sharing roadmap items in sales deals
              description: |-
                ## Purpose
                Sales teams under quota pressure will show roadmap items to close deals, and a vague later this year in a demo becomes a clause in a contract. Agreeing simple rules on what may be shared, how to phrase it and when a product manager must join the call protects both the deal and the roadmap.

                ## Milestones
                1. Rules written for what sales may share from each horizon.
                2. Approved wording for describing future items in demos and emails.
                3. A route for requests to put roadmap items in contracts, with product sign-off.
                4. The rules briefed to the sales team and added to their playbook.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "Written roadmap sharing rules with approved wording and a contract sign-off route, briefed to sales and added to their playbook."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write what sales may share from each roadmap horizon"
                - "Draft approved wording for future items in demos and emails"
                - "Agree that roadmap items in contracts need product sign-off"
                - "Brief the sales team and add the rules to their playbook"
            - name: Annual planning roadmap submission
              description: |-
                ## Purpose
                Annual planning asks product leaders to state next year's bets, headcount needs and expected outcomes, usually to a tight deadline and in leadership's format. Preparing the roadmap submission early, built on themes, outcome results and real capacity, makes a stronger case than a list of features and shows exactly what is left unfunded.

                ## Milestones
                1. The planning deadline, required format and decision makers confirmed.
                2. Next year's themes, expected outcomes and capacity needs drafted.
                3. The themes that cannot be funded at current headcount shown plainly.
                4. The submission delivered on time and the feedback recorded.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "An annual planning submission delivered by the deadline with themes, outcomes, capacity needs and the unfunded themes stated."
                cadence: cyclic
              tasks:
                - "Confirm the annual planning deadline and required format"
                - "Draft next year's themes, outcomes and capacity needs"
                - "Show which themes go unfunded at current headcount"
                - "Start the roadmap submission six weeks before the planning deadline @recurring(yearly)"
            - name: Roadmap section for a board or investor meeting
              description: |-
                ## Purpose
                Boards and investors want to know what the product is betting on and whether last quarter's bets paid off, not a list of tickets. A two-page roadmap section with themes, outcome results and next quarter's bets, ready a week before the meeting, answers that and invites useful challenge.

                ## Milestones
                1. The product questions raised at the last board meeting gathered.
                2. A two-page section drafted: last quarter's results, current themes, next bets and risks.
                3. The draft reviewed by the chief executive or founder a week before the meeting.
                4. Questions and actions from the meeting recorded against the roadmap.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A two-page roadmap section delivered to the board, reviewed a week ahead, with questions and actions recorded afterwards."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Gather the product questions raised at the last board meeting"
                - "Ask the agent to draft a two-page section from the roadmap and outcome results"
                - "Send the draft to the chief executive a week before the meeting"
                - "Record board questions and actions against the roadmap"
            - name: Roadmap preview at a user conference
              description: |-
                ## Purpose
                Showing the roadmap at your own user conference or a large customer event is the most public promise the product team makes all year. Choosing what to show, agreeing wording with marketing and checking every item is genuinely committed avoids announcing things that slip a month later.

                ## Milestones
                1. Preview items chosen only from the Now horizon or firm commitments.
                2. Wording agreed with marketing, with no dates beyond what engineering will stand behind.
                3. Engineering leads signed off that each item shown is on track.
                4. Customer questions from the event captured and added to the theme evidence.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A conference roadmap preview shown only with engineering-approved items, and customer questions captured into the evidence pages afterwards."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Shortlist preview items from the Now horizon and firm commitments"
                - "Agree the wording for each preview item with marketing"
                - "Get engineering sign-off on every item shown"
                - "Capture customer questions at the event for the evidence pages"
            - name: Roadmap briefing for a strategic customer
              description: |-
                ## Purpose
                Large customers often ask for a roadmap briefing at renewal or a quarterly business review, and an unprepared one turns into a negotiation over features. Preparing a briefing that links your themes to their stated problems, with clear horizons and no new promises, strengthens the relationship and brings back useful evidence.

                ## Milestones
                1. The customer's stated problems and open requests gathered from the account team.
                2. A briefing showing the three themes most relevant to them, with horizons and caveats.
                3. A confidentiality agreement confirmed where the briefing needs one.
                4. The customer's feedback recorded in the theme evidence pages.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "A prepared roadmap briefing delivered to a strategic customer with no new commitments made, and their feedback recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the account team for the customer's problems and open requests"
                - "Pick the three themes most relevant to this customer"
                - "Check with legal whether a confidentiality agreement is needed"
                - "Record the customer's reactions in the theme evidence pages"
            - name: Re-planning the roadmap after a strategy change
              description: |-
                ## Purpose
                Funding rounds, a new chief executive, an acquisition or a pivot can make half the roadmap irrelevant overnight. Re-planning deliberately, in days rather than weeks, by testing each theme against the new strategy and telling the team plainly what stops, protects morale and prevents people quietly finishing work that no longer matters.

                ## Milestones
                1. The new strategy summarised in a paragraph agreed with leadership.
                2. Every theme and Now item marked continue, change or stop.
                3. Stopped work wound down cleanly, with the reason told to the team.
                4. A revised roadmap published within two weeks of the change.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A revised roadmap published within two weeks of a strategy change, with every theme and Now item marked continue, change or stop."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write a one-paragraph summary of the new strategy and confirm it with leadership"
                - "Mark every theme and Now item continue, change or stop"
                - "Tell the team what stops and why before the work drifts on"
                - "Publish the revised roadmap within two weeks of the change"
            - name: Founder's first roadmap before product-market fit
              description: |-
                ## Purpose
                Before product-market fit, a founder's roadmap is mostly a learning plan, and a twelve-month feature timeline will be wrong within weeks. A short roadmap built around the two or three questions that decide whether the business works, what you will learn next and what you will build to learn it, keeps a small team pointed at survival.

                ## Milestones
                1. The two or three questions that decide whether the business works written down.
                2. A Now, Next, Later board where each item names the question it answers.
                3. A rule agreed with co-founders for when the roadmap is revisited, such as after every ten customer conversations.
                4. A one-page version shared with early investors or advisers.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page founder roadmap where every item names the business question it answers, with a revisit rule agreed with co-founders."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the three questions that decide whether the business works"
                - "Build a Now, Next, Later board where each item names its question"
                - "Agree with co-founders when the roadmap will be revisited"
                - "Send a one-page version to advisers or early investors"
            - name: Inheriting a roadmap as a new product manager
              description: |-
                ## Purpose
                Joining a team means inheriting a roadmap built on decisions you were not part of; changing it too fast loses trust, while leaving it alone wastes your fresh eyes. A 30-day plan to learn why each item is there, who it was promised to and what evidence sits behind it lets you propose changes from understanding rather than opinion.

                ## Milestones
                1. The history of each Now and Next item gathered from its previous owner or decision records.
                2. Every promise attached to the roadmap identified.
                3. Roadmap conversations held with design, engineering and two key stakeholders.
                4. A short list of proposed changes presented at day 30.

                ## Notes
                Change little in the first month unless something is clearly broken. Early credibility comes from showing you understand the plan.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Within 30 days, the history of every Now and Next item is documented and a list of proposed changes has been presented."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the previous owner why each Now and Next item is on the roadmap"
                - "List every promise attached to roadmap items"
                - "Hold roadmap conversations with design, engineering and two stakeholders"
                - "Present a short list of proposed changes at day 30"
            - name: Combining team roadmaps into one product roadmap
              description: |-
                ## Purpose
                When a product grows to several squads, each with its own roadmap, leadership loses the overall picture and teams duplicate or collide. A manager combining them into one product roadmap, with shared themes on top and team items beneath, shows the whole bet while leaving each team owning its own plan.

                ## Milestones
                1. Each team's roadmap collected in its current format.
                2. Shared themes agreed across teams, with each team's items mapped beneath them.
                3. Duplicates, collisions and cross-team dependencies resolved or flagged.
                4. One combined view published, linking to each team's detailed roadmap.
                5. A monthly combined review with team leads running.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One combined roadmap with shared themes and linked team roadmaps, duplicates flagged, and a monthly review with team leads running."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Collect each team's current roadmap in whatever format it uses"
                - "Agree shared themes with the team leads"
                - "Flag duplicate and colliding items across teams"
                - "Hold the combined roadmap review with team leads @recurring(monthly:5)"
            - name: Lean roadmap for a team of two or three engineers
              description: |-
                ## Purpose
                Very small teams cannot afford heavy planning, and a roadmap with fifteen parallel items guarantees none of them finish. A lean roadmap with one or two items in Now, a short Next and a weekly look at progress keeps a tiny team finishing things instead of starting them.

                ## Milestones
                1. Now limited to one or two items at a time.
                2. Next limited to five items, with Later kept to a short list.
                3. A 15-minute weekly progress look held with the engineers.
                4. Three consecutive items finished before new ones were started.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For a full quarter, Now holds no more than two items and three items are finished before new ones start."
                cadence: rolling
              tasks:
                - "Cut the Now horizon to one or two items"
                - "Limit Next to five items and move the rest to Later"
                - "Hold a 15-minute roadmap look with the engineers @recurring(weekly:mon)"
                - "Track whether items finish before new ones start"
            - name: Roadmap continuity through a re-organisation
              description: |-
                ## Purpose
                Re-organisations move people and ownership, and roadmap items in flight are easily orphaned or duplicated between new teams. Mapping every item to its new owner before the change lands, and agreeing what pauses, keeps work promised to customers from falling through the gap.

                ## Milestones
                1. Every Now and Next item mapped to its owning team after the re-organisation.
                2. Items without an owner listed and either assigned or deliberately paused.
                3. Commitments that change hands identified and their new owners told.
                4. The new ownership shown on the roadmap on the day the change takes effect.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every Now and Next item has a named owning team on the day the re-organisation takes effect, with orphans assigned or paused."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Map every Now and Next item to its new owning team"
                - "List items with no owner and agree to assign or pause each one"
                - "Tell the new owners of any commitments that change hands"
                - "Update roadmap ownership on the day the re-organisation takes effect"
            - name: Roadmap response to a churn or lost-deal pattern
              description: |-
                ## Purpose
                When several customers leave or deals are lost for the same stated reason, the pressure to put an item straight into Now is intense. Checking the pattern first, how many accounts, how much revenue and whether the stated reason is the real one, lets you respond with the right roadmap change rather than the loudest.

                ## Milestones
                1. Affected accounts and revenue listed from sales and customer success records.
                2. The stated reason tested against exit interviews or call notes.
                3. A roadmap response decided: a new item, a reprioritised theme or no change, with reasons.
                4. The decision shared with sales and customer success leaders.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written roadmap response to the pattern, based on listed accounts, revenue and tested reasons, shared with sales and customer success."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the churned or lost accounts and the revenue involved"
                - "Read the call notes or exit interviews for each account"
                - "Decide on a roadmap response and write down the reasons"
                - "Share the decision with sales and customer success leaders"
            - name: Cross-team dependency map for a major initiative
              description: |-
                ## Purpose
                Initiatives that span several teams, such as a new pricing model or a platform migration, fail on hand-offs more often than on any single team's work. A dependency map showing which team delivers what to whom, and in what order, lets you sequence the roadmap around the critical path and see early which slip would hurt most.

                ## Milestones
                1. Every team contributing to the initiative listed with what it delivers.
                2. Dependencies drawn between deliverables, with rough sizes.
                3. The critical path identified and marked on the roadmap.
                4. A fallback agreed for the two dependencies most likely to slip.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dependency map for the initiative with its critical path marked on the roadmap and fallbacks agreed for the two riskiest links."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every team involved and what each one delivers"
                - "Draw the dependencies between deliverables with rough sizes"
                - "Mark the critical path on the roadmap"
                - "Agree a fallback for the two riskiest dependencies"
            - name: Scenario roadmaps for budget or headcount uncertainty
              description: |-
                ## Purpose
                Without an agreed budget for next year, a single roadmap either overpromises or undersells. Preparing two or three scenario roadmaps, for example flat headcount, a cut and a growth case, shows leadership exactly what each funding choice buys and lets the team move quickly once the decision lands.

                ## Milestones
                1. Two or three capacity scenarios agreed with finance or leadership.
                2. A roadmap drafted for each scenario, showing what is in and what is out.
                3. The differences between scenarios summarised on one page.
                4. The chosen scenario adopted as the live roadmap within a week of the decision.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Two or three scenario roadmaps prepared with a one-page comparison, and the chosen one live within a week of the budget decision."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Agree two or three capacity scenarios with finance"
                - "Draft the roadmap under each capacity scenario"
                - "Summarise what each scenario adds or drops on one page"
                - "Adopt the chosen scenario within a week of the budget decision"
            - name: Forecasting the Next horizon from delivery history
              description: |-
                ## Purpose
                Guessing when Next items will start is where roadmaps lose credibility. Using the team's actual throughput over recent quarters, how many items of each size finished per month, gives a range forecast such as likely to start within the next quarter, which is honest about uncertainty and usually more accurate than fresh estimates.

                ## Milestones
                1. Throughput for the last two to four quarters pulled from the delivery tool by item size.
                2. A range forecast produced for each Next item.
                3. Forecast ranges shown on the internal roadmap with their confidence.
                4. Forecasts compared with what actually happened after a quarter.

                ## Notes
                A Monte Carlo simulation in a spreadsheet works well here, but a plain range from past throughput is a good start. Keep forecasts internal unless the audience understands ranges.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Range forecasts for every Next item based on two to four quarters of throughput, checked against actual results after a quarter."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Export completed items for the last four quarters from the delivery tool"
                - "Count items finished per month by size"
                - "Produce a range forecast for each Next item"
                - "Compare last quarter's forecasts with what actually happened"
            - name: Roadmap performance metrics
              description: |-
                ## Purpose
                Few product teams measure the roadmap itself, so nobody knows whether planning is getting more reliable or more useful. Tracking a handful of numbers each quarter, such as the share of Now items delivered, the share of shipped items that hit their outcome and how often items change horizon, shows whether the practice is improving.

                ## Milestones
                1. Three to five roadmap metrics defined, with how each is calculated.
                2. A baseline recorded for the last full quarter.
                3. The metrics updated in a log at every quarter end.
                4. One planning practice changed in response to the numbers.

                ## Notes
                Start from the **Metrics log** template. A high delivery rate with a low outcome hit rate means the team ships reliably but bets poorly.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three to five roadmap metrics logged for four quarters, with one planning practice changed in response."
                cadence: cyclic
              tasks:
                - "Define three to five roadmap metrics and how to calculate each"
                - "Record a baseline for the last full quarter"
                - "Update the roadmap metrics log at quarter end @recurring(quarterly)"
                - "Change one planning practice in response to the numbers"
            - name: Year-end retrospective on roadmap decisions
              description: |-
                ## Purpose
                Looking back at a year of roadmap decisions, which bets were made, which were dropped and which paid off, is the fastest way for an experienced product leader to sharpen their own judgement. A written retrospective, honest about the calls that were wrong and why, becomes a reference for next year and for anyone joining the team.

                ## Milestones
                1. Every major roadmap decision of the year listed from the change log.
                2. Each decision marked right, wrong or too early to tell, with the evidence.
                3. Three patterns in how decisions were made written down.
                4. The retrospective shared with the design and engineering leads.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written retrospective covering every major roadmap decision of the year, each marked right, wrong or too early, shared with the leads."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the year's major roadmap decisions from the change log"
                - "Mark each decision right, wrong or too early to tell"
                - "Write three patterns you see in how decisions were made"
                - "Share the retrospective with the design and engineering leads"
---

# Product Roadmap Planning

This area is for product managers, product leaders and founders who need a roadmap people trust: organised around outcomes and themes, honest about confidence, and changed when evidence arrives rather than frozen in January. It starts with the foundations (finding every roadmap already in circulation, a purpose statement, a format, themes, capacity and existing commitments), then the operating routines that keep it current, the skills of outcome writing, sizing, sequencing and saying no, the improvements that reshape an inherited roadmap, the events where it is presented, the situations that force a re-plan, and finally the forecasting, measurement and retrospective work of an experienced product leader.

What repeats is a monthly roadmap refresh, a weekly change log and request triage, monthly reviews of evidence, dependencies, risks and shipped outcomes, a quarterly planning cycle with a health check and a prune of the Later horizon, and a yearly reset and planning submission. The Purchase decision, Meeting notes, Operational checklist, Risk register, Reading queue and Metrics log templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
