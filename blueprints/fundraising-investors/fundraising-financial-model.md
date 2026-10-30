---
id: fundraising-investors.fundraising-financial-model
name: Fundraising Financial Model
description: "An investor-grade model built from clean actuals: driver-based revenue, a hire-by-hire cost plan, runway and use of funds, scenarios, and the checks and monthly refresh that keep it credible in diligence."
category: business
version: 1.0.0
tags: [fundraising-investors, fundraising-financial-model, founder, manager, financial-model, projections, use-of-funds, runway]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - feedback-themes
    - metrics-log
    - meeting-notes
    - board-meeting
  pillars:
    - name: Fundraising & Investor Relations
      emoji: "💰"
      description: "Raising capital and keeping investors informed: rounds from pre-seed to growth, grants and debt, the data room, cap table, investor updates, board reporting and exits."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Fundraising Financial Model
          description: "Building the projections and use-of-funds model investors expect, with assumptions that hold up under scrutiny in diligence."
          projects:
            - name: Model brief on questions, audience and horizon
              description: |-
                ## Purpose
                Before a single formula, decide what the model has to answer: how much to raise, how long it lasts, and which milestones the money buys. A pre-seed angel wants a believable 18 to 24 months of monthly detail, while a Series A analyst will rebuild your revenue engine from its drivers, so the brief fixes horizon, granularity and audience before you build the wrong thing.

                ## Milestones
                1. A one-page brief naming the three questions the model must answer for investors.
                2. Forecast horizon and granularity fixed, for example monthly for 36 months then annual to year five.
                3. The round stage and likely investor type written down, with what each expects to see.
                4. The owner of the model and its reviewer named.

                ## Notes
                Most early-stage investors discount years four and five heavily. Put the effort into the next 24 months.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A dated one-page model brief records the three questions, the horizon, the granularity and the named owner and reviewer."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the three questions investors will use the model to answer"
                - "Pick a forecast horizon and granularity for the model"
                - "Ask one investor or adviser what they expect to see at your stage"
                - "Name who owns the model and who reviews it before it leaves the company"
            - name: Clean monthly actuals from the books
              description: |-
                ## Purpose
                Projections are judged first by the history they start from, and a model whose opening numbers do not match the accounts loses credibility in the first diligence call. Pulling 12 to 24 months of monthly profit and loss and cash from the bookkeeping system, reconciled to the bank and mapped to the model's categories, gives every forecast line a real starting point.

                ## Milestones
                1. Monthly profit and loss for the last 12 to 24 months exported from the accounting system.
                2. Closing cash for each month agreed to bank statements.
                3. Every ledger account mapped to a model category in a single mapping table.
                4. One-off items such as grants, legal fees for a past round or founder loans flagged so they are not projected forward.

                ## Notes
                If the books are months behind, close them first with your bookkeeper. A model built on estimates of last quarter will be questioned line by line.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An actuals tab holds at least 12 months of monthly figures whose closing cash matches the bank statements exactly."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask your bookkeeper which month was last fully closed"
                - "Export monthly profit and loss and balance sheet for the last 24 months"
                - "Build a mapping table from ledger accounts to model categories"
                - "Tie each month's closing cash to the bank statement"
                - "Flag one-off income and costs in a notes column"
            - name: Inputs, calculations and outputs tab layout
              description: |-
                ## Purpose
                Models that mix typed numbers into formulas are the ones that break during a diligence walkthrough. Separating one inputs tab, calculation tabs that hold only formulas, and output tabs for the summary and charts means anyone can change an assumption in one place and trust what flows through.

                ## Milestones
                1. A tab map listing every tab in order with its job in one line.
                2. All assumptions held on a single inputs tab, colour-coded as inputs.
                3. One timeline row driving every monthly calculation tab.
                4. A summary tab showing revenue, burn, cash and headcount by year on one screen.

                ## Notes
                A common convention is blue font for typed inputs, black for formulas and green for links to other tabs. Pick one and write it on the cover tab.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The model has a written tab map, a single inputs tab and a one-screen summary, with no typed numbers inside calculation tabs."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Sketch the tab map on one page before building"
                - "Create a cover tab with the colour convention and version number"
                - "Build a single timeline row that every calculation tab references"
                - "Move every typed assumption onto the inputs tab"
                - "Add a one-screen summary tab by year"
            - name: Choosing the modelling tool and sharing format
              description: |-
                ## Purpose
                Spreadsheets remain what most investors expect to receive, but a shared online sheet, a desktop spreadsheet and dedicated planning software each change how you collaborate, keep versions and share. Settling the tool once, against how investors will open it and who edits it, avoids a painful migration halfway through a raise.

                ## Milestones
                1. Three options compared on investor compatibility, collaboration, version history and cost.
                2. A check that the chosen format opens cleanly for the two investors most likely to request it.
                3. A decision recorded with the reason and the list of people with edit rights.
                4. A sharing approach agreed: native file, view-only link or exported copy.

                ## Notes
                Start from the **Purchase decision** template. Avoid features that only work in one product, such as custom scripts, if investors will open the file elsewhere.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded tool decision names the format, the people with edit rights and how investor copies will be shared."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List who will edit the model and who will only read it"
                - "Compare three tools on version history, sharing and cost"
                - "Test that a sample file opens without broken formulas in other spreadsheet apps"
                - "Record the tool decision and the sharing method"
            - name: KPI definitions that match the deck and data room
              description: |-
                ## Purpose
                Investors notice when annual recurring revenue in the deck is not the figure the model calculates, or churn is defined three ways across three documents. A short glossary that fixes each metric's formula, source and treatment of edge cases, used by the model, the deck and the data room alike, removes a whole category of awkward diligence questions.

                ## Milestones
                1. A glossary of 10 to 15 metrics, each with a formula, data source and owner.
                2. Edge cases decided: pilots, discounts, paused accounts and annual prepayments.
                3. The model's metric calculations rebuilt to follow the glossary exactly.
                4. Headline figures in the deck and data room checked against the glossary.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A glossary of at least 10 metric definitions is saved and the model, deck and data room show the same figure for each."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every metric that appears in the deck or the model"
                - "Write a formula and data source for each in one glossary"
                - "Decide how pilots, discounts and paused accounts are counted"
                - "Reconcile the deck's headline numbers to the model"
                - "Revisit the metric definitions before each new round @recurring(yearly)"
            - name: Revenue drivers that mirror how you sell
              description: |-
                ## Purpose
                A revenue line typed as 15 percent monthly growth tells an investor nothing about whether you can deliver it. Building revenue from the drivers that actually move it, whether leads and conversion rates, seats and price, usage, or orders and basket size, lets investors test the plan by challenging one input at a time.

                ## Milestones
                1. The revenue formula written in one line, such as new customers times average contract value plus expansion minus churn.
                2. Each driver given a starting value from actuals or a stated source.
                3. Revenue split by product or segment where they behave differently.
                4. A back-test showing modelled revenue for past months within a few percent of actuals.

                ## Notes
                If you have fewer than six months of sales data, say so and state which drivers are estimates. Investors forgive thin data far more readily than hidden guesses.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Revenue is calculated from named drivers on the inputs tab and back-tests within five percent of actual revenue for the last six months."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write your revenue formula in one sentence before opening the spreadsheet"
                - "Pull the starting value for each driver from your sales data"
                - "Split revenue by product or segment where behaviour differs"
                - "Back-test the formula against the last six months of actual revenue"
            - name: Hire-by-hire headcount plan
              description: |-
                ## Purpose
                People are usually the largest cost in a young company, often well over half of the burn, so the headcount plan is the cost model. Listing every planned hire by role, start month, salary and on-costs makes the burn defensible and shows investors exactly what their money pays for.

                ## Milestones
                1. A roster of current staff and planned hires with role, team, start month and base salary.
                2. Employer taxes, benefits and equipment added as a percentage or per-head cost.
                3. Recruiting fees and ramp time included for senior hires.
                4. Headcount by team and month feeding the cost tabs and the summary.

                ## Notes
                Salary assumptions are often challenged. Use recent offers or a published salary survey for your city, not last year's numbers.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every current and planned role appears on one roster with start month and fully loaded cost, and total people cost flows to the summary."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every current employee and contractor with their monthly cost"
                - "Add each planned hire with role, team and start month"
                - "Set a loaded cost percentage for taxes, benefits and equipment"
                - "Check salary assumptions against recent offers or a salary survey"
            - name: Operating cost build beyond payroll
              description: |-
                ## Purpose
                Software subscriptions, cloud hosting, rent, insurance, legal and accounting fees creep up as a company grows, and a flat monthly overhead line hides that. Tying each non-people cost to a driver (per head, per customer, a percentage of revenue, or fixed with step changes) keeps the burn honest as the plan scales.

                ## Milestones
                1. Each non-payroll cost category given a driver and a starting amount from actuals.
                2. Step changes such as a new office or a first audit fee placed in the right month.
                3. Hosting and third-party costs that scale with usage linked to the revenue drivers.
                4. Modelled and actual operating costs compared for the last three months.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every non-payroll cost line has a stated driver and the last three months reconcile to actuals within ten percent."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Group the last six months of non-payroll spend into ten or fewer categories"
                - "Choose a driver for each cost category"
                - "Place known step changes such as a first audit fee in their month"
                - "Compare modelled costs with the last three months of actuals"
            - name: Burn, runway and zero-cash date
              description: |-
                ## Purpose
                The first question in many investor meetings is how many months of cash are left, and the answer should come from the model rather than a mental estimate. Calculating gross burn, net burn, runway and the month cash would hit zero, plus a minimum cash floor you will not go below, frames both the urgency and the size of the raise.

                ## Milestones
                1. Gross and net burn calculated monthly from the model.
                2. Runway in months and the zero-cash month shown on the summary tab.
                3. A minimum cash floor agreed, for example three months of costs, and the month it would be breached shown.
                4. The fundraising start date worked back from the floor date, allowing for a raise that takes six months.

                ## Notes
                Raises routinely take longer than planned. Start the process while runway is still comfortably long.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The summary tab shows net burn, months of runway, the zero-cash month and the cash floor month, and a raise start date is recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Calculate gross and net burn for each of the last six months"
                - "Add runway and the zero-cash month to the summary tab"
                - "Agree a minimum cash floor with your cofounder or finance lead"
                - "Work back from the floor date to the latest sensible raise start"
            - name: Use of funds tied to milestones
              description: |-
                ## Purpose
                Round size only makes sense next to what it buys: which milestones, by when, and whether they are enough to raise the next round on better terms. Building the use of funds from the model, with spend by category over the runway period linked to the milestones that period should deliver, turns the ask from a number into a plan.

                ## Milestones
                1. Three to five milestones the round must reach, each with a measurable target and month.
                2. Spend over the runway period split into a handful of categories such as product, sales and general costs.
                3. Runway after the raise shown, with a buffer beyond the final milestone date.
                4. A one-slide use of funds summary drawn directly from the model.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A use of funds table and milestone list are generated from the model and show runway reaching at least three months past the final milestone."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the milestones the next round's investors will want to see"
                - "Link each milestone to the hires and spend needed to reach it"
                - "Group spend into four or five use of funds categories"
                - "Export a one-slide use of funds summary for the deck"
            - name: Monthly actuals versus forecast refresh
              description: |-
                ## Purpose
                Credibility comes from comparing the model with reality every month, and investors in later rounds often ask how past forecasts held up. A fixed routine after the books close loads actuals, compares them with the forecast and rolls the model forward, so the version you send is never stale.

                ## Milestones
                1. A variance tab comparing actuals with the forecast for revenue, gross margin, burn and headcount.
                2. Variances above an agreed threshold explained in a sentence each.
                3. Forecast months rolled forward with actuals locked in.
                4. Twelve consecutive months of variance history kept.

                ## Notes
                Keep the original forecast frozen in a separate column. Overwriting it destroys the forecast accuracy record investors may ask for.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month's actuals are loaded and a variance note written within ten working days of month end, for twelve months running."
                cadence: rolling
              tasks:
                - "Set the variance threshold that needs a written explanation"
                - "Load the closed month's actuals into the model @recurring(monthly:8)"
                - "Write a three-line variance commentary for the founders @recurring(monthly:9)"
                - "Lock each closed month so the original forecast is preserved"
            - name: Assumption change log
              description: |-
                ## Purpose
                Diligence teams often compare the model you sent after the first meeting with the one in the data room, and unexplained changes to churn or price invite suspicion. Logging every assumption change with its date, old value, new value and reason gives you an instant and honest answer.

                ## Milestones
                1. A change log tab with date, input, old value, new value, reason and author.
                2. Every change since the last investor version recorded.
                3. A rule agreed that no input changes without a log entry.
                4. Changes reviewed with a cofounder or finance lead each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The change log has an entry for every input that differs between any two versions sent to investors."
                cadence: rolling
              tasks:
                - "Add a change log tab with six columns"
                - "Back-fill changes made since the last version sent to investors"
                - "Agree with every editor that no input changes without a log entry"
                - "Review open assumption changes with your cofounder @recurring(monthly:12)"
            - name: Investor version control and file naming
              description: |-
                ## Purpose
                Sending a file called final v7 to one fund and an older copy to another is a common and avoidable mistake mid-raise. A naming rule, a register of who received which version and a protected copy for external use keep every investor looking at numbers you can stand behind.

                ## Milestones
                1. A file naming rule with date and version number written on the cover tab.
                2. A distribution register listing each investor, the version sent and the date.
                3. An external copy format chosen, such as a view-only link or a file with formulas intact and inputs protected.
                4. Superseded versions archived in one folder.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every model sent outside the company appears in the distribution register with its version number and date."
                cadence: rolling
              tasks:
                - "Write the file naming rule on the cover tab"
                - "Start a register of which investor received which version"
                - "Protect the input cells on the external copy"
                - "Archive superseded investor versions into one folder @recurring(monthly:26)"
            - name: Thirteen-week cash forecast during a raise
              description: |-
                ## Purpose
                Monthly models smooth over the week when payroll and a large supplier invoice land together, which matters when runway is short and the close date is uncertain. A rolling thirteen-week receipts and payments forecast, updated weekly, shows the true low point in cash and gives early warning if the raise slips.

                ## Milestones
                1. A thirteen-week sheet of expected receipts and payments by week.
                2. Opening cash each week tied to the bank balance.
                3. The lowest projected weekly balance highlighted.
                4. A trigger balance agreed at which cost actions start.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A thirteen-week cash forecast is updated every week while raising, with opening cash matching the bank each Monday."
                cadence: rolling
              tasks:
                - "List known receipts and payments for the next thirteen weeks"
                - "Set a trigger balance at which cost actions begin"
                - "Roll the forecast forward and tie opening cash to the bank @recurring(weekly:mon)"
                - "Update expected customer receipts from the debtors list @recurring(weekly:thu)"
            - name: Quarterly rolling reforecast
              description: |-
                ## Purpose
                Plans made at the start of a year are out of date within months, and an investor reading a model whose next quarter is clearly wrong stops trusting the rest. Reforecasting every quarter, keeping a rolling 18 to 24 months of monthly detail, keeps the model ready to send at short notice.

                ## Milestones
                1. A reforecast calendar with the first week of each quarter blocked out.
                2. Revenue, hiring and cost drivers reset from the latest run rate.
                3. The new forecast compared with the previous one, line by line.
                4. The reforecast shared with the board or lead investor where one exists.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four reforecasts a year are completed, each with a written comparison to the previous version."
                cadence: cyclic
              tasks:
                - "Block the first week of each quarter for the reforecast"
                - "Reset drivers from the latest three-month run rate @recurring(quarterly)"
                - "Compare the new forecast with the previous one line by line"
                - "Send a one-paragraph summary of the changes to the lead investor"
            - name: Sales pipeline to bookings reconciliation
              description: |-
                ## Purpose
                Revenue forecasts that bear no relation to the sales pipeline are easy for investors to spot and hard to defend. Comparing the bookings the model expects in the next two quarters with the weighted pipeline in your sales system each month shows whether the forecast is supported, and which side needs to change.

                ## Milestones
                1. Weighted pipeline for the next two quarters exported from the sales system.
                2. Stage probabilities checked against your own historical win rates.
                3. A monthly comparison of model bookings with weighted pipeline saved.
                4. Any gap above 20 percent explained or the model adjusted.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month a comparison of forecast bookings and weighted pipeline is saved, with gaps over 20 percent explained."
                cadence: rolling
              tasks:
                - "Export open deals with stage, value and expected close month"
                - "Replace default stage probabilities with your own historical win rates"
                - "Compare forecast bookings with weighted pipeline @recurring(monthly:15)"
                - "Agree with the sales lead which side changes when the two disagree"
            - name: Hiring plan versus actual hires
              description: |-
                ## Purpose
                Hires almost always land later than planned, which flatters burn and quietly delays the revenue the plan depends on. Tracking planned against actual start dates each month keeps both cost and capacity honest, and gives a real answer when an investor asks how the last round's hiring plan went.

                ## Milestones
                1. Each planned hire tagged with a status: open, offer out, started or deferred.
                2. Actual start dates entered as they happen.
                3. Average hiring delay in weeks calculated.
                4. Revenue drivers that depend on new hires, such as sales capacity, shifted to actual start dates.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The headcount roster shows status and actual start date for every planned hire, updated monthly, with the average delay calculated."
                cadence: rolling
              tasks:
                - "Add status and actual start date columns to the roster"
                - "Update hire statuses with each hiring manager @recurring(monthly:20)"
                - "Calculate the average gap between planned and actual start dates"
                - "Shift dependent revenue drivers to the actual start dates"
            - name: Model integrity checks tab
              description: |-
                ## Purpose
                A balance sheet that does not balance, or a cash figure that differs between two tabs, can undo an otherwise strong meeting. A checks tab of simple tests that must all show zero, with a single flag on the cover, catches broken links and pasted values before anyone outside the company sees them.

                ## Milestones
                1. A checks tab with tests such as the balance sheet balancing, cash agreeing across tabs and revenue totals matching.
                2. A single pass or fail flag on the cover tab.
                3. Every check passing on the current version.
                4. A rule agreed that no version leaves the company with a failing check.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A checks tab with at least eight tests is in place and every external version since has passed all of them."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down eight things that must always tie in the model"
                - "Build each as a check that returns zero when correct"
                - "Show a single pass or fail flag on the cover tab"
                - "Ask a colleague to trace five random formulas to their source @recurring(quarterly)"
            - name: Investor model question log
              description: |-
                ## Purpose
                The same model questions come up from fund after fund: why churn improves in year two, how sales ramp was estimated, what happens if price drops. Logging each question, your answer and whether it changed an assumption builds a ready-made FAQ, sharpens the next meeting and shows which inputs investors find weakest.

                ## Milestones
                1. A log of model questions with investor, date, question, answer and any resulting change.
                2. Questions grouped into themes.
                3. Standard answers written for the five most frequent questions.
                4. Assumptions questioned by three or more investors either better sourced or changed.

                ## Notes
                Start from the **Feedback themes** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A question log with themes and written standard answers covers every investor meeting where the model was discussed."
                cadence: rolling
              tasks:
                - "Create the question log from the feedback themes template"
                - "Log model questions within a day of each investor meeting"
                - "Group the week's new questions into themes @recurring(weekly:fri)"
                - "Write standard answers for the five most frequent questions"
            - name: Three-statement linking fundamentals
              description: |-
                ## Purpose
                Many founder models are a profit and loss with a cash line bolted on, which breaks once you have deferred revenue, inventory or a loan. Learning how the income statement, balance sheet and cash flow statement link, and building a small practice model, means your cash forecast reflects timing rather than profit.

                ## Milestones
                1. The links between the three statements explained in your own words on one page.
                2. A practice model with ten line items that balances every month.
                3. Working capital movements such as receivables and deferred revenue flowing into cash.
                4. The main model's cash flow rebuilt from the balance sheet, or a decision recorded that a simpler method is enough for now.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A small practice three-statement model balances for 24 months and the main model's cash method is documented."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Choose one course or textbook chapter on three-statement modelling"
                - "Build a ten-line practice model that balances every month"
                - "Add receivables and deferred revenue and watch how cash changes"
                - "Decide whether the main model needs a full balance sheet yet"
            - name: Investor metrics computed from your own model
              description: |-
                ## Purpose
                Investors will calculate burn multiple, acquisition cost payback, lifetime value to acquisition cost and net revenue retention from your numbers whether or not you show them. Learning how each is calculated, and producing them from the model yourself, means you see the same weaknesses they will before the meeting.

                ## Milestones
                1. A metrics tab calculating burn multiple, acquisition cost payback, net revenue retention and gross margin monthly.
                2. Each formula matched to the KPI glossary.
                3. The trend for each metric over the last 12 months charted.
                4. A short note on the one metric that looks weakest and why.

                ## Notes
                Start from the **Metrics log** template. Benchmarks for these vary widely by sector and stage, so treat them as a conversation starter, not a pass mark.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A metrics tab shows at least four investor metrics calculated monthly from the model, with a written note on the weakest one."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read how burn multiple and acquisition cost payback are calculated"
                - "Add a metrics tab using the definitions in your glossary"
                - "Chart each metric for the last 12 months"
                - "Record the month's investor metrics in the metrics log @recurring(monthly:11)"
            - name: Customer cohort retention tables
              description: |-
                ## Purpose
                Averages hide whether newer customers stay longer or leave faster than early ones, and that trend is what growth-stage investors care about most. Building monthly cohort tables of customers and revenue retained, from your billing data, gives the model's churn and expansion assumptions real evidence.

                ## Milestones
                1. Billing data exported with customer, start month and monthly revenue.
                2. A logo retention cohort table and a revenue retention cohort table built.
                3. The model's churn and expansion inputs compared with the cohort averages.
                4. A one-line conclusion on whether newer cohorts are improving.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Logo and revenue cohort tables cover every customer since launch and the model's churn input sits within the observed range."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export billing history with customer, start month and monthly revenue"
                - "Build a logo retention cohort table by start month"
                - "Build a revenue retention table that includes expansion"
                - "Add the latest month's cohort to both tables @recurring(monthly:17)"
            - name: Contribution margin by customer segment
              description: |-
                ## Purpose
                Blended margins can hide that small customers lose money once support and onboarding are counted, while large ones carry the business. Working out contribution per customer for two or three segments shows investors you know where growth is profitable and where it is not.

                ## Milestones
                1. Two or three customer segments defined, such as by size or acquisition channel.
                2. Revenue, direct costs, support and onboarding allocated to each segment.
                3. Contribution margin and payback per segment calculated.
                4. A decision noted on whether the plan's mix of segments should change.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Contribution margin per customer is calculated for at least two segments and the decision on segment mix is recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Define two or three customer segments the team already talks about"
                - "Allocate support and onboarding time to each segment"
                - "Calculate contribution margin and payback per segment"
                - "Ask the agent to summarise what the segment results imply for the sales plan"
            - name: Cash timing and working capital
              description: |-
                ## Purpose
                Profitable months can still drain cash when customers pay on 60-day terms, annual contracts are billed upfront, or sales tax is collected now and paid later. Learning how billing terms, deferred revenue, payables and tax timing move cash lets you model the gap between revenue and money in the bank.

                ## Milestones
                1. Current payment terms for customers and suppliers listed with averages.
                2. Days sales outstanding and days payable calculated from actuals.
                3. Annual upfront billing and deferred revenue modelled separately from recognised revenue.
                4. Sales tax or VAT collection and payment timing reflected in cash.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The model shows receipts and payments on actual payment terms and the gap between revenue and cash is visible each month."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List customer and supplier payment terms from current contracts"
                - "Calculate days sales outstanding from the last six months"
                - "Model annual billing separately from monthly recognised revenue"
                - "Check sales tax filing and payment dates with your accountant"
            - name: Market share sanity check on the forecast
              description: |-
                ## Purpose
                Five-year plans that imply 30 percent of a market where no competitor holds more than 5 percent are marked down instantly. Dividing year-five revenue by a bottom-up serviceable market, and comparing implied customers with the real number of potential buyers, catches forecasts that are mathematically possible but commercially implausible.

                ## Milestones
                1. A bottom-up count of potential customers and average spend for the serviceable market.
                2. Implied market share and customer count calculated for each forecast year.
                3. The comparison made with the share held by established competitors.
                4. The outer years adjusted, or a written rationale kept for any share above comparable companies.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Implied market share and customer count are shown for each forecast year beside a sourced bottom-up market estimate."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Count potential customers in your serviceable market from a named source"
                - "Calculate implied market share for each forecast year"
                - "Find the market share held by two established competitors"
                - "Write a one-paragraph rationale or lower the outer years"
            - name: Benchmark sources for key assumptions
              description: |-
                ## Purpose
                Every important assumption will be asked about, and saying it felt right is not an answer. Building a short source file of benchmark ranges for growth, churn, sales ramp, conversion and margin, from published surveys, public company filings and conversations with operators, gives each input a citation.

                ## Milestones
                1. A source file listing each key assumption with your value, a benchmark range and where it came from.
                2. At least two independent sources for the five assumptions that move cash most.
                3. Assumptions outside the benchmark range flagged with a reason.
                4. The source file linked from the inputs tab.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each of the five most sensitive inputs cites at least two benchmark sources in a file linked from the inputs tab."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the ten assumptions that drive cash most"
                - "Find two published benchmark sources for the top five"
                - "Ask two operators at similar companies how their numbers compare"
                - "Refresh benchmark ranges from new survey editions @recurring(yearly)"
            - name: Spreadsheet modelling technique practice
              description: |-
                ## Purpose
                Lookups, scenario switches, named ranges and consistent row formulas are what make a model easy to audit rather than a tangle only its author understands. Practising a handful of techniques on a copy of your model, then applying them to the real one, shortens every future walkthrough.

                ## Milestones
                1. Five techniques chosen, such as lookup functions, scenario switches, named ranges, timing flags and error checks.
                2. Each technique practised on a copy of the model.
                3. Every row in the calculation tabs using one consistent formula across all months.
                4. Numbers typed inside formulas removed and moved to the inputs tab.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Calculation tabs use one consistent formula per row with no typed numbers inside formulas, and five techniques have been practised."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick five spreadsheet techniques from a modelling course or guide"
                - "Practise each technique on a copy of the model"
                - "Search calculation tabs for numbers typed inside formulas"
                - "Make each row's formula consistent across every month"
            - name: Base, upside and downside scenarios
              description: |-
                ## Purpose
                Showing what happens if sales take twice as long earns more trust than showing only the plan. A scenario switch that changes a handful of drivers together, with a downside the company survives on the cash it is raising, proves the plan is not one optimistic line.

                ## Milestones
                1. Base, upside and downside values set for five or six key drivers on the inputs tab.
                2. A single switch that moves the whole model between scenarios.
                3. Cash, runway and milestone dates shown side by side for all three.
                4. A downside in which the company still reaches its key milestone, or a written cost plan that gets it there.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One switch moves the model between three scenarios and the downside keeps cash above the floor through the round's milestone date."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Choose the five or six drivers that differ between scenarios"
                - "Set base, upside and downside values for each driver"
                - "Build a single scenario switch on the inputs tab"
                - "Re-test whether the downside still survives on current cash @recurring(quarterly)"
            - name: Sensitivity table on the drivers that matter
              description: |-
                ## Purpose
                Most models have three or four inputs that decide the outcome and dozens that barely matter. A sensitivity table, flexing each key input up and down and showing the effect on runway and year-two revenue, tells you where to spend diligence effort and which numbers to defend hardest.

                ## Milestones
                1. Ten candidate inputs each flexed by a fixed amount, for example 20 percent.
                2. The effect on runway and year-two revenue recorded for each.
                3. Inputs ranked by impact in a simple bar chart.
                4. Evidence for the top three inputs strengthened.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A sensitivity table ranks at least ten inputs by effect on runway and the top three each have a written source."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pick ten inputs that might move the outcome"
                - "Flex each by 20 percent up and down and record runway"
                - "Rank the inputs by impact in a bar chart"
                - "Gather better evidence for the three most sensitive inputs"
            - name: Sales capacity and rep ramp model
              description: |-
                ## Purpose
                For a company that sells through account executives, revenue depends on how many reps are hired, how long they take to reach quota and what share of quota they actually close. Modelling bookings from rep capacity rather than a growth rate links the hiring plan to the revenue plan, which is how many investors will test it.

                ## Milestones
                1. Quota, ramp months and expected attainment set from your own reps' history or a stated benchmark.
                2. Bookings calculated per rep by month of tenure.
                3. Total bookings from capacity compared with the top-down revenue line.
                4. Sales hiring in the headcount plan matched to the capacity needed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Forecast bookings are calculated from rep count, ramp and attainment, and differ from the top-down line by under ten percent or the gap is explained."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Gather quota and actual bookings for each rep since they were hired"
                - "Set ramp months and attainment from that history"
                - "Calculate bookings per rep by month of tenure"
                - "Update rep attainment from the latest closed month @recurring(monthly:22)"
            - name: Gross margin build and target path
              description: |-
                ## Purpose
                Gross margin tells investors what each unit of revenue is worth, and a margin that is assumed rather than built rarely survives diligence. Breaking cost of revenue into hosting, third-party fees, payment processing, support and onboarding, and showing how each falls with scale, makes the path to the target margin visible.

                ## Milestones
                1. Cost of revenue split into its components from actuals.
                2. Each component given a driver: per customer, per transaction or a percentage of revenue.
                3. Scale effects such as volume discounts placed in the month they apply.
                4. A margin path by quarter showing the target margin and the date it is reached.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Gross margin is built from at least four cost components with drivers and the quarter the target margin is reached is shown."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Split last quarter's cost of revenue into its components"
                - "Assign a driver to each cost of revenue component"
                - "Ask hosting and payment providers when volume discounts start"
                - "Compare modelled and actual gross margin @recurring(monthly:24)"
            - name: Price change impact model
              description: |-
                ## Purpose
                Raising prices is often the fastest lever on revenue and margin in the plan, but investors want to see the churn and conversion effect, not only the uplift. Modelling a price change across new and existing customers, with a range of churn responses, turns a pricing debate into numbers the founders can decide on.

                ## Milestones
                1. Current price points and the share of customers on each listed.
                2. Treatment of new and existing customers set, including any grandfathering.
                3. Revenue and cash effect modelled for low, medium and high churn responses.
                4. A decision recorded on whether, when and how to change price.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A price change model shows the revenue effect under three churn responses and the founders' decision is recorded with a date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List current price points and the customers on each"
                - "Decide how existing customers would be treated"
                - "Model the change under three churn responses"
                - "Record the pricing decision and its effective month"
            - name: Default-alive and breakeven analysis
              description: |-
                ## Purpose
                Knowing whether the company reaches cash-flow breakeven on the money it already has, with no further raise, changes how you negotiate. Calculating the breakeven month on the current plan and on a reduced-cost plan gives the founders a clear answer to whether they are default alive and what it would take.

                ## Milestones
                1. Breakeven month calculated on the base plan with no new funding.
                2. A reduced-cost version showing the cuts needed to break even before cash runs out.
                3. The default alive or default dead verdict written in one sentence.
                4. The breakeven month added to the summary tab.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The summary tab shows the breakeven month with and without the raise and a one-sentence default alive verdict is recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Turn off new funding in a copy of the model"
                - "Find the month cash flow turns positive, if it does"
                - "Model the cost cuts needed to break even before cash runs out"
                - "Recheck the default alive verdict after each reforecast @recurring(quarterly)"
            - name: Simplifying an overbuilt model
              description: |-
                ## Purpose
                Models grow a tab every time someone asks a question, until nobody can explain them in a 30-minute call. Cutting unused tabs, merging duplicate calculations and reducing inputs to those that actually change the answer makes the model faster to walk through and harder to break.

                ## Milestones
                1. Every tab listed with whether any output depends on it.
                2. Unused tabs and inputs removed or moved to an archive file.
                3. The input count reduced, with the drivers that matter kept.
                4. A full walkthrough timed at under 30 minutes.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The simplified model has no orphan tabs and a full walkthrough of it takes under 30 minutes."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every tab and mark whether any output depends on it"
                - "Move unused tabs to an archive copy"
                - "Merge duplicate calculations into one place"
                - "Time a full walkthrough with a colleague"
            - name: Raise amount range from the model
              description: |-
                ## Purpose
                Founders are asked how much they are raising before almost anything else, and a single number with no reasoning invites negotiation downward. Running the model at a minimum, target and maximum raise, each with its runway and the milestones it reaches, gives a range you can explain and defend.

                ## Milestones
                1. Minimum, target and maximum raise amounts each run through the model.
                2. Runway and milestones reached shown for each amount.
                3. The minimum confirmed as enough to reach the next fundable milestone with a buffer.
                4. The range agreed by the founders and written into the model brief.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three raise amounts are modelled with runway and milestones for each, and the founders' agreed range is recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick minimum, target and maximum raise amounts to test"
                - "Run each amount through the model and record runway"
                - "Mark which milestones each amount reaches"
                - "Agree the range with your cofounders and record it in the brief"
            - name: Bookings, billings, revenue and cash separation
              description: |-
                ## Purpose
                Annual contracts billed upfront, multi-year deals and usage billed in arrears make bookings, invoices, recognised revenue and cash four different numbers. Separating them in the model stops the deck quoting one and the accounts another, and shows investors the cash benefit of upfront billing honestly.

                ## Milestones
                1. Definitions of bookings, billings, revenue and cash agreed and added to the glossary.
                2. Separate lines for each in the model.
                3. Deferred revenue on the balance sheet reconciled to the accounts.
                4. Revenue recognition treatment confirmed with your accountant.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The model shows bookings, billings, revenue and cash as separate lines and deferred revenue reconciles to the accounts."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write one-line definitions of bookings, billings, revenue and cash"
                - "Add separate lines for each to the revenue tab"
                - "Reconcile deferred revenue to the latest balance sheet"
                - "Confirm the revenue recognition approach with your accountant"
            - name: Investor-ready model release
              description: |-
                ## Purpose
                Treat the model you send after the first meeting like a product launch: it sets the tone for diligence, so it deserves a release date and a checklist. Freezing a version a fortnight before outreach starts, with checks passing, a cover tab and a short guide to the assumptions, avoids last-minute fixes in front of investors.

                ## Milestones
                1. A release date set at least two weeks before investor outreach.
                2. All integrity checks passing and headline figures matching the deck.
                3. A cover tab with version, date, contact and a guide to the key assumptions.
                4. The release version saved read-only and logged in the distribution register.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A frozen, checked model version with a cover tab and assumptions guide exists at least two weeks before the first investor outreach."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Set the release date two weeks before outreach begins"
                - "Write a one-page guide to the key assumptions"
                - "Check every headline figure in the deck against the model"
                - "Save the release version read-only and log it in the register"
            - name: Model walkthrough with an investor's analyst
              description: |-
                ## Purpose
                Once a fund is serious, an associate or analyst often asks for a call to go through the model line by line. Preparing a 30-minute walkthrough, from revenue drivers to cash, with the likely hard questions answered in advance, turns that call into a reason to move forward.

                ## Milestones
                1. A walkthrough order agreed: summary, revenue drivers, headcount, costs, cash and scenarios.
                2. Answers ready for the five questions most often raised in the question log.
                3. One rehearsal run with a colleague playing the analyst.
                4. Follow-up requests from the call logged with an owner and a date.

                ## Notes
                Start from the **Meeting notes** template. Bring whoever built the model, even if the CEO leads the call.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The walkthrough call is held and every follow-up request is logged with an owner and a reply date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Agree the walkthrough order from summary down to cash"
                - "Prepare answers to the five most common model questions"
                - "Rehearse the walkthrough with a colleague playing the analyst"
                - "Log follow-up requests with an owner and date in the meeting notes"
            - name: Financial diligence on the model
              description: |-
                ## Purpose
                After a term sheet, investors or their accountants test the model against the books, contracts and bank statements, and slow or inconsistent answers can delay a close or reopen terms. Preparing reconciliations in advance and answering every request from one tracker keeps diligence short and the numbers consistent.

                ## Milestones
                1. Reconciliations ready from model actuals to the accounts, the bank and the billing system.
                2. A request tracker with each question, owner, due date and answer.
                3. Every answer checked against the model before it is sent.
                4. All financial diligence requests on the model closed.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every financial diligence request on the model is answered from one tracker and closed, with no figure contradicting the model."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Prepare reconciliations from model actuals to the accounts and bank"
                - "Set up a request tracker with owner and due date columns"
                - "Check each answer against the model before it is sent"
                - "Close out the tracker and save it with the final model version"
            - name: Board approval of the post-round operating plan
              description: |-
                ## Purpose
                Once the money lands, the fundraising model becomes the operating plan the board will hold you to, and new investors expect to see it approved. Rebasing the model on the actual close date and amount, converting it into an annual budget and taking it to the board turns the pitch into the baseline for every future board pack.

                ## Milestones
                1. The model rebased on the actual close date, amount and closing cash.
                2. An annual budget by month drawn from the rebased model.
                3. The budget presented and approved at a board meeting, with the decision minuted.
                4. The approved budget locked as the baseline for variance reporting.

                ## Notes
                Start from the **Board meeting** template.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A rebased annual budget drawn from the model is approved by the board and minuted within 60 days of closing."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Update the model with the actual close date, amount and closing cash"
                - "Convert the next 12 months into a monthly budget"
                - "Present the budget for approval at the next board meeting"
                - "Rebase the plan and seek board approval at each financial year start @recurring(yearly)"
            - name: Independent model review before launch
              description: |-
                ## Purpose
                Founders who built the model are the last people to spot its broken links and circular logic. Asking an experienced accountant, fractional finance lead or friendly investor to review it for two or three hours before outreach usually finds the errors that would otherwise surface in diligence.

                ## Milestones
                1. A reviewer chosen with startup modelling experience.
                2. A brief sent with the model, the deck and the three questions the reviewer should test.
                3. Every issue raised logged and either resolved or explained.
                4. The reviewed version used as the release version.
              priority: medium
              deadlineOffsetDays: 50
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "An external reviewer's issue list is fully resolved and the reviewed version is the one released to investors."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask two founders who raised recently who reviewed their model"
                - "Agree scope, hours and fee with the reviewer"
                - "Send the model with the deck and three questions to test"
                - "Log and resolve every issue the reviewer raises"
            - name: Pre-revenue model for a first raise
              description: |-
                ## Purpose
                With no revenue history, a first-time founder's model is mostly a cost plan and a set of milestones, and that is what pre-seed and seed investors expect to see. A lean model of hires, costs and runway to the first revenue or product milestone, with revenue assumptions clearly marked as hypotheses, is more credible than a detailed five-year forecast.

                ## Milestones
                1. A cost-led model with hires, operating costs and runway for 18 to 24 months.
                2. The milestone the round must reach written down with its target month.
                3. Early revenue assumptions labelled as hypotheses, each with how it will be tested.
                4. The model kept to a size you can explain in ten minutes.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A pre-revenue model shows 18 to 24 months of costs and runway, the target milestone month and labelled revenue hypotheses."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the hires and costs needed to reach the next milestone"
                - "Calculate monthly burn and runway for 24 months"
                - "Label each revenue assumption as a hypothesis with a test"
                - "Explain the model to a friend in ten minutes and trim what you skipped"
            - name: Hardware and inventory business model
              description: |-
                ## Purpose
                Physical products tie up cash long before revenue arrives: deposits to manufacturers, stock in transit, minimum order quantities and returns. Modelling bill of materials cost, lead times, inventory levels and supplier terms shows investors the working capital the round must fund, which is often larger than the operating burn.

                ## Milestones
                1. Bill of materials cost per unit with volume price breaks.
                2. Production lead times and supplier deposit terms modelled in cash.
                3. Inventory, returns and warranty provisions included.
                4. Peak working capital need shown separately from operating burn.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The model shows unit cost with volume breaks, inventory cash timing and peak working capital as a separate line."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Get current unit cost quotes at three volume levels"
                - "Map supplier deposit and balance payment timing"
                - "Model inventory on hand and in transit by month"
                - "Show peak working capital beside operating burn on the summary"
            - name: Marketplace model with GMV and take rate
              description: |-
                ## Purpose
                Marketplace investors look at gross merchandise value, take rate, liquidity and the cost of acquiring both buyers and sellers, not just net revenue. Modelling both sides of the market, with repeat purchase behaviour and incentives shown as real costs, makes the plan readable to investors who specialise in marketplaces.

                ## Milestones
                1. Buyer and seller acquisition, activation and retention modelled separately.
                2. Gross merchandise value built from orders and order value, with the take rate applied.
                3. Incentives, refunds and payment costs deducted to show net revenue and contribution.
                4. Repeat purchase rates by cohort used for the retention inputs.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The model shows buyer and seller drivers, gross merchandise value, take rate and contribution after incentives."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write separate driver lists for buyers and sellers"
                - "Build gross merchandise value from orders and average order value"
                - "Deduct incentives, refunds and payment costs from gross revenue"
                - "Calculate repeat purchase rates from order history"
            - name: Inheriting a founder-built model
              description: |-
                ## Purpose
                A new finance manager or head of operations is often handed a model the founder built in a weekend two years ago, weeks before the next raise. Auditing it, documenting what each tab does and deciding whether to repair or rebuild is the fastest way to own the numbers you will be asked to defend.

                ## Milestones
                1. Every tab documented with its purpose, inputs and outputs.
                2. Errors, typed overrides and broken links listed with their effect on cash.
                3. A repair or rebuild decision agreed with the founder, with a date.
                4. The founder's explanations of assumptions only they understand captured in handover notes.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A documented audit of the inherited model and a dated repair or rebuild decision are agreed with the founder."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Book an hour with the founder to walk through the model"
                - "Document what each tab does and what feeds it"
                - "List errors and typed overrides with their effect on cash"
                - "Agree a repair or rebuild decision and a deadline with the founder"
            - name: Multi-currency model for cross-border companies
              description: |-
                ## Purpose
                Selling in one currency while paying staff in another, common for Caribbean, African and Latin American startups raising from foreign funds, exposes runway to exchange rate swings that can move it by months. Modelling revenue and costs in their own currencies, converting at a stated rate with a sensitivity, makes that exposure visible to investors.

                ## Milestones
                1. Each revenue and cost line tagged with its currency.
                2. A rates table on the inputs tab with the source and date of each rate.
                3. The reporting currency chosen to match the currency of the round.
                4. A sensitivity showing runway under a 10 and a 20 percent rate move.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every line is tagged by currency and converted from a dated rates table, and runway is shown under two exchange rate moves."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Tag each revenue and cost line with its currency"
                - "Build a rates table with the source and date of each rate"
                - "Set the reporting currency to the currency of the round"
                - "Update exchange rates from your stated source @recurring(monthly:4)"
            - name: Runway extension plan modelled in advance
              description: |-
                ## Purpose
                Raises slip, and the founders who handle it best decided before the process which costs they would cut and when. Modelling a staged cost plan triggered at agreed cash levels shows how many months each step adds, and gives investors confidence the company will not run out of options mid-process.

                ## Milestones
                1. Three stages of cost actions listed with the monthly saving of each.
                2. A cash trigger level set for each stage.
                3. Runway added by each stage calculated in the model.
                4. The plan agreed by the founders and, where a board exists, shared with it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A three-stage cost plan with cash triggers and months of runway added per stage is agreed by the founders."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List cost actions from least to most painful"
                - "Group them into three stages with monthly savings"
                - "Set a cash trigger level for each stage"
                - "Model the months of runway each stage adds"
            - name: Exit value implied by the plan
              description: |-
                ## Purpose
                Venture investors judge whether a company could plausibly return a meaningful part of their fund, so they look at the revenue the plan reaches and the exits comparable companies have achieved. Showing final-year revenue beside a sourced range of comparable multiples lets you discuss scale in their terms without promising any valuation.

                ## Milestones
                1. Final-year revenue and growth rate taken from the base case.
                2. A sourced range of revenue multiples from comparable public companies and acquisitions.
                3. An implied range of enterprise values shown with its sources and date.
                4. A note stating that the range is illustrative and not a forecast of value.

                ## Notes
                Multiples move with markets and differ by sector. Use the range to show the plan reaches a meaningful scale, never as a valuation claim.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A sourced, dated table of comparable multiples and the implied value range from the base case is saved with an illustrative label."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Find revenue multiples for five comparable public companies"
                - "Add three relevant acquisitions with their reported multiples"
                - "Calculate an illustrative value range from base case revenue"
                - "Label the range as illustrative with its sources and date"
            - name: Probabilistic ranges on key drivers
              description: |-
                ## Purpose
                Three scenarios still treat the future as three points, while experienced finance leads model ranges. Giving the most sensitive drivers a distribution and running a few thousand simulations shows the probability that cash stays above the floor, which is a sharper way to size the raise and its buffer.

                ## Milestones
                1. A range and distribution shape set for three to five sensitive drivers.
                2. A simulation run using a spreadsheet add-in or a short script.
                3. The probability of breaching the cash floor before the milestone calculated.
                4. Raise size and buffer reviewed in light of the result.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A simulation of at least 1,000 runs reports the probability of breaching the cash floor before the milestone date."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose three to five drivers from the sensitivity ranking"
                - "Set a low, likely and high value for each driver"
                - "Run at least 1,000 simulations with an add-in or script"
                - "Record the chance of breaching the cash floor"
            - name: Department budget owners feeding the model
              description: |-
                ## Purpose
                As a company passes 30 or 40 people, a model owned by one person in finance stops reflecting what teams actually plan to spend. Giving each department head an input sheet for their hires and costs, with a monthly submission day, spreads ownership and makes the plan the company's rather than the founder's.

                ## Milestones
                1. Department input sheets with hires, costs and assumptions for each team.
                2. Each sheet assigned an owner and a submission day.
                3. Inputs consolidated into the model with a check that totals match.
                4. Department heads reviewing their own variance each month.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every department head submits their input sheet monthly and the consolidated totals match the model."
                cadence: rolling
              tasks:
                - "Create an input sheet template for one department"
                - "Agree a submission day with each department head"
                - "Consolidate department submissions into the model @recurring(monthly:5)"
                - "Share each department's variance with its owner"
---

# Fundraising Financial Model

This area is for founders, and the finance or operations managers working beside them, who need a model that investors can interrogate without it falling apart. It runs from the foundations (a model brief, clean actuals, a clear tab layout, revenue drivers, a hire-by-hire cost plan, runway and use of funds), through the monthly machinery that keeps it current, the skills behind three-statement modelling and investor metrics, decisions on scenarios, raise size and pricing, the dated moments of release, walkthrough and diligence, situations such as a pre-revenue or marketplace business, and finally the specialist work of probabilistic ranges and department-owned planning.

What repeats is a monthly actuals refresh and variance note, pipeline and hiring checks in the middle of the month, a weekly thirteen-week cash roll while a raise is live, and a quarterly reforecast with a downside re-test. The Purchase decision, Feedback themes, Metrics log, Meeting notes and Board meeting templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
