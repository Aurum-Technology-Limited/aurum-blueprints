---
id: practice-ownership.practice-financial-dashboard
name: Practice Financial Dashboard
description: "A one-page practice dashboard built on clean definitions: revenue per professional, utilisation, collection rate, overheads and profit per partner, refreshed monthly and reviewed with the partners so every red number gets an owner."
category: business
version: 1.0.0
tags: [practice-ownership, practice-financial-dashboard, small-business, kpis, management-accounts, utilisation, profitability, budgeting]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - purchase-decision
    - month-end-close
    - meeting-notes
  pillars:
    - name: Professional Practice Ownership
      emoji: "🔑"
      description: "Owning and running a professional practice: medical and dental clinics, law and accounting firms, engineering consultancies, architecture studios, veterinary practices and pharmacies, from buying or starting one through partnership agreements, billing, compliance, hiring and growth to succession and sale."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Practice Financial Dashboard
          description: "Watching the numbers of a practice: revenue per professional, utilisation, collection rate, overheads, profit per partner and a monthly review."
          projects:
            - name: Chart of accounts mapped to dashboard lines
              description: |-
                ## Purpose
                Most practice ledgers grew one nominal code at a time, so wages for professionals sit beside reception pay and lab fees are mixed into general supplies. Mapping every account to a short list of dashboard lines (professional fees, other income, professional staff cost, support staff cost, premises, consumables, technology, other overheads) means the dashboard can be refreshed from the ledger every month without hand sorting.

                ## Milestones
                1. A trial balance export with every active nominal code listed.
                2. Each code assigned to one of no more than ten dashboard lines.
                3. Codes that mix two kinds of cost flagged and split from the next month onward.
                4. The mapping table saved beside the dashboard and agreed with the bookkeeper.

                ## Notes
                Keep the mapping in a separate tab, not buried in formulas. When the bookkeeper adds a new code, the only job is to add one row to the table.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every active nominal code in the ledger appears in a mapping table assigned to exactly one dashboard line, agreed with the bookkeeper."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export the latest trial balance from the accounting system"
                - "Draft a list of no more than ten dashboard lines for the practice"
                - "Assign every nominal code to one dashboard line in a mapping tab"
                - "Review the mixed codes with the bookkeeper and agree how to split them"
            - name: Choosing the twelve practice KPIs
              description: |-
                ## Purpose
                A dashboard with forty numbers gets glanced at and ignored; one with twelve gets discussed. Choosing a fixed set that covers volume, price, capacity, cash and cost, such as revenue per professional, utilisation, collection rate, overhead ratio and profit per partner, gives the partners a shared language before any spreadsheet is built.

                ## Milestones
                1. A long list of candidate measures gathered from the partners and the practice manager.
                2. Twelve KPIs chosen, each tied to a decision someone would actually make.
                3. A one-line definition and formula written for each KPI.
                4. The list signed off by the partners as the standard set for the next twelve months.

                ## Notes
                Ask of every candidate: if this number moved sharply, what would we do differently? If nobody can answer, leave it off.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A signed-off list of twelve KPIs, each with a definition, formula and the decision it informs."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask each partner which three numbers they check first when worried"
                - "Group the suggestions into volume, price, capacity, cash and cost"
                - "Write a one-line definition and formula for each shortlisted KPI"
                - "Put the final twelve to the partners for sign-off"
            - name: Source data inventory for every KPI
              description: |-
                ## Purpose
                Each KPI draws on a different system: fees from the accounting package, hours or appointments from the practice software, headcount from payroll, receipts from the bank. Listing where each input lives, who can export it and when it is final stops the monthly refresh from stalling while someone hunts for a report.

                ## Milestones
                1. A table listing every input needed by the twelve KPIs.
                2. The source system, report name and export format recorded for each input.
                3. A named person and a day of the month when each figure is final.
                4. Gaps identified where a figure is not captured anywhere yet.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An inventory table names the source, report, owner and ready date for every input behind the twelve KPIs, with gaps listed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every input each of the twelve KPIs needs"
                - "Find the report in each system that produces that input"
                - "Agree with each data owner the day their figure is final"
                - "Note the inputs no system captures and propose a fix for each"
            - name: Twelve-month KPI baseline
              description: |-
                ## Purpose
                One month on its own tells you almost nothing in a practice with seasonal patients, year-end client rushes or one large project. Rebuilding each KPI for the last twelve month ends shows the normal range, the seasonal shape and the direction of travel, so the first live dashboard has context from day one.

                ## Milestones
                1. Inputs collected for each of the last twelve month ends.
                2. All twelve KPIs calculated for every month on the agreed definitions.
                3. Seasonal peaks and troughs noted for each KPI.
                4. A one-page summary of the year sent to the partners.

                ## Notes
                Start from the **Metrics log** template. Where a historic figure cannot be rebuilt, leave the cell blank and say why rather than estimating silently.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "All twelve KPIs are calculated for each of the last twelve month ends, with gaps explained and a summary shared with the partners."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Export monthly fee income and costs for the last twelve months"
                - "Pull monthly hours or appointment counts from the practice software"
                - "Calculate each KPI for every month end in one table"
                - "Write a one-page note on the range, season and trend of each KPI"
            - name: Revenue attribution rules by professional and service
              description: |-
                ## Purpose
                Revenue per professional is only fair if everyone agrees whose revenue a piece of work is: the clinician who treated, the partner who won the client, or the fee earner who did the hours. Writing attribution rules for shared work, referrals, supervised juniors and service lines settles the question once, before the first league table causes an argument.

                ## Milestones
                1. The main ways work is shared in the practice listed with real examples.
                2. A rule chosen for each case, such as split by recorded time or credited to the treating professional.
                3. Service line tags defined so every invoice or appointment carries one.
                4. Rules agreed by the partners and written into the dashboard notes.

                ## Notes
                Attribution for reporting is not the same as origination credit in the profit-sharing model. Keep the two separate, or the dashboard becomes a pay negotiation.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written attribution rules cover shared, referred and supervised work and every service line, approved by the partners."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Collect five recent examples of work shared between professionals"
                - "Draft an attribution rule for each kind of shared work"
                - "Define a short list of service line tags for invoices or appointments"
                - "Agree the rules at the next partner meeting and file them"
            - name: Capacity hours for each professional
              description: |-
                ## Purpose
                Utilisation means nothing until you fix the denominator: contracted hours, less leave, training, management time and public holidays. Setting realistic available hours or appointment slots for each professional, including part-timers and the owner, turns utilisation into a fair figure rather than a stick.

                ## Milestones
                1. Contracted weekly hours or clinic sessions recorded for each professional.
                2. Standard deductions agreed for leave, CPD, management and holidays.
                3. Annual and monthly available hours calculated per person.
                4. Owner and partner management time set aside explicitly rather than counted as idle.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A capacity table gives monthly available hours or slots for every professional, with the deductions used stated."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every professional with their contracted hours or sessions"
                - "Agree standard allowances for leave, CPD and management time"
                - "Calculate monthly available hours for each person"
                - "Share the capacity table with each professional to check their line"
            - name: Overhead classification into fixed, variable and people costs
              description: |-
                ## Purpose
                When fees dip, the first question is which costs move with activity and which do not. Sorting every overhead line into fixed, variable with activity, and people costs makes break-even, budget and contribution figures possible later, and shows at a glance how much of the cost base is locked in by leases and contracts.

                ## Milestones
                1. Every dashboard cost line tagged as fixed, variable or people cost.
                2. Contract end dates noted for the largest fixed costs.
                3. Variable costs linked to the activity that drives them, such as lab fees per case.
                4. A summary showing the fixed cost base as a monthly figure.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Each cost line carries a fixed, variable or people tag and the monthly fixed cost base is stated as one figure."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Tag each dashboard cost line as fixed, variable or people cost"
                - "Note the end date and notice period of the five largest contracts"
                - "Link each variable cost to the activity that drives it"
                - "Work out the monthly fixed cost base from the last three months"
            - name: Market cost of the owner's professional work
              description: |-
                ## Purpose
                Healthy reported profit can simply mean the owners are paying themselves less than an employed professional would cost. Putting a market salary against each working owner's clinical or fee-earning hours separates the return on owning the business from the pay for doing the work, which is the number buyers, lenders and future partners look at.

                ## Milestones
                1. A market salary range for an employed professional at each owner's level gathered.
                2. A notional salary set for each working owner, pro rata to hours worked.
                3. An adjusted profit line added to the dashboard below reported profit.
                4. The method explained in a short note the partners have read.

                ## Notes
                Use published salary surveys or recent recruitment offers as evidence. This is a management view only; your accountant decides how owners are paid and taxed.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The dashboard shows profit after a documented notional market salary for every working owner, with the source of each salary recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find two salary surveys or job adverts for an employed equivalent"
                - "Set a notional salary for each owner pro rata to their working hours"
                - "Add an adjusted profit line below reported profit on the dashboard"
                - "Write a short note explaining the method for the partners"
            - name: Choosing the dashboard tool
              description: |-
                ## Purpose
                The options run from a well-built spreadsheet, through the reporting module already inside the practice software, to a business intelligence tool fed from several systems. Comparing them on cost, the effort of the monthly refresh, who can maintain it if the builder leaves, and data security avoids paying for a tool the practice outgrows or never opens.

                ## Milestones
                1. Three options shortlisted, including the reports already available in current software.
                2. Each option scored on cost, refresh effort, maintainability and security.
                3. A trial of the top option using one month of real data.
                4. A decision recorded with the reasons and the person who will maintain it.

                ## Notes
                Start from the **Purchase decision** template. For most practices under ten professionals, a spreadsheet with a clean data tab is enough for the first year.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision names the dashboard tool, its annual cost and its maintainer, after a trial with one month of real data."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Check which financial reports the current practice software already offers"
                - "Shortlist three tools including a plain spreadsheet option"
                - "Score each option on cost, refresh effort, maintainability and security"
                - "Trial the leading option with last month's real figures"
            - name: First one-page practice dashboard
              description: |-
                ## Purpose
                With definitions, sources and a baseline in hand, the first live version should fit on one screen or one printed page: the twelve KPIs, this month against last month, the same month last year and target. Getting a usable version in front of the partners within two months matters more than polish, because the first reviews will reshape it anyway.

                ## Milestones
                1. A single page showing the twelve KPIs with current, prior month, prior year and target columns.
                2. Small trend lines for the last twelve months beside each KPI.
                3. A data tab separated from the presentation page.
                4. The first version circulated to the partners with a request for comments.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page dashboard showing all twelve KPIs with comparisons and trends is circulated to the partners for the first time."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Sketch the one-page layout on paper before building anything"
                - "Build a data tab that holds the monthly KPI inputs"
                - "Build the presentation page with comparisons and trend lines"
                - "Send the first version to the partners and collect comments"
            - name: Monthly dashboard refresh after the close
              description: |-
                ## Purpose
                Partners only trust a dashboard if it arrives at the same time every month with the same definitions. Fixing a refresh day a few working days after the books close, with a short checklist for loading each source, keeps the numbers current and makes the refresh a twenty-minute job rather than a weekend.

                ## Milestones
                1. A refresh day set, after the bookkeeper's month-end close is complete.
                2. A written checklist covering each source export and where it is pasted.
                3. Twelve consecutive months refreshed on or before the set day.
                4. A back-up person trained to run the refresh.

                ## Notes
                Start from the **Month-end close** template so the refresh is the last step of the close rather than a separate chore.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The dashboard is refreshed by the set day in at least eleven of twelve months, with a trained back-up named."
                cadence: rolling
              tasks:
                - "Agree with the bookkeeper the day the monthly close is final"
                - "Write a step-by-step refresh checklist for each data source"
                - "Refresh the dashboard from the closed month's figures @recurring(monthly:8)"
                - "Walk the back-up person through one full refresh"
            - name: Monthly partners' financial review
              description: |-
                ## Purpose
                Numbers that nobody discusses change nothing. A forty-five minute review each month, with the dashboard sent two days ahead and a fixed agenda (what moved, why, what we will do), turns the dashboard from a report into decisions, and keeps the finance conversation out of corridor complaints.

                ## Milestones
                1. A standing monthly slot in every partner's diary.
                2. A fixed agenda: headline KPIs, red items, actions from last month, decisions.
                3. The dashboard circulated at least two days before each meeting.
                4. Decisions and actions recorded and carried forward every month.

                ## Notes
                Start from the **Meeting notes** template. Keep the review to the numbers; strategy and people issues get their own meetings or this one runs to three hours.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The monthly review takes place in at least ten months a year, each with notes recording decisions and owners."
                cadence: rolling
              tasks:
                - "Book a recurring monthly review slot with all partners"
                - "Write the standard four-part agenda for the review"
                - "Circulate the dashboard and hold the monthly financial review @recurring(monthly:12)"
                - "Record decisions and owners in the meeting notes"
            - name: Monday flash report
              description: |-
                ## Purpose
                Waiting a month to discover a slow patch costs four weeks of reaction time. A five-line flash each Monday (fees billed or produced last week, cash received, hours or appointments delivered, bookings for the coming fortnight, and one note) gives the owner early warning without the full dashboard.

                ## Milestones
                1. Five flash measures chosen that can be pulled in under fifteen minutes.
                2. A short template that the practice manager fills each Monday.
                3. A comparison against the same week last year where data allows.
                4. Thirteen consecutive weekly flashes sent.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A five-line flash report is sent each Monday for a full quarter, with comparisons against the same week last year."
                cadence: rolling
              tasks:
                - "Pick five weekly measures that take under fifteen minutes to pull"
                - "Build a one-screen flash template the practice manager can fill"
                - "Send the weekly flash report to the partners @recurring(weekly:mon)"
                - "Add last year's same-week figures where the data exists"
            - name: Budget versus actual variance tracking
              description: |-
                ## Purpose
                Setting actual results against the budget each month, and explaining the gaps, is what makes a budget useful. Tracking each dashboard line against budget, with a short reason for any variance above an agreed size, shows early whether a bad month is timing, price, volume or cost, and stops the year-end surprise.

                ## Milestones
                1. The annual budget phased by month for every dashboard line.
                2. A variance column showing amount and percentage for each line.
                3. A rule for which variances need a written reason, such as over 10 percent and a set amount.
                4. Reasons recorded every month and reviewed at the partners' meeting.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every month shows budget, actual and variance for each line, with a written reason for each variance over the agreed threshold."
                cadence: rolling
              tasks:
                - "Phase the annual budget by month, allowing for seasonal patterns"
                - "Add budget and variance columns to the dashboard data tab"
                - "Write reasons for variances above the threshold @recurring(monthly:10)"
                - "Agree the variance threshold with the partners"
            - name: Rolling twelve-month revenue forecast
              description: |-
                ## Purpose
                The budget is fixed in January; the practice is not. Rolling a twelve-month revenue forecast forward each quarter, built from known bookings, recurring clients, staffing changes and seasonality, tells the partners whether to hire, hold or trim well before the cash shows it.

                ## Milestones
                1. A forecast method agreed: run rate, booked work and expected new work.
                2. The first twelve-month forecast built and compared with the budget.
                3. The forecast rolled forward one quarter at a time, keeping the prior version.
                4. Forecast accuracy checked against actuals after each quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A twelve-month revenue forecast is updated every quarter, with prior versions kept and accuracy against actuals recorded."
                cadence: cyclic
              tasks:
                - "Choose the forecast inputs: run rate, booked work and expected new work"
                - "Build the first twelve-month forecast beside the budget"
                - "Roll the revenue forecast forward one quarter @recurring(quarterly)"
                - "Compare last quarter's forecast with the actual result"
            - name: Quarterly KPI targets review
              description: |-
                ## Purpose
                Targets set once and never revisited end up either impossible or meaningless. A quarterly look at each KPI against target, with the partners deciding whether to hold, raise or lower it and why, keeps the dashboard honest as the practice grows, loses a professional or changes its service mix.

                ## Milestones
                1. Each KPI's target and actual for the quarter set side by side.
                2. A hold, raise or lower decision made for every target.
                3. Reasons for each change written in one sentence.
                4. Updated targets loaded into the dashboard for the next quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Each quarter, every KPI target has a recorded hold, raise or lower decision with a reason, loaded into the dashboard."
                cadence: cyclic
              tasks:
                - "Prepare a one-page table of each KPI against target for the quarter"
                - "Review the KPI targets with the partners @recurring(quarterly)"
                - "Write a one-sentence reason for each changed target"
                - "Load the new targets into the dashboard data tab"
            - name: Data quality checks before each refresh
              description: |-
                ## Purpose
                One unposted invoice batch or a duplicated payroll run can make a good month look like a disaster, and partners stop trusting the dashboard after two false alarms. A short set of checks before each refresh (totals agree to the ledger, no unallocated time, headcount matches payroll) catches errors before they reach the meeting.

                ## Milestones
                1. Six to eight check rules written, each with the expected result.
                2. Checks run before every monthly refresh and results logged.
                3. Failed checks traced to a cause and corrected at source.
                4. A record of how many checks failed each month, trending down.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Data checks are run and logged before every refresh, and failed checks are corrected at source before the dashboard is circulated."
                cadence: rolling
              tasks:
                - "Write six to eight check rules with their expected results"
                - "Run the data quality checks before the refresh @recurring(monthly:6)"
                - "Trace each failed check back to the system that caused it"
                - "Log the number of failures each month"
            - name: Annual budget built from dashboard drivers
              description: |-
                ## Purpose
                Budgets that add 5 percent to last year ignore the things that actually set revenue in a practice: professionals, available hours, utilisation, fee levels and collection. Building next year's budget from those drivers makes each assumption visible, so partners argue about whether utilisation can rise rather than about a total.

                ## Milestones
                1. Driver assumptions set for each professional: hours, utilisation and average fee.
                2. Revenue built from drivers and cost lines from known contracts and growth.
                3. The draft budget compared with the rolling forecast and last year.
                4. The final budget approved by the partners before the year starts.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A driver-based budget, with each assumption shown, is approved by the partners before the start of the financial year."
                cadence: cyclic
                effort_hours_estimate: "12"
              tasks:
                - "Collect hours, utilisation and fee assumptions for each professional"
                - "Build revenue from the drivers and costs from known contracts"
                - "Start the driver-based budget for next year @recurring(yearly)"
                - "Present the draft budget with its assumptions to the partners"
            - name: Quarterly overhead line review
              description: |-
                ## Purpose
                Overheads creep: a software seat for someone who left, an insurance policy renewed without quotes, a cleaning contract that doubled. Reviewing the top overhead lines against last year and against revenue each quarter catches the creep while it is still small and gives the practice manager a clear list to renegotiate.

                ## Milestones
                1. The top fifteen overhead lines ranked by annual cost.
                2. Each line compared with last year and as a share of revenue.
                3. Lines with unexplained growth listed with an owner to investigate.
                4. Savings achieved each quarter recorded on the dashboard.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter, the top fifteen overhead lines are reviewed against last year and revenue, with investigated items and savings recorded."
                cadence: cyclic
              tasks:
                - "Rank overhead lines by annual cost and take the top fifteen"
                - "Review overhead lines against last year and revenue @recurring(quarterly)"
                - "Assign an owner to each line with unexplained growth"
                - "Record any savings found on the dashboard"
            - name: KPI action log with named owners
              description: |-
                ## Purpose
                Practice dashboards usually fail not through bad data but through red numbers that stay red for six months while everyone nods. An action log that gives every red KPI a named owner, a specific action and a date to report back closes that gap and gives the monthly review something to follow up.

                ## Milestones
                1. An action log with columns for KPI, issue, action, owner and report date.
                2. Every red KPI from the latest dashboard entered with an owner.
                3. Each action reviewed at the next partners' meeting and closed or carried.
                4. A count of open actions shown on the dashboard itself.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every red KPI has an entry in the action log with an owner and report date, and open actions are reviewed monthly."
                cadence: rolling
              tasks:
                - "Create the action log with KPI, action, owner and date columns"
                - "Enter an action and owner for each red KPI this month"
                - "Chase owners for updates before the monthly review @recurring(monthly:11)"
                - "Show the count of open actions on the dashboard"
            - name: Reading a practice profit and loss statement
              description: |-
                ## Purpose
                Many professionals who own practices can read a clinical record or a contract at a glance but freeze at a profit and loss statement. Learning how fee income, cost of sales, gross margin, overheads and owner drawings fit together, using your own last set of accounts, makes every later dashboard conversation faster and less dependent on the accountant.

                ## Milestones
                1. Each section of the practice's last annual profit and loss explained in your own words.
                2. The difference between profit and owner drawings understood with your own figures.
                3. Gross margin and overhead ratio calculated by hand from the accounts.
                4. Three questions about the accounts answered by your accountant.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can explain each line of the practice's last profit and loss statement and have calculated gross margin and overhead ratio from it."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Print the practice's last annual profit and loss statement"
                - "Annotate each section with a one-line explanation in your own words"
                - "Calculate gross margin and overhead ratio by hand"
                - "Take your three open questions to the accountant"
            - name: Utilisation, realisation and collection chain
              description: |-
                ## Purpose
                Revenue leaks at three points: hours not worked on client or patient work, work done but not billed at full value, and bills not paid. Learning to read utilisation, realisation and collection as one chain, and to multiply them through, shows which leak costs the practice most and where effort pays back first.

                ## Milestones
                1. Each of the three ratios defined with the practice's own formula.
                2. All three calculated for the last quarter.
                3. The combined effect worked out as revenue lost against full capacity at standard fees.
                4. The largest leak named and shared with the partners.

                ## Notes
                Collection rate here is a measure on the dashboard. Chasing unpaid invoices and unbilled work belongs to your credit control routine.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Utilisation, realisation and collection are calculated for the last quarter and the revenue lost at each stage is quantified."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write the practice's formula for utilisation, realisation and collection"
                - "Calculate each ratio for the last quarter"
                - "Work out the revenue lost at each stage against full capacity"
                - "Present the largest leak to the partners in one slide"
            - name: Contribution margin by service line
              description: |-
                ## Purpose
                A busy service line is not always a profitable one: a physiotherapy class may fill the room but barely cover the therapist, while a quieter advisory service carries the firm. Calculating contribution (revenue less the direct professional and variable cost) for each service line shows what actually pays for the overheads.

                ## Milestones
                1. Revenue for the last twelve months split by service line.
                2. Direct professional time and variable costs allocated to each line.
                3. Contribution and contribution margin calculated per line.
                4. A ranked list of service lines by contribution shared with the partners.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Contribution and contribution margin are calculated for every service line over twelve months and ranked in a shared table."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Split the last twelve months of revenue by service line tag"
                - "Allocate direct professional time cost to each service line"
                - "Add the variable costs each line consumes"
                - "Rank service lines by contribution margin in one table"
            - name: Break-even revenue and fixed cost cover
              description: |-
                ## Purpose
                Knowing the monthly revenue at which the practice covers all its costs, and how many weeks of fixed costs the bank balance could carry, gives every owner a calm answer when a professional is off sick or a big client leaves. It is also the first figure a lender asks for.

                ## Milestones
                1. Monthly fixed costs and the average contribution margin confirmed.
                2. Break-even monthly revenue calculated.
                3. Months in the last year below break-even identified.
                4. Fixed cost cover in weeks shown on the dashboard.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Break-even monthly revenue and fixed cost cover in weeks are calculated and shown on the dashboard."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Confirm the monthly fixed cost base from the overhead classification"
                - "Calculate break-even revenue using the average contribution margin"
                - "Mark the months of the last year that fell below break-even"
                - "Add fixed cost cover in weeks to the dashboard"
            - name: Cash basis versus accrual basis in practice numbers
              description: |-
                ## Purpose
                Practices often look at cash in the bank, fees billed and work produced as if they were the same number, and a large insurer remittance or a year-end billing push makes the month look better or worse than it was. Understanding which basis each dashboard figure uses, and labelling it, prevents decisions based on timing quirks.

                ## Milestones
                1. Each dashboard KPI labelled as cash, billed or produced basis.
                2. One month reconciled from production to billing to cash received.
                3. Timing differences explained for the three largest gaps.
                4. A short note on bases added to the dashboard's notes tab.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every KPI is labelled by basis and one month has been reconciled from production through billing to cash, with gaps explained."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Label each KPI on the dashboard as cash, billed or produced"
                - "Reconcile last month from work produced to cash received"
                - "Explain the three largest timing gaps in a sentence each"
                - "Add a short note on bases to the dashboard notes tab"
            - name: Spreadsheet skills for maintaining the dashboard
              description: |-
                ## Purpose
                Any dashboard that only its builder can update becomes a risk the day that person leaves or is busy. Learning the handful of spreadsheet skills the dashboard actually uses (lookups against the mapping table, pivot tables, named ranges, simple charts and protected cells) lets the owner or practice manager maintain it with confidence.

                ## Milestones
                1. The functions used in the dashboard listed and each one practised.
                2. A pivot table rebuilt from the raw data tab without help.
                3. A new nominal code added to the mapping and flowing through correctly.
                4. Formula cells protected so a stray keystroke cannot break them.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The maintainer can rebuild a pivot table, add a new mapped code and protect formula cells without outside help."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every function and feature the dashboard file uses"
                - "Practise each lookup and pivot table on a copy of the file"
                - "Add a test nominal code and confirm it flows to the dashboard"
                - "Protect all formula cells and keep an unlocked master copy"
            - name: Presenting the numbers to partners
              description: |-
                ## Purpose
                Partners who are clinicians, lawyers or engineers will engage with three clear points and switch off at a wall of figures. Practising a five-minute walk-through that leads with what changed, why, and the decision needed makes the monthly review shorter and makes the person presenting the numbers more persuasive.

                ## Milestones
                1. A standard opening slide or page with three headline messages.
                2. Each message backed by one chart and one sentence.
                3. Two practice runs timed at five minutes or less.
                4. Feedback from one partner on clarity used to adjust the format.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A five-minute headline walk-through is used at the monthly review and adjusted once after partner feedback."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Pick last month's three most important changes from the dashboard"
                - "Draft one chart and one sentence for each change"
                - "Rehearse the walk-through and time it at five minutes"
                - "Ask one partner afterwards what was unclear"
            - name: Leading indicators for future revenue
              description: |-
                ## Purpose
                Most practice KPIs report what already happened. Leading indicators, such as new patient or client enquiries, conversion of enquiries to first appointments or engagements, forward bookings and proposals outstanding, show next quarter's revenue while there is still time to act.

                ## Milestones
                1. Three or four leading indicators chosen that the practice already captures or can.
                2. Twelve months of history rebuilt where possible.
                3. The lag between each indicator and revenue estimated.
                4. The indicators added to the dashboard in a separate forward-looking panel.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least three leading indicators appear on the dashboard with history and an estimated lag to revenue."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the enquiry, booking and proposal data the practice captures"
                - "Choose three or four leading indicators to track"
                - "Rebuild twelve months of history for each indicator"
                - "Add a forward-looking panel to the dashboard"
            - name: Traffic light thresholds for every KPI
              description: |-
                ## Purpose
                Without agreed thresholds, a 2 percent dip in utilisation causes the same alarm as a 20 percent one. Setting green, amber and red bands for each KPI, based on the baseline range and the targets, lets the partners see in seconds which numbers need attention and which are normal noise.

                ## Milestones
                1. Green, amber and red bands proposed for each KPI from the baseline range.
                2. Bands agreed by the partners.
                3. Conditional colouring applied on the dashboard.
                4. Bands reviewed after six months of use.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every KPI has agreed green, amber and red bands applied as colours on the dashboard, with a review date set."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Propose bands for each KPI using the twelve-month baseline range"
                - "Agree the bands at the partners' review"
                - "Apply conditional colours to the dashboard"
                - "Set a reminder to revisit the bands after six months"
            - name: Automating data feeds into the dashboard
              description: |-
                ## Purpose
                Copying exports by hand each month is slow and the main source of errors. Connecting the accounting system, practice software and payroll directly, through built-in integrations, scheduled exports or a connector tool, cuts the refresh to minutes and frees the maintainer for analysis.

                ## Milestones
                1. Each source checked for a built-in integration, scheduled export or connector.
                2. The two highest-effort manual feeds automated first.
                3. Automated figures reconciled to the manual method for two months.
                4. A note recording each connection, its login owner and what to do if it fails.

                ## Notes
                Check with your software providers and data protection lead before connecting systems that hold patient or client records. Feed only the summary figures the dashboard needs.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least two data feeds are automated and reconciled to the manual method for two months, with a written failure procedure."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Check each source system for integrations or scheduled exports"
                - "Automate the two manual feeds that take longest each month"
                - "Run automated and manual figures side by side for two months"
                - "Confirm automated feeds ran before each refresh @recurring(monthly:5)"
            - name: Profit per partner reporting
              description: |-
                ## Purpose
                Profit per equity partner is the headline figure for professional firms, but it swings with partner numbers, owner salaries and one-off items. Reporting it consistently each quarter, alongside profit per professional and adjusted profit, gives the partners a fair trend without turning the dashboard into a pay debate.

                ## Milestones
                1. A definition agreed: which profit figure, which partners, and how part-year partners count.
                2. Profit per partner calculated for the last eight quarters.
                3. Profit per professional and adjusted profit shown beside it.
                4. The figure reported each quarter with a note on one-off items.

                ## Notes
                This is a reporting measure. How profit is actually divided is set by the partnership agreement and the profit-sharing model, not the dashboard.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Profit per partner, profit per professional and adjusted profit are reported each quarter on one agreed definition."
                cadence: rolling
              tasks:
                - "Agree how part-year and salaried partners count in the figure"
                - "Calculate profit per partner for the last eight quarters"
                - "Report profit per partner with notes on one-off items @recurring(quarterly)"
                - "Show profit per professional beside the partner figure"
            - name: Cost per appointment or chargeable hour
              description: |-
                ## Purpose
                Knowing that each clinic appointment or chargeable hour costs a set amount to deliver, once rent, support staff and systems are spread across them, turns pricing and discount conversations from guesswork into arithmetic. It also shows the true cost of empty slots and unbilled time.

                ## Milestones
                1. Total monthly cost split into direct professional cost and shared overheads.
                2. Delivered appointments or chargeable hours counted for the same period.
                3. Fully loaded cost per unit calculated.
                4. The figure compared with the average fee per unit on the dashboard.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A fully loaded cost per appointment or chargeable hour is calculated and shown beside the average fee per unit."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Total last quarter's costs split into direct and shared"
                - "Count delivered appointments or chargeable hours for the quarter"
                - "Calculate the fully loaded cost per unit"
                - "Add cost per unit beside average fee per unit on the dashboard"
            - name: Staff cost ratio target
              description: |-
                ## Purpose
                People are usually the largest cost in a practice, often half of revenue or more once professionals are included. Splitting staff cost into professional and support pay, measuring each as a share of revenue and agreeing a target range gives an early signal when hiring runs ahead of income or support teams grow unnoticed.

                ## Milestones
                1. Staff costs split into professional and support, including employer taxes and benefits.
                2. Both ratios calculated for the last twelve months.
                3. A target range agreed for each ratio.
                4. The two ratios shown monthly on the dashboard.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Professional and support staff cost ratios are shown monthly against an agreed target range for each."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Split payroll cost into professional and support groups"
                - "Include employer taxes, pension and benefits in each group"
                - "Calculate both ratios for the last twelve months"
                - "Agree a target range for each ratio with the partners"
            - name: Service line keep, reprice or drop decision
              description: |-
                ## Purpose
                Once contribution by service line is known, at least one line usually stands out as costing more attention than it returns. Making a deliberate decision for the weakest lines, whether to keep as a loss leader, change the delivery model, reprice or stop, uses the dashboard for what it is for: choices.

                ## Milestones
                1. The two weakest service lines by contribution named.
                2. Strategic reasons to keep each one written down, such as referrals they bring.
                3. Options costed: keep, change delivery, reprice or stop.
                4. A decision recorded for each line with a date to check the result.

                ## Notes
                Setting the new fees themselves belongs to your fee schedule work. Here the job is deciding direction from the numbers.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded keep, change, reprice or stop decision exists for the two weakest service lines, each with a review date."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Name the two weakest service lines from the contribution table"
                - "Write down any referral or strategic value each line brings"
                - "Cost the keep, change, reprice and stop options for each"
                - "Record the partners' decision and a date to check the result"
            - name: Pruning measures nobody uses
              description: |-
                ## Purpose
                Dashboards grow: each partner adds a favourite number, and within two years the page has thirty measures and nobody reads it. Once a year, removing any measure that has not prompted a question or decision in the last twelve months keeps the page useful and the refresh light.

                ## Milestones
                1. Each measure checked against the review notes for any question or decision it prompted.
                2. Unused measures moved to an archive tab rather than deleted.
                3. The main page back to no more than fifteen measures.
                4. Partners told what was moved and how to ask for it back.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The main dashboard page holds no more than fifteen measures, with unused ones archived and the partners informed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Search the last twelve review notes for mentions of each measure"
                - "Move measures with no mention to an archive tab"
                - "Check the main page now holds fifteen measures or fewer"
                - "Tell the partners which measures moved and why"
            - name: Dashboard access and confidentiality rules
              description: |-
                ## Purpose
                Revenue per professional and profit per partner are sensitive figures: associates comparing themselves, staff seeing owner earnings, or a departing partner taking a copy. Deciding who sees which view, and keeping individual figures in a restricted version, protects relationships and the practice's commercial position.

                ## Milestones
                1. Audiences listed: equity partners, practice manager, associates, all staff.
                2. A view defined for each audience with what it shows and hides.
                3. Access permissions set in the tool or file storage to match.
                4. The rules written down and access checked whenever someone joins or leaves.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each audience has a defined dashboard view with matching access permissions, and access is checked at every joiner and leaver."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List each audience that will see some version of the dashboard"
                - "Decide which measures each audience sees"
                - "Set file or tool permissions to match each view"
                - "Add a dashboard access check to the joiner and leaver checklist"
            - name: Year-end dashboard review and annual summary
              description: |-
                ## Purpose
                Twelve monthly snapshots add up to a story the partners rarely step back to see. A year-end review that sets the full year against budget and the prior year, lists what the action log achieved and draws three lessons gives the next budget and the partner retreat a factual starting point.

                ## Milestones
                1. Full-year figures for every KPI against budget and prior year.
                2. Actions closed and still open from the action log summarised.
                3. Three lessons for next year written in plain language.
                4. A two-page annual summary circulated to the partners.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A two-page annual summary with full-year KPIs, action log results and three lessons is circulated within a month of year end."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Compile full-year KPIs against budget and the prior year"
                - "Summarise closed and open items from the action log"
                - "Write the two-page year-end dashboard summary @recurring(yearly)"
                - "Circulate the summary ahead of the budget meeting"
            - name: Lender and covenant reporting pack
              description: |-
                ## Purpose
                Practices with a bank loan or overdraft often have to report figures such as debt service cover or minimum profit each quarter, and missing a covenant quietly is far worse than flagging it early. Building the lender's required figures into the dashboard means the pack is a by-product of the monthly routine.

                ## Milestones
                1. Every reporting requirement and covenant in the facility letter listed.
                2. Each covenant calculated from dashboard figures on the lender's definition.
                3. Headroom against each covenant shown each month.
                4. Quarterly packs sent on time, with any breach risk raised early with the lender.

                ## Notes
                Read the definitions in the facility letter itself; lenders often define profit differently from your accounts. Ask your accountant to check the first calculation.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Each covenant is calculated monthly with headroom shown, and every quarterly lender pack is sent by the due date."
                cadence: cyclic
              tasks:
                - "List every reporting duty and covenant in the facility letter"
                - "Calculate each covenant on the lender's own definition"
                - "Prepare and send the quarterly lender pack @recurring(quarterly)"
                - "Show monthly headroom against each covenant on the dashboard"
            - name: Financial briefing for the partner retreat
              description: |-
                ## Purpose
                A retreat spent on strategy without shared numbers drifts into opinion. A short briefing pack, with three years of KPI trends, service line contribution, capacity and the rolling forecast, sent a week ahead, lets the partners spend the day on choices rather than on establishing the facts.

                ## Milestones
                1. Three years of headline KPIs charted on two pages.
                2. Service line contribution and capacity use summarised.
                3. Three questions the numbers raise put on the retreat agenda.
                4. The pack circulated at least a week before the retreat.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A financial briefing pack with three-year trends and three agenda questions is circulated at least a week before the retreat."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the agent to draft a two-page summary of three years of KPI trends"
                - "Add service line contribution and capacity charts"
                - "Write three questions the numbers raise for the retreat"
                - "Send the pack to the partners a week before the retreat"
            - name: Dashboard walk-through with the external accountant
              description: |-
                ## Purpose
                The practice's accountant sees the numbers once a year and may spot definitions that will clash with the statutory accounts or tax calculations. A one-off walk-through of the dashboard, mapping and adjusted profit method catches those mismatches and often surfaces ideas from other practices the accountant works with.

                ## Milestones
                1. The dashboard, mapping table and definitions sent to the accountant in advance.
                2. A meeting held to walk through each KPI and the adjusted profit method.
                3. Mismatches with the statutory accounts listed and resolved.
                4. Suggestions from the accountant recorded and decided on.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The accountant has reviewed the dashboard and definitions, with mismatches resolved and their suggestions recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book a one-hour session with the practice's accountant"
                - "Send the dashboard, mapping table and definitions a week ahead"
                - "Walk through each KPI and the adjusted profit method"
                - "Record mismatches and suggestions with an owner for each"
            - name: Mid-year reforecast
              description: |-
                ## Purpose
                Six months in, the budget has usually been overtaken by a hire, a departure, a new contract or a quieter season. A formal mid-year reforecast resets the full-year expectation, tells partners what drawings the year can support and gives the second half a target that still means something.

                ## Milestones
                1. First-half actuals against budget summarised.
                2. Second-half forecast rebuilt from current drivers.
                3. Full-year outturn compared with the original budget and explained.
                4. The reforecast approved and adopted as the second-half target.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A mid-year reforecast with a full-year outturn and explanation of the change from budget is approved by the partners."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Summarise first-half actuals against budget"
                - "Rebuild the second-half forecast from current hours and fees"
                - "Explain the gap between full-year outturn and original budget"
                - "Present the reforecast for approval as the second-half target"
            - name: Five-number dashboard for a sole practitioner
              description: |-
                ## Purpose
                Running a clinic or firm on your own, you have no partners to report to and little time, but you still need to know whether the business works. Five numbers (fees, cash received, hours or appointments delivered, overheads, and what is left for you) checked every Friday give most of the benefit at a fraction of the effort.

                ## Milestones
                1. Five numbers chosen and defined for your practice.
                2. A one-page sheet set up to hold them weekly and monthly.
                3. A monthly target set for what is left for you after overheads.
                4. Twelve weeks of Friday checks completed.

                ## Notes
                Start from the **Metrics log** template. If you outgrow five numbers, move to the full twelve, but most sole practitioners never need to.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Five defined numbers are recorded every Friday for twelve weeks against a monthly owner income target."
                cadence: rolling
              tasks:
                - "Pick and define your five numbers in one sentence each"
                - "Set up a one-page sheet with weekly and monthly columns"
                - "Record your five numbers for the week @recurring(weekly:fri)"
                - "Set a monthly target for income left after overheads"
            - name: Clinic dashboard for room, chair and appointment use
              description: |-
                ## Purpose
                In medical, dental, physiotherapy and veterinary practices, revenue is set by how many rooms or chairs are in use and how full each session is. Adding room or chair utilisation, revenue per session, did-not-attend rate and new patient numbers gives clinic owners the levers that a law firm's hours-based dashboard misses.

                ## Milestones
                1. Available sessions per room or chair defined for a typical week.
                2. Room utilisation, revenue per session and did-not-attend rate calculated.
                3. New patient numbers and recall uptake added.
                4. A clinic panel on the dashboard with these four measures.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The dashboard has a clinic panel showing room or chair utilisation, revenue per session, did-not-attend rate and new patients monthly."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Count available sessions per room or chair in a typical week"
                - "Pull booked, attended and missed appointments from the diary system"
                - "Check yesterday's takings against the appointment list @recurring(daily)"
                - "Add the clinic panel to the dashboard"
            - name: Fee earner dashboard for law and accounting firms
              description: |-
                ## Purpose
                Firms that sell time live and die on recorded hours, rates achieved and the gap between them. A fee earner panel showing chargeable hours against target, realisation, average rate achieved and revenue per fee earner, by person and team, shows where capacity is idle and where discounting has become a habit.

                ## Milestones
                1. Chargeable hour targets per fee earner taken from the capacity table.
                2. Hours, realisation and average rate achieved shown per person and team.
                3. Revenue per fee earner compared across teams.
                4. A monthly fee earner panel reviewed with each team leader.

                ## Notes
                Show individual figures only in the restricted partner view. Team totals are usually enough for the wider firm.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A fee earner panel shows hours against target, realisation, rate achieved and revenue per fee earner, reviewed monthly with team leaders."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Load each fee earner's chargeable hours target from the capacity table"
                - "Pull recorded hours and billed value per fee earner for the month"
                - "Review the fee earner panel with each team leader @recurring(monthly:20)"
                - "Compare revenue per fee earner across teams"
            - name: Project margin dashboard for design and engineering studios
              description: |-
                ## Purpose
                Architecture and engineering practices earn fees by project stage, and a project can burn its fee long before the stage is complete. Tracking fee earned against fee spent on each live project, with a forecast to complete, gives studio owners warning while there is still time to talk to the client about scope.

                ## Milestones
                1. Each live project listed with its fee by stage.
                2. Time cost to date and percentage of each stage complete recorded.
                3. Projected margin at completion calculated per project.
                4. Projects forecast below target margin flagged for the project lead.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every live project shows fee earned, time cost to date and projected margin, with projects below target flagged each month."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every live project with its agreed fee by stage"
                - "Pull time cost to date for each project from the timesheets"
                - "Ask each project lead for percentage complete of the current stage"
                - "Flag projects whose projected margin falls below target"
            - name: First-year dashboard for a new practice
              description: |-
                ## Purpose
                In the first year the questions are different: how many weeks of cash are left, how fast new clients or patients are arriving, and when the practice will cover its costs. A small launch dashboard tracking cash runway, new client numbers, weekly fees and progress to break-even replaces the full set until the practice settles.

                ## Milestones
                1. Opening cash, monthly fixed costs and a break-even date estimate recorded.
                2. Weekly new clients or patients and fees tracked from opening.
                3. Cash runway in weeks updated every week.
                4. A decision point set for moving to the full twelve-KPI dashboard.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Cash runway, new clients and weekly fees are updated every week from opening until the practice moves to the full dashboard."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Record opening cash, monthly fixed costs and a break-even estimate"
                - "Set up a weekly sheet for new clients, fees and cash"
                - "Update cash runway in weeks @recurring(weekly:wed)"
                - "Set the date to move to the full twelve-KPI dashboard"
            - name: Multi-site comparison dashboard
              description: |-
                ## Purpose
                Once a practice runs two or more locations, the totals hide a weak site behind a strong one. A site panel that shows the same core KPIs for each location, with central costs allocated on a stated basis, lets owners and site leads compare like with like and see where support is needed.

                ## Milestones
                1. Revenue and direct costs coded by site in the ledger and practice software.
                2. A method for allocating central costs agreed and written down.
                3. Core KPIs shown for each site side by side.
                4. A monthly site comparison shared with each site lead.

                ## Notes
                Agree the central cost allocation before showing site profit. Site leads will otherwise spend the meeting arguing about the allocation instead of the numbers they control.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Core KPIs and site profit after an agreed central cost allocation are shown for every site and shared monthly with site leads."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Check that revenue and direct costs are coded by site"
                - "Agree the basis for allocating central costs to each site"
                - "Build a side-by-side panel of core KPIs by site"
                - "Share the site comparison with each site lead @recurring(monthly:15)"
            - name: Benchmarking against peer practice surveys
              description: |-
                ## Purpose
                An overhead ratio of 58 percent means little until you know what similar practices achieve. Comparing the main KPIs with professional body surveys, accountancy firm benchmarks for your sector or a trusted peer group shows which numbers are genuinely out of line and which simply reflect your location or service mix.

                ## Milestones
                1. Two or three credible benchmark sources found for your profession and size.
                2. Your KPIs restated on the benchmark's definitions where they differ.
                3. Gaps against the median and upper quartile listed.
                4. The two largest gaps turned into actions on the action log.

                ## Notes
                Benchmarks vary in quality and definitions; note the sample size and year of each source. A small group of peer owners sharing figures in confidence is often more useful than a national survey.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The main KPIs are compared with at least two benchmark sources on matching definitions, and the two largest gaps are on the action log."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Find benchmark surveys for your profession and practice size"
                - "Restate your KPIs on each benchmark's definitions"
                - "Refresh the benchmark comparison with the latest surveys @recurring(yearly)"
                - "Add the two largest gaps to the KPI action log"
            - name: Unit economics of the next professional hire
              description: |-
                ## Purpose
                Adding a professional is the biggest financial decision most practices make each year, and the question is how long until they pay for themselves. Modelling ramp-up hours, expected utilisation, fees, salary, support and room costs month by month shows the payback period and the cash needed before the hire is made.

                ## Milestones
                1. Assumptions set for ramp-up, utilisation, average fee and full employment cost.
                2. A month-by-month model of contribution for the first eighteen months.
                3. Payback month and peak cash need identified.
                4. The model shared with the partners alongside the hiring proposal.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A month-by-month model shows the payback month and peak cash need for the next hire, reviewed by the partners before any offer."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Set ramp-up, utilisation and fee assumptions from past hires"
                - "Total the full employment cost including support and room costs"
                - "Model monthly contribution for the first eighteen months"
                - "Share the payback month and cash need with the partners"
            - name: Driver-based model and scenario planning
              description: |-
                ## Purpose
                Experienced owners want to ask what happens if a partner retires, fees rise 6 percent or utilisation falls by five points, and see the answer in minutes. A driver-based model linking professionals, hours, utilisation, fees, collection and cost lines to profit and cash lets the partners test scenarios before committing to them.

                ## Milestones
                1. A model where revenue, costs and profit flow from a single driver sheet.
                2. The model reconciled to last year's actual results within a small margin.
                3. Three named scenarios built, such as a retirement, a fee rise and a quiet year.
                4. Scenario results summarised on one page for the partners.

                ## Notes
                Keep the model separate from the monthly dashboard file so experiments never corrupt the reported figures.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A driver-based model reconciles to last year's actuals and produces a one-page comparison of at least three named scenarios."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Build a single driver sheet for professionals, hours, fees and costs"
                - "Link profit and cash outputs to the driver sheet"
                - "Reconcile the model to last year's actual results"
                - "Build and summarise three named scenarios for the partners"
---

# Practice Financial Dashboard

This area is for the owner, partner or practice manager of a clinic, law or accounting firm, consultancy or studio who wants to see how the practice is really doing without waiting for the year-end accounts. It starts with foundations (mapping the accounts, choosing a small set of KPIs, defining capacity and attribution, a twelve-month baseline and a first one-page dashboard), then the monthly refresh, review and variance routines, the skills of reading the numbers and explaining them, decisions about thresholds, automation and who sees what, dated events such as the year-end review and the partner retreat, versions for sole practitioners, clinics, fee-earning firms, design studios, new practices and multi-site groups, and finally benchmarking, driver-based models and scenario planning.

What repeats is a Monday flash report, a data check, refresh and variance pass early each month, the partners' monthly financial review, a monthly pass over the action log, quarterly forecasts, overhead and profit-per-partner reviews, and a yearly budget, year-end review and benchmark. The Metrics log, Purchase decision, Month-end close and Meeting notes templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
