---
id: product-management.product-requirements-documents
name: Product Requirements Documents
description: "A spec practice your engineers trust: one PRD template, problems and success measures written first, testable stories and edge cases, and the review habits that keep specs current."
category: business
version: 1.0.0
tags: [product-management, product-requirements-documents, team, knowledge-worker, prd, specs, user-stories, acceptance-criteria]
author: Aurum Technology
starter_structure:
  templates:
    - product-spec
    - meeting-notes
    - risk-register
    - reading-queue
    - purchase-decision
  pillars:
    - name: Product Management
      emoji: "🧩"
      description: "Deciding what to build and why: discovery and research, roadmaps and prioritisation, specs and launches, pricing and packaging, product analytics, and the feedback loops that keep a product honest."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Product Requirements Documents
          description: "Writing specs that state the problem, goals, scope, user stories, edge cases and success measures clearly enough for design and engineering to start."
          projects:
            - name: Shared PRD template for the team
              description: |-
                ## Purpose
                Most teams have three or four spec formats in circulation, so every reader has to relearn where the scope and the open questions live. One agreed template with fixed sections (problem, goals and non-goals, users and stories, requirements, edge cases, success measures, open questions, decision log) cuts the time engineers spend hunting through a document and makes gaps visible at a glance.

                ## Milestones
                1. Specs from the last six months gathered and their section headings compared.
                2. A one-page template with eight fixed sections and a short prompt under each.
                3. The template reviewed by one engineer, one designer and one product manager.
                4. The template published where new specs are created, with the old formats marked retired.

                ## Notes
                Start from the **Product spec** template. Keep every section even when a small spec leaves it as one line: a deliberately empty section such as 'No new data stored' tells the reader more than a missing one.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single PRD template with eight named sections is published in the team's spec space and used for every new spec started after it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Collect the last six specs the team wrote and list their headings"
                - "Draft a one-page template with eight fixed sections and a prompt under each"
                - "Ask an engineer and a designer to mark what they skip when reading a spec"
                - "Publish the template and mark the older formats as retired"
            - name: One-paragraph problem statement before any solution
              description: |-
                ## Purpose
                Specs go wrong at the top far more often than in the detail: they open with the feature and leave the reader guessing which customer pain it fixes. Writing a problem statement that names the user, the situation, the current workaround and the cost of leaving it alone, before a single requirement, gives every later decision something to be tested against.

                ## Milestones
                1. A problem statement under 120 words naming the user, the trigger situation and today's workaround.
                2. At least one piece of evidence linked: a support ticket count, an interview quote or a usage figure.
                3. The statement read back by an engineer who can restate it without looking.
                4. No solution words such as button, screen, page or setting left in the problem paragraph.

                ## Notes
                If the problem cannot be written without describing the solution, the team is probably not yet sure what the problem is. Send it back to discovery rather than writing requirements around a guess.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The current spec opens with a problem statement under 120 words that cites at least one piece of evidence and contains no solution words."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the current spec's problem in one paragraph without naming any feature"
                - "Link one piece of evidence such as a ticket count or interview quote"
                - "Ask an engineer to restate the problem in their own words"
                - "Strike out any word that describes a screen, button or setting"
            - name: Goals, non-goals and out-of-scope list
              description: |-
                ## Purpose
                Scope arguments in week four of a build usually trace back to a spec that never said what it was not doing. Writing three to five goals, an explicit non-goals list and a 'later, not now' parking list turns those arguments into a quick lookup and protects the delivery date.

                ## Milestones
                1. Three to five goals, each tied to the problem statement.
                2. A non-goals list with at least three items someone might reasonably assume are included.
                3. A parked list of ideas raised during writing, each with who raised it.
                4. Design and engineering leads have confirmed the boundaries in writing.

                ## Notes
                The best non-goals are the ones a stakeholder will be disappointed by. If nobody would argue with a non-goal, it is not doing any work.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The spec lists three to five goals, at least three non-goals and a parked ideas list, all confirmed in writing by the design and engineering leads."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List three to five goals that follow directly from the problem statement"
                - "Write three non-goals a stakeholder might wrongly assume are in scope"
                - "Move ideas raised during drafting to a parked list with their source"
                - "Get written confirmation of the boundaries from the design and engineering leads"
            - name: Success measures agreed before the build starts
              description: |-
                ## Purpose
                Without a measure written down in advance, every launch can be declared a success afterwards. Choosing one primary measure and two guardrails, with today's baseline and a check date, means the team knows what working looks like before the first line of code, and the post-launch conversation is about evidence rather than opinion.

                ## Milestones
                1. One primary measure chosen that would move if the problem were solved.
                2. Two guardrail measures that must not get worse, such as support contacts or page load time.
                3. Current baseline values recorded with their source and date.
                4. A target and a check date written into the spec, with a named person to report back.

                ## Notes
                If a measure cannot be collected today, record that as an open question and raise it with whoever owns tracking. Do not quietly drop it from the spec.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The spec names one primary measure and two guardrails, each with a baseline, a target, a check date and a named owner."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose the one measure that would move if the problem were solved"
                - "Pick two guardrail measures that must not get worse"
                - "Pull today's baseline for each measure and note the source"
                - "Write the target, check date and report-back owner into the spec"
            - name: Audit of the last five shipped specs
              description: |-
                ## Purpose
                Before changing how the team writes specs, it helps to know where the current ones actually failed. Reading the last five shipped specs against what was built, and counting the questions engineers had to ask in chat, the late scope changes and the bugs traced to missing requirements, gives a fact base for every improvement that follows.

                ## Milestones
                1. Five recently shipped specs chosen, each paired with its tickets and chat threads.
                2. A count per spec of clarifying questions, late scope changes and bugs traced to missing requirements.
                3. The three most common gaps named, with an example of each.
                4. Findings shared with the team in a 30-minute session.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written audit of five shipped specs counts clarifying questions, late changes and requirement bugs, and names the three most common gaps."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick five specs shipped in the last six months and find their tickets"
                - "Count the clarifying questions asked about each spec in chat and comments"
                - "Ask the agent to summarise the late scope changes across the five threads"
                - "Present the three most common gaps to the team with one example each"
            - name: Definition of spec-ready agreed with engineering
              description: |-
                ## Purpose
                Engineers and product managers often disagree about whether a spec is finished, and the disagreement surfaces as a stalled sprint. A short written definition of spec-ready (problem stated, scope bounded, stories with acceptance criteria, designs linked, open questions below a set number) settles it once and lets either side say 'not ready yet' without it becoming personal.

                ## Milestones
                1. A checklist of no more than eight conditions a spec must meet before build.
                2. The checklist agreed with the engineering lead and the design lead.
                3. The checklist added to the top of the PRD template.
                4. Two specs assessed against it and the results discussed.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A spec-ready checklist of eight or fewer conditions is agreed with engineering and design and sits at the top of the PRD template."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft eight conditions a spec must meet before engineering starts"
                - "Review the draft with the engineering and design leads"
                - "Add the agreed checklist to the top of the PRD template"
                - "Revisit the spec-ready checklist with the engineering leads @recurring(quarterly)"
            - name: Spec status labels and naming convention
              description: |-
                ## Purpose
                Search the shared drive for a feature and you often get three specs with no clue which one is current. A naming pattern and a status label on every spec (draft, in review, approved, in build, shipped, superseded) means anyone can find the live version in seconds and nobody builds from an abandoned draft.

                ## Milestones
                1. A naming pattern agreed, such as product area, feature and quarter.
                2. Six status labels defined, with who can move a spec between them.
                3. Every spec from the last year renamed and labelled.
                4. Superseded specs linking forward to their replacement.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every spec from the last twelve months follows the naming pattern and carries one of six status labels, with superseded specs linking to their replacement."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Agree a naming pattern for specs with the other product managers"
                - "Define six status labels and who may change each one"
                - "Rename and label every spec written in the last year"
                - "Add a forward link from each superseded spec to its replacement"
            - name: Spec reviewers and approvers map
              description: |-
                ## Purpose
                Specs stall when nobody knows whose approval is needed, or when a director appears at the end with objections the team could have heard in week one. Mapping who writes, who reviews and who approves for each kind of spec, and putting it in the template, keeps review short and avoids the late veto.

                ## Milestones
                1. Spec types listed, for example small change, standard feature and cross-team initiative.
                2. For each type, named roles for author, required reviewers, optional reviewers and a single approver.
                3. The map shared and agreed with engineering, design and the product lead.
                4. A reviewers and approver field added to the PRD template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page map names author, reviewers and approver for each spec type and is linked from the PRD template."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the three or four kinds of spec your team writes"
                - "Name the required reviewers and the single approver for each kind"
                - "Add a reviewers and approver field to the PRD template"
                - "Update the reviewers map when team roles change @recurring(yearly)"
            - name: Glossary of terms used across specs
              description: |-
                ## Purpose
                When one spec says workspace, another says account and the database says tenant, engineers build the wrong thing or ask the same question every sprint. A shared glossary that every spec links to, with the user-facing word, the internal word and a one-line definition, removes a whole class of misunderstandings.

                ## Milestones
                1. Twenty to forty terms collected from recent specs, tickets and the interface.
                2. Each term given a definition, its user-facing label and its internal name.
                3. Conflicting terms resolved and the losing words listed as do not use.
                4. A glossary link added to the PRD template.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A glossary of at least twenty terms, each with a definition, user-facing label and internal name, is linked from the PRD template."
                cadence: rolling
              tasks:
                - "Pull twenty terms that appear in recent specs and in the interface"
                - "Write a one-line definition and the internal name for each term"
                - "Settle each conflicting pair of terms with the design lead"
                - "Add new terms from this month's specs to the glossary @recurring(monthly:3)"
            - name: Weekly spec review session
              description: |-
                ## Purpose
                Asynchronous comments alone let specs drift for weeks, while a standing 45-minute slot gives drafts a predictable path to approval. Each week one or two specs are walked through by their authors with engineering and design in the room, decisions are recorded, and the author leaves with a short list of changes.

                ## Milestones
                1. A recurring weekly slot booked with the engineering and design leads.
                2. A rule that specs are shared at least one working day before review.
                3. Decisions and requested changes recorded in notes linked from each spec.
                4. Eight consecutive sessions held, with no spec waiting more than two weeks for review.

                ## Notes
                Start from the **Meeting notes** template. If pre-reading keeps slipping, spend the first ten minutes reading the spec silently together; it works better than nagging.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly reviews held, each with recorded decisions, and no spec waiting more than two weeks for its first review."
                cadence: rolling
              tasks:
                - "Book a 45-minute weekly spec review with the engineering and design leads"
                - "Set the rule that specs are shared a working day before review"
                - "Run the spec review and record decisions in the spec's notes @recurring(weekly:tue)"
                - "Send each author their list of requested changes the same day"
            - name: Change log for approved specs
              description: |-
                ## Purpose
                Once a spec is approved, silent edits are dangerous: an engineer halfway through a story may never see that the rule changed. A dated change log at the top of each spec, plus the habit of telling the people building it, makes late changes visible and keeps the spec trustworthy as the source of truth.

                ## Milestones
                1. A change log table in the PRD template with date, change, reason and who was told.
                2. Every post-approval edit on live specs logged.
                3. A rule that changes affecting scope go back through review.
                4. A monthly check showing no unlogged edits on specs in build.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All specs in build carry a change log, and a monthly check finds no unlogged edits after approval for three months running."
                cadence: rolling
              tasks:
                - "Add a change log table to the top of the PRD template"
                - "Log every edit made to an approved spec with its reason"
                - "Message the engineers building a feature whenever its spec changes"
                - "Compare version history with the change log on specs in build @recurring(monthly:9)"
            - name: Open questions register for live specs
              description: |-
                ## Purpose
                Every spec starts with unknowns, and the dangerous ones are those nobody owns. Keeping open questions in a table with an owner, a decide-by date and the answer once found, and clearing it weekly, stops unanswered questions turning into assumptions engineers make on their own late on a Friday.

                ## Milestones
                1. An open questions table in every live spec with owner, decide-by date and status.
                2. Each question answered or escalated by its decide-by date.
                3. Answers moved into the body of the spec, not left only in the table.
                4. No live spec carrying an overdue question for a month.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For four consecutive weeks, every open question in live specs has an owner and a date, and none is more than a week overdue."
                cadence: rolling
              tasks:
                - "Add an open questions table with owner and decide-by date to each live spec"
                - "Chase every open question due this week and record the answer @recurring(weekly:thu)"
                - "Move each answer into the relevant section of the spec body"
                - "Escalate any question that has slipped past its date twice"
            - name: Spec versus shipped feature comparison
              description: |-
                ## Purpose
                Comparing what the spec said with what actually shipped is the fastest feedback a spec writer can get. A short monthly look at one recently released feature, noting which requirements changed, which edge cases were missed and whether the success measures were checked on their date, shows where your specs keep drifting from reality.

                ## Milestones
                1. One shipped feature compared with its approved spec each month.
                2. Differences sorted into deliberate changes, missed requirements and missed edge cases.
                3. The success measure checked against its target and the result added to the spec.
                4. One change to the template or spec-ready checklist made from each quarter's findings.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly comparisons recorded, each classifying the differences and noting whether the success measure met its target."
                cadence: rolling
              tasks:
                - "Pick the most recently shipped feature that had an approved spec"
                - "Compare the shipped feature with its spec and sort the differences @recurring(monthly:18)"
                - "Record the success measure result against its target in the spec"
                - "Turn the quarter's most common miss into a template or checklist change"
            - name: Spec quality scorecard
              description: |-
                ## Purpose
                Quality is hard to discuss without a shared yardstick, so feedback on specs tends to be vague. Scoring a sample of specs each month against six questions (clear problem, bounded scope, testable stories, edge cases covered, measures set, questions owned) turns 'this feels thin' into a specific fix and shows whether the team is improving.

                ## Milestones
                1. A scorecard of six yes or no questions agreed with the team.
                2. Three specs scored each month by someone other than their author.
                3. Scores tracked in a simple table over time.
                4. A team average of five out of six reached across a quarter.

                ## Notes
                Score the spec, not the writer. Share totals as a team number; individual results belong in private feedback.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three specs scored every month for a quarter against a six-question scorecard, with the team average recorded each month."
                cadence: rolling
              tasks:
                - "Write six yes or no questions that define a good spec for your team"
                - "Score three specs written by others against the scorecard @recurring(monthly:23)"
                - "Ask the agent to spot patterns across the month's scorecard comments"
                - "Share the team's average score at the monthly product meeting"
            - name: Quarterly PRD template revision
              description: |-
                ## Purpose
                Templates collect clutter: sections added after one incident that nobody fills in, prompts that no longer match how the team works. A quarterly revision driven by the scorecard and the spec versus shipped findings, rather than personal taste, keeps the template short enough that people actually use it.

                ## Milestones
                1. Sections left blank in most recent specs identified.
                2. Changes proposed from the quarter's scorecard and comparison findings.
                3. A revised template published with a short note on what changed.
                4. The template no longer than it was a year ago.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The PRD template is revised each quarter with a written change note, and its length has not grown over the year."
                cadence: cyclic
              tasks:
                - "List the template sections left blank in most of last quarter's specs"
                - "Propose template changes based on scorecard and comparison findings"
                - "Publish the revised template with a three-line change note @recurring(quarterly)"
            - name: Stale spec sweep
              description: |-
                ## Purpose
                Old drafts that were never approved or never built still turn up in search and get quoted in meetings as if they were plans. A monthly sweep that closes, archives or relabels anything untouched for 60 days keeps the spec space an accurate picture of what the team has actually decided.

                ## Milestones
                1. A saved search for specs not edited in 60 days.
                2. Each stale spec closed, archived or given a fresh status and owner.
                3. Abandoned drafts given a one-line reason before archiving.
                4. Three consecutive sweeps leaving no unlabelled stale specs.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three monthly sweeps completed in a row, each leaving no spec untouched for 60 days without a current status."
                cadence: rolling
              tasks:
                - "Save a search for specs not edited in the last 60 days"
                - "Archive or relabel every spec the search finds @recurring(monthly:28)"
                - "Add a one-line reason to each abandoned draft before archiving it"
            - name: Kickoff walkthrough for every approved spec
              description: |-
                ## Purpose
                Approval is not understanding: the engineers who will build a feature were often not in the review. A 30-minute walkthrough within five working days of approval, where the builders ask questions and the author updates the spec live, catches misreadings before they become code.

                ## Milestones
                1. A rule that every approved spec gets a walkthrough within five working days.
                2. The builders, the designer and the tester invited to each one.
                3. Questions raised answered in the spec itself during or after the session.
                4. A weekly check showing no approved spec waiting for its walkthrough.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every spec approved over two months had a walkthrough within five working days, with the questions raised answered in the spec."
                cadence: rolling
              tasks:
                - "Agree the five-working-day walkthrough rule with the engineering lead"
                - "Check for approved specs still waiting for a walkthrough @recurring(weekly:mon)"
                - "Invite the builders, the designer and the tester to each walkthrough"
                - "Answer every walkthrough question inside the spec itself"
            - name: Story-to-ticket traceability check
              description: |-
                ## Purpose
                Requirements get lost between the spec and the tracker: a story is merged into another ticket, or an edge case never becomes a ticket at all. Checking monthly that every story and edge case in specs in build has a matching ticket, and every ticket points back to its spec, closes those gaps before testing finds them.

                ## Milestones
                1. Each story and edge case in the spec numbered so tickets can reference it.
                2. Every ticket for a feature linking back to the story it implements.
                3. A monthly list of stories or edge cases with no ticket.
                4. Gaps found closed within the week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For three months, every story and edge case in specs in build maps to at least one ticket, with any gap closed within a week."
                cadence: rolling
              tasks:
                - "Number every story and edge case in specs currently in build"
                - "Ask engineers to put the story number in each ticket title"
                - "List stories or edge cases with no matching ticket @recurring(monthly:14)"
            - name: Writing user stories with clear acceptance criteria
              description: |-
                ## Purpose
                User stories are where most specs become ambiguous, because 'as a user I want to export data' hides who, which data, in what format and what happens on failure. Practising the pattern of role, need and reason, then three to six acceptance criteria per story, on ten real stories from your own work builds the habit faster than reading about it.

                ## Milestones
                1. Ten existing stories rewritten with a specific role, need and reason.
                2. Three to six acceptance criteria written for each, covering at least one failure case.
                3. Stories too large for one sprint split along a workflow step or business rule.
                4. An engineer's review of the rewrites with fewer than two clarifying questions per story.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten rewritten stories, each with a named role and three to six acceptance criteria, reviewed by an engineer with fewer than two questions per story."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick ten stories from recent specs that caused questions"
                - "Rewrite each story with a specific role, need and reason"
                - "Add three to six acceptance criteria per story, including a failure case"
                - "Ask an engineer to review the rewrites and count their questions"
            - name: Given-when-then acceptance criteria practice
              description: |-
                ## Purpose
                Acceptance criteria written as loose sentences leave testers guessing at the starting state. The given-when-then format forces each criterion to state the starting condition, the action and the observable result, which makes it directly testable and often reveals a missing rule while you write.

                ## Milestones
                1. The format practised on one feature until each criterion has all three parts.
                2. A worked example kept in the team's spec space.
                3. A tester confirming they could write test cases straight from the criteria.
                4. The format used in the next two specs you write.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two new specs use given-when-then acceptance criteria that a tester confirms can become test cases without further questions."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Rewrite one feature's acceptance criteria in given-when-then form"
                - "Mark any criterion missing its starting condition or result"
                - "Ask a tester whether they could write test cases from the criteria alone"
                - "Save the best example in the team's spec space for others"
            - name: Edge case and error state checklist
              description: |-
                ## Purpose
                Edge cases missing from the spec still get decided, just by whoever writes the code, at the last minute. A checklist of categories to walk through for every feature (empty states, zero and maximum values, permissions, concurrent edits, slow or no network, time zones, deleted or merged records, very long text) catches most of them in an hour of thinking rather than a week of bug fixing.

                ## Milestones
                1. A checklist of at least twelve edge-case categories with an example for each.
                2. The checklist run against the current spec, with each finding written as a requirement.
                3. Error messages and recovery paths stated for every failure the checklist found.
                4. Edge cases from recent bug reports added to the checklist.
              priority: high
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "The current spec has passed a twelve-category edge-case checklist, with every finding written as a requirement with its error message."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write twelve edge-case categories with an example of each"
                - "Run the checklist against the spec you are writing now"
                - "State the error message and recovery path for each failure found"
                - "Add edge cases from this month's bug reports to the checklist @recurring(monthly:12)"
            - name: Plain-language writing for specs
              description: |-
                ## Purpose
                Specs are read by people skimming between meetings, some in their second or third language. Short sentences, active voice, one requirement per sentence and the same word for the same thing throughout make a spec quicker to read and harder to misread, and these habits can be practised on your own drafts.

                ## Milestones
                1. One existing spec rewritten with sentences under 25 words and one requirement per sentence.
                2. Passive sentences that hide who does what given a named actor.
                3. Vague words such as fast, easy, intuitive and appropriate replaced with something measurable or removed.
                4. A monthly readability pass done on one new spec.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One spec has been rewritten to plain-language rules, and a readability pass is done on a new spec each month for three months."
                cadence: rolling
              tasks:
                - "Rewrite one spec so no sentence is over 25 words"
                - "Give every passive sentence that hides who acts a named actor"
                - "Search the draft for fast, easy and intuitive and replace each with a measure"
                - "Run one new spec through a readability pass @recurring(monthly:7)"
            - name: Testable requirement wording with must, should and may
              description: |-
                ## Purpose
                Phrases like 'the system should probably support bulk upload' cannot be built or tested with confidence. Using a small set of requirement levels (must for launch blockers, should for strong preferences, may for optional) and writing each requirement so a tester could prove it true or false makes priority visible inside the spec itself.

                ## Milestones
                1. The three requirement levels defined in the PRD template.
                2. Every requirement in the current spec tagged with one level.
                3. Each must requirement paired with a pass or fail test.
                4. The must list cut to what launch genuinely depends on.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every requirement in the current spec carries a must, should or may level, and every must has a stated pass or fail test."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Define must, should and may in one line each in the template"
                - "Tag every requirement in the current spec with one level"
                - "Write a pass or fail test beside each must requirement"
                - "Challenge every must requirement that launch does not depend on"
            - name: Flow and state diagrams in specs
              description: |-
                ## Purpose
                Three paragraphs about an approval process are harder to follow than one flow diagram, and a status field with five values almost always needs a state diagram to show which moves are allowed. Learning two or three diagram types well, and when each helps, makes complex behaviour reviewable in minutes.

                ## Milestones
                1. A user flow diagram drawn for one feature, including the failure branches.
                2. A state diagram drawn for one object with a status field, showing every allowed transition.
                3. Both diagrams reviewed by an engineer for missing paths.
                4. A rule of thumb written down for when a spec needs a diagram.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A flow diagram and a state diagram for real features sit in specs, reviewed by an engineer, with a written rule for when diagrams are needed."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Draw a user flow for one feature including what happens on failure"
                - "Draw a state diagram for an object that has a status field"
                - "Ask an engineer to find a missing path or transition in each diagram"
                - "Write a one-line rule for when a spec should include a diagram"
            - name: Non-functional requirements primer
              description: |-
                ## Purpose
                Performance, accessibility, security, privacy and reliability are rarely in a first draft, and their absence shows up as late surprises: a page that times out with real data, a form a screen reader cannot use. Learning what each category asks for and giving it a short section in every spec means these needs are discussed while they are cheap to meet.

                ## Milestones
                1. One-paragraph notes on each of five categories, with two example requirements per category.
                2. A non-functional section added to the PRD template with prompts for each.
                3. The current spec's non-functional needs agreed with an engineer.
                4. Accessibility expectations stated against the standard your organisation commits to.

                ## Notes
                In regulated settings, privacy and security requirements need sign-off from the people responsible for them. The spec records their decisions rather than making them.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The PRD template has a non-functional section covering five categories, and the current spec's entries are agreed with an engineer."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write two example requirements each for performance, accessibility, security, privacy and reliability"
                - "Add a non-functional section with prompts to the PRD template"
                - "Agree the current spec's non-functional needs with an engineer"
                - "Find out which accessibility standard your organisation commits to"
            - name: Reading well-written public specs and design docs
              description: |-
                ## Purpose
                Many engineering organisations publish their design documents, RFCs and product specs, and reading a handful of good ones teaches structure faster than any course. A reading list of public examples, with one note per document on what it did well, gives you patterns to borrow for your own next draft.

                ## Milestones
                1. A reading list of at least eight public specs, RFCs or design documents.
                2. One page of notes per document on structure, tone and how it handled uncertainty.
                3. Three techniques chosen to try in your own next spec.
                4. One public spec read and noted each month.

                ## Notes
                Start from the **Reading queue** template.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Eight public specs or design documents read with notes, and three borrowed techniques used in your own specs."
                cadence: rolling
              tasks:
                - "List eight public specs, RFCs or design documents to read"
                - "Read one public spec and note what it did well @recurring(monthly:11)"
                - "Pick three techniques to try in your next spec"
            - name: Data and API needs described at product level
              description: |-
                ## Purpose
                Product managers do not need to design schemas, but a spec that never says which fields are stored, which are required, how long they are kept or what another system sends leaves engineers guessing about behaviour, not code. Learning to describe data and integration needs in product terms makes the spec complete without crossing into engineering design.

                ## Milestones
                1. A field table for one feature listing each field, whether it is required, its limits and who can see it.
                2. Retention and deletion behaviour stated for any personal data.
                3. Inputs and outputs of any external system described in plain language.
                4. An engineer confirming the description is complete enough to design from.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One spec includes a field table, retention rules and a plain-language description of external inputs and outputs, confirmed complete by an engineer."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Make a field table for one feature with required flags and limits"
                - "State how long personal data is kept and how it is deleted"
                - "Describe what each external system sends and receives in plain words"
                - "Ask an engineer if they could design from the description"
            - name: Spec size tiers for small, standard and large work
              description: |-
                ## Purpose
                A two-line copy change and a new billing system should not need the same document, yet teams with one template either over-write small specs or under-write big ones. Agreeing three tiers (a one-paragraph brief, a standard PRD, a full spec with formal sign-off) and the triggers for each saves hours on small work and adds rigour where it pays.

                ## Milestones
                1. Three tiers defined, with the sections each requires.
                2. Triggers agreed for moving up a tier, such as touching money, personal data or more than one team.
                3. The tiers added to the template space with an example of each.
                4. The next ten pieces of work assigned a tier at intake.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Three spec tiers with written triggers are published, and the next ten pieces of work were each assigned a tier."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Define three spec tiers and the sections each one needs"
                - "Write the triggers that move work up a tier"
                - "Add a worked example of each tier to the template space"
                - "Assign a tier to each of the next ten pieces of work at intake"
            - name: Choosing the tool your team writes specs in
              description: |-
                ## Purpose
                Scattered across documents, a wiki and the issue tracker, specs are hard to search, link and keep current. Comparing two or three options against criteria that matter for specs (commenting, version history, links to tickets and designs, templates, access for outside reviewers) leads to one home the whole team will actually use.

                ## Milestones
                1. Five to seven criteria agreed with engineering and design.
                2. Two or three tools scored against the criteria, including the one already in use.
                3. A decision recorded with the reason and the main trade-off accepted.
                4. A plan for moving live specs, leaving shipped ones where they are.

                ## Notes
                Start from the **Purchase decision** template. The tool you already pay for usually wins unless it fails a must-have criterion; switching cost is real.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision names the spec tool, the criteria it was scored against and a plan for moving live specs."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree five to seven criteria for a spec tool with engineering and design"
                - "Score the current tool and two alternatives against the criteria"
                - "Record the decision, the reason and the trade-off accepted"
                - "Move live specs to the chosen tool and leave shipped ones in place"
            - name: Cutting a bloated spec down to what matters
              description: |-
                ## Purpose
                Long specs are often long because nobody deleted anything: background that belongs in research notes, solutions considered and rejected, requirements for phase three. Editing one current spec down by at least a third, moving rather than deleting the material, makes it readable in one sitting and shows the team what a lean spec looks like.

                ## Milestones
                1. The spec's word count recorded before editing.
                2. Background, rejected options and later-phase ideas moved to linked appendices.
                3. The core spec cut by at least a third without losing a requirement.
                4. A reviewer confirming nothing needed for build was lost.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The core of one current spec is at least a third shorter, with moved material linked and a reviewer confirming no requirement was lost."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Record the word count of the longest spec currently in review"
                - "Ask the agent to flag paragraphs that are background rather than requirements"
                - "Move background and rejected options into linked appendices"
                - "Ask a reviewer to confirm no requirement was lost in the edit"
            - name: Design and spec handoff agreement
              description: |-
                ## Purpose
                When the spec says one thing and the latest design file shows another, engineers pick one, and it is often the wrong one. A short written agreement with design on which artefact owns what (the spec owns rules, scope and edge-case behaviour; the design owns layout and visual states) and how changes in one reach the other ends that confusion.

                ## Milestones
                1. A one-page agreement on which document owns which decisions.
                2. A rule for linking specific design frames from the spec, not just the file.
                3. A process for flagging a design change that alters a requirement.
                4. The agreement tried on one feature and adjusted.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written agreement with design states what the spec and the design each own and how changes cross between them, tested on one feature."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the last three conflicts between a spec and its designs"
                - "Agree with the design lead what the spec owns and what the design owns"
                - "Link specific design frames from each requirement they illustrate"
                - "Set the rule for flagging a design change that alters a requirement"
            - name: Rewriting a spec that engineering pushed back on
              description: |-
                ## Purpose
                A spec that engineers call unbuildable or unclear is useful feedback, if you find out exactly why. Collecting their objections, sorting them into missing information, contradictory requirements and scope that does not fit the time, then rewriting against that list, usually turns a stalled spec into an approved one within a week.

                ## Milestones
                1. Every objection collected in one list, in the engineers' own words.
                2. Objections sorted into missing information, contradictions and scope versus time.
                3. A revised spec answering each objection, with changes logged.
                4. Approval from the engineers who raised the objections.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A revised spec answers every listed engineering objection and is approved by the engineers who raised them."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Gather every engineering objection to the spec into one list"
                - "Sort the objections into missing detail, contradictions and scope"
                - "Rewrite the spec section by section against the sorted list"
                - "Walk the objecting engineers through the changes and ask for approval"
            - name: Review turnaround and comment conventions
              description: |-
                ## Purpose
                Review drags when comments mix blocking concerns with typos, and when nobody knows how long reviewers have. Agreeing a two-working-day turnaround and a simple prefix system for comments (blocking, question, suggestion, nit) lets authors fix what matters first and know when a spec is clear to move on.

                ## Milestones
                1. A turnaround target agreed with the regular reviewers.
                2. Four comment prefixes defined and added to the template's instructions.
                3. Every blocking comment resolved before approval.
                4. A monthly check of review times against the target.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Comment prefixes are in use and a monthly check shows at least eight in ten reviews finished within two working days."
                cadence: rolling
              tasks:
                - "Propose a two-working-day review turnaround to the regular reviewers"
                - "Define blocking, question, suggestion and nit comment prefixes"
                - "Check last month's review times against the turnaround target @recurring(monthly:20)"
            - name: Assumptions and risks section in every spec
              description: |-
                ## Purpose
                Every feature rests on beliefs nobody has tested: that customers will find the setting, that the partner system returns data in time, that support can handle the questions. Listing the riskiest assumptions and delivery risks in the spec, each with how it will be checked or reduced, lets reviewers challenge them before the build rather than after launch.

                ## Milestones
                1. An assumptions and risks section added to the PRD template.
                2. The current spec's five riskiest assumptions listed with how each will be tested.
                3. Delivery risks rated for likelihood and impact, each with an owner.
                4. The highest risk discussed at the next spec review.

                ## Notes
                Start from the **Risk register** template for specs with many dependencies.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The current spec lists its five riskiest assumptions with tests and its delivery risks with owners, and both were discussed at a spec review."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Add an assumptions and risks section to the PRD template"
                - "List the five riskiest assumptions in the current spec"
                - "Write how each assumption will be tested before or after launch"
                - "Give each delivery risk a likelihood, impact and owner"
            - name: First full PRD for a new feature
              description: |-
                ## Purpose
                Writing one complete spec from blank page to approval, using every section of the template, is the clearest way to see how the pieces fit and where your own gaps are. Pick a feature of real but contained size, two to six weeks of build, and take it all the way through review and kickoff.

                ## Milestones
                1. A feature of two to six weeks of build chosen with your manager.
                2. A first draft with every template section filled or marked not applicable.
                3. Two review rounds completed and every comment resolved.
                4. Approval recorded and the kickoff walkthrough held.

                ## Notes
                Start from the **Product spec** template.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "One complete PRD for a two-to-six-week feature is approved and has had its kickoff walkthrough within 45 days."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose a feature of two to six weeks of build with your manager"
                - "Fill every template section or mark it not applicable"
                - "Book two review rounds a week apart"
                - "Record approval and schedule the kickoff walkthrough"
            - name: Sign-off meeting for a major release spec
              description: |-
                ## Purpose
                Large specs that span several teams need a moment where the accountable people say yes in the same room, or the approval keeps reopening. Preparing a sign-off meeting with a pre-read, a decision list and named approvers turns a document into a commitment the whole group has made.

                ## Milestones
                1. Approvers named and the meeting booked at least a week ahead.
                2. The spec and a one-page decision summary sent two working days before.
                3. Each decision on the summary accepted, changed or deferred with an owner.
                4. Approval and any conditions recorded at the top of the spec.

                ## Notes
                Start from the **Meeting notes** template.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A sign-off meeting is held with every named approver, and approval with any conditions is recorded at the top of the spec within 60 days."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Name the approvers for the release spec and book the meeting"
                - "Write a one-page summary of the decisions needing sign-off"
                - "Send the spec and summary two working days before the meeting"
                - "Record approval and conditions at the top of the spec"
            - name: Kickoff for a spec spanning several teams
              description: |-
                ## Purpose
                When three or more teams build parts of one spec, the gaps sit between them: who owns the shared screen, which team handles the error, whose interface version wins. A kickoff that walks the spec story by story, assigning each to a team and naming every hand-off, stops the integration week from becoming the discovery week.

                ## Milestones
                1. Every story in the spec assigned to one owning team.
                2. Hand-offs between teams listed with what passes across each one.
                3. Shared open questions given single owners across teams.
                4. A joint integration check date agreed before build starts.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every story in the multi-team spec has one owning team and every hand-off is listed, with a joint integration date agreed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Assign each story in the spec to one owning team"
                - "List every hand-off between teams and what passes across it"
                - "Give each shared open question a single owner"
                - "Agree a joint integration check date before build begins"
            - name: Spec writing workshop for the team
              description: |-
                ## Purpose
                Teams set their spec quality by their weakest habits, and a two-hour workshop with real examples moves it faster than one-to-one feedback. Running a session where people rewrite a weak problem statement, find edge cases in a sample spec and score each other's stories gives everyone the same standard.

                ## Milestones
                1. A two-hour agenda built around three exercises using real, anonymised specs.
                2. The session held with everyone who writes or reviews specs.
                3. Each attendee's improved problem statement collected.
                4. Three agreed changes to the team's practice written down.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "A two-hour spec workshop is held with all spec writers and reviewers, ending with three written changes to team practice."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pick three real specs and remove names and customer details"
                - "Build a two-hour agenda around three rewriting exercises"
                - "Run the workshop with everyone who writes or reviews specs"
                - "Write up the three practice changes the group agreed"
            - name: Pre-mortem on a high-stakes spec
              description: |-
                ## Purpose
                Imagining the feature has already failed six months after launch, and asking why, surfaces risks that a normal review politely skips. A 60-minute pre-mortem before approval on any spec touching money, personal data or a major customer gives quieter reviewers permission to raise the uncomfortable reasons.

                ## Milestones
                1. A spec chosen that touches money, personal data or a major account.
                2. A 60-minute session held with engineering, design, support and one outsider.
                3. Failure reasons listed, grouped and ranked by likelihood.
                4. The top five turned into requirements, tests or owned risks in the spec.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A pre-mortem is held before approval and its top five failure reasons appear in the spec as requirements, tests or owned risks."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose the riskiest spec due for approval in the next month"
                - "Invite engineering, design, support and one person from outside the team"
                - "Ask everyone to write silently for ten minutes on why the feature failed"
                - "Turn the top five reasons into requirements, tests or owned risks"
            - name: First 30 days writing specs as a new product manager
              description: |-
                ## Purpose
                New product managers are usually handed a spec to write before they know the codebase, the customers or the team's unwritten rules. Spending the first month reading recent specs, sitting in on reviews and writing one small spec with a mentor's review builds credibility before a big document carries your name.

                ## Milestones
                1. Ten recent specs read and the team's conventions noted.
                2. Three spec reviews observed and one engineer interviewed on what helps them.
                3. One small spec written and reviewed by an experienced colleague.
                4. A personal list of five things to do differently in your next spec.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Within 30 days you have read ten specs, observed three reviews and had one small spec of your own reviewed and approved."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask your manager for the ten specs they consider most useful"
                - "Sit in on three spec reviews and note what reviewers ask about"
                - "Ask one engineer what makes a spec easy for them to build from"
                - "Write a small spec and ask an experienced colleague to review it"
            - name: Writing specs after moving from engineering into product
              description: |-
                ## Purpose
                Former engineers write specs that are precise about implementation and thin about the customer, and their old colleagues can feel second-guessed. Practising problem-first writing, leaving the how to the team, and noticing when you are specifying a database table instead of a behaviour makes the move easier on both sides.

                ## Milestones
                1. Your last spec reviewed for implementation detail that belongs to engineering.
                2. Each implementation detail rewritten as the behaviour or constraint behind it.
                3. The problem and user sections expanded with customer evidence.
                4. Feedback from an engineer on whether the spec leaves them room to design.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "One spec rewritten so it states behaviours and constraints instead of implementation, with an engineer confirming it leaves room for design."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Highlight every implementation detail in your most recent spec"
                - "Rewrite each one as the behaviour or constraint it was protecting"
                - "Add customer evidence to the problem and user sections"
                - "Ask an engineer whether the spec leaves them room to design"
            - name: Specs written by designers or analysts without a PM
              description: |-
                ## Purpose
                Plenty of small teams and internal groups have no product manager, so a designer, analyst or operations lead ends up writing the requirements. A stripped-back template with the five sections that matter most, plus a reviewer from engineering, lets a knowledge worker produce a usable spec without learning the whole craft first.

                ## Milestones
                1. A five-section short template: problem, goals and non-goals, stories, edge cases and measures.
                2. One spec written in it for a real piece of work.
                3. An engineer's review recorded with the questions it raised.
                4. A note of which sections took longest, kept for the next spec.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A real spec written in the five-section short template is reviewed by an engineer and accepted for build."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Copy the five essential sections into a short template"
                - "Write one spec in the short template for work already planned"
                - "Ask an engineer to review it and list the questions they still have"
                - "Note which sections took longest so the next spec goes faster"
            - name: Asynchronous spec review across time zones
              description: |-
                ## Purpose
                With reviewers spread across eight or more hours of time difference, a spec can lose a day each time a question waits for someone to wake up. Running review asynchronously, with a recorded walkthrough, a clear comment deadline and a weekly digest of open threads, keeps distributed teams moving without anyone joining calls at midnight.

                ## Milestones
                1. A five-minute recorded walkthrough attached to each spec entering review.
                2. A comment deadline stated in every reviewer's local time.
                3. A weekly digest of unresolved threads sent to all reviewers.
                4. Average time from review start to approval measured and reduced.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For two months, every spec in review has a recorded walkthrough and a stated deadline, and a weekly digest of open threads goes out."
                cadence: rolling
              tasks:
                - "Record a five-minute walkthrough for the next spec entering review"
                - "State the comment deadline in each reviewer's local time"
                - "Send a digest of unresolved spec threads to all reviewers @recurring(weekly:wed)"
                - "Measure how long specs take from review start to approval"
            - name: Inheriting another product manager's specs
              description: |-
                ## Purpose
                Taking over an area mid-flight usually means a folder of specs in every state, written by someone with context you lack. Triaging them into live, paused and abandoned, finding out what the previous owner promised to whom, and reconfirming open decisions with stakeholders stops you defending commitments you never made.

                ## Milestones
                1. Every inherited spec listed with its status and last edit date.
                2. Each spec labelled live, paused or abandoned, agreed with your manager.
                3. Promises and open decisions in live specs confirmed with the people involved.
                4. A handover conversation held with the previous owner if they are reachable.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Every inherited spec is labelled live, paused or abandoned, and open decisions in live specs are reconfirmed with stakeholders."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every inherited spec with its status and last edit date"
                - "Ask the agent to summarise open decisions and promises in each live spec"
                - "Agree with your manager which specs are live, paused or abandoned"
                - "Book a handover call with the previous owner if they are reachable"
            - name: Requirements document for a client or agency build
              description: |-
                ## Purpose
                Client and agency builds raise the stakes of a spec: once the builders work for a different company, the document becomes part of the contract, and gaps turn into change requests and extra invoices. Writing client-facing requirements with numbered items, explicit exclusions, acceptance tests and a change process protects both sides and makes sign-off meaningful.

                ## Milestones
                1. Requirements numbered so each can be referenced in contracts and change requests.
                2. An exclusions list that both sides have read.
                3. Acceptance tests written for each requirement and agreed before work starts.
                4. A change request process naming who approves cost and timeline changes.

                ## Notes
                The spec records what was agreed. The contract terms themselves are for your legal or commercial lead to settle.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A numbered requirements document with exclusions, acceptance tests and a change process is signed off by both client and builder."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Number every requirement so it can be referenced in change requests"
                - "Write an exclusions list and walk the other side through it"
                - "Agree acceptance tests for each requirement before work starts"
                - "Set out who approves cost and timeline changes"
            - name: Spec for a migration or replatforming
              description: |-
                ## Purpose
                Migrations are the specs most likely to be under-written, because 'it should work the same as before' feels like enough. Specifying data parity checks, which old behaviours are deliberately dropped, cutover and rollback steps, and how customers will be told turns a vague promise into something that can be tested and signed off.

                ## Milestones
                1. An inventory of current behaviours, each marked keep, change or drop.
                2. Data parity checks defined, with acceptable differences stated.
                3. Cutover, rollback and customer communication steps written in order.
                4. Dropped behaviours confirmed with support and the accounts most affected.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The migration spec lists every current behaviour as keep, change or drop, with parity checks, rollback steps and confirmation from support."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "List every current behaviour the migrated system must account for"
                - "Mark each behaviour keep, change or drop with a reason"
                - "Define the data parity checks and the differences you will accept"
                - "Confirm dropped behaviours with support and the most affected accounts"
            - name: Roles and permissions matrix in a spec
              description: |-
                ## Purpose
                Products with several user roles hide most of their complexity in who can see, edit, approve or delete what. A permissions matrix in the spec, one row per action and one column per role, with the behaviour when access is denied, prevents the security bugs and support tickets that come from permissions decided ticket by ticket.

                ## Milestones
                1. Every action in the feature listed as a row.
                2. Every role listed as a column, including guests and removed users.
                3. Each cell filled with allowed, denied or conditional, with the condition stated.
                4. The denied-access message and behaviour specified for each blocked action.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The spec contains a complete roles and permissions matrix with no empty cells and a stated behaviour for every denied action."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every action a user can take in the feature"
                - "Add a column for each role, including guests and removed users"
                - "Fill every cell with allowed, denied or a stated condition"
                - "Write what the user sees when each action is denied"
            - name: Searchable spec library as a decision record
              description: |-
                ## Purpose
                Two years on, the most valuable part of a spec is often why a choice was made, and that is exactly what gets lost. Keeping a decision log in each spec and a library index by area, feature and decision lets new team members answer 'why does it work like this' without tracking down someone who has left.

                ## Milestones
                1. A decision log section in the template with date, decision, options considered and reason.
                2. An index of shipped specs by product area and feature.
                3. Key decisions from the last year's specs added to the log retrospectively.
                4. A monthly update adding new decisions to the index.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A library index covers all shipped specs from the last year, and each has a decision log with options and reasons."
                cadence: rolling
              tasks:
                - "Add a decision log section with options considered to the template"
                - "Build an index of shipped specs by product area and feature"
                - "Backfill key decisions from last year's specs"
                - "Add this month's spec decisions to the library index @recurring(monthly:25)"
            - name: AI-assisted spec drafting with human review
              description: |-
                ## Purpose
                Language models can turn interview notes into draft user stories, list edge cases and check a spec against the template, but they also invent requirements and bury them in confident prose. Setting rules for which steps an assistant may draft, what a person must verify and what must never be pasted in, such as customer data or confidential plans, gets the time savings without the errors.

                ## Milestones
                1. Three drafting steps chosen where an assistant helps, such as edge-case lists.
                2. A verification rule for each: who checks the output and against what.
                3. Your organisation's policy on what data may go into AI tools confirmed.
                4. One spec drafted with assistance and reviewed, with time saved and errors found noted.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Written rules cover three assisted drafting steps and data limits, tested on one spec with time saved and errors found recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Check your organisation's policy on what may be shared with AI tools"
                - "Choose three spec steps where an assistant could draft a first pass"
                - "Ask the agent to draft an edge-case list for one feature and verify it"
                - "Record the time saved and every error found in the assisted draft"
            - name: Coaching others through spec reviews
              description: |-
                ## Purpose
                Experienced spec writers raise the whole team's standard most by how they review, not by what they write. Pairing with one or two less experienced writers each month, reviewing a draft together and explaining the reasoning behind each comment rather than just fixing it, passes on judgement that no template can hold.

                ## Milestones
                1. One or two writers agreed as coaching partners.
                2. A monthly paired review of each partner's draft, with reasoning explained aloud.
                3. Each partner's scorecard results tracked over six months.
                4. One partner running a review session alone by the end.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Six monthly paired reviews completed with each coaching partner, and their scorecard average has risen over the period."
                cadence: rolling
              tasks:
                - "Ask one or two less experienced writers if they would like coaching"
                - "Review a draft side by side and explain each comment @recurring(monthly:16)"
                - "Track each partner's scorecard results across six months"
                - "Hand the next spec review session to a partner to run alone"
---

# Product Requirements Documents

Product Requirements Documents is about writing specs that design and engineering can start from without a week of follow-up questions, for product teams and for the knowledge workers who end up writing requirements without the job title. It runs from foundations (a shared template, the problem statement, goals and non-goals, success measures) through the review machinery, then writing skills such as user stories, acceptance criteria and edge cases, decisions about format and tooling, dated milestones like a first full PRD and a sign-off meeting, situations such as inheriting specs or writing for a client, and finally specialist work on migrations, permissions and decision records.

The rhythm is a weekly spec review, a weekly sweep of open questions and waiting kickoffs, monthly checks on change logs, traceability, quality scores and what actually shipped, and a quarterly revision of the template. The Product spec, Meeting notes, Risk register, Reading queue and Purchase decision templates pair with it. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
