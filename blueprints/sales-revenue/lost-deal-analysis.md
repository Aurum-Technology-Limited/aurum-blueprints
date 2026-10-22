---
id: sales-revenue.lost-deal-analysis
name: Lost Deal Analysis
description: "A consistent loss reason taxonomy, honest seller debriefs, regular interviews with lost buyers and a monthly pattern review that feeds pricing, product and the sales playbook."
category: business
version: 1.0.0
tags: [sales-revenue, lost-deal-analysis, manager, team, enterprise, win-loss, loss-reasons, buyer-interviews]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - meeting-notes
    - metrics-log
    - feedback-themes
    - purchase-decision
    - remediation-plan
  pillars:
    - name: Sales & Revenue
      emoji: "💼"
      description: "Turning interest into revenue: prospecting and pipeline, discovery and demos, proposals and negotiation, forecasting, key accounts, sales process, enablement and compensation."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Lost Deal Analysis
          description: "Interviewing lost prospects, tagging loss reasons consistently and feeding patterns back into pricing, product and the sales playbook."
          projects:
            - name: Scope and entry rules for full loss reviews
              description: |-
                ## Purpose
                Reviewing every closed-lost deal sounds thorough but buries a team in deals that were never real. Deciding up front which losses get a full review (for example, any deal that reached proposal stage or passed a set value) and which get only a coded reason keeps the effort on the losses that can teach you something.

                ## Milestones
                1. A written rule naming the stage and deal value that trigger a full loss review.
                2. A lighter rule for early-stage losses: a reason code and a one-line note only.
                3. An estimate of how many full reviews the rule produces each month, checked against the team's capacity.
                4. The rule agreed with the sales leader and posted where every seller can see it.

                ## Notes
                A sensible default for the first quarter: full review for anything that reached demo or proposal stage, reason code only before that. Tighten or loosen it after three months of data.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A published rule states which closed-lost deals get a full review, with an expected monthly volume the team has agreed it can handle."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Count last quarter's closed-lost deals by the furthest stage each reached"
                - "Draft the stage and value threshold for a full loss review"
                - "Estimate the monthly review volume under the draft rule"
                - "Agree the rule with the sales leader and publish it to the team"
            - name: Loss reason taxonomy with written definitions
              description: |-
                ## Purpose
                Free-text loss reasons such as 'went another way' or 'budget' cannot be counted, and a dropdown of twenty overlapping options is little better. A short two-level taxonomy, perhaps six to eight primary reasons with a handful of sub-reasons each and a one-sentence definition for every code, is what lets you compare this quarter with the last.

                ## Milestones
                1. Six to eight primary loss reasons, each with a definition and a worked example.
                2. Sub-reasons under each primary reason, none overlapping another.
                3. An 'other' code with a rule that anything coded 'other' needs a note.
                4. Ten past losses coded by two people independently, with disagreements used to sharpen the definitions.
                5. The final taxonomy given a version number and shared with every seller.

                ## Notes
                Keep 'no decision' and 'lost to a competitor' as separate primary reasons from the start. Mixing them is the commonest reason loss data later proves useless.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A versioned loss taxonomy with a definition for every code, tested by two people coding the same ten losses, is published to the sales team."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export last quarter's free-text loss reasons into one sheet"
                - "Group them into six to eight primary reasons with draft definitions"
                - "Ask a second manager to code ten past losses using the draft"
                - "Rewrite any definition the two of you applied differently"
                - "Publish version 1.0 of the taxonomy to the sales team"
            - name: Required closed-lost fields in the CRM
              description: |-
                ## Purpose
                Moving a deal to closed-lost usually takes one click, which is why so many records hold nothing useful. Making a primary reason, a sub-reason, the competitor chosen and a short note required at that moment means every loss leaves evidence behind without anyone chasing it later.

                ## Milestones
                1. Primary reason, sub-reason, competitor and note fields specified to match the taxonomy.
                2. Validation in place that blocks closing a deal as lost without a primary reason.
                3. One maintained competitor picklist, including 'none' and 'unknown'.
                4. A test deal closed as lost by a seller, confirming the form takes under a minute.

                ## Notes
                Ask whoever administers your CRM to build this; the job here is specifying the fields, not configuring the system. Avoid a minimum note length, because sellers simply type dots to get past it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "No deal can be closed as lost in the CRM without a primary reason, and a seller test shows the closing form takes under a minute."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the field list and picklist values from the taxonomy"
                - "Hand the specification to whoever administers the CRM"
                - "Close a test deal as lost and time how long the form takes"
                - "Remove any field that sellers skipped or misread during the test"
            - name: Twelve-month baseline of closed-lost deals
              description: |-
                ## Purpose
                Before changing anything, you need to know how many deals you lose, at which stage, at what value and, roughly, why. A single pass through the last twelve months of closed-lost records, recoded into the new taxonomy where the notes allow, gives a starting picture that every later quarter can be measured against.

                ## Milestones
                1. Every closed-lost deal from the last twelve months exported with stage, value, segment and owner.
                2. Records recoded into the new taxonomy wherever the notes make the reason clear.
                3. The share of records too thin to code counted and reported as a number of its own.
                4. A one-page baseline covering loss count, value lost, stage of loss and the top five reasons.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page baseline of the last twelve months of losses exists, including the share of records that could not be coded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Export twelve months of closed-lost deals with stage, value and owner"
                - "Recode each record into the new taxonomy where the notes allow"
                - "Count how many records are too thin to code at all"
                - "Ask the agent to draft a one-page baseline summary from the coded sheet"
            - name: Win-loss programme owner and charter
              description: |-
                ## Purpose
                Loss analysis owned by everyone is done by no one, and loss analysis owned only by the sales team tends to conclude that the product or the price was to blame. Naming one owner, often in revenue operations or product marketing, and writing a half-page charter on scope, audience and confidentiality gives the programme authority and a little distance from the people being reviewed.

                ## Milestones
                1. One named owner, with monthly hours agreed by their manager.
                2. A half-page charter covering purpose, scope, who receives findings and how often.
                3. A confidentiality rule for what buyers say about individual sellers.
                4. The charter signed off by the sales leader and one product leader.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A named programme owner and a signed-off half-page charter, including a confidentiality rule, are on record."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List candidate owners and the hours each could give per month"
                - "Draft a half-page charter with scope, audience and cadence"
                - "Write the rule for handling buyer comments about named sellers"
                - "Get sign-off from the sales leader and a product leader"
            - name: Lost-buyer interview guide
              description: |-
                ## Purpose
                Asking 'why did you choose them?' gets a polite, rehearsed answer. A guide that walks the buyer back through their own process, from the trigger that started the search to the meeting where the decision was made, surfaces the moments that actually decided it and keeps every interviewer asking comparable questions.

                ## Milestones
                1. Twelve to fifteen open questions, ordered along the buyer's decision timeline.
                2. Follow-up prompts under each question for when answers stay vague.
                3. A closing section asking what the buyer would have needed to choose you.
                4. The guide trialled in two interviews and trimmed to fit thirty minutes.

                ## Notes
                Keep questions about product features to the end. Buyers asked about features first tend to explain the whole loss in feature terms.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A thirty-minute interview guide, trialled in two real interviews, is stored where every interviewer can find it."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write the buyer's decision as a timeline from trigger to signature"
                - "Draft two open questions for each step of that timeline"
                - "Add follow-up prompts for answers like it just felt like a better fit"
                - "Trial the guide in two interviews and cut it to thirty minutes"
            - name: Interview request emails and confidentiality wording
              description: |-
                ## Purpose
                Lost buyers owe you nothing, and few say yes when the request comes from the seller who has just lost. A short request sent by someone outside the deal, promising thirty minutes, no sales pitch and confidentiality, and timed two to four weeks after the decision, gets far more acceptances.

                ## Milestones
                1. A request email from the programme owner, under 120 words, with a clear time ask.
                2. A single follow-up message for buyers who do not reply.
                3. Plain wording on recording, note-taking and how comments will be shared internally.
                4. The acceptance rate recorded across the first ten requests.

                ## Notes
                Check your organisation's rules on recording calls and storing personal data before the first interview. Some buyers' policies forbid recording, so be ready to take notes instead.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved request email, follow-up and confidentiality wording are in use, with acceptances tracked over the first ten requests."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft a request email of under 120 words from the programme owner"
                - "Write a single follow-up for buyers who do not reply"
                - "Agree the recording and confidentiality wording with whoever handles data rules"
                - "Track acceptances across the first ten requests"
            - name: Loss evidence log and interview archive
              description: |-
                ## Purpose
                Interview notes scattered across inboxes and personal drives cannot be searched when someone asks how often security reviews cost a deal. One log, with a row per reviewed loss and links to the debrief, the interview notes and the coded reasons, turns individual stories into a dataset that survives staff turnover.

                ## Milestones
                1. A log with deal, value, stage, reason codes, interviewer and links to notes.
                2. A shared notes folder with a naming rule by date and account.
                3. Access limited to the people named in the charter.
                4. Every full review since the programme started entered in the log.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single access-controlled loss log holds every full review completed so far, each linked to its debrief and interview notes."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create the loss log with one row per reviewed deal"
                - "Set up the notes folder and a file naming rule by date and account"
                - "Restrict access to the people named in the charter"
                - "Enter every full loss review completed so far"
            - name: Seller loss debrief form
              description: |-
                ## Purpose
                Sellers forget the detail of a loss within days, and what they remember drifts towards reasons outside their control. A ten-minute form completed within two working days, covering the last real contact, who decided, what the buyer said and what the seller would do differently, captures their view while it is still sharp.

                ## Milestones
                1. A form of eight questions or fewer, matched to the taxonomy codes.
                2. One question on what the seller would change next time.
                3. The form linked from the closed-lost record.
                4. Three sellers have used the form and their completion times are noted.

                ## Notes
                Start from the **Operational checklist** template. Ask what the seller would change, not what they did wrong; the second question gets defensive answers.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A debrief form of eight questions or fewer is linked from every closed-lost record and has been completed by three sellers in under fifteen minutes each."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft eight debrief questions matched to the taxonomy"
                - "Add a question on what the seller would change next time"
                - "Link the form from the closed-lost record in the CRM"
                - "Ask three sellers to complete it and time each one"
            - name: Close-out rule for deals that go dark
              description: |-
                ## Purpose
                Deals where the buyer stops replying often sit in the pipeline for months, inflating the forecast, and then vanish without a loss reason. A written rule, such as closing as lost after thirty days without buyer contact and two attempts to re-engage, gives these deals an honest ending and a code of their own.

                ## Milestones
                1. A threshold agreed for days of silence and the number of re-engagement attempts.
                2. A dedicated 'went dark' code added to the taxonomy with a definition.
                3. A list of current open deals that already meet the rule.
                4. Each of those deals closed or genuinely re-engaged within two weeks.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written go-dark rule and code exist, and every open deal that met the rule on the day it was agreed has been closed or re-engaged."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Agree the days of silence that trigger a close-out"
                - "Add a went dark code to the loss taxonomy with its definition"
                - "List open deals with no buyer contact past the threshold"
                - "Send each owner their list with two weeks to close or re-engage"
            - name: Two-day seller debrief habit
              description: |-
                ## Purpose
                Debrief forms only help if they are filled in while the loss is fresh. Building the debrief into each seller's Friday wrap-up, so every deal lost that week has its form before the weekend, keeps completion high without managers chasing each one.

                ## Milestones
                1. Completion within two working days stated as the team standard.
                2. A Friday slot in each seller's calendar for the week's debriefs.
                3. The completion rate tracked through the first month.
                4. Completion above 90 percent for eight consecutive weeks.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Debrief forms are completed for more than 90 percent of qualifying losses for eight consecutive weeks."
                cadence: rolling
              tasks:
                - "Add a fifteen-minute Friday debrief slot to your calendar"
                - "Complete the debrief form for every deal you lost this week @recurring(weekly:fri)"
                - "Post the month's completion rate in the team channel"
            - name: Weekly closed-lost reason quality check
              description: |-
                ## Purpose
                Reason codes are only as good as the least careful seller's habits, and quality slips quickly when no one looks. A twenty-minute Monday read of every deal closed as lost the previous week, sending back anything coded 'other' or noted 'n/a', keeps the data clean enough to trust in the quarterly report.

                ## Milestones
                1. A saved CRM report of last week's closed-lost deals with all reason fields.
                2. Every new record checked each week against the taxonomy definitions.
                3. Vague records returned to their owner with a specific question.
                4. The share of losses coded 'other' below 10 percent within a quarter.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every closed-lost record is checked within a week of closing, and fewer than 10 percent of a quarter's losses are coded other."
                cadence: rolling
              tasks:
                - "Build a saved report of last week's closed-lost deals and reason fields"
                - "Read every new closed-lost record and return vague reasons to the owner @recurring(weekly:mon)"
                - "Track the share of losses coded other each month"
            - name: Monthly lost-buyer interview quota
              description: |-
                ## Purpose
                Interviews are where the real reasons surface, and they are the first thing dropped in a busy month. A fixed quota, for example four interviews a month spread across segments and picked from qualifying losses as they arrive, gives a steady sample rather than a burst after a painful quarter.

                ## Milestones
                1. A monthly interview target set from the volume of qualifying losses.
                2. A rule for choosing which losses to approach when there are more than the quota.
                3. Requests sent within two weeks of each qualifying loss.
                4. The quota met for three consecutive months.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The agreed number of lost-buyer interviews is completed and logged for three consecutive months."
                cadence: rolling
              tasks:
                - "Set the monthly interview target with the programme owner"
                - "Pick this month's interview candidates from qualifying losses @recurring(monthly:8)"
                - "Send each request within two weeks of the loss decision"
                - "Record each interview's notes in the loss log the same day"
            - name: Monthly loss pattern review meeting
              description: |-
                ## Purpose
                Data that nobody discusses changes nothing. A forty-five-minute meeting each month with the sales leader, a product manager and the programme owner, looking at the month's codes, two interview summaries and one recommended action, is what turns the log into decisions.

                ## Milestones
                1. A standing monthly meeting with a fixed attendee list.
                2. A one-page pre-read sent two days ahead.
                3. Every meeting ending with an owner and a date against each action.
                4. Actions from the previous meeting reviewed first each time.

                ## Notes
                Start from the **Meeting notes** template. Limit each meeting to three actions; long action lists from loss reviews rarely get done.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly loss reviews held, each with a pre-read and no more than three actions carrying owners and dates."
                cadence: rolling
              tasks:
                - "Book a recurring forty-five-minute slot with the fixed attendees"
                - "Send the one-page loss pre-read two days before the meeting @recurring(monthly:16)"
                - "Open each meeting by checking last month's actions"
                - "Record each agreed action with an owner and a date"
            - name: Monthly loss share by reason tracker
              description: |-
                ## Purpose
                Counts of losses rise and fall with pipeline volume, so a month with more losses can still be a better month. Tracking each primary reason as a share of all closed deals, won and lost, alongside the value lost, shows whether a reason is genuinely growing or just riding a busy month.

                ## Milestones
                1. A tracker showing each primary reason as a share of all closed deals each month.
                2. Value lost by reason recorded beside the counts.
                3. Twelve months of history backfilled from the baseline.
                4. A rule for when a movement is large enough to raise at the monthly review.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The tracker holds at least twelve months of loss shares and value lost by reason, updated every month."
                cadence: rolling
              tasks:
                - "Set up the tracker with a column for each primary loss reason"
                - "Backfill twelve months of history from the baseline"
                - "Add last month's loss shares and value lost to the tracker @recurring(monthly:4)"
                - "Agree how big a movement must be before it goes to the monthly review"
            - name: Quarterly win-loss report
              description: |-
                ## Purpose
                Leadership needs a view less noisy than a monthly review and more current than an annual one. A quarterly report of four to six pages, covering win rate, the top loss reasons and how they moved, three buyer quotes and the status of past actions, keeps loss findings inside the planning conversation.

                ## Milestones
                1. A standard report structure agreed with the leadership team.
                2. Each report delivered within ten working days of quarter end.
                3. No more than three recommendations in any report.
                4. Four consecutive quarterly reports delivered on time.
              priority: high
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Four consecutive quarterly win-loss reports delivered within ten working days of quarter end, each with no more than three recommendations."
                cadence: cyclic
              tasks:
                - "Agree the report structure with the sales leader"
                - "Compile and send the quarterly win-loss report @recurring(quarterly)"
                - "Ask the agent to pick three representative buyer quotes from the quarter's notes"
                - "Note which past recommendations were acted on"
            - name: Quarterly loss feedback session with product managers
              description: |-
                ## Purpose
                Product teams usually hear about losses as anecdotes from whichever seller is loudest. A quarterly session where product managers see the coded product-gap losses, the deal values behind them and the buyers' own words gives them evidence they can weigh fairly against the rest of the roadmap.

                ## Milestones
                1. A product-gap view of the loss log, grouped by capability.
                2. A session booked each quarter with the relevant product managers.
                3. Each gap presented with deal count, value and at least one buyer quote.
                4. Product's response to each gap recorded, including 'not planned'.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly product sessions held in a year, with product's recorded response to every gap presented."
                cadence: cyclic
              tasks:
                - "Group product-gap losses in the log by capability"
                - "Hold the loss feedback session with product managers @recurring(quarterly)"
                - "Record product's response to each gap, including not planned"
            - name: Pricing loss extract for the pricing owner
              description: |-
                ## Purpose
                Price is the most cited and least understood loss reason, and the person who sets prices rarely sees the detail. Sending the pricing owner a monthly extract of price-coded losses, with the discount offered, the competitor's price where known and the buyer's own words, separates genuine price problems from value problems dressed up as price.

                ## Milestones
                1. A named pricing owner who has agreed to receive the extract.
                2. A monthly extract with discount offered, competitor price if known and buyer comments.
                3. Each price loss marked as price level, packaging, payment terms or value.
                4. Six months of extracts sent and acknowledged.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Six consecutive monthly price-loss extracts sent to the pricing owner, each loss classified by type."
                cadence: rolling
              tasks:
                - "Agree with the pricing owner what the monthly extract should contain"
                - "Send the price-coded loss extract to the pricing owner @recurring(monthly:22)"
                - "Mark each price loss as level, packaging, terms or value"
            - name: Timing-loss revisit list
              description: |-
                ## Purpose
                Deals lost to 'not now' or a budget freeze are often the warmest future pipeline, yet they disappear into the closed-lost archive. A short list of timing losses with the date each buyer said to come back, checked monthly, makes sure the follow-up happens and shows how many 'timing' losses were really something else.

                ## Milestones
                1. Every timing-coded loss from the last year on one list with a revisit date.
                2. Revisit dates passed to each deal owner.
                3. The outcome of each revisit recorded: reopened, still not now, or lost for another reason.
                4. The share of timing losses that later reopened worked out.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every timing-coded loss has a revisit date and a recorded outcome, and the share that reopened is reported once a year."
                cadence: rolling
              tasks:
                - "Pull every loss coded timing or budget freeze from the last year"
                - "Add a revisit date to each and send it to the deal owner"
                - "Check which timing losses reach their revisit date this month @recurring(monthly:26)"
                - "Record whether each revisit reopened the deal or revealed another reason"
            - name: Quarterly seller versus buyer reason audit
              description: |-
                ## Purpose
                Sellers' loss reasons and buyers' loss reasons often differ, with sellers citing price and buyers citing something about the sales process. Comparing the two for every interviewed loss each quarter shows how far the CRM codes can be trusted and which reasons are systematically misreported.

                ## Milestones
                1. A side-by-side of seller code and buyer-stated reason for each interviewed loss.
                2. An agreement rate calculated for the quarter.
                3. The reasons most often misreported named.
                4. One change to definitions or debrief questions made in response.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A quarterly agreement rate between seller and buyer reasons is recorded, with one definition or debrief change made each quarter."
                cadence: cyclic
              tasks:
                - "List every interviewed loss with the seller's code beside the buyer's reason"
                - "Calculate the seller and buyer agreement rate for the quarter @recurring(quarterly)"
                - "Name the most misreported reason and bring it to the monthly review"
            - name: Annual loss taxonomy refresh
              description: |-
                ## Purpose
                Taxonomies built for last year's product, prices and competitors slowly stop fitting. Once a year, review which codes go unused, which are overloaded and what the 'other' notes keep saying, then publish a new version with a mapping from old codes to new so trends still join up.

                ## Milestones
                1. Usage counts for every code over the past year.
                2. Codes merged, split or retired, with reasons noted.
                3. A mapping from old codes to new so historic data stays comparable.
                4. The new version published and sellers briefed in under fifteen minutes.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A new taxonomy version with an old-to-new code mapping is published each year and sellers have been briefed on it."
                cadence: cyclic
              tasks:
                - "Count how often each loss code was used over the year"
                - "Read every loss coded other and list the recurring themes"
                - "Review and republish the loss taxonomy with an old-to-new mapping @recurring(yearly)"
                - "Brief sellers on the changes at the next team meeting"
            - name: Running a non-defensive lost-buyer interview
              description: |-
                ## Purpose
                Interviewers who explain, correct or quietly pitch during a loss interview teach the buyer to stop talking. Practising a neutral stance, with short questions, long pauses and no rebuttals even when the buyer has the facts wrong, is the skill that separates useful interviews from polite ones.

                ## Milestones
                1. Three practice interviews run with a colleague playing the buyer.
                2. The interviewer's share of talk time below 25 percent in practice.
                3. A personal list of phrases to avoid, such as 'actually, we do offer that'.
                4. Two real interviews run and reviewed against the list.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two real lost-buyer interviews run with interviewer talk time under 25 percent and no rebuttals, checked against the notes or recording."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read the interview guide aloud and mark where you might be tempted to defend"
                - "Run a practice interview with a colleague playing a frustrated buyer"
                - "Measure your share of talk time from the practice recording"
                - "Write down the five phrases you will not use in a loss interview"
            - name: Laddering questions that get past the first answer
              description: |-
                ## Purpose
                First answers in loss interviews are summaries: 'they were cheaper', 'better fit'. Laddering, asking what that meant, why it mattered and what it would have cost them otherwise, usually reaches the real decision driver within three or four follow-ups.

                ## Milestones
                1. Laddering prompts written for the five commonest first answers.
                2. The prompts practised with a colleague using real past losses.
                3. Notes from two real interviews showing at least three levels below the first answer.
                4. The best prompts added to the interview guide.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two interview write-ups show at least three follow-up levels beneath the buyer's first answer, and the prompts are in the guide."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List the five first answers lost buyers give most often"
                - "Write three laddering follow-ups for each"
                - "Practise the ladders with a colleague using a past loss"
                - "Add the best prompts to the interview guide"
            - name: Decoding price as a loss reason
              description: |-
                ## Purpose
                Buyers say price when they mean the value case was weak, the payment terms did not fit their budget cycle, the package forced them to buy modules they did not want, or simply that price is easier to say than a criticism of the seller. Learning to probe which of these it was is the difference between a pricing change and a sales fix.

                ## Milestones
                1. Four types of price loss defined: level, packaging, terms and value.
                2. Two probing questions written for each type.
                3. Ten past price-coded losses reclassified into the four types where the evidence allows.
                4. The resulting split shared at the monthly review.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten past price losses are reclassified into level, packaging, terms or value, and the split has been presented at a monthly review."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a one-line definition for each of the four price loss types"
                - "Draft two probing questions for each type"
                - "Reclassify ten past price-coded losses into the four types"
                - "Share the split at the next monthly loss review"
            - name: Telling no-decision losses from competitive losses
              description: |-
                ## Purpose
                In many business markets a large share of lost deals go to no decision at all, with the buyer staying on the status quo, and the fixes are completely different from those for a competitive loss. Learning the signals of each, such as no competitor named, no budget approved or a project quietly deprioritised, keeps the two from being lumped together.

                ## Milestones
                1. Written signals for no decision, a competitive loss and a loss to an internal build.
                2. Twenty past losses sorted into the three groups.
                3. The share of no-decision losses compared with what the team assumed.
                4. The signals added to the taxonomy definitions.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twenty past losses are sorted into no decision, competitor or internal build, and the signals are written into the taxonomy."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the signals that mark a loss as no decision"
                - "Sort twenty past losses into no decision, competitor or internal build"
                - "Ask three sellers to guess the no-decision share before you reveal it"
                - "Add the signals to the taxonomy definitions"
            - name: Coding interview notes into loss themes
              description: |-
                ## Purpose
                Twenty interviews read one at a time leave an impression; twenty interviews coded line by line leave evidence. A simple qualitative coding routine, tagging each statement with a theme, counting themes across interviews and keeping the best quote for each, makes interview findings as countable as CRM codes.

                ## Milestones
                1. A starting codebook of ten to fifteen themes drawn from the taxonomy.
                2. Five interviews coded by two people and compared.
                3. Theme counts and the best quote for each theme across the coded set.
                4. The codebook revised wherever the coders disagreed.

                ## Notes
                Start from the **Feedback themes** template.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A revised codebook exists and at least five interviews have been coded by two people, with theme counts and quotes recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Draft a codebook of ten to fifteen themes from the taxonomy"
                - "Code five interview notes and ask a colleague to code the same five"
                - "Rewrite the theme definitions where the two of you disagreed"
                - "Count themes across the set and keep the best quote for each"
            - name: Reading small loss samples without overreacting
              description: |-
                ## Purpose
                Three losses to the same competitor in a month feels like a trend and may be chance. A few plain rules, such as a minimum count before reporting a percentage, comparing with the same quarter last year and showing ranges rather than single numbers, stop the team rewriting the playbook after one bad month.

                ## Milestones
                1. A minimum sample rule for reporting a reason as a percentage.
                2. A standard way of showing change against the same period last year.
                3. One past 'trend' rechecked using the rules.
                4. The rules written into the quarterly report structure.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written sample rules are part of the quarterly report structure and one past trend has been rechecked against them."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set the minimum number of losses before a reason is shown as a percentage"
                - "Recheck one past loss trend against the same quarter last year"
                - "Write the sample rules into the quarterly report structure"
            - name: Finding the moment a deal was really lost
              description: |-
                ## Purpose
                The stage a deal closed from is rarely the stage it was lost at; many deals marked lost at negotiation were lost at discovery, when the wrong problem was framed or the economic buyer was never met. Tracing back through notes and emails to the last moment the deal could have been saved points fixes at the right step of the sales process.

                ## Milestones
                1. A short list of turning-point questions to ask of every reviewed loss.
                2. Ten reviewed losses each tagged with a point-of-loss stage.
                3. The gap between closing stage and point-of-loss stage summarised.
                4. A point-of-loss field added to the loss log.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten reviewed losses carry a point-of-loss stage in the log, with a summary of how it differs from the closing stage."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write five questions for finding the turning point in a lost deal"
                - "Trace ten reviewed losses back to the stage they were really lost"
                - "Compare closing stage with point-of-loss stage for those ten"
                - "Add a point-of-loss column to the loss log"
            - name: Writing a one-page loss case study
              description: |-
                ## Purpose
                Sellers remember stories far better than charts. A one-page case of a single lost deal, covering the situation, what the buyer wanted, the moments it turned and what would have changed the outcome, written without blaming the seller, is the format that carries loss findings into team meetings and onboarding.

                ## Milestones
                1. A one-page structure with four fixed sections.
                2. Two case studies written from interviewed losses.
                3. Each case reviewed by the seller involved before it is shared.
                4. The cases used in a team meeting and in new-hire material.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Two one-page loss case studies, each reviewed by the seller involved, have been used in a team meeting."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Pick a recent interviewed loss with a clear turning point"
                - "Write the case in four sections on one page"
                - "Ask the seller involved to review it before it is shared"
                - "Offer the finished cases to whoever runs new-hire onboarding"
            - name: In-house versus third-party win-loss interviews
              description: |-
                ## Purpose
                Buyers are often more candid with an independent interviewer than with the company that lost, but third-party programmes cost money and put a step between you and the buyer. Comparing a small in-house pilot with one or two specialist providers on candour, cost per interview and turnaround gives a decision based on your own buyers.

                ## Milestones
                1. Ten in-house interviews completed as a benchmark for acceptance and depth.
                2. Two providers shortlisted with cost per interview and sample reports.
                3. A side-by-side comparison on candour, cost, turnaround and confidentiality.
                4. A decision recorded with a date to revisit it.

                ## Notes
                Start from the **Purchase decision** template. A hybrid is common: independent interviews for the largest losses, in-house for the rest.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on in-house, third-party or hybrid interviewing, backed by ten in-house interviews and two provider quotes."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Record acceptance rate and depth for your first ten in-house interviews"
                - "Request sample reports and pricing from two specialist providers"
                - "Compare both options on candour, cost per interview and turnaround"
                - "Record the decision and a date to revisit it"
            - name: Adding won-deal interviews for contrast
              description: |-
                ## Purpose
                Loss interviews alone show what went wrong but not what you do well, and some reasons blamed for losses turn out to be just as common in wins. Interviewing a smaller number of won buyers with the same core questions gives a comparison group and shows which loss reasons really separate wins from losses.

                ## Milestones
                1. The interview guide adapted for won buyers, keeping the same core questions.
                2. A ratio set, such as one win interview for every two loss interviews.
                3. Six win interviews completed and coded with the same codebook.
                4. Reasons common to both wins and losses flagged as weak predictors.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Six won-buyer interviews are coded with the loss codebook and the reasons common to wins and losses are flagged in the log."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Adapt the loss interview guide for won buyers"
                - "Set the ratio of win interviews to loss interviews"
                - "Book one won-buyer interview this month @recurring(monthly:10)"
                - "Flag the reasons that appear equally in wins and losses"
            - name: Fixing the top controllable loss reason
              description: |-
                ## Purpose
                Some loss reasons, such as a missing feature in a segment you do not serve, are not worth fixing; others, such as slow proposals or a weak security answer, are entirely within the team's control. Picking the single biggest controllable reason and running a ninety-day fix with a named owner shows the programme can change outcomes, not just describe them.

                ## Milestones
                1. Loss reasons split into controllable and uncontrollable with the leadership team.
                2. One controllable reason chosen by value lost.
                3. A remediation plan with an owner, actions and a ninety-day review date.
                4. The reason's share of losses compared before and after the fix.

                ## Notes
                Start from the **Remediation plan** template.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A ninety-day remediation plan for one controllable loss reason is complete, with its share of losses compared before and after."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Mark each primary loss reason as controllable or not with the sales leader"
                - "Choose the controllable reason with the most value lost last year"
                - "Write the remediation plan with an owner and a ninety-day review"
                - "Compare that reason's share of losses at the ninety-day review"
            - name: Pricing and packaging proposal from loss evidence
              description: |-
                ## Purpose
                Once six months of price-coded losses have been split into level, packaging, terms and value, there is usually one clear pattern worth acting on: a missing entry tier, an upfront annual payment rule that blocks public buyers, a bundle nobody wants. Writing that pattern up as a costed proposal for the pricing owner is how loss analysis earns a seat in pricing decisions.

                ## Milestones
                1. Six months of price-coded losses classified by type.
                2. One pattern chosen, with deal count and value attached.
                3. A two-page proposal setting out the change, its likely effect and the risks.
                4. The proposal presented and the pricing owner's decision recorded.

                ## Notes
                The decision on price belongs to whoever owns pricing and margin. The job here is evidence, not a price recommendation dressed up as fact.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A two-page evidence-based pricing proposal has been presented to the pricing owner and their decision is recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pull six months of classified price losses from the monthly extracts"
                - "Choose the one pattern with the most value behind it"
                - "Draft a two-page proposal with the change, likely effect and risks"
                - "Present it to the pricing owner and record the decision"
            - name: Product gap evidence pack for the roadmap
              description: |-
                ## Purpose
                Product managers weigh dozens of requests, and a loss reason backed by deal value and buyer quotes competes far better than a seller's complaint. An evidence pack for the top three product gaps, each with value lost, segments affected, the competitor's alternative and the buyer's own words, gives product a fair basis to say yes or no.

                ## Milestones
                1. The top three product gaps by value lost identified from the log.
                2. Deal count, value, segments and competitor alternative set out for each gap.
                3. Two anonymised buyer quotes for each gap.
                4. The pack submitted through product's normal intake and its outcome tracked.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An evidence pack covering three product gaps has gone through product's request process and each gap's outcome is recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Rank product-gap losses by total value lost"
                - "Write half a page per gap with value, segments and the competitor alternative"
                - "Add two anonymised buyer quotes to each gap"
                - "Submit the pack through product's request process and note the outcome"
            - name: Playbook edits drawn from loss patterns
              description: |-
                ## Purpose
                Patterns in the loss log often point straight at the sales process: discovery that skips the economic buyer, demos given before the pain is agreed, proposals that land after the competitor's. Turning the two or three strongest process patterns into specific, dated edits to the playbook closes the loop between what buyers tell you and how sellers work.

                ## Milestones
                1. Two or three sales process patterns from the log, each with supporting losses.
                2. A specific proposed playbook edit for each pattern.
                3. The edits agreed with the playbook owner and published.
                4. A check after one quarter on whether reviewed deals follow the change.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "At least two playbook edits traceable to named loss patterns are published, with adoption checked one quarter later."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the sales process patterns behind the last two quarters of losses"
                - "Write a precise playbook edit for each of the top three"
                - "Agree the edits with whoever owns the playbook"
                - "Check one quarter later whether reviewed deals follow the new step"
            - name: Head-to-head analysis of losses to one competitor
              description: |-
                ## Purpose
                When one competitor accounts for a large share of competitive losses, general findings are not enough. A focused analysis of every loss to that competitor over a year, by segment, deal size, stage of loss and buyer-stated reason, shows where they beat you and, just as useful, where they rarely do.

                ## Milestones
                1. Every loss to the chosen competitor over twelve months listed with segment and value.
                2. Wins against the same competitor listed for comparison.
                3. Win rate against them calculated by segment and deal size.
                4. A one-page summary handed to whoever maintains competitive materials.

                ## Notes
                Battle cards belong with enablement. This project supplies the evidence they should be built from.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page head-to-head summary with win rate by segment and deal size against the main competitor is refreshed every quarter."
                cadence: cyclic
              tasks:
                - "Choose the competitor with the most losses against you last year"
                - "List every loss and win against them with segment, size and stage"
                - "Work out your win rate against them by segment"
                - "Refresh the head-to-head numbers and resend the summary @recurring(quarterly)"
            - name: First win-loss readout to the leadership team
              description: |-
                ## Purpose
                The first readout decides whether the programme is taken seriously. Presenting the baseline, the first quarter of interviews and three recommendations to the leadership team around four months after starting gives enough data to be credible while early interest is still high.

                ## Milestones
                1. A readout date fixed in the leadership team's calendar.
                2. A short deck: baseline, interview findings and three recommendations.
                3. A dry run with the sales leader a week before.
                4. Decisions and owners from the readout recorded and circulated.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first leadership readout is held, and its decisions and owners are circulated in writing within two working days."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Book the readout slot with the leadership team four months out"
                - "Build the readout around three recommendations, not every finding"
                - "Run a dry run with the sales leader a week before"
                - "Circulate decisions and owners within two days of the readout"
            - name: Post-mortem on a lost strategic deal
              description: |-
                ## Purpose
                Losing one of the largest deals of the year deserves more than a reason code. A structured post-mortem within three weeks, with the account team, the sales engineer and the deal sponsor walking the timeline without blame, captures lessons while people still remember them and before the story hardens into 'they went cheap'.

                ## Milestones
                1. A timeline of the deal from first contact to the loss decision.
                2. A ninety-minute post-mortem held with everyone who worked the deal.
                3. A buyer interview requested by someone outside the deal team.
                4. Three lessons written up and shared with the wider team.

                ## Notes
                Set the rule at the start of the meeting: the goal is what the team would do differently, not who is at fault.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A post-mortem is held within three weeks of the strategic loss and three written lessons are shared with the sales team."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Build the deal timeline from the CRM, emails and call notes"
                - "Book a ninety-minute post-mortem with everyone who worked the deal"
                - "Ask someone outside the deal team to request a buyer interview"
                - "Write up three lessons and share them at the next team meeting"
            - name: Executive feedback call to a lost strategic account
              description: |-
                ## Purpose
                For a major loss, a short call from a senior leader to the buyer's executive, offered as a request for feedback rather than a last pitch, often gets a more candid answer than any survey and keeps the door open for the next buying cycle. It needs preparation so the executive listens rather than tries to reopen the deal.

                ## Milestones
                1. A briefing note for your executive with the deal history and three questions.
                2. A twenty-minute call requested with the buyer's executive.
                3. The call held, with someone else on your side taking notes.
                4. What was learned added to the loss log and shared with the account team.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A feedback call between your executive and the lost buyer's executive is held and its notes are in the loss log."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a one-page briefing with the deal history and three questions"
                - "Ask your executive to request a twenty-minute feedback call"
                - "Remind the executive the call is for listening, not reopening the deal"
                - "Add the call notes to the loss log within a day"
            - name: Loss lessons session at the sales kickoff
              description: |-
                ## Purpose
                Once a year the whole team is in one room, and a well-run session on why deals were lost lands better than any written report. Forty-five minutes with the top three loss reasons, one case study and a short exercise on spotting the turning point gives sellers something they will use in the first quarter.

                ## Milestones
                1. A session slot agreed with the kickoff organiser.
                2. The three top loss reasons and one case study chosen.
                3. A fifteen-minute exercise built on a real, anonymised loss.
                4. Attendee feedback collected and one change noted for next year.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A forty-five-minute loss session is delivered at the kickoff and attendee feedback is recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the kickoff organiser for a forty-five-minute session slot"
                - "Choose the three loss reasons and the case study to present"
                - "Design a short exercise around an anonymised real loss"
                - "Collect attendee feedback at the end of the session"
            - name: Annual year-on-year loss review
              description: |-
                ## Purpose
                Monthly and quarterly views show movement; only a year-on-year comparison shows whether the business now loses for different reasons than it used to. A yearly review comparing reason mix, win rate and value lost with the previous year, and checking every recommendation made during the year, is the programme's own report card.

                ## Milestones
                1. Reason mix, win rate and value lost compared with the previous year.
                2. Every recommendation from the year listed with whether it was acted on.
                3. A short judgement on which changes appear to have helped.
                4. Three priorities for the coming year agreed with leadership.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "A year-on-year loss review is completed each year, with every recommendation's outcome listed and three priorities agreed."
                cadence: cyclic
              tasks:
                - "Run the year-on-year comparison of loss reasons and win rate @recurring(yearly)"
                - "List every recommendation from the year and its outcome"
                - "Agree three loss priorities for the coming year with leadership"
            - name: First loss review as a new sales manager
              description: |-
                ## Purpose
                A manager taking over a team inherits its loss history along with its pipeline, and the patterns in it say a lot about where the team needs help. Reviewing the team's last two quarters of losses in the first six weeks, with each seller, gives a quick read on skills and habits without turning first conversations into blame.

                ## Milestones
                1. The team's last two quarters of losses pulled with reasons and stages.
                2. A loss conversation held with each seller about two of their deals.
                3. Patterns by seller and across the team noted privately.
                4. Two coaching priorities chosen from the patterns.

                ## Notes
                Hold these as learning conversations. Sellers who feel judged in their first meeting with a new manager will code future losses defensively.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Within six weeks every seller has talked through two losses with the new manager and two team coaching priorities are written down."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pull the team's closed-lost deals from the last two quarters"
                - "Ask each seller to pick two losses to talk through with you"
                - "Note patterns by seller and across the team in a private file"
                - "Choose two coaching priorities from what you found"
            - name: Personal loss log for an individual seller
              description: |-
                ## Purpose
                Sellers who keep their own loss notes, separate from the CRM and written honestly for themselves, improve faster than those who wait for a manager's review. A personal log with three lines per loss and a monthly reread shows each seller their own patterns: the stage they tend to lose at, the buyers they misread.

                ## Milestones
                1. A personal log with three fields: what happened, the turning point, what I would change.
                2. Every loss from the past quarter entered.
                3. A monthly reread with one change chosen each time.
                4. Three months of changes and their results noted.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A seller's personal log holds every loss from the last quarter and three monthly rereads, each with one chosen change."
                cadence: rolling
              tasks:
                - "Set up a private loss log with three fields per deal"
                - "Enter every deal you lost in the past quarter"
                - "Reread your loss log and choose one change for next month @recurring(monthly:28)"
            - name: Lightweight loss analysis for a small sales team
              description: |-
                ## Purpose
                A team of five to ten sellers has no analyst and no budget for interview firms, but its losses carry the same lessons. A stripped-down version, with five reason codes, a monthly half-hour review over the closed-lost report and one lost-buyer call a month by the manager, gives most of the value in about two hours a month.

                ## Milestones
                1. Five reason codes agreed by the team.
                2. A half-hour monthly review held on the closed-lost report.
                3. One lost-buyer call a month made by the manager.
                4. Six months of reviews completed, each producing one change.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly half-hour loss reviews held by a small team, each with one change recorded."
                cadence: rolling
              tasks:
                - "Agree five loss reason codes with the team in one meeting"
                - "Hold the half-hour closed-lost review with the team @recurring(monthly:12)"
                - "Call one lost buyer a month yourself and share what you heard"
            - name: Interviewing several members of a lost buying committee
              description: |-
                ## Purpose
                Enterprise decisions are made by committees, and the champion's account of a loss is often not the one procurement, security or the economic buyer would give. Interviewing two or three people in different roles about the same lost deal shows where the decision was really made and which stakeholder you never won.

                ## Milestones
                1. The roles on a lost committee deal identified: champion, economic buyer, technical or procurement lead.
                2. Interview requests sent to each through the most suitable route.
                3. Their accounts compared for agreement and conflict.
                4. A short write-up naming the stakeholder or step that decided the loss.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "At least two people in different roles on one lost enterprise deal are interviewed, and a write-up names where the decision was made."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick a recent high-value lost deal with a large buying committee"
                - "List the roles on the committee and who to approach for each"
                - "Interview at least two people in different roles"
                - "Write up where their accounts of the decision differ"
            - name: Loss watch period after a price change or launch
              description: |-
                ## Purpose
                A price rise, a new package or a major release changes what buyers compare, and the first three months after it are when loss patterns shift fastest. A tagged watch period, with every loss in that window flagged and the first interviews prioritised, tells you within a quarter whether the change is costing deals.

                ## Milestones
                1. The launch or price change date fixed as the start of a watch period.
                2. Every loss in the following ninety days tagged to the change.
                3. Interviews prioritised for losses that mention the change.
                4. A short report at ninety days comparing reasons before and after.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A ninety-day report comparing loss reasons before and after a price change or launch is sent to its owner."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Add a watch tag for losses closed after the change date"
                - "Prioritise interviews for losses that mention the change"
                - "Compare loss reasons ninety days before and after the change"
                - "Send a short report to the pricing or product owner at ninety days"
            - name: Analysing lost renewals and expansion deals
              description: |-
                ## Purpose
                Losing an upsell or renewal is a different kind of loss: the buyer knows your product well and the reasons are usually about value delivered, not the pitch. Applying the same coding and interview approach to lost expansion and renewal opportunities, with customer success in the room, shows what existing customers are really telling you.

                ## Milestones
                1. Expansion and renewal losses separated into their own view of the log.
                2. Reason codes added for adoption, value delivered and support experience.
                3. Interviews run jointly with customer success for the largest losses.
                4. Findings shared with customer success and account managers each quarter.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Expansion and renewal losses are coded separately and a quarterly findings summary reaches customer success for four quarters."
                cadence: cyclic
              tasks:
                - "Filter expansion and renewal losses into their own view of the log"
                - "Add codes for adoption, value delivered and support experience"
                - "Run the largest renewal loss interviews jointly with customer success"
                - "Share expansion and renewal loss findings with customer success @recurring(quarterly)"
            - name: Loss driver analysis by segment, deal size and source
              description: |-
                ## Purpose
                Overall loss reasons hide very different stories: small deals may be lost on price, large ones on security, partner-sourced ones on timing. Cutting a year of coded losses by segment, deal size band, lead source and seller tenure, with the sample rules applied, shows which fixes belong to which part of the business.

                ## Milestones
                1. A year of coded losses joined with segment, size band, source and seller tenure.
                2. Reason mix calculated for each cut that meets the sample rule.
                3. The three cuts with the most distinct loss patterns named.
                4. A recommendation written for each of those three cuts.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written analysis names the three most distinct loss patterns by segment, size, source or tenure, each with a recommendation."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Join a year of coded losses with segment, size band, source and tenure"
                - "Calculate the reason mix for each cut that meets the sample rule"
                - "Ask the agent to flag the cuts whose reason mix differs most from the average"
                - "Write one recommendation for each of the three most distinct cuts"
            - name: Early warning signals mined from lost deal calls
              description: |-
                ## Purpose
                Recorded calls from lost deals often contain the warning months before the loss: the champion going quiet, a new stakeholder appearing, a competitor named in passing. Reviewing calls from twenty lost deals against twenty won ones for these signals gives managers a short list to act on while a deal is still open.

                ## Milestones
                1. Calls from twenty lost and twenty won deals of similar size selected.
                2. A list of candidate warning signals checked across both sets.
                3. Signals that appear far more often in losses kept, the rest dropped.
                4. The surviving signals shared with managers for use in deal reviews.

                ## Notes
                Check that your recording consent wording allows recordings to be used for internal analysis before you start.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A short list of warning signals, each shown to appear more often in forty reviewed lost deals than won ones, is shared with managers."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Select calls from twenty lost and twenty won deals of similar size"
                - "Write a list of candidate warning signals to listen for"
                - "Count how often each signal appears in lost versus won deals"
                - "Scan this month's lost-deal recordings for the surviving signals @recurring(monthly:19)"
            - name: Measuring the revenue effect of loss-driven changes
              description: |-
                ## Purpose
                Eventually someone will ask what the programme has been worth. Tracking each change that came from loss findings, the reason it targeted, the date it went live and that reason's share of losses and win rate before and after, gives an honest if approximate answer and shows which kinds of fix work.

                ## Milestones
                1. A register of every change made because of loss findings, with go-live dates.
                2. Before and after figures for each targeted reason and the affected segment's win rate.
                3. A rough estimate of revenue retained, with its assumptions written down.
                4. The register reviewed with finance or revenue operations.

                ## Notes
                Other things change at the same time, so treat the estimate as directional and say so in any report that uses it.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A change register with before and after loss figures and a written revenue estimate has been reviewed with finance or revenue operations."
                cadence: cyclic
              tasks:
                - "List every change made because of loss findings with its go-live date"
                - "Update before and after loss shares for each targeted reason @recurring(quarterly)"
                - "Write a rough revenue retained estimate with its assumptions"
                - "Review the register with finance or revenue operations"
---

# Lost Deal Analysis

This area is for sales managers, sellers and enterprise deal teams who want to know why deals are lost rather than guess. It starts with the foundations (which losses to review, a loss reason taxonomy, required CRM fields, a twelve-month baseline, an owner and an interview guide), then the weekly, monthly and quarterly routines that keep codes clean and interviews flowing, the skills of interviewing lost buyers and reading loss data, the changes to pricing, product and the playbook that the findings support, the dated readouts and post-mortems, the situations new managers, small teams and committee deals bring, and finally specialist analysis for programmes that have run a year or more.

What repeats is a Monday check of new closed-lost records and a Friday seller debrief, monthly interview picks, loss shares, pricing extracts and a pattern review spread across the month, quarterly reports, product sessions and accuracy audits, and a yearly taxonomy refresh and year-on-year review. The Operational checklist, Meeting notes, Metrics log, Feedback themes, Purchase decision and Remediation plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
