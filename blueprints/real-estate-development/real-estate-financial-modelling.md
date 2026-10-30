---
id: real-estate-development.real-estate-financial-modelling
name: Real Estate Financial Modelling
description: "Property models you can defend line by line: monthly development cash flows, acquisition pro formas, debt schedules, IRR and equity multiple, JV waterfalls, and the checks, versions and reviews that keep them right."
category: business
version: 1.0.0
tags: [real-estate-development, real-estate-financial-modelling, knowledge-worker, founder, cash-flow-model, debt-schedule, irr, jv-waterfall]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - operational-checklist
    - job-application
    - vendor
  pillars:
    - name: Real Estate Investing & Development
      emoji: "🏢"
      description: "Property as a business: development appraisals, land, planning and construction finance, delivering schemes, syndications, commercial and multifamily acquisitions, short-let portfolios and property management companies, REIT analysis, and land development in the Caribbean, for sponsors, developers and operators rather than single-unit landlords."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Real Estate Financial Modelling
          description: "Building property models: monthly development cash flows, acquisition pro formas, debt schedules, IRR and equity multiple, and JV waterfalls."
          projects:
            - name: House layout for every property model
              description: |-
                ## Purpose
                Models built a different way for every deal take twice as long to review and hide errors in a new place each time. A fixed layout of cover, inputs, timeline, calculations, debt, returns and checks, in that order, means anyone who has seen one of your models can find any number in the next one within a minute. Set it before the next deal lands, because nobody standardises during a bid.

                ## Milestones
                1. A blank workbook with named tabs for cover, inputs, timeline, calculations, debt, returns, outputs and checks.
                2. A rule that every calculation flows left to right and top to bottom, written on the cover tab.
                3. One consistent column per period across every calculation tab, with the same first column on each.
                4. The layout used to rebuild one past deal and the results matched to the original model.

                ## Notes
                Keep one row, one formula: a formula that changes partway along a row is the most common source of silent errors in property models.

                Before you start: this plan is general information to help you organise your own affairs. It is not legal advice. Rules differ between countries and change often, so check decisions that matter with a qualified lawyer or the official authority in the country concerned.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A saved blank model with a fixed tab order and flow rule, used to rebuild one past deal with matching results."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Open your last two models and list the tabs each one used"
                - "Create the blank workbook with the eight standard tabs in order"
                - "Write the flow and one-row-one-formula rules on the cover tab"
                - "Rebuild one past deal in the new layout and compare the returns"
            - name: Colour and formatting conventions for models
              description: |-
                ## Purpose
                A reviewer who cannot tell an input from a formula has to click every cell to understand a model. Agreeing one set of conventions, such as blue for hard-coded inputs, black for formulas, green for links to other tabs and a shaded fill for anything a user may change, makes a model readable in print and stops colleagues typing over calculations.

                ## Milestones
                1. A one-page style key for font colours, fills, number formats and units, saved on the cover tab of the template.
                2. Cell styles created in the spreadsheet so the conventions apply with one click.
                3. Negative numbers, percentages, multiples and currency each shown in one fixed format.
                4. The style key applied to the house template and one live model.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A style key with saved cell styles is in the house template and has been applied to at least one live model."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down the colours and number formats you already use most often"
                - "Create named cell styles for input, formula, link and check cells"
                - "Set one format each for multiples, percentages and currency"
                - "Apply the styles to the template and one live model"
            - name: Calculation settings and circularity switch
              description: |-
                ## Purpose
                Interest on a development loan depends on the loan balance, which depends on the interest, so most development models carry a circular reference somewhere. Deciding once how you handle it, either a copy-paste macro, a closed-form calculation or iterative calculation behind an on and off switch, prevents the frozen workbooks and error cascades that wreck a model the night before a deadline.

                ## Milestones
                1. One method chosen for circular finance costs and written on the cover tab.
                2. A circularity switch cell on the inputs tab that zeroes interest when set to off.
                3. A test showing the model recovers from an error when the switch is turned off and on again.
                4. Workbook calculation settings recorded so anyone opening the file knows what to expect.

                ## Notes
                If you use iterative calculation, cap the iterations and always include the switch. A single error inside a circular loop spreads to every connected cell and will not clear on its own.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The template has a documented circularity method and a working switch that clears a forced error when toggled."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find where the circular reference sits in your current development model"
                - "Choose between a paste macro, a closed-form calculation or iterative calculation"
                - "Add the circularity switch to the inputs tab and wire it to interest"
                - "Force an error in the loop and confirm the switch clears it"
            - name: Monthly timeline and period flags engine
              description: |-
                ## Purpose
                Every development cash flow rests on a timeline: a period counter, period start and end dates, and flags that switch costs and revenue on for acquisition, construction, sales and hold. Getting this engine right once means every other block can be written as a cost multiplied by a flag, and changing a start date moves the whole model instead of breaking it.

                ## Milestones
                1. A timeline row with period number, start date and end date driven from one model start date input.
                2. Flags for pre-construction, construction, sales and operation, each driven by a start date and a duration.
                3. A check that each phase's flags sum to its stated duration.
                4. The model start moved by three months and every flag shifting correctly.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A timeline tab drives every phase flag from dates and durations, with sum checks, and survives a three-month start date shift."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the phases your typical scheme passes through with their usual durations"
                - "Build the period counter and start and end date rows from one start input"
                - "Add a flag row for each phase driven by start date and duration"
                - "Shift the start date by three months and check every flag moves"
            - name: Return metrics refresher for IRR, XIRR, NPV and multiple
              description: |-
                ## Purpose
                Equity multiple, IRR, XIRR, NPV and cash-on-cash yield answer different questions, and confusing them is how a short, fast deal gets ranked above a larger one that makes more money. Working each metric by hand on two simple cash flows, then checking the spreadsheet functions against your arithmetic, builds the understanding every later block relies on.

                ## Milestones
                1. Two sample cash flows, one short and one long, written out by period.
                2. Equity multiple, IRR, NPV at a stated discount rate and cash-on-cash yield calculated for both.
                3. The difference between IRR on regular periods and XIRR on exact dates shown with the same flows.
                4. A short note explaining when each metric should lead a decision.

                ## Notes
                IRR assumes cash taken out early is reinvested at the same rate, which flatters quick deals. Always show the multiple alongside it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked sheet showing multiple, IRR, XIRR, NPV and cash-on-cash for two cash flows, with a note on when each one leads."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write out a three-year and a seven-year sample equity cash flow"
                - "Calculate the equity multiple and NPV for each by hand"
                - "Compare IRR and XIRR results on the same flows with real dates"
                - "Write one paragraph on when the multiple should outrank the IRR"
            - name: Error check sheet that flags a broken model
              description: |-
                ## Purpose
                A model that balances on screen can still drop a month of costs or count a sale twice. A checks tab that tests sources against uses, debt balances against drawdowns, flags against durations and totals against the summary, with one master flag on the cover, catches the mistakes reviewers find embarrassing and lenders find alarming.

                ## Milestones
                1. A checks tab with at least eight tests, each returning zero when the model is correct.
                2. Sources equal uses in every period and in total.
                3. Debt closing balance equals opening balance plus drawdowns plus interest less repayments, every period.
                4. A master check cell on the cover and on every output page that turns red if any test fails.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The template has a checks tab with eight or more tests and a master flag shown on the cover and outputs."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the errors reviewers have found in your models before"
                - "Build a sources equals uses check by period"
                - "Add debt roll-forward, flag duration and summary total checks"
                - "Link the master check to the cover and output pages"
            - name: Personal template library and file naming
              description: |-
                ## Purpose
                Most modellers rebuild the same development, acquisition and waterfall blocks from scratch because last year's version is buried in a deal folder. A small library of clean templates, each stripped of deal data, with a file naming rule that carries deal, model type, version and date, saves hours per deal and stops the wrong version going out.

                ## Milestones
                1. A library folder holding separate templates for development, acquisition, debt and waterfall blocks.
                2. Every template cleared of client or deal data and checked to show zero errors when blank.
                3. A naming rule such as deal, model type, version number and date written in the library folder.
                4. Old working files moved out of the active folder into an archive.

                ## Notes
                Never carry an employer's or client's confidential model into a personal library. Rebuild the logic yourself in a blank file.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A template library of at least four clean blocks exists with a written file naming rule, and the working folder holds only current versions."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Create the library folder with subfolders for each model type"
                - "Strip one existing model of deal data and save it as a template"
                - "Write the file naming rule in a short note in the library folder"
                - "Archive superseded model files from the working folder @recurring(monthly:15)"
            - name: Choosing modelling software and add-ins
              description: |-
                ## Purpose
                Spreadsheets remain the standard for property models, but dedicated cash flow software, lease-by-lease valuation tools and spreadsheet auditing add-ins each solve problems a spreadsheet handles badly. Comparing two or three options against the work you actually do, the lenders you deal with and the formats partners expect avoids paying for a tool nobody else can open.

                ## Milestones
                1. A list of the model types you build in a typical year, with how often each comes up.
                2. Two or three tools or add-ins shortlisted and scored against the same criteria, including file sharing with partners.
                3. A trial of the leading option on one real deal.
                4. A decision recorded: stay with the spreadsheet alone, add an auditing add-in, or adopt dedicated software.

                ## Notes
                Start from the **Purchase decision** template. Ask your main lender and JV partners which formats they accept before you commit.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on modelling software, scored against at least four criteria after a trial on one real deal."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Count the development, acquisition and waterfall models you built last year"
                - "Ask two partners or lenders which model formats they accept"
                - "Score two or three tools against cost, sharing, audit and learning time"
                - "Trial the leading option on one deal and record the decision"
            - name: First acquisition model from a blank sheet
              description: |-
                ## Purpose
                Copying a template teaches you where numbers go; building an acquisition model from an empty file teaches you why. Modelling a simple stabilised building with purchase costs, net operating income, an interest-only loan, a sale at the end and the resulting returns, without looking at anyone else's model, exposes exactly which pieces you do not yet understand.

                ## Milestones
                1. A sources and uses table for purchase price, transfer taxes and fees, loan and equity.
                2. Annual net operating income for five years built from rent, vacancy and operating costs.
                3. An exit value and net sale proceeds in year five.
                4. Unlevered and levered IRR and equity multiple, checked against a hand calculation.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A five-year acquisition model built without a template, with sources and uses, NOI, debt, exit and returns checked by hand."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick a simple stabilised building from a public sales listing as the case"
                - "Build the sources and uses table in a blank file"
                - "Add five years of NOI, an interest-only loan and a year-five exit"
                - "Check the equity multiple against a hand calculation"
            - name: Monthly development cash flow from land to exit
              description: |-
                ## Purpose
                Appraisals give a profit figure; a monthly cash flow shows when the money is needed, how much the peak debt is and how long equity is tied up, which is what lenders and partners actually ask about. Building one for a real or recent scheme, with land, fees, construction, finance, sales and profit by month, is the central skill of development modelling.

                ## Milestones
                1. Land, fees, construction, contingency and sales costs laid out by month against the timeline flags.
                2. Sales receipts placed in the months they complete, net of agent and legal costs.
                3. Funding drawn in a stated order with a peak funding requirement shown.
                4. Profit, peak equity, months of equity exposure and project IRR shown on one summary.
                5. Total costs and revenue reconciled to the appraisal for the same scheme.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A monthly cash flow for one scheme that reconciles to its appraisal and reports peak funding, profit and project IRR."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Choose a live or recent scheme with a finished appraisal to model"
                - "Lay out each cost heading by month using the phase flags"
                - "Place sales receipts in completion months and net off sales costs"
                - "Reconcile the cash flow totals to the appraisal and explain any gap"
            - name: S-curve phasing of construction costs
              description: |-
                ## Purpose
                Spreading build cost evenly across the programme understates the middle months and overstates the start and end, which moves peak debt and finance cost. Modelling an S-curve, or loading the contractor's own cash flow forecast when you have one, gives a spend profile that matches how sites really draw money.

                ## Milestones
                1. A straight-line and an S-curve spend profile built for the same build cost and programme length.
                2. The S-curve driven by a small number of inputs, such as a peak month and a spread factor, and summing to one hundred percent.
                3. Peak debt and total interest compared between the two profiles.
                4. An option to replace the curve with a contractor's monthly forecast when one exists.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The cash flow offers straight-line, S-curve and contractor-forecast phasing, each summing to full cost, with the effect on peak debt recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Build a straight-line spend profile for one scheme's build cost"
                - "Add an S-curve profile driven by two inputs that sums to full cost"
                - "Compare peak debt and total interest between the two profiles"
                - "Add a selector to switch to a contractor's monthly forecast"
            - name: Sales receipts and deposit phasing
              description: |-
                ## Purpose
                Where homes or units are sold off-plan, deposits arrive at exchange and balances at completion, sometimes with part of the deposit usable for build costs and part held until completion. Modelling reservations, exchanges, deposits and completions as separate rows, driven by a sales rate, shows how much the sales programme really reduces peak debt.

                ## Milestones
                1. Rows for units reserved, exchanged and completed each month, driven by a sales rate and a start month.
                2. Deposit and balance receipts split, with an input for the share of deposits that can fund costs.
                3. A check that units completed never exceed units built or units available.
                4. Peak debt shown with and without usable deposits.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The cash flow models reservations, exchanges and completions separately, with a usable-deposit input and a units cap check."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your sales agent or solicitor how deposits are usually held on your schemes"
                - "Build reservation, exchange and completion rows from a monthly sales rate"
                - "Split receipts into deposits and completion balances"
                - "Add a check that completions never exceed units available"
            - name: Development loan with rolled-up interest and fees
              description: |-
                ## Purpose
                Most development loans roll interest into the balance rather than paying it monthly, charge arrangement and exit fees, and cap the facility at a share of cost or of value. A debt block that draws only what is needed after equity, accrues interest on the drawn balance, applies fees and tests the cap each month is the piece of a development model lenders read first.

                ## Milestones
                1. A facility limit input with loan-to-cost and loan-to-GDV caps tested every month.
                2. Monthly drawdowns equal to the funding need left after equity, capped at the facility limit.
                3. Interest rolled up on the opening balance plus drawdowns, with arrangement, monitoring and exit fees in the right months.
                4. Repayment from sales receipts until the balance is zero, with a roll-forward check.
                5. Total finance cost tied back to the cost line in the cash flow.

                ## Notes
                Lender term sheets differ on whether interest is charged on the facility or only on the drawn balance, and on non-utilisation fees. Model what the term sheet says, not what is typical.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The development model carries a loan block with caps, rolled-up interest, fees and repayment, passing the roll-forward check every month."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pull one lender term sheet and list every fee, rate and cap it states"
                - "Build monthly drawdowns as funding need after equity, capped at the limit"
                - "Add rolled-up interest and the arrangement, monitoring and exit fees"
                - "Repay the loan from sales receipts and add the roll-forward check"
            - name: Equity-first funding order and cash sweep
              description: |-
                ## Purpose
                Lenders usually want the sponsor's equity spent before the first drawdown and sales proceeds swept to repay senior debt before anyone else is paid. Modelling the funding order and the repayment order explicitly, with inputs rather than hard-coded steps, means the same block works for equity-first, pro rata and equity-last deals when terms change mid-negotiation.

                ## Milestones
                1. A funding order selector for equity first, pro rata or debt first.
                2. Cumulative equity drawn compared with committed equity every month, with a check that it never exceeds the commitment.
                3. A repayment order sending sales receipts to senior debt, then any junior debt, then equity.
                4. Equity cash flows by month feeding the returns tab.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The model switches between three funding orders and a stated repayment order, with equity drawn never exceeding the commitment."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write the funding and repayment order from your current term sheet"
                - "Build the funding order selector with three options"
                - "Add the cash sweep sending receipts to debt before equity"
                - "Check equity drawn never exceeds the committed amount"
            - name: Annual income property pro forma
              description: |-
                ## Purpose
                Acquisition decisions on stabilised offices, warehouses and apartment blocks run on a ten-year pro forma: rent, vacancy, recoveries, operating costs, capital spending, debt, a sale and the returns that follow. A clean annual pro forma you can drop any income property into is the acquisition counterpart of the development cash flow, and the model most interviewers ask you to build.

                ## Milestones
                1. Revenue lines for base rent, other income, vacancy and credit loss, and recoveries.
                2. Operating costs, management fees and capital reserves below net operating income.
                3. A ten-year hold with an exit in year ten or an input year.
                4. Unlevered and levered cash flows, IRR and equity multiple on a returns summary.
                5. The pro forma tested on one listed property and its first-year NOI matched to the offering memorandum.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A ten-year annual pro forma tested on one real offering, with first-year NOI reconciled to the memorandum and returns shown."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Find an offering memorandum for a stabilised property to use as a test case"
                - "Build revenue and operating cost lines down to NOI"
                - "Add capital reserves, debt and an exit in a selectable year"
                - "Reconcile first-year NOI to the memorandum and list the differences"
            - name: Lease-by-lease commercial rent roll engine
              description: |-
                ## Purpose
                A multi-let office or retail building cannot be modelled with one rent line: each lease has its own rent, review dates, break options, expiry and rent-free period. A rent roll engine that reads each lease from a table and produces rent by period, with renewal probability and downtime at expiry, is what turns a building's lease schedule into credible income.

                ## Milestones
                1. A lease table with tenant, area, passing rent, start, expiry, break, review dates and incentive terms.
                2. Rent by period for each lease, including reviews and rent-free months.
                3. Renewal probability, void months and new letting assumptions applied at each expiry or break.
                4. Total rent tied to the rent roll provided by the seller for the first period.

                ## Notes
                Keep the lease table as a pure input block. The legal reading of break and review clauses belongs with your solicitor; the model records the dates and terms they confirm.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A rent roll engine produces rent per lease per period with reviews, incentives and expiry assumptions, matching the seller's first-period rent roll."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Lay out the lease table columns from a real rent roll"
                - "Calculate rent by period for each lease with rent-free months"
                - "Add renewal probability and void assumptions at each expiry"
                - "Update lease events in owned asset models from tenant notices @recurring(monthly:8)"
            - name: Multifamily unit mix revenue build
              description: |-
                ## Purpose
                Apartment revenue depends on how many units of each type there are, their current and market rents, how quickly leases turn over and what concessions are offered to fill them. Building revenue from a unit mix table rather than a single average rent lets you model renovations by unit type, loss to lease and the lag before new rents take hold.

                ## Milestones
                1. A unit mix table with unit type, count, size, in-place rent and market rent.
                2. Gross potential rent, loss to lease, vacancy, concessions and bad debt by period.
                3. Turnover assumptions moving in-place rents towards market as leases roll.
                4. Revenue for the first period reconciled to the seller's trailing rent collections.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Revenue is built from a unit mix table with loss to lease and turnover, reconciled to trailing collections for one building."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Build the unit mix table from one building's rent roll"
                - "Calculate gross potential rent and loss to lease by unit type"
                - "Add turnover so rents move to market as leases roll"
                - "Reconcile first-period revenue to trailing twelve-month collections"
            - name: Operating costs, recoveries and capex reserve lines
              description: |-
                ## Purpose
                Net operating income is only as good as the cost lines beneath it, and the most common modelling slips are recoveries that ignore vacant space, management fees on the wrong base and capital spending left out entirely. A cost block that separates recoverable from non-recoverable costs, grows each line from its own input and keeps capital items below NOI makes every acquisition model easier to challenge.

                ## Milestones
                1. Operating cost lines grouped into recoverable and non-recoverable, each with its own growth input.
                2. Recoveries calculated on occupied area only, so vacancy costs the owner.
                3. Management fee calculated on the base the management agreement uses.
                4. Capital reserves and planned capital projects shown below NOI and in the cash flow.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The pro forma separates recoverable and non-recoverable costs, recovers on occupied area and holds capital items below NOI."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Sort one property's operating budget into recoverable and non-recoverable lines"
                - "Link recoveries to occupied area rather than total area"
                - "Set the management fee base to match the management agreement"
                - "Move capital reserves and projects below the NOI line"
            - name: Investment loan amortisation schedule
              description: |-
                ## Purpose
                Investment loans on income property come with interest-only periods, amortisation profiles, fixed or floating rates and prepayment terms, and each changes cash flow to equity. A debt schedule that handles interest-only then amortising periods, a floating rate from a forward curve input and a balloon at maturity covers most deals you will see.

                ## Milestones
                1. Loan amount sized from the lower of a loan-to-value and a debt service coverage constraint.
                2. An interest-only period followed by amortisation on a stated profile.
                3. A fixed or floating rate option, with the floating rate built from a base rate row plus margin.
                4. Balloon repayment and any prepayment or exit fee at sale or maturity, with a roll-forward check.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A debt schedule sizes the loan from two constraints, handles interest-only and amortising periods, and passes a roll-forward check."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the terms of one investment loan quote you have received"
                - "Size the loan from loan-to-value and debt service coverage tests"
                - "Build interest-only and amortising periods with a balloon at maturity"
                - "Add a base rate row and margin for the floating rate option"
            - name: DSCR, LTV and debt yield covenant tests
              description: |-
                ## Purpose
                Loan agreements set covenants on debt service coverage, loan-to-value and sometimes debt yield, and a breach can trigger a cash trap or a default long before the property looks distressed. Showing each test every period against its threshold, with the headroom in currency and percentage, tells you how far rent or value can fall before the lender steps in.

                ## Milestones
                1. DSCR, LTV and debt yield calculated every period using the definitions in the loan terms.
                2. Each test compared with its covenant and cash trap thresholds.
                3. Headroom shown as the fall in NOI or value that would cause a breach.
                4. A flag on the outputs page for any period that breaches or comes within a set margin.

                ## Notes
                Covenant definitions vary between lenders, for example whether DSCR uses actual or projected income. Ask the lender or your solicitor for the definition and model that one.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The model reports DSCR, LTV and debt yield per period against stated thresholds, with headroom and a breach flag on outputs."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Copy the covenant definitions from the loan terms into the inputs tab"
                - "Calculate DSCR, LTV and debt yield every period"
                - "Work out the NOI and value falls that would breach each test"
                - "Add a breach flag to the outputs page"
            - name: Exit value and disposal costs block
              description: |-
                ## Purpose
                In many acquisition models most of the return comes from the sale, so the exit block deserves more care than it usually gets. Capitalising forward NOI rather than trailing NOI, applying sale costs and any debt repayment fees, and showing the implied value per square metre or per unit lets a reader sanity-check the exit at a glance.

                ## Milestones
                1. Exit value calculated on the following year's NOI at an exit yield input.
                2. Sale costs, debt repayment and prepayment fees deducted to reach net proceeds to equity.
                3. Implied value per square metre or per unit shown beside the exit value.
                4. The share of total profit that comes from the sale shown on the returns summary.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The exit block uses forward NOI, deducts sale and debt costs, and shows value per unit and the share of profit from the sale."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check which year's NOI your current model capitalises at exit"
                - "Rebuild the exit on forward NOI with sale cost inputs"
                - "Add implied value per square metre or per unit"
                - "Show the percentage of total profit that comes from the sale"
            - name: Levered and unlevered returns summary
              description: |-
                ## Purpose
                Partners compare deals on the same handful of numbers: unlevered and levered IRR, equity multiple, peak equity, profit and cash-on-cash yield by year. A returns summary that pulls these from one place, labels each one with its definition and ties every figure back to the cash flow is the page most people will read, so it has to be right.

                ## Milestones
                1. Unlevered and levered cash flows taken from single rows in the calculation tabs.
                2. IRR, equity multiple, profit, peak equity and yearly cash-on-cash shown for both.
                3. A definition line under each metric, including whether fees and promote are deducted.
                4. Every summary figure linked to its source, with no hard-coded numbers.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A returns summary shows levered and unlevered metrics with definitions, every figure linked to the cash flow with no hard codes."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the return metrics your partners or lenders ask for most"
                - "Create single unlevered and levered cash flow rows to feed the summary"
                - "Add each metric with a one-line definition beneath it"
                - "Trace every summary figure to its source and remove any hard codes"
            - name: JV waterfall with preferred return and promote
              description: |-
                ## Purpose
                Joint venture agreements split cash between the money partner and the sponsor through a waterfall: return of capital, a preferred return, then a promote above one or more hurdles. Modelling the waterfall from the agreement's own wording, period by period, shows each partner's IRR and multiple and reveals where a small change in terms moves a large amount of money.

                ## Milestones
                1. Distribution steps written out in plain words from the JV terms, with the source clause for each.
                2. Capital accounts tracked for each partner, with the preferred return compounding as the terms state.
                3. Cash distributed period by period through each tier until it runs out.
                4. IRR and multiple for each partner, with total distributions equal to total project cash.
                5. A test case with round numbers checked by hand.

                ## Notes
                Whether the preferred return compounds, accrues or is paid current, and whether hurdles are tested on IRR or multiple, are commercial and legal terms. Model the signed wording and ask your solicitor where it is unclear.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A period-by-period waterfall with capital accounts and partner returns, distributing exactly the project cash and matching a hand-checked test case."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write the waterfall steps in plain words from the JV term sheet"
                - "Build capital accounts and the preferred return for each partner"
                - "Distribute cash through each tier by period"
                - "Check the waterfall against a round-number case worked by hand"
            - name: Pre-send model check routine
              description: |-
                ## Purpose
                Models go out under time pressure, and the errors partners remember are the obvious ones: a check flag still red, last week's rate, a hidden row with a hard code, the wrong scenario selected. A short checklist run before any model leaves your desk, and a weekly look back at what went out, catches most of them in ten minutes.

                ## Milestones
                1. A written checklist of ten or fewer items covering checks, scenario, inputs date, hard codes, hidden rows and file name.
                2. The checklist run and initialled before every model is sent.
                3. A log of models sent with date, recipient and version.
                4. Any error found after sending recorded with the checklist item that would have caught it.

                ## Notes
                Start from the **Operational checklist** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every model sent in a month has a logged, completed checklist, and post-send errors are recorded against checklist items."
                cadence: rolling
              tasks:
                - "Write the ten-item pre-send checklist and save it beside the template"
                - "Start a sent-models log with date, recipient and version"
                - "Review the sent-models log against the checklist @recurring(weekly:fri)"
                - "Add a checklist item for any error that slipped through"
            - name: Model version log and change register
              description: |-
                ## Purpose
                When a partner asks why the IRR fell two points since last Tuesday, you need an answer better than 'several things changed'. A change register inside each live model, recording the version, date, what changed, who asked and the effect on the headline returns, turns those conversations into a one-line reply and protects you when assumptions were set by someone else.

                ## Milestones
                1. A change log tab in the template with version, date, change, requested by and effect on IRR and profit.
                2. Each saved version of a live model given a new number and a log entry.
                3. A bridge from the first version's returns to the current one, built from the log.
                4. Old versions kept read-only in an archive folder.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each live model has a change log with an entry per version and a returns bridge from first version to current."
                cadence: rolling
              tasks:
                - "Add a change log tab to the template"
                - "Back-fill the log for your most active live model"
                - "Build a returns bridge from version one to the current version"
                - "Tidy change logs and archive superseded versions @recurring(monthly:3)"
            - name: Live deal model register
              description: |-
                ## Purpose
                Analysts and founders juggling several deals lose track of which model is current, who has it and what decision it is waiting on. A single register of live models, with deal, model type, current version, owner, next decision and date, reviewed every Monday, stops two people updating different copies and stops dead deals soaking up hours.

                ## Milestones
                1. A register listing every live model with deal, type, version, owner, next decision and decision date.
                2. A status for each model: building, in review, sent, waiting or closed.
                3. Dead or paused deals moved to closed with the reason.
                4. The register reviewed weekly and kept to models that are genuinely live.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A register shows every live model with current version and next decision, reviewed weekly with closed deals moved off."
                cadence: rolling
              tasks:
                - "List every model you have touched in the last month in one table"
                - "Add version, owner, next decision and date for each"
                - "Review the register and update each model's status @recurring(weekly:mon)"
                - "Close out deals with no decision expected in the next month @recurring(monthly:27)"
            - name: Monthly actuals into the live development model
              description: |-
                ## Purpose
                Once a scheme is on site, the model stops being a forecast and becomes a control tool, but only if actual costs, drawdowns and sales are loaded each month. Replacing forecast months with actuals from the cost report and loan statements, and reforecasting the rest, shows the true profit and funding position before the lender's monitoring surveyor does.

                ## Milestones
                1. An actuals switch so past months read from an actuals block and future months from the forecast.
                2. Actual costs loaded from the quantity surveyor's cost report and actual drawdowns from loan statements.
                3. Remaining months reforecast with the current programme and sales position.
                4. A one-line monthly note of forecast profit, peak debt and completion date against last month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The live development model holds actuals for every past month and a monthly note comparing profit, peak debt and completion to last month."
                cadence: cyclic
              tasks:
                - "Add an actuals block and a switch by period to the development model"
                - "Load the latest cost report and loan statement into the actuals block @recurring(monthly:12)"
                - "Reforecast remaining months and write the profit and peak debt note @recurring(monthly:14)"
                - "Send the note to your partner or lender contact"
            - name: Quarterly reforecast of hold asset models
              description: |-
                ## Purpose
                Models for properties you own drift from reality as leases change, costs rise and rates move, and a stale model gives a false answer the day a buyer or lender calls. Rolling each hold model forward every quarter, with actual income, current rent roll and current debt terms, keeps a ready answer to the question of what the asset is earning and what it would return from here.

                ## Milestones
                1. Each hold model rolled forward with the last quarter's actual income and costs.
                2. Rent roll, vacancy and debt balance updated to the quarter end.
                3. Forward returns from today recalculated and compared with the original business plan.
                4. A short variance note per asset saved with the model.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every hold model is rolled forward within a month of each quarter end, with a variance note against the business plan."
                cadence: cyclic
              tasks:
                - "List every hold asset that has a model and the date it was last updated"
                - "Roll each hold model forward with actuals and the current rent roll @recurring(quarterly)"
                - "Write a variance note against the original business plan"
                - "File the updated model and note in the asset folder"
            - name: Floating rate and hedge inputs refresh
              description: |-
                ## Purpose
                Floating rate development and investment loans are modelled with a base rate assumption that can be months out of date, and interest is often the largest swing in a development's profit. Refreshing the base rate path from a published forward curve each month, and recording any cap or swap terms, keeps finance costs in live models current without guesswork.

                ## Milestones
                1. One shared input sheet holding the base rate path by month, its source and its date.
                2. Every live model linked to that sheet rather than holding its own rate.
                3. Cap or swap strike, term and cost recorded for each hedged loan.
                4. The effect of the latest refresh on each live model's finance cost noted.

                ## Notes
                A forward curve is a market price, not a forecast. Run a higher-rate case beside it rather than relying on it alone.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated base rate sheet feeds every live model, refreshed each month, with hedge terms recorded for each hedged loan."
                cadence: rolling
              tasks:
                - "Choose one published source for the base rate forward curve"
                - "Build the shared rate sheet with source and date fields"
                - "Refresh the rate path and note the effect on live models @recurring(monthly:20)"
                - "Record cap or swap terms for each hedged loan"
            - name: Weekly timed modelling drill
              description: |-
                ## Purpose
                Speed and accuracy under a clock are what modelling tests and live bids both demand, and they fade without practice. A forty-five minute drill each week, building one block such as a loan schedule, a rent roll or a two-tier waterfall from a blank sheet, keeps the mechanics fast and shows which blocks still need work.

                ## Milestones
                1. A list of twelve drill blocks, each with a short case and a known answer.
                2. One drill completed each week under a forty-five minute limit.
                3. Time taken and errors found recorded for each drill.
                4. The slowest three blocks repeated until each is under the limit.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Twelve drill blocks with answers exist, and a drill log shows one timed drill a week with times and errors."
                cadence: rolling
              tasks:
                - "Write twelve short drill cases with their answers"
                - "Complete one timed drill from a blank sheet @recurring(weekly:sat)"
                - "Log the time and any errors after each drill"
                - "Repeat the three slowest drills next month"
            - name: Monthly peer model swap
              description: |-
                ## Purpose
                Modellers rarely see anyone else's work closely, so habits harden without challenge. Swapping one model a month with a trusted peer, each reviewing the other's against the same checklist for half an hour, is the cheapest way to pick up better techniques and find the blind spots in your own structure.

                ## Milestones
                1. One or two peers agreed for a monthly swap, with confidential data removed or replaced by dummy figures.
                2. A shared review checklist covering layout, checks, debt, returns and readability.
                3. One review given and one received each month, with written comments.
                4. One technique adopted from each review noted in your template change log.

                ## Notes
                Only swap models you are free to share. Replace deal names and figures with dummy data first.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly swap has run for three months with written comments exchanged and one adopted technique recorded per review."
                cadence: rolling
              tasks:
                - "Ask one peer whether they would swap a model each month"
                - "Agree a shared review checklist and the dummy data rule"
                - "Swap one model and exchange written comments @recurring(monthly:25)"
                - "Note one technique you will adopt from each review"
            - name: Yearly template library rebuild
              description: |-
                ## Purpose
                Templates collect patches over a year of deals: an extra fee here, a quick fix to the waterfall there, until the clean template is no longer clean. Rebuilding the library once a year, folding in the improvements that earned their place and removing the rest, keeps every new model starting from the best version of your work.

                ## Milestones
                1. Every change made to templates during the year listed from the change logs.
                2. Each change kept, generalised or dropped.
                3. Templates rebuilt and passing all checks when blank and when loaded with a test deal.
                4. A short release note saved in the library folder.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "The template library is rebuilt once a year with a release note listing kept and dropped changes, and passes checks on a test deal."
                cadence: cyclic
                effort_hours_estimate: "8"
              tasks:
                - "Gather the year's template changes from the change logs"
                - "Decide to keep, generalise or drop each change"
                - "Rebuild and test each template on a known deal @recurring(yearly)"
                - "Write the release note in the library folder"
            - name: Scenario selector for base, downside and upside cases
              description: |-
                ## Purpose
                Copying a model three times to show three cases guarantees that a later fix reaches only one of them. A scenario block that holds base, downside and upside values for each key input side by side, with one selector cell feeding the live input column, keeps every case in one file and lets a reviewer flip between them in a second.

                ## Milestones
                1. Key inputs chosen, such as sales value, build cost, programme, exit yield and interest rate.
                2. Base, downside and upside values held side by side, each with a one-line reason.
                3. A single selector cell feeding the live input column.
                4. A results table showing headline returns for all three cases, produced without manual copying.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One selector switches between three cases in the same model, and a results table shows all three without manual copying."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose the six inputs that move your returns most"
                - "Enter base, downside and upside values with a reason for each"
                - "Wire one selector cell into the live input column"
                - "Build a results table that captures all three cases"
            - name: Two-way sensitivity grids for returns
              description: |-
                ## Purpose
                Partners want to see how profit and IRR move when two inputs move together, such as sales value against build cost or exit yield against rent growth. Data tables or a small macro produce these grids, but they slow the workbook and break easily if built carelessly. Setting them up properly, on their own tab, with a switch to pause recalculation, gives the grids without the pain.

                ## Milestones
                1. Two-way grids for profit on cost and IRR against the two most important input pairs.
                2. Grid axes driven by step inputs so ranges can be widened without rebuilding.
                3. The base case cell highlighted in each grid and matching the model output.
                4. Calculation set so data tables update only when asked.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Sensitivity grids for profit and IRR on two input pairs exist on their own tab, with base cells matching outputs."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick the two input pairs that matter most for your deal type"
                - "Build the grids on a separate tab with step-driven axes"
                - "Check the base case cell in each grid matches the output page"
                - "Set data tables to recalculate only on request"
            - name: Break-even and covenant breach stress tests
              description: |-
                ## Purpose
                Sensitivity grids show what happens at chosen points; break-even tests answer the sharper question of how far an input can move before profit hits zero or a loan covenant breaks. Solving for the sales value, build cost overrun, rent fall or exit yield that hits each threshold gives a lender or partner the margin of safety in plain numbers.

                ## Milestones
                1. Break-even values found for sales value, build cost, programme delay and exit yield.
                2. The NOI fall and value fall that breach each loan covenant found.
                3. Each result shown as a percentage move from the base case.
                4. A one-paragraph margin of safety summary for the deal.

                ## Notes
                Goal seek on one input at a time is fine for a one-off. If you run these on every deal, write a short macro so results do not depend on remembering the steps.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A stress test table shows break-even and covenant breach points for at least four inputs, as percentage moves from base."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Solve for the sales value that brings profit to zero"
                - "Solve for the build cost overrun and delay that do the same"
                - "Find the NOI and value falls that breach each covenant"
                - "Write the margin of safety summary in one paragraph"
            - name: One-page model dashboard for decision makers
              description: |-
                ## Purpose
                Investment committees, lenders and partners rarely open the calculation tabs; they read one page. A dashboard with the deal in a sentence, sources and uses, headline returns, a cash flow chart, key risks, the scenario shown and the master check, printed on a single sheet, decides how the whole model is judged.

                ## Milestones
                1. A one-page output tab with deal summary, sources and uses and headline returns.
                2. A chart of cumulative equity and debt over time.
                3. The selected scenario, inputs date and master check shown in the header.
                4. The page printing cleanly on one sheet in portrait or landscape.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page dashboard with summary, returns, a funding chart, scenario label and master check prints cleanly on one sheet."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask a partner or lender which five numbers they read first"
                - "Lay out the dashboard with summary, sources and uses and returns"
                - "Add the cumulative funding chart and the header labels"
                - "Print the page and fix anything that spills onto a second sheet"
            - name: Auditing an inherited model from a broker or partner
              description: |-
                ## Purpose
                Brokers, sellers and JV partners often send their own model with a deal, built to show the deal at its best and in a structure you did not choose. A methodical audit, tracing inputs, testing the timeline, reading each formula row and rebuilding the returns independently, finds the optimistic assumptions and mechanical errors before you rely on them.

                ## Milestones
                1. A map of the model's tabs, inputs and outputs on one page.
                2. Hard codes, inconsistent row formulas and broken links listed with cell references.
                3. Key assumptions listed and compared with your own evidence.
                4. Headline returns rebuilt independently in your own template and differences explained.
                5. A written audit note sent to the model's owner with questions.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "An audit note lists errors with cell references, compares key assumptions with evidence and explains differences from an independent rebuild."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Map the inherited model's tabs, inputs and outputs on one page"
                - "Scan each calculation row for hard codes and changing formulas"
                - "Rebuild the headline returns in your own template"
                - "Ask the agent to draft the audit note from your list of findings"
            - name: Removing hard codes and circular references from a legacy model
              description: |-
                ## Purpose
                An old model that still runs a live asset is often full of typed-over numbers, links to files that no longer exist and circular references nobody remembers adding. Cleaning it, rather than rebuilding, keeps the history while making it safe to use again, and usually turns up at least one error that has been quietly wrong for years.

                ## Milestones
                1. Every hard code inside a calculation row found and replaced with a linked input.
                2. External links to other files removed or documented.
                3. Unintended circular references removed, leaving only the finance loop behind a switch.
                4. Outputs before and after the clean-up compared, with every difference explained.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The legacy model has no hard codes in calculation rows, no undocumented external links, and a before and after comparison of outputs."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Save a frozen copy of the legacy model's current outputs"
                - "Find and list hard codes and external links with cell references"
                - "Replace hard codes with inputs and remove stray circular references"
                - "Compare outputs with the frozen copy and explain each difference"
            - name: Monthly or quarterly periodicity decision
              description: |-
                ## Purpose
                Monthly periods suit development and lender reporting; quarterly or annual periods suit long holds and keep files small. Choosing the periodicity per model type, and building a summary that rolls monthly results into quarters and years, avoids models that are either too coarse to show peak debt or too heavy to open.

                ## Milestones
                1. A rule written for which model types run monthly, quarterly or annually.
                2. A roll-up block that sums monthly flows into quarters and years.
                3. IRR calculated on the native periods and checked against XIRR on dates.
                4. The rule added to the cover tab of each template.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written periodicity rule per model type exists, with a tested monthly-to-annual roll-up in the template."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List your model types and the reporting each one feeds"
                - "Write the periodicity rule for each type"
                - "Build the monthly to quarterly and annual roll-up block"
                - "Check the IRR on native periods against XIRR on dates"
            - name: Model build against a bid deadline
              description: |-
                ## Purpose
                Land and building sales run to bid dates, and the model is usually what decides how much to offer and how fast. Planning the build backwards from the deadline, with the template ready, inputs requested on day one and a review slot booked before the bid goes in, means the final figure comes from a checked model rather than the version that happened to be open at midnight.

                ## Milestones
                1. A dated plan from information request to model freeze to review to bid submission.
                2. Data requests sent to agent, cost consultant and lender on day one.
                3. A frozen model version with the change log entry for the bid case.
                4. A second-person review completed before the bid figure is agreed.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A bid model is frozen, logged and reviewed by a second person before the bid deadline, with the plan dates met."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Write the bid date and work back to the model freeze and review dates"
                - "Send data requests to the agent, cost consultant and lender"
                - "Freeze the bid version and log it in the change register"
                - "Book a reviewer for a two-hour slot before the bid is agreed"
            - name: Lender model submission and model audit
              description: |-
                ## Purpose
                Larger development and investment loans often come with a lender's model review or a formal third-party model audit, and a model built for internal use rarely passes without changes. Preparing a submission version with clear inputs, the lender's own definitions, a map of the model and answers to likely questions shortens credit approval and avoids paying for repeated audit rounds.

                ## Milestones
                1. A submission version with deal-specific inputs and lender definitions for covenants and fees.
                2. A model map and assumptions book explaining each input and its source.
                3. Lender or auditor questions logged with answers and model changes.
                4. A clean audit or review sign-off recorded with the final version number.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A submission model with a model map and assumptions book receives lender or audit sign-off, logged against the final version number."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Ask the lender for their covenant definitions and model format requirements"
                - "Write the model map and assumptions book"
                - "Log each lender or auditor question with the answer and any change"
                - "Record the sign-off and final version number"
            - name: Real estate modelling test for an interview
              description: |-
                ## Purpose
                Real estate private equity, development and lending roles commonly set a timed modelling test, from a short paper exercise to a three-hour acquisition or development case at a computer. Preparing with timed practice cases, a fast personal template you can rebuild from memory and a short memo format means the test shows your best work rather than your nerves.

                ## Milestones
                1. The likely test format, length and permitted tools found out from the recruiter.
                2. Three practice cases completed under the test's time limit.
                3. A skeleton layout you can rebuild from a blank sheet in fifteen minutes.
                4. A one-page investment memo format practised with each case.

                ## Notes
                Start from the **Job application** template. Most tests reward a clean, checked model and a clear recommendation over a complex structure that is unfinished.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: event-completion
                success_criteria: "Three timed practice cases and memos are completed before the test date, and the skeleton layout is rebuilt from memory in fifteen minutes."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Ask the recruiter for the test format, time limit and tools allowed"
                - "Rebuild your skeleton layout from memory and time it"
                - "Complete three practice cases under the real time limit"
                - "Write a one-page memo for each practice case"
            - name: Model handover pack for a JV partner
              description: |-
                ## Purpose
                When a JV partner or investor takes over a copy of your model, every unexplained assumption becomes a question and every unusual formula becomes a doubt. A handover pack with a short user guide, an assumptions book, the change log and a walkthrough call means the partner trusts the numbers and stops rebuilding them.

                ## Milestones
                1. A user guide of two pages or fewer explaining tabs, inputs and switches.
                2. An assumptions book listing every input with its source and date.
                3. A walkthrough call held and questions recorded.
                4. Agreement on who owns updates to the model from handover onwards.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A partner receives a user guide, assumptions book and change log, a walkthrough is held, and model ownership is agreed in writing."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write a two-page user guide to the model's tabs and switches"
                - "Export the assumptions book with sources and dates"
                - "Hold a walkthrough call and note every question asked"
                - "Agree in writing who updates the model after handover"
            - name: Founder's first deal model without an analyst
              description: |-
                ## Purpose
                Founders doing their first development or acquisition often rely on a broker's model or a lender's quick calculation because building their own feels out of reach. A deliberately simple model, with one tab of inputs, a monthly or annual cash flow, a basic loan and a returns line, is enough to check what others tell you and to answer a lender's questions yourself.

                ## Milestones
                1. One input tab with the twenty numbers that drive the deal, each with its source.
                2. A cash flow showing money in and out by period, with total profit.
                3. A loan line with interest and repayment that a lender can follow.
                4. Profit, equity needed, peak debt and equity multiple on one summary.
                5. The model walked through with your lender or accountant and their questions answered.

                ## Notes
                Simple and right beats elaborate and wrong. Add complexity only when a lender or partner asks a question the model cannot answer.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A founder-built model with sourced inputs, a cash flow, a loan line and a summary has been walked through with a lender or accountant."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write the twenty numbers that drive your deal and where each came from"
                - "Build the cash flow with money in and out by period"
                - "Add a simple loan line with interest and repayment"
                - "Book a walkthrough with your lender or accountant"
            - name: Career switch into real estate modelling
              description: |-
                ## Purpose
                Accountants, bankers, surveyors and engineers moving into property investment roles usually know spreadsheets but not the property-specific blocks: rent rolls, development phasing, construction loans and waterfalls. A planned four-month programme that builds one block a week and ends with a portfolio of three clean sample models gives an interviewer something concrete to look at.

                ## Milestones
                1. A gap list comparing your current skills with the blocks in this area.
                2. A weekly build plan covering timeline, development cash flow, acquisition pro forma, debt and waterfall.
                3. Three sample models, built with public or invented data, each with a one-page memo.
                4. The portfolio reviewed by someone working in the industry and their feedback applied.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Three sample models with memos, built on public or invented data, have been reviewed by an industry practitioner within four months."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Write a gap list of the property model blocks you have never built"
                - "Plan one block per week across sixteen weeks"
                - "Log the block built and the hardest formula each week @recurring(weekly:wed)"
                - "Ask an industry contact to review the finished portfolio"
            - name: Briefing and checking a freelance modeller
              description: |-
                ## Purpose
                Founders and small developers often hire a freelance modeller for a lender submission or a JV negotiation, then receive a model they cannot run or check. A written brief stating the deal, the outputs needed, the layout and check standards, the deadline and the handover terms, plus your own review before payment, gets a model you can actually use after the freelancer has gone.

                ## Milestones
                1. A brief covering deal summary, required outputs, structure standards, deadline and fee.
                2. Two or three freelancers compared on sample work, references and price.
                3. The delivered model checked against the brief and your error check standards.
                4. A handover call held and an agreed number of revision rounds used.

                ## Notes
                Start from the **Vendor** template. Agree in writing that you own the model and may change it.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A freelance model is delivered against a written brief, checked against the brief before payment, with ownership agreed in writing."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the brief with outputs, standards, deadline and fee range"
                - "Ask two or three freelancers for sample work and references"
                - "Check the delivered model against the brief before paying"
                - "Hold a handover call and confirm ownership in writing"
            - name: Freelance modelling service for small developers
              description: |-
                ## Purpose
                Experienced modellers can earn well building development and acquisition models for small developers, family offices and brokers who have no analyst. Packaging the work as defined products, such as a development cash flow, a lender pack or a JV waterfall, with fixed scopes, prices, timelines and a standard engagement letter, keeps projects from sprawling and protects you on liability.

                ## Milestones
                1. Three service packages written with scope, deliverables, price and turnaround.
                2. An engagement letter with scope limits, revision rounds, ownership and a statement that the work is not investment advice, reviewed by a solicitor.
                3. A portfolio of anonymised or invented sample models.
                4. Two paid engagements delivered and feedback recorded.

                ## Notes
                Check your employment contract for restrictions on outside work before you take a client, and keep insurance in mind once the work is regular.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Three priced service packages and a solicitor-reviewed engagement letter exist, and two paid engagements have been delivered."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Check your employment contract for limits on outside work"
                - "Write three service packages with scope, price and turnaround"
                - "Ask a solicitor to review your engagement letter"
                - "Review open enquiries and follow up on quotes @recurring(monthly:28)"
            - name: Catch-up and multi-tier IRR waterfall
              description: |-
                ## Purpose
                Institutional JV and fund terms often add a catch-up after the preferred return and two or three IRR hurdles with rising promote, and some test hurdles on a multiple as well. Modelling these correctly needs a period-by-period hurdle test for each tier, and is the specialist piece where small mistakes shift large sums between partners.

                ## Milestones
                1. Each tier's hurdle, split and test basis written from the agreement.
                2. Hurdle balances compounding period by period for every tier.
                3. A catch-up tier that brings the sponsor to its target share and then stops.
                4. Results checked against a second independent build or the partner's own model.
                5. A short note on any wording that two readings of the agreement would model differently.

                ## Notes
                Lookback and clawback provisions change who keeps what at the end. Model them only from signed wording, and ask your solicitor where the text allows two readings.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A multi-tier waterfall with catch-up matches an independent build to within rounding, with ambiguous wording noted."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write each tier's hurdle, split and test basis from the agreement"
                - "Build compounding hurdle balances for every tier"
                - "Add the catch-up tier and check it stops at the target share"
                - "Reconcile results with an independent build or the partner's model"
            - name: Phased master plan model with plot-level cash flows
              description: |-
                ## Purpose
                Large schemes delivered in phases, with infrastructure up front and plots or buildings released over several years, need a model where each phase has its own timeline, costs and sales but shares land, infrastructure and debt. A plot-level structure that rolls up to the whole scheme shows how phasing and infrastructure timing drive peak funding and overall return.

                ## Milestones
                1. A phase table with start date, duration, units or area, value and cost for each phase.
                2. Each phase's cash flow driven by its own flags, using one shared calculation layout.
                3. Infrastructure and land costs allocated to phases on a stated basis.
                4. A scheme roll-up showing peak funding and return, with a test that delays one phase.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A phased model rolls plot-level cash flows into one scheme view and shows the effect on peak funding of delaying one phase."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write the phase table for one multi-phase scheme"
                - "Build one phase's cash flow and copy the structure for the others"
                - "Allocate land and infrastructure costs to each phase"
                - "Delay one phase by a year and record the effect on peak funding"
            - name: Fund-level roll-up of several deal models
              description: |-
                ## Purpose
                Sponsors with several live deals need to see combined equity commitments, debt maturities and expected distributions across the book, which no single deal model shows. A roll-up workbook that imports standard output rows from each deal model, on a common timeline, gives a portfolio cash flow and highlights periods where equity calls bunch together.

                ## Milestones
                1. A standard export block added to every deal model with the same rows and timeline.
                2. A roll-up workbook importing each block and summing on a common monthly timeline.
                3. Combined equity calls, distributions and debt maturities shown by quarter.
                4. A check that each deal's totals in the roll-up match its own model.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A roll-up workbook combines at least three deal models on a common timeline, with totals reconciling to each deal model."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Define the standard export rows every deal model will provide"
                - "Add the export block to each live deal model"
                - "Build the roll-up on a common monthly timeline"
                - "Refresh the roll-up from each deal model and check totals @recurring(quarterly)"
---

# Real Estate Financial Modelling

Real estate financial modelling is the craft of turning a deal into a spreadsheet that other people can read, test and trust: when cash goes out, when it comes back, who lends it, who earns what and how the answer moves when an input does. This area is for analysts and associates who build models for a living and for founders who build their own because there is nobody else to do it. It starts with a house layout, a timeline engine, return maths and an error check sheet, then builds the core blocks of a development cash flow, an acquisition pro forma, debt schedules and a JV waterfall, then adds the operating routines, scenario and audit work, dated deliveries such as bid deadlines and lender submissions, situations for founders, career switchers and freelancers, and specialist builds such as multi-tier waterfalls and phased master plans.

The rhythms are a weekly review of the live deal model register and a timed practice drill, a monthly load of actual costs and sales into live development models, monthly updates to floating rate inputs and the version log, a peer model swap each month, a quarterly reforecast of hold models and a yearly rebuild of the template library. The Purchase decision template suits choosing software, Operational checklist suits the pre-send check, Job application suits a modelling test and Vendor suits hiring a freelance modeller. None of this is investment, tax or legal advice: a model organises assumptions, and the decision, the valuation and the legal terms sit with you and the right professionals. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
