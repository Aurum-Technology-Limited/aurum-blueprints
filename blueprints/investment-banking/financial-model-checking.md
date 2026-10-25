---
id: investment-banking.financial-model-checking
name: Financial Model Checking
description: "A model review routine you trust: balance and cash checks, link and hard-code audits, sign conventions, scenario sweeps, an error log and the specialist checks for LBO, merger and diligence models."
category: business
version: 1.0.0
tags: [investment-banking, financial-model-checking, knowledge-worker, model-review, error-checks, excel, quality-control]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - metrics-log
    - purchase-decision
    - onboarding-30-60-90
  pillars:
    - name: Investment Banking & Advisory
      emoji: "🏦"
      description: "Advisory and capital markets work from the banker's seat: pitch books and valuation, sell-side and buy-side M&A, equity and debt capital markets, leveraged finance, restructuring and fairness opinions, plus the analyst, associate and VP years and the career moves that follow."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Financial Model Checking
          description: "Checking models before they go to seniors: balance checks, links, hard-codes, sign conventions, scenario switches and a review routine you trust."
          projects:
            - name: Personal model review checklist, first version
              description: |-
                ## Purpose
                Most errors seniors catch are the same dozen mistakes repeated: a broken balance check, a hard-coded growth rate, a sign flipped on capex, a case switch left on downside. Writing your own checklist of those dozen, in the order you will actually check them, turns review from a vague scroll into a routine you can run in twenty minutes at 1am.

                ## Milestones
                1. A one-page checklist of 12 to 20 checks grouped into structure, integrity, inputs and outputs.
                2. Each check written as a yes or no question with where to look.
                3. The checklist run once on a practice model and timed.
                4. A copy saved where you can open it in under ten seconds on any deal.

                ## Notes
                Start from the **Operational checklist** template. Ask your associate what they check first on your models and put that at the top.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written checklist of at least 12 yes or no checks exists and has been run once on a practice model, with the time taken recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the last five errors anyone flagged in your models"
                - "Ask your associate which three checks they always run first"
                - "Draft the checklist as yes or no questions grouped by section"
                - "Run it on a practice three-statement model and note the time taken"
            - name: Balance check and error flag build
              description: |-
                ## Purpose
                A balance check that rounds to zero while hiding a 0.4 difference, or one that sits on a tab nobody looks at, is worse than none. Building a check row that tests assets less liabilities and equity for every period, flags anything above a tight tolerance and shows the result on the cover sheet means an imbalance announces itself the moment it appears.

                ## Milestones
                1. A balance check row covering every historical and projected period.
                2. A tolerance set, such as 0.001, with absolute values so offsetting errors cannot cancel.
                3. A single flag cell that turns red when any period fails.
                4. The flag linked to the cover or summary page of the model.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A practice model carries a per-period balance check with a stated tolerance and one visible flag that fails when a test error is introduced."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Add a row subtracting liabilities and equity from total assets for every period"
                - "Wrap the check in an absolute value and compare it with a tight tolerance"
                - "Link one summary flag cell to the cover page"
                - "Introduce a deliberate error and confirm the flag fires"
            - name: Cash flow statement to balance sheet cash tie-out
              description: |-
                ## Purpose
                Plugs can make a model balance while the cash flow statement says something different from the balance sheet. Tying ending cash on the cash flow statement to cash on the balance sheet, and the change in each working capital line to its balance sheet movement, proves the three statements are genuinely linked rather than forced.

                ## Milestones
                1. Ending cash from the cash flow statement tied to balance sheet cash in every period.
                2. Each working capital line on the cash flow tied to the change in its balance sheet account.
                3. Any plug or balancing figure found and replaced with a real link.
                4. The tie-out rows added to the model's check tab.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Cash and every working capital movement tie between the cash flow statement and balance sheet in all periods, with no plug remaining."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Compare ending cash on the cash flow with balance sheet cash for each period"
                - "Tie the change in receivables, inventory and payables to the cash flow lines"
                - "Search the balance sheet for any line labelled plug or other balancing"
                - "Add the tie-out rows to the check tab"
            - name: Hard-code and colour code audit
              description: |-
                ## Purpose
                Hard-codes buried in formulas, such as a revenue line written as the prior year times 1.05, are the error seniors hate most because nobody can see them. Auditing a model for typed numbers inside formulas and checking that blue inputs and black formulas are coloured truthfully makes every assumption visible and changeable from one place.

                ## Milestones
                1. Every constant typed inside a formula on the projection tabs found and listed.
                2. Each one moved to a labelled input cell or justified in a comment.
                3. Font colours checked so inputs, formulas and links to other sheets follow the firm convention.
                4. A short note of where hard-codes most often hide in your models.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A practice model has no unexplained constants inside formulas on its projection tabs, and every input is coloured according to the firm convention."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Use Go To Special to select constants on each projection tab"
                - "Search formulas for an asterisk or plus followed by a typed number"
                - "Move each embedded number to a labelled input cell"
                - "Recolour any input or formula that breaks the colour convention"
            - name: Sign convention rule sheet for your group
              description: |-
                ## Purpose
                Capex shown positive on one tab and negative on another, or dividends added rather than subtracted, causes errors that look plausible until a senior adds up the column. Writing down the sign rules your group uses, line by line, settles the question once and gives you something to check every model against.

                ## Milestones
                1. The group's convention for cash outflows, expenses and adjustments confirmed with an associate.
                2. A rule sheet listing the sign of 15 to 25 common lines on each statement.
                3. One live-style practice model checked against the sheet with every exception fixed.
                4. The sheet stored next to your checklist.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A written sign rule sheet covering at least 15 lines exists, agreed with an associate and used to check one model."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask an associate whether the group shows outflows as negatives or positives"
                - "List the sign for capex, dividends, tax, working capital and debt repayment"
                - "Check one practice model line by line against the list"
                - "Save the rule sheet with your review checklist"
            - name: Mapping a model before reviewing it
              description: |-
                ## Purpose
                Reviewing cell by cell without knowing how the tabs connect wastes the first hour and misses the structural errors. Sketching the flow from inputs through the operating build, statements, schedules and outputs before you check anything shows where a single bad link would do the most damage.

                ## Milestones
                1. A one-page diagram of the model's tabs and the direction data flows between them.
                2. Inputs, switches and output pages marked on the diagram.
                3. The three or four highest-risk links identified, such as debt to interest or tax to cash.
                4. The map habit added as step one of your checklist.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A tab flow map with inputs, switches, outputs and the four highest-risk links marked exists for one model, and mapping is step one on your checklist."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every tab in a practice model in the order data flows"
                - "Draw arrows for each tab that feeds another"
                - "Mark the inputs tab, case switches and output pages"
                - "Circle the links where one error would hit every output"
            - name: Historical figures tie-out to source documents
              description: |-
                ## Purpose
                One mistyped historical revenue figure makes a projection wrong in every year that follows. Tying each historical line to the filing, the audited accounts or the management accounts it came from, with a page reference, catches transposed digits and wrong periods before they compound.

                ## Milestones
                1. Every historical line on the income statement, balance sheet and cash flow tied to a named source.
                2. A page or tab reference recorded beside each figure.
                3. Differences between audited and management figures listed and explained.
                4. Restated prior years identified and the latest version used.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All historical figures in one practice model carry a source and page reference, with any restatements and differences explained in notes."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Add a source column beside the historical periods"
                - "Tie revenue, EBITDA and net income to the filed accounts first"
                - "Check whether any prior year has been restated in a later filing"
                - "Re-tie historicals after each new set of results is filed @recurring(quarterly)"
            - name: Master check tab with one summary cell
              description: |-
                ## Purpose
                Checks spread across ten tabs only work if someone remembers to look at all ten. A dedicated check tab that pulls every balance, tie-out and error test into one list, and sums them into a single cell shown on every output page, lets you and your seniors see in one glance whether the model is safe to print.

                ## Milestones
                1. A check tab listing every test in the model with a description and its location.
                2. Each check returning zero when it passes and one when it fails.
                3. A master cell summing all checks, visible on the cover and output pages.
                4. Conditional formatting that makes a failure impossible to miss.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One model has a check tab feeding a master cell that appears on every output page and fails visibly when any single test fails."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create a check tab with columns for test, location and result"
                - "Pull in the balance check, cash tie-out and any schedule checks"
                - "Sum the results into one master cell linked to the cover page"
                - "Break one check on purpose and confirm the master cell fails"
            - name: Circular reference and iteration switch check
              description: |-
                ## Purpose
                Interest calculated on average debt creates a circularity that most banking models allow, but an unintended circular reference elsewhere can quietly produce numbers that never settle. A circuit breaker switch, and a check that iteration is only doing the job it was meant for, stops a model blowing up into errors on someone else's machine.

                ## Milestones
                1. Every intended circularity in the model listed, usually interest and cash sweep.
                2. A circuit breaker switch that sets average balance interest to zero when turned on.
                3. Unintended circular references searched for with iteration switched off.
                4. A line on your checklist confirming the breaker is off before sending.

                ## Notes
                If a model fills with errors after one bad input, flip the breaker on, fix the input, then flip it off. Never send a model with the breaker left on.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A practice model has a working circuit breaker, a list of its intended circularities and no unintended circular references."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Turn iteration off and note every circular reference warning"
                - "Separate intended circularities from accidental ones"
                - "Add a circuit breaker switch to the interest calculation"
                - "Add a breaker off line to your send checklist"
            - name: Pre-send review routine for every model
              description: |-
                ## Purpose
                When a model is due at midnight, the review is what gets cut, and that is when the worst errors go out. A fixed pre-send routine, run every time no matter how late, means the master check, case switches, outputs and file name are confirmed before anything reaches an associate or VP.

                ## Milestones
                1. A five-step pre-send routine short enough to run in under ten minutes.
                2. The routine run on every model sent for a month, with misses noted.
                3. A send note template stating what changed and what was checked.
                4. No model returned for a check that the routine covers.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every model sent in a four-week period went out after the pre-send routine, with a send note stating what was checked."
                cadence: rolling
              tasks:
                - "Write the five pre-send steps on a card beside your screen"
                - "Draft a three-line send note template covering changes and checks"
                - "Run the full checklist on the week's biggest deliverable @recurring(weekly:fri)"
                - "Note any model sent without the routine and why"
            - name: Personal error log and monthly pattern review
              description: |-
                ## Purpose
                Seniors forgive a new error and lose patience with a repeated one. Logging every error that someone else catches, with its type and the check that would have caught it, shows which three mistakes you keep making and lets you add a check aimed squarely at each.

                ## Milestones
                1. An error log with columns for date, model, error type, who caught it and the missing check.
                2. Every caught error entered within a day for two months.
                3. The three most frequent error types identified.
                4. A new or sharper check added to the checklist for each of the three.

                ## Notes
                Start from the **Metrics log** template. Record errors by type, never client names or figures.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An error log with at least two months of entries exists, and the three most common error types each have a matching check on the checklist."
                cadence: rolling
              tasks:
                - "Set up the log with error type categories such as link, sign, hard-code and unit"
                - "Enter every error a senior flagged in the last fortnight"
                - "Add this week's caught errors to the log @recurring(weekly:fri)"
                - "Review the log for repeat patterns and update the checklist @recurring(monthly:28)"
            - name: Scenario and case switch sweep
              description: |-
                ## Purpose
                Base cases hide errors: a model that balances there can still break in the downside, because a formula only works when growth is positive or a debt tranche is drawn. Flipping every case switch and toggle in turn, and watching the checks and key outputs move as expected, finds the errors that only appear in the case a senior will try first.

                ## Milestones
                1. Every switch in the model listed with its allowed values.
                2. Each case run with the master check confirmed at zero.
                3. Key outputs recorded for each case and checked to move in the expected direction.
                4. The model returned to the base case before saving.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each live model has a list of its switches, and every case has been run with checks passing in the past week."
                cadence: rolling
              tasks:
                - "List every switch and toggle on the inputs tab"
                - "Record EBITDA, net debt and the key valuation output for each case"
                - "Flip every case switch on live models and confirm checks stay at zero @recurring(weekly:wed)"
                - "Reset to the base case and save"
            - name: Peer check swap with another analyst
              description: |-
                ## Purpose
                You cannot see your own errors after the fourth turn of the night, but a peer from another deal can spot them in minutes. A standing swap with one trusted analyst, twenty minutes on one section of each other's model, catches what your own checklist misses and builds a habit seniors notice.

                ## Milestones
                1. One peer agreed for a regular swap, on separate deals within the same wall.
                2. A short brief format for what the peer should check.
                3. A swap completed most weeks for two months.
                4. Errors caught by the peer added to your error log.

                ## Notes
                Swap only within information barriers. If your peer is not cleared for a deal, practise on public models instead.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A peer swap has run in at least six of eight weeks, with each catch recorded in the error log."
                cadence: rolling
              tasks:
                - "Ask one analyst you trust whether they want a weekly swap"
                - "Check with compliance or your staffer that both of you are cleared for each deal"
                - "Swap one model section with your peer for a 20-minute check @recurring(weekly:tue)"
                - "Log what the peer caught in your error log"
            - name: Version comparison between model turns
              description: |-
                ## Purpose
                After a round of comments, the change you intended is often accompanied by one you did not, such as an input overwritten while scrolling. Comparing the new version with the last one sent, cell by cell on the key tabs, proves that only the requested changes went in.

                ## Milestones
                1. A comparison method chosen, such as a spreadsheet compare tool or a difference tab.
                2. Every changed cell between two versions listed.
                3. Each change matched to a comment or explained.
                4. Unexplained changes reversed before sending.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each model turn sent in a month was compared with the prior version, and every changed cell traced to a comment or explanation."
                cadence: rolling
              tasks:
                - "Find out which comparison tool the bank allows on its systems"
                - "Build a difference tab that subtracts the prior version's key outputs"
                - "Run a version comparison on the latest turn of each live model @recurring(weekly:mon)"
                - "Reverse any change you cannot match to a comment"
            - name: Quarterly refresh of the review checklist
              description: |-
                ## Purpose
                Checklists written in month one go stale as you move to merger models, LBOs and new templates. Rebuilding it each quarter from the error log and the new model types you have worked on keeps it short, current and aimed at the errors you now actually make.

                ## Milestones
                1. Checks that have not caught anything in a quarter removed or merged.
                2. New checks added for model types worked on in the quarter.
                3. The checklist kept under one page.
                4. The dated new version saved and the old one archived.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A dated checklist version exists for each quarter, each fitting on one page and reflecting the error log."
                cadence: cyclic
              tasks:
                - "Pull the quarter's error types from the log"
                - "Strike any check that caught nothing in three months"
                - "Revise the checklist with lessons from the quarter @recurring(quarterly)"
                - "Archive the previous version with its date"
            - name: Monthly hygiene sweep of live models
              description: |-
                ## Purpose
                Models collect debris over a deal: links to files on someone's desktop, broken references, hidden rows of old cases and named ranges that point nowhere. A monthly sweep of each live model removes it before a client or buyer opens the file and finds a link to another deal.

                ## Milestones
                1. External links in each live model listed and either broken or justified.
                2. Broken references and error values found and fixed.
                3. Hidden sheets, rows and stale named ranges reviewed.
                4. Document properties and comments cleared of other deals' names.

                ## Notes
                A link to another client's file is a confidentiality problem, not just a tidiness one. Raise it with your associate if you find one in anything already sent.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every live model has passed a hygiene sweep within the last month, with no unexplained external links or broken references."
                cadence: rolling
              tasks:
                - "Open the edit links dialog on each live model and list every source"
                - "Search for REF and value errors across all tabs @recurring(monthly:12)"
                - "Unhide all sheets and review whether each is still needed"
                - "Clear document properties and old comments before external sends"
            - name: Model to output page tie-out
              description: |-
                ## Purpose
                Football fields and summary pages pasted from yesterday's model can disagree with today's version by just enough to embarrass the team in a client meeting. Tying every number on the output pages to the current model, and checking that pasted values were refreshed, is the last check before pages leave the building.

                ## Milestones
                1. Every number on the output pages traced to a cell in the current model version.
                2. Pasted values identified and refreshed or relinked.
                3. Units, periods and footnotes on each page matched to the model.
                4. A tick-marked printout or PDF kept with the date and model version.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every output page sent in a month carries a tie-out to a named model version, with no number differing from the model."
                cadence: rolling
              tasks:
                - "Print the output pages and the model's summary tab side by side"
                - "Tick each number against its source cell"
                - "Tie each new page's numbers back to the model before it leaves @recurring(weekly:thu)"
                - "File the tick-marked copy with the model version name"
            - name: Review time blocked into every deliverable
              description: |-
                ## Purpose
                Checking always loses to building when nobody budgets for it. Blocking a fixed share of time, say 20 percent, for review on every deliverable at the start of the week makes it part of the job rather than something squeezed into the last ten minutes before the deadline.

                ## Milestones
                1. A default review allowance agreed with yourself, such as 20 percent of build time.
                2. Review blocks placed in the calendar for each deliverable due this week.
                3. Actual review time recorded against the block for a month.
                4. The allowance adjusted based on what the record shows.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For four consecutive weeks, every deliverable had a review block in the calendar, with actual review time recorded."
                cadence: rolling
              tasks:
                - "Pick a default review allowance as a share of build time"
                - "Block review time in your calendar for each deliverable due this week @recurring(weekly:mon)"
                - "Note how long each review actually took"
                - "Tell your associate when the review block puts a deadline at risk"
            - name: Reading an unfamiliar model quickly
              description: |-
                ## Purpose
                Inherited models, a predecessor's file or a template from another group arrive with no explanation and a deadline. Practising a fixed way in, from the cover page and switches to the statements and then the schedules, lets you find the drivers and the weak spots in half an hour instead of half a day.

                ## Milestones
                1. A written order for reading any model, from outputs back to inputs.
                2. Three unfamiliar public company or training models read using the order.
                3. For each, the five key drivers and two weak spots noted in under 30 minutes.
                4. The reading order added to your checklist as a preface.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three unfamiliar models have each been read in under 30 minutes, with key drivers and weak spots written down."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write your reading order from cover page to schedules"
                - "Collect three training or public company models you have not built"
                - "Read one unfamiliar model for 30 minutes and list its drivers @recurring(monthly:5)"
                - "Compare your notes with the model's author or an associate"
            - name: Debugging a balance sheet that does not balance
              description: |-
                ## Purpose
                Every analyst eventually faces a model out by a number that changes every year, at 2am. Learning a calm method, finding the first period that breaks, halving and searching for the figure, checking whether the difference is doubled or flips sign, turns a two-hour panic into a twenty-minute fix.

                ## Milestones
                1. A written step-by-step method for finding imbalances.
                2. Five deliberately broken practice models fixed using the method.
                3. The common causes listed, such as a missing cash flow line or a sign error.
                4. Average time to fix recorded and falling.

                ## Notes
                If the difference is exactly double a line item, that line is probably added where it should be subtracted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five deliberately broken models have been fixed with a written method, with the time taken for each recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask a peer to break a practice model in five different ways"
                - "Find the first period where the balance check fails"
                - "Test whether the difference matches, doubles or halves any single line"
                - "Write the causes you found into your debugging method"
            - name: Checking debt schedules and interest
              description: |-
                ## Purpose
                Debt schedules carry more errors than any other tab: repayments that exceed the balance, a revolver that draws when cash is plentiful, interest on the wrong balance. Learning the specific checks for each tranche lets you test the schedule in minutes and explain it when a VP asks why net debt rises in year four.

                ## Milestones
                1. Opening plus drawdowns less repayments equal closing for every tranche and period.
                2. No balance below zero and repayments capped at the available balance.
                3. Interest tested against the stated rate and the average or opening balance.
                4. Revolver and cash sweep logic checked in a low-cash and a high-cash case.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice debt schedule passes roll-forward, floor, interest and revolver checks, each written on your checklist."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Add a roll-forward check row under each debt tranche"
                - "Test that no balance goes below zero in any case"
                - "Recalculate one year's interest by hand for each tranche"
                - "Push cash low and high to test the revolver and sweep"
            - name: Checking working capital and days calculations
              description: |-
                ## Purpose
                Working capital drives cash flow more than most juniors expect, and a days calculation on the wrong revenue or cost base can move valuation by several percent. Checking that receivable days use revenue, inventory and payable days use cost of sales, and that the periods match, catches the error before it reaches the DCF.

                ## Milestones
                1. Each working capital days formula checked for the right numerator and denominator.
                2. Historical days recalculated by hand for one year.
                3. Projected days compared with history and any break explained.
                4. The cash flow effect of each line confirmed in the right direction.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Working capital days in one practice model are recalculated by hand and every line's cash flow direction is confirmed correct."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Recalculate receivable, inventory and payable days by hand for one year"
                - "Check each days formula uses the right revenue or cost base"
                - "Compare projected days with the historical range"
                - "Confirm an increase in receivables reduces cash in the model"
            - name: Checking tax, losses and deferred tax lines
              description: |-
                ## Purpose
                Tax lines are where models quietly assume a company pays tax on losses, or uses tax losses it cannot legally carry forward. Checking that tax is zero or negative only where it should be, that loss balances roll forward and are used in order, and that cash tax differs from book tax for a reason, prevents a valuation built on impossible cash flows.

                ## Milestones
                1. Tax expense checked against pre-tax income and the stated rate for each period.
                2. Loss balances rolled forward with usage capped at taxable profit.
                3. Cash tax and book tax differences listed and explained.
                4. Open questions on loss rules flagged for the client's tax advisers.

                ## Notes
                The model records what the client's advisers confirm about loss rules. It is not the place to form your own tax view.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One practice model's tax lines are checked against the rate, a loss roll-forward and an explained cash tax difference."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Divide tax by pre-tax income for each period and flag outliers"
                - "Build a check that loss usage never exceeds taxable profit"
                - "List every difference between cash tax and book tax"
                - "Write down the loss questions to send to the tax advisers"
            - name: Ratio and reasonableness sanity sheet
              description: |-
                ## Purpose
                Passing every mechanical check, a model can and still show margins doubling or capex falling to zero. A one-tab sanity sheet of growth, margin, capex intensity, returns and gearing ratios, set beside history and peers, lets you see in a minute whether the story the numbers tell is believable.

                ## Milestones
                1. A sanity tab showing 10 to 15 ratios across history and projections.
                2. Each ratio compared with the historical range and a peer median.
                3. Thresholds set that highlight a ratio outside its normal range.
                4. Outliers either explained by the case or sent back as questions.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each live model has a sanity tab, reviewed in the past month, with every highlighted outlier explained or queried."
                cadence: rolling
              tasks:
                - "Choose 10 to 15 ratios such as revenue growth, EBITDA margin and capex to sales"
                - "Build the sanity tab with history and projections side by side"
                - "Run the ratio sanity sheet on one live model @recurring(monthly:20)"
                - "Send unexplained outliers to your associate as questions"
            - name: Checking per share and dilution maths
              description: |-
                ## Purpose
                Per share values are where small errors turn into embarrassing ones: a share count from the wrong date, options counted at full value, convertibles ignored. Checking the diluted share count, the treasury stock method and the net debt bridge against the latest filing keeps the price per share on the cover page defensible.

                ## Milestones
                1. Basic share count tied to the latest filing with its date.
                2. Options and warrants checked with the treasury stock method at the relevant price.
                3. Convertibles and restricted stock treated consistently with the firm's approach.
                4. Enterprise value to equity value bridge checked line by line.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One model's diluted share count and equity bridge are reconciled to the latest filing, with each dilutive instrument's treatment noted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the share count and its date on the latest filing cover"
                - "Recalculate option dilution with the treasury stock method"
                - "Check how convertibles are treated at the offer or current price"
                - "Tie each bridge item from enterprise value to equity value to a source"
            - name: Checking period alignment and timing flags
              description: |-
                ## Purpose
                Models mixing calendar and fiscal years, quarters and half years, or a stub period at the valuation date, go wrong in ways that are hard to see. Checking every timing flag, period header and discounting date against one stated convention catches a year that is counted twice or skipped.

                ## Milestones
                1. The model's period convention written at the top of the inputs tab.
                2. Period headers checked for gaps, duplicates and correct fiscal year ends.
                3. Timing flags and stub fractions recalculated by hand.
                4. Discount periods checked against the valuation date and mid-year setting.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One model's period headers, timing flags and discount periods are recalculated by hand and agree with a written convention."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the fiscal year end and period convention on the inputs tab"
                - "Scan the period header row for gaps or repeated years"
                - "Recalculate the stub period fraction by hand"
                - "Check each discount period against the valuation date"
            - name: Checking units, scaling and currency
              description: |-
                ## Purpose
                Mixing thousands with millions, or local currency with dollars, produces errors of a thousandfold or a currency rate that nobody questions because the totals look round. Checking that every tab states its units and currency, and that each conversion happens once and in one place, removes the most dramatic errors in banking.

                ## Milestones
                1. Every tab labelled with its units and currency in the header.
                2. All links between tabs with different units checked for the right scaling.
                3. Exchange rates held in one input block with source and date.
                4. Converted figures tested by reversing one conversion by hand.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every tab in one model states its units and currency, and all conversions draw from a single dated exchange rate block."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Add units and currency to the header of every tab"
                - "Find each link between tabs with different units"
                - "Move all exchange rates into one dated input block"
                - "Reverse one conversion by hand to confirm the direction"
            - name: Choosing a model auditing add-in
              description: |-
                ## Purpose
                Auditing add-ins can map formulas, flag inconsistent rows and compare versions far faster than eye checks, but banks restrict what can be installed. Comparing two or three options against what IT and compliance allow, and testing one on a practice model, tells you whether a tool is worth requesting or whether built-in features are enough.

                ## Milestones
                1. The bank's approved software list checked for existing auditing tools.
                2. Two or three options compared on features, cost and approval status.
                3. One option tested on a practice model with findings noted.
                4. A decision recorded: request, use the existing tool or stay with built-in features.

                ## Notes
                Start from the **Purchase decision** template. Never install unapproved software on a bank machine, even a free trial.
              priority: low
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of at least two auditing tools exists, ending in a recorded decision that respects the bank's approval rules."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check the bank's approved software list for auditing add-ins"
                - "Ask two associates which tool they rely on and why"
                - "Compare features such as formula maps, inconsistency flags and version compare"
                - "Record your decision and raise an IT request if needed"
            - name: Proposing a reusable check block for the firm template
              description: |-
                ## Purpose
                If every analyst rebuilds the same checks on every deal, some will build them badly. Proposing a standard check block, with a balance test, cash tie-out, debt roll-forwards and a master cell, for the group's template saves everyone time and shows seniors you think beyond your own deal.

                ## Milestones
                1. The checks already in the firm template listed and their gaps noted.
                2. A standard check block designed that drops into the template.
                3. The block tested on two past model structures without breaking anything.
                4. A short proposal sent to the template owner or a VP.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A tested check block and a one-page proposal have been sent to the template owner, with their response recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Find out who owns the group's model template"
                - "List the checks the template has and the ones it lacks"
                - "Build the check block and test it on two practice models"
                - "Ask the agent to draft a one-page proposal from your notes"
            - name: Extreme input stress test
              description: |-
                ## Purpose
                Formulas that work at sensible inputs often fail at the edges: negative EBITDA, zero growth, a 100 percent payout or a fully repaid loan. Feeding a model extreme values on purpose and watching for errors, negative balances and broken checks finds the formulas that will fail the day a senior tries an aggressive case.

                ## Milestones
                1. A list of 8 to 12 extreme input sets, such as zero revenue growth and negative margins.
                2. Each set run with checks and key outputs recorded.
                3. Every formula that breaks fixed or capped with a clear rule.
                4. The stress list saved for reuse on new templates.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A model has been run through at least eight extreme input sets, with every resulting break fixed or documented."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write eight extreme input sets including negative EBITDA and zero growth"
                - "Run each set and record the master check and key outputs"
                - "Fix formulas that error or produce impossible balances"
                - "Run the extreme input test on each new model template @recurring(quarterly)"
            - name: Review tiers for different deliverables
              description: |-
                ## Purpose
                A quick sensitivity for an internal call does not need the same review as a model going to a client board, and treating them alike either wastes hours or lets risk through. Deciding three review tiers, with what each must include, lets you spend checking time where the consequences are real.

                ## Milestones
                1. Three tiers defined, such as internal working, senior review and external release.
                2. The checks required at each tier written down.
                3. The tiers agreed with your associate.
                4. Each new request tagged with a tier when it arrives.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Three written review tiers, agreed with an associate, have been applied to every request for a month."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Sort last month's deliverables by who saw them"
                - "Write the checks required for each of three tiers"
                - "Agree the tiers with your associate"
                - "Tag each new request with its review tier @recurring(weekly:mon)"
            - name: Error categories for the error log
              description: |-
                ## Purpose
                An error log full of free text cannot show patterns. Adopting a short set of categories, mechanical, logic, input, presentation and omission, borrowed from the way spreadsheet risk is usually classified, makes the monthly review sharp and shows whether your errors are carelessness or misunderstanding.

                ## Milestones
                1. Five to seven error categories defined with one example each.
                2. Existing log entries recategorised.
                3. The split between mechanical and judgement errors calculated.
                4. One learning action chosen for the largest judgement category.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The error log uses five to seven defined categories, with existing entries recategorised and one learning action recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read a short guide on how spreadsheet errors are commonly classified"
                - "Define five to seven categories with an example of each"
                - "Recategorise every existing entry in the log"
                - "Pick one learning action for the biggest judgement category"
            - name: Automated checks versus manual review
              description: |-
                ## Purpose
                Check formulas are fast and never tired, but they only catch what someone thought to test, while eye review catches the strange but is slow. Deciding which checks belong in formulas and which need a human, based on your own error log, gives you a review that is both quick and hard to fool.

                ## Milestones
                1. Every checklist item marked as automatable or needing judgement.
                2. The automatable items built as formulas on the check tab.
                3. The manual items reduced to those formulas cannot cover.
                4. Review time before and after compared.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each checklist item is labelled automated or manual, automated ones exist as formulas, and review time before and after is recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Mark each checklist item as formula or judgement"
                - "Build formulas for the automatable items on the check tab"
                - "Trim the manual list to what formulas cannot catch"
                - "Time a full review before and after the change"
            - name: First model sent with zero flagged errors
              description: |-
                ## Purpose
                Sending a model that comes back with no corrections, only comments on judgement, is the moment seniors start trusting your numbers. Setting it as a dated target, and preparing deliberately for one specific send, gives the checking work a visible result.

                ## Milestones
                1. One upcoming deliverable chosen as the target send.
                2. Extra review time blocked and a peer check arranged.
                3. The full checklist, scenario sweep and output tie-out completed.
                4. The model returned with no mechanical errors flagged, and the result logged.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A model was sent and returned with no mechanical errors flagged by the reviewer, recorded in the error log by the deadline."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick the next model you will send to an associate as the target"
                - "Block double your usual review time before it is due"
                - "Run the checklist, scenario sweep and output tie-out"
                - "Record what came back in the error log"
            - name: Pre-signing model freeze and final check
              description: |-
                ## Purpose
                The numbers in a signing announcement, board paper or financing document are fixed forever once released. Freezing the deal model before signing, running a full review on the frozen version and recording which version supports each released figure protects the client and the bank from a late error nobody can retract.

                ## Milestones
                1. A freeze version of the model named and saved, with edit access restricted.
                2. A full review, scenario sweep and output tie-out completed on the frozen file.
                3. A table linking each released figure to its cell in the frozen version.
                4. The associate or VP sign-off on the freeze recorded.

                ## Notes
                Keep the frozen file and its tie-out on the deal's official system, where records retention applies.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A frozen, reviewed model version exists with each released figure traced to it and a recorded senior sign-off before signing."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree the freeze time with your associate"
                - "Save the freeze version with a clear name and restricted editing"
                - "Run the full checklist and output tie-out on the frozen file"
                - "Build the table linking each released figure to its cell"
            - name: Client board deck number check the night before
              description: |-
                ## Purpose
                Board meetings are where one wrong number costs the most credibility, because directors read every page and remember. A last-night check of every figure in the board deck against the final model, footnotes and prior materials sent to the board catches the inconsistencies that a client director would spot first.

                ## Milestones
                1. Every figure in the board deck tied to the final model version.
                2. Figures checked for consistency with earlier materials sent to the same board.
                3. Footnotes, dates and sources checked on every page.
                4. A short list of any remaining differences sent to the associate with explanations.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every figure in the board deck has been tied to the final model and earlier board materials, with remaining differences reported in writing."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect the final model version and the last deck sent to the board"
                - "Tick every figure in the new deck against the model"
                - "Compare key figures with what the board saw last time"
                - "Send the associate a list of any differences and why they exist"
            - name: Checking routine for timed modelling tests
              description: |-
                ## Purpose
                Modelling tests for promotion, lateral moves or buy-side interviews are lost on a balance sheet that does not balance with ten minutes left. Practising a compressed five-minute check under timed conditions means you finish with a model that balances and a list of known limitations, which is what assessors mark.

                ## Milestones
                1. A five-minute version of your checklist written for test conditions.
                2. Three timed practice tests completed with the check run at the end.
                3. Time reserved for checking hit in each practice.
                4. A short limitations note template ready to paste into a test.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three timed practice tests have been completed with a balancing model and the five-minute check run before time."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Cut your checklist to the five checks that matter most under time"
                - "Sit a timed three-statement practice test"
                - "Stop building with ten minutes left and run the short check"
                - "Write a limitations note template for the end of a test"
            - name: Handing over a model with a check record
              description: |-
                ## Purpose
                When you rotate off a deal or go on leave, the next analyst inherits your model and your mistakes. A handover note listing the model's structure, its checks, known weaknesses and the last version reviewed means they can keep it accurate from the first evening rather than relearning it under pressure.

                ## Milestones
                1. A one-page handover note covering structure, switches and checks.
                2. Known weaknesses and open questions listed.
                3. The last reviewed version named, with its check results.
                4. A 30-minute walkthrough held with the incoming analyst.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The incoming analyst has a handover note and has had a walkthrough, and confirms they can run the checks unaided."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the model's structure and switches on one page"
                - "List known weaknesses and unresolved questions"
                - "Record the last reviewed version and its check results"
                - "Book a 30-minute walkthrough with the incoming analyst"
            - name: Checking routine for your first month as an analyst
              description: |-
                ## Purpose
                New analysts are judged early on whether their numbers can be trusted, before anyone expects their modelling to be fast. Building the checking habit in the first month, with a simple checklist, an error log and weekly feedback from your associate, sets a reputation for accuracy that is hard to earn later.

                ## Milestones
                1. A starter checklist in place by the end of week one.
                2. Every error flagged by a senior logged from day one.
                3. Weekly feedback on your checking requested and noted for four weeks.
                4. A short note at day 30 on what improved and what still slips.

                ## Notes
                Start from the **Onboarding 30/60/90** template and put checking goals in the first 30 days.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "By day 30 a starter checklist and error log are in use, and four weeks of associate feedback on checking are recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your associate what accuracy mistakes new analysts usually make"
                - "Write a starter checklist of eight checks"
                - "Ask your associate for one piece of feedback on your checking @recurring(weekly:fri)"
                - "Write a day 30 note on what improved and what still slips"
            - name: Model checking as a summer intern
              description: |-
                ## Purpose
                Interns often get narrower access, older templates and one shot at a return offer. Applying a light version of the checks to every spreadsheet you touch, even a simple comps update, shows the full-time team that your work can be passed upward without being redone.

                ## Milestones
                1. A short checklist of six checks suited to intern tasks.
                2. Every spreadsheet sent during the internship run through it.
                3. Errors caught by others logged and not repeated.
                4. One example of a careful check mentioned in your end-of-internship review.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Every spreadsheet sent during the internship went through the six-check list, with flagged errors logged and none repeated."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write six checks suited to comps updates and simple models"
                - "Ask your intern buddy which errors cost past interns"
                - "Run the checks on every file before you send it"
                - "Note one careful catch to mention in your review"
            - name: Associate review of analyst models
              description: |-
                ## Purpose
                As an associate, your review is the last line before a VP or client sees the model, and your analysts learn checking from how you check. A consistent review routine, with errors explained rather than silently fixed and a short weekly debrief, raises accuracy across the team and cuts your own late-night rework.

                ## Milestones
                1. A reviewer checklist that adds judgement checks to the analyst list.
                2. Errors returned with a short explanation of the cause.
                3. A weekly debrief with analysts on the errors found.
                4. Repeat errors per analyst falling over a quarter.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A reviewer checklist is in use, and a quarter of weekly debriefs shows repeat errors per analyst falling."
                cadence: rolling
              tasks:
                - "Write the judgement checks you add on top of the analyst list"
                - "Return each error with one line on its cause"
                - "Hold a 15-minute error debrief with your analysts @recurring(weekly:thu)"
                - "Track repeat errors per analyst across the quarter"
            - name: Checking work from an offshore support team
              description: |-
                ## Purpose
                Many banks send spreading, comps and first-draft models to an offshore or centre of excellence team, and the work arrives overnight with no chance to ask questions. A clear brief, a standard set of acceptance checks and monthly feedback on errors make that work usable on arrival rather than rebuilt at 6am.

                ## Milestones
                1. A brief template stating sources, units, conventions and checks required.
                2. Acceptance checks run on every file received.
                3. Errors fed back to the support team lead each month.
                4. Rework time on incoming files recorded and falling.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every file from the support team in a quarter was briefed with the template and checked on arrival, with monthly feedback sent."
                cadence: rolling
              tasks:
                - "Draft a brief template covering sources, units and required checks"
                - "Run the acceptance checks on the next file that arrives"
                - "Send monthly feedback on errors found to the support team lead @recurring(monthly:25)"
                - "Record how long each incoming file took to fix"
            - name: Late-night checking protocol when tired
              description: |-
                ## Purpose
                Most bad sends happen after midnight, when attention is lowest and pressure is highest. A short protocol for checking while exhausted, standing up, reading numbers aloud, checking outputs before inputs and sleeping on anything not urgent, keeps your error rate from climbing with your hours.

                ## Milestones
                1. A five-line late-night protocol written and kept with the checklist.
                2. A rule agreed with your associate for when a send can wait until morning.
                3. The protocol used on every send after midnight for a month.
                4. Late-night errors in the log compared before and after.

                ## Notes
                If late nights are routine rather than occasional, that is a staffing conversation, not a checking problem.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For one month every send after midnight followed the written protocol, and late-night errors in the log are compared with the prior month."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write a five-line protocol for checking when tired"
                - "Ask your associate which late requests can wait for a morning send"
                - "Tag late-night sends in your error log"
                - "Compare late-night error counts after one month"
            - name: From audit to banking model review
              description: |-
                ## Purpose
                Joiners from audit or transaction services already know tick and tie, but banking models are forward-looking, built at speed and judged on outputs. Translating audit habits, sampling, evidence and materiality, into the banking review routine keeps their strength while dropping the parts that cost too much time on a live deal.

                ## Milestones
                1. Audit habits listed and marked keep, adapt or drop for banking.
                2. A materiality rule of thumb agreed for model outputs.
                3. Projection logic checks added, which audit work rarely covers.
                4. The adapted routine used on two models and timed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written keep, adapt or drop list exists and the adapted routine has been used and timed on two models."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the audit review habits you bring with you"
                - "Mark each as keep, adapt or drop for deal work"
                - "Agree with an associate what level of difference matters on outputs"
                - "Time the adapted routine on two models"
            - name: LBO model returns check
              description: |-
                ## Purpose
                Sponsor returns are what everyone reads first in an LBO model, and an IRR built on the wrong dates or exit equity misleads the whole discussion. Checking that sources equal uses, that exit equity follows the debt schedule and that IRR and MOIC recalculate by hand gives confidence in the one number the client will quote.

                ## Milestones
                1. Sources and uses checked to balance, with fees and cash to balance sheet included.
                2. Exit equity tied to exit enterprise value less net debt from the schedule.
                3. IRR and MOIC recalculated by hand for the base case.
                4. Returns sensitivity checked to move in the expected direction.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A practice LBO's sources and uses, exit equity and base case IRR and MOIC have been recalculated by hand and agree with the model."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check sources equal uses including fees and minimum cash"
                - "Tie exit net debt to the final year of the debt schedule"
                - "Recalculate MOIC and IRR from the cash flow dates by hand"
                - "Confirm returns fall when entry multiple rises in the sensitivity"
            - name: Merger model accretion dilution check
              description: |-
                ## Purpose
                An accretion or dilution figure can be off because of a share count, a financing mix or a cost savings phasing error, and it often ends up in a board paper. Recalculating pro forma EPS from its parts, checking the new share issue and the after-tax cost of new debt, confirms the headline before anyone relies on it.

                ## Milestones
                1. New shares issued checked against the offer price and stock portion.
                2. After-tax interest on new debt and lost interest on cash recalculated.
                3. Cost savings phasing and tax effect checked against the stated assumptions.
                4. Pro forma EPS rebuilt by hand for year one and compared with the model.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Year one pro forma EPS in a practice merger model has been rebuilt by hand from its components and agrees with the model."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Recalculate new shares from the offer value and stock percentage"
                - "Recompute after-tax interest on new debt and forgone interest on cash"
                - "Check cost savings are phased and taxed as assumed"
                - "Rebuild year one pro forma EPS by hand"
            - name: Shadow calculation of the headline outputs
              description: |-
                ## Purpose
                Experienced reviewers rarely trust a model's headline number until they have reached it a second way. Rebuilding the one or two outputs that matter most, such as implied equity value per share or year-three net debt to EBITDA, in a separate short calculation from the model's own inputs shows whether the long chain of formulas and your quick arithmetic agree.

                ## Milestones
                1. The two headline outputs that drive the recommendation named.
                2. A separate shadow calculation built from the model's inputs on a scratch tab.
                3. Shadow and model results matched within a stated tolerance, or the gap explained.
                4. The shadow tab kept with the model as part of the check record.

                ## Notes
                Keep the shadow calculation deliberately crude: annual figures, no circularity. Its job is to catch an order-of-magnitude or sign error, not to match to the penny.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Two headline outputs from a live model have been reproduced in an independent shadow calculation and any gap above tolerance explained in writing."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick the two outputs your senior will quote first"
                - "Rebuild each one on a scratch tab using only the model's inputs"
                - "Write down the gap between shadow and model results"
                - "Trace any gap above tolerance back to the formula responsible"
            - name: Checking macros and copy-paste loops in a model
              description: |-
                ## Purpose
                Some bank and sponsor templates use macros to break circularity, paste values for a loop or refresh pages, and a macro that has not run leaves stale numbers that look perfectly normal. Knowing which cells each macro writes, when it must be run and how to tell whether it has run turns a black box into one more line on your checklist.

                ## Milestones
                1. Every macro in the model listed with what it writes and when it should run.
                2. A visible flag added that shows whether the paste loop is current.
                3. The model's outputs compared before and after running each macro.
                4. A short run order written on the cover sheet for the next user.

                ## Notes
                Only run macros in files from your own team or firm systems, and follow the bank's IT rules on enabling them. If you cannot read the code, ask the template owner rather than guessing.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A model's macros are listed with their inputs, outputs and run order on the cover sheet, and a flag shows whether the pasted loop is current."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Open the macro list and note each macro's name and purpose"
                - "Find the cells each macro pastes into"
                - "Add a flag comparing pasted values with the live calculation"
                - "Write the run order on the cover sheet"
            - name: Checking data tables and sensitivity grids
              description: |-
                ## Purpose
                Sensitivity tables look authoritative but fail silently: calculation set to automatic except tables, the base case not at the centre, or the row and column inputs swapped. Checking each grid's centre against the model output and spot-testing one corner by changing the inputs directly proves the table shows what its labels say.

                ## Milestones
                1. Each table's centre value matched to the live model output.
                2. Row and column inputs confirmed as the ones labelled.
                3. One corner of each table spot-tested by changing the inputs manually.
                4. Calculation settings recorded on the cover so others recalculate before printing.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every sensitivity table in one model has its centre matched, inputs confirmed and one corner spot-tested, with calculation settings noted."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Compare each table's centre with the model's base output"
                - "Confirm which inputs drive the rows and columns"
                - "Change the inputs by hand to test one corner of each table"
                - "Note the calculation setting on the cover page"
            - name: Reviewing a management or counterparty model
              description: |-
                ## Purpose
                On a sale or a buy-side deal you often receive the company's own model or a counterparty's, and the team needs to know quickly how far to rely on it. A structured review of its integrity, assumptions and sensitivity, written up as a short findings memo, turns an unknown file into a clear list of questions for management.

                ## Milestones
                1. The received model mapped and its checks run, or added where missing.
                2. Key assumptions listed and compared with history and the data room.
                3. Errors and inconsistencies recorded with their effect on outputs.
                4. A findings memo and question list sent to the associate.

                ## Notes
                Keep findings on the deal's systems under the NDA terms. Do not alter the received file; work on a copy.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A findings memo covering integrity, assumptions and errors in the received model, with a question list for management, has been delivered."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Save a working copy and leave the received model untouched"
                - "Map the model and run your standard checks on the copy"
                - "Compare key assumptions with history and data room figures"
                - "Ask the agent to draft the findings memo from your notes"
---

# Financial Model Checking

This area is for analysts and associates who have to send models upward and want them to arrive clean: balance checks that actually catch something, links that go where they claim, no stray hard-codes, consistent signs and switches that work in every case. It runs from foundations (a written checklist, the balance and cash checks, a hard-code audit, a sign rule sheet and a master check tab) through the weekly operating routines, the technical skills of tracing and debugging, decisions about tools and review tiers, dated moments such as a pre-signing freeze, variants for interns, new analysts, reviewers and career switchers, and finally specialist checks on LBO, merger, sensitivity and management models.

What repeats is a weekly error log entry and pre-send pass, weekly scenario sweeps and version comparisons, a peer swap, a monthly hygiene sweep and pattern review, and a quarterly refresh of the checklist itself. The Operational checklist, Metrics log, Purchase decision and Onboarding 30/60/90 templates pair with the projects that name them. Practise on public company models; live client models stay on the bank's systems and never go into personal files. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
