---
id: product-management.feature-prioritisation-frameworks
name: Feature Prioritisation Frameworks
description: "A defensible ranking of competing ideas: agreed criteria and decision rights, honest reach, impact, confidence and effort scores, a monthly re-score and trade-offs explained openly."
category: business
version: 1.0.0
tags: [product-management, feature-prioritisation-frameworks, team, manager, founder, rice, scoring, trade-offs]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - meeting-notes
    - board-meeting
  pillars:
    - name: Product Management
      emoji: "🧩"
      description: "Deciding what to build and why: discovery and research, roadmaps and prioritisation, specs and launches, pricing and packaging, product analytics, and the feedback loops that keep a product honest."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Feature Prioritisation Frameworks
          description: "Ranking competing ideas with explicit criteria such as reach, impact, confidence and effort, and explaining trade-offs openly to stakeholders."
          projects:
            - name: Single list of every competing idea
              description: |-
                ## Purpose
                Ideas for what to build usually live in five places at once: a sales spreadsheet, support tags, the founder's notes, old tickets and a whiteboard photo. Pulling them into one list with a single row per idea, a named source and a one-line problem statement is the precondition for ranking anything, because no framework can compare ideas it cannot see.

                ## Milestones
                1. Every known idea source listed, from sales notes and support tags to leadership requests.
                2. One list holding each idea once, with duplicates merged and the original requesters noted.
                3. Each row written as a customer problem in one line, not as a solution title.
                4. The list shared with the team as the only place new ideas are added.

                ## Notes
                Expect 80 to 200 rows on a first pass for a product that has been live a year or more. Do not score anything yet; the goal at this stage is completeness.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single shared list holds every competing idea once, each with a source, a requester and a one-line problem statement."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every place ideas currently live, including private notes and chat threads"
                - "Copy each idea into one sheet with source, requester and date"
                - "Merge duplicates and keep every requester's name on the surviving row"
                - "Rewrite each title as the customer problem it addresses"
            - name: Decision rights for the final ranking call
              description: |-
                ## Purpose
                Scoring arguments drag on when nobody knows who makes the final call, and the loudest voice ends up deciding by default. Writing down who proposes scores, who is consulted and who decides the ranking, before the first score is entered, turns later disagreements into input rather than vetoes.

                ## Milestones
                1. A one-page note naming who proposes scores, who is consulted and who makes the final ranking call.
                2. An escalation route agreed for when the decider and a senior stakeholder disagree.
                3. The note approved by the product lead and the most senior stakeholder involved.
                4. The note linked from the top of the idea list.

                ## Notes
                In a startup the founder often decides. Say so plainly rather than pretending the team votes.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written decision-rights note naming the final decider and the escalation route is approved and linked from the idea list."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down who currently ends up making ranking calls in practice"
                - "Draft a note naming the proposer, the consulted parties and the final decider"
                - "Agree the escalation route for disputed rankings with your manager"
                - "Link the approved note at the top of the idea list"
            - name: Agreed prioritisation criteria and weights
              description: |-
                ## Purpose
                Without explicit criteria, every prioritisation meeting reopens the question of what matters. Agreeing three to five criteria, such as customer reach, revenue impact, strategic fit and effort, with a weight for each, gives the team a shared scale and turns a disputed ranking into a debate about inputs rather than taste.

                ## Milestones
                1. Three to five criteria chosen, each tied to a current company or product goal.
                2. A weight agreed for each criterion, with the weights adding to 100 percent.
                3. A one-sentence definition for each criterion, clear enough that two people would score it the same way.
                4. Criteria and weights approved by the decider named in the decision-rights note.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Three to five weighted criteria with written definitions are approved by the decider and recorded at the top of the scoring sheet."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull this year's company and product goals onto one page"
                - "Propose three to five criteria that map to those goals"
                - "Run a 45-minute session to agree a weight for each criterion"
                - "Write a one-sentence definition for every criterion"
                - "Check the criteria and weights still match the company goals @recurring(yearly)"
            - name: Choosing a prioritisation framework that fits
              description: |-
                ## Purpose
                RICE suits a long list of comparable product improvements, WSJF suits work where timing changes value, Kano suits deciding what a new offering must include, and a value versus effort grid suits a team that needs a decision this week. Picking one deliberately, based on the decisions you actually face and the data you actually have, avoids importing a heavyweight method nobody will maintain.

                ## Milestones
                1. The three most common prioritisation decisions the team faces written down.
                2. Four candidate frameworks compared against those decisions and the data available.
                3. One primary framework chosen, with a lighter fallback for quick calls.
                4. The reasons for the choice recorded so they can be revisited in six months.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A primary framework and a quick-call fallback are chosen, with a written rationale naming the decisions each will be used for."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the last ten prioritisation decisions and what made each one hard"
                - "Note what data the team reliably has on reach, revenue and effort"
                - "Compare RICE, WSJF, Kano and value versus effort against those decisions"
                - "Write a half-page rationale for the framework you choose"
            - name: Impact scale tied to one business goal
              description: |-
                ## Purpose
                Impact is the score people inflate most, because 'high impact' means something different to sales, support and engineering. Defining a fixed scale, for example 3 for a large move in the goal metric down to 0.25 for a minimal one, with a worked example at each level, makes impact scores comparable across ideas and across the people scoring them.

                ## Milestones
                1. The one goal metric that impact is judged against named, such as activation rate or net revenue retention.
                2. A five-step impact scale written with a numeric value and a plain description for each step.
                3. One shipped feature placed at each step as a worked example.
                4. The scale tested by three people scoring the same five ideas and comparing results.
              priority: high
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A five-step impact scale with a worked example at each step is in the scoring sheet, and three people's test scores differ by at most one step on most ideas."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose the goal metric impact will be judged against"
                - "Write a value and a description for each of five impact steps"
                - "Find a shipped feature that fits each step as an example"
                - "Ask three colleagues to score five ideas blind and compare the results"
            - name: Reach estimates grounded in usage data
              description: |-
                ## Purpose
                Reach is the one RICE input that can usually be measured rather than guessed, yet it is often filled in as 'lots of users'. Estimating reach as the number of accounts or users affected per quarter, from analytics, plan data or support volumes, removes the easiest place for optimism to hide.

                ## Milestones
                1. A fixed reach unit agreed, such as active accounts per quarter.
                2. A data source named for each common type of idea, such as page visits, plan counts or ticket volumes.
                3. Reach filled in with a number and a source for the top 30 ideas.
                4. Ideas with no measurable reach flagged for a lower confidence score.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The top 30 ideas each carry a reach number in a single agreed unit, with the data source recorded beside it."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Agree one reach unit and time period for every score"
                - "List which analytics report answers reach for each idea type"
                - "Ask the data or engineering team for counts you cannot pull yourself"
                - "Fill in reach and its source for the top 30 ideas"
            - name: Effort sizing scale agreed with engineering
              description: |-
                ## Purpose
                Effort guessed by product alone is almost always too low, and a score built on it ranks the wrong things first. Agreeing a coarse scale with engineering leads, such as person-weeks in steps of 0.5, 1, 2, 4 and 8, keeps sizing quick enough to do for dozens of ideas while staying honest about big work.

                ## Milestones
                1. A coarse effort scale agreed with engineering and design leads, covering design and testing time as well as build.
                2. A rule written for ideas bigger than the top step, such as splitting them before scoring.
                3. Effort sized together for the top 30 ideas in one session.
                4. Every estimate marked with who gave it and the date.

                ## Notes
                Coarse is the point. Arguing over 3 versus 3.5 person-weeks at this stage wastes time that belongs to proper planning later.
              priority: high
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "The top 30 ideas carry effort sizes on a scale the engineering leads agreed, each marked with the estimator and the date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Propose a five-step effort scale to the engineering lead"
                - "Agree whether design, testing and rollout time are included"
                - "Book a 90-minute sizing session with engineering and design leads"
                - "Record who sized each idea and when"
            - name: Confidence rubric with evidence levels
              description: |-
                ## Purpose
                Confidence is meant to discount ideas built on hope, but scored by gut it becomes 80 percent for everything. Tying each level to a type of evidence, such as 100 percent for measured data, 80 percent for repeated customer evidence, 50 percent for a single source and 20 percent for an untested belief, keeps the score honest and tells the team what research would raise it.

                ## Milestones
                1. Four confidence levels written, each tied to a named kind of evidence.
                2. The evidence behind each top-30 score recorded in a column beside it.
                3. Ideas at the lowest level listed as candidates for quick research before they are built.
                4. The rubric added to the instructions tab of the scoring sheet.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Every top-30 idea has a confidence level drawn from a four-step evidence rubric, with the supporting evidence noted beside it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write four confidence levels with the evidence each one requires"
                - "Add an evidence column beside the confidence score"
                - "Rescore confidence on the top 30 ideas using the rubric"
                - "List low-confidence ideas that a short test could firm up"
            - name: Shared scoring sheet for the idea list
              description: |-
                ## Purpose
                Scores scattered across slides and private copies drift apart within a month. One shared sheet with input columns for each criterion, a locked formula for the total, an evidence column and a last-scored date gives everyone the same ranking and shows at a glance which scores are stale.

                ## Milestones
                1. One sheet with a row per idea and columns for each criterion, the evidence, the total and the last-scored date.
                2. The total calculated by a formula only the sheet owner can edit.
                3. A saved view showing the top 20 by score.
                4. Access set so stakeholders can comment but not change scores.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single shared scoring sheet with locked formulas and a last-scored date on every row is the only ranking the team refers to."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create the sheet with input, evidence, total and last-scored columns"
                - "Write the total formula and lock that column"
                - "Add a saved view of the top 20 by score"
                - "Give stakeholders comment-only access"
            - name: First full scoring pass on the top 30 ideas
              description: |-
                ## Purpose
                Scoring all 150 ideas at once burns a week and produces noise. Shortlisting the 30 most requested or most strategic, scoring them against the agreed criteria in two working sessions and publishing the resulting rank gives the team its first defensible ordering within a month.

                ## Milestones
                1. A shortlist of 30 ideas chosen by request count, strategic fit and leadership asks.
                2. All 30 scored on every criterion, with evidence noted.
                3. The computed ranking checked by the decider, with any manual override written down with a reason.
                4. The ranking shared with the team and key stakeholders.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Thirty ideas are scored on every agreed criterion, the ranking is approved by the decider, and every override carries a written reason."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pick 30 ideas for the first pass using request count and goal fit"
                - "Block two 90-minute scoring sessions with the core team"
                - "Write a reason beside every manual override of the computed rank"
                - "Share the approved ranking with the team and stakeholders"
            - name: Intake form for new ideas with minimum fields
              description: |-
                ## Purpose
                New requests arrive as a sentence in chat and get scored from memory. A short intake form asking for the customer problem, who is affected, the evidence and any hard date means every new idea arrives ready to score, and requesters learn what a strong case looks like.

                ## Milestones
                1. A form with five required fields: problem, affected customers, evidence, requester and any hard date.
                2. The form linked from the team's chat channel and from the idea list.
                3. A weekly slot held to score the week's submissions.
                4. Requesters told within a fortnight where their idea landed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every idea added in the last month came through the intake form with all five fields, and each requester heard back within two weeks."
                cadence: rolling
              tasks:
                - "Draft a five-field intake form with problem and evidence required"
                - "Pin the form link in the team channel"
                - "Score the week's new submissions against the criteria @recurring(weekly:tue)"
                - "Reply to each requester with the idea's score and position"
            - name: Monthly re-scoring of the top twenty
              description: |-
                ## Purpose
                Scores go stale as soon as a competitor ships, a deal closes or usage data shifts. Re-scoring only the top 20 and anything with new evidence each month keeps the ranking current in about an hour, without the burden of re-scoring the whole list.

                ## Milestones
                1. A monthly hour booked with the people who own the reach, impact and effort inputs.
                2. The top 20 and any idea with new evidence re-scored, with the last-scored date updated.
                3. Every move of more than five places explained in one line.
                4. Six consecutive monthly re-scores completed.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The top 20 ideas show a last-scored date within the past 35 days for six months running, with large moves explained."
                cadence: rolling
              tasks:
                - "Book a recurring hour with the input owners"
                - "Re-score the top 20 and any idea with new evidence @recurring(monthly:8)"
                - "Write one line explaining every move of more than five places"
                - "Flag any row whose last-scored date is over two months old"
            - name: Prioritisation decision log
              description: |-
                ## Purpose
                Six months after a call, nobody remembers why one idea beat another, so the debate restarts every quarter. A log recording the date, the options, the decision, who made it and the evidence at the time protects good decisions from revisionism and makes poor ones easier to learn from.

                ## Milestones
                1. A log with columns for date, decision, options considered, decider, evidence and expected result.
                2. Every ranking change and override from the last quarter entered.
                3. The log linked from the scoring sheet.
                4. A quarterly read-through of past entries held with the team.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every ranking override and major prioritisation call from the past quarter has a dated log entry naming the decider and the evidence."
                cadence: rolling
              tasks:
                - "Create a decision log with date, options, decider and evidence columns"
                - "Back-fill the last quarter's main ranking decisions"
                - "Add an entry within a day of every override or reprioritisation"
                - "Read back last quarter's entries with the team @recurring(quarterly)"
            - name: Quarterly capacity split across work types
              description: |-
                ## Purpose
                When features, technical debt, bugs and discovery compete in one ranking, features nearly always win and the rest piles up until it causes an outage. Agreeing a capacity split each quarter, for example 60 percent roadmap features, 20 percent debt and reliability, 10 percent bugs and 10 percent discovery, lets each bucket be ranked on its own terms.

                ## Milestones
                1. Last quarter's actual split by work type estimated from the ticket history.
                2. A target split for the coming quarter agreed with engineering and the decider.
                3. Each bucket ranked separately, using criteria that suit it.
                4. The actual split compared with the target at quarter end.
              priority: high
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A capacity split by work type is agreed before each quarter starts, and the actual split is compared with it at quarter end."
                cadence: cyclic
              tasks:
                - "Estimate last quarter's split of features, debt, bugs and discovery"
                - "Propose next quarter's target split to the engineering lead"
                - "Agree the split with the decider before the quarter begins @recurring(quarterly)"
                - "Compare the actual split with the target at quarter end"
            - name: Weekly interrupt review against the ranked list
              description: |-
                ## Purpose
                Urgent requests from a big customer or an executive quietly displace planned work, and by the end of the quarter the ranking no longer describes what the team actually did. A 20-minute weekly review of interrupts against the list makes every displacement a visible choice, with the item it pushed down named.

                ## Milestones
                1. A written threshold for what counts as an interrupt, such as any unplanned work over half a day.
                2. A weekly 20-minute review held with the engineering lead.
                3. Each accepted interrupt recorded with the planned item it displaced.
                4. A quarterly total of interrupt time shared with the decider.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For eight consecutive weeks every accepted interrupt is recorded with the planned item it displaced, and the quarterly total is shared."
                cadence: rolling
              tasks:
                - "Write the threshold for what counts as an interrupt"
                - "Review the week's interrupts against the ranked list @recurring(weekly:mon)"
                - "Record which planned item each accepted interrupt pushed down"
                - "Total the quarter's interrupt time and share it with the decider"
            - name: Monthly ranking readout for stakeholders
              description: |-
                ## Purpose
                Stakeholders who only see the outcome assume their request was ignored. A short monthly readout showing the top of the ranking, what moved and why, and what was declined, explains trade-offs in the open and cuts the side-channel lobbying that eats a product manager's week.

                ## Milestones
                1. A one-page readout format: top ten, notable moves, declined items and how to make a stronger case.
                2. The readout sent on a fixed day each month.
                3. Questions raised by the readout logged and answered within a week.
                4. Side-channel requests counted for the month before the first readout and the month after the third.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive monthly readouts have gone out on schedule, each listing the top ten, the moves with reasons and the declined items."
                cadence: rolling
              tasks:
                - "Draft a one-page readout format with top ten, moves and declines"
                - "Ask the agent to draft the readout from this month's scoring sheet changes"
                - "Send the ranking readout to stakeholders @recurring(monthly:12)"
                - "Log questions raised by the readout and answer each within a week"
            - name: Predicted versus actual impact check after launch
              description: |-
                ## Purpose
                A framework only improves if someone checks whether the high scorers delivered. Comparing each shipped item's predicted impact and effort with what actually happened, 60 to 90 days after release, shows whether the team overrates impact or underrates effort, and by how much.

                ## Milestones
                1. Predicted impact, effort and confidence frozen for each item at the moment it is committed.
                2. Actual effort and the measured change in the goal metric recorded 60 to 90 days after release.
                3. The gap between predicted and actual worked out for at least ten shipped items.
                4. One correction to the scales agreed from the pattern, such as a standard effort multiplier.

                ## Notes
                Start from the **Metrics log** template. Attribution is rarely clean, so record the honest best estimate with the caveat beside it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least ten shipped items have predicted and actual impact and effort recorded side by side, and one scale correction has been agreed."
                cadence: rolling
              tasks:
                - "Freeze the scores of each item when it is committed to build"
                - "Record actual effort and metric change for items released 60 to 90 days ago @recurring(monthly:24)"
                - "Calculate the average gap between predicted and actual effort"
                - "Propose one scale correction from the pattern to the team"
            - name: Quarterly pruning of parked ideas
              description: |-
                ## Purpose
                An idea list that only grows becomes a graveyard where good ideas are buried among 300 stale ones. Each quarter, closing ideas that have sat in the bottom half for two cycles, or whose requester has left, keeps the list short enough to score honestly and tells requesters the truth.

                ## Milestones
                1. A pruning rule written, such as bottom half for two cycles with no new evidence.
                2. Ideas matching the rule closed with a reason and a note to the requester.
                3. Closed ideas kept in an archive tab so they can be reopened with new evidence.
                4. The open list held below an agreed size, such as 100 rows.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter the open idea list is pruned to below the agreed size, with every closed idea archived with a reason."
                cadence: rolling
              tasks:
                - "Write the rule for when a parked idea is closed"
                - "Close ideas that match the pruning rule and archive them @recurring(quarterly)"
                - "Send a short note to each requester whose idea was closed"
                - "Reopen any archived idea that gains new evidence"
            - name: Effort re-check before work is committed
              description: |-
                ## Purpose
                The coarse size given during scoring was never meant to be a plan, yet it is often the number a team commits to. Asking the tech lead to re-check the next three items with a quick technical look before commitment catches the ones that are four times bigger while their rank can still change.

                ## Milestones
                1. A rule agreed that no item is committed without a fresh effort check.
                2. The next three items re-sized each month by the tech lead.
                3. Any item whose size moved by more than one step re-scored before commitment.
                4. Each changed estimate recorded in the decision log.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For three months every committed item had an effort re-check within two weeks before commitment, and large changes were re-scored."
                cadence: rolling
              tasks:
                - "Agree the pre-commitment effort check with the tech lead"
                - "Re-size the next three items before they are committed @recurring(monthly:3)"
                - "Re-score any item whose effort moved by more than one step"
                - "Note each changed estimate in the decision log"
            - name: RICE scoring practice on past decisions
              description: |-
                ## Purpose
                RICE is simple to describe and easy to misuse: reach in mixed units, impact on a sliding scale, confidence as decoration. Re-scoring ten decisions the team already made, where the outcome is known, is a safe way to learn the method and see where it would have pointed somewhere else.

                ## Milestones
                1. The RICE formula and each input's unit written on one page in your own words.
                2. Ten past decisions re-scored with RICE using only the information available at the time.
                3. Cases where RICE would have chosen differently listed beside the actual outcome.
                4. Three personal rules for applying RICE written down.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten past decisions are re-scored with RICE, and a one-page summary lists where the method would have changed the call and what happened."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the RICE formula and each input's unit in your own words"
                - "Choose ten past decisions with known outcomes"
                - "Score each one using only what was known at the time"
                - "Write three rules you will follow when scoring with RICE"
            - name: Kano survey to sort must-haves from delighters
              description: |-
                ## Purpose
                Some features earn no credit when present but cause fury when missing, while others delight precisely because nobody expected them. A Kano survey, asking customers how they would feel with and without each feature, sorts candidates into must-have, performance, delighter and indifferent, which a reach-times-impact score cannot do.

                ## Milestones
                1. Eight to twelve candidate features written as short, neutral descriptions.
                2. A paired functional and dysfunctional question drafted for each feature.
                3. At least 30 responses collected from the target segment.
                4. Each feature classified, with the category added to the scoring sheet as a note.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A Kano survey with at least 30 responses classifies ten candidate features, and each category is noted beside the feature in the scoring sheet."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write neutral descriptions of eight to twelve candidate features"
                - "Draft the paired with and without question for each feature"
                - "Send the survey to at least 60 customers in the target segment"
                - "Classify each feature and record the category in the scoring sheet"
            - name: Cost of delay for time-sensitive work
              description: |-
                ## Purpose
                Two ideas with the same value can deserve very different places in the queue if one loses half its value when it ships three months late, such as work tied to a regulatory deadline, a seasonal peak or a contract renewal. Learning to estimate cost of delay per week, and dividing it by duration as weighted shortest job first does, puts time-critical work where it belongs.

                ## Milestones
                1. The difference between business value, time criticality and risk reduction written in a paragraph.
                2. Cost of delay per week estimated for five ideas with timing pressure.
                3. Those five ranked by cost of delay divided by duration.
                4. The result compared with their existing rank and the differences explained.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five time-sensitive ideas carry a weekly cost of delay estimate and a WSJF rank, compared in writing with their existing rank."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read a short introduction to cost of delay and weighted shortest job first"
                - "Pick five ideas with a deadline, season or renewal attached"
                - "Estimate each one's value lost per week of delay"
                - "Rank them by cost of delay over duration and compare with their current rank"
            - name: MoSCoW sort for a fixed-date release
              description: |-
                ## Purpose
                When the date cannot move, such as a trade show, a contract go-live or the start of an academic term, the only variable left is scope. Sorting the candidate scope into must, should, could and won't, with a rule that musts take no more than 60 percent of capacity, protects the date and makes the cut line visible before the crunch.

                ## Milestones
                1. Every candidate item for the release listed with an effort size.
                2. Each item sorted into must, should, could or won't with the decider present.
                3. Musts confirmed at no more than 60 percent of the available capacity.
                4. The won't list shared with stakeholders before work starts.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A release scope sorted into must, should, could and won't, with musts at or under 60 percent of capacity, is approved and the won't list shared."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every candidate item for the release with its effort size"
                - "Sort the items into must, should, could and won't with the decider"
                - "Check the musts fit within 60 percent of available capacity"
                - "Send the won't list to stakeholders before work begins"
            - name: Importance versus satisfaction opportunity scoring
              description: |-
                ## Purpose
                Asking customers what they want yields a feature list; asking how important each outcome is and how satisfied they are today shows where the real gaps sit. Scoring opportunity as importance plus the unmet part of importance points the ranking at problems customers rate as important and poorly served.

                ## Milestones
                1. Ten to fifteen customer outcomes written as short statements, such as reducing the time it takes to reconcile an invoice.
                2. A short survey rating each outcome for importance and current satisfaction on a 1 to 10 scale.
                3. At least 50 responses collected from one segment.
                4. Opportunity scores calculated and the top five outcomes matched to ideas in the list.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Opportunity scores from at least 50 responses rank fifteen customer outcomes, and the top five are linked to ideas in the scoring sheet."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write ten to fifteen customer outcome statements"
                - "Build a survey rating importance and satisfaction for each outcome"
                - "Collect at least 50 responses from a single customer segment"
                - "Link the five highest opportunity scores to ideas in the list"
            - name: Spotting bias in prioritisation discussions
              description: |-
                ## Purpose
                Scoring frameworks are quietly overridden by the highest-paid person's opinion, the last customer call, sunk cost in a half-built feature and the pet project nobody wants to challenge. Learning to name these patterns in the moment, with agreed phrases for raising them, keeps a meeting honest without making it personal.

                ## Milestones
                1. Five common biases in product decisions written down, each with a recent example from your own team.
                2. A short list of neutral phrases for raising a bias in a meeting.
                3. Two prioritisation meetings observed, with notes on which biases appeared.
                4. One change to the meeting format agreed, such as scoring silently before discussion.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two prioritisation meetings are reviewed for bias with written notes, and one format change has been adopted by the team."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write five biases with a real example from your team for each"
                - "Draft three neutral phrases for naming a bias in a meeting"
                - "Take notes on bias in the next two prioritisation meetings"
                - "Propose silent scoring before discussion at the next session"
            - name: Running a value versus effort mapping session
              description: |-
                ## Purpose
                A two-by-two grid of value against effort is the fastest framework there is, and the easiest to run badly: everything ends up in the top-left box. Learning to facilitate it with pre-sized effort, value tied to the goal metric and a forced rule that each quadrant holds a share of the items makes it a useful 60-minute tool for a team that needs a call today.

                ## Milestones
                1. A session plan with timings, roles and the forced distribution rule.
                2. Effort sized for every item before the session.
                3. One session run with at least ten items and the final grid photographed.
                4. Quick wins from the session added to the scoring sheet with their quadrant.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One value versus effort session of no more than 60 minutes is run with pre-sized items, and its quick wins are recorded in the scoring sheet."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write a 60-minute session plan with a forced distribution rule"
                - "Get effort sizes for every item from engineering beforehand"
                - "Run the session with at least ten items on the grid"
                - "Record the quick wins and their quadrant in the scoring sheet"
            - name: Buy a feature exercise with customers
              description: |-
                ## Purpose
                Customers asked to rate features say everything matters. Giving six to eight customers a fixed budget of play money and asking them to buy features priced by effort forces real trade-offs, and the negotiation between them reveals which problems they would actually give something up for.

                ## Milestones
                1. Eight to twelve features priced in play money roughly in proportion to effort.
                2. A budget per participant set so nobody can buy more than a third of the list alone.
                3. One session run with six to eight customers from a single segment.
                4. Purchases and the reasons customers gave recorded against the scoring sheet.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "One buy a feature session with at least six customers is completed, and the features bought, with reasons, are recorded against the scoring sheet."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Price eight to twelve features in play money by relative effort"
                - "Set the per-person budget at about a third of the total price"
                - "Invite six to eight customers from one segment"
                - "Record what each group bought and the reasons they gave"
            - name: Two frameworks tested on the same 15 ideas
              description: |-
                ## Purpose
                Teams often switch frameworks because the current ranking feels wrong, then find the new one produces the same arguments. Scoring the same 15 ideas with your current method and one alternative, side by side, shows whether the framework is the problem or the inputs are.

                ## Milestones
                1. Fifteen ideas chosen that span small fixes, large bets and time-critical items.
                2. All fifteen scored with both frameworks by the same people.
                3. Rank differences of more than three places listed and explained.
                4. A decision recorded to keep, switch or combine frameworks.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Fifteen ideas are ranked by two frameworks side by side, and a written decision to keep, switch or combine is recorded in the decision log."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pick 15 ideas across small, large and time-critical work"
                - "Score all 15 with the current framework and the alternative"
                - "List every idea whose rank differs by more than three places"
                - "Record the keep, switch or combine decision in the decision log"
            - name: Strategic fit weighting in the scoring model
              description: |-
                ## Purpose
                Plain RICE treats an idea that serves this year's strategy the same as one that serves a market you are leaving. Adding a strategic fit multiplier, with written levels tied to named strategic themes, lets strategy shape the ranking openly instead of through quiet overrides.

                ## Milestones
                1. This year's two to four strategic themes listed from leadership's plan.
                2. A three-level fit multiplier written, such as 1.5 for core, 1 for neutral and 0.5 for off-strategy.
                3. Fit scored for every idea in the top 50.
                4. Overrides in the decision log counted before and after, to see whether they fell.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every top-50 idea carries a strategic fit level tied to a named theme, and overrides in the following quarter are counted against the quarter before."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Copy this year's strategic themes from the leadership plan"
                - "Write three fit levels with a multiplier and description for each"
                - "Score strategic fit for the top 50 ideas"
                - "Count overrides in the quarter after and compare with the quarter before"
            - name: Ranking technical debt against features
              description: |-
                ## Purpose
                Technical debt scored on customer reach almost always loses, even when it slows every future feature. Giving debt items their own scoring terms, such as hours lost per sprint, incident risk and the features they block, lets engineering make its case on equal footing within the capacity bucket agreed for it.

                ## Milestones
                1. Debt items gathered from engineering into the same list with a debt tag.
                2. Debt-specific criteria agreed with the tech lead: time lost, incident risk and features blocked.
                3. The top ten debt items scored and ranked within their own bucket.
                4. Two debt items committed in the next quarter's plan.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The top ten technical debt items are scored on agreed debt criteria, and at least two are committed in the next quarter's plan."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the tech lead for the ten debt items that slow the team most"
                - "Agree debt scoring terms covering time lost, incident risk and features blocked"
                - "Score and rank the debt items within their own bucket"
                - "Commit the top two debt items in next quarter's plan"
            - name: Written decline note for requests not prioritised
              description: |-
                ## Purpose
                Most requests will never be built, and silence does more damage to trust than a clear no. A short, reusable decline note that names the request, explains which ideas outranked it and why, and says what new evidence would change the answer keeps relationships intact and often surfaces better evidence.

                ## Milestones
                1. A decline note with sections for the request, the reason, the competing priorities and what would change the answer.
                2. The note used for every request declined in a month.
                3. Replies tracked for any new evidence offered.
                4. At least one declined request re-scored because of evidence it surfaced.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A decline note is used for every declined request for a month, and replies offering new evidence are logged."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft a decline note with the reason, the competing work and what would change it"
                - "Send the note for every request declined this month"
                - "Log any new evidence requesters send back"
                - "Re-score any declined idea that returns with stronger evidence"
            - name: Tie-break rules for equally scored ideas
              description: |-
                ## Purpose
                Scores within a few percent of each other are noise, yet teams argue over 41 versus 39 as if it were a verdict. Agreeing in advance that scores within 10 percent count as a tie, and how ties are broken, ends those arguments and moves the effort into evidence.

                ## Milestones
                1. A band agreed within which scores count as tied, such as 10 percent.
                2. An ordered list of tie-breakers, such as strategic theme first, then lower effort, then higher confidence.
                3. The rules written into the instructions tab of the scoring sheet.
                4. The rules applied at the next ranking session and any disputes noted.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written tie-break rules with a tie band and ordered tie-breakers are in the scoring sheet and were applied at the following ranking session."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Propose a percentage band within which scores count as tied"
                - "Order three tie-breakers starting with strategic fit"
                - "Add the rules to the instructions tab of the scoring sheet"
                - "Apply the rules at the next ranking session"
            - name: Scoring sales-requested features with deal evidence
              description: |-
                ## Purpose
                Sales requests arrive with urgency attached and rarely with numbers. Asking for the deal name, stage, annual value and whether the feature is a true blocker, then folding only verified revenue into the impact score, gives sales a fair route into the ranking and filters out requests driven by one loud prospect.

                ## Milestones
                1. A sales section added to the intake form with deal name, stage, value and blocker status.
                2. Revenue counted only when the deal owner confirms the feature blocks the deal.
                3. All open sales requests re-scored with the verified figures.
                4. A regular check of which committed sales requests closed the deals they were meant to.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every open sales request carries deal stage, value and blocker status confirmed by the deal owner, and has been re-scored with those figures."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Add deal name, stage, value and blocker fields to the intake form"
                - "Ask each deal owner to confirm whether the feature truly blocks the deal"
                - "Re-score open sales requests using only confirmed revenue"
                - "Check which committed sales requests closed their deals @recurring(monthly:17)"
            - name: Dependency check before final sequencing
              description: |-
                ## Purpose
                A ranked list is not yet an order of work: item three may need item nine's data model first, or a partner's API that ships in spring. Mapping dependencies for the top 15 before sequencing prevents the classic failure where the top-ranked item stalls halfway and the team waits.

                ## Milestones
                1. Dependencies for the top 15 identified with engineering, including external teams and vendors.
                2. Each dependency marked internal or external, with an expected ready date.
                3. The work order adjusted wherever a dependency blocks a higher-ranked item, with reasons noted.
                4. Blocked items flagged so they are not committed before their dependency clears.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The top 15 items have their dependencies recorded with ready dates, and the work order reflects every blocking dependency."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Walk through the top 15 items with the tech lead to find dependencies"
                - "Mark each dependency internal or external with a ready date"
                - "Adjust the work order where a dependency blocks a higher item"
                - "Flag blocked items in the scoring sheet"
            - name: Prioritisation tool or spreadsheet decision
              description: |-
                ## Purpose
                Dedicated prioritisation tools add scoring, voting and links to the issue tracker, but they cost per seat and many teams drift back to a spreadsheet within a year. Deciding against your real needs, such as list size, number of scorers, tracker integration and who must see it, avoids paying for features nobody will use.

                ## Milestones
                1. Requirements written for list size, number of scorers, tracker integration, permissions and budget.
                2. Two or three tools compared with the current spreadsheet against those requirements.
                3. A two-week trial run with real ideas in the leading option.
                4. A decision recorded, including the option of staying with the spreadsheet.

                ## Notes
                Start from the **Purchase decision** template.
              priority: low
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A tool or spreadsheet decision is recorded after a two-week trial with real ideas, scored against written requirements."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write requirements for list size, scorers, integrations and budget"
                - "Compare two or three tools with your current spreadsheet"
                - "Trial the leading option for two weeks with real ideas"
                - "Write up the chosen option and its reasons in the decision log"
            - name: Fast lane for small requests under two days
              description: |-
                ## Purpose
                Running a full score on a one-line copy fix or a small settings toggle wastes more time than building it. A fast lane for items under two days of effort, capped at a fixed share of capacity and decided by the product manager alone, clears small wins quickly and saves the formal framework for work that deserves it.

                ## Milestones
                1. A fast lane rule written: under two days of effort, no new dependencies and no pricing or policy change.
                2. A capacity cap agreed, such as 10 percent of each sprint.
                3. Fast lane items tracked on their own tab of the scoring sheet.
                4. A quarter-end check that the cap held and large work did not slip through in small pieces.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written fast lane rule with a capacity cap is in use, and a quarter-end check confirms the cap held."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the fast lane criteria for size, dependencies and policy"
                - "Agree the capacity cap with the engineering lead"
                - "Add a fast lane tab to the scoring sheet"
                - "Check at quarter end that fast lane work stayed under the cap"
            - name: Quarterly prioritisation workshop with leads
              description: |-
                ## Purpose
                Once a quarter the ranking needs more than a re-score: goals shift, the capacity split changes and big items need a fresh look. A half-day workshop with product, design, engineering and one commercial lead, with scores pre-filled and only disputed items discussed, produces a committed top ten in one sitting.

                ## Milestones
                1. Scores pre-filled and sent to attendees three days before.
                2. Disputed items, defined as a spread of two or more steps between scorers, listed as the agenda.
                3. A committed top ten agreed and recorded by the end of the session.
                4. Notes and decisions published within two days.

                ## Notes
                Start from the **Meeting notes** template. Have people score silently first, because discussion before scoring anchors everyone on the first speaker.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Each quarter a workshop produces a committed top ten, with notes and decisions published within two days."
                cadence: cyclic
              tasks:
                - "Book a half-day workshop with product, design, engineering and a commercial lead"
                - "Send pre-filled scores to attendees three days ahead @recurring(quarterly)"
                - "Build the agenda from items where scorers differ by two or more steps"
                - "Publish notes and the committed top ten within two days"
            - name: Annual planning ranking of candidate bets
              description: |-
                ## Purpose
                Annual planning asks product to rank a handful of large bets, each worth months of a team's time, on far less evidence than a feature request. Writing each bet as a one-page case with the goal it moves, a range of impact, a rough cost and the biggest unknown, then ranking them with leadership, keeps the year's largest allocation calls explicit.

                ## Milestones
                1. Five to ten candidate bets each written as a one-page case.
                2. Each case showing a low and high impact estimate, a rough cost and the riskiest assumption.
                3. The bets ranked with leadership using the agreed criteria.
                4. Unfunded bets recorded with the evidence that would bring them back.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "Each year five to ten candidate bets are ranked from one-page cases, and the funded and unfunded lists are recorded with reasons."
                cadence: cyclic
              tasks:
                - "Collect five to ten candidate bets from product leads"
                - "Write each bet as a one-page case with an impact range and cost"
                - "Rank the bets with leadership during annual planning @recurring(yearly)"
                - "Record unfunded bets with the evidence that would revive them"
            - name: Reprioritisation after a plan-breaking event
              description: |-
                ## Purpose
                Losing an anchor customer, a competitor launch, a funding change or a security incident can make last month's ranking wrong overnight. Running a structured reprioritisation within a week, re-scoring only the inputs the event changed, prevents both a panicked rewrite and pretending nothing happened.

                ## Milestones
                1. The event, and the criteria it affects, written in one paragraph.
                2. Only the affected inputs re-scored for the top 30, with old and new values kept.
                3. A revised ranking approved by the decider within five working days.
                4. Changes and reasons communicated to the team and stakeholders.
              priority: high
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A revised ranking is approved within five working days of the event, with old and new scores kept and the changes communicated."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write one paragraph on what changed and which criteria it touches"
                - "Re-score only the affected inputs for the top 30"
                - "Get the revised ranking approved by the decider"
                - "Send the team and stakeholders a summary of what moved and why"
            - name: Explaining priorities to the board
              description: |-
                ## Purpose
                Founders and product leaders get asked by the board why the team is building this rather than the thing a director heard about at a conference. Preparing a short section that shows the criteria, the top five, two things deliberately not being built and the evidence behind them turns a challenge into a discussion of assumptions.

                ## Milestones
                1. A one-page summary of the criteria, the top five and two deliberate non-priorities.
                2. The evidence behind each top-five item stated in a sentence.
                3. Likely director questions listed with prepared answers.
                4. Board feedback recorded and any agreed changes taken to the next re-score.

                ## Notes
                Start from the **Board meeting** template.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A priorities section with criteria, top five and two deliberate non-priorities is presented to the board, and its feedback is recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft a one-page summary of criteria, top five and two non-priorities"
                - "Write the evidence for each top-five item in one sentence"
                - "Ask the agent to list the questions a sceptical director is likely to ask"
                - "Record board feedback and add it to the next re-score"
            - name: Audit of an inherited priority list
              description: |-
                ## Purpose
                Taking over a team often means inheriting a ranked list with no record of how it was built, half the scores two years old and commitments nobody wrote down. Auditing it in the first month, before adding anything new, separates real commitments from folklore and earns trust with the team.

                ## Milestones
                1. Every item's last-scored date, original requester and any promise made recorded.
                2. Commitments to customers or leadership confirmed in writing with whoever made them.
                3. Items older than a year without new evidence moved to a review tab.
                4. A short note to your manager on the state of the list and the first changes you propose.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Within the first month every inherited item has a last-scored date and requester, commitments are confirmed in writing, and a summary is with your manager."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Export the inherited list with every score and date you can find"
                - "Ask the previous owner which items carry promises"
                - "Confirm each promise with the person who made it"
                - "Send your manager a one-page summary of the list's state"
            - name: Founder prioritising without a product team
              description: |-
                ## Purpose
                In a company of five to fifteen people the founder often holds the list in their head, and engineers learn priorities from whatever was said last. A single ranked list of no more than 15 items, three criteria the founder actually uses and a short weekly review make the founder's thinking visible without adding process the team will resent.

                ## Milestones
                1. Three criteria the founder genuinely uses written down, such as revenue now, retention and conviction.
                2. One ranked list of no more than 15 items shared with the whole team.
                3. A 30-minute weekly ranking review held on the same day each week.
                4. Every engineer able to name the top three without checking.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A ranked list of at most 15 items is reviewed weekly for six weeks, and every engineer can name the top three."
                cadence: rolling
              tasks:
                - "Write the three criteria you actually use when choosing work"
                - "Cut the list to 15 ranked items and share it with the team"
                - "Review and reorder the list with the team @recurring(weekly:fri)"
                - "Ask each engineer to name the top three and fix any mismatch"
            - name: Prioritising before product-market fit
              description: |-
                ## Purpose
                Before product-market fit, reach and revenue numbers are tiny and scoring frameworks reward the wrong things, such as features for the handful of customers you already have. Ranking work by how much it teaches you about the riskiest assumption, and how quickly, keeps an early team learning rather than polishing.

                ## Milestones
                1. The two or three riskiest assumptions about the business written down.
                2. Each candidate item scored on which assumption it tests and how fast it returns an answer.
                3. The top items chosen for speed of learning, each with a date to read the result.
                4. The criteria reviewed once retention and revenue data become meaningful.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Candidate work is ranked by the assumption it tests and the time to an answer, and the top three items each have a date to read the result."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write down your two or three riskiest business assumptions"
                - "Score each candidate item on the assumption it tests and time to answer"
                - "Set a date to read the result for each of the top three items"
                - "Revisit the criteria once retention data covers three months of cohorts"
            - name: Merging rankings across several product teams
              description: |-
                ## Purpose
                Managers with three or four teams get three or four rankings built on different scales, then struggle to explain to leadership why cross-team work never happens. Aligning the scales, keeping each team's local ranking and ranking only the cross-team items centrally gives one honest view without taking ownership away from the teams.

                ## Milestones
                1. A shared impact and effort scale adopted by every team.
                2. Each team's top ten collected in one view with a team column.
                3. Cross-team items ranked centrally with all affected leads present.
                4. A monthly cross-team ranking sync in the calendar and held three times.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All teams score on one shared scale, and cross-team items are ranked centrally at a monthly sync held for three months running."
                cadence: rolling
              tasks:
                - "Compare each team's scales and agree one shared version"
                - "Collect each team's top ten into one view"
                - "Rank cross-team items with the affected leads @recurring(monthly:15)"
                - "Write down which team owns each cross-team item"
            - name: Prioritising with little or no usage data
              description: |-
                ## Purpose
                Plenty of teams, especially those with early products, business tools with few accounts or no analytics yet, cannot measure reach precisely. Using proxies such as support ticket counts, sales call mentions and customer counts by plan, and lowering confidence openly, still produces a defensible ranking while the measurement gap is fixed.

                ## Milestones
                1. Three proxy sources chosen for reach where analytics are missing.
                2. Proxy figures gathered for the top 20 ideas, each labelled as a proxy.
                3. Confidence capped at an agreed level for any proxy-based score.
                4. The three biggest measurement gaps passed to whoever owns analytics.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The top 20 ideas carry labelled proxy reach figures with capped confidence, and three measurement gaps are logged with the analytics owner."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose three proxy sources such as tickets, call mentions and plan counts"
                - "Gather proxy reach for the top 20 ideas and label each one"
                - "Cap confidence for proxy-based scores at the agreed level"
                - "Send the three biggest measurement gaps to the analytics owner"
            - name: Reprioritising for a smaller team after cuts
              description: |-
                ## Purpose
                After a hiring freeze or redundancies, a ranking built for eight engineers is now being worked by five, and the cut line moves up whether anyone admits it or not. Redrawing the line openly, stopping work rather than slowing everything, and telling stakeholders what will no longer happen protects the people who remain from an impossible plan.

                ## Milestones
                1. New capacity measured in person-weeks for the next quarter.
                2. The cut line redrawn against that capacity, with items below it marked stopped.
                3. In-progress work reviewed and at least one item formally paused rather than slowed.
                4. Stakeholders told in writing what has stopped and when it might return.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A redrawn cut line based on the new capacity is approved, stopped items are named, and stakeholders have a written notice of what will not happen."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Calculate next quarter's capacity in person-weeks after the change"
                - "Redraw the cut line and mark items below it as stopped"
                - "Pause at least one in-progress item rather than slowing all of them"
                - "Send stakeholders a written list of what has stopped"
            - name: Platform team ranking of internal requests
              description: |-
                ## Purpose
                Platform and infrastructure teams serve other product teams, so their requests arrive from colleagues who all believe they are blocked. Scoring requests by the number of teams unblocked, the revenue work waiting behind them and the operational risk of saying no gives a platform team a ranking it can defend to peers.

                ## Milestones
                1. Platform criteria agreed: teams unblocked, revenue work waiting and operational risk.
                2. All open internal requests scored on those criteria.
                3. A monthly request review held with requesting team leads.
                4. Requesting teams able to see the ranking and their position on it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All open internal requests are scored on platform criteria, the ranking is visible to requesting teams, and the monthly review has been held twice."
                cadence: rolling
              tasks:
                - "Agree platform criteria for teams unblocked, waiting revenue and risk"
                - "Score every open internal request on those criteria"
                - "Review new requests with requesting team leads @recurring(monthly:22)"
                - "Share the ranking with every requesting team"
            - name: Ranges instead of point scores for big bets
              description: |-
                ## Purpose
                Giving a six-month bet a single impact number hides how uncertain it is, and two bets with the same score can carry very different risk. Scoring big bets with low, likely and high estimates for impact and effort, and comparing the spread as well as the midpoint, shows leadership which bets are safe and which are long shots.

                ## Milestones
                1. Three-point estimates for impact and effort for every bet above a size threshold.
                2. Expected value and spread calculated for each bet.
                3. Bets plotted by expected value against spread.
                4. The plot used in one planning decision and the outcome recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every bet above the size threshold has three-point impact and effort estimates, and the value against spread chart was used in one recorded planning decision."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Set the size threshold above which bets get three-point estimates"
                - "Collect low, likely and high estimates from the people closest to each bet"
                - "Calculate expected value and spread for each bet"
                - "Bring the value against spread chart to the next planning decision"
            - name: Pairwise comparison for the top ten candidates
              description: |-
                ## Purpose
                At the very top of the list, scores bunch together and small input errors decide the order. Comparing the top ten in pairs, asking only which of two matters more to the goal, produces a ranking that is harder to game and exposes disagreements a weighted score smooths over.

                ## Milestones
                1. The top ten candidates listed with a one-line case each.
                2. All 45 pairs compared by each of three to five decision makers.
                3. Individual results combined into one ranking and compared with the scored ranking.
                4. Pairs with strong disagreement discussed and the outcome logged.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three to five decision makers have compared all 45 pairs of the top ten, and the combined ranking is compared with the scored one in the decision log."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a one-line case for each of the top ten candidates"
                - "Set up a pairwise survey covering all 45 pairs"
                - "Ask three to five decision makers to complete it"
                - "Compare the pairwise ranking with the scored ranking and log the differences"
            - name: Prioritisation playbook for the whole product group
              description: |-
                ## Purpose
                Once a product group passes four or five teams, each invents its own scales and leadership can no longer compare rankings. A short playbook covering the shared criteria, scales, confidence rubric, cadences and decision rights, owned by one person and reviewed yearly, keeps prioritisation consistent without forcing every team into identical rituals.

                ## Milestones
                1. A playbook of no more than ten pages covering criteria, scales, rubric, cadences and decision rights.
                2. Each team lead's review collected and disagreements resolved.
                3. The playbook used by every team for one quarter.
                4. A named owner and a yearly review date recorded on the first page.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A playbook of ten pages or fewer is used by every team for a full quarter, with a named owner and a yearly review date."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Collect the scales and criteria each team currently uses"
                - "Ask the agent to draft a playbook outline from the collected material"
                - "Circulate the draft to team leads and resolve disagreements"
                - "Review the playbook with team leads @recurring(yearly)"
---

# Feature Prioritisation Frameworks

This area is for product teams, product managers and founders who have more good ideas than capacity and need a ranking they can defend. It starts with the foundations (one idea list, decision rights, agreed criteria, a chosen framework and honest scales for reach, impact, confidence and effort), then the operating rhythms that keep scores current, the frameworks worth learning properly, improvements to the scoring model, the planning events, the situations that change the rules and finally the advanced techniques an experienced practitioner reaches for.

What repeats is a weekly look at new submissions and interrupts, a monthly re-score of the top twenty with a readout for stakeholders, a quarterly capacity split, workshop and pruning, and a yearly check of the criteria and the big bets. The Purchase decision, Metrics log, Meeting notes and Board meeting templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
