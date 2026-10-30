---
id: software-engineering.cloud-cost-optimisation-finops
name: Cloud Cost Optimisation (FinOps)
description: "A cloud bill you can read and explain: billing data you can query, tags and owners on every pound spent, budgets and anomaly alerts, waste sweeps, right-sizing, commitment decisions and unit costs that teams own."
category: business
version: 1.0.0
tags: [software-engineering, cloud-cost-optimisation-finops, engineer, manager, founder, finops, cloud-billing, right-sizing]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - meeting-notes
    - purchase-decision
    - vendor
    - remediation-plan
  pillars:
    - name: Software Engineering
      emoji: "⚙️"
      description: "Building and running software: architecture and code quality, delivery and release, testing, infrastructure and reliability, incidents, technical debt, developer experience and engineering teams."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Cloud Cost Optimisation (FinOps)
          description: "Understanding and reducing cloud bills through right-sizing, reserved capacity, cleaning up waste and making teams accountable for their spend."
          projects:
            - name: Billing data export to a queryable store
              description: |-
                ## Purpose
                Console cost charts are fine for a glance but useless for answering who spent what and why. Turning on the provider's detailed cost and usage export, landing it in a warehouse or query engine and checking it reconciles with the invoice gives every later project in this area something solid to stand on.

                ## Milestones
                1. The detailed cost and usage export switched on for every billing account, at hourly or daily granularity with resource identifiers included.
                2. The export landing in a query engine or warehouse table that engineers can reach.
                3. Last month's total from the export matching the invoice to within one percent.
                4. A short README stating where the data lives, how fresh it is and who has access.

                ## Notes
                Exports usually only start from the day you switch them on, so do this first even if you will not query it for weeks. Most providers can backfill a limited history on request.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A queryable billing table exists for every billing account and last month's total reconciles with the invoice to within one percent."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every billing account and who holds the payer or billing admin role"
                - "Switch on the detailed cost and usage export with resource IDs included"
                - "Load the export into a warehouse or query engine table"
                - "Reconcile last month's export total against the invoice"
            - name: First line-by-line read of the cloud bill
              description: |-
                ## Purpose
                Most teams cannot say which five services make up most of their bill, so they argue about the wrong things. Spending one sitting with last month's invoice, ranking services by cost and naming what drives each one, gives you a shared picture and usually surfaces a surprise or two worth chasing.

                ## Milestones
                1. The top ten services by cost listed with their share of the monthly total.
                2. The usage type behind each of the top five named, such as instance hours, storage, requests or data transfer.
                3. Three month-on-month changes larger than ten percent explained or flagged as unknown.
                4. A one-page summary shared with the people who approve the bill.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page summary of last month's bill names the top ten services, the usage driving the top five and three explained changes."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Open last month's invoice and the cost explorer side by side"
                - "Rank services by cost and note each one's share of the total"
                - "Break the top five down by usage type and region"
                - "Write a one-page summary and send it to whoever approves the bill"
            - name: Budget alerts on every billing account
              description: |-
                ## Purpose
                One runaway job or a leaked access key can spend a month's budget in a weekend, and without alerts the first anyone hears of it is the invoice. Setting forecast and actual budget alerts on every account, routed to a channel people actually read, is the cheapest safety net in cloud finance and takes under an hour.

                ## Milestones
                1. A monthly budget defined for each billing account or top-level project.
                2. Alerts firing at 50, 80 and 100 percent of actual spend, plus one on forecast spend.
                3. Alerts routed to a team channel and a named person, not a shared mailbox nobody opens.
                4. One test alert confirmed as received.

                ## Notes
                Budget alerts are informational and do not stop spending. If you need a hard stop on a sandbox account, that is a separate automated action and should be tested carefully.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every billing account has actual and forecast budget alerts routed to a named channel and owner, with one test alert received."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Set a monthly budget figure for each billing account from last quarter's average"
                - "Create alerts at 50, 80 and 100 percent of actual and one on forecast"
                - "Route alerts to the team channel and a named owner"
                - "Lower one threshold briefly to confirm an alert arrives"
            - name: Cost allocation tagging standard
              description: |-
                ## Purpose
                Untagged resources are the reason cost reports end with a large line called 'other'. Agreeing a short set of required tags, such as team, service, environment and cost centre, with allowed values written down, is what lets every later report say whose money it is.

                ## Milestones
                1. Four to six required tag keys agreed, with exact spelling and case.
                2. An allowed value list for team and environment published where engineers will find it.
                3. The tags activated as cost allocation tags in the billing console.
                4. Tagged spend measured as a share of the total, as a starting figure.

                ## Notes
                Keep the list short. Teams comply with four tags and ignore twelve. Some costs, such as support fees and shared data transfer, can never be tagged and need a split rule instead.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A published tagging standard lists required keys and allowed values, the keys are active for cost allocation and the tagged share of spend is recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft four to six required tag keys with exact spelling"
                - "Agree allowed values for team and environment with each team lead"
                - "Activate the keys as cost allocation tags in the billing console"
                - "Measure what share of last month's spend carries all required tags"
            - name: Cloud accounts mapped to owning teams
              description: |-
                ## Purpose
                Accounts, subscriptions and projects multiply quietly, and an account with no owner is an account where waste lives forever. Mapping every one to a team and a person, and marking the orphans, gives you allocation that works even where tags are missing.

                ## Milestones
                1. Every account, subscription or project listed with its monthly spend.
                2. An owning team and named contact recorded for each.
                3. Orphaned accounts with no owner listed separately with their spend.
                4. The mapping stored where billing reports can join on it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A mapping table names an owning team and contact for every account, with orphaned accounts and their spend listed separately."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export the list of accounts or projects with last month's spend"
                - "Ask each team lead to claim the accounts they own"
                - "List unclaimed accounts with their spend and last activity date"
                - "Store the mapping as a table the billing queries can join on"
            - name: Unit cost metric for the main product
              description: |-
                ## Purpose
                A rising bill is fine if usage is rising faster, and a flat bill can hide a product getting less efficient. Picking one unit cost, such as cost per thousand requests, per active customer or per order, turns a scary total into a number that says whether engineering is getting more efficient.

                ## Milestones
                1. One business volume chosen that grows with the product and is already counted somewhere reliable.
                2. Three months of cost divided by that volume to give a starting unit cost.
                3. The figure and its method written down so it can be repeated exactly.
                4. The unit cost added to the monthly cost review.

                ## Notes
                Start from the **Metrics log** template. Pick a denominator the business already trusts; a clever metric nobody believes will be ignored.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written unit cost definition exists with three months of history and it appears in the monthly cost review."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List three candidate volumes such as requests, active customers or orders"
                - "Choose the one product and finance already count reliably"
                - "Calculate cost per unit for each of the last three months"
                - "Write the method down and add the figure to the monthly review"
            - name: Spend anomaly detection with sensible thresholds
              description: |-
                ## Purpose
                Budget alerts catch the month going wrong; anomaly detection catches a single service doubling on a Tuesday. Switching on the provider's anomaly monitor per service or per account, with thresholds tuned so it fires a few times a month rather than daily, means a mistake costs days of spend, not weeks.

                ## Milestones
                1. An anomaly monitor active per account or per service.
                2. A threshold set in money and in percentage, so tiny services do not page anyone.
                3. Alerts arriving in the same channel as budget alerts.
                4. Two weeks of alerts reviewed and the thresholds adjusted once.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Anomaly monitors cover every account with money and percentage thresholds, and thresholds have been adjusted once after two weeks of alerts."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Turn on the provider's cost anomaly monitor for each account"
                - "Set a minimum money threshold so small services stay quiet"
                - "Route anomaly alerts to the budget alert channel"
                - "Review the first two weeks of alerts and tune thresholds once"
            - name: FinOps roles and a cost owner in every team
              description: |-
                ## Purpose
                When cost belongs to everyone it belongs to no one, and the platform team ends up chasing teams for savings they never agreed to. Naming a cost owner in each engineering team, a finance partner and one person who runs the practice makes reviews quick and savings stick.

                ## Milestones
                1. A cost owner named in each team that runs cloud workloads.
                2. A finance contact named for budgets, forecasts and invoices.
                3. One person accountable for running the FinOps routines.
                4. A half-page note of what each role does and how much time it takes.

                ## Notes
                For most teams the cost owner role is an hour or two a month, not a job. Say so up front or nobody will volunteer.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every team running cloud workloads has a named cost owner, finance has a named contact and the role note is published."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every team that owns cloud accounts or tagged spend"
                - "Ask each team lead to name a cost owner"
                - "Agree a finance contact for budgets and forecasts"
                - "Publish a half-page note describing each role and its time cost"
            - name: Inventory of commitments, credits and discounts
              description: |-
                ## Purpose
                Reserved instances, savings plans, committed use discounts, promotional credits and negotiated rates all change what a resource really costs, and they often expire without anyone noticing. Listing every commitment with its term, coverage and end date is the starting point for any purchase or renewal decision.

                ## Milestones
                1. Every active commitment listed with type, scope, term, hourly or monthly amount and end date.
                2. Remaining credits listed with balance and expiry.
                3. Any negotiated discount or committed spend agreement noted with its terms.
                4. Commitments ending in the next six months highlighted.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "One table lists every commitment, credit and negotiated discount with its amount and end date, with those ending within six months highlighted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Export active reservations, savings plans and committed use discounts"
                - "List credit balances and their expiry dates"
                - "Find any signed committed spend or discount agreement"
                - "Highlight everything that ends in the next six months"
            - name: Weekly cost anomaly triage
              description: |-
                ## Purpose
                Alerts are only useful if someone looks at them on a fixed day and either explains or fixes each one. A fifteen-minute Monday triage, with every anomaly marked expected, fixed or escalated, keeps small mistakes small and builds a record of what normal looks like.

                ## Milestones
                1. A fixed weekly slot with a named person and a stand-in.
                2. Every anomaly from the past week marked expected, fixed or escalated.
                3. A running log of anomalies with cause and money involved.
                4. Thresholds revisited monthly so false alarms stay rare.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every anomaly alert in the last eight weeks has a recorded outcome of expected, fixed or escalated in the triage log."
                cadence: rolling
              tasks:
                - "Create the anomaly log with columns for date, service, cause, amount and outcome"
                - "Review last week's anomaly and budget alerts and record each outcome @recurring(weekly:mon)"
                - "Tune anomaly thresholds that fired more than twice without cause @recurring(monthly:3)"
                - "Name a stand-in for the triage when the usual owner is away"
            - name: Monthly cost review with team owners
              description: |-
                ## Purpose
                Cost changes are cheapest to understand while the people who caused them still remember why. A thirty-minute monthly review with each team's cost owner, walking through their top movers and agreeing one action, is the meeting that turns reports into savings.

                ## Milestones
                1. A standing monthly review held within ten days of month end.
                2. Each team's top three cost movers explained by its cost owner.
                3. One action per team recorded with an owner and a date.
                4. Last month's actions checked off or carried forward with a reason.

                ## Notes
                Start from the **Meeting notes** template. Keep it to movers and actions; a full walk through the bill loses the room.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each of the last three months has review notes listing every team's top movers and one owned action, with prior actions followed up."
                cadence: rolling
              tasks:
                - "Book a recurring thirty-minute review in the second week of each month"
                - "Prepare each team's top three movers and run the review @recurring(monthly:8)"
                - "Record one action per team with an owner and a date"
                - "Open the meeting by checking last month's actions"
            - name: Idle and orphaned resource sweep
              description: |-
                ## Purpose
                Unattached disks, snapshots from servers deleted years ago, idle load balancers, unused public addresses and stopped instances with large volumes add up to a steady few percent of most bills. A monthly sweep with a clear 'tag, notify, then remove' rule removes them without anyone losing something they needed.

                ## Milestones
                1. A saved query or report that lists idle and orphaned resources by type and cost.
                2. A written rule for how long a flagged resource waits before removal and who is told.
                3. Each sweep's findings and savings recorded.
                4. Owners notified before anything is deleted, with a snapshot taken where data might matter.

                ## Notes
                Never delete straight from the report. Tag, notify the owner, wait the agreed period, then remove. One accidental deletion of a database volume will end the programme.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly sweep record shows idle resources found, owners notified, items removed and money saved for at least three consecutive months."
                cadence: rolling
              tasks:
                - "Build a saved report of unattached disks, old snapshots, idle load balancers and unused addresses"
                - "Write the tag, notify and wait rule and share it with team leads"
                - "Run the idle resource report, notify owners and remove expired items @recurring(monthly:15)"
                - "Record each sweep's savings in the cost log"
            - name: Quarterly compute right-sizing review
              description: |-
                ## Purpose
                Instances are usually sized for a launch-day guess and never revisited, so many run at under twenty percent CPU for years. A quarterly review of utilisation against size, with changes made through the normal deployment path, recovers money steadily without risking performance.

                ## Milestones
                1. A list of instances and node groups with average and peak CPU and memory over thirty days.
                2. Candidates chosen where peak usage stays well below capacity.
                3. Changes made through code and deployment, not the console, with a rollback plan.
                4. Savings from each quarter's changes recorded.

                ## Notes
                Look at peak and memory, not just average CPU. A batch job that idles all day and spikes at midnight needs its size.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter has a right-sizing record listing candidates, changes made and monthly savings, with no performance incident traced to a change."
                cadence: cyclic
              tasks:
                - "Pull thirty days of CPU and memory utilisation for every instance and node group"
                - "Run the right-sizing review and raise changes with each owning team @recurring(quarterly)"
                - "Make each approved change through the normal deployment path"
                - "Record before and after cost for every change"
            - name: Commitment coverage and utilisation tracking
              description: |-
                ## Purpose
                Commitments save money only if they are used. Tracking coverage (how much eligible usage is under commitment) and utilisation (how much of what you bought you actually use) each month tells you whether to buy more, change scope or let something lapse.

                ## Milestones
                1. Coverage and utilisation figures for each commitment type on one page.
                2. Target ranges agreed with finance for both measures.
                3. Underused commitments investigated with a cause recorded.
                4. Three months of figures kept so trends are visible.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly coverage and utilisation are recorded against agreed target ranges, with every commitment under target given a recorded cause."
                cadence: rolling
              tasks:
                - "Find the coverage and utilisation reports in the billing console"
                - "Agree target ranges for coverage and utilisation with finance"
                - "Record coverage and utilisation and flag anything under target @recurring(monthly:5)"
                - "Investigate each underused commitment and note why"
            - name: Monthly showback reports to engineering teams
              description: |-
                ## Purpose
                Engineers make cost decisions every day but rarely see what their own service costs. A short monthly report per team, showing spend by service and environment, the change since last month and the unit cost, gives them the feedback loop the rest of the business takes for granted.

                ## Milestones
                1. A report template showing spend by service and environment for one team.
                2. The report generated automatically from the billing table.
                3. Every team receiving its report in the first two weeks of the month.
                4. Shared costs split by a written rule and labelled as such.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every team has received an automated showback report for three consecutive months, with shared costs split by a written rule."
                cadence: rolling
              tasks:
                - "Draft a one-page showback layout with one team's real numbers"
                - "Write the rule for splitting shared costs such as support and networking"
                - "Automate the report from the billing table"
                - "Check every team received its showback report and answer questions @recurring(monthly:10)"
            - name: Off-hours schedules for non-production environments
              description: |-
                ## Purpose
                Development, test and staging environments are often used for fifty hours a week and paid for all 168. Scheduling them to stop overnight and at weekends, with an easy override for late work, can cut their cost by more than half without touching production.

                ## Milestones
                1. Every non-production environment listed with its current always-on cost.
                2. A schedule agreed with each team, including time zones and an override.
                3. Stop and start automation running for at least two environments.
                4. A weekly check that schedules ran and overrides were reset.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least two non-production environments stop overnight and at weekends on a schedule, with weekly checks logged and monthly savings recorded."
                cadence: rolling
              tasks:
                - "List non-production environments with their monthly always-on cost"
                - "Agree working hours and an override method with each team"
                - "Set up the stop and start schedule for the first two environments"
                - "Check last week's schedules ran and reset any forgotten overrides @recurring(weekly:fri)"
            - name: Tag compliance scorecard by team
              description: |-
                ## Purpose
                Tagging standards decay the moment people stop looking at them. A monthly scorecard showing each team's share of correctly tagged spend, with the worst untagged resources named, keeps allocation accurate without becoming a police operation.

                ## Milestones
                1. A query that measures tagged spend per team and per required key.
                2. A scorecard published monthly with each team's percentage.
                3. The ten most expensive untagged resources listed with likely owners.
                4. A target, such as 95 percent of spend tagged, agreed and tracked.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly scorecard shows tagged spend per team against an agreed target, with the ten largest untagged resources named each month."
                cadence: rolling
              tasks:
                - "Write the query that measures tagged spend per team and key"
                - "Agree a tagged spend target with the cost owners"
                - "Publish the tag scorecard and the ten largest untagged resources @recurring(monthly:12)"
                - "Add a tag check to the provisioning pipeline for new resources"
            - name: Quarterly cloud spend forecast and reforecast
              description: |-
                ## Purpose
                Finance needs a number for next quarter, and a straight-line guess will be wrong the moment a big launch or migration lands. A quarterly forecast built from trend plus known changes, compared with what actually happened, makes the cloud line in the budget something finance can trust.

                ## Milestones
                1. A forecast for the next quarter by team or product, with trend and known changes shown separately.
                2. Known changes listed: launches, migrations, commitment expiries and price changes.
                3. Last quarter's forecast compared with actuals and the gap explained.
                4. The forecast agreed with finance and stored with its assumptions.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Each quarter has a written forecast with assumptions, agreed with finance, and the previous forecast's gap to actuals is explained."
                cadence: cyclic
              tasks:
                - "Ask each cost owner for launches or migrations planned next quarter"
                - "Build next quarter's forecast and compare last quarter's with actuals @recurring(quarterly)"
                - "Write the assumptions beside the numbers"
                - "Agree the forecast with the finance contact"
            - name: Cost estimates in design and pull request review
              description: |-
                ## Purpose
                The cheapest time to avoid a cost is before the resource exists. Adding a cost estimate to design documents and an automated cost difference to infrastructure pull requests means a reviewer sees 'this adds about 900 a month' before approving, not after the bill.

                ## Milestones
                1. A cost section added to the design document template.
                2. An automated cost difference comment on infrastructure pull requests.
                3. A threshold above which a cost owner must approve.
                4. A monthly look at the largest approved cost increases.

                ## Notes
                Estimates from code will miss usage-based charges like data transfer and requests. Say so in the comment so nobody treats the number as exact.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Infrastructure pull requests show an automated cost difference, changes above an agreed threshold need cost owner approval and the largest increases are reviewed monthly."
                cadence: rolling
              tasks:
                - "Add an expected monthly cost section to the design document template"
                - "Set up an automated cost difference comment on infrastructure pull requests"
                - "Agree the monthly increase that needs cost owner approval"
                - "Review the five largest approved cost increases from the past month @recurring(monthly:22)"
            - name: Pricing models of your five biggest services
              description: |-
                ## Purpose
                You cannot reduce a cost whose shape you do not understand. Reading the pricing page for each of your five largest services, and noting every dimension it charges on, often shows that the expensive part is requests, IOPS or transfer rather than the thing everyone assumed.

                ## Milestones
                1. Every charging dimension listed for each of the five largest services.
                2. Last month's cost for each service split across those dimensions.
                3. The dimension driving most cost named for each service.
                4. One question per service that would change how you build, written down.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note for each of the five largest services lists its charging dimensions, last month's split across them and the main driver."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Open the pricing page for your single most expensive service"
                - "List every dimension it charges on"
                - "Split last month's cost for that service across those dimensions"
                - "Repeat for the next four services and note the main driver of each"
            - name: FinOps framework phases and capabilities
              description: |-
                ## Purpose
                The FinOps Foundation's framework describes a cycle of inform, optimise and operate, and a set of capabilities from allocation to forecasting. Learning it gives managers and founders a shared vocabulary and a way to judge which capabilities matter now and which can wait.

                ## Milestones
                1. The three phases and their purpose summarised in your own words.
                2. The framework's capabilities listed with a crawl, walk or run rating for your organisation.
                3. Three capabilities chosen as the focus for the next two quarters.
                4. The summary shared with the cost owners.

                ## Notes
                Rate honestly. Most organisations are at crawl for most capabilities, and that is fine; the point is to choose where to move next.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written self-assessment rates each framework capability crawl, walk or run and names three to focus on next."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read the framework overview on the FinOps Foundation website"
                - "Summarise the inform, optimise and operate phases in a paragraph each"
                - "Rate each capability crawl, walk or run for your organisation"
                - "Choose three capabilities to work on and share the note"
            - name: Data transfer and egress charges explained
              description: |-
                ## Purpose
                Data transfer is the line on the bill people understand least and the one that grows silently with architecture choices. Learning which flows are charged (internet egress, cross-region, cross-zone, through managed gateways) and mapping your own biggest flows explains surprises and points at fixes.

                ## Milestones
                1. The transfer types your provider charges for listed with their relative rates.
                2. Last month's transfer cost split by type.
                3. Your three largest transfer flows traced to the services that cause them.
                4. A sketch of where data crosses zones, regions or gateways.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note splits last month's data transfer cost by type and traces the three largest flows to named services."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Filter last month's bill to data transfer usage types"
                - "Split transfer cost into internet, cross-region, cross-zone and gateway"
                - "Trace the three largest flows to the services that produce them"
                - "Sketch the zone, region and gateway crossings for those flows"
            - name: Storage classes and retrieval costs
              description: |-
                ## Purpose
                Object storage looks cheap per gigabyte until you add requests, retrieval fees and minimum storage durations. Learning how each storage class prices access, and which of your data is actually read, prevents the classic mistake of moving hot data to an archive tier and paying more.

                ## Milestones
                1. Each storage class listed with storage price, request price, retrieval fee and minimum duration.
                2. Access patterns checked for your ten largest buckets or containers.
                3. Each of those ten marked hot, warm, cold or archive.
                4. Any data that is never read and might not need keeping flagged for its owner.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A table lists your ten largest buckets with access pattern and a hot, warm, cold or archive classification."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List storage classes with their storage, request and retrieval prices"
                - "Turn on storage access analytics for the ten largest buckets"
                - "Classify each bucket hot, warm, cold or archive from its access data"
                - "Flag never-read data to its owner with a keep or delete question"
            - name: Spot and preemptible capacity basics
              description: |-
                ## Purpose
                Spare capacity sold at a deep discount can be reclaimed at short notice, which suits some workloads perfectly and breaks others. Learning how interruption notices work, which instance families are interrupted least and what makes a workload safe to run this way is the groundwork before moving anything.

                ## Milestones
                1. The interruption notice and reclaim behaviour for your provider written down.
                2. Interruption history checked for the instance families you use.
                3. A checklist for spot-safe workloads: stateless, retryable, checkpointed or easy to reschedule.
                4. Your workloads sorted into safe, possible and unsuitable.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written checklist for spot-safe workloads exists and every major workload is sorted into safe, possible or unsuitable."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read your provider's documentation on interruption notices"
                - "Check interruption rates for the instance families you use"
                - "Write a five-point checklist for spot-safe workloads"
                - "Sort your workloads into safe, possible and unsuitable"
            - name: Querying billing data with SQL
              description: |-
                ## Purpose
                Most cost questions take one query once you know the billing table's columns, and days of clicking if you do not. Learning the main fields (usage type, line item type, resource ID, tags, amortised cost) and writing a small library of saved queries makes you the person who can answer 'what happened on Thursday' in five minutes.

                ## Milestones
                1. The billing table's key columns documented with one sentence each.
                2. Saved queries for cost by service, by tag, by account and by day.
                3. A query that finds the resources behind a cost spike on a given date.
                4. The query library shared in the team repository.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A shared library holds at least six saved billing queries, including cost by tag and a spike investigation query, with column notes."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read the column reference for your provider's cost export"
                - "Write a query for cost by service and day for last month"
                - "Add queries for cost by tag, by account and by resource"
                - "Ask the agent to review the queries for double counting and commit them"
            - name: Kubernetes cost allocation by namespace
              description: |-
                ## Purpose
                Shared clusters show up on the bill as a pile of nodes, which hides which team's workloads are expensive. Allocating node cost to namespaces and workloads by requested CPU and memory, and showing idle cluster capacity as its own line, makes container spend as accountable as everything else.

                ## Milestones
                1. A cost allocation tool or method running against each production cluster.
                2. Cost per namespace and per workload reported by requests and by usage.
                3. Idle capacity shown as a separate line with the cluster owner responsible.
                4. Namespaces mapped to the same team names used in tags.

                ## Notes
                Allocating by requests rewards teams that set honest requests. Show both requests and actual usage so over-requesting is visible.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each production cluster reports cost per namespace by requests and usage, with idle capacity shown separately and namespaces mapped to team names."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose an open source or provider tool for cluster cost allocation"
                - "Install it on one production cluster and check totals against the bill"
                - "Map namespaces to the team names used in the tagging standard"
                - "Add namespace cost and idle capacity to the showback reports"
            - name: Savings plan or reserved capacity purchase
              description: |-
                ## Purpose
                Committing to one or three years of usage can cut compute cost substantially, but buying against a usage level you later drop below turns a saving into a loss. Deciding the commitment type, term, payment option and amount from steady baseline usage, with finance in the room, is one of the highest value decisions in this area.

                ## Milestones
                1. Steady baseline usage measured over at least the last ninety days.
                2. Options compared: flexible versus specific commitments, one versus three years, payment upfront or monthly.
                3. A purchase amount chosen that covers the baseline and leaves headroom for change.
                4. The decision and its reasoning recorded and approved by finance.

                ## Notes
                Start from the **Purchase decision** template. Buy in tranches over several months rather than all at once, so a forecast error costs less.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision states the commitment type, term, payment option and amount, based on ninety days of baseline usage and approved by finance."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pull ninety days of hourly compute usage and find the steady baseline"
                - "Compare flexible and specific commitments for one and three year terms"
                - "Draft a tranche plan that covers the baseline with headroom"
                - "Take the recommendation to finance for approval and record it"
            - name: Lifecycle rules on the ten largest buckets
              description: |-
                ## Purpose
                Once you know which data is hot and which is cold, lifecycle rules do the moving and deleting for you. Applying them to the ten largest buckets, with old versions and incomplete uploads expired, usually gives the biggest storage saving available for the least engineering time.

                ## Milestones
                1. A lifecycle rule designed for each of the ten largest buckets, based on its access pattern.
                2. Rules for expiring old object versions and incomplete multipart uploads.
                3. Owners' agreement recorded for any rule that deletes data.
                4. Rules applied through code and the monthly storage cost compared before and after.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The ten largest buckets have lifecycle rules applied through code, with owner sign-off for deletions and a before and after cost comparison."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft a lifecycle rule for each of the ten largest buckets"
                - "Add expiry for old versions and incomplete multipart uploads"
                - "Get written owner agreement for every rule that deletes data"
                - "Apply the rules through code and compare storage cost a month later"
            - name: Moving a batch workload to spot capacity
              description: |-
                ## Purpose
                Batch processing, continuous integration runners and rendering jobs are the classic first candidates for spot or preemptible capacity. Moving one well-understood workload, with interruption handling tested on purpose, proves the saving and gives the team a pattern to copy.

                ## Milestones
                1. One workload chosen from the spot-safe list with its current monthly cost.
                2. Interruption handling in place: checkpointing, retries or rescheduling.
                3. A diversified set of instance types configured to reduce reclaim risk.
                4. Two weeks of running on spot with interruptions and savings recorded.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "One batch workload runs on spot capacity for two weeks with interruption handling tested and the saving against on-demand recorded."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Pick one batch workload from the spot-safe list and note its cost"
                - "Add checkpointing or retries so an interruption loses little work"
                - "Configure several instance types to spread reclaim risk"
                - "Simulate an interruption and confirm the job recovers"
            - name: Log and metrics ingestion cost reduction
              description: |-
                ## Purpose
                Observability bills grow with every debug log line left on and every high-cardinality label added, and in some companies they rival compute. Finding the noisiest sources, cutting retention where nobody looks and sampling verbose logs can halve the bill without losing what on-call engineers rely on.

                ## Milestones
                1. Ingestion volume and cost broken down by source, service and log level.
                2. The ten noisiest sources reviewed with their owners.
                3. Retention periods set per data type rather than one default for everything.
                4. A monthly ingestion check that catches new noisy sources early.

                ## Notes
                Ask on-call engineers which logs they actually used in the last three incidents before cutting anything.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Log and metrics ingestion cost is broken down by source, the ten noisiest have been reduced or justified and retention is set per data type."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Break log and metrics ingestion down by service and log level"
                - "Review the ten noisiest sources with their owning teams"
                - "Set retention per data type with on-call engineers' agreement"
                - "Check ingestion volume for new noisy sources @recurring(monthly:18)"
            - name: Cross-zone and NAT gateway traffic reduction
              description: |-
                ## Purpose
                Traffic between availability zones and through managed NAT gateways is charged per gigabyte, and chatty services can run up large bills without anyone noticing. Routing traffic within zones where safe and using private endpoints for provider services often removes a large slice of the data transfer line.

                ## Milestones
                1. NAT gateway and cross-zone charges measured for each account.
                2. The services producing the largest flows identified.
                3. Private endpoints added for the provider services those flows reach.
                4. Zone-aware routing enabled where it does not harm availability, and the change in cost measured.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "NAT and cross-zone charges are measured before and after, with private endpoints or zone-aware routing in place for the largest flows."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Measure NAT gateway and cross-zone transfer cost per account"
                - "Use flow logs to find the services behind the largest flows"
                - "Add private endpoints for storage and other provider services they call"
                - "Enable zone-aware routing where availability allows and remeasure"
            - name: Managed database cost review
              description: |-
                ## Purpose
                Managed databases are often the second largest line after compute, with idle read replicas, over-provisioned storage throughput and forgotten development copies. Reviewing every instance against its actual load and data size, with the database owners, finds savings that are safe because they are discussed first.

                ## Milestones
                1. Every managed database listed with size, storage type, replicas and monthly cost.
                2. CPU, connections and storage throughput compared with what is provisioned.
                3. Idle replicas and unused development copies flagged with owners.
                4. Agreed changes scheduled in maintenance windows.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every managed database has a recorded decision of keep, resize, remove replica or delete, agreed with its owner."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every managed database with size, storage type, replicas and cost"
                - "Compare thirty days of load with what each one is provisioned for"
                - "Flag idle replicas and development copies to their owners"
                - "Schedule agreed changes in the next maintenance window"
            - name: Processor architecture switch for compute savings
              description: |-
                ## Purpose
                Instances on newer or ARM-based processors often cost less for the same work, but only if your software and its dependencies build and perform well on them. Testing one service on the alternative architecture and measuring cost per request answers the question with data rather than vendor claims.

                ## Milestones
                1. One service chosen with its dependencies checked for the target architecture.
                2. Multi-architecture builds working in the pipeline.
                3. A benchmark or canary comparing latency and cost per request.
                4. A decision to switch, wait or rule out, recorded with the numbers.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision for one service compares cost per request and latency across processor architectures from a real benchmark or canary."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Pick one stateless service and check its dependencies support the target architecture"
                - "Add a multi-architecture build to its pipeline"
                - "Run a canary on the new architecture and compare cost per request"
                - "Record the decision to switch, wait or rule out"
            - name: Multi-cloud billing normalised to one schema
              description: |-
                ## Purpose
                Teams running on two providers, or a provider plus a few SaaS platforms, end up with reports that cannot be added together. Converting each billing source to a common schema such as the FinOps Open Cost and Usage Specification lets one report and one set of queries cover all spend.

                ## Milestones
                1. Every billing source listed with its export format and refresh frequency.
                2. A mapping from each source's columns to the common schema.
                3. All sources landing in one normalised table.
                4. Totals per source reconciled with each invoice.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One normalised billing table covers every provider and major SaaS source, with each source reconciled to its invoice."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List every billing source with its export format"
                - "Check which providers already offer an export in the common schema"
                - "Map the remaining sources' columns to the common schema"
                - "Load all sources into one table and reconcile each to its invoice"
            - name: Commitment expiry and renewal calendar
              description: |-
                ## Purpose
                When a reservation or savings plan expires, the same usage quietly goes back to on-demand prices and the bill jumps. A calendar of every expiry, with a review ninety days ahead, gives time to decide whether to renew, change type or let it go.

                ## Milestones
                1. Every commitment's end date on a shared calendar.
                2. A review reminder ninety days before each expiry.
                3. A renew, change or lapse decision recorded for each expiry so far.
                4. No commitment lapsing without a recorded decision.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every commitment expiry is on a shared calendar with a ninety-day review, and each past expiry has a recorded renewal decision."
                cadence: rolling
              tasks:
                - "Add every commitment end date to a shared calendar"
                - "Set a review reminder ninety days before each expiry"
                - "Check for commitments expiring in the next ninety days and decide each one @recurring(monthly:26)"
                - "Record each renew, change or lapse decision with its reasoning"
            - name: Committed spend or enterprise discount negotiation
              description: |-
                ## Purpose
                Once annual spend reaches a level the provider cares about, a committed spend agreement can bring discounts, credits and support terms worth more than most engineering savings. Preparing usage history, growth forecasts and alternatives before the first call is what separates a good agreement from an expensive promise.

                ## Milestones
                1. Twelve months of spend and a two-year forecast agreed with finance.
                2. Your asks written down: discount level, credits, support, flexibility on services and term.
                3. A walk-away position and the risk of under-consumption understood.
                4. The agreement reviewed by finance and legal before signing.

                ## Notes
                Start from the **Vendor** template. Committing to more than your forecast to win a bigger discount is the most common mistake; under-consumption usually means paying the shortfall anyway.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A signed or declined committed spend agreement, with forecast, asks and walk-away position recorded and finance and legal review done."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Pull twelve months of spend by service for the negotiation pack"
                - "Agree a two-year forecast and a safe commitment level with finance"
                - "Write the list of asks and the walk-away position"
                - "Send the draft agreement to finance and legal for review"
            - name: Pre-launch cost estimate for a new product
              description: |-
                ## Purpose
                New products are usually costed as zero until the first bill arrives. Estimating monthly cost at three usage levels before launch, and agreeing a budget alert for the new account, lets the team spot a design that will not scale financially while it is still cheap to change.

                ## Milestones
                1. The architecture's billable components listed.
                2. Monthly cost estimated at launch, expected and ten times expected usage.
                3. The cost per unit at each level compared with the product's planned price or margin.
                4. Budget and anomaly alerts set for the new account before launch day.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A written estimate gives monthly cost and unit cost at three usage levels, and alerts are active on the new account before launch."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every billable component in the new product's design"
                - "Estimate monthly cost at launch, expected and ten times expected usage"
                - "Compare unit cost at each level with the planned price or margin"
                - "Set budget and anomaly alerts on the new account before launch"
            - name: Annual cloud budget submission
              description: |-
                ## Purpose
                Annual budgets are where the cloud line gets fixed for a year, so a weak submission means either a crisis in month seven or money sitting idle. Building it from unit cost, planned growth and known projects, rather than last year plus a percentage, gives finance a number with reasons behind it.

                ## Milestones
                1. This year's actuals by team and product, with unit cost trend.
                2. Growth assumptions agreed with product and sales owners.
                3. Known projects, migrations and commitment changes priced in.
                4. The budget submitted with assumptions and a range, not a single figure.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The annual cloud budget is submitted on time with actuals, unit cost trend, growth assumptions, known projects and a range."
                cadence: cyclic
              tasks:
                - "Ask finance for the budget calendar and submission format"
                - "Gather this year's actuals by team and the unit cost trend"
                - "Prepare the cloud budget with growth assumptions and known projects @recurring(yearly)"
                - "Submit the budget as a range with the assumptions attached"
            - name: Startup credit expiry plan
              description: |-
                ## Purpose
                Cloud credits from accelerators and startup programmes hide the true bill, and when they run out or expire many founders discover their burn has jumped overnight. Knowing the real monthly cost now, and the date credits end, leaves months to bring spend into line instead of days.

                ## Milestones
                1. Credit balance, monthly burn of credits and expiry date written down.
                2. The real monthly cost without credits calculated.
                3. The month credits run out marked in the company's cash plan.
                4. Savings work planned so the post-credit bill fits the budget.

                ## Notes
                Credits often exclude some services and marketplace purchases, so part of your bill may already be cash. Check the programme terms.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "The real monthly cost without credits and the credit end month are in the cash plan, with savings planned to meet the post-credit budget."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the credit balance, expiry date and excluded services"
                - "Calculate the monthly bill with credits removed"
                - "Mark the month credits run out in the cash plan"
                - "Choose the savings that bring the post-credit bill within budget"
            - name: Founder's cloud bill on a seed budget
              description: |-
                ## Purpose
                Early-stage founders cannot afford a FinOps practice, but they also cannot afford a surprise invoice that eats a month of runway. A light routine of one budget, one alert, a monthly glance at the top five services and a rule against always-on test environments is enough until the bill is big enough to need more.

                ## Milestones
                1. One monthly cloud budget that fits the company's runway plan.
                2. Alerts going to the founder's phone, not just email.
                3. A monthly check comparing the bill with the runway plan.
                4. A written point at which the company will invest in deeper cost work.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly cloud budget is tied to the runway plan, alerts reach the founder's phone and three monthly checks are recorded."
                cadence: rolling
              tasks:
                - "Set a monthly cloud budget from the runway plan"
                - "Route budget alerts to your phone"
                - "Compare the cloud bill with the runway plan and note the top five services @recurring(monthly:2)"
                - "Write down the monthly spend at which you will hire or assign cost work"
            - name: Cloud cost briefing for finance and leadership
              description: |-
                ## Purpose
                Engineering managers are asked about the cloud bill by people who think in budgets and margins, not instances. A short quarterly briefing that shows spend against budget, unit cost, savings delivered and the next big change builds trust and stops surprise cost-cutting orders.

                ## Milestones
                1. A one-page briefing format agreed with the finance lead.
                2. Spend against budget, unit cost trend and savings delivered on one page.
                3. The next quarter's known cost changes named.
                4. Questions from each briefing answered in writing within a week.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A one-page cost briefing with spend against budget, unit cost and savings is delivered each quarter, with follow-up questions answered in writing."
                cadence: cyclic
              tasks:
                - "Ask the finance lead what they need from a cloud cost update"
                - "Draft a one-page briefing layout with last quarter's numbers"
                - "Deliver the quarterly cost briefing to finance and leadership @recurring(quarterly)"
                - "Answer every briefing question in writing within a week"
            - name: Cost ownership of your own service
              description: |-
                ## Purpose
                Individual engineers rarely know what their service costs, so they cannot weigh a cache, a bigger instance or a chattier design in money. Finding your service's monthly cost, its main drivers and its cost per request turns cost into one more thing you can reason about in design and review.

                ## Milestones
                1. Your service's monthly cost found through tags, accounts or namespaces.
                2. The three biggest cost drivers named.
                3. A cost per request or per job worked out.
                4. One change proposed that would reduce cost without hurting reliability.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A note for your service states monthly cost, the three biggest drivers, cost per request and one proposed saving."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find your service's monthly cost through tags or namespace reports"
                - "Name the three biggest cost drivers for your service"
                - "Divide monthly cost by requests or jobs handled"
                - "Propose one saving to your team in the next planning meeting"
            - name: Cloud cost due diligence before fundraising
              description: |-
                ## Purpose
                Investors and acquirers look at gross margin, and cloud cost is often the largest part of cost of revenue for a software company. Preparing a clear split of production versus development spend, cost per customer and the trend before diligence starts avoids awkward questions and shows the business is run with care.

                ## Milestones
                1. Twelve months of cloud spend split into cost of revenue and research and development.
                2. Cost per customer or per unit shown with its trend.
                3. Commitments and contracts listed with obligations and end dates.
                4. A short narrative explaining spikes and the savings plan, reviewed by your finance adviser.

                ## Notes
                The split between cost of revenue and development is an accounting choice; agree the method with your accountant or finance adviser and apply it consistently.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A diligence pack splits twelve months of cloud spend into cost of revenue and development, with unit cost trend, commitments and an adviser-reviewed narrative."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Agree with your finance adviser how to split production and development spend"
                - "Split twelve months of spend using that method"
                - "Chart cost per customer or unit over the same period"
                - "Ask the agent to draft the narrative on spikes and savings for review"
            - name: Inherited cloud estate cost clean-up
              description: |-
                ## Purpose
                A new manager or a team taking over after an acquisition or reorganisation often inherits accounts, clusters and data nobody can explain. A structured clean-up, from ownership discovery to staged removal, recovers money and reduces risk without breaking something a customer depends on.

                ## Milestones
                1. Every inherited account and its largest resources listed with spend.
                2. Owners or users found for each, with unknowns marked.
                3. A staged plan: tag, stop, snapshot, wait, then delete.
                4. Savings and anything restored after a complaint recorded.

                ## Notes
                Start from the **Remediation plan** template. Stopping before deleting is the cheapest insurance you will ever buy.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A remediation plan covers every inherited account, unknown resources have been stopped before deletion and savings are recorded."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List inherited accounts and their ten largest resources by cost"
                - "Ask previous owners and the support team who uses each one"
                - "Stop unknown resources and snapshot their data before any deletion"
                - "Delete after the agreed wait and record the savings"
            - name: Six-week cost reduction sprint
              description: |-
                ## Purpose
                When leadership asks for a fixed cut in the cloud bill, usually in a downturn or before a raise, scattered efforts rarely hit the number. A time-boxed sprint with a target, a ranked list of savings by money and risk, and weekly progress gets the cut without a rushed change taking production down.

                ## Milestones
                1. A target saving agreed, in money per month, with a date.
                2. Candidate savings ranked by monthly value, effort and risk.
                3. Owners and weekly progress for each saving in flight.
                4. Achieved savings measured in the bill, not just estimated.

                ## Notes
                Commitment purchases and waste removal are the fastest wins; architecture changes rarely land inside six weeks.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A ranked savings list with owners exists and the bill shows the measured monthly saving against the agreed target by the sprint's end."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Agree the monthly saving target and end date with leadership"
                - "List candidate savings with monthly value, effort and risk"
                - "Assign an owner to each of the top ten savings"
                - "Measure achieved savings from the bill at the end of the sprint"
            - name: Cloud cost of goods sold model
              description: |-
                ## Purpose
                For a software business, cloud spend that serves customers is part of cost of goods sold and directly sets gross margin. Building a model that separates customer-serving cost from development and shared overhead, and tracks it against revenue, lets leadership see how margin changes as the product grows.

                ## Milestones
                1. A written rule for which accounts, tags and services count as cost of goods sold.
                2. Monthly cost of goods sold from the cloud calculated for the last twelve months.
                3. Cloud cost as a percentage of revenue tracked monthly.
                4. The model agreed with finance and used in the monthly close.

                ## Notes
                Agree the classification with your finance team or accountant; this affects reported margin and should not be changed casually.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A model agreed with finance calculates monthly cloud cost of goods sold and cloud cost as a percentage of revenue for twelve months."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Draft the rule for which spend counts as cost of goods sold"
                - "Agree the rule with finance before calculating anything"
                - "Calculate twelve months of cloud cost of goods sold"
                - "Track cloud cost as a percentage of revenue in the monthly close"
            - name: Per-customer cost attribution for multi-tenant systems
              description: |-
                ## Purpose
                In a shared multi-tenant platform, a handful of customers can drive a large share of cost, and pricing that ignores this loses money on exactly the biggest accounts. Attributing cost to customers from usage telemetry tells sales and product which plans and customers are profitable.

                ## Milestones
                1. Usage signals per tenant chosen, such as requests, storage, compute seconds or jobs.
                2. Shared cost allocated to tenants by a written rule.
                3. Cost per customer reported monthly beside revenue per customer.
                4. The ten least profitable customers reviewed with product or sales.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A monthly report shows cost and revenue per customer from tenant usage signals, and the ten least profitable accounts have been reviewed."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Choose the usage signals that best track each tenant's cost"
                - "Add tenant identifiers to the telemetry that carries those signals"
                - "Write the allocation rule for shared cost"
                - "Report cost and revenue per customer and flag loss-makers @recurring(monthly:28)"
            - name: Automated waste removal policies
              description: |-
                ## Purpose
                Manual sweeps stop working once there are dozens of accounts and hundreds of engineers. Policy rules that automatically tag, stop or remove clear waste, such as unattached disks after a notice period or untagged sandbox instances, with an audit log and exemptions, keep the estate clean without a person chasing it.

                ## Milestones
                1. Three to five policies written with conditions, actions and notice periods.
                2. Policies running in report-only mode for two weeks before acting.
                3. An exemption tag and an audit log of every automated action.
                4. A weekly review of actions taken and any complaints.

                ## Notes
                Run every new policy in report-only mode first. A policy that deletes the wrong thing once loses the trust of every team.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least three waste removal policies run with notice periods, exemptions and an audit log, after two weeks in report-only mode."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write three policies with conditions, actions and notice periods"
                - "Run them in report-only mode for two weeks"
                - "Add an exemption tag and an audit log of every action"
                - "Review the automated actions log and any complaints @recurring(weekly:wed)"
            - name: GPU and accelerator spend governance
              description: |-
                ## Purpose
                GPU instances can cost many times a standard server per hour, and an idle training node left running over a weekend can cost more than a month of the rest of the estate. Tracking accelerator utilisation, reserving or scheduling capacity deliberately and shutting idle nodes quickly is specialist FinOps for teams doing machine learning work.

                ## Milestones
                1. Every GPU and accelerator instance listed with owner, purpose and hourly cost.
                2. Utilisation measured from the accelerator itself, not just the host CPU.
                3. An idle rule that alerts or stops nodes below a utilisation threshold.
                4. A decision on reserved, on-demand or spot capacity for training and serving.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All accelerator instances have owners and utilisation tracking, an idle rule is active and a capacity purchasing decision is recorded."
                cadence: rolling
              tasks:
                - "List every GPU and accelerator instance with owner and hourly cost"
                - "Collect utilisation from the accelerator metrics, not host CPU"
                - "Set an idle alert or stop rule below an agreed utilisation level"
                - "Review accelerator utilisation and idle hours by team @recurring(weekly:thu)"
            - name: FinOps maturity review and next-year plan
              description: |-
                ## Purpose
                After a year of routines, it is worth stepping back to see which practices stuck, which faded and what the next stage looks like. A yearly maturity review against the capabilities you rated at the start, with savings delivered and unit cost trend, sets a short plan for the year ahead.

                ## Milestones
                1. Each capability re-rated crawl, walk or run against last year's rating.
                2. Total savings delivered and unit cost change over the year summarised.
                3. Routines that lapsed named with the reason.
                4. Three priorities for the coming year agreed with the cost owners and finance.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A yearly review re-rates every capability, reports savings and unit cost change and records three agreed priorities for the next year."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Re-rate each FinOps capability against last year's self-assessment"
                - "Total the savings delivered and the change in unit cost"
                - "Name routines that lapsed and why"
                - "Agree three priorities for next year with cost owners and finance"
---

# Cloud Cost Optimisation (FinOps)

Cloud cost optimisation, usually called FinOps, is the habit of treating the cloud bill as engineering data: knowing what each team and product costs, removing what nobody uses and paying less for what you keep. These projects start with foundations (billing data you can query, a first read of the bill, budget alerts, tags, owners, a unit cost and an inventory of commitments), move into the operating routines that keep spend visible, then the skills of reading pricing, egress, storage, spot capacity and billing SQL, the improvements and decisions that cut real money, dated events such as renewals and negotiations, situations for founders, managers and individual engineers, and specialist work like cost of goods sold models and per-customer attribution.

What repeats is a Monday anomaly triage, a Friday check that non-production schedules held, monthly windows for team cost reviews, idle resource sweeps, commitment coverage, showback reports, tag compliance and log ingestion, and quarterly right-sizing, forecasting and finance briefings. The Metrics log, Meeting notes, Purchase decision, Vendor and Remediation plan templates pair with the projects that need a written record. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
