---
id: product-management.problem-framing-opportunity-mapping
name: Problem Framing & Opportunity Mapping
description: "An outcome at the root, an opportunity solution tree built from real evidence, sharp problem statements and a live assumption log, so the team picks the customer problems worth solving on purpose."
category: business
version: 1.0.0
tags: [product-management, problem-framing-opportunity-mapping, team, founder, opportunity-solution-tree, problem-statements, assumption-mapping, continuous-discovery]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - reading-queue
    - feedback-themes
    - purchase-decision
    - risk-register
  pillars:
    - name: Product Management
      emoji: "🧩"
      description: "Deciding what to build and why: discovery and research, roadmaps and prioritisation, specs and launches, pricing and packaging, product analytics, and the feedback loops that keep a product honest."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Problem Framing & Opportunity Mapping
          description: "Turning research into a clear map of customer opportunities and candidate solutions, so the team picks problems worth solving deliberately."
          projects:
            - name: Shared problem framing vocabulary
              description: |-
                ## Purpose
                Teams argue past each other when one person's opportunity is another person's feature idea. A one-page glossary defining outcome, opportunity, solution, assumption and experiment, with an example of each from your own product, gives every discussion of the map the same footing and makes solution ideas dressed up as problems easy to spot.

                ## Milestones
                1. A one-page glossary defining outcome, opportunity, solution, assumption and experiment.
                2. One real example from your own product written under each term.
                3. The glossary agreed by the product, design and engineering leads.
                4. The glossary linked from the top of the opportunity map.

                ## Notes
                Keep the definitions short enough to read aloud at the start of a workshop. Five terms are enough; a twenty-term glossary goes unread.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A glossary of five framing terms, each with a product-specific example, is agreed by the three leads and linked from the map."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft one-line definitions of outcome, opportunity, solution, assumption and experiment"
                - "Write one example of each term taken from your current product"
                - "Walk the product, design and engineering leads through the draft"
                - "Link the agreed glossary from the top of the opportunity map"
                - "Reread the glossary and replace examples that no longer fit @recurring(yearly)"
            - name: Desired outcome at the root of the map
              description: |-
                ## Purpose
                An opportunity map without a clear outcome at the top grows in every direction at once. Picking one product outcome the team can influence, such as the share of new accounts that complete a second project in their first fortnight, decides which customer problems belong on the map and which can wait. Do this before mapping anything else.

                ## Milestones
                1. A shortlist of two or three candidate product outcomes, each a measurable change in customer behaviour.
                2. One outcome chosen, with its current baseline and the direction it should move.
                3. The business result it supports written beside it in one sentence.
                4. The chosen outcome placed at the root of the map and confirmed by whoever sets the team's goals.

                ## Notes
                A product outcome describes what customers do, not what the team ships. 'Launch the dashboard' is an output; 'more managers check weekly progress without asking anyone' is an outcome. If your team already runs quarterly goals, take the outcome from them rather than inventing a second set.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One measurable product outcome with a recorded baseline sits at the root of the map and is confirmed in writing by the person who sets team goals."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the product outcomes your team could plausibly influence this quarter"
                - "Find the current baseline number for each candidate outcome"
                - "Choose one outcome and write the business result it supports"
                - "Confirm the chosen outcome with whoever sets the team's goals"
            - name: Research evidence inventory
              description: |-
                ## Purpose
                Most teams already hold more evidence than they think: interview notes, support tickets, sales call recordings, survey answers and usage data scattered across half a dozen tools. Listing every source, its dates and how to reach it means the first map is built from what customers have already said, not from the loudest opinion in the room.

                ## Milestones
                1. Every research source of the last twelve months listed with owner, date range and location.
                2. Each source marked as direct customer evidence or a second-hand report.
                3. Gaps noted where a key segment or workflow has no evidence at all.
                4. The inventory linked from the opportunity map so anyone can trace a claim to its source.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An inventory of at least ten research sources, each with owner, date range and location, is linked from the map with known gaps listed."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every place customer evidence lives today, from interview notes to ticket exports"
                - "Record the owner, date range and access link for each source"
                - "Mark which segments and workflows have no evidence yet"
                - "Add any new research source to the inventory @recurring(quarterly)"
            - name: Solution requests rewritten as problems
              description: |-
                ## Purpose
                Backlogs fill with requests phrased as solutions: add a CSV export, build a mobile app, copy the competitor's calendar view. Rewriting the twenty most requested items as the customer problem underneath each one often shows that five requests share one need and two have no customer behind them at all.

                ## Milestones
                1. The twenty most requested items pulled from the backlog and request channels.
                2. Each request rewritten as the customer problem it implies, in the customer's words where possible.
                3. Requests that share an underlying problem grouped together.
                4. Requests with no traceable customer flagged for follow-up or removal.

                ## Notes
                Ask what the item would let the customer do that they cannot do today. If nobody can answer, the request is a guess, not evidence.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Twenty top requests each have a written underlying problem, grouped by shared need, with unsupported requests flagged."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export the twenty most requested items from the backlog and request channels"
                - "Rewrite each request as the problem the customer is trying to solve"
                - "Group requests that point at the same underlying problem"
                - "Ask the original requesters of the three least clear items what they hoped to do"
            - name: First opportunity solution tree
              description: |-
                ## Purpose
                An opportunity solution tree puts the outcome at the top, customer opportunities beneath it, and candidate solutions and assumption tests under each opportunity. Building the first version from existing evidence, even roughly, gives the team one picture of what it knows and shows where solutions have been attached to problems no customer has described.

                ## Milestones
                1. The chosen outcome at the root with eight to fifteen opportunities beneath it.
                2. Each opportunity linked to at least one item from the evidence inventory.
                3. Every current roadmap item placed under the opportunity it serves, or marked as an orphan.
                4. The tree shared with the whole team and open to comments for a week.

                ## Notes
                Orphan solutions, items with no opportunity above them, are the most useful finding of a first tree. Do not delete them yet; ask what problem they were meant to solve.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A first tree with the outcome at the root, at least eight evidenced opportunities and every roadmap item placed or marked as an orphan."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Put the chosen outcome at the top of a blank tree"
                - "Add opportunities drawn from the evidence inventory, one card each"
                - "Place every current roadmap item under the opportunity it serves"
                - "Mark roadmap items with no opportunity above them as orphans"
                - "Share the tree with the team and collect comments for a week"
            - name: Problem statement template and first five statements
              description: |-
                ## Purpose
                A good problem statement names who struggles, in what situation, what they do instead today and what it costs them, without mentioning a solution. Agreeing one template and writing five statements for the strongest opportunities gives design and engineering something concrete to test ideas against.

                ## Milestones
                1. A problem statement template covering who, situation, current workaround and cost.
                2. Five statements written for the best-evidenced opportunities.
                3. Each statement checked to confirm it names no feature or technology.
                4. Statements read back to customer-facing colleagues, with recognition noted.

                ## Notes
                If a statement says someone needs a noun, such as users need a dashboard, it is probably a solution in disguise.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five problem statements in the agreed template, none naming a solution, each recognised by at least one customer-facing colleague."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a problem statement template with who, situation, workaround and cost"
                - "Draft statements for the five best-evidenced opportunities"
                - "Strike out any feature or technology named in a statement"
                - "Read each statement to a support or sales colleague and note whether they recognise it"
            - name: Opportunity card wording rules
              description: |-
                ## Purpose
                Opportunities written as better search or improve onboarding cannot be compared or tested. A handful of wording rules, such as each card states a need, pain or desire in the customer's voice, one idea per card and no solution words, keeps the map readable as it grows past fifty cards.

                ## Milestones
                1. Four or five wording rules written, each with a good and a bad example.
                2. Every existing card rewritten to meet the rules.
                3. Cards holding two ideas split into two.
                4. The rules pinned beside the map for anyone who adds a card.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every card on the map follows the written wording rules, with no card holding more than one need or naming a solution."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write four wording rules with one good and one bad example each"
                - "Rewrite the existing cards that break the rules"
                - "Split any card that carries two separate needs"
                - "Pin the rules next to the map where new cards are added"
            - name: Evidence strength scale for opportunities
              description: |-
                ## Purpose
                One customer mentioning a pain in passing and twelve customers showing you the spreadsheet they built to work around it are not the same signal. A simple scale of three or four levels, marked on every opportunity, stops weakly evidenced problems from looking as solid as well evidenced ones when the team compares them.

                ## Milestones
                1. A scale of three or four evidence levels, each defined with an example.
                2. Every opportunity on the map marked with its level.
                3. Opportunities at the weakest level listed as candidates for further research.
                4. The scale explained in one paragraph at the top of the map.

                ## Notes
                A workable default: heard once, heard repeatedly, seen in behaviour, confirmed in data across a segment.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every opportunity on the map carries an evidence level from a written scale, and the weakest ones are listed for follow-up research."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Define three or four evidence levels with a short example of each"
                - "Mark each opportunity with its evidence level"
                - "List the opportunities sitting at the weakest level"
                - "Explain the scale in a short paragraph at the top of the map"
            - name: Current workflow experience map
              description: |-
                ## Purpose
                Customers do not experience your product as a set of features; they experience a sequence of steps, many of them outside your product. Mapping the end to end workflow for your main segment, from the trigger that starts it to the moment the work is done, shows where the painful steps sit and gives the tree a structure that follows the customer rather than the org chart.

                ## Milestones
                1. The main workflow drawn as eight to fifteen steps from trigger to finished result.
                2. Steps that happen outside your product included alongside the ones inside it.
                3. Pain points from research attached to the steps where they happen.
                4. Top-level opportunities on the tree grouped by workflow stage.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A workflow map of at least eight steps with evidenced pain points attached, and the tree's top-level opportunities grouped by those steps."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Sketch the main workflow from the trigger that starts it to the finished result"
                - "Add the steps customers take in other tools or on paper"
                - "Attach pain points from the evidence inventory to each step"
                - "Regroup the tree's top-level opportunities by workflow stage"
                - "Walk the workflow map again and update steps that have changed @recurring(yearly)"
            - name: Assumption categories checklist
              description: |-
                ## Purpose
                Every candidate solution rests on assumptions: that customers want it, that they can use it, that it can be built, that it pays for itself and that it causes no harm. A short checklist of these categories, used each time a solution is added to the map, stops the team from testing only the comfortable assumptions.

                ## Milestones
                1. A checklist covering desirability, usability, feasibility, viability and ethical assumptions.
                2. Two example assumptions written for each category from a current solution idea.
                3. The checklist attached to the solution cards on the map.
                4. One solution already on the map run through the checklist end to end.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A five-category assumption checklist is attached to the map and has been applied in full to at least one current solution."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the five assumption categories with one prompting question each"
                - "Draft two example assumptions per category for a current idea"
                - "Attach the checklist to the solution cards on the map"
                - "Run one existing solution through the whole checklist"
            - name: Weekly opportunity tree update
              description: |-
                ## Purpose
                A tree that is touched once a quarter becomes a poster. Thirty minutes each week, after the week's interviews and tests, to add new opportunities, promote cards with more evidence and prune those with less, keeps the map a working document the team actually checks before deciding anything.

                ## Milestones
                1. A fixed thirty-minute weekly slot in the calendar for the tree update.
                2. Each week's new evidence reflected on the tree within seven days.
                3. A one-line changelog entry added after each update.
                4. Twelve consecutive weekly updates completed.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly updates are logged, each recording what was added, moved or pruned on the tree."
                cadence: rolling
              tasks:
                - "Book a recurring thirty-minute slot for the tree update"
                - "Add, move or prune cards based on this week's evidence @recurring(weekly:fri)"
                - "Write one changelog line describing what changed on the tree"
                - "Flag any card that has not moved in six weeks for discussion"
            - name: Interview snapshots linked to opportunities
              description: |-
                ## Purpose
                Interview notes that sit in a folder rarely change the map. A one-page snapshot per conversation, with a memorable quote, the main story and the opportunities it touches, linked from the matching cards, means every opportunity can be traced to real customers by date.

                ## Milestones
                1. A one-page snapshot format agreed for every customer conversation.
                2. Each snapshot linked from the opportunity cards it supports.
                3. New opportunities from a snapshot added to the tree the same week.
                4. Every opportunity on the tree traceable to at least one dated snapshot.

                ## Notes
                Running and recruiting for the interviews belongs to discovery interview practice; this project is about what happens to the notes afterwards.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every interview from the last three months has a snapshot linked from at least one opportunity card."
                cadence: rolling
              tasks:
                - "Agree a one-page snapshot format with quote, story and opportunities"
                - "Turn this week's interview notes into snapshots and link them to cards @recurring(weekly:thu)"
                - "Ask the agent to suggest which existing opportunities each new snapshot supports"
                - "Check that every opportunity card links to at least one snapshot"
            - name: Monthly opportunity map review
              description: |-
                ## Purpose
                Stakeholders who only see the roadmap judge the team by what ships, not by what it has learned. A monthly half-hour walk through the tree with sales, support and leadership, showing what moved and why, builds trust in the opportunities chosen and draws out evidence those teams hold that never reached product.

                ## Milestones
                1. A monthly review slot agreed with sales, support and a leadership representative.
                2. A standard agenda: outcome trend, cards that moved, current target opportunity, open questions.
                3. Evidence offered in each review added to the map within a week.
                4. Six monthly reviews held with notes kept.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly map reviews are held with written notes, and evidence raised in each is on the map within a week."
                cadence: rolling
              tasks:
                - "Invite sales, support and a leadership representative to a monthly slot"
                - "Write a four-item agenda covering outcome, movement, target and questions"
                - "Run the half-hour map walkthrough and take notes @recurring(monthly:12)"
                - "Add any evidence raised in the review to the map"
            - name: Opportunity map pruning pass
              description: |-
                ## Purpose
                Maps grow cards faster than teams can look at them, and duplicates and stale cards hide the real picture. A monthly pruning pass to merge duplicates, archive opportunities with nothing new in a year and move misplaced cards keeps the map small enough to reason about.

                ## Milestones
                1. A written rule for when a card is merged, archived or kept.
                2. Duplicate cards merged with their evidence combined.
                3. Cards with no new evidence in twelve months moved to an archive branch.
                4. Active cards held under an agreed ceiling, such as sixty.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A pruning pass runs six months in a row, with active cards kept under the agreed ceiling."
                cadence: rolling
              tasks:
                - "Write the rule for merging, archiving or keeping a card"
                - "Merge duplicates and archive cards with no evidence in twelve months @recurring(monthly:20)"
                - "Set a ceiling for the number of active cards on the map"
                - "Move misplaced cards under the right parent opportunity"
            - name: Assumption log upkeep
              description: |-
                ## Purpose
                Assumptions that are written down get tested; ones held in people's heads get built on. A log with each assumption, the solution it belongs to, how risky it is, the evidence so far and the test planned gives the team a running list of what it still does not know.

                ## Milestones
                1. An assumption log with columns for solution, category, risk, evidence and planned test.
                2. Every solution on the map carrying at least three logged assumptions.
                3. Assumptions updated with the result after each test.
                4. Disproved assumptions kept visible rather than deleted.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every solution on the map has at least three logged assumptions, each with a risk rating and a test result or planned test."
                cadence: rolling
              tasks:
                - "Set up the log with solution, category, risk, evidence and test columns"
                - "Log at least three assumptions for each solution on the map"
                - "Update the log with results from this month's tests @recurring(monthly:8)"
                - "Keep disproved assumptions in a visible section of the log"
            - name: Quarterly target opportunity choice
              description: |-
                ## Purpose
                Working on six opportunities at once usually means none gets enough attention to move the outcome. Choosing one target opportunity each quarter from a shortlist of three, and writing down why the others were set aside, focuses the team and gives stakeholders a clear answer to what it is working on.

                ## Milestones
                1. Three candidate opportunities compared on size, evidence, strategic fit and the team's ability to move them.
                2. One target opportunity chosen and announced to the team and stakeholders.
                3. A short note recorded for each opportunity set aside, with what would bring it back.
                4. Four quarterly choices made and recorded in a year.
              priority: high
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Four quarterly target choices are recorded in a year, each comparing three candidates and giving reasons for those set aside."
                cadence: cyclic
              tasks:
                - "Shortlist three candidate opportunities from the top of the tree"
                - "Compare them on size, evidence, strategic fit and ability to move them"
                - "Choose and announce the target opportunity for the quarter @recurring(quarterly)"
                - "Record why each other candidate was set aside and what would revive it"
            - name: Problem brief gate before build
              description: |-
                ## Purpose
                Engineering time is the most expensive thing a product team spends, and starting it on a problem nobody has written down is how features ship that nobody uses. A rule that no build starts until a one-page problem brief exists, naming the opportunity, its evidence, the outcome and the riskiest assumption already tested, catches weak framing while it is still cheap to fix.

                ## Milestones
                1. A one-page problem brief format agreed with the engineering lead.
                2. The rule written into the team's working agreement.
                3. Every item entering build in a quarter backed by a brief.
                4. Items stopped or reshaped by the gate counted and reviewed.

                ## Notes
                The brief sits upstream of the full specification. It answers why this problem and why now; the specification answers what exactly to build.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every item that entered build last quarter has a linked problem brief, and the items stopped by the gate are counted."
                cadence: rolling
              tasks:
                - "Agree a one-page brief format with the engineering lead"
                - "Write the no brief, no build rule into the team working agreement"
                - "Check that each item planned for the coming month has a brief @recurring(monthly:3)"
                - "Count the items the gate stopped or reshaped this quarter"
            - name: Stakeholder request intake into the map
              description: |-
                ## Purpose
                Sales, leadership and support will keep sending feature requests, and ignoring them damages trust. A short intake form asking who the customer is, what they were trying to do and what happens if nothing changes routes each request onto the right opportunity, so requesters see their input shaping the map rather than vanishing into a backlog.

                ## Milestones
                1. An intake form with fields for customer, situation, attempted task and cost of inaction.
                2. The form shared with sales, support and leadership as the single route for requests.
                3. Each request attached to an existing opportunity or flagged as a new one.
                4. Requesters told each month where their requests landed on the map.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All requests from the last two months arrived through the form and each is attached to an opportunity, with requesters told where it landed."
                cadence: rolling
              tasks:
                - "Build a short intake form asking customer, situation, attempted task and cost"
                - "Share the form with sales, support and leadership as the route for requests"
                - "Attach each new request to an opportunity or flag it as new"
                - "Tell requesters where their requests landed on the map @recurring(monthly:16)"
            - name: Framing decision log
              description: |-
                ## Purpose
                Six months on, nobody remembers why the team chose the billing opportunity over the reporting one, so the same debate is held again. A short log with the date, the choice, the options considered, the evidence used and who agreed makes framing decisions revisitable and stops them being reopened every time a new stakeholder arrives.

                ## Milestones
                1. A decision log with date, decision, options, evidence and approvers.
                2. Every target opportunity and stop decision of the last quarter recorded.
                3. The log linked from the tree beside the decisions it explains.
                4. A monthly check that new decisions have been logged.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every framing decision of the last two quarters appears in the log with the options considered, evidence used and approvers."
                cadence: rolling
              tasks:
                - "Create the log with date, decision, options, evidence and approver columns"
                - "Backfill the framing decisions made in the last quarter"
                - "Link each logged decision from the relevant part of the tree"
                - "Check that this month's framing decisions are in the log @recurring(monthly:28)"
            - name: Learning the opportunity solution tree method
              description: |-
                ## Purpose
                Reading the method properly before teaching it saves weeks of half-understood trees. Working through Teresa Torres's Continuous Discovery Habits or an equivalent course, then building a practice tree for a familiar product such as a library app, gives one person on the team enough fluency to coach the others.

                ## Milestones
                1. The core book or course on opportunity solution trees finished, with notes.
                2. A practice tree built for a familiar everyday product.
                3. Three common mistakes from the reading written down with examples.
                4. A twenty-minute explainer given to the team.

                ## Notes
                Start from the **Reading queue** template.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes on the core method, a practice tree and a twenty-minute team explainer are all complete."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Add the core book or course on opportunity solution trees to your reading queue"
                - "Read and note the chapters on outcomes, opportunities and assumption tests"
                - "Build a practice tree for an everyday product you know well"
                - "Give the team a twenty-minute explainer using the practice tree"
            - name: Five whys root cause practice
              description: |-
                ## Purpose
                Surface complaints such as the report is slow often sit on top of a different problem, such as managers needing numbers before a Monday meeting. Practising the five whys on ten real complaints from research, alone and then in pairs, builds the habit of digging one or two levels below what customers first say.

                ## Milestones
                1. Ten real complaints chosen from recent research.
                2. A five whys chain written for each, stopping where evidence runs out.
                3. Chains compared with a colleague's for the same complaints.
                4. At least two opportunities on the map reworded at a deeper level as a result.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten written five whys chains are compared with a colleague's, and at least two opportunities are reworded on the map."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Pick ten real complaints from the last month's research"
                - "Write a five whys chain for each, stopping where evidence runs out"
                - "Compare your chains with a colleague who worked the same complaints"
                - "Reword the opportunities the chains showed were too shallow"
            - name: How might we question craft
              description: |-
                ## Purpose
                How might we questions turn a problem into an invitation for ideas, but they fail when too broad, such as making users happy, or too narrow, such as adding a button. Writing and sorting fifteen questions against three real problem statements teaches the team where the useful middle sits.

                ## Milestones
                1. Fifteen how might we questions written across three problem statements.
                2. Each question tagged as too broad, too narrow or workable.
                3. A short guide of three good and three poor examples from your own product.
                4. The workable questions used in the next ideation session.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A guide with three good and three poor how might we questions from your own product is used in at least one ideation session."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write five how might we questions for each of three problem statements"
                - "Tag each question as too broad, too narrow or workable"
                - "Collect three good and three poor examples into a short guide"
                - "Use the workable questions to open the next ideation session"
            - name: Problem reframing exercises
              description: |-
                ## Purpose
                The first framing of a problem is rarely the best one. Taking one stubborn problem and deliberately reframing it ten ways, by changing whose problem it is, looking at what happens before and after, questioning the goal and asking where it does not happen, often produces a framing that opens solutions nobody had considered.

                ## Milestones
                1. One stubborn problem chosen from the map.
                2. Ten alternative framings written using at least four different reframing moves.
                3. The two most promising reframes checked against existing evidence.
                4. The opportunity updated on the map with a note of the original framing.

                ## Notes
                Thomas Wedell-Wedellsborg's book on reframing problems is a practical source for the moves.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten written reframes of one problem exist, two are checked against evidence, and the map shows the strongest framing."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Pick the problem on the map the team feels most stuck on"
                - "Write ten alternative framings using at least four different reframing moves"
                - "Check the two most promising reframes against existing evidence"
                - "Update the opportunity on the map and record the original framing"
            - name: Affinity clustering of research into opportunities
              description: |-
                ## Purpose
                Hundreds of research notes become useful only when grouped into needs the team can name. Clustering notes from the bottom up, without starting from existing categories, then naming each cluster as a customer need, is the step that turns raw research into the cards on the opportunity map.

                ## Milestones
                1. Notes from at least eight recent sources broken into single-observation snippets.
                2. Snippets clustered bottom up without preset categories.
                3. Each cluster named as a customer need in the customer's voice.
                4. New or changed opportunities from the clusters added to the tree.

                ## Notes
                Start from the **Feedback themes** template. Cluster in pairs; one person clustering alone tends to reproduce what they already believe.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Snippets from at least eight sources are clustered into named needs, and the resulting opportunities are on the tree."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Break notes from eight recent sources into one-observation snippets"
                - "Cluster the snippets in pairs without starting from existing categories"
                - "Name each cluster as a need in the customer's own words"
                - "Add new or changed opportunities from the clusters to the tree"
            - name: Generating several solutions per opportunity
              description: |-
                ## Purpose
                Teams that consider a single solution for each problem end up testing whether they like it rather than whether it is the best option. Practising timed ideation with product, design and engineering, aiming for at least ten ideas per opportunity and then keeping three that differ in approach, builds comparison into the habit.

                ## Milestones
                1. A fifteen-minute silent ideation format agreed for the team.
                2. At least ten ideas generated for the current target opportunity.
                3. Three ideas chosen that differ in approach, not just in detail.
                4. The three solutions added under the opportunity on the tree.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least ten ideas are generated for the target opportunity and three distinct solutions are placed under it on the tree."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Agree a fifteen-minute silent ideation format with design and engineering"
                - "Generate at least ten ideas for the current target opportunity"
                - "Choose three ideas that solve the problem in different ways"
                - "Add the three solutions under the target opportunity on the tree"
            - name: Assumption mapping on an importance and evidence grid
              description: |-
                ## Purpose
                Not every assumption deserves a test. Plotting assumptions on a grid of importance against evidence, then testing only the important ones with little evidence, is a quick way for a team to agree where the real risk sits, and practising it on one solution teaches a technique the team can run in forty minutes.

                ## Milestones
                1. Assumptions for one solution written on separate cards.
                2. Cards placed on an importance versus evidence grid by the team.
                3. The two or three riskiest assumptions agreed.
                4. A test idea written for each of the riskiest assumptions.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One forty-minute assumption mapping session is run, with the riskiest assumptions agreed and a test idea written for each."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write every assumption behind one solution on its own card"
                - "Place the cards on an importance versus evidence grid as a team"
                - "Agree the two or three riskiest assumptions in the top corner"
                - "Write a small test idea for each risky assumption"
            - name: Opportunity sizing estimates
              description: |-
                ## Purpose
                Vivid stories from one customer can make a small problem feel large. A rough size estimate for each top opportunity, built from how many customers face it, how often and what it costs them each time, with ranges rather than false precision, keeps sizing honest when the team compares candidates.

                ## Milestones
                1. A sizing formula agreed: customers affected, frequency and cost per occurrence.
                2. Low and high estimates for each of the top eight opportunities.
                3. The data source behind each number noted.
                4. Size ranges shown on the tree beside each opportunity.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The top eight opportunities each show a low and high size estimate on the tree, with sources noted."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Agree a sizing formula of customers affected, frequency and cost each time"
                - "Pull usage or customer counts for each of the top eight opportunities"
                - "Write low and high estimates with the source of each number"
                - "Show the size range beside each opportunity on the tree"
            - name: Spotting opportunities in usage data
              description: |-
                ## Purpose
                Interviews tell you why; usage data tells you where and how many. Learning to read funnel drop-offs, abandoned flows and support contact reasons for signs of an unmet need adds opportunities customers rarely volunteer in conversation, and gives evidence to size the ones they do.

                ## Milestones
                1. Three data views chosen: a key funnel, abandoned flows and contact reasons.
                2. Five places where behaviour hints at an unmet need written as questions.
                3. Each question checked against existing interview evidence.
                4. At least two opportunities added or strengthened from the data.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five data-derived questions are written and checked against interviews, with at least two opportunities added or strengthened on the map."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pull one key funnel, an abandoned-flows view and the top support contact reasons"
                - "Write five questions where behaviour hints at an unmet need"
                - "Check each question against what interviews already show"
                - "Add or strengthen opportunities on the map from what you find"
            - name: Comparing three solutions for the target opportunity
              description: |-
                ## Purpose
                Judging solutions one at a time, each on whether it seems good enough, favours whichever came first. Setting three candidates side by side against the same evidence, and choosing the one whose riskiest assumption survives a cheap test, gives a better decision and a record of why it was made.

                ## Milestones
                1. Three candidate solutions for the target opportunity described in a paragraph each.
                2. The riskiest assumption for each pulled from the assumption log.
                3. A quick test result or existing evidence gathered for each riskiest assumption.
                4. One solution chosen and the decision recorded with its evidence.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision chooses one of three compared solutions and cites the result for each solution's riskiest assumption."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write a one-paragraph description of each of three candidate solutions"
                - "Pull the riskiest assumption for each from the assumption log"
                - "Gather a quick test result or existing evidence for each assumption"
                - "Choose one solution and record the decision with its evidence"
            - name: Breaking a large opportunity into smaller ones
              description: |-
                ## Purpose
                Opportunities like managers cannot see team progress are too big to solve in one go and too vague to test. Breaking them into child opportunities, such as not knowing what changed since last week or not trusting the numbers, until each is small enough to address in a few weeks, is what makes the tree useful for delivery.

                ## Milestones
                1. The broadest top-level opportunity chosen for breakdown.
                2. Four to eight child opportunities written, each a distinct need.
                3. Each child checked as small enough to address within one to two months.
                4. Evidence moved from the parent to the children it supports.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One large opportunity is broken into at least four distinct child opportunities, each sized to two months or less and carrying its own evidence."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose the broadest top-level opportunity on the tree"
                - "Write four to eight child opportunities beneath it"
                - "Check that each child could be addressed within two months"
                - "Move each piece of evidence to the child it supports"
            - name: Stop rule for weakly evidenced opportunities
              description: |-
                ## Purpose
                Pet problems, often a founder's or a senior stakeholder's, can stay on the map for years with no new evidence. A written stop rule, such as archiving any opportunity that two rounds of research fail to confirm, applied openly each quarter, frees attention without anyone having to win an argument.

                ## Milestones
                1. A written stop rule agreed with the product lead and a senior stakeholder.
                2. Every opportunity checked against the rule once.
                3. Archived opportunities recorded with the evidence that was sought.
                4. The rule applied at each quarterly target choice.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written stop rule is agreed and has been applied once to every opportunity, with archived ones recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft a stop rule for opportunities that research fails to confirm"
                - "Agree the rule with the product lead and one senior stakeholder"
                - "Check every opportunity on the map against the rule"
                - "Apply the stop rule before the quarterly target choice @recurring(quarterly)"
            - name: Choosing where the opportunity map lives
              description: |-
                ## Purpose
                The tree has to live somewhere everyone can see and edit it: a digital whiteboard, a document, a purpose-built discovery tool or a wall of cards. Comparing two or three options on evidence linking, ease of editing, sharing with stakeholders and cost avoids a painful migration halfway through the year.

                ## Milestones
                1. Four requirements written: evidence linking, editing, sharing and cost.
                2. Two or three tools trialled with the same small sample tree.
                3. One tool chosen and the reasons recorded.
                4. The existing tree moved into the chosen tool.

                ## Notes
                Start from the **Purchase decision** template. A whiteboard the team already pays for usually beats a new specialist tool in the first year.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A tool is chosen after trialling at least two options against four written requirements, and the tree has been moved into it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the four requirements the mapping tool must meet"
                - "Rebuild a small sample tree in two or three candidate tools"
                - "Choose a tool and record why"
                - "Move the current tree into the chosen tool"
            - name: Reframing a stalled initiative
              description: |-
                ## Purpose
                Some initiatives ship on time and still leave the outcome flat. Taking one back to the map, asking which opportunity it was meant to serve, whether that opportunity was real and whether the solution addressed it, turns a disappointment into a framing lesson and often points to a better next bet.

                ## Milestones
                1. One shipped initiative chosen whose outcome did not move.
                2. The opportunity it served and the evidence at the time reconstructed.
                3. The gap named: wrong problem, weak evidence or a solution that missed.
                4. A revised opportunity or next solution added to the tree.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written review of one stalled initiative names the framing gap and adds a revised opportunity or solution to the tree."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pick a shipped initiative that did not move its outcome"
                - "Reconstruct the opportunity and evidence it was based on"
                - "Decide whether the gap was the problem, the evidence or the solution"
                - "Add the revised opportunity or next solution to the tree"
            - name: Importance and satisfaction survey for top opportunities
              description: |-
                ## Purpose
                Evidence from interviews shows what matters to the people you spoke to; a short survey shows how widely it holds. Asking a few hundred customers to rate how important each top opportunity is and how satisfied they are with today's options highlights the ones that are both important and badly served.

                ## Milestones
                1. Eight to twelve opportunities worded neutrally as survey items.
                2. Importance and satisfaction scales tested with five customers before sending.
                3. Enough responses collected to split results by main segment.
                4. Opportunities ranked by the gap between importance and satisfaction.

                ## Notes
                Survey wording is easy to bias. Keep every item about the need, never about a solution you are already planning.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Survey results from at least two segments rank the top opportunities by the gap between importance and satisfaction."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Word eight to twelve top opportunities neutrally as survey items"
                - "Test the survey wording with five customers before sending"
                - "Send the survey and collect enough responses to split by segment"
                - "Rank opportunities by the gap between importance and satisfaction"
            - name: Customer needs separated from business goals
              description: |-
                ## Purpose
                Business goals such as reducing churn or growing order value often get written onto the map as if they were customer needs. Separating the two layers, with business goals shaping the outcome and only customer needs as opportunities, stops the tree filling with cards no customer would recognise.

                ## Milestones
                1. Every card on the map marked as a customer need or a business goal.
                2. Business goals moved to the outcome layer or a side note.
                3. Customer needs reworded where they had drifted into company language.
                4. A one-line separation rule added to the card wording rules.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "No card in the opportunity layer states a business goal, and the rule separating the two is written into the wording rules."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Mark each card on the map as a customer need or a business goal"
                - "Move business goals to the outcome layer or a side note"
                - "Reword customer needs that have drifted into company language"
                - "Add the separation rule to the card wording rules"
            - name: Half-day opportunity mapping workshop
              description: |-
                ## Purpose
                Bringing product, design, engineering, sales and support into one room for a morning builds a shared map faster than a month of comments. A well prepared half-day workshop, with evidence printed, the outcome agreed in advance and a clear facilitator, ends with a tree everyone helped build and a shortlist of target opportunities.

                ## Milestones
                1. Date, room or call, and ten to twelve participants confirmed.
                2. Evidence snippets and the outcome shared with participants a week before.
                3. Workshop run to an agenda of outcome, clustering, tree building and shortlist.
                4. A tidied tree and shortlist sent to participants within two days.

                ## Notes
                Keep the group to twelve or fewer. With more, split into two tables mapping different workflow stages.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A half-day workshop is held with at least four functions present, and a tidied tree and shortlist go out within two days."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Pick a date and invite ten to twelve people from five functions"
                - "Share the evidence snippets and the outcome a week ahead"
                - "Run the workshop to the outcome, clustering, tree and shortlist agenda"
                - "Send the tidied tree and shortlist within two days"
            - name: Quarterly leadership opportunity readout
              description: |-
                ## Purpose
                Leaders who see only a roadmap ask why a feature is missing; leaders who see the map ask which problem matters most. A thirty-minute quarterly readout of the outcome trend, the target opportunity, what was learned and what was set aside shifts leadership conversations from features to problems and earns room for discovery.

                ## Milestones
                1. A readout slot fixed with leadership each quarter.
                2. A one-page format covering outcome, target, learning and set-aside opportunities.
                3. Leadership questions and challenges recorded.
                4. Four readouts delivered in a year, with follow-ups answered.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Four quarterly readouts are delivered in twelve months, each with recorded leadership questions and answered follow-ups."
                cadence: cyclic
              tasks:
                - "Fix a recurring readout slot with the leadership team"
                - "Ask the agent to draft a one-page readout from the tree changelog and outcome trend"
                - "Deliver the thirty-minute readout and record every question @recurring(quarterly)"
                - "Send written answers to open questions within a week"
            - name: Problem pack for a design sprint or hackathon
              description: |-
                ## Purpose
                Sprints and hackathons waste their first day when teams arrive with a vague theme. A short problem pack, with a problem statement, three evidence snippets, the outcome it serves and what is out of scope, lets a group of five start generating solutions in the first hour and keeps the results connected to the map afterwards.

                ## Milestones
                1. One opportunity chosen for the sprint or hackathon.
                2. A two-page pack with problem statement, evidence, outcome and scope limits.
                3. The pack sent to participants three days before.
                4. Event outputs added to the tree under the opportunity afterwards.
              priority: low
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A two-page problem pack was sent three days before the event, and its outputs sit under the opportunity on the tree."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose the opportunity the sprint or hackathon will tackle"
                - "Write a two-page pack with statement, evidence, outcome and scope limits"
                - "Send the pack to participants three days before the event"
                - "Add the event's solutions and findings to the tree afterwards"
            - name: Annual opportunity landscape refresh
              description: |-
                ## Purpose
                Markets, customers and the product change enough in a year that the top of the tree can quietly go out of date. A yearly refresh, checking whether the outcome is still right, whether the workflow map still matches reality and which opportunities have risen or faded, anchors the map before the next annual plan.

                ## Milestones
                1. The outcome reconfirmed or replaced, with a recorded reason.
                2. Workflow map and top-level opportunities compared with the past year's evidence.
                3. Opportunities that rose or faded listed with the evidence behind each.
                4. A refreshed tree published before annual planning starts.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A refreshed tree, with the outcome reconfirmed and risen or faded opportunities listed, is published before annual planning each year."
                cadence: cyclic
              tasks:
                - "Schedule the landscape refresh a month before annual planning @recurring(yearly)"
                - "Reconfirm or replace the outcome at the root with a written reason"
                - "List the opportunities that rose or faded with the evidence for each"
                - "Publish the refreshed tree to the team and stakeholders"
            - name: Company-wide customer problem showcase
              description: |-
                ## Purpose
                Most people in a company never hear a customer describe a problem in their own words. A forty-five-minute showcase, with two or three short clips or quotes for each top opportunity, gives finance, operations and engineering a shared sense of why the chosen problems matter and often brings in evidence from unexpected corners.

                ## Milestones
                1. Three top opportunities chosen with two or three clips or quotes each.
                2. Consent confirmed for any customer recordings used.
                3. A forty-five-minute session held with at least three departments.
                4. Questions and new evidence from attendees added to the map.

                ## Notes
                Use only recordings customers agreed could be shared internally, and remove names where they did not.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A showcase attended by at least three departments presents three opportunities with customer evidence, and new evidence raised is on the map."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose three top opportunities and two or three clips or quotes for each"
                - "Check customers agreed to internal sharing of any recordings"
                - "Run the forty-five-minute showcase with at least three departments"
                - "Add questions and evidence raised by attendees to the map"
            - name: Founder's first problem hypothesis
              description: |-
                ## Purpose
                Founders usually start with a solution they are excited about. Before writing code, setting down the problem hypothesis behind it, who has the problem, how they cope today, why now and what would prove it wrong, and testing it against fifteen conversations, is the cheapest way to avoid spending a year on something nobody needs.

                ## Milestones
                1. A one-page problem hypothesis covering who, current coping, why now and what would disprove it.
                2. Fifteen conversations held with people who fit the who.
                3. The hypothesis revised or kept, with the evidence that decided it.
                4. A first small opportunity map built from the conversations.

                ## Notes
                Count only conversations with people who have the problem, not friends being encouraging.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written problem hypothesis is tested against fifteen conversations, with the keep or revise decision and a first opportunity map recorded."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write the problem hypothesis behind your solution idea on one page"
                - "List what you would need to hear to believe the hypothesis is wrong"
                - "Line up fifteen conversations with people who fit the hypothesis"
                - "Revise or keep the hypothesis and record the deciding evidence"
            - name: Reframing after a failed bet
              description: |-
                ## Purpose
                When a launch flops or a pivot is on the table, founders often jump straight to the next solution. Pausing to separate what was learned about the customer from what was learned about the solution, and redrawing the map before choosing a direction, keeps the hard-won evidence and avoids repeating the same framing mistake with a new product.

                ## Milestones
                1. A written account of what the failed bet assumed about the customer.
                2. Evidence sorted into lessons about the problem and lessons about the solution.
                3. A redrawn opportunity map built from what still holds.
                4. Two or three new directions compared against the redrawn map before one is chosen.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A redrawn opportunity map and a recorded comparison of at least two new directions exist before any new build begins."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write down what the failed bet assumed about the customer"
                - "Sort the evidence into problem lessons and solution lessons"
                - "Redraw the opportunity map from the evidence that still holds"
                - "Compare two or three new directions against the redrawn map"
            - name: Inheriting a solution-first roadmap as a new PM
              description: |-
                ## Purpose
                Product managers joining an existing team often inherit a roadmap of committed features with no visible problems behind them. Tracing each item back to an opportunity in the first sixty days, without cancelling anything yet, shows which commitments rest on evidence and gives the new PM a fact-based first conversation with leadership.

                ## Milestones
                1. Every roadmap item listed with the person who requested it.
                2. Each item traced to an opportunity and its evidence, or marked unsupported.
                3. Findings shared privately with the manager before any wider discussion.
                4. An agreed list of items to keep, reframe or revisit.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every inherited roadmap item is traced to an opportunity or marked unsupported, with a keep, reframe or revisit list agreed with the manager."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List every roadmap item with the person who asked for it"
                - "Ask each requester what problem the item was meant to solve"
                - "Mark each item as evidenced or unsupported"
                - "Share the findings with your manager before raising them more widely"
            - name: Responding to an executive-mandated solution
              description: |-
                ## Purpose
                Sometimes the solution arrives from the top: build a marketplace, add a chatbot to support. Rather than refusing or complying blindly, the team can map the mandate onto opportunities, name the assumptions that must hold for it to work and propose the cheapest tests, which keeps both the relationship and the evidence intact.

                ## Milestones
                1. The mandate written in the executive's own words, with the goal behind it.
                2. The opportunities the mandate could serve placed on the map.
                3. The three riskiest assumptions behind the mandate listed.
                4. A short proposal of tests agreed with the executive before full build.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A proposal naming the opportunities and three riskiest assumptions behind the mandate, with agreed tests, is accepted by the executive."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the mandate in the executive's words and ask for the goal behind it"
                - "Place the opportunities the mandate could serve on the map"
                - "List the three riskiest assumptions the mandate depends on"
                - "Propose cheap tests for those assumptions to the executive"
            - name: Framing for a handful of large B2B customers
              description: |-
                ## Purpose
                B2B teams with fifteen large accounts risk mapping the problems of whichever customer shouts loudest or pays most. Tagging every piece of evidence with its account, and checking that each top opportunity is supported by several accounts, keeps the map about the market rather than one contract.

                ## Milestones
                1. Every evidence item on the map tagged with its account.
                2. Each top opportunity showing how many accounts support it.
                3. Opportunities resting on a single account marked as account-specific.
                4. A quarterly check on account concentration in place.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every top opportunity shows its supporting account count, and those backed by a single account are marked as account-specific."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Tag every evidence item on the map with its customer account"
                - "Count the supporting accounts for each top opportunity"
                - "Mark opportunities backed by one account as account-specific"
                - "Check that no single account supplies most evidence for the top five @recurring(quarterly)"
            - name: Handing framing over to the first product hire
              description: |-
                ## Purpose
                Founders often hold the problem framing in their heads until the first product manager arrives and has to reverse engineer it. Writing down the outcome, the current map, the evidence behind it and the bets already rejected, then co-owning the map for a month before handing it over, makes the transition faster and keeps the founder's context.

                ## Milestones
                1. The outcome, current tree and key evidence written into one handover document.
                2. Rejected bets listed with the reasons.
                3. Four weeks of weekly map updates done together.
                4. Ownership of the map formally handed to the product hire.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A handover document exists and the map is formally owned by the product hire after four weeks of joint weekly updates."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the agent to draft a handover document from your notes and the current tree"
                - "List the bets you have already rejected and why"
                - "Run the weekly map update together for four weeks"
                - "Hand over ownership of the map and tell the team"
            - name: Systems map for a tangled problem
              description: |-
                ## Purpose
                Some problems, such as low adoption across a large customer organisation, have several causes that feed each other, and solving one in isolation changes nothing. Drawing a systems map of the causes, the loops between them and where the product can intervene, before placing opportunities on the tree, shows which interventions are likely to shift the whole system.

                ## Milestones
                1. The problem and its observable symptoms written down.
                2. Causes drawn with arrows showing which feed which, including reinforcing loops.
                3. Two or three points where the product could intervene marked.
                4. The intervention points carried onto the tree as opportunities.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A systems map with labelled causes and loops is complete, and its intervention points are on the opportunity tree."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write down the tangled problem and its visible symptoms"
                - "Draw the causes and the arrows showing which feed which"
                - "Mark two or three points where the product could intervene"
                - "Add the intervention points to the opportunity tree"
            - name: Consequence scanning for chosen opportunities
              description: |-
                ## Purpose
                Solving one customer's problem can create another's: a feature that saves managers time might expose staff to closer monitoring. A short consequence scan for each target opportunity, asking who else is affected, what could go wrong at scale and what the team would regret, puts harms on the map before they become incidents.

                ## Milestones
                1. A scan format with intended, unintended and harmful effects.
                2. A scan run for the current target opportunity and its chosen solution.
                3. Each serious risk logged with an owner.
                4. Mitigations or changes to the solution recorded.

                ## Notes
                Start from the **Risk register** template for the risks the scan surfaces.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A consequence scan is recorded for the current target opportunity, with each serious risk logged against a named owner."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Set up a scan with intended, unintended and harmful effects columns"
                - "Run the scan with the team for the current target opportunity"
                - "Log each serious risk with a named owner"
                - "Run a scan for each new target opportunity @recurring(quarterly)"
            - name: Opportunity portfolio balance
              description: |-
                ## Purpose
                Chasing only the best evidenced opportunities ends with a team polishing what already exists. Tagging opportunities as core, adjacent or exploratory, and checking the mix each quarter against an agreed split such as seventy, twenty and ten, keeps some attention on the problems that will matter next year.

                ## Milestones
                1. Every active opportunity tagged as core, adjacent or exploratory.
                2. A target split agreed with leadership.
                3. The current split compared with the target each quarter.
                4. One exploratory opportunity given research time in the next quarter.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Each quarter the core, adjacent and exploratory split is compared with the agreed target and at least one exploratory opportunity gets research time."
                cadence: cyclic
              tasks:
                - "Tag every active opportunity as core, adjacent or exploratory"
                - "Agree a target split with leadership"
                - "Compare the actual split with the target @recurring(quarterly)"
                - "Give one exploratory opportunity research time next quarter"
            - name: Framing retrospective on past target opportunities
              description: |-
                ## Purpose
                Few teams check whether the opportunities they chose actually moved the outcome. Looking back at each quarter's target, what was built, what the outcome did and what the evidence said at the time, calibrates how far the team should trust its own framing and shows which kinds of evidence predicted success.

                ## Milestones
                1. The last four quarterly target opportunities listed with their evidence at the time.
                2. What was built and how the outcome moved recorded for each.
                3. Patterns noted on which evidence types predicted results.
                4. One change to the team's framing practice agreed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written review of the last four target opportunities records the outcome movement for each and which evidence types predicted results."
                cadence: cyclic
              tasks:
                - "List each target opportunity from the last four quarters"
                - "Record what was built and how the outcome moved after each"
                - "Note which evidence types predicted the results best"
                - "Run the framing retrospective each year before annual planning @recurring(yearly)"
---

# Problem Framing & Opportunity Mapping

This area covers the work between hearing from customers and deciding what to build: choosing the outcome, turning research into an opportunity solution tree, writing problem statements and naming the assumptions under every idea. It is written for product teams and founders, and runs from foundations such as a shared vocabulary, an evidence inventory and the first tree, through the weekly and monthly machinery that keeps the map honest, the framing skills and key decisions, workshops and readouts, founder and team situations, and finally specialist work such as systems maps, consequence scanning and portfolio balance.

What repeats is a weekly tree update and snapshot linking, monthly reviews, pruning, assumption log and decision log upkeep, a quarterly target opportunity choice and leadership readout, and a yearly landscape refresh and framing retrospective. The Meeting notes, Reading queue, Feedback themes, Purchase decision and Risk register templates pair with the projects that point at them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
