---
id: product-management.north-star-metric-inputs
name: North Star Metric & Inputs
description: "A North Star that reflects real customer value, a tree of owned input metrics with guards, and the weekly reviews, quarterly targets and checks that keep the number honest."
category: business
version: 1.0.0
tags: [product-management, north-star-metric-inputs, team, manager, founder, metrics, input-metrics, counter-metrics]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - metrics-log
    - purchase-decision
    - board-meeting
    - remediation-plan
  pillars:
    - name: Product Management
      emoji: "🧩"
      description: "Deciding what to build and why: discovery and research, roadmaps and prioritisation, specs and launches, pricing and packaging, product analytics, and the feedback loops that keep a product honest."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: North Star Metric & Inputs
          description: "Choosing the single metric that best captures value delivered to customers and the input metrics teams can influence week to week."
          projects:
            - name: Value moment statement for the North Star
              description: |-
                ## Purpose
                Before any metric is chosen, the team needs one sentence describing the moment a customer gets real value: an invoice paid on time, a playlist finished, a report shared with a manager. Writing that sentence first stops the North Star debate collapsing into whichever number is easiest to pull, and gives every later candidate something to be tested against.

                ## Milestones
                1. Five recent customer stories gathered where the product clearly delivered value.
                2. The common moment of value across those stories named in one sentence.
                3. The sentence checked with two people who talk to customers every week, such as support or account managers.
                4. The agreed value statement saved at the top of the North Star working document.

                ## Notes
                Write the moment from the customer's side. Logging in is an activity; closing the month two days sooner is value.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-sentence value statement, checked with two customer-facing colleagues, sits at the top of the North Star working document."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down three times this month a customer said the product saved them something"
                - "Ask support for two more recent stories of clear customer value"
                - "Draft one sentence naming the shared moment of value"
                - "Test the sentence with an account manager and revise it"
            - name: Inventory of metrics the company already watches
              description: |-
                ## Purpose
                Most companies already track dozens of numbers across board decks, sales dashboards and team channels, and several of them quietly compete to be the one that matters. Listing every metric in regular use, who looks at it and what decisions it drives shows where the North Star will fit and which numbers it will have to displace.

                ## Milestones
                1. Every recurring dashboard, report and board slide listed with its owner.
                2. Each metric on them recorded with its current definition and how often it is read.
                3. Metrics with two or more conflicting definitions flagged.
                4. A short note naming the three metrics leadership actually steers by today.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A spreadsheet lists every metric in regular use with owner, definition and frequency, and names the three leadership steers by today."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Collect links to every dashboard and recurring report people mention in meetings"
                - "Copy each metric into one sheet with its owner and current definition"
                - "Flag metrics that two teams calculate differently"
                - "Ask two leaders which three numbers they would check first after a holiday"
            - name: Candidate North Star longlist
              description: |-
                ## Purpose
                Picking the first metric that sounds right usually means picking revenue or monthly active users, both of which miss the value moment for many products. Generating eight to twelve candidates across different shapes (a count of value events, a rate, a time to value, a breadth measure) gives the selection step real alternatives to compare.

                ## Milestones
                1. Eight to twelve candidate metrics written, each linked to the value statement.
                2. At least one candidate of each shape: a count, a rate, a time measure and a breadth measure.
                3. Each candidate described in one line with what would make it go up.
                4. Obvious non-starters, such as pure revenue or sign-ups, marked with the reason they fail.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A longlist of at least eight candidate North Star metrics, each tied to the value statement and covering four metric shapes."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Brainstorm candidates for 30 minutes with a designer and an engineer"
                - "Sort the candidates into counts, rates, time measures and breadth measures"
                - "Write one line for each candidate on what would make it rise"
                - "Strike out candidates that only measure the company's gain"
            - name: Choosing the North Star against six tests
              description: |-
                ## Purpose
                A good North Star reflects customer value, predicts revenue, moves within weeks rather than years, can be influenced by the product team, is understood by everyone and is hard to game. Scoring the shortlist against those six tests in one session, with the scores written down, turns a matter of taste into a decision the company can explain.

                ## Milestones
                1. Three to five shortlisted candidates scored one to five against each of the six tests.
                2. The leading candidate's weakest test named, with how a counter-metric will cover it.
                3. The decision approved by the founder or head of product.
                4. The chosen metric and the runner-up recorded with the reasons.

                ## Notes
                Expect no candidate to score five on every test. A metric that is strong on value and predictive power but slow to move is usually fixed by good input metrics, not by choosing a different North Star.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scored comparison of three to five candidates and a recorded decision naming the North Star, the runner-up and the reasons."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Cut the longlist to three to five candidates"
                - "Book a 90-minute scoring session with product, design, engineering and one commercial lead"
                - "Score each candidate one to five on the six tests"
                - "Record the chosen metric, the runner-up and the deciding reasons"
            - name: Written North Star definition with exclusions
              description: |-
                ## Purpose
                Weekly active teams means three different numbers to three analysts until someone writes down what counts as active, what counts as a team, which week boundary applies and whether internal and test accounts are excluded. A precise definition, with the query that produces it, is what lets the number be trusted in a board meeting.

                ## Milestones
                1. A definition stating the unit, the qualifying action, the time window and the time zone.
                2. Exclusions listed for internal staff, test accounts, bots and free trials if they are left out.
                3. One reference query or report that produces the number, stored where the team can read it.
                4. The definition signed off by the product and data leads.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed-off written definition and one reference query produce the same North Star figure when run by two different people."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the unit, qualifying action and time window in one paragraph"
                - "List every account type the number should exclude"
                - "Ask an analyst to build the reference query from the written definition"
                - "Have a second person rerun the query and compare the result"
            - name: Twelve-month backfill of the North Star
              description: |-
                ## Purpose
                Without history, nobody can say whether this month's North Star is good or bad, and teams lose interest in a number they cannot compare. Recalculating the metric for the last twelve months, using the agreed definition, reveals its trend, its seasonal shape and any data gaps before targets are set.

                ## Milestones
                1. Weekly values calculated for the past twelve months using the reference query.
                2. Gaps or breaks from tracking changes marked on the series.
                3. The trend and any obvious seasonal pattern described in two sentences.
                4. The series saved as the baseline for later targets.

                ## Notes
                Start from the **Metrics log** template. If tracking changed during the year, keep the break visible rather than smoothing it over.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A twelve-month weekly series of the North Star, with breaks marked and a two-sentence trend summary, is saved as the baseline."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Check how far back the events behind the definition were tracked"
                - "Run the reference query for each week of the past year"
                - "Mark weeks affected by outages or tracking changes"
                - "Ask the agent to draft a two-sentence summary of the trend and seasonality"
            - name: Input metric tree under the North Star
              description: |-
                ## Purpose
                Nobody can move the North Star directly on a Tuesday afternoon, but a team can move how many new accounts reach first value, how often existing users return or how many teammates each user invites. Breaking the North Star into three to five input metrics, usually across breadth, depth, frequency and efficiency, gives each team a number it can act on this week.

                ## Milestones
                1. A tree drawn with the North Star at the top and three to five inputs beneath it.
                2. Each input defined as precisely as the North Star itself.
                3. The arithmetic or logical link from each input to the North Star written beside it.
                4. The tree reviewed by the leads of every team expected to own an input.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reviewed metric tree with three to five precisely defined inputs, each with its written link to the North Star."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Sketch the North Star as reach times frequency times depth on a whiteboard"
                - "Pick three to five inputs a team could move within a month"
                - "Write a definition for each input in the same format as the North Star"
                - "Walk each team lead through the tree and note their objections"
            - name: Named owner for every input metric
              description: |-
                ## Purpose
                An input metric owned by everyone is watched by no one, and drops go unexplained for weeks. Giving each input one named owner, who reports on it, explains changes and proposes work against it, makes the tree a set of commitments rather than a diagram.

                ## Milestones
                1. One named person against each input metric, with their team.
                2. Each owner's responsibilities written in three lines: report, explain, propose.
                3. Every owner has confirmed they accept the input.
                4. The owner list published next to the metric tree.
              priority: high
              deadlineOffsetDays: 50
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each input metric has one named owner who has confirmed in writing, and the list is published beside the metric tree."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Propose an owner for each input based on which team's work moves it most"
                - "Meet each proposed owner to agree the three responsibilities"
                - "Resolve any input that two teams both claim"
                - "Publish the owner list beside the metric tree"
            - name: Counter-metrics that guard the North Star
              description: |-
                ## Purpose
                Push any metric hard enough and it bends: messages sent rises because notifications got louder, time in app rises because a flow got slower. Pairing the North Star and each input with a counter-metric, such as unsubscribe rate, support contacts per account or refund rate, means a gain only counts when the guard stays inside its limit.

                ## Milestones
                1. One counter-metric chosen for the North Star and for each input.
                2. An acceptable limit written for each counter-metric.
                3. Counter-metrics shown on the same dashboard view as the metrics they guard.
                4. A rule agreed that a win breaching its guard is reported as a problem, not a win.
              priority: high
              deadlineOffsetDays: 40
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every input and the North Star have a named counter-metric with a written limit, displayed beside it on the main dashboard."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the cheapest ways each input could be inflated without helping customers"
                - "Choose a counter-metric that would expose each one"
                - "Agree a tolerable limit for each counter-metric with the input owner"
                - "Review counter-metrics next to the North Star and flag any breach @recurring(monthly:12)"
            - name: One-page North Star brief for the company
              description: |-
                ## Purpose
                Sales, support and finance will hear the North Star mentioned long before they understand it, and a half-understood metric breeds suspicion. One page covering the value statement, the definition, the inputs and owners, the guards and how the number will be used answers the questions people would otherwise ask in the corridor.

                ## Milestones
                1. A one-page brief covering value statement, definition, inputs, owners and counter-metrics.
                2. A short section on what the North Star will and will not be used for, including performance reviews.
                3. The brief read by one person from each department and their questions answered in it.
                4. The final brief linked from the company wiki or handbook home page.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A one-page North Star brief, tested with one reader from each department, is linked from the company wiki home page."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft the brief from the value statement, definition and metric tree"
                - "State plainly whether the North Star will feature in individual performance reviews"
                - "Send the draft to one reader in each department and collect their questions"
                - "Publish the final version on the wiki home page"
            - name: Weekly input metrics review
              description: |-
                ## Purpose
                Input metrics only change behaviour if someone looks at them every week while there is still time to react. A 30-minute review where each owner reports the number, the change from last week and the one thing they will do about it keeps the tree alive and surfaces problems a month before they reach the North Star.

                ## Milestones
                1. A standing 30-minute slot in the calendar with every input owner invited.
                2. A fixed agenda covering number, change, explanation and next action for each input.
                3. Actions from each review recorded with an owner and checked the following week.
                4. Eight consecutive weekly reviews held without cancellation.

                ## Notes
                Start from the **Meeting notes** template. Keep the North Star itself to the last two minutes; the point of the meeting is the inputs.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly input reviews held, each with recorded numbers, explanations and actions checked the next week."
                cadence: rolling
              tasks:
                - "Book a recurring 30-minute slot with every input owner"
                - "Write the four-line agenda into the meeting notes page"
                - "Refresh the input numbers in the review page before the meeting @recurring(weekly:mon)"
                - "Run the input review and record each owner's next action @recurring(weekly:tue)"
            - name: Monthly North Star narrative for leadership
              description: |-
                ## Purpose
                Leaders reading a chart without context draw their own conclusions, often the wrong ones. A short written narrative each month, explaining what moved the North Star, which inputs drove it, what the guards show and what the team will do next, builds a shared story and a record of how the business was understood at the time.

                ## Milestones
                1. A narrative template with sections for movement, drivers, guards and next steps.
                2. The first narrative sent within five working days of month end.
                3. Leaders' questions from each narrative answered in the following month's edition.
                4. Six monthly narratives archived in one place.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Six consecutive monthly North Star narratives sent within five working days of month end and archived together."
                cadence: rolling
              tasks:
                - "Create a narrative template with four headed sections"
                - "Ask the agent to draft the narrative from the month's input numbers and review notes @recurring(monthly:5)"
                - "Edit the draft so every claim points to a number on the dashboard"
                - "File each finished narrative in the shared archive"
            - name: Single source of truth North Star dashboard
              description: |-
                ## Purpose
                When the North Star appears on four dashboards with four slightly different numbers, every meeting starts with an argument about which is right. One certified dashboard, built from the reference query and showing the North Star, the inputs and their guards, becomes the only version anyone quotes.

                ## Milestones
                1. One dashboard showing North Star, inputs and counter-metrics from the reference queries.
                2. The dashboard labelled as the certified source, with its definition linked.
                3. Older dashboards showing the North Star retired or marked as unofficial.
                4. A weekly freshness check in place so a stalled data load is caught within days.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One certified dashboard is the only place the North Star is quoted from, and older versions are retired or marked unofficial."
                cadence: rolling
              tasks:
                - "Build the dashboard view from the reference queries only"
                - "Add a link to the written definition at the top of the dashboard"
                - "Mark or retire every older chart that shows the North Star"
                - "Check the dashboard refreshed on schedule and matches the reference query @recurring(weekly:thu)"
            - name: Metric definition change log
              description: |-
                ## Purpose
                Definitions drift: someone excludes a new account type, a tracking event gets renamed, a time zone changes, and a jump in the North Star turns out to be a query edit. Logging every change to the North Star or input definitions, with the date, the reason and the size of the effect, keeps the history honest and explains discontinuities later.

                ## Milestones
                1. A change log page holding date, metric, change, reason, approver and estimated effect.
                2. A rule that no definition changes without an entry and sign-off from the data lead.
                3. Past known changes added retrospectively from memory and query history.
                4. Every chart annotated where a logged change caused a break.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every definition change since the log started has an entry with reason, approver and effect, and matching chart annotations."
                cadence: rolling
              tasks:
                - "Create the change log page with six columns"
                - "Add the changes you already know about from the past year"
                - "Agree with the data lead that changes need a log entry first"
                - "Review pending definition changes and annotate affected charts @recurring(monthly:20)"
            - name: Quarterly input targets
              description: |-
                ## Purpose
                Targets set on the North Star alone leave teams guessing how much of it is theirs. Setting a target for each input every quarter, grounded in the baseline and the planned work, gives owners a clear bar and lets the company check whether hitting the inputs actually moves the North Star as expected.

                ## Milestones
                1. A baseline and recent trend recorded for each input.
                2. A target for each input agreed with its owner, with a low, expected and stretch level.
                3. The implied North Star movement written next to the targets.
                4. Targets published before the quarter starts and scored at its end.
              priority: high
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Each input has an owner-agreed quarterly target with three levels, published before the quarter begins and scored at its end."
                cadence: cyclic
              tasks:
                - "Pull each input's last two quarters from the certified dashboard"
                - "Draft low, expected and stretch levels with each owner"
                - "Write down the North Star change the targets imply"
                - "Score last quarter's inputs and set the next quarter's targets @recurring(quarterly)"
            - name: Alert thresholds for sudden input drops
              description: |-
                ## Purpose
                A bug that breaks invitations on Friday can halve an input by Monday, and waiting for the weekly review costs days of lost value. Setting alert thresholds on each input, tuned so they fire on real breaks and not on normal weekday swings, gets the owner looking within hours.

                ## Milestones
                1. A normal daily range calculated for each input from the last eight weeks.
                2. An alert threshold set for each input, sent to its owner.
                3. A short runbook for what the owner checks first when an alert fires.
                4. False alarms reviewed and thresholds adjusted after the first month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each input has a tuned alert sent to its owner, a written first-check runbook, and fewer than two false alarms a month."
                cadence: rolling
              tasks:
                - "Calculate each input's normal daily range over the last eight weeks"
                - "Set an alert on each input that notifies its owner directly"
                - "Write five first checks for an owner when an alert fires"
                - "Review false alarms and adjust the thresholds @recurring(monthly:26)"
            - name: Roadmap items tagged with the input they move
              description: |-
                ## Purpose
                Roadmaps fill with work that cannot be traced to any metric, and then nobody can say why the North Star did or did not move after a busy quarter. Requiring each roadmap item to name the input it is expected to move, and by roughly how much, makes the link explicit and shows which inputs are getting no investment at all.

                ## Milestones
                1. A required field on roadmap items naming the target input metric.
                2. Every current roadmap item tagged, or marked as maintenance or compliance work.
                3. A count of roadmap items per input showing where effort is concentrated.
                4. Inputs with no planned work raised with leadership.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every active roadmap item names an input metric or an explicit exemption, and the count per input is reviewed monthly."
                cadence: rolling
              tasks:
                - "Add an input metric field to the roadmap tool"
                - "Tag each current roadmap item with an input or an exemption"
                - "Count roadmap items per input and share the result"
                - "Check that new roadmap items name an input metric @recurring(monthly:22)"
            - name: Quarterly North Star fitness check
              description: |-
                ## Purpose
                Metrics that fitted a single-player product can stop fitting once teams, enterprise plans or a second product arrive. Asking each quarter whether the North Star still tracks customer value, still predicts revenue and is still hard to game catches a drifting metric before the company spends a year steering by it.

                ## Milestones
                1. A five-question fitness checklist written down.
                2. The checklist answered each quarter with evidence for each answer.
                3. Any failing test recorded with a proposed fix: a new guard, a changed input or a full review.
                4. Results shared with leadership in the next monthly narrative.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Four quarterly fitness checks completed with evidence per question, and any failing test linked to a recorded fix."
                cadence: cyclic
              tasks:
                - "Write the five fitness questions on one page"
                - "Gather evidence for each question from the dashboard and customer notes"
                - "Record any failing test with a proposed fix"
                - "Run the North Star fitness check with the head of product @recurring(quarterly)"
            - name: Team input scorecards
              description: |-
                ## Purpose
                Once several teams own inputs, each needs to see its own number, its target and its guard without wading through the whole company dashboard. A scorecard per team, updated monthly and shown at the team's own meeting, keeps the connection between daily work and the North Star visible to the engineers and designers doing it.

                ## Milestones
                1. A one-view scorecard for each owning team with input, target, trend and guard.
                2. Each scorecard shown at the team's own meeting at least monthly.
                3. Team members able to say which input they own and its current value.
                4. Scorecards linked from the certified dashboard.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every owning team has a scorecard reviewed at its own meeting each month, and team members can name their input and its value."
                cadence: rolling
              tasks:
                - "Build a scorecard view for each team that owns an input"
                - "Agree with each team lead where the scorecard is shown"
                - "Ask three team members which input they own and note the answers"
                - "Update every team scorecard and post the links @recurring(monthly:9)"
            - name: Monthly data quality audit of metric queries
              description: |-
                ## Purpose
                Event tracking breaks quietly when an app release renames a button or an integration stops sending data, and the North Star dips for reasons that have nothing to do with customers. A monthly audit comparing the metric queries against raw counts, known accounts and release notes catches those silent breaks before anyone builds a story on them.

                ## Milestones
                1. A checklist of ten data checks covering event volumes, duplicates, missing days and test accounts.
                2. The checklist run monthly with results recorded.
                3. Every failed check logged with a fix owner and date.
                4. Two consecutive months with all checks passing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The ten-point data quality checklist has been run monthly for six months, with every failure logged and fixed."
                cadence: rolling
              tasks:
                - "Write ten data checks for the North Star and input queries"
                - "Compare last month's event volumes against app release dates"
                - "Log each failed check with an owner and fix date"
                - "Run the data quality checklist on the metric queries @recurring(monthly:15)"
            - name: Practising driver tree decomposition
              description: |-
                ## Purpose
                Breaking a metric into its drivers is a skill that improves with repetition, and most product managers try it once on a whiteboard and stop. Decomposing three familiar metrics from other products, then your own North Star, builds the habit of asking which lever actually moves which number.

                ## Milestones
                1. Three practice trees built for familiar products, such as a ride service, a music app and an accounting tool.
                2. Each tree checked for missing branches and overlapping branches.
                3. Your own North Star decomposed again from scratch and compared with the existing tree.
                4. Two improvements to the real tree written up.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three practice trees and a fresh decomposition of your own North Star completed, with two written improvements to the real tree."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Decompose a ride-hailing service's trips per week into its drivers"
                - "Repeat the exercise for a music app and an accounting tool"
                - "Check each practice tree for gaps and double counting"
                - "Rebuild your own tree from a blank page and compare it with the current one"
            - name: Leading and lagging indicators in your own data
              description: |-
                ## Purpose
                Revenue and renewals tell you what happened months ago; a leading indicator tells you what is about to happen. Learning to test, with your own historical data, which early behaviours precede the North Star and by how many weeks is the core skill behind choosing good inputs.

                ## Milestones
                1. The difference between leading and lagging indicators explained in your own words with two product examples.
                2. Three candidate early behaviours tested against later North Star values for past cohorts.
                3. The typical lead time from each behaviour to the North Star estimated.
                4. A note on which behaviour is the most useful early warning.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three early behaviours tested against later North Star values, with lead times estimated and the best early warning recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read one practitioner guide on leading and lagging metrics and note two examples"
                - "Pick three behaviours from a user's first fortnight"
                - "Compare each behaviour with that cohort's North Star value two months later"
                - "Write a one-paragraph note on the best early warning"
            - name: Correlation versus causation for input metrics
              description: |-
                ## Purpose
                Users who invite a teammate retain better, but that does not mean forcing invitations will make anyone stay. Studying confounders, selection effects and reverse causation, then checking which of your inputs have experimental evidence behind them, stops a team pouring a quarter into a correlate that does nothing.

                ## Milestones
                1. Confounding, selection bias and reverse causation each explained with a product example.
                2. Each input labelled by its evidence: correlation only, natural experiment or controlled test.
                3. Inputs resting only on correlation flagged for a test.
                4. One controlled test proposed for the weakest-evidence input.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every input is labelled with its level of causal evidence, and a controlled test is proposed for the weakest one."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read a short introduction to confounding and selection bias"
                - "Write one product example of reverse causation"
                - "Label each input by the strength of evidence linking it to the North Star"
                - "Draft a test proposal for the weakest-evidence input"
            - name: Goodhart's law and spotting metric gaming
              description: |-
                ## Purpose
                When a measure becomes a target, people find the cheapest way to hit it, rarely out of bad faith and usually because the target made it rational. Studying well-known cases of gaming and listing how each of your own inputs could be gamed helps you design guards and incentives before the first target is set.

                ## Milestones
                1. Three published cases of metric gaming summarised with what went wrong.
                2. A list of plausible gaming routes for the North Star and each input.
                3. Each route matched to a counter-metric or a process check.
                4. A quarterly scan for early signs of gaming in place.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Gaming routes are listed for every input, each matched to a guard, and a quarterly gaming scan has been recorded at least once."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read three documented cases of metric targets backfiring"
                - "List how a team under pressure could inflate each input"
                - "Match each gaming route to a counter-metric or a review step"
                - "Scan inputs and their guards for signs of gaming @recurring(quarterly)"
            - name: Studying published North Star examples
              description: |-
                ## Purpose
                Many product companies have written publicly about their North Star and the inputs beneath it, and comparing several reveals patterns that are hard to see from inside one company. Reading eight examples across marketplaces, subscriptions, collaboration tools and media, and noting what each one measures, sharpens your judgement of your own choice.

                ## Milestones
                1. Eight published North Star examples collected across at least four business models.
                2. Each example recorded with its metric, its shape and its likely inputs.
                3. Three patterns written up, such as rates in mature products and counts in growing ones.
                4. One idea from the examples tested against your own North Star.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Eight published examples recorded across four business models, with three patterns noted and one idea tested against your metric."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Collect eight public write-ups of company North Star metrics"
                - "Record each metric, its shape and its likely inputs in a table"
                - "Write three patterns you see across the examples"
                - "Test one borrowed idea against your own metric tree"
            - name: Telling real change from noise with control charts
              description: |-
                ## Purpose
                Six percent off a weekly input may be a real problem or an ordinary wobble, and reacting to every wobble wears out the team. Learning to plot inputs on a simple control chart, with limits drawn from their own history and seasonal patterns accounted for, tells owners when a change deserves an investigation.

                ## Milestones
                1. Process behaviour or control charts explained in your own words.
                2. Upper and lower limits calculated for each input from twenty or more weeks of data.
                3. Known seasonal effects, such as holidays and month ends, noted on each chart.
                4. A rule written for which signals trigger an investigation.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each input has a control chart with limits from at least twenty weeks of history and a written investigation rule."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read a beginner's guide to process behaviour charts"
                - "Calculate limits for one input from twenty weeks of data"
                - "Mark holidays and month ends on the chart"
                - "Write the rule for which signals start an investigation"
            - name: Simpson's paradox and mix shifts in the North Star
              description: |-
                ## Purpose
                An overall rate can fall while every segment's rate rises, simply because the mix of customers changed, such as a surge of small accounts or a new country with lower usage. Learning to split the North Star by segment and separate mix effects from real behaviour change stops the team chasing a decline that is not there.

                ## Milestones
                1. Simpson's paradox explained with a worked example from a product context.
                2. The North Star split by three segment dimensions, such as plan, region and acquisition channel.
                3. One past movement decomposed into a mix effect and a within-segment effect.
                4. A standard segment split added to the monthly narrative.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One past North Star movement has been split into mix and within-segment effects, and a segment split appears in the monthly narrative."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Work through one published example of Simpson's paradox"
                - "Split the North Star by plan, region and acquisition channel"
                - "Decompose last quarter's change into mix and behaviour effects"
                - "Add the segment split to the narrative template"
            - name: Validating the North Star against retention and revenue
              description: |-
                ## Purpose
                If accounts with a higher North Star do not retain better or pay more, the metric is measuring activity rather than value. Checking past cohorts for that link, before targets and bonuses hang on the number, is the cheapest insurance the company can buy against steering by the wrong metric.

                ## Milestones
                1. Accounts from four past cohorts grouped by their early North Star level.
                2. Twelve-month retention and revenue compared across those groups.
                3. The strength and shape of the relationship written down with its caveats.
                4. A recorded decision to keep, adjust or replace the North Star.

                ## Notes
                A link in historical data is evidence, not proof. Pair it with the quarterly fitness check and at least one experiment on an input.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written analysis of four cohorts compares North Star level with twelve-month retention and revenue and records a keep, adjust or replace decision."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick four cohorts with at least twelve months of history"
                - "Group accounts by their North Star level in the first quarter"
                - "Compare retention and revenue across the groups"
                - "Record the keep, adjust or replace decision with its caveats"
            - name: Sensitivity test of which inputs move the North Star
              description: |-
                ## Purpose
                Inputs that look equal on the tree rarely matter equally: a ten percent gain in one may move the North Star twice as much as the same gain in another. Estimating the rough sensitivity of the North Star to each input tells leadership where a quarter of effort is best spent.

                ## Milestones
                1. The arithmetic or modelled link from each input to the North Star written as a formula or estimate.
                2. The North Star change from a ten percent gain in each input calculated.
                3. Inputs ranked by sensitivity with the assumptions listed.
                4. The ranking shared at quarterly target setting.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each input has an estimated effect on the North Star of a ten percent gain, ranked and presented at quarterly target setting."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the formula or estimate linking each input to the North Star"
                - "Calculate the North Star effect of a ten percent gain in each input"
                - "List the assumptions behind each estimate"
                - "Present the ranking at the next target-setting session"
            - name: Replacing a vanity metric on the main dashboard
              description: |-
                ## Purpose
                Total sign-ups, cumulative downloads and page views only ever go up, so they reassure everyone while saying nothing about value. Swapping the vanity number at the top of the main dashboard or board deck for the North Star changes what people discuss first, which is most of what a North Star is for.

                ## Milestones
                1. The vanity metrics in the most prominent positions identified.
                2. The case for swapping each one written in a short note.
                3. The North Star moved into the top position, with the vanity metric demoted or removed.
                4. Leaders confirm the change after two monthly reviews.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The North Star occupies the top position on the main dashboard and board deck, and the former vanity metric is demoted or removed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Screenshot the top section of the main dashboard and board deck"
                - "Circle each metric that can only ever rise"
                - "Write a short note proposing the swap to leadership"
                - "Move the North Star into the top position once agreed"
            - name: Deciding what counts as an active user
              description: |-
                ## Purpose
                Plenty of North Stars depend on the word active, and the threshold behind it decides the number: one login a month, three key actions a week, or a completed task. Testing several thresholds against later retention and choosing the one that best separates engaged from drifting users gives the definition a reason, not just a convention.

                ## Milestones
                1. Three to five candidate activity thresholds written precisely.
                2. Each threshold tested against three-month retention for past users.
                3. The chosen threshold recorded with the evidence and the runner-up.
                4. The North Star definition and change log updated.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded activity threshold, chosen from at least three tested options by its link to retention, is in the definition and change log."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write three to five possible thresholds for an active user"
                - "Test each threshold against three-month retention"
                - "Choose the threshold that best separates retained users"
                - "Update the definition and add a change log entry"
            - name: Rate or count decision for the North Star
              description: |-
                ## Purpose
                Counts such as weekly active teams reward growth, while rates such as the share of teams completing a key task reward quality, and each can rise while the other falls. Deciding deliberately which form the North Star takes, and which form appears as its partner metric, stops the argument every time the two diverge.

                ## Milestones
                1. The count and rate versions of the North Star both calculated for the past year.
                2. Periods where the two diverged identified and explained.
                3. A decision recorded on which is the North Star and which is its partner metric.
                4. The partner metric added to the certified dashboard.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Both forms calculated over a year, divergences explained, and a recorded decision naming the North Star form and its partner."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Calculate the count and rate versions for the last twelve months"
                - "Mark the periods where they moved in opposite directions"
                - "Discuss with leadership which behaviour the company most wants to reward"
                - "Record the choice and add the partner metric to the dashboard"
            - name: Retiring inputs that stopped predicting the North Star
              description: |-
                ## Purpose
                Inputs chosen two years ago can lose their link as the product changes: an onboarding step that once predicted retention means little after the flow is redesigned. Re-testing each input every year and retiring the ones that no longer predict keeps owners working on levers that still matter.

                ## Milestones
                1. Each input's link to the North Star re-tested on the latest year of data.
                2. Inputs whose link has weakened noted with the likely reason.
                3. A replacement input proposed for any retired one.
                4. Owners and scorecards updated, with the change logged.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every input has been re-tested on the latest year of data, and any retired input has a logged replacement and updated owner."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Re-run the link analysis for each input on the latest year"
                - "Note any input whose link has clearly weakened"
                - "Propose a replacement for each input you plan to retire"
                - "Schedule the annual input re-test with the data lead @recurring(yearly)"
            - name: Choosing a metric tree or dashboard tool
              description: |-
                ## Purpose
                Spreadsheets cope with one North Star and four inputs, but once teams, segments and alerts multiply, people start asking for a dedicated metric tree or business intelligence tool. Comparing two or three options against your real needs, data sources and budget avoids buying a platform the team abandons in six months.

                ## Milestones
                1. Requirements written: data sources, users, alerts, tree view and budget.
                2. Two or three options shortlisted, including staying on the current setup.
                3. Each option trialled on the real North Star and one input.
                4. A decision recorded with cost, owner and review date.

                ## Notes
                Start from the **Purchase decision** template. Staying on the existing spreadsheet or reporting tool is a legitimate option to score.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded tool decision compares at least two options, each trialled on the real North Star, with cost and owner named."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the five things the current setup cannot do"
                - "Shortlist two tools plus the option of staying put"
                - "Trial each option with the North Star and one input"
                - "Record the decision with cost, owner and review date"
            - name: Company kick-off session for the North Star
              description: |-
                ## Purpose
                Rolling out a North Star by email gets it read by a fraction of the company and understood by fewer. A 45-minute session for everyone, walking through the value statement, the tree, the owners and the guards, with time for awkward questions, makes the metric common language from the first week.

                ## Milestones
                1. A date set and the whole company invited.
                2. A short deck covering why, what, who owns which input and how the number will be used.
                3. At least ten minutes of open questions, with unanswered ones followed up in writing.
                4. The recording and deck posted alongside the one-page brief.
              priority: medium
              deadlineOffsetDays: 70
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The kick-off session has been held for the whole company, and the recording, deck and written follow-ups are posted with the brief."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick a date when most of the company can attend"
                - "Build a ten-slide deck from the one-page brief"
                - "Ask two team leads to explain their input in two minutes each"
                - "Post the recording and answers to open questions afterwards"
            - name: First quarterly North Star review with leadership
              description: |-
                ## Purpose
                Weekly reviews look at inputs; once a quarter leadership needs to step back and ask whether the inputs moved the North Star as predicted and whether effort should shift between them. Running the first of these reviews well sets the format for every one after it.

                ## Milestones
                1. A pre-read sent three days ahead with North Star, inputs, targets and guard results.
                2. Each input owner presents predicted versus actual for the quarter.
                3. Decisions on reallocating effort between inputs recorded.
                4. The next quarterly review booked.

                ## Notes
                Start from the **Meeting notes** template. Keep the pre-read to two pages so it actually gets read.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A quarterly review is held with a pre-read, predicted versus actual for each input and recorded reallocation decisions."
                cadence: cyclic
              tasks:
                - "Draft the pre-read from the dashboard and monthly narratives"
                - "Ask each input owner for a predicted versus actual slide"
                - "Record every reallocation decision with an owner"
                - "Book the next quarterly North Star review @recurring(quarterly)"
            - name: North Star section for the board pack
              description: |-
                ## Purpose
                Boards and investors see dozens of metrics a quarter and remember the ones presented consistently. A fixed North Star page in every board pack, with the same chart, the inputs, the guards and a two-line explanation, lets directors judge progress quarter on quarter without relearning the definitions.

                ## Milestones
                1. One board page designed with the North Star chart, inputs table and guard status.
                2. A two-line definition footnote that stays the same each quarter.
                3. The page used in the next board pack, with directors' questions noted.
                4. The page updated each quarter within the board pack timeline.

                ## Notes
                Start from the **Board meeting** template. Never change the definition between board meetings without saying so on the page.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The same North Star page, with an unchanged definition footnote, has appeared in two consecutive board packs."
                cadence: cyclic
              tasks:
                - "Design the board page with chart, inputs table and guard status"
                - "Write a two-line definition footnote for the page"
                - "Note every board question about the North Star"
                - "Refresh the North Star page before each board meeting @recurring(quarterly)"
            - name: Annual North Star target-setting workshop
              description: |-
                ## Purpose
                Yearly plans often set a revenue target first and back into everything else, leaving the North Star as an afterthought. A workshop before the budget is fixed, where leaders agree the year's North Star target and the input targets that would add up to it, puts customer value into the plan rather than beside it.

                ## Milestones
                1. The past year's North Star and input results summarised in a pre-read.
                2. A half-day workshop held with leadership and input owners.
                3. An annual North Star target agreed with the input targets that support it.
                4. The targets written into the annual plan before the budget is signed off.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "An annual North Star target and supporting input targets are agreed at a workshop and written into the plan before budget sign-off."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Find out the date the annual budget will be fixed"
                - "Prepare a pre-read with the year's North Star and input results"
                - "Run the half-day workshop with leaders and input owners"
                - "Write the agreed targets into the annual plan document"
            - name: Incident review after a sharp North Star drop
              description: |-
                ## Purpose
                Sooner or later the North Star falls hard in a single week, and the pressure to explain it fast leads to guesses presented as findings. A structured review, checking data first, then releases, then external events, then segments, finds the real cause and leaves a record that speeds up the next one.

                ## Milestones
                1. Data problems ruled in or out using the quality checklist.
                2. Releases, outages, pricing changes and external events from the period listed.
                3. The drop split by segment and input to locate where it happened.
                4. A written cause, actions and owners shared within ten working days.

                ## Notes
                Start from the **Remediation plan** template. Write down what you ruled out as well as what you found.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A written incident review names the cause of the drop, what was ruled out, and actions with owners, shared within ten working days."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Run the data quality checklist against the affected weeks"
                - "List every release, outage and pricing change in the period"
                - "Split the drop by segment and by input"
                - "Share the written cause and actions with leadership"
            - name: Founder North Star before product-market fit
              description: |-
                ## Purpose
                Before product-market fit a startup has few users, noisy numbers and a product that changes monthly, so a polished metric tree is premature. A founder can still pick one provisional North Star, often a small count of customers reaching the value moment each week, plus one or two inputs, and commit to revisiting the choice every eight weeks.

                ## Milestones
                1. A provisional North Star chosen, with the word provisional in its name.
                2. One or two inputs the founder can move personally each week.
                3. Numbers tracked by hand if needed, with each customer named.
                4. A revisit every eight weeks, with the reasons for keeping or changing the metric recorded.

                ## Notes
                With fewer than about 50 active customers, look at names, not percentages. A spreadsheet with one row per customer beats any dashboard.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A provisional North Star and one or two inputs are tracked weekly by customer name, with an eight-week revisit date and reasons recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write down by name the customers who reached the value moment last week"
                - "Choose a provisional North Star from that list"
                - "Pick one or two inputs you can move yourself this week"
                - "Put the eight-week revisit date in the calendar"
            - name: Inheriting a team with no agreed North Star
              description: |-
                ## Purpose
                Managers arriving in a product team often find three dashboards, a revenue target from finance and no shared view of value. In the first sixty days, gathering what each stakeholder already measures, proposing a draft North Star and testing it with the team builds credibility and a common goal without trampling what came before.

                ## Milestones
                1. Five stakeholder conversations held on what they measure and why.
                2. A draft North Star and inputs proposed in writing.
                3. The draft tested with the team and revised.
                4. Agreement from your own manager recorded before day sixty.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A draft North Star and inputs, tested with the team, is agreed with your manager within sixty days of starting."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Book five stakeholder conversations in your first fortnight"
                - "Ask each stakeholder which number they would defend in a budget meeting"
                - "Write a draft North Star and inputs on one page"
                - "Test the draft with your team and note their changes"
            - name: Squad-level input metric for a single team
              description: |-
                ## Purpose
                Engineers and designers on a squad rarely feel the North Star day to day; what they can feel is one input, or a sub-input beneath it, that their releases move. Translating the company tree into one clear squad metric, shown where the squad works, makes the link between a pull request and customer value obvious.

                ## Milestones
                1. The squad's input or sub-input chosen and defined.
                2. Its link to the company North Star written in one sentence.
                3. The number shown at the squad's stand-up or planning each week.
                4. Each squad release note states the expected effect on the metric.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The squad's metric is defined, linked to the North Star in one sentence and shown at the squad's weekly planning."
                cadence: rolling
              tasks:
                - "Pick the input or sub-input the squad's work moves most"
                - "Write one sentence linking it to the company North Star"
                - "Add the expected effect on the metric to the release note format"
                - "Post the squad metric and its weekly change in the team channel @recurring(weekly:fri)"
            - name: North Star for a B2B product with few large accounts
              description: |-
                ## Purpose
                With forty enterprise customers, a user-level North Star is dominated by two big accounts and a single churned deal can swing the number by ten percent. Account-level measures, such as accounts with a set share of licensed seats active each week, plus a named-account view, give a B2B team a metric that reflects value without hiding behind averages.

                ## Milestones
                1. An account-level North Star defined, such as accounts above a weekly active seat threshold.
                2. Every account listed with its current value and trend.
                3. The influence of the largest five accounts on the number checked.
                4. Customer success agrees the metric matches what they see in renewal conversations.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An account-level North Star is defined, every account's value is listed, and customer success confirms it matches renewal signals."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Calculate the share of licensed seats active each week for every account"
                - "Test what happens to the number if the largest account churns"
                - "Choose an account-level threshold for the North Star"
                - "Review the account list with customer success"
            - name: North Star for a two-sided marketplace
              description: |-
                ## Purpose
                Marketplaces serve two groups at once, and a metric chosen for one side, such as buyer visits, can rise while sellers quietly leave. A North Star built on completed transactions or matches, with inputs for each side and liquidity measures such as time to first match, keeps both sides in view.

                ## Milestones
                1. A transaction-based North Star defined, such as weekly completed bookings.
                2. Inputs chosen for supply, demand and matching.
                3. A liquidity measure added, such as the share of listings matched within a week.
                4. Counter-metrics agreed for trust, such as disputes or cancellations per transaction.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A transaction-based North Star with supply, demand and matching inputs, a liquidity measure and trust counter-metrics is recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Define the completed transaction that represents value for both sides"
                - "List one input each for supply, demand and matching"
                - "Calculate the share of listings matched within a week"
                - "Agree a trust counter-metric with the operations lead"
            - name: Input metrics for a platform or infrastructure team
              description: |-
                ## Purpose
                Platform teams serve other engineers, so the company North Star feels distant and their work rarely shows in it directly. Choosing inputs that capture how the platform speeds up product teams, such as time from commit to production or the share of services on the supported path, gives the team a credible place on the tree.

                ## Milestones
                1. Internal customers of the platform listed with what they need from it.
                2. Two or three platform inputs defined that product teams would recognise as value.
                3. A written chain from each platform input to a company input or the North Star.
                4. The inputs reviewed by two product team leads.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two or three platform inputs are defined, each with a written link to the company tree, and reviewed by two product team leads."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the product teams that depend on the platform"
                - "Ask two of those teams what slows them down most"
                - "Define two or three platform inputs from their answers"
                - "Write the chain from each platform input to the company tree"
            - name: Composite North Star risks and alternatives
              description: |-
                ## Purpose
                Weighted composites, such as an engagement score built from five actions, look attractive because nothing important is left out, but they are hard to explain, easy to game through the cheapest component and break whenever a weight changes. Assessing a proposed composite against a simpler metric plus inputs usually shows the simpler design wins.

                ## Milestones
                1. The proposed composite's components and weights documented.
                2. Its behaviour over the past year compared with a single-metric alternative.
                3. The cheapest component to inflate identified.
                4. A decision recorded to adopt, simplify or reject the composite.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on a proposed composite North Star, backed by a year-long comparison with a single-metric alternative."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write out the composite's components and weights"
                - "Calculate the composite and a single-metric alternative for the past year"
                - "Identify which component is cheapest to inflate"
                - "Record the decision to adopt, simplify or reject"
            - name: North Star across several products
              description: |-
                ## Purpose
                Companies with three products can end up with three North Stars that cannot be added together, and leadership loses a single view of value. Deciding whether to keep separate North Stars under a shared company measure, or move to a common unit such as customers active in any product, needs a clear rule before the next product launches.

                ## Milestones
                1. Each product's current North Star and definition listed side by side.
                2. Options compared: separate metrics, a shared unit or a company measure above them.
                3. Double counting of customers who use several products resolved in the definition.
                4. The chosen structure recorded with how new products will join it.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded structure for North Stars across products, with a double-counting rule and a written route for new products to join."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List each product's North Star and definition side by side"
                - "Count customers who use more than one product"
                - "Compare a shared unit with separate metrics under a company measure"
                - "Record the chosen structure and how new products join it"
            - name: Driver analysis to estimate input elasticities
              description: |-
                ## Purpose
                Given a year or two of clean data, a regression or similar driver model can estimate how much each input historically moved the North Star, holding the others steady. The results are rough and correlational, but they sharpen target setting and expose inputs that matter less than the tree assumed.

                ## Milestones
                1. A clean weekly dataset of the North Star, inputs and known external factors.
                2. A driver model fitted by an analyst, with its assumptions and fit stated plainly.
                3. Estimated effects compared with the earlier sensitivity estimates.
                4. Findings and limits presented at quarterly target setting.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A documented driver model with stated assumptions estimates each input's historical effect and is presented at quarterly target setting."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Assemble a weekly dataset of the North Star, inputs and external factors"
                - "Brief an analyst on the question and the known data breaks"
                - "Compare the model's estimates with the earlier sensitivity ranking"
                - "Present the findings and their limits at target setting"
            - name: North Star forecast for planning
              description: |-
                ## Purpose
                Without a forecast, targets end up either timid or fantasy. A simple forecast of the North Star, built from the input targets, the historical trend and seasonality, with a range rather than a single line, tells leadership what the plan implies and when to worry that it is off track.

                ## Milestones
                1. A baseline forecast from trend and seasonality alone.
                2. A plan forecast built up from the input targets.
                3. A range shown for both, with the assumptions listed.
                4. Actuals plotted against the forecast each month, with large gaps explained.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A baseline and plan forecast with ranges exist, and actuals have been compared against them for three months with gaps explained."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Build a baseline forecast from the trend and last year's seasonality"
                - "Build a plan forecast from the quarterly input targets"
                - "Show a range for each forecast and list the assumptions"
                - "Plot this month's actual against both forecasts"
            - name: Migrating to a new North Star without losing history
              description: |-
                ## Purpose
                Changing the North Star is sometimes right, after a pivot, a new pricing model or a failed validation, but done abruptly it erases years of comparison and looks like moving the goalposts. A planned migration, with both metrics reported in parallel for a quarter and the history recalculated, keeps the change credible.

                ## Milestones
                1. The reason for change written up with the evidence.
                2. The new metric backfilled for as much history as the data allows.
                3. Old and new metrics reported side by side for one full quarter.
                4. The old metric retired from the dashboard and board pack with a dated note.
                5. Inputs, owners and targets re-mapped to the new North Star.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Old and new North Stars reported in parallel for one quarter, history backfilled, and the old metric retired with a dated note."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Write the case for changing the North Star with its evidence"
                - "Backfill the new metric as far as the data allows"
                - "Report both metrics side by side for one full quarter"
                - "Re-map inputs, owners and targets to the new North Star"
---

# North Star Metric & Inputs

This area is for product teams, managers and founders who want one number that captures the value customers get, and a handful of input metrics that teams can move each week. It runs from the foundations (a value statement, a chosen and precisely defined North Star, an input tree with owners and counter-metrics), through the weekly and monthly operating rhythms, the analytical skills worth learning and improvements to the metric itself, to the dated reviews and workshops, situations such as a startup before product-market fit or a B2B product with few accounts, and finally the specialist work of driver models, forecasts and migrating to a new North Star.

What repeats is a weekly input review, dashboard check and squad update, a monthly narrative, data quality audit, alert review and scorecard refresh, quarterly input targets, fitness checks and board pages, and a yearly re-test of every input. The Meeting notes, Metrics log, Purchase decision, Board meeting and Remediation plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
