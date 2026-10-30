---
id: finance-accounting.annual-operating-budget-build
name: Annual Operating Budget Build
description: "A budget calendar worked back from board approval, an owner for every line, driver-based revenue and cost builds phased by month, gap-closing and contingency decisions, and a budget the board approves on time."
category: business
version: 1.0.0
tags: [finance-accounting, annual-operating-budget-build, manager, founder, enterprise, budgeting, phasing, board-approval]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - metrics-log
    - risk-register
    - purchase-decision
    - board-meeting
  pillars:
    - name: Finance & Accounting
      emoji: "🧾"
      description: "The money side of a business: bookkeeping and the monthly close, cash flow, budgeting and forecasting, billing and collections, payroll, tax, audit and financial controls."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Annual Operating Budget Build
          description: "Building the yearly operating budget with department owners, agreeing targets, phasing costs and revenue, and getting sign-off from leadership or the board."
          projects:
            - name: Budget calendar from kick-off to board approval
              description: |-
                ## Purpose
                Budgets that start late end with department heads submitting numbers over a weekend and a board pack nobody has checked. Working back from the board meeting that approves the budget, a calendar with every deadline (guidelines issued, submissions due, review sessions, consolidated draft, final pack) shows whether eight to twelve weeks is enough and who sits on the critical path.

                ## Milestones
                1. The board or leadership approval date for next year's budget confirmed in writing.
                2. Every stage from guidelines to final pack dated by working back from that approval date.
                3. Each stage given a named owner and the input it depends on.
                4. The calendar sent to every budget owner and held in their diaries.

                ## Notes
                Leave at least two weeks between the consolidated draft and the board pack deadline. That gap is where the gap-closing conversation happens, and it always takes longer than planned.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated budget calendar covering every stage from guidelines to approval, with owners, is in every budget owner's diary."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Confirm the date the board or leadership will approve next year's budget"
                - "Work back from that date to set a deadline for each stage"
                - "Name an owner for each stage and the input they need"
                - "Send the calendar as diary invitations to every budget owner"
                - "Roll the calendar forward a year and confirm the approval date @recurring(yearly)"
            - name: Budget owner for every cost centre and revenue line
              description: |-
                ## Purpose
                A budget line without a named owner is a number finance invented, and nobody defends or delivers it during the year. Mapping every cost centre, revenue stream and central cost to one accountable person before the build starts means submissions come from the people who will spend the money, and orphans such as shared IT or office costs are caught early.

                ## Milestones
                1. A list of every cost centre, revenue line and central cost pool used in the budget.
                2. One named owner against each line, with a deputy for the largest.
                3. Unowned or disputed lines settled by the leadership team.
                4. Each owner's acceptance of their lines confirmed by email or in a meeting.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every budget line has one named owner who has confirmed they accept it, with no unowned lines left."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Export the list of cost centres and revenue lines from the accounting system"
                - "Put a single owner's name against every line"
                - "Take unowned and disputed lines to the leadership team to settle"
                - "Ask each owner to confirm the lines they will budget for"
                - "Re-check owners after any reorganisation or leaver @recurring(quarterly)"
            - name: Top-down targets agreed before the build starts
              description: |-
                ## Purpose
                When leadership waits to see the bottom-up numbers before saying what it wants, the build turns into several rounds of cuts and everyone learns to pad their first submission. Agreeing a revenue, margin and cost envelope at the top before the guidelines go out tells department heads what they are aiming at, and makes the later gap a conversation about choices rather than a surprise.

                ## Milestones
                1. Leadership's targets for revenue, gross margin, operating profit and total cost recorded in one place.
                2. The link from each target to the strategic plan or investor expectations written in a sentence.
                3. Indicative cost envelopes set for each department.
                4. The targets and envelopes approved by the chief executive and ready for the guidelines memo.
              priority: high
              deadlineOffsetDays: 28
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Top-down targets for revenue, margin, profit and departmental cost envelopes approved by the chief executive before submissions open."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Book a target-setting session with the chief executive and finance lead"
                - "Bring this year's expected outturn and the strategic plan figures to the session"
                - "Record the agreed revenue, margin, profit and cost targets"
                - "Split the cost target into indicative envelopes for each department"
                - "Ask leadership for the coming year's target envelope before kick-off @recurring(yearly)"
            - name: Prior-year actuals and run-rate baseline
              description: |-
                ## Purpose
                Every budget conversation starts with what is spent now, and if finance and the department head start from different numbers the meeting is wasted. A baseline of the last twelve months of actuals by cost centre and account, with one-offs stripped out and a current monthly run-rate beside it, gives everyone the same starting line and exposes costs that crept in without approval.

                ## Milestones
                1. Twelve months of actuals by cost centre and account exported and tied to the trial balance.
                2. One-off items such as a legal settlement or a recruitment drive identified and adjusted out.
                3. A normalised monthly run-rate shown beside each department's annual total.
                4. The baseline issued to budget owners inside their submission workbooks.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A normalised baseline of twelve months' actuals and current run-rate by cost centre, reconciled to the trial balance and shared with owners."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Export the last twelve months of actuals by cost centre and account"
                - "Tie the export back to the trial balance totals"
                - "Mark one-off items and show the baseline with them removed"
                - "Add the latest three-month average as a run-rate column"
                - "Pull year-to-date actuals by cost centre the month before kick-off @recurring(yearly)"
            - name: Budget guidelines memo for department heads
              description: |-
                ## Purpose
                Department heads who are not told the rules will each invent their own: one assumes a 5 percent pay rise, another budgets every vacancy filled from January, a third adds a hidden buffer. A two-page memo setting out the targets, the central assumptions, what to include, what finance will calculate centrally and the submission format makes the submissions comparable and saves a whole round of rework.

                ## Milestones
                1. Central assumptions finance will apply listed, such as pay award, inflation and exchange rates.
                2. Items calculated centrally (depreciation, rent, insurance, group recharges) separated from items owners submit.
                3. Rules for new roles, vacancies and one-off costs written in plain language.
                4. The memo agreed with the chief executive or finance director and issued with the submission workbook.

                ## Notes
                Keep it to two pages. Anything longer is not read before the first submission arrives.
              priority: high
              deadlineOffsetDays: 35
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A guidelines memo of no more than two pages, approved by leadership, issued to every budget owner with the workbook."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the assumptions finance will apply centrally for every department"
                - "Separate the costs finance calculates from the costs owners submit"
                - "Write the rules for vacancies, new roles and one-off spend"
                - "Ask the agent to tighten the draft memo to two pages"
                - "Get leadership sign-off on the memo before it is issued"
            - name: Department budget submission workbook
              description: |-
                ## Purpose
                Free-form submissions arrive in thirty layouts, and consolidating them costs finance a week of copying and pasting. One workbook per department, prefilled with its baseline, central assumptions and locked account codes, with clear input cells for drivers and comments, makes every submission consolidate in minutes and leaves a trail of what changed.

                ## Milestones
                1. A single workbook design with a cover sheet, baseline, input tab, monthly phasing and a check tab.
                2. Input cells colour-coded and every formula cell locked.
                3. Account codes and cost centres matching the chart of accounts exactly.
                4. A copy prefilled for each department and tested by one friendly budget owner before release.

                ## Notes
                Ask for a short comment on every line that moves more than an agreed threshold from the baseline. The comments are what make review sessions quick.
              priority: high
              deadlineOffsetDays: 40
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tested submission workbook, prefilled for each department, that consolidates into the master budget without manual rekeying."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Sketch the tabs the workbook needs on one page"
                - "Build the input, phasing and check tabs with locked formulas"
                - "Prefill each department's copy with its baseline and assumptions"
                - "Ask one budget owner to fill in a test copy and report anything confusing"
            - name: Central assumptions register for the budget
              description: |-
                ## Purpose
                Pay award, general inflation, energy prices, exchange rates, tax rates and interest rates each change dozens of budget lines, and one wrong number spreads quietly through the whole budget. Holding them in a single register with the value, the source, the date checked and an owner means each assumption is applied once, changed once and explained once when the board asks.

                ## Milestones
                1. Every assumption used across departments listed, with value, unit and the lines it drives.
                2. A source recorded for each: a published forecast, a contract, a bank rate or a leadership decision.
                3. The register linked into the workbooks so changing a value updates every line that uses it.
                4. The register reviewed and signed off by the finance lead before consolidation.

                ## Notes
                Sources for inflation and exchange rates are reference points, not predictions you have to defend. Say where the number came from and move on.
              priority: high
              deadlineOffsetDays: 35
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed-off assumptions register with a value, source and owner for each assumption, feeding every submission workbook."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every assumption used in more than one department's budget"
                - "Record a source and the date checked for each value"
                - "Link the workbooks to the register instead of typed-in values"
                - "Get the finance lead to sign off the register before consolidation"
            - name: Revenue budgeting method for each stream
              description: |-
                ## Purpose
                Revenue can be budgeted as last year plus a growth rate, from the sales pipeline, from customer counts and prices, or from capacity such as billable hours or covers per night. The method decides who owns the number and how it can be challenged, so choosing it deliberately, stream by stream, avoids a revenue budget that is really one optimistic percentage.

                ## Milestones
                1. Each revenue stream listed with the method used last year.
                2. Two or three methods compared for each major stream on the data available and ease of challenge.
                3. A method chosen per stream with the drivers it needs, such as volume, price, churn or utilisation.
                4. The decision written into the guidelines memo.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded revenue budgeting method for each revenue stream, with its drivers, included in the guidelines memo."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List each revenue stream and how it was budgeted last year"
                - "Check what driver data exists for each stream, such as volumes or prices"
                - "Choose a method per stream and the drivers it needs"
                - "Add the chosen methods to the guidelines memo"
            - name: Budget version control and file naming rules
              description: |-
                ## Purpose
                By the third review round there are files called final, final two and final revised, and the board pack gets built from the wrong one. A simple rule for version numbers, a single master folder and a log of what changed in each version means anyone can tell which numbers are current and why the total moved between drafts.

                ## Milestones
                1. One master folder for the budget with restricted edit rights.
                2. A naming rule with year, version number and status such as draft, review or approved.
                3. A version log recording the date, author and reason for each change in the total.
                4. Old versions archived read-only instead of deleted.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every budget file in the master folder follows the naming rule, and each change in the total since version one is in the version log."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create one master budget folder and limit who can edit it"
                - "Write the naming rule with year, version and status"
                - "Start a version log with date, author, change and new total"
                - "Move old drafts into a read-only archive subfolder"
            - name: Annual budget kick-off with department heads
              description: |-
                ## Purpose
                A forty-five minute kick-off, held on the date the calendar says, sets the tone for the whole cycle: the targets, the guidelines, the deadlines and the support finance will give. Running it every year with the same agenda, and writing down the questions, turns the budget from an email nobody reads into a commitment people have heard in person.

                ## Milestones
                1. A standard kick-off agenda covering targets, assumptions, workbook, deadlines and support.
                2. The meeting held with every budget owner or their deputy present.
                3. Questions raised captured and answered in a short follow-up note.
                4. The follow-up note issued within two working days.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "A kick-off held each year with every budget owner represented and a written question and answer note issued within two working days."
                cadence: cyclic
              tasks:
                - "Draft a standard kick-off agenda you can reuse each year"
                - "Hold the budget kick-off with all department heads @recurring(yearly)"
                - "Capture every question asked during the meeting"
                - "Send the answers as a follow-up note within two working days"
            - name: Submission tracker and chase routine
              description: |-
                ## Purpose
                Two departments always submit late, and their numbers hold up consolidation for everyone else. A tracker showing each department's status (not started, draft, submitted, reviewed, agreed), with a fixed chase three days and one day before each deadline, makes lateness visible early and gives the finance lead facts to escalate with.

                ## Milestones
                1. A tracker listing every department with status, owner and date of last contact.
                2. Chase messages drafted for three days and one day before each deadline.
                3. An escalation route agreed with the chief executive for submissions more than two days late.
                4. Every department submitted by the deadline, or escalated on the day it was missed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every department's submission status recorded through the cycle, with chases sent on schedule and late submissions escalated the same day."
                cadence: cyclic
              tasks:
                - "Set up a tracker with every department and five status stages"
                - "Draft the two standard chase messages"
                - "Agree the escalation route for late submissions with the chief executive"
                - "Update each department's status after every submission or chase"
            - name: Quarterly budget assumption refresh
              description: |-
                ## Purpose
                Assumptions set in September can be stale by March: an energy contract renews higher, the pay award settles above plan or the currency moves. Checking the register every quarter, even after the budget is approved, shows how far reality has drifted from what the budget assumed and gives next year's build a head start.

                ## Milestones
                1. A quarterly slot in the finance calendar for the refresh.
                2. Each assumption compared with its latest source value and the difference recorded.
                3. Assumptions that moved materially flagged to leadership with the rough effect on profit.
                4. Four quarterly refreshes completed in the year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly refreshes completed in the year, each recording current values against budgeted assumptions, with material moves flagged."
                cadence: rolling
              tasks:
                - "Add a quarterly assumption check to the finance calendar"
                - "Compare each assumption with its latest source value @recurring(quarterly)"
                - "Estimate the profit effect of any assumption that moved materially"
                - "Send leadership a short note on assumptions that have drifted"
            - name: Monthly run-rate snapshot for next year's baseline
              description: |-
                ## Purpose
                Building next year's baseline from scratch every autumn repeats analysis that could have been captured as the year went. A ten-minute monthly snapshot of each department's run-rate, with one-off items tagged as they happen, means the baseline is mostly built before kick-off and the one-offs are explained by the people who paid them.

                ## Milestones
                1. A snapshot log with month, department, run-rate and tagged one-offs.
                2. One-off items tagged in the month they are posted, with a line of explanation.
                3. Twelve monthly snapshots captured before the next kick-off.
                4. The snapshots used to prefill next year's baseline.

                ## Notes
                Start from the **Metrics log** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive monthly snapshots of departmental run-rate with one-offs tagged, used to prefill next year's baseline."
                cadence: rolling
              tasks:
                - "Create a snapshot log with month, department, run-rate and one-offs"
                - "Record each department's monthly run-rate and tag one-off items @recurring(monthly:9)"
                - "Ask budget owners to explain any spend you could not tag"
            - name: Contract renewals and price increase register
              description: |-
                ## Purpose
                Many budget surprises are written into contracts months in advance: software licences that renew at list price, rent reviews, indexed service charges and annual uplifts. A register of material contracts with renewal date, notice period and uplift clause puts those increases into the budget, and gives you time to renegotiate some before the notice window closes.

                ## Milestones
                1. Every contract above an agreed annual value listed with supplier, value, renewal date and notice period.
                2. Uplift and indexation clauses noted for each contract.
                3. Renewals falling in the budget year costed at the expected price.
                4. Notice deadlines in the next six months flagged to the contract owner.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A register of material contracts with renewal dates and uplift terms, checked monthly, with every budget-year renewal costed."
                cadence: rolling
              tasks:
                - "List every supplier contract above the agreed value threshold"
                - "Record renewal date, notice period and uplift clause for each"
                - "Cost the renewals that fall in the budget year"
                - "Check for notice deadlines falling in the next six months @recurring(monthly:16)"
            - name: Budget risks and opportunities register
              description: |-
                ## Purpose
                A single-number budget hides how much of it is uncertain: a large customer renewal, a pending price rise, a grant that may not arrive. Keeping a register of risks and opportunities beside the budget, each with a value and a likelihood, lets leadership see the range around the number and decide what to hold contingency against.

                ## Milestones
                1. Each material risk and opportunity listed with an owner, value, likelihood and trigger date.
                2. The net weighted value shown beside budgeted profit.
                3. The register included as one page in the board budget pack.
                4. Each item closed, realised or rolled forward at the quarterly review.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A risks and opportunities register with values and likelihoods, included in the board pack and reviewed every quarter."
                cadence: rolling
              tasks:
                - "Ask each budget owner for their top two risks and top two opportunities"
                - "Value each item and give it a likelihood and an owner"
                - "Put the net weighted total beside budgeted profit"
                - "Review open risks and opportunities with leadership @recurring(quarterly)"
            - name: In-year budget reallocation and change log
              description: |-
                ## Purpose
                Once the year starts, money moves: a marketing underspend is released to sales, a project slips, a hire is approved outside the plan. Recording each approved reallocation with who agreed it keeps the original budget intact for comparison, makes the current budget always known, and stops anyone spending the same saving twice.

                ## Milestones
                1. A change log with date, from line, to line, amount, reason and approver.
                2. A rule for which changes budget owners can make and which need leadership approval.
                3. The original approved budget and the current budget held as separate versions.
                4. Every reallocation in the year logged before the money is spent.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every in-year reallocation is recorded with its approver, and the original and current budgets reconcile through the change log."
                cadence: rolling
              tasks:
                - "Set up a change log with from, to, amount, reason and approver"
                - "Write the rule for which changes owners can approve themselves"
                - "Save the approved budget as a locked original version"
                - "Update the current budget version from the change log @recurring(monthly:23)"
            - name: Budget lessons review after sign-off
              description: |-
                ## Purpose
                Straight after approval everyone remembers what went wrong: the workbook formula that broke, the department nobody chased, the assumption changed on the last day. A one-hour review within a month of sign-off, with three changes written into next year's calendar and guidelines, is how the cycle gets shorter each year instead of repeating itself.

                ## Milestones
                1. Feedback collected from finance and at least three budget owners.
                2. A list of what to stop, start and keep for next year.
                3. Three changes chosen and written into next year's calendar or guidelines.
                4. The review notes saved in the budget master folder.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A lessons review held within a month of each sign-off, with three changes recorded in next year's calendar or guidelines."
                cadence: cyclic
              tasks:
                - "Send a three-question feedback form to budget owners"
                - "Hold a one-hour lessons review within a month of approval @recurring(yearly)"
                - "Choose three changes for next year's cycle"
                - "Write the changes into next year's calendar and draft guidelines"
            - name: Approved budget letters to each budget holder
              description: |-
                ## Purpose
                Department heads often hear their final budget second-hand, after cuts made in the last week, and spend the first quarter working to the number they submitted. A short letter to each holder with their approved annual total, monthly phasing, headcount and any conditions, sent within a week of approval, closes the loop and starts the year on agreed figures.

                ## Milestones
                1. A letter format with annual total, monthly phasing, headcount, conditions and changes from the submission.
                2. Each holder's letter produced from the approved version, not a draft.
                3. Letters sent within a week of approval.
                4. Each holder's acknowledgement recorded.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every budget holder receives a letter setting out their approved budget within a week of approval, and acknowledges it."
                cadence: cyclic
              tasks:
                - "Write a one-page budget letter format"
                - "Show the changes between each holder's submission and the approved figure"
                - "Send every budget holder their approved budget letter @recurring(yearly)"
                - "Record each holder's acknowledgement in the tracker"
            - name: Driver-based budgeting basics
              description: |-
                ## Purpose
                Driver-based budgets start from the activity that causes the cost or revenue (customers, orders, staff, square metres, hours) and multiply by a rate, so when activity changes the budget can be re-run instead of rebuilt. Learning to spot the five or six drivers that explain most of the business is the biggest single step from a spreadsheet of guesses to a budget you can defend.

                ## Milestones
                1. The difference between driver-based and incremental budgeting explained in your own words.
                2. The five or six drivers that explain most of revenue and cost identified for your business.
                3. One department's budget rebuilt from drivers as a worked example.
                4. The rebuilt department compared with its incremental version and the differences explained.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One department's budget rebuilt from drivers, with the drivers listed and the differences from the incremental version explained."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read a short guide to driver-based budgeting"
                - "List the activities that cause most of your revenue and costs"
                - "Rebuild one department's budget as driver multiplied by rate"
                - "Compare the driver version with last year's incremental version"
            - name: Monthly phasing of revenue and costs
              description: |-
                ## Purpose
                An annual total divided by twelve makes every month look wrong: retail peaks in December, insurance is paid in one month, pay rises start on a set date and February has fewer working days. Learning to phase each line by its real pattern (seasonality, working days, contract dates, hire dates) makes the monthly budget a fair yardstick from the first month.

                ## Milestones
                1. Each major line tagged with a phasing method: seasonal profile, working days, contract dates or even.
                2. Seasonal profiles built from two or three years of monthly actuals.
                3. Known dated items such as pay awards, renewals and annual fees placed in their actual month.
                4. The phased budget checked so the twelve months add back to the annual total.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every major budget line has a documented phasing method, and the phased months add back exactly to the annual total."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Tag each major budget line with how it should be phased"
                - "Build seasonal profiles from the last two years of monthly actuals"
                - "Place pay awards, renewals and annual fees in their real months"
                - "Check that the twelve phased months add back to the annual total"
            - name: Fixed, variable and step costs in the budget
              description: |-
                ## Purpose
                Leadership will ask what happens to profit if sales come in 10 percent lower, and the answer depends on which costs move with volume. Classifying each cost as fixed, variable or step (a new supervisor for every twenty staff, a second warehouse shift past a certain volume) lets you answer in minutes and stops variable costs being budgeted as if they were fixed.

                ## Milestones
                1. Every cost line classified as fixed, variable or step.
                2. Variable costs expressed as a rate per unit of their driver.
                3. Step costs shown with the volume at which the next step is triggered.
                4. A quick table of profit at minus 10 percent, budget and plus 10 percent volume.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every cost line classified, with variable rates and step triggers recorded and a three-point volume sensitivity table produced."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Classify each cost line as fixed, variable or step"
                - "Express each variable cost as a rate per unit of volume"
                - "Note the volume that triggers each step cost"
                - "Build a table of profit at three volume levels"
            - name: Budgeting for inflation, pay awards and supplier increases
              description: |-
                ## Purpose
                Applying one inflation rate to every cost line is the commonest budget shortcut and often the most wrong: pay, energy, software, rent and freight move at very different rates and on different dates. Learning to treat each cost family separately, with its own rate, effective date and source, makes the cost budget hold up once the year starts.

                ## Milestones
                1. Cost lines grouped into families such as pay, energy, rent, software, freight and materials.
                2. A rate, effective date and source recorded for each family.
                3. Price changes already notified by suppliers built in at their actual amounts.
                4. The blended cost increase compared with the headline inflation rate and explained.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each cost family has its own rate, date and source in the budget, and the blended increase is explained against headline inflation."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Group cost lines into families that move at different rates"
                - "Find a source and effective date for each family's increase"
                - "Build in supplier price notices already received at their actual amounts"
                - "Explain the blended increase against headline inflation in one paragraph"
            - name: Zero-based review of discretionary spend
              description: |-
                ## Purpose
                Discretionary lines such as travel, consultants, subscriptions, events and marketing tend to roll forward each year at last year plus inflation. Rebuilding them from zero once, asking what each item buys and what would happen without it, usually finds spend nobody would approve today and gives owners a reason to own what remains.

                ## Milestones
                1. Discretionary lines selected for the exercise, with last year's spend.
                2. Each item justified by its owner with what it buys and what happens without it.
                3. Items ranked as essential, valuable or optional.
                4. The rebuilt budget compared with last year plus inflation and the difference recorded.

                ## Notes
                Run it on discretionary lines only. Applying zero-based methods to every line in one year exhausts owners and slows the cycle.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Discretionary lines rebuilt from zero with every item ranked, and the saving against last year plus inflation recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose the discretionary lines to rebuild from zero"
                - "Ask owners to justify each item with what it buys"
                - "Rank every item as essential, valuable or optional"
                - "Compare the rebuilt total with last year plus inflation"
            - name: Base, downside and upside budget cases
              description: |-
                ## Purpose
                Boards increasingly ask what the plan looks like if the year goes badly, and a single-case budget invites the question with no answer. Building a downside and an upside around the base, changing only the five or six drivers that matter, with a short list of actions you would take in the downside, shows the board the range and that management has a plan for it.

                ## Milestones
                1. The drivers to flex chosen and agreed with leadership.
                2. Downside and upside values for each driver recorded with a reason.
                3. Profit and cash outcomes for all three cases on one page.
                4. A list of actions management would take if the downside appears, with trigger points.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page comparison of base, downside and upside budget cases, with downside actions and triggers, included in the board pack."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose the five or six drivers that matter most to profit"
                - "Agree downside and upside values for each with leadership"
                - "Run all three cases and put the results on one page"
                - "List the actions and trigger points for the downside case"
            - name: Budget reading session for non-finance managers
              description: |-
                ## Purpose
                Many department heads are asked to own a budget without ever being shown how one is put together, so they nod through review meetings and then overspend by accident. A one-hour session for them, covering cost versus cash, what accruals and phasing mean and how to read their own budget pages, turns review meetings into real conversations.

                ## Milestones
                1. A one-hour session outline using a department's real budget pages as the example.
                2. The session held for all budget owners new to the role in the last year.
                3. A one-page glossary of the ten terms that come up most.
                4. Feedback collected and two points turned into improvements to the workbook.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A budget reading session delivered to every new budget owner, with a one-page glossary issued and feedback recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick a real department's budget pages to use as the example"
                - "Write a one-page glossary of the ten terms owners ask about most"
                - "Run the one-hour session for new budget owners"
                - "Turn two pieces of feedback into workbook improvements"
            - name: Revenue budget built with sales leadership
              description: |-
                ## Purpose
                Revenue drives most of the budget, yet it is often a number the sales director names in one meeting. Building it with sales leadership from customers, pipeline, win rates, prices and churn, with each assumption owned and testable, gives the cost budget a credible top line and makes the sales targets and the finance plan the same numbers.

                ## Milestones
                1. Existing customer revenue projected from contracts, renewals and expected churn.
                2. New business built from pipeline, win rates and sales capacity.
                3. Price changes and their timing agreed and applied.
                4. The revenue budget reconciled to sales targets and signed off by the sales lead and finance.

                ## Notes
                Keep sales quota and budgeted revenue visibly separate if quotas are set higher. Leadership should see both numbers and the gap between them.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A revenue budget built from customers, pipeline, win rates and prices, reconciled to sales targets and signed by the sales lead."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Book a revenue build session with the sales lead"
                - "Project existing customer revenue from contracts and expected churn"
                - "Build new business from pipeline, win rates and sales capacity"
                - "Reconcile the revenue budget with the sales team's targets"
                - "Get the sales lead's written sign-off on the revenue budget"
            - name: Gap-closing options when bottom-up misses the target
              description: |-
                ## Purpose
                The first consolidation almost always lands short of the top-down target, often by more than leadership expected. A prepared menu of gap-closing options, each costed, owned and rated for risk (price rises, deferred hires, cut discretionary spend, revenue stretch), lets leadership choose in one meeting instead of asking every department to cut 5 percent across the board.

                ## Milestones
                1. The gap between consolidated bottom-up and top-down target measured at revenue, cost and profit.
                2. A list of at least eight options, each with value, owner and risk rating.
                3. Leadership's chosen options recorded, with what was rejected and why.
                4. Departments told how their budgets change before the final version is built.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The gap to target closed or explicitly accepted by leadership, with each chosen option costed, owned and recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Measure the gap to target at revenue, cost and profit"
                - "List at least eight costed gap-closing options with owners"
                - "Rate each option for delivery risk"
                - "Record which options leadership chose and why others were rejected"
                - "Tell each affected department how its budget changes"
            - name: Contingency reserve size and release rules
              description: |-
                ## Purpose
                Without a central contingency, owners pad their own lines and the padding gets spent. With one, someone has to decide how big it is and who can release it. Agreeing a contingency held centrally, sized against the risks register, with written release rules, removes the hidden buffers and gives leadership one pot to manage.

                ## Milestones
                1. The contingency sized against the risks register and agreed as an amount or a percentage of cost.
                2. A rule that department lines carry no padding written into the guidelines.
                3. Release rules recorded: who can approve, for what, and how it is logged.
                4. The contingency shown as a separate line in the approved budget.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A central contingency sized against the risks register, with written release rules, appears as its own line in the approved budget."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Size the contingency against the risks and opportunities register"
                - "Write the no-padding rule into the guidelines memo"
                - "Agree who can release contingency and for what purposes"
                - "Review contingency released and remaining with leadership @recurring(quarterly)"
            - name: Stretch target versus committed budget
              description: |-
                ## Purpose
                Some leaders want a stretch number that motivates; boards and lenders want a number the company will reliably hit. Deciding whether to run one budget, or a committed budget plus a separate stretch target, and who sees which, prevents a stretch figure from becoming the basis for hiring and spending the business cannot afford if it is missed.

                ## Milestones
                1. The options written down: one budget, or committed plus stretch.
                2. The audience for each number agreed: board, lenders, sales team, department heads.
                3. The rule for which number drives hiring and spending commitments recorded.
                4. The decision approved by the chief executive and reflected in the board pack.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on single or two-number budgeting, naming which figure drives spending commitments, approved by the chief executive."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a half-page note comparing one budget with committed plus stretch"
                - "List who would see each number and why"
                - "Agree which number drives hiring and spending commitments"
                - "Record the decision and reflect it in the board pack"
            - name: Budgeting tool decision, spreadsheet or planning software
              description: |-
                ## Purpose
                Spreadsheets serve most companies well until there are many departments, several currencies or more than two review rounds, at which point broken links and emailed files cost more than a planning tool would. Comparing better spreadsheets with two or three planning tools against your real pain points gives a decision based on your cycle, not on a vendor demo.

                ## Milestones
                1. The five biggest problems with this year's budget process written down with the time each cost.
                2. A shortlist of spreadsheet improvements and two or three planning tools.
                3. Each option scored against the same criteria, including cost, set-up effort and links to the accounting system.
                4. A decision recorded, with a go-live date that lands before the next kick-off.

                ## Notes
                Start from the **Purchase decision** template. Never switch tools in the middle of a budget cycle.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scored comparison of at least three options and a recorded decision with a go-live date before the next kick-off."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write down the five biggest problems with this year's process"
                - "Shortlist spreadsheet fixes and two or three planning tools"
                - "Score each option against the same criteria"
                - "Record the decision and a go-live date before the next kick-off"
            - name: Budget integrity checks before leadership review
              description: |-
                ## Purpose
                Nothing loses the room faster than a budget that does not add up, or a pay line that disagrees with the headcount schedule. A standard set of checks run on every consolidated version, covering totals, phasing, headcount, account mapping and movements against baseline, catches the errors before leadership does.

                ## Milestones
                1. A check list covering totals, monthly phasing, headcount ties, account mapping and sign conventions.
                2. The checks built into a tab that shows pass or fail for each consolidated version.
                3. Movements over an agreed threshold against baseline listed with the owner's comment.
                4. Every version sent to leadership passing all checks.
              priority: medium
              deadlineOffsetDays: 80
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A check tab that runs on every consolidated version, with every version sent to leadership passing all checks."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the checks every consolidated version must pass"
                - "Build them into a pass or fail tab in the master budget"
                - "Pull movements over the threshold with owners' comments"
                - "Run the checks before every version goes to leadership"
            - name: Outturn to budget profit bridge
              description: |-
                ## Purpose
                The question every board asks first is why next year's profit differs from this year's. A bridge that walks from this year's expected outturn to the budget in six to eight steps (price, volume, mix, pay, inflation, new investment, one-offs) answers it on one page and forces finance to understand its own numbers.

                ## Milestones
                1. This year's expected outturn agreed as the starting point.
                2. Six to eight bridging steps defined, each with a value and a sentence of explanation.
                3. The bridge reconciling exactly to budgeted profit.
                4. A chart version prepared for the board pack.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page bridge from this year's outturn to budgeted profit in six to eight explained steps, reconciling exactly, in the board pack."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Agree this year's expected outturn as the bridge starting point"
                - "Define the six to eight steps that explain the change"
                - "Make sure the bridge reconciles exactly to budgeted profit"
                - "Ask the agent to draft one sentence explaining each step"
            - name: Shortening the budget cycle to six weeks
              description: |-
                ## Purpose
                Twelve-week budget cycles consume a quarter of the finance year and are usually out of date by the time they are approved. Cutting the cycle to around six weeks, by setting targets first, prefilling workbooks, limiting review rounds to two and deciding gap-closing in one meeting, frees time and produces a budget built on fresher numbers.

                ## Milestones
                1. Last cycle's stages and elapsed weeks measured from the calendar and version log.
                2. The three stages that took longest identified with the reason.
                3. A redesigned calendar of around six weeks agreed with leadership.
                4. The next cycle run to the new calendar and its elapsed time recorded.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The next budget cycle completed in about six weeks from kick-off to approval, measured against the previous cycle's elapsed time."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Measure how many weeks each stage took last cycle"
                - "Find the three stages that took longest and why"
                - "Redesign the calendar around targets first and two review rounds"
                - "Record the elapsed weeks of the next cycle against the old one"
            - name: First consolidated draft review with leadership
              description: |-
                ## Purpose
                The first time leadership sees the whole budget together is the moment priorities collide, and it goes far better with a prepared pack than a live spreadsheet. A half-day session with the consolidated draft, the gap to target, the bridge, the key risks and a menu of options ends with decisions, not a request for another version.

                ## Milestones
                1. A draft pack with summary, gap to target, bridge, risks and options sent two days ahead.
                2. The session held with the chief executive and every function lead.
                3. Decisions and open questions captured with owners.
                4. Changes agreed in the session made in a new numbered version within a week.

                ## Notes
                Open the session with the gap and the options, not the departmental detail. Detail is for the challenge sessions.
              priority: medium
              deadlineOffsetDays: 70
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A leadership review of the consolidated draft held, with decisions recorded and a new version produced within a week."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Book a half-day leadership session after the consolidation date"
                - "Prepare a draft pack with gap, bridge, risks and options"
                - "Send the pack two days before the session"
                - "Record every decision and open question with an owner"
            - name: Department budget challenge sessions
              description: |-
                ## Purpose
                Submissions emailed in and accepted unread are not a budget, they are a wish list. A forty-five minute challenge session with each department head, finance and one senior leader, working through the biggest movements, new requests and assumptions, tests the numbers while the owner is in the room and secures their commitment to the result.

                ## Milestones
                1. A session booked with every department within a week of submissions closing.
                2. The five largest movements and new requests for each department prepared beforehand.
                3. Agreed changes and follow-ups recorded at the end of each session.
                4. Each department's revised submission received within three working days.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Challenge sessions held with every department, with agreed changes recorded and revised submissions received within three working days."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Book a challenge session with each department head"
                - "Prepare each department's five largest movements and new requests"
                - "Record the changes agreed at the end of each session"
                - "Chase revised submissions due within three working days"
            - name: Board budget approval meeting
              description: |-
                ## Purpose
                Board approval is the formal end of the build and the moment the budget becomes the yardstick for the year. A pack sent a week ahead, with a summary, the bridge, the three cases, the risks register and the resolution to approve, and a presenter who knows where every number came from, gets approval in one meeting instead of a request to come back.

                ## Milestones
                1. The board pack and approval paper issued at least a week before the meeting.
                2. Likely board questions listed with prepared answers.
                3. The budget approved, or approved with conditions recorded in the minutes.
                4. The approved version locked and saved as the original budget.

                ## Notes
                Start from the **Board meeting** template.
              priority: high
              deadlineOffsetDays: 100
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The budget is approved by the board, with any conditions minuted and the approved version locked as the original budget."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Confirm the board's paper deadline and pack format with the company secretary"
                - "Assemble the pack with summary, bridge, cases and risks"
                - "List the ten questions the board is most likely to ask, with answers"
                - "Lock the approved version and save it as the original budget"
            - name: Loading the approved budget into the accounting system
              description: |-
                ## Purpose
                Budgets that live only in a spreadsheet cannot be compared with actuals automatically, and the first month's report gets built by hand. Loading the approved, phased budget into the accounting or reporting system by account and cost centre before the year starts means budget holders see actual against budget from the first close.

                ## Milestones
                1. The approved version mapped to accounts and cost centres in the system's import format.
                2. The budget imported for all twelve months of the new year.
                3. Import totals reconciled to the approved budget by department.
                4. A test report showing budget by cost centre checked with two budget holders.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The approved phased budget is loaded into the accounting system before the new year, reconciled to the approved total by department."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Download the accounting system's budget import template"
                - "Map the approved budget to accounts and cost centres"
                - "Import all twelve months and reconcile totals by department"
                - "Check a test budget report with two budget holders"
            - name: Budget reset after a major mid-year shock
              description: |-
                ## Purpose
                Sometimes the budget stops being useful within months: a major customer leaves, a funding round slips, prices jump. Rather than letting everyone quietly ignore it, a formal reset agrees which parts stand, which are rebuilt and how performance is judged for the rest of the year, while the original stays on record.

                ## Milestones
                1. The trigger for a reset agreed with leadership, such as a profit change beyond a set percentage.
                2. The affected lines rebuilt using the existing workbooks and assumptions register.
                3. A revised budget approved, with the original kept for reference.
                4. Budget holders told in writing which figures they are now measured against.

                ## Notes
                A reset is not the same as a monthly reforecast. Use it rarely, when the original budget no longer helps anyone decide anything.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A reset trigger agreed in advance and, if triggered, a revised budget approved with holders told in writing and the original kept."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Agree with leadership what event would trigger a budget reset"
                - "List which lines would be rebuilt and which would stand"
                - "Keep the original budget locked when a revised version is approved"
                - "Write to budget holders confirming the figures they are measured against"
            - name: First annual budget for a founder-led company
              description: |-
                ## Purpose
                Founders often run on instinct and the bank balance until an investor, lender or first finance hire asks for a budget. A first budget does not need departments or a planning tool: revenue by stream, the people you have and plan to hire, the main costs and a monthly phasing, built in one spreadsheet over two or three evenings, is enough to make better calls on hiring and spend.

                ## Milestones
                1. Revenue by stream for the coming year, with the assumption written beside each.
                2. Current team and planned hires costed with start months.
                3. The ten largest non-pay costs budgeted by month.
                4. A one-page summary shared with a co-founder, investor or adviser for challenge.

                ## Notes
                Keep it simple enough to update in an hour. A first budget that is roughly right and used beats a detailed one abandoned by the third month.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A monthly budget covering revenue by stream, team costs and the ten largest costs, with a summary shared with an adviser or investor."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Block two evenings in the diary for the first budget"
                - "List revenue streams and write down an assumption for each"
                - "Cost the current team and planned hires by start month"
                - "Budget the ten largest non-pay costs month by month"
                - "Send the summary to an adviser or investor for challenge"
            - name: Owning a department budget for the first time
              description: |-
                ## Purpose
                Newly promoted managers are often handed a budget template and a deadline with no idea what last year's number contained. Learning what is in your lines, which costs you control, where last year's money went and what your team needs next year turns the first submission from a guess into a plan you can defend in the challenge session.

                ## Milestones
                1. Last year's spend on each of your lines explained with finance.
                2. The costs you control separated from those charged to you centrally.
                3. Your team's plans for next year turned into costed requests.
                4. A submission handed in on time with a comment on every line that moved.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A first department budget submitted on time, with every moved line explained and controllable costs identified."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask finance for a walk-through of last year's spend on your lines"
                - "Mark which costs you control and which are charged centrally"
                - "Turn your team's plans into costed requests"
                - "Note any spend you had not budgeted for, ready for next year's submission @recurring(monthly:12)"
            - name: Investor-backed startup budget and board plan
              description: |-
                ## Purpose
                For a venture-backed company the annual budget is also the plan the board will hold the founders to, and it has to show how far the money goes and what milestones it buys. Building it around the milestones the next funding round will need (revenue, customers, product), with spend phased to those milestones and runway shown, makes the budget the board conversation rather than a side document.

                ## Milestones
                1. The milestones the next funding round will need agreed with the board or lead investor.
                2. Spend phased against those milestones, with hires timed to them.
                3. Months of runway at budgeted burn shown on the summary page.
                4. The plan approved by the board with the milestones minuted.

                ## Notes
                Runway here comes from the budget. Keep the detailed weekly cash forecast as a separate tool.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A board-approved budget phased against agreed funding milestones, showing runway at budgeted burn, with the milestones minuted."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Agree the milestones the next funding round needs with the lead investor"
                - "Phase hires and spend against those milestones"
                - "Show months of runway at budgeted burn on the summary page"
                - "Present the plan for board approval and minute the milestones"
            - name: Enterprise budget across divisions and regions
              description: |-
                ## Purpose
                In a larger group the budget is built in many places at once: divisions, regions and shared service centres, each in its own currency and with its own local deadlines. A hub-and-spoke process with one central calendar, budget exchange rates issued once, standard submission formats and agreed intercompany charges keeps fifty submissions consistent enough to consolidate in days.

                ## Milestones
                1. A group budget calendar with divisional and regional deadlines that roll up to the board date.
                2. Budget exchange rates issued centrally and used by every entity.
                3. Intercompany recharges agreed in advance between giving and receiving entities.
                4. All divisional submissions consolidated with intercompany charges netting to zero.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All divisional and regional submissions consolidated at central budget rates, with intercompany recharges agreed and netting to zero."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Set divisional deadlines that roll up to the group board date"
                - "Issue one set of budget exchange rates to every entity @recurring(yearly)"
                - "Agree intercompany recharges between giving and receiving entities"
                - "Confirm intercompany charges net to zero in the consolidated budget"
            - name: Joining mid-cycle as the new finance lead
              description: |-
                ## Purpose
                Arriving as finance lead halfway through a budget cycle means owning numbers you did not build and deadlines you did not set. A two-week plan to find out where each department stands, which assumptions were agreed and by whom, and what the board has already been told protects you from presenting something you cannot explain.

                ## Milestones
                1. The current calendar, latest version and version log located.
                2. Short one-to-ones held with the chief executive and each major budget owner.
                3. Agreed assumptions and promises already made to the board listed.
                4. A short note to the chief executive on risks to the timetable and the quality of the numbers.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Within two weeks, a note to the chief executive on the state of the cycle, the agreed assumptions and the risks to the timetable."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Find the current budget calendar, latest version and version log"
                - "Book short one-to-ones with the chief executive and main budget owners"
                - "List assumptions already agreed and figures already shown to the board"
                - "Write a one-page note on timetable risks and number quality"
            - name: Budgeting a new site, product or market launch
              description: |-
                ## Purpose
                Launches break the usual budget method because there is no history to start from and the costs arrive before the revenue. Budgeting the launch as its own line, with set-up costs, a ramp-up curve, an expected break-even month and checkpoints for stopping or scaling, keeps it visible instead of buried in the core business.

                ## Milestones
                1. The launch budgeted as a separate cost centre or project line.
                2. One-off set-up costs separated from running costs.
                3. Revenue ramp-up built month by month from a stated assumption, such as customers per week.
                4. Go, pause or stop checkpoints dated in the budget year.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A separate launch budget with set-up and running costs, a monthly ramp-up and dated go, pause or stop checkpoints, approved with the main budget."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Set up the launch as its own cost centre or project line"
                - "Separate one-off set-up costs from running costs"
                - "Build monthly revenue ramp-up from a stated assumption"
                - "Date the checkpoints for going on, pausing or stopping"
            - name: Budgeting through an acquisition or restructure
              description: |-
                ## Purpose
                An acquisition, merger or restructure in the budget year means teams, cost centres and reporting lines change mid-year, and the budget still has to be comparable. Agreeing whether to budget on the old structure, the new one or both, how to treat integration costs and expected savings, and how to restate the budget when the change lands keeps the numbers meaningful through the upheaval.

                ## Milestones
                1. The structure the budget is built on decided, with the restatement rule if it changes.
                2. Integration or restructuring costs budgeted separately from running costs.
                3. Expected savings budgeted only from the month they are realistically delivered.
                4. A restated budget prepared and approved within a month of the change.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A recorded structure and restatement rule, with integration costs and savings budgeted separately and a restatement completed within a month of the change."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Decide whether to budget on the current or the planned structure"
                - "Budget integration and restructuring costs on their own lines"
                - "Phase expected savings from the month they will really arrive"
                - "Restate the budget within a month of the structure change"
            - name: Strategic initiatives budgeted as separate lines
              description: |-
                ## Purpose
                Strategic projects funded inside departmental budgets tend to be the first thing cut when the department is under pressure, and the board cannot see what it approved. Pulling each initiative out as its own line, with a sponsor, a spend profile and two or three milestones, shows exactly what the strategy costs and lets you stop one without disturbing business as usual.

                ## Milestones
                1. Each strategic initiative listed with a sponsor and a link to the strategic plan.
                2. Spend profiled by month and held outside departmental baselines.
                3. Two or three milestones and a success measure for each initiative.
                4. Initiatives shown as a separate section of the board budget pack.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every strategic initiative has its own budget line, sponsor, monthly spend profile and milestones, shown separately in the board pack."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List strategic initiatives with a sponsor for each"
                - "Move initiative spend out of departmental baselines into its own lines"
                - "Set two or three milestones and a success measure for each"
                - "Review each initiative's spend and milestone status @recurring(quarterly)"
            - name: Activity-based budgeting for support functions
              description: |-
                ## Purpose
                Support functions such as finance, HR, IT and customer service are usually budgeted at last year plus inflation, with no link to the work they do. Budgeting them from activity volumes (invoices processed, tickets handled, starters onboarded) multiplied by a cost per activity shows what growth will cost them and where automation would bend the curve.

                ## Milestones
                1. The main activities of each support function identified with a volume measure.
                2. Current cost per activity worked out from this year's spend and volumes.
                3. Next year's volumes taken from the revenue and headcount budget.
                4. Support budgets built from volume times cost per activity and compared with the incremental version.

                ## Notes
                This is about budgeting the support teams' own costs. Charging those costs out to other departments is a separate allocation exercise.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Support function budgets built from activity volumes and cost per activity, compared with the incremental version and the differences explained."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List the main activities and a volume measure for each support function"
                - "Work out this year's cost per activity"
                - "Take next year's volumes from the revenue and headcount budget"
                - "Refresh activity volumes and unit costs before each kick-off @recurring(yearly)"
            - name: Budget accuracy and sandbagging review over three years
              description: |-
                ## Purpose
                Some departments beat their cost budget by 15 percent every year and others always overspend, and both patterns distort the next build. Comparing three years of original budgets with actual outturns by department shows who pads, who is optimistic and which lines are always wrong, which is the evidence finance needs to challenge submissions fairly.

                ## Milestones
                1. Three years of original budgets and actual outturns lined up by department.
                2. Accuracy measured for each department as a percentage over or under.
                3. Persistent patterns written up with likely causes.
                4. Findings shared privately with each department head and used in the next challenge sessions.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A three-year accuracy comparison by department, with patterns written up and discussed privately with each department head."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Line up three years of original budgets against actual outturns"
                - "Measure each department's percentage over or under budget"
                - "Write up the persistent patterns and likely causes"
                - "Score last year's budget accuracy by department after year end @recurring(yearly)"
            - name: Separating bonus targets from the budget negotiation
              description: |-
                ## Purpose
                When bonuses pay out on beating the budget, every manager has a reason to submit a low number, and the budget becomes a negotiation over targets rather than a plan. Mapping how incentives are tied to the budget, and setting out options such as separate targets or rewards for forecast accuracy, is specialist work done alongside HR and the remuneration committee.

                ## Milestones
                1. Current links between bonus schemes and budget targets mapped.
                2. Evidence of padding from the accuracy review set beside the bonus design.
                3. Two or three alternative designs described with pros and cons.
                4. A recommendation taken to HR and the remuneration committee or chief executive.

                ## Notes
                Pay design has legal and contractual implications. Keep this as an analysis and recommendation, and let HR and legal advisers settle the scheme.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A paper mapping current bonus links to the budget with alternative designs, presented to HR and the remuneration committee or chief executive."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Map which bonus schemes pay out on beating budget figures"
                - "Set the evidence of padding beside the bonus design"
                - "Describe two or three alternative designs with pros and cons"
                - "Present the recommendation to HR and the chief executive"
            - name: Beyond-budgeting review of the annual cycle
              description: |-
                ## Purpose
                Some organisations have dropped the fixed annual budget in favour of relative targets, rolling resource allocation and funding initiatives as they prove themselves. Studying how those models work, and which parts would suit your business, is a call for an experienced finance lead after several cycles, and it often ends in keeping the budget but changing what it is used for.

                ## Milestones
                1. The main beyond-budgeting principles and two published case studies summarised.
                2. The purposes your budget serves today listed: targets, resource allocation, cost control, forecasting.
                3. For each purpose, whether the budget is the best tool assessed.
                4. A recommendation recorded: keep, adapt or replace, with the first change if any.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written review of beyond-budgeting options against each purpose of your current budget, with a keep, adapt or replace recommendation."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Read a summary of beyond-budgeting principles and two case studies"
                - "List what your annual budget is used for today"
                - "Assess whether the budget is the best tool for each use"
                - "Record a keep, adapt or replace recommendation"
---

# Annual Operating Budget Build

This area is for whoever has to deliver next year's operating budget: a founder writing the first one, a manager owning a department's lines, or a finance lead running the cycle across divisions and regions. It starts with the foundations (a calendar worked back from board approval, an owner for every line, a guidelines memo, a clean baseline, top-down targets, a submission workbook and an assumptions register), then the machinery that repeats each cycle, the budgeting skills of drivers, phasing, cost behaviour and cases, the decisions on revenue, gap-closing, contingency and tools, the dated reviews and board approval, situations for founders, new managers, enterprises and new finance leads, and finally specialist work on initiatives, activity-based budgets, accuracy and incentives.

What repeats is the yearly cycle of targets, kick-off, holder letters and a lessons review, with lighter rhythms through the year: a monthly run-rate snapshot, contract renewal check and change log update, and quarterly refreshes of assumptions, owners, risks, contingency and strategic initiatives. The Meeting notes, Metrics log, Risk register, Purchase decision and Board meeting templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
