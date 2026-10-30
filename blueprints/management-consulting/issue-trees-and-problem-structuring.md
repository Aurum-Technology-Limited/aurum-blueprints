---
id: management-consulting.issue-trees-and-problem-structuring
name: Issue Trees and Problem Structuring
description: "A sharp key question, MECE issue trees that can be tested, branches prioritised by value at stake, a living tree on real work and the weekly drills that make structuring fast and natural."
category: business
version: 1.0.0
tags: [management-consulting, issue-trees-and-problem-structuring, knowledge-worker, issue-trees, mece, problem-solving, driver-trees, key-question]
author: Aurum Technology
starter_structure:
  templates:
    - reading-queue
    - feedback-themes
    - purchase-decision
    - skills-matrix
  pillars:
    - name: Management Consulting
      emoji: "📋"
      description: "Consulting as a craft and a business: case interviews and getting hired, structuring problems with issue trees, hypothesis-driven workplans, client interviews, slides and steering committees, the career from analyst to partner, and going independent or building a boutique firm with sensible pricing."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Issue Trees and Problem Structuring
          description: "Breaking a client problem into a MECE issue tree: the key question, branches that can be tested, prioritising and using the tree to plan the analysis."
          projects:
            - name: Key question written in one testable sentence
              description: |-
                ## Purpose
                Every tree inherits the quality of the question at its root, and most weak trees start from a topic ("customer churn") rather than a question someone must answer. Writing the key question as one sentence with a decision, a metric, a time frame and an owner gives the whole team the same target before anyone draws a branch.

                ## Milestones
                1. A key question for your current problem written as one sentence that ends in a question mark.
                2. The sentence names the decision, the measure of success, the time frame and who decides.
                3. Two colleagues have read it and restated it back without changing its meaning.
                4. The final wording saved at the top of your working document for the problem.

                ## Notes
                A good test: could the answer be a clear yes, no or a number? If the only possible answer is "it depends", the question is still a topic.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-sentence key question naming the decision, metric, time frame and decision maker, confirmed by two colleagues and saved with the problem."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the problem you are working on as a single question in under 30 words"
                - "Add the decision, the metric, the time frame and the decision maker to the sentence"
                - "Ask two colleagues to restate the question in their own words"
                - "Save the agreed wording at the top of the problem document"
            - name: Problem statement worksheet for a live problem
              description: |-
                ## Purpose
                Before a tree is worth drawing you need the context around the question: what success looks like, what is out of scope, the constraints, who the stakeholders are and what would count as sufficient accuracy. A one-page problem statement worksheet captures all of it, and filling it in usually exposes a disagreement nobody had spotted.

                ## Milestones
                1. A one-page worksheet with the key question, context, success criteria, scope, constraints, stakeholders and sources of insight.
                2. Each criterion of success written as something measurable.
                3. At least one open disagreement between stakeholders written down rather than smoothed over.
                4. The worksheet reviewed with the person who owns the problem and their changes made.

                ## Notes
                Keep it to one page. If the worksheet runs to three, the problem is probably two problems and needs splitting.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A completed one-page problem statement worksheet, reviewed and amended by the problem owner, with measurable success criteria."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Sketch the seven worksheet boxes on one page for your current problem"
                - "Rewrite each success criterion so it has a number or a clear test"
                - "List the stakeholders and note what each one most wants from the answer"
                - "Walk the problem owner through the worksheet and capture their edits"
            - name: Situation, complication and question framing
              description: |-
                ## Purpose
                Clients rarely bring a clean question; they bring a story about what changed. Separating the situation (what was stable), the complication (what changed or went wrong) and the question it raises turns a rambling briefing into a key question you can defend, and it is the same framing you will later use to open the storyline.

                ## Milestones
                1. Three short paragraphs, one each for situation, complication and question, on your current problem.
                2. The complication states a specific change, with a number or date where one exists.
                3. The question follows directly from the complication with no leap in logic.
                4. The framing tested on someone unfamiliar with the problem, who can say why it matters.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written situation, complication and question for one real problem, with a specific complication and a question an outsider found clear."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the situation in three sentences describing what used to be true"
                - "State the complication as one specific change with a number or a date"
                - "Derive the question that the complication forces the client to answer"
                - "Read the framing to someone outside the work and note what confused them"
            - name: First MECE issue tree with a gap and overlap check
              description: |-
                ## Purpose
                MECE (mutually exclusive, collectively exhaustive) sounds simple until you test a real tree and find two branches counting the same customers and a third of the problem missing. Building one tree carefully and then checking every level for overlaps and gaps teaches the discipline faster than reading about it.

                ## Milestones
                1. A three-level issue tree hanging from your agreed key question.
                2. Every level checked: no item could sit under two branches at once.
                3. Every level checked: the branches together cover the whole of their parent.
                4. Each fix you made written down as a short lesson for the next tree.

                ## Notes
                A quick exhaustiveness test is to ask whether the branches would add up to 100 percent of the parent if you could measure them. An "other" branch is allowed, but if it is large it is hiding something.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A three-level issue tree that passes a written overlap and gap check at every level, with the fixes recorded as lessons."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draw three levels of branches under your key question in 30 minutes"
                - "Test each level for overlaps by placing five real examples in the branches"
                - "Test each level for gaps by asking what the branches together leave out"
                - "Write three lessons from the fixes you had to make"
            - name: Choosing between issue, hypothesis, driver and decision trees
              description: |-
                ## Purpose
                Different questions need different trees: an issue tree breaks down what you need to know, a hypothesis tree breaks down what must be true, a driver tree breaks a metric into its arithmetic, and a decision tree lays out options and consequences. Knowing which to reach for saves the hour spent forcing a profit question into a list of open issues.

                ## Milestones
                1. A one-page note defining the four tree types with one example question for each.
                2. Each of three past problems matched to the tree type that would have suited it best.
                3. A rule of thumb written for when to switch from an issue tree to a hypothesis tree.
                4. One problem structured twice, in two different tree types, with the comparison noted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page guide to four tree types, applied to three past problems and one problem drawn in two types side by side."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write one example key question that suits each of the four tree types"
                - "Match three problems from past work to the tree type that fits each best"
                - "Structure one problem as both an issue tree and a hypothesis tree"
                - "Note which version led to clearer analyses and why"
            - name: Structuring speed baseline on three old problems
              description: |-
                ## Purpose
                You cannot tell whether practice is working without a starting point. Taking three problems you have already solved, structuring each from a blank page against a timer and scoring the result against what actually mattered gives you an honest baseline for speed and for coverage.

                ## Milestones
                1. Three past problems chosen, each with a known answer or outcome.
                2. Each structured from scratch in 20 minutes with the time to a first full level recorded.
                3. Each tree scored for whether it contained the branch that turned out to matter.
                4. A baseline line in your practice log with times and scores for all three.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Timed trees for three past problems, each scored on whether the decisive branch was present, logged as a dated baseline."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick three past problems where you now know what really drove the answer"
                - "Structure each from a blank page with a 20 minute timer"
                - "Mark whether each tree contained the branch that turned out to decide it"
                - "Record times and scores as the first entries in your practice log"
            - name: Tree drawing conventions and a personal template
              description: |-
                ## Purpose
                Trees drawn differently every time are hard to compare, share or reuse. Settling on your conventions (left to right or top down, how many levels, how to mark a hypothesis, a killed branch or a branch owner) and saving a blank template in your usual tool means each new tree starts in two minutes instead of twenty.

                ## Milestones
                1. Written conventions for direction, levels, labels and status markings.
                2. A blank tree template saved in the tool you use most, with a key to the markings.
                3. A paper version for whiteboards and notebooks that uses the same conventions.
                4. The template used for the next real tree without changes.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A saved tree template with a written key for direction, levels and status markings, used on at least one real problem."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Decide direction, maximum depth and label style and write them down"
                - "Pick markings for hypothesis, supported, killed and owned branches"
                - "Save a blank tree template with the key in your usual slide or diagram tool"
                - "Use the template for the next tree you draw at work"
            - name: Scope boundary and out-of-scope list
              description: |-
                ## Purpose
                Trees grow until they swallow the whole company unless someone draws the line. Agreeing in writing what the problem excludes (business units, geographies, time horizons, options already ruled out) stops branches sprouting into areas the decision maker never asked about and protects the team's time later.

                ## Milestones
                1. A list of what is in scope and what is explicitly out, with a reason for each exclusion.
                2. Options the client has already ruled out recorded so they are not reopened by accident.
                3. The list confirmed by the problem owner in writing.
                4. Out-of-scope items marked on the tree so nobody builds them.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written in-scope and out-of-scope list with reasons, confirmed by the problem owner and reflected on the tree."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every unit, region, horizon and option the problem might touch"
                - "Mark each as in or out of scope with a one-line reason"
                - "Send the list to the problem owner and ask for a written yes"
                - "Grey out the out-of-scope branches on your current tree"
            - name: Decision maker's definition of a useful answer
              description: |-
                ## Purpose
                A tree can be perfectly MECE and still answer the wrong question if nobody asked the decision maker what they will do with the result. One short conversation about the decision they face, the options they would consider and the evidence that would change their mind decides which branches matter before a day of analysis is spent.

                ## Milestones
                1. A 20 minute conversation held with the decision maker or their closest proxy.
                2. The decision, the options on the table and the deadline written in their words.
                3. The evidence that would change their mind listed as specific facts.
                4. The key question and the top level of the tree adjusted to match.

                ## Notes
                Ask "if we came back with X, what would you do on Monday?" for two or three possible answers. If the action would be the same in every case, the question is not yet decision-relevant.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Notes from a conversation with the decision maker recording the decision, options and mind-changing evidence, with the tree top level revised to match."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Request 20 minutes with the decision maker or the person closest to them"
                - "Prepare three possible answers and ask what each would make them do"
                - "Write down the evidence they say would change their mind"
                - "Revise the key question and top branches based on the conversation"
            - name: Weekly structuring drill on a business headline
              description: |-
                ## Purpose
                Structuring gets fast through repetition on fresh material, not by re-reading frameworks. Taking one headline a week (a retailer closing stores, an airline cutting a route, a bank losing deposits), writing the key question and a two-level tree in fifteen minutes, keeps the skill sharp between engagements when no real tree is on your desk.

                ## Milestones
                1. A standing slot in the week reserved for a 15 minute drill.
                2. Eight weekly drills completed and saved in one place.
                3. Each drill has a key question, a two-level tree and one note on what was hard.
                4. A visible drop in the time it takes to reach a complete first level.

                ## Notes
                Rotate the type of question: profit, growth, cost, operations, people and public policy, so you do not only get fast at one pattern.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight saved weekly drills, each with a key question, a two-level tree and a timing, showing faster first levels by the eighth."
                cadence: rolling
              tasks:
                - "Block a recurring 15 minute slot for structuring drills"
                - "Pick a business headline and structure it in 15 minutes @recurring(weekly:tue)"
                - "Save the drill with its timing and one note on what was hard"
                - "Compare this month's drill times with the baseline @recurring(monthly:28)"
            - name: Branch pattern library for reuse
              description: |-
                ## Purpose
                Experienced consultants rarely start from nothing; they recognise that a churn problem splits like a funnel and a capacity problem splits like a formula. Keeping a short library of branch patterns that worked, each with the kind of question it suits, makes the first level of a new tree faster and more likely to be complete.

                ## Milestones
                1. A single document of branch patterns, each with a name, an example and the question type it suits.
                2. At least twelve patterns covering formulas, segments, process steps, stakeholders and options.
                3. Each pattern tagged with one problem where it failed or needed changing.
                4. New patterns added from real work every month.

                ## Notes
                Patterns are starting points, not answers. Each entry should say where it breaks, or you will force problems into it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A pattern library of at least twelve entries, each with example, suitable question type and known failure case, updated monthly."
                cadence: rolling
              tasks:
                - "Start a document with five branch patterns you already use"
                - "Add an example problem and a known failure case to each pattern"
                - "Add any new pattern from this month's work to the library @recurring(monthly:12)"
                - "Remove or rewrite a pattern that misled you on a real problem"
            - name: Living issue tree for the current problem
              description: |-
                ## Purpose
                Drawn in week one and never touched again, a tree becomes a museum piece while the team's thinking moves on. Keeping one current version of the tree, updated each Friday with what was learned, killed and added, means anyone joining the work can see in one page where the problem stands.

                ## Milestones
                1. One master tree file for the current problem, with a version date on it.
                2. Each branch carries a status: open, supported, refuted or parked.
                3. A short change note written each week saying what moved and why.
                4. The tree used in at least one team or client conversation as the shared map.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated master tree with a status on every branch and a weekly change note kept for at least six consecutive weeks."
                cadence: rolling
              tasks:
                - "Copy your latest tree into one master file and date it"
                - "Add a status marker to every branch on the tree"
                - "Update branch statuses and write a short change note @recurring(weekly:fri)"
                - "Share the current tree at the start of the next team check-in"
                - "Save a dated copy of the tree at the end of each month @recurring(monthly:30)"
            - name: Monday branch status check
              description: |-
                ## Purpose
                Branches stall quietly: an analysis waits on data, an owner moves to another task and a branch that mattered sits open for three weeks. A ten minute look at the tree every Monday, asking which open branches have no progress and what is blocking them, catches drift while there is still time to act.

                ## Milestones
                1. A ten minute Monday slot set aside for the check.
                2. Every open branch marked with the date of its last progress.
                3. Any branch stalled for more than two weeks either unblocked, parked or killed.
                4. A one-line note of the week's top branch sent to whoever leads the work.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly Monday check that leaves no open branch without progress for more than two weeks, recorded for six weeks running."
                cadence: rolling
              tasks:
                - "Add the date of last progress beside each open branch"
                - "Review open branches and flag any stalled for two weeks @recurring(weekly:mon)"
                - "Decide for each stalled branch whether to unblock, park or kill it"
                - "Send a one-line note naming this week's most important branch @recurring(weekly:mon)"
            - name: Monthly peer tree swap
              description: |-
                ## Purpose
                Your own gaps are invisible to you, and a colleague reading your tree cold will find the missing branch in two minutes. Swapping one tree a month with a peer, each giving three pieces of written feedback, builds the habit of welcoming challenge and gives you a record of the mistakes you repeat.

                ## Milestones
                1. One or two peers agreed to a monthly swap.
                2. Each swap produces three written comments: a gap, an overlap or level problem, and one strength.
                3. Feedback filed in one place and grouped into recurring themes.
                4. One repeated weakness chosen to work on each quarter.

                ## Notes
                Start from the **Feedback themes** template to group comments across swaps. Strip client names before sharing any tree outside the team.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly swaps completed, each with three written comments filed and grouped into themes, and one weakness chosen to fix."
                cadence: rolling
              tasks:
                - "Ask one or two peers to swap a tree with you each month"
                - "Exchange a tree with a peer and send three written comments @recurring(monthly:8)"
                - "File the comments you receive under recurring themes"
                - "Pick the most repeated weakness as this quarter's focus"
            - name: Tree retrospective at the end of each problem
              description: |-
                ## Purpose
                Only after a problem is solved do you know which branches mattered and which absorbed time for nothing. A short retrospective comparing the first tree with the final answer, recorded each time, turns every engagement into structuring practice and sharpens your judgement about where to look first.

                ## Milestones
                1. The first and final trees for a finished problem placed side by side.
                2. The branch that decided the answer identified, and its position on the first tree noted.
                3. Branches that absorbed effort without changing the answer listed with hours spent.
                4. Two lessons recorded in your practice log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A written retrospective for each finished problem comparing first and final trees, naming the decisive branch and two lessons."
                cadence: rolling
              tasks:
                - "Put the first and final trees of your last finished problem side by side"
                - "Find where the decisive branch sat on the first tree"
                - "Hold a short retrospective on the latest finished problem @recurring(monthly:27)"
                - "Write two lessons into your practice log"
            - name: Daily key question check before email
              description: |-
                ## Purpose
                Busy days pull attention towards whatever arrived last, not towards the question the work exists to answer. Writing the key question at the top of the day's notes before opening email takes a minute and makes it obvious when a request has nothing to do with the tree.

                ## Milestones
                1. The key question written at the top of each day's notes for four weeks.
                2. Requests that sit outside the tree noted, with how you handled them.
                3. At least one piece of work redirected or declined because it did not serve the question.
                4. A decision on whether to keep the habit after four weeks.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four weeks of daily notes headed by the key question, with off-tree requests logged and a recorded decision on keeping the habit."
                cadence: rolling
              tasks:
                - "Write the key question at the top of today's notes before email @recurring(daily)"
                - "Note any request that does not sit on a branch of the tree"
                - "Raise one off-tree request with your manager and agree what to do"
                - "Decide after four weeks whether the habit earns its minute"
            - name: Structuring practice log and monthly score
              description: |-
                ## Purpose
                Without a record, it is hard to tell whether your trees are getting better or just more familiar. A simple log of every tree you draw, with the time taken, a gap and overlap score and whether it held the decisive branch, gives you a monthly score to watch and the evidence for a promotion conversation about problem solving.

                ## Milestones
                1. A log with one line per tree: date, question type, time, gaps, overlaps and decisive branch present.
                2. At least twenty entries across drills and real work.
                3. A monthly average for time and coverage plotted against the baseline.
                4. One example of improvement written up with before and after trees.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A practice log of at least twenty trees with monthly averages compared against the baseline and one written before-and-after example."
                cadence: rolling
              tasks:
                - "Set up a log with columns for date, type, time, gaps, overlaps and decisive branch"
                - "Add a line for every tree you draw, drill or real"
                - "Work out this month's averages and compare with the baseline @recurring(monthly:20)"
                - "Write up one before-and-after example of improvement"
            - name: Structuring reading list and quarterly reread
              description: |-
                ## Purpose
                Several books shaped how the profession structures problems, including Barbara Minto's work on the pyramid principle, Ethan Rasiel's accounts of firm practice and Conn and McLean's book on step-by-step problem solving. Reading them once, then rereading one chapter a quarter alongside real work, keeps the ideas tied to practice rather than to memory.

                ## Milestones
                1. A reading list of four to six titles on structured problem solving.
                2. Each title read with one page of notes on techniques you will use.
                3. One chapter reread each quarter and tried on a live problem.
                4. A short note recording which technique changed your trees most.

                ## Notes
                Start from the **Reading queue** template. Borrow before you buy; most firm libraries and many public libraries hold these titles.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four to six structuring titles read with one page of notes each, plus one chapter reread and applied each quarter."
                cadence: rolling
              tasks:
                - "List four to six books on structured problem solving to read"
                - "Read one title and write a page of techniques you will try"
                - "Reread one chapter and apply it to a live problem @recurring(quarterly)"
                - "Note which technique has changed your trees the most"
            - name: Splitting drills by segment, process, formula and stakeholder
              description: |-
                ## Purpose
                Most first levels are built from a small number of splitting logics: by segment (customers, products, regions), by process step, by formula and by stakeholder. Practising each one deliberately on the same problem shows you which logic produces branches that can be measured and owned, and which only sound tidy.

                ## Milestones
                1. One problem split four ways, once with each logic.
                2. Each version judged for overlaps, gaps and whether data exists for its branches.
                3. Three further problems where the best logic was chosen first time and justified.
                4. A short rule for which logic to try first by question type.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four splits of one problem compared in writing, three further problems split with a justified logic, and a written rule for which to try first."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Split one problem by segment, process, formula and stakeholder"
                - "Score each split for overlaps, gaps and data availability"
                - "Apply the best logic to three new problems and justify the choice"
                - "Write a one-paragraph rule on which logic to try first"
            - name: Driver trees that reconcile to the numbers
              description: |-
                ## Purpose
                A driver tree breaks a metric into its arithmetic, so profit becomes revenue less cost and revenue becomes customers times frequency times average spend. Its power is that every branch can be measured and the leaves must multiply or add back to the top, which makes it the clearest way to show where a change in the number really came from.

                ## Milestones
                1. A driver tree for one real metric taken four levels down.
                2. Every node defined with its unit, so the arithmetic is unambiguous.
                3. Actual figures entered for two periods, reconciling to the reported total within rounding.
                4. The two or three leaves that explain most of the change between periods highlighted.

                ## Notes
                If the tree does not reconcile, a definition is wrong, usually a mix of volume measures or a margin taken on the wrong base. Fix the definition before reading anything into the gap.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A four-level driver tree with defined units and two periods of figures that reconcile to the reported metric, with the main drivers of change marked."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose one metric you can get two periods of data for"
                - "Break it into an arithmetic tree four levels deep with units on each node"
                - "Enter both periods and check the leaves reconcile to the reported total"
                - "Mark the leaves that explain most of the change between periods"
            - name: Converting branches into testable hypotheses
              description: |-
                ## Purpose
                Labelling a branch "pricing" tells nobody what to check; a branch that says "our prices are more than 10 percent above the two main competitors in the mid-market segment" can be proved or disproved by Thursday. Learning to rewrite branches as falsifiable statements is the bridge from a tidy tree to useful analysis.

                ## Milestones
                1. Ten branches from a current tree rewritten as statements that could be false.
                2. Each statement names a threshold, a comparison or a direction.
                3. For each statement, the single piece of evidence that would disprove it written down.
                4. Statements that could not be falsified sent back for restructuring.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten branches rewritten as falsifiable statements, each with a named disproving piece of evidence, and any unfalsifiable ones restructured."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Take ten branches from your current tree and rewrite each as a statement"
                - "Add a threshold, comparison or direction to every statement"
                - "Write the one fact that would prove each statement wrong"
                - "Restructure any branch that cannot be disproved"
            - name: Decision trees for choices between options
              description: |-
                ## Purpose
                When the question is "which option should we choose", an issue tree of open questions is often the wrong shape. A decision tree that sets out the options, the criteria every option is judged on and the uncertain events that change the outcome makes the trade-offs visible and keeps the team from analysing options nobody would pick.

                ## Milestones
                1. The realistic options for one live decision listed, including doing nothing.
                2. A short set of criteria agreed and applied to every option in the same way.
                3. The one or two uncertainties that most change the outcome drawn as branches.
                4. Options that fail a must-have criterion removed with the reason recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A decision tree for one live choice with options including doing nothing, shared criteria, key uncertainties and removed options with reasons."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every realistic option for one live decision, including doing nothing"
                - "Agree four to six criteria and apply them to every option"
                - "Draw the uncertainties that would most change the outcome"
                - "Remove options that fail a must-have and note why"
            - name: Whiteboarding a tree live with a client team
              description: |-
                ## Purpose
                Drawing a tree alone and presenting it is very different from building one at a whiteboard while a client team argues about the branches. Practising the live version, with a pre-drawn first level, a clear way to park tangents and a photograph at the end, turns a structuring session into shared ownership of the problem.

                ## Milestones
                1. A first level prepared in advance but drawn live, leaving room for the client to change it.
                2. A visible parking area for points that do not fit a branch.
                3. At least one branch suggested by the client added and labelled with their name.
                4. A clean version of the board circulated within a day.

                ## Notes
                Write in large capitals and keep each branch to four words. If the room cannot read it from the back, they will stop contributing.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One live whiteboard session run with a client or colleague team, with a client-suggested branch added and a clean tree circulated within a day."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Rehearse drawing your first level at a whiteboard in under five minutes"
                - "Set up a parking area on the board before the session starts"
                - "Run a 45 minute structuring session with the team"
                - "Circulate a cleaned-up tree from the board photo within a day"
            - name: Root cause trees for operational failures
              description: |-
                ## Purpose
                When something has gone wrong (late deliveries, a rise in defects, missed service levels), the question is why, and a why tree that keeps asking "what could cause this" down each branch finds causes a single "five whys" chain misses. Learning to build and then evidence a root cause tree stops teams fixing the first plausible cause they meet.

                ## Milestones
                1. A why tree for one operational failure, at least four levels deep on its main branches.
                2. Each candidate cause marked with the evidence for or against it.
                3. Causes that are symptoms of a deeper cause folded under it.
                4. One or two root causes agreed with the people who run the process.

                ## Notes
                Keep people out of the leaves. "Operator error" is almost never a root cause; ask what made the error easy to make.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A root cause tree for one real failure with evidence marked on every candidate cause and root causes agreed with process owners."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write the failure as a precise statement with a measure and a date range"
                - "Build a why tree at least four levels deep on the main branches"
                - "Mark each candidate cause with the evidence for and against it"
                - "Review the likely root causes with the people who run the process"
            - name: Structuring qualitative and people questions
              description: |-
                ## Purpose
                Questions like "why are our best managers leaving" or "is the culture ready for this change" have no formula to break down, so trees for them often collapse into a list of opinions. Learning to split them by stakeholder group, by stage of the employee experience or by enabler and barrier keeps the same rigour where the evidence is interviews and surveys rather than accounts.

                ## Milestones
                1. One qualitative question structured using two different splitting logics.
                2. Each branch paired with the kind of evidence that could test it, such as exit data or survey items.
                3. The version with the most testable branches chosen and its reasons noted.
                4. The tree reviewed by someone who knows the people involved.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A qualitative question structured two ways, each branch matched to a testable source of evidence, with the chosen version reviewed by an insider."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pick one people or culture question from current or recent work"
                - "Structure it once by stakeholder group and once by stage"
                - "Name the evidence source that could test each branch"
                - "Ask someone close to the people involved to challenge the tree"
            - name: Explaining the tree in two minutes to a senior client
              description: |-
                ## Purpose
                Sponsors will not use a tree they cannot follow, and senior clients give you two minutes, not twenty. Practising a short spoken walk-through (the question, the three or four top branches, which ones you are testing first and why) makes the tree a tool for alignment rather than a diagram that lives on the team's drive.

                ## Milestones
                1. A two-minute spoken walk-through of your current tree written as notes.
                2. The walk-through rehearsed and timed three times.
                3. Delivered to a senior client or a senior colleague acting the part.
                4. The questions they asked noted and the tree adjusted where needed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A timed two-minute walk-through of the current tree delivered to a senior client or stand-in, with their questions noted and the tree adjusted."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write two-minute speaking notes for the question and top branches"
                - "Rehearse and time the walk-through three times"
                - "Deliver it to a senior client or a colleague playing the part"
                - "Note their questions and adjust the tree where they exposed a gap"
            - name: Branch prioritisation by value at stake and ease
              description: |-
                ## Purpose
                Complete trees usually have more branches than the team has days, so the next decision is which to work first. Scoring each branch on how much of the answer it could move and how quickly it can be tested, then agreeing the top few with the person leading the work, stops the team spreading itself evenly across a tree that is not evenly important.

                ## Milestones
                1. Every second-level branch scored on value at stake and ease of testing.
                2. A two-by-two chart placing every branch, with the top-right group named.
                3. Three to five priority branches agreed with the work's leader.
                4. Low-priority branches parked with a note of what would bring them back.

                ## Notes
                Rough sizing beats careful guessing. Even a range such as "between 2 and 5 percent of margin" is enough to separate the branches that matter.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every second-level branch scored and plotted, three to five priority branches agreed with the work's leader, and the rest parked with a return trigger."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Estimate a rough value range at stake for every second-level branch"
                - "Score each branch for how quickly it could be tested"
                - "Plot the branches on a two-by-two and circle the top-right group"
                - "Agree three to five priority branches with the person leading the work"
            - name: Stop rule for killing branches
              description: |-
                ## Purpose
                Branches rarely die on their own; they linger because someone has already spent time on them. Writing down in advance what evidence would be enough to close a branch, and holding to it, frees days for the branches that are still alive and keeps the team honest about what it has learned.

                ## Milestones
                1. A written evidence threshold for closing each priority branch.
                2. At least one branch closed against its threshold and marked as refuted.
                3. A short record of each closed branch with the evidence and the date.
                4. Time freed by closures reassigned to a live branch.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written closure thresholds for each priority branch and a dated record of every branch closed with its evidence."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the evidence that would be enough to close each priority branch"
                - "Close any branch that has already met its threshold"
                - "Record each closed branch with its evidence and the date"
                - "Reassign the freed time to the most promising live branch"
            - name: Analysis list built from the leaves of the tree
              description: |-
                ## Purpose
                Prioritised trees only earn their keep when each leaf becomes a specific analysis. Writing one line per priority leaf (the analysis, the output it produces and the data it needs) shows quickly which leaves are untestable with the data available, and hands a clean list to whoever builds the workplan.

                ## Milestones
                1. One line per priority leaf naming the analysis and the output, such as a chart or a figure.
                2. The data needed for each analysis listed, with whether it exists.
                3. Leaves with no feasible analysis flagged for restructuring or a proxy.
                4. The list handed over as the input to the workplan.

                ## Notes
                Stop at the analysis and the data. Owners, dates and sequencing belong in the workplan, which builds from this list.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-line analysis and data entry for every priority leaf, with infeasible leaves flagged and the list passed to the workplan owner."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write one line per priority leaf naming the analysis and its output"
                - "List the data each analysis needs and mark whether it exists"
                - "Flag leaves with no feasible analysis and suggest a proxy"
                - "Pass the list to whoever owns the workplan"
            - name: Reframing a solution brought in as a problem
              description: |-
                ## Purpose
                Clients often arrive with an answer dressed as a question: "we need a new CRM" or "help us cut 10 percent of headcount". Tracing the request back to the outcome behind it, and structuring that outcome instead, usually reveals options the client had not considered and protects you from building a precise tree for the wrong problem.

                ## Milestones
                1. The client's request written down in their exact words.
                2. Two or three rounds of asking what the request is meant to achieve, recorded.
                3. A reframed key question about the outcome, with the original request as one branch.
                4. The reframing agreed with the client, or the original framing kept with the reason noted.

                ## Notes
                Do this respectfully: the client may have good reasons for the solution. The aim is to check, not to win an argument.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded original request, the questions asked about it, and an agreed key question about the underlying outcome or a noted reason to keep the original."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the client's request in their own words"
                - "Ask what the request is meant to achieve and record each answer"
                - "Draft a key question about the outcome with the request as one branch"
                - "Discuss the reframed question with the client and record the outcome"
            - name: Repairing a tree that fails review
              description: |-
                ## Purpose
                Sooner or later a manager or partner will hand a tree back with "this isn't MECE" or "where is the competitor branch". Having a fixed repair routine, finding the faulty row, choosing a better splitting logic and redrawing only what is broken, turns an uncomfortable review into a quick fix rather than a full restart.

                ## Milestones
                1. Every review comment on the tree written down verbatim.
                2. Each comment traced to the row where the fault sits.
                3. Faulty rows redrawn with a different splitting logic where needed.
                4. The repaired tree returned to the reviewer with a short note of each change.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A repaired tree returned to its reviewer within two working days, with every comment traced to a row and each change noted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down every review comment on the tree word for word"
                - "Trace each comment to the row of the tree where the fault sits"
                - "Redraw only the faulty rows using a better splitting logic"
                - "Return the repaired tree with a one-line note per change"
            - name: Choosing a tool for drawing and sharing trees
              description: |-
                ## Purpose
                Trees live in many places: a notebook, a whiteboard photo, a slide, a mind-map app or an online whiteboard shared with the client. Picking one main tool against clear criteria (speed of editing, sharing with clients, export to slides, what your firm or client allows) saves redrawing the same tree three times.

                ## Milestones
                1. Criteria written down, including client data and security rules.
                2. Two or three tools tried on the same real tree.
                3. One main tool chosen with the reasons recorded.
                4. A fallback agreed for clients who block that tool.

                ## Notes
                Start from the **Purchase decision** template. Check your firm's and the client's rules on cloud tools before putting client material in any of them.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One main tree tool chosen against written criteria after a trial on a real tree, with a recorded fallback for restricted clients."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write five criteria for a tree tool, including client security rules"
                - "Draw the same tree in two or three candidate tools"
                - "Score each tool and record the choice and reasons"
                - "Agree a fallback method for clients that block the chosen tool"
            - name: Merging competing trees from two stakeholders
              description: |-
                ## Purpose
                On cross-functional problems the sales director and the operations director often draw different trees for the same question, each placing the cause in the other's department. Combining them into one tree that both can accept, with the disputed branches made explicit and testable, turns a political argument into a list of facts to check.

                ## Milestones
                1. Each stakeholder's view captured as a tree in their own words.
                2. Shared branches, unique branches and contradictions marked.
                3. A merged tree where every disputed point is a testable branch.
                4. Both stakeholders have seen the merged tree and agreed it represents their view fairly.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A merged tree that both stakeholders confirmed represents their views, with every disputed point written as a testable branch."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Capture each stakeholder's explanation as a separate tree"
                - "Mark shared branches, unique branches and contradictions"
                - "Build one merged tree with each dispute as a testable branch"
                - "Walk each stakeholder through the merged tree separately"
            - name: Draft issue tree in the first week of an engagement
              description: |-
                ## Purpose
                Teams that wait for all the data before structuring lose the first fortnight. Producing a draft tree by day three, from the proposal, the first conversations and your own experience, gives the team something to argue with and shapes the early interviews and data requests around real questions.

                ## Milestones
                1. A draft key question and three-level tree produced by day three.
                2. Each branch marked as based on evidence, client view or your own instinct.
                3. The draft reviewed with the team lead before the end of week one.
                4. The early interview topics and data requests mapped to branches.

                ## Notes
                Label it a draft on the page. A day-three tree is a tool for thinking, not a commitment to the client.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A labelled draft tree reviewed by the team lead within the first week, with each early interview topic and data request mapped to a branch."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Reread the proposal and pull out the questions it promised to answer"
                - "Draft a key question and three-level tree by the end of day three"
                - "Mark each branch as evidence, client view or your own instinct"
                - "Review the draft with the team lead before the week ends"
            - name: Tree review session with the manager or partner
              description: |-
                ## Purpose
                Partners who have seen the industry twenty times will spot the missing branch faster than any checklist. A dedicated 30 minute review of the tree, prepared with the specific questions you want challenged, gets that judgement onto the tree before the team commits a week of analysis.

                ## Milestones
                1. A 30 minute review booked with the manager or partner.
                2. The tree sent a day ahead with three questions you want them to challenge.
                3. Every comment captured and sorted into must-fix and consider.
                4. The revised tree sent back within two working days.

                ## Notes
                Ask them where they would look first. Their answer is often the most valuable sentence of the meeting.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A held tree review with comments sorted into must-fix and consider, and a revised tree returned to the reviewer within two working days."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book a 30 minute tree review with your manager or partner"
                - "Send the tree a day ahead with three questions you want challenged"
                - "Sort every comment into must-fix and consider"
                - "Send the revised tree back within two working days"
            - name: Pressure-test session on the tree with the client team
              description: |-
                ## Purpose
                The client knows things about their business that no outsider can guess, and a tree they have challenged is a tree they will support. One focused hour where the client team tests the branches, adds what is missing and says which ones they think matter most builds the answer with them, not for them.

                ## Milestones
                1. A one-hour session set with the client's core team.
                2. Branches the client added or removed recorded with who suggested them.
                3. The client's view of the top branches compared with your own prioritisation.
                4. An updated tree sent to attendees within two days.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A held one-hour client session with recorded additions and removals, a comparison of priorities and an updated tree sent within two days."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Agree a one-hour slot with the client's core team"
                - "Prepare a printed or shared tree with space for comments"
                - "Record every branch added or removed and who suggested it"
                - "Send the updated tree to attendees within two days"
            - name: Restructuring when the main branch is refuted
              description: |-
                ## Purpose
                Halfway through, the evidence sometimes kills the branch everyone expected to hold the answer. Treating that as a dated event, with a short reset of the key question, the tree and the priorities, keeps the team from quietly bending the evidence to save the original story.

                ## Milestones
                1. The refuting evidence written up in one page with its source.
                2. The key question checked and kept or reworded.
                3. A revised tree with the refuted branch marked and new priorities agreed.
                4. The change explained to the client sponsor before the next scheduled meeting.

                ## Notes
                Bad news about the tree travels best early. A refuted hypothesis is a finding, and a sponsor would rather hear it now than at the readout.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A one-page note on the refuting evidence, a revised tree with new priorities and a record that the sponsor was told before the next meeting."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write up the evidence that refuted the main branch on one page"
                - "Recheck the key question and reword it if needed"
                - "Redraw the tree and agree new priority branches with the team"
                - "Brief the client sponsor on the change before the next meeting"
            - name: Teaching a structuring session to new joiners
              description: |-
                ## Purpose
                Explaining structuring to others forces you to make your own rules explicit, and new analysts benefit from hearing a working consultant rather than reading a training deck. Running one hour-long session with a real, sanitised example and a live exercise gives juniors a starting method and sharpens yours.

                ## Milestones
                1. A sanitised example problem with its key question, first tree and final tree.
                2. A one-hour plan with a short explanation, a live exercise and review.
                3. The session delivered to at least four new joiners.
                4. Feedback collected and the material revised for next time.
              priority: low
              deadlineOffsetDays: 45
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "A one-hour structuring session delivered to at least four new joiners using a sanitised example, with feedback collected and material revised."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Offer the training lead a one-hour structuring session for new joiners"
                - "Sanitise one past problem with its first and final trees"
                - "Plan a 20 minute live exercise with a fresh business question"
                - "Collect feedback and revise the material afterwards"
            - name: Analyst ownership of one branch
              description: |-
                ## Purpose
                New analysts are usually handed one branch of someone else's tree, and the temptation is to treat it as a list of tasks. Owning the branch properly, splitting it yourself, writing the hypotheses and reporting what it means for the key question, is the fastest way to be trusted with a bigger piece of the problem.

                ## Milestones
                1. Your branch split into its own sub-tree and agreed with your manager.
                2. Each sub-branch written as a testable statement.
                3. A weekly one-line view of what the branch is telling you about the key question.
                4. A short end-of-branch summary that states the answer, not the activity.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An agreed sub-tree for your branch, weekly one-line updates on what it implies for the key question and a final summary that states the answer."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Split your branch into a sub-tree and show it to your manager"
                - "Rewrite each sub-branch as a statement that could be wrong"
                - "Send your manager a one-line view of what your branch implies @recurring(weekly:thu)"
                - "Write a closing summary that leads with the answer for your branch"
            - name: Coaching junior team members on their trees
              description: |-
                ## Purpose
                Managers who fix juniors' trees themselves get a good tree today and the same weak tree next week. Coaching with questions (what does this row answer, what is missing, which branch would you test first) takes longer at first but builds analysts who structure well without you.

                ## Milestones
                1. A short list of five coaching questions you will use on every tree review.
                2. Each junior's tree reviewed at least twice using only questions, not rewrites.
                3. A record of each junior's recurring structuring weakness.
                4. A visible improvement noted in each junior's third tree.

                ## Notes
                Resist redrawing their tree on the whiteboard. If you must show an answer, show a different problem split the same way.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Each junior's tree reviewed at least twice using the five coaching questions, with a recorded weakness and a noted improvement by the third tree."
                cadence: rolling
              tasks:
                - "Write the five questions you will ask in every tree review"
                - "Review one junior's tree using only questions @recurring(weekly:wed)"
                - "Note each junior's recurring structuring weakness"
                - "Compare each junior's third tree with their first"
            - name: Issue trees inside an in-house strategy team
              description: |-
                ## Purpose
                Corporate strategy, transformation and finance teams face the same messy questions as consultants but without a partner to pressure-test their structure or a deadline set by a fee. Introducing a short structuring step, a key question and a one-page tree before any big analysis starts, helps an internal team avoid weeks of work on the wrong question.

                ## Milestones
                1. One upcoming internal piece of work chosen as a pilot.
                2. A key question and tree agreed with the internal sponsor before analysis begins.
                3. The tree shown at the first team meeting as the shared plan.
                4. A short note at the end on whether the step saved time, shared with the team lead.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An internal pilot where the key question and tree were agreed with the sponsor before analysis, and a written review of time saved shared with the team lead."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pick one upcoming internal analysis to pilot structuring first"
                - "Agree the key question and tree with the internal sponsor"
                - "Present the tree at the first team meeting as the plan"
                - "Write a short review of whether the step saved time"
            - name: Structuring alone as an independent consultant
              description: |-
                ## Purpose
                Without a team, nobody challenges your tree, and confirmation bias does the rest. A solo routine of drafting the tree, leaving it overnight, attacking it with a fixed checklist and booking a paid or reciprocal review with a trusted peer replaces the challenge a firm used to give you for free.

                ## Milestones
                1. A written checklist for attacking your own tree: question, scope, MECE, levels, testability.
                2. A peer or former colleague willing to review a tree on each engagement.
                3. On the current engagement, a draft tree left overnight and then attacked with the checklist.
                4. The peer's comments recorded and acted on before analysis starts.

                ## Notes
                Strip client names and figures before any tree leaves your hands, and check your contract allows outside review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written self-review checklist, a named peer reviewer and one engagement where the tree was self-attacked and peer reviewed before analysis began."
                cadence: rolling
              tasks:
                - "Write a five-point checklist for attacking your own tree"
                - "Agree a reciprocal tree review with a trusted peer"
                - "Run the self-review checklist on your active tree @recurring(monthly:15)"
                - "Send a sanitised tree to your peer reviewer and act on the comments"
            - name: Two-hour structure for an urgent executive question
              description: |-
                ## Purpose
                Sometimes the chief executive asks a question on Tuesday morning and wants a view by lunch. A compressed routine, ten minutes on the question, twenty on a two-level tree, an hour on the two branches that matter and thirty minutes on the answer, gives a structured view under pressure instead of a stream of opinion.

                ## Milestones
                1. A written two-hour routine with time boxes for question, tree, analysis and answer.
                2. One rehearsal on a past question with the timings recorded.
                3. A one-page output format: question, tree, two findings, answer, what you would check next.
                4. The routine used on a real urgent request.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A written two-hour routine with time boxes and a one-page output format, rehearsed once and then used on a real urgent request."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a two-hour routine with time boxes for each step"
                - "Rehearse it on a past urgent question and record the timings"
                - "Design a one-page output with question, tree, findings and answer"
                - "Use the routine on the next urgent request you receive"
            - name: Structuring skills self-assessment grid
              description: |-
                ## Purpose
                Structuring is several skills, not one: framing the question, splitting cleanly, keeping levels consistent, prioritising, testing and explaining the tree. Rating yourself on each, asking a manager to rate you too and repeating it twice a year shows which skill holds back the rest.

                ## Milestones
                1. A grid of six structuring skills with a short description of each level.
                2. Your own rating and a manager's rating recorded side by side.
                3. The largest gap between ratings turned into one focus for the next six months.
                4. A second rating six months later to compare.

                ## Notes
                Start from the **Skills matrix** template.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A six-skill structuring grid with self and manager ratings, one chosen focus, and a repeat rating six months later."
                cadence: cyclic
              tasks:
                - "Describe three levels for each of six structuring skills"
                - "Rate yourself on each skill and ask your manager to do the same"
                - "Choose the skill with the biggest gap as your focus"
                - "Repeat the ratings and compare with last time @recurring(quarterly)"
            - name: Value driver tree linked to the client's accounts and KPIs
              description: |-
                ## Purpose
                A value driver tree that starts at the client's chosen value measure (operating profit, cash flow or return on capital) and runs down to the operational KPIs managers control shows exactly how a change on the shop floor reaches the accounts. Building one that reconciles to the published figures gives the team a shared language with the finance director.

                ## Milestones
                1. The top measure agreed with the client's finance team.
                2. A tree from that measure down to operational KPIs, five or more levels deep.
                3. Last year's figures reconciling at the top to the reported accounts.
                4. Each operational KPI linked to a named owner in the client organisation.
                5. Sensitivities showing the value of a one percent move in the main leaves.

                ## Notes
                Agree definitions with finance before building. A driver tree that does not tie to their numbers will be dismissed in the first meeting.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A value driver tree five levels deep that reconciles to the reported accounts, with each KPI owned and one percent sensitivities on the main leaves."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Agree the top value measure and its definition with the finance team"
                - "Build the tree down to operational KPIs at least five levels deep"
                - "Reconcile last year's figures to the reported accounts"
                - "Ask the agent to draft a sensitivity table for a one percent move in each main leaf"
                - "Name an owner in the client organisation for each operational KPI"
            - name: Systems maps for problems with feedback loops
              description: |-
                ## Purpose
                Some problems refuse to sit in a tree because the branches cause each other: price cuts raise volume, which strains service, which raises churn, which prompts more price cuts. A simple causal loop map alongside the tree shows the reinforcing and balancing loops, so the team does not recommend a fix that the system will undo.

                ## Milestones
                1. A causal loop map of the main variables for one problem, with the direction of each link.
                2. Reinforcing and balancing loops labelled and explained in one sentence each.
                3. The loops checked against data or the views of people who run the system.
                4. The tree amended to include branches the map exposed.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A causal loop map with labelled loops, checked against data or operators, and an issue tree amended for branches the map revealed."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the eight to twelve variables that most affect the problem"
                - "Draw the causal links between them with a direction on each"
                - "Label the reinforcing and balancing loops in one sentence each"
                - "Add any branch the map exposed to the issue tree"
            - name: Sizing every branch before analysis starts
              description: |-
                ## Purpose
                Experienced problem solvers put a rough number on each branch before any analysis, so the team knows whether a branch is worth one percent of the answer or forty. Sizing the tree top-down from the key question, with ranges and stated assumptions, focuses effort and makes it obvious when a celebrated branch is too small to matter.

                ## Milestones
                1. The key question expressed as a number or a range at the top of the tree.
                2. Each second-level branch given a value range and the assumption behind it.
                3. The branches ranked by the midpoint of their range.
                4. Any branch under five percent of the total challenged in writing before work starts.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A sized tree with a value range and stated assumption on every second-level branch, ranked, and small branches challenged in writing."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Express the key question as a number or range at the top of the tree"
                - "Put a value range and one assumption on each second-level branch"
                - "Rank branches by the midpoint of their range"
                - "Challenge in writing any branch worth under five percent of the total"
            - name: Pre-mortem on the tree and the emerging answer
              description: |-
                ## Purpose
                Imagining that the final recommendation turned out to be wrong a year later, and asking why, surfaces the branches the team skipped and the assumptions nobody tested. Running a short pre-mortem against the tree before the answer is fixed is one of the cheapest checks against a confident and mistaken conclusion.

                ## Milestones
                1. A 45 minute pre-mortem held with the team before the answer is locked.
                2. A list of reasons the answer could have failed, each traced to a branch or a gap.
                3. The two most plausible failure reasons tested with evidence.
                4. The tree and answer adjusted, or the reasons recorded as accepted risks.

                ## Notes
                Ask people to write their reasons silently first. The most junior person often has the best one and will not volunteer it out loud.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A held pre-mortem with every failure reason traced to the tree, the top two tested and the outcome recorded as changes or accepted risks."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Schedule a 45 minute pre-mortem before the answer is locked"
                - "Ask each person to write silently why the answer failed a year later"
                - "Trace each reason to a branch or a gap in the tree"
                - "Test the two most plausible reasons and record what you find"
            - name: Structuring a where-to-play strategic question
              description: |-
                ## Purpose
                Questions like "which markets should we compete in over the next five years" have no formula and too many options to analyse one by one. A structure that first defines the dimensions of choice (customer, product, geography, channel), then screens the combinations with a few hard criteria, turns an open strategic question into a short list worth testing properly.

                ## Milestones
                1. Three or four dimensions of choice agreed with the strategy owner.
                2. The full set of combinations listed and screened with two or three hard criteria.
                3. A short list of five to eight options, each written as a hypothesis about why it could win.
                4. The tree of evidence needed for each short-listed option drafted.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Agreed dimensions of choice, a screened list of combinations, and five to eight short-listed options each with a hypothesis and an evidence tree."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Agree three or four dimensions of choice with the strategy owner"
                - "List every combination and screen them with two or three hard criteria"
                - "Write a winning hypothesis for each short-listed option"
                - "Draft the evidence tree each short-listed option would need"
            - name: Structuring a problem with sensitive stakeholder politics
              description: |-
                ## Purpose
                Some branches point directly at a powerful person's department or decision, and a tree that names them bluntly can end the work before it starts. Wording branches neutrally, sequencing which branches are shared with whom and agreeing the evidence standard in advance protects both the analysis and the relationship without hiding the issue.

                ## Milestones
                1. Branches that touch sensitive areas identified with the team lead.
                2. Those branches reworded to describe facts to test rather than people to blame.
                3. A plan for which version of the tree is shared with which stakeholder.
                4. The evidence standard for sensitive branches agreed with the sponsor in advance.

                ## Notes
                Neutral wording is not the same as dropping the branch. If the evidence points at a sensitive area, the finding still has to be made.
              priority: low
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "Sensitive branches reworded neutrally, a written sharing plan by stakeholder and an evidence standard for those branches agreed with the sponsor."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Mark branches that point at a particular person or department"
                - "Reword them as facts to test rather than faults to assign"
                - "Decide which version of the tree each stakeholder will see"
                - "Agree with the sponsor what evidence each sensitive branch needs"
---

# Issue Trees and Problem Structuring

Good structuring is the quiet skill behind most consulting work: a key question the decision maker agrees with, a tree whose branches do not overlap and leave nothing out, and a clear view of which branches deserve the team's time. This area is for consultants and other knowledge workers who solve messy problems for a living, and it runs from foundations (the key question, the problem statement, scope and a first MECE tree) through the weekly operating habits, the core tree types and techniques, decisions about prioritising and pruning, the dated moments on an engagement when the tree is drafted, reviewed and rebuilt, versions for an analyst, a manager, an in-house team and a solo consultant, and the advanced work of value driver trees, systems maps and pre-mortems.

The rhythm is a short weekly structuring drill on a real business question, a Friday update of the living tree on your current problem, a Monday branch status check, a monthly peer swap and retrospective, and a quarterly look at the reading list and your skills grid. The Reading queue, Feedback themes, Purchase decision and Skills matrix templates pair with the reading list, review feedback, the choice of drawing tool and the self-assessment. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
