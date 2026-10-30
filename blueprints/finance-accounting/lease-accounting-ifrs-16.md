---
id: finance-accounting.lease-accounting-ifrs-16
name: Lease Accounting Under IFRS 16
description: "A complete lease inventory, defensible judgements on term, discount rate and exemptions, schedules that post every month, controls the auditor can test and a disclosure note that reconciles first time."
category: business
version: 1.0.0
tags: [finance-accounting, lease-accounting-ifrs-16, enterprise, manager, ifrs, leases, right-of-use-assets, lease-liabilities]
author: Aurum Technology
starter_structure:
  templates:
    - month-end-close
    - compliance-control
    - purchase-decision
    - remediation-plan
    - onboarding-30-60-90
  pillars:
    - name: Finance & Accounting
      emoji: "🧾"
      description: "The money side of a business: bookkeeping and the monthly close, cash flow, budgeting and forecasting, billing and collections, payroll, tax, audit and financial controls."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Lease Accounting Under IFRS 16
          description: "Identifying leases, calculating right-of-use assets and liabilities and keeping lease schedules compliant with accounting standards for larger businesses."
          projects:
            - name: Complete lease inventory across every entity
              description: |-
                ## Purpose
                Leases hide in property files, fleet agreements, IT contracts and purchase orders signed at site level, and an inventory built only from the rent ledger usually misses a third of them. One list of every arrangement that might contain a lease, by entity and asset class, is the starting point for every schedule, judgement and disclosure in this area.

                ## Milestones
                1. Every entity's rent, hire, fleet and equipment payments for the last twelve months extracted from the ledger and matched to a contract.
                2. Property, facilities, fleet, IT and procurement leads each asked in writing for any lease not on the list.
                3. One inventory showing entity, lessor, asset class, location, start date, end date and annual payment for each arrangement.
                4. Arrangements with no contract on file flagged with an owner chasing the document.

                ## Notes
                Search the payables ledger by supplier as well as by account code. Equipment hire and vehicle rentals are often coded to repairs, travel or cost of sales.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An inventory of every lease and possible lease across all entities exists, each line matched to a contract or flagged with a named owner."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Extract twelve months of rent, hire and fleet payments by supplier for each entity"
                - "Email property, fleet, IT and procurement leads asking for any lease not yet listed"
                - "Build the inventory with entity, lessor, asset class, dates and annual payment"
                - "Ask each site finance contact to confirm the inventory for their entity is complete @recurring(yearly)"
            - name: Embedded lease review of service and supply contracts
              description: |-
                ## Purpose
                Outsourced logistics with dedicated trucks, data centre cages, dedicated production lines at a supplier and power purchase agreements tied to one plant can all contain a lease even though nobody calls them one. Running the standard's three questions (identified asset, substantially all the economic benefits, right to direct use) over the larger service contracts finds the embedded leases before the auditor does.

                ## Milestones
                1. Service and supply contracts above an agreed spend threshold listed for review.
                2. Each contract assessed against the identified asset, economic benefits and direction of use tests, with substitution rights considered.
                3. A short conclusion memo for every contract judged to contain a lease, and a one-line rationale for each that does not.
                4. Any newly identified leases added to the inventory and the abstraction queue.

                ## Notes
                A supplier's substitution right only defeats the identified asset test if it is both practically possible and economically beneficial to the supplier throughout the period of use. Read the operating detail, not just the clause.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every service contract above the agreed threshold has a recorded conclusion on whether it contains a lease, with memos for the ones that do."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Pull the top fifty service and supply contracts by annual spend from procurement"
                - "Agree a spend threshold for embedded lease review with the financial controller"
                - "Assess each contract against the identified asset and right to direct use tests"
                - "Write a conclusion memo for each contract that contains a lease"
                - "Re-run the embedded lease questions over the year's new large service contracts @recurring(yearly)"
            - name: Lease data abstraction for every contract
              description: |-
                ## Purpose
                Measurement errors usually trace back to a misread rent review clause or a missed rent-free period, because a schedule is only as good as the dates, payments and options typed into it. Abstracting every contract into the same fields, and having a second person check them, gives clean inputs for every calculation that follows.

                ## Milestones
                1. A standard abstraction sheet agreed: commencement, end date, payments and frequency, escalations, index reviews, incentives, options, restoration obligations and currency.
                2. Every lease in the inventory abstracted onto the sheet with the clause reference beside each field.
                3. A second reviewer check completed on every property lease and a sample of the rest.
                4. Differences between abstracted data and the payables history explained or corrected.

                ## Notes
                Record the clause number for every field. When a lease is modified three years later, nobody will remember where the break date came from.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every lease in the inventory has an abstraction sheet with clause references, and all property leases have passed a second reviewer check."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Draft the standard abstraction sheet fields and agree them with the reviewer"
                - "Ask the agent to draft a first-pass abstraction for each property lease from the scanned contract"
                - "Check every abstracted field against its clause and record the reference"
                - "Compare abstracted payments with the last twelve months of actual payments"
            - name: Short-term and low-value lease exemption policy
              description: |-
                ## Purpose
                The two recognition exemptions remove a lot of small leases from the balance sheet, but only if the choices are made deliberately and applied the same way everywhere. The short-term election is made by class of underlying asset and the low-value one lease by lease, so a written policy with clear examples stops each entity drawing its own line.

                ## Milestones
                1. A decision recorded on whether to apply the short-term exemption, and for which classes of underlying asset.
                2. A low-value threshold agreed, assessed on the value of the asset when new, with examples such as laptops, phones and small office furniture.
                3. A rule written for leases that start short and are later extended past twelve months.
                4. The policy issued to every entity, with the expense for exempt leases tracked for disclosure.

                ## Notes
                A lease with a purchase option is never short-term under the standard, and an asset that is highly dependent on other assets, or that you sublease, cannot use the low-value exemption.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed exemption policy names the asset classes for the short-term election and a low-value threshold, and has been sent to every entity."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the small and short leases in the inventory by asset class and value when new"
                - "Propose a low-value threshold with examples and test it against the list"
                - "Agree the short-term election by asset class with the financial controller"
                - "Send the signed exemption policy to every entity's finance lead"
            - name: Incremental borrowing rate methodology
              description: |-
                ## Purpose
                Few lessors disclose the rate implicit in the lease, so most lessees discount at their incremental borrowing rate, and that single number moves the liability more than almost any other input. A documented method building the rate from a reference curve, a credit spread for the borrowing entity and adjustments for term, currency and security makes each rate repeatable and defensible.

                ## Milestones
                1. The reference rate source chosen for each lease currency and term band.
                2. A credit spread approach agreed for each borrowing entity, using actual borrowing, group treasury rates or observable credit data.
                3. Adjustments for lease term, payment profile and the security the asset provides written down.
                4. A rate table by currency, entity and term band approved and filed with the method paper.

                ## Notes
                The rate should reflect what the lessee entity would pay to borrow over a similar term with similar security, not the group's headline rate. Ask treasury for evidence of actual borrowing costs.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An approved method paper and rate table give an incremental borrowing rate for every lease currency, entity and term band."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List every lease currency, lessee entity and term band in the portfolio"
                - "Ask treasury for the group's actual borrowing costs and credit spreads"
                - "Draft the method paper covering reference rate, spread and security adjustment"
                - "Get the rate table approved by the group financial controller"
            - name: Lease term judgements for extension and break options
              description: |-
                ## Purpose
                The lease term is the non-cancellable period plus any extension the lessee is reasonably certain to take and any break it is reasonably certain not to use, and on a property portfolio that judgement can double the liability. Writing the judgement for each significant lease, with the economic reasons behind it, turns a guess into a position the auditor can follow.

                ## Milestones
                1. Every lease with an extension, break or purchase option listed with its notice dates.
                2. A set of factors agreed: leasehold improvements, relocation cost, strategic importance of the site, market rent compared with option rent.
                3. A judgement and its reasons recorded for each significant lease.
                4. The judgements reviewed by the property or operations lead who would actually decide.

                ## Notes
                Large recent fit-out spend on a site is strong evidence that a break will not be used. The judgement belongs to finance, but it must match what the business is really planning.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every lease with an option has a recorded lease term judgement with reasons, reviewed by the person who controls the decision."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Filter the abstraction data for every lease with an extension, break or purchase option"
                - "Agree the factors the business will weigh when judging reasonable certainty"
                - "Write the judgement and reasons for each lease with an option"
                - "Walk the property lead through the judgements and record any disagreement"
            - name: Separating lease and non-lease components
              description: |-
                ## Purpose
                Property rents often bundle service charges, and vehicle and equipment contracts bundle maintenance, and each bundle needs a decision before it can be measured. Choosing, by class of underlying asset, whether to separate the non-lease components or use the practical expedient to treat them as part of the lease sets the size of the liability and the operating cost line.

                ## Milestones
                1. Each asset class listed with the typical non-lease components in its contracts.
                2. The effect of separating versus not separating estimated for the two largest classes.
                3. A choice recorded for each class of underlying asset.
                4. A method written for allocating consideration on a relative stand-alone price basis where components are separated.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice for every class of underlying asset on separating non-lease components, with the allocation method written for separated classes."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the service, maintenance and insurance elements bundled in each asset class"
                - "Estimate the liability with and without separation for property and fleet"
                - "Record the choice for each class of underlying asset in the policy"
                - "Write the stand-alone price allocation method for classes that separate"
            - name: Opening right-of-use asset and lease liability schedules
              description: |-
                ## Purpose
                With clean data and the judgements made, each lease needs a schedule that gives the opening liability, the asset, monthly interest and depreciation and the current and non-current split. Building them to one standard layout means any reviewer can pick up any lease and follow the numbers from contract to ledger.

                ## Milestones
                1. One schedule layout agreed with payment dates, discounting, interest, closing liability, asset cost, depreciation and net book value.
                2. Opening liability calculated for every lease as the present value of unpaid payments at its rate.
                3. Asset cost built up from the liability plus prepaid rent, initial direct costs and restoration estimate, less incentives received.
                4. Every schedule independently recalculated for the twenty largest leases.

                ## Notes
                Keep payment timing exact. Rent paid quarterly in advance gives a materially different liability from monthly in arrears on the same headline rent.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every lease has a schedule in the standard layout, and the twenty largest have been independently recalculated within a tolerance agreed with the controller."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Agree the standard schedule layout and formula checks with the reviewer"
                - "Build the schedule for each lease from its abstraction sheet"
                - "Recalculate the twenty largest leases independently and clear the differences"
                - "Post the opening balances and file the schedule pack"
            - name: IFRS 16 accounting policy paper
              description: |-
                ## Purpose
                Auditors, new joiners and subsidiary accountants all need the same answer to the same question, and a policy that lives in one person's head fails the first time that person is on leave. A written paper covering scope, exemptions, components, term, discount rate, remeasurement, modifications and presentation is the reference every other project in this area points to.

                ## Milestones
                1. A paper drafted covering scope, definition, exemptions, components, term, discount rates, measurement, remeasurement, modifications, subleases and presentation.
                2. Each policy choice cross-referenced to the decision memo that supports it.
                3. The paper reviewed by the auditors before year end.
                4. The approved paper issued to every entity and filed with a version date.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An approved, version-dated IFRS 16 policy paper exists, has been reviewed by the auditors and sent to every entity."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Collect the exemption, component, term and discount rate decision memos in one folder"
                - "Draft the policy paper section by section with references to each memo"
                - "Send the draft to the audit manager for comment before year end"
                - "Review the policy paper against new amendments and the year's issues @recurring(yearly)"
            - name: Monthly lease journal run
              description: |-
                ## Purpose
                Depreciation, interest, payment postings and the current portion reclass have to land every month, and lease journals posted late or by hand are a common source of close adjustments. A fixed run on the same working day, from the schedules or the lease system, keeps the lease balances current and the close predictable.

                ## Milestones
                1. A fixed working day in the close calendar for the lease run.
                2. Standard journals for depreciation, interest, payments and the current and non-current reclass set up.
                3. Exempt lease and variable payment expense coded to their own accounts.
                4. Six consecutive months of lease journals posted on the agreed day with reviewer sign-off.

                ## Notes
                Start from the **Month-end close** template and add the lease run as its own step.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Lease journals have been posted on the agreed close day and reviewed for six consecutive months."
                cadence: rolling
              tasks:
                - "Add the lease journal run to the close calendar on a fixed working day"
                - "Set up standard journal templates for depreciation, interest, payments and reclass"
                - "Post the month's lease journals from the schedules and attach the support @recurring(monthly:3)"
                - "Review the posted lease journals against the schedule totals before sign-off"
            - name: New lease intake gate with procurement and property
              description: |-
                ## Purpose
                Most lease errors start when a contract is signed and finance hears about it three months later from an unexpected invoice. A simple intake step, where any new lease, extension or change reaches the lease accountant before commencement, means the schedule is ready on day one and the first journal is right.

                ## Milestones
                1. Procurement, property, fleet and IT agree to send every new or changed lease to a shared intake inbox.
                2. A one-page intake form capturing the fields the abstraction sheet needs.
                3. A weekly check of the intake log with every item given an owner and a target date.
                4. No lease discovered after its first payment for two consecutive quarters.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For two consecutive quarters, every new lease reached the intake log before its first payment was made."
                cadence: rolling
              tasks:
                - "Set up a shared intake inbox and a one-page lease intake form"
                - "Agree the intake rule with the heads of procurement, property, fleet and IT"
                - "Check the intake log for new, extended or changed leases and assign owners @recurring(weekly:tue)"
                - "Cross-check new rent and hire suppliers in payables against the intake log"
            - name: Lease liability and right-of-use roll-forward
              description: |-
                ## Purpose
                Balance sheet numbers are only provable if the movement from opening to closing explains itself: additions, interest, payments, remeasurements, modifications, disposals, currency and depreciation. A monthly roll-forward agreed to the ledger catches a missed journal while it is still easy to fix and builds most of the year-end note as it goes.

                ## Milestones
                1. A roll-forward layout with one column per movement type for both liability and asset.
                2. The roll-forward agreed to the ledger balance for each entity each month.
                3. Any difference above the agreed threshold explained within the close.
                4. Twelve months of roll-forwards filed and ready to feed the disclosure note.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly roll-forwards for the lease liability and right-of-use assets agree to the ledger for every entity for twelve consecutive months."
                cadence: rolling
              tasks:
                - "Build the roll-forward layout with a column for each movement type"
                - "Agree the lease roll-forward to the ledger for every entity @recurring(monthly:6)"
                - "Investigate and clear any difference above the threshold before the close ends"
            - name: Quarterly index-linked rent remeasurement
              description: |-
                ## Purpose
                When a rent review linked to an inflation index or a market rate takes effect, the liability is remeasured using the revised payments at the original discount rate, with the change taken to the asset. A quarterly sweep of upcoming reviews catches every one, rather than leaving the schedule on the old rent while the invoices rise.

                ## Milestones
                1. Every lease with an index or rate linked payment listed with its review dates.
                2. A quarterly check of reviews that took effect, using the actual index published.
                3. Each remeasurement calculated at the unchanged discount rate and adjusted against the asset.
                4. Remeasurements logged separately from modifications for the disclosure note.

                ## Notes
                Only remeasure when the cash flows actually change. Do not project future index rises into the liability.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every index or rate linked rent change in the last four quarters was remeasured in the quarter it took effect."
                cadence: rolling
              tasks:
                - "List every lease with an index-linked or market rent review and its dates"
                - "Remeasure the liabilities for index and rent reviews that took effect this quarter @recurring(quarterly)"
                - "Agree the new rent to the lessor's notice before posting"
            - name: Quarterly lease term and option reassessment
              description: |-
                ## Purpose
                A lessee reassesses whether it is reasonably certain to extend, break or buy when a significant event within its control happens, such as a big fit-out, a relocation decision or a sublease. Asking the people who make those decisions every quarter finds the triggers on time, so the liability changes when the business does.

                ## Milestones
                1. A short questionnaire for property, fleet and operations on site plans, fit-outs and exits.
                2. Responses gathered every quarter and compared with the recorded term judgements.
                3. Each changed judgement remeasured at a revised discount rate and documented.
                4. A log of reassessments with dates, triggers and effects kept for the auditor.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive quarterly reassessments completed, each with questionnaire responses and any remeasurement documented."
                cadence: cyclic
              tasks:
                - "Draft the quarterly lease term questionnaire for property, fleet and operations"
                - "Send the questionnaire and compare answers with the recorded term judgements @recurring(quarterly)"
                - "Remeasure any lease whose term judgement changed at a revised discount rate"
            - name: Lease modification log and processing
              description: |-
                ## Purpose
                Extra floors, surrendered space, rent cuts and term extensions agreed with a lessor are modifications, and the standard treats each type differently: a separate lease, a remeasurement at a revised rate, or a partial derecognition with a gain or loss. A log that records every change and its treatment keeps the schedules honest and the accounting consistent.

                ## Milestones
                1. A modification log capturing date agreed, effective date, change, classification and accounting entry.
                2. A decision tree for separate lease, scope decrease and other modifications attached to the log.
                3. Every modification in the period processed using the revised discount rate at its effective date.
                4. The log reviewed monthly and agreed to the roll-forward movements.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every lease modification in the year appears in the log with its classification, revised rate and journal, agreed to the roll-forward."
                cadence: rolling
              tasks:
                - "Set up the modification log with classification and journal columns"
                - "Write the modification decision tree and attach it to the log"
                - "Review the modification log against signed side letters and amendments @recurring(monthly:14)"
            - name: Lease accounting controls and quarterly testing
              description: |-
                ## Purpose
                Lease balances rest on judgements and manual inputs, which is exactly where auditors look for control weaknesses. A small set of designed controls over completeness, data input, rate selection, journals and reassessment, tested each quarter, shows the numbers can be relied on and gives the audit team something to test instead of reperforming everything.

                ## Milestones
                1. Key risks listed: missed leases, wrong inputs, wrong rate, missed remeasurement, wrong journals.
                2. A control designed for each risk with owner, frequency and evidence.
                3. Each control tested quarterly on a sample with results recorded.
                4. Failed tests fixed with a remediation note and retested.

                ## Notes
                Start from the **Compliance control** template, one record per control.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every key lease control has an owner and evidence, and four quarters of test results are on file with failures remediated."
                cadence: cyclic
              tasks:
                - "List the main error and omission risks across the lease process"
                - "Design one control per risk with an owner and evidence requirement"
                - "Test a sample for each lease control and record the result @recurring(quarterly)"
                - "Write a remediation note for any failed control and book the retest"
            - name: Annual impairment review of right-of-use assets
              description: |-
                ## Purpose
                Right-of-use assets are tested under the normal impairment standard, and empty floors, closed stores and loss-making sites are the usual indicators. A yearly review of each cash-generating unit carrying leased assets, plus a check whenever a site is vacated, keeps asset values honest and avoids a surprise write-down at audit.

                ## Milestones
                1. Each right-of-use asset mapped to a cash-generating unit.
                2. Indicators assessed each year: vacant space, closures, falling site results, adverse market rents.
                3. An impairment test performed for every unit with an indicator.
                4. Results and key assumptions documented for the auditor and the disclosure note.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An impairment indicator review is completed every year for all leased assets, with tests documented for each unit that had an indicator."
                cadence: cyclic
              tasks:
                - "Map each right-of-use asset to its cash-generating unit"
                - "Run the impairment indicator review across all leased sites @recurring(yearly)"
                - "Test any unit with an indicator and document the assumptions used"
            - name: Quarterly discount rate table refresh
              description: |-
                ## Purpose
                Rates move, and a lease added or modified this quarter must be discounted at today's rate, not the one from the original method paper. Refreshing the rate table quarterly from the agreed sources means every new measurement uses a current, documented rate without anyone improvising one at month end.

                ## Milestones
                1. The rate table refreshed from the agreed reference sources each quarter.
                2. Credit spreads checked against any new borrowing by the group.
                3. The refreshed table approved and dated before the first close of the quarter.
                4. Each new lease and modification traced to the table in force on its date.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly rate tables are approved and dated, and every lease addition or modification traces to the table in force on its date."
                cadence: rolling
              tasks:
                - "Refresh the incremental borrowing rate table from the agreed sources @recurring(quarterly)"
                - "Check credit spreads against the group's latest borrowing"
                - "File the approved, dated table with the method paper"
            - name: Restoration and dilapidation provisions for leased sites
              description: |-
                ## Purpose
                Most property leases oblige the tenant to reinstate the premises, and that estimated cost is recognised as a provision and added to the right-of-use asset at commencement. Reviewing the estimates each year, with the property team or a surveyor for the larger sites, keeps the provision credible and stops a large exit bill landing as an unexpected loss.

                ## Milestones
                1. Every lease with a reinstatement or make-good clause identified from the abstraction data.
                2. A cost estimate for each site, with surveyor input for the largest.
                3. The provision and the matching asset adjustment booked, with the unwind of discount set up.
                4. Estimates revisited each year and changes adjusted against the asset.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every lease with a reinstatement obligation has a dated cost estimate, a booked provision and a review within the last twelve months."
                cadence: cyclic
              tasks:
                - "List every lease with a reinstatement or make-good clause"
                - "Ask the property team for cost estimates on each site"
                - "Book the provisions with the matching asset entries and the discount unwind"
                - "Review restoration estimates with the property team before year end @recurring(yearly)"
            - name: Lease expiry and notice date calendar
              description: |-
                ## Purpose
                Every expiry, break notice date and option deadline is also an accounting event: a lease drifting into its last year may need its term reassessed, and a holdover month by month may become a short-term arrangement. A calendar of these dates, reviewed monthly, tells finance which schedules are about to change before the change arrives.

                ## Milestones
                1. Every expiry, break notice and option exercise date loaded into one calendar.
                2. Each date paired with the accounting question it raises: reassess term, derecognise, new lease or holdover.
                3. A monthly look ahead at the next six months of dates shared with property.
                4. Expired and holdover leases accounted for in the month they change.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No lease has expired or rolled into holdover in the last year without its accounting being updated in the same month."
                cadence: rolling
              tasks:
                - "Load every expiry, break notice and option date into a shared calendar"
                - "Note the accounting question beside each upcoming date"
                - "Review the next six months of lease dates with property @recurring(monthly:20)"
            - name: The lease definition test in practice
              description: |-
                ## Purpose
                Whether a contract contains a lease turns on control of an identified asset, and the edge cases (capacity portions, substitution rights, decisions predetermined in the contract) are where people get it wrong. Working through ten real contracts from your own portfolio builds the judgement needed for intake reviews and auditor challenges.

                ## Milestones
                1. The standard's definition and application guidance read, with notes on identified asset, economic benefits and direction of use.
                2. Ten contracts from the business assessed and the conclusions compared with a senior reviewer's.
                3. A list of the five edge cases most common in your industry, with the reasoning for each.
                4. A one-page definition checklist added to the intake form.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten real contracts assessed with conclusions matching a senior reviewer's, and a definition checklist added to the intake form."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read the lease definition section and its application guidance with notes"
                - "Assess ten contracts from the business and compare with a senior reviewer"
                - "Write the five most common edge cases for your industry with reasoning"
                - "Turn the reasoning into a one-page checklist for the intake form"
            - name: Lease liability measurement worked by hand
              description: |-
                ## Purpose
                Software produces lease numbers, but the lease accountant has to explain them, and that only comes from having built a liability from scratch. Working one property lease and one vehicle lease by hand, including fixed and in-substance fixed payments, residual value guarantees and purchase options, makes every later system output checkable.

                ## Milestones
                1. The payments included in the liability listed from the standard: fixed, index-based, residual value guarantees, purchase options and termination penalties.
                2. One property lease measured by hand with rent-free, step-ups and quarterly advance payments.
                3. One vehicle lease measured with a residual value guarantee.
                4. Both results agreed to the schedule or the lease system, with any difference explained.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two leases measured by hand from contract to liability and agreed to the system output, with any difference explained in writing."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List which payment types the standard includes in the lease liability"
                - "Measure one property lease by hand in a blank spreadsheet"
                - "Measure one vehicle lease with a residual value guarantee"
                - "Agree both results to the system output and write up any differences"
            - name: Initial measurement of the right-of-use asset
              description: |-
                ## Purpose
                Payments made before commencement, lease incentives received, initial direct costs and the estimated restoration cost all adjust the asset, so it is never simply the liability, and each item is often missed. Learning the build-up and testing it on recent leases means the asset side of every new schedule is complete first time.

                ## Milestones
                1. The four adjustments to the asset written in your own words with an example of each.
                2. The difference between initial direct costs and general costs of arranging a lease understood and noted.
                3. Three recent leases checked for missed incentives, prepayments, costs or restoration estimates.
                4. Any corrections booked and the intake form updated to capture the missing items.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three recent leases have been checked against the asset build-up and the intake form now captures incentives, direct costs and restoration estimates."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write the right-of-use asset build-up with an example of each adjustment"
                - "Check three recent leases for missed incentives, prepaid rent or restoration costs"
                - "Add incentive, direct cost and restoration fields to the intake form"
            - name: Remeasurement versus modification rules
              description: |-
                ## Purpose
                Changes to a lease come in two kinds, a reassessment of the existing contract or a modification that changes it, and they use different discount rates and sometimes produce a gain or loss. Mapping each kind of change to its treatment, with a worked example, is what lets the modification log be filled in correctly by anyone on the team.

                ## Milestones
                1. A table mapping each trigger to its treatment: term reassessment, purchase option, residual value guarantee, index change, scope increase, scope decrease, price change.
                2. The discount rate used for each trigger recorded: original or revised.
                3. A worked example of a scope decrease with partial derecognition and a gain or loss.
                4. The table reviewed by a senior colleague and attached to the modification log.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A reviewed treatment table covering every remeasurement and modification trigger, with a worked scope decrease example, is attached to the modification log."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read the remeasurement and modification paragraphs and list every trigger"
                - "Build the treatment table with the discount rate for each trigger"
                - "Work a scope decrease example with partial derecognition"
                - "Ask a senior colleague to review the table before it goes into use"
            - name: Lessor accounting and lease classification
              description: |-
                ## Purpose
                Lessor accounting still classifies each lease as finance or operating based on whether substantially all the risks and rewards transfer, and businesses that lease out equipment or sublet space need that skill as much as lessee accounting. Learning the indicators and testing them on your own lessor contracts sets up the right revenue and receivable pattern.

                ## Milestones
                1. The classification indicators listed: ownership transfer, bargain purchase option, major part of economic life, present value of payments, specialised asset.
                2. Every contract where the business is a lessor classified with reasons.
                3. The accounting pattern for each class written: net investment and finance income, or asset retained and straight-line income.
                4. Lessor disclosures identified and added to the year-end note checklist.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every lessor contract the business holds is classified as finance or operating with written reasons, and lessor disclosures are on the note checklist."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the lessor classification indicators with an example of each"
                - "Find every contract where the business acts as lessor"
                - "Classify each lessor contract and record the reasons"
                - "Add lessor disclosures to the year-end note checklist"
            - name: Lease presentation in the primary statements
              description: |-
                ## Purpose
                Leases change the face of every primary statement: right-of-use assets and liabilities on the balance sheet, depreciation and interest instead of rent in profit or loss, and principal repayments in financing cash flows. Knowing exactly where each line lands, and the policy choices about interest in the cash flow statement, avoids reclasses at review.

                ## Milestones
                1. The balance sheet choice recorded: separate lines or inclusion within property, plant and equipment and borrowings with disclosure.
                2. The cash flow classification written for principal, interest, exempt and variable payments.
                3. The current and non-current liability split method confirmed.
                4. A mock set of primary statement lines produced from this year's lease numbers.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written presentation map covering balance sheet, profit or loss and cash flow lines for leases, checked against a mock set of this year's statements."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Map each lease balance and expense to its line in the primary statements"
                - "Confirm how interest paid on leases is classified in the cash flow statement"
                - "Produce mock primary statement lines from this year's lease numbers"
            - name: Foreign currency leases
              description: |-
                ## Purpose
                Paying rent in a currency other than the entity's functional currency splits the accounting in two: the liability is a monetary item retranslated at each closing rate, while the right-of-use asset stays at the historical rate. Groups with offices or equipment leased in dollars, euros or other currencies need this mechanism set up before the first quarter of exchange differences arrives.

                ## Milestones
                1. Every lease denominated in a foreign currency identified with its currency and entity.
                2. The retranslation of liabilities at closing rate set up, with exchange differences posted to profit or loss.
                3. Assets confirmed as carried at the historical rate with no retranslation.
                4. The currency movement shown as its own column in the roll-forward.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every foreign currency lease liability is retranslated at closing rate each month, with the movement shown separately in the roll-forward."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Filter the inventory for leases payable in a foreign currency"
                - "Set up month-end retranslation of those liabilities at closing rate"
                - "Add a currency movement column to the roll-forward"
            - name: Deferred tax on leases
              description: |-
                ## Purpose
                Where tax relief follows the rent paid rather than the accounting entries, the right-of-use asset and lease liability create temporary differences, and the amendment on single transactions confirmed that deferred tax is recognised on both. Understanding the mechanics, and agreeing the calculation with the tax team, keeps the tax note consistent with the lease balances.

                ## Milestones
                1. How each jurisdiction in the group gives tax relief for lease payments noted with the tax team.
                2. Temporary differences on right-of-use assets and lease liabilities calculated by entity.
                3. Deferred tax recognised on both sides, with any offset presentation agreed.
                4. The deferred tax workings tied to the lease roll-forward each year end.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Deferred tax on lease assets and liabilities is calculated by entity and tied to the lease roll-forward at year end, agreed with the tax team."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the tax team how each jurisdiction relieves lease payments"
                - "Calculate the temporary differences on lease assets and liabilities by entity"
                - "Tie the deferred tax workings to the year-end lease roll-forward"
            - name: Choosing lease accounting software
              description: |-
                ## Purpose
                Spreadsheets cope with twenty leases; past a hundred, with modifications and several currencies, they become the biggest audit risk in the area. Comparing two or three lease systems on the same scripted scenarios (a modification, an index review, a foreign currency lease, a disclosure report) shows which one actually handles your portfolio.

                ## Milestones
                1. Requirements written: lease count, entities, currencies, ERP integration, modifications, disclosures, audit trail and user access.
                2. Three vendors shortlisted and given the same five scripted scenarios.
                3. Each system scored on scenario results, integration, cost over five years and support.
                4. A recommendation approved, with the decision and the reasons recorded.

                ## Notes
                Start from the **Purchase decision** template. Ask each vendor to run your own messiest lease live, not a demo dataset.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three lease systems scored against the same scripted scenarios and a recommendation approved with its reasons recorded."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Write the requirements list with lease volumes, entities and currencies"
                - "Prepare five scripted scenarios from real leases in the portfolio"
                - "Run the scenarios with three shortlisted vendors and score the results"
                - "Present the recommendation and cost over five years for approval"
            - name: Migrating lease schedules into the lease system
              description: |-
                ## Purpose
                Moving live leases from spreadsheets into a system is where balances quietly change, because the system recalculates history with slightly different day counts or payment timing. A staged migration with a parallel run and a reconciliation at every step proves the closing balances are the same before the spreadsheets are retired.

                ## Milestones
                1. A migration file with every lease's inputs, opening balances and modification history.
                2. A pilot of twenty leases loaded and reconciled to the spreadsheet balances.
                3. Full load completed and every lease reconciled within the agreed tolerance.
                4. Two months of parallel run with matching journals, then the spreadsheets archived read-only.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every lease migrated and reconciled to the spreadsheet balances, with two months of matching parallel journals before cut-over."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Build the migration file with inputs, balances and modification history"
                - "Load and reconcile a pilot of twenty leases"
                - "Load the full portfolio and reconcile each lease within tolerance"
                - "Run two months in parallel and archive the spreadsheets read-only"
            - name: Portfolio approach for vehicle and equipment fleets
              description: |-
                ## Purpose
                A fleet of four hundred vans on near-identical contracts does not need four hundred separate schedules if the result would not differ materially. Testing whether a portfolio approach is reasonable, and documenting the grouping rules, can cut the monthly workload sharply without weakening the numbers.

                ## Milestones
                1. Candidate portfolios identified by asset type, term, start period, currency and rate.
                2. A comparison of portfolio results with lease-by-lease results on a sample.
                3. Grouping rules and the materiality conclusion documented.
                4. The portfolio approach agreed with the auditors before first use.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A documented portfolio approach for at least one fleet, with sample testing showing no material difference and auditor agreement recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Group fleet leases by asset type, term, start period and currency"
                - "Compare portfolio and lease-by-lease results on a sample"
                - "Document the grouping rules and materiality conclusion"
                - "Agree the portfolio approach with the audit manager"
            - name: Lease effects on EBITDA, net debt and covenants
              description: |-
                ## Purpose
                Bringing leases on balance sheet raises EBITDA, raises reported debt and changes gearing and interest cover, and lenders, analysts and bonus schemes do not always define those measures the same way. Quantifying the lease effect on each metric, and noting which agreements use frozen accounting definitions, stops the business misreading its own numbers.

                ## Milestones
                1. The lease effect on EBITDA, operating profit, net debt, gearing and interest cover quantified for the current year.
                2. Each loan agreement, bonus scheme and investor metric checked for whether it includes or excludes lease effects.
                3. A reconciliation from reported figures to each covenant or scheme definition prepared.
                4. A one-page explainer shared with treasury, investor relations and the remuneration team.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A reconciliation shows the lease effect on each key metric and states for every covenant and scheme whether lease effects are included."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Calculate the lease effect on EBITDA, net debt, gearing and interest cover"
                - "Ask treasury which loan agreements use frozen accounting definitions"
                - "Build a reconciliation from reported figures to each covenant definition"
                - "Share a one-page explainer with treasury and investor relations"
            - name: Budgeting and forecasting new leases
              description: |-
                ## Purpose
                Signing a new office mid-year changes depreciation, interest, EBITDA and net debt, yet many budgets still show it as a single rent line. Building lease effects into the budget and forecast templates, with a pipeline of planned leases from property and fleet, makes the plan match how the accounts will actually report.

                ## Milestones
                1. A pipeline of planned new leases, renewals and exits for the next eighteen months.
                2. Budget template lines for depreciation, interest, lease liability and exempt lease expense.
                3. A simple calculator that turns a planned lease into its budget lines.
                4. The lease lines in the budget reconciled to the lease system at the start of the year.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The budget shows leases as depreciation, interest and liability movements, built from a dated pipeline and reconciled to the lease system."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask property and fleet for every planned new lease, renewal and exit"
                - "Add depreciation, interest and liability lines for leases to the budget template"
                - "Build a calculator that converts a planned lease into budget lines"
                - "Refresh the planned lease pipeline before each budget cycle @recurring(yearly)"
            - name: Remediating legacy lease balance errors
              description: |-
                ## Purpose
                Portfolios inherited from a rushed first adoption often carry errors: wrong commencement dates, incentives never booked, modifications treated as new leases, depreciation on the wrong term. A structured remediation, with each error quantified and the correction assessed as current period or prior period, clears them in one go rather than one per audit.

                ## Milestones
                1. Every known or suspected error logged with lease, nature and estimated effect.
                2. Each error quantified and corrected in the schedule.
                3. The aggregate assessed for materiality and the correction route agreed with the auditors.
                4. Root causes fixed in the intake form, controls or policy.

                ## Notes
                Start from the **Remediation plan** template. Decide the accounting route for corrections with the auditors before posting anything large.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every logged lease error is quantified and corrected, the correction route is agreed with the auditors and each root cause has a fix recorded."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Log every known or suspected lease error with its estimated effect"
                - "Quantify and correct each error in the lease schedules"
                - "Agree the materiality assessment and correction route with the auditors"
                - "Record the root cause fix for each error type"
            - name: Lease ledger account structure and maturity split
              description: |-
                ## Purpose
                Disclosures ask for right-of-use assets by class, additions, depreciation by class and a maturity analysis of liabilities, and a ledger that holds one lease asset account cannot produce any of it. Setting up accounts by asset class and a reliable current and non-current split makes the year-end note a report instead of a project.

                ## Milestones
                1. Asset, accumulated depreciation and depreciation expense accounts set up by class: property, vehicles, equipment, other.
                2. Lease liability accounts split current and non-current, with the reclass method written.
                3. Exempt, variable and low-value lease expense accounts separated.
                4. Every entity mapped to the same structure in the group reporting pack.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every entity uses the same lease account structure by asset class, with a written current and non-current split method."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Design the lease account structure by asset class"
                - "Write the method for the current and non-current liability split"
                - "Map every entity's lease accounts into the group reporting pack"
            - name: Year-end lease disclosure note
              description: |-
                ## Purpose
                The lease note gathers depreciation by class, interest, exempt and variable expense, total cash outflow, additions, sale and leaseback gains and the liability maturity analysis, and it is often assembled under pressure in the last week. Building it from the monthly roll-forwards, with a checklist and a tie-out to the primary statements, makes it the first note ready rather than the last.

                ## Milestones
                1. A disclosure checklist covering the lessee, lessor and maturity analysis requirements.
                2. Every figure in the note sourced from the roll-forwards and the ledger.
                3. The note tied to the balance sheet, income statement and cash flow lines.
                4. The note reviewed and cleared by the auditors without adjustment.
              priority: high
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The lease note is drafted from the roll-forwards, tied to the primary statements and cleared by the auditors before the reporting deadline."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Update the lease disclosure checklist for any new requirements"
                - "Draft the note from the twelve monthly roll-forwards"
                - "Tie every figure in the note to the primary statements"
                - "Start the lease note draft two months before year end @recurring(yearly)"
            - name: Auditor lease testing file
              description: |-
                ## Purpose
                Lease balances are a regular area of audit focus because of the judgements on term and discount rate. A file ready before fieldwork, with the inventory, sample contracts, judgements, rate support, controls evidence and roll-forwards, cuts the request list and the number of questions that turn into adjustments.

                ## Milestones
                1. The prior year's lease requests and findings reviewed and answered.
                2. A file prepared with inventory, policy, judgement memos, rate support, roll-forwards and control tests.
                3. Contracts for the auditor's likely sample pre-pulled and indexed.
                4. All lease queries closed before the planned end of fieldwork.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The lease audit file was delivered before fieldwork started and every lease query was closed before fieldwork ended."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Review last year's lease audit requests and findings"
                - "Assemble the lease audit file with judgements, rates and roll-forwards"
                - "Pre-pull and index the contracts the auditor is likely to sample"
                - "Track open lease queries and their owners until fieldwork ends"
            - name: Sale and leaseback transaction accounting
              description: |-
                ## Purpose
                Selling a building and leasing it back raises cash, but the accounting depends first on whether the transfer is a sale under the revenue standard, and then on keeping only the gain that relates to the rights transferred. Preparing the analysis before signing, including the lease liability measurement rules for leasebacks with variable payments, avoids reporting a gain that is later reversed.

                ## Milestones
                1. The transaction terms assessed against the revenue standard's transfer of control criteria.
                2. The right-of-use asset measured as the proportion of the previous carrying amount retained.
                3. The gain or loss limited to the rights transferred, with any off-market terms adjusted.
                4. The analysis agreed with the auditors before completion and the entries posted on the day.

                ## Notes
                A repurchase option held by the seller usually means there is no sale at all, and the deal is a financing. Check this first.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "An accounting paper for the sale and leaseback, agreed with the auditors before completion, with the right-of-use asset and gain calculated and posted."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Get the draft sale and leaseback terms from the transaction team"
                - "Assess whether the transfer meets the revenue standard's sale criteria"
                - "Calculate the retained right-of-use asset and the restricted gain"
                - "Agree the accounting paper with the auditors before completion"
            - name: Early exit from a property lease
              description: |-
                ## Purpose
                Surrendering a lease early, paying a premium to exit or using a break triggers derecognition, a gain or loss, restoration costs and often an impairment beforehand once the decision is taken. Planning the accounting from the moment the exit is approved means each step lands in the right period and the board sees the full cost.

                ## Milestones
                1. The decision date recorded and the term reassessed or impairment considered from that date.
                2. Surrender premium, dilapidations and final payments estimated.
                3. Derecognition entries prepared with the gain or loss calculated.
                4. Final settlement posted and the lease closed in the system and inventory.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The exited lease is derecognised in the right period with surrender costs, dilapidations and gain or loss posted and the lease closed in the system."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Record the date the exit decision was approved"
                - "Reassess the term and check the site for impairment from that date"
                - "Estimate the surrender premium and dilapidations with property"
                - "Post the derecognition and close the lease in the system"
            - name: New head office lease from signing to commencement
              description: |-
                ## Purpose
                Large new leases often sign months before commencement, with rent-free periods, landlord contributions, fit-out and an old lease running alongside. Mapping the accounting from signing to the first year means commitments are disclosed before commencement, the asset and liability are recognised on the right date and incentives are not booked twice.

                ## Milestones
                1. Commencement date confirmed as the date the asset is made available for use, not the signing date.
                2. Commitments for leases not yet commenced captured for disclosure.
                3. Incentives, landlord contributions and fit-out split correctly between the lease and owned assets.
                4. Opening schedule built and the first month's journals posted on commencement.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The new lease is recognised at its commencement date with incentives and fit-out correctly split, and commitments disclosed before then."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Confirm the commencement date with property and the landlord's handover schedule"
                - "Note the signed commitment for disclosure until commencement"
                - "Split landlord contributions and fit-out between the lease and owned assets"
                - "Build the opening schedule and post the first month's journals"
            - name: First ninety days as the lease accountant
              description: |-
                ## Purpose
                Taking over a lease portfolio from a predecessor, a consultant or a system nobody fully understands is a common role for a new finance manager or lease accountant. A planned first ninety days, from reading the policy to owning the close and the audit file, turns inherited spreadsheets into a portfolio you can stand behind.

                ## Milestones
                1. Within thirty days: policy, judgement memos, inventory and last year's audit findings read, and the next close shadowed.
                2. Within sixty days: the monthly journal run, roll-forward and intake log run unaided.
                3. Within ninety days: a list of the top ten risks in the portfolio with owners and dates.
                4. A handover meeting held with the predecessor or the system owner, with open items recorded.

                ## Notes
                Start from the **Onboarding 30/60/90** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Within ninety days the monthly lease run is performed unaided and a top ten risk list with owners has been agreed with the controller."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Read the lease policy, judgement memos and last year's audit findings"
                - "Book a handover meeting with the predecessor or the system owner"
                - "Run the monthly lease journal and roll-forward unaided by day sixty"
                - "Write the top ten risks in the portfolio with owners and dates"
            - name: First-time IFRS adoption for leases
              description: |-
                ## Purpose
                Moving from local accounting rules or a simplified framework to full IFRS, often for a listing, an acquisition by an IFRS group or new investors, brings leases onto the balance sheet for the first time. Planning the transition choices and the opening balances early avoids restating comparatives in a rush.

                ## Milestones
                1. The transition date and the comparative periods confirmed with the auditors.
                2. The first-time adoption exemptions available for leases listed and a choice made for each.
                3. Opening lease balances calculated at the transition date.
                4. The transition reconciliation for leases drafted for the first IFRS financial statements.

                ## Notes
                Agree the transition choices with your auditors early. The available reliefs and dates depend on your exact situation.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Opening lease balances at the transition date are calculated using recorded transition choices and the lease reconciliation is drafted for the first IFRS accounts."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "Confirm the IFRS transition date and comparative periods with the auditors"
                - "List the first-time adoption reliefs available for leases"
                - "Calculate the opening lease balances at the transition date"
                - "Draft the lease section of the transition reconciliation"
            - name: Rolling out lease policy to subsidiaries
              description: |-
                ## Purpose
                In a group, the same lease can be measured three ways in three countries unless the centre sets one method, one rate table and one reporting format. A roll-out pack with instructions, templates and a quarterly return from each subsidiary makes group lease numbers consistent and comparable.

                ## Milestones
                1. A roll-out pack with policy, rate table, abstraction sheet, schedule template and reporting return.
                2. A briefing session held for every subsidiary finance lead.
                3. A quarterly lease return received from every subsidiary and reviewed centrally.
                4. Subsidiaries with repeated errors given follow-up support.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every subsidiary has been briefed and submits a quarterly lease return in the group format, reviewed centrally each quarter."
                cadence: rolling
              tasks:
                - "Assemble the subsidiary roll-out pack from policy, rate table and templates"
                - "Run a briefing call for every subsidiary finance lead"
                - "Review each subsidiary's quarterly lease return against the group policy @recurring(quarterly)"
            - name: Leases acquired in a business combination
              description: |-
                ## Purpose
                When the group buys a company, the acquiree's leases are remeasured as if they were new at the acquisition date, using the group's discount rate, and the right-of-use asset is adjusted for any favourable or unfavourable terms compared with market. Getting this into the purchase price allocation stops the target's old balances flowing straight into group accounts.

                ## Milestones
                1. The target's lease portfolio abstracted and brought into the group inventory.
                2. Liabilities remeasured at the acquisition date at current rates for the acquiree.
                3. Right-of-use assets adjusted for off-market terms with valuation input.
                4. The lease balances included in the purchase price allocation and agreed with the auditors.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "All acquired leases are remeasured at the acquisition date and their balances are included in the agreed purchase price allocation."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Request the target's lease contracts and schedules from the deal team"
                - "Abstract the acquired leases into the group inventory format"
                - "Remeasure the liabilities at the acquisition date at current rates"
                - "Agree the lease balances in the purchase price allocation with the auditors"
            - name: Lease guide for budget holders
              description: |-
                ## Purpose
                Site managers and department heads sign leases, extend them and move out of buildings, often without knowing that each decision changes the accounts. A short guide that explains what counts as a lease, what finance needs and when, and how a lease shows up in their budget, turns them into the earliest warning system the lease accountant has.

                ## Milestones
                1. A two-page guide in plain language with real examples from the business.
                2. The guide reviewed by two budget holders for clarity.
                3. A twenty-minute briefing delivered at a management meeting.
                4. The guide linked from the procurement and contract approval process.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A two-page lease guide is published, briefed to budget holders and linked from the contract approval process."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the agent to draft a plain-language lease guide from the policy paper"
                - "Ask two budget holders to test the draft for clarity"
                - "Deliver a twenty-minute briefing at the next management meeting"
                - "Link the guide from the contract approval process"
            - name: Subleasing surplus office space
              description: |-
                ## Purpose
                When part of a leased building is sublet, the business becomes an intermediate lessor and classifies the sublease by reference to the right-of-use asset of the head lease, not the building. A finance sublease means derecognising part of the asset and recognising a receivable, so the analysis needs doing before the sublease is signed.

                ## Milestones
                1. The sublease terms compared with the remaining head lease term and the right-of-use asset.
                2. The sublease classified as finance or operating with reasons.
                3. Entries prepared: net investment and derecognition for a finance sublease, or rental income for an operating one.
                4. Head lease impairment indicators reviewed given the sublet income.
              priority: low
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "The sublease is classified against the head lease right-of-use asset with written reasons, and its entries are posted from the sublease start date."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Compare the sublease term with the remaining head lease term"
                - "Classify the sublease against the head lease right-of-use asset"
                - "Prepare the entries for the chosen classification"
                - "Review the head lease for impairment given the sublet rent"
            - name: US GAAP lease reconciliation for a US parent
              description: |-
                ## Purpose
                Groups owned by or reporting to a US parent often need lease figures under the US standard as well, and the biggest difference is that operating leases there keep a single straight-line lease cost instead of depreciation and interest. A maintained reconciliation of the differences in classification, cost pattern and exemptions answers parent reporting requests without rebuilding numbers each quarter.

                ## Milestones
                1. The main differences listed: lessee classification, cost pattern, low-value exemption, discount rate practical expedients and remeasurement triggers.
                2. Each lease tagged with its US classification.
                3. A reconciliation of profit and balances between the two frameworks built for the current period.
                4. The reconciliation refreshed each quarter for the parent's reporting pack.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Each lease carries a US classification and a quarterly reconciliation of lease balances and cost between the two frameworks goes to the parent."
                cadence: rolling
              tasks:
                - "List the main IFRS 16 and US lease standard differences that affect your portfolio"
                - "Tag every lease with its US finance or operating classification"
                - "Update the framework reconciliation for the parent reporting pack @recurring(quarterly)"
            - name: Intercompany leases in entity and group accounts
              description: |-
                ## Purpose
                A property company in the group leasing buildings to trading subsidiaries creates leases in each entity's accounts that must be eliminated on consolidation, while the building stays in group property at cost. Keeping both sides agreed monthly, and the group adjustments documented, avoids mismatches that only surface at the consolidation deadline.

                ## Milestones
                1. Every intercompany lease listed with lessor entity, lessee entity and terms.
                2. Lessee and lessor balances agreed between entities monthly.
                3. Consolidation eliminations documented, including the reversal of right-of-use depreciation and interest.
                4. Entity-level disclosures for intercompany leases checked each year end.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Intercompany lease balances agree between entities every month and the consolidation eliminations are documented for the year."
                cadence: rolling
              tasks:
                - "List every intercompany lease with both entities and the terms"
                - "Agree intercompany lease balances between lessee and lessor entities @recurring(monthly:10)"
                - "Document the consolidation eliminations for intercompany leases"
            - name: Variable and turnover-based rent analysis
              description: |-
                ## Purpose
                Retail and hospitality leases often charge rent as a percentage of sales above a base, and those variable payments stay out of the liability and go straight to profit or loss. Separating the in-substance fixed element from the truly variable element, and tracking the variable expense monthly, keeps both the liability and the disclosure correct.

                ## Milestones
                1. Every lease with turnover-based or usage-based rent identified.
                2. Each reviewed for in-substance fixed payments such as minimum rents or floors.
                3. Monthly variable rent calculated from site sales and accrued.
                4. Variable lease expense tracked for the year-end disclosure.

                ## Notes
                A minimum guaranteed rent dressed up as a variable payment is fixed in substance and belongs in the liability.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All turnover-based leases are reviewed for in-substance fixed payments and variable rent is accrued every month from site sales."
                cadence: rolling
              tasks:
                - "Identify every lease with turnover-based or usage-based rent"
                - "Check each for minimum rents or floors that are fixed in substance"
                - "Accrue the month's turnover rent from site sales figures @recurring(monthly:16)"
            - name: Audit committee briefing on lease judgements
              description: |-
                ## Purpose
                Lease term, discount rates and impairment of leased sites are judgements that can move reported debt by a large amount, and audit committees are expected to understand them. A short annual paper setting out the judgements, the sensitivities and the changes in the year gives the committee what it needs and shows finance has the area in hand.

                ## Milestones
                1. The significant lease judgements and estimates listed with the amounts at stake.
                2. Sensitivities prepared: liability change for a one percentage point rate move and for alternative term judgements on major sites.
                3. Changes from the prior year and any audit findings summarised.
                4. The paper presented and the committee's questions and conclusions minuted.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An annual lease judgements paper with sensitivities is presented to the audit committee and its conclusions are minuted."
                cadence: cyclic
                effort_hours_estimate: "8"
              tasks:
                - "List the significant lease judgements and the amounts they affect"
                - "Calculate sensitivities for discount rate and term judgements on major sites"
                - "Prepare the lease judgements paper for the audit committee @recurring(yearly)"
                - "Record the committee's questions and conclusions after the meeting"
---

# Lease Accounting Under IFRS 16

This area is for finance managers, group reporting teams and lease accountants in larger businesses who have to keep every property, vehicle and equipment lease on the balance sheet correctly under IFRS 16. It starts with the foundations (a complete inventory, an embedded lease review, abstracted contract data, the exemption, discount rate and lease term judgements, opening schedules and a written policy), then the monthly and quarterly machinery that keeps journals, remeasurements and modifications flowing, the technical skills behind measurement, lessor accounting and presentation, decisions about software, portfolios and budgeting, the dated events such as year-end disclosures, a sale and leaseback or an early exit, situations for a new lease accountant, a first-time adopter or a group roll-out, and finally specialist work on US GAAP reconciliation, intercompany leases and audit committee reporting.

What repeats is the monthly lease journal run, a weekly check of the contract intake log, the liability roll-forward and modification log each month, quarterly index remeasurements, term reassessments, controls testing and discount rate refreshes, and the yearly impairment, restoration provision and policy reviews. The Month-end close, Compliance control, Purchase decision, Remediation plan and Onboarding 30/60/90 templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
