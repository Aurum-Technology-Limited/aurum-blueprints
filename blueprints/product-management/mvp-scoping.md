---
id: product-management.mvp-scoping
name: MVP Scoping
description: "Cutting an idea to the smallest version that tests its riskiest assumption: hypotheses and kill criteria, time boxes and scope lists, weekly guards against scope creep, and an honest pivot or persevere call."
category: business
version: 1.0.0
tags: [product-management, mvp-scoping, founder, team, minimum-viable-product, riskiest-assumption, scope-creep, lean-startup]
author: Aurum Technology
starter_structure:
  templates:
    - product-spec
    - metrics-log
    - risk-register
    - reading-queue
    - purchase-decision
    - meeting-notes
  pillars:
    - name: Product Management
      emoji: "🧩"
      description: "Deciding what to build and why: discovery and research, roadmaps and prioritisation, specs and launches, pricing and packaging, product analytics, and the feedback loops that keep a product honest."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: MVP Scoping
          description: "Cutting an idea down to the smallest version that can test the riskiest assumption with real users, and resisting the urge to add more."
          projects:
            - name: Riskiest assumption in one sentence
              description: |-
                ## Purpose
                Most MVPs go wrong before a line of code is written, because nobody has said which belief, if false, would sink the whole idea. Writing that belief as one plain sentence, such as 'clinic managers will switch from paper booking if setup takes under ten minutes', gives every later cut a test: does this feature help check the sentence or not?

                ## Milestones
                1. Every belief the idea depends on listed on one page.
                2. Each belief marked for how damaging it would be if it proved wrong.
                3. One riskiest assumption chosen and written as a single sentence.
                4. The sentence agreed by everyone who will build or fund the MVP.

                ## Notes
                Pick the assumption that is both fatal and least proven, not the one that is easiest to test. For most software ideas, whether anyone wants the thing is riskier than whether it can be built.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One riskiest assumption is written as a single sentence at the top of the MVP brief and agreed by the founders or product trio."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every belief that has to be true for the idea to work"
                - "Mark each belief as fatal, painful or minor if it proves false"
                - "Write the most fatal and least proven belief as one sentence"
                - "Read the sentence to the team and agree it before scoping starts"
            - name: Assumption map ranked by risk and evidence
              description: |-
                ## Purpose
                Ideas rest on dozens of assumptions about desire, money and delivery, and teams tend to test the comfortable ones first. Plotting each assumption on two axes, how important it is and how much evidence you already hold, shows which few need testing in the MVP and which can wait for later.

                ## Milestones
                1. Assumptions sorted into desirability, viability and feasibility groups.
                2. Each assumption placed on an importance and evidence grid.
                3. The important, weakly evidenced corner holding no more than five items.
                4. A note beside each of those five saying how the MVP will test it.

                ## Notes
                Ask a sceptical outsider to add assumptions. The ones the team never thought to question are often the dangerous ones.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An assumption map places every item on the importance and evidence grid, with no more than five flagged for the MVP to test."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the agent to list the assumptions hidden in your idea description"
                - "Sort the assumptions into desirability, viability and feasibility"
                - "Place each one on an importance versus evidence grid with the team"
                - "Circle the five important assumptions with the weakest evidence"
                - "Write beside each circled item how the MVP will test it"
            - name: Falsifiable MVP hypothesis with a pass mark
              description: |-
                ## Purpose
                Without a number agreed in advance, any result can be read as encouraging, and MVPs quietly turn into products nobody decided to build. Turning the riskiest assumption into a hypothesis with a measurable pass mark, a sample size and a time limit means the team knows before launch what success and failure look like.

                ## Milestones
                1. A hypothesis written in the form: we believe this user will do this behaviour, shown by this signal.
                2. A pass mark set, for example 4 of 10 pilot users booking a second session within two weeks.
                3. A minimum sample and an end date for the test written down.
                4. The pass mark recorded somewhere it cannot be quietly edited later.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written hypothesis with a numeric pass mark, sample size and end date is dated and shared before the MVP reaches users."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Rewrite the riskiest assumption as a behaviour a user would actually do"
                - "Choose the one signal that would show the behaviour happened"
                - "Set a pass mark, a minimum sample and an end date"
                - "Post the dated hypothesis in the team channel so it cannot drift"
            - name: Narrow first user for the MVP
              description: |-
                ## Purpose
                Founders often scope for everyone who might one day use the product, which multiplies features, edge cases and settings. Choosing one narrow first user, such as independent physiotherapists with one to three staff, lets the MVP leave out everything that only matters to other groups.

                ## Milestones
                1. A two-sentence first-user description naming role, context and the problem they feel every week.
                2. A list of at least twenty real people or organisations who fit it.
                3. Features that serve only other groups moved to the not-yet list.
                4. The team able to say plainly who the MVP is not for.

                ## Notes
                Narrow feels risky but is faster. You can widen the audience once the riskiest assumption holds; you learn very little from a product built for everyone.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A two-sentence first-user description exists alongside a named list of at least twenty people or organisations who fit it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write who the MVP is for in two sentences, naming role and context"
                - "List twenty real people or organisations who match the description"
                - "Write who the MVP is deliberately not for"
                - "Move features that only serve other groups to the not-yet list"
            - name: Kill criteria written before the build
              description: |-
                ## Purpose
                Sunk cost makes it painful to stop an MVP once months have gone into it, so the decision is best framed while nobody is attached yet. Writing kill criteria now, the results or dates that would end or redirect the idea, protects the team from spending another quarter on hope.

                ## Milestones
                1. Two or three kill criteria written, each tied to a result or a date.
                2. The person who calls the stop decision named.
                3. Criteria agreed by the founders, sponsor or investors who might otherwise push to continue.
                4. A reminder set for the date the first criterion is checked.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Two or three dated kill criteria, with a named decision owner, are agreed in writing by the people funding the MVP."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write the results that would mean the idea should stop"
                - "Write the date by which a signal must appear or the plan changes"
                - "Name the one person who calls the stop or continue decision"
                - "Get written agreement on the criteria from whoever funds the work"
            - name: Fixed time box and appetite for the first version
              description: |-
                ## Purpose
                Estimates for a new product are almost always wrong, so fixing the scope and letting the date slide is how a six-week MVP becomes six months. Agreeing an appetite first, for example six weeks for two people, and fitting the scope to it, forces the trade-offs to happen at the start rather than at the deadline.

                ## Milestones
                1. An appetite agreed in weeks and people, not in features.
                2. A hard end date written on the brief.
                3. A rule agreed for the end date: ship what works, cut what does not.
                4. The time box shared with everyone expecting the MVP.

                ## Notes
                Fixed time, variable scope. If the work does not fit the appetite, change the scope or the idea, not the date.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An appetite in weeks and people and a hard end date are written on the MVP brief and shared with stakeholders."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Decide how many weeks and people the riskiest assumption is worth"
                - "Write the hard end date on the brief"
                - "Agree what happens to unfinished work on the end date"
                - "Tell investors, sponsors or clients the time box in writing"
            - name: Single core flow from trigger to value
              description: |-
                ## Purpose
                An MVP needs one path that works end to end, from the moment a user has the problem to the moment they get something of value, far more than it needs ten half-built screens. Mapping that single flow step by step shows exactly which screens, data and messages the first version needs, and that everything else is optional.

                ## Milestones
                1. The trigger that brings a user to the product written down.
                2. Each step from trigger to first value mapped, in about seven steps or fewer.
                3. Every step marked as built, done manually behind the scenes or faked.
                4. Screens and data not on the flow moved to the not-yet list.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page core flow of about seven steps or fewer, each marked built, manual or faked, is attached to the MVP brief."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the moment a user first feels the problem"
                - "Sketch each step from that moment to the first useful result"
                - "Mark each step as built, done manually or faked"
                - "Remove any planned screen that does not sit on the core flow"
            - name: Choosing the MVP shape for the riskiest assumption
              description: |-
                ## Purpose
                Not every MVP is software: a single-feature app, a manual service, a spreadsheet with a form or a piecemeal stack of existing tools can each test a different assumption. Matching the shape to what the riskiest assumption asks keeps the team from writing code to answer a question a phone call could settle.

                ## Milestones
                1. Three or four candidate MVP shapes listed for the riskiest assumption.
                2. Each shape scored on time to first user, cost and how directly it tests the assumption.
                3. One shape chosen, with the reason in a sentence.
                4. Rejected shapes noted, so the debate is not reopened every week.

                ## Notes
                Designing clickable prototypes and fake-door tests belongs with prototype validation; this project only settles which shape the first real version takes.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One MVP shape is chosen from at least three scored candidates, with the reasoning recorded on the brief."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List three or four ways the riskiest assumption could be tested"
                - "Score each shape on time, cost and how directly it tests the assumption"
                - "Choose one shape and write the reason in a sentence"
                - "Record the rejected shapes and why on the brief"
            - name: In, out and not-yet scope list
              description: |-
                ## Purpose
                Scope arguments drag on when the only options are yes and no, because no sounds like forever. Keeping three columns, in, out and not-yet, lets the team defer good ideas without killing them, and makes the boundary of the first version visible to everyone.

                ## Milestones
                1. Every proposed feature placed in one of three columns.
                2. The in column limited to what the core flow and riskiest assumption need.
                3. The out column holding things the MVP will never include, each with a reason.
                4. The list linked from the MVP brief and the build board.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A three-column scope list places every proposed feature, and each in item traces to the core flow or the riskiest assumption."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Gather every feature idea from notes, chats and the backlog"
                - "Place each idea in the in, out or not-yet column"
                - "Check each in item against the core flow and the riskiest assumption"
                - "Link the list from the brief and the build board"
            - name: Non-negotiables no cut may touch
              description: |-
                ## Purpose
                Aggressive cutting is the point of an MVP, but some things cannot go: protecting personal data, payment security, accessibility basics, safety warnings and anything a regulator in your sector expects. Listing those non-negotiables up front means the team can cut hard everywhere else without anyone worrying they have crossed a line.

                ## Milestones
                1. Data, security, legal and safety requirements for the first version listed.
                2. Each item checked with whoever is responsible, such as a lawyer, a security lead or a compliance adviser.
                3. The list attached to the brief and marked as not open to cutting.
                4. Anything uncertain flagged for a professional view before launch.

                ## Notes
                This is a checklist for asking the right people, not legal advice. In health, finance or children's products, expect the list to be longer and speak to a specialist early.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A non-negotiables list covering data, security, legal and safety items is attached to the brief, each checked with a named responsible person."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the personal data the MVP will collect and where it will be stored"
                - "Note the legal, safety and accessibility basics your sector expects"
                - "Ask the right adviser to confirm or extend the list"
                - "Mark the list on the brief as not open to cutting"
                - "Re-check the non-negotiables against the data you now collect @recurring(quarterly)"
            - name: One-page MVP brief
              description: |-
                ## Purpose
                Scope decisions scattered across chats and calls get remade every week. A single page holding the riskiest assumption, hypothesis, first user, core flow, time box, scope list and kill criteria gives designers, engineers and funders one place to check before adding anything.

                ## Milestones
                1. A one-page brief summarising every foundation decision.
                2. Links from the brief to the scope list, core flow and assumption map.
                3. The brief read and agreed by everyone building the MVP.
                4. A version date on the brief, updated whenever scope changes.

                ## Notes
                Start from the **Product spec** template and cut it down. If the brief runs past one page, the MVP is probably too big.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page MVP brief, version-dated and linked to the scope list and core flow, is agreed by everyone building it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create the brief from the product spec template"
                - "Ask the agent to draft the brief from your foundation notes"
                - "Cut the draft until it fits on one page"
                - "Walk the team through the brief and record their agreement"
            - name: Weekly scope check during the build
              description: |-
                ## Purpose
                Scope rarely explodes in one meeting; it grows by a ticket here and a small extra there. A fifteen-minute check each week, comparing what is being built with the scope list and the time left, catches drift while it is still cheap to reverse.

                ## Milestones
                1. A fifteen-minute weekly slot held for the whole length of the build.
                2. Each week's new work compared against the in column.
                3. Drift recorded and either cut or traded for something removed.
                4. The time box status, on track or at risk, noted each week.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly scope check is held through the build, with drift and time box status recorded each week for at least six weeks."
                cadence: rolling
              tasks:
                - "Book a recurring fifteen-minute scope check with the builders"
                - "Compare this week's tickets against the in column @recurring(weekly:mon)"
                - "Record any drift and decide whether to cut it or trade it"
                - "Mark the time box as on track or at risk in the brief"
            - name: Scope change log with a one-in, one-out rule
              description: |-
                ## Purpose
                When a stakeholder insists on a new feature mid-build, the easiest response is yes, and the time box absorbs the cost silently. A change log where every addition must name what comes out to make room turns each change into a visible trade rather than free extra work.

                ## Milestones
                1. A change log recording date, requester, change and what was removed.
                2. A one-in, one-out rule agreed by the founders or sponsor.
                3. Every scope addition since the brief logged.
                4. A weekly total of scope added and removed visible to the team.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every scope change after the brief is logged with what was removed in exchange, and the totals are reviewed weekly."
                cadence: rolling
              tasks:
                - "Set up a change log with date, requester, change and trade columns"
                - "Agree the one-in, one-out rule with the founders or sponsor"
                - "Log every addition with the item it replaced"
                - "Total the week's scope added and removed @recurring(weekly:fri)"
            - name: Monthly review of the not-yet list
              description: |-
                ## Purpose
                Deferred ideas that nobody reads turn into a graveyard, and people stop trusting that not yet really means not yet. Reviewing the list once a month against what users are now doing promotes the few items that evidence supports and retires the ones that no longer matter.

                ## Milestones
                1. The not-yet list reviewed monthly while the MVP is live.
                2. Each item tagged with the evidence for or against it.
                3. Items with evidence promoted into the next cycle's scope.
                4. Items with no evidence after three reviews moved to out.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The not-yet list has been reviewed monthly for three months, with promotions and retirements recorded each time."
                cadence: rolling
              tasks:
                - "Add an evidence column to the not-yet list"
                - "Review the not-yet list against current user behaviour @recurring(monthly:12)"
                - "Promote any item that evidence now supports"
                - "Move items with no evidence after three reviews to out"
            - name: Weekly demo of the working slice
              description: |-
                ## Purpose
                Teams hide behind status updates when there is nothing to show, and problems with the core flow surface late. Demoing whatever works end to end each week, however rough, keeps the build honest and shows quickly whether the thin slice really reaches first value.

                ## Milestones
                1. A thirty-minute demo held each week of the build.
                2. Every demo running the core flow on real or realistic data.
                3. Gaps in the flow noted as the next week's priority.
                4. A stakeholder invited at least every second week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly demo of the core flow is held for every week of the build, with gaps recorded as the next priority."
                cadence: rolling
              tasks:
                - "Book a recurring thirty-minute demo slot with the team"
                - "Run the core flow live on realistic data @recurring(weekly:thu)"
                - "Note each gap in the flow as next week's priority"
                - "Invite a stakeholder to every second demo"
            - name: Assumption evidence tracker
              description: |-
                ## Purpose
                Evidence from calls, usage data and support messages tends to live in people's heads, and the assumption map goes stale the week after it is drawn. A tracker that records each piece of evidence against the assumption it supports or weakens keeps the map current and shows when a belief has been tested enough.

                ## Milestones
                1. A tracker with one row per assumption from the map.
                2. Each new piece of evidence logged with date, source and direction.
                3. Assumptions re-marked as supported, weakened or still open each month.
                4. The riskiest assumption's status visible on the MVP brief.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each assumption on the map has dated evidence entries and a current status, updated monthly for at least three months."
                cadence: rolling
              tasks:
                - "Create one tracker row per assumption from the map"
                - "Log each piece of evidence with date, source and whether it supports or weakens"
                - "Re-mark each assumption as supported, weakened or open @recurring(monthly:8)"
                - "Copy the riskiest assumption's status onto the brief"
            - name: Watching first users use the MVP each week
              description: |-
                ## Purpose
                Dashboards say what happened but rarely why, and with ten users the numbers are too small to read anyway. Watching two or three first users work through the MVP each week, on a call or in person, shows where the core flow breaks and which missing features they actually reach for.

                ## Milestones
                1. Two or three observed sessions held each week while the MVP is live.
                2. Notes from each session tagged by step in the core flow.
                3. Requests users make sorted into needed for the flow or nice to have.
                4. The week's findings brought to the scope check.

                ## Notes
                Watch rather than ask. What users try to do in the product matters more than what they say they would like. Recruiting and running discovery interviews is a separate area.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least two first-user sessions are observed each week for six weeks, with notes tagged to steps in the core flow."
                cadence: rolling
              tasks:
                - "Ask five first users if you can watch them use the MVP"
                - "Observe two sessions and tag notes by core flow step @recurring(weekly:tue)"
                - "Sort what users asked for into needed or nice to have"
                - "Bring the week's findings to the scope check"
            - name: Three-number MVP learning sheet
              description: |-
                ## Purpose
                MVPs drown in metrics that cannot change any decision, such as page views and raw sign-ups. Choosing three numbers tied to the hypothesis, for example users reaching first value, users returning within a week and users who would be upset to lose it, keeps attention on the result the MVP exists to produce.

                ## Milestones
                1. Three numbers chosen, each linked to the hypothesis or a kill criterion.
                2. A sheet recording each number weekly, by hand if needed.
                3. The pass mark drawn as a line on the sheet.
                4. The weekly numbers discussed at the scope check.

                ## Notes
                Start from the **Metrics log** template. Counting by hand from a spreadsheet is fine for an MVP; full analytics can wait.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three hypothesis-linked numbers are recorded weekly against the pass mark for the full length of the test."
                cadence: rolling
              tasks:
                - "Choose three numbers that tie directly to the hypothesis"
                - "Set up the sheet from the metrics log template"
                - "Record the three numbers, counting by hand if needed @recurring(weekly:wed)"
                - "Draw the pass mark on the sheet so progress is obvious"
            - name: Monthly scope update for investors or leadership
              description: |-
                ## Purpose
                Funders who hear nothing for two months fill the gap with their own expectations, usually a much bigger product. A short monthly note saying what is in scope, what was cut and what has been learned keeps their picture in line with the MVP and avoids a surprise demand for features at the readout.

                ## Milestones
                1. A five-line monthly update format agreed.
                2. Each update covering scope, cuts, evidence and the next decision.
                3. Questions from funders logged and answered.
                4. Three months of updates sent on time.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three monthly scope updates covering scope, cuts, evidence and next decision have been sent to investors or leadership."
                cadence: rolling
              tasks:
                - "Agree a five-line update format with the main investor or sponsor"
                - "Send the monthly scope and learning update @recurring(monthly:3)"
                - "Log any feature requests the update prompts in the change log"
                - "Answer funders' questions within the week"
            - name: Deliberate shortcuts register
              description: |-
                ## Purpose
                Shortcuts are what make an MVP fast: hard-coded settings, no automated tests on the edges, a manual billing step. Writing each one down with its risk and the trigger for fixing it keeps a deliberate shortcut from becoming an accident when the MVP suddenly has five hundred users.

                ## Milestones
                1. Every known shortcut listed with its risk and what would trigger a fix.
                2. Shortcuts touching the non-negotiables removed or fixed.
                3. The register reviewed monthly while the MVP is live.
                4. Fixes scheduled for any shortcut whose trigger has been reached.

                ## Notes
                Start from the **Risk register** template. The register is for choices, not bugs; bugs go on the normal board.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A shortcuts register lists each deliberate shortcut with its risk and fix trigger, and has been reviewed monthly for three months."
                cadence: rolling
              tasks:
                - "Create a shortcuts register from the risk register template"
                - "Ask the engineers to list every shortcut taken so far"
                - "Write a fix trigger for each, such as fifty active users"
                - "Review the register and schedule fixes for reached triggers @recurring(monthly:25)"
            - name: Build, measure, learn cycle review
              description: |-
                ## Purpose
                Each MVP cycle should end with a decision, yet teams often roll straight into building the next batch of features. A cycle review that compares results with the hypothesis, updates the assumption map and picks the next riskiest question turns a string of builds into a sequence of answers.

                ## Milestones
                1. A review held at the end of every cycle.
                2. Results compared with the pass mark and recorded.
                3. The next riskiest assumption chosen for the coming cycle.
                4. Scope for the next cycle set from that assumption, not from the backlog.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each completed MVP cycle has a recorded review comparing results with the pass mark and naming the next assumption to test."
                cadence: cyclic
              tasks:
                - "Set the length of one build, measure and learn cycle"
                - "Compare the cycle's results with the pass mark @recurring(monthly:20)"
                - "Choose the next riskiest assumption to test"
                - "Set the next cycle's scope from that assumption"
            - name: Writing hypotheses a result can disprove
              description: |-
                ## Purpose
                Phrases like 'users will love it' or 'there is demand' cannot fail, so they cannot teach anything. Practising the shape of a falsifiable hypothesis, with a named user, an observable behaviour and a threshold, makes every MVP sharper and makes results harder to explain away.

                ## Milestones
                1. The parts of a testable hypothesis understood: who, behaviour, signal, threshold and time.
                2. Ten weak hypotheses from past work rewritten in that shape.
                3. Each rewrite checked by a colleague for whether a result could prove it wrong.
                4. A one-line hypothesis pattern added to the team's brief template.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten rewritten hypotheses have each been checked by a colleague as disprovable, and a pattern has been added to the brief template."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read a short guide on writing falsifiable product hypotheses"
                - "Rewrite ten vague claims from old plans as testable hypotheses"
                - "Ask a colleague whether any result could prove each one wrong"
                - "Add the hypothesis pattern to the brief template"
            - name: Story mapping to find the walking skeleton
              description: |-
                ## Purpose
                Story maps lay out what users do from left to right and the detail of each step from top to bottom, which makes the thinnest end-to-end version easy to see. Learning to draw a slice across the top row, the walking skeleton, gives the team a visual way to agree the MVP rather than arguing over a flat list.

                ## Milestones
                1. The story mapping method learned from a book, talk or workshop.
                2. A story map drawn for the current idea with the team.
                3. A release line drawn under the minimum steps that reach first value.
                4. Everything below the line moved to not-yet.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A team-drawn story map exists with a release line marking the walking skeleton, matched against the scope list."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read an introduction to user story mapping"
                - "Draw the user's activities left to right on a wall or board"
                - "Add the details under each activity from essential to optional"
                - "Draw a release line under the minimum that reaches first value"
                - "Match items below the line to the not-yet list"
            - name: Slicing features into thin vertical slices
              description: |-
                ## Purpose
                Building layer by layer, the database first, then the back end, then the screens, means nothing works until everything works. Practising vertical slicing, cutting each feature into thin pieces that run end to end, lets an MVP reach real users weeks earlier and makes scope cuts possible at any point.

                ## Milestones
                1. Three common slicing patterns learned, such as by workflow step, by data type or simple case first.
                2. Three features from the scope list sliced into pieces of a day or two each.
                3. The first slice of each feature running end to end.
                4. Slices not needed for the core flow moved to not-yet.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three MVP features are sliced into end-to-end pieces of one or two days each, with the first slice of each working."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Learn three patterns for splitting a feature vertically"
                - "Slice three scope list features into pieces of one or two days"
                - "Build the first slice of one feature end to end"
                - "Move unneeded slices to the not-yet list"
            - name: Replacing features with manual work behind the scenes
              description: |-
                ## Purpose
                Many MVP features can be a person doing the work by hand: an email instead of a notification system, a founder matching requests instead of an algorithm, a spreadsheet instead of an admin panel. Learning to spot which features can stay manual for the first fifty users is one of the fastest ways to cut build time without cutting what users experience.

                ## Milestones
                1. Each in-scope feature reviewed for whether a person could do it by hand.
                2. Manual features marked with who does them and how long each takes.
                3. The manual workload estimated for fifty users.
                4. A user count set at which each manual step gets automated.

                ## Notes
                Manual work is a scoping tool here. Designing concierge and wizard-of-oz tests to validate demand sits with prototype validation.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every in-scope feature has been assessed for manual delivery, with owners, time per user and automation triggers recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Go through each in-scope feature and ask if a person could do it"
                - "Note who would do each manual step and how long it takes"
                - "Estimate the weekly manual load at fifty users"
                - "Write the user count at which each step gets automated"
            - name: Reading small-sample MVP evidence honestly
              description: |-
                ## Purpose
                Ten users is enough to see a strong signal and far too few to see a subtle one, and enthusiasm from friendly early adopters is easy to mistake for demand. Learning how to read small numbers, separate behaviour from compliments and spot vanity metrics keeps the pivot decision grounded in what actually happened.

                ## Milestones
                1. A team rule written that what users do outweighs what they say.
                2. Vanity metrics on the current sheet identified and dropped.
                3. A rule of thumb agreed for when a sample is too small to decide.
                4. Past MVP results re-read with the new rules and any changed conclusions noted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short written evidence guide covering behaviour over opinion, vanity metrics and minimum samples is used in the next cycle review."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read a primer on interpreting results from small user samples"
                - "List the metrics on your sheet that could not change a decision"
                - "Write a team rule that behaviour outweighs compliments"
                - "Re-read your last MVP results using the new rules"
            - name: Saying no to scope additions without losing allies
              description: |-
                ## Purpose
                Founders, sales leads and sponsors usually suggest features because they care, and a flat refusal costs goodwill the MVP will need later. Practising a few honest responses, such as asking which assumption a request helps test, or accepting it only in exchange for something else, makes it easier to hold the line while keeping people on side.

                ## Milestones
                1. Four or five response scripts written for common scope requests.
                2. Each script tried in at least one real conversation.
                3. The not-yet list used as the default home for good ideas.
                4. A note of which scripts worked and which caused friction.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four or five response scripts for scope requests have each been used in a real conversation, with the results noted."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down the last five scope requests and who made them"
                - "Draft a short honest response script for each type of request"
                - "Use a script in the next scope conversation"
                - "Note which scripts kept goodwill and which did not"
            - name: How well-known products started small
              description: |-
                ## Purpose
                Plenty of products that now look huge launched with one feature, one city or one type of user, and their first versions were often embarrassingly thin. Reading a handful of origin stories with an eye on what was left out gives a team permission to cut, and examples to point to when someone says the MVP looks unfinished.

                ## Milestones
                1. A reading list of six to ten product origin stories.
                2. For each story, a note of what the first version did and left out.
                3. Three examples chosen that match your type of product.
                4. The examples added to the MVP brief or team wiki.

                ## Notes
                Start from the **Reading queue** template. Treat founder stories as illustrations, not proof; survivors tell the neatest versions.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes on at least six product origin stories, each recording what the first version left out, are saved with three matching examples chosen."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Set up a reading queue for product origin stories"
                - "Note what each first version did and what it left out"
                - "Pick three examples close to your own product"
                - "Read one origin story and add its lesson to the notes @recurring(monthly:15)"
            - name: Quality bar for what can stay rough
              description: |-
                ## Purpose
                An MVP that is rough in the wrong place teaches the wrong lesson: users abandon a broken core step and the team concludes nobody wants the product. Deciding which parts must be reliable and clear, usually the core flow and anything touching money or data, and which can be plain or manual, aims the polish where it protects the test.

                ## Milestones
                1. Each part of the MVP marked as must be solid, can be plain or can be manual.
                2. The core flow and non-negotiables all in the must be solid group.
                3. Design and engineering agreed on what plain means, such as default styles and no animation.
                4. The quality bar written on the brief.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A quality bar marking every MVP part as solid, plain or manual is on the brief and agreed by design and engineering."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every part of the MVP a user will touch"
                - "Mark each part as must be solid, can be plain or can be manual"
                - "Agree with design what plain looks like for this version"
                - "Write the quality bar on the brief"
            - name: No-code, low-code or custom code for version one
              description: |-
                ## Purpose
                A form builder, a spreadsheet and an automation tool can carry many MVPs for months, while custom code buys flexibility at the cost of weeks. Comparing the options against the time box, the core flow and the data you will collect settles the cheapest build that still tests the riskiest assumption.

                ## Milestones
                1. The core flow checked against what two or three no-code tools can do.
                2. A custom-build estimate for the same flow from an engineer.
                3. Data ownership, export and privacy terms checked for each tool.
                4. One approach chosen, with the point at which you would rebuild noted.

                ## Notes
                Start from the **Purchase decision** template. Confirm you can export your data before committing; switching tools later is where no-code MVPs get stuck.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice between no-code, low-code and custom code, with export terms checked and a rebuild trigger written down."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Open a purchase decision page for the build approach"
                - "Test whether two no-code tools can run the core flow"
                - "Ask an engineer for a rough custom-build estimate for the same flow"
                - "Check each tool's data export and privacy terms"
                - "Record the choice and the point at which you would rebuild"
            - name: Halving the scope exercise
              description: |-
                ## Purpose
                First scopes are nearly always too big, and small trims feel like progress while saving little. Forcing the team to cut the agreed scope in half, then asking what the half-size version would still prove, often reveals that the riskiest assumption needs far less than anyone thought.

                ## Milestones
                1. The current in column estimated in days.
                2. A version at half the days drafted by the team.
                3. The half version checked against the hypothesis: can it still pass or fail?
                4. The smaller scope adopted, or the reasons it cannot work written down.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A half-size scope has been drafted and either adopted or rejected with written reasons tied to the hypothesis."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Estimate each item in the in column in days"
                - "Ask the team to draft a version at half the total days"
                - "Check whether the half version can still pass or fail the hypothesis"
                - "Adopt the smaller scope or record why it cannot work"
            - name: Deferring sign-up, settings and admin screens
              description: |-
                ## Purpose
                Account creation, password resets, profile settings, roles and admin panels can eat a third of an MVP build while testing nothing about the idea. Deciding which of them can be replaced by an invite link, a single shared login or a spreadsheet the founder edits frees that time for the core flow.

                ## Milestones
                1. Every supporting screen listed: sign-up, login, settings, roles, admin and billing.
                2. Each one given a stand-in, such as invite links or a manual spreadsheet, or kept.
                3. Stand-ins checked against the non-negotiables for data and security.
                4. Remaining supporting screens kept to the minimum the core flow needs.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each supporting screen has a recorded decision to build, replace with a stand-in or drop, checked against the non-negotiables."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every sign-up, settings, roles and admin screen in the plan"
                - "Choose a stand-in for each, such as an invite link or spreadsheet"
                - "Check each stand-in against the data and security non-negotiables"
                - "Remove the replaced screens from the in column"
            - name: Web, mobile or messaging app for the first version
              description: |-
                ## Purpose
                Building native apps for two platforms doubles the work and adds app store review to every change, which hurts when the MVP needs to change weekly. Comparing a mobile-friendly web app, a single native app and a messaging or email interface against where your first users already spend time picks the channel that gets you learning fastest.

                ## Milestones
                1. Where first users already do this task recorded from conversations.
                2. Three channel options compared on build time, speed of change and fit.
                3. A channel chosen, with any platform it rules out noted.
                4. A condition written for when a native app would be worth building.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A first-version channel is chosen from three compared options, with a written condition for revisiting native apps."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Note where your first users currently do the task"
                - "Compare web, native and messaging options on build and change speed"
                - "Choose one channel and note what it rules out"
                - "Write when a native app would become worth building"
            - name: Whether the MVP asks for money
              description: |-
                ## Purpose
                Free MVPs test whether people will use something, while paid ones test whether they value it enough to pay, and the two answers can differ sharply. Deciding up front whether a payment, deposit, letter of intent or pre-order belongs in the first version depends on whether willingness to pay is part of the riskiest assumption.

                ## Milestones
                1. Willingness to pay marked as part of the riskiest assumption or not.
                2. Payment options compared: none, pre-order, deposit, letter of intent and full price.
                3. One option chosen with the simplest way to collect it, such as a payment link.
                4. Any refund promise written plainly for users.

                ## Notes
                Setting the actual price and designing plans belong with pricing and packaging. Here the only question is whether money changes hands in the test.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on whether and how the MVP collects money, tied to the riskiest assumption, with any refund terms written."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Decide whether willingness to pay is part of the riskiest assumption"
                - "Compare pre-orders, deposits, letters of intent and full price"
                - "Choose the simplest collection method, such as a payment link"
                - "Write any refund promise in plain words for users"
            - name: Pivot, persevere or stop after the first cycle
              description: |-
                ## Purpose
                When the time box ends, the hardest and most important scoping call arrives: keep going, change direction or stop. Holding a dedicated decision meeting with the hypothesis, pass mark, kill criteria and evidence on the table makes the call explicit, recorded and owned, rather than drifting into another cycle by default.

                ## Milestones
                1. Evidence summarised against the pass mark and the kill criteria.
                2. Each option, pivot, persevere or stop, argued with its strongest case.
                3. A decision made by the named owner and recorded with reasons.
                4. The next step scheduled: a new hypothesis, a scale-up plan or a wind-down.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A pivot, persevere or stop decision is recorded with reasons and a scheduled next step within two weeks of the time box ending."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Book the decision meeting for the week the time box ends"
                - "Summarise the evidence against the pass mark and kill criteria"
                - "Ask one person to argue the strongest case for each option"
                - "Record the decision, the reasons and the next step"
                - "Hold a pivot or persevere check on every live MVP @recurring(quarterly)"
            - name: Graduating from MVP to version one
              description: |-
                ## Purpose
                Once the riskiest assumption holds, the MVP's shortcuts, manual steps and missing basics start to cost real users. Planning the graduation, which shortcuts to fix, which manual steps to automate and which deferred screens to build, turns a successful test into a product without rebuilding everything at once.

                ## Milestones
                1. The shortcuts register and manual steps reviewed against current user numbers.
                2. A short list of hardening work ranked by user impact.
                3. Items from the not-yet list promoted only where evidence supports them.
                4. A version-one scope and time box agreed, separate from the MVP brief.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A version-one scope with a ranked hardening list and its own time box is agreed and kept separate from the MVP brief."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Review the shortcuts register against current user numbers"
                - "Rank hardening work by how many users each problem affects"
                - "Promote not-yet items only where evidence supports them"
                - "Write a version-one brief with its own time box"
            - name: Half-day MVP scoping workshop
              description: |-
                ## Purpose
                Scoping by email produces a list everyone has quietly added to. A half-day workshop with founders, design and engineering in one room, working from the assumption map to a core flow and a three-column scope list, gets the cuts made together so nobody feels overruled later.

                ## Milestones
                1. Attendees, room and agenda set, with the assumption map shared in advance.
                2. A pre-mortem run: it is three months on and the MVP failed, so why?
                3. A core flow and three-column scope list agreed by the end of the session.
                4. Notes and decisions circulated within a day.

                ## Notes
                Start from the **Meeting notes** template. Keep the group to five or six people; larger groups add scope rather than cut it.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A half-day workshop is held and produces an agreed core flow and scope list, with notes circulated within one day."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose five or six attendees and book a half day together"
                - "Send the assumption map to attendees two days ahead"
                - "Run a fifteen-minute pre-mortem on why the MVP might fail"
                - "Agree the core flow and scope list before the session ends"
                - "Circulate the meeting notes within a day"
            - name: Halfway scope cut review
              description: |-
                ## Purpose
                Halfway through the time box, the team knows far more about how long things take than it did at the start, and the remaining scope rarely fits. A planned review at the midpoint, where the team cuts to what can be finished well by the end date, avoids a frantic final week and a half-working MVP.

                ## Milestones
                1. Remaining work re-estimated at the midpoint.
                2. Scope that will not fit cut or moved to not-yet.
                3. The core flow confirmed as finishable by the end date.
                4. The revised scope shared with stakeholders the same week.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A midpoint review re-estimates remaining work and produces a revised scope that fits the end date, shared with stakeholders that week."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book the midpoint review for the day the time box is half spent"
                - "Re-estimate every remaining item in days"
                - "Cut or defer work until the remainder fits the end date"
                - "Send the revised scope to stakeholders that week"
            - name: First ten real users through the core flow
              description: |-
                ## Purpose
                The MVP's first real test is not launch day but the moment ten people from the target group have each reached first value. Planning that milestone, who the ten are, how they will be brought in and what will be recorded, makes the first week of real use a structured test rather than a soft launch nobody watches.

                ## Milestones
                1. Ten named first users from the target list invited.
                2. A way of bringing each one in, such as a short personal walkthrough, arranged.
                3. Each user's path through the core flow recorded, including where they stalled.
                4. The ten results summarised against the hypothesis.

                ## Notes
                Running a wider beta with waves and tester agreements is a separate area. Ten hand-picked users are enough for the first signal.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Ten named users from the target group have used the MVP, with each path through the core flow recorded and summarised."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick ten names from the first-user list and invite them"
                - "Arrange a short personal start for each user"
                - "Record where each user reached first value or stalled"
                - "Summarise the ten results against the hypothesis"
            - name: MVP learning readout to investors or leadership
              description: |-
                ## Purpose
                Funders judge an MVP by what they see in the room, and a polished feature demo invites the question of what else it could do. A readout built around the hypothesis, the evidence and the decision keeps the conversation on learning, which is what the MVP was funded to produce.

                ## Milestones
                1. A readout of no more than ten slides or a two-page memo.
                2. Hypothesis, pass mark, results and decision shown before any demo.
                3. Cuts and their reasons included, not hidden.
                4. Questions and follow-ups recorded after the session.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A readout covering hypothesis, results, cuts and decision is delivered to investors or leadership, with follow-ups recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Book the readout with investors or leadership"
                - "Ask the agent to draft a two-page memo from the cycle review notes"
                - "Put the hypothesis, results and decision before any demo"
                - "Record questions and follow-ups straight after the session"
            - name: Scoping retrospective after each cycle
              description: |-
                ## Purpose
                Teams review what they learned about users but rarely what they learned about scoping itself. A short retrospective on how accurate the estimates were, which cuts hurt and which were never missed improves the next MVP's first scope more than any framework.

                ## Milestones
                1. Estimates compared with actual days for the main items.
                2. Cuts listed as missed by users or never missed.
                3. Two changes to the scoping approach agreed for next time.
                4. Findings added to the team's scoping notes.
              priority: low
              frontmatter:
                mode: event
                output_kind: knowledge
                success_criteria: "A scoping retrospective is recorded after each cycle, with estimates against actuals and two agreed changes."
                cadence: cyclic
              tasks:
                - "Compare estimated and actual days for the main items"
                - "List each cut and whether any user missed it"
                - "Agree two changes to how the team scopes next time"
                - "Run a short scoping retrospective at the end of each cycle @recurring(quarterly)"
            - name: Non-technical founder scoping with a freelancer or agency
              description: |-
                ## Purpose
                Founders who cannot code often hand a long feature list to a developer for a fixed quote, and every later change becomes a paid change request. Scoping the MVP before asking for quotes, buying in short time-boxed phases and owning the code and accounts from day one keeps the budget aimed at learning rather than at the contract.

                ## Milestones
                1. The one-page brief and core flow finished before any developer is approached.
                2. Quotes from two or three developers for a first phase of a few weeks.
                3. Code repository, hosting and domain accounts held in the founder's name.
                4. Weekly demos written into the agreement.

                ## Notes
                Have a lawyer or an experienced founder read the contract, especially the clauses on code ownership and what counts as a change.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A first-phase agreement for a time-boxed scope is signed, with code and accounts owned by the founder and weekly demos included."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Finish the brief and core flow before contacting developers"
                - "Ask two or three developers to quote for a first phase only"
                - "Set up code, hosting and domain accounts in your own name"
                - "Check each week's developer demo against the scope list @recurring(weekly:fri)"
            - name: Technical founder holding back from over-engineering
              description: |-
                ## Purpose
                Engineers who found companies often scope the MVP they would enjoy building: scalable infrastructure, clean abstractions and automation everywhere, for users who do not exist yet. Setting explicit limits, such as one database, one deploy target and no separate services, and asking a peer to challenge the design keeps engineering time on the riskiest assumption.

                ## Milestones
                1. Architecture limits for the MVP written in five lines or fewer.
                2. Each planned component checked against the limits.
                3. A peer review of the design focused on what could be removed.
                4. A note of what will be rebuilt properly if the MVP succeeds.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written architecture limits exist and the design has had monthly peer reviews for removable parts throughout the build."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write five lines of architecture limits for the MVP"
                - "Check every planned component against the limits"
                - "Ask a peer to name what could be removed from the design @recurring(monthly:22)"
                - "Write what you will rebuild properly if the MVP succeeds"
            - name: New-venture MVP inside a large company
              description: |-
                ## Purpose
                Inside an established company, an MVP faces pressures a startup does not: brand rules, security reviews, a sponsor expecting a launch and colleagues who see a thin product as a reputation risk. Agreeing up front a small test audience, a separate label if needed and a learning-first definition of success with the sponsor gives the team room to keep scope small.

                ## Milestones
                1. A sponsor agreement that success means a tested hypothesis, not a launch.
                2. Brand, security and legal reviews scoped to the size of the test.
                3. A small named test audience approved.
                4. Monthly learning notes sent to the sponsor.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written sponsor agreement defines success as a tested hypothesis, with reviews scoped to a small approved test audience."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Agree with the sponsor in writing that the goal is a tested hypothesis"
                - "Ask brand, security and legal what a small test needs from them"
                - "Get a small named test audience approved"
                - "Send the sponsor a one-paragraph learning note @recurring(monthly:17)"
            - name: B2B MVP with one design partner
              description: |-
                ## Purpose
                A single business customer willing to use an early version is a gift, but their requests can turn the MVP into custom software for one company. Agreeing what the design partner gets, what they give back and which requests stay out of scope keeps the product general enough to sell to the next ten customers.

                ## Milestones
                1. A short written agreement covering access, feedback, data and duration.
                2. Each partner request tagged as general or specific to this customer.
                3. Only general requests considered for scope.
                4. A second similar company asked to look at the MVP before scope widens.

                ## Notes
                Ask a lawyer to review anything covering data, liability or future pricing commitments. Running a customer advisory board is a separate area.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written design partner agreement is in place and every partner request is tagged general or customer-specific before entering scope."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Draft a one-page design partner agreement covering access and feedback"
                - "Tag each partner request as general or specific to them"
                - "Admit only general requests to the scope list"
                - "Hold a thirty-minute check-in with the design partner @recurring(weekly:tue)"
            - name: Part-time founder scoping for evenings and weekends
              description: |-
                ## Purpose
                Ten hours a week is a real budget, but scope written as if it were full time will take a year to ship. Measuring the time box in hours, cutting the MVP to fit roughly six weeks of those hours and planning each week's sessions keeps a side project moving instead of stalling at sixty percent done.

                ## Milestones
                1. Realistic weekly hours written down after one honest test week.
                2. The MVP scope estimated in hours and cut to fit about six weeks.
                3. Each week's sessions planned in advance with one target per session.
                4. A first user through the core flow within the time box.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An MVP scoped in hours to about six weeks of available time has a first user through the core flow by its end date."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Track your real available hours for one week"
                - "Estimate the scope in hours and cut it to six weeks of them"
                - "Plan the coming week's build sessions with one target each @recurring(weekly:sun)"
                - "Book a first user for the week the time box ends"
            - name: Feature-level MVP inside an established product
              description: |-
                ## Purpose
                A new feature in a product people already pay for cannot be as rough as a startup's first version, yet it still does not need every option on day one. Scoping it as an MVP means choosing the one user segment and use case to serve, the minimum that meets existing quality expectations, and the evidence that would justify building more.

                ## Milestones
                1. One segment and one use case chosen for the first release of the feature.
                2. Existing quality expectations, such as permissions and accessibility, listed and kept in scope.
                3. Options and variants deferred to not-yet with the evidence each would need.
                4. A dated decision set to expand, hold or remove the feature.

                ## Notes
                Gradual release mechanics, flags and percentage rollouts belong with staged feature rollouts.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A feature MVP scope names one segment and use case, keeps existing quality expectations and sets a dated expand, hold or remove decision."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose one segment and one use case for the first release"
                - "List the quality expectations existing users already hold"
                - "Defer variants to not-yet with the evidence each would need"
                - "Set a date to decide whether to expand, hold or remove the feature"
            - name: Second MVP after a pivot
              description: |-
                ## Purpose
                After a pivot, teams are tempted to keep everything they built and add the new direction on top, which produces a larger product testing a muddier question. Scoping the second MVP from a fresh riskiest assumption, keeping only what the new core flow needs, makes the pivot a clean test rather than a patch.

                ## Milestones
                1. What the first MVP proved and disproved written as three or four statements.
                2. A new riskiest assumption and hypothesis written.
                3. Existing features sorted into reuse for the new core flow, park or remove.
                4. A new time box agreed, usually shorter than the first.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A second MVP brief exists with a new riskiest assumption, a sorted reuse list and a time box shorter than the first."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write what the first MVP proved and disproved in four statements"
                - "Write the new riskiest assumption and its hypothesis"
                - "Sort existing features into reuse, park or remove"
                - "Agree a time box shorter than the first one"
            - name: Running two or three small MVP bets in parallel
              description: |-
                ## Purpose
                Experienced founders and product leads sometimes run two or three tiny MVPs at once against different assumptions or segments, instead of one larger bet. Doing it well needs strict time boxes, a comparable pass mark and a rule for which bet gets more resources, or the team ends up half-building three products.

                ## Milestones
                1. Two or three bets, each with its own one-line hypothesis and time box.
                2. A shared, comparable pass mark across the bets.
                3. Each bet staffed so no person works on more than two.
                4. A dated decision on which bet continues and which stop.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two or three parallel MVP bets each have a hypothesis and time box, and a dated decision records which continued and which stopped."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write a one-line hypothesis and time box for each bet"
                - "Agree one comparable pass mark across all the bets"
                - "Check nobody is working on more than two bets"
                - "Compare the bets' evidence side by side @recurring(monthly:28)"
            - name: Team MVP scoping playbook and coaching
              description: |-
                ## Purpose
                Once a few MVPs have run, the team's hard-won rules on assumptions, time boxes and cuts usually live in one or two people's heads. Writing them into a short playbook and coaching another team or founder through their first scope spreads the habit and sharpens your own thinking.

                ## Milestones
                1. A playbook of no more than six pages covering the scoping steps and templates the team uses.
                2. Real examples from past MVPs, including one cut that worked and one that hurt.
                3. One other team or founder coached through a scope using the playbook.
                4. Their feedback folded into a second version.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A playbook of six pages or fewer exists, has been used to coach one other team or founder, and has a revised second version."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Outline the scoping steps your team actually follows"
                - "Add one cut that worked and one that hurt from past MVPs"
                - "Offer to coach another team or founder through a scope"
                - "Update the playbook with lessons from recent MVPs @recurring(quarterly)"
---

# MVP Scoping

This area is for founders and product teams who have an idea and need the smallest version that will show whether it deserves more time and money. It starts with the foundations (the riskiest assumption, a hypothesis with a pass mark, a narrow first user, kill criteria, a time box, the core flow and a one-page brief), then the weekly machinery that stops scope creeping during the build, the skills of slicing and cutting, the decisions on build approach, quality bar and whether to charge, the dated moments from the scoping workshop to the pivot call, situations for solo, part-time, corporate and B2B builders, and the specialist work of parallel bets and coaching others.

The rhythm is weekly while an MVP is being built or tested, for the scope check, change log, demo, user observation and the three-number sheet, monthly for the not-yet list, assumption evidence, shortcuts register, cycle review and funder updates, and quarterly for the pivot check and the scoping retrospective. The Product spec, Metrics log, Risk register, Reading queue, Purchase decision and Meeting notes templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
