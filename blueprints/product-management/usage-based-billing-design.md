---
id: product-management.usage-based-billing-design
name: Usage-Based Billing Design
description: "A value metric chosen on evidence, meters everyone trusts, allowances, caps and overages that feel fair, and the bill runs, disputes and forecasts that keep usage bills predictable."
category: business
version: 1.0.0
tags: [product-management, usage-based-billing-design, founder, team, usage-based-pricing, metering, overages, billing]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - operational-checklist
    - metrics-log
    - reading-queue
    - product-spec
  pillars:
    - name: Product Management
      emoji: "🧩"
      description: "Deciding what to build and why: discovery and research, roadmaps and prioritisation, specs and launches, pricing and packaging, product analytics, and the feedback loops that keep a product honest."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Usage-Based Billing Design
          description: "Choosing the value metric customers pay by, designing usage limits, overage rules and meters, and making bills predictable enough to trust."
          projects:
            - name: Inventory of every metered charge and meter
              description: |-
                ## Purpose
                Before redesigning anything, list what the product already counts and what it already charges for, because most teams find meters that bill nothing and charges that no meter supports. A one-page inventory of each meter, its source, its unit and the plans that use it turns a vague sense of the billing model into something the founder and team can argue about with facts.

                ## Milestones
                1. Every meter in the product listed with its unit, data source and owning service.
                2. Each charge on the current price list matched to the meter that drives it, or flagged as unmetered.
                3. Meters that feed no invoice marked for either use or retirement.
                4. The inventory reviewed by engineering and finance and stored where the team can find it.

                ## Notes
                Include soft meters such as rate limits and plan quotas, not only the ones that reach an invoice. They shape customer behaviour just as much.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A meter inventory covering every counted unit and every usage charge, with unmetered charges and unused meters flagged, reviewed by engineering and finance."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every usage counter the product records today and where it is stored"
                - "Match each line on the current price list to the meter behind it"
                - "Ask engineering which meters are estimates rather than exact counts"
                - "Share the inventory with finance and note any charge they cannot trace"
            - name: Usage billing ownership map
              description: |-
                ## Purpose
                Billing for usage crosses more teams than seat billing: engineering owns the events, data owns the aggregation, finance owns invoices and revenue, and support owns the angry emails. When nobody owns the seams, a broken meter can run for a month before anyone notices. Naming one owner per stage, and who decides when a rate or meter changes, prevents those expensive silences.

                ## Milestones
                1. The billing flow drawn as stages from usage event to invoice to payment.
                2. One named owner and one backup for each stage.
                3. A written rule for who approves a change to any meter, rate or allowance.
                4. The map linked from the team's billing runbook and reviewed once a year.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page ownership map with a named owner and backup for every stage from usage event to paid invoice, plus a written change approval rule."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Sketch the stages from usage event to paid invoice on one page"
                - "Name an owner and a backup for each stage"
                - "Write down who signs off a change to a meter, rate or allowance"
                - "Review owners and backups against the current team @recurring(yearly)"
            - name: Unit cost model for each metered resource
              description: |-
                ## Purpose
                A usage price set without knowing the cost per unit can lose money on exactly the customers who use the product most. Working out the marginal cost of each metered unit, such as compute per job, storage per gigabyte month or third-party fees per message, puts a floor under every rate and shows where heavy users erode gross margin.

                ## Milestones
                1. Marginal cost per unit worked out for each billable meter, with the inputs shown.
                2. Fixed platform costs separated from costs that scale with usage.
                3. Gross margin at current rates calculated for a light, median and heavy customer.
                4. Meters priced below cost, or within ten points of margin of it, flagged for a rate decision.

                ## Notes
                Ask finance to check the allocation method. A rough model refreshed each quarter beats a precise one that is a year old.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A unit cost sheet showing marginal cost and gross margin per meter for a light, median and heavy customer, checked by finance."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pull last quarter's infrastructure and vendor bills by service"
                - "Divide each variable cost by the units its meter recorded"
                - "Calculate gross margin for a light, median and heavy customer"
                - "Refresh unit costs with the latest infrastructure bills @recurring(quarterly)"
            - name: Usage distribution across the customer base
              description: |-
                ## Purpose
                Customer usage almost never spreads evenly: a handful of accounts often generate most of the volume, and the shape of that tail decides whether a usage model raises or cuts revenue. Plotting usage by percentile for the last six months shows where allowance breakpoints would fall, who would pay more and who would pay less, before a single rate is chosen.

                ## Milestones
                1. Six months of per-account usage exported for each candidate value metric.
                2. A percentile table at the 10th, 50th, 90th and 99th percentile produced for each metric.
                3. The share of total usage held by the top tenth of accounts calculated.
                4. Seasonal or one-off spikes identified so they do not distort breakpoints.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A percentile table and tail analysis for each candidate value metric, covering at least six months of per-account usage."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export six months of usage per account for each candidate metric"
                - "Build a percentile table for every candidate metric"
                - "Work out what share of volume the top tenth of accounts generate"
                - "Mark months distorted by migrations, outages or one-off batch jobs"
            - name: Buyer budgeting interviews for usage pricing
              description: |-
                ## Purpose
                Budget holders decide whether usage pricing survives procurement, and if the person who signs cannot predict next quarter's cost for their finance team, the deal stalls or the account churns after the first big bill. Talking to eight to ten buyers about how they budget, who approves overruns and what a surprise bill does to the relationship tells you whether customers need caps, commits or simply better estimates.

                ## Milestones
                1. Eight to ten buyers or finance approvers interviewed across small and large accounts.
                2. How each one budgets for variable software costs written down in their own words.
                3. The overrun amount that would trigger an escalation recorded for each interview.
                4. Findings summarised into three to five predictability requirements for the billing design.

                ## Notes
                Interview the budget holder, not only the daily user. They feel the bill, and they are usually the one who cancels.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "At least eight budget holder interviews recorded, with a summary of three to five predictability requirements the billing design must meet."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pick ten accounts, mixing small teams and larger contracts"
                - "Ask each budget holder how they forecast variable software spend"
                - "Record the overrun size that would make them escalate or cancel"
                - "Ask the agent to group the interview notes into predictability requirements"
            - name: Value metric shortlist and choice
              description: |-
                ## Purpose
                The value metric is the unit customers pay by, and a good one rises with the value the customer gets, is easy to understand and is hard to game. Scoring three to five candidates, such as API calls, records processed, active contacts or compute minutes, against the same criteria turns the most consequential billing decision into a recorded choice rather than a default copied from a competitor.

                ## Milestones
                1. Three to five candidate metrics listed with a one-line definition each.
                2. Each candidate scored on value alignment, predictability, measurability, gaming risk and cost alignment.
                3. Revenue under the top candidates modelled on last quarter's real usage.
                4. One metric chosen, with the runner-up and the reasons recorded in the decision log.

                ## Notes
                A metric customers can see and control in the product beats a more precise one they cannot. If support cannot explain it in one sentence, keep looking.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A value metric chosen from at least three scored candidates, with revenue modelled on real usage and the decision recorded with its runner-up."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List every unit that grows when a customer gets more value"
                - "Score each candidate on the same five criteria"
                - "Model last quarter's revenue under the top three candidates"
                - "Record the chosen metric and the runner-up with reasons"
            - name: Billable event dictionary
              description: |-
                ## Purpose
                Disputes usually start with a definition: does a retried request count, is a deleted record billed, which time zone closes the month. A dictionary that defines every billable event, its idempotency key, its timestamp rule and its exclusions gives engineering, finance and support one answer to point to.

                ## Milestones
                1. Every billable event defined with what counts, what does not, and a worked example.
                2. An idempotency key and timestamp source specified for each event.
                3. Billing period boundaries fixed to one time zone and written down.
                4. Exclusions such as retries, test traffic and internal accounts listed.
                5. The dictionary approved by engineering and finance before any new meter is built.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A billable event dictionary covering every meter, with idempotency keys, timestamp rules and exclusions, approved by engineering and finance."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write a one-paragraph definition for each billable event"
                - "Specify the idempotency key that prevents double counting"
                - "Choose the time zone that closes every billing period"
                - "List the traffic that must never be billed, such as tests and retries"
            - name: Usage billing principles one-pager
              description: |-
                ## Purpose
                Dozens of small billing choices come up every month, from rounding to grace periods, and without principles each one gets argued from scratch. Five or six written principles, such as never billing for usage caused by our own errors or always warning before a bill doubles, let the team decide quickly and explain decisions to customers consistently.

                ## Milestones
                1. Five or six principles drafted, each with an example decision it settles.
                2. The principles tested against three past billing complaints.
                3. Sign-off from the founder or product lead recorded.
                4. The page pinned in the billing channel and linked from the support playbook.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed-off page of five or six usage billing principles, each with a worked example, linked from the support playbook."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft six principles covering fairness, warnings and our own errors"
                - "Test each principle against three past billing complaints"
                - "Get sign-off from the founder or product lead"
                - "Pin the page where support and engineering will see it"
            - name: Metering and billing platform choice
              description: |-
                ## Purpose
                Building metering, rating and invoicing in-house looks cheap until the first mid-cycle plan change, proration rule or tax requirement arrives. Comparing a usage billing vendor, the billing features of your payment provider and an in-house build against the same requirements, including event volume, credits, commits and finance exports, sets the system this area will run on for years.

                ## Milestones
                1. Requirements written covering event volume, rating models, credits, commits, invoicing and exports.
                2. Three options scored, including at least one vendor and one in-house estimate.
                3. Total cost over three years estimated for each option, including engineering time.
                4. A choice made, with a migration or exit path noted.

                ## Notes
                Start from the **Purchase decision** template. Ask each vendor how they handle late events and backdated corrections; the answers separate them quickly.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A metering and billing platform chosen from three scored options, with a three-year cost estimate and an exit path recorded."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write the requirements list with expected events per month"
                - "Shortlist two vendors and estimate an in-house build"
                - "Ask each vendor to show how they correct a backdated usage error"
                - "Compare three-year cost including engineering time and record the choice"
            - name: Monthly meter reconciliation against source logs
              description: |-
                ## Purpose
                Meters drift: a deploy drops events, a retry loop double counts, a new region never reports. Comparing each meter's monthly total against an independent source, such as application logs or the data warehouse, catches the drift while the numbers are small enough to correct quietly.

                ## Milestones
                1. An independent source named for every billable meter.
                2. A tolerance agreed per meter, such as half a percent.
                3. A monthly comparison in place that flags any meter outside tolerance.
                4. Every breach traced to a cause and recorded with its fix.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every billable meter reconciled against an independent count each month, with breaches and their causes recorded."
                cadence: rolling
              tasks:
                - "Name an independent count to check each meter against"
                - "Agree a tolerance for each meter with engineering"
                - "Compare meter totals with source counts and log any gap @recurring(monthly:4)"
                - "Open a ticket for any meter outside tolerance two months running"
            - name: Pre-invoice usage review before each bill run
              description: |-
                ## Purpose
                Once invoices go out, every error becomes a customer conversation and often a credit note. A short review the day before the bill run, looking at the largest bills, the biggest month-on-month jumps and any active account with zero usage, stops most mistakes before a customer sees them.

                ## Milestones
                1. A checklist covering the top twenty bills, jumps over a set threshold and zero-usage accounts.
                2. A named reviewer and a backup for every bill run.
                3. A hold rule for invoices that fail the check.
                4. Each run's findings logged with what was held or corrected.

                ## Notes
                Start from the **Operational checklist** template. A jump of more than half month on month deserves a look even when it is genuine, because the customer will ask.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A pre-invoice review completed and logged before every monthly bill run, with held invoices and corrections recorded."
                cadence: rolling
              tasks:
                - "Write the pre-invoice checklist and agree the jump threshold"
                - "Set the rule for holding an invoice that fails a check"
                - "Run the pre-invoice checklist before the bill run @recurring(monthly:26)"
                - "Log what was held, corrected or released after each run"
            - name: Usage anomaly and runaway spend watch
              description: |-
                ## Purpose
                A misconfigured script or a leaked API key can generate a month's usage in a weekend, and the customer will blame you for not noticing. Weekly checks for accounts whose usage jumps far beyond their own baseline, plus an alert for extreme spikes, protect customers from bills they never intended and protect you from disputes and bad debt.

                ## Milestones
                1. A baseline per account and a spike rule, such as three times the trailing four-week average.
                2. An automated alert for extreme spikes routed to a named person.
                3. A weekly review of flagged accounts with an action recorded for each.
                4. A customer contact script ready for suspected runaway usage.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Accounts exceeding their spike rule are reviewed every week, and every suspected runaway is contacted before the next bill run."
                cadence: rolling
              tasks:
                - "Define the spike rule as a multiple of each account's own baseline"
                - "Route extreme spike alerts to a named person and a backup"
                - "Review flagged accounts and contact any with suspected runaway usage @recurring(weekly:mon)"
                - "Write a short script for telling a customer their usage has spiked"
            - name: Weekly usage revenue and gross margin review
              description: |-
                ## Purpose
                Usage revenue moves every day, so a monthly look is too slow to notice a big customer quietly cutting volume or a cost spike eating margin. A fifteen-minute weekly review of usage, revenue run rate and gross margin by meter keeps the team close to numbers that seat-based products only see at renewal.

                ## Milestones
                1. A weekly view of total usage, revenue run rate and gross margin per meter.
                2. The top ten accounts by usage shown with their week-on-week change.
                3. Thresholds that trigger a follow-up written beside each figure.
                4. Twelve consecutive weekly entries kept.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly entries of usage, run rate and margin per meter, with follow-ups noted for every threshold breach."
                cadence: rolling
              tasks:
                - "Set up a metrics log with usage, run rate and margin per meter"
                - "Add the top ten accounts with their week-on-week change"
                - "Record the weekly figures and note any account down by a fifth @recurring(weekly:thu)"
                - "Raise accounts with falling usage with their account owner"
            - name: Billing dispute and credit note log
              description: |-
                ## Purpose
                Each disputed usage bill tells you something about a meter, a definition or an expectation you set badly. Logging every dispute with its cause, the credit given and the time to resolve shows which problems recur, and gives finance a clean record of every adjustment.

                ## Milestones
                1. A log capturing account, amount disputed, cause, credit issued and days to resolve.
                2. Cause categories agreed, such as meter error, unclear definition, runaway usage and expectation gap.
                3. A monthly summary of disputes by cause shared with the product team.
                4. A root cause fix opened for every cause that appears three times.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every usage billing dispute logged with cause, credit and resolution time, and a monthly summary by cause shared with product."
                cadence: rolling
              tasks:
                - "Create the dispute log with cause categories agreed with support"
                - "Backfill the last three months of billing disputes"
                - "Ask the agent to summarise the month's disputes by cause @recurring(monthly:12)"
                - "Pick the most frequent cause and open a fix ticket"
            - name: Prepaid credit balance and expiry watch
              description: |-
                ## Purpose
                Prepaid credits create obligations: customers expect a warning before they run out, and finance needs to know how much unused credit sits on the books. A monthly look at balances, burn rates and upcoming expiries lets you prompt top-ups before service stops, and flags accounts about to lose credit they will complain about.

                ## Milestones
                1. A report of credit balance, monthly burn and projected run-out date per account.
                2. Accounts within thirty days of running out flagged for a top-up prompt.
                3. Credits due to expire in the next sixty days listed with the account owner.
                4. The total of unused credit shared with finance each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly credit report showing balance, burn and run-out per account, with every account inside thirty days of run-out prompted."
                cadence: rolling
              tasks:
                - "Build a report of credit balance, burn and run-out date per account"
                - "Set the top-up warning at thirty days of projected burn"
                - "Review balances, run-out dates and upcoming expiries @recurring(monthly:18)"
                - "Send finance the month's total of unused prepaid credit"
            - name: Monthly usage revenue forecast with finance
              description: |-
                ## Purpose
                Seat revenue is known at the start of the month, while usage revenue is only known at the end, which makes cash planning and hiring decisions harder. A monthly forecast built from each large account's own trend and a simple model for the rest, checked afterwards against actuals, gives finance a number they can plan with and shows how accurate the method really is.

                ## Milestones
                1. A forecast method written down, separating the top accounts from the long tail.
                2. A monthly forecast submitted to finance before each month starts.
                3. Forecast against actual recorded each month with the percentage error.
                4. The method adjusted after any month where the error fell outside the agreed band.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A usage revenue forecast submitted before each month starts, with forecast error tracked against actuals for six consecutive months."
                cadence: rolling
              tasks:
                - "Agree the forecast format and acceptable error band with finance"
                - "Forecast the top twenty accounts from their own usage trend"
                - "Submit next month's usage forecast and last month's error @recurring(monthly:3)"
                - "Review the method after any month outside the error band"
            - name: Meter change control
              description: |-
                ## Purpose
                A small change to how an event is counted can raise or cut every customer's bill overnight, often without anyone in product noticing. A lightweight process, where any change to a meter, rounding rule or aggregation needs a written impact estimate and approval before release, keeps billing changes deliberate.

                ## Milestones
                1. A list of the code paths and settings that count as meter changes.
                2. A short change form with the expected impact on bills.
                3. An approver named in the ownership map for each type of change.
                4. A quarterly audit comparing deployed meter changes with approved forms.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every meter, rounding or aggregation change in the last quarter has an approved change form with an impact estimate."
                cadence: rolling
              tasks:
                - "List the code paths and settings that count as meter changes"
                - "Write a one-page change form with an estimated bill impact"
                - "Add a meter change question to the release review"
                - "Audit deployed meter changes against approved forms @recurring(quarterly)"
            - name: Support playbook for usage bill questions
              description: |-
                ## Purpose
                Support agents field most usage billing questions, and without a playbook they either over-credit to make the customer go away or escalate everything. A playbook with a plain explanation of each meter, how to read the usage breakdown, credit limits per role and a clear escalation path gives customers consistent answers and keeps credits under control.

                ## Milestones
                1. A plain explanation of every meter and where to find it in the usage breakdown.
                2. Saved replies for the five most common bill questions.
                3. Credit limits by role and an escalation path for larger amounts.
                4. Top ticket reasons reviewed monthly and fed back into the playbook.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A support playbook with meter explanations, five saved replies and credit limits by role, updated monthly from ticket reasons."
                cadence: rolling
              tasks:
                - "Pull the last fifty usage billing tickets and group them by question"
                - "Write saved replies for the five commonest questions"
                - "Set credit limits per support role and the escalation path"
                - "Review the month's billing ticket reasons and update the playbook @recurring(monthly:21)"
            - name: Quarterly value metric health check
              description: |-
                ## Purpose
                Metrics that fitted at launch can drift away from value as customers change how they use the product, for example when automation multiplies API calls without adding any value for the customer. Checking each quarter whether usage still tracks outcomes, retention and willingness to pay shows early when the metric is starting to punish the wrong behaviour.

                ## Milestones
                1. The link between metered usage and retention or a customer outcome checked.
                2. Accounts that pay a lot but show little engagement or value listed.
                3. Avoidance behaviour, such as batching work to dodge a meter, looked for.
                4. A one-line verdict recorded: keep, adjust or start a full metric review.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded keep, adjust or review verdict on the value metric every quarter, backed by usage, retention and avoidance checks."
                cadence: cyclic
              tasks:
                - "Compare usage growth with retention for the last two cohorts"
                - "List high-paying accounts with low engagement or poor outcomes"
                - "Look for customers batching or restructuring work to avoid meters"
                - "Record a keep, adjust or review verdict for the metric @recurring(quarterly)"
            - name: Annual usage rate card review
              description: |-
                ## Purpose
                Unit costs fall, competitors reprice, and allowances that were generous at launch become stingy or ruinous. One planned yearly review of every rate, allowance and tier boundary, using the unit cost model and the usage distribution, keeps the rate card current without the ad hoc changes that confuse customers.

                ## Milestones
                1. Every rate, allowance and tier boundary listed with its last change date.
                2. Margin and customer bill impact of each proposed change modelled.
                3. Proposed changes approved and scheduled with their notice periods.
                4. The new rate card version and its effective date recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated rate card version approved each year, with modelled margin and customer impact for every changed rate."
                cadence: cyclic
              tasks:
                - "Export the current rate card with each item's last change date"
                - "Model margin and bill impact for each proposed change"
                - "Agree the notice period for any rate that will rise"
                - "Start the yearly rate card review with finance @recurring(yearly)"
            - name: Usage pricing models compared
              description: |-
                ## Purpose
                Pay as you go, tiered allowances, committed spend, prepaid credits and a base fee plus usage all charge by consumption, but they behave very differently for cash flow, predictability and sales. Studying how each works, with one real example of each from public pricing pages, gives the team a shared vocabulary before any design argument starts.

                ## Milestones
                1. A one-page summary of five usage models with strengths and failure modes.
                2. One public example of each model noted with what it charges by.
                3. The two models best suited to your buyers named with reasons.
                4. A thirty-minute team session held to share the summary.

                ## Notes
                Start from the **Reading queue** template for the books, essays and pricing pages you collect along the way.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page comparison of five usage pricing models with real examples, presented to the team in a thirty-minute session."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Collect public pricing pages that show each of five usage models"
                - "Write strengths and failure modes for each model on one page"
                - "Name the two models that fit your buyers best and why"
                - "Run a thirty-minute session to walk the team through the summary"
            - name: Volume versus graduated tier arithmetic
              description: |-
                ## Purpose
                With volume tiers, crossing a boundary reprices every unit; with graduated tiers, only the units above it change price, and the difference can swing a bill by thousands. Working through both on your own customers' usage, along with package pricing and minimums, means nobody ships a tier table where using more accidentally costs less.

                ## Milestones
                1. Five sample bills worked by hand under volume, graduated and package pricing.
                2. Any boundary where using more costs less identified and explained.
                3. A small calculator that rates any usage number under each method.
                4. The method the product uses written into the billing principles.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A calculator that rates usage under volume, graduated and package pricing, with any perverse tier boundaries identified."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Work five real usage totals through volume and graduated tiers by hand"
                - "Find any boundary where a larger usage total produces a smaller bill"
                - "Build a small calculator that rates any usage under each method"
                - "Record which tier method the product uses and why"
            - name: How a metering pipeline handles late and duplicate events
              description: |-
                ## Purpose
                Product managers on usage billing need to understand the pipeline well enough to ask the right questions: what happens to an event that arrives three days late, after the invoice closed, or arrives twice. An hour with engineering tracing one event from source to invoice, then writing it up, turns black-box billing into something the PM can explain to finance and customers.

                ## Milestones
                1. One event traced from the service that emits it to a line on an invoice.
                2. The rules for late, duplicate and out-of-order events written down.
                3. The cut-off after which late usage moves to the next bill recorded.
                4. A one-page pipeline diagram shared with finance and support.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page pipeline diagram with written rules for late, duplicate and out-of-order events, shared with finance and support."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Book an hour with engineering to trace one event end to end"
                - "Ask how late, duplicated and out-of-order events are handled"
                - "Write down the cut-off for usage arriving after a bill closes"
                - "Share a one-page pipeline diagram with finance and support"
            - name: Revenue recognition basics for usage and prepaid credits
              description: |-
                ## Purpose
                Prepaid credits, committed spend and overage are recognised as revenue at different times, and a billing design that ignores this creates painful clean-up for finance at year end. Learning the basics from your accountant or finance lead, and how they want credits, unused balances and commits recorded, keeps product decisions compatible with the books.

                ## Milestones
                1. A session held with the finance lead or accountant on how usage revenue is recognised.
                2. Their treatment of prepaid credits, unused credit and commit shortfalls written down.
                3. Billing design choices that would complicate the books listed.
                4. A short note added to the billing principles on what to check with finance first.

                ## Notes
                This is about knowing which questions to ask. The treatment itself is your accountant's or auditor's call, and the rules differ by country and accounting standard.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note, agreed with the finance lead or accountant, of how usage, prepaid credits and commit shortfalls are recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the finance lead for a session on recognising usage revenue"
                - "Write down how they treat prepaid credits and unused balances"
                - "List billing choices finance wants to approve before launch"
                - "Add a check-with-finance rule to the billing principles"
            - name: Teardown of five usage-priced bills and pricing pages
              description: |-
                ## Purpose
                Mature usage-priced products have already found ways to show estimates, meters and invoices clearly, and their patterns are free to study. Signing up for five of them, capturing their pricing pages, usage dashboards, alerts and invoices, and noting what you would copy gives the team proven patterns rather than guesses.

                ## Milestones
                1. Five usage-priced products chosen across cloud, communications, data and AI tools.
                2. Pricing page, usage dashboard, alert settings and a sample invoice captured for each.
                3. Patterns worth copying and traps to avoid listed.
                4. Three ideas added to the billing backlog with the example that inspired each.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A teardown of five usage-priced products covering pricing page, dashboard, alerts and invoice, with three ideas added to the backlog."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick five products with usage pricing in different categories"
                - "Capture each one's pricing page, usage dashboard and alert settings"
                - "Ask the agent to compare the five invoices and list clear and confusing elements"
                - "Add the three strongest ideas to the billing backlog"
            - name: Consumption ramp curves for new customers
              description: |-
                ## Purpose
                New usage customers rarely start at full volume: most ramp over several months as they move workloads across, and some stall early. Plotting the first twelve months of usage for past cohorts shows the typical ramp, which feeds forecasts and commit sizing and gives account owners an early sign that a new account is stuck.

                ## Milestones
                1. Monthly usage for each customer's first twelve months gathered by start cohort.
                2. A typical ramp curve drawn with quartile bands.
                3. The month by which most accounts reach steady usage identified.
                4. A stalled-ramp rule defined for account owners to act on.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A ramp curve with quartile bands from at least two cohorts, and a stalled-ramp rule shared with account owners."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Gather twelve months of usage for each customer from their first bill"
                - "Plot median and quartile ramps by start cohort"
                - "Note the month most accounts reach steady usage"
                - "Define a stalled-ramp signal and share it with account owners"
            - name: Explaining a usage bill in two minutes
              description: |-
                ## Purpose
                Founders and salespeople lose deals when they cannot explain a usage price quickly and confidently, and buyers hear vagueness as risk. Practising a two-minute explanation, with a worked example at the customer's own expected volume, makes the model sound as predictable as it really is.

                ## Milestones
                1. A two-minute script covering the metric, the allowance, the rate and how to cap spend.
                2. Worked bills prepared for a small, medium and large customer.
                3. The script rehearsed with three colleagues playing sceptical buyers.
                4. Recurring buyer objections written down with answers.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A rehearsed two-minute usage price explanation with three worked bills and a written list of objections and answers."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a two-minute explanation of the metric, allowance and rate"
                - "Prepare worked bills for a small, medium and large customer"
                - "Rehearse with three colleagues playing sceptical finance buyers"
                - "Note each objection that came up and draft an answer"
            - name: Included allowance and overage rate design
              description: |-
                ## Purpose
                The allowance included in each plan and the rate charged beyond it decide whether customers feel treated generously or squeezed. Setting allowances from the usage distribution, so most customers on a plan fit inside, and an overage rate that stays above unit cost without punishing growth, is the core of a usage price.

                ## Milestones
                1. An allowance per plan set so a stated share of that plan's customers, such as 80%, fit inside it.
                2. An overage rate per plan that clears unit cost with margin and does not exceed the next plan's effective rate.
                3. Bills for light, median and heavy customers modelled under the new design.
                4. Allowances and rates approved and recorded with their reasoning.

                ## Notes
                Check the upgrade point. A customer paying heavy overage should find the next plan cheaper, and the bill should tell them so.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Approved allowances and overage rates per plan, with modelled bills showing each overage rate above unit cost and below the next plan's effective rate."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Choose the share of each plan's customers who should fit inside its allowance"
                - "Set allowances from the usage percentiles for each plan"
                - "Check every overage rate against unit cost and the next plan's price"
                - "Model bills for light, median and heavy customers and record the decision"
            - name: Hard caps, soft limits and throttling policy
              description: |-
                ## Purpose
                When a customer hits their allowance, the product has to do something: keep serving and bill overage, slow them down, or stop. Deciding that per plan, with warnings at set thresholds and a way for customers to set their own cap, is the difference between a fair surprise and an outage that gets blamed on billing.

                ## Milestones
                1. Behaviour at the limit chosen per plan: bill overage, throttle or stop.
                2. Warning thresholds set, for example at 50%, 80% and 100% of allowance.
                3. Customer-set spending caps specified, including who on the account can change them.
                4. Behaviour for critical workloads agreed, so a cap never silently breaks a customer's production system.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written limit policy for every plan covering behaviour at the limit, warning thresholds and customer-set caps, approved by product and engineering."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Decide per plan whether usage beyond the limit is billed, throttled or stopped"
                - "Set the warning thresholds and who receives each warning"
                - "Specify how account admins set and change their own spend cap"
                - "Agree what happens to production traffic when a hard cap is reached"
            - name: In-product usage meter and spend alerts
              description: |-
                ## Purpose
                Customers trust usage pricing when they can watch usage build up before the bill arrives. A usage page showing current period usage, projected bill and remaining allowance, with email and in-app alerts at the thresholds already agreed, removes most bill shock and a large share of billing tickets.

                ## Milestones
                1. A spec for the usage page covering current usage, projected bill and remaining allowance.
                2. Usage shown within the agreed delay, such as one hour behind real time.
                3. Threshold alerts sent by email and in-app to account admins and billing contacts.
                4. Billing ticket volume compared for three months before and after release.

                ## Notes
                Start from the **Product spec** template. Show the projected bill in money, not only units, because customers budget in money.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A usage page and threshold alerts released, with billing ticket volume compared for three months before and after release."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Draft the usage page spec with projected bill and remaining allowance"
                - "Agree the maximum delay between usage and what the page shows"
                - "Specify who receives threshold alerts and through which channels"
                - "Record billing ticket volume for the three months before release"
            - name: Cost estimator for prospects
              description: |-
                ## Purpose
                Prospects who cannot estimate their bill either stall in procurement or guess low and churn after the first invoice. A simple estimator, on the pricing page or in the sales deck, that converts the prospect's own inputs into the value metric and a monthly cost range shortens deals and sets honest expectations.

                ## Milestones
                1. Inputs chosen that prospects already know, such as users, documents per month or calls per day.
                2. A conversion from those inputs to the value metric, checked against real customers.
                3. The estimate shown as a range with its assumptions, not a single figure.
                4. Estimates for ten recent customers compared with their actual first three bills.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An estimator whose range contains the actual first-quarter bill for at least eight of the ten recent customers tested."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List the inputs a prospect can answer without seeing the product"
                - "Fit a conversion from those inputs to metered usage using real accounts"
                - "Show the estimate as a monthly range with its assumptions"
                - "Test the estimator against ten recent customers' first three bills"
            - name: Usage invoice line item redesign
              description: |-
                ## Purpose
                One invoice line labelled usage with a single total invites a dispute, while lines showing each meter, the quantity, the allowance used and the rate answer the question before it is asked. Redesigning invoice lines and the attached usage breakdown is cheap compared with the support time unclear bills consume.

                ## Milestones
                1. Each invoice line shows meter, quantity, allowance consumed, billable quantity and rate.
                2. A downloadable usage breakdown by day and by project or workspace attached.
                3. Line names that match the names used in the product and on the pricing page.
                4. Three customers asked to read the new invoice and explain what they are paying for.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A redesigned invoice with per-meter lines and a downloadable breakdown, explained back correctly by three customers."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Collect three recent invoices that led to billing questions"
                - "Draft the new line layout with meter, quantity, allowance and rate"
                - "Match every line name to the term used on the pricing page"
                - "Ask three customers to read the draft invoice and explain it back"
            - name: Platform fee plus usage hybrid decision
              description: |-
                ## Purpose
                Pure usage pricing gives small customers a low entry point, but it leaves revenue volatile and can make tiny accounts unprofitable. Deciding whether to add a base platform fee or a minimum monthly charge, and what it includes, balances predictability for you against the low commitment that attracts new customers.

                ## Milestones
                1. Revenue volatility under pure usage measured over the last twelve months.
                2. Accounts that cost more to serve than they pay listed.
                3. Two or three hybrid options modelled, such as a platform fee with included usage.
                4. A decision recorded on a base fee or minimum, with its amount and what it includes.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on a base fee or minimum charge, with at least two hybrid options modelled on twelve months of accounts."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Measure the month-to-month swing in usage revenue over the last year"
                - "List accounts whose bills sit below their cost to serve"
                - "Model a platform fee and a monthly minimum against current accounts"
                - "Record the decision with the amount and what the fee includes"
            - name: Committed spend and drawdown contract terms
              description: |-
                ## Purpose
                Larger customers often want a discount for committing to annual spend, and you want the predictability, but the terms decide who carries the risk when usage falls short. Defining standard commit tiers, discount bands, drawdown rules, true-ups and what happens to a shortfall gives sales a repeatable offer instead of a fresh negotiation every time.

                ## Milestones
                1. Standard commit tiers and discount bands written down.
                2. Rules for drawdown, overage above the commit and shortfall at term end defined.
                3. Contract wording reviewed by your legal adviser.
                4. A monthly burn check per commit customer showing pace against commitment.

                ## Notes
                Shortfall terms are a legal and revenue question as well as a product one. Agree them with your lawyer and finance lead before sales offers them.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Standard commit terms with tiers, discounts and shortfall rules reviewed by a legal adviser, and a monthly burn check running for every commit customer."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Draft commit tiers and the discount band for each"
                - "Define drawdown, overage above commit and shortfall handling"
                - "Send the draft terms to your legal adviser for review"
                - "Review each commit customer's burn against pace @recurring(monthly:15)"
            - name: Prepaid credits and rollover rules
              description: |-
                ## Purpose
                Credits let customers pay up front and draw down, which helps cash flow and suits buyers with fixed budgets, but unclear rules on expiry, rollover and refunds breed resentment. Writing those rules once, in plain language, and showing balances clearly makes credits feel like a convenience rather than a trap.

                ## Milestones
                1. Credit pack sizes and any volume bonus defined.
                2. Expiry period, rollover limits and refund policy written in plain language.
                3. What happens when credits run out mid-month specified.
                4. The rules checked with finance for revenue treatment before launch.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Plain-language rules on credit packs, expiry, rollover, refunds and run-out, checked with finance before launch."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose credit pack sizes from current monthly spend bands"
                - "Write expiry, rollover and refund rules in plain language"
                - "Decide what happens when credits run out mid-month"
                - "Check the credit rules with finance before they go live"
            - name: Threshold billing and credit exposure
              description: |-
                ## Purpose
                Billing usage monthly in arrears means extending credit: a new pay-as-you-go account can run up a large bill and never pay. Choosing a billing frequency, a threshold that triggers an early invoice or card charge, and lower spend limits for new accounts keeps bad debt small without adding friction for good customers.

                ## Milestones
                1. Bad debt from usage invoices measured over the last year.
                2. A billing threshold set that triggers an interim charge at a fixed amount.
                3. Lower spend limits for new accounts that rise with payment history.
                4. The effect on bad debt reviewed after three bill cycles.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A billing threshold and new-account spend limits in place, with bad debt compared after three bill cycles against the year before."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Measure unpaid usage invoices from the last twelve months"
                - "Choose the amount that triggers an interim charge"
                - "Set starting spend limits for new accounts and the rule for raising them"
                - "Compare bad debt after three bill cycles with the year before"
            - name: Shadow billing run before go-live
              description: |-
                ## Purpose
                The safest way to launch usage billing is to calculate real bills for real customers for one or two cycles without charging anyone. Comparing shadow bills with what customers pay today shows who wins and who loses, surfaces meter bugs and gives sales a list of accounts to talk to before the change lands.

                ## Milestones
                1. Shadow bills calculated for every active account for at least one full cycle.
                2. Shadow bills compared with current bills, with winners and losers listed.
                3. Every account facing an increase above a set threshold assigned to an owner.
                4. Meter defects found in shadow running fixed before go-live.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "At least one full cycle of shadow bills compared with current bills, with every large increase assigned an owner and every defect fixed."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Run the new rating on last month's usage without issuing invoices"
                - "List every account whose bill would rise or fall by more than a fifth"
                - "Assign an owner to talk to each account facing a large increase"
                - "Fix meter defects found in shadow runs before setting the go-live date"
            - name: Usage pricing launch for new sign-ups
              description: |-
                ## Purpose
                Launching usage pricing for new customers first limits the blast radius: existing customers stay where they are while the meters, invoices and support playbook prove themselves. A dated launch with a checklist across pricing page, checkout, billing system and support makes the first real usage bills uneventful.

                ## Milestones
                1. A launch date agreed with engineering, finance, marketing and support.
                2. Pricing page, checkout, estimator and terms updated and checked against each other.
                3. Support trained on the playbook before launch day.
                4. The first fifty usage sign-ups reviewed for billing errors.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Usage pricing live for new sign-ups on the agreed date, with the first fifty accounts reviewed and no unresolved billing errors."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Agree the launch date with engineering, finance, marketing and support"
                - "Check pricing page, checkout and terms all show the same rates"
                - "Train support on the usage billing playbook before launch"
                - "Review the first fifty usage sign-ups for billing errors"
            - name: Moving existing customers from seats to usage
              description: |-
                ## Purpose
                Migrating existing customers is where trust is won or lost: some will pay more, some less, and all of them will read the notice closely. A phased migration with bill previews, a notice period that respects contracts, price protection for those facing big rises and a clear opt-in for those who save gets the move done without a churn spike.

                ## Milestones
                1. Customers segmented by bill change: saves, roughly flat, moderate rise, large rise.
                2. A notice period and any price protection agreed, consistent with existing contracts.
                3. Each customer shown a preview of their bill under the new model.
                4. Migration completed in waves, with churn and ticket volume checked after each wave.

                ## Notes
                Check existing contracts before setting dates. Annual customers usually move at renewal, not mid-term.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All targeted customers migrated in waves, each after a bill preview and notice period, with churn tracked per wave."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Segment customers by how much their bill would change"
                - "Check existing contract terms before choosing migration dates"
                - "Send each customer a preview of their bill under the new model"
                - "Migrate in waves and check churn and tickets after each wave"
            - name: First bill run after launch
              description: |-
                ## Purpose
                Your first real usage bill run is the moment billing stops being a project and becomes an operation. Treating it as an event, with the pre-invoice review done twice, finance and support on standby and a post-run review within a week, catches problems while they affect one cycle rather than three.

                ## Milestones
                1. Pre-invoice review run twice: two days before and on the day.
                2. Finance, engineering and support named on standby for the three days after invoices go out.
                3. Every billing ticket from the run tagged and counted.
                4. A post-run review held within a week with fixes assigned.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first usage bill run completed with two pre-invoice reviews, tagged tickets and a post-run review held within seven days."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Book the pre-invoice review twice before the first bill run"
                - "Name standby people in finance, engineering and support"
                - "Tag every ticket raised about the first bills"
                - "Hold a post-run review within a week and assign fixes"
            - name: Customer notice for a meter or rate change
              description: |-
                ## Purpose
                Changing how something is metered, or what it costs, partway through a customer relationship needs notice that is early, specific and honest about who pays more. A single notice that states what changes, when, an example bill and what customers can do, sent within contractual notice periods, avoids the long tail of disputes that follows vague announcements.

                ## Milestones
                1. Contractual and published notice periods confirmed for affected customers.
                2. A notice drafted with what changes, the effective date, a worked example and the options.
                3. Customers facing the largest increases contacted personally before the general notice.
                4. Questions from the notice tracked and answered within two working days.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A change notice sent within the required notice period, with personal contact made with every customer facing a large increase."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Confirm the notice period in contracts and published terms"
                - "Ask the agent to draft the change notice from the approved change form"
                - "Call customers facing the largest increases before the notice goes out"
                - "Track questions from the notice and answer each within two working days"
            - name: Usage billing from a spreadsheet before a billing system
              description: |-
                ## Purpose
                An early-stage founder with a handful of usage-priced customers does not need a billing platform yet, but does need bills that are right and repeatable. A monthly routine of saved database queries, a rating sheet and invoices from the accounting tool keeps billing accurate until volume justifies a system, and doubles as the specification for it.

                ## Milestones
                1. Saved queries that pull each customer's usage for the billing period.
                2. A rating sheet that applies allowances and rates to the query output.
                3. Invoices issued from the accounting tool with the usage breakdown attached.
                4. A trigger written down for moving to a billing system, such as 30 accounts or two hours a month spent billing.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly invoices produced from saved queries and a rating sheet, with a written trigger for adopting a billing system."
                cadence: rolling
              tasks:
                - "Write and save the query that pulls each customer's usage"
                - "Build a rating sheet with allowances and rates per plan"
                - "Run the usage queries, rate them and issue invoices @recurring(monthly:28)"
                - "Write the trigger that will mean moving to a billing system"
            - name: Founder-led first committed usage deal
              description: |-
                ## Purpose
                First large customers on usage pricing often ask for a commit, a discount and a cap all at once, and the founder agrees terms that become the template for every deal after. Preparing walk-away points, a standard commit offer and a usage estimate before the call means the first deal sets a precedent you are happy to repeat.

                ## Milestones
                1. The customer's expected usage estimated with them, with a low and a high case.
                2. A commit offer prepared from the standard tiers, with a walk-away discount.
                3. Cap, overage and shortfall terms decided before negotiation.
                4. The agreed terms written up as the template for the next deal.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The first committed usage deal signed within pre-set walk-away points, and its terms saved as a reusable template."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Estimate the customer's low and high monthly usage with their team"
                - "Set the largest discount you will offer and the commit it requires"
                - "Decide cap, overage and shortfall terms before the call"
                - "Write the agreed terms up as the template for the next deal"
            - name: Adding a usage add-on to a seat-based plan
              description: |-
                ## Purpose
                Many products keep seats as the main price and add a usage component for the one resource that drives cost or value, such as storage, automation runs or AI actions. Designing the add-on so it is visible, fair and free for light users lets the team capture heavy usage without a full repricing.

                ## Milestones
                1. The one resource to meter chosen, with its unit cost and usage distribution.
                2. An allowance included with each seat plan and the add-on rate set.
                3. Existing customers above the allowance identified and their bill change modelled.
                4. The add-on shown on the pricing page, in the product and on invoices.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A usage add-on live on top of seat plans, with an included allowance per plan and modelled impact on existing customers."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Pick the single resource that most drives cost or value"
                - "Set the allowance included with each seat plan"
                - "Model the bill change for customers already above the allowance"
                - "Show the add-on in the product, on the pricing page and on invoices"
            - name: Pricing an AI feature by tokens, credits or tasks
              description: |-
                ## Purpose
                AI features carry a real per-use cost from model providers, and customers neither understand nor want to budget in tokens. Choosing whether to charge by credits, completed tasks or a bundled allowance, with a margin buffer for model cost changes, protects margin without exposing customers to the provider's units.

                ## Milestones
                1. Model and infrastructure cost per AI action measured at median and worst case.
                2. Charging units compared: raw tokens, credits, completed tasks and a bundled allowance.
                3. A margin buffer set for model price changes and heavier prompts.
                4. A rule written for repricing if provider costs move by more than an agreed amount.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A charging unit chosen for the AI feature, with per-action cost measured and a written repricing rule for provider cost changes."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Measure model cost per AI action at median and worst case"
                - "Compare charging by tokens, credits, tasks and bundled allowance"
                - "Set a margin buffer for model price changes"
                - "Write the rule for repricing when provider costs move"
            - name: Taking over a usage billing system as a new product manager
              description: |-
                ## Purpose
                Inheriting usage billing means inheriting every past exception: custom rates, manual credits and meters nobody remembers adding. A structured first month, reading the dispute log, shadowing a bill run and listing every exception, lets a new owner make changes without breaking something a large customer depends on.

                ## Milestones
                1. Every custom rate, manual adjustment and contract exception listed.
                2. One bill run shadowed from pre-invoice review to sent invoices.
                3. The dispute log and the last three months of billing tickets read.
                4. The top five risks and quick fixes agreed with the previous owner.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An exceptions list, a shadowed bill run and an agreed top five risks completed within the first month of ownership."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask the previous owner for every custom rate and manual credit"
                - "Shadow one bill run from review to sent invoices"
                - "Read the dispute log and the last three months of billing tickets"
                - "Agree the top five risks with the previous owner before they move on"
            - name: Usage net revenue retention and expansion analysis
              description: |-
                ## Purpose
                Usage products grow mostly from existing customers using more, so net revenue retention is the number investors and boards ask about first. Breaking it into expansion, contraction and churn by cohort, and linking expansion to product behaviour, shows which features actually drive usage growth.

                ## Milestones
                1. Net revenue retention calculated by quarterly cohort for the last two years.
                2. Revenue change split into expansion, contraction and churn.
                3. Product behaviours that come before expansion identified.
                4. A quarterly summary shared with leadership.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Quarterly net revenue retention by cohort, split into expansion, contraction and churn, shared with leadership every quarter."
                cadence: cyclic
              tasks:
                - "Calculate net revenue retention by quarterly cohort"
                - "Split each cohort's change into expansion, contraction and churn"
                - "Look for product behaviours that come before usage expansion"
                - "Share the cohort retention summary with leadership @recurring(quarterly)"
            - name: Outcome-based pricing pilot
              description: |-
                ## Purpose
                Charging per outcome, such as a resolved ticket, a qualified lead or a processed claim, ties price to value more closely than any activity meter, but only if the outcome can be measured and agreed. A pilot with a few willing customers tests whether attribution holds up before it touches the price list.

                ## Milestones
                1. One outcome chosen that both sides can measure from data in the product.
                2. Attribution and dispute rules agreed in writing with pilot customers.
                3. Three to five customers billed by outcome for at least two cycles.
                4. Pilot bills compared with what usage pricing would have charged, and a go or stop decision recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An outcome billing pilot run with three to five customers for two cycles, ending with a recorded go or stop decision."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Choose one outcome that can be measured from product data"
                - "Write attribution and dispute rules for the pilot"
                - "Recruit three to five customers willing to pilot outcome billing"
                - "Compare pilot bills with usage pricing and record a decision"
            - name: Billing accuracy audit trail
              description: |-
                ## Purpose
                Enterprise customers, auditors and acquirers increasingly ask you to prove that a usage bill is correct. Keeping a trail from raw event to aggregated total to invoice line, with agreed retention periods and a change history, turns that request from a scramble into an export.

                ## Milestones
                1. Any invoice line traceable to its aggregated usage and source events.
                2. Retention periods for raw events and aggregates agreed with finance and legal.
                3. Rate card and meter change history kept with effective dates.
                4. A sample audit run once a year on three invoices chosen at random.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three randomly chosen invoices traced back to source events in a yearly sample audit, with retention periods agreed."
                cadence: cyclic
              tasks:
                - "Trace one invoice line back to its raw events and note the gaps"
                - "Agree retention periods for raw events and aggregates"
                - "Keep a dated history of every rate card and meter change"
                - "Audit three random invoices back to source events @recurring(yearly)"
            - name: Cloud marketplace metering and billing
              description: |-
                ## Purpose
                Selling through a cloud provider's marketplace means reporting usage to their metering service and being paid through their bill, with different timing, fees and failure modes from your own billing. Getting the metering reports, reconciliation and private offer terms right lets enterprise buyers spend existing cloud budgets on you without usage going unbilled.

                ## Milestones
                1. Marketplace metering requirements and reporting deadlines documented.
                2. Usage reported to the marketplace from the same meters as direct billing.
                3. Reported usage reconciled monthly against marketplace payouts.
                4. Private offer terms for commits and discounts aligned with direct contracts.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Marketplace usage reported from the same meters as direct billing, and reconciled against payouts every month."
                cadence: rolling
              tasks:
                - "Document the marketplace's metering format and reporting deadlines"
                - "Report marketplace usage from the same meters as direct billing"
                - "Reconcile reported usage against marketplace payouts @recurring(monthly:9)"
                - "Align private offer terms with your standard commit terms"
---

# Usage-Based Billing Design

This area is for founders setting a first usage price and product teams running usage billing at scale, where the customer pays by what they use and every bill has to be right, explainable and roughly predictable. It starts with the foundations (a meter inventory, ownership, unit costs, usage distribution, buyer interviews, the value metric, an event dictionary and the billing platform), then the routines around each bill run, the skills behind tiers, pipelines and revenue treatment, the design decisions on allowances, caps, alerts, commits and credits, the launch and migration events, situations founders and new owners face, and specialist work such as outcome pricing and marketplace billing.

The rhythm follows the bill run: weekly checks on runaway usage and on revenue and margin, monthly meter reconciliation, pre-invoice review, dispute, credit and commit reviews and a forecast for finance, quarterly checks on the value metric, meter changes and unit costs, and a yearly rate card review and audit sample. The Purchase decision, Operational checklist, Metrics log, Reading queue and Product spec templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
