---
id: finance-accounting.headcount-cost-planning
name: Headcount Cost Planning
description: "A position-level model of what your people really cost, with employer taxes, benefits and per-head costs, a hiring plan tied to budget and runway, and the monthly checks that keep it matched to payroll."
category: business
version: 1.0.0
tags: [finance-accounting, headcount-cost-planning, manager, founder, enterprise, workforce-planning, hiring-plan, people-costs]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - purchase-decision
    - board-meeting
  pillars:
    - name: Finance & Accounting
      emoji: "🧾"
      description: "The money side of a business: bookkeeping and the monthly close, cash flow, budgeting and forecasting, billing and collections, payroll, tax, audit and financial controls."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Headcount Cost Planning
          description: "Modelling the full cost of current and planned staff, including salaries, taxes and benefits, so hiring plans fit the budget and runway."
          projects:
            - name: Current headcount roster matched to payroll and HR
              description: |-
                ## Purpose
                Before any hiring plan can be costed, finance, HR and payroll need to agree on who is actually employed today, on what hours and at what pay. First attempts usually find two or three mismatches: a leaver still on the HR system, a part-timer recorded as full time, a fixed-term contract nobody listed. Matching the sources once gives every later number a trustworthy starting point.

                ## Milestones
                1. A list of every current employee exported from the HR system and from the latest payroll run.
                2. Each person matched across both sources by employee number, with mismatches listed.
                3. Every mismatch resolved with HR or payroll and the correct record noted.
                4. One agreed roster with role, team, hours, start date and base pay, dated and saved.

                ## Notes
                Match on employee numbers rather than names; duplicates and spelling differences hide mismatches.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated roster matches the latest payroll run person for person, with every mismatch resolved and its outcome recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export the current employee list from the HR system"
                - "Export the per-employee totals from the most recent payroll run"
                - "Match both lists by employee number and flag every difference"
                - "Resolve each difference with HR or payroll and note the outcome"
                - "Save the agreed roster with today's date in the file name"
            - name: Employer on-cost rates reference sheet
              description: |-
                ## Purpose
                Employer social security, payroll taxes, mandatory pension contributions and insurance levies differ by country and often change at the start of each tax year, usually with earnings thresholds and upper limits. One dated reference sheet, sourced from the tax authority or your payroll provider, stops every model in the business from using a different guess.

                ## Milestones
                1. Every country, and state or province where it matters, in which you employ people listed.
                2. Employer rates, thresholds and caps written for each, with the source and the tax year they apply to.
                3. The figures checked against a recent payslip or payroll provider summary.
                4. The sheet saved where the headcount model reads it, with an owner named.

                ## Notes
                Confirm the figures with your payroll provider or adviser. The sheet records their rates; it does not interpret the rules.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated on-cost sheet covers every employing location, with each figure citing a source and confirmed by the payroll provider."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every country and region where you have or plan to have employees"
                - "Ask your payroll provider for the current employer rates and thresholds"
                - "Record each rate with its source and the tax year it covers"
                - "Check one real payslip against the sheet to confirm the employer cost"
            - name: Per-head operating cost list
              description: |-
                ## Purpose
                Every new hire also brings a laptop, software seats, a desk or home working allowance, training budget, travel and often a recruitment fee, and none of these sit in the salary line. Listing the typical cost per head by role family turns them into a standard add-on, so new roles are not costed on salary and taxes alone.

                ## Milestones
                1. One-off costs per hire listed: equipment, recruitment fee, onboarding and relocation where it applies.
                2. Monthly costs per head listed: software licences, workspace, training, phone and travel.
                3. Figures sourced from recent invoices or the ledger, with role-family differences noted.
                4. The list wired into the model as a standard per-head charge.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A per-head cost list, split into one-off and monthly items by role family and sourced from real invoices, is used by the model."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull the last six months of equipment, licence and recruitment invoices"
                - "Separate one-off hire costs from monthly per-head costs"
                - "Note where engineering, sales and operations roles differ"
                - "Add the per-head charges to the model as standard inputs"
            - name: Fully loaded cost rate for every employee
              description: |-
                ## Purpose
                Base salary usually understates what a person costs, often by a fifth or more once employer taxes, pension, insurance, benefits and equipment are added. Calculating a fully loaded annual and monthly cost for each person on the roster shows the true size of the people budget and gives you a loading percentage to cost new roles quickly.

                ## Milestones
                1. Each employee's base pay, allowances and expected variable pay on one row.
                2. Employer taxes and contributions applied from the on-cost sheet, including caps and thresholds.
                3. Benefits and per-head operating costs added from their own reference lists.
                4. A fully loaded annual and monthly cost for each person, plus an average loading percentage by country or grade.

                ## Notes
                Caps and thresholds matter: a flat percentage overstates employer contributions for high earners where a ceiling applies and can misstate them for part-timers near a threshold.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every person on the roster has a fully loaded annual cost, and the loading percentage by country or grade is written in the model."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every pay element on the roster, from base pay to bonus target"
                - "Apply the employer rates from the on-cost sheet to each person"
                - "Add benefits and per-head operating costs to each row"
                - "Calculate the average loading percentage by country or grade"
                - "Recalculate loaded rates after the annual statutory rate update @recurring(yearly)"
            - name: Position-level headcount model build
              description: |-
                ## Purpose
                Models built on names break the day someone leaves; models built on positions survive it. Giving every filled, open and planned role its own position ID, team, grade, start month and status lets you cost the plan month by month and see exactly which approved roles are still empty.

                ## Milestones
                1. One row per position with an ID, team, cost centre, grade, country and status: filled, open, approved or planned.
                2. Monthly cost columns driven by start date, end date and the fully loaded rate.
                3. Totals by team, status and month, with filled roles tying back to the roster.
                4. A short tab explaining how to add, move or close a position.

                ## Notes
                When someone leaves, keep the position and mark it open. Deleting the row loses the budget history and the backfill decision.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every current and planned role has a position ID and monthly cost, and filled roles total to the latest payroll run within 2%."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Assign a position ID to every row on the agreed roster"
                - "Add rows for each open and approved role with a target start month"
                - "Build monthly cost columns that switch on from the start date"
                - "Check that filled positions total to the latest payroll within 2%"
                - "Write a one-page guide to adding and closing positions"
            - name: Headcount planning assumptions register
              description: |-
                ## Purpose
                A hiring plan is only as good as the guesses underneath it: when pay rises land, how long roles take to fill, how many people leave, how far new hires sit above the band midpoint. Writing each assumption down with its value, source and owner lets leadership challenge the inputs instead of arguing about the totals.

                ## Milestones
                1. A register listing each assumption with value, source, owner and date.
                2. Pay review timing and size, time to fill, attrition and new hire premium all covered.
                3. Every assumption held on one input tab that the model reads from.
                4. The register reviewed once with HR and the budget owner.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register of at least eight named assumptions, each with value, source and owner, is linked to the model and has been reviewed with HR."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every assumption the model currently hides inside formulas"
                - "Record value, source, owner and date for each one"
                - "Move each assumption onto a single input tab the model reads"
                - "Walk through the register with HR and the budget owner"
            - name: Salary bands for costing open roles
              description: |-
                ## Purpose
                Open roles costed at a round guess are where most hiring budgets go wrong. Using the band midpoint for each grade and location, with an agreed premium for hard-to-fill roles, makes every planned position cost something you can defend and shows recruiting the budget they are working to.

                ## Milestones
                1. A band minimum, midpoint and maximum for each grade and location used in the plan.
                2. A rule agreed with HR for which point in the band planned roles are costed at.
                3. Every open and planned position costed from the bands rather than a typed figure.
                4. Roles where the market rate sits above the band flagged for a decision.

                ## Notes
                If you have no bands yet, use the median from a recognised salary survey and say so in the assumptions register.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every open and planned position is costed from a documented band point, with roles priced above band listed for decision."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Collect the current salary bands or survey medians from HR"
                - "Agree which band point new hires are costed at"
                - "Replace typed salary figures on open roles with band lookups"
                - "List roles where the market rate exceeds the band"
                - "Refresh the bands with HR when new survey data arrives @recurring(yearly)"
            - name: Current run-rate people cost baseline
              description: |-
                ## Purpose
                Leaders often know last year's payroll total but not the monthly run rate after this year's pay rises and recent hires. A baseline of what the current team costs per month, fully loaded and before any new hiring, is the number every hiring request and runway conversation should start from.

                ## Milestones
                1. The monthly fully loaded cost of the current team calculated from the position model.
                2. The run rate split by team, country and cost type: pay, employer taxes, benefits and per-head costs.
                3. The figure compared with the last three months of actual people costs in the ledger.
                4. A one-paragraph note explaining any gap between run rate and recent actuals.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A monthly run-rate figure, split by team and cost type, is reconciled to three months of ledger people costs with every gap explained."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Total the monthly loaded cost of filled positions in the model"
                - "Split the total by team, country and cost type"
                - "Pull the last three months of people costs from the ledger"
                - "Explain the gap between run rate and actuals in one paragraph"
            - name: Salary data confidentiality and model access
              description: |-
                ## Purpose
                One link to the headcount model shared in the wrong channel can expose every salary in the company and damage trust for years. Deciding who sees named pay, who sees only team totals and where the file lives is worth settling before the model reaches a single budget holder.

                ## Milestones
                1. A named list of who may see individual pay and who may see team totals only.
                2. The model stored in a restricted location with access matching that list.
                3. A summary version with names and salaries removed for budget holders.
                4. A note in the model setting out the access rule and its owner.

                ## Notes
                Follow your organisation's data protection policy, and ask HR or your privacy lead where personal data rules apply.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Model access matches a written list of named viewers, and budget holders receive a version with no individual pay data."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down who needs named salary data and who needs totals only"
                - "Move the model to a folder restricted to the named list"
                - "Create a summary view with names and individual pay removed"
                - "Review model access and remove anyone who has changed role @recurring(quarterly)"
            - name: Monthly headcount cost reconciliation to payroll
              description: |-
                ## Purpose
                Plans drift from reality quietly: a pay rise processed early, an overtime spike, a starter who joined a month late. Reconciling the model's filled-position cost to each payroll run catches those differences within weeks and keeps the people cost forecast honest.

                ## Milestones
                1. Each month's payroll total compared with the model's filled-position cost for that month.
                2. Differences above an agreed threshold explained by person or pay element.
                3. The model updated for permanent changes such as rises, hours changes and late starts.
                4. A running log of monthly differences and their causes.

                ## Notes
                Start from the **Metrics log** template for the running record of monthly differences.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each payroll run is reconciled to the model within ten working days, with every difference over the agreed threshold explained in the log."
                cadence: rolling
              tasks:
                - "Agree the threshold above which a difference must be explained"
                - "Compare the payroll total with the model's filled-position cost @recurring(monthly:8)"
                - "Explain each difference above threshold by person or pay element"
                - "Update the model for permanent changes found in the comparison"
            - name: Open roles and start dates check with recruiting
              description: |-
                ## Purpose
                Roles rarely start in the month the plan assumed, and each month of slippage is cost not spent, which matters for runway and for the year-end forecast. A short standing check with the recruiting lead on every open role, its stage and its likely start date keeps the model's timing realistic.

                ## Milestones
                1. A list of open roles with stage, hiring manager and expected start date shared with recruiting.
                2. Start dates in the model updated from the latest recruiting view.
                3. Roles slipping more than two months flagged to the budget owner.
                4. Accepted offers entered at the agreed salary, not the planned band point.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every open role carries a start date confirmed with recruiting in the last fortnight, and accepted offers use the actual agreed pay."
                cadence: rolling
              tasks:
                - "Share the open roles list with the recruiting lead"
                - "Review each open role's stage and start date with recruiting @recurring(weekly:wed)"
                - "Replace planned salary with the agreed offer when a candidate accepts"
                - "Flag roles slipping more than two months to the budget owner"
            - name: Hiring request and approval workflow
              description: |-
                ## Purpose
                Without a single route for new roles, headcount grows through side conversations and backfills nobody costed. A short request form capturing role, grade, location, start month, loaded cost and the budget line it uses, signed off by named approvers, means every addition is costed before it is advertised.

                ## Milestones
                1. A request form capturing role, grade, location, start month, loaded cost, budget line and reason.
                2. Approvers agreed for new roles, backfills and roles outside budget.
                3. Approved requests logged against position IDs in the model.
                4. Recruiting committed to advertising no role without an approved request.

                ## Notes
                Backfills deserve the same form. A resignation is the cheapest moment to ask whether the role is still needed in the same shape.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "For one full quarter, no role is advertised without an approved request naming its loaded cost and budget line, checked against the recruiting system."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Draft a one-page hiring request form"
                - "Agree approvers for new roles, backfills and over-budget roles"
                - "Link each approved request to a position ID in the model"
                - "Agree with recruiting that roles are advertised only once approved"
                - "Review pending hiring requests with the approvers @recurring(weekly:mon)"
            - name: Quarterly headcount plan refresh
              description: |-
                ## Purpose
                Each quarter brings new information: revenue against plan, actual attrition, roles that proved harder to fill, a change in funding. A planned refresh of the whole headcount plan, rather than ad hoc edits, resets assumptions, re-phases hires and produces one updated people cost line for the forecast.

                ## Milestones
                1. The assumptions register updated with the quarter's actual attrition, time to fill and offer data.
                2. Every planned role reconfirmed, moved or removed with its budget owner.
                3. An updated monthly people cost line sent to the forecast owner.
                4. A short note of what changed since last quarter and why.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter ends with an updated headcount plan, a change note and a monthly people cost line delivered to the forecast owner."
                cadence: cyclic
              tasks:
                - "Run the headcount refresh with each budget owner @recurring(quarterly)"
                - "Update attrition and time to fill in the assumptions register"
                - "Send the updated monthly people cost line to the forecast owner"
                - "Write a short note of what moved since last quarter and why"
            - name: Leavers and attrition tracking for the plan
              description: |-
                ## Purpose
                Every resignation changes the cost line twice: a saving while the seat is empty, then a replacement often hired above the leaver's pay. Recording leavers, notice dates and backfill decisions each month, and measuring attrition against the plan's assumption, keeps both effects visible.

                ## Milestones
                1. A leavers log with notice date, last day, final pay items and backfill decision.
                2. Positions marked open or closed in the model as soon as notice is given.
                3. Monthly attrition compared with the planning assumption.
                4. Holiday payouts and notice pay estimated for each month's leavers.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every leaver appears in the log and the model within a week of notice, and actual attrition is compared with plan each month."
                cadence: rolling
              tasks:
                - "Set up a leavers log with notice date, last day and backfill decision"
                - "Mark each leaver's position open or closed in the model"
                - "Compare actual attrition with the planning assumption @recurring(monthly:20)"
                - "Ask payroll for the expected final pay items for each leaver"
            - name: Runway check for every hiring wave
              description: |-
                ## Purpose
                For a funded startup, people are often well over half of monthly spend, so every hire shortens runway in a way you can measure. Checking runway each month with the current plan, and again before approving any batch of hires, shows how many months each wave costs and when the next raise or break-even point has to arrive.

                ## Milestones
                1. Monthly cash, burn and runway shown with and without the planned hires.
                2. The months of runway consumed by each planned hiring wave stated.
                3. A minimum runway floor agreed with the board or co-founders.
                4. Any wave that would breach the floor held until it is re-approved.
              priority: high
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Runway with and without planned hires is updated monthly, and no hiring wave is approved that breaks the agreed runway floor."
                cadence: rolling
              tasks:
                - "Agree a minimum runway in months with co-founders or the board"
                - "Model runway with and without each planned hiring wave"
                - "Update the runway figures once the month's books close @recurring(monthly:5)"
                - "Hold any wave that breaks the floor until it is re-approved"
            - name: Monthly headcount and people cost pack
              description: |-
                ## Purpose
                Leadership tends to ask the same four questions every month: how many people, what they cost, what is open and how that compares with budget. A one-page pack with headcount, FTE, loaded cost, open roles and variance to budget answers them before anyone asks.

                ## Milestones
                1. A one-page layout agreed with leadership covering headcount, FTE, cost, open roles and variance.
                2. Figures drawn from the model and the payroll reconciliation, never retyped.
                3. A three-line commentary on the biggest movements.
                4. The pack sent on a fixed working day each month.

                ## Notes
                Show starters and leavers as a simple bridge from last month's headcount to this month's; it answers most follow-up questions.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A one-page people cost pack reaches leadership on the same working day each month for three consecutive months."
                cadence: rolling
              tasks:
                - "Agree the one-page layout with the leadership team"
                - "Build a headcount bridge from opening to closing with starters and leavers"
                - "Ask the agent to draft the three-line commentary from the month's movements"
                - "Send the people cost pack to leadership @recurring(monthly:10)"
            - name: Annual statutory rate and threshold update
              description: |-
                ## Purpose
                Employer contribution rates, earnings thresholds, minimum wage levels and pension minimums often change when the tax year turns, and a model still using last year's figures misstates every loaded cost. A fixed yearly refresh of the on-cost sheet, confirmed by payroll, keeps the whole plan current.

                ## Milestones
                1. Changes for the new tax year collected for every employing country.
                2. The on-cost sheet updated, with last year's rates kept beside them for comparison.
                3. The cost effect of the changes on the current team calculated.
                4. Budget owners told of any material change to their people cost.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The on-cost sheet carries the current tax year's rates for every country within a month of the year starting, with the cost effect reported."
                cadence: cyclic
              tasks:
                - "Ask payroll for the coming tax year's employer rate changes @recurring(yearly)"
                - "Update the on-cost sheet and keep last year's column"
                - "Calculate the cost effect of the changes on the current team"
                - "Tell budget owners of any change above the agreed threshold"
            - name: Benefits renewal cost update
              description: |-
                ## Purpose
                Health insurance, life cover and other benefit premiums usually renew once a year, sometimes with rises well above general inflation and with pricing that shifts as the team grows. Bringing the renewal quote into the model as soon as the broker sends it stops a surprise increase landing halfway through the budget year.

                ## Milestones
                1. The renewal date and current premium for each benefit scheme recorded in the model.
                2. The broker's renewal quote obtained at least eight weeks before renewal.
                3. The new per-head premium applied to current and planned staff.
                4. The increase against budget reported to the budget owner.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each benefit renewal is costed in the model at the quoted premium before its renewal date, with the variance to budget reported."
                cadence: cyclic
              tasks:
                - "List each benefit scheme with its renewal date and current premium"
                - "Ask the broker for renewal quotes eight weeks before each date @recurring(yearly)"
                - "Apply the quoted per-head premiums to the model"
                - "Report the increase against budget to the budget owner"
            - name: Headcount, FTE and capacity definitions
              description: |-
                ## Purpose
                Headcount, FTE, budgeted positions and filled seats are four different numbers, and mixing them up causes most arguments between finance, HR and managers. Learning how each is counted, and agreeing one definition for your organisation, means everyone in the meeting is talking about the same figure.

                ## Milestones
                1. Definitions of headcount, FTE, filled, open and approved positions written on one page.
                2. Treatment agreed for part-timers, fixed-term staff, interns and people on long leave.
                3. Contractors and agency staff placed clearly inside or outside the count.
                4. The definitions page attached to the model and the monthly pack.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page definitions sheet, agreed with HR and covering five edge cases, is attached to the model and the monthly pack."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft definitions of headcount, FTE and approved positions"
                - "Decide how part-timers, interns and people on long leave are counted"
                - "Decide whether contractors and agency staff sit inside the count"
                - "Agree the sheet with HR and attach it to the model"
            - name: Employer payroll costs in each hiring country
              description: |-
                ## Purpose
                Finance leads planning hires abroad often know the headline salary but not what the employer must add on top, which elements are capped, or local customs such as a thirteenth-month salary. A working understanding of each country's employer contributions and mandatory benefits prevents loaded costs being badly understated.

                ## Milestones
                1. The main employer contributions and mandatory benefits for each country summarised in plain language.
                2. Customs such as extra monthly salaries, holiday bonuses or statutory severance funds noted.
                3. Questions you cannot answer listed and put to the payroll provider or adviser.
                4. The summary checked against one real employer cost quote for that country.

                ## Notes
                Use the tax authority's guidance or your payroll provider's country guides as sources, and confirm with a local adviser before relying on them.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each employing country has a plain-language summary, its open questions answered by the provider and its figures checked against a real quote."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Start with the country where the most hiring is planned"
                - "Summarise its employer contributions and mandatory benefits on one page"
                - "Note customs such as extra monthly salaries or holiday bonuses"
                - "Send unanswered questions to the payroll provider or adviser"
            - name: Start dates, phasing and in-year cost
              description: |-
                ## Purpose
                A role costed at a full annual salary in a year it starts in September is overstated by two thirds in that year's budget. Learning to phase cost by start month, part-month starts, benefit waiting periods and pay review dates makes the monthly forecast match what payroll will actually pay.

                ## Milestones
                1. Start-month phasing applied so new roles cost nothing before their start date.
                2. Part-month start and leaver rules agreed with payroll.
                3. Benefit waiting periods and pay review effective dates reflected in the model.
                4. One worked example saved, showing annual cost against in-year cost for a role.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The model phases every role by start date and pay review month, and a worked in-year versus annual cost example is saved in it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask payroll how part-month starters and leavers are paid"
                - "Check which benefits have waiting periods for new joiners"
                - "Phase every planned role from its start month in the model"
                - "Write a worked example of in-year versus full-year cost"
            - name: Modelling bonus, commission and overtime
              description: |-
                ## Purpose
                Variable pay is where people costs swing most, especially in sales teams where commission follows bookings and in operations where overtime follows volume. Modelling each scheme from its real driver, with employer taxes applied and timing matched to payout dates, stops the people line being wrong every quarter.

                ## Milestones
                1. Each variable pay scheme listed with its driver, rate and payout timing.
                2. Commission linked to the sales forecast and overtime to the volume plan, not typed as flat amounts.
                3. Employer taxes applied to variable pay in the month it is paid.
                4. Accrual timing agreed with whoever runs the month-end close.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every variable pay scheme in the model is driven by its forecast driver and paid in the correct month with employer taxes included."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every bonus, commission and overtime scheme with its rules"
                - "Link commission to the sales forecast instead of a flat amount"
                - "Place variable pay in the months it is actually paid"
                - "Agree accrual timing with the person running the close"
            - name: Equity awards in the people cost plan
              description: |-
                ## Purpose
                Share options and share awards cost no cash when granted, but in some countries they trigger employer tax or social charges when they vest or are exercised, and they appear as an expense in the accounts. Knowing which parts of equity hit cash, which hit profit and when lets founders plan equity-heavy offers without surprises.

                ## Milestones
                1. The cash and non-cash effects of your equity scheme explained on one page.
                2. Any employer charges on vesting or exercise confirmed with an adviser for each country.
                3. Expected grants for planned hires recorded beside their cash pay.
                4. The share-based expense estimate shared with whoever prepares the accounts.

                ## Notes
                Equity tax treatment depends on the jurisdiction and the scheme. Take advice from a tax adviser before relying on any estimate.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note on the cash and accounting effects of the equity scheme exists, with employer tax treatment confirmed by an adviser."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect the equity plan rules and the current grant schedule"
                - "Ask the tax adviser which employer charges arise on vesting or exercise"
                - "Record expected grants for each planned hire next to their cash pay"
                - "Share the expense estimate with whoever prepares the accounts"
            - name: Spreadsheet techniques for position models
              description: |-
                ## Purpose
                Position models break in predictable ways: hard-coded salaries, start dates that never switch costs on, lookups that silently return zero. A handful of techniques applied deliberately, such as date-driven monthly flags, one input tab, lookups by position ID and check totals, make the model safe to hand to someone else.

                ## Milestones
                1. Monthly active flags driven by start and end dates rather than typed ones and zeros.
                2. All rates read from a single input tab by lookup.
                3. Check cells that turn red when totals fail to tie.
                4. A colleague able to add a position and get the right cost without help.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A colleague adds and closes a test position without help, and every check cell in the model shows zero difference."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Replace typed monthly ones and zeros with date-driven flags"
                - "Move every rate onto one input tab read by lookup"
                - "Add check cells that flag totals which fail to tie"
                - "Ask a colleague to add a test position and note where they get stuck"
            - name: Reading the payroll register for planning
              description: |-
                ## Purpose
                The payroll register holds the real answer to what people cost, but its columns of gross pay, employer contributions, deductions and net pay confuse many first-time planners. Knowing which columns are employer cost and which are the employee's own money passing through prevents double counting and missed costs.

                ## Milestones
                1. Each column of the register labelled as employer cost, employee deduction or net pay.
                2. Employer cost per person rebuilt from the register for one month.
                3. People costs paid outside payroll, such as benefits invoiced directly, identified.
                4. A short guide saved next to the model for the next person.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A labelled payroll register and a rebuilt monthly employer cost match the ledger people cost for that month within 1%."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Get a copy of last month's payroll register from payroll"
                - "Label each column as employer cost, deduction or net pay"
                - "Rebuild one month's employer cost from the register"
                - "List people costs that are paid outside payroll"
            - name: Employee versus contractor cost comparison
              description: |-
                ## Purpose
                When a role could be filled by an employee or a contractor, the day rate looks expensive and the salary looks cheap, yet neither comparison is fair until on-costs, utilisation, notice and management time are counted. Costing both on a twelve-month loaded basis, with employment status risk checked by an adviser, gives a clear decision for the specific role.

                ## Milestones
                1. The employee option costed fully loaded for twelve months.
                2. The contractor option costed on a realistic number of billed days, plus any agency margin.
                3. Employment status risk for the contractor route reviewed with HR or an adviser.
                4. A decision recorded with cost, flexibility and risk reasons.

                ## Notes
                Status rules differ by country and misclassification can be expensive, so ask an employment adviser rather than deciding on cost alone.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision for the role compares both options on twelve-month loaded cost and notes the adviser's view on status risk."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Cost the role as an employee on a fully loaded twelve-month basis"
                - "Cost the contractor route on realistic billed days and agency margin"
                - "Ask HR or an adviser about employment status risk for the role"
                - "Record the decision with cost, flexibility and risk reasons"
            - name: Location cost comparison for a new role
              description: |-
                ## Purpose
                The same role can cost very different amounts in your head office city, a cheaper domestic region or another country hired through an employer of record. Comparing loaded cost, provider fees, time-zone overlap and hiring speed across three locations makes remote and international hiring a costed choice rather than a hunch.

                ## Milestones
                1. Three candidate locations chosen for one role.
                2. Loaded cost for each, including employer of record or entity costs where relevant.
                3. Non-cost factors scored: time-zone overlap, talent supply and management overhead.
                4. A recommended location agreed with the hiring manager.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three locations are compared for one role on loaded cost and three non-cost factors, with the chosen location recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pick three realistic locations for the role"
                - "Get loaded cost estimates for each, including provider fees"
                - "Score each on time zone, talent supply and management overhead"
                - "Agree the location with the hiring manager"
            - name: Twelve-month hiring sequence by impact and cost
              description: |-
                ## Purpose
                Most hiring wish lists are longer than the budget allows, and the order of hires matters as much as the total. Ranking each requested role by its expected effect on revenue, risk or capacity against its in-year loaded cost, then sequencing to fit the budget, gives managers a plan they can see and accept.

                ## Milestones
                1. Every requested role listed with its loaded annual and in-year cost.
                2. Each role scored on impact with its hiring manager against the same three criteria.
                3. A sequenced hiring plan that fits the agreed budget or runway floor.
                4. Deferred roles listed with the trigger that would bring them forward.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A sequenced twelve-month hiring plan sits within budget, with every role scored on the same criteria and deferred roles listed with triggers."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect every requested role and its hiring manager"
                - "Score each role on impact against the same three criteria"
                - "Order roles so cumulative cost stays within budget"
                - "List deferred roles with the trigger that would release them"
            - name: Annual pay review budget proposal
              description: |-
                ## Purpose
                Pay review is usually the largest single decision on the people cost line, and one percentage point on the pool can equal several new hires. Modelling different pool sizes, the effective date and promotion uplifts gives leadership real options before HR communicates anything.

                ## Milestones
                1. The loaded cost of three pool sizes modelled on the current team.
                2. Promotion and market-adjustment budgets costed separately from the merit pool.
                3. The effect of the effective date on in-year cost shown.
                4. A recommended pool agreed by leadership and entered in the model.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Leadership chooses a pay review pool from at least three costed options, and the chosen pool is in the model before review letters go out."
                cadence: cyclic
              tasks:
                - "Model the loaded cost of three pay review pool sizes"
                - "Cost promotions and market adjustments separately"
                - "Show the in-year effect of different effective dates"
                - "Start the pay review costing two months before the review date @recurring(yearly)"
            - name: Benefits package cost options appraisal
              description: |-
                ## Purpose
                Changing a pension contribution rate, adding a health plan or introducing a wellbeing allowance changes the loaded cost of every employee for years. Costing two or three options per head and in total, including how each grows with the hiring plan, lets HR and leadership choose with the numbers in front of them.

                ## Milestones
                1. Two or three benefit options described with per-head and total annual cost.
                2. Cost growth over three years of the hiring plan shown for each option.
                3. Tax treatment questions confirmed with an adviser or the broker.
                4. The chosen option recorded with its start date and added to the model.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A chosen benefits option is recorded with per-head cost, three-year cost over the hiring plan and a start date in the model."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Describe two or three benefit options with HR"
                - "Cost each option per head and for the whole team"
                - "Project each option's cost over three years of planned hiring"
                - "Record the chosen option and add it to the model from its start date"
            - name: Hiring freeze and slowdown scenarios
              description: |-
                ## Purpose
                When revenue misses or a funding round slips, leaders need to know within days what pausing hiring actually saves. Preparing a freeze scenario and a slowdown scenario in advance, with savings by month and the roles already committed through signed offers, turns a stressful call into a reasoned one.

                ## Milestones
                1. A list of roles already committed through signed offers.
                2. A full freeze scenario costed by month.
                3. A slowdown scenario delaying non-critical roles by one quarter.
                4. Savings and runway effect of each scenario on one page.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Freeze and slowdown scenarios are saved in the model, each with monthly savings and runway effect, excluding roles with signed offers."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List roles with signed offers that cannot be paused"
                - "Cost a full hiring freeze starting next month"
                - "Cost a one-quarter delay to non-critical roles"
                - "Summarise savings and runway effect on one page"
            - name: Choosing a workforce planning tool
              description: |-
                ## Purpose
                Spreadsheet headcount models start to strain at a few hundred positions or several budget owners editing at once. Comparing a dedicated workforce or financial planning tool against a well-built spreadsheet, on HR and payroll integration, access controls and cost, decides whether moving now is worth the effort.

                ## Milestones
                1. Requirements written: positions, integrations, access levels, scenarios and users.
                2. Three options shortlisted, including staying on an improved spreadsheet.
                3. Each option demonstrated on your own anonymised position data.
                4. A decision recorded with cost, timeline and owner.

                ## Notes
                Start from the **Purchase decision** template.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision between three options, each tested on anonymised company data, names the cost, timeline and owner."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write down the requirements the current model cannot meet"
                - "Shortlist two tools plus the improved spreadsheet option"
                - "Run a demo of each on anonymised position data"
                - "Record the decision with cost, timeline and owner"
            - name: Cost-to-hire budget for recruiting
              description: |-
                ## Purpose
                Agency fees can run to a sizeable share of first-year salary, and job boards, assessments, relocation and referral bonuses add more. Setting a cost-to-hire figure per role family, and agreeing when to use agencies, in-house sourcing or referrals, keeps recruitment spend inside the people budget rather than surprising it.

                ## Milestones
                1. Last year's recruitment spend totalled and divided by hires to give an average cost to hire.
                2. Expected cost to hire set by role family and sourcing route.
                3. A rule agreed for when an agency may be used.
                4. Recruitment costs for planned hires added to the model.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each role family has a cost-to-hire figure and an agreed agency rule, and every planned hire in the model carries its recruitment cost."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Total last year's agency, job board and referral costs"
                - "Divide by hires to get average cost to hire by role family"
                - "Agree with recruiting when an agency may be used"
                - "Add recruitment costs to each planned hire in the model"
            - name: Headcount submission for the annual budget
              description: |-
                ## Purpose
                People are usually the largest line in the annual budget and the one leaders debate hardest. Delivering a headcount submission with opening positions, approved new roles, the pay review assumption and monthly loaded cost on the budget calendar's date gives the budget build a firm base instead of a late placeholder.

                ## Milestones
                1. Opening positions for the new year confirmed with each budget owner.
                2. New roles agreed and phased by start month.
                3. Pay review, benefits and on-cost assumptions documented.
                4. The monthly people cost submission delivered to the budget lead by the agreed date.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The headcount submission, with positions, assumptions and monthly loaded cost, reaches the budget lead by the date on the budget calendar."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Find the headcount submission date on the budget calendar"
                - "Confirm opening positions with each budget owner"
                - "Agree and phase new roles for the year by start month"
                - "Deliver the monthly people cost submission to the budget lead"
            - name: Board paper on headcount and runway
              description: |-
                ## Purpose
                Boards and investors want headcount growth tied to milestones and cash, not just a list of roles. A short paper showing today's team, the proposed hiring plan, its monthly cost, the runway effect and what each wave is meant to achieve gives the board something it can approve or push back on clearly.

                ## Milestones
                1. Current headcount and run-rate cost shown by function.
                2. Proposed hires tied to the milestones they support.
                3. Runway under the base plan and a slower alternative.
                4. A clear ask of the board, with its decision minuted.

                ## Notes
                Start from the **Board meeting** template.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A headcount and runway paper is presented to the board, and the board's decision on the hiring plan is minuted."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Confirm the board date and the paper deadline with the chair"
                - "Show current headcount and run-rate cost by function"
                - "Tie each proposed hiring wave to the milestone it supports"
                - "Ask the agent to draft the one-page summary from the model outputs"
                - "Record the board's decision on the hiring plan in the model notes"
            - name: Hiring plan for an investor fundraising model
              description: |-
                ## Purpose
                Investors read the hiring plan as the clearest signal of how a round will be spent, and they test it against the revenue plan and the market for talent. Building a role-by-role plan for the 18 to 24 months the round must fund, with loaded costs and realistic start dates, makes the use-of-funds slide defensible.

                ## Milestones
                1. A role-by-role hiring plan for the period the round is meant to fund.
                2. Loaded costs and realistic time to fill applied to every role.
                3. Ratios such as revenue per head or engineers per product team checked against peers.
                4. The plan feeding the investor financial model and use-of-funds summary.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A role-by-role hiring plan with loaded costs and start dates feeds the investor model and the use-of-funds summary."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List every role the round is meant to fund, by quarter"
                - "Apply loaded costs and realistic time to fill to each role"
                - "Check revenue per head and team ratios against peer benchmarks"
                - "Link the hiring plan into the investor model and use of funds"
            - name: First hire in a new country cost readiness
              description: |-
                ## Purpose
                Hiring the first person in a new country raises questions the domestic plan never faced: own entity or employer of record, local mandatory benefits, payroll provider, currency and notice rules. Costing the route, set-up fees and the loaded cost of the first two or three hires before an offer is made avoids an approval that later turns out far too low.

                ## Milestones
                1. Employer of record and own-entity routes compared on set-up and ongoing cost.
                2. Local mandatory benefits and employer contributions costed for the first hires.
                3. A payroll provider and pay currency chosen.
                4. An approved loaded cost for the first hire entered in the model before the offer.

                ## Notes
                Take local employment and tax advice on the route. This project records the costs and the advice, not the legal conclusion.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An approved route and loaded cost for the first hire in the new country are recorded in the model before any offer is made."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Request quotes from two employer of record providers"
                - "Ask a local adviser for the cost and timeline of setting up an entity"
                - "Cost local mandatory benefits for the first two or three hires"
                - "Enter the approved loaded cost in the model before the offer"
            - name: Year-end bonus accrual and payout costing
              description: |-
                ## Purpose
                Annual bonuses are often paid months after the year they reward, so the cost has to be estimated and accrued during the year, then paid with employer taxes in one heavy payroll. Estimating the pool as the year goes and planning the payout month's cash avoids both an accounts surprise and a cash squeeze.

                ## Milestones
                1. The bonus pool estimated from scheme rules and current performance.
                2. A quarterly accrual agreed with the person running the close.
                3. Employer taxes on the payout included in the payout month.
                4. The payout month checked against the cash forecast.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The bonus pool is accrued each quarter, and the payout, including employer taxes, appears in the cash forecast before it is paid."
                cadence: cyclic
              tasks:
                - "Estimate the bonus pool from the scheme rules and current results"
                - "Update the bonus accrual estimate with the close team @recurring(quarterly)"
                - "Add employer taxes on the payout to the payout month"
                - "Check the payout month against the cash forecast"
            - name: Founder's first ten hires cost plan
              description: |-
                ## Purpose
                Early founders often hire on instinct and find months later that payroll has outrun revenue faster than expected. Planning the first ten hires on paper, with loaded cost, equity, start month and the runway after each, before the first offer goes out, keeps the early team inside what the company can carry.

                ## Milestones
                1. The first ten roles listed in the order the company needs them.
                2. Each role costed fully loaded, with its expected equity grant noted.
                3. Runway shown after each hire under the current cash position.
                4. A hire-by-hire trigger agreed: the revenue, funding or milestone that releases each role.

                ## Notes
                Founders paying themselves below market should still cost their own roles at a realistic rate in a second column, so investors see the true cost of the team.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A ten-role plan shows loaded cost, equity and runway after each hire, with a written trigger for every role."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the first ten roles in the order the company needs them"
                - "Cost each role fully loaded and note its expected equity grant"
                - "Show runway after each hire from today's cash"
                - "Write the trigger that releases each role"
            - name: Department manager's team cost budget
              description: |-
                ## Purpose
                Department heads are often handed a headcount number without the cost behind it, then asked to explain overspends they could not see coming. Owning a simple team cost view, with each position, its loaded cost, open roles and the monthly variance to budget, lets a manager make trade-offs such as delaying a hire to fund a short contract.

                ## Milestones
                1. A team view from the model showing positions, loaded cost and status, without individual pay where policy requires.
                2. Monthly people cost against budget for the team.
                3. Open roles and expected start dates owned by the manager.
                4. One trade-off rule agreed with finance for moving budget between hires and contractors.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The manager reviews a team people cost view against budget every month and has agreed one trade-off rule with finance."
                cadence: rolling
              tasks:
                - "Ask finance for a team view of positions, loaded cost and status"
                - "Check open roles and their expected start dates with recruiting"
                - "Agree with finance how budget can move between hires and contractors"
                - "Review the team's people cost against budget @recurring(monthly:15)"
            - name: Headcount cost integration after an acquisition
              description: |-
                ## Purpose
                An acquired company arrives with its own grades, pay calendars, benefits and payroll provider, and the combined people cost is rarely what the deal model assumed. Bringing its positions into the group model, mapping grades, and costing any harmonisation of pay and benefits gives leadership the real post-deal run rate.

                ## Milestones
                1. The acquired company's roster reconciled to its last payroll run.
                2. Its grades mapped to the group structure and positions added to the model.
                3. Harmonisation options for pay and benefits costed with HR.
                4. Post-deal run-rate people cost compared with the deal model's assumption.

                ## Notes
                Changes to employment terms after an acquisition often carry legal obligations. Agree any harmonisation plan with HR and employment counsel first.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The acquired team is in the group model with mapped grades, and the post-deal run rate is reported against the deal model within one quarter."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Obtain the acquired company's roster and last payroll register"
                - "Map its grades to the group grade structure"
                - "Add its positions to the group model with loaded costs"
                - "Cost pay and benefits harmonisation options with HR"
                - "Compare the post-deal run rate with the deal model's people cost"
            - name: Restructuring cost estimate with HR and legal
              description: |-
                ## Purpose
                When a reorganisation or reduction in roles is being considered, leaders need a credible one-off cost and a savings profile before decisions are made: notice pay, statutory and contractual severance, holiday payouts, benefit continuation and advisers' fees. Preparing the estimate with HR and legal keeps the numbers grounded in the actual contracts and process.

                ## Milestones
                1. Affected positions identified in the model under strict confidentiality.
                2. One-off costs estimated from contracts and statutory rules confirmed by legal.
                3. Consultation or notice timeline from HR built into the savings phasing.
                4. Net savings by month and payback period presented to the decision makers.

                ## Notes
                Redundancy and consultation rules vary by country and are legal matters. Finance prepares the numbers; HR and employment counsel own the process.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A confidential restructuring estimate with one-off costs confirmed by legal and monthly net savings is presented to the decision makers."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Agree with HR who may see the restructuring scenario"
                - "Ask legal to confirm notice and severance terms for affected roles"
                - "Phase savings using the consultation and notice timeline from HR"
                - "Present one-off costs, monthly savings and payback to the decision makers"
            - name: Seasonal and temporary staffing cost plan
              description: |-
                ## Purpose
                Retail, hospitality, logistics and events businesses add temporary staff for peak periods, and agency margins, overtime premiums and holiday accrual make each extra shift dearer than it looks. Planning seasonal hours from the demand forecast, and comparing agency against direct temporary contracts, keeps peak trading profitable.

                ## Milestones
                1. Peak periods and extra hours needed taken from the demand or sales forecast.
                2. Agency and direct temporary routes costed per hour, including holiday pay and employer taxes.
                3. A seasonal staffing budget agreed with operations by week.
                4. Actual seasonal cost compared with plan after each peak.
              priority: low
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Each peak has a weekly seasonal staffing budget built from the demand forecast, and actual cost is compared with it afterwards."
                cadence: cyclic
              tasks:
                - "Take peak period hours from the demand or sales forecast"
                - "Cost agency and direct temporary staff per hour with all on-costs"
                - "Agree a weekly seasonal staffing budget with operations"
                - "Start the seasonal staffing plan ten weeks before the main peak @recurring(yearly)"
            - name: Workforce plan across business units
              description: |-
                ## Purpose
                Large organisations plan headcount in many places at once, and without one structure each business unit builds its own spreadsheet with its own rates. A group workforce plan using shared rates, grade structures and position IDs, with each unit owning its own section, makes group people cost add up and comparable.

                ## Milestones
                1. One template with shared rates, grades and position IDs issued to every business unit.
                2. Each unit's plan loaded and checked against its payroll run rate.
                3. A group roll-up by unit, function, country and grade.
                4. A quarterly cycle agreed for units to resubmit.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every business unit submits its plan on the shared template each quarter, and the group roll-up ties to total payroll run rate within 2%."
                cadence: cyclic
              tasks:
                - "Issue the shared template with group rates and grades to each unit"
                - "Check each unit's plan against its payroll run rate"
                - "Build the group roll-up by unit, function, country and grade"
                - "Collect resubmitted plans from every business unit @recurring(quarterly)"
            - name: Headcount driver ratios linked to the business plan
              description: |-
                ## Purpose
                Mature finance teams stop planning every role by hand and tie headcount to the drivers that create the work: support agents per thousand customers, account managers per book of revenue, engineers per product line. Building and testing these ratios lets the hiring plan move automatically when the business plan changes.

                ## Milestones
                1. Three to five driver ratios chosen with the functions they apply to.
                2. Each ratio's history calculated from the last eight quarters.
                3. Driver-based headcount compared with the managers' bottom-up plan.
                4. Agreed ratios built into the model and reviewed each quarter.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "At least three driver ratios, each backed by eight quarters of history, are built into the model and reconciled to the bottom-up plan."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Choose three to five drivers with the functions they apply to"
                - "Calculate each ratio's history over the last eight quarters"
                - "Compare driver-based headcount with the bottom-up plan"
                - "Review driver ratios against actual workload @recurring(quarterly)"
            - name: Organisation design and span of control costing
              description: |-
                ## Purpose
                Layers of management and narrow spans of control add cost that no single hiring request reveals. Mapping the reporting lines, measuring average span and layers by function, and costing alternative structures with HR shows leadership what a flatter or more specialised organisation would cost before a redesign is announced.

                ## Milestones
                1. Reporting lines mapped from the HR system for the whole organisation.
                2. Average span of control and number of layers measured by function.
                3. Two alternative structures costed with HR on a loaded basis.
                4. Findings and costs presented to leadership with HR.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Spans and layers are measured for every function, and two alternative structures are costed and presented to leadership with HR."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Export reporting lines from the HR system"
                - "Measure average span of control and layers by function"
                - "Cost two alternative structures with HR on a loaded basis"
                - "Present the findings and costs to leadership alongside HR"
            - name: Hiring timing scenarios using time-to-fill ranges
              description: |-
                ## Purpose
                A single start date per role hides the real uncertainty: senior and specialist roles can take twice as long as planned, or fill in weeks. Modelling start dates as a range from your own time-to-fill history, and showing the people cost as low, central and high cases, gives a more honest forecast for the year.

                ## Milestones
                1. Time-to-fill history by role family taken from the recruiting system.
                2. Early, central and late start dates assigned to each open and planned role.
                3. In-year people cost shown as low, central and high cases.
                4. The range used in the forecast commentary and board papers.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "In-year people cost is shown as three cases built from actual time-to-fill history, and the range appears in the forecast commentary."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pull time-to-fill history by role family from recruiting"
                - "Assign early, central and late start dates to each open role"
                - "Calculate in-year people cost for the three cases"
                - "Add the cost range to the forecast commentary"
            - name: Capitalised development labour estimate
              description: |-
                ## Purpose
                Companies that build software or other long-lived assets may be able to capitalise part of the salaries of the people building them, which changes reported profit but not cash. Estimating the share of time and loaded cost that qualifies, with an evidence trail and the accountants' agreement, keeps the people plan consistent with the accounts.

                ## Milestones
                1. The accounting policy for capitalising labour confirmed with the accountants or auditors.
                2. Eligible teams and projects identified, with a method for recording time.
                3. Capitalisable loaded cost estimated by month in the model.
                4. Profit and cash views of the people cost shown side by side.

                ## Notes
                Whether costs qualify is an accounting judgement under your reporting standard. Agree the policy and evidence with your accountants before including it in any plan.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A monthly capitalisable labour estimate based on an agreed policy and time records sits in the model beside the cash people cost."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the accountants to confirm the policy for capitalising labour"
                - "Identify eligible teams and agree how time will be recorded"
                - "Estimate capitalisable loaded cost by month in the model"
                - "Show profit and cash views of people cost side by side"
            - name: Multi-currency people cost planning
              description: |-
                ## Purpose
                Groups that pay staff in several currencies see their reported people cost move with exchange rates even when nobody is hired. Holding each position in its pay currency, translating at a stated planning rate and showing the currency effect separately stops exchange movements being mistaken for overspend.

                ## Milestones
                1. Each position held in its local pay currency in the model.
                2. Planning exchange rates agreed with treasury or the forecast owner.
                3. Reported cost split into underlying change and currency effect.
                4. Planning rates refreshed on an agreed cycle.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The model holds every position in its pay currency and reports the currency effect on people cost separately each quarter."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Add a pay currency column to every position"
                - "Agree planning exchange rates with treasury or the forecast owner"
                - "Split the people cost variance into underlying and currency effects"
                - "Refresh the planning exchange rates in the model @recurring(quarterly)"
            - name: Long-range workforce cost model
              description: |-
                ## Purpose
                Three to five years out, people costs grow through effects a one-year plan barely sees: compounding pay rises, grade drift as staff are promoted, benefit costs rising with age, and changes in the mix between locations. A long-range model with those effects stated gives strategy and investment discussions a realistic people cost curve.

                ## Milestones
                1. Annual headcount by function for three to five years, linked to the strategic plan.
                2. Pay inflation, promotion drift and mix shift modelled as separate effects.
                3. Benefit and employer on-cost growth assumptions stated with sources.
                4. A people cost curve with a sensitivity table presented to leadership.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A three to five year people cost curve with separate pay, promotion and mix effects and a sensitivity table is presented to leadership."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Set annual headcount by function from the strategic plan"
                - "Model pay inflation, promotion drift and location mix separately"
                - "State benefit and on-cost growth assumptions with sources"
                - "Build a sensitivity table for the three largest assumptions"
---

# Headcount Cost Planning

Headcount cost planning answers two questions finance is asked every week: what do our people really cost, and what will the next hires do to the budget and the runway? It starts with foundations (a roster matched to payroll, employer on-cost rates, per-head costs and a position-level model), moves through the routines that keep the plan matched to reality, then the skills, decisions and dated submissions, versions for founders, department managers and large organisations, and finally specialist work such as driver ratios, capitalised labour and long-range workforce models.

The rhythm is a weekly recruiting and approvals check, a monthly reconciliation to payroll with a runway check, leaver tracking and a people cost pack, a quarterly plan refresh and access review, and yearly updates for statutory rates, salary bands, benefits renewals and the pay review. The Metrics log, Purchase decision and Board meeting templates pair with the monthly reconciliation, the planning tool choice and the board paper. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
