---
id: strategy-leadership.strategic-bets-prioritisation
name: Strategic Bets Prioritisation
description: "A full list of what you are funding, criteria the leadership team agrees on, staged funding and kill criteria for every bet, and a habit of stopping work as deliberately as you start it."
category: business
version: 1.0.0
tags: [strategy-leadership, strategic-bets-prioritisation, manager, enterprise, prioritisation, trade-offs, resource-allocation, stop-decisions]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - meeting-notes
    - board-meeting
    - metrics-log
  pillars:
    - name: Strategy & Leadership
      emoji: "♟️"
      description: "Setting direction and leading people toward it: strategy and planning cycles, objectives and key results, the executive team, decision-making, culture, change programmes and the board."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Strategic Bets Prioritisation
          description: "Choosing which strategic initiatives to fund and which to stop, with explicit trade-offs and criteria the leadership team agrees on."
          projects:
            - name: Full inventory of funded initiatives
              description: |-
                ## Purpose
                Most leadership teams cannot name every initiative they are paying for, because work started in one budget cycle quietly survives into the next. A single list of everything that consumes discretionary money or named people is the precondition for every trade-off that follows, since you cannot stop what you cannot see.

                ## Milestones
                1. One list holding every initiative above an agreed size threshold, with its sponsor, start date and stated purpose.
                2. Initiatives hidden inside business-as-usual budgets identified and added.
                3. Each entry tagged as running, paused or proposed.
                4. The list confirmed as complete by every executive for their own function.

                ## Notes
                Set the size threshold low enough to catch the work that ties up specialists, for example anything over three person-months or a set budget figure. Small initiatives in large numbers are often where capacity disappears.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single initiative inventory exists, signed off as complete by every member of the executive team."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Agree the size threshold for what counts as an initiative"
                - "Ask each executive for every initiative running in their function"
                - "Cross-check the list against project codes in the finance system"
                - "Refresh the inventory with each function head @recurring(quarterly)"
            - name: Fully loaded cost of each running initiative
              description: |-
                ## Purpose
                Headcount is usually the largest cost of a strategic initiative and the one most often left out of the business case, so bets look cheaper than they are. Putting a fully loaded figure on each item, people time plus spend plus the platform or vendor commitments it drags along, lets the leadership team compare bets on what they actually consume.

                ## Milestones
                1. A standard cost method agreed with finance, covering salaries, contractors, vendors and committed spend.
                2. A fully loaded annual cost recorded against every item in the inventory.
                3. The ten most expensive initiatives ranked, with the share of discretionary spend they absorb.
                4. Any initiative whose real cost is more than double its approved budget flagged for review.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every initiative in the inventory carries a fully loaded annual cost calculated by one method agreed with finance."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Ask finance for a standard loaded cost per role grade"
                - "Collect people allocation estimates from each initiative lead"
                - "Add vendor, licence and committed spend to each cost line"
                - "Rank the initiatives by total cost and share the top ten"
            - name: Leadership-agreed prioritisation criteria
              description: |-
                ## Purpose
                Without written criteria, prioritisation turns into a contest of who argues longest or who sponsors the bet. Agreeing four to six criteria with the leadership team in advance, each defined well enough that two people would score the same bet the same way, moves the argument to the evidence instead of the room.

                ## Milestones
                1. A draft of four to six criteria, each tied to a strategic objective or a constraint.
                2. A plain definition and a scoring scale written for every criterion.
                3. Weights agreed by the leadership team and the reasons recorded.
                4. The criteria tested on three past decisions to check they would have ranked them sensibly.
                5. The final criteria published to everyone who proposes or sponsors initiatives.

                ## Notes
                Keep strategic fit, value, confidence, cost and risk separate. Folding confidence into value is the most common way a scoring model rewards optimism.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A set of four to six weighted criteria with scoring scales is approved by the leadership team and published to sponsors."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Draft four to six candidate criteria from the current strategy"
                - "Write a scoring scale with examples for each criterion"
                - "Test the criteria against three decisions made last year"
                - "Put the weights to the leadership team for agreement"
                - "Review the criteria and weights against the new strategy @recurring(yearly)"
            - name: One-page bet definition standard
              description: |-
                ## Purpose
                Proposals arrive as slide decks of very different lengths and quality, which makes them impossible to compare and rewards whoever writes the slickest pitch. A one-page standard asking for the same facts every time, the problem, the hypothesis, the cost, the first milestone and what would make you stop, levels the field and shortens every funding discussion.

                ## Milestones
                1. A one-page form with fixed sections for problem, hypothesis, value, cost, risks, first milestone and stop condition.
                2. Two existing initiatives rewritten in the format as worked examples.
                3. The form adopted as the only accepted format for new funding requests.
                4. Feedback from three sponsors used to tighten the wording.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page bet definition form, with two worked examples, is the required format for all new funding requests."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the facts the leadership team always ends up asking for"
                - "Draft the one-page form with a section for each fact"
                - "Rewrite two current initiatives in the new format"
                - "Send the form to three sponsors and ask what was unclear"
            - name: Discretionary investment envelope
              description: |-
                ## Purpose
                Every prioritisation round needs a ceiling, or the ranked list becomes a wish list that is all funded thinly. Agreeing with finance how much money and how many people are genuinely available for discretionary bets this year, after mandatory and run costs, turns the ranking into a cut-off line.

                ## Milestones
                1. Run costs and mandatory commitments separated from the discretionary pool.
                2. A money figure and a people figure agreed with the finance director for the year.
                3. A contingency reserve set aside for opportunities that appear mid-year.
                4. The envelope written into the prioritisation pack before any scoring begins.

                ## Notes
                Agree the envelope before the ranking, not after. Teams that rank first tend to argue the envelope up to fit their list.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A discretionary envelope in money and people, with a contingency reserve, is agreed with finance and recorded before the next ranking."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask finance for this year's split between run and change spend"
                - "Agree which commitments are genuinely mandatory"
                - "Propose a contingency reserve as a share of the envelope"
                - "Reset the envelope with finance at budget time @recurring(yearly)"
            - name: Prioritisation decision forum and owner
              description: |-
                ## Purpose
                Prioritisation decisions often fail because nobody knows which meeting makes them, so every bet is re-argued in every forum. Naming one decision forum, its members, its quorum and the single owner who breaks ties stops decisions leaking out through side conversations and gives sponsors a door to knock on.

                ## Milestones
                1. One named forum with members, a chair and a tie-break rule written down.
                2. The forum's authority defined: what it can fund, stop or defer without going higher.
                3. An escalation route to the chief executive or board agreed for bets above a threshold.
                4. The forum's terms announced to every sponsor and initiative lead.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written terms for one prioritisation forum, naming its members, authority, tie-break owner and escalation threshold, are approved and announced."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every meeting that currently funds or stops initiatives"
                - "Draft terms for a single forum with members and authority"
                - "Agree the tie-break owner and escalation threshold with the chief executive"
                - "Announce the forum and its terms to all sponsors"
            - name: Mapping initiatives to strategic objectives
              description: |-
                ## Purpose
                Linking each initiative to the objective it serves usually reveals two things at once: objectives with nothing behind them and initiatives that serve no stated objective at all. Both are prioritisation findings, and the map gives the leadership team a picture of where effort really goes compared with where the strategy says it should.

                ## Milestones
                1. Every initiative linked to one primary strategic objective, or marked as unlinked.
                2. Total cost and people summed per objective.
                3. Objectives with no funded initiative behind them listed.
                4. Unlinked initiatives sent to their sponsors with a request to justify or stop.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A map of spend and people by strategic objective, with unlinked initiatives and unfunded objectives listed, is reviewed by the leadership team."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask each initiative lead to name the one objective it serves"
                - "Sum cost and people for each objective"
                - "List objectives that have no funded initiative behind them"
                - "Ask the agent to draft a one-page summary of the gaps for the leadership team"
            - name: Separating mandatory work from discretionary bets
              description: |-
                ## Purpose
                Regulatory deadlines, contractual obligations and end-of-life systems are often scored alongside growth bets, where they either crowd out strategy or get unfairly deprioritised. Sorting them into a mandatory lane, with a short test for what qualifies, protects both the obligations and the honesty of the bet ranking.

                ## Milestones
                1. A written test for mandatory work: legal or regulatory requirement, contractual duty, or unacceptable operational risk.
                2. Each inventory item placed in the mandatory or discretionary lane.
                3. Every mandatory claim backed by a named obligation or risk owner.
                4. Mandatory items scoped to the minimum that meets the obligation.

                ## Notes
                Expect sponsors to try to move favourite projects into the mandatory lane. Ask for the specific obligation and who would be accountable if it were missed.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every initiative sits in a mandatory or discretionary lane, and every mandatory one names its obligation and accountable owner."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write a three-part test for what counts as mandatory"
                - "Place every inventory item in one of the two lanes"
                - "Ask legal or risk to confirm each mandatory claim"
                - "Re-test the mandatory lane before each budget round @recurring(yearly)"
            - name: First not-doing list
              description: |-
                ## Purpose
                Saying yes to a few bets means saying no to many good ideas, and unless the no is written down those ideas come back every quarter. A short, published not-doing list, with a sentence on why each item lost, tells teams where not to spend effort and spares the leadership team from re-litigating settled choices.

                ## Milestones
                1. At least five credible initiatives explicitly placed on the not-doing list.
                2. A one-sentence reason recorded for each, tied to the criteria.
                3. A date recorded for when each item may be reconsidered.
                4. The list shared with the teams most affected.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A not-doing list of at least five credible initiatives, each with a reason and a reconsideration date, is published to affected teams."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pick five credible ideas the team has chosen not to fund"
                - "Write one sentence on why each lost against the criteria"
                - "Set a reconsideration date for each item"
                - "Share the not-doing list with the teams it affects"
            - name: Quarterly reprioritisation round
              description: |-
                ## Purpose
                Priorities set once a year are out of date by the second quarter: a competitor moves, a bet stalls or a cost doubles. A short, disciplined round each quarter, rescoring only what has changed and moving money in both directions, keeps the slate current without reopening the whole strategy.

                ## Milestones
                1. A fixed quarterly slot in the leadership calendar with a standard pack.
                2. Changes since last quarter identified: new evidence, missed milestones, new proposals.
                3. Affected bets rescored against the agreed criteria.
                4. Funding moved, deferred or stopped, with every change recorded in the decision log.

                ## Notes
                Limit each round to what has changed. Rescoring everything every quarter exhausts the team and invites drift in the criteria.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four reprioritisation rounds are held in a year, each producing recorded funding changes or an explicit decision to change nothing."
                cadence: cyclic
              tasks:
                - "Book a fixed reprioritisation slot for each quarter"
                - "Collect milestone status and new proposals two weeks before the round"
                - "Rescore only the bets where evidence has changed"
                - "Run the quarterly reprioritisation round and record the changes @recurring(quarterly)"
            - name: Monthly bet health check
              description: |-
                ## Purpose
                Bets rarely fail in one dramatic moment; they slip a milestone, then a hire, then a customer, and nobody calls it until the money is gone. A monthly check of each bet against its own leading indicators and tripwires catches the slide while there is still a choice to make.

                ## Milestones
                1. Two or three leading indicators and one tripwire defined for each funded bet.
                2. A one-line monthly status per bet: on track, at risk or tripwire hit.
                3. Every tripwire hit routed to the decision forum within two weeks.
                4. Three months of health data available for the next reprioritisation round.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every funded bet has a monthly status recorded against its indicators, and every tripwire hit reaches the forum within two weeks."
                cadence: rolling
              tasks:
                - "Agree two or three leading indicators with each bet owner"
                - "Set up a health log from the metrics log template"
                - "Collect the monthly status line from every bet owner @recurring(monthly:9)"
                - "Send any tripwire hit to the decision forum agenda"
            - name: Intake gate for new initiative requests
              description: |-
                ## Purpose
                New requests appear in corridors, in board comments and after customer visits, and each one that starts informally takes capacity from the bets already chosen. A single intake gate, using the one-page format and a weekly triage, means new ideas get a fair hearing without bypassing the trade-offs.

                ## Milestones
                1. One published route for submitting new initiative requests.
                2. A weekly triage that sorts requests into decline, park for the next round, or fast-track.
                3. A fast-track rule for genuinely time-critical opportunities, with its threshold written down.
                4. Every requester given an answer and a reason within three weeks.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All new initiative requests come through one gate and every requester receives a recorded answer within three weeks."
                cadence: rolling
              tasks:
                - "Publish the single route for submitting new initiative requests"
                - "Write the fast-track rule and its threshold"
                - "Triage the week's new requests into decline, park or fast-track @recurring(weekly:tue)"
                - "Reply to each requester with the outcome and the reason"
            - name: Stop and sunset routine for killed initiatives
              description: |-
                ## Purpose
                Stopping an initiative is announced in a meeting but rarely finished: contracts roll over, systems stay switched on and half the team keeps working on it. A standard sunset routine, covering people, contracts, systems, customers and lessons, makes a stop decision real and releases the capacity it was meant to free.

                ## Milestones
                1. A sunset checklist covering people, vendors, systems, customers, data and communications.
                2. A named sunset owner and an end date for every stopped initiative.
                3. Released people and money confirmed against the allocation ledger.
                4. A short lessons note filed for each stopped initiative.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every stopped initiative has a sunset owner, an end date and a confirmed release of its people and budget within ninety days."
                cadence: rolling
              tasks:
                - "Draft a sunset checklist for people, vendors, systems and customers"
                - "Name a sunset owner for each initiative stopped this quarter"
                - "Check open sunsets for released people and cancelled contracts @recurring(monthly:21)"
                - "File a lessons note when each sunset closes"
            - name: Bet decision log
              description: |-
                ## Purpose
                Six months after a funding decision, nobody remembers what was known, what was assumed or who disagreed, so the outcome is judged with hindsight. A decision log recording the choice, the options rejected, the key assumptions and the expected result gives the team something honest to learn from.

                ## Milestones
                1. A log with fields for date, decision, options considered, assumptions, expected outcome and dissent.
                2. Every funding, deferral and stop decision entered within a week of being made.
                3. Each entry carries a date on which the decision will be revisited.
                4. At least one quarter of entries reviewed against what actually happened.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every prioritisation decision for a year is in the log with its assumptions and expected outcome, and one quarter's entries have been reviewed."
                cadence: rolling
              tasks:
                - "Create the decision log with fields for assumptions and dissent"
                - "Enter the decisions from the last reprioritisation round"
                - "Check the log is complete for the month's decisions @recurring(monthly:4)"
                - "Review entries whose revisit date has passed"
            - name: Allocation ledger of money and people
              description: |-
                ## Purpose
                Allocation decisions drift between meetings as managers quietly move people to whatever is urgent. A ledger showing approved versus actual money and people per bet, updated monthly, makes that drift visible and tells the forum whether the slate it approved is the slate being worked on.

                ## Milestones
                1. A ledger with approved and actual figures for money and full-time equivalents per bet.
                2. Actual people allocation collected from team leads, not from plans.
                3. Variances above an agreed tolerance flagged to bet sponsors.
                4. Twelve months of ledger history available for the yearly reset.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly ledger compares approved and actual money and people for every bet, with variances above tolerance reported to sponsors."
                cadence: rolling
              tasks:
                - "Build the ledger with approved and actual columns per bet"
                - "Agree a variance tolerance with finance"
                - "Update actual people and spend from team leads @recurring(monthly:14)"
                - "Send variances above tolerance to the bet sponsors"
            - name: Kill criteria and tripwires for every bet
              description: |-
                ## Purpose
                Kill criteria agreed after a bet starts are always negotiated down, because by then the team is invested. Writing for each bet, before funding, the specific evidence that would make the leadership team stop or shrink it turns a painful future argument into a pre-agreed rule.

                ## Milestones
                1. Every funded bet has one to three written kill criteria, with dates or thresholds.
                2. Each criterion agreed by the sponsor and the decision forum before funds are released.
                3. Bets without kill criteria held at their current stage until criteria are set.
                4. A record of how often criteria were triggered and what was done.

                ## Notes
                Good kill criteria are observable by someone outside the team, for example a pilot conversion rate below a set figure by a set month. Vague criteria such as weak traction always get reinterpreted.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All funded bets carry written, dated kill criteria agreed with the forum, and every triggered criterion has a recorded response."
                cadence: rolling
              tasks:
                - "Ask each bet owner to propose two observable kill criteria"
                - "Challenge any criterion an outsider could not check"
                - "Record the agreed criteria alongside each bet in the decision log"
                - "Check every bet against its kill criteria @recurring(monthly:17)"
            - name: Annual zero-based challenge of continuing bets
              description: |-
                ## Purpose
                Continuing bets carry an unfair advantage: they are judged on whether they are still on track, while new ideas must prove they deserve funding from scratch. Once a year, asking of every running bet whether you would fund it today, knowing what you now know, puts old and new work on the same footing.

                ## Milestones
                1. Every continuing bet resubmitted on the one-page format with current evidence.
                2. Continuing and new bets scored together against the same criteria.
                3. Each continuing bet explicitly renewed, reshaped or stopped.
                4. The share of the envelope freed by the challenge recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Every continuing bet has an explicit renew, reshape or stop decision from the annual challenge, and the capacity freed is recorded."
                cadence: cyclic
              tasks:
                - "Ask every continuing bet owner to resubmit on the one-page format"
                - "Score continuing and new bets side by side"
                - "Run the annual zero-based challenge before budgets are set @recurring(yearly)"
                - "Record the money and people freed by the challenge"
            - name: Allocation of scarce specialists across bets
              description: |-
                ## Purpose
                Scarce people, a data science team, a platform architect, a regulatory expert, are often the real constraint, and a slate that looks affordable in money can be impossible in talent. Treating named specialist capacity as its own envelope, allocated by the forum, stops the most valuable people being split across six bets and finishing none.

                ## Milestones
                1. The three to five scarcest skills identified with their real available capacity.
                2. Specialist demand from every funded bet set against that capacity.
                3. Specialist time allocated by the forum, with no person split across more than two bets.
                4. Conflicts between bets for the same people resolved in the forum, not by the specialists.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Named specialist capacity is allocated by the forum each month, with no specialist assigned to more than two bets."
                cadence: rolling
              tasks:
                - "Name the three to five skills that limit how many bets can run"
                - "Ask each bet for its specialist demand by month"
                - "Review specialist allocation against demand @recurring(monthly:24)"
                - "Send any allocation conflict to the decision forum"
            - name: Weighted scoring models and their traps
              description: |-
                ## Purpose
                Weighted scoring is the most common prioritisation tool and the easiest to game: scores cluster in the middle, weights get adjusted to produce the favoured answer and false precision hides weak evidence. Learning how scoring models fail, and how to guard against it, makes the leadership team's own model more trustworthy.

                ## Milestones
                1. The main failure modes noted: clustering, double counting, weight tuning and false precision.
                2. The organisation's current scoring checked for each failure mode.
                3. Two changes made, such as forced ranking within criteria or separate confidence scores.
                4. A one-page guide on reading scores written for sponsors.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page guide to scoring pitfalls exists and two specific safeguards have been added to the organisation's scoring model."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read a practitioner guide to multi-criteria decision analysis"
                - "Check last round's scores for clustering in the middle"
                - "Test whether small weight changes reverse the top five ranking"
                - "Write a one-page guide on reading scores for sponsors"
            - name: Expected value and option value for uncertain bets
              description: |-
                ## Purpose
                Uncertain bets are often rejected because their most likely outcome is modest, even when a small chance of a large result makes them worth a small stake. Learning to think in ranges, probabilities and the value of learning cheaply first lets leaders fund the right size of bet instead of all or nothing.

                ## Milestones
                1. Expected value worked through for three current bets using low, central and high cases.
                2. The difference between a bet's expected value and its most likely outcome explained in a paragraph.
                3. One bet reframed as a small first stake that buys information.
                4. The approach presented to the decision forum with the worked examples.

                ## Notes
                This is a way of structuring judgement, not a substitute for it. The probabilities are estimates and should be shown as such.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three current bets have documented low, central and high cases with expected value, and one has been reframed as a staged first stake."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read an introduction to decision trees for business decisions"
                - "Build low, central and high cases for three current bets"
                - "Calculate expected value for each and compare with the likely case"
                - "Present the worked examples at the next decision forum"
            - name: Cost of delay and sequencing
              description: |-
                ## Purpose
                Sequencing matters as much as selection: two good bets done one after the other usually beat both done at half speed. Learning cost of delay, how much value each month of waiting destroys, and dividing it by duration gives a defensible order of work when everything on the list is worth doing.

                ## Milestones
                1. Cost of delay estimated per month for the top ten funded bets.
                2. Each bet's remaining duration estimated by its team.
                3. A sequence produced by ranking cost of delay divided by duration.
                4. The sequence compared with the current plan and the differences discussed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The top ten bets have a cost of delay estimate and a recommended sequence that has been compared with the current plan in the forum."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read a short guide to cost of delay and weighted shortest job first"
                - "Estimate monthly cost of delay for the top ten bets"
                - "Rank the bets by cost of delay divided by remaining duration"
                - "Compare the ranking with the current sequence and note the gaps"
            - name: Recognising sunk cost and escalation of commitment
              description: |-
                ## Purpose
                Leaders who have publicly backed a bet find it hardest to stop, and the more has been spent the more the spending itself becomes the argument. Learning to spot sunk cost reasoning and escalation of commitment, in yourself and in the room, is the skill that makes stop decisions possible.

                ## Milestones
                1. The research on escalation of commitment summarised in a page.
                2. Three phrases that signal sunk cost reasoning noted for use in meetings.
                3. One past decision reviewed for signs of escalation.
                4. A forum rule adopted: past spend is never an argument for future spend.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary on escalation of commitment is shared with the forum and a written rule excluding past spend from funding arguments is adopted."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read a summary of research on escalation of commitment"
                - "List three phrases that signal sunk cost reasoning"
                - "Review one past funding decision for signs of escalation"
                - "Propose a forum rule that excludes past spend from funding arguments"
            - name: Premortem on a proposed bet
              description: |-
                ## Purpose
                A premortem asks the team to imagine the bet has failed two years from now and to explain why, which surfaces risks that optimism and hierarchy keep hidden in a normal review. Practising it on one real proposal teaches the leadership team a twenty-minute habit worth running on every major bet.

                ## Milestones
                1. A premortem run on one live proposal with the sponsor and at least five others.
                2. Failure reasons collected anonymously and grouped into themes.
                3. The three most plausible failure reasons turned into risks, mitigations or kill criteria.
                4. A decision on whether premortems become standard for bets above a threshold.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One premortem has been run on a live proposal and its top three failure reasons are reflected in that bet's risks or kill criteria."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose one live proposal and invite its sponsor and five others"
                - "Ask each person to write why the bet failed, privately"
                - "Group the reasons into themes and pick the top three"
                - "Add those three to the bet's risks or kill criteria"
            - name: Stress-testing a business case
              description: |-
                ## Purpose
                Business cases are written to win funding, so their assumptions lean optimistic in predictable places: adoption speed, price, cost to serve and time to launch. Learning a short routine for finding and stress-testing the two or three assumptions that drive the answer makes every funding review sharper.

                ## Milestones
                1. The assumptions in one recent business case listed and ranked by their effect on the result.
                2. The top three assumptions varied to see where the case stops working.
                3. Evidence behind each top assumption rated as strong, weak or none.
                4. A checklist of standard questions written for future business case reviews.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One business case has a documented sensitivity test of its top three assumptions and a reusable review checklist exists."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pick a recent business case and list every assumption in it"
                - "Rank the assumptions by how much they move the result"
                - "Find the break-even value for each of the top three"
                - "Write a checklist of review questions for future cases"
            - name: Calibrated probability estimates for the leadership team
              description: |-
                ## Purpose
                When leaders say a bet is likely to work, one means sixty per cent and another means ninety, and decisions are made on that confusion. A short calibration exercise, practising estimates with numbers and checking them against outcomes, gives the team a shared language for confidence.

                ## Milestones
                1. The leadership team completes one calibration exercise with known-answer questions.
                2. Words such as likely and probable mapped to agreed number ranges.
                3. Numeric confidence estimates recorded for every bet in the next round.
                4. Estimates compared with outcomes after a year.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The leadership team has completed a calibration exercise and recorded numeric confidence estimates for every bet in one prioritisation round."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Find a set of calibration questions with known answers"
                - "Run the calibration exercise in a leadership meeting"
                - "Agree number ranges for words such as likely and possible"
                - "Record numeric confidence for each bet in the next round"
            - name: Cap on concurrent bets
              description: |-
                ## Purpose
                Running too many bets at once is the commonest reason none of them finish: people switch, decisions queue and every timeline stretches. Setting a hard cap on concurrent strategic bets, and requiring one to finish or stop before another starts, usually raises throughput within two quarters.

                ## Milestones
                1. The current number of concurrent bets counted and compared with leadership attention available.
                2. A cap agreed by the forum, with a reason for the number.
                3. Bets above the cap paused or stopped using the criteria.
                4. A rule in place that a new bet starts only when one finishes or stops.

                ## Notes
                A common starting point is no more bets than the executive team can review properly each month, often fewer than ten for a mid-sized organisation.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A cap on concurrent bets is agreed, the slate is brought under it, and the one-in-one-out rule has been applied at least once."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Count the bets currently running in parallel"
                - "Propose a cap based on what the forum can review each month"
                - "Pause the lowest-ranked bets above the cap"
                - "Check the number of running bets against the cap @recurring(monthly:11)"
            - name: Head-to-head comparison of two competing bets
              description: |-
                ## Purpose
                Two strong bets competing for the same team or budget are often both funded at half strength because nobody wants to choose. A structured head-to-head comparison, on the same criteria with the same evidence standard and a forced choice at the end, gives one bet a real chance instead of giving two a slow death.

                ## Milestones
                1. Both bets written up on the one-page format with comparable evidence.
                2. Each scored on the agreed criteria by at least three people independently.
                3. The case for combining, sequencing or choosing one explored.
                4. A recorded choice, with the losing bet placed on the not-doing list or a later date.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision chooses, sequences or combines two competing bets, with the rejected option and its reason written in the decision log."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask both sponsors for a one-page write-up with comparable evidence"
                - "Have three people score each bet independently"
                - "Test whether sequencing the bets beats running them together"
                - "Record the choice and its reason in the decision log"
            - name: Stopping a senior sponsor's favourite project
              description: |-
                ## Purpose
                Pet projects of senior leaders are the bets most likely to survive past their evidence, because challenging them carries personal risk. Preparing the case carefully, privately first and on the agreed criteria, gives the sponsor a way to stop or reshape the work without losing face.

                ## Milestones
                1. The project's evidence assessed against its own original goals and the current criteria.
                2. A private conversation held with the sponsor before any group discussion.
                3. Options offered beyond a full stop: shrink, pause, merge or hand to another team.
                4. A decision recorded in the forum, with the sponsor's view noted.

                ## Notes
                Lead with the project's own stated targets, not your opinion. A sponsor can disagree with you but will find it harder to disagree with their own success criteria.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A recorded forum decision on the sponsor's project, following a private conversation and at least two options beyond a full stop."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Compare the project's results with its own original targets"
                - "Prepare three options: shrink, pause or hand to another team"
                - "Book a private conversation with the sponsor"
                - "Take the agreed option to the decision forum"
            - name: Choosing a prioritisation method for the organisation
              description: |-
                ## Purpose
                Frameworks for prioritising initiatives range from simple value and effort grids to weighted scoring, cost of delay and full portfolio optimisation, and the right one depends on the number of bets, the data available and the team's patience. Comparing three options against your situation, and choosing one deliberately, avoids adopting whatever a consultant used last time.

                ## Milestones
                1. Three methods shortlisted with what each needs in data and effort.
                2. Each method trialled on the same ten bets.
                3. The results compared for agreement, effort and how well the forum understood them.
                4. One method chosen and documented, with when it will be reviewed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One prioritisation method is chosen after a documented trial of three on the same ten bets, with a review date set."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Shortlist three prioritisation methods and their data needs"
                - "Run all three on the same ten bets"
                - "Ask the forum which result they understood and trusted most"
                - "Document the chosen method and its review date"
            - name: Staged funding with release gates
              description: |-
                ## Purpose
                Large bets funded in full at the start remove the leadership team's best moment to learn and adjust. Releasing money in stages, each gate tied to specific evidence such as a working pilot or a signed customer, keeps the downside small and makes stopping a normal event rather than a failure.

                ## Milestones
                1. A standard of three to four funding stages with evidence required at each gate.
                2. Every bet above a size threshold moved onto staged funding.
                3. Gate dates recorded and the forum's calendar booked for each.
                4. The first gate decisions taken, including at least one reshape or stop.

                ## Notes
                Keep the evidence at each gate about learning, not effort spent. A gate passed because the team worked hard is not a gate.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All bets above the agreed size threshold are on staged funding with gate evidence defined, and the first gate decisions are recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Draft a three or four stage funding standard with gate evidence"
                - "List every bet above the size threshold"
                - "Agree gate evidence and dates with each bet owner"
                - "Hold the gate reviews that fall due this quarter @recurring(quarterly)"
            - name: Rebalancing the mix of near and far bets
              description: |-
                ## Purpose
                Left alone, a slate drifts towards safe, near-term improvements to the core business because their returns are easiest to prove. Agreeing a target split of investment between core improvements, adjacent moves and longer-range bets, then measuring the real split, makes that drift a visible choice rather than an accident.

                ## Milestones
                1. Each funded bet classified as core, adjacent or longer-range using written definitions.
                2. The current share of the envelope in each group calculated.
                3. A target split agreed by the leadership team with its reasoning.
                4. A plan to close the gap over the next two funding rounds.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The current and target split of investment between core, adjacent and longer-range bets is agreed and recorded, with a plan to close any gap."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write short definitions of core, adjacent and longer-range bets"
                - "Classify every funded bet using the definitions"
                - "Calculate the share of the envelope in each group"
                - "Agree a target split and the steps to reach it"
            - name: Redeploying people from a stopped initiative
              description: |-
                ## Purpose
                People released by a stopped initiative are the real prize of the decision, but they often drift back into old work or wait weeks for a new assignment and leave. Planning their redeployment before the stop is announced keeps the talent, shows the rest of the organisation that stopping is safe and puts capacity where the ranking says it should go.

                ## Milestones
                1. Every person on the stopping initiative listed with their skills and preferences.
                2. Each person matched to a higher-ranked bet or role before the stop is announced.
                3. Individual conversations held by their manager on the day of the announcement.
                4. Everyone in their new role within thirty days.

                ## Notes
                Where redeployment is not possible and roles are at risk, involve HR early and follow your employment processes. This project organises the work; it does not replace that advice.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Everyone released by the stopped initiative has a confirmed new role within thirty days of the announcement."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List each person on the initiative with their skills"
                - "Match each person to a higher-ranked bet or open role"
                - "Brief managers to hold individual conversations on announcement day"
                - "Confirm every person is in a new role after thirty days"
            - name: Concentration check on correlated bets
              description: |-
                ## Purpose
                Several bets that each look reasonable can depend on the same assumption, the same platform, the same customer segment or the same economic condition, so one surprise sinks them together. Checking the slate for shared dependencies shows whether you have a portfolio or one large bet in disguise.

                ## Milestones
                1. The key assumption and dependency listed for every funded bet.
                2. Bets grouped by shared assumption, platform, segment or external condition.
                3. Any group above an agreed share of the envelope flagged as a concentration risk.
                4. A response agreed for each concentration: accept, hedge or diversify.

                ## Notes
                Start from the **Risk register** template.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every concentration of bets above the agreed share of the envelope is recorded in a risk register with an agreed response."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "List the key assumption and dependency behind every funded bet"
                - "Group bets that share an assumption, platform or segment"
                - "Record each concentration in a risk register with a response"
                - "Repeat the concentration check on the current slate @recurring(quarterly)"
            - name: Leadership prioritisation workshop
              description: |-
                ## Purpose
                One well-run workshop, with pre-scored bets, an agreed envelope and a facilitator who forces the trade-offs, can do more than a month of email debate. Preparing it properly, with reading sent ahead and a clear decision to reach by the end of the day, means the leadership team leaves with a ranked, funded list rather than a list of concerns.

                ## Milestones
                1. A pre-read sent a week ahead with the inventory, scores, envelope and criteria.
                2. A facilitator agreed who is not a sponsor of any bet.
                3. The workshop produces a ranked list with a funding cut-off line.
                4. Decisions, dissent and owners written up and circulated within two days.

                ## Notes
                Start from the **Meeting notes** template. Ask each executive to name one of their own bets they would give up; it changes the tone of the day.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The workshop is held and a ranked list with a funding cut-off line and named owners is circulated within two days."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Book a full day with the leadership team and a neutral facilitator"
                - "Send the pre-read with scores, envelope and criteria a week ahead"
                - "Ask each executive to name one of their own bets to give up"
                - "Circulate the ranked list and decisions within two days"
            - name: Funding round decision pack
              description: |-
                ## Purpose
                Funding decisions made from scattered spreadsheets and late slides get deferred, because nobody is confident enough to commit. A standard pack, the same structure every round, with the ranked list, the envelope, the cut-off, the trade-offs and the recommended stops, lets the forum decide in the meeting rather than ask for more analysis.

                ## Milestones
                1. A standard pack structure agreed with the forum chair.
                2. The ranked list, cut-off line and trade-offs summarised on two pages.
                3. Recommended stops and deferrals shown as clearly as new funding.
                4. The pack circulated at least five working days before the meeting.
                5. Decisions taken in the meeting without a request for further analysis.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A decision pack in the standard structure is circulated five working days ahead and the forum takes its funding decisions in that meeting."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Agree the pack structure with the forum chair"
                - "Ask the agent to draft the two-page summary from the ranked list"
                - "Show stops and deferrals on the same page as new funding"
                - "Circulate the pack five working days before the meeting"
            - name: Board presentation of the top bets and trade-offs
              description: |-
                ## Purpose
                Directors are asked to approve budgets but rarely see what was not funded, which leaves them unable to challenge the choices that matter. Presenting the top bets alongside the credible options that lost, and why, gives the board a real decision to examine and builds trust in the process.

                ## Milestones
                1. The top five bets, the cut-off line and three credible rejected options on a single page.
                2. The criteria and envelope explained in plain language.
                3. Likely board questions anticipated with short answers prepared.
                4. Board feedback recorded and reflected in the next round.

                ## Notes
                Start from the **Board meeting** template.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The board has seen the top bets alongside rejected options and trade-offs, and its feedback is recorded for the next round."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Put the top five bets and three rejected options on one page"
                - "Explain the criteria and envelope in plain language for directors"
                - "Prepare short answers to the five likeliest board questions"
                - "Record the board's feedback in the decision log"
            - name: Announcing stop decisions to affected teams
              description: |-
                ## Purpose
                Teams whose work is stopped hear about it badly more often than not: by rumour, by email or after their peers. A planned announcement, delivered by the sponsor in person, explaining the reason in terms of the criteria and saying what happens to people next, protects trust in the whole prioritisation process.

                ## Milestones
                1. A short message written for each stopped initiative: the decision, the reason and what happens next.
                2. Team members told in person by the sponsor before any wider announcement.
                3. Questions collected and answered within a week.
                4. The rest of the organisation told what was stopped and why.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every team affected by a stop decision is told in person by its sponsor before the wider announcement, and their questions are answered within a week."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write a short message with the decision, reason and next steps"
                - "Brief the sponsor to tell the team in person first"
                - "Collect the team's questions and answer them within a week"
                - "Tell the wider organisation what was stopped and why"
            - name: Mid-year budget cut reprioritisation
              description: |-
                ## Purpose
                Mid-year cuts often arrive with a two-week deadline, and the temptation is to trim every bet by the same percentage, which keeps everything alive and nothing healthy. Preparing a cut list in advance, ranked by the agreed criteria, lets the leadership team remove whole bets and protect the ones that matter.

                ## Milestones
                1. A pre-prepared cut list showing what would go at ten, twenty and thirty per cent reductions.
                2. Each cut shown with its saving, its consequence and its reversal cost.
                3. A recommendation to the forum that stops whole bets rather than trimming all of them.
                4. The final cuts recorded and the sunset routine started for each.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A ranked cut list for three reduction levels exists before any cut is requested, and any cuts taken remove whole bets with recorded sunsets."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Rank the funded bets for removal using the agreed criteria"
                - "Show what would go at ten, twenty and thirty per cent cuts"
                - "Note the saving, consequence and reversal cost of each cut"
                - "Start the sunset routine for every bet that is cut"
            - name: New executive inheriting a crowded initiative list
              description: |-
                ## Purpose
                Inheriting a function in a new executive role usually means inheriting twenty initiatives, each with a sponsor who expects support. Taking stock in the first ninety days, without stopping anything hastily, and then making two or three visible prioritisation calls, sets the tone for how you will run the slate.

                ## Milestones
                1. Every inherited initiative listed with its sponsor, cost and status.
                2. A conversation held with each sponsor about evidence and expectations.
                3. Initiatives grouped into continue, review and likely stop.
                4. Two or three prioritisation decisions made and explained by day ninety.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "By day ninety every inherited initiative is classified as continue, review or stop, and at least two decisions have been made and explained."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "List every initiative you inherited with its sponsor and cost"
                - "Book a short conversation with each sponsor"
                - "Group the initiatives into continue, review and likely stop"
                - "Announce your first two prioritisation calls and the reasons"
            - name: Prioritising bets in a cash-constrained year
              description: |-
                ## Purpose
                In a year when cash is tight, the usual criteria tilt: payback period, cash burn and reversibility matter more than long-run value. Adjusting the criteria explicitly for the year, rather than letting them shift informally, keeps the bets that preserve the future while protecting the balance sheet.

                ## Milestones
                1. Cash payback and monthly cash burn added to every bet's profile.
                2. Temporary weights agreed for the year, with the date they revert.
                3. Bets with long payback reshaped into smaller first stages rather than stopped outright where possible.
                4. The adjusted ranking agreed with the finance director.

                ## Notes
                Agree the cash position and constraints with your finance director and auditors before changing the criteria. This project structures the prioritisation; treasury and solvency decisions sit with finance and the board.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A ranking using temporary cash-weighted criteria, with a reversion date, is agreed with the finance director and recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Add payback period and monthly cash burn to each bet's profile"
                - "Propose temporary weights for the year and a reversion date"
                - "Reshape long-payback bets into smaller first stages"
                - "Agree the adjusted ranking with the finance director"
            - name: Making the case for your unit's bets inside a group
              description: |-
                ## Purpose
                Inside a larger group, a business unit or functional leader has to compete with peers for central funding, often against criteria set elsewhere. Understanding those criteria and presenting fewer, better-evidenced bets usually wins more funding than a long list of asks.

                ## Milestones
                1. The group's criteria, envelope and timetable obtained and understood.
                2. Your unit's proposals cut to the two or three strongest.
                3. Each proposal written in the group's format with evidence scored honestly.
                4. Feedback from the group forum recorded, whatever the outcome.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Two or three proposals in the group's format are submitted on time, and the forum's decision and feedback are recorded."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Get the group's criteria, envelope and submission timetable"
                - "Cut your unit's list to the two or three strongest proposals"
                - "Write each proposal in the group's format"
                - "Ask the group forum for feedback on each proposal"
            - name: Cross-divisional prioritisation for an enterprise portfolio office
              description: |-
                ## Purpose
                Enterprise portfolio and strategy offices are asked to rank bets across divisions that use different terms, cost methods and appetites for risk. Building one comparable view, with common definitions and a monthly cycle, gives the executive committee a group-wide ranking without overriding divisional judgement.

                ## Milestones
                1. Common definitions agreed for initiative, cost, stage and confidence across divisions.
                2. Every division's slate converted into the common view.
                3. A group-wide ranking produced for initiatives above a set threshold.
                4. A monthly cycle running, with divisions confirming their data.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A group-wide ranking built on common definitions is refreshed monthly with data confirmed by every division."
                cadence: rolling
              tasks:
                - "Agree common definitions with each division's strategy lead"
                - "Convert every division's slate into the common format"
                - "Publish the group-wide ranking for initiatives above the threshold"
                - "Collect confirmed data from every division @recurring(monthly:28)"
            - name: Translating top bets into team-level trade-offs
              description: |-
                ## Purpose
                Middle managers receive the list of funded bets but not the reasoning, so their teams keep working on everything with equal energy. Translating each top bet into what your team will start, stop and do less of makes the strategy's trade-offs visible where the work happens.

                ## Milestones
                1. The bets that touch your team identified and their priority understood.
                2. A start, stop and do-less list written for your team.
                3. The list agreed with your own manager.
                4. The list explained to your team, with time for questions.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A start, stop and do-less list linked to the funded bets is agreed with your manager and explained to your team."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Identify which funded bets touch your team"
                - "Write what the team will start, stop and do less of"
                - "Agree the list with your own manager"
                - "Explain the list to your team and take questions"
            - name: Rationalising duplicate initiatives after a merger
              description: |-
                ## Purpose
                After a merger, both organisations usually bring initiatives that solve the same problem: two CRM upgrades, two pricing programmes, two market entries. Comparing the duplicates on the same criteria, early and in the open, frees capacity for integration and avoids months of quiet rivalry between teams.

                ## Milestones
                1. Both organisations' initiative lists combined into one inventory.
                2. Duplicates and overlaps identified in pairs or groups.
                3. Each duplicate group resolved: one chosen, merged or both stopped.
                4. Decisions communicated to both teams at the same time.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every duplicate initiative group from the two organisations has a recorded decision communicated to both teams on the same day."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Combine both organisations' initiative lists into one inventory"
                - "Mark every pair or group of duplicate initiatives"
                - "Score each duplicate on the same criteria"
                - "Announce each decision to both teams at the same time"
            - name: Real options framing for large irreversible bets
              description: |-
                ## Purpose
                Irreversible bets such as a new plant, a platform rebuild or a major acquisition deserve a different treatment from bets you can exit cheaply. Framing them as a sequence of options, to defer, to scale, to switch or to abandon, shows where a small early investment buys the right to decide later with better information.

                ## Milestones
                1. The bets on the slate sorted into reversible and hard to reverse.
                2. For each hard-to-reverse bet, the options embedded in it written down.
                3. One bet restructured to create an earlier, cheaper decision point.
                4. The option framing included in that bet's next funding gate.

                ## Notes
                Formal real options valuation needs specialist finance support. The framing alone, asking what choices this investment buys or closes off, is useful without the maths.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every hard-to-reverse bet has its embedded options documented and at least one has been restructured with an earlier decision point."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Sort every funded bet into reversible and hard to reverse"
                - "Write down the defer, scale, switch and abandon options in each hard one"
                - "Restructure one bet to add an earlier, cheaper decision point"
                - "Add the option framing to that bet's next gate pack"
            - name: Constrained optimisation model for the slate
              description: |-
                ## Purpose
                Once a slate has more than twenty bets and several binding constraints, people, money and specialist skills, ranking by score no longer gives the best set. A simple optimisation model, even in a spreadsheet solver, finds the combination that delivers most value within all constraints and shows which constraint to relax first.

                ## Milestones
                1. Value, cost, people and specialist needs captured for every candidate bet.
                2. Constraints for money, people and scarce skills entered in a spreadsheet solver.
                3. The optimised set compared with the score-ranked set.
                4. The binding constraint identified and its relaxation costed.

                ## Notes
                Treat the model's answer as a challenge to the ranking, not a replacement for judgement. Its value is in exposing which constraint is really binding.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A working optimisation model compares its chosen set with the score-ranked set and names the binding constraint, reviewed by the forum."
                cadence: cyclic
                effort_hours_estimate: "16"
              tasks:
                - "Collect value, cost, people and skill needs for every candidate bet"
                - "Set up the constraints in a spreadsheet solver"
                - "Compare the optimised set with the ranked list"
                - "Rerun the model before each reprioritisation round @recurring(quarterly)"
            - name: Retrospective on bet outcomes and hit rate
              description: |-
                ## Purpose
                Few leadership teams know what share of their bets met their stated goals, so they cannot tell whether their prioritisation is improving. A yearly retrospective, comparing each closed bet's outcome with what was promised, gives an honest hit rate and points to where estimates were most wrong.

                ## Milestones
                1. Every bet closed or stopped in the year listed with its original expected outcome.
                2. Actual outcomes gathered and each bet rated hit, partial or miss.
                3. Patterns noted: which kinds of bet or sponsor overestimated most.
                4. Two changes to the criteria or process agreed from the findings.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A yearly retrospective reports the hit rate of closed bets and leads to two recorded changes in the criteria or process."
                cadence: cyclic
                effort_hours_estimate: "10"
              tasks:
                - "List every bet closed or stopped this year with its promise"
                - "Rate each as hit, partial or miss against its own goals"
                - "Look for patterns in which estimates were most wrong"
                - "Run the bet outcome retrospective with the forum @recurring(yearly)"
            - name: Reference class forecasting for bet estimates
              description: |-
                ## Purpose
                Estimates of cost and timeline for strategic initiatives are reliably optimistic, and the remedy is to start from how long similar initiatives actually took elsewhere. Building a small reference class from your own history and published benchmarks gives the forum an outside view to set against every inside estimate.

                ## Milestones
                1. Your organisation's past initiatives grouped into three or four types.
                2. Actual cost and duration overruns calculated for each type.
                3. An adjustment factor agreed for new estimates of each type.
                4. Reference class adjustments shown beside every new estimate in the pack.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An adjustment factor for each of three or four initiative types, based on actual overruns, is shown beside every new estimate in the funding pack."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Group past initiatives into three or four types"
                - "Calculate actual cost and time overruns for each type"
                - "Agree an adjustment factor for each type with finance"
                - "Show the adjusted estimate beside every new proposal"
            - name: Decision quality audit separate from outcomes
              description: |-
                ## Purpose
                Good decisions sometimes turn out badly and poor ones sometimes get lucky, so judging prioritisation only by results teaches the wrong lessons. Auditing a sample of decisions on process, information, alternatives considered and reasoning, separately from outcome, shows whether the forum is actually deciding well.

                ## Milestones
                1. Five to eight past decisions sampled from the decision log.
                2. Each rated on framing, alternatives, information, reasoning and commitment.
                3. Quality ratings set beside outcomes in a simple two by two.
                4. Process changes agreed where quality was weakest.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Five to eight decisions have documented quality ratings set against outcomes, and at least one process change has been agreed."
                cadence: cyclic
                effort_hours_estimate: "8"
              tasks:
                - "Sample five to eight decisions from the decision log"
                - "Rate each on framing, alternatives, information and reasoning"
                - "Plot quality against outcome in a two by two"
                - "Repeat the decision quality audit with a new sample @recurring(yearly)"
            - name: Written capital allocation principles for strategic bets
              description: |-
                ## Purpose
                Investors, lenders and boards increasingly ask how an organisation decides where to put its money, and inconsistent answers erode confidence. A short set of written principles, covering hurdle logic, staging, concentration limits and when bets are stopped, makes the prioritisation process explainable outside the leadership team.

                ## Milestones
                1. Five to eight principles drafted from the practices already adopted.
                2. The principles checked with the finance director and investor relations or treasury.
                3. The principles approved by the chief executive and the board.
                4. The principles referenced in the next funding round pack.

                ## Notes
                Hurdle rates and financial thresholds are for your finance function and board to set. This project records and explains the principles; it does not decide them.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five to eight capital allocation principles for strategic bets are approved by the board and cited in the next funding pack."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draft five to eight principles from the practices already in use"
                - "Ask the agent to tighten the draft into plain language"
                - "Review the principles with the finance director"
                - "Take the principles to the board for approval"
---

# Strategic Bets Prioritisation

Strategic bets prioritisation is the unglamorous half of strategy: deciding which initiatives get money and people, which wait, and which stop, with the trade-offs written down where everyone can see them. It is written for executives and enterprise leaders who own or influence an investment slate, and it starts with foundations (a full inventory, true costs, agreed criteria, a funding envelope and a decision forum), moves through the operating machinery of intake, health checks, kill criteria and reprioritisation rounds, then the skills of scoring, expected value, cost of delay and resisting sunk cost, the decisions and events that test them, situations such as inheriting a crowded list or a cash-tight year, and finally the specialist work of real options, constrained optimisation and judging decision quality.

The rhythm is weekly intake triage, monthly health checks, decision log entries and allocation updates on varied days, quarterly reprioritisation rounds and gate reviews, and a yearly zero-based challenge of everything still running. The Risk register, Meeting notes, Board meeting and Metrics log templates pair with the concentration check, the prioritisation workshop, the board presentation and the bet health check. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
