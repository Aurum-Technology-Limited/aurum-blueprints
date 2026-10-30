---
id: finance-accounting.business-cost-reduction-programme
name: Business Cost Reduction Programme
description: "A charter and spend baseline, savings that show up in the accounts, renewal gates and structured reviews of software, suppliers, property, fees and headcount, so costs fall without harming the business."
category: business
version: 1.0.0
tags: [finance-accounting, business-cost-reduction-programme, small-business, manager, enterprise, cost-reduction, supplier-negotiation, spend-analysis]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - purchase-decision
    - vendor
    - board-meeting
    - metrics-log
  pillars:
    - name: Finance & Accounting
      emoji: "🧾"
      description: "The money side of a business: bookkeeping and the monthly close, cash flow, budgeting and forecasting, billing and collections, payroll, tax, audit and financial controls."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Business Cost Reduction Programme
          description: "Running structured cost reviews of software, suppliers, property and headcount spend to cut costs without damaging the business, for owners and leadership teams."
          projects:
            - name: Cost reduction programme charter and savings target
              description: |-
                ## Purpose
                Cost programmes that start with a vague instruction to cut where you can usually end with a few cancelled subscriptions and a resentful team. A one-page charter naming the target in money and as a share of the cost base, the timeframe, the sponsor, the scope and what is off limits gives everyone the same brief and gives the programme a finish line.

                ## Milestones
                1. A savings target agreed in money and as a percentage of the addressable cost base, with the financial year it must show in.
                2. A named sponsor with authority to approve cuts, and a programme lead with time set aside to run it.
                3. Scope written down: which entities, sites, departments and cost types are in, and which are out.
                4. The charter signed by the owner or leadership team and filed where every budget holder can read it.

                ## Notes
                Set the target from the gap you need to close (a margin goal, a funding runway, a price you must hit), not from a round number. A target nobody can trace to a reason gets negotiated down in the first month.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed one-page charter states the savings target, timeframe, sponsor, lead, scope and exclusions, and every budget holder has received it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down in two sentences why the business needs lower costs now"
                - "Work out the savings target from the margin, runway or price gap it must close"
                - "Name the sponsor and the programme lead and agree their weekly time"
                - "List the entities, sites and cost types in and out of scope"
                - "Get the charter signed and send it to every budget holder"
            - name: Twelve-month spend baseline by supplier and category
              description: |-
                ## Purpose
                Before anything is cut you need to know where the money actually goes, and the profit and loss account alone will not tell you which suppliers sit behind each line. Pulling twelve months of payments from the ledger and card statements, grouped by supplier and by category, usually shows that a fifth of suppliers take four fifths of the spend, and that is where the programme should start.

                ## Milestones
                1. Twelve months of supplier payments, card spend and direct debits exported into one sheet.
                2. Every supplier tagged to a spend category such as software, property, professional fees, logistics or utilities.
                3. A ranked list of suppliers by annual spend, with the top twenty highlighted.
                4. The baseline total reconciled to operating costs in the accounts within an agreed tolerance.

                ## Notes
                Leave payroll, tax payments and transfers between your own accounts out of the supplier view, but keep headcount costs as a separate line in the baseline so the whole cost base is visible.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A spend baseline lists every supplier paid in the last twelve months by category and total, reconciled to operating costs in the accounts."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Export twelve months of supplier payments from the accounting system"
                - "Add company card and direct debit spend that never passed through bills"
                - "Tag each supplier to one spend category and rank them by annual total"
                - "Reconcile the baseline total to operating costs in the accounts"
                - "Refresh the baseline with the latest twelve months of spend @recurring(yearly)"
            - name: Addressable spend split into fixed, variable and discretionary
              description: |-
                ## Purpose
                Not every line of cost can move this year. Rent under a five-year lease, tax and regulatory fees are largely fixed in the short term, while consumables, travel, marketing and software seats can change within weeks. Splitting the baseline this way shows how much spend is genuinely addressable, which keeps the target honest and stops effort going into lines that cannot shift.

                ## Milestones
                1. Every spend category labelled fixed, variable with volume, or discretionary.
                2. Locked-in commitments noted with the earliest date each could change.
                3. An addressable spend figure for the next twelve months, kept separate from the total.
                4. The savings target checked as a share of addressable spend, and challenged if it looks unrealistic.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each spend category carries a fixed, variable or discretionary label, and the addressable total for the next twelve months is recorded beside the target."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Label each spend category as fixed, variable or discretionary"
                - "Note the earliest date each locked-in contract or lease could change"
                - "Total the spend that could realistically move in the next twelve months"
                - "Compare the savings target with that addressable total"
            - name: Protected spend list and red lines
              description: |-
                ## Purpose
                The fastest way for a cost programme to damage a business is to cut something that quietly holds revenue, safety or compliance together: the support tool customers rely on, the maintenance contract on critical equipment, the training that keeps a licence valid. Agreeing in advance which spend is protected, and why, lets the team cut hard everywhere else without fear.

                ## Milestones
                1. A list of protected spend lines, each with its reason: customer impact, safety, legal duty or a growth bet.
                2. A rule for how a protected line may still be reviewed, such as efficiency only with no fall in service level.
                3. Red lines agreed with leadership, for example no cut to customer response times or to health and safety training.
                4. The list shared with everyone running a review.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A protected spend list with a reason for each line and the agreed red lines is approved by the sponsor and shared with every reviewer."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask each department head which spend would hurt customers or safety if cut"
                - "Write the reason beside every protected line"
                - "Agree the red lines with the sponsor and leadership team"
                - "Revisit the protected list at the start of each programme year @recurring(yearly)"
            - name: Savings definitions and booking rules
              description: |-
                ## Purpose
                Arguments about whether a saving is real can sink a programme's credibility with the board. Writing down the difference between a cash saving against last year's actual, a cost avoided against a quoted increase and a one-off refund, plus who signs a saving off and when it counts, means the reported number matches what later shows up in the accounts.

                ## Milestones
                1. Definitions agreed for recurring savings, one-off savings and cost avoidance, with an example of each.
                2. A baseline rule stating which price and volume each saving is measured against.
                3. A sign-off rule naming who confirms a saving and the evidence required.
                4. Reporting rules that keep cost avoidance separate from savings that lower the run rate.

                ## Notes
                Finance, not the person who negotiated the deal, should sign off each saving. It protects both of them when the board asks.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written savings policy defines each saving type, its baseline and its sign-off, and finance approved it before the first saving was reported."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft definitions for recurring, one-off and avoided costs with examples"
                - "Set the baseline rule for price and volume changes"
                - "Name who signs off each saving and the evidence they need"
                - "Get the finance lead to approve the policy before any savings are reported"
            - name: Savings initiative pipeline tracker
              description: |-
                ## Purpose
                Ideas, live negotiations and signed savings blur together without a single list, and the programme ends up reporting its hopes. A tracker that moves each initiative through stages from idea to validated, approved, delivered and realised, with an owner, value and date, shows at a glance how much of the target is real and how much is still a conversation.

                ## Milestones
                1. A tracker with one row per initiative: owner, category, stage, annual value, start date and evidence link.
                2. Stage definitions written so two people would place the same initiative in the same stage.
                3. Every initiative from the quick-win sweep and category reviews entered.
                4. A view of value by stage set against the target.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The tracker holds every initiative with owner, stage and value, is updated weekly, and reports a total by stage against the target."
                cadence: rolling
              tasks:
                - "Set up the tracker with owner, stage, value, date and evidence columns"
                - "Write one-line definitions for each stage from idea to realised"
                - "Enter every initiative currently under discussion"
                - "Update stages and values with each initiative owner @recurring(weekly:mon)"
            - name: Contract and renewal calendar
              description: |-
                ## Purpose
                Auto-renewing contracts are where cost programmes lose most of their easy money: the notice window passes, the contract rolls for another year at a higher price, and the bargaining position is gone. A single calendar of every supplier contract with its end date, notice period and renewal terms turns renewals into planned decisions.

                ## Milestones
                1. Every supplier contract above an agreed annual value listed with start, end, notice period and renewal terms.
                2. Contracts with auto-renewal and price indexation clauses flagged.
                3. Each contract given an owner responsible for the renewal decision.
                4. Reminders set 120 days before each notice deadline.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A renewal calendar covers every contract above the agreed value, with notice dates and owners, and a reminder exists 120 days before each deadline."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect signed contracts from inboxes, shared drives and supplier portals"
                - "Record end date, notice period and renewal terms for each contract"
                - "Flag every contract that renews automatically or carries price indexation"
                - "Add newly signed contracts to the calendar @recurring(monthly:3)"
            - name: First thirty days quick-win sweep
              description: |-
                ## Purpose
                Every business carries some plain waste: subscriptions for people who left, duplicate tools bought by different teams, a second phone line nobody uses, a storage unit full of old stock. Sweeping for these in the first month pays for the programme's time and shows the team that savings are possible without anyone losing something they need.

                ## Milestones
                1. Every recurring charge on cards and direct debits matched to a named user or purpose.
                2. Charges without an owner cancelled or put on notice.
                3. Quick wins entered in the pipeline tracker with their annual value.
                4. A short note to leadership listing what was stopped and what it saves.

                ## Notes
                Start from the **Operational checklist** template. Before cancelling, export any data held in a tool and check the contract for a notice period, so you do not pay a termination fee bigger than the saving.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "All recurring card and direct debit charges are checked, unowned ones cancelled, and the annualised quick-win savings are in the tracker within 30 days."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every recurring charge on company cards and direct debits"
                - "Ask the named user of each charge whether it is still needed"
                - "Cancel charges with no owner after exporting any data they hold"
                - "Record each quick win and its annual value in the pipeline tracker"
            - name: Staff briefing and cost ideas channel
              description: |-
                ## Purpose
                People closest to the work know where money is wasted, but they will only say so if they understand why costs are being cut and trust that ideas will not cost them their jobs. A clear briefing, followed by a simple channel for ideas that are answered within a fortnight, turns the programme from something done to staff into something they help with.

                ## Milestones
                1. A short briefing explaining the reason for the programme, the target and what is protected.
                2. An ideas channel, such as a form or shared mailbox, with a named person who replies.
                3. Every idea answered within two weeks with a yes, a no and a reason, or a later date.
                4. Adopted ideas credited by name in the next programme update.

                ## Notes
                Be honest early if headcount is in scope. Rumours do more damage than the facts.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A briefing has reached all staff, and every idea submitted through the channel has a recorded reply within two weeks."
                cadence: rolling
              tasks:
                - "Draft a five-minute briefing on why costs are being reviewed"
                - "Set up an ideas form and name the person who replies"
                - "Reply to every idea received this month with a decision @recurring(monthly:15)"
                - "Credit adopted ideas by name in the programme update"
            - name: Monthly savings realisation check against the ledger
              description: |-
                ## Purpose
                A signed contract at a lower price is not a saving until the lower cost appears in the accounts, and many agreed savings leak away through old prices still being invoiced, volume growth or a new tool bought to replace the one cancelled. Checking each delivered saving against actual ledger spend every month separates reported savings from realised ones.

                ## Milestones
                1. Each delivered initiative mapped to the ledger account and supplier where its saving should appear.
                2. Monthly actuals compared with the baseline for each of those lines.
                3. Gaps between expected and realised savings explained, with an action for each.
                4. Realised savings reported separately from pipeline value in every programme update.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every month a realisation report compares expected and actual savings line by line, with each gap explained and given an owner."
                cadence: rolling
              tasks:
                - "Map every delivered saving to its ledger account and supplier"
                - "Compare the month's actual spend with the baseline for each line @recurring(monthly:12)"
                - "Investigate any saving that is not showing up and assign an action"
                - "Report realised and pipeline savings as separate figures"
            - name: Software licence register and seat reviews
              description: |-
                ## Purpose
                Software spend grows quietly: seats are added for every new starter, rarely removed for leavers, and premium tiers are bought for one feature. A register of every application with its owner, seat count, tier, price and renewal date, checked against actual logins, typically finds unused seats worth a noticeable slice of the software bill.

                ## Milestones
                1. Every paid application listed with owner, seat count, tier, monthly cost and renewal date.
                2. Active users for each tool compared with seats paid for.
                3. Unused seats removed and over-specified tiers moved down where the contract allows.
                4. The leaver process updated so seats are removed the day someone leaves.

                ## Notes
                Your single sign-on admin panel, card statements and expense claims together usually reveal tools the finance team never knew about.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The register lists every paid application, unused seats stay below an agreed threshold, and seat counts are checked against active users monthly."
                cadence: rolling
              tasks:
                - "Pull every software charge from cards, bills and expense claims"
                - "List each tool with owner, seats, tier, cost and renewal date"
                - "Remove seats for leavers and inactive users @recurring(monthly:18)"
                - "True up seat counts and tiers with each tool owner @recurring(quarterly)"
            - name: Ninety-day pre-renewal review gate
              description: |-
                ## Purpose
                Renewals handled in the final week end up signed at whatever price the supplier sends. A gate that opens 90 days before each notice deadline asks four questions: do we still need it, at this size, from this supplier, at this price? That leaves enough time to test the market, negotiate or give notice.

                ## Milestones
                1. A standard renewal review form covering need, volume, alternatives and price.
                2. Every contract inside its 90-day window reviewed by its owner and finance.
                3. A recorded decision for each: renew as is, renegotiate, retender, downsize or exit.
                4. Notice served in writing wherever the decision is to exit or retender.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every contract reaching its notice window has a completed renewal review and a recorded decision before the notice deadline passes."
                cadence: rolling
              tasks:
                - "Draft a one-page renewal review form with the four questions"
                - "Run the gate for every contract entering its 90-day window @recurring(monthly:5)"
                - "Record the decision and the reason for each renewal"
                - "Serve written notice where the decision is to exit or retender"
            - name: Challenge panel for new recurring commitments
              description: |-
                ## Purpose
                Cutting existing spend while new subscriptions, retainers and leases are signed every week is like bailing a boat with the tap running. A short weekly panel that reviews any new recurring commitment above an agreed annual value, before it is signed, keeps the cost base from creeping back while the programme runs.

                ## Milestones
                1. A threshold agreed for new recurring commitments that need panel review.
                2. A one-page request form covering need, alternatives considered, annual cost and contract length.
                3. A panel of two or three people meeting weekly, with decisions logged.
                4. Approved commitments added to the renewal calendar on signature.

                ## Notes
                The panel reviews value for money, not authority to spend. Keep approval limits in your delegation of authority and do not create a second sign-off route.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No new recurring commitment above the threshold is signed without a logged panel decision, checked against new contracts each quarter."
                cadence: rolling
              tasks:
                - "Agree the annual value above which new commitments come to the panel"
                - "Create the one-page request form"
                - "Hold the panel and log every decision @recurring(weekly:thu)"
                - "Add each approved commitment to the renewal calendar"
            - name: Supplier price increase and invoice rate checks
              description: |-
                ## Purpose
                Suppliers often raise prices by letter or a line in the small print, and invoices drift away from agreed rates without anyone noticing. Keeping a list of agreed prices for the top suppliers, challenging every increase against the contract's indexation clause and spot-checking invoices each month protects savings that have already been won.

                ## Milestones
                1. Agreed unit prices and indexation terms recorded for the top twenty suppliers.
                2. Every announced price increase checked against what the contract allows.
                3. A monthly sample of invoices compared with agreed rates, with overcharges claimed back.
                4. A log of increases challenged, accepted or reversed, with the value of each.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every price increase from a top-twenty supplier is checked against the contract, and a monthly invoice sample shows agreed rates or credits claimed."
                cadence: rolling
              tasks:
                - "Record agreed prices and indexation terms for the top twenty suppliers"
                - "Compare a sample of this month's invoices with agreed rates @recurring(monthly:26)"
                - "Challenge in writing any increase the contract does not allow"
                - "Review announced increases across all suppliers with category owners @recurring(quarterly)"
            - name: Cloud and hosting cost review
              description: |-
                ## Purpose
                For a software or online business, cloud bills can be the second largest cost after people, and they grow with every forgotten test environment and oversized server. A monthly review with the engineering lead of spend by service, idle resources and commitment discounts usually trims the bill without touching performance.

                ## Milestones
                1. Cloud spend broken down by service, environment and team using resource tags.
                2. Idle or oversized resources listed with the monthly cost of each.
                3. Clean-up actions agreed with engineering, each with a named owner.
                4. A decision on reserved capacity or committed-use discounts, based on twelve months of steady usage.

                ## Notes
                Commitment discounts lock you in for one to three years. Commit only to the baseline you are confident of and keep growth on demand.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly cloud cost review is held with engineering, idle resources are cleaned up, and spend per environment is reported against the previous month."
                cadence: rolling
              tasks:
                - "Ask engineering to tag cloud resources by environment and team"
                - "List idle and oversized resources with their monthly cost"
                - "Review cloud spend by service with the engineering lead @recurring(monthly:22)"
                - "Decide which steady workloads justify a commitment discount"
            - name: Utility and energy bill checks
              description: |-
                ## Purpose
                Energy, water and waste bills are often paid by direct debit and never read, so estimated readings, wrong tariffs and charges for closed sites run on for years. Checking each bill against meter readings monthly, and the tariff against the market before each contract ends, often recovers overcharges as well as lowering the rate.

                ## Milestones
                1. Every site's utility accounts listed with supplier, tariff, contract end and meter numbers.
                2. Monthly bills checked against actual meter readings, with estimates corrected.
                3. Tariffs compared with the market before each contract end, through a broker or direct quotes.
                4. Simple consumption measures, such as timers and heating schedules, agreed with each site.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every utility account is listed with its contract end, bills are checked against meter readings monthly, and each tariff is compared with the market before renewal."
                cadence: rolling
              tasks:
                - "List utility accounts for every site with meter numbers and contract ends"
                - "Submit meter readings and check the bill against them @recurring(monthly:9)"
                - "Get market quotes before each energy contract ends @recurring(yearly)"
                - "Agree heating, lighting and equipment schedules with each site lead"
            - name: Quarterly category review rotation
              description: |-
                ## Purpose
                A business cannot review every cost at once, and a single big review fades as soon as it ends. Rotating through spend categories, one or two each quarter, means that over two years every category gets a proper look at need, supplier, price and specification, and cost review becomes a habit rather than a one-off exercise.

                ## Milestones
                1. A two-year rotation plan placing every spend category in a quarter, largest first.
                2. A standard category review pack covering spend trend, suppliers, contracts and options.
                3. Each quarter's review completed, with its initiatives entered in the tracker.
                4. The rotation updated once a year as spend shifts.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter at least one spend category has a completed review pack and its initiatives are in the tracker, following the rotation plan."
                cadence: cyclic
              tasks:
                - "Order spend categories by size and place each in a quarter"
                - "Build a standard review pack for category reviews"
                - "Run the scheduled category review with its budget holder @recurring(quarterly)"
                - "Enter the review's initiatives in the pipeline tracker"
            - name: Reading supplier contracts for cost traps
              description: |-
                ## Purpose
                Most overspend with suppliers is written into the contract: automatic renewal with a long notice period, annual increases tied to an index plus a margin, minimum volume commitments, termination fees and charges for going over usage tiers. Learning to spot these six or seven clauses lets a manager judge in minutes whether a contract can be changed, and when.

                ## Milestones
                1. A one-page checklist of cost clauses to look for in any supplier contract.
                2. The checklist applied to the five largest contracts, with findings noted.
                3. A summary of which contracts can be exited or renegotiated, and from what date.
                4. Questions for a lawyer listed wherever a clause is unclear or a dispute is likely.

                ## Notes
                This is reading for commercial terms, not legal interpretation. If a clause matters to a decision, ask a lawyer to confirm what it means.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A cost clause checklist exists and has been applied to the five largest contracts, with exit and renegotiation dates recorded for each."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a checklist of renewal, indexation, minimum and termination clauses"
                - "Read the five largest contracts against the checklist"
                - "Note the earliest exit or renegotiation date for each"
                - "List any clause that needs a lawyer's reading before you act"
            - name: Negotiation preparation for a supplier renewal
              description: |-
                ## Purpose
                Buyers who walk into a renewal unprepared tend to accept the supplier's first discount as a win. Preparing properly means knowing your spend history, the supplier's share of your business and yours of theirs, the market price, a credible alternative and the concessions you can trade other than price, such as term, volume or payment timing.

                ## Milestones
                1. A preparation sheet for one upcoming renewal: spend history, market price, your alternative and target outcome.
                2. A walk-away point agreed with the sponsor before the first meeting.
                3. A list of non-price concessions to trade, such as contract length, volume or a reference.
                4. The negotiation held and the outcome compared with the target.
                5. Lessons written up for the next renewal.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One renewal is negotiated from a written preparation sheet with a walk-away point, and the outcome is recorded against the target."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick the next renewal above the agreed value as the practice case"
                - "Gather three years of spend history and two market quotes"
                - "Write your alternative, target outcome and walk-away point"
                - "Ask the agent to draft opening questions and likely supplier objections"
                - "Compare the result with the target and note what to repeat"
            - name: Total cost of ownership comparisons
              description: |-
                ## Purpose
                The cheapest quote is often the most expensive choice once installation, training, maintenance, consumables, switching costs and the staff time it absorbs are added. Learning to build a simple total cost of ownership comparison over the life of a purchase stops the programme buying savings that turn into higher costs two years later.

                ## Milestones
                1. A standard comparison sheet covering purchase, set-up, running, support, exit and internal time costs.
                2. The sheet used to compare at least two options for a live decision.
                3. Assumptions for each cost listed so someone else can check them.
                4. The decision recorded with the lifetime cost beside the headline price.

                ## Notes
                Start from the **Purchase decision** template and add the lifetime cost table to it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A lifetime cost comparison has been used for one live decision, with assumptions written down and the choice recorded beside the headline price."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Set up a comparison sheet with purchase, running, support and exit costs"
                - "Add a line for staff time spent using and managing each option"
                - "Compare two options for a decision now on the table"
                - "Record the decision and how it differed from the cheapest quote"
            - name: Zero-based review of one department's costs
              description: |-
                ## Purpose
                Incremental budgeting carries last year's spend forward, so costs that once had a reason keep running long after the reason has gone. A zero-based review asks one department to justify each activity and its cost from nothing, which is demanding enough that trying it on a single department first is wiser than rolling it out everywhere.

                ## Milestones
                1. One department chosen and its costs listed by activity rather than by ledger account.
                2. Each activity described with what it delivers and what would happen if it stopped.
                3. Activities sorted into keep, reduce and stop, with the cost of each.
                4. Agreed reductions entered in the tracker and lessons noted before any wider rollout.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "One department's costs are rebuilt by activity, each sorted into keep, reduce or stop, and the agreed reductions are in the tracker."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Choose a department with a willing head and mostly discretionary spend"
                - "List the department's costs by activity with its head"
                - "Write what each activity delivers and the effect of stopping it"
                - "Sort activities into keep, reduce and stop and agree the reductions"
            - name: Should-cost model for a key purchased item
              description: |-
                ## Purpose
                When one supplier provides a large share of a critical input, such as packaging, a manufactured part or a managed service, the price is often set by history rather than by what it costs to make. Building a should-cost model from materials, labour, overhead and a fair margin gives the negotiation a fact base the supplier has to engage with.

                ## Milestones
                1. The item's cost broken into materials, labour, energy, logistics, overhead and margin.
                2. Each element estimated from published indices, quotes or industry data, with sources noted.
                3. The gap between the modelled cost and the current price identified.
                4. The model used to frame a conversation with the supplier, with the outcome recorded.

                ## Notes
                Share the structure of the model with the supplier, not your estimates. Asking them to fill the gaps often surfaces more than any argument.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A should-cost model with sourced assumptions exists for one key item and has been used in a recorded supplier conversation."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Choose one high-spend item with a single main supplier"
                - "Break its cost into materials, labour, overhead, logistics and margin"
                - "Estimate each element from indices or quotes and note the source"
                - "Use the model to open a cost conversation with the supplier"
            - name: Price, volume and specification levers
              description: |-
                ## Purpose
                Negotiating a lower price is only one of three levers. Buying less, such as fewer print runs or shorter bookings for occasional services, and buying something simpler, such as standard rather than premium service levels, often save more and strain supplier relationships less. Testing every category against all three changes what the programme looks for.

                ## Milestones
                1. A worked example for three categories showing a price, a volume and a specification option for each.
                2. The savings from volume and specification options estimated beside the price option.
                3. At least one volume or specification change agreed with the budget holder.
                4. The three-lever question added to the category review pack.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three categories have price, volume and specification options costed, and at least one non-price change is agreed and in the tracker."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Pick three categories with different types of spend"
                - "Write one price, one volume and one specification option for each"
                - "Estimate the annual saving of every option"
                - "Agree one volume or specification change with its budget holder"
            - name: Benchmarking costs against comparable businesses
              description: |-
                ## Purpose
                Without a reference point it is hard to say whether a cost is high or simply what that thing costs. Benchmarks from industry associations, published accounts of similar companies, brokers and purchasing groups give ranges for ratios such as rent per desk, software cost per employee or finance cost as a share of revenue, and show where to look first.

                ## Milestones
                1. Five to eight cost ratios chosen that matter for your business model.
                2. Benchmark ranges gathered from at least two sources, each with its date and sample noted.
                3. Your own ratios calculated on the same basis.
                4. The two or three biggest gaps chosen as review priorities.

                ## Notes
                Benchmarks are a prompt for questions, not a target. A higher cost can be a deliberate choice that wins customers.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Your figures for five to eight cost ratios sit beside benchmark ranges from at least two dated sources, with the biggest gaps chosen for review."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose the cost ratios that matter most for your business model"
                - "Collect benchmark ranges from an industry body and one other source"
                - "Calculate your own ratios on the same basis"
                - "Pick the largest gaps as priorities for the category rotation"
            - name: Software stack rationalisation
              description: |-
                ## Purpose
                Growing businesses often pay for three project tools, two file-sharing services and several survey and design apps because each team bought its own. Mapping tools by what they do and choosing one standard per job cuts licence costs, reduces security exposure and simplifies training, but it needs the people who use each tool in the decision.

                ## Milestones
                1. Applications grouped by function, with overlaps highlighted.
                2. A standard tool chosen for each overlapping function, with input from the main users.
                3. Migration plans and dates for the tools being retired, including data export.
                4. Retired tools cancelled at their notice dates and the saving recorded.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each overlapping function has one chosen standard, retired tools are cancelled at their notice dates, and the annual saving is recorded."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Group the licence register by function and mark overlaps"
                - "Run a short session with the users of each overlapping tool"
                - "Choose the standard tool for each function and set migration dates"
                - "Cancel retired tools after data export and log the saving"
            - name: Tail spend supplier consolidation
              description: |-
                ## Purpose
                Hundreds of small suppliers paid a few times a year cost more to manage than they are worth, and they usually charge list price. Consolidating categories like stationery, cleaning, maintenance and courier work onto a few preferred suppliers gives better rates and fewer bills, onboarding checks and payments to process.

                ## Milestones
                1. Suppliers below an agreed annual spend grouped by what they supply.
                2. Three to five categories picked where one or two suppliers could cover the need.
                3. Preferred suppliers agreed, with rates and terms, for each consolidated category.
                4. Staff told which suppliers to use, and new purchases from the tail tracked for three months.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "At least three tail categories are consolidated onto preferred suppliers with agreed rates, and the count of active small suppliers is below the baseline."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Filter the baseline for suppliers below the tail threshold"
                - "Group tail suppliers by what they supply"
                - "Get quotes from two or three suppliers for each consolidated category"
                - "Publish the preferred supplier list to everyone who buys"
            - name: Competitive tender for a top-five supplier
              description: |-
                ## Purpose
                Large suppliers who have not faced competition for several years rarely offer their best terms unprompted. Running a structured tender, with clear requirements, evaluation criteria agreed before bids arrive and a realistic timetable, either moves the business to better value or gives the incumbent a reason to match it.

                ## Milestones
                1. A requirement document agreed with the users, covering scope, service levels and volumes.
                2. Evaluation criteria and weightings fixed before any bids are opened.
                3. Three to five suppliers invited, including the incumbent.
                4. Bids scored by a panel and the decision recorded with its reasons.
                5. The new contract or renegotiated terms signed before the current notice deadline.

                ## Notes
                Start from the **Vendor** template for each bidder. Switching costs and transition risk belong in the evaluation, not as an afterthought.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A tender for one top-five supplier is completed with pre-agreed criteria, scored bids and a recorded award before the notice deadline."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Pick the top-five supplier with the soonest notice date"
                - "Write the requirement with the main users of the service"
                - "Fix the evaluation criteria and weightings before inviting bids"
                - "Score bids with a panel and record the award decision"
            - name: Office space and occupancy review
              description: |-
                ## Purpose
                Since hybrid working became normal, many offices sit half empty on most days while rent, service charges, property taxes, cleaning and utilities are paid on every square metre. Measuring real occupancy over a few weeks gives the facts for choosing between keeping the space, subletting part of it, consolidating floors or moving.

                ## Milestones
                1. Desk and meeting room use measured over four representative weeks.
                2. Full occupancy cost per desk calculated, including rent, service charge, property taxes and running costs.
                3. Options costed: stay, sublet part, consolidate, or move at the next break.
                4. A recommendation agreed with leadership, with staff views gathered.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Four weeks of occupancy data and a full cost per desk support a recorded leadership decision on the office footprint."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Count desk and room use on set days for four weeks"
                - "Add up rent, service charge, property taxes and running costs per desk"
                - "Cost the stay, sublet, consolidate and move options"
                - "Survey staff on which days and spaces they actually need"
            - name: Lease renegotiation at a break or renewal
              description: |-
                ## Purpose
                Break clauses and lease expiries are the moments a tenant has most say over property cost, and that say is lost if notice is not served exactly as the lease requires. Planning twelve to eighteen months ahead with a surveyor or property agent opens the choice between a rent reduction, a rent-free period, a smaller space or a move.

                ## Milestones
                1. The lease's break and expiry dates, notice requirements and conditions written on one page.
                2. A property agent or surveyor engaged to advise on market rent and options.
                3. The landlord approached with a clear ask, backed by the occupancy review.
                4. Any notice served by the method and date the lease requires, confirmed by your lawyer.
                5. New terms or an exit agreed in writing.

                ## Notes
                Break clauses often carry conditions, such as rent paid up to date or the space returned in a set state. Missing one can void the break, so have a lawyer check them early.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The lease break or renewal is handled with notice served correctly, professional advice taken, and new terms or an exit agreed in writing."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write the break date, expiry, notice method and conditions on one page"
                - "Engage a property agent to advise on market rent"
                - "Ask your lawyer to confirm the break conditions and notice method"
                - "Put the rent, term and space request to the landlord in writing"
            - name: Insurance programme remarketing
              description: |-
                ## Purpose
                Business insurance often renews year after year with the same insurer, while the business changes size, sells different things and adds risk controls that would earn a lower premium. Asking a broker to remarket the programme, with an accurate picture of what the business now does and owns, can lower premiums or improve cover for the same money.

                ## Milestones
                1. A list of current policies with insurer, premium, cover limits, excesses and renewal dates.
                2. Business information updated: turnover, headcount, assets, sites and risk controls.
                3. A broker briefed to approach the market at least two months before the main renewal.
                4. Quotes compared on cover, exclusions and excesses as well as premium.
                5. The renewal decision recorded with its reason.

                ## Notes
                Do not cut cover to hit a saving without understanding the risk taken on. A lower premium for a larger excess is a decision for leadership, not for the programme alone.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Before the main renewal the broker has remarketed the programme, quotes are compared on cover and price, and the decision is recorded."
                cadence: cyclic
              tasks:
                - "List every policy with premium, limits, excess and renewal date"
                - "Update turnover, headcount, assets and risk controls for the broker"
                - "Brief the broker three months before the main renewal @recurring(yearly)"
                - "Compare quotes on cover and exclusions, not on premium alone"
            - name: Professional fees review
              description: |-
                ## Purpose
                Legal, consulting, recruitment, tax and advisory fees are often agreed by different managers on hourly rates with no estimate, so the total surprises everyone at year end. Pulling all professional fees together, agreeing fixed fees or capped estimates for repeat work and requiring a written scope for every engagement brings this spend into view.

                ## Milestones
                1. Twelve months of professional fees listed by firm, type of work and the manager who engaged them.
                2. Repeat work identified where a fixed fee or retainer would cost less than hourly billing.
                3. Fee proposals requested from the main firms for that work.
                4. A rule in place that new engagements need a written scope and estimate.

                ## Notes
                Keep this review about how fees are agreed. Changing your external accountant is its own decision, weighed on quality and continuity as well as fees.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "All professional fees for the last year are listed by firm, fixed or capped fees are agreed for repeat work, and new engagements require a written scope."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List twelve months of professional fees by firm and type of work"
                - "Mark repeat work suited to a fixed fee or capped estimate"
                - "Ask the main firms for fixed fee proposals on that work"
                - "Set the rule that every engagement starts with a scope and estimate"
            - name: Agency and marketing retainer review
              description: |-
                ## Purpose
                Agency retainers for marketing, PR, design or paid media often outlive the plan they were set up for, and the hours delivered drift away from the hours paid. Comparing what each retainer delivered over the last six months with its cost, and checking the media and tool fees passed through, shows which to keep, rescope or move to project fees.

                ## Milestones
                1. Every agency retainer listed with monthly fee, scope, notice period and pass-through costs.
                2. Six months of deliverables and reported hours compared with the fee.
                3. Results each agency contributed to, such as leads or campaigns, reviewed with the marketing lead.
                4. A decision for each retainer: keep, rescope, move to project fees or end.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each agency retainer has a six-month delivery and cost comparison and a recorded keep, rescope, project or end decision."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List each retainer with fee, scope, notice and pass-through costs"
                - "Ask each agency for six months of hours and deliverables"
                - "Review the results of each retainer with the marketing lead"
                - "Record a keep, rescope, project or end decision for each"
            - name: Fleet, freight and courier cost review
              description: |-
                ## Purpose
                For businesses that move goods or people, vehicle leases, fuel, maintenance, freight and courier charges add up to a large cost spread across many small bills. Pulling them together shows where fuel cards are misused, where vans sit idle, where weight and remote-area surcharges are paid without challenge, and where routes could be combined.

                ## Milestones
                1. All vehicle, fuel, freight and courier costs combined into one view by site and supplier.
                2. Vehicle use measured by mileage or days used per month.
                3. Courier and freight invoices sampled for surcharges and wrong service levels.
                4. Actions agreed, such as returning idle vehicles, changing service levels or retendering carriers.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "One view of fleet and delivery costs exists, idle vehicles and surcharges are identified, and the agreed actions are in the tracker."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Combine vehicle, fuel, freight and courier spend into one sheet"
                - "Record monthly mileage or days used for each vehicle"
                - "Sample courier invoices for surcharges and premium services"
                - "Agree which vehicles to return and which carriers to retender"
            - name: Telecoms and mobile contracts review
              description: |-
                ## Purpose
                Phone lines, broadband circuits, mobile contracts and roaming charges are among the most common homes for forgotten spend: lines for closed sites, handsets for leavers, data bundles far above use. A one-off audit of every number and circuit against its user and usage, followed by a yearly check, usually finds lines to cancel and plans to cut.

                ## Milestones
                1. Every phone number, mobile line and data circuit listed with user, site, plan and contract end.
                2. Lines with no current user, or no use for three months, identified.
                3. Unused lines cancelled and plans resized to actual use.
                4. A yearly check of the inventory against the staff list in place.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every line and circuit is matched to a user and site, unused ones are cancelled, and plans match actual usage."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask each provider for a full list of lines and circuits on the account"
                - "Match every line to a current user and site"
                - "Cancel unused lines and resize plans to actual use"
                - "Check the line inventory against the latest staff list @recurring(yearly)"
            - name: Outsource or in-house decision for one function
              description: |-
                ## Purpose
                Functions such as IT support, cleaning, warehousing or customer service can sometimes be done more cheaply by a specialist, and sometimes the reverse when an outsourced contract has grown expensive. A structured comparison of the full in-house cost, including management time and holiday cover, with outsourced quotes and the risks of each puts the choice on facts.

                ## Milestones
                1. The function's full in-house cost, including salaries, employment costs, tools, space and management time.
                2. Two or three outsourced quotes for the same scope and service levels.
                3. Risks of each option listed, such as lost knowledge, transition disruption and contract lock-in.
                4. A decision recorded, with an implementation plan if the model changes.

                ## Notes
                If staff would transfer to or from a provider, employment law may protect their terms. Take HR and legal advice before announcing anything.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison of full in-house cost with at least two outsourced quotes, risks listed, supports a recorded decision for one function."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Choose one function where the current model is in question"
                - "Calculate its full in-house cost including management time"
                - "Get two outsourced quotes against the same scope"
                - "Record the decision and the risks accepted"
            - name: Contractor and agency labour spend review
              description: |-
                ## Purpose
                Temporary staff and contractors brought in for a peak or a project often stay for years at day rates well above the cost of an employee, and agency mark-ups are rarely reviewed. Listing everyone paid through agencies or as a contractor, with start date, rate and role, shows which engagements to convert, which to end and which agency terms to renegotiate.

                ## Milestones
                1. Every contractor and agency worker listed with role, start date, rate, agency and manager.
                2. Long-running roles compared with the full cost of an equivalent employee.
                3. Agency mark-ups compared across suppliers and a preferred agency list agreed.
                4. A decision for each long-running role: end, convert, or continue with a reason.

                ## Notes
                Converting contractors or ending engagements can raise employment status and tax questions. Check with HR and your adviser before changing anyone's arrangement.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every contractor and agency worker is listed with rate and tenure, and each role running over six months has a recorded end, convert or continue decision."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List contractors and agency workers with rate, start date and manager"
                - "Compare long-running roles with the full cost of an employee"
                - "Compare agency mark-ups and agree a preferred agency list"
                - "Record an end, convert or continue decision for each long-running role"
            - name: Overtime and premium pay review
              description: |-
                ## Purpose
                Overtime, weekend premiums and callout payments can become a fixed part of pay without anyone deciding it, often because of rota gaps or a single process bottleneck. Tracking premium hours by team and reason each month shows whether a different rota, an extra part-time hire or a process fix would cost less than the premiums.

                ## Milestones
                1. Twelve months of overtime and premium pay listed by team, reason and person.
                2. Teams with persistent premium hours identified, with the cause noted.
                3. Options costed for the top three teams, such as rota changes, part-time cover or a process fix.
                4. A monthly premium pay report shared with team managers.

                ## Notes
                Premium pay may be set in contracts or collective agreements, and changes can need consultation. Agree the approach with HR first.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Premium pay is reported monthly by team and reason, and the three highest teams each have a costed alternative agreed with their manager."
                cadence: rolling
              tasks:
                - "Pull twelve months of overtime and premium pay from payroll by team"
                - "Ask managers of the top three teams for the reasons behind the hours"
                - "Cost a rota change or part-time cover for each of those teams"
                - "Send each manager their team's premium hours and cost @recurring(monthly:28)"
            - name: Spans and layers organisation review
              description: |-
                ## Purpose
                As organisations grow, management layers multiply and some managers end up with one or two direct reports, which slows decisions and adds cost. Mapping every reporting line to count layers and spans of control gives leadership a fact base for redesign, without starting from a list of names.

                ## Milestones
                1. An organisation chart built from HR data showing every reporting line.
                2. The number of layers from chief executive to front line counted for each function.
                3. Managers with fewer than an agreed number of direct reports identified, with reasons where known.
                4. Design principles for spans and layers agreed by leadership before any change is proposed.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A spans and layers analysis covering every function is presented to leadership, and agreed design principles are recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Export reporting lines from the HR system into an organisation chart"
                - "Count layers and direct reports for each manager"
                - "Flag narrow spans and note the known reasons"
                - "Agree design principles with leadership before any redesign"
            - name: Alternatives to redundancy options paper
              description: |-
                ## Purpose
                Where headcount cost has to fall, redundancy is the most expensive option in morale, knowledge and severance, and often not the only one. Costing alternatives such as a hiring freeze, not renewing fixed-term contracts, voluntary reduced hours, sabbaticals, redeployment and pausing pay rises gives leadership real choices and shows staff that other routes were weighed.

                ## Milestones
                1. The headcount saving required stated, with the date it must be in place.
                2. Each alternative costed with its saving, timing and effect on the team.
                3. Legal and contractual limits on each alternative checked with HR or an employment adviser.
                4. An options paper presented to leadership with a recommended combination.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An options paper costs at least five alternatives to redundancy, notes the limits checked with HR, and leadership's decision is recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write down the headcount saving needed and the date it must start"
                - "Cost a hiring freeze, reduced hours, sabbaticals and redeployment"
                - "Check the contractual limits of each alternative with HR"
                - "Present the options paper with a recommended combination"
            - name: Fair-process restructuring with HR and legal advice
              description: |-
                ## Purpose
                If roles must go, how it is done matters as much as the saving: a poor process brings legal claims, lost trust and the departure of the people you most wanted to keep. Planning the restructure with HR and an employment lawyer, covering selection criteria, consultation and support for those affected, protects people and the business.

                ## Milestones
                1. Employment advice taken on the legal process and timings in each country where staff are affected.
                2. A business case for the new structure, with objective and documented selection criteria.
                3. A consultation plan with dates, meetings and the information to be shared.
                4. Support arranged for affected staff, such as notice, references and outplacement.
                5. Full one-off costs and annual savings recorded, including severance and notice pay.

                ## Notes
                This project organises the work. The legal steps, consultation periods and any notifications to authorities must come from your employment lawyer or HR adviser.
              priority: high
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The restructure runs to a plan approved by an employment lawyer, with documented criteria, consultation records, and one-off costs and savings reported."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Book a meeting with an employment lawyer or HR adviser"
                - "Write the business case and objective selection criteria"
                - "Set the consultation timetable with the lawyer's input"
                - "Arrange notice, references and outplacement support for affected staff"
                - "Record one-off costs and annual savings in the tracker"
            - name: Year-end supplier renegotiation round
              description: |-
                ## Purpose
                Suppliers set their prices for the coming year in the last quarter, and many are open to a conversation before their own targets are fixed. A planned round of meetings with the top suppliers in the two months before year end, each with a clear ask, catches increases before they are invoiced and settles terms for the year.

                ## Milestones
                1. The top ten suppliers chosen, each with spend, contract position and a written ask.
                2. Meetings booked with every chosen supplier at least six weeks before year end.
                3. Outcomes recorded: price held, reduced, increase limited or new terms.
                4. Agreed changes confirmed in writing and added to the agreed price list.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Ten top suppliers have been met before year end against a written ask, and every agreed change is confirmed in writing."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Pick ten suppliers by spend and expected price increase"
                - "Write a one-line ask for each supplier"
                - "Book meetings at least six weeks before year end"
                - "Confirm agreed terms in writing and update the agreed price list"
            - name: Programme results update to the board or owners
              description: |-
                ## Purpose
                Boards and owners lose patience with cost programmes that report activity rather than money. A regular update showing target, pipeline by stage, realised savings in the accounts, one-off costs, risks and the next quarter's big decisions keeps support for the programme and gets the hard calls made.

                ## Milestones
                1. A standard one-page programme dashboard with target, pipeline, realised savings and one-off costs.
                2. The first update presented, with the decisions requested clearly marked.
                3. Decisions and actions from the meeting recorded and sent to their owners.
                4. A quarterly slot agreed on the board or owners' agenda.

                ## Notes
                Start from the **Board meeting** template for the paper and the minutes.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A programme update with realised savings reconciled to the accounts is presented within 120 days, and a quarterly agenda slot is agreed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Build a one-page dashboard from the tracker and realisation check"
                - "List the decisions the board or owners need to take"
                - "Present the update and record decisions and actions"
                - "Prepare the quarterly programme update for the board @recurring(quarterly)"
            - name: Programme close-out and year-two plan
              description: |-
                ## Purpose
                Programmes that never formally end either fade or turn into permanent firefighting. Closing year one with a review of savings realised against target, what worked, what damaged service and which savings could creep back sets up a lighter year-two plan built into normal budgeting and the category rotation.

                ## Milestones
                1. Year-one realised savings totalled against the target and against one-off costs.
                2. A review held with budget holders and staff on what worked and what caused harm.
                3. Savings at risk of reversal listed, with a control to hold each.
                4. A year-two plan agreed, with smaller targets and named owners.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A close-out report compares realised savings with target, lists savings at risk with controls, and a year-two plan with owners is approved."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Total realised savings and one-off costs for the year"
                - "Hold a review with budget holders on what worked and what hurt"
                - "List savings at risk of creeping back and a control for each"
                - "Agree the year-two plan and its owners with the sponsor"
            - name: Half-day cost review for an owner-run business
              description: |-
                ## Purpose
                An owner of a small business with no finance team does not need a programme office, just an honest afternoon with the bank statements. Going through three months of outgoings line by line, asking for each whether it is still needed, could be cheaper or could be bought less often, typically finds enough to cover a monthly bill or two.

                ## Milestones
                1. Three months of business bank and card statements exported or printed.
                2. Every regular outgoing marked keep, cut, switch or query.
                3. Cancellations and switches made within a week of the review.
                4. The monthly saving written down and the next review booked.

                ## Notes
                Ask your bookkeeper or accountant about any line marked query. They often know what a cryptic direct debit is for.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Three months of outgoings are each marked keep, cut, switch or query, the cuts are made within a week, and the monthly saving is recorded."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "Export three months of business bank and card statements"
                - "Mark each regular outgoing keep, cut, switch or query"
                - "Make the cancellations and switches within a week"
                - "Repeat the half-day review with fresh statements @recurring(yearly)"
            - name: Responding to a departmental budget cut request
              description: |-
                ## Purpose
                Managers are often told to find ten percent from their budget by the end of the month, with little guidance. Responding with a costed menu of options, ranked by saving and by effect on the team's results, puts the manager in a stronger position than offering across-the-board trims, and makes the trade-offs visible to whoever asked.

                ## Milestones
                1. The department's spend for the last twelve months listed by type and supplier.
                2. Options listed with annual saving, timing and effect on service or results.
                3. Options ranked into a menu that meets the request at more than one level of impact.
                4. The menu discussed with the finance partner and the requester, and the choice recorded.

                ## Notes
                Show what each option stops the team doing. A cut presented with its consequence is easier to approve, or to reject on purpose.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A ranked options menu meeting the requested cut, with saving and impact for each option, is presented and the chosen options are recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask finance for twelve months of your department's spend by line"
                - "List possible savings with their timing and effect on results"
                - "Rank the options into a menu that meets the request"
                - "Ask the agent to draft a one-page cover note explaining the trade-offs"
            - name: Runway extension cost plan for a founder-led company
              description: |-
                ## Purpose
                Startups usually face the cost question when a raise slips or revenue grows slower than planned, and by then every month of runway matters. Splitting burn into spend that keeps the product and customers alive and spend tied to growth bets, then setting trigger points for deeper cuts, lets a founder buy time deliberately rather than in a panic.

                ## Milestones
                1. Monthly burn split into core operations, growth investment and discretionary spend.
                2. Runway calculated at current burn and under two lower-burn scenarios.
                3. Cuts agreed for the first scenario, with dates and owners.
                4. Trigger points set, such as cash falling below a set number of months, that start the second scenario.
                5. The plan shared with the board or main investors.

                ## Notes
                Keep cash forecasting in its own model. This plan decides what to cut and when, and takes its runway figures from that forecast.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A runway plan with two costed scenarios, dated cuts and written trigger points is agreed by the founders and shared with the board."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Split last quarter's monthly burn into core, growth and discretionary"
                - "Calculate runway at current burn and under two lower scenarios"
                - "Agree the first round of cuts with owners and dates"
                - "Write the cash triggers that start the deeper scenario"
            - name: Post-acquisition integration savings tracking
              description: |-
                ## Purpose
                Acquisitions are often justified by promised cost savings from combining the two businesses, such as one finance system, one office and combined supplier contracts, that later prove hard to find in the accounts. Turning that savings case into named initiatives with owners, baselines from both businesses and separately tracked integration costs shows whether the deal is delivering what was promised.

                ## Milestones
                1. The deal savings case broken into initiatives with owner, value and target date.
                2. Combined baselines set from both businesses' spend before completion.
                3. One-off integration costs tracked separately from savings.
                4. Realised integration savings reported each quarter against the deal case.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Every saving in the deal case is an owned initiative with a baseline, and quarterly reports compare realised savings and integration costs with the case."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Get the cost saving figures from the acquisition case"
                - "Break each promised saving into initiatives with owners and dates"
                - "Set combined baselines from both businesses' pre-completion spend"
                - "Track one-off integration costs in a separate column"
            - name: Spend classification taxonomy and analytics
              description: |-
                ## Purpose
                Once a business has several entities, ledgers or thousands of suppliers, a spend baseline built by hand cannot be refreshed often enough to be useful. A consistent spend taxonomy, mapping rules from ledger accounts and supplier names to categories, and a repeatable data pull let category reviews start from current data and allow comparison across sites.

                ## Milestones
                1. A spend taxonomy with two or three levels agreed with procurement and finance.
                2. Mapping rules that classify at least nine tenths of spend by value automatically.
                3. A repeatable data pull across all entities and ledgers.
                4. A category dashboard that budget holders can filter by site and supplier.

                ## Notes
                A published classification scheme is a fair starting point, but keep your own top level simple enough that budget holders recognise it.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Spend from all entities is classified by agreed rules covering at least ninety percent of value, refreshed by a repeatable pull and shown in a category dashboard."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Draft a two-level spend taxonomy with procurement and finance"
                - "Write mapping rules from ledger accounts and supplier names"
                - "Measure what share of spend the rules classify correctly"
                - "Build a category dashboard filtered by site and supplier"
            - name: Gainshare agreements with strategic suppliers
              description: |-
                ## Purpose
                With a few critical suppliers, the biggest savings come from changing how the work is done, which neither side will invest in if only one benefits. A gainshare agreement sets a baseline, defines how savings are measured and splits them for a set period, giving the supplier a reason to bring ideas rather than defend its price.

                ## Milestones
                1. One or two suppliers chosen where process change could save more than price negotiation.
                2. A baseline and measurement method agreed with each supplier.
                3. The share, duration and review points written into a contract variation reviewed by your lawyer.
                4. Savings measured and shared at each review point.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A gainshare variation with an agreed baseline, measurement method and split is signed with one strategic supplier and reviewed at its first review point."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Pick a supplier whose way of working drives a large part of the cost"
                - "Agree the baseline and how savings will be measured"
                - "Have your lawyer review the contract variation"
                - "Measure and share savings at the first review point"
            - name: Cost discipline indicators after the programme
              description: |-
                ## Purpose
                Costs creep back within two years of most programmes, as new tools, suppliers and roles are added without the same scrutiny. A small set of indicators, such as operating cost as a share of revenue, software cost per employee, cost per order and the number of active suppliers, tracked monthly and shown to budget holders, keeps the gains visible.

                ## Milestones
                1. Five or six indicators chosen, each with a clear definition and a baseline.
                2. A monthly log of the indicators with a target range for each.
                3. Indicators outside their range explained by the budget holder.
                4. The indicator set reviewed each year as the business changes.

                ## Notes
                Start from the **Metrics log** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Five or six cost indicators are logged monthly against target ranges, and every result outside its range has a written explanation."
                cadence: rolling
              tasks:
                - "Choose five or six cost indicators and write their definitions"
                - "Set a baseline and target range for each indicator"
                - "Update the indicator log from the month's accounts @recurring(monthly:7)"
                - "Ask budget holders to explain any indicator outside its range"
---

# Business Cost Reduction Programme

This area is for owners and leadership teams who need lower costs without breaking what makes the business work, from a small firm going through its bank statements to an enterprise running a multi-site programme. It starts with the foundations (a charter and target, a twelve-month spend baseline, protected spend, savings rules and a renewal calendar), then the operating machinery of tracking, renewal gates and category rotation, the negotiation and analysis skills, reviews of software, suppliers, property, professional fees and headcount spend, dated moments such as the year-end renegotiation round and board updates, situations for owners, managers, founders and acquirers, and finally specialist spend analytics, gainshare deals and lasting cost indicators.

What repeats is a weekly tracker update and challenge panel, monthly savings realisation, licence, cloud, utility, invoice rate and premium pay checks, quarterly category reviews, supplier increase reviews and board updates, and yearly baseline, insurance and line inventory work. The Operational checklist, Purchase decision, Vendor, Board meeting and Metrics log templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
