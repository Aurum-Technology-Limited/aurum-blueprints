---
id: real-estate-development.property-portfolio-reporting
name: Property Portfolio Reporting
description: "Portfolio numbers people can rely on: one property list, agreed KPI definitions, a consolidated rent roll, arrears, occupancy, debt and valuation schedules, and a quarterly pack for partners or lenders that goes out on time."
category: business
version: 1.0.0
tags: [real-estate-development, property-portfolio-reporting, small-business, knowledge-worker, rent-roll, arrears, covenants, quarterly-reporting]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - month-end-close
    - risk-register
    - metrics-log
    - onboarding-30-60-90
  pillars:
    - name: Real Estate Investing & Development
      emoji: "🏢"
      description: "Property as a business: development appraisals, land, planning and construction finance, delivering schemes, syndications, commercial and multifamily acquisitions, short-let portfolios and property management companies, REIT analysis, and land development in the Caribbean, for sponsors, developers and operators rather than single-unit landlords."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Property Portfolio Reporting
          description: "Reporting across a property portfolio: rent rolls, arrears, occupancy, debt maturities, valuations and a quarterly pack for partners or lenders."
          projects:
            - name: Master property list for the portfolio
              description: |-
                ## Purpose
                Every later report depends on one agreed list of what the portfolio actually owns, and many owners discover that the bank, the accountant and the property manager each count it differently. A master list with one row per property, its owning entity, unit count, lettable area, purchase date and lender becomes the spine that every rent roll and schedule hangs from.

                ## Milestones
                1. One row per property with address, owning entity, ownership share and acquisition date.
                2. Unit count and lettable area recorded for each property, with the source noted.
                3. Lender, property manager and insurer named against each property.
                4. Each property given a short permanent code used in every other report.
                5. The list checked against the accountant's fixed asset register and any differences resolved.

                ## Notes
                Keep sold properties on a separate tab with their sale date rather than deleting them, so historic reports still reconcile.

                Before you start: this plan is general information to help you organise your own affairs. It is not legal advice. Rules differ between countries and change often, so check decisions that matter with a qualified lawyer or the official authority in the country concerned.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A master property list with a permanent code, entity, units, area, lender and manager for every property, reconciled to the accountant's asset register."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Start a sheet with one row per property and columns for code, entity and address"
                - "Fill in units, lettable area and acquisition date from completion documents"
                - "Add the lender, property manager and insurer against each property"
                - "Compare the list with the accountant's fixed asset register and resolve gaps"
            - name: Reporting audience and requirements map
              description: |-
                ## Purpose
                Partners, lenders, the accountant and the tax authority all want portfolio information, but each wants a different cut, on a different date, under different rules. Mapping who receives what, how often and under which agreement stops you building one oversized report that pleases nobody and missing the one deliverable a loan agreement actually requires.

                ## Milestones
                1. Every recipient of portfolio reporting listed with the agreement or reason that requires it.
                2. For each recipient, the content, frequency, deadline and format written down.
                3. Contractual reporting duties from loan and partnership agreements quoted with clause numbers.
                4. Overlaps marked so one source table can feed several outputs.

                ## Notes
                Loan agreements often hide reporting duties in an information undertakings clause. Read it for every facility rather than relying on memory.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page map lists every report recipient with its required content, frequency, deadline and source clause."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every person or institution that receives numbers about the portfolio"
                - "Pull the reporting clauses from each loan and partnership agreement"
                - "Record content, frequency and deadline for each recipient in one table"
                - "Mark which outputs can share the same underlying data"
            - name: Portfolio KPI definitions sheet
              description: |-
                ## Purpose
                Occupancy can mean units let, area let or rent collected, and arrears can include or exclude deposits and disputed charges, so two honest people can report different numbers from the same building. Writing one definition per KPI, with its formula and exclusions, makes the numbers comparable across properties and across quarters.

                ## Milestones
                1. Definitions written for occupancy, arrears, net operating income, WAULT, LTV, DSCR and any other reported KPI.
                2. Each definition has a formula, its data source and the items it excludes.
                3. Where a lender or partner defines a term differently, both versions recorded side by side.
                4. The sheet shared with the property manager and anyone who prepares figures.

                ## Notes
                Copy covenant definitions word for word from the facility agreement. A lender's NOI is rarely the same as your own.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed-off definitions sheet gives a formula, source and exclusions for every KPI in the portfolio reports."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every KPI that currently appears in any portfolio report"
                - "Write a formula and exclusions for each in plain language"
                - "Copy lender covenant definitions verbatim beside your own"
                - "Send the sheet to the property manager and ask for questions"
            - name: Consolidated rent roll template
              description: |-
                ## Purpose
                Separate rent rolls from each manager, each in its own layout, cannot be added up. One consolidated template with a row per unit or lease, the same columns everywhere and the property code from the master list lets you total contracted rent, vacancy and lease expiries across the whole portfolio in minutes.

                ## Milestones
                1. Column set agreed: property code, unit, tenant, lease start and end, break, passing rent, deposit, status.
                2. Every current lease or tenancy loaded into the template from the latest manager reports.
                3. Vacant units shown as rows with an estimated market rent rather than left out.
                4. Totals by property tie to each manager's own rent roll within an agreed tolerance.

                ## Notes
                Keep one row per lease, not per tenant. A tenant with two units on two leases needs two rows or lease events will be missed.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A consolidated rent roll holds every lease and vacant unit in the portfolio, with property totals that tie to manager rent rolls."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Agree the column list for the consolidated rent roll"
                - "Request the latest rent roll from every property manager in spreadsheet form"
                - "Load each lease into the template using the master property codes"
                - "Tie each property total back to the manager's own figure"
            - name: Source data inventory and owners
              description: |-
                ## Purpose
                Portfolio reports draw on a dozen feeds: manager statements, bank exports, loan statements, valuations, insurance schedules and the accounts. Listing each source, who supplies it, when it arrives and how it is checked shows where the report is fragile and who to chase when a number is late or wrong.

                ## Milestones
                1. Every data source listed with its supplier, format and usual arrival date.
                2. A named owner for each source responsible for chasing and first checks.
                3. Sources with no backup or a single person dependency flagged.
                4. The inventory linked from the reporting calendar.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A data source inventory names supplier, format, arrival date and owner for every feed used in portfolio reports."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down every file or statement used to build last quarter's report"
                - "Note who sends each one, in what format and on what day"
                - "Assign an owner to chase and sense-check each source"
                - "Flag any feed that only one person knows how to produce"
            - name: Annual reporting calendar
              description: |-
                ## Purpose
                Lender compliance certificates, partner packs, valuation dates, insurance renewals and the accounts deadline cluster around quarter ends, and missing one can trigger a default notice or an awkward call. A single calendar for the year, built from the audience map, shows every deadline with the internal dates that must come first.

                ## Milestones
                1. Every external reporting deadline for the next twelve months entered with its source.
                2. Internal cut-off dates set for data, draft, review and send ahead of each deadline.
                3. Covenant test dates and valuation dates shown alongside reporting dates.
                4. The calendar shared with everyone who contributes to the reports.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A twelve-month reporting calendar lists every external deadline with internal data, draft and review dates before it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Copy every deadline from the audience map into a calendar"
                - "Work back from each deadline to set data, draft and review dates"
                - "Add covenant test dates and planned valuation dates"
                - "Roll the calendar forward for the coming year @recurring(yearly)"
            - name: Common chart of accounts across properties
              description: |-
                ## Purpose
                When one manager books lift maintenance under repairs, another under service contracts and a third under sundries, a portfolio expense line means nothing. Mapping every property's ledger codes to one common chart of accounts makes cost per unit, NOI margins and budget comparisons honest across the portfolio.

                ## Milestones
                1. A common chart of about thirty to fifty income and expense lines agreed.
                2. Each property ledger's codes mapped to the common chart in a lookup table.
                3. Unmapped codes reported to zero for the last full quarter.
                4. The accountant consulted so the common chart still rolls up to the statutory accounts.

                ## Notes
                Resist adding a line for every quirk. If a line holds less than one percent of costs, fold it into a neighbour.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every property ledger maps to one common chart of accounts with no unmapped codes for the last full quarter."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Export the ledger code list from each property's accounts"
                - "Draft a common chart of income and expense lines"
                - "Map every ledger code to a common line in a lookup table"
                - "Run last quarter through the mapping and clear unmapped codes"
            - name: Report folder structure and version rules
              description: |-
                ## Purpose
                Sending a partner last month's draft, or overwriting the version a lender has already seen, is the most common and most avoidable reporting error. A folder structure by period, a naming rule and a final folder that is locked after sending give you an audit trail and stop two people editing the same file.

                ## Milestones
                1. Folders set up by year and period, each with inputs, workings, drafts and final subfolders.
                2. A file naming rule with property code, period, version and status adopted.
                3. Sent reports saved as read-only copies with the date and recipient noted.
                4. Older periods archived but searchable.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A period-based folder structure and naming rule are in use, with every sent report stored read-only alongside its send date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create year and period folders with inputs, workings, drafts and final subfolders"
                - "Write a one-line file naming rule and pin it in the top folder"
                - "Move last quarter's sent reports into the final folder as read-only copies"
                - "Show everyone who contributes where files now live"
            - name: Choosing portfolio reporting software or a spreadsheet
              description: |-
                ## Purpose
                Small portfolios run well on a disciplined spreadsheet, while larger ones outgrow it when several people edit and managers send data in five formats. Comparing a spreadsheet build, property management software exports and a dedicated reporting tool against your unit count, users and budget gives a choice you will not reverse in a year.

                ## Milestones
                1. Requirements written: number of properties and units, users, data feeds, outputs.
                2. Three options shortlisted, including improving the current spreadsheet.
                3. Each option scored on cost, data import, audit trail, lender outputs and exit.
                4. A decision recorded with the reasons and a review date.

                ## Notes
                Start from the **Purchase decision** template. Ask every vendor how you get your data out if you leave.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on the reporting tool, with three options scored against written requirements and costs."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write down units, users, feeds and required outputs"
                - "Shortlist three options including staying on an improved spreadsheet"
                - "Book a demo or trial using one real property's data"
                - "Score the options and record the decision with a review date"
            - name: Baseline portfolio snapshot
              description: |-
                ## Purpose
                Before reporting can show trends it needs a starting point that everyone accepts. A baseline snapshot at the last quarter end, with rent roll, occupancy, arrears, debt, values and NOI for each property and in total, is the line every later quarter is compared against.

                ## Milestones
                1. A quarter-end date chosen and all source data gathered for that date.
                2. Rent, occupancy, arrears, debt, latest value and trailing NOI shown per property and in total.
                3. Each figure tied to its source document.
                4. The snapshot reviewed by the owner or a partner and frozen as the baseline.

                ## Notes
                Start from the **Metrics log** template so each KPI has a dated first entry.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A frozen baseline snapshot at a stated quarter end shows the core KPIs per property and in total, each tied to a source."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick the quarter-end date for the baseline"
                - "Gather rent rolls, bank, loan and valuation figures at that date"
                - "Build the snapshot table per property and in total"
                - "Have the owner or a partner review and approve the baseline"
            - name: Monthly rent roll to bank reconciliation
              description: |-
                ## Purpose
                Rent rolls say what tenants owe and the bank says what arrived, and reports built on one without the other overstate income. Reconciling billed rent to receipts each month catches missed direct debits, misapplied payments and manager remittance gaps while they are still small.

                ## Milestones
                1. Billed rent per property matched to receipts in the bank or manager remittance.
                2. Unexplained differences listed with an owner and expected fix date.
                3. Prior month differences cleared or carried forward with a reason.
                4. A sign-off line showing who reconciled and when.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month's billed rent is reconciled to receipts for every property, with every unexplained difference owned and dated."
                cadence: rolling
              tasks:
                - "Export last month's bank receipts and manager remittances"
                - "Reconcile billed rent to receipts for every property @recurring(monthly:8)"
                - "List unexplained differences with an owner and fix date"
                - "Sign and date the reconciliation sheet"
            - name: Weekly arrears and aged debt review
              description: |-
                ## Purpose
                Arrears that are a week old are a reminder, and arrears that are ninety days old are a write-off and a hole in the quarterly pack. A short weekly look at the aged debt report, by tenant and age band, keeps the manager's chasing honest and gives you early warning of a tenant in trouble.

                ## Milestones
                1. An aged debt report by tenant in bands of under 30, 30 to 60, 60 to 90 and over 90 days.
                2. The top ten debtors each with a status and next action from the manager.
                3. Disputed amounts shown separately from simple late payment.
                4. A weekly arrears total tracked against last month and last quarter.

                ## Notes
                Arrears action against tenants is governed by local law and the lease. Leave notices and legal steps to the manager and your lawyer.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An aged arrears report is reviewed every week, with the top ten debtors each carrying a recorded status and next action."
                cadence: rolling
              tasks:
                - "Ask the manager for an aged debt report by tenant and age band"
                - "Review arrears and top ten debtors with the manager @recurring(weekly:mon)"
                - "Separate disputed amounts from simple late payment in the report"
                - "Record the weekly arrears total on a trend line"
            - name: Monthly occupancy and vacancy report
              description: |-
                ## Purpose
                Partners ask how full the buildings are, lenders ask the same question with a covenant attached, and the answer changes with every notice and move-in. A monthly report of physical and economic occupancy, vacant units by age and the units under offer gives a single number with the story behind it.

                ## Milestones
                1. Physical occupancy by unit count and by area reported for every property.
                2. Economic occupancy reported as rent billed against full potential rent.
                3. Vacant units listed with days vacant and current status.
                4. A twelve-month trend shown for the portfolio and each property.

                ## Notes
                Start from the **Metrics log** template to keep the monthly series in one place.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly occupancy report shows physical and economic occupancy per property, vacant units by days vacant and a twelve-month trend."
                cadence: rolling
              tasks:
                - "Set up the occupancy series with one column per property"
                - "Update physical and economic occupancy from the rent roll @recurring(monthly:10)"
                - "List every vacant unit with days vacant and status"
                - "Add a short note on any property whose occupancy moved by more than a few points"
            - name: Property manager report intake check
              description: |-
                ## Purpose
                Manager reports arrive late, incomplete or in a new layout more often than owners admit, and errors in them flow straight into partner packs. A fixed intake check on arrival, covering completeness, opening balances and obvious anomalies, sends problems back to the manager in days rather than at quarter end.

                ## Milestones
                1. A checklist of what each monthly manager report must contain.
                2. Opening balances checked against last month's closing balances.
                3. Anomalies such as negative rent, duplicate invoices or large one-off costs queried in writing.
                4. A log of late or incomplete reports by manager.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every monthly manager report is checked against a written intake checklist within three working days of arrival, with queries logged."
                cadence: rolling
              tasks:
                - "Write the list of contents every manager report must include"
                - "Check each manager report against the list on arrival @recurring(monthly:5)"
                - "Email the manager any queries on balances or unusual items"
                - "Note late or incomplete reports in the manager log"
            - name: Debt maturity and rate reset ladder
              description: |-
                ## Purpose
                Several loans in one portfolio can have maturities, fixed rate expiries and amortisation steps bunched into the same year without anyone noticing until a lender calls. A ladder showing every facility's balance, rate type, reset date and maturity by year makes refinancing exposure visible two to three years out.

                ## Milestones
                1. Every facility listed with lender, balance, margin, rate type, hedge expiry and maturity.
                2. A chart or table of debt maturing and rates resetting by year.
                3. Weighted average maturity and cost of debt calculated for the portfolio.
                4. Facilities maturing within eighteen months flagged for the owner.

                ## Notes
                This is a reporting view. Refinancing strategy and lender choice belong with your broker and lender.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A debt ladder lists every facility with balance, rate type, reset and maturity, updated each quarter with weighted average maturity and cost."
                cadence: cyclic
              tasks:
                - "List every loan with lender, balance, rate type and maturity from loan statements"
                - "Add hedge or fixed rate expiry dates to each facility"
                - "Refresh balances and the maturity ladder from lender statements @recurring(quarterly)"
                - "Flag facilities maturing within eighteen months to the owner"
            - name: Quarterly covenant compliance tracker
              description: |-
                ## Purpose
                Loan covenants such as debt service coverage, interest cover and loan to value are tested on fixed dates using the lender's own definitions, and a breach found by the lender first is far worse than one you raise. A tracker that calculates each covenant per facility, with headroom and a forecast for the next test, gives warning while there is still time to act.

                ## Milestones
                1. Each facility's covenants listed with definition, threshold and test dates.
                2. Actual covenant figures calculated each quarter using the lender's definitions.
                3. Headroom shown as a percentage, with anything under an agreed buffer flagged.
                4. A forecast for the next test date based on known lease events.

                ## Notes
                If a covenant looks likely to fail, talk to your lawyer and lender early. The tracker exists to give you that time.
              priority: high
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every facility covenant is calculated each quarter with headroom and a next-test forecast, and any figure inside the buffer is escalated to the owner."
                cadence: cyclic
              tasks:
                - "List every covenant, threshold and test date from the facility agreements"
                - "Calculate actual covenants and headroom for each facility @recurring(quarterly)"
                - "Forecast the next test using known lease expiries and rent changes"
                - "Email the owner any covenant inside the agreed buffer"
            - name: Quarterly partner and lender reporting pack
              description: |-
                ## Purpose
                The quarterly pack is the product of all the other work: what partners read to judge how the portfolio is doing and what lenders file to show you are within terms. A fixed structure, a summary page, per property pages and schedules for rent, arrears, debt and valuations, delivered on the same day each quarter, builds more trust than any amount of explanation.

                ## Milestones
                1. A pack structure agreed: summary, KPIs, property pages, debt and covenants, valuations, commentary.
                2. A pack shell built so each quarter only needs data and commentary.
                3. A review step by a second person before anything is sent.
                4. Each quarter's pack sent by the date in the reporting calendar and filed read-only.

                ## Notes
                Lenders may need a different cut from partners. Build both from the same tables so the numbers always match.
              priority: high
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A quarterly pack with summary, property pages and debt, covenant and valuation schedules is sent to partners and lenders by the calendar date each quarter."
                cadence: cyclic
              tasks:
                - "Draft the pack contents page and agree it with the main partner"
                - "Build the pack shell linked to the consolidated tables"
                - "Assemble, review and send the quarterly pack @recurring(quarterly)"
                - "File the sent version read-only with recipients and date"
            - name: Monthly portfolio close
              description: |-
                ## Purpose
                Quarterly packs are only as good as the three month-ends beneath them, and a quarter built from unclosed months turns into a two-week scramble. A short monthly close, with fixed steps for receipts, payables, accruals, reconciliations and a locked period, makes the quarter a matter of adding up.

                ## Milestones
                1. A close checklist with each step, owner and target working day.
                2. Rent reconciliation, manager intake and bank reconciliations complete before close.
                3. Accruals for known costs and income posted.
                4. The period marked closed with any late adjustments logged rather than overwritten.

                ## Notes
                Start from the **Month-end close** template and cut it down to the steps a property portfolio actually needs.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month closes by a fixed working day with a completed checklist and any later adjustments logged separately."
                cadence: rolling
              tasks:
                - "Write the close checklist with owners and target working days"
                - "Run the portfolio close checklist and lock the period @recurring(monthly:12)"
                - "Post accruals for known costs and income before locking"
                - "Log any adjustment made after close with its reason"
            - name: Valuation register and schedule
              description: |-
                ## Purpose
                Lenders test loan to value against a specific valuation, partners judge returns on the latest one and the accounts may use another, so the portfolio needs to know which value is current for each purpose. A register of every valuation, its date, valuer, basis and figure, with the next one scheduled, stops stale values sitting in reports for years.

                ## Milestones
                1. Every property's latest valuation recorded with date, valuer, basis and purpose.
                2. Lender required valuation dates entered into the reporting calendar.
                3. Internal or desktop estimates kept separate from formal valuations and labelled as such.
                4. A yearly valuation round planned and budgeted.

                ## Notes
                Valuation method belongs with your valuer. This register records which number is used where and how old it is.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A valuation register shows date, valuer, basis and purpose for every property's current value, with the next valuation scheduled."
                cadence: cyclic
              tasks:
                - "Collect the latest valuation report for each property"
                - "Record date, valuer, basis, purpose and figure in the register"
                - "Label internal estimates separately from formal valuations"
                - "Plan and budget the portfolio valuation round @recurring(yearly)"
            - name: Lease event calendar for reporting
              description: |-
                ## Purpose
                Lease expiries, break options and rent reviews change income, occupancy and covenants, yet they often live only in the manager's diary. A portfolio lease event calendar drawn from the consolidated rent roll lets reports say what is coming, not just what happened, and feeds the covenant forecast.

                ## Milestones
                1. Every expiry, break and rent review for the next 24 months listed by property.
                2. Rent at risk totalled by quarter as a share of portfolio rent.
                3. Each event given a status: notice served, in negotiation, renewed or vacated.
                4. The calendar reviewed monthly with the property or asset manager.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A 24-month lease event calendar with rent at risk by quarter is reviewed monthly and every event carries a current status."
                cadence: rolling
              tasks:
                - "Pull expiry, break and review dates from the consolidated rent roll"
                - "Total rent at risk by quarter as a share of portfolio rent"
                - "Review lease event statuses with the manager @recurring(monthly:15)"
                - "Send upcoming events to the covenant forecast"
            - name: Budget versus actual variance commentary
              description: |-
                ## Purpose
                Numbers without explanation invite the wrong questions, and explanations written the night before the pack goes out are usually vague. Writing short monthly commentary on every line that misses budget by more than an agreed threshold builds the quarterly story as you go and shows partners you know why things moved.

                ## Milestones
                1. A variance threshold agreed, such as a fixed amount or a percentage of the budget line.
                2. Every variance over threshold explained in one or two sentences with its cause.
                3. Each variance marked as timing, permanent or one-off.
                4. Monthly comments rolled into the quarterly pack commentary.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every budget variance over the agreed threshold has a written cause and a timing, permanent or one-off label each month."
                cadence: rolling
              tasks:
                - "Agree the variance threshold with the owner or main partner"
                - "Compare actuals to budget by property and portfolio @recurring(monthly:18)"
                - "Write a cause and timing label for each variance over threshold"
                - "Carry the monthly comments into the quarterly commentary draft"
            - name: Reporting data issue log
              description: |-
                ## Purpose
                The same errors recur quarter after quarter: a unit missing from a rent roll, a loan balance from the wrong date, a manager posting to the wrong property. A running log of data issues, their cause, impact and fix, with a monthly review, turns firefighting into a list of things to stop happening.

                ## Milestones
                1. A log with columns for date found, source, description, impact, owner and fix.
                2. Every correction to a sent report recorded with what changed and who was told.
                3. Root causes grouped so repeat issues are visible.
                4. Closed issues reviewed for any process change still outstanding.

                ## Notes
                Start from the **Risk register** template and rename the columns for data issues.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A data issue log records cause, impact, owner and fix for every reporting error, reviewed monthly with repeat causes grouped."
                cadence: rolling
              tasks:
                - "Set up the issue log with cause, impact, owner and fix columns"
                - "Enter every error found in the last two quarters' reports"
                - "Review open issues and repeat causes @recurring(monthly:25)"
                - "Agree one process fix for the most frequent cause"
            - name: Physical and economic occupancy explained
              description: |-
                ## Purpose
                Buildings can be 95 percent let by units and still collect only 80 percent of its potential rent once rent-free periods, discounts and arrears are counted. Learning how physical, economic and financial occupancy differ, and which one each audience expects, stops you reporting a flattering number that a lender will recalculate.

                ## Milestones
                1. Notes on physical, economic and collected occupancy with a worked example for one property.
                2. Rent-free periods, concessions and non-paying tenants placed correctly in each measure.
                3. The measure each lender and partner expects written in the KPI definitions sheet.
                4. A one-paragraph explanation ready to paste into the pack.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked example for one property shows physical, economic and collected occupancy, and the KPI sheet records which measure each recipient uses."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read an industry glossary entry on occupancy measures"
                - "Work all three measures for one property from its rent roll"
                - "Record which measure each recipient expects"
                - "Write a short explanation paragraph for the pack"
            - name: NOI to cash flow bridge
              description: |-
                ## Purpose
                Partners often see net operating income rise while distributions fall and assume something is wrong. A bridge from rent billed to NOI, then through capex, leasing costs, debt service and reserves to distributable cash, explains the gap line by line and is one of the most useful single pages in a pack.

                ## Milestones
                1. Each step from gross potential rent to distributable cash defined in words.
                2. A bridge built for the last quarter at portfolio level.
                3. Every bridging item tied to a ledger total.
                4. A version for one property used to check the method.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A quarterly bridge from gross potential rent to distributable cash ties every step to the ledger at portfolio level."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List each step from potential rent to distributable cash"
                - "Build the bridge for one property from last quarter's ledger"
                - "Extend it to the whole portfolio and tie each step to totals"
                - "Ask the agent to draft a plain-language note explaining each step"
            - name: WAULT and lease expiry profile reporting
              description: |-
                ## Purpose
                Weighted average unexpired lease term is one number that lenders and buyers use to judge income security, and it changes depending on whether you weight by rent or area and count to expiry or first break. Learning to calculate it both ways and chart the expiry profile by year makes commercial and mixed portfolios readable at a glance.

                ## Milestones
                1. WAULT calculated to expiry and to first break, weighted by rent.
                2. An expiry profile chart showing rent expiring by year.
                3. Vacant units and holding-over tenants treated consistently and noted.
                4. The chosen basis written into the KPI definitions sheet.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "WAULT to expiry and to break, weighted by rent, and an annual expiry profile chart are produced from the consolidated rent roll."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read how WAULT is defined in a lender's term sheet or an industry guide"
                - "Calculate WAULT to expiry and to break from the rent roll"
                - "Chart rent expiring by year for the portfolio"
                - "Add the chosen basis to the KPI definitions sheet"
            - name: Reading loan reporting and covenant clauses
              description: |-
                ## Purpose
                Most reporting failures with lenders come from not reading the information undertakings and financial covenant clauses closely enough. Working through each facility agreement for what must be delivered, by when, and how each ratio is defined, with your lawyer on hand for anything unclear, removes guesswork from compliance reporting.

                ## Milestones
                1. For each facility, a summary of reporting deliverables, deadlines and formats.
                2. Covenant definitions summarised with the line items they include and exclude.
                3. Cure rights, equity cure provisions and notice periods noted for reference.
                4. Unclear wording listed and put to your lawyer.

                ## Notes
                This is for organising obligations, not interpreting them. The lawyer settles what a clause means.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary per facility lists reporting deliverables, deadlines and covenant definitions, with unclear clauses sent to the lawyer."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find the information undertakings clause in the first facility agreement"
                - "Summarise deliverables, deadlines and covenant definitions on one page"
                - "Repeat the summary for each remaining facility"
                - "Send the list of unclear clauses to your lawyer"
            - name: Pulling reporting figures from a valuation report
              description: |-
                ## Purpose
                A valuation report runs to dozens of pages, yet a portfolio pack needs only the headline value, date, basis, key assumptions and any material uncertainty or special assumption. Knowing where those sit and how to summarise them faithfully avoids quoting a value out of context or missing a caveat a lender will spot.

                ## Milestones
                1. The sections holding value, date, basis and assumptions located in a current report.
                2. Special assumptions and material uncertainty statements identified and noted.
                3. A one-line valuation summary per property drafted for the pack.
                4. The summary checked by the valuer or the owner before first use.

                ## Notes
                Never adjust a valuer's figure in a report without labelling the adjustment as your own estimate.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-line valuation summary per property states value, date, basis and any special assumption, checked against the valuation reports."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Open the latest valuation report and find the value, date and basis"
                - "Note any special assumption or material uncertainty statement"
                - "Draft a one-line summary for each property"
                - "Check the summaries with the owner before they go in the pack"
            - name: Spreadsheet controls for portfolio reports
              description: |-
                ## Purpose
                A single broken lookup or a pasted value over a formula can misstate a portfolio total for months. Simple controls, separate input and output tabs, check totals that must equal zero, locked formulas and a visible error flag, catch most mistakes before a partner does.

                ## Milestones
                1. Input, calculation and output tabs separated in the main reporting workbook.
                2. Check cells added that compare totals across tabs and show an error when they differ.
                3. Formula cells protected and hard-coded overrides highlighted.
                4. A control summary at the top showing every check as pass or fail.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "The reporting workbook has separated tabs, protected formulas and a control summary where every cross-check shows pass before sending."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every place in the workbook where a total is entered by hand"
                - "Split the workbook into input, calculation and output tabs"
                - "Add check cells comparing rent roll, ledger and pack totals"
                - "Protect formula cells and add a pass or fail control summary"
            - name: Charts that show portfolio performance clearly
              description: |-
                ## Purpose
                Partners skim, and a pack of dense tables gets read on page one and nowhere else. Learning a few chart types that suit property data, occupancy trend lines, arrears by age band, debt maturity bars and lease expiry profiles, lets the summary page say in seconds what tables take minutes to show.

                ## Milestones
                1. Four standard charts chosen for occupancy, arrears, debt maturity and lease expiry.
                2. Each chart built with consistent colours, labels and axis rules.
                3. Charts linked to the reporting tables so they update with the data.
                4. A summary page tested on someone who has not seen the portfolio.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Four linked standard charts for occupancy, arrears, debt maturity and lease expiry appear on the pack summary page and update with the data."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pick one chart type for each of the four core measures"
                - "Build the occupancy trend chart from the monthly series"
                - "Apply one colour and label style across all four charts"
                - "Show the summary page to someone new and note what confused them"
            - name: Automating bank and rent roll imports
              description: |-
                ## Purpose
                Copying figures from PDFs and portal screens into a workbook is slow and introduces errors every month. Moving to direct bank exports, manager spreadsheet feeds in a fixed layout and import steps that map columns automatically can cut close time by days and leave time for checking rather than typing.

                ## Milestones
                1. Every manual copy step in the monthly process listed with time taken.
                2. Bank exports and manager feeds received in a fixed spreadsheet or CSV layout.
                3. Import steps built that map columns and property codes without retyping.
                4. Manual steps reduced by at least half and the time saving measured.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Bank and manager data load through mapped imports, with manual copy steps cut by at least half and the time saving recorded."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Time each manual copy step in this month's close"
                - "Ask each bank and manager for a fixed export layout"
                - "Build an import tab that maps columns and property codes"
                - "Measure the close again and record the time saved"
            - name: One-page portfolio dashboard
              description: |-
                ## Purpose
                Owners and partners want to see the state of the portfolio without opening the full pack. A one-page dashboard with occupancy, arrears, NOI against budget, debt and covenant headroom and the next lease events, refreshed monthly, answers the questions that otherwise arrive by phone.

                ## Milestones
                1. Eight to twelve measures chosen for the dashboard, with the reason for each.
                2. Dashboard built from the reporting tables, with no hand-entered figures.
                3. Each measure shows the current value, the change and a simple status.
                4. The owner or main partner confirms the page answers their usual questions.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page dashboard of eight to twelve linked measures is refreshed monthly and confirmed useful by the owner or main partner."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the owner which five questions they ask most often"
                - "Choose eight to twelve measures that answer them"
                - "Build the dashboard from the linked reporting tables"
                - "Refresh and send the dashboard to the owner @recurring(monthly:20)"
            - name: Shortening the quarterly reporting cycle
              description: |-
                ## Purpose
                Packs that go out six or eight weeks after quarter end are history by the time anyone reads them. Mapping each step from quarter end to send, finding the waits, and moving work into the monthly close can bring delivery forward to three or four weeks without cutting checks.

                ## Milestones
                1. The last quarter's process mapped with the date each step started and finished.
                2. The three longest waits identified with their cause.
                3. Changes agreed with managers, lenders and reviewers to remove or shorten them.
                4. The next quarter's pack delivered at least a week earlier than the last.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The next quarterly pack is sent at least one week earlier than the previous one, with the changes that achieved it written down."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write down the date each step of last quarter's pack started and finished"
                - "Circle the three longest waits and note why each happened"
                - "Agree earlier deadlines with managers and reviewers"
                - "Compare the next delivery date with the last and record the gain"
            - name: Standard reporting requirements for property managers
              description: |-
                ## Purpose
                Managers report in whatever format their software produces unless the management agreement says otherwise, and then every month starts with reformatting. A short reporting schedule added to each management agreement, setting contents, layout, file type and deadline, makes manager reports arrive ready to load.

                ## Milestones
                1. A reporting schedule written listing monthly and quarterly manager deliverables.
                2. File formats, column layouts and deadlines specified for each deliverable.
                3. The schedule agreed with each manager and attached to their agreement.
                4. First two months of reports checked against the schedule and gaps raised.

                ## Notes
                Changes to a management agreement are a contract matter. Have your lawyer or the manager's standard variation process handle the paperwork.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every property manager has agreed a written reporting schedule with contents, formats and deadlines, and two months of reports meet it."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Draft a one-page reporting schedule for managers"
                - "Specify file type, column layout and deadline for each item"
                - "Agree the schedule with each manager and attach it to their agreement"
                - "Check the first two months against it and raise any gaps"
            - name: Materiality thresholds and restatement rule
              description: |-
                ## Purpose
                Every pack contains small errors found later, and without a rule each one becomes a debate about whether to reissue. Setting thresholds for when a correction is noted next quarter, flagged by email, or triggers a reissued pack keeps corrections consistent and protects your credibility with partners and lenders.

                ## Milestones
                1. Thresholds set for minor, notable and material errors in money and in KPI terms.
                2. The response for each level written: next pack note, email notice or reissue.
                3. Covenant figures treated as material at any size and routed to the owner.
                4. The rule agreed with the main partner and lender relationship owner.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written materiality rule sets three error levels and the response to each, agreed with the main partner."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the corrections made to reports in the last year"
                - "Draft three error levels with money and KPI thresholds"
                - "Write the response required at each level"
                - "Agree the rule with the main partner"
            - name: Four-eyes review and sign-off
              description: |-
                ## Purpose
                Whoever builds a report is the worst placed to spot its errors. A short review by someone else, against a written checklist of tie-outs and reasonableness checks, with a recorded sign-off before anything goes to a partner or lender, catches the mistakes that cost the most.

                ## Milestones
                1. A reviewer named for each report type, with a deputy.
                2. A review checklist covering totals, tie-outs, prior period comparison and commentary.
                3. Review comments recorded and cleared before sending.
                4. Sign-off name and date shown in the filed final version.

                ## Notes
                For a sole owner, an accountant or a trusted partner can review the quarterly pack for a small fee or in return for their own reporting.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Every external report has a named reviewer, a completed review checklist and a recorded sign-off before it is sent."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Name a reviewer and deputy for each report type"
                - "Write a review checklist of tie-outs and reasonableness checks"
                - "Add a sign-off line to the pack shell"
                - "Run the checklist on last quarter's pack to test it"
            - name: Year-end portfolio report and accountant handover
              description: |-
                ## Purpose
                The year-end accounts and tax returns for each entity need rent schedules, arrears, deposits held, loan balances and capital spend, and an accountant chasing these piece by piece adds weeks and fees. A year-end pack per entity, built from the same reporting tables, hands over everything at once.

                ## Milestones
                1. The accountant's year-end request list obtained for each entity.
                2. A year-end pack per entity with rent, arrears, deposits, debt and capital spend schedules.
                3. Every schedule tied to the ledger and bank at the year-end date.
                4. Packs delivered by the agreed date and queries logged until closed.

                ## Notes
                Tax treatment of any item is the accountant's call. The pack's job is complete, tied-out data.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A tied-out year-end pack per entity is delivered to the accountant by the agreed date, with every query closed."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Ask the accountant for their year-end request list per entity"
                - "Build the year-end schedules from the reporting tables"
                - "Tie each schedule to the ledger and bank at year end"
                - "Deliver the packs and log queries until they are closed"
            - name: Lender annual review submission
              description: |-
                ## Purpose
                Many facilities require an annual information package: audited or management accounts, a rent roll, a compliance certificate and sometimes a fresh valuation. Preparing it from the reporting system a month before the due date, rather than in the week it is due, avoids the impression that the borrower does not know its own numbers.

                ## Milestones
                1. The annual review requirements for each facility listed from the agreement and the lender.
                2. A submission pack drafted with accounts, rent roll, compliance certificate and any other items.
                3. Figures reconciled to the latest quarterly pack and covenant tracker.
                4. The pack sent before the deadline and the lender's acknowledgement filed.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The lender annual review pack is sent before its deadline with figures reconciled to the quarterly pack and an acknowledgement filed."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Email the relationship manager to confirm this year's review requirements"
                - "Draft the submission pack from the reporting tables"
                - "Reconcile its figures to the latest quarterly pack"
                - "Send the pack and file the lender's acknowledgement"
            - name: First quarterly pack for a new partner
              description: |-
                ## Purpose
                A new equity partner or lender reads the first pack closely and forms a view that lasts. Agreeing the format, definitions and delivery date before the first quarter end, and walking them through the first pack in a short call, sets expectations and heads off a stream of questions.

                ## Milestones
                1. The partner's reporting requirements confirmed in writing before quarter end.
                2. A sample pack with last quarter's numbers shared for comment.
                3. Agreed changes made to the pack shell.
                4. The first live pack sent on time and walked through in a call.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A new partner has commented on a sample pack and received their first live pack on time, followed by a walkthrough call."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the new partner what they need to see and by when"
                - "Send a sample pack built on last quarter's numbers"
                - "Update the pack shell with the agreed changes"
                - "Book a thirty-minute walkthrough after the first live pack"
            - name: Reporting through a covenant near-miss
              description: |-
                ## Purpose
                When a covenant test shows thin headroom or a breach is possible, the quality and timing of the information you give the lender matters as much as the number. Preparing a factual reporting package, the calculation, the cause, the forecast and the actions under way, with your lawyer guiding what is sent and when, keeps the conversation orderly.

                ## Milestones
                1. The covenant calculation rechecked by a second person against the agreement definitions.
                2. Cause of the shortfall and forecast for the next two test dates set out with sources.
                3. Your lawyer briefed and their advice on notice and timing recorded.
                4. A lender information package prepared and sent as advised, with follow-up dates.

                ## Notes
                Decisions on notices, waivers and cures are legal and commercial. This project is about having the facts straight and ready.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A rechecked covenant calculation, cause, forecast and action list are prepared and shared with the lawyer before any lender contact."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Have a second person recheck the covenant calculation against the agreement"
                - "Write the cause of the shortfall with supporting figures"
                - "Forecast the next two test dates from known lease events"
                - "Brief your lawyer and record their advice on what to send and when"
            - name: Reporting handover when changing property manager
              description: |-
                ## Purpose
                Switching manager is when rent histories, deposits, arrears and service contract records most often go missing, and the reporting gap can run for months. A handover data checklist, an opening balance sign-off between outgoing and incoming managers, and a parallel month protect the continuity of every report.

                ## Milestones
                1. A handover data checklist agreed covering rent roll, arrears, deposits, contracts and open works.
                2. Closing balances from the outgoing manager reconciled to opening balances with the new one.
                3. Client money and deposit balances confirmed in writing by both managers.
                4. One month reported in parallel and differences resolved.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Opening balances with the new manager reconcile to the outgoing manager's closing balances, with one parallel month and no unresolved differences."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Draft the handover data checklist and send it to both managers"
                - "Agree the cut-off date and closing balance schedule"
                - "Reconcile closing and opening balances line by line"
                - "Run one month in parallel and resolve differences"
            - name: Annual valuation round coordination
              description: |-
                ## Purpose
                Commissioning valuations for several properties at once is cheaper and gives a consistent date for loan to value and partner returns, but it needs the valuer to receive rent rolls, leases and capex details in good time. Running the round as a dated event, with an information pack per property, gets reports back before the year-end pack.

                ## Milestones
                1. Properties to be valued, basis and purpose agreed with lenders and partners.
                2. Valuer instructed with fees and a valuation date confirmed.
                3. An information pack per property sent to the valuer with rent roll, leases and capex.
                4. Draft reports checked for factual errors and final figures entered in the valuation register.

                ## Notes
                Check factual accuracy only. Challenging a valuer's opinion is a separate conversation the owner leads.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All scheduled valuations are received at a common date with factual checks done and figures entered in the valuation register."
                cadence: cyclic
              tasks:
                - "Confirm which properties need valuing this year and why"
                - "Instruct the valuer and agree the valuation date"
                - "Send an information pack per property to the valuer"
                - "Check draft reports for factual errors before they are finalised"
            - name: Reporting for a small owner-run portfolio
              description: |-
                ## Purpose
                An owner with five to twenty units does not need a forty-page pack, but still needs to know rent is collected, costs are in line, loans are safe and the bank has what it asked for. A lean monthly routine, one rent check, one arrears list, one summary page, built around evenings and a busy day job, gives that without becoming a second job.

                ## Milestones
                1. A one-page monthly summary covering rent collected, arrears, costs and loan balances.
                2. A fixed thirty-minute monthly slot in the diary for reporting.
                3. Lender and accountant deliverables listed so nothing is missed.
                4. Three consecutive months completed in the slot.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A one-page monthly portfolio summary is completed for three consecutive months within a fixed thirty-minute slot."
                cadence: rolling
              tasks:
                - "Block a thirty-minute monthly reporting slot in your diary"
                - "Set up a one-page summary with rent, arrears, costs and loans"
                - "Fill in the monthly summary in your reporting slot @recurring(monthly:28)"
                - "List what the lender and accountant need each year"
            - name: First 90 days as a portfolio reporting analyst
              description: |-
                ## Purpose
                An analyst joining a property owner inherits workbooks built by someone else, managers they have never met and deadlines already set. A 30, 60 and 90 day plan, learn the portfolio and the pack, take over the monthly cycle, then improve one thing, earns trust before changing anything visible.

                ## Milestones
                1. By day 30, the master list, calendar and last two packs understood and questions answered.
                2. By day 60, one monthly close and manager intake run without help.
                3. By day 90, a quarterly pack delivered and one improvement proposed with evidence.
                4. A meeting held with every property manager and the main lender contact.

                ## Notes
                Start from the **Onboarding 30/60/90** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Within 90 days the analyst runs the monthly close alone, delivers a quarterly pack and proposes one evidenced improvement."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Read the last two quarterly packs and list every question"
                - "Book introductions with each property manager"
                - "Shadow one monthly close, then run the next alone"
                - "Propose one improvement with before and after evidence"
            - name: Multi-currency portfolio reporting
              description: |-
                ## Purpose
                Owning property in more than one country means rents, costs and loans in different currencies, and a total that moves with exchange rates as much as with occupancy. Fixing a reporting currency, a rate source and a rule for which rate applies to income, balances and loans makes the totals comparable and the currency effect visible.

                ## Milestones
                1. A reporting currency and an exchange rate source chosen and written down.
                2. Rules set for average rates on income and period-end rates on balances.
                3. Each property reported in local currency and in the reporting currency.
                4. A currency effect line separating exchange movement from operating change.

                ## Notes
                Any hedging or tax treatment of currency is for your bank and accountant. This project keeps the reporting consistent.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Portfolio reports show each property in local and reporting currency, with a stated rate source and a separate currency effect line."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Choose a reporting currency and a public exchange rate source"
                - "Write the rules for which rate applies to income, balances and loans"
                - "Record month-end and average rates in the rate table @recurring(monthly:3)"
                - "Add a currency effect line to the portfolio summary"
            - name: Reporting a mixed residential and commercial portfolio
              description: |-
                ## Purpose
                Flats and shops are measured differently: residential reporting is about units, turnover and arrears, commercial about area, WAULT, service charges and incentives. Reporting both in one pack means choosing which measures apply to each and avoiding a portfolio average that hides what is happening in either half.

                ## Milestones
                1. Measures assigned to residential, commercial or both in the KPI definitions sheet.
                2. Separate sub-totals for residential and commercial in every schedule.
                3. Commercial incentives and service charge balances reported alongside residential arrears.
                4. Portfolio totals shown only where the measure means the same in both.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The pack reports residential and commercial sub-totals separately and shows portfolio totals only for measures that apply to both."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Tag each property or unit as residential or commercial in the master list"
                - "Assign each KPI to residential, commercial or both"
                - "Add sub-totals for each half to every schedule"
                - "Remove portfolio averages that mix incompatible measures"
            - name: Entity and look-through reporting across SPVs
              description: |-
                ## Purpose
                Portfolios held in several companies or partnerships, each with its own lender and sometimes its own partners, need two views: each entity as its lender and partners see it, and the whole portfolio at your share. Building both from the same data, with ownership percentages applied once, stops partners seeing different numbers from different reports.

                ## Milestones
                1. An entity structure chart with ownership shares and lender for each entity.
                2. Entity-level reports produced for each lender and set of partners.
                3. A look-through portfolio view at the owner's share, with debt included at share.
                4. Entity and look-through totals reconciled to each other.

                ## Notes
                How entities should be consolidated in statutory accounts is a question for the accountant. This is management reporting.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Entity reports and a look-through portfolio view at the owner's share are produced from one dataset and reconcile to each other."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Draw the entity structure with ownership shares and lenders"
                - "Add an ownership share column to the master property list"
                - "Build the look-through view with income, value and debt at share"
                - "Reconcile the look-through totals back to the entity reports"
            - name: Total, income and capital return measurement
              description: |-
                ## Purpose
                Experienced partners ask not just what the portfolio earned but how it performed against a benchmark, which needs returns split into income and capital and calculated on a consistent, time-weighted basis. Measuring quarterly returns per property and for the portfolio, with a stated method, puts your reporting on the same footing as industry indices.

                ## Milestones
                1. A return method chosen and documented, including treatment of capex and part-period assets.
                2. Quarterly income, capital and total returns calculated per property.
                3. Portfolio returns chain-linked over time.
                4. A suitable published index identified for context, with its differences noted.

                ## Notes
                Report past returns as facts with their method. Do not present them as a forecast or a reason to invest.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Quarterly income, capital and total returns are calculated per property and chain-linked for the portfolio under a written method."
                cadence: cyclic
              tasks:
                - "Read a published index methodology note on property returns"
                - "Write your return method, including capex and part-period treatment"
                - "Calculate and chain-link quarterly returns @recurring(quarterly)"
                - "Note how your portfolio differs from the chosen index"
            - name: Sustainability and energy data in the portfolio pack
              description: |-
                ## Purpose
                Lenders, buyers and some partners now ask for energy ratings, consumption and emissions data alongside rent and value, and gathering it in a hurry for a refinance rarely works. Collecting the main sustainability measures once a year, per property, with sources and coverage stated, makes it a routine section of the pack.

                ## Milestones
                1. Measures chosen: energy ratings, landlord consumption, emissions estimates and data coverage.
                2. Ratings and certificate expiry dates recorded per property.
                3. Landlord-controlled consumption collected from bills or meters for the last year.
                4. A short sustainability page added to the annual pack with coverage stated.

                ## Notes
                State coverage honestly. A figure based on half the portfolio must say so.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "An annual sustainability page reports energy ratings, landlord consumption and data coverage per property, with sources stated."
                cadence: cyclic
              tasks:
                - "List which energy ratings and certificates exist for each property"
                - "Gather twelve months of landlord energy bills for each building"
                - "Refresh ratings, consumption and coverage for the annual pack @recurring(yearly)"
                - "Ask the agent to draft the sustainability page from the collected data"
            - name: Aligning reports with an industry reporting guideline
              description: |-
                ## Purpose
                Institutional partners judge reporting against published guidelines, such as INREV in Europe or NCREIF and PREA templates in the US, which set out definitions, disclosures and return methods. Comparing your pack to the relevant guideline and closing the main gaps makes it easier to raise capital from investors who expect that standard.

                ## Milestones
                1. The guideline most relevant to your partners chosen and its current version obtained.
                2. A gap list comparing your definitions and disclosures with the guideline.
                3. The three gaps that matter most to your partners closed.
                4. Remaining gaps and the reason for each recorded in a methods note.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A gap list against a chosen industry guideline exists, with the top three gaps closed and the rest explained in a methods note."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask your main partner which reporting guideline they follow"
                - "Obtain the current version of that guideline"
                - "Compare its definitions and disclosures with your pack"
                - "Close the top three gaps and note the rest in a methods page"
            - name: Buyer or refinance data pack from reporting records
              description: |-
                ## Purpose
                When a property is sold or refinanced, the buyer's or lender's team asks for rent rolls, arrears history, occupancy trends and operating statements going back several years. Producing that history from your reporting records, consistent with what partners were shown, speeds the process and avoids contradictions that raise doubts about the numbers.

                ## Milestones
                1. The usual request list for a sale or refinance obtained from the agent, broker or lawyer.
                2. Three years of rent rolls, operating statements and occupancy produced from reporting records.
                3. Every schedule reconciled to the packs partners received.
                4. The pack reviewed by the owner before release.

                ## Notes
                What is disclosed and when is for the owner and their lawyer. This project makes sure the history is ready and consistent.
              priority: low
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A three-year history of rent rolls, operating statements and occupancy is produced and reconciled to prior partner packs before release."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask the selling agent or broker for their standard request list"
                - "Export three years of rent rolls and operating statements"
                - "Reconcile each year to the packs partners received"
                - "Have the owner review the pack before it is released"
---

# Property Portfolio Reporting

Property portfolio reporting is the work of turning rent rolls, bank statements, loan statements, valuations and property manager reports from many buildings into one set of numbers that partners, lenders and you can act on. It is written for owners of small and mid-sized portfolios who do the reporting themselves and for the analysts and finance people who produce it for someone else. It starts with foundations, a master property list, KPI definitions, a consolidated rent roll and a reporting calendar, then moves through the monthly and quarterly operating cycle, the skills behind clear property numbers, improvements to speed and accuracy, dated events such as year-end and lender reviews, situations for different portfolios, and specialist work on returns measurement and reporting standards.

The rhythms are a weekly arrears review, monthly rent roll reconciliation, property manager report intake, close, occupancy, lease events, variance commentary and data issue review, quarterly debt, covenant, pack and returns cycles, and a yearly refresh of the calendar, valuations and sustainability data. Month-end close suits the monthly close, Risk register suits the data issue log, Metrics log suits the occupancy series, Purchase decision suits choosing software and Onboarding 30/60/90 suits a new reporting analyst. Tax, legal and lending calls stay with your accountant, lawyer and lender: this area is about producing, checking and delivering the numbers. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
