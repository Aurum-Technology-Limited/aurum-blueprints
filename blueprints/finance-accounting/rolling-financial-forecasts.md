---
id: finance-accounting.rolling-financial-forecasts
name: Rolling Financial Forecasts
description: "A twelve to eighteen month rolling forecast built on drivers and named owners, refreshed every month or quarter, with accuracy tracked, scenarios ready and a pack the board and investors can trust."
category: business
version: 1.0.0
tags: [finance-accounting, rolling-financial-forecasts, manager, founder, team, reforecasting, driver-based-planning, scenario-planning]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - operational-checklist
    - meeting-notes
    - metrics-log
    - risk-register
    - board-meeting
  pillars:
    - name: Finance & Accounting
      emoji: "🧾"
      description: "The money side of a business: bookkeeping and the monthly close, cash flow, budgeting and forecasting, billing and collections, payroll, tax, audit and financial controls."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Rolling Financial Forecasts
          description: "Maintaining a rolling twelve to eighteen month forecast that is reforecast each month or quarter as reality moves, for growing companies and finance teams."
          projects:
            - name: Rolling forecast horizon and cadence decision
              description: |-
                ## Purpose
                Most growing companies settle on a twelve or eighteen month window refreshed monthly or quarterly, but the right pair depends on how quickly the business changes and how many finance hours exist each month. Choosing deliberately, and writing down why, stops the forecast drifting into an annual exercise with a rolling label. Decide this first because every other project in the area inherits it.

                ## Milestones
                1. A horizon chosen, with the reason it fits your planning and funding needs written in two sentences.
                2. A reforecast cadence chosen, monthly or quarterly, matched to the finance time realistically available.
                3. The level of detail agreed for near months versus far months, such as monthly to month six and quarterly beyond.
                4. The decision signed off by the founder or finance lead and shared with every forecast owner.

                ## Notes
                A common default is eighteen months refreshed monthly for fast-changing companies and twelve months refreshed quarterly for steadier ones. Whatever you choose, the window should always reach past the next financial year end by the time the annual target is set.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on horizon, cadence and level of detail, signed off by the finance lead and sent to all forecast owners."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List how far ahead your hiring, funding and contract decisions currently reach"
                - "Estimate the finance hours available each month for reforecasting"
                - "Write the chosen horizon, cadence and detail level on one page"
                - "Revisit horizon and cadence before the new financial year begins @recurring(yearly)"
            - name: Decisions the forecast must support
              description: |-
                ## Purpose
                Forecasts that try to answer every question end up trusted for none of them. Listing the five to eight real decisions the rolling forecast feeds, such as when to hire, how much runway remains, whether a covenant is at risk or when to raise, tells you which lines need care and which can stay rough.

                ## Milestones
                1. A list of the decisions the forecast feeds, each with the person who makes it.
                2. For each decision, the forecast output it needs and how far ahead it needs it.
                3. The lines that drive those outputs marked as critical in the forecast structure.
                4. The list agreed with leadership and kept at the front of the forecast file.

                ## Notes
                If a decision does not change when the forecast changes, it does not belong on the list.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page list of decisions, owners and required forecast outputs, agreed with leadership and stored in the forecast file."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask each leadership team member which upcoming decisions depend on future numbers"
                - "Write each decision with its owner and the forecast output it needs"
                - "Mark the forecast lines that drive those outputs as critical"
                - "Agree the list at the next leadership meeting"
            - name: Twenty-four month actuals baseline
              description: |-
                ## Purpose
                Before forecasting forward you need a clean picture of where the business has been, and most ledgers hold one-off items, miscoded costs and reclassifications that distort trends. Two years of monthly actuals, cleaned and mapped to forecast lines, gives you seasonality, run rates and growth patterns to build from instead of guesses.

                ## Milestones
                1. Twenty-four months of monthly profit and loss actuals exported from the accounting system.
                2. One-off items and known miscodings flagged and adjusted in a separate column, with the original kept.
                3. Every month mapped to the forecast line structure and reconciled to the reported totals.
                4. A short note of the adjustments made, so anyone can repeat the baseline later.

                ## Notes
                Never overwrite the ledger figures. Keep reported, adjustment and normalised columns side by side so the baseline still ties to the management accounts.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A normalised twenty-four month actuals table that reconciles to reported totals, with every adjustment listed and explained."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Export twenty-four months of monthly profit and loss from the accounting system"
                - "Flag one-off items such as legal settlements, grants and asset sales"
                - "Map each ledger line to its forecast line and check the totals agree"
                - "Write a short note of every adjustment and why it was made"
            - name: Forecast lines mapped to the chart of accounts
              description: |-
                ## Purpose
                A rolling forecast held at ledger account level means hundreds of rows to update every month and owners who lose interest by row forty. Grouping accounts into thirty to sixty forecast lines, with a fixed mapping table, keeps the monthly update quick while still tying back to the books. Small accounts get rolled up; the ones that move decisions stay visible.

                ## Milestones
                1. A mapping table linking every ledger account to exactly one forecast line.
                2. Forecast lines kept between thirty and sixty, with any line under a materiality threshold rolled up.
                3. Each forecast line labelled as driver-based, committed or trend-based.
                4. A check that mapped actuals for the last closed month equal the ledger total.

                ## Notes
                Add new ledger accounts to the mapping the month they appear, or the forecast silently stops tying to actuals.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A complete account-to-line mapping with no unmapped accounts and a reconciled total for the last closed month."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Export the full list of active ledger accounts"
                - "Set a materiality threshold below which lines are rolled up"
                - "Group the accounts into forecast lines and record the mapping"
                - "Check last month's mapped actuals against the ledger total"
            - name: Driver map for every major forecast line
              description: |-
                ## Purpose
                Revenue and cost lines move for reasons: customers, price, units, headcount, square metres, transaction volumes. Writing down the driver behind each major line, and the formula that turns the driver into money, is what lets the forecast respond to a changed assumption rather than needing a manual edit on every row.

                ## Milestones
                1. Each forecast line covering at least 80 percent of revenue and costs given a named driver.
                2. A formula written for each, such as active customers times average monthly price.
                3. A source identified for each driver's actual value, so it can be checked each month.
                4. Lines with no sensible driver marked as committed or trend-based instead.

                ## Notes
                Fewer, well-understood drivers beat a model with one hundred inputs nobody can explain. Aim for no more than fifteen key drivers at first.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A driver map covering at least 80 percent of forecast revenue and costs, each with a formula and a named data source."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Rank forecast lines by size and pick those making up 80 percent of the total"
                - "Write the driver and formula for each of those lines"
                - "Name where the actual value of each driver can be found every month"
                - "Ask the agent to challenge the driver list for gaps and double counting"
            - name: Named owner for every forecast input
              description: |-
                ## Purpose
                Finance cannot know the sales pipeline, the hiring plan or the marketing calendar better than the people running them. Giving every input a named owner outside finance, with finance owning the model and the challenge, turns the forecast from finance's guess into the business's own view.

                ## Milestones
                1. An owner table listing each driver and committed cost with its responsible person.
                2. Each owner briefed on what they submit, in what format and by which working day.
                3. A deputy named for every owner, so holidays do not stall the cycle.
                4. The owner table stored with the forecast and updated when roles change.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every driver and committed cost line has a named owner and deputy, and each owner has confirmed their submission date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every driver and committed cost line that needs a monthly input"
                - "Propose an owner and a deputy for each line"
                - "Hold a twenty-minute briefing with each owner on what they submit"
                - "Store the confirmed owner table at the front of the forecast file"
            - name: Forecast assumptions register
              description: |-
                ## Purpose
                Every number in a forecast rests on an assumption, and six months later nobody remembers why churn was set at two percent or why rent rises in March. A register that records each assumption, its source, owner and the date it was last checked makes the forecast explainable to a board, an auditor or your successor.

                ## Milestones
                1. A register with columns for assumption, value, source, owner, date checked and confidence.
                2. Every key driver and macro input recorded in the register.
                3. Each assumption linked to the forecast cell or input sheet that uses it.
                4. Low-confidence assumptions flagged for a sensitivity check.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An assumptions register covering every key driver, each with a source, owner, check date and confidence rating."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Create the register with assumption, value, source, owner, date and confidence columns"
                - "Enter every key driver from the driver map"
                - "Add macro inputs such as pay inflation, interest rates and exchange rates"
                - "Flag the five assumptions you are least sure of"
            - name: Spreadsheet or planning software for the forecast
              description: |-
                ## Purpose
                Spreadsheets are flexible and free, but by the time a forecast has ten owners, three scenarios and monthly versions they become fragile and slow. Comparing staying in a spreadsheet against two or three planning tools, on cost, ledger integration, version control and who will maintain it, gives a decision you will not revisit every quarter.

                ## Milestones
                1. Requirements written: number of users, scenarios, ledger connection, versioning and budget.
                2. The current spreadsheet scored against those requirements as the baseline option.
                3. Two or three planning tools trialled or demonstrated against the same scoring.
                4. A choice recorded with cost, owner and a date to revisit it.

                ## Notes
                Start from the **Purchase decision** template. A tool will not fix an unclear driver map, so finish that first.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scored comparison of the spreadsheet and at least two planning tools, with a recorded decision and annual cost."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write the requirements list with users, scenarios, integrations and budget"
                - "Score the current spreadsheet against the requirements"
                - "Book demonstrations of two planning tools using your own forecast lines"
                - "Record the decision, cost and revisit date"
            - name: Forecast version naming and locking
              description: |-
                ## Purpose
                Three files called final, a copy someone emailed on Tuesday and a board pack built from the wrong one: version confusion is the most common way a rolling forecast loses credibility. A naming convention, a locked published version each cycle and a single working copy make it obvious which numbers are official.

                ## Milestones
                1. A naming convention such as the forecast year, cycle number and status.
                2. One shared location for the working copy and a separate folder for locked versions.
                3. Each published version saved read-only on publication day.
                4. A version log listing the date, cycle and headline full-year figures of each release.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written naming convention in use, with every published version stored read-only and listed in a version log."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a file naming convention and share it with forecast owners"
                - "Create a locked folder for published versions"
                - "Start a version log with date, cycle number and headline figures"
                - "Save the published forecast as read-only and log it @recurring(monthly:10)"
            - name: Monthly reforecast cycle calendar
              description: |-
                ## Purpose
                Without fixed dates the reforecast slides into the third week of the month and the numbers are stale by the time anyone reads them. A working-day calendar that links to the month-end close, with dates for actuals, owner inputs, review and publication, lets everyone plan around it and keeps the cycle to about eight working days.

                ## Milestones
                1. A calendar with working-day dates for actuals lock, inputs due, review meeting and publication.
                2. The dates aligned with the month-end close so the forecast starts from closed numbers.
                3. Recurring invitations sent to every owner and reviewer.
                4. Three consecutive cycles published on the planned working day.

                ## Notes
                Start from the **Operational checklist** template. Publishing a day late with good numbers beats skipping the review to hit the date.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive reforecast cycles published on the planned working day, each following the written calendar."
                cadence: rolling
              tasks:
                - "Set working-day dates for actuals, inputs, review and publication"
                - "Check the dates against the close timetable with whoever runs the close"
                - "Send recurring calendar invitations to owners and reviewers"
                - "Send next month's cycle dates and any holiday changes to all owners @recurring(monthly:26)"
            - name: Actuals roll-in and horizon extension
              description: |-
                ## Purpose
                Each month the oldest forecast month becomes an actual and a new month appears at the far end; this is what makes the forecast rolling rather than a budget with updates. Doing the roll-in the same way every time, and checking it ties to the closed ledger, prevents the quiet errors that creep in when a month is pasted by hand.

                ## Milestones
                1. A written roll-in routine: replace the closed month, extend the horizon, check the totals.
                2. The new far month populated from drivers rather than copied from the month before.
                3. Year-to-date actuals in the forecast tied to the management accounts every month.
                4. Six consecutive roll-ins completed without a reconciling difference.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive months in which actuals were rolled in and tied to the ledger with no unexplained difference."
                cadence: rolling
              tasks:
                - "Write the roll-in steps as a short numbered routine in the forecast file"
                - "Roll in the closed month, add the new far month and tie to the ledger @recurring(monthly:5)"
                - "Investigate any difference between forecast actuals and the management accounts"
            - name: Owner input requests and chasers
              description: |-
                ## Purpose
                Department heads send better inputs when they get a short, pre-filled request with last month's view already in it, and a clear date. A standard request each cycle, followed by one polite chaser, cuts the time finance spends hunting for numbers and keeps late inputs from holding up the whole forecast.

                ## Milestones
                1. A request template showing each owner's lines, last forecast, actuals and the change asked for.
                2. Requests sent on the same working day each cycle.
                3. A rule for late inputs: finance rolls forward the last view and flags it in the pack.
                4. On-time submission rate recorded each cycle, reaching 90 percent.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Input requests sent every cycle and at least 90 percent of owners submitting on time for three consecutive months."
                cadence: rolling
              tasks:
                - "Build a request sheet pre-filled with each owner's last forecast and actuals"
                - "Send the pre-filled input requests to every forecast owner @recurring(monthly:3)"
                - "Chase any owner whose input has not arrived @recurring(monthly:6)"
                - "Record who submitted on time in the cycle log"
            - name: Monthly forecast review meeting
              description: |-
                ## Purpose
                Reviewing the forecast as a leadership group, for forty-five minutes, is what turns it into a management tool rather than a finance file. A fixed agenda covering the full-year outcome, the biggest movements, risks and the decisions needed keeps the meeting short and ends with named actions.

                ## Milestones
                1. A standing monthly slot with the leadership team after inputs close.
                2. A fixed agenda: full-year view, top five movements, risks and opportunities, decisions.
                3. Actions recorded with owners and checked at the next meeting.
                4. Six consecutive meetings held with actions logged.

                ## Notes
                Start from the **Meeting notes** template. Send the pack at least one working day before, or the meeting turns into reading time.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly review meetings held, each with written actions and owners recorded in meeting notes."
                cadence: rolling
              tasks:
                - "Book a standing forty-five minute review slot with the leadership team"
                - "Write the fixed four-part agenda and share it"
                - "Hold the review and record decisions and actions in meeting notes @recurring(monthly:8)"
                - "Open each meeting by checking last month's actions"
            - name: Forecast accuracy log
              description: |-
                ## Purpose
                Nobody believes a forecast that is never checked against what happened. Logging each month how far the forecast made one month and three months earlier was from the actual, line by line for the big items, shows where the forecast is reliable, where it is consistently optimistic and whether it is getting better.

                ## Milestones
                1. A log with columns for month, line, forecast at one month out, forecast at three months out and actual.
                2. Revenue, gross margin, total costs and cash recorded every month.
                3. Percentage error and direction worked out for each line.
                4. Six months of entries with the most error-prone line identified.

                ## Notes
                Start from the **Metrics log** template. Keep the old locked versions, or there is nothing to measure against.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive months of accuracy entries at one and three months out, with the largest recurring error identified."
                cadence: rolling
              tasks:
                - "Create the accuracy log with forecast, actual and error columns"
                - "Pull the one and three month old forecasts for the closed month"
                - "Log forecast against actual for the headline lines @recurring(monthly:12)"
                - "Name the line with the largest repeated error each quarter"
            - name: Quarterly driver rebuild
              description: |-
                ## Purpose
                Monthly cycles adjust numbers at the edges, and over a few quarters the drivers quietly stop matching how the business really works. Once a quarter, rebuilding the key drivers from recent actuals rather than tweaking last month's view resets the forecast and catches structural changes such as a new pricing model or a shift in customer mix.

                ## Milestones
                1. Each key driver recalculated from the last six months of actuals.
                2. Drivers that have shifted by more than an agreed threshold flagged and explained.
                3. Formulas updated where the business model has changed.
                4. A one-page summary of what the rebuild changed in the full-year view.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly driver rebuilds completed in a year, each with a written summary of changed drivers and their effect."
                cadence: cyclic
              tasks:
                - "Agree the threshold at which a driver change needs explaining"
                - "Recalculate every key driver from the last six months of actuals @recurring(quarterly)"
                - "Update formulas where pricing, mix or delivery has changed"
                - "Write a one-page summary of the rebuild's effect on the full year"
            - name: External assumption refresh for rates, inflation and exchange
              description: |-
                ## Purpose
                Interest rates, pay inflation, supplier price indices and exchange rates move every month, and a forecast still using January's figures in August can be badly wrong on borrowing costs or imported goods. Checking a short list of external inputs against named public sources at the start of each cycle keeps these lines current with minimal effort.

                ## Milestones
                1. A list of external inputs used in the forecast, each with one named public source.
                2. Values refreshed and dated at the start of every cycle.
                3. Any change beyond a set threshold noted in the cycle commentary.
                4. The assumptions register updated with the new values and dates.

                ## Notes
                Use published central bank, statistics office or lender data as sources. Forecast inputs are planning assumptions, not predictions of markets.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "External inputs refreshed and dated at the start of six consecutive cycles, with the assumptions register matching."
                cadence: rolling
              tasks:
                - "List every external rate or index the forecast uses"
                - "Name one public source for each input"
                - "Refresh external rates and indices and date them in the register @recurring(monthly:2)"
                - "Note any large external change in the cycle commentary"
            - name: Risks and opportunities alongside the forecast
              description: |-
                ## Purpose
                Some events are too uncertain to put in the base numbers but too large to ignore: a big contract that may slip, a price rise from a key supplier, a grant that might arrive. Holding them in a separate list, each with an amount, timing and likelihood, keeps the base forecast honest and shows leadership the range of outcomes.

                ## Milestones
                1. A register listing each risk and opportunity with amount, month, likelihood and owner.
                2. A rule for when an item moves into the base forecast.
                3. The net total of risks and opportunities shown beside the full-year view in the pack.
                4. Items reviewed and closed or carried forward every cycle.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A risk and opportunity register updated every cycle, with its net total shown next to the full-year forecast in each pack."
                cadence: rolling
              tasks:
                - "Create the risk and opportunity register from the template"
                - "Write the rule for moving an item into the base forecast"
                - "Update amounts, timing and likelihood with each owner @recurring(monthly:7)"
                - "Show the net risk and opportunity total beside the full-year view"
            - name: Forecast change bridge each cycle
              description: |-
                ## Purpose
                When the full-year outcome moves by a large amount between cycles, the first question is always why. A bridge from last cycle's forecast to this one, split into actuals versus forecast, volume, price, timing and new items, answers it in one chart and stops the review meeting from becoming an interrogation.

                ## Milestones
                1. A standard set of bridge categories agreed and used every cycle.
                2. A bridge from last published full-year figure to the new one, fully reconciled.
                3. One sentence of explanation for every bar above a materiality threshold.
                4. The bridge included as the first page of every forecast pack.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every published cycle includes a reconciled bridge from the prior forecast, with each material movement explained in a sentence."
                cadence: rolling
              tasks:
                - "Agree the bridge categories with the finance lead"
                - "Build the bridge from last cycle to this cycle and reconcile it @recurring(monthly:9)"
                - "Write one sentence for each movement above the materiality threshold"
            - name: Weekly leading indicator note
              description: |-
                ## Purpose
                Bookings, qualified pipeline, website trials, order intake and new hires accepted all move weeks before they show in the ledger. A ten-minute weekly note on four or five leading indicators tells you whether the next reforecast will move up or down, so surprises are spotted mid-month instead of at the review.

                ## Milestones
                1. Four or five leading indicators chosen that each feed a forecast driver.
                2. A weekly source and owner identified for each indicator.
                3. A two-line weekly note recording the indicators against the forecast's assumption.
                4. Eight weeks of notes completed, with any early warning raised before the next cycle.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly notes comparing leading indicators with forecast assumptions, with any warning raised before the cycle."
                cadence: rolling
              tasks:
                - "Choose four or five leading indicators linked to forecast drivers"
                - "Find a weekly source for each indicator"
                - "Write a two-line note comparing indicators with the forecast assumption @recurring(weekly:mon)"
            - name: Driver-based forecasting method
              description: |-
                ## Purpose
                Driver-based forecasting means modelling the quantities that cause revenue and cost, then letting the money follow, rather than adding a growth percentage to last year. Learning the method on two or three real lines from your own business, before applying it everywhere, shows what good drivers look like and where the method breaks down.

                ## Milestones
                1. The difference between drivers, ratios and trend extrapolation understood with your own examples.
                2. One revenue line and two cost lines rebuilt on drivers in a practice sheet.
                3. The driver version compared with the old trend version against the last three actual months.
                4. A short note on which lines suit drivers and which do not.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three lines rebuilt on drivers and compared with trend versions against three months of actuals, with a written conclusion."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read one practitioner guide or book chapter on driver-based planning"
                - "Pick one revenue line and two cost lines from your own forecast"
                - "Rebuild the three lines on drivers in a practice sheet"
                - "Compare driver and trend versions with the last three actual months"
            - name: Forecasting recurring revenue from customer cohorts
              description: |-
                ## Purpose
                Subscription and contract businesses cannot forecast revenue as a single growth rate, because new sales, churn, expansion and price changes each behave differently. Learning to forecast from opening recurring revenue, adding new business and expansion and taking off contraction and churn, gives a revenue line that explains itself and reacts correctly when one piece moves.

                ## Milestones
                1. A recurring revenue walk built for the last twelve actual months.
                2. Churn and expansion rates worked out by cohort or customer segment.
                3. The forecast revenue line rebuilt as opening, plus new, plus expansion, less churn.
                4. The walk reconciled to recognised revenue in the accounts.

                ## Notes
                Recurring revenue is a management measure and differs from recognised revenue in the accounts. Keep the reconciliation between the two in the forecast file.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A recurring revenue walk for twelve actual months and the forecast horizon, reconciled to recognised revenue."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Export monthly recurring revenue by customer for the last twelve months"
                - "Split each month into new, expansion, contraction and churn"
                - "Work out churn and expansion rates by segment"
                - "Rebuild the forecast revenue line as a recurring revenue walk"
            - name: Seasonality and phasing from history
              description: |-
                ## Purpose
                Spreading an annual number evenly across twelve months makes every month look wrong, because most businesses have peaks, troughs, holiday months and quarter-end spikes. Working out seasonal indices from two years of history, and applying them to the far months of the forecast, makes month-by-month comparisons meaningful.

                ## Milestones
                1. Monthly seasonal indices worked out for revenue and the largest cost lines.
                2. One-off events removed from the history before the indices are calculated.
                3. The indices applied to forecast months beyond the near detailed period.
                4. A check that indexed months still add up to the full-year figure.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Seasonal indices calculated from cleaned history and applied to the far forecast months, with annual totals unchanged."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Take two years of cleaned monthly revenue from the actuals baseline"
                - "Calculate each month's share of the annual total"
                - "Average the two years into a seasonal index"
                - "Apply the index to the far months and check the annual total"
            - name: Forecast error and bias measures
              description: |-
                ## Purpose
                Accuracy is not one number: a forecast can be close on average but wildly wrong month to month, or consistently optimistic by a small amount that adds up. Learning a few standard measures, such as mean absolute percentage error and bias, lets you describe forecast quality the way experienced finance teams do and spot which kind of error you have.

                ## Milestones
                1. Mean absolute percentage error, bias and the difference between them understood with worked examples.
                2. Both measures calculated for revenue and total costs from the accuracy log.
                3. A judgement written on whether each line shows random error or bias.
                4. An agreed tolerance for each measure recorded for future reviews.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Error and bias calculated for revenue and costs from at least six months of logged data, with tolerances agreed and written down."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read a short guide to forecast error and bias measures"
                - "Calculate both measures for revenue from the accuracy log"
                - "Repeat the calculation for total costs"
                - "Agree a tolerance for each measure with the finance lead"
            - name: Writing forecast commentary readers act on
              description: |-
                ## Purpose
                Numbers alone rarely change a decision; the two paragraphs beside them do. Learning to write commentary that leads with the full-year outcome, explains the two or three movements that matter and ends with what leadership should decide makes the forecast pack something people read rather than file.

                ## Milestones
                1. A commentary structure: headline, main movements, risks, decisions needed.
                2. Three past commentaries rewritten to the new structure as practice.
                3. A limit of one page agreed for monthly commentary.
                4. Feedback collected from two readers on whether the new style helps them decide.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written commentary structure in use for two cycles, with feedback from at least two leadership readers recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a four-part commentary structure on one page"
                - "Rewrite last cycle's commentary using the new structure"
                - "Ask the agent to shorten the draft to under one page without losing a number"
                - "Ask two leadership readers whether the new version helps them decide"
            - name: Working capital days in the rolling forecast
              description: |-
                ## Purpose
                Profit and cash part company in any business that gives credit, holds stock or pays suppliers on terms. Learning to forecast debtor days, creditor days and stock days as simple drivers, and to see their effect on cash, lets a profit forecast show the funding it needs without building a full detailed model.

                ## Milestones
                1. Debtor, creditor and stock days calculated for the last twelve months.
                2. Each set as a forecast driver with a named owner.
                3. The effect of a ten-day change in each shown on the forecast cash balance.
                4. The working capital assumptions added to the assumptions register.

                ## Notes
                This gives a summary cash view inside the rolling forecast. A weekly treasury cash forecast is a different tool for a different job.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Debtor, creditor and stock days forecast as drivers, with the cash effect of a ten-day change in each documented."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Calculate debtor, creditor and stock days for each of the last twelve months"
                - "Set each as a forecast driver with an owner"
                - "Show the cash effect of a ten-day change in each driver"
                - "Record the working capital assumptions in the register"
            - name: Probability-weighted pipeline in the revenue forecast
              description: |-
                ## Purpose
                Sales pipelines are full of deals that will close later, smaller or not at all, and pasting the sales team's total straight into the forecast builds in optimism. Learning to weight pipeline by stage using your own historical win rates and slippage gives a new business line that finance and sales can both defend.

                ## Milestones
                1. Historical win rates and average slippage by pipeline stage worked out from twelve months of closed deals.
                2. Current pipeline weighted by stage and pushed out by typical slippage.
                3. The weighted figure compared with the sales team's own call.
                4. A method note agreed with the sales lead.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Pipeline weighted by stage from twelve months of history, compared with the sales call and agreed with the sales lead in writing."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export twelve months of closed won and lost deals with their stage history"
                - "Calculate win rate and average slippage for each stage"
                - "Weight the current pipeline and compare it with the sales call"
                - "Agree the weighting method with the sales lead"
            - name: Moving from a static budget to rolling forecasts
              description: |-
                ## Purpose
                Many finance teams run a rolling forecast on top of a full annual budget and end up doing both jobs badly. Planning the transition, deciding what the budget is still for, what the forecast replaces and how performance will be judged, avoids a year of duplicate work and confused targets.

                ## Milestones
                1. A decision on whether the annual budget stays as a target, becomes a lighter target or is replaced.
                2. A transition plan covering two to three cycles run in parallel before the switch.
                3. Budget holders briefed on what changes for them and what does not.
                4. The first year-end after the switch reviewed for what worked and what to keep.

                ## Notes
                Most companies keep some form of annual target for accountability. The change is that the forecast, not the budget, drives in-year decisions.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written transition plan with a recorded decision on the budget's role, two parallel cycles run and budget holders briefed."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Write what the current budget is used for, decision by decision"
                - "Decide with leadership which of those uses the rolling forecast takes over"
                - "Run two reforecast cycles in parallel with the existing budget process"
                - "Brief budget holders on what changes for them"
            - name: Keeping the target separate from the forecast
              description: |-
                ## Purpose
                Once a forecast is used to judge performance, owners start forecasting low to look good later or high to protect their budget, and the forecast stops being anyone's best estimate. Agreeing in writing that the target is the ambition and the forecast is the honest expectation, shown side by side, protects the forecast's usefulness.

                ## Milestones
                1. A written principle that the forecast is the best estimate and is never used as a performance target.
                2. Target and forecast shown as separate columns in every pack.
                3. The gap between them reported with the actions planned to close it.
                4. The principle agreed by the leadership team and explained to every owner.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A leadership-agreed principle separating target from forecast, with both shown as separate columns in every pack."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft a short principle separating target from forecast"
                - "Agree the principle at a leadership meeting"
                - "Add separate target and forecast columns to the pack"
                - "Explain the principle to every forecast owner"
            - name: Committed cost schedule for the forecast
              description: |-
                ## Purpose
                Rent, software subscriptions, insurance, loan repayments and signed supplier contracts are known months in advance, yet they are often forecast as a trend and missed when they step up. A schedule of committed costs with start dates, end dates, renewal dates and price increases makes a large share of the cost base exact.

                ## Milestones
                1. Every contract above a set value listed with amount, frequency, start, end and renewal date.
                2. Known price increases and notice periods recorded.
                3. The schedule feeding the forecast directly for those lines.
                4. New contracts added to the schedule as they are signed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A committed cost schedule covering every contract above the threshold, linked to the forecast lines it feeds."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Set the contract value above which costs are scheduled"
                - "List every qualifying contract with dates, amounts and renewal terms"
                - "Link the schedule to the forecast lines it replaces"
                - "Ask procurement or the office manager to send new contracts to finance"
            - name: Automated actuals feed from the ledger
              description: |-
                ## Purpose
                Copying actuals from the accounting system into the forecast by hand takes hours and is where most tie-out errors start. Setting up a repeatable export or connection that pulls closed-month actuals already mapped to forecast lines cuts the roll-in to minutes and frees time for analysis.

                ## Milestones
                1. A saved report or connection that exports actuals by forecast line.
                2. The mapping table applied automatically during the import.
                3. A check row that flags any difference from the ledger total.
                4. Three months imported through the feed with no manual edits.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three consecutive months of actuals imported through a saved feed, mapped to forecast lines with zero manual edits."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Save a report in the accounting system that exports monthly actuals by account"
                - "Apply the mapping table to the export in the forecast file"
                - "Add a check row comparing the import with the ledger total"
                - "Run the feed for the last closed month and fix any gaps"
            - name: Base, downside and upside scenario set
              description: |-
                ## Purpose
                One number for the next eighteen months invites false confidence. Building a downside and an upside case alongside the base, each changing a small set of named drivers, lets leadership see how much room there is and prepare responses before they are needed.

                ## Milestones
                1. Three to five drivers chosen that change between scenarios.
                2. Downside and upside values set for each, with the reasoning written in the register.
                3. All three scenarios running from the same model, switched by one selector.
                4. Full-year profit, cash low point and runway shown for each scenario in the pack.

                ## Notes
                Keep scenarios plausible. A downside nobody believes will be ignored in the meeting.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three scenarios running from one model, with profit, cash low point and runway shown for each in the forecast pack."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose three to five drivers that change between scenarios"
                - "Set downside and upside values and record the reasoning"
                - "Add a scenario selector to the model"
                - "Refresh scenario values against the latest base forecast @recurring(quarterly)"
            - name: Forecast trigger points for action
              description: |-
                ## Purpose
                A forecast that shows trouble coming is only useful if someone acts on it. Agreeing in advance the thresholds that trigger a response, such as runway below twelve months pausing new hires or a covenant headroom under ten percent prompting a lender conversation, takes the emotion out of the decision when the moment arrives.

                ## Milestones
                1. Three to six trigger measures chosen, each linked to a forecast output.
                2. A threshold and a pre-agreed response written for each.
                3. The triggers approved by the leadership team or board.
                4. Every forecast pack showing each measure against its trigger.

                ## Notes
                Agree covenant-related thresholds with whoever manages the lending relationship and your advisers; the forecast flags the risk, it does not interpret the loan agreement.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Approved trigger thresholds with pre-agreed responses, shown against forecast values in every pack."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the forecast outputs that would force a management response"
                - "Draft a threshold and response for each output"
                - "Get the triggers approved by leadership"
                - "Check each forecast measure against its trigger before publication @recurring(monthly:11)"
            - name: Hiring plan link into the forecast
              description: |-
                ## Purpose
                People costs are usually the largest line in a growing company, and the hiring plan held by the people team is often a different file from the forecast. Linking the two, so each planned role flows into the forecast with its start month and fully loaded cost, ends the monthly argument about which headcount number is right.

                ## Milestones
                1. One agreed list of planned roles with start month, team and status.
                2. Each role flowing into the forecast at its fully loaded monthly cost.
                3. Approved, in-recruitment and unapproved roles shown separately.
                4. A monthly check that forecast headcount matches the people team's list.

                ## Notes
                The detailed cost of each role belongs in your headcount cost model; this project only connects that plan to the rolling forecast.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Forecast headcount matches the agreed hiring list for three consecutive cycles, with roles split by approval status."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Agree one hiring list with the people team, including status for each role"
                - "Link each role's start month and loaded cost into the forecast"
                - "Show approved, in-recruitment and unapproved roles separately"
                - "Compare forecast headcount with the people team's list each cycle"
            - name: First full rolling forecast publication
              description: |-
                ## Purpose
                The first published version sets expectations for every cycle after it, so it is worth treating as a dated event with a proper review rather than a quiet file share. Publishing a complete forecast with bridge, commentary, scenarios and risks, and walking leadership through it, establishes the format and the cycle in one go.

                ## Milestones
                1. A complete forecast covering the full horizon, reconciled to closed actuals.
                2. A pack with headline view, commentary, risks and opportunities and scenarios.
                3. A walkthrough held with leadership, with questions recorded.
                4. The version locked and logged as cycle one.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A first full rolling forecast published by the deadline, walked through with leadership and locked as cycle one."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Set the publication date and book the leadership walkthrough"
                - "Complete the forecast for the full horizon and reconcile to actuals"
                - "Assemble the pack with commentary, risks and scenarios"
                - "Lock the published version and log it as cycle one"
            - name: Quarterly board forecast pack
              description: |-
                ## Purpose
                Boards want the latest full-year view, how it has moved since the last meeting, the downside case and what management proposes to do, in about four pages. A standard quarterly forecast section, prepared from the most recent cycle, gives directors consistent information and reduces the questions asked the night before the meeting.

                ## Milestones
                1. A standard four-page board forecast section agreed with the chair or lead investor.
                2. The section built from the latest locked cycle, not a separate model.
                3. The pack sent to directors on the agreed number of days before the meeting.
                4. Board questions and decisions on the forecast recorded and followed up.

                ## Notes
                Start from the **Board meeting** template.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Four consecutive board packs with a standard forecast section, each sent on time and with board questions recorded."
                cadence: cyclic
              tasks:
                - "Agree the four-page forecast section layout with the chair"
                - "Build the board forecast section from the latest locked cycle @recurring(quarterly)"
                - "Send the pack to directors on the agreed day before the meeting"
                - "Record board questions and decisions on the forecast"
            - name: Investor update forecast section
              description: |-
                ## Purpose
                Investors between board meetings want to know whether the plan they backed is still on track, without a full pack. A short, consistent forecast section in the quarterly investor update, showing revenue, burn and runway against the last update, builds trust and makes the next fundraising conversation easier.

                ## Milestones
                1. A fixed set of three to five forecast measures chosen for investor updates.
                2. Each update showing the current forecast against the previous update's view.
                3. Two sentences explaining any material change.
                4. Four quarterly updates sent with the same structure.

                ## Notes
                Agree with your advisers what forward-looking information is appropriate to share, and label forecasts clearly as estimates.
              priority: low
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Four consecutive quarterly investor updates with the same forecast measures compared against the prior update."
                cadence: cyclic
              tasks:
                - "Choose three to five forecast measures for investor updates"
                - "Draft the forecast section comparing this quarter's view with the last @recurring(quarterly)"
                - "Write two sentences explaining any material change"
            - name: Next year's target set from the rolling forecast
              description: |-
                ## Purpose
                By the ninth month of the financial year, a rolling forecast already holds a credible view of next year, which makes a separate bottom-up budget build largely redundant. Using that view as the starting point for next year's target, then adding agreed stretch, saves weeks and keeps the target grounded in current evidence.

                ## Milestones
                1. The forecast's view of next year extracted as the starting point for the target.
                2. Stretch and investment choices agreed by leadership and added as separate lines.
                3. The resulting target approved by the board or owners.
                4. Target and forecast loaded side by side for the new year.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "Next year's target approved, built from the rolling forecast view plus separately listed stretch, and loaded beside the forecast."
                cadence: cyclic
              tasks:
                - "Extract next year's figures from the latest rolling forecast @recurring(yearly)"
                - "List proposed stretch and investment items separately"
                - "Present the target to the board or owners for approval"
                - "Load the approved target beside the forecast for the new year"
            - name: Forecast pack for a lender or funding round
              description: |-
                ## Purpose
                Lenders and investors ask for an eighteen to thirty-six month forecast with clear assumptions, scenarios and a cash view, and they test whether it matches past performance. Preparing that pack from the live rolling forecast, rather than a separate optimistic model, keeps the story consistent and survives due diligence questions.

                ## Milestones
                1. The rolling forecast extended to the period the lender or investor asks for.
                2. Assumptions, scenarios and the accuracy record summarised in a short appendix.
                3. The pack reviewed by your accountant or corporate finance adviser.
                4. Questions from the lender or investor logged with answers and any model changes.

                ## Notes
                Ask your advisers what disclaimers the pack should carry. Do not present the forecast as a promise.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A funding forecast pack derived from the rolling forecast, adviser-reviewed and sent, with every follow-up question logged."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Confirm the forecast period and format the lender or investor wants"
                - "Extend the rolling forecast to that period with clear assumptions"
                - "Summarise assumptions, scenarios and the accuracy record in an appendix"
                - "Book a review of the pack with your accountant or adviser"
            - name: Emergency reforecast after a major shock
              description: |-
                ## Purpose
                Losing the largest customer, a sudden cost jump or a delayed funding round can make the published forecast wrong overnight, and waiting for the next cycle wastes weeks. A short playbook for an out-of-cycle reforecast, focused on cash, runway and the trigger points, means leadership gets a credible new view within days.

                ## Milestones
                1. A written list of events that justify an out-of-cycle reforecast.
                2. A slimmed process covering the top ten lines, cash and runway only.
                3. A target of a new view to leadership within five working days.
                4. One rehearsal using a past or hypothetical shock.
              priority: medium
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A written emergency reforecast playbook, rehearsed once, that produces a new cash and runway view within five working days."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the events that would justify an out-of-cycle reforecast"
                - "Write the slimmed process for the top ten lines, cash and runway"
                - "Rehearse the playbook on a past shock such as a lost customer"
                - "Store the playbook beside the forecast calendar"
            - name: Founder's first rolling forecast without a finance team
              description: |-
                ## Purpose
                Founders often carry the forecast in their heads until an investor asks for it in a spreadsheet. A deliberately simple first version, twenty lines, a handful of drivers and a monthly hour to update it, gives you a forward view you trust without hiring a finance lead first.

                ## Milestones
                1. A twenty-line forecast covering revenue, gross margin, people, other costs and cash.
                2. Five or fewer drivers you can update from tools you already use.
                3. A monthly one-hour update slot in the calendar.
                4. Three monthly updates completed and the runway figure checked against the bank.

                ## Notes
                Ask your accountant or bookkeeper to check the first version against your accounts. Keep it small enough that you will still update it in a busy month.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A twenty-line founder forecast updated for three consecutive months, with runway checked against the bank balance each time."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Sketch the twenty lines your forecast needs on one page"
                - "Pick five drivers you can update from tools you already use"
                - "Book a recurring one-hour monthly update slot"
                - "Ask your accountant to check the first version against the accounts"
            - name: Inheriting a forecast model from a predecessor
              description: |-
                ## Purpose
                Taking over someone else's forecast means inheriting hidden hard-coded numbers, broken links and assumptions nobody wrote down. A structured review in the first month, before you publish your first cycle, tells you what can be trusted, what needs fixing and what to explain to leadership about any change in numbers.

                ## Milestones
                1. A map of the model's tabs, inputs, calculations and outputs.
                2. Hard-coded values, broken links and circular references listed.
                3. Every assumption traced to a source or flagged as unknown.
                4. A short note to leadership on what was found and what will change.

                ## Notes
                Publish your first cycle on the inherited model if you must, but say clearly which numbers you have not yet verified.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written model review listing structure, errors and untraced assumptions, shared with leadership before your second cycle."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Draw a one-page map of the model's tabs and how they link"
                - "Search for hard-coded numbers inside formulas and list them"
                - "Trace each assumption to a source or mark it unknown"
                - "Ask the agent to summarise the review findings into a note for leadership"
            - name: Splitting the reforecast across a small finance team
              description: |-
                ## Purpose
                In a team of two or three, the reforecast usually lands on whoever built the model, and it stalls the month that person is away. Splitting the cycle into clear pieces, each with a primary and a backup, spreads the knowledge and keeps the calendar intact through holidays and resignations.

                ## Milestones
                1. The cycle broken into five to eight named tasks with time estimates.
                2. A primary and a backup assigned for each task.
                3. Each backup has run their task once under supervision.
                4. A cycle completed with the model builder away.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every reforecast task has a primary and a trained backup, and one full cycle has been completed without the model builder."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Break the reforecast cycle into named tasks with time estimates"
                - "Assign a primary and a backup for each task"
                - "Have each backup run their task once while the primary watches"
                - "Plan one cycle to run while the model builder is on leave"
            - name: Input guide for budget holders
              description: |-
                ## Purpose
                Budget holders in sales, operations and product are asked for forecast inputs every month but rarely told what good looks like. A two-page guide explaining what to submit, how it is used, how to flag uncertainty and who to ask turns reluctant contributors into reliable ones and improves the inputs finance receives.

                ## Milestones
                1. A two-page guide covering what to submit, the format, the deadline and how inputs are used.
                2. A worked example of a good submission with a short explanation of changes.
                3. The guide sent to every owner and walked through with new ones.
                4. Feedback collected from owners after two cycles and the guide updated.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A two-page input guide with a worked example, sent to all owners and revised after their feedback."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft the two-page guide on what to submit and how it is used"
                - "Add a worked example of a good submission"
                - "Send the guide to every forecast owner"
                - "Ask owners after two cycles what is still unclear"
            - name: Forecasting a newly acquired business or new line
              description: |-
                ## Purpose
                New businesses and product lines arrive with no history in your ledger, different drivers and owners who do not yet know your cycle. Building a separate forecast block for them, with wider ranges and closer monitoring for the first six months, stops their uncertainty from distorting the established business's view.

                ## Milestones
                1. A separate forecast block for the new business or line, with its own drivers.
                2. Its owners added to the owner table and briefed on the cycle.
                3. Wider scenario ranges set for the first six months.
                4. The block merged into the main structure once three months of actuals exist.

                ## Notes
                Where an acquisition is involved, take the opening position and any accounting adjustments from whoever is handling the deal accounting.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The new business forecast in its own block for at least three months, then merged into the main forecast structure."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Create a separate forecast block for the new business or line"
                - "Agree its drivers and owners with its management"
                - "Set wider downside and upside ranges for the first six months"
                - "Merge the block into the main forecast after three months of actuals"
            - name: Early-stage forecasting with wide ranges
              description: |-
                ## Purpose
                Pre-revenue and early-revenue companies cannot forecast revenue with any precision, and pretending otherwise misleads the team and investors. Forecasting costs tightly, revenue as a range tied to milestones and runway under each case gives an honest view that is still useful for deciding when to raise and how fast to hire.

                ## Milestones
                1. Costs forecast in detail from committed spend and the hiring plan.
                2. Revenue shown as low, middle and high cases, each tied to a named milestone.
                3. Runway in months shown for each revenue case.
                4. The milestones checked each month and the cases narrowed as evidence arrives.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A forecast with detailed costs, three milestone-linked revenue cases and runway for each, updated for three months."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Forecast costs month by month from committed spend and hires"
                - "Write three revenue cases each tied to a named milestone"
                - "Show runway in months for each case"
                - "Review milestone progress and narrow the cases monthly"
            - name: Forecast value added review
              description: |-
                ## Purpose
                Every manual adjustment to a forecast costs time and can add bias, yet few teams check whether the adjustments make the forecast better. Comparing the accuracy of a simple baseline, such as last month's actual or a statistical projection, with the final adjusted forecast shows which owners and steps genuinely add value.

                ## Milestones
                1. A naive baseline forecast stored alongside each published cycle.
                2. Errors of the baseline and the final forecast compared over six months.
                3. Adjustments by owner or line identified as adding or removing accuracy.
                4. Steps that consistently reduce accuracy simplified or removed.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A six-month comparison of baseline and final forecast error, with at least one process change made from the result."
                cadence: cyclic
              tasks:
                - "Store a naive baseline forecast beside each published cycle"
                - "Compare baseline and final forecast error by line @recurring(quarterly)"
                - "Share the findings with owners whose adjustments help or hurt"
                - "Remove or simplify one step that reduces accuracy"
            - name: Statistical baseline for high-volume lines
              description: |-
                ## Purpose
                Lines with many small, regular transactions, such as card sales, transaction fees or shipping costs, are often better forecast by a simple statistical method than by an owner's judgement. Testing exponential smoothing or a seasonal moving average on these lines against your history shows whether to automate them and free owners for the lines that need judgement.

                ## Milestones
                1. Three to five high-volume lines chosen with at least twenty-four months of history.
                2. Two simple statistical methods tested on held-back months.
                3. Their accuracy compared with the owner forecasts for the same months.
                4. A decision recorded on which lines move to a statistical baseline.

                ## Notes
                Statistical methods assume the future looks like the past. Keep owner overrides for known changes such as a price rise.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two statistical methods tested on at least three lines, compared with owner forecasts, with a recorded decision per line."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Pick three to five high-volume lines with two years of history"
                - "Hold back the last six months and test two simple methods"
                - "Compare their accuracy with the owner forecasts for those months"
                - "Record which lines move to a statistical baseline"
            - name: Driver sensitivity ranking
              description: |-
                ## Purpose
                Not every driver deserves the same attention: in most businesses three or four drive the bulk of the variation in profit and cash. Flexing each driver by a set amount and ranking the effect shows where to spend review time, which assumptions need better data and which scenarios matter.

                ## Milestones
                1. Each key driver flexed by the same percentage up and down.
                2. The effect on full-year profit and lowest cash point recorded for each.
                3. Drivers ranked by effect in a single chart for the pack.
                4. The top three drivers given extra review in each cycle.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A ranked sensitivity chart of all key drivers by effect on profit and cash, with the top three marked for extra review."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Flex each key driver up and down by the same percentage"
                - "Record the effect on full-year profit and the lowest cash point"
                - "Rank the drivers in a single chart"
                - "Add extra review steps for the top three drivers"
            - name: Rolling forecast policy document
              description: |-
                ## Purpose
                As the company grows, new managers, auditors and investors ask how the forecast works, and the answer should not depend on who is asked. A short written policy covering horizon, cadence, ownership, version control, approval, scenarios and the separation of target from forecast keeps the process consistent through growth and staff changes.

                ## Milestones
                1. A policy of no more than four pages covering horizon, cadence, owners, versions and approvals.
                2. The policy approved by the finance lead and the chief executive or founder.
                3. The policy shared with every forecast owner and stored with the forecast.
                4. An annual review date set and kept.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An approved forecast policy of four pages or fewer, shared with all owners and reviewed at least once a year."
                cadence: cyclic
              tasks:
                - "Draft the policy from the decisions already made in this area"
                - "Get the policy approved by the finance lead and chief executive"
                - "Share the policy with every forecast owner"
                - "Review the policy against how the cycle actually runs @recurring(yearly)"
            - name: Three to five year outlook linked to the rolling window
              description: |-
                ## Purpose
                Strategy decisions such as entering a new market, building a facility or planning an exit need a view beyond the rolling window, but a separate long-range model soon disagrees with the forecast. Extending from the end of the rolling window with a few high-level growth and margin assumptions keeps the long view anchored to current evidence.

                ## Milestones
                1. A yearly outlook for three to five years starting from the rolling forecast's last month.
                2. No more than ten high-level assumptions, each recorded in the register.
                3. The outlook refreshed whenever the strategy or the rolling forecast changes materially.
                4. The outlook used in at least one strategy or investment discussion.

                ## Notes
                Present the long view as ranges. Precision five years out is false comfort.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A three to five year outlook built from the end of the rolling window, with ten or fewer recorded assumptions, used in a strategy discussion."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Take the final year of the rolling forecast as the starting point"
                - "Set ten or fewer high-level growth, margin and investment assumptions"
                - "Show the outlook as low, middle and high ranges"
                - "Present the outlook at the next strategy discussion"
---

# Rolling Financial Forecasts

This area is for whoever keeps the forward view of a growing company honest: a finance manager running the reforecast, a founder who wants to see past next quarter, or a small team sharing the work. It starts with the foundations (horizon and cadence, the decisions the forecast serves, a clean actuals baseline, drivers, owners and an assumptions register), then the monthly machinery of rolling in actuals, collecting inputs, reviewing and bridging the numbers, the forecasting skills behind good drivers, the improvements and decisions that make the forecast faster and more credible, the dated packs for boards, investors and lenders, situations for founders, inheriting managers and small teams, and finally specialist work on forecast value added, statistical baselines and long-range outlooks.

What repeats is the monthly cycle: external assumptions refreshed around the 2nd, owner requests out on the 3rd, actuals rolled in on the 5th, inputs chased on the 6th, risks and review meeting by the 8th, the bridge on the 9th, versions locked on the 10th and accuracy logged on the 12th, with a weekly look at leading indicators. Each quarter brings a driver rebuild, a scenario refresh and the board pack, and each year the target and the forecast policy are revisited. The Purchase decision, Operational checklist, Meeting notes, Metrics log, Risk register and Board meeting templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
