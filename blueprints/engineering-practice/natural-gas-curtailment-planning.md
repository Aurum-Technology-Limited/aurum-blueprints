---
id: engineering-practice.natural-gas-curtailment-planning
name: Natural Gas Curtailment Planning
description: "A plant that knows its gas position, has rate cut and restart plans ready before the supplier calls, and runs efficiency work that makes every MMscf go further in a gas-short economy."
category: business
version: 1.0.0
tags: [engineering-practice, natural-gas-curtailment-planning, engineer, manager, gas-supply, curtailment, restart-planning, energy-efficiency]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - metrics-log
    - operational-checklist
    - meeting-notes
    - board-meeting
    - reading-queue
    - development-plan
  pillars:
    - name: Engineering Practice
      emoji: "🔧"
      description: "The day-to-day work of practising engineers: each major discipline, process safety and risk studies, FEED, design reviews, commissioning, reliability and maintenance, CAD, simulation and PLC work, project delivery, tenders, reports, ethics and standards, and the Caribbean energy sector from Point Lisas to LNG."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Natural Gas Curtailment Planning
          description: "Planning around natural gas shortfalls in a gas-based industrial economy: supply forecasts, plant rate cuts, restart planning and energy efficiency projects."
          projects:
            - name: Gas supply contract position summary
              description: |-
                ## Purpose
                Most rate cut arguments start because nobody on site can say quickly what the plant is entitled to, what it must pay for whether it takes it or not, and what the supplier may cut without penalty. A two-page summary of contracted daily quantities, take-or-pay terms, interruptibility and force majeure wording, prepared with the commercial team, gives engineers and managers the same starting point when supply tightens.

                ## Milestones
                1. The current gas sales agreement and any amendments located and their reference numbers recorded.
                2. Contracted daily and annual quantities, delivery pressure and gas quality limits listed in one table.
                3. Take-or-pay, interruptibility, curtailment notice and force majeure clauses summarised in plain words and checked by the commercial or legal lead.
                4. The summary issued to operations, planning and site management with an owner and a review date.

                ## Notes
                This is an organisational summary, not a legal reading. Any interpretation of a clause that drives a decision goes to the company's commercial and legal advisers.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A two-page contract position summary, checked by the commercial lead, is issued to operations and site management with a review date."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the commercial team for the current gas sales agreement and amendments"
                - "List contracted daily quantity, pressure and quality limits in one table"
                - "Summarise the curtailment, take-or-pay and force majeure clauses in plain words"
                - "Have the commercial lead check the summary before it is issued"
                - "Check the summary against any new contract amendments @recurring(yearly)"
            - name: Site gas consumption baseline by user
              description: |-
                ## Purpose
                A plant that takes 120 MMscfd may use a third of it as fuel and the rest as feedstock, and those two streams behave very differently when supply is cut. Building a baseline of normal consumption for each major user, from reformers and gas turbines to boilers, flare pilots and fired heaters, shows where gas actually goes and which users have room to move.

                ## Milestones
                1. Every gas user on site listed with its meter or calculated basis.
                2. Twelve months of normal operating consumption gathered for each user from the historian.
                3. Fuel and feedstock shares worked out and shown as a single chart.
                4. Unmetered or estimated users flagged with the method used to estimate them.
                5. The baseline signed off by the process engineering lead and stored with a version number.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed baseline shows twelve months of consumption for every gas user on site, split into fuel and feedstock, with estimated users flagged."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Pull the site gas metering diagram and list every user it shows"
                - "Export twelve months of hourly gas flow for each metered user"
                - "Estimate unmetered users from design data and note the method"
                - "Chart the fuel and feedstock split for the whole site"
            - name: Minimum stable rate and turndown limits register
              description: |-
                ## Purpose
                When the supplier asks how much gas the plant can give back, the honest answer depends on the lowest rate each train can hold without tripping, flaring or damaging equipment. A register of minimum stable rates, with the equipment that sets each limit (compressor surge, burner stability, reformer tube temperatures, catalyst limits), turns that answer from a guess into a documented number.

                ## Milestones
                1. Each process train listed with its design rate and lowest demonstrated stable rate.
                2. The limiting equipment and the physical reason recorded for every minimum rate.
                3. Limits checked against vendor guidance and past low-rate operation in the historian.
                4. The register reviewed by operations, process and rotating equipment engineers and signed.

                ## Notes
                A minimum rate that has never been demonstrated is a theory. Mark it as such until it has been held in practice under a controlled plan.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A signed register gives the minimum stable rate for every train with its limiting equipment and evidence, and marks undemonstrated limits."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Find past periods of low-rate operation in the historian for each train"
                - "Record the limiting equipment and reason for each minimum rate"
                - "Check compressor and burner turndown against vendor data"
                - "Hold a review with operations and rotating equipment to sign the register"
            - name: Curtailment scenario set from 10 percent to total loss
              description: |-
                ## Purpose
                Planning for one vague shortfall leaves a plant unready for the specific cut it actually gets. Defining four or five scenarios, for example a 10 percent cut for a week, 25 percent for a month, 50 percent for a quarter and a total loss of supply, gives each later plan a fixed case to answer and lets managers compare responses on the same footing.

                ## Milestones
                1. Four or five curtailment scenarios written down with depth, duration and notice period.
                2. The plant response to each scenario sketched against the turndown register.
                3. Production loss and gas saved estimated for each scenario.
                4. The scenario set agreed by the site leadership team as the basis for planning.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An agreed set of at least four curtailment scenarios, each with depth, duration, notice and an estimated plant response, is recorded."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Draft four scenarios with depth, duration and notice period"
                - "Map each scenario to the units that would be cut first"
                - "Estimate lost production and gas returned for each scenario"
                - "Present the scenario set to site leadership for agreement"
            - name: Curtailment decision roles and authority chart
              description: |-
                ## Purpose
                At two in the morning, with the supplier on the phone, the shift team needs to know who can agree a rate cut, who must be told and who can stop a plan that has become unsafe. A one-page chart of decision rights, from the shift superintendent to the general manager, with the stop-work authority of every person stated plainly, removes the delay of finding someone senior enough.

                ## Milestones
                1. Every curtailment decision listed, from accepting a nomination change to shutting a train.
                2. A named role assigned to each decision, with a deputy for nights and weekends.
                3. Stop-work authority for safety concerns written into the chart for all roles.
                4. The chart posted in the control room and included in shift handover packs.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed decision rights chart covering every curtailment decision, with deputies and stop-work authority, is posted in the control room."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every decision taken during a past curtailment and who took it"
                - "Assign a role and a night deputy to each decision"
                - "State stop-work authority for every role in plain words"
                - "Post the signed chart in the control room"
            - name: Supplier notification and communication protocol
              description: |-
                ## Purpose
                Curtailment notices arrive by phone, email and sometimes a text to whoever answered last time, and a missed or misread notice can cost a train trip. Agreeing with the gas supplier a single notification route, the information each notice must carry and how the plant confirms receipt makes every cut start from the same facts.

                ## Milestones
                1. The current ways notices arrive mapped, including the people who have received them.
                2. A single notification route and a backup agreed with the supplier's gas control desk.
                3. A standard notice content list agreed: volume, start time, expected duration and reason.
                4. A receipt confirmation step and a contact list kept current at both ends.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written protocol agreed with the supplier sets one notification route, a backup, the content of every notice and a receipt step."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Collect the last five curtailment notices and note how each arrived"
                - "Propose a single route and backup to the supplier's gas control desk"
                - "Agree the information every notice must contain"
                - "Check the contact list at both ends every quarter @recurring(quarterly)"
            - name: Curtailment cost model per MMscf lost
              description: |-
                ## Purpose
                Managers cutting rates need to know which unit loses the least margin for each unit of gas returned, and that number is rarely written down. A simple model of variable margin, fixed costs and penalty exposure per MMscf curtailed, for each train or product, shows where the cheapest cut is and gives the commercial team a defensible figure.

                ## Milestones
                1. Variable margin per tonne of product gathered for each train from the planning team.
                2. Gas consumed per tonne taken from the consumption baseline.
                3. Margin lost per MMscf curtailed calculated for each train and ranked.
                4. Penalties for missed shipments and contractual exposure added as a separate line.
                5. The model reviewed by finance and stored with its assumptions page.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A model ranks every train by margin lost per MMscf curtailed, with assumptions documented and reviewed by finance."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Ask the planning team for current variable margins by product"
                - "Combine margins with gas per tonne from the baseline"
                - "Rank trains by margin lost per MMscf returned"
                - "Ask finance to review the assumptions page"
            - name: Gas metering and allocation accuracy check
              description: |-
                ## Purpose
                During curtailment the plant and the supplier argue over volumes, and a custody meter drifting 2 percent can swing the record of who took what. Checking the custody transfer meter, the internal allocation meters and the gas chromatograph against their calibration records gives the site confidence in its own numbers before they are used to settle disputes.

                ## Milestones
                1. Custody transfer and internal allocation meters listed with their last calibration dates.
                2. Internal meters summed and reconciled against the custody meter over one month.
                3. Any imbalance above the agreed tolerance investigated and its cause recorded.
                4. Overdue calibrations scheduled through the instrument maintenance team.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-month reconciliation of internal meters against the custody meter is recorded, with any imbalance above tolerance explained."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List every gas meter used for allocation with its calibration date"
                - "Reconcile one month of internal meters against the custody meter"
                - "Investigate any imbalance above the agreed tolerance"
                - "Raise work orders for overdue meter calibrations"
            - name: Essential gas loads and protected users list
              description: |-
                ## Purpose
                Some gas users must stay on even in a deep cut: flare pilots, the fuel for steam that keeps equipment warm, emergency generation and nitrogen or instrument air supplies. A list of these protected loads, with the minimum each needs and why, prevents a well-meant cut from removing the services that keep the site safe.

                ## Milestones
                1. Every safety and utility gas user identified with its minimum safe consumption.
                2. The reason each load is protected recorded, with the safety or integrity consequence of losing it.
                3. The total protected load compared with the smallest supply the plant could receive.
                4. The list approved by the process safety lead and added to the curtailment procedure.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved list gives the minimum gas need of every protected safety and utility load and its total against the smallest credible supply."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List flare pilots, utilities and emergency users with their minimum flow"
                - "Write the consequence of losing each protected load"
                - "Total the protected load and compare it with the smallest credible supply"
                - "Ask the process safety lead to approve the list"
                - "Recheck protected load minimums after plant changes @recurring(yearly)"
            - name: Monthly gas supply outlook review
              description: |-
                ## Purpose
                Shortfalls rarely arrive without warning: field declines, rig schedules and upstream maintenance plans usually point to a tight month weeks ahead. A short monthly review of the supplier's outlook, published production data and known upstream work lets the site adjust production plans and maintenance timing before a notice lands.

                ## Milestones
                1. A standing monthly meeting with planning, operations and commercial in the calendar.
                2. A one-page outlook covering expected supply, known risks and the plant's planned demand.
                3. A red, amber or green rating agreed for each of the next three months.
                4. Actions from each review recorded with owners and checked at the next one.

                ## Notes
                Start from the **Meeting notes** template. Published ministry production bulletins are a useful cross-check on what the supplier says.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive monthly outlooks are on file, each with a three-month rating and actions carried forward."
                cadence: rolling
              tasks:
                - "Book a standing monthly outlook meeting with planning and commercial"
                - "Collect the supplier forecast and latest published production data @recurring(monthly:3)"
                - "Rate the next three months red, amber or green in the outlook @recurring(monthly:4)"
                - "Check last month's actions at the start of each review"
            - name: Weekly nomination and consumption reconciliation
              description: |-
                ## Purpose
                Daily nominations, the gas actually delivered and the gas the plant actually burned drift apart over a week, and small gaps become arguments in a curtailment month. A weekly reconciliation of the three figures, done by one named person, catches metering problems and nomination errors while they are still cheap to fix.

                ## Milestones
                1. A reconciliation sheet comparing nominated, delivered and consumed volumes by day.
                2. A tolerance agreed above which a difference is investigated.
                3. Each week's differences explained in a line on the sheet.
                4. Repeated differences raised with the supplier or the instrument team.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A reconciliation sheet shows nominated, delivered and consumed gas for every week of the year with differences above tolerance explained."
                cadence: rolling
              tasks:
                - "Set up a sheet for nominated, delivered and consumed volumes by day"
                - "Agree the tolerance for investigating a difference"
                - "Reconcile last week's three figures and note any gap @recurring(weekly:tue)"
                - "Raise repeated gaps with the supplier or instrument team"
            - name: Upstream maintenance and outage calendar
              description: |-
                ## Purpose
                Planned work on platforms, processing plants and pipelines upstream is one of the most predictable causes of curtailment, yet sites often learn of it from the notice itself. Keeping a rolling twelve-month calendar of announced upstream outages, and aligning the plant's own maintenance to them, can turn a forced rate cut into planned downtime.

                ## Milestones
                1. A twelve-month calendar of announced upstream and pipeline outages in one place.
                2. Each outage tagged with its expected effect on the plant's supply.
                3. The site maintenance plan checked for work that could move into the outage window.
                4. The calendar refreshed after each supplier update.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A twelve-month upstream outage calendar is kept current, and at least one site maintenance job each year is aligned to an announced outage."
                cadence: rolling
              tasks:
                - "Ask the supplier for its announced upstream and pipeline outage plan"
                - "Enter each outage in a shared calendar with its expected supply effect"
                - "Update the calendar and check the site maintenance plan against it @recurring(monthly:12)"
                - "Propose moving one site job into the next outage window"
            - name: Quarterly curtailment tabletop drill
              description: |-
                ## Purpose
                A rate cut procedure that only lives on paper fails on the night because people do not know their part or the numbers have changed. Running a ninety-minute tabletop drill each quarter, using one of the agreed scenarios and the people who would really be on shift, tests the procedure, the contact list and the decision chart without touching the plant.

                ## Milestones
                1. A drill scenario and script prepared from the agreed scenario set.
                2. The drill run with shift supervisors, control room operators and the duty manager.
                3. Gaps in the procedure, contacts or decision rights recorded with owners.
                4. Fixes confirmed before the next quarter's drill.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four tabletop drills a year are run and recorded, with every gap found closed or scheduled before the next drill."
                cadence: cyclic
              tasks:
                - "Pick a scenario and write a ninety-minute drill script"
                - "Run a curtailment tabletop drill with the duty shift team @recurring(quarterly)"
                - "Record every gap found with an owner and a date"
                - "Confirm last drill's fixes before scheduling the next"
            - name: Gas intensity tracking per tonne of product
              description: |-
                ## Purpose
                Gas used per tonne of ammonia, methanol, steel or power is the number that shows whether efficiency work is real, and it worsens quietly at low rates. Tracking specific gas consumption each month, separating fuel from feedstock and noting the operating rate, shows the true cost of running at reduced throughput and the gain from each improvement.

                ## Milestones
                1. A gas intensity measure defined for each product, split into fuel and feedstock.
                2. A twelve-month history built from the historian and production records.
                3. A monthly chart showing intensity against operating rate.
                4. Large changes explained in a short note each month.

                ## Notes
                Start from the **Metrics log** template. Compare months at similar rates; intensity always looks worse at low throughput.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly gas intensity chart per product is kept for a year, with fuel and feedstock separated and any change over 3 percent explained."
                cadence: rolling
              tasks:
                - "Define the gas intensity measure for each product"
                - "Build twelve months of history from historian and production data"
                - "Update the intensity chart against operating rate @recurring(monthly:8)"
                - "Write a line explaining any change over 3 percent"
            - name: Curtailment event log and lessons register
              description: |-
                ## Purpose
                Every curtailment teaches something about the plant, the supplier or the procedure, and most of it is forgotten by the next one. Logging each event with its notice, depth, duration, plant response, cost and lessons builds the record that later forecasts, contract talks and procedure updates depend on.

                ## Milestones
                1. A standard log entry format agreed: notice, depth, duration, response, cost and lessons.
                2. Past curtailments from the last three years entered from shift logs and reports.
                3. Each new event logged within a week of supply returning to normal.
                4. Lessons turned into actions in the procedure or the risk register.

                ## Notes
                Start from the **Risk register** template for the actions that come out of the lessons.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every curtailment of the last three years and every new one is logged within a week, with lessons linked to procedure or risk actions."
                cadence: rolling
              tasks:
                - "Agree the fields for a curtailment log entry"
                - "Enter the last three years of events from shift logs"
                - "Log each new event within a week of supply returning"
                - "Link each lesson to a procedure change or risk action"
                - "Review the lessons register for open actions @recurring(monthly:25)"
            - name: Rate cut procedure upkeep
              description: |-
                ## Purpose
                The rate cut procedure is only as good as its last update, and plant changes, new equipment and turnover make it stale within a year. Reviewing it each quarter against the turndown register, the decision chart and the latest lessons keeps the steps, set points and contacts in it true.

                ## Milestones
                1. The current procedure, its revision and its owner identified.
                2. Steps, set points and sequence checked against the turndown register.
                3. Lessons from recent events and drills worked into a revision.
                4. Changes that alter plant operation routed through management of change before issue.

                ## Notes
                Start from the **Operational checklist** template for the step list itself.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The rate cut procedure is reviewed every quarter, and any change to plant operation is issued only after a closed management of change record."
                cadence: cyclic
              tasks:
                - "Find the current rate cut procedure and its owner"
                - "Compare its set points with the turndown register"
                - "Review the procedure against new lessons and drills @recurring(quarterly)"
                - "Raise a management of change for any change to plant operation"
            - name: Product inventory and shipment commitment tracker
              description: |-
                ## Purpose
                A curtailment hurts most when a vessel is due and the tanks are low, and the planning team often learns of the cut after operations has already acted. Keeping a live view of product inventory, tank space and confirmed shipments against the gas outlook shows how many days of cover the plant has and which cargoes are at risk.

                ## Milestones
                1. Product inventory, tank capacity and confirmed liftings shown on one sheet.
                2. Days of cover calculated at normal rate and at each scenario's reduced rate.
                3. Cargoes at risk under each scenario flagged to the commercial team.
                4. The tracker updated weekly and shared with operations.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly tracker shows inventory, tank space, liftings and days of cover under each curtailment scenario, shared with commercial and operations."
                cadence: rolling
              tasks:
                - "Combine inventory, tank capacity and liftings on one sheet"
                - "Calculate days of cover at normal and reduced rates"
                - "Update the tracker and flag cargoes at risk @recurring(weekly:mon)"
                - "Send flagged cargoes to the commercial team"
            - name: Quarterly gas risk briefing for management
              description: |-
                ## Purpose
                Senior managers need a short, consistent picture of gas risk to make budget, maintenance and commercial calls, not a stack of daily notes. A quarterly briefing that sets the outlook, recent events, cost to date and open actions on one page makes gas supply a standing item rather than a crisis topic.

                ## Milestones
                1. A one-page briefing format agreed with the general manager.
                2. Outlook, recent events, cost and open actions filled from the monthly reviews.
                3. Decisions needed from management stated as clear questions.
                4. Decisions taken recorded and fed back into the outlook.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Four quarterly one-page gas risk briefings are delivered in the year, each with the decisions requested and the decisions taken recorded."
                cadence: cyclic
              tasks:
                - "Agree a one-page briefing format with the general manager"
                - "Prepare and deliver the quarterly gas risk briefing @recurring(quarterly)"
                - "Write each decision needed as a clear question"
                - "Record management decisions in the next monthly outlook"
            - name: The national gas value chain from wellhead to plant
              description: |-
                ## Purpose
                Engineers on downstream plants often see gas as a pipe at the fence and have little feel for the fields, processing plants, compression and aggregator contracts behind it. Learning how gas moves from offshore and onshore fields, through processing and transmission to the users on the industrial estates, explains why curtailments happen and who can do what about them.

                ## Milestones
                1. A simple diagram of the national gas chain from fields to industrial users drawn.
                2. The main sources of supply and the main demand sectors noted with approximate shares from public data.
                3. The role of the gas aggregator, transmission operator and regulator explained in a paragraph each.
                4. Three common causes of curtailment traced back to their point in the chain.

                ## Notes
                Use published sources such as the energy ministry's bulletins and the national gas company's annual reports. Where a share is approximate, say so.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note with a gas chain diagram, roles of the main bodies and three curtailment causes traced through it is filed."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Download the latest public gas production and utilisation bulletin"
                - "Draw the gas chain from fields to industrial users"
                - "Write a paragraph on each of the aggregator, transmission operator and regulator"
                - "Trace three past curtailments to their cause in the chain"
            - name: Reading gas contract terms as an engineer
              description: |-
                ## Purpose
                Daily contract quantity, take-or-pay, nomination tolerances and force majeure are commercial words with direct engineering consequences, and engineers who do not understand them make offers the contract does not allow. Learning the common terms and how each one shows up in plant operation lets the engineer speak to the commercial team in its own language.

                ## Milestones
                1. A glossary of fifteen common gas contract terms written in plain words.
                2. Each term linked to the plant decision it affects.
                3. Three worked examples of how a term changed a past curtailment response.
                4. The glossary reviewed by someone in the commercial team.

                ## Notes
                This is for understanding, not interpretation. Contract decisions stay with the commercial and legal teams.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A reviewed glossary of fifteen gas contract terms, each linked to a plant decision, with three worked examples, is filed."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List fifteen contract terms you have seen in curtailment emails"
                - "Write a plain explanation of each term"
                - "Link each term to the plant decision it affects"
                - "Ask a commercial colleague to review the glossary"
            - name: Gas quality swings and their effect on equipment
              description: |-
                ## Purpose
                When supply is short, the gas that arrives may come from different fields with more CO2, more heavy hydrocarbons or a different heating value, and gas turbines, burners and reformers notice. Learning how Wobbe index, inerts and heavier components affect combustion and feedstock performance helps the engineer spot quality problems hiding inside a curtailment.

                ## Milestones
                1. The contractual gas quality limits and typical analyses listed side by side.
                2. Wobbe index and heating value worked out for three recent analyses.
                3. The equipment most sensitive to quality changes identified with vendor limits.
                4. A short note on what operators should watch when the gas source changes.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note lists sensitive equipment, vendor quality limits and Wobbe calculations for three analyses, with operator watch points."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Collect three recent gas analyses from the chromatograph records"
                - "Calculate Wobbe index and heating value for each analysis"
                - "List equipment with vendor gas quality limits"
                - "Write operator watch points for a change in gas source"
            - name: Low-rate behaviour of compressors, turbines and fired equipment
              description: |-
                ## Purpose
                Running at 60 percent is not just less of normal: compressors move towards surge, gas turbines run hotter per unit of output, burners can become unstable and heat exchangers foul faster. Studying how the plant's main machines behave at low rates, from their maps and past data, prepares the engineer to advise on how deep a cut is safe.

                ## Milestones
                1. Performance maps for the main compressors marked with normal and reduced operating points.
                2. Recycle and anti-surge margins at each scenario rate noted.
                3. Burner and fired heater turndown limits checked against vendor data.
                4. A summary of low-rate risks for each major machine shared with operations.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A summary of low-rate risks for each major machine, with operating points marked on compressor maps, is shared with operations."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Get the performance maps for the main compressors"
                - "Plot normal and reduced operating points on each map"
                - "Check burner turndown limits in vendor manuals"
                - "Write a one-page low-rate risk summary per machine"
            - name: Reading field decline and supply forecast data
              description: |-
                ## Purpose
                Supply forecasts depend on field decline, new developments coming on stream and upstream maintenance, and much of this is visible in published data if you know how to read it. Learning to read production trends and development announcements lets the engineer test the supplier's outlook rather than simply accept it.

                ## Milestones
                1. Five years of published national gas production data in one sheet.
                2. A simple decline trend fitted and its uncertainty noted.
                3. Announced new developments listed with their expected start and volume.
                4. A short comparison of your view against the supplier's outlook.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A sheet of five years of production data with a decline trend, new developments and a comparison against the supplier outlook is filed."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Gather five years of published monthly gas production figures"
                - "Fit a simple decline trend and note its spread"
                - "List announced developments with expected start and volume"
                - "Compare your trend with the supplier's latest outlook"
            - name: Scenario planning methods for supply shortfalls
              description: |-
                ## Purpose
                Single-number forecasts lull a site into planning for one future, while scenario methods force it to think about several. Learning the basics of scenario planning, from identifying key uncertainties to writing plausible stories and testing decisions against each, gives the planning engineer a way to make the curtailment scenario set more than a list of percentages.

                ## Milestones
                1. One recognised text or course on scenario planning read and summarised.
                2. The two biggest uncertainties for the site's gas supply named.
                3. Four short scenario stories written around those uncertainties.
                4. One live decision tested against all four stories and the result noted.

                ## Notes
                Start from the **Reading queue** template if you want to line up more than one source.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four written scenario stories built from two named uncertainties, with one live decision tested against them, are filed."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose one text or short course on scenario planning"
                - "Name the two biggest uncertainties for site gas supply"
                - "Write four short scenario stories from those uncertainties"
                - "Test one live decision against all four stories"
            - name: Site gas balance closure and energy accounting
              description: |-
                ## Purpose
                Any gas balance that fails to close by 3 or 4 percent hides losses, metering faults and unrecorded flaring, and makes every efficiency claim suspect. Learning to close a site energy and gas balance, with steam, power and fuel in the same units, gives the engineer a sound footing for curtailment planning and efficiency work.

                ## Milestones
                1. A site gas and energy balance diagram with every input and output.
                2. One month of data entered in common energy units.
                3. The closure error calculated and its likely causes listed.
                4. The method written up so the balance can be repeated each month.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-month site gas and energy balance closes within an agreed tolerance, with the method written for monthly repetition."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Draw the site gas, steam and power balance diagram"
                - "Enter one month of data in common energy units"
                - "Calculate the closure error and list its likely causes"
                - "Write up the method for monthly repetition"
            - name: Fuel gas savings from combustion and steam system tuning
              description: |-
                ## Purpose
                Excess oxygen in fired heaters, failed steam traps and poor insulation are often worth several percent of site fuel gas, and that saving is gas the plant can keep running on when supply is cut. A focused survey and tuning programme on combustion and steam gives quick, measurable savings without capital spend.

                ## Milestones
                1. Excess oxygen and stack temperature measured on every fired heater and boiler.
                2. A steam trap survey completed with failed traps tagged.
                3. Insulation gaps on hot lines and vessels logged.
                4. Fixes completed and the fuel gas saving measured against the baseline.

                ## Notes
                Burner and fired heater adjustments are done by competent people under the site's permit to work, never as an informal tweak on a busy shift.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Combustion tuning, steam trap repairs and insulation fixes are complete, with the fuel gas saving measured against the baseline."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Measure excess oxygen and stack temperature on each fired heater"
                - "Commission a steam trap survey and tag failed traps"
                - "Log insulation gaps on hot lines and vessels"
                - "Measure fuel gas saving against the baseline after fixes"
                - "Check excess oxygen readings on each fired heater @recurring(monthly:20)"
            - name: Flare and vent gas recovery screening
              description: |-
                ## Purpose
                Gas sent to flare is gas the plant has paid for and burned for nothing, and in a shortfall it is the most painful loss to explain. Screening continuous flare and vent sources for recovery, from leaking relief valves to purge rates and compressor seal gas, often finds gas that can be returned to fuel or feed.

                ## Milestones
                1. Every continuous flare and vent source listed with an estimated flow.
                2. Sources ranked by recoverable volume and ease of recovery.
                3. Three recovery options costed at screening level.
                4. A recommendation made on which options to take forward.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A ranked list of flare and vent sources with three costed recovery options and a recommendation is issued to management."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "List continuous flare and vent sources with estimated flows"
                - "Rank sources by recoverable volume and ease"
                - "Cost three recovery options at screening level"
                - "Write a recommendation on which options to pursue"
            - name: Waste heat recovery opportunity screening
              description: |-
                ## Purpose
                Hot flue gas, process streams and turbine exhausts that leave the site unused are gas burned without full value, and recovering them reduces how much fuel the plant needs. Screening the main waste heat sources against possible users on site gives a short list of projects that cut gas demand permanently.

                ## Milestones
                1. Main waste heat sources listed with temperature and heat flow.
                2. Possible users of recovered heat matched to each source.
                3. Gas saving and rough cost estimated for the top five matches.
                4. A short list of two projects recommended for further study.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two waste heat recovery projects are recommended from a screened list of at least five, each with estimated gas saving and rough cost."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "List waste heat sources with temperature and heat flow"
                - "Match each source to a possible heat user"
                - "Estimate gas saving and rough cost for the top five"
                - "Recommend two projects for further study"
            - name: Backup fuel options study
              description: |-
                ## Purpose
                Some gas users, such as package boilers or emergency generators, could run on diesel or LPG during a long cut, keeping steam and power available while gas goes to the processes that cannot switch. Studying backup fuel options, including storage, burner changes, emissions permits and cost, shows whether dual-fuel capability is worth building.

                ## Milestones
                1. Gas users that could switch fuel identified with their duty.
                2. Burner, storage and handling changes for each option described.
                3. Permit and emissions implications checked with the environmental team.
                4. Cost and gas freed up compared and a decision recorded.

                ## Notes
                Any change to burners or fuel systems goes through management of change and the relevant hazard review before it is built.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on backup fuel capability, with options, cost, emissions and gas freed up compared, is approved by management."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "List gas users that could run on another fuel"
                - "Describe burner, storage and handling changes per option"
                - "Check emissions permit implications with the environmental team"
                - "Compare cost against gas freed up and record a decision"
            - name: Power import or self-generation choice under curtailment
              description: |-
                ## Purpose
                Sites with their own gas turbines face a choice in a cut: burn scarce gas for power, or import more from the grid and send the gas to process. Comparing the economics and reliability of the two, including grid capacity, tariffs and the trip risk of running turbines at low load, gives the site a clear rule for each scenario.

                ## Milestones
                1. Site power demand and on-site generation capacity recorded by scenario.
                2. Grid import limits and tariffs confirmed with the utility.
                3. Gas value in process compared with gas value as fuel for power.
                4. A switching rule agreed for each curtailment scenario.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A switching rule between grid import and self-generation is agreed for every curtailment scenario, with the economics recorded."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Record site power demand and generation capacity for each scenario"
                - "Confirm grid import limits and tariffs with the utility"
                - "Compare gas value in process with gas value as power fuel"
                - "Agree a switching rule for each scenario"
            - name: Unit cut order decision matrix
              description: |-
                ## Purpose
                On a site with several trains or plants, the order in which units are cut decides how much margin is lost and how hard the restart will be. A decision matrix that scores each unit on margin per MMscf, restart difficulty, contractual exposure and integrity risk gives a defensible cut order agreed before the pressure of an event.

                ## Milestones
                1. Scoring criteria agreed: margin, restart difficulty, contracts and integrity risk.
                2. Each unit scored with evidence from the cost model and turndown register.
                3. A cut order agreed for each scenario.
                4. The cut order written into the rate cut procedure.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An agreed cut order for every scenario, based on a scored matrix with evidence, is written into the rate cut procedure."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Agree scoring criteria with operations and commercial"
                - "Score each unit using the cost model and turndown register"
                - "Agree a cut order for each scenario"
                - "Add the cut order to the rate cut procedure"
            - name: Shutdown versus reduced-rate economics
              description: |-
                ## Purpose
                Over a long, deep cut it may be cheaper to shut a train completely and run the others full than to run all of them at poor efficiency. Comparing shutdown and reduced-rate options over the expected duration, including restart cost, catalyst effects and lost efficiency, gives managers a break-even rule rather than a gut call.

                ## Milestones
                1. Costs of a full shutdown and restart for each train gathered.
                2. Efficiency loss at reduced rates taken from the intensity history.
                3. A break-even duration calculated for each train.
                4. The rule agreed and added to the management briefing.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A break-even duration between shutdown and reduced-rate operation is calculated for each train and agreed by management."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Gather full shutdown and restart costs for each train"
                - "Take efficiency loss at reduced rates from the intensity history"
                - "Calculate the break-even duration for each train"
                - "Present the rule at the next management briefing"
            - name: Product buffer stock ahead of known curtailment
              description: |-
                ## Purpose
                When a cut is announced weeks ahead, building product inventory beforehand can protect shipments through the outage, if tank space and cash allow. Planning a buffer build, with the target stock level, the rate needed to reach it and the storage limits, turns notice into protection rather than worry.

                ## Milestones
                1. Expected lost production during the announced cut estimated.
                2. Tank space and safe filling limits confirmed.
                3. A production plan to build the buffer agreed with operations.
                4. Buffer stock reached and shipments mapped through the cut.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A buffer stock target is set, reached before the cut starts and shown to cover confirmed shipments through the outage."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Estimate production lost during the announced cut"
                - "Confirm tank space and safe filling limits"
                - "Agree a buffer build plan with operations"
                - "Map shipments through the cut against the buffer"
            - name: Planned upstream outage response plan
              description: |-
                ## Purpose
                Of all curtailments, a dated upstream outage announced with weeks of notice is the best chance to show a curtailment handled well. Building a specific response plan, with the rate profile hour by hour, maintenance work slotted into the window, staffing and communications, turns the outage from a disruption into a planned event.

                ## Milestones
                1. Outage dates, expected supply profile and confidence confirmed with the supplier.
                2. An hourly plant rate profile drawn up for the outage.
                3. Maintenance work for the window agreed and permits prepared.
                4. Staffing, communications and the restart plan confirmed a week before.

                ## Notes
                Start from the **Operational checklist** template for the day-by-day plan.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The planned outage is handled to a written plan with an hourly rate profile, slotted maintenance and staffing, and reviewed afterwards."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Confirm outage dates and supply profile with the supplier"
                - "Draw an hourly plant rate profile for the outage"
                - "Agree maintenance work for the window and prepare permits"
                - "Confirm staffing and communications a week before"
            - name: Controlled shutdown for extended curtailment
              description: |-
                ## Purpose
                Once supply falls below the minimum stable rate for longer than the break-even duration, a controlled shutdown is safer and cheaper than a trip. Preparing the shutdown with a written sequence, isolations, inventory clearing and handover to preservation makes sure the train comes down in a state that can be restarted cleanly.

                ## Milestones
                1. A shutdown sequence approved and briefed to all shifts.
                2. Isolations and permits planned for equipment to be opened.
                3. Process inventory cleared or secured as planned.
                4. The train handed over to the preservation team with a status record.

                ## Notes
                Shutdown and isolation work follows the site's permit to work and isolation procedures without exception. Anyone may stop the job if conditions change.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The train is shut down to an approved sequence without a trip or safety incident and handed over with a written status record."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Review and approve the shutdown sequence"
                - "Brief every shift on the sequence and stop-work authority"
                - "Plan isolations and permits for equipment to be opened"
                - "Hand the train to preservation with a status record"
            - name: Restart plan after extended curtailment
              description: |-
                ## Purpose
                Restarts after a long outage are where incidents happen: equipment has sat idle, people have been reassigned and everyone wants production back fast. A restart plan with pre-start safety checks, a staged ramp-up, gas availability confirmed and every temporary change reversed under management of change protects people and plant.

                ## Milestones
                1. Gas availability for the full ramp-up confirmed in writing with the supplier.
                2. A pre-start safety review completed for all changes made during the outage.
                3. A staged ramp-up profile with hold points agreed.
                4. Temporary bypasses and changes reversed and closed out.
                5. The train back at target rate with any start-up issues logged.

                ## Notes
                Start from the **Operational checklist** template. Do not compress the hold points to gain a day of production.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The train restarts to an approved staged plan with a completed pre-start safety review and all temporary changes closed out."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Get written confirmation of gas availability for the ramp-up"
                - "Complete a pre-start safety review of outage changes"
                - "Agree a staged ramp-up profile with hold points"
                - "Close out every temporary bypass and change"
            - name: Idle equipment preservation during long shutdowns
              description: |-
                ## Purpose
                Equipment idle for months in a hot, humid, salty climate corrodes, seals dry out and catalysts can be damaged, turning a gas shortfall into a repair bill. A preservation plan with nitrogen blanketing, rotating equipment turning schedules, desiccants and inspection checks keeps the train ready to restart.

                ## Milestones
                1. Preservation requirements for each equipment type gathered from vendors.
                2. A preservation plan with methods, frequencies and owners issued.
                3. Weekly preservation checks recorded during the shutdown.
                4. A pre-restart inspection confirming equipment condition.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A preservation plan is followed for the whole shutdown with weekly checks recorded and a pre-restart inspection signed."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Gather vendor preservation requirements by equipment type"
                - "Issue a preservation plan with methods, frequency and owners"
                - "Record preservation checks during the shutdown @recurring(weekly:thu)"
                - "Sign a pre-restart condition inspection"
            - name: Post-curtailment review
              description: |-
                ## Purpose
                The weeks after supply returns are the only time when everyone still remembers what went well and what nearly went wrong. A structured review within a month of the event, using the event log, operator interviews and cost data, captures lessons while they are fresh and feeds them into the procedure, drills and contract talks.

                ## Milestones
                1. The event timeline rebuilt from logs, notices and historian data.
                2. Operators, supervisors and commercial staff interviewed.
                3. Cost, production loss and near misses quantified.
                4. Actions agreed with owners and added to the lessons register.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A post-curtailment review with timeline, cost and near misses is issued within a month of supply returning, with owned actions."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Rebuild the event timeline from logs and notices"
                - "Interview operators, supervisors and commercial staff"
                - "Quantify cost, lost production and near misses"
                - "Ask the agent to draft the review summary from your notes"
            - name: Gas contract renewal preparation
              description: |-
                ## Purpose
                Contract renewals are where curtailment terms, priority and penalties are set for years, and the engineering evidence is often missing from the table. Preparing the engineering inputs, such as turndown limits, minimum safe supply, curtailment history and cost per MMscf, gives the commercial team facts to negotiate with.

                ## Milestones
                1. The renewal date and negotiation timetable confirmed with the commercial team.
                2. Curtailment history and cost evidence compiled from the event log.
                3. Minimum safe supply and turndown limits summarised.
                4. Engineering positions agreed and handed to the negotiation team.

                ## Notes
                Engineers provide evidence; the commercial and legal teams decide positions and wording.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An engineering evidence pack with curtailment history, cost and minimum safe supply is handed to the negotiation team before talks begin."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Confirm the renewal date and timetable with commercial"
                - "Compile curtailment history and cost from the event log"
                - "Summarise minimum safe supply and turndown limits"
                - "Hand the evidence pack to the negotiation team"
            - name: Shift supervisor curtailment briefing pack
              description: |-
                ## Purpose
                New shift supervisors may face their first rate cut alone on a night shift, with only the procedure and their memory to go on. A short briefing pack with the decision chart, protected loads, cut order, turndown limits and contacts, walked through with an experienced supervisor, prepares them before the call comes.

                ## Milestones
                1. A briefing pack of no more than ten pages assembled.
                2. The pack walked through with each new supervisor by an experienced colleague.
                3. Understanding checked with three what-if questions.
                4. Completion recorded in the supervisor's competence file.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every new shift supervisor completes a walk-through of the briefing pack with three what-if checks, recorded in their competence file."
                cadence: rolling
              tasks:
                - "Assemble a ten-page briefing pack from the core documents"
                - "Walk each new supervisor through the pack"
                - "Ask three what-if questions to check understanding"
                - "Record completion in the competence file"
                - "Refresh the pack against the latest procedure and contacts @recurring(quarterly)"
            - name: Board paper on gas supply risk
              description: |-
                ## Purpose
                Boards and owners need to understand gas risk well enough to approve spending on efficiency, backup fuels or storage, yet often see only the production shortfall after the fact. A board paper setting out exposure, scenarios, cost history and the investment options gives directors a basis for decisions.

                ## Milestones
                1. Exposure, scenarios and cost history summarised in two pages.
                2. Three investment options set out with cost and gas saved.
                3. The recommendation and decision needed stated clearly.
                4. The board decision recorded and actions assigned.

                ## Notes
                Start from the **Board meeting** template.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A board paper with exposure, scenarios, cost history and three options is presented, and the board's decision is recorded with actions."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Summarise exposure, scenarios and cost history in two pages"
                - "Set out three investment options with cost and gas saved"
                - "State the recommendation and the decision needed"
                - "Record the board decision and assign actions"
            - name: Workforce planning for long plant outages
              description: |-
                ## Purpose
                Shutdowns lasting months raise hard questions for managers: who stays, who moves to other work, how contractors are handled and how skills are kept for the restart. Planning the workforce side early, with HR and the contractor managers, protects the people and the competence the plant needs to start again.

                ## Milestones
                1. Staffing needs during shutdown, preservation and restart estimated.
                2. Options for redeployment, training and contractor arrangements listed with HR.
                3. Critical restart skills identified and a plan to keep them agreed.
                4. Communications to staff and contractors prepared and delivered.

                ## Notes
                Employment terms and any changes to them are for HR and employment advisers. This project is about planning and timing.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A workforce plan for shutdown, preservation and restart, agreed with HR, names the critical restart skills and how they will be kept."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Estimate staffing for shutdown, preservation and restart"
                - "List redeployment, training and contractor options with HR"
                - "Identify critical restart skills and how to keep them"
                - "Prepare communications for staff and contractors"
            - name: Curtailment plan for a small industrial gas user
              description: |-
                ## Purpose
                Food processors, glass and steel works and smaller manufacturers on the gas network are curtailed too, often with less notice and no dedicated planning team. A compact plan for a small site, covering its gas uses, the minimum it needs, alternative fuels, customer commitments and who to call, gives the plant engineer or manager a usable response in a few days of work.

                ## Milestones
                1. Every gas use on site listed with its normal and minimum consumption.
                2. The supplier contact and notice route confirmed.
                3. Alternative fuel or production options listed for each use.
                4. A one-page response plan posted where the operating team can see it.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page curtailment response plan, listing gas uses, minimum needs, alternatives and contacts, is posted on site."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List each gas use on site with normal and minimum flow"
                - "Confirm the supplier contact and notice route"
                - "Note an alternative fuel or production option for each use"
                - "Post a one-page response plan where operators can see it"
                - "Walk the operating team through the response plan @recurring(yearly)"
            - name: Planning engineer and commercial team working agreement
              description: |-
                ## Purpose
                Production planners, engineers and the commercial team each see a curtailment differently, and conflicting messages to customers and the supplier cause most of the damage. A short working agreement on who speaks to whom, what data each provides and how fast, makes the three teams act as one.

                ## Milestones
                1. The information each team needs during a curtailment listed.
                2. Response times for each piece of information agreed.
                3. A single voice to the supplier and to customers named.
                4. The agreement tested in the next tabletop drill.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed working agreement between planning, engineering and commercial sets data, response times and a single external voice, tested in a drill."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List what each team needs from the others during a cut"
                - "Agree response times for each item"
                - "Name a single voice to the supplier and to customers"
                - "Test the agreement in the next tabletop drill"
            - name: Moving from operations into gas supply planning
              description: |-
                ## Purpose
                Operations engineers moving into gas planning bring plant knowledge but often lack the commercial, forecasting and modelling skills the role needs. A ninety-day development plan covering contracts, forecasts, cost models and relationships with the supplier speeds up the move and shows the manager progress.

                ## Milestones
                1. A ninety-day plan agreed with the line manager.
                2. Key documents and people for the role listed and met.
                3. One outlook review and one reconciliation led under supervision.
                4. A review at ninety days with strengths and gaps noted.

                ## Notes
                Start from the **Development plan** template.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A ninety-day development plan is completed, with one outlook review led and a recorded review with the line manager."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Agree a ninety-day plan with your line manager"
                - "List and meet the key people in commercial and supply"
                - "Lead one outlook review under supervision"
                - "Hold a ninety-day review and note strengths and gaps"
            - name: Gas allocation optimisation model across units
              description: |-
                ## Purpose
                With several trains, utilities and products, choosing how to share a reduced gas supply by hand leaves margin on the table. A linear programming model that allocates available gas to maximise margin, within turndown limits, protected loads and contract constraints, gives planners an answer in minutes for any supply level.

                ## Milestones
                1. Decision variables, constraints and objective written out and reviewed.
                2. The model built in a spreadsheet solver or a scripting tool.
                3. Results checked against two past curtailments.
                4. A simple user guide and an owner for model upkeep named.

                ## Notes
                Keep the model simple enough for a second engineer to check. A model nobody else understands will not be trusted on the night.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An allocation model that matches two past curtailments within an agreed tolerance is in use, with a user guide and named owner."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write out variables, constraints and objective for review"
                - "Build the model in a spreadsheet solver or script"
                - "Check results against two past curtailments"
                - "Write a user guide and name a model owner"
                - "Rerun the allocation model against the latest supply outlook @recurring(monthly:5)"
            - name: Probabilistic gas supply forecast with P10, P50 and P90 cases
              description: |-
                ## Purpose
                Single forecast numbers hide how uncertain gas supply really is, and plans built on it fail when the low case arrives. A probabilistic forecast with P10, P50 and P90 cases, built from field decline ranges, development timing and outage history, lets managers plan for a range and size buffers sensibly.

                ## Milestones
                1. Key uncertain inputs listed with ranges from public data and supplier information.
                2. A simple Monte Carlo or range model built.
                3. P10, P50 and P90 supply cases produced for the next eighteen months.
                4. The cases compared with the supplier outlook and shared with planning.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "P10, P50 and P90 supply cases for eighteen months are produced from documented input ranges and shared with planning."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List uncertain inputs with ranges from public and supplier data"
                - "Build a simple Monte Carlo or range model"
                - "Produce P10, P50 and P90 cases for eighteen months"
                - "Compare the cases with the supplier outlook"
                - "Refresh the P10, P50 and P90 cases with new data @recurring(quarterly)"
            - name: Extended low-rate operating envelope study
              description: |-
                ## Purpose
                If curtailment becomes chronic, running trains for months at rates they were never designed to hold raises questions on catalyst life, fouling, corrosion and control stability. An engineering study of an extended low-rate envelope, with hazard review and management of change, sets the limits and monitoring needed to run there safely.

                ## Milestones
                1. The proposed low-rate envelope defined with rates and key conditions.
                2. Effects on catalyst, corrosion, fouling and controls assessed with specialists.
                3. A hazard review completed and actions closed.
                4. The envelope approved through management of change with monitoring set.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An extended low-rate operating envelope is approved through management of change, with hazard review actions closed and monitoring in place."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Define the proposed low-rate envelope with key conditions"
                - "Assess catalyst, corrosion, fouling and control effects"
                - "Hold a hazard review and close its actions"
                - "Approve the envelope through management of change"
            - name: Gas security test for new capital projects
              description: |-
                ## Purpose
                Expansion and new projects on a gas-short network can be stranded if the gas they assume never arrives. A gas security test applied to every capital proposal, checking the supply assumption against the forecast range and curtailment history, stops projects that only work in the optimistic case.

                ## Milestones
                1. A gas security checklist written for capital proposals.
                2. The checklist tested on one current proposal.
                3. Results presented to the investment committee.
                4. The checklist added to the capital approval process.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A gas security checklist is added to the capital approval process after being tested on one live proposal."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write a gas security checklist for capital proposals"
                - "Test the checklist on one current proposal"
                - "Present the results to the investment committee"
                - "Ask to add the checklist to the capital approval process"
            - name: Industry submissions on national gas allocation
              description: |-
                ## Purpose
                Ministries and regulators in gas-short economies consult on allocation policies, priority rules and pricing, and well-evidenced engineering input from users carries weight. Preparing a site or industry association submission, with consumption, efficiency, employment and curtailment evidence, puts the plant's case on record.

                ## Milestones
                1. The consultation and its questions identified, with the closing date.
                2. Evidence on consumption, efficiency and curtailment impact compiled.
                3. A draft submission reviewed by management and the industry association.
                4. The submission sent and a copy filed.

                ## Notes
                Submissions represent the company; approval from management and public affairs comes before anything is sent.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A management-approved submission with engineering evidence is sent before the consultation closes and filed."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Find the consultation questions and closing date"
                - "Compile consumption, efficiency and curtailment evidence"
                - "Have management and the industry association review the draft"
                - "Send the approved submission and file a copy"
---

# Natural Gas Curtailment Planning

In a gas-based industrial economy such as Trinidad and Tobago, a shortfall upstream turns into rate cuts, idle trains and difficult restarts on the plants downstream, and the sites that cope best are the ones that planned for it on a quiet day. These projects start with the foundations (the contract position, the consumption baseline, turndown limits, scenarios and who decides), move through the monthly and weekly machinery of supply outlooks, nominations and drills, then the knowledge behind good calls, the decisions on fuel savings, backup fuels and which unit to cut first, dated events from a planned upstream outage to a full restart, projects for the different people in the room, and specialist work on allocation models and probabilistic forecasts.

The rhythm is monthly and weekly: a supply outlook early each month, a weekly nomination reconciliation, a monthly gas intensity review and outage calendar check, with quarterly drills, management briefings and playbook reviews. The Risk register, Metrics log, Operational checklist, Meeting notes and Board meeting templates pair with the projects that keep a standing record. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
