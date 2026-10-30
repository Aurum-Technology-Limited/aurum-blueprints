---
id: product-management.product-team-okrs
name: Product Team OKRs
description: "Quarterly product objectives and key results that measure customer and business outcomes, with baselines, weekly confidence check-ins, honest grading and the habits that keep targets credible."
category: business
version: 1.0.0
tags: [product-management, product-team-okrs, team, manager, okrs, key-results, outcomes, quarterly-planning]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - meeting-notes
    - risk-register
    - purchase-decision
    - one-on-one
  pillars:
    - name: Product Management
      emoji: "🧩"
      description: "Deciding what to build and why: discovery and research, roadmaps and prioritisation, specs and launches, pricing and packaging, product analytics, and the feedback loops that keep a product honest."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Product Team OKRs
          description: "Setting quarterly objectives and key results for product teams that focus on customer and business outcomes rather than lists of features to ship."
          projects:
            - name: Audit of last quarter's goals and outcomes
              description: |-
                ## Purpose
                Before writing a single new objective, look honestly at what the team aimed for last quarter and what actually happened. Most teams new to OKRs find that two thirds of their old goals were features to ship, and that nobody can say whether customers behaved differently afterwards. An hour sorting past goals into outputs and outcomes shows exactly which habit the new OKRs have to break.

                ## Milestones
                1. Every goal the team set last quarter listed, from roadmap commitments to targets in the planning deck.
                2. Each goal labelled as an output (something shipped) or an outcome (a change in customer or business behaviour).
                3. For each outcome goal, the measured result found or marked as never measured.
                4. A one-paragraph summary of the pattern shared with the team.

                ## Notes
                If last quarter had no written goals at all, use the release list instead and ask what each release was meant to change.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A labelled list of last quarter's goals, split into outputs and outcomes with results noted, is shared with the team."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Collect last quarter's planning deck, roadmap and any written goals in one folder"
                - "List each goal and label it output or outcome"
                - "Find the measured result for every outcome goal or mark it unmeasured"
                - "Write a one-paragraph summary of the pattern for the team"
            - name: OKR ownership and cycle length decision
              description: |-
                ## Purpose
                Quarterly is the common default, but a team shipping into an annual enterprise sales cycle or a fortnightly consumer release train may need something different. Deciding who drafts the team's OKRs, who approves them, how long a cycle runs and when it starts, before drafting begins, prevents the usual argument in week two about whose goals these really are.

                ## Milestones
                1. The cycle length chosen, with the reason written in one sentence.
                2. The person who drafts, the people consulted and the approver named.
                3. Start and lock dates for the first cycle aligned with the company planning calendar.
                4. The decision recorded where the team's OKRs will live.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written note naming the OKR cycle length, the drafter, the approver and the first cycle's dates is agreed by the product lead."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check when the company sets and reviews its own goals"
                - "Decide the cycle length and write the one-sentence reason"
                - "Name the drafter, the consulted people and the approver"
                - "Revisit the cycle length and ownership at year end @recurring(yearly)"
            - name: Team OKR writing guide with worked examples
              description: |-
                ## Purpose
                Ask five product managers what a key result is and you will get five answers, which is why OKR sets across one team often look nothing alike. A two-page guide with the team's definitions, a format for objectives and key results, and three before-and-after examples from your own product gives everyone the same starting point.

                ## Milestones
                1. Plain definitions of objective, key result, initiative and health metric agreed.
                2. A standard key result format written: metric, baseline, target, date.
                3. Three before-and-after examples drawn from the team's own past goals.
                4. A short checklist a draft must pass before review.
                5. The guide reviewed by at least one engineer and one designer.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A two-page OKR writing guide with definitions, a key result format, three examples and a review checklist is published to the team."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the agent to draft definitions of objective, key result, initiative and health metric for review"
                - "Pick three past goals from the audit and rewrite each as an outcome key result"
                - "Write a five-point checklist a draft must pass before review"
                - "Ask one engineer and one designer to read the guide and mark anything unclear"
            - name: Strategy inputs pack for OKR drafting
              description: |-
                ## Purpose
                Team OKRs written in a vacuum end up as a wish list. Gathering the company's goals for the period, the product's north star and its current value, last cycle's grades and the strongest customer evidence into one short pack means every draft objective can point at the strategy it serves.

                ## Milestones
                1. Company or department goals for the coming cycle copied in with their owners.
                2. The product's north star metric and its latest value included as context.
                3. Last cycle's OKR grades and the three biggest lessons summarised.
                4. The top five customer problems from research and support listed with evidence.
                5. The pack shared at least a week before drafting starts.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A strategy inputs pack with company goals, the north star value, last cycle's grades and five evidenced customer problems is shared a week before drafting."
                cadence: cyclic
              tasks:
                - "Request the company's goals for the next cycle from leadership"
                - "Copy in the north star metric and its latest value"
                - "Summarise last cycle's grades and lessons in five lines"
                - "List the five most evidenced customer problems from research and support"
                - "Refresh the inputs pack two weeks before each planning window @recurring(quarterly)"
            - name: Single source of truth for team OKRs
              description: |-
                ## Purpose
                OKRs copied into slides, a wiki page and a tracking tool soon drift apart, and the check-in ends up debating which version is right. Choosing one place where the current objectives, key results, owners and confidence live, and linking everything else to it, keeps the team looking at the same numbers.

                ## Milestones
                1. One location chosen for the live OKR set, with edit rights limited to owners.
                2. Every key result showing owner, baseline, target, current value and confidence.
                3. Old copies in slides and documents replaced with a link.
                4. The link pinned in the team's main channel and planning page.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The team's OKRs live in one linked place showing owner, baseline, target, current value and confidence for every key result."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find every copy of the current goals in slides, documents and tools"
                - "Choose the one place the live OKR set will be kept"
                - "Add owner, baseline, target, current value and confidence to each key result"
                - "Replace the old copies with a link and pin it in the team channel"
            - name: Baseline values for every candidate key result
              description: |-
                ## Purpose
                A target of 40 percent means nothing if nobody knows whether today's figure is 12 or 38. Measuring the current value of each candidate metric, over the last eight to twelve weeks so seasonality and noise are visible, is what turns a key result from a guess into a commitment the team can judge itself against.

                ## Milestones
                1. Each candidate key result metric listed with its exact definition.
                2. The current value and the last eight to twelve weeks of history recorded for each.
                3. Normal week-to-week variation noted so a real change can be told from noise.
                4. Metrics with no reliable baseline flagged for a measurement key result instead.

                ## Notes
                Where no baseline exists, a perfectly good first-cycle key result is to establish one, with the measure live by a set week.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every candidate key result has a written definition, a current value and at least eight weeks of history, or is flagged as needing a baseline first."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List each candidate metric with a one-line definition"
                - "Pull eight to twelve weeks of history for each from the analytics tool"
                - "Note the normal weekly range beside each metric"
                - "Flag metrics with no trustworthy baseline and plan how to measure them"
            - name: Measurement check for key result metrics
              description: |-
                ## Purpose
                Key results die quietly when the number turns out to be unreachable without an analyst writing a query every week. Checking with the data or analytics owner that each metric can be pulled, refreshed and trusted before the cycle locks saves a quarter of manual spreadsheets and disputed figures.

                ## Milestones
                1. Each key result mapped to the dashboard, report or query that produces it.
                2. Refresh frequency and the owner of each source confirmed.
                3. Tracking gaps logged as tickets with a target date.
                4. A data owner's sign-off that every metric can be reported weekly.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every key result is mapped to a named data source with a refresh frequency, and the data owner has confirmed weekly reporting is possible."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Map each key result to the dashboard or query that produces it"
                - "Confirm the refresh frequency and source owner for each metric"
                - "Raise tickets for any missing tracking with a target date"
                - "Get written sign-off from the data owner before the OKRs lock"
            - name: First outcome-based OKR set for the quarter
              description: |-
                ## Purpose
                With inputs, baselines and a writing guide in place, the team can draft its first real set. One to three objectives, each with two to four key results that describe a change in customer or business behaviour, is enough; a fourth objective usually means nothing is a priority.

                ## Milestones
                1. Up to three objectives written in plain language, each tied to a company goal.
                2. Two to four key results per objective, each with baseline, target and date.
                3. Initiatives listed separately from key results as bets, not commitments.
                4. The set reviewed against the writing guide checklist.
                5. The approver's sign-off recorded and the set locked.
              priority: high
              deadlineOffsetDays: 35
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A locked OKR set of at most three objectives, each with two to four baselined key results, is approved and published in the team's OKR home."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Draft up to three objectives and link each to a company goal"
                - "Write two to four key results per objective with baseline, target and date"
                - "Move every feature or project idea into a separate initiatives list"
                - "Run the draft through the writing guide checklist"
                - "Book the approval review and lock the set once signed off"
            - name: Rewriting a feature roadmap as outcome key results
              description: |-
                ## Purpose
                Many teams arrive at OKR season with the roadmap already decided and simply paste features in as key results. Taking each roadmap item and asking what customer behaviour it is meant to change, then writing that change as the key result and the feature as one possible initiative, keeps the roadmap useful while making the team accountable for impact.

                ## Milestones
                1. Each roadmap item for the cycle listed with the problem it was meant to solve.
                2. The intended behaviour change written for every item as a measurable statement.
                3. Items with no clear behaviour change challenged or parked.
                4. The resulting outcome key results merged into the draft OKR set.
              priority: medium
              deadlineOffsetDays: 28
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every roadmap item for the cycle is traced to a measurable outcome key result or explicitly parked with a reason."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List each roadmap item due this cycle"
                - "Write the customer behaviour each item is meant to change"
                - "Challenge or park items where no behaviour change can be named"
                - "Merge the resulting outcome key results into the draft set"
            - name: Weekly key result confidence check-in
              description: |-
                ## Purpose
                Setting OKRs takes a day; keeping them alive takes fifteen minutes a week. A short Monday check-in where each owner gives a confidence score out of ten and names one thing blocking progress turns the OKRs into a steering tool, and catches a key result sliding while there is still time to act.

                ## Milestones
                1. A fifteen-minute slot each week with all key result owners.
                2. Each owner giving a confidence score and one blocker per key result.
                3. Confidence history kept so the trend is visible over the cycle.
                4. At least one action agreed whenever confidence drops by two points or more.

                ## Notes
                Keep status reporting out of the meeting. Owners update numbers beforehand so the time goes on blockers and decisions.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly check-in is held for every week of the cycle, with confidence recorded for each key result and an action logged on every drop of two points."
                cadence: rolling
              tasks:
                - "Book a recurring fifteen-minute check-in with all key result owners"
                - "Ask each owner to post a confidence score and one blocker before the meeting"
                - "Run the check-in and record confidence for each key result @recurring(weekly:mon)"
                - "Agree an action whenever a confidence score drops by two or more"
            - name: Monthly OKR progress review with the product lead
              description: |-
                ## Purpose
                Weekly check-ins are for the team; once a month the product lead or head of product needs a slightly wider view of trends, risks and whether any key result should change. A 45-minute review with a fixed agenda keeps leadership informed without turning every week into a status meeting.

                ## Milestones
                1. A fixed agenda covering trends, at-risk key results, decisions needed and help wanted.
                2. Each key result's trend shown over the month, not just the latest value.
                3. Decisions and changes from each review written down.
                4. Three consecutive monthly reviews held in a cycle.

                ## Notes
                Start from the **Meeting notes** template.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three monthly reviews are held in each cycle, each with notes recording trends, at-risk key results and decisions made."
                cadence: rolling
              tasks:
                - "Agree the four-part agenda with the product lead"
                - "Prepare a one-page trend view of every key result"
                - "Hold the review and record decisions in the meeting notes @recurring(monthly:12)"
                - "Share the decisions with the team the same day"
            - name: End-of-quarter OKR grading session
              description: |-
                ## Purpose
                Grades only teach something if they are given honestly and the reasons are written down. A 90-minute session in the final week of the cycle, where each owner proposes a score with evidence and the team agrees it, produces the record next quarter's planning depends on.

                ## Milestones
                1. Every key result scored on the agreed scale with its final value.
                2. One sentence per key result on why it landed where it did.
                3. Objectives summarised as met, partly met or missed.
                4. Grades and reasons published in the OKR home within a week of cycle end.
              priority: high
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "Every key result from the cycle is graded with its final value and a written reason, published within a week of the cycle ending."
                cadence: cyclic
              tasks:
                - "Ask owners to pull final values for each key result before the session"
                - "Hold the grading session in the last week of the cycle @recurring(quarterly)"
                - "Write one sentence per key result on why it landed where it did"
                - "Publish the grades and reasons in the OKR home"
            - name: Quarterly retrospective on how the OKR process ran
              description: |-
                ## Purpose
                Grading judges the goals; this judges the machinery. Thirty minutes after grading on what made drafting slow, which check-ins were skipped and which key results were impossible to measure gives the team one or two concrete process changes to try next cycle instead of repeating the same friction.

                ## Milestones
                1. Feedback gathered from everyone who owned or contributed to a key result.
                2. The three biggest points of friction named.
                3. One or two process changes chosen for the next cycle.
                4. Last cycle's changes checked and marked kept, adjusted or dropped.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A retrospective is held each cycle with at least one process change chosen and the previous cycle's changes reviewed."
                cadence: cyclic
              tasks:
                - "Send a three-question survey on the OKR process to the team"
                - "Run a 30-minute retrospective after grading @recurring(quarterly)"
                - "Pick one or two process changes and add them to the writing guide"
                - "Check whether last cycle's changes were kept"
            - name: Key result tracking log
              description: |-
                ## Purpose
                Confidence scores mean more when the actual numbers sit beside them. A simple log with each key result's baseline, target and weekly value, updated before Monday's check-in, shows the shape of progress and makes the end-of-quarter grade a matter of reading the last row.

                ## Milestones
                1. A log with one row per week and one column per key result.
                2. Baseline and target at the top of each column.
                3. Values entered weekly for a full cycle with no gaps.
                4. A simple chart of each key result's progress against a straight line to target.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A tracking log holds weekly values for every key result across a full cycle, with no missing weeks."
                cadence: rolling
              tasks:
                - "Create the tracking log from the metrics log template"
                - "Add baseline and target at the top of each key result column"
                - "Enter each key result's latest value before the check-in @recurring(weekly:fri)"
                - "Add a progress chart against a straight line to target"
            - name: Mid-quarter OKR health review
              description: |-
                ## Purpose
                Halfway through a cycle, a key result that has not moved is telling you something: the target was wrong, the bet was wrong or the work never started. A structured review at week six decides for each one whether to persist, change the initiative or formally reset the target, so nothing is quietly abandoned.

                ## Milestones
                1. Every key result reviewed against where it should be at the halfway mark.
                2. A persist, pivot or reset decision recorded for each off-track key result.
                3. Any reset approved by the same person who approved the original set.
                4. The team told what changed and why within two days.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A mid-cycle review is held each cycle with a recorded persist, pivot or reset decision for every off-track key result."
                cadence: cyclic
              tasks:
                - "Compare each key result's current value with the halfway mark"
                - "Hold the mid-cycle review in week six @recurring(quarterly)"
                - "Record a persist, pivot or reset decision for each off-track key result"
                - "Tell the team what changed and why"
            - name: Quarterly OKR planning calendar
              description: |-
                ## Purpose
                Drafting squeezed into the last three days of a quarter produces rushed, feature-shaped OKRs. A planning calendar that fixes the inputs date, drafting window, peer review, approval and lock date three to four weeks before the cycle starts gives the team room to think and leadership a predictable moment to weigh in.

                ## Milestones
                1. Dates fixed for inputs, drafting, peer review, approval and lock.
                2. The calendar aligned with the company's planning dates.
                3. Invites sent to everyone involved at least a month ahead.
                4. Two consecutive cycles locked before day one.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two consecutive OKR cycles are locked before their first day, following a published planning calendar."
                cadence: cyclic
              tasks:
                - "Count back four weeks from the next cycle start and set each date"
                - "Check the dates against the company planning calendar"
                - "Send invites for drafting, review and approval @recurring(quarterly)"
                - "Note whether the set locked on time at each cycle start"
            - name: Change log for mid-cycle OKR edits
              description: |-
                ## Purpose
                Targets that move silently destroy trust in the whole system: a key result reset from 30 to 15 percent in week nine and then graded as met teaches the team that grades are negotiable. Logging every change with the date, the old and new values, the reason and the approver keeps the record honest.

                ## Milestones
                1. A change log with date, key result, old value, new value, reason and approver.
                2. A rule agreed that no key result changes without an entry.
                3. Every change in the cycle logged.
                4. The log read out at the grading session.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every change to the cycle's key results is recorded with date, old and new values, reason and approver, and reviewed at grading."
                cadence: rolling
              tasks:
                - "Create a change log with date, key result, old and new value, reason and approver"
                - "Agree with the approver that no change happens without an entry"
                - "Check the log against the live OKR set for unlogged edits @recurring(monthly:25)"
                - "Read the log aloud at the grading session"
            - name: Linking sprint work to key results
              description: |-
                ## Purpose
                If nobody can say which key result a sprint's work serves, the OKRs and the backlog are running as two separate plans. Tagging tickets and epics with the key result they target, and checking monthly what share of shipped work was linked, shows whether the team's effort is actually going where its goals say.

                ## Milestones
                1. A key result tag or field added to the team's ticket tracker.
                2. Every epic in the cycle tagged with a key result or marked as maintenance.
                3. The share of completed work linked to key results reported monthly.
                4. A target share agreed, for example two thirds of capacity.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every epic is tagged to a key result or maintenance, and the share of completed work tied to key results is reported each month."
                cadence: rolling
              tasks:
                - "Add a key result field or label to the ticket tracker"
                - "Tag each open epic with its key result or mark it maintenance"
                - "Report the share of completed work linked to key results @recurring(monthly:8)"
                - "Agree a target share of capacity for key result work with the team"
            - name: Monthly OKR update for the wider company
              description: |-
                ## Purpose
                Sales, support and leadership hear about product goals once at the start of the quarter and then not again until results arrive. A short written update each month, with each key result's progress, confidence and one sentence of context, keeps the rest of the company informed without a meeting.

                ## Milestones
                1. A fixed format: objective, key result, current value, confidence, one line of context.
                2. The update sent on the same day each month.
                3. At least one learning or surprise included in every update.
                4. A reader asked for feedback after the second update.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written OKR update in a fixed format reaches the wider company every month of the cycle."
                cadence: rolling
              tasks:
                - "Agree the update format and distribution list with the product lead"
                - "Ask the agent to draft the update from the tracking log for you to edit"
                - "Send the monthly OKR update to the wider company @recurring(monthly:28)"
                - "Ask two readers from sales or support what they would change"
            - name: Outcomes versus outputs in key results
              description: |-
                ## Purpose
                Shipping is an output; customers completing a task faster, coming back more often or paying more are outcomes. Learning to tell the two apart quickly, and to write key results at the right level between pure activity and a lagging company number, is the single skill that most changes the quality of a team's OKRs.

                ## Milestones
                1. The difference between activity, output, outcome and impact explained in your own words.
                2. Ten real key results from past cycles sorted into those four levels.
                3. Five output key results rewritten as outcomes the team can influence.
                4. The rewrites reviewed by a peer or manager.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten past key results are sorted into activity, output, outcome and impact, with five rewritten as outcomes and reviewed by a peer."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read one well-regarded book chapter or article on outcomes over outputs"
                - "Sort ten past key results into activity, output, outcome and impact"
                - "Rewrite five output key results as outcomes"
                - "Ask a peer to review the rewrites"
            - name: Leading indicators that work as key results
              description: |-
                ## Purpose
                Revenue and retention move too slowly to steer a quarter by, while clicks and page views move fast but mean little. Finding the leading indicators in between, behaviours that predict the lagging result and that the team can shift within weeks, gives key results you can actually manage week to week.

                ## Milestones
                1. Two lagging results the team cares about chosen, such as retention or expansion revenue.
                2. Three candidate leading behaviours listed for each.
                3. Historic data checked for whether each behaviour actually predicts the lagging result.
                4. One or two validated leading indicators adopted as key results.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least one leading indicator, checked against historic data for its link to a lagging result, is adopted as a key result."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Choose two lagging results the team wants to influence"
                - "List three behaviours that might predict each one"
                - "Ask an analyst to check which behaviours actually predicted the result last year"
                - "Adopt the strongest leading indicator as a key result next cycle"
            - name: Committed versus aspirational OKRs
              description: |-
                ## Purpose
                Some objectives are promises, such as meeting a compliance deadline, and some are stretches, such as doubling weekly active teams, and grading them the same way punishes ambition or excuses failure. Understanding the two types, and labelling each objective before the cycle starts, sets the right expectations for the team and for leadership.

                ## Milestones
                1. The difference between committed and aspirational OKRs written down with the expected grade for each.
                2. Each current objective labelled as one or the other.
                3. Leadership told which objectives are stretches and what a good grade looks like.
                4. The label shown beside each objective in the OKR home.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every objective in the cycle is labelled committed or aspirational, with expected grades shared with leadership."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read how committed and aspirational OKRs are graded differently"
                - "Label each current objective committed or aspirational"
                - "Explain the labels and expected grades to leadership"
                - "Show the label beside each objective in the OKR home"
            - name: Setting targets that are ambitious and credible
              description: |-
                ## Purpose
                Targets picked from the air are either sandbagged or impossible, and the team learns to ignore both. Grounding each target in the baseline, the normal variation and what similar changes achieved before, then deliberately setting the stretch on top, makes a 0.7 grade meaningful rather than lucky.

                ## Milestones
                1. A method written for setting targets from baseline, variation and past effect sizes.
                2. Effect sizes from three past launches or experiments collected as reference points.
                3. Every target in the next cycle set with its reasoning in one line.
                4. Targets compared with results at grading to calibrate the method.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every target in the next cycle has a one-line rationale based on baseline and past effect sizes, compared with the result at grading."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Collect the measured effect of three past launches or experiments"
                - "Write a short method for setting a target from baseline and variation"
                - "Add a one-line rationale beside every target in the draft set"
                - "Compare targets with results at grading and note what to adjust"
            - name: Health metrics and counter-metrics beside the OKRs
              description: |-
                ## Purpose
                A team chasing a sign-up key result can quietly wreck activation, support load or page speed. Naming a small set of health metrics the team must not break, with thresholds, and pairing risky key results with a counter-metric, stops one goal being hit at the expense of everything else.

                ## Milestones
                1. Three to five health metrics chosen, such as reliability, support tickets or churn.
                2. A threshold set for each that triggers a conversation.
                3. Every key result checked for a likely side effect and paired with a counter-metric where needed.
                4. Health metrics shown alongside the OKRs in check-ins.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three to five health metrics with thresholds, and a counter-metric for each risky key result, are shown in every check-in."
                cadence: rolling
              tasks:
                - "List three to five health metrics the team must not break"
                - "Set a threshold for each that triggers a conversation"
                - "Pair each risky key result with a counter-metric"
                - "Check every health and counter-metric against its threshold @recurring(monthly:16)"
            - name: Comparing ways to score key results
              description: |-
                ## Purpose
                Teams grade on a 0 to 1 scale, as a percentage of target, as red, amber and green, or simply as hit and missed, and each choice changes behaviour. Comparing the options on last cycle's results shows which one the team will apply consistently and which hides more than it reveals.

                ## Milestones
                1. Four scoring methods described with their strengths and weaknesses.
                2. Last cycle's key results scored with each method.
                3. The differences between methods noted, including any key result that looks very different.
                4. One method chosen and written into the writing guide.
              priority: low
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "One scoring method is chosen after testing four on last cycle's key results, and written into the team's OKR guide."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a short description of four common scoring methods"
                - "Score last cycle's key results with each method"
                - "Note which key results look very different under each"
                - "Write the chosen method into the OKR writing guide"
            - name: Facilitating an OKR drafting workshop
              description: |-
                ## Purpose
                Drafting OKRs in a shared document by comment thread takes weeks; a well-run two-hour workshop can produce a strong first draft. Learning to facilitate one, with silent idea generation, clustering, a vote and a first pass at key results, is a skill any product manager or engineering lead can pick up in a single cycle.

                ## Milestones
                1. A two-hour agenda with timed sections for objectives, key results and checks.
                2. Pre-reading sent: the inputs pack and the writing guide.
                3. One workshop run with the team, producing a draft set.
                4. Feedback from participants used to revise the agenda.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One two-hour drafting workshop is run with the team, producing a draft OKR set, and the agenda is revised from participant feedback."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a timed two-hour agenda for the drafting workshop"
                - "Send the inputs pack and writing guide as pre-reading"
                - "Run the workshop and capture the draft set"
                - "Ask participants what to change and revise the agenda"
            - name: Cutting the OKR set to three objectives or fewer
              description: |-
                ## Purpose
                Five objectives with four key results each is twenty commitments, which means none of them get real attention. Forcing the set down to three or fewer, and writing what was deliberately left out, is where the hard prioritisation conversation actually happens.

                ## Milestones
                1. All draft objectives ranked by contribution to company goals.
                2. The set cut to three or fewer objectives and no more than ten key results in total.
                3. A not-this-cycle list written for what was removed, with reasons.
                4. The cut set and the not-this-cycle list shared with stakeholders.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The cycle's OKR set holds at most three objectives and ten key results, with a published list of what was left out and why."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Rank every draft objective by its link to company goals"
                - "Cut to three objectives and no more than ten key results"
                - "Write a not-this-cycle list with a reason for each removal"
                - "Share the cut set and the list with stakeholders"
            - name: Keeping business-as-usual work out of the OKRs
              description: |-
                ## Purpose
                Bug fixing, on-call, security patches and customer escalations take a large share of capacity and rarely belong in OKRs, yet leaving them invisible makes key results look neglected. Measuring that share honestly and reserving it explicitly lets the OKRs describe change while the run work is planned in the open.

                ## Milestones
                1. Last cycle's capacity split into run work and change work from the ticket tracker.
                2. A reserved share for run work agreed with engineering.
                3. Run work moved into health metrics rather than key results.
                4. Leadership told what capacity is actually left for OKR work.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A reserved capacity share for business-as-usual work is agreed with engineering and stated alongside the cycle's OKRs."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Measure how much of last cycle's capacity went to run work"
                - "Agree a reserved share for run work with the engineering lead"
                - "Move any run-work goals out of the key results into health metrics"
                - "State the remaining OKR capacity in the approval review"
            - name: Dependency map for key results that need other teams
              description: |-
                ## Purpose
                A key result that depends on the platform team's API or a marketing campaign is only half in your control. Mapping each dependency, the team and person who owns it, and whether they have committed to it in their own plan, exposes the key results most likely to fail for reasons outside the room.

                ## Milestones
                1. Every key result checked for work it needs from another team.
                2. Each dependency listed with the owning team, contact and date needed.
                3. Written confirmation that each dependency appears in the other team's plan.
                4. Uncommitted dependencies logged as risks with a fallback.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Every cross-team dependency behind the cycle's key results is listed with an owner and date, and confirmed in that team's plan or logged as a risk."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask each key result owner what work they need from other teams"
                - "List each dependency with the owning team, contact and needed date"
                - "Get confirmation that each dependency is in the other team's plan"
                - "Log uncommitted dependencies in the risk register with a fallback"
            - name: Choosing an OKR tracking tool or spreadsheet
              description: |-
                ## Purpose
                Dedicated OKR software promises alignment views and nudges, while a well-kept spreadsheet costs nothing and everyone already knows it. Comparing the two against what the team actually needs, such as ticket tracker integration, automatic metric updates, permissions and cost per seat, avoids buying a tool that nobody opens after week three.

                ## Milestones
                1. Five must-have requirements written from the team's real check-in and grading needs.
                2. A spreadsheet option and two or three tools compared on the same criteria.
                3. A two-week trial run with real key results on the leading option.
                4. A decision recorded with cost and an owner for the setup.

                ## Notes
                Start from the **Purchase decision** template. A spreadsheet is the right answer for many teams in their first two cycles.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A tracking option is chosen against five written requirements after a two-week trial, with cost and setup owner recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write five must-have requirements for tracking OKRs"
                - "Compare a spreadsheet with two or three dedicated tools"
                - "Trial the leading option for two weeks with real key results"
                - "Record the decision, the cost and who owns the setup"
            - name: Removing vanity key results from the set
              description: |-
                ## Purpose
                Registered users, page views and features shipped can all rise steadily while customers get no more value. Auditing the current key results for ones that can rise without the product getting better, and replacing them with measures of real use, keeps the team from celebrating numbers that do not matter.

                ## Milestones
                1. Each key result tested with one question: could this rise while customers are no better off.
                2. Vanity measures identified and their owners told why.
                3. Each replaced with a measure of active use, success or retention.
                4. The revised key results approved before the cycle locks.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every key result that could rise without customers benefiting is replaced with a measure of real use and approved before the cycle locks."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Test each key result by asking whether it could rise while customers are no better off"
                - "Mark the vanity measures and explain why to their owners"
                - "Replace each with a measure of active use, success or retention"
                - "Get the revised key results approved before lock"
            - name: One shared OKR set for product, design and engineering
              description: |-
                ## Purpose
                When the product manager has adoption goals, engineering has velocity goals and design has a research quota, the three leads pull in different directions all quarter. Writing one set the trio co-owns, with each lead owning at least one key result, makes trade-offs a shared problem rather than a negotiation.

                ## Milestones
                1. Existing separate goals for product, design and engineering listed side by side.
                2. Conflicts and duplicates between them named.
                3. One combined set drafted with at least one key result owned by each lead.
                4. Remaining discipline-specific goals kept as health metrics or personal development goals.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The product, design and engineering leads co-own one OKR set, with each owning at least one key result."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Put the separate product, design and engineering goals side by side"
                - "Mark where they conflict or duplicate"
                - "Draft one combined set with a key result owned by each lead"
                - "Move remaining discipline goals into health metrics or development plans"
            - name: Separating OKR grades from performance reviews
              description: |-
                ## Purpose
                If missing a stretch key result costs someone their rating, the team will sandbag every target from the next cycle on. Agreeing with HR and the managers involved that OKR grades are not used as individual performance scores, and writing that down, protects the honesty the whole system depends on.

                ## Milestones
                1. Current practice checked: whether managers cite OKR grades in reviews.
                2. A written principle agreed with HR on how OKRs may and may not feed reviews.
                3. The principle shared with every product team member.
                4. Review templates checked for OKR score fields that contradict it.

                ## Notes
                Contribution to outcomes and quality of thinking can still count in reviews. The point is that the grade itself is not the rating.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written principle, agreed with HR, separating OKR grades from individual ratings is shared with the team and reflected in review templates."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask managers whether OKR grades currently appear in performance reviews"
                - "Draft the principle on how OKRs may and may not feed reviews"
                - "Agree the principle with HR and the head of product"
                - "Check each year's review template for fields that contradict it @recurring(yearly)"
            - name: Bottom-up key result proposals from the team
              description: |-
                ## Purpose
                Engineers and designers often see the best levers on a metric, but OKRs handed down from above leave no room for them. Inviting every team member to propose one key result, with a baseline and a reason, before drafting closes produces better ideas and far more ownership of the final set.

                ## Milestones
                1. A simple proposal format sent to the whole team before drafting.
                2. Proposals collected from at least half the team.
                3. Each proposal considered and its outcome explained to the person who made it.
                4. At least one team-proposed key result in the final set.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least half the team proposes a key result before drafting closes, and every proposer hears what happened to theirs."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Send a one-paragraph proposal format to every team member"
                - "Collect proposals before the drafting workshop"
                - "Explain to each proposer what happened to their key result"
                - "Count how many team proposals made the final set"
            - name: Learning key results for discovery-heavy cycles
              description: |-
                ## Purpose
                When a team is exploring a new market or problem, it often cannot know which metric to move yet, and forcing an outcome target produces fiction. Writing key results about validated learning instead, such as a riskiest assumption tested or a build decision taken on evidence, keeps discovery accountable without pretending to certainty.

                ## Milestones
                1. The cycle's riskiest assumptions listed and ranked.
                2. Two or three learning key results written, each ending in a decision.
                3. Evidence thresholds set in advance for each decision.
                4. Decisions recorded at grading with the evidence behind them.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A discovery cycle runs on two or three learning key results, each ending in a recorded decision backed by evidence thresholds set in advance."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List and rank the riskiest assumptions for the cycle"
                - "Write two or three learning key results that each end in a decision"
                - "Set the evidence thresholds for each decision in advance"
                - "Record each decision and its evidence at grading"
            - name: OKR planning offsite for the product team
              description: |-
                ## Purpose
                Half a day away from the backlog, with the inputs pack read in advance, is often where the hardest OKR trade-offs finally get made. Planning the offsite properly, with a clear goal of leaving with a draft set and a named owner for every key result, stops it becoming a pleasant day with no output.

                ## Milestones
                1. Date, room and attendees fixed at least three weeks ahead.
                2. An agenda with a single stated output: a draft OKR set with owners.
                3. Pre-reading sent a week before.
                4. The draft set written up and shared within two days of the offsite.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An offsite is held that ends with a draft OKR set naming an owner for every key result, shared within two days."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Fix the date, room and attendee list for the offsite"
                - "Write an agenda that ends with a draft set and named owners"
                - "Send the inputs pack and writing guide a week before"
                - "Write up and share the draft set within two days"
            - name: Presenting product OKRs to the leadership team
              description: |-
                ## Purpose
                Leadership approval is where a carefully reasoned set either earns trust or gets rewritten in the room. A ten-minute presentation that shows the link to company goals, the baselines behind each target, what was left out and what the team needs from others gives leaders the context to challenge the right things.

                ## Milestones
                1. A short deck or document covering objectives, key results with baselines, what was cut and dependencies.
                2. A rehearsal with a peer who plays a sceptical executive.
                3. Questions and challenges from the session written down.
                4. The final approved set published within a week.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The OKR set is presented to leadership, challenges are recorded and the approved set is published within a week."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Build a short deck covering objectives, baselines, cuts and dependencies"
                - "Rehearse with a peer playing a sceptical executive"
                - "Write down every question and challenge raised in the session"
                - "Publish the approved set within a week"
            - name: Annual product objectives for the year ahead
              description: |-
                ## Purpose
                Quarterly OKRs drift when there is no longer horizon above them, and each quarter restarts the argument about direction. Setting two or three annual product objectives once a year, aligned with company strategy, gives every quarter's key results something to build towards.

                ## Milestones
                1. Last year's quarterly grades reviewed together for the pattern.
                2. Two or three annual objectives drafted from company strategy and the product vision.
                3. Indicative annual key results set that quarterly ones can ladder up to.
                4. The annual objectives approved and shown above each quarter's set.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Two or three approved annual product objectives are published and every quarterly set in the year links to at least one."
                cadence: cyclic
              tasks:
                - "Review the last four quarters' grades side by side"
                - "Draft two or three annual objectives from company strategy"
                - "Set indicative annual key results for the quarters to build on"
                - "Start the annual objectives process two months before year end @recurring(yearly)"
            - name: End-of-quarter OKR results showcase
              description: |-
                ## Purpose
                Results that are only graded in a spreadsheet teach nothing to the rest of the company. A 30-minute showcase at the end of each cycle, where owners share what moved, what did not and what they learned, celebrates honest misses as much as hits and spreads the lessons.

                ## Milestones
                1. A 30-minute slot booked in the company's regular forum.
                2. Each objective presented in two minutes: result, reason, lesson.
                3. At least one missed key result discussed openly.
                4. Slides or notes shared afterwards with the grades.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A showcase is held each cycle covering every objective's result and lesson, including at least one honest miss."
                cadence: cyclic
              tasks:
                - "Book a 30-minute slot in the company forum"
                - "Ask each owner for a two-minute summary of result, reason and lesson"
                - "Run the showcase and share the notes afterwards @recurring(quarterly)"
            - name: Introducing OKRs to a team new to them
              description: |-
                ## Purpose
                Teams that have only ever worked from a feature roadmap will hear OKRs as more reporting unless the first session shows why they help. A 90-minute introduction with a real example from your own product, the writing guide and an honest account of what will change for each role starts the first cycle with understanding rather than suspicion.

                ## Milestones
                1. A 90-minute session planned with one worked example from the team's own product.
                2. What changes for product managers, engineers and designers spelled out.
                3. Concerns raised in the session recorded with answers.
                4. A follow-up check after the first month on how it is landing.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An introduction session is held with every team member attending, concerns are recorded and answered, and a one-month follow-up is done."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Prepare a 90-minute session with one real example from your product"
                - "Write what changes for each role in three bullet points"
                - "Record every concern raised and answer it in writing"
                - "Check in with the team a month later on how OKRs are landing"
            - name: Inheriting a team's OKRs mid-quarter
              description: |-
                ## Purpose
                Joining or taking over a team halfway through a cycle means inheriting key results you did not write, often with no notes on why the targets were chosen. Spending the first two weeks understanding the reasoning, the current confidence and the dependencies, before changing anything, earns credibility and avoids resetting goals the team still believes in.

                ## Milestones
                1. One conversation held with each key result owner and with the previous product manager if possible.
                2. The reasoning behind each target written down.
                3. A current confidence score agreed for each key result.
                4. Any proposed change raised through the normal change log, not made silently.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Within three weeks of taking over, the reasoning and current confidence for every inherited key result are written down and any change is logged."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Book a 30-minute conversation with each key result owner"
                - "Ask the previous product manager why each target was chosen"
                - "Write down the reasoning and current confidence for every key result"
                - "Raise any change you want through the change log"
            - name: Coaching product managers on their key results
              description: |-
                ## Purpose
                Managers of product managers often look at OKRs only at approval and grading, which is too late to help. A short OKR segment in each monthly one-to-one, asking what the key result is telling them, what they would do differently and where they need air cover, builds the judgement that makes future sets stronger.

                ## Milestones
                1. A standing OKR segment added to each product manager's one-to-one.
                2. Three coaching questions agreed and used every month.
                3. One improvement each product manager wants to make to their key result writing recorded.
                4. Progress on that improvement reviewed at the end of the cycle.

                ## Notes
                Start from the **1:1** template.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every product manager reporting to you has a monthly OKR coaching segment in their one-to-one, with one improvement tracked per cycle."
                cadence: rolling
              tasks:
                - "Add an OKR segment to each product manager's one-to-one"
                - "Write three coaching questions to use every month"
                - "Use the questions in each product manager's one-to-one @recurring(monthly:5)"
                - "Review each person's chosen improvement at the end of the cycle"
            - name: First OKRs for a small product team
              description: |-
                ## Purpose
                Five to ten people do not need cascades, tooling or scoring debates; they need one objective everyone can repeat from memory. Starting with a single objective and two or three key results, tracked in a shared document and discussed in an existing weekly meeting, builds the habit before any process is added.

                ## Milestones
                1. One objective written that every team member can say from memory.
                2. Two or three key results with baselines in a shared document.
                3. Progress discussed in an existing weekly meeting rather than a new one.
                4. A decision at cycle end on whether to add a second objective.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A small team runs one full cycle on a single objective with two or three key results, then records whether to expand."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write one objective the whole team can repeat from memory"
                - "Add two or three baselined key results to a shared document"
                - "Add a five-minute OKR slot to an existing weekly meeting"
                - "Decide at cycle end whether to add a second objective"
            - name: Resetting OKRs after a reorganisation or pivot
              description: |-
                ## Purpose
                Reorganisations, strategy changes or the loss of a big customer can make half the current key results irrelevant overnight. Formally closing the old set, grading what can be graded and writing a short replacement set within two weeks keeps the team pointed somewhere instead of drifting until next quarter.

                ## Milestones
                1. The old set closed with partial grades and a note on why it ended early.
                2. New company priorities confirmed with leadership in writing.
                3. A replacement set of one or two objectives drafted and approved within two weeks.
                4. Owners reassigned to match the new team structure.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "After a reorganisation or pivot, the old set is closed with partial grades and an approved replacement set is in place within two weeks."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Close the current set and record partial grades with a reason"
                - "Confirm the new priorities with leadership in writing"
                - "Draft one or two replacement objectives and get them approved"
                - "Reassign key result owners to the new structure"
            - name: OKRs for a platform or internal tools team
              description: |-
                ## Purpose
                Platform teams serve other engineers, so their outcomes are things like time to ship a new service, incidents caused by shared components or adoption of a recommended paved path. Defining the internal customers and the behaviour change you want from them gives the team key results as meaningful as any customer-facing squad's.

                ## Milestones
                1. Internal customer teams listed with what they need from the platform.
                2. Two or three outcome measures chosen, such as lead time or adoption of shared components.
                3. Baselines gathered with the help of the teams being served.
                4. One full cycle graded and shared with internal customers.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A platform team completes a cycle on key results that measure internal customers' outcomes, graded and shared with those teams."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the internal teams the platform serves and what each needs"
                - "Choose two or three outcome measures for those teams"
                - "Gather baselines with help from the served teams"
                - "Share the graded results with internal customers at cycle end"
            - name: Running OKRs across time zones without extra meetings
              description: |-
                ## Purpose
                Teams spread across five or more time zones cannot hold a live weekly check-in without someone joining at midnight. Moving updates to a written format, with a fixed posting day, a short template and a live session only when confidence drops sharply, keeps the rhythm without burning anyone out.

                ## Milestones
                1. A written update template covering value, confidence, blocker and help needed.
                2. A fixed posting day and a named reader responsible for summarising.
                3. A rule for when a live session is called.
                4. Eight consecutive weeks of written updates with no gaps.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weeks of written OKR updates are posted on the agreed day, with live sessions called only under the agreed rule."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write a four-line update template for key result owners"
                - "Agree the posting day and who summarises each week"
                - "Set the rule for when a live session is called"
                - "Post the summary of each week's written updates to the team"
            - name: Aligning OKRs across several product teams without cascading
              description: |-
                ## Purpose
                Cascading company goals down level by level takes weeks and leaves the bottom teams with tiny slices of someone else's key result. Asking each team to draft its own set against shared company objectives, then reviewing them together for gaps, overlaps and conflicts, gives a head of product alignment without the bureaucracy.

                ## Milestones
                1. Each team's draft set collected on one page against the company objectives.
                2. Gaps, overlaps and conflicting key results marked.
                3. A one-hour alignment session held with all team leads.
                4. A shared view published showing which teams contribute to which company objective.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every product team's OKR set is mapped to company objectives on one page, with gaps and conflicts resolved in an alignment session."
                cadence: cyclic
              tasks:
                - "Collect every team's draft set on one page against the company objectives"
                - "Mark gaps, overlaps and conflicting key results"
                - "Hold the cross-team alignment session in each planning window @recurring(quarterly)"
                - "Publish the map of teams to company objectives"
            - name: OKR quality scorecard across the product organisation
              description: |-
                ## Purpose
                Once ten or more teams run OKRs, quality varies enormously and nobody can see it. A light scorecard applied to every set each cycle, covering outcome share, baselines present, objective count, check-in attendance and grades published on time, shows a head of product or product operations lead where coaching is needed.

                ## Milestones
                1. Five scorecard criteria agreed with product leads.
                2. Every team's set scored at the start of the cycle.
                3. Results shared privately with each lead and in aggregate with the organisation.
                4. Scores compared across three cycles to see whether quality is improving.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every team's OKR set is scored on five agreed criteria each cycle, with three cycles compared for trend."
                cadence: cyclic
              tasks:
                - "Agree five quality criteria with the product leads"
                - "Score every team's set at the start of the cycle @recurring(quarterly)"
                - "Share each score privately with the team lead"
                - "Ask the agent to summarise trends across the last three cycles' scores"
            - name: Checking whether hit key results moved company results
              description: |-
                ## Purpose
                The real test of a team's OKRs is whether hitting them made a difference to revenue, retention or customer outcomes the company cares about. Looking back over four to eight cycles at which key results were hit and whether the company metrics moved afterwards reveals which kinds of key result are worth setting and which are comfortable busywork.

                ## Milestones
                1. Four to eight cycles of graded key results gathered in one table.
                2. Each hit key result paired with the company metric it was meant to influence.
                3. Movement in that metric over the following one or two quarters recorded.
                4. Two or three findings written up on which key result types predicted impact.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written analysis of four or more cycles shows which hit key results were followed by movement in company metrics, with two or three findings."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Gather four to eight cycles of graded key results in one table"
                - "Pair each hit key result with the company metric it targeted"
                - "Ask an analyst to pull that metric's movement in the following two quarters"
                - "Write two or three findings and share them with product leads"
            - name: OKR playbook for the product organisation
              description: |-
                ## Purpose
                Eventually the writing guide, the planning calendar, the scoring method, the change rules and the lessons from several cycles need to live in one place that a new team or a new head of product can pick up. A concise playbook, owned and reviewed each year, keeps the practice consistent as people come and go.

                ## Milestones
                1. Writing guide, calendar, scoring method, change rules and review cadence assembled in one document.
                2. Lessons from at least three cycles added as practical dos and don'ts.
                3. An owner named and a yearly review date set.
                4. The playbook used to onboard at least one new team or product manager.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A product OKR playbook with an owner and yearly review date is published and has been used to onboard at least one new team or product manager."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the guides, calendars and rules the team already uses"
                - "Combine them into one playbook with a contents page"
                - "Add dos and don'ts drawn from at least three cycles of lessons"
                - "Review and update the playbook with the year's lessons @recurring(yearly)"
---

# Product Team OKRs

This area is for product teams and the managers who lead them, and for anyone tired of OKRs that are really feature lists with percentages attached. It starts with the foundations (an audit of past goals, ownership and cycle length, a writing guide, baselines and a first outcome-based set), then the operating rhythms that keep key results alive, the skills behind good targets, improvements to the set itself, the planning events, situations such as inheriting a team or working across time zones, and finally the work of running OKRs across a whole product organisation.

What repeats is a Monday confidence check-in and a Friday log update, a monthly review with the product lead and a monthly company update, mid-cycle and end-of-cycle reviews each quarter, and a yearly look at annual objectives, ownership and the playbook. The Metrics log, Meeting notes, Risk register, Purchase decision and 1:1 templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
