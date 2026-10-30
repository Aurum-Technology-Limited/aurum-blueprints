---
id: finance-accounting.three-statement-financial-modelling
name: Three-Statement Financial Modelling
description: "A linked profit and loss, balance sheet and cash flow model built from history and drivers, kept current with monthly actuals and checks, and used for funding, valuation and board decisions."
category: business
version: 1.0.0
tags: [finance-accounting, three-statement-financial-modelling, founder, manager, knowledge-worker, financial-model, valuation, scenario-planning]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - metrics-log
    - reading-queue
    - purchase-decision
    - board-meeting
    - risk-register
  pillars:
    - name: Finance & Accounting
      emoji: "🧾"
      description: "The money side of a business: bookkeeping and the monthly close, cash flow, budgeting and forecasting, billing and collections, payroll, tax, audit and financial controls."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Three-Statement Financial Modelling
          description: "Building linked profit and loss, balance sheet and cash flow models for planning, valuation and decisions, for founders, analysts and finance leads."
          projects:
            - name: Model purpose and decision brief
              description: |-
                ## Purpose
                Most broken models were built without anyone writing down the question they had to answer. A one-page brief naming the decision, the audience, the forecast horizon, the time granularity and the date the answer is needed stops a fundraising model turning into a budgeting tool halfway through. It also tells you what to leave out.

                ## Milestones
                1. The decision the model supports written as one question, such as whether the business can fund a second site from its own cash.
                2. The audience, horizon and granularity chosen, for example monthly for 24 months then annual to year five.
                3. The outputs the audience needs listed, no more than six of them.
                4. Items deliberately out of scope written down.
                5. The brief agreed with the person who will act on the answer.

                ## Notes
                A monthly model for five years has 60 columns on every line and rarely earns them. Monthly for the cash-critical period and annual after it is a sensible default.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page brief stating the decision, audience, horizon, granularity, required outputs and exclusions, agreed by the decision maker."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the single decision the model must inform in one sentence"
                - "List who will read the outputs and what each of them needs to see"
                - "Choose the forecast horizon and where monthly columns give way to annual"
                - "List what the model will deliberately not cover"
                - "Agree the brief with the decision maker before building anything"
            - name: Three years of historical statements tied to the accounts
              description: |-
                ## Purpose
                Forecasts are anchored on history, so the historical profit and loss, balance sheet and cash flow need to agree to the signed or filed accounts exactly. Loading three years, mapped to the lines the model will forecast, gives you trends to test assumptions against and an opening balance sheet that genuinely balances.

                ## Milestones
                1. Three years of statements entered from the signed accounts or the year-end trial balance.
                2. Each source line mapped to a model line in a visible mapping table.
                3. Every total agreed to the source accounts with a difference of zero.
                4. One-off items such as a grant, a legal settlement or a restructuring cost flagged so they can be left out of trend ratios.
                5. The opening balance sheet for the forecast period balancing.

                ## Notes
                If the business is younger than three years, use whatever history exists plus the latest management accounts, and say so on the cover sheet.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Up to three years of historical statements sit in the model, each total agreeing to the source accounts with a zero-difference check."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect the last three sets of signed or filed accounts"
                - "Build a mapping table from source account lines to model lines"
                - "Enter the historical figures with a zero-difference check for each year"
                - "Flag one-off items so they stay out of the trend ratios"
                - "Load and tie the new year once the latest accounts are signed @recurring(yearly)"
            - name: Model layout, timeline and formatting standard
              description: |-
                ## Purpose
                Separating inputs, calculations and outputs, and running one consistent timeline across every sheet, is what makes a model readable by someone other than its builder. Fixing the conventions before the first formula costs an hour and saves days of untangling later: inputs in one colour, one formula per row copied across, and no typed numbers inside calculations.

                ## Milestones
                1. Sheets laid out as cover, inputs, timeline, calculations, statements, checks and outputs.
                2. A single timeline with period start and end dates, fiscal year and actual or forecast flags that every sheet refers to.
                3. A colour code for inputs, links and formulas written on the cover.
                4. A rule of one consistent formula per row across all periods adopted.
                5. Column alignment fixed so the same period sits in the same column on every sheet.

                ## Notes
                If January 2027 is column K on one sheet, make it column K on all of them. Misaligned columns are behind a large share of linking errors.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A model shell with a cover, one shared timeline and a written colour and formula convention that every sheet follows."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Create the sheet structure from the cover through to checks and outputs"
                - "Build one timeline row with dates, fiscal year and actual or forecast flags"
                - "Write the colour code and formula rules on the cover sheet"
                - "Align period columns so every sheet uses the same column for each month"
            - name: Historical ratio analysis to anchor assumptions
              description: |-
                ## Purpose
                Before forecasting anything, it helps to know what the business has actually achieved: revenue growth, gross margin, overheads as a share of sales, debtor, stock and creditor days, and capital spending against depreciation. Calculating these for each historical year gives every forecast input a reference point and makes an optimistic one easy to spot.

                ## Milestones
                1. Growth, margin and cost ratios calculated for each historical year.
                2. Debtor, stock and creditor days calculated from the year-end balances.
                3. Capital spending compared with depreciation for each year.
                4. The three-year average shown beside each matching forecast input.
                5. Any forecast ratio far from history flagged with a written explanation.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A ratio table for every historical year sits beside the inputs, with the three-year average shown next to each forecast assumption."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Calculate revenue growth and gross margin for each historical year"
                - "Work out debtor, stock and creditor days from the year-end balances"
                - "Compare capital spending with depreciation for each year"
                - "Show the three-year average beside each forecast assumption"
            - name: Assumptions sheet with sources and owners
              description: |-
                ## Purpose
                Every number a model forecasts should trace back to a labelled input, a source and a person who stands behind it. An inputs sheet listing price rises, volume growth, salary inflation, payment terms and capital spending, each with its owner and the date it was last checked, turns arguments about outputs into a short conversation about inputs.

                ## Milestones
                1. Every forecast driver held on the inputs sheet, none typed inside formulas.
                2. A source recorded for each input: contract, quote, history or judgement.
                3. An owner and last-reviewed date against each input.
                4. Inputs grouped by statement and ordered as they flow through the model.
                5. A search for typed numbers in the calculation sheets returning none.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An inputs sheet where every driver has a source, an owner and a review date, and no calculation cell contains a typed number."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every driver the model needs, grouped by statement"
                - "Add source, owner and last-reviewed columns to the inputs sheet"
                - "Move any number typed inside a formula onto the inputs sheet"
                - "Ask each owner to confirm their inputs in writing"
            - name: Driver-based revenue build
              description: |-
                ## Purpose
                Revenue typed in as last year plus ten percent tells nobody anything. Building it from drivers the business can see, such as customers times average order value, billable hours times rate, or units times price, lets people test a real lever and explains why the top line moves.

                ## Milestones
                1. The two or three drivers that genuinely explain revenue chosen and justified from history.
                2. Revenue calculated by product or segment from those drivers.
                3. The historical years recalculated from the same drivers to show the logic fits.
                4. Price and volume separated so either can be flexed alone.
                5. Segment totals linked into the profit and loss with no manual adjustment.

                ## Notes
                If a driver cannot be observed in the business's own records, it will be argued about forever. Prefer drivers someone already counts.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Forecast revenue is calculated entirely from named volume and price drivers by segment, and the method reproduces historical revenue within five percent."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose the volume and price drivers behind each revenue line"
                - "Back-test the drivers against the last two years of revenue"
                - "Build the revenue schedule by segment from the drivers"
                - "Link segment totals into the profit and loss"
            - name: Cost of sales and overhead build
              description: |-
                ## Purpose
                Costs fall into those that move with volume, those that step up with capacity and those that stay fixed until someone decides otherwise. Building cost of sales from unit costs and overheads from named lines such as rent, software, insurance and salaries means margins react sensibly when revenue is flexed.

                ## Milestones
                1. Each cost line classed as variable, stepped or fixed.
                2. Cost of sales driven from the volumes in the revenue build.
                3. Overheads forecast line by line, with payroll taken as a summary input.
                4. Inflation and contract increases applied from the inputs sheet.
                5. Gross and operating margins by year compared with history.

                ## Notes
                If a detailed headcount plan exists, link its payroll total rather than rebuilding staff costs inside the model.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every cost line is classed variable, stepped or fixed and driven from the inputs sheet, so flexing volume moves margin in the expected direction."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Class each cost line as variable, stepped or fixed"
                - "Drive cost of sales from the volume figures in the revenue build"
                - "Forecast overheads line by line from contracts and inputs"
                - "Compare forecast margins with the historical ratios"
            - name: Balance and integrity check dashboard
              description: |-
                ## Purpose
                Any balance sheet that does not balance means something is wrong, and the longer the gap goes unnoticed the harder it is to find. A checks sheet testing the balance, cash agreement between the cash flow and the balance sheet, historical tie-outs and error values, rolled into one master flag on the cover, catches mistakes the moment they are made.

                ## Milestones
                1. A balance check for every period with a tolerance of zero after rounding.
                2. A test that closing cash on the cash flow equals cash on the balance sheet.
                3. Checks for error values, sign errors and historical tie-outs.
                4. One master check shown on the cover and on every output sheet.
                5. The master check passing before any version is shared.

                ## Notes
                Never delete or override a failing check to get a version out. Fix the cause, or send the model with the failure clearly marked.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A checks sheet covering balance, cash agreement, historical tie-out and error values, feeding a master flag shown on the cover."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Add a balance check row for every period"
                - "Test that cash flow closing cash equals balance sheet cash"
                - "Add checks for error values and historical tie-outs"
                - "Show one master check flag on the cover and output sheets"
            - name: Working capital schedule from debtor, stock and creditor days
              description: |-
                ## Purpose
                Growth swallows cash because customers pay later than suppliers are paid, and a model that ignores this will show profit with no cash problem. Forecasting debtors, stock and creditors from days assumptions, checked against history, is the link between profit and the balance sheet that most often decides whether a plan is fundable.

                ## Milestones
                1. Debtor, stock and creditor days chosen for each year, starting from history.
                2. Closing balances calculated from revenue and cost of sales in each period.
                3. Movements in each balance feeding the cash flow statement.
                4. Prepayments, accruals and other balances given simple drivers.
                5. The cash effect of a ten-day change in debtor days shown in a note.

                ## Notes
                In a monthly model, scale revenue to the days in the period rather than using annual revenue, or the balances will swing wrongly between months.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Debtors, stock and creditors are forecast from days assumptions anchored to history, with their movements flowing into the cash flow."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Set debtor, stock and creditor days from the historical averages"
                - "Calculate closing balances from revenue and cost of sales"
                - "Link each balance movement into the cash flow statement"
                - "Update the days assumptions from the latest balance sheet @recurring(monthly:14)"
            - name: Fixed asset roll-forward and depreciation schedule
              description: |-
                ## Purpose
                Capital spending hits cash on the day it is paid but reaches profit slowly through depreciation, so the two must be modelled together. A roll-forward from opening cost and accumulated depreciation, through additions, disposals and the charge for each period, keeps the balance sheet and cash flow consistent and the charge believable.

                ## Milestones
                1. Opening cost and accumulated depreciation agreed to the latest balance sheet.
                2. Planned capital spending entered by asset class and period.
                3. Depreciation calculated by class using the useful lives in the accounting policy.
                4. Disposals handled with proceeds and any profit or loss on sale.
                5. Closing net book value feeding the balance sheet and spending feeding the cash flow.

                ## Notes
                Take useful lives from the accounting policy in the statutory accounts. Tax allowances on assets follow different rules and belong in the tax schedule.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A fixed asset roll-forward by asset class whose closing net book value agrees to the balance sheet in every period."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Agree opening cost and accumulated depreciation to the balance sheet"
                - "Enter planned capital spending by asset class and period"
                - "Calculate depreciation using the useful lives in the accounting policy"
                - "Add newly approved capital projects to the schedule @recurring(quarterly)"
            - name: Debt schedule with interest and repayments
              description: |-
                ## Purpose
                Loans, overdrafts and finance leases each carry a balance, a rate and a repayment profile, and all three statements feel them. A schedule per facility, taken from the agreements, supplies interest to the profit and loss, balances to the balance sheet and drawdowns and repayments to the cash flow.

                ## Milestones
                1. Each facility listed with limit, rate, term and repayment profile from its agreement.
                2. Opening balances agreed to the latest lender statements.
                3. Interest calculated on opening or average balances, with the method stated.
                4. A revolving facility or overdraft drawing automatically when cash falls below a set minimum.
                5. Interest, balances and cash flows linked into the three statements.

                ## Notes
                Interest on average balances creates a circular reference, because interest changes cash and cash changes the balance. Use a circularity switch that can be turned off, or calculate on opening balances, and say which on the cover.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A schedule for every facility with opening balances agreeing to lender statements, and interest, balances and repayments flowing into all three statements."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List each facility with its rate, term and repayments from the agreement"
                - "Agree opening balances to the latest lender statements"
                - "Add a circularity switch for interest on average balances"
                - "Update facility balances to the lender statements @recurring(monthly:20)"
            - name: Tax schedule with losses carried forward
              description: |-
                ## Purpose
                Tax in many models is a flat percentage of profit, which overstates cash in loss-making years and misses when payments actually leave the bank. A simple schedule that turns accounting profit into taxable profit, uses up brought-forward losses and pays tax on the dates that apply gives a tax charge and a tax payable balance you can defend.

                ## Milestones
                1. The main adjustments between accounting and taxable profit listed with your accountant.
                2. Brought-forward losses entered and used in the way the rules allow.
                3. Payment timing set to the instalment or due dates that apply.
                4. Tax payable reconciling from opening to closing balance each period.
                5. The schedule reviewed by your accountant.

                ## Notes
                This organises the calculation. Rates, reliefs and payment dates are your accountant's call, not the model builder's.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tax schedule with adjustments, loss usage and payment timing, reviewed by the accountant and feeding the tax charge and tax payable balance."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your accountant for the main adjustments to taxable profit"
                - "Enter brought-forward losses from the latest tax computation"
                - "Set tax payments to the due dates your accountant confirms"
                - "Update losses and rates once each tax return is filed @recurring(yearly)"
            - name: Equity and retained earnings roll-forward
              description: |-
                ## Purpose
                Share issues, dividends and profit all move equity, and if any one of them is missing the balance sheet will not balance. A roll-forward of share capital and retained earnings, linked to the funding and dividend inputs, closes the loop between profit and the balance sheet.

                ## Milestones
                1. Opening share capital, share premium and retained earnings agreed to the balance sheet.
                2. Planned share issues entered with amount and date.
                3. Dividends entered as an input, with a check against retained earnings.
                4. Profit after tax flowing into retained earnings every period.
                5. Closing equity linked to the balance sheet.

                ## Notes
                Whether a dividend can lawfully be paid depends on distributable reserves and local company law. The model can flag a shortfall; the decision sits with the directors and your accountant.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An equity roll-forward linked to profit, share issues and dividends, closing to the balance sheet, with a flag when dividends exceed retained earnings."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Agree opening share capital and reserves to the latest balance sheet"
                - "Add inputs for planned share issues and dividends"
                - "Link profit after tax into retained earnings"
                - "Flag any period where dividends exceed retained earnings"
            - name: Indirect cash flow statement from balance sheet movements
              description: |-
                ## Purpose
                Cash flow statements are where models prove themselves: start with profit, add back depreciation, adjust for working capital, add investing and financing flows, and closing cash should land exactly on the balance sheet. Building it from balance sheet movements rather than separate guesses means it can only balance if the model is right.

                ## Milestones
                1. Operating cash flow built from profit after tax, non-cash items and working capital movements.
                2. Investing cash flow taken from the fixed asset schedule.
                3. Financing cash flow taken from the debt and equity schedules.
                4. Closing cash on the cash flow equal to balance sheet cash in every period.
                5. Historical cash flows recalculated and compared with the filed cash flow statements where they exist.

                ## Notes
                When cash does not agree, find the first period where it breaks and look for a balance sheet line with no matching cash flow line. That is almost always the cause.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An indirect cash flow statement driven only by balance sheet movements and schedules, with closing cash matching the balance sheet in every period."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Build operating cash flow from profit, depreciation and working capital"
                - "Link investing and financing lines from their schedules"
                - "Check closing cash against the balance sheet for every period"
                - "Trace and fix any cash difference before adding more features"
            - name: Scenario switch for base, downside and upside cases
              description: |-
                ## Purpose
                Copying the whole model to show a downside case creates two models that drift apart within a month. A single scenario selector on the inputs sheet, with each driver's three values side by side and a live column the model reads, lets anyone flip cases in one click and compare them on the same logic.

                ## Milestones
                1. Base, downside and upside values set side by side for each scenario driver.
                2. One selector cell choosing the live case.
                3. The active case named on the cover and on every output.
                4. A comparison table storing key outputs for all three cases.
                5. No duplicate copies of the model kept for scenarios.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One model file with a single scenario selector, three values per scenario driver and a stored comparison of key outputs."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose which drivers change between scenarios"
                - "Add base, downside and upside columns beside each scenario driver"
                - "Create one selector cell and a live column the model reads"
                - "Show the active scenario name on the cover and outputs"
            - name: Monthly actuals roll-in
              description: |-
                ## Purpose
                Forecasting months that have already closed loses a model its credibility fast. Once the books close, replacing the forecast month with actuals, carrying the real balance sheet forward and re-running the checks keeps the opening position honest and the rest of the forecast starting from the truth.

                ## Milestones
                1. An actuals tab laid out to accept the trial balance export in a fixed format.
                2. Actual months switched on by the timeline flag, with the forecast starting from the latest closed balance sheet.
                3. All checks passing after each roll-in.
                4. Twelve consecutive months rolled in within a week of each close.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each closed month is replaced with actuals within five working days of the close, with the master check passing, for twelve consecutive months."
                cadence: rolling
              tasks:
                - "Set up an actuals tab that accepts the trial balance export"
                - "Paste the closed month's trial balance into the actuals tab @recurring(monthly:8)"
                - "Move the actuals flag forward one month and re-run the checks @recurring(monthly:9)"
                - "Note any forecast line that needed a manual fix after the roll-in"
            - name: Model version control and change log
              description: |-
                ## Purpose
                Three copies called final, final2 and final with edits is how wrong numbers reach a board. One master file in one location, dated version names and a change log saying what changed, why and who changed it make it possible to explain any number and to go back when something breaks.

                ## Milestones
                1. One master location agreed and old copies archived.
                2. A naming convention with date and version number in use.
                3. A change log sheet with date, author, change and reason.
                4. Every version sent outside the finance team recorded in the log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "One master model location, dated versions and a change log entry for every shared version, kept for three consecutive months."
                cadence: rolling
              tasks:
                - "Agree a single master folder and archive stray copies"
                - "Add a change log sheet with date, author, change and reason"
                - "Save a dated version and log the week's changes @recurring(weekly:fri)"
                - "Record every version sent outside the team in the change log"
            - name: Quarterly assumptions review with input owners
              description: |-
                ## Purpose
                Assumptions go stale quietly: a supplier raises prices, a big customer starts paying in 60 days, a hire slips by a quarter. Sitting down each quarter with the people who own the key inputs and walking through the ten that move the answer most keeps the model believed by the people who will act on it.

                ## Milestones
                1. The ten inputs that move cash and profit most identified by sensitivity.
                2. A 45-minute quarterly review booked with their owners.
                3. Each input confirmed or changed, with the reason recorded.
                4. All last-reviewed dates on the inputs sheet within the current quarter.

                ## Notes
                Start from the **Meeting notes** template to record what each owner agreed and why.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly reviews held in a year, each recording a confirmation or change for the ten most sensitive inputs."
                cadence: rolling
              tasks:
                - "Rank the inputs by how much each one moves closing cash"
                - "Hold a 45-minute review with the input owners @recurring(quarterly)"
                - "Record each confirmed or changed input with its reason"
                - "Update the last-reviewed dates on the inputs sheet"
            - name: Pre-send model check routine
              description: |-
                ## Purpose
                Most embarrassing model errors are found by the reader in the first five minutes: a total that does not add, a wrong year label, a chart still showing last month. A fixed fifteen-minute routine before every send, covering checks, labels, signs, units and a sense check of headline numbers, catches them first.

                ## Milestones
                1. A written list of ten checks to run before sending.
                2. Headline numbers compared with the previous version and with history.
                3. The checklist completed for every version shared.
                4. No reader-found errors in three consecutive packs.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The pre-send checklist is completed for every shared version, with no reader-found errors in three consecutive packs."
                cadence: rolling
              tasks:
                - "Write a ten-point pre-send checklist and save it on the cover"
                - "Compare headline numbers with the previous version before sending"
                - "Run the pre-send checklist on the monthly model pack @recurring(monthly:11)"
                - "Add a new check for any error a reader finds"
            - name: Forecast back-testing of model drivers
              description: |-
                ## Purpose
                Finding out which assumptions were wrong last time is the quickest way to improve a model. Each quarter, comparing what the model said three and six months ago with what happened, driver by driver, shows whether growth, margins or payment days are consistently optimistic and by how much.

                ## Milestones
                1. Dated snapshots of the forecast drivers saved each quarter.
                2. Actual drivers compared with the forecasts made three and six months earlier.
                3. A bias recorded for each major driver: optimistic, pessimistic or on target.
                4. At least one forecasting method changed because of what back-testing showed.

                ## Notes
                Start from the **Metrics log** template to keep forecast and actual pairs together. The question here is which modelling method failed, not which department overspent.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Four quarters of forecast versus actual driver comparisons logged, with a bias recorded per driver and at least one method change made."
                cadence: rolling
              tasks:
                - "Save a dated snapshot of the key forecast drivers"
                - "Compare last quarter's forecast drivers with actuals @recurring(quarterly)"
                - "Mark each driver as optimistic, pessimistic or on target"
                - "Change the method for the most consistently wrong driver"
            - name: Independent peer review of the model
              description: |-
                ## Purpose
                Builders are blind to their own errors, and studies of business spreadsheets keep finding mistakes in most of them. Having someone who did not build the model test its logic, formulas and checks once a year, and before any major decision, is cheap insurance against an error that changes the answer.

                ## Milestones
                1. A reviewer chosen who had no part in building the model.
                2. A review scope agreed: logic, formulas, checks and key assumptions.
                3. Findings logged with severity and a response to each.
                4. Material findings fixed and re-checked before the next decision relies on the model.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A logged independent review with a written response to every finding, completed within the last twelve months."
                cadence: cyclic
              tasks:
                - "Choose a reviewer who did not build the model"
                - "Agree the review scope and send the reviewer the user guide"
                - "Log each finding with its severity and your response"
                - "Book the annual independent review before planning season @recurring(yearly)"
            - name: Quarterly scenario refresh
              description: |-
                ## Purpose
                Downside and upside cases built once and never touched end up describing a world that has moved on. Refreshing each one every quarter from the latest actuals and current risks keeps the range of outcomes believable, and ready for the day someone asks what happens if the largest customer leaves.

                ## Milestones
                1. Base, downside and upside cases each described by a short written story.
                2. Scenario inputs refreshed each quarter from the latest base case.
                3. Key outputs compared across the three cases in one table.
                4. The downside case checked against minimum cash and any lender tests.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three scenarios refreshed every quarter for a year, each with a written story and a comparison table of key outputs."
                cadence: rolling
              tasks:
                - "Write a three-sentence story for the downside and upside cases"
                - "Refresh the downside and upside inputs from the latest base case @recurring(quarterly)"
                - "Update the comparison table of cash, profit and net debt by case"
                - "Check the downside case against minimum cash and lender tests"
            - name: Model user guide and documentation
              description: |-
                ## Purpose
                Models only their builder can run become a liability the day that person goes on holiday. A short user guide covering what the model is for, how to roll in actuals, how to change scenarios, what each check means and the known limits lets a colleague use it without a phone call.

                ## Milestones
                1. A cover sheet stating purpose, version, owner and check status.
                2. Step-by-step instructions for the monthly roll-in and scenario changes.
                3. A list of known limitations and simplifications.
                4. A colleague able to run the monthly update using only the guide.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A user guide that a colleague has used to complete one monthly update without help from the builder."
                cadence: rolling
              tasks:
                - "Write the cover sheet with purpose, owner, version and check status"
                - "Document the monthly roll-in and scenario steps"
                - "List the model's known limitations and simplifications"
                - "Ask a colleague to run one update using only the guide"
                - "Update the guide after any structural change @recurring(quarterly)"
            - name: Annual model refresh before planning season
              description: |-
                ## Purpose
                Each year a model collects patches, outdated assumptions and a timeline creeping towards its last column. A refresh a month before the budget process extends the timeline, ties in the new year-end, clears dead sheets and resets the inputs, so planning starts from a clean model rather than a tired one.

                ## Milestones
                1. The timeline extended to cover the full planning horizon.
                2. The latest year-end loaded and tied.
                3. Unused sheets, named ranges and external links removed.
                4. Inputs reset and reviewed with their owners.
                5. A clean version released and logged before budgeting begins.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A refreshed model with an extended timeline, the latest year-end tied and no broken links, released before the budget cycle starts."
                cadence: cyclic
              tasks:
                - "Book the annual model refresh a month before budgeting starts @recurring(yearly)"
                - "Extend the timeline to cover the full planning horizon"
                - "Remove unused sheets, named ranges and external links"
                - "Release the refreshed version and record it in the change log"
            - name: How the three statements link together
              description: |-
                ## Purpose
                Anyone who works with a model should be able to say what happens to each statement when depreciation rises by 100, a customer pays late or the company borrows. Working through a dozen of these classic linkage questions on paper, then checking them in a small model, builds the instinct that catches errors on sight.

                ## Milestones
                1. The links between profit, retained earnings, working capital and cash drawn on one page.
                2. Twelve linkage questions answered on paper.
                3. Each answer checked in a small practice model.
                4. The questions you got wrong revisited a week later.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twelve three-statement linkage questions answered correctly on paper and confirmed in a practice model."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draw the links between the three statements on one page"
                - "Answer twelve linkage questions, starting with a rise in depreciation"
                - "Test each answer in a small practice model"
                - "Revisit the questions you got wrong after a week"
            - name: Lookup and aggregation formulas for modellers
              description: |-
                ## Purpose
                Only a handful of functions do most of the work in a good model: lookups that match by period or code, conditional sums for mapping a trial balance, and simple flags in place of nested IF statements. Learning to use them cleanly, and avoiding volatile functions such as OFFSET and INDIRECT, makes models faster, shorter and easier to audit.

                ## Milestones
                1. Two-way lookups practised with INDEX and MATCH or XLOOKUP.
                2. A trial balance mapped to model lines with conditional sums.
                3. Period flags used in place of nested IF statements.
                4. Volatile functions removed from one existing model.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice workbook using lookups, conditional sums and period flags, and one live model cleared of volatile functions."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Practise INDEX and MATCH or XLOOKUP on a two-way lookup"
                - "Map a sample trial balance to model lines with SUMIFS"
                - "Replace one nested IF with a period flag"
                - "Search a live model for OFFSET and INDIRECT and replace them"
            - name: Financial modelling standards study
              description: |-
                ## Purpose
                Published modelling standards, such as FAST and the best practice guides from professional accounting bodies, set out rules learned the hard way: one formula per row, no mixed units, calculations flowing left to right and top to bottom. Reading one standard properly and scoring your own model against it gives you a vocabulary for reviews and a reason behind every convention.

                ## Milestones
                1. One published modelling standard chosen and read in full.
                2. The ten rules most relevant to your models written down.
                3. Your current model scored against those ten rules.
                4. Three breaches fixed and the rest noted in the change log.

                ## Notes
                Start from the **Reading queue** template to line up the standard and one or two modelling texts after it.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One modelling standard read, your model scored against its ten most relevant rules and three breaches fixed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose one published financial modelling standard to read"
                - "Note the ten rules that matter most for your models"
                - "Score your current model against those rules"
                - "Fix three breaches and log the rest"
            - name: Formula auditing and keyboard fluency
              description: |-
                ## Purpose
                Tracing a number back to its source should take seconds, not minutes of clicking. Learning the auditing tools (trace precedents and dependents, evaluate formula, go to special for constants) and the keyboard shortcuts that go with them cuts review time sharply and makes it realistic to check every model before it leaves your hands.

                ## Milestones
                1. Trace, evaluate and go-to-special tools used on a live model.
                2. Twenty modelling shortcuts learned and used without the mouse.
                3. A ten-minute timed audit drill completed on a practice model.
                4. Drill time cut by a third over a month.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Twenty shortcuts in daily use and a timed audit drill completed a third faster after one month of practice."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List twenty shortcuts for navigation, auditing and copying across"
                - "Use trace precedents and go to special on a live model"
                - "Run a ten-minute timed audit drill on a practice model @recurring(weekly:tue)"
                - "Compare drill times after four weeks"
            - name: Discounted cash flow valuation basics
              description: |-
                ## Purpose
                Free cash flow by year, a terminal period and net debt are most of what a discounted cash flow valuation needs, and a three-statement model already holds them. Learning to derive unlevered free cash flow, set a discount rate range with an adviser's input and test the terminal value turns the model into a way of seeing what drives value. Treat it as a learning exercise, not a valuation opinion.

                ## Milestones
                1. Free cash flow derived from the model for each forecast year.
                2. A discount rate range and terminal growth range written down with their sources.
                3. Enterprise value and equity value calculated, bridged through net debt.
                4. The share of value coming from the terminal period noted.
                5. A sensitivity grid of value against discount rate and terminal growth.

                ## Notes
                Any valuation used for a transaction, tax or a dispute should come from a qualified valuer. This project is for understanding the drivers.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice valuation built from the model's free cash flow, with stated rate ranges, a net debt bridge and a sensitivity grid."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Derive free cash flow from operating profit, tax, capital spending and working capital"
                - "Write down a discount rate range and where it came from"
                - "Bridge enterprise value to equity value through net debt"
                - "Build a grid of value against discount rate and terminal growth"
            - name: Sensitivity and data tables
              description: |-
                ## Purpose
                Decision makers rarely want one number; they want to know how far the answer moves when price, volume or payment days shift. Learning to build one-way and two-way sensitivity tables, and a tornado chart ranking inputs by impact, turns a single forecast into a picture of what really matters.

                ## Milestones
                1. A one-way sensitivity on the three most important inputs.
                2. A two-way table of price against volume on closing cash.
                3. A tornado chart ranking ten inputs by their impact on the chosen output.
                4. Data tables set to calculate manually, or replaced, so they do not slow the model.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One-way, two-way and tornado sensitivities built on the live model for its headline output."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pick the output decision makers care about most"
                - "Build a one-way sensitivity for three key inputs"
                - "Build a two-way table of price against volume"
                - "Rank ten inputs by impact in a tornado chart"
            - name: Rebuilding a listed company's statements from its annual report
              description: |-
                ## Purpose
                Rebuilding real accounts is the fastest way to get good at modelling. Taking a listed company's annual report, entering three years of statements, building the links and forecasting two years from the drivers it discloses teaches how notes, segments and cash flows hang together, with a published answer to check against.

                ## Milestones
                1. A listed company with clear segment reporting chosen.
                2. Three years of statements entered and tied to the report.
                3. Forecasts built from drivers drawn from the report's narrative.
                4. The model balancing, with cash agreeing in every period.
                5. A one-page note on what the exercise taught.

                ## Notes
                Choose a simple business such as a retailer or a manufacturer first. Banks and insurers present their statements differently and are a poor place to start.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A balancing three-statement model of a listed company, tied to its annual report for three years, with a two-year forecast."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose a listed company with simple segment reporting"
                - "Enter three years of statements from its annual report"
                - "Forecast two years using drivers from the report's narrative"
                - "Write a one-page note on what the rebuild taught you"
            - name: Refactoring an inherited spreadsheet model
              description: |-
                ## Purpose
                Inheriting a model built by someone who has left is common, and so is finding typed plugs, broken links and a balance check that was quietly deleted. Auditing it systematically, deciding what to keep and rebuilding the worst parts on a clean structure is often quicker than either trusting it or starting again.

                ## Milestones
                1. A map of the inherited model's sheets, flows and external links.
                2. Typed numbers, plugs and broken links listed.
                3. A keep, fix or rebuild decision recorded for each section.
                4. The worst sections rebuilt on the layout standard with checks.
                5. Old and new outputs reconciled before anyone switches over.

                ## Notes
                Reconcile old and new outputs line by line before anyone relies on the new version. Unexplained differences usually mean the old model contained a plug.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An inherited model audited, its worst sections rebuilt, and old and new outputs reconciled with every difference explained."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the agent to summarise what each sheet calculates from its formulas"
                - "List every typed number, plug and broken link"
                - "Decide keep, fix or rebuild for each section"
                - "Reconcile old and new outputs line by line before switching"
            - name: Spreadsheet or planning software decision
              description: |-
                ## Purpose
                Spreadsheets are flexible and universal; dedicated planning tools add version control, multi-user input and direct links to the ledger, at a subscription cost and some loss of flexibility. Deciding on evidence, with the model's real requirements listed first, avoids buying a tool for a problem that better spreadsheet discipline would fix.

                ## Milestones
                1. Requirements listed: users, entities, update frequency, integrations and audit trail.
                2. Current spreadsheet pain points costed in hours per month.
                3. Two or three planning tools trialled against the same test case.
                4. A decision recorded with the total cost over three years.

                ## Notes
                Start from the **Purchase decision** template.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision to stay in spreadsheets or move to a named planning tool, backed by requirements, a trial and a three-year cost."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the model's users, entities, integrations and audit needs"
                - "Estimate the hours lost each month to spreadsheet pain points"
                - "Trial two planning tools on the same test case"
                - "Record the decision with its three-year cost"
            - name: Peak funding requirement and minimum cash point
              description: |-
                ## Purpose
                The number founders and lenders most often want from a model is how much money the business needs, and when cash reaches its lowest point. An output that finds the minimum cash balance, its month and the funding needed to stay above a chosen buffer turns the model into the basis for a funding conversation.

                ## Milestones
                1. A minimum cash buffer agreed, such as two months of fixed costs.
                2. The lowest projected cash balance and its month shown on the cover.
                3. Peak funding need calculated against the buffer.
                4. The same figures shown for the downside case.
                5. The figures refreshed after each actuals roll-in.

                ## Notes
                This is the model's view across months and years. Day-to-day and week-by-week cash management belongs in a short-term cash forecast.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The cover shows the minimum cash balance, its month and the peak funding need for base and downside cases, refreshed each month."
                cadence: rolling
              tasks:
                - "Agree a minimum cash buffer with the decision maker"
                - "Add the lowest cash balance and its month to the cover"
                - "Calculate the funding needed to stay above the buffer in each case"
                - "Refresh the minimum cash point after each actuals roll-in @recurring(monthly:16)"
            - name: Debt versus equity funding comparison
              description: |-
                ## Purpose
                Once the funding need is known, the question is how to fill it. Running a loan and an equity raise through the same model shows the effect of each on cash, interest, covenants, ownership and value to existing owners, so the conversation with lenders, investors and advisers starts from numbers rather than instinct.

                ## Milestones
                1. A debt case modelled with indicative rate, fees, term and covenants.
                2. An equity case modelled with amount, pre-money valuation and dilution.
                3. A side-by-side table of cash, interest cover, ownership and owner value.
                4. Questions for the lender, investor and adviser listed from the comparison.
                5. The preferred route recorded with its reasons.

                ## Notes
                Use indicative terms only, and take the final decision with your accountant or corporate finance adviser.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A side-by-side comparison of a debt case and an equity case from the same model, with the preferred route and reasons recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Model a loan case with indicative rate, fees and repayments"
                - "Model an equity case with amount, valuation and dilution"
                - "Build a comparison table of cash, interest cover and ownership"
                - "List the questions to take to the lender, investor and adviser"
            - name: Converting an annual model to monthly for the first two years
              description: |-
                ## Purpose
                Annual models hide seasonality, payment timing and the month cash actually runs short. Converting the first 18 to 24 months to monthly columns, with annual columns for the later years, gives lenders and founders the timing they need without turning a five-year plan into 60 columns of guesswork.

                ## Milestones
                1. The monthly and annual periods chosen and set on the timeline.
                2. Seasonality profiles set for revenue and major costs from history.
                3. Monthly timing built for working capital, tax and debt repayments.
                4. Annual summaries calculated from the monthly columns and compared with the old annual model.
                5. All checks passing across both monthly and annual periods.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A model with monthly columns for the first 18 to 24 months and annual columns after, reconciling to the annual summaries with all checks passing."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Choose how many months to model before switching to annual columns"
                - "Build seasonality profiles for revenue and major costs from history"
                - "Add monthly timing for tax, debt repayments and working capital"
                - "Reconcile the annual summaries to the old annual model"
            - name: New product line impact on the three statements
              description: |-
                ## Purpose
                Launching a new product or service changes more than the profit and loss: stock bought ahead, equipment, launch costs paid before any revenue and customers on different terms. Modelling it as a switchable layer on top of the base case shows its effect on cash, funding need and payback before anyone commits.

                ## Milestones
                1. Launch assumptions written: volumes, price, cost, stock, capital spending and terms.
                2. The new line built as a layer that can be switched on or off.
                3. Incremental profit, cash and peak funding shown separately from the base business.
                4. Breakeven month and cash payback calculated.
                5. The result presented with the three assumptions it depends on most.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A switchable new-product layer showing incremental profit, cash, peak funding and payback against the base case, with a launch decision recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the launch assumptions for volume, price, cost and stock"
                - "Build the new line as a layer with an on and off switch"
                - "Show incremental cash and peak funding separately from the base"
                - "Present the result with the three assumptions it depends on most"
            - name: One-page model output summary and charts
              description: |-
                ## Purpose
                Readers will look at one page, so that page decides whether the model gets used. A summary of revenue, margin, cash, net debt and funding need, five clear charts, and the active scenario and check status in the header gives decision makers what they need without opening the calculations.

                ## Milestones
                1. The five measures the audience cares about chosen from the brief.
                2. A one-page summary with those measures by year.
                3. Five charts with consistent scales and plain titles.
                4. Active scenario, version and check status shown in the header.
                5. The summary refreshed with each new version.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page summary of five measures and five charts carrying the scenario, version and check status, refreshed with every version for three months."
                cadence: rolling
              tasks:
                - "Pick the five measures the audience asked for in the brief"
                - "Lay out the summary page with those measures by year"
                - "Build five charts with plain titles and consistent scales"
                - "Refresh the summary page after each monthly roll-in @recurring(monthly:12)"
            - name: Fundraising model for investor due diligence
              description: |-
                ## Purpose
                Investors will open the model, change an assumption and see whether it still balances. A version built for the raise, with clean inputs, a use of funds schedule, the ownership effect, scenarios and a short assumptions memo, survives due diligence and shortens the list of questions.

                ## Milestones
                1. A raise version with clearly marked inputs and protected calculations.
                2. A use of funds schedule linked to the cash flow.
                3. Ownership before and after the round shown from a cap table input.
                4. A two-page assumptions memo explaining the main drivers.
                5. The model tested by someone outside the team who changed inputs without breaking it.

                ## Notes
                Give investors the working model, not values pasted over formulas. A model that cannot be flexed reads as one that cannot be trusted.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A data room model with a use of funds schedule, ownership effect, three scenarios and an assumptions memo, tested by an outside reader."
                cadence: one-shot
                effort_hours_estimate: "25"
              tasks:
                - "Save a separate raise version with inputs clearly marked"
                - "Build a use of funds schedule linked to the cash flow"
                - "Ask the agent to draft a two-page assumptions memo from the inputs sheet"
                - "Ask someone outside the team to flex inputs and try to break it"
            - name: Bank facility application model with covenant tests
              description: |-
                ## Purpose
                Lenders lend against cash flow and headroom, and their credit teams will test the model against their own covenants. Preparing a version that shows debt service, interest cover, net debt to earnings and minimum cash under base and downside cases, using the lender's definitions, shows the facility is affordable before the questions start.

                ## Milestones
                1. The lender's covenant definitions and test dates obtained and entered exactly.
                2. The proposed facility's drawdown and repayment profile built into the debt schedule.
                3. Covenant tests calculated at every test date in base and downside cases.
                4. Headroom against each covenant shown as a percentage.
                5. A covering note on the main assumptions sent with the model.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A lender version of the model showing each covenant tested at every test date in base and downside cases, with headroom stated."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask the lender for its covenant definitions and test dates"
                - "Add the proposed facility to the debt schedule"
                - "Calculate covenant tests and headroom for base and downside cases"
                - "Write a one-page note on the main assumptions to send with it"
            - name: Five-year strategic plan model for a board away day
              description: |-
                ## Purpose
                Board strategy days need a few clear options, not a hundred lines of detail. An annual five-year version of the model with two or three strategic options, each showing revenue, profit, cash, funding need and value, lets the board compare choices on one page and leave with a direction.

                ## Milestones
                1. Two or three strategic options defined with the chief executive.
                2. Each option modelled annually for five years.
                3. A one-page comparison of revenue, profit, cash, funding and value.
                4. Board papers circulated a week before the day.
                5. Decisions and follow-up questions recorded after the day.

                ## Notes
                Start from the **Board meeting** template for the papers and the record of decisions.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Board papers with a five-year comparison of two or three options circulated a week ahead, and the board's decisions recorded."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Agree the two or three strategic options with the chief executive"
                - "Model each option annually for five years"
                - "Circulate the comparison with the board papers a week before the day"
                - "Record the board's decisions and follow-up questions"
            - name: Small acquisition target model
              description: |-
                ## Purpose
                Buying a competitor, a supplier or a book of clients is mostly a cash and funding question: what you pay, how it is funded and whether the combined business can carry it. A target model that loads the seller's accounts, normalises them and combines them with your own shows the effect on cash, debt and earnings before heads of terms are signed.

                ## Milestones
                1. Three years of the target's accounts loaded and tied.
                2. Normalising adjustments listed, such as owner pay above market or one-off costs.
                3. Purchase price, funding and any deferred payments modelled.
                4. Combined statements for at least three years with all checks passing.
                5. Due diligence questions listed from what the model revealed.

                ## Notes
                Your corporate finance adviser and lawyer lead on price, structure and tax. The model is your own view of what you can afford.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A combined model of your business and the target, with normalised target figures, funding and deferred payments, used to set a maximum price."
                cadence: one-shot
                effort_hours_estimate: "25"
              tasks:
                - "Load and tie three years of the target's accounts"
                - "List normalising adjustments beside the seller's figures"
                - "Model the price, funding and any deferred payments"
                - "List the due diligence questions the model raised"
            - name: Valuation pack for a shareholder buy-in or exit
              description: |-
                ## Purpose
                When a co-founder leaves, a manager buys in or an owner plans to sell, someone has to put a number on the shares. Preparing the model's forecast, normalised profit, free cash flow and a range of values on stated methods gives the parties and their valuer a shared starting point and narrows the argument.

                ## Milestones
                1. The valuation clauses in the shareholder agreement read and noted.
                2. Normalised profit and free cash flow prepared from the model.
                3. A range of values on two methods, with assumptions stated.
                4. The pack handed to the independent valuer or advisers.
                5. The agreed value and how it was reached recorded.

                ## Notes
                The binding value should come from the method in your shareholder agreement or from an independent valuer. The model supplies the evidence, not the verdict.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A valuation pack with normalised figures and a range on two stated methods, handed to the valuer, with the agreed value recorded."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Read the valuation clauses in the shareholder agreement"
                - "Prepare normalised profit and free cash flow from the model"
                - "Calculate a value range on two stated methods"
                - "Hand the pack to the independent valuer or advisers"
            - name: Pre-revenue startup three-statement model
              description: |-
                ## Purpose
                Before revenue, a founder's model is mostly costs, timing and assumptions about when customers arrive, and investors know it. A lean three-statement model with monthly columns, a spend plan, a launch date input and runway to the next milestone shows how far the money goes and what has to be true to raise again.

                ## Milestones
                1. A 24-month monthly model with a balance sheet and cash flow, not just a spend list.
                2. Launch date and first-customer assumptions held as inputs.
                3. Runway to zero cash and to the next fundraising milestone shown.
                4. Actual spend rolled in each month.
                5. A delayed-launch scenario showing the effect of a three-month slip.

                ## Notes
                Keep it small. A pre-revenue model with forty revenue lines is false precision; three or four drivers are plenty.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A 24-month monthly model with a launch date input, runway to the next milestone and a delayed-launch scenario, updated with actual spend monthly."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Set up 24 monthly columns carrying all three statements"
                - "Add launch date and first-customer inputs"
                - "Show runway to zero cash and to the next milestone"
                - "Roll in actual spend from the bank and ledger @recurring(monthly:5)"
                - "Run a three-month launch delay scenario"
            - name: First model for a newly appointed budget holder
              description: |-
                ## Purpose
                Managers handed a profit and loss for the first time often inherit a budget spreadsheet they did not build and cannot explain. A simple three-statement view of their own unit, showing how decisions on pricing, hiring, stock and spending reach cash, helps them speak the finance team's language within a quarter.

                ## Milestones
                1. The unit's revenue and cost lines and its working capital identified with the finance team.
                2. A simple model of the unit linked to its balance sheet items.
                3. The three decisions the manager controls shown as inputs.
                4. A monthly session with finance to walk through the numbers.
                5. The manager able to explain a month's cash movement unaided.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A simple model of the unit with three decision inputs, and the manager explaining one month's cash movement without help."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the finance team which lines and balances belong to your unit"
                - "Build a simple model linking your unit's decisions to cash"
                - "Walk through the month's numbers with your finance contact @recurring(monthly:18)"
                - "Explain one month's cash movement back to the finance team"
            - name: Financial modelling test preparation for analyst roles
              description: |-
                ## Purpose
                Analyst, corporate finance and many in-house finance roles set a timed modelling test, often a three-statement build from a case pack in a few hours. Practising against the clock on case packs, with a fixed build order and a check routine, turns a stressful test into a familiar exercise.

                ## Milestones
                1. The test format confirmed with the recruiter: length, software and case style.
                2. A fixed build order written and memorised.
                3. Four timed practice cases completed.
                4. Average build time within the test limit, with checks balancing.
                5. A short walkthrough of results practised aloud.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four timed practice cases built to balance within the stated test time, with the build order written down."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the recruiter for the test length, software and case style"
                - "Write your build order from historicals through to checks"
                - "Complete a timed practice case and note where the time went"
                - "Practise a five-minute walkthrough of the results"
            - name: Handing over a model when changing roles
              description: |-
                ## Purpose
                When a model's builder moves role or leaves, the knowledge in their head goes too unless it is written down and passed on. A handover in the final month, with the guide updated, two supervised monthly updates by the new owner and a list of open issues, keeps the model in use rather than quietly abandoned.

                ## Milestones
                1. A new owner named and agreed with the manager.
                2. The user guide brought up to date.
                3. Open issues, known errors and pending changes listed.
                4. Two monthly updates run by the new owner with the builder watching.
                5. File locations and access to data sources transferred.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Two monthly updates completed by the new owner under supervision, with an updated guide and open issues list handed over."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree the new owner of the model with your manager"
                - "List open issues, known errors and pending changes"
                - "Supervise the new owner through two monthly updates"
                - "Transfer file locations and data source access"
            - name: Buyout returns model with acquisition debt
              description: |-
                ## Purpose
                Private equity and management buyouts are judged on returns to equity after paying down acquisition debt, which needs a cash sweep, several debt layers and an exit calculation. Building one for a case study, or for your own business as an exercise, shows how much of the return comes from earnings growth, debt paydown and the exit multiple.

                ## Milestones
                1. A sources and uses table built for the purchase.
                2. Senior and junior debt layers with a cash sweep.
                3. Exit value and equity returns calculated as an internal rate of return and a multiple of money.
                4. Returns split into earnings growth, debt paydown and multiple change.
                5. Returns sensitivity to entry and exit multiples shown.

                ## Notes
                This is a modelling exercise. Any real buyout needs corporate finance, legal and tax advisers.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A buyout model with sources and uses, a cash sweep, internal rate of return and multiple of money, and a returns bridge, balancing in every period."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Build a sources and uses table for the purchase"
                - "Add senior and junior debt with a cash sweep"
                - "Calculate exit equity value, internal rate of return and multiple of money"
                - "Split returns into earnings growth, debt paydown and multiple change"
            - name: Monte Carlo simulation on key drivers
              description: |-
                ## Purpose
                Three scenarios show three points; a simulation shows the spread between and beyond them. Running a few thousand draws on the five most uncertain drivers, with ranges agreed with their owners, gives the probability that cash dips below the buffer, which is often a more honest answer than a single downside case.

                ## Milestones
                1. Five uncertain drivers chosen, with low, likely and high values agreed with their owners.
                2. Distributions and any correlations between drivers written down.
                3. At least two thousand iterations run with an add-in or a script.
                4. The probability of breaching the cash buffer and a range for year-three cash reported.
                5. Results compared with the scenario cases and any gap explained.

                ## Notes
                A simulation is only as good as the ranges going in. Spend more time agreeing them than choosing the software.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A simulation of at least 2,000 iterations on five agreed drivers, reporting the probability of breaching the cash buffer."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Choose the five most uncertain drivers in the model"
                - "Agree low, likely and high values with each driver's owner"
                - "Run at least two thousand iterations with an add-in or script"
                - "Report the chance of breaching the cash buffer"
            - name: Reverse stress test of the business model
              description: |-
                ## Purpose
                Ordinary stress tests ask what happens in a bad year; a reverse stress test asks what would have to happen for the business to run out of cash or breach its covenants, then judges how plausible that is. Solving the model backwards for the breaking point of revenue, margin and payment days shows leadership where the real fragility sits.

                ## Milestones
                1. The failure point defined: cash below zero, a covenant breach or both.
                2. The breaking value found for revenue, gross margin and debtor days, one at a time.
                3. One plausible combined failure story written and modelled.
                4. Early warning indicators and responses listed for each breaking point.
                5. The test re-run each year on the refreshed model.

                ## Notes
                Start from the **Risk register** template to record each breaking point, its warning signs and the agreed response.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Breaking points for revenue, margin and debtor days recorded with a combined failure story and warning indicators, reviewed by leadership."
                cadence: cyclic
              tasks:
                - "Define the failure point as negative cash, a covenant breach or both"
                - "Use goal seek to find the breaking value of revenue, margin and debtor days"
                - "Write and model one plausible combined failure story"
                - "Re-run the reverse stress test after the annual refresh @recurring(yearly)"
---

# Three-Statement Financial Modelling

This area is for founders, managers and analysts who need a model where the profit and loss, balance sheet and cash flow move together and always balance. It starts with the foundations (a decision brief, tied historicals, a layout standard, driver-based revenue and costs, the working capital, asset, debt, tax and equity schedules, and a cash flow that closes to the balance sheet), then the routines that keep the model current and trusted, the modelling skills behind it, the decisions it can inform, dated events such as a raise, a bank facility or an acquisition, versions for pre-revenue founders, new budget holders and analyst candidates, and finally specialist work on buyouts, simulation and reverse stress tests.

What repeats is the monthly actuals roll-in and pre-send check, a weekly saved version with its change log, refreshed working capital days and debt balances, quarterly assumption reviews, scenario refreshes and back-testing, and a yearly refresh, peer review and reverse stress test before planning season. The Meeting notes, Metrics log, Reading queue, Purchase decision, Board meeting and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
